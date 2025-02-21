import { Loader, Blog } from "@/components";
import usePendingBlogs from "@/hooks/usePendingBlogs";
import { Blog as IBlog } from "@/interfaces/blog.interface";
import { approveBlog } from "@/services/blog.service";

export function PendingList() {
  const { blogs, fetchPendingBlogs, loading } = usePendingBlogs();

  const handleApprove = async (id: string) => {
    const [response, error] = await approveBlog(id);
    if (error) console.log(error);
    if (response) await fetchPendingBlogs();
  };

  if (loading) return <Loader />;

  if (!blogs.length) return <p className="text-center my-20 text-2xl">No pending blogs</p>;

  return (
    <main className="container mx-auto mt-6 px-4">
      {loading && <Loader />}
      <div className="space-y-4">
        {blogs.map((blog: IBlog, i: number) => (
          <Blog blog={blog} key={i} handleApprove={handleApprove} />
        ))}
      </div>
    </main>
  );
}
