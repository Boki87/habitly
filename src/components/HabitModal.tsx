import { motion } from "framer-motion";
import NewHabitForm from "./NewHabitForm";
import { useStore } from "./Store";
export default function HabitModal() {
  const { setShowHabitModal } = useStore();
  return (
    <>
      <motion.div
        onClick={() => setShowHabitModal(false)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        exit={{ opacity: 0 }}
        className="min-w-full min-h-full bottom-0 left-0 absolute z-40 bg-gray-800 opacity-80"
      ></motion.div>
      <motion.div
        initial={{ opacity: 1, y: "100%" }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: "100%" }}
        transition={{ duration: 0.3 }}
        className="min-w-full min-h-[95%] bottom-0 left-0 absolute z-50 bg-white rounded-t-lg"
      >
        <NewHabitForm />
      </motion.div>
    </>
  );
}
