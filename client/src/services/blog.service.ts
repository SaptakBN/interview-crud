import { Blog } from "@/interfaces/blog.interface";
import { GET } from "@/lib/api/Methods";

const getAllBlogs = () => GET<never, Blog[]>("/api/blog");
const getApprovedBlogs = () => GET<never, Blog[]>("/api/blog/approved");

export { getAllBlogs, getApprovedBlogs };
