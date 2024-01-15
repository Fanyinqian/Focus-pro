import { ZFProConfigProvider, ZFProTable } from '@yq/focus-pro';

const ProTable = () => {
  const columns = [
    {
      title: '标签',
      dataIndex: 'tags',
      valueType: 'tags',
      valueEnum: {
        P0: {
          text: 'P0',
          status: 'P0',
        },
        P1: {
          text: 'P1',
          status: 'P1',
        },
        P2: {
          text: 'P2',
          status: 'P2',
        },
        P3: {
          text: 'P3',
          status: 'P3',
        },
        P4: {
          text: 'P4',
          status: 'P4',
        },
      },
    },
  ];

  const dataSource = [{ tags: ['P1'] }, { tags: ['P2'] }, { tags: ['P3'] }];

  return (
    <ZFProConfigProvider>
      <ZFProTable
        columns={columns}
        dataSource={dataSource}
        options={false}
      ></ZFProTable>
    </ZFProConfigProvider>
  );
};

export default ProTable;
