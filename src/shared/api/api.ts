import { useAuthStore } from "@entities/User";
import axios from "axios";

const API_URL = "http://localhost:8080/api/";

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  }
});

api.interceptors.request.use((config) => {
  const token = useAuthStore.getState().accessToken;
  console.log('TOKEN: ', token)
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const apiWithCookies = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true
})
