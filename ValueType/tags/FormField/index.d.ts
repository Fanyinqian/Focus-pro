import { ProFieldFCRenderProps, ProFormSelectProps, ProSchemaValueEnumMap, ProSchemaValueEnumObj } from '@ant-design/pro-components';
import { ProFormFieldItemProps } from '@ant-design/pro-form/es/typing';
import { FC } from 'react';
declare const Tags: FC<ProFieldFCRenderProps>;
declare const FormField: FC<ProFormFieldItemProps<ProFormSelectProps, any> & {
    valueEnum?: ProSchemaValueEnumMap | ProSchemaValueEnumObj | undefined;
}>;
export { Tags };
export default FormField;
