import { Blog } from "@/interfaces/blog.interface";
import { getPendingBlogs } from "@/services/blog.service";
import { useCallback, useEffect, useState } from "react";

const usePendingBlogs = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchPendingBlogs = useCallback(async () => {
    setLoading(true);
    try {
      const [response, error] = await getPendingBlogs();

      if (error) {
        console.error("Error fetching blogs:", error);
        setBlogs([]);
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
    fetchPendingBlogs();
  }, [fetchPendingBlogs]);

  return { blogs, fetchPendingBlogs, loading };
};

export default usePendingBlogs;
