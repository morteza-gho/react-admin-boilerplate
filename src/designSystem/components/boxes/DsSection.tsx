import React, { FC, ReactNode } from "react";

interface IPropTypes {
  type: 'white' | 'gray-lightest' | 'transparent',
  children: ReactNode,
  className?: string,
}

const DsSection: FC<IPropTypes> = ({ type = 'white', children, className }) => {
  return (
    <section className={`bg-${type} p-6 md:p-8 xl:p-10 2xl:p-12 ${className ? className : ''}`}>{children}</section>
  )
};

export default DsSection;