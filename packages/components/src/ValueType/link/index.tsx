import { ProRenderFieldPropsType } from '@ant-design/pro-components';
import Display from './Display';

const link: ProRenderFieldPropsType = {
  render: (text, props) => (
    <Display text={text} fieldProps={props.fieldProps} />
  ),
};

export default link;
