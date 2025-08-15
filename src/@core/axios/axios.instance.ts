import { CONST } from "@core/const";
import axios from "axios";
import { Toast } from "toastify-react-native";

const axiosInstance = axios.create({
  baseURL: CONST.API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    // Add any custom logic before sending the request
    return config;
  },
  (error) => {
    Toast.error("Request error: " + error.message);
    return Promise.reject(error);
  }
);


export default axiosInstance;