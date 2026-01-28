"use client";

import Navbar from '@/components/Navbar';
import HeroSection from '@/components/ui/hero-section-9';
import About from '@/components/About';
import Projects from '@/components/Projects';
import { ClientOnlyFooter } from '@/components/ClientOnlyFooter';
import ContactSection from '@/components/ContactSection';
import { Users, Briefcase, Link as LinkIcon } from 'lucide-react';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    // Disable browser scroll restoration
    if (typeof window !== 'undefined') {
      history.scrollRestoration = 'manual';
    }

    // Check if navigating back from a project page
    const fromProject = sessionStorage.getItem('fromProject');
    if (fromProject) {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
      }
      // Clear the flag after scrolling
      sessionStorage.removeItem('fromProject');
    } else {
      // Scroll to top on direct visit or reload
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  }, []);

  const heroData = {
    title: (
      <>
        A new way to learn <br /> & get knowledge
      </>
    ),
    subtitle: 'EduFlex is here for you with various courses & materials from skilled tutors all around the world.',
    actions: [
      {
        text: 'Join the Class',
        onClick: () => alert('Join the Class clicked!'),
        variant: 'default' as const,
      },
      {
        text: 'Learn more',
        onClick: () => alert('Learn More clicked!'),
        variant: 'outline' as const,
      },
    ],
    stats: [
      {
        value: '15,2K',
        label: 'Active students',
        icon: <Users className="h-5 w-5 text-muted-foreground" />,
      },
      {
        value: '4,5K',
        label: 'Tutors',
        icon: <Briefcase className="h-5 w-5 text-muted-foreground" />,
      },
      {
        value: 'Resources',
        label: '',
        icon: <LinkIcon className="h-5 w-5 text-muted-foreground" />,
      },
    ],
    images: [
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop',
      'https://plus.unsplash.com/premium_photo-1663054774427-55adfb2be76f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=900?q=80&w=2070&auto=format&fit=crop',
    ],
  };

  return (
    <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      <HeroSection
        title={heroData.title}
        subtitle={heroData.subtitle}
        actions={heroData.actions}
        stats={heroData.stats}
        images={heroData.images}
      />
      <main className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <section id="about">
          <About />
        </section>
        <div className="w-full flex justify-center my-6">
          <div className="h-1 w-16 bg-gray-200 rounded-full" />
        </div>
        <section id="work">
          <Projects />
        </section>
        <ContactSection />
      </main>
      <ClientOnlyFooter />
    </div>
  );
}
