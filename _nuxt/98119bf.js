(window.webpackJsonp=window.webpackJsonp||[]).push([[33,11,12,25,28,40],{280:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r=new(n(9).default)},281:function(t,e,n){"use strict";var r=n(9).default.observable({hasGameTime:!1,useRealTime:!1,splitFileIsModified:!1,PB:null,autoSplitterSettings:null});e.a={get state(){return r}}},282:function(t,e,n){"use strict";n.d(e,"d",(function(){return r})),n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return l}));n(11),n(163),n(15),n(127),n(290),n(291),n(292);var r=function(time){var t=time.match(/([0-9]+):([0-9]+):([0-9.]+)/);if(!t)return 0;var e=+t[1],n=+t[2];return+t[3]+60*n+3600*e},o=function(time){var t=time.match(/([0-9]+):([0-9]+):([0-9.]+)/);if(!t)return"";var e=+t[1],n=+t[2],r=+t[3],o="";return e&&(o+="".concat(e,"h")),n&&(o+="".concat(n,"m")),o+="".concat(r<10?"0":"").concat(r.toFixed(2),"s")},c=function(time){var t="",e=!0;return time>=3600&&(e=!1,t+="".concat(Math.floor(time/3600),"h"),time%=3600),time>=60&&(e=!1,t+="".concat(Math.floor(time/60),"m"),time%=60),t+="".concat(!e&&time<10?"0":"").concat(Math.abs(+time.toFixed(2)),"s")},l=function(time){var t="",e=Math.trunc(time/3600).toFixed();t+="".concat(e.padStart(2,"0"),":"),time%=3600;var n=Math.trunc(time/60).toFixed();t+="".concat(n.padStart(2,"0"),":"),time%=60;var r=Math.trunc(time),o=(time-r).toFixed(7).substring(2);return t+="".concat(r.toFixed().padStart(2,"0"),".").concat(o.padEnd(7,"0"))}},283:function(t,e,n){"use strict";n.d(e,"c",(function(){return l})),n.d(e,"b",(function(){return f})),n.d(e,"a",(function(){return d})),n.d(e,"d",(function(){return m}));n(16),n(1),n(3),n(101),n(102);var r=n(281),o=n(282),c=n(285),l=function(t){return(null==t?void 0:t.GameTime)&&!r.a.state.useRealTime?t.GameTime:(null==t?void 0:t.RealTime)||null},f=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=0;return t.map((function(t){var r;return(r=!0===e?t.BestSegmentTime.GameTime:!1===e?t.BestSegmentTime.RealTime:l(t.BestSegmentTime))&&(n+=Object(o.d)(r)),n}))},d=function(t){return t.reduce((function(t,e){return e.SplitTimes.SplitTime.forEach((function(s){t.includes(s["@_name"])||t.push(s["@_name"])})),t}),[])},m=function(t){r.a.state.splitFileIsModified=t,t?Object(c.b)():Object(c.c)()}},284:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return c}));var r=n(280),o=function(t){r.a.$emit("startLoading",(function(){t(),r.a.$emit("stopLoading")}))},c=function(t){r.a.$emit("startLoading",(function(){t((function(){return r.a.$emit("stopLoading")}))}))}},285:function(t,e,n){"use strict";n.d(e,"b",(function(){return l})),n.d(e,"c",(function(){return f})),n.d(e,"a",(function(){return d}));var r=n(23),o=n(22),c=(n(1),function(t){t.preventDefault(),t.returnValue=""}),l=function(){window.addEventListener("beforeunload",c)},f=function(){window.removeEventListener("beforeunload",c)},d=Object(r.a)((function t(){var e=this;Object(o.a)(this,t),this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(t,n){e.reject=n,e.resolve=t}))}))},287:function(t,e,n){var r=n(14),o=n(66),c=n(28),l=n(164),f=n(41),d=r(l),m=r("".slice),h=Math.ceil,v=function(t){return function(e,n,r){var l,v,O=c(f(e)),T=o(n),S=O.length,_=void 0===r?" ":c(r);return T<=S||""==_?O:((v=d(_,h((l=T-S)/_.length))).length>l&&(v=m(v,0,l)),t?O+v:v+O)}};t.exports={start:v(!1),end:v(!0)}},288:function(t,e,n){var r=n(55);t.exports=/Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(r)},290:function(t,e,n){var r=n(13),o=Math.ceil,c=Math.floor;r({target:"Math",stat:!0},{trunc:function(t){return(t>0?c:o)(t)}})},291:function(t,e,n){"use strict";var r=n(13),o=n(287).start;r({target:"String",proto:!0,forced:n(288)},{padStart:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},292:function(t,e,n){"use strict";var r=n(13),o=n(287).end;r({target:"String",proto:!0,forced:n(288)},{padEnd:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},294:function(t,e,n){"use strict";n.r(e);var r=n(22),o=n(23),c=n(60),l=n(100),f=n(44),d=n(40),m=(n(6),n(1),n(162),n(279)),h=n(280);function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var O=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},T=function(t){Object(c.a)(n,t);var e=v(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).modalRef="BaseModal",t}return Object(o.a)(n,[{key:"destroyModal",value:function(){h.a.$emit("closeModal")}},{key:"hideModal",value:function(){var t=this.$refs[this.modalRef];t&&t.hide()}},{key:"mounted",value:function(){var t=this.$refs[this.modalRef];t&&t.show()}}]),n}(m.Vue),S=T=O([m.Component],T),_=n(65),component=Object(_.a)(S,undefined,undefined,!1,null,null,null);e.default=component.exports},295:function(t,e,n){"use strict";var r;n.d(e,"a",(function(){return r})),function(t){t[t.PING=0]="PING",t[t.DELETE_ATTEMPT_BEFORE_NUMBER=1]="DELETE_ATTEMPT_BEFORE_NUMBER",t[t.SEG_TIME_ARRAY_TO_SECONDS=2]="SEG_TIME_ARRAY_TO_SECONDS",t[t.GOLD_COORDINATES_FROM_SECONDS_ARRAY=3]="GOLD_COORDINATES_FROM_SECONDS_ARRAY",t[t.XML_PARSE_TEXT=4]="XML_PARSE_TEXT",t[t.MERGE_SPLIT_INTO_NEXT_ONE=5]="MERGE_SPLIT_INTO_NEXT_ONE",t[t.UPDATE_STORE_DATA=6]="UPDATE_STORE_DATA",t[t.GET_PB=7]="GET_PB",t[t.GENERATE_SPLIT_DETAIL=8]="GENERATE_SPLIT_DETAIL",t[t.MOVE_TIME_TO_OTHER_SPLIT=9]="MOVE_TIME_TO_OTHER_SPLIT"}(r||(r={}))},296:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));n(1),n(37);var r=n(285),o=new function(){return new Worker(n.p+"71ba0db.worker.js")},c={};o.addEventListener("message",(function(t){var e=c[t.data.magic];e?(delete c[t.data.magic],e.resolve(t.data.message)):console.error("Got message from worker with no matching operation: ".concat(t.data.magic))}));var l=function(t){var e;do{e=btoa((1e10*Math.random()).toString())}while(c[e]);c[e]=new r.a;for(var n=arguments.length,l=new Array(n>1?n-1:0),f=1;f<n;f++)l[f-1]=arguments[f];return o.postMessage({message:{instruction:t,args:l},magic:e}),c[e].promise}},299:function(t,e,n){var content=n(305);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(80).default)("f4f6c818",content,!0,{sourceMap:!1})},300:function(t,e,n){"use strict";n.r(e);n(162);var r=n(22),o=n(23),c=n(60),l=n(100),f=n(44),d=n(40),m=(n(6),n(1),n(127),n(220),n(279));function h(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var v=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},O=function(t){Object(c.a)(n,t);var e=h(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).hours=0,t.minutes=0,t.seconds=0,t}return Object(o.a)(n,[{key:"outputInSeconds",get:function(){return 3600*this.hours+60*this.minutes+this.seconds}},{key:"onInputChange",value:function(){this.$emit("input",this.outputInSeconds)}},{key:"mounted",value:function(){var time=this.value;time>3600&&(this.hours=Math.floor(time/3600),time%=3600),time>60&&(this.minutes=Math.floor(time/60),time%=60),this.seconds=+time.toFixed(2)}}]),n}(m.Vue);v([Object(m.Prop)({type:Number})],O.prototype,"value",void 0),v([Object(m.Watch)("outputInSeconds")],O.prototype,"onInputChange",null);var T=O=v([m.Component],O),S=(n(304),n(65)),component=Object(S.a)(T,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-form",{staticClass:"time-form",attrs:{inline:""}},[n("b-row",[n("b-col",{staticClass:"column",attrs:{cols:"4"}},[n("b-input-group",{attrs:{append:"h"}},[n("b-form-input",{attrs:{placeholder:"Hours",type:"number",step:"1",debounce:"500"},model:{value:t.hours,callback:function(e){t.hours=t._n(e)},expression:"hours"}})],1)],1),t._v(" "),n("b-col",{staticClass:"column",attrs:{cols:"4"}},[n("b-input-group",{attrs:{append:"m"}},[n("b-form-input",{attrs:{placeholder:"Minutes",type:"number",step:"1",debounce:"500"},model:{value:t.minutes,callback:function(e){t.minutes=t._n(e)},expression:"minutes"}})],1)],1),t._v(" "),n("b-col",{staticClass:"column",attrs:{cols:"4"}},[n("b-input-group",{attrs:{append:"s"}},[n("b-form-input",{attrs:{placeholder:"Seconds",type:"number",step:"0.01",debounce:"500"},model:{value:t.seconds,callback:function(e){t.seconds=t._n(e)},expression:"seconds"}})],1)],1)],1)],1)}),[],!1,null,"fafb75a0",null);e.default=component.exports},304:function(t,e,n){"use strict";n(299)},305:function(t,e,n){var r=n(79)(!1);r.push([t.i,".column[data-v-fafb75a0]{padding-left:.25rem;padding-right:.25rem}.time-form[data-v-fafb75a0]{padding-left:1rem;padding-right:1rem}",""]),t.exports=r},375:function(t,e,n){"use strict";n.r(e);n(162);var r=n(22),o=n(23),c=n(60),l=n(100),f=n(44),d=n(40),m=(n(6),n(1),n(15),n(282)),h=n(283),v=n(279),O=n(284),T=n(296),S=n(295),_=n(294),E=n(309),y=n.n(E);function R(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var j=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},M=function(t){Object(c.a)(n,t);var e=R(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).modalRef="MoveTimeModal",t.transferTime=0,t.transferSplit={id:-1,name:""},t}return Object(o.a)(n,[{key:"segmentGold",get:function(){var t=Object(h.c)(this.currentSplit.BestSegmentTime);return Object(m.d)(t||"0:0:0.0")}},{key:"splitOptions",get:function(){var t,e,n={name:"(next) ".concat(null===(t=this.nextSplit)||void 0===t?void 0:t.Name),id:this.currentSplitIndex+1},r={name:"(prev) ".concat(null===(e=this.previousSplit)||void 0===e?void 0:e.Name),id:this.currentSplitIndex-1};if(0==this.currentSplitIndex)return[n];var o=this.splits.length-1;return this.currentSplitIndex==o?[r]:[r,n]}},{key:"timeValid",get:function(){return this.transferTime>0&&this.transferTime<=this.segmentGold&&this.transferSplit.id>=0}},{key:"invalidTimeTooltip",get:function(){return 0==this.transferTime?"Please provide a time":this.transferSplit.id<0?"Please select a split to transfer time to":this.transferTime>this.segmentGold?"You cannot transfer more than ".concat(Object(m.b)(this.segmentGold)):""}},{key:"currentSplit",get:function(){return this.splits[this.currentSplitIndex]}},{key:"nextSplit",get:function(){return this.splits[this.currentSplitIndex+1]}},{key:"previousSplit",get:function(){return this.splits[this.currentSplitIndex-1]}},{key:"chosenSplitFunction",value:function(){this.transferSplit.id===this.currentSplitIndex+1&&this.doMoveTime(this.currentSplit,this.nextSplit),this.transferSplit.id===this.currentSplitIndex-1&&this.doMoveTime(this.currentSplit,this.previousSplit)}},{key:"doMoveTime",value:function(t,e){var n=this;Object(O.b)((function(r){Object(T.a)(S.a.MOVE_TIME_TO_OTHER_SPLIT,t,e,n.transferTime).then((function(r){Object(h.d)(!0),Object.assign(t,r[0]),Object.assign(e,r[1]),n.$bvToast.toast("Moved ".concat(Object(m.b)(n.transferTime)," from ").concat(t.Name," to ").concat(e.Name),{title:"Times changed",autoHideDelay:5e3,appendToast:!1,variant:"success"})})).finally((function(){return r()}))})),this.destroyModal()}}]),n}(Object(v.mixins)(_.default));j([Object(v.Prop)()],M.prototype,"splits",void 0),j([Object(v.Prop)()],M.prototype,"currentSplitIndex",void 0);var x=M=j([Object(v.Component)({components:{Multiselect:y.a}})],M),I=n(65),component=Object(I.a)(x,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-modal",{ref:t.modalRef,attrs:{title:"Move time between splits","hide-footer":"",centered:"",size:"lg"},on:{hidden:t.destroyModal}},[n("div",{staticClass:"text-center"},[n("b-form-group",{attrs:{label:"Transfer time to:"}},[n("multiselect",{attrs:{options:t.splitOptions,placeholder:"Pick a split","track-by":"id",label:"name"},model:{value:t.transferSplit,callback:function(e){t.transferSplit=e},expression:"transferSplit"}})],1),t._v(" "),n("b-form-group",{attrs:{label:"Amount to transfer:"}},[n("time-selector",{model:{value:t.transferTime,callback:function(e){t.transferTime=e},expression:"transferTime"}})],1),t._v(" "),n("div",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"d-inline-block",attrs:{title:t.invalidTimeTooltip}},[n("b-button",{staticClass:"mt-2 mb-2 text-center",attrs:{variant:"success",disabled:!t.timeValid},on:{click:t.chosenSplitFunction}},[t._v("\n        Confirm\n      ")])],1)],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TimeSelector:n(300).default})}}]);