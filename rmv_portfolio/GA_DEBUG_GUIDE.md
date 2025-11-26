# Google Analytics Debug Guide

## ✅ What Was Fixed

### 1. Missing Event Tracking
- **Added tracking to project cards**: Both "Code" and "Live Demo" links now track clicks
- **Added tracking to social links**: All social media icons (GitHub, LinkedIn, Email, Twitter) now track clicks
- **Fixed environment variable**: Removed quotes from `NEXT_PUBLIC_GA_ID` in `.env.local`

### 2. Existing Working Tracking
- ✅ Resume download tracking (in `about-section.tsx`)
- ✅ Contact form submission tracking (in `contact-section.tsx`)

## 🔍 How to Debug Google Analytics

### Step 1: Verify Local Environment
```bash
# Check your .env.local file has:
NEXT_PUBLIC_GA_ID=G-GS52VWBYH9
```
**Note**: No quotes around the GA ID!

### Step 2: Test Tracking in Browser Console

1. **Open your portfolio website**
2. **Open browser DevTools** (F12)
3. **Go to Console tab**
4. **Run this command**:
```javascript
window.gtag
```
- If it returns a function → ✅ GA is loaded
- If it returns undefined → ❌ GA not loaded (check environment variable)

5. **Check tracking events**:
```javascript
// This should be available on your page
window.gtag('event', 'test_event', { test: 'manual' })
```

### Step 3: Use GA DebugView (RECOMMENDED)

1. **Enable debug mode** in your browser:
   - Install [Google Analytics Debugger Extension](https://chrome.google.com/webstore/detail/google-analytics-debugger/jnkmfdileelhofjcijamephohjechhna)
   - OR add `?debug_mode=true` to your URL: `https://your-site.vercel.app?debug_mode=true`

2. **Open Google Analytics**:
   - Go to [Google Analytics](https://analytics.google.com)
   - Select your property (G-GS52VWBYH9)
   - Go to **Admin → DebugView** (left sidebar)

3. **Test events in real-time**:
   - Click your resume download button → Should see `file_download` event
   - Click a project link → Should see `click` event with `event_category: Project`
   - Click a social icon → Should see `click` event with `event_category: Social`
   - Submit contact form → Should see `form_submit` event

### Step 4: Check Network Requests

1. **Open DevTools → Network tab**
2. **Filter by**: `/collect` or `google-analytics`
3. **Perform an action** (click resume, submit form, etc.)
4. **Look for requests** to:
   - `https://www.google-analytics.com/g/collect?...`
   - Should include your GA ID: `G-GS52VWBYH9`

### Step 5: Verify Vercel Environment Variable

**CRITICAL**: Your local `.env.local` won't work in production!

1. **Go to Vercel Dashboard**:
   - Visit: https://vercel.com/your-username/rmv-portfolio/settings/environment-variables

2. **Add environment variable**:
   ```
   Key: NEXT_PUBLIC_GA_ID
   Value: G-GS52VWBYH9
   Environment: Production, Preview, Development (select all)
   ```

3. **Redeploy** after adding the variable:
   ```bash
   # Push a commit or manually trigger redeploy
   git commit --allow-empty -m "Trigger redeploy for GA env var"
   git push
   ```

### Step 6: Wait for Data Processing

⏰ **Google Analytics can take 24-48 hours to show data**

However, **DebugView shows real-time data immediately** (use Step 3)!

## 🚫 Common Issues

### Issue 1: "0 users" in Reports
**Solution**: 
- Check DebugView instead (real-time)
- Wait 24-48 hours for Reports to populate
- Verify environment variable is set in Vercel

### Issue 2: "gtag is not defined"
**Solution**:
```bash
# Check your layout.tsx has:
import { GoogleAnalytics } from '@next/third-parties/google'

<GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || ''} />
```

### Issue 3: Tracking Works Locally but Not in Production
**Solution**:
1. Add `NEXT_PUBLIC_GA_ID` to Vercel environment variables
2. Redeploy
3. Check browser console on production site for gtag function

### Issue 4: Ad Blockers Blocking GA
**Solution**:
- Test in incognito mode with ad blockers disabled
- Use browser extensions like "uBlock Origin" detection bypass
- Consider Vercel Analytics as alternative (privacy-friendly)

### Issue 5: Cookie Consent Blocking
If you implement cookie consent banners, ensure:
```javascript
// GA only loads after consent
if (userConsentedToCookies) {
  window.gtag('consent', 'update', {
    analytics_storage: 'granted'
  })
}
```

## 📊 What Gets Tracked

### Page Views
- **Automatic**: Every page visit is tracked by default
- **View**: GA → Reports → Realtime → Events → `page_view`

### Custom Events

#### 1. Resume Download
```typescript
trackResumeDownload()
// Event: file_download
// Category: File
// Label: Resume PDF
```

#### 2. Contact Form Submit
```typescript
trackContactFormSubmit()
// Event: form_submit
// Category: Form
// Label: Contact Form
```

#### 3. Project Clicks
```typescript
trackProjectClick('project-name')
// Event: click
// Category: Project
// Label: {project name}
```

#### 4. Social Link Clicks
```typescript
trackSocialClick('GitHub')
// Event: click
// Category: Social
// Label: {platform name}
```

## 🎯 Testing Checklist

Run through these actions on your site:

- [ ] Click resume download button
- [ ] Submit contact form
- [ ] Click "Code" link on a project card
- [ ] Click "Live Demo" link on a project card
- [ ] Click GitHub social icon
- [ ] Click LinkedIn social icon
- [ ] Click Email social icon
- [ ] Click Twitter social icon

**Each action should appear in GA DebugView within seconds!**

## 🔧 Advanced Debugging

### Check if gtag is sending events:
```javascript
// Override gtag to log all calls
const originalGtag = window.gtag
window.gtag = function(...args) {
  console.log('gtag called:', args)
  if (originalGtag) originalGtag.apply(window, args)
}
```

### Monitor all tracking calls:
```javascript
// Add this to your browser console
window.addEventListener('beforeunload', () => {
  console.log('Page is closing - check if events were sent')
})
```

## 📱 Alternative: Vercel Analytics

If GA continues to have issues (due to ad blockers, privacy extensions, etc.), consider using **Vercel Analytics**:

```bash
npm install @vercel/analytics
```

```tsx
// app/layout.tsx
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

**Benefits**:
- Privacy-friendly (no cookies)
- Not blocked by ad blockers
- Automatic page view tracking
- Built-in dashboard in Vercel

## 📚 Resources

- [Google Analytics DebugView](https://support.google.com/analytics/answer/7201382)
- [Next.js Third-Party Libraries](https://nextjs.org/docs/app/building-your-application/optimizing/third-party-libraries#google-analytics)
- [GA4 Event Reference](https://developers.google.com/analytics/devguides/collection/ga4/events)
- [Vercel Analytics Docs](https://vercel.com/docs/analytics)

---

## 🎉 Quick Win Test

**RIGHT NOW** - Open your browser console on your site and run:
```javascript
window.gtag('event', 'test_success', { message: 'GA is working!' })
```

Then check Google Analytics → Admin → DebugView.  
**If you see `test_success` event appear** → ✅ Everything is working!
