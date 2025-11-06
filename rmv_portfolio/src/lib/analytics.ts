// Google Analytics event tracking utilities
// Uses the gtag function injected by @next/third-parties/google

// Declare gtag function
declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

// Check if gtag is available
const isGtagAvailable = () => {
  return typeof window !== 'undefined' && 'gtag' in window;
}

// Track custom events
export const trackEvent = (eventName: string, parameters?: Record<string, unknown>) => {
  if (isGtagAvailable()) {
    window.gtag('event', eventName, parameters);
  }
}

// Specific tracking functions for your portfolio
export const trackResumeDownload = () => {
  trackEvent('file_download', {
    file_name: 'Raymond_Valdepenas_Resume.pdf',
    file_extension: 'pdf',
    event_category: 'engagement',
    event_label: 'resume_download'
  });
}

export const trackContactFormSubmit = () => {
  trackEvent('form_submit', {
    form_id: 'contact_form',
    event_category: 'engagement',
    event_label: 'contact_form_submission'
  });
}

export const trackProjectClick = (projectName: string) => {
  trackEvent('click', {
    event_category: 'project',
    event_label: projectName,
    value: 1
  });
}

export const trackSocialClick = (platform: string) => {
  trackEvent('click', {
    event_category: 'social',
    event_label: platform,
    value: 1
  });
}

// Optional: Track page sections viewed (for measuring engagement)
export const trackSectionView = (sectionName: string) => {
  trackEvent('scroll', {
    event_category: 'engagement',
    event_label: `section_${sectionName}`,
    value: 1
  });
}