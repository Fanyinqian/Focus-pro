import { ProTable } from '@ant-design/pro-components';
import columnRender from './actions/columnRender';
import { ZFProTableProps } from './actions/typing';

type ParamsType = Record<string, any>;

const ZFProTable = <
  DataType extends Record<string, any>,
  Params extends ParamsType,
  ValueType = 'text',
>(
  props: ZFProTableProps<DataType, Params, ValueType>,
) => {
  let { columns = [], ...restProps } = props;

  const resColumns = columnRender<DataType, ValueType>({ columns });

  return <ProTable {...restProps} columns={resColumns}></ProTable>;
};

// 导出所有和table相关的ts类型
export * from './actions/typing';

export default ZFProTable;
