import { ProRenderFieldPropsType } from '@ant-design/pro-components';
import Display from './Display';
import { Tags } from './FormField';

const tags: ProRenderFieldPropsType = {
  // 只读模式：mode == read
  render: (text, props) => <Display text={text} valueEnum={props?.valueEnum} />,
  // 编辑模式：mode == edit or update，包括 table 的搜索框
  renderFormItem: (text, props) => <Tags {...props} />,
};

export default tags;
