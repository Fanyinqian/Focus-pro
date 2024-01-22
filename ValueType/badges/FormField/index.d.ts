import { ProFieldFCRenderProps, ProFormSelectProps, ProSchemaValueEnumMap, ProSchemaValueEnumObj } from '@ant-design/pro-components';
import { ProFormFieldItemProps } from '@ant-design/pro-form/es/typing';
import { FC } from 'react';
declare const Badges: FC<ProFieldFCRenderProps>;
declare const FormField: FC<ProFormFieldItemProps<ProFormSelectProps, any> & {
    valueEnum?: ProSchemaValueEnumMap | ProSchemaValueEnumObj | undefined;
}>;
export { Badges };
export default FormField;
