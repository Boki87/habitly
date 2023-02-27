import { useEffect } from "react";
import { FormEvent, SyntheticEvent, useState } from "react";
import { db } from "@/models/db";
import { Habit } from "@/types/Habit";
import { useStore } from "./Store";
import Input from "./Input";
import ColorPicker from "./ColorPicker";
import Toggle from "./Toggle";
import { FaTrash } from "react-icons/fa";
import { format } from "date-fns";
import { colors } from "./ColorPicker";

const emptyHabit = {
  title: "",
  desc: "",
  color: "",
  freq: 1,
  useReminder: false,
  reminderTime: "",
  reminderText: "",
};

export default function NewHabitForm() {
  const { activeHabit, setShowHabitModal, showHabitModal } = useStore();
  const [habitState, setHabitState] = useState<Habit>(
    activeHabit || emptyHabit
  );

  function decreesFreq() {
    if (habitState.freq > 1) {
      setHabitState((old) => {
        return { ...old, freq: old.freq - 1 };
      });
    }
  }

  function increaseFreq() {
    if (habitState.freq < 7) {
      setHabitState((old) => {
        return { ...old, freq: old.freq + 1 };
      });
    }
  }

  function submitHandler(e: FormEvent) {
    e.preventDefault();
    if (!activeHabit) {
      db.habits.add(habitState);
    } else {
      if (!activeHabit.id) return;
      db.habits.update(activeHabit.id, habitState);
    }
    setShowHabitModal(false);
  }

  function deleteHabit() {
    const r = window.confirm(
      "Sure yuo want to delete this habit and all its data?"
    );
    if (!r) return;
    db.habitEntries.where({ habitId: habitState.id }).delete();
    db.habits.where({ id: habitState.id }).delete();
    setShowHabitModal(false);
  }

  useEffect(() => {
    if (showHabitModal) {
      //set random initial color
      const color = colors[Math.floor(Math.random() * colors.length)];
      //set reminder time to now
      const reminderTime = format(new Date(), "HH:mm").toString();
      setHabitState((old) => {
        return { ...old, color, reminderTime };
      });
    }
  }, [showHabitModal]);

  return (
    <div className="w-full">
      <form onSubmit={submitHandler}>
        {/* HABIT Header */}
        <div className="flex justify-between items-center h-12 mb-4">
          <button
            type="button"
            onClick={() => setShowHabitModal(false)}
            className="h-8 px-3 text-gray-500 hover:text-gray-700 active:text-gray-900 min-w-[100px]"
          >
            Cancel
          </button>
          <span className="text-xl text-gray-600">
            {!activeHabit ? "New Habit" : habitState.title}
          </span>
          <button
            type="submit"
            className="h-8 px-3 text-gray-500 hover:text-gray-700 active:text-gray-900 min-w-[100px]"
          >
            Done
          </button>
        </div>
        {/* HABIT Header END */}

        {/* Title input */}
        <div className="px-4 mb-3">
          <Input
            required
            placeholder="Habit Title"
            name="title"
            value={habitState?.title}
            onInput={(e: SyntheticEvent) => {
              let input = e.currentTarget as HTMLInputElement;
              setHabitState((old) => {
                return { ...old, title: input.value };
              });
            }}
          />
        </div>
        {/* Title input END */}

        {/* Desc input */}
        <div className="px-4 mb-3">
          <Input
            placeholder="Describe the habit in brief"
            name="desc"
            value={habitState?.desc}
            onInput={(e: SyntheticEvent) => {
              let input = e.currentTarget as HTMLInputElement;
              setHabitState((old) => {
                return { ...old, desc: input.value };
              });
            }}
          />
        </div>
        {/* Desc input END */}

        {/* Color picker */}
        <ColorPicker
          value={habitState?.color}
          onChange={(c) => {
            const newHabitState: Habit = { ...habitState, color: c };
            setHabitState(newHabitState);
          }}
        />
        {/* Color picker  END*/}

        {/* Habit Frequency */}
        <div className="flex px-4 h-20">
          <div className="flex flex-col h-full flex-1 justify-center">
            <span className="text-2xl text-gray-700 font-bold">Frequency</span>
            <span className="text-md text-gray-500 -mt-1">Times a week</span>
          </div>
          <div className="flex items-center">
            <button
              type="button"
              onClick={decreesFreq}
              className="w-10 h-10 bg-gray-100 rounded-md flex items-center justify-center active:brightness-90 hover:brightness-95"
            >
              -
            </button>
            <span className="w-8 text-center text-xl text-gray-700">
              {habitState.freq}
            </span>
            <button
              type="button"
              onClick={increaseFreq}
              className="w-10 h-10 bg-gray-100 rounded-md flex items-center justify-center active:brightness-90 hover:brightness-95"
            >
              +
            </button>
          </div>
        </div>
        {/* Habit Frequency END */}
        {/* Reminder toggle */}
        <div className="flex px-4 h-20 mb-3">
          <div className="flex flex-col h-full flex-1 justify-center">
            <span className="text-2xl text-gray-700 font-bold">Reminder</span>
            <span className="text-md text-gray-500 -mt-1">
              Just notifications
            </span>
          </div>
          <div className="flex items-center">
            <Toggle
              value={habitState.useReminder}
              onChange={() =>
                setHabitState((old) => {
                  return { ...old, useReminder: !old.useReminder };
                })
              }
            />
          </div>
        </div>
        {/* Reminder toggle END */}

        <div className="flex px-4">
          <Input
            value={habitState.reminderTime || ""}
            onChange={(e: SyntheticEvent) => {
              const input = e.target as HTMLInputElement;
              setHabitState((old) => {
                return { ...old, reminderTime: input.value };
              });
            }}
            type="time"
            style={{ width: "200px", marginRight: "10px" }}
          />
          <Input
            value={habitState.reminderText}
            onInput={(e: SyntheticEvent) => {
              const input = e.target as HTMLInputElement;
              setHabitState((old) => {
                return { ...old, reminderText: input.value };
              });
            }}
            type="text"
            placeholder="Reminder text"
          />
        </div>
      </form>
      {activeHabit && (
        <div className="px-4">
          <button
            onClick={deleteHabit}
            className="h-10 w-full flex items-center justify-center bg-red-200 my-3 rounded-lg text-gray-700 active:brightness-90 hover:brightness-95"
          >
            <FaTrash />
            <span className="ml-2">DELETE</span>
          </button>
        </div>
      )}
    </div>
  );
}
