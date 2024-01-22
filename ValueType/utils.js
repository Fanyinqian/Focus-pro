import { StatusColorMap } from "../constant";
import colors from "../constant/colors";
var isProEnumMap = function isProEnumMap(v) {
  return Object.prototype.toString.call(v) === '[object Map]';
};

/**
 * 颜色优先级：status > color > 默认
 */
var getTagColor = function getTagColor(_ref) {
  var color = _ref.color,
    status = _ref.status,
    _ref$index = _ref.index,
    index = _ref$index === void 0 ? 0 : _ref$index;
  var tagColor;
  if (status && StatusColorMap[status]) {
    tagColor = StatusColorMap[status];
  } else if (color) {
    tagColor = color;
  } else {
    // 既没有传color，也没有传status，根据index分配默认颜色
    tagColor = colors[index];
  }
  return tagColor;
};
export { getTagColor, isProEnumMap };