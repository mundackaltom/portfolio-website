'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

// Scroll to top on any /projects/* navigation. Keeps home anchor scrolling unchanged
// because this runs only within the /projects segment layout.
export function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Disable browser scroll restoration for this segment to avoid reusing prior positions.
    const prev = window.history.scrollRestoration;
    window.history.scrollRestoration = 'manual';
    return () => {
      window.history.scrollRestoration = prev;
    };
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    // "instant" isn't a standard ScrollBehavior value; we coerce it to satisfy the intent:
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname]);

  return null;
}

