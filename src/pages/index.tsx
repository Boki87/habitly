import DayOfWeekPicker from "@/components/DayOfWeekPicker";
import Layout from "@/components/Layout";
import dynamic from "next/dynamic";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { FaPlus } from "react-icons/fa";
import HabitModal from "@/components/HabitModal";
import { Habit } from "@/types/Habit";
import { useStore } from "@/components/Store";

const HabitList = dynamic(() => import("../components/HabitList"), {
  ssr: false,
});

export default function Home() {
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
            className="flex items-center justify-center w-full h-10 bg-white rounded-lg cursor-pointer hover:bg-slate-50 active:bg-slate-200 uppercase font-bold text-gray-600 max-w-md mx-auto"
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
