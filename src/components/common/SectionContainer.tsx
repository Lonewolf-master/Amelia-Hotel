import React from 'react';

interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const SectionContainer: React.FC<SectionContainerProps> = ({ 
  children, 
  className = '', 
  id 
}) => {
  return (
    <section 
      id={id}
      role="region"
      className={`py-24 px-8 ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
};

export default SectionContainer;
