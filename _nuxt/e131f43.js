(window.webpackJsonp=window.webpackJsonp||[]).push([[34,32],{280:function(t,e,n){"use strict";var r=n(9).default.observable({hasGameTime:!1,useRealTime:!1,splitFileIsModified:!1,PB:null,autoSplitterSettings:null});e.a={get state(){return r}}},281:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r=new(n(9).default)},282:function(t,e,n){"use strict";n.d(e,"d",(function(){return r})),n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return l}));n(11),n(163),n(15),n(127),n(290),n(291),n(292);var r=function(time){var t=time.match(/([0-9]+):([0-9]+):([0-9.]+)/);if(!t)return 0;var e=+t[1],n=+t[2];return+t[3]+60*n+3600*e},o=function(time){var t=time.match(/([0-9]+):([0-9]+):([0-9.]+)/);if(!t)return"";var e=+t[1],n=+t[2],r=+t[3],o="";return e&&(o+="".concat(e,"h")),n&&(o+="".concat(n,"m")),o+="".concat(r<10?"0":"").concat(r.toFixed(2),"s")},c=function(time){var t="",e=!0;return time>=3600&&(e=!1,t+="".concat(Math.floor(time/3600),"h"),time%=3600),time>=60&&(e=!1,t+="".concat(Math.floor(time/60),"m"),time%=60),t+="".concat(!e&&time<10?"0":"").concat(Math.abs(+time.toFixed(2)),"s")},l=function(time){var t="",e=Math.trunc(time/3600).toFixed();t+="".concat(e.padStart(2,"0"),":"),time%=3600;var n=Math.trunc(time/60).toFixed();t+="".concat(n.padStart(2,"0"),":"),time%=60;var r=Math.trunc(time),o=(time-r).toFixed(7).substring(2);return t+="".concat(r.toFixed().padStart(2,"0"),".").concat(o.padEnd(7,"0"))}},283:function(t,e,n){"use strict";n.d(e,"c",(function(){return l})),n.d(e,"b",(function(){return d})),n.d(e,"a",(function(){return f})),n.d(e,"d",(function(){return m}));n(16),n(1),n(3),n(101),n(102);var r=n(280),o=n(282),c=n(285),l=function(t){return(null==t?void 0:t.GameTime)&&!r.a.state.useRealTime?t.GameTime:(null==t?void 0:t.RealTime)||null},d=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=0;return t.map((function(t){var r;return(r=!0===e?t.BestSegmentTime.GameTime:!1===e?t.BestSegmentTime.RealTime:l(t.BestSegmentTime))&&(n+=Object(o.d)(r)),n}))},f=function(t){return t.reduce((function(t,e){return e.SplitTimes.SplitTime.forEach((function(s){t.includes(s["@_name"])||t.push(s["@_name"])})),t}),[])},m=function(t){r.a.state.splitFileIsModified=t,t?Object(c.b)():Object(c.c)()}},284:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return c}));var r=n(281),o=function(t){r.a.$emit("startLoading",(function(){t(),r.a.$emit("stopLoading")}))},c=function(t){r.a.$emit("startLoading",(function(){t((function(){return r.a.$emit("stopLoading")}))}))}},285:function(t,e,n){"use strict";n.d(e,"b",(function(){return l})),n.d(e,"c",(function(){return d})),n.d(e,"a",(function(){return f}));var r=n(23),o=n(22),c=(n(1),function(t){t.preventDefault(),t.returnValue=""}),l=function(){window.addEventListener("beforeunload",c)},d=function(){window.removeEventListener("beforeunload",c)},f=Object(r.a)((function t(){var e=this;Object(o.a)(this,t),this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(t,n){e.reject=n,e.resolve=t}))}))},295:function(t,e,n){"use strict";var r;n.d(e,"a",(function(){return r})),function(t){t[t.PING=0]="PING",t[t.DELETE_ATTEMPT_BEFORE_NUMBER=1]="DELETE_ATTEMPT_BEFORE_NUMBER",t[t.SEG_TIME_ARRAY_TO_SECONDS=2]="SEG_TIME_ARRAY_TO_SECONDS",t[t.GOLD_COORDINATES_FROM_SECONDS_ARRAY=3]="GOLD_COORDINATES_FROM_SECONDS_ARRAY",t[t.XML_PARSE_TEXT=4]="XML_PARSE_TEXT",t[t.MERGE_SPLIT_INTO_NEXT_ONE=5]="MERGE_SPLIT_INTO_NEXT_ONE",t[t.UPDATE_STORE_DATA=6]="UPDATE_STORE_DATA",t[t.GET_PB=7]="GET_PB",t[t.GENERATE_SPLIT_DETAIL=8]="GENERATE_SPLIT_DETAIL",t[t.MOVE_TIME_TO_OTHER_SPLIT=9]="MOVE_TIME_TO_OTHER_SPLIT"}(r||(r={}))},296:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));n(1),n(37);var r=n(285),o=new function(){return new Worker(n.p+"71ba0db.worker.js")},c={};o.addEventListener("message",(function(t){var e=c[t.data.magic];e?(delete c[t.data.magic],e.resolve(t.data.message)):console.error("Got message from worker with no matching operation: ".concat(t.data.magic))}));var l=function(t){var e;do{e=btoa((1e10*Math.random()).toString())}while(c[e]);c[e]=new r.a;for(var n=arguments.length,l=new Array(n>1?n-1:0),d=1;d<n;d++)l[d-1]=arguments[d];return o.postMessage({message:{instruction:t,args:l},magic:e}),c[e].promise}},303:function(t,e,n){"use strict";n.r(e);n(162);var r=n(29),o=n(22),c=n(23),l=n(60),d=n(100),f=n(44),m=n(40),h=(n(6),n(1),n(11),n(26),n(128),n(81),n(16),n(2),n(15),n(67),n(49),n(279)),v=n(283),_=n(282),O=n(304),y=n(280),T=n(296),S=n(295);function x(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(d.a)(this,n)}}var j=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(m.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},E=function(t){Object(l.a)(n,t);var e=x(n);function n(){var t;return Object(o.a)(this,n),(t=e.apply(this,arguments)).collapseVisible=!1,t.timesSeconds=[],t.layout={},t.gold={x:0,y:0},t.formatTime=_.a,t}return Object(c.a)(n,[{key:"useRealTime",get:function(){return y.a.state.useRealTime}},{key:"updateLayout",value:function(){var t={title:"Time history",xaxis:{title:"Finished number (".concat(this.timesWithPositiveIds.length," total)")},yaxis:{title:"Time (seconds)",rangemode:this.graphYAxisToZero?"tozero":"nonnegative"},annotations:[{x:this.gold.x,y:this.gold.y,text:"Gold",font:{color:O.b},arrowhead:2,arrowsize:1,arrowwidth:2,arrowcolor:O.b,ax:0,ay:30}],shapes:[]},e=Object(v.c)(this.currentAttempt);this.graphCurrentAttemptHline&&this.currentAttemptNumber&&e&&t.shapes.push({type:"line",x0:0,y0:Object(_.d)(e),x1:this.timesSeconds.length-1,y1:Object(_.d)(e),line:{color:O.a,width:1,dash:"dot"}});var n=Object(v.c)(this.medianAttempt);this.graphMedianAttemptHline&&n&&t.shapes.push({type:"line",x0:0,y0:Object(_.d)(n),x1:this.timesSeconds.length-1,y1:Object(_.d)(n),line:{color:O.d,width:1,dash:"dot"}}),this.layout=t}},{key:"bestTimeDisplay",get:function(){return Object(_.a)(Object(v.c)(this.split.BestSegmentTime)||"")}},{key:"updateGold",value:function(t){var e=this;Object(T.a)(S.a.GOLD_COORDINATES_FROM_SECONDS_ARRAY,t).then((function(t){return e.gold=t}))}},{key:"currentAttempt",get:function(){var t=this;return this.timesWithPositiveIds.find((function(e){return e["@_id"]===t.currentAttemptNumber}))}},{key:"medianAttempt",get:function(){var t,e=Object(r.a)(this.timesSeconds).sort((function(a,b){return(a||0)-(b||0)})),n=Math.round(this.timesSeconds.length/2)-1;return null===(t=this.split.SegmentHistory)||void 0===t?void 0:t.Time.find((function(t){return Object(_.d)(Object(v.c)(t)||"0:0:0.0")===e[n]}))}},{key:"goldsMap",get:function(){var t=999999;return this.timesSeconds.map((function(e){return!!(e&&e<t)&&(t=e,!0)}))}},{key:"updateTimesSeconds",value:function(t){var e=this;Object(T.a)(S.a.SEG_TIME_ARRAY_TO_SECONDS,t).then((function(t){return e.timesSeconds=t}))}},{key:"updateTimesAfterUseRealTimeChange",value:function(){var t=this;this.$nextTick((function(){Object(T.a)(S.a.SEG_TIME_ARRAY_TO_SECONDS,t.timesWithPositiveIds).then((function(e){return t.timesSeconds=e}))}))}},{key:"collapseName",get:function(){return"collapse-subsplits-".concat(this.splitIndex)}},{key:"markerColors",get:function(){for(var t,e,n=[],i=0;i<this.timesWithPositiveIds.length;++i)this.timesWithPositiveIds[i]["@_id"]==(null===(t=this.currentAttempt)||void 0===t?void 0:t["@_id"])?n.push(O.a):this.timesWithPositiveIds[i]["@_id"]==(null===(e=this.medianAttempt)||void 0===e?void 0:e["@_id"])?n.push(O.d):n.push(this.goldsMap[i]?O.b:O.c);return n}},{key:"markerSizes",get:function(){for(var t,e,n=[],i=0;i<this.timesWithPositiveIds.length;++i)this.timesWithPositiveIds[i]["@_id"]==(null===(t=this.currentAttempt)||void 0===t?void 0:t["@_id"])||this.timesWithPositiveIds[i]["@_id"]==(null===(e=this.medianAttempt)||void 0===e?void 0:e["@_id"])?n.push(6):n.push(this.goldsMap[i]?5:3);return n}},{key:"timesWithPositiveIds",get:function(){var t;return((null===(t=this.split.SegmentHistory)||void 0===t?void 0:t.Time)||[]).filter((function(t){return t["@_id"]>0}))}},{key:"plot_data",get:function(){var t=this.timesWithPositiveIds.map((function(t){var time=Object(v.c)(t);return time?"".concat(Object(_.a)(time)," (attempt ").concat(t["@_id"],")"):""}));return[{x:Array.from({length:this.timesWithPositiveIds.length},(function(t,e){return e})),y:this.timesSeconds,text:t,type:"scatter",hoverinfo:"text",mode:"lines+markers",marker:{color:this.markerColors,size:this.markerSizes},line:{color:O.c,width:1}}]}}]),n}(h.Vue);j([Object(h.Prop)()],E.prototype,"split",void 0),j([Object(h.Prop)({default:!1})],E.prototype,"graphYAxisToZero",void 0),j([Object(h.Prop)({default:!1})],E.prototype,"graphCurrentAttemptHline",void 0),j([Object(h.Prop)({default:!1})],E.prototype,"graphMedianAttemptHline",void 0),j([Object(h.Prop)()],E.prototype,"currentAttemptNumber",void 0),j([Object(h.Prop)()],E.prototype,"splitIndex",void 0),j([Object(h.Watch)("gold"),Object(h.Watch)("timesWithPositiveIds"),Object(h.Watch)("graphYAxisToZero"),Object(h.Watch)("graphCurrentAttemptHline"),Object(h.Watch)("graphMedianAttemptHline")],E.prototype,"updateLayout",null),j([Object(h.Watch)("timesSeconds",{immediate:!0})],E.prototype,"updateGold",null),j([Object(h.Watch)("timesWithPositiveIds",{immediate:!0})],E.prototype,"updateTimesSeconds",null),j([Object(h.Watch)("useRealTime")],E.prototype,"updateTimesAfterUseRealTimeChange",null);var A=E=j([h.Component],E),R=n(65),component=Object(R.a)(A,undefined,undefined,!1,null,null,null);e.default=component.exports},304:function(t,e,n){"use strict";n.d(e,"c",(function(){return r})),n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return c})),n.d(e,"d",(function(){return l}));var r="#1f77b4",o="#ffc400",c="#2db41e",l="#141f85"},308:function(t,e,n){var content=n(320);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(80).default)("752149b8",content,!0,{sourceMap:!1})},310:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r={currentSplit:null}},314:function(t,e,n){var content=n(333);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(80).default)("651ed5aa",content,!0,{sourceMap:!1})},316:function(t,e,n){"use strict";n.r(e);n(162);var r=n(22),o=n(23),c=n(60),l=n(100),d=n(44),f=n(40),m=(n(6),n(1),n(11),n(26),n(166),n(15),n(283)),h=n(279),v=n(281),_=n(310),O=n(284),y=n(280),T=n(296),S=n(295),x=n(303),j=n(302);function E(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(d.a)(t);if(e){var o=Object(d.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var A=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},R=function(t){Object(c.a)(n,t);var e=E(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"fixGoldsModal",value:function(){v.a.$emit("openModal","ManualGoldUpdateModal"),_.a.currentSplit=this.split,v.a.$emit("setCurrentSplit",this.split)}},{key:"moveTimeModal",value:function(){v.a.$emit("openModal","MoveTimeModal",{splits:this.segmentsHolder.Segment,currentSplitIndex:this.splitIndex})}},{key:"nextSplit",get:function(){return this.segmentsHolder.Segment[this.splitIndex+1]}},{key:"doMergeNextSplit",value:function(t){var e=this;if(!this.nextSplit)return this.$bvToast.toast("Next split doesn't exist",{title:"Splits merged",autoHideDelay:5e3,appendToast:!1,variant:"danger"}),void t();var n=this.split.Name,r=this.nextSplit.Name;Object(T.a)(S.a.MERGE_SPLIT_INTO_NEXT_ONE,this.segmentsHolder.Segment,this.splitIndex).then((function(t){var o;Object(m.d)(!0);var c=y.a.state.autoSplitterSettings;(null===(o=null==c?void 0:c.Splits)||void 0===o?void 0:o.Split)&&c.Splits.Split.splice(e.splitIndex,1),e.segmentsHolder.Segment=t,e.$bvToast.toast("Merged ".concat(n," with ").concat(r),{title:"Splits merged",autoHideDelay:5e3,appendToast:!1,variant:"success"})})).finally((function(){return t()}))}},{key:"mergeNextSplit",value:function(){var t=this;this.nextSplit&&v.a.$emit("openConfirm",'Merge "'.concat(this.split.Name,'" into "').concat(this.nextSplit.Name,'"?'),(function(){Object(O.b)((function(e){return t.doMergeNextSplit(e)}))}))}}]),n}(Object(h.mixins)(x.default));A([Object(h.Prop)()],R.prototype,"segmentsHolder",void 0);var M=R=A([Object(h.Component)({components:{Plotly:j.Plotly}})],R),I=(n(319),n(65)),component=Object(I.a)(M,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-card",{staticClass:"SingleSplitCard text-left",attrs:{id:"SingleSplitCard_"+t.splitIndex}},[n("div",{staticClass:"limit-height"},[t.split.Icon?n("div",{staticClass:"split-icon-container mr-4 ml-2"},[n("b-card-img",{staticClass:"split-icon",attrs:{src:t.split.Icon,block:""}})],1):t._e(),t._v(" "),n("div",{staticClass:"mt-auto mb-auto"},[n("h3",[t._v("\n          "+t._s(t.split.Name)+" "),t.split.IsSubsplit?n("small",[t._v("(subsplit)")]):t._e()]),t._v(" "),t.split.BestSegmentTime?n("p",{staticClass:"m-0"},[n("span",{staticClass:"mr-2"},[n("strong",[t._v("Best time:")]),t._v(" "+t._s(t.bestTimeDisplay))]),t._v(" "),n("b-dropdown",{attrs:{text:"Edit split",variant:"outline-dark",lazy:""}},[n("b-dropdown-item-button",{attrs:{variant:"dark"},on:{click:t.fixGoldsModal}},[t._v("Fix fake golds")]),t._v(" "),n("b-dropdown-item-button",{attrs:{variant:"dark"},on:{click:t.moveTimeModal}},[t._v("Move time between splits\n            ")]),t._v(" "),t.nextSplit?n("b-dropdown-item-button",{attrs:{variant:"dark"},on:{click:t.mergeNextSplit}},[t._v("Merge into next split\n            ")]):t._e()],1)],1):t._e(),t._v(" "),n("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:t.collapseName,expression:"collapseName"}],staticClass:"toggle-collapse",attrs:{variant:"outline-dark",pill:""}},[n("font-awesome-icon",{attrs:{icon:"chevron-left",rotation:t.collapseVisible?270:null}})],1)],1)])]),t._v(" "),n("b-collapse",{staticClass:"mt-1",attrs:{id:t.collapseName},model:{value:t.collapseVisible,callback:function(e){t.collapseVisible=e},expression:"collapseVisible"}},[n("b-card",{staticClass:"text-left"},[n("Plotly",{attrs:{data:t.plot_data,layout:t.layout,"display-mode-bar":!0}})],1)],1)],1)}),[],!1,null,"0ce38bc0",null);e.default=component.exports},319:function(t,e,n){"use strict";n(308)},320:function(t,e,n){var r=n(79)(!1);r.push([t.i,"*[data-v-0ce38bc0]{color:#000}img[data-v-0ce38bc0]{filter:drop-shadow(0 0 .5rem rgb(0,0,0))}.limit-height[data-v-0ce38bc0]{display:flex}.split-icon-container[data-v-0ce38bc0]{min-width:6.5rem;text-align:center;display:flex;justify-content:center;align-items:center}.split-icon-container .split-icon[data-v-0ce38bc0]{-o-object-fit:contain;object-fit:contain;max-width:100%;max-height:5rem;width:auto;height:auto}.toggle-collapse[data-v-0ce38bc0]{position:absolute;top:1rem;right:1rem}small[data-v-0ce38bc0]{color:#6b6b6b;font-size:1rem}",""]),t.exports=r},327:function(t,e,n){"use strict";n.r(e);var r=n(23),o=n(22),c=n(60),l=n(100),d=n(44),f=n(40),m=(n(6),n(1),n(162),n(279)),h=n(303),v=n(302);function _(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(d.a)(t);if(e){var o=Object(d.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var O=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},y=function(t){Object(c.a)(n,t);var e=_(n);function n(){var t;return Object(o.a)(this,n),(t=e.apply(this,arguments)).subsplitsVisible=!0,t}return Object(r.a)(n)}(Object(m.mixins)(h.default));O([Object(m.Prop)()],y.prototype,"segmentsHolder",void 0);var T=y=O([Object(m.Component)({components:{Plotly:v.Plotly}})],y),S=(n(332),n(65)),component=Object(S.a)(T,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.split.Index<0?n("div",[n("b-card",{staticClass:"SingleSplitCard text-left",attrs:{id:"SingleSplitCard_"+t.splitIndex}},[n("div",{staticClass:"limit-height"},[t.split.Icon?n("div",{staticClass:"split-icon-container mr-4 ml-2"},[n("b-card-img",{staticClass:"split-icon",attrs:{src:t.split.Icon,block:""}})],1):t._e(),t._v(" "),n("div",{staticClass:"mt-auto mb-auto"},[n("h3",[t._v(t._s(t.split.Name))]),t._v(" "),t.split.BestSegmentTime?n("p",{staticClass:"m-0"},[n("span",{staticClass:"mr-2"},[n("strong",[t._v("Best time:")]),t._v(" "+t._s(t.bestTimeDisplay))])]):t._e(),t._v(" "),n("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:t.collapseName,expression:"collapseName"}],staticClass:"toggle-collapse",attrs:{variant:"outline-dark",pill:""}},[n("font-awesome-icon",{attrs:{icon:"chevron-left",rotation:t.collapseVisible?270:null}})],1)],1)])]),t._v(" "),n("b-collapse",{staticClass:"mt-1",attrs:{id:t.collapseName},model:{value:t.collapseVisible,callback:function(e){t.collapseVisible=e},expression:"collapseVisible"}},[n("b-card",{staticClass:"text-left"},[n("Plotly",{attrs:{data:t.plot_data,layout:t.layout,"display-mode-bar":!0}})],1)],1),t._v(" "),n("div",{staticClass:"pl-4 mt-3 subsplit-container"},[n("div",{staticClass:"ml-2 mr-4 subsplit-collapser-hitbox",on:{click:function(e){t.subsplitsVisible=!t.subsplitsVisible}}},[n("div",{staticClass:"subsplit-collapser"})]),t._v(" "),n("b-collapse",{staticClass:"w-100",attrs:{visible:t.subsplitsVisible}},t._l(t.split.Subsplits,(function(e,i){return n("split-display",{key:"split-"+e.Index+"-"+e.Name,class:i===t.split.Subsplits.length-1?"":"mb-3",attrs:{split:e,splitIndex:e.Index,graphYAxisToZero:t.graphYAxisToZero,graphCurrentAttemptHline:t.graphCurrentAttemptHline,graphMedianAttemptHline:t.graphMedianAttemptHline,currentAttemptNumber:t.currentAttemptNumber,"segments-holder":t.segmentsHolder}})})),1)],1)],1):n("div",[n("split-display",{staticClass:"mb-3",attrs:{split:t.split,splitIndex:t.split.Index,graphYAxisToZero:t.graphYAxisToZero,graphCurrentAttemptHline:t.graphCurrentAttemptHline,graphMedianAttemptHline:t.graphMedianAttemptHline,currentAttemptNumber:t.currentAttemptNumber,"segments-holder":t.segmentsHolder}})],1)])}),[],!1,null,"c5c50a3e",null);e.default=component.exports;installComponents(component,{SplitDisplay:n(316).default})},332:function(t,e,n){"use strict";n(314)},333:function(t,e,n){var r=n(79)(!1);r.push([t.i,"*[data-v-c5c50a3e]{color:#000}img[data-v-c5c50a3e]{filter:drop-shadow(0 0 .5rem rgb(0,0,0))}.limit-height[data-v-c5c50a3e]{display:flex}.split-icon-container[data-v-c5c50a3e]{min-width:6.5rem;text-align:center;display:flex;justify-content:center;align-items:center}.split-icon-container .split-icon[data-v-c5c50a3e]{-o-object-fit:contain;object-fit:contain;max-width:100%;max-height:5rem;width:auto;height:auto}.toggle-collapse[data-v-c5c50a3e]{position:absolute;top:1rem;right:1rem}.subsplit-container[data-v-c5c50a3e]{display:flex}.subsplit-container .subsplit-collapser-hitbox[data-v-c5c50a3e]{width:1rem;cursor:pointer;min-height:2rem}.subsplit-container .subsplit-collapser[data-v-c5c50a3e]{width:.3rem;background-color:#fff;transition:all .1s;height:100%;margin:auto;border-radius:.15rem}.subsplit-container .subsplit-collapser[data-v-c5c50a3e]:hover{filter:drop-shadow(0 0 .2rem white)}",""]),t.exports=r}}]);