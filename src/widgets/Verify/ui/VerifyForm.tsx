import { ResendCode } from "@features/resentVerification";

import { useForm } from "react-hook-form";

import { SubmitButton } from "@shared/ui/Button";
import { FlexBox } from "@shared/ui/FlexBox";
import FormWrapper from "@shared/ui/FormWrapper";
import { BasicInput } from "@shared/ui/Input";
import { Typography } from "@shared/ui/Typography";
import { Inputs } from "../types/inputs";

const VerifyForm: React.FC<{
  verifyEmail: string;
}> = ({ verifyEmail }) => {
  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm<Inputs>();

  return (
    <FormWrapper
      onSubmit={handleSubmit(() => {
        console.log("hello");
      })}
      title="Verification"
      className="gap-[15px]"
    >
      <Typography
        colorClassName="text-light-[#000000]"
        className="p-[15px] text-[19px] rounded-[10px] bg-green-100 text-center"
      >
        We've sent a verification code to your email - {verifyEmail}
      </Typography>

      <div className="w-full">
        <BasicInput
          type="number"
          placeholder="Enter verification code"
          {...register("verifyCode", {
            required: "Please enter the code!",
          })}
        />
        <Typography
          className="text-[16px] w-full pl-[2px] pt-[5px]"
          colorClassName="text-red-500 "
        >
          {errors.verifyCode?.message || ""}
        </Typography>
      </div>
      <FlexBox
        direction="col"
        justify="center"
        align="center"
        className="gap-[5px] w-full"
      >
        <SubmitButton text="Submit" />
        <ResendCode email={verifyEmail} />
      </FlexBox>
    </FormWrapper>
  );
};

export default VerifyForm;
