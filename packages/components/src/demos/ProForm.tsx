/**
 * title: ProForm
 */

import {
  ZFProForm,
  ZFProFormEmail,
  ZFProFormMoney,
  ZFProFormSlider,
  ZFProFormTags,
} from 'focus-pro';

const ProForm = () => {
  return (
    <ZFProForm
      onFinish={async (v) => {
        alert('提交成功', v);
      }}
      //   readonly
      //   initialValues={{tags: [0],email:'163.qq.com'}}
      style={{ maxWidth: 600 }}
    >
      <ZFProFormEmail
        name="email"
        label="email"
        fieldProps={{
          defaultValue: 'yinqian@qq.com',
          allowClear: true,
          placeholder: '请输入',
        }}
      ></ZFProFormEmail>
      <ZFProFormMoney name="money" label="money"></ZFProFormMoney>
      <ZFProFormSlider name="slider" label="slider"></ZFProFormSlider>
      <ZFProFormTags
        label="tags"
        name="tags"
        valueEnum={{
          0: { text: '标签1', status: 'P0' },
          1: { text: '标签2', status: 'P1' },
        }}
      ></ZFProFormTags>
    </ZFProForm>
  );
};

export default ProForm;
