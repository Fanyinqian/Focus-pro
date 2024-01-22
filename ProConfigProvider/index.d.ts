import { ProRenderFieldPropsType } from '@ant-design/pro-components';
import React from 'react';
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
declare const ZFProConfigProvider: (props: ProviderConfigProps) => import("react/jsx-runtime").JSX.Element;
export default ZFProConfigProvider;
