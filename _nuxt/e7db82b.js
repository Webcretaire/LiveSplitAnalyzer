(window.webpackJsonp=window.webpackJsonp||[]).push([[19,18,31,47],{324:function(t,e,n){"use strict";n.d(e,"e",(function(){return r})),n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return c})),n.d(e,"d",(function(){return l})),n.d(e,"a",(function(){return d}));n(11),n(179),n(14),n(140),n(332),n(333),n(334);var r=function(time){var t=time.match(/([0-9]+):([0-9]+):([0-9.]+)/);if(!t)return 0;var e=+t[1],n=+t[2];return+t[3]+60*n+3600*e},o=function(time){var t=time.match(/([0-9]+):([0-9]+):([0-9.]+)/);if(!t)return"";var e=+t[1],n=+t[2],r=+t[3],o="";return e&&(o+="".concat(e,"h")),n&&(o+="".concat(n,"m")),o+="".concat(r<10?"0":"").concat(r.toFixed(2),"s")},c=function(time){var t="",e=!0;return time>=3600&&(e=!1,t+="".concat(Math.floor(time/3600),"h"),time%=3600),time>=60&&(e=!1,t+="".concat(Math.floor(time/60),"m"),time%=60),t+="".concat(!e&&time<10?"0":"").concat(Math.abs(+time.toFixed(2)),"s")},l=function(time){var t="",e=Math.trunc(time/3600).toFixed();t+="".concat(e.padStart(2,"0"),":"),time%=3600;var n=Math.trunc(time/60).toFixed();t+="".concat(n.padStart(2,"0"),":"),time%=60;var r=Math.trunc(time),o=(time-r).toFixed(7).substring(2);return t+="".concat(r.toFixed().padStart(2,"0"),".").concat(o.padEnd(7,"0"))},d=function(t,e){var n=t.split(" "),r=n[0].split("/");return"".concat(r[2],"-").concat(r[0],"-").concat(r[1]).concat(e?" at ":" ").concat(n[1])}},325:function(t,e,n){"use strict";var r=n(8).default.observable({savedSettings:{},hasGameTime:!1,useRealTime:!1,splitFileIsModified:!1,PB:null,autoSplitterSettings:null,filters:[],filteredAttempts:[]});e.a={get state(){return r}}},326:function(t,e,n){"use strict";n.d(e,"c",(function(){return l})),n.d(e,"b",(function(){return d})),n.d(e,"a",(function(){return f})),n.d(e,"d",(function(){return m}));n(15),n(1),n(3),n(67),n(113);var r=n(325),o=n(324),c=n(330),l=function(t){return(null==t?void 0:t.GameTime)&&!r.a.state.useRealTime?t.GameTime:(null==t?void 0:t.RealTime)||null},d=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=0;return t.map((function(t){var r;return(r=!0===e?t.BestSegmentTime.GameTime:!1===e?t.BestSegmentTime.RealTime:l(t.BestSegmentTime))&&(n+=Object(o.e)(r)),n}))},f=function(t){return t.reduce((function(t,e){return e.SplitTimes.SplitTime.forEach((function(s){t.includes(s["@_name"])||t.push(s["@_name"])})),t}),[])},m=function(t){r.a.state.splitFileIsModified=t,t?Object(c.c)():Object(c.d)()}},327:function(t,e,n){"use strict";var r=n(13),o=n(68),c=n(30),l=n(180),d=n(42),f=r(l),m=r("".slice),v=Math.ceil,h=function(t){return function(e,n,r){var l,h,_=c(d(e)),T=o(n),O=_.length,S=void 0===r?" ":c(r);return T<=O||""===S?_:((h=f(S,v((l=T-O)/S.length))).length>l&&(h=m(h,0,l)),t?_+h:h+_)}};t.exports={start:h(!1),end:h(!0)}},328:function(t,e,n){"use strict";var r=n(59);t.exports=/Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(r)},329:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r=new(n(8).default)},330:function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return d})),n.d(e,"d",(function(){return f})),n.d(e,"a",(function(){return m}));var r=n(29),o=n(28),c=(n(1),function(input){return null==input?[]:Array.isArray(input)?input:[input]}),l=function(t){t.preventDefault(),t.returnValue=""},d=function(){window.addEventListener("beforeunload",l)},f=function(){window.removeEventListener("beforeunload",l)},m=Object(r.a)((function t(){var e=this;Object(o.a)(this,t),this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(t,n){e.reject=n,e.resolve=t}))}))},331:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(329),o=function(t){r.a.$emit("startLoading",t)}},332:function(t,e,n){"use strict";n(9)({target:"Math",stat:!0},{trunc:n(244)})},333:function(t,e,n){"use strict";var r=n(9),o=n(327).start;r({target:"String",proto:!0,forced:n(328)},{padStart:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},334:function(t,e,n){"use strict";var r=n(9),o=n(327).end;r({target:"String",proto:!0,forced:n(328)},{padEnd:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},337:function(t,e,n){"use strict";var r;n.d(e,"a",(function(){return r})),function(t){t[t.PING=0]="PING",t[t.DELETE_ATTEMPT_BEFORE_NUMBER=1]="DELETE_ATTEMPT_BEFORE_NUMBER",t[t.SEG_TIME_ARRAY_TO_SECONDS=2]="SEG_TIME_ARRAY_TO_SECONDS",t[t.GOLD_COORDINATES_FROM_SECONDS_ARRAY=3]="GOLD_COORDINATES_FROM_SECONDS_ARRAY",t[t.XML_PARSE_TEXT=4]="XML_PARSE_TEXT",t[t.MERGE_SPLIT_INTO_NEXT_ONE=5]="MERGE_SPLIT_INTO_NEXT_ONE",t[t.UPDATE_STORE_DATA=6]="UPDATE_STORE_DATA",t[t.GET_PB=7]="GET_PB",t[t.GENERATE_SPLIT_DETAIL=8]="GENERATE_SPLIT_DETAIL",t[t.MOVE_TIME_TO_OTHER_SPLIT=9]="MOVE_TIME_TO_OTHER_SPLIT",t[t.CUMULATE_ATTEMPT_TIMES_FOR_ALL_SPLITS=10]="CUMULATE_ATTEMPT_TIMES_FOR_ALL_SPLITS",t[t.LAST_SPLIT_NAME_REACHED_BY_ATTEMPT=11]="LAST_SPLIT_NAME_REACHED_BY_ATTEMPT"}(r||(r={}))},339:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));n(1),n(33);var r=n(330),o=new function(){return new Worker(n.p+"198002d.worker.js")},c={};o.addEventListener("message",(function(t){var e=c[t.data.magic];e?(delete c[t.data.magic],e.resolve(t.data.message)):console.error("Got message from worker with no matching operation: ".concat(t.data.magic))}));var l=function(t){var e;do{e=btoa((1e10*Math.random()).toString())}while(c[e]);c[e]=new r.a;for(var n=arguments.length,l=new Array(n>1?n-1:0),d=1;d<n;d++)l[d-1]=arguments[d];return o.postMessage({message:{instruction:t,args:l},magic:e}),c[e].promise}},363:function(t,e,n){var content=n(379);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(89).default)("597ff0fb",content,!0,{sourceMap:!1})},378:function(t,e,n){"use strict";n(363)},379:function(t,e,n){var r=n(88)((function(i){return i[1]}));r.push([t.i,"*[data-v-234eded7]{color:#000}.attempt-icon-container[data-v-234eded7]{align-items:center;display:flex;justify-content:center;min-width:6.5rem;text-align:center}.attempt-icon-container .attempt-icon[data-v-234eded7]{height:auto;max-height:5rem;max-width:100%;-o-object-fit:contain;object-fit:contain;opacity:1;width:auto}.attempt-icon-container .attempt-icon-reset[data-v-234eded7]{filter:grayscale(100%) drop-shadow(0 0 .5rem rgb(0,0,0));opacity:.8}.attempt-icon-container .attempt-icon-PB[data-v-234eded7]{filter:drop-shadow(0 0 .6rem #ffc400)}.limit-height[data-v-234eded7]{display:flex}.toggle-collapse[data-v-234eded7]{position:absolute;right:1rem;top:1rem}img[data-v-234eded7]{filter:drop-shadow(0 0 .5rem rgb(0,0,0))}",""]),r.locals={},t.exports=r},397:function(t,e,n){"use strict";n.r(e);n(178);var r=n(34),o=n(28),c=n(29),l=n(61),d=n(112),f=n(46),m=n(25),v=(n(6),n(1),n(11),n(179),n(14),n(19),n(31),n(141),n(323)),h=n(326),_=n(324);function T(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(d.a)(this,n)}}var O=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(m.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},S=["January","February","March","April","May","June","July","August","September","October","November","December"],E=function(t){Object(l.a)(n,t);var e=T(n);function n(){var t;return Object(o.a)(this,n),(t=e.apply(this,arguments)).collapseVisible=!1,t}return Object(c.a)(n,[{key:"nth",value:function(t){if(t>3&&t<21)return"th";switch(t%10){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}}},{key:"formattedDate",get:function(){var t,e,n,o,c,l=this.attempt["@_started"].match(/(\d+)\/(\d+)\/(\d+) (\d+):(\d+):(\d+)/);if(!l)return"";var d=l.slice(1),f=Object(r.a)(d,6);return t=f[0],e=f[1],n=f[2],o=f[3],c=f[4],f[5],e=parseInt(e),["".concat(e),this.nth(e),"".concat(S[parseInt(t)-1]," ").concat(n," at ").concat(parseInt(o),"h").concat(c)]}},{key:"collapseName",get:function(){return"collapse-attempt-".concat(this.attempt["@_id"])}},{key:"timeInfo",get:function(){return this.attempt.RealTime?"Finished run ".concat(this.isPB?"(PB)":""):this.lastSplit?"Reset in ".concat(this.lastSplit.name," (").concat(this.lastSplit.index,")"):"Reset"}},{key:"attemptIconClass",get:function(){var t=["attempt-icon"];return t.push(this.attempt.RealTime?"attempt-icon-finished":"attempt-icon-reset"),this.isPB&&t.push("attempt-icon-PB"),t}},{key:"lastFinishedSplit",get:function(){var t,e=null===(t=this.lastSplit)||void 0===t?void 0:t.index;return e?"".concat(this.segments[e-1].Name," (").concat(e-1,")"):null}},{key:"paceText",get:function(){return this.attempt.RealTime?"Final time":"Pace at ".concat(this.lastFinishedSplit)}},{key:"lastPace",get:function(){var t=this;return this.collapseVisible?Object(_.c)(this.segments.reduce((function(e,n){var r,o=null===(r=n.SegmentHistory)||void 0===r?void 0:r.Time.find((function(time){return time["@_id"]===t.attempt["@_id"]}));return o?e+Object(_.e)(Object(h.c)(o)||"0:0:0.0"):e}),0)):""}},{key:"isPB",get:function(){var time=Object(h.c)(this.attempt);return time&&Object(_.e)(time)===this.pb}}]),n}(v.Vue);O([Object(v.Prop)()],E.prototype,"attempt",void 0),O([Object(v.Prop)({default:""})],E.prototype,"gameCover",void 0),O([Object(v.Prop)()],E.prototype,"lastSplit",void 0),O([Object(v.Prop)()],E.prototype,"segments",void 0),O([Object(v.Prop)()],E.prototype,"pb",void 0);var y=E=O([v.Component],E),A=(n(378),n(66)),component=Object(A.a)(y,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("b-card",{staticClass:"AttemptDetailCard text-left mb-3",attrs:{id:"SingleSplitCard_".concat(t.attempt["@_id"])}},[e("div",{staticClass:"limit-height"},[t.gameCover.length?e("div",{staticClass:"attempt-icon-container mr-3"},[e("b-card-img",{class:t.attemptIconClass,attrs:{src:t.gameCover,block:""}})],1):t._e(),t._v(" "),e("div",{staticClass:"mt-auto mb-auto"},[e("h3",[t._v("\n        Attempt #"+t._s(t.attempt["@_id"])+"\n      ")]),t._v(" "),e("p",{staticClass:"m-0"},[e("span",{staticClass:"mr-2"},[e("strong",[t._v("Date:")]),t._v(" "+t._s(t.formattedDate[0])),e("sup",[t._v(t._s(t.formattedDate[1]))]),t._v(" "+t._s(t.formattedDate[2])+"\n        ")])]),t._v(" "),e("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:t.collapseName,expression:"collapseName"}],staticClass:"toggle-collapse",attrs:{variant:"outline-dark",pill:""}},[e("font-awesome-icon",{attrs:{icon:"chevron-left",rotation:t.collapseVisible?270:null}})],1)],1)]),t._v(" "),e("b-collapse",{staticClass:"pt-1",attrs:{id:t.collapseName},model:{value:t.collapseVisible,callback:function(e){t.collapseVisible=e},expression:"collapseVisible"}},[e("hr",{staticClass:"mb-3"}),t._v(" "),e("p",{staticClass:"mb-0"},[e("strong",[t._v("Status:")]),t._v(" "+t._s(t.timeInfo)+"\n    ")]),t._v(" "),t.lastFinishedSplit?e("p",{staticClass:"mb-0"},[e("strong",[t._v(t._s(t.paceText)+":")]),t._v(" "+t._s(t.lastPace)+"\n    ")]):t._e()])],1)}),[],!1,null,"234eded7",null);e.default=component.exports},420:function(t,e,n){"use strict";n.r(e);n(178);var r=n(32),o=n(28),c=n(29),l=n(61),d=n(112),f=n(46),m=n(25),v=(n(6),n(1),n(2),n(67),n(113),n(19),n(141),n(15),n(39),n(323)),h=n(326),_=n(331),T=n(339),O=n(337),S=n(324),E=n(325);function y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(d.a)(this,n)}}var A=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(m.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},R=function(t){Object(l.a)(n,t);var e=y(n);function n(){var t;return Object(o.a)(this,n),(t=e.apply(this,arguments)).lastSplitByAttempt=[],t.attemptsToRender=30,t.scrollTimeout=!1,t.filters=E.a.state.filters,t.filteredAttempts=E.a.state.filteredAttempts,t}return Object(c.a)(n,[{key:"attemptsLatestToOldest",get:function(){var t=this;return(this.filters.length?Object(r.a)(this.parsedSplits.Run.AttemptHistory.Attempt).filter((function(a){return t.filteredAttempts.includes(a["@_id"])})):Object(r.a)(this.parsedSplits.Run.AttemptHistory.Attempt)).reverse().slice(0,this.attemptsToRender)}},{key:"updateLastsplitByAttempt",value:function(){var t=this;Object(_.a)((function(){return Object(T.a)(O.a.LAST_SPLIT_NAME_REACHED_BY_ATTEMPT,t.parsedSplits.Run.Segments.Segment,t.attemptsLatestToOldest).then((function(e){return t.lastSplitByAttempt=e}))}))}},{key:"PBUpperBound",get:function(){var t=this.parsedSplits.Run.AttemptHistory.Attempt.find((function(t){return Object(h.c)(t)}));return t?Object(S.e)(Object(h.c)(t)||"0:0:0.0")+1:2592e3}},{key:"attemptTimesSecond",get:function(){var t=this;return this.parsedSplits.Run.AttemptHistory.Attempt.map((function(e){var time=Object(h.c)(e);return time?Object(S.e)(time):t.PBUpperBound}))}},{key:"PBsLatestToOldest",get:function(){var t=this.PBUpperBound;return this.attemptTimesSecond.map((function(time){return time<t&&(t=time),t})).reverse()}},{key:"maxAttempts",get:function(){return this.filters.length?this.filteredAttempts.length:this.parsedSplits.Run.AttemptHistory.Attempt.length}},{key:"handleScroll",value:function(){var t=this;if(window.innerHeight+window.scrollY>=document.body.offsetHeight-window.innerHeight/10){if(this.scrollTimeout)return;this.scrollTimeout=!0,setTimeout((function(){return t.scrollTimeout=!1}),1e3),this.loadMore()}}},{key:"loadMore",value:function(){this.attemptsToRender=Math.min(this.maxAttempts,this.attemptsToRender+30)}},{key:"created",value:function(){window.addEventListener("scroll",this.handleScroll),this.attemptsToRender=Math.min(30,this.maxAttempts)}},{key:"destroyed",value:function(){window.removeEventListener("scroll",this.handleScroll)}}]),n}(v.Vue);A([Object(v.Prop)()],R.prototype,"parsedSplits",void 0),A([Object(v.Prop)()],R.prototype,"gameCover",void 0),A([Object(v.Watch)("attemptsLatestToOldest",{immediate:!0})],R.prototype,"updateLastsplitByAttempt",null);var P=R=A([v.Component],R),j=n(66),component=Object(j.a)(P,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",[t._l(t.attemptsLatestToOldest,(function(n,r){return e("attempt-detail-card",{key:"attempt-detail-card_".concat(r),attrs:{attempt:n,"game-cover":t.gameCover,"last-split":t.lastSplitByAttempt[r],pb:t.PBsLatestToOldest[r],segments:t.parsedSplits.Run.Segments.Segment}})})),t._v(" "),t.attemptsToRender!==t.maxAttempts?e("b-button",{staticClass:"mb-3",attrs:{variant:"light"},on:{click:t.loadMore}},[t._v("\n    Load more\n  ")]):t._e()],2)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AttemptDetailCard:n(397).default})}}]);