import { ZFProColumns } from './typing';
declare const columnRender: <DataType, valueType>(props: {
    columns: ZFProColumns<DataType, valueType>[];
}) => ZFProColumns<DataType, valueType>[];
export default columnRender;
