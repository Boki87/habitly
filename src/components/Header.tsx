import { HiOutlineBars3BottomLeft, HiPlus } from "react-icons/hi2";

export default function Header({
  onBurgerClick,
  onPlusClick,
}: {
  onBurgerClick?: () => void;
  onPlusClick?: () => void;
}) {
  return (
    <div className="h-16 w-full border-b border-b-gray-150 flex items-center justify-between px-4 bg-white z-20">
      <button onClick={onBurgerClick} className="text-3xl text-gray-700">
        <HiOutlineBars3BottomLeft />
      </button>
      <button onClick={onPlusClick} className="text-3xl text-gray-700">
        <HiPlus />
      </button>
    </div>
  );
}
