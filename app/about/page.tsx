import Image from "next/image"
import { Heart, Shield, Award } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="gradient-bg py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-on-dark">
            Your Trusted Partner in Financial Clarity
          </h1>
        </div>
      </section>

      {/* About Us Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <Image
                  // src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2%20Pic%20for%20BG%20Accounting%20LLC%20.jpg-zb5tCGzhet6wuMhoSo8l6aVz3sk12r.jpeg"
                  src="/placeholder.svg?height=50&width=50"
                  alt="BG Accounting professional"
                  width={500}
                  height={500}
                  className="rounded-lg object-cover w-full"
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-heading">Our Story</h2>
              <p className="mb-6 leading-relaxed">
                At BG Accounting Services LLC, we deeply understand the financial challenges business owners face. As
                second-generation entrepreneurs, we know firsthand the difference professional financial guidance can
                make. Our mission is to empower you with reliable, transparent, and expert accounting services that
                provide peace of mind and foster business growth.
              </p>
              <p className="leading-relaxed">
                We believe that every business deserves access to high-quality financial services that were once only
                available to large corporations. Our team combines technical expertise with a personal touch to deliver
                solutions that make a real difference for our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-primary-light/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-heading">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center border border-primary-light/20">
              <div className="inline-block p-4 bg-secondary/10 rounded-full mb-4">
                <Heart size={40} className="text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-heading">Empathy</h3>
              <p>
                Personalized support tailored to your needs. We take the time to understand your unique challenges and
                goals.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center border border-primary-light/20">
              <div className="inline-block p-4 bg-secondary/10 rounded-full mb-4">
                <Shield size={40} className="text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-heading">Trust</h3>
              <p>
                Transparent communication and reliable financial advice. We build relationships based on honesty and
                integrity.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center border border-primary-light/20">
              <div className="inline-block p-4 bg-secondary/10 rounded-full mb-4">
                <Award size={40} className="text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-heading">Expertise</h3>
              <p>
                Committed to excellence and continuous learning. We stay updated with the latest financial practices and
                technologies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-primary text-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-on-dark">Our Mission</h3>
              <p className="text-lg leading-relaxed text-on-dark-secondary">
                Empowering businesses through expert bookkeeping, personalized support, and trusted financial guidance.
              </p>
            </div>

            <div className="bg-secondary text-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-on-dark">Our Vision</h3>
              <p className="text-lg leading-relaxed text-on-dark-secondary">
                To be the leading bookkeeping partner for businesses, enabling clients to achieve financial clarity,
                security, and growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-primary-light/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-heading">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card bg-white p-8 rounded-lg shadow-md border border-primary-light/20 text-center">
              <div className="w-20 h-20 mx-auto bg-secondary rounded-full flex items-center justify-center mb-6">
                <span className="text-white text-2xl font-bold">BA</span>
              </div>
              <h3 className="text-xl font-bold mb-1 text-heading">Berenice Albright</h3>
              <p className="mb-4">
                With over 18 years of experience in accounting and financial management for international businesses,
                Berenice leads our team with expertise and vision.
              </p>
              <div className="flex justify-center space-x-3 text-secondary">
                <span className="font-medium text-sm px-3 py-1 bg-secondary/10 rounded-full">Strategic Planning</span>
                <span className="font-medium text-sm px-3 py-1 bg-secondary/10 rounded-full">Leadership</span>
              </div>
            </div>

            <div className="card bg-white p-8 rounded-lg shadow-md border border-primary-light/20 text-center">
              <div className="w-20 h-20 mx-auto bg-primary rounded-full flex items-center justify-center mb-6">
                <span className="text-white text-2xl font-bold">DP</span>
              </div>
              <h3 className="text-xl font-bold mb-1 text-heading">David Patel</h3>
              <p className="text-secondary mb-4">Senior Tax Specialist</p>
              <p className="mb-4">
                David specializes in complex tax planning and compliance, helping our clients navigate regulations
                across multiple states and industries.
              </p>
              <div className="flex justify-center space-x-3 text-secondary">
                <span className="font-medium text-sm px-3 py-1 bg-secondary/10 rounded-full">Tax Strategy</span>
                <span className="font-medium text-sm px-3 py-1 bg-secondary/10 rounded-full">Compliance</span>
              </div>
            </div>

            <div className="card bg-white p-8 rounded-lg shadow-md border border-primary-light/20 text-center">
              <div className="w-20 h-20 mx-auto bg-accent rounded-full flex items-center justify-center mb-6">
                <span className="text-heading text-2xl font-bold">LR</span>
              </div>
              <h3 className="text-xl font-bold mb-1 text-heading">Layla Rodriguez</h3>
              <p className="text-secondary mb-4">Financial Analysis Director</p>
              <p className="mb-4">
                With a background in data science and finance, Layla transforms complex financial data into actionable
                insights for business growth.
              </p>
              <div className="flex justify-center space-x-3 text-secondary">
                <span className="font-medium text-sm px-3 py-1 bg-secondary/10 rounded-full">Analytics</span>
                <span className="font-medium text-sm px-3 py-1 bg-secondary/10 rounded-full">Forecasting</span>
              </div>
            </div>

            <div className="card bg-white p-8 rounded-lg shadow-md border border-primary-light/20 text-center">
              <div className="w-20 h-20 mx-auto bg-secondary/70 rounded-full flex items-center justify-center mb-6">
                <span className="text-white text-2xl font-bold">JW</span>
              </div>
              <h3 className="text-xl font-bold mb-1 text-heading">James Wong</h3>
              <p className="text-secondary mb-4">Bookkeeping Team Lead</p>
              <p className="mb-4">
                James brings precision and efficiency to our bookkeeping processes, ensuring clients' financial records
                are accurate and up-to-date.
              </p>
              <div className="flex justify-center space-x-3 text-secondary">
                <span className="font-medium text-sm px-3 py-1 bg-secondary/10 rounded-full">QuickBooks</span>
                <span className="font-medium text-sm px-3 py-1 bg-secondary/10 rounded-full">Process Design</span>
              </div>
            </div>

            <div className="card bg-white p-8 rounded-lg shadow-md border border-primary-light/20 text-center">
              <div className="w-20 h-20 mx-auto bg-primary/70 rounded-full flex items-center justify-center mb-6">
                <span className="text-white text-2xl font-bold">AK</span>
              </div>
              <h3 className="text-xl font-bold mb-1 text-heading">Aisha Khan</h3>
              <p className="text-secondary mb-4">Nonprofit Specialist</p>
              <p className="mb-4">
                Aisha specializes in nonprofit accounting and grant management, helping organizations maximize their
                impact through sound financial practices.
              </p>
              <div className="flex justify-center space-x-3 text-secondary">
                <span className="font-medium text-sm px-3 py-1 bg-secondary/10 rounded-full">Grant Management</span>
                <span className="font-medium text-sm px-3 py-1 bg-secondary/10 rounded-full">Compliance</span>
              </div>
            </div>

            <div className="card bg-white p-8 rounded-lg shadow-md border border-primary-light/20 text-center">
              <div className="w-20 h-20 mx-auto bg-accent/80 rounded-full flex items-center justify-center mb-6">
                <span className="text-heading text-2xl font-bold">TJ</span>
              </div>
              <h3 className="text-xl font-bold mb-1 text-heading">Tyler Jackson</h3>
              <p className="text-secondary mb-4">Client Success Manager</p>
              <p className="mb-4">
                Tyler ensures our clients receive exceptional service and support, acting as the bridge between our
                technical team and client needs.
              </p>
              <div className="flex justify-center space-x-3 text-secondary">
                <span className="font-medium text-sm px-3 py-1 bg-secondary/10 rounded-full">Client Relations</span>
                <span className="font-medium text-sm px-3 py-1 bg-secondary/10 rounded-full">Communication</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-on-dark">Ready to Work With Our Team?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-on-dark-secondary">
            Schedule a consultation to discuss how we can help your business achieve financial success.
          </p>
          <Button asChild variant="on-dark" size="lg" className="shadow-lg">
            <Link href="/book-consultation">Get a Free Consultation</Link>
          </Button>
        </div>
      </section>
    </>
  )
}

