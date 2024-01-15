/** 预置状态
 * Success
 * Error
 * Warning
 * Processing
 * Normal
 * P0 ~ P4
 */
export const StatusColorMap: Record<string, string> = {
  // 成功 or 失败，通过 or 不通过
  Success: 'green',
  Error: 'red',
  Warning: 'orange',
  Processing: 'blue',
  Normal: 'default',

  // 优先级
  P0: 'red',
  P1: 'orange',
  P2: 'cyan',
  P3: 'green',
  P4: 'yellow',
};
