(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{204:function(t,e,n){var content=n(210);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("5da3826e",content,!0,{sourceMap:!1})},209:function(t,e,n){"use strict";n(204)},210:function(t,e,n){var l=n(25)((function(i){return i[1]}));l.push([t.i,"/*purgecss start ignore*/\nimg{\n  height:432px\n}\nimg,table{\n  width:100%\n}\ntable{\n  table-layout:fixed;\n  margin-top:16px;\n  font-size:12px\n}\ntable td{\n  width:100%;\n  border-bottom:1px solid grey\n}\nselect.minimal{\n  background-image:linear-gradient(45deg,transparent 50%,#fff 0),linear-gradient(135deg,#fff 50%,transparent 0),linear-gradient(90deg,#ccc,#ccc);\n  background-position:calc(100% - 20px) calc(1em + 2px),calc(100% - 15px) calc(1em + 2px),calc(100% - 2.5em) .5em\n}\nselect.minimal,select.minimal:focus{\n  background-size:5px 5px,5px 5px,1px 1.5em;\n  background-repeat:no-repeat\n}\nselect.minimal:focus{\n  background-image:linear-gradient(45deg,green 50%,transparent 0),linear-gradient(135deg,transparent 50%,green 0),linear-gradient(90deg,#ccc,#ccc);\n  background-position:calc(100% - 15px) 1em,calc(100% - 20px) 1em,calc(100% - 2.5em) .5em;\n  border-color:green;\n  outline:0\n}\n\n/*purgecss end ignore*/",""]),l.locals={},t.exports=l},213:function(t,e,n){"use strict";n.r(e);var l=n(2),c={data:()=>({loaded:!1,goicuoc:"cs21g",items:[{id:0,name:"test0",price:"$0"},{id:1,name:"test1",price:"$1"},{id:2,name:"test2",price:"$2"},{id:3,name:"test3",price:"$3"}]}),mounted(){var t=this;return Object(l.a)((function*(){var e=t.$route.query;if(e.utm_source){var n={utm_source:e.utm_source,utm_medium:e.utm_medium,utm_content:e.utm_content,utm_campaign:e.utm_campaign};t.$axios.post(t.$axios.defaults.baseURL+"api/utm/add",n).then((function(t){console.log(t)})).catch((function(t){console.log(t)}))}var l=t.$axios.defaults.baseURL+"cs21g?h=1";console.log(l),t.items=yield fetch(l).then((t=>t.json()))}))()},methods:{onChange(t){var e=this;return Object(l.a)((function*(){console.log(e.goicuoc);var t="https://apptotapi2.tk:4099/"+e.goicuoc+"?h=1";e.items=yield fetch(t).then((t=>t.json()))}))()}}},o=(n(209),n(15)),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bg-white"},[t._v("\n  Version 1\n  "),n("nuxt-img",{attrs:{src:"/img/top.jpg",alt:"Top",sizes:"xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"}}),t._v(" "),n("div",{staticStyle:{padding:"8px"}},[n("div",{staticStyle:{margin:"8px"}},[n("div",{},[n("div",{staticClass:"flex flex-row"},[n("nuxt-img",{staticClass:"h-8",attrs:{src:"/img/chon.jpg",alt:"Top",sizes:"xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"}}),t._v(" "),n("div",{staticClass:"relative w-full border-none"},[n("select",{directives:[{name:"model",rawName:"v-model",value:t.goicuoc,expression:"goicuoc"}],staticClass:"\n                text-white\n                bg-red-500\n                appearance-none\n                border border-gray-300\n                inline-block\n                py-2\n                pl-3\n                pr-8\n                rounded\n                leading-tight\n                minimal\n              ",attrs:{id:"comboA"},on:{change:[function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.goicuoc=e.target.multiple?n:n[0]},function(e){return t.onChange(e)}]}},[n("option",{attrs:{value:"cs21g"}},[t._v("CS21G  ")]),t._v(" "),n("option",{attrs:{value:"cs21g3"}},[t._v("CS21G3  ")])]),t._v(" "),n("div",{staticClass:"\n                pointer-events-none\n                absolute\n                inset-y-0\n                right-0\n                flex\n                items-center\n                px-2\n              "})])],1)])]),t._v(" "),n("div",{},[n("table",[t._m(0),t._v(" "),t._l(t.items,(function(e,l){return n("tr",{key:l,attrs:{index:l}},[n("td",{staticStyle:{"padding-left":"8px",width:"16px"}},[t._v(t._s(l+1))]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v(t._s(e.thuebao))]),t._v(" "),"CS21G"==e.goicuoc?n("td",{staticClass:"line-through",staticStyle:{"text-align":"center"}},[t._v("\n            109.000đ\n          ")]):n("td",{staticClass:"line-through",staticStyle:{"text-align":"center"}},[t._v("\n            227.000đ\n          ")]),t._v(" "),n("td",{staticClass:"text-red-500 font-bold",staticStyle:{"text-align":"center"}},[t._v("\n            "+t._s(e.gia)+"\n          ")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[n("button",{staticClass:"datngay my-1 p-1 bg-blue-600 text-white rounded-sm",on:{click:function(n){return t.$router.push({name:"book",params:{item:e}})}}},[t._v("\n              Đặt ngay\n            ")])])])}))],2)])]),t._v(" "),n("nuxt-img",{staticStyle:{width:"100%",height:"100%"},attrs:{src:"/img/middle.jpg",alt:"Top",sizes:"xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"}}),t._v(" "),n("div",{staticClass:"flex flex-row"},[n("a",{staticClass:"dangky w-full",attrs:{href:"sms:9084?&body=BK1 CS21G"}},[n("nuxt-img",{staticStyle:{width:"100%",height:"auto"},attrs:{src:"/img/21g.jpg",alt:"Top",sizes:"xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"}})],1),t._v(" "),n("a",{staticClass:"dangky w-full",attrs:{href:"sms:9084?&body=BK1 CS21G3"}},[n("nuxt-img",{staticStyle:{width:"100%",height:"auto"},attrs:{src:"/img/21g3.jpg",alt:"Top",sizes:"xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"}})],1)]),t._v(" "),n("nuxt-img",{staticStyle:{width:"100%",height:"auto"},attrs:{src:"/img/bottom.jpg",alt:"Top",sizes:"xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"}}),t._v(" "),n("a",{attrs:{href:"https://zalo.me/4045465745174208191",title:"zalo"}},[n("nuxt-img",{staticStyle:{width:"90px",height:"100px",position:"fixed",bottom:"0px",right:"0px"},attrs:{src:"/img/zalo.png",alt:"Top"}})],1)],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",[n("td",{staticStyle:{"font-weight":"bold","text-align":"center",width:"32px"}},[t._v("\n            STT\n          ")]),t._v(" "),n("td",{staticStyle:{"font-weight":"bold","text-align":"center"}},[t._v("SIM SỐ")]),t._v(" "),n("td",{staticStyle:{"font-weight":"bold","text-align":"center"},attrs:{colspan:"2"}},[t._v("\n            GIÁ BÁN\n          ")]),t._v(" "),n("td",{staticStyle:{"font-weight":"bold","text-align":"center"}},[t._v("ĐẶT MUA")])])}],!1,null,null,null);e.default=component.exports}}]);