(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{375:function(t,e,n){var content=n(381);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(39).default)("b8d0879e",content,!0,{sourceMap:!1})},380:function(t,e,n){"use strict";var o=n(375);n.n(o).a},381:function(t,e,n){(e=n(38)(!1)).push([t.i,".ui-modal{position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(0,0,0,.2);z-index:9999!important;display:flex;align-items:center;justify-content:center;padding:0!important}.ui-modal .card{width:600px;max-width:90vw!important;max-height:90vh;margin:0!important;overflow:auto!important}",""]),t.exports=e},382:function(t,e,n){"use strict";n.r(e);var o={props:{value:{default:!1},tag:{default:"div"}},watch:{$props:{deep:!0,handler:function(t){this.props=Object.assign({},t)}}},methods:{emit:function(){this.$emit("input",this.props.value),this.$emit("value",this.props.value),this.$emit("change",this.props.value)},toggle:function(){this.props.value=!this.props.value,this.emit()}},data:function(){return{props:Object.assign({},this.$props)}}},r=(n(380),n(14)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("transition",{attrs:{name:"custom-unique-name","enter-active-class":"animate__animated animate__fadeIn","leave-active-class":"animate__animated animate__fadeOut"}},[t.props.value?n("div",{staticClass:"modal fade show",staticStyle:{display:"block",background:"#00000044","animation-duration":"200ms"},attrs:{tabindex:"-1","aria-labelledby":"exampleModalLiveLabel","aria-modal":"true",role:"dialog"},on:{click:function(e){return e.target!==e.currentTarget?null:t.toggle()}}},[n("div",{staticClass:"modal-dialog"},[n("div",{staticClass:"modal-content"},[n("div",{staticClass:"modal-header"},[t.$slots.header&&t.$scopedSlots.header?n("h5",{staticClass:"modal-title"},[t._t("header")],2):t._e(),t._v(" "),n("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"},on:{click:function(e){return t.toggle()}}},[n("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),t._v(" "),n("div",{staticClass:"modal-body"},[t._t("body")],2),t._v(" "),t.$slots.footer&&t.$scopedSlots.footer?n("div",{staticClass:"modal-footer"},[t._t("footer")],2):t._e()])])]):t._e()])],1)}),[],!1,null,null,null);e.default=component.exports},423:function(t,e,n){"use strict";n.r(e);var o={props:{value:Object},watch:{$props:{deep:!0,handler:function(t){this.props=Object.assign({},t)}}},data:function(){return{loading:0,invites:{data:[]},invite:!1,inviteInfo:!1,props:Object.assign({},this.$props)}},methods:{getInvites:function(){var t=this;this.loading++,this.$axios.get("/api/tevep-invite/search?tevep_id=".concat(this.value.id)).then((function(e){t.loading--,t.invites=e.data||{}}))},showModalInvite:function(){this.invite={tevep_id:this.$route.params.id,tevep_node:this.$route.query.node,user_id:""}},inviteSend:function(){var t=this;this.loading++,this.$axios.post("/api/tevep-invite/save",this.invite).then((function(e){t.loading--,t.$swal("Enviado","O convite foi enviado para ".concat(t.invite.user_id),"success"),t.invite=!1,t.getInvites()}))},inviteResponse:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";e.status=n,this.loading++,this.$axios.post("/api/tevep-invite/save",e).then((function(e){t.loading--,t.$swal("Enviado","Resposta enviada","success"),t.getInvites();var n=Object.assign({},t.$route.query);delete n.invite,t.$router.push({query:n})}))}},mounted:function(){this.getInvites()}},r=n(14),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("a",{attrs:{href:"javascript:;"},on:{click:function(e){return t.showModalInvite()}}},[n("img",{staticStyle:{width:"50px"},attrs:{src:"/assets/icons/raquete-preta.png",alt:""}})]),t._v(" "),t._l(t.invites.data,(function(i){return n("a",{key:i.id,attrs:{href:"javascript:;"},on:{click:function(e){t.inviteInfo=i}}},["accepted"==i.status?n("img",{staticStyle:{width:"50px"},attrs:{src:"/assets/icons/raquete-verde.png",alt:""}}):"rejected"==i.status?n("img",{staticStyle:{width:"50px"},attrs:{src:"/assets/icons/raquete-vermelha.png",alt:""}}):n("img",{staticStyle:{width:"50px"},attrs:{src:"/assets/icons/raquete-amarela.png",alt:""}})])})),t._v(" "),n("ui-modal",{scopedSlots:t._u([{key:"header",fn:function(){return[t._v("Enviar ping-pong")]},proxy:!0},{key:"body",fn:function(){return[n("div",{staticClass:"input-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.invite.user_id,expression:"invite.user_id"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Informe o e-mail do usuário"},domProps:{value:t.invite.user_id},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:(e.preventDefault(),t.inviteSend())},input:function(e){e.target.composing||t.$set(t.invite,"user_id",e.target.value)}}}),t._v(" "),n("div",{staticClass:"input-group-append"},[n("div",{staticClass:"input-group-btn"},[n("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){return t.inviteSend()}}},[t.loading?n("i",{staticClass:"fas fa-spin fa-spinner"}):n("i",{staticClass:"fas fa-paper-plane"})])])])])]},proxy:!0}]),model:{value:t.invite,callback:function(e){t.invite=e},expression:"invite"}}),t._v(" "),n("ui-modal",{scopedSlots:t._u([{key:"header",fn:function(){return[t._v(t._s(t.inviteInfo.user.name))]},proxy:!0},{key:"body",fn:function(){return["accepted"==t.inviteInfo.status?n("div",[n("div",{staticClass:"alert alert-success"},[t._v("\r\n                    "+t._s(t.inviteInfo.user.name)+" aceitou\r\n                ")])]):n("div",[n("div",{staticClass:"alert alert-warning"},[t._v("\r\n                    Aguardando resposta de "+t._s(t.inviteInfo.user.name)+"\r\n                ")]),t._v(" "),t.inviteInfo.user.whatsapp?n("a",{staticClass:"btn btn-outline-whatsapp btn-block mt-3",attrs:{href:t._f("linkWhatsapp")(t.inviteInfo.user.whatsapp,"Olá, participe do meu projeto TEvEP!\n"+t.inviteInfo.invite_link),target:"_blank"}},[n("i",{staticClass:"fab fa-whatsapp mr-1"}),t._v(" Enviar convite por whatsapp\r\n                ")]):t._e(),t._v(" "),n("a",{directives:[{name:"tooltip",rawName:"v-tooltip",value:"Você pode copiar o link para enviar diretamente por outros meios",expression:"'Você pode copiar o link para enviar diretamente por outros meios'"}],staticClass:"btn btn-outline-dark btn-block",attrs:{href:"javascript:;"},on:{click:function(e){t.$copy(t.inviteInfo.invite_link).then((function(e){return t.$swal("","Texto copiado","success")}))}}},[n("i",{staticClass:"far fa-copy mr-1"}),t._v(" Copiar link do convite\r\n                ")])])]},proxy:!0}]),model:{value:t.inviteInfo,callback:function(e){t.inviteInfo=e},expression:"inviteInfo"}}),t._v(" "),t.$route.query.invite?n("div",t._l(t.invites.data,(function(i){return i.id!=t.$route.query.invite||i.status?t._e():n("div",{key:i.id},[n("ui-modal",{attrs:{value:!0},scopedSlots:t._u([{key:"header",fn:function(){return[t._v("Convite Ping Pong")]},proxy:!0},{key:"body",fn:function(){return[t._v("\r\n                    Você recebeu um convite para editar este evento, como deseja proceder?\r\n                ")]},proxy:!0},{key:"footer",fn:function(){return[n("a",{staticClass:"btn btn-danger",attrs:{href:"javascript:;"},on:{click:function(e){return t.inviteResponse(i,"rejected")}}},[t._v("\r\n                        Recusar\r\n                    ")]),t._v(" "),n("a",{staticClass:"btn btn-success",attrs:{href:"javascript:;"},on:{click:function(e){return t.inviteResponse(i,"accepted")}}},[t._v("\r\n                        Aceitar\r\n                    ")])]},proxy:!0}],null,!0)})],1)})),0):t._e()],2)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{UiModal:n(382).default})}}]);