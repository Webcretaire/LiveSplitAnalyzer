(window.webpackJsonp=window.webpackJsonp||[]).push([[23,31,47],{322:function(t,e,n){"use strict";n.d(e,"e",(function(){return r})),n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return c})),n.d(e,"d",(function(){return l})),n.d(e,"a",(function(){return d}));n(11),n(177),n(14),n(138),n(330),n(331),n(332);var r=function(time){var t=time.match(/([0-9]+):([0-9]+):([0-9.]+)/);if(!t)return 0;var e=+t[1],n=+t[2];return+t[3]+60*n+3600*e},o=function(time){var t=time.match(/([0-9]+):([0-9]+):([0-9.]+)/);if(!t)return"";var e=+t[1],n=+t[2],r=+t[3],o="";return e&&(o+="".concat(e,"h")),n&&(o+="".concat(n,"m")),o+="".concat(r<10?"0":"").concat(r.toFixed(2),"s")},c=function(time){var t="",e=!0;return time>=3600&&(e=!1,t+="".concat(Math.floor(time/3600),"h"),time%=3600),time>=60&&(e=!1,t+="".concat(Math.floor(time/60),"m"),time%=60),t+="".concat(!e&&time<10?"0":"").concat(Math.abs(+time.toFixed(2)),"s")},l=function(time){var t="",e=Math.trunc(time/3600).toFixed();t+="".concat(e.padStart(2,"0"),":"),time%=3600;var n=Math.trunc(time/60).toFixed();t+="".concat(n.padStart(2,"0"),":"),time%=60;var r=Math.trunc(time),o=(time-r).toFixed(7).substring(2);return t+="".concat(r.toFixed().padStart(2,"0"),".").concat(o.padEnd(7,"0"))},d=function(t,e){var n=t.split(" "),r=n[0].split("/");return"".concat(r[2],"-").concat(r[0],"-").concat(r[1]).concat(e?" at ":" ").concat(n[1])}},323:function(t,e,n){"use strict";var r=n(8).default.observable({savedSettings:{},hasGameTime:!1,useRealTime:!1,splitFileIsModified:!1,PB:null,autoSplitterSettings:null,filters:[],filteredAttempts:[]});e.a={get state(){return r}}},324:function(t,e,n){"use strict";n.d(e,"c",(function(){return l})),n.d(e,"b",(function(){return d})),n.d(e,"a",(function(){return f})),n.d(e,"d",(function(){return h}));n(15),n(1),n(3),n(67),n(112);var r=n(323),o=n(322),c=n(328),l=function(t){return(null==t?void 0:t.GameTime)&&!r.a.state.useRealTime?t.GameTime:(null==t?void 0:t.RealTime)||null},d=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=0;return t.map((function(t){var r;return(r=!0===e?t.BestSegmentTime.GameTime:!1===e?t.BestSegmentTime.RealTime:l(t.BestSegmentTime))&&(n+=Object(o.e)(r)),n}))},f=function(t){return t.reduce((function(t,e){return e.SplitTimes.SplitTime.forEach((function(s){t.includes(s["@_name"])||t.push(s["@_name"])})),t}),[])},h=function(t){r.a.state.splitFileIsModified=t,t?Object(c.c)():Object(c.d)()}},325:function(t,e,n){var r=n(13),o=n(68),c=n(31),l=n(178),d=n(42),f=r(l),h=r("".slice),m=Math.ceil,T=function(t){return function(e,n,r){var l,T,v=c(d(e)),_=o(n),y=v.length,O=void 0===r?" ":c(r);return _<=y||""==O?v:((T=f(O,m((l=_-y)/O.length))).length>l&&(T=h(T,0,l)),t?v+T:T+v)}};t.exports={start:T(!1),end:T(!0)}},326:function(t,e,n){var r=n(59);t.exports=/Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(r)},328:function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return d})),n.d(e,"d",(function(){return f})),n.d(e,"a",(function(){return h}));var r=n(28),o=n(27),c=(n(1),function(input){return null==input?[]:Array.isArray(input)?input:[input]}),l=function(t){t.preventDefault(),t.returnValue=""},d=function(){window.addEventListener("beforeunload",l)},f=function(){window.removeEventListener("beforeunload",l)},h=Object(r.a)((function t(){var e=this;Object(o.a)(this,t),this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(t,n){e.reject=n,e.resolve=t}))}))},330:function(t,e,n){n(9)({target:"Math",stat:!0},{trunc:n(241)})},331:function(t,e,n){"use strict";var r=n(9),o=n(325).start;r({target:"String",proto:!0,forced:n(326)},{padStart:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},332:function(t,e,n){"use strict";var r=n(9),o=n(325).end;r({target:"String",proto:!0,forced:n(326)},{padEnd:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},335:function(t,e,n){"use strict";var r;n.d(e,"a",(function(){return r})),function(t){t[t.PING=0]="PING",t[t.DELETE_ATTEMPT_BEFORE_NUMBER=1]="DELETE_ATTEMPT_BEFORE_NUMBER",t[t.SEG_TIME_ARRAY_TO_SECONDS=2]="SEG_TIME_ARRAY_TO_SECONDS",t[t.GOLD_COORDINATES_FROM_SECONDS_ARRAY=3]="GOLD_COORDINATES_FROM_SECONDS_ARRAY",t[t.XML_PARSE_TEXT=4]="XML_PARSE_TEXT",t[t.MERGE_SPLIT_INTO_NEXT_ONE=5]="MERGE_SPLIT_INTO_NEXT_ONE",t[t.UPDATE_STORE_DATA=6]="UPDATE_STORE_DATA",t[t.GET_PB=7]="GET_PB",t[t.GENERATE_SPLIT_DETAIL=8]="GENERATE_SPLIT_DETAIL",t[t.MOVE_TIME_TO_OTHER_SPLIT=9]="MOVE_TIME_TO_OTHER_SPLIT",t[t.CUMULATE_ATTEMPT_TIMES_FOR_ALL_SPLITS=10]="CUMULATE_ATTEMPT_TIMES_FOR_ALL_SPLITS",t[t.LAST_SPLIT_NAME_REACHED_BY_ATTEMPT=11]="LAST_SPLIT_NAME_REACHED_BY_ATTEMPT"}(r||(r={}))},337:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));n(1),n(38);var r=n(328),o=new function(){return new Worker(n.p+"ce34c6a.worker.js")},c={};o.addEventListener("message",(function(t){var e=c[t.data.magic];e?(delete c[t.data.magic],e.resolve(t.data.message)):console.error("Got message from worker with no matching operation: ".concat(t.data.magic))}));var l=function(t){var e;do{e=btoa((1e10*Math.random()).toString())}while(c[e]);c[e]=new r.a;for(var n=arguments.length,l=new Array(n>1?n-1:0),d=1;d<n;d++)l[d-1]=arguments[d];return o.postMessage({message:{instruction:t,args:l},magic:e}),c[e].promise}},346:function(t,e,n){"use strict";n.d(e,"c",(function(){return c})),n.d(e,"b",(function(){return l})),n.d(e,"a",(function(){return d})),n.d(e,"d",(function(){return f})),n.d(e,"e",(function(){return h}));var r=n(32),o=n(322),c="#1f77b4",l="#ffc400",d="#2db41e",f="#141f85",h=function(t){for(var e=Math.max.apply(Math,Object(r.a)(t)),n=[],c=[],l=(e-Math.min.apply(Math,Object(r.a)(t)))/10,d=0,f=[.01,.02,.025,.05,.1,.2,.25,.5,1,2,3,5,10,15,20,30,60,90,120,180,240,300,600,900,1800,3600];d<f.length;d++){var h=f[d];if(l<=h){l=h;break}}for(var i=0;i<=e+10*l;i+=l)i=parseFloat(i.toPrecision(8)),n.push(Object(o.c)(i)),c.push(i);return{tickTexts:n,tickVals:c}}},352:function(t,e,n){"use strict";n.r(e);n(176);var r=n(32),o=n(27),c=n(28),l=n(61),d=n(111),f=n(46),h=n(29),m=(n(6),n(1),n(11),n(44),n(2),n(139),n(89),n(15),n(67),n(112),n(14),n(69),n(48),n(17),n(346)),T=n(322),v=n(321),_=n(324),y=n(323),O=n(337),S=n(335);function E(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(d.a)(this,n)}}var A=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(h.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},j=function(t){Object(l.a)(n,t);var e=E(n);function n(){var t;return Object(o.a)(this,n),(t=e.apply(this,arguments)).collapseVisible=!1,t.timesSeconds=[],t.layout={},t.gold={x:0,y:0},t.plotlyCurrentView=null,t.formatTime=T.b,t}return Object(c.a)(n,[{key:"splitIndex",get:function(){return this.split.Index}},{key:"useRealTime",get:function(){return y.a.state.useRealTime}},{key:"updateLayout",value:function(){var t,e=(null===(t=this.plotlyCurrentView)||void 0===t?void 0:t.y)||this.timesSeconds.filter((function(t){return"number"==typeof t})),n=Object(m.e)(e),o={title:"Time history",xaxis:{title:"Finished number (".concat(this.timesToPlot.length," total)")},yaxis:{rangemode:"nonnegative",range:[this.gold.y-1,Math.max.apply(Math,Object(r.a)(e))+1],tickmode:"array",ticktext:n.tickTexts,tickvals:n.tickVals},annotations:[{x:this.plotByDate?this.goldDate:this.gold.x,y:this.gold.y+(this.barPlot?.3:0),text:"Gold",textangle:this.barPlot?-90:0,font:{color:m.b},arrowhead:2,arrowsize:1,arrowwidth:2,arrowcolor:m.b,ax:0,ay:30*(this.barPlot?-1:1)}]};this.plotlyCurrentView&&(o.xaxis.range=this.plotlyCurrentView.x,o.yaxis.range=this.plotlyCurrentView.y),o.shapes=[];var c=Object(_.c)(this.currentAttempt);this.graphCurrentAttemptHline&&this.currentAttemptNumber&&c&&o.shapes.push({type:"line",x0:0,y0:Object(T.e)(c),x1:this.timesSeconds.length-1,y1:Object(T.e)(c),line:{shape:"spline",color:m.a,width:1,dash:"dot"}});var l=Object(_.c)(this.medianAttempt);this.graphMedianAttemptHline&&l&&o.shapes.push({type:"line",x0:0,y0:Object(T.e)(l),x1:this.timesSeconds.length-1,y1:Object(T.e)(l),line:{shape:"spline",color:m.d,width:1,dash:"dot"}}),this.layout=o}},{key:"bestTimeDisplay",get:function(){return this.cumulateSplits?Object(T.c)(this.gold.y):Object(T.b)(Object(_.c)(this.split.BestSegmentTime)||"")}},{key:"updateGold",value:function(t){var e=this;Object(O.a)(S.a.GOLD_COORDINATES_FROM_SECONDS_ARRAY,t).then((function(t){return e.gold=t}))}},{key:"currentAttempt",get:function(){var t=this;return this.timesToPlot.find((function(e){return e["@_id"]===t.currentAttemptNumber}))}},{key:"medianAttempt",get:function(){var t,e=Object(r.a)(this.timesSeconds).sort((function(a,b){return(a||0)-(b||0)})),n=Math.round(this.timesSeconds.length/2)-1;return null===(t=this.split.SegmentHistory)||void 0===t?void 0:t.Time.find((function(t){return Object(T.e)(Object(_.c)(t)||"0:0:0.0")===e[n]}))}},{key:"goldsMap",get:function(){var t=999999;return this.timesSeconds.map((function(e){return!!(e&&e<t)&&(t=e,!0)}))}},{key:"updateTimesSeconds",value:function(t){var e=this;Object(O.a)(S.a.SEG_TIME_ARRAY_TO_SECONDS,t).then((function(t){return e.timesSeconds=t}))}},{key:"updateTimesAfterUseRealTimeChange",value:function(){var t=this;this.$nextTick((function(){Object(O.a)(S.a.SEG_TIME_ARRAY_TO_SECONDS,t.timesToPlot).then((function(e){return t.timesSeconds=e}))}))}},{key:"collapseName",get:function(){return"collapse-subsplits-".concat(this.splitIndex)}},{key:"markerColors",get:function(){for(var t,e,n=[],i=0;i<this.timesToPlot.length;++i)this.timesToPlot[i]["@_id"]==(null===(t=this.currentAttempt)||void 0===t?void 0:t["@_id"])?n.push(m.a):this.timesToPlot[i]["@_id"]==(null===(e=this.medianAttempt)||void 0===e?void 0:e["@_id"])?n.push(m.d):n.push(this.goldsMap[i]?m.b:m.c);return n}},{key:"markerSizes",get:function(){for(var t,e,n=[],i=0;i<this.timesToPlot.length;++i)this.timesToPlot[i]["@_id"]==(null===(t=this.currentAttempt)||void 0===t?void 0:t["@_id"])||this.timesToPlot[i]["@_id"]==(null===(e=this.medianAttempt)||void 0===e?void 0:e["@_id"])?n.push(6):n.push(this.goldsMap[i]?5:3);return n}},{key:"timesToPlot",get:function(){var t,e,n;if(n=y.a.state.filters.length?((null===(t=this.split.SegmentHistory)||void 0===t?void 0:t.Time)||[]).filter((function(t){return t["@_id"]>0&&y.a.state.filteredAttempts.includes(t["@_id"])})):((null===(e=this.split.SegmentHistory)||void 0===e?void 0:e.Time)||[]).filter((function(t){return t["@_id"]>0})),!this.cumulateSplits)return n;var r=this.split.Subsplits.length?this.split.Subsplits[this.split.Subsplits.length-1].Index:this.split.Index;return this.cumulatedSplitTimes[r]||[]}},{key:"goldDate",get:function(){var t=this,e=this.parsedSplits.Run.AttemptHistory.Attempt.find((function(a){return t.timesToPlot[t.gold.x]["@_id"]===a["@_id"]}));if(e)return Object(T.a)(e["@_started"],!1)}},{key:"plot_data",get:function(){var t=this,e=[];this.plotByDate&&(e=this.timesToPlot.map((function(e){var n=t.parsedSplits.Run.AttemptHistory.Attempt.find((function(a){return a["@_id"]===e["@_id"]}));if(n)return Object(T.a)(n["@_started"],!1)})));var n=this.timesToPlot.map((function(e){var time=Object(_.c)(e);if(!time)return"";if(t.plotByDate){var n=t.parsedSplits.Run.AttemptHistory.Attempt.find((function(a){return a["@_id"]===e["@_id"]}));if(n)return"".concat(Object(T.b)(time)," (").concat(Object(T.a)(n["@_started"],!0),")")}return"".concat(Object(T.b)(time)," (attempt ").concat(e["@_id"],")")}));return[{x:this.plotByDate?e:Array.from({length:this.timesToPlot.length},(function(t,e){return e})),y:this.timesSeconds,text:n,type:this.barPlot?"bar":"scatter",hoverinfo:"text",mode:this.scatterType.join("+"),marker:{color:this.markerColors,size:this.markerSizes},line:{shape:this.plotByDate?"line":"spline",color:m.c,width:1}}]}},{key:"onPlotRelayout",value:function(t){t["xaxis.autorange"]&&t["yaxis.autorange"]?this.plotlyCurrentView=null:t["yaxis.range[0]"]&&t["yaxis.range[1]"]&&t["xaxis.range[0]"]&&t["xaxis.range[1]"]&&(this.plotlyCurrentView={x:[t["xaxis.range[0]"],t["xaxis.range[1]"]],y:[t["yaxis.range[0]"],t["yaxis.range[1]"]]})}}]),n}(v.Vue);A([Object(v.Prop)()],j.prototype,"split",void 0),A([Object(v.Prop)({default:!1})],j.prototype,"graphCurrentAttemptHline",void 0),A([Object(v.Prop)({default:!1})],j.prototype,"graphMedianAttemptHline",void 0),A([Object(v.Prop)({default:!1})],j.prototype,"cumulateSplits",void 0),A([Object(v.Prop)({default:!1})],j.prototype,"plotByDate",void 0),A([Object(v.Prop)({default:function(){return[]}})],j.prototype,"cumulatedSplitTimes",void 0),A([Object(v.Prop)({default:!1})],j.prototype,"barPlot",void 0),A([Object(v.Prop)()],j.prototype,"scatterType",void 0),A([Object(v.Prop)()],j.prototype,"currentAttemptNumber",void 0),A([Object(v.Prop)()],j.prototype,"parsedSplits",void 0),A([Object(v.Watch)("gold"),Object(v.Watch)("timesToPlot"),Object(v.Watch)("graphCurrentAttemptHline"),Object(v.Watch)("graphMedianAttemptHline"),Object(v.Watch)("barPlot"),Object(v.Watch)("plotByDate"),Object(v.Watch)("plotlyCurrentView")],j.prototype,"updateLayout",null),A([Object(v.Watch)("timesSeconds",{immediate:!0})],j.prototype,"updateGold",null),A([Object(v.Watch)("timesToPlot",{immediate:!0})],j.prototype,"updateTimesSeconds",null),A([Object(v.Watch)("useRealTime")],j.prototype,"updateTimesAfterUseRealTimeChange",null);var P=j=A([v.Component],j),R=n(66),component=Object(R.a)(P,undefined,undefined,!1,null,null,null);e.default=component.exports}}]);