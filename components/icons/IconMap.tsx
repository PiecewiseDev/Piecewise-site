import React from 'react';
import * as Icons from './index';

interface IconMapProps {
  icon: string;
  className?: string;
}

/**
 * Maps a string identifier to the corresponding icon component
 * Used to prevent TypeScript errors when using JSX in data files
 */
export const IconMap: React.FC<IconMapProps> = ({ icon, className }) => {
  switch (icon) {
    case 'clock':
      return <Icons.ClockIcon className={className} />;
    case 'shield-check':
      return <Icons.ShieldCheckIcon className={className} />;
    case 'smile':
      return <Icons.SmileIcon className={className} />;
    case 'document':
      return <Icons.DocumentIcon className={className} />;
    case 'currency':
      return <Icons.CurrencyIcon className={className} />;
    case 'chat':
      return <Icons.ChatIcon className={className} />;
    case 'user':
      return <Icons.UserIcon className={className} />;
    case 'building':
      return <Icons.BuildingIcon className={className} />;
    case 'check-circle':
      return <Icons.CheckCircleIcon className={className} />;
    case 'heart':
      return <Icons.HeartIcon className={className} />;
    case 'users':
      return <Icons.UsersIcon className={className} />;
    case 'shield':
      return <Icons.ShieldIcon className={className} />;
    case 'faq':
      return <Icons.FaqIcon className={className} />;
    default:
      return <Icons.DocumentIcon className={className} />; // Default icon
  }
}; 