import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Services', href: '#services' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      // Active section detection
      const sections = navLinks.map((link) => link.href.slice(1))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 120) {
            setActiveSection(sections[i])
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setMobileOpen(false)
    const target = document.querySelector(href)
    if (target) {
      const navHeight = 60
      const top = target.getBoundingClientRect().top + window.scrollY - navHeight
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-300 ${
          scrolled
            ? 'bg-[rgba(10,10,10,0.9)] backdrop-blur-[10px] shadow-[0_2px_20px_rgba(0,0,0,0.3)] h-[60px]'
            : 'bg-transparent h-[70px]'
        }`}
        style={{ transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}
      >
        <div className="max-w-[1200px] mx-auto px-5 md:px-10 lg:px-[60px] h-full flex items-center justify-between">
          {/* Logo */}
          <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="text-[22px] font-bold text-white no-underline">
            <span className="gradient-text">A</span>hamed Arkam
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-[30px]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-[15px] font-medium no-underline transition-colors duration-300 ${
                  activeSection === link.href.slice(1)
                    ? 'gradient-text'
                    : 'text-[#a0a0a0] hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex flex-col gap-[6px] p-2 bg-transparent border-none cursor-pointer"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-[2px] bg-white transition-all duration-300 ${
                mobileOpen ? 'rotate-45 translate-y-[8px]' : ''
              }`}
            />
            <span
              className={`block w-6 h-[2px] bg-white transition-all duration-300 ${
                mobileOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-6 h-[2px] bg-white transition-all duration-300 ${
                mobileOpen ? '-rotate-45 -translate-y-[8px]' : ''
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[998] bg-[rgba(10,10,10,0.98)] backdrop-blur-[20px] flex flex-col items-center justify-center transition-opacity duration-300 md:hidden ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <button
          className="absolute top-5 right-5 text-white text-[28px] bg-transparent border-none cursor-pointer p-2"
          onClick={() => setMobileOpen(false)}
          aria-label="Close menu"
        >
          <i className="fas fa-times" />
        </button>
        {navLinks.map((link, i) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => handleNavClick(e, link.href)}
            className={`text-[24px] font-semibold no-underline my-[12px] transition-all duration-400 ${
              activeSection === link.href.slice(1) ? 'gradient-text' : 'text-white'
            }`}
            style={{
              transitionDelay: mobileOpen ? `${i * 50}ms` : '0ms',
              transform: mobileOpen ? 'translateY(0)' : 'translateY(20px)',
              opacity: mobileOpen ? 1 : 0,
            }}
          >
            {link.label}
          </a>
        ))}
      </div>
    </>
  )
}
