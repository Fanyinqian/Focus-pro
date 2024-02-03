import { CopyOutlined } from '@ant-design/icons';
import {
  ProFieldFCMode,
  ProFieldFCRenderProps,
  ProForm,
} from '@ant-design/pro-components';
import { EditOrReadOnlyContext } from '@ant-design/pro-form/es/BaseForm/EditOrReadOnlyContext';
import { ProFormFieldItemProps } from '@ant-design/pro-form/es/typing';
import { Button, message } from 'antd';
import copy from 'copy-to-clipboard';
import { FC, useContext, useState } from 'react';
import { generateRandomkey } from '../utils';

const SecretKey: FC<ProFieldFCRenderProps> = (props) => {
  const {
    fieldProps: { keyLength = 16, onChange = () => {}, hide = true } = {},
  } = props;

  const [secretKey, setSecretKey] = useState<string>();
  /**生成密钥 */
  const onGenerateKey = () => {
    // 随机生成密钥
    const randomKey = generateRandomkey(keyLength);
    setSecretKey(randomKey);
    // 切换密钥的方法，传参为randomKey
    onChange(randomKey);
  };

  const onCopy = () => {
    if (secretKey) {
      copy(secretKey);
      message.success('复制成功');
    }
  };

  if (!secretKey) return <a onClick={onGenerateKey}>点击生成密钥</a>;
  return (
    <div>
      {hide ? '*********' : secretKey}
      <Button
        type="link"
        size="small"
        icon={<CopyOutlined />}
        onClick={onCopy}
      ></Button>
    </div>
  );
};

const FormField: FC<
  ProFormFieldItemProps<{ keyLength?: number; hide?: boolean }, any>
> = (props) => {
  const mode = useContext(EditOrReadOnlyContext)?.mode as ProFieldFCMode;
  return (
    <ProForm.Item required {...props}>
      <SecretKey {...props} mode={mode} text=""></SecretKey>
    </ProForm.Item>
  );
};
export { SecretKey };

export default FormField;
