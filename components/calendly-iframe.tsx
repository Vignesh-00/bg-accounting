"use client"

interface CalendlyIframeProps {
  url: string
  height?: string | number
}

export default function CalendlyIframe({ url, height = "700px" }: CalendlyIframeProps) {
  return (
    <div className="rounded-lg overflow-hidden border border-primary-light/20 shadow-md">
      <iframe src={url} width="100%" height={height} frameBorder="0" title="Schedule Appointment"></iframe>
    </div>
  )
}

