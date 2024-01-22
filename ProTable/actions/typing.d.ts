import { ProColumns, ProTableProps } from '@ant-design/pro-components';
import React from 'react';
import { LinkProps } from 'react-router-dom';
/** 基本操作属性类型 */
type ActionBaseAttr<DataType> = {
    useDisable?: (v: DataType) => boolean;
    text?: React.ReactNode;
    tooltip?: React.ReactNode;
    useHide?: (v: DataType) => boolean;
    collapsed?: boolean;
};
/** 编辑操作属性类型 */
type ActionEditAttr<DataType> = {
    type: 'Edit';
    onEdit: (record: DataType) => void;
} & ActionBaseAttr<DataType>;
/** 删除操作属性类型 */
type ActionDeleteAttr<DataType> = {
    type: 'Delete';
    onDelete: (record: DataType) => void;
} & ActionBaseAttr<DataType>;
/** 导航操作属性类型 */
type ActionNavigateAttr<DataType> = {
    type: 'Navigate';
    target?: '_blank' | '_parent' | '_self' | 'top';
    useNavigate: (record: DataType) => LinkProps | string;
} & ActionBaseAttr<DataType>;
/** 点击操作属性类型 */
type ActionClickAttr<DataType> = {
    type: 'Click';
    onClick: (record: DataType) => void;
} & ActionBaseAttr<DataType>;
type ParamsType = Record<string, any>;
/** 操作的配置类型，可以是编辑、删除、导航和点击操作 */
export type ActionConfig<DataType> = ActionEditAttr<DataType> | ActionDeleteAttr<DataType> | ActionNavigateAttr<DataType> | ActionClickAttr<DataType>;
/** 操作的回调函数类型 */
export type ActionFn<DataType> = (record: DataType) => React.ReactElement;
/** 操作类型，可以是操作配置或操作回调函数 */
export type Action<DataType> = ActionConfig<DataType> | ActionFn<DataType>;
/** 扩展 ProColumns 的类型，添加 actions 属性，该属性用于定义操作表单的actions数组 */
export type ZFProColumns<DataType, ValueType> = ProColumns<DataType, ValueType> & {
    actions?: Action<DataType>[];
};
/** 扩展 ProTableProps 的接口， 添加 columns 属性，该属性用于定义表单的列配置*/
export interface ZFProTableProps<DataType extends Record<string, any>, Params extends ParamsType = ParamsType, ValueType = 'text'> extends ProTableProps<DataType, Params, ValueType> {
    columns: ZFProColumns<DataType, ValueType>[];
}
export {};
