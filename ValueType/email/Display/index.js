import React from 'react';
import { jsx as _jsx } from "react/jsx-runtime";
var Display = function Display(_ref) {
  var text = _ref.text;
  // mailto链接：打开默认的邮箱客户端，并自动填入指定邮箱
  return /*#__PURE__*/_jsx("a", {
    href: "mailto:".concat(text),
    children: text
  });
};
export default Display;