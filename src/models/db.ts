"use client";
import { Habit } from "@/types/Habit";
import { HabitEntry } from "@/types/HabitEntry";
import Dexie, { Table } from "dexie";
import { format } from "date-fns";
import { importDB, exportDB } from "dexie-export-import";

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
    createdAt: new Date(),
  });
});

export async function exportData() {
  try {
    const blob = await exportDB(db);
    let obj = JSON.parse(await blob.text());
    downloadObjectAsJson(obj, "habitly-export");
  } catch (e) {
    console.log(e);
  }
}

export async function importData(json: File) {
  // console.log("import ", json);
  await importDB(json);
}

function downloadObjectAsJson(exportObj: any, exportName: string) {
  var dataStr =
    "data:text/json;charset=utf-8," +
    encodeURIComponent(JSON.stringify(exportObj));
  var downloadAnchorNode = document.createElement("a");
  downloadAnchorNode.setAttribute("href", dataStr);
  downloadAnchorNode.setAttribute("download", exportName + ".json");
  document.body.appendChild(downloadAnchorNode); // required for firefox
  downloadAnchorNode.click();
  downloadAnchorNode.remove();
}
