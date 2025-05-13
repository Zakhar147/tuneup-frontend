import {
  Inputs,
  onRegistrationSubmit,
  useEmailValidation,
  useUsernameValidation,
} from "@features/auth";

import { useForm } from "react-hook-form";

import { SubmitButton } from "@shared/ui/Button";
import { FlexBox } from "@shared/ui/FlexBox";
import FormWrapper from "@shared/ui/FormWrapper";
import { BasicInput } from "@shared/ui/Input";
import { Typography } from "@shared/ui/Typography";
import { Link } from "@shared/ui/Link";

const RagistrationForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm<Inputs>();
  const { validateUsername } = useUsernameValidation(setError, clearErrors);
  const { validateEmail } = useEmailValidation(setError, clearErrors);
  
  return (
    <FormWrapper
      onSubmit={handleSubmit(onRegistrationSubmit)}
      title="Create an Account"
    >
      <FlexBox
        direction="col"
        justify="center"
        align="center"
        className="gap-[15px] w-[100%]"
      >
        <div className="w-full">
          <BasicInput
            placeholder="Username"
            {...register("username", {
              required: "Username is required",
              onChange: (e) => validateUsername(e.target.value),
            })}
          />
          <Typography
            className="text-[14px] w-full pl-[2px] pt-[5px]"
            colorClassName="text-red-500 "
          >
            {errors.username?.message || ""}
          </Typography>
        </div>
        <div className="w-full">
          <BasicInput
            type="email"
            placeholder="Email"
            {...register("email", {
              required: "Email is required",
              onChange: (e) => validateEmail(e.target.value),
            })}
          />
          <Typography
            className="text-[14px] w-full pl-[2px] pt-[5px]"
            colorClassName="text-red-500"
          >
            {errors.email?.message || ""}
          </Typography>
        </div>
        <div className="w-full">
          <BasicInput
            type="password"
            placeholder="Password"
            {...register("password", { required: "Password is required" })}
          />
          <Typography
            className="text-[14px] w-full pl-[2px] pt-[5px]"
            colorClassName="text-red-500"
          >
            {errors.password?.message || ""}
          </Typography>
        </div>
        <div className="w-full">
          <BasicInput
            type="password"
            placeholder="Confirm password"
            {...register("confirmPassword", {
              required: "Please confirm your password",
              validate: (value) =>
                value == watch("password") || "Passwords do not match",
            })}
          />
          <Typography
            className="text-[14px] w-full pl-[2px] pt-[5px]"
            colorClassName="text-red-500"
          >
            {errors.confirmPassword?.message || ""}
          </Typography>
        </div>
      </FlexBox>
      <FlexBox
        direction="col"
        justify="center"
        align="center"
        className="w-[100%]  gap-[10px]"
      >
        <SubmitButton text="Sign up" />
        <FlexBox justify="center" align="center" className="gap-[10px]">
          <Typography colorClassName="text-[#555555]" className="text-[20px]">
            Already have an account ?
          </Typography>
          <Link
            href="/login"
            hrefText="Sign in"
            colorClassName="text-accent"
            className="font-medium"
          />
        </FlexBox>
      </FlexBox>
    </FormWrapper>
  );
};
export default RagistrationForm;
