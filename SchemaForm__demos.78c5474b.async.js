"use strict";(self.webpackChunkfocus_pro=self.webpackChunkfocus_pro||[]).push([[216,613],{60301:function(F,u,e){e.r(u);var a=e(77117),_=e.n(a),p=e(13448),i=e.n(p),c=e(74815),d=e.n(c),s=e(28152),h=e.n(s),m=e(41812),o=e(14205),t=e(86865),n=e(98819),l=e(50959),r=e(11527);u.default=function(){var T=(0,l.useState)("ModalForm"),f=h()(T,2),P=f[0],E=f[1];return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(m.Z,{style:{width:"100%"},direction:"vertical",children:[(0,r.jsx)(o.Z,{type:"warning",message:"QueryFilter \u548C lightFilter \u6682\u4E0D\u652F\u6301grid\u6A21\u5F0F",style:{marginBlockEnd:24}}),(0,r.jsx)(n.ZFProFormSelect,{label:"\u5E03\u5C40\u65B9\u5F0F",options:["ModalForm","DrawerForm"],fieldProps:{value:P,onChange:function(I){return E(I)}}})]}),(0,r.jsx)(n.ZFSchemaForm,_()(_()({trigger:(0,r.jsx)(t.ZP,{children:"\u70B9\u51FB\u6211"}),layoutType:P,onFinish:function(){var v=d()(i()().mark(function I(y){return i()().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:console.log(y);case 1:case"end":return D.stop()}},I)}));return function(I){return v.apply(this,arguments)}}()},P==="ModalForm"?{modalProps:{destroyOnClose:!0}}:{drawerProps:{destroyOnClose:!0}}),{},{columns:[{title:"\u6807\u9898",dataIndex:"title",formItemProps:{rules:[{required:!0,message:"\u6B64\u9879\u4E3A\u5FC5\u586B\u9879"}]},width:"md"}]}))]})}},84490:function(F,u,e){e.r(u);var a=e(13448),_=e.n(a),p=e(74815),i=e.n(p),c=e(21713),d=e(98819),s=e(11527),h={all:{text:"\u5168\u90E8",status:"Default"},open:{text:"\u672A\u89E3\u51B3",status:"Error"},closed:{text:"\u5DF2\u89E3\u51B3",status:"Success",disabled:!0},processing:{text:"\u89E3\u51B3\u4E2D",status:"Processing"}},m=[{title:"\u6807\u9898",dataIndex:"title",initialValue:"\u5FC5\u586B",formItemProps:{rules:[{required:!0,message:"\u6B64\u9879\u4E3A\u5FC5\u586B\u9879"}]},width:"m"},{title:"\u72B6\u6001",dataIndex:"state",valueType:"select",valueEnum:h,width:"m",tooltip:"\u5F53title\u4E3Adisabled\u65F6\u72B6\u6001\u65E0\u6CD5\u9009\u62E9",dependencies:["title"],fieldProps:function(t){return t.getFieldValue("title")==="disabled"?{disabled:!0,placeholder:"disabled"}:{placeholder:"normal"}}},{title:"\u6807\u7B7E",dataIndex:"labels",width:"m",tooltip:"\u5F53title\u4E3A\u5FC5\u586B\u65F6\u6B64\u9879\u5C06\u4E3A\u5FC5\u586B",dependencies:["title"],formItemProps:function(t){return t.getFieldValue("title")==="\u5FC5\u586B"?{rules:[{required:!0}]}:{}}},{valueType:"dependency",name:["title"],columns:function(t){var n=t.title;return n!=="hidden"?[{title:"title\u4E3Ahidden\u65F6\u9690\u85CF",dataIndex:"hidden",valueType:"date",renderFormItem:function(){return(0,s.jsx)(c.Z,{})}}]:[]}},{title:"\u521B\u5EFA\u65F6\u95F4",key:"showTime",dataIndex:"createName",valueType:"date"},{valueType:"divider"}];u.default=function(){return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(d.ZFSchemaForm,{shouldUpdate:!1,layoutType:"Form",onFinish:function(){var o=i()(_()().mark(function t(n){return _()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:console.log(n);case 1:case"end":return r.stop()}},t)}));return function(t){return o.apply(this,arguments)}}(),columns:m})})}},43706:function(F,u,e){e.r(u);var a=e(13448),_=e.n(a),p=e(74815),i=e.n(p),c=e(98819),d=e(11527),s={money:{text:"\u6309\u91D1\u989D"},discount:{text:"\u6309\u6298\u6263"}},h=[{title:"\u4F18\u60E0\u65B9\u5F0F",dataIndex:"type",formItemProps:{rules:[{required:!0,message:"\u6B64\u9879\u4E3A\u5FC5\u586B\u9879"}]},valueType:"select",valueEnum:s,width:"m"},{valueType:"dependency",name:["type"],columns:function(o){var t=o.type;return t==="money"?[{dataIndex:"money",title:"\u4F18\u60E0\u91D1\u989D",width:"m",valueType:"money"}]:t==="discount"?[{dataIndex:"discount",title:"\u6298\u6263",valueType:"digit",width:"m",fieldProps:{precision:2}}]:[]}}];u.default=function(){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("h1",{children:"\u666E\u901Ajson\u8868\u5355"}),(0,d.jsx)(c.ZFSchemaForm,{onFinish:function(){var m=i()(_()().mark(function o(t){return _()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:console.log(t);case 1:case"end":return l.stop()}},o)}));return function(o){return m.apply(this,arguments)}}(),columns:h}),(0,d.jsx)("h1",{children:"\u5D4C\u5957json\u8868\u5355"}),(0,d.jsx)(c.ZFProForm,{initialValues:{type:"money"},children:(0,d.jsx)(c.ZFSchemaForm,{layoutType:"Embed",onFinish:function(){var m=i()(_()().mark(function o(t){return _()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:console.log(t);case 1:case"end":return l.stop()}},o)}));return function(o){return m.apply(this,arguments)}}(),columns:h})})]})}},82075:function(F,u,e){e.r(u);var a=e(13448),_=e.n(a),p=e(74815),i=e.n(p),c=e(21713),d=e(98819),s=e(11527),h={all:{text:"\u5168\u90E8",status:"Default"},open:{text:"\u672A\u89E3\u51B3",status:"Error"},closed:{text:"\u5DF2\u89E3\u51B3",status:"Success",disabled:!0},processing:{text:"\u89E3\u51B3\u4E2D",status:"Processing"}},m=[{title:"\u6807\u9898",dataIndex:"title",initialValue:"\u5FC5\u586B",formItemProps:{rules:[{required:!0,message:"\u6B64\u9879\u4E3A\u5FC5\u586B\u9879"}]},width:"m"},{title:"\u72B6\u6001",dataIndex:"state",valueType:"select",valueEnum:h,width:"m",tooltip:"\u5F53title\u4E3Adisabled\u65F6\u72B6\u6001\u65E0\u6CD5\u9009\u62E9",fieldProps:function(t){return t.getFieldValue("title")==="disabled"?{disabled:!0,placeholder:"disabled"}:{placeholder:"normal"}}},{title:"\u6807\u7B7E",dataIndex:"labels",width:"m",tooltip:"\u5F53title\u4E3A\u5FC5\u586B\u65F6\u6B64\u9879\u5C06\u4E3A\u5FC5\u586B",dependencies:["title"],formItemProps:function(t){return t.getFieldValue("title")==="\u5FC5\u586B"?{rules:[{required:!0}]}:{}}},{valueType:"dependency",name:["title"],columns:function(t){var n=t.title;return n!=="hidden"?[{title:"title\u4E3Ahidden\u65F6\u9690\u85CF",dataIndex:"hidden",valueType:"date",renderFormItem:function(){return(0,s.jsx)(c.Z,{})}}]:[]}},{title:"\u521B\u5EFA\u65F6\u95F4",key:"showTime",dataIndex:"createName",valueType:"date"}];u.default=function(){return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(d.ZFSchemaForm,{shouldUpdate:function(t,n){return t.title!==(n==null?void 0:n.title)},layoutType:"Form",onFinish:function(){var o=i()(_()().mark(function t(n){return _()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:console.log(n);case 1:case"end":return r.stop()}},t)}));return function(t){return o.apply(this,arguments)}}(),columns:m})})}},44073:function(F,u,e){e.r(u);var a=e(98819),_=e(11527),p={all:{text:"\u5168\u90E8",status:"Default"},open:{text:"\u672A\u89E3\u51B3",status:"Error"},closed:{text:"\u5DF2\u89E3\u51B3",status:"Success",disabled:!0},processing:{text:"\u89E3\u51B3\u4E2D",status:"Processing"}},i=[{title:"\u6807\u9898",dataIndex:"title",formItemProps:{rules:[{required:!0,message:"\u6B64\u9879\u4E3A\u5FC5\u586B\u9879"}]},width:"m"},{title:"\u72B6\u6001",dataIndex:"state",valueType:"select",valueEnum:p,width:"m"}];u.default=function(){return(0,_.jsxs)(a.ZFProForm,{children:[(0,_.jsx)("h1",{children:"ProForm "}),(0,_.jsx)(a.ZFProFormText,{name:"username"}),(0,_.jsx)(a.ZFProFormSelect,{name:"select-multiple",label:"\u591A\u9009",valueEnum:{red:"Red",green:"Green",blue:"Blue"},fieldProps:{mode:"multiple"},placeholder:"Please select favorite colors",rules:[{required:!0,message:"Please select your favorite colors!",type:"array"}]}),(0,_.jsx)("h1",{children:"\u8868\u53551 "}),(0,_.jsx)(a.ZFSchemaForm,{layoutType:"Embed",columns:i}),(0,_.jsx)("h1",{children:"\u8868\u53552"}),(0,_.jsx)(a.ZFSchemaForm,{layoutType:"Embed",columns:[{title:"\u521B\u5EFA\u65F6\u95F4",key:"showTime",dataIndex:"createName",valueType:"date"},{title:"\u5206\u7EC4",valueType:"group",columns:[{title:"\u72B6\u6001",dataIndex:"groupState",valueType:"select",width:"xs",valueEnum:p},{title:"\u6807\u9898",width:"md",dataIndex:"groupTitle",formItemProps:{rules:[{required:!0,message:"\u6B64\u9879\u4E3A\u5FC5\u586B\u9879"}]}}]}]})]})}},99404:function(F,u,e){e.r(u);var a=e(13448),_=e.n(a),p=e(74815),i=e.n(p),c=e(21713),d=e(98819),s=e(11527),h={all:{text:"\u5168\u90E8",status:"Default"},open:{text:"\u672A\u89E3\u51B3",status:"Error"},closed:{text:"\u5DF2\u89E3\u51B3",status:"Success",disabled:!0},processing:{text:"\u89E3\u51B3\u4E2D",status:"Processing"}},m=[{title:"\u6807\u9898",dataIndex:"title",initialValue:"\u5FC5\u586B",formItemProps:{rules:[{required:!0,message:"\u6B64\u9879\u4E3A\u5FC5\u586B\u9879"}]},width:"m"},{title:"\u5FC5\u586B\u4F46\u6CA1\u663E\u793A*",dataIndex:"list",valueType:"formList",formItemProps:{rules:[{required:!0,message:"\u8BF7\u586B\u5199\u5217\u8868"}]},columns:[{dataIndex:"isSettlement",valueType:"switch",formItemProps:{rules:[{required:!0,message:"\u8BF7\u586B\u51991"}]}}]},{title:"\u72B6\u6001",dataIndex:"state",valueType:"select",valueEnum:h,width:"m",tooltip:"\u5F53title\u4E3Adisabled\u65F6\u72B6\u6001\u65E0\u6CD5\u9009\u62E9",dependencies:["title"],fieldProps:function(t){return t.getFieldValue("title")==="disabled"?{disabled:!0,placeholder:"disabled"}:{placeholder:"normal"}}},{title:"\u6807\u7B7E",dataIndex:"labels",width:"m",tooltip:"\u5F53title\u4E3A\u5FC5\u586B\u65F6\u6B64\u9879\u5C06\u4E3A\u5FC5\u586B",dependencies:["title"],formItemProps:function(t){return t.getFieldValue("title")==="\u5FC5\u586B"?{rules:[{required:!0}]}:{}}},{valueType:"dependency",name:["title"],columns:function(t){var n=t.title;return n!=="hidden"?[{title:"title\u4E3Ahidden\u65F6\u9690\u85CF",dataIndex:"hidden",valueType:"date",renderFormItem:function(){return(0,s.jsx)(c.Z,{})}}]:[]}},{title:"\u521B\u5EFA\u65F6\u95F4",key:"showTime",dataIndex:"createName",valueType:"date"},{valueType:"divider"}];u.default=function(){return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(d.ZFSchemaForm,{shouldUpdate:!1,layoutType:"Form",onFinish:function(){var o=i()(_()().mark(function t(n){return _()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:console.log(n);case 1:case"end":return r.stop()}},t)}));return function(t){return o.apply(this,arguments)}}(),columns:m})})}},99947:function(F,u,e){e.r(u);var a=e(13448),_=e.n(a),p=e(74815),i=e.n(p),c=e(28152),d=e.n(c),s=e(83661),h=e(41812),m=e(14205),o=e(5726),t=e.n(o),n=e(98819),l=e(50959),r=e(11527),T={all:{text:"\u5168\u90E8",status:"Default"},open:{text:"\u672A\u89E3\u51B3",status:"Error"},closed:{text:"\u5DF2\u89E3\u51B3",status:"Success",disabled:!0},processing:{text:"\u89E3\u51B3\u4E2D",status:"Processing"}},f=[{title:"\u6807\u9898",valueEnum:{1:{text:"xx"}},formItemProps:{rules:[{required:!0,message:"\u6B64\u9879\u4E3A\u5FC5\u586B\u9879"}]},width:"md",colProps:{xs:24,md:12},initialValue:"\u9ED8\u8BA4\u503C",convertValue:function(E){return"\u6807\u9898\uFF1A".concat(E)},transform:function(E){return{title:"".concat(E,"-\u8F6C\u6362")}}},{title:"\u72B6\u6001",dataIndex:"state",valueType:"select",valueEnum:T,width:"md",colProps:{xs:24,md:12}},{title:"\u6807\u7B7E",dataIndex:"labels",width:"md",colProps:{xs:12,md:4}},{valueType:"switch",title:"\u5F00\u5173",dataIndex:"Switch",fieldProps:{style:{width:"200px"}},width:"md",colProps:{xs:12,md:20}},{title:"\u521B\u5EFA\u65F6\u95F4",key:"showTime",dataIndex:"createName",initialValue:[t()().add(-1,"m"),t()()],renderFormItem:function(){return(0,r.jsx)(s.default.RangePicker,{})},width:"md",colProps:{xs:24,md:12}},{title:"\u66F4\u65B0\u65F6\u95F4",dataIndex:"updateName",initialValue:[t()().add(-1,"m"),t()()],renderFormItem:function(){return(0,r.jsx)(s.default.RangePicker,{})},width:"md",colProps:{xs:24,md:12}},{title:"\u5206\u7EC4",valueType:"group",columns:[{title:"\u72B6\u6001",dataIndex:"groupState",valueType:"select",width:"xs",colProps:{xs:12},valueEnum:T},{title:"\u6807\u9898",width:"md",dataIndex:"groupTitle",colProps:{xs:12},formItemProps:{rules:[{required:!0,message:"\u6B64\u9879\u4E3A\u5FC5\u586B\u9879"}]}}]},{title:"\u5217\u8868",valueType:"formList",dataIndex:"list",initialValue:[{state:"all",title:"\u6807\u9898"}],colProps:{xs:24,sm:12},columns:[{valueType:"group",columns:[{title:"\u72B6\u6001",dataIndex:"state",valueType:"select",colProps:{xs:24,sm:12},width:"xs",valueEnum:T},{title:"\u6807\u9898",dataIndex:"title",width:"md",formItemProps:{rules:[{required:!0,message:"\u6B64\u9879\u4E3A\u5FC5\u586B\u9879"}]},colProps:{xs:24,sm:12}}]},{valueType:"dateTime",initialValue:new Date,dataIndex:"currentTime",width:"md"}]},{title:"FormSet",valueType:"formSet",dataIndex:"formSet",colProps:{xs:24,sm:12},rowProps:{gutter:[16,0]},columns:[{title:"\u72B6\u6001",dataIndex:"groupState",valueType:"select",width:"md",valueEnum:T},{width:"xs",title:"\u6807\u9898",dataIndex:"groupTitle",tip:"\u6807\u9898\u8FC7\u957F\u4F1A\u81EA\u52A8\u6536\u7F29",formItemProps:{rules:[{required:!0,message:"\u6B64\u9879\u4E3A\u5FC5\u586B\u9879"}]}}]},{title:"\u521B\u5EFA\u65F6\u95F4",dataIndex:"created_at",valueType:"dateRange",width:"md",colProps:{span:24},transform:function(E){return{startTime:E[0],endTime:E[1]}}}];u.default=function(){var P=(0,l.useState)("Form"),E=d()(P,2),v=E[0],I=E[1];return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(h.Z,{style:{width:"100%"},direction:"vertical",children:[(0,r.jsx)(m.Z,{type:"warning",message:"QueryFilter \u548C lightFilter \u6682\u4E0D\u652F\u6301grid\u6A21\u5F0F",style:{marginBlockEnd:24}}),(0,r.jsx)(n.ZFProFormSelect,{label:"\u5E03\u5C40\u65B9\u5F0F",options:["Form","ModalForm","DrawerForm","LightFilter","QueryFilter","StepsForm","StepForm","Embed"],fieldProps:{value:v,onChange:function(x){return I(x)}}})]}),(0,r.jsx)(n.ZFProConfigProvider,{children:(0,r.jsx)(n.ZFSchemaForm,{trigger:(0,r.jsx)("a",{children:"\u70B9\u51FB\u6211"}),layoutType:v,steps:[{title:"ProComponent"}],rowProps:{gutter:[16,16]},colProps:{span:12},grid:v!=="LightFilter"&&v!=="QueryFilter",onFinish:function(){var y=i()(_()().mark(function x(D){return _()().wrap(function(M){for(;;)switch(M.prev=M.next){case 0:console.log(D);case 1:case"end":return M.stop()}},x)}));return function(x){return y.apply(this,arguments)}}(),columns:v==="StepsForm"?[f]:f})})]})}},9801:function(F,u,e){e.r(u);var a=e(13448),_=e.n(a),p=e(74815),i=e.n(p),c=e(40384),d=e(98819),s=e(50959),h=e(11527),m={all:{text:"\u5168\u90E8",status:"Default"},open:{text:"\u672A\u89E3\u51B3",status:"Error"},closed:{text:"\u5DF2\u89E3\u51B3",status:"Success",disabled:!0},processing:{text:"\u89E3\u51B3\u4E2D",status:"Processing"}},o=[[{title:"\u6807\u9898",dataIndex:"title",formItemProps:{rules:[{required:!0,message:"\u6B64\u9879\u4E3A\u5FC5\u586B\u9879"}]},width:"m"},{title:"\u72B6\u6001",dataIndex:"state",valueType:"select",valueEnum:m,width:"m"}],[{title:"\u6807\u7B7E",dataIndex:"labels",width:"m"},{title:"\u521B\u5EFA\u65F6\u95F4",key:"showTime",dataIndex:"createName",valueType:"date"},{title:"\u5206\u7EC4",valueType:"group",columns:[{title:"\u72B6\u6001",dataIndex:"groupState",valueType:"select",width:"xs",valueEnum:m},{title:"\u6807\u9898",width:"md",dataIndex:"groupTitle",formItemProps:{rules:[{required:!0,message:"\u6B64\u9879\u4E3A\u5FC5\u586B\u9879"}]}}]}],[{title:"\u5217\u8868",valueType:"formList",dataIndex:"list",initialValue:[{state:"all",title:"\u6807\u9898"}],columns:[{valueType:"group",columns:[{title:"\u72B6\u6001",dataIndex:"state",valueType:"select",width:"xs",valueEnum:m},{title:"\u6807\u9898",dataIndex:"title",formItemProps:{rules:[{required:!0,message:"\u6B64\u9879\u4E3A\u5FC5\u586B\u9879"}]},width:"m"}]}]},{title:"FormSet",valueType:"formSet",dataIndex:"formSet",columns:[{title:"\u72B6\u6001",dataIndex:"groupState",valueType:"select",width:"xs",valueEnum:m},{title:"\u6807\u9898",dataIndex:"groupTitle",tip:"\u6807\u9898\u8FC7\u957F\u4F1A\u81EA\u52A8\u6536\u7F29",formItemProps:{rules:[{required:!0,message:"\u6B64\u9879\u4E3A\u5FC5\u586B\u9879"}]},width:"m"}]},{title:"\u521B\u5EFA\u65F6\u95F4",dataIndex:"created_at",valueType:"dateRange",transform:function(n){return{startTime:n[0],endTime:n[1]}}}]];u.default=function(){var t=(0,s.useRef)();return(0,h.jsx)(d.ZFSchemaForm,{layoutType:"StepsForm",steps:[{title:"\u7B2C\u4E00\u6B65"},{title:"\u7B2C\u4E8C\u6B65"},{title:"\u7B2C\u4E09\u6B65"}],onCurrentChange:function(l){console.log("current: ",l)},formRef:t,onFinish:function(){var n=i()(_()().mark(function l(r){return _()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.abrupt("return",new Promise(function(P){console.log(r),c.ZP.success("\u63D0\u4EA4\u6210\u529F"),setTimeout(function(){var E;P(!0),(E=t.current)===null||E===void 0||E.resetFields()},2e3)}));case 1:case"end":return f.stop()}},l)}));return function(l){return n.apply(this,arguments)}}(),columns:o})}}}]);
