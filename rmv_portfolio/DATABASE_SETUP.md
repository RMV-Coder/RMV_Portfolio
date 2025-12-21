# Portfolio Rating System - Database Setup Guide

This guide will help you set up a database to store portfolio ratings. I recommend **Vercel Postgres** for seamless integration with your Vercel deployment.

## Option 1: Vercel Postgres (Recommended)

### Step 1: Create Vercel Postgres Database

1. Go to your Vercel Dashboard: https://vercel.com/dashboard
2. Navigate to the "Storage" tab
3. Click "Create Database"
4. Select "Postgres"
5. Choose a name: `portfolio-ratings-db`
6. Select region: Choose closest to your target audience (e.g., US East for global)
7. Click "Create"

### Step 2: Connect to Your Project

1. In the database dashboard, click "Connect Project"
2. Select your portfolio project
3. Click "Connect"
4. Vercel will automatically add environment variables to your project:
   - `POSTGRES_URL`
   - `POSTGRES_PRISMA_URL`
   - `POSTGRES_URL_NON_POOLING`
   - `POSTGRES_USER`
   - `POSTGRES_HOST`
   - `POSTGRES_PASSWORD`
   - `POSTGRES_DATABASE`

### Step 3: Install Dependencies

```bash
cd rmv_portfolio
npm install @vercel/postgres
npm install -D @types/node
```

### Step 4: Create Database Schema

Run this SQL in the Vercel Postgres Query tab:

```sql
CREATE TABLE IF NOT EXISTS portfolio_ratings (
  id SERIAL PRIMARY KEY,
  rating_uiux INTEGER CHECK (rating_uiux >= 0 AND rating_uiux <= 5),
  rating_performance INTEGER CHECK (rating_performance >= 0 AND rating_performance <= 5),
  rating_content INTEGER CHECK (rating_content >= 0 AND rating_content <= 5),
  rating_code_quality INTEGER CHECK (rating_code_quality >= 0 AND rating_code_quality <= 5),
  rating_overall INTEGER NOT NULL CHECK (rating_overall >= 1 AND rating_overall <= 5),
  feedback TEXT,
  ip_address VARCHAR(45),
  user_agent TEXT,
  location VARCHAR(255),
  country VARCHAR(100),
  city VARCHAR(100),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create index for faster queries
CREATE INDEX idx_created_at ON portfolio_ratings(created_at DESC);
CREATE INDEX idx_rating_overall ON portfolio_ratings(rating_overall);

-- Create view for analytics
CREATE VIEW rating_statistics AS
SELECT 
  COUNT(*) as total_ratings,
  ROUND(AVG(rating_overall), 2) as avg_overall,
  ROUND(AVG(NULLIF(rating_uiux, 0)), 2) as avg_uiux,
  ROUND(AVG(NULLIF(rating_performance, 0)), 2) as avg_performance,
  ROUND(AVG(NULLIF(rating_content, 0)), 2) as avg_content,
  ROUND(AVG(NULLIF(rating_code_quality, 0)), 2) as avg_code_quality,
  COUNT(CASE WHEN rating_overall = 5 THEN 1 END) as five_star_count,
  COUNT(CASE WHEN rating_overall = 4 THEN 1 END) as four_star_count,
  COUNT(CASE WHEN rating_overall = 3 THEN 1 END) as three_star_count,
  COUNT(CASE WHEN rating_overall = 2 THEN 1 END) as two_star_count,
  COUNT(CASE WHEN rating_overall = 1 THEN 1 END) as one_star_count
FROM portfolio_ratings;
```

### Step 5: Update API Route

Replace the TODO comment in `src/app/api/submit-rating/route.ts`:

```typescript
// Add this import at the top
import { sql } from '@vercel/postgres';

// Replace the TODO comment with this code:
try {
  await sql`
    INSERT INTO portfolio_ratings (
      rating_uiux,
      rating_performance,
      rating_content,
      rating_code_quality,
      rating_overall,
      feedback,
      ip_address,
      user_agent,
      location,
      country,
      city
    ) VALUES (
      ${data.categories.uiux},
      ${data.categories.performance},
      ${data.categories.content},
      ${data.categories.codeQuality},
      ${data.categories.overall},
      ${data.feedback || null},
      ${ip},
      ${userAgent},
      ${city}, ${country},
      ${country},
      ${city}
    )
  `;
} catch (dbError) {
  console.error('Database error:', dbError);
  // Email will still be sent even if DB fails
}
```

### Step 6: View Your Ratings

Query your ratings anytime:

```sql
-- Get all ratings
SELECT * FROM portfolio_ratings ORDER BY created_at DESC;

-- Get statistics
SELECT * FROM rating_statistics;

-- Get recent feedback
SELECT 
  rating_overall,
  feedback,
  location,
  created_at 
FROM portfolio_ratings 
WHERE feedback IS NOT NULL AND feedback != ''
ORDER BY created_at DESC
LIMIT 10;
```

---

## Option 2: Supabase (Alternative)

### Step 1: Create Supabase Project

1. Go to https://supabase.com
2. Sign in with GitHub
3. Click "New Project"
4. Fill in details:
   - Name: `portfolio-ratings`
   - Database Password: (generate strong password)
   - Region: Choose closest to your audience
5. Wait for setup to complete (~2 minutes)

### Step 2: Create Table

1. Go to "Table Editor" in Supabase dashboard
2. Click "New Table"
3. Name: `portfolio_ratings`
4. Add columns:
   - `id` (int8, primary key, auto-increment)
   - `rating_uiux` (int2)
   - `rating_performance` (int2)
   - `rating_content` (int2)
   - `rating_code_quality` (int2)
   - `rating_overall` (int2, not null)
   - `feedback` (text)
   - `ip_address` (varchar)
   - `user_agent` (text)
   - `location` (varchar)
   - `country` (varchar)
   - `city` (varchar)
   - `created_at` (timestamptz, default: now())
5. Click "Save"

### Step 3: Get API Keys

1. Go to "Settings" → "API"
2. Copy these to your `.env.local`:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your-project-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
   ```

### Step 4: Install Supabase Client

```bash
npm install @supabase/supabase-js
```

### Step 5: Create Supabase Client

Create `src/lib/supabase.ts`:

```typescript
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
```

### Step 6: Update API Route

Replace TODO in `route.ts`:

```typescript
import { supabase } from '@/lib/supabase';

// Replace TODO with:
try {
  const { error: dbError } = await supabase
    .from('portfolio_ratings')
    .insert({
      rating_uiux: data.categories.uiux,
      rating_performance: data.categories.performance,
      rating_content: data.categories.content,
      rating_code_quality: data.categories.codeQuality,
      rating_overall: data.categories.overall,
      feedback: data.feedback || null,
      ip_address: ip,
      user_agent: userAgent,
      location: `${city}, ${country}`,
      country,
      city,
    });

  if (dbError) {
    console.error('Supabase error:', dbError);
  }
} catch (dbError) {
  console.error('Database error:', dbError);
}
```

---

## Analytics & Reporting

### Create Analytics Dashboard Page (Optional)

Create `src/app/admin/ratings/page.tsx`:

```typescript
import { sql } from '@vercel/postgres';

export default async function RatingsAdminPage() {
  const { rows: stats } = await sql`SELECT * FROM rating_statistics`;
  const { rows: recent } = await sql`
    SELECT * FROM portfolio_ratings 
    ORDER BY created_at DESC 
    LIMIT 20
  `;

  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-8">Portfolio Ratings Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="p-6 border rounded-lg">
          <h3 className="text-sm font-medium text-muted-foreground">Total Ratings</h3>
          <p className="text-4xl font-bold mt-2">{stats[0].total_ratings}</p>
        </div>
        <div className="p-6 border rounded-lg">
          <h3 className="text-sm font-medium text-muted-foreground">Average Rating</h3>
          <p className="text-4xl font-bold mt-2">{stats[0].avg_overall}/5</p>
        </div>
        <div className="p-6 border rounded-lg">
          <h3 className="text-sm font-medium text-muted-foreground">5-Star Ratings</h3>
          <p className="text-4xl font-bold mt-2">{stats[0].five_star_count}</p>
        </div>
      </div>

      <div className="border rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Recent Ratings</h2>
        <div className="space-y-4">
          {recent.map((rating) => (
            <div key={rating.id} className="border-b pb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium">Overall: {rating.rating_overall}/5</span>
                <span className="text-sm text-muted-foreground">
                  {new Date(rating.created_at).toLocaleDateString()}
                </span>
              </div>
              {rating.feedback && (
                <p className="text-sm text-muted-foreground">{rating.feedback}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
```

---

## Environment Variables Summary

Add to `.env.local`:

### For Vercel Postgres:
```bash
# Automatically added by Vercel when you connect the database
POSTGRES_URL="postgres://..."
POSTGRES_PRISMA_URL="postgres://..."
POSTGRES_URL_NON_POOLING="postgres://..."
POSTGRES_USER="..."
POSTGRES_HOST="..."
POSTGRES_PASSWORD="..."
POSTGRES_DATABASE="..."
```

### For Supabase:
```bash
NEXT_PUBLIC_SUPABASE_URL="https://your-project.supabase.co"
NEXT_PUBLIC_SUPABASE_ANON_KEY="your-anon-key"
```

---

## Testing the System

1. **Local Testing:**
   ```bash
   npm run dev
   ```
   - Scroll to bottom of page
   - Rate portfolio button should appear
   - Fill out rating form
   - Check your email for notification
   - Verify data in database

2. **Production Testing:**
   - Deploy to Vercel: `git push`
   - Visit your live site
   - Test rating system
   - Check Vercel Postgres Query tab for data

---

## Security Notes

✅ **Rate limiting implemented** - Max 3 submissions per IP per hour
✅ **Input validation** - Zod schema validates all inputs
✅ **SQL injection prevention** - Using parameterized queries
✅ **XSS protection** - Feedback sanitized in email HTML
✅ **Privacy** - IP addresses stored for anti-spam only

---

## Next Steps

1. Choose database option (Vercel Postgres recommended)
2. Follow setup steps above
3. Update API route with database code
4. Test locally
5. Deploy to production
6. Monitor ratings via database queries or admin dashboard

---

**Questions?** Check the API route at `src/app/api/submit-rating/route.ts` for implementation details.
