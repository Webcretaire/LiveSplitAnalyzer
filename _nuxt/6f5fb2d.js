(window.webpackJsonp=window.webpackJsonp||[]).push([[10,11,12,15,23,31],{278:function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return f})),n.d(e,"d",(function(){return m})),n.d(e,"a",(function(){return d}));var r=n(23),o=n(22),c=(n(1),function(input){return null==input?[]:Array.isArray(input)?input:[input]}),l=function(t){t.preventDefault(),t.returnValue=""},f=function(){window.addEventListener("beforeunload",l)},m=function(){window.removeEventListener("beforeunload",l)},d=Object(r.a)((function t(){var e=this;Object(o.a)(this,t),this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(t,n){e.reject=n,e.resolve=t}))}))},279:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r=new(n(9).default)},280:function(t,e,n){"use strict";var r=n(9).default.observable({hasGameTime:!1,useRealTime:!1,splitFile:{},splitFileIsModified:!1,PB:null});e.a={get state(){return r}}},281:function(t,e,n){"use strict";n.d(e,"d",(function(){return r})),n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return l}));n(11),n(162),n(15),n(127);var r=function(time){var t=time.match(/([0-9]+):([0-9]+):([0-9.]+)/);if(!t)return 0;var e=+t[1],n=+t[2];return+t[3]+60*n+3600*e},o=function(time){var t=time.match(/([0-9]+):([0-9]+):([0-9.]+)/);if(!t)return"";var e=+t[1],n=+t[2],r=+t[3],o="";return e&&(o+="".concat(e,"h")),n&&(o+="".concat(n,"m")),o+="".concat(r<10?"0":"").concat(r.toFixed(2),"s")},c=function(time){var t="",e=!0;return time>=3600&&(e=!1,t+="".concat(Math.floor(time/3600),"h"),time%=3600),time>=60&&(e=!1,t+="".concat(Math.floor(time/60),"m"),time%=60),t+="".concat(!e&&time<10?"0":"").concat(Math.abs(+time.toFixed(2)),"s")},l=function(time){var t="";t+="".concat(Math.floor(time/3600),":"),time%=3600;var e=Math.floor(time/60);return t+="".concat(e<10?"0":"").concat(e,":"),t+="".concat((time%=60)<10?"0":"").concat(Math.abs(+time.toFixed(6)))}},282:function(t,e,n){"use strict";n.d(e,"c",(function(){return l})),n.d(e,"b",(function(){return f})),n.d(e,"a",(function(){return m})),n.d(e,"d",(function(){return d}));n(16),n(1),n(3),n(101),n(102);var r=n(280),o=n(281),c=n(278),l=function(t){return(null==t?void 0:t.GameTime)&&!r.a.state.useRealTime?t.GameTime:(null==t?void 0:t.RealTime)||null},f=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=0;return t.Segment.map((function(t){var r;return(r=!0===e?t.BestSegmentTime.GameTime:!1===e?t.BestSegmentTime.RealTime:l(t.BestSegmentTime))&&(n+=Object(o.d)(r)),n}))},m=function(t){return t.Segment.reduce((function(t,e){return Object(c.b)(e.SplitTimes.SplitTime).forEach((function(s){t.includes(s["@_name"])||t.push(s["@_name"])})),t}),[])},d=function(t){r.a.state.splitFileIsModified=t,t?Object(c.c)():Object(c.d)()}},283:function(t,e,n){"use strict";n.r(e);var r=n(22),o=n(23),c=n(60),l=n(100),f=n(44),m=n(40),d=(n(6),n(1),n(161),n(277));function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var h=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(m.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},y=function(t){Object(c.a)(n,t);var e=v(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).visible=!1,t.id="collapse-xxxx",t}return Object(o.a)(n,[{key:"created",value:function(){this.visible=this.startsOpen}},{key:"mounted",value:function(){this.id="collapse-".concat(Math.floor(1e4*Math.random()))}}]),n}(d.Vue);h([Object(d.Prop)()],y.prototype,"title",void 0),h([Object(d.Prop)({default:!1})],y.prototype,"startsOpen",void 0),h([Object(d.Prop)({default:!0})],y.prototype,"lazy",void 0);var O=y=h([d.Component],y),j=(n(289),n(65)),component=Object(j.a)(O,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-card",{staticClass:"mb-4",attrs:{title:t.title}},[n("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:t.id,expression:"id"}],staticClass:"toggle-collapse",attrs:{variant:"outline-secondary",pill:""}},[n("font-awesome-icon",{attrs:{icon:"chevron-left",rotation:t.visible?270:null}})],1),t._v(" "),n("b-collapse",{attrs:{id:t.id},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[t.visible||!t.lazy?n("div",[t._t("default")],2):t._e()])],1)}),[],!1,null,"e584f7b2",null);e.default=component.exports},284:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return c}));var r=n(279),o=function(t){r.a.$emit("startLoading",(function(){t(),r.a.$emit("stopLoading")}))},c=function(t){r.a.$emit("startLoading",(function(){t((function(){return r.a.$emit("stopLoading")}))}))}},285:function(t,e,n){var content=n(290);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(80).default)("6d5c95cf",content,!0,{sourceMap:!1})},286:function(t,e,n){"use strict";n.r(e);var r=n(22),o=n(23),c=n(60),l=n(100),f=n(44),m=n(40),d=(n(6),n(1),n(161),n(277)),v=n(284);function h(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var y=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(m.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},O=function(t){Object(c.a)(n,t);var e=h(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"inputChange",value:function(t){var e=this;Object(v.b)((function(n){e.$emit("input",t),e.$nextTick((function(){return n()}))}))}}]),n}(d.Vue);y([Object(d.Prop)()],O.prototype,"value",void 0),y([Object(d.Watch)("value")],O.prototype,"inputChange",null);var j=O=y([d.Component],O),R=n(65),component=Object(R.a)(j,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("b-checkbox",{attrs:{switch:""},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},289:function(t,e,n){"use strict";n(285)},290:function(t,e,n){var r=n(79)(!1);r.push([t.i,"*[data-v-e584f7b2]{color:#000}.toggle-collapse[data-v-e584f7b2]{position:absolute;right:1rem;top:1rem}",""]),t.exports=r},293:function(t,e,n){"use strict";var r;n.d(e,"a",(function(){return r})),function(t){t[t.PING=0]="PING",t[t.DELETE_ATTEMPT_BEFORE_NUMBER=1]="DELETE_ATTEMPT_BEFORE_NUMBER",t[t.SEG_TIME_ARRAY_TO_SECONDS=2]="SEG_TIME_ARRAY_TO_SECONDS",t[t.GOLD_COORDINATES_FROM_SECONDS_ARRAY=3]="GOLD_COORDINATES_FROM_SECONDS_ARRAY",t[t.XML_PARSE_TEXT=4]="XML_PARSE_TEXT",t[t.MERGE_SPLIT_INTO_NEXT_ONE=5]="MERGE_SPLIT_INTO_NEXT_ONE",t[t.UPDATE_STORE_DATA=6]="UPDATE_STORE_DATA",t[t.GET_PB=7]="GET_PB"}(r||(r={}))},295:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));n(1),n(37);var r=n(278),o=new function(){return new Worker(n.p+"fccb347.worker.js")},c={};o.addEventListener("message",(function(t){var e=c[t.data.magic];e?(delete c[t.data.magic],e.resolve(t.data.message)):console.error("Got message from worker with no matching operation: ".concat(t.data.magic))}));var l=function(t){var e;do{e=btoa((1e10*Math.random()).toString())}while(c[e]);c[e]=new r.a;for(var n=arguments.length,l=new Array(n>1?n-1:0),f=1;f<n;f++)l[f-1]=arguments[f];return o.postMessage({message:{instruction:t,args:l},magic:e}),c[e].promise}},296:function(t,e,n){"use strict";n.r(e);n(161);var r=n(29),o=n(22),c=n(23),l=n(60),f=n(100),m=n(44),d=n(40),v=(n(6),n(1),n(2),n(16),n(304)),h=n.n(v),y=n(277),O=n(282),j=n(278),R=n(280);function _(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(m.a)(t);if(e){var o=Object(m.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(f.a)(this,n)}}var T=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},S=function(t){Object(l.a)(n,t);var e=_(n);function n(){var t;return Object(o.a)(this,n),(t=e.apply(this,arguments)).internalValue=1,t.filterRuns=!1,t}return Object(c.a)(n,[{key:"isPb",get:function(){var t;return this.internalValue===(null===(t=this.PB)||void 0===t?void 0:t["@_id"])}},{key:"PB",get:function(){return R.a.state.PB}},{key:"runAttempts",get:function(){return this.filterRuns?Object(j.b)(R.a.state.splitFile.Run.AttemptHistory.Attempt).filter((function(a){return Object(O.c)(a)})):Object(j.b)(R.a.state.splitFile.Run.AttemptHistory.Attempt)}},{key:"latestAttemptNumber",get:function(){return Math.max.apply(Math,Object(r.a)(this.runAttempts.map((function(a){return a["@_id"]}))))}},{key:"runSliderMarks",get:function(){return[this.runAttempts[0]["@_id"],this.latestAttemptNumber]}},{key:"onValueUpdate",value:function(t){this.internalValue=t}},{key:"onPbUpdate",value:function(t){this.internalValue=(null==t?void 0:t["@_id"])||1}},{key:"onInternalValueChange",value:function(t){this.$emit("input",t)}}]),n}(y.Vue);T([Object(y.Prop)()],S.prototype,"value",void 0),T([Object(y.Watch)("value",{immediate:!0})],S.prototype,"onValueUpdate",null),T([Object(y.Watch)("PB",{immediate:!0})],S.prototype,"onPbUpdate",null),T([Object(y.Watch)("internalValue")],S.prototype,"onInternalValueChange",null);var P=S=T([Object(y.Component)({components:{VueSlider:h.a}})],S),A=n(65),component=Object(A.a)(P,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mb-4"},[n("div",{staticClass:"d-flex mt-4 mb-2"},[n("b-form",{staticClass:"text-center m-auto",attrs:{inline:""}},[n("b-input-group",{attrs:{prepend:"Currently displayed run"}},[n("b-form-input",{attrs:{type:"number",max:t.latestAttemptNumber,min:"1",debounce:"500"},model:{value:t.internalValue,callback:function(e){t.internalValue=t._n(e)},expression:"internalValue"}})],1),t._v(" "),n("b-button",{staticClass:"ml-2",attrs:{variant:"outline-info",disabled:t.isPb},on:{click:function(e){t.internalValue=t.PB["@_id"]}}},[t._v("\n        Go to PB\n      ")])],1)],1),t._v(" "),n("loading-switch",{staticClass:"mt-3 mb-2",model:{value:t.filterRuns,callback:function(e){t.filterRuns=e},expression:"filterRuns"}},[t._v("\n    Filter out unfinished runs\n  ")]),t._v(" "),n("vue-slider",{staticClass:"attempt-selection-slider",attrs:{data:t.runAttempts,"data-value":"@_id","data-label":"@_id",marks:t.runSliderMarks,lazy:"",adsorb:""},model:{value:t.internalValue,callback:function(e){t.internalValue=e},expression:"internalValue"}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{LoadingSwitch:n(286).default})},334:function(t,e,n){"use strict";n.r(e);n(161);var r=n(22),o=n(23),c=n(60),l=n(100),f=n(44),m=n(40),d=(n(6),n(1),n(128),n(16),n(3),n(2),n(282)),v=n(281),h=n(284),y=n(278),O=n(277),j=n(279),R=n(280),_=n(295),T=n(293);function S(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var P=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(m.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},A=function(t){Object(c.a)(n,t);var e=S(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).visible=!1,t}return Object(o.a)(n,[{key:"splits",get:function(){return R.a.state.splitFile.Run.Segments.Segment}},{key:"reconstructAttemptTime",value:function(t){return this.splits.reduce((function(e,s){var time=Object(d.c)(Object(y.b)(s.SegmentHistory.Time).find((function(e){return e["@_id"]==t})));return time?Object(v.d)(time)+e:e}),0)}},{key:"allRunAttempts",get:function(){return Object(y.b)(R.a.state.splitFile.Run.AttemptHistory.Attempt)}},{key:"pbFromSplitHistory",get:function(){var t=this,e=Object(y.b)(this.splits[this.splits.length-1].SegmentHistory.Time).map((function(e){return{id:e["@_id"],time:t.reconstructAttemptTime(e["@_id"])}})),n=Object(v.d)("999:59:59.99"),r=0;return e.forEach((function(t){var e=t.id,time=t.time;e>0&&time<n&&(n=time,r=e)})),this.allRunAttempts.find((function(a){return a["@_id"]==r}))}},{key:"pbFromAttemptHistory",get:function(){var t,e=Object(v.d)("999:59:59.99");return this.allRunAttempts.forEach((function(n){if(!(n["@_id"]<=0)){var r=Object(d.c)(n);if(r){var o=Object(v.d)(r);o>1&&o<e&&(e=o,t=n)}}})),t}},{key:"fixPB",value:function(){var t=this;Object(h.a)((function(){Object(d.d)(!0);var e=t.pbFromAttemptHistory||t.pbFromSplitHistory;if(null==e?void 0:e["@_id"]){for(var n={RealTime:0,GameTime:0},i=0;i<R.a.state.splitFile.Run.Segments.Segment.length;++i){var r=t.splits[i].SplitTimes.SplitTime||[],o=Object(y.b)(r),c=Object(y.b)(t.splits[i].SegmentHistory.Time).find((function(t){return t["@_id"]==(null==e?void 0:e["@_id"])})),l=o.filter((function(t){return"Personal Best"!=t["@_name"]}));if(c){c.RealTime&&(n.RealTime+=Object(v.d)(c.RealTime)),c.GameTime&&(n.GameTime+=Object(v.d)(c.GameTime));var f={"@_name":"Personal Best",RealTime:Object(v.c)(n.RealTime)};(null==e?void 0:e.GameTime)&&(f.GameTime=Object(v.c)(n.GameTime)),l.push(f)}R.a.state.splitFile.Run.Segments.Segment[i].SplitTimes||(R.a.state.splitFile.Run.Segments.Segment[i].SplitTimes={SplitTime:[]}),R.a.state.splitFile.Run.Segments.Segment[i].SplitTimes.SplitTime=l}t.$bvToast.toast("PB time for each split was updated with run ".concat(null==e?void 0:e["@_id"]),{title:"Splits updated",autoHideDelay:5e3,appendToast:!1,variant:"success"})}else console.error("Couldn't find a PB in your splits, did you finish a run?")}))}},{key:"deletePreviousRuns",value:function(){var t=this;j.a.$emit("openConfirm","Delete all attempts before #".concat(this.currentAttemptNumber," included?"),(function(){Object(h.b)((function(e){var n;return Object(_.a)(T.a.DELETE_ATTEMPT_BEFORE_NUMBER,R.a.state.splitFile.Run,null===(n=R.a.state.PB)||void 0===n?void 0:n["@_id"],t.currentAttemptNumber).then((function(t){Object(d.d)(!0),R.a.state.splitFile.Run=t,R.a.state.splitFile.Run.AttemptCount=Object(y.b)(t.AttemptHistory.Attempt).length,e()}))}))}))}}]),n}(O.Vue);P([Object(O.Prop)()],A.prototype,"currentAttemptNumber",void 0),P([Object(O.Prop)()],A.prototype,"pb",void 0);var E=A=P([O.Component],A),k=n(65),component=Object(k.a)(E,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("collapsible-card",{attrs:{title:"Toolbox (experimental)"}},[n("p",[n("b-button",{attrs:{variant:"info"},on:{click:t.fixPB}},[n("font-awesome-icon",{attrs:{icon:"screwdriver-wrench"}}),t._v("\n      Fix Personal Best\n    ")],1),t._v(" "),n("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"help-question",attrs:{title:"Fix PB split time for each segment, if your PB comparison is currently broken"}},[n("font-awesome-icon",{attrs:{icon:"circle-question"}})],1)],1),t._v(" "),n("p",[n("b-button",{attrs:{variant:"danger"},on:{click:t.deletePreviousRuns}},[n("font-awesome-icon",{attrs:{icon:"trash"}}),t._v("\n      Delete all attempts before #"+t._s(t.currentAttemptNumber)+"\n    ")],1),t._v(" "),n("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"help-question",attrs:{title:"Delete all attempts before the currently selected one in options (included). If your PB is in this range it will not be deleted."}},[n("font-awesome-icon",{attrs:{icon:"circle-question"}})],1)],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CollapsibleCard:n(283).default})},335:function(t,e,n){"use strict";n.r(e);n(161);var r=n(22),o=n(23),c=n(60),l=n(100),f=n(44),m=n(40),d=(n(6),n(1),n(15),n(16),n(128),n(127),n(281)),v=n(277),h=n(282),y=n(298),O=n(278);function j(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var R=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(m.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},_=function(t){Object(c.a)(n,t);var e=j(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).renderGraph=!0,t.visible=!1,t.sortByTimesave=!1,t.layout={margin:{t:0,b:0,l:0,r:0}},t.secondsToFormattedString=d.b,t}return Object(o.a)(n,[{key:"titleAttempt",get:function(){return"".concat(this.isPb?"Personal Best":"Attempt n°".concat(this.attempt["@_id"])," overview (").concat(Object(d.b)(this.attemptTime)," total)")}},{key:"titleTimesave",get:function(){return"Possible timesave (".concat(Object(d.b)(this.attemptTimesave)," total)")}},{key:"AttemptSegments",get:function(){var t=this;return this.run.Segments.Segment.map((function(e){return Object(O.b)(e.SegmentHistory.Time).find((function(e){return e["@_id"]==t.attempt["@_id"]}))}))}},{key:"AttemptSplitTimes",get:function(){return this.AttemptSegments.map((function(s){var t=Object(h.c)(s);return t?Object(d.d)(t):null}))}},{key:"attemptTime",get:function(){return this.AttemptSplitTimes.reduce((function(t,e){return t+(e||0)}),0)}},{key:"attemptSplitTimesaves",get:function(){var t=this;return this.run.Segments.Segment.map((function(e,n){var s=t.AttemptSegments[n],r=Object(h.c)(s),o=Object(h.c)(e.BestSegmentTime);if(!r||!o)return null;var c=Object(d.d)(r);return c-=Object(d.d)(o),c,c}))}},{key:"attemptTimesave",get:function(){return this.attemptSplitTimesaves.reduce((function(t,e){return t+(e||0)}),0)}},{key:"makePlotData",value:function(title,data,t,e){return[{values:data,labels:t,domain:{column:0},title:title,hoverinfo:"label+percent",hole:.6,type:"pie",sort:e,automargin:!0,textinfo:this.displayLabels?"percent":"none"}]}},{key:"plotDataAttempt",value:function(){var t=this;return this.makePlotData("Split times",this.AttemptSplitTimes,this.run.Segments.Segment.map((function(e){var time=Object(h.c)(Object(O.b)(e.SegmentHistory.Time).find((function(e){return e["@_id"]==t.attempt["@_id"]})));return time?"".concat(e.Name," (").concat(Object(d.a)(time),")"):e.Name})),!1)}},{key:"plotDataTimesave",value:function(){var t=this,e=this.run.Segments.Segment.map((function(e,i){var n=t.attemptSplitTimesaves[i];return"".concat(e.Name," (").concat(n?Object(d.b)(n):"",")")}));return this.makePlotData("Attempt compared to golds",this.attemptSplitTimesaves.map((function(t){return t?+t.toFixed(2):null})),e,this.sortByTimesave)}}]),n}(v.Vue);R([Object(v.Prop)()],_.prototype,"run",void 0),R([Object(v.Prop)()],_.prototype,"attempt",void 0),R([Object(v.Prop)()],_.prototype,"graphYAxisToZero",void 0),R([Object(v.Prop)()],_.prototype,"isPb",void 0),R([Object(v.Prop)()],_.prototype,"displayLabels",void 0);var T=_=R([Object(v.Component)({components:{Plotly:y.Plotly}})],_),S=n(65),component=Object(S.a)(T,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("collapsible-card",{staticClass:"text-center",attrs:{id:"AttemptOverviewTimeCard",title:t.titleAttempt}},[t.renderGraph?n("Plotly",{attrs:{data:t.plotDataAttempt(),layout:t.layout,"display-mode-bar":!0}}):t._e()],1),t._v(" "),n("collapsible-card",{staticClass:"text-center",attrs:{id:"AttemptOverviewTimesaveCard",title:t.titleTimesave}},[n("loading-switch",{staticClass:"mt-2 mb-4",model:{value:t.sortByTimesave,callback:function(e){t.sortByTimesave=e},expression:"sortByTimesave"}},[t._v("\n      Sort by possible timesave\n    ")]),t._v(" "),t.renderGraph?n("Plotly",{attrs:{data:t.plotDataTimesave(),layout:t.layout,"display-mode-bar":!0}}):t._e()],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CollapsibleCard:n(283).default,LoadingSwitch:n(286).default})},343:function(t,e,n){"use strict";n.r(e);n(161);var r=n(22),o=n(23),c=n(60),l=n(100),f=n(44),m=n(40),d=(n(6),n(1),n(128),n(277)),v=n(280),h=n(278);function y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var O=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(m.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},j=function(t){Object(c.a)(n,t);var e=y(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).currentAttemptNumber=1,t.displayLabels=!1,t.globalState=v.a.state,t}return Object(o.a)(n,[{key:"PB",get:function(){return this.globalState.PB}},{key:"isPb",get:function(){var t;return this.currentAttemptNumber===(null===(t=this.PB)||void 0===t?void 0:t["@_id"])}},{key:"currentAttempt",get:function(){var t=this;return Object(h.b)(this.globalState.splitFile.Run.AttemptHistory.Attempt).find((function(a){return a["@_id"]==t.currentAttemptNumber}))||this.PB}},{key:"mounted",value:function(){this.displayLabels=(this.globalState.splitFile.Run.Segments.Segment.length||0)<=30}}]),n}(d.Vue),R=j=O([d.Component],j),_=n(65),component=Object(_.a)(R,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("collapsible-card",{attrs:{title:"Options",lazy:!1}},[n("attempt-selector",{model:{value:t.currentAttemptNumber,callback:function(e){t.currentAttemptNumber=e},expression:"currentAttemptNumber"}}),t._v(" "),n("b-col",{attrs:{cols:"10",offset:"1"}},[n("hr")]),t._v(" "),n("loading-switch",{staticClass:"mb-2",model:{value:t.displayLabels,callback:function(e){t.displayLabels=e},expression:"displayLabels"}},[t._v("\n      Display labels for doughnut charts\n    ")])],1),t._v(" "),n("toolbox",{staticClass:"mb-4",attrs:{"current-attempt-number":t.currentAttemptNumber}}),t._v(" "),n("attempt-overview",{attrs:{run:t.globalState.splitFile.Run,attempt:t.currentAttempt,"is-pb":t.isPb,"display-labels":t.displayLabels}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AttemptSelector:n(296).default,LoadingSwitch:n(286).default,CollapsibleCard:n(283).default,Toolbox:n(334).default,AttemptOverview:n(335).default})}}]);