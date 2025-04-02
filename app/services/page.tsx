import { BarChart, Users, FileText, TrendingUp, DollarSign, FileCheck, Award, PieChart } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="gradient-bg py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-on-dark">Our Services</h1>
          <p className="text-xl max-w-3xl mx-auto text-on-dark-secondary">
            Comprehensive bookkeeping and financial services to streamline your operations and enhance decision-making.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="card-grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Bookkeeping & Accounting */}
            <div className="card bg-white p-8 rounded-lg shadow-md flex border border-primary-light/20">
              <div className="mr-6 text-secondary">
                <BarChart size={48} />
              </div>
              <div className="card-body">
                <h3 className="text-2xl font-bold mb-4 text-heading">Bookkeeping & Accounting</h3>
                <p className="mb-4">
                  We maintain accurate and up-to-date financial records for your business, providing you with a clear
                  picture of your financial health.
                </p>
                <ul className="space-y-2">
                  <li>• General ledger management</li>
                  <li>• QuickBooks setup and maintenance</li>
                  <li>• Monthly reconciliations</li>
                  <li>• Financial record organization</li>
                </ul>
              </div>
            </div>

            {/* Payroll Services */}
            <div className="card bg-white p-8 rounded-lg shadow-md flex border border-primary-light/20">
              <div className="mr-6 text-secondary">
                <Users size={48} />
              </div>
              <div className="card-body">
                <h3 className="text-2xl font-bold mb-4 text-heading">Payroll Services</h3>
                <p className="mb-4">
                  We handle all aspects of your payroll processing, ensuring accurate and timely payments to your
                  employees.
                </p>
                <ul className="space-y-2">
                  <li>• Payroll processing</li>
                  <li>• Payroll tax reporting and payments</li>
                  <li>• Employee benefits administration</li>
                  <li>• Year-end W-2 and 1099 preparation</li>
                </ul>
              </div>
            </div>

            {/* Accounts Payable & Receivable */}
            <div className="card bg-white p-8 rounded-lg shadow-md flex border border-primary-light/20">
              <div className="mr-6 text-secondary">
                <FileText size={48} />
              </div>
              <div className="card-body">
                <h3 className="text-2xl font-bold mb-4 text-heading">Accounts Payable & Receivable</h3>
                <p className="mb-4">
                  We streamline your billing and payment processes to improve cash flow and reduce administrative
                  burden.
                </p>
                <ul className="space-y-2">
                  <li>• Invoice generation and delivery</li>
                  <li>• Payment processing and tracking</li>
                  <li>• Vendor bill management</li>
                  <li>• Aging reports and collections support</li>
                </ul>
              </div>
            </div>

            {/* Budgeting & Forecasting */}
            <div className="card bg-white p-8 rounded-lg shadow-md flex border border-primary-light/20">
              <div className="mr-6 text-secondary">
                <TrendingUp size={48} />
              </div>
              <div className="card-body">
                <h3 className="text-2xl font-bold mb-4 text-heading">Budgeting & Forecasting</h3>
                <p className="mb-4">
                  We help you plan for the future with detailed budgets and financial forecasts tailored to your
                  business goals.
                </p>
                <ul className="space-y-2">
                  <li>• Annual budget preparation</li>
                  <li>• Cash flow management</li>
                  <li>• Financial forecasting</li>
                  <li>• Scenario planning</li>
                </ul>
              </div>
            </div>

            {/* Financial Statements */}
            <div className="card bg-white p-8 rounded-lg shadow-md flex border border-primary-light/20">
              <div className="mr-6 text-secondary">
                <PieChart size={48} />
              </div>
              <div className="card-body">
                <h3 className="text-2xl font-bold mb-4 text-heading">Financial Statements</h3>
                <p className="mb-4">
                  We prepare accurate financial statements that provide insights into your business performance and
                  financial position.
                </p>
                <ul className="space-y-2">
                  <li>• Balance Sheets</li>
                  <li>• Income Statements</li>
                  <li>• Cash Flow Statements</li>
                  <li>• Custom financial reports</li>
                </ul>
              </div>
            </div>

            {/* Tax Services */}
            <div className="card bg-white p-8 rounded-lg shadow-md flex border border-primary-light/20">
              <div className="mr-6 text-secondary">
                <DollarSign size={48} />
              </div>
              <div className="card-body">
                <h3 className="text-2xl font-bold mb-4 text-heading">Tax Services</h3>
                <p className="mb-4">
                  We help you navigate complex tax regulations and identify strategies to minimize your tax burden.
                </p>
                <ul className="space-y-2">
                  <li>• Tax preparation</li>
                  <li>• Tax planning and strategy</li>
                  <li>• Tax compliance</li>
                  <li>• IRS representation</li>
                </ul>
              </div>
            </div>

            {/* Grant Management */}
            <div className="card bg-white p-8 rounded-lg shadow-md flex border border-primary-light/20">
              <div className="mr-6 text-secondary">
                <Award size={48} />
              </div>
              <div className="card-body">
                <h3 className="text-2xl font-bold mb-4 text-heading">Grant Management</h3>
                <p className="mb-4">
                  We provide comprehensive support for organizations that receive and manage grants.
                </p>
                <ul className="space-y-2">
                  <li>• Grant writing assistance</li>
                  <li>• Financial reporting for grants</li>
                  <li>• Compliance monitoring</li>
                  <li>• Grant budget management</li>
                </ul>
              </div>
            </div>

            {/* Financial Analysis & Advisory */}
            <div className="card bg-white p-8 rounded-lg shadow-md flex border border-primary-light/20">
              <div className="mr-6 text-secondary">
                <FileCheck size={48} />
              </div>
              <div className="card-body">
                <h3 className="text-2xl font-bold mb-4 text-heading">Financial Analysis & Advisory</h3>
                <p className="mb-4">
                  We provide insights and recommendations to help you make informed business decisions and improve
                  financial performance.
                </p>
                <ul className="space-y-2">
                  <li>• Financial ratio analysis</li>
                  <li>• Profitability assessment</li>
                  <li>• Business performance review</li>
                  <li>• Strategic financial planning</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-primary-light/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-heading">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold mb-2 text-heading">Consultation</h3>
              <p>We meet to understand your business needs and financial goals.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold mb-2 text-heading">Assessment</h3>
              <p>We review your current financial systems and identify opportunities for improvement.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold mb-2 text-heading">Implementation</h3>
              <p>We set up efficient systems and processes tailored to your business.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-bold mb-2 text-heading">Ongoing Support</h3>
              <p>We provide continuous service and adapt as your business grows and evolves.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-on-dark">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-on-dark-secondary">
            Contact us today to discuss how our services can benefit your business and schedule your free consultation.
          </p>
          <Button asChild variant="on-dark" size="lg" className="shadow-lg">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </>
  )
}

