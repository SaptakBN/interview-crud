import { UserPostModel } from "@/GraphQL/generated/graphql";
import { MessageSquare } from "lucide-react";
import { format } from "@/utils/date-format";
import { EditMenu, LikeBtn, DislikeBtn, Comments } from "@/components";
import { AnimatePresence } from "motion/react";
import { useState } from "react";

export function Post({ post }: { post: UserPostModel }) {
  const [isCommentOpen, setIsCommentOpen] = useState(false);
  return (
    <div className="bg-white p-4 rounded shadow-md">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center text-gray-600 text-sm mb-2">
          <img alt="Avatar of User1" className="rounded-full mr-2" src="https://placehold.co/40x40" />
          <span>
            Posted by: <strong>{post.user?.username}</strong>
          </span>
          <span className="ml-4">{format(post.createdAt)}</span>
        </div>
        <EditMenu />
      </div>
      <h2 className="text-xl font-bold mb-4">{post.title}</h2>
      <p className="text-gray-700 mb-4">{post.content}</p>
      <div className="flex justify-between items-center">
        <div className="flex">
          <LikeBtn count={post.likes} />
          <DislikeBtn count={post.dislikes} />
        </div>
        <button className="flex items-center text-gray-600 hover:text-green-500" onClick={() => setIsCommentOpen((prev) => !prev)}>
          <MessageSquare className="mr-1" />
          <span>0</span>
        </button>
      </div>
      <AnimatePresence mode="wait">{isCommentOpen ? <Comments open={isCommentOpen} /> : null}</AnimatePresence>
    </div>
  );
}
