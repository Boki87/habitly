import { FaCheck } from "react-icons/fa";
export const colors = ["green", "lime", "rose", "pink", "brown", "blue"];

interface IColorPicker {
  value?: string;
  onChange?: (v: string) => void;
}

export default function ColorPicker({ value, onChange }: IColorPicker) {
  return (
    <div className="flex items-center justify-between w-full px-4 my-4">
      {colors.map((c) => {
        const isSelected = value === c;
        return (
          <div
            onClick={() => onChange && onChange(c)}
            className="min-w-[40px] min-h-[40px] rounded-full hover:brightness-90 active:brightness-75 cursor-pointer flex items-center justify-center"
            style={{ background: `var(--color-${c})` }}
            key={c}
          >
            {isSelected && <FaCheck />}
          </div>
        );
      })}
    </div>
  );
}
