"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import CustomLink from "./custom-link"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <CustomLink href="/" className="text-2xl font-bold text-heading">
          BG Accounting
        </CustomLink>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-primary"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <CustomLink href="/" className="text-bodytext hover:text-secondary font-medium transition-colors">
            Home
          </CustomLink>
          <CustomLink href="/about" className="text-bodytext hover:text-secondary font-medium transition-colors">
            About Us
          </CustomLink>
          <CustomLink href="/services" className="text-bodytext hover:text-secondary font-medium transition-colors">
            Services
          </CustomLink>
          <CustomLink href="/testimonials" className="text-bodytext hover:text-secondary font-medium transition-colors">
            Testimonials
          </CustomLink>
          <CustomLink href="/contact" className="text-bodytext hover:text-secondary font-medium transition-colors">
            Contact
          </CustomLink>
          <Button asChild variant="secondary" size="default" className="shadow-md">
            <CustomLink href="/book-consultation">Get a Free Consultation</CustomLink>
          </Button>
        </nav>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-md z-50">
            <div className="flex flex-col p-4 space-y-4">
              <CustomLink
                href="/"
                className="text-bodytext hover:text-secondary font-medium transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </CustomLink>
              <CustomLink
                href="/about"
                className="text-bodytext hover:text-secondary font-medium transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </CustomLink>
              <CustomLink
                href="/services"
                className="text-bodytext hover:text-secondary font-medium transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </CustomLink>
              <CustomLink
                href="/testimonials"
                className="text-bodytext hover:text-secondary font-medium transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </CustomLink>
              <CustomLink
                href="/contact"
                className="text-bodytext hover:text-secondary font-medium transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </CustomLink>
              <Button asChild className="w-full shadow-md" variant="secondary">
                <CustomLink href="/book-consultation" onClick={() => setIsMenuOpen(false)}>
                  Get a Free Consultation
                </CustomLink>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

