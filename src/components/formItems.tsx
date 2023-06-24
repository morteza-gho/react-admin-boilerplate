import { Form } from "antd";
import React, { FC } from "react";
import { HiCursorArrowRays, HiEyeSlash, HiHandRaised, HiMagnifyingGlass, HiMicrophone, HiOutlineEnvelope } from "react-icons/hi2";
import DsForm from "../designSystem/components/forms/DsForm";
import DsFormInput from "../designSystem/components/forms/DsFormInput";
import DsFormSelect from "../designSystem/components/forms/DsFormSelect";
import DsFormDatePicker from './../designSystem/components/forms/DsFormDatePicker';

const FormItems: FC = () => {

  const [form] = Form.useForm();

  const EyeHandIcon = () => {
    return (
      <>
        <HiEyeSlash className="icon" onClick={() => console.log('you clicked on eye icon')} />
        <HiHandRaised className="icon" onClick={() => console.log('you clicked on hand icon')} />
      </>
    )
  };

  const helpTextClick = () => {
    console.log('you clicked on a help text')
  };
  const helpIconClick = () => {
    console.log('you clicked on a help icon')
  };
  const onInputChange = (value) => {
    console.log(value)
  };

  const names = [
    {
      value: 'opt1',
      label: 'Option 1',
    },
    {
      value: 'opt2',
      label: 'Option 2',
    },
    {
      value: 'opt3',
      label: 'Option 3',
    },
    {
      value: 'opt4',
      label: 'Option 4',
    },
    {
      value: 'opt5',
      label: 'Option 5',
    },
    {
      value: 'opt6',
      label: 'Option 6',
    }
  ];

  const countries = [
    {
      value: '+44',
      label: '+44 England',
    },
    {
      value: '+98',
      label: '+98 Iran',
    },
  ];

  /* select onChange | return string for simple and array for multiple */
  const onSelectChange = (value) => {
    console.log(value)
  }

  return (
    <section id="ds-buttons" className="ds-section">
      <h2 className="ds-section-title">Form Inputs</h2>

      <div className="ds-section-content">

        <div className="ds-section-vaients md:w-1/2">

          <DsForm form={form} onSubmit={() => { }}>

            <DsFormInput type="text" name="input1" size="lg" label="simple large input" />
            <DsFormInput type="text" name="input2" size="md" label="simple medium input" />
            <DsFormInput type="text" name="input3" size="sm" label="simple small input" />

            <DsFormInput type="text" name="input4" size="lg" label="input with help text" helpText="this is a help text" />
            <DsFormInput type="text" name="input5" size="md" label="input with help text" helpText="help text with different color" helpTextClass="text-green-main" />
            <DsFormInput type="text" name="input6" size="md" label="input with clicable help text" helpText="you can click me" helpTextClass="text-orange-main cursor-pointer" onHelpTextClick={helpTextClick} />

            <DsFormInput type="text" name="input7" size="lg" label="input with right icons" icons={<EyeHandIcon />} />
            <DsFormInput type="text" name="input8" size="md" label="input with left icon" icons={<HiMagnifyingGlass />} iconsPosition="left" />

            <DsFormInput type="text" name="input9" size="lg" label="input with help icon" helpIconText="this is a text for help icon" />
            <DsFormInput type="text" name="input10" size="md" label="input with custom help icon" helpIcon={<HiMicrophone />} helpIconText="customize the icon and it's class" helpIconClass="text-gray-main hover:text-red-main" />
            <DsFormInput type="text" name="input11" size="md" label="input with clicable help icon" helpIcon={<HiCursorArrowRays />} helpIconText="you can click me" helpIconClass="text-gray-main hover:text-red-main" onHelpIconClick={helpIconClick} />

            <DsFormInput type="text" name="input12" size="md" label="input with onChange event" onChange={(value) => onInputChange(value)} />

            <DsFormInput type="text" name="input13" size="md" label="disabled input" disabled />

            <DsFormInput type="text" name="input14" size="lg" label="large input with stick icon" stickIcon={<HiOutlineEnvelope />} />
            <DsFormInput type="text" name="input15" size="md" label="medium input with stick icon right" stickIcon={<HiOutlineEnvelope />} stickIconPosition="right" />

            <DsFormInput textarea textareaRows={4} name="input16" size="lg" label="textarea" placeholder="this is a sample of textarea" />
            <DsFormInput textarea textareaRows={2} autoSize={{minRows: 2, maxRows: 4}} name="autosize" size="lg" label="Auto size textarea" placeholder="auto size textara, minRows: 2, maxRows: 4" />
            <DsFormInput textarea textareaRows={3} name="input17" size="md" label="textarea" placeholder="textarea can has all elements - for example: help icon" helpIcon={<HiCursorArrowRays />} helpIconText="you can click me" helpIconClass="text-gray-main hover:text-red-main" onHelpIconClick={helpIconClick} />

            <DsFormSelect options={names} allowClear name="input18" size="lg" label="Large AntDesign Select" onChange={(value) => onSelectChange(value)} />
            <DsFormSelect options={names} showSearch name="input19" size="md" label="Large AntDesign Select wih search" />
            <DsFormSelect options={names} mode="multiple" name="input20" size="md" label="multiple AntDesign Select" onChange={(value) => onSelectChange(value)} />

            <div className="attached-form-items grid sm:grid-cols-3">
              <DsFormSelect options={names} name="input21" size="md" label="select 1" />
              <DsFormSelect options={names} name="input22" size="md" label="select 2" />
              <DsFormSelect options={names} name="input23" size="md" label="select 3" />
            </div>

            <div className="attached-form-items grid sm:grid-cols-3">
              <DsFormInput type="text" name="input24" size="md" label="input 1" />
              <DsFormInput type="text" name="input25" size="md" label="input 2" />
              <DsFormInput type="text" name="input26" size="md" label="input 3" />
            </div>

            <>
              <div className="form-item form-item-md mb-0">
                <label className="form-label"><span className="text">enter mobile number</span></label>
              </div>
              <div className="attached-form-items flex">
                <DsFormSelect options={countries} defaultValue={countries[0].value} name="input27" size="md" placeholder="select code" className="w-1/3" />
                <DsFormInput type="text" name="input18" size="md" placeholder="enter number" className="w-full" />
              </div>
            </>

            <DsFormDatePicker name="input28" size="md" label="select date" />

          </DsForm>

        </div>

      </div>
    </section>
  )
};
export default FormItems;