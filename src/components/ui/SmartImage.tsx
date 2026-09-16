import { useState, type ComponentType } from 'react';

import { cn } from '@/lib/cn';

interface SmartImageProps {
  /** Path to the real photo, e.g. `/images/hero.jpg`. Drop a file there to replace the illustration. */
  src: string;
  alt: string;
  /** Illustration shown until `src` exists on disk. */
  fallback: ComponentType<{ className?: string }>;
  className?: string;
  eager?: boolean;
}

/**
 * Renders the real photo at `src` when it exists, and silently falls back to a
 * hand-drawn illustration when it doesn't (or fails to load). This means the
 * AI/stock photo for a given slot can be dropped into `public/images/` later
 * with no code changes — see AI_IMAGE_PROMPTS.md for the filename + prompt to use.
 */
export function SmartImage({ src, alt, fallback: Fallback, className, eager }: SmartImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className={cn('overflow-hidden', className)} role="img" aria-label={alt}>
        <Fallback className="h-full w-full" />
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={cn('object-cover', className)}
      loading={eager ? 'eager' : 'lazy'}
      onError={() => setFailed(true)}
    />
  );
}
