(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{280:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return c}));n(11),n(162),n(15),n(127);var r=function(time){var e=time.match(/([0-9]+):([0-9]+):([0-9.]+)/);if(!e)return 0;var t=+e[1],n=+e[2];return+e[3]+60*n+3600*t},o=function(time){var e=time.match(/([0-9]+):([0-9]+):([0-9.]+)/);if(!e)return"";var t=+e[1],n=+e[2],r=+e[3],o="";return t&&(o+="".concat(t,"h")),n&&(o+="".concat(n,"m")),o+="".concat(r<10?"0":"").concat(r.toFixed(2),"s")},c=function(time){var e="",t=!0;return time>3600&&(t=!1,e+="".concat(Math.floor(time/3600),"h"),time%=3600),time>60&&(t=!1,e+="".concat(Math.floor(time/60),"m"),time%=60),e+="".concat(!t&&time<10?"0":"").concat(Math.abs(+time.toFixed(2)),"s")}},282:function(e,t,n){var content=n(312);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(81).default)("1a09b1cc",content,!0,{sourceMap:!1})},311:function(e,t,n){"use strict";n(282)},312:function(e,t,n){var r=n(80)(!1);r.push([e.i,"*[data-v-2f558cb9]{color:#000}img[data-v-2f558cb9]{filter:drop-shadow(0 0 .5rem black)}.limit-height[data-v-2f558cb9]{max-height:4rem;display:flex}.split-icon[data-v-2f558cb9]{-o-object-fit:contain;object-fit:contain;max-width:100%;max-height:256px;width:auto;height:auto}.toggle-collapse[data-v-2f558cb9]{position:absolute;top:1rem;right:1rem}",""]),e.exports=r},314:function(e,t,n){var r;r=function(){var e=JSON.parse('{"$":"dollar","%":"percent","&":"and","<":"less",">":"greater","|":"or","¢":"cent","£":"pound","¤":"currency","¥":"yen","©":"(c)","ª":"a","®":"(r)","º":"o","À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","Æ":"AE","Ç":"C","È":"E","É":"E","Ê":"E","Ë":"E","Ì":"I","Í":"I","Î":"I","Ï":"I","Ð":"D","Ñ":"N","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","Ù":"U","Ú":"U","Û":"U","Ü":"U","Ý":"Y","Þ":"TH","ß":"ss","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","æ":"ae","ç":"c","è":"e","é":"e","ê":"e","ë":"e","ì":"i","í":"i","î":"i","ï":"i","ð":"d","ñ":"n","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","ù":"u","ú":"u","û":"u","ü":"u","ý":"y","þ":"th","ÿ":"y","Ā":"A","ā":"a","Ă":"A","ă":"a","Ą":"A","ą":"a","Ć":"C","ć":"c","Č":"C","č":"c","Ď":"D","ď":"d","Đ":"DJ","đ":"dj","Ē":"E","ē":"e","Ė":"E","ė":"e","Ę":"e","ę":"e","Ě":"E","ě":"e","Ğ":"G","ğ":"g","Ģ":"G","ģ":"g","Ĩ":"I","ĩ":"i","Ī":"i","ī":"i","Į":"I","į":"i","İ":"I","ı":"i","Ķ":"k","ķ":"k","Ļ":"L","ļ":"l","Ľ":"L","ľ":"l","Ł":"L","ł":"l","Ń":"N","ń":"n","Ņ":"N","ņ":"n","Ň":"N","ň":"n","Ō":"O","ō":"o","Ő":"O","ő":"o","Œ":"OE","œ":"oe","Ŕ":"R","ŕ":"r","Ř":"R","ř":"r","Ś":"S","ś":"s","Ş":"S","ş":"s","Š":"S","š":"s","Ţ":"T","ţ":"t","Ť":"T","ť":"t","Ũ":"U","ũ":"u","Ū":"u","ū":"u","Ů":"U","ů":"u","Ű":"U","ű":"u","Ų":"U","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","ź":"z","Ż":"Z","ż":"z","Ž":"Z","ž":"z","Ə":"E","ƒ":"f","Ơ":"O","ơ":"o","Ư":"U","ư":"u","ǈ":"LJ","ǉ":"lj","ǋ":"NJ","ǌ":"nj","Ș":"S","ș":"s","Ț":"T","ț":"t","ə":"e","˚":"o","Ά":"A","Έ":"E","Ή":"H","Ί":"I","Ό":"O","Ύ":"Y","Ώ":"W","ΐ":"i","Α":"A","Β":"B","Γ":"G","Δ":"D","Ε":"E","Ζ":"Z","Η":"H","Θ":"8","Ι":"I","Κ":"K","Λ":"L","Μ":"M","Ν":"N","Ξ":"3","Ο":"O","Π":"P","Ρ":"R","Σ":"S","Τ":"T","Υ":"Y","Φ":"F","Χ":"X","Ψ":"PS","Ω":"W","Ϊ":"I","Ϋ":"Y","ά":"a","έ":"e","ή":"h","ί":"i","ΰ":"y","α":"a","β":"b","γ":"g","δ":"d","ε":"e","ζ":"z","η":"h","θ":"8","ι":"i","κ":"k","λ":"l","μ":"m","ν":"n","ξ":"3","ο":"o","π":"p","ρ":"r","ς":"s","σ":"s","τ":"t","υ":"y","φ":"f","χ":"x","ψ":"ps","ω":"w","ϊ":"i","ϋ":"y","ό":"o","ύ":"y","ώ":"w","Ё":"Yo","Ђ":"DJ","Є":"Ye","І":"I","Ї":"Yi","Ј":"J","Љ":"LJ","Њ":"NJ","Ћ":"C","Џ":"DZ","А":"A","Б":"B","В":"V","Г":"G","Д":"D","Е":"E","Ж":"Zh","З":"Z","И":"I","Й":"J","К":"K","Л":"L","М":"M","Н":"N","О":"O","П":"P","Р":"R","С":"S","Т":"T","У":"U","Ф":"F","Х":"H","Ц":"C","Ч":"Ch","Ш":"Sh","Щ":"Sh","Ъ":"U","Ы":"Y","Ь":"","Э":"E","Ю":"Yu","Я":"Ya","а":"a","б":"b","в":"v","г":"g","д":"d","е":"e","ж":"zh","з":"z","и":"i","й":"j","к":"k","л":"l","м":"m","н":"n","о":"o","п":"p","р":"r","с":"s","т":"t","у":"u","ф":"f","х":"h","ц":"c","ч":"ch","ш":"sh","щ":"sh","ъ":"u","ы":"y","ь":"","э":"e","ю":"yu","я":"ya","ё":"yo","ђ":"dj","є":"ye","і":"i","ї":"yi","ј":"j","љ":"lj","њ":"nj","ћ":"c","ѝ":"u","џ":"dz","Ґ":"G","ґ":"g","Ғ":"GH","ғ":"gh","Қ":"KH","қ":"kh","Ң":"NG","ң":"ng","Ү":"UE","ү":"ue","Ұ":"U","ұ":"u","Һ":"H","һ":"h","Ә":"AE","ә":"ae","Ө":"OE","ө":"oe","Ա":"A","Բ":"B","Գ":"G","Դ":"D","Ե":"E","Զ":"Z","Է":"E\'","Ը":"Y\'","Թ":"T\'","Ժ":"JH","Ի":"I","Լ":"L","Խ":"X","Ծ":"C\'","Կ":"K","Հ":"H","Ձ":"D\'","Ղ":"GH","Ճ":"TW","Մ":"M","Յ":"Y","Ն":"N","Շ":"SH","Չ":"CH","Պ":"P","Ջ":"J","Ռ":"R\'","Ս":"S","Վ":"V","Տ":"T","Ր":"R","Ց":"C","Փ":"P\'","Ք":"Q\'","Օ":"O\'\'","Ֆ":"F","և":"EV","ء":"a","آ":"aa","أ":"a","ؤ":"u","إ":"i","ئ":"e","ا":"a","ب":"b","ة":"h","ت":"t","ث":"th","ج":"j","ح":"h","خ":"kh","د":"d","ذ":"th","ر":"r","ز":"z","س":"s","ش":"sh","ص":"s","ض":"dh","ط":"t","ظ":"z","ع":"a","غ":"gh","ف":"f","ق":"q","ك":"k","ل":"l","م":"m","ن":"n","ه":"h","و":"w","ى":"a","ي":"y","ً":"an","ٌ":"on","ٍ":"en","َ":"a","ُ":"u","ِ":"e","ْ":"","٠":"0","١":"1","٢":"2","٣":"3","٤":"4","٥":"5","٦":"6","٧":"7","٨":"8","٩":"9","پ":"p","چ":"ch","ژ":"zh","ک":"k","گ":"g","ی":"y","۰":"0","۱":"1","۲":"2","۳":"3","۴":"4","۵":"5","۶":"6","۷":"7","۸":"8","۹":"9","฿":"baht","ა":"a","ბ":"b","გ":"g","დ":"d","ე":"e","ვ":"v","ზ":"z","თ":"t","ი":"i","კ":"k","ლ":"l","მ":"m","ნ":"n","ო":"o","პ":"p","ჟ":"zh","რ":"r","ს":"s","ტ":"t","უ":"u","ფ":"f","ქ":"k","ღ":"gh","ყ":"q","შ":"sh","ჩ":"ch","ც":"ts","ძ":"dz","წ":"ts","ჭ":"ch","ხ":"kh","ჯ":"j","ჰ":"h","Ṣ":"S","ṣ":"s","Ẁ":"W","ẁ":"w","Ẃ":"W","ẃ":"w","Ẅ":"W","ẅ":"w","ẞ":"SS","Ạ":"A","ạ":"a","Ả":"A","ả":"a","Ấ":"A","ấ":"a","Ầ":"A","ầ":"a","Ẩ":"A","ẩ":"a","Ẫ":"A","ẫ":"a","Ậ":"A","ậ":"a","Ắ":"A","ắ":"a","Ằ":"A","ằ":"a","Ẳ":"A","ẳ":"a","Ẵ":"A","ẵ":"a","Ặ":"A","ặ":"a","Ẹ":"E","ẹ":"e","Ẻ":"E","ẻ":"e","Ẽ":"E","ẽ":"e","Ế":"E","ế":"e","Ề":"E","ề":"e","Ể":"E","ể":"e","Ễ":"E","ễ":"e","Ệ":"E","ệ":"e","Ỉ":"I","ỉ":"i","Ị":"I","ị":"i","Ọ":"O","ọ":"o","Ỏ":"O","ỏ":"o","Ố":"O","ố":"o","Ồ":"O","ồ":"o","Ổ":"O","ổ":"o","Ỗ":"O","ỗ":"o","Ộ":"O","ộ":"o","Ớ":"O","ớ":"o","Ờ":"O","ờ":"o","Ở":"O","ở":"o","Ỡ":"O","ỡ":"o","Ợ":"O","ợ":"o","Ụ":"U","ụ":"u","Ủ":"U","ủ":"u","Ứ":"U","ứ":"u","Ừ":"U","ừ":"u","Ử":"U","ử":"u","Ữ":"U","ữ":"u","Ự":"U","ự":"u","Ỳ":"Y","ỳ":"y","Ỵ":"Y","ỵ":"y","Ỷ":"Y","ỷ":"y","Ỹ":"Y","ỹ":"y","–":"-","‘":"\'","’":"\'","“":"\\"","”":"\\"","„":"\\"","†":"+","•":"*","…":"...","₠":"ecu","₢":"cruzeiro","₣":"french franc","₤":"lira","₥":"mill","₦":"naira","₧":"peseta","₨":"rupee","₩":"won","₪":"new shequel","₫":"dong","€":"euro","₭":"kip","₮":"tugrik","₯":"drachma","₰":"penny","₱":"peso","₲":"guarani","₳":"austral","₴":"hryvnia","₵":"cedi","₸":"kazakhstani tenge","₹":"indian rupee","₺":"turkish lira","₽":"russian ruble","₿":"bitcoin","℠":"sm","™":"tm","∂":"d","∆":"delta","∑":"sum","∞":"infinity","♥":"love","元":"yuan","円":"yen","﷼":"rial","ﻵ":"laa","ﻷ":"laa","ﻹ":"lai","ﻻ":"la"}'),t=JSON.parse('{"bg":{"Й":"Y","Ц":"Ts","Щ":"Sht","Ъ":"A","Ь":"Y","й":"y","ц":"ts","щ":"sht","ъ":"a","ь":"y"},"de":{"Ä":"AE","ä":"ae","Ö":"OE","ö":"oe","Ü":"UE","ü":"ue","ß":"ss","%":"prozent","&":"und","|":"oder","∑":"summe","∞":"unendlich","♥":"liebe"},"es":{"%":"por ciento","&":"y","<":"menor que",">":"mayor que","|":"o","¢":"centavos","£":"libras","¤":"moneda","₣":"francos","∑":"suma","∞":"infinito","♥":"amor"},"fr":{"%":"pourcent","&":"et","<":"plus petit",">":"plus grand","|":"ou","¢":"centime","£":"livre","¤":"devise","₣":"franc","∑":"somme","∞":"infini","♥":"amour"},"pt":{"%":"porcento","&":"e","<":"menor",">":"maior","|":"ou","¢":"centavo","∑":"soma","£":"libra","∞":"infinito","♥":"amor"},"uk":{"И":"Y","и":"y","Й":"Y","й":"y","Ц":"Ts","ц":"ts","Х":"Kh","х":"kh","Щ":"Shch","щ":"shch","Г":"H","г":"h"},"vi":{"Đ":"D","đ":"d"},"da":{"Ø":"OE","ø":"oe","Å":"AA","å":"aa","%":"procent","&":"og","|":"eller","$":"dollar","<":"mindre end",">":"større end"},"nb":{"&":"og","Å":"AA","Æ":"AE","Ø":"OE","å":"aa","æ":"ae","ø":"oe"},"it":{"&":"e"},"nl":{"&":"en"},"sv":{"&":"och","Å":"AA","Ä":"AE","Ö":"OE","å":"aa","ä":"ae","ö":"oe"}}');function n(n,r){if("string"!=typeof n)throw new Error("slugify: string argument expected");var o=t[(r="string"==typeof r?{replacement:r}:r||{}).locale]||{},c=void 0===r.replacement?"-":r.replacement,l=void 0===r.trim||r.trim,f=n.normalize().split("").reduce((function(t,n){var l=o[n]||e[n]||n;return l===c&&(l=" "),t+l.replace(r.remove||/[^\w\s$*_+~.()'"!\-:@]+/g,"")}),"");return r.strict&&(f=f.replace(/[^A-Za-z0-9\s]/g,"")),l&&(f=f.trim()),f=f.replace(/\s+/g,c),r.lower&&(f=f.toLowerCase()),f}return n.extend=function(t){Object.assign(e,t)},n},e.exports=r(),e.exports.default=r()},315:function(e,t,n){"use strict";n.r(t);n(161);var r=n(24),o=n(25),c=n(61),l=n(100),f=n(45),h=n(41),m=(n(6),n(1),n(11),n(27),n(16),n(67),n(49),n(284),n(285),n(286),n(287),n(288),n(289),n(290),n(291),n(292),n(293),n(294),n(295),n(296),n(297),n(298),n(299),n(300),n(301),n(302),n(303),n(304),n(305),n(306),n(307),n(308),n(279)),d=n(280),y=(n(317),n(15),n(18),n(314)),v=n.n(y),A=n(283);function O(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(f.a)(e);if(t){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var E=function(e,t,n,desc){var r,o=arguments.length,c=o<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(h.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,desc);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(c=(o<3?r(c):o>3?r(t,n,c):r(t,n))||c);return o>3&&c&&Object.defineProperty(t,n,c),c},w=function(e){Object(c.a)(n,e);var t=O(n);function n(){var e;return Object(r.a)(this,n),(e=t.apply(this,arguments)).collapseVisible=!1,e.renderGraph=!0,e.layout=function(){return{title:"Time history",xaxis:{title:"Attempt number"},yaxis:{title:"Time (seconds)",rangemode:e.graphYAxisToZero?"tozero":"nonnegative"}}},e.formatTime=d.a,e}return Object(o.a)(n,[{key:"collapseName",get:function(){return"collapse-"+v()(this.split.Name)}},{key:"onGraphYAxisToZeroChange",value:function(){var e=this;this.renderGraph=!1,this.$nextTick((function(){e.renderGraph=!0}))}},{key:"plot_data",value:function(){var e=this.split.SegmentHistory.Time.map((function(e){return e.GameTime&&Object(d.c)(e.GameTime)||null})),t=this.split.SegmentHistory.Time.map((function(e){return e.GameTime||null}));return[{x:Array.from({length:this.split.SegmentHistory.Time.length},(function(e,t){return t})),y:e,text:t,type:"scatter",hoverinfo:"text",mode:"lines+markers",marker:{size:4},line:{width:1}}]}},{key:"srcFormattedIcon",value:function(e){var t=function(e){for(var t=atob(e),n=t.length,data=new Uint8Array(n),r=0;r<n;r++)data[r]=t.charCodeAt(r);var i,o=new Uint8Array([137,80,78,71,13,10,26,10]),c=(new Uint8Array([0,0,0,0,73,69,78,68]),0),l=0,f=!1;for(i=0;i<data.length&&(data[i]==o[c]?(0==c&&(l=i),c==o.length-1?(f=!0,console.log("Found beginning of PNG file at position "+l)):c++):c=0,!f);++i);if(!f)return console.error("No PNG file in input data"),null;for(;;){i+=4;var h=new Uint8Array([data[i],data[i-1],data[i-2],data[i-3]]),m=new Uint32Array(h.buffer,0,1)[0];i+=4,h=new Uint8Array([data[i-3],data[i-2],data[i-1],data[i]]);var d=(new TextDecoder).decode(h);if(console.log("Got chunk ".concat(d," of size ").concat(m)),i+=m,(i+=4)>data.length)return console.error("OOB"),null;if("IEND"==d)break}return data.slice(l,i)}(e.Icon);return t?"data:image/jpeg;base64,"+btoa(new Uint8Array(t).reduce((function(data,e){return data+String.fromCharCode(e)}),"")):null}}]),n}(m.Vue);E([Object(m.Prop)()],w.prototype,"split",void 0),E([Object(m.Prop)()],w.prototype,"graphYAxisToZero",void 0),E([Object(m.Watch)("graphYAxisToZero")],w.prototype,"onGraphYAxisToZeroChange",null);var T=w=E([Object(m.Component)({components:{Plotly:A.Plotly}})],w),k=(n(311),n(65)),component=Object(k.a)(T,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("b-card",{staticClass:"text-left"},[n("div",{staticClass:"limit-height"},[n("b-card-img",{staticClass:"split-icon mr-4",attrs:{src:e.srcFormattedIcon(e.split),block:""}}),e._v(" "),n("div",{staticClass:"mt-auto mb-auto"},[n("h3",[e._v("\n          "+e._s(e.split.Name)+"\n        ")]),e._v(" "),e.split.BestSegmentTime?n("p",[n("strong",[e._v("Best time:")]),e._v(" "+e._s(e.formatTime(e.split.BestSegmentTime.GameTime))+" (game time) ;\n          "+e._s(e.formatTime(e.split.BestSegmentTime.RealTime))+" (real time)\n        ")]):e._e(),e._v(" "),n("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:e.collapseName,expression:"collapseName"}],staticClass:"toggle-collapse",attrs:{variant:"outline-dark",pill:""}},[n("font-awesome-icon",{attrs:{icon:"chevron-left",rotation:e.collapseVisible?270:null}})],1)],1)],1)]),e._v(" "),n("b-collapse",{staticClass:"mt-1",attrs:{id:e.collapseName},model:{value:e.collapseVisible,callback:function(t){e.collapseVisible=t},expression:"collapseVisible"}},[n("b-card",{staticClass:"text-left"},[e.renderGraph?n("Plotly",{attrs:{data:e.plot_data(),layout:e.layout(),"display-mode-bar":!0}}):e._e()],1)],1)],1)}),[],!1,null,"2f558cb9",null);t.default=component.exports}}]);