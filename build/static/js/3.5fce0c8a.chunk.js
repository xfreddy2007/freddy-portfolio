(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[3],{86:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.EmailJSResponseStatus=t.sendForm=t.send=t.init=void 0;var a=n(90);Object.defineProperty(t,"EmailJSResponseStatus",{enumerable:!0,get:function(){return a.EmailJSResponseStatus}});var s=n(91),i=null,l="https://api.emailjs.com";function o(e,t,n){return void 0===n&&(n={}),new Promise((function(s,i){var l=new XMLHttpRequest;for(var o in l.addEventListener("load",(function(e){var t=new a.EmailJSResponseStatus(e.target);200===t.status||"OK"===t.text?s(t):i(t)})),l.addEventListener("error",(function(e){i(new a.EmailJSResponseStatus(e.target))})),l.open("POST",e,!0),n)l.setRequestHeader(o,n[o]);l.send(t)}))}function r(e){var t=document&&document.getElementById("g-recaptcha-response");return t&&t.value&&(e["g-recaptcha-response"]=t.value),t=null,e}function c(e,t){i=e,l=t||"https://api.emailjs.com"}function u(e,t,n,a){var s={lib_version:"2.6.4",user_id:a||i,service_id:e,template_id:t,template_params:r(n)};return o(l+"/api/v1.0/email/send",JSON.stringify(s),{"Content-type":"application/json"})}function d(e,t,n,a){var r;if("string"===typeof n&&(n=document.querySelector("#"!==(r=n)[0]&&"."!==r[0]?"#"+r:r)),!n||"FORM"!==n.nodeName)throw"Expected the HTML form element or the style selector of form";s.UI.progressState(n);var c=new FormData(n);return c.append("lib_version","2.6.4"),c.append("service_id",e),c.append("template_id",t),c.append("user_id",a||i),o(l+"/api/v1.0/email/send-form",c).then((function(e){return s.UI.successState(n),e}),(function(e){return s.UI.errorState(n),Promise.reject(e)}))}t.init=c,t.send=u,t.sendForm=d,t.default={init:c,send:u,sendForm:d}},90:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.EmailJSResponseStatus=void 0;var a=function(e){this.status=e.status,this.text=e.responseText};t.EmailJSResponseStatus=a},91:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.UI=void 0;var a=function(){function e(){}return e.clearAll=function(e){e.classList.remove(this.PROGRESS),e.classList.remove(this.DONE),e.classList.remove(this.ERROR)},e.progressState=function(e){this.clearAll(e),e.classList.add(this.PROGRESS)},e.successState=function(e){e.classList.remove(this.PROGRESS),e.classList.add(this.DONE)},e.errorState=function(e){e.classList.remove(this.PROGRESS),e.classList.add(this.ERROR)},e.PROGRESS="emailjs-sending",e.DONE="emailjs-success",e.ERROR="emailjs-error",e}();t.UI=a},92:function(e,t,n){e.exports={Input:"Input_Input__3r5Ke",Label:"Input_Label__1qyHr",InputElement:"Input_InputElement__2m88K",Invalid:"Input_Invalid__16Mis"}},93:function(e,t,n){e.exports={Modal:"Modal_Modal__1-5dN"}},94:function(e,t,n){e.exports={ldsRing:"Spinner_ldsRing__31jBW"}},98:function(e,t,n){"use strict";n.r(t);var a=n(31),s=n(18),i=n(0),l=n.n(i),o=n(86),r=n.n(o),c=n(10),u=n(5),d=n(92),m=n.n(d),f=n(1),p=function(e){var t=null,n=[m.a.InputElement];switch(e.invalid&&e.shouldValidate&&e.touched&&n.push(m.a.Invalid),e.elementType){case"input":t=Object(f.jsx)("input",Object(u.a)(Object(u.a)({className:"my-2 w-24 h-8 xl:w-56 lg:w-48 md:w-40 sm:w-32 rounded-md shadow-sm ring-2 ring-indigo-800 focus:outline-none focus:ring-red-500 block"},e.elementConfig),{},{value:e.value,name:e.name,onChange:e.changed}));break;case"textarea":t=Object(f.jsx)("textarea",Object(u.a)(Object(u.a)({className:"my-2 w-48 h-100 xl:w-96 lg:w-84 md:w-72 sm:w-60 rounded-md shadow-sm ring-2 ring-indigo-800 focus:outline-none focus:ring-red-500 block"},e.elementConfig),{},{value:e.value,name:e.name,onChange:e.changed}));break;default:t=Object(f.jsx)("input",Object(u.a)(Object(u.a)({className:n.join(" ")},e.elementConfig),{},{value:e.value,name:e.name,onChange:e.changed}))}return Object(f.jsxs)("div",{children:[Object(f.jsx)("label",{className:"text-sm xl:text-lg md:text-md block",children:e.label}),t]})},v=n(93),x=n.n(v),h=n(34),j=function(e){return Object(f.jsxs)(c.a,{children:[Object(f.jsx)(h.a,{show:e.show,clicked:e.modalClosed}),Object(f.jsx)("div",{className:x.a.Modal,style:{transform:e.show?"translateY(0)":"translateY(-100vh)",opacity:e.show?"1":"0"},children:e.children})]})},g=l.a.memo(j,(function(e,t){return t.show===e.show&&t.children===e.children})),b=n(94),O=n.n(b),S=function(){return Object(f.jsxs)("div",{className:O.a.ldsRing,children:[Object(f.jsx)("div",{}),Object(f.jsx)("div",{}),Object(f.jsx)("div",{}),Object(f.jsx)("div",{})]})},w=n(24);t.default=function(e){var t=Object(i.useState)({name:{elementName:"Name",elementInput:"user_name",elementType:"input",elementConfig:{type:"text",placeholder:" Your Name"},value:"",validation:{required:!0},valid:!1,touched:!1},email:{elementName:"Email",elementInput:"user_email",elementType:"input",elementConfig:{type:"email",placeholder:" Your E-Mail"},value:"",validation:{required:!0,isEmail:!0},valid:!1,touched:!1},message:{elementName:"Message",elementInput:"message",elementType:"textarea",elementConfig:{type:"text",placeholder:" Want to say something?"},value:"",validation:{required:!0},valid:!1,touched:!1}}),n=Object(s.a)(t,2),l=n[0],u=n[1];Object(i.useEffect)((function(){return Object(o.init)("user_X9kgtqlsTa8Bzfr5s9Kpa")}),[]);var d=Object(i.useState)(!1),m=Object(s.a)(d,2),v=m[0],x=m[1],h=Object(i.useState)(!1),j=Object(s.a)(h,2),b=j[0],O=j[1],_=Object(i.useState)(!1),y=Object(s.a)(_,2),E=y[0],R=y[1],I=null;b&&(I=Object(f.jsx)(S,{}));var N=[];for(var C in l)N.push({id:C,config:l[C]});var L=v?"mt-2 w-28 p-2 items-center rounded-lg bg-indigo-800 text-gray-50 font-serif cursor-pointer":"mt-2 w-28 p-2 items-center rounded-lg bg-gray-500 text-gray-50 font-serif cursor-not-allowed",k=Object(f.jsxs)("form",{onSubmit:function(e){e.preventDefault(),O(!0),r.a.sendForm("service_v72nvfp","template_fm53pm1",e.target,"user_X9kgtqlsTa8Bzfr5s9Kpa").then((function(e){console.log("SUCCESS!",e.status,e.text),O(!1)}),(function(e){console.log("FAILED",e),R(!0),O(!1)}))},className:"flex flex-col mx-5 mb-4 xl:mb-16 lg:mb-12 md:mb-8 font-serif",children:[Object(f.jsx)("input",{type:"hidden",name:"contact_number"}),N.map((function(e){return Object(f.jsx)(p,{elementType:e.config.elementType,elementConfig:e.config.elementConfig,label:e.config.elementName,name:e.config.elementInput,value:e.config.value,invalid:!e.config.valid,shouldValidate:e.config.validation,touched:e.config.touched,changed:function(t){return function(e,t){var n=Object(w.b)(l[t],{value:e.target.value,valid:Object(w.a)(e.target.value,l[t].validation),touched:!0}),s=Object(w.b)(l,Object(a.a)({},t,n)),i=!0;for(var o in s)i=s[o].valid&&i;u(s),x(i)}(t,e.id)}},e.id)})),Object(f.jsx)("input",{type:"submit",value:"Submit",className:L,disabled:!v})]});return Object(f.jsxs)(c.a,{children:[E&&Object(f.jsx)(g,{show:E,modalClosed:function(){return R(!1)},children:"Failed to send Email!"}),Object(f.jsxs)("div",{className:"w-full min-h-xl justify-start flex flex-col xl:mt-32 lg:mt-28 md:mt-24 sm:mt-20 px-4 xl:px-32 lg:px-24 md:px-16 sm:px-8 font-sans text-indigo-800",children:[Object(f.jsx)("h1",{class:"w-4/5 text-lg mx-5 mt-16 font-bold xl:text-8xl lg:text-6xl md:text-4xl sm:text-2xl tracking-wider",children:"Have a desire to work together with me?"}),Object(f.jsx)("div",{class:"xl:w-3/5 md:w-3/4 sm:w-full font-serif",children:Object(f.jsx)("p",{class:"text-sm mx-5 my-4 xl:text-lg md:text-md",children:"I'm really excited to chat with other developers, designers, or others. Feel free to leave a message for me if you would like to have a conversation."})}),Object(f.jsx)("h2",{class:"text-lg mx-5 font-bold my-4 xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl",children:"Let's talk together!"}),k,I]})]})}}}]);
//# sourceMappingURL=3.5fce0c8a.chunk.js.map