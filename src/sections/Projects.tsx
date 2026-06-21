import { useState } from 'react'

const categories = ['All', 'Web App', 'Mobile App', 'Design']

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'Web App',
    description: 'A full-featured online shopping platform with cart, checkout, and payment integration.',
    image: './assets/project-1.jpg',
    tags: ['React', 'Node.js', 'MongoDB'],
    liveLink: '#',
    codeLink: '#',
  },
  {
    id: 2,
    title: 'Task Management App',
    category: 'Web App',
    description: 'A collaborative task manager with real-time updates and team features.',
    image: './assets/project-2.jpg',
    tags: ['Vue.js', 'Firebase'],
    liveLink: '#',
    codeLink: '#',
  },
  {
    id: 3,
    title: 'Fitness Tracking App',
    category: 'Mobile App',
    description: 'Cross-platform mobile app for tracking workouts and nutrition.',
    image: './assets/project-3.jpg',
    tags: ['React Native', 'Redux'],
    liveLink: '#',
    codeLink: '#',
  },
  {
    id: 4,
    title: 'Portfolio Website',
    category: 'Design',
    description: 'A creative portfolio website with stunning animations and interactions.',
    image: './assets/project-4.jpg',
    tags: ['HTML', 'CSS', 'JavaScript'],
    liveLink: '#',
    codeLink: '#',
  },
  {
    id: 5,
    title: 'Social Media Dashboard',
    category: 'Web App',
    description: 'Analytics dashboard for social media management and scheduling.',
    image: './assets/project-5.jpg',
    tags: ['React', 'D3.js'],
    liveLink: '#',
    codeLink: '#',
  },
  {
    id: 6,
    title: 'Restaurant Branding',
    category: 'Design',
    description: 'Complete brand identity design for a modern restaurant.',
    image: './assets/project-6.jpg',
    tags: ['Figma', 'Illustrator'],
    liveLink: '#',
    codeLink: '#',
  },
]

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filteredProjects =
    activeFilter === 'All' ? projects : projects.filter((p) => p.category === activeFilter)

  return (
    <section id="projects" className="relative py-[60px] md:py-[80px] lg:py-[100px] overflow-hidden">
      {/* Decorative gradient circle */}
      <div
        className="absolute top-0 left-0 w-[350px] h-[350px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(102, 126, 234, 0.08) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="max-w-[1200px] mx-auto px-5 md:px-10 lg:px-[60px] relative z-10">
        {/* Section Title */}
        <div className="section-title reveal">
          <h2>My Projects</h2>
          <div className="title-underline" />
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center justify-center gap-[10px] mb-10 reveal" style={{ transitionDelay: '0.2s' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2 rounded-[20px] text-[14px] font-medium cursor-pointer transition-all duration-300 border ${
                activeFilter === cat
                  ? 'bg-gradient-to-r from-[#667eea] to-[#764ba2] border-transparent text-white'
                  : 'bg-transparent border-[rgba(255,255,255,0.2)] text-[#a0a0a0] hover:text-white hover:border-[rgba(255,255,255,0.4)]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.map((project, i) => (
            <div
              key={project.id}
              className="glass-card overflow-hidden group reveal-scale"
              style={{ transitionDelay: `${0.15 + i * 0.15}s` }}
            >
              {/* Image Wrapper */}
              <div className="relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-[rgba(10,10,10,0.8)] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 gap-3">
                  <a
                    href={project.liveLink}
                    className="w-11 h-11 rounded-full flex items-center justify-center text-white text-[18px] transition-all duration-300 hover:scale-110"
                    style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Live Demo"
                  >
                    <i className="fas fa-external-link-alt" />
                  </a>
                  <a
                    href={project.codeLink}
                    className="w-11 h-11 rounded-full flex items-center justify-center text-white text-[18px] transition-all duration-300 hover:scale-110"
                    style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Source Code"
                  >
                    <i className="fas fa-code" />
                  </a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-5">
                <h3 className="text-[18px] font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-[14px] text-[#a0a0a0] leading-[1.6] mb-3 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-[12px] font-medium rounded-xl"
                      style={{ background: 'rgba(102, 126, 234, 0.15)', color: '#667eea' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
