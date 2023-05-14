import React, { useState } from 'react';
import { Button, Dropdown, Layout, Menu, MenuProps } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom';
import { HiBadgeCheck, HiInbox, HiMenu, HiOutlineLogout } from 'react-icons/hi';
import DsButton from './designSystem/components/buttons/DsButton';
import { HiArrowDown, HiCheckCircle, HiChevronDown, HiDocumentText, HiExclamationTriangle, HiFlag, HiHome, HiOutlineStop, HiRocketLaunch, HiTableCells, HiUserCircle, HiViewColumns } from 'react-icons/hi2';
import { useLayoutEffect } from 'react';
import { CurrentUser, IsLogin, Logout } from './services/AuthService';

const App = () => {

  const { Sider } = Layout;
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  const handleMenuClick = ({ key }) => {
    const { target } = menuItems.find(item => item.key === key) || {};
    if (target) {
      navigate(target);
    }
  };


  const menuItems = [
    {
      key: 'Dashboard', icon: <HiHome />, label: 'Dashboard', target: '/app/dashboard'
    },
    {
      key: 'Tables', icon: <HiTableCells />, label: 'Tables', target: '/app/tables'
    },
    {
      key: 'Buttons', icon: <HiInbox />, label: 'Buttons', target: '/app/buttons'
    },
    {
      key: 'FormItems', icon: <HiDocumentText />, label: 'FormItems', target: '/app/FormItems'
    },
    {
      key: 'CheckBoxesRadios', icon: <HiCheckCircle />, label: 'CheckBoxesRadios', target: '/app/checkBoxesRadios'
    },
    {
      key: 'FormValidation', icon: <HiExclamationTriangle />, label: 'FormValidation', target: '/app/formValidation'
    },
    {
      key: 'Avatars', icon: <HiUserCircle />, label: 'Avatars', target: '/app/avatars'
    },
    {
      key: 'Badges', icon: <HiBadgeCheck />, label: 'Badges', target: '/app/badges'
    },
    {
      key: 'Boxes', icon: <HiOutlineStop />, label: 'Boxes', target: '/app/boxes'
    },
    {
      key: 'Dialogs', icon: <HiRocketLaunch />, label: 'Dialogs & Notifications', target: '/app/dialogs'
    },
    {
      key: 'Texts', icon: <HiDocumentText />, label: 'Texts', target: '/app/texts'
    },
    {
      key: 'Steps', icon: <HiFlag />, label: 'Steps', target: '/app/steps'
    },
    {
      key: 'Tabs', icon: <HiViewColumns />, label: 'Tabs', target: '/app/tabs'
    }

  ]

  const handleDropdownClick = ({ key }) => {
    if (key === 'logout') {
      Logout()
    }
  }

  const items: MenuProps['items'] = [
    {
      label: 'Logout',
      key: 'logout',
      icon: <HiOutlineLogout />,
    }
  ];

  const menuProps = {
    items,
    onClick: handleDropdownClick,
  };

  /* redirect to login if user unauthorized */
  useLayoutEffect(() => {
    if (!IsLogin()) {
      navigate('/login')
    }
  }, []);

  return (
    <div className="app">

      <Layout>
        <Sider width={200} collapsedWidth="0" collapsed={collapsed} className='main-sidebar'>
          <h1 className='text-white text-lg font-bold text-center px-2 py-4 border-b border-b-gray-600'>React Boilerplate</h1>
          <Menu
            theme='dark'
            mode="inline"
            style={{ height: '100%', borderRight: 0 }}
            items={menuItems}
            onClick={handleMenuClick}
          />
        </Sider>
      </Layout>

      <Layout className={`content-wrapper ${collapsed ? 'full-width' : ''}`}>

        <header className='main-header'>
          <div className='flex justify-between items-center w-full'>
            <DsButton type='light' justIcon icon={<HiMenu />} onClick={() => setCollapsed(!collapsed)} />
            <div className='flex'>
              <Dropdown className='bg-white rounded-md' menu={menuProps} placement="bottom">
                <Button className='flex gap-x-2 items-center'>
                  <HiChevronDown />
                  {CurrentUser().name}
                </Button>
              </Dropdown>
            </div>
          </div>
        </header>

        {/* <Breadcrumb className='px-4 py-1'>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb> */}

        <div className='main-content'>
          <Outlet />
        </div>
      </Layout>

    </div>
  )
}

export default App
