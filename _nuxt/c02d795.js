(window.webpackJsonp=window.webpackJsonp||[]).push([[10,12,18,23],{280:function(t,e,n){"use strict";n.d(e,"d",(function(){return r})),n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return l}));n(11),n(164),n(15),n(127);var r=function(time){var t=time.match(/([0-9]+):([0-9]+):([0-9.]+)/);if(!t)return 0;var e=+t[1],n=+t[2];return+t[3]+60*n+3600*e},o=function(time){var t=time.match(/([0-9]+):([0-9]+):([0-9.]+)/);if(!t)return"";var e=+t[1],n=+t[2],r=+t[3],o="";return e&&(o+="".concat(e,"h")),n&&(o+="".concat(n,"m")),o+="".concat(r<10?"0":"").concat(r.toFixed(2),"s")},c=function(time){var t="",e=!0;return time>=3600&&(e=!1,t+="".concat(Math.floor(time/3600),"h"),time%=3600),time>=60&&(e=!1,t+="".concat(Math.floor(time/60),"m"),time%=60),t+="".concat(!e&&time<10?"0":"").concat(Math.abs(+time.toFixed(2)),"s")},l=function(time){var t="";t+="".concat(Math.floor(time/3600),":"),time%=3600;var e=Math.floor(time/60);return t+="".concat(e<10?"0":"").concat(e,":"),t+="".concat((time%=60)<10?"0":"").concat(Math.abs(+time.toFixed(6)))}},281:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return l}));var r=function(input){return null==input?[]:Array.isArray(input)?input:[input]},o=function(t){t.preventDefault(),t.returnValue=""},c=function(){window.addEventListener("beforeunload",o)},l=function(){window.removeEventListener("beforeunload",o)}},282:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r=new(n(9).default)},283:function(t,e,n){"use strict";n.d(e,"c",(function(){return l})),n.d(e,"b",(function(){return f})),n.d(e,"a",(function(){return d})),n.d(e,"d",(function(){return h}));n(16),n(1),n(3),n(101),n(102);var r=n(284),o=n(280),c=n(281),l=function(t){return!r.a.state.useRealTime&&(null==t?void 0:t.GameTime)?t.GameTime:(null==t?void 0:t.RealTime)||null},f=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=0;return t.Segment.map((function(t){var r;return(r=!0===e?t.BestSegmentTime.GameTime:!1===e?t.BestSegmentTime.RealTime:l(t.BestSegmentTime))&&(n+=Object(o.d)(r)),n}))},d=function(t){return t.Segment.reduce((function(t,e){return Object(c.a)(e.SplitTimes.SplitTime).forEach((function(s){t.includes(s["@_name"])||t.push(s["@_name"])})),t}),[])},h=function(t){r.a.state.splitFileIsModified=t,t?Object(c.b)():Object(c.c)()}},284:function(t,e,n){"use strict";var r=n(9).default.observable({hasGameTime:!1,useRealTime:!1,splitFile:{},splitFileIsModified:!1});e.a={get state(){return r}}},286:function(t,e,n){"use strict";n.r(e);var r=n(22),o=n(23),c=n(60),l=n(100),f=n(44),d=n(40),h=(n(6),n(1),n(163),n(279));function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var m=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},y=function(t){Object(c.a)(n,t);var e=v(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).visible=!1,t.id="collapse-xxxx",t}return Object(o.a)(n,[{key:"created",value:function(){this.visible=this.startsOpen}},{key:"mounted",value:function(){this.id="collapse-".concat(Math.floor(1e4*Math.random()))}}]),n}(h.Vue);m([Object(h.Prop)()],y.prototype,"title",void 0),m([Object(h.Prop)({default:!1})],y.prototype,"startsOpen",void 0);var O=y=m([h.Component],y),j=(n(290),n(65)),component=Object(j.a)(O,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-card",{staticClass:"mb-4",attrs:{title:t.title}},[n("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:t.id,expression:"id"}],staticClass:"toggle-collapse",attrs:{variant:"outline-secondary",pill:""}},[n("font-awesome-icon",{attrs:{icon:"chevron-left",rotation:t.visible?270:null}})],1),t._v(" "),n("b-collapse",{attrs:{id:t.id},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[t.visible?n("div",[t._t("default")],2):t._e()])],1)}),[],!1,null,"3695aa62",null);e.default=component.exports},287:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return c}));var r=n(282),o=function(t){r.a.$emit("startLoading",(function(){t(),r.a.$emit("stopLoading")}))},c=function(t){r.a.$emit("startLoading",(function(){t((function(){return r.a.$emit("stopLoading")}))}))}},288:function(t,e,n){var content=n(291);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(80).default)("767d371d",content,!0,{sourceMap:!1})},290:function(t,e,n){"use strict";n(288)},291:function(t,e,n){var r=n(79)(!1);r.push([t.i,"*[data-v-3695aa62]{color:#000}.toggle-collapse[data-v-3695aa62]{position:absolute;right:1rem;top:1rem}",""]),t.exports=r},293:function(t,e,n){var content=n(299);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(80).default)("e92f8996",content,!0,{sourceMap:!1})},294:function(t,e,n){"use strict";n.r(e);var r=n(22),o=n(23),c=n(60),l=n(100),f=n(44),d=n(40),h=(n(6),n(1),n(163),n(279)),v=n(287);function m(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var y=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},O=function(t){Object(c.a)(n,t);var e=m(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"inputChange",value:function(t){var e=this;Object(v.b)((function(n){e.$emit("input",t),e.$nextTick((function(){return n()}))}))}}]),n}(h.Vue);y([Object(h.Prop)()],O.prototype,"value",void 0),y([Object(h.Watch)("value")],O.prototype,"inputChange",null);var j=O=y([h.Component],O),x=n(65),component=Object(x.a)(j,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("b-checkbox",{attrs:{switch:""},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},295:function(t,e,n){"use strict";n.r(e);n(163);var r=n(22),o=n(23),c=n(60),l=n(100),f=n(44),d=n(40),h=(n(6),n(1),n(127),n(220),n(279));function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var m=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},y=function(t){Object(c.a)(n,t);var e=v(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).hours=0,t.minutes=0,t.seconds=0,t}return Object(o.a)(n,[{key:"outputInSeconds",get:function(){return 3600*+this.hours+60*+this.minutes+ +this.seconds}},{key:"onInputChange",value:function(){this.$emit("input",this.outputInSeconds)}},{key:"mounted",value:function(){var time=this.value;time>3600&&(this.hours=Math.floor(time/3600),time%=3600),time>60&&(this.minutes=Math.floor(time/60),time%=60),this.seconds=+time.toFixed(2)}}]),n}(h.Vue);m([Object(h.Prop)({type:Number})],y.prototype,"value",void 0);var O=y=m([h.Component],y),j=(n(298),n(65)),component=Object(j.a)(O,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-form",{staticClass:"time-form",attrs:{inline:""}},[n("b-row",[n("b-col",{staticClass:"column",attrs:{cols:"4"}},[n("b-input-group",{attrs:{append:"h"}},[n("b-form-input",{attrs:{placeholder:"Hours",type:"number",step:"1"},on:{change:t.onInputChange},model:{value:t.hours,callback:function(e){t.hours=t._n(e)},expression:"hours"}})],1)],1),t._v(" "),n("b-col",{staticClass:"column",attrs:{cols:"4"}},[n("b-input-group",{attrs:{append:"m"}},[n("b-form-input",{attrs:{placeholder:"Minutes",type:"number",step:"1"},on:{change:t.onInputChange},model:{value:t.minutes,callback:function(e){t.minutes=t._n(e)},expression:"minutes"}})],1)],1),t._v(" "),n("b-col",{staticClass:"column",attrs:{cols:"4"}},[n("b-input-group",{attrs:{append:"s"}},[n("b-form-input",{attrs:{placeholder:"Seconds",type:"number",step:"0.01"},on:{change:t.onInputChange},model:{value:t.seconds,callback:function(e){t.seconds=t._n(e)},expression:"seconds"}})],1)],1)],1)],1)}),[],!1,null,"79f6961e",null);e.default=component.exports},296:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return o})),n.d(e,"c",(function(){return c}));var r="#1f77b4",o="#ffc400",c="#2db41e"},298:function(t,e,n){"use strict";n(293)},299:function(t,e,n){var r=n(79)(!1);r.push([t.i,".column[data-v-79f6961e]{padding-left:.25rem;padding-right:.25rem}.time-form[data-v-79f6961e]{padding-left:1rem;padding-right:1rem}",""]),t.exports=r},302:function(t,e,n){var content=n(350);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(80).default)("3a2b4e12",content,!0,{sourceMap:!1})},335:function(t,e,n){"use strict";n.r(e);n(163);var r=n(30),o=n(22),c=n(23),l=n(60),f=n(100),d=n(44),h=n(40),v=(n(6),n(1),n(2),n(16),n(66),n(49),n(280)),m=n(279),y=n(283),O=n(296),j=n(297);function x(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(d.a)(t);if(e){var o=Object(d.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(f.a)(this,n)}}var R=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(h.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},_=function(t){Object(l.a)(n,t);var e=x(n);function n(){var t;return Object(o.a)(this,n),(t=e.apply(this,arguments)).showResets=!0,t.lowerBoundFilter=0,t.higherBoundFilter=999999999,t.layout=function(){return{title:"Attempt history",xaxis:{title:"Finished runs"},yaxis:{title:"Time (seconds)",rangemode:t.graphYAxisToZero?"tozero":"nonnegative"}}},t.timeFormat=v.b,t}return Object(c.a)(n,[{key:"finishedAttempts",get:function(){var t=this;return this.attempts.filter((function(e){var time=Object(y.c)(e);if(!time)return!1;var n=Object(v.d)(time);return n>=t.lowerBoundFilter&&n<=t.higherBoundFilter}))}},{key:"plot_data",get:function(){var t=this.finishedAttempts.map((function(t){return Object(y.c)(t)||""}));return[{x:this.showResets?this.finishedAttempts.map((function(t){return t["@_id"]})):Array.from({length:this.finishedAttempts.length},(function(t,e){return e})),y:t.map((function(t){return Object(v.d)(t)})),text:t.map((function(t){return Object(v.a)(t)})),type:"scatter",hoverinfo:"text",mode:"lines+markers",line:{color:O.b,width:1}}]}},{key:"mounted",value:function(){var t=this.attempts.map((function(t){var time=Object(y.c)(t);return time?Object(v.d)(time):0}));this.higherBoundFilter=Math.max.apply(Math,Object(r.a)(t))}}]),n}(m.Vue);R([Object(m.Prop)()],_.prototype,"attempts",void 0),R([Object(m.Prop)({default:!1})],_.prototype,"graphYAxisToZero",void 0);var w=_=R([Object(m.Component)({components:{Plotly:j.Plotly}})],_),C=(n(349),n(65)),component=Object(C.a)(w,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("collapsible-card",{staticClass:"text-center",attrs:{title:"Attempts stats"}},[n("hr"),t._v(" "),n("loading-switch",{staticClass:"mb-2",model:{value:t.showResets,callback:function(e){t.showResets=e},expression:"showResets"}},[t._v("\n    Include reset runs in X axis\n  ")]),t._v(" "),n("p",[t._v("\n    Filter runs that are between these times:\n  ")]),t._v(" "),n("div",{staticClass:"d-flex justify-content-center mt-1"},[n("div",{staticClass:"time-select-label"},[t._v("\n      Lower bound\n    ")]),t._v(" "),n("div",{staticClass:"time-select-input"},[n("time-selector",{model:{value:t.lowerBoundFilter,callback:function(e){t.lowerBoundFilter=e},expression:"lowerBoundFilter"}})],1)]),t._v(" "),n("div",{staticClass:"d-flex justify-content-center mt-1"},[n("div",{staticClass:"time-select-label"},[t._v("\n      Higher bound\n    ")]),t._v(" "),n("div",{staticClass:"time-select-input"},[n("time-selector",{model:{value:t.higherBoundFilter,callback:function(e){t.higherBoundFilter=e},expression:"higherBoundFilter"}})],1)]),t._v(" "),n("p",{staticClass:"mt-3"},[t._v("\n    "+t._s(t.finishedAttempts.length)+" finished runs in the range\n    [ "+t._s(t.timeFormat(t.lowerBoundFilter))+" ; "+t._s(t.timeFormat(t.higherBoundFilter))+" ]\n  ")]),t._v(" "),n("Plotly",{attrs:{data:t.plot_data,layout:t.layout(),"display-mode-bar":!0}})],1)}),[],!1,null,"6242b995",null);e.default=component.exports;installComponents(component,{LoadingSwitch:n(294).default,TimeSelector:n(295).default,CollapsibleCard:n(286).default})},349:function(t,e,n){"use strict";n(302)},350:function(t,e,n){var r=n(79)(!1);r.push([t.i,".time-select-label[data-v-6242b995]{text-align:right;line-height:2.25rem;min-width:10rem;padding-right:.5rem}.time-select-input[data-v-6242b995]{width:40rem}",""]),t.exports=r}}]);