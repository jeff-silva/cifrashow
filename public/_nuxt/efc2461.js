(window.webpackJsonp=window.webpackJsonp||[]).push([[36,44],{373:function(t,e,n){var content=n(379);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(39).default)("b8d0879e",content,!0,{sourceMap:!1})},376:function(t,e,n){var content=n(396);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(39).default)("7c467b56",content,!0,{sourceMap:!1})},378:function(t,e,n){"use strict";var o=n(373);n.n(o).a},379:function(t,e,n){(e=n(38)(!1)).push([t.i,".ui-modal{position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(0,0,0,.2);z-index:9999!important;display:flex;align-items:center;justify-content:center;padding:0!important}.ui-modal .card{width:600px;max-width:90vw!important;max-height:90vh;margin:0!important;overflow:auto!important}",""]),t.exports=e},380:function(t,e,n){"use strict";n.r(e);var o={props:{value:{default:!1},tag:{default:"div"}},watch:{$props:{deep:!0,handler:function(t){this.props=Object.assign({},t)}}},methods:{emit:function(){this.$emit("input",this.props.value)},toggle:function(){this.props.value=!this.props.value,this.$emit("value",this.props.value),this.emit()}},data:function(){return{props:Object.assign({},this.$props)}}},r=(n(378),n(14)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("transition",{attrs:{name:"custom-unique-name","enter-active-class":"animate__animated animate__fadeIn","leave-active-class":"animate__animated animate__fadeOut"}},[t.props.value?n("div",{staticClass:"modal fade show",staticStyle:{display:"block",background:"#00000044","animation-duration":"200ms"},attrs:{tabindex:"-1","aria-labelledby":"exampleModalLiveLabel","aria-modal":"true",role:"dialog"},on:{click:function(e){return e.target!==e.currentTarget?null:t.toggle()}}},[n("div",{staticClass:"modal-dialog"},[n("div",{staticClass:"modal-content"},[n("div",{staticClass:"modal-header"},[t.$slots.header&&t.$scopedSlots.header?n("h5",{staticClass:"modal-title"},[t._t("header")],2):t._e(),t._v(" "),n("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"},on:{click:function(e){return t.toggle()}}},[n("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),t._v(" "),n("div",{staticClass:"modal-body"},[t._t("body")],2),t._v(" "),t.$slots.footer&&t.$scopedSlots.footer?n("div",{staticClass:"modal-footer"},[t._t("footer")],2):t._e()])])]):t._e()])],1)}),[],!1,null,null,null);e.default=component.exports},395:function(t,e,n){"use strict";var o=n(376);n.n(o).a},396:function(t,e,n){(e=n(38)(!1)).push([t.i,".ui-datetime .flatpickr-calendar{visibility:hidden;opacity:0;transition:all .2s ease;position:absolute;top:110%;left:0;min-width:310px;z-index:9}.ui-datetime .flatpickr-calendar *{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ui-datetime.ui-datetime-flatpickr-show .flatpickr-calendar{visibility:visible;opacity:1}",""]),t.exports=e},398:function(t,e,n){"use strict";n.r(e);n(93);var o=n(433),r=(n(430),n(0)),l=n.n(r),c={props:{value:{default:""},time:{default:!0}},computed:{compConfig:function(){var t=this,data={};return this.props.time&&(data.inline=!0,data.enableTime=!0,data.time_24hr=!0),data.onChange=function(e,n,o){t.props.value=o.formatDate(e[0],"Y-m-d H:i:S"),t.valueFake=o.formatDate(e[0],"d/m/Y H:i:S"),t.flatpickrShowTest(),t.$refs.input.focus(),t.emit()},data.locale={weekdays:{shorthand:["Dom","Seg","Ter","Qua","Qui","Sex","Sáb"],longhand:["Domingo","Segunda-feira","Terça-feira","Quarta-feira","Quinta-feira","Sexta-feira","Sábado"]},months:{shorthand:["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"],longhand:["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"]},rangeSeparator:" até ",time_24hr:!0},data}},data:function(){return{valueFake:!1,flatpickr:!1,flatpickrShow:!1,props:Object.assign({},this.$props)}},methods:{emit:function(){this.$emit("input",this.props.value)},formattedToDate:function(t){var e=this.valueFake.split(/[^0-9]/).filter((function(t){return!!t}));e[2]&&4==e[2].length&&(this.props.value=[e[2],e[1]||"01",e[0]||"01"].join("-")+" "+[e[3]||"00",e[4]||"00",e[5]||"00"].join(":"),this.flatpickr.setDate(this.props.value))},flatpickrShowTest:function(){var t=this;setTimeout((function(){t.flatpickrShow=t.$el.contains(document.activeElement)}),100)}},mounted:function(){this.flatpickr=Object(o.a)(this.$refs.flatpickr,this.compConfig),this.valueFake=l()(this.props.value).format("DD/MM/YYYY - HH:mm")}},d=(n(395),n(14)),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ui-datetime",class:{"ui-datetime-flatpickr-show":t.flatpickrShow},staticStyle:{position:"relative"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.valueFake,expression:"valueFake"},{name:"mask",rawName:"v-mask",value:["##/##/####","##/##/#### - ##:##:##"],expression:"['##/##/####', '##/##/#### - ##:##:##']"}],ref:"input",staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.valueFake},on:{keyup:function(e){t.formattedToDate(e),t.emit()},focus:function(e){return t.flatpickrShowTest()},blur:function(e){return t.flatpickrShowTest()},input:function(e){e.target.composing||(t.valueFake=e.target.value)}}}),t._v(" "),n("div",{ref:"flatpickr",staticClass:"ui-datetime-flatpickr"})])}),[],!1,null,null,null);e.default=component.exports},399:function(t,e,n){"use strict";n.r(e);n(94);var o={props:{value:{default:!1},placeholder:{default:"Buscar usuário"},showDropdown:{default:!1}},data:function(){return{loading:!1,searchParams:{search:""},search:{data:[]},user:!1,props:Object.assign({},this.$props)}},methods:{setValue:function(t){this.user=t,this.props.value=!!t&&t.id,this.$emit("input",this.props.value)},searchUsers:function(){var t=this;this.loading=!0,this.$axios.get("/api/user/search",{params:this.searchParams}).then((function(e){t.search=e.data||[],t.loading=!1}))},dropdownTest:function(){var t=this;setTimeout((function(){t.props.showDropdown=t.$el.contains(document.activeElement)}),100)}}},r=n(14),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{position:"relative"},on:{click:function(e){return t.dropdownTest()}}},[n("div",{staticClass:"input-group form-control p-0"},[t.$slots.prepend&&t.$scopedSlots.prepend?n("div",{staticClass:"input-group-prepend"},[t._t("prepend",null,{user:t.user,value:t.props.value})],2):t._e(),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.searchParams.search,expression:"searchParams.search"}],staticClass:"form-control border-0",attrs:{type:"text",placeholder:t.user?t.user.name:t.placeholder},domProps:{value:t.searchParams.search},on:{blur:function(e){return t.dropdownTest()},keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.searchUsers()},input:function(e){e.target.composing||t.$set(t.searchParams,"search",e.target.value)}}}),t._v(" "),n("div",{staticClass:"input-group-append"},[t.user?t._e():n("div",{staticClass:"input-group-btn"},[n("button",{staticClass:"btn",attrs:{type:"button"},on:{click:function(e){return t.searchUsers()}}},[t.loading?n("i",{staticClass:"fa fa-fw fa-spin fa-spinner"}):n("i",{staticClass:"fas fa-search"})])])]),t._v(" "),n("div",{staticClass:"input-group-append"},[t.user?n("div",{staticClass:"input-group-btn"},[n("button",{staticClass:"btn",attrs:{type:"button"},on:{click:function(e){return t.setValue(!1)}}},[n("i",{staticClass:"fas fa-times"})])]):t._e()]),t._v(" "),t.$slots.append&&t.$scopedSlots.append?n("div",{staticClass:"input-group-append"},[t._t("append",null,{user:t.user,value:t.props.value})],2):t._e()]),t._v(" "),t.props.showDropdown?n("div",{staticClass:"list-group bg-white shadow-sm",staticStyle:{position:"absolute",top:"100%",left:"0px",width:"100%","min-width":"300px"}},[t.loading||0!=t.search.data.length?t._e():n("div",{staticClass:"list-group-item"},[t._v("Nenhum resultado encontrado")]),t._v(" "),t._l(t.search.data,(function(u){return n("a",{staticClass:"list-group-item",attrs:{href:"javascript:void(0);"},on:{click:function(e){t.setValue(u),t.searchParams.search=""}}},[t._v(t._s(u.name))])}))],2):t._e()])}),[],!1,null,null,null);e.default=component.exports},400:function(t,e,n){"use strict";n.r(e);var o={props:{tevep:Object,node:Object,uuid:Function,tevepLoad:Function,tevepDefault:Function,tevepInit:Function,tevepTitle:Function,tevepNodeDefault:Function,tevepPingpongDefault:Function},data:function(){return{pingpong:!1,pingpongInfo:!1,props:Object.assign({},this.$props)}},methods:{sendPingpong:function(t){var e=this;this.$axios.post("/api/tevep/".concat(this.$route.params.id,"/pingpong/").concat(t)).then((function(t){e.$parent.$parent.tevepInit(t.data),e.pingpongInfo=!1,e.$swal("Enviado","Ping pong enviado","success")}))}}},r=n(14),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"row no-gutters"},[t.node.title?n("div",{staticClass:"col-12 text-center"},[n("div",{staticClass:"d-flex align-items-center",staticStyle:{margin:"0px 100px"}},[n("div",{staticClass:"flex-grow-1 px-3"},[t._v("\r\n                    Início\r\n                    "),n("ui-datetime",{on:{input:function(e){return t.tevepTitle(t.node)}},model:{value:t.node.date_start,callback:function(e){t.$set(t.node,"date_start",e)},expression:"node.date_start"}})],1),t._v(" "),t._m(0),t._v(" "),n("div",{staticClass:"flex-grow-1 px-3"},[t._v("\r\n                    Fim\r\n                    "),n("ui-datetime",{on:{input:function(e){return t.tevepTitle(t.node)}},model:{value:t.node.date_final,callback:function(e){t.$set(t.node,"date_final",e)},expression:"node.date_final"}})],1)]),t._v(" "),n("br"),n("br")]):t._e(),t._v(" "),n("div",{staticClass:"col-4"},[t.node.espaco?n("div",[t._m(1),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.node.piloto,expression:"node.piloto"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.node.piloto},on:{input:function(e){e.target.composing||t.$set(t.node,"piloto",e.target.value)}}})]):t._e()]),t._v(" "),n("div",{staticClass:"col-4 px-3"},[n("div",[t._v(" ")]),t._v(" "),n("div",{staticClass:"input-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.node.title,expression:"node.title"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Título"},domProps:{value:t.node.title},on:{keyup:function(e){return t.tevepTitle(t.node)},input:function(e){e.target.composing||t.$set(t.node,"title",e.target.value)}}})])]),t._v(" "),n("div",{staticClass:"col-4"},[t.node.espaco?n("div",[t._m(2),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.node.pessoa,expression:"node.pessoa"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.node.pessoa},on:{input:function(e){e.target.composing||t.$set(t.node,"pessoa",e.target.value)}}})]):t._e()]),t._v(" "),t.node.date_start&&t.node.date_final?n("div",{staticClass:"col-12 text-center"},[n("br"),n("br"),t._v(" "),n("img",{staticClass:"mb-3",staticStyle:{width:"200px"},attrs:{src:"/assets/icons/espaco.png",alt:""}}),t._v(" "),n("div",{staticStyle:{"max-width":"250px",margin:"0 auto"}},[n("div",{staticClass:"input-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.node.espaco,expression:"node.espaco"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.node.espaco},on:{input:function(e){e.target.composing||t.$set(t.node,"espaco",e.target.value)}}})])])]):t._e()]),t._v(" "),t.node.title&&t.node.date_start&&t.node.date_final&&t.node.espaco&&t.node.piloto&&t.node.pessoa&&0!=t.$route.params.id?n("div",[n("div",{staticClass:"text-center mt-5"},[n("a",{staticClass:"mr-4",attrs:{href:"javascript:;"},on:{click:function(e){t.pingpong=t.tevepPingpongDefault()}}},[n("img",{staticStyle:{width:"50px"},attrs:{src:"/assets/icons/raquete-preta.png",alt:""}})]),t._v(" "),t._l(t.tevep.pingpongs,(function(p){return n("a",{attrs:{href:"javascript:;"},on:{click:function(e){t.pingpongInfo=p}}},[n("img",{staticStyle:{width:"50px"},attrs:{src:p.accepted?"/assets/icons/raquete-verde.png":"/assets/icons/raquete-vermelha.png",alt:""}})])}))],2),t._v(" "),n("ui-modal",{scopedSlots:t._u([{key:"header",fn:function(){return[t._v("Enviar pingpong para usuário")]},proxy:!0},{key:"body",fn:function(){return[n("ui-user",{scopedSlots:t._u([{key:"append",fn:function(){return[n("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){return t.sendPingpong(t.pingpong.to)}}},[n("i",{staticClass:"fas fa-fw fa-paper-plane"})])]},proxy:!0}],null,!1,38081641),model:{value:t.pingpong.to,callback:function(e){t.$set(t.pingpong,"to",e)},expression:"pingpong.to"}})]},proxy:!0}],null,!1,1769140894),model:{value:t.pingpong,callback:function(e){t.pingpong=e},expression:"pingpong"}}),t._v(" "),n("ui-modal",{scopedSlots:t._u([{key:"header",fn:function(){return[t._v("Informações de pingpong")]},proxy:!0},{key:"body",fn:function(){return[t._v("\r\n                Para "+t._s(t.pingpongInfo.user_to_name)+" - "+t._s(t.pingpongInfo.user_to_email)+" (convite enviado "+t._s(t.pingpongInfo.invitations||1)+" vez(es)\r\n                "),n("br"),t._v(" "),t.pingpongInfo.accepted?n("div",{staticClass:"alert alert-success m-0 mt-2"},[t._v("Aceito")]):t._e(),t._v(" "),t.pingpongInfo.accepted?t._e():n("div",[n("div",{staticClass:"alert alert-danger m-0 mt-2"},[n("a",{staticClass:"text-primary font-weight-bold float-right",attrs:{href:"javascript:;"},on:{click:function(e){return t.sendPingpong(t.pingpongInfo.user_to)}}},[t._v("Convidar novamente")]),t._v("\r\n                        Não aceito.\r\n                    ")])])]},proxy:!0}],null,!1,1231678998),model:{value:t.pingpongInfo,callback:function(e){t.pingpongInfo=e},expression:"pingpongInfo"}})],1):t._e()])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("img",{staticStyle:{width:"70px"},attrs:{src:"/assets/icons/evento.png",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"text-center"},[e("img",{staticClass:"mb-3 mr-2",staticStyle:{height:"60px"},attrs:{src:"/assets/icons/piloto.png",alt:""}}),this._v(" Pilotos")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"text-center"},[this._v("Público "),e("img",{staticClass:"mb-3 ml-2",staticStyle:{height:"60px"},attrs:{src:"/assets/icons/publico.png",alt:""}})])}],!1,null,null,null);e.default=component.exports;installComponents(component,{UiDatetime:n(398).default,UiUser:n(399).default,UiModal:n(380).default})},554:function(t,e,n){"use strict";n.r(e);var o={components:{Principios:n(400).default},props:{node:{default:function(){return{}}}}},r=n(14),component=Object(r.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"d-flex"},[e("div",{staticStyle:{width:"400px"}},[this._v("\r\n            Inerências\r\n        ")]),this._v(" "),e("div",{staticClass:"flex-grow-1"},[e("principios",this._b({},"principios",this.$props,!1))],1)])])}),[],!1,null,null,null);e.default=component.exports}}]);