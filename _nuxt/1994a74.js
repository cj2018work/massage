(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{387:function(t,e,r){"use strict";r.d(e,"a",(function(){return l})),r.d(e,"b",(function(){return c})),r.d(e,"c",(function(){return d})),r.d(e,"d",(function(){return v}));var n=r(393),o=r(1),l=Object(o.i)("v-card__actions"),c=Object(o.i)("v-card__subtitle"),d=Object(o.i)("v-card__text"),v=Object(o.i)("v-card__title");n.a},393:function(t,e,r){"use strict";r(13),r(9),r(14),r(6),r(18),r(10),r(19);var n=r(2),o=(r(36),r(258),r(259),r(402),r(162)),l=r(400),c=r(87),d=r(12);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(d.a)(l.a,c.a,o.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return h(h({"v-card":!0},c.a.options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},o.a.options.computed.classes.call(this))},styles:function(){var style=h({},o.a.options.computed.styles.call(this));return this.img&&(style.background='url("'.concat(this.img,'") center center / cover no-repeat')),style}},methods:{genProgress:function(){var t=l.a.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),r=e.tag,data=e.data;return data.style=this.styles,this.isClickable&&(data.attrs=data.attrs||{},data.attrs.tabindex=0),t(r,this.setBackgroundColor(this.color,data),[this.genProgress(),this.$slots.default])}})},395:function(t,e,r){var content=r(396);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(28).default)("7132a15d",content,!0,{sourceMap:!1})},396:function(t,e,r){var n=r(27)(!1);n.push([t.i,".theme--light.v-divider{border-color:rgba(0,0,0,.12)}.theme--dark.v-divider{border-color:hsla(0,0%,100%,.12)}.v-divider{display:block;flex:1 1 0px;max-width:100%;height:0;max-height:0;border:solid;border-width:thin 0 0;transition:inherit}.v-divider--inset:not(.v-divider--vertical){max-width:calc(100% - 72px)}.v-application--is-ltr .v-divider--inset:not(.v-divider--vertical){margin-left:72px}.v-application--is-rtl .v-divider--inset:not(.v-divider--vertical){margin-right:72px}.v-divider--vertical{align-self:stretch;border:solid;border-width:0 thin 0 0;display:inline-flex;height:inherit;min-height:100%;max-height:100%;max-width:0;width:0;vertical-align:text-bottom;margin:0 -1px}.v-divider--vertical.v-divider--inset{margin-top:8px;min-height:0;max-height:calc(100% - 16px)}",""]),t.exports=n},400:function(t,e,r){"use strict";r(36);var n=r(0),o=r(394);e.a=n.a.extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress:function(){return!1===this.loading?null:this.$slots.progress||this.$createElement(o.a,{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}})},402:function(t,e,r){var content=r(403);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(28).default)("e23b7040",content,!0,{sourceMap:!1})},403:function(t,e,r){var n=r(27)(!1);n.push([t.i,'.theme--light.v-card{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-card>.v-card__subtitle,.theme--light.v-card>.v-card__text{color:rgba(0,0,0,.6)}.theme--dark.v-card{background-color:#1e1e1e;color:#fff}.theme--dark.v-card>.v-card__subtitle,.theme--dark.v-card>.v-card__text{color:hsla(0,0%,100%,.7)}.v-sheet.v-card{border-radius:4px}.v-sheet.v-card:not(.v-sheet--outlined){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-sheet.v-card.v-sheet--shaped{border-radius:24px 4px}.v-card{border-width:thin;display:block;max-width:100%;outline:none;text-decoration:none;transition-property:box-shadow,opacity;word-wrap:break-word;position:relative;white-space:normal}.v-card>.v-card__progress+:not(.v-btn):not(.v-chip):not(.v-avatar),.v-card>:first-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-card>:last-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card__progress{top:0;left:0;right:0;overflow:hidden}.v-card__subtitle+.v-card__text{padding-top:0}.v-card__subtitle,.v-card__text{font-size:.875rem;font-weight:400;line-height:1.375rem;letter-spacing:.0071428571em}.v-card__subtitle,.v-card__text,.v-card__title{padding:16px}.v-card__title{align-items:center;display:flex;flex-wrap:wrap;font-size:1.25rem;font-weight:500;letter-spacing:.0125em;line-height:2rem;word-break:break-all}.v-card__title+.v-card__subtitle,.v-card__title+.v-card__text{padding-top:0}.v-card__title+.v-card__subtitle{margin-top:-16px}.v-card__text{width:100%}.v-card__actions{align-items:center;display:flex;padding:8px}.v-card__actions>.v-btn.v-btn{padding:0 8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn+.v-btn{margin-left:8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--left{margin-left:4px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--right{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn+.v-btn{margin-right:8px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--left{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--right{margin-left:4px}.v-card--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important}.v-sheet.v-card--hover{cursor:pointer;transition:box-shadow .4s cubic-bezier(.25,.8,.25,1)}.v-sheet.v-card--hover:focus,.v-sheet.v-card--hover:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card--link,.v-card--link .v-chip{cursor:pointer}.v-card--link:focus:before{opacity:.08}.v-card--link:before{background:currentColor;bottom:0;content:"";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s}.v-card--disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-card--disabled>:not(.v-card__progress){opacity:.6;transition:inherit}.v-card--loading{overflow:hidden}.v-card--raised{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}',""]),t.exports=n},405:function(t,e,r){"use strict";r(36),r(58);var n=r(0);e.a=n.a.extend().extend({name:"delayable",props:{openDelay:{type:[Number,String],default:0},closeDelay:{type:[Number,String],default:0}},data:function(){return{openTimeout:void 0,closeTimeout:void 0}},methods:{clearDelay:function(){clearTimeout(this.openTimeout),clearTimeout(this.closeTimeout)},runDelay:function(t,e){var r=this;this.clearDelay();var n=parseInt(this["".concat(t,"Delay")],10);this["".concat(t,"Timeout")]=setTimeout(e||function(){r.isActive={open:!0,close:!1}[t]},n)}}})},426:function(t,e,r){"use strict";r(13),r(9),r(14),r(6),r(18),r(10),r(19);var n=r(2),o=(r(395),r(37));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=o.a.extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:c({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:c({role:"separator","aria-orientation":e},this.$attrs),on:this.$listeners})}})},431:function(t,e,r){t.exports=r.p+"img/location.0323103.jpg"},432:function(t,e,r){r(13),r(9),r(14),r(6),r(18),r(10),r(19);var n=r(266),o=r(267),l=["class","staticClass","style","staticStyle","attrs"];function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}r(35),t.exports={functional:!0,render:function(t,e){var r=e._c,data=(e._v,e.data),d=e.children,v=void 0===d?[]:d,h=data.class,L=data.staticClass,style=data.style,f=data.staticStyle,m=data.attrs,x=void 0===m?{}:m,y=o(data,l);return r("svg",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){n(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({class:[h,L],style:[{background:"rgba(0, 0, 0, 0)"},style,f],attrs:Object.assign({width:"366.8384521484375px",height:"122px",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"66.58077392578124 14 366.8384521484375 122",style:"background: rgba(0, 0, 0, 0);",preserveAspectRatio:"xMidYMid"},x)},y),v.concat([r("defs",[r("filter",{attrs:{id:"editing-stripe-bk",filterUnits:"userSpaceOnUse",x:"-100%",y:"-100%",width:"300%",height:"300%"}},[r("feFlood",{attrs:{"flood-color":"#700f0f",result:"flood1"}}),r("feFlood",{attrs:{"flood-color":"#fff","flood-opacity":"0.5",result:"flood2"}}),r("feImage",{attrs:{"xlink:href":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAwcHgiIGhlaWdodD0iMTAwMHB4Ij48ZGVmcz48cGF0dGVybiBpZD0icGF0dGVybiIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeD0iMCIgeT0iMCIgd2lkdGg9IjQiIGhlaWdodD0iNCI+PHBhdGggZD0iTSAtNCAtNCBMIDggOCBNIC04IC00IEwgNCA4IE0gLTQgLTggTCA4IDQiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI3BhdHRlcm4pIi8+PC9zdmc+",x:"0",y:"0",width:"2000",height:"1000",result:"image"}}),r("feTile",{attrs:{in:"image",result:"tile"}}),r("feComposite",{attrs:{operator:"in",in:"flood1",in2:"tile",result:"tile2"}}),r("feGaussianBlur",{attrs:{in:"SourceAlpha",stdDeviation:"10",result:"blur"}}),r("feComposite",{attrs:{operator:"in",in:"tile2",in2:"blur",result:"cloud"}}),r("feMorphology",{attrs:{operator:"dilate",radius:"2",in:"SourceAlpha",result:"dilate"}}),r("feComposite",{attrs:{operator:"in",in:"flood2",in2:"dilate",result:"base"}}),r("feMerge",[r("feMergeNode",{attrs:{in:"cloud"}}),r("feMergeNode",{attrs:{in:"base"}}),r("feMergeNode",{attrs:{in:"SourceGraphic"}})])])]),r("g",{attrs:{filter:"url(#editing-stripe-bk)"}},[r("g",{attrs:{transform:"translate(126.13122987747192, 104.1200008392334)"}},[r("path",{attrs:{d:"M-6.98 8.83L-6.98 8.83L-6.98 8.83Q-3.71 8.45-1.66 4.22L-1.66 4.22L-1.66 4.22Q0.45-0.06 2.37-9.92L2.37-9.92L8.58-42.24L22.46-42.24L16.26-9.92L16.26-9.92Q13.89 2.62 9.98 7.55L9.98 7.55L9.98 7.55Q7.94 10.11 5.34 11.14L5.34 11.14L5.34 11.14Q2.75 12.16-0.06 12.16L-0.06 12.16L-0.06 12.16Q-2.88 12.16-4.70 11.14L-4.70 11.14L-4.70 11.14Q-6.53 10.11-6.98 8.83ZM51.97 1.28L51.97 1.28L51.97 1.28Q43.78 1.28 43.01-10.37L43.01-10.37L32-10.37L32-10.37Q30.72-7.42 29.82-4.86L29.82-4.86L28.16 0L19.20 0L39.36-42.24L53.12-42.24L55.81-11.14L55.81-11.14Q56.45-4.42 59.01-2.43L59.01-2.43L59.01-2.43Q57.15 1.28 51.97 1.28ZM37.50-23.17L33.98-15.04L42.82-15.04L42.05-31.49L42.05-33.22L37.50-23.17ZM117.44-26.56L117.44-26.56L117.44-26.56Q117.44 0.70 87.87 0.70L87.87 0.70L87.87 0.70Q83.14 0.70 75.33-0.45L75.33-0.45L82.50-38.27L82.50-38.27Q83.01-40.83 83.33-42.30L83.33-42.30L83.33-42.30Q93.06-43.01 97.38-43.01L97.38-43.01L97.38-43.01Q101.70-43.01 105.66-42.11L105.66-42.11L105.66-42.11Q109.63-41.22 112.26-39.23L112.26-39.23L112.26-39.23Q117.44-35.33 117.44-26.56ZM104.26-28.93L104.26-28.93L104.26-28.93Q104.26-38.46 97.41-38.46L97.41-38.46L96.77-38.46L96.77-38.46Q96.45-38.46 96.13-38.40L96.13-38.40L89.54-4.03L89.54-4.03Q89.79-3.90 90.05-3.90L90.05-3.90L90.56-3.90L90.56-3.90Q92.93-3.90 95.39-5.38L95.39-5.38L95.39-5.38Q97.86-6.85 99.78-9.86L99.78-9.86L99.78-9.86Q104.26-16.83 104.26-28.93ZM146.62-10.82L146.62-10.82L146.62-10.82Q148.22-9.73 148.22-7.33L148.22-7.33L148.22-7.33Q148.22-4.93 147.01-3.39L147.01-3.39L147.01-3.39Q145.79-1.86 143.81-0.83L143.81-0.83L143.81-0.83Q139.71 1.28 135.30 1.28L135.30 1.28L135.30 1.28Q130.88 1.28 128.29 0.32L128.29 0.32L128.29 0.32Q125.70-0.64 123.97-2.43L123.97-2.43L123.97-2.43Q120.58-5.82 120.58-12.03L120.58-12.03L120.58-12.03Q120.58-21.70 125.82-27.58L125.82-27.58L125.82-27.58Q131.46-33.92 141.25-33.92L141.25-33.92L141.25-33.92Q147.33-33.92 150.34-31.36L150.34-31.36L150.34-31.36Q152.58-29.44 152.58-26.30L152.58-26.30L152.58-26.30Q152.58-15.04 133.12-15.04L133.12-15.04L133.12-15.04Q132.86-13.38 132.86-11.97L132.86-11.97L132.86-11.97Q132.86-9.02 134.18-7.90L134.18-7.90L134.18-7.90Q135.49-6.78 137.92-6.78L137.92-6.78L137.92-6.78Q140.35-6.78 142.94-7.90L142.94-7.90L142.94-7.90Q145.54-9.02 146.62-10.82ZM133.57-17.79L133.57-17.79L133.57-17.79Q138.11-17.79 140.74-20.61L140.74-20.61L140.74-20.61Q143.36-23.30 143.36-27.58L143.36-27.58L143.36-27.58Q143.36-29.06 142.82-29.86L142.82-29.86L142.82-29.86Q142.27-30.66 141.18-30.66L141.18-30.66L141.18-30.66Q140.10-30.66 139.17-30.24L139.17-30.24L139.17-30.24Q138.24-29.82 137.28-28.42L137.28-28.42L137.28-28.42Q134.91-25.22 133.57-17.79ZM186.18-26.62L186.18-26.62L186.18-26.62Q186.18-23.94 183.94-22.27L183.94-22.27L183.94-22.27Q181.70-20.61 178.05-20.61L178.05-20.61L178.05-20.61Q176.51-20.61 175.62-21.06L175.62-21.06L175.62-21.06Q176.32-22.72 176.54-24.80L176.54-24.80L176.54-24.80Q176.77-26.88 176.77-27.46L176.77-27.46L176.77-27.46Q176.77-30.14 174.91-30.14L174.91-30.14L174.91-30.14Q173.63-30.14 172.19-28.54L172.19-28.54L172.19-28.54Q170.75-26.94 169.54-24.45L169.54-24.45L169.54-24.45Q166.85-18.69 166.85-12.86L166.85-12.86L166.85-12.86Q166.85-9.66 168.06-8.22L168.06-8.22L168.06-8.22Q169.28-6.78 171.97-6.78L171.97-6.78L171.97-6.78Q175.68-6.78 178.62-9.86L178.62-9.86L178.62-9.86Q179.46-10.82 179.90-11.90L179.90-11.90L179.90-11.90Q182.34-10.62 182.34-7.10L182.34-7.10L182.34-7.10Q182.34-3.52 178.37-1.15L178.37-1.15L178.37-1.15Q174.27 1.28 167.74 1.28L167.74 1.28L167.74 1.28Q154.75 1.28 154.75-12.48L154.75-12.48L154.75-12.48Q154.75-22.53 160.45-28.29L160.45-28.29L160.45-28.29Q165.95-33.92 176.06-33.92L176.06-33.92L176.06-33.92Q186.18-33.92 186.18-26.62ZM190.69-1.92L190.69-1.92L190.69-1.92Q189.18-3.58 188.51-6.21L188.51-6.21L188.51-6.21Q187.84-8.83 187.84-13.12L187.84-13.12L187.84-13.12Q187.84-17.41 189.31-21.31L189.31-21.31L189.31-21.31Q190.78-25.22 193.47-28.03L193.47-28.03L193.47-28.03Q198.98-33.92 208.06-33.92L208.06-33.92L208.06-33.92Q211.33-33.92 213.70-32.83L213.70-32.83L224.64-33.92L219.90-8.96L219.90-8.96Q219.71-8.19 219.71-6.78L219.71-6.78L219.71-6.78Q219.71-5.38 220.58-4.48L220.58-4.48L220.58-4.48Q221.44-3.58 222.72-3.46L222.72-3.46L222.72-3.46Q222.08-1.28 219.74 0L219.74 0L219.74 0Q217.41 1.28 214.78 1.28L214.78 1.28L214.78 1.28Q212.16 1.28 210.40 0.29L210.40 0.29L210.40 0.29Q208.64-0.70 208.13-2.37L208.13-2.37L208.13-2.37Q207.10-0.77 204.93 0.26L204.93 0.26L204.93 0.26Q202.75 1.28 199.84 1.28L199.84 1.28L199.84 1.28Q196.93 1.28 194.56 0.51L194.56 0.51L194.56 0.51Q192.19-0.26 190.69-1.92ZM204.19-27.90L204.19-27.90L204.19-27.90Q203.46-26.75 202.82-24.80L202.82-24.80L202.82-24.80Q202.18-22.85 201.12-17.63L201.12-17.63L201.12-17.63Q200.06-12.42 200.06-8.70L200.06-8.70L200.06-8.70Q200.06-4.99 200.64-3.90L200.64-3.90L200.64-3.90Q201.22-2.82 202.24-2.82L202.24-2.82L202.24-2.82Q204.29-2.82 205.79-4.77L205.79-4.77L205.79-4.77Q207.30-6.72 207.87-10.18L207.87-10.18L211.26-28.93L211.26-28.93Q209.92-30.08 208.35-30.08L208.35-30.08L208.35-30.08Q206.78-30.08 205.86-29.57L205.86-29.57L205.86-29.57Q204.93-29.06 204.19-27.90ZM243.39-3.52L243.39-3.52L243.39-3.52Q241.41 1.28 235.07 1.28L235.07 1.28L235.07 1.28Q231.87 1.28 229.82-0.96L229.82-0.96L229.82-0.96Q228.16-2.82 228.16-4.93L228.16-4.93L228.16-4.93Q228.16-9.73 230.40-20.22L230.40-20.22L235.07-44.80L248.06-46.08L241.86-13.70L241.86-13.70Q240.77-8.96 240.77-7.30L240.77-7.30L240.77-7.30Q240.77-3.65 243.39-3.52Z",fill:"#de530f"}})])])]))}}},433:function(t,e,r){t.exports=r.p+"img/hunan-bar.ef5536e.jpeg"},442:function(t,e,r){var content=r(443);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(28).default)("5939d713",content,!0,{sourceMap:!1})},443:function(t,e,r){var n=r(27)(!1);n.push([t.i,".v-rating{max-width:100%;white-space:nowrap}.v-rating .v-icon{padding:.5rem;border-radius:50%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;outline:none}.v-rating .v-icon:after{display:none}.v-application--is-ltr .v-rating .v-icon{transform:scaleX(1)}.v-application--is-rtl .v-rating .v-icon{transform:scaleX(-1)}.v-rating--readonly .v-icon{pointer-events:none}.v-rating--dense .v-icon{padding:.1rem}",""]),t.exports=n},479:function(t,e,r){"use strict";r.r(e);r(58);var n=r(269),o=r(432),l=r.n(o),c=r(433),d=r.n(c),v={name:"ContactUsPage",components:{Logo:l.a},scrollToTop:!0,data:function(){return{reviews:n.default,reviewImages:{HunanBar:d.a}}},mounted:function(){var t=this;this.$route.hash&&this.$nextTick((function(){var e=document.querySelector(t.$route.hash);setTimeout((function(){e&&e.scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"})}),200)}))}},h=r(84),L=r(122),f=r.n(L),m=r(182),x=r(393),y=r(387),_=r(475),Q=r(483),w=r(426),O=r(257),I=r(411),j=(r(36),r(200),r(63),r(442),r(100)),C=r(59),k=r(405),P=r(150),M=r(190),S=r(0).a.extend({name:"rippleable",directives:{ripple:M.a},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var data=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(data.staticClass="v-input--selection-controls__ripple",data.directives=data.directives||[],data.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",data)):null}}}),H=r(37),D=r(1),V=r(12),B=Object(V.a)(C.a,k.a,S,P.a,H.a).extend({name:"v-rating",props:{backgroundColor:{type:String,default:"accent"},color:{type:String,default:"primary"},clearable:Boolean,dense:Boolean,emptyIcon:{type:String,default:"$ratingEmpty"},fullIcon:{type:String,default:"$ratingFull"},halfIcon:{type:String,default:"$ratingHalf"},halfIncrements:Boolean,hover:Boolean,length:{type:[Number,String],default:5},readonly:Boolean,size:[Number,String],value:{type:Number,default:0},iconLabel:{type:String,default:"$vuetify.rating.ariaLabel.icon"}},data:function(){return{hoverIndex:-1,internalValue:this.value}},computed:{directives:function(){return this.readonly||!this.ripple?[]:[{name:"ripple",value:{circle:!0}}]},iconProps:function(){var t=this.$props,e=t.dark,r=t.large,n=t.light,o=t.medium,small=t.small;return{dark:e,large:r,light:n,medium:o,size:t.size,small:small,xLarge:t.xLarge,xSmall:t.xSmall}},isHovering:function(){return this.hover&&this.hoverIndex>=0}},watch:{internalValue:function(t){t!==this.value&&this.$emit("input",t)},value:function(t){this.internalValue=t}},methods:{createClickFn:function(i){var t=this;return function(e){if(!t.readonly){var r=t.genHoverIndex(e,i);t.clearable&&t.internalValue===r?t.internalValue=0:t.internalValue=r}}},createProps:function(i){var t={index:i,value:this.internalValue,click:this.createClickFn(i),isFilled:Math.floor(this.internalValue)>i,isHovered:Math.floor(this.hoverIndex)>i};return this.halfIncrements&&(t.isHalfHovered=!t.isHovered&&(this.hoverIndex-i)%1>0,t.isHalfFilled=!t.isFilled&&(this.internalValue-i)%1>0),t},genHoverIndex:function(t,i){var e=this.isHalfEvent(t);return this.halfIncrements&&this.$vuetify.rtl&&(e=!e),i+(e?.5:1)},getIconName:function(t){var e=this.isHovering?t.isHovered:t.isFilled,r=this.isHovering?t.isHalfHovered:t.isHalfFilled;return e?this.fullIcon:r?this.halfIcon:this.emptyIcon},getColor:function(t){if(this.isHovering){if(t.isHovered||t.isHalfHovered)return this.color}else if(t.isFilled||t.isHalfFilled)return this.color;return this.backgroundColor},isHalfEvent:function(t){if(this.halfIncrements){var rect=t.target&&t.target.getBoundingClientRect();if(rect&&t.pageX-rect.left<rect.width/2)return!0}return!1},onMouseEnter:function(t,i){var e=this;this.runDelay("open",(function(){e.hoverIndex=e.genHoverIndex(t,i)}))},onMouseLeave:function(){var t=this;this.runDelay("close",(function(){return t.hoverIndex=-1}))},genItem:function(i){var t=this,e=this.createProps(i);if(this.$scopedSlots.item)return this.$scopedSlots.item(e);var r={click:e.click};return this.hover&&(r.mouseenter=function(e){return t.onMouseEnter(e,i)},r.mouseleave=this.onMouseLeave,this.halfIncrements&&(r.mousemove=function(e){return t.onMouseEnter(e,i)})),this.$createElement(j.a,this.setTextColor(this.getColor(e),{attrs:{"aria-label":this.$vuetify.lang.t(this.iconLabel,i+1,Number(this.length))},directives:this.directives,props:this.iconProps,on:r}),[this.getIconName(e)])}},render:function(t){var e=this,r=Object(D.h)(Number(this.length)).map((function(i){return e.genItem(i)}));return t("div",{staticClass:"v-rating",class:{"v-rating--readonly":this.readonly,"v-rating--dense":this.dense}},r)}}),T=r(476),component=Object(h.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-row",{attrs:{justify:"center",align:"center"}},[n("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[n("div",{staticClass:"text-h1",attrs:{id:"contactus-main"}},[n("logo")],1),t._v(" "),n("div",{staticClass:"text-h3 light-blue--text accent-2--text mt-2"},[t._v("\n        Servicing custom decal sign in Sacramento area\n      ")]),t._v(" "),n("v-divider"),t._v(" "),n("div",{staticClass:"text-h4 mt-2"},[n("a",{attrs:{href:"tel:+19165059456"}},[t._v("(916) 505-9456")]),t._v(" & "),n("a",{attrs:{href:"tel:+19163974517"}},[t._v("(916) 397-4517")])]),t._v(" "),n("div",{staticClass:"text-h4 mt-2"},[n("a",{attrs:{href:"mailto:ja88decal@gmail.com"}},[t._v("ja88decal@gmail.com")])])],1),t._v(" "),n("v-col",[n("v-divider")],1),t._v(" "),n("v-col",[n("a",{attrs:{href:"https://goo.gl/maps/nuUJWzigDyVBtiva7",target:"_blank"}},[n("v-img",{attrs:{src:r(431),contain:"",height:"400"}})],1)]),t._v(" "),n("v-col",[n("v-divider")],1)],1),t._v(" "),n("v-row",[n("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[n("h2",{staticClass:"text-h2"},[t._v("\n        Reviews\n      ")])]),t._v(" "),t._l(t.reviews,(function(e,r){return n("v-col",{key:r,attrs:{cols:"12",lg:"3",md:"4",sm:"4"}},[n("v-card",{staticClass:"mx-auto my-12",attrs:{"max-width":"374"}},[n("template",{slot:"progress"},[n("v-progress-linear",{attrs:{color:"deep-purple",height:"10",indeterminate:""}})],1),t._v(" "),n("v-img",{attrs:{height:"250",src:t.reviewImages[e.key]}}),t._v(" "),n("v-card-title",[t._v(t._s(e.title))]),t._v(" "),n("v-card-text",[n("v-row",{staticClass:"mx-0",attrs:{align:"center"}},[n("v-rating",{attrs:{value:e.rating,color:"amber",dense:"","half-increments":"",readonly:"",size:"14"}}),t._v(" "),n("div",{staticClass:"grey--text ms-4"},[t._v("\n              "+t._s(e.rating.toFixed(1))+"\n            ")])],1),t._v(" "),n("div",{staticClass:"my-4 text-subtitle-1"},[t._v("\n            "+t._s(e.subtitle)+"\n          ")]),t._v(" "),n("div",[t._v(t._s(e.comment))])],1),t._v(" "),n("v-divider",{staticClass:"mx-4"}),t._v(" "),n("v-card-actions",[n("v-btn",{attrs:{href:e.gotoUrl,target:"_blank",color:"deep-purple lighten-2",text:""}},[t._v("\n            Access It\n          ")])],1)],2)],1)}))],2)],1)}),[],!1,null,null,null);e.default=component.exports;f()(component,{VBtn:m.a,VCard:x.a,VCardActions:y.a,VCardText:y.c,VCardTitle:y.d,VCol:_.a,VContainer:Q.a,VDivider:w.a,VImg:O.a,VProgressLinear:I.a,VRating:B,VRow:T.a})}}]);