(window.webpackJsonp=window.webpackJsonp||[]).push([[22,9,18,25],{306:function(t,e,n){"use strict";n.d(e,"d",(function(){return r})),n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return f}));n(11),n(166),n(14),n(132),n(316),n(317),n(318);var r=function(time){var t=time.match(/([0-9]+):([0-9]+):([0-9.]+)/);if(!t)return 0;var e=+t[1],n=+t[2];return+t[3]+60*n+3600*e},o=function(time){var t=time.match(/([0-9]+):([0-9]+):([0-9.]+)/);if(!t)return"";var e=+t[1],n=+t[2],r=+t[3],o="";return e&&(o+="".concat(e,"h")),n&&(o+="".concat(n,"m")),o+="".concat(r<10?"0":"").concat(r.toFixed(2),"s")},c=function(time){var t="",e=!0;return time>=3600&&(e=!1,t+="".concat(Math.floor(time/3600),"h"),time%=3600),time>=60&&(e=!1,t+="".concat(Math.floor(time/60),"m"),time%=60),t+="".concat(!e&&time<10?"0":"").concat(Math.abs(+time.toFixed(2)),"s")},f=function(time){var t="",e=Math.trunc(time/3600).toFixed();t+="".concat(e.padStart(2,"0"),":"),time%=3600;var n=Math.trunc(time/60).toFixed();t+="".concat(n.padStart(2,"0"),":"),time%=60;var r=Math.trunc(time),o=(time-r).toFixed(7).substring(2);return t+="".concat(r.toFixed().padStart(2,"0"),".").concat(o.padEnd(7,"0"))}},307:function(t,e,n){"use strict";var r=n(8).default.observable({savedSettings:{},hasGameTime:!1,useRealTime:!1,splitFileIsModified:!1,PB:null,autoSplitterSettings:null});e.a={get state(){return r}}},308:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r=new(n(8).default)},309:function(t,e,n){"use strict";n.d(e,"c",(function(){return f})),n.d(e,"b",(function(){return l})),n.d(e,"a",(function(){return d})),n.d(e,"d",(function(){return m}));n(15),n(1),n(3),n(85),n(109);var r=n(307),o=n(306),c=n(310),f=function(t){return(null==t?void 0:t.GameTime)&&!r.a.state.useRealTime?t.GameTime:(null==t?void 0:t.RealTime)||null},l=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=0;return t.map((function(t){var r;return(r=!0===e?t.BestSegmentTime.GameTime:!1===e?t.BestSegmentTime.RealTime:f(t.BestSegmentTime))&&(n+=Object(o.d)(r)),n}))},d=function(t){return t.reduce((function(t,e){return e.SplitTimes.SplitTime.forEach((function(s){t.includes(s["@_name"])||t.push(s["@_name"])})),t}),[])},m=function(t){r.a.state.splitFileIsModified=t,t?Object(c.c)():Object(c.d)()}},310:function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return l})),n.d(e,"d",(function(){return d})),n.d(e,"a",(function(){return m}));var r=n(24),o=n(23),c=(n(1),function(input){return null==input?[]:Array.isArray(input)?input:[input]}),f=function(t){t.preventDefault(),t.returnValue=""},l=function(){window.addEventListener("beforeunload",f)},d=function(){window.removeEventListener("beforeunload",f)},m=Object(r.a)((function t(){var e=this;Object(o.a)(this,t),this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(t,n){e.reject=n,e.resolve=t}))}))},311:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(308),o=function(t){r.a.$emit("startLoading",t)}},313:function(t,e,n){var r=n(13),o=n(66),c=n(30),f=n(167),l=n(42),d=r(f),m=r("".slice),v=Math.ceil,h=function(t){return function(e,n,r){var f,h,y=c(l(e)),j=o(n),O=y.length,R=void 0===r?" ":c(r);return j<=O||""==R?y:((h=d(R,v((f=j-O)/R.length))).length>f&&(h=m(h,0,f)),t?y+h:h+y)}};t.exports={start:h(!1),end:h(!0)}},314:function(t,e,n){var r=n(56);t.exports=/Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(r)},316:function(t,e,n){n(9)({target:"Math",stat:!0},{trunc:n(229)})},317:function(t,e,n){"use strict";var r=n(9),o=n(313).start;r({target:"String",proto:!0,forced:n(314)},{padStart:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},318:function(t,e,n){"use strict";var r=n(9),o=n(313).end;r({target:"String",proto:!0,forced:n(314)},{padEnd:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},325:function(t,e,n){"use strict";n.r(e);var r=n(23),o=n(24),c=n(60),f=n(108),l=n(46),d=n(41),m=(n(6),n(1),n(165),n(305)),v=n(308);function h(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(l.a)(t);if(e){var o=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(f.a)(this,n)}}var y=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},j=function(t){Object(c.a)(n,t);var e=h(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).modalRef="BaseModal",t}return Object(o.a)(n,[{key:"destroyModal",value:function(){v.a.$emit("closeModal")}},{key:"hideModal",value:function(){var t=this.$refs[this.modalRef];t&&t.hide()}},{key:"mounted",value:function(){var t=this.$refs[this.modalRef];t&&t.show()}}]),n}(m.Vue),O=j=y([m.Component],j),R=n(65),component=Object(R.a)(O,undefined,undefined,!1,null,null,null);e.default=component.exports},404:function(t,e,n){"use strict";n.r(e);n(165);var r=n(23),o=n(24),c=n(60),f=n(108),l=n(46),d=n(41),m=(n(6),n(1),n(36),n(3),n(133),n(309)),v=n(305),h=n(325),y=n(311);function j(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(l.a)(t);if(e){var o=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(f.a)(this,n)}}var O=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},R=function(t){Object(c.a)(n,t);var e=j(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).modalRef="ComparisonRenameModal",t.newComparisonName="",t}return Object(o.a)(n,[{key:"newNameInput",get:function(){return""===this.newComparisonName.trim()}},{key:"renameComparison",value:function(){var t=this;Object(y.a)((function(){t.segments.forEach((function(e){var n=e.SplitTimes.SplitTime.find((function(s){return s["@_name"]===t.oldComparisonName}));n&&(n["@_name"]=t.newComparisonName)})),Object(m.d)(!0),t.applyCallback()}))}},{key:"applyCallback",value:function(){this.callback(this.newComparisonName),this.hideModal()}}]),n}(Object(v.mixins)(h.default));O([Object(v.Prop)()],R.prototype,"segments",void 0),O([Object(v.Prop)()],R.prototype,"oldComparisonName",void 0),O([Object(v.Prop)()],R.prototype,"callback",void 0);var w=R=O([v.Component],R),C=n(65),component=Object(C.a)(w,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("b-modal",{ref:t.modalRef,staticClass:"text-center",attrs:{title:"Rename comparison","hide-footer":"",centered:"",size:"lg"},on:{hidden:t.destroyModal}},[e("div",{staticClass:"text-center",staticStyle:{"max-height":"80vh",overflow:"auto"}},[e("h4",[t._v('Rename "'+t._s(t.oldComparisonName)+'" to:')]),t._v(" "),e("b-form-input",{staticClass:"mt-2 mb-2",attrs:{required:""},model:{value:t.newComparisonName,callback:function(e){t.newComparisonName=e},expression:"newComparisonName"}}),t._v(" "),e("b-button",{staticClass:"mb-1",attrs:{variant:"success",disabled:t.newNameInput},on:{click:t.renameComparison}},[t._v("\n        Confirm\n      ")])],1)])}),[],!1,null,null,null);e.default=component.exports}}]);