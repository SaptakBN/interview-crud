import { logout, store } from "@/redux";
import { AxiosError, AxiosResponse } from "axios";
import { storage } from "@/services";

export const responseInterceptor = (response: AxiosResponse) => {
  return response;
};

export const responseErrorInterceptor = async (error: AxiosError) => {
  if (!error.response) {
    return Promise.reject(error);
  }

  if (error.response.status === 401) {
    if (error) {
      store.dispatch(logout());
      storage.clearStorage();
    }
  }

  return Promise.reject(error);
};
