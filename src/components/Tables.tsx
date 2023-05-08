import { Table } from 'antd';
import React, { FC } from 'react';
import { HiPencil, HiTrash } from 'react-icons/hi2';
import { useQuery } from 'react-query';
import DsButton from '../designSystem/components/buttons/DsButton';

const columns = [
  {
    title: 'Row',
    dataIndex: 'id',
    key: 'id',
    render: (id, record, index) => { ++index; return index; },
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Phone',
    dataIndex: 'phone',
    key: 'phone',
  },
  {
    title: 'Website',
    dataIndex: 'website',
    key: 'website',
  },
  {
    title: 'Company',
    dataIndex: 'company',
    key: 'company',
    render: (item) => {
      return item.name
    }
  },
  {
    title: 'Action',
    dataIndex: 'action',
    key: 'action',
    render: () => (<div className='flex gap-x-2 justify-center items-center'>
      <DsButton type='outline-default' size='xs' icon={<HiPencil />} justIcon onClick={() => { }} />
      <DsButton type='outline-red' size='xs' icon={<HiTrash />} justIcon onClick={() => { }} />
    </div>),
  },
];


const Tables: FC = () => {

  const { isLoading, isError, data, error } = useQuery('users', () =>
    fetch('https://jsonplaceholder.typicode.com/users').then((res) => res.json())
  );

  return (
    <div>
      <Table
        rowKey='id'
        bordered
        pagination={{ pageSize: 5 }}
        loading={isLoading}
        columns={columns}
        dataSource={data}
      />
    </div>
  )
}
export default Tables;