---
title: ZFProFormFields - 表单项
nav: 组件
group:
  title: 数据录入
  # order: 0
toc: content
order: 2
---

# ZFProFormFields - 表单项

```jsx | pure
import { ZFProFormText } from '@fe/usc-pro';
```

一个表单除了 Form 之外还是需要一系列的表单项，ZFProForm 自带了数量可观的表单项, 这些组件本质上是 Form.Item 和 组件的结合，我们可以把他们当成一个 FormItem 来使用，并且支持各种 `props`。每个表单项都支持 `fieldProps` 属性来支持设置输入组件的 `props`。 我们支持了 `placeholder` 的透传，你可以直接在组件上设置 `placeholder`。

每个表单项同时也支持了 readonly ，不同的组件会有不同的只读样式，与 `disable` 相比 `readonly` 展示更加友好。生成的 dom 也更小，比如 ProFormDigit 会自动格式化小数位数。

ZFProFormText 是 FormItem + Input 的产物，可以类比于以下的代码：

```jsx | pure
const ZFProFormText = (props) => {
  return (
    <ProForm.Item {...props}>
      <Input placeholder={props.placeholder} {...props.fieldProps} />
    </ProForm.Item>
  );
};
```

所以我们给 ZFProFormText 设置的 props 其实是 Form.Item 的，fieldProps 才是包含的组件的，要切记。

## 组件列表

| 组件                                                                             | 使用场景                                                                                                    |
| -------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| [ZFProFormText](https://ant.design/components/input-cn/#Input.Password)          | 用于输入各类文本                                                                                            |
| [ZFProFormDigit](https://ant.design/components/input-number-cn/)                 | 用于输入数字，它自带了一个格式化(保留 2 位小数，最小值为 0)，有需要你可以关掉它。                           |
| [ZFProFormText.Password](https://ant.design/components/input-cn/#Input.Password) | 用于输入密码                                                                                                |
| [ZFProFormTextArea](https://ant.design/components/input-cn/#Input.Password)      | 用于输入多行文本                                                                                            |
| ProFormCaptcha                                                                   | 用于输入验证码， 一般需要与发送验证码接口一起使用                                                           |
| [ZFProFormDatePicker](https://ant.design/components/date-picker-cn/)             | 日期选择器用于输入日期                                                                                      |
| [ZFProFormDateTimePicker](https://ant.design/components/date-picker-cn/)         | 日期+时间选择器，用于输入日期和时间                                                                         |
| [ZFProFormDateRangePicker](https://ant.design/components/date-picker-cn/)        | 日期区间选择器用于输入一个日期区间                                                                          |
| [ZFProFormDateTimeRangePicker](https://ant.design/components/date-picker-cn/)    | 日期+时间区间选择器，用于输入一个日期+时间的区间                                                            |
| [ZFProFormSelect](https://ant.design/components/select-cn/)                      | 支持 `request` 和 `valueEnum` 两种方式来生成子项，用于从两项以上中选择一项                                  |
| [ZFProFormTreeSelect](https://ant.design/components/tree-select-cn/)             | 支持 `request` 和 `valueEnum` 两种方式来生成子项，用于从两项以上中选择一项                                  |
| [ZFProFormCheckbox](https://ant.design/components/checkbox-cn/)                  | 在 Checkbox 基础上支持了 layout，也支持 `request` 和 `valueEnum` 两种方式来生成子项                         |
| [ZFProFormRadio.Group](https://ant.design/components/radio-cn/)                  | 在 Radio 基础上也支持 `request` 和 `valueEnum` 两种方式来生成子项，用于单选某项，但是可以展示出来所有选项。 |
| [ZFProFormSlider](https://ant.design/components/slider-cn/)                      | 当用户需要在数值区间/自定义区间内进行选择时，可为连续或离散值。                                             |
| [ZFProFormSwitch](https://ant.design/components/switch-cn/)                      | 用于输入互斥的两个选项，一般是 true 和 false                                                                |
| [ZFProFormUploadButton](https://ant.design/components/upload-cn/)                | 按钮样式的上传文件                                                                                          |
| [ZFProFormUploadDragger](https://ant.design/components/upload-cn/)               | 区域的上传文件，一般用于突出上传文件的表单中                                                                |
| ProFormMoney                                                                     | 通用金额输入组件                                                                                            |
| [ZFProFormSegmented](https://ant.design/components/segmented-cn/)                | 分段控制器                                                                                                  |
| ZFProFormEmail                                                                   | 由于输入邮箱                                                                                                |
