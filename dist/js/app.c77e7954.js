(function(r){function t(t){for(var e,s,o=t[0],c=t[1],d=t[2],u=0,f=[];u<o.length;u++)s=o[u],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&f.push(a[s][0]),a[s]=0;for(e in c)Object.prototype.hasOwnProperty.call(c,e)&&(r[e]=c[e]);l&&l(t);while(f.length)f.shift()();return i.push.apply(i,d||[]),n()}function n(){for(var r,t=0;t<i.length;t++){for(var n=i[t],e=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(e=!1)}e&&(i.splice(t--,1),r=s(s.s=n[0]))}return r}var e={},a={app:0},i=[];function s(t){if(e[t])return e[t].exports;var n=e[t]={i:t,l:!1,exports:{}};return r[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=r,s.c=e,s.d=function(r,t,n){s.o(r,t)||Object.defineProperty(r,t,{enumerable:!0,get:n})},s.r=function(r){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},s.t=function(r,t){if(1&t&&(r=s(r)),8&t)return r;if(4&t&&"object"===typeof r&&r&&r.__esModule)return r;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:r}),2&t&&"string"!=typeof r)for(var e in r)s.d(n,e,function(t){return r[t]}.bind(null,e));return n},s.n=function(r){var t=r&&r.__esModule?function(){return r["default"]}:function(){return r};return s.d(t,"a",t),t},s.o=function(r,t){return Object.prototype.hasOwnProperty.call(r,t)},s.p="/intellectuarium/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var d=0;d<o.length;d++)t(o[d]);var l=c;i.push([0,"chunk-vendors"]),n()})({0:function(r,t,n){r.exports=n("56d7")},"034f":function(r,t,n){"use strict";n("85ec")},"2f69":function(r,t,n){r.exports=n.p+"img/elsa.8b8abcc0.png"},5259:function(r,t,n){r.exports=n.p+"img/sofia.540587bd.jpg"},"56d7":function(r,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var e=n("2b0e"),a=function(){var r=this,t=r.$createElement,n=r._self._c||t;return n("div",{attrs:{id:"app"}},[n("main-component")],1)},i=[],s=function(){var r=this,t=r.$createElement,n=r._self._c||t;return n("div",{staticClass:"root"},[n("memory-cards")],1)},o=[],c=function(){var r=this,t=r.$createElement,n=r._self._c||t;return n("div",{staticClass:"cards"},[n("div",{staticClass:"cards__block"},r._l(r.randomCards,(function(t){return n("memory-card",{key:t.id,staticClass:"card",attrs:{"card-resolver":r.cardResolver,id:t.id,src:t.src,"is-card-front":t.isCardFront,"is-card-catched":t.isCardCatched},on:{"click-card":r.onClickCard}})})),1),n("button",{staticClass:"cards__button-else",on:{click:r.setCards}},[r._v("TRY AGAIN")])])},d=[],l=n("5530"),u=n("2909"),f=(n("7db0"),n("d3b7"),n("d81d"),n("99af"),n("ec26")),p=function(){var r=this,t=r.$createElement,n=r._self._c||t;return n("div",{staticClass:"card",class:{disable:r.isCardCatched},on:{click:r.onClickCard}},[n("div",{staticClass:"card__front",class:{flipped:r.isCardFront}}),n("img",{staticClass:"card__back",class:{flipped:!r.isCardFront},attrs:{src:r.src}})])},C=[],h={name:"MemoryCard",props:{id:String,src:String,isCardFront:Boolean,isCardCatched:{type:Boolean,default:function(){return!1}}},methods:{onClickCard:function(){this.$emit("click-card",this.id)}}},m=h,b=(n("b55a"),n("2877")),v=Object(b["a"])(m,p,C,!1,null,"1b40f5fc",null),g=v.exports,_=n("8302"),y=n("c7dd"),O=n("2f69"),j=n("e63e"),k=n("5259"),x=n("d924"),F={name:"MemoryCards",components:{MemoryCard:g},created:function(){this.setCards()},data:function(){return{inOperation:!1,randomCards:[],cards:[{label:"ariel",src:_,isCardFront:!1},{label:"aurora",src:y,isCardFront:!1},{label:"elsa",src:O,isCardFront:!1},{label:"ladyBag",src:j,isCardFront:!1},{label:"sofia",src:k,isCardFront:!1},{label:"supergirl",src:x,isCardFront:!1}],cardResolver:!1,selectedCards:[],counter:0,firstCard:null}},methods:{onClickCard:function(r){var t=this;if(!this.inOperation){this.inOperation=!0;var n=this.randomCards.find((function(t){return t.id===r}));if(n.isCardFront=!0,this.counter%2===0)return this.firstCard=n,void this._makeIterationEndChanges();if(this.firstCard.label===n.label)return this.firstCard.isCardCatched=!0,n.isCardCatched=!0,void this._makeIterationEndChanges();var e=new Promise((function(r){setTimeout((function(){t.firstCard.isCardFront=!1,n.isCardFront=!1,t.firstCard=null,r()}),1300)}));e.then((function(){t._makeIterationEndChanges()}))}},setCards:function(){this.randomCards=this._makeRandomCards(),this.firstCard=null},_makeRandomCards:function(){var r=[].concat(Object(u["a"])(this.cards),Object(u["a"])(this.cards)).map((function(r){return Object(l["a"])({id:Object(f["a"])()},r)}));return this._shuffleCards(r)},_shuffleCards:function(r){for(var t,n,e=r.length-1;e>0;e--)t=Math.floor(Math.random()*(e+1)),console.log("j",t),n=r[t],r[t]=r[e],r[e]=n;return r},_makeIterationEndChanges:function(){this.counter++,this.inOperation=!1}}},w=F,M=(n("ab76"),Object(b["a"])(w,c,d,!1,null,"6c756af0",null)),E=M.exports,P={name:"Main",components:{MemoryCards:E}},S=P,$=Object(b["a"])(S,s,o,!1,null,"0c1e3606",null),I=$.exports,R={name:"App",components:{MainComponent:I}},T=R,A=(n("034f"),Object(b["a"])(T,a,i,!1,null,null,null)),B=A.exports;e["a"].config.productionTip=!1,new e["a"]({render:function(r){return r(B)}}).$mount("#app")},"5e41":function(r,t,n){},8302:function(r,t,n){r.exports=n.p+"img/ariel.b8b51fc5.jpg"},"85ec":function(r,t,n){},ab76:function(r,t,n){"use strict";n("ac53")},ac53:function(r,t,n){},b55a:function(r,t,n){"use strict";n("5e41")},c7dd:function(r,t,n){r.exports=n.p+"img/aurora.e1641236.png"},d924:function(r,t,n){r.exports=n.p+"img/supergirl.e50e8578.png"},e63e:function(r,t,n){r.exports=n.p+"img/lady-bag.9e1ff281.png"}});
//# sourceMappingURL=app.c77e7954.js.map