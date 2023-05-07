import React from "react";
import { FC, useState } from "react";
import DsTab from "./DsTab";

const tabItems1 = [
  { key: 'mediumTab1', title: 'Tab Header 1', disabled: false },
  { key: 'mediumTab2', title: 'Tab Header 2', disabled: false },
  { key: 'mediumTab3', title: 'Tab Header 3', disabled: false },
  { key: 'mediumTab4', title: 'Tab Header 4', disabled: true }
];
const tabItems2 = [
  { key: 'largeTab1', title: 'Tab Header 1' },
  { key: 'largeTab2', title: 'Tab Header 2' },
  { key: 'largeTab3', title: 'Tab Header 3' },
];
const tabItems3 = [
  { key: 'flatMediumTab1', title: 'Tab Header 1' },
  { key: 'flatMediumTab2', title: 'Tab Header 2' },
  { key: 'flatMediumTab3', title: 'Tab Header 3' },
];
const tabItems4 = [
  { key: 'flatLargeTab1', title: 'Tab Header 1' },
  { key: 'flatLargeTab2', title: 'Tab Header 2' },
  { key: 'flatLargeTab3', title: 'Tab Header 3' },
];

const DsTabs: FC = () => {

  const [activeTab, setActiveTab] = useState<string>('mediumTab1');

  // this function is called after each tab change
  const changeTab = (tabKey: string) => {
    // console.log(tabKey);
    setActiveTab(tabKey);
  };

  return (
    <section id="ds-tabs" className="ds-section">
      <h2 className="ds-section-title">Tabs</h2>

      <div className="ds-section-content">

        <div className="ds-section-vaients">
          <h4 className="varients-title">Medium Tab</h4>
          <div className="w-2/3">
            <DsTab type="rounded" size="md" items={tabItems1} activeTabKey="mediumTab1" onClick={(key) => changeTab(key)} />
            {/* This is a sample to show tabs contents */}
            {activeTab === 'mediumTab1' ? <h3>Medium Tab content 1</h3> : null}
            {activeTab === 'mediumTab2' ? <h3>Medium Tab content 2</h3> : null}
            {activeTab === 'mediumTab3' ? <h3>Medium Tab content 3</h3> : null}
          </div>
        </div>

        <div className="ds-section-vaients">
          <h4 className="varients-title">Large Tab</h4>
          <div className="w-2/3">
            <DsTab type="rounded" size="lg" items={tabItems2} activeTabKey="largeTab2" onClick={(key) => changeTab(key)} />
          </div>
        </div>

        <div className="ds-section-vaients">
          <h4 className="varients-title">Flat Medium Tab</h4>
          <div className="w-2/3">
            <DsTab type="flat" size="md" items={tabItems3} activeTabKey="flatMediumTab1" onClick={(key) => changeTab(key)} />
          </div>
        </div>

        <div className="ds-section-vaients">
          <h4 className="varients-title">Flat Large Tab</h4>
          <div className="w-2/3">
            <DsTab type="flat" size="lg" items={tabItems4} activeTabKey="flatLargeTab3" onClick={(key) => changeTab(key)} />
          </div>
        </div>

      </div> {/* .ds-section-content */}

    </section>
  );
};

export default DsTabs;