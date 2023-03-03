import { useLocalStorage } from "@/hooks/useLocalStorage";
import { Habit } from "@/types/Habit";
import { createContext, useContext, useState, ReactNode } from "react";

interface IInitialState {
  selectedDate: Date;
  setSelectedDate: (v: Date) => void;
  showHabitModal: boolean;
  setShowHabitModal: (v: boolean) => void;
  activeHabit: Habit | null;
  setActiveHabit: (v: Habit | null) => void;
  showMainMenu: boolean;
  setShowMainMenu: (v: boolean) => void;
  showSettings: boolean;
  setShowSettings: (v: boolean) => void;
  showOrdering: boolean;
  setShowOrdering: (v: boolean) => void;
  startOfWeek: 1 | 0;
  setStartOfWeek: (val: 1 | 0) => void;
}

const initialState: IInitialState = {
  selectedDate: new Date(),
  setSelectedDate: () => {},
  showHabitModal: false,
  setShowHabitModal: () => {},
  activeHabit: null,
  setActiveHabit: () => {},
  showMainMenu: false,
  setShowMainMenu: () => {},
  showSettings: false,
  setShowSettings: () => {},
  showOrdering: false,
  setShowOrdering: () => {},
  startOfWeek: 1,
  setStartOfWeek: () => {},
};

const StoreProvider = createContext(initialState);

export const useStore = () => useContext(StoreProvider);

export default function Store({ children }: { children: ReactNode }) {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [showHabitModal, setShowHabitModal] = useState(false);
  const [showMainMenu, setShowMainMenu] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [showOrdering, setShowOrdering] = useState(false);
  const [activeHabit, setActiveHabit] = useState<Habit | null>(null);
  const [startOfWeek, setStartOfWeek] = useLocalStorage(
    "habilty-weekstarts",
    1
  );

  return (
    <StoreProvider.Provider
      value={{
        selectedDate,
        setSelectedDate,
        showHabitModal,
        setShowHabitModal,
        activeHabit,
        setActiveHabit,
        showMainMenu,
        setShowMainMenu,
        showSettings,
        setShowSettings,
        showOrdering,
        setShowOrdering,
        startOfWeek,
        setStartOfWeek,
      }}
    >
      {children}
    </StoreProvider.Provider>
  );
}
