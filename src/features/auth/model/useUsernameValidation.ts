import { useRef, useMemo, useState } from "react";
import { UseFormSetError, UseFormClearErrors } from "react-hook-form";
import { debounce } from "throttle-debounce";
import axios from "axios";
import { axiosInstance } from "@shared/api/axiosInstance";
import { Inputs } from "../types/inputs";

export const useUsernameValidation = (
  setError: UseFormSetError<Inputs>,
  clearErrors: UseFormClearErrors<Inputs>
) => {
  const abortControllerRef = useRef<AbortController | null>(null);

  const validateUsername = useMemo(() => debounce(700, async (username: string) => {
    if (!username) return;

    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    abortControllerRef.current = new AbortController();

    try {
      console.log("requesitng...")

      await axiosInstance.post(
        "/auth/check-username",
        { username },
        { signal: abortControllerRef.current.signal }
      );
      clearErrors("username");
    } catch (error: any) {
      if (!axios.isCancel(error)) {
        setError("username", {
          type: "manual",
          message: "Username is already taken!",
        });
      }
    }
  }), []);

  return { validateUsername };
};