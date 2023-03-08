export type Habit = {
  id?: number;
  order_index: number;
  title: string;
  desc: string;
  color: string;
  freq: number;
  useReminder: boolean;
  reminderTime?: string | null;
  reminderText?: string;
};
