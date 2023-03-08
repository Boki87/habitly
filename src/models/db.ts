"use client";
import { Habit } from "@/types/Habit";
import { HabitEntry } from "@/types/HabitEntry";
import Dexie, { Table } from "dexie";
import { format } from "date-fns";

export class HabitlyDB extends Dexie {
  habits!: Table<Habit, number>;
  habitEntries!: Table<HabitEntry, number>;
  constructor() {
    super("HabitlyDB");
    this.version(1).stores({
      habits: "++id",
      habitEntries: "++id, habitId, date",
    });
  }
}

export const db = new HabitlyDB();

db.on("populate", async () => {
  const reminderTime = format(new Date(), "HH:mm").toString();
  const habits = await db.habits.add({
    title: "New Habit",
    desc: "Change me, im a starter habit 😬",
    color: "blue",
    freq: 3,
    useReminder: false,
    reminderTime,
    reminderText: "",
    order_index: 0,
  });
});
