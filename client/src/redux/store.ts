import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "@/redux/reducers";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { authMiddleware } from "@/redux/middlewares";

const rootReducer = {
  auth: authReducer,
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(authMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const getToken = () => store.getState().auth.session?.token || null;
