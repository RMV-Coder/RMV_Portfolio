"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { FiMail, FiPhone, FiMapPin, FiSend, FiLoader, FiCheck, FiAlertCircle } from "react-icons/fi"
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"
import { contactFormSchema, type ContactFormData } from "@/lib/validations"
import { trackContactFormSubmit } from "@/lib/analytics"

interface FormState {
  status: 'idle' | 'loading' | 'success' | 'error'
  message: string
}

export function ContactSection() {
  const [formState, setFormState] = React.useState<FormState>({
    status: 'idle',
    message: ''
  })

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema)
  })

  const onSubmit = async (data: ContactFormData) => {
    setFormState({ status: 'loading', message: '' })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (response.ok) {
        // Track successful form submission
        trackContactFormSubmit()
        
        setFormState({
          status: 'success',
          message: 'Message sent successfully! I will get back to you soon.'
        })
        reset()
        
        // Clear success message after 5 seconds
        setTimeout(() => {
          setFormState({ status: 'idle', message: '' })
        }, 5000)
      } else {
        throw new Error(result.error || 'Failed to send message')
      }
    } catch (error) {
      setFormState({
        status: 'error',
        message: error instanceof Error ? error.message : 'Something went wrong. Please try again.'
      })
      
      // Clear error message after 5 seconds
      setTimeout(() => {
        setFormState({ status: 'idle', message: '' })
      }, 5000)
    }
  }

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or just want to say hello? I&apos;d love to hear from you. 
            Let&apos;s create something amazing together!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-6">Let&apos;s Connect</h3>
              <p className="text-muted-foreground mb-8">
                I&apos;m always interested in new opportunities, interesting projects, 
                and creative collaborations. Feel free to reach out!
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              <motion.div 
                className="flex items-center space-x-4 p-4 rounded-lg bg-card border hover:shadow-md transition-shadow"
                whileHover={{ scale: 1.02 }}
              >
                <div className="p-3 rounded-full bg-primary/10">
                  <FiMail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-muted-foreground">raymondvaldepenas.dev@gmail.com</p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-center space-x-4 p-4 rounded-lg bg-card border hover:shadow-md transition-shadow"
                whileHover={{ scale: 1.02 }}
              >
                <div className="p-3 rounded-full bg-primary/10">
                  <FiPhone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-muted-foreground">+63 966 732 4567</p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-center space-x-4 p-4 rounded-lg bg-card border hover:shadow-md transition-shadow"
                whileHover={{ scale: 1.02 }}
              >
                <div className="p-3 rounded-full bg-primary/10">
                  <FiMapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-muted-foreground">Tangub City, Philippines</p>
                </div>
              </motion.div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-medium mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {[
                  { icon: FaGithub, href: "https://github.com/RMV-Coder", label: "GitHub" },
                  { icon: FaLinkedin, href: "https://linkedin.com/in/raymond-mv002/", label: "LinkedIn" },
                  { icon: FaTwitter, href: "https://twitter.com/mond_valdepenas", label: "Twitter" },
                ].map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-card border hover:border-primary hover:shadow-md transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-card border rounded-xl p-8 shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            
            {/* Form Status Messages */}
            {formState.status !== 'idle' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className={`p-4 rounded-lg mb-6 flex items-center space-x-3 ${
                  formState.status === 'success'
                    ? 'bg-green-50 border border-green-200 text-green-800 dark:bg-green-900/20 dark:border-green-800 dark:text-green-300'
                    : formState.status === 'loading'
                    ? 'bg-blue-50 border border-blue-200 text-blue-800 dark:bg-blue-900/20 dark:border-blue-800 dark:text-blue-300'
                    : 'bg-red-50 border border-red-200 text-red-800 dark:bg-red-900/20 dark:border-red-800 dark:text-red-300'
                }`}
              >
                {formState.status === 'success' ? (
                  <FiCheck className="w-5 h-5 flex-shrink-0" />
                ) : formState.status === 'loading' ? (
                  <FiLoader className="w-5 h-5 flex-shrink-0 animate-spin" />
                ) : (
                  <FiAlertCircle className="w-5 h-5 flex-shrink-0" />
                )}
                <p className="text-sm">{formState.message || (formState.status === 'loading' ? 'Sending your message...' : '')}</p>
              </motion.div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name *
                </label>
                <input
                  {...register("name")}
                  type="text"
                  id="name"
                  className={`w-full px-4 py-3 rounded-lg border bg-background transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary ${
                    errors.name ? 'border-red-500' : 'border-border hover:border-primary/50'
                  }`}
                  placeholder="Your full name"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email *
                </label>
                <input
                  {...register("email")}
                  type="email"
                  id="email"
                  className={`w-full px-4 py-3 rounded-lg border bg-background transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary ${
                    errors.email ? 'border-red-500' : 'border-border hover:border-primary/50'
                  }`}
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Subject Field */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject *
                </label>
                <input
                  {...register("subject")}
                  type="text"
                  id="subject"
                  className={`w-full px-4 py-3 rounded-lg border bg-background transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary ${
                    errors.subject ? 'border-red-500' : 'border-border hover:border-primary/50'
                  }`}
                  placeholder="What's this about?"
                />
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                    {errors.subject.message}
                  </p>
                )}
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message *
                </label>
                <textarea
                  {...register("message")}
                  id="message"
                  rows={5}
                  className={`w-full px-4 py-3 rounded-lg border bg-background transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary resize-vertical ${
                    errors.message ? 'border-red-500' : 'border-border hover:border-primary/50'
                  }`}
                  placeholder="Tell me about your project or just say hello!"
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting || formState.status === 'loading'}
                className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {formState.status === 'loading' ? (
                  <>
                    <FiLoader className="w-5 h-5 animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <FiSend className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}