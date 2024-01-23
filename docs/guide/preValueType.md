---
nav: 研发
group:
  title: 核心灵魂
  order: 3
title: valueType - 为什么诞生
toc: content
order: 1
description: 介绍 valueType 解决了什么问题
---

## 为什么诞生

我们经常使用 Ant Design 来开发中后台应用，它提供了很多开箱即用的高质量组件，例如 `table`、`Form`，能够帮助我们快速搭建一个中后台界面。但当遇到一些比较"灵活"的表单项、表格项，它就没有那么万能。

比如，当我希望某个表格项的展示链接，某个表格项展示标签，表格项支持删除操作，Antd 的用法如下：

<code src="./demos/antdTable.tsx"></code>

```js | pure{6,17-31,36-48}
const columns: TableProps<DataType>['columns'] = [
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
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
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
          message.success('Click on Yes');
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
```

可以看出，我们需要在`columns`中的`render`重新去写组件。但是这样需求在中后台开发中很常见，如果每次都要重复写一样的`render`，显得非常繁琐，降低了开发效率。

为了解决这个问题，ProComponents 增加了一大特性：`valueType`。

`valueType`将重复的`render`逻辑抽离出来，映射成不同的表单项。

<code src="./demos/focusTable.tsx"></code>

以下是经过`valueType`简化之后的`columns`:

```js | pure{6,17-35,40-50}
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
```

从上面这个例子我们能发现，`valueType`允许根据不同场景自由定制，降低了中后台开发的心智负担。

Focus-pro 在 ProComponents 的基础之上，提供了更为丰富的`valueType`，比如例子中的`tags`，`link`，`option`，均由 Focus pro 新提供。

## valueType 列表

`valueType` 是通用配置的核心，Focus pro 集成了 Procomponents 提供了所有`valueType`，会根据 valueType 来映射成不同的表单项或表格数据，具体查看下方：

| valueType          | 说明                         |
| ------------------ | ---------------------------- |
| `text`             | 文本框                       |
| `password`         | 密码输入框                   |
| `money`            | 金额输入框                   |
| `index`            | 索引                         |
| `indexBorder`      | 索引带边框                   |
| `option`           | 下拉选择                     |
| `textarea`         | 文本域                       |
| `date`             | 日期                         |
| `dateWeek`         | 周                           |
| `dateMonth`        | 月                           |
| `dateQuarter`      | 季度输入                     |
| `dateYear`         | 年份输入                     |
| `dateTime`         | 日期时间                     |
| `fromNow`          | 相对于当前时间               |
| `dateRange`        | 日期区间                     |
| `dateTimeRange`    | 日期时间区间                 |
| `dateWeekRange`    | 周范围选择器                 |
| `dateMonthRange`   | 月范围选择器                 |
| `dateQuarterRange` | 周范围选择器                 |
| `dateYearRange`    | 年范围选择器                 |
| `time`             | 时间                         |
| `timeRange`        | 时间区间                     |
| `select`           | 下拉框                       |
| `checkbox`         | 多选框                       |
| `rate`             | 星级组件                     |
| `slider`           | 滑动条                       |
| `radio`            | 单选框                       |
| `radioButton`      | 按钮单选框                   |
| `progress`         | 进度条                       |
| `percent`          | 百分比组件                   |
| `digit`            | 数字输入框                   |
| `digitRange`       | 数字范围输入框               |
| `second`           | 秒格式化                     |
| `code`             | 代码框                       |
| `jsonCode`         | 代码框，但是带了 json 格式化 |
| `avatar`           | 头像                         |
| `switch`           | 开关                         |
| `image`            | 图片                         |
| `cascader`         | 级联选择器                   |
| `treeSelect`       | 树形下拉框                   |
| `color`            | 颜色选择器                   |
| `segmented`        | 分段器                       |
| `group`            | 分组                         |
| `formList`         | 表单列表                     |
| `formSet`          | 表单集合                     |
| `divider`          | 分割线                       |
| `dependency`       | 级联组件                     |

## 新扩展的 valueType

以下是 Focus pro 新扩展的`valueType`，具体用法见[使用指南](/guide/value-type)
