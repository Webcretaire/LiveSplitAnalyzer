(window.webpackJsonp=window.webpackJsonp||[]).push([[10,12,18],{280:function(t,e,n){"use strict";n.d(e,"d",(function(){return r})),n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return l}));n(11),n(164),n(15),n(127);var r=function(time){var t=time.match(/([0-9]+):([0-9]+):([0-9.]+)/);if(!t)return 0;var e=+t[1],n=+t[2];return+t[3]+60*n+3600*e},o=function(time){var t=time.match(/([0-9]+):([0-9]+):([0-9.]+)/);if(!t)return"";var e=+t[1],n=+t[2],r=+t[3],o="";return e&&(o+="".concat(e,"h")),n&&(o+="".concat(n,"m")),o+="".concat(r<10?"0":"").concat(r.toFixed(2),"s")},c=function(time){var t="",e=!0;return time>3600&&(e=!1,t+="".concat(Math.floor(time/3600),"h"),time%=3600),time>60&&(e=!1,t+="".concat(Math.floor(time/60),"m"),time%=60),t+="".concat(!e&&time<10?"0":"").concat(Math.abs(+time.toFixed(2)),"s")},l=function(time){var t="";t+="".concat(Math.floor(time/3600),":"),time%=3600;var e=Math.floor(time/60);return t+="".concat(e<10?"0":"").concat(e,":"),t+="".concat((time%=60)<10?"0":"").concat(Math.abs(+time.toFixed(6)))}},281:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return l}));var r=function(input){return null==input?[]:Array.isArray(input)?input:[input]},o=function(t){t.preventDefault(),t.returnValue=""},c=function(){window.addEventListener("beforeunload",o)},l=function(){window.removeEventListener("beforeunload",o)}},282:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r=new(n(9).default)},283:function(t,e,n){"use strict";n.d(e,"c",(function(){return l})),n.d(e,"b",(function(){return f})),n.d(e,"a",(function(){return d})),n.d(e,"d",(function(){return v}));n(16),n(1),n(3),n(101),n(102);var r=n(284),o=n(280),c=n(281),l=function(t){return!r.a.state.useRealTime&&(null==t?void 0:t.GameTime)?t.GameTime:(null==t?void 0:t.RealTime)||null},f=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=0;return t.Segment.map((function(t){var r;return(r=!0===e?t.BestSegmentTime.GameTime:!1===e?t.BestSegmentTime.RealTime:l(t.BestSegmentTime))&&(n+=Object(o.d)(r)),n}))},d=function(t){return t.Segment.reduce((function(t,e){return Object(c.a)(e.SplitTimes.SplitTime).forEach((function(s){t.includes(s["@_name"])||t.push(s["@_name"])})),t}),[])},v=function(t){r.a.state.splitFileIsModified=t,t?Object(c.b)():Object(c.c)()}},284:function(t,e,n){"use strict";var r=n(9).default.observable({hasGameTime:!1,useRealTime:!1,splitFile:{},splitFileIsModified:!1});e.a={get state(){return r}}},286:function(t,e,n){"use strict";n.r(e);var r=n(22),o=n(23),c=n(60),l=n(100),f=n(44),d=n(40),v=(n(6),n(1),n(163),n(279));function h(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var m=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},y=function(t){Object(c.a)(n,t);var e=h(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).visible=!1,t.id="collapse-xxxx",t}return Object(o.a)(n,[{key:"created",value:function(){this.visible=this.startsOpen}},{key:"mounted",value:function(){this.id="collapse-".concat(Math.floor(1e4*Math.random()))}}]),n}(v.Vue);m([Object(v.Prop)()],y.prototype,"title",void 0),m([Object(v.Prop)({default:!1})],y.prototype,"startsOpen",void 0);var O=y=m([v.Component],y),j=(n(290),n(65)),component=Object(j.a)(O,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-card",{staticClass:"mb-4",attrs:{title:t.title}},[n("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:t.id,expression:"id"}],staticClass:"toggle-collapse",attrs:{variant:"outline-secondary",pill:""}},[n("font-awesome-icon",{attrs:{icon:"chevron-left",rotation:t.visible?270:null}})],1),t._v(" "),n("b-collapse",{attrs:{id:t.id},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[t.visible?n("div",[t._t("default")],2):t._e()])],1)}),[],!1,null,"3695aa62",null);e.default=component.exports},287:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return c}));var r=n(282),o=function(t){r.a.$emit("startLoading",(function(){t(),r.a.$emit("stopLoading")}))},c=function(t){r.a.$emit("startLoading",(function(){t((function(){return r.a.$emit("stopLoading")}))}))}},288:function(t,e,n){var content=n(291);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(80).default)("767d371d",content,!0,{sourceMap:!1})},290:function(t,e,n){"use strict";n(288)},291:function(t,e,n){var r=n(79)(!1);r.push([t.i,"*[data-v-3695aa62]{color:#000}.toggle-collapse[data-v-3695aa62]{position:absolute;right:1rem;top:1rem}",""]),t.exports=r},293:function(t,e,n){"use strict";n.r(e);var r=n(22),o=n(23),c=n(60),l=n(100),f=n(44),d=n(40),v=(n(6),n(1),n(163),n(279)),h=n(287);function m(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var y=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},O=function(t){Object(c.a)(n,t);var e=m(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"inputChange",value:function(t){var e=this;Object(h.b)((function(n){e.$emit("input",t),e.$nextTick((function(){return n()}))}))}}]),n}(v.Vue);y([Object(v.Prop)()],O.prototype,"value",void 0),y([Object(v.Watch)("value")],O.prototype,"inputChange",null);var j=O=y([v.Component],O),R=n(65),component=Object(R.a)(j,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("b-checkbox",{attrs:{switch:""},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},294:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return o})),n.d(e,"c",(function(){return c}));var r="#1f77b4",o="#ffc400",c="#2db41e"},330:function(t,e,n){"use strict";n.r(e);n(163);var r=n(30),o=n(22),c=n(23),l=n(60),f=n(100),d=n(44),v=n(40),h=(n(6),n(1),n(2),n(16),n(66),n(49),n(279)),m=n(283),y=n(294),O=n(295),j=n(280);function R(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(d.a)(t);if(e){var o=Object(d.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(f.a)(this,n)}}var x=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(v.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},w=function(t){Object(l.a)(n,t);var e=R(n);function n(){var t;return Object(o.a)(this,n),(t=e.apply(this,arguments)).showResets=!0,t.lowerBoundFilter=0,t.higherBoundFilter=999999999,t.layout=function(){return{title:"Attempt history",xaxis:{title:"Finished runs"},yaxis:{title:"Time (seconds)",rangemode:t.graphYAxisToZero?"tozero":"nonnegative"}}},t.timeFormat=j.b,t}return Object(c.a)(n,[{key:"finishedAttempts",get:function(){var t=this;return this.attempts.filter((function(e){var time=Object(m.c)(e);if(!time)return!1;var n=Object(j.d)(time);return n>=t.lowerBoundFilter&&n<=t.higherBoundFilter}))}},{key:"plot_data",get:function(){return[{x:this.showResets?this.finishedAttempts.map((function(t){return t["@_id"]})):Array.from({length:this.finishedAttempts.length},(function(t,e){return e})),y:this.finishedAttempts.map((function(t){return Object(j.d)(Object(m.c)(t)||"")})),text:this.finishedAttempts.map((function(t){return Object(j.a)(Object(m.c)(t)||"")})),type:"scatter",hoverinfo:"text",mode:"lines+markers",line:{color:y.b,width:1}}]}},{key:"mounted",value:function(){var t=this.attempts.map((function(t){var time=Object(m.c)(t);return time?Object(j.d)(time):0}));this.higherBoundFilter=Math.max.apply(Math,Object(r.a)(t))}}]),n}(h.Vue);x([Object(h.Prop)()],w.prototype,"attempts",void 0),x([Object(h.Prop)({default:!1})],w.prototype,"graphYAxisToZero",void 0);var _=w=x([Object(h.Component)({components:{Plotly:O.Plotly}})],w),F=n(65),component=Object(F.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("collapsible-card",{staticClass:"text-center",attrs:{title:"Attempts stats"}},[n("hr"),t._v(" "),n("loading-switch",{staticClass:"mb-2",model:{value:t.showResets,callback:function(e){t.showResets=e},expression:"showResets"}},[t._v("\n    Include reset runs in X axis\n  ")]),t._v(" "),n("p",[t._v("\n    Filter runs that are between these times (in seconds):\n  ")]),t._v(" "),n("b-row",[n("b-col",{attrs:{cols:"6"}},[n("b-input",{attrs:{type:"number",min:0,debounce:"500",step:"0.01"},model:{value:t.lowerBoundFilter,callback:function(e){t.lowerBoundFilter=t._n(e)},expression:"lowerBoundFilter"}})],1),t._v(" "),n("b-col",{attrs:{cols:"6"}},[n("b-input",{attrs:{type:"number",min:0,debounce:"500",step:"0.01"},model:{value:t.higherBoundFilter,callback:function(e){t.higherBoundFilter=t._n(e)},expression:"higherBoundFilter"}})],1)],1),t._v(" "),n("p",{staticClass:"mt-3"},[t._v(t._s(t.finishedAttempts.length)+" finished runs in the range ["+t._s(t.timeFormat(t.lowerBoundFilter))+" ; "+t._s(t.timeFormat(t.higherBoundFilter))+"]")]),t._v(" "),n("Plotly",{attrs:{data:t.plot_data,layout:t.layout(),"display-mode-bar":!0}})],1)}),[],!1,null,"68432016",null);e.default=component.exports;installComponents(component,{LoadingSwitch:n(293).default,CollapsibleCard:n(286).default})}}]);