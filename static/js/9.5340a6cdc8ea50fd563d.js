webpackJsonp([9],{SMRy:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n=a("Dd8w"),e=a.n(n),o=a("NYxO"),i=a("c2Ch"),r={created:function(){},data:function(){return{warning:!1,tag:"",account:null,password:null,bottomList:["关于美团","加入我们","商家入驻","帮助中心","美团手机版"]}},computed:e()({},Object(o.b)({userInfo:function(t){return t.userInfo}})),methods:{verify:function(){var t=this,s=!1;return this.userInfo.forEach(function(a){a.account==t.account&&a.password==t.password&&(s=!0)}),s}},beforeRouteLeave:function(t,s,a){var n=this;i.a.postUser({username:this.account,password:this.password,isLogin:!0}).then(function(s){"/main"==t.path?s.data.data.login||n.verify()?(n.$store.commit("loginAccount",{account:n.account,isLogin:!0}),a()):(n.warning=!0,n.account&&n.password?n.tag="账号或密码错误":n.tag="账号或密码不能为空",a(!1)):a()})}},c={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"m-login"},[t._m(0),t._v(" "),a("div",{staticClass:"content"},[a("img",{attrs:{src:"https://s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg",alt:""}}),t._v(" "),a("div",{staticClass:"loginPage"},[a("p",{directives:[{name:"show",rawName:"v-show",value:t.warning,expression:"warning"}],staticClass:"tag"},[a("i",{staticClass:"el-icon-warning"}),t._v(" "),a("span",[t._v(t._s(t.tag))])]),t._v(" "),t._m(1),t._v(" "),a("div",{staticClass:"account"},[t._m(2),t._v(" "),a("label",{attrs:{for:"account"}}),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.account,expression:"account"}],attrs:{type:"account",id:"account"},domProps:{value:t.account},on:{input:function(s){s.target.composing||(t.account=s.target.value)}}})]),t._v(" "),a("div",{staticClass:"password"},[t._m(3),t._v(" "),a("label",{attrs:{for:"password"}}),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",id:"password"},domProps:{value:t.password},on:{input:function(s){s.target.composing||(t.password=s.target.value)}}})]),t._v(" "),a("p",{staticClass:"forget"},[t._v("忘记密码?")]),t._v(" "),a("router-link",{staticClass:"login-button",attrs:{tag:"button",to:{name:"main"}}},[t._v("登录")]),t._v(" "),a("p",[a("span",[t._v("还没有账号?")]),t._v(" "),a("span",{staticClass:"login-reg"},[a("router-link",{attrs:{to:{name:"register"}}},[t._v("免费注册")])],1)])],1)]),t._v(" "),a("div",{staticClass:"bottom"},[a("p",{staticClass:"bottom-nav"},t._l(t.bottomList,function(s,n){return a("span",{key:s+n},[t._v(t._s(s))])}),0),t._v(" "),a("p",[t._v("\n      ©2021 美团网团购 meituan.com 京ICP证070791号 京公网安备11010502025545号\n    ")])])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"header"},[s("a",{staticClass:"logo",attrs:{href:"http://www.meituan.com"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("span",[this._v("账号登录")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"account-left"},[s("i",{staticClass:"el-icon-user"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"password-left"},[s("i",{staticClass:"el-icon-lock"})])}]};var u=a("VU/8")(r,c,!1,function(t){a("TFz1")},null,null);s.default=u.exports},TFz1:function(t,s){}});
//# sourceMappingURL=9.5340a6cdc8ea50fd563d.js.map