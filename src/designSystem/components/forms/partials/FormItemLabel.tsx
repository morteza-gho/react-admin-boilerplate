import { Tooltip } from "antd";
import React from "react";
import { FC, ReactNode } from "react";
import { HiOutlineInformationCircle } from "react-icons/hi2";

interface PropTypes {
  text?: string | ReactNode
  helpText?: string | ReactNode
  helpTextClass?: string
  onHelpTextClick?: () => void
  helpIcon?: ReactNode
  helpIconText?: string | ReactNode
  helpIconClass?: string
  onHelpIconClick?: () => void
}

const FormItemLabel: FC<PropTypes> = ({ text,
  helpText,
  helpTextClass,
  onHelpTextClick,
  helpIcon,
  helpIconText,
  helpIconClass,
  onHelpIconClick
}) => {
  return (
    <label className={`form-label ${text ? '' : 'mb-0'}`}>
      <span className="text">{text}</span>

      {
        /* 
        - this is for text that in front of label
        - you can click on text and do something in parent
      */
        helpText ?
          <div
            className={`another-text ${helpTextClass ? helpTextClass : 'text-blue-main'} ${onHelpTextClick ? 'cursor-pointer' : ''}`}
            onClick={onHelpTextClick}>
            {helpText}
          </div>
          : null
      }

      {
        /* 
        - this is for help icon that in front of label,
        - you can click on icon and do something in parent 
      */
        helpIcon || helpIconText ?
          <div className={`another-text ${onHelpIconClick ? 'cursor-pointer' : ''}`} onClick={onHelpIconClick}>
            <Tooltip placement="top" title={helpIconText}>
              <span className={`icon ${helpIconClass ? helpIconClass : 'text-blue-main'}`}>{helpIcon ? helpIcon : <HiOutlineInformationCircle />}</span>
            </Tooltip>
          </div>
          : null
      }
    </label>
  )
};

export default FormItemLabel