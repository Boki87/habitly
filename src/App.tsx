import DayOfWeekPicker from "@/components/DayOfWeekPicker";
import Layout from "@/components/Layout";
import { useStore } from "@/components/Store";
import HabitList from "./components/HabitList";
import Header from "@/components/Header";
import { useDarkMode } from "./hooks/useDarkMode";

export default function App() {
  useDarkMode();
  const {
    selectedDate,
    setSelectedDate,
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
          setShowMainMenu(!showMainMenu);
        }}
        onPlusClick={() => {
          setActiveHabit(null);
          setShowHabitModal(true);
        }}
      />
      <div className="w-full h-full pt-20 flex flex-col">
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
    </Layout>
  );
}
