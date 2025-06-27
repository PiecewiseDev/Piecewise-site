'use client';

import React, { ReactNode } from 'react';
import Link from 'next/link';

type ButtonProps = {
  children: ReactNode;
  className?: string;
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  icon?: ReactNode;
  isLoading?: boolean;
};

/**
 * Button base component with shared functionality
 * Not intended for direct use - use ButtonPrimary or ButtonSecondary instead
 */
const Button = ({
  children,
  className = '',
  href,
  type = 'button',
  size = 'md',
  fullWidth = false,
  onClick,
  disabled = false,
  icon,
  isLoading = false,
  ...props
}: ButtonProps & { [key: string]: any }) => {
  // Size classes
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  // Width class
  const widthClass = fullWidth ? 'w-full' : '';

  // Loading and disabled states
  const isDisabled = disabled || isLoading;

  // Size-specific classes for icons
  const iconSizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-5 w-5',
    lg: 'h-6 w-6',
  };

  // Common classes for all button types
  const baseClasses = `
    inline-flex items-center justify-center font-medium rounded-lg
    transition-all duration-200 ease-in-out ${sizeClasses[size]} ${widthClass}
    ${isDisabled ? 'opacity-60 cursor-not-allowed' : ''}
    ${className}
  `;

  // Loading indicator
  const LoadingSpinner = () => (
    <svg
      className="animate-spin -ml-1 mr-2 h-4 w-4"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
  );

  // Content with icon and/or loading spinner
  const content = (
    <>
      {isLoading && <LoadingSpinner />}
      {icon && !isLoading && (
        <span className={`mr-2 flex items-center justify-center ${iconSizeClasses[size]}`}>
          {icon}
        </span>
      )}
      {children}
    </>
  );

  // Render as link or button
  if (href) {
    return (
      <Link
        href={href}
        className={baseClasses}
        onClick={isDisabled ? (e) => e.preventDefault() : onClick}
        {...props}
      >
        {content}
      </Link>
    );
  }

  return (
    <button type={type} className={baseClasses} onClick={onClick} disabled={isDisabled} {...props}>
      {content}
    </button>
  );
};

/**
 * ButtonPrimary - Primary action button with dark background and white text
 *
 * Usage example:
 * ```tsx
 * <ButtonPrimary href="/contact">Contact Us</ButtonPrimary>
 * <ButtonPrimary onClick={handleAction} size="lg">Get Started</ButtonPrimary>
 * <ButtonPrimary isLoading>Processing...</ButtonPrimary>
 * ```
 */
export function ButtonPrimary(props: ButtonProps) {
  return (
    <Button
      {...props}
      className={`bg-[#1a2e3b] text-white hover:opacity-90 hover:shadow-lg hover:brightness-105 
      hover:-translate-y-0.5 active:opacity-90 active:shadow-sm active:translate-y-0.5
      focus:ring-2 focus:ring-accent focus:outline-none shadow-sm ${props.className || ''}`}
    />
  );
}

/**
 * ButtonSecondary - Secondary button with transparent background and border
 *
 * Usage example:
 * ```tsx
 * <ButtonSecondary href="/learn-more">Learn More</ButtonSecondary>
 * <ButtonSecondary onClick={handleAction}>View Details</ButtonSecondary>
 * ```
 */
export function ButtonSecondary(props: ButtonProps) {
  return (
    <Button
      {...props}
      className={`border border-[#1a2e3b] text-[#1a2e3b] bg-white hover:bg-gray-100 
      hover:shadow-md hover:-translate-y-0.5 active:opacity-90 active:shadow-sm active:translate-y-0.5
      focus:ring-2 focus:ring-accent focus:outline-none ${props.className || ''}`}
    />
  );
}

/**
 * ButtonAccent - Accent button with the brand's accent color (green)
 *
 * Usage example:
 * ```tsx
 * <ButtonAccent href="/signup">Sign Up</ButtonAccent>
 * <ButtonAccent onClick={handleAction}>Start Free Trial</ButtonAccent>
 * ```
 */
export function ButtonAccent(props: ButtonProps) {
  return (
    <Button
      {...props}
      className={`bg-accent text-white hover:bg-accent-dark hover:shadow-lg hover:brightness-105 
      hover:-translate-y-0.5 active:opacity-90 active:shadow-sm active:translate-y-0.5
      focus:ring-2 focus:ring-accent focus:outline-none shadow-sm ${props.className || ''}`}
    />
  );
}
