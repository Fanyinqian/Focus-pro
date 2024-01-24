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
          data: {
            info: {
              id: '这是一段文本',
              date: '20200730',
              money: '12121',
            },
          },
        });
      }}
      editable={{
        onSave: async (keypath, newInfo, oriInfo) => {
          console.log(keypath, newInfo, oriInfo);
          return true;
        },
      }}
    >
      <ZFProDescriptions.Item dataIndex={['info', 'id']} />
      <ZFProDescriptions.Item
        dataIndex={['info', 'date']}
        label="日期"
        valueType="date"
      />
      <ZFProDescriptions.Item
        label="money"
        dataIndex={['info', 'money']}
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
