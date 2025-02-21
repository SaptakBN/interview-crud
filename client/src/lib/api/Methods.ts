import HTTP from "@/lib/api/Http";
import { AxiosError } from "axios";

async function trycatch<T>(fn: () => Promise<{ data: T }>): Promise<[T | null, AxiosError | null]> {
  try {
    const response = await fn();
    return [response.data, null];
  } catch (error) {
    if (error instanceof AxiosError) {
      return [null, error];
    }
    return [null, new AxiosError("An unknown error occurred")];
  }
}

export function GET<T, R>(url: string, params?: T) {
  return trycatch<R>(() => HTTP.get<R>(url, { params }));
}

export function POST<T, R>(url: string, data: T) {
  return trycatch<R>(() => HTTP.post<R>(url, data));
}

export function PATCH<T, R>(url: string, data: T) {
  return trycatch<R>(() => HTTP.patch<R>(url, data));
}
export function PUT<T, R>(url: string, data: T) {
  return trycatch<R>(() => HTTP.put<R>(url, data));
}

export function DELETE<R>(url: string) {
  return trycatch<R>(() => HTTP.delete<R>(url));
}
