import Navbar from '@/components/Navbar';
import EnhancedHero from '@/components/EnhancedHero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import ContactMe from '@/components/ContactMe';
import { ClientOnlyFooter } from '@/components/ClientOnlyFooter';

export default function Home() {
  return (
    <>
      <Navbar />
      <EnhancedHero />
      <main className="bg-white text-gray-900">
        <About />
        <Projects />
        <ContactMe />
      </main>
      <ClientOnlyFooter />
    </>
  );
}
