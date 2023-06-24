import React from "react"
import { Form, Input } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import { ChangeEvent, FC, ReactNode } from 'react';
import FormItemLabel from './partials/FormItemLabel';
import { FormItemPropTypes } from './types';

interface PropTypes extends FormItemPropTypes {
  type?: 'text' | 'number' | 'search' | 'tel' | 'email' | 'url' | 'password';
  stickIcon?: ReactNode;
  stickIconPosition?: 'left' | 'right';
  textarea?: boolean;
  textareaRows?: number;
  autoSize?: boolean | { minRows: number; maxRows: number };
  maxLength?: number;
  onChange?: (val, e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  defaultValue?: string;
  withoutForm?: boolean;
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
  bellowHelpText,
  bellowHelpTextClass,
  onBellowHelpTextClick,
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
  bordered = true,
  textarea,
  textareaRows,
  autoSize = false,
  maxLength,
  rules,
  onChange,
  className = '',
  inputClassName = '',
  defaultValue,
  withoutForm = false,
}) => {
  const textArea = (
    <TextArea
      rows={textareaRows}
      autoSize={autoSize}
      name={name.toString()}
      id={name.toString()}
      className={`form-input ${inputClassName}`}
      disabled={disabled}
      bordered={bordered}
      maxLength={maxLength}
      placeholder={placeholder}
      defaultValue={defaultValue}
      onChange={onChange ? (e) => onChange(e?.target?.value, e) : undefined}
    />
  );
  const input = (
    <Input
      type={type}
      name={name.toString()}
      id={name.toString()}
      className={`form-input ${inputClassName}`}
      disabled={disabled}
      bordered={bordered}
      maxLength={maxLength}
      placeholder={placeholder}
      defaultValue={defaultValue}
      onChange={onChange ? (e) => onChange(e?.target?.value, e) : undefined}
    />
  );
  return (
    <div
      className={`form-item form-item-${size} ${icons ? `form-item-has-icon form-item-has-icon-${iconsPosition}` : ''} ${stickIcon ? `form-item-stick-icon form-item-stick-icon-${stickIconPosition}` : ''} ${className}`}
    >
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
        {
          // simple inputs
          textarea ? (
            withoutForm ? (
              textArea
            ) : (
              <Form.Item name={name} label="" rules={rules}>
                {textArea}
              </Form.Item>
            )
          ) : withoutForm ? (
            input
          ) : (
            <Form.Item name={name} label="" rules={rules}>
              {input}
            </Form.Item>
          )
        }

        {
          // this is for text that bellow of inputs
          bellowHelpText && (
            <div
              className={`mt-1 italic font-medium ${bellowHelpTextClass ? bellowHelpTextClass : 'text-gray-main'} ${
                onBellowHelpTextClick ? 'cursor-pointer' : ''
              }`}
              onClick={onHelpTextClick}
            >
              {bellowHelpText}
            </div>
          )
        }

        {/* this is for icons that placed in input */}
        {icons ? <div className={`icons-wrapper ${iconsClass ? iconsClass : ''}`}>{icons}</div> : null}

        {/* this is for stick icon */}
        {stickIcon ? (
          <div className="stick-icon-wrapper">
            {' '}
            <span className="stick-icon">{stickIcon}</span>{' '}
          </div>
        ) : null}
      </div>{' '}
      {/* end of .input-wrapper */}
    </div> /* end of .form-item */
  );
};

export default DsFormInput;
