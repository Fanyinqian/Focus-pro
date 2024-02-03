import { ProRenderFieldPropsType } from '@ant-design/pro-provider';
import Display from './Display';
import { SecretKey } from './FormField';

const secretKey: ProRenderFieldPropsType = {
  render: (text, props) => <Display text={text} hide={props.fieldProps.hide} />,
  renderFormItem: (text, props) => <SecretKey {...props} />,
};

export default secretKey;
