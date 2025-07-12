import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import React from "react";

export default function RegisterPage() {
  return (
    <>
      {/* Header */}
      <header className="flex justify-between items-center p-4 border-b border-gray-200 bg-white">
        <div className="text-2xl font-bold text-primary">
          <a href="/" className="text-[#337ab7]">Immigration Now</a>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 max-w-3xl">
        <h1 className="text-3xl font-bold mb-8 text-center">Register as an Immigration Consultant</h1>
        <form className="space-y-6">
          {/* Personal Information */}
          <div className="bg-white border rounded-lg p-6 mb-4">
            <h2 className="text-xl font-bold mb-4">Personal Information</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block font-medium">First Name</label>
                <Input required className="mt-1" />
              </div>
              <div>
                <label className="block font-medium">Last Name</label>
                <Input required className="mt-1" />
              </div>
            </div>
            <div className="mt-4">
              <label className="block font-medium">Profile Picture</label>
              <Input type="file" accept="image/*" className="mt-1" />
            </div>
          </div>

          {/* Professional Information */}
          <div className="bg-white border rounded-lg p-6 mb-4">
            <h2 className="text-xl font-bold mb-4">Professional Information</h2>
            <div className="space-y-4">
              <div>
                <label className="block font-medium">License Type</label>
                <select className="form-input" required>
                  <option>RCIC (Regulated Canadian Immigration Consultant)</option>
                  <option>Immigration Lawyer</option>
                </select>
              </div>
              <div>
                <label className="block font-medium">License Number</label>
                <Input required className="mt-1" />
              </div>
              <div>
                <label className="block font-medium">Years of Experience</label>
                <Input type="number" min={0} required className="mt-1" />
              </div>
              <div>
                <label className="block font-medium">Company Name (if applicable)</label>
                <Input className="mt-1" />
              </div>
            </div>
          </div>

          {/* Services & Expertise */}
          <div className="bg-white border rounded-lg p-6 mb-4">
            <h2 className="text-xl font-bold mb-4">Services & Expertise</h2>
            <div className="space-y-4">
              <div>
                <label className="block font-medium mb-2">Specializations</label>
                <div className="grid grid-cols-2 gap-2">
                  {['Express Entry','Study Permit','Work Permit','PNP','Family Sponsorship','Business Immigration'].map((spec) => (
                    <label key={spec} className="flex items-center">
                      <Checkbox className="mr-2" /> {spec}
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label className="block font-medium mb-2">Languages Spoken</label>
                <div className="grid grid-cols-2 gap-2">
                  {['English','French','Mandarin','Hindi','Spanish','Other'].map((lang) => (
                    <label key={lang} className="flex items-center">
                      <Checkbox className="mr-2" /> {lang}
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Service Details */}
          <div className="bg-white border rounded-lg p-6 mb-4">
            <h2 className="text-xl font-bold mb-4">Service Details</h2>
            <div className="space-y-4">
              <div>
                <label className="block font-medium">Initial Consultation Fee</label>
                <div className="flex items-center">
                  <span className="mr-2">$</span>
                  <Input type="number" required className="mt-1" />
                </div>
              </div>
              <div>
                <label className="block font-medium">Service Fee Range</label>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <span className="mr-2">$</span>
                    <Input type="number" placeholder="Min" required className="mt-1" />
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2">$</span>
                    <Input type="number" placeholder="Max" required className="mt-1" />
                  </div>
                </div>
              </div>
              <div>
                <label className="block font-medium">Availability</label>
                <div className="space-y-2 mt-2">
                  <label className="flex items-center">
                    <Checkbox className="mr-2" /> Available for Remote Consultations
                  </label>
                  <label className="flex items-center">
                    <Checkbox className="mr-2" /> Available for In-person Consultations
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* About & Bio */}
          <div className="bg-white border rounded-lg p-6 mb-4">
            <h2 className="text-xl font-bold mb-4">About You</h2>
            <div>
              <label className="block font-medium">Professional Biography</label>
              <Textarea
                className="form-input h-32 mt-1"
                placeholder="Tell potential clients about your experience, approach, and what makes you unique..."
                required
              />
            </div>
          </div>

          {/* Terms and Conditions */}
          <div className="bg-white border rounded-lg p-6 mb-4">
            <div className="space-y-4">
              <label className="flex items-start">
                <Checkbox className="mt-1 mr-2" required />
                <span className="text-sm">
                  I confirm that all information provided is accurate and I agree to Immigration Now's{' '}
                  <a href="#" className="text-primary hover:underline">Terms of Service</a> and{' '}
                  <a href="#" className="text-primary hover:underline">Privacy Policy</a>
                </span>
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <Button type="submit" className="px-8 py-3">Submit Registration</Button>
          </div>
        </form>
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