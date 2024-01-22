import { LinkOutlined } from '@ant-design/icons';
import { ZFProConfigProvider, ZFProTable } from "./..";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var OptionBaseTable = function OptionBaseTable() {
  var columns = [{
    title: '姓名',
    dataIndex: 'name',
    key: 'name'
  }, {
    title: '年龄',
    dataIndex: 'age',
    key: 'age'
  }, {
    title: '操作',
    valueType: 'option',
    actions: [{
      type: 'Navigate',
      useNavigate: function useNavigate(record) {
        return "/".concat(record.id);
      }
    }, {
      type: 'Navigate',
      text: /*#__PURE__*/_jsx("a", {
        children: /*#__PURE__*/_jsx(LinkOutlined, {})
      }),
      useNavigate: function useNavigate(record) {
        return {
          to: "/".concat(record.id),
          replace: true
        };
      },
      tooltip: '自定义样式'
    }, {
      type: 'Edit',
      text: '编辑',
      onEdit: function onEdit(record) {
        console.log(record);
      },
      useDisable: function useDisable(record) {
        return record.name === '小明';
      }
    }, {
      type: 'Navigate',
      useNavigate: function useNavigate() {
        return '//www.zhihu.com';
      },
      text: '知乎',
      target: '_blank',
      tooltip: '进入知乎'
    }, {
      type: 'Delete',
      text: '删除',
      onDelete: function onDelete(record) {
        console.log(record);
      },
      useHide: function useHide(record) {
        return record.name === '小红';
      }
    }, {
      type: 'Click',
      onClick: function onClick(record) {
        console.log(record);
      },
      useHide: function useHide(record) {
        return record.name === '小红';
      },
      collapsed: true
    }, function (record) {
      return /*#__PURE__*/_jsxs("a", {
        "data-collapsed": "true",
        children: ["\u81EA\u5B9A\u4E49\u64CD\u4F5C-", record.name]
      });
    }]
  }];
  var datasource = [{
    id: 1,
    name: '小明',
    age: '12'
  }, {
    id: 2,
    name: '小红',
    age: '13'
  }];
  return /*#__PURE__*/_jsx(ZFProConfigProvider, {
    children: /*#__PURE__*/_jsx(ZFProTable, {
      headerTitle: "\u64CD\u4F5C\u9879\u793A\u4F8B",
      dataSource: datasource,
      columns: columns,
      search: false
    })
  });
};
export default OptionBaseTable;