"use client";

import { useEffect, useState } from "react";

const sections = ["top", "book", "framework", "author", "podcast", "preorder"];

/** Id of the section under the reading line (20% down the viewport); null while in the hero. */
export function useActiveSection() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id === "top" ? null : entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -79% 0px", threshold: 0 },
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return activeSection;
}
