import axios from "../config/http";

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

export const signUp = async (
  name: string,
  email: string,
  password: string,
  password_confirmation: string
): Promise<unknown> => {
  const response = await axios.post("/register", {
    name,
    email,
    password,
    password_confirmation,
  });
  if (response.status !== 200) {
    throw new Error("Invalid credentials");
  }
  return response.data;
};

export const getUser = async (): Promise<User> => {
  const response = await axios.get("/user");
  if (response.status !== 200) {
    throw new Error("Invalid credentials");
  }
  return response.data;
};
