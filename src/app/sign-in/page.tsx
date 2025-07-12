import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";

export default function SignInPage() {
  return (
    <>
      {/* Header */}
      <header className="flex justify-between items-center p-4 border-b border-gray-200 bg-white">
        <div className="text-2xl font-bold text-primary">
          <a href="/" className="text-[#337ab7]">Immigration Now</a>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto">
          <Card className="rounded-2xl shadow p-8">
            <CardContent className="p-0">
              <div className="text-center mb-8">
                <h1 className="text-2xl font-bold mb-2">Welcome to Immigration Now</h1>
                <p className="text-gray-600">Sign in to access your account</p>
              </div>
              {/* Google Sign In */}
              <Button className="w-full flex items-center justify-center gap-3 bg-white text-gray-800 border border-gray-300 hover:bg-gray-50 mb-8">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Continue with Google
              </Button>
              <div className="text-center text-sm text-gray-600">
                <p>By signing in, you agree to Immigration Now's</p>
                <p className="mt-1">
                  <a href="#" className="text-primary hover:underline">Terms of Service</a>
                  &nbsp;and&nbsp;
                  <a href="#" className="text-primary hover:underline">Privacy Policy</a>
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Additional Info */}
          <div className="mt-8 text-center">
            <h2 className="text-xl font-bold mb-4">Why Sign In?</h2>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="p-4 bg-white rounded-lg shadow">
                <h3 className="font-bold mb-2">Write Reviews</h3>
                <p className="text-gray-600">Share your experience with immigration consultants</p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow">
                <h3 className="font-bold mb-2">Save Favorites</h3>
                <p className="text-gray-600">Bookmark consultants for later reference</p>
              </div>
            </div>
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