function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import { Divider, Space } from 'antd';
import { jsx as _jsx } from "react/jsx-runtime";
/** 通过是否有href属性判断是否为LinkObj */
var isObjLink = function isObjLink(v) {
  // !! 将任意类型转变为布尔型
  return !!v.href;
};
var Display = function Display(_ref) {
  var text = _ref.text,
    fieldProps = _ref.fieldProps;
  if (typeof text === 'string') {
    return /*#__PURE__*/_jsx("a", _objectSpread(_objectSpread({
      href: text,
      target: "_blank",
      rel: "noreferrer"
    }, fieldProps), {}, {
      children: text
    }));
  }
  if (isObjLink(text)) {
    return /*#__PURE__*/_jsx("a", _objectSpread(_objectSpread({
      href: text.href,
      target: "_blank",
      rel: "noreferrer"
    }, fieldProps), {}, {
      children: text.text || '查看'
    }));
  }
  // 数组
  if (Array.isArray(text)) {
    return /*#__PURE__*/_jsx(Space, {
      size: 0,
      split: /*#__PURE__*/_jsx(Divider, {
        type: "vertical"
      }),
      children: text.map(function (item, index) {
        // ['aaa.com','bbb.com','ccc.com]
        if (typeof item === 'string') {
          return /*#__PURE__*/_jsx("a", _objectSpread(_objectSpread({
            href: item,
            target: "_blank",
            rel: "noreferrer"
          }, fieldProps), {}, {
            children: item
          }), index);
        }
        // [{text:'链接一',href:'aaa.com'},{text:'链接二',href:'bbb.com'}]
        return /*#__PURE__*/_jsx("a", {
          href: item.href,
          target: "_blank",
          rel: "noreferrer",
          children: item.text || '查看'
        }, index);
      })
    });
  }
  return null;
};
export default Display;