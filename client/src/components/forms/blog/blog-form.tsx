import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { BlogFormData, blogValidator } from "@/validators/create-blog.validator";
import { createBlog, editBlog } from "@/services/blog.service";
import useBlog from "@/hooks/useBlog";
import { useEffect } from "react";
import toast from "react-hot-toast";

export const BlogForm = ({ refetch, close, id }: { refetch: () => void; close: () => void; id?: string | null }) => {
  const { blog } = useBlog(id);
  const {
    register: registerInput,
    handleSubmit,
    reset,
    formState: { errors, touchedFields },
  } = useForm<BlogFormData>({
    resolver: zodResolver(blogValidator),
  });

  useEffect(() => {
    reset({
      title: blog?.title || "",
      content: blog?.content || "",
    });
  }, [blog, reset]);

  async function handleCreate(value: BlogFormData) {
    const response = await createBlog(value);
    if (response) {
      refetch();
      close();
      toast.success("Blog created successfully");
    }
  }

  async function handleUpdate(value: BlogFormData) {
    const response = await editBlog(id!, value);
    if (response) {
      refetch();
      close();
      toast.success("Blog updated successfully");
    }
  }

  const submitFn = id ? handleUpdate : handleCreate;

  return (
    <div className="">
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(submitFn)}>
        <input
          className="border-2 border-gray-300 rounded-md h-full px-4 py-2"
          type="text"
          placeholder="Title"
          {...registerInput("title")}
        />
        {errors.title && touchedFields.title && <p className="text-red-400">{errors.title.message}</p>}
        <textarea
          rows={8}
          className="border-2 border-gray-300 rounded-md h-full px-4 py-2"
          placeholder="Content"
          {...registerInput("content")}
        />
        {errors.content && touchedFields.content && <p className="text-red-400">{errors.content.message}</p>}
        <button className="bg-violet-500 text-white px-4 py-2 rounded">Submit</button>
      </form>
    </div>
  );
};
