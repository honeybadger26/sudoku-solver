(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{5353:(e,r,t)=>{Promise.resolve().then(t.bind(t,6195))},6195:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>d});var l=t(5155);function o(e){let{grid:r,onCellChange:t}=e;return(0,l.jsx)("table",{className:"mt-10",children:(0,l.jsx)("tbody",{children:r.map((e,r)=>(0,l.jsx)("tr",{children:e.map((e,o)=>(0,l.jsx)("td",{className:"p-0 ".concat((0===r||3===r||6===r?" border-t-2 border-t-slate-300 ":"")+(8===r?" border-b-2 border-b-slate-300 ":"")," ").concat((0===o||3===o||6===o?" border-l-2 border-l-slate-300 ":"")+(8===o?" border-r-2 border-r-slate-300 ":"")),children:t?(0,l.jsx)("input",{className:"border-2 border-slate-500 bg-transparent text-center size-12",value:e,onChange:e=>t({row:r,col:o,value:e.target.value})}):(0,l.jsx)("div",{className:"size-12 flex justify-center items-center border-2 border-slate-700",children:e})},o))},r))})})}let s=[{rows:[0,2],cols:[0,2]},{rows:[0,2],cols:[3,5]},{rows:[0,2],cols:[6,8]},{rows:[3,5],cols:[0,2]},{rows:[3,5],cols:[3,5]},{rows:[3,5],cols:[6,8]},{rows:[6,8],cols:[0,2]},{rows:[6,8],cols:[3,5]},{rows:[6,8],cols:[6,8]}],n=Array.from(Array(9)).map((e,r)=>"".concat(r+1));function c(e,r){for(let t=0;t<s.length;t++){let[l,o]=s[t].rows,[n,c]=s[t].cols;if(l<=e&&e<=o&&n<=r&&r<=c)return t}return -1}function i(e,r,t){return!(e[r.row].indexOf(t)>=0||e.map(e=>e[r.col]).indexOf(t)>=0||function(e,r,t){let[l,o]=s[r].rows,[n,c]=s[r].cols;for(let r=l;r<=o;r++)for(let l=n;l<=c;l++)if(e[r][l]===t)return!0;return!1}(e,r.section,t))}var a=t(2115);let u=["",...n];function d(){let[e,r]=(0,a.useState)(Array.from(Array(9)).map(()=>Array(9).fill(""))),[t,s]=(0,a.useState)(),[d,f]=(0,a.useState)(!1),[x,b]=(0,a.useState)(!0),[m,h]=(0,a.useState)(!0);return(0,l.jsxs)("div",{className:"font-mono w-full flex flex-col items-center",children:[(0,l.jsx)("h1",{className:"pt-5 text-4xl font-semibold",children:"Sudoku Solver"}),(0,l.jsx)("p",{className:"pt-2 text-sm",children:"By Simon Schippl"}),(0,l.jsxs)("div",{className:"flex gap-10 items-center",children:[(0,l.jsx)(o,{grid:e,onCellChange:function(t){let{row:l,col:o,value:n}=t;if(-1===u.indexOf(n))return;s(void 0);let a=structuredClone(e);a[l][o]=n,r(a),b(function(e){for(let r=0;r<e.length;r++)for(let t=0;t<e[r].length;t++){let l=e[r][t];if(""===l)continue;let o={row:r,col:t,section:c(r,t)},s=structuredClone(e);if(s[r][t]="",!i(s,o,l))return!1}return!0}(a))}}),t&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{children:"->"}),(0,l.jsx)(o,{grid:t})]})]}),!m&&(0,l.jsx)("div",{className:"text-rose-500",children:"No solution found"}),x?(0,l.jsx)("button",{disabled:d,className:"mt-10 px-6 py-3 bg-blue-500 text-slate-100 disabled:bg-blue-800 active:bg-blue-600",onClick:function(){f(!0);let r=function e(r){let t=function(e){for(let r=0;r<e.length;r++)for(let t=0;t<e[r].length;t++)if(""===e[r][t])return{row:r,col:t,section:c(r,t)}}(r);if(!t)return!function(e){for(let r of e)for(let e of r)if(""===e)return!1;return!0}(r)?null:r;for(let l of n)if(i(r,t,l)){let o=structuredClone(r);o[t.row][t.col]=l;let s=e(o);if(s)return s}return null}(e);r&&s(r),h(!!r),f(!1)},children:d?"Loading...":"Solve"}):(0,l.jsx)("div",{className:"mt-10 text-rose-500",children:"Grid is invalid"})]})}}},e=>{var r=r=>e(e.s=r);e.O(0,[441,517,358],()=>r(5353)),_N_E=e.O()}]);