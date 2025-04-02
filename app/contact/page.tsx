"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Clock, Send, Calendar } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      })
    }, 1500)
  }

  return (
    <>
      {/* Hero Section */}
      <section className="gradient-bg py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-on-dark">
            Ready to Simplify Your Business Finances?
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-on-dark-secondary">
            Contact us today to schedule your free consultation and take the first step toward financial clarity.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Form */}
            <div className="lg:w-2/3">
              <h2 className="text-3xl font-bold mb-6 text-heading">Get in Touch</h2>

              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 text-green-700 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-2 text-green-800">Thank You!</h3>
                  <p>Your message has been sent successfully. We'll get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block mb-2 font-medium text-heading">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block mb-2 font-medium text-heading">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block mb-2 font-medium text-heading">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block mb-2 font-medium text-heading">
                        Company Name
                      </label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block mb-2 font-medium text-heading">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full min-h-[150px]"
                    />
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      variant="default"
                      size="xl"
                      className="w-full sm:w-auto"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <svg
                            className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center text-white">
                          <Send size={18} className="mr-2" />
                          Send Message
                        </span>
                      )}
                    </Button>
                    <Button
                      asChild
                      variant="accent"
                      size="xl"
                      className="w-full sm:w-auto shadow-lg font-semibold bg-accent hover:bg-accent/90 border-accent"
                    >
                      <Link href="/book-consultation" className="px-6 py-3 flex items-center justify-center">
                        <Calendar size={18} className="mr-3" />
                        Book a Consultation
                      </Link>
                    </Button>
                  </div>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div className="lg:w-1/3 bg-primary-light/10 p-8 rounded-lg border border-primary-light/20 shadow-sm">
              <h2 className="text-2xl font-bold mb-6 text-heading">Contact Information</h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="text-secondary mr-4 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1 text-heading">Address</h3>
                    <p>
                      178 Columbus Ave #237190 SMB #23254
                      <br />
                      New York, NY 10023
                    </p>
                    <p className="mt-2">
                      <span className="font-medium">Note:</span> Online Services Available Nationwide
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="text-secondary mr-4 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1 text-heading">Phone</h3>
                    <p>[Phone Number]</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="text-secondary mr-4 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1 text-heading">Email</h3>
                    <p>[Email Address]</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="text-secondary mr-4 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1 text-heading">Office Hours</h3>
                    <p>
                      Monday - Friday: 9:00 AM - 5:00 PM EST
                      <br />
                      Saturday: 9:00 AM - 5:00 PM EST (Scheduled Calls Only)
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-secondary text-white rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-on-dark">Free Consultation</h3>
                <p className="mb-4 text-on-dark-secondary">
                  Schedule your free 30-minute consultation to discuss your business needs and how we can help.
                </p>
                <Button asChild variant="on-dark" size="lg" className="w-full shadow-lg">
                  <Link href="/book-consultation">Schedule Now</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-primary-light/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-heading">Our Location</h2>
          <div className="h-[400px] bg-gray-200 rounded-lg overflow-hidden shadow-md">
            {/* Replace with actual map component or embed */}
            <div className="w-full h-full flex items-center justify-center bg-gray-300">
              <p className="text-gray-600">Map will be displayed here</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-heading">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md border border-primary-light/20">
              <h3 className="text-xl font-bold mb-3 text-heading">What services do you offer?</h3>
              <p>
                We offer comprehensive bookkeeping, accounting, payroll, tax services, financial analysis, and more for
                businesses.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-primary-light/20">
              <h3 className="text-xl font-bold mb-3 text-heading">Do you work with businesses remotely?</h3>
              <p>
                Yes, we offer online services nationwide. We use secure cloud-based tools to collaborate with clients
                regardless of location.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-primary-light/20">
              <h3 className="text-xl font-bold mb-3 text-heading">How much do your services cost?</h3>
              <p>
                Our pricing is customized based on your specific needs and the complexity of your business. Contact us
                for a personalized quote.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-primary-light/20">
              <h3 className="text-xl font-bold mb-3 text-heading">How often will we communicate?</h3>
              <p>
                We establish a communication schedule based on your preferences and needs, typically including regular
                monthly check-ins and quarterly reviews.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

