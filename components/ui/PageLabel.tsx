import React from 'react';

type PageLabelProps = {
  label: string;
  className?: string;
};

const PageLabel: React.FC<PageLabelProps> = ({ label, className = '' }) => {
  return (
    <div className={`flex justify-center mb-4 ${className}`}>
      <div className="bg-[#f2f5f9] text-black px-2.5 py-0.5 rounded-full text-[10px] font-medium uppercase tracking-wide">
        {label}
      </div>
    </div>
  );
};

export default PageLabel; 