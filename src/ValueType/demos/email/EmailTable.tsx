import { ZFProConfigProvider, ZFProTable } from '@yq/focus-pro';
const ProTable = () => {
  const dataSource = [
    {
      name: '张三',
      age: 20,
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
      <ZFProTable
        dataSource={dataSource}
        columns={columns}
        options={false}
      ></ZFProTable>
    </ZFProConfigProvider>
  );
};

export default ProTable;
