import { lazy } from "react";

export const Login = lazy(() => import("./unauthorized/login"));
export const Home = lazy(() => import("./authorized/blogs"));
export const BlogDetails = lazy(() => import("./authorized/blog-details"));
