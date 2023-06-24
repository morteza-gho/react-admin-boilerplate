import { Form, Select } from "antd";
import { FC, ReactNode } from "react";
import { HiOutlineX } from "react-icons/hi";
import FormItemLabel from "./partials/FormItemLabel";
import { FormItemPropTypes, ISelectItem } from "./types";
import React from "react";

interface PropTypes extends FormItemPropTypes {
  options?: any // select options
  fieldNames?: ISelectItem // when need to change label and value in options for example: server returned an array with {id, title}
  showSearch?: boolean // show search icon in select
  allowClear?: boolean // show clear item in select
  mode?: 'multiple' | 'tags'
  defaultValue?: string | number
  children?: ReactNode
  loading?: boolean
  dark?:boolean
  showArrow?:boolean
  onPopupScroll?: (props: any) => void
  onSearch?: (term: string) => void
  onChange?: (val) => void,
  onRemoveItem?: (val) => void,
  onClear?: () => void,
}

const DsFormSelect: FC<PropTypes> = ({
  name,
  size = 'md',
  label = '',
  placeholder = 'Select ' + label,
  helpText,
  helpTextClass,
  onHelpTextClick,
  helpIcon,
  helpIconText,
  helpIconClass,
  onHelpIconClick,
  disabled,
  options,
  fieldNames = { label: 'label', value: 'value' },
  showSearch = false,
  allowClear = false,
  mode = undefined,
  defaultValue,
  rules,
  children,
  loading = false,
  dark = false,
  showArrow = true,
  onPopupScroll,
  onSearch,
  onChange,
  onRemoveItem,
  onClear,
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
          <Select
            options={options}
            id={name.toString()}
            className="form-input"
            disabled={disabled}
            placeholder={placeholder}
            showSearch={showSearch}
            allowClear={allowClear || mode === 'multiple'}
            clearIcon={<HiOutlineX />}
            showArrow={showArrow}
            defaultValue={defaultValue}
            mode={mode}
            maxTagCount="responsive"
            popupClassName={`${mode ? 'multiple-select' : ''} ${dark ? 'select-dark' : ''}`}
            loading={loading}
            fieldNames={fieldNames}
            optionFilterProp="children"
            filterOption={(input, option) =>
              (option?.[fieldNames.label] ?? '').toLowerCase().includes(input.toLowerCase())
            }
            onChange={onChange ? (value) => onChange(value) : undefined}
            onSearch={onSearch ? (term) => onSearch(term) : undefined}
            onPopupScroll={onPopupScroll ? (props) => onPopupScroll(props) : undefined}
            onDeselect={(value) =>  onRemoveItem ? onRemoveItem(value) : undefined }
            onClear={() => onClear ? onClear : undefined }
          >
            {children && !options ? children : null}
          </Select> 
        </Form.Item>

      </div> {/* end of .input-wrapper */}

    </div > /* end of .form-item */
  )
};

export default DsFormSelect;