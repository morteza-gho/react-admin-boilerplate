import { Form, Input } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { FC, ReactNode } from "react";
import FormItemLabel from "./partials/FormItemLabel";
import { FormItemPropTypes } from "./types";

interface PropTypes extends FormItemPropTypes {
  type?: 'text' | 'number' | 'search' | 'tel' | 'email' | 'url' | 'password'
  stickIcon?: ReactNode
  stickIconPosition?: 'left' | 'right'
  textarea?: boolean,
  textareaRows?: number
  maxLength?: number
  onChange?: (val: any) => void
}

const DsFormInput: FC<PropTypes> = ({
  type = 'text',
  name,
  size = 'md',
  label = '',
  placeholder = 'Enter ' + label,
  helpText,
  helpTextClass,
  onHelpTextClick,
  icons,
  iconsClass,
  iconsPosition = 'right',
  helpIcon,
  helpIconText,
  helpIconClass,
  onHelpIconClick,
  stickIcon,
  stickIconPosition = 'left',
  disabled,
  textarea,
  textareaRows,
  maxLength,
  rules,
  onChange,
  className = '',
}) => {

  return (
    <div className={`form-item form-item-${size} ${icons ? `form-item-has-icon form-item-has-icon-${iconsPosition}` : ''} ${stickIcon ? `form-item-stick-icon form-item-stick-icon-${stickIconPosition}` : ''} ${className}`}>

      <FormItemLabel
        text={label}
        helpText={helpText}
        helpTextClass={helpTextClass}
        onHelpTextClick={onHelpTextClick}
        helpIcon={helpIcon}
        helpIconText={helpIconText}
        helpIconClass={helpIconClass}
        onHelpIconClick={onHelpIconClick}
      />

      <div className="input-wrapper">

        { // simple inputs
          textarea ?
            <Form.Item name={name} label="" rules={rules}>
              <TextArea
                rows={textareaRows}
                name={name}
                id={name}
                className="form-input"
                disabled={disabled}
                maxLength={maxLength}
                placeholder={placeholder}
                onChange={onChange ? (e) => onChange(e?.target?.value) : undefined}
              />
            </Form.Item>
            :
            <Form.Item name={name} label="" rules={rules}>
              <Input
                type={type}
                name={name}
                id={name}
                className="form-input"
                disabled={disabled}
                maxLength={maxLength}
                placeholder={placeholder}
                onChange={onChange ? (e) => onChange(e?.target?.value) : undefined}
              />
            </Form.Item>
        }

        {/* this is for icons that placed in input */}
        {icons ? <div className={`icons-wrapper ${iconsClass ? iconsClass : ''}`}>{icons}</div> : null}

        {/* this is for stick icon */}
        {stickIcon ? <div className="stick-icon-wrapper"> <span className="stick-icon">{stickIcon}</span> </div> : null}

      </div> {/* end of .input-wrapper */}

    </div > /* end of .form-item */
  )
};

export default DsFormInput;