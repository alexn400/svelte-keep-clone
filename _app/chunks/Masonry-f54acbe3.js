var fe=Object.defineProperty,ce=Object.defineProperties;var ae=Object.getOwnPropertyDescriptors;var q=Object.getOwnPropertySymbols;var he=Object.prototype.hasOwnProperty,me=Object.prototype.propertyIsEnumerable;var j=(s,e,l)=>e in s?fe(s,e,{enumerable:!0,configurable:!0,writable:!0,value:l}):s[e]=l,R=(s,e)=>{for(var l in e||(e={}))he.call(e,l)&&j(s,l,e[l]);if(q)for(var l of q(e))me.call(e,l)&&j(s,l,e[l]);return s},U=(s,e)=>ce(s,ae(e));import{S as V,i as P,s as A,F as b,G as E,a as $,d as c,b as u,g as L,I as N,J as x,e as I,c as T,O as S,L as ee,M as te,N as le,q as d,o as p,R as _e,H as M,w as z,x as D,y as H,B as Z,t as ne,h as re,j as se,k as F,m as O,n as G,p as J,v as $e,u as de,T as ge}from"./vendor-02c067f7.js";import{N as k,A as ie,T as pe}from"./notes-746f14f1.js";function Ce(s){let e;return{c(){e=b("path"),this.h()},l(l){e=E(l,"path",{"fill-rule":!0,"clip-rule":!0,d:!0,fill:!0}),$(e).forEach(c),this.h()},h(){u(e,"fill-rule","evenodd"),u(e,"clip-rule","evenodd"),u(e,"d","M17.4142 1.99997C16.6332 1.21892 15.3668 1.21892 14.5858 1.99997L9.45981 7.12594L5.21876 8.53962C3.80829 9.00978 3.3857 10.7999 4.437 11.8512L7.5858 15L4.29289 18.2929C3.90237 18.6834 3.90237 19.3166 4.29289 19.7071C4.68342 20.0976 5.31658 20.0976 5.70711 19.7071L9.00001 16.4142L12.1488 19.563C13.2001 20.6143 14.9902 20.1917 15.4603 18.7812L16.874 14.5402L22 9.41418C22.781 8.63314 22.781 7.36681 22 6.58576L17.4142 1.99997ZM10.874 8.54015L16 3.41418L20.5858 7.99997L15.4598 13.1259C15.2403 13.3455 15.0748 13.6131 14.9767 13.9077L13.563 18.1487L5.85122 10.437L10.0923 9.02331C10.3868 8.92512 10.6545 8.7597 10.874 8.54015Z"),u(e,"fill","currentColor")},m(l,t){L(l,e,t)},d(l){l&&c(e)}}}function ve(s){let e;return{c(){e=b("path"),this.h()},l(l){e=E(l,"path",{d:!0,fill:!0}),$(e).forEach(c),this.h()},h(){u(e,"d","M17.4142 1.99997C16.6332 1.21892 15.3668 1.21892 14.5858 1.99997L9.45981 7.12594L5.21876 8.53962C3.80829 9.00978 3.3857 10.7999 4.437 11.8512L7.5858 15L4.2929 18.2929C3.90237 18.6834 3.90237 19.3166 4.2929 19.7071C4.68342 20.0976 5.31658 20.0976 5.70711 19.7071L9.00001 16.4142L12.1488 19.563C13.2001 20.6143 14.9902 20.1917 15.4603 18.7812L16.874 14.5402L22 9.41419C22.781 8.63314 22.781 7.3668 22 6.58576L17.4142 1.99997Z"),u(e,"fill","currentColor")},m(l,t){L(l,e,t)},d(l){l&&c(e)}}}function Le(s){let e;function l(r,o){return r[0]?ve:Ce}let t=l(s),n=t(s);return{c(){e=b("svg"),n.c(),this.h()},l(r){e=E(r,"svg",{width:!0,height:!0,viewBox:!0,fill:!0,xmlns:!0});var o=$(e);n.l(o),o.forEach(c),this.h()},h(){u(e,"width",s[1]),u(e,"height",s[1]),u(e,"viewBox","0 0 24 24"),u(e,"fill","none"),u(e,"xmlns","http://www.w3.org/2000/svg")},m(r,o){L(r,e,o),n.m(e,null)},p(r,[o]){t!==(t=l(r))&&(n.d(1),n=t(r),n&&(n.c(),n.m(e,null))),o&2&&u(e,"width",r[1]),o&2&&u(e,"height",r[1])},i:N,o:N,d(r){r&&c(e),n.d()}}}function we(s,e,l){let{filled:t=!1}=e,{size:n=24}=e;return s.$$set=r=>{"filled"in r&&l(0,t=r.filled),"size"in r&&l(1,n=r.size)},[t,n]}class be extends V{constructor(e){super();P(this,e,we,Le,A,{filled:0,size:1})}}function Ee(s){let e,l,t,n;const r=s[1].default,o=x(r,s,s[0],null);return{c(){e=I("button"),o&&o.c(),this.h()},l(i){e=T(i,"BUTTON",{class:!0});var f=$(e);o&&o.l(f),f.forEach(c),this.h()},h(){u(e,"class","root svelte-upsxck")},m(i,f){L(i,e,f),o&&o.m(e,null),l=!0,t||(n=S(e,"click",s[2]),t=!0)},p(i,[f]){o&&o.p&&(!l||f&1)&&ee(o,r,i,i[0],l?le(r,i[0],f,null):te(i[0]),null)},i(i){l||(d(o,i),l=!0)},o(i){p(o,i),l=!1},d(i){i&&c(e),o&&o.d(i),t=!1,n()}}}function ke(s,e,l){let{$$slots:t={},$$scope:n}=e;function r(o){_e.call(this,s,o)}return s.$$set=o=>{"$$scope"in o&&l(0,n=o.$$scope)},[n,t,r]}class W extends V{constructor(e){super();P(this,e,ke,Ee,A,{})}}function Me(s){let e,l,t,n,r,o;return{c(){e=b("svg"),l=b("path"),t=b("circle"),n=b("circle"),r=b("circle"),o=b("circle"),this.h()},l(i){e=E(i,"svg",{width:!0,height:!0,viewBox:!0,fill:!0,xmlns:!0});var f=$(e);l=E(f,"path",{d:!0,fill:!0}),$(l).forEach(c),t=E(f,"circle",{cx:!0,cy:!0,r:!0,fill:!0}),$(t).forEach(c),n=E(f,"circle",{cx:!0,cy:!0,r:!0,fill:!0}),$(n).forEach(c),r=E(f,"circle",{cx:!0,cy:!0,r:!0,fill:!0}),$(r).forEach(c),o=E(f,"circle",{cx:!0,cy:!0,r:!0,fill:!0}),$(o).forEach(c),f.forEach(c),this.h()},h(){u(l,"d","M11.976 20.9106L12.0047 21.9102L11.976 20.9106ZM3.43482 15.1961L2.48483 15.5084L3.43482 15.1961ZM19.7274 10.3661C20.7749 14.2755 18.2522 18.4605 13.9248 19.62L14.4424 21.5519C19.7173 20.1385 23.0237 14.9405 21.6593 9.8485L19.7274 10.3661ZM10.0752 5.25338C14.4027 4.09383 18.6799 6.45676 19.7274 10.3661L21.6593 9.8485C20.2948 4.75647 14.8325 1.90812 9.55759 3.32152L10.0752 5.25338ZM4.27259 14.5072C3.22507 10.5979 5.74774 6.41292 10.0752 5.25338L9.55759 3.32152C4.28269 4.73493 0.97633 9.93286 2.34073 15.0249L4.27259 14.5072ZM4.3848 14.8837C4.34415 14.7601 4.30671 14.6346 4.27259 14.5072L2.34073 15.0249C2.38449 15.1882 2.43257 15.3494 2.48483 15.5084L4.3848 14.8837ZM5.48162 16.5254C5.79842 16.3549 6.15097 16.2133 6.5325 16.1111L6.01486 14.1792C5.48533 14.3211 4.98826 14.5197 4.53377 14.7643L5.48162 16.5254ZM6.5325 16.1111C7.52785 15.8444 8.47055 15.9117 9.17818 16.1887C9.88627 16.4659 10.2938 16.9175 10.425 17.4072L12.3569 16.8895C12.0222 15.6404 11.0512 14.7742 9.90723 14.3264C8.76277 13.8783 7.37979 13.8135 6.01486 14.1792L6.5325 16.1111ZM10.425 17.4072C10.518 17.7541 10.4817 18.1407 10.2927 18.5472L12.1061 19.3907C12.4637 18.6219 12.5883 17.7533 12.3569 16.8895L10.425 17.4072ZM13.9248 19.62C13.2615 19.7977 12.5983 19.8923 11.9473 19.911L12.0047 21.9102C12.8105 21.887 13.6282 21.77 14.4424 21.5519L13.9248 19.62ZM10.2927 18.5472C10.0017 19.1728 9.95657 19.9292 10.1707 20.5668C10.3953 21.2354 10.9953 21.9392 12.0047 21.9102L11.9473 19.911C11.968 19.9104 12.0238 19.9223 12.0694 19.9601C12.1012 19.9864 12.0872 19.9912 12.0666 19.9301C12.0467 19.8707 12.0322 19.7805 12.0387 19.6725C12.0451 19.5653 12.0707 19.4668 12.1061 19.3907L10.2927 18.5472ZM2.48483 15.5084C2.7132 16.203 3.27136 16.6023 3.8406 16.7431C4.38895 16.8788 4.98437 16.7931 5.48162 16.5254L4.53377 14.7643C4.49702 14.7841 4.45447 14.7978 4.4118 14.8036C4.36858 14.8095 4.33698 14.8056 4.32101 14.8017C4.30564 14.7979 4.31565 14.797 4.33672 14.8151C4.36155 14.8364 4.37841 14.8643 4.3848 14.8837L2.48483 15.5084Z"),u(l,"fill","currentColor"),u(t,"cx","7.5"),u(t,"cy","11.5"),u(t,"r","1.5"),u(t,"fill","currentColor"),u(n,"cx","11.5"),u(n,"cy","8.5"),u(n,"r","1.5"),u(n,"fill","currentColor"),u(r,"cx","16"),u(r,"cy","16"),u(r,"r","1"),u(r,"fill","currentColor"),u(o,"cx","16.5"),u(o,"cy","11"),u(o,"r","1.5"),u(o,"fill","currentColor"),u(e,"width",s[0]),u(e,"height",s[0]),u(e,"viewBox","0 0 24 24"),u(e,"fill","none"),u(e,"xmlns","http://www.w3.org/2000/svg")},m(i,f){L(i,e,f),M(e,l),M(e,t),M(e,n),M(e,r),M(e,o)},p(i,[f]){f&1&&u(e,"width",i[0]),f&1&&u(e,"height",i[0])},i:N,o:N,d(i){i&&c(e)}}}function Ne(s,e,l){let{size:t=24}=e;return s.$$set=n=>{"size"in n&&l(0,t=n.size)},[t]}class ze extends V{constructor(e){super();P(this,e,Ne,Me,A,{size:0})}}function De(s){let e,l,t;return{c(){e=b("svg"),l=b("path"),t=b("path"),this.h()},l(n){e=E(n,"svg",{width:!0,height:!0,viewBox:!0,fill:!0,xmlns:!0});var r=$(e);l=E(r,"path",{d:!0,fill:!0}),$(l).forEach(c),t=E(r,"path",{"fill-rule":!0,"clip-rule":!0,d:!0,fill:!0}),$(t).forEach(c),r.forEach(c),this.h()},h(){u(l,"d","M8.06171 3.50506C8.28197 2.63988 9.06626 2 10 2H14C14.9337 2 15.718 2.63988 15.9383 3.50506C16.0064 3.77267 16.2239 4 16.5 4H19.5C19.7761 4 20 4.22386 20 4.5C20 4.77614 19.7761 5 19.5 5H4.5C4.22386 5 4 4.77614 4 4.5C4 4.22386 4.22386 4 4.5 4H7.5C7.77614 4 7.99359 3.77267 8.06171 3.50506Z"),u(l,"fill","currentColor"),u(t,"fill-rule","evenodd"),u(t,"clip-rule","evenodd"),u(t,"d","M5 19V7C5 6.44772 5.44772 6 6 6H18C18.5523 6 19 6.44772 19 7V19C19 20.6569 17.6569 22 16 22H8C6.34315 22 5 20.6569 5 19ZM16.7071 9.29289C17.0976 9.68342 17.0976 10.3166 16.7071 10.7071L13.4142 14L16.7071 17.2929C17.0976 17.6834 17.0976 18.3166 16.7071 18.7071C16.3166 19.0976 15.6834 19.0976 15.2929 18.7071L12 15.4142L8.70711 18.7071C8.31658 19.0976 7.68342 19.0976 7.29289 18.7071C6.90237 18.3166 6.90237 17.6834 7.29289 17.2929L10.5858 14L7.29289 10.7071C6.90237 10.3166 6.90237 9.68342 7.29289 9.29289C7.68342 8.90237 8.31658 8.90237 8.70711 9.29289L12 12.5858L15.2929 9.29289C15.6834 8.90237 16.3166 8.90237 16.7071 9.29289Z"),u(t,"fill","currentColor"),u(e,"width",s[0]),u(e,"height",s[0]),u(e,"viewBox","0 0 24 24"),u(e,"fill","none"),u(e,"xmlns","http://www.w3.org/2000/svg")},m(n,r){L(n,e,r),M(e,l),M(e,t)},p(n,[r]){r&1&&u(e,"width",n[0]),r&1&&u(e,"height",n[0])},i:N,o:N,d(n){n&&c(e)}}}function He(s,e,l){let{size:t=24}=e;return s.$$set=n=>{"size"in n&&l(0,t=n.size)},[t]}class Ze extends V{constructor(e){super();P(this,e,He,De,A,{size:0})}}function ye(s){let e,l;return{c(){e=b("svg"),l=b("path"),this.h()},l(t){e=E(t,"svg",{width:!0,height:!0,viewBox:!0,fill:!0,xmlns:!0});var n=$(e);l=E(n,"path",{"fill-rule":!0,"clip-rule":!0,d:!0,fill:!0}),$(l).forEach(c),n.forEach(c),this.h()},h(){u(l,"fill-rule","evenodd"),u(l,"clip-rule","evenodd"),u(l,"d","M10 2C9.06626 2 8.28197 2.63988 8.06171 3.50506C7.99359 3.77267 7.77614 4 7.5 4H4.5C4.22386 4 4 4.22386 4 4.5C4 4.77614 4.22386 5 4.5 5H19.5C19.7761 5 20 4.77614 20 4.5C20 4.22386 19.7761 4 19.5 4H16.5C16.2239 4 16.0064 3.77267 15.9383 3.50506C15.718 2.63988 14.9337 2 14 2H10ZM5 7V19C5 20.6569 6.34315 22 8 22H16C17.6569 22 19 20.6569 19 19V7C19 6.44772 18.5523 6 18 6H6C5.44772 6 5 6.44772 5 7ZM12.3143 7.82463C12.1407 7.65107 11.8593 7.65107 11.6857 7.82463L8.13022 11.3802C8.00311 11.5073 7.96508 11.6984 8.03387 11.8645C8.10267 12.0306 8.26473 12.1389 8.44449 12.1389H9.77781L9.77781 15.6944C9.77781 15.9399 9.97679 16.1388 10.2223 16.1388H13.7778C14.0232 16.1388 14.2222 15.9399 14.2222 15.6944L14.2222 12.1389H15.5555C15.7353 12.1389 15.8974 12.0306 15.9662 11.8645C16.0349 11.6984 15.9969 11.5073 15.8698 11.3802L12.3143 7.82463ZM9.7778 18.3611C9.7778 18.6065 9.97678 18.8055 10.2222 18.8055H13.7778C14.0232 18.8055 14.2222 18.6065 14.2222 18.3611V17.4722C14.2222 17.2267 14.0232 17.0277 13.7778 17.0277H10.2222C9.97678 17.0277 9.7778 17.2267 9.7778 17.4722V18.3611Z"),u(l,"fill","currentColor"),u(e,"width",s[0]),u(e,"height",s[0]),u(e,"viewBox","0 0 24 24"),u(e,"fill","none"),u(e,"xmlns","http://www.w3.org/2000/svg")},m(t,n){L(t,e,n),M(e,l)},p(t,[n]){n&1&&u(e,"width",t[0]),n&1&&u(e,"height",t[0])},i:N,o:N,d(t){t&&c(e)}}}function Be(s,e,l){let{size:t=24}=e;return s.$$set=n=>{"size"in n&&l(0,t=n.size)},[t]}class Ie extends V{constructor(e){super();P(this,e,Be,ye,A,{size:0})}}function K(s){let e,l,t,n,r;return l=new be({props:{filled:s[0].status===k.PINNED,size:18}}),{c(){e=I("button"),z(l.$$.fragment),this.h()},l(o){e=T(o,"BUTTON",{class:!0});var i=$(e);D(l.$$.fragment,i),i.forEach(c),this.h()},h(){u(e,"class","pin-button hover-visible svelte-1mlol68")},m(o,i){L(o,e,i),H(l,e,null),t=!0,n||(r=S(e,"click",s[1]),n=!0)},p(o,i){const f={};i&1&&(f.filled=o[0].status===k.PINNED),l.$set(f)},i(o){t||(d(l.$$.fragment,o),t=!0)},o(o){p(l.$$.fragment,o),t=!1},d(o){o&&c(e),Z(l),n=!1,r()}}}function Q(s){let e,l=s[0].title+"",t;return{c(){e=I("h4"),t=ne(l),this.h()},l(n){e=T(n,"H4",{class:!0});var r=$(e);t=re(r,l),r.forEach(c),this.h()},h(){u(e,"class","title svelte-1mlol68")},m(n,r){L(n,e,r),M(e,t)},p(n,r){r&1&&l!==(l=n[0].title+"")&&se(t,l)},d(n){n&&c(e)}}}function X(s){let e,l=s[0].content+"",t;return{c(){e=I("p"),t=ne(l),this.h()},l(n){e=T(n,"P",{class:!0});var r=$(e);t=re(r,l),r.forEach(c),this.h()},h(){u(e,"class","content svelte-1mlol68")},m(n,r){L(n,e,r),M(e,t)},p(n,r){r&1&&l!==(l=n[0].content+"")&&se(t,l)},d(n){n&&c(e)}}}function Te(s){let e,l,t,n,r,o;return e=new W({props:{$$slots:{default:[Ae]},$$scope:{ctx:s}}}),e.$on("click",s[6]),t=new W({props:{$$slots:{default:[Re]},$$scope:{ctx:s}}}),t.$on("click",s[3]),r=new W({props:{$$slots:{default:[Ue]},$$scope:{ctx:s}}}),r.$on("click",s[2]),{c(){z(e.$$.fragment),l=F(),z(t.$$.fragment),n=F(),z(r.$$.fragment)},l(i){D(e.$$.fragment,i),l=O(i),D(t.$$.fragment,i),n=O(i),D(r.$$.fragment,i)},m(i,f){H(e,i,f),L(i,l,f),H(t,i,f),L(i,n,f),H(r,i,f),o=!0},p(i,f){const v={};f&256&&(v.$$scope={dirty:f,ctx:i}),e.$set(v);const h={};f&256&&(h.$$scope={dirty:f,ctx:i}),t.$set(h);const m={};f&256&&(m.$$scope={dirty:f,ctx:i}),r.$set(m)},i(i){o||(d(e.$$.fragment,i),d(t.$$.fragment,i),d(r.$$.fragment,i),o=!0)},o(i){p(e.$$.fragment,i),p(t.$$.fragment,i),p(r.$$.fragment,i),o=!1},d(i){Z(e,i),i&&c(l),Z(t,i),i&&c(n),Z(r,i)}}}function Ve(s){let e,l;return e=new W({props:{$$slots:{default:[Fe]},$$scope:{ctx:s}}}),e.$on("click",s[5]),{c(){z(e.$$.fragment)},l(t){D(e.$$.fragment,t)},m(t,n){H(e,t,n),l=!0},p(t,n){const r={};n&256&&(r.$$scope={dirty:n,ctx:t}),e.$set(r)},i(t){l||(d(e.$$.fragment,t),l=!0)},o(t){p(e.$$.fragment,t),l=!1},d(t){Z(e,t)}}}function Pe(s){let e,l,t,n;return e=new W({props:{$$slots:{default:[Oe]},$$scope:{ctx:s}}}),e.$on("click",s[4]),t=new W({props:{$$slots:{default:[We]},$$scope:{ctx:s}}}),t.$on("click",s[5]),{c(){z(e.$$.fragment),l=F(),z(t.$$.fragment)},l(r){D(e.$$.fragment,r),l=O(r),D(t.$$.fragment,r)},m(r,o){H(e,r,o),L(r,l,o),H(t,r,o),n=!0},p(r,o){const i={};o&256&&(i.$$scope={dirty:o,ctx:r}),e.$set(i);const f={};o&256&&(f.$$scope={dirty:o,ctx:r}),t.$set(f)},i(r){n||(d(e.$$.fragment,r),d(t.$$.fragment,r),n=!0)},o(r){p(e.$$.fragment,r),p(t.$$.fragment,r),n=!1},d(r){Z(e,r),r&&c(l),Z(t,r)}}}function Ae(s){let e,l;return e=new ze({props:{size:18}}),{c(){z(e.$$.fragment)},l(t){D(e.$$.fragment,t)},m(t,n){H(e,t,n),l=!0},p:N,i(t){l||(d(e.$$.fragment,t),l=!0)},o(t){p(e.$$.fragment,t),l=!1},d(t){Z(e,t)}}}function Re(s){let e,l;return e=new ie({props:{size:18}}),{c(){z(e.$$.fragment)},l(t){D(e.$$.fragment,t)},m(t,n){H(e,t,n),l=!0},p:N,i(t){l||(d(e.$$.fragment,t),l=!0)},o(t){p(e.$$.fragment,t),l=!1},d(t){Z(e,t)}}}function Ue(s){let e,l;return e=new pe({props:{size:18}}),{c(){z(e.$$.fragment)},l(t){D(e.$$.fragment,t)},m(t,n){H(e,t,n),l=!0},p:N,i(t){l||(d(e.$$.fragment,t),l=!0)},o(t){p(e.$$.fragment,t),l=!1},d(t){Z(e,t)}}}function Fe(s){let e,l;return e=new ie({props:{size:18}}),{c(){z(e.$$.fragment)},l(t){D(e.$$.fragment,t)},m(t,n){H(e,t,n),l=!0},p:N,i(t){l||(d(e.$$.fragment,t),l=!0)},o(t){p(e.$$.fragment,t),l=!1},d(t){Z(e,t)}}}function Oe(s){let e,l;return e=new Ze({props:{size:18}}),{c(){z(e.$$.fragment)},l(t){D(e.$$.fragment,t)},m(t,n){H(e,t,n),l=!0},p:N,i(t){l||(d(e.$$.fragment,t),l=!0)},o(t){p(e.$$.fragment,t),l=!1},d(t){Z(e,t)}}}function We(s){let e,l;return e=new Ie({props:{size:18}}),{c(){z(e.$$.fragment)},l(t){D(e.$$.fragment,t)},m(t,n){H(e,t,n),l=!0},p:N,i(t){l||(d(e.$$.fragment,t),l=!0)},o(t){p(e.$$.fragment,t),l=!1},d(t){Z(e,t)}}}function Se(s){let e,l,t,n,r,o,i,f,v,h=(s[0].status===k.DEFAULT||s[0].status===k.PINNED)&&K(s),m=s[0].title&&Q(s),C=s[0].content&&X(s);const g=[Pe,Ve,Te],w=[];function y(a,_){return a[0].status===k.DELETED?0:a[0].status===k.ARCHIVED?1:2}return o=y(s),i=w[o]=g[o](s),{c(){e=I("div"),h&&h.c(),l=F(),m&&m.c(),t=F(),C&&C.c(),n=F(),r=I("div"),i.c(),this.h()},l(a){e=T(a,"DIV",{class:!0,style:!0});var _=$(e);h&&h.l(_),l=O(_),m&&m.l(_),t=O(_),C&&C.l(_),n=O(_),r=T(_,"DIV",{class:!0});var B=$(r);i.l(B),B.forEach(c),_.forEach(c),this.h()},h(){u(r,"class","icon-bar hover-visible svelte-1mlol68"),u(e,"class","root svelte-1mlol68"),u(e,"style",f=s[0].color?`--bg-color: ${s[0].color}`:"")},m(a,_){L(a,e,_),h&&h.m(e,null),M(e,l),m&&m.m(e,null),M(e,t),C&&C.m(e,null),M(e,n),M(e,r),w[o].m(r,null),v=!0},p(a,[_]){a[0].status===k.DEFAULT||a[0].status===k.PINNED?h?(h.p(a,_),_&1&&d(h,1)):(h=K(a),h.c(),d(h,1),h.m(e,l)):h&&(G(),p(h,1,1,()=>{h=null}),J()),a[0].title?m?m.p(a,_):(m=Q(a),m.c(),m.m(e,t)):m&&(m.d(1),m=null),a[0].content?C?C.p(a,_):(C=X(a),C.c(),C.m(e,n)):C&&(C.d(1),C=null);let B=o;o=y(a),o===B?w[o].p(a,_):(G(),p(w[B],1,1,()=>{w[B]=null}),J(),i=w[o],i?i.p(a,_):(i=w[o]=g[o](a),i.c()),d(i,1),i.m(r,null)),(!v||_&1&&f!==(f=a[0].color?`--bg-color: ${a[0].color}`:""))&&u(e,"style",f)},i(a){v||(d(h),d(i),v=!0)},o(a){p(h),p(i),v=!1},d(a){a&&c(e),h&&h.d(),m&&m.d(),C&&C.d(),w[o].d()}}}function qe(s,e,l){let{note:t}=e,{updateNote:n}=e;const r=()=>{n(U(R({},t),{status:t.status===k.PINNED?k.DEFAULT:k.PINNED}))},o=()=>{n(U(R({},t),{status:k.DELETED}))},i=()=>{n(U(R({},t),{status:k.ARCHIVED}))},f=()=>{n(null)},v=()=>{n(U(R({},t),{status:k.DEFAULT}))},h=()=>{n(U(R({},t),{color:"#2F4439"}))};return s.$$set=m=>{"note"in m&&l(0,t=m.note),"updateNote"in m&&l(7,n=m.updateNote)},[t,r,o,i,f,v,h,n]}class Ye extends V{constructor(e){super();P(this,e,qe,Se,A,{note:0,updateNote:7})}}const je=s=>({}),Y=s=>({itemClass:!0});function Ge(s){let e,l,t,n;const r=s[6].default,o=x(r,s,s[5],Y);return{c(){e=I("div"),o&&o.c(),this.h()},l(i){e=T(i,"DIV",{class:!0});var f=$(e);o&&o.l(f),f.forEach(c),this.h()},h(){u(e,"class","container svelte-11h8c70")},m(i,f){L(i,e,f),o&&o.m(e,null),s[7](e),l=!0,t||(n=S(window,"resize",s[1]),t=!0)},p(i,[f]){o&&o.p&&(!l||f&32)&&ee(o,r,i,i[5],l?le(r,i[5],f,je):te(i[5]),Y)},i(i){l||(d(o,i),l=!0)},o(i){p(o,i),l=!1},d(i){i&&c(e),o&&o.d(i),s[7](null),t=!1,n()}}}function Je(s,e,l){let{$$slots:t={},$$scope:n}=e,{spacing:r=16}=e,{itemWidth:o=240}=e,{container:i}=e,f,v;const h=g=>{if(!f)return;const w=new Array(g).fill(-r);f.childNodes.forEach((y,a)=>{const _=w.indexOf(Math.min(...w)),B=_*(o+r),oe=w[_]+r;if(y.style&&y.getBoundingClientRect){y.style.transform=`translate(${B}px, ${oe}px)`,y.style.width=v===1?`${i.getBoundingClientRect().width}px`:`${o}px`;const ue=y.getBoundingClientRect().height;w[_]+=ue+r,l(0,f.style.height=`${Math.max(...w)}px`,f)}})},m=()=>{if(i&&f){const g=i.getBoundingClientRect().width;v=Math.floor(g/(o+r)),v===1?l(0,f.style.width=`${g}px`,f):l(0,f.style.width=`${v*(o+r)-r}px`,f)}};$e(m),de(()=>h(v));function C(g){ge[g?"unshift":"push"](()=>{f=g,l(0,f)})}return s.$$set=g=>{"spacing"in g&&l(2,r=g.spacing),"itemWidth"in g&&l(3,o=g.itemWidth),"container"in g&&l(4,i=g.container),"$$scope"in g&&l(5,n=g.$$scope)},[f,m,r,o,i,n,t,C]}class xe extends V{constructor(e){super();P(this,e,Je,Ge,A,{spacing:2,itemWidth:3,container:4})}}export{xe as M,Ye as N};
