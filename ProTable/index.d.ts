import { ZFProTableProps } from './actions/typing';
type ParamsType = Record<string, any>;
declare const ZFProTable: <DataType extends Record<string, any>, Params extends ParamsType, ValueType = "text">(props: ZFProTableProps<DataType, Params, ValueType>) => import("react/jsx-runtime").JSX.Element;
export * from './actions/typing';
export default ZFProTable;
