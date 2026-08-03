"use client";

import { useEffect, useState } from "react";

/**
 * Returns the id of the section currently visible in the viewport.
 * Used by Navbar to highlight the active link.
 *
 * @param sectionIds  – array of section element IDs to observe
 * @param offset      – top offset in px (should match navbar height)
 */
export function useScrollSpy(
  sectionIds: string[],
  offset = 80
): string | null {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        {
          rootMargin: `-${offset}px 0px -60% 0px`,
          threshold: 0,
        }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [sectionIds, offset]);

  return active;
}
