import type {
  ProSchemaValueEnumMap,
  ProSchemaValueEnumObj,
} from '@ant-design/pro-components';
import colors from '../../constant/colors';
import { StatusColorMap } from './constant';

type GetTagColorParam = {
  color?: string;
  status?: string;
  index: number;
};

const isProEnumMap = (
  v: ProSchemaValueEnumMap | ProSchemaValueEnumObj,
): v is ProSchemaValueEnumMap => {
  return Object.prototype.toString.call(v) === '[object Map]';
};

/**
 * 颜色优先级：status > color > 默认
 */
const getTagColor = ({ color, status, index }: GetTagColorParam): string => {
  let tagColor: string;
  if (status && StatusColorMap[status]) {
    tagColor = StatusColorMap[status];
  } else if (color) {
    tagColor = color;
  } else {
    // 既没有传color，也没有传status，根据index分配默认颜色
    tagColor = colors[index];
  }
  return tagColor;
};

export { getTagColor, isProEnumMap };
