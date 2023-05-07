import { FC, ReactNode } from "react";

interface IPropTypes {
  type: 'white' | 'blue-light' | 'red-light' | 'gray-light' | 'gray-lighter',
  children: ReactNode,
  className?: string,
}

const DsBox: FC<IPropTypes> = ({ type, children, className }) => {
  return (
    <div className={`box box-${type} ${className ? className : ''}`}>{children}</div>
  )
};

export default DsBox;