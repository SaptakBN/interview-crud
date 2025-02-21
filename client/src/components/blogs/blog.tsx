import { format } from "@/utils/date-format";
import { EditMenu } from "@/components";
import { Blog as IBlog } from "@/interfaces/blog.interface";

export function Blog({ blog }: { blog: IBlog }) {
  return (
    <div className="bg-white p-4 rounded shadow-md">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center text-gray-600 text-sm mb-2">
          <img alt="Avatar of User1" className="rounded-full mr-2" src="https://placehold.co/40x40" />
          <span>
            Bloged by: <strong>{blog.author?.email}</strong>
          </span>
          <span className="ml-4">{format(blog.createdAt)}</span>
        </div>
        <EditMenu />
      </div>
      <h2 className="text-xl font-bold mb-4">{blog.title}</h2>
      <p className="text-gray-700 mb-4">{blog.content}</p>
    </div>
  );
}
