(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{718:function(t,n,e){"use strict";e.r(n);var o={layout:"coreui/admin",data:function(){return{endpoints:[]}},mounted:function(){var t=this;this.$axios.get("/api/").then((function(n){t.endpoints=n.data}))}},r=e(12),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("table",{staticClass:"table table-borderless table-striped"},[t._m(0),t._v(" "),e("tbody",t._l(t.endpoints,(function(n){return e("tr",[e("td",[t._v(t._s(n.methods.join(" / ")))]),t._v(" "),e("td",[t._v(t._s(n.uri))])])})),0)])])}),[function(){var t=this.$createElement,n=this._self._c||t;return n("thead",[n("tr",[n("th",[this._v("Método")]),this._v(" "),n("th",[this._v("Endpoint")])])])}],!1,null,null,null);n.default=component.exports}}]);