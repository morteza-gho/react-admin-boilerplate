import React, { FC } from "react";
import DsStep from "../designSystem/components/otherElements/DsStep";

const DsOtherElemetns: FC = () => {
  return (
    <section id="ds-other-elements" className="ds-section">
      <h2 className="ds-section-title">Steps</h2>

      <div className="ds-section-content">

        <div className="ds-section-vaients flex-1">
          <h4 className="varients-title">Steps</h4>
          <DsStep type="blue-light" allSteps={4} completedSteps={1} className="mb-6" />
          <DsStep type="blue" allSteps={5} completedSteps={2} className="mb-6" />
          <DsStep type="green" allSteps={6} completedSteps={3} className="mb-6" />
        </div> {/* end of steps */}

      </div>{/* ds-section-content */}

    </section>
  );
};

export default DsOtherElemetns;