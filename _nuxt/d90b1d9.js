(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{278:function(t,e,n){"use strict";var o=n(9).default.observable({hasGameTime:!1,useRealTime:!1,splitFile:null,splitFileIsModified:!1,PB:null});e.a={get state(){return o}}},279:function(t,e,n){"use strict";n.d(e,"d",(function(){return o})),n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return l}));n(11),n(162),n(15),n(127),n(289),n(290),n(291);var o=function(time){var t=time.match(/([0-9]+):([0-9]+):([0-9.]+)/);if(!t)return 0;var e=+t[1],n=+t[2];return+t[3]+60*n+3600*e},r=function(time){var t=time.match(/([0-9]+):([0-9]+):([0-9.]+)/);if(!t)return"";var e=+t[1],n=+t[2],o=+t[3],r="";return e&&(r+="".concat(e,"h")),n&&(r+="".concat(n,"m")),r+="".concat(o<10?"0":"").concat(o.toFixed(2),"s")},c=function(time){var t="",e=!0;return time>=3600&&(e=!1,t+="".concat(Math.floor(time/3600),"h"),time%=3600),time>=60&&(e=!1,t+="".concat(Math.floor(time/60),"m"),time%=60),t+="".concat(!e&&time<10?"0":"").concat(Math.abs(+time.toFixed(2)),"s")},l=function(time){var t="",e=Math.trunc(time/3600).toFixed();t+="".concat(e.padStart(2,"0"),":"),time%=3600;var n=Math.trunc(time/60).toFixed();t+="".concat(n.padStart(2,"0"),":"),time%=60;var o=Math.trunc(time),r=(time-o).toFixed(7).substring(2);return t+="".concat(o.toFixed().padStart(2,"0"),".").concat(r.padEnd(7,"0"))}},280:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var o=new(n(9).default)},281:function(t,e,n){"use strict";n.d(e,"c",(function(){return l})),n.d(e,"b",(function(){return d})),n.d(e,"a",(function(){return m})),n.d(e,"d",(function(){return f}));n(16),n(1),n(3),n(101),n(102);var o=n(278),r=n(279),c=n(284),l=function(t){return(null==t?void 0:t.GameTime)&&!o.a.state.useRealTime?t.GameTime:(null==t?void 0:t.RealTime)||null},d=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=0;return t.Segment.map((function(t){var o;return(o=!0===e?t.BestSegmentTime.GameTime:!1===e?t.BestSegmentTime.RealTime:l(t.BestSegmentTime))&&(n+=Object(r.d)(o)),n}))},m=function(t){return t.Segment.reduce((function(t,e){return e.SplitTimes.SplitTime.forEach((function(s){t.includes(s["@_name"])||t.push(s["@_name"])})),t}),[])},f=function(t){o.a.state.splitFileIsModified=t,t?Object(c.b)():Object(c.c)()}},283:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return c}));var o=n(280),r=function(t){o.a.$emit("startLoading",(function(){t(),o.a.$emit("stopLoading")}))},c=function(t){o.a.$emit("startLoading",(function(){t((function(){return o.a.$emit("stopLoading")}))}))}},284:function(t,e,n){"use strict";n.d(e,"b",(function(){return l})),n.d(e,"c",(function(){return d})),n.d(e,"a",(function(){return m}));var o=n(23),r=n(22),c=(n(1),function(t){t.preventDefault(),t.returnValue=""}),l=function(){window.addEventListener("beforeunload",c)},d=function(){window.removeEventListener("beforeunload",c)},m=Object(o.a)((function t(){var e=this;Object(r.a)(this,t),this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(t,n){e.reject=n,e.resolve=t}))}))},295:function(t,e,n){"use strict";var o;n.d(e,"a",(function(){return o})),function(t){t[t.PING=0]="PING",t[t.DELETE_ATTEMPT_BEFORE_NUMBER=1]="DELETE_ATTEMPT_BEFORE_NUMBER",t[t.SEG_TIME_ARRAY_TO_SECONDS=2]="SEG_TIME_ARRAY_TO_SECONDS",t[t.GOLD_COORDINATES_FROM_SECONDS_ARRAY=3]="GOLD_COORDINATES_FROM_SECONDS_ARRAY",t[t.XML_PARSE_TEXT=4]="XML_PARSE_TEXT",t[t.MERGE_SPLIT_INTO_NEXT_ONE=5]="MERGE_SPLIT_INTO_NEXT_ONE",t[t.UPDATE_STORE_DATA=6]="UPDATE_STORE_DATA",t[t.GET_PB=7]="GET_PB",t[t.GENERATE_SPLIT_DETAIL=8]="GENERATE_SPLIT_DETAIL"}(o||(o={}))},296:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));n(1),n(37);var o=n(284),r=new function(){return new Worker(n.p+"5a69b3d.worker.js")},c={};r.addEventListener("message",(function(t){var e=c[t.data.magic];e?(delete c[t.data.magic],e.resolve(t.data.message)):console.error("Got message from worker with no matching operation: ".concat(t.data.magic))}));var l=function(t){var e;do{e=btoa((1e10*Math.random()).toString())}while(c[e]);c[e]=new o.a;for(var n=arguments.length,l=new Array(n>1?n-1:0),d=1;d<n;d++)l[d-1]=arguments[d];return r.postMessage({message:{instruction:t,args:l},magic:e}),c[e].promise}},297:function(t,e,n){"use strict";n.d(e,"c",(function(){return o})),n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return c}));var o="#1f77b4",r="#ffc400",c="#2db41e"},303:function(t,e,n){var content=n(315);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(80).default)("a89c6e40",content,!0,{sourceMap:!1})},304:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var o={currentSplit:null}},311:function(t,e,n){"use strict";n.r(e);n(161);var o=n(22),r=n(23),c=n(60),l=n(100),d=n(44),m=n(40),f=(n(6),n(1),n(11),n(26),n(128),n(16),n(2),n(15),n(66),n(49),n(165),n(281)),h=n(277),v=n(279),_=n(297),S=n(280),T=n(304),O=n(283),y=n(278),E=n(296),x=n(295),R=n(300);function A(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=Object(d.a)(t);if(e){var r=Object(d.a)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(l.a)(this,n)}}var j=function(t,e,n,desc){var o,r=arguments.length,c=r<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(m.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(c=(r<3?o(c):r>3?o(e,n,c):o(e,n))||c);return r>3&&c&&Object.defineProperty(e,n,c),c},N=function(t){Object(c.a)(n,t);var e=A(n);function n(){var t;return Object(o.a)(this,n),(t=e.apply(this,arguments)).segments=y.a.state.splitFile.Run.Segments.Segment,t.collapseVisible=!1,t.timesSeconds=[],t.layout={},t.gold={x:0,y:0},t.formatTime=v.a,t}return Object(r.a)(n,[{key:"useRealTime",get:function(){return y.a.state.useRealTime}},{key:"updateLayout",value:function(){var t={title:"Time history",xaxis:{title:"Finished number (".concat(this.timesWithPositiveIds.length," total)")},yaxis:{title:"Time (seconds)",rangemode:this.graphYAxisToZero?"tozero":"nonnegative"},annotations:[{x:this.gold.x,y:this.gold.y,text:"Gold",font:{color:_.b},arrowhead:2,arrowsize:1,arrowwidth:2,arrowcolor:_.b,ax:0,ay:30}],shapes:[]},e=Object(f.c)(this.currentAttempt);this.graphCurrentAttemptHline&&this.currentAttemptNumber&&e&&(t.shapes=[{type:"line",x0:0,y0:Object(v.d)(e),x1:this.timesSeconds.length-1,y1:Object(v.d)(e),line:{color:_.a,width:1,dash:"dot"}}]),this.layout=t}},{key:"bestTimeDisplay",get:function(){return this.formatTime(Object(f.c)(this.split.BestSegmentTime)||"")}},{key:"updateGold",value:function(t){var e=this;Object(E.a)(x.a.GOLD_COORDINATES_FROM_SECONDS_ARRAY,t).then((function(t){return e.gold=t}))}},{key:"currentAttempt",get:function(){var t=this;return this.timesWithPositiveIds.find((function(e){return e["@_id"]===t.currentAttemptNumber}))}},{key:"goldsMap",get:function(){var t=999999;return this.timesSeconds.map((function(e){return!!(e&&e<t)&&(t=e,!0)}))}},{key:"updateTimesSeconds",value:function(t){var e=this;Object(E.a)(x.a.SEG_TIME_ARRAY_TO_SECONDS,t).then((function(t){return e.timesSeconds=t}))}},{key:"updateTimesAfterUseRealTimeChange",value:function(){var t=this;this.$nextTick((function(){Object(E.a)(x.a.SEG_TIME_ARRAY_TO_SECONDS,t.timesWithPositiveIds).then((function(e){return t.timesSeconds=e}))}))}},{key:"collapseName",get:function(){return"collapse-split-".concat(this.splitIndex)}},{key:"markerColors",get:function(){for(var t,e=[],i=0;i<this.timesWithPositiveIds.length;++i)this.timesWithPositiveIds[i]["@_id"]==(null===(t=this.currentAttempt)||void 0===t?void 0:t["@_id"])?e.push(_.a):e.push(this.goldsMap[i]?_.b:_.c);return e}},{key:"markerSizes",get:function(){for(var t,e=[],i=0;i<this.timesWithPositiveIds.length;++i)this.timesWithPositiveIds[i]["@_id"]==(null===(t=this.currentAttempt)||void 0===t?void 0:t["@_id"])?e.push(6):e.push(this.goldsMap[i]?5:3);return e}},{key:"timesWithPositiveIds",get:function(){var t;return((null===(t=this.split.SegmentHistory)||void 0===t?void 0:t.Time)||[]).filter((function(t){return t["@_id"]>0}))}},{key:"plot_data",get:function(){var t=this.timesWithPositiveIds.map((function(t){var time=Object(f.c)(t);return time?"".concat(Object(v.a)(time)," (attempt ").concat(t["@_id"],")"):""}));return[{x:Array.from({length:this.timesWithPositiveIds.length},(function(t,e){return e})),y:this.timesSeconds,text:t,type:"scatter",hoverinfo:"text",mode:"lines+markers",marker:{color:this.markerColors,size:this.markerSizes},line:{color:_.c,width:1}}]}},{key:"mergeSplitTooltip",get:function(){return this.nextSplit?'"'.concat(this.split.Name,'" will be deleted, and its times merged with "').concat(this.nextSplit.Name,'"'):""}},{key:"fixGoldsModal",value:function(){S.a.$emit("openModal","ManualGoldUpdateModal"),T.a.currentSplit=this.split,S.a.$emit("setCurrentSplit",this.split)}},{key:"nextSplit",get:function(){return y.a.state.splitFile.Run.Segments.Segment[this.splitIndex+1]}},{key:"doMergeNextSplit",value:function(t){var e=this;if(!this.nextSplit)return this.$bvToast.toast("Next split doesn't exist",{title:"Splits merged",autoHideDelay:5e3,appendToast:!1,variant:"danger"}),void t();var n=this.split.Name,o=this.nextSplit.Name;Object(E.a)(x.a.MERGE_SPLIT_INTO_NEXT_ONE,y.a.state.splitFile.Run.Segments.Segment,this.splitIndex).then((function(r){var c;Object(f.d)(!0);var l=y.a.state.splitFile.Run.AutoSplitterSettings;(null===(c=null==l?void 0:l.Splits)||void 0===c?void 0:c.Split)&&l.Splits.Split.splice(e.splitIndex,1),y.a.state.splitFile.Run.Segments.Segment=r,e.$bvToast.toast("Merged ".concat(n," with ").concat(o),{title:"Splits merged",autoHideDelay:5e3,appendToast:!1,variant:"success"}),t()}))}},{key:"mergeNextSplit",value:function(){var t=this;this.nextSplit&&S.a.$emit("openConfirm",'Merge "'.concat(this.split.Name,'" into "').concat(this.nextSplit.Name,'"?'),(function(){Object(O.b)((function(e){return t.doMergeNextSplit(e)}))}))}}]),n}(h.Vue);j([Object(h.Prop)()],N.prototype,"split",void 0),j([Object(h.Prop)({default:!1})],N.prototype,"graphYAxisToZero",void 0),j([Object(h.Prop)({default:!1})],N.prototype,"graphCurrentAttemptHline",void 0),j([Object(h.Prop)()],N.prototype,"currentAttemptNumber",void 0),j([Object(h.Prop)()],N.prototype,"splitIndex",void 0),j([Object(h.Watch)("gold"),Object(h.Watch)("timesWithPositiveIds"),Object(h.Watch)("graphYAxisToZero"),Object(h.Watch)("graphCurrentAttemptHline")],N.prototype,"updateLayout",null),j([Object(h.Watch)("timesSeconds",{immediate:!0})],N.prototype,"updateGold",null),j([Object(h.Watch)("timesWithPositiveIds",{immediate:!0})],N.prototype,"updateTimesSeconds",null),j([Object(h.Watch)("useRealTime")],N.prototype,"updateTimesAfterUseRealTimeChange",null);var I=N=j([Object(h.Component)({components:{Plotly:R.Plotly}})],N),M=(n(314),n(65)),component=Object(M.a)(I,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-card",{staticClass:"SingleSplitCard text-left",attrs:{id:"SingleSplitCard_"+t.splitIndex}},[n("div",{staticClass:"limit-height"},[t.split.Icon?n("div",{staticClass:"split-icon-container mr-4 ml-2"},[n("b-card-img",{staticClass:"split-icon",attrs:{src:t.split.Icon,block:""}})],1):t._e(),t._v(" "),n("div",{staticClass:"mt-auto mb-auto"},[n("h3",[t._v("\n          "+t._s(t.split.Name)+" "),t.split.IsSubsplit?n("small",[t._v("(subsplit)")]):t._e()]),t._v(" "),t.split.BestSegmentTime?n("p",{staticClass:"m-0"},[n("span",{staticClass:"mr-2"},[n("strong",[t._v("Best time:")]),t._v(" "+t._s(t.bestTimeDisplay))]),t._v(" "),n("b-button",{staticClass:"mr-2",attrs:{size:"sm",variant:"warning"},on:{click:t.fixGoldsModal}},[t._v("Fix fake golds")]),t._v(" "),t.nextSplit?n("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{size:"sm",variant:"info",title:t.mergeSplitTooltip},on:{click:t.mergeNextSplit}},[t._v("\n            Merge into next split\n          ")]):t._e()],1):t._e(),t._v(" "),n("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:t.collapseName,expression:"collapseName"}],staticClass:"toggle-collapse",attrs:{variant:"outline-dark",pill:""}},[n("font-awesome-icon",{attrs:{icon:"chevron-left",rotation:t.collapseVisible?270:null}})],1)],1)])]),t._v(" "),n("b-collapse",{staticClass:"mt-1",attrs:{id:t.collapseName},model:{value:t.collapseVisible,callback:function(e){t.collapseVisible=e},expression:"collapseVisible"}},[n("b-card",{staticClass:"text-left"},[n("Plotly",{attrs:{data:t.plot_data,layout:t.layout,"display-mode-bar":!0}})],1)],1)],1)}),[],!1,null,"d2a3dbd6",null);e.default=component.exports},314:function(t,e,n){"use strict";n(303)},315:function(t,e,n){var o=n(79)(!1);o.push([t.i,"*[data-v-d2a3dbd6]{color:#000}img[data-v-d2a3dbd6]{filter:drop-shadow(0 0 .5rem rgb(0,0,0))}.limit-height[data-v-d2a3dbd6]{display:flex}.split-icon-container[data-v-d2a3dbd6]{min-width:6.5rem;text-align:center;display:flex;justify-content:center;align-items:center}.split-icon-container .split-icon[data-v-d2a3dbd6]{-o-object-fit:contain;object-fit:contain;max-width:100%;max-height:5rem;width:auto;height:auto}.toggle-collapse[data-v-d2a3dbd6]{position:absolute;top:1rem;right:1rem}small[data-v-d2a3dbd6]{color:#6b6b6b;font-size:1rem}",""]),t.exports=o}}]);