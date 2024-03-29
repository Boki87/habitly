import { SyntheticEvent, useEffect, useRef, useState } from "react";
import { BsGithub } from "react-icons/bs";
import { FaCog } from "react-icons/fa";
import { CgReorder } from "react-icons/cg";
import { CiImport, CiExport } from "react-icons/ci";
import { useStore } from "./Store";
import bmc from "../assets/bmc.png";
import { exportData, importData } from "@/models/db";

export default function MainMenu() {
  const { setShowSettings, setShowOrdering } = useStore();
  const [jsonFile, setJsonFile] = useState<File | null>(null);
  const fileRef = useRef<HTMLInputElement | null>(null);

  const menuItems = [
    {
      icon: <FaCog />,
      title: "Settings",
      action: () => setShowSettings(true),
    },
    {
      icon: <CgReorder />,
      title: "Reorder Habits",
      action: () => setShowOrdering(true),
    },
    {
      icon: <CiImport />,
      title: "Import",
      action: () => {
        fileRef?.current?.click();
      },
    },
    {
      icon: <CiExport />,
      title: "Export",
      action: () => exportData(),
    },
  ];

  function handleFileChange(e: SyntheticEvent) {
    const input = e.target as HTMLInputElement;
    if (input?.files && input?.files[0]) {
      setJsonFile(input.files[0]);
    } else {
      setJsonFile(null);
    }
  }

  useEffect(() => {
    if (jsonFile) {
      if (jsonFile.type.includes("json")) {
        importData(jsonFile);
      } else {
        alert("Incompatible data!");
      }
    }
  }, [fileRef, jsonFile]);

  return (
    <div className="w-full h-full absolute top-0 left-0 bg-gray-50 dark:bg-gray-700 pt-20">
      <input
        ref={fileRef}
        onChange={handleFileChange}
        type="file"
        style={{ display: "none" }}
      />
      {menuItems.map((item) => (
        <div
          onClick={() => {
            if (item.action) {
              item.action();
            }
          }}
          key={item.title}
          className="flex items-center pl-3 h-14 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 text-2xl mb-3 text-gray-900 dark:text-gray-50"
        >
          {item.icon}
          <span className="ml-4 text-gray-600 dark:text-gray-100">
            {item.title}
          </span>
        </div>
      ))}
      <div className="w-full h-12 flex items-center justify-start px-4 flex-wrap">
        <a
          href="https://www.buymeacoffee.com/bokicodes"
          target="_blank"
          className="flex h-9 px-3 py-3 bg-gray-200 rounded-md items-center justify-start text-gray-800 active:brightness-80 hover:brightness-95 min-w-[200px]"
        >
          <img src={bmc} className="h-7 mr-2" />
          <span>By me a coffee</span>
        </a>
      </div>
      <div className="w-full h-12 flex items-center justify-start px-4 flex-wrap">
        <a
          href="https://github.com/Boki87/habitly"
          target="_blank"
          className="flex h-9 px-3 py-3 bg-gray-200 rounded-md items-center justify-start text-gray-800 active:brightness-80 hover:brightness-95 min-w-[200px]"
        >
          <BsGithub size={25} />
          <span className="text-md ml-2">Repo</span>
        </a>
      </div>
    </div>
  );
}
