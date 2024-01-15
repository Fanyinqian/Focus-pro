import { ActionFn } from './typing';

/** 判断是否为非操作对象的纯函数 */
const isActionFunction = <T>(fn?: any): fn is ActionFn<T> => {
  return typeof fn === 'function';
};

/** 将actions函数分成折叠和不折叠两个数组 */
const getActionCollapsedData = <T, U>(actions: T[], record: U) => {
  let collapsed: T[] = [],
    notCollapsed: T[] = [];
  actions.forEach((action) => {
    if (isActionFunction<U>(action)) {
      const element = action(record);
      if (element?.props?.['data-collapsed'] === 'true') {
        collapsed.push(action);
      } else {
        notCollapsed.push(action);
      }
    } else {
      // @ts-ignore
      if (action?.collapsed) {
        collapsed.push(action);
      } else {
        notCollapsed.push(action);
      }
    }
  });
  return [collapsed, notCollapsed];
};

const LOOP = () => {};

export { LOOP, getActionCollapsedData, isActionFunction };
