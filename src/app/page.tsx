import Navbar from '@/components/Navbar';
import EnhancedHero from '@/components/EnhancedHero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import { ClientOnlyFooter } from '@/components/ClientOnlyFooter';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      <EnhancedHero />
      <main className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <About />
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
