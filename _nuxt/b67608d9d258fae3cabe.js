(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{310:function(t,e,l){"use strict";l.r(e);l(30);var n=l(55),r={components:{MCarousel:l(64).b},data:function(){return{config:Object.assign({},n)}},computed:{popularCarousels:function(){return this.config.products.map((function(t){return t["img-alt"]=t.name,t["img-url"]=t.img,t.title=t.name,t["title-url"]=t.img,t.url=t.img,t}))}}},c=l(3),component=Object(c.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container",staticStyle:{width:"100%","max-width":"600px"}},[e("div",{staticClass:"tile is-ancestor"},[e("div",{staticClass:"tile is-vertical"},[e("div",{staticClass:"tile is-child"},[e("m-carousel",{attrs:{items:this.popularCarousels,overlay:""}})],1)])])])}),[],!1,null,null,null);e.default=component.exports}}]);