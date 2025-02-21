import { Ellipsis } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export const EditMenu = ({ handleEdit, handleDelete }: { handleEdit?: () => void; handleDelete?: () => void }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="flex relative">
      <button
        className="text-gray-500 hover:bg-gray-100 p-2 rounded-full cursor-pointer"
        onClick={() => setIsMenuOpen((prev) => !prev)}
      >
        <Ellipsis />
      </button>
      <AnimatePresence initial={false}>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.2,
            }}
            className="fixed inset-0 bg-[#0000000e]"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </AnimatePresence>
      <AnimatePresence initial={false}>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0, x: 0, y: -15 }}
            animate={{ opacity: 1, scale: 1, x: 50, y: 0 }}
            exit={{ opacity: 0, scale: 0, x: 0, y: -15 }}
            className="absolute bg-gray-50 rounded shadow-2xl flex flex-col z-10"
          >
            <button
              className="text-gray-600 hover:text-blue-500 hover:bg-gray-100 text-start p-2 cursor-pointer"
              onClick={() => handleEdit && handleEdit()}
            >
              Edit
            </button>
            <button
              className="text-gray-600 hover:text-red-500 hover:bg-gray-100 text-start p-2 cursor-pointer"
              onClick={() => handleDelete && handleDelete()}
            >
              Delete
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
