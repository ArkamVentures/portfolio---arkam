const timelineItems = [
  {
    side: 'left' as const,
    date: '2020',
    title: 'Ordinary Level',
    org: 'Al Hambra Maha Vidyalaya',
    icon: 'fas fa-graduation-cap',
    description:
      'Completed Ordinary Level education with a strong foundation in science and mathematics.',
  },
  {
    side: 'right' as const,
    date: '2021 - 2023',
    title: 'Physical Science',
    org: 'Kekunagolla National School',
    icon: 'fas fa-graduation-cap',
    description:
      'Studied physics, chemistry, and mathematics to develop a practical understanding of science and engineering principles.',
  },
  {
    side: 'left' as const,
    date: '2025 - Present',
    title: 'B.Tech in Mechatronic Engineering',
    org: 'The Open University of Sri Lanka',
    icon: 'fas fa-graduation-cap',
    description:
      'Pursuing undergraduate studies in mechatronics with a focus on robotics, automation, and smart systems.',
  },
  {
    side: 'right' as const,
    date: '2026 - Present',
    title: 'NDT in Information Technology',
    org: 'Institute of Technology, University of Moratuwa',
    icon: 'fas fa-graduation-cap',
    description:
      'Studying non-destructive testing and information technology concepts to support future work in industrial automation and system reliability.',
  },
  {
    side: 'left' as const,
    date: 'March 2024 - September 2025',
    title: 'Front Office Executive',
    org: 'Royal Money Mart (Pvt) Ltd',
    icon: 'fas fa-briefcase',
    description:
      'Managed front desk operations, assisted customers with currency exchange, handled cash and payment transactions accurately, and maintained daily sales and financial records.',
  },
  {
    side: 'right' as const,
    date: 'October 2025 - April 2026',
    title: 'Payment Officer',
    org: 'Port City BPO',
    icon: 'fas fa-briefcase',
    description:
      'Performed data entry, resolved inquiries and discrepancies, and ensured smooth operations with excellent customer service and compliance with company procedures.',
  },
]

export default function Education() {
  return (
    <section id="education" className="relative py-[60px] md:py-[80px] lg:py-[100px] bg-[#111111] overflow-hidden">
      {/* Decorative gradient circle */}
      <div
        className="absolute top-1/2 left-1/2 w-[250px] h-[250px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2"
        style={{
          background: 'radial-gradient(circle, rgba(102, 126, 234, 0.05) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="max-w-[1000px] mx-auto px-5 md:px-10 lg:px-[60px] relative z-10">
        {/* Section Title */}
        <div className="section-title reveal">
          <h2>Education & Experience</h2>
          <div className="title-underline" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Central Line - Desktop */}
          <div
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2"
            style={{ background: 'linear-gradient(to bottom, #667eea, #764ba2)' }}
          />

          {/* Central Line - Mobile */}
          <div
            className="md:hidden absolute left-5 top-0 bottom-0 w-[2px]"
            style={{ background: 'linear-gradient(to bottom, #667eea, #764ba2)' }}
          />

          {/* Timeline Items */}
          <div className="space-y-8 md:space-y-12">
            {timelineItems.map((item, i) => (
              <div
                key={i}
                className={`relative flex items-start ${
                  item.side === 'left'
                    ? 'md:flex-row reveal-left'
                    : 'md:flex-row-reverse reveal-right'
                }`}
                style={{ transitionDelay: `${0.2 + i * 0.2}s` }}
              >
                {/* Timeline Dot */}
                <div
                  className="absolute left-5 md:left-1/2 w-4 h-4 rounded-full -translate-x-1/2 z-10 mt-6"
                  style={{
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    border: '3px solid #111111',
                  }}
                />

                {/* Content Card */}
                <div
                  className={`ml-12 md:ml-0 md:w-[45%] ${
                    item.side === 'left' ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                  }`}
                >
                  <div className="glass-card p-5 md:p-6 hover:border-[rgba(255,255,255,0.2)] hover:-translate-y-[3px]">
                    <div className="text-[14px] font-semibold gradient-text mb-2">{item.date}</div>
                    <h3 className="text-[18px] font-semibold text-white mb-1">{item.title}</h3>
                    <div className="text-[14px] text-[#a0a0a0] mb-3">
                      <i className={`${item.icon} mr-2`} />
                      {item.org}
                    </div>
                    <p className="text-[14px] text-[#a0a0a0] leading-[1.6]">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
