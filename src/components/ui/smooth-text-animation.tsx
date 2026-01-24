"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface SmoothTextAnimationProps {
  texts: string[];
  duration?: number;
  pauseDuration?: number;
  className?: string;
  textClassName?: string;
}

export function SmoothTextAnimation({
  texts,
  duration = 3000, // Duration to display each text
  pauseDuration = 500, // Pause between transitions
  className,
  textClassName
}: SmoothTextAnimationProps) {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isVisible, setIsVisible] = React.useState(true);

  React.useEffect(() => {
    if (texts.length <= 1) return;

    const interval = setInterval(() => {
      setIsVisible(false);
      
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setIsVisible(true);
      }, 200); // Reduced pause for smoother transition
    }, duration);

    return () => clearInterval(interval);
  }, [texts, duration, pauseDuration]);

  const slideVariants = {
    enter: {
      y: 30,
      opacity: 0,
      scale: 0.9,
      filter: "blur(8px)"
    },
    center: {
      y: 0,
      opacity: 1,
      scale: 1,
      filter: "blur(0px)"
    },
    exit: {
      y: -30,
      opacity: 0,
      scale: 1.1,
      filter: "blur(8px)"
    }
  };

  const transition = {
    duration: 0.6,
    ease: "easeInOut" as const,
    opacity: { duration: 0.4 },
    filter: { duration: 0.5 }
  };

  return (
    <div className={cn("relative flex items-center justify-center h-full", className)}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={transition}
          className="absolute flex items-center justify-center"
        >
          <span className={cn(
            "text-center font-bold select-none",
            "bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent",
            textClassName
          )}>
            {texts[currentIndex]}
          </span>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}