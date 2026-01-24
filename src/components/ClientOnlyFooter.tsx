'use client';
import { useEffect, useState } from 'react';
import { Footerdemo } from "@/components/ui/footer-section";

function ClientOnlyFooter() {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return (
      <footer className="relative border-t bg-white text-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            <div className="relative">
              <h2 className="mb-4 text-3xl font-bold tracking-tight">Stay Connected</h2>
              <p className="mb-6 text-gray-600">
                Join our newsletter for the latest updates and exclusive offers.
              </p>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
              <nav className="space-y-2 text-sm">
                <a href="#" className="block transition-colors hover:text-gray-900">Home</a>
                <a href="#about" className="block transition-colors hover:text-gray-900">About Us</a>
                <a href="#work" className="block transition-colors hover:text-gray-900">Work</a>
                <a href="#projects" className="block transition-colors hover:text-gray-900">Projects</a>
                <a href="#contact" className="block transition-colors hover:text-gray-900">Contact</a>
              </nav>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
              <address className="space-y-2 text-sm not-italic text-gray-600">
                <p>123 Innovation Street</p>
                <p>Tech City, TC 12345</p>
                <p>Phone: (123) 456-7890</p>
                <p>Email: hello@example.com</p>
              </address>
            </div>
            <div className="relative">
              <h3 className="mb-4 text-lg font-semibold">Follow Us</h3>
              <p className="text-sm text-gray-600">Loading social links...</p>
            </div>
          </div>
          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-8 text-center md:flex-row">
            <p className="text-sm text-gray-600">
              © 2024 Your Portfolio. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    );
  }

  return <Footerdemo />;
}

export { ClientOnlyFooter };