"use client"

import type React from "react"

import { default as NextLink } from "next/link"
import { usePathname } from "next/navigation"
import { scrollToTop, handleNavigation } from "@/lib/navigation-utils"
import { forwardRef } from "react"

interface CustomLinkProps extends React.ComponentPropsWithoutRef<typeof NextLink> {
  scrollToTopOnClick?: boolean
}

const CustomLink = forwardRef<HTMLAnchorElement, CustomLinkProps>(
  ({ href, onClick, scrollToTopOnClick = true, children, ...props }, ref) => {
    const pathname = usePathname()
    const isExternal = typeof href === "string" && (href.startsWith("http") || href.startsWith("mailto:"))

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (onClick) onClick(e)

      if (isExternal) return

      const hrefString = href.toString()

      // If it's the same page, don't do anything special
      if (hrefString === pathname) return

      // If it's an anchor on the same page
      if (hrefString.startsWith("#")) {
        handleNavigation(hrefString, e)
        return
      }

      // If it's a new page and we want to scroll to top
      if (scrollToTopOnClick) {
        scrollToTop(false)
      }
    }

    return (
      <NextLink href={href} onClick={handleClick} ref={ref} {...props}>
        {children}
      </NextLink>
    )
  },
)

CustomLink.displayName = "CustomLink"

export default CustomLink

