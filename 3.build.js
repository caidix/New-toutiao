webpackJsonp([3],{150:function(t,e,a){"use strict";function i(t){a(182)}Object.defineProperty(e,"__esModule",{value:!0});var n=a(165),o=a(184),r=a(2),c=i,s=r(n.a,o.a,!1,c,"data-v-4553cc3a",null);e.default=s.exports},165:function(t,e,a){"use strict";var i=a(37),n=a(7),o=a.n(n);e.a={data:function(){return{news:[]}},components:{Header:i.a},methods:{hanglCarNav:function(){this.$observer.$emit("carNav",!1)}},created:function(){var t=this;o()({method:"get",url:"/abc/motor/stream/api/news/feed/web/v47/?aid=1230&channel=m_web&device_platform=wap&category=motor_car&max_behot_time=0&min_behot_time=0&web_id=6708524983855220238&impression_info=%7B%22page_id%22:%22page_category%22,%22sub_tab%22:%22motor_car%22,%22product_name%22:%22m_station%22,%22zt%22:%22tt_m_car%22%7D&tt_from="}).then(function(e){var a=e.data.data;t.news=a})},computed:{}}},182:function(t,e,a){var i=a(183);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a(1)("034b22b3",i,!0,{})},183:function(t,e,a){e=t.exports=a(0)(!1),e.push([t.i,".sy[data-v-4553cc3a]{height:100%}.box[data-v-4553cc3a]{width:100%;position:absolute;left:0;top:2.8rem;overflow-x:hidden;padding-top:3rem}.box .newList[data-v-4553cc3a]{display:flex;flex-direction:column;justify-content:center;border-bottom:.02rem solid #ccc;width:100%;min-height:3.3rem;padding:0 .5rem;box-sizing:border-box}.box .newList h2[data-v-4553cc3a]{font-size:.55rem;margin-top:.5rem;font-weight:400;line-height:.7rem;font-family:PingFang SC,Hiragino Sans GB,Microsoft YaHei,Helvetica,Arial,sans-serif}.box .newList .img[data-v-4553cc3a]{display:flex;width:100%;justify-content:space-between;margin:.3rem 0}.box .newList .img img[data-v-4553cc3a]{width:33%;height:1.8rem}.box .source[data-v-4553cc3a]{display:flex;margin-bottom:.4rem}.box .source span[data-v-4553cc3a]{color:#999;margin-right:.2rem}.box .action[data-v-4553cc3a]{display:flex;justify-content:space-between}.box .action .img img[data-v-4553cc3a]{width:100%;height:2.5rem}",""])},184:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"sy"},[a("keep-alive",[a("Header")],1),t._v(" "),a("BScroll",[[a("div",{staticClass:"box"},t._l(t.news,function(e,i){return a("router-link",{key:i,staticClass:"newList",attrs:{to:"/car/carNav"},nativeOn:{click:function(e){return t.hanglCarNav()}}},[a("div",{class:1==e.info.image_list.length?"action":""},[a("h2",[t._v(t._s(e.info.title))]),t._v(" "),a("div",{staticClass:"img"},t._l(e.info.image_list,function(t,e){return a("img",{key:e,attrs:{src:t.url_list[0].url}})}),0)]),t._v(" "),a("div",{staticClass:"source"},[a("span",[t._v(t._s(e.info.repost_info.name))]),t._v(" "),a("span",[t._v(t._s(e.info.comment_count)+"评论")])])])}),1)]],2)],1)},n=[],o={render:i,staticRenderFns:n};e.a=o}});
//# sourceMappingURL=3.build.js.map