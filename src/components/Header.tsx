import { HiOutlineBars3BottomLeft, HiPlus } from "react-icons/hi2";

export default function Header({
  onBurgerClick,
  onPlusClick,
}: {
  onBurgerClick?: () => void;
  onPlusClick?: () => void;
}) {
  return (
    <div className="h-16 w-full border-b border-b-gray-150 dark:border-b-gray-700 flex items-center justify-between px-4 bg-white dark:bg-gray-800 z-20 absolute top-0 left-0 text-gray-700 dark:text-gray-100 standalone:mt-12">
      <button onClick={onBurgerClick} className="text-3xl">
        <HiOutlineBars3BottomLeft />
      </button>
      <button onClick={onPlusClick} className="text-3xl">
        <HiPlus />
      </button>
    </div>
  );
}
