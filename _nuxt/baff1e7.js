(window.webpackJsonp=window.webpackJsonp||[]).push([[32,8,12,25,28],{280:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r=new(n(9).default)},281:function(t,e,n){"use strict";var r=n(9).default.observable({hasGameTime:!1,useRealTime:!1,splitFileIsModified:!1,PB:null,autoSplitterSettings:null});e.a={get state(){return r}}},282:function(t,e,n){"use strict";n.d(e,"d",(function(){return r})),n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return l}));n(11),n(163),n(15),n(127),n(290),n(291),n(292);var r=function(time){var t=time.match(/([0-9]+):([0-9]+):([0-9.]+)/);if(!t)return 0;var e=+t[1],n=+t[2];return+t[3]+60*n+3600*e},o=function(time){var t=time.match(/([0-9]+):([0-9]+):([0-9.]+)/);if(!t)return"";var e=+t[1],n=+t[2],r=+t[3],o="";return e&&(o+="".concat(e,"h")),n&&(o+="".concat(n,"m")),o+="".concat(r<10?"0":"").concat(r.toFixed(2),"s")},c=function(time){var t="",e=!0;return time>=3600&&(e=!1,t+="".concat(Math.floor(time/3600),"h"),time%=3600),time>=60&&(e=!1,t+="".concat(Math.floor(time/60),"m"),time%=60),t+="".concat(!e&&time<10?"0":"").concat(Math.abs(+time.toFixed(2)),"s")},l=function(time){var t="",e=Math.trunc(time/3600).toFixed();t+="".concat(e.padStart(2,"0"),":"),time%=3600;var n=Math.trunc(time/60).toFixed();t+="".concat(n.padStart(2,"0"),":"),time%=60;var r=Math.trunc(time),o=(time-r).toFixed(7).substring(2);return t+="".concat(r.toFixed().padStart(2,"0"),".").concat(o.padEnd(7,"0"))}},283:function(t,e,n){"use strict";n.d(e,"c",(function(){return l})),n.d(e,"b",(function(){return f})),n.d(e,"a",(function(){return d})),n.d(e,"d",(function(){return m}));n(16),n(1),n(3),n(101),n(102);var r=n(281),o=n(282),c=n(284),l=function(t){return(null==t?void 0:t.GameTime)&&!r.a.state.useRealTime?t.GameTime:(null==t?void 0:t.RealTime)||null},f=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=0;return t.map((function(t){var r;return(r=!0===e?t.BestSegmentTime.GameTime:!1===e?t.BestSegmentTime.RealTime:l(t.BestSegmentTime))&&(n+=Object(o.d)(r)),n}))},d=function(t){return t.reduce((function(t,e){return e.SplitTimes.SplitTime.forEach((function(s){t.includes(s["@_name"])||t.push(s["@_name"])})),t}),[])},m=function(t){r.a.state.splitFileIsModified=t,t?Object(c.c)():Object(c.d)()}},284:function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return f})),n.d(e,"d",(function(){return d})),n.d(e,"a",(function(){return m}));var r=n(23),o=n(22),c=(n(1),function(input){return null==input?[]:Array.isArray(input)?input:[input]}),l=function(t){t.preventDefault(),t.returnValue=""},f=function(){window.addEventListener("beforeunload",l)},d=function(){window.removeEventListener("beforeunload",l)},m=Object(r.a)((function t(){var e=this;Object(o.a)(this,t),this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(t,n){e.reject=n,e.resolve=t}))}))},285:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return c}));var r=n(280),o=function(t){r.a.$emit("startLoading",(function(){t(),r.a.$emit("stopLoading")}))},c=function(t){r.a.$emit("startLoading",(function(){t((function(){return r.a.$emit("stopLoading")}))}))}},287:function(t,e,n){var r=n(14),o=n(66),c=n(28),l=n(164),f=n(41),d=r(l),m=r("".slice),v=Math.ceil,h=function(t){return function(e,n,r){var l,h,y=c(f(e)),j=o(n),O=y.length,T=void 0===r?" ":c(r);return j<=O||""==T?y:((h=d(T,v((l=j-O)/T.length))).length>l&&(h=m(h,0,l)),t?y+h:h+y)}};t.exports={start:h(!1),end:h(!0)}},288:function(t,e,n){var r=n(55);t.exports=/Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(r)},290:function(t,e,n){var r=n(13),o=Math.ceil,c=Math.floor;r({target:"Math",stat:!0},{trunc:function(t){return(t>0?c:o)(t)}})},291:function(t,e,n){"use strict";var r=n(13),o=n(287).start;r({target:"String",proto:!0,forced:n(288)},{padStart:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},292:function(t,e,n){"use strict";var r=n(13),o=n(287).end;r({target:"String",proto:!0,forced:n(288)},{padEnd:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},294:function(t,e,n){"use strict";n.r(e);var r=n(22),o=n(23),c=n(60),l=n(100),f=n(44),d=n(40),m=(n(6),n(1),n(162),n(279)),v=n(280);function h(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var y=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},j=function(t){Object(c.a)(n,t);var e=h(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).modalRef="BaseModal",t}return Object(o.a)(n,[{key:"destroyModal",value:function(){v.a.$emit("closeModal")}},{key:"hideModal",value:function(){var t=this.$refs[this.modalRef];t&&t.hide()}},{key:"mounted",value:function(){var t=this.$refs[this.modalRef];t&&t.show()}}]),n}(m.Vue),O=j=y([m.Component],j),T=n(65),component=Object(T.a)(O,undefined,undefined,!1,null,null,null);e.default=component.exports},341:function(t,e,n){var content=n(368);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(80).default)("b591ad0e",content,!0,{sourceMap:!1})},367:function(t,e,n){"use strict";n(341)},368:function(t,e,n){var r=n(79)(!1);r.push([t.i,"em[data-v-333df090]{text-decoration:underline}",""]),t.exports=r},374:function(t,e,n){"use strict";n.r(e);n(162);var r=n(29),o=n(22),c=n(23),l=n(60),f=n(100),d=n(44),m=n(40),v=(n(6),n(1),n(81),n(2),n(11),n(26),n(283)),h=n(279),y=n(294),j=n(280),O=n(282),T=n(285);function R(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(d.a)(t);if(e){var o=Object(d.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(f.a)(this,n)}}var S=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(m.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},M=function(t){Object(l.a)(n,t);var e=R(n);function n(){var t;return Object(o.a)(this,n),(t=e.apply(this,arguments)).modalRef="ManualGoldUpdateModal",t.fields=[{key:"@_id",label:"Attempt #"},{key:"time",label:"Time"},{key:"actions",label:"Actions"}],t}return Object(c.a)(n,[{key:"history",get:function(){var t,e;return Object(r.a)((null===(e=null===(t=this.split)||void 0===t?void 0:t.SegmentHistory)||void 0===e?void 0:e.Time)||[]).filter((function(t){return Object(v.c)(t)})).sort((function(t,e){var n=Object(v.c)(t),r=Object(v.c)(e);return Object(O.d)(n)-Object(O.d)(r)}))}},{key:"formatTime",value:function(t){return Object(O.a)(Object(v.c)(t)||"00:00:00.000000")}},{key:"doDeleteAttempt",value:function(t,e){var n,r,o,c=this;Object(v.d)(!0),(null===(r=null===(n=this.split)||void 0===n?void 0:n.SegmentHistory)||void 0===r?void 0:r.Time)&&(this.split.SegmentHistory.Time=this.split.SegmentHistory.Time.filter((function(a){return a["@_id"]!=t["@_id"]}))),(null===(o=this.split)||void 0===o?void 0:o.BestSegmentTime)&&(this.history[0].RealTime&&(this.split.BestSegmentTime={RealTime:this.history[0].RealTime}),this.history[0].GameTime&&(this.split.BestSegmentTime.GameTime=this.history[0].GameTime),this.$nextTick((function(){var n;e(),c.$bvToast.toast("Attempt #".concat(t["@_id"]," has been deleted"),{title:null===(n=c.split)||void 0===n?void 0:n.Name,autoHideDelay:5e3,appendToast:!1,variant:"success"})})))}},{key:"deleteAttempt",value:function(t){var e=this;j.a.$emit("openConfirm","Delete attempt #".concat(t["@_id"],"?"),(function(){Object(T.b)((function(n){return e.doDeleteAttempt(t,n)})),j.a.$emit("closeConfirm")}))}}]),n}(Object(h.mixins)(y.default));S([Object(h.Prop)()],M.prototype,"split",void 0);var x=M=S([h.Component],M),w=(n(367),n(65)),component=Object(w.a)(x,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-modal",{ref:t.modalRef,staticClass:"text-center",attrs:{title:"Fix golds","hide-footer":"",centered:"",size:"lg"},on:{hidden:t.destroyModal}},[t.split?n("div",{staticClass:"text-center",staticStyle:{"max-height":"80vh",overflow:"auto"}},[n("h3",{staticClass:"mb-3"},[t._v("Best attempts for split "),n("em",[t._v(t._s(t.split.Name))])]),t._v(" "),n("b-table",{attrs:{small:"",fields:t.fields,items:t.history,responsive:"sm"},scopedSlots:t._u([{key:"cell(time)",fn:function(data){return[t._v("\n        "+t._s(t.formatTime(data.item))+"\n      ")]}},{key:"cell(actions)",fn:function(data){return[n("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip:hover",arg:"hover"}],attrs:{pill:"",variant:"danger",size:"sm",title:"Delete this attempt"},on:{click:function(e){return t.deleteAttempt(data.item)}}},[n("font-awesome-icon",{attrs:{icon:"trash"}})],1)]}}],null,!1,1991413569)})],1):t._e()])}),[],!1,null,"333df090",null);e.default=component.exports}}]);