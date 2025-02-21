import { Blog } from "@/interfaces/blog.interface";
import { getApprovedBlogs } from "@/services/blog.service";
import { useCallback, useEffect, useState } from "react";

const useApprovedBlogs = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchApprovedBlogs = useCallback(async () => {
    setLoading(true);
    try {
      const [response, error] = await getApprovedBlogs();

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
    fetchApprovedBlogs();
  }, [fetchApprovedBlogs]);

  return { blogs, fetchApprovedBlogs, loading };
};

export default useApprovedBlogs;
