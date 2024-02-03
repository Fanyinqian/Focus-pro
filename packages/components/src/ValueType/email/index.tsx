import { ProRenderFieldPropsType } from '@ant-design/pro-components';
import Display from './Display';
import { Email } from './FormField';

const email: ProRenderFieldPropsType = {
  // 只读模式：mode == read
  render: (text) => <Display text={text} />,
  // 编辑模式：mode == edit or update，包括 table 的搜索框
  renderFormItem: (text, props) => <Email {...props.fieldProps} />,
};

export default email;
