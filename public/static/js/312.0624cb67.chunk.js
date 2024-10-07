(this["webpackJsonprilac-web"]=this["webpackJsonprilac-web"]||[]).push([[312],{2390:function(e,a,t){"use strict";t.r(a);var r=t(121),s=t(476),c=t(477),n=t(21),o=t(1),l=t(16),i=t(0),u=(t(85),t(1553)),d=t(1487),p=t(1520),b=t(470),j=t(496),m=t(483),h=t(482),O=t(480),g=t(486),v=t(484),f=t(485),y=t(1488),x=t(489),T=t(1513),S=t(1485),C=t(1511),w=t(1512),G=t(502),k=t(478),N=t(472),M=t(660),I=t(474),P=t(495),R=t(534),B=t(487),z=t(500),F=(t(642),t(6));a.default=function(){var e,a,t,L=Object(M.g)(),K=Object(i.useRef)(),A=Object(i.useRef)(),H=Object(i.useRef)(),D=Object(i.useState)(!1),E=Object(l.a)(D,2),q=E[0],W=E[1],X=Object(i.useState)({}),J=Object(l.a)(X,2),Y=J[0],Q=J[1],U=Object(i.useState)(""),V=Object(l.a)(U,2),Z=V[0],$=V[1],_=[{value:1,label:"Customer"},{value:2,label:"Agent"},{value:3,label:"Merchant"},{value:0,label:"Any"}],ee=Object(i.useState)(_),ae=Object(l.a)(ee,2),te=ae[0],re=ae[1],se=Object(i.useState)(_),ce=Object(l.a)(se,2),ne=ce[0],oe=ce[1],le=Object(i.useState)({serviceId:!1,keyword:!1}),ie=Object(l.a)(le,2),ue=ie[0],de=ie[1],pe=Object(i.useState)({serviceId:"",serviceKeyword:"",senGroupType:null,recGroupType:null,ruleProvider:"",isFinancial:!1,minimum:0,maximum:0,isSubCategory:!1,subTypes:[]}),be=Object(l.a)(pe,2),je=be[0],me=be[1],he=function(e){me(Object(o.a)(Object(o.a)({},je),{},Object(n.a)({},e.target.name,e.target.value)))},Oe=Object(i.useState)([]),ge=Object(l.a)(Oe,2),ve=ge[0],fe=ge[1],ye=function e(){var a=Math.floor(1e6*Math.random());ve.find((function(e){return e.serviceId===a}))?e():(me(Object(o.a)(Object(o.a)({},je),{},{serviceId:a})),console.log(e))};Object(i.useEffect)(Object(c.a)(Object(s.a)().mark((function e(){return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return localStorage.setItem("useBMStoken",!0),e.next=3,k.a.getServiceList().then((function(e){console.log(e),fe(e.data),localStorage.setItem("useBMStoken",!1)})).catch((function(e){401===e.response.status?(localStorage.setItem("BMSCall",!0),k.a.getBMStoken({username:R.f,password:R.d}).then((function(e){localStorage.setItem("BMStoken",e.data.jwtToken),localStorage.setItem("BMSCall",!1),setReset(!resetData)})).catch((function(e){localStorage.setItem("BMSCall",!1),console.log(e)}))):Object(N.a)(e),console.log(e.response),localStorage.setItem("useBMStoken",!1)}));case 3:ye();case 4:case"end":return e.stop()}}),e)}))),[]),Object(i.useEffect)((function(){1===je.senGroupType&&2===je.recGroupType?Q({value:"s",label:"Sender"}):2===je.senGroupType&&1===je.recGroupType?Q({value:"r",label:"Receiver"}):2===je.senGroupType&&3===je.recGroupType?Q({value:"s",label:"Sender"}):3===je.senGroupType&&2===je.recGroupType?Q({value:"r",label:"Receiver"}):1===je.senGroupType&&3===je.recGroupType?Q({value:"s",label:"Sender"}):3===je.senGroupType&&1===je.recGroupType?Q({value:"r",label:"Receiver"}):0===je.senGroupType&&0===je.recGroupType?Q({value:"",label:"Select..."}):0===je.senGroupType?Q({value:"r",label:"Receiver"}):0===je.recGroupType&&Q({value:"s",label:"Sender"}),0===je.senGroupType?oe(_.filter((function(e){return 0!==e.value}))):0===je.recGroupType?re(_.filter((function(e){return 0!==e.value}))):(re(_),oe(_))}),[je.senGroupType,je.recGroupType]),Object(i.useEffect)((function(){1===je.senGroupType&&2===je.recGroupType?Q({value:"s",label:"Sender"}):2===je.senGroupType&&1===je.recGroupType?Q({value:"r",label:"Receiver"}):2===je.senGroupType&&3===je.recGroupType?Q({value:"s",label:"Sender"}):3===je.senGroupType&&2===je.recGroupType?Q({value:"r",label:"Receiver"}):1===je.senGroupType&&3===je.recGroupType?Q({value:"s",label:"Sender"}):3===je.senGroupType&&1===je.recGroupType?Q({value:"r",label:"Receiver"}):0===je.senGroupType&&0===je.recGroupType?Q({value:"",label:"Select..."}):0===je.senGroupType?Q({value:"r",label:"Receiver"}):0===je.recGroupType&&Q({value:"s",label:"Sender"})}),[je.senGroupType,je.recGroupType]);var xe=[{name:"Service Id",minWidth:"100px",sortable:!0,selector:"serviceId"},{name:"Service Keyword",minWidth:"100px",sortable:!0,selector:"serviceKeyword"},{name:"Subtype",minWidth:"100px",sortable:!0,selector:function(e){var a;return null===(a=e.subTypes)||void 0===a?void 0:a.map((function(e){return Object(F.jsx)(p.a,{style:{marginRight:"5px"},children:e},e)}))}}];return Object(F.jsxs)(i.Fragment,{children:[Object(F.jsx)(b.a.Ripple,{className:"mb-1",color:"primary",tag:I.b,to:"/allServices",children:Object(F.jsxs)("div",{className:"d-flex align-items-center",children:[Object(F.jsx)(u.a,{size:17,style:{marginRight:"5px"}}),Object(F.jsx)("span",{children:"Back"})]})}),Object(F.jsxs)(j.a,{style:{width:"100%"},onSubmit:function(e){e.preventDefault(),localStorage.setItem("useBMStoken",!0);var a=je.serviceId,t=je.serviceKeyword,r=je.isSubCategory,s=je.subTypes;W(!0),k.a.createService({serviceId:a,serviceKeyword:t.toLowerCase(),isSubCategory:r,subTypes:s}).then((function(e){console.log(e)})).catch((function(e){Object(N.a)(e),console.log(e)}));var c=je.isFinancial,n=je.minimum,o=je.maximum,l=je.ruleProvider;l=Y.value,k.a.createServiceLogic({serviceId:a,ruleProvider:l,isFinancial:c,minimum:n,maximum:o}).then((function(e){console.log(e),W(!1),localStorage.setItem("useBMStoken",!1),Object(N.c)(e),L.push("/allServices")})).catch((function(e){W(!1),localStorage.setItem("useBMStoken",!1),Object(N.a)(e),console.log(e.response)}))},autoComplete:"off",children:[Object(F.jsxs)(m.a,{children:[Object(F.jsx)(h.a,{className:"border-bottom",children:Object(F.jsx)(O.a,{tag:"h4",children:"Add Service"})}),Object(F.jsx)(g.a,{style:{paddingTop:"15px"},children:Object(F.jsxs)(v.a,{children:[Object(F.jsx)(f.a,{sm:"6",children:Object(F.jsxs)(y.a,{children:[Object(F.jsxs)(x.a,{for:"serviceId",children:["Service ID",Object(F.jsx)("span",{style:{color:"red"},children:"*"})," (Service ID is auto generated. You can also edit this.)"]}),Object(F.jsx)(T.a,{type:"text",name:"serviceId",id:"serviceId",min:"100000",value:je.serviceId,onChange:he,onBlur:function(e){de(Object(o.a)(Object(o.a)({},ue),{},{serviceId:!1})),ve.find((function(a){return a.serviceId===e.target.value}))&&(de(Object(o.a)(Object(o.a)({},ue),{},{serviceId:!0})),me(Object(o.a)(Object(o.a)({},je),{},{serviceId:""})))},required:!0,placeholder:"100000"}),ue.serviceId&&Object(F.jsx)("small",{style:{color:"red"},children:"This Service ID is already exist."})]})}),Object(F.jsx)(f.a,{sm:"6",children:Object(F.jsxs)(y.a,{children:[Object(F.jsxs)(x.a,{for:"serviceKeyword",children:["Service Keyword",Object(F.jsx)("span",{style:{color:"red"},children:"*"})]}),Object(F.jsx)(T.a,{type:"text",name:"serviceKeyword",id:"serviceKeyword",value:je.serviceKeyword,onChange:he,onBlur:function(e){de(Object(o.a)(Object(o.a)({},ue),{},{keyword:!1})),ve.find((function(a){return a.serviceKeyword===e.target.value}))&&(de(Object(o.a)(Object(o.a)({},ue),{},{keyword:!0})),me(Object(o.a)(Object(o.a)({},je),{},{serviceKeyword:""})))},required:!0,placeholder:"keyword"}),ue.keyword&&Object(F.jsx)("small",{style:{color:"red"},children:"This Service Keyword is already exist."})]})}),Object(F.jsx)(f.a,{sm:"6",className:"mt-1",children:Object(F.jsx)(y.a,{children:Object(F.jsx)(S.a,{type:"switch",label:"Allow subtype?",id:"isSubCategory",onChange:function(e){e.target.checked?me(Object(o.a)(Object(o.a)({},je),{},{isSubCategory:!0})):me(Object(o.a)(Object(o.a)({},je),{},{isSubCategory:!1}))}})})}),je.isSubCategory&&Object(F.jsx)(f.a,{sm:"6",children:Object(F.jsxs)(y.a,{children:[Object(F.jsxs)(x.a,{for:"keyword",children:["Subtypes",Object(F.jsx)("span",{style:{color:"red"},children:"*"})]}),Object(F.jsx)("div",{className:"d-flex align-items-center",children:Object(F.jsxs)(C.a,{children:[Object(F.jsx)(T.a,{type:"text",name:"keyword",id:"keyword",value:Z,onChange:function(e){return $(e.target.value)},placeholder:"your answer"}),Object(F.jsx)(w.a,{addonType:"append",children:Object(F.jsx)(b.a,{style:{zIndex:"0"},color:"primary",outline:!0,onClick:function(){Z&&(me(Object(o.a)(Object(o.a)({},je),{},{subTypes:[].concat(Object(r.a)(je.subTypes),[Z])})),$(""))},children:"Add"})})]})}),Object(F.jsx)("div",{className:"d-flex mt-1",children:null===(e=je.subTypes)||void 0===e?void 0:e.map((function(e,a){return Object(F.jsxs)(C.a,{style:{width:"100px",marginRight:"10px"},children:[Object(F.jsx)(w.a,{addonType:"prepend",children:Object(F.jsx)(b.a,{style:{width:"35px",padding:"5px"},color:"primary",outline:!0,onClick:function(){je.subTypes.splice(je.subTypes.indexOf(e),1),me(Object(o.a)(Object(o.a)({},je),{},{subTypes:Object(r.a)(je.subTypes)}))},children:Object(F.jsx)(d.a,{size:12})})}),Object(F.jsx)(T.a,{type:"text",name:"keyword",id:"keyword",style:{fontSize:"10px",padding:"5px"},value:e,disabled:!0,onChange:function(){}})]},a)}))})]})}),Object(F.jsx)(f.a,{sm:"12",children:Object(F.jsx)("p",{className:"mx-auto mt-1 mb-1",children:"Fill Service Logic information"})}),Object(F.jsx)(f.a,{sm:"6",children:Object(F.jsxs)(y.a,{children:[Object(F.jsxs)(x.a,{for:"minimum",children:["MIN TXN Amount",Object(F.jsx)("span",{style:{color:"red"},children:"*"})]}),Object(F.jsx)(T.a,{type:"number",name:"minimum",id:"minimum",value:je.minimum,onChange:he,required:!0,placeholder:"0"})]})}),Object(F.jsx)(f.a,{sm:"6",children:Object(F.jsxs)(y.a,{children:[Object(F.jsxs)(x.a,{for:"maximum",children:["MAX TXN Amount",Object(F.jsx)("span",{style:{color:"red"},children:"*"})]}),Object(F.jsx)(T.a,{type:"number",name:"maximum",id:"maximum",value:je.maximum,onChange:he,required:!0,placeholder:"0"})]})}),Object(F.jsx)(f.a,{sm:"4",children:Object(F.jsxs)(y.a,{children:[Object(F.jsxs)(x.a,{for:"senGroupType",children:["Sender Group Type",Object(F.jsx)("span",{style:{color:"red"},children:"*"})]}),Object(F.jsx)(P.a,{ref:K,theme:B.i,maxMenuHeight:200,className:"react-select",classNamePrefix:"select",value:{value:je.senGroupType,label:(null===(a=[{value:1,label:"Customer"},{value:2,label:"Agent"},{value:3,label:"Merchant"},{value:0,label:"Any"}].find((function(e){return e.value===je.senGroupType})))||void 0===a?void 0:a.label)||"Select..."},onChange:function(e){me(Object(o.a)(Object(o.a)({},je),{},{senGroupType:e.value}))},options:te}),Object(F.jsx)(T.a,{required:!0,style:{opacity:0,width:"100%",height:0},onFocus:function(e){return A.current.select.focus()},value:(null===je||void 0===je?void 0:je.senGroupType)||"",onChange:function(e){return""}})]})}),Object(F.jsx)(f.a,{sm:"4",children:Object(F.jsxs)(y.a,{children:[Object(F.jsxs)(x.a,{for:"recGroupType",children:["Receiver Group Type",Object(F.jsx)("span",{style:{color:"red"},children:"*"})]}),Object(F.jsx)(P.a,{ref:K,theme:B.i,maxMenuHeight:200,className:"react-select",classNamePrefix:"select",value:{value:je.recGroupType,label:(null===(t=[{value:1,label:"Customer"},{value:2,label:"Agent"},{value:3,label:"Merchant"},{value:0,label:"Any"}].find((function(e){return e.value===je.recGroupType})))||void 0===t?void 0:t.label)||"Select..."},onChange:function(e){me(Object(o.a)(Object(o.a)({},je),{},{recGroupType:e.value}))},options:ne}),Object(F.jsx)(T.a,{required:!0,style:{opacity:0,width:"100%",height:0},onFocus:function(e){return H.current.select.focus()},value:(null===je||void 0===je?void 0:je.recGroupType)||"",onChange:function(e){return""}})]})}),Object(F.jsx)(f.a,{sm:"4",children:Object(F.jsxs)(y.a,{children:[Object(F.jsxs)(x.a,{for:"ruleProvider",children:["Reward Priority",Object(F.jsx)("span",{style:{color:"red"},children:"*"})]}),Object(F.jsx)(P.a,{ref:K,theme:B.i,maxMenuHeight:200,className:"react-select",classNamePrefix:"select",value:{value:Y.value,label:Y.label?Y.label:"Select..."},onChange:function(e){Q({value:e.value,label:e.label})},options:[{value:"s",label:"Sender"},{value:"r",label:"Reciever"}]}),Object(F.jsx)(T.a,{required:!0,style:{opacity:0,width:"100%",height:0},onFocus:function(e){return K.current.select.focus()},value:(null===Y||void 0===Y?void 0:Y.value)||"",onChange:function(e){return""}})]})}),Object(F.jsx)(f.a,{sm:"12",className:"mt-1",children:Object(F.jsx)(y.a,{children:Object(F.jsx)(S.a,{onChange:function(e){e.target.checked?me(Object(o.a)(Object(o.a)({},je),{},{isFinancial:!0})):me(Object(o.a)(Object(o.a)({},je),{},{isFinancial:!1}))},type:"switch",id:"isFinancial",label:"Is Financial?"})})})]})})]}),Object(F.jsxs)(m.a,{children:[Object(F.jsx)(h.a,{className:"border-bottom",children:Object(F.jsx)(O.a,{tag:"h4",children:"Existing Services"})}),Object(F.jsx)(g.a,{style:{paddingTop:"15px"},children:Object(F.jsx)(z.a,{column:xe,TableData:ve})})]}),Object(F.jsx)(m.a,{children:Object(F.jsx)(g.a,{children:Object(F.jsx)(f.a,{sm:"12",className:"text-center",children:q?Object(F.jsxs)(b.a.Ripple,{color:"primary",className:"mr-1",disabled:!0,children:[Object(F.jsx)(G.a,{color:"white",size:"sm"}),Object(F.jsx)("span",{className:"ml-50",children:"Loading..."})]}):Object(F.jsx)(b.a.Ripple,{className:"ml-2",color:"primary",type:"submit",children:Object(F.jsx)("span",{children:"Submit"})})})})})]})]})}},472:function(e,a,t){"use strict";t.d(a,"a",(function(){return s})),t.d(a,"b",(function(){return c})),t.d(a,"c",(function(){return n}));t(0);var r=t(127),s=function(e){try{var a=e.response;404===a.status||401===a.status||400===a.status||500===a.status||409===a.status?r.f.error(a.data.message,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}):r.f.error("The server is under maintenance",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}catch(a){r.f.error("Please check your connection",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}},c=function(e){try{var a=e.response;404!==a.status&&401!==a.status&&400!==a.status||r.f.error(a.data.errors?a.data.errors[Object.keys(a.data.errors)[0]]:a.data.message,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}catch(a){r.f.error("Please check your connection",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}},n=function(e){var a=e.data.message||"success";r.f.success(a,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}},484:function(e,a,t){"use strict";var r=t(14),s=t(15),c=t(0),n=t.n(c),o=t(5),l=t.n(o),i=t(58),u=t.n(i),d=t(83),p=l.a.oneOfType([l.a.number,l.a.string]),b={tag:d.tagPropType,noGutters:l.a.bool,className:l.a.string,cssModule:l.a.object,form:l.a.bool,xs:p,sm:p,md:p,lg:p,xl:p},j={tag:"div",widths:["xs","sm","md","lg","xl"]},m=function(e){var a=e.className,t=e.cssModule,c=e.noGutters,o=e.tag,l=e.form,i=e.widths,p=Object(s.a)(e,["className","cssModule","noGutters","tag","form","widths"]),b=[];i.forEach((function(a,t){var r=e[a];if(delete p[a],r){var s=!t;b.push(s?"row-cols-"+r:"row-cols-"+a+"-"+r)}}));var j=Object(d.mapToCssModules)(u()(a,c?"no-gutters":null,l?"form-row":"row",b),t);return n.a.createElement(o,Object(r.a)({},p,{className:j}))};m.propTypes=b,m.defaultProps=j,a.a=m},489:function(e,a,t){"use strict";var r=t(14),s=t(15),c=t(0),n=t.n(c),o=t(5),l=t.n(o),i=t(58),u=t.n(i),d=t(83),p=l.a.oneOfType([l.a.number,l.a.string]),b=l.a.oneOfType([l.a.bool,l.a.string,l.a.number,l.a.shape({size:p,order:p,offset:p})]),j={children:l.a.node,hidden:l.a.bool,check:l.a.bool,size:l.a.string,for:l.a.string,tag:d.tagPropType,className:l.a.string,cssModule:l.a.object,xs:b,sm:b,md:b,lg:b,xl:b,widths:l.a.array},m={tag:"label",widths:["xs","sm","md","lg","xl"]},h=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},O=function(e){var a=e.className,t=e.cssModule,c=e.hidden,o=e.widths,l=e.tag,i=e.check,p=e.size,b=e.for,j=Object(s.a)(e,["className","cssModule","hidden","widths","tag","check","size","for"]),m=[];o.forEach((function(a,r){var s=e[a];if(delete j[a],s||""===s){var c,n=!r;if(Object(d.isObject)(s)){var o,l=n?"-":"-"+a+"-";c=h(n,a,s.size),m.push(Object(d.mapToCssModules)(u()(((o={})[c]=s.size||""===s.size,o["order"+l+s.order]=s.order||0===s.order,o["offset"+l+s.offset]=s.offset||0===s.offset,o))),t)}else c=h(n,a,s),m.push(c)}}));var O=Object(d.mapToCssModules)(u()(a,!!c&&"sr-only",!!i&&"form-check-label",!!p&&"col-form-label-"+p,m,!!m.length&&"col-form-label"),t);return n.a.createElement(l,Object(r.a)({htmlFor:b},j,{className:O}))};O.propTypes=j,O.defaultProps=m,a.a=O},496:function(e,a,t){"use strict";var r=t(14),s=t(15),c=t(59),n=t(122),o=t(0),l=t.n(o),i=t(5),u=t.n(i),d=t(58),p=t.n(d),b=t(83),j={children:u.a.node,inline:u.a.bool,tag:b.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},m=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(c.a)(t)),t.submit=t.submit.bind(Object(c.a)(t)),t}Object(n.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,c=e.inline,n=e.tag,o=e.innerRef,i=Object(s.a)(e,["className","cssModule","inline","tag","innerRef"]),u=Object(b.mapToCssModules)(p()(a,!!c&&"form-inline"),t);return l.a.createElement(n,Object(r.a)({},i,{ref:o,className:u}))},a}(o.Component);m.propTypes=j,m.defaultProps={tag:"form"},a.a=m},500:function(e,a,t){"use strict";var r=t(16),s=t(0),c=t(1552),n=t(502),o=t(499),l=t.n(o),i=t(501),u=t.n(i),d=t(6);a.a=function(e){var a=e.column,t=e.TableData,o=e.TableDataLoading,i=Object(s.useState)(0),p=Object(r.a)(i,2),b=p[0],j=p[1];return Object(d.jsx)(s.Fragment,{children:Object(d.jsx)(u.a,{noHeader:!0,pagination:!0,columns:a,paginationPerPage:10,className:"react-dataTable",sortIcon:Object(d.jsx)(c.a,{size:10}),paginationDefaultPage:b+1,paginationComponent:function(){return Object(d.jsx)(l.a,{previousLabel:"",nextLabel:"",forcePage:b,onPageChange:function(e){return function(e){j(e.selected)}(e)},pageCount:t.length?t.length/10:1,breakLabel:"...",pageRangeDisplayed:2,marginPagesDisplayed:2,activeClassName:"active",pageClassName:"page-item",breakClassName:"page-item",breakLinkClassName:"page-link",nextLinkClassName:"page-link",nextClassName:"page-item next",previousClassName:"page-item prev",previousLinkClassName:"page-link",pageLinkClassName:"page-link",containerClassName:"pagination react-paginate separated-pagination pagination-sm justify-content-end pr-1 mt-1"})},data:t,progressPending:o,progressComponent:Object(d.jsx)(n.a,{color:"primary"}),responsive:!0,pointerOnHover:!0,highlightOnHover:!0,striped:!0})})}},502:function(e,a,t){"use strict";var r=t(14),s=t(15),c=t(0),n=t.n(c),o=t(5),l=t.n(o),i=t(58),u=t.n(i),d=t(83),p={tag:d.tagPropType,type:l.a.string,size:l.a.string,color:l.a.string,className:l.a.string,cssModule:l.a.object,children:l.a.string},b=function(e){var a=e.className,t=e.cssModule,c=e.type,o=e.size,l=e.color,i=e.children,p=e.tag,b=Object(s.a)(e,["className","cssModule","type","size","color","children","tag"]),j=Object(d.mapToCssModules)(u()(a,!!o&&"spinner-"+c+"-"+o,"spinner-"+c,!!l&&"text-"+l),t);return n.a.createElement(p,Object(r.a)({role:"status"},b,{className:j}),i&&n.a.createElement("span",{className:Object(d.mapToCssModules)("sr-only",t)},i))};b.propTypes=p,b.defaultProps={tag:"div",type:"border",children:"Loading..."},a.a=b}}]);
//# sourceMappingURL=312.0624cb67.chunk.js.map