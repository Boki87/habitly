import HabitForm from "./HabitForm";
import { useStore } from "./Store";
import Modal from "./Modal";
export default function HabitModal() {
  const { setShowHabitModal } = useStore();
  return (
    <Modal onClose={() => setShowHabitModal(false)}>
      <HabitForm />
    </Modal>
  );
}
