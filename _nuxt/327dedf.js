(window.webpackJsonp=window.webpackJsonp||[]).push([[13,11],{280:function(e,t,n){"use strict";n.d(t,"d",(function(){return r})),n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return l}));n(11),n(164),n(15),n(128);var r=function(time){var e=time.match(/([0-9]+):([0-9]+):([0-9.]+)/);if(!e)return 0;var t=+e[1],n=+e[2];return+e[3]+60*n+3600*t},o=function(time){var e=time.match(/([0-9]+):([0-9]+):([0-9.]+)/);if(!e)return"";var t=+e[1],n=+e[2],r=+e[3],o="";return t&&(o+="".concat(t,"h")),n&&(o+="".concat(n,"m")),o+="".concat(r<10?"0":"").concat(r.toFixed(2),"s")},c=function(time){var e="",t=!0;return time>3600&&(t=!1,e+="".concat(Math.floor(time/3600),"h"),time%=3600),time>60&&(t=!1,e+="".concat(Math.floor(time/60),"m"),time%=60),e+="".concat(!t&&time<10?"0":"").concat(Math.abs(+time.toFixed(2)),"s")},l=function(time){var e="";e+="".concat(Math.floor(time/3600),":"),time%=3600;var t=Math.floor(time/60);return e+="".concat(t<10?"0":"").concat(t,":"),e+="".concat((time%=60)<10?"0":"").concat(Math.abs(+time.toFixed(6)))}},281:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return l}));var r=function(input){return null==input?[]:Array.isArray(input)?input:[input]},o=function(e){e.preventDefault(),e.returnValue=""},c=function(){window.addEventListener("beforeunload",o)},l=function(){window.removeEventListener("beforeunload",o)}},282:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=new(n(9).default)},283:function(e,t,n){"use strict";n.d(t,"c",(function(){return l})),n.d(t,"b",(function(){return f})),n.d(t,"a",(function(){return m})),n.d(t,"d",(function(){return d}));n(16),n(1),n(3),n(101),n(102);var r=n(285),o=n(280),c=n(281),l=function(e){return!r.a.state.useRealTime&&(null==e?void 0:e.GameTime)?e.GameTime:(null==e?void 0:e.RealTime)||null},f=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=0;return e.Segment.map((function(e){var r;return(r=!0===t?e.BestSegmentTime.GameTime:!1===t?e.BestSegmentTime.RealTime:l(e.BestSegmentTime))&&(n+=Object(o.d)(r)),n}))},m=function(e){return e.Segment.reduce((function(e,t){return Object(c.a)(t.SplitTimes.SplitTime).forEach((function(s){e.includes(s["@_name"])||e.push(s["@_name"])})),e}),[])},d=function(e){r.a.state.splitFileIsModified=e,e?Object(c.b)():Object(c.c)()}},285:function(e,t,n){"use strict";var r=n(9).default.observable({hasGameTime:!1,useRealTime:!1,splitFile:{},splitFileIsModified:!1});t.a={get state(){return r}}},287:function(e,t,n){"use strict";n.r(t);var r=n(22),o=n(23),c=n(60),l=n(100),f=n(44),m=n(40),d=(n(6),n(1),n(163),n(279));function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(f.a)(e);if(t){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var h=function(e,t,n,desc){var r,o=arguments.length,c=o<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(m.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,desc);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(c=(o<3?r(c):o>3?r(t,n,c):r(t,n))||c);return o>3&&c&&Object.defineProperty(t,n,c),c},O=function(e){Object(c.a)(n,e);var t=v(n);function n(){var e;return Object(r.a)(this,n),(e=t.apply(this,arguments)).visible=!1,e.id="collapse-xxxx",e}return Object(o.a)(n,[{key:"created",value:function(){this.visible=this.startsOpen}},{key:"mounted",value:function(){this.id="collapse-".concat(Math.floor(1e4*Math.random()))}}]),n}(d.Vue);h([Object(d.Prop)()],O.prototype,"title",void 0),h([Object(d.Prop)({default:!1})],O.prototype,"startsOpen",void 0);var j=O=h([d.Component],O),y=(n(291),n(65)),component=Object(y.a)(j,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-card",{staticClass:"mb-4",attrs:{title:e.title}},[n("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:e.id,expression:"id"}],staticClass:"toggle-collapse",attrs:{variant:"outline-secondary",pill:""}},[n("font-awesome-icon",{attrs:{icon:"chevron-left",rotation:e.visible?270:null}})],1),e._v(" "),n("b-collapse",{attrs:{id:e.id},model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}},[e.visible?n("div",[e._t("default")],2):e._e()])],1)}),[],!1,null,"3695aa62",null);t.default=component.exports},288:function(e,t,n){var content=n(292);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(80).default)("767d371d",content,!0,{sourceMap:!1})},291:function(e,t,n){"use strict";n(288)},292:function(e,t,n){var r=n(79)(!1);r.push([e.i,"*[data-v-3695aa62]{color:#000}.toggle-collapse[data-v-3695aa62]{position:absolute;right:1rem;top:1rem}",""]),e.exports=r},330:function(e,t,n){"use strict";n.r(t);n(163);var r=n(30),o=n(22),c=n(23),l=n(60),f=n(100),m=n(44),d=n(40),v=(n(6),n(1),n(2),n(15),n(16),n(3),n(127),n(24),n(283)),h=n(279),O=n(298),j=n.n(O),y=n(280),C=n(281),_=n(282);function R(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(m.a)(e);if(t){var o=Object(m.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(f.a)(this,n)}}var x=function(e,t,n,desc){var r,o=arguments.length,c=o<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,desc);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(c=(o<3?r(c):o>3?r(t,n,c):r(t,n))||c);return o>3&&c&&Object.defineProperty(t,n,c),c},S="Sum of Best",w=function(e){Object(l.a)(n,e);var t=R(n);function n(){var e;return Object(o.a)(this,n),(e=t.apply(this,arguments)).referenceComparison="",e.otherComparisons=[],e}return Object(c.a)(n,[{key:"multipleSelectOptions",get:function(){var e=this;return this.comparisons.filter((function(t){return t!=e.referenceComparison}))}},{key:"comparisons",get:function(){return[].concat(Object(r.a)(Object(v.a)(this.segments)),[S])}},{key:"sumOfBests",get:function(){return Object(v.b)(this.segments)}},{key:"splitTimeswithSoB",get:function(){var e=this;return this.segments.Segment.map((function(t,n){return[].concat(Object(r.a)(Object(C.a)(t.SplitTimes.SplitTime).map((function(e){var t=null,n=Object(v.c)(e);return n&&(t=Object(y.d)(n)),{name:e["@_name"],time:t}}))),[{name:S,time:e.sumOfBests[n]}])}))}},{key:"tableData",get:function(){var e=this,t=this.segments.Segment.map((function(s){return{split:s.Name}}));return this.segments.Segment.forEach((function(n,r){var o,c=null===(o=e.splitTimeswithSoB[r].find((function(t){return t.name===e.referenceComparison})))||void 0===o?void 0:o.time;c&&(t[r][e.referenceComparison]=Object(y.b)(c),e.otherComparisons.forEach((function(n){var o,l=null===(o=e.splitTimeswithSoB[r].find((function(e){return e.name===n})))||void 0===o?void 0:o.time;if(l){var f=l-c,m=f<0;m&&(f=-f),t[r][n]={time:Object(y.b)(l),isDeltaNegative:m,delta:Object(y.b)(f)}}})))})),t}},{key:"openComparisonEditor",value:function(){_.a.$emit("openModal","ComparisonEditorModal")}}]),n}(h.Vue);x([Object(h.Prop)()],w.prototype,"segments",void 0);var T=w=x([Object(h.Component)({components:{Multiselect:j.a}})],w),k=n(65),component=Object(k.a)(T,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("collapsible-card",{attrs:{title:"Comparisons"}},[n("b-button",{staticClass:"mb-2",attrs:{variant:"outline-info"},on:{click:e.openComparisonEditor}},[e._v("\n    Edit comparisons\n  ")]),e._v(" "),n("multiselect",{staticClass:"mb-2",attrs:{options:e.comparisons,placeholder:"Pick a reference comparison"},model:{value:e.referenceComparison,callback:function(t){e.referenceComparison=t},expression:"referenceComparison"}}),e._v(" "),e.referenceComparison?n("div",[n("multiselect",{staticClass:"mb-2",attrs:{options:e.multipleSelectOptions,placeholder:"Pick additional comparisons",multiple:""},model:{value:e.otherComparisons,callback:function(t){e.otherComparisons=t},expression:"otherComparisons"}}),e._v(" "),n("b-table",{attrs:{striped:"",hover:"",items:e.tableData},scopedSlots:e._u([e._l(e.otherComparisons,(function(slot){return{key:"cell("+slot+")",fn:function(t){return[e._v("\n        "+e._s(t.value.time)+"\n        "),n("small",{class:t.value.isDeltaNegative?"text-green":"text-red"},[e._v("\n          ("+e._s(t.value.isDeltaNegative?"-":"+")+e._s(t.value.delta)+")\n        ")])]}}}))],null,!0)})],1):e._e()],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{CollapsibleCard:n(287).default})}}]);