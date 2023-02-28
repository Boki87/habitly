import Modal from "./Modal";
import { useStore } from "./Store";
export default function MainMenu() {
  const { setShowMainMenu } = useStore();
  return (
    <Modal isFull>
      <div onClick={() => setShowMainMenu(false)}>Menu</div>
    </Modal>
  );
}
