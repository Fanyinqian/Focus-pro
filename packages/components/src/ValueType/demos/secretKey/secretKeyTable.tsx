import { ZFProTable } from 'focus-pro';

const ProTable = () => {
  const columns = [
    {
      title: 'secretKey',
      valueType: 'secretKey',
      dataIndex: 'secretKey',
      fieldProps: {
        hide: false,
      },
    },
  ];

  const dataSource = [{ secretKey: 123456 }];

  return (
    <ZFProTable
      columns={columns}
      dataSource={dataSource}
      options={false}
    ></ZFProTable>
  );
};

export default ProTable;
