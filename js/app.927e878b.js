(()=>{"use strict";var e={2318:(e,t,o)=>{var r=o(8880),n=o(9592),i=o(3673);function a(e,t,o,r,n,a){const l=(0,i.up)("router-view");return(0,i.wg)(),(0,i.j4)(l)}const l=(0,i.aZ)({name:"App"});var s=o(4260);const c=(0,s.Z)(l,[["render",a]]),u=c;var d=o(1718),p=o(3340),f=o(8339);const g=[{path:"/",component:()=>Promise.all([o.e(736),o.e(149)]).then(o.bind(o,3149)),props:!0},{path:"/main",component:()=>Promise.all([o.e(736),o.e(149)]).then(o.bind(o,3149)),children:[]},{path:"/:catchAll(.*)*",component:()=>Promise.all([o.e(736),o.e(193)]).then(o.bind(o,2193))}],m=g,h=(0,p.BC)((function({store:e,ssrContext:t}){const o=f.PO,r=(0,f.p7)({scrollBehavior:()=>({left:0,top:0}),routes:m,history:o("/goodView.github.io/")});return r.beforeEach((function(t,o,r){console.log("navigate to: "+t.path+" from: "+o.path);let n=localStorage.getItem("token"),i=e.getters["client/getClientInfo"];void 0!==i&&null!==i||void 0===n||null===n||e.dispatch("client/loginByToken"),"/login"===t.path||"/registration"===t.path?r("/"):r()})),r}));async function v(e,t){const r="function"===typeof d["default"]?await(0,d["default"])({}):d["default"],{storeKey:i}=await Promise.resolve().then(o.bind(o,1718)),a="function"===typeof h?await h({store:r}):h;r.$router=a;const l=e(u);return l.use(n.Z,t),{app:l,store:r,storeKey:i,router:a}}var b=o(214),w=o(6417),y=o(1791);const P={config:{notify:{}},iconSet:b.Z,plugins:{Notify:w.Z,Dialog:y.Z}},A="/goodView.github.io/",k=/\/\//,x=e=>(A+e).replace(k,"/");async function I({app:e,router:t,store:o,storeKey:r},n){let i=!1;const a=e=>{try{return x(t.resolve(e).href)}catch(o){}return Object(e)===e?null:e},l=e=>{if(i=!0,"string"===typeof e&&/^https?:\/\//.test(e))return void(window.location.href=e);const t=a(e);null!==t&&(window.location.href=t)},s=window.location.href.replace(window.location.origin,"");for(let u=0;!1===i&&u<n.length;u++)try{await n[u]({app:e,router:t,store:o,ssrContext:null,redirect:l,urlPath:s,publicPath:A})}catch(c){return c&&c.url?void l(c.url):void console.error("[Quasar] boot error:",c)}!0!==i&&(e.use(t),e.use(o,r),e.mount("#q-app"))}v(r.ri,P).then((e=>Promise.all([Promise.resolve().then(o.bind(o,1745)),Promise.resolve().then(o.bind(o,5474))]).then((t=>{const o=t.map((e=>e.default)).filter((e=>"function"===typeof e));I(e,o)}))))},5474:(e,t,o)=>{o.r(t),o.d(t,{api:()=>a,default:()=>l});var r=o(3340),n=o(52),i=o.n(n);const a=i().create({baseURL:"https://api.example.com"}),l=(0,r.xr)((({app:e})=>{e.config.globalProperties.$axios=i(),e.config.globalProperties.$api=a}))},1745:(e,t,o)=>{o.r(t),o.d(t,{default:()=>u,i18n:()=>c});var r=o(3340),n=o(5175);const i={loginLabel:"Login",loginHint:"Please enter login here",passwordLabel:"Password",passwordHint:"Please enter password here",simpleRulesLabel:"Please type something"},a={failed:"Action failed",success:"Action was successful"},l={failed:"Action failed",success:"Action was successful"},s={"en-US":i,"ru-RU":a,"tr-TR":l};var c=null;const u=(0,r.xr)((({app:e})=>{c=(0,n.o)({locale:"en-US",messages:s}),e.use(c)}))},1718:(e,t,o)=>{o.r(t),o.d(t,{default:()=>N});var r={};o.r(r),o.d(r,{getClientInfo:()=>p});var n={};o.r(n),o.d(n,{clearClientInfo:()=>g,storeClientInfo:()=>f});var i={};o.r(i),o.d(i,{login:()=>y,loginByToken:()=>P});var a={};o.r(a),o.d(a,{getAds:()=>x,getDefFilters:()=>I,getFilter:()=>O,getFilteredAdAmount:()=>C,getMinPrice:()=>M,getPriceMap:()=>T,getPriceToIndexMap:()=>S});var l={};o.r(l),o.d(l,{setAds:()=>j,setFilter:()=>L,setFilteredAdAmount:()=>F});var s={};o.r(s),o.d(s,{calculateAdAmount:()=>E,createAd:()=>U,getPriceIndex:()=>$,getPriceValue:()=>Z,loadAds:()=>q,loadsFilteredAds:()=>B});var c=o(3340),u=o(741);function d(){return{client:null}}function p(e){return e.client}function f(e,t){e.client=t}function g(e){e.client=null}var m=o(52),h=o.n(m);const v={baseUrl:"/api/",get(e,t){let o={authorization:`bearer ${localStorage.getItem("token")}`};return t?h()({method:"get",url:this.baseUrl+e,headers:o,params:t}):h()({method:"get",url:this.baseUrl+e,headers:o})},post(e,t){let o={authorization:`bearer ${localStorage.getItem("token")}`};return h()({method:"post",url:this.baseUrl+e,data:t,headers:o})},delete(e,t){let o={authorization:`bearer ${localStorage.getItem("token")}`};return h()({method:"delete",url:this.baseUrl+e,params:t,headers:o})}};var b=o(6417),w=o(1745);function y(e,t){console.log("Login");let o=v.post("login",t);o.then((t=>{console.log("login success "+t.status),e.commit("storeClientInfo",t.data),localStorage.setItem("token",t.data.token)})).catch((e=>{let t=e.response;console.log("error while login "+t.data),b.Z.create({color:"red-5",textColor:"white",icon:"warning",message:t.status+" "+w.i18n.global.t(t.data)})}))}function P(e){console.log("Login by token");let t=localStorage.getItem("token"),o={token:t},r=v.post("loginByToken",o);r.then((t=>{console.log("login by token success "+t.status),e.commit("storeClientInfo",t.data)})).catch((e=>{let t=e.response;console.log("error while login "+t.data),localStorage.removeItem("token")}))}const A={namespaced:!0,getters:r,mutations:n,actions:i,state:d};function k(){return{adList:null,currentAd:null,filteredAdAmount:0,filter:{minPrice:0,maxPrice:20},priceMap:{0:0,1:10,2:30,3:60,4:100,5:150,6:200,7:250,8:300,9:350,10:400,11:500,12:600,13:700,14:800,15:900,16:1e3,17:2e3,18:5e3,19:1e4,20:1e5},priceToIndexMap:{0:0,10:1,30:2,60:3,100:4,150:5,200:6,250:7,300:8,350:9,400:10,500:11,600:12,700:13,800:14,900:15,1e3:16,2e3:17,5e3:18,1e4:19,1e5:20},definedFilters:[{id:"1",title:"Beachfront"},{id:"2",title:"time homes"},{id:"3",title:"Rooms"},{id:"4",title:"Design"},{id:"5",title:"Cabins"},{id:"6",title:"Amazing pools"},{id:"7",title:"Amazing view"},{id:"8",title:"Nationals park"},{id:"9",title:"A frame"},{id:"10",title:"Trending"},{id:"11",title:"Farms"},{id:"12",title:"Countryside"},{id:"13",title:"Castles"},{id:"14",title:"OMG!"},{id:"15",title:"Camping"}]}}function x(e){return e.adList}function I(e){return e.definedFilters}function C(e){return e.filteredAdAmount}function T(e){return e.priceMap}function O(e){return e.filter}function M(e){return e.filter.minPrice}function S(e){return e.priceToIndexMap}function j(e,t){e.adList=t}function F(e,t){e.filteredAdAmount=t}function L(e,t){e.filter=t}function U(e){}function q(e){let t=v.get("getAll");t.then((t=>{console.log("request success "+t.status),e.commit("setAds",t.data)})).catch((e=>{let t=e.response;console.log("error while request "+t.data)}))}function B(e,t){let o=v.post("find",t);o.then((t=>{console.log("request success "+t.status),e.commit("setAds",t.data)})).catch((e=>{let t=e.response;console.log("error while request "+t.data)}))}function E(e,t){let o=v.post("calculateAdAmount",t);o.then((t=>{console.log("request success "+t.status),e.commit("setFilteredAdAmount",t.data)})).catch((e=>{let t=e.response;console.log("error while request "+t.data)}))}function Z(e,t){console.log("getPriceValue dispatch");let o,r,n=e.getters["getPriceMap"];return o=0===t.min?0:n[t.min],r=n[t.max],{minPrice:o,maxPrice:r}}function $(e,t){let o=e.getters["getPriceToIndexMap"],r=e.getters["getPriceMap"],n=0,i=r[0],a=null,l=null;for(const u in o)n=o[u],console.log("element "+n+" val "+u+" prev "+i),parseInt(i)>=parseInt(t.minPrice)&&parseInt(u)>=parseInt(t.minPrice)&&null===a&&(console.log("new min index = "+n-1),a=n-1),parseInt(i)>=parseInt(t.maxPrice)&&parseInt(u)>=parseInt(t.maxPrice)&&null===l&&(console.log("new max index = "+n),l=n),i=r[n];let s=void 0!==a&&a<19&&a<l?a:0,c=void 0!==l&&l>a&&l<19?l:20;return{min:s,max:c}}const z={namespaced:!0,getters:a,mutations:l,actions:s,state:k},N=(0,c.h)((function({ssrContext:e}){const t=(0,u.MT)({modules:{client:A,ad:z},strict:!1});return t}))}},t={};function o(r){var n=t[r];if(void 0!==n)return n.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,o),i.exports}o.m=e,(()=>{var e=[];o.O=(t,r,n,i)=>{if(!r){var a=1/0;for(u=0;u<e.length;u++){for(var[r,n,i]=e[u],l=!0,s=0;s<r.length;s++)(!1&i||a>=i)&&Object.keys(o.O).every((e=>o.O[e](r[s])))?r.splice(s--,1):(l=!1,i<a&&(a=i));if(l){e.splice(u--,1);var c=n();void 0!==c&&(t=c)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[r,n,i]}})(),(()=>{o.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return o.d(t,{a:t}),t}})(),(()=>{o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}})(),(()=>{o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((t,r)=>(o.f[r](e,t),t)),[]))})(),(()=>{o.u=e=>"js/"+e+"."+{149:"885bb94b",193:"bd993025"}[e]+".js"})(),(()=>{o.miniCssF=e=>"css/"+{143:"app",736:"vendor"}[e]+"."+{143:"e407bbed",736:"a98804cb"}[e]+".css"})(),(()=>{o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="firstpwa:";o.l=(r,n,i,a)=>{if(e[r])e[r].push(n);else{var l,s;if(void 0!==i)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+i){l=d;break}}l||(s=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.setAttribute("data-webpack",t+i),l.src=r),e[r]=[n];var p=(t,o)=>{l.onerror=l.onload=null,clearTimeout(f);var n=e[r];if(delete e[r],l.parentNode&&l.parentNode.removeChild(l),n&&n.forEach((e=>e(o))),t)return t(o)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=p.bind(null,l.onerror),l.onload=p.bind(null,l.onload),s&&document.head.appendChild(l)}}})(),(()=>{o.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{o.p="/goodView.github.io/"})(),(()=>{var e={143:0};o.f.j=(t,r)=>{var n=o.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var i=new Promise(((o,r)=>n=e[t]=[o,r]));r.push(n[2]=i);var a=o.p+o.u(t),l=new Error,s=r=>{if(o.o(e,t)&&(n=e[t],0!==n&&(e[t]=void 0),n)){var i=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;l.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",l.name="ChunkLoadError",l.type=i,l.request=a,n[1](l)}};o.l(a,s,"chunk-"+t,t)}},o.O.j=t=>0===e[t];var t=(t,r)=>{var n,i,[a,l,s]=r,c=0;if(a.some((t=>0!==e[t]))){for(n in l)o.o(l,n)&&(o.m[n]=l[n]);if(s)var u=s(o)}for(t&&t(r);c<a.length;c++)i=a[c],o.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return o.O(u)},r=globalThis["webpackChunkfirstpwa"]=globalThis["webpackChunkfirstpwa"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var r=o.O(void 0,[736],(()=>o(2318)));r=o.O(r)})();