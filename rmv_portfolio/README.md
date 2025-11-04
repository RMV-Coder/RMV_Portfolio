# 🌟 Raymond Valdepeñas - Portfolio Website

A modern, responsive portfolio website built with Next.js 15, showcasing my skills as a Full Stack Developer with expertise in web development, embedded systems, and AI/ML technologies.

## 🚀 Live Demo

Visit the live portfolio: [raymondvaldepenas.dev](https://raymondvaldepenas-dev.vercel.app)

## ✨ Features

### 🎨 **Modern Design**
- Clean, professional interface
- Dark/Light theme toggle
- Smooth animations with Framer Motion
- Responsive design for all devices

### 🛠 **Technical Highlights**
- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **React Hook Form** with Zod validation
- **SWR** for data fetching

### 📊 **Dynamic Content**
- GitHub API integration for live project data
- Real-time project filtering and search
- Dynamic skills showcase with categorization
- Interactive contact form with email notifications

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
