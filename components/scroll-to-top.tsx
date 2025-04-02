"use client"

import { useState, useEffect } from "react"
import { ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
    >
      <Button
        onClick={scrollToTop}
        variant="secondary"
        size="icon"
        className="rounded-full shadow-lg"
        aria-label="Scroll to top"
      >
        <ChevronUp size={24} />
      </Button>
    </div>
  )
}

