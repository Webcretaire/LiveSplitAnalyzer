(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{373:function(e,t,n){"use strict";n.r(t);n(161);var o=n(22),r=n(23),c=n(60),l=n(100),f=n(44),m=n(40),d=(n(6),n(1),n(36),n(3),n(128),n(281)),v=n(277),h=n(292),C=n(282),y=n(278);function w(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=Object(f.a)(e);if(t){var r=Object(f.a)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(l.a)(this,n)}}var O=function(e,t,n,desc){var o,r=arguments.length,c=r<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(m.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,desc);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(c=(r<3?o(c):r>3?o(t,n,c):o(t,n))||c);return r>3&&c&&Object.defineProperty(t,n,c),c},j=function(e){Object(c.a)(n,e);var t=w(n);function n(){var e,r;return Object(o.a)(this,n),(e=t.apply(this,arguments)).modalRef="ComparisonRenameModal",e.newComparisonName="",e.segments=null===(r=y.a.state.splitFile.Run)||void 0===r?void 0:r.Segments,e}return Object(r.a)(n,[{key:"newNameInput",get:function(){return""===this.newComparisonName.trim()}},{key:"renameComparison",value:function(){var e=this;Object(C.a)((function(){e.segments.Segment.forEach((function(t){var n=t.SplitTimes.SplitTime.find((function(s){return s["@_name"]===e.oldComparisonName}));n&&(n["@_name"]=e.newComparisonName)})),Object(d.d)(!0),e.applyCallback()}))}},{key:"applyCallback",value:function(){this.callback(this.newComparisonName),this.hideModal()}}]),n}(Object(v.mixins)(h.default));O([Object(v.Prop)()],j.prototype,"oldComparisonName",void 0),O([Object(v.Prop)()],j.prototype,"callback",void 0);var R=j=O([v.Component],j),N=n(65),component=Object(N.a)(R,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-modal",{ref:e.modalRef,staticClass:"text-center",attrs:{title:"Rename comparison","hide-footer":"",centered:"",size:"lg"},on:{hidden:e.destroyModal}},[n("div",{staticClass:"text-center",staticStyle:{"max-height":"80vh",overflow:"auto"}},[n("h4",[e._v('Rename "'+e._s(e.oldComparisonName)+'" to:')]),e._v(" "),n("b-form-input",{staticClass:"mt-2 mb-2",attrs:{required:""},model:{value:e.newComparisonName,callback:function(t){e.newComparisonName=t},expression:"newComparisonName"}}),e._v(" "),n("b-button",{staticClass:"mb-1",attrs:{variant:"success",disabled:e.newNameInput},on:{click:e.renameComparison}},[e._v("\n      Confirm\n    ")])],1)])}),[],!1,null,null,null);t.default=component.exports}}]);