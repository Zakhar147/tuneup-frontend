import { ReactNode } from 'react';
import clsx from 'clsx';

interface TitleProps {
  children: ReactNode;
  className?: string;
  as?: 'h1' | 'h2' | 'h3';
}

export const Title = ({ children, className = '', as: Tag = 'h1' }: TitleProps) => {
  return (
    <Tag className={clsx(
      'text-3xl font-bold text-light-textMain dark:text-dark-textMain',
      className
    )}>
      {children}
    </Tag>
  );
};