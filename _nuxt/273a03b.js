(window.webpackJsonp=window.webpackJsonp||[]).push([[13,9],{281:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r=function(t){return(null==t?void 0:t.GameTime)||(null==t?void 0:t.RealTime)||null}},282:function(t,e,n){"use strict";n.d(e,"d",(function(){return r})),n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return l}));n(11),n(164),n(15),n(128);var r=function(time){var t=time.match(/([0-9]+):([0-9]+):([0-9.]+)/);if(!t)return 0;var e=+t[1],n=+t[2];return+t[3]+60*n+3600*e},c=function(time){var t=time.match(/([0-9]+):([0-9]+):([0-9.]+)/);if(!t)return"";var e=+t[1],n=+t[2],r=+t[3],c="";return e&&(c+="".concat(e,"h")),n&&(c+="".concat(n,"m")),c+="".concat(r<10?"0":"").concat(r.toFixed(2),"s")},o=function(time){var t="",e=!0;return time>3600&&(e=!1,t+="".concat(Math.floor(time/3600),"h"),time%=3600),time>60&&(e=!1,t+="".concat(Math.floor(time/60),"m"),time%=60),t+="".concat(!e&&time<10?"0":"").concat(Math.abs(+time.toFixed(2)),"s")},l=function(time){var t="";t+="".concat(Math.floor(time/3600),":"),time%=3600;var e=Math.floor(time/60);return t+="".concat(e<10?"0":"").concat(e,":"),t+="".concat((time%=60)<10?"0":"").concat(Math.abs(+time.toFixed(6)))}},283:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r=function(input){return null==input?[]:Array.isArray(input)?input:[input]}},284:function(t,e,n){"use strict";n.r(e);var r=n(22),c=n(23),o=n(60),l=n(100),f=n(44),v=n(40),d=(n(6),n(1),n(163),n(279));function h(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var c=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var m=function(t,e,n,desc){var r,c=arguments.length,o=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(v.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(o=(c<3?r(o):c>3?r(e,n,o):r(e,n))||o);return c>3&&o&&Object.defineProperty(e,n,o),o},y=function(t){Object(o.a)(n,t);var e=h(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).visible=!0,t.id="collapse-xxxx",t}return Object(c.a)(n,[{key:"created",value:function(){this.visible=this.startsOpen}},{key:"mounted",value:function(){this.id="collapse-".concat(Math.floor(1e4*Math.random()))}}]),n}(d.Vue);m([Object(d.Prop)()],y.prototype,"title",void 0),m([Object(d.Prop)({default:!1})],y.prototype,"startsOpen",void 0);var O=y=m([d.Component],y),j=(n(288),n(65)),component=Object(j.a)(O,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-card",{staticClass:"mb-4",attrs:{title:t.title}},[n("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:t.id,expression:"id"}],staticClass:"toggle-collapse",attrs:{variant:"outline-secondary",pill:""}},[n("font-awesome-icon",{attrs:{icon:"chevron-left",rotation:t.visible?270:null}})],1),t._v(" "),n("b-collapse",{attrs:{id:t.id,visible:""},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[t._t("default")],2)],1)}),[],!1,null,"496c35de",null);e.default=component.exports},286:function(t,e,n){var content=n(289);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(80).default)("d2d38cd2",content,!0,{sourceMap:!1})},288:function(t,e,n){"use strict";n(286)},289:function(t,e,n){var r=n(79)(!1);r.push([t.i,"*[data-v-496c35de]{color:#000}.toggle-collapse[data-v-496c35de]{position:absolute;right:1rem;top:1rem}",""]),t.exports=r},324:function(t,e,n){"use strict";n.r(e);n(163);var r=n(22),c=n(23),o=n(60),l=n(100),f=n(44),v=n(40),d=(n(6),n(1),n(2),n(279)),h=n(281),m=n(282),y=n(283);function O(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var c=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var j=function(t,e,n,desc){var r,c=arguments.length,o=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(v.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(o=(c<3?r(o):c>3?r(e,n,o):r(e,n))||o);return c>3&&o&&Object.defineProperty(e,n,o),o},_=function(t){Object(o.a)(n,t);var e=O(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).visible=!0,t}return Object(c.a)(n,[{key:"finishedRuns",get:function(){return Object(y.a)(this.run.AttemptHistory.Attempt).filter((function(a){return Object(h.a)(a)})).length}},{key:"PBs",get:function(){var t=999999;return Object(y.a)(this.run.AttemptHistory.Attempt).filter((function(a){var e=Object(h.a)(a);if(!e)return!1;var time=Object(m.d)(e);return!!(time&&time<t)&&(t=time,!0)}))}},{key:"runMetadata",get:function(){var t;return Object(y.a)(null===(t=this.run.Metadata.Variables)||void 0===t?void 0:t.Variable)}}]),n}(d.Vue);j([Object(d.Prop)()],_.prototype,"run",void 0);var R=_=j([d.Component],_),x=n(65),component=Object(x.a)(R,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("collapsible-card",{staticClass:"text-center",attrs:{title:t.run.GameName+" - "+t.run.CategoryName,"starts-open":""}},[n("p",[t._v(t._s(t.run.AttemptCount)+" attempts")]),t._v(" "),n("p",{staticClass:"m-0"},[n("strong",[t._v("Finished runs:")]),t._v(" "+t._s(t.finishedRuns))]),t._v(" "),n("p",{staticClass:"m-0"},[n("strong",[t._v("Number of PBs:")]),t._v(" "+t._s(t.PBs.length))]),t._v(" "),n("p",{staticClass:"m-0"},[n("strong",[t._v("Reset rate:")]),t._v("\n    "+t._s((100-t.finishedRuns/t.run.AttemptCount*100).toFixed(1))+"%\n  ")]),t._v(" "),t._l(t.runMetadata,(function(e){return e?n("p",{staticClass:"m-0"},[n("strong",[t._v(t._s(e["@_name"])+":")]),t._v(" "+t._s(e["#text"])+"\n  ")]):t._e()}))],2)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CollapsibleCard:n(284).default})}}]);