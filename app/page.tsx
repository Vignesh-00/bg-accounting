import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, BarChart, Users, DollarSign, TrendingUp } from "lucide-react"
import { SaveButton } from "@/components/ui/save-button"

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="gradient-bg py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-on-dark animate-fade-in">
                Empowering Business Owners to Thrive
              </h1>
              <div className="animate-slide-left" style={{ animationDelay: "200ms" }}>
                <p className="text-xl mb-8 text-on-dark-secondary">
                  Expert Bookkeeping and Financial Services Designed for Your Success.
                </p>
              </div>
              <div className="animate-fade-in" style={{ animationDelay: "400ms" }}>
                <SaveButton
                  text={{
                    idle: "Get a Free Consultation",
                    saving: "Preparing your consultation...",
                    saved: "Ready! Redirecting...",
                  }}
                  className="h-12 px-8 py-3 text-base shadow-lg"
                  href="/book-consultation"
                />
              </div>
            </div>
            <div className="md:w-1/2 animate-slide-right" style={{ animationDelay: "300ms" }}>
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2%20Pic%20for%20BG%20Accounting%20LLC%20.jpg-zb5tCGzhet6wuMhoSo8l6aVz3sk12r.jpeg"
                  alt="Professional accountant at BG Accounting Services"
                  width={600}
                  height={600}
                  className="rounded-lg object-cover w-full h-auto"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brief Description */}
      <section className="py-16 bg-primary-light/20">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <p className="text-lg leading-relaxed">
            BG Accounting Services LLC offers trusted accounting, bookkeeping, payroll, and financial planning services
            tailored to meet the unique needs of businesses. Let us handle your financial complexities so you can focus
            on growing your business and enjoying life.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          </div>
          <div className="card-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <div className="card bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-primary-light/20">
              <div className="text-secondary mb-4">
                <BarChart size={40} />
              </div>
              <div className="card-body">
                <h3 className="text-xl font-bold mb-2">Bookkeeping & Accounting</h3>
                <p className="mb-4">General ledger management, QuickBooks setup and maintenance.</p>
              </div>
              <div className="card-footer">
                <Link href="/services" className="text-secondary font-medium flex items-center hover:underline">
                  Learn more <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>

            <div className="card bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-primary-light/20">
              <div className="text-secondary mb-4">
                <Users size={40} />
              </div>
              <div className="card-body">
                <h3 className="text-xl font-bold mb-2">Payroll Services</h3>
                <p className="mb-4">Payroll processing, payroll tax reporting and payments.</p>
              </div>
              <div className="card-footer">
                <Link href="/services" className="text-secondary font-medium flex items-center hover:underline">
                  Learn more <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>

            <div className="card bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-primary-light/20">
              <div className="text-secondary mb-4">
                <DollarSign size={40} />
              </div>
              <div className="card-body">
                <h3 className="text-xl font-bold mb-2">Tax Services</h3>
                <p className="mb-4">Tax preparation, planning, and compliance for your business.</p>
              </div>
              <div className="card-footer">
                <Link href="/services" className="text-secondary font-medium flex items-center hover:underline">
                  Learn more <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>

            <div className="card bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-primary-light/20">
              <div className="text-secondary mb-4">
                <TrendingUp size={40} />
              </div>
              <div className="card-body">
                <h3 className="text-xl font-bold mb-2">Financial Analysis</h3>
                <p className="mb-4">Insights and recommendations to optimize your financial performance.</p>
              </div>
              <div className="card-footer">
                <Link href="/services" className="text-secondary font-medium flex items-center hover:underline">
                  Learn more <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: "500ms" }}>
            <Button asChild variant="outline" size="lg">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-primary-light/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose BG Accounting</h2>
          <div className="card-grid grid-cols-1 md:grid-cols-3">
            <div className="card bg-white p-6 rounded-lg shadow-md border border-primary-light/20">
              <h3 className="text-xl font-bold mb-4 text-heading">Expertise</h3>
              <div className="card-body">
                <p>
                  Our team brings years of experience and specialized knowledge to handle your financial needs with
                  precision and care.
                </p>
              </div>
            </div>

            <div className="card bg-white p-6 rounded-lg shadow-md border border-primary-light/20">
              <h3 className="text-xl font-bold mb-4 text-heading">Personalized Service</h3>
              <div className="card-body">
                <p>
                  We take the time to understand your unique business needs and provide tailored solutions that work for
                  you.
                </p>
              </div>
            </div>

            <div className="card bg-white p-6 rounded-lg shadow-md border border-primary-light/20">
              <h3 className="text-xl font-bold mb-4 text-heading">Peace of Mind</h3>
              <div className="card-body">
                <p>
                  Rest easy knowing your finances are in capable hands, allowing you to focus on what matters
                  most—growing your business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Preview */}
      <section className="py-16 gradient-bg">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12 text-on-dark">What Our Clients Say</h2>
          <div className="max-w-3xl mx-auto">
            <blockquote className="text-xl italic mb-6 text-on-dark-secondary">
              "BG Accounting has transformed our business finances. They're professional, responsive, and genuinely care
              about our success."
            </blockquote>
            <p className="font-bold text-on-dark">— Alex R., Business Owner</p>

            <div className="mt-10">
              <Button
                asChild
                variant="accent"
                size="lg"
                className="shadow-lg font-semibold border-2 border-white hover:bg-accent/90 transition-all"
              >
                <Link href="/testimonials" className="px-6 py-3 flex items-center justify-center">
                  Read More Testimonials
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-accent">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-heading">Ready to Simplify Your Business Finances?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-heading">
            Take the first step toward financial clarity and business growth. Schedule your free consultation today.
          </p>
          <Button asChild size="lg" variant="default" className="shadow-lg font-semibold">
            <Link href="/book-consultation">Get a Free Consultation</Link>
          </Button>
        </div>
      </section>
    </>
  )
}

