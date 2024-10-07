/*! For license information please see 305.d974e201.chunk.js.LICENSE.txt */
(this["webpackJsonprilac-web"]=this["webpackJsonprilac-web"]||[]).push([[305],{2450:function(e,t,r){"use strict";r.r(t);var n=r(476),a=r(477),o=r(16),s=r(0),c=r(1551),i=r(1608),l=r(484),u=r(485),f=r(483),d=r(486),p=r(470),g=r(478),b=r(472),m=r(490),j=r.n(m),h=r(481),O=r.n(h),v=r(6);O()(j.a);t.default=function(){var e,t,r=null===(e=JSON.parse(localStorage.getItem("planInfo")))||void 0===e?void 0:e.plan_info,m=Object(s.useState)(!1),h=Object(o.a)(m,2),O=h[0],y=h[1],x=Object(s.useState)([]),w=Object(o.a)(x,2),P=w[0],N=w[1],k=Object(s.useState)(""),T=Object(o.a)(k,2),C=T[0],M=T[1],_=Object(s.useState)(!0),E=Object(o.a)(_,2),S=E[0];E[1];Object(s.useEffect)((function(){localStorage.setItem("usePMStoken",!1),localStorage.setItem("useBMStoken",!1),g.a.planList().then((function(e){console.log(e),N(e.data.payload)})).catch((function(e){Object(b.a)(e),console.log(e)}))}),[S]);var B=function(){var e=Object(a.a)(Object(n.a)().mark((function e(t){return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return y(!0),e.next=3,g.a.planMigration({plan_id:parseInt(t)}).then((function(e){j.a.fire(e.data.message,"Plan migration effect from next billing cycle.","success"),y(!1)})).catch((function(e){Object(b.a)(e),y(!1),console.log(e)}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)(l.a,{className:"d-flex align-items-center border-dark justify-content-center",style:{borderRadius:"10px"},children:[Object(v.jsx)(u.a,{sm:"4",children:Object(v.jsx)("h4",{children:"Your Current Plan:"})}),Object(v.jsx)(u.a,{sm:"4",className:"p-1",children:Object(v.jsx)(f.a,{style:{marginBottom:"0px"},children:Object(v.jsxs)(d.a,{children:[Object(v.jsx)("div",{dangerouslySetInnerHTML:{__html:r.other_msg}}),Object(v.jsx)("h2",{children:r.title}),Object(v.jsx)("p",{children:r.details}),Object(v.jsx)("div",{children:null===(t=r.features)||void 0===t?void 0:t.map((function(e,t){return Object(v.jsxs)("span",{className:"d-flex",children:[Object(v.jsx)(c.a,{className:"check-plane",size:"20px"}),Object(v.jsx)("h5",{className:"plan-item-details",style:{marginLeft:"5px"},children:e.replace(/'/g,"")})]},t)}))})]})})})]}),Object(v.jsxs)(l.a,{className:"border-dark p-1 mt-1",style:{borderRadius:"10px"},children:[Object(v.jsx)(u.a,{className:"pt-1",sm:"12",children:Object(v.jsx)("h4",{children:"Choose a Plan for Migration:"})}),P.map((function(e,t){var r;return Object(v.jsx)(u.a,{sm:"4",className:"p-1",children:Object(v.jsx)(f.a,{style:{marginBottom:"0px"},children:Object(v.jsxs)(d.a,{children:[Object(v.jsx)("div",{dangerouslySetInnerHTML:{__html:e.other_msg}}),Object(v.jsx)("h2",{children:e.title}),Object(v.jsx)("p",{children:e.details}),Object(v.jsx)("div",{children:null===(r=e.features)||void 0===r?void 0:r.map((function(e,t){return Object(v.jsxs)("span",{className:"d-flex",children:[Object(v.jsx)(c.a,{className:"check-plane",size:"20px"}),Object(v.jsx)("h5",{className:"plan-item-details",style:{marginLeft:"5px"},children:e.replace(/'/g,"")})]},t)}))}),Object(v.jsx)(p.a.Ripple,{color:"primary",className:"mt-1",onClick:function(){B(e.id),M(t)},children:O&&C===t?Object(v.jsx)(i.a,{size:"18"}):"Choose"})]})})},t)}))]})]})}},472:function(e,t,r){"use strict";r.d(t,"a",(function(){return a})),r.d(t,"b",(function(){return o})),r.d(t,"c",(function(){return s}));r(0);var n=r(127),a=function(e){try{var t=e.response;404===t.status||401===t.status||400===t.status||500===t.status||409===t.status?n.f.error(t.data.message,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}):n.f.error("The server is under maintenance",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}catch(t){n.f.error("Please check your connection",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}},o=function(e){try{var t=e.response;404!==t.status&&401!==t.status&&400!==t.status||n.f.error(t.data.errors?t.data.errors[Object.keys(t.data.errors)[0]]:t.data.message,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}catch(t){n.f.error("Please check your connection",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}},s=function(e){var t=e.data.message||"success";n.f.success(t,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}},481:function(e,t,r){e.exports=function(e,t){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function a(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}function s(e){return s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},s(e)}function c(e,t){return c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},c(e,t)}function i(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function l(e,t){return!t||"object"!==typeof t&&"function"!==typeof t?i(e):t}function u(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=s(e)););return e}function f(e,t,r){return f="undefined"!==typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var n=u(e,t);if(n){var a=Object.getOwnPropertyDescriptor(n,t);return a.get?a.get.call(r):a.value}},f(e,t,r||e)}e=e&&e.hasOwnProperty("default")?e.default:e,t=t&&t.hasOwnProperty("default")?t.default:t;var d=[{key:"title",getter:function(e){return e.getTitle()}},{key:"html",getter:function(e){return e.getHtmlContainer()}},{key:"confirmButtonText",getter:function(e){return e.getConfirmButton()}},{key:"cancelButtonText",getter:function(e){return e.getCancelButton()}},{key:"footer",getter:function(e){return e.getFooter()}}],p=function(){},g=function(e){return new Error("sweetalert2-react-content: ".concat(e))};function b(n){return function(c){function i(){return r(this,i),l(this,s(i).apply(this,arguments))}return o(i,c),a(i,[{key:"_main",value:function(r){return(r=Object.assign({},r)).onOpen=r.onOpen||p,r.onDestroy=r.onDestroy||p,d.forEach((function(a){var o=a.key,s=a.getter;if(e.isValidElement(r[o])){var c,i=r[o];r[o]=" ";var l=r.onOpen;r.onOpen=function(e){c=s(n),t.render(i,c),l(e)};var u=r.onDestroy;r.onDestroy=function(e){u(e),c&&t.unmountComponentAtNode(c)}}})),f(s(i.prototype),"_main",this).call(this,r)}},{key:"update",value:function(){throw g("Swal.update() is not yet supported. See https://github.com/sweetalert2/sweetalert2-react-content/issues/73")}}],[{key:"argsToParams",value:function(t){if(e.isValidElement(t[0])||e.isValidElement(t[1])){var r={};return["title","html","icon"].forEach((function(e,n){void 0!==t[n]&&(r[e]=t[n])})),r}return n.argsToParams(t)}}]),i}(n)}return b}(r(0),r(33))},483:function(e,t,r){"use strict";var n=r(14),a=r(15),o=r(0),s=r.n(o),c=r(5),i=r.n(c),l=r(58),u=r.n(l),f=r(83),d={tag:f.tagPropType,inverse:i.a.bool,color:i.a.string,body:i.a.bool,outline:i.a.bool,className:i.a.string,cssModule:i.a.object,innerRef:i.a.oneOfType([i.a.object,i.a.string,i.a.func])},p=function(e){var t=e.className,r=e.cssModule,o=e.color,c=e.body,i=e.inverse,l=e.outline,d=e.tag,p=e.innerRef,g=Object(a.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),b=Object(f.mapToCssModules)(u()(t,"card",!!i&&"text-white",!!c&&"card-body",!!o&&(l?"border":"bg")+"-"+o),r);return s.a.createElement(d,Object(n.a)({},g,{className:b,ref:p}))};p.propTypes=d,p.defaultProps={tag:"div"},t.a=p},484:function(e,t,r){"use strict";var n=r(14),a=r(15),o=r(0),s=r.n(o),c=r(5),i=r.n(c),l=r(58),u=r.n(l),f=r(83),d=i.a.oneOfType([i.a.number,i.a.string]),p={tag:f.tagPropType,noGutters:i.a.bool,className:i.a.string,cssModule:i.a.object,form:i.a.bool,xs:d,sm:d,md:d,lg:d,xl:d},g={tag:"div",widths:["xs","sm","md","lg","xl"]},b=function(e){var t=e.className,r=e.cssModule,o=e.noGutters,c=e.tag,i=e.form,l=e.widths,d=Object(a.a)(e,["className","cssModule","noGutters","tag","form","widths"]),p=[];l.forEach((function(t,r){var n=e[t];if(delete d[t],n){var a=!r;p.push(a?"row-cols-"+n:"row-cols-"+t+"-"+n)}}));var g=Object(f.mapToCssModules)(u()(t,o?"no-gutters":null,i?"form-row":"row",p),r);return s.a.createElement(c,Object(n.a)({},d,{className:g}))};b.propTypes=p,b.defaultProps=g,t.a=b},485:function(e,t,r){"use strict";var n=r(14),a=r(15),o=r(0),s=r.n(o),c=r(5),i=r.n(c),l=r(58),u=r.n(l),f=r(83),d=i.a.oneOfType([i.a.number,i.a.string]),p=i.a.oneOfType([i.a.bool,i.a.number,i.a.string,i.a.shape({size:i.a.oneOfType([i.a.bool,i.a.number,i.a.string]),order:d,offset:d})]),g={tag:f.tagPropType,xs:p,sm:p,md:p,lg:p,xl:p,className:i.a.string,cssModule:i.a.object,widths:i.a.array},b={tag:"div",widths:["xs","sm","md","lg","xl"]},m=function(e,t,r){return!0===r||""===r?e?"col":"col-"+t:"auto"===r?e?"col-auto":"col-"+t+"-auto":e?"col-"+r:"col-"+t+"-"+r},j=function(e){var t=e.className,r=e.cssModule,o=e.widths,c=e.tag,i=Object(a.a)(e,["className","cssModule","widths","tag"]),l=[];o.forEach((function(t,n){var a=e[t];if(delete i[t],a||""===a){var o=!n;if(Object(f.isObject)(a)){var s,c=o?"-":"-"+t+"-",d=m(o,t,a.size);l.push(Object(f.mapToCssModules)(u()(((s={})[d]=a.size||""===a.size,s["order"+c+a.order]=a.order||0===a.order,s["offset"+c+a.offset]=a.offset||0===a.offset,s)),r))}else{var p=m(o,t,a);l.push(p)}}})),l.length||l.push("col");var d=Object(f.mapToCssModules)(u()(t,l),r);return s.a.createElement(c,Object(n.a)({},i,{className:d}))};j.propTypes=g,j.defaultProps=b,t.a=j},486:function(e,t,r){"use strict";var n=r(14),a=r(15),o=r(0),s=r.n(o),c=r(5),i=r.n(c),l=r(58),u=r.n(l),f=r(83),d={tag:f.tagPropType,className:i.a.string,cssModule:i.a.object,innerRef:i.a.oneOfType([i.a.object,i.a.string,i.a.func])},p=function(e){var t=e.className,r=e.cssModule,o=e.innerRef,c=e.tag,i=Object(a.a)(e,["className","cssModule","innerRef","tag"]),l=Object(f.mapToCssModules)(u()(t,"card-body"),r);return s.a.createElement(c,Object(n.a)({},i,{className:l,ref:o}))};p.propTypes=d,p.defaultProps={tag:"div"},t.a=p}}]);
//# sourceMappingURL=305.d974e201.chunk.js.map