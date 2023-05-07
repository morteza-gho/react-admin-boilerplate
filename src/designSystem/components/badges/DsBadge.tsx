import { FC } from "react";

interface IPropTypes {
  type: 'blue' | 'blue-light' | 'green' | 'green-light' | 'red' | 'orange' | 'gray' | 'gray-light' | 'black' | 'white',
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