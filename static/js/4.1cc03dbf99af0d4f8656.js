webpackJsonp([4],{"0Drg":function(t,s){},"7SdV":function(t,s){},MqKU:function(t,s){},dAPB:function(t,s){},lia0:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=a("c2Ch"),n={created:function(){var t=this;e.a.getMainFLeft().then(function(s){t.navlist=s.data.data})},data:function(){return{navlist:[]}}},i={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"main-f-left"},[a("dl",[a("dt",{staticClass:"main-all-left"},[t._v("全部分类")]),t._v(" "),t._l(t.navlist,function(s,e){return a("dd",{key:e+s},[a("i",{class:t.navlist[e].class}),t._v(" "),a("router-link",{attrs:{to:{name:"food"}}},[t._v(t._s(s.title))]),t._v(" "),a("i",{staticClass:"el-icon-arrow-right"}),t._v(" "),a("div",{staticClass:"menu"},t._l(t.navlist[e].children,function(s,n){return a("dl",{key:s+n},[a("dt",[a("span",[t._v(t._s(s.title))]),t._v(" "),t._m(0,!0)]),t._v(" "),t._l(t.navlist[e].children[n].data,function(s,e){return a("dd",{key:s+e},[a("router-link",{attrs:{to:{name:"s"}}},[t._v(t._s(s))])],1)})],2)}),0)],1)})],2)])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"many"},[s("span",[this._v("更多")]),this._v(" "),s("i",{staticClass:"el-icon-arrow-right"})])}]};var r=a("VU/8")(n,i,!1,function(t){a("0Drg")},null,null).exports,c=a("Dd8w"),l=a.n(c),o=a("NYxO"),d={created:function(){var t=this;e.a.getMainFCenter().then(function(s){t.imglist=s.data.data.imglist,t.selflist=s.data.data.selflist,t.hotlink=s.data.data.hotlink})},data:function(){return{imglist:[],selflist:[],hotlink:[]}},methods:{changePage:function(t){0==t?this.$router.push("/myself"):this.$store.commit("myselfPage",t)}},computed:l()({},Object(o.b)({isLogin:function(t){return t.isLogin},account:function(t){return t.account}}))},u={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"main-f-center"},[a("div",{attrs:{id:"hotlink"}},t._l(t.hotlink,function(s,e){return a("router-link",{key:s+e,class:s.class,attrs:{to:"/s"}},[t._v(t._s(s.title))])}),1),t._v(" "),a("el-row",{staticClass:"main-f-center-row"},[a("el-col",{attrs:{span:14,id:"main-f-center-col"}},[a("div",{staticClass:"block"},[a("el-carousel",{staticClass:"main-f-center-carousel",attrs:{height:"240px"}},t._l(t.imglist,function(t,s){return a("el-carousel-item",{key:t+s,staticClass:"main-f-center-carouselitem"},[a("a",{attrs:{href:"http://hotel.meituan.com/"}},[a("img",{attrs:{id:"main-f-center-img1",src:t,alt:""}})])])}),1)],1)]),t._v(" "),a("el-col",{attrs:{span:3}},[a("router-link",{attrs:{to:{name:"s"}}},[a("img",{attrs:{id:"main-f-center-img2",src:"http://p0.meituan.net/codeman/e473bb428f070321269b23370ff02ba956209.jpg",alt:""}})])],1),t._v(" "),a("el-col",{attrs:{span:4}},[t.isLogin?a("div",{attrs:{id:"login"}},[a("p",{staticClass:"setting"},[a("router-link",{attrs:{to:{name:"setting"}}},[a("i",{staticClass:"el-icon-setting"})])],1),t._v(" "),a("img",{attrs:{src:"http://s0.meituan.net/bs/fe-web-meituan/e3064a3/img/head-img.png",alt:""},on:{click:function(s){return t.changePage(0)}}}),t._v(" "),a("p",{on:{click:function(s){return t.changePage(0)}}},[t._v(t._s(t.account))]),t._v(" "),a("div",{staticClass:"self"},t._l(t.selflist,function(s,e){return a("div",{key:s+e,staticClass:"box"},[a("router-link",{attrs:{to:{name:s.link}},nativeOn:{click:function(s){return t.changePage(e+1)}}},[a("i",{class:s.class}),t._v(" "),a("p",[t._v(t._s(s.title))])])],1)}),0)]):a("div",{attrs:{id:"notlogin"}},[a("img",{attrs:{src:"https://s0.meituan.net/bs/fe-web-meituan/e350c4a/img/avatar.jpg",alt:""}}),t._v(" "),a("p",[t._v("hi!你好")]),t._v(" "),a("router-link",{attrs:{to:{name:"register"}}},[t._v("注册")]),t._v(" "),a("router-link",{attrs:{to:{name:"login"}}},[t._v("立即登录")])],1)])],1),t._v(" "),a("el-row",[a("el-col",{attrs:{span:6}},[a("router-link",{attrs:{to:{name:"s"},id:"main-f-imghotel"}},[a("img",{attrs:{src:"http://p1.meituan.net/codeman/8cce56c467a17e04f3094d1e455462a0132772.png",alt:""}})])],1),t._v(" "),a("el-col",{attrs:{span:6}},[a("router-link",{attrs:{to:{name:"s"},id:"main-f-imgzs"}},[a("img",{attrs:{src:"http://p1.meituan.net/codeman/16442c19da1f1c4544f794e29d99c92051716.jpg",alt:""}})])],1),t._v(" "),a("el-col",{attrs:{span:3}},[a("router-link",{attrs:{to:{name:"s"},id:"main-f-imgsj"}},[a("img",{attrs:{src:"http://p1.meituan.net/codeman/5b21cddb4bb1cbc3a9c3bce0f726c75940469.jpg",alt:""}})])],1),t._v(" "),a("el-col",{attrs:{span:5}},[a("div",{attrs:{id:"main-f-code"}},[a("img",{attrs:{src:"https://s1.meituan.net/bs/fe-web-meituan/60ac9a0/img/download-qr.png",alt:"下载APP"}}),t._v(" "),a("p",[t._v("美团APP手机版")]),t._v(" "),a("p",{staticClass:"play"},[a("span",{staticClass:"yuan"},[t._v("1元起")]),t._v(" "),a("span",[t._v("吃喝玩乐")])])])])],1)],1)},staticRenderFns:[]};var v={created:function(){var t=this;e.a.getMainSCenter().then(function(s){t.cardlist=s.data.data})},data:function(){return{num:0,isactive:!0,leftvalue:0,cardlist:[]}},methods:{changeKind:function(t){"now"==t?(this.num=0,this.isactive=!0):"future"==t&&(this.num=1,this.isactive=!1)},leftbtn:function(){this.leftvalue<0&&(this.leftvalue+=1150,this.$refs.card.style.left=this.leftvalue+"px")},rightbtn:function(){this.leftvalue>=0&&(this.leftvalue-=1150,this.$refs.card.style.left=this.leftvalue+"px")}}},f={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"s-main"},[a("div",{staticClass:"s-main-header"},[a("dt",[t._v("猫眼电影")]),t._v(" "),a("dd",{class:{active:t.isactive},on:{mouseenter:function(s){return t.changeKind("now")}}},[t._v("正在热映")]),t._v(" "),a("dd",{class:{active:!t.isactive},on:{mouseenter:function(s){return t.changeKind("future")}}},[t._v("即将上映")]),t._v(" "),a("router-link",{staticClass:"s-main-header-all",attrs:{to:{name:"s"}}},[a("span",[t._v("全部")]),t._v(" "),a("i",{staticClass:"el-icon-arrow-right"})])],1),t._v(" "),a("div",{staticClass:"s-main-content"},[a("div",{staticClass:"card-btn"},[a("div",{staticClass:"card-left",on:{click:t.leftbtn}},[a("i",{staticClass:"el-icon-arrow-left"})]),t._v(" "),a("div",{staticClass:"card-right",on:{click:t.rightbtn}},[a("i",{staticClass:"el-icon-arrow-right"})])]),t._v(" "),a("div",{ref:"card",staticClass:"content-card"},t._l(t.cardlist[t.num],function(s,e){return a("div",{key:s+e,staticClass:"s-main-content-card"},[a("router-link",{attrs:{to:{name:"s"}}},[a("img",{attrs:{src:s.imgurl,alt:""}}),t._v(" "),a("div",{staticClass:"info"},[s.isfuture?a("p",[a("span",{staticClass:"score"},[t._v(t._s(s.score))]),t._v(" "),a("span",{staticClass:"ping"},[t._v("人想看")])]):a("p",[a("span",{staticClass:"ping"},[t._v("观众评")]),t._v(" "),a("span",{staticClass:"score"},[t._v(t._s(s.score))])]),t._v(" "),a("p",{staticClass:"name"},[t._v(t._s(s.name))]),t._v(" "),0==s.isfuture?a("span",{staticClass:"buy"},[t._v("购票")]):s.isfuture&&s.buy?a("span",{staticClass:"buy"},[t._v("预售")]):t._e()]),t._v(" "),s.tag?a("span",{staticClass:"tag"},[t._v(t._s(s.tag))]):t._e()])],1)}),0)])])},staticRenderFns:[]};var m={created:function(){var t=this;e.a.getMainTCenter().then(function(s){t.cardinfo=s.data.data.cardinfo,t.classList=s.data.data.classList})},props:["index"],data:function(){return{num:0,kind:"tj",cardinfo:[],classList:""}},methods:{enter:function(t,s){this.num=t},over:function(t){"DD"==t.target.tagName&&(this.kind=t.target.getAttribute("data-tag"))}},computed:{}},_={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return t.classList?a("div",{staticClass:"t-main"},[a("div",{class:t.classList[t.index].headerClass},[a("dt",[t._v(t._s(t.cardinfo[t.index].title))]),t._v(" "),t._l(t.cardinfo[t.index].children,function(s,e){return a("dd",{key:s+e,class:{active:t.kind==s.tag||"like"==s.tag},attrs:{"data-tag":s.tag},on:{mouseenter:function(s){return t.enter(e)},mouseover:t.over}},[t._v("\n      "+t._s(s.title)+"\n    ")])}),t._v(" "),a("router-link",{attrs:{to:{name:"s"}}},[a("span",[t._v("全部")]),t._v(" "),a("i",{staticClass:"el-icon-arrow-right"})])],2),t._v(" "),a("div",{class:t.classList[t.index].contentClass},[a("router-link",{attrs:{to:{name:"s"}}},t._l(t.cardinfo[t.index].children[t.num].children,function(s,e){return a("div",{key:s+e,class:t.classList[t.index].cardClass},[a("img",{class:t.classList[t.index].cardImgClass,attrs:{src:s.imgurl,alt:""}}),t._v(" "),"推荐民宿"==t.cardinfo[t.index].title?a("div",{staticClass:"info"},[a("p",{staticClass:"msg"},[t._v(t._s(s.msg))]),t._v(" "),a("p",{staticClass:"address"},[t._v(t._s(s.address))]),t._v(" "),a("p",{staticClass:"price"},[t._v("￥"+t._s(s.price))])]):a("div",{staticClass:"info"},[a("p",{staticClass:"msg"},[t._v(t._s(s.msg))]),t._v(" "),a("el-rate",{staticClass:"score",attrs:{disabled:"","disabled-void-color":"#999","text-color":"#ff9900","score-template":"{m.score}"},model:{value:s.score,callback:function(a){t.$set(s,"score",a)},expression:"m.score"}}),t._v(" "),a("span",{staticClass:"evaluate"},[t._v(t._s(s.evaluatenum)+"个评价")]),t._v(" "),a("p",{staticClass:"address"},[t._v(t._s(s.address))]),t._v(" "),a("p",{staticClass:"price"},[t._v("\n            ￥"+t._s(s.price)+"\n            "),a("span",[t._v("起")])])],1)])}),0)],1)]):t._e()},staticRenderFns:[]};var g={data:function(){return{}},beforeRouteLeave:function(t,s,a){this.isAllow(t.name)?this.$store.state.isLogin?a():a({name:"login"}):a()},methods:{isAllow:function(t){switch(t){case"userInfo":case"order":case"collect":case"ticket":case"setting":case"goodsList":return!0}}},components:{Fleft:r,Fcenter:a("VU/8")(d,u,!1,function(t){a("7SdV")},null,null).exports,Smain:a("VU/8")(v,f,!1,function(t){a("dAPB")},null,null).exports,Tmain:a("VU/8")(m,_,!1,function(t){a("vBh5")},null,null).exports}},h={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"m-main-next"},[s("el-row",{staticClass:"m-row-main"},[s("el-col",{staticClass:"m-col-main",attrs:{span:5}},[s("Fleft")],1),this._v(" "),s("el-col",{attrs:{span:19}},[s("Fcenter")],1)],1),this._v(" "),s("div",{staticClass:"m-s-main"},[s("Smain"),this._v(" "),s("Tmain",{attrs:{index:0}}),this._v(" "),s("Tmain",{attrs:{index:1}})],1)],1)},staticRenderFns:[]};var p=a("VU/8")(g,h,!1,function(t){a("MqKU")},null,null);s.default=p.exports},vBh5:function(t,s){}});
//# sourceMappingURL=4.1cc03dbf99af0d4f8656.js.map