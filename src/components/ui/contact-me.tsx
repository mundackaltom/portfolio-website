import React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface ContactMeProps {
  title?: string;
  description?: string;
  phone?: string;
  email?: string;
  github?: { label: string; url: string };
  linkedin?: { label: string; url: string };
}

export const ContactMe = ({
  title = "Contact Me",
  description = "I am available for questions, feedback, or collaboration opportunities. Let me know how I can help!",
  phone = "(123) 34567890",
  email = "email@example.com",
  github = {
    label: "github.com/yourusername",
    url: "https://github.com/yourusername",
  },
  linkedin = {
    label: "linkedin.com/in/yourusername",
    url: "https://linkedin.com/in/yourusername",
  },
}: ContactMeProps) => {
  return (
    <section id="contact" className="py-24">
      {/* ✅ This wrapper is the key fix: it centers + adds padding properly */}
      <div className="mx-auto w-full max-w-6xl px-6 lg:px-10">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          {/* Left side */}
          <div className="flex flex-col gap-10">
            <div className="text-left">
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                {title}
              </h1>

              <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
                {description}
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold">Contact Details</h3>

              <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                <li>
                  <span className="font-semibold text-foreground">Phone: </span>
                  {phone}
                </li>

                <li>
                  <span className="font-semibold text-foreground">Email: </span>
                  <a
                    href={`mailto:${email}`}
                    className="underline underline-offset-4"
                  >
                    {email}
                  </a>
                </li>

                <li>
                  <span className="font-semibold text-foreground">GitHub: </span>
                  <a
                    href={github.url}
                    target="_blank"
                    rel="noreferrer"
                    className="underline underline-offset-4"
                  >
                    {github.label}
                  </a>
                </li>

                <li>
                  <span className="font-semibold text-foreground">
                    LinkedIn:{" "}
                  </span>
                  <a
                    href={linkedin.url}
                    target="_blank"
                    rel="noreferrer"
                    className="underline underline-offset-4"
                  >
                    {linkedin.label}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Right side form */}
          <div className="w-full rounded-xl border bg-background p-8 shadow-sm sm:p-10">
            <form className="flex flex-col gap-6">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="grid w-full items-center gap-1.5">
                  <Label htmlFor="firstname">First Name</Label>
                  <Input
                    type="text"
                    id="firstname"
                    placeholder="First Name"
                    required
                  />
                </div>

                <div className="grid w-full items-center gap-1.5">
                  <Label htmlFor="lastname">Last Name</Label>
                  <Input
                    type="text"
                    id="lastname"
                    placeholder="Last Name"
                    required
                  />
                </div>
              </div>

              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="email">Email</Label>
                <Input type="email" id="email" placeholder="Email" required />
              </div>

              <div className="grid w-full gap-1.5">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  placeholder="Type your message here."
                  id="message"
                  required
                />
              </div>

              <Button className="w-full rounded-md bg-black text-white hover:bg-black/90">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};