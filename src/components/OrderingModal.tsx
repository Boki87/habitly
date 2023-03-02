import { useStore } from "./Store";
import Modal from "./Modal";
export default function OrderingModal() {
  const { setShowOrdering } = useStore();
  return (
    <Modal onClose={() => setShowOrdering(false)}>
      <div>Reorder your habits</div>
    </Modal>
  );
}
