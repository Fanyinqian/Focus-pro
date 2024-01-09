---
title: ZFProTable

nav: 组件
group:
  title: 数据展示
toc: content
order: 1
---

## valueType

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

[TS 类型详情](https://github.com/ant-design/pro-components/blob/eda3bf6b2ad4d939d1f8091f925841682b9dd788/packages/utils/src/typing.ts#L36)

## ZFProTableProps

| 属性               | 描述                                                                 | 类型                                                                                                                                                     | 默认值                                               |
| ------------------ | -------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| request            | 获取 `dataSource` 的方法                                             | `(params?: {pageSize,current},sort,filter) => {data,success,total}`                                                                                      | -                                                    |
| params             | 用于 `request` 查询的额外参数，一旦变化会触发重新加载                | `object`                                                                                                                                                 | -                                                    |
| postData           | 对通过 `request` 获取的数据进行处理                                  | `(data: T[]) => T[]`                                                                                                                                     | -                                                    |
| defaultData        | 默认的数据                                                           | `T[]`                                                                                                                                                    | -                                                    |
| dataSource         | Table 的数据，protable 推荐使用 request 来加载                       | `T[]`                                                                                                                                                    | -                                                    |
| onDataSourceChange | Table 的数据发生改变时触发                                           | `(dataSource: T[]) => void`                                                                                                                              | -                                                    |
| actionRef          | Table action 的引用，便于自定义触发                                  | `MutableRefObject<ActionType>`                                                                                                                           | -                                                    |
| formRef            | 可以获取到查询表单的 form 实例，用于一些灵活的配置                   | `MutableRefObject<FormInstance>`                                                                                                                         | -                                                    |
| toolBarRender      | 渲染工具栏，支持返回一个 dom 数组，会自动增加 margin-right           | `(action) => ReactNode[]`                                                                                                                                | -                                                    |
| onLoad             | 数据加载完成后触发,会多次触发                                        | `(dataSource: T[]) => void`                                                                                                                              | -                                                    |
| onLoadingChange    | loading 被修改时触发，一般是网络请求导致的                           | `(loading:boolean)=>void`                                                                                                                                | -                                                    |
| onRequestError     | 数据加载失败时触发                                                   | `(error) => void`                                                                                                                                        | -                                                    |
| tableClassName     | 封装的 table 的 className                                            | `string`                                                                                                                                                 | -                                                    |
| tableStyle         | 封装的 table 的 style                                                | [CSSProperties](https://www.htmlhelp.com/reference/css/properties.html)                                                                                  | -                                                    |
| options            | table 工具栏，设为 false 时不显示.传入 function 会点击时触发         | `{{ density?: boolean, fullScreen: boolean \| function, reload: boolean \| function, setting: boolean \|` [SettingOptionType](#菜单栏-options-配置) `}}` | `{ fullScreen: false, reload: true, setting: true }` |
| search             | 是否显示搜索表单，传入对象时为搜索表单的配置                         | `false` \| [SearchConfig](#search-搜索表单)                                                                                                              | -                                                    |
| defaultSize        | 默认的 size                                                          | SizeType                                                                                                                                                 | -                                                    |
| dateFormatter      | 转化 moment 格式数据为特定类型，false 不做转化                       | `"string"` \| `"number"` \| ((value: Moment, valueType: string) => string \| number) \| `false`                                                          | `"string"`                                           |
| beforeSearchSubmit | 搜索之前进行一些修改                                                 | `(params:T)=>T`                                                                                                                                          | -                                                    |
| onSizeChange       | table 尺寸发生改变                                                   | `(size: 'default' \| 'middle' \| 'small') => void`                                                                                                       | -                                                    |
| type               | pro-table 类型                                                       | `"form"`                                                                                                                                                 | -                                                    |
| form               | antd form 的配置                                                     | [FormProps](https://ant.design/components/form-cn/#API)                                                                                                  | -                                                    |
| onSubmit           | 提交表单时触发                                                       | `(params: U) => void`                                                                                                                                    | -                                                    |
| onReset            | 重置表单时触发                                                       | `() => void`                                                                                                                                             | -                                                    |
| columnEmptyText    | 空值时的显示，不设置时显示 `-`， false 可以关闭此功能                | `string` \| `false`                                                                                                                                      | false                                                |
| tableRender        | 自定义渲染表格函数                                                   | `(props,dom,domList:{ toolbar,alert,table}) => ReactNode`                                                                                                | -                                                    |
| toolbar            | 透传 `ListToolBar` 配置项                                            | [ListToolBarProps](#listtoolbarprops)                                                                                                                    | -                                                    |
| tableExtraRender   | 自定义表格的主体函数                                                 | `(props: ProTableProps<T, U>, dataSource: T[]) => ReactNode;`                                                                                            | -                                                    |
| manualRequest      | 是否需要手动触发首次请求, 配置为 `true` 时不可隐藏搜索表单           | `boolean`                                                                                                                                                | false                                                |
| editable           | 可编辑表格的相关配置                                                 | [TableRowEditable](/components/editable-table#editable-编辑行配置)                                                                                       | -                                                    |
| cardBordered       | Table 和 Search 外围 Card 组件的边框                                 | `boolean \| {search?: boolean, table?: boolean}`                                                                                                         | false                                                |
| debounceTime       | 防抖时间                                                             | `number`                                                                                                                                                 | 10                                                   |
| revalidateOnFocus  | 窗口聚焦时自动重新请求                                               | `boolean`                                                                                                                                                | `true`                                               |
| columnsState       | 受控的列状态，可以操作显示隐藏                                       | `ColumnStateType`                                                                                                                                        | -                                                    |
| ErrorBoundary      | 自带了错误处理功能，防止白屏，`ErrorBoundary=false` 关闭默认错误边界 | `ReactNode`                                                                                                                                              | 内置 ErrorBoundary                                   |

## Columns

> 请求远程数据比较复杂，详细可以看[这里](https://procomponents.ant.design/components/schema#request-%E5%92%8C-params)。

| 属性                                   | 描述                                                                                                                                           | 类型                                                                                                  | 默认值 |
| -------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ------ |
| title                                  | 与 antd 中基本相同，但是支持通过传入一个方法                                                                                                   | `ReactNode \| ((config: ProColumnType<T>, type: ProTableTypes) => ReactNode)`                         | -      |
| tooltip                                | 会在 title 之后展示一个 icon，hover 之后提示一些信息                                                                                           | `string`                                                                                              | -      |
| ellipsis                               | 是否自动缩略                                                                                                                                   | `boolean` \| `{showTitle?: boolean}`                                                                  | -      |
| copyable                               | 是否支持复制                                                                                                                                   | `boolean`                                                                                             | -      |
| valueEnum                              | 值的枚举，会自动转化把值当成 key 来取出要显示的内容                                                                                            | [valueEnum](/components/schema#valueenum)                                                             | -      |
| valueType                              | 值的类型,会生成不同的渲染器                                                                                                                    | [`valueType`](/components/schema#valuetype)                                                           | `text` |
| order                                  | 查询表单中的权重，权重大排序靠前                                                                                                               | `number`                                                                                              | -      |
| fieldProps                             | 查询表单的 props，会透传给表单项,如果渲染出来是 Input,就支持 input 的所有 props，同理如果是 select，也支持 select 的所有 props。也支持方法传入 | `(form,config)=>Record \| Record`                                                                     | -      |
| `formItemProps`                        | 传递给 Form.Item 的配置,可以配置 rules，但是默认的查询表单 rules 是不生效的。需要配置 `ignoreRules`                                            | `(form,config)=>formItemProps` \| `formItemProps`                                                     | -      |
| renderText                             | 类似 table 的 render，但是必须返回 string，如果只是希望转化枚举，可以使用 [valueEnum](/components/schema#valueenum)                            | `(text: any,record: T,index: number,action: UseFetchDataAction<T>) => string`                         | -      |
| render                                 | 类似 table 的 render，第一个参数变成了 dom,增加了第四个参数 action                                                                             | `(text: ReactNode,record: T,index: number,action: UseFetchDataAction<T>) => ReactNode \| ReactNode[]` | -      |
| renderFormItem                         | 渲染查询表单的输入组件                                                                                                                         | `(item,{ type, defaultRender, formItemProps, fieldProps, ...rest },form) => ReactNode`                | -      |
| search                                 | 配置列的搜索相关，false 为隐藏                                                                                                                 | `false` \| `{ transform: (value: any) => any }`                                                       | true   |
| search.transform                       | 转化值的 key, 一般用于时间区间的转化                                                                                                           | `(value: any) => any`                                                                                 | -      |
| [editable](/components/editable-table) | 在编辑表格中是否可编辑的，函数的参数和 table 的 render 一样                                                                                    | `false` \| `(text: any, record: T,index: number) => boolean`                                          | true   |
| colSize                                | 一个表单项占用的格子数量, `占比= colSize*span`，`colSize` 默认为 1 ，`span` 为 8，`span`是`form={{span:8}}` 全局设置的                         | `number`                                                                                              | -      |
| hideInSearch                           | 在查询表单中不展示此项                                                                                                                         | `boolean`                                                                                             | -      |
| hideInTable                            | 在 Table 中不展示此列                                                                                                                          | `boolean`                                                                                             | -      |
| hideInForm                             | 在 Form 中不展示此列                                                                                                                           | `boolean`                                                                                             | -      |
| hideInDescriptions                     | 在 Descriptions 中不展示此列                                                                                                                   | `boolean`                                                                                             | -      |
| filters                                | 表头的筛选菜单项，当值为 true 时，自动使用 valueEnum 生成                                                                                      | `boolean` \| `object[]`                                                                               | false  |
| onFilter                               | 筛选表单，为 true 时使用 ProTable 自带的，为 false 时关闭本地筛选                                                                              | `(value, record) => boolean` \| `false`                                                               | false  |
| request                                | 从服务器请求枚举                                                                                                                               | [request](https://procomponents.ant.design/components/schema#request-%E5%92%8C-params)                | -      |
| initialValue                           | 查询表单项初始值                                                                                                                               | `any`                                                                                                 | -      |
| disable                                | 列设置中`disabled`的状态                                                                                                                       | `boolean` \| `{ checkbox: boolean; }`                                                                 | -      |
