(window.webpackJsonp=window.webpackJsonp||[]).push([[9,12,20],{278:function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return f})),n.d(e,"d",(function(){return d})),n.d(e,"a",(function(){return m}));var r=n(23),o=n(22),c=(n(1),function(input){return null==input?[]:Array.isArray(input)?input:[input]}),l=function(t){t.preventDefault(),t.returnValue=""},f=function(){window.addEventListener("beforeunload",l)},d=function(){window.removeEventListener("beforeunload",l)},m=Object(r.a)((function t(){var e=this;Object(o.a)(this,t),this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(t,n){e.reject=n,e.resolve=t}))}))},279:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r=new(n(9).default)},280:function(t,e,n){"use strict";n.d(e,"d",(function(){return r})),n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return l}));n(11),n(162),n(15),n(127);var r=function(time){var t=time.match(/([0-9]+):([0-9]+):([0-9.]+)/);if(!t)return 0;var e=+t[1],n=+t[2];return+t[3]+60*n+3600*e},o=function(time){var t=time.match(/([0-9]+):([0-9]+):([0-9.]+)/);if(!t)return"";var e=+t[1],n=+t[2],r=+t[3],o="";return e&&(o+="".concat(e,"h")),n&&(o+="".concat(n,"m")),o+="".concat(r<10?"0":"").concat(r.toFixed(2),"s")},c=function(time){var t="",e=!0;return time>=3600&&(e=!1,t+="".concat(Math.floor(time/3600),"h"),time%=3600),time>=60&&(e=!1,t+="".concat(Math.floor(time/60),"m"),time%=60),t+="".concat(!e&&time<10?"0":"").concat(Math.abs(+time.toFixed(2)),"s")},l=function(time){var t="";t+="".concat(Math.floor(time/3600),":"),time%=3600;var e=Math.floor(time/60);return t+="".concat(e<10?"0":"").concat(e,":"),t+="".concat((time%=60)<10?"0":"").concat(Math.abs(+time.toFixed(6)))}},281:function(t,e,n){"use strict";var r=n(9).default.observable({hasGameTime:!1,useRealTime:!1,splitFile:{},splitFileIsModified:!1});e.a={get state(){return r}}},282:function(t,e,n){"use strict";n.d(e,"c",(function(){return l})),n.d(e,"b",(function(){return f})),n.d(e,"a",(function(){return d})),n.d(e,"d",(function(){return m}));n(16),n(1),n(3),n(101),n(102);var r=n(281),o=n(280),c=n(278),l=function(t){return(null==t?void 0:t.GameTime)&&!r.a.state.useRealTime?t.GameTime:(null==t?void 0:t.RealTime)||null},f=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=0;return t.Segment.map((function(t){var r;return(r=!0===e?t.BestSegmentTime.GameTime:!1===e?t.BestSegmentTime.RealTime:l(t.BestSegmentTime))&&(n+=Object(o.d)(r)),n}))},d=function(t){return t.Segment.reduce((function(t,e){return Object(c.b)(e.SplitTimes.SplitTime).forEach((function(s){t.includes(s["@_name"])||t.push(s["@_name"])})),t}),[])},m=function(t){r.a.state.splitFileIsModified=t,t?Object(c.c)():Object(c.d)()}},283:function(t,e,n){"use strict";n.r(e);var r=n(22),o=n(23),c=n(60),l=n(100),f=n(44),d=n(40),m=(n(6),n(1),n(161),n(277));function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var h=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},y=function(t){Object(c.a)(n,t);var e=v(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).visible=!1,t.id="collapse-xxxx",t}return Object(o.a)(n,[{key:"created",value:function(){this.visible=this.startsOpen}},{key:"mounted",value:function(){this.id="collapse-".concat(Math.floor(1e4*Math.random()))}}]),n}(m.Vue);h([Object(m.Prop)()],y.prototype,"title",void 0),h([Object(m.Prop)({default:!1})],y.prototype,"startsOpen",void 0);var O=y=h([m.Component],y),j=(n(288),n(65)),component=Object(j.a)(O,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-card",{staticClass:"mb-4",attrs:{title:t.title}},[n("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:t.id,expression:"id"}],staticClass:"toggle-collapse",attrs:{variant:"outline-secondary",pill:""}},[n("font-awesome-icon",{attrs:{icon:"chevron-left",rotation:t.visible?270:null}})],1),t._v(" "),n("b-collapse",{attrs:{id:t.id},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[t.visible?n("div",[t._t("default")],2):t._e()])],1)}),[],!1,null,"3695aa62",null);e.default=component.exports},284:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return c}));var r=n(279),o=function(t){r.a.$emit("startLoading",(function(){t(),r.a.$emit("stopLoading")}))},c=function(t){r.a.$emit("startLoading",(function(){t((function(){return r.a.$emit("stopLoading")}))}))}},285:function(t,e,n){var content=n(289);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(80).default)("767d371d",content,!0,{sourceMap:!1})},288:function(t,e,n){"use strict";n(285)},289:function(t,e,n){var r=n(79)(!1);r.push([t.i,"*[data-v-3695aa62]{color:#000}.toggle-collapse[data-v-3695aa62]{position:absolute;right:1rem;top:1rem}",""]),t.exports=r},290:function(t,e,n){"use strict";n.r(e);var r=n(22),o=n(23),c=n(60),l=n(100),f=n(44),d=n(40),m=(n(6),n(1),n(161),n(277)),v=n(284);function h(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var y=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},O=function(t){Object(c.a)(n,t);var e=h(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"inputChange",value:function(t){var e=this;Object(v.b)((function(n){e.$emit("input",t),e.$nextTick((function(){return n()}))}))}}]),n}(m.Vue);y([Object(m.Prop)()],O.prototype,"value",void 0),y([Object(m.Watch)("value")],O.prototype,"inputChange",null);var j=O=y([m.Component],O),T=n(65),component=Object(T.a)(j,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("b-checkbox",{attrs:{switch:""},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},338:function(t,e,n){"use strict";n.r(e);n(161);var r=n(22),o=n(23),c=n(60),l=n(100),f=n(44),d=n(40),m=(n(6),n(1),n(15),n(16),n(128),n(127),n(280)),v=n(277),h=n(282),y=n(301),O=n(278);function j(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var T=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},S=function(t){Object(c.a)(n,t);var e=j(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).renderGraph=!0,t.visible=!1,t.sortByTimesave=!1,t.layout={margin:{t:0,b:0,l:0,r:0}},t.secondsToFormattedString=m.b,t}return Object(o.a)(n,[{key:"titleAttempt",get:function(){return"".concat(this.isPb?"Personal Best":"Attempt n°".concat(this.attempt["@_id"])," overview (").concat(Object(m.b)(this.attemptTime)," total)")}},{key:"titleTimesave",get:function(){return"Possible timesave (".concat(Object(m.b)(this.attemptTimesave)," total)")}},{key:"AttemptSegments",get:function(){var t=this;return this.run.Segments.Segment.map((function(e){return Object(O.b)(e.SegmentHistory.Time).find((function(e){return e["@_id"]==t.attempt["@_id"]}))}))}},{key:"AttemptSplitTimes",get:function(){return this.AttemptSegments.map((function(s){var t=Object(h.c)(s);return t?Object(m.d)(t):null}))}},{key:"attemptTime",get:function(){return this.AttemptSplitTimes.reduce((function(t,e){return t+(e||0)}),0)}},{key:"attemptSplitTimesaves",get:function(){var t=this;return this.run.Segments.Segment.map((function(e,n){var s=t.AttemptSegments[n],r=Object(h.c)(s),o=Object(h.c)(e.BestSegmentTime);if(!r||!o)return null;var c=Object(m.d)(r);return c-=Object(m.d)(o),c,c}))}},{key:"attemptTimesave",get:function(){return this.attemptSplitTimesaves.reduce((function(t,e){return t+(e||0)}),0)}},{key:"makePlotData",value:function(title,data,t,e){return[{values:data,labels:t,domain:{column:0},title:title,hoverinfo:"label+percent",hole:.6,type:"pie",sort:e,automargin:!0,textinfo:this.displayLabels?"percent":"none"}]}},{key:"plotDataAttempt",value:function(){var t=this;return this.makePlotData("Split times",this.AttemptSplitTimes,this.run.Segments.Segment.map((function(e){var time=Object(h.c)(Object(O.b)(e.SegmentHistory.Time).find((function(e){return e["@_id"]==t.attempt["@_id"]})));return time?"".concat(e.Name," (").concat(Object(m.a)(time),")"):e.Name})),!1)}},{key:"plotDataTimesave",value:function(){var t=this,e=this.run.Segments.Segment.map((function(e,i){var n=t.attemptSplitTimesaves[i];return"".concat(e.Name," (").concat(n?Object(m.b)(n):"",")")}));return this.makePlotData("Attempt compared to golds",this.attemptSplitTimesaves.map((function(t){return t?+t.toFixed(2):null})),e,this.sortByTimesave)}}]),n}(v.Vue);T([Object(v.Prop)()],S.prototype,"run",void 0),T([Object(v.Prop)()],S.prototype,"attempt",void 0),T([Object(v.Prop)()],S.prototype,"graphYAxisToZero",void 0),T([Object(v.Prop)()],S.prototype,"isPb",void 0),T([Object(v.Prop)()],S.prototype,"displayLabels",void 0);var R=S=T([Object(v.Component)({components:{Plotly:y.Plotly}})],S),P=n(65),component=Object(P.a)(R,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("collapsible-card",{staticClass:"text-center",attrs:{id:"AttemptOverviewTimeCard",title:t.titleAttempt}},[t.renderGraph?n("Plotly",{attrs:{data:t.plotDataAttempt(),layout:t.layout,"display-mode-bar":!0}}):t._e()],1),t._v(" "),n("collapsible-card",{staticClass:"text-center",attrs:{id:"AttemptOverviewTimesaveCard",title:t.titleTimesave}},[n("loading-switch",{staticClass:"mt-2 mb-4",model:{value:t.sortByTimesave,callback:function(e){t.sortByTimesave=e},expression:"sortByTimesave"}},[t._v("\n      Sort by possible timesave\n    ")]),t._v(" "),t.renderGraph?n("Plotly",{attrs:{data:t.plotDataTimesave(),layout:t.layout,"display-mode-bar":!0}}):t._e()],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CollapsibleCard:n(283).default,LoadingSwitch:n(290).default})}}]);