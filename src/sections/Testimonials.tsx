const educationQuotes = [
  {
    quote: 'Education is the most powerful weapon which you can use to change the world.',
    author: 'Nelson Mandela',
  },
  {
    quote: 'The beautiful thing about learning is that nobody can take it away from you.',
    author: 'B.B. King',
  },
  {
    quote: 'Live as if you were to die tomorrow. Learn as if you were to live forever.',
    author: 'Mahatma Gandhi',
  },
  {
    quote: 'The future belongs to those who learn more skills and combine them in creative ways.',
    author: 'Robert Greene',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-[60px] md:py-[80px] lg:py-[100px] bg-[#111111] overflow-hidden">
      <div
        className="absolute top-0 left-1/2 w-[300px] h-[300px] rounded-full pointer-events-none -translate-x-1/2"
        style={{
          background: 'radial-gradient(circle, rgba(102, 126, 234, 0.06) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="max-w-[900px] mx-auto px-5 md:px-10 lg:px-[60px] relative z-10">
        <div className="section-title reveal">
          <h2>Education Quotes</h2>
          <div className="title-underline" />
        </div>

        <div className="grid gap-6 md:grid-cols-2 mt-10">
          {educationQuotes.map((item, index) => (
            <div
              key={index}
              className="glass-card p-6 hover:border-[rgba(255,255,255,0.2)] hover:-translate-y-[3px] transition-transform duration-300"
            >
              <i className="fas fa-quote-left text-[32px] gradient-text opacity-50 mb-4 block" />
              <p className="text-[16px] md:text-[17px] text-[#d0d0d0] leading-[1.8] mb-5">"{item.quote}"</p>
              <p className="text-[14px] text-[#a0a0a0]">— {item.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
