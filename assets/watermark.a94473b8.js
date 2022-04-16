import{L as x,M as V,C as h,aB as W,Z as H,aX as R,y as I,I as b,o as P,D as G,S as y,H as g,T as A,q as p,J as T}from"./index.03c8aace.js";import{u as j}from"./index.0514104b.js";var k=function(){if(typeof Map!="undefined")return Map;function e(t,n){var r=-1;return t.some(function(i,u){return i[0]===n?(r=u,!0):!1}),r}return function(){function t(){this.__entries__=[]}return Object.defineProperty(t.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),t.prototype.get=function(n){var r=e(this.__entries__,n),i=this.__entries__[r];return i&&i[1]},t.prototype.set=function(n,r){var i=e(this.__entries__,n);~i?this.__entries__[i][1]=r:this.__entries__.push([n,r])},t.prototype.delete=function(n){var r=this.__entries__,i=e(r,n);~i&&r.splice(i,1)},t.prototype.has=function(n){return!!~e(this.__entries__,n)},t.prototype.clear=function(){this.__entries__.splice(0)},t.prototype.forEach=function(n,r){r===void 0&&(r=null);for(var i=0,u=this.__entries__;i<u.length;i++){var a=u[i];n.call(r,a[1],a[0])}},t}()}(),z=typeof window!="undefined"&&typeof document!="undefined"&&window.document===document,w=function(){return typeof global!="undefined"&&global.Math===Math?global:typeof self!="undefined"&&self.Math===Math?self:typeof window!="undefined"&&window.Math===Math?window:Function("return this")()}(),q=function(){return typeof requestAnimationFrame=="function"?requestAnimationFrame.bind(w):function(e){return setTimeout(function(){return e(Date.now())},1e3/60)}}(),N=2;function U(e,t){var n=!1,r=!1,i=0;function u(){n&&(n=!1,e()),r&&f()}function a(){q(u)}function f(){var l=Date.now();if(n){if(l-i<N)return;r=!0}else n=!0,r=!1,setTimeout(a,t);i=l}return f}var $=20,J=["top","right","bottom","left","width","height","size","weight"],K=typeof MutationObserver!="undefined",X=function(){function e(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=U(this.refresh.bind(this),$)}return e.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},e.prototype.removeObserver=function(t){var n=this.observers_,r=n.indexOf(t);~r&&n.splice(r,1),!n.length&&this.connected_&&this.disconnect_()},e.prototype.refresh=function(){var t=this.updateObservers_();t&&this.refresh()},e.prototype.updateObservers_=function(){var t=this.observers_.filter(function(n){return n.gatherActive(),n.hasActive()});return t.forEach(function(n){return n.broadcastActive()}),t.length>0},e.prototype.connect_=function(){!z||this.connected_||(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),K?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},e.prototype.disconnect_=function(){!z||!this.connected_||(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},e.prototype.onTransitionEnd_=function(t){var n=t.propertyName,r=n===void 0?"":n,i=J.some(function(u){return!!~r.indexOf(u)});i&&this.refresh()},e.getInstance=function(){return this.instance_||(this.instance_=new e),this.instance_},e.instance_=null,e}(),F=function(e,t){for(var n=0,r=Object.keys(t);n<r.length;n++){var i=r[n];Object.defineProperty(e,i,{value:t[i],enumerable:!1,writable:!1,configurable:!0})}return e},_=function(e){var t=e&&e.ownerDocument&&e.ownerDocument.defaultView;return t||w},L=O(0,0,0,0);function E(e){return parseFloat(e)||0}function S(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return t.reduce(function(r,i){var u=e["border-"+i+"-width"];return r+E(u)},0)}function Y(e){for(var t=["top","right","bottom","left"],n={},r=0,i=t;r<i.length;r++){var u=i[r],a=e["padding-"+u];n[u]=E(a)}return n}function Z(e){var t=e.getBBox();return O(0,0,t.width,t.height)}function Q(e){var t=e.clientWidth,n=e.clientHeight;if(!t&&!n)return L;var r=_(e).getComputedStyle(e),i=Y(r),u=i.left+i.right,a=i.top+i.bottom,f=E(r.width),l=E(r.height);if(r.boxSizing==="border-box"&&(Math.round(f+u)!==t&&(f-=S(r,"left","right")+u),Math.round(l+a)!==n&&(l-=S(r,"top","bottom")+a)),!te(e)){var s=Math.round(f+u)-t,o=Math.round(l+a)-n;Math.abs(s)!==1&&(f-=s),Math.abs(o)!==1&&(l-=o)}return O(i.left,i.top,f,l)}var ee=function(){return typeof SVGGraphicsElement!="undefined"?function(e){return e instanceof _(e).SVGGraphicsElement}:function(e){return e instanceof _(e).SVGElement&&typeof e.getBBox=="function"}}();function te(e){return e===_(e).document.documentElement}function ne(e){return z?ee(e)?Z(e):Q(e):L}function re(e){var t=e.x,n=e.y,r=e.width,i=e.height,u=typeof DOMRectReadOnly!="undefined"?DOMRectReadOnly:Object,a=Object.create(u.prototype);return F(a,{x:t,y:n,width:r,height:i,top:n,right:t+r,bottom:i+n,left:t}),a}function O(e,t,n,r){return{x:e,y:t,width:n,height:r}}var ie=function(){function e(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=O(0,0,0,0),this.target=t}return e.prototype.isActive=function(){var t=ne(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},e.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},e}(),oe=function(){function e(t,n){var r=re(n);F(this,{target:t,contentRect:r})}return e}(),se=function(){function e(t,n,r){if(this.activeObservations_=[],this.observations_=new k,typeof t!="function")throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=n,this.callbackCtx_=r}return e.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element=="undefined"||!(Element instanceof Object))){if(!(t instanceof _(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(t)||(n.set(t,new ie(t)),this.controller_.addObserver(this),this.controller_.refresh())}},e.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element=="undefined"||!(Element instanceof Object))){if(!(t instanceof _(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;!n.has(t)||(n.delete(t),n.size||this.controller_.removeObserver(this))}},e.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},e.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach(function(n){n.isActive()&&t.activeObservations_.push(n)})},e.prototype.broadcastActive=function(){if(!!this.hasActive()){var t=this.callbackCtx_,n=this.activeObservations_.map(function(r){return new oe(r.target,r.broadcastRect())});this.callback_.call(t,n,t),this.clearActive()}},e.prototype.clearActive=function(){this.activeObservations_.splice(0)},e.prototype.hasActive=function(){return this.activeObservations_.length>0},e}(),B=typeof WeakMap!="undefined"?new WeakMap:new k,D=function(){function e(t){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=X.getInstance(),r=new se(t,n,this);B.set(this,r)}return e}();["observe","unobserve","disconnect"].forEach(function(e){D.prototype[e]=function(){var t;return(t=B.get(this))[e].apply(t,arguments)}});var ae=function(){return typeof w.ResizeObserver!="undefined"?w.ResizeObserver:D}();const ue=typeof window=="undefined",ce=e=>{for(const t of e){const n=t.target.__resizeListeners__||[];n.length&&n.forEach(r=>{r()})}},fe=(e,t)=>{ue||(e.__resizeListeners__||(e.__resizeListeners__=[],e.__ro__=new ae(ce),e.__ro__.observe(e)),e.__resizeListeners__.push(t))},le=(e,t)=>{!e||!e.__resizeListeners__||(e.__resizeListeners__.splice(e.__resizeListeners__.indexOf(t),1),e.__resizeListeners__.length||e.__ro__.disconnect())},he=Symbol("watermark-dom");function de(e=x(document.body)){const t=j(function(){const s=h(e);if(!s)return;const{clientHeight:o,clientWidth:c}=s;a({height:o,width:c})}),n=he.toString(),r=V(),i=()=>{const s=h(r);r.value=void 0;const o=h(e);!o||(s&&o.removeChild(s),le(o,t))};function u(s,o){var C,M;const c=document.createElement("canvas"),v=300,m=240;Object.assign(c,{width:v,height:m});const d=c.getContext("2d");return d&&(d.rotate(-20*Math.PI/120),d.font=(C=o==null?void 0:o.font)!=null?C:"15px Reggae One",d.fillStyle=(M=o==null?void 0:o.fillStyle)!=null?M:"rgba(0, 0, 0, 0.15)",d.textAlign="left",d.textBaseline="middle",d.fillText(s,v/20,m)),c.toDataURL("image/png")}function a(s={}){const o=h(r);!o||(R(s.width)&&(o.style.width=`${s.width}px`),R(s.height)&&(o.style.height=`${s.height}px`),R(s.str)&&(o.style.background=`url(${u(s.str,s.attr)}) left top repeat`))}const f=(s,o)=>{if(h(r))return a({str:s,attr:o}),n;const c=document.createElement("div");r.value=c,c.id=n,c.style.pointerEvents="none",c.style.top="0px",c.style.left="0px",c.style.position="absolute",c.style.zIndex="100000";const v=h(e);if(!v)return n;const{clientHeight:m,clientWidth:d}=v;return a({str:s,width:d,height:m,attr:o}),v.appendChild(c),n};function l(s,o){f(s,o),fe(document.documentElement,t),H()&&W(()=>{i()})}return{setWatermark:l,clear:i}}const ve=p("div",{class:"card-header"},[p("span",{class:"font-medium"},"\u9875\u9762\u6C34\u5370\u529F\u80FD")],-1),_e=p("span",null,"\u8BF7\u8F93\u5165\u8981\u521B\u5EFA\u6C34\u5370\u7684\u503C\uFF1A",-1),pe=p("span",null,"\u8BF7\u9009\u62E9\u8981\u521B\u5EFA\u6C34\u5370\u7684\u989C\u8272\uFF1A",-1),me=p("br",null,null,-1),be=T("\u521B\u5EFA"),ye=T("\u6E05\u9664"),Ee=I({setup(e){let t=x("#409EFF"),n=x("vue-pure-admin");const{setWatermark:r,clear:i}=de();return(u,a)=>{const f=b("el-input"),l=b("el-color-picker"),s=b("el-button"),o=b("el-card");return P(),G(o,null,{header:y(()=>[ve]),default:y(()=>[_e,g(f,{class:"mb-4 mr-4",style:{width:"200px"},modelValue:h(n),"onUpdate:modelValue":a[0]||(a[0]=c=>A(n)?n.value=c:n=c),clearable:""},null,8,["modelValue"]),pe,g(l,{modelValue:h(t),"onUpdate:modelValue":a[1]||(a[1]=c=>A(t)?t.value=c:t=c),"show-alpha":""},null,8,["modelValue"]),me,g(s,{onClick:a[2]||(a[2]=c=>h(r)(h(n),{fillStyle:h(t)}))},{default:y(()=>[be]),_:1}),g(s,{onClick:h(i)},{default:y(()=>[ye]),_:1},8,["onClick"])]),_:1})}}});export{Ee as default};
