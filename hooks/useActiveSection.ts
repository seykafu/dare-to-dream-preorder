"use client";

import { useEffect, useState } from "react";

const sections = ["home", "dream", "about", "podcast", "preorder"];

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const sectionElements: { [key: string]: HTMLElement | null } = {};

    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        sectionElements[sectionId] = element;
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setActiveSection(sectionId);
              }
            });
          },
          {
            rootMargin: "-20% 0px -70% 0px",
            threshold: 0,
          }
        );
        observer.observe(element);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return activeSection;
}

