webpackJsonp([12],{DXrq:function(t,e){},RS1R:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("Dd8w"),i=a.n(s),l=a("NYxO"),n={methods:{pay:function(){var t={imgurl:this.payValue.imgurl,title:this.payValue.item,num:this.payValue.num,price:this.payValue.allPrice,state:"已完成"};this.$store.commit("orderInfo",t),console.log(t),alert("付款成功，前往订单查看")}},computed:i()({},Object(l.b)({payValue:function(t){return t.payValue}}))},r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"m-pay"},[a("table",[a("tbody",[t._m(0),t._v(" "),a("tr",{staticClass:"info"},[a("td",[t._v(t._s(t.payValue.item))]),t._v(" "),a("td",[t._v("￥"+t._s(t.payValue.onePrice))]),t._v(" "),a("td",[t._v(t._s(t.payValue.num))]),t._v(" "),a("td",[t._v("￥"+t._s(t.payValue.allPrice))])])])]),t._v(" "),a("p",[a("span",[t._v("应付金额：￥"+t._s(t.payValue.allPrice))])]),t._v(" "),a("button",{on:{click:t.pay}},[t._v("确认付款")])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("tr",{staticClass:"title"},[e("th",{staticClass:"item"},[this._v("项目")]),this._v(" "),e("th",{staticClass:"onePrice"},[this._v("单价")]),this._v(" "),e("th",{staticClass:"num"},[this._v("数量")]),this._v(" "),e("th",{staticClass:"allPrice"},[this._v("总价")])])}]};var c=a("VU/8")(n,r,!1,function(t){a("DXrq")},null,null);e.default=c.exports}});
//# sourceMappingURL=12.2a0d48630b610998ca33.js.map