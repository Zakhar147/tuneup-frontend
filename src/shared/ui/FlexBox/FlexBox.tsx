import { ReactNode } from 'react';
import clsx from 'clsx';

interface FlexBoxProps {
  children: ReactNode;
  className?: string;
  justify?: 'start' | 'center' | 'between' | 'end';
  align?: 'start' | 'center' | 'end';
  direction?: 'row' | 'col';
  gap?: string;
}

export const FlexBox: React.FC<FlexBoxProps> = ({
  children,
  className = '',
  justify = 'between',
  align = 'center',
  direction = 'row',
  gap,
}) => {
  const justifyClass = {
    start: 'justify-start',
    center: 'justify-center',
    between: 'justify-between',
    end: 'justify-end',
  }[justify];

  const alignClass = {
    start: 'items-start',
    center: 'items-center',
    end: 'items-end',
  }[align];

  const flexDirection = direction === 'col' ? 'flex-col' : 'flex-row';

  return (
    <div className={clsx('flex', flexDirection, justifyClass, alignClass, gap, className)}>
      {children}
    </div>
  );
};
