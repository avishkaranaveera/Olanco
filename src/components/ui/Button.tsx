import type { ComponentProps } from 'react';
import { Link } from 'react-router';

import { cn } from '@/lib/cn';

const base =
  'inline-flex items-center justify-center gap-2 rounded-md px-5 py-2.5 text-sm font-semibold transition-colors focus-visible:outline-brand-400';

const variants = {
  primary:
    'bg-brand-700 text-cream-50 hover:bg-brand-800 dark:bg-brand-400 dark:text-brand-900 dark:hover:bg-brand-300',
  secondary:
    'border border-brand-300 text-brand-800 hover:bg-brand-100 dark:border-brand-600 dark:text-cream-100 dark:hover:bg-brand-800',
  ghost: 'text-brand-700 hover:bg-brand-100 dark:text-cream-100 dark:hover:bg-brand-800',
};

interface ButtonLinkProps extends ComponentProps<typeof Link> {
  variant?: keyof typeof variants;
}

export function ButtonLink({ variant = 'primary', className, ...props }: ButtonLinkProps) {
  return <Link className={cn(base, variants[variant], className)} {...props} />;
}

interface ButtonProps extends ComponentProps<'button'> {
  variant?: keyof typeof variants;
}

export function Button({ variant = 'primary', className, ...props }: ButtonProps) {
  return <button className={cn(base, variants[variant], className)} {...props} />;
}
