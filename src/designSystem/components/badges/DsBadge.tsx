import React, { FC } from "react";

interface IPropTypes {
  type:
  /* main colors */     'default' | 'dark' | 'light' | 'green' | 'red' | 'yellow' | 'orange' | 'purple' |
  /* light colors */    'default-light' | 'dark-light' | 'green-light' | 'red-light' | 'yellow-light' | 'orange-light' | 'purple-light'
  text: string,
  innerContent?: string | number,
  innerCorner?: boolean,
  className?: string,
  handleClick?: () => void
}

const DsBadge: FC<IPropTypes> = ({ type, text, innerContent, innerCorner = false, className, handleClick }) => {
  return (
    <div className={`badge badge-${type} ${className ? className : ''}`} onClick={handleClick}>
      <span className="badge-content">
        {text}
        {innerContent ? <span className={`inner-badge ${innerCorner ? 'corner' : ''}`}>{innerContent}</span> : null}
      </span>
    </div>
  )
};

export default DsBadge;