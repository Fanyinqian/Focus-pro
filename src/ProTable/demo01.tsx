import React from 'react';
import ZFProConfigProvider from '../ProConfigProvider';
import ZFProTable from './index';

const Demo01 = () => {
  const dataSource = [
    {
      name: '111',
      age: 1,
      email: '1511331112@qq.com',
    },
  ];

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      valueType: 'digit',
    },
    {
      title: 'email',
      dataIndex: 'email',
      key: 'email',
      valueType: 'email',
    },
  ];
  return (
    <ZFProConfigProvider>
      <ZFProTable dataSource={dataSource} columns={columns}></ZFProTable>
    </ZFProConfigProvider>
  );
};

export default Demo01;
