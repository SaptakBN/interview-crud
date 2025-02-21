import { authInterface } from "@/redux";
import { Middleware } from "@reduxjs/toolkit";
import { storage } from "@/services";

export const authMiddleware: Middleware<authInterface, { auth: authInterface }> = () => (next) => (action: unknown) => {
  const assertAction = typeof action === "object" && action && "type" in action && "payload" in action;
  if (assertAction) {
    switch (action.type) {
      case "auth/login":
        storage.setStorage(action.payload);
        return next(action);
      case "auth/logout":
        storage.clearStorage();
        return next(action);
      case "auth/updateProfile":
        return next(action);
      default:
        return next(action);
    }
  }
};
