import { useEffect, useRef, useState } from 'react';

const supportsIntersectionObserver = typeof IntersectionObserver !== 'undefined';

/**
 * True once the referenced element has entered the viewport (one-shot).
 * Starts already-visible when IntersectionObserver isn't available.
 */
export function useInView<T extends HTMLElement>(threshold = 0.15) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(() => !supportsIntersectionObserver);

  useEffect(() => {
    if (!supportsIntersectionObserver) return;

    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}
