import { useRegistrationStore } from "@features/auth/model/store";
import { FlexBox } from "@shared/ui/FlexBox";

import Spinner from "@shared/ui/Spinner";
import { lazy } from "react";

const RegistrationForm = lazy(() =>
  import("@widgets/Registration").then((mod) => ({
    default: mod.RagistrationForm,
  }))
);

const VerifyForm = lazy(() =>
  import("@widgets/Verify").then((mod) => ({
    default: mod.VerifyForm,
  }))
);

const RegistrationPage = () => {
  const { step, loading, verifyEmail } = useRegistrationStore();

  // return <VerifyForm verifyEmail={verifyEmail ?  verifyEmail : "zaharkhach2004@gmail.com"} /> 

  if (loading)
    return (
      <FlexBox justify="center" align="center">
        <Spinner className="w-full" />
      </FlexBox>
    );

  switch (step) {
    case "register":
      return <RegistrationForm />;
    case "verify":
      return <VerifyForm verifyEmail={verifyEmail} />;
    case "success":
      return "<SuccessMessage />";
    default:
      return null;
  }
};

export default RegistrationPage;