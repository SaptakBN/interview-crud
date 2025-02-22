import { HomeInputs, Loader, Blog, BlogForm, Modal } from "@/components";
import useApprovedBlogs from "@/hooks/useApprovedBlogs";
import { Blog as IBlog } from "@/interfaces/blog.interface";
import { deleteBlog } from "@/services/blog.service";
import { useState } from "react";
import toast from "react-hot-toast";

export function BlogList({ userId }: { userId: string }) {
  const { blogs, fetchApprovedBlogs, loading } = useApprovedBlogs();

  const [idToUpdate, setIdToUpdate] = useState<string | null>(null);
  const isOpen = Boolean(idToUpdate);

  const handleDelete = async (id: string) => {
    const [response, error] = await deleteBlog(id);
    if (error) console.log(error);
    if (response) {
      toast.success("Blog deleted successfully");
      await fetchApprovedBlogs();
    }
  };

  if (loading) return <Loader />;

  return (
    <main className="container mx-auto mt-6 px-4">
      <HomeInputs refetch={fetchApprovedBlogs} />
      {loading && <Loader />}
      {blogs.length ? (
        <div className="space-y-4">
          {blogs.map((blog: IBlog, i: number) => (
            <Blog
              blog={blog}
              key={i}
              handleEdit={() => setIdToUpdate(blog._id)}
              isSameUser={userId === blog.author._id}
              handleDelete={handleDelete}
            />
          ))}
        </div>
      ) : (
        <p className="text-center my-20 text-2xl">No approved blogs found</p>
      )}
      <Modal isOpen={isOpen} close={() => setIdToUpdate(null)} title="Edit Blog">
        <BlogForm refetch={fetchApprovedBlogs} close={() => setIdToUpdate(null)} id={idToUpdate} />
      </Modal>
    </main>
  );
}
