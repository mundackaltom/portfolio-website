import React from "react";
import { ContactMe } from "@/components/ui/contact-me";

export default function ContactSection() {
  return (
    <div style={{ fontFamily: 'Inter, sans-serif' }}>
      <ContactMe
        title="Contact Me"
        description="I am available for questions, feedback, or collaboration opportunities. Let me know how I can help!"
        phone="+91 7892831554"
        email="mundackaltom@gmail.com"
        github={{ label: "github.com/mundackaltom", url: "https://github.com/mundackaltom" }}
        linkedin={{ label: "linkedin.com/in/tomjimmy", url: "https://www.linkedin.com/in/tomjimmy/" }}
      />
    </div>
  );
}
