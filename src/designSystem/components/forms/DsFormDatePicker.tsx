import React, { FC } from "react";
import { DatePicker, Form } from "antd";
import FormItemLabel from "./partials/FormItemLabel";
import { FormItemPropTypes } from "./types";

interface PropTypes extends FormItemPropTypes {
  picker?: 'date' | 'week' | 'month' | 'quarter' | 'year' 
  onChange?: (date, dateString) => void
}

const DsFormDatePicker: FC<PropTypes> = ({
  name,
  size = 'md',
  label = '',
  placeholder = 'Select a date',
  helpText,
  helpTextClass,
  onHelpTextClick,
  helpIcon,
  helpIconText,
  helpIconClass,
  onHelpIconClick,
  disabled,
  rules,
  picker = 'date',
  onChange,
  className = '',
}) => {

  return (
    <div className={`form-item form-item-${size} ${className}`}>

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

        <Form.Item name={name} label="" rules={rules}>
          <DatePicker
            id={name}
            name={name}
            className="form-input"
            placeholder={placeholder}
            disabled={disabled}
            picker={picker}
            onChange={onChange}
          />
        </Form.Item>

      </div> {/* end of .input-wrapper */}

    </div > /* end of .form-item */
  )
};

export default DsFormDatePicker;