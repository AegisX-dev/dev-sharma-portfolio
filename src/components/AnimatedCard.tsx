"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedCardProps {
  children: React.ReactNode;
  direction?: "left" | "right";
  delay?: number;
  className?: string;
}

export default function AnimatedCard({
  children,
  direction = "left",
  delay = 0,
  className = "",
}: AnimatedCardProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Scrolling down - animate inward
            setIsVisible(true);
            setHasAnimated(true);
          } else if (hasAnimated && entry.boundingClientRect.top > 0) {
            // Scrolling up and element is below viewport - animate outward
            setIsVisible(false);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px",
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [hasAnimated]);

  const getTransform = () => {
    if (!hasAnimated) {
      // Initial state - off screen
      return direction === "left" ? "-50px" : "50px";
    }
    if (isVisible) {
      // Visible - on screen
      return "0";
    }
    // Scrolling up - move out
    return direction === "left" ? "-50px" : "50px";
  };

  return (
    <div
      ref={cardRef}
      className={className}
      style={{
        transform: `translateX(${getTransform()})`,
        opacity: isVisible ? 1 : 0,
        transition: `transform 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s, opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s`,
        isolation: 'auto',
      }}
    >
      {children}
    </div>
  );
}
