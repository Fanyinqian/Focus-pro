import { ProRenderFieldPropsType } from '@ant-design/pro-components';
import Display from './Display';
import { Email } from './FormField';

const email: ProRenderFieldPropsType = {
  render: (text) => <Display text={text} />,
  renderFormItem: (text, props) => <Email {...props} />,
};

export default email;
