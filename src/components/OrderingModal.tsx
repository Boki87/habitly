import { useStore } from "./Store";
import { FaCog } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import { CgReorder } from "react-icons/cg";
import Modal from "./Modal";
import { useState } from "react";

export default function SettingsModal() {
  const { setShowOrdering } = useStore();

  return (
    <Modal onClose={() => setShowOrdering(false)}>
      {/* Header */}
      <div className="h-16 w-full bg-gray-100 dark:bg-gray-500 dark:text-gray-50 rounded-t-lg flex items-center px-4 text-lg mb-6">
        <CgReorder />
        <span className="ml-2">Reorder Habits</span>
        <div className="flex-1"></div>
        <button
          onClick={() => setShowOrdering(false)}
          className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-300 text-gray-700 flex items-center justify-center hover:text-gray-800 hover:brightness-95 active:brightness-90"
        >
          <IoCloseOutline />
        </button>
      </div>
    </Modal>
  );
}
