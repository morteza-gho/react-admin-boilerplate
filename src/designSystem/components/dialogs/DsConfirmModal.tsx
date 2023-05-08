import React, { FC, ReactNode } from "react";
import { Modal } from "antd";
import { HiOutlineExclamationTriangle, HiOutlineShieldExclamation } from "react-icons/hi2";
import DsButton from "../buttons/DsButton";

interface PropTypes {
  type?: 'warning' | 'danger'
  open: boolean
  title: string | ReactNode
  onApprove: () => void
  onReject: () => void
  className?: string
  children?: ReactNode
}

const DsConfirmModal: FC<PropTypes> = ({ type = 'warning', open = false, title, onApprove, onReject, className, children }) => {
  return (
    <Modal
      title={null}
      className={`custom-modal modal-sm modal-alert modal-alert-${type} modal-confirm ${className ? className : ''}`}
      centered
      open={open}
      footer={null}
      closable={false}
      destroyOnClose={true}
    >
      <div className='modal-alert-content'>

        {type === 'danger' ? <HiOutlineShieldExclamation className='modal-alert-icon' /> : null}
        {type === 'warning' ? <HiOutlineExclamationTriangle className='modal-alert-icon' /> : null}

        <p className="modal-alert-title">{title}</p>

        {children ? children : null}

        <div className="modal-alert-buttons">
          <DsButton type="red-light" size="lg" fullwidth text="No, Reject" onClick={() => onReject()} />
          <DsButton type="green-light" size="lg" fullwidth text="Yes, Approve" onClick={() => onApprove()} />
        </div>

      </div>
    </Modal>
  )
};

export default DsConfirmModal;