webpackJsonp([5],{"Z+4V":function(t,s){},gVkO:function(t,s){},"m/Ry":function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=i("Dd8w"),a=i.n(e),o=i("c2Ch"),c={created:function(){},props:["pageIndex","goodsList"],data:function(){return{}},computed:{changePage:function(){for(var t=this.goodsList.length,s=Math.ceil(t/10),i=[],e=0;e<s;e++){var a=this.goodsList.slice(10*e,10+10*e);i.push(a)}return i}},methods:{goodsInfo:function(t,s,i,e,a,o){this.$store.commit("goodsInfo",{_imgurl:t,_title:s,_info:i,_price:e,_sale:a,_index:o})}}},r={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"m-goodsList-goodsCard"},t._l(t.changePage[t.pageIndex],function(s,e){return i("div",{key:s+e,staticClass:"card"},[i("img",{attrs:{src:s.imgurl,alt:""}}),t._v(" "),i("div",{staticClass:"info"},[i("p",{staticClass:"title"},[t._v(t._s(s.title))]),t._v(" "),i("div",{staticClass:"rate"},[i("el-rate",{staticClass:"stars",attrs:{disabled:"","text-color":"#ff9900","score-template":"{item.score}"},model:{value:s.score,callback:function(i){t.$set(s,"score",i)},expression:"item.score"}}),t._v(" "),i("span",[s.score>=4?i("span",[t._v("很好")]):s.score>=3?i("span",[t._v("不错")]):s.score>=2?i("span",[t._v("一般")]):s.score>=1?i("span",[t._v("很差")]):i("span",[t._v("极差")]),t._v(" "),i("span",{staticClass:"score"},[t._v(t._s(s.score)+"分")])]),t._v(" "),i("span",{staticClass:"comment"},[t._v(t._s(s.commentNum)+"人评论")]),t._v(" "),i("p",{staticClass:"address"},[t._v(t._s(s.address))]),t._v(" "),i("p",{staticClass:"price"},[t._v("人均￥"+t._s(s.price))])],1),t._v(" "),i("div",{staticClass:"privilege"},t._l(t.changePage[t.pageIndex][e].privilege,function(e,a){return i("div",{key:e+a},[i("p",{staticClass:"privilege-info"},[i("router-link",{attrs:{to:{name:"buy"}},nativeOn:{click:function(i){return t.goodsInfo(s.imgurl,s.title,e.info,e.price,e.sale,a)}}},[t._v(t._s(e.info))])],1),t._v(" "),i("span",{staticClass:"privilege-price"},[t._v("￥"+t._s(e.price))]),t._v(" "),i("span",{staticClass:"privilege-cost"},[t._v("门市价￥"+t._s(e.cost))]),t._v(" "),i("span",{staticClass:"privilege-sale"},[t._v("已售"+t._s(e.sale))])])}),0)])])}),0)},staticRenderFns:[]};var n=i("VU/8")(c,r,!1,function(t){i("Z+4V")},null,null).exports,l=i("NYxO"),d={created:function(){var t=this;o.a.getGoodsList().then(function(s){t.priceSortList=s.data.data.priceSortList,t.foodList=s.data.data.foodList,t.areaList=s.data.data.areaList,t.goodsList=s.data.data.goodsList,t.filterValue()})},data:function(){return{pageIndex:0,isActiveDefault:!0,isActivePrice:!1,isActivePeople:!1,isActiveScore:!1,priceSortList:[],priceSortIndex:0,foodList:[],areaList:[],goodsList:[],filterData:[]}},watch:{searchTag:function(){this.filterValue()}},methods:{prevPage:function(){this.pageIndex>0&&this.pageIndex--},nextPage:function(){this.pageIndex<2&&this.pageIndex++},curPage:function(t){this.pageIndex=t-1},isActive:function(){this.isActiveDefault=!1,this.isActivePrice=!1,this.isActivePeople=!1,this.isActiveScore=!1},defaultSort:function(){this.isActive(),this.priceSortIndex=0,this.isActiveDefault=!0,this.sort("id","smallTobig")},priceSort:function(){this.isActive(),this.isActivePrice=!0,this.priceSortIndex>=0&&this.priceSortIndex<2?this.priceSortIndex++:this.priceSortIndex=0,1==this.priceSortIndex?this.sort("price","smallTobig"):2==this.priceSortIndex?this.sort("price","bigTosmall"):this.sort("id","smallTobig")},peopletSort:function(){this.isActive(),this.priceSortIndex=0,this.isActivePeople=!0,this.sort("commentNum","bigTosmall")},scoreSort:function(){this.isActive(),this.priceSortIndex=0,this.isActivescore=!0,this.sort("score","bigTosmall")},sort:function(t,s){"bigTosmall"==s?this.filterData.sort(function(s,i){return i[t]-s[t]}):"smallTobig"==s&&this.filterData.sort(function(s,i){return s[t]-i[t]})},filterValue:function(){var t=this,s=this.goodsList.filter(function(s,i){return-1!=s.title.indexOf(t.searchTag)});this.filterData=s}},computed:a()({},Object(l.b)({cityName:function(t){return t.cityName},searchTag:function(t){return t.searchTag}})),components:{goodsCard:n}},v={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"m-goodsList"},[i("div",{staticClass:"m-crumb"},[i("span",[i("router-link",{attrs:{to:{name:"main"}}},[t._v(t._s(t.cityName)+"美团")]),t._v(" "),i("i",{staticClass:"el-icon-arrow-right"})],1),t._v(" "),i("span",[i("router-link",{attrs:{to:{name:"goodsList"}}},[t._v(t._s(t.cityName)+t._s(t.searchTag))])],1)]),t._v(" "),i("div",{staticClass:"m-goodsList-nav"},[i("dl",{staticClass:"m-goodsList-kind"},[i("dt",[t._v("分类")]),t._v(" "),i("dt",{staticClass:"m-goodsList-all"},[t._v("全部")]),t._v(" "),i("dd",[t._m(0),t._v(" "),i("dl",[i("dt",[t._v("美食")]),t._v(" "),t._l(t.foodList,function(s,e){return i("dd",{key:s+e},[t._v("\n            "+t._s(s)+"\n          ")])})],2)])]),t._v(" "),i("dl",{staticClass:"m-goodsList-area"},[i("dt",[t._v("区域")]),t._v(" "),i("dt",{staticClass:"m-goodsList-all"},[t._v("全部")]),t._v(" "),i("dd",t._l(t.areaList,function(s,e){return i("span",{key:s+e},[t._v(t._s(s))])}),0)])]),t._v(" "),i("div",{staticClass:"m-goodList-content"},[i("div",{staticClass:"sort"},[i("span",{class:{active:t.isActiveDefault},on:{click:t.defaultSort}},[t._v("智能排序")]),t._v(" "),i("span",{class:{active:t.isActivePrice},on:{click:t.priceSort}},[t._v(t._s(t.priceSortList[t.priceSortIndex]))]),t._v(" "),i("span",{class:{active:t.isActivePeople},on:{click:t.peopletSort}},[t._v("人气最高")]),t._v(" "),i("span",{class:{active:t.isActiveScore},on:{click:t.scoreSort}},[t._v("评价最高")])]),t._v(" "),i("goodsCard",{attrs:{pageIndex:t.pageIndex,goodsList:t.filterData}})],1),t._v(" "),i("div",{staticClass:"m-goodList-changePage"},[i("el-pagination",{staticClass:"changePage",attrs:{background:"",layout:"prev, pager, next",total:t.filterData.length},on:{"prev-click":t.prevPage,"next-click":t.nextPage,"current-change":t.curPage}})],1)])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("span",[this._v("美食\n          "),s("i",{staticClass:"el-icon-caret-bottom"})])}]};var p=i("VU/8")(d,v,!1,function(t){i("gVkO")},null,null);s.default=p.exports}});
//# sourceMappingURL=5.a603a1ac464e25c76bf8.js.map