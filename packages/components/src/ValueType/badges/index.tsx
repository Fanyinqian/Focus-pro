import { ProRenderFieldPropsType } from '@ant-design/pro-components';
import Display from './Display';
import { Badges } from './FormField';

const badges: ProRenderFieldPropsType = {
  render: (text, props) => (
    <Display
      text={text}
      valueEnum={props?.valueEnum}
      fieldProps={props?.fieldProps}
    />
  ),
  renderFormItem: (text, props) => <Badges {...props} />,
};

export default badges;
