(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{390:function(t,e,r){var content=r(431);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(39).default)("4cdb4a41",content,!0,{sourceMap:!1})},430:function(t,e,r){"use strict";var o=r(390);r.n(o).a},431:function(t,e,r){(e=r(38)(!1)).push([t.i,".ui-drawer *{transition:all .3s ease}.ui-drawer-type{position:fixed;top:0;left:0;width:100vw;height:100vh;z-index:99999!important;visibility:hidden;opacity:0}.ui-drawer-type.ui-drawer-type-show{visibility:visible;opacity:1}.ui-drawer-content{overflow-x:hidden;overflow-y:auto}.ui-drawer-type-modal{display:flex;align-items:center;justify-content:center;padding:0!important}.ui-drawer-type-drawer-left .ui-drawer-content{height:100vh;overflow:auto;position:absolute;top:0;left:-100%}.ui-drawer-type-drawer-left.ui-drawer-type-show .ui-drawer-content{left:0}.ui-drawer-type-drawer-right .ui-drawer-content{height:100vh;overflow:auto;position:absolute;top:0;right:-100%}.ui-drawer-type-drawer-right.ui-drawer-type-show .ui-drawer-content{right:0}",""]),t.exports=e},449:function(t,e,r){"use strict";r.r(e);var o={props:{value:{default:!1},tag:{default:"div"},type:{default:"modal"},backdropColor:{default:"#00000055"},width:{default:"300px"},renderHere:{default:!1}},watch:{$props:{deep:!0,handler:function(t){this.props=Object.assign({},t)}}},methods:{toggle:function(){this.props.value?this.hide():this.show()},show:function(){this.props.value=!0,this.$emit("value",this.props.value)},hide:function(){this.props.value=!1,this.$emit("value",this.props.value)}},data:function(){return{props:Object.assign({},this.$props)}}},n=(r(430),r(14)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"ui-drawer"},[t.renderHere?[t._t("content")]:t._e(),t._v(" "),r("div",{class:"ui-drawer-type ui-drawer-type-"+t.props.type+" "+(t.props.value?"ui-drawer-type-show":null),staticStyle:{"animation-duration":"300ms"},style:"background:"+t.props.backdropColor+";",on:{mousedown:function(e){if(e.target!==e.currentTarget)return null;t.props.value=!1,t.$emit("input",t.props.value)}}},[r(t.tag,{tag:"component",on:{submit:function(e){return e.preventDefault(),t.$emit("submit",e)}}},[r("div",{staticClass:"ui-drawer-content bg-white shadow",style:"width:"+t.props.width+";"},[t._t("content")],2)])],1)],2)}),[],!1,null,null,null);e.default=component.exports},469:function(t,e,r){var content=r(513);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(39).default)("3a4fc62f",content,!0,{sourceMap:!1})},512:function(t,e,r){"use strict";var o=r(469);r.n(o).a},513:function(t,e,r){(e=r(38)(!1)).push([t.i,".admin{height:100vh;display:flex;flex-direction:column}.admin-header{flex-direction:column}.admin-content,.admin-header{display:flex;-webkit-box-pack:center}.admin-content{flex-direction:column;flex:1;overflow:auto}",""]),t.exports=e},566:function(t,e,r){"use strict";r.r(e);var o={layout:"coreui/admin",data:function(){return{menuItems:[{title:"Home",to:"/test"},{title:"Autenticação",to:"/test/auth"},{title:"Cores",to:"/test/colors"},{title:"Carrosel",to:"/test/carousel"},{title:"Drawer",to:"/test/drawer"},{title:"Endpoints",to:"/test/endpoints"},{title:"Grape",to:"/test/grape"},{title:"Inputs",to:"/test/input"},{title:"Layout",to:"/test/layout"},{title:"Navigation",to:"/test/nav"},{title:"Table",to:"/test/table"},{title:"Tabs",to:"/test/tabs"},{title:"Exemplo completo",to:"/test/example"}]}}},n=(r(512),r(14)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"row no-gutters"},[r("div",{staticClass:"col-12 col-md-2 bg-white shadow-sm d-none d-md-block"},[r("div",{staticClass:"admin"},[r("div",{staticClass:"admin-content"},[r("div",{staticClass:"nav nav-pills flex-column"},[r("ui-drawer",{ref:"drawer",attrs:{type:"drawer-left","render-here":!0},scopedSlots:t._u([{key:"content",fn:function(){return t._l(t.menuItems,(function(i,e){return r("nuxt-link",{key:e,staticClass:"nav-link rounded-0 text-dark font-weight-bold",class:{"bg-light":t.$route.path==i.to},attrs:{to:i.to}},[t._v(t._s(i.title))])}))},proxy:!0}])})],1)])])]),t._v(" "),r("div",{staticClass:"col-12 col-md-10"},[r("div",{staticClass:"admin"},[r("div",{staticClass:"admin-header p-2 bg-white shadow-sm"},[r("div",{staticClass:"d-flex align-items-center"},[r("div",[r("a",{staticClass:"btn",attrs:{href:"javascript:;"},on:{click:function(e){return t.$refs.drawer.show()}}},[r("i",{staticClass:"fa fa-fw fa-bars"})])])])]),t._v(" "),r("div",{staticClass:"admin-content p-2"},[r("nuxt-child")],1),t._v(" "),r("div",{staticClass:"admin-header bg-secondary p-1"},[t._v("footer")])])])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{UiDrawer:r(449).default})}}]);