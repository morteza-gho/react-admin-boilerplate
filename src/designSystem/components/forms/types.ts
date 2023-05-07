import { Rule } from "antd/lib/form";
import { ReactNode } from "react";

export interface FormItemPropTypes {
  name: string,
  size?: 'sm' | 'md' | 'lg',
  label?: string | ReactNode,
  placeholder?: string,
  helpText?: string,
  helpTextClass?: string,
  onHelpTextClick?: () => void,
  icons?: ReactNode,
  iconsClass?: string,
  iconsPosition?: 'right' | 'left',
  helpIcon?: ReactNode,
  helpIconText?: string | ReactNode,
  helpIconClass?: string,
  onHelpIconClick?: () => void,
  disabled?: boolean,
  rules?: Rule[], // form validation rules here
  className?: string,
}

export interface IFieldData {
  name: string | number | (string | number)[];
  value?: any;
  touched?: boolean;
  validating?: boolean;
  errors?: string[];
}

export interface IErrorField {
  errors: string[],
  name: string[],
  warnings: string[]
}

export interface IValidationFormError {
  errorField: IErrorField[],
  outOfDate: boolean,
  values: object
}
export interface ICustomError {
  name: string,
  error: string
}
export interface ISelectItem {
  label: string,
  value?: string,
  options?: any
}