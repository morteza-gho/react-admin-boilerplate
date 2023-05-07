import { FC, useState } from "react";
import { HiHand } from "react-icons/hi";
import DsModal from "./DsModal";
import DsAlertModal from './DsAlertModal';
import DsConfirmModal from "./DsConfirmModal";
import React from "react";

const DsDialogs: FC = () => {

  const [isSmModalOpen, setIsSmModalOpen] = useState<boolean>(false);
  const [isMdModalOpen, setIsMdModalOpen] = useState<boolean>(false);
  const [isLgModalOpen, setIsLgModalOpen] = useState<boolean>(false);

  const [isSuccessAlertOpen, setIsSuccessAlertOpen] = useState<boolean>(false);
  const [isWarningAlertOpen, setIsWarningAlertOpen] = useState<boolean>(false);
  const [isInfoAlertOpen, setIsInfoAlertOpen] = useState<boolean>(false);
  const [isDangerAlertOpen, setIsDangerAlertOpen] = useState<boolean>(false);
  const [isContentAlertOpen, setIsContentAlertOpen] = useState<boolean>(false);

  const [isConfirmWarningModalOpen, setIsConfirmWarningModalOpen] = useState<boolean>(false);
  const [isConfirmDangerModalOpen, setIsConfirmDangerModalOpen] = useState<boolean>(false);

  return (
    <section id="ds-dialogs" className="ds-section">
      <h2 className="ds-section-title">Dialogs</h2>

      <div className="ds-section-content">

        <div className="ds-section-vaients">
          <h4 className="varients-title">Modals</h4>

          <div className='flex items-start gap-x-4'>
            <button className='btn btn-md btn-blue' onClick={() => setIsSmModalOpen(true)}>Modal Small</button>
            <button className='btn btn-md btn-blue' onClick={() => setIsMdModalOpen(true)}>Modal Medium</button>
            <button className='btn btn-md btn-blue' onClick={() => setIsLgModalOpen(true)}>Modal Large</button>
          </div>

          <DsModal size="sm" title="Modal Small" open={isSmModalOpen} onClose={() => setIsSmModalOpen(false)}>
            <div className='p-4'>
              <p>Some contents for small modal...</p>
              <p>Some contents for small modal...</p>
              <p>Some contents for small modal...</p>
              <button className="btn btn-outline-blue btn-md mt-4" onClick={() => setIsSmModalOpen(false)}>Close Modal</button>
            </div>
          </DsModal>

          <DsModal
            size="md"
            title={<div className='space-x-2'><HiHand className='inline' /> custom modal header <span className="badge badge-green-light relative -top-1">Badge</span></div>}
            open={isMdModalOpen}
            onClose={() => setIsMdModalOpen(false)}
          >
            <div className='p-4'>
              <p>Some contents for medium modal...</p>
              <p>Some contents for medium modal...</p>
              <p>Some contents for medium modal...</p>
              <button className="btn btn-outline-red btn-md mt-4" onClick={() => setIsMdModalOpen(false)}>Close Modal</button>
            </div>
          </DsModal>

          <DsModal size="lg" title="Modal Large" open={isLgModalOpen} onClose={() => setIsLgModalOpen(false)}>
            <div className='p-4'>
              <p>Some contents for large modal...</p>
              <p>Some contents for large modal...</p>
              <p>Some contents for large modal...</p>
              <button className="btn btn-outline-black btn-md mt-4" onClick={() => setIsLgModalOpen(false)}>Close Modal</button>
            </div>
          </DsModal>

        </div> {/* end of modals */}


        <div className="ds-section-vaients">
          <h4 className="varients-title">Alerts</h4>

          <div className='flex items-start gap-x-4'>
            <button className='btn btn-md btn-green-secondary' onClick={() => setIsSuccessAlertOpen(true)}>Success Alert</button>
            <button className='btn btn-md btn-red' onClick={() => setIsDangerAlertOpen(true)}>Danger Alert</button>
            <button className='btn btn-md btn-yellow' onClick={() => setIsWarningAlertOpen(true)}>Warning Alert</button>
            <button className='btn btn-md btn-blue' onClick={() => setIsInfoAlertOpen(true)}>Info Alert</button>
            <button className='btn btn-md btn-black' onClick={() => setIsContentAlertOpen(true)}>Alert with content</button>
          </div>

          <DsAlertModal type="success" title="Action Was Successfully Done" open={isSuccessAlertOpen} onClose={() => setIsSuccessAlertOpen(false)} />
          <DsAlertModal type="danger" title="This is a danger alert" open={isDangerAlertOpen} onClose={() => setIsDangerAlertOpen(false)} />
          <DsAlertModal type="warning" title="This is a warning alert" open={isWarningAlertOpen} onClose={() => setIsWarningAlertOpen(false)} />
          <DsAlertModal type="info" title="This is a info alert" open={isInfoAlertOpen} onClose={() => setIsInfoAlertOpen(false)} />

          <DsAlertModal type="info" title="This is a alert with content" open={isContentAlertOpen} onClose={() => setIsContentAlertOpen(false)}>
            <p className='text-lg font-semibold text-center mb-1'>This is subtitle for alert</p>
            <div className='flex justify-center'>
              <ul className='text-base list-disc'>
                <li>this is a text</li>
                <li>another text is here</li>
                <li>this is a text</li>
                <li>another text is here</li>
              </ul>
            </div>
          </DsAlertModal>

        </div> {/* end of alerts */}


        <div className="ds-section-vaients">
          <h4 className="varients-title">Confirms</h4>

          <div className='flex items-start gap-x-4'>
            <button className='btn btn-md btn-yellow' onClick={() => setIsConfirmWarningModalOpen(true)}>Confirm Warning</button>
            <button className='btn btn-md btn-red' onClick={() => setIsConfirmDangerModalOpen(true)}>Confirm Danger</button>
          </div>

          <DsConfirmModal
            type="warning"
            title="Are you sure you want to add 'Mustang Sally' to your Reviewed Panel?"
            open={isConfirmWarningModalOpen}
            onApprove={() => setIsConfirmWarningModalOpen(false)}
            onReject={() => setIsConfirmWarningModalOpen(false)}
          />

          <DsConfirmModal
            type="danger"
            title="Are you sure you want to Delist 'Mustang Sally'?"
            open={isConfirmDangerModalOpen}
            onApprove={() => setIsConfirmDangerModalOpen(false)}
            onReject={() => setIsConfirmDangerModalOpen(false)}
          />

        </div> {/* end of confirms */}

      </div> {/* .ds-section-content */}

    </section>
  );
};

export default DsDialogs;