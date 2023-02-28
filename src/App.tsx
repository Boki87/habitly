import DayOfWeekPicker from "@/components/DayOfWeekPicker";
import Layout from "@/components/Layout";
import { AnimatePresence } from "framer-motion";
import HabitModal from "@/components/HabitModal";
import { useStore } from "@/components/Store";
import HabitList from "./components/HabitList";
import Header from "@/components/Header";
import MainMenu from "./components/MainMenu";

export default function App() {
  const {
    selectedDate,
    setSelectedDate,
    showHabitModal,
    activeHabit,
    setShowHabitModal,
    setActiveHabit,
    showMainMenu,
    setShowMainMenu,
  } = useStore();

  function changeDateHandler(date: Date) {
    setSelectedDate(date);
  }

  return (
    <Layout>
      <Header
        onBurgerClick={() => {
          setShowMainMenu(true);
        }}
        onPlusClick={() => {
          setActiveHabit(null);
          setShowHabitModal(true);
        }}
      />
      <div className="absolute top-16 left-0 w-full h-full pt-2 z-10 pb-20 flex flex-col">
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
      </div>

      <AnimatePresence>{showHabitModal && <HabitModal />}</AnimatePresence>
      <AnimatePresence>{showMainMenu && <MainMenu />}</AnimatePresence>
    </Layout>
  );
}
