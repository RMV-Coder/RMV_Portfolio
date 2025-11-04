# 🚀 Portfolio Deployment Guide

## Quick Deploy Options

### 1. Vercel (Recommended - Easy)

1. **Connect Repository:**
   ```bash
   # Install Vercel CLI
   npm i -g vercel
   
   # Deploy from project directory
   vercel
   ```

2. **Environment Variables:**
   Add these in Vercel dashboard under Settings > Environment Variables:
   ```
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_SECURE=false
   SMTP_USER=your.email@gmail.com
   SMTP_PASS=your_app_password
   CONTACT_EMAIL=your.email@gmail.com
   SEND_AUTO_REPLY=true
   ```

3. **Custom Domain:**
   - Add your domain in Vercel dashboard
   - Update metadata in `layout.tsx` with your domain

### 2. Netlify

1. **Deploy:**
   ```bash
   # Build the project
   npm run build
   
   # Deploy to Netlify (drag .next folder to Netlify)
   ```

2. **Build Settings:**
   - Build command: `npm run build`
   - Publish directory: `.next`

### 3. Render.com

1. **Connect Repository**
2. **Build Command:** `npm run build`
3. **Start Command:** `npm start`

## Pre-Deployment Checklist

### ✅ Update Personal Information
- [ ] Replace email in contact section
- [ ] Update phone number
- [ ] Set correct location
- [ ] Add your GitHub username
- [ ] Update social media links
- [ ] Add your actual resume.pdf

### ✅ Content Updates
- [ ] Professional bio in About section
- [ ] Real project descriptions
- [ ] Accurate skills and experience levels
- [ ] Professional profile photo
- [ ] Company/freelance information

### ✅ Technical Configuration
- [ ] Environment variables set
- [ ] Domain in metadata updated
- [ ] SMTP email service configured
- [ ] GitHub API rate limits considered
- [ ] Error tracking setup (optional)

## Environment Variables Setup

### Gmail SMTP Setup:
1. Enable 2-Factor Authentication
2. Generate App Password:
   - Google Account > Security > App passwords
   - Select app: Mail
   - Copy generated password
3. Use app password (not regular password) in `SMTP_PASS`

### Environment File (.env.local):
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your.email@gmail.com
SMTP_PASS=your_16_character_app_password
CONTACT_EMAIL=your.email@gmail.com
SEND_AUTO_REPLY=true
```

## Domain & DNS Configuration

### Custom Domain Setup:
1. **Purchase Domain** (Namecheap, GoDaddy, etc.)
2. **DNS Records:**
   ```
   Type: A     Name: @     Value: [Vercel IP]
   Type: CNAME Name: www   Value: yourdomain.com
   ```
3. **Update Code:**
   - Change `https://raymondvaldepenas.dev` to your domain
   - Update in `layout.tsx`, `sitemap.ts`, `robots.ts`

## Performance Optimization

### Image Optimization:
- Add your profile photo as `public/profile.jpg`
- Keep images under 500KB
- Use WebP format when possible

### Bundle Analysis:
```bash
# Analyze bundle size
ANALYZE=true npm run build
```

## Monitoring & Analytics

### Optional Additions:
1. **Google Analytics:**
   ```tsx
   // Add to layout.tsx
   <Script src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID" />
   ```

2. **Error Monitoring:**
   - Sentry
   - LogRocket
   - Bugsnag

3. **Performance Monitoring:**
   - Vercel Analytics
   - Google PageSpeed Insights
   - GTmetrix

## Post-Deployment

### ✅ Final Verification:
- [ ] All pages load correctly
- [ ] Contact form sends emails
- [ ] Resume downloads work
- [ ] Mobile responsive
- [ ] SSL certificate active
- [ ] SEO meta tags visible
- [ ] Social media previews work

### 🔄 Maintenance:
- Regular dependency updates
- Content updates
- Performance monitoring
- Security updates
- Backup strategy

---

## Troubleshooting

### Common Issues:
1. **Contact form not working:**
   - Check environment variables
   - Verify SMTP credentials
   - Check email spam folder

2. **Build failures:**
   - Clear .next folder: `rm -rf .next`
   - Reinstall dependencies: `npm ci`

3. **Performance issues:**
   - Enable image optimization
   - Check bundle size with analyzer
   - Optimize animations

### Support:
- Next.js docs: https://nextjs.org/docs
- Vercel support: https://vercel.com/support
- Community: Stack Overflow, Discord