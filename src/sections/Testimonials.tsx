import { useState, useEffect, useCallback } from 'react'

const testimonials = [
  {
    quote:
      'Working with John was an absolute pleasure. He delivered a stunning website that exceeded our expectations. His attention to detail and technical expertise are truly impressive.',
    name: 'Sarah Johnson',
    role: 'CEO, TechStart Inc.',
    avatar: './assets/testimonial-1.jpg',
  },
  {
    quote:
      "Exceptional work on our e-commerce platform. The site is fast, user-friendly, and our sales have increased by 40% since launch. Highly recommended!",
    name: 'Michael Chen',
    role: 'Product Manager, ShopMart',
    avatar: './assets/testimonial-2.jpg',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  const goTo = useCallback(
    (index: number) => {
      if (isAnimating) return
      setIsAnimating(true)
      setTimeout(() => {
        setCurrent(index)
        setIsAnimating(false)
      }, 300)
    },
    [isAnimating]
  )

  const next = useCallback(() => {
    goTo((current + 1) % testimonials.length)
  }, [current, goTo])

  const prev = useCallback(() => {
    goTo((current - 1 + testimonials.length) % testimonials.length)
  }, [current, goTo])

  // Auto-play
  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [next, isPaused])

  return (
    <section id="testimonials" className="relative py-[60px] md:py-[80px] lg:py-[100px] bg-[#111111] overflow-hidden">
      {/* Decorative gradient circle */}
      <div
        className="absolute top-0 left-1/2 w-[300px] h-[300px] rounded-full pointer-events-none -translate-x-1/2"
        style={{
          background: 'radial-gradient(circle, rgba(102, 126, 234, 0.06) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="max-w-[800px] mx-auto px-5 md:px-10 lg:px-[60px] relative z-10">
        {/* Testimonial Slider */}
        <div
          className="relative reveal"
          style={{ transitionDelay: '0.2s' }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Navigation Arrows - Desktop */}
          <button
            onClick={prev}
            className="hidden md:flex absolute left-[-60px] top-1/2 -translate-y-1/2 w-11 h-11 rounded-full items-center justify-center text-white text-[18px] transition-all duration-300 hover:scale-110 z-10"
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
            aria-label="Previous testimonial"
          >
            <i className="fas fa-chevron-left" />
          </button>

          <button
            onClick={next}
            className="hidden md:flex absolute right-[-60px] top-1/2 -translate-y-1/2 w-11 h-11 rounded-full items-center justify-center text-white text-[18px] transition-all duration-300 hover:scale-110 z-10"
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
            aria-label="Next testimonial"
          >
            <i className="fas fa-chevron-right" />
          </button>

          {/* Slides */}
          <div className="min-h-[280px] flex items-center justify-center">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className={`text-center transition-all duration-300 absolute w-full px-4 ${
                  i === current
                    ? 'opacity-100 translate-y-0 relative'
                    : 'opacity-0 translate-y-3 absolute pointer-events-none'
                }`}
              >
                {/* Quote Icon */}
                <i className="fas fa-quote-left text-[36px] gradient-text opacity-50 mb-4 block" />

                {/* Quote Text */}
                <p className="text-[16px] md:text-[18px] text-[#d0d0d0] italic leading-[1.8] mb-6 max-w-[600px] mx-auto">
                  "{t.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center justify-center gap-4">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-[60px] h-[60px] rounded-full object-cover border-2 border-[rgba(255,255,255,0.1)]"
                  />
                  <div className="text-left">
                    <h4 className="text-[16px] font-semibold text-white">{t.name}</h4>
                    <span className="text-[14px] text-[#a0a0a0]">{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Navigation Arrows */}
          <div className="flex md:hidden items-center justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="w-9 h-9 rounded-full flex items-center justify-center text-white text-[14px]"
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
              }}
              aria-label="Previous testimonial"
            >
              <i className="fas fa-chevron-left" />
            </button>
            <button
              onClick={next}
              className="w-9 h-9 rounded-full flex items-center justify-center text-white text-[14px]"
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
              }}
              aria-label="Next testimonial"
            >
              <i className="fas fa-chevron-right" />
            </button>
          </div>

          {/* Dot Indicators */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`h-[10px] rounded-full transition-all duration-300 cursor-pointer ${
                  i === current
                    ? 'w-6'
                    : 'w-[10px] hover:bg-[rgba(255,255,255,0.4)]'
                }`}
                style={{
                  background:
                    i === current
                      ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                      : 'rgba(255, 255, 255, 0.2)',
                }}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}