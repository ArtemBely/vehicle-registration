import { CustomerAnalyticsApi } from "../generated-api/api.ts";
import axios from "axios";

const axiosInstance = axios.create({
    timeout: 1.5 * 60 * 1000,
    timeoutErrorMessage: "timeout",
});

axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

const basePath = "http://localhost:5284";
export const adminApi = new CustomerAnalyticsApi(undefined, basePath, axiosInstance);