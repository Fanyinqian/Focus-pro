import { ZFProColumns, ZFProTable } from 'focus-pro';

interface DataType {
  key: string;
  name: string;
  age: number;
  tags: string[];
}

const columns: ZFProColumns<DataType, any>[] = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    valueType: 'link',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    valueType: 'tags',
    valueEnum: {
      nice: {
        text: 'NICE',
        color: 'green',
      },
      cool: {
        text: 'COOL',
        color: 'green',
      },
      loser: {
        text: 'LOSER',
        color: 'volcano',
      },
      developer: {
        text: 'DEVELOPER',
        color: 'geekblue',
      },
    },
  },
  {
    title: 'Action',
    key: 'action',
    valueType: 'option',
    actions: [
      {
        type: 'Delete',
        text: '删除',
        onDelete: (record) => {
          console.log(record);
        },
      },
    ],
  },
];

const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    tags: ['cool'],
  },
];

const antdTable = () => (
  <ZFProTable
    columns={columns}
    dataSource={data}
    search={false}
    options={false}
  />
);

export default antdTable;
