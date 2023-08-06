/*! For license information please see 7597.js.LICENSE.txt */
(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([[7597,8644,712,6031,129],{6173:()=>{(()=>{var t,e,s;const i=Symbol(),n=Symbol(),o=Symbol(),r=Symbol(),h=Symbol(),l=Symbol(),c=Symbol(),d=Symbol(),u=Symbol(),a=Symbol(),f=Symbol(),p=Symbol(),_=Symbol();class v{constructor(){this[t]=[],this[e]=[],this[s]=new Set}destructor(){this[u](this[o]);const t=this;t[i]=null,t[o]=null,t[n]=null}get top(){const t=this[i];return t[t.length-1]||null}push(t){t&&t!==this.top&&(this.remove(t),this[l](t),this[i].push(t))}remove(t){const e=this[i].indexOf(t);return-1!==e&&(this[i].splice(e,1),e===this[i].length&&this[l](this.top),!0)}pop(){const t=this.top;return t&&this.remove(t),t}has(t){return-1!==this[i].indexOf(t)}[(t=i,e=o,s=n,l)](t){const e=this[n],s=this[o];if(!t)return this[u](s),e.clear(),void(this[o]=[]);const i=this[a](t);if(i[i.length-1].parentNode!==document.body)throw Error("Non-connected element cannot be a blocking element");this[o]=i;const r=this[f](t);if(!s.length)return void this[d](i,r,e);let h=s.length-1,l=i.length-1;for(;h>0&&l>0&&s[h]===i[l];)h--,l--;s[h]!==i[l]&&this[c](s[h],i[l]),h>0&&this[u](s.slice(0,h)),l>0&&this[d](i.slice(0,l),r,null)}[c](t,e){const s=t[r];this[p](t)&&!t.inert&&(t.inert=!0,s.add(t)),s.has(e)&&(e.inert=!1,s.delete(e)),e[h]=t[h],e[r]=s,t[h]=void 0,t[r]=void 0}[u](t){for(const e of t){e[h].disconnect(),e[h]=void 0;const t=e[r];for(const e of t)e.inert=!1;e[r]=void 0}}[d](t,e,s){for(const i of t){const t=i.parentNode,n=t.children,o=new Set;for(let t=0;t<n.length;t++){const r=n[t];r===i||!this[p](r)||e&&e.has(r)||(s&&r.inert?s.add(r):(r.inert=!0,o.add(r)))}i[r]=o;const l=new MutationObserver(this[_].bind(this));i[h]=l;let c=t;const d=c;d.__shady&&d.host&&(c=d.host),l.observe(c,{childList:!0})}}[_](t){const e=this[o],s=this[n];for(const i of t){const t=i.target.host||i.target,n=t===document.body?e.length:e.indexOf(t),o=e[n-1],h=o[r];for(let t=0;t<i.removedNodes.length;t++){const e=i.removedNodes[t];if(e===o)return console.info("Detected removal of the top Blocking Element."),void this.pop();h.has(e)&&(e.inert=!1,h.delete(e))}for(let t=0;t<i.addedNodes.length;t++){const e=i.addedNodes[t];this[p](e)&&(s&&e.inert?s.add(e):(e.inert=!0,h.add(e)))}}}[p](t){return!1===/^(style|template|script)$/.test(t.localName)}[a](t){const e=[];let s=t;for(;s&&s!==document.body;)if(s.nodeType===Node.ELEMENT_NODE&&e.push(s),s.assignedSlot){for(;s=s.assignedSlot;)e.push(s);s=e.pop()}else s=s.parentNode||s.host;return e}[f](t){const e=t.shadowRoot;if(!e)return null;const s=new Set;let i,n,o;const r=e.querySelectorAll("slot");if(r.length&&r[0].assignedNodes)for(i=0;i<r.length;i++)for(o=r[i].assignedNodes({flatten:!0}),n=0;n<o.length;n++)o[n].nodeType===Node.ELEMENT_NODE&&s.add(o[n]);return s}}document.$blockingElements=new v})()},4232:(t,e,s)=>{"use strict";s.d(e,{OR:()=>r,hl:()=>l,pt:()=>o});var i=s(3692);const{I:n}=i.Al,o=t=>null===t||"object"!=typeof t&&"function"!=typeof t,r=t=>void 0===t.strings,h={},l=(t,e=h)=>t._$AH=e},8082:(t,e,s)=>{"use strict";s.d(e,{XM:()=>i.XM,Xe:()=>i.Xe,pX:()=>i.pX});var i=s(875)},3669:(t,e,s)=>{"use strict";s.d(e,{a:()=>r});var i=s(3692),n=s(875),o=s(4232);const r=(0,n.XM)(class extends n.Xe{constructor(t){if(super(t),t.type!==n.pX.PROPERTY&&t.type!==n.pX.ATTRIBUTE&&t.type!==n.pX.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!(0,o.OR)(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===i.Jb||e===i.Ld)return e;const s=t.element,r=t.name;if(t.type===n.pX.PROPERTY){if(e===s[r])return i.Jb}else if(t.type===n.pX.BOOLEAN_ATTRIBUTE){if(!!e===s.hasAttribute(r))return i.Jb}else if(t.type===n.pX.ATTRIBUTE&&s.getAttribute(r)===e+"")return i.Jb;return(0,o.hl)(t),e}})},5458:(t,e,s)=>{"use strict";s.d(e,{C:()=>v});var i=s(3692),n=s(4232),o=s(875);const r=(t,e)=>{var s,i;const n=t._$AN;if(void 0===n)return!1;for(const t of n)null===(i=(s=t)._$AO)||void 0===i||i.call(s,e,!1),r(t,e);return!0},h=t=>{let e,s;do{if(void 0===(e=t._$AM))break;s=e._$AN,s.delete(t),t=e}while(0===(null==s?void 0:s.size))},l=t=>{for(let e;e=t._$AM;t=e){let s=e._$AN;if(void 0===s)e._$AN=s=new Set;else if(s.has(t))break;s.add(t),u(e)}};function c(t){void 0!==this._$AN?(h(this),this._$AM=t,l(this)):this._$AM=t}function d(t,e=!1,s=0){const i=this._$AH,n=this._$AN;if(void 0!==n&&0!==n.size)if(e)if(Array.isArray(i))for(let t=s;t<i.length;t++)r(i[t],!1),h(i[t]);else null!=i&&(r(i,!1),h(i));else r(this,t)}const u=t=>{var e,s,i,n;t.type==o.pX.CHILD&&(null!==(e=(i=t)._$AP)&&void 0!==e||(i._$AP=d),null!==(s=(n=t)._$AQ)&&void 0!==s||(n._$AQ=c))};class a extends o.Xe{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,s){super._$AT(t,e,s),l(this),this.isConnected=t._$AU}_$AO(t,e=!0){var s,i;t!==this.isConnected&&(this.isConnected=t,t?null===(s=this.reconnected)||void 0===s||s.call(this):null===(i=this.disconnected)||void 0===i||i.call(this)),e&&(r(this,t),h(this))}setValue(t){if((0,n.OR)(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}class f{constructor(t){this.Y=t}disconnect(){this.Y=void 0}reconnect(t){this.Y=t}deref(){return this.Y}}class p{constructor(){this.Z=void 0,this.q=void 0}get(){return this.Z}pause(){var t;null!==(t=this.Z)&&void 0!==t||(this.Z=new Promise((t=>this.q=t)))}resume(){var t;null===(t=this.q)||void 0===t||t.call(this),this.Z=this.q=void 0}}const _=t=>!(0,n.pt)(t)&&"function"==typeof t.then,v=(0,o.XM)(class extends a{constructor(){super(...arguments),this._$Cwt=1073741823,this._$Cyt=[],this._$CK=new f(this),this._$CX=new p}render(...t){var e;return null!==(e=t.find((t=>!_(t))))&&void 0!==e?e:i.Jb}update(t,e){const s=this._$Cyt;let n=s.length;this._$Cyt=e;const o=this._$CK,r=this._$CX;this.isConnected||this.disconnected();for(let t=0;t<e.length&&!(t>this._$Cwt);t++){const i=e[t];if(!_(i))return this._$Cwt=t,i;t<n&&i===s[t]||(this._$Cwt=1073741823,n=0,Promise.resolve(i).then((async t=>{for(;r.get();)await r.get();const e=o.deref();if(void 0!==e){const s=e._$Cyt.indexOf(i);s>-1&&s<e._$Cwt&&(e._$Cwt=s,e.setValue(t))}})))}return i.Jb}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}})}}]);
//# sourceMappingURL=7597.js.map