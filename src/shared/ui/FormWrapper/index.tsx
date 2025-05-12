import React, { Children, ReactNode } from "react";
import { FlexBox } from "../FlexBox";
import { Typography } from "../Typography";
import clsx from "clsx";

interface FormWrapperProps {
  title: string;
  children: ReactNode;
  titleSizeClass?: string;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
}

const FormWrapper: React.FC<FormWrapperProps> = ({
  title,
  children,
  titleSizeClass,
  onSubmit
}) => {
  return (
    <form onSubmit={onSubmit} className={clsx(`max-w-[400px] w-full`)}>
      <FlexBox
        direction="col"
        justify="center"
        align="center"
        className="gap-[37px]"
      >
        <Typography as={"h2"} title className={clsx(
          titleSizeClass || "text-[40px]",
          "font-bold"
        )}>
          {title}
        </Typography>

        {children}
      </FlexBox>
    </form>
  );
};

export default FormWrapper;
