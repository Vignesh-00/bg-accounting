"use client"
import { Calendar, Clock, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function BookConsultationPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="gradient-bg py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-on-dark">Schedule Your Free Consultation</h1>
          <p className="text-lg max-w-3xl text-on-dark-secondary">
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
              <div className="bg-white p-6 rounded-lg shadow-md border border-primary-light/20">
                <h2 className="text-2xl font-bold mb-6 text-heading">Schedule a Meeting</h2>
                <p className="mb-6">
                  Please use the form below to schedule a consultation at a time that works for you. If you don't see a
                  time that works, please contact us directly.
                </p>
                <div className="h-[500px] flex items-center justify-center bg-gray-100 rounded-lg">
                  <div className="text-center p-8">
                    <Calendar size={48} className="mx-auto mb-4 text-secondary" />
                    <h3 className="text-xl font-bold mb-2">Calendly Integration</h3>
                    <p className="mb-4">
                      Our scheduling system will be integrated here. For now, please contact us directly to schedule
                      your consultation.
                    </p>
                    <Button asChild variant="secondary" size="lg">
                      <Link href="/contact">Contact Us</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Information Sidebar */}
            <div className="lg:w-1/3">
              <div className="bg-primary-light/10 p-6 rounded-lg shadow-sm border border-primary-light/20">
                <h2 className="text-2xl font-bold mb-6 text-heading">What to Expect</h2>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-secondary/10 p-3 rounded-full mr-4">
                      <Clock className="text-secondary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1 text-heading">30-Minute Session</h3>
                      <p>A focused discussion about your business needs and how we can help.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-secondary/10 p-3 rounded-full mr-4">
                      <Users className="text-secondary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1 text-heading">Meet Our Experts</h3>
                      <p>Connect with our experienced financial professionals who understand your industry.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-secondary/10 p-3 rounded-full mr-4">
                      <Calendar className="text-secondary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1 text-heading">Flexible Scheduling</h3>
                      <p>Choose a time that works for you. We offer both virtual and in-person meetings.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-primary text-white rounded-lg">
                  <h3 className="text-xl font-bold mb-4 text-on-dark">Prepare for Your Consultation</h3>
                  <p className="mb-4 text-on-dark-secondary">
                    To make the most of our time together, consider preparing:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-on-dark-secondary bg-primary text-white">
                    <li className="bg-primary text-white">Questions about your specific financial challenges</li>
                    <li className="bg-primary text-white">A brief overview of your current financial processes</li>
                    <li className="bg-primary text-white">Your business goals for the next 6-12 months</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-primary-light/10">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center text-heading">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-5 rounded-lg shadow-sm border border-primary-light/30">
              <h3 className="text-lg font-bold mb-2 text-heading">Is the consultation really free?</h3>
              <p>Yes, your initial 30-minute consultation is completely free with no obligation.</p>
            </div>

            <div className="bg-white p-5 rounded-lg shadow-sm border border-primary-light/30">
              <h3 className="text-lg font-bold mb-2 text-heading">How should I prepare?</h3>
              <p>
                Think about your current financial challenges and goals. Any specific questions you have will help us
                tailor our discussion.
              </p>
            </div>

            <div className="bg-white p-5 rounded-lg shadow-sm border border-primary-light/30">
              <h3 className="text-lg font-bold mb-2 text-heading">Can I reschedule if needed?</h3>
              <p>Absolutely. You can reschedule through the confirmation email you'll receive after booking.</p>
            </div>

            <div className="bg-white p-5 rounded-lg shadow-sm border border-primary-light/30">
              <h3 className="text-lg font-bold mb-2 text-heading">What happens after the consultation?</h3>
              <p>
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

