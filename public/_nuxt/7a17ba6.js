(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{726:function(e,t,l){"use strict";l.r(t);var n={props:{value:{default:""},placeholder:{default:"Buscar usuário"}},data:function(){return{loading:!1,items:[],props:Object.assign({},this.$props)}},methods:{emitValue:function(){this.$emit("input",this.props.value)},getResults:function(e){var t=this;this.loading=!0,this.$axios.get("/api/user/search",{params:{search:e}}).then((function(e){t.loading=!1,t.items=e.data.data}))}},mounted:function(){this.getResults(this.props.value)}},o=l(24),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("el-select",{staticClass:"d-block",attrs:{placeholder:e.placeholder,loading:e.loading,filterable:"",remote:"","remote-method":e.getResults},on:{change:function(t){return e.emitValue()}},model:{value:e.props.value,callback:function(t){e.$set(e.props,"value",t)},expression:"props.value"}},e._l(e.items,(function(i){return l("el-option",{key:i.id,attrs:{value:i.id,label:i.name}},[e._v(e._s(i.name))])})),1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);