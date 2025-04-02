"use client"

import { useEffect } from "react"
import Script from "next/script"

interface CalendlyOfficialProps {
  url: string
  height?: string | number
}

export default function CalendlyOfficial({ url, height = "700px" }: CalendlyOfficialProps) {
  useEffect(() => {
    // Initialize Calendly when the component mounts
    if (typeof window !== "undefined" && window.Calendly) {
      window.Calendly.initInlineWidget({
        url: url || "",
        parentElement: document.getElementById("calendly-container"),
        prefill: {},
        utm: {},
      })
    }
  }, [url])

  return (
    <>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
        onLoad={() => {
          if (typeof window !== "undefined" && window.Calendly) {
            window.Calendly.initInlineWidget({
              url: url || "",
              parentElement: document.getElementById("calendly-container"),
              prefill: {},
              utm: {},
            })
          }
        }}
      />
      <div id="calendly-container" style={{ minWidth: "320px", height }}></div>
    </>
  )
}

// Add type definition for Calendly
declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: {
        url: string
        parentElement: HTMLElement | null
        prefill?: Record<string, any>
        utm?: Record<string, any>
      }) => void
    }
  }
}

