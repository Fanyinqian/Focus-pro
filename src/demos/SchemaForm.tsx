/**
 * title: Schema 表单
 */

import { ZFProConfigProvider, ZFSchemaForm } from '@yq/focus-pro';

const SchemaForm = () => {
  const columns = [
    {
      title: '日期',
      dataIndex: 'date',
      valueType: 'date',
    },
    {
      title: '金额',
      dataIndex: 'money',
      valueType: 'money',
    },
    {
      title: '滑动条',
      dataIndex: 'slider',
      valueType: 'slider',
    },
    {
      title: '邮箱',
      dataIndex: 'email',
      valueType: 'email',
    },
  ];

  return (
    <ZFProConfigProvider>
      <ZFSchemaForm columns={columns} />
    </ZFProConfigProvider>
  );
};

export default SchemaForm;
