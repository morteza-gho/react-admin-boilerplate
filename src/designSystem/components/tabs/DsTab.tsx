import { FC, MouseEventHandler, ReactNode, useState } from "react";

interface ITabItem {
  key: string,
  title: string,
  disabled?: boolean
}

interface IPropTypes {
  type: 'rounded' | 'flat',
  size: 'md' | 'lg',
  items: ITabItem[],
  activeTabKey: string,
  className?: string,
  onClick: (key: string) => void
}

const DsTab: FC<IPropTypes> = ({ type = 'rounded', size = 'md', items, activeTabKey, className, onClick }) => {

  const [activeTab, setActiveTab] = useState<string>(activeTabKey);

  const changeTab = (item: ITabItem) => {
    if (!item.disabled) {
      setActiveTab(item.key); // active clicked tab
      onClick(item.key); // send current tab key to parent
    }
  }

  return (
    <div className={`tabs ${type === 'flat' ? 'tabs-flat' : ''} tabs-${size} ${className ? className : ''}`}>
      {
        items.map((item) => {
          return <button
            key={item.key}
            className={`tab-button ${item.key === activeTab ? 'active' : ''} ${item.disabled ? 'disabled' : ''}`}
            onClick={() => changeTab(item)}>
            {item.title}
          </button>
        })
      }
    </div>
  )
};

export default DsTab;