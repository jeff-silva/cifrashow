(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{520:function(t,e,r){var content=r(537);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(27).default)("9ad8599e",content,!0,{sourceMap:!1})},536:function(t,e,r){"use strict";var n=r(520);r.n(n).a},537:function(t,e,r){(e=r(26)(!1)).push([t.i,".ui-actions-fixed{position:fixed;bottom:0;left:0;width:100%;z-index:999;box-shadow:0 -3px 3px -2px rgb(0 0 0/10%)!important}.ui-actions .d-flex>*{flex-grow:1}.ui-actions .btn{border-radius:0!important}",""]),t.exports=e},540:function(t,e,r){"use strict";r.r(e);var n={props:{label:{default:""},help:{default:""},error:{default:""}}},o=r(16),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"form-group row no-gutters"},[r("div",{staticClass:"col-12 col-md-4 col-lg-3 p-2 px-0 px-md-2"},[r("div",[t._v(t._s(t.label))]),t._v(" "),t.help?r("small",{staticClass:"d-block text-muted",domProps:{innerHTML:t._s(t.help)}}):t._e()]),t._v(" "),r("div",{staticClass:"col-12 col-md-8 col-lg-9"},[t._t("default"),t._v(" "),t.error?r("small",{staticClass:"d-block text-danger mt-1 mx-1"},[t._v(t._s(t.error))]):t._e()],2)])}),[],!1,null,null,null);e.default=component.exports},543:function(t,e,r){"use strict";r.r(e);r(536);var n=r(16),component=Object(n.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ui-actions"},[e("br"),e("br"),this._v(" "),e("div",{staticClass:"ui-actions-fixed bg-white text-center text-md-right"},[e("div",{staticClass:"d-flex d-md-block p-md-1"},[this._t("default")],2)])])}),[],!1,null,null,null);e.default=component.exports},562:function(t,e,r){var content=r(603);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(27).default)("d8c97870",content,!0,{sourceMap:!1})},602:function(t,e,r){"use strict";var n=r(562);r.n(n).a},603:function(t,e,r){(e=r(26)(!1)).push([t.i,".user-card-content{height:90px;display:flex;align-items:center;justify-content:center}.user-card-actions{display:flex}.user-card-actions .btn{margin:0}.user-card-image{background:50% no-repeat #f5f5f5;background-size:cover;width:100px;height:100px;margin:-50px auto 0;border-radius:50%;border:4px solid #fff;overflow:hidden;display:flex;align-items:center;justify-content:center}.user-card-bg{background-size:cover;background-position:50%;background-repeat:no-repeat;height:200px}.user-card-pattern{--stripe:#f5f5f5;--bg:#eee;background:linear-gradient(135deg,var(--bg) 25%,transparent 0) -50px 0,linear-gradient(225deg,var(--bg) 25%,transparent 0) -50px 0,linear-gradient(315deg,var(--bg) 25%,transparent 0),linear-gradient(45deg,var(--bg) 25%,transparent 0);background-size:100px 100px;background-color:var(--stripe)}",""]),t.exports=e},613:function(t,e,r){"use strict";r.r(e);var n={name:"user-card",props:{value:{default:function(){return{}}}},watch:{$props:{deep:!0,handler:function(t){this.props=Object.assign({},t)}}},data:function(){return{props:Object.assign({},this.$props)}}},o=(r(602),r(16)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"user-card bg-white shadow-sm rounded"},[t.props.value.meta.background?r("div",{staticClass:"user-card-bg",style:"background-image:url("+t.props.value.meta.background+");"}):r("div",{staticClass:"user-card-bg user-card-pattern"}),t._v(" "),r("div",{staticClass:"user-card-image shadow-sm",style:"background-image:url("+t.props.value.meta.photo+");"},[t._t("image")],2),t._v(" "),r("div",{staticClass:"user-card-content"},[r("div",[r("div",{staticClass:"text-center font-weight-bold text-uppercase mt-2"},[r("nuxt-link",{attrs:{to:""}},[t._v(t._s(t.props.value.name))])],1),t._v(" "),r("div",{staticClass:"text-center text-muted"},[t._v(t._s(t.props.value.meta.description))]),t._v(" "),r("div",{staticClass:"text-center text-muted"},[t._v(t._s(t.props.value.email))]),t._v(" "),r("div",{staticClass:"pb-4"})])]),t._v(" "),r("div",{staticClass:"btn-group user-card-actions"},[t._t("actions")],2)])}),[],!1,null,null,null);e.default=component.exports},732:function(t,e,r){"use strict";r.r(e);var n={layout:"admin",methods:{userFind:function(){var t=this;this.loading=!0;var e="me"==this.$route.params.id?this.$auth.user.id:this.$route.params.id;this.$axios.get("/api/user/find/".concat(e)).then((function(e){t.loading=!1,t.user=e.data}))},success:function(t){this.$swal("","Dados salvos","success"),t.id==this.$auth.user.id&&location.reload()}},data:function(){return{loading:!1,error:{},user:{}}},mounted:function(){this.userFind()}},o=r(16),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.loading?r("div",[t._v("Carregando...")]):t._e(),t._v(" "),t.user.id?r("form",{on:{submit:function(e){return e.preventDefault(),t.userStore()}}},[r("ui-form",{attrs:{method:"post",action:"/api/user/save/"},on:{success:function(e){return t.success(e)}},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.loading;e.success,e.error;return[r("div",{staticClass:"row no-gutters"},[r("div",{staticClass:"col-12 col-md-4 mb-4 pr-3"},[r("user-card",{scopedSlots:t._u([{key:"actions",fn:function(){return[r("a",{staticClass:"btn btn-light",attrs:{href:"javascript:;"},on:{click:function(e){return t.$refs.userPhoto.toggle()}}},[t._v("Foto")]),t._v(" "),r("a",{staticClass:"btn btn-light",attrs:{href:"javascript:;"},on:{click:function(e){return t.$refs.userBackground.toggle()}}},[t._v("Background")])]},proxy:!0}],null,!0),model:{value:t.user,callback:function(e){t.user=e},expression:"user"}})],1),t._v(" "),r("div",{staticClass:"col-12 col-md-8"},[r("ui-field",{attrs:{label:"Nome"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.user.name,expression:"user.name"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.user.name},on:{input:function(e){e.target.composing||t.$set(t.user,"name",e.target.value)}}})]),t._v(" "),r("ui-field",{attrs:{label:"E-mail"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.user.email,expression:"user.email"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.user.email},on:{input:function(e){e.target.composing||t.$set(t.user,"email",e.target.value)}}})]),t._v(" "),r("ui-field",{attrs:{label:"Descrição"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.user.description,expression:"user.description"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.user.description},on:{input:function(e){e.target.composing||t.$set(t.user,"description",e.target.value)}}})]),t._v(" "),r("ui-field",{attrs:{label:"Senha"}},[r("div",{staticClass:"row no-gutters"},[r("div",{staticClass:"col-12 col-md-6"},[r("ui-password",{attrs:{placeholder:"Senha"},model:{value:t.user.password,callback:function(e){t.$set(t.user,"password",e)},expression:"user.password"}})],1),t._v(" "),r("div",{staticClass:"col-12 col-md-6 pl-md-2"},[r("ui-password",{attrs:{placeholder:"Repita a senha",meter:!1},model:{value:t.user.password,callback:function(e){t.$set(t.user,"password",e)},expression:"user.password"}})],1)])]),t._v(" "),r("ui-field",{attrs:{label:"Whatsapp"}},[r("ui-phone",{model:{value:t.user.whatsapp,callback:function(e){t.$set(t.user,"whatsapp",e)},expression:"user.whatsapp"}})],1)],1)]),t._v(" "),r("ui-actions",[r("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[r("div",n?[r("span",{domProps:{innerHTML:t._s(n)}}),t._v(" Salvando")]:[r("i",{staticClass:"fas fa-save"}),t._v(" Salvar")])])])]}}],null,!1,1238236523),model:{value:t.user,callback:function(e){t.user=e},expression:"user"}})],1):t._e()])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{UserCard:r(613).default,UiField:r(540).default,UiPassword:r(514).default,UiPhone:r(584).default,UiActions:r(543).default,UiForm:r(515).default})}}]);