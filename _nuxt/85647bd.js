(window.webpackJsonp=window.webpackJsonp||[]).push([[6,30,31],{333:function(t,e,n){"use strict";n.r(e);var o={name:"hue-circle-svg"},r=n(65),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",version:"1.1",width:"100%",height:"100%",viewBox:"-20 -20 240 240"}},[n("defs",[n("linearGradient",{attrs:{id:"redyel",gradientUnits:"objectBoundingBox",x1:"0",y1:"0",x2:"1",y2:"1"}},[n("stop",{attrs:{offset:"0%","stop-color":"#ff0000"}}),t._v(" "),n("stop",{attrs:{offset:"100%","stop-color":"#ffff00"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"yelgre",gradientUnits:"objectBoundingBox",x1:"0",y1:"0",x2:"0",y2:"1"}},[n("stop",{attrs:{offset:"0%","stop-color":"#ffff00"}}),t._v(" "),n("stop",{attrs:{offset:"100%","stop-color":"#00ff00"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"grecya",gradientUnits:"objectBoundingBox",x1:"1",y1:"0",x2:"0",y2:"1"}},[n("stop",{attrs:{offset:"0%","stop-color":"#00ff00"}}),t._v(" "),n("stop",{attrs:{offset:"100%","stop-color":"#00ffff"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"cyablu",gradientUnits:"objectBoundingBox",x1:"1",y1:"1",x2:"0",y2:"0"}},[n("stop",{attrs:{offset:"0%","stop-color":"#00ffff"}}),t._v(" "),n("stop",{attrs:{offset:"100%","stop-color":"#0000ff"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"blumag",gradientUnits:"objectBoundingBox",x1:"0",y1:"1",x2:"0",y2:"0"}},[n("stop",{attrs:{offset:"0%","stop-color":"#0000ff"}}),t._v(" "),n("stop",{attrs:{offset:"100%","stop-color":"#ff00ff"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"magred",gradientUnits:"objectBoundingBox",x1:"0",y1:"1",x2:"1",y2:"0"}},[n("stop",{attrs:{offset:"0%","stop-color":"#ff00ff"}}),t._v(" "),n("stop",{attrs:{offset:"100%","stop-color":"#ff0000"}})],1)],1),t._v(" "),n("g",{attrs:{fill:"none","stroke-width":"30",transform:"translate(100,100)"}},[n("path",{attrs:{d:"M 0,-100 A 100,100 0 0,1 86.6,-50",stroke:"url(#redyel)"}}),t._v(" "),n("path",{attrs:{d:"M 86.6,-50 A 100,100 0 0,1 86.6,50",stroke:"url(#yelgre)"}}),t._v(" "),n("path",{attrs:{d:"M 86.6,50 A 100,100 0 0,1 0,100",stroke:"url(#grecya)"}}),t._v(" "),n("path",{attrs:{d:"M 0,100 A 100,100 0 0,1 -86.6,50",stroke:"url(#cyablu)"}}),t._v(" "),n("path",{attrs:{d:"M -86.6,50 A 100,100 0 0,1 -86.6,-50",stroke:"url(#blumag)"}}),t._v(" "),n("path",{attrs:{d:"M -86.6,-50 A 100,100 0 0,1 0,-100",stroke:"url(#magred)"}})])])}),[],!1,null,null,null);e.default=component.exports},342:function(t,e,n){var content=n(373);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(80).default)("8f5631b8",content,!0,{sourceMap:!1})},353:function(t,e,n){"use strict";n.r(e),n.d(e,"normalizeAngle",(function(){return r})),n.d(e,"getRotationFromCoords",(function(){return l})),n.d(e,"noop",(function(){return c}));var o=180/Math.PI,r=function(t){var e=t%360;return e<0?360+e:e},l=function(t,rect){var e=t.x,n=t.y,r=rect.left+rect.width/2,l=rect.top+rect.height/2;return Math.atan2(n-l,e-r)*o},c=function(){},f={name:"hue-picker",data:function(){return{active:!1,element:null,hue:0}},mounted:function(){this.element=this.$refs.simplestHuePicker,this.addListeners()},methods:{addListeners:function(){this.element.addEventListener("touchstart",this.handleStart,{passive:!0}),this.element.addEventListener("touchmove",this.handleMove,{passive:!1}),this.element.addEventListener("touchend",this.handleEnd,{passive:!0}),this.element.addEventListener("touchcancel",this.handleEnd,{passive:!0}),this.element.addEventListener("mousedown",this.handleStart,{passive:!0}),this.element.addEventListener("mousemove",this.handleMove,{passive:!1}),this.element.addEventListener("mouseup",this.handleEnd,{passive:!0}),this.element.addEventListener("mouseleave",this.handleEnd,{passive:!0})},handleStart:function(){this.active=!0},handleMove:function(t){if(this.active){t.preventDefault();var e=event.targetTouches?event.targetTouches[0]:event;this.updateAngle({x:e.clientX,y:e.clientY})}},handleEnd:function(){this.active=!1},updateAngle:function(t){var e=l(t,this.element.getBoundingClientRect());this.hue=r(Math.round(e)+90),this.$emit("input",this.hue)}}},d=n(65),component=Object(d.a)(f,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{ref:"simplestHuePicker",attrs:{id:"simplest-color-picker"}},[e("hue-circle-svg")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{HueCircleSvg:n(333).default})},372:function(t,e,n){"use strict";n(342)},373:function(t,e,n){var o=n(79)(!1);o.push([t.i,".hue-picker[data-v-7606a566]{margin:auto;max-width:20vh;max-height:20vh}",""]),t.exports=o},379:function(t,e,n){"use strict";n.r(e);var o=n(23),r=n(22),l=n(60),c=n(100),f=n(44),d=n(40),h=(n(6),n(1),n(162),n(279)),v=n(299),m=n(280),x=n(314),y=n.n(x);function _(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=Object(f.a)(t);if(e){var r=Object(f.a)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(c.a)(this,n)}}var S=function(t,e,n,desc){var o,r=arguments.length,l=r<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(l=(r<3?o(l):r>3?o(e,n,l):o(e,n))||l);return r>3&&l&&Object.defineProperty(e,n,l),l},j=function(t){Object(l.a)(n,t);var e=_(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).modalRef="GlobalSettingsModal",t.globalState=m.a.state,t}return Object(o.a)(n)}(Object(h.mixins)(v.default)),k=j=S([Object(h.Component)({components:{VueSlider:y.a}})],j),w=(n(372),n(65)),component=Object(w.a)(k,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-modal",{ref:t.modalRef,attrs:{title:"Global settings","hide-footer":"",centered:"",size:"lg"},on:{hidden:t.destroyModal}},[n("div",{staticClass:"text-center"},[t.globalState.hasGameTime?n("loading-switch",{staticClass:"mb-2",model:{value:t.globalState.useRealTime,callback:function(e){t.$set(t.globalState,"useRealTime",e)},expression:"globalState.useRealTime"}},[t._v("\n      Use real time instead of game time\n    ")]):t._e(),t._v(" "),n("h6",{staticClass:"mt-4"},[t._v("Size of info panels")]),t._v(" "),n("b-row",[n("b-col",{attrs:{cols:"12",xl:"8","offset-xl":"2"}},[n("vue-slider",{attrs:{min:0,max:3,lazy:"",adsorb:""},model:{value:t.globalState.savedSettings.pageWidth,callback:function(e){t.$set(t.globalState.savedSettings,"pageWidth",e)},expression:"globalState.savedSettings.pageWidth"}})],1)],1),t._v(" "),n("h6",{staticClass:"mt-4"},[t._v("\n      Page hue \n      "),t.globalState.savedSettings.pageHue?n("span",[t._v("("+t._s(t.globalState.savedSettings.pageHue)+")")]):t._e()]),t._v(" "),n("hue-picker",{staticClass:"hue-picker",model:{value:t.globalState.savedSettings.pageHue,callback:function(e){t.$set(t.globalState.savedSettings,"pageHue",e)},expression:"globalState.savedSettings.pageHue"}})],1)])}),[],!1,null,"7606a566",null);e.default=component.exports;installComponents(component,{LoadingSwitch:n(293).default,HuePicker:n(353).default})}}]);