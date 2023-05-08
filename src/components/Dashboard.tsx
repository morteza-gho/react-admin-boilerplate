import React, { FC } from "react";
import DsText from "../designSystem/components/text/DsText";

const Dashboard: FC = () => {
  return (
    <div className="h-full flex flex-col justify-between">
      <div>
        <DsText fontSize="5xl" fontWeight="black" display="block" align="center" className="mb-8">Reactjs Admin Boilerplate</DsText>
        <DsText fontSize="4xl" fontWeight="bold" display="block" align="center" className="text-gray-600">With AntDesign And Tailwind</DsText>
      </div>
      <div>
        <DsText fontSize="base" fontWeight="light" display="block" align="center" className="text-gray-600">Documentation will be ready as soon as possible</DsText>
        <DsText fontSize="base" fontWeight="light" display="block" align="center" className="text-gray-600">Thanks for your wating :)</DsText>
      </div>
    </div>
  )
}
export default Dashboard;