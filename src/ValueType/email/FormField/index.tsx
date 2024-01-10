import { ProForm } from '@ant-design/pro-components';
import { ProFormFielsItemProps } from '@ant-design/pro-form/es/typing';
import { AutoComplete, AutoCompleteProps } from 'antd';
import React, { FC, useState } from 'react';

export const Email: FC<AutoCompleteProps> = () => {
  const [options, setOptions] = useState<{ value: string; label: string }[]>(
    [],
  );

  const handleSearch = (value: string) => {
    let res: { value: string; label: string }[] = [];
    if (!value || value.indexOf('@') >= 0) {
      res = [];
    } else {
      res = ['gmail.com', '163.com', 'qq.com'].map((domain) => ({
        value,
        label: `${value}@${domain}`,
      }));
    }
    setOptions(res);
  };

  return (
    <AutoComplete
      style={{ width: 200 }}
      onSearch={handleSearch}
      placeholder="input here"
      options={options}
    />
  );
};

const FormField: FC<ProFormFielsItemProps<AutoCompleteProps, any>> = (
  props,
) => {
  return (
    <ProForm.Item {...props}>
      <Email {...props.fieldProps}></Email>
    </ProForm.Item>
  );
};

export default FormField;
