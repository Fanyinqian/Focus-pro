/**
 * title: ProTable
 */

import { ZFProConfigProvider, ZFProTable } from '@yq/focus-pro';

const ProTable = () => {
  const columns = [
    {
      key: 'date',
      title: '日期',
      dataIndex: 'date',
      valueType: 'date',
    },
    {
      key: 'money',
      title: '金额',
      dataIndex: 'money',
      valueType: 'money',
    },
    {
      key: 'slider',
      title: '滑动条',
      dataIndex: 'slider',
      valueType: 'slider',
    },
    {
      key: 'email',
      title: '邮箱',
      dataIndex: 'email',
      valueType: 'email',
    },
    {
      key: 'tags',
      title: '标签',
      dataIndex: 'tags',
      valueType: 'tags',
      fieldProps: {
        mode: 'tags', // 仅作用于 mode 为 edit 的查询搜索框
      },
      valueEnum: {
        0: {
          text: '访问限流',
          status: 'Success',
        },
        1: {
          text: '接口授权',
          status: 'Error',
        },
        2: {
          text: '服务熔断',
          color: '',
        },
        3: {
          text: '服务预热',
          color: '',
        },
        4: {
          text: '网关限流',
          color: '',
        },
        5: {
          text: '服务降级',
          color: '',
        },
        6: {
          text: '熔断降级',
          color: '',
        },
        7: {
          text: '限流降级',
          color: '',
        },
        8: {
          text: '服务限流',
          color: '',
        },
      },
    },
  ];

  const dataSource = [
    {
      key: 1,
      date: '2023-01-01 01:01:01',
      money: 100,
      slider: 10,
      email: 'yinqian@qq.com',
      tags: 7,
    },
    {
      key: 2,
      date: '2023-02-02 02:02:02',
      money: 200,
      slider: 30,
      email: 'yinqian@qq.com',
      tags: [0, 1, 2, 3],
    },
  ];

  return (
    <ZFProConfigProvider>
      <ZFProTable
        headerTitle="ZFProTable"
        dataSource={dataSource}
        columns={columns}
      ></ZFProTable>
    </ZFProConfigProvider>
  );
};

export default ProTable;
