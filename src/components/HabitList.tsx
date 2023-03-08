import { db } from "@/models/db";
import { useLiveQuery } from "dexie-react-hooks";
import HabitCard from "@/components/HabitCard";
import { Habit } from "@/types/Habit";
import { startOfWeek } from "date-fns";
import { useStore } from "./Store";

export default function HabitList({
  selectedDate,
  onSelectHabit,
}: {
  selectedDate: Date;
  onSelectHabit: (v: Habit) => void;
}) {
  const { startOfWeek: weekStartsOn } = useStore();

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
