import { useStore } from "./Store";
import { FaCog } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import { CgReorder } from "react-icons/cg";
import Modal from "./Modal";
import { useState } from "react";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "@/models/db";
import {
  DndContext,
  closestCenter,
  DragEndEvent,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
  useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Habit } from "@/types/Habit";

export default function SettingsModal() {
  const { setShowOrdering } = useStore();

  const mouseSensor = useSensor(MouseSensor); // Initialize mouse sensor
  const touchSensor = useSensor(TouchSensor); // Initialize touch sensor
  const sensors = useSensors(mouseSensor, touchSensor);

  const habits = useLiveQuery(() => db.habits.toArray())?.sort(
    (a, b) => a.order_index - b.order_index
  );

  async function handleDragEnd(event: DragEndEvent) {
    if (!habits) return;
    const { active, over } = event;
    if (!active || !over) return;
    if (active.id !== over.id) {
      let oldIndexes = habits.map((h) => h.id);
      //@ts-expect-error
      const activeIndex = oldIndexes.indexOf(active.id);
      //@ts-expect-error
      const overIndex = oldIndexes.indexOf(over.id);
      let newIndexes = arrayMove(oldIndexes, activeIndex, overIndex);
      const newHabits: any[] = [];
      newIndexes.forEach(async (newIndex, i) => {
        newHabits.push({
          ...habits.find((h) => h.id === newIndex),
          order_index: i,
        });
      });
      newHabits.forEach(async (h) => {
        await db.habits.update(h.id, { order_index: h.order_index });
      });
    }
  }

  return (
    <Modal onClose={() => setShowOrdering(false)}>
      <div className="h-full w-full flex flex-col">
        {/* Header */}
        <div className="h-16 min-h-[32px] w-full bg-gray-100 dark:bg-gray-500 dark:text-gray-50 rounded-t-lg flex items-center px-4 text-lg">
          <CgReorder />
          <span className="ml-2">Reorder Habits</span>
          <div className="flex-1"></div>
          <button
            onClick={() => setShowOrdering(false)}
            className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-400 text-gray-700 flex items-center justify-center hover:text-gray-800 hover:brightness-95 active:brightness-90"
          >
            <IoCloseOutline />
          </button>
        </div>
        {/* Header END */}

        <div className="h-full overflow-y-auto p-4 mt-4">
          <DndContext
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
            sensors={sensors}
          >
            {habits && (
              <SortableContext
                items={habits.map((h, i) => h.id || i + 1)}
                strategy={verticalListSortingStrategy}
              >
                {/* We need components that use the useSortable hook */}
                {habits?.map((habit) => (
                  <SortableItem
                    key={habit.id}
                    id={habit.id}
                    title={habit.title}
                    color={habit.color}
                  />
                ))}
              </SortableContext>
            )}
          </DndContext>
        </div>
      </div>
    </Modal>
  );
}

function SortableItem(props: any) {
  // props.id
  // JavaScript

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: props.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <div
        className="w-full h-10 rounded-lg my-3 flex items-center px-2 text-gray-800"
        style={{ background: `var(--color-${props.color})` }}
      >
        {props.title}
      </div>
    </div>
  );
}
