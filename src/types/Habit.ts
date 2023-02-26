export type Habit = {
  id?: number;
  title: string;
  desc: string;
  color: string;
  freq: number;
  useReminder: boolean;
  reminderTime?: string | null;
  reminderText?: string;
};
