(this["webpackJsonprilac-web"]=this["webpackJsonprilac-web"]||[]).push([[54],{1160:function(e,s,a){"use strict";var t=a(0),r=a(1488),o=a(489),c=a.p+"static/media/checkmark.869b116e.svg",n=a.p+"static/media/error.f16c6683.svg",l=a(6);s.a=function(e){var s=e.password,a=e.passConfig,i=e.setIsValid,d=a.is_special_charecter,u=void 0===d||d,b=a.islowercase,p=void 0===b||b,j=a.isnumber,h=void 0===j||j,m=a.isuppercase,f=void 0===m||m,g=a.length,O=void 0===g?8:g,x=[];return s.length>=O&&x.push(0),f&&!Boolean(s.match(/[A-Z]/))||x.push(1),p&&!Boolean(s.match(/[a-z]/))||x.push(2),h&&!Boolean(s.match(/[0-9]/))||x.push(3),u&&!Boolean(s.match(/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/))||x.push(4),Object(t.useEffect)((function(){i(5===x.length||!1)}),[x]),Object(l.jsx)(t.Fragment,{children:Object(l.jsxs)(r.a,{children:[Object(l.jsx)("div",{className:"d-flex justify-content-between",children:Object(l.jsxs)(o.a,{className:"form-label",style:{color:x.includes(0)?"#4CAF50":"#fb606a"},children:[Object(l.jsx)("img",{src:x.includes(0)?c:n,height:14,width:14})," Must be minimum ",O," characters"]})}),f?Object(l.jsx)("div",{className:"d-flex justify-content-between",children:Object(l.jsxs)(o.a,{className:"form-label",style:{color:x.includes(1)?"#4CAF50":"#fb606a"},children:[Object(l.jsx)("img",{src:x.includes(1)?c:n,height:14,width:14})," Uppercase characters (A-Z)"]})}):null,p?Object(l.jsx)("div",{className:"d-flex justify-content-between",children:Object(l.jsxs)(o.a,{className:"form-label",style:{color:x.includes(2)?"#4CAF50":"#fb606a"},children:[Object(l.jsx)("img",{src:x.includes(2)?c:n,height:14,width:14})," Lowercase characters (a-z)"]})}):null,h?Object(l.jsx)("div",{className:"d-flex justify-content-between",children:Object(l.jsxs)(o.a,{className:"form-label",style:{color:x.includes(3)?"#4CAF50":"#fb606a"},children:[Object(l.jsx)("img",{src:x.includes(3)?c:n,height:14,width:14})," Must contain number (0-9)"]})}):null,u?Object(l.jsx)("div",{className:"d-flex justify-content-between",children:Object(l.jsxs)(o.a,{className:"form-label",style:{color:x.includes(4)?"#4CAF50":"#fb606a"},children:[Object(l.jsx)("img",{src:x.includes(4)?c:n,height:14,width:14})," Must contain special character"]})}):null]})})}},2353:function(e,s,a){"use strict";a.r(s);var t=a(476),r=a(477),o=a(21),c=a(1),n=a(16),l=a(478),i=a(0),d=a(129),u=a(130),b=a(780),p=a(1553),j=a(660),h=a(474),m=a(470),f=a(483),g=a(486),O=a(496),x=a(485),w=a(1488),v=a(489),y=a(1513),N=a(502),C=a(472),P=a(571),T=a(1160),M=a(6);s.default=function(){var e,s,a=Object(i.useContext)(u.a),k=Object(d.b)(),S=localStorage.getItem("username"),z=Object(j.h)(),R=Object(j.g)(),I=Object(i.useState)({}),B=Object(n.a)(I,2),E=B[0],F=B[1],A=Object(i.useState)(!1),H=Object(n.a)(A,2),L=H[0],_=H[1],q=Object(i.useState)(!0),D=Object(n.a)(q,2),J=(D[0],D[1],Object(i.useState)(!1)),V=Object(n.a)(J,2),Z=V[0],U=V[1],W=Object(i.useState)({newpassword:"",conpassword:"",oldpassword:""}),Y=Object(n.a)(W,2),$=Y[0],G=Y[1],K=Object(i.useState)({oldPass:"",newPass:"",conNewPass:""}),Q=Object(n.a)(K,2),X=Q[0],ee=Q[1];Object(i.useEffect)((function(){localStorage.setItem("useBMStoken",!1),localStorage.setItem("usePMStoken",!1),l.a.getPasswordConfig().then((function(e){console.log("getPasswordConfig",e),F(e.data.payload)})).catch((function(e){Object(C.a)(e),console.log(e)}))}),[]);var se=function(e){G(Object(c.a)(Object(c.a)({},$),{},Object(o.a)({},e.target.name,e.target.value)))};return Object(M.jsxs)(M.Fragment,{children:["/resetPassInside"===z.pathname&&Object(M.jsx)(m.a.Ripple,{className:"mb-1",color:"primary",tag:h.b,onClick:function(){return R.goBack()},children:Object(M.jsxs)("div",{className:"d-flex align-items-center",children:[Object(M.jsx)(p.a,{size:17,style:{marginRight:"5px"}}),Object(M.jsx)("span",{children:"Back"})]})}),Object(M.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(M.jsxs)("div",{style:"/resetPassInside"===z.pathname?{marginTop:"10px"}:{marginTop:"100px"},children:[Object(M.jsx)("h4",{className:"text-center mb-2",children:"Reset Password"}),Object(M.jsxs)("div",{style:{padding:"10px 20px",color:"white",backgroundColor:"#f0ad4e"},children:[Object(M.jsx)("strong",{children:"Warning!"})," Your password is expired. Please reset it."]}),Object(M.jsx)(f.a,{children:Object(M.jsx)(g.a,{children:Object(M.jsxs)(O.a,{className:"row",style:{width:"100%"},onSubmit:function(e){if(e.preventDefault(),localStorage.setItem("useBMStoken",!1),localStorage.setItem("usePMStoken",!1),ee({}),!Z)return 0;if($.newpassword!==$.conpassword)return ee(Object(c.a)(Object(c.a)({},X),{},{conNewPass:" must be same as new password."})),0;var s=$.newpassword,o=$.oldpassword;console.log({newpassword:s,oldpassword:o}),_(!0),l.a.changepassword({newpassword:s,oldpassword:o}).then((function(e){console.log(e),l.a.login({username:S,password:s}).then(function(){var s=Object(r.a)(Object(t.a)().mark((function s(r){var o;return Object(t.a)().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:o=Object(c.a)(Object(c.a)({},r.data.payload.user_info),{},{fullname:"",avatar:"https://i.imgur.com/P4b2RHh.png",accessToken:r.data.payload.token,refreshToken:r.data.payload.refresh_token,extras:{eCommerceCartItemsCount:5},role:"admin",ability:[{action:"manage",subject:"ADMIN"},{action:"manage",subject:"Auth"}]}),k(Object(b.a)(o)),a.update(o.ability),localStorage.setItem("username",S),Object(C.c)(e),"/resetPassInside"!==z.pathname&&(window.location.href=localStorage.getItem("link")),_(!1);case 7:case"end":return s.stop()}}),s)})));return function(e){return s.apply(this,arguments)}}()).catch((function(e){_(!1),Object(C.a)(e),console.log(e)}))})).catch((function(e){_(!1),Object(C.a)(e),console.log(e.response)}))},autoComplete:"off",children:[Object(M.jsx)(x.a,{sm:"12",children:Object(M.jsxs)(w.a,{children:[Object(M.jsxs)(v.a,{for:"oldpassword",children:["Old Password",Object(M.jsxs)("span",{style:{color:"red"},children:["* ",X.oldPass]})]}),Object(M.jsx)(y.a,{type:"text",name:"oldpassword",id:"oldpassword",onChange:se,required:!0,placeholder:"type here..."})]})}),Object(M.jsxs)(x.a,{sm:"12",children:[Object(M.jsxs)(w.a,{children:[Object(M.jsxs)(v.a,{for:"newpassword",children:["New Password",Object(M.jsxs)("span",{style:{color:"red"},children:["* ",X.newPass]})]}),Object(M.jsx)(P.a,{id:"newpassword",name:"newpassword",minLength:null===E||void 0===E||null===(e=E.length)||void 0===e?void 0:e.toString(),className:"input-group-merge",required:!0,onChange:se})]}),$.newpassword?Object(M.jsx)(T.a,{password:$.newpassword,setIsValid:U,passConfig:E}):null]}),Object(M.jsx)(x.a,{sm:"12",children:Object(M.jsxs)(w.a,{children:[Object(M.jsxs)(v.a,{for:"conpassword",children:["Retype New Password",Object(M.jsxs)("span",{style:{color:"red"},children:["* ",X.conNewPass]})]}),Object(M.jsx)(P.a,{id:"conpassword",name:"conpassword",minLength:null===E||void 0===E||null===(s=E.length)||void 0===s?void 0:s.toString(),className:"input-group-merge",required:!0,onChange:se})]})}),Object(M.jsx)(x.a,{sm:"12",className:"text-center",children:L?Object(M.jsxs)(m.a.Ripple,{color:"primary",className:"mr-1",disabled:!0,style:{marginTop:"25px"},children:[Object(M.jsx)(N.a,{color:"white",size:"sm"}),Object(M.jsx)("span",{className:"ml-50",children:"Loading..."})]}):Object(M.jsx)(m.a.Ripple,{className:"ml-2",color:"primary",type:"submit",style:{marginTop:"25px"},children:Object(M.jsx)("span",{children:"Reset Password"})})})]})})})]})})]})}},472:function(e,s,a){"use strict";a.d(s,"a",(function(){return r})),a.d(s,"b",(function(){return o})),a.d(s,"c",(function(){return c}));a(0);var t=a(127),r=function(e){try{var s=e.response;404===s.status||401===s.status||400===s.status||500===s.status||409===s.status?t.f.error(s.data.message,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}):t.f.error("The server is under maintenance",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}catch(s){t.f.error("Please check your connection",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}},o=function(e){try{var s=e.response;404!==s.status&&401!==s.status&&400!==s.status||t.f.error(s.data.errors?s.data.errors[Object.keys(s.data.errors)[0]]:s.data.message,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}catch(s){t.f.error("Please check your connection",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}},c=function(e){var s=e.data.message||"success";t.f.success(s,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}},483:function(e,s,a){"use strict";var t=a(14),r=a(15),o=a(0),c=a.n(o),n=a(5),l=a.n(n),i=a(58),d=a.n(i),u=a(83),b={tag:u.tagPropType,inverse:l.a.bool,color:l.a.string,body:l.a.bool,outline:l.a.bool,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},p=function(e){var s=e.className,a=e.cssModule,o=e.color,n=e.body,l=e.inverse,i=e.outline,b=e.tag,p=e.innerRef,j=Object(r.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),h=Object(u.mapToCssModules)(d()(s,"card",!!l&&"text-white",!!n&&"card-body",!!o&&(i?"border":"bg")+"-"+o),a);return c.a.createElement(b,Object(t.a)({},j,{className:h,ref:p}))};p.propTypes=b,p.defaultProps={tag:"div"},s.a=p},485:function(e,s,a){"use strict";var t=a(14),r=a(15),o=a(0),c=a.n(o),n=a(5),l=a.n(n),i=a(58),d=a.n(i),u=a(83),b=l.a.oneOfType([l.a.number,l.a.string]),p=l.a.oneOfType([l.a.bool,l.a.number,l.a.string,l.a.shape({size:l.a.oneOfType([l.a.bool,l.a.number,l.a.string]),order:b,offset:b})]),j={tag:u.tagPropType,xs:p,sm:p,md:p,lg:p,xl:p,className:l.a.string,cssModule:l.a.object,widths:l.a.array},h={tag:"div",widths:["xs","sm","md","lg","xl"]},m=function(e,s,a){return!0===a||""===a?e?"col":"col-"+s:"auto"===a?e?"col-auto":"col-"+s+"-auto":e?"col-"+a:"col-"+s+"-"+a},f=function(e){var s=e.className,a=e.cssModule,o=e.widths,n=e.tag,l=Object(r.a)(e,["className","cssModule","widths","tag"]),i=[];o.forEach((function(s,t){var r=e[s];if(delete l[s],r||""===r){var o=!t;if(Object(u.isObject)(r)){var c,n=o?"-":"-"+s+"-",b=m(o,s,r.size);i.push(Object(u.mapToCssModules)(d()(((c={})[b]=r.size||""===r.size,c["order"+n+r.order]=r.order||0===r.order,c["offset"+n+r.offset]=r.offset||0===r.offset,c)),a))}else{var p=m(o,s,r);i.push(p)}}})),i.length||i.push("col");var b=Object(u.mapToCssModules)(d()(s,i),a);return c.a.createElement(n,Object(t.a)({},l,{className:b}))};f.propTypes=j,f.defaultProps=h,s.a=f},486:function(e,s,a){"use strict";var t=a(14),r=a(15),o=a(0),c=a.n(o),n=a(5),l=a.n(n),i=a(58),d=a.n(i),u=a(83),b={tag:u.tagPropType,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},p=function(e){var s=e.className,a=e.cssModule,o=e.innerRef,n=e.tag,l=Object(r.a)(e,["className","cssModule","innerRef","tag"]),i=Object(u.mapToCssModules)(d()(s,"card-body"),a);return c.a.createElement(n,Object(t.a)({},l,{className:i,ref:o}))};p.propTypes=b,p.defaultProps={tag:"div"},s.a=p},489:function(e,s,a){"use strict";var t=a(14),r=a(15),o=a(0),c=a.n(o),n=a(5),l=a.n(n),i=a(58),d=a.n(i),u=a(83),b=l.a.oneOfType([l.a.number,l.a.string]),p=l.a.oneOfType([l.a.bool,l.a.string,l.a.number,l.a.shape({size:b,order:b,offset:b})]),j={children:l.a.node,hidden:l.a.bool,check:l.a.bool,size:l.a.string,for:l.a.string,tag:u.tagPropType,className:l.a.string,cssModule:l.a.object,xs:p,sm:p,md:p,lg:p,xl:p,widths:l.a.array},h={tag:"label",widths:["xs","sm","md","lg","xl"]},m=function(e,s,a){return!0===a||""===a?e?"col":"col-"+s:"auto"===a?e?"col-auto":"col-"+s+"-auto":e?"col-"+a:"col-"+s+"-"+a},f=function(e){var s=e.className,a=e.cssModule,o=e.hidden,n=e.widths,l=e.tag,i=e.check,b=e.size,p=e.for,j=Object(r.a)(e,["className","cssModule","hidden","widths","tag","check","size","for"]),h=[];n.forEach((function(s,t){var r=e[s];if(delete j[s],r||""===r){var o,c=!t;if(Object(u.isObject)(r)){var n,l=c?"-":"-"+s+"-";o=m(c,s,r.size),h.push(Object(u.mapToCssModules)(d()(((n={})[o]=r.size||""===r.size,n["order"+l+r.order]=r.order||0===r.order,n["offset"+l+r.offset]=r.offset||0===r.offset,n))),a)}else o=m(c,s,r),h.push(o)}}));var f=Object(u.mapToCssModules)(d()(s,!!o&&"sr-only",!!i&&"form-check-label",!!b&&"col-form-label-"+b,h,!!h.length&&"col-form-label"),a);return c.a.createElement(l,Object(t.a)({htmlFor:p},j,{className:f}))};f.propTypes=j,f.defaultProps=h,s.a=f},496:function(e,s,a){"use strict";var t=a(14),r=a(15),o=a(59),c=a(122),n=a(0),l=a.n(n),i=a(5),d=a.n(i),u=a(58),b=a.n(u),p=a(83),j={children:d.a.node,inline:d.a.bool,tag:p.tagPropType,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),className:d.a.string,cssModule:d.a.object},h=function(e){function s(s){var a;return(a=e.call(this,s)||this).getRef=a.getRef.bind(Object(o.a)(a)),a.submit=a.submit.bind(Object(o.a)(a)),a}Object(c.a)(s,e);var a=s.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.submit=function(){this.ref&&this.ref.submit()},a.render=function(){var e=this.props,s=e.className,a=e.cssModule,o=e.inline,c=e.tag,n=e.innerRef,i=Object(r.a)(e,["className","cssModule","inline","tag","innerRef"]),d=Object(p.mapToCssModules)(b()(s,!!o&&"form-inline"),a);return l.a.createElement(c,Object(t.a)({},i,{ref:n,className:d}))},s}(n.Component);h.propTypes=j,h.defaultProps={tag:"form"},s.a=h},502:function(e,s,a){"use strict";var t=a(14),r=a(15),o=a(0),c=a.n(o),n=a(5),l=a.n(n),i=a(58),d=a.n(i),u=a(83),b={tag:u.tagPropType,type:l.a.string,size:l.a.string,color:l.a.string,className:l.a.string,cssModule:l.a.object,children:l.a.string},p=function(e){var s=e.className,a=e.cssModule,o=e.type,n=e.size,l=e.color,i=e.children,b=e.tag,p=Object(r.a)(e,["className","cssModule","type","size","color","children","tag"]),j=Object(u.mapToCssModules)(d()(s,!!n&&"spinner-"+o+"-"+n,"spinner-"+o,!!l&&"text-"+l),a);return c.a.createElement(b,Object(t.a)({role:"status"},p,{className:j}),i&&c.a.createElement("span",{className:Object(u.mapToCssModules)("sr-only",a)},i))};p.propTypes=b,p.defaultProps={tag:"div",type:"border",children:"Loading..."},s.a=p},571:function(e,s,a){"use strict";var t=a(1),r=a(21),o=a(16),c=a(128),n=a(0),l=a(58),i=a.n(l),d=a(1583),u=a(1582),b=a(489),p=a(1511),j=a(1513),h=a(1512),m=a(1236),f=a(6),g=["label","hideIcon","showIcon","visible","className","htmlFor","placeholder","iconSize","inputClassName"],O=function(e){var s=e.label,a=e.hideIcon,l=e.showIcon,O=e.visible,x=e.className,w=e.htmlFor,v=e.placeholder,y=e.iconSize,N=e.inputClassName,C=Object(c.a)(e,g),P=Object(n.useState)(O),T=Object(o.a)(P,2),M=T[0],k=T[1];return Object(f.jsxs)(n.Fragment,{children:[s?Object(f.jsx)(b.a,{for:w,children:s}):null,Object(f.jsxs)(p.a,{className:i()(Object(r.a)({},x,x)),children:[Object(f.jsx)(j.a,Object(t.a)(Object(t.a)({type:!1===M?"password":"text",placeholder:v||"\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7",className:i()(Object(r.a)({},N,N))},s&&w?{id:w}:{}),C)),Object(f.jsx)(h.a,{addonType:"append",onClick:function(){return k(!M)},children:Object(f.jsx)(m.a,{className:"cursor-pointer",children:function(){var e=y||14;return!1===M?a||Object(f.jsx)(d.a,{size:e}):l||Object(f.jsx)(u.a,{size:e})}()})})]})]})};s.a=O,O.defaultProps={visible:!1}}}]);
//# sourceMappingURL=54.48134efb.chunk.js.map