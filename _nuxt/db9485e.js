(window.webpackJsonp=window.webpackJsonp||[]).push([[35,8,16,24,31,34,47,52],{324:function(t,e,n){"use strict";n.d(e,"e",(function(){return r})),n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return o})),n.d(e,"d",(function(){return l})),n.d(e,"a",(function(){return f}));n(11),n(179),n(14),n(140),n(332),n(333),n(334);var r=function(time){var t=time.match(/([0-9]+):([0-9]+):([0-9.]+)/);if(!t)return 0;var e=+t[1],n=+t[2];return+t[3]+60*n+3600*e},c=function(time){var t=time.match(/([0-9]+):([0-9]+):([0-9.]+)/);if(!t)return"";var e=+t[1],n=+t[2],r=+t[3],c="";return e&&(c+="".concat(e,"h")),n&&(c+="".concat(n,"m")),c+="".concat(r<10?"0":"").concat(r.toFixed(2),"s")},o=function(time){var t="",e=!0;return time>=3600&&(e=!1,t+="".concat(Math.floor(time/3600),"h"),time%=3600),time>=60&&(e=!1,t+="".concat(Math.floor(time/60),"m"),time%=60),t+="".concat(!e&&time<10?"0":"").concat(Math.abs(+time.toFixed(2)),"s")},l=function(time){var t="",e=Math.trunc(time/3600).toFixed();t+="".concat(e.padStart(2,"0"),":"),time%=3600;var n=Math.trunc(time/60).toFixed();t+="".concat(n.padStart(2,"0"),":"),time%=60;var r=Math.trunc(time),c=(time-r).toFixed(7).substring(2);return t+="".concat(r.toFixed().padStart(2,"0"),".").concat(c.padEnd(7,"0"))},f=function(t,e){var n=t.split(" "),r=n[0].split("/");return"".concat(r[2],"-").concat(r[0],"-").concat(r[1]).concat(e?" at ":" ").concat(n[1])}},325:function(t,e,n){"use strict";var r=n(8).default.observable({savedSettings:{},hasGameTime:!1,useRealTime:!1,splitFileIsModified:!1,PB:null,autoSplitterSettings:null,filters:[],filteredAttempts:[]});e.a={get state(){return r}}},326:function(t,e,n){"use strict";n.d(e,"c",(function(){return l})),n.d(e,"b",(function(){return f})),n.d(e,"a",(function(){return d})),n.d(e,"d",(function(){return v}));n(15),n(1),n(3),n(68),n(113);var r=n(325),c=n(324),o=n(330),l=function(t){return(null==t?void 0:t.GameTime)&&!r.a.state.useRealTime?t.GameTime:(null==t?void 0:t.RealTime)||null},f=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=0;return t.map((function(t){var r;return(r=!0===e?t.BestSegmentTime.GameTime:!1===e?t.BestSegmentTime.RealTime:l(t.BestSegmentTime))&&(n+=Object(c.e)(r)),n}))},d=function(t){return t.reduce((function(t,e){return e.SplitTimes.SplitTime.forEach((function(s){t.includes(s["@_name"])||t.push(s["@_name"])})),t}),[])},v=function(t){r.a.state.splitFileIsModified=t,t?Object(o.c)():Object(o.d)()}},327:function(t,e,n){"use strict";var r=n(13),c=n(69),o=n(30),l=n(180),f=n(42),d=r(l),v=r("".slice),h=Math.ceil,m=function(t){return function(e,n,r){var l,m,y=o(f(e)),O=c(n),j=y.length,x=void 0===r?" ":o(r);return O<=j||""===x?y:((m=d(x,h((l=O-j)/x.length))).length>l&&(m=v(m,0,l)),t?y+m:m+y)}};t.exports={start:m(!1),end:m(!0)}},328:function(t,e,n){"use strict";var r=n(59);t.exports=/Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(r)},329:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r=new(n(8).default)},330:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return f})),n.d(e,"d",(function(){return d})),n.d(e,"a",(function(){return v}));var r=n(29),c=n(28),o=(n(1),function(input){return null==input?[]:Array.isArray(input)?input:[input]}),l=function(t){t.preventDefault(),t.returnValue=""},f=function(){window.addEventListener("beforeunload",l)},d=function(){window.removeEventListener("beforeunload",l)},v=Object(r.a)((function t(){var e=this;Object(c.a)(this,t),this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(t,n){e.reject=n,e.resolve=t}))}))},332:function(t,e,n){"use strict";n(9)({target:"Math",stat:!0},{trunc:n(244)})},333:function(t,e,n){"use strict";var r=n(9),c=n(327).start;r({target:"String",proto:!0,forced:n(328)},{padStart:function(t){return c(this,t,arguments.length>1?arguments[1]:void 0)}})},334:function(t,e,n){"use strict";var r=n(9),c=n(327).end;r({target:"String",proto:!0,forced:n(328)},{padEnd:function(t){return c(this,t,arguments.length>1?arguments[1]:void 0)}})},340:function(t,e,n){var content=n(350);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(89).default)("4c34ea26",content,!0,{sourceMap:!1})},343:function(t,e,n){"use strict";n.r(e);var r=n(28),c=n(29),o=n(62),l=n(112),f=n(46),d=n(25),v=(n(6),n(1),n(178),n(323)),h=n(329);function m(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var c=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var y=function(t,e,n,desc){var r,c=arguments.length,o=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(o=(c<3?r(o):c>3?r(e,n,o):r(e,n))||o);return c>3&&o&&Object.defineProperty(e,n,o),o},O=function(t){Object(o.a)(n,t);var e=m(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).modalRef="BaseModal",t}return Object(c.a)(n,[{key:"destroyModal",value:function(){h.a.$emit("closeModal")}},{key:"hideModal",value:function(){var t=this.$refs[this.modalRef];t&&t.hide()}},{key:"mounted",value:function(){var t=this.$refs[this.modalRef];t&&t.show()}}]),n}(v.Vue),j=O=y([v.Component],O),x=n(67),component=Object(x.a)(j,undefined,undefined,!1,null,null,null);e.default=component.exports},346:function(t,e,n){"use strict";n.r(e);n(178);var r=n(28),c=n(29),o=n(62),l=n(112),f=n(46),d=n(25),v=(n(6),n(1),n(140),n(181),n(323));function h(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var c=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var m=function(t,e,n,desc){var r,c=arguments.length,o=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(o=(c<3?r(o):c>3?r(e,n,o):r(e,n))||o);return c>3&&o&&Object.defineProperty(e,n,o),o},y=function(t){Object(o.a)(n,t);var e=h(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).hours=0,t.minutes=0,t.seconds=0,t}return Object(c.a)(n,[{key:"outputInSeconds",get:function(){return 3600*this.hours+60*this.minutes+this.seconds}},{key:"onInputChange",value:function(){this.$emit("input",this.outputInSeconds)}},{key:"mounted",value:function(){var time=this.value;time>3600&&(this.hours=Math.floor(time/3600),time%=3600),time>60&&(this.minutes=Math.floor(time/60),time%=60),this.seconds=+time.toFixed(2)}}]),n}(v.Vue);m([Object(v.Prop)({type:Number})],y.prototype,"value",void 0),m([Object(v.Watch)("outputInSeconds")],y.prototype,"onInputChange",null);var O=y=m([v.Component],y),j=(n(349),n(67)),component=Object(j.a)(O,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("b-form",{staticClass:"time-form",attrs:{inline:""}},[e("b-row",[e("b-col",{staticClass:"column",attrs:{cols:"4"}},[e("b-input-group",{attrs:{append:"h"}},[e("b-form-input",{attrs:{placeholder:"Hours",type:"number",step:"1",debounce:"500"},model:{value:t.hours,callback:function(e){t.hours=t._n(e)},expression:"hours"}})],1)],1),t._v(" "),e("b-col",{staticClass:"column",attrs:{cols:"4"}},[e("b-input-group",{attrs:{append:"m"}},[e("b-form-input",{attrs:{placeholder:"Minutes",type:"number",step:"1",debounce:"500"},model:{value:t.minutes,callback:function(e){t.minutes=t._n(e)},expression:"minutes"}})],1)],1),t._v(" "),e("b-col",{staticClass:"column",attrs:{cols:"4"}},[e("b-input-group",{attrs:{append:"s"}},[e("b-form-input",{attrs:{placeholder:"Seconds",type:"number",step:"0.01",debounce:"500"},model:{value:t.seconds,callback:function(e){t.seconds=t._n(e)},expression:"seconds"}})],1)],1)],1)],1)}),[],!1,null,"fafb75a0",null);e.default=component.exports},349:function(t,e,n){"use strict";n(340)},350:function(t,e,n){var r=n(88)((function(i){return i[1]}));r.push([t.i,".column[data-v-fafb75a0]{padding-left:.25rem;padding-right:.25rem}.time-form[data-v-fafb75a0]{padding-left:1rem;padding-right:1rem}",""]),r.locals={},t.exports=r},365:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return c}));var r=-1,c=-2},424:function(t,e,n){"use strict";n.r(e);n(178);var r=n(28),c=n(29),o=n(62),l=n(112),f=n(46),d=n(25),v=(n(6),n(1),n(14),n(182),n(323)),h=n(324),filter=n(365),m=n(325);function y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var c=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var O=function(t,e,n,desc){var r,c=arguments.length,o=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(o=(c<3?r(o):c>3?r(e,n,o):r(e,n))||o);return c>3&&o&&Object.defineProperty(e,n,o),o},j=function(t){Object(o.a)(n,t);var e=y(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).filterData=m.a.state.filters[t.filterIndex-1],t.globalFilters=m.a.state.filters,t}return Object(c.a)(n,[{key:"displayText",get:function(){return this.filterData.details?"Active filter: ".concat(this.filterData.details.label,", between ").concat(Object(h.c)(this.filterData.timeMin)," and ").concat(Object(h.c)(this.filterData.timeMax)):""}},{key:"deleteFilter",value:function(){this.filterData={details:{label:"",index:filter.a},timeMin:0,timeMax:0,attempts:[]},this.globalFilters.splice(this.filterIndex-1,1)}}]),n}(v.Vue);O([Object(v.Prop)()],j.prototype,"filterIndex",void 0);var x=j=O([v.Component],j),R=n(67),component=Object(R.a)(x,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"text-center"},[e("b-row",[e("b-col",{staticClass:"mt-auto",attrs:{cols:"9"}},[e("h5",[t._v(t._s(t.displayText))])]),t._v(" "),e("b-col",{attrs:{cols:"3"}},[e("b-button",{staticClass:"mt-2",attrs:{variant:"danger"},on:{click:t.deleteFilter}},[t._v("Delete filter")])],1)],1),t._v(" "),e("hr")],1)}),[],!1,null,null,null);e.default=component.exports},425:function(t,e,n){"use strict";n.r(e);n(178);var r=n(28),c=n(29),o=n(62),l=n(112),f=n(46),d=n(25),v=(n(6),n(1),n(3),n(323)),h=n(326),m=n(324),filter=n(365),y=n(325),O=n(342),j=n.n(O);function x(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var c=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var R=function(t,e,n,desc){var r,c=arguments.length,o=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(o=(c<3?r(o):c>3?r(e,n,o):r(e,n))||o);return c>3&&o&&Object.defineProperty(e,n,o),o},M=function(t){Object(o.a)(n,t);var e=x(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).globalFilters=y.a.state.filters,t.filterData={details:{label:"",index:filter.a},timeMin:0,timeMax:0,attempts:[]},t}return Object(c.a)(n,[{key:"filterLabels",get:function(){var t=[{index:filter.b,label:"Global"}];return this.parsedSplits.Run.Segments.Segment.forEach((function(e,n){return t.push({index:n,label:e.Name})})),t}},{key:"formError",get:function(){var t,e;return(null===(t=this.filterData.details)||void 0===t?void 0:t.index)==filter.a||null==(null===(e=this.filterData.details)||void 0===e?void 0:e.index)?"You need to select a split.":this.filterData.timeMin==this.filterData.timeMax?"You need to select a time range.":""}},{key:"filterListSelect",get:function(){var t,e,n=null===(t=this.filterData.details)||void 0===t?void 0:t.index,r=this.parsedSplits.Run.AttemptHistory.Attempt;if(null==n)return[];if(n==filter.b)return this.filterList(r);if(n>filter.b){var c=null===(e=this.parsedSplits.Run.Segments.Segment[n].SegmentHistory)||void 0===e?void 0:e.Time;if(c)return this.filterList(c)}return[]}},{key:"filterList",value:function(t){var e=[],n=this.filterData.timeMin,r=this.filterData.timeMax;return t.forEach((function(t){var time=Object(h.c)(t);if(null!=time){var c=Object(m.e)(time);c>n&&c<r&&t["@_id"]>0&&e.push(t["@_id"])}})),e}},{key:"activateFilter",value:function(){if(this.filterData.timeMin>this.filterData.timeMax){var t=[this.filterData.timeMax,this.filterData.timeMin];this.filterData.timeMin=t[0],this.filterData.timeMax=t[1]}this.filterData.attempts=this.filterListSelect,this.globalFilters.push(this.filterData),this.filterData={details:{label:"",index:filter.a},timeMin:0,timeMax:0,attempts:[]}}}]),n}(v.Vue);R([Object(v.Prop)()],M.prototype,"parsedSplits",void 0);var _=M=R([Object(v.Component)({components:{Multiselect:j.a}})],M),D=n(67),component=Object(D.a)(_,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"text-center"},[e("b-row",{staticClass:"mb-3"},[e("b-col",{staticClass:"mt-2",attrs:{cols:"3"}},[t._v("\n      Only display runs with a\n    ")]),t._v(" "),e("b-col",{attrs:{cols:"7"}},[e("multiselect",{attrs:{options:t.filterLabels,"track-by":"index",label:"label"},model:{value:t.filterData.details,callback:function(e){t.$set(t.filterData,"details",e)},expression:"filterData.details"}})],1),t._v(" "),e("b-col",{staticClass:"mt-2",attrs:{cols:"2"}},[t._v("\n      time between\n    ")])],1),t._v(" "),e("b-row",{staticClass:"mt-3"},[e("b-col",{attrs:{cols:"5"}},[e("time-selector",{model:{value:t.filterData.timeMin,callback:function(e){t.$set(t.filterData,"timeMin",t._n(e))},expression:"filterData.timeMin"}})],1),t._v(" "),e("b-col",{staticClass:"mt-2",attrs:{cols:"2"}},[t._v("\n      and\n    ")]),t._v(" "),e("b-col",{attrs:{cols:"5"}},[e("time-selector",{model:{value:t.filterData.timeMax,callback:function(e){t.$set(t.filterData,"timeMax",t._n(e))},expression:"filterData.timeMax"}})],1)],1),t._v(" "),e("div",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{title:t.formError}},[e("b-button",{staticClass:"mt-2",attrs:{variant:"success",disabled:""!==t.formError},on:{click:t.activateFilter}},[t._v("\n      Add filter\n    ")])],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TimeSelector:n(346).default})},469:function(t,e,n){"use strict";n.r(e);n(178);var r=n(28),c=n(29),o=n(62),l=n(112),f=n(46),d=n(25),v=(n(6),n(1),n(15),n(3),n(2),n(68),n(113),n(323)),h=n(325),m=n(343);function y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var c=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var O=function(t,e,n,desc){var r,c=arguments.length,o=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(o=(c<3?r(o):c>3?r(e,n,o):r(e,n))||o);return c>3&&o&&Object.defineProperty(e,n,o),o},j=function(t){Object(o.a)(n,t);var e=y(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).modalRef="FilterModal",t.filters=h.a.state.filters,t}return Object(c.a)(n,[{key:"mashFilters",value:function(){var t=this.parsedSplits.Run.AttemptHistory.Attempt.map((function(t){return t["@_id"]}));this.filters.forEach((function(filter){return t=t.filter((function(t){var e;return null===(e=filter.attempts)||void 0===e?void 0:e.includes(t)}))})),h.a.state.filteredAttempts=t}}]),n}(Object(v.mixins)(m.default));O([Object(v.Prop)()],j.prototype,"parsedSplits",void 0),O([Object(v.Watch)("filters")],j.prototype,"mashFilters",null);var x=j=O([v.Component],j),R=n(67),component=Object(R.a)(x,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("b-modal",{ref:t.modalRef,staticClass:"text-center",attrs:{title:"Filter runs","hide-footer":"",centered:"",size:"xl"},on:{hidden:t.destroyModal}},[t._l(t.filters.length,(function(n){return e("active-filter",{key:"activefilter-".concat(n),attrs:{"filter-index":n,"parsed-splits":t.parsedSplits}})})),t._v(" "),e("filter-menu",{attrs:{"parsed-splits":t.parsedSplits}})],2)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ActiveFilter:n(424).default,FilterMenu:n(425).default})}}]);