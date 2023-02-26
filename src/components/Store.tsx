import { Habit } from "@/types/Habit";
import { createContext, useContext, useState, ReactNode } from "react";

interface IInitialState {
  selectedDate: Date;
  setSelectedDate: (v: Date) => void;
  showHabitModal: boolean;
  setShowHabitModal: (v: boolean) => void;
  activeHabit: Habit | null;
  setActiveHabit: (v: Habit | null) => void;
}

const initialState: IInitialState = {
  selectedDate: new Date(),
  setSelectedDate: () => {},
  showHabitModal: false,
  setShowHabitModal: () => {},
  activeHabit: null,
  setActiveHabit: () => {},
};

const StoreProvider = createContext(initialState);

export const useStore = () => useContext(StoreProvider);

export default function Store({ children }: { children: ReactNode }) {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [showHabitModal, setShowHabitModal] = useState(false);
  const [activeHabit, setActiveHabit] = useState<Habit | null>(null);

  return (
    <StoreProvider.Provider
      value={{
        selectedDate,
        setSelectedDate,
        showHabitModal,
        setShowHabitModal,
        activeHabit,
        setActiveHabit,
      }}
    >
      {children}
    </StoreProvider.Provider>
  );
}