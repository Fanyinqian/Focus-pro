import { ZFProConfigProvider, ZFProTable } from 'focus-pro';

const BadageTable = () => {
  const columns = [
    {
      title: 'badges',
      valueType: 'badges',
      dataIndex: 'badges',
      valueEnum: {
        0: {
          text: 'P0',
          status: 'P0',
        },
        1: {
          text: 'P1',
          status: 'P1',
        },
        2: {
          text: 'P2',
          status: 'P2',
        },
        3: {
          text: 'P3',
          status: 'P3',
        },
        4: {
          text: 'P4',
          status: 'P4',
        },
      },
    },
  ];

  const dataSource = [
    {
      badges: 0,
    },
    {
      badges: 1,
    },
    {
      badges: [2, 3, 4],
    },
  ];

  return (
    <ZFProConfigProvider>
      <ZFProTable columns={columns} dataSource={dataSource}></ZFProTable>
    </ZFProConfigProvider>
  );
};

export default BadageTable;
