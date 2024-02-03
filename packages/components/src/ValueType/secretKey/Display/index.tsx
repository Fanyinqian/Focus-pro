import { CopyOutlined } from '@ant-design/icons';
import { Button, message } from 'antd';
import copy from 'copy-to-clipboard';
import { FC } from 'react';

const Display: FC<{ text: any; hide?: boolean }> = ({ text, hide = true }) => {
  const onCopy = () => {
    if (text) {
      copy(text);
      message.success('复制成功');
    }
  };

  return (
    <div>
      {hide ? '*********' : text || '-'}
      <Button
        type="link"
        size="small"
        icon={<CopyOutlined />}
        onClick={onCopy}
      ></Button>
    </div>
  );
};

export default Display;
