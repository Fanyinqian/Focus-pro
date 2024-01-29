import { ProRenderFieldPropsType } from '@ant-design/pro-components';
import badges from './badges';
import email from './email';
import link from './link';
import tags from './tags';
type ValueTypeMap = Record<string, ProRenderFieldPropsType>;

const valueTypeMap: ValueTypeMap = {
  email,
  tags,
  link,
  badges,
};

export default valueTypeMap;
