interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  handleClose: () => void;
}

export function Modal({ isOpen, handleClose, children }: ModalProps) {
  return (
    <Modal isOpen={isOpen} handleClose={handleClose}>
      {children}
    </Modal>
  );
}
