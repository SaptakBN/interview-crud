import { Blog } from "@/interfaces/blog.interface";
import { getBlog } from "@/services/blog.service";
import { useCallback, useEffect, useState } from "react";

const useBlog = (id: string | null | undefined) => {
  const [blog, setBlogs] = useState<Blog | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchBlog = useCallback(async (id: string) => {
    setLoading(true);
    try {
      const [response, error] = await getBlog(id);

      if (error) {
        console.error("Error fetching blogs:", error);
        setBlogs(null);
        return;
      }
      if (response) {
        setBlogs(response);
      }
    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      setLoading(false);
    }
  }, []);
  useEffect(() => {
    if (id) fetchBlog(id);
  }, [fetchBlog, id]);

  return { blog, fetchBlog, loading };
};

export default useBlog;
