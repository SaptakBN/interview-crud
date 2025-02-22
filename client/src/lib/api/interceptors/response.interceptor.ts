import { logout, store } from "@/redux";
import { AxiosError, AxiosResponse } from "axios";
import { storage } from "@/services";
import toast from "react-hot-toast";

type ErrorResponse = {
  message: string;
};

export const responseInterceptor = (response: AxiosResponse) => {
  return response;
};

export const responseErrorInterceptor = async (error: AxiosError) => {
  if (!error.response) {
    return Promise.reject(error);
  }
  const { message } = error.response.data as ErrorResponse;

  // console.log(message);
  toast.error(message);

  if (error.response.status === 401) {
    if (error) {
      store.dispatch(logout());
      storage.clearStorage();
    }
  }

  return Promise.reject(error);
};
