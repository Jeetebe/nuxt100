(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{341:function(n,t,e){var content=e(356);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,e(26).default)("42ea8302",content,!0,{sourceMap:!1})},355:function(n,t,e){"use strict";e(341)},356:function(n,t,e){var o=e(25)((function(i){return i[1]}));o.push([n.i,"/*purgecss start ignore*/\ntable{\n  table-layout:fixed;\n  width:100%;\n  margin-top:16px;\n  font-size:12px\n}\ntable td{\n  width:100%;\n  border-bottom:1px solid grey\n}\nselect.minimal{\n  background-image:linear-gradient(45deg,transparent 50%,#fff 0),linear-gradient(135deg,#fff 50%,transparent 0),linear-gradient(90deg,#ccc,#ccc);\n  background-position:calc(100% - 20px) calc(1em + 2px),calc(100% - 15px) calc(1em + 2px),calc(100% - 2.5em) .5em\n}\nselect.minimal,select.minimal:focus{\n  background-size:5px 5px,5px 5px,1px 1.5em;\n  background-repeat:no-repeat\n}\nselect.minimal:focus{\n  background-image:linear-gradient(45deg,green 50%,transparent 0),linear-gradient(135deg,transparent 50%,green 0),linear-gradient(90deg,#ccc,#ccc);\n  background-position:calc(100% - 15px) 1em,calc(100% - 20px) 1em,calc(100% - 2.5em) .5em;\n  border-color:green;\n  outline:0\n}\n\n/*purgecss end ignore*/",""]),o.locals={},n.exports=o},367:function(n,t,e){"use strict";e.r(t);var o=e(2),r={data:()=>({loaded:!1,goicuoc:"CS21G",items:[],sim:[],form:{hoten:null,diachi:null,loai:"SIM",phone:null,kh:null}}),mounted(){var n=this;return Object(o.a)((function*(){var t=n,e=n.$route.query;if(e.utm_source){var o={utm_source:e.utm_source,utm_medium:e.utm_medium,utm_content:e.utm_content,utm_campaign:e.utm_campaign};n.$axios.post(n.$axios.defaults.baseURL+"api/utm/add",o).then((function(n){console.log(n)})).catch((function(n){console.log(n)}))}var r=n.$axios.defaults.baseURL+"sim4g?h=1";console.log(r),n.sim=yield fetch(r).then((n=>n.json())),n.sim.forEach((function(n,e){"CS21G"===n.goicuoc&&t.items.push(n)}))}))()},methods:{onChange(n){var t=this;return Object(o.a)((function*(){var n=t;t.items=[],console.log(t.goicuoc),t.sim.forEach((function(t,e){t.goicuoc===n.goicuoc&&n.items.push(t)}))}))()}}},c=(e(355),e(9)),component=Object(c.a)(r,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"md:max-w-3xl md:mx-auto bg-white"},[e("div",{staticClass:"flex flex-row justify-center justify-items-center bg-gray-200 p-3"},[e("nuxt-img",{staticClass:"h-8 w-40",attrs:{src:"/img/mobi.png",alt:"Top"}})],1),n._v(" "),e("div",[e("nuxt-img",{staticClass:"object-contain",attrs:{src:"/img/topcs21g3.jpg",alt:"Top"}})],1),n._v(" "),e("div",[e("nuxt-img",{staticClass:"object-contain",attrs:{src:"/img/step.jpg",alt:"Top"}})],1),n._v(" "),e("div",{staticClass:"flex flex-col items-center p-6 bg-gray-200 md:mx-12 mx-4"},[e("p",{staticClass:"p-2 font-bold"},[n._v("THÔNG TIN ĐẶT HÀNG")]),n._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:n.form.hoten,expression:"form.hoten"}],staticClass:"\n        w-full\n        bg-white\n        rounded\n        border border-gray-300\n        focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200\n        text-base\n        outline-none\n        text-gray-700\n        py-1\n        px-3\n        leading-8\n        transition-colors\n        duration-200\n        ease-in-out\n      ",attrs:{required:"",placeholder:"Họ và tên"},domProps:{value:n.form.hoten},on:{input:function(t){t.target.composing||n.$set(n.form,"hoten",t.target.value)}}}),n._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:n.form.diachi,expression:"form.diachi"}],staticClass:"\n        my-2\n        w-full\n        bg-white\n        rounded\n        border border-gray-300\n        focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200\n        text-base\n        outline-none\n        text-gray-700\n        py-1\n        px-3\n        leading-8\n        transition-colors\n        duration-200\n        ease-in-out\n      ",attrs:{required:"",placeholder:"Số điện thoại"},domProps:{value:n.form.diachi},on:{input:function(t){t.target.composing||n.$set(n.form,"diachi",t.target.value)}}}),n._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:n.form.hoten,expression:"form.hoten"}],staticClass:"\n        w-full\n        bg-white\n        rounded\n        border border-gray-300\n        focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200\n        text-base\n        outline-none\n        text-gray-700\n        py-1\n        px-3\n        leading-8\n        transition-colors\n        duration-200\n        ease-in-out\n      ",attrs:{required:"",placeholder:"Địa chỉ"},domProps:{value:n.form.hoten},on:{input:function(t){t.target.composing||n.$set(n.form,"hoten",t.target.value)}}}),n._v(" "),e("div",{staticClass:"flex flex-row w-full mt-4"},[e("span",[n._v("Nhà mạng ")]),n._v(" "),e("nuxt-img",{staticClass:"h-4 w-20 ml-6",attrs:{src:"/img/mobi.png",alt:"Top"}})],1),n._v(" "),e("div",[e("nuxt-img",{staticClass:"object-contain h-20",attrs:{src:"/img/button.jpg",alt:"Top"}})],1)]),n._v(" "),e("nuxt-img",{staticStyle:{width:"100%",height:"auto"},attrs:{src:"/img/bottom2.jpg",alt:"Top",sizes:"xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"}})],1)}),[],!1,null,null,null);t.default=component.exports}}]);