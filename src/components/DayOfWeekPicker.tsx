import {
  eachDayOfInterval,
  startOfWeek,
  add,
  format,
  isSameDay,
  isAfter,
} from "date-fns";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "@/models/db";
import { useMemo } from "react";
import { motion } from "framer-motion";
import { HabitEntry } from "@/types/HabitEntry";
import { Habit } from "@/types/Habit";

export default function DayOfWeekPicker({
  selectedDate,
  onDateChange,
  startOfWeekDay = 1, //week start on monday by default
}: {
  selectedDate: Date;
  onDateChange: (v: Date) => void;
  startOfWeekDay?: 0 | 1;
}) {
  const d = new Date();
  const firstDay = startOfWeek(d, { weekStartsOn: startOfWeekDay });
  const lastDay = add(firstDay, { days: 6 });

  const habits = useLiveQuery(() => {
    return db.habits.toArray();
  });

  const habitEntries = useLiveQuery(() =>
    db.habitEntries.where("date").aboveOrEqual(firstDay).toArray()
  );

  const percentCheckedForSelectedDate = useMemo(() => {
    if (!habitEntries || !habits) return 0;
    let percentage = (habitEntries?.length / habits?.length) * 100;
    return Math.round(percentage);
  }, [habitEntries, habits]);

  const daysInWeek = eachDayOfInterval({
    start: firstDay,
    end: lastDay,
  });

  function onDateChangeHandler(day: Date) {
    //cant go into future
    if (isAfter(day, d)) return;
    onDateChange(day);
  }

  return (
    <>
      <div className="flex items-center justify-center w-full max-w-lg mt-1 mb-2 mx-auto">
        <span className="text-lg text-gray-800 dark:text-gray-100">
          Activity for <strong>{format(selectedDate, "d  MMMM yyyy")}</strong>
        </span>
      </div>
      <div className="w-full max-w-lg mx-auto min-h-[96px] mb-4 flex justify-between px-4 overflow-hidden">
        {daysInWeek?.map((day, i) => (
          <WeekDay
            dayIter={day}
            selectedDate={selectedDate}
            entries={habitEntries || []}
            habits={habits || []}
            onChangeDate={onDateChangeHandler}
            key={i}
          />
        ))}
      </div>
    </>
  );
}

function WeekDay({
  dayIter,
  selectedDate,
  entries,
  habits,
  onChangeDate,
}: {
  dayIter: Date;
  selectedDate: Date;
  entries: HabitEntry[];
  habits: Habit[];
  onChangeDate: (v: Date) => void;
}) {
  const d = new Date();
  let isSelectedDay = isSameDay(dayIter, selectedDate);
  let isAfterToday = isAfter(dayIter, d);
  let isToday = isSameDay(d, dayIter);

  const percentCheckedForSelectedDate = useMemo(() => {
    if (!entries || !habits) return 0;
    let entriesForIterDay = entries.filter((ent) =>
      isSameDay(ent.date, dayIter)
    );
    let percentage = (entriesForIterDay?.length / habits?.length) * 100;
    return Math.round(percentage);
  }, [entries, habits]);

  return (
    <div
      onClick={() => onChangeDate(dayIter)}
      className={`relative cursor-pointer min-w-[45px] h-full flex flex-col items-center justify-center active:brightness-95 rounded-md ${
        isSelectedDay
          ? "bg-gray-300 dark:bg-gray-600"
          : "bg-gray-200 dark:bg-gray-700"
      } ${isAfterToday ? "opacity-40" : "opacity-100"}`}
    >
      <motion.div
        animate={{ height: `${percentCheckedForSelectedDate}%` }}
        className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-blue-200 dark:from-cyan-400 to-cyan-400 dark:to-blue-500 rounded-md"
      ></motion.div>

      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center z-30">
        <div
          className={
            isSelectedDay
              ? `text-gray-700 dark:text-gray-50 text-lg font-bold`
              : "text-gray-500 dark:text-gray-200 text-sm"
          }
        >
          {format(dayIter, "EE")}
        </div>

        <div
          className={
            isSelectedDay
              ? "text-4xl font-extrabold text-gray-800 dark:text-white scale-125 transition-all duration-200"
              : `text-xl ${
                  isToday
                    ? "text-gray-800 dark:text-white font-bold"
                    : "text-gray-700 dark:text-gray-100 font-bold"
                }`
          }
        >
          {format(dayIter, "d")}
        </div>
      </div>
    </div>
  );
}
