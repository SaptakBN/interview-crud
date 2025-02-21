import { Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Login, Home, BlogDetails } from "@/pages";
import { Loader } from "@/components";
import { selectAuth, useAppSelector } from "@/redux";
import { AuthorizedGuard, UnauthorizedGuard } from "@/router/guards";

export const Router = () => {
  const { isAuthenticated } = useAppSelector(selectAuth);
  const router = (
    <BrowserRouter>
      <Routes>
        <Route index element={<Navigate to="/login" />} />
        <Route
          path="/login"
          element={
            <UnauthorizedGuard isAuthenticated={isAuthenticated}>
              <Suspense fallback={<Loader />}>
                <Login />
              </Suspense>
            </UnauthorizedGuard>
          }
        />
        <Route
          path="/blogs"
          element={
            <AuthorizedGuard isAuthenticated={isAuthenticated}>
              <Suspense fallback={<Loader />}>
                <Home />
              </Suspense>
            </AuthorizedGuard>
          }
        />
        <Route path="blog/:id" element={<BlogDetails />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );

  return router;
};
