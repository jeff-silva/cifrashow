(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{560:function(t,e,n){"use strict";n.r(e);var o=n(44),r=n(432),l={components:{draggable:n.n(r).a},props:Object(o.a)({value:Array,handle:{default:".div"},animation:{default:200}},"handle",{default:!1}),watch:{deep:!0,handler:function(t){this.props=Object.assign({},t)}},data:function(){return{props:Object.assign({},this.$props)}},computed:{computedBind:function(){return{tag:this.props.tag,animation:this.props.animation,handle:this.props.handle}}}},c=n(11),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("draggable",t._b({on:{end:function(e){return t.$emit("input",t.props.value)}},model:{value:t.props.value,callback:function(e){t.$set(t.props,"value",e)},expression:"props.value"}},"draggable",t.computedBind,!1),[n("transition-group",{attrs:{duration:t.props.animation,name:"ui-draggable-transition-group","enter-active-class":"animate__animated animate__fadeIn","leave-active-class":"animate__animated animate__fadeOut"}},[t._t("default")],2)],1)],1)}),[],!1,null,null,null);e.default=component.exports},632:function(t,e,n){"use strict";n.r(e);var o={components:{Principios:n(508).default},props:{tevep:Object,node:Object,uuid:Function,tevepTitle:Function},watch:{$props:{deep:!0,handler:function(t){this.props=Object.assign({},t)}}},methods:{add:function(){this.node.inerencias.unshift({id:this.uuid("i"),name:"",tempo:!1,espaco:!1,piloto:!1})},remove:function(t){var e=this.node.inerencias.indexOf(t);this.node.inerencias.splice(e,1)}}},r=n(11),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"row no-gutters"},[n("div",{staticClass:"col-5"},[n("button",{staticClass:"btn btn-outline-primary btn-block",attrs:{type:"button"},on:{click:function(e){return t.add()}}},[n("i",{staticClass:"fas fa-plus"}),t._v(" Adicionar\r\n            ")]),t._v(" "),n("ui-draggable",{attrs:{handle:"._handle"},model:{value:t.node.inerencias,callback:function(e){t.$set(t.node,"inerencias",e)},expression:"node.inerencias"}},t._l(t.node.inerencias,(function(i){return n("div",{key:i.id,staticClass:"my-2 p-1 bg-white shadow-sm"},[n("div",{staticClass:"input-group"},[n("div",{staticClass:"input-group-prepend"},[n("div",{staticClass:"input-group-btn"},[n("a",{staticClass:"btn _handle",staticStyle:{cursor:"move"},attrs:{href:"javascript:;"}},[n("i",{staticClass:"fas fa-arrows-alt"})])])]),t._v(" "),n("div",{staticClass:"input-group-prepend"},[n("div",{staticClass:"input-group-text"},[t._v("\r\n                            Nome\r\n                        ")])]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:i.name,expression:"i.name"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:i.name},on:{input:function(e){e.target.composing||t.$set(i,"name",e.target.value)}}}),t._v(" "),n("div",{staticClass:"input-group-append"},[n("div",{staticClass:"input-group-btn"},[n("a",{staticClass:"btn btn-danger",attrs:{href:"javascript:;"},on:{click:function(e){return t.remove(i)}}},[n("i",{staticClass:"fas fa-times"})])])])]),t._v(" "),n("div",{staticClass:"row no-gutters mt-1"},[n("div",{staticClass:"col"},[n("div",{staticClass:"text-center mb-1"},[n("img",{staticStyle:{height:"30px"},attrs:{src:"/assets/icons/ampulheta.png",alt:""}})]),t._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:i.tempo,expression:"i.tempo"}],staticClass:"form-control",on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(i,"tempo",e.target.multiple?n:n[0])}}},[n("option",{domProps:{value:!1}},[t._v("Tempo")]),t._v(" "),t._l(t.node.tempos,(function(e){return n("option",{domProps:{value:e.id}},[t._v(t._s(e.title))])}))],2)]),t._v(" "),n("div",{staticClass:"col"},[n("div",{staticClass:"text-center mb-1"},[n("img",{staticStyle:{width:"100%",margin:"8px auto"},attrs:{src:"/assets/icons/espaco.png",alt:""}})]),t._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:i.espaco,expression:"i.espaco"}],staticClass:"form-control",on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(i,"espaco",e.target.multiple?n:n[0])}}},[n("option",{domProps:{value:!1}},[t._v("Espaço")]),t._v(" "),t._l(t.node.espacos,(function(e){return n("option",{domProps:{value:e.id}},[t._v(t._s(e.title))])}))],2)]),t._v(" "),n("div",{staticClass:"col"},[n("div",{staticClass:"text-center mb-1"},[n("img",{staticStyle:{height:"30px"},attrs:{src:"/assets/icons/piloto.png",alt:""}})]),t._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:i.piloto,expression:"i.piloto"}],staticClass:"form-control",on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(i,"piloto",e.target.multiple?n:n[0])}}},[n("option",{domProps:{value:!1}},[t._v("Piloto")]),t._v(" "),t._l(t.node.pilotos,(function(e){return n("option",{domProps:{value:e.id}},[t._v(t._s(e.title))])}))],2)]),t._v(" "),n("div",{staticClass:"col"},[n("div",{staticClass:"text-center mb-1 font-weight-bold",staticStyle:{margin:"9.5px auto"}},[t._v("R")]),t._v(" "),n("select",{staticClass:"form-control"})]),t._v(" "),n("div",{staticClass:"col"},[n("div",{staticClass:"text-center mb-1 font-weight-bold",staticStyle:{margin:"9.5px auto"}},[t._v("C")]),t._v(" "),n("select",{staticClass:"form-control"})])])])})),0)],1),t._v(" "),n("div",{staticClass:"col-7 pl-3"},[n("principios",t._b({},"principios",t.$props,!1))],1)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{UiDraggable:n(560).default})}}]);