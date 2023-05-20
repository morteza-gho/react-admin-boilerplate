import React, { FC } from "react";
import DsAlert from "../designSystem/components/alerts/DsAlert";
import DsText from "../designSystem/components/text/DsText";

const DsAlerts: FC = () => {
  return (
    <section id="ds-alerts" className="ds-section">
      <h2 className="ds-section-title">Alerts</h2>

      <div className="ds-section-content">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 mb-4">

          <div className="ds-section-vaients my-4">
            <h4 className="varients-title">Success</h4>
            <DsAlert type="success">
              <DsText fontSize="2xl" fontWeight="bold">This is a success alert.</DsText>
            </DsAlert>
          </div>

          <div className="ds-section-vaients my-4">
            <h4 className="varients-title">Danger</h4>
            <DsAlert type="danger">
              <DsText fontSize="2xl" fontWeight="bold">This is a danger alert.</DsText>
            </DsAlert>
          </div>

          <div className="ds-section-vaients my-4">
            <h4 className="varients-title">Warning</h4>
            <DsAlert type="warning">
              <DsText fontSize="2xl" fontWeight="bold">This is a warning alert.</DsText>
            </DsAlert>
          </div>

          <div className="ds-section-vaients my-4">
            <h4 className="varients-title">Info</h4>
            <DsAlert type="info">
              <DsText fontSize="2xl" fontWeight="bold">This is a info alert.</DsText>
            </DsAlert>
          </div>

          <div className="ds-section-vaients my-4">
            <h4 className="varients-title">Secondary</h4>
            <DsAlert type="secondary">
              <DsText fontSize="2xl" fontWeight="bold">This is a secondary alert.</DsText>
            </DsAlert>
          </div>

          <div className="ds-section-vaients my-4">
            <h4 className="varients-title">Light</h4>
            <DsAlert type="light">
              <DsText fontSize="2xl" fontWeight="bold">This is a light alert.</DsText>
            </DsAlert>
          </div>

        </div>

      </div>

    </section>
  );
};

export default DsAlerts;