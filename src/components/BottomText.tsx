'use client';

import { useEffect, useRef, useState } from 'react';

interface BottomTextProps {
  text?: string;
}

export default function BottomText({ text = "Dev Sharma" }: BottomTextProps) {
  const textRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px',
      }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={textRef}
      className="relative w-full overflow-hidden py-32 mt-20 min-h-[400px] flex items-center justify-center"
    >
      <div
        className={`text-[clamp(4rem,20vw,16rem)] font-black text-center leading-none transition-all duration-1000 ease-out ${
          isVisible 
            ? 'translate-y-0 opacity-100' 
            : 'translate-y-32 opacity-0'
        }`}
        style={{
          background: 'linear-gradient(to bottom, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.2) 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          letterSpacing: '-0.02em',
        }}
      >
        {text}
      </div>
    </div>
  );
}
