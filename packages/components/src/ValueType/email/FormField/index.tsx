import { ProFieldFCMode, ProForm } from '@ant-design/pro-components';
import { EditOrReadOnlyContext } from '@ant-design/pro-form/es/BaseForm/EditOrReadOnlyContext';
import { ProFormFieldItemProps } from '@ant-design/pro-form/es/typing';
import { AutoComplete, AutoCompleteProps } from 'antd';
import { FC, useContext, useState } from 'react';
import Display from '../Display';

const Email: FC<
  { mode?: ProFieldFCMode; fieldProps?: any } & AutoCompleteProps
> = (props) => {
  const [options, setOptions] = useState<{ value: string; label: string }[]>(
    [],
  );

  // 当来源是renderFormItem而非FormField时mode为undefined
  const { mode = '', value = '-' } = props;
  // console.log('eeee', mode, props);
  // 针对 FormField 存在两种mode模式所特意做的判断
  if (mode === 'read') {
    return <Display text={value} />;
  }

  const handleSearch = (value: string) => {
    let res: { value: string; label: string }[] = [];
    if (!value || value.indexOf('@') >= 0) {
      res = [];
    } else {
      res = ['gmail.com', '163.com', 'qq.com'].map((domain) => ({
        value: `${value}@${domain}`,
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

/**
 * FormField组件存在只读和编辑两种情况，所以必须传mode
 *
 * */
const FormField: FC<ProFormFieldItemProps<AutoCompleteProps, any>> = (
  props,
) => {
  const mode = useContext(EditOrReadOnlyContext)?.mode as ProFieldFCMode;
  // console.log('PROPS', props);
  return (
    <ProForm.Item {...props}>
      <Email {...props.fieldProps} mode={mode}></Email>
    </ProForm.Item>
  );
};

export { Email };

export default FormField;
