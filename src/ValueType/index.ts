import { ProRenderFieldPropsType } from '@ant-design/pro-components';
import email from './email';
import tags from './tags';

type ValueTypeMap = Record<string, ProRenderFieldPropsType>;

const valueTypeMap: ValueTypeMap = {
  email,
  tags,
};

export default valueTypeMap;
