(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{280:function(t,e,n){"use strict";n.d(e,"d",(function(){return r})),n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return l}));n(11),n(164),n(15),n(128);var r=function(time){var t=time.match(/([0-9]+):([0-9]+):([0-9.]+)/);if(!t)return 0;var e=+t[1],n=+t[2];return+t[3]+60*n+3600*e},o=function(time){var t=time.match(/([0-9]+):([0-9]+):([0-9.]+)/);if(!t)return"";var e=+t[1],n=+t[2],r=+t[3],o="";return e&&(o+="".concat(e,"h")),n&&(o+="".concat(n,"m")),o+="".concat(r<10?"0":"").concat(r.toFixed(2),"s")},c=function(time){var t="",e=!0;return time>3600&&(e=!1,t+="".concat(Math.floor(time/3600),"h"),time%=3600),time>60&&(e=!1,t+="".concat(Math.floor(time/60),"m"),time%=60),t+="".concat(!e&&time<10?"0":"").concat(Math.abs(+time.toFixed(2)),"s")},l=function(time){var t="";t+="".concat(Math.floor(time/3600),":"),time%=3600;var e=Math.floor(time/60);return t+="".concat(e<10?"0":"").concat(e,":"),t+="".concat((time%=60)<10?"0":"").concat(Math.abs(+time.toFixed(6)))}},281:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return l}));var r=function(input){return null==input?[]:Array.isArray(input)?input:[input]},o=function(t){t.preventDefault(),t.returnValue=""},c=function(){window.addEventListener("beforeunload",o)},l=function(){window.removeEventListener("beforeunload",o)}},282:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r=new(n(9).default)},283:function(t,e,n){"use strict";n.d(e,"c",(function(){return l})),n.d(e,"b",(function(){return d})),n.d(e,"a",(function(){return f})),n.d(e,"d",(function(){return h}));n(16),n(1),n(3),n(101),n(102);var r=n(285),o=n(280),c=n(281),l=function(t){return!r.a.state.useRealTime&&(null==t?void 0:t.GameTime)?t.GameTime:(null==t?void 0:t.RealTime)||null},d=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=0;return t.Segment.map((function(t){var r;return(r=!0===e?t.BestSegmentTime.GameTime:!1===e?t.BestSegmentTime.RealTime:l(t.BestSegmentTime))&&(n+=Object(o.d)(r)),n}))},f=function(t){return t.Segment.reduce((function(t,e){return Object(c.a)(e.SplitTimes.SplitTime).forEach((function(s){t.includes(s["@_name"])||t.push(s["@_name"])})),t}),[])},h=function(t){r.a.state.splitFileIsModified=t,t?Object(c.b)():Object(c.c)()}},285:function(t,e,n){"use strict";var r=n(9).default.observable({hasGameTime:!1,useRealTime:!1,splitFile:{},splitFileIsModified:!1});e.a={get state(){return r}}},296:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r={currentSplit:null}},297:function(t,e,n){var content=n(343);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(80).default)("9a9dbe34",content,!0,{sourceMap:!1})},326:function(t,e,n){"use strict";n.r(e);n(163);var r=n(22),o=n(23),c=n(60),l=n(100),d=n(44),f=n(40),h=(n(6),n(1),n(165),n(11),n(26),n(127),n(16),n(2),n(15),n(67),n(49),n(301),n(302),n(303),n(304),n(305),n(306),n(307),n(308),n(309),n(310),n(311),n(312),n(313),n(314),n(315),n(316),n(317),n(318),n(319),n(320),n(321),n(322),n(323),n(324),n(325),n(279)),m=n(283),v=n(280),y=(n(355),n(18),"#1f77b4"),O="#ffc400",A="#2db41e",k=n(341),w=n.n(k),j=n(300),S=n(282),E=n(296),x=n(281);function T(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(d.a)(t);if(e){var o=Object(d.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var I=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},P=function(t){Object(c.a)(n,t);var e=T(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).collapseVisible=!1,t.renderGraph=!0,t.layout=function(){var e={title:"Time history",xaxis:{title:"Finished number (".concat(t.timesWithPositiveIds.length," total)")},yaxis:{title:"Time (seconds)",rangemode:t.graphYAxisToZero?"tozero":"nonnegative"},annotations:[{x:t.gold.x,y:t.gold.y,text:"Gold",font:{color:O},arrowhead:2,arrowsize:1,arrowwidth:2,arrowcolor:O,ax:0,ay:30}]},n=Object(m.c)(t.PB);return t.graphPBHline&&t.currentAttemptNumber&&n&&(e.shapes=[{type:"line",x0:0,y0:Object(v.d)(n),x1:t.timesSeconds.length-1,y1:Object(v.d)(n),line:{color:A,width:1,dash:"dot"}}]),e},t.formatTime=v.a,t}return Object(o.a)(n,[{key:"isSubsplit",get:function(){return this.split.Name.startsWith("-")}},{key:"bestTimeDisplay",get:function(){return this.formatTime(Object(m.c)(this.split.BestSegmentTime)||"")}},{key:"gold",get:function(){for(var t=0,e=999999,i=0;i<this.timesSeconds.length;++i){var n=this.timesSeconds[i];n&&n<e&&(t=i,e=n)}return{x:t,y:e}}},{key:"PB",get:function(){var t=this;return this.timesWithPositiveIds.find((function(e){return e["@_id"]===t.currentAttemptNumber}))}},{key:"goldsMap",get:function(){var t=999999;return this.timesSeconds.map((function(e){return!!(e&&e<t)&&(t=e,!0)}))}},{key:"timesSeconds",get:function(){return this.timesWithPositiveIds.filter((function(t){return t["@_id"]>0})).map((function(t){var time=Object(m.c)(t);return time?Object(v.d)(time):null}))}},{key:"collapseName",get:function(){return"collapse-"+w()(this.split.Name)}},{key:"markerColors",get:function(){for(var t,e=[],i=0;i<this.timesWithPositiveIds.length;++i)this.timesWithPositiveIds[i]["@_id"]==(null===(t=this.PB)||void 0===t?void 0:t["@_id"])?e.push(A):e.push(this.goldsMap[i]?O:y);return e}},{key:"markerSizes",get:function(){for(var t,e=[],i=0;i<this.timesWithPositiveIds.length;++i)this.timesWithPositiveIds[i]["@_id"]==(null===(t=this.PB)||void 0===t?void 0:t["@_id"])?e.push(6):e.push(this.goldsMap[i]?5:3);return e}},{key:"timesWithPositiveIds",get:function(){return Object(x.a)(this.split.SegmentHistory.Time).filter((function(t){return t["@_id"]>0}))}},{key:"plot_data",value:function(){var t=this.timesWithPositiveIds.map((function(t){var time=Object(m.c)(t);return time?"".concat(Object(v.a)(time)," (attempt ").concat(t["@_id"],")"):""}));return[{x:Array.from({length:this.timesWithPositiveIds.length},(function(t,e){return e})),y:this.timesSeconds,text:t,type:"scatter",hoverinfo:"text",mode:"lines+markers",marker:{color:this.markerColors,size:this.markerSizes},line:{color:y,width:1}}]}},{key:"srcFormattedIcon",value:function(t){var e=function(t){for(var e=atob(t),n=e.length,data=new Uint8Array(n),r=0;r<n;r++)data[r]=e.charCodeAt(r);var i,o=new Uint8Array([137,80,78,71,13,10,26,10]),c=0,l=0,d=!1;for(i=0;i<data.length&&(data[i]==o[c]?(0==c&&(l=i),c==o.length-1?d=!0:c++):c=0,!d);++i);if(!d)return console.error("No PNG file in input data"),null;for(;;){i+=4;var f=new Uint8Array([data[i],data[i-1],data[i-2],data[i-3]]),h=new Uint32Array(f.buffer,0,1)[0];i+=4,f=new Uint8Array([data[i-3],data[i-2],data[i-1],data[i]]);var m=(new TextDecoder).decode(f);if(i+=h,(i+=4)>data.length)return console.error("OOB"),null;if("IEND"==m)break}return data.slice(l,i)}(t.Icon);return e?"data:image/jpeg;base64,"+btoa(new Uint8Array(e).reduce((function(data,t){return data+String.fromCharCode(t)}),"")):null}},{key:"fixGoldsModal",value:function(){S.a.$emit("openModal","ManualGoldUpdateModal"),E.a.currentSplit=this.split,S.a.$emit("setCurrentSplit",this.split)}}]),n}(h.Vue);I([Object(h.Prop)()],P.prototype,"split",void 0),I([Object(h.Prop)({default:!1})],P.prototype,"graphYAxisToZero",void 0),I([Object(h.Prop)({default:!1})],P.prototype,"graphPBHline",void 0),I([Object(h.Prop)()],P.prototype,"currentAttemptNumber",void 0);var _=P=I([Object(h.Component)({components:{Plotly:j.Plotly}})],P),U=(n(342),n(65)),component=Object(U.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-card",{staticClass:"text-left"},[n("div",{staticClass:"limit-height"},[t.srcFormattedIcon(t.split)?n("b-card-img",{staticClass:"split-icon mr-4",attrs:{src:t.srcFormattedIcon(t.split),block:""}}):t._e(),t._v(" "),n("div",{staticClass:"mt-auto mb-auto"},[n("h3",[t._v("\n          "+t._s(t.isSubsplit?t.split.Name.substring(1):t.split.Name)+" "),t.isSubsplit?n("small",[t._v("(subsplit)")]):t._e()]),t._v(" "),t.split.BestSegmentTime?n("p",[n("strong",[t._v("Best time:")]),t._v(" "+t._s(t.bestTimeDisplay)+"\n          "),n("b-button",{staticClass:"ml-2",attrs:{size:"sm",variant:"warning"},on:{click:t.fixGoldsModal}},[t._v("Fix fake golds")])],1):t._e(),t._v(" "),n("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:t.collapseName,expression:"collapseName"}],staticClass:"toggle-collapse",attrs:{variant:"outline-dark",pill:""}},[n("font-awesome-icon",{attrs:{icon:"chevron-left",rotation:t.collapseVisible?270:null}})],1)],1)],1)]),t._v(" "),n("b-collapse",{staticClass:"mt-1",attrs:{id:t.collapseName},model:{value:t.collapseVisible,callback:function(e){t.collapseVisible=e},expression:"collapseVisible"}},[n("b-card",{staticClass:"text-left"},[t.renderGraph?n("Plotly",{attrs:{data:t.plot_data(),layout:t.layout(),"display-mode-bar":!0}}):t._e()],1)],1)],1)}),[],!1,null,"ca4b7f2a",null);e.default=component.exports},341:function(t,e,n){var r;r=function(){var t=JSON.parse('{"$":"dollar","%":"percent","&":"and","<":"less",">":"greater","|":"or","¢":"cent","£":"pound","¤":"currency","¥":"yen","©":"(c)","ª":"a","®":"(r)","º":"o","À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","Æ":"AE","Ç":"C","È":"E","É":"E","Ê":"E","Ë":"E","Ì":"I","Í":"I","Î":"I","Ï":"I","Ð":"D","Ñ":"N","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","Ù":"U","Ú":"U","Û":"U","Ü":"U","Ý":"Y","Þ":"TH","ß":"ss","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","æ":"ae","ç":"c","è":"e","é":"e","ê":"e","ë":"e","ì":"i","í":"i","î":"i","ï":"i","ð":"d","ñ":"n","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","ù":"u","ú":"u","û":"u","ü":"u","ý":"y","þ":"th","ÿ":"y","Ā":"A","ā":"a","Ă":"A","ă":"a","Ą":"A","ą":"a","Ć":"C","ć":"c","Č":"C","č":"c","Ď":"D","ď":"d","Đ":"DJ","đ":"dj","Ē":"E","ē":"e","Ė":"E","ė":"e","Ę":"e","ę":"e","Ě":"E","ě":"e","Ğ":"G","ğ":"g","Ģ":"G","ģ":"g","Ĩ":"I","ĩ":"i","Ī":"i","ī":"i","Į":"I","į":"i","İ":"I","ı":"i","Ķ":"k","ķ":"k","Ļ":"L","ļ":"l","Ľ":"L","ľ":"l","Ł":"L","ł":"l","Ń":"N","ń":"n","Ņ":"N","ņ":"n","Ň":"N","ň":"n","Ō":"O","ō":"o","Ő":"O","ő":"o","Œ":"OE","œ":"oe","Ŕ":"R","ŕ":"r","Ř":"R","ř":"r","Ś":"S","ś":"s","Ş":"S","ş":"s","Š":"S","š":"s","Ţ":"T","ţ":"t","Ť":"T","ť":"t","Ũ":"U","ũ":"u","Ū":"u","ū":"u","Ů":"U","ů":"u","Ű":"U","ű":"u","Ų":"U","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","ź":"z","Ż":"Z","ż":"z","Ž":"Z","ž":"z","Ə":"E","ƒ":"f","Ơ":"O","ơ":"o","Ư":"U","ư":"u","ǈ":"LJ","ǉ":"lj","ǋ":"NJ","ǌ":"nj","Ș":"S","ș":"s","Ț":"T","ț":"t","ə":"e","˚":"o","Ά":"A","Έ":"E","Ή":"H","Ί":"I","Ό":"O","Ύ":"Y","Ώ":"W","ΐ":"i","Α":"A","Β":"B","Γ":"G","Δ":"D","Ε":"E","Ζ":"Z","Η":"H","Θ":"8","Ι":"I","Κ":"K","Λ":"L","Μ":"M","Ν":"N","Ξ":"3","Ο":"O","Π":"P","Ρ":"R","Σ":"S","Τ":"T","Υ":"Y","Φ":"F","Χ":"X","Ψ":"PS","Ω":"W","Ϊ":"I","Ϋ":"Y","ά":"a","έ":"e","ή":"h","ί":"i","ΰ":"y","α":"a","β":"b","γ":"g","δ":"d","ε":"e","ζ":"z","η":"h","θ":"8","ι":"i","κ":"k","λ":"l","μ":"m","ν":"n","ξ":"3","ο":"o","π":"p","ρ":"r","ς":"s","σ":"s","τ":"t","υ":"y","φ":"f","χ":"x","ψ":"ps","ω":"w","ϊ":"i","ϋ":"y","ό":"o","ύ":"y","ώ":"w","Ё":"Yo","Ђ":"DJ","Є":"Ye","І":"I","Ї":"Yi","Ј":"J","Љ":"LJ","Њ":"NJ","Ћ":"C","Џ":"DZ","А":"A","Б":"B","В":"V","Г":"G","Д":"D","Е":"E","Ж":"Zh","З":"Z","И":"I","Й":"J","К":"K","Л":"L","М":"M","Н":"N","О":"O","П":"P","Р":"R","С":"S","Т":"T","У":"U","Ф":"F","Х":"H","Ц":"C","Ч":"Ch","Ш":"Sh","Щ":"Sh","Ъ":"U","Ы":"Y","Ь":"","Э":"E","Ю":"Yu","Я":"Ya","а":"a","б":"b","в":"v","г":"g","д":"d","е":"e","ж":"zh","з":"z","и":"i","й":"j","к":"k","л":"l","м":"m","н":"n","о":"o","п":"p","р":"r","с":"s","т":"t","у":"u","ф":"f","х":"h","ц":"c","ч":"ch","ш":"sh","щ":"sh","ъ":"u","ы":"y","ь":"","э":"e","ю":"yu","я":"ya","ё":"yo","ђ":"dj","є":"ye","і":"i","ї":"yi","ј":"j","љ":"lj","њ":"nj","ћ":"c","ѝ":"u","џ":"dz","Ґ":"G","ґ":"g","Ғ":"GH","ғ":"gh","Қ":"KH","қ":"kh","Ң":"NG","ң":"ng","Ү":"UE","ү":"ue","Ұ":"U","ұ":"u","Һ":"H","һ":"h","Ә":"AE","ә":"ae","Ө":"OE","ө":"oe","Ա":"A","Բ":"B","Գ":"G","Դ":"D","Ե":"E","Զ":"Z","Է":"E\'","Ը":"Y\'","Թ":"T\'","Ժ":"JH","Ի":"I","Լ":"L","Խ":"X","Ծ":"C\'","Կ":"K","Հ":"H","Ձ":"D\'","Ղ":"GH","Ճ":"TW","Մ":"M","Յ":"Y","Ն":"N","Շ":"SH","Չ":"CH","Պ":"P","Ջ":"J","Ռ":"R\'","Ս":"S","Վ":"V","Տ":"T","Ր":"R","Ց":"C","Փ":"P\'","Ք":"Q\'","Օ":"O\'\'","Ֆ":"F","և":"EV","ء":"a","آ":"aa","أ":"a","ؤ":"u","إ":"i","ئ":"e","ا":"a","ب":"b","ة":"h","ت":"t","ث":"th","ج":"j","ح":"h","خ":"kh","د":"d","ذ":"th","ر":"r","ز":"z","س":"s","ش":"sh","ص":"s","ض":"dh","ط":"t","ظ":"z","ع":"a","غ":"gh","ف":"f","ق":"q","ك":"k","ل":"l","م":"m","ن":"n","ه":"h","و":"w","ى":"a","ي":"y","ً":"an","ٌ":"on","ٍ":"en","َ":"a","ُ":"u","ِ":"e","ْ":"","٠":"0","١":"1","٢":"2","٣":"3","٤":"4","٥":"5","٦":"6","٧":"7","٨":"8","٩":"9","پ":"p","چ":"ch","ژ":"zh","ک":"k","گ":"g","ی":"y","۰":"0","۱":"1","۲":"2","۳":"3","۴":"4","۵":"5","۶":"6","۷":"7","۸":"8","۹":"9","฿":"baht","ა":"a","ბ":"b","გ":"g","დ":"d","ე":"e","ვ":"v","ზ":"z","თ":"t","ი":"i","კ":"k","ლ":"l","მ":"m","ნ":"n","ო":"o","პ":"p","ჟ":"zh","რ":"r","ს":"s","ტ":"t","უ":"u","ფ":"f","ქ":"k","ღ":"gh","ყ":"q","შ":"sh","ჩ":"ch","ც":"ts","ძ":"dz","წ":"ts","ჭ":"ch","ხ":"kh","ჯ":"j","ჰ":"h","Ṣ":"S","ṣ":"s","Ẁ":"W","ẁ":"w","Ẃ":"W","ẃ":"w","Ẅ":"W","ẅ":"w","ẞ":"SS","Ạ":"A","ạ":"a","Ả":"A","ả":"a","Ấ":"A","ấ":"a","Ầ":"A","ầ":"a","Ẩ":"A","ẩ":"a","Ẫ":"A","ẫ":"a","Ậ":"A","ậ":"a","Ắ":"A","ắ":"a","Ằ":"A","ằ":"a","Ẳ":"A","ẳ":"a","Ẵ":"A","ẵ":"a","Ặ":"A","ặ":"a","Ẹ":"E","ẹ":"e","Ẻ":"E","ẻ":"e","Ẽ":"E","ẽ":"e","Ế":"E","ế":"e","Ề":"E","ề":"e","Ể":"E","ể":"e","Ễ":"E","ễ":"e","Ệ":"E","ệ":"e","Ỉ":"I","ỉ":"i","Ị":"I","ị":"i","Ọ":"O","ọ":"o","Ỏ":"O","ỏ":"o","Ố":"O","ố":"o","Ồ":"O","ồ":"o","Ổ":"O","ổ":"o","Ỗ":"O","ỗ":"o","Ộ":"O","ộ":"o","Ớ":"O","ớ":"o","Ờ":"O","ờ":"o","Ở":"O","ở":"o","Ỡ":"O","ỡ":"o","Ợ":"O","ợ":"o","Ụ":"U","ụ":"u","Ủ":"U","ủ":"u","Ứ":"U","ứ":"u","Ừ":"U","ừ":"u","Ử":"U","ử":"u","Ữ":"U","ữ":"u","Ự":"U","ự":"u","Ỳ":"Y","ỳ":"y","Ỵ":"Y","ỵ":"y","Ỷ":"Y","ỷ":"y","Ỹ":"Y","ỹ":"y","–":"-","‘":"\'","’":"\'","“":"\\"","”":"\\"","„":"\\"","†":"+","•":"*","…":"...","₠":"ecu","₢":"cruzeiro","₣":"french franc","₤":"lira","₥":"mill","₦":"naira","₧":"peseta","₨":"rupee","₩":"won","₪":"new shequel","₫":"dong","€":"euro","₭":"kip","₮":"tugrik","₯":"drachma","₰":"penny","₱":"peso","₲":"guarani","₳":"austral","₴":"hryvnia","₵":"cedi","₸":"kazakhstani tenge","₹":"indian rupee","₺":"turkish lira","₽":"russian ruble","₿":"bitcoin","℠":"sm","™":"tm","∂":"d","∆":"delta","∑":"sum","∞":"infinity","♥":"love","元":"yuan","円":"yen","﷼":"rial","ﻵ":"laa","ﻷ":"laa","ﻹ":"lai","ﻻ":"la"}'),e=JSON.parse('{"bg":{"Й":"Y","Ц":"Ts","Щ":"Sht","Ъ":"A","Ь":"Y","й":"y","ц":"ts","щ":"sht","ъ":"a","ь":"y"},"de":{"Ä":"AE","ä":"ae","Ö":"OE","ö":"oe","Ü":"UE","ü":"ue","ß":"ss","%":"prozent","&":"und","|":"oder","∑":"summe","∞":"unendlich","♥":"liebe"},"es":{"%":"por ciento","&":"y","<":"menor que",">":"mayor que","|":"o","¢":"centavos","£":"libras","¤":"moneda","₣":"francos","∑":"suma","∞":"infinito","♥":"amor"},"fr":{"%":"pourcent","&":"et","<":"plus petit",">":"plus grand","|":"ou","¢":"centime","£":"livre","¤":"devise","₣":"franc","∑":"somme","∞":"infini","♥":"amour"},"pt":{"%":"porcento","&":"e","<":"menor",">":"maior","|":"ou","¢":"centavo","∑":"soma","£":"libra","∞":"infinito","♥":"amor"},"uk":{"И":"Y","и":"y","Й":"Y","й":"y","Ц":"Ts","ц":"ts","Х":"Kh","х":"kh","Щ":"Shch","щ":"shch","Г":"H","г":"h"},"vi":{"Đ":"D","đ":"d"},"da":{"Ø":"OE","ø":"oe","Å":"AA","å":"aa","%":"procent","&":"og","|":"eller","$":"dollar","<":"mindre end",">":"større end"},"nb":{"&":"og","Å":"AA","Æ":"AE","Ø":"OE","å":"aa","æ":"ae","ø":"oe"},"it":{"&":"e"},"nl":{"&":"en"},"sv":{"&":"och","Å":"AA","Ä":"AE","Ö":"OE","å":"aa","ä":"ae","ö":"oe"}}');function n(n,r){if("string"!=typeof n)throw new Error("slugify: string argument expected");var o=e[(r="string"==typeof r?{replacement:r}:r||{}).locale]||{},c=void 0===r.replacement?"-":r.replacement,l=void 0===r.trim||r.trim,d=n.normalize().split("").reduce((function(e,n){var l=o[n]||t[n]||n;return l===c&&(l=" "),e+l.replace(r.remove||/[^\w\s$*_+~.()'"!\-:@]+/g,"")}),"");return r.strict&&(d=d.replace(/[^A-Za-z0-9\s]/g,"")),l&&(d=d.trim()),d=d.replace(/\s+/g,c),r.lower&&(d=d.toLowerCase()),d}return n.extend=function(e){Object.assign(t,e)},n},t.exports=r(),t.exports.default=r()},342:function(t,e,n){"use strict";n(297)},343:function(t,e,n){var r=n(79)(!1);r.push([t.i,"*[data-v-ca4b7f2a]{color:#000}img[data-v-ca4b7f2a]{filter:drop-shadow(0 0 .5rem black)}.limit-height[data-v-ca4b7f2a]{max-height:4rem;display:flex}.split-icon[data-v-ca4b7f2a]{-o-object-fit:contain;object-fit:contain;max-width:100%;max-height:256px;width:auto;height:auto}.toggle-collapse[data-v-ca4b7f2a]{position:absolute;top:1rem;right:1rem}small[data-v-ca4b7f2a]{color:#6b6b6b;font-size:1rem}",""]),t.exports=r}}]);