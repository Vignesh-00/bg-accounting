import Link from "next/link"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="gradient-bg pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-on-dark">BG Accounting Services LLC</h3>
            <p className="mb-4 text-on-dark-secondary">
              Expert bookkeeping and financial services designed for your success.
            </p>
            <div className="flex items-center mb-2">
              <MapPin size={18} className="mr-2 text-secondary-light" />
              <p className="text-on-dark-secondary">
                178 Columbus Ave #237190 SMB #23254
                <br />
                New York, NY 10023
              </p>
            </div>
            <div className="flex items-center mb-2">
              <Phone size={18} className="mr-2 text-secondary-light" />
              <p className="text-on-dark-secondary">[Phone Number]</p>
            </div>
            <div className="flex items-center mb-2">
              <Mail size={18} className="mr-2 text-secondary-light" />
              <p className="text-on-dark-secondary">[Email Address]</p>
            </div>
            <div className="flex items-center">
              <Clock size={18} className="mr-2 text-secondary-light" />
              <p className="text-on-dark-secondary">
                Monday - Friday: 9:00 AM - 5:00 PM EST
                <br />
                Saturday: 9:00 AM - 5:00 PM EST (Scheduled Calls Only)
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-on-dark">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-on-dark-secondary hover:text-secondary-light transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-on-dark-secondary hover:text-secondary-light transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-on-dark-secondary hover:text-secondary-light transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/testimonials"
                  className="text-on-dark-secondary hover:text-secondary-light transition-colors"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-on-dark-secondary hover:text-secondary-light transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-on-dark">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-on-dark-secondary">Bookkeeping & Accounting</li>
              <li className="text-on-dark-secondary">Payroll Services</li>
              <li className="text-on-dark-secondary">Accounts Payable & Receivable</li>
              <li className="text-on-dark-secondary">Budgeting & Forecasting</li>
              <li className="text-on-dark-secondary">Financial Statements</li>
              <li className="text-on-dark-secondary">Tax Services</li>
              <li className="text-on-dark-secondary">Grant Management</li>
              <li className="text-on-dark-secondary">Financial Analysis & Advisory</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-6 flex flex-col items-center">
          {/* <Button asChild variant="accent" size="lg" className="mb-4 shadow-lg font-semibold">
            <Link href="/book-consultation" className="flex items-center justify-center w-full px-6 py-3">
              Get a Free Consultation
            </Link>
          </Button> */}
          <p className="text-on-dark-secondary">
            &copy; {new Date().getFullYear()} BG Accounting Services LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

