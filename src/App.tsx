import DayOfWeekPicker from "@/components/DayOfWeekPicker";
import Layout from "@/components/Layout";
import { AnimatePresence } from "framer-motion";
import { FaPlus } from "react-icons/fa";
import HabitModal from "@/components/HabitModal";
import { useStore } from "@/components/Store";
import HabitList from "./components/HabitList";

export default function App() {
  const {
    selectedDate,
    setSelectedDate,
    showHabitModal,
    activeHabit,
    setShowHabitModal,
    setActiveHabit,
  } = useStore();

  function changeDateHandler(date: Date) {
    setSelectedDate(date);
  }

  return (
    <Layout>
      <div className="absolute top-0 left-0 w-full h-full overflow-auto">
        <DayOfWeekPicker
          selectedDate={selectedDate}
          onDateChange={changeDateHandler}
        />
        <HabitList
          selectedDate={selectedDate}
          onSelectHabit={(v) => {
            setActiveHabit(v);
            setShowHabitModal(true);
          }}
        />
        <div className="px-4">
          <button
            onClick={() => {
              setActiveHabit(null);
              setShowHabitModal(true);
            }}
            className="flex items-center justify-center w-full h-10 bg-gray-100 rounded-lg cursor-pointer hover:brightness-95 active:brightness-90 uppercase font-bold text-gray-600 max-w-md mx-auto shadow-md active:shadow-sm"
          >
            <FaPlus />
            <span className="ml-2">new habit</span>
          </button>
        </div>
      </div>

      <AnimatePresence>{showHabitModal && <HabitModal />}</AnimatePresence>
    </Layout>
  );
}
