(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{606:function(t,n,e){var content=e(654);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(56).default)("d636c122",content,!0,{sourceMap:!1})},653:function(t,n,e){"use strict";e(606)},654:function(t,n,e){(n=t.exports=e(55)(!1)).push([t.i,"._3MPz7Z5g_ZuElO1Qso07qx._2F235Qqnf-9ETVwQR4wMwE{height:auto}",""]),n.locals={"ui-content":"_3MPz7Z5g_ZuElO1Qso07qx","form-control":"_2F235Qqnf-9ETVwQR4wMwE"}},713:function(t,n,e){"use strict";e.r(n);e(40),e(49),e(8),e(88),e(575),e(580),e(582),e(583),e(584),e(585),e(586),e(587),e(588),e(589),e(590),e(591),e(592),e(593),e(594),e(595),e(597),e(598),e(599),e(600),e(601),e(602),e(603),e(604),e(605);var o={name:"ui-content",props:{value:{default:""}},watch:{$props:{deep:!0,handler:function(t){this.props=Object.assign({},t)}}},methods:{uuid:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return t+([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,(function(t){return(t^crypto.getRandomValues(new Uint8Array(1))[0]&15>>t/4).toString(16)}))},formControlHandle:function(t){this.props.value=t.target.innerHTML,this.$emit("input",this.props.value)}},data:function(){return{props:Object.assign({},this.$props)}},mounted:function(){this.$el.innerHTML=this.props.value}},r=(e(653),e(24)),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement;return(t._self._c||n)("div",{staticClass:"form-control ui-content",attrs:{contenteditable:"true"},on:{keyup:function(n){return t.formControlHandle(n)},click:function(n){return t.formControlHandle(n)}}})}),[],!1,null,null,null);n.default=component.exports}}]);