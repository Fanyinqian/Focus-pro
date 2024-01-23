import { ZFProConfigProvider, ZFSchemaForm } from 'focus-pro';

const SchemaForm = () => {
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
      valueEnum: {
        0: {
          text: '成功',
          status: 'Success',
        },
        1: {
          text: '失败',
          status: 'Error',
        },
        2: {
          text: '待定',
          color: '',
        },
      },
    },
  ];

  return (
    <ZFProConfigProvider
      theme={{
        token: {
          colorPrimary: '#fbef4d',
          colorInfo: '#fbef4d',
          borderRadius: 5,
          fontSize: 16,
          wireframe: true,
        },
      }}
    >
      <ZFSchemaForm columns={columns} onFinish={async (v) => console.log(v)} />
    </ZFProConfigProvider>
  );
};

export default SchemaForm;
