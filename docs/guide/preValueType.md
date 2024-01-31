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

`valueType` 是通用配置的核心，Focus pro 集成了 Procomponents 提供的所有`valueType`，根据 `valueType` 映射成不同的表单项或表格数据，并扩展了更为丰富的 `valueType` 组件，具体用法见[使用指南](/guide/value-type)。

| valueType          | 说明                           | 来源                                             |
| ------------------ | ------------------------------ | ------------------------------------------------ |
| `text`             | 文本框                         | `ant-pro`                                        |
| `textarea`         | 文本域                         | `ant-pro`                                        |
| `password`         | 密码输入框                     | `ant-pro`                                        |
| `money`            | 金额输入框                     | `ant-pro`                                        |
| `date`             | 日期                           | `ant-pro`                                        |
| `password`         | 密码输入框                     | `ant-pro`                                        |
| `money`            | 金额输入框                     | `ant-pro`                                        |
| `index`            | 索引                           | `ant-pro`                                        |
| `indexBorder`      | 索引带边框                     | `ant-pro`                                        |
| `option`           | 下拉选择                       | `ant-pro`                                        |
| `textarea`         | 文本域                         | `ant-pro`                                        |
| `date`             | 日期                           | `ant-pro`                                        |
| `dateWeek`         | 周                             | `ant-pro`                                        |
| `dateMonth`        | 月                             | `ant-pro`                                        |
| `dateQuarter`      | 季度输入                       | `ant-pro`                                        |
| `dateYear`         | 年份输入                       | `ant-pro`                                        |
| `dateTime`         | 日期时间                       | `ant-pro`                                        |
| `fromNow`          | 相对于当前时间                 | `ant-pro`                                        |
| `dateRange`        | 日期区间                       | `ant-pro`                                        |
| `dateTimeRange`    | 日期时间区间                   | `ant-pro`                                        |
| `dateWeekRange`    | 周范围选择器                   | `ant-pro`                                        |
| `dateMonthRange`   | 月范围选择器                   | `ant-pro`                                        |
| `dateQuarterRange` | 周范围选择器                   | `ant-pro`                                        |
| `dateYearRange`    | 年范围选择器                   | `ant-pro`                                        |
| `time`             | 时间                           | `ant-pro`                                        |
| `timeRange`        | 时间区间                       | `ant-pro`                                        |
| `select`           | 下拉框                         | `ant-pro`                                        |
| `checkbox`         | 多选框                         | `ant-pro`                                        |
| `rate`             | 星级组件                       | `ant-pro`                                        |
| `slider`           | 滑动条                         | `ant-pro`                                        |
| `radio`            | 单选框                         | `ant-pro`                                        |
| `radioButton`      | 按钮单选框                     | `ant-pro`                                        |
| `progress`         | 进度条                         | `ant-pro`                                        |
| `percent`          | 百分比组件                     | `ant-pro`                                        |
| `digit`            | 数字输入框                     | `ant-pro`                                        |
| `digitRange`       | 数字范围输入框                 | `ant-pro`                                        |
| `second`           | 秒格式化                       | `ant-pro`                                        |
| `code`             | 代码框                         | `ant-pro`                                        |
| `jsonCode`         | 代码框，但是带了 json 格式化   | `ant-pro`                                        |
| `avatar`           | 头像                           | `ant-pro`                                        |
| `switch`           | 开关                           | `ant-pro`                                        |
| `image`            | 图片                           | `ant-pro`                                        |
| `cascader`         | 级联选择器                     | `ant-pro`                                        |
| `treeSelect`       | 树形下拉框                     | `ant-pro`                                        |
| `color`            | 颜色选择器                     | `ant-pro`                                        |
| `segmented`        | 分段器                         | `ant-pro`                                        |
| `group`            | 分组                           | `ant-pro`                                        |
| `formList`         | 表单列表                       | `ant-pro`                                        |
| `formSet`          | 表单集合                       | `ant-pro`                                        |
| `divider`          | 分割线                         | `ant-pro`                                        |
| `dependency`       | 级联组件                       | `ant-pro`                                        |
| `email`            | 邮箱选择器                     | <font class='focus-valuetype'>`focus-pro`</font> |
| `tags`             | 标签展示/选择                  | <font class='focus-valuetype'>`focus-pro`</font> |
| `link`             | 连接展示                       | <font class='focus-valuetype'>`focus-pro`</font> |
| `user`             | 展示用户头像，传入用户名       | <font class='focus-valuetype'>`focus-pro`</font> |
| `badge`            | 多彩徽标                       | <font class='focus-valuetype'>`focus-pro`</font> |
| `secretKey`        | 带复制功能的秘钥，支持显示隐藏 | <font class='focus-valuetype'>`focus-pro`</font> |
| `navigate`         | 导航链接                       | <font class='focus-valuetype'>`focus-pro`</font> |
| `upload`           | 文件上传                       | <font class='focus-valuetype'>`focus-pro`</font> |
| `miniTrendChart`   | 迷你图表                       | <font class='focus-valuetype'>`focus-pro`</font> |
| `description`      | 定义列表                       | <font class='focus-valuetype'>`focus-pro`</font> |
| `yanli`            | 盐粒输入框                     | <font class='focus-valuetype'>`focus-pro`</font> |
| `compact`          | 组合输入框                     | <font class='focus-valuetype'>`focus-pro`</font> |
| `form / group`     | form 组                        | <font class='focus-valuetype'>`focus-pro`</font> |
| `tileSelect`       | 平铺选择器                     | <font class='focus-valuetype'>`focus-pro`</font> |
| `relationCard`     | 关系卡片                       | <font class='focus-valuetype'>`focus-pro`</font> |
| `text / group`     | 文本组合                       | <font class='focus-valuetype'>`focus-pro`</font> |
