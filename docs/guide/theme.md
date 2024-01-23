---
nav: 研发
group:
  title: 定制主题
  order: 4
title: theme - 主题设计
toc: content
order: 1
---

Focus Pro 沿用了 Ant Design 的主题设计方案，以满足业务和品牌上多样化的视觉需求，详情见[antd 官网](https://ant.design/docs/react/customize-theme-cn)

以下是定制主题的具体步骤：

### 调试主题

Focus Pro 提供了帮助用户调试主题的工具：[主题编辑器](/theme-editor)

你可以使用此工具自由地修改 Design Token，以达到你对主题的期望。

### 主题配置

复制主题编辑器的 JSON 模板如下：

```
{
  "token": {
    "colorPrimary": "#fbef4d", // 品牌色
    "colorInfo": "#fbef4d", // 信息色
    "borderRadius": 5, // 圆角
    "fontSize": 16, // 字体大小
    "wireframe": true // 线框化
  }
}
```

再通过粘贴到组件的`theme`属性中

### 全局化配置

在应用的入口处进行全局化配置，ZFProConfigProvider 使用 React 的 context 特性，只需在应用外围包裹一次，样式即可全局生效。

```jsx | pure
import { ZFProConfigProvider } from 'focus-pro';

const Entry = () => (
  <ZFProConfigProvider
    theme={{
      token: {
        colorPrimary: '#fbef4d',
        colorInfo: '#fbef4d',
        borderRadius: 5,
        fontSize: 16,
        wireframe: true,
      },
    }}
  >
    <App />
  </ZFProConfigProvider>
);
```

<code src="./demos/themeSchemaForm.tsx"><code>
