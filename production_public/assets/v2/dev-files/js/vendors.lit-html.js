/*! For license information please see vendors.lit-html.js.LICENSE.txt */
"use strict";(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["vendors.lit-html"],{30683:(t,e,i)=>{i.r(e),i.d(e,{Directive:()=>o,PartType:()=>s,directive:()=>n});const s={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},n=t=>(...e)=>({_$litDirective$:t,values:e});class o{constructor(t){}get _$isConnected(){return this._$parent._$isConnected}_$initialize(t,e,i){this.__part=t,this._$parent=e,this.__attributeIndex=i}_$resolve(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}},99760:(t,e,i)=>{i.r(e),i.d(e,{styleMap:()=>l});var s=i(34633),n=i(30683);const o="important",r=" !"+o;class a extends n.Directive{constructor(t){if(super(t),t.type!==n.PartType.ATTRIBUTE||"style"!==t.name||t.strings?.length>2)throw new Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,i)=>{const s=t[i];return null==s?e:e+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`}),"")}update(t,[e]){const{style:i}=t.element;if(void 0===this._previousStyleProperties)return this._previousStyleProperties=new Set(Object.keys(e)),this.render(e);for(const t of this._previousStyleProperties)null==e[t]&&(this._previousStyleProperties.delete(t),t.includes("-")?i.removeProperty(t):i[t]=null);for(const t in e){const s=e[t];if(null!=s){this._previousStyleProperties.add(t);const e="string"==typeof s&&s.endsWith(r);t.includes("-")||e?i.setProperty(t,e?s.slice(0,-11):s,e?o:""):i[t]=s}}return s.noChange}}const l=(0,n.directive)(a)},34633:(t,e,i)=>{i.r(e),i.d(e,{_$LH:()=>X,html:()=>P,noChange:()=>A,nothing:()=>z,render:()=>J,svg:()=>L});const s=globalThis,n=t=>{s.emitLitDebugLogEvents&&s.dispatchEvent(new CustomEvent("lit-debug",{detail:t}))};let o,r=0;s.litIssuedWarnings??=new Set,o=(t,e)=>{e+=t?` See https://lit.dev/msg/${t} for more information.`:"",s.litIssuedWarnings.has(e)||(console.warn(e),s.litIssuedWarnings.add(e))},o("dev-mode","Lit is in dev mode. Not recommended for production!");const a=s.ShadyDOM?.inUse&&!0===s.ShadyDOM?.noPatch?s.ShadyDOM.wrap:t=>t,l=s.trustedTypes,d=l?l.createPolicy("lit-html",{createHTML:t=>t}):void 0,h=t=>t,c=(t,e,i)=>h,m=(t,e,i)=>D(t,e,i),p="$lit$",u=`lit$${String(Math.random()).slice(9)}$`,_="?"+u,$=`<${_}>`,g=document,v=()=>g.createComment(""),f=t=>null===t||"object"!=typeof t&&"function"!=typeof t,y=Array.isArray,b=t=>y(t)||"function"==typeof t?.[Symbol.iterator],w="[ \t\n\f\r]",x=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,T=/-->/g,N=/>/g,S=new RegExp(`>|${w}(?:([^\\s"'>=/]+)(${w}*=${w}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),V=/'/g,C=/"/g,E=/^(?:script|style|textarea|title)$/i,k=t=>(e,...i)=>(e.some((t=>void 0===t))&&console.warn("Some template strings are undefined.\nThis is probably caused by illegal octal escape sequences."),i.some((t=>t?._$litStatic$))&&o("","Static values 'literal' or 'unsafeStatic' cannot be used as values to non-static templates.\nPlease use the static 'html' tag function. See https://lit.dev/docs/templates/expressions/#static-expressions"),{_$litType$:t,strings:e,values:i}),P=k(1),L=k(2),A=Symbol.for("lit-noChange"),z=Symbol.for("lit-nothing"),I=new WeakMap,M=g.createTreeWalker(g,129);let D=c;function O(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw")){let t="invalid template strings array";throw t="\n          Internal Error: expected template strings to be an array\n          with a 'raw' field. Faking a template strings array by\n          calling html or svg like an ordinary function is effectively\n          the same as calling unsafeHtml and can lead to major security\n          issues, e.g. opening your code up to XSS attacks.\n          If you're using the html or svg tagged template functions normally\n          and still seeing this error, please file a bug at\n          https://github.com/lit/lit/issues/new?template=bug_report.md\n          and include information about your build tooling, if any.\n        ".trim().replace(/\n */g,"\n"),new Error(t)}return void 0!==d?d.createHTML(e):e}const H=(t,e)=>{const i=t.length-1,s=[];let n,o=2===e?"<svg>":"",r=x;for(let e=0;e<i;e++){const i=t[e];let a,l,d=-1,h=0;for(;h<i.length&&(r.lastIndex=h,l=r.exec(i),null!==l);)if(h=r.lastIndex,r===x){if("!--"===l[1])r=T;else if(void 0!==l[1])r=N;else if(void 0!==l[2])E.test(l[2])&&(n=new RegExp(`</${l[2]}`,"g")),r=S;else if(void 0!==l[3])throw new Error("Bindings in tag names are not supported. Please use static templates instead. See https://lit.dev/docs/templates/expressions/#static-expressions")}else r===S?">"===l[0]?(r=n??x,d=-1):void 0===l[1]?d=-2:(d=r.lastIndex-l[2].length,a=l[1],r=void 0===l[3]?S:'"'===l[3]?C:V):r===C||r===V?r=S:r===T||r===N?r=x:(r=S,n=void 0);console.assert(-1===d||r===S||r===V||r===C,"unexpected parse state B");const c=r===S&&t[e+1].startsWith("/>")?" ":"";o+=r===x?i+$:d>=0?(s.push(a),i.slice(0,d)+p+i.slice(d)+u+c):i+u+(-2===d?e:c)}return[O(t,o+(t[i]||"<?>")+(2===e?"</svg>":"")),s]};class R{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let r=0,a=0;const d=t.length-1,h=this.parts,[c,m]=H(t,e);if(this.el=R.createElement(c,i),M.currentNode=this.el.content,2===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(s=M.nextNode())&&h.length<d;){if(1===s.nodeType){{const t=s.localName;if(/^(?:textarea|template)$/i.test(t)&&s.innerHTML.includes(u)){const e=`Expressions are not supported inside \`${t}\` elements. See https://lit.dev/msg/expression-in-${t} for more information.`;if("template"===t)throw new Error(e);o("",e)}}if(s.hasAttributes())for(const t of s.getAttributeNames())if(t.endsWith(p)){const e=m[a++],i=s.getAttribute(t).split(u),n=/([.?@])?(.*)/.exec(e);h.push({type:1,index:r,name:n[2],strings:i,ctor:"."===n[1]?F:"?"===n[1]?Y:"@"===n[1]?Z:U}),s.removeAttribute(t)}else t.startsWith(u)&&(h.push({type:6,index:r}),s.removeAttribute(t));if(E.test(s.tagName)){const t=s.textContent.split(u),e=t.length-1;if(e>0){s.textContent=l?l.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],v()),M.nextNode(),h.push({type:2,index:++r});s.append(t[e],v())}}}else if(8===s.nodeType)if(s.data===_)h.push({type:2,index:r});else{let t=-1;for(;-1!==(t=s.data.indexOf(u,t+1));)h.push({type:7,index:r}),t+=u.length-1}r++}n&&n({kind:"template prep",template:this,clonableTemplate:this.el,parts:this.parts,strings:t})}static createElement(t,e){const i=g.createElement("template");return i.innerHTML=t,i}}function B(t,e,i=t,s){if(e===A)return e;let n=void 0!==s?i.__directives?.[s]:i.__directive;const o=f(e)?void 0:e._$litDirective$;return n?.constructor!==o&&(n?._$notifyDirectiveConnectionChanged?.(!1),void 0===o?n=void 0:(n=new o(t),n._$initialize(t,i,s)),void 0!==s?(i.__directives??=[])[s]=n:i.__directive=n),void 0!==n&&(e=B(t,n._$resolve(t,e.values),n,s)),e}class W{constructor(t,e){this._$parts=[],this._$disconnectableChildren=void 0,this._$template=t,this._$parent=e}get parentNode(){return this._$parent.parentNode}get _$isConnected(){return this._$parent._$isConnected}_clone(t){const{el:{content:e},parts:i}=this._$template,s=(t?.creationScope??g).importNode(e,!0);M.currentNode=s;let n=M.nextNode(),o=0,r=0,a=i[0];for(;void 0!==a;){if(o===a.index){let e;2===a.type?e=new j(n,n.nextSibling,this,t):1===a.type?e=new a.ctor(n,a.name,a.strings,this,t):6===a.type&&(e=new q(n,this,t)),this._$parts.push(e),a=i[++r]}o!==a?.index&&(n=M.nextNode(),o++)}return M.currentNode=g,s}_update(t){let e=0;for(const i of this._$parts)void 0!==i&&(n&&n({kind:"set part",part:i,value:t[e],valueIndex:e,values:t,templateInstance:this}),void 0!==i.strings?(i._$setValue(t,i,e),e+=i.strings.length-2):i._$setValue(t[e])),e++}}class j{get _$isConnected(){return this._$parent?._$isConnected??this.__isConnected}constructor(t,e,i,s){this.type=2,this._$committedValue=z,this._$disconnectableChildren=void 0,this._$startNode=t,this._$endNode=e,this._$parent=i,this.options=s,this.__isConnected=s?.isConnected??!0,this._textSanitizer=void 0}get parentNode(){let t=a(this._$startNode).parentNode;const e=this._$parent;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$startNode}get endNode(){return this._$endNode}_$setValue(t,e=this){if(null===this.parentNode)throw new Error("This `ChildPart` has no `parentNode` and therefore cannot accept a value. This likely means the element containing the part was manipulated in an unsupported way outside of Lit's control such that the part's marker nodes were ejected from DOM. For example, setting the element's `innerHTML` or `textContent` can do this.");if(t=B(this,t,e),f(t))t===z||null==t||""===t?(this._$committedValue!==z&&(n&&n({kind:"commit nothing to child",start:this._$startNode,end:this._$endNode,parent:this._$parent,options:this.options}),this._$clear()),this._$committedValue=z):t!==this._$committedValue&&t!==A&&this._commitText(t);else if(void 0!==t._$litType$)this._commitTemplateResult(t);else if(void 0!==t.nodeType){if(this.options?.host===t)return this._commitText("[probable mistake: rendered a template's host in itself (commonly caused by writing ${this} in a template]"),void console.warn("Attempted to render the template host",t,"inside itself. This is almost always a mistake, and in dev mode ","we render some warning text. In production however, we'll ","render it, which will usually result in an error, and sometimes ","in the element disappearing from the DOM.");this._commitNode(t)}else b(t)?this._commitIterable(t):this._commitText(t)}_insert(t){return a(a(this._$startNode).parentNode).insertBefore(t,this._$endNode)}_commitNode(t){if(this._$committedValue!==t){if(this._$clear(),D!==c){const t=this._$startNode.parentNode?.nodeName;if("STYLE"===t||"SCRIPT"===t){let e="Forbidden";throw e="STYLE"===t?"Lit does not support binding inside style nodes. This is a security risk, as style injection attacks can exfiltrate data and spoof UIs. Consider instead using css`...` literals to compose styles, and make do dynamic styling with css custom properties, ::parts, <slot>s, and by mutating the DOM rather than stylesheets.":"Lit does not support binding inside script nodes. This is a security risk, as it could allow arbitrary code execution.",new Error(e)}}n&&n({kind:"commit node",start:this._$startNode,parent:this._$parent,value:t,options:this.options}),this._$committedValue=this._insert(t)}}_commitText(t){if(this._$committedValue!==z&&f(this._$committedValue)){const e=a(this._$startNode).nextSibling;void 0===this._textSanitizer&&(this._textSanitizer=m(e,"data","property")),t=this._textSanitizer(t),n&&n({kind:"commit text",node:e,value:t,options:this.options}),e.data=t}else{const e=g.createTextNode("");this._commitNode(e),void 0===this._textSanitizer&&(this._textSanitizer=m(e,"data","property")),t=this._textSanitizer(t),n&&n({kind:"commit text",node:e,value:t,options:this.options}),e.data=t}this._$committedValue=t}_commitTemplateResult(t){const{values:e,_$litType$:i}=t,s="number"==typeof i?this._$getTemplate(t):(void 0===i.el&&(i.el=R.createElement(O(i.h,i.h[0]),this.options)),i);if(this._$committedValue?._$template===s)n&&n({kind:"template updating",template:s,instance:this._$committedValue,parts:this._$committedValue._$parts,options:this.options,values:e}),this._$committedValue._update(e);else{const t=new W(s,this),i=t._clone(this.options);n&&n({kind:"template instantiated",template:s,instance:t,parts:t._$parts,options:this.options,fragment:i,values:e}),t._update(e),n&&n({kind:"template instantiated and updated",template:s,instance:t,parts:t._$parts,options:this.options,fragment:i,values:e}),this._commitNode(i),this._$committedValue=t}}_$getTemplate(t){let e=I.get(t.strings);return void 0===e&&I.set(t.strings,e=new R(t)),e}_commitIterable(t){y(this._$committedValue)||(this._$committedValue=[],this._$clear());const e=this._$committedValue;let i,s=0;for(const n of t)s===e.length?e.push(i=new j(this._insert(v()),this._insert(v()),this,this.options)):i=e[s],i._$setValue(n),s++;s<e.length&&(this._$clear(i&&a(i._$endNode).nextSibling,s),e.length=s)}_$clear(t=a(this._$startNode).nextSibling,e){for(this._$notifyConnectionChanged?.(!1,!0,e);t&&t!==this._$endNode;){const e=a(t).nextSibling;a(t).remove(),t=e}}setConnected(t){if(void 0!==this._$parent)throw new Error("part.setConnected() may only be called on a RootPart returned from render().");this.__isConnected=t,this._$notifyConnectionChanged?.(t)}}class U{get tagName(){return this.element.tagName}get _$isConnected(){return this._$parent._$isConnected}constructor(t,e,i,s,n){this.type=1,this._$committedValue=z,this._$disconnectableChildren=void 0,this.element=t,this.name=e,this._$parent=s,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$committedValue=new Array(i.length-1).fill(new String),this.strings=i):this._$committedValue=z,this._sanitizer=void 0}_$setValue(t,e=this,i,s){const n=this.strings;let o=!1;if(void 0===n)t=B(this,t,e,0),o=!f(t)||t!==this._$committedValue&&t!==A,o&&(this._$committedValue=t);else{const s=t;let r,a;for(t=n[0],r=0;r<n.length-1;r++)a=B(this,s[i+r],e,r),a===A&&(a=this._$committedValue[r]),o||=!f(a)||a!==this._$committedValue[r],a===z?t=z:t!==z&&(t+=(a??"")+n[r+1]),this._$committedValue[r]=a}o&&!s&&this._commitValue(t)}_commitValue(t){t===z?a(this.element).removeAttribute(this.name):(void 0===this._sanitizer&&(this._sanitizer=D(this.element,this.name,"attribute")),t=this._sanitizer(t??""),n&&n({kind:"commit attribute",element:this.element,name:this.name,value:t,options:this.options}),a(this.element).setAttribute(this.name,t??""))}}class F extends U{constructor(){super(...arguments),this.type=3}_commitValue(t){void 0===this._sanitizer&&(this._sanitizer=D(this.element,this.name,"property")),t=this._sanitizer(t),n&&n({kind:"commit property",element:this.element,name:this.name,value:t,options:this.options}),this.element[this.name]=t===z?void 0:t}}class Y extends U{constructor(){super(...arguments),this.type=4}_commitValue(t){n&&n({kind:"commit boolean attribute",element:this.element,name:this.name,value:!(!t||t===z),options:this.options}),a(this.element).toggleAttribute(this.name,!!t&&t!==z)}}class Z extends U{constructor(t,e,i,s,n){if(super(t,e,i,s,n),this.type=5,void 0!==this.strings)throw new Error(`A \`<${t.localName}>\` has a \`@${e}=...\` listener with invalid content. Event listeners in templates must have exactly one expression and no surrounding text.`)}_$setValue(t,e=this){if((t=B(this,t,e,0)??z)===A)return;const i=this._$committedValue,s=t===z&&i!==z||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==z&&(i===z||s);n&&n({kind:"commit event listener",element:this.element,name:this.name,value:t,options:this.options,removeListener:s,addListener:o,oldListener:i}),s&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$committedValue=t}handleEvent(t){"function"==typeof this._$committedValue?this._$committedValue.call(this.options?.host??this.element,t):this._$committedValue.handleEvent(t)}}class q{constructor(t,e,i){this.element=t,this.type=6,this._$disconnectableChildren=void 0,this._$parent=e,this.options=i}get _$isConnected(){return this._$parent._$isConnected}_$setValue(t){n&&n({kind:"commit to element binding",element:this.element,value:t,options:this.options}),B(this,t)}}const X={_boundAttributeSuffix:p,_marker:u,_markerMatch:_,_HTML_RESULT:1,_getTemplateHtml:H,_TemplateInstance:W,_isIterable:b,_resolveDirective:B,_ChildPart:j,_AttributePart:U,_BooleanAttributePart:Y,_EventPart:Z,_PropertyPart:F,_ElementPart:q},G=s.litHtmlPolyfillSupportDevMode;G?.(R,j),(s.litHtmlVersions??=[]).push("3.1.1"),s.litHtmlVersions.length>1&&o("multiple-versions","Multiple versions of Lit loaded. Loading multiple versions is not recommended.");const J=(t,e,i)=>{if(null==e)throw new TypeError(`The container to render into may not be ${e}`);const s=r++,o=i?.renderBefore??e;let a=o._$litPart$;if(n&&n({kind:"begin render",id:s,value:t,container:e,options:i,part:a}),void 0===a){const t=i?.renderBefore??null;o._$litPart$=a=new j(e.insertBefore(v(),t),t,void 0,i??{})}return a._$setValue(t),n&&n({kind:"end render",id:s,value:t,container:e,options:i,part:a}),a};J.setSanitizer=t=>{if(D!==c)throw new Error("Attempted to overwrite existing lit-html security policy. setSanitizeDOMValueFactory should be called at most once.");D=t},J.createSanitizer=m,J._testOnlyClearSanitizerFactoryDoNotCallOrElse=()=>{D=c}}}]);
//# sourceMappingURL=vendors.lit-html.js.map