(this["webpackJsonpifteda.github.io"]=this["webpackJsonpifteda.github.io"]||[]).push([[0],{45:function(e,a,t){e.exports=t.p+"static/media/logo.c36fd883.svg"},56:function(e,a,t){e.exports=t.p+"static/media/wordmark.da6fcb89.svg"},59:function(e,a,t){e.exports=t.p+"static/media/headshot.3f20321a.jpg"},60:function(e,a,t){e.exports=t(87)},68:function(e,a,t){},74:function(e,a,t){},76:function(e,a,t){},77:function(e,a,t){},78:function(e,a,t){},79:function(e,a,t){},80:function(e,a,t){},81:function(e,a,t){},85:function(e,a,t){},87:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),c=t(55),r=t.n(c),s=t(17),m=t(5),i=t(91),o=t(95),u=t(98),d=t(56),E=t.n(d);t(68);var f=()=>n.a.createElement(o.a,{collapseOnSelect:!0,expand:"lg",variant:"dark"},n.a.createElement(o.a.Brand,{href:"https://ifteda.com/"},n.a.createElement("img",{className:"nav-wordmark",src:E.a,alt:"ifteda"})),n.a.createElement(o.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),n.a.createElement(o.a.Collapse,{id:"responsive-navbar-nav"},n.a.createElement(u.a,{className:"justify-content-end",style:{width:"100%"}},n.a.createElement(s.b,{className:"main-nav",to:"/education"},"Education"),n.a.createElement(s.b,{className:"main-nav",to:"/experience"},"Experience"),n.a.createElement(s.b,{className:"main-nav",to:"/projects"},"Projects"),n.a.createElement(s.b,{className:"main-nav",to:"/skills"},"Skills"),n.a.createElement(s.b,{className:"main-nav",to:"/more"},"More")))),g=t(89),b=t(90),h=t(57),p=t(50),v=t(58),N=t(52);t(74);var j=()=>n.a.createElement(g.a,{fluid:!0,className:"footer"},n.a.createElement(b.a,null,n.a.createElement(h.a,{className:"contact"},n.a.createElement("div",null,n.a.createElement("a",{href:"mailto:contact@ifteda.com",target:"_blank",rel:"noopener noreferrer"},n.a.createElement(p.a,{icon:v.a,className:"footer-icon"})),n.a.createElement("a",{href:"https://www.linkedin.com/in/ifteda/",target:"_blank",rel:"noopener noreferrer"},n.a.createElement(p.a,{icon:N.b,className:"footer-icon"})),n.a.createElement("a",{href:"https://github.com/ifteda",target:"_blank",rel:"noopener noreferrer"},n.a.createElement(p.a,{icon:N.a,className:"footer-icon"})))))),w=t(45),y=t.n(w),O=t(75);O.configure({apiKey:"patqFH8vnDzJygmLi.c6f0b8d7d41e6a042e94e99ab795e07bf875583f31902e057c8377b0ea8a70e1"});var k=O.base("appppWf6pgb7Nkt1J");t(76);var S=()=>{document.title="Ifteda";const[e,a]=Object(l.useState)([]);return Object(l.useEffect)(()=>{k("greeting").select({view:"active"}).eachPage((e,t)=>{a(e),t()})},[]),n.a.createElement("div",{className:"home"},n.a.createElement(f,null),n.a.createElement("div",{className:"text-container"},n.a.createElement("div",{className:"greeting-container"},e.map(e=>n.a.createElement("span",{className:"greeting"},e.fields.greeting)))),n.a.createElement(i.a,{fluid:!0,className:"logo",src:y.a}))},L=t(92),C=t(100),x=t(99);t(77);const T=e=>n.a.createElement("div",{className:"page"},n.a.createElement(f,null),e.children,n.a.createElement(j,null));var H=()=>{const[e,a]=Object(l.useState)(),[t,c]=Object(l.useState)(!0),[r,s]=Object(l.useState)([]),[m,o]=Object(l.useState)(!1),[u,d]=Object(l.useState)({});return Object(l.useEffect)(()=>{m||a("Education"),document.title=e},[m,e]),Object(l.useEffect)(()=>{k("education").select({view:"active"}).eachPage((e,a)=>{s(e),c(!1),a()})},[]),n.a.createElement(T,null,t?n.a.createElement(g.a,{fluid:!0},n.a.createElement(b.a,{className:"spinner-row"},n.a.createElement(L.a,{animation:"border",role:"status"},n.a.createElement("span",{className:"visually-hidden"},"Loading...")))):n.a.createElement(C.a,{fade:!0},r.map(e=>n.a.createElement(C.a.Item,{key:e.id,style:{textAlign:"center"}},n.a.createElement("button",{onClick:()=>(e=>{a(e.pageTitle),o(!0),d(e)})(e.fields)},n.a.createElement(n.a.Fragment,null,n.a.createElement(i.a,{fluid:!0,className:"carousel-img",src:e.fields.imgURL}),n.a.createElement(C.a.Caption,null,n.a.createElement("h3",null,e.fields.heading),n.a.createElement("p",null,e.fields.subheading)))),n.a.createElement(x.a,{show:m,onHide:()=>o(!1),size:"xl",fullscreen:"md-down","aria-labelledby":"contained-modal-title-vcenter",centered:!0,scrollable:!0},n.a.createElement(x.a.Header,{closeButton:!0,closeVariant:"white",style:{backgroundImage:"url(".concat(u.imgURL,")")}},n.a.createElement(x.a.Title,{id:"contained-modal-title-vcenter"},n.a.createElement("h1",null,u.heading),n.a.createElement("h3",null,u.subheading),n.a.createElement("h4",null,u.dates))),n.a.createElement(x.a.Body,null,n.a.createElement("div",{dangerouslySetInnerHTML:{__html:u.detailsHTML}})))))))};var I=()=>{const[e,a]=Object(l.useState)(),[t,c]=Object(l.useState)(!0),[r,s]=Object(l.useState)([]),[m,o]=Object(l.useState)(!1),[u,d]=Object(l.useState)({});return Object(l.useEffect)(()=>{m||a("Experience"),document.title=e},[m,e]),Object(l.useEffect)(()=>{k("experience").select({view:"active"}).eachPage((e,a)=>{s(e),c(!1),a()})},[]),n.a.createElement(T,null,t?n.a.createElement(g.a,{fluid:!0},n.a.createElement(b.a,{className:"spinner-row"},n.a.createElement(L.a,{animation:"border",role:"status"},n.a.createElement("span",{className:"visually-hidden"},"Loading...")))):n.a.createElement(C.a,{fade:!0},r.map(e=>n.a.createElement(C.a.Item,{key:e.id,style:{textAlign:"center"}},n.a.createElement("button",{onClick:()=>(e=>{a(e.pageTitle),o(!0),d(e)})(e.fields)},n.a.createElement(n.a.Fragment,null,n.a.createElement(i.a,{fluid:!0,className:"carousel-img",src:e.fields.imgURL}),n.a.createElement(C.a.Caption,null,n.a.createElement("h3",null,e.fields.heading),n.a.createElement("p",null,e.fields.subheading)))),n.a.createElement(x.a,{show:m,onHide:()=>o(!1),size:"xl",fullscreen:"md-down","aria-labelledby":"contained-modal-title-vcenter",centered:!0,scrollable:!0},n.a.createElement(x.a.Header,{closeButton:!0,closeVariant:"white",style:{backgroundImage:"url(".concat(u.imgURL,")")}},n.a.createElement(x.a.Title,{id:"contained-modal-title-vcenter"},n.a.createElement("h1",null,u.heading),n.a.createElement("h3",null,u.subheading),n.a.createElement("h4",null,u.dates))),n.a.createElement(x.a.Body,null,n.a.createElement("div",{dangerouslySetInnerHTML:{__html:u.detailsHTML}})))))))};var P=()=>{const[e,a]=Object(l.useState)(),[t,c]=Object(l.useState)(!0),[r,s]=Object(l.useState)([]),[m,o]=Object(l.useState)(!1),[u,d]=Object(l.useState)({});return Object(l.useEffect)(()=>{m||a("Projects"),document.title=e},[m,e]),Object(l.useEffect)(()=>{k("projects").select({view:"active"}).eachPage((e,a)=>{s(e),c(!1),a()})},[]),n.a.createElement(T,null,t?n.a.createElement(g.a,{fluid:!0},n.a.createElement(b.a,{className:"spinner-row"},n.a.createElement(L.a,{animation:"border",role:"status"},n.a.createElement("span",{className:"visually-hidden"},"Loading...")))):n.a.createElement(C.a,{fade:!0},r.map(e=>n.a.createElement(C.a.Item,{key:e.id,style:{textAlign:"center"}},n.a.createElement("button",{onClick:()=>(e=>{a(e.pageTitle),o(!0),d(e)})(e.fields)},n.a.createElement(n.a.Fragment,null,n.a.createElement(i.a,{fluid:!0,className:"carousel-img",src:e.fields.imgURL}),n.a.createElement(C.a.Caption,null,n.a.createElement("h3",null,e.fields.heading),n.a.createElement("p",null,e.fields.subheading)))),n.a.createElement(x.a,{show:m,onHide:()=>o(!1),size:"xl",fullscreen:"md-down","aria-labelledby":"contained-modal-title-vcenter",centered:!0,scrollable:!0},n.a.createElement(x.a.Header,{closeButton:!0,closeVariant:"white",style:{backgroundImage:"url(".concat(u.imgURL,")")}},n.a.createElement(x.a.Title,{id:"contained-modal-title-vcenter"},n.a.createElement("h1",null,u.heading),n.a.createElement("h3",null,u.subheading),n.a.createElement("h4",null,u.dates))),n.a.createElement(x.a.Body,null,n.a.createElement("div",{dangerouslySetInnerHTML:{__html:u.detailsHTML}})))))))},F=t(96),M=t(93),R=t(94),B=t(39);t(78);var _=()=>{document.title="Skills";const[e,a]=Object(l.useState)(!0),[t,c]=Object(l.useState)([]),[r,s]=Object(l.useState)(""),[m,i]=Object(l.useState)(1);return Object(l.useEffect)(()=>{k("skills").select({view:"active"}).eachPage((e,t)=>{c(e),a(!1),t()})},[]),n.a.createElement(T,null,n.a.createElement(g.a,{fluid:!0,className:"skills"},n.a.createElement(F.a,null,n.a.createElement(b.a,{className:"search-row"},n.a.createElement(h.a,{className:"skills-col"},n.a.createElement(F.a.Group,{className:"mb-3"},n.a.createElement(F.a.Control,{value:r,onChange:e=>s(e.target.value),placeholder:"Search..."}))),n.a.createElement(h.a,{className:"skills-col",md:"auto"},"Proficiency:"," ",[...new Array(3)].map((e,a)=>a<m?n.a.createElement(B.a,{className:"rating-active",onClick:()=>{i(a+1)}}):n.a.createElement(B.a,{className:"rating-inactive",onClick:()=>{i(a+1)}}))),n.a.createElement(h.a,{className:"skills-col",md:"auto"},n.a.createElement(F.a.Group,null,n.a.createElement(M.a,{onClick:()=>{s(""),i(1)}},"Clear"))))),e?n.a.createElement(b.a,{className:"spinner-row"},n.a.createElement(L.a,{animation:"border",role:"status"},n.a.createElement("span",{className:"visually-hidden"},"Loading..."))):n.a.createElement(b.a,null,n.a.createElement(R.a,{responsive:!0},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Skill"),n.a.createElement("th",null,"Category"),n.a.createElement("th",null,"Proficiency"))),n.a.createElement("tbody",null,t.map(e=>{return(a=e.fields).proficiencyRating>=m&&(a.skill.toLowerCase().includes(r.toLowerCase())||a.category.toLowerCase().includes(r.toLowerCase())||a.aspect.toLowerCase().includes(r.toLowerCase()))&&n.a.createElement("tr",null,n.a.createElement("td",null,e.fields.skill),n.a.createElement("td",null,e.fields.category),n.a.createElement("td",null,[...new Array(3)].map((a,t)=>t<e.fields.proficiencyRating?n.a.createElement(B.a,{className:"rating-active"}):n.a.createElement(B.a,{className:"rating-inactive"}))));var a}))))))},U=t(97);t(79);var z=e=>{let{item:a}=e;return n.a.createElement("a",{className:"card-link",href:a.link,target:"_blank",rel:"noopener noreferrer"},n.a.createElement(U.a,null,n.a.createElement(U.a.Header,null,n.a.createElement("br",null)),n.a.createElement(U.a.Img,{src:a.imgURL}),n.a.createElement(U.a.ImgOverlay,null,n.a.createElement(U.a.Title,null,a.heading),n.a.createElement(U.a.Text,null,a.subheading)),n.a.createElement(U.a.Footer,null,n.a.createElement("i",null,a.source),n.a.createElement("br",null),a.dateFormatted)))};var A=()=>{document.title="More";const[e,a]=Object(l.useState)(!0),[t,c]=Object(l.useState)([]);return Object(l.useEffect)(()=>{k("news").select({view:"active"}).eachPage((e,t)=>{c(e),a(!1),t()})},[]),n.a.createElement(T,null,n.a.createElement(g.a,{fluid:!0},e?n.a.createElement(b.a,{className:"spinner-row"},n.a.createElement(L.a,{animation:"border",role:"status"},n.a.createElement("span",{className:"visually-hidden"},"Loading..."))):n.a.createElement(b.a,{className:"d-flex justify-content-left"},t.map(e=>n.a.createElement(h.a,{key:e.id,lg:4,md:6,sm:12},n.a.createElement(z,{item:e.fields}))))))},J=t(59),G=t.n(J);t(80);var V=()=>{document.title="Biodata";const[e,a]=Object(l.useState)(!0),[t,c]=Object(l.useState)([]);return Object(l.useEffect)(()=>{k("biodata").select({view:"all"}).eachPage((e,t)=>{c(e),a(!1),t()})},[]),n.a.createElement(T,null,n.a.createElement(g.a,{className:"biodata-container",fluid:!0},n.a.createElement(b.a,{className:"biodata-row"},n.a.createElement(h.a,{className:"biodata-col",md:"auto"},n.a.createElement(i.a,{fluid:!0,roundedCircle:!0,src:G.a})),e?n.a.createElement(h.a,{className:"biodata-col spinner-col"},n.a.createElement(L.a,{animation:"border",role:"status"},n.a.createElement("span",{className:"visually-hidden"},"Loading..."))):n.a.createElement(h.a,{className:"biodata-col",md:"auto"},t.filter(e=>null==e.fields.hide||!1===t.fields.hide).map(e=>n.a.createElement("p",{className:"biodata-content"},n.a.createElement("strong",{className:"biodata-rowName"},e.fields.row,": "," "),e.fields.content))))))};t(81);var q=()=>(document.title="Page Not Found",n.a.createElement(g.a,{fluid:!0,className:"not-found"},n.a.createElement(b.a,null,n.a.createElement(h.a,null,n.a.createElement("img",{className:"not-found-logo",src:y.a,alt:"ifteda"}))),n.a.createElement(b.a,null,n.a.createElement(h.a,null,n.a.createElement("p",null,n.a.createElement("h1",null,"Oops!"),"The page you requested does not exist.",n.a.createElement("br",null),n.a.createElement("strong",null,n.a.createElement("a",{href:"/"},"\u276e Let's head home. \u276f"))))))),D=t(53),K=t.n(D);var W=()=>{const e=Object(m.m)(),[a,t]=Object(l.useState)(!1);Object(l.useEffect)(()=>{window.location.href.includes("localhost")||(K.a.initialize("G-MMT0F5RC5M"),t(!0))},[]),Object(l.useEffect)(()=>{a&&K.a.send({hitType:"pageview",page:e.pathname+e.search})},[a,e])};t(85),t(86);var Q=function(){return W(),n.a.createElement(m.c,null,n.a.createElement(m.a,{path:"/",element:n.a.createElement(S,null)}),n.a.createElement(m.a,{path:"education",element:n.a.createElement(H,null)}),n.a.createElement(m.a,{path:"experience",element:n.a.createElement(I,null)}),n.a.createElement(m.a,{path:"projects",element:n.a.createElement(P,null)}),n.a.createElement(m.a,{path:"skills",element:n.a.createElement(_,null)}),n.a.createElement(m.a,{path:"more",element:n.a.createElement(A,null)}),n.a.createElement(m.a,{path:"biodata",element:n.a.createElement(V,null)}),n.a.createElement(m.a,{path:"*",element:n.a.createElement(q,null)}))};var X=e=>{e&&e instanceof Function&&t.e(3).then(t.bind(null,101)).then(a=>{let{getCLS:t,getFID:l,getFCP:n,getLCP:c,getTTFB:r}=a;t(e),l(e),n(e),c(e),r(e)})};r.a.createRoot(document.getElementById("root")).render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(s.a,null,n.a.createElement(Q,null)))),X()}},[[60,1,2]]]);
//# sourceMappingURL=main.6ee37862.chunk.js.map