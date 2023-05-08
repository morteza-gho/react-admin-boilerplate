import React, { FC, ReactNode } from "react";
import { Modal } from "antd";

interface IPropTypes {
  size: 'sm' | 'md' | 'lg'
  open: boolean
  title?: string | ReactNode
  children: ReactNode
  closable?: boolean
  onClose?: () => void
  className?: string
}

const DsModal: FC<IPropTypes> = ({ size = 'md', open = false, title, children, closable = true, onClose, className }) => {
  return (
    <Modal
      title={title ? title : null}
      className={`custom-modal modal-${size} ${className ? className : ''}`}
      centered
      open={open}
      closable={closable}
      onCancel={onClose ? () => onClose() : undefined}
      footer={null}
      destroyOnClose={true}
    >
      {children}
    </Modal>
  )
};

export default DsModal;