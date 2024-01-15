import { ZFProConfigProvider, ZFProDescriptions } from '@yq/focus-pro';

const ProDescriptions = () => {
  const columns = [
    {
      title: '基础展示',
      valueType: 'link',
      dataIndex: 'linkBase',
      fieldProps: {
        style: {
          'font-weight': 'bold',
        },
      },
    },
    {
      title: '自定义文字',
      valueType: 'link',
      dataIndex: 'linkText',
    },
    {
      title: '多个连接',
      valueType: 'link',
      dataIndex: 'linkArr',
    },
  ];

  const dataSource = {
    linkBase: 'https://ant.design',
    linkText: {
      href: 'https://procomponents.ant.design/',
      text: 'ProComponents',
    },
    linkArr: [
      {
        href: 'http://www.zhihu.com',
        text: '知乎',
      },
      'http://www.zhihu.com',
    ],
  };

  return (
    <ZFProConfigProvider>
      <ZFProDescriptions
        columns={columns}
        dataSource={dataSource}
      ></ZFProDescriptions>
    </ZFProConfigProvider>
  );
};

export default ProDescriptions;
