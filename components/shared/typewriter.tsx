"use client"

import { useState, useEffect } from "react"

interface TypewriterProps {
  words: string[]
  typingSpeed?: number
  deletingSpeed?: number
  pauseDuration?: number
}

export function Typewriter({
  words,
  typingSpeed = 100,
  deletingSpeed = 60,
  pauseDuration = 1500,
}: TypewriterProps) {
  const [text, setText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [delta, setDelta] = useState(typingSpeed)

  useEffect(() => {
    const timer = setTimeout(() => {
      const i = loopNum % words.length
      const fullText = words[i]

      if (isDeleting) {
        setText(fullText.substring(0, text.length - 1))
        setDelta(deletingSpeed)
      } else {
        setText(fullText.substring(0, text.length + 1))
        setDelta(typingSpeed)
      }

      if (!isDeleting && text === fullText) {
        setDelta(pauseDuration)
        setIsDeleting(true)
      } else if (isDeleting && text === "") {
        setIsDeleting(false)
        setLoopNum(loopNum + 1)
        setDelta(typingSpeed)
      }
    }, delta)

    return () => clearTimeout(timer)
  }, [
    text,
    isDeleting,
    loopNum,
    delta,
    words,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
  ])

  return (
    <span className="inline">
      {text}
      <span className="animate-blink">|</span>
    </span>
  )
}
