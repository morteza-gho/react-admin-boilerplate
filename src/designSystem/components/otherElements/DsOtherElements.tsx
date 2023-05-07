import { FC } from "react";
import DsStep from "./DsStep";
import DsUploadArea from './DsUploadArea';
import React from "react";

const DsOtherElemetns: FC = () => {
  return (
    <section id="ds-other-elements" className="ds-section">
      <h2 className="ds-section-title">Other Elements</h2>

      <div className="ds-section-content">

        <div className="ds-section-vaients">
          <h4 className="varients-title">Upload Area</h4>

          <div className='flex flex-col md:flex-row md:justify-between'>
            <div className="w-1/3">
              <DsUploadArea type="simple" title="upload CV file" maxSize={30} />
            </div>
            <div className="w-1/3">
              <DsUploadArea type="dragger" title="drag CV file here" maxSize={50} />
            </div>
          </div>
        </div> {/* end of upload area */}

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