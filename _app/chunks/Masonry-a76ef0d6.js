var fe=Object.defineProperty,ce=Object.defineProperties;var ae=Object.getOwnPropertyDescriptors;var S=Object.getOwnPropertySymbols;var he=Object.prototype.hasOwnProperty,_e=Object.prototype.propertyIsEnumerable;var q=(i,e,n)=>e in i?fe(i,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):i[e]=n,U=(i,e)=>{for(var n in e||(e={}))he.call(e,n)&&q(i,n,e[n]);if(S)for(var n of S(e))_e.call(e,n)&&q(i,n,e[n]);return i},O=(i,e)=>ce(i,ae(e));import{S as I,i as T,s as V,F as L,G as w,a as d,d as c,b as u,g as v,I as k,J as Y,e as y,c as B,O as W,L as x,M as ee,N as te,q as g,o as C,R as me,H as E,w as M,x as N,y as z,B as D,t as ne,h as le,j as re,k as P,m as A,n as j,p as G,v as $e,u as de,T as ge}from"./vendor-02c067f7.js";import{N as b,A as se,T as pe}from"./notes-746f14f1.js";function Ce(i){let e;return{c(){e=L("path"),this.h()},l(n){e=w(n,"path",{"fill-rule":!0,"clip-rule":!0,d:!0,fill:!0}),d(e).forEach(c),this.h()},h(){u(e,"fill-rule","evenodd"),u(e,"clip-rule","evenodd"),u(e,"d","M17.4142 1.99997C16.6332 1.21892 15.3668 1.21892 14.5858 1.99997L9.45981 7.12594L5.21876 8.53962C3.80829 9.00978 3.3857 10.7999 4.437 11.8512L7.5858 15L4.29289 18.2929C3.90237 18.6834 3.90237 19.3166 4.29289 19.7071C4.68342 20.0976 5.31658 20.0976 5.70711 19.7071L9.00001 16.4142L12.1488 19.563C13.2001 20.6143 14.9902 20.1917 15.4603 18.7812L16.874 14.5402L22 9.41418C22.781 8.63314 22.781 7.36681 22 6.58576L17.4142 1.99997ZM10.874 8.54015L16 3.41418L20.5858 7.99997L15.4598 13.1259C15.2403 13.3455 15.0748 13.6131 14.9767 13.9077L13.563 18.1487L5.85122 10.437L10.0923 9.02331C10.3868 8.92512 10.6545 8.7597 10.874 8.54015Z"),u(e,"fill","currentColor")},m(n,t){v(n,e,t)},d(n){n&&c(e)}}}function ve(i){let e;return{c(){e=L("path"),this.h()},l(n){e=w(n,"path",{d:!0,fill:!0}),d(e).forEach(c),this.h()},h(){u(e,"d","M17.4142 1.99997C16.6332 1.21892 15.3668 1.21892 14.5858 1.99997L9.45981 7.12594L5.21876 8.53962C3.80829 9.00978 3.3857 10.7999 4.437 11.8512L7.5858 15L4.2929 18.2929C3.90237 18.6834 3.90237 19.3166 4.2929 19.7071C4.68342 20.0976 5.31658 20.0976 5.70711 19.7071L9.00001 16.4142L12.1488 19.563C13.2001 20.6143 14.9902 20.1917 15.4603 18.7812L16.874 14.5402L22 9.41419C22.781 8.63314 22.781 7.3668 22 6.58576L17.4142 1.99997Z"),u(e,"fill","currentColor")},m(n,t){v(n,e,t)},d(n){n&&c(e)}}}function Le(i){let e;function n(r,o){return r[0]?ve:Ce}let t=n(i),l=t(i);return{c(){e=L("svg"),l.c(),this.h()},l(r){e=w(r,"svg",{width:!0,height:!0,viewBox:!0,fill:!0,xmlns:!0});var o=d(e);l.l(o),o.forEach(c),this.h()},h(){u(e,"width",i[1]),u(e,"height",i[1]),u(e,"viewBox","0 0 24 24"),u(e,"fill","none"),u(e,"xmlns","http://www.w3.org/2000/svg")},m(r,o){v(r,e,o),l.m(e,null)},p(r,[o]){t!==(t=n(r))&&(l.d(1),l=t(r),l&&(l.c(),l.m(e,null))),o&2&&u(e,"width",r[1]),o&2&&u(e,"height",r[1])},i:k,o:k,d(r){r&&c(e),l.d()}}}function we(i,e,n){let{filled:t=!1}=e,{size:l=24}=e;return i.$$set=r=>{"filled"in r&&n(0,t=r.filled),"size"in r&&n(1,l=r.size)},[t,l]}class be extends I{constructor(e){super();T(this,e,we,Le,V,{filled:0,size:1})}}function Ee(i){let e,n,t,l;const r=i[1].default,o=Y(r,i,i[0],null);return{c(){e=y("button"),o&&o.c(),this.h()},l(s){e=B(s,"BUTTON",{class:!0});var f=d(e);o&&o.l(f),f.forEach(c),this.h()},h(){u(e,"class","root svelte-upsxck")},m(s,f){v(s,e,f),o&&o.m(e,null),n=!0,t||(l=W(e,"click",i[2]),t=!0)},p(s,[f]){o&&o.p&&(!n||f&1)&&x(o,r,s,s[0],n?te(r,s[0],f,null):ee(s[0]),null)},i(s){n||(g(o,s),n=!0)},o(s){C(o,s),n=!1},d(s){s&&c(e),o&&o.d(s),t=!1,l()}}}function ke(i,e,n){let{$$slots:t={},$$scope:l}=e;function r(o){me.call(this,i,o)}return i.$$set=o=>{"$$scope"in o&&n(0,l=o.$$scope)},[l,t,r]}class R extends I{constructor(e){super();T(this,e,ke,Ee,V,{})}}function Me(i){let e,n,t,l,r,o;return{c(){e=L("svg"),n=L("path"),t=L("circle"),l=L("circle"),r=L("circle"),o=L("circle"),this.h()},l(s){e=w(s,"svg",{width:!0,height:!0,viewBox:!0,fill:!0,xmlns:!0});var f=d(e);n=w(f,"path",{d:!0,fill:!0}),d(n).forEach(c),t=w(f,"circle",{cx:!0,cy:!0,r:!0,fill:!0}),d(t).forEach(c),l=w(f,"circle",{cx:!0,cy:!0,r:!0,fill:!0}),d(l).forEach(c),r=w(f,"circle",{cx:!0,cy:!0,r:!0,fill:!0}),d(r).forEach(c),o=w(f,"circle",{cx:!0,cy:!0,r:!0,fill:!0}),d(o).forEach(c),f.forEach(c),this.h()},h(){u(n,"d","M11.976 20.9106L12.0047 21.9102L11.976 20.9106ZM3.43482 15.1961L2.48483 15.5084L3.43482 15.1961ZM19.7274 10.3661C20.7749 14.2755 18.2522 18.4605 13.9248 19.62L14.4424 21.5519C19.7173 20.1385 23.0237 14.9405 21.6593 9.8485L19.7274 10.3661ZM10.0752 5.25338C14.4027 4.09383 18.6799 6.45676 19.7274 10.3661L21.6593 9.8485C20.2948 4.75647 14.8325 1.90812 9.55759 3.32152L10.0752 5.25338ZM4.27259 14.5072C3.22507 10.5979 5.74774 6.41292 10.0752 5.25338L9.55759 3.32152C4.28269 4.73493 0.97633 9.93286 2.34073 15.0249L4.27259 14.5072ZM4.3848 14.8837C4.34415 14.7601 4.30671 14.6346 4.27259 14.5072L2.34073 15.0249C2.38449 15.1882 2.43257 15.3494 2.48483 15.5084L4.3848 14.8837ZM5.48162 16.5254C5.79842 16.3549 6.15097 16.2133 6.5325 16.1111L6.01486 14.1792C5.48533 14.3211 4.98826 14.5197 4.53377 14.7643L5.48162 16.5254ZM6.5325 16.1111C7.52785 15.8444 8.47055 15.9117 9.17818 16.1887C9.88627 16.4659 10.2938 16.9175 10.425 17.4072L12.3569 16.8895C12.0222 15.6404 11.0512 14.7742 9.90723 14.3264C8.76277 13.8783 7.37979 13.8135 6.01486 14.1792L6.5325 16.1111ZM10.425 17.4072C10.518 17.7541 10.4817 18.1407 10.2927 18.5472L12.1061 19.3907C12.4637 18.6219 12.5883 17.7533 12.3569 16.8895L10.425 17.4072ZM13.9248 19.62C13.2615 19.7977 12.5983 19.8923 11.9473 19.911L12.0047 21.9102C12.8105 21.887 13.6282 21.77 14.4424 21.5519L13.9248 19.62ZM10.2927 18.5472C10.0017 19.1728 9.95657 19.9292 10.1707 20.5668C10.3953 21.2354 10.9953 21.9392 12.0047 21.9102L11.9473 19.911C11.968 19.9104 12.0238 19.9223 12.0694 19.9601C12.1012 19.9864 12.0872 19.9912 12.0666 19.9301C12.0467 19.8707 12.0322 19.7805 12.0387 19.6725C12.0451 19.5653 12.0707 19.4668 12.1061 19.3907L10.2927 18.5472ZM2.48483 15.5084C2.7132 16.203 3.27136 16.6023 3.8406 16.7431C4.38895 16.8788 4.98437 16.7931 5.48162 16.5254L4.53377 14.7643C4.49702 14.7841 4.45447 14.7978 4.4118 14.8036C4.36858 14.8095 4.33698 14.8056 4.32101 14.8017C4.30564 14.7979 4.31565 14.797 4.33672 14.8151C4.36155 14.8364 4.37841 14.8643 4.3848 14.8837L2.48483 15.5084Z"),u(n,"fill","currentColor"),u(t,"cx","7.5"),u(t,"cy","11.5"),u(t,"r","1.5"),u(t,"fill","currentColor"),u(l,"cx","11.5"),u(l,"cy","8.5"),u(l,"r","1.5"),u(l,"fill","currentColor"),u(r,"cx","16"),u(r,"cy","16"),u(r,"r","1"),u(r,"fill","currentColor"),u(o,"cx","16.5"),u(o,"cy","11"),u(o,"r","1.5"),u(o,"fill","currentColor"),u(e,"width",i[0]),u(e,"height",i[0]),u(e,"viewBox","0 0 24 24"),u(e,"fill","none"),u(e,"xmlns","http://www.w3.org/2000/svg")},m(s,f){v(s,e,f),E(e,n),E(e,t),E(e,l),E(e,r),E(e,o)},p(s,[f]){f&1&&u(e,"width",s[0]),f&1&&u(e,"height",s[0])},i:k,o:k,d(s){s&&c(e)}}}function Ne(i,e,n){let{size:t=24}=e;return i.$$set=l=>{"size"in l&&n(0,t=l.size)},[t]}class ze extends I{constructor(e){super();T(this,e,Ne,Me,V,{size:0})}}function De(i){let e,n,t;return{c(){e=L("svg"),n=L("path"),t=L("path"),this.h()},l(l){e=w(l,"svg",{width:!0,height:!0,viewBox:!0,fill:!0,xmlns:!0});var r=d(e);n=w(r,"path",{d:!0,fill:!0}),d(n).forEach(c),t=w(r,"path",{"fill-rule":!0,"clip-rule":!0,d:!0,fill:!0}),d(t).forEach(c),r.forEach(c),this.h()},h(){u(n,"d","M8.06171 3.50506C8.28197 2.63988 9.06626 2 10 2H14C14.9337 2 15.718 2.63988 15.9383 3.50506C16.0064 3.77267 16.2239 4 16.5 4H19.5C19.7761 4 20 4.22386 20 4.5C20 4.77614 19.7761 5 19.5 5H4.5C4.22386 5 4 4.77614 4 4.5C4 4.22386 4.22386 4 4.5 4H7.5C7.77614 4 7.99359 3.77267 8.06171 3.50506Z"),u(n,"fill","currentColor"),u(t,"fill-rule","evenodd"),u(t,"clip-rule","evenodd"),u(t,"d","M5 19V7C5 6.44772 5.44772 6 6 6H18C18.5523 6 19 6.44772 19 7V19C19 20.6569 17.6569 22 16 22H8C6.34315 22 5 20.6569 5 19ZM16.7071 9.29289C17.0976 9.68342 17.0976 10.3166 16.7071 10.7071L13.4142 14L16.7071 17.2929C17.0976 17.6834 17.0976 18.3166 16.7071 18.7071C16.3166 19.0976 15.6834 19.0976 15.2929 18.7071L12 15.4142L8.70711 18.7071C8.31658 19.0976 7.68342 19.0976 7.29289 18.7071C6.90237 18.3166 6.90237 17.6834 7.29289 17.2929L10.5858 14L7.29289 10.7071C6.90237 10.3166 6.90237 9.68342 7.29289 9.29289C7.68342 8.90237 8.31658 8.90237 8.70711 9.29289L12 12.5858L15.2929 9.29289C15.6834 8.90237 16.3166 8.90237 16.7071 9.29289Z"),u(t,"fill","currentColor"),u(e,"width",i[0]),u(e,"height",i[0]),u(e,"viewBox","0 0 24 24"),u(e,"fill","none"),u(e,"xmlns","http://www.w3.org/2000/svg")},m(l,r){v(l,e,r),E(e,n),E(e,t)},p(l,[r]){r&1&&u(e,"width",l[0]),r&1&&u(e,"height",l[0])},i:k,o:k,d(l){l&&c(e)}}}function He(i,e,n){let{size:t=24}=e;return i.$$set=l=>{"size"in l&&n(0,t=l.size)},[t]}class Ze extends I{constructor(e){super();T(this,e,He,De,V,{size:0})}}function ye(i){let e,n;return{c(){e=L("svg"),n=L("path"),this.h()},l(t){e=w(t,"svg",{width:!0,height:!0,viewBox:!0,fill:!0,xmlns:!0});var l=d(e);n=w(l,"path",{"fill-rule":!0,"clip-rule":!0,d:!0,fill:!0}),d(n).forEach(c),l.forEach(c),this.h()},h(){u(n,"fill-rule","evenodd"),u(n,"clip-rule","evenodd"),u(n,"d","M10 2C9.06626 2 8.28197 2.63988 8.06171 3.50506C7.99359 3.77267 7.77614 4 7.5 4H4.5C4.22386 4 4 4.22386 4 4.5C4 4.77614 4.22386 5 4.5 5H19.5C19.7761 5 20 4.77614 20 4.5C20 4.22386 19.7761 4 19.5 4H16.5C16.2239 4 16.0064 3.77267 15.9383 3.50506C15.718 2.63988 14.9337 2 14 2H10ZM5 7V19C5 20.6569 6.34315 22 8 22H16C17.6569 22 19 20.6569 19 19V7C19 6.44772 18.5523 6 18 6H6C5.44772 6 5 6.44772 5 7ZM12.3143 7.82463C12.1407 7.65107 11.8593 7.65107 11.6857 7.82463L8.13022 11.3802C8.00311 11.5073 7.96508 11.6984 8.03387 11.8645C8.10267 12.0306 8.26473 12.1389 8.44449 12.1389H9.77781L9.77781 15.6944C9.77781 15.9399 9.97679 16.1388 10.2223 16.1388H13.7778C14.0232 16.1388 14.2222 15.9399 14.2222 15.6944L14.2222 12.1389H15.5555C15.7353 12.1389 15.8974 12.0306 15.9662 11.8645C16.0349 11.6984 15.9969 11.5073 15.8698 11.3802L12.3143 7.82463ZM9.7778 18.3611C9.7778 18.6065 9.97678 18.8055 10.2222 18.8055H13.7778C14.0232 18.8055 14.2222 18.6065 14.2222 18.3611V17.4722C14.2222 17.2267 14.0232 17.0277 13.7778 17.0277H10.2222C9.97678 17.0277 9.7778 17.2267 9.7778 17.4722V18.3611Z"),u(n,"fill","currentColor"),u(e,"width",i[0]),u(e,"height",i[0]),u(e,"viewBox","0 0 24 24"),u(e,"fill","none"),u(e,"xmlns","http://www.w3.org/2000/svg")},m(t,l){v(t,e,l),E(e,n)},p(t,[l]){l&1&&u(e,"width",t[0]),l&1&&u(e,"height",t[0])},i:k,o:k,d(t){t&&c(e)}}}function Be(i,e,n){let{size:t=24}=e;return i.$$set=l=>{"size"in l&&n(0,t=l.size)},[t]}class Ie extends I{constructor(e){super();T(this,e,Be,ye,V,{size:0})}}function J(i){let e,n,t,l,r;return n=new be({props:{filled:i[0].status===b.PINNED,size:18}}),{c(){e=y("button"),M(n.$$.fragment),this.h()},l(o){e=B(o,"BUTTON",{class:!0});var s=d(e);N(n.$$.fragment,s),s.forEach(c),this.h()},h(){u(e,"class","pin-button hover-visible svelte-1h6bk4a")},m(o,s){v(o,e,s),z(n,e,null),t=!0,l||(r=W(e,"click",i[1]),l=!0)},p(o,s){const f={};s&1&&(f.filled=o[0].status===b.PINNED),n.$set(f)},i(o){t||(g(n.$$.fragment,o),t=!0)},o(o){C(n.$$.fragment,o),t=!1},d(o){o&&c(e),D(n),l=!1,r()}}}function K(i){let e,n=i[0].title+"",t;return{c(){e=y("h4"),t=ne(n),this.h()},l(l){e=B(l,"H4",{class:!0});var r=d(e);t=le(r,n),r.forEach(c),this.h()},h(){u(e,"class","title svelte-1h6bk4a")},m(l,r){v(l,e,r),E(e,t)},p(l,r){r&1&&n!==(n=l[0].title+"")&&re(t,n)},d(l){l&&c(e)}}}function Q(i){let e,n=i[0].content+"",t;return{c(){e=y("p"),t=ne(n),this.h()},l(l){e=B(l,"P",{class:!0});var r=d(e);t=le(r,n),r.forEach(c),this.h()},h(){u(e,"class","content svelte-1h6bk4a")},m(l,r){v(l,e,r),E(e,t)},p(l,r){r&1&&n!==(n=l[0].content+"")&&re(t,n)},d(l){l&&c(e)}}}function Te(i){let e,n,t,l,r,o;return e=new R({props:{$$slots:{default:[Ae]},$$scope:{ctx:i}}}),t=new R({props:{$$slots:{default:[Re]},$$scope:{ctx:i}}}),t.$on("click",i[3]),r=new R({props:{$$slots:{default:[Ue]},$$scope:{ctx:i}}}),r.$on("click",i[2]),{c(){M(e.$$.fragment),n=P(),M(t.$$.fragment),l=P(),M(r.$$.fragment)},l(s){N(e.$$.fragment,s),n=A(s),N(t.$$.fragment,s),l=A(s),N(r.$$.fragment,s)},m(s,f){z(e,s,f),v(s,n,f),z(t,s,f),v(s,l,f),z(r,s,f),o=!0},p(s,f){const a={};f&128&&(a.$$scope={dirty:f,ctx:s}),e.$set(a);const _={};f&128&&(_.$$scope={dirty:f,ctx:s}),t.$set(_);const $={};f&128&&($.$$scope={dirty:f,ctx:s}),r.$set($)},i(s){o||(g(e.$$.fragment,s),g(t.$$.fragment,s),g(r.$$.fragment,s),o=!0)},o(s){C(e.$$.fragment,s),C(t.$$.fragment,s),C(r.$$.fragment,s),o=!1},d(s){D(e,s),s&&c(n),D(t,s),s&&c(l),D(r,s)}}}function Ve(i){let e,n;return e=new R({props:{$$slots:{default:[Oe]},$$scope:{ctx:i}}}),e.$on("click",i[5]),{c(){M(e.$$.fragment)},l(t){N(e.$$.fragment,t)},m(t,l){z(e,t,l),n=!0},p(t,l){const r={};l&128&&(r.$$scope={dirty:l,ctx:t}),e.$set(r)},i(t){n||(g(e.$$.fragment,t),n=!0)},o(t){C(e.$$.fragment,t),n=!1},d(t){D(e,t)}}}function Pe(i){let e,n,t,l;return e=new R({props:{$$slots:{default:[Fe]},$$scope:{ctx:i}}}),e.$on("click",i[4]),t=new R({props:{$$slots:{default:[We]},$$scope:{ctx:i}}}),t.$on("click",i[5]),{c(){M(e.$$.fragment),n=P(),M(t.$$.fragment)},l(r){N(e.$$.fragment,r),n=A(r),N(t.$$.fragment,r)},m(r,o){z(e,r,o),v(r,n,o),z(t,r,o),l=!0},p(r,o){const s={};o&128&&(s.$$scope={dirty:o,ctx:r}),e.$set(s);const f={};o&128&&(f.$$scope={dirty:o,ctx:r}),t.$set(f)},i(r){l||(g(e.$$.fragment,r),g(t.$$.fragment,r),l=!0)},o(r){C(e.$$.fragment,r),C(t.$$.fragment,r),l=!1},d(r){D(e,r),r&&c(n),D(t,r)}}}function Ae(i){let e,n;return e=new ze({props:{size:18}}),{c(){M(e.$$.fragment)},l(t){N(e.$$.fragment,t)},m(t,l){z(e,t,l),n=!0},p:k,i(t){n||(g(e.$$.fragment,t),n=!0)},o(t){C(e.$$.fragment,t),n=!1},d(t){D(e,t)}}}function Re(i){let e,n;return e=new se({props:{size:18}}),{c(){M(e.$$.fragment)},l(t){N(e.$$.fragment,t)},m(t,l){z(e,t,l),n=!0},p:k,i(t){n||(g(e.$$.fragment,t),n=!0)},o(t){C(e.$$.fragment,t),n=!1},d(t){D(e,t)}}}function Ue(i){let e,n;return e=new pe({props:{size:18}}),{c(){M(e.$$.fragment)},l(t){N(e.$$.fragment,t)},m(t,l){z(e,t,l),n=!0},p:k,i(t){n||(g(e.$$.fragment,t),n=!0)},o(t){C(e.$$.fragment,t),n=!1},d(t){D(e,t)}}}function Oe(i){let e,n;return e=new se({props:{size:18}}),{c(){M(e.$$.fragment)},l(t){N(e.$$.fragment,t)},m(t,l){z(e,t,l),n=!0},p:k,i(t){n||(g(e.$$.fragment,t),n=!0)},o(t){C(e.$$.fragment,t),n=!1},d(t){D(e,t)}}}function Fe(i){let e,n;return e=new Ze({props:{size:18}}),{c(){M(e.$$.fragment)},l(t){N(e.$$.fragment,t)},m(t,l){z(e,t,l),n=!0},p:k,i(t){n||(g(e.$$.fragment,t),n=!0)},o(t){C(e.$$.fragment,t),n=!1},d(t){D(e,t)}}}function We(i){let e,n;return e=new Ie({props:{size:18}}),{c(){M(e.$$.fragment)},l(t){N(e.$$.fragment,t)},m(t,l){z(e,t,l),n=!0},p:k,i(t){n||(g(e.$$.fragment,t),n=!0)},o(t){C(e.$$.fragment,t),n=!1},d(t){D(e,t)}}}function Se(i){let e,n,t,l,r,o,s,f,a=(i[0].status===b.DEFAULT||i[0].status===b.PINNED)&&J(i),_=i[0].title&&K(i),$=i[0].content&&Q(i);const F=[Pe,Ve,Te],m=[];function Z(h,p){return h[0].status===b.DELETED?0:h[0].status===b.ARCHIVED?1:2}return o=Z(i),s=m[o]=F[o](i),{c(){e=y("div"),a&&a.c(),n=P(),_&&_.c(),t=P(),$&&$.c(),l=P(),r=y("div"),s.c(),this.h()},l(h){e=B(h,"DIV",{class:!0});var p=d(e);a&&a.l(p),n=A(p),_&&_.l(p),t=A(p),$&&$.l(p),l=A(p),r=B(p,"DIV",{class:!0});var H=d(r);s.l(H),H.forEach(c),p.forEach(c),this.h()},h(){u(r,"class","icon-bar hover-visible svelte-1h6bk4a"),u(e,"class","root svelte-1h6bk4a")},m(h,p){v(h,e,p),a&&a.m(e,null),E(e,n),_&&_.m(e,null),E(e,t),$&&$.m(e,null),E(e,l),E(e,r),m[o].m(r,null),f=!0},p(h,[p]){h[0].status===b.DEFAULT||h[0].status===b.PINNED?a?(a.p(h,p),p&1&&g(a,1)):(a=J(h),a.c(),g(a,1),a.m(e,n)):a&&(j(),C(a,1,1,()=>{a=null}),G()),h[0].title?_?_.p(h,p):(_=K(h),_.c(),_.m(e,t)):_&&(_.d(1),_=null),h[0].content?$?$.p(h,p):($=Q(h),$.c(),$.m(e,l)):$&&($.d(1),$=null);let H=o;o=Z(h),o===H?m[o].p(h,p):(j(),C(m[H],1,1,()=>{m[H]=null}),G(),s=m[o],s?s.p(h,p):(s=m[o]=F[o](h),s.c()),g(s,1),s.m(r,null))},i(h){f||(g(a),g(s),f=!0)},o(h){C(a),C(s),f=!1},d(h){h&&c(e),a&&a.d(),_&&_.d(),$&&$.d(),m[o].d()}}}function qe(i,e,n){let{note:t}=e,{updateNote:l}=e;const r=()=>{l(O(U({},t),{status:t.status===b.PINNED?b.DEFAULT:b.PINNED}))},o=()=>{l(O(U({},t),{status:b.DELETED}))},s=()=>{l(O(U({},t),{status:b.ARCHIVED}))},f=()=>{l(null)},a=()=>{l(O(U({},t),{status:b.DEFAULT}))};return i.$$set=_=>{"note"in _&&n(0,t=_.note),"updateNote"in _&&n(6,l=_.updateNote)},[t,r,o,s,f,a,l]}class Ye extends I{constructor(e){super();T(this,e,qe,Se,V,{note:0,updateNote:6})}}const je=i=>({}),X=i=>({itemClass:!0});function Ge(i){let e,n,t,l;const r=i[6].default,o=Y(r,i,i[5],X);return{c(){e=y("div"),o&&o.c(),this.h()},l(s){e=B(s,"DIV",{class:!0});var f=d(e);o&&o.l(f),f.forEach(c),this.h()},h(){u(e,"class","container svelte-11h8c70")},m(s,f){v(s,e,f),o&&o.m(e,null),i[7](e),n=!0,t||(l=W(window,"resize",i[1]),t=!0)},p(s,[f]){o&&o.p&&(!n||f&32)&&x(o,r,s,s[5],n?te(r,s[5],f,je):ee(s[5]),X)},i(s){n||(g(o,s),n=!0)},o(s){C(o,s),n=!1},d(s){s&&c(e),o&&o.d(s),i[7](null),t=!1,l()}}}function Je(i,e,n){let{$$slots:t={},$$scope:l}=e,{spacing:r=16}=e,{itemWidth:o=240}=e,{container:s}=e,f,a;const _=m=>{if(!f)return;const Z=new Array(m).fill(-r);f.childNodes.forEach((h,p)=>{const H=Z.indexOf(Math.min(...Z)),ie=H*(o+r),oe=Z[H]+r;if(h.style&&h.getBoundingClientRect){h.style.transform=`translate(${ie}px, ${oe}px)`,h.style.width=a===1?`${s.getBoundingClientRect().width}px`:`${o}px`;const ue=h.getBoundingClientRect().height;Z[H]+=ue+r,n(0,f.style.height=`${Math.max(...Z)}px`,f)}})},$=()=>{if(s&&f){const m=s.getBoundingClientRect().width;a=Math.floor(m/(o+r)),a===1?n(0,f.style.width=`${m}px`,f):n(0,f.style.width=`${a*(o+r)-r}px`,f)}};$e($),de(()=>_(a));function F(m){ge[m?"unshift":"push"](()=>{f=m,n(0,f)})}return i.$$set=m=>{"spacing"in m&&n(2,r=m.spacing),"itemWidth"in m&&n(3,o=m.itemWidth),"container"in m&&n(4,s=m.container),"$$scope"in m&&n(5,l=m.$$scope)},[f,$,r,o,s,l,t,F]}class xe extends I{constructor(e){super();T(this,e,Je,Ge,V,{spacing:2,itemWidth:3,container:4})}}export{xe as M,Ye as N};
