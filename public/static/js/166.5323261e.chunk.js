(this["webpackJsonprilac-web"]=this["webpackJsonprilac-web"]||[]).push([[166],{1058:function(n,a,e){"use strict";var i=e(14),t=e(15),c=e(0),s=e.n(c),r=e(5),o=e.n(r),l=e(58),j=e.n(l),g=e(83),h={active:o.a.bool,children:o.a.node,className:o.a.string,cssModule:o.a.object,disabled:o.a.bool,tag:g.tagPropType},d=function(n){var a=n.active,e=n.className,c=n.cssModule,r=n.disabled,o=n.tag,l=Object(t.a)(n,["active","className","cssModule","disabled","tag"]),h=Object(g.mapToCssModules)(j()(e,"page-item",{active:a,disabled:r}),c);return s.a.createElement(o,Object(i.a)({},l,{className:h}))};d.propTypes=h,d.defaultProps={tag:"li"},a.a=d},1059:function(n,a,e){"use strict";var i=e(14),t=e(15),c=e(0),s=e.n(c),r=e(5),o=e.n(r),l=e(58),j=e.n(l),g=e(83),h={"aria-label":o.a.string,children:o.a.node,className:o.a.string,cssModule:o.a.object,next:o.a.bool,previous:o.a.bool,first:o.a.bool,last:o.a.bool,tag:g.tagPropType},d=function(n){var a,e=n.className,c=n.cssModule,r=n.next,o=n.previous,l=n.first,h=n.last,d=n.tag,P=Object(t.a)(n,["className","cssModule","next","previous","first","last","tag"]),m=Object(g.mapToCssModules)(j()(e,"page-link"),c);o?a="Previous":r?a="Next":l?a="First":h&&(a="Last");var b,x=n["aria-label"]||a;o?b="\u2039":r?b="\u203a":l?b="\xab":h&&(b="\xbb");var f=n.children;return f&&Array.isArray(f)&&0===f.length&&(f=null),P.href||"a"!==d||(d="button"),(o||r||l||h)&&(f=[s.a.createElement("span",{"aria-hidden":"true",key:"caret"},f||b),s.a.createElement("span",{className:"sr-only",key:"sr"},x)]),s.a.createElement(d,Object(i.a)({},P,{className:m,"aria-label":x}),f)};d.propTypes=h,d.defaultProps={tag:"a"},a.a=d},1060:function(n,a,e){"use strict";var i=e(14),t=e(15),c=e(0),s=e.n(c),r=e(5),o=e.n(r),l=e(58),j=e.n(l),g=e(83),h={children:o.a.node,className:o.a.string,listClassName:o.a.string,cssModule:o.a.object,size:o.a.string,tag:g.tagPropType,listTag:g.tagPropType,"aria-label":o.a.string},d=function(n){var a,e=n.className,c=n.listClassName,r=n.cssModule,o=n.size,l=n.tag,h=n.listTag,d=n["aria-label"],P=Object(t.a)(n,["className","listClassName","cssModule","size","tag","listTag","aria-label"]),m=Object(g.mapToCssModules)(j()(e),r),b=Object(g.mapToCssModules)(j()(c,"pagination",((a={})["pagination-"+o]=!!o,a)),r);return s.a.createElement(l,{className:m,"aria-label":d},s.a.createElement(h,Object(i.a)({},P,{className:b})))};d.propTypes=h,d.defaultProps={tag:"nav",listTag:"ul","aria-label":"pagination"},a.a=d},2516:function(n,a,e){"use strict";e.r(a);var i=e(0),t=e(233),c=e.n(t),s=e(484),r=e(485),o=e(515),l=e(494),j=e(546),g=e(1060),h=e(1058),d=e(1059),P=e(6),m=function(){return Object(P.jsxs)(g.a,{className:"d-flex mt-3",children:[Object(P.jsx)(h.a,{children:Object(P.jsx)(d.a,{href:"#",children:"1"})}),Object(P.jsx)(h.a,{children:Object(P.jsx)(d.a,{href:"#",children:"2"})}),Object(P.jsx)(h.a,{children:Object(P.jsx)(d.a,{href:"#",children:"3"})}),Object(P.jsx)(h.a,{active:!0,children:Object(P.jsx)(d.a,{href:"#",children:"4"})}),Object(P.jsx)(h.a,{children:Object(P.jsx)(d.a,{href:"#",children:"5"})}),Object(P.jsx)(h.a,{children:Object(P.jsx)(d.a,{href:"#",children:"6"})}),Object(P.jsx)(h.a,{children:Object(P.jsx)(d.a,{href:"#",children:"7"})})]})},b=function(){return Object(P.jsxs)(g.a,{className:"d-flex mt-3",children:[Object(P.jsx)(h.a,{className:"prev-item",children:Object(P.jsx)(d.a,{href:"#"})}),Object(P.jsx)(h.a,{children:Object(P.jsx)(d.a,{href:"#",children:"1"})}),Object(P.jsx)(h.a,{children:Object(P.jsx)(d.a,{href:"#",children:"2"})}),Object(P.jsx)(h.a,{children:Object(P.jsx)(d.a,{href:"#",children:"3"})}),Object(P.jsx)(h.a,{active:!0,children:Object(P.jsx)(d.a,{href:"#",children:"4"})}),Object(P.jsx)(h.a,{children:Object(P.jsx)(d.a,{href:"#",children:"5"})}),Object(P.jsx)(h.a,{children:Object(P.jsx)(d.a,{href:"#",children:"6"})}),Object(P.jsx)(h.a,{children:Object(P.jsx)(d.a,{href:"#",children:"7"})}),Object(P.jsx)(h.a,{className:"next-item",children:Object(P.jsx)(d.a,{href:"#"})})]})},x=e(1553),f=e(1554),O=function(){return Object(P.jsxs)(g.a,{className:"d-flex mt-3",children:[Object(P.jsx)(h.a,{children:Object(P.jsxs)(d.a,{className:"text-nowrap",href:"#",first:!0,children:[Object(P.jsx)(x.a,{className:"align-middle",size:15}),Object(P.jsx)("span",{className:"align-middle",children:"Prev"})]})}),Object(P.jsx)(h.a,{children:Object(P.jsx)(d.a,{href:"#",children:"1"})}),Object(P.jsx)(h.a,{children:Object(P.jsx)(d.a,{href:"#",children:"2"})}),Object(P.jsx)(h.a,{active:!0,children:Object(P.jsx)(d.a,{href:"#",children:"3"})}),Object(P.jsx)(h.a,{children:Object(P.jsx)(d.a,{href:"#",children:"4"})}),Object(P.jsx)(h.a,{children:Object(P.jsx)(d.a,{href:"#",children:"5"})}),Object(P.jsx)(h.a,{children:Object(P.jsxs)(d.a,{className:"text-nowrap",href:"#",last:!0,children:[Object(P.jsx)("span",{className:"align-middle",children:"Next"}),Object(P.jsx)(f.a,{className:"align-middle",size:15})]})})]})},u=function(){return Object(P.jsxs)(g.a,{className:"d-flex mt-3",children:[Object(P.jsx)(h.a,{children:Object(P.jsx)(d.a,{href:"#",first:!0,children:Object(P.jsx)(x.a,{size:15})})}),Object(P.jsx)(h.a,{children:Object(P.jsx)(d.a,{href:"#",children:"1"})}),Object(P.jsx)(h.a,{children:Object(P.jsx)(d.a,{href:"#",children:"2"})}),Object(P.jsx)(h.a,{active:!0,children:Object(P.jsx)(d.a,{href:"#",children:"3"})}),Object(P.jsx)(h.a,{children:Object(P.jsx)(d.a,{href:"#",children:"4"})}),Object(P.jsx)(h.a,{children:Object(P.jsx)(d.a,{href:"#",children:"5"})}),Object(P.jsx)(h.a,{children:Object(P.jsx)(d.a,{href:"#",last:!0,children:Object(P.jsx)(f.a,{size:15})})})]})},L=function(){return Object(P.jsxs)(g.a,{className:"d-flex mt-3",listClassName:"pagination-success",children:[Object(P.jsx)(h.a,{children:Object(P.jsx)(d.a,{href:"#",first:!0,children:Object(P.jsx)(x.a,{size:15})})}),Object(P.jsx)(h.a,{children:Object(P.jsx)(d.a,{href:"#",children:"1"})}),Object(P.jsx)(h.a,{children:Object(P.jsx)(d.a,{href:"#",children:"2"})}),Object(P.jsx)(h.a,{children:Object(P.jsx)(d.a,{href:"#",children:"3"})}),Object(P.jsx)(h.a,{active:!0,children:Object(P.jsx)(d.a,{href:"#",children:"4"})}),Object(P.jsx)(h.a,{children:Object(P.jsx)(d.a,{href:"#",children:"5"})}),Object(P.jsx)(h.a,{children:Object(P.jsx)(d.a,{href:"#",children:"6"})}),Object(P.jsx)(h.a,{children:Object(P.jsx)(d.a,{href:"#",children:"7"})}),Object(P.jsx)(h.a,{children:Object(P.jsx)(d.a,{href:"#",last:!0,children:Object(P.jsx)(f.a,{size:15})})})]})},p=function(){return Object(P.jsxs)(g.a,{className:"d-flex mt-3",listClassName:"pagination-danger",children:[Object(P.jsx)(h.a,{children:Object(P.jsx)(d.a,{href:"#",first:!0,children:Object(P.jsx)(x.a,{size:15})})}),Object(P.jsx)(h.a,{children:Object(P.jsx)(d.a,{href:"#",children:"1"})}),Object(P.jsx)(h.a,{children:Object(P.jsx)(d.a,{href:"#",children:"2"})}),Object(P.jsx)(h.a,{children:Object(P.jsx)(d.a,{href:"#",children:"3"})}),Object(P.jsx)(h.a,{active:!0,children:Object(P.jsx)(d.a,{href:"#",children:"4"})}),Object(P.jsx)(h.a,{children:Object(P.jsx)(d.a,{href:"#",children:"5"})}),Object(P.jsx)(h.a,{children:Object(P.jsx)(d.a,{href:"#",children:"6"})}),Object(P.jsx)(h.a,{children:Object(P.jsx)(d.a,{href:"#",children:"7"})}),Object(P.jsx)(h.a,{children:Object(P.jsx)(d.a,{href:"#",last:!0,children:Object(P.jsx)(f.a,{size:15})})})]})},I=function(){return Object(P.jsxs)(g.a,{className:"d-flex mt-3",listClassName:"pagination-info",children:[Object(P.jsx)(h.a,{children:Object(P.jsx)(d.a,{href:"#",first:!0,children:Object(P.jsx)(x.a,{size:15})})}),Object(P.jsx)(h.a,{children:Object(P.jsx)(d.a,{href:"#",children:"1"})}),Object(P.jsx)(h.a,{children:Object(P.jsx)(d.a,{href:"#",children:"2"})}),Object(P.jsx)(h.a,{children:Object(P.jsx)(d.a,{href:"#",children:"3"})}),Object(P.jsx)(h.a,{active:!0,children:Object(P.jsx)(d.a,{href:"#",children:"4"})}),Object(P.jsx)(h.a,{children:Object(P.jsx)(d.a,{href:"#",children:"5"})}),Object(P.jsx)(h.a,{children:Object(P.jsx)(d.a,{href:"#",children:"6"})}),Object(P.jsx)(h.a,{children:Object(P.jsx)(d.a,{href:"#",children:"7"})}),Object(P.jsx)(h.a,{children:Object(P.jsx)(d.a,{href:"#",last:!0,children:Object(P.jsx)(f.a,{size:15})})})]})},k=function(){return Object(P.jsxs)(g.a,{className:"d-flex mt-3",listClassName:"pagination-warning",children:[Object(P.jsx)(h.a,{children:Object(P.jsx)(d.a,{href:"#",first:!0,children:Object(P.jsx)(x.a,{size:15})})}),Object(P.jsx)(h.a,{children:Object(P.jsx)(d.a,{href:"#",children:"1"})}),Object(P.jsx)(h.a,{children:Object(P.jsx)(d.a,{href:"#",children:"2"})}),Object(P.jsx)(h.a,{children:Object(P.jsx)(d.a,{href:"#",children:"3"})}),Object(P.jsx)(h.a,{active:!0,children:Object(P.jsx)(d.a,{href:"#",children:"4"})}),Object(P.jsx)(h.a,{children:Object(P.jsx)(d.a,{href:"#",children:"5"})}),Object(P.jsx)(h.a,{children:Object(P.jsx)(d.a,{href:"#",children:"6"})}),Object(P.jsx)(h.a,{children:Object(P.jsx)(d.a,{href:"#",children:"7"})}),Object(P.jsx)(h.a,{children:Object(P.jsx)(d.a,{href:"#",last:!0,children:Object(P.jsx)(f.a,{size:15})})})]})},v=function(){return Object(P.jsxs)(s.a,{children:[Object(P.jsxs)(r.a,{xl:"4",lg:"12",children:[Object(P.jsx)("h5",{className:"text-left",children:"Left Aligned"}),Object(P.jsxs)(g.a,{className:"d-flex justify-content-start mt-2",children:[Object(P.jsx)(h.a,{children:Object(P.jsx)(d.a,{href:"#",children:"1"})}),Object(P.jsx)(h.a,{children:Object(P.jsx)(d.a,{href:"#",children:"2"})}),Object(P.jsx)(h.a,{active:!0,children:Object(P.jsx)(d.a,{href:"#",children:"3"})}),Object(P.jsx)(h.a,{children:Object(P.jsx)(d.a,{href:"#",children:"4"})}),Object(P.jsx)(h.a,{children:Object(P.jsx)(d.a,{href:"#",children:"5"})})]})]}),Object(P.jsxs)(r.a,{xl:"4",lg:"12",children:[Object(P.jsx)("h5",{className:"text-center",children:"Center Aligned"}),Object(P.jsxs)(g.a,{className:"d-flex justify-content-center mt-2",children:[Object(P.jsx)(h.a,{children:Object(P.jsx)(d.a,{href:"#",children:"1"})}),Object(P.jsx)(h.a,{children:Object(P.jsx)(d.a,{href:"#",children:"2"})}),Object(P.jsx)(h.a,{active:!0,children:Object(P.jsx)(d.a,{href:"#",children:"3"})}),Object(P.jsx)(h.a,{children:Object(P.jsx)(d.a,{href:"#",children:"4"})}),Object(P.jsx)(h.a,{children:Object(P.jsx)(d.a,{href:"#",children:"5"})})]})]}),Object(P.jsxs)(r.a,{xl:"4",lg:"12",children:[Object(P.jsx)("h5",{className:"text-right",children:"Right Aligned"}),Object(P.jsxs)(g.a,{className:"d-flex justify-content-end mt-2",children:[Object(P.jsx)(h.a,{children:Object(P.jsx)(d.a,{href:"#",children:"1"})}),Object(P.jsx)(h.a,{children:Object(P.jsx)(d.a,{href:"#",children:"2"})}),Object(P.jsx)(h.a,{active:!0,children:Object(P.jsx)(d.a,{href:"#",children:"3"})}),Object(P.jsx)(h.a,{children:Object(P.jsx)(d.a,{href:"#",children:"4"})}),Object(P.jsx)(h.a,{children:Object(P.jsx)(d.a,{href:"#",children:"5"})})]})]})]})},N=function(){return Object(P.jsxs)(s.a,{className:"align-items-center",children:[Object(P.jsx)(r.a,{xl:"4",lg:"12",children:Object(P.jsxs)(g.a,{size:"lg",children:[Object(P.jsx)(h.a,{children:Object(P.jsx)(d.a,{href:"#",children:"1"})}),Object(P.jsx)(h.a,{children:Object(P.jsx)(d.a,{href:"#",children:"2"})}),Object(P.jsx)(h.a,{active:!0,children:Object(P.jsx)(d.a,{href:"#",children:"3"})}),Object(P.jsx)(h.a,{children:Object(P.jsx)(d.a,{href:"#",children:"4"})}),Object(P.jsx)(h.a,{children:Object(P.jsx)(d.a,{href:"#",children:"5"})})]})}),Object(P.jsx)(r.a,{xl:"4",lg:"12",children:Object(P.jsxs)(g.a,{children:[Object(P.jsx)(h.a,{children:Object(P.jsx)(d.a,{href:"#",children:"1"})}),Object(P.jsx)(h.a,{children:Object(P.jsx)(d.a,{href:"#",children:"2"})}),Object(P.jsx)(h.a,{active:!0,children:Object(P.jsx)(d.a,{href:"#",children:"3"})}),Object(P.jsx)(h.a,{children:Object(P.jsx)(d.a,{href:"#",children:"4"})}),Object(P.jsx)(h.a,{children:Object(P.jsx)(d.a,{href:"#",children:"5"})})]})}),Object(P.jsx)(r.a,{xl:"4",lg:"12",children:Object(P.jsxs)(g.a,{size:"sm",children:[Object(P.jsx)(h.a,{children:Object(P.jsx)(d.a,{href:"#",children:"1"})}),Object(P.jsx)(h.a,{children:Object(P.jsx)(d.a,{href:"#",children:"2"})}),Object(P.jsx)(h.a,{active:!0,children:Object(P.jsx)(d.a,{href:"#",children:"3"})}),Object(P.jsx)(h.a,{children:Object(P.jsx)(d.a,{href:"#",children:"4"})}),Object(P.jsx)(h.a,{children:Object(P.jsx)(d.a,{href:"#",children:"5"})})]})})]})},C=Object(P.jsx)("pre",{children:Object(P.jsx)("code",{className:"language-jsx",children:"\n\nimport { Pagination, PaginationItem, PaginationLink } from 'reactstrap'\n\nconst PaginationBasic = () => {\n  return (\n    <Pagination className='d-flex mt-3'>\n      <PaginationItem>\n        <PaginationLink href='#'>1</PaginationLink>\n      </PaginationItem>\n      <PaginationItem>\n        <PaginationLink href='#'>2</PaginationLink>\n      </PaginationItem>\n      <PaginationItem>\n        <PaginationLink href='#'>3</PaginationLink>\n      </PaginationItem>\n      <PaginationItem active>\n        <PaginationLink href='#'>4</PaginationLink>\n      </PaginationItem>\n      <PaginationItem>\n        <PaginationLink href='#'>5</PaginationLink>\n      </PaginationItem>\n      <PaginationItem>\n        <PaginationLink href='#'>6</PaginationLink>\n      </PaginationItem>\n      <PaginationItem>\n        <PaginationLink href='#'>7</PaginationLink>\n      </PaginationItem>\n    </Pagination>\n  )\n}\nexport default PaginationBasic\n  "})}),T=Object(P.jsx)("pre",{children:Object(P.jsx)("code",{className:"language-jsx",children:"\n\nimport { Pagination, PaginationItem, PaginationLink } from 'reactstrap'\nimport { ChevronLeft, ChevronRight } from 'react-feather'\n\nconst PaginationSeparated = () => {\n  return (\n    <Pagination className='d-flex mt-3'>\n      <PaginationItem className='prev-item'>\n        <PaginationLink href='#' first>\n          <ChevronLeft size={15} />\n        </PaginationLink>\n      </PaginationItem>\n      <PaginationItem>\n        <PaginationLink href='#'>1</PaginationLink>\n      </PaginationItem>\n      <PaginationItem>\n        <PaginationLink href='#'>2</PaginationLink>\n      </PaginationItem>\n      <PaginationItem>\n        <PaginationLink href='#'>3</PaginationLink>\n      </PaginationItem>\n      <PaginationItem active>\n        <PaginationLink href='#'>4</PaginationLink>\n      </PaginationItem>\n      <PaginationItem>\n        <PaginationLink href='#'>5</PaginationLink>\n      </PaginationItem>\n      <PaginationItem>\n        <PaginationLink href='#'>6</PaginationLink>\n      </PaginationItem>\n      <PaginationItem>\n        <PaginationLink href='#'>7</PaginationLink>\n      </PaginationItem>\n      <PaginationItem className='next-item'>\n        <PaginationLink href='#' last>\n          <ChevronRight size={15} />\n        </PaginationLink>\n      </PaginationItem>\n    </Pagination>\n  )\n}\nexport default PaginationSeparated\n  "})}),y=Object(P.jsx)("pre",{children:Object(P.jsx)("code",{className:"language-jsx",children:"\n\nimport { Pagination, PaginationItem, PaginationLink } from 'reactstrap'\nimport { ChevronLeft, ChevronRight } from 'react-feather'\n\nconst PaginationIconsAndText = () => {\n  return (\n    <Pagination className='d-flex mt-3'>\n      <PaginationItem>\n        <PaginationLink href='#' first>\n          <ChevronLeft size={15} /> Prev\n        </PaginationLink>\n      </PaginationItem>\n      <PaginationItem>\n        <PaginationLink href='#'>1</PaginationLink>\n      </PaginationItem>\n      <PaginationItem>\n        <PaginationLink href='#'>2</PaginationLink>\n      </PaginationItem>\n      <PaginationItem active>\n        <PaginationLink href='#'>3</PaginationLink>\n      </PaginationItem>\n      <PaginationItem>\n        <PaginationLink href='#'>4</PaginationLink>\n      </PaginationItem>\n      <PaginationItem>\n        <PaginationLink href='#'>5</PaginationLink>\n      </PaginationItem>\n      <PaginationItem>\n        <PaginationLink href='#' last>\n          Next\n          <ChevronRight size={15} />\n        </PaginationLink>\n      </PaginationItem>\n    </Pagination>\n  )\n}\nexport default PaginationIconsAndText\n  "})}),M=Object(P.jsx)("pre",{children:Object(P.jsx)("code",{className:"language-jsx",children:"\n\nimport { Pagination, PaginationItem, PaginationLink } from 'reactstrap'\nimport { ChevronLeft, ChevronRight } from 'react-feather'\n\nconst PaginationIcons = () => {\n  return (\n    <Pagination className='d-flex mt-3'>\n      <PaginationItem>\n        <PaginationLink href='#' first>\n          <ChevronLeft size={15} />\n        </PaginationLink>\n      </PaginationItem>\n      <PaginationItem>\n        <PaginationLink href='#'>1</PaginationLink>\n      </PaginationItem>\n      <PaginationItem>\n        <PaginationLink href='#'>2</PaginationLink>\n      </PaginationItem>\n      <PaginationItem active>\n        <PaginationLink href='#'>3</PaginationLink>\n      </PaginationItem>\n      <PaginationItem>\n        <PaginationLink href='#'>4</PaginationLink>\n      </PaginationItem>\n      <PaginationItem>\n        <PaginationLink href='#'>5</PaginationLink>\n      </PaginationItem>\n      <PaginationItem>\n        <PaginationLink href='#' last>\n          <ChevronRight size={15} />\n        </PaginationLink>\n      </PaginationItem>\n    </Pagination>\n  )\n}\nexport default PaginationIcons\n  "})}),z=Object(P.jsx)("pre",{children:Object(P.jsx)("code",{className:"language-jsx",children:"\n\nimport { Pagination, PaginationItem, PaginationLink } from 'reactstrap'\nimport { ChevronLeft, ChevronRight } from 'react-feather'\n\nconst PaginationSuccess = () => {\n  return (\n    <Pagination className='d-flex mt-3' listClassName='pagination-success'>\n      <PaginationItem>\n        <PaginationLink href='#' first>\n          <ChevronLeft size={15} />\n        </PaginationLink>\n      </PaginationItem>\n      <PaginationItem>\n        <PaginationLink href='#'>1</PaginationLink>\n      </PaginationItem>\n      <PaginationItem>\n        <PaginationLink href='#'>2</PaginationLink>\n      </PaginationItem>\n      <PaginationItem>\n        <PaginationLink href='#'>3</PaginationLink>\n      </PaginationItem>\n      <PaginationItem active>\n        <PaginationLink href='#'>4</PaginationLink>\n      </PaginationItem>\n      <PaginationItem>\n        <PaginationLink href='#'>5</PaginationLink>\n      </PaginationItem>\n      <PaginationItem>\n        <PaginationLink href='#'>6</PaginationLink>\n      </PaginationItem>\n      <PaginationItem>\n        <PaginationLink href='#'>7</PaginationLink>\n      </PaginationItem>\n      <PaginationItem>\n        <PaginationLink href='#' last>\n          <ChevronRight size={15} />\n        </PaginationLink>\n      </PaginationItem>\n    </Pagination>\n  )\n}\nexport default PaginationSuccess\n\n  "})}),w=Object(P.jsx)("pre",{children:Object(P.jsx)("code",{className:"language-jsx",children:"\n\nimport { Pagination, PaginationItem, PaginationLink } from 'reactstrap'\nimport { ChevronLeft, ChevronRight } from 'react-feather'\n\nconst PaginationDanger = () => {\n  return (\n    <Pagination className='d-flex mt-3' listClassName='pagination-danger'>\n      <PaginationItem>\n        <PaginationLink href='#' first>\n          <ChevronLeft size={15} />\n        </PaginationLink>\n      </PaginationItem>\n      <PaginationItem>\n        <PaginationLink href='#'>1</PaginationLink>\n      </PaginationItem>\n      <PaginationItem>\n        <PaginationLink href='#'>2</PaginationLink>\n      </PaginationItem>\n      <PaginationItem>\n        <PaginationLink href='#'>3</PaginationLink>\n      </PaginationItem>\n      <PaginationItem active>\n        <PaginationLink href='#'>4</PaginationLink>\n      </PaginationItem>\n      <PaginationItem>\n        <PaginationLink href='#'>5</PaginationLink>\n      </PaginationItem>\n      <PaginationItem>\n        <PaginationLink href='#'>6</PaginationLink>\n      </PaginationItem>\n      <PaginationItem>\n        <PaginationLink href='#'>7</PaginationLink>\n      </PaginationItem>\n      <PaginationItem>\n        <PaginationLink href='#' last>\n          <ChevronRight size={15} />\n        </PaginationLink>\n      </PaginationItem>\n    </Pagination>\n  )\n}\nexport default PaginationDanger\n\n  "})}),R=Object(P.jsx)("pre",{children:Object(P.jsx)("code",{className:"language-jsx",children:"\n\nimport { Pagination, PaginationItem, PaginationLink } from 'reactstrap'\nimport { ChevronLeft, ChevronRight } from 'react-feather'\n\nconst PaginationInfo = () => {\n  return (\n    <Pagination className='d-flex mt-3' listClassName='pagination-info'>\n      <PaginationItem>\n        <PaginationLink href='#' first>\n          <ChevronLeft size={15} />\n        </PaginationLink>\n      </PaginationItem>\n      <PaginationItem>\n        <PaginationLink href='#'>1</PaginationLink>\n      </PaginationItem>\n      <PaginationItem>\n        <PaginationLink href='#'>2</PaginationLink>\n      </PaginationItem>\n      <PaginationItem>\n        <PaginationLink href='#'>3</PaginationLink>\n      </PaginationItem>\n      <PaginationItem active>\n        <PaginationLink href='#'>4</PaginationLink>\n      </PaginationItem>\n      <PaginationItem>\n        <PaginationLink href='#'>5</PaginationLink>\n      </PaginationItem>\n      <PaginationItem>\n        <PaginationLink href='#'>6</PaginationLink>\n      </PaginationItem>\n      <PaginationItem>\n        <PaginationLink href='#'>7</PaginationLink>\n      </PaginationItem>\n      <PaginationItem>\n        <PaginationLink href='#' last>\n          <ChevronRight size={15} />\n        </PaginationLink>\n      </PaginationItem>\n    </Pagination>\n  )\n}\nexport default PaginationInfo\n\n  "})}),E=Object(P.jsx)("pre",{children:Object(P.jsx)("code",{className:"language-jsx",children:"\n\nimport { Pagination, PaginationItem, PaginationLink } from 'reactstrap'\nimport { ChevronLeft, ChevronRight } from 'react-feather'\n\nconst PaginationWarning = () => {\n  return (\n    <Pagination className='d-flex mt-3' listClassName='pagination-warning'>\n      <PaginationItem>\n        <PaginationLink href='#' first>\n          <ChevronLeft size={15} />\n        </PaginationLink>\n      </PaginationItem>\n      <PaginationItem>\n        <PaginationLink href='#'>1</PaginationLink>\n      </PaginationItem>\n      <PaginationItem>\n        <PaginationLink href='#'>2</PaginationLink>\n      </PaginationItem>\n      <PaginationItem>\n        <PaginationLink href='#'>3</PaginationLink>\n      </PaginationItem>\n      <PaginationItem active>\n        <PaginationLink href='#'>4</PaginationLink>\n      </PaginationItem>\n      <PaginationItem>\n        <PaginationLink href='#'>5</PaginationLink>\n      </PaginationItem>\n      <PaginationItem>\n        <PaginationLink href='#'>6</PaginationLink>\n      </PaginationItem>\n      <PaginationItem>\n        <PaginationLink href='#'>7</PaginationLink>\n      </PaginationItem>\n      <PaginationItem>\n        <PaginationLink href='#' last>\n          <ChevronRight size={15} />\n        </PaginationLink>\n      </PaginationItem>\n    </Pagination>\n  )\n}\nexport default PaginationWarning\n  "})}),A=Object(P.jsx)("pre",{children:Object(P.jsx)("code",{className:"language-jsx",children:"\n\nimport {\n  Pagination,\n  PaginationItem,\n  PaginationLink,\n  Row,\n  Col\n} from 'reactstrap'\n\nconst PaginationPositions = () => {\n  return (\n    <Row>\n      <Col xl='4' lg='12'>\n        <h5 className='text-left'>Left Aligned</h5>\n        <Pagination className='d-flex justify-content-start mt-3'>\n          <PaginationItem>\n            <PaginationLink href='#'>1</PaginationLink>\n          </PaginationItem>\n          <PaginationItem>\n            <PaginationLink href='#'>2</PaginationLink>\n          </PaginationItem>\n          <PaginationItem active>\n            <PaginationLink href='#'>3</PaginationLink>\n          </PaginationItem>\n          <PaginationItem>\n            <PaginationLink href='#'>4</PaginationLink>\n          </PaginationItem>\n          <PaginationItem>\n            <PaginationLink href='#'>5</PaginationLink>\n          </PaginationItem>\n        </Pagination>\n      </Col>\n      <Col xl='4' lg='12'>\n        <h5 className='text-center'>Center Aligned</h5>\n        <Pagination className='d-flex justify-content-center mt-3'>\n          <PaginationItem>\n            <PaginationLink href='#'>1</PaginationLink>\n          </PaginationItem>\n          <PaginationItem>\n            <PaginationLink href='#'>2</PaginationLink>\n          </PaginationItem>\n          <PaginationItem active>\n            <PaginationLink href='#'>3</PaginationLink>\n          </PaginationItem>\n          <PaginationItem>\n            <PaginationLink href='#'>4</PaginationLink>\n          </PaginationItem>\n          <PaginationItem>\n            <PaginationLink href='#'>5</PaginationLink>\n          </PaginationItem>\n        </Pagination>\n      </Col>\n      <Col xl='4' lg='12'>\n        <h5 className='text-right'>Right Aligned</h5>\n        <Pagination className='d-flex justify-content-end mt-3'>\n          <PaginationItem>\n            <PaginationLink href='#'>1</PaginationLink>\n          </PaginationItem>\n          <PaginationItem>\n            <PaginationLink href='#'>2</PaginationLink>\n          </PaginationItem>\n          <PaginationItem active>\n            <PaginationLink href='#'>3</PaginationLink>\n          </PaginationItem>\n          <PaginationItem>\n            <PaginationLink href='#'>4</PaginationLink>\n          </PaginationItem>\n          <PaginationItem>\n            <PaginationLink href='#'>5</PaginationLink>\n          </PaginationItem>\n        </Pagination>\n      </Col>\n    </Row>\n  )\n}\nexport default PaginationPositions\n  "})}),S=Object(P.jsx)("pre",{children:Object(P.jsx)("code",{className:"language-jsx",children:"\n\nimport {\n  Pagination,\n  PaginationItem,\n  PaginationLink,\n  Row,\n  Col\n} from 'reactstrap'\n\nconst PaginationPositions = () => {\n  return (\n    <Row className='align-items-center'>\n      <Col xl='4' lg='12'>\n        <Pagination size='lg'>\n          <PaginationItem>\n            <PaginationLink href='#'>1</PaginationLink>\n          </PaginationItem>\n          <PaginationItem>\n            <PaginationLink href='#'>2</PaginationLink>\n          </PaginationItem>\n          <PaginationItem active>\n            <PaginationLink href='#'>3</PaginationLink>\n          </PaginationItem>\n          <PaginationItem>\n            <PaginationLink href='#'>4</PaginationLink>\n          </PaginationItem>\n          <PaginationItem>\n            <PaginationLink href='#'>5</PaginationLink>\n          </PaginationItem>\n        </Pagination>\n      </Col>\n      <Col xl='4' lg='12'>\n        <Pagination>\n          <PaginationItem>\n            <PaginationLink href='#'>1</PaginationLink>\n          </PaginationItem>\n          <PaginationItem>\n            <PaginationLink href='#'>2</PaginationLink>\n          </PaginationItem>\n          <PaginationItem active>\n            <PaginationLink href='#'>3</PaginationLink>\n          </PaginationItem>\n          <PaginationItem>\n            <PaginationLink href='#'>4</PaginationLink>\n          </PaginationItem>\n          <PaginationItem>\n            <PaginationLink href='#'>5</PaginationLink>\n          </PaginationItem>\n        </Pagination>\n      </Col>\n      <Col xl='4' lg='12'>\n        <Pagination size='sm'>\n          <PaginationItem>\n            <PaginationLink href='#'>1</PaginationLink>\n          </PaginationItem>\n          <PaginationItem>\n            <PaginationLink href='#'>2</PaginationLink>\n          </PaginationItem>\n          <PaginationItem active>\n            <PaginationLink href='#'>3</PaginationLink>\n          </PaginationItem>\n          <PaginationItem>\n            <PaginationLink href='#'>4</PaginationLink>\n          </PaginationItem>\n          <PaginationItem>\n            <PaginationLink href='#'>5</PaginationLink>\n          </PaginationItem>\n        </Pagination>\n      </Col>\n    </Row>\n  )\n}\nexport default PaginationPositions\n  "})});a.default=function(){return Object(i.useEffect)((function(){c.a.highlightAll()}),[]),Object(P.jsxs)(i.Fragment,{children:[Object(P.jsx)(l.a,{breadCrumbTitle:"Pagination",breadCrumbParent:"Components",breadCrumbActive:"Pagination"}),Object(P.jsxs)(s.a,{className:"match-height",children:[Object(P.jsx)(r.a,{md:"6",sm:"12",children:Object(P.jsxs)(j.a,{title:"Basic Pagination",code:C,children:[Object(P.jsx)(o.a,{children:"A basic pagination with active item."}),Object(P.jsx)(m,{})]})}),Object(P.jsx)(r.a,{md:"6",sm:"12",children:Object(P.jsxs)(j.a,{title:"Separated Pagination",code:T,children:[Object(P.jsxs)(o.a,{children:["To create separated pagination use ",Object(P.jsx)("code",{children:".prev-item"})," class for the first item and"," ",Object(P.jsx)("code",{children:".next-item"})," for the last item."]}),Object(P.jsx)(b,{})]})}),Object(P.jsx)(r.a,{md:"6",sm:"12",children:Object(P.jsxs)(j.a,{title:"With Icon & Text",code:y,children:[Object(P.jsx)(o.a,{children:"Pagination with icon and text."}),Object(P.jsx)(O,{})]})}),Object(P.jsx)(r.a,{md:"6",sm:"12",children:Object(P.jsxs)(j.a,{title:"Icons Only",code:M,children:[Object(P.jsx)(o.a,{children:"Pagination with only icons."}),Object(P.jsx)(u,{})]})}),Object(P.jsx)(r.a,{md:"6",sm:"12",children:Object(P.jsxs)(j.a,{title:"Success",code:z,children:[Object(P.jsxs)(o.a,{children:["Use class ",Object(P.jsx)("code",{children:".pagination-success"})," with",Object(P.jsx)("code",{children:"pagination"})," tag."]}),Object(P.jsx)(L,{})]})}),Object(P.jsx)(r.a,{md:"6",sm:"12",children:Object(P.jsxs)(j.a,{title:"Danger",code:w,children:[Object(P.jsxs)(o.a,{children:["Use class ",Object(P.jsx)("code",{children:".pagination-danger"})," with",Object(P.jsx)("code",{children:"pagination"})," tag."]}),Object(P.jsx)(p,{})]})}),Object(P.jsx)(r.a,{md:"6",sm:"12",children:Object(P.jsxs)(j.a,{title:"Info",code:R,children:[Object(P.jsxs)(o.a,{children:["Use class ",Object(P.jsx)("code",{children:".pagination-info"})," with",Object(P.jsx)("code",{children:"pagination"})," tag."]}),Object(P.jsx)(I,{})]})}),Object(P.jsx)(r.a,{md:"6",sm:"12",children:Object(P.jsxs)(j.a,{title:"Warning",code:E,children:[Object(P.jsxs)(o.a,{children:["Use class ",Object(P.jsx)("code",{children:".pagination-warning"})," with",Object(P.jsx)("code",{children:"pagination"})," tag."]}),Object(P.jsx)(k,{})]})})]}),Object(P.jsxs)(s.a,{children:[Object(P.jsx)(r.a,{sm:"12",children:Object(P.jsxs)(j.a,{title:"Positions",code:A,children:[Object(P.jsxs)(o.a,{children:["Use classes ",Object(P.jsx)("code",{children:".justify-content-[direction]"})," with",Object(P.jsx)("code",{children:"pagination"})," tag."]}),Object(P.jsx)(v,{})]})}),Object(P.jsx)(r.a,{sm:"12",children:Object(P.jsxs)(j.a,{title:"Sizes",code:S,children:[Object(P.jsxs)(o.a,{children:["Use prop ",Object(P.jsx)("code",{children:'size="lg"'})," for large size pagination & use",Object(P.jsx)("code",{children:'size="sm"'}),"for small size pagination."]}),Object(P.jsx)(N,{})]})})]})]})}},480:function(n,a,e){"use strict";var i=e(14),t=e(15),c=e(0),s=e.n(c),r=e(5),o=e.n(r),l=e(58),j=e.n(l),g=e(83),h={tag:g.tagPropType,className:o.a.string,cssModule:o.a.object},d=function(n){var a=n.className,e=n.cssModule,c=n.tag,r=Object(t.a)(n,["className","cssModule","tag"]),o=Object(g.mapToCssModules)(j()(a,"card-title"),e);return s.a.createElement(c,Object(i.a)({},r,{className:o}))};d.propTypes=h,d.defaultProps={tag:"div"},a.a=d},482:function(n,a,e){"use strict";var i=e(14),t=e(15),c=e(0),s=e.n(c),r=e(5),o=e.n(r),l=e(58),j=e.n(l),g=e(83),h={tag:g.tagPropType,className:o.a.string,cssModule:o.a.object},d=function(n){var a=n.className,e=n.cssModule,c=n.tag,r=Object(t.a)(n,["className","cssModule","tag"]),o=Object(g.mapToCssModules)(j()(a,"card-header"),e);return s.a.createElement(c,Object(i.a)({},r,{className:o}))};d.propTypes=h,d.defaultProps={tag:"div"},a.a=d},483:function(n,a,e){"use strict";var i=e(14),t=e(15),c=e(0),s=e.n(c),r=e(5),o=e.n(r),l=e(58),j=e.n(l),g=e(83),h={tag:g.tagPropType,inverse:o.a.bool,color:o.a.string,body:o.a.bool,outline:o.a.bool,className:o.a.string,cssModule:o.a.object,innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},d=function(n){var a=n.className,e=n.cssModule,c=n.color,r=n.body,o=n.inverse,l=n.outline,h=n.tag,d=n.innerRef,P=Object(t.a)(n,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),m=Object(g.mapToCssModules)(j()(a,"card",!!o&&"text-white",!!r&&"card-body",!!c&&(l?"border":"bg")+"-"+c),e);return s.a.createElement(h,Object(i.a)({},P,{className:m,ref:d}))};d.propTypes=h,d.defaultProps={tag:"div"},a.a=d},484:function(n,a,e){"use strict";var i=e(14),t=e(15),c=e(0),s=e.n(c),r=e(5),o=e.n(r),l=e(58),j=e.n(l),g=e(83),h=o.a.oneOfType([o.a.number,o.a.string]),d={tag:g.tagPropType,noGutters:o.a.bool,className:o.a.string,cssModule:o.a.object,form:o.a.bool,xs:h,sm:h,md:h,lg:h,xl:h},P={tag:"div",widths:["xs","sm","md","lg","xl"]},m=function(n){var a=n.className,e=n.cssModule,c=n.noGutters,r=n.tag,o=n.form,l=n.widths,h=Object(t.a)(n,["className","cssModule","noGutters","tag","form","widths"]),d=[];l.forEach((function(a,e){var i=n[a];if(delete h[a],i){var t=!e;d.push(t?"row-cols-"+i:"row-cols-"+a+"-"+i)}}));var P=Object(g.mapToCssModules)(j()(a,c?"no-gutters":null,o?"form-row":"row",d),e);return s.a.createElement(r,Object(i.a)({},h,{className:P}))};m.propTypes=d,m.defaultProps=P,a.a=m},485:function(n,a,e){"use strict";var i=e(14),t=e(15),c=e(0),s=e.n(c),r=e(5),o=e.n(r),l=e(58),j=e.n(l),g=e(83),h=o.a.oneOfType([o.a.number,o.a.string]),d=o.a.oneOfType([o.a.bool,o.a.number,o.a.string,o.a.shape({size:o.a.oneOfType([o.a.bool,o.a.number,o.a.string]),order:h,offset:h})]),P={tag:g.tagPropType,xs:d,sm:d,md:d,lg:d,xl:d,className:o.a.string,cssModule:o.a.object,widths:o.a.array},m={tag:"div",widths:["xs","sm","md","lg","xl"]},b=function(n,a,e){return!0===e||""===e?n?"col":"col-"+a:"auto"===e?n?"col-auto":"col-"+a+"-auto":n?"col-"+e:"col-"+a+"-"+e},x=function(n){var a=n.className,e=n.cssModule,c=n.widths,r=n.tag,o=Object(t.a)(n,["className","cssModule","widths","tag"]),l=[];c.forEach((function(a,i){var t=n[a];if(delete o[a],t||""===t){var c=!i;if(Object(g.isObject)(t)){var s,r=c?"-":"-"+a+"-",h=b(c,a,t.size);l.push(Object(g.mapToCssModules)(j()(((s={})[h]=t.size||""===t.size,s["order"+r+t.order]=t.order||0===t.order,s["offset"+r+t.offset]=t.offset||0===t.offset,s)),e))}else{var d=b(c,a,t);l.push(d)}}})),l.length||l.push("col");var h=Object(g.mapToCssModules)(j()(a,l),e);return s.a.createElement(r,Object(i.a)({},o,{className:h}))};x.propTypes=P,x.defaultProps=m,a.a=x},486:function(n,a,e){"use strict";var i=e(14),t=e(15),c=e(0),s=e.n(c),r=e(5),o=e.n(r),l=e(58),j=e.n(l),g=e(83),h={tag:g.tagPropType,className:o.a.string,cssModule:o.a.object,innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},d=function(n){var a=n.className,e=n.cssModule,c=n.innerRef,r=n.tag,o=Object(t.a)(n,["className","cssModule","innerRef","tag"]),l=Object(g.mapToCssModules)(j()(a,"card-body"),e);return s.a.createElement(r,Object(i.a)({},o,{className:l,ref:c}))};d.propTypes=h,d.defaultProps={tag:"div"},a.a=d},494:function(n,a,e){"use strict";var i=e(474),t=e(513),c=e(514),s=e(6);a.a=function(n){var a=n.breadCrumbTitle,e=n.breadCrumbParent,r=n.breadCrumbParent2,o=n.breadCrumbParent3,l=n.breadCrumbActive;return Object(s.jsxs)("div",{className:"content-header row",children:[Object(s.jsx)("div",{className:"content-header-left col-md-9 col-12 mb-2",children:Object(s.jsx)("div",{className:"row breadcrumbs-top",children:Object(s.jsxs)("div",{className:"col-12",children:[a?Object(s.jsx)("h2",{className:"content-header-title float-left mb-0",children:a}):"",Object(s.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(s.jsxs)(t.a,{children:[Object(s.jsx)(c.a,{tag:"li",children:Object(s.jsx)(i.b,{to:"/",children:"Home"})}),Object(s.jsx)(c.a,{tag:"li",className:"text-primary",children:e}),r?Object(s.jsx)(c.a,{tag:"li",className:"text-primary",children:r}):"",o?Object(s.jsx)(c.a,{tag:"li",className:"text-primary",children:o}):"",Object(s.jsx)(c.a,{tag:"li",active:!0,children:l})]})})]})})}),Object(s.jsx)("div",{className:"content-header-right text-md-right col-md-3 col-12 d-md-block d-none",children:Object(s.jsx)("div",{className:"form-group breadcrum-right dropdown"})})]})}},513:function(n,a,e){"use strict";var i=e(14),t=e(15),c=e(0),s=e.n(c),r=e(5),o=e.n(r),l=e(58),j=e.n(l),g=e(83),h={tag:g.tagPropType,listTag:g.tagPropType,className:o.a.string,listClassName:o.a.string,cssModule:o.a.object,children:o.a.node,"aria-label":o.a.string},d=function(n){var a=n.className,e=n.listClassName,c=n.cssModule,r=n.children,o=n.tag,l=n.listTag,h=n["aria-label"],d=Object(t.a)(n,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),P=Object(g.mapToCssModules)(j()(a),c),m=Object(g.mapToCssModules)(j()("breadcrumb",e),c);return s.a.createElement(o,Object(i.a)({},d,{className:P,"aria-label":h}),s.a.createElement(l,{className:m},r))};d.propTypes=h,d.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"},a.a=d},514:function(n,a,e){"use strict";var i=e(14),t=e(15),c=e(0),s=e.n(c),r=e(5),o=e.n(r),l=e(58),j=e.n(l),g=e(83),h={tag:g.tagPropType,active:o.a.bool,className:o.a.string,cssModule:o.a.object},d=function(n){var a=n.className,e=n.cssModule,c=n.active,r=n.tag,o=Object(t.a)(n,["className","cssModule","active","tag"]),l=Object(g.mapToCssModules)(j()(a,!!c&&"active","breadcrumb-item"),e);return s.a.createElement(r,Object(i.a)({},o,{className:l,"aria-current":c?"page":void 0}))};d.propTypes=h,d.defaultProps={tag:"li"},a.a=d},515:function(n,a,e){"use strict";var i=e(14),t=e(15),c=e(0),s=e.n(c),r=e(5),o=e.n(r),l=e(58),j=e.n(l),g=e(83),h={tag:g.tagPropType,className:o.a.string,cssModule:o.a.object},d=function(n){var a=n.className,e=n.cssModule,c=n.tag,r=Object(t.a)(n,["className","cssModule","tag"]),o=Object(g.mapToCssModules)(j()(a,"card-text"),e);return s.a.createElement(c,Object(i.a)({},r,{className:o}))};d.propTypes=h,d.defaultProps={tag:"p"},a.a=d},546:function(n,a,e){"use strict";var i=e(16),t=e(0),c=e(1565),s=e(486),r=e(483),o=e(482),l=e(480),j=e(1170),g=e(6);a.a=function(n){var a=n.title,e=n.children,h=n.noBody,d=n.code,P=n.iconCode,m=Object(t.useState)(!1),b=Object(i.a)(m,2),x=b[0],f=b[1],O=P||Object(g.jsx)(c.a,{size:15}),u=h?t.Fragment:s.a;return Object(g.jsxs)(r.a,{className:"card-snippet",children:[Object(g.jsxs)(o.a,{children:[Object(g.jsx)(l.a,{tag:"h4",children:a}),Object(g.jsx)("div",{className:"views cursor-pointer",onClick:function(){return f(!x)},children:O})]}),Object(g.jsx)(u,{children:e}),Object(g.jsx)(j.a,{isOpen:x,children:Object(g.jsx)(s.a,{children:d})})]})}}}]);
//# sourceMappingURL=166.5323261e.chunk.js.map