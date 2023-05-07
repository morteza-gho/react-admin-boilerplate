import { Modal } from "antd";
import { FC, ReactNode } from "react";
import { HiOutlineCheckBadge, HiOutlineExclamationTriangle, HiOutlineInformationCircle, HiOutlineShieldExclamation } from "react-icons/hi2";

interface IPropTypes {
  type: 'success' | 'danger' | 'warning' | 'info',
  open: boolean,
  title: string | ReactNode,
  children?: ReactNode,
  onClose: () => void,
  className?: string,
}

const DsAlertModal: FC<IPropTypes> = ({ type, open = false, title, children, onClose, className }) => {
  return (
    <Modal
      title={null}
      className={`custom-modal modal-sm modal-alert modal-alert-${type} ${className ? className : ''}`}
      centered
      open={open}
      onCancel={() => onClose()}
      footer={null}
      destroyOnClose={true}
    >
      <div className='modal-alert-content'>

        {type === 'success' ? <HiOutlineCheckBadge className='modal-alert-icon' /> : null}
        {type === 'danger' ? <HiOutlineShieldExclamation className='modal-alert-icon' /> : null}
        {type === 'warning' ? <HiOutlineExclamationTriangle className='modal-alert-icon' /> : null}
        {type === 'info' ? <HiOutlineInformationCircle className='modal-alert-icon' /> : null}

        <p className="modal-alert-title">{title}</p>

        {children ? <div className="modal-alert-body">{children}</div> : null}

      </div>
    </Modal>
  )
};

export default DsAlertModal;