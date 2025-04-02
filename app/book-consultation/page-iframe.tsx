"use client"

import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import CalendlyIframe from "@/components/calendly-iframe"

export default function BookConsultationPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-6">
            <Button asChild variant="ghost" className="text-white hover:bg-primary/20 p-2">
              <Link href="/">
                <ArrowLeft className="mr-2" size={20} />
                Back to Home
              </Link>
            </Button>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Schedule Your Free Consultation</h1>
          <p className="text-lg max-w-3xl">
            Take the first step toward financial clarity. Book a 30-minute consultation with our experts.
          </p>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Calendly Widget */}
            <div className="lg:w-2/3">
              <CalendlyIframe url="https://calendly.com/your-calendly-link?embed=true" height="700px" />
            </div>

            {/* Information Sidebar */}
            <div className="lg:w-1/3">
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h2 className="text-2xl font-bold mb-6 text-primary">What to Expect</h2>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <Clock className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">30-Minute Session</h3>
                      <p className="text-gray-600">
                        A focused discussion about your business needs and how we can help.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <Users className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Meet Our Experts</h3>
                      <p className="text-gray-600">
                        Connect with our experienced financial professionals who understand your industry.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <Calendar className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Flexible Scheduling</h3>
                      <p className="text-gray-600">
                        Choose a time that works for you. We offer both virtual and in-person meetings.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-primary text-white rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Prepare for Your Consultation</h3>
                  <p className="mb-4">To make the most of our time together, consider preparing:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Questions about your specific financial challenges</li>
                    <li>A brief overview of your current financial processes</li>
                    <li>Your business goals for the next 6-12 months</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center text-primary">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold mb-2 text-primary">Is the consultation really free?</h3>
              <p className="text-gray-600">
                Yes, your initial 30-minute consultation is completely free with no obligation.
              </p>
            </div>

            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold mb-2 text-primary">How should I prepare?</h3>
              <p className="text-gray-600">
                Think about your current financial challenges and goals. Any specific questions you have will help us
                tailor our discussion.
              </p>
            </div>

            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold mb-2 text-primary">Can I reschedule if needed?</h3>
              <p className="text-gray-600">
                Absolutely. You can reschedule through the confirmation email you'll receive after booking.
              </p>
            </div>

            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold mb-2 text-primary">What happens after the consultation?</h3>
              <p className="text-gray-600">
                We'll provide a summary of our discussion and recommendations, along with a proposal if you're
                interested in moving forward.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

