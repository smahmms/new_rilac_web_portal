(this["webpackJsonprilac-web"]=this["webpackJsonprilac-web"]||[]).push([[340],{2464:function(e,a,t){"use strict";t.r(a);var s=t(476),r=t(477),c=t(21),o=t(1),i=t(16),n=t(0),l=(t(85),t(1553)),p=t(1515),d=t(470),u=t(483),j=t(482),b=t(480),m=t(486),h=t(496),g=t(485),O=t(1488),f=t(489),x=t(1513),y=t(502),v=t(478),C=t(472),N=t(474),_=t(495),P=t(487),T=(t(642),t(6));a.default=function(){var e=Object(n.useState)(!1),a=Object(i.a)(e,2),t=a[0],k=a[1],w=Object(n.useState)({}),M=Object(i.a)(w,2),R=(M[0],M[1],Object(n.useState)(null)),z=Object(i.a)(R,2),H=z[0],B=z[1],S=Object(n.useState)(null),E=Object(i.a)(S,2),L=E[0],F=E[1],I=Object(n.useState)({complain_title:"",complain_description:"",complain_priority:"",image_url:"",category:""}),q=Object(i.a)(I,2),D=q[0],U=q[1],J=function(e){U(Object(o.a)(Object(o.a)({},D),{},Object(c.a)({},e.target.name,e.target.value)))},A=function(){var e=Object(r.a)(Object(s.a)().mark((function e(a){var t,r;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),k(!0),t=D.image_url,(r=new FormData).append("image",H),e.next=7,v.a.singleFileupload(r).then((function(e){console.log(e),t=e.data.payload})).catch((function(e){console.log(e.response),Object(C.a)(e)}));case 7:v.a.createComplain(Object(o.a)(Object(o.a)({},D),{},{image_url:t})).then((function(e){k(!1),console.log(e),Object(C.c)(e)})).catch((function(e){Object(C.a)(e),k(!1),console.log(e)}));case 8:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return Object(T.jsxs)(n.Fragment,{children:[Object(T.jsx)(d.a.Ripple,{className:"mb-1",color:"primary",tag:N.b,to:"/complainList",children:Object(T.jsxs)("div",{className:"d-flex align-items-center",children:[Object(T.jsx)(l.a,{size:17,style:{marginRight:"5px"}}),Object(T.jsx)("span",{children:"Back"})]})}),Object(T.jsxs)(u.a,{children:[Object(T.jsx)(j.a,{className:"border-bottom",children:Object(T.jsx)(b.a,{tag:"h4",children:"Create Complain"})}),Object(T.jsx)(m.a,{style:{paddingTop:"15px"},children:Object(T.jsxs)(h.a,{className:"row",style:{width:"100%"},onSubmit:A,autoComplete:"off",children:[Object(T.jsx)(g.a,{sm:"4",children:Object(T.jsxs)(O.a,{children:[Object(T.jsxs)(f.a,{for:"ruleProvider",children:["Complain Category",Object(T.jsx)("span",{style:{color:"red"},children:"*"})]}),Object(T.jsx)(_.a,{theme:P.i,maxMenuHeight:200,className:"react-select",classNamePrefix:"select",value:{value:D.category,label:D.category?D.category:"select a category"},onChange:function(e){U(Object(o.a)(Object(o.a)({},D),{},{category:e.value}))},options:[{value:"category_1",label:"category_1"},{value:"category_2",label:"category_2"}]})]})}),Object(T.jsx)(g.a,{sm:"4",children:Object(T.jsxs)(O.a,{children:[Object(T.jsxs)(f.a,{for:"ruleProvider",children:["Priority",Object(T.jsx)("span",{style:{color:"red"},children:"*"})]}),Object(T.jsx)(_.a,{theme:P.i,maxMenuHeight:200,className:"react-select",classNamePrefix:"select",value:{value:D.complain_priority,label:D.complain_priority?D.complain_priority:"select a priority"},onChange:function(e){U(Object(o.a)(Object(o.a)({},D),{},{complain_priority:e.value}))},options:[{value:"major",label:"major"},{value:"high",label:"high"},{value:"general",label:"general"}]})]})}),Object(T.jsx)(g.a,{sm:"4",children:"  "}),Object(T.jsx)(g.a,{sm:"4",children:Object(T.jsxs)(O.a,{children:[Object(T.jsxs)(f.a,{for:"complain_title",children:["Complain Title",Object(T.jsx)("span",{style:{color:"red"},children:"*"})]}),Object(T.jsx)(x.a,{type:"text",name:"complain_title",id:"complain_title",value:D.complain_title,onChange:J,required:!0,placeholder:"your title..."})]})}),Object(T.jsx)(g.a,{sm:"12",children:Object(T.jsxs)(O.a,{children:[Object(T.jsxs)(f.a,{for:"complain_description",children:["Complain Description",Object(T.jsx)("span",{style:{color:"red"},children:"*"})]}),Object(T.jsx)(x.a,{type:"textarea",name:"complain_description",id:"complain_description",value:D.complain_description,onChange:J,required:!0,placeholder:"description here..."})]})}),Object(T.jsxs)(g.a,{md:"12",children:[Object(T.jsx)(f.a,{for:"voucherImage",children:"Complain Image"}),Object(T.jsxs)("div",{className:"d-flex",children:[L&&Object(T.jsx)("img",{src:L,alt:"voucher img",height:"100px",className:"mr-2"}),Object(T.jsxs)("div",{className:"file position-relative overflow-hidden",children:[Object(T.jsxs)("div",{className:"text-center p-1",style:{height:"102px",width:"102px",border:"1px dashed #d9d9d9",backgroundColor:"#fafafa"},children:[Object(T.jsx)("span",{children:Object(T.jsx)(p.a,{size:20,className:"my-1"})})," ",Object(T.jsx)("br",{}),Object(T.jsx)("span",{children:"Upload"})]}),Object(T.jsx)(x.a,{style:{position:"absolute",opacity:"0",left:"0",top:"0",height:"102px",width:"102px",cursor:"pointer"},type:"file",accept:"image/png, image/jpeg",required:!0,name:"voucherImage",id:"voucherImage",onChange:function(e){0!==e.target.files.length&&F(URL.createObjectURL(e.target.files[0])),B(e.target.files[0])}})]})]})]}),Object(T.jsx)(g.a,{sm:"12",className:"text-center",children:t?Object(T.jsxs)(d.a.Ripple,{color:"primary",className:"mr-1",disabled:!0,style:{marginTop:"25px"},children:[Object(T.jsx)(y.a,{color:"white",size:"sm"}),Object(T.jsx)("span",{className:"ml-50",children:"Loading..."})]}):Object(T.jsx)(d.a.Ripple,{className:"ml-2",color:"primary",type:"submit",style:{marginTop:"25px"},children:Object(T.jsx)("span",{children:"Submit"})})})]})})]})]})}},472:function(e,a,t){"use strict";t.d(a,"a",(function(){return r})),t.d(a,"b",(function(){return c})),t.d(a,"c",(function(){return o}));t(0);var s=t(127),r=function(e){try{var a=e.response;404===a.status||401===a.status||400===a.status||500===a.status||409===a.status?s.f.error(a.data.message,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}):s.f.error("The server is under maintenance",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}catch(a){s.f.error("Please check your connection",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}},c=function(e){try{var a=e.response;404!==a.status&&401!==a.status&&400!==a.status||s.f.error(a.data.errors?a.data.errors[Object.keys(a.data.errors)[0]]:a.data.message,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}catch(a){s.f.error("Please check your connection",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}},o=function(e){var a=e.data.message||"success";s.f.success(a,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}},489:function(e,a,t){"use strict";var s=t(14),r=t(15),c=t(0),o=t.n(c),i=t(5),n=t.n(i),l=t(58),p=t.n(l),d=t(83),u=n.a.oneOfType([n.a.number,n.a.string]),j=n.a.oneOfType([n.a.bool,n.a.string,n.a.number,n.a.shape({size:u,order:u,offset:u})]),b={children:n.a.node,hidden:n.a.bool,check:n.a.bool,size:n.a.string,for:n.a.string,tag:d.tagPropType,className:n.a.string,cssModule:n.a.object,xs:j,sm:j,md:j,lg:j,xl:j,widths:n.a.array},m={tag:"label",widths:["xs","sm","md","lg","xl"]},h=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},g=function(e){var a=e.className,t=e.cssModule,c=e.hidden,i=e.widths,n=e.tag,l=e.check,u=e.size,j=e.for,b=Object(r.a)(e,["className","cssModule","hidden","widths","tag","check","size","for"]),m=[];i.forEach((function(a,s){var r=e[a];if(delete b[a],r||""===r){var c,o=!s;if(Object(d.isObject)(r)){var i,n=o?"-":"-"+a+"-";c=h(o,a,r.size),m.push(Object(d.mapToCssModules)(p()(((i={})[c]=r.size||""===r.size,i["order"+n+r.order]=r.order||0===r.order,i["offset"+n+r.offset]=r.offset||0===r.offset,i))),t)}else c=h(o,a,r),m.push(c)}}));var g=Object(d.mapToCssModules)(p()(a,!!c&&"sr-only",!!l&&"form-check-label",!!u&&"col-form-label-"+u,m,!!m.length&&"col-form-label"),t);return o.a.createElement(n,Object(s.a)({htmlFor:j},b,{className:g}))};g.propTypes=b,g.defaultProps=m,a.a=g},496:function(e,a,t){"use strict";var s=t(14),r=t(15),c=t(59),o=t(122),i=t(0),n=t.n(i),l=t(5),p=t.n(l),d=t(58),u=t.n(d),j=t(83),b={children:p.a.node,inline:p.a.bool,tag:j.tagPropType,innerRef:p.a.oneOfType([p.a.object,p.a.func,p.a.string]),className:p.a.string,cssModule:p.a.object},m=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(c.a)(t)),t.submit=t.submit.bind(Object(c.a)(t)),t}Object(o.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,c=e.inline,o=e.tag,i=e.innerRef,l=Object(r.a)(e,["className","cssModule","inline","tag","innerRef"]),p=Object(j.mapToCssModules)(u()(a,!!c&&"form-inline"),t);return n.a.createElement(o,Object(s.a)({},l,{ref:i,className:p}))},a}(i.Component);m.propTypes=b,m.defaultProps={tag:"form"},a.a=m},502:function(e,a,t){"use strict";var s=t(14),r=t(15),c=t(0),o=t.n(c),i=t(5),n=t.n(i),l=t(58),p=t.n(l),d=t(83),u={tag:d.tagPropType,type:n.a.string,size:n.a.string,color:n.a.string,className:n.a.string,cssModule:n.a.object,children:n.a.string},j=function(e){var a=e.className,t=e.cssModule,c=e.type,i=e.size,n=e.color,l=e.children,u=e.tag,j=Object(r.a)(e,["className","cssModule","type","size","color","children","tag"]),b=Object(d.mapToCssModules)(p()(a,!!i&&"spinner-"+c+"-"+i,"spinner-"+c,!!n&&"text-"+n),t);return o.a.createElement(u,Object(s.a)({role:"status"},j,{className:b}),l&&o.a.createElement("span",{className:Object(d.mapToCssModules)("sr-only",t)},l))};j.propTypes=u,j.defaultProps={tag:"div",type:"border",children:"Loading..."},a.a=j}}]);
//# sourceMappingURL=340.2df749f4.chunk.js.map