import { ProFieldFCMode, ProForm } from '@ant-design/pro-components';
import { EditOrReadOnlyContext } from '@ant-design/pro-form/es/BaseForm/EditOrReadOnlyContext';
import { ProFormFieldItemProps } from '@ant-design/pro-form/es/typing';
import { AutoComplete, AutoCompleteProps } from 'antd';
import { FC, useContext, useState } from 'react';
import Display from '../Display';
export const Email: FC<
  { mode: ProFieldFCMode; fieldProps?: any } & AutoCompleteProps
> = (props) => {
  const [options, setOptions] = useState<{ value: string; label: string }[]>(
    [],
  );
  const { value = '-', mode } = props;
  if (mode === 'read') {
    return <Display text={value} />;
  }
  console.log('props', props.fieldProps);

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
      onSearch={handleSearch}
      placeholder="input here"
      options={options}
      {...props}
    />
  );
};

const FormField: FC<ProFormFieldItemProps<AutoCompleteProps, any>> = (
  props,
) => {
  const mode = useContext(EditOrReadOnlyContext)?.mode as ProFieldFCMode;
  console.log('edit Mode', props);

  return (
    <ProForm.Item {...props}>
      <Email {...props.fieldProps} mode={mode}></Email>
    </ProForm.Item>
  );
};

export default FormField;
