import { Modal } from 'antd';

interface ModalProps {
  children: any;
  open: boolean;
  onClose: () => void;
}
const ModalComponent = (props: ModalProps) => {
  const { children, open, onClose } = props;
  return (
    <Modal centered visible={open} closable onCancel={onClose} footer={null}>
      {children}
    </Modal>
  );
};

export default ModalComponent;
