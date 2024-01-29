import { Divider, Space } from 'antd';
import { FC } from 'react';

type LinkObj = {
  href: string;
  text?: string;
};

interface DisplayProps {
  text: string | LinkObj | (LinkObj | string)[];
  fieldProps?: any;
}

/** 通过是否有href属性判断是否为LinkObj */
const isObjLink = (v: LinkObj | (LinkObj | string)[]): v is LinkObj => {
  // !! 将任意类型转变为布尔型
  return !!(v as LinkObj).href;
};

const Display: FC<DisplayProps> = ({ text, fieldProps }) => {
  if (typeof text === 'string') {
    return (
      <a href={text} target="_blank" rel="noreferrer" {...fieldProps}>
        {text}
      </a>
    );
  }

  if (isObjLink(text)) {
    return (
      <a href={text.href} target="_blank" rel="noreferrer" {...fieldProps}>
        {text.text || '查看'}
      </a>
    );
  }
  // 数组
  if (Array.isArray(text)) {
    return (
      <Space size={0} split={<Divider type="vertical"></Divider>}>
        {text.map((item, index) => {
          // ['aaa.com','bbb.com','ccc.com]
          if (typeof item === 'string') {
            return (
              <a
                key={index}
                href={item}
                target="_blank"
                rel="noreferrer"
                {...fieldProps}
              >
                {item}
              </a>
            );
          }
          // [{text:'链接一',href:'aaa.com'},{text:'链接二',href:'bbb.com'}]
          return (
            <a key={index} href={item.href} target="_blank" rel="noreferrer">
              {item.text || '查看'}
            </a>
          );
        })}
      </Space>
    );
  }

  return null;
};

export default Display;
