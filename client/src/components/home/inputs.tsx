import { useState } from "react";
import { Modal } from "@/components";
import { BlogForm } from "../forms/blog/blog-form";

export function HomeInputs({ refetch }: { refetch: () => void }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="flex justify-between items-center mb-4 gap-4">
        <button
          className="bg-violet-500 text-white px-4 py-2 rounded hover:bg-violet-400 w-full cursor-pointer"
          onClick={() => setIsOpen(true)}
        >
          Create Blog
        </button>
        <button
          className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-400 w-full cursor-pointer"
          onClick={() => setIsOpen(true)}
        >
          View pending blogs
        </button>
      </div>
      <Modal isOpen={isOpen} close={() => setIsOpen(false)} title="Create Blog">
        <BlogForm refetch={refetch} close={() => setIsOpen(false)} />
      </Modal>
    </>
  );
}
