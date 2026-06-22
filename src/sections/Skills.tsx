import { useState, useEffect, useRef } from 'react'

const technicalSkills = [
  { name: 'Programming: Java, Python, C', percent: 95 },
  { name: 'Web Development: HTML, CSS, JavaScript, PHP', percent: 90 },
  { name: 'Database: MySQL', percent: 88 },
  { name: 'Tools & Technologies: Git, GitHub, VS Code', percent: 92 },
  { name: 'Operating Systems: Windows, Linux', percent: 85 },
  { name: 'Microsoft Office Suite', percent: 80 },
]

const professionalSkills = [
  { name: 'Communication & Interpersonal', percent: 92 },
  { name: 'Operations Management', percent: 88 },
  { name: 'Problem Solving', percent: 90 },
  { name: 'Attention to Detail', percent: 90 },
]

function SkillBar({ name, percent, delay }: { name: string; percent: number; delay: number }) {
  const [width, setWidth] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTimeout(() => setWidth(percent), delay * 1000)
          observer.unobserve(entries[0].target)
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [percent, delay])

  return (
    <div ref={ref} className="mb-5">
      <div className="flex justify-between items-center mb-2">
        <span className="text-[15px] font-medium text-white">{name}</span>
        <span className="text-[14px] font-semibold text-[#a0a0a0]">{percent}%</span>
      </div>
      <div className="w-full h-2 bg-[rgba(255,255,255,0.1)] rounded-full overflow-hidden">
        <div
          className="h-full rounded-full"
          style={{
            width: `${width}%`,
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            transition: 'width 1.5s cubic-bezier(0.4, 0, 0.2, 1)',
            boxShadow: '0 0 10px rgba(102, 126, 234, 0.3)',
          }}
        />
      </div>
    </div>
  )
}

function CircularProgress({ name, percent, delay }: { name: string; percent: number; delay: number }) {
  const [progress, setProgress] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const radius = 45
  const circumference = 2 * Math.PI * radius
  const strokeDashoffset = circumference - (progress / 100) * circumference

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTimeout(() => setProgress(percent), delay * 1000)
          observer.unobserve(entries[0].target)
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [percent, delay])

  return (
    <div ref={ref} className="flex flex-col items-center">
      <div className="relative w-[120px] h-[120px]">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
          {/* Background circle */}
          <circle
            cx="60"
            cy="60"
            r={radius}
            fill="none"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="8"
          />
          {/* Progress circle */}
          <circle
            cx="60"
            cy="60"
            r={radius}
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            style={{ transition: 'stroke-dashoffset 1.5s cubic-bezier(0.4, 0, 0.2, 1)' }}
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#667eea" />
              <stop offset="100%" stopColor="#764ba2" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-[20px] font-bold text-white">{progress}%</span>
        </div>
      </div>
      <span className="text-[13px] text-[#a0a0a0] mt-3">{name}</span>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-[60px] md:py-[80px] lg:py-[100px] bg-[#111111] overflow-hidden">
      {/* Decorative gradient circle */}
      <div
        className="absolute top-1/2 right-0 w-[300px] h-[300px] rounded-full pointer-events-none -translate-y-1/2"
        style={{
          background: 'radial-gradient(circle, rgba(102, 126, 234, 0.08) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="max-w-[1200px] mx-auto px-5 md:px-10 lg:px-[60px] relative z-10">
        {/* Section Title */}
        <div className="section-title reveal">
          <h2>My Skills</h2>
          <div className="title-underline" />
        </div>

        <div className="flex flex-col md:flex-row gap-[40px] md:gap-[50px]">
          {/* Technical Skills Column */}
          <div className="flex-1">
            <h3 className="text-[20px] font-semibold text-white mb-6 reveal">Technical Skills</h3>
            {technicalSkills.map((skill, i) => (
              <div key={skill.name} className="reveal" style={{ transitionDelay: `${0.1 + i * 0.1}s` }}>
                <SkillBar name={skill.name} percent={skill.percent} delay={0.1 + i * 0.1} />
              </div>
            ))}
          </div>

          {/* Professional Skills Column */}
          <div className="flex-1">
            <h3 className="text-[20px] font-semibold text-white mb-6 reveal">Professional Skills</h3>
            <div className="grid grid-cols-2 gap-6">
              {professionalSkills.map((skill, i) => (
                <div key={skill.name} className="reveal" style={{ transitionDelay: `${0.15 + i * 0.15}s` }}>
                  <CircularProgress name={skill.name} percent={skill.percent} delay={0.15 + i * 0.15} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
