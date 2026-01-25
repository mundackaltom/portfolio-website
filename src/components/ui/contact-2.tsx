import React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface Contact2Props {
  title?: string;
  description?: string;
  phone?: string;
  email?: string;
  web?: { label: string; url: string };
}

export const Contact2 = ({
  title = "Contact Us",
  description = "We are available for questions, feedback, or collaboration opportunities. Let us know how we can help!",
  phone = "(123) 34567890",
  email = "email@example.com",
  web = { label: "shadcnblocks.com", url: "https://shadcnblocks.com" },
}: Contact2Props) => {
  return (
    <section className="py-16">
      <div className="container max-w-4xl">
        <div className="mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="mb-4 text-3xl font-bold lg:text-4xl">
              Send Us a Message
            </h1>
            <p className="text-gray-600 text-base">
              Please fill in the form below to get in touch with us.
            </p>
          </div>
          
          {/* Form */}
          <div className="max-w-2xl mx-auto">
            <div className="space-y-6">
              {/* Name Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Input 
                    type="text" 
                    placeholder="First name" 
                    className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg text-gray-700 placeholder-gray-500 focus:bg-white focus:ring-2 focus:ring-blue-500 transition-all"
                  />
                </div>
                <div>
                  <Input 
                    type="text" 
                    placeholder="Last name" 
                    className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg text-gray-700 placeholder-gray-500 focus:bg-white focus:ring-2 focus:ring-blue-500 transition-all"
                  />
                </div>
              </div>
              
              {/* Contact Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Input 
                    type="email" 
                    placeholder="Email address" 
                    className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg text-gray-700 placeholder-gray-500 focus:bg-white focus:ring-2 focus:ring-blue-500 transition-all"
                  />
                </div>
                <div>
                  <Input 
                    type="tel" 
                    placeholder="Phone Number" 
                    className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg text-gray-700 placeholder-gray-500 focus:bg-white focus:ring-2 focus:ring-blue-500 transition-all"
                  />
                </div>
              </div>
              
              {/* Message */}
              <div>
                <Textarea 
                  placeholder="Message" 
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg text-gray-700 placeholder-gray-500 focus:bg-white focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                />
              </div>
              
              {/* Terms Checkbox */}
              <div className="flex items-start gap-3">
                <input 
                  type="checkbox" 
                  id="terms" 
                  className="mt-1 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="terms" className="text-sm text-gray-600">
                  I've read and agree with{' '}
                  <a href="#" className="text-blue-600 hover:underline">Terms of Service</a>
                  {' '}and{' '}
                  <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>
                </label>
              </div>
              
              {/* Submit Button */}
              <div>
                <Button className="w-full md:w-auto px-8 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-medium">
                  Submit
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};