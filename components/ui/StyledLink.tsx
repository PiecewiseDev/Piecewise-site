'use client';

import React, { ReactNode } from 'react';
import Link from 'next/link';

interface StyledLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'bold' | 'subtle';
  underline?: boolean;
  external?: boolean;
}

/**
 * StyledLink - A styled link component with animated underline effect
 *
 * @param href - The URL to navigate to
 * @param children - The content of the link
 * @param className - Additional CSS classes
 * @param variant - The style variant: 'default', 'bold', or 'subtle'
 * @param underline - Whether to show the animated underline effect
 * @param external - Whether the link is external (opens in new tab)
 */
const StyledLink: React.FC<StyledLinkProps> = ({
  href,
  children,
  className = '',
  variant = 'default',
  underline = true,
  external = false,
}) => {
  // Variant styles
  const variantClasses = {
    default: 'text-navy hover:text-accent',
    bold: 'text-navy font-medium hover:text-accent',
    subtle: 'text-gray-600 hover:text-navy',
  };

  // External link attributes
  const externalProps = external
    ? {
        target: '_blank',
        rel: 'noopener noreferrer',
      }
    : {};

  return (
    <Link
      href={href}
      className={`inline-flex items-center ${variantClasses[variant]} hover:no-underline ${className}`}
      {...externalProps}
    >
      <span className="relative inline-flex overflow-hidden group">
        <span className="relative z-10">{children}</span>
        {underline && (
          <span
            className="absolute left-0 bottom-0 h-[2px] w-0 bg-accent transition-all duration-300 group-hover:w-full"
            aria-hidden="true"
          />
        )}
      </span>
    </Link>
  );
};

export default StyledLink;
