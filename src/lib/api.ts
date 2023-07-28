import axios from "../config/http";
import { useNavigate } from "react-router-dom";

export interface User {
  id: number;
  name: string;
  email: string;
  role: number;
  email_verified_at: string | null;
  createdAt: string;
  updatedAt: string;
  photo_url: string;
}

export interface LoginResponse {
  token: string;
  token_type: string;
  expires_in: number;
}

export const logIn = async (
  email: string,
  password: string
): Promise<LoginResponse> => {
  const response = await axios.post("/login", { email, password });
  if (response.status !== 200) {
    throw new Error("Invalid credentials");
  }
  return response.data;
};
