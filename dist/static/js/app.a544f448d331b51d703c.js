webpackJsonp([2,3],[,,,,,,,,,,,,,function(t,e,n){"use strict";n.d(e,"a",function(){return a}),n.d(e,"b",function(){return s}),n.d(e,"c",function(){return i}),n.d(e,"d",function(){return r});var a="ADD_TOTAL_TIME",s="DEC_TOTAL_TIME",i="SAVE_PLAN",r="DELETE_PLAN"},,function(t,e,n){n(29);var a=n(0)(n(62),n(25),null,null);t.exports=a.exports},function(t,e,n){var a=n(0)(null,n(24),null,null);t.exports=a.exports},function(t,e,n){n(28);var a=n(0)(n(64),n(23),null,null);t.exports=a.exports},function(t,e){},,function(t,e,n){"use strict";var a=n(6),s=n(30),i=n(66),r=n(65);a.a.use(s.a);var c={totalTime:0,list:[]};e.a=new s.a.Store({state:c,mutations:i.a,actions:r.a})},,function(t,e,n){var a=n(0)(n(63),n(26),null,null);t.exports=a.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",["/time-entries/log-time"!==t.$route.path?n("router-link",{staticClass:"btn btn-primary",attrs:{to:"/time-entries/log-time"}},[t._v("\n    创建\n  ")]):t._e(),t._v(" "),"/time-entries/log-time"===t.$route.path?n("div",[n("h3",[t._v("创建")])]):t._e(),t._v(" "),n("hr"),t._v(" "),n("router-view"),t._v(" "),n("div",{staticClass:"time-entries"},[t.plans.length?t._e():n("p",[n("strong",[t._v("还没有任何计划")])]),t._v(" "),n("div",{staticClass:"list-group"},t._l(t.plans,function(e,a){return n("a",{staticClass:"list-group-item"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-sm-2 user-details"},[n("img",{staticClass:"avatar img-circle img-responsive",attrs:{src:e.avatar}}),t._v(" "),n("p",{staticClass:"text-center"},[n("strong",[t._v("\n                "+t._s(e.name)+"\n              ")])])]),t._v(" "),n("div",{staticClass:"col-sm-2 text-center time-block"},[n("h3",{staticClass:"list-group-item-text total-time"},[n("i",{staticClass:"glyphicon glyphicon-time"}),t._v("\n              "+t._s(e.totalTime)+"\n            ")]),t._v(" "),n("p",{staticClass:"label label-primary text-center"},[n("i",{staticClass:"glyphicon glyphicon-calendar"}),t._v("\n              "+t._s(e.date)+"\n            ")])]),t._v(" "),n("div",{staticClass:"col-sm-7 comment-section"},[n("p",[t._v(t._s(e.comment))])]),t._v(" "),n("div",{staticClass:"col-sm-1"},[n("button",{staticClass:"btn btn-xs btn-danger delete-button",on:{click:function(e){t.deletePlan(a)}}},[t._v("\n            X\n            ")])])])])}))])],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"jumbotron"},[n("h1",[t._v("任务追踪")]),t._v(" "),n("p",[n("strong",[n("router-link",{attrs:{to:"/time-entries"}},[t._v("创建一个任务")])],1)])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"wrapper"}},[n("nav",{staticClass:"navbar navbar-default"},[n("div",{staticClass:"container"},[t._m(0),t._v(" "),n("ul",{staticClass:"nav navbar-nav"},[n("li",[n("router-link",{attrs:{to:"/home"}},[t._v("首页")])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"/time-entries"}},[t._v("计划列表")])],1)])])]),t._v(" "),n("div",{staticClass:"container"},[n("div",{staticClass:"col-sm-3"},[n("sidebar")],1),t._v(" "),n("div",{staticClass:"col-sm-9"},[n("router-view")],1)])])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[n("i",{staticClass:"glyphicon glyphicon-time"}),t._v("\n\t\t\t\t计划板\n\t\t\t")])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"panel panel-default"},[t._m(0),t._v(" "),n("div",{staticClass:"panel-body"},[n("h1",{staticClass:"text-center"},[t._v(t._s(t.time)+" 小时")])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"panel-heading"},[n("h1",{staticClass:"text-center"},[t._v("已有时长")])])}]}},,function(t,e){},function(t,e){},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(22),s=n.n(a);e.default={name:"app",components:{sidebar:s.a}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={computed:{time:function(){return this.$store.state.totalTime}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"TimeEntries",computed:{plans:function(){return this.$store.state.list}},methods:{deletePlan:function(t){this.$store.dispatch("decTotalTime",this.plans[t].totalTime),this.$store.dispatch("deletePlan",t)}}}},function(t,e,n){"use strict";var a=n(13);e.a={addTotalTime:function(t,e){(0,t.commit)(a.a,e)},decTotalTime:function(t,e){(0,t.commit)(a.b,e)},savePlan:function(t,e){(0,t.commit)(a.c,e)},deletePlan:function(t,e){(0,t.commit)(a.d,e)}}},function(t,e,n){"use strict";var a,s=n(61),i=n.n(s),r=n(59),c=n.n(r),o=n(13);e.a=a={},i()(a,o.a,function(t,e){t.totalTime=t.totalTime+e}),i()(a,o.b,function(t,e){t.totalTime=t.totalTime-e}),i()(a,o.c,function(t,e){t.list.push(c()({name:"二哲",avatar:"https://sfault-avatar.b0.upaiyun.com/147/223/147223148-573297d0913c5_huge256"},e))}),i()(a,o.d,function(t,e){t.list.splice(e,1)})},function(t,e){},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(6),s=n(19),i=n(14),r=n.n(i),c=n(15),o=n.n(c),l=n(16),u=n.n(l),v=n(18),m=(n.n(v),n(20)),d=n(17),p=n.n(d);a.a.use(s.a),a.a.use(r.a),a.a.config.productionTip=!1;var _=[{path:"/",component:u.a},{path:"/home",component:u.a},{path:"/time-entries",component:p.a,children:[{path:"log-time",component:function(t){return n.e(0).then(function(){var e=[n(21)];t.apply(null,e)}.bind(this)).catch(n.oe)}}]}],f=new s.a({routes:_});new a.a({el:"#app",router:f,store:m.a,render:function(t){return t(o.a)}})}],[68]);
//# sourceMappingURL=app.a544f448d331b51d703c.js.map