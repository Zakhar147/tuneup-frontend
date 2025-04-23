import clsx from "clsx";

interface LinkProps {
  href: string;
  hrefText: string;
  className?: string;
}

export const Link: React.FC<LinkProps> = ({
  href,
  hrefText,
  className = '',
}) => {
  return (
    <a href={href} className={clsx(
        'text-light-textSecond dark:text-dark-textSecond',
        className
    )}>
      {hrefText}
    </a>
  );
};
