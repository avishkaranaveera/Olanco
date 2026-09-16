import { cn } from '@/lib/cn';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn('max-w-2xl space-y-3', align === 'center' && 'mx-auto text-center', className)}
    >
      {eyebrow ? (
        <p className="text-brand-600 dark:text-brand-300 text-sm font-semibold tracking-wide uppercase">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
      {description ? (
        <p className="text-brand-700/80 dark:text-cream-100/70 text-lg">{description}</p>
      ) : null}
    </div>
  );
}
