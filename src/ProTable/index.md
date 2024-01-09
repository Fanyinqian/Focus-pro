---
nav: 组件
group:
  title: 数据展示
title: ZFProTable
toc: content
---

### Info Badge <Badge>info</Badge>

# ZFProTable

```tsx
import { ZFProTable } from '@yq/focus-pro';
const dataSource = [
  {
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号',
  },
  {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号',
  },
];

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
  },
];

export default () => (
  <ZFProTable
    dataSource={dataSource}
    columns={columns}
    search={false}
    options={false}
  />
);
```

### 第二个标题
