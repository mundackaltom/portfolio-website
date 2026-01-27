import Navbar from '@/components/Navbar';
import { ClientOnlyFooter } from '@/components/ClientOnlyFooter';

export default function ProjectsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      <main className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen pt-20">
        {children}
      </main>
      <ClientOnlyFooter />
    </div>
  );
}

