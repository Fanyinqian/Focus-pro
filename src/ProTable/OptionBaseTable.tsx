import { LinkOutlined } from '@ant-design/icons';
import { ZFProColumns, ZFProConfigProvider, ZFProTable } from '@yq/focus-pro';

type DatasourceType = {
  id: number;
  name: string;
  age: string;
};

const OptionBaseTable = () => {
  const columns: ZFProColumns<DatasourceType, any>[] = [
    { title: '姓名', dataIndex: 'name', key: 'name' },
    { title: '年龄', dataIndex: 'age', key: 'age' },
    {
      title: '操作',
      valueType: 'option',
      actions: [
        {
          type: 'Navigate',
          useNavigate: (record) => `/${record.id}`,
        },
        {
          type: 'Navigate',
          text: (
            <a>
              <LinkOutlined></LinkOutlined>
            </a>
          ),
          useNavigate: (record) => ({
            to: `/${record.id}`,
            replace: true,
          }),
          tooltip: '自定义样式',
        },
        {
          type: 'Edit',
          text: '编辑',
          onEdit: (record) => {
            console.log(record);
          },
          useDisable: (record) => record.name === '小明',
        },
        {
          type: 'Navigate',
          useNavigate: () => '//www.zhihu.com',
          text: '知乎',
          target: '_blank',
          tooltip: '进入知乎',
        },
        {
          type: 'Delete',
          text: '删除',
          onDelete: (record) => {
            console.log(record);
          },
          useHide: (record) => record.name === '小红',
        },
        {
          type: 'Click',
          onClick: (record) => {
            console.log(record);
          },
          useHide: (record) => record.name === '小红',
          collapsed: true,
        },
        (record) => {
          return <a data-collapsed="true">自定义操作-{record.name}</a>;
        },
      ],
    },
  ];

  const datasource: DatasourceType[] = [
    { id: 1, name: '小明', age: '12' },
    { id: 2, name: '小红', age: '13' },
  ];

  return (
    <ZFProConfigProvider>
      <ZFProTable
        headerTitle="操作项示例"
        dataSource={datasource}
        columns={columns}
        search={false}
      ></ZFProTable>
    </ZFProConfigProvider>
  );
};

export default OptionBaseTable;
