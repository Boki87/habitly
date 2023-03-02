import { BsGithub } from "react-icons/bs";
import { FaCog } from "react-icons/fa";
import { CgReorder } from "react-icons/cg";
import { CiImport, CiExport } from "react-icons/ci";
import { useStore } from "./Store";

export default function MainMenu() {
  const { setShowSettings, setShowOrdering } = useStore();
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
      title: "Import Habits",
    },
    {
      icon: <CiExport />,
      title: "Export Habits",
    },
  ];
  return (
    <div className="w-full h-full absolute top-0 left-0 bg-gray-50 pt-20">
      {menuItems.map((item) => (
        <div
          onClick={() => {
            if (item.action) {
              item.action();
            }
          }}
          key={item.title}
          className="flex items-center pl-3 h-14 cursor-pointer hover:bg-gray-100 text-2xl mb-3 text-gray-900"
        >
          {item.icon}
          <span className="ml-4 text-gray-600">{item.title}</span>
        </div>
      ))}
    </div>
  );
}
