import React, { FC, ReactNode } from "react";

interface IPropTypes {
  type: 'success' | 'info' | 'warning' | 'danger' | 'secondary' | 'light',
  children: ReactNode,
  className?: string,
}

const DsAlert: FC<IPropTypes> = ({ type, children, className }) => {
  return (
    <div className={`ds-alert alert-${type} ${className ? className : ''}`}>{children}</div>
  )
};

export default DsAlert;