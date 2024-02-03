---
nav: 研发
group:
  title: 架构设计
title: Schema - 通用配置
toc: content
order: 1
---

# 通用配置

基于配置生成页面，更加高效的开发方式。

## valueType

valueType 是通用配置的核心，focus pro 会根据 valueType 来映射成不同的表单项或表格数据，具体查看下方：

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

## 使用

### 全局化配置

在应用的入口处进行全局化配置，ZFProConfigProvider 使用 React 的 context 特性，只需在应用外围包裹一次即可全局生效。

```jsx | pure
import { ZFProConfigProvider } from 'focus-pro';

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
