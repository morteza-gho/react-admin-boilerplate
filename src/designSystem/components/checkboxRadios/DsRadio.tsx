import { Form, Radio, RadioChangeEvent } from "antd";
import { CheckboxChangeEvent } from "antd/lib/checkbox";
import { FC, ReactNode } from "react";
import { IRadioItem } from "./type";
import FormItemLabel from "../forms/partials/FormItemLabel";
import React from "react";

interface IPropTypes {
  color?: 'black' | 'blue' | 'yellow',
  name: string,
  size?: 'lg' | 'xl',
  circle?: boolean, // just for checkboxes
  items?: IRadioItem[], // this is for radios
  direction?: 'vertical' | 'horizontal', // this is for radios
  label?: string, // just for radio - a label for radio group
  labelSize?: 'sm' | 'md' | 'lg', // just for radio - label size in radio group - base in `form-input` size
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

const DsRadio: FC<IPropTypes> = ({
  color = 'black',
  name,
  size,
  items,
  direction = 'horizontal',
  label,
  labelSize = 'md',
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
    <div className={`form-item form-item-${labelSize ? labelSize : 'md'} ${wrapperClassName}`}>
      {
        label &&
        <FormItemLabel
          text={label}
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
            items?.length && items?.map((item, index) => {
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
  )
};

export default DsRadio;