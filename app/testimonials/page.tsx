import Image from "next/image"
import { Star } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function TestimonialsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="gradient-bg py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-on-dark">Trusted by Our Clients</h1>
          <p className="text-xl max-w-3xl mx-auto text-on-dark-secondary">
            Hear what our clients have to say about their experience working with BG Accounting Services.
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="card-grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <div className="card bg-white p-8 rounded-lg shadow-md border border-primary-light/20">
              <div className="flex text-yellow-400 mb-4">
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
              </div>
              <div className="card-body">
                <blockquote className="text-lg italic mb-6">
                  "BG Accounting has transformed our business finances. They're professional, responsive, and genuinely
                  care about our success. Since working with them, we've gained clarity on our financial position and
                  made better business decisions."
                </blockquote>
              </div>
              <div className="card-footer">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image src="/placeholder.svg?height=50&width=50" alt="Alex R." width={50} height={50} />
                  </div>
                  <div>
                    <p className="font-bold text-heading">Alex R.</p>
                    <p>Business Owner</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="card bg-white p-8 rounded-lg shadow-md border border-primary-light/20">
              <div className="flex text-yellow-400 mb-4">
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
              </div>
              <div className="card-body">
                <blockquote className="text-lg italic mb-6">
                  "Reliable, insightful, and highly recommended! Our payroll and taxes have never been smoother. The
                  team at BG Accounting is knowledgeable and always available to answer our questions."
                </blockquote>
              </div>
              <div className="card-footer">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image src="/placeholder.svg?height=50&width=50" alt="Jamie L." width={50} height={50} />
                  </div>
                  <div>
                    <p className="font-bold text-heading">Jamie L.</p>
                    <p>Business Owner</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="card bg-white p-8 rounded-lg shadow-md border border-primary-light/20">
              <div className="flex text-yellow-400 mb-4">
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
              </div>
              <div className="card-body">
                <blockquote className="text-lg italic mb-6">
                  "Working with BG Accounting has been a game-changer for our nonprofit. Their expertise in grant
                  management and financial reporting has helped us secure additional funding and maintain compliance
                  with all requirements."
                </blockquote>
              </div>
              <div className="card-footer">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image src="/placeholder.svg?height=50&width=50" alt="Michael T." width={50} height={50} />
                  </div>
                  <div>
                    <p className="font-bold text-heading">Michael T.</p>
                    <p>Business Owner</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial 4 */}
            <div className="card bg-white p-8 rounded-lg shadow-md border border-primary-light/20">
              <div className="flex text-yellow-400 mb-4">
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
              </div>
              <div className="card-body">
                <blockquote className="text-lg italic mb-6">
                  "I can't say enough good things about BG Accounting. They've helped me understand my business finances
                  in a way that makes sense, and their tax planning strategies have saved me thousands of dollars."
                </blockquote>
              </div>
              <div className="card-footer">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image src="/placeholder.svg?height=50&width=50" alt="Sarah K." width={50} height={50} />
                  </div>
                  <div>
                    <p className="font-bold text-heading">Sarah K.</p>
                    <p>Business Owner</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial 5 */}
            <div className="card bg-white p-8 rounded-lg shadow-md border border-primary-light/20">
              <div className="flex text-yellow-400 mb-4">
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
              </div>
              <div className="card-body">
                <blockquote className="text-lg italic mb-6">
                  "BG Accounting has been an invaluable partner for our growing business. Their attention to detail and
                  proactive approach have helped us avoid financial pitfalls and capitalize on opportunities."
                </blockquote>
              </div>
              <div className="card-footer">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image src="/placeholder.svg?height=50&width=50" alt="David M." width={50} height={50} />
                  </div>
                  <div>
                    <p className="font-bold text-heading">David M.</p>
                    <p>Business Owner</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial 6 */}
            <div className="card bg-white p-8 rounded-lg shadow-md border border-primary-light/20">
              <div className="flex text-yellow-400 mb-4">
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
              </div>
              <div className="card-body">
                <blockquote className="text-lg italic mb-6">
                  "As a freelancer, I was overwhelmed by the financial aspects of running my business. BG Accounting
                  simplified everything and gave me the confidence to focus on my work knowing my finances are in good
                  hands."
                </blockquote>
              </div>
              <div className="card-footer">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image src="/placeholder.svg?height=50&width=50" alt="Jennifer P." width={50} height={50} />
                  </div>
                  <div>
                    <p className="font-bold text-heading">Jennifer P.</p>
                    <p>Business Owner</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-on-dark">Join Our Satisfied Clients</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-on-dark-secondary">
            Experience the difference professional bookkeeping and financial services can make for your business.
          </p>
          <Button asChild variant="on-dark" size="lg" className="shadow-lg">
            <Link href="/book-consultation">Get a Free Consultation</Link>
          </Button>
        </div>
      </section>
    </>
  )
}

