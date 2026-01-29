"use client"

import * as React from "react"
import { Linkedin, Send } from "lucide-react"

function Footerdemo() {
  return (
    <footer className="relative border-t bg-white text-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-12 md:gap-16">
          {/* Newsletter */}
          <div className="flex flex-col gap-4">
            <h3 className="mb-0 text-lg font-semibold">Stay Connected</h3>
            <p className="text-sm text-gray-600">
              Final-year CSE student focused on Data, AI & Web Development.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="mb-0 text-lg font-semibold">Quick Links</h3>
            <nav className="flex flex-wrap justify-center md:justify-start items-center gap-x-4 gap-y-2 text-sm">
              <a href="#" className="transition-colors hover:text-gray-900 text-gray-600">
                Home
              </a>
              <span className="mx-1">·</span>
              <a href="#about" className="transition-colors hover:text-gray-900 text-gray-600">
                About
              </a>
              <span className="mx-1">·</span>
              <a href="#projects" className="transition-colors hover:text-gray-900 text-gray-600">
                Work
              </a>
              <span className="mx-1">·</span>
              <a href="#contact" className="transition-colors hover:text-gray-900 text-gray-600">
                Contact
              </a>
            </nav>
          </div>

          {/* Follow Me */}
          <div className="flex flex-col gap-4">
            <h3 className="mb-0 text-lg font-semibold">Follow Me</h3>
            <div className="flex justify-center md:justify-start items-center gap-6">
              <a
                href="mailto:mundackaltom@gmail.com"
                className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Email"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="M22 6 12 13 2 6" />
                </svg>
              </a>
              <a
                href="https://github.com/mundackaltom"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="GitHub"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.263.82-.582 0-.288-.01-1.05-.016-2.06-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.606-2.665-.304-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.236-3.22-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.96-.267 1.98-.399 3-.404 1.02.005 2.04.137 3 .404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.803 5.624-5.475 5.92.43.37.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.216.698.825.58C20.565 21.796 24 17.297 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/tomjimmy/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 text-center">
          <p className="text-sm text-gray-600">
            © 2025 Tom Jimmy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export { Footerdemo }