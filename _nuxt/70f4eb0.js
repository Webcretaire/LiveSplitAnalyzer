(window.webpackJsonp=window.webpackJsonp||[]).push([[27,25],{306:function(t,e,n){"use strict";var r=n(8).default.observable({savedSettings:{},hasGameTime:!1,useRealTime:!1,splitFileIsModified:!1,PB:null,autoSplitterSettings:null});e.a={get state(){return r}}},307:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r=new(n(8).default)},308:function(t,e,n){"use strict";n.d(e,"d",(function(){return r})),n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return f}));n(11),n(166),n(14),n(132),n(316),n(317),n(318);var r=function(time){var t=time.match(/([0-9]+):([0-9]+):([0-9.]+)/);if(!t)return 0;var e=+t[1],n=+t[2];return+t[3]+60*n+3600*e},o=function(time){var t=time.match(/([0-9]+):([0-9]+):([0-9.]+)/);if(!t)return"";var e=+t[1],n=+t[2],r=+t[3],o="";return e&&(o+="".concat(e,"h")),n&&(o+="".concat(n,"m")),o+="".concat(r<10?"0":"").concat(r.toFixed(2),"s")},c=function(time){var t="",e=!0;return time>=3600&&(e=!1,t+="".concat(Math.floor(time/3600),"h"),time%=3600),time>=60&&(e=!1,t+="".concat(Math.floor(time/60),"m"),time%=60),t+="".concat(!e&&time<10?"0":"").concat(Math.abs(+time.toFixed(2)),"s")},f=function(time){var t="",e=Math.trunc(time/3600).toFixed();t+="".concat(e.padStart(2,"0"),":"),time%=3600;var n=Math.trunc(time/60).toFixed();t+="".concat(n.padStart(2,"0"),":"),time%=60;var r=Math.trunc(time),o=(time-r).toFixed(7).substring(2);return t+="".concat(r.toFixed().padStart(2,"0"),".").concat(o.padEnd(7,"0"))}},309:function(t,e,n){"use strict";n.d(e,"c",(function(){return f})),n.d(e,"b",(function(){return l})),n.d(e,"a",(function(){return d})),n.d(e,"d",(function(){return v}));n(15),n(1),n(3),n(85),n(109);var r=n(306),o=n(308),c=n(310),f=function(t){return(null==t?void 0:t.GameTime)&&!r.a.state.useRealTime?t.GameTime:(null==t?void 0:t.RealTime)||null},l=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=0;return t.map((function(t){var r;return(r=!0===e?t.BestSegmentTime.GameTime:!1===e?t.BestSegmentTime.RealTime:f(t.BestSegmentTime))&&(n+=Object(o.d)(r)),n}))},d=function(t){return t.reduce((function(t,e){return e.SplitTimes.SplitTime.forEach((function(s){t.includes(s["@_name"])||t.push(s["@_name"])})),t}),[])},v=function(t){r.a.state.splitFileIsModified=t,t?Object(c.c)():Object(c.d)()}},310:function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return l})),n.d(e,"d",(function(){return d})),n.d(e,"a",(function(){return v}));var r=n(24),o=n(23),c=(n(1),function(input){return null==input?[]:Array.isArray(input)?input:[input]}),f=function(t){t.preventDefault(),t.returnValue=""},l=function(){window.addEventListener("beforeunload",f)},d=function(){window.removeEventListener("beforeunload",f)},v=Object(r.a)((function t(){var e=this;Object(o.a)(this,t),this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(t,n){e.reject=n,e.resolve=t}))}))},311:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(307),o=function(t){r.a.$emit("startLoading",t)}},313:function(t,e,n){var r=n(13),o=n(66),c=n(30),f=n(167),l=n(42),d=r(f),v=r("".slice),m=Math.ceil,h=function(t){return function(e,n,r){var f,h,O=c(l(e)),y=o(n),j=O.length,w=void 0===r?" ":c(r);return y<=j||""==w?O:((h=d(w,m((f=y-j)/w.length))).length>f&&(h=v(h,0,f)),t?O+h:h+O)}};t.exports={start:h(!1),end:h(!0)}},314:function(t,e,n){var r=n(56);t.exports=/Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(r)},316:function(t,e,n){n(9)({target:"Math",stat:!0},{trunc:n(229)})},317:function(t,e,n){"use strict";var r=n(9),o=n(313).start;r({target:"String",proto:!0,forced:n(314)},{padStart:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},318:function(t,e,n){"use strict";var r=n(9),o=n(313).end;r({target:"String",proto:!0,forced:n(314)},{padEnd:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},365:function(t,e,n){var content=n(393);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(84).default)("238e50dd",content,!0,{sourceMap:!1})},392:function(t,e,n){"use strict";n(365)},393:function(t,e,n){var r=n(83)(!1);r.push([t.i,".dl-button-modified[data-v-29e45a21]{width:4.8rem!important;height:4.8rem!important;font-size:2rem!important;transform:translateY(.4rem)}",""]),t.exports=r},410:function(t,e,n){"use strict";n.r(e);var r=n(23),o=n(24),c=n(60),f=n(108),l=n(46),d=n(41),v=(n(6),n(1),n(165),n(305)),m=(n(5),n(4),n(2),n(3),n(7),n(0)),h=n(382);function O(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function y(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?O(Object(source),!0).forEach((function(e){Object(m.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):O(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var j={ignoreAttributes:!1,attributeNamePrefix:"@_"},w=(new h.XMLParser(y({parseAttributeValue:!0,allowBooleanAttributes:!0},j)),new h.XMLBuilder(y({suppressBooleanAttributes:!1,format:!0},j))),S=n(306),M=n(309),P=n(311);function x(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(l.a)(t);if(e){var o=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(f.a)(this,n)}}var R=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},T=function(t){Object(c.a)(n,t);var e=x(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"variant",get:function(){return S.a.state.splitFileIsModified?"success":"light"}},{key:"classList",get:function(){return S.a.state.splitFileIsModified?"dl-button-modified float-button":"float-button"}},{key:"downloadSplits",value:function(){var t=this;Object(P.a)((function(){var element=document.createElement("a");element.setAttribute("download","splits.lss"),element.setAttribute("href","data:binary/octet-stream,".concat(encodeURIComponent(w.build(t.parsedSplits)))),element.style.display="none",document.body.appendChild(element),Object(M.d)(!1),element.click(),document.body.removeChild(element)}))}}]),n}(v.Vue);R([Object(v.Prop)()],T.prototype,"parsedSplits",void 0);var F=T=R([v.Component],T),k=(n(392),n(65)),component=Object(k.a)(F,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.left",value:"Download splits",expression:"'Download splits'",modifiers:{hover:!0,left:!0}}],class:t.classList,attrs:{pill:"",size:"lg",variant:t.variant},on:{click:t.downloadSplits}},[e("font-awesome-icon",{attrs:{icon:"floppy-disk"}})],1)}),[],!1,null,"29e45a21",null);e.default=component.exports}}]);