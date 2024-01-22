import { ProSchemaValueEnumMap, ProSchemaValueEnumObj } from '@ant-design/pro-components';
import { FC } from 'react';
interface DisplayProps {
    text: string | number | (string | number)[];
    valueEnum?: ProSchemaValueEnumObj | ProSchemaValueEnumMap;
    fieldProps?: any;
}
declare const Display: FC<DisplayProps>;
export default Display;
