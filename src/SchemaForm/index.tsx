import { BetaSchemaForm } from '@ant-design/pro-components';
import ZFProConfigProvider from '../ProConfigProvider';
import { ZFFormSchema } from './typing';

const ZFSchemaForm = <T, ValueType = 'text'>(
  props: ZFFormSchema<T, ValueType> | any,
) => {
  let { columns = [], ...restProps } = props;

  // 需要使用 getItems 生成的组件
  //   const advancedValueType = ['compact'];

  //   const newColumns = useMemo(() => {
  //     const newColumns = cloneDeep(columns);
  //     const getColumns = (
  //       columns:
  //         | ProFormColumnsType<T, valueType>[]
  //         | ProFormColumnsType<T, valueType>[][],
  //     ) => {
  //       columns.forEach((c) => {
  //         if (Array.isArray(c)) {
  //           getColumns(c);
  //           return;
  //         }
  //         const { valueType, renderFormItem } = c;
  //         if (
  //           typeof valueType === 'string' &&
  //           advancedValueType.includes(valueType) &&
  //           !renderFormItem
  //         ) {
  //           c.renderFormItem = () => {
  //             return <Advanced columns={[c]}></Advanced>;
  //           };
  //         }
  //       });
  //     };
  //     getColumns(newColumns);
  //     return newColumns;
  //   }, [columns]);

  return (
    <ZFProConfigProvider>
      <BetaSchemaForm {...restProps} columns={columns}></BetaSchemaForm>
    </ZFProConfigProvider>
  );
};

export default ZFSchemaForm;
