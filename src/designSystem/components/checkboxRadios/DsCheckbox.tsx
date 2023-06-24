import { Checkbox, Form, RadioChangeEvent } from "antd";
import { CheckboxChangeEvent } from "antd/lib/checkbox";
import React from "react";
import { FC, ReactNode } from "react";

interface IPropTypes {
  color?: 'black' | 'blue' | 'yellow',
  name: string,
  text?: string | ReactNode,
  size?: 'lg' | 'xl',
  circle?: boolean, // just for checkboxes
  bordered?: boolean,
  disabled?: boolean,
  checked: boolean,
  rules?: any,
  wrapperClassName?: string,
  className?: string,
  onChange?: (value: string | number | boolean, event: CheckboxChangeEvent | RadioChangeEvent) => void, // change checkboxes or radios and send value to parent
}

const DsCheckbox: FC<IPropTypes> = ({
  color = 'black',
  name,
  text,
  size,
  circle = false,
  bordered = false,
  disabled = false,
  checked = false,
  rules,
  wrapperClassName = '',
  className = '',
  onChange
}) => {
  return (
    /* 
      to validate checkboxes you need to write rukes as below
      rules={[{
          required: true,
          transform: value => (value || undefined),
          type: 'boolean',
          message: 'Please agree the terms and conditions.',
        }]}
     */
    <Form.Item name={name} label="" className={`form-item form-item-${size ? size : 'md'} ${wrapperClassName}`} valuePropName="checked" rules={rules}>
      <div className={`custom-checkbox ${bordered ? 'checkbox-bordered' : ''} ${className}`}>
        <Checkbox
          className={`checkbox-${color} ${size ? `checkbox-${size}` : ''} ${circle ? 'checkbox-circle' : ''}`}
          disabled={disabled}
          checked={checked}
          onChange={onChange ? (e: CheckboxChangeEvent) => onChange(e.target.checked, e) : undefined}
        >
          {text}
        </Checkbox>
      </div>
    </Form.Item>
  )
};

export default DsCheckbox;