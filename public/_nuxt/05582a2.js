(window.webpackJsonp=window.webpackJsonp||[]).push([[32,33],{628:function(t,e,n){"use strict";n.r(e);var o={props:{title:{default:"Default title"},text:{default:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim accusamus exercitationem explicabo eius totam at tempora earum, veritatis, architecto, voluptates fugit esse? Doloremque temporibus molestiae fugiat porro obcaecati rerum dignissimos."}},edit:{title:{component:"input",componentBind:{type:"text",class:"form-control"},value:"Aaa"},text:{component:"ui-content",componentBind:{},value:"Aaa"}},watch:{$props:{deep:!0,handler:function(t){this.props=Object.assign({},t)}}},data:function(){return{props:Object.assign({},this.$props)}}},c=n(18),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",{domProps:{innerHTML:t._s(t.props.title)}}),t._v(" "),n("div",{domProps:{innerHTML:t._s(t.props.text)}})])}),[],!1,null,null,null);e.default=component.exports},731:function(t,e,n){"use strict";n.r(e);n(40),n(49),n(8),n(88),n(576),n(577),n(578),n(579),n(580),n(581),n(582),n(583),n(584),n(585),n(586),n(587),n(588),n(589),n(590),n(591),n(592),n(593),n(594),n(595),n(596),n(597),n(598),n(599),n(600);var o={props:{value:{default:function(){return{}}}},watch:{$props:{deep:!0,handler:function(t){this.props=Object.assign({},t)}}},data:function(){return{props:Object.assign({},this.$props),components:[{id:"content",name:"Content",component:n(628).default}]}},methods:{uuid:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return t+([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,(function(t){return(t^crypto.getRandomValues(new Uint8Array(1))[0]&15>>t/4).toString(16)}))},sectionAdd:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},section=Object.assign({type:"section",id:this.uuid("section-"),classes:"",tag:"section",items:[]},t);return this.props.value.sections.push(section),section},containerAdd:function(section){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=Object.assign({type:"container",id:this.uuid("container-"),classes:"",full:!1,gutters:!0,items:[]},t);return section.items.push(e),e},colAdd:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},col=Object.assign({type:"column",id:this.uuid("col-"),classes:"",xs:"col-12",sm:!1,md:!1,lg:!1,items:[]},e);return t.items.push(col),col},componentAdd:function(col,component){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};console.error("component",component);var e=Object.assign({type:"component",id:this.uuid("component-"),classes:"",component:component,componentBind:{}},t);return col.items.push(e),e},defaultValue:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.assign({sections:[]},t)}},mounted:function(){this.props.value=this.defaultValue(this.props.value);var section=this.sectionAdd(),t=this.containerAdd(section),e=(this.colAdd(t,{sm:"col-sm-6"}),this.colAdd(t,{sm:"col-sm-6"}));this.componentAdd(e,this.components[0].component)}},c=n(18),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ui-layout"},[t._l(t.props.value.sections,(function(e){return n("div",{key:e.id},t._l(e.items,(function(o){return n("div",{key:e.id,staticClass:"border",class:{container:!e.full}},[n("div",{staticClass:"row",class:{"no-gutters":!o.gutters}},t._l(o.items,(function(e){return n("div",{class:[e.xs,e.sm,e.md,e.lg]},t._l(e.items,(function(e){return n("div",[n(e.component,t._b({tag:"component"},"component",e.componentBind,!1))],1)})),0)})),0)])})),0)})),t._v(" "),n("pre",[t._v("$data: "+t._s(t.$data))])],2)}),[],!1,null,null,null);e.default=component.exports}}]);