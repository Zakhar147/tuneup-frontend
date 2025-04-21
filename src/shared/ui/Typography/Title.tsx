import { ReactNode } from 'react';
import clsx from 'clsx';

interface TitleProps {
  children: ReactNode;
  className?: string;
  as?: 'h1' | 'h2' | 'h3';
  pointer?: boolean
}

export const Title = ({ children, className = '', as: Tag = 'h1', pointer = false }: TitleProps) => {
  return (
    <Tag className={clsx(
      `text-title font-medium text-light-textMain dark:text-dark-textMain `,
      pointer ? 'cursor-pointer' : 'cursor-default',
      className
    )}>
      {children}
    </Tag>
  );
};