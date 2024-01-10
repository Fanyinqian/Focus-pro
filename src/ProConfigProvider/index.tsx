import { ProConfigProvider } from '@ant-design/pro-components';
import React from 'react';
import valueTypeMap from '../ValueType';

const ZFProConfigProvider: typeof ProConfigProvider = (props) => {
  const { children, ...rest } = props;

  return (
    <ProConfigProvider valueTypeMap={valueTypeMap} hashed={false} {...rest}>
      {React.Children.map(children, (c) => c)}
    </ProConfigProvider>
  );
};

export default ZFProConfigProvider;
