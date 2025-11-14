"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedSectionProps {
  children: React.ReactNode;
  direction?: "left" | "right";
  delay?: number;
  className?: string;
  id?: string;
}

export default function AnimatedSection({
  children,
  direction = "left",
  delay = 0,
  className = "",
  id,
}: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  const getTransform = () => {
    if (!hasAnimated) {
      // Initial state - off screen
      return direction === "left" ? "-100%" : "100%";
    }
    if (isVisible) {
      // Visible - on screen
      return "0";
    }
    // Scrolling up - move out
    return direction === "left" ? "-100%" : "100%";
  };

  return (
    <div
      ref={sectionRef}
      id={id}
      className={className}
      style={{
        transform: `translateX(${getTransform()})`,
        opacity: isVisible ? 1 : 0,
        transition: `transform 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s, opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s`,
        isolation: 'auto',
      }}
    >
      {children}
    </div>
  );
}
