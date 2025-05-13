import { Typography } from "@shared/ui/Typography";

import { useResendCode } from "../model/useResendCode";

export const ResendCode: React.FC<{ email: string }> = ({ email }) => {
  console.log(email)
  const { resendCode, cooldown, loading, canResend } = useResendCode(email);

  return (
    <div className="flex flex-col items-center gap-[8px] w-full pl-[2px]">
      {!canResend ? (
        <Typography className="text-[18px] text-light-textSecond dark:text-dark-textSecond w-full text-left">
          You can resend in {cooldown}s
        </Typography>
      ) : (
        <button
          onClick={resendCode}
          className="text-[18px] text-accent underline bg-transparent hover:opacity-80 w-full text-left pl-[2px]"
        >
          Send verification code email again
        </button>
      )}
    </div>
  );
};
