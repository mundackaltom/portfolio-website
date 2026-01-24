"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TypingAnimationProps {
  texts: string[];
  duration?: number;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  className?: string;
  textClassName?: string;
}

export function TypingAnimation({
  texts,
  duration = 3000,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 1000,
  className,
  textClassName
}: TypingAnimationProps) {
  const [currentTextIndex, setCurrentTextIndex] = React.useState(0);
  const [currentText, setCurrentText] = React.useState("");
  const [isDeleting, setIsDeleting] = React.useState(false);
  const [showCursor, setShowCursor] = React.useState(true);

  React.useEffect(() => {
    if (texts.length === 0) return;

    const currentFullText = texts[currentTextIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting && currentText === currentFullText) {
        // Finished typing, start deleting after pause
        setTimeout(() => setIsDeleting(true), pauseDuration);
      } else if (isDeleting && currentText === "") {
        // Finished deleting, move to next text
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      } else if (!isDeleting) {
        // Continue typing
        setCurrentText(currentFullText.substring(0, currentText.length + 1));
      } else {
        // Continue deleting
        setCurrentText(currentText.substring(0, currentText.length - 1));
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, currentTextIndex, isDeleting, texts, typingSpeed, deletingSpeed, pauseDuration]);

  // Cursor blinking effect
  React.useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className={cn("relative flex items-center justify-center", className)}>
      <div className="text-center">
        <span className={cn("font-bold select-none", textClassName)}>
          {currentText}
          <motion.span
            animate={{ opacity: showCursor ? 1 : 0 }}
            transition={{ duration: 0.1 }}
            className="text-blue-600 ml-1"
          >
            |
          </motion.span>
        </span>
      </div>
    </div>
  );
}