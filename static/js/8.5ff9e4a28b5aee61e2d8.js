webpackJsonp([8],{Aq9p:function(t,n){},MnHG:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var s=e("Dd8w"),i=e.n(s),a=e("c2Ch"),r=e("NYxO"),c={created:function(){var t=this;a.a.getUserInfo().then(function(n){t.settingList=n.data.data.settingList})},data:function(){return{settingList:[]}},methods:{toOrder:function(t){this.$store.commit("myselfPageIndex",t)}},computed:i()({},Object(r.b)({account:function(t){return t.account}}))},o={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"userInfo"},[e("div",{staticClass:"topInfo"},[t._m(0),t._v(" "),e("p",{staticClass:"username"},[t._v("\n      "+t._s(t.account)+"\n    ")]),t._v(" "),e("p",{staticClass:"setting"},[e("router-link",{attrs:{to:{name:"setting"}}},[e("span",[t._v("个人信息设置")]),t._v(" "),e("i",{staticClass:"el-icon-arrow-right"})])],1)]),t._v(" "),e("div",{staticClass:"footInfo"},[e("ul",t._l(t.settingList,function(n,s){return e("li",{key:n+s},[e("router-link",{attrs:{to:{name:"order"}},nativeOn:{click:function(n){return t.toOrder(s)}}},[e("i",{class:n.class}),t._v(" "),e("span",[t._v(t._s(n.title))])])],1)}),0)])])},staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"img"},[n("img",{attrs:{src:"//s0.meituan.net/bs/fe-web-meituan/e3064a3/img/head-img.png",alt:""}})])}]};var u=e("VU/8")(c,o,!1,function(t){e("Aq9p")},null,null);n.default=u.exports}});
//# sourceMappingURL=8.5ff9e4a28b5aee61e2d8.js.map