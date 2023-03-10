import { calcLength, motion } from "framer-motion";
import { MdEdit, MdRefresh } from "react-icons/md";
import { SlRefresh } from "react-icons/sl";
import { FiBell, FiBellOff } from "react-icons/fi";
import { useStore } from "./Store";
import { useStats } from "@/hooks/useStats";
import Calendar from "react-calendar";
import { SyntheticEvent, useCallback } from "react";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "@/models/db";
import { isSameDay } from "date-fns";

export default function HabitStats({
  onSectionChange,
  isInitialOpen,
}: {
  onSectionChange: (val: "form" | "stats") => void;
  isInitialOpen?: boolean;
}) {
  const { activeHabit, setShowHabitModal } = useStore();

  const habitEntries = useLiveQuery(() =>
    db.habitEntries.where({ habitId: activeHabit?.id }).toArray()
  );

  const { stats } = useStats(activeHabit?.id || 0, habitEntries?.length);

  function styleDateEntry({ date, view }: { date: Date; view: string }) {
    if (view === "month") {
      if (habitEntries?.find((eDate) => isSameDay(eDate.date, date))) {
        return "react-calendar-tile--selected";
      } else {
        return "";
      }
    }
    return "";
  }

  function styledDateContent({
    activeStartDate,
    date,
    view,
  }: {
    activeStartDate: Date;
    date: Date;
    view: string;
  }) {
    if (view === "month") {
      if (habitEntries?.find((eDate) => isSameDay(eDate.date, date))) {
        return (
          <div
            className="rounded-full"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: "35px",
              height: "35px",
              transform: "translateX(-50%) translateY(-50%)",
              background: `var(--color-${activeHabit?.color})`,
              opacity: 0.5,
            }}
          ></div>
        );
      } else {
        return null;
      }
    }

    return null;
  }

  async function dateChangeHandler(value: Date, event: SyntheticEvent) {
    if (!activeHabit) return;
    //toggle habit entry on selected date
    const entry = await db.habitEntries.get({ date: value });
    if (entry) {
      //delete entry
      await db.habitEntries.where({ id: entry.id }).delete();
    } else {
      //add new entry
      await db.habitEntries.add({
        habitId: activeHabit.id || 0,
        date: value,
      });
    }
  }

  return (
    <motion.div
      animate={{ x: 0, opacity: 1 }}
      initial={{ x: "-100%", opacity: 0 }}
      exit={{ x: "100%", opacity: 0 }}
      transition={{ duration: isInitialOpen ? 0 : 0.2 }}
    >
      {/* HABIT Header */}
      <div className="flex justify-between items-center h-12 mb-4">
        <button
          type="button"
          onClick={() => onSectionChange("form")}
          className="h-8 px-3 text-gray-500 dark:text-gray-200 hover:brightness-95 active:brightness-90 min-w-[100px]"
        >
          <MdEdit size={20} />
        </button>
        <span className="text-xl text-gray-600 dark:text-white">
          {activeHabit?.title}
        </span>
        <button
          onClick={() => setShowHabitModal(false)}
          type="submit"
          className="h-8 px-3 text-gray-500 dark:text-gray-200 hover:brightness-95 active:brightness-90 min-w-[100px]"
        >
          Close
        </button>
      </div>
      {/* HABIT Header END */}

      <div className="flex px-4 mt-4 gap-2">
        <div className="h-12 rounded-lg flex items-center justify-center bg-gray-100 dark:bg-gray-600 px-3 flex-1 text-lg text-gray-700 dark:text-gray-100">
          <SlRefresh />
          <span className="ml-1">{activeHabit?.freq} times a week</span>
        </div>
        <div className="h-12 rounded-lg flex items-center justify-center bg-gray-100 dark:bg-gray-600 px-3 flex-1 text-lg text-gray-700 dark:text-gray-100">
          {activeHabit?.useReminder ? <FiBell /> : <FiBellOff />}
          <span className="ml-2">
            Reminder {activeHabit?.useReminder ? "ON" : "OFF"}
          </span>
        </div>
      </div>

      <div className="flex px-4 mt-4 gap-2">
        <div className="h-20 w-full bg-gray-100 dark:bg-gray-600 rounded-lg flex items-center py-2 dark:text-gray-100">
          <div className="flex-1 border-r border-gray-200 dark:border-gray-500 flex h-full items-center justify-center">
            <div className="flex flex-col items-center">
              <span className="text-lg font-bold">{stats.avg}%</span>
              <span className="text-sm">total</span>
            </div>
          </div>
          <div className="flex-1 border-r border-gray-200 dark:border-gray-500 flex h-full items-center justify-center">
            <div className="flex flex-col items-center">
              <span className="text-lg font-bold">{stats.total}</span>
              <span className="text-sm">times</span>
            </div>
          </div>
          <div className="flex-1 flex h-full items-center justify-center">
            <div className="flex flex-col items-center">
              <span className="text-lg font-bold">{stats.missed}</span>
              <span className="text-sm">missed</span>
            </div>
          </div>
        </div>
      </div>

      {/* Calendar */}
      <div className="mt-4 px-4">
        <Calendar
          value={new Date()}
          defaultView="month"
          maxDate={new Date()}
          prev2Label={null}
          next2Label={null}
          tileClassName={styleDateEntry}
          tileContent={styledDateContent}
          onChange={dateChangeHandler}
        />
      </div>
    </motion.div>
  );
}
