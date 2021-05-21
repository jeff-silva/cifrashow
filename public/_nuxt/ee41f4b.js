(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{515:function(e,t,r){"use strict";r.r(t);var o={props:{value:{default:function(){return{}}},method:{default:"post"},action:{default:"api"}},watch:{$props:{deep:!0,handler:function(e){this.props=Object.assign({},e)}}},methods:{emit:function(){this.$emit("input",this.props.value),this.$emit("value",this.props.value),this.$emit("change",this.props.value)},submit:function(){var e=this,t=this.$axios[this.method],r="get"==this.method?{params:this.props.value}:this.props.value;this.loading='<i class="fa fa-fw fa-spin fa-spinner"></i>',this.responseSuccess=!1,this.responseErrorMessage=!1,this.responseErrorFields={},t(this.action,r).then((function(t){e.loading="",e.responseSuccess=t.data,e.$emit("success",e.responseSuccess)})).catch((function(t){for(var i in e.loading="",e.responseErrorMessage=t.response.data.message||"Erro",e.responseErrorFields=t.response.data.fields||{},e.responseErrorFields)Array.isArray(e.responseErrorFields[i])&&(e.responseErrorFields[i]=e.responseErrorFields[i].join("<br>"));e.$emit("error",e.responseErrorFields)}))}},data:function(){return{loading:"",responseSuccess:!1,responseErrorMessage:!1,responseErrorFields:{},props:Object.assign({},this.$props)}}},n=r(16),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("form",{staticClass:"ui-form",attrs:{method:e.method,action:e.action},on:{submit:function(t){return t.preventDefault(),e.submit()}}},[e.responseSuccess&&(e.$slots.success||e.$scopedSlots.success)?r("div",{staticClass:"alert alert-success"},[e._t("success",null,{response:e.responseSuccess})],2):e._e(),e._v(" "),e.responseErrorMessage?e._t("error",[e.responseErrorMessage?r("div",{staticClass:"alert alert-danger",domProps:{innerHTML:e._s(e.responseErrorMessage)}}):e._e()],{errorMessage:e.responseErrorMessage,fields:e.responseErrorFields}):e._e(),e._v(" "),e._t("default",null,{loading:e.loading,error:e.responseErrorFields,errorMessage:e.responseErrorMessage,success:e.responseSuccess})],2)}),[],!1,null,null,null);t.default=component.exports},520:function(e,t,r){var content=r(537);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(27).default)("9ad8599e",content,!0,{sourceMap:!1})},536:function(e,t,r){"use strict";var o=r(520);r.n(o).a},537:function(e,t,r){(t=r(26)(!1)).push([e.i,".ui-actions-fixed{position:fixed;bottom:0;left:0;width:100%;z-index:999;box-shadow:0 -3px 3px -2px rgb(0 0 0/10%)!important}.ui-actions .d-flex>*{flex-grow:1}.ui-actions .btn{border-radius:0!important}",""]),e.exports=t},540:function(e,t,r){"use strict";r.r(t);var o={props:{label:{default:""},help:{default:""},error:{default:""}}},n=r(16),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"form-group row no-gutters"},[r("div",{staticClass:"col-12 col-md-4 col-lg-3 p-2 px-0 px-md-2"},[r("div",[e._v(e._s(e.label))]),e._v(" "),e.help?r("small",{staticClass:"d-block text-muted",domProps:{innerHTML:e._s(e.help)}}):e._e()]),e._v(" "),r("div",{staticClass:"col-12 col-md-8 col-lg-9"},[e._t("default"),e._v(" "),e.error?r("small",{staticClass:"d-block text-danger mt-1 mx-1"},[e._v(e._s(e.error))]):e._e()],2)])}),[],!1,null,null,null);t.default=component.exports},543:function(e,t,r){"use strict";r.r(t);r(536);var o=r(16),component=Object(o.a)({},(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"ui-actions"},[t("br"),t("br"),this._v(" "),t("div",{staticClass:"ui-actions-fixed bg-white text-center text-md-right"},[t("div",{staticClass:"d-flex d-md-block p-md-1"},[this._t("default")],2)])])}),[],!1,null,null,null);t.default=component.exports},730:function(e,t,r){"use strict";r.r(t);var o={layout:"admin",data:function(){return{model:{}}},methods:{handleSucccess:function(e){this.$swal("Artista salvo","","success"),this.$router.push("/admin/chords/artist/".concat(e.id))},loadModel:function(){var e=this;0!=+this.$route.params.id&&this.$axios.get("/api/chords-artist/find/".concat(this.$route.params.id)).then((function(t){e.model=t.data}))}},mounted:function(){this.loadModel()}},n=r(16),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("ui-form",{attrs:{method:"post",action:"/api/chords-artist/save"},on:{success:function(t){return e.handleSucccess(t)}},model:{value:e.model,callback:function(t){e.model=t},expression:"model"}},[r("ui-field",{attrs:{label:"Artista/Banda"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.model.name,expression:"model.name"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.model.name},on:{input:function(t){t.target.composing||e.$set(e.model,"name",t.target.value)}}})]),e._v(" "),r("ui-actions",[r("nuxt-link",{staticClass:"btn",attrs:{to:"/admin/chords/artist"}},[e._v("Voltar")]),e._v(" "),r("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[r("i",{staticClass:"fas fa-fw fa-save"}),e._v(" Salvar\r\n            ")])],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{UiField:r(540).default,UiActions:r(543).default,UiForm:r(515).default})}}]);