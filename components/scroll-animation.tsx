"use client"

import { useEffect, useRef, type ReactNode } from "react"

interface ScrollAnimationProps {
  children: ReactNode
  className?: string
  animation?: "fade-in" | "slide-left" | "slide-right" | "scale-up"
  delay?: 0 | 100 | 200 | 300 | 400 | 500
  threshold?: number
  once?: boolean
}

export default function ScrollAnimation({
  children,
  className = "",
  animation = "fade-in",
  delay = 0,
  threshold = 0.1,
  once = true,
}: ScrollAnimationProps) {
  const ref = useRef<HTMLDivElement>(null)
  const animationClass = animation ? `animate-${animation}` : ""
  const delayClass = delay > 0 ? `animate-delay-${delay}` : ""

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Only add classes if they're not empty
            if (animationClass) {
              entry.target.classList.add(animationClass)
            }
            if (delayClass) {
              entry.target.classList.add(delayClass)
            }
            if (once) {
              observer.unobserve(entry.target)
            }
          } else if (!once) {
            // Only remove classes if they're not empty
            if (animationClass) {
              entry.target.classList.remove(animationClass)
            }
            if (delayClass) {
              entry.target.classList.remove(delayClass)
            }
          }
        })
      },
      {
        threshold,
        rootMargin: "0px 0px -100px 0px",
      },
    )

    const element = ref.current
    if (element) {
      observer.observe(element)
      // Initially hide the element with opacity 0
      element.style.opacity = "0"
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [animationClass, delayClass, once, threshold])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}

