import { api } from "@/lib/api";

interface LoginData {
  email: string;
  password: string;
}

export const login = async (data: LoginData) => {
  const res = await api.post("/auth/login", data);
  return res.data;
};
