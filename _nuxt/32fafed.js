(window.webpackJsonp=window.webpackJsonp||[]).push([[37,20,27,36,38],{280:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r=new(n(9).default)},281:function(t,e,n){"use strict";var r=n(9).default.observable({hasGameTime:!1,useRealTime:!1,splitFileIsModified:!1,PB:null,autoSplitterSettings:null});e.a={get state(){return r}}},282:function(t,e,n){"use strict";n.d(e,"d",(function(){return r})),n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return l})),n.d(e,"c",(function(){return c}));n(11),n(163),n(15),n(127),n(290),n(291),n(292);var r=function(time){var t=time.match(/([0-9]+):([0-9]+):([0-9.]+)/);if(!t)return 0;var e=+t[1],n=+t[2];return+t[3]+60*n+3600*e},o=function(time){var t=time.match(/([0-9]+):([0-9]+):([0-9.]+)/);if(!t)return"";var e=+t[1],n=+t[2],r=+t[3],o="";return e&&(o+="".concat(e,"h")),n&&(o+="".concat(n,"m")),o+="".concat(r<10?"0":"").concat(r.toFixed(2),"s")},l=function(time){var t="",e=!0;return time>=3600&&(e=!1,t+="".concat(Math.floor(time/3600),"h"),time%=3600),time>=60&&(e=!1,t+="".concat(Math.floor(time/60),"m"),time%=60),t+="".concat(!e&&time<10?"0":"").concat(Math.abs(+time.toFixed(2)),"s")},c=function(time){var t="",e=Math.trunc(time/3600).toFixed();t+="".concat(e.padStart(2,"0"),":"),time%=3600;var n=Math.trunc(time/60).toFixed();t+="".concat(n.padStart(2,"0"),":"),time%=60;var r=Math.trunc(time),o=(time-r).toFixed(7).substring(2);return t+="".concat(r.toFixed().padStart(2,"0"),".").concat(o.padEnd(7,"0"))}},283:function(t,e,n){"use strict";n.d(e,"c",(function(){return c})),n.d(e,"b",(function(){return d})),n.d(e,"a",(function(){return f})),n.d(e,"d",(function(){return m}));n(16),n(1),n(3),n(101),n(102);var r=n(281),o=n(282),l=n(284),c=function(t){return(null==t?void 0:t.GameTime)&&!r.a.state.useRealTime?t.GameTime:(null==t?void 0:t.RealTime)||null},d=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=0;return t.map((function(t){var r;return(r=!0===e?t.BestSegmentTime.GameTime:!1===e?t.BestSegmentTime.RealTime:c(t.BestSegmentTime))&&(n+=Object(o.d)(r)),n}))},f=function(t){return t.reduce((function(t,e){return e.SplitTimes.SplitTime.forEach((function(s){t.includes(s["@_name"])||t.push(s["@_name"])})),t}),[])},m=function(t){r.a.state.splitFileIsModified=t,t?Object(l.c)():Object(l.d)()}},284:function(t,e,n){"use strict";n.d(e,"b",(function(){return l})),n.d(e,"c",(function(){return d})),n.d(e,"d",(function(){return f})),n.d(e,"a",(function(){return m}));var r=n(23),o=n(22),l=(n(1),function(input){return null==input?[]:Array.isArray(input)?input:[input]}),c=function(t){t.preventDefault(),t.returnValue=""},d=function(){window.addEventListener("beforeunload",c)},f=function(){window.removeEventListener("beforeunload",c)},m=Object(r.a)((function t(){var e=this;Object(o.a)(this,t),this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(t,n){e.reject=n,e.resolve=t}))}))},285:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return l}));var r=n(280),o=function(t){r.a.$emit("startLoading",(function(){t(),r.a.$emit("stopLoading")}))},l=function(t){r.a.$emit("startLoading",(function(){t((function(){return r.a.$emit("stopLoading")}))}))}},286:function(t,e,n){"use strict";n.r(e);var r=n(22),o=n(23),l=n(60),c=n(100),d=n(44),f=n(40),m=(n(6),n(1),n(162),n(279));function h(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(d.a)(t);if(e){var o=Object(d.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(c.a)(this,n)}}var v=function(t,e,n,desc){var r,o=arguments.length,l=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(l=(o<3?r(l):o>3?r(e,n,l):r(e,n))||l);return o>3&&l&&Object.defineProperty(e,n,l),l},y=function(t){Object(l.a)(n,t);var e=h(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).visible=!1,t.id="collapse-xxxx",t}return Object(o.a)(n,[{key:"created",value:function(){this.visible=this.startsOpen}},{key:"mounted",value:function(){this.id="collapse-".concat(Math.floor(1e4*Math.random()))}}]),n}(m.Vue);v([Object(m.Prop)()],y.prototype,"title",void 0),v([Object(m.Prop)({default:!1})],y.prototype,"startsOpen",void 0),v([Object(m.Prop)({default:!0})],y.prototype,"lazy",void 0);var O=y=v([m.Component],y),_=(n(297),n(65)),component=Object(_.a)(O,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-card",{staticClass:"mb-4",attrs:{title:t.title}},[n("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:t.id,expression:"id"}],staticClass:"toggle-collapse",attrs:{variant:"outline-secondary",pill:""}},[n("font-awesome-icon",{attrs:{icon:"chevron-left",rotation:t.visible?270:null}})],1),t._v(" "),n("b-collapse",{attrs:{id:t.id},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[t.visible||!t.lazy?n("div",[t._t("default")],2):t._e()])],1)}),[],!1,null,"e584f7b2",null);e.default=component.exports},289:function(t,e,n){var content=n(298);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(80).default)("6d5c95cf",content,!0,{sourceMap:!1})},293:function(t,e,n){"use strict";n.r(e);var r=n(22),o=n(23),l=n(60),c=n(100),d=n(44),f=n(40),m=(n(6),n(1),n(162),n(279)),h=n(285);function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(d.a)(t);if(e){var o=Object(d.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(c.a)(this,n)}}var y=function(t,e,n,desc){var r,o=arguments.length,l=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(l=(o<3?r(l):o>3?r(e,n,l):r(e,n))||l);return o>3&&l&&Object.defineProperty(e,n,l),l},O=function(t){Object(l.a)(n,t);var e=v(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).internalValue=!0,t}return Object(o.a)(n,[{key:"valueChange",value:function(t){this.internalValue=t}},{key:"inputChange",value:function(t){var e=this;Object(h.b)((function(n){e.$emit("input",t),e.$nextTick((function(){return n()}))}))}}]),n}(m.Vue);y([Object(m.Prop)()],O.prototype,"value",void 0),y([Object(m.Watch)("value",{immediate:!0})],O.prototype,"valueChange",null),y([Object(m.Watch)("internalValue")],O.prototype,"inputChange",null);var _=O=y([m.Component],O),j=n(65),component=Object(j.a)(_,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("b-checkbox",{attrs:{switch:""},model:{value:t.internalValue,callback:function(e){t.internalValue=e},expression:"internalValue"}},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},295:function(t,e,n){"use strict";var r;n.d(e,"a",(function(){return r})),function(t){t[t.PING=0]="PING",t[t.DELETE_ATTEMPT_BEFORE_NUMBER=1]="DELETE_ATTEMPT_BEFORE_NUMBER",t[t.SEG_TIME_ARRAY_TO_SECONDS=2]="SEG_TIME_ARRAY_TO_SECONDS",t[t.GOLD_COORDINATES_FROM_SECONDS_ARRAY=3]="GOLD_COORDINATES_FROM_SECONDS_ARRAY",t[t.XML_PARSE_TEXT=4]="XML_PARSE_TEXT",t[t.MERGE_SPLIT_INTO_NEXT_ONE=5]="MERGE_SPLIT_INTO_NEXT_ONE",t[t.UPDATE_STORE_DATA=6]="UPDATE_STORE_DATA",t[t.GET_PB=7]="GET_PB",t[t.GENERATE_SPLIT_DETAIL=8]="GENERATE_SPLIT_DETAIL",t[t.MOVE_TIME_TO_OTHER_SPLIT=9]="MOVE_TIME_TO_OTHER_SPLIT"}(r||(r={}))},296:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));n(1),n(37);var r=n(284),o=new function(){return new Worker(n.p+"71ba0db.worker.js")},l={};o.addEventListener("message",(function(t){var e=l[t.data.magic];e?(delete l[t.data.magic],e.resolve(t.data.message)):console.error("Got message from worker with no matching operation: ".concat(t.data.magic))}));var c=function(t){var e;do{e=btoa((1e10*Math.random()).toString())}while(l[e]);l[e]=new r.a;for(var n=arguments.length,c=new Array(n>1?n-1:0),d=1;d<n;d++)c[d-1]=arguments[d];return o.postMessage({message:{instruction:t,args:c},magic:e}),l[e].promise}},297:function(t,e,n){"use strict";n(289)},298:function(t,e,n){var r=n(79)(!1);r.push([t.i,"*[data-v-e584f7b2]{color:#000}.toggle-collapse[data-v-e584f7b2]{position:absolute;right:1rem;top:1rem}",""]),t.exports=r},303:function(t,e,n){"use strict";n.d(e,"c",(function(){return r})),n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return l})),n.d(e,"d",(function(){return c}));var r="#1f77b4",o="#ffc400",l="#2db41e",c="#141f85"},306:function(t,e,n){var content=n(316);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(80).default)("7a62e3fe",content,!0,{sourceMap:!1})},307:function(t,e,n){var content=n(318);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(80).default)("33c3e210",content,!0,{sourceMap:!1})},308:function(t,e,n){"use strict";n.r(e);n(162);var r=n(29),o=n(22),l=n(23),c=n(60),d=n(100),f=n(44),m=n(40),h=(n(6),n(1),n(11),n(26),n(128),n(81),n(16),n(2),n(15),n(67),n(49),n(279)),v=n(283),y=n(282),O=n(303),_=n(281),j=n(296),x=n(295);function S(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(d.a)(this,n)}}var A=function(t,e,n,desc){var r,o=arguments.length,l=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(m.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(l=(o<3?r(l):o>3?r(e,n,l):r(e,n))||l);return o>3&&l&&Object.defineProperty(e,n,l),l},T=function(t){Object(c.a)(n,t);var e=S(n);function n(){var t;return Object(o.a)(this,n),(t=e.apply(this,arguments)).collapseVisible=!1,t.timesSeconds=[],t.layout={},t.gold={x:0,y:0},t.formatTime=y.a,t}return Object(l.a)(n,[{key:"useRealTime",get:function(){return _.a.state.useRealTime}},{key:"updateLayout",value:function(){var t={title:"Time history",xaxis:{title:"Finished number (".concat(this.timesWithPositiveIds.length," total)")},yaxis:{title:"Time (seconds)",rangemode:this.graphYAxisToZero?"tozero":"nonnegative"},annotations:[{x:this.gold.x,y:this.gold.y,text:"Gold",font:{color:O.b},arrowhead:2,arrowsize:1,arrowwidth:2,arrowcolor:O.b,ax:0,ay:30}],shapes:[]},e=Object(v.c)(this.currentAttempt);this.graphCurrentAttemptHline&&this.currentAttemptNumber&&e&&t.shapes.push({type:"line",x0:0,y0:Object(y.d)(e),x1:this.timesSeconds.length-1,y1:Object(y.d)(e),line:{color:O.a,width:1,dash:"dot"}});var n=Object(v.c)(this.medianAttempt);this.graphMedianAttemptHline&&n&&t.shapes.push({type:"line",x0:0,y0:Object(y.d)(n),x1:this.timesSeconds.length-1,y1:Object(y.d)(n),line:{color:O.d,width:1,dash:"dot"}}),this.layout=t}},{key:"bestTimeDisplay",get:function(){return Object(y.a)(Object(v.c)(this.split.BestSegmentTime)||"")}},{key:"updateGold",value:function(t){var e=this;Object(j.a)(x.a.GOLD_COORDINATES_FROM_SECONDS_ARRAY,t).then((function(t){return e.gold=t}))}},{key:"currentAttempt",get:function(){var t=this;return this.timesWithPositiveIds.find((function(e){return e["@_id"]===t.currentAttemptNumber}))}},{key:"medianAttempt",get:function(){var t,e=Object(r.a)(this.timesSeconds).sort((function(a,b){return(a||0)-(b||0)})),n=Math.round(this.timesSeconds.length/2)-1;return null===(t=this.split.SegmentHistory)||void 0===t?void 0:t.Time.find((function(t){return Object(y.d)(Object(v.c)(t)||"0:0:0.0")===e[n]}))}},{key:"goldsMap",get:function(){var t=999999;return this.timesSeconds.map((function(e){return!!(e&&e<t)&&(t=e,!0)}))}},{key:"updateTimesSeconds",value:function(t){var e=this;Object(j.a)(x.a.SEG_TIME_ARRAY_TO_SECONDS,t).then((function(t){return e.timesSeconds=t}))}},{key:"updateTimesAfterUseRealTimeChange",value:function(){var t=this;this.$nextTick((function(){Object(j.a)(x.a.SEG_TIME_ARRAY_TO_SECONDS,t.timesWithPositiveIds).then((function(e){return t.timesSeconds=e}))}))}},{key:"collapseName",get:function(){return"collapse-subsplits-".concat(this.splitIndex)}},{key:"markerColors",get:function(){for(var t,e,n=[],i=0;i<this.timesWithPositiveIds.length;++i)this.timesWithPositiveIds[i]["@_id"]==(null===(t=this.currentAttempt)||void 0===t?void 0:t["@_id"])?n.push(O.a):this.timesWithPositiveIds[i]["@_id"]==(null===(e=this.medianAttempt)||void 0===e?void 0:e["@_id"])?n.push(O.d):n.push(this.goldsMap[i]?O.b:O.c);return n}},{key:"markerSizes",get:function(){for(var t,e,n=[],i=0;i<this.timesWithPositiveIds.length;++i)this.timesWithPositiveIds[i]["@_id"]==(null===(t=this.currentAttempt)||void 0===t?void 0:t["@_id"])||this.timesWithPositiveIds[i]["@_id"]==(null===(e=this.medianAttempt)||void 0===e?void 0:e["@_id"])?n.push(6):n.push(this.goldsMap[i]?5:3);return n}},{key:"timesWithPositiveIds",get:function(){var t;return((null===(t=this.split.SegmentHistory)||void 0===t?void 0:t.Time)||[]).filter((function(t){return t["@_id"]>0}))}},{key:"plot_data",get:function(){var t=this.timesWithPositiveIds.map((function(t){var time=Object(v.c)(t);return time?"".concat(Object(y.a)(time)," (attempt ").concat(t["@_id"],")"):""}));return[{x:Array.from({length:this.timesWithPositiveIds.length},(function(t,e){return e})),y:this.timesSeconds,text:t,type:"scatter",hoverinfo:"text",mode:"lines+markers",marker:{color:this.markerColors,size:this.markerSizes},line:{color:O.c,width:1}}]}}]),n}(h.Vue);A([Object(h.Prop)()],T.prototype,"split",void 0),A([Object(h.Prop)({default:!1})],T.prototype,"graphYAxisToZero",void 0),A([Object(h.Prop)({default:!1})],T.prototype,"graphCurrentAttemptHline",void 0),A([Object(h.Prop)({default:!1})],T.prototype,"graphMedianAttemptHline",void 0),A([Object(h.Prop)()],T.prototype,"currentAttemptNumber",void 0),A([Object(h.Prop)()],T.prototype,"splitIndex",void 0),A([Object(h.Watch)("gold"),Object(h.Watch)("timesWithPositiveIds"),Object(h.Watch)("graphYAxisToZero"),Object(h.Watch)("graphCurrentAttemptHline"),Object(h.Watch)("graphMedianAttemptHline")],T.prototype,"updateLayout",null),A([Object(h.Watch)("timesSeconds",{immediate:!0})],T.prototype,"updateGold",null),A([Object(h.Watch)("timesWithPositiveIds",{immediate:!0})],T.prototype,"updateTimesSeconds",null),A([Object(h.Watch)("useRealTime")],T.prototype,"updateTimesAfterUseRealTimeChange",null);var R=T=A([h.Component],T),C=n(65),component=Object(C.a)(R,undefined,undefined,!1,null,null,null);e.default=component.exports},312:function(t,e,n){var content=n(326);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(80).default)("01555f99",content,!0,{sourceMap:!1})},314:function(t,e,n){"use strict";n.r(e);n(162);var r=n(29),o=n(22),l=n(23),c=n(60),d=n(100),f=n(44),m=n(40),h=(n(6),n(1),n(2),n(16),n(313)),v=n.n(h),y=n(279),O=n(283),_=n(281);function j(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(d.a)(this,n)}}var x=function(t,e,n,desc){var r,o=arguments.length,l=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(m.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(l=(o<3?r(l):o>3?r(e,n,l):r(e,n))||l);return o>3&&l&&Object.defineProperty(e,n,l),l},S=function(t){Object(c.a)(n,t);var e=j(n);function n(){var t;return Object(o.a)(this,n),(t=e.apply(this,arguments)).internalValue=1,t.filterRuns=!1,t}return Object(l.a)(n,[{key:"isPb",get:function(){var t;return this.internalValue===(null===(t=this.PB)||void 0===t?void 0:t["@_id"])}},{key:"PB",get:function(){return _.a.state.PB}},{key:"runAttempts",get:function(){return this.filterRuns?this.attempts.filter((function(a){return Object(O.c)(a)})):this.attempts}},{key:"latestAttemptNumber",get:function(){return Math.max.apply(Math,Object(r.a)(this.runAttempts.map((function(a){return a["@_id"]}))))}},{key:"runSliderMarks",get:function(){return[this.runAttempts[0]["@_id"],this.latestAttemptNumber]}},{key:"onValueUpdate",value:function(t){this.internalValue=t}},{key:"onInternalValueChange",value:function(t){this.$emit("input",t)}}]),n}(y.Vue);x([Object(y.Prop)()],S.prototype,"value",void 0),x([Object(y.Prop)()],S.prototype,"attempts",void 0),x([Object(y.Watch)("value",{immediate:!0})],S.prototype,"onValueUpdate",null),x([Object(y.Watch)("internalValue")],S.prototype,"onInternalValueChange",null);var A=S=x([Object(y.Component)({components:{VueSlider:v.a}})],S),T=(n(315),n(65)),component=Object(T.a)(A,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mb-4"},[n("div",{staticClass:"d-flex mt-4 mb-2"},[n("b-form",{staticClass:"text-center m-auto",attrs:{inline:""}},[n("b-input-group",{attrs:{prepend:"Currently displayed run"}},[n("b-form-input",{attrs:{type:"number",max:t.latestAttemptNumber,min:"1",debounce:"500"},model:{value:t.internalValue,callback:function(e){t.internalValue=t._n(e)},expression:"internalValue"}})],1),t._v(" "),n("b-button",{staticClass:"ml-2",attrs:{variant:"outline-info",disabled:t.isPb},on:{click:function(e){t.internalValue=t.PB["@_id"]}}},[t._v("\n        Go to PB\n      ")])],1)],1),t._v(" "),n("loading-switch",{staticClass:"mt-3 mb-2",model:{value:t.filterRuns,callback:function(e){t.filterRuns=e},expression:"filterRuns"}},[t._v("\n    Filter out unfinished runs\n  ")]),t._v(" "),n("vue-slider",{staticClass:"attempt-selection-slider",attrs:{data:t.runAttempts,"data-value":"@_id","data-label":"@_id",marks:t.runSliderMarks,lazy:"",adsorb:""},model:{value:t.internalValue,callback:function(e){t.internalValue=e},expression:"internalValue"}})],1)}),[],!1,null,"11959438",null);e.default=component.exports;installComponents(component,{LoadingSwitch:n(293).default})},315:function(t,e,n){"use strict";n(306)},316:function(t,e,n){var r=n(79)(!1);r.push([t.i,".attempt-selection-slider[data-v-11959438]{margin-bottom:2rem}",""]),t.exports=r},317:function(t,e,n){"use strict";n(307)},318:function(t,e,n){var r=n(79)(!1);r.push([t.i,"*[data-v-5d64297c]{color:#000}img[data-v-5d64297c]{filter:drop-shadow(0 0 .5rem rgb(0,0,0))}.limit-height[data-v-5d64297c]{display:flex}.split-icon-container[data-v-5d64297c]{min-width:6.5rem;text-align:center;display:flex;justify-content:center;align-items:center}.split-icon-container .split-icon[data-v-5d64297c]{-o-object-fit:contain;object-fit:contain;max-width:100%;max-height:5rem;width:auto;height:auto}.toggle-collapse[data-v-5d64297c]{position:absolute;top:1rem;right:1rem}small[data-v-5d64297c]{color:#6b6b6b;font-size:1rem}",""]),t.exports=r},320:function(t,e,n){"use strict";n.r(e);n(162);var r=n(22),o=n(23),l=n(60),c=n(100),d=n(44),f=n(40),m=(n(6),n(1),n(11),n(26),n(166),n(15),n(283)),h=n(279),v=n(280),y=n(285),O=n(281),_=n(296),j=n(295),x=n(308),S=n(302);function A(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(d.a)(t);if(e){var o=Object(d.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(c.a)(this,n)}}var T=function(t,e,n,desc){var r,o=arguments.length,l=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(l=(o<3?r(l):o>3?r(e,n,l):r(e,n))||l);return o>3&&l&&Object.defineProperty(e,n,l),l},R=function(t){Object(l.a)(n,t);var e=A(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"fixGoldsModal",value:function(){v.a.$emit("openModal","ManualGoldUpdateModal",{split:this.split})}},{key:"moveTimeModal",value:function(){v.a.$emit("openModal","MoveTimeModal",{splits:this.segmentsHolder.Segment,currentSplitIndex:this.splitIndex})}},{key:"foldSplit",value:function(){this.collapseVisible=!1}},{key:"unfoldSplit",value:function(){this.collapseVisible=!0}},{key:"nextSplit",get:function(){return this.segmentsHolder.Segment[this.splitIndex+1]}},{key:"doMergeNextSplit",value:function(t){var e=this;if(!this.nextSplit)return this.$bvToast.toast("Next split doesn't exist",{title:"Splits merged",autoHideDelay:5e3,appendToast:!1,variant:"danger"}),void t();var n=this.split.Name,r=this.nextSplit.Name;Object(_.a)(j.a.MERGE_SPLIT_INTO_NEXT_ONE,this.segmentsHolder.Segment,this.splitIndex).then((function(t){var o;Object(m.d)(!0);var l=O.a.state.autoSplitterSettings;(null===(o=null==l?void 0:l.Splits)||void 0===o?void 0:o.Split)&&l.Splits.Split.splice(e.splitIndex,1),e.segmentsHolder.Segment=t,e.$bvToast.toast("Merged ".concat(n," with ").concat(r),{title:"Splits merged",autoHideDelay:5e3,appendToast:!1,variant:"success"})})).finally((function(){return t()}))}},{key:"mergeNextSplit",value:function(){var t=this;this.nextSplit&&v.a.$emit("openConfirm",'Merge "'.concat(this.split.Name,'" into "').concat(this.nextSplit.Name,'"?'),(function(){Object(y.b)((function(e){return t.doMergeNextSplit(e)}))}))}}]),n}(Object(h.mixins)(x.default));T([Object(h.Prop)()],R.prototype,"segmentsHolder",void 0);var C=R=T([Object(h.Component)({components:{Plotly:S.Plotly}})],R),k=(n(317),n(65)),component=Object(k.a)(C,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-card",{staticClass:"SingleSplitCard text-left",attrs:{id:"SingleSplitCard_"+t.splitIndex}},[n("div",{staticClass:"limit-height"},[t.split.Icon?n("div",{staticClass:"split-icon-container mr-4 ml-2"},[n("b-card-img",{staticClass:"split-icon",attrs:{src:t.split.Icon,block:""}})],1):t._e(),t._v(" "),n("div",{staticClass:"mt-auto mb-auto"},[n("h3",[t._v("\n          "+t._s(t.split.Name)+" "),t.split.IsSubsplit?n("small",[t._v("(subsplit)")]):t._e()]),t._v(" "),t.split.BestSegmentTime?n("p",{staticClass:"m-0"},[n("span",{staticClass:"mr-2"},[n("strong",[t._v("Best time:")]),t._v(" "+t._s(t.bestTimeDisplay))]),t._v(" "),n("b-dropdown",{attrs:{text:"Edit split",variant:"outline-dark",lazy:""}},[n("b-dropdown-item-button",{attrs:{variant:"dark"},on:{click:t.fixGoldsModal}},[t._v("Fix fake golds")]),t._v(" "),n("b-dropdown-item-button",{attrs:{variant:"dark"},on:{click:t.moveTimeModal}},[t._v("Move time between splits\n            ")]),t._v(" "),t.nextSplit?n("b-dropdown-item-button",{attrs:{variant:"dark"},on:{click:t.mergeNextSplit}},[t._v("Merge into next split\n            ")]):t._e()],1)],1):t._e(),t._v(" "),n("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:t.collapseName,expression:"collapseName"}],staticClass:"toggle-collapse",attrs:{variant:"outline-dark",pill:""}},[n("font-awesome-icon",{attrs:{icon:"chevron-left",rotation:t.collapseVisible?270:null}})],1)],1)])]),t._v(" "),n("b-collapse",{staticClass:"mt-1",attrs:{id:t.collapseName},model:{value:t.collapseVisible,callback:function(e){t.collapseVisible=e},expression:"collapseVisible"}},[n("b-card",{staticClass:"text-left"},[n("Plotly",{attrs:{data:t.plot_data,layout:t.layout,"display-mode-bar":!0}})],1)],1)],1)}),[],!1,null,"5d64297c",null);e.default=component.exports},325:function(t,e,n){"use strict";n(312)},326:function(t,e,n){var r=n(79)(!1);r.push([t.i,"*[data-v-3d57bf46]{color:#000}img[data-v-3d57bf46]{filter:drop-shadow(0 0 .5rem rgb(0,0,0))}.limit-height[data-v-3d57bf46]{display:flex}.split-icon-container[data-v-3d57bf46]{min-width:6.5rem;text-align:center;display:flex;justify-content:center;align-items:center}.split-icon-container .split-icon[data-v-3d57bf46]{-o-object-fit:contain;object-fit:contain;max-width:100%;max-height:5rem;width:auto;height:auto}.toggle-collapse[data-v-3d57bf46]{position:absolute;top:1rem;right:1rem}.subsplit-container[data-v-3d57bf46]{display:flex}.subsplit-container .subsplit-collapser-hitbox[data-v-3d57bf46]{width:1rem;cursor:pointer;min-height:2rem}.subsplit-container .subsplit-collapser[data-v-3d57bf46]{width:.3rem;background-color:#fff;transition:all .1s;height:100%;margin:auto;border-radius:.15rem}.subsplit-container .subsplit-collapser[data-v-3d57bf46]:hover{filter:drop-shadow(0 0 .2rem white)}",""]),t.exports=r},332:function(t,e,n){"use strict";n.r(e);n(162);var r=n(22),o=n(23),l=n(60),c=n(100),d=n(44),f=n(40),m=(n(6),n(1),n(3),n(279)),h=n(284),v=n(308),y=n(302);function O(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(d.a)(t);if(e){var o=Object(d.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(c.a)(this,n)}}var _=function(t,e,n,desc){var r,o=arguments.length,l=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(l=(o<3?r(l):o>3?r(e,n,l):r(e,n))||l);return o>3&&l&&Object.defineProperty(e,n,l),l},j=function(t){Object(l.a)(n,t);var e=O(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).subsplitsVisible=!0,t}return Object(o.a)(n,[{key:"foldSplit",value:function(){this.collapseVisible=!1,Object(h.b)(this.$refs.splitAccess).forEach((function(t){return t.foldSplit()}))}},{key:"unfoldSplit",value:function(){this.collapseVisible=!0,Object(h.b)(this.$refs.splitAccess).forEach((function(t){return t.unfoldSplit()}))}}]),n}(Object(m.mixins)(v.default));_([Object(m.Prop)()],j.prototype,"segmentsHolder",void 0);var x=j=_([Object(m.Component)({components:{Plotly:y.Plotly}})],j),S=(n(325),n(65)),component=Object(S.a)(x,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.split.Index<0?n("div",[n("b-card",{staticClass:"SingleSplitCard text-left",attrs:{id:"SingleSplitCard_"+t.splitIndex}},[n("div",{staticClass:"limit-height"},[t.split.Icon?n("div",{staticClass:"split-icon-container mr-4 ml-2"},[n("b-card-img",{staticClass:"split-icon",attrs:{src:t.split.Icon,block:""}})],1):t._e(),t._v(" "),n("div",{staticClass:"mt-auto mb-auto"},[n("h3",[t._v(t._s(t.split.Name))]),t._v(" "),t.split.BestSegmentTime?n("p",{staticClass:"m-0"},[n("span",{staticClass:"mr-2"},[n("strong",[t._v("Best time:")]),t._v(" "+t._s(t.bestTimeDisplay))])]):t._e(),t._v(" "),n("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:t.collapseName,expression:"collapseName"}],staticClass:"toggle-collapse",attrs:{variant:"outline-dark",pill:""}},[n("font-awesome-icon",{attrs:{icon:"chevron-left",rotation:t.collapseVisible?270:null}})],1)],1)])]),t._v(" "),n("b-collapse",{staticClass:"mt-1",attrs:{id:t.collapseName},model:{value:t.collapseVisible,callback:function(e){t.collapseVisible=e},expression:"collapseVisible"}},[n("b-card",{staticClass:"text-left"},[n("Plotly",{attrs:{data:t.plot_data,layout:t.layout,"display-mode-bar":!0}})],1)],1),t._v(" "),n("div",{staticClass:"pl-4 mt-3 subsplit-container"},[n("div",{staticClass:"ml-2 mr-4 subsplit-collapser-hitbox",on:{click:function(e){t.subsplitsVisible=!t.subsplitsVisible}}},[n("div",{staticClass:"subsplit-collapser"})]),t._v(" "),n("b-collapse",{staticClass:"w-100",attrs:{visible:t.subsplitsVisible}},t._l(t.split.Subsplits,(function(e,i){return n("split-display",{key:"split-"+e.Index+"-"+e.Name,ref:"splitAccess",refInFor:!0,class:i===t.split.Subsplits.length-1?"":"mb-3",attrs:{split:e,splitIndex:e.Index,graphYAxisToZero:t.graphYAxisToZero,graphCurrentAttemptHline:t.graphCurrentAttemptHline,graphMedianAttemptHline:t.graphMedianAttemptHline,currentAttemptNumber:t.currentAttemptNumber,"segments-holder":t.segmentsHolder}})})),1)],1)],1):n("div",[n("split-display",{ref:"splitAccess",staticClass:"mb-3",attrs:{split:t.split,splitIndex:t.split.Index,graphYAxisToZero:t.graphYAxisToZero,graphCurrentAttemptHline:t.graphCurrentAttemptHline,graphMedianAttemptHline:t.graphMedianAttemptHline,currentAttemptNumber:t.currentAttemptNumber,"segments-holder":t.segmentsHolder}})],1)])}),[],!1,null,"3d57bf46",null);e.default=component.exports;installComponents(component,{SplitDisplay:n(320).default})},348:function(t,e,n){"use strict";n.r(e);n(162);var r=n(22),o=n(23),l=n(60),c=n(100),d=n(44),f=n(40),m=(n(6),n(1),n(3),n(279)),h=n(281),v=n(284);function y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(d.a)(t);if(e){var o=Object(d.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(c.a)(this,n)}}var O=function(t,e,n,desc){var r,o=arguments.length,l=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(l=(o<3?r(l):o>3?r(e,n,l):r(e,n))||l);return o>3&&l&&Object.defineProperty(e,n,l),l},_=function(t){Object(l.a)(n,t);var e=y(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).graphCurrentAttemptHline=!1,t.graphMedianAttemptHline=!1,t.graphYAxisToZero=!1,t.currentAttemptNumber=1,t}return Object(o.a)(n,[{key:"PB",get:function(){return h.a.state.PB}},{key:"foldAllSplits",value:function(){Object(v.b)(this.$refs.splitAccess).forEach((function(t){return t.foldSplit()}))}},{key:"unfoldAllSplits",value:function(){Object(v.b)(this.$refs.splitAccess).forEach((function(t){return t.unfoldSplit()}))}},{key:"onPbUpdate",value:function(t){t&&(this.currentAttemptNumber=null==t?void 0:t["@_id"])}},{key:"yAxisStore",value:function(){localStorage.setItem("graphYAxisToZero",JSON.stringify(this.graphYAxisToZero))}},{key:"attemptLineStore",value:function(){localStorage.setItem("graphCurrentAttemptHline",JSON.stringify(this.graphCurrentAttemptHline))}},{key:"medianLineStore",value:function(){localStorage.setItem("graphMedianAttemptHline",JSON.stringify(this.graphMedianAttemptHline))}},{key:"mounted",value:function(){var t=localStorage.getItem("graphYAxisToZero"),e=localStorage.getItem("graphCurrentAttemptHline"),n=localStorage.getItem("graphMedianAttemptHline");t&&(this.graphYAxisToZero=JSON.parse(t)),e&&(this.graphCurrentAttemptHline=JSON.parse(e)),n&&(this.graphMedianAttemptHline=JSON.parse(n))}}]),n}(m.Vue);O([Object(m.Prop)()],_.prototype,"attempts",void 0),O([Object(m.Prop)()],_.prototype,"detailedSegments",void 0),O([Object(m.Prop)()],_.prototype,"segmentsHolder",void 0),O([Object(m.Watch)("PB",{immediate:!0})],_.prototype,"onPbUpdate",null),O([Object(m.Watch)("graphYAxisToZero")],_.prototype,"yAxisStore",null),O([Object(m.Watch)("graphCurrentAttemptHline")],_.prototype,"attemptLineStore",null),O([Object(m.Watch)("graphMedianAttemptHline")],_.prototype,"medianLineStore",null);var j=_=O([m.Component],_),x=n(65),component=Object(x.a)(j,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("collapsible-card",{attrs:{title:"Options",lazy:!1}},[n("attempt-selector",{attrs:{attempts:t.attempts},model:{value:t.currentAttemptNumber,callback:function(e){t.currentAttemptNumber=e},expression:"currentAttemptNumber"}}),t._v(" "),n("b-col",{attrs:{cols:"10",offset:"1"}},[n("hr")]),t._v(" "),n("loading-switch",{staticClass:"mt-2 mb-2",model:{value:t.graphYAxisToZero,callback:function(e){t.graphYAxisToZero=e},expression:"graphYAxisToZero"}},[t._v("\n      Graphs' Y axis starts at zero\n    ")]),t._v(" "),n("loading-switch",{staticClass:"mb-2",model:{value:t.graphCurrentAttemptHline,callback:function(e){t.graphCurrentAttemptHline=e},expression:"graphCurrentAttemptHline"}},[t._v("\n      Display current attempt's times as a horizontal line\n    ")]),t._v(" "),n("loading-switch",{staticClass:"mb-2",model:{value:t.graphMedianAttemptHline,callback:function(e){t.graphMedianAttemptHline=e},expression:"graphMedianAttemptHline"}},[t._v("\n      Display median attempt's times as a horizontal line\n    ")]),t._v(" "),n("b-col",{attrs:{cols:"10",offset:"1"}},[n("hr")]),t._v(" "),n("div",{staticClass:"text-center mt-3"},[n("b-button",{attrs:{variant:"success"},on:{click:t.unfoldAllSplits}},[t._v("Expand all split info")]),t._v(" "),n("b-button",{attrs:{variant:"success"},on:{click:t.foldAllSplits}},[t._v("Collapse all split info")])],1)],1),t._v(" "),t._l(t.detailedSegments,(function(e){return n("subsplits-display",{key:"split-"+e.Index+"-"+e.Name,ref:"splitAccess",refInFor:!0,staticClass:"mb-3",attrs:{split:e,splitIndex:e.Index,graphYAxisToZero:t.graphYAxisToZero,graphCurrentAttemptHline:t.graphCurrentAttemptHline,graphMedianAttemptHline:t.graphMedianAttemptHline,currentAttemptNumber:t.currentAttemptNumber,"segments-holder":t.segmentsHolder}})}))],2)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AttemptSelector:n(314).default,LoadingSwitch:n(293).default,CollapsibleCard:n(286).default,SubsplitsDisplay:n(332).default})}}]);