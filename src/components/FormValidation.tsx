import React, { FC, useState } from "react";
import { Form } from "antd";
import DsButton from "../designSystem/components/buttons/DsButton";
import DsCheckboxRadio from "../designSystem/components/checkboxRadios/DsCheckboxRadio";
import DsForm from "../designSystem/components/forms/DsForm";
import DsFormInput from "../designSystem/components/forms/DsFormInput";
import DsFormSelect from "../designSystem/components/forms/DsFormSelect";
import { ICustomError, IFieldData } from "../designSystem/components/forms/types";
import { IRadioItem } from "../designSystem/components/checkboxRadios/type";


interface FormFieldTypes {
  name: string,
  mobile: string,
  email: string,
  address: string,
  job: string | null,
  sports: string[],
  gender: 'male' | 'female' | 'others',
  acceptRules: boolean
}

const jobs = [
  {
    value: '1',
    label: 'Front-End Developer'
  },
  {
    value: '2',
    label: 'Back-End Developer'
  },
  {
    value: '3',
    label: 'UI/UX Designer'
  },
  {
    value: '4',
    label: 'Scrum Master'
  },
  {
    value: 'teacher',
    label: 'Teacher - select this to show custom error on submit'
  }
];

const sports = [
  {
    value: 's1',
    label: 'Football'
  },
  {
    value: 's2',
    label: 'volleyball'
  },
  {
    value: 's3',
    label: 'Basketball'
  },
  {
    value: 's4',
    label: 'swimming'
  }
];

const genders: IRadioItem[] = [
  { text: 'Male', value: 'male', className: 'flex-1' },
  { text: 'Female', value: 'female', className: 'flex-1' },
  { text: 'Others', value: 'others', className: 'flex-1' },
];

const FormValidation: FC = () => {

  const [form] = Form.useForm<FormFieldTypes>(); // you will need this to handle form action, like: reset or fillout
  const [teacherError, setTeacherError] = useState<ICustomError>(); // this is a custom error when user select teacher as job

  // submit form and get form data
  const onSubmitForm = (formData: FormFieldTypes) => {

    if (formData.job === 'teacher') {
      // show custom error here
      setTeacherError({ name: 'job', error: 'you can not select teacher' })
    } else {
      // submit form here
      console.log(formData);
    }

  };

  // reset form by this way
  const resetForm = () => {
    form.resetFields();
  };

  // fillout form fields by this way
  const fillForm = () => {
    form.setFieldsValue({
      name: 'Morteza QorbanAlizade',
      mobile: '09134307521',
      email: 'gho.morteza@gmail.com',
      address: 'my address',
      job: '1',
      sports: ['s1', 's2'],
      gender: 'male'
    });
  };

  // when a field was changed, this method calls
  const onChange = (fields: IFieldData[]) => {
    /* console.log(fields) */
  }

  return (
    <section id="ds-form-validations" className="ds-section">
      <h2 className="ds-section-title">Form Validations</h2>

      <div className="ds-section-content">

        <div className="ds-section-vaients md:w-1/2">

          <DsForm<FormFieldTypes>
            form={form}
            initialValues={{
              name: 'Morteza QorbanAlizade',
              mobile: '',
              email: '',
              address: '',
              job: null,
              sports: [],
              gender: 'male',
              acceptRules: false
            }}
            onSubmit={(formData: FormFieldTypes) => onSubmitForm(formData)}
            onChangeField={(field) => onChange(field)}
            customError={teacherError}
          >
            <DsFormInput
              type="text"
              size="md"
              label="Name"
              name="name"
              placeholder="Enter your name"
              rules={[{ required: true }]}
            />
            <DsFormInput
              type="number"
              size="md"
              label="Mobile"
              name="mobile"
              placeholder="Enter your mobile number"
              rules={[{ required: true, len: 11 }]}
            />
            <DsFormInput
              type="email"
              size="md"
              label="Email address"
              name="email"
              placeholder="Enter Email Address"
              rules={[{ required: true, message: 'required - this is custom required error' }, { type: 'email', message: 'not valid - this is custom email error' }]}
            />
            <DsFormInput
              textarea
              textareaRows={3}
              name="address"
              size="md"
              label="Address"
              placeholder="Enter your address here..."
              helpText="minimun 5 and maximum 15 characters"
              helpTextClass="text-gray-main"
              maxLength={15}
              rules={[{ required: true, min: 5, max: 15 }]}
            />

            <DsFormSelect
              options={jobs}
              allowClear
              name="job"
              size="md"
              label="select your job"
              rules={[{ required: true }]}
            />

            <DsFormSelect
              options={sports}
              mode="multiple"
              name="sports"
              size="md"
              label="select your favorite sports"
              helpText="minimun 2 and maximum 3 items"
              helpTextClass="text-gray-main"
              rules={[{ required: true, type: "array", min: 2, max: 3 }]}
            />

            <DsCheckboxRadio
              type="radio"
              name="gender"
              radioItems={genders}
              bordered
              color="blue"
              size="lg"
              radioLabel="select gender"
              radioLabelSize="md"
              className="w-full"
              rules={[{ requred: true }]}
            />

            <DsCheckboxRadio
              type="checkbox"
              name="acceptRules"
              text="I agree the terms and conditions"
              color="blue"
              size="lg"
              rules={[{
                required: true,
                transform: value => (value || undefined),
                type: 'boolean',
                message: 'Please agree the terms and conditions.',
              }]}
            />

            <div className="flex gap-x-2">
              <DsButton type="green" htmlType="submit" text="Submit Form" />
              <DsButton type="default" htmlType="button" text="Fill Form" onClick={fillForm} />
              <DsButton type="dark" htmlType="button" text="Reset" onClick={resetForm} />
            </div>
          </DsForm>

        </div> {/* end of form validation */}

      </div> {/* .ds-section-content */}

    </section>
  )
};
export default FormValidation;