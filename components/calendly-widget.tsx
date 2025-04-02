"use client"

import { useEffect, useRef } from "react"

interface CalendlyWidgetProps {
  url: string
  height?: string | number
}

export default function CalendlyWidget({ url, height = "700px" }: CalendlyWidgetProps) {
  const calendlyRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Only load the script once
    if (!document.getElementById("calendly-script")) {
      const script = document.createElement("script")
      script.id = "calendly-script"
      script.src = "https://assets.calendly.com/assets/external/widget.js"
      script.async = true
      document.body.appendChild(script)
    }

    // Clean up function
    return () => {
      // We don't remove the script as other instances might be using it
    }
  }, [])

  return (
    <div
      className="calendly-inline-widget"
      data-url={url}
      ref={calendlyRef}
      style={{ minWidth: "320px", height }}
    ></div>
  )
}

