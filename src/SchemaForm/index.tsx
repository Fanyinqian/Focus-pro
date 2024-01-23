import { BetaSchemaForm } from '@ant-design/pro-components';
import ZFProConfigProvider from '../ProConfigProvider';
import { ZFFormSchema } from './typing';
const ZFSchemaForm = <T, ValueType = 'text'>(
  props: ZFFormSchema<T, ValueType>,
) => {
  let { columns = [], ...restProps } = props;

  return (
    <ZFProConfigProvider>
      <BetaSchemaForm {...restProps} columns={columns}></BetaSchemaForm>
    </ZFProConfigProvider>
  );
};

export default ZFSchemaForm;
