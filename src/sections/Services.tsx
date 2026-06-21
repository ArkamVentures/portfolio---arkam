const services = [
  {
    icon: 'fas fa-code',
    title: 'Web Development',
    description: 'Building modern, responsive websites and web applications using the latest technologies.',
    features: ['Responsive Design', 'Clean Code', 'SEO Optimized', 'Fast Loading'],
  },
  {
    icon: 'fas fa-paint-brush',
    title: 'UI/UX Design',
    description: 'Creating intuitive and visually appealing user interfaces and experiences.',
    features: ['User Research', 'Wireframing', 'Prototyping', 'User Testing'],
  },
  {
    icon: 'fas fa-mobile-alt',
    title: 'Mobile App Development',
    description: 'Developing cross-platform mobile applications for iOS and Android.',
    features: ['React Native', 'Flutter', 'Native Performance', 'App Store Ready'],
  },
  {
    icon: 'fas fa-search',
    title: 'SEO Optimization',
    description: 'Improving website visibility and ranking on search engines.',
    features: ['Keyword Research', 'On-Page SEO', 'Technical SEO', 'Analytics'],
  },
  {
    icon: 'fas fa-server',
    title: 'Backend Development',
    description: 'Building robust server-side applications and RESTful APIs.',
    features: ['Node.js', 'Python', 'Database Design', 'API Development'],
  },
  {
    icon: 'fas fa-pencil-ruler',
    title: 'Graphic Design',
    description: 'Designing logos, branding materials, and marketing assets.',
    features: ['Logo Design', 'Brand Identity', 'Print Design', 'Social Media Graphics'],
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-[60px] md:py-[80px] lg:py-[100px] overflow-hidden">
      {/* Decorative gradient circles */}
      <div
        className="absolute top-0 right-0 w-[200px] h-[200px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(102, 126, 234, 0.05) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[200px] h-[200px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(118, 75, 162, 0.05) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="max-w-[1200px] mx-auto px-5 md:px-10 lg:px-[60px] relative z-10">
        {/* Section Title */}
        <div className="section-title reveal">
          <h2>My Services</h2>
          <div className="title-underline" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="glass-card p-7 md:p-8 text-center group reveal-scale"
              style={{ transitionDelay: `${0.15 + i * 0.15}s` }}
            >
              {/* Icon */}
              <div
                className="w-[60px] h-[60px] rounded-full flex items-center justify-center mx-auto mb-5 text-white text-[24px] transition-transform duration-300 group-hover:scale-110"
                style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}
              >
                <i className={service.icon} />
              </div>

              {/* Title */}
              <h3 className="text-[20px] md:text-[22px] font-semibold text-white mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-[14px] md:text-[15px] text-[#a0a0a0] leading-[1.6] mb-4">
                {service.description}
              </p>

              {/* Features */}
              <ul className="text-left space-y-2">
                {service.features.map((feature, j) => (
                  <li key={j} className="text-[14px] text-[#a0a0a0] flex items-center gap-2">
                    <i className="fas fa-check text-[#667eea] text-[12px]" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
