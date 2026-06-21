import { useState, useEffect, useCallback } from 'react'

export function useTypingEffect(texts: string[], typingSpeed = 100, deleteSpeed = 50, pauseDuration = 2000) {
  const [displayText, setDisplayText] = useState('')
  const [index, setIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(true)
  const [isDeleting, setIsDeleting] = useState(false)

  const typeNextChar = useCallback(() => {
    const currentText = texts[index]
    if (isDeleting) {
      setDisplayText((prev) => {
        if (prev.length === 0) {
          setIsDeleting(false)
          setIndex((prevIndex) => (prevIndex + 1) % texts.length)
          return ''
        }
        return prev.slice(0, -1)
      })
    } else {
      setDisplayText((prev) => {
        if (prev.length < currentText.length) {
          return currentText.slice(0, prev.length + 1)
        }
        setIsTyping(false)
        return prev
      })
    }
  }, [isDeleting, index, texts])

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>

    if (isTyping && !isDeleting) {
      timeout = setTimeout(typeNextChar, typingSpeed)
    } else if (!isTyping && !isDeleting) {
      timeout = setTimeout(() => {
        setIsDeleting(true)
        setIsTyping(true)
      }, pauseDuration)
    } else if (isDeleting) {
      timeout = setTimeout(typeNextChar, deleteSpeed)
    }

    return () => clearTimeout(timeout)
  }, [displayText, isTyping, isDeleting, typeNextChar, typingSpeed, deleteSpeed, pauseDuration])

  return displayText
}
