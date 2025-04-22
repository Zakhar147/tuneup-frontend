import React, { ElementType, ReactNode } from 'react';
import clsx from 'clsx';


interface TextProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  pointer?: boolean;
  title?: boolean;
}

export const Typography: React.FC<TextProps> = ({
  children,
  as: Tag = 'p',
  className,
  pointer = false,
  title = false,
}) => {
  const colorClass  = title
    ? 'text-light-textMain dark:text-dark-textMain'
    : 'text-light-textSecond dark:text-dark-textSecond';

  return (
    <Tag
      className={clsx(
        colorClass,
        pointer ? 'cursor-pointer' : 'cursor-default',
        className
      )}
    >
      {children}
    </Tag>
  );
};
