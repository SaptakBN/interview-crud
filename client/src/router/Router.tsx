import { Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Login, Register, Blogs, BlogDetails } from "@/pages";
import { Loader } from "@/components";
import { selectAuth, useAppSelector } from "@/redux";
import { AuthorizedGuard, UnauthorizedGuard } from "@/router/guards";

export const Router = () => {
  const { isAuthenticated, session } = useAppSelector(selectAuth);
  const router = (
    <BrowserRouter>
      <Routes>
        <Route index element={<Navigate to="/auth/login" />} />
        <Route path="/auth" element={<UnauthorizedGuard isAuthenticated={isAuthenticated} />}>
          <Route index element={<Navigate replace to="login" />} />
          <Route
            path="login"
            element={
              <Suspense fallback={<Loader />}>
                <Login />
              </Suspense>
            }
          />
          <Route
            path="register"
            element={
              <Suspense fallback={<Loader />}>
                <Register />
              </Suspense>
            }
          />
        </Route>
        <Route path="/main" element={<AuthorizedGuard isAuthenticated={isAuthenticated} session={session} />}>
          <Route index element={<Navigate replace to="blogs" />} />
          <Route
            path="blogs"
            element={
              <Suspense fallback={<Loader />}>
                <Blogs session={session} />
              </Suspense>
            }
          />
          <Route path="blog/:id" element={<BlogDetails />} />
        </Route>
        <Route path="*" element={<Navigate to="/auth" />} />
      </Routes>
    </BrowserRouter>
  );

  return router;
};
