(function(e){function t(t){for(var c,u,i=t[0],l=t[1],o=t[2],f=0,d=[];f<i.length;f++)u=i[f],Object.prototype.hasOwnProperty.call(r,u)&&r[u]&&d.push(r[u][0]),r[u]=0;for(c in l)Object.prototype.hasOwnProperty.call(l,c)&&(e[c]=l[c]);s&&s(t);while(d.length)d.shift()();return a.push.apply(a,o||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],c=!0,i=1;i<n.length;i++){var l=n[i];0!==r[l]&&(c=!1)}c&&(a.splice(t--,1),e=u(u.s=n[0]))}return e}var c={},r={app:0},a=[];function u(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=c,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)u.d(n,c,function(t){return e[t]}.bind(null,c));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/game_on_vue.js-remember/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var o=0;o<i.length;o++)t(i[o]);var s=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},4351:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23"),r=n("cf05"),a=n.n(r),u=Object(c["r"])("data-v-8cb9d522");Object(c["l"])("data-v-8cb9d522");var i=Object(c["g"])("div",{class:"app"},[Object(c["g"])("img",{class:"logo",alt:"Vue logo",src:a.a}),Object(c["g"])("h1",null,[Object(c["f"])("Remember me, "),Object(c["g"])("br"),Object(c["f"])("Vue 3")]),Object(c["g"])("p",null,"Запомни и открой все зеленые клетки")],-1);Object(c["k"])();var l=u((function(e,t,n,r,a,u){var l=Object(c["o"])("Board");return Object(c["j"])(),Object(c["d"])(c["a"],null,[i,Object(c["g"])(l)],64)})),o=Object(c["r"])("data-v-1d248936");Object(c["l"])("data-v-1d248936");var s={class:"board__wrapper"},f={class:"board"},d={class:"difficult"},b=Object(c["f"])("Сложность: "),j={class:"message"},O={key:0,class:"win"},p=Object(c["g"])("b",null,[Object(c["f"])("Поздравляю! "),Object(c["g"])("br"),Object(c["f"])("Продолжаем играть!")],-1),v={key:1,class:"fail"},m=Object(c["g"])("b",null,[Object(c["f"])("Вы проиграли:( "),Object(c["g"])("br"),Object(c["f"])("Попробуйте еще раз!")],-1);Object(c["k"])();var g=o((function(e,t,n,r,a,u){var i=Object(c["o"])("BoardItem");return Object(c["j"])(),Object(c["d"])("div",s,[Object(c["g"])("div",f,[(Object(c["j"])(!0),Object(c["d"])(c["a"],null,Object(c["n"])(r.fields,(function(e){return Object(c["j"])(),Object(c["d"])(i,{"game-Status":r.gameStatus,field:e,key:"item-"+e.id,onSelectField:t[1]||(t[1]=function(e){return r.selectField(e)})},null,8,["game-Status","field"])})),128))]),Object(c["g"])("p",d,[b,Object(c["g"])("strong",null,Object(c["p"])(r.difficult),1)]),Object(c["g"])("div",j,[r.isWin?(Object(c["j"])(),Object(c["d"])("p",O,[p])):Object(c["e"])("",!0),r.isFail?(Object(c["j"])(),Object(c["d"])("p",v,[m])):Object(c["e"])("",!0)]),Object(c["g"])("button",{class:"btn",onClick:t[2]||(t[2]=function(){return u.start&&u.start.apply(u,arguments)}),disabled:!r.canStartGame},"Старт",8,["disabled"])])})),h=n("1da1"),I=(n("96cf"),n("c740"),Object(c["r"])("data-v-42c0b83c")),E=I((function(e,t,n,r,a,u){return Object(c["j"])(),Object(c["d"])("span",{class:r.getBoardItemClasses,onClick:t[1]||(t[1]=function(e){return u.select(n.field.id)})},null,2)})),y=(n("a9e3"),{EMPTY:0,FILLED:1}),S=3,k=10,_=2e3,w={NONE:0,PREVIEW:1,STARTED:2,WIN:3,FAIL:4},F={name:"BoardItem",props:{field:{type:Object,required:!0},gameStatus:{type:Number,required:!1,default:w.NONE}},setup:function(e){var t=Object(c["b"])((function(){var t="item ";return(e.field.value===y.FILLED&&e.gameStatus===w.PREVIEW||e.field.clicked&&e.field.value===y.FILLED)&&(t+="active"),e.field.clicked&&e.field.value===y.EMPTY&&(t+=" error"),e.gameStatus===w.NONE&&(t="item "),t}));return{getBoardItemClasses:t}},methods:{select:function(e){this.gameStatus===w.STARTED&&this.$emit("selectField",e)}}};n("5a44");F.render=E,F.__scopeId="data-v-42c0b83c";var L=F,P={name:"Board",props:{},components:{BoardItem:L},setup:function(){var e=Object(c["m"])(S),t=Object(c["m"])([]),n=25,r=Object(c["m"])(w.NONE),a=function(e){var n=t.value.findIndex((function(t){return t.id===e}));n>-1&&!t.value[n].clicked&&(t.value[n].clicked=!0,u())},u=function(){var e=t.value.findIndex((function(e){return e.clicked&&e.value===y.EMPTY}));if(e>-1)i();else{var n=t.value.findIndex((function(e){return!e.clicked&&e.value===y.FILLED}));-1===n&&l()}},i=function(){console.log("fail"),r.value=w.FAIL,e.value=S},l=function(){r.value=w.WIN,setTimeout(Object(h["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.value+=1,t.next=3,Object(c["h"])();case 3:r.value=w.NONE;case 4:case"end":return t.stop()}}),t)}))),_)},o=Object(c["b"])((function(){return r.value===w.WIN})),s=Object(c["b"])((function(){return r.value===w.FAIL})),f=function(){t.value=[],t.value=[];for(var e=0;e<n;e++)t.value.push({id:e,clicked:!1,value:y.EMPTY})},d=Object(c["b"])((function(){return r.value!==w.PREVIEW}));return Object(c["q"])(e,(function(t){t>k&&(e.value=k)})),Object(c["i"])(f),{number:n,difficult:e,fields:t,init:f,gameStatus:r,canStartGame:d,selectField:a,checkGame:u,isWin:o,isFail:s}},methods:{start:function(){this.init(),this.prepareGame()},prepareGame:function(){var e=this;this.gameStatus=w.PREVIEW;for(var t=0;t<this.difficult;t++){var n=this.rand(0,this.number-1);this.fields[n].value!==y.FILLED?this.fields[n].value=y.FILLED:t--}setTimeout((function(){e.gameStatus=w.STARTED}),_)},rand:function(e,t){return Math.floor(Math.random()*(t-e))+e}}};n("c802");P.render=g,P.__scopeId="data-v-1d248936";var N=P,T={name:"App",components:{Board:N}};n("c71a");T.render=l,T.__scopeId="data-v-8cb9d522";var x=T;Object(c["c"])(x).mount("#app")},"5a44":function(e,t,n){"use strict";n("4351")},aa7f:function(e,t,n){},c71a:function(e,t,n){"use strict";n("aa7f")},c802:function(e,t,n){"use strict";n("f321")},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"},f321:function(e,t,n){}});
//# sourceMappingURL=app.0f2e1913.js.map