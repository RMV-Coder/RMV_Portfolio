# Prisma PostgreSQL Setup Guide for Vercel

## Step 1: Install Prisma

```bash
cd rmv_portfolio
npm install @prisma/client
npm install -D prisma
```

## Step 2: Verify Vercel Postgres Connection

Your Vercel Postgres should have automatically added these environment variables:

- `POSTGRES_URL` - Direct connection (for migrations)
- `POSTGRES_PRISMA_URL` - Pooled connection (for app queries)
- `POSTGRES_URL_NON_POOLING` - Non-pooled direct connection

**Check `.env.local`:** Make sure these variables exist. If not, copy them from your Vercel project dashboard.

## Step 3: Initialize Prisma Migration

Run this command to create the database table:

```bash
npx prisma migrate dev --name init
```

This will:
- Create the `portfolio_ratings` table in your database
- Generate Prisma Client types
- Create a migration file in `prisma/migrations/`

## Step 4: Generate Prisma Client

After any schema changes, regenerate the client:

```bash
npx prisma generate
```

## Step 5: Test Locally

```bash
npm run dev
```

Test the rating system - ratings should now be saved to your database!

## Step 6: View Database Data

### Using Prisma Studio (Local UI)

```bash
npx prisma studio
```

This opens a browser UI at `http://localhost:5555` where you can:
- View all ratings
- Edit data
- Run queries
- Delete entries

### Using Vercel Dashboard

1. Go to your Vercel project
2. Click "Storage" tab
3. Select your Postgres database
4. Click "Data" to browse
5. Click "Query" to run SQL

### Example Queries

```sql
-- View all ratings
SELECT * FROM portfolio_ratings ORDER BY "createdAt" DESC;

-- Get statistics
SELECT 
  COUNT(*) as total_ratings,
  ROUND(AVG(overall), 2) as avg_overall,
  ROUND(AVG(NULLIF(uiux, 0)), 2) as avg_uiux,
  ROUND(AVG(NULLIF(performance, 0)), 2) as avg_performance,
  ROUND(AVG(NULLIF(content, 0)), 2) as avg_content
FROM portfolio_ratings;

-- Get recent feedback
SELECT 
  overall,
  feedback,
  location,
  "createdAt"
FROM portfolio_ratings 
WHERE feedback IS NOT NULL AND feedback != ''
ORDER BY "createdAt" DESC
LIMIT 10;

-- Count ratings by score
SELECT 
  overall,
  COUNT(*) as count
FROM portfolio_ratings
GROUP BY overall
ORDER BY overall DESC;
```

## Step 7: Deploy to Vercel

### Set Vercel Environment Variables

In your Vercel project settings, ensure these are set:

1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. The Postgres variables should already be there (added automatically when you created the database)
3. Verify these exist:
   - `POSTGRES_URL`
   - `POSTGRES_PRISMA_URL`
   - `POSTGRES_URL_NON_POOLING`

### Deploy

```bash
git add .
git commit -m "feat(database): integrate Prisma PostgreSQL for rating storage"
git push
```

Vercel will automatically:
- Install Prisma dependencies
- Generate Prisma Client
- Connect to your Postgres database

## Common Commands

```bash
# View database in browser UI
npx prisma studio

# Generate Prisma Client (after schema changes)
npx prisma generate

# Create a new migration (after schema changes)
npx prisma migrate dev --name migration_name

# Reset database (DANGER: deletes all data)
npx prisma migrate reset

# Check migration status
npx prisma migrate status

# Format schema file
npx prisma format

# Validate schema
npx prisma validate
```

## Troubleshooting

### Error: "Environment variable not found: POSTGRES_PRISMA_URL"

**Solution:** Copy the environment variables from Vercel to your `.env.local`:

1. Vercel Dashboard → Your Project → Settings → Environment Variables
2. Click the three dots → "Download .env.local"
3. Copy the Postgres variables to your local `.env.local`

### Error: "Can't reach database server"

**Solutions:**
- Check if Vercel Postgres is running (Vercel Dashboard → Storage)
- Verify environment variables are correct
- Make sure you're not hitting connection limits (free tier: 60 connections)

### Migration fails with "relation already exists"

**Solution:** Your database might already have the table. Either:
- Drop the existing table manually
- Or run: `npx prisma db push` (syncs schema without migrations)

### Prisma Client not found

**Solution:**
```bash
npx prisma generate
npm run build
```

## Analytics Dashboard (Optional)

Create `src/app/admin/ratings/page.tsx` to view statistics:

```typescript
import prisma from '@/lib/prisma'

export default async function RatingsAdminPage() {
  // Get statistics
  const totalRatings = await prisma.portfolioRating.count()
  
  const avgRatings = await prisma.portfolioRating.aggregate({
    _avg: {
      overall: true,
      uiux: true,
      performance: true,
      content: true,
    },
  })

  // Get recent ratings
  const recentRatings = await prisma.portfolioRating.findMany({
    take: 20,
    orderBy: { createdAt: 'desc' },
  })

  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-8">Portfolio Ratings Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="p-6 border rounded-lg">
          <h3 className="text-sm font-medium text-muted-foreground">Total Ratings</h3>
          <p className="text-4xl font-bold mt-2">{totalRatings}</p>
        </div>
        <div className="p-6 border rounded-lg">
          <h3 className="text-sm font-medium text-muted-foreground">Average Rating</h3>
          <p className="text-4xl font-bold mt-2">
            {avgRatings._avg.overall?.toFixed(2)}/5
          </p>
        </div>
        <div className="p-6 border rounded-lg">
          <h3 className="text-sm font-medium text-muted-foreground">Avg UI/UX</h3>
          <p className="text-4xl font-bold mt-2">
            {avgRatings._avg.uiux?.toFixed(2)}/5
          </p>
        </div>
      </div>

      <div className="border rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Recent Ratings</h2>
        <div className="space-y-4">
          {recentRatings.map((rating) => (
            <div key={rating.id} className="border-b pb-4 last:border-b-0">
              <div className="flex items-center justify-between mb-2">
                <div className="flex gap-4">
                  <span className="font-medium">Overall: {rating.overall}/5</span>
                  {rating.uiux > 0 && <span className="text-sm text-muted-foreground">UI/UX: {rating.uiux}/5</span>}
                  {rating.performance > 0 && <span className="text-sm text-muted-foreground">Perf: {rating.performance}/5</span>}
                  {rating.content > 0 && <span className="text-sm text-muted-foreground">Content: {rating.content}/5</span>}
                </div>
                <span className="text-sm text-muted-foreground">
                  {new Date(rating.createdAt).toLocaleDateString()}
                </span>
              </div>
              {rating.feedback && (
                <p className="text-sm text-muted-foreground">{rating.feedback}</p>
              )}
              <p className="text-xs text-muted-foreground mt-1">{rating.location}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
```

Access at: `http://localhost:3000/admin/ratings`

## Security Notes

✅ **Connection pooling** - Uses `POSTGRES_PRISMA_URL` for efficient connections
✅ **Type safety** - Prisma generates TypeScript types automatically
✅ **SQL injection prevention** - Prisma parameterizes all queries
✅ **Migration safety** - All schema changes tracked in version control

## Next Steps

1. Run migrations: `npx prisma migrate dev --name init`
2. Test locally with `npm run dev`
3. Submit a test rating
4. View data: `npx prisma studio`
5. Deploy to Vercel: `git push`
6. Verify production works

Your rating system is now backed by a real database! 🎉
