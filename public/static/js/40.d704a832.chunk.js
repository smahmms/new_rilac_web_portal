(this["webpackJsonprilac-web"]=this["webpackJsonprilac-web"]||[]).push([[40],{2363:function(e,t,a){"use strict";a.r(t);var c=a(121),s=a(1),n=a(497),o=a(16),r=a(0),i=(a(85),a(1553)),l=a(470),u=a(496),d=a(483),b=a(482),j=a(480),g=a(486),h=a(484),f=a(485),O=a(1488),m=a(489),p=a(1513),v=a(1485),x=a(502),y=a(478),_=a(648),C=a(472),k=a(660),N=a(474),S=(a(950),a(951),a(952),a(953),a(954),a(955)),w=a(956),P=(a(758),a(662),a(1126),a(949),a(1280),a(495)),M=a(487),T=a(6);t.default=function(){var e,t=JSON.parse(localStorage.getItem("userData")),a=Object(_.a)(),H=Object(o.a)(a,2),B=(H[0],H[1],Object(r.useRef)()),z=Object(r.useRef)(),A=Object(r.useRef)(),F=Object(r.useRef)(),I=Object(r.useRef)(),R=Object(k.g)(),q=Object(r.useState)(!1),E=Object(o.a)(q,2),J=E[0],L=E[1],D=Object(r.useState)({fb:!1,google:!1}),G=Object(o.a)(D,2),V=G[0],Q=G[1],U=Object(r.useState)([]),K=Object(o.a)(U,2),W=K[0],X=K[1],Y=Object(r.useState)([]),Z=Object(o.a)(Y,2),$=Z[0],ee=Z[1],te=Object(r.useState)([]),ae=Object(o.a)(te,2),ce=ae[0],se=ae[1],ne=Object(r.useState)([]),oe=Object(o.a)(ne,2),re=oe[0],ie=oe[1],le=Object(r.useState)(JSON.parse(localStorage.getItem("adCampaignInfo"))),ue=Object(o.a)(le,2),de=ue[0],be=ue[1],je=Object(r.useState)([]),ge=Object(o.a)(je,2),he=ge[0],fe=ge[1];Object(r.useEffect)((function(){localStorage.setItem("useBMStoken",!1),localStorage.setItem("usePMStoken",!1),y.a.getQuotaList().then((function(e){console.log(e);var t,a=[],c=Object(n.a)(e.data.payload);try{for(c.s();!(t=c.n()).done;){var s=t.value;!0===s.is_approved&&a.push(s)}}catch(o){c.e(o)}finally{c.f()}X(a)})).catch((function(e){Object(C.a)(e),console.log(e)})),y.a.googleCampaignAdvertisingChannelType().then((function(e){console.log(e),ee(e.data.payload)})).catch((function(e){Object(C.a)(e),console.log(e)})),y.a.facebookCampaignSpecialAdCategories().then((function(e){console.log(e),se(e.data.payload)})).catch((function(e){Object(C.a)(e),console.log(e)})),y.a.facebookCampaignObjectives().then((function(e){console.log(e),ie(e.data.payload)})).catch((function(e){Object(C.a)(e),console.log(e)})),y.a.customerBusinessList().then((function(e){var t=e.data.payload;fe(t.map((function(e){return{value:e.id,label:e.businessname}})))})).catch((function(e){console.log(e.response),Object(C.a)(e)}))}),[]);return Object(T.jsxs)(r.Fragment,{children:[Object(T.jsx)(l.a.Ripple,{className:"mb-1",color:"primary",tag:N.b,to:"vendor"===(null===t||void 0===t?void 0:t.role)?"/adCampaignlistVendor":"/adCampaignlist",children:Object(T.jsxs)("div",{className:"d-flex align-items-center",children:[Object(T.jsx)(i.a,{size:17,style:{marginRight:"5px"}}),Object(T.jsx)("span",{children:"Back"})]})}),Object(T.jsxs)(u.a,{style:{width:"100%"},onSubmit:function(e){e.preventDefault(),L(!0),console.log(de),y.a.editAdCampaign(de).then((function(e){L(!1),Object(C.c)(e),console.log(e),R.push("vendor"===(null===t||void 0===t?void 0:t.role)?"/adCampaignlistVendor":"/adCampaignlist")})).catch((function(e){L(!1),Object(C.a)(e),console.log(e.response)}))},autoComplete:"off",children:["vendor"!==(null===t||void 0===t?void 0:t.role)&&Object(T.jsxs)(d.a,{children:[Object(T.jsx)(b.a,{className:"border-bottom",children:Object(T.jsx)(j.a,{tag:"h6",children:"Create Ad Campaign"})}),Object(T.jsx)(g.a,{className:"mt-1",children:Object(T.jsxs)(h.a,{children:[Object(T.jsx)(f.a,{sm:"4",children:Object(T.jsxs)(O.a,{children:[Object(T.jsxs)(m.a,{for:"name",children:["Ad Campaign Name",Object(T.jsx)("span",{style:{color:"red"},children:"*"})]}),Object(T.jsx)(p.a,{type:"text",name:"name",id:"name",value:de.name,onChange:function(e){be(Object(s.a)(Object(s.a)({},de),{},{name:e.target.value}))},required:!0,placeholder:"name here..."})]})}),Object(T.jsx)(f.a,{sm:"4",children:Object(T.jsxs)(O.a,{children:[Object(T.jsxs)(m.a,{for:"campaign_type",children:["Campaign Type",Object(T.jsx)("span",{style:{color:"red"},children:"*"})]}),Object(T.jsx)(P.a,{theme:M.i,maxMenuHeight:200,ref:z,className:"react-select",classNamePrefix:"select",value:{value:de.campaign_type,label:de.campaign_type},onChange:function(e){be(Object(s.a)(Object(s.a)({},de),{},{campaign_type:e.value}))},options:[{value:"both",label:"both"},{value:"facebook",label:"facebook"},{value:"google",label:"google"}],menuPlacement:"auto"}),Object(T.jsx)(p.a,{required:!0,style:{opacity:0,width:"100%",height:0},onFocus:function(e){return z.current.select.focus()},value:de.campaign_type||"",onChange:function(e){return""}})]})}),Object(T.jsx)(f.a,{sm:"4",children:Object(T.jsxs)(O.a,{children:[Object(T.jsx)(m.a,{for:"merchant_id",children:"Select a Merchant"}),Object(T.jsx)(P.a,{theme:M.i,maxMenuHeight:200,className:"react-select",classNamePrefix:"select",value:[].concat(Object(c.a)(he),[{value:"self",label:"Self"}]).find((function(e){return e.value===(null===de||void 0===de?void 0:de.business_id)})),onChange:function(e){be(Object(s.a)(Object(s.a)({},de),{},{business_id:e.value}))},options:[{value:"self",label:"Self"}].concat(Object(c.a)(he)),menuPlacement:"auto"})]})}),"self"===de.business_id&&Object(T.jsx)(f.a,{sm:"4",children:Object(T.jsxs)(O.a,{children:[Object(T.jsxs)(m.a,{for:"budget",children:["Select Budget",Object(T.jsx)("span",{style:{color:"red"},children:"*"})]}),Object(T.jsx)(P.a,{theme:M.i,ref:B,maxMenuHeight:200,className:"react-select",classNamePrefix:"select",value:{value:de.budget_id,label:null===(e=W.find((function(e){return parseInt(e.id)===de.budget_id})))||void 0===e?void 0:e.title},onChange:function(e){be(Object(s.a)(Object(s.a)({},de),{},{budget_id:e.value}))},options:W.map((function(e){return{value:e.id,label:e.title}})),menuPlacement:"auto"}),Object(T.jsx)(p.a,{required:!0,style:{opacity:0,width:"100%",height:0},onFocus:function(e){return B.current.select.focus()},value:de.budget_id||"",onChange:function(e){return""}})]})})]})})]}),Object(T.jsxs)(d.a,{children:[Object(T.jsxs)(b.a,{className:"border-bottom",children:[Object(T.jsxs)(j.a,{tag:"h6",children:[Object(T.jsx)("img",{src:w.a,width:"30%",className:"mr-1"})," Facebook"]}),Object(T.jsx)(v.a,{type:"switch",onChange:function(e){e.target.checked?Q(Object(s.a)(Object(s.a)({},V),{},{fb:!0})):Q(Object(s.a)(Object(s.a)({},V),{},{fb:!1}))},id:"fb"})]}),V.fb&&Object(T.jsx)(g.a,{style:{paddingTop:"15px"},children:Object(T.jsxs)(h.a,{children:[Object(T.jsxs)(f.a,{sm:"4",children:[Object(T.jsxs)(O.a,{children:[Object(T.jsxs)(m.a,{for:"objective",children:["Objective",Object(T.jsx)("span",{style:{color:"red"},children:"*"})]}),Object(T.jsx)(P.a,{ref:A,theme:M.i,maxMenuHeight:200,className:"react-select",classNamePrefix:"select",value:{value:de.objective,label:de.objective||"select..."},onChange:function(e){be(Object(s.a)(Object(s.a)({},de),{},{objective:e.value}))},options:re.map((function(e){return{value:e.objectives,label:e.objectives}})),menuPlacement:"auto"})]}),Object(T.jsx)(p.a,{required:!0,style:{opacity:0,width:"100%",height:0},onFocus:function(e){return A.current.select.focus()},value:de.objective||"",onChange:function(e){return""}})]}),Object(T.jsxs)(f.a,{sm:"4",children:[Object(T.jsxs)(O.a,{children:[Object(T.jsxs)(m.a,{for:"special_ad_categories",children:["Special Ad Categories",Object(T.jsx)("span",{style:{color:"red"},children:"*"})]}),Object(T.jsx)(P.a,{ref:F,theme:M.i,maxMenuHeight:200,className:"react-select",classNamePrefix:"select",value:{value:de.special_ad_categories,label:de.special_ad_categories||"select..."},onChange:function(e){be(Object(s.a)(Object(s.a)({},de),{},{special_ad_categories:e.value}))},options:ce.map((function(e){return{value:e.catagories,label:e.catagories}})),menuPlacement:"auto"})]}),Object(T.jsx)(p.a,{required:!0,style:{opacity:0,width:"100%",height:0},onFocus:function(e){return F.current.select.focus()},value:de.special_ad_categories||"",onChange:function(e){return""}})]}),Object(T.jsx)(f.a,{sm:"4",className:"mt-2",children:Object(T.jsx)(O.a,{children:Object(T.jsx)(v.a,{type:"switch",onChange:function(e){e.target.checked?be(Object(s.a)(Object(s.a)({},de),{},{facebook_status:1})):be(Object(s.a)(Object(s.a)({},de),{},{facebook_status:0}))},id:"statusfb",checked:de.facebook_status,label:"Facebook Campaign Status"})})})]})})]}),Object(T.jsxs)(d.a,{children:[Object(T.jsxs)(b.a,{className:"border-bottom",children:[Object(T.jsxs)(j.a,{tag:"h6",children:[Object(T.jsx)("img",{src:S.a,width:"30%",className:"mr-1"})," Google"]}),Object(T.jsx)(v.a,{type:"switch",onChange:function(e){e.target.checked?Q(Object(s.a)(Object(s.a)({},V),{},{google:!0})):Q(Object(s.a)(Object(s.a)({},V),{},{google:!1}))},id:"google"})]}),V.google&&Object(T.jsx)(g.a,{style:{paddingTop:"15px"},children:Object(T.jsxs)(h.a,{children:[Object(T.jsxs)(f.a,{sm:"4",children:[Object(T.jsxs)(O.a,{children:[Object(T.jsxs)(m.a,{for:"google_advertising_channel_type",children:["Advertising Channel Type",Object(T.jsx)("span",{style:{color:"red"},children:"*"})]}),Object(T.jsx)(P.a,{ref:I,theme:M.i,maxMenuHeight:200,className:"react-select",classNamePrefix:"select",value:{value:de.google_advertising_channel_type,label:de.google_advertising_channel_type||"select..."},onChange:function(e){be(Object(s.a)(Object(s.a)({},de),{},{google_advertising_channel_type:e.value}))},options:$.map((function(e){return{value:e.channel_type,label:e.channel_type}})),menuPlacement:"auto"})]}),Object(T.jsx)(p.a,{required:!0,style:{opacity:0,width:"100%",height:0},onFocus:function(e){return I.current.select.focus()},value:de.google_advertising_channel_type||"",onChange:function(e){return""}})]}),Object(T.jsx)(f.a,{sm:"4",className:"mt-2",children:Object(T.jsx)(O.a,{children:Object(T.jsx)(v.a,{type:"switch",onChange:function(e){e.target.checked?be(Object(s.a)(Object(s.a)({},de),{},{google_status:1})):be(Object(s.a)(Object(s.a)({},de),{},{google_status:0}))},id:"status",checked:de.google_status,label:"Google Campaign Status"})})})]})})]}),Object(T.jsx)(d.a,{children:Object(T.jsx)(g.a,{children:Object(T.jsx)(h.a,{children:Object(T.jsx)(f.a,{sm:"12",className:"text-center",children:J?Object(T.jsxs)(l.a.Ripple,{color:"primary",className:"mr-1",disabled:!0,children:[Object(T.jsx)(x.a,{color:"white",size:"sm"}),Object(T.jsx)("span",{className:"ml-50",children:"Loading..."})]}):Object(T.jsx)(l.a.Ripple,{className:"ml-2",color:"primary",type:"submit",children:Object(T.jsx)("span",{children:"Update"})})})})})})]})]})}},472:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return n})),a.d(t,"c",(function(){return o}));a(0);var c=a(127),s=function(e){try{var t=e.response;404===t.status||401===t.status||400===t.status||500===t.status||409===t.status?c.f.error(t.data.message,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}):c.f.error("The server is under maintenance",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}catch(t){c.f.error("Please check your connection",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}},n=function(e){try{var t=e.response;404!==t.status&&401!==t.status&&400!==t.status||c.f.error(t.data.errors?t.data.errors[Object.keys(t.data.errors)[0]]:t.data.message,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}catch(t){c.f.error("Please check your connection",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}},o=function(e){var t=e.data.message||"success";c.f.success(t,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}},489:function(e,t,a){"use strict";var c=a(14),s=a(15),n=a(0),o=a.n(n),r=a(5),i=a.n(r),l=a(58),u=a.n(l),d=a(83),b=i.a.oneOfType([i.a.number,i.a.string]),j=i.a.oneOfType([i.a.bool,i.a.string,i.a.number,i.a.shape({size:b,order:b,offset:b})]),g={children:i.a.node,hidden:i.a.bool,check:i.a.bool,size:i.a.string,for:i.a.string,tag:d.tagPropType,className:i.a.string,cssModule:i.a.object,xs:j,sm:j,md:j,lg:j,xl:j,widths:i.a.array},h={tag:"label",widths:["xs","sm","md","lg","xl"]},f=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},O=function(e){var t=e.className,a=e.cssModule,n=e.hidden,r=e.widths,i=e.tag,l=e.check,b=e.size,j=e.for,g=Object(s.a)(e,["className","cssModule","hidden","widths","tag","check","size","for"]),h=[];r.forEach((function(t,c){var s=e[t];if(delete g[t],s||""===s){var n,o=!c;if(Object(d.isObject)(s)){var r,i=o?"-":"-"+t+"-";n=f(o,t,s.size),h.push(Object(d.mapToCssModules)(u()(((r={})[n]=s.size||""===s.size,r["order"+i+s.order]=s.order||0===s.order,r["offset"+i+s.offset]=s.offset||0===s.offset,r))),a)}else n=f(o,t,s),h.push(n)}}));var O=Object(d.mapToCssModules)(u()(t,!!n&&"sr-only",!!l&&"form-check-label",!!b&&"col-form-label-"+b,h,!!h.length&&"col-form-label"),a);return o.a.createElement(i,Object(c.a)({htmlFor:j},g,{className:O}))};O.propTypes=g,O.defaultProps=h,t.a=O},497:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var c=a(60);function s(e,t){var a="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!a){if(Array.isArray(e)||(a=Object(c.a)(e))||t&&e&&"number"===typeof e.length){a&&(e=a);var s=0,n=function(){};return{s:n,n:function(){return s>=e.length?{done:!0}:{done:!1,value:e[s++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,r=!0,i=!1;return{s:function(){a=a.call(e)},n:function(){var e=a.next();return r=e.done,e},e:function(e){i=!0,o=e},f:function(){try{r||null==a.return||a.return()}finally{if(i)throw o}}}}},662:function(e,t,a){},950:function(e,t,a){"use strict";t.a=a.p+"static/media/notification 3.4394d461.svg"},951:function(e,t,a){"use strict";t.a=a.p+"static/media/clarity_email-solid.3ca72f78.svg"},952:function(e,t,a){"use strict";t.a=a.p+"static/media/Instagram_logo_2016 1.122983bb.svg"},953:function(e,t,a){"use strict";t.a=a.p+"static/media/fa6-solid_comment-sms.eaf22ed7.svg"},954:function(e,t,a){"use strict";t.a=a.p+"static/media/logos_whatsapp.4af9df8a.svg"},955:function(e,t,a){"use strict";t.a=a.p+"static/media/google_svg 1.051baa93.svg"},956:function(e,t,a){"use strict";t.a=a.p+"static/media/ant-design_facebook-filled.e2dd56f6.svg"}}]);
//# sourceMappingURL=40.d704a832.chunk.js.map