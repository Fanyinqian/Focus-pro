import type { ProSchemaValueEnumMap, ProSchemaValueEnumObj } from '@ant-design/pro-components';
type GetTagColorParam = {
    color?: string;
    status?: string;
    index?: number;
};
declare const isProEnumMap: (v: ProSchemaValueEnumMap | ProSchemaValueEnumObj) => v is ProSchemaValueEnumMap;
/**
 * 颜色优先级：status > color > 默认
 */
declare const getTagColor: ({ color, status, index, }: GetTagColorParam) => string;
export { getTagColor, isProEnumMap };
