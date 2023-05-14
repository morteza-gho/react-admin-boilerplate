import { Form } from "antd";
import React, { useLayoutEffect, useState } from "react"
import { HiKey } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import DsButton from "../../designSystem/components/buttons/DsButton";
import DsForm from "../../designSystem/components/forms/DsForm";
import DsFormInput from "../../designSystem/components/forms/DsFormInput";
import DsText from "../../designSystem/components/text/DsText";
import { IsLogin, LoginUser } from "../../services/AuthService";

const Login = () => {

  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  useLayoutEffect(() => {
    if (IsLogin()) {
      navigate('/app/dashboard')
    }
  })

  const onSubmit = async (formData) => {
    setIsLoading(true);
    const userData = {
      name: 'Morteza',
      family: 'QorbanAlizade',
      mobile: '09134307521',
      email: formData.username
    }
    await LoginUser(userData, 'morteza');
    setIsLoading(false);
    navigate('/app/dashboard')
  }

  return (
    <div className="flex justify-center items-center h-full p-4">

      <div className="w-full md:w-1/3 bg-blue-50 border border-blue-100 border-b-4 border-b-blue-700 p-10 rounded-lg">

        <DsText fontSize="4xl" fontWeight="bold" display="block" align="center" className="mb-6">Login To App</DsText>

        <DsForm form={form} onSubmit={(formData) => onSubmit(formData)}>
          <DsFormInput
            type="email"
            label="Username"
            name="username"
            rules={[{ required: true, type: 'email' }]}
          />
          <DsFormInput
            type="password"
            label="Password"
            name="password"
            rules={[{ required: true }]}
          />
          <DsButton htmlType="submit" type="dark" text="Login" icon={<HiKey />} loading={isLoading} disabled={isLoading} />
        </DsForm>

      </div>

    </div>
  )
}
export default Login