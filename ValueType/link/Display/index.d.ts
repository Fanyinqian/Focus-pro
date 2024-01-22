import { FC } from 'react';
type LinkObj = {
    href: string;
    text?: string;
};
interface DisplayProps {
    text: string | LinkObj | (LinkObj | string)[];
    fieldProps?: any;
}
declare const Display: FC<DisplayProps>;
export default Display;
