'use client';
import { Contact2 } from '@/components/ui/contact-2';

export default function Contact() {
  return (
    <div id="contact">
      <Contact2 
        title="Let's Connect"
        description="I'm always interested in new opportunities, collaborations, and interesting projects. Whether you have a question, want to work together, or just want to say hello, I'd love to hear from you."
        phone="+1 (555) 123-4567"
        email="tom.jimmy@example.com"
        web={{ label: "tomjimmy.dev", url: "https://tomjimmy.dev" }}
      />
    </div>
  );
}