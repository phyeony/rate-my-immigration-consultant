import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import React from "react";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-3xl font-bold mb-8">Contact Consultant</h1>
      <form className="space-y-6">
        <Card className="mb-4"><CardContent className="p-6">
          <h2 className="text-xl font-bold mb-4">Share Your Information</h2>
          <div className="space-y-2">
            <label className="flex items-center gap-2"><Checkbox /> Basic Information</label>
            <label className="flex items-center gap-2"><Checkbox /> Age & Location</label>
            <label className="flex items-center gap-2"><Checkbox /> Language Proficiency</label>
            <label className="flex items-center gap-2"><Checkbox /> Education & Work</label>
            <label className="flex items-center gap-2"><Checkbox /> Immigration Preferences</label>
          </div>
        </CardContent></Card>
        <Card className="mb-4"><CardContent className="p-6">
          <h2 className="text-xl font-bold mb-4">Additional Message</h2>
          <Textarea placeholder="Add any specific questions or information you'd like to share..." />
        </CardContent></Card>
        <Card className="mb-4"><CardContent className="p-6">
          <h2 className="text-xl font-bold mb-4">Email Preview</h2>
          <div className="bg-gray-50 p-4 rounded font-mono text-sm">
            [Email preview will appear here]
          </div>
        </CardContent></Card>
        <div className="flex justify-end">
          <Button type="submit" className="px-8 py-3">Send Email</Button>
        </div>
      </form>
    </div>
  );
} 