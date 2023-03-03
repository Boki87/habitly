import {
  eachDayOfInterval,
  startOfWeek,
  add,
  format,
  isSameDay,
  isAfter,
} from "date-fns";

export default function DayOfWeekPicker({
  selectedDate,
  onDateChange,
  startOfWeekDay = 1, //week start on monday by default
}: {
  selectedDate: Date;
  onDateChange: (v: Date) => void;
  startOfWeekDay?: 0 | 1;
}) {
  const d = new Date();
  const firstDay = startOfWeek(d, { weekStartsOn: startOfWeekDay });
  const lastDay = add(firstDay, { days: 6 });

  const daysInWeek = eachDayOfInterval({
    start: firstDay,
    end: lastDay,
  });

  function onDateChangeHandler(day: Date) {
    //cant go into future
    if (isAfter(day, d)) return;
    onDateChange(day);
  }

  return (
    <>
      <div className="flex items-center justify-center w-full max-w-lg mt-1 mb-2 mx-auto">
        <span className="text-lg text-gray-800 dark:text-gray-100">
          Activity for <strong>{format(selectedDate, "d  MMMM yyyy")}</strong>
        </span>
      </div>
      <div className="w-full max-w-lg mx-auto min-h-[96px] mb-4 flex justify-between px-4">
        {daysInWeek?.map((day) => {
          let isSelectedDay = isSameDay(day, selectedDate);
          let isToday = isSameDay(d, day);
          return (
            <div
              key={day.toString()}
              onClick={() => onDateChangeHandler(day)}
              className={`cursor-pointer min-w-[45px] h-full flex flex-col items-center justify-center active:brightness-95 rounded-md ${
                isSelectedDay
                  ? "bg-gray-300 dark:bg-gray-600"
                  : "bg-gray-200 dark:bg-gray-700"
              } ${isAfter(day, d) ? "opacity-40" : "opacity-100"}`}
            >
              <div
                className={
                  isSelectedDay
                    ? `text-gray-600 dark:text-gray-100 text-lg`
                    : "text-gray-400 text-sm"
                }
              >
                {format(day, "EE")}
              </div>

              <div
                className={
                  isSelectedDay
                    ? "text-4xl font-extrabold text-gray-800 dark:text-white scale-125 transition-all duration-200"
                    : `text-xl ${
                        isToday
                          ? "text-gray-800 dark:text-gray-300 font-bold"
                          : "text-gray-600 dark:text-gray-500"
                      }`
                }
              >
                {format(day, "d")}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
