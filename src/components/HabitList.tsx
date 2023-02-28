import { db } from "@/models/db";
import { useLiveQuery } from "dexie-react-hooks";
import HabitCard from "@/components/HabitCard";
import { Habit } from "@/types/Habit";

export default function HabitList({
  selectedDate,
  onSelectHabit,
}: {
  selectedDate: Date;
  onSelectHabit: (v: Habit) => void;
}) {
  const habits = useLiveQuery(() => db.habits.toArray());
  const habitEntries = useLiveQuery(() => db.habitEntries.toArray());

  return (
    <div className="px-4 flex-1 overflow-auto">
      {habits?.map((habit) => {
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
