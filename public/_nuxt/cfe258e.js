(window.webpackJsonp=window.webpackJsonp||[]).push([[51,33],{527:function(t,e,o){var content=o(535);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(56).default)("54b080ef",content,!0,{sourceMap:!1})},534:function(t,e,o){"use strict";o(527)},535:function(t,e,o){(e=t.exports=o(55)(!1)).push([t.i,"._3zmAcsi2edid9LiM-wSgM7{position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(0,0,0,.2);z-index:9999!important;display:flex;align-items:center;justify-content:center;padding:0!important}._3zmAcsi2edid9LiM-wSgM7 .Um7hY4BQrxkIukrIjOocQ{width:600px;max-width:90vw!important;max-height:90vh;margin:0!important;overflow:auto!important}",""]),e.locals={"ui-modal":"_3zmAcsi2edid9LiM-wSgM7",card:"Um7hY4BQrxkIukrIjOocQ"}},540:function(t,e,o){"use strict";o.r(e);var n={props:{value:{default:!1},tag:{default:"div"}},watch:{$props:{deep:!0,handler:function(t){this.props=Object.assign({},t)}}},methods:{emit:function(){this.$emit("input",this.props.value),this.$emit("value",this.props.value),this.$emit("change",this.props.value)},toggle:function(){this.props.value=!this.props.value,this.emit()}},data:function(){return{props:Object.assign({},this.$props)}}},l=(o(534),o(24)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("transition",{attrs:{name:"custom-unique-name","enter-active-class":"animate__animated animate__fadeIn","leave-active-class":"animate__animated animate__fadeOut"}},[t.props.value?o("div",{staticClass:"modal fade show",staticStyle:{display:"block",background:"#00000044","animation-duration":"200ms"},attrs:{tabindex:"-1","aria-labelledby":"exampleModalLiveLabel","aria-modal":"true",role:"dialog"},on:{click:function(e){return e.target!==e.currentTarget?null:t.toggle()}}},[o("div",{staticClass:"modal-dialog"},[o("div",{staticClass:"modal-content"},[o("div",{staticClass:"modal-header"},[t.$slots.header&&t.$scopedSlots.header?o("h5",{staticClass:"modal-title"},[t._t("header")],2):t._e(),t._v(" "),o("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"},on:{click:function(e){return t.toggle()}}},[o("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),t._v(" "),o("div",{staticClass:"modal-body"},[t._t("body")],2),t._v(" "),t.$slots.footer&&t.$scopedSlots.footer?o("div",{staticClass:"modal-footer"},[t._t("footer")],2):t._e()])])]):t._e()])],1)}),[],!1,null,null,null);e.default=component.exports},697:function(t,e,o){"use strict";o.r(e);var n={props:{value:Object,error:[Object,Boolean]},data:function(){return{email:!1,params:{search:"",page:1,orderby:"id",order:"desc"}}}},l=o(24),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("ui-modal",{scopedSlots:t._u([{key:"header",fn:function(){return[t._v("\r\n            "+t._s(t.email.subject)+"\r\n        ")]},proxy:!0},{key:"body",fn:function(){return[o("div",{staticClass:"bg-light p-2"},[t._v("Para: "+t._s(t.email.to.join(", ")))]),t._v(" "),o("div",{staticClass:"p-2",domProps:{innerHTML:t._s(t.email.body)}})]},proxy:!0},{key:"footer",fn:function(){return[o("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){t.email=!1}}},[t._v("\r\n                Ok\r\n            ")])]},proxy:!0}]),model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{UiModal:o(540).default})}}]);