import React, { FC } from "react";
import DsBox from "../designSystem/components/boxes/DsBox";
import DsSection from "../designSystem/components/boxes/DsSection";
import DsText from "../designSystem/components/text/DsText";

const Boxes: FC = () => {
  return (
    <section id="ds-boxes" className="ds-section">
      <h2 className="ds-section-title">Boxes</h2>

      <div className="ds-section-content">

        <div className="flex flex-col md:flex-row gap-x-4 mb-4">

          <div className="ds-section-vaients flex-1">
            <h4 className="varients-title">White</h4>
            <DsBox type="white" className="text-base">this is a test white box.</DsBox>
          </div>

          <div className="ds-section-vaients flex-1">
            <h4 className="varients-title">Gray - Light</h4>
            <DsBox type="gray-light" className="text-base">this is a test blue light box.</DsBox>
          </div>

          <div className="ds-section-vaients flex-1">
            <h4 className="varients-title">Blue - Light</h4>
            <DsBox type="blue-light" className="text-base">this is a test blue light box.</DsBox>
          </div>

          <div className="ds-section-vaients flex-1">
            <h4 className="varients-title">Red - Light</h4>
            <DsBox type="red-light" className="text-base">this is a test blue light box.</DsBox>
          </div>

        </div>

        <DsSection type='gray-lightest'>

          <DsText fontSize='2xl' display="block" transform="capitalize">section title</DsText>
          <div className="flex flex-col md:flex-row gap-x-4 mt-4 mb-8">
            <DsBox type="blue-light" className="flex-1 text-base">this is a test blue light box.</DsBox>
            <DsBox type="blue-light" className="flex-1 text-base">this is a test blue light box.</DsBox>
            <DsBox type="blue-light" className="flex-1 text-base">this is a test blue light box.</DsBox>
            <DsBox type="blue-light" className="flex-1 text-base">this is a test blue light box.</DsBox>
          </div>

          <DsSection type="white">
            <DsText fontSize='xl' display="block" transform="capitalize">inner section title</DsText>
            <div className="flex flex-col md:flex-row gap-x-4 mt-4">
              <DsBox type="blue-light" className="flex-1 text-base">this is a test blue light box.</DsBox>
              <DsBox type="blue-light" className="flex-1 text-base">this is a test blue light box.</DsBox>
              <DsBox type="blue-light" className="flex-1 text-base">this is a test blue light box.</DsBox>
              <DsBox type="blue-light" className="flex-1 text-base">this is a test blue light box.</DsBox>
            </div>
          </DsSection>

        </DsSection>

      </div>

    </section>
  );
};

export default Boxes;