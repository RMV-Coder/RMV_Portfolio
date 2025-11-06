# Analytics Setup

This portfolio uses **Google Analytics 4** for free website analytics.

## 🚀 Quick Setup

1. **Get Google Analytics ID**:
   - Go to [Google Analytics](https://analytics.google.com/)
   - Create account → Create property → Get Measurement ID (G-XXXXXXXXXX)

2. **Add to Environment Variables**:
   ```bash
   # In .env.local
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```

3. **Deploy and View Analytics**:
   - Deploy your site
   - Analytics data appears within 24-48 hours

## 📊 What's Tracked

- **Page views** (automatic)
- **Resume downloads** 
- **Contact form submissions**
- **Project clicks**
- **Social media clicks**

## 🔧 Implementation

We use the official Next.js approach with `@next/third-parties/google`:

```tsx
import { GoogleAnalytics } from '@next/third-parties/google'

<GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
```

Custom events are tracked with:

```tsx
import { trackResumeDownload, trackContactFormSubmit } from '@/lib/analytics'

// Track resume download
trackResumeDownload()

// Track contact form submission  
trackContactFormSubmit()
```

## 📈 View Your Analytics

Once set up, view your data at:
- [Google Analytics Dashboard](https://analytics.google.com/)

---

**Simple, effective, and follows Next.js best practices!** 🎯