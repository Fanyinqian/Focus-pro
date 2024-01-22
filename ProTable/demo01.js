import React from 'react';
import ZFProConfigProvider from "../ProConfigProvider";
import ZFProTable from "./index";
import { jsx as _jsx } from "react/jsx-runtime";
var Demo01 = function Demo01() {
  var dataSource = [{
    name: '111',
    age: 1,
    email: '1511331112@qq.com'
  }];
  var columns = [{
    title: 'Name',
    dataIndex: 'name',
    key: 'name'
  }, {
    title: 'Age',
    dataIndex: 'age',
    valueType: 'digit'
  }, {
    title: 'email',
    dataIndex: 'email',
    key: 'email',
    valueType: 'email'
  }];
  return /*#__PURE__*/_jsx(ZFProConfigProvider, {
    children: /*#__PURE__*/_jsx(ZFProTable, {
      dataSource: dataSource,
      columns: columns
    })
  });
};
export default Demo01;