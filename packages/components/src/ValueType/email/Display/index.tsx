import { FC } from 'react';

interface DisplayProps {
  text: string;
}

const Display: FC<DisplayProps> = ({ text }) => {
  // mailto链接：打开默认的邮箱客户端，并自动填入指定邮箱
  return <a href={`mailto:${text}`}>{text}</a>;
};

export default Display;
