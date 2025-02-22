import { Blog, BlogArg } from "@/interfaces/blog.interface";
import { DELETE, GET, PATCH, POST, PUT } from "@/lib/api/Methods";

const getPendingBlogs = () => GET<never, Blog[]>("/api/blog/pending");
const getApprovedBlogs = () => GET<never, Blog[]>("/api/blog");
const createBlog = (data: BlogArg) => POST<BlogArg, Blog[]>("/api/blog/", data);
const editBlog = (id: string, data: BlogArg) => PUT<BlogArg, { message: string }>("/api/blog/" + id, data);
const deleteBlog = (id: string) => DELETE<{ message: string }>("/api/blog/" + id);
const approveBlog = (id: string) => PATCH<null, { message: string }>("api/blog/admin/" + id, null);
const getBlog = (id: string) => GET<never, Blog>("/api/blog/" + id);

export { getPendingBlogs, getApprovedBlogs, createBlog, editBlog, deleteBlog, approveBlog, getBlog };
