---
nav: 研发
group:
  title: 架构设计
  order: 2
title: Schema - 通用配置
toc: content
order: 1
---

# 通用配置

基于配置生成页面，更加高效的开发方式。

## valueType

valueType 是通用配置的核心，focus pro 会根据 valueType 来映射成不同的表单项或表格数据，详情见[valueType](/guide/pre-value-type)

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

<code src="@/demos/SchemaForm.tsx"></code>

### ProTable 场景

<code src="@/demos/ProTable.tsx"></code>

示例中用了 `date`、`money`、`slider`、`email` 四个 valueType，可以看到他们在 Form 中渲染出了不同的表单项以及在 Table 中渲染了不同的数据展示。

### ProDescription 场景

<code src="@/demos/ProDescriptions.tsx"></code>

### ProForm 场景

<code src="@/demos/ProForm.tsx"></code>

每个 valueType 对应一种数据展示，其实本质就每个 valueType 对应一个组件，比如 `text` 对应 `ProFormText` 组件，`money` 对应 `ProFormMoney` 组件，规律 `xxx` 对应 `ProFormXxx` 组件。
如果 SchemaForm 能满足需求，不建议使用 ProForm 来开发表单，如果必须使用也做到 valueType 的收敛。
