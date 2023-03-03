import { ReactNode } from "react";
import { motion } from "framer-motion";
import { useStore } from "./Store";
import { AnimatePresence } from "framer-motion";
import HabitModal from "@/components/HabitModal";
import SettingsModal from "./SettingsModal";
import OrderingModal from "./OrderingModal";
import MainMenu from "./MainMenu";

export default function Layout({ children }: { children: ReactNode }) {
  const {
    showMainMenu,
    setShowMainMenu,
    showHabitModal,
    showSettings,
    showOrdering,
  } = useStore();

  return (
    <main className="w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-700">
      <div
        className="
        min-w-full 
        min-h-full
        max-h-full
        sm:max-h-[800px]
        sm:min-w-[450px] 
        sm:min-h-[800px] 
        mx-auto 
        sm:rounded-lg 
        overflow-hidden 
        bg-white
       dark:bg-gray-800 
        relative
       sm:border
       sm:border-gray-200
      dark:sm:border-gray-600 
        "
      >
        <MainMenu />
        <motion.div
          animate={{ x: showMainMenu ? "85%" : 0 }}
          className="h-full w-full overflow-y-auto absolute top-0 left-0 z-20 bg-white dark:bg-gray-800"
          style={{ boxShadow: "-22px 0px 24px -10px rgba(0,0,0,0.37)" }}
        >
          {children}

          {showMainMenu && (
            <div
              onClick={() => setShowMainMenu(false)}
              className="h-full w-full absolute top-0 left-0 z-30"
            ></div>
          )}
        </motion.div>
        <AnimatePresence>{showHabitModal && <HabitModal />}</AnimatePresence>
        <AnimatePresence>{showSettings && <SettingsModal />}</AnimatePresence>
        <AnimatePresence>{showOrdering && <OrderingModal />}</AnimatePresence>
      </div>
    </main>
  );
}
