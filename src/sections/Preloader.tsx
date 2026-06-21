import { useState, useEffect } from 'react'

export default function Preloader() {
  const [loading, setLoading] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setFadeOut(true)
        setTimeout(() => setLoading(false), 500)
      }, 800)
    }

    if (document.readyState === 'complete') {
      handleLoad()
    } else {
      window.addEventListener('load', handleLoad)
      return () => window.removeEventListener('load', handleLoad)
    }
  }, [])

  if (!loading) return null

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-[#0a0a0a] flex items-center justify-center transition-opacity duration-500 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div
        className="w-[50px] h-[50px] rounded-full animate-spin-slow"
        style={{
          border: '3px solid rgba(102, 126, 234, 0.3)',
          borderTop: '3px solid #667eea',
        }}
      />
    </div>
  )
}
