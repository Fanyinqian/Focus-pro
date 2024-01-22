import { ProFieldFCMode } from '@ant-design/pro-components';
import { ProFormFieldItemProps } from '@ant-design/pro-form/es/typing';
import { AutoCompleteProps } from 'antd';
import { FC } from 'react';
export declare const Email: FC<{
    mode: ProFieldFCMode;
    fieldProps?: any;
} & AutoCompleteProps>;
declare const FormField: FC<ProFormFieldItemProps<AutoCompleteProps, any>>;
export default FormField;
