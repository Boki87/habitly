import { ReactNode } from "react";
import { motion } from "framer-motion";

export default function Modal({
  children,
  onClose,
  isFull,
}: {
  children?: ReactNode;
  onClose?: () => void;
  isFull?: boolean;
}) {
  return (
    <>
      <motion.div
        onClick={() => {
          onClose && onClose();
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        exit={{ opacity: 0 }}
        className="min-w-full min-h-full bottom-0 left-0 absolute z-40 bg-gray-800 dark:bg-gray-900 opacity-80"
      ></motion.div>
      <motion.div
        initial={{ opacity: 1, y: "100%" }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: "100%" }}
        transition={{ duration: 0.3 }}
        className={`min-w-full bottom-0 left-0 bg-white overflow-auto dark:bg-gray-700 absolute z-50 ${
          isFull ? "h-full" : "h-[95%] rounded-t-lg"
        } `}
      >
        {children && children}
      </motion.div>
    </>
  );
}
