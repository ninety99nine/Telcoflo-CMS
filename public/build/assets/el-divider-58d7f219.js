import{b as c,d as p,u,_ as m,w as v}from"./base-8c06a7ab.js";import{s as n,k as f,o as s,e as o,n as i,u as r,r as y,f as S,y as _}from"./app-aa3a5b47.js";const b=c({direction:{type:String,values:["horizontal","vertical"],default:"horizontal"},contentPosition:{type:String,values:["left","center","right"],default:"center"},borderStyle:{type:p(String),default:"solid"}}),h=n({name:"ElDivider"}),k=n({...h,props:b,setup(a){const l=a,e=u("divider"),d=f(()=>e.cssVar({"border-style":l.borderStyle}));return(t,P)=>(s(),o("div",{class:i([r(e).b(),r(e).m(t.direction)]),style:_(r(d)),role:"separator"},[t.$slots.default&&t.direction!=="vertical"?(s(),o("div",{key:0,class:i([r(e).e("text"),r(e).is(t.contentPosition)])},[y(t.$slots,"default")],2)):S("v-if",!0)],6))}});var g=m(k,[["__file","/home/runner/work/element-plus/element-plus/packages/components/divider/src/divider.vue"]]);const E=v(g);export{E};
