import * as React from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | 'default'
    | 'destructive'
    | 'success'
    | 'warning'
    | 'outline'
    | 'secondary'
    | 'ghost'
    | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', ...props }, ref) => {
    const baseStyles = cn(
      'relative inline-flex items-center justify-center gap-2',
      'whitespace-nowrap text-sm font-medium font-sans tracking-wide',
      'transition-all duration-300 ease-out',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
      'disabled:pointer-events-none disabled:opacity-50',
      "[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0",
      'rounded-lg'
    );

    const iconHitArea = "before:absolute before:-inset-1.5 before:content-['']";

    const variants = {
      default: cn(
        'bg-primary text-primary-foreground',
        'border border-primary/30',
        'shadow-pb-sm',
        'hover:bg-primary/90 hover:scale-[1.02] hover:shadow-pb-glow',
        'active:scale-[0.98]'
      ),
      destructive: cn(
        'bg-destructive text-white',
        'border border-destructive/30',
        'shadow-pb-sm',
        'hover:bg-destructive/90 hover:scale-[1.02] hover:shadow-pb-glow',
        'active:scale-[0.98]'
      ),
      success: cn(
        'bg-success text-white',
        'border border-success/30',
        'shadow-pb-sm',
        'hover:bg-success/90 hover:scale-[1.02] hover:shadow-pb-glow',
        'active:scale-[0.98]'
      ),
      warning: cn(
        'bg-warning text-black',
        'border border-warning/30',
        'shadow-pb-sm',
        'hover:bg-warning/90 hover:scale-[1.02] hover:shadow-pb-glow',
        'active:scale-[0.98]'
      ),
      outline: cn(
        'bg-transparent text-foreground',
        'border border-border',
        'shadow-pb-sm',
        'hover:bg-accent hover:text-accent-foreground hover:scale-[1.02] hover:shadow-pb-glow',
        'active:scale-[0.98]'
      ),
      secondary: cn(
        'bg-secondary text-secondary-foreground',
        'border border-border',
        'shadow-pb-sm',
        'hover:bg-secondary/80 hover:scale-[1.02] hover:shadow-pb-glow',
        'active:scale-[0.98]'
      ),
      ghost: cn(
        'bg-transparent text-foreground',
        'border-none shadow-none',
        'hover:bg-accent hover:text-accent-foreground',
        'active:bg-accent/80'
      ),
      link: cn(
        'bg-transparent text-primary',
        'border-none shadow-none',
        'underline-offset-4 hover:underline',
        'p-0 h-auto'
      ),
    };

    const sizes = {
      default: 'h-10 px-6 py-2',
      sm: 'h-8 px-4 py-1 text-xs',
      lg: 'h-12 px-8 py-3 text-base',
      icon: cn('h-11 w-11 p-0', iconHitArea),
    };

    const variantClass = variants[variant];
    const sizeClass = sizes[size];

    return (
      <button ref={ref} className={cn(baseStyles, variantClass, sizeClass, className)} {...props} />
    );
  }
);
Button.displayName = 'Button';

export { Button };
