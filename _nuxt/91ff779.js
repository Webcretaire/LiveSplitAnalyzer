(window.webpackJsonp=window.webpackJsonp||[]).push([[18,6,10],{280:function(t,e,n){"use strict";n.d(e,"d",(function(){return r})),n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return l}));n(11),n(164),n(15),n(128);var r=function(time){var t=time.match(/([0-9]+):([0-9]+):([0-9.]+)/);if(!t)return 0;var e=+t[1],n=+t[2];return+t[3]+60*n+3600*e},o=function(time){var t=time.match(/([0-9]+):([0-9]+):([0-9.]+)/);if(!t)return"";var e=+t[1],n=+t[2],r=+t[3],o="";return e&&(o+="".concat(e,"h")),n&&(o+="".concat(n,"m")),o+="".concat(r<10?"0":"").concat(r.toFixed(2),"s")},c=function(time){var t="",e=!0;return time>3600&&(e=!1,t+="".concat(Math.floor(time/3600),"h"),time%=3600),time>60&&(e=!1,t+="".concat(Math.floor(time/60),"m"),time%=60),t+="".concat(!e&&time<10?"0":"").concat(Math.abs(+time.toFixed(2)),"s")},l=function(time){var t="";t+="".concat(Math.floor(time/3600),":"),time%=3600;var e=Math.floor(time/60);return t+="".concat(e<10?"0":"").concat(e,":"),t+="".concat((time%=60)<10?"0":"").concat(Math.abs(+time.toFixed(6)))}},281:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return l}));var r=function(input){return null==input?[]:Array.isArray(input)?input:[input]},o=function(t){t.preventDefault(),t.returnValue=""},c=function(){window.addEventListener("beforeunload",o)},l=function(){window.removeEventListener("beforeunload",o)}},282:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r=new(n(9).default)},283:function(t,e,n){"use strict";n.d(e,"c",(function(){return l})),n.d(e,"b",(function(){return f})),n.d(e,"a",(function(){return d})),n.d(e,"d",(function(){return m}));n(16),n(1),n(3),n(101),n(102);var r=n(285),o=n(280),c=n(281),l=function(t){return!r.a.state.useRealTime&&(null==t?void 0:t.GameTime)?t.GameTime:(null==t?void 0:t.RealTime)||null},f=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=0;return t.Segment.map((function(t){var r;return(r=!0===e?t.BestSegmentTime.GameTime:!1===e?t.BestSegmentTime.RealTime:l(t.BestSegmentTime))&&(n+=Object(o.d)(r)),n}))},d=function(t){return t.Segment.reduce((function(t,e){return Object(c.a)(e.SplitTimes.SplitTime).forEach((function(s){t.includes(s["@_name"])||t.push(s["@_name"])})),t}),[])},m=function(t){r.a.state.splitFileIsModified=t,t?Object(c.b)():Object(c.c)()}},285:function(t,e,n){"use strict";var r=n(9).default.observable({hasGameTime:!1,useRealTime:!1,splitFile:{},splitFileIsModified:!1});e.a={get state(){return r}}},286:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return c}));var r=n(282),o=function(t){r.a.$emit("startLoading",(function(){t(),r.a.$emit("stopLoading")}))},c=function(t){r.a.$emit("startLoading",(function(){t((function(){return r.a.$emit("stopLoading")}))}))}},290:function(t,e,n){"use strict";n.r(e);var r=n(22),o=n(23),c=n(60),l=n(100),f=n(44),d=n(40),m=(n(6),n(1),n(163),n(279)),v=n(282);function h(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var y=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},O=function(t){Object(c.a)(n,t);var e=h(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).modalRef="BaseModal",t}return Object(o.a)(n,[{key:"destroyModal",value:function(){v.a.$emit("closeModal")}},{key:"hideModal",value:function(){var t=this.$refs[this.modalRef];t&&t.hide()}},{key:"mounted",value:function(){var t=this.$refs[this.modalRef];t&&t.show()}}]),n}(m.Vue),j=O=y([m.Component],O),T=n(65),component=Object(T.a)(j,undefined,undefined,!1,null,null,null);e.default=component.exports},296:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r={currentSplit:null}},349:function(t,e,n){var content=n(368);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(80).default)("48e70da4",content,!0,{sourceMap:!1})},367:function(t,e,n){"use strict";n(349)},368:function(t,e,n){var r=n(79)(!1);r.push([t.i,"em[data-v-1b6b2de8]{text-decoration:underline}",""]),t.exports=r},370:function(t,e,n){"use strict";n.r(e);n(163);var r=n(30),o=n(22),c=n(23),l=n(60),f=n(100),d=n(44),m=n(40),v=(n(6),n(1),n(11),n(26),n(85),n(2),n(283)),h=n(279),y=n(290),O=n(282),j=n(296),T=n(280),R=n(286),S=n(281);function _(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(d.a)(t);if(e){var o=Object(d.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(f.a)(this,n)}}var k=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(m.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},w=function(t){Object(l.a)(n,t);var e=_(n);function n(){var t;return Object(o.a)(this,n),(t=e.apply(this,arguments)).modalRef="ManualGoldUpdateModal",t.split=null,t.fields=[{key:"@_id",label:"Attempt #"},{key:"time",label:"Time"},{key:"actions",label:"Actions"}],t}return Object(c.a)(n,[{key:"history",get:function(){var t;return Object(r.a)(Object(S.a)(null===(t=this.split)||void 0===t?void 0:t.SegmentHistory.Time)).filter((function(t){return Object(v.c)(t)})).sort((function(t,e){var n=Object(v.c)(t),r=Object(v.c)(e);return Object(T.d)(n)-Object(T.d)(r)}))}},{key:"formatTime",value:function(t){return Object(T.a)(Object(v.c)(t)||"00:00:00.000000")}},{key:"doDeleteAttempt",value:function(t,e){var n,r,o=this;Object(v.d)(!0),(null===(n=this.split)||void 0===n?void 0:n.SegmentHistory.Time)&&(this.split.SegmentHistory.Time=Object(S.a)(this.split.SegmentHistory.Time).filter((function(a){return a["@_id"]!=t["@_id"]}))),(null===(r=this.split)||void 0===r?void 0:r.BestSegmentTime)&&(this.history[0].RealTime&&(this.split.BestSegmentTime={RealTime:this.history[0].RealTime}),this.history[0].GameTime&&(this.split.BestSegmentTime.GameTime=this.history[0].GameTime),this.$nextTick((function(){var n;e(),o.$bvToast.toast("Attempt #".concat(t["@_id"]," has been deleted"),{title:null===(n=o.split)||void 0===n?void 0:n.Name,autoHideDelay:5e3,appendToast:!1,variant:"success"})})))}},{key:"deleteAttempt",value:function(t){var e=this;O.a.$emit("openConfirm","Delete attempt #".concat(t["@_id"],"?"),(function(){Object(R.b)((function(n){return e.doDeleteAttempt(t,n)})),O.a.$emit("closeConfirm")}))}},{key:"created",value:function(){var t=this;j.a.currentSplit&&(this.split=j.a.currentSplit),O.a.$on("setCurrentSplit",(function(e){return t.split=e}))}}]),n}(Object(h.mixins)(y.default)),M=w=k([h.Component],w),x=(n(367),n(65)),component=Object(x.a)(M,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-modal",{ref:t.modalRef,staticClass:"text-center",attrs:{title:"Fix golds","hide-footer":"",centered:"",size:"lg"},on:{hidden:t.destroyModal}},[t.split?n("div",{staticClass:"text-center",staticStyle:{"max-height":"80vh",overflow:"auto"}},[n("h3",{staticClass:"mb-3"},[t._v("Best attempts for split "),n("em",[t._v(t._s(t.split.Name))])]),t._v(" "),n("b-table",{attrs:{small:"",fields:t.fields,items:t.history,responsive:"sm"},scopedSlots:t._u([{key:"cell(time)",fn:function(data){return[t._v("\n        "+t._s(t.formatTime(data.item))+"\n      ")]}},{key:"cell(actions)",fn:function(data){return[n("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip:hover",arg:"hover"}],attrs:{pill:"",variant:"danger",size:"sm",title:"Delete this attempt"},on:{click:function(e){return t.deleteAttempt(data.item)}}},[n("font-awesome-icon",{attrs:{icon:"trash"}})],1)]}}],null,!1,1991413569)})],1):t._e()])}),[],!1,null,"1b6b2de8",null);e.default=component.exports}}]);