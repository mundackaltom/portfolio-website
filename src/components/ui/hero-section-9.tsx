"use client";

import { motion } from 'framer-motion';
import { Button, type ButtonProps } from '@/components/ui/button'; // Assuming Button is in your components folder
import { cn } from '@/lib/utils'; // Your utility for class names
import React from 'react';
import { easeInOut } from "framer-motion";
import { SocialLinks } from '@/components/ui/social-links';
import Image from 'next/image';

// Define the props for reusability
interface StatProps {
  value: string;
  label: string;
  icon: React.ReactNode;
}

interface ActionProps {
  text: string;
  onClick: () => void;
  variant?: ButtonProps['variant'];
  className?: string;
}

interface HeroSectionProps {
  title: React.ReactNode;
  subtitle: string;
  actions: ActionProps[];
  stats: StatProps[];
  images: string[];
  className?: string;
}

// Animation variants for Framer Motion
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: easeInOut, // Updated to use a valid easing function from framer-motion
    },
  },
};

const floatingVariants = {
  animate: {
    y: [0, -8, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: easeInOut, // Updated to use a valid easing function from framer-motion
    },
  },
};
// Replace the large hero image on the right side of the Hero section
// with my personal photo (night street portrait).
// Requirements:
// - Use next/image for optimization
// - Keep the image as the main large hero image (not the smaller stacked cards)
// - Maintain existing layout, spacing, and rounded corners
// - Ensure the image is responsive (fills container, object-cover)
// - Add subtle shadow similar to current hero image
// - Image path: /public/me1.jpeg
// - Do NOT remove the smaller decorative images
// - Only swap the primary hero image source
const HeroSection = ({ actions, images, className }: HeroSectionProps) => {
  const handleScrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className={cn('w-full overflow-hidden bg-background min-h-screen py-20 flex items-center', className)}>
      <div className="container mx-auto grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-8">
        {/* Left Column: Text Content */}
        <motion.div
          className="flex flex-col items-center text-center lg:items-start lg:text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl"
            variants={itemVariants}
          >
            <span className="block">Hello, I'm</span>
            <span className="block" style={{ fontFamily: 'Labrada, serif', fontWeight: 300 }}>Tom Jimmy</span>
          </motion.h1>
          <motion.p className="mt-6 max-w-md text-lg text-muted-foreground" variants={itemVariants}>
            Passionate about creating solutions that make a difference.
          </motion.p>
          <motion.div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start" variants={itemVariants}>
            {actions.map((action, index) => (
              <Button
                key={index}
                onClick={
                  action.text === "Join the Class"
                    ? handleScrollToContact
                    : action.text === "Learn more"
                    ? handleScrollToProjects
                    : action.onClick
                }
                variant={action.variant}
                size="lg"
                className={action.className}
              >
                {action.text === "Join the Class"
                  ? "Contact Me"
                  : action.text === "Learn more"
                  ? "View Projects"
                  : action.text}
              </Button>
            ))}
          </motion.div>
          {/* Social Links */}
          <motion.div className="mt-12" variants={itemVariants}>
            <SocialLinks className="flex justify-end gap-6 lg:gap-8" />
          </motion.div>
        </motion.div>

        {/* Right Column: Image Collage */}
        <motion.div
          className="relative h-[400px] w-full sm:h-[500px]"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Removed the blue circle */}

          {/* Images */}
          <motion.div
            className="absolute left-1/2 top-0 h-48 w-48 -translate-x-1/2 rounded-2xl bg-muted p-2 shadow-lg sm:h-64 sm:w-64"
            style={{ transformOrigin: 'bottom center' }}
            variants={imageVariants}
          >
            <Image
              src="/images/me1.jpeg"
              alt="Night street portrait"
              className="h-full w-full rounded-xl object-cover shadow-md"
              fill
            />
          </motion.div>
          <motion.div
            className="absolute right-0 top-1/3 h-40 w-40 rounded-2xl bg-muted p-2 shadow-lg sm:h-56 sm:w-56"
            style={{ transformOrigin: 'left center' }}
            variants={imageVariants}
          >
            <Image
              src="/images/iam3.jpeg"
              alt="Updated portrait"
              className="h-full w-full rounded-xl object-cover"
              fill
            />
          </motion.div>
          <motion.div
            className="absolute bottom-4 left-12 h-32 w-32 rounded-2xl bg-muted p-2 shadow-lg sm:h-48 sm:w-48"
            style={{ transformOrigin: 'top right' }}
            variants={imageVariants}
          >
            <Image
              src="/images/iam2.jpeg"
              alt="Leftmost bottom placeholder image"
              className="h-full w-full rounded-xl object-cover"
              fill
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;