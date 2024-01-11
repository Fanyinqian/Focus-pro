import {
  ProSchemaValueEnumMap,
  ProSchemaValueEnumObj,
  ProSchemaValueEnumType,
} from '@ant-design/pro-components';
import colors from '@yq/focus-pro/constant/colors';
import { Space, Tag } from 'antd';
import { FC } from 'react';
import { getTagColor, isProEnumMap } from '../utils';
import styles from './index.module.less';

interface DisplayProps {
  text: string | number | (string | number)[];
  valueEnum?: ProSchemaValueEnumObj | ProSchemaValueEnumMap;
}

const Display: FC<DisplayProps> = ({ text, valueEnum }) => {
  console.log('text', text);
  console.log('valueEnum', valueEnum);
  console.log(typeof text);
  if (typeof text === 'string' || typeof text === 'number') {
    if (valueEnum) {
      // 取出text对应的valueEnum对象
      const tag = (
        isProEnumMap(valueEnum) ? valueEnum.get(text) : valueEnum[text]
      ) as ProSchemaValueEnumType;
      const { status, color, text: tagText } = tag || {};
      return (
        <Tag color={getTagColor({ status, color, index: 0 })}>
          {tagText || tag}
        </Tag>
      );
    } else {
      return <Tag color={colors[0]}>{text}</Tag>;
    }
  }

  if (Array.isArray(text) && valueEnum) {
    // valueEnum 有两种表现形式，一种是Map，一种是Object
    return (
      <Space size={[0, 4]} className={styles.space}>
        {text?.map((v, i) => {
          let tag = (
            isProEnumMap(valueEnum) ? valueEnum.get(v) : valueEnum[v]
          ) as ProSchemaValueEnumType;
          const { status, color, text } = tag;
          return (
            <Tag color={getTagColor({ status, color, index: i })} key={i}>
              {text}
            </Tag>
          );
        })}
      </Space>
    );
  }

  if (Array.isArray(text)) {
    return (
      <Space size={[0, 4]}>
        {text?.map((v, i) => (
          <Tag color={colors[i]} key={i}>
            {v}
          </Tag>
        ))}
      </Space>
    );
  }

  return null;
};

export default Display;
