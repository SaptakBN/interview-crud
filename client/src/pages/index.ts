import { lazy } from "react";

export const Login = lazy(() => import("./unauthorized/login"));
export const Register = lazy(() => import("./unauthorized/register"));
export const Blogs = lazy(() => import("./authorized/blogs"));
export const BlogDetails = lazy(() => import("./authorized/blog-details"));
