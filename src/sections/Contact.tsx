import { useState } from 'react'
import type { FormEvent } from 'react'

const contactInfo = [
  { icon: 'fas fa-envelope', label: 'Email', value: 'arkamahamed01@gmail.com', href: 'mailto:arkamahamed01@gmail.com' },
  { icon: 'fas fa-phone', label: 'Phone', value: '+94 76 086 6228', href: 'tel:+94760866228' },
  { icon: 'fas fa-map-marker-alt', label: 'Location', value: '88/9, Samsudeen Road, Dharga Town', href: '#' },
]

const socialLinks = [
  { icon: 'fab fa-github', href: '#' },
  { icon: 'fab fa-linkedin-in', href: '#' },
  { icon: 'fab fa-x-twitter', href: '#' },
  { icon: 'fab fa-instagram', href: '#' },
  { icon: 'fab fa-facebook-f', href: '#' },
]

export default function Contact() {
  const [formState, setFormState] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setFormState('sending')

    try {
      const data = new FormData()
      data.append('name', formData.name)
      data.append('email', formData.email)
      data.append('subject', formData.subject)
      data.append('message', formData.message)

      const response = await fetch('contact.php', {
        method: 'POST',
        body: data,
      })

      const result = await response.json()

      if (result.success) {
        setFormState('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        setFormState('error')
      }
    } catch {
      setFormState('error')
    }

    // Reset after 5 seconds
    setTimeout(() => setFormState('idle'), 5000)
  }

  const inputClasses =
    'w-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-[10px] px-[18px] py-[14px] text-[15px] text-white placeholder-[#666666] outline-none transition-all duration-300 focus:border-[#667eea] focus:shadow-[0_0_0_3px_rgba(102,126,234,0.2)]'

  return (
    <section id="contact" className="relative py-[60px] md:py-[80px] lg:py-[100px] overflow-hidden">
      {/* Decorative gradient circle */}
      <div
        className="absolute bottom-0 right-0 w-[350px] h-[350px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(102, 126, 234, 0.06) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="max-w-[1200px] mx-auto px-5 md:px-10 lg:px-[60px] relative z-10">
        {/* Section Title */}
        <div className="section-title reveal">
          <h2>Get In Touch</h2>
          <div className="title-underline" />
        </div>

        <div className="flex flex-col md:flex-row gap-[40px] md:gap-[50px]">
          {/* Contact Form */}
          <div className="w-full md:w-[60%] reveal" style={{ transitionDelay: '0.2s' }}>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col sm:flex-row gap-5 mb-5">
                <div className="flex-1">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={inputClasses}
                  />
                </div>
                <div className="flex-1">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={inputClasses}
                  />
                </div>
              </div>

              <div className="mb-5">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className={inputClasses}
                />
              </div>

              <div className="mb-5">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`${inputClasses} resize-y min-h-[150px]`}
                />
              </div>

              <button
                type="submit"
                disabled={formState === 'sending'}
                className="gradient-btn w-full sm:w-auto disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {formState === 'sending' ? (
                  <>
                    <i className="fas fa-spinner fa-spin" /> Sending...
                  </>
                ) : (
                  <>
                    <i className="fas fa-paper-plane" /> Send Message
                  </>
                )}
              </button>

              {/* Status Messages */}
              {formState === 'success' && (
                <div className="mt-4 p-3 rounded-lg bg-[rgba(16,185,129,0.1)] border border-[#10b981] text-[#10b981] text-[14px] transition-opacity duration-300">
                  Thank you! Your message has been sent successfully.
                </div>
              )}
              {formState === 'error' && (
                <div className="mt-4 p-3 rounded-lg bg-[rgba(239,68,68,0.1)] border border-[#ef4444] text-[#ef4444] text-[14px] transition-opacity duration-300">
                  Oops! Something went wrong. Please try again later.
                </div>
              )}
            </form>
          </div>

          {/* Contact Information */}
          <div className="w-full md:w-[40%]">
            <h3 className="text-[20px] font-semibold text-white mb-5 reveal" style={{ transitionDelay: '0.3s' }}>
              Contact Information
            </h3>

            <div className="space-y-5">
              {contactInfo.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 reveal-right"
                  style={{ transitionDelay: `${0.3 + i * 0.1}s` }}
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(102, 126, 234, 0.15)' }}
                  >
                    <i className={`${item.icon} text-[#667eea] text-[18px]`} />
                  </div>
                  <div>
                    <span className="text-[13px] font-medium text-[#a0a0a0] block mb-1">
                      {item.label}
                    </span>
                    <a
                      href={item.href}
                      className="text-[15px] text-white no-underline hover:text-[#667eea] transition-colors duration-300"
                    >
                      {item.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="mt-8 reveal" style={{ transitionDelay: '0.5s' }}>
              <h4 className="text-[16px] font-semibold text-white mb-3">Follow Me</h4>
              <div className="flex items-center gap-[10px]">
                {socialLinks.map((link, i) => (
                  <a
                    key={i}
                    href={link.href}
                    className="social-icon"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className={link.icon} />
                  </a>
                ))}
              </div>
            </div>

            {/* Map Embed */}
            <div className="mt-6 reveal" style={{ transitionDelay: '0.5s' }}>
              <iframe
                src="https://www.google.com/maps?q=Dharga+Town,+Sri+Lanka&output=embed"
                width="100%"
                height="200"
                style={{
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '12px',
                  filter: 'grayscale(100%) invert(92%) contrast(83%)',
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location Map"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
