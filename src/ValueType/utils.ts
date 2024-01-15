import type {
  ProSchemaValueEnumMap,
  ProSchemaValueEnumObj,
} from '@ant-design/pro-components';
import { StatusColorMap } from '../constant';
import colors from '../constant/colors';

type GetTagColorParam = {
  color?: string;
  status?: string;
  index?: number;
};

const isProEnumMap = (
  v: ProSchemaValueEnumMap | ProSchemaValueEnumObj,
): v is ProSchemaValueEnumMap => {
  return Object.prototype.toString.call(v) === '[object Map]';
};

/**
 * 颜色优先级：status > color > 默认
 */
const getTagColor = ({
  color,
  status,
  index = 0,
}: GetTagColorParam): string => {
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
