import { useRef, useMemo } from "react";

import axios from "axios";
import { UseFormSetError, UseFormClearErrors } from "react-hook-form";
import { debounce } from "throttle-debounce";

import { axiosInstance } from "@shared/api/axiosInstance";

import { Inputs } from "../types/inputs";

export const useEmailValidation = (
  setError: UseFormSetError<Inputs>,
  clearErrors: UseFormClearErrors<Inputs>
) => {
  const abortControllerRef = useRef<AbortController | null>(null);

  const validateEmail = useMemo(() => debounce(700, async (email: string) => {
    if (!email) return;

    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    abortControllerRef.current = new AbortController();

    try {
    console.log("requesitng...")
      await axiosInstance.post(
        "/auth/check-email",
        { email },
        { signal: abortControllerRef.current.signal }
      );
      clearErrors("email");
    } catch (error: any) {
      if (!axios.isCancel(error)) {
        setError("email", {
          type: "manual",
          message: "Email is already taken!",
        });
      }
    }
  }), []);

  return { validateEmail };
};