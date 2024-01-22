import { ActionFn } from './typing';
/** 判断是否为非操作对象的纯函数 */
declare const isActionFunction: <T>(fn?: any) => fn is ActionFn<T>;
/** 将actions函数分成折叠和不折叠两个数组 */
declare const getActionCollapsedData: <T, U>(actions: T[], record: U) => T[][];
declare const LOOP: () => void;
export { LOOP, getActionCollapsedData, isActionFunction };
