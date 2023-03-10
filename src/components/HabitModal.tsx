import { useEffect, useState } from "react";
import HabitForm from "./HabitForm";
import { useStore } from "./Store";
import Modal from "./Modal";
import { AnimatePresence, motion } from "framer-motion";
import HabitStats from "./HabitStats";

export default function HabitModal() {
  const { setShowHabitModal, activeHabit, showHabitModal } = useStore();
  const [activeSection, setActiveSection] = useState<"form" | "stats">("form");
  const [isInitialOpen, setIsInitialOpen] = useState(true);

  useEffect(() => {
    if (activeHabit && showHabitModal) {
      setActiveSection("stats");
      setIsInitialOpen(false);
    }
  }, [activeHabit, showHabitModal]);

  return (
    <Modal onClose={() => setShowHabitModal(false)}>
      <AnimatePresence initial={false} mode={"wait"}>
        {activeSection === "form" ? (
          <HabitForm
            isInitialOpen={isInitialOpen}
            key={activeSection}
            onSectionChange={(val) => {
              setActiveSection(val);
            }}
          />
        ) : (
          <HabitStats
            isInitialOpen={isInitialOpen}
            key={activeSection}
            onSectionChange={(val) => setActiveSection(val)}
          />
        )}
      </AnimatePresence>
    </Modal>
  );
}
