"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface SimpleTypingAnimationProps {
  text: string;
  duration?: number;
  className?: string;
  style?: React.CSSProperties;
}

export function SimpleTypingAnimation({
  text,
  duration = 200,
  className,
  style,
}: SimpleTypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState<string>("");
  const [i, setI] = useState<number>(0);

  useEffect(() => {
    let typingEffect: NodeJS.Timeout;
    
    if (i < text.length) {
      typingEffect = setTimeout(() => {
        setDisplayedText(text.substring(0, i + 1));
        setI(i + 1);
      }, duration);
    }

    return () => {
      if (typingEffect) {
        clearTimeout(typingEffect);
      }
    };
  }, [duration, i, text]);

  // Reset when text changes
  useEffect(() => {
    setDisplayedText("");
    setI(0);
  }, [text]);

  return (
    <span
      className={cn(
        "font-serif font-light tracking-[-0.02em]",
        className,
      )}
      style={style}
    >
      {displayedText ? displayedText : text}
    </span>
  );
}