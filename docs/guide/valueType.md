---
nav: 研发
group:
  title: 核心灵魂
  order: 3
title: ValueType - 使用指南
toc: content
order: 2
description: focus-pro 新增的 valueType 使用文档
---

## 维护自定义 ValueType 的组件

focus-pro 在 ProComponents 的基础上，新增了更为丰富的 valueType ，增强开发效率。

## 目录结构

```
├── ValueType
     ├── 类型，如 tags、link
     │    ├── FormItem 该类型的表单组件
     │    └── TableItem 该类型的表格组件
     └── ....
```

## valueType 新增列表

## email

支持的参数与 [a](https://www.runoob.com/tags/tag-a.html) 标签一致。

<code src='@/ValueType/demos/email/EmailTable.tsx'></code>

## tags

表单参数通过`fieldProps`传入，与 [Select](https://ant.design/components/select-cn/) 一致。通过 [valueEnum](http://usc-pro.in.zhihu.com/components/value-type#typescript-%E5%AE%9A%E4%B9%89-1) 生成 form 选项和 table 项展示。

<code src='@/ValueType/demos/tags/TagsTable.tsx'></code>

#### fieldProps

```ts
{
  /** @name 自定义关闭按钮。5.7.0：设置为 `null` 或 `false` 时隐藏关闭按钮 */
  closeIcon?: boolean | ReactNode | false;
  /** @name 标签色 */
  color?: string;
  /** @name 设置图标 */
  icon?: ReactNode;
  /** @name 是否有边框 */
  bordered?: boolean;
  /** @name 关闭时的回调 */
  onClose?: (e) => void;
}
```

#### valueEnumType

```ts
{
  /** @name 演示的文案 */
  text: React.ReactNode;
  /** @name 预定的颜色 */
  status?: string;
  /** @name 自定义的颜色 */
  color?: string;
  /** @name 是否禁用 */
  disabled?: boolean;
};
```

## link

表单项组件参数与 [a](https://www.runoob.com/tags/tag-a.html) 标签一致。

`dataSource` 支持的数据类型

```ts
type LinkObj = {
  href: string;
  text?: string;
};

interface LinkProps {
  data: string | LinkObj | (LinkObj | string)[];
  fieldProps: any;
}
```

<code src='@/ValueType/demos/link/LinkDescription.tsx'></code>

## badges

表单参数与 [Select](https://ant.design/components/select-cn/) 一致。通过 [valueEnum](http://usc-pro.in.zhihu.com/components/value-type#typescript-%E5%AE%9A%E4%B9%89-1) 生成 form 选项和 table 项展示。

<code src='@/ValueType/demos/badges/BadgeTable.tsx'></code>

## SecretKey

密钥生成组件。

:::info{title=注意}
暂不支持 table 的搜索功能
:::

##### API

| 参数      | 说明                | 类型      | 默认值 |
| --------- | ------------------- | --------- | ------ |
| keyLength | 秘钥长度            | `number`  | 16     |
| hide      | 隐藏显示为 \*\*\*\* | `boolean` | true   |

<code src='@/ValueType/demos/secretKey/SecretKeyForm'></code>
