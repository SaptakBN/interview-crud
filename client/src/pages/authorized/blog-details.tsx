import useBlog from "@/hooks/useBlog";
import { format } from "@/utils/date-format";
import { useParams } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams();
  const { blog } = useBlog(id);
  if (!blog) return <p className="text-center my-20 text-2xl">Blog not found</p>;
  return (
    <div>
      <p className="text-2xl font-bold my-4 text-center">Blog details</p>
      <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
        <h1 className="text-3xl font-bold text-violet-600 mb-4">{blog.title}</h1>
        <p className="text-gray-700 mb-4">{blog.content}</p>
        <div className="flex justify-between items-center mt-6">
          <span className="text-gray-500 text-sm">By {blog.author.email}</span>
          <span className="text-gray-500 text-sm">{format(blog.createdAt)}</span>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
