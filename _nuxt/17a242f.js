(window.webpackJsonp=window.webpackJsonp||[]).push([[22,25,31,42,47,52],{324:function(t,e,n){"use strict";n.d(e,"e",(function(){return r})),n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return c})),n.d(e,"d",(function(){return l})),n.d(e,"a",(function(){return f}));n(11),n(179),n(14),n(140),n(332),n(333),n(334);var r=function(time){var t=time.match(/([0-9]+):([0-9]+):([0-9.]+)/);if(!t)return 0;var e=+t[1],n=+t[2];return+t[3]+60*n+3600*e},o=function(time){var t=time.match(/([0-9]+):([0-9]+):([0-9.]+)/);if(!t)return"";var e=+t[1],n=+t[2],r=+t[3],o="";return e&&(o+="".concat(e,"h")),n&&(o+="".concat(n,"m")),o+="".concat(r<10?"0":"").concat(r.toFixed(2),"s")},c=function(time){var t="",e=!0;return time>=3600&&(e=!1,t+="".concat(Math.floor(time/3600),"h"),time%=3600),time>=60&&(e=!1,t+="".concat(Math.floor(time/60),"m"),time%=60),t+="".concat(!e&&time<10?"0":"").concat(Math.abs(+time.toFixed(2)),"s")},l=function(time){var t="",e=Math.trunc(time/3600).toFixed();t+="".concat(e.padStart(2,"0"),":"),time%=3600;var n=Math.trunc(time/60).toFixed();t+="".concat(n.padStart(2,"0"),":"),time%=60;var r=Math.trunc(time),o=(time-r).toFixed(7).substring(2);return t+="".concat(r.toFixed().padStart(2,"0"),".").concat(o.padEnd(7,"0"))},f=function(t,e){var n=t.split(" "),r=n[0].split("/");return"".concat(r[2],"-").concat(r[0],"-").concat(r[1]).concat(e?" at ":" ").concat(n[1])}},325:function(t,e,n){"use strict";var r=n(8).default.observable({savedSettings:{},hasGameTime:!1,useRealTime:!1,splitFileIsModified:!1,PB:null,autoSplitterSettings:null,filters:[],filteredAttempts:[]});e.a={get state(){return r}}},326:function(t,e,n){"use strict";n.d(e,"c",(function(){return l})),n.d(e,"b",(function(){return f})),n.d(e,"a",(function(){return d})),n.d(e,"d",(function(){return h}));n(15),n(1),n(3),n(68),n(113);var r=n(325),o=n(324),c=n(330),l=function(t){return(null==t?void 0:t.GameTime)&&!r.a.state.useRealTime?t.GameTime:(null==t?void 0:t.RealTime)||null},f=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=0;return t.map((function(t){var r;return(r=!0===e?t.BestSegmentTime.GameTime:!1===e?t.BestSegmentTime.RealTime:l(t.BestSegmentTime))&&(n+=Object(o.e)(r)),n}))},d=function(t){return t.reduce((function(t,e){return e.SplitTimes.SplitTime.forEach((function(s){t.includes(s["@_name"])||t.push(s["@_name"])})),t}),[])},h=function(t){r.a.state.splitFileIsModified=t,t?Object(c.c)():Object(c.d)()}},327:function(t,e,n){"use strict";var r=n(13),o=n(69),c=n(30),l=n(180),f=n(42),d=r(l),h=r("".slice),v=Math.ceil,m=function(t){return function(e,n,r){var l,m,y=c(f(e)),O=o(n),j=y.length,x=void 0===r?" ":c(r);return O<=j||""===x?y:((m=d(x,v((l=O-j)/x.length))).length>l&&(m=h(m,0,l)),t?y+m:m+y)}};t.exports={start:m(!1),end:m(!0)}},328:function(t,e,n){"use strict";var r=n(59);t.exports=/Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(r)},329:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r=new(n(8).default)},330:function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return f})),n.d(e,"d",(function(){return d})),n.d(e,"a",(function(){return h}));var r=n(29),o=n(28),c=(n(1),function(input){return null==input?[]:Array.isArray(input)?input:[input]}),l=function(t){t.preventDefault(),t.returnValue=""},f=function(){window.addEventListener("beforeunload",l)},d=function(){window.removeEventListener("beforeunload",l)},h=Object(r.a)((function t(){var e=this;Object(o.a)(this,t),this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(t,n){e.reject=n,e.resolve=t}))}))},331:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(329),o=function(t){r.a.$emit("startLoading",t)}},332:function(t,e,n){"use strict";n(9)({target:"Math",stat:!0},{trunc:n(244)})},333:function(t,e,n){"use strict";var r=n(9),o=n(327).start;r({target:"String",proto:!0,forced:n(328)},{padStart:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},334:function(t,e,n){"use strict";var r=n(9),o=n(327).end;r({target:"String",proto:!0,forced:n(328)},{padEnd:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},335:function(t,e,n){"use strict";n.r(e);var r=n(28),o=n(29),c=n(62),l=n(112),f=n(46),d=n(25),h=(n(6),n(1),n(178),n(323));function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var m=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},y=function(t){Object(c.a)(n,t);var e=v(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).visible=!1,t.id="collapse-xxxx",t}return Object(o.a)(n,[{key:"created",value:function(){this.visible=this.startsOpen}},{key:"onVisibleUpdate",value:function(t){this.$emit("input",t)}},{key:"onValueUpdate",value:function(t){this.visible=t}},{key:"mounted",value:function(){this.id="collapse-".concat(Math.floor(1e4*Math.random()))}}]),n}(h.Vue);m([Object(h.Prop)()],y.prototype,"value",void 0),m([Object(h.Prop)()],y.prototype,"title",void 0),m([Object(h.Prop)({default:!1})],y.prototype,"startsOpen",void 0),m([Object(h.Prop)({default:!0})],y.prototype,"lazy",void 0),m([Object(h.Watch)("visible")],y.prototype,"onVisibleUpdate",null),m([Object(h.Watch)("value",{immediate:!0})],y.prototype,"onValueUpdate",null);var O=y=m([h.Component],y),j=(n(344),n(67)),component=Object(j.a)(O,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("b-card",{staticClass:"mb-4",attrs:{title:t.title}},[e("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:t.id,expression:"id"}],staticClass:"toggle-collapse",attrs:{variant:"outline-secondary",pill:""}},[e("font-awesome-icon",{attrs:{icon:"chevron-left",rotation:t.visible?270:null}})],1),t._v(" "),e("b-collapse",{attrs:{id:t.id},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[t.visible||!t.lazy?t._t("default"):t._e()],2)],1)}),[],!1,null,"1ccd451c",null);e.default=component.exports},336:function(t,e,n){var content=n(345);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(89).default)("25f9910a",content,!0,{sourceMap:!1})},338:function(t,e,n){"use strict";n.r(e);var r=n(28),o=n(29),c=n(62),l=n(112),f=n(46),d=n(25),h=(n(6),n(1),n(178),n(323)),v=n(331);function m(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var y=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},O=function(t){Object(c.a)(n,t);var e=m(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).internalValue=!0,t}return Object(o.a)(n,[{key:"valueChange",value:function(t){this.internalValue=t}},{key:"inputChange",value:function(t){var e=this;Object(v.a)((function(){return new Promise((function(n){e.$emit("input",t),e.$nextTick((function(){return n()}))}))}))}}]),n}(h.Vue);y([Object(h.Prop)()],O.prototype,"value",void 0),y([Object(h.Watch)("value",{immediate:!0})],O.prototype,"valueChange",null),y([Object(h.Watch)("internalValue")],O.prototype,"inputChange",null);var j=O=y([h.Component],O),x=n(67),component=Object(x.a)(j,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("b-checkbox",{attrs:{switch:""},model:{value:t.internalValue,callback:function(e){t.internalValue=e},expression:"internalValue"}},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},340:function(t,e,n){var content=n(350);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(89).default)("4c34ea26",content,!0,{sourceMap:!1})},344:function(t,e,n){"use strict";n(336)},345:function(t,e,n){var r=n(88)((function(i){return i[1]}));r.push([t.i,"*[data-v-1ccd451c]{color:#000}.toggle-collapse[data-v-1ccd451c]{position:absolute;right:1rem;top:1rem}",""]),r.locals={},t.exports=r},346:function(t,e,n){"use strict";n.r(e);n(178);var r=n(28),o=n(29),c=n(62),l=n(112),f=n(46),d=n(25),h=(n(6),n(1),n(140),n(181),n(323));function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var m=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},y=function(t){Object(c.a)(n,t);var e=v(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).hours=0,t.minutes=0,t.seconds=0,t}return Object(o.a)(n,[{key:"outputInSeconds",get:function(){return 3600*this.hours+60*this.minutes+this.seconds}},{key:"onInputChange",value:function(){this.$emit("input",this.outputInSeconds)}},{key:"mounted",value:function(){var time=this.value;time>3600&&(this.hours=Math.floor(time/3600),time%=3600),time>60&&(this.minutes=Math.floor(time/60),time%=60),this.seconds=+time.toFixed(2)}}]),n}(h.Vue);m([Object(h.Prop)({type:Number})],y.prototype,"value",void 0),m([Object(h.Watch)("outputInSeconds")],y.prototype,"onInputChange",null);var O=y=m([h.Component],y),j=(n(349),n(67)),component=Object(j.a)(O,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("b-form",{staticClass:"time-form",attrs:{inline:""}},[e("b-row",[e("b-col",{staticClass:"column",attrs:{cols:"4"}},[e("b-input-group",{attrs:{append:"h"}},[e("b-form-input",{attrs:{placeholder:"Hours",type:"number",step:"1",debounce:"500"},model:{value:t.hours,callback:function(e){t.hours=t._n(e)},expression:"hours"}})],1)],1),t._v(" "),e("b-col",{staticClass:"column",attrs:{cols:"4"}},[e("b-input-group",{attrs:{append:"m"}},[e("b-form-input",{attrs:{placeholder:"Minutes",type:"number",step:"1",debounce:"500"},model:{value:t.minutes,callback:function(e){t.minutes=t._n(e)},expression:"minutes"}})],1)],1),t._v(" "),e("b-col",{staticClass:"column",attrs:{cols:"4"}},[e("b-input-group",{attrs:{append:"s"}},[e("b-form-input",{attrs:{placeholder:"Seconds",type:"number",step:"0.01",debounce:"500"},model:{value:t.seconds,callback:function(e){t.seconds=t._n(e)},expression:"seconds"}})],1)],1)],1)],1)}),[],!1,null,"fafb75a0",null);e.default=component.exports},348:function(t,e,n){"use strict";n.d(e,"c",(function(){return c})),n.d(e,"b",(function(){return l})),n.d(e,"a",(function(){return f})),n.d(e,"d",(function(){return d})),n.d(e,"e",(function(){return h}));var r=n(32),o=n(324),c="#1f77b4",l="#ffc400",f="#2db41e",d="#141f85",h=function(t){for(var e=Math.max.apply(Math,Object(r.a)(t)),n=[],c=[],l=(e-Math.min.apply(Math,Object(r.a)(t)))/10,f=0,d=[.01,.02,.025,.05,.1,.2,.25,.5,1,2,3,5,10,15,20,30,60,90,120,180,240,300,600,900,1800,3600];f<d.length;f++){var h=d[f];if(l<=h){l=h;break}}for(var i=0;i<=e+10*l;i+=l)i=parseFloat(i.toPrecision(8)),n.push(Object(o.c)(i)),c.push(i);return{tickTexts:n,tickVals:c}}},349:function(t,e,n){"use strict";n(340)},350:function(t,e,n){var r=n(88)((function(i){return i[1]}));r.push([t.i,".column[data-v-fafb75a0]{padding-left:.25rem;padding-right:.25rem}.time-form[data-v-fafb75a0]{padding-left:1rem;padding-right:1rem}",""]),r.locals={},t.exports=r},367:function(t,e,n){var content=n(403);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(89).default)("cb392050",content,!0,{sourceMap:!1})},402:function(t,e,n){"use strict";n(367)},403:function(t,e,n){var r=n(88)((function(i){return i[1]}));r.push([t.i,".time-select-label[data-v-403c9e6c]{line-height:2.25rem;min-width:10rem;padding-right:.5rem;text-align:right}.time-select-input[data-v-403c9e6c]{width:40rem}",""]),r.locals={},t.exports=r},416:function(t,e,n){"use strict";n.r(e);n(178),n(5),n(4),n(3),n(7);var r=n(32),o=n(0),c=n(28),l=n(29),f=n(62),d=n(112),h=n(46),v=n(25),m=(n(6),n(1),n(2),n(15),n(70),n(49),n(14),n(17),n(324)),y=n(348),O=n(323),j=n(326),x=n(347),w=n(342),_=n.n(w);function R(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function P(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?R(Object(n),!0).forEach((function(e){Object(o.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):R(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function k(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(h.a)(t);if(e){var o=Object(h.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(d.a)(this,n)}}var C=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(v.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},V=function(t){Object(f.a)(n,t);var e=k(n);function n(){var t;return Object(c.a)(this,n),(t=e.apply(this,arguments)).showResets=!0,t.lowerBoundFilter=0,t.higherBoundFilter=999999999,t.plotlyCurrentView=null,t.scatterType=["lines","markers"],t.layout={},t.timeFormat=m.c,t}return Object(l.a)(n,[{key:"updateLayout",value:function(){var t,e=Object(y.e)((null===(t=this.plotlyCurrentView)||void 0===t?void 0:t.y)||this.numberVals),n={title:"Attempt history",xaxis:{title:"Finished runs"},yaxis:{rangemode:"nonnegative",tickmode:"array",ticktext:e.tickTexts,tickvals:e.tickVals}};this.plotlyCurrentView&&(n.xaxis.range=this.plotlyCurrentView.x,n.yaxis.range=this.plotlyCurrentView.y),this.layout=n}},{key:"finishedAttempts",get:function(){var t=this;return this.attempts.filter((function(e){var time=Object(j.c)(e);if(!time)return!1;var n=Object(m.e)(time);return n>=t.lowerBoundFilter&&n<=t.higherBoundFilter}))}},{key:"numberVals",get:function(){return this.finishedAttempts.map((function(t){return Object(m.e)(Object(j.c)(t)||"")}))}},{key:"PBs",get:function(){if(!this.numberVals.length)return[];var t=this.numberVals[0]+1;return this.numberVals.map((function(time){return time<t&&(t=time),t}))}},{key:"plot_data",get:function(){var t=this,e=this.showResets?this.finishedAttempts.map((function(t){return t["@_id"]})):Array.from({length:this.finishedAttempts.length},(function(t,e){return e})),n=this.finishedAttempts.map((function(t){return"#".concat(t["@_id"],": ").concat(Object(m.b)(Object(j.c)(t)||""))})),r=this.finishedAttempts.map((function(e,i){return"#".concat(e["@_id"],": ").concat(Object(m.c)(t.PBs[i]))})),o={x:e,type:"scatter",hoverinfo:"text",mode:this.scatterType.join("+")};return[P(P({},o),{},{y:this.PBs,text:r,name:"PB",line:{shape:"spline",color:y.b,width:1}}),P(P({},o),{},{y:this.numberVals,text:n,name:"Attempt time",line:{shape:"spline",color:y.c,width:1}})]}},{key:"onPlotRelayout",value:function(t){t["xaxis.autorange"]&&t["yaxis.autorange"]?this.plotlyCurrentView=null:t["yaxis.range[0]"]&&t["yaxis.range[1]"]&&t["xaxis.range[0]"]&&t["xaxis.range[1]"]&&(this.plotlyCurrentView={x:[t["xaxis.range[0]"],t["xaxis.range[1]"]],y:[t["yaxis.range[0]"],t["yaxis.range[1]"]]})}},{key:"onPlotRestyle",value:function(){var t=this.$refs.plotlyAttemptStats.layout;this.plotlyCurrentView={x:[t.xaxis.range[0],t.xaxis.range[1]],y:[t.yaxis.range[0],t.yaxis.range[1]]}}},{key:"mounted",value:function(){var t=this.attempts.map((function(t){var time=Object(j.c)(t);return time?Object(m.e)(time):-1})).filter((function(t){return t>=0}));this.higherBoundFilter=Math.max.apply(Math,Object(r.a)(t))+1,this.lowerBoundFilter=0}}]),n}(O.Vue);C([Object(O.Prop)()],V.prototype,"attempts",void 0),C([Object(O.Watch)("numberVals"),Object(O.Watch)("plotlyCurrentView")],V.prototype,"updateLayout",null);var B=V=C([Object(O.Component)({components:{Plotly:x.Plotly,Multiselect:_.a}})],V),M=(n(402),n(67)),component=Object(M.a)(B,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("collapsible-card",{staticClass:"text-center",attrs:{id:"AttemptsStatsCard",title:"Attempts stats","starts-open":""}},[e("loading-switch",{staticClass:"mb-2",model:{value:t.showResets,callback:function(e){t.showResets=e},expression:"showResets"}},[t._v("\n    Include reset runs in X axis\n  ")]),t._v(" "),e("b-row",{staticClass:"mb-2"},[e("b-col",{staticClass:"mt-2",attrs:{cols:"4"}},[t._v("Make scatter plot with")]),t._v(" "),e("b-col",{attrs:{cols:"8"}},[e("multiselect",{attrs:{options:["lines","markers","text"],multiple:""},model:{value:t.scatterType,callback:function(e){t.scatterType=e},expression:"scatterType"}})],1)],1),t._v(" "),e("p",[t._v("\n    Filter runs that are between these times:\n  ")]),t._v(" "),e("div",{staticClass:"d-flex justify-content-center mt-1"},[e("div",{staticClass:"time-select-label"},[t._v("\n      Lower bound\n    ")]),t._v(" "),e("div",{staticClass:"time-select-input"},[e("time-selector",{model:{value:t.lowerBoundFilter,callback:function(e){t.lowerBoundFilter=e},expression:"lowerBoundFilter"}})],1)]),t._v(" "),e("div",{staticClass:"d-flex justify-content-center mt-1"},[e("div",{staticClass:"time-select-label"},[t._v("\n      Higher bound\n    ")]),t._v(" "),e("div",{staticClass:"time-select-input"},[e("time-selector",{model:{value:t.higherBoundFilter,callback:function(e){t.higherBoundFilter=e},expression:"higherBoundFilter"}})],1)]),t._v(" "),e("p",{staticClass:"mt-3"},[t._v("\n    "+t._s(t.finishedAttempts.length)+" finished runs in the range\n    [ "+t._s(t.timeFormat(t.lowerBoundFilter))+" ; "+t._s(t.timeFormat(t.higherBoundFilter))+" ]\n  ")]),t._v(" "),e("Plotly",{ref:"plotlyAttemptStats",attrs:{data:t.plot_data,layout:t.layout,"display-mode-bar":!0},on:{relayout:t.onPlotRelayout,restyle:t.onPlotRestyle}})],1)}),[],!1,null,"403c9e6c",null);e.default=component.exports;installComponents(component,{LoadingSwitch:n(338).default,TimeSelector:n(346).default,CollapsibleCard:n(335).default})}}]);