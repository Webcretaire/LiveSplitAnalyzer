(window.webpackJsonp=window.webpackJsonp||[]).push([[13,14,19,33],{306:function(t,e,n){"use strict";n.d(e,"d",(function(){return r})),n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return l}));n(11),n(166),n(14),n(132),n(316),n(317),n(318);var r=function(time){var t=time.match(/([0-9]+):([0-9]+):([0-9.]+)/);if(!t)return 0;var e=+t[1],n=+t[2];return+t[3]+60*n+3600*e},o=function(time){var t=time.match(/([0-9]+):([0-9]+):([0-9.]+)/);if(!t)return"";var e=+t[1],n=+t[2],r=+t[3],o="";return e&&(o+="".concat(e,"h")),n&&(o+="".concat(n,"m")),o+="".concat(r<10?"0":"").concat(r.toFixed(2),"s")},c=function(time){var t="",e=!0;return time>=3600&&(e=!1,t+="".concat(Math.floor(time/3600),"h"),time%=3600),time>=60&&(e=!1,t+="".concat(Math.floor(time/60),"m"),time%=60),t+="".concat(!e&&time<10?"0":"").concat(Math.abs(+time.toFixed(2)),"s")},l=function(time){var t="",e=Math.trunc(time/3600).toFixed();t+="".concat(e.padStart(2,"0"),":"),time%=3600;var n=Math.trunc(time/60).toFixed();t+="".concat(n.padStart(2,"0"),":"),time%=60;var r=Math.trunc(time),o=(time-r).toFixed(7).substring(2);return t+="".concat(r.toFixed().padStart(2,"0"),".").concat(o.padEnd(7,"0"))}},307:function(t,e,n){"use strict";var r=n(8).default.observable({savedSettings:{},hasGameTime:!1,useRealTime:!1,splitFileIsModified:!1,PB:null,autoSplitterSettings:null});e.a={get state(){return r}}},308:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r=new(n(8).default)},309:function(t,e,n){"use strict";n.d(e,"c",(function(){return l})),n.d(e,"b",(function(){return f})),n.d(e,"a",(function(){return d})),n.d(e,"d",(function(){return m}));n(15),n(1),n(3),n(85),n(109);var r=n(307),o=n(306),c=n(310),l=function(t){return(null==t?void 0:t.GameTime)&&!r.a.state.useRealTime?t.GameTime:(null==t?void 0:t.RealTime)||null},f=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=0;return t.map((function(t){var r;return(r=!0===e?t.BestSegmentTime.GameTime:!1===e?t.BestSegmentTime.RealTime:l(t.BestSegmentTime))&&(n+=Object(o.d)(r)),n}))},d=function(t){return t.reduce((function(t,e){return e.SplitTimes.SplitTime.forEach((function(s){t.includes(s["@_name"])||t.push(s["@_name"])})),t}),[])},m=function(t){r.a.state.splitFileIsModified=t,t?Object(c.c)():Object(c.d)()}},310:function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return f})),n.d(e,"d",(function(){return d})),n.d(e,"a",(function(){return m}));var r=n(24),o=n(23),c=(n(1),function(input){return null==input?[]:Array.isArray(input)?input:[input]}),l=function(t){t.preventDefault(),t.returnValue=""},f=function(){window.addEventListener("beforeunload",l)},d=function(){window.removeEventListener("beforeunload",l)},m=Object(r.a)((function t(){var e=this;Object(o.a)(this,t),this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(t,n){e.reject=n,e.resolve=t}))}))},311:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(308),o=function(t){r.a.$emit("startLoading",t)}},312:function(t,e,n){"use strict";n.r(e);var r=n(23),o=n(24),c=n(60),l=n(108),f=n(46),d=n(41),m=(n(6),n(1),n(165),n(305));function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var h=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},y=function(t){Object(c.a)(n,t);var e=v(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).visible=!1,t.id="collapse-xxxx",t}return Object(o.a)(n,[{key:"created",value:function(){this.visible=this.startsOpen}},{key:"mounted",value:function(){this.id="collapse-".concat(Math.floor(1e4*Math.random()))}}]),n}(m.Vue);h([Object(m.Prop)()],y.prototype,"title",void 0),h([Object(m.Prop)({default:!1})],y.prototype,"startsOpen",void 0),h([Object(m.Prop)({default:!0})],y.prototype,"lazy",void 0);var O=y=h([m.Component],y),_=(n(322),n(65)),component=Object(_.a)(O,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("b-card",{staticClass:"mb-4",attrs:{title:t.title}},[e("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:t.id,expression:"id"}],staticClass:"toggle-collapse",attrs:{variant:"outline-secondary",pill:""}},[e("font-awesome-icon",{attrs:{icon:"chevron-left",rotation:t.visible?270:null}})],1),t._v(" "),e("b-collapse",{attrs:{id:t.id},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[t.visible||!t.lazy?e("div",[t._t("default")],2):t._e()])],1)}),[],!1,null,"e584f7b2",null);e.default=component.exports},315:function(t,e,n){var content=n(323);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(84).default)("ce2d0098",content,!0,{sourceMap:!1})},319:function(t,e,n){"use strict";n.r(e);var r=n(23),o=n(24),c=n(60),l=n(108),f=n(46),d=n(41),m=(n(6),n(1),n(165),n(305)),v=n(311);function h(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var y=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},O=function(t){Object(c.a)(n,t);var e=h(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).internalValue=!0,t}return Object(o.a)(n,[{key:"valueChange",value:function(t){this.internalValue=t}},{key:"inputChange",value:function(t){var e=this;Object(v.a)((function(){return new Promise((function(n){e.$emit("input",t),e.$nextTick((function(){return n()}))}))}))}}]),n}(m.Vue);y([Object(m.Prop)()],O.prototype,"value",void 0),y([Object(m.Watch)("value",{immediate:!0})],O.prototype,"valueChange",null),y([Object(m.Watch)("internalValue")],O.prototype,"inputChange",null);var _=O=y([m.Component],O),j=n(65),component=Object(j.a)(_,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("b-checkbox",{attrs:{switch:""},model:{value:t.internalValue,callback:function(e){t.internalValue=e},expression:"internalValue"}},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},320:function(t,e,n){"use strict";var r;n.d(e,"a",(function(){return r})),function(t){t[t.PING=0]="PING",t[t.DELETE_ATTEMPT_BEFORE_NUMBER=1]="DELETE_ATTEMPT_BEFORE_NUMBER",t[t.SEG_TIME_ARRAY_TO_SECONDS=2]="SEG_TIME_ARRAY_TO_SECONDS",t[t.GOLD_COORDINATES_FROM_SECONDS_ARRAY=3]="GOLD_COORDINATES_FROM_SECONDS_ARRAY",t[t.XML_PARSE_TEXT=4]="XML_PARSE_TEXT",t[t.MERGE_SPLIT_INTO_NEXT_ONE=5]="MERGE_SPLIT_INTO_NEXT_ONE",t[t.UPDATE_STORE_DATA=6]="UPDATE_STORE_DATA",t[t.GET_PB=7]="GET_PB",t[t.GENERATE_SPLIT_DETAIL=8]="GENERATE_SPLIT_DETAIL",t[t.MOVE_TIME_TO_OTHER_SPLIT=9]="MOVE_TIME_TO_OTHER_SPLIT"}(r||(r={}))},321:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));n(1),n(38);var r=n(310),o=new function(){return new Worker(n.p+"32e22f3.worker.js")},c={};o.addEventListener("message",(function(t){var e=c[t.data.magic];e?(delete c[t.data.magic],e.resolve(t.data.message)):console.error("Got message from worker with no matching operation: ".concat(t.data.magic))}));var l=function(t){var e;do{e=btoa((1e10*Math.random()).toString())}while(c[e]);c[e]=new r.a;for(var n=arguments.length,l=new Array(n>1?n-1:0),f=1;f<n;f++)l[f-1]=arguments[f];return o.postMessage({message:{instruction:t,args:l},magic:e}),c[e].promise}},322:function(t,e,n){"use strict";n(315)},323:function(t,e,n){var r=n(83)(!1);r.push([t.i,"*[data-v-e584f7b2]{color:#000}.toggle-collapse[data-v-e584f7b2]{position:absolute;right:1rem;top:1rem}",""]),t.exports=r},332:function(t,e,n){var content=n(342);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(84).default)("9eff8b6e",content,!0,{sourceMap:!1})},339:function(t,e,n){"use strict";n.r(e);n(165);var r=n(32),o=n(23),c=n(24),l=n(60),f=n(108),d=n(46),m=n(41),v=(n(6),n(1),n(2),n(15),n(340)),h=n.n(v),y=n(305),O=n(309),_=n(307);function j(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(d.a)(t);if(e){var o=Object(d.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(f.a)(this,n)}}var T=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(m.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},R=function(t){Object(l.a)(n,t);var e=j(n);function n(){var t;return Object(o.a)(this,n),(t=e.apply(this,arguments)).internalValue=1,t.filterRuns=!1,t}return Object(c.a)(n,[{key:"isPb",get:function(){var t;return this.internalValue===(null===(t=this.PB)||void 0===t?void 0:t["@_id"])}},{key:"PB",get:function(){return _.a.state.PB}},{key:"runAttempts",get:function(){return this.filterRuns?this.attempts.filter((function(a){return Object(O.c)(a)})):this.attempts}},{key:"latestAttemptNumber",get:function(){return Math.max.apply(Math,Object(r.a)(this.runAttempts.map((function(a){return a["@_id"]}))))}},{key:"runSliderMarks",get:function(){return[this.runAttempts[0]["@_id"],this.latestAttemptNumber]}},{key:"onValueUpdate",value:function(t){this.internalValue=t}},{key:"onInternalValueChange",value:function(t){this.$emit("input",t)}}]),n}(y.Vue);T([Object(y.Prop)()],R.prototype,"value",void 0),T([Object(y.Prop)()],R.prototype,"attempts",void 0),T([Object(y.Watch)("value",{immediate:!0})],R.prototype,"onValueUpdate",null),T([Object(y.Watch)("internalValue")],R.prototype,"onInternalValueChange",null);var S=R=T([Object(y.Component)({components:{VueSlider:h.a}})],R),P=(n(341),n(65)),component=Object(P.a)(S,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"mb-4"},[e("div",{staticClass:"d-flex mt-4 mb-2"},[e("b-form",{staticClass:"text-center m-auto",attrs:{inline:""}},[e("b-input-group",{attrs:{prepend:"Currently displayed run"}},[e("b-form-input",{attrs:{type:"number",max:t.latestAttemptNumber,min:"1",debounce:"500"},model:{value:t.internalValue,callback:function(e){t.internalValue=t._n(e)},expression:"internalValue"}})],1),t._v(" "),e("b-button",{staticClass:"ml-2",attrs:{variant:"outline-info",disabled:t.isPb},on:{click:function(e){t.internalValue=t.PB["@_id"]}}},[t._v("\n          Go to PB\n        ")])],1)],1),t._v(" "),e("loading-switch",{staticClass:"mt-3 mb-2",model:{value:t.filterRuns,callback:function(e){t.filterRuns=e},expression:"filterRuns"}},[t._v("\n      Filter out unfinished runs\n    ")]),t._v(" "),e("vue-slider",{staticClass:"attempt-selection-slider",attrs:{data:t.runAttempts,"data-value":"@_id","data-label":"@_id",marks:t.runSliderMarks,lazy:"",adsorb:""},model:{value:t.internalValue,callback:function(e){t.internalValue=e},expression:"internalValue"}})],1)}),[],!1,null,"11959438",null);e.default=component.exports;installComponents(component,{LoadingSwitch:n(319).default})},341:function(t,e,n){"use strict";n(332)},342:function(t,e,n){var r=n(83)(!1);r.push([t.i,".attempt-selection-slider[data-v-11959438]{margin-bottom:2rem}",""]),t.exports=r},353:function(t,e,n){"use strict";n.r(e);n(165);var r=n(23),o=n(24),c=n(60),l=n(108),f=n(46),d=n(41),m=(n(6),n(1),n(133),n(15),n(3),n(2),n(309)),v=n(306),h=n(311),y=n(305),O=n(308),_=n(307),j=n(321),T=n(320);function R(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var S=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},P=function(t){Object(c.a)(n,t);var e=R(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).visible=!1,t}return Object(o.a)(n,[{key:"splits",get:function(){return this.parsedSplits.Run.Segments.Segment}},{key:"reconstructAttemptTime",value:function(t){return this.splits.reduce((function(e,s){var n,time=Object(m.c)(((null===(n=s.SegmentHistory)||void 0===n?void 0:n.Time)||[]).find((function(e){return e["@_id"]==t})));return time?Object(v.d)(time)+e:e}),0)}},{key:"allRunAttempts",get:function(){return this.parsedSplits.Run.AttemptHistory.Attempt}},{key:"pbFromSplitHistory",get:function(){var t,e=this,n=((null===(t=this.splits[this.splits.length-1].SegmentHistory)||void 0===t?void 0:t.Time)||[]).map((function(t){return{id:t["@_id"],time:e.reconstructAttemptTime(t["@_id"])}})),r=Object(v.d)("999:59:59.99"),o=0;return n.forEach((function(t){var e=t.id,time=t.time;e>0&&time<r&&(r=time,o=e)})),this.allRunAttempts.find((function(a){return a["@_id"]==o}))}},{key:"pbFromAttemptHistory",get:function(){var t,e=Object(v.d)("999:59:59.99");return this.allRunAttempts.forEach((function(n){if(!(n["@_id"]<=0)){var r=Object(m.c)(n);if(r){var o=Object(v.d)(r);o>1&&o<e&&(e=o,t=n)}}})),t}},{key:"fixPB",value:function(){var t=this;Object(h.a)((function(){Object(m.d)(!0);var e=t.pbFromAttemptHistory||t.pbFromSplitHistory;if(null==e?void 0:e["@_id"]){for(var n={RealTime:0,GameTime:0},i=0;i<t.splits.length;++i){var r=t.splits[i].SplitTimes.SplitTime,o=t.splits[i].SegmentHistory.Time.find((function(t){return t["@_id"]==(null==e?void 0:e["@_id"])})),c=r.filter((function(t){return"Personal Best"!=t["@_name"]}));if(o){o.RealTime&&(n.RealTime+=Object(v.d)(o.RealTime)),o.GameTime&&(n.GameTime+=Object(v.d)(o.GameTime));var l={"@_name":"Personal Best",RealTime:Object(v.c)(n.RealTime)};(null==e?void 0:e.GameTime)&&(l.GameTime=Object(v.c)(n.GameTime)),c.push(l)}t.parsedSplits.Run.Segments.Segment[i].SplitTimes||(t.parsedSplits.Run.Segments.Segment[i].SplitTimes={SplitTime:[]}),t.parsedSplits.Run.Segments.Segment[i].SplitTimes.SplitTime=c}t.$bvToast.toast("PB time for each split was updated with run ".concat(null==e?void 0:e["@_id"]),{title:"Splits updated",autoHideDelay:5e3,appendToast:!1,variant:"success"})}else console.error("Couldn't find a PB in your splits, did you finish a run?")}))}},{key:"deletePreviousRuns",value:function(){var t=this;O.a.$emit("openConfirm","Delete all attempts before #".concat(this.currentAttemptNumber," included?"),(function(){Object(h.a)((function(){var e;return Object(j.a)(T.a.DELETE_ATTEMPT_BEFORE_NUMBER,t.parsedSplits.Run,null===(e=_.a.state.PB)||void 0===e?void 0:e["@_id"],t.currentAttemptNumber).then((function(e){Object(m.d)(!0),t.parsedSplits.Run=e,t.parsedSplits.Run.AttemptCount=e.AttemptHistory.Attempt.length}))}))}))}}]),n}(y.Vue);S([Object(y.Prop)()],P.prototype,"currentAttemptNumber",void 0),S([Object(y.Prop)()],P.prototype,"pb",void 0),S([Object(y.Prop)()],P.prototype,"parsedSplits",void 0);var A=P=S([y.Component],P),E=n(65),component=Object(E.a)(A,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("collapsible-card",{attrs:{title:"Toolbox (experimental)"}},[e("p",[e("b-button",{attrs:{variant:"info"},on:{click:t.fixPB}},[e("font-awesome-icon",{attrs:{icon:"screwdriver-wrench"}}),t._v("\n        Fix Personal Best\n      ")],1),t._v(" "),e("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"help-question",attrs:{title:"Fix PB split time for each segment, if your PB comparison is currently broken"}},[e("font-awesome-icon",{attrs:{icon:"circle-question"}})],1)],1),t._v(" "),e("p",[e("b-button",{attrs:{variant:"danger"},on:{click:t.deletePreviousRuns}},[e("font-awesome-icon",{attrs:{icon:"trash"}}),t._v("\n        Delete all attempts before #"+t._s(t.currentAttemptNumber)+"\n      ")],1),t._v(" "),e("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"help-question",attrs:{title:"Delete all attempts before the currently selected one in options (included). If your PB is in this range it will not be deleted."}},[e("font-awesome-icon",{attrs:{icon:"circle-question"}})],1)],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CollapsibleCard:n(312).default})},354:function(t,e,n){"use strict";n.r(e);n(165);var r=n(23),o=n(24),c=n(60),l=n(108),f=n(46),d=n(41),m=(n(6),n(1),n(14),n(15),n(133),n(168),n(11),n(166),n(36),n(132),n(306)),v=n(305),h=n(309),y=n(328);function O(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var _=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},j=function(t){Object(c.a)(n,t);var e=O(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).renderGraph=!0,t.visible=!1,t.sortByTimesave=!1,t.layout={margin:{t:0,b:0,l:0,r:0}},t}return Object(o.a)(n,[{key:"titleAttempt",get:function(){return"".concat(this.isPb?"Personal Best":"Attempt n°".concat(this.attempt["@_id"])," overview (").concat(Object(m.b)(this.attemptTime)," total)")}},{key:"titleTimesave",get:function(){return"Possible timesave (".concat(Object(m.b)(this.attemptTimesave)," total)")}},{key:"segmentData",get:function(){return this.mergeSubsplits?this.detailedSegments:this.segments}},{key:"AttemptSegments",get:function(){var t=this;return this.segmentData.map((function(e){var n;return((null===(n=e.SegmentHistory)||void 0===n?void 0:n.Time)||[]).find((function(e){return e["@_id"]==t.attempt["@_id"]}))}))}},{key:"AttemptSplitTimes",get:function(){return this.AttemptSegments.map((function(s){var t=Object(h.c)(s);return t?Object(m.d)(t):null}))}},{key:"attemptTime",get:function(){return this.AttemptSplitTimes.reduce((function(t,e){return t+(e||0)}),0)}},{key:"attemptSplitTimesaves",get:function(){var t=this;return this.segmentData.map((function(e,n){var s=t.AttemptSegments[n],r=Object(h.c)(s),o=Object(h.c)(e.BestSegmentTime);if(!r||!o)return null;var c=Object(m.d)(r);return c-=Object(m.d)(o),c,c}))}},{key:"attemptTimesave",get:function(){return this.attemptSplitTimesaves.reduce((function(t,e){return t+(e||0)}),0)}},{key:"segmentNameFormat",value:function(t){if(t.startsWith("-"))return t.substring(1);var e=t.match(/\{(.*)\}(.*)/);if(null==e?void 0:e.length){var n=e[1],r=e[2].trim();return"".concat(n," | ").concat(r)}return t.trim()}},{key:"segmentLabels",get:function(){var t=this;return this.segmentData.map((function(e){var n,time=Object(h.c)(((null===(n=e.SegmentHistory)||void 0===n?void 0:n.Time)||[]).find((function(e){return e["@_id"]==t.attempt["@_id"]}))),r=t.segmentNameFormat(e.Name);return time?"".concat(r," (").concat(Object(m.a)(time),")"):r}))}},{key:"timesaveLabels",get:function(){var t=this;return this.segmentData.map((function(e,i){var n=t.attemptSplitTimesaves[i],r=t.segmentNameFormat(e.Name);return"".concat(r," (").concat(n?Object(m.b)(n):"",")")}))}},{key:"makePlotData",value:function(title,data,t,e){return[{values:data,labels:t,domain:{column:0},title:title,hoverinfo:"label+percent",hole:.6,type:"pie",sort:e,automargin:!0,textinfo:this.displayLabels?"percent":"none"}]}},{key:"plotDataAttempt",value:function(){return this.makePlotData("Split times",this.AttemptSplitTimes,this.segmentLabels,!1)}},{key:"plotDataTimesave",value:function(){return this.makePlotData("Attempt compared to golds",this.attemptSplitTimesaves.map((function(t){return t?+t.toFixed(2):null})),this.timesaveLabels,this.sortByTimesave)}}]),n}(v.Vue);_([Object(v.Prop)()],j.prototype,"segments",void 0),_([Object(v.Prop)()],j.prototype,"attempt",void 0),_([Object(v.Prop)()],j.prototype,"detailedSegments",void 0),_([Object(v.Prop)()],j.prototype,"isPb",void 0),_([Object(v.Prop)()],j.prototype,"displayLabels",void 0),_([Object(v.Prop)()],j.prototype,"mergeSubsplits",void 0);var T=j=_([Object(v.Component)({components:{Plotly:y.Plotly}})],j),R=n(65),component=Object(R.a)(T,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",[e("collapsible-card",{staticClass:"text-center",attrs:{id:"AttemptOverviewTimeCard",title:t.titleAttempt}},[t.renderGraph?e("Plotly",{attrs:{data:t.plotDataAttempt(),layout:t.layout,"display-mode-bar":!0}}):t._e()],1),t._v(" "),e("collapsible-card",{staticClass:"text-center",attrs:{id:"AttemptOverviewTimesaveCard",title:t.titleTimesave,"starts-open":""}},[e("loading-switch",{staticClass:"mt-2 mb-4",model:{value:t.sortByTimesave,callback:function(e){t.sortByTimesave=e},expression:"sortByTimesave"}},[t._v("\n        Sort by possible timesave\n      ")]),t._v(" "),t.renderGraph?e("Plotly",{attrs:{data:t.plotDataTimesave(),layout:t.layout,"display-mode-bar":!0}}):t._e()],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CollapsibleCard:n(312).default,LoadingSwitch:n(319).default})},374:function(t,e,n){"use strict";n.r(e);n(165);var r=n(23),o=n(24),c=n(60),l=n(108),f=n(46),d=n(41),m=(n(6),n(1),n(133),n(305)),v=n(307);function h(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var y=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},O=function(t){Object(c.a)(n,t);var e=h(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).currentAttemptNumber=1,t.displayLabels=!1,t.globalState=v.a.state,t.savedSettings=v.a.state.savedSettings,t}return Object(o.a)(n,[{key:"PB",get:function(){return this.globalState.PB}},{key:"onPbUpdate",value:function(t){t&&(this.currentAttemptNumber=null==t?void 0:t["@_id"])}},{key:"isPb",get:function(){var t;return this.currentAttemptNumber===(null===(t=this.PB)||void 0===t?void 0:t["@_id"])}},{key:"currentAttempt",get:function(){var t=this;return this.attempts.find((function(a){return a["@_id"]==t.currentAttemptNumber}))||this.PB}},{key:"mounted",value:function(){this.displayLabels=this.segments.length<=30}}]),n}(m.Vue);y([Object(m.Prop)()],O.prototype,"detailedSegments",void 0),y([Object(m.Prop)()],O.prototype,"attempts",void 0),y([Object(m.Prop)()],O.prototype,"segments",void 0),y([Object(m.Prop)()],O.prototype,"parsedSplits",void 0),y([Object(m.Watch)("PB",{immediate:!0})],O.prototype,"onPbUpdate",null);var _=O=y([m.Component],O),j=n(65),component=Object(j.a)(_,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",[e("collapsible-card",{attrs:{title:"Options",lazy:!1}},[e("attempt-selector",{attrs:{attempts:t.attempts},model:{value:t.currentAttemptNumber,callback:function(e){t.currentAttemptNumber=e},expression:"currentAttemptNumber"}}),t._v(" "),e("b-col",{attrs:{cols:"10",offset:"1"}},[e("hr")]),t._v(" "),e("loading-switch",{staticClass:"mb-2",model:{value:t.displayLabels,callback:function(e){t.displayLabels=e},expression:"displayLabels"}},[t._v("\n        Display labels for doughnut charts\n      ")]),t._v(" "),e("loading-switch",{staticClass:"mb-2",model:{value:t.savedSettings.attemptAnalysisMergeSubsplits,callback:function(e){t.$set(t.savedSettings,"attemptAnalysisMergeSubsplits",e)},expression:"savedSettings.attemptAnalysisMergeSubsplits"}},[t._v("\n        Merge subsplits\n      ")])],1),t._v(" "),e("toolbox",{staticClass:"mb-4",attrs:{"current-attempt-number":t.currentAttemptNumber,"parsed-splits":t.parsedSplits}}),t._v(" "),e("attempt-overview",{attrs:{segments:t.segments,attempt:t.currentAttempt,"detailed-segments":t.detailedSegments,"is-pb":t.isPb,"display-labels":t.displayLabels,"merge-subsplits":t.savedSettings.attemptAnalysisMergeSubsplits}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AttemptSelector:n(339).default,LoadingSwitch:n(319).default,CollapsibleCard:n(312).default,Toolbox:n(353).default,AttemptOverview:n(354).default})}}]);