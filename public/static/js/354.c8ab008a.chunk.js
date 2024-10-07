(this["webpackJsonprilac-web"]=this["webpackJsonprilac-web"]||[]).push([[354],{2574:function(e,t,a){"use strict";a.r(t);var n=a(16),s=a(121),c=a(0),r=a(1515),i=a(483),o=a(482),l=a(480),d=a(470),j=a(486),u=a(548),b=a(1525),h=a(1526),O=a(550),m=a(551),p=a(58),x=a.n(p),g=a(478),f=a(472),v=a(660),y=a(474),C=a(21),N=a(1583),k=a(1581),S=a(1653),w=a(1639),L=a(1586),_=a(484),R=a(485),D=a(489),A=a(1513),T=a(579),P=a(1845),W=a(1501),z=a(1510),B=a(615),I=a(479),E=a(481),U=a.n(E),H=a(490),M=a.n(H),J=a(6),V=U()(M.a),F=function(e){var t=e.TableDataLoading,a=e.roleList,s=e.history,r=e.setRefresh,l=e.refresh,d=Object(c.useState)(""),u=Object(n.a)(d,2),b=u[0],h=u[1],O=Object(c.useState)([]),m=Object(n.a)(O,2),p=m[0],x=m[1],v=[{name:"Role Name",minWidth:"100px",sortable:!0,selector:"role_name"},{name:"Assign-user-count",minWidth:"100px",sortable:!0,selector:function(e){return e.users.length}},{name:"Created By",minWidth:"100px",sortable:!0,selector:"created_by"},{name:"Created At",minWidth:"250px",sortable:!0,selector:function(e){return e.created_at?Object(I.b)(e.created_at):""}},{name:"Action",minWidth:"150px",selector:function(e){return 200===e.user_type?"Super Admin":Object(J.jsxs)(c.Fragment,{children:[Object(J.jsx)("span",{title:"View",children:Object(J.jsx)(N.a,{size:15,color:"dodgerblue",style:{cursor:"pointer"},onClick:function(){s.push("/viewUserRole/".concat(e.id))}})}),"\xa0\xa0\xa0\xa0",Object(J.jsx)("span",{title:"Edit",children:Object(J.jsx)(k.a,{size:15,color:"blue",style:{cursor:"pointer"},onClick:function(t){s.push("/editUserRole/".concat(e.id))}})}),"\xa0\xa0\xa0\xa0",Object(J.jsx)("span",{title:"Delete",children:Object(J.jsx)(S.a,{size:15,color:"red",style:{cursor:"pointer"},onClick:function(t){var a,n;0===e.users.length?(a=e.id,n="Do you want to delete?",V.fire(Object(C.a)({title:"Are you sure?",text:n,icon:"warning",allowOutsideClick:!1,allowEscapeKey:!1,showCancelButton:!0,confirmButtonText:"Yes",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"},showLoaderOnConfirm:!0,preConfirm:function(){return g.a.deleteRole({role_id:a}).then((function(e){Object(f.c)(e),console.log(e),r(!l)})).catch((function(e){console.log(e.response),Object(f.a)(e)}))},buttonsStyling:!1},"allowOutsideClick",(function(){return!M.a.isLoading()}))).then((function(e){e.isConfirmed}))):V.fire({title:"Delete assigned users first",icon:"warning",allowOutsideClick:!1,allowEscapeKey:!1,showCancelButton:!0,showConfirmButton:!1,customClass:{cancelButton:"btn btn-danger ml-1"},showLoaderOnConfirm:!1,buttonsStyling:!1}).then((function(e){e.isConfirmed}))}})})]})}}];return Object(J.jsxs)(i.a,{children:[Object(J.jsx)(o.a,{children:Object(J.jsxs)(_.a,{style:{width:"100%"},children:[Object(J.jsxs)(R.a,{className:"d-flex align-items-center mt-1",sm:"6",children:[Object(J.jsx)(D.a,{className:"mr-1",for:"search-input",children:"Search"}),Object(J.jsx)(A.a,{style:{maxWidth:300},className:"dataTable-filter mb-50",type:"text",bsSize:"sm",id:"search-input",value:b,onChange:function(e){var t=e.target.value,n=[];h(t),t.length&&(n=a.filter((function(e){var a,n,s=null===(a=e.role_name)||void 0===a?void 0:a.toLowerCase().startsWith(t.toLowerCase()),c=null===(n=e.role_name)||void 0===n?void 0:n.toLowerCase().includes(t.toLowerCase());return s||(!s&&c?c:null)})),x(n),h(t))}})]}),Object(J.jsx)(R.a,{className:"d-flex align-items-center justify-content-end mt-1",sm:"6",children:Object(J.jsxs)(T.a,{className:"ml-1",children:[Object(J.jsxs)(P.a,{color:"secondary",caret:!0,outline:!0,children:[Object(J.jsx)(w.a,{size:15}),Object(J.jsx)("span",{className:"align-middle ml-50",children:"Export"})]}),Object(J.jsx)(W.a,{right:!0,children:Object(J.jsxs)(z.a,{className:"w-100",onClick:function(){return Object(I.a)(a,Object.keys(a[0]||{}),"User Role")},children:[Object(J.jsx)(L.a,{size:15}),Object(J.jsx)("span",{className:"align-middle ml-50",children:"CSV"})]})})]})})]})}),Object(J.jsx)(j.a,{children:Object(J.jsx)(_.a,{children:Object(J.jsx)(R.a,{md:"12",children:Object(J.jsx)(B.a,{column:v,TableData:b.length?p:a,TableDataLoading:t})})})})]})},q=a(1549),K=a(497),Y=a(533),G=a(536),Q=a(531),X=a(555),Z=a(502),$=function(e){var t=e.modal,a=e.toggleModal,s=e.roleInfo,r=e.setRefresh,u=e.refresh,b=e.action,h=Object(c.useState)(!0),O=Object(n.a)(h,2),m=(O[0],O[1],Object(c.useState)([])),p=Object(n.a)(m,2),x=(p[0],p[1],Object(c.useState)([])),v=Object(n.a)(x,2),y=(v[0],v[1],Object(c.useState)([])),C=Object(n.a)(y,2),N=C[0],k=C[1],S=Object(c.useState)(!1),w=Object(n.a)(S,2),L=w[0],D=w[1];console.log(s),Object(c.useEffect)((function(){s.id&&g.a.getApprovalEntryforRole(s.id).then((function(e){console.log(e);var t,a=[],n=Object(K.a)(e.data.payload.module_data.roles);try{var s=function(){var n=t.value,s=e.data.payload.approved.find((function(e){return e.role_id===n.role_id}));s?a.push({role_id:n.role_name,approved_by:s.approved_by,approved_at:s.approved_at}):a.push({role_id:n.role_name,approved_by:"--",approved_at:""})};for(n.s();!(t=n.n()).done;)s()}catch(c){n.e(c)}finally{n.f()}k(a)})).catch((function(e){console.log(e),Object(f.a)(e)}))}),[s.id]);return Object(J.jsxs)(Y.a,{size:"xl",isOpen:t,toggle:a,style:1===b?{border:"2px solid green"}:2===b?{border:"2px solid red"}:{},children:[Object(J.jsx)(G.a,{toggle:a,children:1===b?"Approve Role":2===b?"Reject Role":"Role Details"}),Object(J.jsxs)(Q.a,{children:[Object(J.jsx)(_.a,{children:Object(J.jsxs)(R.a,{sm:"12",children:[Object(J.jsxs)(i.a,{children:[Object(J.jsx)(o.a,{children:Object(J.jsx)(l.a,{children:"Approval Entry"})}),Object(J.jsx)(j.a,{children:Object(J.jsx)(_.a,{children:Object(J.jsx)(R.a,{sm:"12",children:Object(J.jsxs)(X.a,{children:[Object(J.jsxs)("tr",{children:[Object(J.jsx)("th",{children:"Role Name"}),Object(J.jsx)("th",{children:"Approved By"}),Object(J.jsx)("th",{children:"Approved At"})]}),0!==(null===N||void 0===N?void 0:N.length)?null===N||void 0===N?void 0:N.map((function(e,t){return Object(J.jsxs)("tr",{children:[Object(J.jsx)("td",{children:e.role_id}),Object(J.jsx)("td",{children:e.approved_by}),Object(J.jsx)("td",{children:e.approved_at?Object(I.b)(e.approved_at||""):"--"})]},t)})):Object(J.jsx)(Z.a,{className:"text-center"})]})})})})]}),"`"]})}),Object(J.jsx)(_.a,{children:Object(J.jsx)(R.a,{sm:"12",className:"text-center",children:L?Object(J.jsxs)(d.a.Ripple,{color:"primary",className:"mr-1",disabled:!0,style:{marginTop:"25px"},children:[Object(J.jsx)(Z.a,{color:"white",size:"sm"}),Object(J.jsx)("span",{className:"ml-50",children:"Loading..."})]}):Object(J.jsx)(d.a.Ripple,{className:"ml-2",color:"primary",onClick:function(){D(!0),g.a.actionRole({id:s.id,action_id:b}).then((function(e){r(!u),Object(f.c)(e),D(!1),a(),console.log(e)})).catch((function(e){console.log(e.response),D(!1),a(),Object(f.a)(e)}))},type:"button",style:{marginTop:"25px"},children:Object(J.jsx)("span",{children:"Confirm"})})})})]})]})},ee=(U()(M.a),function(e){var t=e.TableDataLoading,a=e.roleList,s=e.history,r=e.setRefresh,l=e.refresh,d=Object(c.useState)(""),u=Object(n.a)(d,2),b=u[0],h=u[1],O=Object(c.useState)([]),m=Object(n.a)(O,2),p=m[0],x=m[1],g=JSON.parse(localStorage.getItem("userData")),f=Object(c.useState)(0),v=Object(n.a)(f,2),y=v[0],C=v[1],k=Object(c.useState)({}),E=Object(n.a)(k,2),U=E[0],H=E[1],M=Object(c.useState)(!1),V=Object(n.a)(M,2),F=V[0],K=V[1],Y=[{name:"Role Name",minWidth:"100px",sortable:!0,selector:"role_name"},{name:"Assign-user-count",minWidth:"100px",sortable:!0,selector:function(e){return e.users.length}},{name:"Created By",minWidth:"100px",sortable:!0,selector:"created_by"},{name:"Created At",minWidth:"250px",sortable:!0,selector:function(e){return e.created_at?Object(I.b)(e.created_at):""}},{name:"Request Action",minWidth:"100px",sortable:!0,selector:"action"},{name:"Action",minWidth:"150px",selector:function(e){return g.id===e.created_by?"Pending (You created this.)":Object(J.jsxs)(J.Fragment,{children:[Object(J.jsx)("span",{title:"View",children:Object(J.jsx)(N.a,{size:15,color:"dodgerblue",style:{cursor:"pointer"},onClick:function(){s.push("/viewUserPendingRole/".concat(e.id))}})}),"\xa0\xa0\xa0\xa0",Object(J.jsx)("span",{title:"Approve",children:Object(J.jsx)(q.a,{size:15,color:"dodgerblue",style:{cursor:"pointer"},onClick:function(){H(e),K(!0),C(1)}})}),"\xa0\xa0\xa0\xa0",Object(J.jsx)("span",{title:"Reject",children:Object(J.jsx)(S.a,{size:15,color:"red",style:{cursor:"pointer"},onClick:function(){H(e),K(!0),C(2)}})})]})}}];return Object(J.jsxs)(i.a,{children:[Object(J.jsx)(o.a,{children:Object(J.jsxs)(_.a,{style:{width:"100%"},children:[Object(J.jsxs)(R.a,{className:"d-flex align-items-center mt-1",sm:"6",children:[Object(J.jsx)(D.a,{className:"mr-1",for:"search-input",children:"Search"}),Object(J.jsx)(A.a,{style:{maxWidth:300},className:"dataTable-filter mb-50",type:"text",bsSize:"sm",id:"search-input",value:b,onChange:function(e){var t=e.target.value,n=[];h(t),t.length&&(n=a.filter((function(e){var a,n,s=null===(a=e.role_name)||void 0===a?void 0:a.toLowerCase().startsWith(t.toLowerCase()),c=null===(n=e.role_name)||void 0===n?void 0:n.toLowerCase().includes(t.toLowerCase());return s||(!s&&c?c:null)})),x(n),h(t))}})]}),Object(J.jsx)(R.a,{className:"d-flex align-items-center justify-content-end mt-1",sm:"6",children:Object(J.jsxs)(T.a,{className:"ml-1",children:[Object(J.jsxs)(P.a,{color:"secondary",caret:!0,outline:!0,children:[Object(J.jsx)(w.a,{size:15}),Object(J.jsx)("span",{className:"align-middle ml-50",children:"Export"})]}),Object(J.jsx)(W.a,{right:!0,children:Object(J.jsxs)(z.a,{className:"w-100",onClick:function(){return Object(I.a)(a,Object.keys(a[0]||{}),"User Role")},children:[Object(J.jsx)(L.a,{size:15}),Object(J.jsx)("span",{className:"align-middle ml-50",children:"CSV"})]})})]})})]})}),Object(J.jsx)(j.a,{children:Object(J.jsx)(_.a,{children:Object(J.jsx)(R.a,{md:"12",children:Object(J.jsx)(B.a,{column:Y,TableData:b.length?p:a,TableDataLoading:t})})})}),Object(J.jsx)($,{modal:F,toggleModal:function(){return K(!F)},roleInfo:U,refresh:l,setRefresh:r,action:y})]})}),te=(U()(M.a),function(e){var t=e.TableDataLoading,a=e.roleList,s=e.history,r=Object(c.useState)(""),l=Object(n.a)(r,2),d=l[0],u=l[1],b=Object(c.useState)([]),h=Object(n.a)(b,2),O=h[0],m=h[1],p=(JSON.parse(localStorage.getItem("userData")),[{name:"Role Name",minWidth:"100px",sortable:!0,selector:"role_name"},{name:"Assign-user-count",minWidth:"100px",sortable:!0,selector:function(e){return e.users.length}},{name:"Request Action",minWidth:"100px",sortable:!0,selector:"action"},{name:"Created At",minWidth:"250px",sortable:!0,selector:function(e){return e.created_at?Object(I.b)(e.created_at):""}},{name:"Action",minWidth:"150px",selector:function(e){return Object(J.jsx)("span",{title:"View",children:Object(J.jsx)(N.a,{size:15,color:"dodgerblue",style:{cursor:"pointer"},onClick:function(){s.push("/viewUserPendingRole/".concat(e.id))}})})}}]);return Object(J.jsxs)(i.a,{children:[Object(J.jsx)(o.a,{children:Object(J.jsxs)(_.a,{style:{width:"100%"},children:[Object(J.jsxs)(R.a,{className:"d-flex align-items-center mt-1",sm:"6",children:[Object(J.jsx)(D.a,{className:"mr-1",for:"search-input",children:"Search"}),Object(J.jsx)(A.a,{style:{maxWidth:300},className:"dataTable-filter mb-50",type:"text",bsSize:"sm",id:"search-input",value:d,onChange:function(e){var t=e.target.value,n=[];u(t),t.length&&(n=a.filter((function(e){var a,n,s=null===(a=e.role_name)||void 0===a?void 0:a.toLowerCase().startsWith(t.toLowerCase()),c=null===(n=e.role_name)||void 0===n?void 0:n.toLowerCase().includes(t.toLowerCase());return s||(!s&&c?c:null)})),m(n),u(t))}})]}),Object(J.jsx)(R.a,{className:"d-flex align-items-center justify-content-end mt-1",sm:"6",children:Object(J.jsxs)(T.a,{className:"ml-1",children:[Object(J.jsxs)(P.a,{color:"secondary",caret:!0,outline:!0,children:[Object(J.jsx)(w.a,{size:15}),Object(J.jsx)("span",{className:"align-middle ml-50",children:"Export"})]}),Object(J.jsx)(W.a,{right:!0,children:Object(J.jsxs)(z.a,{className:"w-100",onClick:function(){return Object(I.a)(a,Object.keys(a[0]||{}),"User Role")},children:[Object(J.jsx)(L.a,{size:15}),Object(J.jsx)("span",{className:"align-middle ml-50",children:"CSV"})]})})]})})]})}),Object(J.jsx)(j.a,{children:Object(J.jsx)(_.a,{children:Object(J.jsx)(R.a,{md:"12",children:Object(J.jsx)(B.a,{column:p,TableData:d.length?O:a,TableDataLoading:t})})})})]})});t.default=function(){var e,t=(JSON.parse(localStorage.getItem("AssignedMenus"))||[]).map((function(e){return e.submenu.map((function(e){return e.id}))})),a=(e=[]).concat.apply(e,Object(s.a)(t)),p=Object(v.g)(),C=Object(c.useState)([]),N=Object(n.a)(C,2),k=N[0],S=N[1],w=Object(c.useState)([]),L=Object(n.a)(w,2),_=L[0],R=L[1],D=Object(c.useState)([]),A=Object(n.a)(D,2),T=A[0],P=A[1],W=Object(c.useState)(!0),z=Object(n.a)(W,2),B=z[0],I=z[1],E=Object(c.useState)(!1),U=Object(n.a)(E,2),H=U[0],M=U[1],V=Object(c.useState)("1"),q=Object(n.a)(V,2),K=q[0],Y=q[1],G=function(e){K!==e&&Y(e)};return Object(c.useEffect)((function(){localStorage.setItem("useBMStoken",!1),localStorage.setItem("usePMStoken",!1),g.a.roleList().then((function(e){console.log("roleList",e.data.payload),S(e.data.payload.List),R(e.data.payload.PendingList),P(e.data.payload.MyPendingList),I(!1)})).catch((function(e){Object(f.a)(e),console.log(e),I(!1)}))}),[H]),Object(J.jsxs)(c.Fragment,{children:[Object(J.jsxs)(i.a,{children:[Object(J.jsxs)(o.a,{className:"border-bottom",children:[Object(J.jsx)(l.a,{tag:"h4",children:"User Role"}),Object(J.jsx)("div",{children:a.includes(69)&&Object(J.jsx)(d.a.Ripple,{className:"ml-2",color:"primary",tag:y.b,to:"/createUserRole",children:Object(J.jsxs)("div",{className:"d-flex align-items-center",children:[Object(J.jsx)(r.a,{size:17,style:{marginRight:"5px"}}),Object(J.jsx)("span",{children:"Create User Role"})]})})})]}),Object(J.jsx)(j.a,{children:Object(J.jsxs)(u.a,{tabs:!0,children:[Object(J.jsx)(b.a,{children:Object(J.jsx)(h.a,{className:x()({active:"1"===K}),onClick:function(){G("1")},children:" Role List"})}),Object(J.jsx)(b.a,{children:Object(J.jsx)(h.a,{className:x()({active:"2"===K}),onClick:function(){G("2")},children:" My Pending"})}),a.includes(72)&&Object(J.jsx)(b.a,{children:Object(J.jsx)(h.a,{className:x()({active:"3"===K}),onClick:function(){G("3")},children:" Approve Role"})})]})})]}),Object(J.jsx)(i.a,{children:Object(J.jsxs)(O.a,{activeTab:K,children:[Object(J.jsx)(m.a,{tabId:"1",children:Object(J.jsx)(F,{TableDataLoading:B,roleList:k,history:p,setRefresh:M,refresh:H})}),Object(J.jsx)(m.a,{tabId:"2",children:Object(J.jsx)(te,{TableDataLoading:B,roleList:T,history:p})}),Object(J.jsx)(m.a,{tabId:"3",children:Object(J.jsx)(ee,{TableDataLoading:B,roleList:_,history:p,setRefresh:M,refresh:H})})]})})]})}},472:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return c})),a.d(t,"c",(function(){return r}));a(0);var n=a(127),s=function(e){try{var t=e.response;404===t.status||401===t.status||400===t.status||500===t.status||409===t.status?n.f.error(t.data.message,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}):n.f.error("The server is under maintenance",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}catch(t){n.f.error("Please check your connection",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}},c=function(e){try{var t=e.response;404!==t.status&&401!==t.status&&400!==t.status||n.f.error(t.data.errors?t.data.errors[Object.keys(t.data.errors)[0]]:t.data.message,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}catch(t){n.f.error("Please check your connection",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}},r=function(e){var t=e.data.message||"success";n.f.success(t,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}},479:function(e,t,a){"use strict";a.d(t,"b",(function(){return r})),a.d(t,"d",(function(){return i})),a.d(t,"c",(function(){return o})),a.d(t,"a",(function(){return l}));var n=a(476),s=a(477),c={year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric"},r=function(e){return new Date(e).toLocaleDateString(void 0,c)},i=function(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},o=function(){var e=Object(s.a)(Object(n.a)().mark((function e(t){return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(401!==t){e.next=4;break}return window.location.href="/Adminlogin",e.next=4,localStorage.clear();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(e,t,a){var n=document.createElement("a"),s=function(e){var a;return a="",a+=t.join(","),a+="\n",e.forEach((function(e){var n=0;t.forEach((function(t){n>0&&(a+=","),a+=e[t],n++})),a+="\n"})),a}(e);if(null!==s){var c=JSON.parse(localStorage.getItem("userData")),r="".concat(a,"_").concat((new Date).toISOString(),"_").concat(c.fullname.replaceAll(/\s/g,""),".csv");s.match(/^data:text\/csv/i)||(s="data:text/csv;charset=utf-8,".concat(s)),n.setAttribute("href",encodeURI(s)),n.setAttribute("download",r),n.click()}}},615:function(e,t,a){"use strict";var n=a(21),s=a(16),c=a(0),r=a(1552),i=a(502),o=a(499),l=a.n(o),d=a(501),j=a.n(d),u=a(6);t.a=function(e){var t=e.column,a=e.TableData,o=e.TableDataLoading,d=Object(c.useState)(0),b=Object(s.a)(d,2),h=b[0],O=b[1];return Object(u.jsx)(c.Fragment,{children:Object(u.jsx)(j.a,{noHeader:!0,pagination:!0,columns:t,paginationPerPage:10,className:"react-dataTable",sortIcon:Object(u.jsx)(r.a,{size:10}),paginationDefaultPage:h+1,paginationComponent:function(){var e;return Object(u.jsx)(l.a,(e={previousLabel:"",nextLabel:"",forcePage:h,onPageChange:function(e){return function(e){O(e.selected)}(e)},pageCount:a.length?a.length/10:1,breakLabel:"...",pageRangeDisplayed:2,marginPagesDisplayed:2,activeClassName:"active",pageClassName:"page-item",breakClassName:"page-item",breakLinkClassName:"page-link",nextLinkClassName:"page-link",nextClassName:"page-item next",previousClassName:"page-item prev",previousLinkClassName:"page-link",pageLinkClassName:"page-link"},Object(n.a)(e,"breakClassName","page-item"),Object(n.a)(e,"breakLinkClassName","page-link"),Object(n.a)(e,"containerClassName","pagination react-paginate separated-pagination pagination-sm justify-content-end pr-1 mt-1"),e))},data:a,progressPending:o,progressComponent:Object(u.jsx)(i.a,{color:"primary"}),responsive:!0})})}}}]);
//# sourceMappingURL=354.c8ab008a.chunk.js.map