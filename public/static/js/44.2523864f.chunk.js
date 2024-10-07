/*! For license information please see 44.2523864f.chunk.js.LICENSE.txt */
(this["webpackJsonprilac-web"]=this["webpackJsonprilac-web"]||[]).push([[44],{2122:function(e,t,a){"use strict";a.r(t);var n=a(121),r=a(21),o=a(16),s=a(0),c=a(660),i=a(499),l=a.n(i),u=a(501),d=a.n(u),p=a(1653),f=a(1552),b=(a(487),a(483)),m=a(482),g=a(480),h=a(496),O=a(484),j=a(485),y=a(489),v=a(1513),x=a(470),C=a(502),w=a(486),N=a(478),T=a(490),k=a.n(T),P=a(481),M=a.n(P),_=a(479),E=a(472),R=a(6),S=M()(k.a);t.default=function(){Object(c.g)();var e=Object(s.useState)(""),t=Object(o.a)(e,2),a=t[0],i=t[1],u=Object(s.useState)(0),T=Object(o.a)(u,2),P=T[0],M=T[1],B=Object(s.useState)(!0),D=Object(o.a)(B,2),L=D[0],z=D[1],A=Object(s.useState)(!1),F=Object(o.a)(A,2),H=F[0],Y=F[1],I=Object(s.useState)([]),U=Object(o.a)(I,2),W=U[0],G=U[1],J=Object(s.useState)(0),V=Object(o.a)(J,2),K=V[0],q=V[1],Q=localStorage.getItem("ip"),X=Object(s.useState)(!1),Z=Object(o.a)(X,2),$=(Z[0],Z[1],function(e){return S.fire(Object(r.a)({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",allowOutsideClick:!1,allowEscapeKey:!1,showCancelButton:!0,showLoaderOnConfirm:!0,confirmButtonText:"Yes, delete it!",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-outline-danger ml-1"},buttonsStyling:!1,preConfirm:function(){return N.a.depositDelete({deposit_id:e}).then((function(e){var t=e.data.payload.balance;return q(void 0===t?0:t),e})).catch((function(e){return console.log(e),Object(E.a)(e),!1}))}},"allowOutsideClick",(function(){return!k.a.isLoading()}))).then((function(t){t.isConfirmed&&(!function(e){var t=W.filter((function(t){return t.id!==e}));G(t)}(e),S.fire({icon:"success",title:"Deleted!",text:"The Deposit has been deleted.",customClass:{confirmButton:"btn btn-success"}}))}))});Object(s.useEffect)((function(){N.a.depositLogList({page:1,limit:30,from_id:1,to_id:2,ip:Q}).then((function(e){z(!1),G(e.data.payload.data),console.log(e.data.payload.data),q(e.data.payload.current_balance)})).catch((function(e){console.log(e),Object(E.a)(e)}))}),[]);var ee=[{name:"Time",selector:function(e){return Object(_.b)(e.created_at)},minWidth:"200px",sortable:!0},{name:"Till",selector:"till_id",minWidth:"100px",sortable:!0},{name:"Deposit Amount",selector:function(e,t){return"".concat(window.CURRENCY_SYMBOL," ").concat(Object(_.d)((+e.deposit_amount).toFixed(2)))},minWidth:"150px",sortable:!0},{name:"Till Balance",selector:function(e,t){return"".concat(window.CURRENCY_SYMBOL," ").concat(Object(_.d)((+e.current_balance).toFixed(2)))},minWidth:"200px",sortable:!0},{name:"User",selector:"created_by",minWidth:"200px",sortable:!0},{name:"Actions",allowOverflow:!0,cell:function(e){return Object(R.jsx)(p.a,{size:15,color:"red",style:{cursor:"pointer"},onClick:function(t){return $(e.id)}})}}];return Object(R.jsxs)(R.Fragment,{children:[Object(R.jsxs)(b.a,{className:"py-0 px-1",children:[Object(R.jsx)(m.a,{className:"border-bottom",children:Object(R.jsx)(g.a,{tag:"h4",children:"Deposit to Safe"})}),Object(R.jsx)(h.a,{className:"my-2",style:{width:"100%"},onSubmit:function(e){e.preventDefault(),""!==a&&0!==Number(a)&&(Y(!0),N.a.submitDeposit({deposit_amount:a,from_id:1,to_id:2,ip:Q}).then((function(e){Object(E.c)(e);var t=e.data.payload,a=(t.current_balance,t.deposit_amount),r=t.till_balance,o=t.till_id,s=t.username,c={id:t.id,created_at:(new Date).toISOString(),till_id:o,deposit_amount:a,created_by:s,current_balance:r};q(r),G([c].concat(Object(n.a)(W))),i(""),Y(!1)})).catch((function(e){Object(E.a)(e),Y(!1)})))},autoComplete:"off",children:Object(R.jsxs)(O.a,{children:[Object(R.jsxs)(j.a,{md:"6",children:[Object(R.jsx)(y.a,{for:"From",children:"Amount"}),Object(R.jsx)(v.a,{style:{width:"100%"},placeholder:"1000",type:"number",min:"0",id:"search-input",value:a,onChange:function(e){i(e.target.value)}})]}),Object(R.jsx)(j.a,{md:"2",children:H?Object(R.jsxs)(x.a.Ripple,{color:"primary",style:{marginTop:"22px"},disabled:!0,children:[Object(R.jsx)(C.a,{color:"white",size:"sm"}),Object(R.jsx)("small",{className:"ml-50",children:"Loading..."})]}):Object(R.jsx)(x.a.Ripple,{color:"primary",style:{marginTop:"22px"},type:"submit",children:Object(R.jsx)("span",{className:"align-middle ml-50",children:"Deposit"})})}),Object(R.jsxs)(j.a,{md:"4",children:[Object(R.jsx)(y.a,{for:"From",children:"Current Till Cash Balance"}),Object(R.jsx)("h2",{children:"".concat(window.CURRENCY_SYMBOL," ").concat(Object(_.d)((+K).toFixed(2)))})]})]})})]}),Object(R.jsxs)(b.a,{children:[Object(R.jsx)(m.a,{className:"border-bottom",children:Object(R.jsx)(g.a,{tag:"h4",children:"Last 30 Items"})}),Object(R.jsx)(d.a,{noHeader:!0,pagination:!0,columns:ee,paginationPerPage:5,className:"react-dataTable",sortIcon:Object(R.jsx)(f.a,{size:10}),paginationDefaultPage:P+1,paginationComponent:function(){var e;return Object(R.jsx)(l.a,(e={previousLabel:"",nextLabel:"",forcePage:P,onPageChange:function(e){return function(e){M(e.selected)}(e)},pageCount:W.length?W.length/5:1,breakLabel:"...",pageRangeDisplayed:2,marginPagesDisplayed:2,activeClassName:"active",pageClassName:"page-item",breakClassName:"page-item",breakLinkClassName:"page-link",nextLinkClassName:"page-link",nextClassName:"page-item next",previousClassName:"page-item prev",previousLinkClassName:"page-link",pageLinkClassName:"page-link"},Object(r.a)(e,"breakClassName","page-item"),Object(r.a)(e,"breakLinkClassName","page-link"),Object(r.a)(e,"containerClassName","pagination react-paginate separated-pagination pagination-sm justify-content-end pr-1 mt-1"),e))},data:W,progressPending:L,progressComponent:Object(R.jsx)(C.a,{color:"primary"}),responsive:!0}),Object(R.jsx)(w.a,{style:{paddingTop:"15px"}})]})]})}},472:function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"b",(function(){return o})),a.d(t,"c",(function(){return s}));a(0);var n=a(127),r=function(e){try{var t=e.response;404===t.status||401===t.status||400===t.status||500===t.status||409===t.status?n.f.error(t.data.message,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}):n.f.error("The server is under maintenance",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}catch(t){n.f.error("Please check your connection",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}},o=function(e){try{var t=e.response;404!==t.status&&401!==t.status&&400!==t.status||n.f.error(t.data.errors?t.data.errors[Object.keys(t.data.errors)[0]]:t.data.message,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}catch(t){n.f.error("Please check your connection",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}},s=function(e){var t=e.data.message||"success";n.f.success(t,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}},479:function(e,t,a){"use strict";a.d(t,"b",(function(){return s})),a.d(t,"d",(function(){return c})),a.d(t,"c",(function(){return i})),a.d(t,"a",(function(){return l}));var n=a(476),r=a(477),o={year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric"},s=function(e){return new Date(e).toLocaleDateString(void 0,o)},c=function(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},i=function(){var e=Object(r.a)(Object(n.a)().mark((function e(t){return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(401!==t){e.next=4;break}return window.location.href="/Adminlogin",e.next=4,localStorage.clear();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(e,t,a){var n=document.createElement("a"),r=function(e){var a;return a="",a+=t.join(","),a+="\n",e.forEach((function(e){var n=0;t.forEach((function(t){n>0&&(a+=","),a+=e[t],n++})),a+="\n"})),a}(e);if(null!==r){var o=JSON.parse(localStorage.getItem("userData")),s="".concat(a,"_").concat((new Date).toISOString(),"_").concat(o.fullname.replaceAll(/\s/g,""),".csv");r.match(/^data:text\/csv/i)||(r="data:text/csv;charset=utf-8,".concat(r)),n.setAttribute("href",encodeURI(r)),n.setAttribute("download",s),n.click()}}},480:function(e,t,a){"use strict";var n=a(14),r=a(15),o=a(0),s=a.n(o),c=a(5),i=a.n(c),l=a(58),u=a.n(l),d=a(83),p={tag:d.tagPropType,className:i.a.string,cssModule:i.a.object},f=function(e){var t=e.className,a=e.cssModule,o=e.tag,c=Object(r.a)(e,["className","cssModule","tag"]),i=Object(d.mapToCssModules)(u()(t,"card-title"),a);return s.a.createElement(o,Object(n.a)({},c,{className:i}))};f.propTypes=p,f.defaultProps={tag:"div"},t.a=f},481:function(e,t,a){e.exports=function(e,t){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function r(e,t,a){return t&&n(e.prototype,t),a&&n(e,a),e}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}function s(e){return s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},s(e)}function c(e,t){return c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},c(e,t)}function i(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function l(e,t){return!t||"object"!==typeof t&&"function"!==typeof t?i(e):t}function u(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=s(e)););return e}function d(e,t,a){return d="undefined"!==typeof Reflect&&Reflect.get?Reflect.get:function(e,t,a){var n=u(e,t);if(n){var r=Object.getOwnPropertyDescriptor(n,t);return r.get?r.get.call(a):r.value}},d(e,t,a||e)}e=e&&e.hasOwnProperty("default")?e.default:e,t=t&&t.hasOwnProperty("default")?t.default:t;var p=[{key:"title",getter:function(e){return e.getTitle()}},{key:"html",getter:function(e){return e.getHtmlContainer()}},{key:"confirmButtonText",getter:function(e){return e.getConfirmButton()}},{key:"cancelButtonText",getter:function(e){return e.getCancelButton()}},{key:"footer",getter:function(e){return e.getFooter()}}],f=function(){},b=function(e){return new Error("sweetalert2-react-content: ".concat(e))};function m(n){return function(c){function i(){return a(this,i),l(this,s(i).apply(this,arguments))}return o(i,c),r(i,[{key:"_main",value:function(a){return(a=Object.assign({},a)).onOpen=a.onOpen||f,a.onDestroy=a.onDestroy||f,p.forEach((function(r){var o=r.key,s=r.getter;if(e.isValidElement(a[o])){var c,i=a[o];a[o]=" ";var l=a.onOpen;a.onOpen=function(e){c=s(n),t.render(i,c),l(e)};var u=a.onDestroy;a.onDestroy=function(e){u(e),c&&t.unmountComponentAtNode(c)}}})),d(s(i.prototype),"_main",this).call(this,a)}},{key:"update",value:function(){throw b("Swal.update() is not yet supported. See https://github.com/sweetalert2/sweetalert2-react-content/issues/73")}}],[{key:"argsToParams",value:function(t){if(e.isValidElement(t[0])||e.isValidElement(t[1])){var a={};return["title","html","icon"].forEach((function(e,n){void 0!==t[n]&&(a[e]=t[n])})),a}return n.argsToParams(t)}}]),i}(n)}return m}(a(0),a(33))},482:function(e,t,a){"use strict";var n=a(14),r=a(15),o=a(0),s=a.n(o),c=a(5),i=a.n(c),l=a(58),u=a.n(l),d=a(83),p={tag:d.tagPropType,className:i.a.string,cssModule:i.a.object},f=function(e){var t=e.className,a=e.cssModule,o=e.tag,c=Object(r.a)(e,["className","cssModule","tag"]),i=Object(d.mapToCssModules)(u()(t,"card-header"),a);return s.a.createElement(o,Object(n.a)({},c,{className:i}))};f.propTypes=p,f.defaultProps={tag:"div"},t.a=f},483:function(e,t,a){"use strict";var n=a(14),r=a(15),o=a(0),s=a.n(o),c=a(5),i=a.n(c),l=a(58),u=a.n(l),d=a(83),p={tag:d.tagPropType,inverse:i.a.bool,color:i.a.string,body:i.a.bool,outline:i.a.bool,className:i.a.string,cssModule:i.a.object,innerRef:i.a.oneOfType([i.a.object,i.a.string,i.a.func])},f=function(e){var t=e.className,a=e.cssModule,o=e.color,c=e.body,i=e.inverse,l=e.outline,p=e.tag,f=e.innerRef,b=Object(r.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),m=Object(d.mapToCssModules)(u()(t,"card",!!i&&"text-white",!!c&&"card-body",!!o&&(l?"border":"bg")+"-"+o),a);return s.a.createElement(p,Object(n.a)({},b,{className:m,ref:f}))};f.propTypes=p,f.defaultProps={tag:"div"},t.a=f},484:function(e,t,a){"use strict";var n=a(14),r=a(15),o=a(0),s=a.n(o),c=a(5),i=a.n(c),l=a(58),u=a.n(l),d=a(83),p=i.a.oneOfType([i.a.number,i.a.string]),f={tag:d.tagPropType,noGutters:i.a.bool,className:i.a.string,cssModule:i.a.object,form:i.a.bool,xs:p,sm:p,md:p,lg:p,xl:p},b={tag:"div",widths:["xs","sm","md","lg","xl"]},m=function(e){var t=e.className,a=e.cssModule,o=e.noGutters,c=e.tag,i=e.form,l=e.widths,p=Object(r.a)(e,["className","cssModule","noGutters","tag","form","widths"]),f=[];l.forEach((function(t,a){var n=e[t];if(delete p[t],n){var r=!a;f.push(r?"row-cols-"+n:"row-cols-"+t+"-"+n)}}));var b=Object(d.mapToCssModules)(u()(t,o?"no-gutters":null,i?"form-row":"row",f),a);return s.a.createElement(c,Object(n.a)({},p,{className:b}))};m.propTypes=f,m.defaultProps=b,t.a=m},485:function(e,t,a){"use strict";var n=a(14),r=a(15),o=a(0),s=a.n(o),c=a(5),i=a.n(c),l=a(58),u=a.n(l),d=a(83),p=i.a.oneOfType([i.a.number,i.a.string]),f=i.a.oneOfType([i.a.bool,i.a.number,i.a.string,i.a.shape({size:i.a.oneOfType([i.a.bool,i.a.number,i.a.string]),order:p,offset:p})]),b={tag:d.tagPropType,xs:f,sm:f,md:f,lg:f,xl:f,className:i.a.string,cssModule:i.a.object,widths:i.a.array},m={tag:"div",widths:["xs","sm","md","lg","xl"]},g=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},h=function(e){var t=e.className,a=e.cssModule,o=e.widths,c=e.tag,i=Object(r.a)(e,["className","cssModule","widths","tag"]),l=[];o.forEach((function(t,n){var r=e[t];if(delete i[t],r||""===r){var o=!n;if(Object(d.isObject)(r)){var s,c=o?"-":"-"+t+"-",p=g(o,t,r.size);l.push(Object(d.mapToCssModules)(u()(((s={})[p]=r.size||""===r.size,s["order"+c+r.order]=r.order||0===r.order,s["offset"+c+r.offset]=r.offset||0===r.offset,s)),a))}else{var f=g(o,t,r);l.push(f)}}})),l.length||l.push("col");var p=Object(d.mapToCssModules)(u()(t,l),a);return s.a.createElement(c,Object(n.a)({},i,{className:p}))};h.propTypes=b,h.defaultProps=m,t.a=h},486:function(e,t,a){"use strict";var n=a(14),r=a(15),o=a(0),s=a.n(o),c=a(5),i=a.n(c),l=a(58),u=a.n(l),d=a(83),p={tag:d.tagPropType,className:i.a.string,cssModule:i.a.object,innerRef:i.a.oneOfType([i.a.object,i.a.string,i.a.func])},f=function(e){var t=e.className,a=e.cssModule,o=e.innerRef,c=e.tag,i=Object(r.a)(e,["className","cssModule","innerRef","tag"]),l=Object(d.mapToCssModules)(u()(t,"card-body"),a);return s.a.createElement(c,Object(n.a)({},i,{className:l,ref:o}))};f.propTypes=p,f.defaultProps={tag:"div"},t.a=f},489:function(e,t,a){"use strict";var n=a(14),r=a(15),o=a(0),s=a.n(o),c=a(5),i=a.n(c),l=a(58),u=a.n(l),d=a(83),p=i.a.oneOfType([i.a.number,i.a.string]),f=i.a.oneOfType([i.a.bool,i.a.string,i.a.number,i.a.shape({size:p,order:p,offset:p})]),b={children:i.a.node,hidden:i.a.bool,check:i.a.bool,size:i.a.string,for:i.a.string,tag:d.tagPropType,className:i.a.string,cssModule:i.a.object,xs:f,sm:f,md:f,lg:f,xl:f,widths:i.a.array},m={tag:"label",widths:["xs","sm","md","lg","xl"]},g=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},h=function(e){var t=e.className,a=e.cssModule,o=e.hidden,c=e.widths,i=e.tag,l=e.check,p=e.size,f=e.for,b=Object(r.a)(e,["className","cssModule","hidden","widths","tag","check","size","for"]),m=[];c.forEach((function(t,n){var r=e[t];if(delete b[t],r||""===r){var o,s=!n;if(Object(d.isObject)(r)){var c,i=s?"-":"-"+t+"-";o=g(s,t,r.size),m.push(Object(d.mapToCssModules)(u()(((c={})[o]=r.size||""===r.size,c["order"+i+r.order]=r.order||0===r.order,c["offset"+i+r.offset]=r.offset||0===r.offset,c))),a)}else o=g(s,t,r),m.push(o)}}));var h=Object(d.mapToCssModules)(u()(t,!!o&&"sr-only",!!l&&"form-check-label",!!p&&"col-form-label-"+p,m,!!m.length&&"col-form-label"),a);return s.a.createElement(i,Object(n.a)({htmlFor:f},b,{className:h}))};h.propTypes=b,h.defaultProps=m,t.a=h},496:function(e,t,a){"use strict";var n=a(14),r=a(15),o=a(59),s=a(122),c=a(0),i=a.n(c),l=a(5),u=a.n(l),d=a(58),p=a.n(d),f=a(83),b={children:u.a.node,inline:u.a.bool,tag:f.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},m=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(o.a)(a)),a.submit=a.submit.bind(Object(o.a)(a)),a}Object(s.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.submit=function(){this.ref&&this.ref.submit()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,o=e.inline,s=e.tag,c=e.innerRef,l=Object(r.a)(e,["className","cssModule","inline","tag","innerRef"]),u=Object(f.mapToCssModules)(p()(t,!!o&&"form-inline"),a);return i.a.createElement(s,Object(n.a)({},l,{ref:c,className:u}))},t}(c.Component);m.propTypes=b,m.defaultProps={tag:"form"},t.a=m},502:function(e,t,a){"use strict";var n=a(14),r=a(15),o=a(0),s=a.n(o),c=a(5),i=a.n(c),l=a(58),u=a.n(l),d=a(83),p={tag:d.tagPropType,type:i.a.string,size:i.a.string,color:i.a.string,className:i.a.string,cssModule:i.a.object,children:i.a.string},f=function(e){var t=e.className,a=e.cssModule,o=e.type,c=e.size,i=e.color,l=e.children,p=e.tag,f=Object(r.a)(e,["className","cssModule","type","size","color","children","tag"]),b=Object(d.mapToCssModules)(u()(t,!!c&&"spinner-"+o+"-"+c,"spinner-"+o,!!i&&"text-"+i),a);return s.a.createElement(p,Object(n.a)({role:"status"},f,{className:b}),l&&s.a.createElement("span",{className:Object(d.mapToCssModules)("sr-only",a)},l))};f.propTypes=p,f.defaultProps={tag:"div",type:"border",children:"Loading..."},t.a=f}}]);
//# sourceMappingURL=44.2523864f.chunk.js.map