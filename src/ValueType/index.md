---
nav: 组件
group:
  title: 架构设计
title: 统用配置
toc: content
---

# 通用配置

基于配置生成页面，更加高效的开发方式。

## valueType

valueType 通用配置的核心，focus pro 会根据 valueType 来映射成不同的表单项或表格数据，具体查看下方：

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

### 以下是 focus-pro 新增的 valueType

| valueType | 说明       |
| --------- | ---------- |
| `email`   | 邮箱选择器 |

## 使用

### 全局化配置

在应用的入口处进行全局化配置，ZFProConfigProvider 使用 React 的 context 特性，只需在应用外围包裹一次即可全局生效。

```jsx | pure
import { ZFProConfigProvider } from '@yq/focus-pro';

const Entry = () => (
  <ZFProConfigProvider>
    <App />
  </ZFProConfigProvider>
);
```

### SchemaForm 场景

<code src="../demos/SchemaForm.tsx"></code>

### ProTable 场景

<code src="../demos/ProTable.tsx"></code>

示例中用了 `date`、`money`、`slider`、`email` 四个 valueType，可以看到他们在 Form 中渲染出了不同的表单项以及在 Table 中渲染了不同的数据展示。

### ProDescription 场景

<code src="../demos/ProDescriptions.tsx"></code>

### ProForm 场景

<code src="../demos/ProForm.tsx"></code>

每个 valueType 对应一种数据展示，其实本质就每个 valueType 对应一个组件，比如 `text` 对应 `ProFormText` 组件，`money` 对应 `ProFormMoney` 组件，规律 `xxx` 对应 `ProFormXxx` 组件。
如果 SchemaForm 能满足需求，不建议使用 ProForm 来开发表单，如果必须使用也做到 valueType 的收敛。
