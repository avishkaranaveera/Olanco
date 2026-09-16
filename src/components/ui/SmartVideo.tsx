import { useState, type ComponentType } from 'react';

import { withBase } from '@/lib/basePath';
import { cn } from '@/lib/cn';

interface SmartVideoProps {
  /** Public paths to the video, e.g. { mp4: '/videos/x.mp4', webm: '/videos/x.webm' }. */
  sources: { mp4: string; webm?: string };
  poster: string;
  /** Illustration shown if the video itself fails to load. */
  fallback: ComponentType<{ className?: string }>;
  className?: string;
  title: string;
}

/**
 * Autoplaying, muted, looping background-style video with a poster image.
 * Falls back to a hand-drawn illustration if the video source 404s, mirroring
 * `SmartImage` so a missing/replaced video file never breaks the layout.
 */
export function SmartVideo({
  sources,
  poster,
  fallback: Fallback,
  className,
  title,
}: SmartVideoProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className={cn('overflow-hidden', className)} role="img" aria-label={title}>
        <Fallback className="h-full w-full" />
      </div>
    );
  }

  return (
    <video
      className={cn('object-cover', className)}
      poster={withBase(poster)}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      aria-label={title}
      onError={() => setFailed(true)}
    >
      {sources.webm ? <source src={withBase(sources.webm)} type="video/webm" /> : null}
      <source src={withBase(sources.mp4)} type="video/mp4" />
    </video>
  );
}
