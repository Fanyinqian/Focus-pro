import { Button } from 'antd';
import type { ProDescriptionsActionType } from 'focus-pro';
import { ZFProDescriptions } from 'focus-pro';
import { useRef } from 'react';

export default () => {
  const actionRef = useRef<ProDescriptionsActionType>();
  return (
    <ZFProDescriptions
      actionRef={actionRef}
      title="高级定义列表 request"
      request={async () => {
        return Promise.resolve({
          success: true,
          data: { id: '这是一段文本', date: '20200730', money: '12121' },
        });
      }}
      extra={<Button type="link">修改</Button>}
    >
      <ZFProDescriptions.Item dataIndex="id" />
      <ZFProDescriptions.Item dataIndex="date" label="日期" valueType="date" />
      <ZFProDescriptions.Item
        label="money"
        dataIndex="money"
        valueType="money"
      />
      <ZFProDescriptions.Item label="文本" valueType="option">
        <Button
          type="primary"
          onClick={() => {
            actionRef.current?.reload();
          }}
          key="reload"
        >
          刷新
        </Button>
        <Button key="rest">重置</Button>
      </ZFProDescriptions.Item>
    </ZFProDescriptions>
  );
};
