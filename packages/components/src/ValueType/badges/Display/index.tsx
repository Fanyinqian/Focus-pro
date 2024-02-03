import {
  ProSchemaValueEnumMap,
  ProSchemaValueEnumObj,
  ProSchemaValueEnumType,
} from '@ant-design/pro-components';
import { Badge, Space } from 'antd';
import colors from 'focus-pro/constant/colors';
import { FC } from 'react';
import { getTagColor, isProEnumMap } from '../../tags/utils';
import styles from './index.module.less';

interface DisplayProps {
  text: string | number | (string | number)[];
  valueEnum?: ProSchemaValueEnumObj | ProSchemaValueEnumMap;
  fieldProps?: any;
}

const Display: FC<DisplayProps> = ({ text, valueEnum, fieldProps }) => {
  if (typeof text === 'string' || typeof text === 'number') {
    if (valueEnum) {
      // 取出text对应的valueEnum对象
      const enumData = (
        isProEnumMap(valueEnum) ? valueEnum.get(text) : valueEnum[text]
      ) as ProSchemaValueEnumType;

      const { status, color, text: badText } = enumData || {};
      return (
        <Badge
          text={badText || enumData}
          color={getTagColor({ status, color, index: 0 })}
          {...fieldProps}
        />
      );
    } else {
      return <Badge text={text} color={colors[0]} {...fieldProps} />;
    }
  }

  if (Array.isArray(text)) {
    return (
      <Space size={[8, 4]} className={styles.space}>
        {text?.map((v, i) => {
          if (valueEnum) {
            let enumData = // valueEnum 有两种表现形式，一种是Map，一种是Object
              (
                isProEnumMap(valueEnum) ? valueEnum.get(v) : valueEnum[v]
              ) as ProSchemaValueEnumType;
            const { status, color, text } = enumData;
            return (
              <Badge
                text={text}
                color={getTagColor({ status, color, index: i })}
                key={i}
                {...fieldProps}
              />
            );
          }

          return <Badge text={v} color={colors[i]} key={i} {...fieldProps} />;
        })}
      </Space>
    );
  }

  return null;
};

export default Display;
