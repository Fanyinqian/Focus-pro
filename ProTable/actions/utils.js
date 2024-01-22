/** 判断是否为非操作对象的纯函数 */
var isActionFunction = function isActionFunction(fn) {
  return typeof fn === 'function';
};

/** 将actions函数分成折叠和不折叠两个数组 */
var getActionCollapsedData = function getActionCollapsedData(actions, record) {
  var collapsed = [],
    notCollapsed = [];
  actions.forEach(function (action) {
    if (isActionFunction(action)) {
      var _element$props;
      var element = action(record);
      if ((element === null || element === void 0 || (_element$props = element.props) === null || _element$props === void 0 ? void 0 : _element$props['data-collapsed']) === 'true') {
        collapsed.push(action);
      } else {
        notCollapsed.push(action);
      }
    } else {
      // @ts-ignore
      if (action !== null && action !== void 0 && action.collapsed) {
        collapsed.push(action);
      } else {
        notCollapsed.push(action);
      }
    }
  });
  return [collapsed, notCollapsed];
};
var LOOP = function LOOP() {};
export { LOOP, getActionCollapsedData, isActionFunction };