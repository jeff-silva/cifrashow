(window.webpackJsonp=window.webpackJsonp||[]).push([[46,8,9,10,17,25,26,27],{524:function(t,e,r){"use strict";r.r(e);r(174);var n={props:{value:{default:function(){return{}}},method:{default:"post"},action:{default:"api"}},watch:{$props:{deep:!0,handler:function(t){this.props=Object.assign({},t)}}},methods:{emit:function(){this.$emit("input",this.props.value),this.$emit("value",this.props.value),this.$emit("change",this.props.value)},submit:function(){var t=this,e=this.$axios[this.method],r="get"==this.method?{params:this.props.value}:this.props.value;this.loading='<i class="fa fa-fw fa-spin fa-spinner"></i>',this.responseSuccess=!1,this.responseErrorMessage=!1,this.responseErrorFields={},e(this.action,r).then((function(e){t.loading="",t.responseSuccess=e.data,t.$emit("success",t.responseSuccess)})).catch((function(e){for(var i in t.loading="",t.responseErrorMessage=e.response.data.message||"Erro",t.responseErrorFields=e.response.data.fields||{},t.responseErrorFields)Array.isArray(t.responseErrorFields[i])&&(t.responseErrorFields[i]=t.responseErrorFields[i].join("<br>"));t.$emit("error",t.responseErrorFields)}))}},data:function(){return{loading:"",responseSuccess:!1,responseErrorMessage:!1,responseErrorFields:{},props:Object.assign({},this.$props)}}},o=r(24),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("form",{staticClass:"ui-form",attrs:{method:t.method,action:t.action},on:{submit:function(e){return e.preventDefault(),t.submit()}}},[t.responseSuccess&&(t.$slots.success||t.$scopedSlots.success)?r("div",{staticClass:"alert alert-success"},[t._t("success",null,{response:t.responseSuccess})],2):t._e(),t._v(" "),t.responseErrorMessage?t._t("error",[t.responseErrorMessage?r("div",{staticClass:"alert alert-danger",domProps:{innerHTML:t._s(t.responseErrorMessage)}}):t._e()],{errorMessage:t.responseErrorMessage,fields:t.responseErrorFields}):t._e(),t._v(" "),t._t("default",null,{loading:t.loading,error:t.responseErrorFields,errorMessage:t.responseErrorMessage,success:t.responseSuccess})],2)}),[],!1,null,null,null);e.default=component.exports},525:function(t,e,r){var content=r(531);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(56).default)("27bfee22",content,!0,{sourceMap:!1})},530:function(t,e,r){"use strict";r(525)},531:function(t,e,r){(e=t.exports=r(55)(!1)).push([t.i,".NMzImITDQOhWqDdzpXOiP{position:fixed;bottom:0;left:0;width:100%;z-index:999;box-shadow:0 -3px 3px -2px rgb(0 0 0/10%)!important}._3Ak2vEfygy3wVUzXcCKwFl ._10_74c6zsLvAcFmTNeNAsL>*{flex-grow:1}._3Ak2vEfygy3wVUzXcCKwFl ._1uxPWx5sYdwQbJKa76-Jj0{border-radius:0!important}",""]),e.locals={"ui-actions-fixed":"NMzImITDQOhWqDdzpXOiP","ui-actions":"_3Ak2vEfygy3wVUzXcCKwFl","d-flex":"_10_74c6zsLvAcFmTNeNAsL",btn:"_1uxPWx5sYdwQbJKa76-Jj0"}},532:function(t,e,r){"use strict";(function(t){r(32),r(40),r(175),r(84);var n=r(571),o=r(572),l=r.n(o);e.a={props:{value:{default:Object},edit:{default:!1}},watch:{$props:{deep:!0,handler:function(t){this.props=JSON.parse(JSON.stringify(t)),this.playerInit()}}},data:function(){return{props:JSON.parse(JSON.stringify(this.$props)),lastPropsValueMidiUrl:!1,instrument:!1,soundfontLoaded:!1,player:!1,playerEvent:{},songPercent:0,editor:{zoomX:200}}},computed:{isPlaying:function(){return!!this.player&&this.player.isPlaying()},songTime:function(){return!!this.player&&this.player.getSongTime()},nextChords:function(){return[]},nextLyrics:function(){return[]}},methods:{emitValue:function(){this.$emit("input",this.props.value)},playerInit:function(){var e=this;if(this.props.value&&this.props.value.midi&&this.props.value.midi.url&&this.lastPropsValueMidiUrl!=this.props.value.midi.url){this.lastPropsValueMidiUrl=this.props.value.midi.url,this.player=new n.a.Player((function(t){e.songPercent=Math.max(0,100-e.player.getSongPercentRemaining()),"Note on"==t.name&&e.instrument.play(t.noteName,AudioContext.currentTime,{gain:t.velocity/100})}));var content=this.props.value.midi.url.split(",")[1];content=t.from(content,"base64"),this.player.loadArrayBuffer(content),l.a.instrument(new AudioContext,"marimba").then((function(t){e.instrument=t}))}},play:function(){this.isPlaying?this.pause():this.player.play()},pause:function(){this.player.pause()},stop:function(){this.player.stop(),this.songPercent=Math.max(0,100-this.player.getSongPercentRemaining())},skipToPercent:function(t){var e=this,r=this.player.isPlaying();r&&this.player.stop(),setTimeout((function(){e.player.skipToPercent(t),r&&e.player.play(),e.songPercent=Math.max(0,100-e.player.getSongPercentRemaining())}),10)}},mounted:function(){this.playerInit()}}}).call(this,r(559).Buffer)},533:function(t,e,r){"use strict";r.r(e);r(530);var n=r(24),component=Object(n.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"ui-actions"},[r("div",{staticClass:"ui-actions-fixed bg-white text-center text-md-right"},[r("div",{staticClass:"d-flex d-md-block p-md-1"},[t._t("default")],2)])])}),[],!1,null,null,null);e.default=component.exports},539:function(t,e,r){var content=r(554);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(56).default)("1ef8fdc1",content,!0,{sourceMap:!1})},542:function(t,e,r){"use strict";r.r(e);var n={props:{label:{default:""},help:{default:""},error:{default:""}}},o=r(24),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"form-group row no-gutters"},[r("div",{staticClass:"col-12 col-md-4 col-lg-3 p-2 px-0 px-md-2"},[r("div",[t._v(t._s(t.label))]),t._v(" "),t.help?r("small",{staticClass:"d-block text-muted",domProps:{innerHTML:t._s(t.help)}}):t._e()]),t._v(" "),r("div",{staticClass:"col-12 col-md-8 col-lg-9"},[t._t("default"),t._v(" "),t.error?r("small",{staticClass:"d-block text-danger mt-1 mx-1"},[t._v(t._s(t.error))]):t._e()],2)])}),[],!1,null,null,null);e.default=component.exports},547:function(t,e,r){"use strict";r.r(e);r(382);var n={props:{value:{default:Object},zoomX:{default:100},songPercent:{default:0}},watch:{$props:{deep:!0,handler:function(t){this.props=JSON.parse(JSON.stringify(t))}}},data:function(){return{props:JSON.parse(JSON.stringify(this.$props)),item:!1,drag:!1,selectArea:{show:!1,bind:{x:0,y:0,width:50,height:50}},itemTypes:[{type:"chord",y:0,label:"Acordes"},{type:"lyric",y:20,label:"Letras"}]}},methods:{emitValue:function(){this.$emit("input",this.props.value)},getMousePercent:function(t){var rect=this.$refs.referenceArea.getBoundingClientRect();return{x:100*t.layerX/rect.width,y:100*t.layerY/rect.height}},mousemoveHandler:function(t){var e=this.getMousePercent(t),r=e.x;e.y;this.drag&&1==t.buttons&&(this.drag.percent=r)},itemAdd:function(t,e){var r=this.getMousePercent(t),n=r.x;r.y;this.item={percent:n,type:e.type,value:""},this.props.value.items.push(this.item),this.emitValue()},itemRemove:function(t){var e=this.props.value.items.indexOf(t);this.props.value.items.splice(e,1),this.emitValue(),this.item=!1}}},o=r(24),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.props.value&&t.props.value.items?r("div",[r("div",{staticStyle:{position:"relative","overflow-x":"scroll"},on:{mousemove:function(e){return t.mousemoveHandler(e)}}},[r("svg",{ref:"referenceArea",attrs:{width:t.props.zoomX+"%",height:"40px"}},[t._l(t.itemTypes,(function(i){return r("g",{attrs:{transform:"translate(0, "+i.y+") rotate(0)"}},[r("rect",{staticStyle:{fill:"#eee","stroke-width":"1",stroke:"#ddd"},attrs:{x:"0",y:"0",width:"100%",height:"20"},on:{click:function(e){return t.itemAdd(e,i)}}}),t._v(" "),t._l(t.props.value.items,(function(e){return e.type==i.type?r("circle",{staticStyle:{fill:"#ddd","stroke-width":"1",stroke:"#ccc",cursor:"pointer"},attrs:{cx:e.percent+"%",cy:"10",r:"8",title:i.type},on:{click:function(r){t.item=e},mousedown:function(r){t.drag=e},mouseup:function(e){t.drag=!1}}}):t._e()}))],2)})),t._v(" "),r("line",{staticStyle:{stroke:"#f00","stroke-width":"1"},attrs:{x1:t.props.songPercent+"%",y1:"0",x2:t.props.songPercent+"%",y2:"100%"}})],2)]),t._v(" "),t.item?r("div",{staticClass:"input-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.item.value,expression:"item.value"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.item.value},on:{keyup:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.item=!1,t.emitValue()},input:function(e){e.target.composing||t.$set(t.item,"value",e.target.value)}}}),t._v(" "),r("div",{staticClass:"input-group-append"},[r("div",{staticClass:"input-group-btn"},[r("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){t.item=!1,t.emitValue()}}},[t._v("Ok")])])]),t._v(" "),r("div",{staticClass:"input-group-append"},[r("div",{staticClass:"input-group-btn"},[r("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(e){return t.itemRemove(t.item)}}},[r("i",{staticClass:"fas fa-fw fa-times"})])])])]):t._e()]):t._e()}),[],!1,null,null,null);e.default=component.exports},550:function(t,e,r){"use strict";var n=r(11),o=r(6),l=r(117),c=r(20),d=r(14),f=r(59),m=r(383),v=r(86),h=r(7),y=r(87),_=r(85).f,x=r(41).f,C=r(19).f,w=r(551).trim,N="Number",E=o.Number,S=E.prototype,k=f(y(S))==N,$=function(t){var e,r,n,o,l,c,d,code,f=v(t,!1);if("string"==typeof f&&f.length>2)if(43===(e=(f=w(f)).charCodeAt(0))||45===e){if(88===(r=f.charCodeAt(2))||120===r)return NaN}else if(48===e){switch(f.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+f}for(c=(l=f.slice(2)).length,d=0;d<c;d++)if((code=l.charCodeAt(d))<48||code>o)return NaN;return parseInt(l,n)}return+f};if(l(N,!E(" 0o1")||!E("0b1")||E("+0x1"))){for(var P,M=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof M&&(k?h((function(){S.valueOf.call(r)})):f(r)!=N)?m(new E($(e)),r,M):$(e)},O=n?_(E):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),A=0;O.length>A;A++)d(E,P=O[A])&&!d(M,P)&&C(M,P,x(E,P));M.prototype=S,S.constructor=M,c(o,N,M)}},551:function(t,e,r){var n=r(22),o="["+r(552)+"]",l=RegExp("^"+o+o+"*"),c=RegExp(o+o+"*$"),d=function(t){return function(e){var r=String(n(e));return 1&t&&(r=r.replace(l,"")),2&t&&(r=r.replace(c,"")),r}};t.exports={start:d(1),end:d(2),trim:d(3)}},552:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},553:function(t,e,r){"use strict";r(539)},554:function(t,e,r){(e=t.exports=r(55)(!1)).push([t.i,"._2boqgtdKNRgGLjYuLhoXMw{min-height:400px;background-image:linear-gradient(90deg,transparent 50%,#eee 0);background-size:5% 50%}",""]),e.locals={"midiplayer-editor-pattern":"_2boqgtdKNRgGLjYuLhoXMw"}},565:function(t,e,r){"use strict";r.r(e);var n=r(532).a,o=(r(553),r(24)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.props.edit?r("div",{on:{wheel:function(e){e.preventDefault(),t.editor.zoomX+=-1*e.deltaY/10}}},[r("midiplayer-svg",{attrs:{"zoom-x":t.editor.zoomX,"song-percent":t.songPercent},on:{input:function(e){return t.emitValue()}},model:{value:t.props.value,callback:function(e){t.$set(t.props,"value",e)},expression:"props.value"}})],1):t._e(),t._v(" "),r("div",[r("div",{staticClass:"d-flex align-items-center mt-3"},[t.isPlaying?t._e():r("div",{staticClass:"pr-1"},[r("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){return t.play()}}},[r("i",{staticClass:"fas fa-play"})])]),t._v(" "),t.isPlaying?r("div",{staticClass:"pr-1"},[r("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){return t.pause()}}},[r("i",{staticClass:"fas fa-pause"})])]):t._e(),t._v(" "),r("div",{staticClass:"pr-1"},[r("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){return t.stop()}}},[r("i",{staticClass:"fas fa-stop"})])]),t._v(" "),r("div",{staticClass:"flex-grow-1 pl-3"},[r("el-slider",{on:{change:function(e){return t.skipToPercent(e)}},model:{value:t.songPercent,callback:function(e){t.songPercent=e},expression:"songPercent"}})],1)])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{MidiplayerSvg:r(547).default})},619:function(t,e,r){"use strict";r.r(e);r(550);var n={name:"ui-chords-artist",props:{value:[Number,String,Array],placeholder:{default:"Selecionar"},multiple:{default:!1}},methods:{removeSearch:function(){var t=this,q=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this.$axios.get("/api/chords-artist/search",{params:{q:q}}).then((function(e){t.items=e.data.data}))}},data:function(){return{props:JSON.parse(JSON.stringify(this.$props)),items:[]}},mounted:function(){this.removeSearch()}},o=r(24),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("el-select",{staticClass:"form-control p-0",attrs:{multiple:t.props.multiple},model:{value:t.props.value,callback:function(e){t.$set(t.props,"value",e)},expression:"props.value"}},[r("el-option",{attrs:{value:""}},[t._v(t._s(t.props.placeholder))]),t._v(" "),t._l(t.items,(function(i){return r("el-option",{key:i.id,attrs:{value:i.id,label:i.name||i.id}},[t._v(t._s(i.name||i.id))])}))],2)],1)}),[],!1,null,null,null);e.default=component.exports},620:function(t,e,r){"use strict";r.r(e);r(174),r(35),r(40),r(175),r(32);var n={props:{value:{default:{}}},watch:{$props:{deep:!0,handler:function(t){this.props=JSON.parse(JSON.stringify(t))}}},data:function(){return{props:JSON.parse(JSON.stringify(this.$props))}},methods:{emitValue:function(){this.$emit("input",this.props.value)},handleFile:function(t){var e=this,r=t.target.files[0],n=new FileReader;n.readAsDataURL(r),n.onload=function(){e.props.value={name:r.name.split(".").slice(0,-1).join("."),filename:r.name,size:r.size,type:r.type,url:n.result},e.emitValue()}}},computed:{computedIcon:function(){var t="fa-upload";return this.props.value&&this.props.value.type&&(t="audio"==(t=this.props.value.type.split("/")[0])?"fa-file-audio":"image"==t?"fa-image":"fa-file"),t}}},o=r(24),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"ui-file"},[r("div",{staticClass:"input-group"},[r("label",{staticClass:"input-group-prepend"},[r("div",{staticClass:"input-group-text"},[r("i",{staticClass:"fas fa-fw",class:t.computedIcon}),t._v(" "),r("input",{staticStyle:{display:"none!important"},attrs:{type:"file"},on:{change:function(e){return t.handleFile(e)}}})])]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.props.value.name,expression:"props.value.name"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Nome do arquivo"},domProps:{value:t.props.value.name},on:{input:[function(e){e.target.composing||t.$set(t.props.value,"name",e.target.value)},function(e){return t.emitValue()}]}}),t._v(" "),r("div",{staticClass:"input-group-append"},[r("div",{staticClass:"input-group-btn"},[r("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(e){t.props.value={},t.emitValue()}}},[r("i",{staticClass:"fas fa-fw fa-times"})])])])])])}),[],!1,null,null,null);e.default=component.exports},708:function(t,e,r){"use strict";r.r(e);var n={layout:"admin",data:function(){return{model:{}}},methods:{handleSucccess:function(t){this.$swal("Cifra salva","","success"),this.$router.push("/admin/chords/song/".concat(t.id))},loadModel:function(){var t=this;0!=+this.$route.params.id&&this.$axios.get("/api/chords-song/find/".concat(this.$route.params.id)).then((function(e){t.model=e.data}))}},mounted:function(){this.loadModel()}},o=r(24),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("ui-form",{attrs:{method:"post",action:"/api/chords-song/save"},on:{success:function(e){return t.handleSucccess(e)}},model:{value:t.model,callback:function(e){t.model=e},expression:"model"}},[r("ui-field",{attrs:{label:"Artista/Banda"}},[r("ui-chords-artist",{model:{value:t.model.artist_id,callback:function(e){t.$set(t.model,"artist_id",e)},expression:"model.artist_id"}})],1),t._v(" "),r("ui-field",{attrs:{label:"Música"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.model.name,expression:"model.name"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.model.name},on:{input:function(e){e.target.composing||t.$set(t.model,"name",e.target.value)}}})]),t._v(" "),r("ui-field",{attrs:{label:"Arquivo MIDI"}},[r("ui-file",{model:{value:t.model.midi,callback:function(e){t.$set(t.model,"midi",e)},expression:"model.midi"}})],1),t._v(" "),r("midiplayer",{attrs:{edit:!0},model:{value:t.model,callback:function(e){t.model=e},expression:"model"}}),t._v(" "),r("ui-actions",[r("nuxt-link",{staticClass:"btn",attrs:{to:"/admin/chords/song"}},[t._v("Voltar")]),t._v(" "),r("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[r("i",{staticClass:"fas fa-fw fa-save"}),t._v(" Salvar\r\n            ")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{UiChordsArtist:r(619).default,UiField:r(542).default,UiFile:r(620).default,Midiplayer:r(565).default,UiActions:r(533).default,UiForm:r(524).default})}}]);