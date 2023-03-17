import { db } from "@/models/db";
import { useLiveQuery } from "dexie-react-hooks";
import HabitCard from "@/components/HabitCard";
import { Habit } from "@/types/Habit";
import { startOfWeek } from "date-fns";
import { useStore } from "./Store";
import GoodHabitsPng from "../assets/good-habits.png";

export default function HabitList({
  selectedDate,
  onSelectHabit,
}: {
  selectedDate: Date;
  onSelectHabit: (v: Habit) => void;
}) {
  const { startOfWeek: weekStartsOn, setShowHabitModal } = useStore();

  //get first day of current week
  const d = new Date();
  const firstDay = startOfWeek(d, { weekStartsOn });

  const habits = useLiveQuery(() => db.habits.toArray());

  //query only habit entries for current week
  const habitEntries = useLiveQuery(() =>
    db.habitEntries.where("date").aboveOrEqual(firstDay).toArray()
  );

  return (
    <div className="px-4 flex-1 overflow-auto pb-10">
      {habits?.length === 0 && (
        <div
          onClick={() => setShowHabitModal(true)}
          className="text-center cursor-pointer"
        >
          <p className="text-center text-xl font-bold text-gray-700 dark:text-gray-100">
            Lets create some habits
          </p>
          <img src={GoodHabitsPng} className="w-72 max-w-full mx-auto mt-8" />
        </div>
      )}
      {habits
        ?.sort((a, b) => {
          return a.order_index - b.order_index;
        })
        .map((habit) => {
          return (
            <HabitCard
              onSelect={onSelectHabit}
              weeklyData={habitEntries}
              habit={habit}
              selectedDate={selectedDate}
              key={habit.id}
            />
          );
        })}
    </div>
  );
}
