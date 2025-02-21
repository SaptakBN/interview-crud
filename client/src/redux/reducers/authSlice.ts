import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { type RootState } from "@/redux";
import { storage } from "@/services";
import { SliceEnum } from "@/enums";
import { LoginResponse } from "@/interfaces/login.interface";

export interface authInterface {
  isAuthenticated: boolean;
  session: LoginResponse | null;
}

const initialState: authInterface = {
  isAuthenticated: false,
  session: null,
};

const getStorage = () => {
  const session = storage.getInitialState();
  if (session)
    return {
      isAuthenticated: true,
      session,
    };
  else return initialState;
};

export const authSlice = createSlice({
  name: SliceEnum.AUTH,
  initialState: getStorage(),
  reducers: {
    login: (store: authInterface, action: PayloadAction<LoginResponse>) => {
      store.isAuthenticated = true;
      store.session = action.payload;
    },

    logout: (store: authInterface) => {
      store.isAuthenticated = false;
      store.session = null;
    },

    updateProfile: (store: authInterface, action: PayloadAction<LoginResponse>) => {
      const existingUser = store.session!;
      const newUser = { ...existingUser, ...action.payload };
      store.session = newUser;
    },
  },
});

export const { login, logout } = authSlice.actions;

export const selectAuth = (store: RootState) => store.auth;

export const authReducer = authSlice.reducer;
