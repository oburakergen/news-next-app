import axios, { type AxiosError, type AxiosInstance, type AxiosRequestConfig, type AxiosResponse } from "axios";
import axiosRetry from "axios-retry";

class AxiosService {
  private axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: process.env.NEXT_PUBLIC_API_URL,
      headers: {
        "Content-Type": "application/json",
      },
    });

    this.setupAxiosRetry();
    this.setupRequestInterceptor();
    this.setupResponseInterceptor();
  }

  private setupAxiosRetry() {
    axiosRetry(axios, {
      retries: 3,
      retryDelay: (retryCount) => {
        return retryCount * 5000;
      },
      retryCondition: (error: AxiosError) => {
        return error.response?.status === 500;
      },
    });
  }

  private setupRequestInterceptor() {
    this.axiosInstance.interceptors.request.use(
      (config: AxiosRequestConfig): AxiosRequestConfig => {
        const token: string | null = localStorage.getItem("token");

        if (token) {
          config.headers = {
            ...config.headers,
            Authorization: `Bearer ${token}`,
          };
        }
        return config;
      },
      (error: AxiosError): Promise<AxiosError> => {
        return Promise.reject(error);
      }
    );
  }

  private setupResponseInterceptor() {
    this.axiosInstance.interceptors.response.use((response: AxiosResponse): AxiosResponse => {
      return response;
    });
  }

  public apiClient(): AxiosInstance {
    return this.axiosInstance;
  }
}

export default AxiosService;
