import { Popconfirm, Table, Tag, message } from 'antd';
import type { ColumnsType } from 'antd/es/table';

interface DataType {
  key: string;
  name: string;
  age: number;
  tags: string[];
}

interface ITagProps {
  [key: string]: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
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
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let colorMap: ITagProps = {
            nice: 'green',
            cool: 'green',
            loser: 'volcano',
            developer: 'geekblue',
          };
          let color = colorMap[tag];
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Popconfirm
        title="确定要删除吗？"
        onConfirm={() => {
          message.success(`删除${record.name}成功`);
        }}
        okText="Yes"
        cancelText="No"
        okButtonProps={{ danger: true }}
      >
        <a>删除</a>
      </Popconfirm>
    ),
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

const antdTable = () => <Table columns={columns} dataSource={data} />;

export default antdTable;
