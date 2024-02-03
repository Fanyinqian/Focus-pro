/**
 * title: ProForm
 */

import { Switch } from 'antd';
import {
  ZFProForm,
  ZFProFormEmail,
  ZFProFormMoney,
  ZFProFormSecretKey,
  ZFProFormSlider,
  ZFProFormTags,
} from 'focus-pro';
import { useState } from 'react';

const ProForm = () => {
  const [readonly, setReadonly] = useState(false);

  return (
    <div style={{ padding: 24 }}>
      <Switch
        style={{
          marginBlockEnd: 16,
        }}
        checked={readonly}
        checkedChildren="编辑"
        unCheckedChildren="只读"
        onChange={setReadonly}
      />
      <ZFProForm
        onFinish={async (v) => {
          console.log(v);
        }}
        readonly={readonly}
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
          fieldProps={{
            defaultValue: 0,
          }}
        ></ZFProFormTags>
        <ZFProFormSecretKey
          label="secretKey"
          name="secretKey"
          fieldProps={{ hide: false }}
        ></ZFProFormSecretKey>
      </ZFProForm>
    </div>
  );
};

export default ProForm;
