const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
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

        </div>
      </div>
    </footer>
  )
}
