import React, { useState } from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom';
import { HiInbox, HiMenu } from 'react-icons/hi';
import DsButton from './designSystem/components/buttons/DsButton';
import { HiCheck, HiCheckCircle, HiDocumentText, HiExclamationTriangle, HiHome } from 'react-icons/hi2';

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
    /* {
      key: 'Users', icon: <HiUser />, label: 'Users',
      children: [
        { key: 'sub-user-1', icon: <HiUser />, label: 'sub user 1', },
        { key: 'sub-user-2', icon: <HiUser />, label: 'sub user 2', },
        { key: 'sub-user-3', icon: <HiUser />, label: 'sub user 3', }
      ]
    } */
    {
      key: 'Dashboard', icon: <HiHome />, label: 'Dashboard', target: '/app/dashboard'
    },
    {
      key: 'Buttons', icon: <HiInbox />, label: 'Buttons', target: '/app/buttons'
    },
    {
      key: 'FormItems', icon: <HiDocumentText />, label: 'FormItems', target: '/app/FormItems'
    },
    {
      key: 'CheckBoxesRadios', icon: <HiCheckCircle />, label: 'CheckBoxesRadios', target: '/app/CheckBoxesRadios'
    },
    {
      key: 'FormValidation', icon: <HiExclamationTriangle />, label: 'FormValidation', target: '/app/FormValidation'
    }
  ]

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
          <div className='flex justify-between'>
            <DsButton type='light' justIcon icon={<HiMenu />} onClick={() => setCollapsed(!collapsed)} />
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
