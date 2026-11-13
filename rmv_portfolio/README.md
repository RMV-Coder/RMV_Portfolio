# 🌟 Raymond Valdepeñas - Portfolio Website

The portfolio of Raymond Valdepeñas, built with Next.js 16. It leads with the products rather than the tech stack: a 3D study in which every object is one of the products, a tools page where each one can be tried in the browser, and a résumé that is shared on request instead of posted publicly.

## 🚀 Live Demo

Visit the live portfolio: [raymondvaldepenas.dev](https://raymondvaldepenas-dev.vercel.app)

## ✨ Features

### 🎨 **Design: "Forge"**
- A maker's workbench: warm charcoal, an ember accent, blueprint annotations
- A 3D cutaway study (three.js): a maker's room that draws itself as a blueprint and fills in, where each object is a product and shows what it does when you point at it. Lamp-lit at night in the dark theme, morning light in the light theme
- Scroll-driven motion (anime.js), including a pinned sketch-to-shipped story
- Dark and light themes, fully responsive, and everything works with motion turned off

### 🛠 **Technical Highlights**
- **Next.js 16** with App Router (the home page is a server component; interactivity arrives as islands)
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **three.js** and **anime.js** for the 3D scene and scroll motion
- **React Hook Form** with Zod validation
- **SWR** for data fetching

### 📊 **What's on it**
- `/tools`: every tool with an interactive demo, real screenshots, and download buttons read live from GitHub Releases
- Résumé on request: visitors ask, the owner approves, and a private expiring link is emailed (see below)
- `/admin`: a password-protected page for reviewing résumé requests
- Contact form with one-tap starters and email notifications
- `/research`: the full citation for the published paper

### ⚡ **Performance Optimized**
- Server-side rendering (SSR)
- Code splitting with dynamic imports
- Image optimization with Next.js Image
- SEO optimized with structured data

## 🛠 **Technologies Used**

### **Frontend**
- Next.js 15, React 18, TypeScript
- Tailwind CSS, Framer Motion
- React Hook Form, Zod validation
- SWR, Axios

### **Backend & APIs**
- Next.js API Routes
- Nodemailer for email
- GitHub API integration
- Rate limiting and caching

## 🚀 **Getting Started**

### Prerequisites
- Node.js 18+ and npm
- Git

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/RMV-Coder/RMV_Portfolio.git
   cd RMV_Portfolio/rmv_portfolio
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**
   ```bash
   cp .env.example .env.local
   ```
   Edit `.env.local` with your configuration:
   ```env
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your.email@gmail.com
   SMTP_PASS=your_app_password
   CONTACT_EMAIL=your.email@gmail.com
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open [http://localhost:3000](http://localhost:3000)**

## 📝 **Customization Guide**

### **Personal Information**
1. Update contact details in `src/components/contact-section.tsx`
2. Replace bio content in `src/components/about-section.tsx`
3. Add your skills in `src/data/skills.tsx`
4. Update social links throughout components

### **Content**
1. Add your resume as `public/resume.pdf`
2. Replace profile photo in `public/` directory
3. Update metadata in `src/app/layout.tsx`

## 🚀 **Deployment**

### **Vercel (Recommended)**
1. Connect your GitHub repository to Vercel
2. Add environment variables in dashboard
3. Deploy automatically on push

See detailed deployment guide in [DEPLOYMENT.md](./DEPLOYMENT.md)

## 📞 **Contact**

- **Email:** raymondvaldepenas.dev@gmail.com
- **GitHub:** [@RMV-Coder](https://github.com/RMV-Coder)
- **Location:** Tangub City, Philippines

---

**Built with ❤️ by Raymond Valdepeñas**

## Résumé on request

The résumé is not a public file. It lives in `private/resume.pdf` (outside `public/`, so no URL serves it) and is handed out one approved request at a time.

**How it works**

1. A visitor fills in the request form (name, email, reason, a short note).
2. The request is saved and you get an email with a **Review request** button.
3. You approve or decline, either from that email link (no sign-in needed, good for one decision) or from `/admin`.
4. Approval emails the requester a personal link that works for 14 days and 5 downloads. Declining sends nothing unless you tick the box.

**One-time setup**

1. Apply the database migration that adds the `resume_requests` table:
   ```bash
   npx prisma migrate deploy
   ```
2. Add two environment variables (locally in `.env.local`, and in the Vercel project):
   - `RESUME_SIGNING_SECRET`: 32+ random characters. Generate one with
     `node -e "console.log(require('crypto').randomBytes(48).toString('base64url'))"`
   - `ADMIN_PASSWORD`: a passphrase of at least 16 characters, used to sign in at `/admin`.
3. Make sure `SMTP_*` and `CONTACT_EMAIL` are set, so the notification and approval emails can be sent.

Without `PRISMA_DATABASE_URL`, local development keeps requests in memory and prints emails to the server log, so the whole flow can be tried with nothing configured. Production never falls back to memory.

**Replacing the résumé:** overwrite `private/resume.pdf` and redeploy. Existing approved links serve the new file.

## Adding or editing a tool

Everything on `/tools` and in the 3D study comes from `src/data/tools.ts`. Each entry holds the plain-language copy, status, links and release repository. An interactive demo lives in `src/components/tools/demos/` and is registered in `src/components/tools/tool-demo.tsx`.

The 3D scene is in `src/components/forge/`:

- `scene/products/<slug>.ts` builds one object, and `scene/products.ts` registers it under its tool slug.
- `scene/office.ts` is the room on the home page. Its `OFFICE_ANCHORS` table says where each object stands, so a new tool needs a line there.
- `scene/shelf.ts` is the shelf on `/tools`. Its `PLACEMENT` table sets each object's size on the shelf.
- `scene/kit.ts` supplies every material (so the theme cross-fade and the build-up effect apply to everything), and `scene/types.ts` is the contract between these files.
- `office-scene.tsx` runs it all: camera fitting, the entrance, hovering and name tags.

A tool without a 3D object is simply left out of the scene; its chip and its section still work.
