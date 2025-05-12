import { axiosInstance } from '@shared/api/axiosInstance';

import { Inputs } from '../types/inputs';

import { useRegistrationStore } from './store';
import { UseFormSetError } from 'react-hook-form';

export const onRegistrationSubmit = async (data: Inputs, setError:  UseFormSetError<Inputs>) => {
  const { setStep, setLoading, setVerifyEmail } = useRegistrationStore.getState();

  console.log("SUBMIT DATA:", data);

  setLoading(true);
  try {
    await axiosInstance.post("/auth/check-user", {
      email: data.email,
      username: data.username
    });

    await axiosInstance.post("/auth/registration", {
      username: data.username,
      email: data.email,
      password: data.password
    });

    setVerifyEmail(data.email);
    setStep('verify');
  } catch (error:any) {
    if (error.response?.data?.message) {
      const msg: string = error.response.data.message;

      console.log(error.response.data.message)

      if (msg.includes("Email")) {
        setError("email", { type: "manual", message: msg });
      } else if (msg.includes("Username")) {
        setError("username", { type: "manual", message: msg });
      }
    }

    console.error('register error', error);
  } finally {
    setLoading(false);
  }
};
