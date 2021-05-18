(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{376:function(t,e,r){"use strict";r.r(e);var o={name:"ui-password",props:{value:{default:""},placeholder:{default:""},toggleShow:{default:!0},meter:{default:!0},type:{default:"password"}},watch:{$props:{deep:!0,handler:function(t){this.props=Object.assign({},t,this.props)}}},data:function(){return{props:Object.assign({},this.$props)}}},n=r(14),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"form-control p-0 bg-white"},[r("div",{staticClass:"input-group"},["checkbox"===t.props.type?r("input",{directives:[{name:"model",rawName:"v-model",value:t.props.value,expression:"props.value"}],staticClass:"form-control border-0 bg-transparent",attrs:{placeholder:t.props.placeholder,type:"checkbox"},domProps:{checked:Array.isArray(t.props.value)?t._i(t.props.value,null)>-1:t.props.value},on:{input:function(e){return t.$emit("input",t.props.value)},change:function(e){var r=t.props.value,o=e.target,n=!!o.checked;if(Array.isArray(r)){var l=t._i(r,null);o.checked?l<0&&t.$set(t.props,"value",r.concat([null])):l>-1&&t.$set(t.props,"value",r.slice(0,l).concat(r.slice(l+1)))}else t.$set(t.props,"value",n)}}}):"radio"===t.props.type?r("input",{directives:[{name:"model",rawName:"v-model",value:t.props.value,expression:"props.value"}],staticClass:"form-control border-0 bg-transparent",attrs:{placeholder:t.props.placeholder,type:"radio"},domProps:{checked:t._q(t.props.value,null)},on:{input:function(e){return t.$emit("input",t.props.value)},change:function(e){return t.$set(t.props,"value",null)}}}):r("input",{directives:[{name:"model",rawName:"v-model",value:t.props.value,expression:"props.value"}],staticClass:"form-control border-0 bg-transparent",attrs:{placeholder:t.props.placeholder,type:t.props.type},domProps:{value:t.props.value},on:{input:[function(e){e.target.composing||t.$set(t.props,"value",e.target.value)},function(e){return t.$emit("input",t.props.value)}]}}),t._v(" "),t.props.toggleShow?r("div",{staticClass:"input-group-append"},[r("div",{staticClass:"input-group-btn"},[r("div",{staticClass:"btn",on:{click:function(e){t.props.type="text"==t.props.type?"password":"text"}}},[r("i",{staticClass:"fas fa-eye",class:{"fa-eye-slash":"password"==t.props.type}})])])]):t._e()]),t._v(" "),t.props.meter?r("ui-password-meter",{staticStyle:{"margin-top":"-4px"},model:{value:t.props.value,callback:function(e){t.$set(t.props,"value",e)},expression:"props.value"}}):t._e()],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{UiPasswordMeter:r(379).default})},379:function(t,e,r){"use strict";r.r(e);var o={props:{value:{default:!1}},watch:{$props:{deep:!0,handler:function(t){this.props=Object.assign({},t)}}},computed:{meter:function(){var t=this.props.value,e=0,r="danger";if(t){for(var o=new Object,i=0;i<t.length;i++)o[t[i]]=(o[t[i]]||0)+1,e+=5/o[t[i]];var n={digits:/\d/.test(t),lower:/[a-z]/.test(t),upper:/[A-Z]/.test(t),nonWords:/\W/.test(t)},l=0;for(var c in n)l+=1==n[c]?1:0;e+=10*(l-1),(e=parseInt(e))>=70?r="success":e>=40&&(r="primary")}return{score:e,class:r}}},methods:{emit:function(){this.$emit("input",this.props.value),this.$emit("value",this.props.value),this.$emit("change",this.props.value)}},data:function(){return{props:Object.assign({},this.$props)}}},n=r(14),component=Object(n.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"progress",staticStyle:{height:"5px"}},[e("div",{staticClass:"progress-bar progress-bar-striped",class:"bg-"+this.meter.class,style:"width:"+this.meter.score+"%;"})])])}),[],!1,null,null,null);e.default=component.exports},394:function(t,e,r){"use strict";r.r(e);var o={methods:{submit:function(){var t=this;this.error=!1,this.loading=!0,this.$auth.loginWith("jwt",{data:this.post}).then((function(e){t.loading=!1,e.data.access_token&&t.$emit("success",e.data)})).catch((function(e){t.error="Usuário ou senha inválido",t.loading=!1}))}},data:function(){return{loading:!1,error:!1,post:{email:"",password:""}}}},n=r(14),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("form",{on:{submit:function(e){return e.preventDefault(),t.submit()}}},[t.error?r("div",{staticClass:"alert alert-danger",domProps:{innerHTML:t._s(t.error)}}):t._e(),t._v(" "),t._t("content",[r("div",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.post.email,expression:"post.email"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Seu e-mail"},domProps:{value:t.post.email},on:{input:function(e){e.target.composing||t.$set(t.post,"email",e.target.value)}}})]),t._v(" "),r("div",{staticClass:"form-group"},[r("ui-password",{attrs:{placeholder:"Senha",meter:!1},model:{value:t.post.password,callback:function(e){t.$set(t.post,"password",e)},expression:"post.password"}})],1),t._v(" "),r("div",{staticClass:"form-group text-right"},[r("button",{staticClass:"btn btn-primary btn-block",attrs:{type:"submit"}},[t.loading?r("span",[r("i",{staticClass:"fas fa-spinner fa-spin"})]):r("span",[t._v("Login")])])])])],2)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{UiPassword:r(376).default})},491:function(t,e,r){"use strict";r.r(e);var o={layout:"auth",methods:{onLogin:function(){var t=this.$route.query.redirect||"/dashboard";this.$router.push({path:t})}}},n=r(14),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h1",{staticClass:"text-center py-2"},[t._v("Acesse sua conta")]),t._v(" "),r("ui-auth-login",{on:{success:function(e){return t.onLogin()}}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{UiAuthLogin:r(394).default})}}]);