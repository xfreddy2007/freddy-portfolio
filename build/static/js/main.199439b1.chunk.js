(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{10:function(e,t,n){"use strict";t.a=function(e){return e.children}},14:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return c}));var r="SET_WORKS_ACTIVE",c="SET_WORKS_CLOSED"},16:function(e,t,n){e.exports={SideDrawer:"SideDrawer_SideDrawer__3kXLK",Open:"SideDrawer_Open__1tCv1",Close:"SideDrawer_Close__9j7x-"}},24:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return l}));var r=n(5),c=function(e,t){return Object(r.a)(Object(r.a)({},e),t)},l=function(e,t){var n=!0;if(!t)return!0;if(t.required&&(n=""!==e.trim()&&n),t.minLength&&(n=e.length>=t.minLength&&n),t.maxLength&&(n=e.length<=t.maxLength&&n),t.isEmail){n=/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(e)&&n}if(t.isNumeric){n=/^\d+$/.test(e)&&n}return n}},28:function(e,t,n){e.exports={ctaBtnLight:"Button_ctaBtnLight__3nnOc",ctaBtn:"Button_ctaBtn__3r3jg"}},30:function(e,t,n){"use strict";n(0);var r=n(28),c=n.n(r),l=n(1);t.a=function(e){var t=["text-sm h-8 w-28 mx-5 xl:h-16 xl:w-44 md:h-12 md:w-36 xl:text-lg md:text-md self-stretch font-serif cursor-pointer",c.a.ctaBtn,c.a.ctaBtnLight].join(" ");return Object(l.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:e.link,className:t,children:e.children})}},33:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return l}));var r=n(14),c=function(){return{type:r.a}},l=function(){return{type:r.b}}},34:function(e,t,n){"use strict";n(0);var r=n(1);t.a=function(e){return e.show?Object(r.jsx)("div",{className:"w-full h-full fixed z-30 left-0 top-0 bg-gray-900 bg-opacity-50",onClick:e.clicked}):null}},35:function(e,t,n){"use strict";t.a=n.p+"static/media/burger-builder.aa0e4948.png"},36:function(e,t,n){"use strict";t.a=n.p+"static/media/smart-brain.2cb48c46.png"},40:function(e,t,n){e.exports={active:"NavigationItem_active__2v2td"}},41:function(e,t,n){},71:function(e,t,n){},84:function(e,t,n){},85:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),l=n(19),s=n.n(l),i=n(11),a=n(21),o=n(20),x=(n(71),n(5)),d=n(4),j=n(18),m=n(10),u=n(47),b=n(39),f=n.n(b),h=n(33),O=n(40),g=n.n(O),p=n(1),v=function(e){return Object(p.jsx)("li",{className:"text-lg h-full w-full cursor-pointer hover:bg-blue-500",children:Object(p.jsx)(i.b,{className:"w-full h-full p-5 block no-underline hover:underline box-border text-center",to:e.link,exact:e.exact,activeClassName:g.a.active,children:e.children})})},w=Object(o.b)((function(e){return{isWorksActive:e.isWorksActive}}),(function(e){return{onSetWorksActive:function(){return e(h.a())}}}))((function(e){return Object(p.jsxs)("ul",{className:"flex flex-col lg:flex-row list-none box-border font-sans text-gray-50",onClick:e.scroll,children:[Object(p.jsx)("div",{onClick:e.onSetWorksActive,children:Object(p.jsx)(v,{link:"/works",exact:!0,children:"Works"})}),Object(p.jsx)(v,{link:"/about",exact:!0,children:"About"}),Object(p.jsx)(v,{link:"/contact",exact:!0,children:"Contact"})]})})),k=function(e){var t=function(){window.scrollTo({top:0,behavior:"smooth"})};return Object(p.jsxs)(f.a,{children:[Object(p.jsxs)("nav",{className:"w-full h-75 bg-blue-800 m-0 px-5 flex justify-between items-center",children:[Object(p.jsx)(i.b,{to:"/",onClick:t,children:Object(p.jsx)("h1",{class:"text-3xl xl:ml-32 lg:ml-24 md:ml-16 sm:ml-8 min-w-150 cursor-pointer font-sans text-gray-50",children:"Freddy Liu"})}),Object(p.jsx)("div",{className:"hidden lg:flex",children:Object(p.jsx)(w,{scroll:t})})]}),Object(p.jsx)("div",{className:"inline lg:hidden fixed top-3 right-8 z-40 cursor-pointer xl:mr-8 lg:mr-6 md:mr-4 sm:mr-2 select-none",children:Object(p.jsx)(u.a,{toggled:e.open,toggle:e.drawerToggleClicked,color:"#F9FAFB",size:40,label:"Show menu"})})]})},y=n(34),N=n(16),_=n.n(N),S=function(e){var t=["fixed w-full top-18 left-0 z-40 bg-blue-700 box-border lg:hidden",_.a.SideDrawer,_.a.Close];return e.open&&(t=["fixed w-full top-18 left-0 z-40 bg-blue-700 box-border lg:hidden",_.a.SideDrawer,_.a.Open]),Object(p.jsxs)(m.a,{children:[Object(p.jsx)(y.a,{show:e.open,clicked:e.toggle}),Object(p.jsx)("div",{className:t.join(" "),onClick:e.toggle,children:Object(p.jsx)("nav",{className:"h-full",children:Object(p.jsx)(w,{})})})]})},C=n(41),L=n.n(C),z=n(13),B=n(42),F=n(43),D=n(44),W=function(e){return Object(p.jsxs)(m.a,{children:[Object(p.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.facebook.com/xfreddy2007",className:"text-sm xl:text-lg md:text-md mr-1 lg:mr-4 md:mr-3 sm:mr-2",title:"Facebook Profile",children:Object(p.jsx)(z.a,{icon:B.faFacebookSquare})}),Object(p.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.linkedin.com/in/hsuan-fu-liu-515525156/",className:"text-sm xl:text-lg md:text-md mr-1 lg:mr-4 md:mr-3 sm:mr-2",title:"Linkedin Profile",children:Object(p.jsx)(z.a,{icon:F.faLinkedin})}),Object(p.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/xfreddy2007",className:"text-sm xl:text-lg md:text-md mr-1 lg:mr-4 md:mr-3 sm:mr-2",title:"Github Page",children:Object(p.jsx)(z.a,{icon:D.faGithubSquare})})]})},A=n(29),E=function(e){return Object(p.jsxs)("div",{children:[Object(p.jsx)("p",{className:"inline-block mr-2",children:"\xa9 2021 - Developed with "}),Object(p.jsx)("p",{style:{color:"red",fontSize:"1.25rem",display:"inline-block",marginRight:"0.5rem"},children:Object(p.jsx)(z.a,{icon:A.c})}),Object(p.jsx)("p",{className:"inline-block mr-2",children:" by "}),Object(p.jsx)("a",{className:"inline-block mr-2",href:"https://github.com/xfreddy2007",target:"_blank",rel:"noopener noreferrer",children:"Freddy"})]})},T=function(e){var t=["w-full h-auto justify-start flex flex-col pb-8 xl:px-32 lg:px-24 md:px-16 sm:px-8 font-sans text-gray-50",L.a.footer].join(" ");return Object(p.jsxs)("footer",{className:t,children:[Object(p.jsx)("h2",{className:"text-md mx-5 font-bold mt-8 mb-2 xl:text-3xl lg:text-2xl md:text-xl sm:text-lg",children:"Let's Chat!"}),Object(p.jsxs)("p",{className:"text-sm mx-5 my-2 xl:text-lg md:text-md font-serif",children:["Send me an email at ",Object(p.jsx)("strong",{className:"underline",children:"xfreddy2007@gmail.com"})]}),Object(p.jsx)("p",{className:"text-sm mx-5 my-2 xl:text-lg md:text-md font-serif",children:"if you are interested in me!"}),Object(p.jsx)("div",{className:"mx-5",children:Object(p.jsx)(W,{})}),Object(p.jsx)("div",{className:"flex text-xs mt-8 justify-center",children:Object(p.jsx)(E,{})})]})},P=function(e){var t=Object(r.useState)(!1),n=Object(j.a)(t,2),c=n[0],l=n[1],s=function(){l(!c)};return Object(p.jsxs)(m.a,{children:[Object(p.jsx)(k,{open:c,drawerToggleClicked:s}),Object(p.jsx)(S,{open:c,toggle:s}),Object(p.jsx)("main",{children:e.children}),Object(p.jsx)(T,{})]})},I=n(45),R=n.n(I),q=(n(83),n(30)),G=function(e){return Object(r.useEffect)((function(){R.a.init({delay:200,duration:1500,anchorPlacement:"bottom-top",mirror:!0})}),[]),Object(p.jsxs)("div",{className:"mt-32 w-full mb-8",children:[Object(p.jsx)("h1",{className:"text-3xl mx-5 font-bold my-4 xl:text-8xl lg:text-7xl md:text-5xl sm:text-4xl","data-aos":"fade-down",children:"Hey,"}),Object(p.jsx)("h1",{className:"text-3xl mx-5 font-bold my-4 xl:text-8xl lg:text-7xl md:text-5xl sm:text-4xl","data-aos":"fade-down",children:"I'm Freddy Liu."}),Object(p.jsx)("h2",{className:"text-lg mx-5 font-bold my-4 xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl","data-aos":"fade-down",children:"I create things to entertain people."}),Object(p.jsx)("div",{className:"xl:w-3/5 md:w-3/4 sm:w-full font-serif",children:Object(p.jsx)("p",{className:"text-sm mx-5 text-justify my-4 xl:text-lg md:text-md",children:"Fully passionate in Web Development. Problem solving, critical thinking, providing intuitive, responsive and creative designs for users."})}),Object(p.jsx)("div",{className:"xl:w-3/5 md:w-3/4 sm:w-full font-serif",children:Object(p.jsxs)("p",{className:"text-sm mx-5 text-justify my-4 xl:text-lg md:text-md",children:["Currently looking for a position of ",Object(p.jsx)("strong",{className:"underline",children:"Front-End Developer."})]})}),Object(p.jsx)(q.a,{link:"https://www.cakeresume.com/freddy-liu",children:"RESUME"})]})},K=n(46),$=function(e){return Object(p.jsx)("div",{children:Object(p.jsx)(K.a,{children:Object(p.jsx)("img",{src:e.image,alt:e.alt,className:e.classList.join(" ")})})})},J=n(35),H=n(36),M=function(e){return Object(p.jsxs)(m.a,{children:[Object(p.jsx)("h1",{className:"text-lg mx-5 mt-16 font-sans font-bold xl:text-8xl lg:text-6xl md:text-4xl sm:text-2xl tracking-wider",children:"Work Gallery"}),Object(p.jsxs)("div",{className:"w-full flex items-center justify-center",children:[Object(p.jsx)("div",{className:"h-4/5 w-4/5 m-6 rounded-2xl",children:Object(p.jsx)($,{image:J.a,classList:["h-full","w-full","rounded-2xl","object-cover"],alt:"BurgerBuilder"})}),Object(p.jsx)("p",{className:"text-sm mx-5 my-4 xl:text-lg md:text-md",children:"Burger Builder"})]}),Object(p.jsxs)("div",{className:"w-full flex items-center justify-center",children:[Object(p.jsx)("p",{className:"text-sm mx-5 my-4 xl:text-lg md:text-md",children:"Smart Brain Detector"}),Object(p.jsx)("div",{className:"h-4/5 w-4/5 m-6 rounded-2xl",children:Object(p.jsx)($,{image:H.a,classList:["h-full","w-full","rounded-2xl","object-cover"],alt:"SmartBrain"})})]})]})},U=function(e){return Object(p.jsxs)("div",{className:"w-full min-h-screen justify-start flex flex-col px-4 xl:px-32 lg:px-24 md:px-16 sm:px-8 font-sans text-indigo-800",children:[Object(p.jsx)(G,{}),Object(p.jsx)(M,{})]})},V=(n(84),c.a.lazy((function(){return n.e(5).then(n.bind(null,97))}))),X=c.a.lazy((function(){return n.e(4).then(n.bind(null,96))})),Q=c.a.lazy((function(){return n.e(3).then(n.bind(null,98))})),Y=Object(d.g)((function(e){var t=Object(p.jsxs)(d.d,{children:[Object(p.jsx)(d.b,{path:"/about",render:function(e){return Object(p.jsx)(V,Object(x.a)({},e))}}),Object(p.jsx)(d.b,{path:"/works",render:function(e){return Object(p.jsx)(X,Object(x.a)({},e))}}),Object(p.jsx)(d.b,{path:"/contact",render:function(e){return Object(p.jsx)(Q,Object(x.a)({},e))}}),Object(p.jsx)(d.b,{path:"/",exact:!0,component:U}),Object(p.jsx)(d.a,{to:"/"})]});return Object(p.jsx)("div",{children:Object(p.jsx)(P,{children:Object(p.jsx)(r.Suspense,{fallback:Object(p.jsx)("p",{children:"Loading..."}),children:t})})})})),Z=n(14),ee=n(24),te={isWorksActive:!0},ne=function(e,t){return Object(ee.b)(e,{isWorksActive:!0})},re=function(e,t){return Object(ee.b)(e,{isWorksActive:!1})},ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Z.a:return ne(e);case Z.b:return re(e);default:return e}},le=function(e){e&&e instanceof Function&&n.e(6).then(n.bind(null,95)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,l=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),l(e),s(e)}))},se=Object(a.b)(ce),ie=Object(p.jsx)(o.a,{store:se,children:Object(p.jsx)(i.a,{children:Object(p.jsx)(Y,{})})});s.a.render(ie,document.getElementById("root")),le()}},[[85,1,2]]]);
//# sourceMappingURL=main.199439b1.chunk.js.map