(window.webpackJsonp=window.webpackJsonp||[]).push([[23,25,42],{287:function(t,e,n){var o=n(14),r=n(66),c=n(28),l=n(164),f=n(41),m=o(l),d=o("".slice),v=Math.ceil,h=function(t){return function(e,n,o){var l,h,y=c(f(e)),O=r(n),j=y.length,C=void 0===o?" ":c(o);return O<=j||""==C?y:((h=m(C,v((l=O-j)/C.length))).length>l&&(h=d(h,0,l)),t?y+h:h+y)}};t.exports={start:h(!1),end:h(!0)}},288:function(t,e,n){var o=n(55);t.exports=/Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(o)},290:function(t,e,n){var o=n(13),r=Math.ceil,c=Math.floor;o({target:"Math",stat:!0},{trunc:function(t){return(t>0?c:r)(t)}})},291:function(t,e,n){"use strict";var o=n(13),r=n(287).start;o({target:"String",proto:!0,forced:n(288)},{padStart:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},292:function(t,e,n){"use strict";var o=n(13),r=n(287).end;o({target:"String",proto:!0,forced:n(288)},{padEnd:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},298:function(t,e,n){var content=n(305);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(80).default)("f4f6c818",content,!0,{sourceMap:!1})},300:function(t,e,n){"use strict";n.r(e);n(162);var o=n(22),r=n(23),c=n(60),l=n(100),f=n(44),m=n(40),d=(n(6),n(1),n(127),n(220),n(279));function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=Object(f.a)(t);if(e){var r=Object(f.a)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(l.a)(this,n)}}var h=function(t,e,n,desc){var o,r=arguments.length,c=r<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(m.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(c=(r<3?o(c):r>3?o(e,n,c):o(e,n))||c);return r>3&&c&&Object.defineProperty(e,n,c),c},y=function(t){Object(c.a)(n,t);var e=v(n);function n(){var t;return Object(o.a)(this,n),(t=e.apply(this,arguments)).hours=0,t.minutes=0,t.seconds=0,t}return Object(r.a)(n,[{key:"outputInSeconds",get:function(){return 3600*this.hours+60*this.minutes+this.seconds}},{key:"onInputChange",value:function(){this.$emit("input",this.outputInSeconds)}},{key:"mounted",value:function(){var time=this.value;time>3600&&(this.hours=Math.floor(time/3600),time%=3600),time>60&&(this.minutes=Math.floor(time/60),time%=60),this.seconds=+time.toFixed(2)}}]),n}(d.Vue);h([Object(d.Prop)({type:Number})],y.prototype,"value",void 0),h([Object(d.Watch)("outputInSeconds")],y.prototype,"onInputChange",null);var O=y=h([d.Component],y),j=(n(304),n(65)),component=Object(j.a)(O,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-form",{staticClass:"time-form",attrs:{inline:""}},[n("b-row",[n("b-col",{staticClass:"column",attrs:{cols:"4"}},[n("b-input-group",{attrs:{append:"h"}},[n("b-form-input",{attrs:{placeholder:"Hours",type:"number",step:"1",debounce:"500"},model:{value:t.hours,callback:function(e){t.hours=t._n(e)},expression:"hours"}})],1)],1),t._v(" "),n("b-col",{staticClass:"column",attrs:{cols:"4"}},[n("b-input-group",{attrs:{append:"m"}},[n("b-form-input",{attrs:{placeholder:"Minutes",type:"number",step:"1",debounce:"500"},model:{value:t.minutes,callback:function(e){t.minutes=t._n(e)},expression:"minutes"}})],1)],1),t._v(" "),n("b-col",{staticClass:"column",attrs:{cols:"4"}},[n("b-input-group",{attrs:{append:"s"}},[n("b-form-input",{attrs:{placeholder:"Seconds",type:"number",step:"0.01",debounce:"500"},model:{value:t.seconds,callback:function(e){t.seconds=t._n(e)},expression:"seconds"}})],1)],1)],1)],1)}),[],!1,null,"fafb75a0",null);e.default=component.exports},304:function(t,e,n){"use strict";n(298)},305:function(t,e,n){var o=n(79)(!1);o.push([t.i,".column[data-v-fafb75a0]{padding-left:.25rem;padding-right:.25rem}.time-form[data-v-fafb75a0]{padding-left:1rem;padding-right:1rem}",""]),t.exports=o},311:function(t,e,n){var content=n(324);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(80).default)("5c97ec9a",content,!0,{sourceMap:!1})},323:function(t,e,n){"use strict";n(311)},324:function(t,e,n){var o=n(79)(!1);o.push([t.i,".help-question[data-v-2adbc4e8]{font-size:1rem}",""]),t.exports=o},330:function(t,e,n){"use strict";n.r(e);n(162);var o=n(22),r=n(23),c=n(60),l=n(100),f=n(44),m=n(40),d=(n(6),n(1),n(127),n(128),n(16),n(3),n(283)),v=n(279),h=n(280),y=n(282),O=n(285),j=n(309),C=n.n(j);function T(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=Object(f.a)(t);if(e){var r=Object(f.a)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(l.a)(this,n)}}var _=function(t,e,n,desc){var o,r=arguments.length,c=r<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(m.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(c=(r<3?o(c):r>3?o(e,n,c):o(e,n))||c);return r>3&&c&&Object.defineProperty(e,n,c),c},R=function(t){Object(c.a)(n,t);var e=T(n);function n(){var t;return Object(o.a)(this,n),(t=e.apply(this,arguments)).comparisonName="",t.targetTime=t.selectedSobTotal,t.balancedFactor=0,t.useTargetTime=!1,t}return Object(r.a)(n,[{key:"selectedSobTotal",get:function(){var t=Object(d.b)(this.segments);return+t[t.length-1].toFixed(2)}},{key:"makeBalanced",value:function(){var t=this;Object(O.a)((function(){if(t.segments.find((function(e){return e.SplitTimes.SplitTime.find((function(e){return e["@_name"]==t.comparisonName}))})))t.$bvToast.toast("Comparison ".concat(t.comparisonName," already exists"),{title:"Error",autoHideDelay:5e3,appendToast:!1,variant:"danger"});else{Object(d.d)(!0);var e=t.useTargetTime?100*(t.targetTime/t.selectedSobTotal-1):t.balancedFactor,n=Object(d.b)(t.segments,!1).map((function(time){return time+e/100*time})),o=[],r=[];h.a.state.hasGameTime&&(o=Object(d.b)(t.segments,!0),r=o.map((function(time){return time+e/100*time}))),t.segments.forEach((function(e,o,c){var l=c[o].SplitTimes.SplitTime,f={"@_name":t.comparisonName,RealTime:Object(y.c)(n[o])};h.a.state.hasGameTime&&(f.GameTime=Object(y.c)(r[o])),l.push(f),c[o].SplitTimes.SplitTime=l}))}})),this.$bvToast.toast("Comparison was successfully added",{title:this.comparisonName,autoHideDelay:5e3,appendToast:!1,variant:"success"})}}]),n}(v.Vue);_([Object(v.Prop)()],R.prototype,"segments",void 0);var x=R=_([Object(v.Component)({components:{Multiselect:C.a}})],R),S=(n(323),n(65)),component=Object(S.a)(x,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("collapsible-card",{attrs:{id:"ComparisonCreatorCard",title:"Create a balanced comparison"}},[n("table",{staticClass:"w-100 mt-4",attrs:{role:"presentation"}},[n("tbody",[n("tr",[n("td",{staticClass:"text-right pr-2"},[t._v("\n        Name\n      ")]),t._v(" "),n("td",[n("b-form-input",{attrs:{required:"",debounce:"500"},model:{value:t.comparisonName,callback:function(e){t.comparisonName=e},expression:"comparisonName"}})],1)]),t._v(" "),n("tr",[n("td",{staticClass:"text-center pt-2 pb-2",attrs:{colspan:"2"}},[n("span",{staticClass:"pr-2"},[t._v("Use a factor")]),t._v(" "),n("b-checkbox",{staticClass:"d-inline",attrs:{switch:""},model:{value:t.useTargetTime,callback:function(e){t.useTargetTime=e},expression:"useTargetTime"}}),t._v(" "),n("span",{staticClass:"pl-1"},[t._v("Use a target time")])],1)]),t._v(" "),t.useTargetTime?n("tr",[n("td",{staticClass:"text-right pr-2",staticStyle:{"min-width":"8rem"}},[t._v("\n        Target time\n        "),n("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"help-question",attrs:{title:"Automatically determine time factor based on a target total time (in seconds)"}},[n("font-awesome-icon",{attrs:{icon:"circle-question"}})],1)]),t._v(" "),n("td",[n("time-selector",{model:{value:t.targetTime,callback:function(e){t.targetTime=e},expression:"targetTime"}})],1)]):n("tr",[n("td",{staticClass:"text-right pr-2"},[t._v("\n        Factor\n        "),n("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"help-question",attrs:{title:"How much time to add to each of your golds (as a percentage)"}},[n("font-awesome-icon",{attrs:{icon:"circle-question"}})],1)]),t._v(" "),n("td",[n("b-form-input",{attrs:{type:"number",min:"0",debounce:"500",step:"0.01"},model:{value:t.balancedFactor,callback:function(e){t.balancedFactor=t._n(e)},expression:"balancedFactor"}})],1)])])]),t._v(" "),n("div",{staticClass:"text-center"},[n("b-button",{staticClass:"mt-3",attrs:{variant:"success"},on:{click:t.makeBalanced}},[t._v("\n      Create\n    ")])],1)])}),[],!1,null,"2adbc4e8",null);e.default=component.exports;installComponents(component,{TimeSelector:n(300).default,CollapsibleCard:n(286).default})},331:function(t,e,n){"use strict";n.r(e);n(162);var o=n(22),r=n(23),c=n(60),l=n(100),f=n(44),m=n(40),d=(n(6),n(1),n(2),n(17),n(3),n(101),n(102),n(283)),v=n(279),h=n(309),y=n.n(h),O=n(281);function j(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=Object(f.a)(t);if(e){var r=Object(f.a)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(l.a)(this,n)}}var C=function(t,e,n,desc){var o,r=arguments.length,c=r<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(m.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(c=(r<3?o(c):r>3?o(e,n,c):o(e,n))||c);return r>3&&c&&Object.defineProperty(e,n,c),c},T=function(t){Object(c.a)(n,t);var e=j(n);function n(){var t;return Object(o.a)(this,n),(t=e.apply(this,arguments)).comparisonsToDelete=[],t}return Object(r.a)(n,[{key:"deletableComparisons",get:function(){return Object(d.a)(this.segments).filter((function(s){return"Personal Best"!=s}))}},{key:"deleteComparisons",value:function(){var t=this;O.a.$emit("openConfirm","Delete ".concat(this.comparisonsToDelete.join(", "),"?"),(function(){Object(d.d)(!0),t.segments.forEach((function(e,n,o){var r=o[n].SplitTimes.SplitTime;o[n].SplitTimes.SplitTime=r.filter((function(e){return!t.comparisonsToDelete.includes(e["@_name"])}))})),t.$bvToast.toast("Comparison".concat(1==t.comparisonsToDelete.length?"":"s"," successfully deleted"),{title:t.comparisonsToDelete.join(", "),autoHideDelay:5e3,appendToast:!1,variant:"success"}),t.comparisonsToDelete=[],O.a.$emit("closeConfirm")}))}}]),n}(v.Vue);C([Object(v.Prop)()],T.prototype,"segments",void 0);var _=T=C([Object(v.Component)({components:{Multiselect:y.a}})],T),R=n(65),component=Object(R.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.deletableComparisons.length?n("div",[n("collapsible-card",{attrs:{id:"ComparisonRemoverCard",title:"Delete comparison"}},[n("multiselect",{staticClass:"m-auto",staticStyle:{"max-width":"30rem"},attrs:{options:t.deletableComparisons,multiple:""},model:{value:t.comparisonsToDelete,callback:function(e){t.comparisonsToDelete=e},expression:"comparisonsToDelete"}}),t._v(" "),n("div",{staticClass:"text-center"},[n("b-button",{staticClass:"mt-2",attrs:{variant:"danger",disabled:!t.comparisonsToDelete.length},on:{click:t.deleteComparisons}},[t._v("\n        Delete\n      ")])],1)],1)],1):t._e()}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CollapsibleCard:n(286).default})},349:function(t,e,n){"use strict";n.r(e);var o=n(23),r=n(22),c=n(60),l=n(100),f=n(44),m=n(40),d=(n(6),n(1),n(162),n(279));function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=Object(f.a)(t);if(e){var r=Object(f.a)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(l.a)(this,n)}}var h=function(t,e,n,desc){var o,r=arguments.length,c=r<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(m.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(c=(r<3?o(c):r>3?o(e,n,c):o(e,n))||c);return r>3&&c&&Object.defineProperty(e,n,c),c},y=function(t){Object(c.a)(n,t);var e=v(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n)}(d.Vue);h([Object(d.Prop)()],y.prototype,"segments",void 0);var O=y=h([d.Component],y),j=n(65),component=Object(j.a)(O,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("comparisons-display",{attrs:{segments:t.segments}}),t._v(" "),n("comparison-creator",{attrs:{segments:t.segments}}),t._v(" "),n("comparison-remover",{attrs:{segments:t.segments}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ComparisonsDisplay:n(345).default,ComparisonCreator:n(330).default,ComparisonRemover:n(331).default})}}]);