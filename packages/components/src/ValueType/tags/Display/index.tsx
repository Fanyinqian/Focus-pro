import {
  ProSchemaValueEnumMap,
  ProSchemaValueEnumObj,
  ProSchemaValueEnumType,
} from '@ant-design/pro-components';
import { Space, Tag } from 'antd';
import colors from 'focus-pro/constant/colors';
import { FC } from 'react';
import { getTagColor, isProEnumMap } from '../utils';
import styles from './index.module.less';

interface DisplayProps {
  text?: string | number | (string | number)[];
  valueEnum?: ProSchemaValueEnumObj | ProSchemaValueEnumMap;
  fieldProps?: any;
}

const Display: FC<DisplayProps> = (props) => {
  let { text, valueEnum, fieldProps } = props;
  // console.log('valueEnum', valueEnum);
  // console.log(typeof text);
  // 如果有传入默认值，则使用
  if (!text && fieldProps?.defaultValue !== undefined) {
    text = fieldProps.defaultValue;
  }

  if (typeof text === 'string' || typeof text === 'number') {
    if (valueEnum) {
      // 取出text对应的valueEnum对象
      const tag = (
        isProEnumMap(valueEnum) ? valueEnum.get(text) : valueEnum[text]
      ) as ProSchemaValueEnumType;
      const { status, color, text: tagText } = tag || {};

      return (
        <Tag color={getTagColor({ status, color, index: 0 })} {...fieldProps}>
          {tagText || tag || '-'}
        </Tag>
      );
    } else {
      return (
        <Tag color={colors[0]} {...fieldProps}>
          {text}
        </Tag>
      );
    }
  }

  if (Array.isArray(text)) {
    return (
      <Space size={[0, 4]} className={styles.space}>
        {text?.map((v, i) => {
          if (valueEnum) {
            let tag = // valueEnum 有两种表现形式，一种是Map，一种是Object
              (
                isProEnumMap(valueEnum) ? valueEnum.get(v) : valueEnum[v]
              ) as ProSchemaValueEnumType;

            const { status, color, text } = tag || {};
            return (
              <Tag
                color={getTagColor({ status, color, index: i })}
                key={i}
                {...fieldProps}
              >
                {text}
              </Tag>
            );
          }

          return (
            <Tag color={colors[i]} key={i} {...fieldProps}>
              {v}
            </Tag>
          );
        })}
      </Space>
    );
  }

  return null;
};

export default Display;
