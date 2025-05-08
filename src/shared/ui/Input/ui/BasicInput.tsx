import React from "react";

interface TextInputProps {
  placeholder: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  name?: string;
}

export const BasicInput: React.FC<TextInputProps> = ({
  placeholder,
  value,
  onChange,
  type = "text",
  name,
}) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="
        appearance-none bg-transparent outline-none w-full h-[50px]
        border border-light-inputBorder dark:border-dark-inputBorder rounded-[5px] 
        pl-[10px] py-[8px] text-[20px] text-light-textSecond dark:text-dark-textSecond
        placeholder:text-light-textSecond/70 dark:placeholder:text-dark-textSecond/40
      "
    />
  );
};
