/**
 * title: ProForm
 */

import {
  ZFProForm,
  ZFProFormEmail,
  ZFProFormMoney,
  ZFProFormSlider,
} from '@yq/focus-pro';

const ProForm = () => {
  return (
    <ZFProForm
      onFinish={async (v) => {
        alert('提交成功', v);
      }}
    >
      <ZFProFormEmail
        name="email"
        label="email"
        fieldProps={{ defaultValue: 'zz@qq.com', allowClear: true }}
      ></ZFProFormEmail>
      <ZFProFormMoney name="money" label="money"></ZFProFormMoney>
      <ZFProFormSlider name="slider" label="slider"></ZFProFormSlider>
    </ZFProForm>
  );
};

export default ProForm;
