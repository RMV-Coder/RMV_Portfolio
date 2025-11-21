// Google Analytics event tracking utilities
// Uses sendGAEvent from @next/third-parties/google

import { sendGAEvent } from '@next/third-parties/google'

// Track resume download
export const trackResumeDownload = async () => {
  // Track in Google Analytics
  sendGAEvent('event', 'file_download', {
    file_name: 'Raymond_Valdepenas_Resume.pdf',
    file_extension: 'pdf',
    event_category: 'engagement',
    event_label: 'resume_download'
  })

  // Send notification email with user details
  try {
    await fetch('/api/track-download', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
  } catch (error) {
    // Fail silently - don't block download
    console.error('Failed to track download:', error)
  }
}

// Track contact form submission
export const trackContactFormSubmit = () => {
  sendGAEvent('event', 'form_submit', {
    form_id: 'contact_form',
    event_category: 'engagement',
    event_label: 'contact_form_submission'
  })
}

// Track project clicks
export const trackProjectClick = (projectName: string) => {
  sendGAEvent('event', 'click', {
    event_category: 'project',
    event_label: projectName,
    value: 1
  })
}

// Track social media clicks
export const trackSocialClick = (platform: string) => {
  sendGAEvent('event', 'click', {
    event_category: 'social',
    event_label: platform,
    value: 1
  })
}

// Track page sections viewed (for measuring engagement)
export const trackSectionView = (sectionName: string) => {
  sendGAEvent('event', 'scroll', {
    event_category: 'engagement',
    event_label: `section_${sectionName}`,
    value: 1
  })
}