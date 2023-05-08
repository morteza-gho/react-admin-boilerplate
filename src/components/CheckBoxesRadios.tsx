import React, { FC } from "react";
import { Form } from "antd";
import { IRadioItem } from "../designSystem/components/checkboxRadios/type";
import DsForm from "../designSystem/components/forms/DsForm";
import DsCheckboxRadio from "../designSystem/components/checkboxRadios/DsCheckboxRadio";

const blueRadioItems: IRadioItem[] = [
  { text: 'Radio Blue 1', value: 'blue1' },
  { text: 'Radio Blue 2', value: 'blue2' },
  { text: 'Radio Blue 3', value: 'blue3' },
]
const yellowRadioItems: IRadioItem[] = [
  { text: 'Radio Yellow 1', value: 'yellow1' },
  { text: 'Radio Yellow 2', value: 'yellow2' },
  { text: 'Radio Yellow 3', value: 'yellow3' },
];
const disabledRadioItems: IRadioItem[] = [
  { text: 'Radio disabled 1', value: 'disabled1' },
  { text: 'Radio disabled 2', value: 'disabled2'},
  { text: 'Radio disabled 3', value: 'disabled3' },
];
const oneDisabledRadioItems: IRadioItem[] = [
  { text: 'Radio disable', value: 'oneDisabled1', disabled: true },
  { text: 'Radio enable', value: 'oneDisabled2', disabled: false },
  { text: 'Radio enable', value: 'oneDisabled3', disabled: false },
];
const largeRadioItems: IRadioItem[] = [
  { text: 'Radio Large 1', value: 'large1' },
  { text: 'Radio Large 2', value: 'large2' },
];
const separetedRadioItems: IRadioItem[] = [
  { text: 'Radio separated 1', value: 'separated1', className: 'mb-2' },
  { text: 'Radio separated 2', value: 'separated2', className: 'mb-2' },
];
const borderedRadioItems: IRadioItem[] = [
  { text: 'Radio bordered 1', value: 'bordered1' },
  { text: 'Radio bordered 2', value: 'bordered2' },
];

const CheckboxesRadios: FC = () => {

  const [form] = Form.useForm();

  const initialRadio = {
    blueRadio: 'blue1',
    yellowRadio: 'yellow2',
    disabledRadio: 'disabled1',
    oneDisabledRadio: 'oneDisabled2',
    largeRadio: 'large1',
    separatedRadio: 'separated1',
    borderedRadio: 'bordered1'
  }

  const onChange = (value: string | number | boolean) => {
    console.log(value)
  };

  return (
    <section id="ds-checkboxes-radios" className="ds-section">
      <h2 className="ds-section-title">Checkboxes And Radios</h2>

      <div className="ds-section-content">

        <div className="ds-section-vaients">

          <div className="flex flex-col sm:flex-row gap-x-8">

            <div className="flex-1">
              <h4 className="varients-title">Checkboxes</h4>

              <DsForm form={form} onSubmit={() => { }}>
                <DsCheckboxRadio type="checkbox" name="blackCheck" text="Checkbox Black" onChange={(value, e) => onChange(value)} />
                <DsCheckboxRadio type="checkbox" name="blueCheck" text="Checkbox Blue" color="blue" />
                <DsCheckboxRadio type="checkbox" name="yellowCheck" text="Checkbox Yellow" color="yellow" />
                <DsCheckboxRadio type="checkbox" name="disabledCheck" text="Checkbox Disabled" disabled />
                <DsCheckboxRadio type="checkbox" name="disabledCheckedCheck" text="Checkbox Disabled Checked" disabled />
                <DsCheckboxRadio type="checkbox" name="largeCheck" text="Checkbox Large" size="lg" className="mb-2" />
                <DsCheckboxRadio type="checkbox" name="circleCheck" text="Checkbox circle" size="lg" circle className="mb-2" />
                <DsCheckboxRadio type="checkbox" name="borderedCheck" text="Checkbox bordered" size="lg" bordered className="mb-2" />
              </DsForm>

            </div>

            <div className="flex-1">
              <h4 className="varients-title">Radios</h4>

              <DsForm form={form} initialValues={initialRadio} onSubmit={() => { }}>
                <DsCheckboxRadio type="radio" name="blueRadio" color="blue" radioItems={blueRadioItems} onChange={(value) => onChange(value)} className="mb-2" />
                <DsCheckboxRadio type="radio" name="yellowRadio" color="yellow" radioItems={yellowRadioItems} className="mb-2" />
                <DsCheckboxRadio type="radio" name="disabledRadio" radioItems={disabledRadioItems} disabled className="mb-2" />
                <DsCheckboxRadio type="radio" name="oneDisabledRadio" radioItems={oneDisabledRadioItems} className="mb-2" />
                <DsCheckboxRadio type="radio" name="largeRadio" color="black" size="lg" radioItems={largeRadioItems} className="mb-2" />
                <DsCheckboxRadio type="radio" name="separatedRadio" size="lg" radioItems={separetedRadioItems} direction="vertical" separated className="mb-2" />
                <DsCheckboxRadio type="radio" name="borderedRadio" size="lg" radioItems={borderedRadioItems} bordered className="mb-2" />
              </DsForm>

            </div>

          </div>

        </div> {/* ds-section-vaients */}

      </div> {/* ds-section-content */}

    </section>
  );
};

export default CheckboxesRadios;