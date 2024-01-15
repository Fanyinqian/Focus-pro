/**
 * title: Schema 表单
 */

import { ZFProConfigProvider, ZFSchemaForm } from '@yq/focus-pro';

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

  return (
    <ZFProConfigProvider>
      <ZFSchemaForm columns={columns} onFinish={async (v) => console.log(v)} />
    </ZFProConfigProvider>
  );
};

export default SchemaForm;
