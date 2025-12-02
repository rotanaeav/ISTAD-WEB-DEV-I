"use client";

import { useState, useEffect } from "react";

interface TypewriterProps {
  text: string;
  speed?: number;
  pause?: number;
  className?: string;
  cursorClassName?: string;
}

export default function Typewriter({ 
  text, 
  speed = 100, 
  pause = 2000,
  className = "",
  cursorClassName = "bg-blue-500"
}: TypewriterProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const currentLength = displayedText.length;

      if (!isDeleting) {
        if (currentLength < text.length) {
          setDisplayedText(text.substring(0, currentLength + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pause);
          return; 
        }
      } else {
        if (currentLength > 0) {
          setDisplayedText(text.substring(0, currentLength - 1));
        } else {
          setIsDeleting(false);
        }
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? speed / 2 : speed);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, text, speed, pause]);

  return (
    <span className={`inline-flex items-center ${className}`}>
      {displayedText}
      <span className={`ml-1 inline-block w-[3px] h-[1em] align-middle animate-pulse rounded-full ${cursorClassName}`} />
    </span>
  );
}