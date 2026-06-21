import { useCountUp } from '../hooks/useCountUp'

type PersonalInfoItem = {
  label: string
  value: string
  isStatus?: boolean
}

const personalInfo: PersonalInfoItem[] = [
  { label: 'Name', value: 'Ahamed Arkam' },
  { label: 'Email', value: 'arkamahamed01@gmail.com' },
  { label: 'Phone', value: '+94 76 086 6228' },
  { label: 'Location', value: '88/9, Samsudeen Road, Dharga Town' },
]

const stats = [
  { number: 2, suffix: '+', label: 'Academic Programs' },
  { number: 2, suffix: '+', label: 'Professional Roles' },
  { number: 4, suffix: '+', label: 'Key Skills' },
]

function StatCounter({ number, suffix, label }: { number: number; suffix: string; label: string }) {
  const { count, ref } = useCountUp(number, 1500)
  return (
    <div ref={ref} className="text-center px-4 md:px-6">
      <div className="text-[28px] font-bold gradient-text">
        {count}{suffix}
      </div>
      <div className="text-[14px] text-[#a0a0a0] mt-1">{label}</div>
    </div>
  )
}

export default function About() {
  return (
    <section id="about" className="relative py-[60px] md:py-[80px] lg:py-[100px] overflow-hidden">
      {/* Decorative gradient circle */}
      <div
        className="absolute bottom-0 left-0 w-[350px] h-[350px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(118, 75, 162, 0.1) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="max-w-[1200px] mx-auto px-5 md:px-10 lg:px-[60px] relative z-10">
        {/* Section Title */}
        <div className="section-title reveal">
          <h2>About Me</h2>
          <div className="title-underline" />
        </div>

        <div className="flex flex-col md:flex-row items-center gap-[40px] md:gap-[50px]">
          {/* About Image */}
          <div className="w-full md:w-[45%] reveal-left">
            <div className="relative max-w-[450px] mx-auto md:mx-0 group">
              <img
                src="./assets/about-photo.jpg"
                alt="Ahamed Arkam working"
                className="w-full rounded-2xl object-cover shadow-[0_10px_30px_rgba(0,0,0,0.4)] transition-transform duration-300 group-hover:scale-[1.02]"
                style={{ aspectRatio: '4/5' }}
              />
              {/* Subtle gradient border overlay */}
              <div
                className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{
                  padding: '1px',
                  background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.3), rgba(118, 75, 162, 0.3))',
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                }}
              />
            </div>
          </div>

          {/* Bio Text */}
          <div className="w-full md:w-[55%]">
            <h3 className="text-[22px] md:text-[26px] font-semibold text-white mb-4 reveal" style={{ transitionDelay: '0.2s' }}>
              Mechatronics & IT student from Sri Lanka
            </h3>

            <p className="text-[15px] md:text-[16px] text-[#a0a0a0] leading-[1.7] mb-6 reveal" style={{ transitionDelay: '0.25s' }}>
              I am currently studying B.Tech in Mechatronic Engineering at The Open University of Sri Lanka
              and NDT in Information Technology at the Institute of Technology, University of Moratuwa.
              These courses help me build skills in mechatronics, automation, electronics, software, and IT for future work in robotics and smart systems.
            </p>

            {/* Personal Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {personalInfo.map((item, i) => (
                <div key={i} className="reveal" style={{ transitionDelay: `${0.3 + i * 0.08}s` }}>
                  <span className="text-[14px] font-semibold text-[#a0a0a0]">{item.label}: </span>
                  <span className="text-[14px] font-normal text-white">{item.value}</span>
                </div>
              ))}
            </div>

            {/* Experience Counter */}
            <div
              className="flex items-center justify-center md:justify-start pt-8 border-t border-[rgba(255,255,255,0.1)] reveal"
              style={{ transitionDelay: '0.5s' }}
            >
              {stats.map((stat, i) => (
                <div key={i} className="flex items-center">
                  <StatCounter {...stat} />
                  {i < stats.length - 1 && (
                    <div className="w-px h-[40px] bg-[rgba(255,255,255,0.1)] mx-2 md:mx-4" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
