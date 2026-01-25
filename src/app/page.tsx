import Navbar from '@/components/Navbar';
import EnhancedHero from '@/components/EnhancedHero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import { ClientOnlyFooter } from '@/components/ClientOnlyFooter';

export default function Home() {
  return (
    <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      <EnhancedHero />
      <main className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <About />
        <Projects />
      </main>
      <ClientOnlyFooter />
    </div>
  );
}
