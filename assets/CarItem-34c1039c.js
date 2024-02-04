import{s as l,u as S,a as k,x as D,r as h,j as s,C as E,y as I,I as L,H as M,z as $,D as H,T as W,A as b,S as z,B as P,E as j,F as e,G as T,J as B,K as A,M as G,N as J}from"./index-09baad70.js";const N=l.ul`
  display: flex;
  flex-wrap: wrap;
  row-gap: 50px;
  column-gap: 29px;
  margin-bottom: 100px;
`,R=l.button`
  display: ${t=>t.display||"block"};
  color: #3470ff;
  font-size: 16px;
  font-weight: 500;
  text-decoration-line: underline;
  margin: 0 auto;
  padding: 15px;
  cursor: pointer;

  &:hover,
  &:focus {
    color: #3470ff;
  }
`,q=l.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 22px;
  color: #3470ff75;
  margin: 0 auto;
`,O=({car:t})=>{const r=S(),a=k(D),{id:i,make:c,model:d,year:f,img:u,rentalPrice:m,rentalCompany:C,type:y,functionalities:g,address:n}=t,x=n==null?void 0:n.split(", ").slice(-2),[o,p]=h.useState(!1);h.useEffect(()=>{a!=null&&a.some(w=>w.id===i)?p(!0):p(!1)},[a,i]);const F=()=>{r(o?B(i):A(t))},v=()=>{r(G(!0)),r(J(t))};return s.jsxs(E,{children:[s.jsxs(I,{children:[s.jsx(L,{$url:u,children:s.jsx(M,{onClick:F,fill:o?"#3470FF":"none",stroke:o?"#3470FF":" #FFF",children:s.jsx("use",{href:`${$}#icon-heart`})})}),s.jsxs(H,{children:[s.jsxs(W,{children:[s.jsxs(b,{children:[c," ",s.jsx(z,{children:d}),", ",f]}),s.jsx("p",{children:m})]}),s.jsxs(P,{height:"36px",children:[s.jsxs(j,{$overflow:"hidden",children:[s.jsx(e,{children:x[0]}),s.jsx(e,{children:x[1]}),s.jsx(e,{children:C}),s.jsx(e,{children:"Premium"})]}),s.jsxs(j,{$overflow:"hidden",children:[s.jsx(e,{children:y}),s.jsx(e,{children:c}),s.jsx(e,{children:d}),s.jsx(e,{children:i}),s.jsx(e,{children:g[0]})]})]})]})]}),s.jsx(T,{onClick:v,children:"Learn more"})]})};export{N as C,q as E,R as L,O as a};
