import { axiosInstance } from '@shared/api/axiosInstance';

import { Inputs } from '../types/inputs';

import { useRegistrationStore } from './store';

export const onRegistrationSubmit = async (data: Inputs) => {
  const { setStep, setLoading, setVerifyEmail } = useRegistrationStore.getState();

  console.log("SUBMIT DATA:", data);

  setLoading(true);
  try {
    await axiosInstance.post("/auth/registration", {
      username: data.username,
      email: data.email,
      password: data.password
    });

    setVerifyEmail(data.email);
    setStep('verify');
  } catch (error:any) {
    console.error('register error', error);
  } finally {
    setLoading(false);
  }
};
