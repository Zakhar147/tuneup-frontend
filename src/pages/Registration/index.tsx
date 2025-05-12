
import { useRegistrationStore } from "@features/auth/model/store";

import Spinner from "@shared/ui/Spinner";
import { lazy } from "react";

const RegistrationForm = lazy(() =>
  import('@widgets/Registration').then(mod => ({ default: mod.RagistrationForm }))
);

const RegistrationPage = () => {
  const { step, loading } = useRegistrationStore();

  if (loading) return <Spinner />;

  switch (step) {
    case 'register':
      return <RegistrationForm />;
    case 'verify':
      return "<VerifyForm />;"
    case 'success':
      return "<SuccessMessage />";
    default:
      return null;
  }
};

export default RegistrationPage;
