export interface ModalProps {
  openModal: boolean;
  setOpenModal: (openModal: boolean) => void;
  title: string;
  okButtonText: string;
  cancelButtonText?: string;
  onOk?: () => void;
  onCancel?: () => void;
}
