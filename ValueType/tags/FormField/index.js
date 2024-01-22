function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import { ProForm } from '@ant-design/pro-components';
import { EditOrReadOnlyContext } from '@ant-design/pro-form/es/BaseForm/EditOrReadOnlyContext';
import { Select, Tag } from 'antd';
import { useContext } from 'react';
import { getTagColor, isProEnumMap } from "../../utils";
import Display from "../Display";
import styles from "./index.module.less";
import { jsx as _jsx } from "react/jsx-runtime";
var Tags = function Tags(props) {
  var _props$fieldProps;
  var valueEnum = props.valueEnum,
    mode = props.mode,
    value = props.value;
  // 组件的 mode 有三种：read、edit、update
  if (mode === 'read') {
    return /*#__PURE__*/_jsx(Display, {
      text: value,
      valueEnum: valueEnum
    });
  }
  // Select 的 mode 有两种模式：mutiple 和 tags
  var selectMode = ((_props$fieldProps = props.fieldProps) === null || _props$fieldProps === void 0 ? void 0 : _props$fieldProps.mode) || '';
  // 二者都可以多选，区别在于tags支持用户自由输入多选选项，mutiple仅支持从已有条目选择
  var tagStyle = ['mutiple', 'tags'].includes(selectMode) ? {
    lineHeight: '18px'
  } : {
    lineHeight: '20px',
    margin: '4px 0'
  };
  // 可编辑表单项的下拉选项，包括 table 的搜索输入框
  var renderOption = function renderOption() {
    if (!valueEnum) return [];
    return Object.keys(valueEnum).map(function (key, i) {
      var _ref = isProEnumMap(valueEnum) ? valueEnum.get(key) : valueEnum[key],
        text = _ref.text,
        color = _ref.color,
        status = _ref.status;
      return /*#__PURE__*/_jsx(Select.Option, {
        value: key,
        className: styles.option,
        children: /*#__PURE__*/_jsx(Tag, {
          style: tagStyle,
          color: getTagColor({
            status: status,
            color: color,
            index: i
          }),
          children: text
        })
      }, key);
    });
  };
  return /*#__PURE__*/_jsx(Select, _objectSpread(_objectSpread({}, props.fieldProps), {}, {
    children: renderOption()
  }));
};
var FormField = function FormField(props) {
  var _useContext;
  var mode = (_useContext = useContext(EditOrReadOnlyContext)) === null || _useContext === void 0 ? void 0 : _useContext.mode;
  return /*#__PURE__*/_jsx(ProForm.Item, _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/_jsx(Tags, {
      valueEnum: props.valueEnum,
      mode: mode,
      text: ""
    })
  }));
};
export { Tags };
export default FormField;