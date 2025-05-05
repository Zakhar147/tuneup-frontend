import React from "react";

interface TextInputProps {
  placeholder: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  name?: string;
}

//TODO: Переделать цвет текста на светлой теме
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
        border border-light-inputBorder dark:border-dark-inputBorder   rounded-[5px] 
        pl-[10px] py-[8px] text-[20px] text-[#AAAAAA]
      "
    />
  );
};
