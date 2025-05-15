import { useNavigate } from "react-router-dom";
import { useAuthStore } from "@entities/User";
import { apiWithCookies } from "@shared/api";

export const useLogout = () => {
  const navigate = useNavigate();
  const setAccessToken = useAuthStore((state) => state.setAccessToken);

  const onLogout = async () => {
    try {
      await apiWithCookies.post("/auth/logout");

      console.log('LOGOUT')
    } catch (err) {
      console.error("Logout error:", err);
    }
  };

  return { onLogout };
};
