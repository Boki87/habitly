import { useState, useEffect } from "react";
import { db } from "@/models/db";
import { eachWeekOfInterval, startOfWeek } from "date-fns";

function useStats(habitId: number, count: any) {
  const [stats, setStats] = useState({
    total: 0,
    avg: 0,
    missed: 0,
  });

  async function prepStats() {
    const s = {
      total: 0,
      avg: 0,
      missed: 0,
    };
    const habit = await db.habits.get(habitId);
    const habitEntries = await db.habitEntries
      .where({ habitId })
      .sortBy("date");
    const habitEntriesTotal = habitEntries.length;
    if (!habit) return stats;

    //TODO: fix stats when adding entries before creation date
    let startDate = startOfWeek(habit.createdAt || new Date());
    if (habitEntries.length > 0 && habitEntries[0].date < startDate) {
      startDate = startOfWeek(habitEntries[0].date);
    }
    const numberOfWeeksFromStart = eachWeekOfInterval({
      start: startDate,
      end: new Date(),
    });
    const weekTargetRate = numberOfWeeksFromStart.length * habit.freq;
    const weekAvgRate = (100 * habitEntriesTotal) / weekTargetRate;

    s.avg = Math.round(weekAvgRate);
    s.total = habitEntriesTotal;
    s.missed =
      weekTargetRate - habitEntriesTotal > 0
        ? weekTargetRate - habitEntriesTotal
        : 0;
    setStats(s);
  }

  useEffect(() => {
    prepStats();
  }, [habitId, count]);

  return { stats };
}

export { useStats };
