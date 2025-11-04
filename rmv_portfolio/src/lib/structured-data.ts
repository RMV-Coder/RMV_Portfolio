export const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Raymond Valdepeñas",
  jobTitle: "Full Stack Developer",
  description: "Passionate Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies.",
  url: "https://raymondvaldepenas.dev",
  email: "raymondvaldepenas.dev@gmail.com",
  telephone: "+639667324567",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Tangub City",
    addressCountry: "Philippines"
  },
  sameAs: [
    "https://github.com/RMV-Coder",
    "https://linkedin.com/in/raymond-valdepenas",
    "https://twitter.com/your-handle"
  ],
  knowsAbout: [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "MongoDB",
    "PostgreSQL",
    "Express.js",
    "Tailwind CSS",
    "Git",
    "Docker",
    "AWS",
    "Full Stack Development",
    "Frontend Development",
    "Backend Development",
    "Web Development"
  ],
  worksFor: {
    "@type": "Organization",
    name: "Freelance Developer"
  },
  nationality: {
    "@type": "Country",
    name: "Philippines"
  }
}

export const websiteStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Raymond Valdepeñas Portfolio",
  description: "Portfolio website showcasing the work and skills of Raymond Valdepeñas, a Full Stack Developer from the Philippines.",
  url: "https://raymondvaldepenas.dev",
  author: {
    "@type": "Person",
    name: "Raymond Valdepeñas"
  },
  inLanguage: "en-US",
  copyrightYear: new Date().getFullYear(),
  copyrightHolder: {
    "@type": "Person",
    name: "Raymond Valdepeñas"
  }
}

export const professionalServiceStructuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Raymond Valdepeñas - Web Development Services",
  description: "Professional web development services including frontend, backend, and full-stack development using modern technologies.",
  provider: {
    "@type": "Person",
    name: "Raymond Valdepeñas",
    telephone: "+639667324567",
    email: "raymondvaldepenas.dev@gmail.com"
  },
  areaServed: {
    "@type": "Country",
    name: "Philippines"
  },
  serviceType: [
    "Web Development",
    "Frontend Development", 
    "Backend Development",
    "Full Stack Development",
    "React Development",
    "Next.js Development"
  ]
}