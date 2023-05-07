import { Form, FormInstance } from "antd";
import { PropsWithChildren, ReactElement, ReactNode, useEffect } from "react";
import { ICustomError, IFieldData, IValidationFormError } from "./types";

/* T: orm fields types that come from parent */
interface IPropTypes<T> {
  form: FormInstance,
  initialValues?: T,
  onSubmit: (formData: any) => void, // on submit form
  onFaild?: (errors: IValidationFormError[]) => void, // when error accured
  onChangeField?: (fileds: IFieldData[], allFields: IFieldData[]) => void, // when a field was changed, this method calls
  customError?: ICustomError,
  children: ReactNode, // all inputs and it's children
  className?: string,
}

/* custom form validations errors */
const validateMessages = {
  required: 'this field is required',
  types: {
    email: 'email is not valid',
    number: 'just enter the number',
    url: 'url is not valid',
  },
  number: {
    range: 'must be between ${min} and ${max}',
  }
};

const DsForm: <T>(p: PropsWithChildren<IPropTypes<T>>) => ReactElement = ({
  form,
  initialValues,
  onSubmit,
  onFaild,
  onChangeField,
  customError,
  children,
  className = ''
}) => {

  const onFinish = (formData: any) => {
    onSubmit(formData); // send form data to parent
  }

  const onFinishFailed = (errors: any) => {
    console.error(errors)
    if (onFaild) {
      onFaild(errors); // send errors to parent
    }
  }

  const onFieldsChange = (fields: IFieldData[], allFields: IFieldData[]) => {
    if (onChangeField) {
      onChangeField(fields, allFields)
    }
  }

  useEffect(() => {
    /* when `customError` prop comes to this component, this `useEffect` will be fired and show custom error for field */
    if (customError) {
      form.setFields([{
        name: customError.name,
        errors: [customError.error]
      }]);
    }
  }, [customError])

  return (
    /* I have used ant design Form and it's validation */
    <Form
      form={form}
      initialValues={initialValues ? initialValues : undefined}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      onFieldsChange={(fields: IFieldData[], allFields: IFieldData[]) => onFieldsChange(fields, allFields)}
      validateMessages={validateMessages}
      validateTrigger='onChange' /* onChange | onBlur | onSubmit */
      className={`ds-form ${className}`}
      noValidate
      autoComplete="false"
    >
      {children}
    </Form>
  )
};

export default DsForm;