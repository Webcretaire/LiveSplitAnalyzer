(window.webpackJsonp=window.webpackJsonp||[]).push([[15,25,31],{280:function(t,e,n){"use strict";var r=n(9).default.observable({savedSettings:{},hasGameTime:!1,useRealTime:!1,splitFileIsModified:!1,PB:null,autoSplitterSettings:null});e.a={get state(){return r}}},281:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r=new(n(9).default)},282:function(t,e,n){"use strict";n.d(e,"d",(function(){return r})),n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return l}));n(11),n(163),n(15),n(127),n(290),n(291),n(292);var r=function(time){var t=time.match(/([0-9]+):([0-9]+):([0-9.]+)/);if(!t)return 0;var e=+t[1],n=+t[2];return+t[3]+60*n+3600*e},c=function(time){var t=time.match(/([0-9]+):([0-9]+):([0-9.]+)/);if(!t)return"";var e=+t[1],n=+t[2],r=+t[3],c="";return e&&(c+="".concat(e,"h")),n&&(c+="".concat(n,"m")),c+="".concat(r<10?"0":"").concat(r.toFixed(2),"s")},o=function(time){var t="",e=!0;return time>=3600&&(e=!1,t+="".concat(Math.floor(time/3600),"h"),time%=3600),time>=60&&(e=!1,t+="".concat(Math.floor(time/60),"m"),time%=60),t+="".concat(!e&&time<10?"0":"").concat(Math.abs(+time.toFixed(2)),"s")},l=function(time){var t="",e=Math.trunc(time/3600).toFixed();t+="".concat(e.padStart(2,"0"),":"),time%=3600;var n=Math.trunc(time/60).toFixed();t+="".concat(n.padStart(2,"0"),":"),time%=60;var r=Math.trunc(time),c=(time-r).toFixed(7).substring(2);return t+="".concat(r.toFixed().padStart(2,"0"),".").concat(c.padEnd(7,"0"))}},283:function(t,e,n){"use strict";n.d(e,"c",(function(){return l})),n.d(e,"b",(function(){return f})),n.d(e,"a",(function(){return d})),n.d(e,"d",(function(){return v}));n(16),n(1),n(3),n(101),n(102);var r=n(280),c=n(282),o=n(284),l=function(t){return(null==t?void 0:t.GameTime)&&!r.a.state.useRealTime?t.GameTime:(null==t?void 0:t.RealTime)||null},f=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=0;return t.map((function(t){var r;return(r=!0===e?t.BestSegmentTime.GameTime:!1===e?t.BestSegmentTime.RealTime:l(t.BestSegmentTime))&&(n+=Object(c.d)(r)),n}))},d=function(t){return t.reduce((function(t,e){return e.SplitTimes.SplitTime.forEach((function(s){t.includes(s["@_name"])||t.push(s["@_name"])})),t}),[])},v=function(t){r.a.state.splitFileIsModified=t,t?Object(o.c)():Object(o.d)()}},284:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return f})),n.d(e,"d",(function(){return d})),n.d(e,"a",(function(){return v}));var r=n(23),c=n(22),o=(n(1),function(input){return null==input?[]:Array.isArray(input)?input:[input]}),l=function(t){t.preventDefault(),t.returnValue=""},f=function(){window.addEventListener("beforeunload",l)},d=function(){window.removeEventListener("beforeunload",l)},v=Object(r.a)((function t(){var e=this;Object(c.a)(this,t),this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(t,n){e.reject=n,e.resolve=t}))}))},285:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(281),c=function(t){r.a.$emit("startLoading",t)}},287:function(t,e,n){var r=n(14),c=n(66),o=n(28),l=n(164),f=n(41),d=r(l),v=r("".slice),m=Math.ceil,h=function(t){return function(e,n,r){var l,h,y=o(f(e)),j=c(n),O=y.length,R=void 0===r?" ":o(r);return j<=O||""==R?y:((h=d(R,m((l=j-O)/R.length))).length>l&&(h=v(h,0,l)),t?y+h:h+y)}};t.exports={start:h(!1),end:h(!0)}},288:function(t,e,n){var r=n(55);t.exports=/Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(r)},290:function(t,e,n){var r=n(13),c=Math.ceil,o=Math.floor;r({target:"Math",stat:!0},{trunc:function(t){return(t>0?o:c)(t)}})},291:function(t,e,n){"use strict";var r=n(13),c=n(287).start;r({target:"String",proto:!0,forced:n(288)},{padStart:function(t){return c(this,t,arguments.length>1?arguments[1]:void 0)}})},292:function(t,e,n){"use strict";var r=n(13),c=n(287).end;r({target:"String",proto:!0,forced:n(288)},{padEnd:function(t){return c(this,t,arguments.length>1?arguments[1]:void 0)}})},293:function(t,e,n){"use strict";n.r(e);var r=n(22),c=n(23),o=n(60),l=n(100),f=n(44),d=n(40),v=(n(6),n(1),n(162),n(279)),m=n(285);function h(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var c=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var y=function(t,e,n,desc){var r,c=arguments.length,o=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(o=(c<3?r(o):c>3?r(e,n,o):r(e,n))||o);return c>3&&o&&Object.defineProperty(e,n,o),o},j=function(t){Object(o.a)(n,t);var e=h(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).internalValue=!0,t}return Object(c.a)(n,[{key:"valueChange",value:function(t){this.internalValue=t}},{key:"inputChange",value:function(t){var e=this;Object(m.a)((function(){return new Promise((function(n){e.$emit("input",t),e.$nextTick((function(){return n()}))}))}))}}]),n}(v.Vue);y([Object(v.Prop)()],j.prototype,"value",void 0),y([Object(v.Watch)("value",{immediate:!0})],j.prototype,"valueChange",null),y([Object(v.Watch)("internalValue")],j.prototype,"inputChange",null);var O=j=y([v.Component],j),R=n(65),component=Object(R.a)(O,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("b-checkbox",{attrs:{switch:""},model:{value:t.internalValue,callback:function(e){t.internalValue=e},expression:"internalValue"}},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},306:function(t,e,n){var content=n(316);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(80).default)("7a62e3fe",content,!0,{sourceMap:!1})},313:function(t,e,n){"use strict";n.r(e);n(162);var r=n(29),c=n(22),o=n(23),l=n(60),f=n(100),d=n(44),v=n(40),m=(n(6),n(1),n(2),n(16),n(314)),h=n.n(m),y=n(279),j=n(283),O=n(280);function R(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(d.a)(t);if(e){var c=Object(d.a)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(f.a)(this,n)}}var V=function(t,e,n,desc){var r,c=arguments.length,o=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(v.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(o=(c<3?r(o):c>3?r(e,n,o):r(e,n))||o);return c>3&&o&&Object.defineProperty(e,n,o),o},x=function(t){Object(l.a)(n,t);var e=R(n);function n(){var t;return Object(c.a)(this,n),(t=e.apply(this,arguments)).internalValue=1,t.filterRuns=!1,t}return Object(o.a)(n,[{key:"isPb",get:function(){var t;return this.internalValue===(null===(t=this.PB)||void 0===t?void 0:t["@_id"])}},{key:"PB",get:function(){return O.a.state.PB}},{key:"runAttempts",get:function(){return this.filterRuns?this.attempts.filter((function(a){return Object(j.c)(a)})):this.attempts}},{key:"latestAttemptNumber",get:function(){return Math.max.apply(Math,Object(r.a)(this.runAttempts.map((function(a){return a["@_id"]}))))}},{key:"runSliderMarks",get:function(){return[this.runAttempts[0]["@_id"],this.latestAttemptNumber]}},{key:"onValueUpdate",value:function(t){this.internalValue=t}},{key:"onInternalValueChange",value:function(t){this.$emit("input",t)}}]),n}(y.Vue);V([Object(y.Prop)()],x.prototype,"value",void 0),V([Object(y.Prop)()],x.prototype,"attempts",void 0),V([Object(y.Watch)("value",{immediate:!0})],x.prototype,"onValueUpdate",null),V([Object(y.Watch)("internalValue")],x.prototype,"onInternalValueChange",null);var k=x=V([Object(y.Component)({components:{VueSlider:h.a}})],x),_=(n(315),n(65)),component=Object(_.a)(k,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mb-4"},[n("div",{staticClass:"d-flex mt-4 mb-2"},[n("b-form",{staticClass:"text-center m-auto",attrs:{inline:""}},[n("b-input-group",{attrs:{prepend:"Currently displayed run"}},[n("b-form-input",{attrs:{type:"number",max:t.latestAttemptNumber,min:"1",debounce:"500"},model:{value:t.internalValue,callback:function(e){t.internalValue=t._n(e)},expression:"internalValue"}})],1),t._v(" "),n("b-button",{staticClass:"ml-2",attrs:{variant:"outline-info",disabled:t.isPb},on:{click:function(e){t.internalValue=t.PB["@_id"]}}},[t._v("\n        Go to PB\n      ")])],1)],1),t._v(" "),n("loading-switch",{staticClass:"mt-3 mb-2",model:{value:t.filterRuns,callback:function(e){t.filterRuns=e},expression:"filterRuns"}},[t._v("\n    Filter out unfinished runs\n  ")]),t._v(" "),n("vue-slider",{staticClass:"attempt-selection-slider",attrs:{data:t.runAttempts,"data-value":"@_id","data-label":"@_id",marks:t.runSliderMarks,lazy:"",adsorb:""},model:{value:t.internalValue,callback:function(e){t.internalValue=e},expression:"internalValue"}})],1)}),[],!1,null,"11959438",null);e.default=component.exports;installComponents(component,{LoadingSwitch:n(293).default})},315:function(t,e,n){"use strict";n(306)},316:function(t,e,n){var r=n(79)(!1);r.push([t.i,".attempt-selection-slider[data-v-11959438]{margin-bottom:2rem}",""]),t.exports=r}}]);