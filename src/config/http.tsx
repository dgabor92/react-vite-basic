import axios, { AxiosInstance } from "axios";

const axiosInstance: AxiosInstance = axios.create({
  baseURL:
    import.meta.env.REACT_APP_API_BASE_URL || "http://localhost:8000/api",
  // headers: {
  //   Origin: "http://127.0.0.1:5173",
  // },
  // withCredentials: true,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    } else {
      config.headers.Authorization = "";
    }
    return config;
  },
  (error) => {
    console.log(error, "error");
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
