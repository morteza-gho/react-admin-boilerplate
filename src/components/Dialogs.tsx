import React, { FC, useState } from "react";
import { HiHand } from "react-icons/hi";
import { toast } from "react-toastify";
import DsAlertModal from "../designSystem/components/dialogs/DsAlertModal";
import DsConfirmModal from "../designSystem/components/dialogs/DsConfirmModal";
import DsModal from "../designSystem/components/dialogs/DsModal";
import DsButton from './../designSystem/components/buttons/DsButton';

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
            <DsButton type="default" size="base" text="Small Modal" onClick={() => setIsSmModalOpen(true)} />
            <DsButton type="default" size="base" text="Medium Modal" onClick={() => setIsMdModalOpen(true)} />
            <DsButton type="default" size="base" text="Large Modal" onClick={() => setIsLgModalOpen(true)} />
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

            <DsButton type="green" size="base" text="Success Alert" onClick={() => setIsSuccessAlertOpen(true)} />
            <DsButton type="red" size="base" text="Danger Alert" onClick={() => setIsDangerAlertOpen(true)} />
            <DsButton type="yellow" size="base" text="Warning Alert" onClick={() => setIsWarningAlertOpen(true)} />
            <DsButton type="default" size="base" text="Info Alert" onClick={() => setIsInfoAlertOpen(true)} />
            <DsButton type="dark" size="base" text="Alert with content" onClick={() => setIsContentAlertOpen(true)} />
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
            <DsButton type="yellow" size="base" text="Confirm Warning" onClick={() => setIsConfirmWarningModalOpen(true)} />
            <DsButton type="red" size="base" text="Confirm Danger" onClick={() => setIsConfirmDangerModalOpen(true)} />
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


        <div className="ds-section-vaients">
          <h4 className="varients-title">Notification</h4>

          <div className='flex items-start gap-x-4'>

            <DsButton type="green" size="base" text="Success" onClick={() => toast.success('this is a success notification')} />
            <DsButton type="red" size="base" text="Error" onClick={() => toast.error('this is a error notification')} />
            <DsButton type="yellow" size="base" text="Warning" onClick={() => toast.warning('this is a warning notification')} />
            <DsButton type="default" size="base" text="Info" onClick={() => toast.info('this is a info notification')} />
            <DsButton type="light" size="base" text="Light" onClick={() => toast('this is a light notification')} />
          </div>
        </div> {/* end of notofications */}


      </div> {/* .ds-section-content */}

    </section >
  );
};

export default DsDialogs;