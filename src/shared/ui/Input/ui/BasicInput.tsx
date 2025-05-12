import React from "react";

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
}

export const BasicInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  ({ placeholder, ...rest }, ref) => {
    return (
      <input
        {...rest}
        ref={ref}
        placeholder={placeholder}
        className="
          appearance-none bg-transparent outline-none w-full h-[50px]
          border border-light-inputBorder dark:border-dark-inputBorder rounded-[5px] 
          pl-[10px] py-[8px] text-[20px] text-light-textSecond dark:text-dark-textSecond
          placeholder:text-light-textSecond/70 dark:placeholder:text-dark-textSecond/40
        "
      />
    );
  }
);

BasicInput.displayName = 'BasicInput';
