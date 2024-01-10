import { ProRenderFieldPropsType } from '@ant-design/pro-components';
import React from 'react';
import Display from './Display';
import { Email } from './FormField';

const email: ProRenderFieldPropsType = {
  render: (text) => <Display text={text} />,
  renderFormItem: (text, props) => <Email {...props.fieldProps} />,
};

export default email;
