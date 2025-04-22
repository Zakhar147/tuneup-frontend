import { ReactNode } from 'react';
import clsx from 'clsx';

interface SubtitleProps {
  children: ReactNode;
  className?: string;
  as?: 'h2' | 'h3';
  pointer?: boolean
}

export const Subtitle: React.FC<SubtitleProps> = ({ children, className = '', as: Tag = 'h2', pointer = false }) => {
  return (
    <Tag className={clsx(
      'text-subtitle font-medium text-light-textSecond dark:text-dark-textSecond',
      pointer ? 'cursor-pointer' : 'cursor-default',
      className
    )}>
      {children}
    </Tag>
  );
};