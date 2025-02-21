import { HomeInputs, Loader, Blog } from "@/components";
import useApprovedBlogs from "@/hooks/useApprovedBlogs";
import { Blog as IBlog } from "@/interfaces/blog.interface";

export function BlogList() {
  const { blogs, fetchApprovedBlogs, loading } = useApprovedBlogs();

  if (loading) return <Loader />;

  return (
    <main className="container mx-auto mt-6 px-4">
      <HomeInputs refetch={fetchApprovedBlogs} />
      {loading && <Loader />}
      <div className="space-y-4">
        {blogs.map((blog: IBlog, i: number) => (
          <Blog blog={blog} key={i} />
        ))}
      </div>
    </main>
  );
}
