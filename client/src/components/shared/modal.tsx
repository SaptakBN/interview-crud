import { ReactNode } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function Modal({ close, isOpen, children, title }: Props) {
  return (
    <div className="flex justify-center items-center">
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.2,
            }}
            className="fixed inset-0 bg-[#000000ba]"
            onClick={close}
          ></motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence initial={false}>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{
              duration: 0.2,
            }}
            className="fixed inset-0 flex justify-center items-center z-50"
          >
            <div className="bg-white p-8 rounded-lg shadow-lg w-[80vw] md:w-[50vw]">
              <div className="flex justify-between items-top mb-4">
                <h2 className="text-2xl font-bold mb-4">{title}</h2>
                <X className="cursor-pointer" onClick={close} />
              </div>
              {children}
              <div className="flex justify-end"></div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

type Props = {
  title: string;
  isOpen: boolean;
  close: () => void;
  children: ReactNode;
};
