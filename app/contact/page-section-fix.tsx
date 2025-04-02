import Link from "next/link"
import { Button } from "@/components/ui/button"
// This is a partial file to show the specific fix for the section in the screenshot
// Add this to the contact information section in app/contact/page.tsx
;<div className="mt-8 p-6 bg-secondary text-white rounded-lg shadow-md">
  <h3 className="text-xl font-bold mb-4 text-on-dark">Free Consultation</h3>
  <p className="mb-4 text-on-dark-secondary">
    Schedule your free 30-minute consultation to discuss your business needs and how we can help.
  </p>
  <Button asChild variant="white" size="lg" className="w-full border border-white shadow-md font-semibold">
    <Link href="/book-consultation">Schedule Now</Link>
  </Button>
</div>

