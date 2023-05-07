import { Checkbox, Form, Radio, RadioChangeEvent, Space, Tooltip } from "antd";
import FormItemLabel from "antd/es/form/FormItemLabel";
import { CheckboxChangeEvent } from "antd/lib/checkbox";
import React from "react";
import { FC, ReactNode } from "react";
import { HiOutlineInformationCircle } from "react-icons/hi2";
import { IRadioItem } from "./type";

interface IPropTypes {
  type: 'checkbox' | 'radio',
  color?: 'black' | 'blue' | 'yellow',
  name: string,
  text?: string | ReactNode,
  size?: 'lg' | 'xl',
  circle?: boolean, // just for checkboxes
  radioItems?: IRadioItem[], // this is for radios
  direction?: 'vertical' | 'horizontal', // this is for radios
  radioLabel?: string, // just for radio - a label for radio group
  radioLabelSize?: 'sm' | 'md' | 'lg', // just for radio - label size in radio group - base in `form-input` size
  bordered?: boolean,
  separated?: boolean, // just for radios
  separatedPosition?: 'right' | 'left', // just for radios
  disabled?: boolean,
  rules?: any,
  wrapperClassName?: string,
  className?: string,
  onChange?: (value: string | number | boolean, event: CheckboxChangeEvent | RadioChangeEvent) => void, // change checkboxes or radios and send value to parent
  helpIcon?: ReactNode
  helpIconText?: string | ReactNode
  helpIconClass?: string
  onHelpIconClick?: () => void
}

const DsCheckboxRadio: FC<IPropTypes> = ({
  type,
  color = 'black',
  name,
  text,
  size,
  circle = false,
  radioItems,
  direction = 'horizontal',
  radioLabel,
  radioLabelSize = 'md',
  bordered = false,
  separated = false,
  separatedPosition = 'right',
  disabled = false,
  rules,
  wrapperClassName = '',
  className = '',
  onChange,
  helpIcon,
  helpIconText,
  helpIconClass,
  onHelpIconClick
}) => {
  return (
    <>
      {
        /* checckboxes */
        type === 'checkbox' ?

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
                onChange={onChange ? (e: CheckboxChangeEvent) => onChange(e.target.checked, e) : undefined}
              >
                {text}
              </Checkbox>
            </div>
          </Form.Item>
          :
          /* radios */
          <div className={`form-item form-item-${radioLabelSize ? radioLabelSize : 'md'} ${wrapperClassName}`}>
            {
              radioLabel &&
              <FormItemLabel
                text={radioLabel}
                helpIcon={helpIcon}
                helpIconText={helpIconText}
                helpIconClass={helpIconClass}
                onHelpIconClick={onHelpIconClick}
              />
            }
            <Form.Item name={name} label="" rules={rules}>
              <Radio.Group
                name={name}
                className={`flex ${direction === 'horizontal' ? 'flex-row' : 'flex-col'} ${separated ? 'w-full' : ''} ${bordered ? 'gap-x-4' : ''} ${className}`}
                disabled={disabled}
                onChange={onChange ? (e: RadioChangeEvent) => onChange(e.target.value, e) : undefined}
              >
                {
                  radioItems?.length && radioItems?.map((item, index) => {
                    return (
                      <div
                        key={item.value + '-' + index}
                        className={`custom-radio ${size ? `radio-${size}` : ''} ${bordered ? `radio-bordered` : ''} ${separated ? `radio-separated separated-${separatedPosition}` : ''} ${item.className ? item.className : ''}`}
                      >
                        <Radio
                          className={`radio-${color} ${size ? `radio-${size}` : ''}`}
                          value={item.value}
                          disabled={item.disabled}>
                          {item.text}
                        </Radio>
                      </div>
                    )
                  })
                }
              </Radio.Group>
            </Form.Item>
          </div>
      }
    </>

  )
};

export default DsCheckboxRadio;