import {
  ProFieldFCMode,
  ProFieldFCRenderProps,
  ProForm,
  ProFormSelectProps,
  ProSchemaValueEnumMap,
  ProSchemaValueEnumObj,
} from '@ant-design/pro-components';
import { EditOrReadOnlyContext } from '@ant-design/pro-form/es/BaseForm/EditOrReadOnlyContext';
import { ProFormFieldItemProps } from '@ant-design/pro-form/es/typing';
import { Select } from 'antd';
import { FC, useContext } from 'react';
import Display from '../Display';
import styles from './index.module.less';

const Badges: FC<ProFieldFCRenderProps> = (props) => {
  const { valueEnum, mode, value, fieldProps } = props;
  // 组件的 mode 有三种：read、edit、update
  if (mode === 'read') {
    return (
      <Display
        text={value}
        valueEnum={valueEnum}
        fieldProps={fieldProps}
      ></Display>
    );
  }
  // Select 的 mode 有两种模式：mutiple 和 tags
  const selectMode = fieldProps?.mode || '';
  // 二者都可以多选，区别在于tags支持用户自由输入多选选项，mutiple仅支持从已有条目选择
  const badStyle = ['mutiple', 'tags'].includes(selectMode)
    ? {
        lineHeight: '18px',
      }
    : {
        lineHeight: '20px',
        margin: '4px 0',
      };
  // 可编辑表单项的下拉选项，包括 table 的搜索输入框
  const renderOption = () => {
    if (!valueEnum) return [];

    return Object.keys(valueEnum).map((key) => {
      return (
        <Select.Option value={key} key={key} className={styles.option}>
          <Display
            text={key}
            valueEnum={valueEnum}
            fieldProps={{ styles: badStyle }}
          ></Display>
        </Select.Option>
      );
    });
  };

  return <Select {...props.fieldProps}>{renderOption()}</Select>;
};

const FormField: FC<
  ProFormFieldItemProps<ProFormSelectProps, any> & {
    valueEnum?: ProSchemaValueEnumMap | ProSchemaValueEnumObj | undefined;
  }
> = (props) => {
  const mode = useContext(EditOrReadOnlyContext)?.mode as ProFieldFCMode;

  return (
    <ProForm.Item {...props}>
      <Badges valueEnum={props.valueEnum} mode={mode} text="" />
    </ProForm.Item>
  );
};

export { Badges };

export default FormField;
