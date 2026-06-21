const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

const socialLinks = [
  { icon: 'fab fa-github', href: '#' },
  { icon: 'fab fa-linkedin-in', href: '#' },
  { icon: 'fab fa-x-twitter', href: '#' },
  { icon: 'fab fa-instagram', href: '#' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY - 60
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <footer className="border-t border-[rgba(255,255,255,0.05)] bg-[#0a0a0a]">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10 lg:px-[60px] py-[30px]">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-[14px] text-[#666666] text-center md:text-left order-3 md:order-1">
            &copy; {currentYear} Ahamed Arkam. All Rights Reserved.
          </p>

          {/* Quick Links */}
          <div className="flex items-center gap-5 order-1 md:order-2">
            {quickLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="text-[14px] font-medium text-[#a0a0a0] no-underline hover:text-white transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-2 order-2 md:order-3">
            {socialLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                className="w-9 h-9 rounded-full flex items-center justify-center text-white text-[14px] no-underline transition-all duration-300 hover:-translate-y-[3px]"
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                  e.currentTarget.style.borderColor = 'transparent'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'
                }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className={link.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
