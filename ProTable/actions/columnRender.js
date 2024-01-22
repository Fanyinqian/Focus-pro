function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import { TableDropdown } from '@ant-design/pro-components';
import { Divider, Popconfirm, Space } from 'antd';
import { Link } from 'react-router-dom';
import LinkButton from "./LinkButton";
import { getActionCollapsedData, isActionFunction } from "./utils";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var columnRender = function columnRender(props) {
  var columns = props.columns;
  /** 把折叠的数组根据 type 转换为TableDrop的配置项 */
  var getActionMenusByType = function getActionMenusByType(actions, record) {
    // 对纯函数和设置hide的操作对象做额外处理
    return actions.filter(function (action) {
      if (isActionFunction(action)) return true;
      return !(action !== null && action !== void 0 && action.useHide && action !== null && action !== void 0 && action.useHide(record));
    }).map(function (action, index) {
      // 如果是纯函数
      if (isActionFunction(action)) {
        console.log(action(record));
        return {
          name: action(record),
          key: "key-".concat(index)
        };
      }
      // 如果是hide的操作对象
      var type = action.type,
        text = action.text,
        _action$useDisable = action.useDisable,
        useDisable = _action$useDisable === void 0 ? function () {
          return false;
        } : _action$useDisable;
      var disabled = useDisable(record);
      var baseProps = {
        key: "key-".concat(index),
        disabled: disabled
      };
      if (type === 'Edit') {
        return _objectSpread({
          name: text || '编辑',
          onClick: function onClick() {
            action === null || action === void 0 || action.onEdit(record);
          }
        }, baseProps);
      }
      if (type === 'Delete') {
        return _objectSpread({
          name: text || '删除',
          onClick: function onClick() {
            action === null || action === void 0 || action.onDelete(record);
          }
        }, baseProps);
      }
      if (type === 'Click') {
        return _objectSpread({
          name: text || '点击',
          onClick: function onClick() {
            action === null || action === void 0 || action.onClick(record);
          }
        }, baseProps);
      }
      if (type === 'Navigate') {
        var to = action === null || action === void 0 ? void 0 : action.useNavigate(record);
        return _objectSpread({
          name: /*#__PURE__*/_jsx(Link
          // @ts-ignore
          , _objectSpread(_objectSpread({
            disabled: disabled,
            target: (action === null || action === void 0 ? void 0 : action.target) || '_self',
            style: disabled ? {
              pointerEvents: 'none'
            } : {}
          }, typeof to === 'string' ? {
            to: to
          } : to), {}, {
            children: text || '查看'
          }))
        }, baseProps);
      }
      return {};
    });
  };

  /** 根据 type 类型渲染节点 */
  var getActionNodeByType = function getActionNodeByType(action, record) {
    var type = action.type,
      _action$text = action.text,
      text = _action$text === void 0 ? '' : _action$text,
      _action$useDisable2 = action.useDisable,
      useDisable = _action$useDisable2 === void 0 ? function () {
        return false;
      } : _action$useDisable2,
      _action$useHide = action.useHide,
      useHide = _action$useHide === void 0 ? function () {
        return false;
      } : _action$useHide;

    // eslint-disable-next-line react-hooks/rules-of-hooks
    var disabled = useDisable(record);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    var isHide = useHide(record);
    if (isHide) return null;
    if (type === 'Edit') {
      return /*#__PURE__*/_jsx(LinkButton, {
        onClick: function onClick() {
          var _action$onEdit;
          action === null || action === void 0 || (_action$onEdit = action.onEdit) === null || _action$onEdit === void 0 || _action$onEdit.call(action, record);
        },
        disabled: disabled,
        children: text || '编辑'
      });
    }
    if (type === 'Delete') {
      return /*#__PURE__*/_jsx(Popconfirm, {
        title: "\u786E\u5B9A\u8981\u5220\u9664\u5417\uFF1F",
        onConfirm: function onConfirm() {
          var _action$onDelete;
          action === null || action === void 0 || (_action$onDelete = action.onDelete) === null || _action$onDelete === void 0 || _action$onDelete.call(action, record);
        },
        okText: "\u5220\u9664",
        okButtonProps: {
          danger: true
        },
        disabled: disabled,
        children: /*#__PURE__*/_jsx(LinkButton, {
          disabled: disabled,
          children: text || '删除'
        })
      });
    }
    if (type === 'Navigate') {
      var to = action === null || action === void 0 ? void 0 : action.useNavigate(record);
      return /*#__PURE__*/_jsx(Link
      // @ts-ignore
      , _objectSpread(_objectSpread({
        disabled: disabled,
        target: (action === null || action === void 0 ? void 0 : action.target) || '_self',
        style: disabled ? {
          pointerEvents: 'none'
        } : {}
      }, typeof to === 'string' ? {
        to: to
      } : to), {}, {
        children: text || '查看'
      }));
    }
    if (type === 'Click') {
      return /*#__PURE__*/_jsx(LinkButton, {
        onClick: function onClick() {
          return action === null || action === void 0 ? void 0 : action.onClick(record);
        },
        disabled: disabled,
        children: text || '点击'
      });
    }
  };

  /** 分发渲染节点 */
  var getActionNodes = function getActionNodes(actions, record) {
    return actions.map(function (action) {
      if (isActionFunction(action)) {
        return action(record);
      }
      return getActionNodeByType(action, record);
    });
  };

  // 返回columns数组中第一个使用 valueType:option 的下标
  var optionColumnIndex = columns === null || columns === void 0 ? void 0 : columns.findIndex(function (_ref) {
    var valueType = _ref.valueType;
    return valueType === 'option';
  });
  if (optionColumnIndex > -1) {
    var optionColumn = columns[optionColumnIndex];
    var render = optionColumn.render,
      actions = optionColumn.actions;

    // 如果没有自定义render 且 actions 是合法类型
    if (!render && actions && Array.isArray(actions)) {
      // 定义render渲染节点
      optionColumn.render = function (_, record) {
        var _getActionCollapsedDa = getActionCollapsedData(actions, record),
          _getActionCollapsedDa2 = _slicedToArray(_getActionCollapsedDa, 2),
          collapsedActions = _getActionCollapsedDa2[0],
          notCollapsedActions = _getActionCollapsedDa2[1];
        // 获取折叠数组处理后的菜单项数组
        var menus = getActionMenusByType(collapsedActions, record);
        // 未折叠 | 折叠
        return /*#__PURE__*/_jsxs(Space, {
          split: /*#__PURE__*/_jsx(Divider, {
            type: "vertical"
          }),
          size: 0,
          children: [getActionNodes(notCollapsedActions, record), !!(menus !== null && menus !== void 0 && menus.length) && /*#__PURE__*/_jsx(TableDropdown, {
            menus: menus
          })]
        });
      };
    }
    columns[optionColumnIndex] = optionColumn;
  }
  return columns;
};
export default columnRender;