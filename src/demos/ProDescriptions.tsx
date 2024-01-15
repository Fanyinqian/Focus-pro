/**
 * title: ProDescription
 */

import { ZFProConfigProvider, ZFProDescriptions } from '@yq/focus-pro';

const ProDescriptions = () => {
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
      key: 'link',
      title: '链接',
      dataIndex: 'link',
      valueType: 'link',
    },
  ];

  const dataSource = {
    date: '2023-01-01 01:01:01',
    money: 100,
    slider: 10,
    email: 'yinqian@qq.com',
    link: [
      {
        text: 'antd',
        href: 'https://ant.design',
      },
      {
        text: '知乎',
        href: 'http://www.zhihu.com',
      },
    ],
  };

  return (
    <ZFProConfigProvider>
      <ZFProDescriptions
        dataSource={dataSource}
        columns={columns}
      ></ZFProDescriptions>
    </ZFProConfigProvider>
  );
};

export default ProDescriptions;
