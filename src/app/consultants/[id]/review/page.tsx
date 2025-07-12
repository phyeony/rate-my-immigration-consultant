import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import React from "react";

export default function WriteReviewPage() {
  return (
    <>
      {/* Header */}
      <header className="flex justify-between items-center p-4 border-b border-gray-200">
        <div className="text-2xl font-bold text-primary">
          <a href="/" className="text-[#337ab7]">Immigration Now</a>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 max-w-2xl">
        {/* Consultant Info */}
        <div className="flex items-center gap-4 mb-8">
          <img src="https://via.placeholder.com/64" alt="John Smith" className="w-16 h-16 rounded-full object-cover" />
          <div>
            <h1 className="text-2xl font-bold">Write a Review for John Smith</h1>
            <p className="text-gray-600">RCIC License #R123456</p>
          </div>
        </div>

        {/* Review Form */}
        <form className="space-y-6">
          {/* Rating */}
          <div>
            <label className="block text-lg font-bold mb-2">Your Rating</label>
            <div className="flex gap-1 text-2xl text-gray-300">
              {[5,4,3,2,1].map((star) => (
                <span key={star} className="cursor-pointer text-[#fbbf24]">★</span>
              ))}
            </div>
          </div>

          {/* Service Type */}
          <div>
            <label className="block text-lg font-bold mb-2">Type of Service</label>
            <select className="w-full p-2 border rounded-md">
              <option>Express Entry</option>
              <option>Study Permit</option>
              <option>Work Permit</option>
              <option>Provincial Nominee Program</option>
              <option>Family Sponsorship</option>
              <option>Other</option>
            </select>
          </div>

          {/* Review Text */}
          <div>
            <label className="block text-lg font-bold mb-2">Your Review</label>
            <Textarea
              className="w-full p-3 border rounded-md h-32"
              placeholder="Share your experience working with this consultant..."
            />
          </div>

          {/* Anonymous Option */}
          <div className="flex items-center gap-2">
            <Checkbox id="anonymous" className="w-4 h-4" />
            <label htmlFor="anonymous">Post anonymously</label>
          </div>

          {/* Review Guidelines */}
          <div className="bg-gray-50 p-4 rounded-md text-sm text-gray-600">
            <h3 className="font-bold mb-2">Review Guidelines:</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Focus on your personal experience with the consultant</li>
              <li>Be honest and constructive</li>
              <li>Avoid personal attacks or inappropriate language</li>
              <li>Do not include personal or sensitive information</li>
            </ul>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <Button type="submit">Submit Review</Button>
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