import { Blog } from "@/interfaces/blog.interface";
import { getAllBlogs } from "@/services/blog.service";
import { useCallback, useEffect, useState } from "react";

const useAllBlogs = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchAllBlogs = useCallback(async () => {
    setLoading(true);
    try {
      const [response, error] = await getAllBlogs();

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
    fetchAllBlogs();
  }, [fetchAllBlogs]);

  return { blogs, fetchAllBlogs, loading };
};

export default useAllBlogs;
