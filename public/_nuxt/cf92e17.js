(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{517:function(t,e,n){var content=n(527);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(37).default)("b8d0879e",content,!0,{sourceMap:!1})},519:function(t,e,n){var content=n(548);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(37).default)("eed70b5e",content,!0,{sourceMap:!1})},520:function(t,e,n){var content=n(550);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(37).default)("6539bdd3",content,!0,{sourceMap:!1})},526:function(t,e,n){"use strict";var r=n(517);n.n(r).a},527:function(t,e,n){(e=n(36)(!1)).push([t.i,".ui-modal{position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(0,0,0,.2);z-index:9999!important;display:flex;align-items:center;justify-content:center;padding:0!important}.ui-modal .card{width:600px;max-width:90vw!important;max-height:90vh;margin:0!important;overflow:auto!important}",""]),t.exports=e},532:function(t,e,n){"use strict";n.r(e);var r={props:{value:{default:!1},tag:{default:"div"}},watch:{$props:{deep:!0,handler:function(t){this.props=Object.assign({},t)}}},methods:{emit:function(){this.$emit("input",this.props.value),this.$emit("value",this.props.value),this.$emit("change",this.props.value)},toggle:function(){this.props.value=!this.props.value,this.emit()}},data:function(){return{props:Object.assign({},this.$props)}}},o=(n(526),n(12)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("transition",{attrs:{name:"custom-unique-name","enter-active-class":"animate__animated animate__fadeIn","leave-active-class":"animate__animated animate__fadeOut"}},[t.props.value?n("div",{staticClass:"modal fade show",staticStyle:{display:"block",background:"#00000044","animation-duration":"200ms"},attrs:{tabindex:"-1","aria-labelledby":"exampleModalLiveLabel","aria-modal":"true",role:"dialog"},on:{click:function(e){return e.target!==e.currentTarget?null:t.toggle()}}},[n("div",{staticClass:"modal-dialog"},[n("div",{staticClass:"modal-content"},[n("div",{staticClass:"modal-header"},[t.$slots.header&&t.$scopedSlots.header?n("h5",{staticClass:"modal-title"},[t._t("header")],2):t._e(),t._v(" "),n("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"},on:{click:function(e){return t.toggle()}}},[n("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),t._v(" "),n("div",{staticClass:"modal-body"},[t._t("body")],2),t._v(" "),t.$slots.footer&&t.$scopedSlots.footer?n("div",{staticClass:"modal-footer"},[t._t("footer")],2):t._e()])])]):t._e()])],1)}),[],!1,null,null,null);e.default=component.exports},547:function(t,e,n){"use strict";var r=n(519);n.n(r).a},548:function(t,e,n){(e=n(36)(!1)).push([t.i,".ui-table *{transition:all .3s ease}.ui-table table tbody td{vertical-align:middle}.ui-table-actions{position:relative;z-index:2}.ui-table-actions>.btn-group{position:absolute;top:-15px;right:0}.ui-table-actions-hidden{white-space:nowrap;opacity:0;visibility:hidden}.ui-table-actions .btn{margin-left:5px!important;border-radius:5px!important}.ui-table table tbody tr:hover .ui-table-actions-hidden{opacity:1;visibility:visible}.ui-table-fixed-header{overflow-y:scroll}.ui-table-fixed-header thead th{position:-webkit-sticky;position:sticky;top:0;background:#f5f5f5;z-index:3}",""]),t.exports=e},549:function(t,e,n){"use strict";var r=n(520);n.n(r).a},550:function(t,e,n){(e=n(36)(!1)).push([t.i,".ui-pagination-btn{width:30px;height:30px;margin:0 2px;padding:4px 0 0;border-radius:50%}.ui-pagination-btn-active{background:#ddd}.ui-pagination-scroll{white-space:nowrap;overflow:auto;padding-bottom:3px}.ui-pagination-scroll::-webkit-scrollbar{height:4px}.ui-pagination-scroll::-webkit-scrollbar-thumb{background:#ccc;cursor:pointer}",""]),t.exports=e},554:function(t,e,n){"use strict";n.r(e);var r={props:{fixedHeader:{default:!0},select:{default:!1},loading:{default:!1},maxHeight:{default:"auto"},current_page:{default:1},from:{default:0},to:{default:0},last_page:{default:0},per_page:{default:0},total:{default:0},value:{default:function(){return[]}},data:{default:function(){return[]}}},watch:{$props:{deep:!0,handler:function(t){this.props=Object.assign({},t)}}},methods:{toggleSelect:function(t){for(var i in this.props.value)if(this.props.value[i]==t.item)return this.props.value.splice(i,1),void this.$emit("input",this.props.value);this.props.value.push(t.item),this.$emit("input",this.props.value)},toggleSelectAll:function(t){this.$el.querySelectorAll("input[type=checkbox]").forEach((function(e){t!=e&&(e.checked=t.checked,e.dispatchEvent(new Event("change")))}))},isSelected:function(t){for(var i in this.props.value)if(this.props.value[i]==t.item)return!0;return!1},getHeaders:function(){var t=this;this.headers=[],this.$el.querySelectorAll("table thead th").forEach((function(e){t.headers.push({text:e.innerText,width:e.getAttribute("width")})}))},onPaginationChange:function(t){this.props.current_page=t.current_page,this.$emit("update:current_page",this.props.current_page),this.$emit("paginate",t.current_page)}},computed:{compData:function(){return this.props.data.map((function(t,e){var n=t.id;return"number"==typeof n&&"string"==typeof n||(n=e),{_id:n,item:t}}))}},data:function(){var data={headers:[]};return data.props=Object.assign({},this.$props),data},mounted:function(){this.getHeaders()}},o=(n(547),n(12)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ui-table"},[n("div",{staticStyle:{overflow:"auto"},style:{maxHeight:t.props.maxHeight}},[n("table",{staticClass:"table table-borderless table-striped bg-white shadow-sm m-0",class:{"table-hover":t.props.data.length>0,"ui-table-fixed-header":t.props.fixedHeader}},[n("thead",[n("tr",[t.select?n("th",{attrs:{width:"10px"}},[n("input",{attrs:{type:"checkbox"},on:{change:function(e){return t.toggleSelectAll(e.target)}}})]):t._e(),t._v(" "),t._t("header",[n("th",[t._v(" ")])]),t._v(" "),n("th",[t._v(" ")])],2)]),t._v(" "),n("tbody",[n("tr",[n("td",{staticClass:"p-0",attrs:{colspan:t.headers.length}},[t._t("loading",[n("div",{staticStyle:{height:"5px",position:"relative"}},[t.props.loading?n("div",{staticClass:"progress rounded-0",staticStyle:{height:"100%"}},[n("div",{staticClass:"progress-bar progress-bar-striped progress-bar-animated",staticStyle:{width:"100%"},attrs:{role:"progressbar","aria-valuenow":"75","aria-valuemin":"0","aria-valuemax":"100"}})]):t._e()])])],2)]),t._v(" "),0!=t.props.data.length||t.props.loading?t._e():[n("tr",[n("td",{attrs:{colspan:t.headers.length}},[t._t("empty",[t._v("Nenhum item carregado")])],2)])],t._v(" "),t._l(t.compData,(function(i){return n("tr",{key:i._id},[t.select?n("td",[n("input",{attrs:{type:"checkbox"},domProps:{checked:t.isSelected(i)},on:{change:function(e){return t.toggleSelect(i)}}})]):t._e(),t._v(" "),t._t("item",[n("td",[n("pre",[t._v(t._s(i._id))])])],{item:i.item}),t._v(" "),n("td",{attrs:{width:"50px"}},[n("div",{staticClass:"ui-table-actions"},[n("div",{staticClass:"btn-group btn-group-sm"},[n("div",{staticClass:"btn-group btn-group-sm ui-table-actions-hidden"},[t._t("actions",[t._v(" ")],{item:i.item})],2),t._v(" "),t._m(0,!0)])])])],2)}))],2)])]),t._v(" "),n("div",{staticClass:"bg-white"},[n("div",{staticClass:"row no-gutters align-items-center"},[n("div",{staticClass:"col-12 col-md-8 p-2"},[n("ui-pagination",t._b({on:{change:function(e){return t.onPaginationChange(e)}}},"ui-pagination",t.props,!1))],1),t._v(" "),n("div",{staticClass:"col-12 col-md-4 p-2 text-md-right"},[t._v("\r\n                Página "+t._s(t.props.current_page)+"/"+t._s(t.props.last_page)+"\r\n                  •  \r\n                "+t._s(t.props.total)+" Itens\r\n            ")])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"btn d-md-none",attrs:{href:"javascript:;"}},[e("i",{staticClass:"fa fa-fw fa-plus"})])}],!1,null,null,null);e.default=component.exports;installComponents(component,{UiPagination:n(555).default})},555:function(t,e,n){"use strict";n.r(e);var r={props:{current_page:{default:1},from:{default:0},to:{default:0},last_page:{default:0},per_page:{default:0},total:{default:0}},watch:{$props:{deep:!0,handler:function(t){this.props=Object.assign({},t)}}},methods:{setPage:function(t){"+"==t?t=this.props.current_page+1:"-"==t&&(t=this.props.current_page-1),this.props.current_page=t,this.$emit("change",this.props)},onWheel:function(t){t.preventDefault(),(t.target.classList.contains("ui-pagination-scroll")?t.target:t.target.parentNode).scrollLeft+=t.deltaY/2}},data:function(){return{props:Object.assign({},this.$props)}}},o=(n(549),n(12)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.props.last_page>1?n("div",{staticClass:"ui-pagination"},[n("div",{staticClass:"d-flex"},[n("div",{staticClass:"pr-1"},[n("a",{staticClass:"btn btn-sm ui-pagination-btn",class:{"ui-pagination-btn-active":1==t.props.current_page},attrs:{href:"javascript:;"},on:{click:function(e){return t.setPage(1)}}},[n("i",{staticClass:"fa fa-fw fa-angle-double-left"})])]),t._v(" "),n("div",{staticClass:"pr-1"},[n("a",{staticClass:"btn btn-sm ui-pagination-btn",class:{"ui-pagination-btn-active":1==t.props.current_page},attrs:{href:"javascript:;"},on:{click:function(e){return t.setPage("-")}}},[n("i",{staticClass:"fa fa-fw fa-angle-left"})])]),t._v(" "),n("div",{staticClass:"text-center ui-pagination-scroll",on:{wheel:function(e){return t.onWheel(e)}}},t._l(t.props.last_page,(function(p){return n("a",{staticClass:"btn btn-sm ui-pagination-btn",class:{"ui-pagination-btn-active":t.props.current_page==p},attrs:{href:"javascript:;"},on:{click:function(e){return t.setPage(p)}}},[t._v("\r\n                "+t._s(p)+"\r\n            ")])})),0),t._v(" "),n("div",{staticClass:"pl-1"},[n("a",{staticClass:"btn btn-sm ui-pagination-btn",class:{"ui-pagination-btn-active":t.props.current_page==t.props.last_page},attrs:{href:"javascript:;"},on:{click:function(e){return t.setPage("+")}}},[n("i",{staticClass:"fa fa-fw fa-angle-right"})])]),t._v(" "),n("div",{staticClass:"pl-1"},[n("a",{staticClass:"btn btn-sm ui-pagination-btn",class:{"ui-pagination-btn-active":t.props.current_page==t.props.last_page},attrs:{href:"javascript:;"},on:{click:function(e){return t.setPage(t.props.last_page)}}},[n("i",{staticClass:"fa fa-fw fa-angle-double-right"})])])])]):t._e()}),[],!1,null,null,null);e.default=component.exports},573:function(t,e,n){"use strict";n.r(e);n(59);var r={components:{TimeAgo:n(577).a},props:{value:{default:0},locale:{default:"pt_BR"},refresh:{default:60},long:{default:!0}},watch:{$props:{deep:!0,handler:function(t){this.props=Object.assign({},t)}}},methods:{validDatetime:function(t){return(t||"").replace("T"," ")}},data:function(){return{props:Object.assign({},this.$props)}}},o=n(12),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ui-timeago",attrs:{title:t._f("datetime")(t.props.value)}},[t.props.value?n("time-ago",{attrs:{datetime:t.validDatetime(t.props.value),refresh:t.props.refresh,locale:t.props.locale,long:t.props.long}}):n("div",[t._v(" ")])],1)}),[],!1,null,null,null);e.default=component.exports},719:function(t,e,n){"use strict";n.r(e);var r={props:{value:Object,error:[Object,Boolean]},data:function(){return{email:!1,params:{search:"",page:1,orderby:"id",order:"desc"}}}},o=n(12),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ui-axios",{attrs:{method:"get",action:"/api/email-sent/search"},scopedSlots:t._u([{key:"default",fn:function(e){e.loading;var r=e.resp,o=(e.error,e.submit);return[n("div",{staticClass:"input-group",staticStyle:{"max-width":"400px"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.params.search,expression:"params.search"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Pesquisar"},domProps:{value:t.params.search},on:{input:function(e){e.target.composing||t.$set(t.params,"search",e.target.value)}}}),t._v(" "),n("div",{staticClass:"input-group-append"},[n("div",{staticClass:"input-group-btn"},[n("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(t){return o()}}},[n("i",{staticClass:"fas fa-search"})])])])]),t._v(" "),n("br"),t._v(" "),n("ui-table",t._b({on:{paginate:function(e){t.params.page=e,o()}},scopedSlots:t._u([{key:"header",fn:function(){return[n("th",[t._v("Para")]),t._v(" "),n("th",[t._v("Assunto")]),t._v(" "),n("th",[t._v("Data")])]},proxy:!0},{key:"item",fn:function(e){var r=e.item;return[n("td",[t._v(t._s(r.to.join(", ")))]),t._v(" "),n("td",[t._v(t._s(r.subject))]),t._v(" "),n("td",[n("ui-timeago",{model:{value:r.created_at,callback:function(e){t.$set(r,"created_at",e)},expression:"item.created_at"}})],1)]}},{key:"actions",fn:function(e){var r=e.item;return[n("a",{staticClass:"btn btn-primary",attrs:{href:"javascript:;"},on:{click:function(e){t.email=r}}},[n("i",{staticClass:"fas fa-eye"})])]}}],null,!0)},"ui-table",r,!1,!0))]}}]),model:{value:t.params,callback:function(e){t.params=e},expression:"params"}}),t._v(" "),n("ui-modal",{scopedSlots:t._u([{key:"header",fn:function(){return[t._v("\r\n            "+t._s(t.email.subject)+"\r\n        ")]},proxy:!0},{key:"body",fn:function(){return[n("div",{staticClass:"bg-light p-2"},[t._v("Para: "+t._s(t.email.to.join(", ")))]),t._v(" "),n("div",{staticClass:"p-2",domProps:{innerHTML:t._s(t.email.body)}})]},proxy:!0},{key:"footer",fn:function(){return[n("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){t.email=!1}}},[t._v("\r\n                Ok\r\n            ")])]},proxy:!0}]),model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{UiTimeago:n(573).default,UiTable:n(554).default,UiAxios:n(346).default,UiModal:n(532).default})}}]);