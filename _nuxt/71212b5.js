(window.webpackJsonp=window.webpackJsonp||[]).push([[53,25,31,47],{307:function(t,e,n){"use strict";n.d(e,"d",(function(){return r})),n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return l}));n(11),n(166),n(14),n(133),n(315),n(316),n(317);var r=function(time){var t=time.match(/([0-9]+):([0-9]+):([0-9.]+)/);if(!t)return 0;var e=+t[1],n=+t[2];return+t[3]+60*n+3600*e},o=function(time){var t=time.match(/([0-9]+):([0-9]+):([0-9.]+)/);if(!t)return"";var e=+t[1],n=+t[2],r=+t[3],o="";return e&&(o+="".concat(e,"h")),n&&(o+="".concat(n,"m")),o+="".concat(r<10?"0":"").concat(r.toFixed(2),"s")},c=function(time){var t="",e=!0;return time>=3600&&(e=!1,t+="".concat(Math.floor(time/3600),"h"),time%=3600),time>=60&&(e=!1,t+="".concat(Math.floor(time/60),"m"),time%=60),t+="".concat(!e&&time<10?"0":"").concat(Math.abs(+time.toFixed(2)),"s")},l=function(time){var t="",e=Math.trunc(time/3600).toFixed();t+="".concat(e.padStart(2,"0"),":"),time%=3600;var n=Math.trunc(time/60).toFixed();t+="".concat(n.padStart(2,"0"),":"),time%=60;var r=Math.trunc(time),o=(time-r).toFixed(7).substring(2);return t+="".concat(r.toFixed().padStart(2,"0"),".").concat(o.padEnd(7,"0"))}},308:function(t,e,n){"use strict";var r=n(8).default.observable({savedSettings:{},hasGameTime:!1,useRealTime:!1,splitFileIsModified:!1,PB:null,autoSplitterSettings:null,filters:[],filteredAttempts:[]});e.a={get state(){return r}}},309:function(t,e,n){var r=n(13),o=n(66),c=n(29),l=n(167),f=n(42),d=r(l),m=r("".slice),v=Math.ceil,T=function(t){return function(e,n,r){var l,T,_=c(f(e)),h=o(n),O=_.length,E=void 0===r?" ":c(r);return h<=O||""==E?_:((T=d(E,v((l=h-O)/E.length))).length>l&&(T=m(T,0,l)),t?_+T:T+_)}};t.exports={start:T(!1),end:T(!0)}},310:function(t,e,n){var r=n(56);t.exports=/Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(r)},311:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r=new(n(8).default)},312:function(t,e,n){"use strict";n.d(e,"c",(function(){return l})),n.d(e,"b",(function(){return f})),n.d(e,"a",(function(){return d})),n.d(e,"d",(function(){return m}));n(15),n(1),n(3),n(85),n(109);var r=n(308),o=n(307),c=n(313),l=function(t){return(null==t?void 0:t.GameTime)&&!r.a.state.useRealTime?t.GameTime:(null==t?void 0:t.RealTime)||null},f=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=0;return t.map((function(t){var r;return(r=!0===e?t.BestSegmentTime.GameTime:!1===e?t.BestSegmentTime.RealTime:l(t.BestSegmentTime))&&(n+=Object(o.d)(r)),n}))},d=function(t){return t.reduce((function(t,e){return e.SplitTimes.SplitTime.forEach((function(s){t.includes(s["@_name"])||t.push(s["@_name"])})),t}),[])},m=function(t){r.a.state.splitFileIsModified=t,t?Object(c.c)():Object(c.d)()}},313:function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return f})),n.d(e,"d",(function(){return d})),n.d(e,"a",(function(){return m}));var r=n(24),o=n(23),c=(n(1),function(input){return null==input?[]:Array.isArray(input)?input:[input]}),l=function(t){t.preventDefault(),t.returnValue=""},f=function(){window.addEventListener("beforeunload",l)},d=function(){window.removeEventListener("beforeunload",l)},m=Object(r.a)((function t(){var e=this;Object(o.a)(this,t),this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(t,n){e.reject=n,e.resolve=t}))}))},314:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(311),o=function(t){r.a.$emit("startLoading",t)}},315:function(t,e,n){n(9)({target:"Math",stat:!0},{trunc:n(230)})},316:function(t,e,n){"use strict";var r=n(9),o=n(309).start;r({target:"String",proto:!0,forced:n(310)},{padStart:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},317:function(t,e,n){"use strict";var r=n(9),o=n(309).end;r({target:"String",proto:!0,forced:n(310)},{padEnd:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},318:function(t,e,n){"use strict";n.r(e);var r=n(23),o=n(24),c=n(60),l=n(108),f=n(46),d=n(41),m=(n(6),n(1),n(165),n(306));function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var T=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},_=function(t){Object(c.a)(n,t);var e=v(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).visible=!1,t.id="collapse-xxxx",t}return Object(o.a)(n,[{key:"created",value:function(){this.visible=this.startsOpen}},{key:"onVisibleUpdate",value:function(t){this.$emit("input",t)}},{key:"onValueUpdate",value:function(t){this.visible=t}},{key:"mounted",value:function(){this.id="collapse-".concat(Math.floor(1e4*Math.random()))}}]),n}(m.Vue);T([Object(m.Prop)()],_.prototype,"value",void 0),T([Object(m.Prop)()],_.prototype,"title",void 0),T([Object(m.Prop)({default:!1})],_.prototype,"startsOpen",void 0),T([Object(m.Prop)({default:!0})],_.prototype,"lazy",void 0),T([Object(m.Watch)("visible")],_.prototype,"onVisibleUpdate",null),T([Object(m.Watch)("value",{immediate:!0})],_.prototype,"onValueUpdate",null);var h=_=T([m.Component],_),O=(n(326),n(65)),component=Object(O.a)(h,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("b-card",{staticClass:"mb-4",attrs:{title:t.title}},[e("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:t.id,expression:"id"}],staticClass:"toggle-collapse",attrs:{variant:"outline-secondary",pill:""}},[e("font-awesome-icon",{attrs:{icon:"chevron-left",rotation:t.visible?270:null}})],1),t._v(" "),e("b-collapse",{attrs:{id:t.id},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[t.visible||!t.lazy?t._t("default"):t._e()],2)],1)}),[],!1,null,"1ccd451c",null);e.default=component.exports},319:function(t,e,n){"use strict";var r;n.d(e,"a",(function(){return r})),function(t){t[t.PING=0]="PING",t[t.DELETE_ATTEMPT_BEFORE_NUMBER=1]="DELETE_ATTEMPT_BEFORE_NUMBER",t[t.SEG_TIME_ARRAY_TO_SECONDS=2]="SEG_TIME_ARRAY_TO_SECONDS",t[t.GOLD_COORDINATES_FROM_SECONDS_ARRAY=3]="GOLD_COORDINATES_FROM_SECONDS_ARRAY",t[t.XML_PARSE_TEXT=4]="XML_PARSE_TEXT",t[t.MERGE_SPLIT_INTO_NEXT_ONE=5]="MERGE_SPLIT_INTO_NEXT_ONE",t[t.UPDATE_STORE_DATA=6]="UPDATE_STORE_DATA",t[t.GET_PB=7]="GET_PB",t[t.GENERATE_SPLIT_DETAIL=8]="GENERATE_SPLIT_DETAIL",t[t.MOVE_TIME_TO_OTHER_SPLIT=9]="MOVE_TIME_TO_OTHER_SPLIT",t[t.CUMULATE_ATTEMPT_TIMES_FOR_ALL_SPLITS=10]="CUMULATE_ATTEMPT_TIMES_FOR_ALL_SPLITS",t[t.LAST_SPLIT_NAME_REACHED_BY_ATTEMPT=11]="LAST_SPLIT_NAME_REACHED_BY_ATTEMPT"}(r||(r={}))},320:function(t,e,n){var content=n(327);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(84).default)("4e9aab5b",content,!0,{sourceMap:!1})},321:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));n(1),n(38);var r=n(313),o=new function(){return new Worker(n.p+"683e65c.worker.js")},c={};o.addEventListener("message",(function(t){var e=c[t.data.magic];e?(delete c[t.data.magic],e.resolve(t.data.message)):console.error("Got message from worker with no matching operation: ".concat(t.data.magic))}));var l=function(t){var e;do{e=btoa((1e10*Math.random()).toString())}while(c[e]);c[e]=new r.a;for(var n=arguments.length,l=new Array(n>1?n-1:0),f=1;f<n;f++)l[f-1]=arguments[f];return o.postMessage({message:{instruction:t,args:l},magic:e}),c[e].promise}},326:function(t,e,n){"use strict";n(320)},327:function(t,e,n){var r=n(83)(!1);r.push([t.i,"*[data-v-1ccd451c]{color:#000}.toggle-collapse[data-v-1ccd451c]{position:absolute;right:1rem;top:1rem}",""]),t.exports=r},361:function(t,e,n){"use strict";n.r(e);n(165);var r=n(23),o=n(24),c=n(60),l=n(108),f=n(46),d=n(41),m=(n(6),n(1),n(134),n(15),n(3),n(2),n(312)),v=n(307),T=n(314),_=n(306),h=n(311),O=n(308),E=n(321),S=n(319);function R(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var y=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},A=function(t){Object(c.a)(n,t);var e=R(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).visible=!1,t}return Object(o.a)(n,[{key:"splits",get:function(){return this.parsedSplits.Run.Segments.Segment}},{key:"reconstructAttemptTime",value:function(t){return this.splits.reduce((function(e,s){var n,time=Object(m.c)(((null===(n=s.SegmentHistory)||void 0===n?void 0:n.Time)||[]).find((function(e){return e["@_id"]==t})));return time?Object(v.d)(time)+e:e}),0)}},{key:"allRunAttempts",get:function(){return this.parsedSplits.Run.AttemptHistory.Attempt}},{key:"pbFromSplitHistory",get:function(){var t,e=this,n=((null===(t=this.splits[this.splits.length-1].SegmentHistory)||void 0===t?void 0:t.Time)||[]).map((function(t){return{id:t["@_id"],time:e.reconstructAttemptTime(t["@_id"])}})),r=Object(v.d)("999:59:59.99"),o=0;return n.forEach((function(t){var e=t.id,time=t.time;e>0&&time<r&&(r=time,o=e)})),this.allRunAttempts.find((function(a){return a["@_id"]==o}))}},{key:"pbFromAttemptHistory",get:function(){var t,e=Object(v.d)("999:59:59.99");return this.allRunAttempts.forEach((function(n){if(!(n["@_id"]<=0)){var r=Object(m.c)(n);if(r){var o=Object(v.d)(r);o>1&&o<e&&(e=o,t=n)}}})),t}},{key:"fixPB",value:function(){var t=this;Object(T.a)((function(){Object(m.d)(!0);var e=t.pbFromAttemptHistory||t.pbFromSplitHistory;if(null==e?void 0:e["@_id"]){for(var n={RealTime:0,GameTime:0},i=0;i<t.splits.length;++i){var r=t.splits[i].SplitTimes.SplitTime,o=t.splits[i].SegmentHistory.Time.find((function(t){return t["@_id"]==(null==e?void 0:e["@_id"])})),c=r.filter((function(t){return"Personal Best"!=t["@_name"]}));if(o){o.RealTime&&(n.RealTime+=Object(v.d)(o.RealTime)),o.GameTime&&(n.GameTime+=Object(v.d)(o.GameTime));var l={"@_name":"Personal Best",RealTime:Object(v.c)(n.RealTime)};(null==e?void 0:e.GameTime)&&(l.GameTime=Object(v.c)(n.GameTime)),c.push(l)}t.parsedSplits.Run.Segments.Segment[i].SplitTimes||(t.parsedSplits.Run.Segments.Segment[i].SplitTimes={SplitTime:[]}),t.parsedSplits.Run.Segments.Segment[i].SplitTimes.SplitTime=c}t.$bvToast.toast("PB time for each split was updated with run ".concat(null==e?void 0:e["@_id"]),{title:"Splits updated",autoHideDelay:5e3,appendToast:!1,variant:"success"})}else console.error("Couldn't find a PB in your splits, did you finish a run?")}))}},{key:"deletePreviousRuns",value:function(){var t=this;h.a.$emit("openConfirm","Delete all attempts before #".concat(this.currentAttemptNumber," included?"),(function(){Object(T.a)((function(){var e;return Object(E.a)(S.a.DELETE_ATTEMPT_BEFORE_NUMBER,t.parsedSplits.Run,null===(e=O.a.state.PB)||void 0===e?void 0:e["@_id"],t.currentAttemptNumber).then((function(e){Object(m.d)(!0),t.parsedSplits.Run=e,t.parsedSplits.Run.AttemptCount=e.AttemptHistory.Attempt.length}))}))}))}}]),n}(_.Vue);y([Object(_.Prop)()],A.prototype,"currentAttemptNumber",void 0),y([Object(_.Prop)()],A.prototype,"pb",void 0),y([Object(_.Prop)()],A.prototype,"parsedSplits",void 0);var P=A=y([_.Component],A),j=n(65),component=Object(j.a)(P,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("collapsible-card",{attrs:{title:"Toolbox (experimental)"}},[e("p",[e("b-button",{attrs:{variant:"info"},on:{click:t.fixPB}},[e("font-awesome-icon",{attrs:{icon:"screwdriver-wrench"}}),t._v("\n      Fix Personal Best\n    ")],1),t._v(" "),e("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"help-question",attrs:{title:"Fix PB split time for each segment, if your PB comparison is currently broken"}},[e("font-awesome-icon",{attrs:{icon:"circle-question"}})],1)],1),t._v(" "),e("p",[e("b-button",{attrs:{variant:"danger"},on:{click:t.deletePreviousRuns}},[e("font-awesome-icon",{attrs:{icon:"trash"}}),t._v("\n      Delete all attempts before #"+t._s(t.currentAttemptNumber)+"\n    ")],1),t._v(" "),e("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"help-question",attrs:{title:"Delete all attempts before the currently selected one in options (included). If your PB is in this range it will not be deleted."}},[e("font-awesome-icon",{attrs:{icon:"circle-question"}})],1)],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CollapsibleCard:n(318).default})}}]);