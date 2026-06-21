import { useTypingEffect } from '../hooks/useTypingEffect'

const professions = ['Mechatronics Engineering Student', 'NDT IT Trainee', 'Customer Service Professional']

const socialLinks = [
  { icon: 'fab fa-linkedin-in', href: '#' },
  { icon: 'fab fa-facebook-f', href: '#' },
  { icon: 'fab fa-instagram', href: '#' },
  { icon: 'fab fa-x-twitter', href: '#' },
]

export default function Hero() {
  const typedText = useTypingEffect(professions, 100, 50, 2000)

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY - 60
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-[90px] pb-[60px] overflow-hidden"
    >
      {/* Decorative gradient circle */}
      <div
        className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(102, 126, 234, 0.15) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="max-w-[1200px] mx-auto px-5 md:px-10 lg:px-[60px] w-full">
        <div className="flex flex-col-reverse md:flex-row items-center gap-[40px] md:gap-[60px]">
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left">
            <p
              className="text-[16px] md:text-[18px] font-normal text-[#a0a0a0] mb-2 reveal"
              style={{ transitionDelay: '0.4s' }}
            >
              Hello, I'm
            </p>

            <h1
              className="text-[36px] md:text-[48px] lg:text-[56px] font-bold text-white leading-[1.2] mb-3 reveal"
              style={{ transitionDelay: '0.5s' }}
            >
              Ahamed Arkam
            </h1>

            <div className="text-[18px] md:text-[20px] mb-5 reveal" style={{ transitionDelay: '0.7s' }}>
              <span className="text-[#a0a0a0]">I'm a </span>
              <span className="font-semibold gradient-text">{typedText}</span>
              <span className="inline-block w-[2px] h-[22px] bg-[#667eea] ml-1 animate-blink align-middle" />
            </div>

            <p
              className="text-[15px] md:text-[16px] text-[#a0a0a0] leading-[1.7] max-w-[500px] mx-auto md:mx-0 mb-7 reveal"
              style={{ transitionDelay: '0.9s' }}
            >
              Currently pursuing B.Tech in Mechatronic Engineering at The Open University of Sri Lanka and
              NDT in Information Technology at the Institute of Technology, University of Moratuwa.
              I build skills in mechatronics, automation, electronics, software, and IT for future work in robotics and smart systems.
            </p>

            {/* Social Links */}
            <div className="flex items-center justify-center md:justify-start gap-3 mb-8 reveal" style={{ transitionDelay: '1.0s' }}>
              {socialLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  className="social-icon reveal"
                  style={{ transitionDelay: `${1.0 + i * 0.08}s` }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className={link.icon} />
                </a>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 reveal" style={{ transitionDelay: '1.2s' }}>
              <a href="#" className="gradient-btn" download>
                <i className="fas fa-download" /> Download CV
              </a>
              <a href="#contact" className="outline-btn" onClick={(e) => handleScroll(e, '#contact')}>
                Hire Me
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-shrink-0 reveal" style={{ transitionDelay: '0.2s' }}>
            <div className="relative animate-float">
              <div
                className="w-[250px] h-[250px] md:w-[320px] md:h-[320px] lg:w-[380px] lg:h-[380px] rounded-full p-[4px]"
                style={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  boxShadow: '0 0 30px rgba(102, 126, 234, 0.3)',
                }}
              >
                <img
                  src="./assets/profile-photo.jpg"
                  alt="Ahamed Arkam"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
