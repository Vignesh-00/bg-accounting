import type React from "react"
/**
 * Utility function to scroll to the top of the page
 * @param smooth Whether to use smooth scrolling
 */
export function scrollToTop(smooth = true) {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: smooth ? "smooth" : "auto",
  })
}

/**
 * Utility function to handle navigation
 * @param href The URL to navigate to
 * @param e The click event
 */
export function handleNavigation(href: string, e?: React.MouseEvent) {
  // If it's an anchor link on the same page
  if (href.startsWith("#")) {
    if (e) e.preventDefault()
    const element = document.getElementById(href.substring(1))
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      })
    }
    return
  }

  // If it's a new page, scroll to top
  scrollToTop(false)
}

