import { format } from "@/utils/date-format";
import { EditMenu } from "@/components";
import { Blog as IBlog } from "@/interfaces/blog.interface";
import { Link } from "react-router-dom";

export function Blog({
  blog,
  handleApprove,
  handleEdit,
  handleDelete,
  isSameUser,
}: {
  blog: IBlog;
  handleApprove?: (id: string) => void;
  handleEdit?: () => void;
  handleDelete?: (id: string) => void;
  isSameUser: boolean;
}) {
  return (
    <div className="bg-white p-4 rounded shadow-md">
      <div className="flex justify-between items-center mb-2">
        <div className="flex flex-col items-start text-gray-600 text-lg mb-2 md:flex-row">
          <span>
            Posted by: <strong>{blog.author?.email}</strong>
          </span>
          <span className="md:ml-2 text-start">{format(blog.createdAt)}</span>
        </div>
        {handleApprove ? (
          <button
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 cursor-pointer"
            onClick={() => handleApprove(blog._id)}
          >
            Approve
          </button>
        ) : (
          isSameUser && <EditMenu handleEdit={handleEdit} handleDelete={handleDelete?.bind(null, blog._id)} />
        )}
      </div>
      <h2 className="text-xl font-bold mb-4">{blog.title}</h2>
      <p className="text-gray-700 mb-4">{blog.content}</p>
      <Link to={`/blog/${blog._id}`}> View details</Link>
    </div>
  );
}
