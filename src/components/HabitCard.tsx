import {
  useState,
  useRef,
  useEffect,
  useMemo,
  SyntheticEvent,
  ReactNode,
} from "react";
import { Habit } from "@/types/Habit";
import { HabitEntry } from "@/types/HabitEntry";
import { isSameDay } from "date-fns";
import { FaCheck } from "react-icons/fa";
import { db } from "@/models/db";
import ConfettiExplosion, { ConfettiProps } from "react-confetti-explosion";

const mediumProps: ConfettiProps = {
  force: 0.6,
  duration: 2500,
  particleCount: 100,
  width: 800,
  colors: ["#BCE29E", "#E5EBB2", "#F8C4B4", "#FF8787", "#FEBE8C", "#A3DDDD"],
};

interface IHabitCard {
  weeklyData?: HabitEntry[];
  habit: Habit;
  selectedDate: Date;
  onSelect: (v: Habit) => void;
}

export default function HabitCard({
  habit,
  weeklyData,
  selectedDate,
  onSelect,
}: IHabitCard) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progressSize, setProgressSize] = useState(40);
  const [isConfettiExploding, setIsConfettiExploding] = useState(false);

  const entries = useMemo(
    () => weeklyData?.filter((e) => e.habitId === habit.id) || [],
    [habit, weeklyData]
  );

  const isChecked = useMemo(() => {
    //map through all data of week and check if entry exists for current habit

    const check = weeklyData?.filter((entry) => {
      if (entry.habitId === habit.id && isSameDay(entry?.date, selectedDate)) {
        return entry;
      }
    });

    if (check && check.length > 0) {
      return true;
    } else {
      return false;
    }
  }, [weeklyData, selectedDate]);

  const checkedEntryId = useMemo(() => {
    const check = weeklyData?.filter((entry) => {
      if (entry.habitId === habit.id && isSameDay(entry?.date, selectedDate)) {
        return entry;
      }
    });

    if (check && check.length > 0) {
      return check[0].id;
    } else {
      return null;
    }
  }, [weeklyData, selectedDate]);

  useEffect(() => {
    if (containerRef?.current?.clientWidth) {
      const containerWidth = containerRef.current.clientWidth;

      const percentage = Math.ceil(100 / habit.freq) * entries.length;

      const w = Math.ceil(containerWidth * (percentage / 100) * 2 - 40);

      setProgressSize(w > 40 ? w : 40);
    }
  }, [containerRef, weeklyData]);

  useEffect(() => {
    if (entries.length === habit.freq) {
      setIsConfettiExploding(true);
    } else {
      setIsConfettiExploding(false);
    }
  }, [entries, habit.freq]);

  return (
    <div
      ref={containerRef}
      className="w-full max-w-md bg-gray-50 dark:bg-gray-700 h-20 mb-3 rounded-lg relative overflow-hidden mx-auto"
    >
      {/* Progress circle */}
      <div
        className="flex items-center justify-center absolute rounded-full text-gray-600 dark:text-gray-50 text-sm"
        style={{
          width: `${progressSize}px`,
          height: `${progressSize}px`,
          top: `28px`,
          left: `28px`,
          transform: `translateY(-50%) translateX(-50%)`,
          transition: "all .3s ease-in-out",
          background: `var(--color-${habit.color})`,
        }}
      >
        {entries.length}/{habit.freq}
      </div>
      {/* Progress circle END */}

      <div
        className="absolute top-0 lef-0 w-full h-full pl-16 py-3 pr-2"
        onClick={() => onSelect(habit)}
      >
        <div className="flex">
          <span className="text-2xl font-bold text-gray-700 dark:text-gray-50 cursor-pointer">
            {habit.title}
          </span>
          <div className="flex-1"></div>
          <CheckBoxButton
            onClick={async (e: SyntheticEvent) => {
              e.stopPropagation();
              if (!habit.id) return;
              if (isChecked) {
                //remove entry from database
                if (checkedEntryId) {
                  db.habitEntries.where({ id: checkedEntryId }).delete();
                }
              } else {
                //add new database entry for selectedDate
                db.habitEntries.add({
                  habitId: habit.id,
                  date: selectedDate,
                });
              }
              //TODO
              // window.navigator.vibrate(200);
            }}
            color={habit.color}
            isChecked={isChecked}
          >
            {isConfettiExploding && <ConfettiExplosion {...mediumProps} />}
          </CheckBoxButton>
        </div>
        <p className="text-gray-600 dark:text-gray-100 truncate">
          {habit.desc}
        </p>
      </div>
    </div>
  );
}

function CheckBoxButton({
  isChecked,
  color,
  children,
  ...rest
}: {
  isChecked: boolean;
  color: string;
  children?: ReactNode;
  [x: string]: any;
}) {
  return (
    <button
      style={{
        background: isChecked ? `var(--color-${color})` : "",
      }}
      className={`w-8 h-8 rounded-md flex items-center justify-center active:brightness-90 text-gray-500 dark:text-gray-300 ${
        isChecked
          ? "text-gray-700 dark:text-white"
          : "bg-gray-200 dark:bg-gray-500 "
      }`}
      {...rest}
    >
      <FaCheck />
      {children}
    </button>
  );
}
