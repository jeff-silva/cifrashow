(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{577:function(t,e,n){"use strict";n.r(e);var o={props:{value:Object,method:{default:"get"},action:{default:"/api"},push:{default:""}},watch:{$props:{deep:!0,handler:function(t){this.props=Object.assign({},t)}}},data:function(){return{loading:!1,resp:!1,error:!1,props:Object.assign({},this.$props)}},methods:{submit:function(){var t=this,e=this.$axios[this.method],n="get"==this.method?{params:this.props.value}:this.props.value;this.loading='<i class="fa fa-fw fa-spin fa-spinner"></i>',this.resp=!1,this.error=!1,e(this.action,n).then((function(e){t.loading="",t.resp=e.data})).catch((function(e){t.loading="",t.error=e.response.data||{}}))}},mounted:function(){var t=this;this.props.push?this.$push(this.props.push,(function(){console.error(t.props.push),t.submit()})):this.submit()}},r=n(16),component=Object(r.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("div",[this._t("default",null,{loading:this.loading,resp:this.resp,error:this.error,submit:this.submit})],2)}),[],!1,null,null,null);e.default=component.exports},692:function(t,e,n){"use strict";n.r(e);var o={layout:"admin",middleware:"auth",data:function(){return{}}},r=n(16),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ui-axios",{attrs:{method:"get",action:"/api/app/dashboard"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("div",{staticClass:"row no-gutters align-items-center"},[n("div",{staticClass:"col-6"},[n("h2",{staticClass:"text-uppercase"},[t._v("Contadores")])]),t._v(" "),n("div",{staticClass:"col-6"},[n("div",{staticClass:"row"},t._l(e.resp.counts,(function(e){return n("div",{staticClass:"col"},[n("div",{staticClass:"text-center py-3 bg-white shadow-sm"},[n("div",[t._v(t._s(e.title))]),t._v(" "),n("div",{staticStyle:{"font-size":"35px"}},[t._v(t._s(e.total))])])])})),0)])])]}}])})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{UiAxios:n(577).default})}}]);