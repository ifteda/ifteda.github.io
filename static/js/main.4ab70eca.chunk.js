(this["webpackJsonpifteda.github.io"]=this["webpackJsonpifteda.github.io"]||[]).push([[0],{108:function(e,t,c){},166:function(e,t){},167:function(e,t){},180:function(e,t,c){},181:function(e,t,c){},182:function(e,t,c){},183:function(e,t,c){},184:function(e,t,c){},186:function(e,t,c){"use strict";c.r(t);var n=c(0),i=c.n(n),a=c(20),s=c.n(a),r=c(29),l=c(8),j=c(5),d=c(191),o=c(192),b=c(193),h=c.p+"static/media/wordmark.6ed26a66.svg",u=(c(99),c(1)),O=function(){return Object(u.jsxs)(o.a,{collapseOnSelect:!0,expand:"lg",variant:"dark",children:[Object(u.jsx)(o.a.Brand,{href:"https://ifteda.com/",children:Object(u.jsx)("img",{src:h})}),Object(u.jsx)(o.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(u.jsx)(o.a.Collapse,{id:"responsive-navbar-nav",children:Object(u.jsxs)(b.a,{className:"justify-content-end",style:{width:"100%"},children:[Object(u.jsx)(r.b,{className:"main-nav",to:"/education",children:"Education"}),Object(u.jsx)(r.b,{className:"main-nav",to:"/experience",children:"Experience"}),Object(u.jsx)(r.b,{className:"main-nav",to:"/projects",children:"Projects"}),Object(u.jsx)(r.b,{className:"main-nav",to:"/more",children:"More"})]})})]})},f=c(188),x=c(189),m=c(190),g=c(67),p=c(94),v=c(76),w=c.p+"static/media/logo.9aa2213e.svg",N=(c(108),function(){return Object(u.jsx)("div",{className:"footer",children:Object(u.jsx)(f.a,{fluid:!0,children:Object(u.jsxs)(x.a,{children:[Object(u.jsx)(m.a,{className:"col-logo",children:Object(u.jsx)("img",{className:"footer-logo",src:w})}),Object(u.jsxs)(m.a,{className:"col-contact",children:[Object(u.jsx)("div",{children:"Ifteda Ahmed-Syed"}),Object(u.jsxs)("div",{children:[Object(u.jsx)("a",{href:"mailto:contact@ifteda.com",target:"_blank",rel:"noopener noreferrer",children:Object(u.jsx)(g.a,{icon:p.a,className:"footer-icon"})}),Object(u.jsx)("a",{href:"https://www.linkedin.com/in/ifteda/",target:"_blank",rel:"noopener noreferrer",children:Object(u.jsx)(g.a,{icon:v.b,className:"footer-icon"})}),Object(u.jsx)("a",{href:"https://github.com/ifteda",target:"_blank",rel:"noopener noreferrer",children:Object(u.jsx)(g.a,{icon:v.a,className:"footer-icon"})})]})]})]})})})}),S=c(109);S.configure({apiKey:"key8zCaRvKaGKZ0rP"});var y=S.base("appppWf6pgb7Nkt1J"),T=(c(180),function(){var e=Object(n.useState)([]),t=Object(j.a)(e,2),c=t[0],i=t[1];return Object(n.useEffect)((function(){y("greeting").select({view:"Grid view"}).eachPage((function(e,t){i(e),t()}))}),[]),Object(u.jsxs)("div",{className:"home",children:[Object(u.jsx)(O,{}),Object(u.jsx)("div",{class:"text-container",children:Object(u.jsx)("div",{className:"greeting-container",children:c.filter((function(e){return null==e.fields.hide||0==e.fields.hide})).map((function(e){return Object(u.jsx)("span",{className:"greeting",children:e.fields.greeting})}))})}),Object(u.jsx)(d.a,{fluid:!0,className:"logo",src:w})]})}),_=c(195),E=c(194),k=(c(181),function(e){return Object(u.jsxs)("div",{className:"page",children:[Object(u.jsx)(O,{}),e.children,Object(u.jsx)(N,{})]})}),C=function(){var e=Object(n.useState)([]),t=Object(j.a)(e,2),c=t[0],i=t[1],a=Object(n.useState)(!1),s=Object(j.a)(a,2),r=s[0],l=s[1],o=Object(n.useState)({}),b=Object(j.a)(o,2),h=b[0],O=b[1];return Object(n.useEffect)((function(){y("education").select({view:"Grid view"}).eachPage((function(e,t){i(e),t()}))}),[]),Object(u.jsx)(k,{children:Object(u.jsx)(_.a,{fade:!0,children:c.filter((function(e){return null==e.fields.hide||0==e.fields.hide})).map((function(e){return Object(u.jsxs)(_.a.Item,{style:{textAlign:"center"},children:[Object(u.jsx)("a",{onClick:function(){return function(e){l(!0),O(e)}(e.fields)},children:Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(d.a,{fluid:!0,className:"carousel-img",src:e.fields.imgURL}),Object(u.jsxs)(_.a.Caption,{children:[Object(u.jsx)("h3",{children:e.fields.heading}),Object(u.jsx)("p",{children:e.fields.subheading})]})]})}),Object(u.jsxs)(E.a,{show:r,onHide:function(){return l(!1)},size:"xl",fullscreen:"md-down","aria-labelledby":"contained-modal-title-vcenter",centered:!0,scrollable:!0,children:[Object(u.jsx)(E.a.Header,{closeButton:!0,closeVariant:"white",style:{backgroundImage:"url(".concat(h.imgURL,")")},children:Object(u.jsxs)(E.a.Title,{id:"contained-modal-title-vcenter",children:[Object(u.jsx)("h1",{children:h.heading}),Object(u.jsx)("h3",{children:h.subheading}),Object(u.jsx)("h4",{children:h.dates})]})}),Object(u.jsx)(E.a.Body,{children:Object(u.jsx)("div",{dangerouslySetInnerHTML:{__html:h.detailsHTML}})})]})]},e.id)}))})})},I=function(){var e=Object(n.useState)([]),t=Object(j.a)(e,2),c=t[0],i=t[1],a=Object(n.useState)(!1),s=Object(j.a)(a,2),r=s[0],l=s[1],o=Object(n.useState)({}),b=Object(j.a)(o,2),h=b[0],O=b[1];return Object(n.useEffect)((function(){y("experience").select({view:"Grid view"}).eachPage((function(e,t){i(e),t()}))}),[]),Object(u.jsx)(k,{children:Object(u.jsx)(_.a,{fade:!0,children:c.filter((function(e){return null==e.fields.hide||0==e.fields.hide})).map((function(e){return Object(u.jsxs)(_.a.Item,{style:{textAlign:"center"},children:[Object(u.jsx)("a",{onClick:function(){return function(e){l(!0),O(e)}(e.fields)},children:Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(d.a,{fluid:!0,className:"carousel-img",src:e.fields.imgURL}),Object(u.jsxs)(_.a.Caption,{children:[Object(u.jsx)("h3",{children:e.fields.heading}),Object(u.jsx)("p",{children:e.fields.subheading})]})]})}),Object(u.jsxs)(E.a,{show:r,onHide:function(){return l(!1)},size:"xl",fullscreen:"md-down","aria-labelledby":"contained-modal-title-vcenter",centered:!0,scrollable:!0,children:[Object(u.jsx)(E.a.Header,{closeButton:!0,closeVariant:"white",style:{backgroundImage:"url(".concat(h.imgURL,")")},children:Object(u.jsxs)(E.a.Title,{id:"contained-modal-title-vcenter",children:[Object(u.jsx)("h1",{children:h.heading}),Object(u.jsx)("h3",{children:h.subheading}),Object(u.jsx)("h4",{children:h.dates})]})}),Object(u.jsx)(E.a.Body,{children:Object(u.jsx)("div",{dangerouslySetInnerHTML:{__html:h.detailsHTML}})})]})]},e.id)}))})})},L=function(){var e=Object(n.useState)([]),t=Object(j.a)(e,2),c=t[0],i=t[1],a=Object(n.useState)(!1),s=Object(j.a)(a,2),r=s[0],l=s[1],o=Object(n.useState)({}),b=Object(j.a)(o,2),h=b[0],O=b[1];return Object(n.useEffect)((function(){y("projects").select({view:"Grid view"}).eachPage((function(e,t){i(e),t()}))}),[]),Object(u.jsx)(k,{children:Object(u.jsx)(_.a,{fade:!0,children:c.filter((function(e){return null==e.fields.hide||0==e.fields.hide})).map((function(e){return Object(u.jsxs)(_.a.Item,{style:{textAlign:"center"},children:[Object(u.jsx)("a",{onClick:function(){return function(e){l(!0),O(e)}(e.fields)},children:Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(d.a,{fluid:!0,className:"carousel-img",src:e.fields.imgURL}),Object(u.jsxs)(_.a.Caption,{children:[Object(u.jsx)("h3",{children:e.fields.heading}),Object(u.jsx)("p",{children:e.fields.subheading})]})]})}),Object(u.jsxs)(E.a,{show:r,onHide:function(){return l(!1)},size:"xl",fullscreen:"md-down","aria-labelledby":"contained-modal-title-vcenter",centered:!0,scrollable:!0,children:[Object(u.jsx)(E.a.Header,{closeButton:!0,closeVariant:"white",style:{backgroundImage:"url(".concat(h.imgURL,")")},children:Object(u.jsxs)(E.a.Title,{id:"contained-modal-title-vcenter",children:[Object(u.jsx)("h1",{children:h.heading}),Object(u.jsx)("h3",{children:h.subheading}),Object(u.jsx)("h4",{children:h.dates})]})}),Object(u.jsx)(E.a.Body,{children:Object(u.jsx)("div",{dangerouslySetInnerHTML:{__html:h.detailsHTML}})})]})]},e.id)}))})})},H=c(196),P=(c(182),function(e){var t=e.item;return Object(u.jsx)("a",{href:t.link,target:"_blank",rel:"noopener noreferrer",children:Object(u.jsxs)(H.a,{children:[Object(u.jsx)(H.a.Img,{src:t.imgURL}),Object(u.jsxs)(H.a.ImgOverlay,{children:[Object(u.jsx)(H.a.Title,{children:t.heading}),Object(u.jsxs)(H.a.Text,{children:[t.subheading,Object(u.jsx)("p",{className:"source",children:t.dateFormatted}),Object(u.jsx)("p",{className:"source",children:Object(u.jsx)("i",{children:t.source})})]})]})]})})}),R=function(){var e=Object(n.useState)([]),t=Object(j.a)(e,2),c=t[0],i=t[1];return Object(n.useEffect)((function(){y("news").select({view:"Grid view"}).eachPage((function(e,t){i(e),t()}))}),[]),Object(u.jsx)(k,{children:Object(u.jsx)(f.a,{fluid:!0,children:Object(u.jsx)(x.a,{className:"d-flex justify-content-left",children:c.filter((function(e){return null==e.fields.hide||0==e.fields.hide})).map((function(e){return Object(u.jsx)(m.a,{lg:4,md:6,sm:12,children:Object(u.jsx)(P,{item:e.fields})},e.id)}))})})})},A=c.p+"static/media/headshot.2ec76e01.jpg",B=(c(183),function(){var e=Object(n.useState)([]),t=Object(j.a)(e,2),c=t[0],i=t[1];return Object(n.useEffect)((function(){y("biodata").select({view:"Grid view"}).eachPage((function(e,t){i(e),t()}))}),[]),Object(u.jsx)(k,{children:Object(u.jsx)(f.a,{className:"biodata-container",fluid:!0,children:Object(u.jsxs)(x.a,{className:"biodata-row",children:[Object(u.jsx)(m.a,{className:"biodata-col",md:"auto",children:Object(u.jsx)(d.a,{fluid:!0,roundedCircle:!0,src:A})}),Object(u.jsx)(m.a,{className:"biodata-col",md:"auto",children:c.filter((function(e){return null==e.fields.hide||0==c.fields.hide})).map((function(e){return Object(u.jsxs)("p",{className:"biodata-content",children:[Object(u.jsxs)("strong",{children:[e.fields.row,": "," "]}),e.fields.content]})}))})]})})})}),F=c(77),G=function(){var e=Object(l.e)(),t=Object(n.useState)(!1),c=Object(j.a)(t,2),i=c[0],a=c[1];Object(n.useEffect)((function(){window.location.href.includes("localhost")||(F.a.initialize(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_GA_TRACKING_ID),a(!0))}),[]),Object(n.useEffect)((function(){i&&F.a.pageview(e.pathname+e.search)}),[i,e])};c(184),c(185);var U=function(){return G(),Object(u.jsxs)(l.c,{children:[Object(u.jsx)(l.a,{path:"/",element:Object(u.jsx)(T,{})}),Object(u.jsx)(l.a,{path:"education",element:Object(u.jsx)(C,{})}),Object(u.jsx)(l.a,{path:"experience",element:Object(u.jsx)(I,{})}),Object(u.jsx)(l.a,{path:"projects",element:Object(u.jsx)(L,{})}),Object(u.jsx)(l.a,{path:"more",element:Object(u.jsx)(R,{})}),Object(u.jsx)(l.a,{path:"biodata",element:Object(u.jsx)(B,{})})]})},M=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,197)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,a=t.getLCP,s=t.getTTFB;c(e),n(e),i(e),a(e),s(e)}))};s.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(r.a,{children:Object(u.jsx)(U,{})})}),document.getElementById("root")),M()},99:function(e,t,c){}},[[186,1,2]]]);
//# sourceMappingURL=main.4ab70eca.chunk.js.map