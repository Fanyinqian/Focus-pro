import { ProDescriptions } from '@ant-design/pro-components';
import React from 'react';
const ZFProDesciption: React.FC<{ title: string }> = (props) => (
  <>
    <h4>{props.title}</h4>
    <ProDescriptions title={props.title} />
  </>
);

export default ZFProDesciption;