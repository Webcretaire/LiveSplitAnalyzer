(window.webpackJsonp=window.webpackJsonp||[]).push([[45,31,47],{307:function(t,e,n){"use strict";n.d(e,"d",(function(){return r})),n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return l}));n(11),n(166),n(14),n(133),n(315),n(316),n(317);var r=function(time){var t=time.match(/([0-9]+):([0-9]+):([0-9.]+)/);if(!t)return 0;var e=+t[1],n=+t[2];return+t[3]+60*n+3600*e},o=function(time){var t=time.match(/([0-9]+):([0-9]+):([0-9.]+)/);if(!t)return"";var e=+t[1],n=+t[2],r=+t[3],o="";return e&&(o+="".concat(e,"h")),n&&(o+="".concat(n,"m")),o+="".concat(r<10?"0":"").concat(r.toFixed(2),"s")},c=function(time){var t="",e=!0;return time>=3600&&(e=!1,t+="".concat(Math.floor(time/3600),"h"),time%=3600),time>=60&&(e=!1,t+="".concat(Math.floor(time/60),"m"),time%=60),t+="".concat(!e&&time<10?"0":"").concat(Math.abs(+time.toFixed(2)),"s")},l=function(time){var t="",e=Math.trunc(time/3600).toFixed();t+="".concat(e.padStart(2,"0"),":"),time%=3600;var n=Math.trunc(time/60).toFixed();t+="".concat(n.padStart(2,"0"),":"),time%=60;var r=Math.trunc(time),o=(time-r).toFixed(7).substring(2);return t+="".concat(r.toFixed().padStart(2,"0"),".").concat(o.padEnd(7,"0"))}},308:function(t,e,n){"use strict";var r=n(8).default.observable({savedSettings:{},hasGameTime:!1,useRealTime:!1,splitFileIsModified:!1,PB:null,autoSplitterSettings:null,filters:[],filteredAttempts:[]});e.a={get state(){return r}}},309:function(t,e,n){"use strict";n.d(e,"c",(function(){return l})),n.d(e,"b",(function(){return f})),n.d(e,"a",(function(){return d})),n.d(e,"d",(function(){return m}));n(15),n(1),n(3),n(85),n(109);var r=n(308),o=n(307),c=n(313),l=function(t){return(null==t?void 0:t.GameTime)&&!r.a.state.useRealTime?t.GameTime:(null==t?void 0:t.RealTime)||null},f=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=0;return t.map((function(t){var r;return(r=!0===e?t.BestSegmentTime.GameTime:!1===e?t.BestSegmentTime.RealTime:l(t.BestSegmentTime))&&(n+=Object(o.d)(r)),n}))},d=function(t){return t.reduce((function(t,e){return e.SplitTimes.SplitTime.forEach((function(s){t.includes(s["@_name"])||t.push(s["@_name"])})),t}),[])},m=function(t){r.a.state.splitFileIsModified=t,t?Object(c.c)():Object(c.d)()}},310:function(t,e,n){var r=n(13),o=n(66),c=n(29),l=n(167),f=n(42),d=r(l),m=r("".slice),T=Math.ceil,_=function(t){return function(e,n,r){var l,_,h=c(f(e)),E=o(n),v=h.length,O=void 0===r?" ":c(r);return E<=v||""==O?h:((_=d(O,T((l=E-v)/O.length))).length>l&&(_=m(_,0,l)),t?h+_:_+h)}};t.exports={start:_(!1),end:_(!0)}},311:function(t,e,n){var r=n(56);t.exports=/Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(r)},312:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r=new(n(8).default)},313:function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return f})),n.d(e,"d",(function(){return d})),n.d(e,"a",(function(){return m}));var r=n(24),o=n(23),c=(n(1),function(input){return null==input?[]:Array.isArray(input)?input:[input]}),l=function(t){t.preventDefault(),t.returnValue=""},f=function(){window.addEventListener("beforeunload",l)},d=function(){window.removeEventListener("beforeunload",l)},m=Object(r.a)((function t(){var e=this;Object(o.a)(this,t),this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(t,n){e.reject=n,e.resolve=t}))}))},314:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(312),o=function(t){r.a.$emit("startLoading",t)}},315:function(t,e,n){n(9)({target:"Math",stat:!0},{trunc:n(230)})},316:function(t,e,n){"use strict";var r=n(9),o=n(310).start;r({target:"String",proto:!0,forced:n(311)},{padStart:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},317:function(t,e,n){"use strict";var r=n(9),o=n(310).end;r({target:"String",proto:!0,forced:n(311)},{padEnd:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},319:function(t,e,n){"use strict";var r;n.d(e,"a",(function(){return r})),function(t){t[t.PING=0]="PING",t[t.DELETE_ATTEMPT_BEFORE_NUMBER=1]="DELETE_ATTEMPT_BEFORE_NUMBER",t[t.SEG_TIME_ARRAY_TO_SECONDS=2]="SEG_TIME_ARRAY_TO_SECONDS",t[t.GOLD_COORDINATES_FROM_SECONDS_ARRAY=3]="GOLD_COORDINATES_FROM_SECONDS_ARRAY",t[t.XML_PARSE_TEXT=4]="XML_PARSE_TEXT",t[t.MERGE_SPLIT_INTO_NEXT_ONE=5]="MERGE_SPLIT_INTO_NEXT_ONE",t[t.UPDATE_STORE_DATA=6]="UPDATE_STORE_DATA",t[t.GET_PB=7]="GET_PB",t[t.GENERATE_SPLIT_DETAIL=8]="GENERATE_SPLIT_DETAIL",t[t.MOVE_TIME_TO_OTHER_SPLIT=9]="MOVE_TIME_TO_OTHER_SPLIT",t[t.CUMULATE_ATTEMPT_TIMES_FOR_ALL_SPLITS=10]="CUMULATE_ATTEMPT_TIMES_FOR_ALL_SPLITS",t[t.LAST_SPLIT_NAME_REACHED_BY_ATTEMPT=11]="LAST_SPLIT_NAME_REACHED_BY_ATTEMPT"}(r||(r={}))},321:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));n(1),n(38);var r=n(313),o=new function(){return new Worker(n.p+"683e65c.worker.js")},c={};o.addEventListener("message",(function(t){var e=c[t.data.magic];e?(delete c[t.data.magic],e.resolve(t.data.message)):console.error("Got message from worker with no matching operation: ".concat(t.data.magic))}));var l=function(t){var e;do{e=btoa((1e10*Math.random()).toString())}while(c[e]);c[e]=new r.a;for(var n=arguments.length,l=new Array(n>1?n-1:0),f=1;f<n;f++)l[f-1]=arguments[f];return o.postMessage({message:{instruction:t,args:l},magic:e}),c[e].promise}},329:function(t,e,n){"use strict";n.d(e,"c",(function(){return c})),n.d(e,"b",(function(){return l})),n.d(e,"a",(function(){return f})),n.d(e,"d",(function(){return d})),n.d(e,"e",(function(){return m}));var r=n(32),o=n(307),c="#1f77b4",l="#ffc400",f="#2db41e",d="#141f85",m=function(t){for(var e=Math.max.apply(Math,Object(r.a)(t)),n=[],c=[],l=(e-Math.min.apply(Math,Object(r.a)(t)))/10,f=0,d=[.01,.02,.025,.05,.1,.2,.25,.5,1,2,3,5,10,15,20,30,60,90,120,180,240,300,600,900,1800,3600];f<d.length;f++){var m=d[f];if(l<=m){l=m;break}}for(var i=0;i<=e+10*l;i+=l)i=parseFloat(i.toPrecision(8)),n.push(Object(o.b)(i)),c.push(i);return{tickTexts:n,tickVals:c}}},363:function(t,e,n){"use strict";n.r(e);n(165);var r=n(32),o=n(23),c=n(24),l=n(60),f=n(108),d=n(46),m=n(41),T=(n(6),n(1),n(2),n(85),n(109),n(14),n(15),n(67),n(49),n(25),n(306)),_=n(330),h=n(309),E=n(321),v=n(319),O=n(314),A=n(329),S=n(308),y=n(307);function R(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(d.a)(t);if(e){var o=Object(d.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(f.a)(this,n)}}var M=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(m.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},L=function(t){Object(l.a)(n,t);var e=R(n);function n(){var t;return Object(o.a)(this,n),(t=e.apply(this,arguments)).globalState=S.a.state,t.lastSplitByAttempt=[],t.layoutResets={xaxis:{tickangle:-45,automargin:!0},yaxis:{title:"Reset number"}},t.layoutAttempts={xaxis:{title:"Attempt number"},yaxis:{title:"Finished splits"}},t}return Object(c.a)(n,[{key:"updateLastsplitByAttempt",value:function(){var t=this,e=this.globalState.filters.length?this.attempts.filter((function(a){return t.globalState.filteredAttempts.includes(a["@_id"])})):this.attempts;Object(O.a)((function(){return Object(E.a)(v.a.LAST_SPLIT_NAME_REACHED_BY_ATTEMPT,t.segments,e).then((function(e){return t.lastSplitByAttempt=e}))}))}},{key:"splitLabels",get:function(){return[].concat(Object(r.a)(this.segments.map((function(t,i){var e=t.Name;return"".concat(i+1,": ").concat(e)}))),["Finished"])}},{key:"plotDataResets",get:function(){var t=this;return[{y:[].concat(Object(r.a)(this.segments.map((function(t){return t.Name}))),["Finished"]).map((function(e,i){return t.lastSplitByAttempt.filter((function(t){return t.index===i})).length})),x:this.splitLabels,title:"Resets",hoverinfo:"label+percent",type:"bar",marker:{color:[].concat(Object(r.a)(Array.from({length:this.splitLabels.length-1},(function(){return A.c}))),[A.b])}}]}},{key:"plotDataAttempts",get:function(){var t=this;return[{y:this.lastSplitByAttempt.map((function(t){return t.index})),x:this.attempts.map((function(t){return t["@_id"]})),text:this.lastSplitByAttempt.map((function(e,n){var r=e.name,o=e.index;return o===t.splitLabels.length-1?"Finished in ".concat(Object(y.a)(Object(h.c)(t.attempts[n])||"0:0:0.0")):"Reset in ".concat(r," (").concat(o+1,")")})),hoverinfo:"text",type:"bar",marker:{color:this.lastSplitByAttempt.map((function(e){return e.index===t.splitLabels.length-1?A.b:A.c}))}}]}}]),n}(T.Vue);M([Object(T.Prop)()],L.prototype,"attempts",void 0),M([Object(T.Prop)()],L.prototype,"segments",void 0),M([Object(T.Watch)("attempts",{immediate:!0}),Object(T.Watch)("segments"),Object(T.Watch)("globalState.filters",{deep:!0}),Object(T.Watch)("globalState.filteredAttempts",{deep:!0})],L.prototype,"updateLastsplitByAttempt",null);var P=L=M([Object(T.Component)({components:{Plotly:_.Plotly}})],L),j=n(65),component=Object(j.a)(P,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",[e("Plotly",{attrs:{data:t.plotDataResets,"display-mode-bar":!0,layout:t.layoutResets}}),t._v(" "),e("Plotly",{attrs:{data:t.plotDataAttempts,"display-mode-bar":!0,layout:t.layoutAttempts}})],1)}),[],!1,null,null,null);e.default=component.exports}}]);