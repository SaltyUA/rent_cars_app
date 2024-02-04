import{s as r,L as e,j as o}from"./index-09baad70.js";import{C as a}from"./App.styled-c7530770.js";const n="/rent_cars_app/assets/bc-des-x1-ace53c20.webp",t=r.div`
  background: radial-gradient(
      circle,
      rgba(0, 0, 0, 0.3785889355742297) 0%,
      rgba(49, 110, 158, 0.5) 48%,
      rgba(0, 0, 0, 0.9332107843137255) 100%
    ),
    url(${n});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: top right;
  background-color: #313131;
  height: 90vh;
`,i=r.h1`
  font-size: 50px;
  font-weight: 600;
  color: #121417;
  text-shadow:
    0 0 5px #00baff,
    0 0 10px #00baff,
    0 0 20px #00baff,
    0 0 40px #00baff,
    0 0 80px #00baff;
`,c=r.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  color: #ffffff;
  width: 350px;
`,s=r(e)`
  display: inline-block;
  margin-top: 20px;

  font-weight: 600;
  font-weight: 14px;
  line-height: calc(20 / 14);
  color: #fff;

  padding: 12px 50px;
  border-radius: 12px;

  background-color: #3470ff;

  transition: background-color 0.3s;

  &:is(:hover, :focus) {
    background-color: #0b44cd;
  }
`,l=()=>o.jsx(t,{children:o.jsxs(a,{children:[o.jsx(i,{children:"Take wheels anywhere"}),o.jsxs(c,{children:["We offer car rental in any city of Ukraine. ",o.jsx("br",{}),"You can choose any car and we will deliver it to you and give you the keys for use."]}),o.jsx(s,{to:"/catalog",children:"Choose a car"})]})});export{l as default};
