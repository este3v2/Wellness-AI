import React from 'react';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  bg?: 'white' | 'stone' | 'teal';
}

export const Section: React.FC<SectionProps> = ({ id, className = '', children, bg = 'stone' }) => {
  const bgColors = {
    white: 'bg-white',
    stone: 'bg-stone-50',
    teal: 'bg-teal-50',
  };

  return (
    <section id={id} className={`py-16 md:py-24 ${bgColors[bg]} ${className}`}>
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10">
        {children}
      </div>
    </section>
  );
};