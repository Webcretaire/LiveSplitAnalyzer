(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{281:function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));var n=function(t){return(null==t?void 0:t.GameTime)||(null==t?void 0:t.RealTime)||null}},282:function(t,e,r){"use strict";r.d(e,"d",(function(){return n})),r.d(e,"a",(function(){return o})),r.d(e,"b",(function(){return c})),r.d(e,"c",(function(){return l}));r(11),r(164),r(15),r(128);var n=function(time){var t=time.match(/([0-9]+):([0-9]+):([0-9.]+)/);if(!t)return 0;var e=+t[1],r=+t[2];return+t[3]+60*r+3600*e},o=function(time){var t=time.match(/([0-9]+):([0-9]+):([0-9.]+)/);if(!t)return"";var e=+t[1],r=+t[2],n=+t[3],o="";return e&&(o+="".concat(e,"h")),r&&(o+="".concat(r,"m")),o+="".concat(n<10?"0":"").concat(n.toFixed(2),"s")},c=function(time){var t="",e=!0;return time>3600&&(e=!1,t+="".concat(Math.floor(time/3600),"h"),time%=3600),time>60&&(e=!1,t+="".concat(Math.floor(time/60),"m"),time%=60),t+="".concat(!e&&time<10?"0":"").concat(Math.abs(+time.toFixed(2)),"s")},l=function(time){var t="";t+="".concat(Math.floor(time/3600),":"),time%=3600;var e=Math.floor(time/60);return t+="".concat(e<10?"0":"").concat(e,":"),t+="".concat((time%=60)<10?"0":"").concat(Math.abs(+time.toFixed(6)))}},290:function(t,e,r){var content=r(332);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(80).default)("50d10f60",content,!0,{sourceMap:!1})},330:function(t,e,r){var n;n=function(){var t=JSON.parse('{"$":"dollar","%":"percent","&":"and","<":"less",">":"greater","|":"or","¢":"cent","£":"pound","¤":"currency","¥":"yen","©":"(c)","ª":"a","®":"(r)","º":"o","À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","Æ":"AE","Ç":"C","È":"E","É":"E","Ê":"E","Ë":"E","Ì":"I","Í":"I","Î":"I","Ï":"I","Ð":"D","Ñ":"N","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","Ù":"U","Ú":"U","Û":"U","Ü":"U","Ý":"Y","Þ":"TH","ß":"ss","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","æ":"ae","ç":"c","è":"e","é":"e","ê":"e","ë":"e","ì":"i","í":"i","î":"i","ï":"i","ð":"d","ñ":"n","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","ù":"u","ú":"u","û":"u","ü":"u","ý":"y","þ":"th","ÿ":"y","Ā":"A","ā":"a","Ă":"A","ă":"a","Ą":"A","ą":"a","Ć":"C","ć":"c","Č":"C","č":"c","Ď":"D","ď":"d","Đ":"DJ","đ":"dj","Ē":"E","ē":"e","Ė":"E","ė":"e","Ę":"e","ę":"e","Ě":"E","ě":"e","Ğ":"G","ğ":"g","Ģ":"G","ģ":"g","Ĩ":"I","ĩ":"i","Ī":"i","ī":"i","Į":"I","į":"i","İ":"I","ı":"i","Ķ":"k","ķ":"k","Ļ":"L","ļ":"l","Ľ":"L","ľ":"l","Ł":"L","ł":"l","Ń":"N","ń":"n","Ņ":"N","ņ":"n","Ň":"N","ň":"n","Ō":"O","ō":"o","Ő":"O","ő":"o","Œ":"OE","œ":"oe","Ŕ":"R","ŕ":"r","Ř":"R","ř":"r","Ś":"S","ś":"s","Ş":"S","ş":"s","Š":"S","š":"s","Ţ":"T","ţ":"t","Ť":"T","ť":"t","Ũ":"U","ũ":"u","Ū":"u","ū":"u","Ů":"U","ů":"u","Ű":"U","ű":"u","Ų":"U","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","ź":"z","Ż":"Z","ż":"z","Ž":"Z","ž":"z","Ə":"E","ƒ":"f","Ơ":"O","ơ":"o","Ư":"U","ư":"u","ǈ":"LJ","ǉ":"lj","ǋ":"NJ","ǌ":"nj","Ș":"S","ș":"s","Ț":"T","ț":"t","ə":"e","˚":"o","Ά":"A","Έ":"E","Ή":"H","Ί":"I","Ό":"O","Ύ":"Y","Ώ":"W","ΐ":"i","Α":"A","Β":"B","Γ":"G","Δ":"D","Ε":"E","Ζ":"Z","Η":"H","Θ":"8","Ι":"I","Κ":"K","Λ":"L","Μ":"M","Ν":"N","Ξ":"3","Ο":"O","Π":"P","Ρ":"R","Σ":"S","Τ":"T","Υ":"Y","Φ":"F","Χ":"X","Ψ":"PS","Ω":"W","Ϊ":"I","Ϋ":"Y","ά":"a","έ":"e","ή":"h","ί":"i","ΰ":"y","α":"a","β":"b","γ":"g","δ":"d","ε":"e","ζ":"z","η":"h","θ":"8","ι":"i","κ":"k","λ":"l","μ":"m","ν":"n","ξ":"3","ο":"o","π":"p","ρ":"r","ς":"s","σ":"s","τ":"t","υ":"y","φ":"f","χ":"x","ψ":"ps","ω":"w","ϊ":"i","ϋ":"y","ό":"o","ύ":"y","ώ":"w","Ё":"Yo","Ђ":"DJ","Є":"Ye","І":"I","Ї":"Yi","Ј":"J","Љ":"LJ","Њ":"NJ","Ћ":"C","Џ":"DZ","А":"A","Б":"B","В":"V","Г":"G","Д":"D","Е":"E","Ж":"Zh","З":"Z","И":"I","Й":"J","К":"K","Л":"L","М":"M","Н":"N","О":"O","П":"P","Р":"R","С":"S","Т":"T","У":"U","Ф":"F","Х":"H","Ц":"C","Ч":"Ch","Ш":"Sh","Щ":"Sh","Ъ":"U","Ы":"Y","Ь":"","Э":"E","Ю":"Yu","Я":"Ya","а":"a","б":"b","в":"v","г":"g","д":"d","е":"e","ж":"zh","з":"z","и":"i","й":"j","к":"k","л":"l","м":"m","н":"n","о":"o","п":"p","р":"r","с":"s","т":"t","у":"u","ф":"f","х":"h","ц":"c","ч":"ch","ш":"sh","щ":"sh","ъ":"u","ы":"y","ь":"","э":"e","ю":"yu","я":"ya","ё":"yo","ђ":"dj","є":"ye","і":"i","ї":"yi","ј":"j","љ":"lj","њ":"nj","ћ":"c","ѝ":"u","џ":"dz","Ґ":"G","ґ":"g","Ғ":"GH","ғ":"gh","Қ":"KH","қ":"kh","Ң":"NG","ң":"ng","Ү":"UE","ү":"ue","Ұ":"U","ұ":"u","Һ":"H","һ":"h","Ә":"AE","ә":"ae","Ө":"OE","ө":"oe","Ա":"A","Բ":"B","Գ":"G","Դ":"D","Ե":"E","Զ":"Z","Է":"E\'","Ը":"Y\'","Թ":"T\'","Ժ":"JH","Ի":"I","Լ":"L","Խ":"X","Ծ":"C\'","Կ":"K","Հ":"H","Ձ":"D\'","Ղ":"GH","Ճ":"TW","Մ":"M","Յ":"Y","Ն":"N","Շ":"SH","Չ":"CH","Պ":"P","Ջ":"J","Ռ":"R\'","Ս":"S","Վ":"V","Տ":"T","Ր":"R","Ց":"C","Փ":"P\'","Ք":"Q\'","Օ":"O\'\'","Ֆ":"F","և":"EV","ء":"a","آ":"aa","أ":"a","ؤ":"u","إ":"i","ئ":"e","ا":"a","ب":"b","ة":"h","ت":"t","ث":"th","ج":"j","ح":"h","خ":"kh","د":"d","ذ":"th","ر":"r","ز":"z","س":"s","ش":"sh","ص":"s","ض":"dh","ط":"t","ظ":"z","ع":"a","غ":"gh","ف":"f","ق":"q","ك":"k","ل":"l","م":"m","ن":"n","ه":"h","و":"w","ى":"a","ي":"y","ً":"an","ٌ":"on","ٍ":"en","َ":"a","ُ":"u","ِ":"e","ْ":"","٠":"0","١":"1","٢":"2","٣":"3","٤":"4","٥":"5","٦":"6","٧":"7","٨":"8","٩":"9","پ":"p","چ":"ch","ژ":"zh","ک":"k","گ":"g","ی":"y","۰":"0","۱":"1","۲":"2","۳":"3","۴":"4","۵":"5","۶":"6","۷":"7","۸":"8","۹":"9","฿":"baht","ა":"a","ბ":"b","გ":"g","დ":"d","ე":"e","ვ":"v","ზ":"z","თ":"t","ი":"i","კ":"k","ლ":"l","მ":"m","ნ":"n","ო":"o","პ":"p","ჟ":"zh","რ":"r","ს":"s","ტ":"t","უ":"u","ფ":"f","ქ":"k","ღ":"gh","ყ":"q","შ":"sh","ჩ":"ch","ც":"ts","ძ":"dz","წ":"ts","ჭ":"ch","ხ":"kh","ჯ":"j","ჰ":"h","Ṣ":"S","ṣ":"s","Ẁ":"W","ẁ":"w","Ẃ":"W","ẃ":"w","Ẅ":"W","ẅ":"w","ẞ":"SS","Ạ":"A","ạ":"a","Ả":"A","ả":"a","Ấ":"A","ấ":"a","Ầ":"A","ầ":"a","Ẩ":"A","ẩ":"a","Ẫ":"A","ẫ":"a","Ậ":"A","ậ":"a","Ắ":"A","ắ":"a","Ằ":"A","ằ":"a","Ẳ":"A","ẳ":"a","Ẵ":"A","ẵ":"a","Ặ":"A","ặ":"a","Ẹ":"E","ẹ":"e","Ẻ":"E","ẻ":"e","Ẽ":"E","ẽ":"e","Ế":"E","ế":"e","Ề":"E","ề":"e","Ể":"E","ể":"e","Ễ":"E","ễ":"e","Ệ":"E","ệ":"e","Ỉ":"I","ỉ":"i","Ị":"I","ị":"i","Ọ":"O","ọ":"o","Ỏ":"O","ỏ":"o","Ố":"O","ố":"o","Ồ":"O","ồ":"o","Ổ":"O","ổ":"o","Ỗ":"O","ỗ":"o","Ộ":"O","ộ":"o","Ớ":"O","ớ":"o","Ờ":"O","ờ":"o","Ở":"O","ở":"o","Ỡ":"O","ỡ":"o","Ợ":"O","ợ":"o","Ụ":"U","ụ":"u","Ủ":"U","ủ":"u","Ứ":"U","ứ":"u","Ừ":"U","ừ":"u","Ử":"U","ử":"u","Ữ":"U","ữ":"u","Ự":"U","ự":"u","Ỳ":"Y","ỳ":"y","Ỵ":"Y","ỵ":"y","Ỷ":"Y","ỷ":"y","Ỹ":"Y","ỹ":"y","–":"-","‘":"\'","’":"\'","“":"\\"","”":"\\"","„":"\\"","†":"+","•":"*","…":"...","₠":"ecu","₢":"cruzeiro","₣":"french franc","₤":"lira","₥":"mill","₦":"naira","₧":"peseta","₨":"rupee","₩":"won","₪":"new shequel","₫":"dong","€":"euro","₭":"kip","₮":"tugrik","₯":"drachma","₰":"penny","₱":"peso","₲":"guarani","₳":"austral","₴":"hryvnia","₵":"cedi","₸":"kazakhstani tenge","₹":"indian rupee","₺":"turkish lira","₽":"russian ruble","₿":"bitcoin","℠":"sm","™":"tm","∂":"d","∆":"delta","∑":"sum","∞":"infinity","♥":"love","元":"yuan","円":"yen","﷼":"rial","ﻵ":"laa","ﻷ":"laa","ﻹ":"lai","ﻻ":"la"}'),e=JSON.parse('{"bg":{"Й":"Y","Ц":"Ts","Щ":"Sht","Ъ":"A","Ь":"Y","й":"y","ц":"ts","щ":"sht","ъ":"a","ь":"y"},"de":{"Ä":"AE","ä":"ae","Ö":"OE","ö":"oe","Ü":"UE","ü":"ue","ß":"ss","%":"prozent","&":"und","|":"oder","∑":"summe","∞":"unendlich","♥":"liebe"},"es":{"%":"por ciento","&":"y","<":"menor que",">":"mayor que","|":"o","¢":"centavos","£":"libras","¤":"moneda","₣":"francos","∑":"suma","∞":"infinito","♥":"amor"},"fr":{"%":"pourcent","&":"et","<":"plus petit",">":"plus grand","|":"ou","¢":"centime","£":"livre","¤":"devise","₣":"franc","∑":"somme","∞":"infini","♥":"amour"},"pt":{"%":"porcento","&":"e","<":"menor",">":"maior","|":"ou","¢":"centavo","∑":"soma","£":"libra","∞":"infinito","♥":"amor"},"uk":{"И":"Y","и":"y","Й":"Y","й":"y","Ц":"Ts","ц":"ts","Х":"Kh","х":"kh","Щ":"Shch","щ":"shch","Г":"H","г":"h"},"vi":{"Đ":"D","đ":"d"},"da":{"Ø":"OE","ø":"oe","Å":"AA","å":"aa","%":"procent","&":"og","|":"eller","$":"dollar","<":"mindre end",">":"større end"},"nb":{"&":"og","Å":"AA","Æ":"AE","Ø":"OE","å":"aa","æ":"ae","ø":"oe"},"it":{"&":"e"},"nl":{"&":"en"},"sv":{"&":"och","Å":"AA","Ä":"AE","Ö":"OE","å":"aa","ä":"ae","ö":"oe"}}');function r(r,n){if("string"!=typeof r)throw new Error("slugify: string argument expected");var o=e[(n="string"==typeof n?{replacement:n}:n||{}).locale]||{},c=void 0===n.replacement?"-":n.replacement,l=void 0===n.trim||n.trim,d=r.normalize().split("").reduce((function(e,r){var l=o[r]||t[r]||r;return l===c&&(l=" "),e+l.replace(n.remove||/[^\w\s$*_+~.()'"!\-:@]+/g,"")}),"");return n.strict&&(d=d.replace(/[^A-Za-z0-9\s]/g,"")),l&&(d=d.trim()),d=d.replace(/\s+/g,c),n.lower&&(d=d.toLowerCase()),d}return r.extend=function(e){Object.assign(t,e)},r},t.exports=n(),t.exports.default=n()},331:function(t,e,r){"use strict";r(290)},332:function(t,e,r){var n=r(79)(!1);n.push([t.i,"*[data-v-f708a206]{color:#000}img[data-v-f708a206]{filter:drop-shadow(0 0 .5rem black)}.limit-height[data-v-f708a206]{max-height:4rem;display:flex}.split-icon[data-v-f708a206]{-o-object-fit:contain;object-fit:contain;max-width:100%;max-height:256px;width:auto;height:auto}.toggle-collapse[data-v-f708a206]{position:absolute;top:1rem;right:1rem}small[data-v-f708a206]{color:#6b6b6b;font-size:1rem}",""]),t.exports=n},335:function(t,e,r){"use strict";r.r(e);r(163);var n=r(22),o=r(23),c=r(60),l=r(100),d=r(44),h=r(40),f=(r(6),r(1),r(165),r(11),r(27),r(127),r(16),r(2),r(15),r(67),r(49),r(295),r(296),r(297),r(298),r(299),r(300),r(301),r(302),r(303),r(304),r(305),r(306),r(307),r(308),r(309),r(310),r(311),r(312),r(313),r(314),r(315),r(316),r(317),r(318),r(319),r(280)),m=r(281),v=r(282),y=(r(340),r(18),"#1f77b4"),O="#ffc400",A="#2db41e",k=r(330),w=r.n(k),E=r(294);function j(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(d.a)(t);if(e){var o=Object(d.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(l.a)(this,r)}}var x=function(t,e,r,desc){var n,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(h.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(o<3?n(c):o>3?n(e,r,c):n(e,r))||c);return o>3&&c&&Object.defineProperty(e,r,c),c},S=function(t){Object(c.a)(r,t);var e=j(r);function r(){var t;return Object(n.a)(this,r),(t=e.apply(this,arguments)).collapseVisible=!1,t.renderGraph=!0,t.layout=function(){var e={title:"Time history",xaxis:{title:"Finished number (".concat(t.timesWithPositiveIds.length," total)")},yaxis:{title:"Time (seconds)",rangemode:t.graphYAxisToZero?"tozero":"nonnegative"},annotations:[{x:t.gold.x,y:t.gold.y,text:"Gold",font:{color:O},arrowhead:2,arrowsize:1,arrowwidth:2,arrowcolor:O,ax:0,ay:30}]},r=Object(m.a)(t.PB);return t.graphPBHline&&t.currentAttemptNumber&&r&&(e.shapes=[{type:"line",x0:0,y0:Object(v.d)(r),x1:t.timesSeconds.length-1,y1:Object(v.d)(r),line:{color:A,width:1,dash:"dot"}}]),e},t.formatTime=v.a,t}return Object(o.a)(r,[{key:"isSubsplit",get:function(){return this.split.Name.startsWith("-")}},{key:"bestTimeDisplay",get:function(){var t="";return this.split.BestSegmentTime.GameTime&&(t+="".concat(this.formatTime(this.split.BestSegmentTime.GameTime)," (game time) ; ")),this.split.BestSegmentTime.RealTime&&(t+="".concat(this.formatTime(this.split.BestSegmentTime.RealTime)," (real time)")),t}},{key:"gold",get:function(){for(var t=0,e=999999,i=0;i<this.timesSeconds.length;++i){var r=this.timesSeconds[i];r&&r<e&&(t=i,e=r)}return{x:t,y:e}}},{key:"PB",get:function(){var t=this;return this.timesWithPositiveIds.find((function(e){return e["@_id"]===t.currentAttemptNumber}))}},{key:"goldsMap",get:function(){var t=999999;return this.timesSeconds.map((function(e){return!!(e&&e<t)&&(t=e,!0)}))}},{key:"timesSeconds",get:function(){return this.timesWithPositiveIds.filter((function(t){return t["@_id"]>0})).map((function(t){var time=Object(m.a)(t);return time?Object(v.d)(time):null}))}},{key:"collapseName",get:function(){return"collapse-"+w()(this.split.Name)}},{key:"markerColors",get:function(){for(var t,e=[],i=0;i<this.timesWithPositiveIds.length;++i)this.timesWithPositiveIds[i]["@_id"]==(null===(t=this.PB)||void 0===t?void 0:t["@_id"])?e.push(A):e.push(this.goldsMap[i]?O:y);return e}},{key:"markerSizes",get:function(){for(var t,e=[],i=0;i<this.timesWithPositiveIds.length;++i)this.timesWithPositiveIds[i]["@_id"]==(null===(t=this.PB)||void 0===t?void 0:t["@_id"])?e.push(6):e.push(this.goldsMap[i]?5:3);return e}},{key:"timesWithPositiveIds",get:function(){return this.split.SegmentHistory.Time.filter((function(t){return t["@_id"]>0}))}},{key:"plot_data",value:function(){var t=this.timesWithPositiveIds.map((function(t){var time=Object(m.a)(t);return time?"".concat(Object(v.a)(time)," (attempt ").concat(t["@_id"],")"):""}));return[{x:Array.from({length:this.timesWithPositiveIds.length},(function(t,e){return e})),y:this.timesSeconds,text:t,type:"scatter",hoverinfo:"text",mode:"lines+markers",marker:{color:this.markerColors,size:this.markerSizes},line:{color:y,width:1}}]}},{key:"srcFormattedIcon",value:function(t){var e=function(t){for(var e=atob(t),r=e.length,data=new Uint8Array(r),n=0;n<r;n++)data[n]=e.charCodeAt(n);var i,o=new Uint8Array([137,80,78,71,13,10,26,10]),c=0,l=0,d=!1;for(i=0;i<data.length&&(data[i]==o[c]?(0==c&&(l=i),c==o.length-1?d=!0:c++):c=0,!d);++i);if(!d)return console.error("No PNG file in input data"),null;for(;;){i+=4;var h=new Uint8Array([data[i],data[i-1],data[i-2],data[i-3]]),f=new Uint32Array(h.buffer,0,1)[0];i+=4,h=new Uint8Array([data[i-3],data[i-2],data[i-1],data[i]]);var m=(new TextDecoder).decode(h);if(i+=f,(i+=4)>data.length)return console.error("OOB"),null;if("IEND"==m)break}return data.slice(l,i)}(t.Icon);return e?"data:image/jpeg;base64,"+btoa(new Uint8Array(e).reduce((function(data,t){return data+String.fromCharCode(t)}),"")):null}}]),r}(f.Vue);x([Object(f.Prop)()],S.prototype,"split",void 0),x([Object(f.Prop)({default:!1})],S.prototype,"graphYAxisToZero",void 0),x([Object(f.Prop)({default:!1})],S.prototype,"graphPBHline",void 0),x([Object(f.Prop)()],S.prototype,"currentAttemptNumber",void 0);var T=S=x([Object(f.Component)({components:{Plotly:E.Plotly}})],S),P=(r(331),r(65)),component=Object(P.a)(T,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("b-card",{staticClass:"text-left"},[r("div",{staticClass:"limit-height"},[t.srcFormattedIcon(t.split)?r("b-card-img",{staticClass:"split-icon mr-4",attrs:{src:t.srcFormattedIcon(t.split),block:""}}):t._e(),t._v(" "),r("div",{staticClass:"mt-auto mb-auto"},[r("h3",[t._v("\n          "+t._s(t.isSubsplit?t.split.Name.substring(1):t.split.Name)+" "),t.isSubsplit?r("small",[t._v("(subsplit)")]):t._e()]),t._v(" "),t.split.BestSegmentTime?r("p",[r("strong",[t._v("Best time:")]),t._v(" "+t._s(t.bestTimeDisplay)+"\n        ")]):t._e(),t._v(" "),r("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:t.collapseName,expression:"collapseName"}],staticClass:"toggle-collapse",attrs:{variant:"outline-dark",pill:""}},[r("font-awesome-icon",{attrs:{icon:"chevron-left",rotation:t.collapseVisible?270:null}})],1)],1)],1)]),t._v(" "),r("b-collapse",{staticClass:"mt-1",attrs:{id:t.collapseName},model:{value:t.collapseVisible,callback:function(e){t.collapseVisible=e},expression:"collapseVisible"}},[r("b-card",{staticClass:"text-left"},[t.renderGraph?r("Plotly",{attrs:{data:t.plot_data(),layout:t.layout(),"display-mode-bar":!0}}):t._e()],1)],1)],1)}),[],!1,null,"f708a206",null);e.default=component.exports}}]);