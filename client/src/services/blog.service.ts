import { Blog, BlogArg } from "@/interfaces/blog.interface";
import { DELETE, GET, PATCH, POST } from "@/lib/api/Methods";

const getAllBlogs = () => GET<never, Blog[]>("/api/blog");
const getApprovedBlogs = () => GET<never, Blog[]>("/api/blog/approved");
const createBlog = (data: BlogArg) => POST<BlogArg, Blog[]>("/api/blog/create", data);
const editBlog = (id: number, data: BlogArg) => POST<BlogArg, { message: string }>("/api/blog/edit/" + id, data);
const deleteBlog = (id: number) => DELETE<{ message: string }>("/api/blog/delete/" + id);
const approveBlog = (id: number) => PATCH<null, { message: string }>("/api/blog/approve/" + id, null);

export { getAllBlogs, getApprovedBlogs, createBlog, editBlog, deleteBlog, approveBlog };
