import { SubmitButton } from "@shared/ui/Button";
import { FlexBox } from "@shared/ui/FlexBox";
import FormWrapper from "@shared/ui/FormWrapper";
import { BasicInput } from "@shared/ui/Input";
import { Link } from "@shared/ui/Link";
import { Typography } from "@shared/ui/Typography";

const Registration = () => {
  return (
    <FormWrapper title="Create an Account">
      <FlexBox
        direction="col"
        justify="center"
        align="center"
        className="gap-[15px] w-[100%]"
      >
        <BasicInput placeholder="Username" />
        <BasicInput type="email" placeholder="Email" />
        <BasicInput type="password" placeholder="Password" />
        <BasicInput type="password" placeholder="Confirm password" />
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
          <Link href="/login" hrefText="Sign in" colorClassName="text-accent"  className="font-medium"/>
        </FlexBox>
      </FlexBox>
    </FormWrapper>
  );
};

export default Registration;
