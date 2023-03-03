import { useStore } from "./Store";
import { FaCog } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import Modal from "./Modal";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function SettingsModal() {
  const { setShowSettings } = useStore();

  const [weekStartsOn, setWeekStartsOn] = useState(1);

  return (
    <Modal onClose={() => setShowSettings(false)}>
      {/* Header */}
      <div className="h-16 w-full bg-gray-100 dark:bg-gray-500 dark:text-gray-50 rounded-t-lg flex items-center px-4 text-lg mb-6">
        <FaCog />
        <span className="ml-2">Settings</span>
        <div className="flex-1"></div>
        <button
          onClick={() => setShowSettings(false)}
          className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-300 text-gray-700 flex items-center justify-center hover:text-gray-800 hover:brightness-95 active:brightness-90"
        >
          <IoCloseOutline />
        </button>
      </div>
      {/* Header END */}

      <div className="px-4">
        <div className="h-16 w-full border border-gray-150 dark:border-gray-600 rounded-lg flex items-center justify-between px-2 py-2 mb-4">
          <span className="text-lg text-gray-800 dark:text-gray-50">
            Week starts on
          </span>
          <div className="p-2 h-full bg-gray-200 dark:bg-gray-600 rounded-lg flex">
            <button
              onClick={() => setWeekStartsOn(1)}
              className={`h-full px-2 flex items-center justify-center rounded-lg mr-2 active:brightness-90 ${
                weekStartsOn == 1
                  ? "bg-white dark:bg-gray-400 text-gray-800 dark:text-gray-50"
                  : "bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-50"
              }`}
            >
              Monday
            </button>
            <button
              onClick={() => setWeekStartsOn(0)}
              className={`h-full px-2 flex items-center justify-center rounded-lg active:brightness-90 ${
                weekStartsOn != 1
                  ? "bg-white dark:bg-gray-400 text-gray-800 dark:text-gray-50"
                  : "bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-50"
              }`}
            >
              Sunday
            </button>
          </div>
        </div>

        <div className="h-16 w-full border border-gray-150 dark:border-gray-600 rounded-lg flex items-center justify-between px-2 py-2 mb-4">
          <span className="text-lg text-gray-800 dark:text-gray-50">Theme</span>
          <div>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </Modal>
  );
}
