(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{516:function(e,t,r){var content=r(523);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(27).default)("890feb8e",content,!0,{sourceMap:!1})},522:function(e,t,r){"use strict";var n=r(516);r.n(n).a},523:function(e,t,r){(t=r(26)(!1)).push([e.i,".ui-code .CodeMirror-cursor{height:16px!important}.ui-code .CodeMirror-line,.ui-code .CodeMirror-line *{font:16px monospace!important;line-height:16px!important}.ui-code .CodeMirror{height:auto}.CodeMirror-hscrollbar::-webkit-scrollbar{width:8px;height:8px}.CodeMirror-hscrollbar::-webkit-scrollbar-track{background:transparent}.CodeMirror-hscrollbar::-webkit-scrollbar-thumb{background:#999;border-radius:6px}",""]),e.exports=t},524:function(e,t,r){"use strict";r.r(t);var n=r(552),o=r.n(n),l=(r(554),r(555),r(556),r(548),r(549),r(550),r(547),{components:{codemirror:o.a.codemirror},props:{value:{default:""},mode:{default:"htmlmixed"}},watch:{$props:{deep:!0,handler:function(e){this.props=Object.assign({},e)}}},computed:{compOptions:function(){var e=this.props.mode;return"html"==e&&(e="htmlmixed"),{tabSize:4,mode:e,theme:"bespin",lineNumbers:!0,lineWrapping:!1,line:!0}}},data:function(){var data={};return data.props=Object.assign({},this.$props),data},methods:{emit:function(){this.$emit("input",this.props.value)}},mounted:function(){}}),d=(r(522),r(16)),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"ui-code bg-dark"},[r("codemirror",{attrs:{options:e.compOptions},model:{value:e.props.value,callback:function(t){e.$set(e.props,"value",t)},expression:"props.value"}})],1)}),[],!1,null,null,null);t.default=component.exports},529:function(e,t,r){var content=r(572);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(27).default)("5dc4fad2",content,!0,{sourceMap:!1})},559:function(e,t,r){"use strict";var n=r(7),o=r(37),l=r(48),d=r(343),c=r(99),m=r(17),f=r(72).f,h=r(100).f,v=r(14).f,w=r(560).trim,y=n.Number,x=y,C=y.prototype,j="Number"==l(r(145)(C)),T="trim"in String.prototype,N=function(e){var t=c(e,!1);if("string"==typeof t&&t.length>2){var r,n,o,l=(t=T?t.trim():w(t,3)).charCodeAt(0);if(43===l||45===l){if(88===(r=t.charCodeAt(2))||120===r)return NaN}else if(48===l){switch(t.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+t}for(var code,d=t.slice(2),i=0,m=d.length;i<m;i++)if((code=d.charCodeAt(i))<48||code>o)return NaN;return parseInt(d,n)}}return+t};if(!y(" 0o1")||!y("0b1")||y("+0x1")){y=function(e){var t=arguments.length<1?0:e,r=this;return r instanceof y&&(j?m((function(){C.valueOf.call(r)})):"Number"!=l(r))?d(new x(N(t)),r,y):N(t)};for(var _,S=r(12)?f(x):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),A=0;S.length>A;A++)o(x,_=S[A])&&!o(y,_)&&v(y,_,h(x,_));y.prototype=C,C.constructor=y,r(18)(n,"Number",y)}},560:function(e,t,r){var n=r(9),o=r(49),l=r(17),d=r(561),c="["+d+"]",m=RegExp("^"+c+c+"*"),f=RegExp(c+c+"*$"),h=function(e,t,r){var o={},c=l((function(){return!!d[e]()||"​"!="​"[e]()})),m=o[e]=c?t(v):d[e];r&&(o[r]=m),n(n.P+n.F*c,"String",o)},v=h.trim=function(e,t){return e=String(o(e)),1&t&&(e=e.replace(m,"")),2&t&&(e=e.replace(f,"")),e};e.exports=h},561:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},571:function(e,t,r){"use strict";var n=r(529);r.n(n).a},572:function(e,t,r){(t=r(26)(!1)).push([e.i,".ui-select *{transition:all .3s ease}.ui-select{position:relative;cursor:pointer}.ui-select>.ui-select-items{position:static;top:100%;left:0;width:100%}.ui-select-item{opacity:1}.ui-select-item-hide{opacity:0;height:0;margin:0;padding:0;transform:scaleY(0)}.ui-select.ui-select-dropdown .ui-select-dropdown-content{position:absolute;top:100%;left:0;width:100%;z-index:-9;max-height:300px!important}.ui-select.ui-select-dropdown.ui-select-focused .ui-select-dropdown-content{z-index:9}",""]),e.exports=t},581:function(e,t,r){"use strict";r.r(t);r(73),r(101),r(559);var n=r(2);r.n(n).a.component("ui-select-item",{props:{value:[Boolean,Number,String,Object,Array]},methods:{select:function(){var e=this;if(this.$parent.props.multiple){var t=this.$parent.props.value.indexOf(this.value);t>=0?this.$parent.props.value.splice(t,1):this.$parent.props.value.push(this.value)}else this.$parent.props.value=this.$parent.props.value!=this.value&&this.value;setTimeout((function(){e.$parent.setValue(e.$parent.props.value),e.$parent.$forceUpdate()}),10)},selected:function(){return this.$parent.props.multiple?this.$parent.props.value.indexOf(this.value)>=0:this.$parent.props.value==this.value}},template:'<div class="ui-select-item list-group-item" :class="{\'ui-select-item-selected\':selected(value)}" @click="select()">\n    <div class="d-flex align-items-center">\n      <div class="flex-grow-1 ui-select-item-content" ref="content">\n        <slot></slot>\n      </div>\n\n      <div class="text-right" style="width:25px;">\n        <i class="fas" :class="{\'fa-check\':selected(value)}"></i>\n      </div>\n    </div>\n  </div>'});var o={props:{value:[Boolean,Number,String,Object,Array],multiple:{default:!1},maxHeight:{default:"none"},dropdown:{default:!0},empty:{default:"Nenhum item selecionado"},filter:{default:""},showFilter:{default:!0}},watch:{$props:{deep:!0,handler:function(e){this.props=Object.assign({},e),this.setSelectedLabel()}}},data:function(){var data={focused:!1};return data.selectedLabel=this.$props.empty,data.props=Object.assign({},this.$props),data.props.multiple?Array.isArray(data.props.value)||(data.props.value=[data.props.value]):Array.isArray(data.props.value)&&(data.props.value=data.props.value[0]||!1),data},methods:{setValue:function(e){this.props.value=e,this.$emit("input",this.props.value)},filterItems:function(){var e=this;this.$el.querySelectorAll(".ui-select-items > .list-group-item").forEach((function(t){t.classList.remove("ui-select-item-hide"),e.props.filter&&!t.innerText.toLowerCase().includes(e.props.filter.toLowerCase())&&t.classList.add("ui-select-item-hide")}))},setSelectedLabel:function(){var e=this;setTimeout((function(){if(e.$el){var t=e.$el.querySelectorAll(".ui-select-item-selected .ui-select-item-content");1!=t.length?t.length>1?e.selectedLabel='<div class="d-flex align-items-center">\n            <div class="flex-grow-1">'.concat(t[0].innerHTML,"</div>\n            <div>+").concat(t.length-1," ").concat(t.length-1==1?"item":"itens","</div>\n          </div>"):e.selectedLabel=e.props.empty:e.selectedLabel=t[0].innerHTML}else e.selectedLabel=e.props.empty}),10)},documentClickHandle:function(e){this.focused=this.$el.contains(e.target)}},mounted:function(){this.filterItems(),this.setSelectedLabel(),document.addEventListener("click",this.documentClickHandle)},beforeDestroy:function(){document.removeEventListener("click",this.documentClickHandle)}},l=(r(571),r(16)),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"ui-select",class:{"ui-select-dropdown":e.dropdown,"ui-select-focused":e.focused}},[e.props.dropdown?r("div",{staticClass:"bg-white shadow-sm p-2",domProps:{innerHTML:e._s(e.selectedLabel)}}):e._e(),e._v(" "),r("div",{staticClass:"ui-select-dropdown-content bg-white",class:{shadow:e.props.dropdown},style:"overflow:auto; max-height:"+e.maxHeight+";"},[e.props.showFilter?r("div",{staticClass:"input-group form-control p-0 m-0 bg-light"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.props.filter,expression:"props.filter"}],staticClass:"form-control bg-transparent border-0",attrs:{type:"text",placeholder:"Filtrar"},domProps:{value:e.props.filter},on:{keyup:function(t){return e.filterItems()},input:function(t){t.target.composing||e.$set(e.props,"filter",t.target.value)}}}),e._v(" "),e._m(0)]):e._e(),e._v(" "),r("div",{staticClass:"ui-select-items list-group list-group-flush m-0"},[e._t("default")],2)])])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"input-group-append"},[t("div",{staticClass:"input-group-btn"},[t("button",{staticClass:"btn bg-transparent",attrs:{type:"button"}},[t("i",{staticClass:"fas fa-search"})])])])}],!1,null,null,null);t.default=component.exports},701:function(e,t,r){"use strict";r.r(t);var n={methods:{getCode:function(e){return['<ui-select v-model="value" v-bind=\''.concat(JSON.stringify(e.bind),"'>"),'\t<ui-select-item value="1">Item 1</ui-select-item>','\t<ui-select-item value="2">Item 2</ui-select-item>','\t<ui-select-item value="3">Item 3</ui-select-item>',"</ui-select>"].join("\n")}},data:function(){return{selects:[{title:"Valor único",value:!1,bind:{}},{title:"Valor múltiplo",value:!1,bind:{multiple:!0}},{title:"Altura máxima 200px",value:!1,bind:{maxHeight:"200PX"}},{title:"Sem dropdown",value:!1,bind:{dropdown:!1}},{title:"Com filtro pre definido",value:!1,bind:{filter:"miss"}},{title:"Mensagem customizada de seleções vazias",value:!1,bind:{empty:"Sem nada"}}],user1:!1,user2:!1,users:[{gender:"male",name:{title:"Mr",first:"Dwayne",last:"Hughes"},location:{street:{number:825,name:"Albert Road"},city:"Preston",state:"Suffolk",country:"United Kingdom",postcode:"U6 1JT",coordinates:{latitude:"15.2946",longitude:"-123.8598"},timezone:{offset:"+2:00",description:"Kaliningrad, South Africa"}},email:"dwayne.hughes@example.com",login:{uuid:"47810ad7-1193-496e-8a29-cf096d4c7895",username:"bluemeercat791",password:"nature",salt:"gfKoMA5X",md5:"d3ec68f6db7064a62d8006d3c3cdf5a4",sha1:"3d8af77c34b22408e2b715a0f07d7931a6d925de",sha256:"5cf7fb83627fafd5d1e61fefbb880a34d8bf865a230e86eff12b5bc11c8039f5"},dob:{date:"1997-03-16T22:07:45.926Z",age:24},registered:{date:"2003-02-12T20:05:12.708Z",age:18},phone:"0117091 954 2031",cell:"0715-808-170",id:{name:"NINO",value:"OT 16 32 55 W"},picture:{large:"https://randomuser.me/api/portraits/men/59.jpg",medium:"https://randomuser.me/api/portraits/med/men/59.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/men/59.jpg"},nat:"GB"},{gender:"male",name:{title:"Mr",first:"Ray",last:"Gordon"},location:{street:{number:6233,name:"Karen Dr"},city:"Concord",state:"Florida",country:"United States",postcode:10240,coordinates:{latitude:"-16.0476",longitude:"-63.4954"},timezone:{offset:"-2:00",description:"Mid-Atlantic"}},email:"ray.gordon@example.com",login:{uuid:"a4d24adb-0f1f-4864-8637-a9086d65eebb",username:"smallladybug305",password:"jennaj",salt:"KNbzvAwV",md5:"10ebb2eebb1d59d6999fa27abd8b8c1a",sha1:"cadc42bd4bfba1740caa79643d3995170b9d3f49",sha256:"c73136212bcb4caad434eed30f42329112447eea380568ce3b41dc2de58ad90e"},dob:{date:"1963-06-06T22:22:29.207Z",age:58},registered:{date:"2012-05-29T02:50:54.830Z",age:9},phone:"(253)-950-1265",cell:"(219)-007-7101",id:{name:"SSN",value:"340-77-6404"},picture:{large:"https://randomuser.me/api/portraits/men/20.jpg",medium:"https://randomuser.me/api/portraits/med/men/20.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/men/20.jpg"},nat:"US"},{gender:"male",name:{title:"Mr",first:"Lucas",last:"Thomas"},location:{street:{number:3457,name:"Taieri Road"},city:"Auckland",state:"West Coast",country:"New Zealand",postcode:30806,coordinates:{latitude:"45.7360",longitude:"-30.6243"},timezone:{offset:"-9:00",description:"Alaska"}},email:"lucas.thomas@example.com",login:{uuid:"905794bb-3d10-4881-8262-0767fab5d8fa",username:"bigwolf180",password:"birthday4",salt:"MSPFJKez",md5:"912db9d8cca8b478882226681bac069f",sha1:"54e2a1d4faaeda53604cbb85f0cd262f1e820020",sha256:"6fb54005785eccb7a717f69474cc2a505f2c75bee0060f97fdff67bbbff5b88a"},dob:{date:"1988-08-20T12:16:49.680Z",age:33},registered:{date:"2006-04-06T07:20:53.114Z",age:15},phone:"(225)-303-8522",cell:"(165)-823-4299",id:{name:"",value:null},picture:{large:"https://randomuser.me/api/portraits/men/92.jpg",medium:"https://randomuser.me/api/portraits/med/men/92.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/men/92.jpg"},nat:"NZ"},{gender:"female",name:{title:"Ms",first:"Concepcion",last:"Vidal"},location:{street:{number:805,name:"Calle de Alcalá"},city:"Arrecife",state:"Asturias",country:"Spain",postcode:63305,coordinates:{latitude:"69.2300",longitude:"-124.7152"},timezone:{offset:"-4:00",description:"Atlantic Time (Canada), Caracas, La Paz"}},email:"concepcion.vidal@example.com",login:{uuid:"6e0ddaf7-973e-47de-9801-09862828dfc6",username:"crazyswan770",password:"titanium",salt:"Zmu6NhVi",md5:"b4ca12163be605ea8c999e99b8dd4e1d",sha1:"7d737544a16e05eedd1e7770a1a3381388f04a2a",sha256:"665085d6a15d11531501bcfa25cdf55c692cfc11a54bff0c96d589c59db7425b"},dob:{date:"1981-05-23T12:53:37.952Z",age:40},registered:{date:"2004-12-26T06:58:45.540Z",age:17},phone:"937-356-536",cell:"631-857-469",id:{name:"DNI",value:"25236064-X"},picture:{large:"https://randomuser.me/api/portraits/women/91.jpg",medium:"https://randomuser.me/api/portraits/med/women/91.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/women/91.jpg"},nat:"ES"},{gender:"female",name:{title:"Mrs",first:"Lascívia",last:"da Cruz"},location:{street:{number:7440,name:"Rua Dezesseis de Maio"},city:"Rio das Ostras",state:"Santa Catarina",country:"Brazil",postcode:99553,coordinates:{latitude:"38.1833",longitude:"42.2910"},timezone:{offset:"+8:00",description:"Beijing, Perth, Singapore, Hong Kong"}},email:"lascivia.dacruz@example.com",login:{uuid:"218d1c2c-1ca1-45b2-809e-68029b48f627",username:"tinybird297",password:"chocolate",salt:"5iR3zuRO",md5:"f506eb7c118a01c85f4c0d0b80bb9123",sha1:"ad6117bc47774c41a13376e189eafa8eee14fb27",sha256:"ca1cbca9724da4cee24f9b579e23966124adda4846c1fab06f52a8c757f19584"},dob:{date:"1987-02-18T16:39:22.536Z",age:34},registered:{date:"2010-04-21T23:18:35.876Z",age:11},phone:"(74) 6227-3565",cell:"(52) 3186-0091",id:{name:"",value:null},picture:{large:"https://randomuser.me/api/portraits/women/94.jpg",medium:"https://randomuser.me/api/portraits/med/women/94.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/women/94.jpg"},nat:"BR"},{gender:"female",name:{title:"Miss",first:"Graciliana",last:"Ramos"},location:{street:{number:7246,name:"Rua Dois"},city:"Marituba",state:"Rio de Janeiro",country:"Brazil",postcode:44690,coordinates:{latitude:"74.0976",longitude:"126.1690"},timezone:{offset:"+5:00",description:"Ekaterinburg, Islamabad, Karachi, Tashkent"}},email:"graciliana.ramos@example.com",login:{uuid:"646d1b10-6b16-4e29-82b5-498df6c56963",username:"lazybear706",password:"eeeeeee",salt:"ZjgHGfc5",md5:"4d607863497511b19248ce8d83483621",sha1:"c26dbe3094df55f8fd0b3a20bec2947a91fd1bb9",sha256:"5de275852218a703c08ab924b73e9a9aacc72a042caf96e382b25bb28665f397"},dob:{date:"1973-09-06T04:59:20.726Z",age:48},registered:{date:"2011-05-02T10:06:41.238Z",age:10},phone:"(59) 3054-6741",cell:"(88) 4692-5863",id:{name:"",value:null},picture:{large:"https://randomuser.me/api/portraits/women/5.jpg",medium:"https://randomuser.me/api/portraits/med/women/5.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/women/5.jpg"},nat:"BR"},{gender:"female",name:{title:"Ms",first:"Kelly",last:"Lawrence"},location:{street:{number:2643,name:"Sunset St"},city:"Hervey Bay",state:"Northern Territory",country:"Australia",postcode:1248,coordinates:{latitude:"-59.6343",longitude:"-179.0374"},timezone:{offset:"-6:00",description:"Central Time (US & Canada), Mexico City"}},email:"kelly.lawrence@example.com",login:{uuid:"9a06565c-7c73-4593-894f-8034b932e11b",username:"smallpanda600",password:"buttman",salt:"OZVyMAzL",md5:"9fc5352144af0a4e8dddf01f1a5f24b5",sha1:"787b42d6db7d19dce7d0c0e77f49d03ebfa7294b",sha256:"77c9e8432dab5b4c5fe4f0c9685037b96d5d64238163d4d799da6040678cf3a3"},dob:{date:"1965-12-20T23:06:05.587Z",age:56},registered:{date:"2003-11-14T03:39:29.603Z",age:18},phone:"07-1725-8872",cell:"0450-226-486",id:{name:"TFN",value:"056544028"},picture:{large:"https://randomuser.me/api/portraits/women/12.jpg",medium:"https://randomuser.me/api/portraits/med/women/12.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/women/12.jpg"},nat:"AU"},{gender:"male",name:{title:"Mr",first:"Marceau",last:"Lucas"},location:{street:{number:2253,name:"Place de L'Abbé-Georges-Hénocque"},city:"Rouen",state:"Drôme",country:"France",postcode:36189,coordinates:{latitude:"47.0730",longitude:"-122.0380"},timezone:{offset:"-5:00",description:"Eastern Time (US & Canada), Bogota, Lima"}},email:"marceau.lucas@example.com",login:{uuid:"11570bca-707d-40bb-95d0-f39ba8991621",username:"lazywolf559",password:"webster",salt:"u1xFI3mO",md5:"508e26cb3792d3766749c838e1cd7044",sha1:"ebfff654df5dcf30825e6dbaffdceb01406ba165",sha256:"9b6a25fbda88c857eb1de7813868fad87b2d7ee095211cc4d31efef3c00dc8cd"},dob:{date:"1963-10-24T15:24:07.606Z",age:58},registered:{date:"2019-05-31T11:12:46.549Z",age:2},phone:"04-90-95-26-36",cell:"06-17-63-58-15",id:{name:"INSEE",value:"1NNaN41455662 11"},picture:{large:"https://randomuser.me/api/portraits/men/38.jpg",medium:"https://randomuser.me/api/portraits/med/men/38.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/men/38.jpg"},nat:"FR"},{gender:"male",name:{title:"Mr",first:"Liam",last:"Bouchard"},location:{street:{number:7150,name:"St. Catherine St"},city:"Campbellton",state:"Prince Edward Island",country:"Canada",postcode:"V7B 9E5",coordinates:{latitude:"79.2343",longitude:"-147.6382"},timezone:{offset:"0:00",description:"Western Europe Time, London, Lisbon, Casablanca"}},email:"liam.bouchard@example.com",login:{uuid:"d3e43950-5d83-432b-8d35-64ee6c3ff414",username:"sadmeercat270",password:"wildbill",salt:"fwoGp5ZP",md5:"39728bb7c0e17fd1371f24997fa3624d",sha1:"45c67cfb104b9a29986ace60952e55891e85378c",sha256:"3b770d13dfac454f36048a4001a0a406098d46711d0b9668b795410738e48234"},dob:{date:"1957-12-07T23:41:22.896Z",age:64},registered:{date:"2015-06-29T06:16:37.204Z",age:6},phone:"031-817-0556",cell:"990-185-4225",id:{name:"",value:null},picture:{large:"https://randomuser.me/api/portraits/men/93.jpg",medium:"https://randomuser.me/api/portraits/med/men/93.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/men/93.jpg"},nat:"CA"},{gender:"female",name:{title:"Miss",first:"هلیا",last:"سهيلي راد"},location:{street:{number:1072,name:"موحد دانش"},city:"خوی",state:"قم",country:"Iran",postcode:64854,coordinates:{latitude:"-74.2951",longitude:"-134.1910"},timezone:{offset:"-8:00",description:"Pacific Time (US & Canada)"}},email:"hly.shylyrd@example.com",login:{uuid:"9d35ea1c-2e4d-4ba2-b6c4-8a85a63e8c7a",username:"ticklishrabbit811",password:"goth",salt:"52RMpPRs",md5:"f98dea9613a96c3f847c8b7634c49904",sha1:"d30c0ad9be0b66b27cb66b01926968b55539948c",sha256:"e591ad9c966ce992ca2e7d0659d593f37ff9a90a724c1519713f0dc59fb9d9f0"},dob:{date:"1989-08-30T09:01:45.653Z",age:32},registered:{date:"2011-02-02T13:22:38.661Z",age:10},phone:"078-18073901",cell:"0991-325-3702",id:{name:"",value:null},picture:{large:"https://randomuser.me/api/portraits/women/60.jpg",medium:"https://randomuser.me/api/portraits/med/women/60.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/women/60.jpg"},nat:"IR"}]}}},o=r(16),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",e._l(e.selects,(function(s){return r("div",{staticClass:"mb-4"},[r("div",{staticClass:"p-1 mb-2"},[e._v(e._s(s.title))]),e._v(" "),r("ui-code",{attrs:{value:e.getCode(s)}}),e._v(" "),r("div",{staticClass:"mb-2"}),e._v(" "),r("ui-select",e._b({model:{value:s.value,callback:function(t){e.$set(s,"value",t)},expression:"s.value"}},"ui-select",s.bind,!1),e._l(e.users,(function(u,t){return r("ui-select-item",{key:u.login.uuid,attrs:{value:u}},[r("div",{staticClass:"d-flex align-items-center"},[r("div",[r("img",{attrs:{src:u.picture.medium,alt:"",width:"50px"}})]),e._v(" "),r("div",{staticClass:"flex-grw-1 pl-3"},[r("div",[e._v(e._s(u.name.title)+" "+e._s(u.name.first)+" "+e._s(u.name.last))]),e._v(" "),r("div",{staticClass:"text-muted"},[e._v(e._s(u.email))])])])])})),1)],1)})),0)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{UiCode:r(524).default,UiSelect:r(581).default})}}]);