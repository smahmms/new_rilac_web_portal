/*! For license information please see 184.4ed55dba.chunk.js.LICENSE.txt */
(this["webpackJsonprilac-web"]=this["webpackJsonprilac-web"]||[]).push([[184],{1021:function(e,t,n){"use strict";var a=n(1),c=n(128),s=n(6),r=["count","tag","component","children"],i=function(e){for(var t=e.count,n=e.tag,i=(e.component,e.children),o=Object(c.a)(e,r),l=n,d=[],j=0;j<t;j++)d.push(i(j));return Object(s.jsx)(l,Object(a.a)(Object(a.a)({},o),{},{children:d}))};i.defaultProps={tag:"div"},t.a=i},1055:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(1056),c=a.__importStar(n(0)),s=function(e){function t(t){var n=e.call(this,t)||this;return n.outerRef=null,n.handleRef=function(e){if(n.outerRef=e,n.props.forwardedRef)if("function"===typeof n.props.forwardedRef)n.props.forwardedRef(e);else{if("object"!==typeof n.props.forwardedRef)throw new Error("Invalid forwardedRef "+n.props.forwardedRef);n.props.forwardedRef.current=e}},n.handleTransitionEnd=function(e){e.target===n.outerRef&&"height"===e.propertyName&&(n.state.childrenLeaving?n.setState({children:null,childrenLeaving:!1},(function(){return n.endTransition()})):n.endTransition())},n.state={children:t.children,childrenLeaving:!1},n}return a.__extends(t,e),t.prototype.componentDidMount=function(){this.outerRef&&(this.props.closed||!this.props.children?(this.outerRef.classList.add("closed"),this.outerRef.style.height="0px"):this.props.transitionOnAppear?this.startTransition("0px"):this.outerRef.style.height="auto")},t.prototype.getSnapshotBeforeUpdate=function(){return this.outerRef?this.outerRef.getBoundingClientRect().height+"px":null},t.getDerivedStateFromProps=function(e,t){return e.children?{children:e.children,childrenLeaving:!1}:t.children?{children:t.children,childrenLeaving:!0}:null},t.prototype.componentDidUpdate=function(e,t,n){this.outerRef&&this.startTransition(n)},t.prototype.startTransition=function(e){var t="0px";this.props.closed||this.state.childrenLeaving||!this.state.children||(this.outerRef.classList.remove("closed"),this.outerRef.style.height="auto",t=getComputedStyle(this.outerRef).height),parseFloat(t).toFixed(2)!==parseFloat(e).toFixed(2)&&(this.outerRef.classList.add("transitioning"),this.outerRef.style.height=e,this.outerRef.offsetHeight,this.outerRef.style.transitionProperty="height",this.outerRef.style.height=t)},t.prototype.endTransition=function(){this.outerRef.classList.remove("transitioning"),this.outerRef.style.transitionProperty="none",this.outerRef.style.height=this.props.closed?"0px":"auto",!this.props.closed&&this.state.children||this.outerRef.classList.add("closed")},t.prototype.render=function(){var e=this.props,t=e.as,n=void 0===t?"div":t,s=(e.children,e.className),r=(e.closed,e.transitionOnAppear,e.forwardedRef,a.__rest(e,["as","children","className","closed","transitionOnAppear","forwardedRef"])),i=s?"react-slidedown "+s:"react-slidedown";return c.default.createElement(n,a.__assign({ref:this.handleRef,className:i,onTransitionEnd:this.handleTransitionEnd},r),this.state.children)},t.defaultProps={transitionOnAppear:!0,closed:!1},t}(c.Component);t.SlideDown=c.forwardRef((function(e,t){return c.default.createElement(s,a.__assign({},e,{forwardedRef:t}))})),t.default=t.SlideDown},1056:function(e,t,n){"use strict";n.r(t),n.d(t,"__extends",(function(){return c})),n.d(t,"__assign",(function(){return s})),n.d(t,"__rest",(function(){return r})),n.d(t,"__decorate",(function(){return i})),n.d(t,"__param",(function(){return o})),n.d(t,"__metadata",(function(){return l})),n.d(t,"__awaiter",(function(){return d})),n.d(t,"__generator",(function(){return j})),n.d(t,"__createBinding",(function(){return u})),n.d(t,"__exportStar",(function(){return b})),n.d(t,"__values",(function(){return m})),n.d(t,"__read",(function(){return p})),n.d(t,"__spread",(function(){return h})),n.d(t,"__spreadArrays",(function(){return f})),n.d(t,"__await",(function(){return O})),n.d(t,"__asyncGenerator",(function(){return x})),n.d(t,"__asyncDelegator",(function(){return y})),n.d(t,"__asyncValues",(function(){return v})),n.d(t,"__makeTemplateObject",(function(){return g})),n.d(t,"__importStar",(function(){return N})),n.d(t,"__importDefault",(function(){return w})),n.d(t,"__classPrivateFieldGet",(function(){return C})),n.d(t,"__classPrivateFieldSet",(function(){return _}));var a=function(e,t){return a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},a(e,t)};function c(e,t){function n(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var s=function(){return s=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var c in t=arguments[n])Object.prototype.hasOwnProperty.call(t,c)&&(e[c]=t[c]);return e},s.apply(this,arguments)};function r(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(a=Object.getOwnPropertySymbols(e);c<a.length;c++)t.indexOf(a[c])<0&&Object.prototype.propertyIsEnumerable.call(e,a[c])&&(n[a[c]]=e[a[c]])}return n}function i(e,t,n,a){var c,s=arguments.length,r=s<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(e,t,n,a);else for(var i=e.length-1;i>=0;i--)(c=e[i])&&(r=(s<3?c(r):s>3?c(t,n,r):c(t,n))||r);return s>3&&r&&Object.defineProperty(t,n,r),r}function o(e,t){return function(n,a){t(n,a,e)}}function l(e,t){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(e,t)}function d(e,t,n,a){return new(n||(n=Promise))((function(c,s){function r(e){try{o(a.next(e))}catch(t){s(t)}}function i(e){try{o(a.throw(e))}catch(t){s(t)}}function o(e){var t;e.done?c(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,i)}o((a=a.apply(e,t||[])).next())}))}function j(e,t){var n,a,c,s,r={label:0,sent:function(){if(1&c[0])throw c[1];return c[1]},trys:[],ops:[]};return s={next:i(0),throw:i(1),return:i(2)},"function"===typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function i(s){return function(i){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;r;)try{if(n=1,a&&(c=2&s[0]?a.return:s[0]?a.throw||((c=a.return)&&c.call(a),0):a.next)&&!(c=c.call(a,s[1])).done)return c;switch(a=0,c&&(s=[2&s[0],c.value]),s[0]){case 0:case 1:c=s;break;case 4:return r.label++,{value:s[1],done:!1};case 5:r.label++,a=s[1],s=[0];continue;case 7:s=r.ops.pop(),r.trys.pop();continue;default:if(!(c=(c=r.trys).length>0&&c[c.length-1])&&(6===s[0]||2===s[0])){r=0;continue}if(3===s[0]&&(!c||s[1]>c[0]&&s[1]<c[3])){r.label=s[1];break}if(6===s[0]&&r.label<c[1]){r.label=c[1],c=s;break}if(c&&r.label<c[2]){r.label=c[2],r.ops.push(s);break}c[2]&&r.ops.pop(),r.trys.pop();continue}s=t.call(e,r)}catch(i){s=[6,i],a=0}finally{n=c=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,i])}}}function u(e,t,n,a){void 0===a&&(a=n),e[a]=t[n]}function b(e,t){for(var n in e)"default"===n||t.hasOwnProperty(n)||(t[n]=e[n])}function m(e){var t="function"===typeof Symbol&&Symbol.iterator,n=t&&e[t],a=0;if(n)return n.call(e);if(e&&"number"===typeof e.length)return{next:function(){return e&&a>=e.length&&(e=void 0),{value:e&&e[a++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function p(e,t){var n="function"===typeof Symbol&&e[Symbol.iterator];if(!n)return e;var a,c,s=n.call(e),r=[];try{for(;(void 0===t||t-- >0)&&!(a=s.next()).done;)r.push(a.value)}catch(i){c={error:i}}finally{try{a&&!a.done&&(n=s.return)&&n.call(s)}finally{if(c)throw c.error}}return r}function h(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(p(arguments[t]));return e}function f(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var a=Array(e),c=0;for(t=0;t<n;t++)for(var s=arguments[t],r=0,i=s.length;r<i;r++,c++)a[c]=s[r];return a}function O(e){return this instanceof O?(this.v=e,this):new O(e)}function x(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var a,c=n.apply(e,t||[]),s=[];return a={},r("next"),r("throw"),r("return"),a[Symbol.asyncIterator]=function(){return this},a;function r(e){c[e]&&(a[e]=function(t){return new Promise((function(n,a){s.push([e,t,n,a])>1||i(e,t)}))})}function i(e,t){try{(n=c[e](t)).value instanceof O?Promise.resolve(n.value.v).then(o,l):d(s[0][2],n)}catch(a){d(s[0][3],a)}var n}function o(e){i("next",e)}function l(e){i("throw",e)}function d(e,t){e(t),s.shift(),s.length&&i(s[0][0],s[0][1])}}function y(e){var t,n;return t={},a("next"),a("throw",(function(e){throw e})),a("return"),t[Symbol.iterator]=function(){return this},t;function a(a,c){t[a]=e[a]?function(t){return(n=!n)?{value:O(e[a](t)),done:"return"===a}:c?c(t):t}:c}}function v(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,n=e[Symbol.asyncIterator];return n?n.call(e):(e=m(e),t={},a("next"),a("throw"),a("return"),t[Symbol.asyncIterator]=function(){return this},t);function a(n){t[n]=e[n]&&function(t){return new Promise((function(a,c){(function(e,t,n,a){Promise.resolve(a).then((function(t){e({value:t,done:n})}),t)})(a,c,(t=e[n](t)).done,t.value)}))}}}function g(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}function N(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function w(e){return e&&e.__esModule?e:{default:e}}function C(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)}function _(e,t,n){if(!t.has(e))throw new TypeError("attempted to set private field on non-instance");return t.set(e,n),n}},1057:function(e,t,n){},1250:function(e,t,n){"use strict";var a=n(833),c=n(1605),s=n(496),r=n(1488),i=n(489),o=n(1513),l=n(1520),d=n(470),j=n(6);t.a=function(e){var t=e.open,n=e.toggleSidebar;return Object(j.jsx)(a.a,{size:"lg",open:t,title:"Send Invoice",headerClassName:"mb-1",contentClassName:"p-0",bodyClassName:"pb-sm-0 pb-3",toggleSidebar:n,children:Object(j.jsxs)(s.a,{children:[Object(j.jsxs)(r.a,{children:[Object(j.jsx)(i.a,{for:"invoice-from",className:"form-label",children:"From"}),Object(j.jsx)(o.a,{id:"invoice-from",defaultValue:"shelbyComapny@email.com",placeholder:"company@email.com"})]}),Object(j.jsxs)(r.a,{children:[Object(j.jsx)(i.a,{for:"invoice-to",className:"form-label",children:"To"}),Object(j.jsx)(o.a,{id:"invoice-to",defaultValue:"qConsolidated@email.com",placeholder:"company@email.com"})]}),Object(j.jsxs)(r.a,{children:[Object(j.jsx)(i.a,{for:"invoice-subject",className:"form-label",children:"Subject"}),Object(j.jsx)(o.a,{id:"invoice-subject",defaultValue:"Invoice of purchased Admin Templates",placeholder:"Invoice regarding goods"})]}),Object(j.jsxs)(r.a,{children:[Object(j.jsx)(i.a,{for:"invoice-message",className:"form-label",children:"Message"}),Object(j.jsx)(o.a,{type:"textarea",cols:"3",rows:"11",id:"invoice-message",defaultValue:"Dear Queen Consolidated,\n\nThank you for your business, always a pleasure to work with you!\n\nWe have generated a new invoice in the amount of $95.59\n\nWe would appreciate payment of this invoice by 05/11/2019"})]}),Object(j.jsx)(r.a,{children:Object(j.jsxs)(l.a,{color:"light-primary",children:[Object(j.jsx)(c.a,{className:"mr-50",size:14}),Object(j.jsx)("span",{className:"align-middle",children:"Invoice Attached"})]})}),Object(j.jsxs)(r.a,{className:"d-flex flex-wrap mt-2",children:[Object(j.jsx)(d.a,{className:"mr-1",color:"primary",onClick:n,children:"Send"}),Object(j.jsx)(d.a,{color:"secondary",outline:!0,onClick:n,children:"Cancel"})]})]})})}},1251:function(e,t,n){"use strict";var a=n(16),c=n(0),s=n(563),r=n.n(s),i=n(496),o=n(1488),l=n(1513),d=n(489),j=n(470),u=n(833),b=(n(518),n(916),n(6));t.a=function(e){var t=e.open,n=e.toggleSidebar,s=Object(c.useState)(new Date),m=Object(a.a)(s,2),p=m[0],h=m[1];return Object(b.jsx)(u.a,{size:"lg",open:t,title:"Add Payment",headerClassName:"mb-1",contentClassName:"p-0",toggleSidebar:n,children:Object(b.jsxs)(i.a,{children:[Object(b.jsx)(o.a,{children:Object(b.jsx)(l.a,{id:"balance",defaultValue:"Invoice Balance: 5000.00",disabled:!0})}),Object(b.jsxs)(o.a,{children:[Object(b.jsx)(d.a,{for:"amount",className:"form-label",children:"Payment Amount"}),Object(b.jsx)(l.a,{type:"number",id:"amount",placeholder:"$1000"})]}),Object(b.jsxs)(o.a,{children:[Object(b.jsx)(d.a,{for:"payment-amount",className:"form-label",children:"Payment Date"}),Object(b.jsx)(r.a,{id:"payment-amount",value:p,onChange:function(e){return h(e)},className:"form-control"})]}),Object(b.jsxs)(o.a,{children:[Object(b.jsx)(d.a,{for:"payment-method",className:"form-label",children:"Payment Method"}),Object(b.jsxs)(l.a,{type:"select",id:"payment-method",defaultValue:"",children:[Object(b.jsx)("option",{value:"",disabled:!0,children:"Select payment method"}),Object(b.jsx)("option",{value:"Cash",children:"Cash"}),Object(b.jsx)("option",{value:"Bank Transfer",children:"Bank Transfer"}),Object(b.jsx)("option",{value:"Debit",children:"Debit"}),Object(b.jsx)("option",{value:"Credit",children:"Credit"}),Object(b.jsx)("option",{value:"Paypal",children:"Paypal"})]})]}),Object(b.jsxs)(o.a,{children:[Object(b.jsx)(d.a,{for:"payment-note",className:"form-label",children:"Internal Payment Note"}),Object(b.jsx)(l.a,{type:"textarea",rows:"5",id:"payment-note",placeholder:"Internal Payment Note"})]}),Object(b.jsxs)(o.a,{className:"d-flex flex-wrap mb-0",children:[Object(b.jsx)(j.a,{className:"mr-1",color:"primary",onClick:n,children:"Send"}),Object(b.jsx)(j.a,{color:"secondary",outline:!0,onClick:n,children:"Cancel"})]})]})})}},2604:function(e,t,n){"use strict";n.r(t);var a=n(16),c=n(0),s=n(660),r=n(474),i=n(85),o=n.n(i),l=n(484),d=n(485),j=n(634),u=n(483),b=n(486),m=n(1511),p=n(1512),h=n(1236),f=n(1513),O=n(515),x=n(1674),y=n(470),v=n(489),g=n(1488),N=n(563),w=n.n(N),C=n(1021),_=n(1055),S=n(1594),P=n(1487),R=n(1515),k=(n(1057),n(518),n(916),n(6)),D=function(e){var t=e.data,n=Object(c.useState)(1),s=Object(a.a)(n,2),r=s[0],i=s[1],o=Object(c.useState)(new Date(t.invoice.issuedDate)),j=Object(a.a)(o,2),N=j[0],D=j[1],T=Object(c.useState)(new Date(t.invoice.dueDate)),I=Object(a.a)(T,2),L=I[0],E=I[1],A=function(e){e.preventDefault(),e.target.closest(".repeater-wrapper").remove()};return Object(k.jsxs)(u.a,{className:"invoice-preview-card mb-0",children:[Object(k.jsx)(b.a,{className:"invoice-padding pb-0",children:Object(k.jsxs)("div",{className:"d-flex justify-content-between flex-md-row flex-column invoice-spacing mt-0",children:[Object(k.jsxs)("div",{children:[Object(k.jsxs)("div",{className:"logo-wrapper",children:[Object(k.jsxs)("svg",{viewBox:"0 0 139 95",version:"1.1",height:"24",children:[Object(k.jsxs)("defs",{children:[Object(k.jsxs)("linearGradient",{id:"invoice-linearGradient-1",x1:"100%",y1:"10.5120544%",x2:"50%",y2:"89.4879456%",children:[Object(k.jsx)("stop",{stopColor:"#000000",offset:"0%"}),Object(k.jsx)("stop",{stopColor:"#FFFFFF",offset:"100%"})]}),Object(k.jsxs)("linearGradient",{id:"invoice-linearGradient-2",x1:"64.0437835%",y1:"46.3276743%",x2:"37.373316%",y2:"100%",children:[Object(k.jsx)("stop",{stopColor:"#EEEEEE",stopOpacity:"0",offset:"0%"}),Object(k.jsx)("stop",{stopColor:"#FFFFFF",offset:"100%"})]})]}),Object(k.jsx)("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",children:Object(k.jsx)("g",{transform:"translate(-400.000000, -178.000000)",children:Object(k.jsxs)("g",{transform:"translate(400.000000, 178.000000)",children:[Object(k.jsx)("path",{className:"text-primary",d:"M-5.68434189e-14,2.84217094e-14 L39.1816085,2.84217094e-14 L69.3453773,32.2519224 L101.428699,2.84217094e-14 L138.784583,2.84217094e-14 L138.784199,29.8015838 C137.958931,37.3510206 135.784352,42.5567762 132.260463,45.4188507 C128.736573,48.2809251 112.33867,64.5239941 83.0667527,94.1480575 L56.2750821,94.1480575 L6.71554594,44.4188507 C2.46876683,39.9813776 0.345377275,35.1089553 0.345377275,29.8015838 C0.345377275,24.4942122 0.230251516,14.560351 -5.68434189e-14,2.84217094e-14 Z",style:{fill:"currentColor"}}),Object(k.jsx)("path",{d:"M69.3453773,32.2519224 L101.428699,1.42108547e-14 L138.784583,1.42108547e-14 L138.784199,29.8015838 C137.958931,37.3510206 135.784352,42.5567762 132.260463,45.4188507 C128.736573,48.2809251 112.33867,64.5239941 83.0667527,94.1480575 L56.2750821,94.1480575 L32.8435758,70.5039241 L69.3453773,32.2519224 Z",fill:"url(#invoice-linearGradient-1)",opacity:"0.2"}),Object(k.jsx)("polygon",{fill:"#000000",opacity:"0.049999997",points:"69.3922914 32.4202615 32.8435758 70.5039241 54.0490008 16.1851325"}),Object(k.jsx)("polygon",{fill:"#000000",opacity:"0.099999994",points:"69.3922914 32.4202615 32.8435758 70.5039241 58.3683556 20.7402338"}),Object(k.jsx)("polygon",{fill:"url(#invoice-linearGradient-2)",opacity:"0.099999994",points:"101.428699 0 83.0667527 94.1480575 130.378721 47.0740288"})]})})})]}),Object(k.jsx)("h3",{className:"text-primary invoice-logo",children:"Vuexy"})]}),Object(k.jsx)("p",{className:"card-text mb-25",children:"Office 149, 450 South Brand Brooklyn"}),Object(k.jsx)("p",{className:"card-text mb-25",children:"San Diego County, CA 91905, USA"}),Object(k.jsx)("p",{className:"card-text mb-0",children:"+1 (123) 456 7891, +44 (876) 543 2198"})]}),Object(k.jsxs)("div",{className:"invoice-number-date mt-md-0 mt-2",children:[Object(k.jsxs)("div",{className:"d-flex align-items-center justify-content-md-end mb-1",children:[Object(k.jsx)("h4",{className:"invoice-title",children:"Invoice"}),Object(k.jsxs)(m.a,{className:"input-group-merge invoice-edit-input-group disabled",children:[Object(k.jsx)(p.a,{addonType:"prepend",children:Object(k.jsx)(h.a,{children:Object(k.jsx)(S.a,{size:15})})}),Object(k.jsx)(f.a,{type:"number",className:"invoice-edit-input",value:t.invoice.id,placeholder:"53634",disabled:!0})]})]}),Object(k.jsxs)("div",{className:"d-flex align-items-center mb-1",children:[Object(k.jsx)("span",{className:"title",children:"Date:"}),Object(k.jsx)(w.a,{value:N,onChange:function(e){return D(e)},className:"form-control invoice-edit-input date-picker"})]}),Object(k.jsxs)("div",{className:"d-flex align-items-center",children:[Object(k.jsx)("span",{className:"title",children:"Due Date:"}),Object(k.jsx)(w.a,{value:L,onChange:function(e){return E(e)},className:"form-control invoice-edit-input due-date-picker"})]})]})]})}),Object(k.jsx)("hr",{className:"invoice-spacing"}),Object(k.jsx)(b.a,{className:"invoice-padding pt-0",children:Object(k.jsxs)(l.a,{className:"invoice-spacing",children:[Object(k.jsxs)(d.a,{className:"p-0",lg:"8",children:[Object(k.jsx)("h6",{className:"mb-2",children:"Invoice To:"}),Object(k.jsx)("h6",{className:"mb-25",children:t.invoice.client.name}),Object(k.jsx)(O.a,{className:"mb-25",children:t.invoice.client.company}),Object(k.jsx)(O.a,{className:"mb-25",children:t.invoice.client.address}),Object(k.jsx)(O.a,{className:"mb-25",children:t.invoice.client.contact}),Object(k.jsx)(O.a,{className:"mb-0",children:t.invoice.client.companyEmail})]}),Object(k.jsxs)(d.a,{className:"p-0 mt-xl-0 mt-2",lg:"4",children:[Object(k.jsx)("h6",{className:"mb-2",children:"Payment Details:"}),Object(k.jsx)("table",{children:Object(k.jsxs)("tbody",{children:[Object(k.jsxs)("tr",{children:[Object(k.jsx)("td",{className:"pr-1",children:"Total Due:"}),Object(k.jsx)("td",{children:Object(k.jsx)("span",{className:"font-weight-bolder",children:t.paymentDetails.totalDue})})]}),Object(k.jsxs)("tr",{children:[Object(k.jsx)("td",{className:"pr-1",children:"Bank name:"}),Object(k.jsx)("td",{children:t.paymentDetails.bankName})]}),Object(k.jsxs)("tr",{children:[Object(k.jsx)("td",{className:"pr-1",children:"Country:"}),Object(k.jsx)("td",{children:t.paymentDetails.country})]}),Object(k.jsxs)("tr",{children:[Object(k.jsx)("td",{className:"pr-1",children:"IBAN:"}),Object(k.jsx)("td",{children:t.paymentDetails.iban})]}),Object(k.jsxs)("tr",{children:[Object(k.jsx)("td",{className:"pr-1",children:"SWIFT code:"}),Object(k.jsx)("td",{children:t.paymentDetails.swiftCode})]})]})})]})]})}),Object(k.jsxs)(b.a,{className:"invoice-padding invoice-product-details",children:[Object(k.jsx)(C.a,{count:r,children:function(e){var t=0===e?"div":_.SlideDown;return Object(k.jsx)(t,{className:"repeater-wrapper",children:Object(k.jsx)(l.a,{children:Object(k.jsxs)(d.a,{className:"d-flex product-details-border position-relative pr-0",sm:"12",children:[Object(k.jsxs)(l.a,{className:"w-100 pr-lg-0 pr-1 py-2",children:[Object(k.jsxs)(d.a,{className:"mb-lg-0 mb-2 mt-lg-0 mt-2",lg:"5",sm:"12",children:[Object(k.jsx)(O.a,{className:"col-title mb-md-50 mb-0",children:"Item"}),Object(k.jsxs)(f.a,{type:"select",className:"item-details",children:[Object(k.jsx)("option",{children:"App Design"}),Object(k.jsx)("option",{children:"App Customization"}),Object(k.jsx)("option",{children:"ABC Template"}),Object(k.jsx)("option",{children:"App Development"})]}),Object(k.jsx)(f.a,{className:"mt-2",type:"textarea",rows:"1",defaultValue:"Customization & Bug Fixes"})]}),Object(k.jsxs)(d.a,{className:"my-lg-0 my-2",lg:"3",sm:"12",children:[Object(k.jsx)(O.a,{className:"col-title mb-md-2 mb-0",children:"Cost"}),Object(k.jsx)(f.a,{type:"number",defaultValue:"24",placeholder:"24"}),Object(k.jsxs)("div",{className:"mt-2",children:[Object(k.jsx)("span",{children:"Discount:"})," ",Object(k.jsx)("span",{children:"0%"}),Object(k.jsx)("span",{id:"tax1-".concat(e),className:"ml-50",children:"0%"}),Object(k.jsx)("span",{id:"tax2-".concat(e),className:"ml-50",children:"0%"}),Object(k.jsx)(x.a,{target:"tax1-".concat(e),children:"Tax 1"}),Object(k.jsx)(x.a,{target:"tax2-".concat(e),children:"Tax 2"})]})]}),Object(k.jsxs)(d.a,{className:"my-lg-0 my-2",lg:"2",sm:"12",children:[Object(k.jsx)(O.a,{className:"col-title mb-md-2 mb-0",children:"Qty"}),Object(k.jsx)(f.a,{type:"number",defaultValue:"1",placeholder:"1"})]}),Object(k.jsxs)(d.a,{className:"my-lg-0 mt-2",lg:"2",sm:"12",children:[Object(k.jsx)(O.a,{className:"col-title mb-md-50 mb-0",children:"Price"}),Object(k.jsx)(O.a,{className:"mb-0",children:"$24.00"})]})]}),Object(k.jsx)("div",{className:"d-flex flex-column align-items-center justify-content-start border-left invoice-product-actions py-50 px-25",children:Object(k.jsx)(P.a,{size:18,className:"cursor-pointer",onClick:A})})]})})},e)}}),Object(k.jsx)(l.a,{className:"mt-1",children:Object(k.jsx)(d.a,{sm:"12",className:"px-0",children:Object(k.jsxs)(y.a.Ripple,{color:"primary",size:"sm",className:"btn-add-new",onClick:function(){return i(r+1)},children:[Object(k.jsx)(R.a,{size:14,className:"mr-25"}),Object(k.jsx)("span",{className:"align-middle",children:"Add Item"})]})})})]}),Object(k.jsx)(b.a,{className:"invoice-padding",children:Object(k.jsxs)(l.a,{className:"invoice-sales-total-wrapper",children:[Object(k.jsx)(d.a,{className:"mt-md-0 mt-3",md:{size:"6",order:1},xs:{size:12,order:2},children:Object(k.jsxs)("div",{className:"d-flex align-items-center mb-1",children:[Object(k.jsx)(v.a,{for:"salesperson",className:"form-label",children:"Salesperson:"}),Object(k.jsx)(f.a,{type:"text",className:"ml-50",id:"salesperson",placeholder:"Edward Crowley"})]})}),Object(k.jsx)(d.a,{className:"d-flex justify-content-end",md:{size:"6",order:2},xs:{size:12,order:1},children:Object(k.jsxs)("div",{className:"invoice-total-wrapper",children:[Object(k.jsxs)("div",{className:"invoice-total-item",children:[Object(k.jsx)("p",{className:"invoice-total-title",children:"Subtotal:"}),Object(k.jsx)("p",{className:"invoice-total-amount",children:"$1800"})]}),Object(k.jsxs)("div",{className:"invoice-total-item",children:[Object(k.jsx)("p",{className:"invoice-total-title",children:"Discount:"}),Object(k.jsx)("p",{className:"invoice-total-amount",children:"$28"})]}),Object(k.jsxs)("div",{className:"invoice-total-item",children:[Object(k.jsx)("p",{className:"invoice-total-title",children:"Tax:"}),Object(k.jsx)("p",{className:"invoice-total-amount",children:"21%"})]}),Object(k.jsx)("hr",{className:"my-50"}),Object(k.jsxs)("div",{className:"invoice-total-item",children:[Object(k.jsx)("p",{className:"invoice-total-title",children:"Total:"}),Object(k.jsx)("p",{className:"invoice-total-amount",children:"$1690"})]})]})})]})}),Object(k.jsx)("hr",{className:"invoice-spacing mt-0"}),Object(k.jsx)(b.a,{className:"invoice-padding py-0",children:Object(k.jsx)(l.a,{children:Object(k.jsx)(d.a,{children:Object(k.jsxs)(g.a,{className:"mb-2",children:[Object(k.jsx)(v.a,{for:"note",className:"form-label font-weight-bold",children:"Note:"}),Object(k.jsx)(f.a,{type:"textarea",rows:"2",id:"note",defaultValue:"It was a pleasure working with you and your team. We hope you will keep us in mind for future freelance projects. Thank You!"})]})})})})]})},T=n(1485),I=function(e){var t=e.setSendSidebarOpen,n=e.setAddPaymentOpen;return Object(k.jsxs)(c.Fragment,{children:[Object(k.jsx)(u.a,{className:"invoice-action-wrapper",children:Object(k.jsxs)(b.a,{children:[Object(k.jsx)(y.a.Ripple,{color:"primary",block:!0,className:"mb-75",onClick:function(){return t(!0)},children:"Send Invoice"}),Object(k.jsx)(y.a.Ripple,{tag:r.b,to:"/apps/invoice/preview",color:"primary",block:!0,outline:!0,className:"mb-75",children:"Preview"}),Object(k.jsx)(y.a.Ripple,{color:"primary",block:!0,outline:!0,className:"mb-75",children:"Save"}),Object(k.jsx)(y.a.Ripple,{color:"success",block:!0,onClick:function(){return n(!0)},children:"Add Payment"})]})}),Object(k.jsxs)("div",{className:"mt-2",children:[Object(k.jsxs)("div",{className:"invoice-payment-option",children:[Object(k.jsx)("p",{className:"mb-50",children:"Accept payments via"}),Object(k.jsxs)(f.a,{type:"select",id:"payment-select",children:[Object(k.jsx)("option",{children:"Debit Card"}),Object(k.jsx)("option",{children:"Credit Card"}),Object(k.jsx)("option",{children:"Paypal"}),Object(k.jsx)("option",{children:"Internet Banking"}),Object(k.jsx)("option",{children:"UPI Transfer"})]})]}),Object(k.jsxs)("div",{className:"invoice-terms mt-1",children:[Object(k.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(k.jsx)(v.a,{className:"mb-0",for:"payment-terms",children:"Payment Terms"}),Object(k.jsx)(T.a,{type:"switch",id:"payment-terms",defaultChecked:!0})]}),Object(k.jsxs)("div",{className:"d-flex justify-content-between py-1",children:[Object(k.jsx)(v.a,{className:"mb-0",for:"client-notes",children:"Client Notes"}),Object(k.jsx)(T.a,{type:"switch",id:"client-notes",defaultChecked:!0})]}),Object(k.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(k.jsx)(v.a,{className:"mb-0",for:"payment-stub",children:"Payment Stub"}),Object(k.jsx)(T.a,{type:"switch",id:"payment-stub"})]})]})]})]})},L=n(1250),E=n(1251);t.default=function(){var e=Object(s.i)().id,t=Object(c.useState)(null),n=Object(a.a)(t,2),i=n[0],u=n[1],b=Object(c.useState)(!1),m=Object(a.a)(b,2),p=m[0],h=m[1],f=Object(c.useState)(!1),O=Object(a.a)(f,2),x=O[0],y=O[1];return Object(c.useEffect)((function(){o.a.get("/api/invoice/invoices/".concat(e)).then((function(e){u(e.data)}))}),[]),null!==i&&void 0!==i.invoice?Object(k.jsxs)("div",{className:"invoice-edit-wrapper",children:[Object(k.jsxs)(l.a,{className:"invoice-edit",children:[Object(k.jsx)(d.a,{xl:9,md:8,sm:12,children:Object(k.jsx)(D,{data:i})}),Object(k.jsx)(d.a,{xl:3,md:4,sm:12,children:Object(k.jsx)(I,{setSendSidebarOpen:h,setAddPaymentOpen:y})})]}),Object(k.jsx)(L.a,{toggleSidebar:function(){return h(!p)},open:p}),Object(k.jsx)(E.a,{toggleSidebar:function(){return y(!x)},open:x})]}):Object(k.jsxs)(j.a,{color:"danger",children:[Object(k.jsx)("h4",{className:"alert-heading",children:"Invoice not found"}),Object(k.jsxs)("div",{className:"alert-body",children:["Invoice with id: ",e," doesn't exist. Check list of all invoices: ",Object(k.jsx)(r.b,{to:"/invoice/list",children:"Invoice List"})]})]})}},518:function(e,t,n){},634:function(e,t,n){"use strict";var a=n(14),c=n(15),s=n(21),r=n(0),i=n.n(r),o=n(5),l=n.n(o),d=n(58),j=n.n(d),u=n(83),b=n(510);function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){Object(s.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var h={children:l.a.node,className:l.a.string,closeClassName:l.a.string,closeAriaLabel:l.a.string,cssModule:l.a.object,color:l.a.string,fade:l.a.bool,isOpen:l.a.bool,toggle:l.a.func,tag:u.tagPropType,transition:l.a.shape(b.a.propTypes),innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},f={color:"success",isOpen:!0,tag:"div",closeAriaLabel:"Close",fade:!0,transition:p(p({},b.a.defaultProps),{},{unmountOnExit:!0})};function O(e){var t=e.className,n=e.closeClassName,s=e.closeAriaLabel,r=e.cssModule,o=e.tag,l=e.color,d=e.isOpen,m=e.toggle,h=e.children,f=e.transition,O=e.fade,x=e.innerRef,y=Object(c.a)(e,["className","closeClassName","closeAriaLabel","cssModule","tag","color","isOpen","toggle","children","transition","fade","innerRef"]),v=Object(u.mapToCssModules)(j()(t,"alert","alert-"+l,{"alert-dismissible":m}),r),g=Object(u.mapToCssModules)(j()("close",n),r),N=p(p(p({},b.a.defaultProps),f),{},{baseClass:O?f.baseClass:"",timeout:O?f.timeout:0});return i.a.createElement(b.a,Object(a.a)({},y,N,{tag:o,className:v,in:d,role:"alert",innerRef:x}),m?i.a.createElement("button",{type:"button",className:g,"aria-label":s,onClick:m},i.a.createElement("span",{"aria-hidden":"true"},"\xd7")):null,h)}O.propTypes=h,O.defaultProps=f,t.a=O},833:function(e,t,n){"use strict";var a=n(1),c=n(21),s=n(128),r=n(1487),i=n(58),o=n.n(i),l=n(533),d=n(536),j=n(531),u=n(6),b=["width","open","toggleSidebar","size","bodyClassName","contentClassName","wrapperClassName","headerClassName","className","title","children","closeBtn"];t.a=function(e){var t,n=e.width,i=e.open,m=e.toggleSidebar,p=e.size,h=e.bodyClassName,f=e.contentClassName,O=e.wrapperClassName,x=e.headerClassName,y=e.className,v=e.title,g=e.children,N=e.closeBtn,w=Object(s.a)(e,b),C=N||Object(u.jsx)(r.a,{className:"cursor-pointer",size:15,onClick:m});return Object(u.jsxs)(l.a,Object(a.a)(Object(a.a)(Object(a.a)({isOpen:i,toggle:m,contentClassName:o()(Object(c.a)({},f,f)),modalClassName:o()("modal-slide-in",Object(c.a)({},O,O)),className:o()((t={},Object(c.a)(t,y,y),Object(c.a)(t,"sidebar-lg","lg"===p),Object(c.a)(t,"sidebar-sm","sm"===p),t))},void 0!==n?{style:{width:String(n)+"px"}}:{}),w),{},{children:[Object(u.jsx)(d.a,{className:o()(Object(c.a)({},x,x)),toggle:m,close:C,tag:"div",children:Object(u.jsx)("h5",{className:"modal-title",children:Object(u.jsx)("span",{className:"align-middle",children:v})})}),Object(u.jsx)(j.a,{className:o()("flex-grow-1",Object(c.a)({},h,h)),children:g})]}))}},916:function(e,t,n){}}]);
//# sourceMappingURL=184.4ed55dba.chunk.js.map