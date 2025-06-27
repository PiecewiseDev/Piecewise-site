'use client';

import React, { ReactNode } from 'react';

type FeatureCardProps = {
  title: string;
  description: string;
  icon?: ReactNode;
  iconBgColor?: string;
  badge?: string;
  footer?: ReactNode;
  className?: string;
  href?: string;
  featured?: boolean;
  onClick?: () => void;
};

/**
 * FeatureCard - A reusable card component for features, use cases, or pricing
 *
 * Usage example:
 * ```tsx
 * <FeatureCard
 *   title="Feature Title"
 *   description="Description of the feature or service."
 *   icon={<SomeIcon className="w-6 h-6" />}
 *   badge="Popular"
 *   footer={<ButtonPrimary>Learn More</ButtonPrimary>}
 *   featured={true}
 * />
 * ```
 *
 * @param title - Card title
 * @param description - Card description text
 * @param icon - Optional icon component
 * @param iconBgColor - Optional background color for the icon container
 * @param badge - Optional badge text to show in the corner
 * @param footer - Optional footer content (buttons, links, etc.)
 * @param className - Additional CSS classes
 * @param href - Optional link for the entire card
 * @param featured - Whether this is a featured/highlighted card
 * @param onClick - Optional click handler
 */
export default function FeatureCard({
  title,
  description,
  icon,
  iconBgColor = 'bg-accent/10',
  badge,
  footer,
  className = '',
  href,
  featured = false,
  onClick,
}: FeatureCardProps) {
  // Base card styles
  const cardClasses = `
    card card-hover relative p-6 md:p-8 flex flex-col h-full
    ${featured ? 'border-accent shadow-md' : 'border-gray-200'}
    ${className}
    ${onClick || href ? 'cursor-pointer' : ''}
  `;

  // Card content
  const CardContent = () => (
    <>
      {/* Badge (if provided) */}
      {badge && (
        <div className="absolute top-4 right-4">
          <span className="inline-block bg-accent/20 text-accent text-xs font-medium px-2.5 py-1 rounded">
            {badge}
          </span>
        </div>
      )}

      {/* Icon (if provided) */}
      {icon && (
        <div
          className={`w-12 h-12 ${iconBgColor} rounded-full flex items-center justify-center mb-4`}
        >
          {icon}
        </div>
      )}

      {/* Title and Description */}
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-700 mb-4 flex-grow">{description}</p>

      {/* Footer (if provided) */}
      {footer && <div className="mt-auto">{footer}</div>}
    </>
  );

  // If the card is a link, wrap it in an anchor tag
  if (href) {
    return (
      <a href={href} className={cardClasses} onClick={onClick}>
        <CardContent />
      </a>
    );
  }

  // Otherwise, render as a div
  return (
    <div className={cardClasses} onClick={onClick}>
      <CardContent />
    </div>
  );
}
