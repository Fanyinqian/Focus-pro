import { Button } from 'antd';
import dayjs from 'dayjs';
import { ZFProDescriptions } from 'focus-pro';

export default () => {
  return (
    <ZFProDescriptions
      column={2}
      title="高级定义列表"
      tooltip="包含了从服务器请求，columns等功能"
    >
      <ZFProDescriptions.Item valueType="option">
        <Button key="primary" type="primary">
          提交
        </Button>
      </ZFProDescriptions.Item>
      <ZFProDescriptions.Item
        span={2}
        valueType="text"
        contentStyle={{
          maxWidth: '80%',
        }}
        renderText={(_) => {
          return _ + _;
        }}
        ellipsis
        label="文本"
      >
        这是一段很长很长超级超级长的无意义说明文本并且重复了很多没有意义的词语，就是为了让它变得很长很长超级超级长
      </ZFProDescriptions.Item>
      <ZFProDescriptions.Item
        label="金额"
        tooltip="仅供参考，以实际为准"
        valueType="money"
      >
        100
      </ZFProDescriptions.Item>
      <ZFProDescriptions.Item label="百分比" valueType="percent">
        100
      </ZFProDescriptions.Item>
      <ZFProDescriptions.Item
        label="选择框"
        valueEnum={{
          all: { text: '全部', status: 'Default' },
          open: {
            text: '未解决',
            status: 'Error',
          },
          closed: {
            text: '已解决',
            status: 'Success',
          },
          processing: {
            text: '解决中',
            status: 'Processing',
          },
        }}
      >
        open
      </ZFProDescriptions.Item>
      <ZFProDescriptions.Item
        label="远程选择框"
        request={async () => [
          { label: '全部', value: 'all' },
          { label: '未解决', value: 'open' },
          { label: '已解决', value: 'closed' },
          { label: '解决中', value: 'processing' },
        ]}
      >
        closed
      </ZFProDescriptions.Item>
      <ZFProDescriptions.Item label="进度条" valueType="progress">
        40
      </ZFProDescriptions.Item>
      <ZFProDescriptions.Item label="日期时间" valueType="dateTime">
        {dayjs().valueOf()}
      </ZFProDescriptions.Item>
      <ZFProDescriptions.Item label="日期" valueType="date">
        {dayjs().valueOf()}
      </ZFProDescriptions.Item>
      <ZFProDescriptions.Item label="日期区间" valueType="dateTimeRange">
        {[dayjs().add(-1, 'd').valueOf(), dayjs().valueOf()]}
      </ZFProDescriptions.Item>
      <ZFProDescriptions.Item label="时间" valueType="time">
        {dayjs().valueOf()}
      </ZFProDescriptions.Item>
      <ZFProDescriptions.Item label="代码块" valueType="code">
        {`
yarn run v1.22.0
$ eslint --format=pretty ./packages
Done in 9.70s.
          `}
      </ZFProDescriptions.Item>
      <ZFProDescriptions.Item label="JSON 代码块" valueType="jsonCode">
        {`{
  "compilerOptions": {
    "target": "esnext",
    "moduleResolution": "node",
    "jsx": "preserve",
    "esModuleInterop": true,
    "experimentalDecorators": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noImplicitReturns": true,
    "suppressImplicitAnyIndexErrors": true,
    "declaration": true,
    "skipLibCheck": true
  },
  "include": ["**/src", "**/docs", "scripts", "**/demo", ".eslintrc.js"]
}
`}
      </ZFProDescriptions.Item>
    </ZFProDescriptions>
  );
};