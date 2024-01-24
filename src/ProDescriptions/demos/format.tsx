import dayjs from 'dayjs';
import { ZFProDescriptions } from 'focus-pro';

export default () => {
  return (
    <>
      <ZFProDescriptions
        column={2}
        title="高级定义列表"
        tooltip="包含了从服务器请求，columns等功能"
      >
        <ZFProDescriptions.Item
          label="日期"
          fieldProps={{
            format: 'YYYY.MM.DD',
          }}
          valueType="date"
        >
          {dayjs().valueOf()}
        </ZFProDescriptions.Item>
        <ZFProDescriptions.Item
          label="日期区间"
          fieldProps={{
            format: 'YYYY.MM.DD HH:mm:ss',
          }}
          valueType="dateTimeRange"
        >
          {[dayjs().add(-1, 'd').valueOf(), dayjs().valueOf()]}
        </ZFProDescriptions.Item>
        <ZFProDescriptions.Item
          label="时间"
          fieldProps={{
            format: 'YYYY.MM.DD',
          }}
          valueType="time"
        >
          {dayjs().valueOf()}
        </ZFProDescriptions.Item>

        <ZFProDescriptions.Item
          label="时间日期"
          fieldProps={{
            format: 'YYYY.MM.DD HH:mm:ss',
          }}
          valueType="dateTime"
        >
          {dayjs().valueOf()}
        </ZFProDescriptions.Item>

        <ZFProDescriptions.Item
          label="更新时间"
          fieldProps={{
            format: 'YYYY.MM.DD',
          }}
          valueType="fromNow"
        >
          {dayjs().add(-1, 'month').valueOf()}
        </ZFProDescriptions.Item>
      </ZFProDescriptions>
    </>
  );
};
