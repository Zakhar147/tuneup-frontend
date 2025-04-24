import React, { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export const Container: React.FC<ContainerProps> = ({ children, className = '' }) => (
  <div className={`
    max-w-[900px] w-full mx-auto
    bg-light-container bg-opacity-80
    dark:bg-dark-container dark:bg-opacity-80
    max-md:max-w-[600px]
     min-h-screen
    ${className} `}>
        {children}
  </div>
);