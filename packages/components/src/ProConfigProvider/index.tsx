import {
  ProConfigProvider,
  ProRenderFieldPropsType,
} from '@ant-design/pro-components';
import { ConfigProvider } from 'antd';
import React from 'react';
import valueTypeMap from '../ValueType';
// import theme from '../Theme';
import type { ThemeConfig } from 'antd';

interface ProviderConfigProps {
  children: React.ReactNode;
  autoClearCache?: boolean;
  valueTypeMap?: Record<string, ProRenderFieldPropsType>;
  hashed?: boolean;
  dark?: boolean;
  prefixCls?: string;
  theme?: ThemeConfig;
}

const ZFProConfigProvider = (props: ProviderConfigProps) => {
  const { children, theme, ...rest } = props;

  return (
    <ConfigProvider theme={theme}>
      <ProConfigProvider valueTypeMap={valueTypeMap} hashed={false} {...rest}>
        {React.Children.map(children, (c) => c)}
      </ProConfigProvider>
    </ConfigProvider>
  );
};

export default ZFProConfigProvider;
