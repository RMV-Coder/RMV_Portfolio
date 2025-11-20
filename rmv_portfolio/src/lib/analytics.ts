// Google Analytics event tracking utilities
// Uses sendGAEvent from @next/third-parties/google

import { sendGAEvent } from '@next/third-parties/google'

// Track resume download
export const trackResumeDownload = () => {
  console.log('[GA Event] file_download:', {
    file_name: 'Raymond_Valdepenas_Resume.pdf',
    file_extension: 'pdf',
    event_category: 'engagement',
    event_label: 'resume_download'
  })
  
  sendGAEvent('event', 'file_download', {
    file_name: 'Raymond_Valdepenas_Resume.pdf',
    file_extension: 'pdf',
    event_category: 'engagement',
    event_label: 'resume_download'
  })
}

// Track contact form submission
export const trackContactFormSubmit = () => {
  console.log('[GA Event] form_submit:', {
    form_id: 'contact_form',
    event_category: 'engagement',
    event_label: 'contact_form_submission'
  })
  
  sendGAEvent('event', 'form_submit', {
    form_id: 'contact_form',
    event_category: 'engagement',
    event_label: 'contact_form_submission'
  })
}

// Track project clicks
export const trackProjectClick = (projectName: string) => {
  console.log('[GA Event] click:', {
    event_category: 'project',
    event_label: projectName,
    value: 1
  })
  
  sendGAEvent('event', 'click', {
    event_category: 'project',
    event_label: projectName,
    value: 1
  })
}

// Track social media clicks
export const trackSocialClick = (platform: string) => {
  console.log('[GA Event] click:', {
    event_category: 'social',
    event_label: platform,
    value: 1
  })
  
  sendGAEvent('event', 'click', {
    event_category: 'social',
    event_label: platform,
    value: 1
  })
}

// Track page sections viewed (for measuring engagement)
export const trackSectionView = (sectionName: string) => {
  console.log('[GA Event] scroll:', {
    event_category: 'engagement',
    event_label: `section_${sectionName}`,
    value: 1
  })
  
  sendGAEvent('event', 'scroll', {
    event_category: 'engagement',
    event_label: `section_${sectionName}`,
    value: 1
  })
}