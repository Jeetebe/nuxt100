(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{200:function(t,e,l){var content=l(207);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(31).default)("174c5ba3",content,!0,{sourceMap:!1})},201:function(t,e,l){var content=l(209);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(31).default)("eedc4d18",content,!0,{sourceMap:!1})},206:function(t,e,l){"use strict";l(200)},207:function(t,e,l){var n=l(30)(!1);n.push([t.i,".button{border:none;outline:none;color:#fff;background:#00c58e;border-radius:2em;letter-spacing:1px;padding:1em 2em;cursor:pointer;line-height:1}\n",""]),t.exports=n},208:function(t,e,l){"use strict";l(201)},209:function(t,e,l){var n=l(30)(!1);n.push([t.i,".grid{display:grid;min-height:100vh;grid-template-columns:[bleed-start footer-start] minmax(2rem, 1fr) [content-start] auto [content-end] minmax(2rem, 1fr) [bleed-end footer-end];grid-template-rows:[bleed-start] minmax(2rem, 1fr) [content-start] auto [content-end] minmax(2rem, 1.2fr) [footer-start] auto [footer-end bleed-end]}.content{display:flex;flex-direction:column;align-items:center;grid-area:content}.title{margin:0;text-align:center;text-transform:uppercase}.callout{margin-top:4rem}.footer{grid-area:footer;padding:1em 2em;background:#00c58e;text-align:center;color:#fff}\n",""]),t.exports=n},214:function(t,e,l){"use strict";l.r(e);var n={props:{text:{type:String,default:"Button"}}},o=(l(206),l(9)),r={staticData:()=>({logoSize:240}),components:{VButton:Object(o.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",t._g({staticClass:"button",domProps:{textContent:t._s(t.text)}},t.$listeners))}),[],!1,null,null,null).exports,VLogo:Object(o.a)({},(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("svg",t._g({attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"32",height:"32",viewBox:"0 0 32 32"}},t.$listeners),[l("defs",[l("path",{attrs:{id:"logo_svg__a",d:"M0 0h32v32H0z"}})]),l("g",{attrs:{fill:"none","fill-rule":"evenodd"}},[l("mask",{attrs:{id:"logo_svg__b",fill:"#fff"}},[l("use",{attrs:{"xlink:href":"#logo_svg__a"}})]),l("path",{attrs:{fill:"#2F495E","fill-rule":"nonzero",d:"M17.789 17.894l8.422 4.212a1 1 0 010 1.788l-8.422 4.212a4 4 0 01-3.578 0L5.79 23.894a1 1 0 010-1.788l8.422-4.212a4 4 0 013.578 0z",mask:"url(#logo_svg__b)"}}),l("path",{attrs:{fill:"#108775","fill-rule":"nonzero",d:"M17.789 10.894l10.422 5.212a1 1 0 010 1.788L17.79 23.106a4 4 0 01-3.578 0L3.79 17.894a1 1 0 010-1.788l10.422-5.212a4 4 0 013.578 0z",mask:"url(#logo_svg__b)"}}),l("path",{attrs:{fill:"#00C58E","fill-rule":"nonzero",d:"M17.789 3.894l12.422 6.212a1 1 0 010 1.788L17.79 18.106a4 4 0 01-3.578 0L1.79 11.894a1 1 0 010-1.788L14.21 3.894a4 4 0 013.578 0z",mask:"url(#logo_svg__b)"}})])])}),[],!1,null,null,null).exports}},c=(l(208),Object(o.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"grid"},[l("main",{staticClass:"content"},[l("v-logo",{staticClass:"logo",attrs:{width:t.logoSize,height:t.logoSize}}),t._v(" "),t._m(0),t._v(" "),t.$installer.canInstall?l("div",{staticClass:"callout"},[l("v-button",{attrs:{text:"Install PWA"},on:{click:t.$installer.prompt}})],1):t._e()],1),t._v(" "),t.$installer.hasInstalled?l("footer",{staticClass:"footer"},[t._v("\n    Installed PWA\n  ")]):t._e()])}),[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("h1",{staticClass:"title"},[l("span",{staticClass:"green-1"},[t._v("Nuxt")]),t._v(" "),l("span",{staticClass:"green-3"},[t._v("Stack")])])}],!1,null,null,null));e.default=c.exports}}]);