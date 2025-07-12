import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";

export default function ConsultantProfilePage() {
  return (
    <>
      {/* Header */}
      <header className="flex justify-between items-center p-4 border-b border-gray-200">
        <div className="text-2xl font-bold text-primary">
          <a href="/" className="text-[#337ab7]">Immigration Now</a>
        </div>
        <nav className="flex gap-4 items-center">
          <Button>Sign Up and Get Listed</Button>
        </nav>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 max-w-5xl">
        {/* Consultant Header */}
        <div className="flex gap-8 mb-8">
          <img src="https://via.placeholder.com/200" alt="John Smith" className="w-48 h-48 rounded-lg object-cover" />
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <h1 className="text-3xl font-bold">John Smith</h1>
              <svg className="w-6 h-6 text-[#007bff]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
              </svg>
            </div>
            <p className="text-lg text-gray-600 mb-4">RCIC License #R123456</p>
            <div className="flex gap-4 text-lg mb-4">
              <div className="text-yellow-400">★★★★★</div>
              <span className="font-bold">4.8/5</span>
              <span className="text-gray-600">(125 reviews)</span>
            </div>
            <div className="flex gap-4 mb-4">
              <Button>Request Consultation</Button>
            </div>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="col-span-2">
            {/* About Section */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">About</h2>
              <p className="text-gray-700 mb-4">
                With over 10 years of experience in Canadian immigration consulting, I specialize in Express Entry and Provincial Nominee Programs. My approach is client-focused, ensuring clear communication and thorough preparation throughout the immigration process.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-bold mb-2">Specializations</h3>
                  <ul className="list-disc list-inside text-gray-700">
                    <li>Express Entry</li>
                    <li>Provincial Nominee Program</li>
                    <li>Study Permits</li>
                    <li>Work Permits</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Languages</h3>
                  <ul className="list-disc list-inside text-gray-700">
                    <li>English (Native)</li>
                    <li>French (Fluent)</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Reviews Section */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Reviews</h2>
              {/* Review Card 1 */}
              <Card className="border review-card mb-4">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-bold">Michael Chen</h3>
                      <p className="text-gray-600">Express Entry Application • 2 months ago</p>
                    </div>
                    <div className="text-yellow-400">★★★★★</div>
                  </div>
                  <p className="text-gray-700">
                    John was incredibly helpful throughout my Express Entry application process. His knowledge and attention to detail made the entire process smooth and successful. Highly recommended!
                  </p>
                </CardContent>
              </Card>
              {/* Review Card 2 */}
              <Card className="border review-card mb-4">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-bold">Anonymous</h3>
                      <p className="text-gray-600">Study Permit • 3 months ago</p>
                    </div>
                    <div className="text-yellow-400">★★★★★</div>
                  </div>
                  <p className="text-gray-700">
                    Professional service from start to finish. John helped me understand all the requirements and prepared my application perfectly. I got my study permit without any issues.
                  </p>
                </CardContent>
              </Card>
            </section>
          </div>

          {/* Right Column */}
          <div>
            {/* Contact Info Card */}
            <Card className="border rounded-lg p-6 bg-white sticky top-4">
              <CardContent className="p-0">
                <h2 className="text-xl font-bold mb-4">Contact Information</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-bold mb-1">Location</h3>
                    <p className="text-gray-700">Toronto, ON</p>
                    <p className="text-gray-700">Available for remote consultations</p>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Consultation Fee</h3>
                    <p className="text-gray-700">$150 - Initial Consultation</p>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Service Fees</h3>
                    <p className="text-gray-700">$1,500 - $2,500</p>
                    <p className="text-sm text-gray-600">Varies by application type</p>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Experience</h3>
                    <p className="text-gray-700">10+ years</p>
                  </div>
                  <Button className="w-full mt-4">Request Consultation</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 mt-8 py-8">
        <div className="container mx-auto px-4 text-center text-gray-600">
          © 2024 Immigration Now. All rights reserved.
        </div>
      </footer>
    </>
  );
} 