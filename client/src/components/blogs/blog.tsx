import { format } from "@/utils/date-format";
import { EditMenu } from "@/components";
import { Blog as IBlog } from "@/interfaces/blog.interface";

export function Blog({
  blog,
  handleApprove,
  handleEdit,
  isSameUser,
}: {
  blog: IBlog;
  handleApprove?: (id: string) => void;
  handleEdit?: () => void;
  isSameUser: boolean;
}) {
  return (
    <div className="bg-white p-4 rounded shadow-md">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center text-gray-600 text-sm mb-2">
          <span>
            Bloged by: <strong>{blog.author?.email}</strong>
          </span>
          <span className="ml-4">{format(blog.createdAt)}</span>
        </div>
        {handleApprove ? (
          <button
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 cursor-pointer"
            onClick={() => handleApprove(blog._id)}
          >
            Approve
          </button>
        ) : (
          isSameUser && <EditMenu handleEdit={handleEdit} />
        )}
      </div>
      <h2 className="text-xl font-bold mb-4">{blog.title}</h2>
      <p className="text-gray-700 mb-4">{blog.content}</p>
    </div>
  );
}
