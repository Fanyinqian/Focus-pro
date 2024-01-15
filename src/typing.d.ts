declare module '*.less';

// 全局工具类型
type PartialProp<T, K extends keyof T> = Partial<Pick<T, K>> & Omit<T, K>;

declare global {
  namespace JSX {
    type Element = React.ReactElement<any, any>;
  }
}
