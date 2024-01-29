import { Button, ButtonProps } from 'antd';
import React from 'react';

const LinkButton = (props: React.PropsWithChildren<ButtonProps>) => {
  const { children, ...restProps } = props;
  return (
    <Button type="link" style={{ paddingInline: 0 }} {...restProps}>
      {React.Children.map(children, (c) => c)}
    </Button>
  );
};

export default LinkButton;
