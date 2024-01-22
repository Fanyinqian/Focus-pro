function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import colors from "../../../constant/colors";
import { Space, Tag } from 'antd';
import { getTagColor, isProEnumMap } from "../../utils";
import styles from "./index.module.less";
import { jsx as _jsx } from "react/jsx-runtime";
var Display = function Display(_ref) {
  var text = _ref.text,
    valueEnum = _ref.valueEnum,
    fieldProps = _ref.fieldProps;
  // console.log('text', text);
  // console.log('valueEnum', valueEnum);
  // console.log(typeof text);
  if (typeof text === 'string' || typeof text === 'number') {
    if (valueEnum) {
      // 取出text对应的valueEnum对象
      var tag = isProEnumMap(valueEnum) ? valueEnum.get(text) : valueEnum[text];
      var _ref2 = tag || {},
        status = _ref2.status,
        color = _ref2.color,
        tagText = _ref2.text;
      return /*#__PURE__*/_jsx(Tag, _objectSpread(_objectSpread({
        color: getTagColor({
          status: status,
          color: color,
          index: 0
        })
      }, fieldProps), {}, {
        children: tagText || tag
      }));
    } else {
      return /*#__PURE__*/_jsx(Tag, _objectSpread(_objectSpread({
        color: colors[0]
      }, fieldProps), {}, {
        children: text
      }));
    }
  }
  if (Array.isArray(text)) {
    return /*#__PURE__*/_jsx(Space, {
      size: [0, 4],
      className: styles.space,
      children: text === null || text === void 0 ? void 0 : text.map(function (v, i) {
        if (valueEnum) {
          var _tag =
          // valueEnum 有两种表现形式，一种是Map，一种是Object

          isProEnumMap(valueEnum) ? valueEnum.get(v) : valueEnum[v];
          var _status = _tag.status,
            _color = _tag.color,
            _text = _tag.text;
          return /*#__PURE__*/_jsx(Tag, _objectSpread(_objectSpread({
            color: getTagColor({
              status: _status,
              color: _color,
              index: i
            })
          }, fieldProps), {}, {
            children: _text
          }), i);
        }
        return /*#__PURE__*/_jsx(Tag, _objectSpread(_objectSpread({
          color: colors[i]
        }, fieldProps), {}, {
          children: v
        }), i);
      })
    });
  }
  return null;
};
export default Display;