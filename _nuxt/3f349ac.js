(window.webpackJsonp=window.webpackJsonp||[]).push([[22,11],{280:function(t,e,n){"use strict";n.d(e,"d",(function(){return r})),n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return l}));n(11),n(164),n(15),n(128);var r=function(time){var t=time.match(/([0-9]+):([0-9]+):([0-9.]+)/);if(!t)return 0;var e=+t[1],n=+t[2];return+t[3]+60*n+3600*e},o=function(time){var t=time.match(/([0-9]+):([0-9]+):([0-9.]+)/);if(!t)return"";var e=+t[1],n=+t[2],r=+t[3],o="";return e&&(o+="".concat(e,"h")),n&&(o+="".concat(n,"m")),o+="".concat(r<10?"0":"").concat(r.toFixed(2),"s")},c=function(time){var t="",e=!0;return time>3600&&(e=!1,t+="".concat(Math.floor(time/3600),"h"),time%=3600),time>60&&(e=!1,t+="".concat(Math.floor(time/60),"m"),time%=60),t+="".concat(!e&&time<10?"0":"").concat(Math.abs(+time.toFixed(2)),"s")},l=function(time){var t="";t+="".concat(Math.floor(time/3600),":"),time%=3600;var e=Math.floor(time/60);return t+="".concat(e<10?"0":"").concat(e,":"),t+="".concat((time%=60)<10?"0":"").concat(Math.abs(+time.toFixed(6)))}},281:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return l}));var r=function(input){return null==input?[]:Array.isArray(input)?input:[input]},o=function(t){t.preventDefault(),t.returnValue=""},c=function(){window.addEventListener("beforeunload",o)},l=function(){window.removeEventListener("beforeunload",o)}},282:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r=new(n(9).default)},283:function(t,e,n){"use strict";n.d(e,"c",(function(){return l})),n.d(e,"b",(function(){return f})),n.d(e,"a",(function(){return m})),n.d(e,"d",(function(){return d}));n(16),n(1),n(3),n(101),n(102);var r=n(285),o=n(280),c=n(281),l=function(t){return!r.a.state.useRealTime&&(null==t?void 0:t.GameTime)?t.GameTime:(null==t?void 0:t.RealTime)||null},f=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=0;return t.Segment.map((function(t){var r;return(r=!0===e?t.BestSegmentTime.GameTime:!1===e?t.BestSegmentTime.RealTime:l(t.BestSegmentTime))&&(n+=Object(o.d)(r)),n}))},m=function(t){return t.Segment.reduce((function(t,e){return Object(c.a)(e.SplitTimes.SplitTime).forEach((function(s){t.includes(s["@_name"])||t.push(s["@_name"])})),t}),[])},d=function(t){r.a.state.splitFileIsModified=t,t?Object(c.b)():Object(c.c)()}},285:function(t,e,n){"use strict";var r=n(9).default.observable({hasGameTime:!1,useRealTime:!1,splitFile:{},splitFileIsModified:!1});e.a={get state(){return r}}},286:function(t,e,n){"use strict";n.r(e);var r=n(22),o=n(23),c=n(60),l=n(100),f=n(44),m=n(40),d=(n(6),n(1),n(163),n(279));function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var h=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(m.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},y=function(t){Object(c.a)(n,t);var e=v(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).visible=!0,t.id="collapse-xxxx",t}return Object(o.a)(n,[{key:"created",value:function(){this.visible=this.startsOpen}},{key:"mounted",value:function(){this.id="collapse-".concat(Math.floor(1e4*Math.random()))}}]),n}(d.Vue);h([Object(d.Prop)()],y.prototype,"title",void 0),h([Object(d.Prop)({default:!1})],y.prototype,"startsOpen",void 0);var O=y=h([d.Component],y),j=(n(291),n(65)),component=Object(j.a)(O,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-card",{staticClass:"mb-4",attrs:{title:t.title}},[n("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:t.id,expression:"id"}],staticClass:"toggle-collapse",attrs:{variant:"outline-secondary",pill:""}},[n("font-awesome-icon",{attrs:{icon:"chevron-left",rotation:t.visible?270:null}})],1),t._v(" "),n("b-collapse",{attrs:{id:t.id,visible:""},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[t._t("default")],2)],1)}),[],!1,null,"f2e97700",null);e.default=component.exports},287:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return c}));n(37);var r=n(282),o=function(t){r.a.$emit("startLoading"),setTimeout((function(){t(),r.a.$emit("stopLoading")}),500)},c=function(t){r.a.$emit("startLoading"),setTimeout((function(){t((function(){return r.a.$emit("stopLoading")}))}),500)}},288:function(t,e,n){var content=n(292);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(80).default)("08b1a062",content,!0,{sourceMap:!1})},291:function(t,e,n){"use strict";n(288)},292:function(t,e,n){var r=n(79)(!1);r.push([t.i,"*[data-v-f2e97700]{color:#000}.toggle-collapse[data-v-f2e97700]{position:absolute;right:1rem;top:1rem}",""]),t.exports=r},328:function(t,e,n){"use strict";n.r(e);n(163);var r=n(22),o=n(23),c=n(60),l=n(100),f=n(44),m=n(40),d=(n(6),n(1),n(127),n(16),n(3),n(2),n(283)),v=n(280),h=n(287),y=n(281),O=n(279);function j(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var T=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(m.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},R=function(t){Object(c.a)(n,t);var e=j(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).visible=!1,t}return Object(o.a)(n,[{key:"splits",get:function(){return this.value.Run.Segments.Segment}},{key:"reconstructAttemptTime",value:function(t){return this.splits.reduce((function(e,s){var time=Object(d.c)(Object(y.a)(s.SegmentHistory.Time).find((function(e){return e["@_id"]==t})));return time?Object(v.d)(time)+e:e}),0)}},{key:"allRunAttempts",get:function(){return Object(y.a)(this.value.Run.AttemptHistory.Attempt)}},{key:"pbFromSplitHistory",get:function(){var t=this,e=Object(y.a)(this.splits[this.splits.length-1].SegmentHistory.Time).map((function(e){return{id:e["@_id"],time:t.reconstructAttemptTime(e["@_id"])}})),n=Object(v.d)("999:59:59.99"),r=0;return e.forEach((function(t){var e=t.id,time=t.time;e>0&&time<n&&(n=time,r=e)})),this.allRunAttempts.find((function(a){return a["@_id"]==r}))}},{key:"pbFromAttemptHistory",get:function(){var t,e=Object(v.d)("999:59:59.99");return this.allRunAttempts.forEach((function(n){if(!(n["@_id"]<=0)){var r=Object(d.c)(n);if(r){var o=Object(v.d)(r);o>1&&o<e&&(e=o,t=n)}}})),t}},{key:"fixPB",value:function(){var t=this;Object(h.a)((function(){Object(d.d)(!0);var e=t.pbFromAttemptHistory||t.pbFromSplitHistory;if(null==e?void 0:e["@_id"]){for(var n={RealTime:0,GameTime:0},i=0;i<t.value.Run.Segments.Segment.length;++i){var r=t.splits[i].SplitTimes.SplitTime||[],o=Object(y.a)(r),c=Object(y.a)(t.splits[i].SegmentHistory.Time).find((function(t){return t["@_id"]==(null==e?void 0:e["@_id"])})),l=o.filter((function(t){return"Personal Best"!=t["@_name"]}));if(c){c.RealTime&&(n.RealTime+=Object(v.d)(c.RealTime)),c.GameTime&&(n.GameTime+=Object(v.d)(c.GameTime));var f={"@_name":"Personal Best",RealTime:Object(v.c)(n.RealTime)};(null==e?void 0:e.GameTime)&&(f.GameTime=Object(v.c)(n.GameTime)),l.push(f)}t.value.Run.Segments.Segment[i].SplitTimes||(t.value.Run.Segments.Segment[i].SplitTimes={SplitTime:[]}),console.log(t.value.Run.Segments.Segment[i].SplitTimes.SplitTime),t.value.Run.Segments.Segment[i].SplitTimes.SplitTime=l}t.$emit("input",t.value),t.$bvToast.toast("PB time for each split was updated with run ".concat(null==e?void 0:e["@_id"]),{title:"Splits updated",autoHideDelay:5e3,appendToast:!1,variant:"success"})}else console.error("Couldn't find a PB in your splits, did you finish a run?")}))}}]),n}(O.Vue);T([Object(O.Prop)()],R.prototype,"value",void 0);var S=R=T([O.Component],R),_=n(65),component=Object(_.a)(S,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("collapsible-card",{attrs:{title:"Toolbox (experimental)"}},[n("p",[n("b-button",{attrs:{variant:"info"},on:{click:t.fixPB}},[n("font-awesome-icon",{attrs:{icon:"screwdriver-wrench"}}),t._v("\n      Fix Personal Best\n    ")],1),t._v(" "),n("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"help-question",attrs:{title:"Fix PB split time for each segment, if your PB comparison is currently broken"}},[n("font-awesome-icon",{attrs:{icon:"circle-question"}})],1)],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CollapsibleCard:n(286).default})}}]);