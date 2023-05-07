import React, { FC, ReactElement } from "react";
import DsSpinner from "../otherElements/DsSpinner";

interface IPropTypes {
  htmlType?: 'button' | 'submit' | 'reset'
  text?: string
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl'
  type:
  /* main colors */     'default' | 'alternative' | 'dark' | 'light' | 'green' | 'red' | 'yellow' | 'orange' | 'purple' |
  /* outline colors */  'outline-default' | 'outline-dark' | 'outline-green' | 'outline-red' | 'outline-yellow' | 'outline-orange' | 'outline-purple' |
  /* light colors */    'default-light' | 'dark-light' | 'green-light' | 'red-light' | 'yellow-light' | 'orange-light' | 'purple-light'
  pill?: boolean
  icon?: ReactElement
  rightIcon?: boolean
  justIcon?: boolean
  link?: boolean
  fullwidth?: boolean
  loading?: boolean
  disabled?: boolean
  tooltip?: string
  className?: string
  onClick?: () => void
};

const DsButton: FC<IPropTypes> = ({
  htmlType = 'button',
  text,
  size = 'base',
  type,
  pill = false,
  icon,
  rightIcon = false,
  justIcon = false,
  link = false,
  fullwidth = false,
  loading = false,
  disabled = false,
  tooltip,
  className,
  onClick
}) => {

  return (
    <button
      type={htmlType}
      className={`btn btn-${size} btn-${type} ${pill ? 'rounded-full' : 'rounded-md'} ${icon ? 'btn-has-icon' : ''} ${rightIcon && !loading ? 'right-icon' : ''} ${justIcon ? 'btn-just-icon' : ''} ${fullwidth ? 'btn-block' : ''} ${loading ? 'gap-x-2' : ''} ${link ? 'btn-link' : ''} ${className ? className : ''}`}
      disabled={disabled}
      title={tooltip}
      onClick={onClick}
    >
      {loading ? <DsSpinner /> : null} 
      {icon && !loading ? <span className="icon">{icon}</span> : null}
      {text}
    </button>
  )
};

export default DsButton;