(window.webpackJsonp=window.webpackJsonp||[]).push([[41,7,17,19,21,27,35,40,42],{307:function(t,e,n){"use strict";n.d(e,"d",(function(){return r})),n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return l})),n.d(e,"c",(function(){return c}));n(11),n(166),n(14),n(133),n(316),n(317),n(318);var r=function(time){var t=time.match(/([0-9]+):([0-9]+):([0-9.]+)/);if(!t)return 0;var e=+t[1],n=+t[2];return+t[3]+60*n+3600*e},o=function(time){var t=time.match(/([0-9]+):([0-9]+):([0-9.]+)/);if(!t)return"";var e=+t[1],n=+t[2],r=+t[3],o="";return e&&(o+="".concat(e,"h")),n&&(o+="".concat(n,"m")),o+="".concat(r<10?"0":"").concat(r.toFixed(2),"s")},l=function(time){var t="",e=!0;return time>=3600&&(e=!1,t+="".concat(Math.floor(time/3600),"h"),time%=3600),time>=60&&(e=!1,t+="".concat(Math.floor(time/60),"m"),time%=60),t+="".concat(!e&&time<10?"0":"").concat(Math.abs(+time.toFixed(2)),"s")},c=function(time){var t="",e=Math.trunc(time/3600).toFixed();t+="".concat(e.padStart(2,"0"),":"),time%=3600;var n=Math.trunc(time/60).toFixed();t+="".concat(n.padStart(2,"0"),":"),time%=60;var r=Math.trunc(time),o=(time-r).toFixed(7).substring(2);return t+="".concat(r.toFixed().padStart(2,"0"),".").concat(o.padEnd(7,"0"))}},308:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r=new(n(8).default)},309:function(t,e,n){"use strict";var r=n(8).default.observable({savedSettings:{},hasGameTime:!1,useRealTime:!1,splitFileIsModified:!1,PB:null,autoSplitterSettings:null});e.a={get state(){return r}}},310:function(t,e,n){"use strict";n.d(e,"c",(function(){return c})),n.d(e,"b",(function(){return d})),n.d(e,"a",(function(){return f})),n.d(e,"d",(function(){return m}));n(15),n(1),n(3),n(85),n(109);var r=n(309),o=n(307),l=n(314),c=function(t){return(null==t?void 0:t.GameTime)&&!r.a.state.useRealTime?t.GameTime:(null==t?void 0:t.RealTime)||null},d=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=0;return t.map((function(t){var r;return(r=!0===e?t.BestSegmentTime.GameTime:!1===e?t.BestSegmentTime.RealTime:c(t.BestSegmentTime))&&(n+=Object(o.d)(r)),n}))},f=function(t){return t.reduce((function(t,e){return e.SplitTimes.SplitTime.forEach((function(s){t.includes(s["@_name"])||t.push(s["@_name"])})),t}),[])},m=function(t){r.a.state.splitFileIsModified=t,t?Object(l.c)():Object(l.d)()}},311:function(t,e,n){var r=n(13),o=n(66),l=n(30),c=n(167),d=n(42),f=r(c),m=r("".slice),v=Math.ceil,h=function(t){return function(e,n,r){var c,h,y=l(d(e)),_=o(n),O=y.length,S=void 0===r?" ":l(r);return _<=O||""==S?y:((h=f(S,v((c=_-O)/S.length))).length>c&&(h=m(h,0,c)),t?y+h:h+y)}};t.exports={start:h(!1),end:h(!0)}},312:function(t,e,n){var r=n(56);t.exports=/Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(r)},313:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(308),o=function(t){r.a.$emit("startLoading",t)}},314:function(t,e,n){"use strict";n.d(e,"b",(function(){return l})),n.d(e,"c",(function(){return d})),n.d(e,"d",(function(){return f})),n.d(e,"a",(function(){return m}));var r=n(24),o=n(23),l=(n(1),function(input){return null==input?[]:Array.isArray(input)?input:[input]}),c=function(t){t.preventDefault(),t.returnValue=""},d=function(){window.addEventListener("beforeunload",c)},f=function(){window.removeEventListener("beforeunload",c)},m=Object(r.a)((function t(){var e=this;Object(o.a)(this,t),this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(t,n){e.reject=n,e.resolve=t}))}))},315:function(t,e,n){"use strict";n.r(e);var r=n(23),o=n(24),l=n(60),c=n(108),d=n(46),f=n(41),m=(n(6),n(1),n(165),n(306));function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(d.a)(t);if(e){var o=Object(d.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(c.a)(this,n)}}var h=function(t,e,n,desc){var r,o=arguments.length,l=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(l=(o<3?r(l):o>3?r(e,n,l):r(e,n))||l);return o>3&&l&&Object.defineProperty(e,n,l),l},y=function(t){Object(l.a)(n,t);var e=v(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).visible=!1,t.id="collapse-xxxx",t}return Object(o.a)(n,[{key:"created",value:function(){this.visible=this.startsOpen}},{key:"onVisibleUpdate",value:function(t){this.$emit("input",t)}},{key:"onValueUpdate",value:function(t){this.visible=t}},{key:"mounted",value:function(){this.id="collapse-".concat(Math.floor(1e4*Math.random()))}}]),n}(m.Vue);h([Object(m.Prop)()],y.prototype,"value",void 0),h([Object(m.Prop)()],y.prototype,"title",void 0),h([Object(m.Prop)({default:!1})],y.prototype,"startsOpen",void 0),h([Object(m.Prop)({default:!0})],y.prototype,"lazy",void 0),h([Object(m.Watch)("visible")],y.prototype,"onVisibleUpdate",null),h([Object(m.Watch)("value",{immediate:!0})],y.prototype,"onValueUpdate",null);var _=y=h([m.Component],y),O=(n(324),n(65)),component=Object(O.a)(_,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("b-card",{staticClass:"mb-4",attrs:{title:t.title}},[e("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:t.id,expression:"id"}],staticClass:"toggle-collapse",attrs:{variant:"outline-secondary",pill:""}},[e("font-awesome-icon",{attrs:{icon:"chevron-left",rotation:t.visible?270:null}})],1),t._v(" "),e("b-collapse",{attrs:{id:t.id},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[t.visible||!t.lazy?t._t("default"):t._e()],2)],1)}),[],!1,null,"1ccd451c",null);e.default=component.exports},316:function(t,e,n){n(9)({target:"Math",stat:!0},{trunc:n(230)})},317:function(t,e,n){"use strict";var r=n(9),o=n(311).start;r({target:"String",proto:!0,forced:n(312)},{padStart:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},318:function(t,e,n){"use strict";var r=n(9),o=n(311).end;r({target:"String",proto:!0,forced:n(312)},{padEnd:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},319:function(t,e,n){var content=n(325);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(84).default)("4e9aab5b",content,!0,{sourceMap:!1})},320:function(t,e,n){"use strict";n.r(e);var r=n(23),o=n(24),l=n(60),c=n(108),d=n(46),f=n(41),m=(n(6),n(1),n(165),n(306)),v=n(313);function h(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(d.a)(t);if(e){var o=Object(d.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(c.a)(this,n)}}var y=function(t,e,n,desc){var r,o=arguments.length,l=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(l=(o<3?r(l):o>3?r(e,n,l):r(e,n))||l);return o>3&&l&&Object.defineProperty(e,n,l),l},_=function(t){Object(l.a)(n,t);var e=h(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).internalValue=!0,t}return Object(o.a)(n,[{key:"valueChange",value:function(t){this.internalValue=t}},{key:"inputChange",value:function(t){var e=this;Object(v.a)((function(){return new Promise((function(n){e.$emit("input",t),e.$nextTick((function(){return n()}))}))}))}}]),n}(m.Vue);y([Object(m.Prop)()],_.prototype,"value",void 0),y([Object(m.Watch)("value",{immediate:!0})],_.prototype,"valueChange",null),y([Object(m.Watch)("internalValue")],_.prototype,"inputChange",null);var O=_=y([m.Component],_),S=n(65),component=Object(S.a)(O,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("b-checkbox",{attrs:{switch:""},model:{value:t.internalValue,callback:function(e){t.internalValue=e},expression:"internalValue"}},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},321:function(t,e,n){"use strict";var r;n.d(e,"a",(function(){return r})),function(t){t[t.PING=0]="PING",t[t.DELETE_ATTEMPT_BEFORE_NUMBER=1]="DELETE_ATTEMPT_BEFORE_NUMBER",t[t.SEG_TIME_ARRAY_TO_SECONDS=2]="SEG_TIME_ARRAY_TO_SECONDS",t[t.GOLD_COORDINATES_FROM_SECONDS_ARRAY=3]="GOLD_COORDINATES_FROM_SECONDS_ARRAY",t[t.XML_PARSE_TEXT=4]="XML_PARSE_TEXT",t[t.MERGE_SPLIT_INTO_NEXT_ONE=5]="MERGE_SPLIT_INTO_NEXT_ONE",t[t.UPDATE_STORE_DATA=6]="UPDATE_STORE_DATA",t[t.GET_PB=7]="GET_PB",t[t.GENERATE_SPLIT_DETAIL=8]="GENERATE_SPLIT_DETAIL",t[t.MOVE_TIME_TO_OTHER_SPLIT=9]="MOVE_TIME_TO_OTHER_SPLIT",t[t.CUMULATE_ATTEMPT_TIMES_FOR_ALL_SPLITS=10]="CUMULATE_ATTEMPT_TIMES_FOR_ALL_SPLITS",t[t.LAST_SPLIT_NAME_REACHED_BY_ATTEMPT=11]="LAST_SPLIT_NAME_REACHED_BY_ATTEMPT"}(r||(r={}))},322:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));n(1),n(38);var r=n(314),o=new function(){return new Worker(n.p+"cab8c47.worker.js")},l={};o.addEventListener("message",(function(t){var e=l[t.data.magic];e?(delete l[t.data.magic],e.resolve(t.data.message)):console.error("Got message from worker with no matching operation: ".concat(t.data.magic))}));var c=function(t){var e;do{e=btoa((1e10*Math.random()).toString())}while(l[e]);l[e]=new r.a;for(var n=arguments.length,c=new Array(n>1?n-1:0),d=1;d<n;d++)c[d-1]=arguments[d];return o.postMessage({message:{instruction:t,args:c},magic:e}),l[e].promise}},324:function(t,e,n){"use strict";n(319)},325:function(t,e,n){var r=n(83)(!1);r.push([t.i,"*[data-v-1ccd451c]{color:#000}.toggle-collapse[data-v-1ccd451c]{position:absolute;right:1rem;top:1rem}",""]),t.exports=r},328:function(t,e,n){"use strict";n.d(e,"c",(function(){return l})),n.d(e,"b",(function(){return c})),n.d(e,"a",(function(){return d})),n.d(e,"d",(function(){return f})),n.d(e,"e",(function(){return m}));var r=n(32),o=n(307),l="#1f77b4",c="#ffc400",d="#2db41e",f="#141f85",m=function(t){for(var e=Math.max.apply(Math,Object(r.a)(t)),n=[],l=[],c=(e-Math.min.apply(Math,Object(r.a)(t)))/10,d=0,f=[.01,.02,.025,.05,.1,.2,.25,.5,1,2,3,5,10,15,20,30,60,90,120,180,240,300,600,900,1800,3600];d<f.length;d++){var m=f[d];if(c<=m){c=m;break}}for(var i=0;i<=e+10*c;i+=c)i=parseFloat(i.toPrecision(8)),n.push(Object(o.b)(i)),l.push(i);return{tickTexts:n,tickVals:l}}},335:function(t,e,n){var content=n(369);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(84).default)("9eff8b6e",content,!0,{sourceMap:!1})},336:function(t,e,n){"use strict";n.r(e);n(165);var r=n(32),o=n(23),l=n(24),c=n(60),d=n(108),f=n(46),m=n(41),v=(n(6),n(1),n(11),n(29),n(2),n(134),n(87),n(15),n(14),n(67),n(49),n(328)),h=n(307),y=n(306),_=n(310),O=n(309),S=n(322),j=n(321);function x(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(d.a)(this,n)}}var T=function(t,e,n,desc){var r,o=arguments.length,l=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(m.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(l=(o<3?r(l):o>3?r(e,n,l):r(e,n))||l);return o>3&&l&&Object.defineProperty(e,n,l),l},R=function(t){Object(c.a)(n,t);var e=x(n);function n(){var t;return Object(o.a)(this,n),(t=e.apply(this,arguments)).collapseVisible=!1,t.timesSeconds=[],t.layout={},t.gold={x:0,y:0},t.plotlyCurrentView=null,t.formatTime=h.a,t}return Object(l.a)(n,[{key:"splitIndex",get:function(){return this.split.Index}},{key:"useRealTime",get:function(){return O.a.state.useRealTime}},{key:"updateLayout",value:function(){var t,e=(null===(t=this.plotlyCurrentView)||void 0===t?void 0:t.y)||this.timesSeconds.filter((function(t){return"number"==typeof t})),n=Object(v.e)(e),r={title:"Time history",xaxis:{title:"Finished number (".concat(this.timesToPlot.length," total)")},yaxis:{rangemode:"nonnegative",tickmode:"array",ticktext:n.tickTexts,tickvals:n.tickVals},annotations:[{x:this.gold.x,y:this.gold.y,text:"Gold",font:{color:v.b},arrowhead:2,arrowsize:1,arrowwidth:2,arrowcolor:v.b,ax:0,ay:30}]};this.plotlyCurrentView&&(r.xaxis.range=this.plotlyCurrentView.x,r.yaxis.range=this.plotlyCurrentView.y),r.shapes=[];var o=Object(_.c)(this.currentAttempt);this.graphCurrentAttemptHline&&this.currentAttemptNumber&&o&&r.shapes.push({type:"line",x0:0,y0:Object(h.d)(o),x1:this.timesSeconds.length-1,y1:Object(h.d)(o),line:{shape:"spline",color:v.a,width:1,dash:"dot"}});var l=Object(_.c)(this.medianAttempt);this.graphMedianAttemptHline&&l&&r.shapes.push({type:"line",x0:0,y0:Object(h.d)(l),x1:this.timesSeconds.length-1,y1:Object(h.d)(l),line:{shape:"spline",color:v.d,width:1,dash:"dot"}}),this.layout=r}},{key:"bestTimeDisplay",get:function(){return this.cumulateSplits?Object(h.b)(this.gold.y):Object(h.a)(Object(_.c)(this.split.BestSegmentTime)||"")}},{key:"updateGold",value:function(t){var e=this;Object(S.a)(j.a.GOLD_COORDINATES_FROM_SECONDS_ARRAY,t).then((function(t){return e.gold=t}))}},{key:"currentAttempt",get:function(){var t=this;return this.timesToPlot.find((function(e){return e["@_id"]===t.currentAttemptNumber}))}},{key:"medianAttempt",get:function(){var t,e=Object(r.a)(this.timesSeconds).sort((function(a,b){return(a||0)-(b||0)})),n=Math.round(this.timesSeconds.length/2)-1;return null===(t=this.split.SegmentHistory)||void 0===t?void 0:t.Time.find((function(t){return Object(h.d)(Object(_.c)(t)||"0:0:0.0")===e[n]}))}},{key:"goldsMap",get:function(){var t=999999;return this.timesSeconds.map((function(e){return!!(e&&e<t)&&(t=e,!0)}))}},{key:"updateTimesSeconds",value:function(t){var e=this;Object(S.a)(j.a.SEG_TIME_ARRAY_TO_SECONDS,t).then((function(t){return e.timesSeconds=t}))}},{key:"updateTimesAfterUseRealTimeChange",value:function(){var t=this;this.$nextTick((function(){Object(S.a)(j.a.SEG_TIME_ARRAY_TO_SECONDS,t.timesToPlot).then((function(e){return t.timesSeconds=e}))}))}},{key:"collapseName",get:function(){return"collapse-subsplits-".concat(this.splitIndex)}},{key:"markerColors",get:function(){for(var t,e,n=[],i=0;i<this.timesToPlot.length;++i)this.timesToPlot[i]["@_id"]==(null===(t=this.currentAttempt)||void 0===t?void 0:t["@_id"])?n.push(v.a):this.timesToPlot[i]["@_id"]==(null===(e=this.medianAttempt)||void 0===e?void 0:e["@_id"])?n.push(v.d):n.push(this.goldsMap[i]?v.b:v.c);return n}},{key:"markerSizes",get:function(){for(var t,e,n=[],i=0;i<this.timesToPlot.length;++i)this.timesToPlot[i]["@_id"]==(null===(t=this.currentAttempt)||void 0===t?void 0:t["@_id"])||this.timesToPlot[i]["@_id"]==(null===(e=this.medianAttempt)||void 0===e?void 0:e["@_id"])?n.push(6):n.push(this.goldsMap[i]?5:3);return n}},{key:"timesToPlot",get:function(){var t,e=((null===(t=this.split.SegmentHistory)||void 0===t?void 0:t.Time)||[]).filter((function(t){return t["@_id"]>0}));if(!this.cumulateSplits)return e;var n=this.split.Subsplits.length?this.split.Subsplits[this.split.Subsplits.length-1].Index:this.split.Index;return this.cumulatedSplitTimes[n]||[]}},{key:"plot_data",get:function(){var t=this.timesToPlot.map((function(t){var time=Object(_.c)(t);return time?"".concat(Object(h.a)(time)," (attempt ").concat(t["@_id"],")"):""}));return[{x:Array.from({length:this.timesToPlot.length},(function(t,e){return e})),y:this.timesSeconds,text:t,type:"scatter",hoverinfo:"text",mode:"lines+markers",marker:{color:this.markerColors,size:this.markerSizes},line:{shape:"spline",color:v.c,width:1}}]}},{key:"onPlotRelayout",value:function(t){t["xaxis.autorange"]&&t["yaxis.autorange"]?this.plotlyCurrentView=null:t["yaxis.range[0]"]&&t["yaxis.range[1]"]&&t["xaxis.range[0]"]&&t["xaxis.range[1]"]&&(this.plotlyCurrentView={x:[t["xaxis.range[0]"],t["xaxis.range[1]"]],y:[t["yaxis.range[0]"],t["yaxis.range[1]"]]})}}]),n}(y.Vue);T([Object(y.Prop)()],R.prototype,"split",void 0),T([Object(y.Prop)({default:!1})],R.prototype,"graphCurrentAttemptHline",void 0),T([Object(y.Prop)({default:!1})],R.prototype,"graphMedianAttemptHline",void 0),T([Object(y.Prop)({default:!1})],R.prototype,"cumulateSplits",void 0),T([Object(y.Prop)({default:function(){return[]}})],R.prototype,"cumulatedSplitTimes",void 0),T([Object(y.Prop)()],R.prototype,"currentAttemptNumber",void 0),T([Object(y.Prop)()],R.prototype,"parsedSplits",void 0),T([Object(y.Watch)("gold"),Object(y.Watch)("timesToPlot"),Object(y.Watch)("graphCurrentAttemptHline"),Object(y.Watch)("graphMedianAttemptHline"),Object(y.Watch)("plotlyCurrentView")],R.prototype,"updateLayout",null),T([Object(y.Watch)("timesSeconds",{immediate:!0})],R.prototype,"updateGold",null),T([Object(y.Watch)("timesToPlot",{immediate:!0})],R.prototype,"updateTimesSeconds",null),T([Object(y.Watch)("useRealTime")],R.prototype,"updateTimesAfterUseRealTimeChange",null);var P=R=T([y.Component],R),A=n(65),component=Object(A.a)(P,undefined,undefined,!1,null,null,null);e.default=component.exports},339:function(t,e,n){var content=n(378);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(84).default)("f147f4e6",content,!0,{sourceMap:!1})},340:function(t,e,n){var content=n(380);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(84).default)("aad03594",content,!0,{sourceMap:!1})},341:function(t,e,n){"use strict";n.r(e);n(165);var r=n(32),o=n(23),l=n(24),c=n(60),d=n(108),f=n(46),m=n(41),v=(n(6),n(1),n(2),n(15),n(367)),h=n.n(v),y=n(306),_=n(310),O=n(309);function S(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(d.a)(this,n)}}var j=function(t,e,n,desc){var r,o=arguments.length,l=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(m.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(l=(o<3?r(l):o>3?r(e,n,l):r(e,n))||l);return o>3&&l&&Object.defineProperty(e,n,l),l},x=function(t){Object(c.a)(n,t);var e=S(n);function n(){var t;return Object(o.a)(this,n),(t=e.apply(this,arguments)).internalValue=1,t.filterRuns=!1,t}return Object(l.a)(n,[{key:"isPb",get:function(){var t;return this.internalValue===(null===(t=this.PB)||void 0===t?void 0:t["@_id"])}},{key:"PB",get:function(){return O.a.state.PB}},{key:"runAttempts",get:function(){return this.filterRuns?this.attempts.filter((function(a){return Object(_.c)(a)})):this.attempts}},{key:"latestAttemptNumber",get:function(){return Math.max.apply(Math,Object(r.a)(this.runAttempts.map((function(a){return a["@_id"]}))))}},{key:"runSliderMarks",get:function(){return[this.runAttempts[0]["@_id"],this.latestAttemptNumber]}},{key:"onValueUpdate",value:function(t){this.internalValue=t}},{key:"onInternalValueChange",value:function(t){this.$emit("input",t)}}]),n}(y.Vue);j([Object(y.Prop)()],x.prototype,"value",void 0),j([Object(y.Prop)()],x.prototype,"attempts",void 0),j([Object(y.Watch)("value",{immediate:!0})],x.prototype,"onValueUpdate",null),j([Object(y.Watch)("internalValue")],x.prototype,"onInternalValueChange",null);var T=x=j([Object(y.Component)({components:{VueSlider:h.a}})],x),R=(n(368),n(65)),component=Object(R.a)(T,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"mb-4"},[e("div",{staticClass:"d-flex mt-4 mb-2"},[e("b-form",{staticClass:"text-center m-auto",attrs:{inline:""}},[e("b-input-group",{attrs:{prepend:"Currently displayed run"}},[e("b-form-input",{attrs:{type:"number",max:t.latestAttemptNumber,min:"1",debounce:"500"},model:{value:t.internalValue,callback:function(e){t.internalValue=t._n(e)},expression:"internalValue"}})],1),t._v(" "),e("b-button",{staticClass:"ml-2",attrs:{variant:"outline-info",disabled:t.isPb},on:{click:function(e){t.internalValue=t.PB["@_id"]}}},[t._v("\n        Go to PB\n      ")])],1)],1),t._v(" "),e("loading-switch",{staticClass:"mt-3 mb-2",model:{value:t.filterRuns,callback:function(e){t.filterRuns=e},expression:"filterRuns"}},[t._v("\n    Filter out unfinished runs\n  ")]),t._v(" "),e("vue-slider",{staticClass:"attempt-selection-slider",attrs:{data:t.runAttempts,"data-value":"@_id","data-label":"@_id",marks:t.runSliderMarks,lazy:"",adsorb:""},model:{value:t.internalValue,callback:function(e){t.internalValue=e},expression:"internalValue"}})],1)}),[],!1,null,"11959438",null);e.default=component.exports;installComponents(component,{LoadingSwitch:n(320).default})},368:function(t,e,n){"use strict";n(335)},369:function(t,e,n){var r=n(83)(!1);r.push([t.i,".attempt-selection-slider[data-v-11959438]{margin-bottom:2rem}",""]),t.exports=r},372:function(t,e,n){var content=n(396);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(84).default)("40154754",content,!0,{sourceMap:!1})},377:function(t,e,n){"use strict";n(339)},378:function(t,e,n){var r=n(83)(!1);r.push([t.i,"*[data-v-0b2b14a8]{color:#000}img[data-v-0b2b14a8]{filter:drop-shadow(0 0 .5rem rgb(0,0,0))}.limit-height[data-v-0b2b14a8]{display:flex}.split-icon-container[data-v-0b2b14a8]{min-width:6.5rem;text-align:center;display:flex;justify-content:center;align-items:center}.split-icon-container .split-icon[data-v-0b2b14a8]{-o-object-fit:contain;object-fit:contain;max-width:100%;max-height:5rem;width:auto;height:auto}.toggle-collapse[data-v-0b2b14a8]{position:absolute;top:1rem;right:1rem}.subsplit-container[data-v-0b2b14a8]{display:flex}.subsplit-container .subsplit-collapser-hitbox[data-v-0b2b14a8]{width:1rem;cursor:pointer;min-height:2rem}.subsplit-container .subsplit-collapser[data-v-0b2b14a8]{width:.3rem;background-color:#fff;transition:all .1s;height:100%;margin:auto;border-radius:.15rem}.subsplit-container .subsplit-collapser[data-v-0b2b14a8]:hover{filter:drop-shadow(0 0 .2rem white)}",""]),t.exports=r},379:function(t,e,n){"use strict";n(340)},380:function(t,e,n){var r=n(83)(!1);r.push([t.i,"*[data-v-e1ea6146]{color:#000}img[data-v-e1ea6146]{filter:drop-shadow(0 0 .5rem rgb(0,0,0))}.limit-height[data-v-e1ea6146]{display:flex}.split-icon-container[data-v-e1ea6146]{min-width:6.5rem;text-align:center;display:flex;justify-content:center;align-items:center}.split-icon-container .split-icon[data-v-e1ea6146]{-o-object-fit:contain;object-fit:contain;max-width:100%;max-height:5rem;width:auto;height:auto}.toggle-collapse[data-v-e1ea6146]{position:absolute;top:1rem;right:1rem}small[data-v-e1ea6146]{color:#6b6b6b;font-size:1rem}",""]),t.exports=r},381:function(t,e,n){"use strict";n.r(e);n(11),n(29),n(165);var r=n(23),o=n(24),l=n(60),c=n(108),d=n(46),f=n(41),m=(n(6),n(1),n(169),n(14),n(310)),v=n(306),h=n(308),y=n(313),_=n(309),O=n(322),S=n(321),j=n(336),x=n(329);function T(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(d.a)(t);if(e){var o=Object(d.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(c.a)(this,n)}}var R=function(t,e,n,desc){var r,o=arguments.length,l=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(l=(o<3?r(l):o>3?r(e,n,l):r(e,n))||l);return o>3&&l&&Object.defineProperty(e,n,l),l},P=function(t){Object(l.a)(n,t);var e=T(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"fixGoldsModal",value:function(){h.a.$emit("openModal","ManualGoldUpdateModal",{split:this.split})}},{key:"moveTimeModal",value:function(){h.a.$emit("openModal","MoveTimeModal",{splits:this.segmentsHolder.Segment,currentSplitIndex:this.splitIndex})}},{key:"foldSplit",value:function(){this.collapseVisible=!1}},{key:"unfoldSplit",value:function(){this.collapseVisible=!0}},{key:"nextSplit",get:function(){return this.segmentsHolder.Segment[this.splitIndex+1]}},{key:"doMergeNextSplit",value:function(t){var e=this;if(!this.nextSplit)return this.$bvToast.toast("Next split doesn't exist",{title:"Splits merged",autoHideDelay:5e3,appendToast:!1,variant:"danger"}),void t();var n=this.split.Name,r=this.nextSplit.Name;Object(O.a)(S.a.MERGE_SPLIT_INTO_NEXT_ONE,this.segmentsHolder.Segment,this.splitIndex).then((function(t){var o;Object(m.d)(!0);var l=_.a.state.autoSplitterSettings;(null===(o=null==l?void 0:l.Splits)||void 0===o?void 0:o.Split)&&l.Splits.Split.splice(e.splitIndex,1),e.segmentsHolder.Segment=t,e.$bvToast.toast("Merged ".concat(n," with ").concat(r),{title:"Splits merged",autoHideDelay:5e3,appendToast:!1,variant:"success"})})).finally((function(){return t()}))}},{key:"mergeNextSplit",value:function(){var t=this;this.nextSplit&&h.a.$emit("openConfirm",'Merge "'.concat(this.split.Name,'" into "').concat(this.nextSplit.Name,'"?'),(function(){Object(y.a)((function(){return new Promise((function(e){return t.doMergeNextSplit(e)}))}))}))}}]),n}(Object(v.mixins)(j.default));R([Object(v.Prop)()],P.prototype,"segmentsHolder",void 0);var A=P=R([Object(v.Component)({components:{Plotly:x.Plotly}})],P),C=(n(379),n(65)),component=Object(C.a)(A,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",[e("b-card",{staticClass:"SingleSplitCard text-left",attrs:{id:"SingleSplitCard_".concat(t.splitIndex)}},[e("div",{staticClass:"limit-height"},[t.split.Icon?e("div",{staticClass:"split-icon-container mr-4 ml-2"},[e("b-card-img",{staticClass:"split-icon",attrs:{src:t.split.Icon,block:""}})],1):t._e(),t._v(" "),e("div",{staticClass:"mt-auto mb-auto"},[e("h3",[t._v("\n          "+t._s(t.split.Name)+" "),t.split.IsSubsplit?e("small",[t._v("(subsplit)")]):t._e()]),t._v(" "),t.split.BestSegmentTime?e("p",{staticClass:"m-0"},[e("span",{staticClass:"mr-2"},[e("strong",[t._v("Best "+t._s(t.cumulateSplits?"pace":"time")+": ")]),t._v(" "+t._s(t.bestTimeDisplay)+"\n          ")]),t._v(" "),e("b-dropdown",{attrs:{text:"Edit split",variant:"outline-dark",lazy:""}},[e("b-dropdown-item-button",{attrs:{variant:"dark"},on:{click:t.fixGoldsModal}},[t._v("Fix fake golds")]),t._v(" "),e("b-dropdown-item-button",{attrs:{variant:"dark"},on:{click:t.moveTimeModal}},[t._v("Move time between splits\n            ")]),t._v(" "),t.nextSplit?e("b-dropdown-item-button",{attrs:{variant:"dark"},on:{click:t.mergeNextSplit}},[t._v("Merge into next split\n            ")]):t._e()],1)],1):t._e(),t._v(" "),e("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:t.collapseName,expression:"collapseName"}],staticClass:"toggle-collapse",attrs:{variant:"outline-dark",pill:""}},[e("font-awesome-icon",{attrs:{icon:"chevron-left",rotation:t.collapseVisible?270:null}})],1)],1)])]),t._v(" "),e("b-collapse",{staticClass:"mt-1",attrs:{id:t.collapseName},model:{value:t.collapseVisible,callback:function(e){t.collapseVisible=e},expression:"collapseVisible"}},[e("b-card",{staticClass:"text-left"},[e("Plotly",{attrs:{data:t.plot_data,layout:t.layout,"display-mode-bar":!0},on:{relayout:t.onPlotRelayout}})],1)],1)],1)}),[],!1,null,"e1ea6146",null);e.default=component.exports},388:function(t,e,n){"use strict";n.r(e);n(11),n(29),n(14),n(165);var r=n(23),o=n(24),l=n(60),c=n(108),d=n(46),f=n(41),m=(n(6),n(1),n(3),n(306)),v=n(314),h=n(336),y=n(329);function _(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(d.a)(t);if(e){var o=Object(d.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(c.a)(this,n)}}var O=function(t,e,n,desc){var r,o=arguments.length,l=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(l=(o<3?r(l):o>3?r(e,n,l):r(e,n))||l);return o>3&&l&&Object.defineProperty(e,n,l),l},S=function(t){Object(l.a)(n,t);var e=_(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).subsplitsVisible=!0,t}return Object(o.a)(n,[{key:"foldSplit",value:function(){this.collapseVisible=!1,Object(v.b)(this.$refs.splitAccess).forEach((function(t){return t.foldSplit()}))}},{key:"unfoldSplit",value:function(){this.collapseVisible=!0,Object(v.b)(this.$refs.splitAccess).forEach((function(t){return t.unfoldSplit()}))}}]),n}(Object(m.mixins)(h.default));O([Object(m.Prop)()],S.prototype,"segmentsHolder",void 0),O([Object(m.Prop)()],S.prototype,"cumulateSplits",void 0);var j=S=O([Object(m.Component)({components:{Plotly:y.Plotly}})],S),x=(n(377),n(65)),component=Object(x.a)(j,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",[t.split.Index<0?e("div",[e("b-card",{staticClass:"SingleSplitCard text-left",attrs:{id:"SingleSplitCard_".concat(t.splitIndex)}},[e("div",{staticClass:"limit-height"},[t.split.Icon?e("div",{staticClass:"split-icon-container mr-4 ml-2"},[e("b-card-img",{staticClass:"split-icon",attrs:{src:t.split.Icon,block:""}})],1):t._e(),t._v(" "),e("div",{staticClass:"mt-auto mb-auto"},[e("h3",[t._v(t._s(t.split.Name))]),t._v(" "),t.split.BestSegmentTime?e("p",{staticClass:"m-0"},[e("span",{staticClass:"mr-2"},[e("strong",[t._v("Best "+t._s(t.cumulateSplits?"pace":"time")+":")]),t._v(" "+t._s(t.bestTimeDisplay)+"\n            ")])]):t._e(),t._v(" "),e("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:t.collapseName,expression:"collapseName"}],staticClass:"toggle-collapse",attrs:{variant:"outline-dark",pill:""}},[e("font-awesome-icon",{attrs:{icon:"chevron-left",rotation:t.collapseVisible?270:null}})],1)],1)])]),t._v(" "),e("b-collapse",{staticClass:"mt-1",attrs:{id:t.collapseName},model:{value:t.collapseVisible,callback:function(e){t.collapseVisible=e},expression:"collapseVisible"}},[e("b-card",{staticClass:"text-left"},[e("Plotly",{attrs:{data:t.plot_data,layout:t.layout,"display-mode-bar":!0},on:{relayout:t.onPlotRelayout}})],1)],1),t._v(" "),e("div",{staticClass:"pl-4 mt-3 subsplit-container"},[e("div",{staticClass:"ml-2 mr-4 subsplit-collapser-hitbox",on:{click:function(e){t.subsplitsVisible=!t.subsplitsVisible}}},[e("div",{staticClass:"subsplit-collapser"})]),t._v(" "),e("b-collapse",{staticClass:"w-100",attrs:{visible:t.subsplitsVisible}},t._l(t.split.Subsplits,(function(n,i){return e("split-display",{key:"split-".concat(n.Index,"-").concat(n.Name),ref:"splitAccess",refInFor:!0,class:i===t.split.Subsplits.length-1?"":"mb-3",attrs:{split:n,"graph-current-attempt-hline":t.graphCurrentAttemptHline,"graph-median-attempt-hline":t.graphMedianAttemptHline,"cumulate-splits":t.cumulateSplits,"cumulated-split-times":t.cumulatedSplitTimes,"current-attempt-number":t.currentAttemptNumber,"segments-holder":t.segmentsHolder,"parsed-splits":t.parsedSplits}})})),1)],1)],1):e("div",[e("split-display",{ref:"splitAccess",staticClass:"mb-3",attrs:{split:t.split,"graph-current-attempt-hline":t.graphCurrentAttemptHline,"graph-median-attempt-hline":t.graphMedianAttemptHline,"current-attempt-number":t.currentAttemptNumber,"cumulate-splits":t.cumulateSplits,"cumulated-split-times":t.cumulatedSplitTimes,"segments-holder":t.segmentsHolder,"parsed-splits":t.parsedSplits}})],1)])}),[],!1,null,"0b2b14a8",null);e.default=component.exports;installComponents(component,{SplitDisplay:n(381).default})},395:function(t,e,n){"use strict";n(372)},396:function(t,e,n){var r=n(83)(!1);r.push([t.i,".warning-icon[data-v-4282fb2a]{font-size:1rem;padding-bottom:.2rem}",""]),t.exports=r},411:function(t,e,n){"use strict";n.r(e);n(14),n(165);var r=n(23),o=n(24),l=n(60),c=n(108),d=n(46),f=n(41),m=(n(6),n(1),n(3),n(306)),v=n(309),h=n(314),y=n(322),_=n(321),O=n(313);function S(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(d.a)(t);if(e){var o=Object(d.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(c.a)(this,n)}}var j=function(t,e,n,desc){var r,o=arguments.length,l=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(l=(o<3?r(l):o>3?r(e,n,l):r(e,n))||l);return o>3&&l&&Object.defineProperty(e,n,l),l},x=function(t){Object(l.a)(n,t);var e=S(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).currentAttemptNumber=1,t.globalState=v.a.state,t.savedSettings=v.a.state.savedSettings,t.cumulatedSplitTimes=[],t}return Object(o.a)(n,[{key:"PB",get:function(){return this.globalState.PB}},{key:"foldAllSplits",value:function(){Object(h.b)(this.$refs.splitAccess).forEach((function(t){return t.foldSplit()}))}},{key:"unfoldAllSplits",value:function(){Object(h.b)(this.$refs.splitAccess).forEach((function(t){return t.unfoldSplit()}))}},{key:"onPbUpdate",value:function(t){t&&(this.currentAttemptNumber=null==t?void 0:t["@_id"])}},{key:"updateCumulatedSplitTimes",value:function(){var t=this;this.savedSettings.cumulateSplits&&Object(O.a)((function(){return Object(y.a)(_.a.CUMULATE_ATTEMPT_TIMES_FOR_ALL_SPLITS,t.segmentsHolder.Segment).then((function(e){return t.cumulatedSplitTimes=e}))}))}}]),n}(m.Vue);j([Object(m.Prop)()],x.prototype,"attempts",void 0),j([Object(m.Prop)()],x.prototype,"detailedSegments",void 0),j([Object(m.Prop)()],x.prototype,"segmentsHolder",void 0),j([Object(m.Prop)()],x.prototype,"parsedSplits",void 0),j([Object(m.Watch)("PB",{immediate:!0})],x.prototype,"onPbUpdate",null),j([Object(m.Watch)("savedSettings.cumulateSplits",{immediate:!0}),Object(m.Watch)("segmentsHolder.Segment",{deep:!0})],x.prototype,"updateCumulatedSplitTimes",null);var T=x=j([m.Component],x),R=(n(395),n(65)),component=Object(R.a)(T,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",[e("collapsible-card",{attrs:{title:"Options",lazy:!1}},[e("attempt-selector",{attrs:{attempts:t.attempts},model:{value:t.currentAttemptNumber,callback:function(e){t.currentAttemptNumber=e},expression:"currentAttemptNumber"}}),t._v(" "),e("b-col",{attrs:{cols:"10",offset:"1"}},[e("hr")]),t._v(" "),e("loading-switch",{staticClass:"mb-2",model:{value:t.savedSettings.graphCurrentAttemptHline,callback:function(e){t.$set(t.savedSettings,"graphCurrentAttemptHline",e)},expression:"savedSettings.graphCurrentAttemptHline"}},[t._v("\n      Display current attempt's times as a horizontal line\n    ")]),t._v(" "),e("loading-switch",{staticClass:"mb-2",model:{value:t.savedSettings.graphMedianAttemptHline,callback:function(e){t.$set(t.savedSettings,"graphMedianAttemptHline",e)},expression:"savedSettings.graphMedianAttemptHline"}},[t._v("\n      Display median attempt's times as a horizontal line\n    ")]),t._v(" "),e("loading-switch",{model:{value:t.savedSettings.cumulateSplits,callback:function(e){t.$set(t.savedSettings,"cumulateSplits",e)},expression:"savedSettings.cumulateSplits"}},[t._v("\n      Show pace so far instead of individual split times\n      "),e("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"help-question text-warning",attrs:{title:"For big splitfiles (lots of splits or attempts), this might slow down the page for a while, be patient"}},[e("font-awesome-icon",{staticClass:"warning-icon",attrs:{icon:"warning"}})],1)])],1),t._v(" "),e("div",{staticClass:"mb-2 text-left"},[e("a",{staticClass:"text-white",attrs:{href:"javascript:void(0)"},on:{click:t.unfoldAllSplits}},[t._v("Expand all split info")]),t._v(" "),e("a",{staticClass:"text-white ml-3",attrs:{href:"javascript:void(0)"},on:{click:t.foldAllSplits}},[t._v("Collapse all split info")])]),t._v(" "),t._l(t.detailedSegments,(function(n){return e("subsplits-display",{key:"split-".concat(n.Index,"-").concat(n.Name),ref:"splitAccess",refInFor:!0,staticClass:"mb-3",attrs:{split:n,"graph-current-attempt-hline":t.savedSettings.graphCurrentAttemptHline,"graph-median-attempt-hline":t.savedSettings.graphMedianAttemptHline,"cumulate-splits":t.savedSettings.cumulateSplits,"cumulated-split-times":t.cumulatedSplitTimes,"current-attempt-number":t.currentAttemptNumber,"segments-holder":t.segmentsHolder,"parsed-splits":t.parsedSplits}})}))],2)}),[],!1,null,"4282fb2a",null);e.default=component.exports;installComponents(component,{AttemptSelector:n(341).default,LoadingSwitch:n(320).default,CollapsibleCard:n(315).default,SubsplitsDisplay:n(388).default})}}]);