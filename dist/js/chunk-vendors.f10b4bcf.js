(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-vendors"],{"00b4":function(e,t,n){"use strict";n("ac1f");var r=n("23e7"),i=n("da84"),s=n("c65b"),o=n("e330"),a=n("1626"),c=n("861d"),u=function(){var e=!1,t=/[ac]/;return t.exec=function(){return e=!0,/./.exec.apply(this,arguments)},!0===t.test("abc")&&e}(),l=i.Error,h=o(/./.test);r({target:"RegExp",proto:!0,forced:!u},{test:function(e){var t=this.exec;if(!a(t))return h(this,e);var n=s(t,this,e);if(null!==n&&!c(n))throw new l("RegExp exec method returned something other than an Object or null");return!!n}})},"00ee":function(e,t,n){var r=n("b622"),i=r("toStringTag"),s={};s[i]="z",e.exports="[object z]"===String(s)},"0366":function(e,t,n){var r=n("e330"),i=n("59ed"),s=r(r.bind);e.exports=function(e,t){return i(e),void 0===t?e:s?s(e,t):function(){return e.apply(t,arguments)}}},"057f":function(e,t,n){var r=n("c6b6"),i=n("fc6a"),s=n("241c").f,o=n("4dae"),a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(e){try{return s(e)}catch(t){return o(a)}};e.exports.f=function(e){return a&&"Window"==r(e)?c(e):s(i(e))}},"06cf":function(e,t,n){var r=n("83ab"),i=n("c65b"),s=n("d1e7"),o=n("5c6c"),a=n("fc6a"),c=n("a04b"),u=n("1a2d"),l=n("0cfb"),h=Object.getOwnPropertyDescriptor;t.f=r?h:function(e,t){if(e=a(e),t=c(t),l)try{return h(e,t)}catch(n){}if(u(e,t))return o(!i(s.f,e,t),e[t])}},"07fa":function(e,t,n){var r=n("50c4");e.exports=function(e){return r(e.length)}},"0829":function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return hh})),n.d(t,"b",(function(){return ul})),n.d(t,"c",(function(){return Qu})),n.d(t,"d",(function(){return Fu})),n.d(t,"e",(function(){return gh})),n.d(t,"f",(function(){return ll})),n.d(t,"g",(function(){return E})),n.d(t,"h",(function(){return dl})),n.d(t,"i",(function(){return mh})),n.d(t,"j",(function(){return vh})),n.d(t,"k",(function(){return F})),n.d(t,"l",(function(){return Lh})),n.d(t,"m",(function(){return gt})),n.d(t,"n",(function(){return G})),n.d(t,"o",(function(){return z})),n.d(t,"p",(function(){return Ru})),n.d(t,"q",(function(){return w})),n.d(t,"r",(function(){return st})),n.d(t,"s",(function(){return m})),n.d(t,"t",(function(){return Cu})),n.d(t,"u",(function(){return xh})),n.d(t,"v",(function(){return zh})),n.d(t,"w",(function(){return qh})),n.d(t,"x",(function(){return nl})),n.d(t,"y",(function(){return Bu})),n.d(t,"z",(function(){return qu})),n.d(t,"A",(function(){return Mu})),n.d(t,"B",(function(){return Ch})),n.d(t,"C",(function(){return Uh})),n.d(t,"D",(function(){return sl})),n.d(t,"E",(function(){return zu})),n.d(t,"F",(function(){return Zu})),n.d(t,"G",(function(){return el})),n.d(t,"H",(function(){return il})),n.d(t,"I",(function(){return sh})),n.d(t,"J",(function(){return ih})),n.d(t,"K",(function(){return Ju})),n.d(t,"L",(function(){return Rh})),n.d(t,"M",(function(){return wh})),n.d(t,"N",(function(){return Ih})),n.d(t,"O",(function(){return Eh})),n.d(t,"P",(function(){return Th})),n.d(t,"Q",(function(){return Sh})),n.d(t,"R",(function(){return Oh})),n.d(t,"S",(function(){return Gh})),n.d(t,"T",(function(){return Xl})),n.d(t,"U",(function(){return Zl})),n.d(t,"V",(function(){return ol})),n.d(t,"W",(function(){return al})),n.d(t,"X",(function(){return Nh})),n.d(t,"Y",(function(){return Dh})),n.d(t,"Z",(function(){return Yl})),n.d(t,"ab",(function(){return $l})),n.d(t,"bb",(function(){return $u})),n.d(t,"cb",(function(){return Gu})),n.d(t,"db",(function(){return Vh})),n.d(t,"eb",(function(){return Bh})),n.d(t,"fb",(function(){return kh})),n.d(t,"gb",(function(){return f})),n.d(t,"hb",(function(){return bh})),n.d(t,"ib",(function(){return nh})),n.d(t,"jb",(function(){return th})),n.d(t,"kb",(function(){return Ah})),n.d(t,"lb",(function(){return rl})),n.d(t,"mb",(function(){return Hl}));var r=n("589b"),i=n("22e5"),s=n("e691"),o=n("1fd5"),a=n("9c44");const c="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}u.UNAUTHENTICATED=new u(null),u.GOOGLE_CREDENTIALS=new u("google-credentials-uid"),u.FIRST_PARTY=new u("first-party-uid"),u.MOCK_USER=new u("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let l="9.23.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h=new s["b"]("@firebase/firestore");function d(){return h.logLevel}function f(e){h.setLogLevel(e)}function p(e,...t){if(h.logLevel<=s["a"].DEBUG){const n=t.map(v);h.debug(`Firestore (${l}): ${e}`,...n)}}function g(e,...t){if(h.logLevel<=s["a"].ERROR){const n=t.map(v);h.error(`Firestore (${l}): ${e}`,...n)}}function m(e,...t){if(h.logLevel<=s["a"].WARN){const n=t.map(v);h.warn(`Firestore (${l}): ${e}`,...n)}}function v(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y(e="Unexpected state"){const t=`FIRESTORE (${l}) INTERNAL ASSERTION FAILED: `+e;throw g(t),new Error(t)}function b(e,t){e||y()}function w(e,t){e||y()}function _(e,t){return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class E extends o["c"]{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization","Bearer "+e)}}class O{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(u.UNAUTHENTICATED))}shutdown(){}}class k{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class A{constructor(e){this.t=e,this.currentUser=u.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let i=new T;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new T,e.enqueueRetryable(()=>r(this.currentUser))};const s=()=>{const t=i;e.enqueueRetryable(async()=>{await t.promise,await r(this.currentUser)})},o=e=>{p("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit(e=>o(e)),setTimeout(()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(p("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new T)}},0),s()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>this.i!==e?(p("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(b("string"==typeof t.accessToken),new S(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return b(null===e||"string"==typeof e),new u(e)}}class C{constructor(e,t,n){this.h=e,this.l=t,this.m=n,this.type="FirstParty",this.user=u.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class x{constructor(e,t,n){this.h=e,this.l=t,this.m=n}getToken(){return Promise.resolve(new C(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable(()=>t(u.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class N{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class D{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,t){const n=e=>{null!=e.error&&p("FirebaseAppCheckTokenProvider","Error getting App Check token; using placeholder token instead. Error: "+e.error.message);const n=e.token!==this.T;return this.T=e.token,p("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable(()=>n(t))};const r=e=>{p("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.I.onInit(e=>r(e)),setTimeout(()=>{if(!this.appCheck){const e=this.I.getImmediate({optional:!0});e?r(e):p("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>e?(b("string"==typeof e.token),this.T=e.token,new N(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function R(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const r=R(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length))}return n}}function j(e,t){return e<t?-1:e>t?1:0}function L(e,t,n){return e.length===t.length&&e.every((e,r)=>n(e,t[r]))}function M(e){return e+"\0"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new E(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new E(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new E(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new E(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return F.fromMillis(Date.now())}static fromDate(e){return F.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new F(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?j(this.nanoseconds,e.nanoseconds):j(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e){this.timestamp=e}static fromTimestamp(e){return new V(e)}static min(){return new V(new F(0,0))}static max(){return new V(new F(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e,t,n){void 0===t?t=0:t>e.length&&y(),void 0===n?n=e.length-t:n>e.length-t&&y(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===U.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof U?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.get(r),i=t.get(r);if(n<i)return-1;if(n>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class B extends U{construct(e,t,n){return new B(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new E(I.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(e=>e.length>0))}return new B(t)}static emptyPath(){return new B([])}}const q=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class z extends U{construct(e,t,n){return new z(e,t,n)}static isValidIdentifier(e){return q.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),z.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new z(["__name__"])}static fromServerFormat(e){const t=[];let n="",r=0;const i=()=>{if(0===n.length)throw new E(I.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let s=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new E(I.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new E(I.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(s=!s,r++):"."!==t||s?(n+=t,r++):(i(),r++)}if(i(),s)throw new E(I.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new z(t)}static emptyPath(){return new z([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e){this.path=e}static fromPath(e){return new G(B.fromString(e))}static fromName(e){return new G(B.fromString(e).popFirst(5))}static empty(){return new G(B.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===B.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return B.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new G(new B(e.slice()))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e,t,n,r){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=r}}function K(e){return e.fields.find(e=>2===e.kind)}function H(e){return e.fields.filter(e=>2!==e.kind)}$.UNKNOWN_ID=-1;class W{constructor(e,t){this.fieldPath=e,this.kind=t}}class Q{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new Q(0,X.min())}}function Y(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=V.fromTimestamp(1e9===r?new F(n+1,0):new F(n,r));return new X(i,G.empty(),t)}function J(e){return new X(e.readTime,e.key,-1)}class X{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new X(V.min(),G.empty(),-1)}static max(){return new X(V.max(),G.empty(),-1)}}function Z(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=G.comparator(e.documentKey,t.documentKey),0!==n?n:j(e.largestBatchId,t.largestBatchId))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ee="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class te{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ne(e){if(e.code!==I.FAILED_PRECONDITION||e.message!==ee)throw e;p("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&y(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new re((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof re?t:re.resolve(t)}catch(e){return re.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):re.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):re.reject(t)}static resolve(e){return new re((t,n)=>{t(e)})}static reject(e){return new re((t,n)=>{n(e)})}static waitFor(e){return new re((t,n)=>{let r=0,i=0,s=!1;e.forEach(e=>{++r,e.next(()=>{++i,s&&i===r&&t()},e=>n(e))}),s=!0,i===r&&t()})}static or(e){let t=re.resolve(!1);for(const n of e)t=t.next(e=>e?re.resolve(e):n());return t}static forEach(e,t){const n=[];return e.forEach((e,r)=>{n.push(t.call(this,e,r))}),this.waitFor(n)}static mapArray(e,t){return new re((n,r)=>{const i=e.length,s=new Array(i);let o=0;for(let a=0;a<i;a++){const c=a;t(e[c]).next(e=>{s[c]=e,++o,o===i&&n(s)},e=>r(e))}})}static doWhile(e,t){return new re((n,r)=>{const i=()=>{!0===e()?t().next(()=>{i()},r):n()};i()})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.v=new T,this.transaction.oncomplete=()=>{this.v.resolve()},this.transaction.onabort=()=>{t.error?this.v.reject(new ae(e,t.error)):this.v.resolve()},this.transaction.onerror=t=>{const n=de(t.target.error);this.v.reject(new ae(e,n))}}static open(e,t,n,r){try{return new ie(t,e.transaction(r,n))}catch(e){throw new ae(t,e)}}get R(){return this.v.promise}abort(e){e&&this.v.reject(e),this.aborted||(p("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}P(){const e=this.transaction;this.aborted||"function"!=typeof e.commit||e.commit()}store(e){const t=this.transaction.objectStore(e);return new ue(t)}}class se{constructor(e,t,n){this.name=e,this.version=t,this.V=n,12.2===se.S(Object(o["q"])())&&g("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return p("SimpleDb","Removing database:",e),le(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!Object(o["v"])())return!1;if(se.C())return!0;const e=Object(o["q"])(),t=se.S(e),n=0<t&&t<10,r=se.N(e),i=0<r&&r<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||n||i)}static C(){var t;return"undefined"!=typeof e&&"YES"===(null===(t=Object({NODE_ENV:"production",BASE_URL:"/"}))||void 0===t?void 0:t.k)}static M(e,t){return e.store(t)}static S(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(n)}static N(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}async $(e){return this.db||(p("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,n)=>{const r=indexedDB.open(this.name,this.version);r.onsuccess=e=>{const n=e.target.result;t(n)},r.onblocked=()=>{n(new ae(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},r.onerror=t=>{const r=t.target.error;"VersionError"===r.name?n(new E(I.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):"InvalidStateError"===r.name?n(new E(I.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+r)):n(new ae(e,r))},r.onupgradeneeded=e=>{p("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',e.oldVersion);const t=e.target.result;this.V.O(t,r.transaction,e.oldVersion,this.version).next(()=>{p("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.F&&(this.db.onversionchange=e=>this.F(e)),this.db}B(e){this.F=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,n,r){const i="readonly"===t;let s=0;for(;;){++s;try{this.db=await this.$(e);const t=ie.open(this.db,e,i?"readonly":"readwrite",n),s=r(t).next(e=>(t.P(),e)).catch(e=>(t.abort(e),re.reject(e))).toPromise();return s.catch(()=>{}),await t.R,s}catch(e){const t=e,n="FirebaseError"!==t.name&&s<3;if(p("SimpleDb","Transaction failed with error:",t.message,"Retrying:",n),this.close(),!n)return Promise.reject(t)}}}close(){this.db&&this.db.close(),this.db=void 0}}class oe{constructor(e){this.L=e,this.q=!1,this.U=null}get isDone(){return this.q}get K(){return this.U}set cursor(e){this.L=e}done(){this.q=!0}G(e){this.U=e}delete(){return le(this.L.delete())}}class ae extends E{constructor(e,t){super(I.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function ce(e){return"IndexedDbTransactionError"===e.name}class ue{constructor(e){this.store=e}put(e,t){let n;return void 0!==t?(p("SimpleDb","PUT",this.store.name,e,t),n=this.store.put(t,e)):(p("SimpleDb","PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),le(n)}add(e){return p("SimpleDb","ADD",this.store.name,e,e),le(this.store.add(e))}get(e){return le(this.store.get(e)).next(t=>(void 0===t&&(t=null),p("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return p("SimpleDb","DELETE",this.store.name,e),le(this.store.delete(e))}count(){return p("SimpleDb","COUNT",this.store.name),le(this.store.count())}j(e,t){const n=this.options(e,t);if(n.index||"function"!=typeof this.store.getAll){const e=this.cursor(n),t=[];return this.W(e,(e,n)=>{t.push(n)}).next(()=>t)}{const e=this.store.getAll(n.range);return new re((t,n)=>{e.onerror=e=>{n(e.target.error)},e.onsuccess=e=>{t(e.target.result)}})}}H(e,t){const n=this.store.getAll(e,null===t?void 0:t);return new re((e,t)=>{n.onerror=e=>{t(e.target.error)},n.onsuccess=t=>{e(t.target.result)}})}J(e,t){p("SimpleDb","DELETE ALL",this.store.name);const n=this.options(e,t);n.Y=!1;const r=this.cursor(n);return this.W(r,(e,t,n)=>n.delete())}X(e,t){let n;t?n=e:(n={},t=e);const r=this.cursor(n);return this.W(r,t)}Z(e){const t=this.cursor({});return new re((n,r)=>{t.onerror=e=>{const t=de(e.target.error);r(t)},t.onsuccess=t=>{const r=t.target.result;r?e(r.primaryKey,r.value).next(e=>{e?r.continue():n()}):n()}})}W(e,t){const n=[];return new re((r,i)=>{e.onerror=e=>{i(e.target.error)},e.onsuccess=e=>{const i=e.target.result;if(!i)return void r();const s=new oe(i),o=t(i.primaryKey,i.value,s);if(o instanceof re){const e=o.catch(e=>(s.done(),re.reject(e)));n.push(e)}s.isDone?r():null===s.K?i.continue():i.continue(s.K)}}).next(()=>re.waitFor(n))}options(e,t){let n;return void 0!==e&&("string"==typeof e?n=e:t=e),{index:n,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const n=this.store.index(e.index);return e.Y?n.openKeyCursor(e.range,t):n.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function le(e){return new re((t,n)=>{e.onsuccess=e=>{const n=e.target.result;t(n)},e.onerror=e=>{const t=de(e.target.error);n(t)}})}let he=!1;function de(e){const t=se.S(Object(o["q"])());if(t>=12.2&&t<13){const t="An internal error was encountered in the Indexed Database server";if(e.message.indexOf(t)>=0){const e=new E("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return he||(he=!0,setTimeout(()=>{throw e},0)),e}}return e}class fe{constructor(e,t){this.asyncQueue=e,this.tt=t,this.task=null}start(){this.et(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return null!==this.task}et(e){p("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{p("IndexBackiller","Documents written: "+await this.tt.nt())}catch(e){ce(e)?p("IndexBackiller","Ignoring IndexedDB error during index backfill: ",e):await ne(e)}await this.et(6e4)})}}class pe{constructor(e,t){this.localStore=e,this.persistence=t}async nt(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.st(t,e))}st(e,t){const n=new Set;let r=t,i=!0;return re.doWhile(()=>!0===i&&r>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(t=>{if(null!==t&&!n.has(t))return p("IndexBackiller","Processing collection: "+t),this.it(e,t,r).next(e=>{r-=e,n.add(t)});i=!1})).next(()=>t-r)}it(e,t,n){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(r=>this.localStore.localDocuments.getNextDocuments(e,t,r,n).next(n=>{const i=n.changes;return this.localStore.indexManager.updateIndexEntries(e,i).next(()=>this.rt(r,n)).next(n=>(p("IndexBackiller","Updating offset: "+n),this.localStore.indexManager.updateCollectionGroup(e,t,n))).next(()=>i.size)}))}rt(e,t){let n=e;return t.changes.forEach((e,t)=>{const r=J(t);Z(r,n)>0&&(n=r)}),new X(n.readTime,n.documentKey,Math.max(t.batchId,e.largestBatchId))}}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ot(e),this.ut=e=>t.writeSequenceNumber(e))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}function me(e){return null==e}function ve(e){return 0===e&&1/e==-1/0}function ye(e){return"number"==typeof e&&Number.isInteger(e)&&!ve(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function be(e){let t="";for(let n=0;n<e.length;n++)t.length>0&&(t=_e(t)),t=we(e.get(n),t);return _e(t)}function we(e,t){let n=t;const r=e.length;for(let i=0;i<r;i++){const t=e.charAt(i);switch(t){case"\0":n+="";break;case"":n+="";break;default:n+=t}}return n}function _e(e){return e+""}function Ie(e){const t=e.length;if(b(t>=2),2===t)return b(""===e.charAt(0)&&""===e.charAt(1)),B.emptyPath();const n=t-2,r=[];let i="";for(let s=0;s<t;){const t=e.indexOf("",s);switch((t<0||t>n)&&y(),e.charAt(t+1)){case"":const n=e.substring(s,t);let o;0===i.length?o=n:(i+=n,o=i,i=""),r.push(o);break;case"":i+=e.substring(s,t),i+="\0";break;case"":i+=e.substring(s,t+1);break;default:y()}s=t+2}return new B(r)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ge.ct=-1;const Ee=["userId","batchId"];
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Te(e,t){return[e,be(t)]}function Se(e,t,n){return[e,be(t),n]}const Oe={},ke=["prefixPath","collectionGroup","readTime","documentId"],Ae=["prefixPath","collectionGroup","documentId"],Ce=["collectionGroup","readTime","prefixPath","documentId"],xe=["canonicalId","targetId"],Ne=["targetId","path"],De=["path","targetId"],Re=["collectionId","parent"],Pe=["indexId","uid"],je=["uid","sequenceNumber"],Le=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],Me=["indexId","uid","orderedDocumentKey"],Fe=["userId","collectionPath","documentId"],Ve=["userId","collectionPath","largestBatchId"],Ue=["userId","collectionGroup","largestBatchId"],Be=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],qe=[...Be,"documentOverlays"],ze=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Ge=ze,$e=[...Ge,"indexConfiguration","indexState","indexEntries"];
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke extends te{constructor(e,t){super(),this.ht=e,this.currentSequenceNumber=t}}function He(e,t){const n=_(e);return se.M(n.ht,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function We(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Qe(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Ye(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e,t){this.comparator=e,this.root=t||Ze.EMPTY}insert(e,t){return new Je(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ze.BLACK,null,null))}remove(e){return new Je(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ze.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){const e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Xe(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Xe(this.root,e,this.comparator,!1)}getReverseIterator(){return new Xe(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Xe(this.root,e,this.comparator,!0)}}class Xe{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ze{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:Ze.RED,this.left=null!=r?r:Ze.EMPTY,this.right=null!=i?i:Ze.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new Ze(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Ze.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return Ze.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ze.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ze.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw y();if(this.right.isRed())throw y();const e=this.left.check();if(e!==this.right.check())throw y();return e+(this.isRed()?0:1)}}Ze.EMPTY=null,Ze.RED=!0,Ze.BLACK=!1,Ze.EMPTY=new class{constructor(){this.size=0}get key(){throw y()}get value(){throw y()}get color(){throw y()}get left(){throw y()}get right(){throw y()}copy(e,t,n,r,i){return this}insert(e,t,n){return new Ze(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class et{constructor(e){this.comparator=e,this.data=new Je(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new tt(this.data.getIterator())}getIteratorFrom(e){return new tt(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof et))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new et(this.comparator);return t.data=e,t}}class tt{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function nt(e){return e.hasNext()?e.getNext():void 0}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e){this.fields=e,e.sort(z.comparator)}static empty(){return new rt([])}unionWith(e){let t=new et(z.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new rt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return L(this.fields,e.fields,(e,t)=>e.isEqual(t))}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function st(){return"undefined"!=typeof atob}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new it("Invalid base64 string: "+e):e}}(e);return new ot(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new ot(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return j(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ot.EMPTY_BYTE_STRING=new ot("");const at=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ct(e){if(b(!!e),"string"==typeof e){let t=0;const n=at.exec(e);if(b(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:ut(e.seconds),nanos:ut(e.nanos)}}function ut(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function lt(e){return"string"==typeof e?ot.fromBase64String(e):ot.fromUint8Array(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function dt(e){const t=e.mapValue.fields.__previous_value__;return ht(t)?dt(t):t}function ft(e){const t=ct(e.mapValue.fields.__local_write_time__.timestampValue);return new F(t.seconds,t.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e,t,n,r,i,s,o,a,c){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=c}}class gt{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new gt("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof gt&&e.projectId===this.projectId&&e.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mt={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},vt={nullValue:"NULL_VALUE"};function yt(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?ht(e)?4:Dt(e)?9007199254740991:10:y()}function bt(e,t){if(e===t)return!0;const n=yt(e);if(n!==yt(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return ft(e).isEqual(ft(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=ct(e.timestampValue),r=ct(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return lt(e.bytesValue).isEqual(lt(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return ut(e.geoPointValue.latitude)===ut(t.geoPointValue.latitude)&&ut(e.geoPointValue.longitude)===ut(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return ut(e.integerValue)===ut(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=ut(e.doubleValue),r=ut(t.doubleValue);return n===r?ve(n)===ve(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return L(e.arrayValue.values||[],t.arrayValue.values||[],bt);case 10:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(We(n)!==We(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!bt(n[i],r[i])))return!1;return!0}(e,t);default:return y()}}function wt(e,t){return void 0!==(e.values||[]).find(e=>bt(e,t))}function _t(e,t){if(e===t)return 0;const n=yt(e),r=yt(t);if(n!==r)return j(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return j(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=ut(e.integerValue||e.doubleValue),r=ut(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return It(e.timestampValue,t.timestampValue);case 4:return It(ft(e),ft(t));case 5:return j(e.stringValue,t.stringValue);case 6:return function(e,t){const n=lt(e),r=lt(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let i=0;i<n.length&&i<r.length;i++){const e=j(n[i],r[i]);if(0!==e)return e}return j(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=j(ut(e.latitude),ut(t.latitude));return 0!==n?n:j(ut(e.longitude),ut(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],r=t.values||[];for(let i=0;i<n.length&&i<r.length;++i){const e=_t(n[i],r[i]);if(e)return e}return j(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===mt.mapValue&&t===mt.mapValue)return 0;if(e===mt.mapValue)return 1;if(t===mt.mapValue)return-1;const n=e.fields||{},r=Object.keys(n),i=t.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let o=0;o<r.length&&o<s.length;++o){const e=j(r[o],s[o]);if(0!==e)return e;const t=_t(n[r[o]],i[s[o]]);if(0!==t)return t}return j(r.length,s.length)}(e.mapValue,t.mapValue);default:throw y()}}function It(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return j(e,t);const n=ct(e),r=ct(t),i=j(n.seconds,r.seconds);return 0!==i?i:j(n.nanos,r.nanos)}function Et(e){return Tt(e)}function Tt(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=ct(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?lt(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,G.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",n=!0;for(const r of e.values||[])n?n=!1:t+=",",t+=Tt(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",r=!0;for(const i of t)r?r=!1:n+=",",n+=`${i}:${Tt(e.fields[i])}`;return n+"}"}(e.mapValue):y();var t,n}function St(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function Ot(e){return!!e&&"integerValue"in e}function kt(e){return!!e&&"arrayValue"in e}function At(e){return!!e&&"nullValue"in e}function Ct(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function xt(e){return!!e&&"mapValue"in e}function Nt(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Qe(e.mapValue.fields,(e,n)=>t.mapValue.fields[e]=Nt(n)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Nt(e.arrayValue.values[n]);return t}return Object.assign({},e)}function Dt(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}function Rt(e){return"nullValue"in e?vt:"booleanValue"in e?{booleanValue:!1}:"integerValue"in e||"doubleValue"in e?{doubleValue:NaN}:"timestampValue"in e?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in e?{stringValue:""}:"bytesValue"in e?{bytesValue:""}:"referenceValue"in e?St(gt.empty(),G.empty()):"geoPointValue"in e?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in e?{arrayValue:{}}:"mapValue"in e?{mapValue:{}}:y()}function Pt(e){return"nullValue"in e?{booleanValue:!1}:"booleanValue"in e?{doubleValue:NaN}:"integerValue"in e||"doubleValue"in e?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in e?{stringValue:""}:"stringValue"in e?{bytesValue:""}:"bytesValue"in e?St(gt.empty(),G.empty()):"referenceValue"in e?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in e?{arrayValue:{}}:"arrayValue"in e?{mapValue:{}}:"mapValue"in e?mt:y()}function jt(e,t){const n=_t(e.value,t.value);return 0!==n?n:e.inclusive&&!t.inclusive?-1:!e.inclusive&&t.inclusive?1:0}function Lt(e,t){const n=_t(e.value,t.value);return 0!==n?n:e.inclusive&&!t.inclusive?1:!e.inclusive&&t.inclusive?-1:0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e){this.value=e}static empty(){return new Mt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!xt(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Nt(t)}setAll(e){let t=z.emptyPath(),n={},r=[];e.forEach((e,i)=>{if(!t.isImmediateParentOf(i)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=Nt(e):r.push(i.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){const t=this.field(e.popLast());xt(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return bt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];xt(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){Qe(t,(t,n)=>e[t]=n);for(const r of n)delete e[r]}clone(){return new Mt(Nt(this.value))}}function Ft(e){const t=[];return Qe(e.fields,(e,n)=>{const r=new z([e]);if(xt(n)){const e=Ft(n.mapValue).fields;if(0===e.length)t.push(r);else for(const n of e)t.push(r.child(n))}else t.push(r)}),new rt(t)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Vt{constructor(e,t,n,r,i,s,o){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=i,this.data=s,this.documentState=o}static newInvalidDocument(e){return new Vt(e,0,V.min(),V.min(),V.min(),Mt.empty(),0)}static newFoundDocument(e,t,n,r){return new Vt(e,1,t,V.min(),n,r,0)}static newNoDocument(e,t){return new Vt(e,2,t,V.min(),V.min(),Mt.empty(),0)}static newUnknownDocument(e,t){return new Vt(e,3,t,V.min(),V.min(),Mt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(V.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Mt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Mt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=V.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof Vt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Vt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e,t){this.position=e,this.inclusive=t}}function Bt(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],o=e.position[i];if(r=s.field.isKeyField()?G.comparator(G.fromName(o.referenceValue),n.key):_t(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function qt(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!bt(e.position[n],t.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e,t="asc"){this.field=e,this.dir=t}}function Gt(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{}class Kt extends $t{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new nn(e,t,n):"array-contains"===t?new an(e,n):"in"===t?new cn(e,n):"not-in"===t?new un(e,n):"array-contains-any"===t?new ln(e,n):new Kt(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new rn(e,n):new sn(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(_t(t,this.value)):null!==t&&yt(this.value)===yt(t)&&this.matchesComparison(_t(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return y()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Ht extends $t{constructor(e,t){super(),this.filters=e,this.op=t,this.lt=null}static create(e,t){return new Ht(e,t)}matches(e){return Wt(this)?void 0===this.filters.find(t=>!t.matches(e)):void 0!==this.filters.find(t=>t.matches(e))}getFlattenedFilters(){return null!==this.lt||(this.lt=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.ft(e=>e.isInequality());return null!==e?e.field:null}ft(e){for(const t of this.getFlattenedFilters())if(e(t))return t;return null}}function Wt(e){return"and"===e.op}function Qt(e){return"or"===e.op}function Yt(e){return Jt(e)&&Wt(e)}function Jt(e){for(const t of e.filters)if(t instanceof Ht)return!1;return!0}function Xt(e){if(e instanceof Kt)return e.field.canonicalString()+e.op.toString()+Et(e.value);if(Yt(e))return e.filters.map(e=>Xt(e)).join(",");{const t=e.filters.map(e=>Xt(e)).join(",");return`${e.op}(${t})`}}function Zt(e,t){return e instanceof Kt?function(e,t){return t instanceof Kt&&e.op===t.op&&e.field.isEqual(t.field)&&bt(e.value,t.value)}(e,t):e instanceof Ht?function(e,t){return t instanceof Ht&&e.op===t.op&&e.filters.length===t.filters.length&&e.filters.reduce((e,n,r)=>e&&Zt(n,t.filters[r]),!0)}(e,t):void y()}function en(e,t){const n=e.filters.concat(t);return Ht.create(n,e.op)}function tn(e){return e instanceof Kt?function(e){return`${e.field.canonicalString()} ${e.op} ${Et(e.value)}`}(e):e instanceof Ht?function(e){return e.op.toString()+" {"+e.getFilters().map(tn).join(" ,")+"}"}(e):"Filter"}class nn extends Kt{constructor(e,t,n){super(e,t,n),this.key=G.fromName(n.referenceValue)}matches(e){const t=G.comparator(e.key,this.key);return this.matchesComparison(t)}}class rn extends Kt{constructor(e,t){super(e,"in",t),this.keys=on("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class sn extends Kt{constructor(e,t){super(e,"not-in",t),this.keys=on("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function on(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map(e=>G.fromName(e.referenceValue))}class an extends Kt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return kt(t)&&wt(t.arrayValue,this.value)}}class cn extends Kt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&wt(this.value.arrayValue,t)}}class un extends Kt{constructor(e,t){super(e,"not-in",t)}matches(e){if(wt(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!wt(this.value.arrayValue,t)}}class ln extends Kt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!kt(t)||!t.arrayValue.values)&&t.arrayValue.values.some(e=>wt(this.value.arrayValue,e))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(e,t=null,n=[],r=[],i=null,s=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.dt=null}}function dn(e,t=null,n=[],r=[],i=null,s=null,o=null){return new hn(e,t,n,r,i,s,o)}function fn(e){const t=_(e);if(null===t.dt){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(e=>Xt(e)).join(","),e+="|ob:",e+=t.orderBy.map(e=>function(e){return e.field.canonicalString()+e.dir}(e)).join(","),me(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(e=>Et(e)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(e=>Et(e)).join(",")),t.dt=e}return t.dt}function pn(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!Gt(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!Zt(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!qt(e.startAt,t.startAt)&&qt(e.endAt,t.endAt)}function gn(e){return G.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}function mn(e,t){return e.filters.filter(e=>e instanceof Kt&&e.field.isEqual(t))}function vn(e,t,n){let r=vt,i=!0;for(const s of mn(e,t)){let e=vt,t=!0;switch(s.op){case"<":case"<=":e=Rt(s.value);break;case"==":case"in":case">=":e=s.value;break;case">":e=s.value,t=!1;break;case"!=":case"not-in":e=vt}jt({value:r,inclusive:i},{value:e,inclusive:t})<0&&(r=e,i=t)}if(null!==n)for(let s=0;s<e.orderBy.length;++s)if(e.orderBy[s].field.isEqual(t)){const e=n.position[s];jt({value:r,inclusive:i},{value:e,inclusive:n.inclusive})<0&&(r=e,i=n.inclusive);break}return{value:r,inclusive:i}}function yn(e,t,n){let r=mt,i=!0;for(const s of mn(e,t)){let e=mt,t=!0;switch(s.op){case">=":case">":e=Pt(s.value),t=!1;break;case"==":case"in":case"<=":e=s.value;break;case"<":e=s.value,t=!1;break;case"!=":case"not-in":e=mt}Lt({value:r,inclusive:i},{value:e,inclusive:t})>0&&(r=e,i=t)}if(null!==n)for(let s=0;s<e.orderBy.length;++s)if(e.orderBy[s].field.isEqual(t)){const e=n.position[s];Lt({value:r,inclusive:i},{value:e,inclusive:n.inclusive})>0&&(r=e,i=n.inclusive);break}return{value:r,inclusive:i}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(e,t=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.wt=null,this._t=null,this.startAt,this.endAt}}function wn(e,t,n,r,i,s,o,a){return new bn(e,t,n,r,i,s,o,a)}function _n(e){return new bn(e)}function In(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function En(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function Tn(e){for(const t of e.filters){const e=t.getFirstInequalityField();if(null!==e)return e}return null}function Sn(e){return null!==e.collectionGroup}function On(e){const t=_(e);if(null===t.wt){t.wt=[];const e=Tn(t),n=En(t);if(null!==e&&null===n)e.isKeyField()||t.wt.push(new zt(e)),t.wt.push(new zt(z.keyField(),"asc"));else{let e=!1;for(const n of t.explicitOrderBy)t.wt.push(n),n.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.wt.push(new zt(z.keyField(),e))}}}return t.wt}function kn(e){const t=_(e);if(!t._t)if("F"===t.limitType)t._t=dn(t.path,t.collectionGroup,On(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const i of On(t)){const t="desc"===i.dir?"asc":"desc";e.push(new zt(i.field,t))}const n=t.endAt?new Ut(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Ut(t.startAt.position,t.startAt.inclusive):null;t._t=dn(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}return t._t}function An(e,t){t.getFirstInequalityField(),Tn(e);const n=e.filters.concat([t]);return new bn(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function Cn(e,t,n){return new bn(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function xn(e,t){return pn(kn(e),kn(t))&&e.limitType===t.limitType}function Nn(e){return`${fn(kn(e))}|lt:${e.limitType}`}function Dn(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map(e=>tn(e)).join(", ")}]`),me(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map(e=>function(e){return`${e.field.canonicalString()} (${e.dir})`}(e)).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(e=>Et(e)).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(e=>Et(e)).join(",")),`Target(${t})`}(kn(e))}; limitType=${e.limitType})`}function Rn(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):G.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of On(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&function(e,t){return!(e.startAt&&!function(e,t,n){const r=Bt(e,t,n);return e.inclusive?r<=0:r<0}(e.startAt,On(e),t))&&!(e.endAt&&!function(e,t,n){const r=Bt(e,t,n);return e.inclusive?r>=0:r>0}(e.endAt,On(e),t))}(e,t)}function Pn(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function jn(e){return(t,n)=>{let r=!1;for(const i of On(e)){const e=Ln(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}function Ln(e,t,n){const r=e.field.isKeyField()?G.comparator(t.key,n.key):function(e,t,n){const r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?_t(r,i):y()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return y()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,e))return i}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Qe(this.inner,(t,n)=>{for(const[r,i]of n)e(r,i)})}isEmpty(){return Ye(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fn=new Je(G.comparator);function Vn(){return Fn}const Un=new Je(G.comparator);function Bn(...e){let t=Un;for(const n of e)t=t.insert(n.key,n);return t}function qn(e){let t=Un;return e.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function zn(){return $n()}function Gn(){return $n()}function $n(){return new Mn(e=>e.toString(),(e,t)=>e.isEqual(t))}const Kn=new Je(G.comparator),Hn=new et(G.comparator);function Wn(...e){let t=Hn;for(const n of e)t=t.add(n);return t}const Qn=new et(j);function Yn(){return Qn}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jn(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ve(t)?"-0":t}}function Xn(e){return{integerValue:""+e}}function Zn(e,t){return ye(t)?Xn(t):Jn(e,t)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(){this._=void 0}}function tr(e,t,n){return e instanceof ir?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&ht(t)&&(t=dt(t)),t&&(n.fields.__previous_value__=t),{mapValue:n}}(n,t):e instanceof sr?or(e,t):e instanceof ar?cr(e,t):function(e,t){const n=rr(e,t),r=lr(n)+lr(e.gt);return Ot(n)&&Ot(e.gt)?Xn(r):Jn(e.serializer,r)}(e,t)}function nr(e,t,n){return e instanceof sr?or(e,t):e instanceof ar?cr(e,t):n}function rr(e,t){return e instanceof ur?Ot(n=t)||function(e){return!!e&&"doubleValue"in e}(n)?t:{integerValue:0}:null;var n}class ir extends er{}class sr extends er{constructor(e){super(),this.elements=e}}function or(e,t){const n=hr(t);for(const r of e.elements)n.some(e=>bt(e,r))||n.push(r);return{arrayValue:{values:n}}}class ar extends er{constructor(e){super(),this.elements=e}}function cr(e,t){let n=hr(t);for(const r of e.elements)n=n.filter(e=>!bt(e,r));return{arrayValue:{values:n}}}class ur extends er{constructor(e,t){super(),this.serializer=e,this.gt=t}}function lr(e){return ut(e.integerValue||e.doubleValue)}function hr(e){return kt(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(e,t){this.field=e,this.transform=t}}function fr(e,t){return e.field.isEqual(t.field)&&function(e,t){return e instanceof sr&&t instanceof sr||e instanceof ar&&t instanceof ar?L(e.elements,t.elements,bt):e instanceof ur&&t instanceof ur?bt(e.gt,t.gt):e instanceof ir&&t instanceof ir}(e.transform,t.transform)}class pr{constructor(e,t){this.version=e,this.transformResults=t}}class gr{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new gr}static exists(e){return new gr(void 0,e)}static updateTime(e){return new gr(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function mr(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class vr{}function yr(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new Ar(e.key,gr.none()):new Er(e.key,e.data,gr.none());{const n=e.data,r=Mt.empty();let i=new et(z.comparator);for(let e of t.fields)if(!i.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?r.delete(e):r.set(e,t),i=i.add(e)}return new Tr(e.key,r,new rt(i.toArray()),gr.none())}}function br(e,t,n){e instanceof Er?function(e,t,n){const r=e.value.clone(),i=Or(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof Tr?function(e,t,n){if(!mr(e.precondition,t))return void t.convertToUnknownDocument(n.version);const r=Or(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(Sr(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n)}function wr(e,t,n,r){return e instanceof Er?function(e,t,n,r){if(!mr(e.precondition,t))return n;const i=e.value.clone(),s=kr(e.fieldTransforms,r,t);return i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,n,r):e instanceof Tr?function(e,t,n,r){if(!mr(e.precondition,t))return n;const i=kr(e.fieldTransforms,r,t),s=t.data;return s.setAll(Sr(e)),s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map(e=>e.field))}(e,t,n,r):function(e,t,n){return mr(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}(e,t,n)}function _r(e,t){let n=null;for(const r of e.fieldTransforms){const e=t.data.field(r.field),i=rr(r.transform,e||null);null!=i&&(null===n&&(n=Mt.empty()),n.set(r.field,i))}return n||null}function Ir(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(e,t){return void 0===e&&void 0===t||!(!e||!t)&&L(e,t,(e,t)=>fr(e,t))}(e.fieldTransforms,t.fieldTransforms)&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class Er extends vr{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Tr extends vr{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Sr(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function Or(e,t,n){const r=new Map;b(e.length===n.length);for(let i=0;i<n.length;i++){const s=e[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,nr(o,a,n[i]))}return r}function kr(e,t,n){const r=new Map;for(const i of e){const e=i.transform,s=n.data.field(i.field);r.set(i.field,tr(e,s,t))}return r}class Ar extends vr{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Cr extends vr{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const t=this.mutations[r];t.key.isEqual(e.key)&&br(t,e,n[r])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=wr(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=wr(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=Gn();return this.mutations.forEach(r=>{const i=e.get(r.key),s=i.overlayedDocument;let o=this.applyToLocalView(s,i.mutatedFields);o=t.has(r.key)?null:o;const a=yr(s,o);null!==a&&n.set(r.key,a),s.isValidDocument()||s.convertToNoDocument(V.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Wn())}isEqual(e){return this.batchId===e.batchId&&L(this.mutations,e.mutations,(e,t)=>Ir(e,t))&&L(this.baseMutations,e.baseMutations,(e,t)=>Ir(e,t))}}class Nr{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){b(e.mutations.length===n.length);let r=Kn;const i=e.mutations;for(let s=0;s<i.length;s++)r=r.insert(i[s].key,n[s].version);return new Nr(e,t,n,r)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Rr{constructor(e,t){this.count=e,this.unchangedNames=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Pr,jr;function Lr(e){switch(e){default:return y();case I.CANCELLED:case I.UNKNOWN:case I.DEADLINE_EXCEEDED:case I.RESOURCE_EXHAUSTED:case I.INTERNAL:case I.UNAVAILABLE:case I.UNAUTHENTICATED:return!1;case I.INVALID_ARGUMENT:case I.NOT_FOUND:case I.ALREADY_EXISTS:case I.PERMISSION_DENIED:case I.FAILED_PRECONDITION:case I.ABORTED:case I.OUT_OF_RANGE:case I.UNIMPLEMENTED:case I.DATA_LOSS:return!0}}function Mr(e){if(void 0===e)return g("GRPC error has no .code"),I.UNKNOWN;switch(e){case Pr.OK:return I.OK;case Pr.CANCELLED:return I.CANCELLED;case Pr.UNKNOWN:return I.UNKNOWN;case Pr.DEADLINE_EXCEEDED:return I.DEADLINE_EXCEEDED;case Pr.RESOURCE_EXHAUSTED:return I.RESOURCE_EXHAUSTED;case Pr.INTERNAL:return I.INTERNAL;case Pr.UNAVAILABLE:return I.UNAVAILABLE;case Pr.UNAUTHENTICATED:return I.UNAUTHENTICATED;case Pr.INVALID_ARGUMENT:return I.INVALID_ARGUMENT;case Pr.NOT_FOUND:return I.NOT_FOUND;case Pr.ALREADY_EXISTS:return I.ALREADY_EXISTS;case Pr.PERMISSION_DENIED:return I.PERMISSION_DENIED;case Pr.FAILED_PRECONDITION:return I.FAILED_PRECONDITION;case Pr.ABORTED:return I.ABORTED;case Pr.OUT_OF_RANGE:return I.OUT_OF_RANGE;case Pr.UNIMPLEMENTED:return I.UNIMPLEMENTED;case Pr.DATA_LOSS:return I.DATA_LOSS;default:return y()}}(jr=Pr||(Pr={}))[jr.OK=0]="OK",jr[jr.CANCELLED=1]="CANCELLED",jr[jr.UNKNOWN=2]="UNKNOWN",jr[jr.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",jr[jr.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",jr[jr.NOT_FOUND=5]="NOT_FOUND",jr[jr.ALREADY_EXISTS=6]="ALREADY_EXISTS",jr[jr.PERMISSION_DENIED=7]="PERMISSION_DENIED",jr[jr.UNAUTHENTICATED=16]="UNAUTHENTICATED",jr[jr.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",jr[jr.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",jr[jr.ABORTED=10]="ABORTED",jr[jr.OUT_OF_RANGE=11]="OUT_OF_RANGE",jr[jr.UNIMPLEMENTED=12]="UNIMPLEMENTED",jr[jr.INTERNAL=13]="INTERNAL",jr[jr.UNAVAILABLE=14]="UNAVAILABLE",jr[jr.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fr{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Vr}static getOrCreateInstance(){return null===Vr&&(Vr=new Fr),Vr}onExistenceFilterMismatch(e){const t=Symbol();return this.onExistenceFilterMismatchCallbacks.set(t,e),()=>this.onExistenceFilterMismatchCallbacks.delete(t)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(t=>t(e))}}let Vr=null;
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ur(){return new TextEncoder}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Br=new a["e"]([4294967295,4294967295],0);function qr(e){const t=Ur().encode(e),n=new a["f"];return n.update(t),new Uint8Array(n.digest())}function zr(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new a["e"]([n,r],0),new a["e"]([i,s],0)]}class Gr{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new $r("Invalid padding: "+t);if(n<0)throw new $r("Invalid hash count: "+n);if(e.length>0&&0===this.hashCount)throw new $r("Invalid hash count: "+n);if(0===e.length&&0!==t)throw new $r("Invalid padding when bitmap length is 0: "+t);this.It=8*e.length-t,this.Tt=a["e"].fromNumber(this.It)}Et(e,t,n){let r=e.add(t.multiply(a["e"].fromNumber(n)));return 1===r.compare(Br)&&(r=new a["e"]([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Tt).toNumber()}At(e){return 0!=(this.bitmap[Math.floor(e/8)]&1<<e%8)}vt(e){if(0===this.It)return!1;const t=qr(e),[n,r]=zr(t);for(let i=0;i<this.hashCount;i++){const e=this.Et(n,r,i);if(!this.At(e))return!1}return!0}static create(e,t,n){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),s=new Gr(i,r,t);return n.forEach(e=>s.insert(e)),s}insert(e){if(0===this.It)return;const t=qr(e),[n,r]=zr(t);for(let i=0;i<this.hashCount;i++){const e=this.Et(n,r,i);this.Rt(e)}}Rt(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class $r extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const r=new Map;return r.set(e,Hr.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new Kr(V.min(),r,new Je(j),Vn(),Wn())}}class Hr{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new Hr(n,t,Wn(),Wn(),Wn())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(e,t,n,r){this.Pt=e,this.removedTargetIds=t,this.key=n,this.bt=r}}class Qr{constructor(e,t){this.targetId=e,this.Vt=t}}class Yr{constructor(e,t,n=ot.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class Jr{constructor(){this.St=0,this.Dt=ei(),this.Ct=ot.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return 0!==this.St}get Mt(){return this.Nt}$t(e){e.approximateByteSize()>0&&(this.Nt=!0,this.Ct=e)}Ot(){let e=Wn(),t=Wn(),n=Wn();return this.Dt.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:y()}}),new Hr(this.Ct,this.xt,e,t,n)}Ft(){this.Nt=!1,this.Dt=ei()}Bt(e,t){this.Nt=!0,this.Dt=this.Dt.insert(e,t)}Lt(e){this.Nt=!0,this.Dt=this.Dt.remove(e)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class Xr{constructor(e){this.Gt=e,this.Qt=new Map,this.jt=Vn(),this.zt=Zr(),this.Wt=new Je(j)}Ht(e){for(const t of e.Pt)e.bt&&e.bt.isFoundDocument()?this.Jt(t,e.bt):this.Yt(t,e.key,e.bt);for(const t of e.removedTargetIds)this.Yt(t,e.key,e.bt)}Xt(e){this.forEachTarget(e,t=>{const n=this.Zt(t);switch(e.state){case 0:this.te(t)&&n.$t(e.resumeToken);break;case 1:n.Ut(),n.kt||n.Ft(),n.$t(e.resumeToken);break;case 2:n.Ut(),n.kt||this.removeTarget(t);break;case 3:this.te(t)&&(n.Kt(),n.$t(e.resumeToken));break;case 4:this.te(t)&&(this.ee(t),n.$t(e.resumeToken));break;default:y()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Qt.forEach((e,n)=>{this.te(n)&&t(n)})}ne(e){var t;const n=e.targetId,r=e.Vt.count,i=this.se(n);if(i){const s=i.target;if(gn(s))if(0===r){const e=new G(s.path);this.Yt(n,e,Vt.newNoDocument(e,V.min()))}else b(1===r);else{const i=this.ie(n);if(i!==r){const r=this.re(e,i);if(0!==r){this.ee(n);const e=2===r?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(n,e)}null===(t=Fr.instance)||void 0===t||t.notifyOnExistenceFilterMismatch(function(e,t,n){var r,i,s,o,a,c;const u={localCacheCount:t,existenceFilterCount:n.count},l=n.unchangedNames;return l&&(u.bloomFilter={applied:0===e,hashCount:null!==(r=null==l?void 0:l.hashCount)&&void 0!==r?r:0,bitmapLength:null!==(o=null===(s=null===(i=null==l?void 0:l.bits)||void 0===i?void 0:i.bitmap)||void 0===s?void 0:s.length)&&void 0!==o?o:0,padding:null!==(c=null===(a=null==l?void 0:l.bits)||void 0===a?void 0:a.padding)&&void 0!==c?c:0}),u}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(r,i,e.Vt))}}}}re(e,t){const{unchangedNames:n,count:r}=e.Vt;if(!n||!n.bits)return 1;const{bits:{bitmap:i="",padding:s=0},hashCount:o=0}=n;let a,c;try{a=lt(i).toUint8Array()}catch(e){if(e instanceof it)return m("Decoding the base64 bloom filter in existence filter failed ("+e.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw e}try{c=new Gr(a,s,o)}catch(e){return m(e instanceof $r?"BloomFilter error: ":"Applying bloom filter failed: ",e),1}return 0===c.It?1:r!==t-this.oe(e.targetId,c)?2:0}oe(e,t){const n=this.Gt.getRemoteKeysForTarget(e);let r=0;return n.forEach(n=>{const i=this.Gt.ue(),s=`projects/${i.projectId}/databases/${i.database}/documents/${n.path.canonicalString()}`;t.vt(s)||(this.Yt(e,n,null),r++)}),r}ce(e){const t=new Map;this.Qt.forEach((n,r)=>{const i=this.se(r);if(i){if(n.current&&gn(i.target)){const t=new G(i.target.path);null!==this.jt.get(t)||this.ae(r,t)||this.Yt(r,t,Vt.newNoDocument(t,e))}n.Mt&&(t.set(r,n.Ot()),n.Ft())}});let n=Wn();this.zt.forEach((e,t)=>{let r=!0;t.forEachWhile(e=>{const t=this.se(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(r=!1,!1)}),r&&(n=n.add(e))}),this.jt.forEach((t,n)=>n.setReadTime(e));const r=new Kr(e,t,this.Wt,this.jt,n);return this.jt=Vn(),this.zt=Zr(),this.Wt=new Je(j),r}Jt(e,t){if(!this.te(e))return;const n=this.ae(e,t.key)?2:0;this.Zt(e).Bt(t.key,n),this.jt=this.jt.insert(t.key,t),this.zt=this.zt.insert(t.key,this.he(t.key).add(e))}Yt(e,t,n){if(!this.te(e))return;const r=this.Zt(e);this.ae(e,t)?r.Bt(t,1):r.Lt(t),this.zt=this.zt.insert(t,this.he(t).delete(e)),n&&(this.jt=this.jt.insert(t,n))}removeTarget(e){this.Qt.delete(e)}ie(e){const t=this.Zt(e).Ot();return this.Gt.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}qt(e){this.Zt(e).qt()}Zt(e){let t=this.Qt.get(e);return t||(t=new Jr,this.Qt.set(e,t)),t}he(e){let t=this.zt.get(e);return t||(t=new et(j),this.zt=this.zt.insert(e,t)),t}te(e){const t=null!==this.se(e);return t||p("WatchChangeAggregator","Detected inactive target",e),t}se(e){const t=this.Qt.get(e);return t&&t.kt?null:this.Gt.le(e)}ee(e){this.Qt.set(e,new Jr),this.Gt.getRemoteKeysForTarget(e).forEach(t=>{this.Yt(e,t,null)})}ae(e,t){return this.Gt.getRemoteKeysForTarget(e).has(t)}}function Zr(){return new Je(G.comparator)}function ei(){return new Je(G.comparator)}const ti=(()=>{const e={asc:"ASCENDING",desc:"DESCENDING"};return e})(),ni=(()=>{const e={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return e})(),ri=(()=>{const e={and:"AND",or:"OR"};return e})();class ii{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function si(e,t){return e.useProto3Json||me(t)?t:{value:t}}function oi(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function ai(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function ci(e,t){return oi(e,t.toTimestamp())}function ui(e){return b(!!e),V.fromTimestamp(function(e){const t=ct(e);return new F(t.seconds,t.nanos)}(e))}function li(e,t){return function(e){return new B(["projects",e.projectId,"databases",e.database])}(e).child("documents").child(t).canonicalString()}function hi(e){const t=B.fromString(e);return b(Mi(t)),t}function di(e,t){return li(e.databaseId,t.path)}function fi(e,t){const n=hi(t);if(n.get(1)!==e.databaseId.projectId)throw new E(I.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new E(I.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new G(vi(n))}function pi(e,t){return li(e.databaseId,t)}function gi(e){const t=hi(e);return 4===t.length?B.emptyPath():vi(t)}function mi(e){return new B(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function vi(e){return b(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function yi(e,t,n){return{name:di(e,t),fields:n.value.mapValue.fields}}function bi(e,t,n){const r=fi(e,t.name),i=ui(t.updateTime),s=t.createTime?ui(t.createTime):V.min(),o=new Mt({mapValue:{fields:t.fields}}),a=Vt.newFoundDocument(r,i,s,o);return n&&a.setHasCommittedMutations(),n?a.setHasCommittedMutations():a}function wi(e,t){return"found"in t?function(e,t){b(!!t.found),t.found.name,t.found.updateTime;const n=fi(e,t.found.name),r=ui(t.found.updateTime),i=t.found.createTime?ui(t.found.createTime):V.min(),s=new Mt({mapValue:{fields:t.found.fields}});return Vt.newFoundDocument(n,r,i,s)}(e,t):"missing"in t?function(e,t){b(!!t.missing),b(!!t.readTime);const n=fi(e,t.missing),r=ui(t.readTime);return Vt.newNoDocument(n,r)}(e,t):y()}function _i(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(e){return"NO_CHANGE"===e?0:"ADD"===e?1:"REMOVE"===e?2:"CURRENT"===e?3:"RESET"===e?4:y()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],s=function(e,t){return e.useProto3Json?(b(void 0===t||"string"==typeof t),ot.fromBase64String(t||"")):(b(void 0===t||t instanceof Uint8Array),ot.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(e){const t=void 0===e.code?I.UNKNOWN:Mr(e.code);return new E(t,e.message||"")}(o);n=new Yr(r,i,s,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=fi(e,r.document.name),s=ui(r.document.updateTime),o=r.document.createTime?ui(r.document.createTime):V.min(),a=new Mt({mapValue:{fields:r.document.fields}}),c=Vt.newFoundDocument(i,s,o,a),u=r.targetIds||[],l=r.removedTargetIds||[];n=new Wr(u,l,c.key,c)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=fi(e,r.document),s=r.readTime?ui(r.readTime):V.min(),o=Vt.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Wr([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=fi(e,r.document),s=r.removedTargetIds||[];n=new Wr([],s,i,null)}else{if(!("filter"in t))return y();{t.filter;const e=t.filter;e.targetId;const{count:r=0,unchangedNames:i}=e,s=new Rr(r,i),o=e.targetId;n=new Qr(o,s)}}return n}function Ii(e,t){let n;if(t instanceof Er)n={update:yi(e,t.key,t.value)};else if(t instanceof Ar)n={delete:di(e,t.key)};else if(t instanceof Tr)n={update:yi(e,t.key,t.data),updateMask:Li(t.fieldMask)};else{if(!(t instanceof Cr))return y();n={verify:di(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(e=>function(e,t){const n=t.transform;if(n instanceof ir)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof sr)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof ar)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof ur)return{fieldPath:t.field.canonicalString(),increment:n.gt};throw y()}(0,e))),t.precondition.isNone||(n.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:ci(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:y()}(e,t.precondition)),n}function Ei(e,t){const n=t.currentDocument?function(e){return void 0!==e.updateTime?gr.updateTime(ui(e.updateTime)):void 0!==e.exists?gr.exists(e.exists):gr.none()}(t.currentDocument):gr.none(),r=t.updateTransforms?t.updateTransforms.map(t=>function(e,t){let n=null;if("setToServerValue"in t)b("REQUEST_TIME"===t.setToServerValue),n=new ir;else if("appendMissingElements"in t){const e=t.appendMissingElements.values||[];n=new sr(e)}else if("removeAllFromArray"in t){const e=t.removeAllFromArray.values||[];n=new ar(e)}else"increment"in t?n=new ur(e,t.increment):y();const r=z.fromServerFormat(t.fieldPath);return new dr(r,n)}(e,t)):[];if(t.update){t.update.name;const i=fi(e,t.update.name),s=new Mt({mapValue:{fields:t.update.fields}});if(t.updateMask){const e=function(e){const t=e.fieldPaths||[];return new rt(t.map(e=>z.fromServerFormat(e)))}(t.updateMask);return new Tr(i,s,e,n,r)}return new Er(i,s,n,r)}if(t.delete){const r=fi(e,t.delete);return new Ar(r,n)}if(t.verify){const r=fi(e,t.verify);return new Cr(r,n)}return y()}function Ti(e,t){return e&&e.length>0?(b(void 0!==t),e.map(e=>function(e,t){let n=e.updateTime?ui(e.updateTime):ui(t);return n.isEqual(V.min())&&(n=ui(t)),new pr(n,e.transformResults||[])}(e,t))):[]}function Si(e,t){return{documents:[pi(e,t.path)]}}function Oi(e,t){const n={structuredQuery:{}},r=t.path;null!==t.collectionGroup?(n.parent=pi(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=pi(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(e){if(0!==e.length)return ji(Ht.create(e,"and"))}(t.filters);i&&(n.structuredQuery.where=i);const s=function(e){if(0!==e.length)return e.map(e=>function(e){return{field:Ri(e.field),direction:xi(e.dir)}}(e))}(t.orderBy);s&&(n.structuredQuery.orderBy=s);const o=si(e,t.limit);var a;return null!==o&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),n}function ki(e){let t=gi(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){b(1===r);const e=n.from[0];e.allDescendants?i=e.collectionId:t=t.child(e.collectionId)}let s=[];n.where&&(s=function(e){const t=Ci(e);return t instanceof Ht&&Yt(t)?t.getFilters():[t]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(e=>function(e){return new zt(Pi(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))}(e)));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,me(t)?null:t}(n.limit));let c=null;n.startAt&&(c=function(e){const t=!!e.before,n=e.values||[];return new Ut(n,t)}(n.startAt));let u=null;return n.endAt&&(u=function(e){const t=!e.before,n=e.values||[];return new Ut(n,t)}(n.endAt)),wn(t,i,o,s,a,"F",c,u)}function Ai(e,t){const n=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return y()}}(t.purpose);return null==n?null:{"goog-listen-tags":n}}function Ci(e){return void 0!==e.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Pi(e.unaryFilter.field);return Kt.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=Pi(e.unaryFilter.field);return Kt.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Pi(e.unaryFilter.field);return Kt.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Pi(e.unaryFilter.field);return Kt.create(i,"!=",{nullValue:"NULL_VALUE"});default:return y()}}(e):void 0!==e.fieldFilter?function(e){return Kt.create(Pi(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return y()}}(e.fieldFilter.op),e.fieldFilter.value)}(e):void 0!==e.compositeFilter?function(e){return Ht.create(e.compositeFilter.filters.map(e=>Ci(e)),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return y()}}(e.compositeFilter.op))}(e):y()}function xi(e){return ti[e]}function Ni(e){return ni[e]}function Di(e){return ri[e]}function Ri(e){return{fieldPath:e.canonicalString()}}function Pi(e){return z.fromServerFormat(e.fieldPath)}function ji(e){return e instanceof Kt?function(e){if("=="===e.op){if(Ct(e.value))return{unaryFilter:{field:Ri(e.field),op:"IS_NAN"}};if(At(e.value))return{unaryFilter:{field:Ri(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(Ct(e.value))return{unaryFilter:{field:Ri(e.field),op:"IS_NOT_NAN"}};if(At(e.value))return{unaryFilter:{field:Ri(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ri(e.field),op:Ni(e.op),value:e.value}}}(e):e instanceof Ht?function(e){const t=e.getFilters().map(e=>ji(e));return 1===t.length?t[0]:{compositeFilter:{op:Di(e.op),filters:t}}}(e):y()}function Li(e){const t=[];return e.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Mi(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(e,t,n,r,i=V.min(),s=V.min(),o=ot.EMPTY_BYTE_STRING,a=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o,this.expectedCount=a}withSequenceNumber(e){return new Fi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Fi(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Fi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Fi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(e){this.fe=e}}function Ui(e,t){let n;if(t.document)n=bi(e.fe,t.document,!!t.hasCommittedMutations);else if(t.noDocument){const e=G.fromSegments(t.noDocument.path),r=Gi(t.noDocument.readTime);n=Vt.newNoDocument(e,r),t.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!t.unknownDocument)return y();{const e=G.fromSegments(t.unknownDocument.path),r=Gi(t.unknownDocument.version);n=Vt.newUnknownDocument(e,r)}}return t.readTime&&n.setReadTime(function(e){const t=new F(e[0],e[1]);return V.fromTimestamp(t)}(t.readTime)),n}function Bi(e,t){const n=t.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:qi(t.readTime),hasCommittedMutations:t.hasCommittedMutations};if(t.isFoundDocument())r.document=function(e,t){return{name:di(e,t.key),fields:t.data.value.mapValue.fields,updateTime:oi(e,t.version.toTimestamp()),createTime:oi(e,t.createTime.toTimestamp())}}(e.fe,t);else if(t.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:zi(t.version)};else{if(!t.isUnknownDocument())return y();r.unknownDocument={path:n.path.toArray(),version:zi(t.version)}}return r}function qi(e){const t=e.toTimestamp();return[t.seconds,t.nanoseconds]}function zi(e){const t=e.toTimestamp();return{seconds:t.seconds,nanoseconds:t.nanoseconds}}function Gi(e){const t=new F(e.seconds,e.nanoseconds);return V.fromTimestamp(t)}function $i(e,t){const n=(t.baseMutations||[]).map(t=>Ei(e.fe,t));for(let s=0;s<t.mutations.length-1;++s){const e=t.mutations[s];if(s+1<t.mutations.length&&void 0!==t.mutations[s+1].transform){const n=t.mutations[s+1];e.updateTransforms=n.transform.fieldTransforms,t.mutations.splice(s+1,1),++s}}const r=t.mutations.map(t=>Ei(e.fe,t)),i=F.fromMillis(t.localWriteTimeMs);return new xr(t.batchId,i,n,r)}function Ki(e){const t=Gi(e.readTime),n=void 0!==e.lastLimboFreeSnapshotVersion?Gi(e.lastLimboFreeSnapshotVersion):V.min();let r;var i;return void 0!==e.query.documents?(b(1===(i=e.query).documents.length),r=kn(_n(gi(i.documents[0])))):r=function(e){return kn(ki(e))}(e.query),new Fi(r,e.targetId,"TargetPurposeListen",e.lastListenSequenceNumber,t,n,ot.fromBase64String(e.resumeToken))}function Hi(e,t){const n=zi(t.snapshotVersion),r=zi(t.lastLimboFreeSnapshotVersion);let i;i=gn(t.target)?Si(e.fe,t.target):Oi(e.fe,t.target);const s=t.resumeToken.toBase64();return{targetId:t.targetId,canonicalId:fn(t.target),readTime:n,resumeToken:s,lastListenSequenceNumber:t.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function Wi(e){const t=ki({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?Cn(t,t.limit,"L"):t}function Qi(e,t){return new Dr(t.largestBatchId,Ei(e.fe,t.overlayMutation))}function Yi(e,t){const n=t.path.lastSegment();return[e,be(t.path.popLast()),n]}function Ji(e,t,n,r){return{indexId:e,uid:t.uid||"",sequenceNumber:n,readTime:zi(r.readTime),documentKey:be(r.documentKey.path),largestBatchId:r.largestBatchId}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{getBundleMetadata(e,t){return Zi(e).get(t).next(e=>{if(e)return{id:(t=e).bundleId,createTime:Gi(t.createTime),version:t.version};var t})}saveBundleMetadata(e,t){return Zi(e).put({bundleId:(n=t).id,createTime:zi(ui(n.createTime)),version:n.version});var n}getNamedQuery(e,t){return es(e).get(t).next(e=>{if(e)return{name:(t=e).name,query:Wi(t.bundledQuery),readTime:Gi(t.readTime)};var t})}saveNamedQuery(e,t){return es(e).put(function(e){return{name:e.name,readTime:zi(ui(e.readTime)),bundledQuery:e.bundledQuery}}(t))}}function Zi(e){return He(e,"bundles")}function es(e){return He(e,"namedQueries")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(e,t){this.serializer=e,this.userId=t}static de(e,t){const n=t.uid||"";return new ts(e,n)}getOverlay(e,t){return ns(e).get(Yi(this.userId,t)).next(e=>e?Qi(this.serializer,e):null)}getOverlays(e,t){const n=zn();return re.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&n.set(t,e)})).next(()=>n)}saveOverlays(e,t,n){const r=[];return n.forEach((n,i)=>{const s=new Dr(t,i);r.push(this.we(e,s))}),re.waitFor(r)}removeOverlaysForBatchId(e,t,n){const r=new Set;t.forEach(e=>r.add(be(e.getCollectionPath())));const i=[];return r.forEach(t=>{const r=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,n+1],!1,!0);i.push(ns(e).J("collectionPathOverlayIndex",r))}),re.waitFor(i)}getOverlaysForCollection(e,t,n){const r=zn(),i=be(t),s=IDBKeyRange.bound([this.userId,i,n],[this.userId,i,Number.POSITIVE_INFINITY],!0);return ns(e).j("collectionPathOverlayIndex",s).next(e=>{for(const t of e){const e=Qi(this.serializer,t);r.set(e.getKey(),e)}return r})}getOverlaysForCollectionGroup(e,t,n,r){const i=zn();let s;const o=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,Number.POSITIVE_INFINITY],!0);return ns(e).X({index:"collectionGroupOverlayIndex",range:o},(e,t,n)=>{const o=Qi(this.serializer,t);i.size()<r||o.largestBatchId===s?(i.set(o.getKey(),o),s=o.largestBatchId):n.done()}).next(()=>i)}we(e,t){return ns(e).put(function(e,t,n){const[r,i,s]=Yi(t,n.mutation.key);return{userId:t,collectionPath:i,documentId:s,collectionGroup:n.mutation.key.getCollectionGroup(),largestBatchId:n.largestBatchId,overlayMutation:Ii(e.fe,n.mutation)}}(this.serializer,this.userId,t))}}function ns(e){return He(e,"documentOverlays")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(){}_e(e,t){this.me(e,t),t.ge()}me(e,t){if("nullValue"in e)this.ye(t,5);else if("booleanValue"in e)this.ye(t,10),t.pe(e.booleanValue?1:0);else if("integerValue"in e)this.ye(t,15),t.pe(ut(e.integerValue));else if("doubleValue"in e){const n=ut(e.doubleValue);isNaN(n)?this.ye(t,13):(this.ye(t,15),ve(n)?t.pe(0):t.pe(n))}else if("timestampValue"in e){const n=e.timestampValue;this.ye(t,20),"string"==typeof n?t.Ie(n):(t.Ie(""+(n.seconds||"")),t.pe(n.nanos||0))}else if("stringValue"in e)this.Te(e.stringValue,t),this.Ee(t);else if("bytesValue"in e)this.ye(t,30),t.Ae(lt(e.bytesValue)),this.Ee(t);else if("referenceValue"in e)this.ve(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.ye(t,45),t.pe(n.latitude||0),t.pe(n.longitude||0)}else"mapValue"in e?Dt(e)?this.ye(t,Number.MAX_SAFE_INTEGER):(this.Re(e.mapValue,t),this.Ee(t)):"arrayValue"in e?(this.Pe(e.arrayValue,t),this.Ee(t)):y()}Te(e,t){this.ye(t,25),this.be(e,t)}be(e,t){t.Ie(e)}Re(e,t){const n=e.fields||{};this.ye(t,55);for(const r of Object.keys(n))this.Te(r,t),this.me(n[r],t)}Pe(e,t){const n=e.values||[];this.ye(t,50);for(const r of n)this.me(r,t)}ve(e,t){this.ye(t,37),G.fromName(e).path.forEach(e=>{this.ye(t,60),this.be(e,t)})}ye(e,t){e.pe(t)}Ee(e){e.pe(2)}}function is(e){if(0===e)return 8;let t=0;return e>>4==0&&(t+=4,e<<=4),e>>6==0&&(t+=2,e<<=2),e>>7==0&&(t+=1),t}function ss(e){const t=64-function(e){let t=0;for(let n=0;n<8;++n){const r=is(255&e[n]);if(t+=r,8!==r)break}return t}(e);return Math.ceil(t/8)}rs.Ve=new rs;class os{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Se(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.De(n.value),n=t.next();this.Ce()}xe(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.Ne(n.value),n=t.next();this.ke()}Me(e){for(const t of e){const e=t.charCodeAt(0);if(e<128)this.De(e);else if(e<2048)this.De(960|e>>>6),this.De(128|63&e);else if(t<"\ud800"||"\udbff"<t)this.De(480|e>>>12),this.De(128|63&e>>>6),this.De(128|63&e);else{const e=t.codePointAt(0);this.De(240|e>>>18),this.De(128|63&e>>>12),this.De(128|63&e>>>6),this.De(128|63&e)}}this.Ce()}$e(e){for(const t of e){const e=t.charCodeAt(0);if(e<128)this.Ne(e);else if(e<2048)this.Ne(960|e>>>6),this.Ne(128|63&e);else if(t<"\ud800"||"\udbff"<t)this.Ne(480|e>>>12),this.Ne(128|63&e>>>6),this.Ne(128|63&e);else{const e=t.codePointAt(0);this.Ne(240|e>>>18),this.Ne(128|63&e>>>12),this.Ne(128|63&e>>>6),this.Ne(128|63&e)}}this.ke()}Oe(e){const t=this.Fe(e),n=ss(t);this.Be(1+n),this.buffer[this.position++]=255&n;for(let r=t.length-n;r<t.length;++r)this.buffer[this.position++]=255&t[r]}Le(e){const t=this.Fe(e),n=ss(t);this.Be(1+n),this.buffer[this.position++]=~(255&n);for(let r=t.length-n;r<t.length;++r)this.buffer[this.position++]=~(255&t[r])}qe(){this.Ue(255),this.Ue(255)}Ke(){this.Ge(255),this.Ge(255)}reset(){this.position=0}seed(e){this.Be(e.length),this.buffer.set(e,this.position),this.position+=e.length}Qe(){return this.buffer.slice(0,this.position)}Fe(e){const t=function(e){const t=new DataView(new ArrayBuffer(8));return t.setFloat64(0,e,!1),new Uint8Array(t.buffer)}(e),n=0!=(128&t[0]);t[0]^=n?255:128;for(let r=1;r<t.length;++r)t[r]^=n?255:0;return t}De(e){const t=255&e;0===t?(this.Ue(0),this.Ue(255)):255===t?(this.Ue(255),this.Ue(0)):this.Ue(t)}Ne(e){const t=255&e;0===t?(this.Ge(0),this.Ge(255)):255===t?(this.Ge(255),this.Ge(0)):this.Ge(e)}Ce(){this.Ue(0),this.Ue(1)}ke(){this.Ge(0),this.Ge(1)}Ue(e){this.Be(1),this.buffer[this.position++]=e}Ge(e){this.Be(1),this.buffer[this.position++]=~e}Be(e){const t=e+this.position;if(t<=this.buffer.length)return;let n=2*this.buffer.length;n<t&&(n=t);const r=new Uint8Array(n);r.set(this.buffer),this.buffer=r}}class as{constructor(e){this.je=e}Ae(e){this.je.Se(e)}Ie(e){this.je.Me(e)}pe(e){this.je.Oe(e)}ge(){this.je.qe()}}class cs{constructor(e){this.je=e}Ae(e){this.je.xe(e)}Ie(e){this.je.$e(e)}pe(e){this.je.Le(e)}ge(){this.je.Ke()}}class us{constructor(){this.je=new os,this.ze=new as(this.je),this.We=new cs(this.je)}seed(e){this.je.seed(e)}He(e){return 0===e?this.ze:this.We}Qe(){return this.je.Qe()}reset(){this.je.reset()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(e,t,n,r){this.indexId=e,this.documentKey=t,this.arrayValue=n,this.directionalValue=r}Je(){const e=this.directionalValue.length,t=0===e||255===this.directionalValue[e-1]?e+1:e,n=new Uint8Array(t);return n.set(this.directionalValue,0),t!==e?n.set([0],this.directionalValue.length):++n[n.length-1],new ls(this.indexId,this.documentKey,this.arrayValue,n)}}function hs(e,t){let n=e.indexId-t.indexId;return 0!==n?n:(n=ds(e.arrayValue,t.arrayValue),0!==n?n:(n=ds(e.directionalValue,t.directionalValue),0!==n?n:G.comparator(e.documentKey,t.documentKey)))}function ds(e,t){for(let n=0;n<e.length&&n<t.length;++n){const r=e[n]-t[n];if(0!==r)return r}return e.length-t.length}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(e){this.collectionId=null!=e.collectionGroup?e.collectionGroup:e.path.lastSegment(),this.Ye=e.orderBy,this.Xe=[];for(const t of e.filters){const e=t;e.isInequality()?this.Ze=e:this.Xe.push(e)}}tn(e){b(e.collectionGroup===this.collectionId);const t=K(e);if(void 0!==t&&!this.en(t))return!1;const n=H(e);let r=new Set,i=0,s=0;for(;i<n.length&&this.en(n[i]);++i)r=r.add(n[i].fieldPath.canonicalString());if(i===n.length)return!0;if(void 0!==this.Ze){if(!r.has(this.Ze.field.canonicalString())){const e=n[i];if(!this.nn(this.Ze,e)||!this.sn(this.Ye[s++],e))return!1}++i}for(;i<n.length;++i){const e=n[i];if(s>=this.Ye.length||!this.sn(this.Ye[s++],e))return!1}return!0}en(e){for(const t of this.Xe)if(this.nn(t,e))return!0;return!1}nn(e,t){if(void 0===e||!e.field.isEqual(t.fieldPath))return!1;const n="array-contains"===e.op||"array-contains-any"===e.op;return 2===t.kind===n}sn(e,t){return!!e.field.isEqual(t.fieldPath)&&(0===t.kind&&"asc"===e.dir||1===t.kind&&"desc"===e.dir)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ps(e){var t,n;if(b(e instanceof Kt||e instanceof Ht),e instanceof Kt){if(e instanceof cn){const r=(null===(n=null===(t=e.value.arrayValue)||void 0===t?void 0:t.values)||void 0===n?void 0:n.map(t=>Kt.create(e.field,"==",t)))||[];return Ht.create(r,"or")}return e}const r=e.filters.map(e=>ps(e));return Ht.create(r,e.op)}function gs(e){if(0===e.getFilters().length)return[];const t=bs(ps(e));return b(ys(t)),ms(t)||vs(t)?[t]:t.getFilters()}function ms(e){return e instanceof Kt}function vs(e){return e instanceof Ht&&Yt(e)}function ys(e){return ms(e)||vs(e)||function(e){if(e instanceof Ht&&Qt(e)){for(const t of e.getFilters())if(!ms(t)&&!vs(t))return!1;return!0}return!1}(e)}function bs(e){if(b(e instanceof Kt||e instanceof Ht),e instanceof Kt)return e;if(1===e.filters.length)return bs(e.filters[0]);const t=e.filters.map(e=>bs(e));let n=Ht.create(t,e.op);return n=Is(n),ys(n)?n:(b(n instanceof Ht),b(Wt(n)),b(n.filters.length>1),n.filters.reduce((e,t)=>ws(e,t)))}function ws(e,t){let n;return b(e instanceof Kt||e instanceof Ht),b(t instanceof Kt||t instanceof Ht),n=e instanceof Kt?t instanceof Kt?function(e,t){return Ht.create([e,t],"and")}(e,t):_s(e,t):t instanceof Kt?_s(t,e):function(e,t){if(b(e.filters.length>0&&t.filters.length>0),Wt(e)&&Wt(t))return en(e,t.getFilters());const n=Qt(e)?e:t,r=Qt(e)?t:e,i=n.filters.map(e=>ws(e,r));return Ht.create(i,"or")}(e,t),Is(n)}function _s(e,t){if(Wt(t))return en(t,e.getFilters());{const n=t.filters.map(t=>ws(e,t));return Ht.create(n,"or")}}function Is(e){if(b(e instanceof Kt||e instanceof Ht),e instanceof Kt)return e;const t=e.getFilters();if(1===t.length)return Is(t[0]);if(Jt(e))return e;const n=t.map(e=>Is(e)),r=[];return n.forEach(t=>{t instanceof Kt?r.push(t):t instanceof Ht&&(t.op===e.op?r.push(...t.filters):r.push(t))}),1===r.length?r[0]:Ht.create(r,e.op)
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Es{constructor(){this.rn=new Ts}addToCollectionParentIndex(e,t){return this.rn.add(t),re.resolve()}getCollectionParents(e,t){return re.resolve(this.rn.getEntries(t))}addFieldIndex(e,t){return re.resolve()}deleteFieldIndex(e,t){return re.resolve()}getDocumentsMatchingTarget(e,t){return re.resolve(null)}getIndexType(e,t){return re.resolve(0)}getFieldIndexes(e,t){return re.resolve([])}getNextCollectionGroupToUpdate(e){return re.resolve(null)}getMinOffset(e,t){return re.resolve(X.min())}getMinOffsetFromCollectionGroup(e,t){return re.resolve(X.min())}updateCollectionGroup(e,t,n){return re.resolve()}updateIndexEntries(e,t){return re.resolve()}}class Ts{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new et(B.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new et(B.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ss=new Uint8Array(0);class Os{constructor(e,t){this.user=e,this.databaseId=t,this.on=new Ts,this.un=new Mn(e=>fn(e),(e,t)=>pn(e,t)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.on.has(t)){const n=t.lastSegment(),r=t.popLast();e.addOnCommittedListener(()=>{this.on.add(t)});const i={collectionId:n,parent:be(r)};return ks(e).put(i)}return re.resolve()}getCollectionParents(e,t){const n=[],r=IDBKeyRange.bound([t,""],[M(t),""],!1,!0);return ks(e).j(r).next(e=>{for(const r of e){if(r.collectionId!==t)break;n.push(Ie(r.parent))}return n})}addFieldIndex(e,t){const n=Cs(e),r=function(e){return{indexId:e.indexId,collectionGroup:e.collectionGroup,fields:e.fields.map(e=>[e.fieldPath.canonicalString(),e.kind])}}(t);delete r.indexId;const i=n.add(r);if(t.indexState){const n=xs(e);return i.next(e=>{n.put(Ji(e,this.user,t.indexState.sequenceNumber,t.indexState.offset))})}return i.next()}deleteFieldIndex(e,t){const n=Cs(e),r=xs(e),i=As(e);return n.delete(t.indexId).next(()=>r.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}getDocumentsMatchingTarget(e,t){const n=As(e);let r=!0;const i=new Map;return re.forEach(this.cn(t),t=>this.an(e,t).next(e=>{r&&(r=!!e),i.set(t,e)})).next(()=>{if(r){let e=Wn();const r=[];return re.forEach(i,(i,s)=>{var o;p("IndexedDbIndexManager",`Using index ${o=i,`id=${o.indexId}|cg=${o.collectionGroup}|f=${o.fields.map(e=>`${e.fieldPath}:${e.kind}`).join(",")}`} to execute ${fn(t)}`);const a=function(e,t){const n=K(t);if(void 0===n)return null;for(const r of mn(e,n.fieldPath))switch(r.op){case"array-contains-any":return r.value.arrayValue.values||[];case"array-contains":return[r.value]}return null}(s,i),c=function(e,t){const n=new Map;for(const r of H(t))for(const t of mn(e,r.fieldPath))switch(t.op){case"==":case"in":n.set(r.fieldPath.canonicalString(),t.value);break;case"not-in":case"!=":return n.set(r.fieldPath.canonicalString(),t.value),Array.from(n.values())}return null}(s,i),u=function(e,t){const n=[];let r=!0;for(const i of H(t)){const t=0===i.kind?vn(e,i.fieldPath,e.startAt):yn(e,i.fieldPath,e.startAt);n.push(t.value),r&&(r=t.inclusive)}return new Ut(n,r)}(s,i),l=function(e,t){const n=[];let r=!0;for(const i of H(t)){const t=0===i.kind?yn(e,i.fieldPath,e.endAt):vn(e,i.fieldPath,e.endAt);n.push(t.value),r&&(r=t.inclusive)}return new Ut(n,r)}(s,i),h=this.hn(i,s,u),d=this.hn(i,s,l),f=this.ln(i,s,c),g=this.fn(i.indexId,a,h,u.inclusive,d,l.inclusive,f);return re.forEach(g,i=>n.H(i,t.limit).next(t=>{t.forEach(t=>{const n=G.fromSegments(t.documentKey);e.has(n)||(e=e.add(n),r.push(n))})}))}).next(()=>r)}return re.resolve(null)})}cn(e){let t=this.un.get(e);return t||(t=0===e.filters.length?[e]:gs(Ht.create(e.filters,"and")).map(t=>dn(e.path,e.collectionGroup,e.orderBy,t.getFilters(),e.limit,e.startAt,e.endAt)),this.un.set(e,t),t)}fn(e,t,n,r,i,s,o){const a=(null!=t?t.length:1)*Math.max(n.length,i.length),c=a/(null!=t?t.length:1),u=[];for(let l=0;l<a;++l){const a=t?this.dn(t[l/c]):Ss,h=this.wn(e,a,n[l%c],r),d=this._n(e,a,i[l%c],s),f=o.map(t=>this.wn(e,a,t,!0));u.push(...this.createRange(h,d,f))}return u}wn(e,t,n,r){const i=new ls(e,G.empty(),t,n);return r?i:i.Je()}_n(e,t,n,r){const i=new ls(e,G.empty(),t,n);return r?i.Je():i}an(e,t){const n=new fs(t),r=null!=t.collectionGroup?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,r).next(e=>{let t=null;for(const r of e)n.tn(r)&&(!t||r.fields.length>t.fields.length)&&(t=r);return t})}getIndexType(e,t){let n=2;const r=this.cn(t);return re.forEach(r,t=>this.an(e,t).next(e=>{e?0!==n&&e.fields.length<function(e){let t=new et(z.comparator),n=!1;for(const r of e.filters)for(const e of r.getFlattenedFilters())e.field.isKeyField()||("array-contains"===e.op||"array-contains-any"===e.op?n=!0:t=t.add(e.field));for(const r of e.orderBy)r.field.isKeyField()||(t=t.add(r.field));return t.size+(n?1:0)}(t)&&(n=1):n=0})).next(()=>function(e){return null!==e.limit}(t)&&r.length>1&&2===n?1:n)}mn(e,t){const n=new us;for(const r of H(e)){const e=t.data.field(r.fieldPath);if(null==e)return null;const i=n.He(r.kind);rs.Ve._e(e,i)}return n.Qe()}dn(e){const t=new us;return rs.Ve._e(e,t.He(0)),t.Qe()}gn(e,t){const n=new us;return rs.Ve._e(St(this.databaseId,t),n.He(function(e){const t=H(e);return 0===t.length?0:t[t.length-1].kind}(e))),n.Qe()}ln(e,t,n){if(null===n)return[];let r=[];r.push(new us);let i=0;for(const s of H(e)){const e=n[i++];for(const n of r)if(this.yn(t,s.fieldPath)&&kt(e))r=this.pn(r,s,e);else{const t=n.He(s.kind);rs.Ve._e(e,t)}}return this.In(r)}hn(e,t,n){return this.ln(e,t,n.position)}In(e){const t=[];for(let n=0;n<e.length;++n)t[n]=e[n].Qe();return t}pn(e,t,n){const r=[...e],i=[];for(const s of n.arrayValue.values||[])for(const e of r){const n=new us;n.seed(e.Qe()),rs.Ve._e(s,n.He(t.kind)),i.push(n)}return i}yn(e,t){return!!e.filters.find(e=>e instanceof Kt&&e.field.isEqual(t)&&("in"===e.op||"not-in"===e.op))}getFieldIndexes(e,t){const n=Cs(e),r=xs(e);return(t?n.j("collectionGroupIndex",IDBKeyRange.bound(t,t)):n.j()).next(e=>{const t=[];return re.forEach(e,e=>r.get([e.indexId,this.uid]).next(n=>{t.push(function(e,t){const n=t?new Q(t.sequenceNumber,new X(Gi(t.readTime),new G(Ie(t.documentKey)),t.largestBatchId)):Q.empty(),r=e.fields.map(([e,t])=>new W(z.fromServerFormat(e),t));return new $(e.indexId,e.collectionGroup,r,n)}(e,n))})).next(()=>t)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(e=>0===e.length?null:(e.sort((e,t)=>{const n=e.indexState.sequenceNumber-t.indexState.sequenceNumber;return 0!==n?n:j(e.collectionGroup,t.collectionGroup)}),e[0].collectionGroup))}updateCollectionGroup(e,t,n){const r=Cs(e),i=xs(e);return this.Tn(e).next(e=>r.j("collectionGroupIndex",IDBKeyRange.bound(t,t)).next(t=>re.forEach(t,t=>i.put(Ji(t.indexId,this.user,e,n)))))}updateIndexEntries(e,t){const n=new Map;return re.forEach(t,(t,r)=>{const i=n.get(t.collectionGroup);return(i?re.resolve(i):this.getFieldIndexes(e,t.collectionGroup)).next(i=>(n.set(t.collectionGroup,i),re.forEach(i,n=>this.En(e,t,n).next(t=>{const i=this.An(r,n);return t.isEqual(i)?re.resolve():this.vn(e,r,n,t,i)}))))})}Rn(e,t,n,r){return As(e).put({indexId:r.indexId,uid:this.uid,arrayValue:r.arrayValue,directionalValue:r.directionalValue,orderedDocumentKey:this.gn(n,t.key),documentKey:t.key.path.toArray()})}Pn(e,t,n,r){return As(e).delete([r.indexId,this.uid,r.arrayValue,r.directionalValue,this.gn(n,t.key),t.key.path.toArray()])}En(e,t,n){const r=As(e);let i=new et(hs);return r.X({index:"documentKeyIndex",range:IDBKeyRange.only([n.indexId,this.uid,this.gn(n,t)])},(e,r)=>{i=i.add(new ls(n.indexId,t,r.arrayValue,r.directionalValue))}).next(()=>i)}An(e,t){let n=new et(hs);const r=this.mn(t,e);if(null==r)return n;const i=K(t);if(null!=i){const s=e.data.field(i.fieldPath);if(kt(s))for(const i of s.arrayValue.values||[])n=n.add(new ls(t.indexId,e.key,this.dn(i),r))}else n=n.add(new ls(t.indexId,e.key,Ss,r));return n}vn(e,t,n,r,i){p("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const s=[];return function(e,t,n,r,i){const s=e.getIterator(),o=t.getIterator();let a=nt(s),c=nt(o);for(;a||c;){let e=!1,t=!1;if(a&&c){const r=n(a,c);r<0?t=!0:r>0&&(e=!0)}else null!=a?t=!0:e=!0;e?(r(c),c=nt(o)):t?(i(a),a=nt(s)):(a=nt(s),c=nt(o))}}(r,i,hs,r=>{s.push(this.Rn(e,t,n,r))},r=>{s.push(this.Pn(e,t,n,r))}),re.waitFor(s)}Tn(e){let t=1;return xs(e).X({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(e,n,r)=>{r.done(),t=n.sequenceNumber+1}).next(()=>t)}createRange(e,t,n){n=n.sort((e,t)=>hs(e,t)).filter((e,t,n)=>!t||0!==hs(e,n[t-1]));const r=[];r.push(e);for(const s of n){const n=hs(s,e),i=hs(s,t);if(0===n)r[0]=e.Je();else if(n>0&&i<0)r.push(s),r.push(s.Je());else if(i>0)break}r.push(t);const i=[];for(let s=0;s<r.length;s+=2){if(this.bn(r[s],r[s+1]))return[];const e=[r[s].indexId,this.uid,r[s].arrayValue,r[s].directionalValue,Ss,[]],t=[r[s+1].indexId,this.uid,r[s+1].arrayValue,r[s+1].directionalValue,Ss,[]];i.push(IDBKeyRange.bound(e,t))}return i}bn(e,t){return hs(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(Ns)}getMinOffset(e,t){return re.mapArray(this.cn(t),t=>this.an(e,t).next(e=>e||y())).next(Ns)}}function ks(e){return He(e,"collectionParents")}function As(e){return He(e,"indexEntries")}function Cs(e){return He(e,"indexConfiguration")}function xs(e){return He(e,"indexState")}function Ns(e){b(0!==e.length);let t=e[0].indexState.offset,n=t.largestBatchId;for(let r=1;r<e.length;r++){const i=e[r].indexState.offset;Z(i,t)<0&&(t=i),n<i.largestBatchId&&(n=i.largestBatchId)}return new X(t.readTime,t.documentKey,n)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ds={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Rs{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new Rs(e,Rs.DEFAULT_COLLECTION_PERCENTILE,Rs.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ps(e,t,n){const r=e.store("mutations"),i=e.store("documentMutations"),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const c=r.X({range:o},(e,t,n)=>(a++,n.delete()));s.push(c.next(()=>{b(1===a)}));const u=[];for(const l of n.mutations){const e=Se(t,l.key.path,n.batchId);s.push(i.delete(e)),u.push(l.key)}return re.waitFor(s).next(()=>u)}function js(e){if(!e)return 0;let t;if(e.document)t=e.document;else if(e.unknownDocument)t=e.unknownDocument;else{if(!e.noDocument)throw y();t=e.noDocument}return JSON.stringify(t).length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Rs.DEFAULT_COLLECTION_PERCENTILE=10,Rs.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Rs.DEFAULT=new Rs(41943040,Rs.DEFAULT_COLLECTION_PERCENTILE,Rs.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Rs.DISABLED=new Rs(-1,0,0);class Ls{constructor(e,t,n,r){this.userId=e,this.serializer=t,this.indexManager=n,this.referenceDelegate=r,this.Vn={}}static de(e,t,n,r){b(""!==e.uid);const i=e.isAuthenticated()?e.uid:"";return new Ls(i,t,n,r)}checkEmpty(e){let t=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Fs(e).X({index:"userMutationsIndex",range:n},(e,n,r)=>{t=!1,r.done()}).next(()=>t)}addMutationBatch(e,t,n,r){const i=Vs(e),s=Fs(e);return s.add({}).next(o=>{b("number"==typeof o);const a=new xr(o,t,n,r),c=function(e,t,n){const r=n.baseMutations.map(t=>Ii(e.fe,t)),i=n.mutations.map(t=>Ii(e.fe,t));return{userId:t,batchId:n.batchId,localWriteTimeMs:n.localWriteTime.toMillis(),baseMutations:r,mutations:i}}(this.serializer,this.userId,a),u=[];let l=new et((e,t)=>j(e.canonicalString(),t.canonicalString()));for(const e of r){const t=Se(this.userId,e.key.path,o);l=l.add(e.key.path.popLast()),u.push(s.put(c)),u.push(i.put(t,Oe))}return l.forEach(t=>{u.push(this.indexManager.addToCollectionParentIndex(e,t))}),e.addOnCommittedListener(()=>{this.Vn[o]=a.keys()}),re.waitFor(u).next(()=>a)})}lookupMutationBatch(e,t){return Fs(e).get(t).next(e=>e?(b(e.userId===this.userId),$i(this.serializer,e)):null)}Sn(e,t){return this.Vn[t]?re.resolve(this.Vn[t]):this.lookupMutationBatch(e,t).next(e=>{if(e){const n=e.keys();return this.Vn[t]=n,n}return null})}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=IDBKeyRange.lowerBound([this.userId,n]);let i=null;return Fs(e).X({index:"userMutationsIndex",range:r},(e,t,r)=>{t.userId===this.userId&&(b(t.batchId>=n),i=$i(this.serializer,t)),r.done()}).next(()=>i)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=-1;return Fs(e).X({index:"userMutationsIndex",range:t,reverse:!0},(e,t,r)=>{n=t.batchId,r.done()}).next(()=>n)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Fs(e).j("userMutationsIndex",t).next(e=>e.map(e=>$i(this.serializer,e)))}getAllMutationBatchesAffectingDocumentKey(e,t){const n=Te(this.userId,t.path),r=IDBKeyRange.lowerBound(n),i=[];return Vs(e).X({range:r},(n,r,s)=>{const[o,a,c]=n,u=Ie(a);if(o===this.userId&&t.path.isEqual(u))return Fs(e).get(c).next(e=>{if(!e)throw y();b(e.userId===this.userId),i.push($i(this.serializer,e))});s.done()}).next(()=>i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new et(j);const r=[];return t.forEach(t=>{const i=Te(this.userId,t.path),s=IDBKeyRange.lowerBound(i),o=Vs(e).X({range:s},(e,r,i)=>{const[s,o,a]=e,c=Ie(o);s===this.userId&&t.path.isEqual(c)?n=n.add(a):i.done()});r.push(o)}),re.waitFor(r).next(()=>this.Dn(e,n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1,i=Te(this.userId,n),s=IDBKeyRange.lowerBound(i);let o=new et(j);return Vs(e).X({range:s},(e,t,i)=>{const[s,a,c]=e,u=Ie(a);s===this.userId&&n.isPrefixOf(u)?u.length===r&&(o=o.add(c)):i.done()}).next(()=>this.Dn(e,o))}Dn(e,t){const n=[],r=[];return t.forEach(t=>{r.push(Fs(e).get(t).next(e=>{if(null===e)throw y();b(e.userId===this.userId),n.push($i(this.serializer,e))}))}),re.waitFor(r).next(()=>n)}removeMutationBatch(e,t){return Ps(e.ht,this.userId,t).next(n=>(e.addOnCommittedListener(()=>{this.Cn(t.batchId)}),re.forEach(n,t=>this.referenceDelegate.markPotentiallyOrphaned(e,t))))}Cn(e){delete this.Vn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return re.resolve();const n=IDBKeyRange.lowerBound([this.userId]),r=[];return Vs(e).X({range:n},(e,t,n)=>{if(e[0]===this.userId){const t=Ie(e[1]);r.push(t)}else n.done()}).next(()=>{b(0===r.length)})})}containsKey(e,t){return Ms(e,this.userId,t)}xn(e){return Us(e).get(this.userId).next(e=>e||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function Ms(e,t,n){const r=Te(t,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return Vs(e).X({range:s,Y:!0},(e,n,r)=>{const[s,a,c]=e;s===t&&a===i&&(o=!0),r.done()}).next(()=>o)}function Fs(e){return He(e,"mutations")}function Vs(e){return He(e,"documentMutations")}function Us(e){return He(e,"mutationQueues")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static kn(){return new Bs(0)}static Mn(){return new Bs(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.$n(e).next(t=>{const n=new Bs(t.highestTargetId);return t.highestTargetId=n.next(),this.On(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.$n(e).next(e=>V.fromTimestamp(new F(e.lastRemoteSnapshotVersion.seconds,e.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.$n(e).next(e=>e.highestListenSequenceNumber)}setTargetsMetadata(e,t,n){return this.$n(e).next(r=>(r.highestListenSequenceNumber=t,n&&(r.lastRemoteSnapshotVersion=n.toTimestamp()),t>r.highestListenSequenceNumber&&(r.highestListenSequenceNumber=t),this.On(e,r)))}addTargetData(e,t){return this.Fn(e,t).next(()=>this.$n(e).next(n=>(n.targetCount+=1,this.Bn(t,n),this.On(e,n))))}updateTargetData(e,t){return this.Fn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>zs(e).delete(t.targetId)).next(()=>this.$n(e)).next(t=>(b(t.targetCount>0),t.targetCount-=1,this.On(e,t)))}removeTargets(e,t,n){let r=0;const i=[];return zs(e).X((s,o)=>{const a=Ki(o);a.sequenceNumber<=t&&null===n.get(a.targetId)&&(r++,i.push(this.removeTargetData(e,a)))}).next(()=>re.waitFor(i)).next(()=>r)}forEachTarget(e,t){return zs(e).X((e,n)=>{const r=Ki(n);t(r)})}$n(e){return Gs(e).get("targetGlobalKey").next(e=>(b(null!==e),e))}On(e,t){return Gs(e).put("targetGlobalKey",t)}Fn(e,t){return zs(e).put(Hi(this.serializer,t))}Bn(e,t){let n=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,n=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,n=!0),n}getTargetCount(e){return this.$n(e).next(e=>e.targetCount)}getTargetData(e,t){const n=fn(t),r=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let i=null;return zs(e).X({range:r,index:"queryTargetsIndex"},(e,n,r)=>{const s=Ki(n);pn(t,s.target)&&(i=s,r.done())}).next(()=>i)}addMatchingKeys(e,t,n){const r=[],i=$s(e);return t.forEach(t=>{const s=be(t.path);r.push(i.put({targetId:n,path:s})),r.push(this.referenceDelegate.addReference(e,n,t))}),re.waitFor(r)}removeMatchingKeys(e,t,n){const r=$s(e);return re.forEach(t,t=>{const i=be(t.path);return re.waitFor([r.delete([n,i]),this.referenceDelegate.removeReference(e,n,t)])})}removeMatchingKeysForTargetId(e,t){const n=$s(e),r=IDBKeyRange.bound([t],[t+1],!1,!0);return n.delete(r)}getMatchingKeysForTargetId(e,t){const n=IDBKeyRange.bound([t],[t+1],!1,!0),r=$s(e);let i=Wn();return r.X({range:n,Y:!0},(e,t,n)=>{const r=Ie(e[1]),s=new G(r);i=i.add(s)}).next(()=>i)}containsKey(e,t){const n=be(t.path),r=IDBKeyRange.bound([n],[M(n)],!1,!0);let i=0;return $s(e).X({index:"documentTargetsIndex",Y:!0,range:r},([e,t],n,r)=>{0!==e&&(i++,r.done())}).next(()=>i>0)}le(e,t){return zs(e).get(t).next(e=>e?Ki(e):null)}}function zs(e){return He(e,"targets")}function Gs(e){return He(e,"targetGlobal")}function $s(e){return He(e,"targetDocuments")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ks([e,t],[n,r]){const i=j(e,n);return 0===i?j(t,r):i}class Hs{constructor(e){this.Ln=e,this.buffer=new et(Ks),this.qn=0}Un(){return++this.qn}Kn(e){const t=[e,this.Un()];if(this.buffer.size<this.Ln)this.buffer=this.buffer.add(t);else{const e=this.buffer.last();Ks(t,e)<0&&(this.buffer=this.buffer.delete(e).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Ws{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.Gn=null}start(){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.Qn(6e4)}stop(){this.Gn&&(this.Gn.cancel(),this.Gn=null)}get started(){return null!==this.Gn}Qn(e){p("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Gn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Gn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){ce(e)?p("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",e):await ne(e)}await this.Qn(3e5)})}}class Qs{constructor(e,t){this.jn=e,this.params=t}calculateTargetCount(e,t){return this.jn.zn(e).next(e=>Math.floor(t/100*e))}nthSequenceNumber(e,t){if(0===t)return re.resolve(ge.ct);const n=new Hs(t);return this.jn.forEachTarget(e,e=>n.Kn(e.sequenceNumber)).next(()=>this.jn.Wn(e,e=>n.Kn(e))).next(()=>n.maxValue)}removeTargets(e,t,n){return this.jn.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.jn.removeOrphanedDocuments(e,t)}collect(e,t){return-1===this.params.cacheSizeCollectionThreshold?(p("LruGarbageCollector","Garbage collection skipped; disabled"),re.resolve(Ds)):this.getCacheSize(e).next(n=>n<this.params.cacheSizeCollectionThreshold?(p("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Ds):this.Hn(e,t))}getCacheSize(e){return this.jn.getCacheSize(e)}Hn(e,t){let n,r,i,o,a,c,u;const l=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(t=>(t>this.params.maximumSequenceNumbersToCollect?(p("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${t}`),r=this.params.maximumSequenceNumbersToCollect):r=t,o=Date.now(),this.nthSequenceNumber(e,r))).next(r=>(n=r,a=Date.now(),this.removeTargets(e,n,t))).next(t=>(i=t,c=Date.now(),this.removeOrphanedDocuments(e,n))).next(e=>(u=Date.now(),d()<=s["a"].DEBUG&&p("LruGarbageCollector",`LRU Garbage Collection\n\tCounted targets in ${o-l}ms\n\tDetermined least recently used ${r} in `+(a-o)+"ms\n"+`\tRemoved ${i} targets in `+(c-a)+"ms\n"+`\tRemoved ${e} documents in `+(u-c)+"ms\n"+`Total Duration: ${u-l}ms`),re.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:e})))}}function Ys(e,t){return new Qs(e,t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(e,t){this.db=e,this.garbageCollector=Ys(this,t)}zn(e){const t=this.Jn(e);return this.db.getTargetCache().getTargetCount(e).next(e=>t.next(t=>e+t))}Jn(e){let t=0;return this.Wn(e,e=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Wn(e,t){return this.Yn(e,(e,n)=>t(n))}addReference(e,t,n){return Xs(e,n)}removeReference(e,t,n){return Xs(e,n)}removeTargets(e,t,n){return this.db.getTargetCache().removeTargets(e,t,n)}markPotentiallyOrphaned(e,t){return Xs(e,t)}Xn(e,t){return function(e,t){let n=!1;return Us(e).Z(r=>Ms(e,r,t).next(e=>(e&&(n=!0),re.resolve(!e)))).next(()=>n)}(e,t)}removeOrphanedDocuments(e,t){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),r=[];let i=0;return this.Yn(e,(s,o)=>{if(o<=t){const t=this.Xn(e,s).next(t=>{if(!t)return i++,n.getEntry(e,s).next(()=>(n.removeEntry(s,V.min()),$s(e).delete([0,be(s.path)])))});r.push(t)}}).next(()=>re.waitFor(r)).next(()=>n.apply(e)).next(()=>i)}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,n)}updateLimboDocument(e,t){return Xs(e,t)}Yn(e,t){const n=$s(e);let r,i=ge.ct;return n.X({index:"documentTargetsIndex"},([e,n],{path:s,sequenceNumber:o})=>{0===e?(i!==ge.ct&&t(new G(Ie(r)),i),i=o,r=s):i=ge.ct}).next(()=>{i!==ge.ct&&t(new G(Ie(r)),i)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Xs(e,t){return $s(e).put(function(e,t){return{targetId:0,path:be(e.path),sequenceNumber:t}}(t,e.currentSequenceNumber))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(){this.changes=new Mn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Vt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?re.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,n){return io(e).put(n)}removeEntry(e,t,n){return io(e).delete(function(e,t){const n=e.path.toArray();return[n.slice(0,n.length-2),n[n.length-2],qi(t),n[n.length-1]]}(t,n))}updateMetadata(e,t){return this.getMetadata(e).next(n=>(n.byteSize+=t,this.Zn(e,n)))}getEntry(e,t){let n=Vt.newInvalidDocument(t);return io(e).X({index:"documentKeyIndex",range:IDBKeyRange.only(so(t))},(e,r)=>{n=this.ts(t,r)}).next(()=>n)}es(e,t){let n={size:0,document:Vt.newInvalidDocument(t)};return io(e).X({index:"documentKeyIndex",range:IDBKeyRange.only(so(t))},(e,r)=>{n={document:this.ts(t,r),size:js(r)}}).next(()=>n)}getEntries(e,t){let n=Vn();return this.ns(e,t,(e,t)=>{const r=this.ts(e,t);n=n.insert(e,r)}).next(()=>n)}ss(e,t){let n=Vn(),r=new Je(G.comparator);return this.ns(e,t,(e,t)=>{const i=this.ts(e,t);n=n.insert(e,i),r=r.insert(e,js(t))}).next(()=>({documents:n,rs:r}))}ns(e,t,n){if(t.isEmpty())return re.resolve();let r=new et(ao);t.forEach(e=>r=r.add(e));const i=IDBKeyRange.bound(so(r.first()),so(r.last())),s=r.getIterator();let o=s.getNext();return io(e).X({index:"documentKeyIndex",range:i},(e,t,r)=>{const i=G.fromSegments([...t.prefixPath,t.collectionGroup,t.documentId]);for(;o&&ao(o,i)<0;)n(o,null),o=s.getNext();o&&o.isEqual(i)&&(n(o,t),o=s.hasNext()?s.getNext():null),o?r.G(so(o)):r.done()}).next(()=>{for(;o;)n(o,null),o=s.hasNext()?s.getNext():null})}getDocumentsMatchingQuery(e,t,n,r){const i=t.path,s=[i.popLast().toArray(),i.lastSegment(),qi(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],o=[i.popLast().toArray(),i.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return io(e).j(IDBKeyRange.bound(s,o,!0)).next(e=>{let n=Vn();for(const i of e){const e=this.ts(G.fromSegments(i.prefixPath.concat(i.collectionGroup,i.documentId)),i);e.isFoundDocument()&&(Rn(t,e)||r.has(e.key))&&(n=n.insert(e.key,e))}return n})}getAllFromCollectionGroup(e,t,n,r){let i=Vn();const s=oo(t,n),o=oo(t,X.max());return io(e).X({index:"collectionGroupIndex",range:IDBKeyRange.bound(s,o,!0)},(e,t,n)=>{const s=this.ts(G.fromSegments(t.prefixPath.concat(t.collectionGroup,t.documentId)),t);i=i.insert(s.key,s),i.size===r&&n.done()}).next(()=>i)}newChangeBuffer(e){return new no(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(e=>e.byteSize)}getMetadata(e){return ro(e).get("remoteDocumentGlobalKey").next(e=>(b(!!e),e))}Zn(e,t){return ro(e).put("remoteDocumentGlobalKey",t)}ts(e,t){if(t){const e=Ui(this.serializer,t);if(!e.isNoDocument()||!e.version.isEqual(V.min()))return e}return Vt.newInvalidDocument(e)}}function to(e){return new eo(e)}class no extends Zs{constructor(e,t){super(),this.os=e,this.trackRemovals=t,this.us=new Mn(e=>e.toString(),(e,t)=>e.isEqual(t))}applyChanges(e){const t=[];let n=0,r=new et((e,t)=>j(e.canonicalString(),t.canonicalString()));return this.changes.forEach((i,s)=>{const o=this.us.get(i);if(t.push(this.os.removeEntry(e,i,o.readTime)),s.isValidDocument()){const a=Bi(this.os.serializer,s);r=r.add(i.path.popLast());const c=js(a);n+=c-o.size,t.push(this.os.addEntry(e,i,a))}else if(n-=o.size,this.trackRemovals){const n=Bi(this.os.serializer,s.convertToNoDocument(V.min()));t.push(this.os.addEntry(e,i,n))}}),r.forEach(n=>{t.push(this.os.indexManager.addToCollectionParentIndex(e,n))}),t.push(this.os.updateMetadata(e,n)),re.waitFor(t)}getFromCache(e,t){return this.os.es(e,t).next(e=>(this.us.set(t,{size:e.size,readTime:e.document.readTime}),e.document))}getAllFromCache(e,t){return this.os.ss(e,t).next(({documents:e,rs:t})=>(t.forEach((t,n)=>{this.us.set(t,{size:n,readTime:e.get(t).readTime})}),e))}}function ro(e){return He(e,"remoteDocumentGlobal")}function io(e){return He(e,"remoteDocumentsV14")}function so(e){const t=e.path.toArray();return[t.slice(0,t.length-2),t[t.length-2],t[t.length-1]]}function oo(e,t){const n=t.documentKey.path.toArray();return[e,qi(t.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function ao(e,t){const n=e.path.toArray(),r=t.path.toArray();let i=0;for(let s=0;s<n.length-2&&s<r.length-2;++s)if(i=j(n[s],r[s]),i)return i;return i=j(n.length,r.length),i||(i=j(n[n.length-2],r[r.length-2]),i||j(n[n.length-1],r[r.length-1]))
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class co{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(r=>(n=r,this.remoteDocumentCache.getEntry(e,t))).next(e=>(null!==n&&wr(n.mutation,e,rt.empty(),F.now()),e))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.getLocalViewOfDocuments(e,t,Wn()).next(()=>t))}getLocalViewOfDocuments(e,t,n=Wn()){const r=zn();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,n).next(e=>{let t=Bn();return e.forEach((e,n)=>{t=t.insert(e,n.overlayedDocument)}),t}))}getOverlayedDocuments(e,t){const n=zn();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,Wn()))}populateOverlays(e,t,n){const r=[];return n.forEach(e=>{t.has(e)||r.push(e)}),this.documentOverlayCache.getOverlays(e,r).next(e=>{e.forEach((e,n)=>{t.set(e,n)})})}computeViews(e,t,n,r){let i=Vn();const s=$n(),o=$n();return t.forEach((e,t)=>{const o=n.get(t.key);r.has(t.key)&&(void 0===o||o.mutation instanceof Tr)?i=i.insert(t.key,t):void 0!==o?(s.set(t.key,o.mutation.getFieldMask()),wr(o.mutation,t,o.mutation.getFieldMask(),F.now())):s.set(t.key,rt.empty())}),this.recalculateAndSaveOverlays(e,i).next(e=>(e.forEach((e,t)=>s.set(e,t)),t.forEach((e,t)=>{var n;return o.set(e,new co(t,null!==(n=s.get(e))&&void 0!==n?n:null))}),o))}recalculateAndSaveOverlays(e,t){const n=$n();let r=new Je((e,t)=>e-t),i=Wn();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(e=>{for(const i of e)i.keys().forEach(e=>{const s=t.get(e);if(null===s)return;let o=n.get(e)||rt.empty();o=i.applyToLocalView(s,o),n.set(e,o);const a=(r.get(i.batchId)||Wn()).add(e);r=r.insert(i.batchId,a)})}).next(()=>{const s=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,c=r.value,u=Gn();c.forEach(e=>{if(!i.has(e)){const r=yr(t.get(e),n.get(e));null!==r&&u.set(e,r),i=i.add(e)}}),s.push(this.documentOverlayCache.saveOverlays(e,a,u))}return re.waitFor(s)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.recalculateAndSaveOverlays(e,t))}getDocumentsMatchingQuery(e,t,n){return function(e){return G.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Sn(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n):this.getDocumentsMatchingCollectionQuery(e,t,n)}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next(i=>{const s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-i.size):re.resolve(zn());let o=-1,a=i;return s.next(t=>re.forEach(t,(t,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),i.get(t)?re.resolve():this.remoteDocumentCache.getEntry(e,t).next(e=>{a=a.insert(t,e)}))).next(()=>this.populateOverlays(e,t,i)).next(()=>this.computeViews(e,a,t,Wn())).next(e=>({batchId:o,changes:qn(e)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new G(t)).next(e=>{let t=Bn();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t})}getDocumentsMatchingCollectionGroupQuery(e,t,n){const r=t.collectionGroup;let i=Bn();return this.indexManager.getCollectionParents(e,r).next(s=>re.forEach(s,s=>{const o=function(e,t){return new bn(t,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(t,s.child(r));return this.getDocumentsMatchingCollectionQuery(e,o,n).next(e=>{e.forEach((e,t)=>{i=i.insert(e,t)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,t,n){let r;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next(i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,r))).next(e=>{r.forEach((t,n)=>{const r=n.getKey();null===e.get(r)&&(e=e.insert(r,Vt.newInvalidDocument(r)))});let n=Bn();return e.forEach((e,i)=>{const s=r.get(e);void 0!==s&&wr(s.mutation,i,rt.empty(),F.now()),Rn(t,i)&&(n=n.insert(e,i))}),n})}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(e){this.serializer=e,this.cs=new Map,this.hs=new Map}getBundleMetadata(e,t){return re.resolve(this.cs.get(t))}saveBundleMetadata(e,t){var n;return this.cs.set(t.id,{id:(n=t).id,version:n.version,createTime:ui(n.createTime)}),re.resolve()}getNamedQuery(e,t){return re.resolve(this.hs.get(t))}saveNamedQuery(e,t){return this.hs.set(t.name,function(e){return{name:e.name,query:Wi(e.bundledQuery),readTime:ui(e.readTime)}}(t)),re.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{constructor(){this.overlays=new Je(G.comparator),this.ls=new Map}getOverlay(e,t){return re.resolve(this.overlays.get(t))}getOverlays(e,t){const n=zn();return re.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&n.set(t,e)})).next(()=>n)}saveOverlays(e,t,n){return n.forEach((n,r)=>{this.we(e,t,r)}),re.resolve()}removeOverlaysForBatchId(e,t,n){const r=this.ls.get(n);return void 0!==r&&(r.forEach(e=>this.overlays=this.overlays.remove(e)),this.ls.delete(n)),re.resolve()}getOverlaysForCollection(e,t,n){const r=zn(),i=t.length+1,s=new G(t.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const e=o.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===i&&e.largestBatchId>n&&r.set(e.getKey(),e)}return re.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new Je((e,t)=>e-t);const s=this.overlays.getIterator();for(;s.hasNext();){const e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=i.get(e.largestBatchId);null===t&&(t=zn(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const o=zn(),a=i.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach((e,t)=>o.set(e,t)),o.size()>=r)break;return re.resolve(o)}we(e,t,n){const r=this.overlays.get(n.key);if(null!==r){const e=this.ls.get(r.largestBatchId).delete(n.key);this.ls.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new Dr(t,n));let i=this.ls.get(t);void 0===i&&(i=Wn(),this.ls.set(t,i)),this.ls.set(t,i.add(n.key))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo{constructor(){this.fs=new et(po.ds),this.ws=new et(po._s)}isEmpty(){return this.fs.isEmpty()}addReference(e,t){const n=new po(e,t);this.fs=this.fs.add(n),this.ws=this.ws.add(n)}gs(e,t){e.forEach(e=>this.addReference(e,t))}removeReference(e,t){this.ys(new po(e,t))}ps(e,t){e.forEach(e=>this.removeReference(e,t))}Is(e){const t=new G(new B([])),n=new po(t,e),r=new po(t,e+1),i=[];return this.ws.forEachInRange([n,r],e=>{this.ys(e),i.push(e.key)}),i}Ts(){this.fs.forEach(e=>this.ys(e))}ys(e){this.fs=this.fs.delete(e),this.ws=this.ws.delete(e)}Es(e){const t=new G(new B([])),n=new po(t,e),r=new po(t,e+1);let i=Wn();return this.ws.forEachInRange([n,r],e=>{i=i.add(e.key)}),i}containsKey(e){const t=new po(e,0),n=this.fs.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class po{constructor(e,t){this.key=e,this.As=t}static ds(e,t){return G.comparator(e.key,t.key)||j(e.As,t.As)}static _s(e,t){return j(e.As,t.As)||G.comparator(e.key,t.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.vs=1,this.Rs=new et(po.ds)}checkEmpty(e){return re.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){const i=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new xr(i,t,n,r);this.mutationQueue.push(s);for(const o of r)this.Rs=this.Rs.add(new po(o.key,i)),this.indexManager.addToCollectionParentIndex(e,o.key.path.popLast());return re.resolve(s)}lookupMutationBatch(e,t){return re.resolve(this.Ps(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.bs(n),i=r<0?0:r;return re.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return re.resolve(0===this.mutationQueue.length?-1:this.vs-1)}getAllMutationBatches(e){return re.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new po(t,0),r=new po(t,Number.POSITIVE_INFINITY),i=[];return this.Rs.forEachInRange([n,r],e=>{const t=this.Ps(e.As);i.push(t)}),re.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new et(j);return t.forEach(e=>{const t=new po(e,0),r=new po(e,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([t,r],e=>{n=n.add(e.As)})}),re.resolve(this.Vs(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let i=n;G.isDocumentKey(i)||(i=i.child(""));const s=new po(new G(i),0);let o=new et(j);return this.Rs.forEachWhile(e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(o=o.add(e.As)),!0)},s),re.resolve(this.Vs(o))}Vs(e){const t=[];return e.forEach(e=>{const n=this.Ps(e);null!==n&&t.push(n)}),t}removeMutationBatch(e,t){b(0===this.Ss(t.batchId,"removed")),this.mutationQueue.shift();let n=this.Rs;return re.forEach(t.mutations,r=>{const i=new po(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.Rs=n})}Cn(e){}containsKey(e,t){const n=new po(t,0),r=this.Rs.firstAfterOrEqual(n);return re.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,re.resolve()}Ss(e,t){return this.bs(e)}bs(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}Ps(e){const t=this.bs(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(e){this.Ds=e,this.docs=new Je(G.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,r=this.docs.get(n),i=r?r.size:0,s=this.Ds(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return re.resolve(n?n.document.mutableCopy():Vt.newInvalidDocument(t))}getEntries(e,t){let n=Vn();return t.forEach(e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():Vt.newInvalidDocument(e))}),re.resolve(n)}getDocumentsMatchingQuery(e,t,n,r){let i=Vn();const s=t.path,o=new G(s.child("")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:e,value:{document:o}}=a.getNext();if(!s.isPrefixOf(e.path))break;e.path.length>s.length+1||Z(J(o),n)<=0||(r.has(o.key)||Rn(t,o))&&(i=i.insert(o.key,o.mutableCopy()))}return re.resolve(i)}getAllFromCollectionGroup(e,t,n,r){y()}Cs(e,t){return re.forEach(this.docs,e=>t(e))}newChangeBuffer(e){return new vo(this)}getSize(e){return re.resolve(this.size)}}class vo extends Zs{constructor(e){super(),this.os=e}applyChanges(e){const t=[];return this.changes.forEach((n,r)=>{r.isValidDocument()?t.push(this.os.addEntry(e,r)):this.os.removeEntry(n)}),re.waitFor(t)}getFromCache(e,t){return this.os.getEntry(e,t)}getAllFromCache(e,t){return this.os.getEntries(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(e){this.persistence=e,this.xs=new Mn(e=>fn(e),pn),this.lastRemoteSnapshotVersion=V.min(),this.highestTargetId=0,this.Ns=0,this.ks=new fo,this.targetCount=0,this.Ms=Bs.kn()}forEachTarget(e,t){return this.xs.forEach((e,n)=>t(n)),re.resolve()}getLastRemoteSnapshotVersion(e){return re.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return re.resolve(this.Ns)}allocateTargetId(e){return this.highestTargetId=this.Ms.next(),re.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Ns&&(this.Ns=t),re.resolve()}Fn(e){this.xs.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Ms=new Bs(t),this.highestTargetId=t),e.sequenceNumber>this.Ns&&(this.Ns=e.sequenceNumber)}addTargetData(e,t){return this.Fn(t),this.targetCount+=1,re.resolve()}updateTargetData(e,t){return this.Fn(t),re.resolve()}removeTargetData(e,t){return this.xs.delete(t.target),this.ks.Is(t.targetId),this.targetCount-=1,re.resolve()}removeTargets(e,t,n){let r=0;const i=[];return this.xs.forEach((s,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.xs.delete(s),i.push(this.removeMatchingKeysForTargetId(e,o.targetId)),r++)}),re.waitFor(i).next(()=>r)}getTargetCount(e){return re.resolve(this.targetCount)}getTargetData(e,t){const n=this.xs.get(t)||null;return re.resolve(n)}addMatchingKeys(e,t,n){return this.ks.gs(t,n),re.resolve()}removeMatchingKeys(e,t,n){this.ks.ps(t,n);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach(t=>{i.push(r.markPotentiallyOrphaned(e,t))}),re.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.ks.Is(t),re.resolve()}getMatchingKeysForTargetId(e,t){const n=this.ks.Es(t);return re.resolve(n)}containsKey(e,t){return re.resolve(this.ks.containsKey(t))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(e,t){this.$s={},this.overlays={},this.Os=new ge(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=e(this),this.Bs=new yo(this),this.indexManager=new Es,this.remoteDocumentCache=function(e){return new mo(e)}(e=>this.referenceDelegate.Ls(e)),this.serializer=new Vi(t),this.qs=new lo(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new ho,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.$s[e.toKey()];return n||(n=new go(t,this.referenceDelegate),this.$s[e.toKey()]=n),n}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(e,t,n){p("MemoryPersistence","Starting transaction:",e);const r=new wo(this.Os.next());return this.referenceDelegate.Us(),n(r).next(e=>this.referenceDelegate.Ks(r).next(()=>e)).toPromise().then(e=>(r.raiseOnCommittedEvent(),e))}Gs(e,t){return re.or(Object.values(this.$s).map(n=>()=>n.containsKey(e,t)))}}class wo extends te{constructor(e){super(),this.currentSequenceNumber=e}}class _o{constructor(e){this.persistence=e,this.Qs=new fo,this.js=null}static zs(e){return new _o(e)}get Ws(){if(this.js)return this.js;throw y()}addReference(e,t,n){return this.Qs.addReference(n,t),this.Ws.delete(n.toString()),re.resolve()}removeReference(e,t,n){return this.Qs.removeReference(n,t),this.Ws.add(n.toString()),re.resolve()}markPotentiallyOrphaned(e,t){return this.Ws.add(t.toString()),re.resolve()}removeTarget(e,t){this.Qs.Is(t.targetId).forEach(e=>this.Ws.add(e.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(e=>{e.forEach(e=>this.Ws.add(e.toString()))}).next(()=>n.removeTargetData(e,t))}Us(){this.js=new Set}Ks(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return re.forEach(this.Ws,n=>{const r=G.fromPath(n);return this.Hs(e,r).next(e=>{e||t.removeEntry(r,V.min())})}).next(()=>(this.js=null,t.apply(e)))}updateLimboDocument(e,t){return this.Hs(e,t).next(e=>{e?this.Ws.delete(t.toString()):this.Ws.add(t.toString())})}Ls(e){return 0}Hs(e,t){return re.or([()=>re.resolve(this.Qs.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Gs(e,t)])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(e){this.serializer=e}O(e,t,n,r){const i=new ie("createOrUpgrade",t);n<1&&r>=1&&(function(e){e.createObjectStore("owner")}(e),function(e){e.createObjectStore("mutationQueues",{keyPath:"userId"}),e.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Ee,{unique:!0}),e.createObjectStore("documentMutations")}(e),Eo(e),function(e){e.createObjectStore("remoteDocuments")}(e));let s=re.resolve();return n<3&&r>=3&&(0!==n&&(function(e){e.deleteObjectStore("targetDocuments"),e.deleteObjectStore("targets"),e.deleteObjectStore("targetGlobal")}(e),Eo(e)),s=s.next(()=>function(e){const t=e.store("targetGlobal"),n={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:V.min().toTimestamp(),targetCount:0};return t.put("targetGlobalKey",n)}(i))),n<4&&r>=4&&(0!==n&&(s=s.next(()=>function(e,t){return t.store("mutations").j().next(n=>{e.deleteObjectStore("mutations"),e.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Ee,{unique:!0});const r=t.store("mutations"),i=n.map(e=>r.put(e));return re.waitFor(i)})}(e,i))),s=s.next(()=>{!function(e){e.createObjectStore("clientMetadata",{keyPath:"clientId"})}(e)})),n<5&&r>=5&&(s=s.next(()=>this.Ys(i))),n<6&&r>=6&&(s=s.next(()=>(function(e){e.createObjectStore("remoteDocumentGlobal")}(e),this.Xs(i)))),n<7&&r>=7&&(s=s.next(()=>this.Zs(i))),n<8&&r>=8&&(s=s.next(()=>this.ti(e,i))),n<9&&r>=9&&(s=s.next(()=>{!function(e){e.objectStoreNames.contains("remoteDocumentChanges")&&e.deleteObjectStore("remoteDocumentChanges")}(e)})),n<10&&r>=10&&(s=s.next(()=>this.ei(i))),n<11&&r>=11&&(s=s.next(()=>{!function(e){e.createObjectStore("bundles",{keyPath:"bundleId"})}(e),function(e){e.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),n<12&&r>=12&&(s=s.next(()=>{!function(e){const t=e.createObjectStore("documentOverlays",{keyPath:Fe});t.createIndex("collectionPathOverlayIndex",Ve,{unique:!1}),t.createIndex("collectionGroupOverlayIndex",Ue,{unique:!1})}(e)})),n<13&&r>=13&&(s=s.next(()=>function(e){const t=e.createObjectStore("remoteDocumentsV14",{keyPath:ke});t.createIndex("documentKeyIndex",Ae),t.createIndex("collectionGroupIndex",Ce)}(e)).next(()=>this.ni(e,i)).next(()=>e.deleteObjectStore("remoteDocuments"))),n<14&&r>=14&&(s=s.next(()=>this.si(e,i))),n<15&&r>=15&&(s=s.next(()=>function(e){e.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),e.createObjectStore("indexState",{keyPath:Pe}).createIndex("sequenceNumberIndex",je,{unique:!1}),e.createObjectStore("indexEntries",{keyPath:Le}).createIndex("documentKeyIndex",Me,{unique:!1})}(e))),s}Xs(e){let t=0;return e.store("remoteDocuments").X((e,n)=>{t+=js(n)}).next(()=>{const n={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",n)})}Ys(e){const t=e.store("mutationQueues"),n=e.store("mutations");return t.j().next(t=>re.forEach(t,t=>{const r=IDBKeyRange.bound([t.userId,-1],[t.userId,t.lastAcknowledgedBatchId]);return n.j("userMutationsIndex",r).next(n=>re.forEach(n,n=>{b(n.userId===t.userId);const r=$i(this.serializer,n);return Ps(e,t.userId,r).next(()=>{})}))}))}Zs(e){const t=e.store("targetDocuments"),n=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(e=>{const r=[];return n.X((n,i)=>{const s=new B(n),o=function(e){return[0,be(e)]}(s);r.push(t.get(o).next(n=>n?re.resolve():(n=>t.put({targetId:0,path:be(n),sequenceNumber:e.highestListenSequenceNumber}))(s)))}).next(()=>re.waitFor(r))})}ti(e,t){e.createObjectStore("collectionParents",{keyPath:Re});const n=t.store("collectionParents"),r=new Ts,i=e=>{if(r.add(e)){const t=e.lastSegment(),r=e.popLast();return n.put({collectionId:t,parent:be(r)})}};return t.store("remoteDocuments").X({Y:!0},(e,t)=>{const n=new B(e);return i(n.popLast())}).next(()=>t.store("documentMutations").X({Y:!0},([e,t,n],r)=>{const s=Ie(t);return i(s.popLast())}))}ei(e){const t=e.store("targets");return t.X((e,n)=>{const r=Ki(n),i=Hi(this.serializer,r);return t.put(i)})}ni(e,t){const n=t.store("remoteDocuments"),r=[];return n.X((e,n)=>{const i=t.store("remoteDocumentsV14"),s=(o=n,o.document?new G(B.fromString(o.document.name).popFirst(5)):o.noDocument?G.fromSegments(o.noDocument.path):o.unknownDocument?G.fromSegments(o.unknownDocument.path):y()).path.toArray();var o;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a={prefixPath:s.slice(0,s.length-2),collectionGroup:s[s.length-2],documentId:s[s.length-1],readTime:n.readTime||[0,0],unknownDocument:n.unknownDocument,noDocument:n.noDocument,document:n.document,hasCommittedMutations:!!n.hasCommittedMutations};r.push(i.put(a))}).next(()=>re.waitFor(r))}si(e,t){const n=t.store("mutations"),r=to(this.serializer),i=new bo(_o.zs,this.serializer.fe);return n.j().next(e=>{const n=new Map;return e.forEach(e=>{var t;let r=null!==(t=n.get(e.userId))&&void 0!==t?t:Wn();$i(this.serializer,e).keys().forEach(e=>r=r.add(e)),n.set(e.userId,r)}),re.forEach(n,(e,n)=>{const s=new u(n),o=ts.de(this.serializer,s),a=i.getIndexManager(s),c=Ls.de(s,this.serializer,a,i.referenceDelegate);return new uo(r,c,o,a).recalculateAndSaveOverlaysForDocumentKeys(new Ke(t,ge.ct),e).next()})})}}function Eo(e){e.createObjectStore("targetDocuments",{keyPath:Ne}).createIndex("documentTargetsIndex",De,{unique:!0}),e.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",xe,{unique:!0}),e.createObjectStore("targetGlobal")}const To="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class So{constructor(e,t,n,r,i,s,o,a,c,u,l=15){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=n,this.ii=i,this.window=s,this.document=o,this.ri=c,this.oi=u,this.ui=l,this.Os=null,this.Fs=!1,this.isPrimary=!1,this.networkEnabled=!0,this.ci=null,this.inForeground=!1,this.ai=null,this.hi=null,this.li=Number.NEGATIVE_INFINITY,this.fi=e=>Promise.resolve(),!So.D())throw new E(I.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new Js(this,r),this.di=t+"main",this.serializer=new Vi(a),this.wi=new se(this.di,this.ui,new Io(this.serializer)),this.Bs=new qs(this.referenceDelegate,this.serializer),this.remoteDocumentCache=to(this.serializer),this.qs=new Xi,this.window&&this.window.localStorage?this._i=this.window.localStorage:(this._i=null,!1===u&&g("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.mi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new E(I.FAILED_PRECONDITION,To);return this.gi(),this.yi(),this.pi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Bs.getHighestSequenceNumber(e))}).then(e=>{this.Os=new ge(e,this.ri)}).then(()=>{this.Fs=!0}).catch(e=>(this.wi&&this.wi.close(),Promise.reject(e)))}Ii(e){return this.fi=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.wi.B(async t=>{null===t.newVersion&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.ii.enqueueAndForget(async()=>{this.started&&await this.mi()}))}mi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>ko(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.Ti(e).next(e=>{e||(this.isPrimary=!1,this.ii.enqueueRetryable(()=>this.fi(!1)))})}).next(()=>this.Ei(e)).next(t=>this.isPrimary&&!t?this.Ai(e).next(()=>!1):!!t&&this.vi(e).next(()=>!0))).catch(e=>{if(ce(e))return p("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return p("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.ii.enqueueRetryable(()=>this.fi(e)),this.isPrimary=e})}Ti(e){return Oo(e).get("owner").next(e=>re.resolve(this.Ri(e)))}Pi(e){return ko(e).delete(this.clientId)}async bi(){if(this.isPrimary&&!this.Vi(this.li,18e5)){this.li=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",e=>{const t=He(e,"clientMetadata");return t.j().next(e=>{const n=this.Si(e,18e5),r=e.filter(e=>-1===n.indexOf(e));return re.forEach(r,e=>t.delete(e.clientId)).next(()=>r)})}).catch(()=>[]);if(this._i)for(const t of e)this._i.removeItem(this.Di(t.clientId))}}pi(){this.hi=this.ii.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.mi().then(()=>this.bi()).then(()=>this.pi()))}Ri(e){return!!e&&e.ownerId===this.clientId}Ei(e){return this.oi?re.resolve(!0):Oo(e).get("owner").next(t=>{if(null!==t&&this.Vi(t.leaseTimestampMs,5e3)&&!this.Ci(t.ownerId)){if(this.Ri(t)&&this.networkEnabled)return!0;if(!this.Ri(t)){if(!t.allowTabSynchronization)throw new E(I.FAILED_PRECONDITION,To);return!1}}return!(!this.networkEnabled||!this.inForeground)||ko(e).j().next(e=>void 0===this.Si(e,5e3).find(e=>{if(this.clientId!==e.clientId){const t=!this.networkEnabled&&e.networkEnabled,n=!this.inForeground&&e.inForeground,r=this.networkEnabled===e.networkEnabled;if(t||n&&r)return!0}return!1}))}).next(e=>(this.isPrimary!==e&&p("IndexedDbPersistence",`Client ${e?"is":"is not"} eligible for a primary lease.`),e))}async shutdown(){this.Fs=!1,this.xi(),this.hi&&(this.hi.cancel(),this.hi=null),this.Ni(),this.ki(),await this.wi.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const t=new Ke(e,ge.ct);return this.Ai(t).next(()=>this.Pi(t))}),this.wi.close(),this.Mi()}Si(e,t){return e.filter(e=>this.Vi(e.updateTimeMs,t)&&!this.Ci(e.clientId))}$i(){return this.runTransaction("getActiveClients","readonly",e=>ko(e).j().next(e=>this.Si(e,18e5).map(e=>e.clientId)))}get started(){return this.Fs}getMutationQueue(e,t){return Ls.de(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new Os(e,this.serializer.fe.databaseId)}getDocumentOverlayCache(e){return ts.de(this.serializer,e)}getBundleCache(){return this.qs}runTransaction(e,t,n){p("IndexedDbPersistence","Starting transaction:",e);const r="readonly"===t?"readonly":"readwrite",i=15===(s=this.ui)?$e:14===s?Ge:13===s?ze:12===s?qe:11===s?Be:void y();var s;let o;return this.wi.runTransaction(e,r,i,r=>(o=new Ke(r,this.Os?this.Os.next():ge.ct),"readwrite-primary"===t?this.Ti(o).next(e=>!!e||this.Ei(o)).next(t=>{if(!t)throw g(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.ii.enqueueRetryable(()=>this.fi(!1)),new E(I.FAILED_PRECONDITION,ee);return n(o)}).next(e=>this.vi(o).next(()=>e)):this.Oi(o).next(()=>n(o)))).then(e=>(o.raiseOnCommittedEvent(),e))}Oi(e){return Oo(e).get("owner").next(e=>{if(null!==e&&this.Vi(e.leaseTimestampMs,5e3)&&!this.Ci(e.ownerId)&&!this.Ri(e)&&!(this.oi||this.allowTabSynchronization&&e.allowTabSynchronization))throw new E(I.FAILED_PRECONDITION,To)})}vi(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Oo(e).put("owner",t)}static D(){return se.D()}Ai(e){const t=Oo(e);return t.get("owner").next(e=>this.Ri(e)?(p("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):re.resolve())}Vi(e,t){const n=Date.now();return!(e<n-t)&&(!(e>n)||(g(`Detected an update time that is in the future: ${e} > ${n}`),!1))}gi(){null!==this.document&&"function"==typeof this.document.addEventListener&&(this.ai=()=>{this.ii.enqueueAndForget(()=>(this.inForeground="visible"===this.document.visibilityState,this.mi()))},this.document.addEventListener("visibilitychange",this.ai),this.inForeground="visible"===this.document.visibilityState)}Ni(){this.ai&&(this.document.removeEventListener("visibilitychange",this.ai),this.ai=null)}yi(){var e;"function"==typeof(null===(e=this.window)||void 0===e?void 0:e.addEventListener)&&(this.ci=()=>{this.xi();const e=/(?:Version|Mobile)\/1[456]/;Object(o["z"])()&&(navigator.appVersion.match(e)||navigator.userAgent.match(e))&&this.ii.enterRestrictedMode(!0),this.ii.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.ci))}ki(){this.ci&&(this.window.removeEventListener("pagehide",this.ci),this.ci=null)}Ci(e){var t;try{const n=null!==(null===(t=this._i)||void 0===t?void 0:t.getItem(this.Di(e)));return p("IndexedDbPersistence",`Client '${e}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(e){return g("IndexedDbPersistence","Failed to get zombied client id.",e),!1}}xi(){if(this._i)try{this._i.setItem(this.Di(this.clientId),String(Date.now()))}catch(e){g("Failed to set zombie client id.",e)}}Mi(){if(this._i)try{this._i.removeItem(this.Di(this.clientId))}catch(e){}}Di(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Oo(e){return He(e,"owner")}function ko(e){return He(e,"clientMetadata")}function Ao(e,t){let n=e.projectId;return e.isDefaultDatabase||(n+="."+e.database),"firestore/"+t+"/"+n+"/"
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Co{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Fi=n,this.Bi=r}static Li(e,t){let n=Wn(),r=Wn();for(const i of t.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Co(e,t.fromCache,n,r)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(){this.qi=!1}initialize(e,t){this.Ui=e,this.indexManager=t,this.qi=!0}getDocumentsMatchingQuery(e,t,n,r){return this.Ki(e,t).next(i=>i||this.Gi(e,t,r,n)).next(n=>n||this.Qi(e,t))}Ki(e,t){if(In(t))return re.resolve(null);let n=kn(t);return this.indexManager.getIndexType(e,n).next(r=>0===r?null:(null!==t.limit&&1===r&&(t=Cn(t,null,"F"),n=kn(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next(r=>{const i=Wn(...r);return this.Ui.getDocuments(e,i).next(r=>this.indexManager.getMinOffset(e,n).next(n=>{const s=this.ji(t,r);return this.zi(t,s,i,n.readTime)?this.Ki(e,Cn(t,null,"F")):this.Wi(e,s,t,n)}))})))}Gi(e,t,n,r){return In(t)||r.isEqual(V.min())?this.Qi(e,t):this.Ui.getDocuments(e,n).next(i=>{const o=this.ji(t,i);return this.zi(t,o,n,r)?this.Qi(e,t):(d()<=s["a"].DEBUG&&p("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Dn(t)),this.Wi(e,o,t,Y(r,-1)))})}ji(e,t){let n=new et(jn(e));return t.forEach((t,r)=>{Rn(e,r)&&(n=n.add(r))}),n}zi(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;const i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Qi(e,t){return d()<=s["a"].DEBUG&&p("QueryEngine","Using full collection scan to execute query:",Dn(t)),this.Ui.getDocumentsMatchingQuery(e,t,X.min())}Wi(e,t,n,r){return this.Ui.getDocumentsMatchingQuery(e,n,r).next(e=>(t.forEach(t=>{e=e.insert(t.key,t)}),e))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No{constructor(e,t,n,r){this.persistence=e,this.Hi=t,this.serializer=r,this.Ji=new Je(j),this.Yi=new Mn(e=>fn(e),pn),this.Xi=new Map,this.Zi=e.getRemoteDocumentCache(),this.Bs=e.getTargetCache(),this.qs=e.getBundleCache(),this.tr(n)}tr(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new uo(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ji))}}function Do(e,t,n,r){return new No(e,t,n,r)}async function Ro(e,t){const n=_(e);return await n.persistence.runTransaction("Handle user change","readonly",e=>{let r;return n.mutationQueue.getAllMutationBatches(e).next(i=>(r=i,n.tr(t),n.mutationQueue.getAllMutationBatches(e))).next(t=>{const i=[],s=[];let o=Wn();for(const e of r){i.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){s.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return n.localDocuments.getDocuments(e,o).next(e=>({er:e,removedBatchIds:i,addedBatchIds:s}))})})}function Po(e,t){const n=_(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",e=>{const r=t.batch.keys(),i=n.Zi.newChangeBuffer({trackRemovals:!0});return function(e,t,n,r){const i=n.batch,s=i.keys();let o=re.resolve();return s.forEach(e=>{o=o.next(()=>r.getEntry(t,e)).next(t=>{const s=n.docVersions.get(e);b(null!==s),t.version.compareTo(s)<0&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))})}),o.next(()=>e.mutationQueue.removeMutationBatch(t,i))}(n,e,t,i).next(()=>i.apply(e)).next(()=>n.mutationQueue.performConsistencyCheck(e)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=Wn();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t))).next(()=>n.localDocuments.getDocuments(e,r))})}function jo(e){const t=_(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Bs.getLastRemoteSnapshotVersion(e))}function Lo(e,t){const n=_(e),r=t.snapshotVersion;let i=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",e=>{const s=n.Zi.newChangeBuffer({trackRemovals:!0});i=n.Ji;const o=[];t.targetChanges.forEach((s,a)=>{const c=i.get(a);if(!c)return;o.push(n.Bs.removeMatchingKeys(e,s.removedDocuments,a).next(()=>n.Bs.addMatchingKeys(e,s.addedDocuments,a)));let u=c.withSequenceNumber(e.currentSequenceNumber);null!==t.targetMismatches.get(a)?u=u.withResumeToken(ot.EMPTY_BYTE_STRING,V.min()).withLastLimboFreeSnapshotVersion(V.min()):s.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(s.resumeToken,r)),i=i.insert(a,u),function(e,t,n){return 0===e.resumeToken.approximateByteSize()||(t.snapshotVersion.toMicroseconds()-e.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(c,u,s)&&o.push(n.Bs.updateTargetData(e,u))});let a=Vn(),c=Wn();if(t.documentUpdates.forEach(r=>{t.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))}),o.push(Mo(e,s,t.documentUpdates).next(e=>{a=e.nr,c=e.sr})),!r.isEqual(V.min())){const t=n.Bs.getLastRemoteSnapshotVersion(e).next(t=>n.Bs.setTargetsMetadata(e,e.currentSequenceNumber,r));o.push(t)}return re.waitFor(o).next(()=>s.apply(e)).next(()=>n.localDocuments.getLocalViewOfDocuments(e,a,c)).next(()=>a)}).then(e=>(n.Ji=i,e))}function Mo(e,t,n){let r=Wn(),i=Wn();return n.forEach(e=>r=r.add(e)),t.getEntries(e,r).next(e=>{let r=Vn();return n.forEach((n,s)=>{const o=e.get(n);s.isFoundDocument()!==o.isFoundDocument()&&(i=i.add(n)),s.isNoDocument()&&s.version.isEqual(V.min())?(t.removeEntry(n,s.readTime),r=r.insert(n,s)):!o.isValidDocument()||s.version.compareTo(o.version)>0||0===s.version.compareTo(o.version)&&o.hasPendingWrites?(t.addEntry(s),r=r.insert(n,s)):p("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",s.version)}),{nr:r,sr:i}})}function Fo(e,t){const n=_(e);return n.persistence.runTransaction("Get next mutation batch","readonly",e=>(void 0===t&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(e,t)))}function Vo(e,t){const n=_(e);return n.persistence.runTransaction("Allocate target","readwrite",e=>{let r;return n.Bs.getTargetData(e,t).next(i=>i?(r=i,re.resolve(r)):n.Bs.allocateTargetId(e).next(i=>(r=new Fi(t,i,"TargetPurposeListen",e.currentSequenceNumber),n.Bs.addTargetData(e,r).next(()=>r))))}).then(e=>{const r=n.Ji.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(e.targetId,e),n.Yi.set(t,e.targetId)),e})}async function Uo(e,t,n){const r=_(e),i=r.Ji.get(t),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,e=>r.persistence.referenceDelegate.removeTarget(e,i))}catch(e){if(!ce(e))throw e;p("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}r.Ji=r.Ji.remove(t),r.Yi.delete(i.target)}function Bo(e,t,n){const r=_(e);let i=V.min(),s=Wn();return r.persistence.runTransaction("Execute query","readonly",e=>function(e,t,n){const r=_(e),i=r.Yi.get(n);return void 0!==i?re.resolve(r.Ji.get(i)):r.Bs.getTargetData(t,n)}(r,e,kn(t)).next(t=>{if(t)return i=t.lastLimboFreeSnapshotVersion,r.Bs.getMatchingKeysForTargetId(e,t.targetId).next(e=>{s=e})}).next(()=>r.Hi.getDocumentsMatchingQuery(e,t,n?i:V.min(),n?s:Wn())).next(e=>(Go(r,Pn(t),e),{documents:e,ir:s})))}function qo(e,t){const n=_(e),r=_(n.Bs),i=n.Ji.get(t);return i?Promise.resolve(i.target):n.persistence.runTransaction("Get target data","readonly",e=>r.le(e,t).next(e=>e?e.target:null))}function zo(e,t){const n=_(e),r=n.Xi.get(t)||V.min();return n.persistence.runTransaction("Get new document changes","readonly",e=>n.Zi.getAllFromCollectionGroup(e,t,Y(r,-1),Number.MAX_SAFE_INTEGER)).then(e=>(Go(n,t,e),e))}function Go(e,t,n){let r=e.Xi.get(t)||V.min();n.forEach((e,t)=>{t.readTime.compareTo(r)>0&&(r=t.readTime)}),e.Xi.set(t,r)}async function $o(e,t,n,r){const i=_(e);let s=Wn(),o=Vn();for(const u of n){const e=t.rr(u.metadata.name);u.document&&(s=s.add(e));const n=t.ur(u);n.setReadTime(t.cr(u.metadata.readTime)),o=o.insert(e,n)}const a=i.Zi.newChangeBuffer({trackRemovals:!0}),c=await Vo(i,function(e){return kn(_n(B.fromString("__bundle__/docs/"+e)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",e=>Mo(e,a,o).next(t=>(a.apply(e),t)).next(t=>i.Bs.removeMatchingKeysForTargetId(e,c.targetId).next(()=>i.Bs.addMatchingKeys(e,s,c.targetId)).next(()=>i.localDocuments.getLocalViewOfDocuments(e,t.nr,t.sr)).next(()=>t.nr)))}async function Ko(e,t,n=Wn()){const r=await Vo(e,kn(Wi(t.bundledQuery))),i=_(e);return i.persistence.runTransaction("Save named query","readwrite",e=>{const s=ui(t.readTime);if(r.snapshotVersion.compareTo(s)>=0)return i.qs.saveNamedQuery(e,t);const o=r.withResumeToken(ot.EMPTY_BYTE_STRING,s);return i.Ji=i.Ji.insert(o.targetId,o),i.Bs.updateTargetData(e,o).next(()=>i.Bs.removeMatchingKeysForTargetId(e,r.targetId)).next(()=>i.Bs.addMatchingKeys(e,n,r.targetId)).next(()=>i.qs.saveNamedQuery(e,t))})}function Ho(e,t){return`firestore_clients_${e}_${t}`}function Wo(e,t,n){let r=`firestore_mutations_${e}_${n}`;return t.isAuthenticated()&&(r+="_"+t.uid),r}function Qo(e,t){return`firestore_targets_${e}_${t}`}class Yo{constructor(e,t,n,r){this.user=e,this.batchId=t,this.state=n,this.error=r}static ar(e,t,n){const r=JSON.parse(n);let i,s="object"==typeof r&&-1!==["pending","acknowledged","rejected"].indexOf(r.state)&&(void 0===r.error||"object"==typeof r.error);return s&&r.error&&(s="string"==typeof r.error.message&&"string"==typeof r.error.code,s&&(i=new E(r.error.code,r.error.message))),s?new Yo(e,t,r.state,i):(g("SharedClientState",`Failed to parse mutation state for ID '${t}': ${n}`),null)}hr(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Jo{constructor(e,t,n){this.targetId=e,this.state=t,this.error=n}static ar(e,t){const n=JSON.parse(t);let r,i="object"==typeof n&&-1!==["not-current","current","rejected"].indexOf(n.state)&&(void 0===n.error||"object"==typeof n.error);return i&&n.error&&(i="string"==typeof n.error.message&&"string"==typeof n.error.code,i&&(r=new E(n.error.code,n.error.message))),i?new Jo(e,n.state,r):(g("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}hr(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Xo{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static ar(e,t){const n=JSON.parse(t);let r="object"==typeof n&&n.activeTargetIds instanceof Array,i=Yn();for(let s=0;r&&s<n.activeTargetIds.length;++s)r=ye(n.activeTargetIds[s]),i=i.add(n.activeTargetIds[s]);return r?new Xo(e,i):(g("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class Zo{constructor(e,t){this.clientId=e,this.onlineState=t}static ar(e){const t=JSON.parse(e);return"object"==typeof t&&-1!==["Unknown","Online","Offline"].indexOf(t.onlineState)&&"string"==typeof t.clientId?new Zo(t.clientId,t.onlineState):(g("SharedClientState","Failed to parse online state: "+e),null)}}class ea{constructor(){this.activeTargetIds=Yn()}lr(e){this.activeTargetIds=this.activeTargetIds.add(e)}dr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}hr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class ta{constructor(e,t,n,r,i){this.window=e,this.ii=t,this.persistenceKey=n,this.wr=r,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this._r=this.mr.bind(this),this.gr=new Je(j),this.started=!1,this.yr=[];const s=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.pr=Ho(this.persistenceKey,this.wr),this.Ir=function(e){return"firestore_sequence_number_"+e}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.persistenceKey),this.gr=this.gr.insert(this.wr,new ea),this.Tr=new RegExp(`^firestore_clients_${s}_([^_]*)$`),this.Er=new RegExp(`^firestore_mutations_${s}_(\\d+)(?:_(.*))?$`),this.Ar=new RegExp(`^firestore_targets_${s}_(\\d+)$`),this.vr=function(e){return"firestore_online_state_"+e}(this.persistenceKey),this.Rr=function(e){return"firestore_bundle_loaded_v2_"+e}(this.persistenceKey),this.window.addEventListener("storage",this._r)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.$i();for(const n of e){if(n===this.wr)continue;const e=this.getItem(Ho(this.persistenceKey,n));if(e){const t=Xo.ar(n,e);t&&(this.gr=this.gr.insert(t.clientId,t))}}this.Pr();const t=this.storage.getItem(this.vr);if(t){const e=this.br(t);e&&this.Vr(e)}for(const n of this.yr)this.mr(n);this.yr=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.Ir,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Sr(this.gr)}isActiveQueryTarget(e){let t=!1;return this.gr.forEach((n,r)=>{r.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.Dr(e,"pending")}updateMutationState(e,t,n){this.Dr(e,t,n),this.Cr(e)}addLocalQueryTarget(e){let t="not-current";if(this.isActiveQueryTarget(e)){const n=this.storage.getItem(Qo(this.persistenceKey,e));if(n){const r=Jo.ar(e,n);r&&(t=r.state)}}return this.Nr.lr(e),this.Pr(),t}removeLocalQueryTarget(e){this.Nr.dr(e),this.Pr()}isLocalQueryTarget(e){return this.Nr.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Qo(this.persistenceKey,e))}updateQueryState(e,t,n){this.kr(e,t,n)}handleUserChange(e,t,n){t.forEach(e=>{this.Cr(e)}),this.currentUser=e,n.forEach(e=>{this.addPendingMutation(e)})}setOnlineState(e){this.Mr(e)}notifyBundleLoaded(e){this.$r(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this._r),this.removeItem(this.pr),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return p("SharedClientState","READ",e,t),t}setItem(e,t){p("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){p("SharedClientState","REMOVE",e),this.storage.removeItem(e)}mr(e){const t=e;if(t.storageArea===this.storage){if(p("SharedClientState","EVENT",t.key,t.newValue),t.key===this.pr)return void g("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.ii.enqueueRetryable(async()=>{if(this.started){if(null!==t.key)if(this.Tr.test(t.key)){if(null==t.newValue){const e=this.Or(t.key);return this.Fr(e,null)}{const e=this.Br(t.key,t.newValue);if(e)return this.Fr(e.clientId,e)}}else if(this.Er.test(t.key)){if(null!==t.newValue){const e=this.Lr(t.key,t.newValue);if(e)return this.qr(e)}}else if(this.Ar.test(t.key)){if(null!==t.newValue){const e=this.Ur(t.key,t.newValue);if(e)return this.Kr(e)}}else if(t.key===this.vr){if(null!==t.newValue){const e=this.br(t.newValue);if(e)return this.Vr(e)}}else if(t.key===this.Ir){const e=function(e){let t=ge.ct;if(null!=e)try{const n=JSON.parse(e);b("number"==typeof n),t=n}catch(e){g("SharedClientState","Failed to read sequence number from WebStorage",e)}return t}(t.newValue);e!==ge.ct&&this.sequenceNumberHandler(e)}else if(t.key===this.Rr){const e=this.Gr(t.newValue);await Promise.all(e.map(e=>this.syncEngine.Qr(e)))}}else this.yr.push(t)})}}get Nr(){return this.gr.get(this.wr)}Pr(){this.setItem(this.pr,this.Nr.hr())}Dr(e,t,n){const r=new Yo(this.currentUser,e,t,n),i=Wo(this.persistenceKey,this.currentUser,e);this.setItem(i,r.hr())}Cr(e){const t=Wo(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Mr(e){const t={clientId:this.wr,onlineState:e};this.storage.setItem(this.vr,JSON.stringify(t))}kr(e,t,n){const r=Qo(this.persistenceKey,e),i=new Jo(e,t,n);this.setItem(r,i.hr())}$r(e){const t=JSON.stringify(Array.from(e));this.setItem(this.Rr,t)}Or(e){const t=this.Tr.exec(e);return t?t[1]:null}Br(e,t){const n=this.Or(e);return Xo.ar(n,t)}Lr(e,t){const n=this.Er.exec(e),r=Number(n[1]),i=void 0!==n[2]?n[2]:null;return Yo.ar(new u(i),r,t)}Ur(e,t){const n=this.Ar.exec(e),r=Number(n[1]);return Jo.ar(r,t)}br(e){return Zo.ar(e)}Gr(e){return JSON.parse(e)}async qr(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.jr(e.batchId,e.state,e.error);p("SharedClientState","Ignoring mutation for non-active user "+e.user.uid)}Kr(e){return this.syncEngine.zr(e.targetId,e.state,e.error)}Fr(e,t){const n=t?this.gr.insert(e,t):this.gr.remove(e),r=this.Sr(this.gr),i=this.Sr(n),s=[],o=[];return i.forEach(e=>{r.has(e)||s.push(e)}),r.forEach(e=>{i.has(e)||o.push(e)}),this.syncEngine.Wr(s,o).then(()=>{this.gr=n})}Vr(e){this.gr.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Sr(e){let t=Yn();return e.forEach((e,n)=>{t=t.unionWith(n.activeTargetIds)}),t}}class na{constructor(){this.Hr=new ea,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.Hr.lr(e),this.Jr[e]||"not-current"}updateQueryState(e,t,n){this.Jr[e]=t}removeLocalQueryTarget(e){this.Hr.dr(e)}isLocalQueryTarget(e){return this.Hr.activeTargetIds.has(e)}clearQueryState(e){delete this.Jr[e]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(e){return this.Hr.activeTargetIds.has(e)}start(){return this.Hr=new ea,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra{Yr(e){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){p("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.so)e(0)}no(){p("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.so)e(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sa=null;function oa(){return null===sa?sa=268435456+Math.round(2147483648*Math.random()):sa++,"0x"+sa.toString(16)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const aa={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca{constructor(e){this.ro=e.ro,this.oo=e.oo}uo(e){this.co=e}ao(e){this.ho=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.ro(e)}fo(){this.co()}wo(e){this.ho(e)}_o(e){this.lo(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ua="WebChannelConnection";class la extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.mo=t+"://"+e.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(e,t,n,r,i){const s=oa(),o=this.To(e,t);p("RestConnection",`Sending RPC '${e}' ${s}:`,o,n);const a={};return this.Eo(a,r,i),this.Ao(e,o,a,n).then(t=>(p("RestConnection",`Received RPC '${e}' ${s}: `,t),t),t=>{throw m("RestConnection",`RPC '${e}' ${s} failed with error: `,t,"url: ",o,"request:",n),t})}vo(e,t,n,r,i,s){return this.Io(e,t,n,r,i)}Eo(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+l,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((t,n)=>e[n]=t),n&&n.headers.forEach((t,n)=>e[n]=t)}To(e,t){const n=aa[e];return`${this.mo}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ao(e,t,n,r){const i=oa();return new Promise((s,o)=>{const c=new a["i"];c.setWithCredentials(!0),c.listenOnce(a["c"].COMPLETE,()=>{try{switch(c.getLastErrorCode()){case a["a"].NO_ERROR:const t=c.getResponseJson();p(ua,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(t)),s(t);break;case a["a"].TIMEOUT:p(ua,`RPC '${e}' ${i} timed out`),o(new E(I.DEADLINE_EXCEEDED,"Request time out"));break;case a["a"].HTTP_ERROR:const n=c.getStatus();if(p(ua,`RPC '${e}' ${i} failed with status:`,n,"response text:",c.getResponseText()),n>0){let e=c.getResponseJson();Array.isArray(e)&&(e=e[0]);const t=null==e?void 0:e.error;if(t&&t.status&&t.message){const e=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(I).indexOf(t)>=0?t:I.UNKNOWN}(t.status);o(new E(e,t.message))}else o(new E(I.UNKNOWN,"Server responded with status "+c.getStatus()))}else o(new E(I.UNAVAILABLE,"Connection failed."));break;default:y()}}finally{p(ua,`RPC '${e}' ${i} completed.`)}});const u=JSON.stringify(r);p(ua,`RPC '${e}' ${i} sending request:`,r),c.send(t,"POST",u,n,15)})}Ro(e,t,n){const r=oa(),i=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=Object(a["j"])(),o=Object(a["k"])(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;void 0!==u&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.xmlHttpFactory=new a["d"]({})),this.Eo(c.initMessageHeaders,t,n),c.encodeInitMessageHeaders=!0;const l=i.join("");p(ua,`Creating RPC '${e}' stream ${r}: ${l}`,c);const h=s.createWebChannel(l,c);let d=!1,f=!1;const g=new ca({ro:t=>{f?p(ua,`Not sending because RPC '${e}' stream ${r} is closed:`,t):(d||(p(ua,`Opening RPC '${e}' stream ${r} transport.`),h.open(),d=!0),p(ua,`RPC '${e}' stream ${r} sending:`,t),h.send(t))},oo:()=>h.close()}),v=(e,t,n)=>{e.listen(t,e=>{try{n(e)}catch(e){setTimeout(()=>{throw e},0)}})};return v(h,a["h"].EventType.OPEN,()=>{f||p(ua,`RPC '${e}' stream ${r} transport opened.`)}),v(h,a["h"].EventType.CLOSE,()=>{f||(f=!0,p(ua,`RPC '${e}' stream ${r} transport closed`),g.wo())}),v(h,a["h"].EventType.ERROR,t=>{f||(f=!0,m(ua,`RPC '${e}' stream ${r} transport errored:`,t),g.wo(new E(I.UNAVAILABLE,"The operation could not be completed")))}),v(h,a["h"].EventType.MESSAGE,t=>{var n;if(!f){const i=t.data[0];b(!!i);const s=i,o=s.error||(null===(n=s[0])||void 0===n?void 0:n.error);if(o){p(ua,`RPC '${e}' stream ${r} received error:`,o);const t=o.status;let n=function(e){const t=Pr[e];if(void 0!==t)return Mr(t)}(t),i=o.message;void 0===n&&(n=I.INTERNAL,i="Unknown error status: "+t+" with message "+o.message),f=!0,g.wo(new E(n,i)),h.close()}else p(ua,`RPC '${e}' stream ${r} received:`,i),g._o(i)}}),v(o,a["b"].STAT_EVENT,t=>{t.stat===a["g"].PROXY?p(ua,`RPC '${e}' stream ${r} detected buffering proxy`):t.stat===a["g"].NOPROXY&&p(ua,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{g.fo()},0),g}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ha(){return"undefined"!=typeof window?window:null}function da(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fa(e){return new ii(e,!0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa{constructor(e,t,n=1e3,r=1.5,i=6e4){this.ii=e,this.timerId=t,this.Po=n,this.bo=r,this.Vo=i,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(e){this.cancel();const t=Math.floor(this.So+this.ko()),n=Math.max(0,Date.now()-this.Co),r=Math.max(0,t-n);r>0&&p("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.So} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,r,()=>(this.Co=Date.now(),e())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){null!==this.Do&&(this.Do.skipDelay(),this.Do=null)}cancel(){null!==this.Do&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga{constructor(e,t,n,r,i,s,o,a){this.ii=e,this.$o=n,this.Oo=r,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new pa(e,t)}Uo(){return 1===this.state||5===this.state||this.Ko()}Ko(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&null===this.Bo&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,()=>this.zo()))}Wo(e){this.Ho(),this.stream.send(e)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(e,t){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,4!==e?this.qo.reset():t&&t.code===I.RESOURCE_EXHAUSTED?(g(t.toString()),g("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):t&&t.code===I.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Yo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ao(t)}Yo(){}auth(){this.state=1;const e=this.Xo(this.Fo),t=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([e,n])=>{this.Fo===t&&this.Zo(e,n)},t=>{e(()=>{const e=new E(I.UNKNOWN,"Fetching auth token failed: "+t.message);return this.tu(e)})})}Zo(e,t){const n=this.Xo(this.Fo);this.stream=this.eu(e,t),this.stream.uo(()=>{n(()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,()=>(this.Ko()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.ao(e=>{n(()=>this.tu(e))}),this.stream.onMessage(e=>{n(()=>this.onMessage(e))})}Go(){this.state=5,this.qo.No(async()=>{this.state=0,this.start()})}tu(e){return p("PersistentStream","close with error: "+e),this.stream=null,this.close(4,e)}Xo(e){return t=>{this.ii.enqueueAndForget(()=>this.Fo===e?t():(p("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class ma extends ga{constructor(e,t,n,r,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i}eu(e,t){return this.connection.Ro("Listen",e,t)}onMessage(e){this.qo.reset();const t=_i(this.serializer,e),n=function(e){if(!("targetChange"in e))return V.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?V.min():t.readTime?ui(t.readTime):V.min()}(e);return this.listener.nu(t,n)}su(e){const t={};t.database=mi(this.serializer),t.addTarget=function(e,t){let n;const r=t.target;if(n=gn(r)?{documents:Si(e,r)}:{query:Oi(e,r)},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0){n.resumeToken=ai(e,t.resumeToken);const r=si(e,t.expectedCount);null!==r&&(n.expectedCount=r)}else if(t.snapshotVersion.compareTo(V.min())>0){n.readTime=oi(e,t.snapshotVersion.toTimestamp());const r=si(e,t.expectedCount);null!==r&&(n.expectedCount=r)}return n}(this.serializer,e);const n=Ai(this.serializer,e);n&&(t.labels=n),this.Wo(t)}iu(e){const t={};t.database=mi(this.serializer),t.removeTarget=e,this.Wo(t)}}class va extends ga{constructor(e,t,n,r,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i,this.ru=!1}get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(e,t){return this.connection.Ro("Write",e,t)}onMessage(e){if(b(!!e.streamToken),this.lastStreamToken=e.streamToken,this.ru){this.qo.reset();const t=Ti(e.writeResults,e.commitTime),n=ui(e.commitTime);return this.listener.cu(n,t)}return b(!e.writeResults||0===e.writeResults.length),this.ru=!0,this.listener.au()}hu(){const e={};e.database=mi(this.serializer),this.Wo(e)}uu(e){const t={streamToken:this.lastStreamToken,writes:e.map(e=>Ii(this.serializer,e))};this.Wo(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=r,this.lu=!1}fu(){if(this.lu)throw new E(I.FAILED_PRECONDITION,"The client has already been terminated.")}Io(e,t,n){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.Io(e,t,n,r,i)).catch(e=>{throw"FirebaseError"===e.name?(e.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new E(I.UNKNOWN,e.toString())})}vo(e,t,n,r){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.vo(e,t,n,i,s,r)).catch(e=>{throw"FirebaseError"===e.name?(e.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new E(I.UNKNOWN,e.toString())})}terminate(){this.lu=!0}}class ba{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){0===this.wu&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve())))}Iu(e){"Online"===this.state?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu("Connection failed 1 times. Most recent error: "+e.toString()),this.yu("Offline")))}set(e){this.Tu(),this.wu=0,"Online"===e&&(this.mu=!1),this.yu(e)}yu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}pu(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(g(t),this.mu=!1):p("OnlineStateTracker",t)}Tu(){null!==this._u&&(this._u.cancel(),this._u=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=i,this.Pu.Yr(e=>{n.enqueueAndForget(async()=>{Ca(this)&&(p("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=_(e);t.vu.add(4),await Ia(t),t.bu.set("Unknown"),t.vu.delete(4),await _a(t)}(this))})}),this.bu=new ba(n,r)}}async function _a(e){if(Ca(e))for(const t of e.Ru)await t(!0)}async function Ia(e){for(const t of e.Ru)await t(!1)}function Ea(e,t){const n=_(e);n.Au.has(t.targetId)||(n.Au.set(t.targetId,t),Aa(n)?ka(n):Ha(n).Ko()&&Sa(n,t))}function Ta(e,t){const n=_(e),r=Ha(n);n.Au.delete(t),r.Ko()&&Oa(n,t),0===n.Au.size&&(r.Ko()?r.jo():Ca(n)&&n.bu.set("Unknown"))}function Sa(e,t){if(e.Vu.qt(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(V.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}Ha(e).su(t)}function Oa(e,t){e.Vu.qt(t),Ha(e).iu(t)}function ka(e){e.Vu=new Xr({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),le:t=>e.Au.get(t)||null,ue:()=>e.datastore.serializer.databaseId}),Ha(e).start(),e.bu.gu()}function Aa(e){return Ca(e)&&!Ha(e).Uo()&&e.Au.size>0}function Ca(e){return 0===_(e).vu.size}function xa(e){e.Vu=void 0}async function Na(e){e.Au.forEach((t,n)=>{Sa(e,t)})}async function Da(e,t){xa(e),Aa(e)?(e.bu.Iu(t),ka(e)):e.bu.set("Unknown")}async function Ra(e,t,n){if(e.bu.set("Online"),t instanceof Yr&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const r of t.targetIds)e.Au.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.Au.delete(r),e.Vu.removeTarget(r))}(e,t)}catch(n){p("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await Pa(e,n)}else if(t instanceof Wr?e.Vu.Ht(t):t instanceof Qr?e.Vu.ne(t):e.Vu.Xt(t),!n.isEqual(V.min()))try{const t=await jo(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.Vu.ce(t);return n.targetChanges.forEach((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=e.Au.get(r);i&&e.Au.set(r,i.withResumeToken(n.resumeToken,t))}}),n.targetMismatches.forEach((t,n)=>{const r=e.Au.get(t);if(!r)return;e.Au.set(t,r.withResumeToken(ot.EMPTY_BYTE_STRING,r.snapshotVersion)),Oa(e,t);const i=new Fi(r.target,t,n,r.sequenceNumber);Sa(e,i)}),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){p("RemoteStore","Failed to raise snapshot:",t),await Pa(e,t)}}async function Pa(e,t,n){if(!ce(t))throw t;e.vu.add(1),await Ia(e),e.bu.set("Offline"),n||(n=()=>jo(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{p("RemoteStore","Retrying IndexedDB access"),await n(),e.vu.delete(1),await _a(e)})}function ja(e,t){return t().catch(n=>Pa(e,n,t))}async function La(e){const t=_(e),n=Wa(t);let r=t.Eu.length>0?t.Eu[t.Eu.length-1].batchId:-1;for(;Ma(t);)try{const e=await Fo(t.localStore,r);if(null===e){0===t.Eu.length&&n.jo();break}r=e.batchId,Fa(t,e)}catch(e){await Pa(t,e)}Va(t)&&Ua(t)}function Ma(e){return Ca(e)&&e.Eu.length<10}function Fa(e,t){e.Eu.push(t);const n=Wa(e);n.Ko()&&n.ou&&n.uu(t.mutations)}function Va(e){return Ca(e)&&!Wa(e).Uo()&&e.Eu.length>0}function Ua(e){Wa(e).start()}async function Ba(e){Wa(e).hu()}async function qa(e){const t=Wa(e);for(const n of e.Eu)t.uu(n.mutations)}async function za(e,t,n){const r=e.Eu.shift(),i=Nr.from(r,t,n);await ja(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await La(e)}async function Ga(e,t){t&&Wa(e).ou&&await async function(e,t){if(n=t.code,Lr(n)&&n!==I.ABORTED){const n=e.Eu.shift();Wa(e).Qo(),await ja(e,()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t)),await La(e)}var n}(e,t),Va(e)&&Ua(e)}async function $a(e,t){const n=_(e);n.asyncQueue.verifyOperationInProgress(),p("RemoteStore","RemoteStore received new credentials");const r=Ca(n);n.vu.add(3),await Ia(n),r&&n.bu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.vu.delete(3),await _a(n)}async function Ka(e,t){const n=_(e);t?(n.vu.delete(2),await _a(n)):t||(n.vu.add(2),await Ia(n),n.bu.set("Unknown"))}function Ha(e){return e.Su||(e.Su=function(e,t,n){const r=_(e);return r.fu(),new ma(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(e.datastore,e.asyncQueue,{uo:Na.bind(null,e),ao:Da.bind(null,e),nu:Ra.bind(null,e)}),e.Ru.push(async t=>{t?(e.Su.Qo(),Aa(e)?ka(e):e.bu.set("Unknown")):(await e.Su.stop(),xa(e))})),e.Su}function Wa(e){return e.Du||(e.Du=function(e,t,n){const r=_(e);return r.fu(),new va(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(e.datastore,e.asyncQueue,{uo:Ba.bind(null,e),ao:Ga.bind(null,e),au:qa.bind(null,e),cu:za.bind(null,e)}),e.Ru.push(async t=>{t?(e.Du.Qo(),await La(e)):(await e.Du.stop(),e.Eu.length>0&&(p("RemoteStore",`Stopping write stream with ${e.Eu.length} pending writes`),e.Eu=[]))})),e.Du
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Qa{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new T,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}static createAndSchedule(e,t,n,r,i){const s=Date.now()+n,o=new Qa(e,t,s,r,i);return o.start(n),o}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new E(I.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ya(e,t){if(g("AsyncQueue",`${t}: ${e}`),ce(e))return new E(I.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(e){this.comparator=e?(t,n)=>e(t,n)||G.comparator(t.key,n.key):(e,t)=>G.comparator(e.key,t.key),this.keyedMap=Bn(),this.sortedSet=new Je(this.comparator)}static emptySet(e){return new Ja(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Ja))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new Ja;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xa{constructor(){this.Cu=new Je(G.comparator)}track(e){const t=e.doc.key,n=this.Cu.get(t);n?0!==e.type&&3===n.type?this.Cu=this.Cu.insert(t,e):3===e.type&&1!==n.type?this.Cu=this.Cu.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.Cu=this.Cu.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.Cu=this.Cu.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.Cu=this.Cu.remove(t):1===e.type&&2===n.type?this.Cu=this.Cu.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.Cu=this.Cu.insert(t,{type:2,doc:e.doc}):y():this.Cu=this.Cu.insert(t,e)}xu(){const e=[];return this.Cu.inorderTraversal((t,n)=>{e.push(n)}),e}}class Za{constructor(e,t,n,r,i,s,o,a,c){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=c}static fromInitialDocuments(e,t,n,r,i){const s=[];return t.forEach(e=>{s.push({type:0,doc:e})}),new Za(e,t,Ja.emptySet(t),s,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&xn(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==n[r].type||!t[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(){this.Nu=void 0,this.listeners=[]}}class tc{constructor(){this.queries=new Mn(e=>Nn(e),xn),this.onlineState="Unknown",this.ku=new Set}}async function nc(e,t){const n=_(e),r=t.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new ec),i)try{s.Nu=await n.onListen(r)}catch(e){const n=Ya(e,`Initialization of query '${Dn(t.query)}' failed`);return void t.onError(n)}n.queries.set(r,s),s.listeners.push(t),t.Mu(n.onlineState),s.Nu&&t.$u(s.Nu)&&oc(n)}async function rc(e,t){const n=_(e),r=t.query;let i=!1;const s=n.queries.get(r);if(s){const e=s.listeners.indexOf(t);e>=0&&(s.listeners.splice(e,1),i=0===s.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function ic(e,t){const n=_(e);let r=!1;for(const i of t){const e=i.query,t=n.queries.get(e);if(t){for(const e of t.listeners)e.$u(i)&&(r=!0);t.Nu=i}}r&&oc(n)}function sc(e,t,n){const r=_(e),i=r.queries.get(t);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(t)}function oc(e){e.ku.forEach(e=>{e.next()})}class ac{constructor(e,t,n){this.query=e,this.Ou=t,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=n||{}}$u(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new Za(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Fu?this.Lu(e)&&(this.Ou.next(e),t=!0):this.qu(e,this.onlineState)&&(this.Uu(e),t=!0),this.Bu=e,t}onError(e){this.Ou.error(e)}Mu(e){this.onlineState=e;let t=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,e)&&(this.Uu(this.Bu),t=!0),t}qu(e,t){if(!e.fromCache)return!0;const n="Offline"!==t;return(!this.options.Ku||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}Lu(e){if(e.docChanges.length>0)return!0;const t=this.Bu&&this.Bu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}Uu(e){e=Za.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Fu=!0,this.Ou.next(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc{constructor(e,t){this.Gu=e,this.byteLength=t}Qu(){return"metadata"in this.Gu}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uc{constructor(e){this.serializer=e}rr(e){return fi(this.serializer,e)}ur(e){return e.metadata.exists?bi(this.serializer,e.document,!1):Vt.newNoDocument(this.rr(e.metadata.name),this.cr(e.metadata.readTime))}cr(e){return ui(e)}}class lc{constructor(e,t,n){this.ju=e,this.localStore=t,this.serializer=n,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=hc(e)}zu(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.Gu.namedQuery)this.queries.push(e.Gu.namedQuery);else if(e.Gu.documentMetadata){this.documents.push({metadata:e.Gu.documentMetadata}),e.Gu.documentMetadata.exists||++t;const n=B.fromString(e.Gu.documentMetadata.name);this.collectionGroups.add(n.get(n.length-2))}else e.Gu.document&&(this.documents[this.documents.length-1].document=e.Gu.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}Wu(e){const t=new Map,n=new uc(this.serializer);for(const r of e)if(r.metadata.queries){const e=n.rr(r.metadata.name);for(const n of r.metadata.queries){const r=(t.get(n)||Wn()).add(e);t.set(n,r)}}return t}async complete(){const e=await $o(this.localStore,new uc(this.serializer),this.documents,this.ju.id),t=this.Wu(this.documents);for(const n of this.queries)await Ko(this.localStore,n,t.get(n.name));return this.progress.taskState="Success",{progress:this.progress,Hu:this.collectionGroups,Ju:e}}}function hc(e){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:e.totalDocuments,totalBytes:e.totalBytes}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{constructor(e){this.key=e}}class fc{constructor(e){this.key=e}}class pc{constructor(e,t){this.query=e,this.Yu=t,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=Wn(),this.mutatedKeys=Wn(),this.tc=jn(e),this.ec=new Ja(this.tc)}get nc(){return this.Yu}sc(e,t){const n=t?t.ic:new Xa,r=t?t.ec:this.ec;let i=t?t.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,c="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((e,t)=>{const u=r.get(e),l=Rn(this.query,t)?t:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let f=!1;u&&l?u.data.isEqual(l.data)?h!==d&&(n.track({type:3,doc:l}),f=!0):this.rc(u,l)||(n.track({type:2,doc:l}),f=!0,(a&&this.tc(l,a)>0||c&&this.tc(l,c)<0)&&(o=!0)):!u&&l?(n.track({type:0,doc:l}),f=!0):u&&!l&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(l?(s=s.add(l),i=d?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))}),null!==this.query.limit)for(;s.size>this.query.limit;){const e="F"===this.query.limitType?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{ec:s,ic:n,zi:o,mutatedKeys:i}}rc(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){const r=this.ec;this.ec=e.ec,this.mutatedKeys=e.mutatedKeys;const i=e.ic.xu();i.sort((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return y()}};return n(e)-n(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e.type,t.type)||this.tc(e.doc,t.doc)),this.oc(n);const s=t?this.uc():[],o=0===this.Zu.size&&this.current?1:0,a=o!==this.Xu;return this.Xu=o,0!==i.length||a?{snapshot:new Za(this.query,e.ec,r,i,e.mutatedKeys,0===o,a,!1,!!n&&n.resumeToken.approximateByteSize()>0),cc:s}:{cc:s}}Mu(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({ec:this.ec,ic:new Xa,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(e){return!this.Yu.has(e)&&!!this.ec.has(e)&&!this.ec.get(e).hasLocalMutations}oc(e){e&&(e.addedDocuments.forEach(e=>this.Yu=this.Yu.add(e)),e.modifiedDocuments.forEach(e=>{}),e.removedDocuments.forEach(e=>this.Yu=this.Yu.delete(e)),this.current=e.current)}uc(){if(!this.current)return[];const e=this.Zu;this.Zu=Wn(),this.ec.forEach(e=>{this.ac(e.key)&&(this.Zu=this.Zu.add(e.key))});const t=[];return e.forEach(e=>{this.Zu.has(e)||t.push(new fc(e))}),this.Zu.forEach(n=>{e.has(n)||t.push(new dc(n))}),t}hc(e){this.Yu=e.ir,this.Zu=Wn();const t=this.sc(e.documents);return this.applyChanges(t,!0)}lc(){return Za.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,0===this.Xu,this.hasCachedResults)}}class gc{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class mc{constructor(e){this.key=e,this.fc=!1}}class vc{constructor(e,t,n,r,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.dc={},this.wc=new Mn(e=>Nn(e),xn),this._c=new Map,this.mc=new Set,this.gc=new Je(G.comparator),this.yc=new Map,this.Ic=new fo,this.Tc={},this.Ec=new Map,this.Ac=Bs.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return!0===this.vc}}async function yc(e,t){const n=Hc(e);let r,i;const s=n.wc.get(t);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.lc();else{const e=await Vo(n.localStore,kn(t)),s=n.sharedClientState.addLocalQueryTarget(e.targetId);r=e.targetId,i=await bc(n,t,r,"current"===s,e.resumeToken),n.isPrimaryClient&&Ea(n.remoteStore,e)}return i}async function bc(e,t,n,r,i){e.Rc=(t,n,r)=>async function(e,t,n,r){let i=t.view.sc(n);i.zi&&(i=await Bo(e.localStore,t.query,!1).then(({documents:e})=>t.view.sc(e,i)));const s=r&&r.targetChanges.get(t.targetId),o=t.view.applyChanges(i,e.isPrimaryClient,s);return Dc(e,t.targetId,o.cc),o.snapshot}(e,t,n,r);const s=await Bo(e.localStore,t,!0),o=new pc(t,s.ir),a=o.sc(s.documents),c=Hr.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState,i),u=o.applyChanges(a,e.isPrimaryClient,c);Dc(e,n,u.cc);const l=new gc(t,n,o);return e.wc.set(t,l),e._c.has(n)?e._c.get(n).push(t):e._c.set(n,[t]),u.snapshot}async function wc(e,t){const n=_(e),r=n.wc.get(t),i=n._c.get(r.targetId);if(i.length>1)return n._c.set(r.targetId,i.filter(e=>!xn(e,t))),void n.wc.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Uo(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Ta(n.remoteStore,r.targetId),xc(n,r.targetId)}).catch(ne)):(xc(n,r.targetId),await Uo(n.localStore,r.targetId,!0))}async function _c(e,t,n){const r=Wc(e);try{const e=await function(e,t){const n=_(e),r=F.now(),i=t.reduce((e,t)=>e.add(t.key),Wn());let s,o;return n.persistence.runTransaction("Locally write mutations","readwrite",e=>{let a=Vn(),c=Wn();return n.Zi.getEntries(e,i).next(e=>{a=e,a.forEach((e,t)=>{t.isValidDocument()||(c=c.add(e))})}).next(()=>n.localDocuments.getOverlayedDocuments(e,a)).next(i=>{s=i;const o=[];for(const e of t){const t=_r(e,s.get(e.key).overlayedDocument);null!=t&&o.push(new Tr(e.key,t,Ft(t.value.mapValue),gr.exists(!0)))}return n.mutationQueue.addMutationBatch(e,r,o,t)}).next(t=>{o=t;const r=t.applyToLocalDocumentSet(s,c);return n.documentOverlayCache.saveOverlays(e,t.batchId,r)})}).then(()=>({batchId:o.batchId,changes:qn(s)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let r=e.Tc[e.currentUser.toKey()];r||(r=new Je(j)),r=r.insert(t,n),e.Tc[e.currentUser.toKey()]=r}(r,e.batchId,n),await jc(r,e.changes),await La(r.remoteStore)}catch(e){const t=Ya(e,"Failed to persist write");n.reject(t)}}async function Ic(e,t){const n=_(e);try{const e=await Lo(n.localStore,t);t.targetChanges.forEach((e,t)=>{const r=n.yc.get(t);r&&(b(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?r.fc=!0:e.modifiedDocuments.size>0?b(r.fc):e.removedDocuments.size>0&&(b(r.fc),r.fc=!1))}),await jc(n,e,t)}catch(e){await ne(e)}}function Ec(e,t,n){const r=_(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[];r.wc.forEach((n,r)=>{const i=r.view.Mu(t);i.snapshot&&e.push(i.snapshot)}),function(e,t){const n=_(e);n.onlineState=t;let r=!1;n.queries.forEach((e,n)=>{for(const i of n.listeners)i.Mu(t)&&(r=!0)}),r&&oc(n)}(r.eventManager,t),e.length&&r.dc.nu(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Tc(e,t,n){const r=_(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.yc.get(t),s=i&&i.key;if(s){let e=new Je(G.comparator);e=e.insert(s,Vt.newNoDocument(s,V.min()));const n=Wn().add(s),i=new Kr(V.min(),new Map,new Je(j),e,n);await Ic(r,i),r.gc=r.gc.remove(s),r.yc.delete(t),Pc(r)}else await Uo(r.localStore,t,!1).then(()=>xc(r,t,n)).catch(ne)}async function Sc(e,t){const n=_(e),r=t.batch.batchId;try{const e=await Po(n.localStore,t);Cc(n,r,null),Ac(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await jc(n,e)}catch(e){await ne(e)}}async function Oc(e,t,n){const r=_(e);try{const e=await function(e,t){const n=_(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",e=>{let r;return n.mutationQueue.lookupMutationBatch(e,t).next(t=>(b(null!==t),r=t.keys(),n.mutationQueue.removeMutationBatch(e,t))).next(()=>n.mutationQueue.performConsistencyCheck(e)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,r)).next(()=>n.localDocuments.getDocuments(e,r))})}(r.localStore,t);Cc(r,t,n),Ac(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await jc(r,e)}catch(n){await ne(n)}}async function kc(e,t){const n=_(e);Ca(n.remoteStore)||p("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const e=await function(e){const t=_(e);return t.persistence.runTransaction("Get highest unacknowledged batch id","readonly",e=>t.mutationQueue.getHighestUnacknowledgedBatchId(e))}(n.localStore);if(-1===e)return void t.resolve();const r=n.Ec.get(e)||[];r.push(t),n.Ec.set(e,r)}catch(e){const n=Ya(e,"Initialization of waitForPendingWrites() operation failed");t.reject(n)}}function Ac(e,t){(e.Ec.get(t)||[]).forEach(e=>{e.resolve()}),e.Ec.delete(t)}function Cc(e,t,n){const r=_(e);let i=r.Tc[r.currentUser.toKey()];if(i){const e=i.get(t);e&&(n?e.reject(n):e.resolve(),i=i.remove(t)),r.Tc[r.currentUser.toKey()]=i}}function xc(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e._c.get(t))e.wc.delete(r),n&&e.dc.Pc(r,n);e._c.delete(t),e.isPrimaryClient&&e.Ic.Is(t).forEach(t=>{e.Ic.containsKey(t)||Nc(e,t)})}function Nc(e,t){e.mc.delete(t.path.canonicalString());const n=e.gc.get(t);null!==n&&(Ta(e.remoteStore,n),e.gc=e.gc.remove(t),e.yc.delete(n),Pc(e))}function Dc(e,t,n){for(const r of n)r instanceof dc?(e.Ic.addReference(r.key,t),Rc(e,r)):r instanceof fc?(p("SyncEngine","Document no longer in limbo: "+r.key),e.Ic.removeReference(r.key,t),e.Ic.containsKey(r.key)||Nc(e,r.key)):y()}function Rc(e,t){const n=t.key,r=n.path.canonicalString();e.gc.get(n)||e.mc.has(r)||(p("SyncEngine","New document in limbo: "+n),e.mc.add(r),Pc(e))}function Pc(e){for(;e.mc.size>0&&e.gc.size<e.maxConcurrentLimboResolutions;){const t=e.mc.values().next().value;e.mc.delete(t);const n=new G(B.fromString(t)),r=e.Ac.next();e.yc.set(r,new mc(n)),e.gc=e.gc.insert(n,r),Ea(e.remoteStore,new Fi(kn(_n(n.path)),r,"TargetPurposeLimboResolution",ge.ct))}}async function jc(e,t,n){const r=_(e),i=[],s=[],o=[];r.wc.isEmpty()||(r.wc.forEach((e,a)=>{o.push(r.Rc(a,t,n).then(e=>{if((e||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,(null==e?void 0:e.fromCache)?"not-current":"current"),e){i.push(e);const t=Co.Li(a.targetId,e);s.push(t)}}))}),await Promise.all(o),r.dc.nu(i),await async function(e,t){const n=_(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",e=>re.forEach(t,t=>re.forEach(t.Fi,r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r)).next(()=>re.forEach(t.Bi,r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))}catch(e){if(!ce(e))throw e;p("LocalStore","Failed to update sequence numbers: "+e)}for(const r of t){const e=r.targetId;if(!r.fromCache){const t=n.Ji.get(e),r=t.snapshotVersion,i=t.withLastLimboFreeSnapshotVersion(r);n.Ji=n.Ji.insert(e,i)}}}(r.localStore,s))}async function Lc(e,t){const n=_(e);if(!n.currentUser.isEqual(t)){p("SyncEngine","User change. New user:",t.toKey());const e=await Ro(n.localStore,t);n.currentUser=t,function(e,t){e.Ec.forEach(e=>{e.forEach(e=>{e.reject(new E(I.CANCELLED,t))})}),e.Ec.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await jc(n,e.er)}}function Mc(e,t){const n=_(e),r=n.yc.get(t);if(r&&r.fc)return Wn().add(r.key);{let e=Wn();const r=n._c.get(t);if(!r)return e;for(const t of r){const r=n.wc.get(t);e=e.unionWith(r.view.nc)}return e}}async function Fc(e,t){const n=_(e),r=await Bo(n.localStore,t.query,!0),i=t.view.hc(r);return n.isPrimaryClient&&Dc(n,t.targetId,i.cc),i}async function Vc(e,t){const n=_(e);return zo(n.localStore,t).then(e=>jc(n,e))}async function Uc(e,t,n,r){const i=_(e),s=await function(e,t){const n=_(e),r=_(n.mutationQueue);return n.persistence.runTransaction("Lookup mutation documents","readonly",e=>r.Sn(e,t).next(t=>t?n.localDocuments.getDocuments(e,t):re.resolve(null)))}(i.localStore,t);null!==s?("pending"===n?await La(i.remoteStore):"acknowledged"===n||"rejected"===n?(Cc(i,t,r||null),Ac(i,t),function(e,t){_(_(e).mutationQueue).Cn(t)}(i.localStore,t)):y(),await jc(i,s)):p("SyncEngine","Cannot apply mutation batch with id: "+t)}async function Bc(e,t){const n=_(e);if(Hc(n),Wc(n),!0===t&&!0!==n.vc){const e=n.sharedClientState.getAllActiveQueryTargets(),t=await qc(n,e.toArray());n.vc=!0,await Ka(n.remoteStore,!0);for(const r of t)Ea(n.remoteStore,r)}else if(!1===t&&!1!==n.vc){const e=[];let t=Promise.resolve();n._c.forEach((r,i)=>{n.sharedClientState.isLocalQueryTarget(i)?e.push(i):t=t.then(()=>(xc(n,i),Uo(n.localStore,i,!0))),Ta(n.remoteStore,i)}),await t,await qc(n,e),function(e){const t=_(e);t.yc.forEach((e,n)=>{Ta(t.remoteStore,n)}),t.Ic.Ts(),t.yc=new Map,t.gc=new Je(G.comparator)}(n),n.vc=!1,await Ka(n.remoteStore,!1)}}async function qc(e,t,n){const r=_(e),i=[],s=[];for(const o of t){let e;const t=r._c.get(o);if(t&&0!==t.length){e=await Vo(r.localStore,kn(t[0]));for(const e of t){const t=r.wc.get(e),n=await Fc(r,t);n.snapshot&&s.push(n.snapshot)}}else{const t=await qo(r.localStore,o);e=await Vo(r.localStore,t),await bc(r,zc(t),o,!1,e.resumeToken)}i.push(e)}return r.dc.nu(s),i}function zc(e){return wn(e.path,e.collectionGroup,e.orderBy,e.filters,e.limit,"F",e.startAt,e.endAt)}function Gc(e){const t=_(e);return _(_(t.localStore).persistence).$i()}async function $c(e,t,n,r){const i=_(e);if(i.vc)return void p("SyncEngine","Ignoring unexpected query state notification.");const s=i._c.get(t);if(s&&s.length>0)switch(n){case"current":case"not-current":{const e=await zo(i.localStore,Pn(s[0])),r=Kr.createSynthesizedRemoteEventForCurrentChange(t,"current"===n,ot.EMPTY_BYTE_STRING);await jc(i,e,r);break}case"rejected":await Uo(i.localStore,t,!0),xc(i,t,r);break;default:y()}}async function Kc(e,t,n){const r=Hc(e);if(r.vc){for(const e of t){if(r._c.has(e)){p("SyncEngine","Adding an already active target "+e);continue}const t=await qo(r.localStore,e),n=await Vo(r.localStore,t);await bc(r,zc(t),n.targetId,!1,n.resumeToken),Ea(r.remoteStore,n)}for(const e of n)r._c.has(e)&&await Uo(r.localStore,e,!1).then(()=>{Ta(r.remoteStore,e),xc(r,e)}).catch(ne)}}function Hc(e){const t=_(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Ic.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Mc.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Tc.bind(null,t),t.dc.nu=ic.bind(null,t.eventManager),t.dc.Pc=sc.bind(null,t.eventManager),t}function Wc(e){const t=_(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Sc.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Oc.bind(null,t),t}function Qc(e,t,n){const r=_(e);(async function(e,t,n){try{const r=await t.getMetadata();if(await function(e,t){const n=_(e),r=ui(t.createTime);return n.persistence.runTransaction("hasNewerBundle","readonly",e=>n.qs.getBundleMetadata(e,t.id)).then(e=>!!e&&e.createTime.compareTo(r)>=0)}(e.localStore,r))return await t.close(),n._completeWith(function(e){return{taskState:"Success",documentsLoaded:e.totalDocuments,bytesLoaded:e.totalBytes,totalDocuments:e.totalDocuments,totalBytes:e.totalBytes}}(r)),Promise.resolve(new Set);n._updateProgress(hc(r));const i=new lc(r,e.localStore,t.serializer);let s=await t.bc();for(;s;){const e=await i.zu(s);e&&n._updateProgress(e),s=await t.bc()}const o=await i.complete();return await jc(e,o.Ju,void 0),await function(e,t){const n=_(e);return n.persistence.runTransaction("Save bundle","readwrite",e=>n.qs.saveBundleMetadata(e,t))}(e.localStore,r),n._completeWith(o.progress),Promise.resolve(o.Hu)}catch(e){return m("SyncEngine","Loading bundle failed with "+e),n._failWith(e),Promise.resolve(new Set)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */)(r,t,n).then(e=>{r.sharedClientState.notifyBundleLoaded(e)})}class Yc{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=fa(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return Do(this.persistence,new xo,e.initialUser,this.serializer)}createPersistence(e){return new bo(_o.zs,this.serializer)}createSharedClientState(e){return new na}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Jc extends Yc{constructor(e,t,n){super(),this.Vc=e,this.cacheSizeBytes=t,this.forceOwnership=n,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Vc.initialize(this,e),await Wc(this.Vc.syncEngine),await La(this.Vc.remoteStore),await this.persistence.Ii(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}createLocalStore(e){return Do(this.persistence,new xo,e.initialUser,this.serializer)}createGarbageCollectionScheduler(e,t){const n=this.persistence.referenceDelegate.garbageCollector;return new Ws(n,e.asyncQueue,t)}createIndexBackfillerScheduler(e,t){const n=new pe(t,this.persistence);return new fe(e.asyncQueue,n)}createPersistence(e){const t=Ao(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),n=void 0!==this.cacheSizeBytes?Rs.withCacheSize(this.cacheSizeBytes):Rs.DEFAULT;return new So(this.synchronizeTabs,t,e.clientId,n,e.asyncQueue,ha(),da(),this.serializer,this.sharedClientState,!!this.forceOwnership)}createSharedClientState(e){return new na}}class Xc extends Jc{constructor(e,t){super(e,t,!1),this.Vc=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.Vc.syncEngine;this.sharedClientState instanceof ta&&(this.sharedClientState.syncEngine={jr:Uc.bind(null,t),zr:$c.bind(null,t),Wr:Kc.bind(null,t),$i:Gc.bind(null,t),Qr:Vc.bind(null,t)},await this.sharedClientState.start()),await this.persistence.Ii(async e=>{await Bc(this.Vc.syncEngine,e),this.gcScheduler&&(e&&!this.gcScheduler.started?this.gcScheduler.start():e||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(e&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():e||this.indexBackfillerScheduler.stop())})}createSharedClientState(e){const t=ha();if(!ta.D(t))throw new E(I.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const n=Ao(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new ta(t,e.asyncQueue,n,e.clientId,e.initialUser)}}class Zc{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>Ec(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=Lc.bind(null,this.syncEngine),await Ka(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new tc}createDatastore(e){const t=fa(e.databaseInfo.databaseId),n=(r=e.databaseInfo,new la(r));var r;return function(e,t,n,r){return new ya(e,t,n,r)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return t=this.localStore,n=this.datastore,r=e.asyncQueue,i=e=>Ec(this.syncEngine,e,0),s=ia.D()?new ia:new ra,new wa(t,n,r,i,s);var t,n,r,i,s}createSyncEngine(e,t){return function(e,t,n,r,i,s,o){const a=new vc(e,t,n,r,i,s);return o&&(a.vc=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=_(e);p("RemoteStore","RemoteStore shutting down."),t.vu.add(5),await Ia(t),t.Pu.shutdown(),t.bu.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eu(e,t=10240){let n=0;return{async read(){if(n<e.byteLength){const r={value:e.slice(n,n+t),done:!1};return n+=t,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Sc(this.observer.next,e)}error(e){this.observer.error?this.Sc(this.observer.error,e):g("Uncaught Error in snapshot listener:",e.toString())}Dc(){this.muted=!0}Sc(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu{constructor(e,t){this.Cc=e,this.serializer=t,this.metadata=new T,this.buffer=new Uint8Array,this.xc=new TextDecoder("utf-8"),this.Nc().then(e=>{e&&e.Qu()?this.metadata.resolve(e.Gu.metadata):this.metadata.reject(new Error("The first element of the bundle is not a metadata, it is\n             "+JSON.stringify(null==e?void 0:e.Gu)))},e=>this.metadata.reject(e))}close(){return this.Cc.cancel()}async getMetadata(){return this.metadata.promise}async bc(){return await this.getMetadata(),this.Nc()}async Nc(){const e=await this.kc();if(null===e)return null;const t=this.xc.decode(e),n=Number(t);isNaN(n)&&this.Mc(`length string (${t}) is not valid number`);const r=await this.$c(n);return new cc(JSON.parse(r),e.length+n)}Oc(){return this.buffer.findIndex(e=>e==="{".charCodeAt(0))}async kc(){for(;this.Oc()<0;)if(await this.Fc())break;if(0===this.buffer.length)return null;const e=this.Oc();e<0&&this.Mc("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async $c(e){for(;this.buffer.length<e;)await this.Fc()&&this.Mc("Reached the end of bundle when more is expected.");const t=this.xc.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}Mc(e){throw this.Cc.cancel(),new Error("Invalid bundle format: "+e)}async Fc(){const e=await this.Cc.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new E(I.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const t=await async function(e,t){const n=_(e),r=mi(n.serializer)+"/documents",i={documents:t.map(e=>di(n.serializer,e))},s=await n.vo("BatchGetDocuments",r,i,t.length),o=new Map;s.forEach(e=>{const t=wi(n.serializer,e);o.set(t.key.toString(),t)});const a=[];return t.forEach(e=>{const t=o.get(e.toString());b(!!t),a.push(t)}),a}(this.datastore,e);return t.forEach(e=>this.recordVersion(e)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(e){this.lastWriteError=e}this.writtenDocs.add(e.toString())}delete(e){this.write(new Ar(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((e,t)=>{const n=G.fromPath(t);this.mutations.push(new Cr(n,this.precondition(n)))}),await async function(e,t){const n=_(e),r=mi(n.serializer)+"/documents",i={writes:t.map(e=>Ii(n.serializer,e))};await n.Io("Commit",r,i)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw y();t=V.min()}const n=this.readVersions.get(e.key.toString());if(n){if(!t.isEqual(n))throw new E(I.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(V.min())?gr.exists(!1):gr.updateTime(t):gr.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(V.min()))throw new E(I.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return gr.updateTime(t)}return gr.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iu{constructor(e,t,n,r,i){this.asyncQueue=e,this.datastore=t,this.options=n,this.updateFunction=r,this.deferred=i,this.Bc=n.maxAttempts,this.qo=new pa(this.asyncQueue,"transaction_retry")}run(){this.Bc-=1,this.Lc()}Lc(){this.qo.No(async()=>{const e=new ru(this.datastore),t=this.qc(e);t&&t.then(t=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(t)}).catch(e=>{this.Uc(e)}))}).catch(e=>{this.Uc(e)})})}qc(e){try{const t=this.updateFunction(e);return!me(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(e){return this.deferred.reject(e),null}}Uc(e){this.Bc>0&&this.Kc(e)?(this.Bc-=1,this.asyncQueue.enqueueAndForget(()=>(this.Lc(),Promise.resolve()))):this.deferred.reject(e)}Kc(e){if("FirebaseError"===e.name){const t=e.code;return"aborted"===t||"failed-precondition"===t||"already-exists"===t||!Lr(t)}return!1}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su{constructor(e,t,n,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=u.UNAUTHENTICATED,this.clientId=P.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,async e=>{p("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e}),this.appCheckCredentials.start(n,e=>(p("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new E(I.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new T;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=Ya(t,"Failed to shutdown persistence");e.reject(n)}}),e.promise}}async function ou(e,t){e.asyncQueue.verifyOperationInProgress(),p("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async e=>{r.isEqual(e)||(await Ro(t.localStore,e),r=e)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function au(e,t){e.asyncQueue.verifyOperationInProgress();const n=await uu(e);p("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener(e=>$a(t.remoteStore,e)),e.setAppCheckTokenChangeListener((e,n)=>$a(t.remoteStore,n)),e._onlineComponents=t}function cu(e){return"FirebaseError"===e.name?e.code===I.FAILED_PRECONDITION||e.code===I.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&e instanceof DOMException)||22===e.code||20===e.code||11===e.code}async function uu(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){p("FirestoreClient","Using user provided OfflineComponentProvider");try{await ou(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!cu(n))throw n;m("Error using user provided cache. Falling back to memory cache: "+n),await ou(e,new Yc)}}else p("FirestoreClient","Using default OfflineComponentProvider"),await ou(e,new Yc);return e._offlineComponents}async function lu(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(p("FirestoreClient","Using user provided OnlineComponentProvider"),await au(e,e._uninitializedComponentsProvider._online)):(p("FirestoreClient","Using default OnlineComponentProvider"),await au(e,new Zc))),e._onlineComponents}function hu(e){return uu(e).then(e=>e.persistence)}function du(e){return uu(e).then(e=>e.localStore)}function fu(e){return lu(e).then(e=>e.remoteStore)}function pu(e){return lu(e).then(e=>e.syncEngine)}function gu(e){return lu(e).then(e=>e.datastore)}async function mu(e){const t=await lu(e),n=t.eventManager;return n.onListen=yc.bind(null,t.syncEngine),n.onUnlisten=wc.bind(null,t.syncEngine),n}function vu(e){return e.asyncQueue.enqueue(async()=>{const t=await hu(e),n=await fu(e);return t.setNetworkEnabled(!0),function(e){const t=_(e);return t.vu.delete(0),_a(t)}(n)})}function yu(e){return e.asyncQueue.enqueue(async()=>{const t=await hu(e),n=await fu(e);return t.setNetworkEnabled(!1),async function(e){const t=_(e);t.vu.add(0),await Ia(t),t.bu.set("Offline")}(n)})}function bu(e,t){const n=new T;return e.asyncQueue.enqueueAndForget(async()=>async function(e,t,n){try{const r=await function(e,t){const n=_(e);return n.persistence.runTransaction("read document","readonly",e=>n.localDocuments.getDocument(e,t))}(e,t);r.isFoundDocument()?n.resolve(r):r.isNoDocument()?n.resolve(null):n.reject(new E(I.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(e){const r=Ya(e,`Failed to get document '${t} from cache`);n.reject(r)}}(await du(e),t,n)),n.promise}function wu(e,t,n={}){const r=new T;return e.asyncQueue.enqueueAndForget(async()=>function(e,t,n,r,i){const s=new tu({next:s=>{t.enqueueAndForget(()=>rc(e,o));const a=s.docs.has(n);!a&&s.fromCache?i.reject(new E(I.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&s.fromCache&&r&&"server"===r.source?i.reject(new E(I.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(s)},error:e=>i.reject(e)}),o=new ac(_n(n.path),s,{includeMetadataChanges:!0,Ku:!0});return nc(e,o)}(await mu(e),e.asyncQueue,t,n,r)),r.promise}function _u(e,t){const n=new T;return e.asyncQueue.enqueueAndForget(async()=>async function(e,t,n){try{const r=await Bo(e,t,!0),i=new pc(t,r.ir),s=i.sc(r.documents),o=i.applyChanges(s,!1);n.resolve(o.snapshot)}catch(e){const r=Ya(e,`Failed to execute query '${t} against cache`);n.reject(r)}}(await du(e),t,n)),n.promise}function Iu(e,t,n={}){const r=new T;return e.asyncQueue.enqueueAndForget(async()=>function(e,t,n,r,i){const s=new tu({next:n=>{t.enqueueAndForget(()=>rc(e,o)),n.fromCache&&"server"===r.source?i.reject(new E(I.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:e=>i.reject(e)}),o=new ac(n,s,{includeMetadataChanges:!0,Ku:!0});return nc(e,o)}(await mu(e),e.asyncQueue,t,n,r)),r.promise}function Eu(e,t){const n=new tu(t);return e.asyncQueue.enqueueAndForget(async()=>function(e,t){_(e).ku.add(t),t.next()}(await mu(e),n)),()=>{n.Dc(),e.asyncQueue.enqueueAndForget(async()=>function(e,t){_(e).ku.delete(t)}(await mu(e),n))}}function Tu(e,t,n,r){const i=function(e,t){let n;return n="string"==typeof e?Ur().encode(e):e,function(e,t){return new nu(e,t)}(function(e,t){if(e instanceof Uint8Array)return eu(e,t);if(e instanceof ArrayBuffer)return eu(new Uint8Array(e),t);if(e instanceof ReadableStream)return e.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(n),t)}(n,fa(t));e.asyncQueue.enqueueAndForget(async()=>{Qc(await pu(e),i,r)})}function Su(e,t){return e.asyncQueue.enqueue(async()=>function(e,t){const n=_(e);return n.persistence.runTransaction("Get named query","readonly",e=>n.qs.getNamedQuery(e,t))}(await du(e),t))}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ou(e){const t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const ku=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Au(e,t,n){if(!n)throw new E(I.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function Cu(e,t,n,r){if(!0===t&&!0===r)throw new E(I.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function xu(e){if(!G.isDocumentKey(e))throw new E(I.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Nu(e){if(G.isDocumentKey(e))throw new E(I.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Du(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=e.substring(0,20)+"..."),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":y()}function Ru(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new E(I.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Du(e);throw new E(I.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}function Pu(e,t){if(t<=0)throw new E(I.INVALID_ARGUMENT,`Function ${e}() requires a positive number, but it was: ${t}.`)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ju{constructor(e){var t,n;if(void 0===e.host){if(void 0!==e.ssl)throw new E(I.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new E(I.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Cu("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ou(null!==(n=e.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new E(I.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new E(I.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new E(I.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,n=e.experimentalLongPollingOptions,t.timeoutSeconds===n.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var t,n}}class Lu{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ju({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new E(I.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new E(I.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ju(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new O;switch(e.type){case"firstParty":return new x(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new E(I.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=ku.get(e);t&&(p("ComponentProvider","Removing Datastore"),ku.delete(e),t.terminate())}(this),Promise.resolve()}}function Mu(e,t,n,r={}){var i;const s=(e=Ru(e,Lu))._getSettings(),a=`${t}:${n}`;if("firestore.googleapis.com"!==s.host&&s.host!==a&&m("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:a,ssl:!1})),r.mockUserToken){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=u.MOCK_USER;else{t=Object(o["g"])(r.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);const s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new E(I.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new u(s)}e._authCredentials=new k(new S(t,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fu{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Uu(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Fu(this.firestore,e,this._key)}}class Vu{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new Vu(this.firestore,e,this._query)}}class Uu extends Vu{constructor(e,t,n){super(e,t,_n(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Fu(this.firestore,null,new G(e))}withConverter(e){return new Uu(this.firestore,e,this._path)}}function Bu(e,t,...n){if(e=Object(o["p"])(e),Au("collection","path",t),e instanceof Lu){const r=B.fromString(t,...n);return Nu(r),new Uu(e,null,r)}{if(!(e instanceof Fu||e instanceof Uu))throw new E(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(B.fromString(t,...n));return Nu(r),new Uu(e.firestore,null,r)}}function qu(e,t){if(e=Ru(e,Lu),Au("collectionGroup","collection id",t),t.indexOf("/")>=0)throw new E(I.INVALID_ARGUMENT,`Invalid collection ID '${t}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Vu(e,null,function(e){return new bn(B.emptyPath(),e)}(t))}function zu(e,t,...n){if(e=Object(o["p"])(e),1===arguments.length&&(t=P.A()),Au("doc","path",t),e instanceof Lu){const r=B.fromString(t,...n);return xu(r),new Fu(e,null,new G(r))}{if(!(e instanceof Fu||e instanceof Uu))throw new E(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(B.fromString(t,...n));return xu(r),new Fu(e.firestore,e instanceof Uu?e.converter:null,new G(r))}}function Gu(e,t){return e=Object(o["p"])(e),t=Object(o["p"])(t),(e instanceof Fu||e instanceof Uu)&&(t instanceof Fu||t instanceof Uu)&&e.firestore===t.firestore&&e.path===t.path&&e.converter===t.converter}function $u(e,t){return e=Object(o["p"])(e),t=Object(o["p"])(t),e instanceof Vu&&t instanceof Vu&&e.firestore===t.firestore&&xn(e._query,t._query)&&e.converter===t.converter
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Ku{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new pa(this,"async_queue_retry"),this.Xc=()=>{const e=da();e&&p("AsyncQueue","Visibility state changed to "+e.visibilityState),this.qo.Mo()};const e=da();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Zc(),this.ta(e)}enterRestrictedMode(e){if(!this.jc){this.jc=!0,this.Jc=e||!1;const t=da();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Xc)}}enqueue(e){if(this.Zc(),this.jc)return new Promise(()=>{});const t=new T;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qc.push(e),this.ea()))}async ea(){if(0!==this.Qc.length){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(e){if(!ce(e))throw e;p("AsyncQueue","Operation failed with retryable error: "+e)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(e){const t=this.Gc.then(()=>(this.Hc=!0,e().catch(e=>{this.Wc=e,this.Hc=!1;const t=function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e);throw g("INTERNAL UNHANDLED ERROR: ",t),e}).then(e=>(this.Hc=!1,e))));return this.Gc=t,t}enqueueAfterDelay(e,t,n){this.Zc(),this.Yc.indexOf(e)>-1&&(t=0);const r=Qa.createAndSchedule(this,e,t,n,e=>this.na(e));return this.zc.push(r),r}Zc(){this.Wc&&y()}verifyOperationInProgress(){}async sa(){let e;do{e=this.Gc,await e}while(e!==this.Gc)}ia(e){for(const t of this.zc)if(t.timerId===e)return!0;return!1}ra(e){return this.sa().then(()=>{this.zc.sort((e,t)=>e.targetTimeMs-t.targetTimeMs);for(const t of this.zc)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.sa()})}oa(e){this.Yc.push(e)}na(e){const t=this.zc.indexOf(e);this.zc.splice(t,1)}}function Hu(e){return function(e,t){if("object"!=typeof e||null===e)return!1;const n=e;for(const r of t)if(r in n&&"function"==typeof n[r])return!0;return!1}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,["next","error","complete"])}class Wu{constructor(){this._progressObserver={},this._taskCompletionResolver=new T,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,n){this._progressObserver={next:e,error:t,complete:n}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qu=-1;class Yu extends Lu{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new Ku,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Xu(this),this._firestoreClient.terminate()}}function Ju(e){return e._firestoreClient||Xu(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Xu(e){var t,n,r;const i=e._freezeSettings(),s=function(e,t,n,r){return new pt(e,t,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,Ou(r.experimentalLongPollingOptions),r.useFetchStreams)}(e._databaseId,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,i);e._firestoreClient=new su(e._authCredentials,e._appCheckCredentials,e._queue,s),(null===(n=i.cache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(r=i.cache)||void 0===r?void 0:r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}function Zu(e,t){cl(e=Ru(e,Yu));const n=Ju(e);if(n._uninitializedComponentsProvider)throw new E(I.FAILED_PRECONDITION,"SDK cache is already specified.");m("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const r=e._freezeSettings(),i=new Zc;return tl(n,i,new Jc(i,r.cacheSizeBytes,null==t?void 0:t.forceOwnership))}function el(e){cl(e=Ru(e,Yu));const t=Ju(e);if(t._uninitializedComponentsProvider)throw new E(I.FAILED_PRECONDITION,"SDK cache is already specified.");m("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const n=e._freezeSettings(),r=new Zc;return tl(t,r,new Xc(r,n.cacheSizeBytes))}function tl(e,t,n){const r=new T;return e.asyncQueue.enqueue(async()=>{try{await ou(e,n),await au(e,t),r.resolve()}catch(e){const n=e;if(!cu(n))throw n;m("Error enabling indexeddb cache. Falling back to memory cache: "+n),r.reject(n)}}).then(()=>r.promise)}function nl(e){if(e._initialized&&!e._terminated)throw new E(I.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const t=new T;return e._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(e){if(!se.D())return Promise.resolve();const t=e+"main";await se.delete(t)}(Ao(e._databaseId,e._persistenceKey)),t.resolve()}catch(e){t.reject(e)}}),t.promise}function rl(e){return function(e){const t=new T;return e.asyncQueue.enqueueAndForget(async()=>kc(await pu(e),t)),t.promise}(Ju(e=Ru(e,Yu)))}function il(e){return vu(Ju(e=Ru(e,Yu)))}function sl(e){return yu(Ju(e=Ru(e,Yu)))}function ol(e,t){const n=Ju(e=Ru(e,Yu)),r=new Wu;return Tu(n,e._databaseId,t,r),r}function al(e,t){return Su(Ju(e=Ru(e,Yu)),t).then(t=>t?new Vu(e,null,t.query):null)}function cl(e){if(e._initialized||e._terminated)throw new E(I.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ul{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ul(ot.fromBase64String(e))}catch(e){throw new E(I.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new ul(ot.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new E(I.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new z(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class hl{constructor(e){this._methodName=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new E(I.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new E(I.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return j(this._lat,e._lat)||j(this._long,e._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fl=/^__.*__$/;class pl{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new Tr(e,this.data,this.fieldMask,t,this.fieldTransforms):new Er(e,this.data,t,this.fieldTransforms)}}class gl{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new Tr(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function ml(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw y()}}class vl{constructor(e,t,n,r,i,s){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===i&&this.ua(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(e){return new vl(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.aa({path:n,la:!1});return r.fa(e),r}da(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.aa({path:n,la:!1});return r.ua(),r}wa(e){return this.aa({path:void 0,la:!0})}_a(e){return Ml(e,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(e){return void 0!==this.fieldMask.find(t=>e.isPrefixOf(t))||void 0!==this.fieldTransforms.find(t=>e.isPrefixOf(t.field))}ua(){if(this.path)for(let e=0;e<this.path.length;e++)this.fa(this.path.get(e))}fa(e){if(0===e.length)throw this._a("Document fields must not be empty");if(ml(this.ca)&&fl.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class yl{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||fa(e)}ya(e,t,n,r=!1){return new vl({ca:e,methodName:t,ga:n,path:z.emptyPath(),la:!1,ma:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function bl(e){const t=e._freezeSettings(),n=fa(e._databaseId);return new yl(e._databaseId,!!t.ignoreUndefinedProperties,n)}function wl(e,t,n,r,i,s={}){const o=e.ya(s.merge||s.mergeFields?2:0,t,n,i);Rl("Data must be an object, but it was:",o,r);const a=Nl(r,o);let c,u;if(s.merge)c=new rt(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const e=[];for(const r of s.mergeFields){const i=Pl(t,r,n);if(!o.contains(i))throw new E(I.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);Fl(e,i)||e.push(i)}c=new rt(e),u=o.fieldTransforms.filter(e=>c.covers(e.field))}else c=null,u=o.fieldTransforms;return new pl(new Mt(a),c,u)}class _l extends hl{_toFieldTransform(e){if(2!==e.ca)throw 1===e.ca?e._a(this._methodName+"() can only appear at the top level of your update data"):e._a(this._methodName+"() cannot be used with set() unless you pass {merge:true}");return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof _l}}function Il(e,t,n){return new vl({ca:3,ga:t.settings.ga,methodName:e._methodName,la:n},t.databaseId,t.serializer,t.ignoreUndefinedProperties)}class El extends hl{_toFieldTransform(e){return new dr(e.path,new ir)}isEqual(e){return e instanceof El}}class Tl extends hl{constructor(e,t){super(e),this.pa=t}_toFieldTransform(e){const t=Il(this,e,!0),n=this.pa.map(e=>xl(e,t)),r=new sr(n);return new dr(e.path,r)}isEqual(e){return this===e}}class Sl extends hl{constructor(e,t){super(e),this.pa=t}_toFieldTransform(e){const t=Il(this,e,!0),n=this.pa.map(e=>xl(e,t)),r=new ar(n);return new dr(e.path,r)}isEqual(e){return this===e}}class Ol extends hl{constructor(e,t){super(e),this.Ia=t}_toFieldTransform(e){const t=new ur(e.serializer,Zn(e.serializer,this.Ia));return new dr(e.path,t)}isEqual(e){return this===e}}function kl(e,t,n,r){const i=e.ya(1,t,n);Rl("Data must be an object, but it was:",i,r);const s=[],a=Mt.empty();Qe(r,(e,r)=>{const c=Ll(t,e,n);r=Object(o["p"])(r);const u=i.da(c);if(r instanceof _l)s.push(c);else{const e=xl(r,u);null!=e&&(s.push(c),a.set(c,e))}});const c=new rt(s);return new gl(a,c,i.fieldTransforms)}function Al(e,t,n,r,i,s){const a=e.ya(1,t,n),c=[Pl(t,r,n)],u=[i];if(s.length%2!=0)throw new E(I.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let o=0;o<s.length;o+=2)c.push(Pl(t,s[o])),u.push(s[o+1]);const l=[],h=Mt.empty();for(let f=c.length-1;f>=0;--f)if(!Fl(l,c[f])){const e=c[f];let t=u[f];t=Object(o["p"])(t);const n=a.da(e);if(t instanceof _l)l.push(e);else{const r=xl(t,n);null!=r&&(l.push(e),h.set(e,r))}}const d=new rt(l);return new gl(h,d,a.fieldTransforms)}function Cl(e,t,n,r=!1){return xl(n,e.ya(r?4:3,t))}function xl(e,t){if(Dl(e=Object(o["p"])(e)))return Rl("Unsupported field value:",t,e),Nl(e,t);if(e instanceof hl)return function(e,t){if(!ml(t.ca))throw t._a(e._methodName+"() can only be used with update() and set()");if(!t.path)throw t._a(e._methodName+"() is not currently supported inside arrays");const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.la&&4!==t.ca)throw t._a("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const i of e){let e=xl(i,t.wa(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=Object(o["p"])(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return Zn(t.serializer,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=F.fromDate(e);return{timestampValue:oi(t.serializer,n)}}if(e instanceof F){const n=new F(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:oi(t.serializer,n)}}if(e instanceof dl)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof ul)return{bytesValue:ai(t.serializer,e._byteString)};if(e instanceof Fu){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t._a(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:li(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t._a("Unsupported field value: "+Du(e))}(e,t)}function Nl(e,t){const n={};return Ye(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Qe(e,(e,r)=>{const i=xl(r,t.ha(e));null!=i&&(n[e]=i)}),{mapValue:{fields:n}}}function Dl(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof F||e instanceof dl||e instanceof ul||e instanceof Fu||e instanceof hl)}function Rl(e,t,n){if(!Dl(n)||!function(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}(n)){const r=Du(n);throw"an object"===r?t._a(e+" a custom object"):t._a(e+" "+r)}}function Pl(e,t,n){if((t=Object(o["p"])(t))instanceof ll)return t._internalPath;if("string"==typeof t)return Ll(e,t);throw Ml("Field path arguments must be of type string or ",e,!1,void 0,n)}const jl=new RegExp("[~\\*/\\[\\]]");function Ll(e,t,n){if(t.search(jl)>=0)throw Ml(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new ll(...t.split("."))._internalPath}catch(r){throw Ml(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Ml(e,t,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=" in field "+r),o&&(c+=" in document "+i),c+=")"),new E(I.INVALID_ARGUMENT,a+e+c)}function Fl(e,t){return e.some(e=>e.isEqual(t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Fu(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new Ul(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Bl("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class Ul extends Vl{data(){return super.data()}}function Bl(e,t){return"string"==typeof t?Ll(e,t):t instanceof ll?t._internalPath:t._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ql(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new E(I.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class zl{}class Gl extends zl{}function $l(e,t,...n){let r=[];t instanceof zl&&r.push(t),r=r.concat(n),function(e){const t=e.filter(e=>e instanceof Wl).length,n=e.filter(e=>e instanceof Kl).length;if(t>1||t>0&&n>0)throw new E(I.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(r);for(const i of r)e=i._apply(e);return e}class Kl extends Gl{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new Kl(e,t,n)}_apply(e){const t=this._parse(e);return uh(e._query,t),new Vu(e.firestore,e.converter,An(e._query,t))}_parse(e){const t=bl(e.firestore),n=function(e,t,n,r,i,s,o){let a;if(i.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new E(I.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on documentId().`);if("in"===s||"not-in"===s){ch(o,s);const t=[];for(const n of o)t.push(ah(r,e,n));a={arrayValue:{values:t}}}else a=ah(r,e,o)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||ch(o,s),a=Cl(n,t,o,"in"===s||"not-in"===s);return Kt.create(i,s,a)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value);return n}}function Hl(e,t,n){const r=t,i=Bl("where",e);return Kl._create(i,r,n)}class Wl extends zl{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Wl(e,t)}_parse(e){const t=this._queryConstraints.map(t=>t._parse(e)).filter(e=>e.getFilters().length>0);return 1===t.length?t[0]:Ht.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return 0===t.getFilters().length?e:(function(e,t){let n=e;const r=t.getFlattenedFilters();for(const i of r)uh(n,i),n=An(n,i)}(e._query,t),new Vu(e.firestore,e.converter,An(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}class Ql extends Gl{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Ql(e,t)}_apply(e){const t=function(e,t,n){if(null!==e.startAt)throw new E(I.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==e.endAt)throw new E(I.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const r=new zt(t,n);return function(e,t){if(null===En(e)){const n=Tn(e);null!==n&&lh(e,n,t.field)}}(e,r),r}(e._query,this._field,this._direction);return new Vu(e.firestore,e.converter,function(e,t){const n=e.explicitOrderBy.concat([t]);return new bn(e.path,e.collectionGroup,n,e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(e._query,t))}}function Yl(e,t="asc"){const n=t,r=Bl("orderBy",e);return Ql._create(r,n)}class Jl extends Gl{constructor(e,t,n){super(),this.type=e,this._limit=t,this._limitType=n}static _create(e,t,n){return new Jl(e,t,n)}_apply(e){return new Vu(e.firestore,e.converter,Cn(e._query,this._limit,this._limitType))}}function Xl(e){return Pu("limit",e),Jl._create("limit",e,"F")}function Zl(e){return Pu("limitToLast",e),Jl._create("limitToLast",e,"L")}class eh extends Gl{constructor(e,t,n){super(),this.type=e,this._docOrFields=t,this._inclusive=n}static _create(e,t,n){return new eh(e,t,n)}_apply(e){const t=oh(e,this.type,this._docOrFields,this._inclusive);return new Vu(e.firestore,e.converter,function(e,t){return new bn(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,t,e.endAt)}(e._query,t))}}function th(...e){return eh._create("startAt",e,!0)}function nh(...e){return eh._create("startAfter",e,!1)}class rh extends Gl{constructor(e,t,n){super(),this.type=e,this._docOrFields=t,this._inclusive=n}static _create(e,t,n){return new rh(e,t,n)}_apply(e){const t=oh(e,this.type,this._docOrFields,this._inclusive);return new Vu(e.firestore,e.converter,function(e,t){return new bn(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,t)}(e._query,t))}}function ih(...e){return rh._create("endBefore",e,!1)}function sh(...e){return rh._create("endAt",e,!0)}function oh(e,t,n,r){if(n[0]=Object(o["p"])(n[0]),n[0]instanceof Vl)return function(e,t,n,r,i){if(!r)throw new E(I.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${n}().`);const s=[];for(const o of On(e))if(o.field.isKeyField())s.push(St(t,r.key));else{const e=r.data.field(o.field);if(ht(e))throw new E(I.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+o.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(null===e){const e=o.field.canonicalString();throw new E(I.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${e}' (used as the orderBy) does not exist.`)}s.push(e)}return new Ut(s,i)}(e._query,e.firestore._databaseId,t,n[0]._document,r);{const i=bl(e.firestore);return function(e,t,n,r,i,s){const o=e.explicitOrderBy;if(i.length>o.length)throw new E(I.INVALID_ARGUMENT,`Too many arguments provided to ${r}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const a=[];for(let c=0;c<i.length;c++){const s=i[c];if(o[c].field.isKeyField()){if("string"!=typeof s)throw new E(I.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${r}(), but got a ${typeof s}`);if(!Sn(e)&&-1!==s.indexOf("/"))throw new E(I.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${r}() must be a plain document ID, but '${s}' contains a slash.`);const n=e.path.child(B.fromString(s));if(!G.isDocumentKey(n))throw new E(I.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${r}() must result in a valid document path, but '${n}' is not because it contains an odd number of segments.`);const i=new G(n);a.push(St(t,i))}else{const e=Cl(n,r,s);a.push(e)}}return new Ut(a,s)}(e._query,e.firestore._databaseId,i,t,n,r)}}function ah(e,t,n){if("string"==typeof(n=Object(o["p"])(n))){if(""===n)throw new E(I.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Sn(t)&&-1!==n.indexOf("/"))throw new E(I.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=t.path.child(B.fromString(n));if(!G.isDocumentKey(r))throw new E(I.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return St(e,new G(r))}if(n instanceof Fu)return St(e,n._key);throw new E(I.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Du(n)}.`)}function ch(e,t){if(!Array.isArray(e)||0===e.length)throw new E(I.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function uh(e,t){if(t.isInequality()){const n=Tn(e),r=t.field;if(null!==n&&!n.isEqual(r))throw new E(I.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${r.toString()}'`);const i=En(e);null!==i&&lh(e,r,i)}const n=function(e,t){for(const n of e)for(const e of n.getFlattenedFilters())if(t.indexOf(e.op)>=0)return e.op;return null}(e.filters,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==n)throw n===t.op?new E(I.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new E(I.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}function lh(e,t,n){if(!n.isEqual(t))throw new E(I.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class hh{convertValue(e,t="none"){switch(yt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ut(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(lt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw y()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return Qe(e,(e,r)=>{n[e]=this.convertValue(r,t)}),n}convertGeoPoint(e){return new dl(ut(e.latitude),ut(e.longitude))}convertArray(e,t){return(e.values||[]).map(e=>this.convertValue(e,t))}convertServerTimestamp(e,t){switch(t){case"previous":const n=dt(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(ft(e));default:return null}}convertTimestamp(e){const t=ct(e);return new F(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=B.fromString(e);b(Mi(n));const r=new gt(n.get(1),n.get(3)),i=new G(n.popFirst(5));return r.isEqual(t)||g(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dh(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}class fh extends hh{constructor(e){super(),this.firestore=e}convertBytes(e){return new ul(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Fu(this.firestore,null,t)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ph{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class gh extends Vl{constructor(e,t,n,r,i,s){super(e,t,n,r,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new mh(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(Bl("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class mh extends gh{data(e={}){return super.data(e)}}class vh{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new ph(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new mh(this._firestore,this._userDataWriter,n.key,n,new ph(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new E(I.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map(n=>{const r=new mh(e._firestore,e._userDataWriter,n.doc.key,n.doc,new ph(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:t++}})}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter(e=>t||3!==e.type).map(t=>{const r=new mh(e._firestore,e._userDataWriter,t.doc.key,t.doc,new ph(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let i=-1,s=-1;return 0!==t.type&&(i=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),s=n.indexOf(t.doc.key)),{type:yh(t.type),doc:r,oldIndex:i,newIndex:s}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function yh(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return y()}}function bh(e,t){return e instanceof gh&&t instanceof gh?e._firestore===t._firestore&&e._key.isEqual(t._key)&&(null===e._document?null===t._document:e._document.isEqual(t._document))&&e._converter===t._converter:e instanceof vh&&t instanceof vh&&e._firestore===t._firestore&&$u(e.query,t.query)&&e.metadata.isEqual(t.metadata)&&e._snapshot.isEqual(t._snapshot)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wh(e){e=Ru(e,Fu);const t=Ru(e.firestore,Yu);return wu(Ju(t),e._key).then(n=>Ph(t,e,n))}class _h extends hh{constructor(e){super(),this.firestore=e}convertBytes(e){return new ul(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Fu(this.firestore,null,t)}}function Ih(e){e=Ru(e,Fu);const t=Ru(e.firestore,Yu),n=Ju(t),r=new _h(t);return bu(n,e._key).then(n=>new gh(t,r,e._key,n,new ph(null!==n&&n.hasLocalMutations,!0),e.converter))}function Eh(e){e=Ru(e,Fu);const t=Ru(e.firestore,Yu);return wu(Ju(t),e._key,{source:"server"}).then(n=>Ph(t,e,n))}function Th(e){e=Ru(e,Vu);const t=Ru(e.firestore,Yu),n=Ju(t),r=new _h(t);return ql(e._query),Iu(n,e._query).then(n=>new vh(t,r,e,n))}function Sh(e){e=Ru(e,Vu);const t=Ru(e.firestore,Yu),n=Ju(t),r=new _h(t);return _u(n,e._query).then(n=>new vh(t,r,e,n))}function Oh(e){e=Ru(e,Vu);const t=Ru(e.firestore,Yu),n=Ju(t),r=new _h(t);return Iu(n,e._query,{source:"server"}).then(n=>new vh(t,r,e,n))}function kh(e,t,n){e=Ru(e,Fu);const r=Ru(e.firestore,Yu),i=dh(e.converter,t,n);return Rh(r,[wl(bl(r),"setDoc",e._key,i,null!==e.converter,n).toMutation(e._key,gr.none())])}function Ah(e,t,n,...r){e=Ru(e,Fu);const i=Ru(e.firestore,Yu),s=bl(i);let a;return a="string"==typeof(t=Object(o["p"])(t))||t instanceof ll?Al(s,"updateDoc",e._key,t,n,r):kl(s,"updateDoc",e._key,t),Rh(i,[a.toMutation(e._key,gr.exists(!0))])}function Ch(e){return Rh(Ru(e.firestore,Yu),[new Ar(e._key,gr.none())])}function xh(e,t){const n=Ru(e.firestore,Yu),r=zu(e),i=dh(e.converter,t);return Rh(n,[wl(bl(e.firestore),"addDoc",r._key,i,null!==e.converter,{}).toMutation(r._key,gr.exists(!1))]).then(()=>r)}function Nh(e,...t){var n,r,i;e=Object(o["p"])(e);let s={includeMetadataChanges:!1},a=0;"object"!=typeof t[a]||Hu(t[a])||(s=t[a],a++);const c={includeMetadataChanges:s.includeMetadataChanges};if(Hu(t[a])){const e=t[a];t[a]=null===(n=e.next)||void 0===n?void 0:n.bind(e),t[a+1]=null===(r=e.error)||void 0===r?void 0:r.bind(e),t[a+2]=null===(i=e.complete)||void 0===i?void 0:i.bind(e)}let u,l,h;if(e instanceof Fu)l=Ru(e.firestore,Yu),h=_n(e._key.path),u={next:n=>{t[a]&&t[a](Ph(l,e,n))},error:t[a+1],complete:t[a+2]};else{const n=Ru(e,Vu);l=Ru(n.firestore,Yu),h=n._query;const r=new _h(l);u={next:e=>{t[a]&&t[a](new vh(l,r,n,e))},error:t[a+1],complete:t[a+2]},ql(e._query)}return function(e,t,n,r){const i=new tu(r),s=new ac(t,i,n);return e.asyncQueue.enqueueAndForget(async()=>nc(await mu(e),s)),()=>{i.Dc(),e.asyncQueue.enqueueAndForget(async()=>rc(await mu(e),s))}}(Ju(l),h,c,u)}function Dh(e,t){return Eu(Ju(e=Ru(e,Yu)),Hu(t)?t:{next:t})}function Rh(e,t){return function(e,t){const n=new T;return e.asyncQueue.enqueueAndForget(async()=>_c(await pu(e),t,n)),n.promise}(Ju(e),t)}function Ph(e,t,n){const r=n.docs.get(t._key),i=new _h(e);return new gh(e,i,t._key,r,new ph(n.hasPendingWrites,n.fromCache),t.converter)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const jh={maxAttempts:5};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lh{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=bl(e)}set(e,t,n){this._verifyNotCommitted();const r=Mh(e,this._firestore),i=dh(r.converter,t,n),s=wl(this._dataReader,"WriteBatch.set",r._key,i,null!==r.converter,n);return this._mutations.push(s.toMutation(r._key,gr.none())),this}update(e,t,n,...r){this._verifyNotCommitted();const i=Mh(e,this._firestore);let s;return s="string"==typeof(t=Object(o["p"])(t))||t instanceof ll?Al(this._dataReader,"WriteBatch.update",i._key,t,n,r):kl(this._dataReader,"WriteBatch.update",i._key,t),this._mutations.push(s.toMutation(i._key,gr.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=Mh(e,this._firestore);return this._mutations=this._mutations.concat(new Ar(t._key,gr.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new E(I.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Mh(e,t){if((e=Object(o["p"])(e)).firestore!==t)throw new E(I.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fh extends class{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=bl(e)}get(e){const t=Mh(e,this._firestore),n=new fh(this._firestore);return this._transaction.lookup([t._key]).then(e=>{if(!e||1!==e.length)return y();const r=e[0];if(r.isFoundDocument())return new Vl(this._firestore,n,r.key,r,t.converter);if(r.isNoDocument())return new Vl(this._firestore,n,t._key,null,t.converter);throw y()})}set(e,t,n){const r=Mh(e,this._firestore),i=dh(r.converter,t,n),s=wl(this._dataReader,"Transaction.set",r._key,i,null!==r.converter,n);return this._transaction.set(r._key,s),this}update(e,t,n,...r){const i=Mh(e,this._firestore);let s;return s="string"==typeof(t=Object(o["p"])(t))||t instanceof ll?Al(this._dataReader,"Transaction.update",i._key,t,n,r):kl(this._dataReader,"Transaction.update",i._key,t),this._transaction.update(i._key,s),this}delete(e){const t=Mh(e,this._firestore);return this._transaction.delete(t._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=Mh(e,this._firestore),n=new _h(this._firestore);return super.get(e).then(e=>new gh(this._firestore,n,t._key,e._document,new ph(!1,!1),t.converter))}}function Vh(e,t,n){e=Ru(e,Yu);const r=Object.assign(Object.assign({},jh),n);return function(e){if(e.maxAttempts<1)throw new E(I.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(e,t,n){const r=new T;return e.asyncQueue.enqueueAndForget(async()=>{const i=await gu(e);new iu(e.asyncQueue,i,n,t,r).run()}),r.promise}(Ju(e),n=>t(new Fh(e,n)),r)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uh(){return new _l("deleteField")}function Bh(){return new El("serverTimestamp")}function qh(...e){return new Tl("arrayUnion",e)}function zh(...e){return new Sl("arrayRemove",e)}function Gh(e){return new Ol("increment",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(e,t=!0){!function(e){l=e}(r["SDK_VERSION"]),Object(r["_registerComponent"])(new i["a"]("firestore",(e,{instanceIdentifier:n,options:r})=>{const i=e.getProvider("app").getImmediate(),s=new Yu(new A(e.getProvider("auth-internal")),new D(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new E(I.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new gt(e.options.projectId,t)}(i,n),i);return r=Object.assign({useFetchStreams:t},r),s._setSettings(r),s},"PUBLIC").setMultipleInstances(!0)),Object(r["registerVersion"])(c,"3.13.0",e),Object(r["registerVersion"])(c,"3.13.0","esm2017")}()}).call(this,n("4362"))},"0b42":function(e,t,n){var r=n("da84"),i=n("e8b5"),s=n("68ee"),o=n("861d"),a=n("b622"),c=a("species"),u=r.Array;e.exports=function(e){var t;return i(e)&&(t=e.constructor,s(t)&&(t===u||i(t.prototype))?t=void 0:o(t)&&(t=t[c],null===t&&(t=void 0))),void 0===t?u:t}},"0cfb":function(e,t,n){var r=n("83ab"),i=n("d039"),s=n("cc12");e.exports=!r&&!i((function(){return 7!=Object.defineProperty(s("div"),"a",{get:function(){return 7}}).a}))},"0d51":function(e,t,n){var r=n("da84"),i=r.String;e.exports=function(e){try{return i(e)}catch(t){return"Object"}}},"107c":function(e,t,n){var r=n("d039"),i=n("da84"),s=i.RegExp;e.exports=r((function(){var e=s("(?<a>b)","g");return"b"!==e.exec("b").groups.a||"bc"!=="b".replace(e,"$<a>c")}))},1494:function(e,t,n){"use strict";var r=n("0829");n.d(t,"a",(function(){return r["w"]})),n.d(t,"b",(function(){return r["y"]})),n.d(t,"c",(function(){return r["B"]})),n.d(t,"d",(function(){return r["E"]})),n.d(t,"e",(function(){return r["P"]})),n.d(t,"f",(function(){return r["X"]})),n.d(t,"g",(function(){return r["Z"]})),n.d(t,"h",(function(){return r["ab"]})),n.d(t,"i",(function(){return r["eb"]})),n.d(t,"j",(function(){return r["mb"]}))},"159b":function(e,t,n){var r=n("da84"),i=n("fdbc"),s=n("785a"),o=n("17c2"),a=n("9112"),c=function(e){if(e&&e.forEach!==o)try{a(e,"forEach",o)}catch(t){e.forEach=o}};for(var u in i)i[u]&&c(r[u]&&r[u].prototype);c(s)},1626:function(e,t){e.exports=function(e){return"function"==typeof e}},"17c2":function(e,t,n){"use strict";var r=n("b727").forEach,i=n("a640"),s=i("forEach");e.exports=s?[].forEach:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}},"19aa":function(e,t,n){var r=n("da84"),i=n("3a9b"),s=r.TypeError;e.exports=function(e,t){if(i(t,e))return e;throw s("Incorrect invocation")}},"1a2d":function(e,t,n){var r=n("e330"),i=n("7b0b"),s=r({}.hasOwnProperty);e.exports=Object.hasOwn||function(e,t){return s(i(e),t)}},"1be4":function(e,t,n){var r=n("d066");e.exports=r("document","documentElement")},"1c7e":function(e,t,n){var r=n("b622"),i=r("iterator"),s=!1;try{var o=0,a={next:function(){return{done:!!o++}},return:function(){s=!0}};a[i]=function(){return this},Array.from(a,(function(){throw 2}))}catch(c){}e.exports=function(e,t){if(!t&&!s)return!1;var n=!1;try{var r={};r[i]=function(){return{next:function(){return{done:n=!0}}}},e(r)}catch(c){}return n}},"1cdc":function(e,t,n){var r=n("342f");e.exports=/(?:ipad|iphone|ipod).*applewebkit/i.test(r)},"1d80":function(e,t,n){var r=n("da84"),i=r.TypeError;e.exports=function(e){if(void 0==e)throw i("Can't call method on "+e);return e}},"1da1":function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));n("d3b7");function r(e,t,n,r,i,s,o){try{var a=e[s](o),c=a.value}catch(u){return void n(u)}a.done?t(c):Promise.resolve(c).then(r,i)}function i(e){return function(){var t=this,n=arguments;return new Promise((function(i,s){var o=e.apply(t,n);function a(e){r(o,i,s,a,c,"next",e)}function c(e){r(o,i,s,a,c,"throw",e)}a(void 0)}))}}},"1dde":function(e,t,n){var r=n("d039"),i=n("b622"),s=n("2d00"),o=i("species");e.exports=function(e){return s>=51||!r((function(){var t=[],n=t.constructor={};return n[o]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"1f5a":function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return Ze})),n.d(t,"c",(function(){return Tt})),n.d(t,"d",(function(){return At})),n.d(t,"e",(function(){return xt})),n.d(t,"f",(function(){return Ct})),n.d(t,"g",(function(){return pt})),n.d(t,"h",(function(){return kt})),n.d(t,"i",(function(){return Hr})),n.d(t,"j",(function(){return us})),n.d(t,"k",(function(){return c})),n.d(t,"l",(function(){return Vr})),n.d(t,"m",(function(){return Dt})),n.d(t,"n",(function(){return Pt})),n.d(t,"o",(function(){return jt})),n.d(t,"p",(function(){return E})),n.d(t,"q",(function(){return $e})),n.d(t,"r",(function(){return y})),n.d(t,"s",(function(){return Zn})),n.d(t,"t",(function(){return le})),n.d(t,"u",(function(){return _i})),n.d(t,"v",(function(){return hi})),n.d(t,"w",(function(){return fe})),n.d(t,"y",(function(){return on})),n.d(t,"z",(function(){return Wn})),n.d(t,"A",(function(){return os})),n.d(t,"B",(function(){return Yn})),n.d(t,"C",(function(){return an})),n.d(t,"D",(function(){return sn})),n.d(t,"E",(function(){return We})),n.d(t,"G",(function(){return un})),n.d(t,"H",(function(){return d})),n.d(t,"I",(function(){return gn})),n.d(t,"J",(function(){return xn})),n.d(t,"K",(function(){return Rn})),n.d(t,"L",(function(){return wi})),n.d(t,"M",(function(){return de})),n.d(t,"N",(function(){return _r})),n.d(t,"O",(function(){return dn})),n.d(t,"P",(function(){return Qt})),n.d(t,"Q",(function(){return zr})),n.d(t,"R",(function(){return ri})),n.d(t,"S",(function(){return yi})),n.d(t,"T",(function(){return Bn})),n.d(t,"U",(function(){return Yt})),n.d(t,"V",(function(){return Gr})),n.d(t,"W",(function(){return ni})),n.d(t,"X",(function(){return mi})),n.d(t,"Y",(function(){return mn})),n.d(t,"Z",(function(){return rn})),n.d(t,"ab",(function(){return hn})),n.d(t,"bb",(function(){return Vt})),n.d(t,"cb",(function(){return Wt})),n.d(t,"db",(function(){return Xt})),n.d(t,"eb",(function(){return ln})),n.d(t,"fb",(function(){return fn})),n.d(t,"gb",(function(){return qr})),n.d(t,"hb",(function(){return ti})),n.d(t,"ib",(function(){return pi})),n.d(t,"jb",(function(){return zt})),n.d(t,"kb",(function(){return wn})),n.d(t,"lb",(function(){return _n})),n.d(t,"mb",(function(){return Kr})),n.d(t,"nb",(function(){return bn})),n.d(t,"ob",(function(){return vn})),n.d(t,"pb",(function(){return cn})),n.d(t,"x",(function(){return $s})),n.d(t,"F",(function(){return zs}));var r=n("1fd5"),i=n("589b");function s(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;"function"===typeof SuppressedError&&SuppressedError;var o=n("e691"),a=n("22e5");
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const c={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},u={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function l(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["login-blocked"]:"Login blocked by user-provided method: {$originalMessage}",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-password"]:"A non-empty password must be provided",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",["timeout"]:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.",["missing-recaptcha-token"]:"The reCAPTCHA token is missing when sending request to the backend.",["invalid-recaptcha-token"]:"The reCAPTCHA token is invalid when sending request to the backend.",["invalid-recaptcha-action"]:"The reCAPTCHA action is invalid when sending request to the backend.",["recaptcha-not-enabled"]:"reCAPTCHA Enterprise integration is not enabled for this project.",["missing-client-type"]:"The reCAPTCHA client type is missing when sending request to the backend.",["missing-recaptcha-version"]:"The reCAPTCHA version is missing when sending request to the backend.",["invalid-req-type"]:"Invalid request parameters.",["invalid-recaptcha-version"]:"The reCAPTCHA version is invalid when sending request to the backend."}}function h(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const d=l,f=h,p=new r["b"]("auth","Firebase",h()),g=new o["b"]("@firebase/auth");function m(e,...t){g.logLevel<=o["a"].WARN&&g.warn(`Auth (${i["SDK_VERSION"]}): ${e}`,...t)}function v(e,...t){g.logLevel<=o["a"].ERROR&&g.error(`Auth (${i["SDK_VERSION"]}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y(e,...t){throw I(e,...t)}function b(e,...t){return I(e,...t)}function w(e,t,n){const i=Object.assign(Object.assign({},f()),{[t]:n}),s=new r["b"]("auth","Firebase",i);return s.create(t,{appName:e.name})}function _(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&y(e,"argument-error"),w(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function I(e,...t){if("string"!==typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return p.create(e,...t)}function E(e,t,...n){if(!e)throw I(t,...n)}function T(e){const t="INTERNAL ASSERTION FAILED: "+e;throw v(t),new Error(t)}function S(e,t){e||T(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function k(){return"http:"===A()||"https:"===A()}function A(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(k()||Object(r["s"])()||"connection"in navigator))||navigator.onLine}function x(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{constructor(e,t){this.shortDelay=e,this.longDelay=t,S(t>e,"Short delay should be less than long delay!"),this.isMobile=Object(r["w"])()||Object(r["y"])()}get(){return C()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D(e,t){S(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void T("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void T("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void T("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"missing-password",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error",["RECAPTCHA_NOT_ENABLED"]:"recaptcha-not-enabled",["MISSING_RECAPTCHA_TOKEN"]:"missing-recaptcha-token",["INVALID_RECAPTCHA_TOKEN"]:"invalid-recaptcha-token",["INVALID_RECAPTCHA_ACTION"]:"invalid-recaptcha-action",["MISSING_CLIENT_TYPE"]:"missing-client-type",["MISSING_RECAPTCHA_VERSION"]:"missing-recaptcha-version",["INVALID_RECAPTCHA_VERSION"]:"invalid-recaptcha-version",["INVALID_REQ_TYPE"]:"invalid-req-type"},j=new N(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function M(e,t,n,i,s={}){return F(e,s,async()=>{let s={},o={};i&&("GET"===t?o=i:s={body:JSON.stringify(i)});const a=Object(r["A"])(Object.assign({key:e.config.apiKey},o)).slice(1),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode),R.fetch()(U(e,e.config.apiHost,n,a),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},s))})}async function F(e,t,n){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},P),t);try{const t=new B(e),r=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await r.json();if("needConfirmation"in s)throw q(e,"account-exists-with-different-credential",s);if(r.ok&&!("errorMessage"in s))return s;{const t=r.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw q(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw q(e,"email-already-in-use",s);if("USER_DISABLED"===n)throw q(e,"user-disabled",s);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw w(e,a,o);y(e,a)}}catch(s){if(s instanceof r["c"])throw s;y(e,"network-request-failed",{message:String(s)})}}async function V(e,t,n,r,i={}){const s=await M(e,t,n,r,i);return"mfaPendingCredential"in s&&y(e,"multi-factor-auth-required",{_serverResponse:s}),s}function U(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?D(e.config,i):`${e.config.apiScheme}://${i}`}class B{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((e,t)=>{this.timer=setTimeout(()=>t(b(this.auth,"network-request-failed")),j.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function q(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=b(e,t,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function z(e,t){return M(e,"POST","/v1/accounts:delete",t)}async function G(e,t){return M(e,"POST","/v1/accounts:update",t)}async function $(e,t){return M(e,"POST","/v1/accounts:lookup",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function H(e,t=!1){const n=Object(r["p"])(e),i=await n.getIdToken(t),s=Q(i);E(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const o="object"===typeof s.firebase?s.firebase:void 0,a=null===o||void 0===o?void 0:o["sign_in_provider"];return{claims:s,token:i,authTime:K(W(s.auth_time)),issuedAtTime:K(W(s.iat)),expirationTime:K(W(s.exp)),signInProvider:a||null,signInSecondFactor:(null===o||void 0===o?void 0:o["sign_in_second_factor"])||null}}function W(e){return 1e3*Number(e)}function Q(e){const[t,n,i]=e.split(".");if(void 0===t||void 0===n||void 0===i)return v("JWT malformed, contained fewer than 3 sections"),null;try{const e=Object(r["d"])(n);return e?JSON.parse(e):(v("Failed to decode base64 JWT payload"),null)}catch(s){return v("Caught error parsing JWT payload as JSON",null===s||void 0===s?void 0:s.toString()),null}}function Y(e){const t=Q(e);return E(t,"internal-error"),E("undefined"!==typeof t.exp,"internal-error"),E("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function J(e,t,n=!1){if(n)return t;try{return await t}catch(i){throw i instanceof r["c"]&&X(i)&&e.auth.currentUser===e&&await e.auth.signOut(),i}}function X({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,n=e-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null===e||void 0===e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=K(this.lastLoginAt),this.creationTime=K(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function te(e){var t;const n=e.auth,r=await e.getIdToken(),i=await J(e,$(n,{idToken:r}));E(null===i||void 0===i?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?ie(s.providerUserInfo):[],a=re(e.providerData,o),c=e.isAnonymous,u=!(e.email&&s.passwordHash)&&!(null===a||void 0===a?void 0:a.length),l=!!c&&u,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new ee(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(e,h)}async function ne(e){const t=Object(r["p"])(e);await te(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function re(e,t){const n=e.filter(e=>!t.some(t=>t.providerId===e.providerId));return[...n,...t]}function ie(e){return e.map(e=>{var{providerId:t}=e,n=s(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function se(e,t){const n=await F(e,{},async()=>{const n=Object(r["A"])({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,o=U(e,i,"/v1/token","key="+s),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",R.fetch()(o,{method:"POST",headers:a,body:n})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){E(e.idToken,"internal-error"),E("undefined"!==typeof e.idToken,"internal-error"),E("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):Y(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return E(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await se(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new oe;return n&&(E("string"===typeof n,"internal-error",{appName:e}),s.refreshToken=n),r&&(E("string"===typeof r,"internal-error",{appName:e}),s.accessToken=r),i&&(E("number"===typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new oe,this.toJSON())}_performRefresh(){return T("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ae(e,t){E("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class ce{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=s(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Z(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new ee(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await J(this,this.stsTokenManager.getToken(this.auth,e));return E(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return H(this,e)}reload(){return ne(this)}_assign(e){this!==e&&(E(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(e=>Object.assign({},e)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ce(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){E(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await te(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await J(this,z(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,s,o,a,c,u;const l=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,g=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,m=null!==(c=t.createdAt)&&void 0!==c?c:void 0,v=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:y,emailVerified:b,isAnonymous:w,providerData:_,stsTokenManager:I}=t;E(y&&I,e,"internal-error");const T=oe.fromJSON(this.name,I);E("string"===typeof y,e,"internal-error"),ae(l,e.name),ae(h,e.name),E("boolean"===typeof b,e,"internal-error"),E("boolean"===typeof w,e,"internal-error"),ae(d,e.name),ae(f,e.name),ae(p,e.name),ae(g,e.name),ae(m,e.name),ae(v,e.name);const S=new ce({uid:y,auth:e,email:h,emailVerified:b,displayName:l,isAnonymous:w,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:T,createdAt:m,lastLoginAt:v});return _&&Array.isArray(_)&&(S.providerData=_.map(e=>Object.assign({},e))),g&&(S._redirectEventId=g),S}static async _fromIdTokenResponse(e,t,n=!1){const r=new oe;r.updateFromServerResponse(t);const i=new ce({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await te(i),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ue=new Map;function le(e){S(e instanceof Function,"Expected a class definition");let t=ue.get(e);return t?(S(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,ue.set(e,t),t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}he.type="NONE";const de=he;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fe(e,t,n){return`firebase:${e}:${t}:${n}`}class pe{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=fe(this.userKey,r.apiKey,i),this.fullPersistenceKey=fe("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ce._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new pe(le(de),e,n);const r=(await Promise.all(t.map(async e=>{if(await e._isAvailable())return e}))).filter(e=>e);let i=r[0]||le(de);const s=fe(n,e.config.apiKey,e.name);let o=null;for(const u of t)try{const t=await u._get(s);if(t){const n=ce._fromJSON(e,t);u!==i&&(o=n),i=u;break}}catch(c){}const a=r.filter(e=>e._shouldAllowMigration);return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(t.map(async e=>{if(e!==i)try{await e._remove(s)}catch(c){}})),new pe(i,e,n)):new pe(i,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ge(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(be(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(me(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(_e(t))return"Blackberry";if(Ie(t))return"Webos";if(ve(t))return"Safari";if((t.includes("chrome/")||ye(t))&&!t.includes("edge/"))return"Chrome";if(we(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function me(e=Object(r["q"])()){return/firefox\//i.test(e)}function ve(e=Object(r["q"])()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function ye(e=Object(r["q"])()){return/crios\//i.test(e)}function be(e=Object(r["q"])()){return/iemobile/i.test(e)}function we(e=Object(r["q"])()){return/android/i.test(e)}function _e(e=Object(r["q"])()){return/blackberry/i.test(e)}function Ie(e=Object(r["q"])()){return/webos/i.test(e)}function Ee(e=Object(r["q"])()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Te(e=Object(r["q"])()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(e)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(e)}function Se(e=Object(r["q"])()){var t;return Ee(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}function Oe(){return Object(r["u"])()&&10===document.documentMode}function ke(e=Object(r["q"])()){return Ee(e)||we(e)||Ie(e)||_e(e)||/windows phone/i.test(e)||be(e)}function Ae(){try{return!(!window||window===window.top)}catch(e){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ce(e,t=[]){let n;switch(e){case"Browser":n=ge(Object(r["q"])());break;case"Worker":n=`${ge(Object(r["q"])())}-${e}`;break;default:n=e}const s=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${i["SDK_VERSION"]}/${s}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xe(e){return(await M(e,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function Ne(e,t){return M(e,"GET","/v2/recaptchaConfig",L(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function De(e){return void 0!==e&&void 0!==e.getResponse}function Re(e){return void 0!==e&&void 0!==e.enterprise}class Pe{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,void 0===e.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(e=>"EMAIL_PASSWORD_PROVIDER"===e.provider&&"OFF"!==e.enforcementState)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function je(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}function Le(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=b("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",je().appendChild(r)})}function Me(e){return`__${e}${Math.floor(1e6*Math.random())}`}const Fe="https://www.google.com/recaptcha/enterprise.js?render=",Ve="recaptcha-enterprise",Ue="NO_RECAPTCHA";class Be{constructor(e){this.type=Ve,this.auth=$e(e)}async verify(e="verify",t=!1){async function n(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise(async(t,n)=>{Ne(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(r=>{if(void 0!==r.recaptchaKey){const n=new Pe(r);return null==e.tenantId?e._agentRecaptchaConfig=n:e._tenantRecaptchaConfigs[e.tenantId]=n,t(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))}).catch(e=>{n(e)})})}function r(t,n,r){const i=window.grecaptcha;Re(i)?i.enterprise.ready(()=>{i.enterprise.execute(t,{action:e}).then(e=>{n(e)}).catch(()=>{n(Ue)})}):r(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((e,i)=>{n(this.auth).then(n=>{if(!t&&Re(window.grecaptcha))r(n,e,i);else{if("undefined"===typeof window)return void i(new Error("RecaptchaVerifier is only supported in browser"));Le(Fe+n).then(()=>{r(n,e,i)}).catch(e=>{i(e)})}}).catch(e=>{i(e)})})}}async function qe(e,t,n,r=!1){const i=new Be(e);let s;try{s=await i.verify(n)}catch(a){s=await i.verify(n,!0)}const o=Object.assign({},t);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise((n,r)=>{try{const r=e(t);n(r)}catch(i){r(i)}});n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const e of t)try{e()}catch(r){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===n||void 0===n?void 0:n.message})}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e,t,n,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ke(this),this.idTokenSubscription=new Ke(this),this.beforeStateQueue=new ze(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=p,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=le(t)),this._initializationPromise=this.queue(async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await pe.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(i){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null===r||void 0===r?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);n&&n!==s||!(null===o||void 0===o?void 0:o.user)||(r=o.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(s){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return E(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await te(e)}catch(t){if("auth/network-request-failed"!==(null===t||void 0===t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=x()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?Object(r["p"])(e):null;return t&&E(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&E(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(le(e))})}async initializeRecaptchaConfig(){const e=await Ne(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),t=new Pe(e);if(null==this.tenantId?this._agentRecaptchaConfig=t:this._tenantRecaptchaConfigs[this.tenantId]=t,t.emailPasswordEnabled){const e=new Be(this);e.verify()}}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new r["b"]("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&le(e)||this._popupRedirectResolver;E(t,this,"argument-error"),this.redirectPersistenceManager=await pe.create(this,[le(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"===typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return E(s,this,"internal-error"),s.then(()=>i(this.currentUser)),"function"===typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return E(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ce(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var e;const t=await(null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null===t||void 0===t?void 0:t.error)&&m("Error while retrieving App Check token: "+t.error),null===t||void 0===t?void 0:t.token}}function $e(e){return Object(r["p"])(e)}class Ke{constructor(e){this.auth=e,this.observer=null,this.addObserver=Object(r["h"])(e=>this.observer=e)}get next(){return E(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function He(e,t){const n=(null===t||void 0===t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(le);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null===t||void 0===t?void 0:t.popupRedirectResolver)}function We(e,t,n){const r=$e(e);E(r._canInitEmulator,r,"emulator-config-failed"),E(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(null===n||void 0===n?void 0:n.disableWarnings),s=Qe(t),{host:o,port:a}=Ye(t),c=null===a?"":":"+a;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Xe()}function Qe(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Ye(e){const t=Qe(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const e=i[1];return{host:e,port:Je(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:Je(t)}}}function Je(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function Xe(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!==typeof window&&"undefined"!==typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return T("not implemented")}_getIdTokenResponse(e){return T("not implemented")}_linkToIdToken(e,t){return T("not implemented")}_getReauthenticationResolver(e){return T("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function et(e,t){return M(e,"POST","/v1/accounts:resetPassword",L(e,t))}async function tt(e,t){return M(e,"POST","/v1/accounts:update",t)}async function nt(e,t){return M(e,"POST","/v1/accounts:update",L(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rt(e,t){return V(e,"POST","/v1/accounts:signInWithPassword",L(e,t))}async function it(e,t){return M(e,"POST","/v1/accounts:sendOobCode",L(e,t))}async function st(e,t){return it(e,t)}async function ot(e,t){return it(e,t)}async function at(e,t){return it(e,t)}async function ct(e,t){return it(e,t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ut(e,t){return V(e,"POST","/v1/accounts:signInWithEmailLink",L(e,t))}async function lt(e,t){return V(e,"POST","/v1/accounts:signInWithEmailLink",L(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht extends Ze{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new ht(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new ht(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if((null===t||void 0===t?void 0:t.email)&&(null===t||void 0===t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){var t;switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(null===(t=e._getRecaptchaConfig())||void 0===t?void 0:t.emailPasswordEnabled){const t=await qe(e,n,"signInWithPassword");return rt(e,t)}return rt(e,n).catch(async t=>{if("auth/missing-recaptcha-token"===t.code){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const t=await qe(e,n,"signInWithPassword");return rt(e,t)}return Promise.reject(t)});case"emailLink":return ut(e,{email:this._email,oobCode:this._password});default:y(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return tt(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return lt(e,{idToken:t,email:this._email,oobCode:this._password});default:y(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dt(e,t){return V(e,"POST","/v1/accounts:signInWithIdp",L(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ft="http://localhost";class pt extends Ze{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new pt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):y("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=s(t,["providerId","signInMethod"]);if(!n||!r)return null;const o=new pt(n,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return dt(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,dt(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,dt(e,t)}buildRequest(){const e={requestUri:ft,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t["id_token"]=this.idToken),this.accessToken&&(t["access_token"]=this.accessToken),this.secret&&(t["oauth_token_secret"]=this.secret),t["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(t["nonce"]=this.nonce),e.postBody=Object(r["A"])(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gt(e,t){return M(e,"POST","/v1/accounts:sendVerificationCode",L(e,t))}async function mt(e,t){return V(e,"POST","/v1/accounts:signInWithPhoneNumber",L(e,t))}async function vt(e,t){const n=await V(e,"POST","/v1/accounts:signInWithPhoneNumber",L(e,t));if(n.temporaryProof)throw q(e,"account-exists-with-different-credential",n);return n}const yt={["USER_NOT_FOUND"]:"user-not-found"};async function bt(e,t){const n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return V(e,"POST","/v1/accounts:signInWithPhoneNumber",L(e,n),yt)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt extends Ze{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new wt({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new wt({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return mt(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return vt(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return bt(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new wt({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function It(e){const t=Object(r["B"])(Object(r["k"])(e))["link"],n=t?Object(r["B"])(Object(r["k"])(t))["deep_link_id"]:null,i=Object(r["B"])(Object(r["k"])(e))["deep_link_id"],s=i?Object(r["B"])(Object(r["k"])(i))["link"]:null;return s||i||n||t||e}class Et{constructor(e){var t,n,i,s,o,a;const c=Object(r["B"])(Object(r["k"])(e)),u=null!==(t=c["apiKey"])&&void 0!==t?t:null,l=null!==(n=c["oobCode"])&&void 0!==n?n:null,h=_t(null!==(i=c["mode"])&&void 0!==i?i:null);E(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=null!==(s=c["continueUrl"])&&void 0!==s?s:null,this.languageCode=null!==(o=c["languageCode"])&&void 0!==o?o:null,this.tenantId=null!==(a=c["tenantId"])&&void 0!==a?a:null}static parseLink(e){const t=It(e);try{return new Et(t)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Tt{constructor(){this.providerId=Tt.PROVIDER_ID}static credential(e,t){return ht._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Et.parseLink(t);return E(n,"argument-error"),ht._fromEmailAndCode(e,n.code,n.tenantId)}}Tt.PROVIDER_ID="password",Tt.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Tt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class St{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot extends St{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class kt extends Ot{static credentialFromJSON(e){const t="string"===typeof e?JSON.parse(e):e;return E("providerId"in t&&"signInMethod"in t,"argument-error"),pt._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return E(e.idToken||e.accessToken,"argument-error"),pt._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return kt.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return kt.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n,oauthTokenSecret:r,pendingToken:i,nonce:s,providerId:o}=e;if(!n&&!r&&!t&&!i)return null;if(!o)return null;try{return new kt(o)._credential({idToken:t,accessToken:n,nonce:s,pendingToken:i})}catch(a){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At extends Ot{constructor(){super("facebook.com")}static credential(e){return pt._fromParams({providerId:At.PROVIDER_ID,signInMethod:At.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return At.credentialFromTaggedObject(e)}static credentialFromError(e){return At.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return At.credential(e.oauthAccessToken)}catch(t){return null}}}At.FACEBOOK_SIGN_IN_METHOD="facebook.com",At.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ct extends Ot{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return pt._fromParams({providerId:Ct.PROVIDER_ID,signInMethod:Ct.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ct.credentialFromTaggedObject(e)}static credentialFromError(e){return Ct.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Ct.credential(t,n)}catch(r){return null}}}Ct.GOOGLE_SIGN_IN_METHOD="google.com",Ct.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xt extends Ot{constructor(){super("github.com")}static credential(e){return pt._fromParams({providerId:xt.PROVIDER_ID,signInMethod:xt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xt.credentialFromTaggedObject(e)}static credentialFromError(e){return xt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return xt.credential(e.oauthAccessToken)}catch(t){return null}}}xt.GITHUB_SIGN_IN_METHOD="github.com",xt.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Nt="http://localhost";class Dt extends Ze{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){const t=this.buildRequest();return dt(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,dt(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,dt(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r,pendingToken:i}=t;return n&&r&&i&&n===r?new Dt(n,i):null}static _create(e,t){return new Dt(e,t)}buildRequest(){return{requestUri:Nt,returnSecureToken:!0,pendingToken:this.pendingToken}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rt="saml.";class Pt extends St{constructor(e){E(e.startsWith(Rt),"argument-error"),super(e)}static credentialFromResult(e){return Pt.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return Pt.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=Dt.fromJSON(e);return E(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:n}=e;if(!t||!n)return null;try{return Dt._create(n,t)}catch(r){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt extends Ot{constructor(){super("twitter.com")}static credential(e,t){return pt._fromParams({providerId:jt.PROVIDER_ID,signInMethod:jt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return jt.credentialFromTaggedObject(e)}static credentialFromError(e){return jt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return jt.credential(t,n)}catch(r){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Lt(e,t){return V(e,"POST","/v1/accounts:signUp",L(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */jt.TWITTER_SIGN_IN_METHOD="twitter.com",jt.PROVIDER_ID="twitter.com";class Mt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await ce._fromIdTokenResponse(e,n,r),s=Ft(n),o=new Mt({user:i,providerId:s,_tokenResponse:n,operationType:t});return o}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=Ft(n);return new Mt({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function Ft(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vt(e){var t;const n=$e(e);if(await n._initializationPromise,null===(t=n.currentUser)||void 0===t?void 0:t.isAnonymous)return new Mt({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await Lt(n,{returnSecureToken:!0}),i=await Mt._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut extends r["c"]{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,Ut.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new Ut(e,t,n,r)}}function Bt(e,t,n,r){const i="reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return i.catch(n=>{if("auth/multi-factor-auth-required"===n.code)throw Ut._fromErrorAndOperation(e,n,t,r);throw n})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qt(e){return new Set(e.map(({providerId:e})=>e).filter(e=>!!e))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zt(e,t){const n=Object(r["p"])(e);await $t(!0,n,t);const{providerUserInfo:i}=await G(n.auth,{idToken:await n.getIdToken(),deleteProvider:[t]}),s=qt(i||[]);return n.providerData=n.providerData.filter(e=>s.has(e.providerId)),s.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function Gt(e,t,n=!1){const r=await J(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Mt._forOperation(e,"link",r)}async function $t(e,t,n){await te(t);const r=qt(t.providerData),i=!1===e?"provider-already-linked":"no-such-provider";E(r.has(n)===e,t.auth,i)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kt(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const s=await J(e,Bt(r,i,t,e),n);E(s.idToken,r,"internal-error");const o=Q(s.idToken);E(o,r,"internal-error");const{sub:a}=o;return E(e.uid===a,r,"user-mismatch"),Mt._forOperation(e,i,s)}catch(s){throw"auth/user-not-found"===(null===s||void 0===s?void 0:s.code)&&y(r,"user-mismatch"),s}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ht(e,t,n=!1){const r="signIn",i=await Bt(e,r,t),s=await Mt._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function Wt(e,t){return Ht($e(e),t)}async function Qt(e,t){const n=Object(r["p"])(e);return await $t(!1,n,t.providerId),Gt(n,t)}async function Yt(e,t){return Kt(Object(r["p"])(e),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jt(e,t){return V(e,"POST","/v1/accounts:signInWithCustomToken",L(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xt(e,t){const n=$e(e),r=await Jt(n,{token:t,returnSecureToken:!0}),i=await Mt._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?en._fromServerResponse(e,t):"totpInfo"in t?tn._fromServerResponse(e,t):y(e,"internal-error")}}class en extends Zt{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new en(t)}}class tn extends Zt{constructor(e){super("totp",e)}static _fromServerResponse(e,t){return new tn(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nn(e,t,n){var r;E((null===(r=n.url)||void 0===r?void 0:r.length)>0,e,"invalid-continue-uri"),E("undefined"===typeof n.dynamicLinkDomain||n.dynamicLinkDomain.length>0,e,"invalid-dynamic-link-domain"),t.continueUrl=n.url,t.dynamicLinkDomain=n.dynamicLinkDomain,t.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(E(n.iOS.bundleId.length>0,e,"missing-ios-bundle-id"),t.iOSBundleId=n.iOS.bundleId),n.android&&(E(n.android.packageName.length>0,e,"missing-android-pkg-name"),t.androidInstallApp=n.android.installApp,t.androidMinimumVersionCode=n.android.minimumVersion,t.androidPackageName=n.android.packageName)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rn(e,t,n){var r;const i=$e(e),s={requestType:"PASSWORD_RESET",email:t,clientType:"CLIENT_TYPE_WEB"};if(null===(r=i._getRecaptchaConfig())||void 0===r?void 0:r.emailPasswordEnabled){const e=await qe(i,s,"getOobCode",!0);n&&nn(i,e,n),await ot(i,e)}else n&&nn(i,s,n),await ot(i,s).catch(async e=>{if("auth/missing-recaptcha-token"!==e.code)return Promise.reject(e);{console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");const e=await qe(i,s,"getOobCode",!0);n&&nn(i,e,n),await ot(i,e)}})}async function sn(e,t,n){await et(Object(r["p"])(e),{oobCode:t,newPassword:n})}async function on(e,t){await nt(Object(r["p"])(e),{oobCode:t})}async function an(e,t){const n=Object(r["p"])(e),i=await et(n,{oobCode:t}),s=i.requestType;switch(E(s,n,"internal-error"),s){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":E(i.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":E(i.mfaInfo,n,"internal-error");default:E(i.email,n,"internal-error")}let o=null;return i.mfaInfo&&(o=Zt._fromServerResponse($e(n),i.mfaInfo)),{data:{email:("VERIFY_AND_CHANGE_EMAIL"===i.requestType?i.newEmail:i.email)||null,previousEmail:("VERIFY_AND_CHANGE_EMAIL"===i.requestType?i.email:i.newEmail)||null,multiFactorInfo:o},operation:s}}async function cn(e,t){const{data:n}=await an(Object(r["p"])(e),t);return n.email}async function un(e,t,n){var r;const i=$e(e),s={returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(null===(r=i._getRecaptchaConfig())||void 0===r?void 0:r.emailPasswordEnabled){const e=await qe(i,s,"signUpPassword");o=Lt(i,e)}else o=Lt(i,s).catch(async e=>{if("auth/missing-recaptcha-token"===e.code){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const e=await qe(i,s,"signUpPassword");return Lt(i,e)}return Promise.reject(e)});const a=await o.catch(e=>Promise.reject(e)),c=await Mt._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(c.user),c}function ln(e,t,n){return Wt(Object(r["p"])(e),Tt.credential(t,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hn(e,t,n){var r;const i=$e(e),s={requestType:"EMAIL_SIGNIN",email:t,clientType:"CLIENT_TYPE_WEB"};function o(e,t){E(t.handleCodeInApp,i,"argument-error"),t&&nn(i,e,t)}if(null===(r=i._getRecaptchaConfig())||void 0===r?void 0:r.emailPasswordEnabled){const e=await qe(i,s,"getOobCode",!0);o(e,n),await at(i,e)}else o(s,n),await at(i,s).catch(async e=>{if("auth/missing-recaptcha-token"!==e.code)return Promise.reject(e);{console.log("Email link sign-in is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const e=await qe(i,s,"getOobCode",!0);o(e,n),await at(i,e)}})}function dn(e,t){const n=Et.parseLink(t);return"EMAIL_SIGNIN"===(null===n||void 0===n?void 0:n.operation)}async function fn(e,t,n){const i=Object(r["p"])(e),s=Tt.credentialWithLink(t,n||O());return E(s._tenantId===(i.tenantId||null),i,"tenant-id-mismatch"),Wt(i,s)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pn(e,t){return M(e,"POST","/v1/accounts:createAuthUri",L(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gn(e,t){const n=k()?O():"http://localhost",i={identifier:t,continueUri:n},{signinMethods:s}=await pn(Object(r["p"])(e),i);return s||[]}async function mn(e,t){const n=Object(r["p"])(e),i=await e.getIdToken(),s={requestType:"VERIFY_EMAIL",idToken:i};t&&nn(n.auth,s,t);const{email:o}=await st(n.auth,s);o!==e.email&&await e.reload()}async function vn(e,t,n){const i=Object(r["p"])(e),s=await e.getIdToken(),o={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:s,newEmail:t};n&&nn(i.auth,o,n);const{email:a}=await ct(i.auth,o);a!==e.email&&await e.reload()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yn(e,t){return M(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bn(e,{displayName:t,photoURL:n}){if(void 0===t&&void 0===n)return;const i=Object(r["p"])(e),s=await i.getIdToken(),o={idToken:s,displayName:t,photoUrl:n,returnSecureToken:!0},a=await J(i,yn(i.auth,o));i.displayName=a.displayName||null,i.photoURL=a.photoUrl||null;const c=i.providerData.find(({providerId:e})=>"password"===e);c&&(c.displayName=i.displayName,c.photoURL=i.photoURL),await i._updateTokensIfNecessary(a)}function wn(e,t){return In(Object(r["p"])(e),t,null)}function _n(e,t){return In(Object(r["p"])(e),null,t)}async function In(e,t,n){const{auth:r}=e,i=await e.getIdToken(),s={idToken:i,returnSecureToken:!0};t&&(s.email=t),n&&(s.password=n);const o=await J(e,tt(r,s));await e._updateTokensIfNecessary(o,!0)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function En(e){var t,n;if(!e)return null;const{providerId:r}=e,i=e.rawUserInfo?JSON.parse(e.rawUserInfo):{},s=e.isNewUser||"identitytoolkit#SignupNewUserResponse"===e.kind;if(!r&&(null===e||void 0===e?void 0:e.idToken)){const r=null===(n=null===(t=Q(e.idToken))||void 0===t?void 0:t.firebase)||void 0===n?void 0:n["sign_in_provider"];if(r){const e="anonymous"!==r&&"custom"!==r?r:null;return new Tn(s,e)}}if(!r)return null;switch(r){case"facebook.com":return new On(s,i);case"github.com":return new kn(s,i);case"google.com":return new An(s,i);case"twitter.com":return new Cn(s,i,e.screenName||null);case"custom":case"anonymous":return new Tn(s,null);default:return new Tn(s,r,i)}}class Tn{constructor(e,t,n={}){this.isNewUser=e,this.providerId=t,this.profile=n}}class Sn extends Tn{constructor(e,t,n,r){super(e,t,n),this.username=r}}class On extends Tn{constructor(e,t){super(e,"facebook.com",t)}}class kn extends Sn{constructor(e,t){super(e,"github.com",t,"string"===typeof(null===t||void 0===t?void 0:t.login)?null===t||void 0===t?void 0:t.login:null)}}class An extends Tn{constructor(e,t){super(e,"google.com",t)}}class Cn extends Sn{constructor(e,t,n){super(e,"twitter.com",t,n)}}function xn(e){const{user:t,_tokenResponse:n}=e;return t.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:En(n)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(e,t,n){this.type=e,this.credential=t,this.auth=n}static _fromIdtoken(e,t){return new Nn("enroll",e,t)}static _fromMfaPendingCredential(e){return new Nn("signin",e)}toJSON(){const e="enroll"===this.type?"idToken":"pendingCredential";return{multiFactorSession:{[e]:this.credential}}}static fromJSON(e){var t,n;if(null===e||void 0===e?void 0:e.multiFactorSession){if(null===(t=e.multiFactorSession)||void 0===t?void 0:t.pendingCredential)return Nn._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(null===(n=e.multiFactorSession)||void 0===n?void 0:n.idToken)return Nn._fromIdtoken(e.multiFactorSession.idToken)}return null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(e,t,n){this.session=e,this.hints=t,this.signInResolver=n}static _fromError(e,t){const n=$e(e),r=t.customData._serverResponse,i=(r.mfaInfo||[]).map(e=>Zt._fromServerResponse(n,e));E(r.mfaPendingCredential,n,"internal-error");const s=Nn._fromMfaPendingCredential(r.mfaPendingCredential);return new Dn(s,i,async e=>{const i=await e._process(n,s);delete r.mfaInfo,delete r.mfaPendingCredential;const o=Object.assign(Object.assign({},r),{idToken:i.idToken,refreshToken:i.refreshToken});switch(t.operationType){case"signIn":const e=await Mt._fromIdTokenResponse(n,t.operationType,o);return await n._updateCurrentUser(e.user),e;case"reauthenticate":return E(t.user,n,"internal-error"),Mt._forOperation(t.user,t.operationType,o);default:y(n,"internal-error")}})}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function Rn(e,t){var n;const i=Object(r["p"])(e),s=t;return E(t.customData.operationType,i,"argument-error"),E(null===(n=s.customData._serverResponse)||void 0===n?void 0:n.mfaPendingCredential,i,"argument-error"),Dn._fromError(i,s)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pn(e,t){return M(e,"POST","/v2/accounts/mfaEnrollment:start",L(e,t))}function jn(e,t){return M(e,"POST","/v2/accounts/mfaEnrollment:finalize",L(e,t))}function Ln(e,t){return M(e,"POST","/v2/accounts/mfaEnrollment:start",L(e,t))}function Mn(e,t){return M(e,"POST","/v2/accounts/mfaEnrollment:finalize",L(e,t))}function Fn(e,t){return M(e,"POST","/v2/accounts/mfaEnrollment:withdraw",L(e,t))}class Vn{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map(t=>Zt._fromServerResponse(e.auth,t)))})}static _fromUser(e){return new Vn(e)}async getSession(){return Nn._fromIdtoken(await this.user.getIdToken(),this.user.auth)}async enroll(e,t){const n=e,r=await this.getSession(),i=await J(this.user,n._process(this.user.auth,r,t));return await this.user._updateTokensIfNecessary(i),this.user.reload()}async unenroll(e){const t="string"===typeof e?e:e.uid,n=await this.user.getIdToken();try{const e=await J(this.user,Fn(this.user.auth,{idToken:n,mfaEnrollmentId:t}));this.enrolledFactors=this.enrolledFactors.filter(({uid:e})=>e!==t),await this.user._updateTokensIfNecessary(e),await this.user.reload()}catch(r){throw r}}}const Un=new WeakMap;function Bn(e){const t=Object(r["p"])(e);return Un.has(t)||Un.set(t,Vn._fromUser(t)),Un.get(t)}const qn="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(qn,"1"),this.storage.removeItem(qn),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gn(){const e=Object(r["q"])();return ve(e)||Ee(e)}const $n=1e3,Kn=10;class Hn extends zn{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Gn()&&Ae(),this.fallbackToPolling=ke(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys((e,t,n)=>{this.notifyListeners(e,n)});const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);Oe()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,Kn):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},$n)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Hn.type="LOCAL";const Wn=Hn;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn extends zn{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Qn.type="SESSION";const Yn=Qn;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jn(e){return Promise.all(e.map(async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(t=>t.isListeningto(e));if(t)return t;const n=new Xn(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,s=this.handlersMap[r];if(!(null===s||void 0===s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map(async e=>e(t.origin,i)),a=await Jn(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Zn(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Xn.receivers=[];class er{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise((o,a)=>{const c=Zn("",20);r.port1.start();const u=setTimeout(()=>{a(new Error("unsupported_event"))},n);s={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),o(t.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tr(){return window}function nr(e){tr().location.href=e}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rr(){return"undefined"!==typeof tr()["WorkerGlobalScope"]&&"function"===typeof tr()["importScripts"]}async function ir(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}function sr(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function or(){return rr()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ar="firebaseLocalStorageDb",cr=1,ur="firebaseLocalStorage",lr="fbase_key";class hr{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function dr(e,t){return e.transaction([ur],t?"readwrite":"readonly").objectStore(ur)}function fr(){const e=indexedDB.deleteDatabase(ar);return new hr(e).toPromise()}function pr(){const e=indexedDB.open(ar,cr);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const t=e.result;try{t.createObjectStore(ur,{keyPath:lr})}catch(r){n(r)}}),e.addEventListener("success",async()=>{const n=e.result;n.objectStoreNames.contains(ur)?t(n):(n.close(),await fr(),t(await pr()))})})}async function gr(e,t,n){const r=dr(e,!0).put({[lr]:t,value:n});return new hr(r).toPromise()}async function mr(e,t){const n=dr(e,!1).get(t),r=await new hr(n).toPromise();return void 0===r?null:r.value}function vr(e,t){const n=dr(e,!0).delete(t);return new hr(n).toPromise()}const yr=800,br=3;class wr{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await pr()),this.db}async _withRetries(e){let t=0;while(1)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>br)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return rr()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Xn._getInstance(or()),this.receiver._subscribe("keyChanged",async(e,t)=>{const n=await this._poll();return{keyProcessed:n.includes(t.key)}}),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await ir(),!this.activeServiceWorker)return;this.sender=new er(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&sr()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await pr();return await gr(e,qn,"1"),await vr(e,qn),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>gr(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(t=>mr(t,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>vr(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(e=>{const t=dr(e,!1).getAll();return new hr(t).toPromise()});if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),yr)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}wr.type="LOCAL";const _r=wr;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ir(e,t){return M(e,"POST","/v2/accounts/mfaSignIn:start",L(e,t))}function Er(e,t){return M(e,"POST","/v2/accounts/mfaSignIn:finalize",L(e,t))}function Tr(e,t){return M(e,"POST","/v2/accounts/mfaSignIn:finalize",L(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sr=500,Or=6e4,kr=1e12;class Ar{constructor(e){this.auth=e,this.counter=kr,this._widgets=new Map}render(e,t){const n=this.counter;return this._widgets.set(n,new Cr(e,this.auth.name,t||{})),this.counter++,n}reset(e){var t;const n=e||kr;null===(t=this._widgets.get(n))||void 0===t||t.delete(),this._widgets.delete(n)}getResponse(e){var t;const n=e||kr;return(null===(t=this._widgets.get(n))||void 0===t?void 0:t.getResponse())||""}async execute(e){var t;const n=e||kr;return null===(t=this._widgets.get(n))||void 0===t||t.execute(),""}}class Cr{constructor(e,t,n){this.params=n,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const r="string"===typeof e?document.getElementById(e):e;E(r,"argument-error",{appName:t}),this.container=r,this.isVisible="invisible"!==this.params.size,this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),this.timerId||(this.timerId=window.setTimeout(()=>{this.responseToken=xr(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch(n){}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch(n){}this.isVisible&&this.execute()},Or)},Sr))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function xr(e){const t=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<e;r++)t.push(n.charAt(Math.floor(Math.random()*n.length)));return t.join("")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nr=Me("rcb"),Dr=new N(3e4,6e4),Rr="https://www.google.com/recaptcha/api.js?";class Pr{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(null===(e=tr().grecaptcha)||void 0===e?void 0:e.render)}load(e,t=""){return E(jr(t),e,"argument-error"),this.shouldResolveImmediately(t)&&De(tr().grecaptcha)?Promise.resolve(tr().grecaptcha):new Promise((n,i)=>{const s=tr().setTimeout(()=>{i(b(e,"network-request-failed"))},Dr.get());tr()[Nr]=()=>{tr().clearTimeout(s),delete tr()[Nr];const r=tr().grecaptcha;if(!r||!De(r))return void i(b(e,"internal-error"));const o=r.render;r.render=(e,t)=>{const n=o(e,t);return this.counter++,n},this.hostLanguage=t,n(r)};const o=`${Rr}?${Object(r["A"])({onload:Nr,render:"explicit",hl:t})}`;Le(o).catch(()=>{clearTimeout(s),i(b(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!(null===(t=tr().grecaptcha)||void 0===t?void 0:t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function jr(e){return e.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(e)}class Lr{async load(e){return new Ar(e)}clearedOneInstance(){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mr="recaptcha",Fr={theme:"light",type:"image"};class Vr{constructor(e,t=Object.assign({},Fr),n){this.parameters=t,this.type=Mr,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=$e(n),this.isInvisible="invisible"===this.parameters.size,E("undefined"!==typeof document,this.auth,"operation-not-supported-in-this-environment");const r="string"===typeof e?document.getElementById(e):e;E(r,this.auth,"argument-error"),this.container=r,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new Lr:new Pr,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),n=t.getResponse(e);return n||new Promise(n=>{const r=e=>{e&&(this.tokenChangeListeners.delete(r),n(e))};this.tokenChangeListeners.add(r),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise||(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e})),this.renderPromise}_reset(){this.assertNotDestroyed(),null!==this.widgetId&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){E(!this.parameters.sitekey,this.auth,"argument-error"),E(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),E("undefined"!==typeof document,this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(e=>e(t)),"function"===typeof e)e(t);else if("string"===typeof e){const n=tr()[e];"function"===typeof n&&n(t)}}}assertNotDestroyed(){E(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){E(k()&&!rr(),this.auth,"internal-error"),await Ur(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await xe(this.auth);E(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return E(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function Ur(){let e=null;return new Promise(t=>{"complete"!==document.readyState?(e=()=>t(),window.addEventListener("load",e)):t()}).catch(t=>{throw e&&window.removeEventListener("load",e),t})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=wt._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function qr(e,t,n){const i=$e(e),s=await $r(i,t,Object(r["p"])(n));return new Br(s,e=>Wt(i,e))}async function zr(e,t,n){const i=Object(r["p"])(e);await $t(!1,i,"phone");const s=await $r(i.auth,t,Object(r["p"])(n));return new Br(s,e=>Qt(i,e))}async function Gr(e,t,n){const i=Object(r["p"])(e),s=await $r(i.auth,t,Object(r["p"])(n));return new Br(s,e=>Yt(i,e))}async function $r(e,t,n){var r;const i=await n.verify();try{let s;if(E("string"===typeof i,e,"argument-error"),E(n.type===Mr,e,"argument-error"),s="string"===typeof t?{phoneNumber:t}:t,"session"in s){const t=s.session;if("phoneNumber"in s){E("enroll"===t.type,e,"internal-error");const n=await Pn(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{E("signin"===t.type,e,"internal-error");const n=(null===(r=s.multiFactorHint)||void 0===r?void 0:r.uid)||s.multiFactorUid;E(n,e,"missing-multi-factor-info");const o=await Ir(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await gt(e,{phoneNumber:s.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}async function Kr(e,t){await Gt(Object(r["p"])(e),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(e){this.providerId=Hr.PROVIDER_ID,this.auth=$e(e)}verifyPhoneNumber(e,t){return $r(this.auth,e,Object(r["p"])(t))}static credential(e,t){return wt._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Hr.credentialFromTaggedObject(t)}static credentialFromError(e){return Hr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?wt._fromTokenResponse(t,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Wr(e,t){return t?le(t):(E(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Hr.PROVIDER_ID="phone",Hr.PHONE_SIGN_IN_METHOD="phone";class Qr extends Ze{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return dt(e,this._buildIdpRequest())}_linkToIdToken(e,t){return dt(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return dt(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Yr(e){return Ht(e.auth,new Qr(e),e.bypassAuthState)}function Jr(e){const{auth:t,user:n}=e;return E(n,t,"internal-error"),Kt(n,new Qr(e),e.bypassAuthState)}async function Xr(e){const{auth:t,user:n}=e;return E(n,t,"internal-error"),Gt(n,new Qr(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Yr;case"linkViaPopup":case"linkViaRedirect":return Xr;case"reauthViaPopup":case"reauthViaRedirect":return Jr;default:y(this.auth,"internal-error")}}resolve(e){S(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){S(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ei=new N(2e3,1e4);async function ti(e,t,n){const r=$e(e);_(e,t,St);const i=Wr(r,n),s=new ii(r,"signInViaPopup",t,i);return s.executeNotNull()}async function ni(e,t,n){const i=Object(r["p"])(e);_(i.auth,t,St);const s=Wr(i.auth,n),o=new ii(i.auth,"reauthViaPopup",t,s,i);return o.executeNotNull()}async function ri(e,t,n){const i=Object(r["p"])(e);_(i.auth,t,St);const s=Wr(i.auth,n),o=new ii(i.auth,"linkViaPopup",t,s,i);return o.executeNotNull()}class ii extends Zr{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,ii.currentPopupAction&&ii.currentPopupAction.cancel(),ii.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return E(e,this.auth,"internal-error"),e}async onExecution(){S(1===this.filter.length,"Popup operations only handle one event");const e=Zn();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(b(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(b(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ii.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(b(this.auth,"popup-closed-by-user"))},8e3):this.pollId=window.setTimeout(e,ei.get())};e()}}ii.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const si="pendingRedirect",oi=new Map;class ai extends Zr{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=oi.get(this.auth._key());if(!e){try{const t=await ci(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}oi.set(this.auth._key(),e)}return this.bypassAuthState||oi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function ci(e,t){const n=fi(t),r=di(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}async function ui(e,t){return di(e)._set(fi(t),"true")}function li(){oi.clear()}function hi(e,t){oi.set(e._key(),t)}function di(e){return le(e._redirectPersistence)}function fi(e){return fe(si,e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pi(e,t,n){return gi(e,t,n)}async function gi(e,t,n){const r=$e(e);_(e,t,St),await r._initializationPromise;const i=Wr(r,n);return await ui(i,r),i._openRedirect(r,t,"signInViaRedirect")}function mi(e,t,n){return vi(e,t,n)}async function vi(e,t,n){const i=Object(r["p"])(e);_(i.auth,t,St),await i.auth._initializationPromise;const s=Wr(i.auth,n);await ui(s,i.auth);const o=await Ii(i);return s._openRedirect(i.auth,t,"reauthViaRedirect",o)}function yi(e,t,n){return bi(e,t,n)}async function bi(e,t,n){const i=Object(r["p"])(e);_(i.auth,t,St),await i.auth._initializationPromise;const s=Wr(i.auth,n);await $t(!1,i,t.providerId),await ui(s,i.auth);const o=await Ii(i);return s._openRedirect(i.auth,t,"linkViaRedirect",o)}async function wi(e,t){return await $e(e)._initializationPromise,_i(e,t,!1)}async function _i(e,t,n=!1){const r=$e(e),i=Wr(r,t),s=new ai(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}async function Ii(e){const t=Zn(e.uid+":::");return e._redirectEventId=t,await e.auth._setRedirectUser(e),await e.auth._persistUserIfCurrent(e),t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ei=6e5;class Ti{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ki(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Oi(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(b(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Ei&&this.cachedEventUids.clear(),this.cachedEventUids.has(Si(e))}saveEventToCache(e){this.cachedEventUids.add(Si(e)),this.lastProcessedEventTime=Date.now()}}function Si(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(e=>e).join("-")}function Oi({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null===t||void 0===t?void 0:t.code)}function ki(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Oi(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ai(e,t={}){return M(e,"GET","/v1/projects",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ci=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,xi=/^https?/;async function Ni(e){if(e.config.emulator)return;const{authorizedDomains:t}=await Ai(e);for(const r of t)try{if(Di(r))return}catch(n){}y(e,"unauthorized-domain")}function Di(e){const t=O(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!xi.test(n))return!1;if(Ci.test(e))return r===e;const i=e.replace(/\./g,"\\."),s=new RegExp("^(.+\\."+i+"|"+i+")$","i");return s.test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ri=new N(3e4,6e4);function Pi(){const e=tr().___jsl;if(null===e||void 0===e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function ji(e){return new Promise((t,n)=>{var r,i,s;function o(){Pi(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Pi(),n(b(e,"network-request-failed"))},timeout:Ri.get()})}if(null===(i=null===(r=tr().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=tr().gapi)||void 0===s?void 0:s.load)){const t=Me("iframefcb");return tr()[t]=()=>{gapi.load?o():n(b(e,"network-request-failed"))},Le("https://apis.google.com/js/api.js?onload="+t).catch(e=>n(e))}o()}}).catch(e=>{throw Li=null,e})}let Li=null;function Mi(e){return Li=Li||ji(e),Li}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fi=new N(5e3,15e3),Vi="__/auth/iframe",Ui="emulator/auth/iframe",Bi={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},qi=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function zi(e){const t=e.config;E(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?D(t,Ui):`https://${e.config.authDomain}/${Vi}`,s={apiKey:t.apiKey,appName:e.name,v:i["SDK_VERSION"]},o=qi.get(e.config.apiHost);o&&(s.eid=o);const a=e._getFrameworks();return a.length&&(s.fw=a.join(",")),`${n}?${Object(r["A"])(s).slice(1)}`}async function Gi(e){const t=await Mi(e),n=tr().gapi;return E(n,e,"internal-error"),t.open({where:document.body,url:zi(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Bi,dontclear:!0},t=>new Promise(async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=b(e,"network-request-failed"),s=tr().setTimeout(()=>{r(i)},Fi.get());function o(){tr().clearTimeout(s),n(t)}t.ping(o).then(o,()=>{r(i)})}))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $i={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Ki=500,Hi=600,Wi="_blank",Qi="http://localhost";class Yi{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function Ji(e,t,n,i=Ki,s=Hi){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let c="";const u=Object.assign(Object.assign({},$i),{width:i.toString(),height:s.toString(),top:o,left:a}),l=Object(r["q"])().toLowerCase();n&&(c=ye(l)?Wi:n),me(l)&&(t=t||Qi,u.scrollbars="yes");const h=Object.entries(u).reduce((e,[t,n])=>`${e}${t}=${n},`,"");if(Se(l)&&"_self"!==c)return Xi(t||"",c),new Yi(null);const d=window.open(t||"",c,h);E(d,e,"popup-blocked");try{d.focus()}catch(f){}return new Yi(d)}function Xi(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zi="__/auth/handler",es="emulator/auth/handler",ts=encodeURIComponent("fac");async function ns(e,t,n,s,o,a){E(e.config.authDomain,e,"auth-domain-config-required"),E(e.config.apiKey,e,"invalid-api-key");const c={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:s,v:i["SDK_VERSION"],eventId:o};if(t instanceof St){t.setDefaultLanguage(e.languageCode),c.providerId=t.providerId||"",Object(r["t"])(t.getCustomParameters())||(c.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))c[e]=t}if(t instanceof Ot){const e=t.getScopes().filter(e=>""!==e);e.length>0&&(c.scopes=e.join(","))}e.tenantId&&(c.tid=e.tenantId);const u=c;for(const r of Object.keys(u))void 0===u[r]&&delete u[r];const l=await e._getAppCheckToken(),h=l?`#${ts}=${encodeURIComponent(l)}`:"";return`${rs(e)}?${Object(r["A"])(u).slice(1)}${h}`}function rs({config:e}){return e.emulator?D(e,es):`https://${e.authDomain}/${Zi}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const is="webStorageSupport";class ss{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Yn,this._completeRedirectFn=_i,this._overrideRedirectResult=hi}async _openPopup(e,t,n,r){var i;S(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");const s=await ns(e,t,n,O(),r);return Ji(e,s,Zn())}async _openRedirect(e,t,n,r){await this._originValidation(e);const i=await ns(e,t,n,O(),r);return nr(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(S(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await Gi(e),n=new Ti(e);return t.register("authEvent",t=>{E(null===t||void 0===t?void 0:t.authEvent,e,"invalid-auth-event");const r=n.onEvent(t.authEvent);return{status:r?"ACK":"ERROR"}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){const n=this.iframes[e._key()];n.send(is,{type:is},n=>{var r;const i=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[is];void 0!==i&&t(!!i),y(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Ni(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return ke()||ve()||Ee()}}const os=ss;class as{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return T("unexpected MultiFactorSessionType")}}}class cs extends as{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new cs(e)}_finalizeEnroll(e,t,n){return jn(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return Er(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class us{constructor(){}static assertion(e){return cs._fromCredential(e)}}us.FACTOR_ID="phone";class ls{static assertionForEnrollment(e,t){return hs._fromSecret(e,t)}static assertionForSignIn(e,t){return hs._fromEnrollmentId(e,t)}static async generateSecret(e){const t=e;E("undefined"!==typeof t.auth,"internal-error");const n=await Ln(t.auth,{idToken:t.credential,totpEnrollmentInfo:{}});return ds._fromStartTotpMfaEnrollmentResponse(n,t.auth)}}ls.FACTOR_ID="totp";class hs extends as{constructor(e,t,n){super("totp"),this.otp=e,this.enrollmentId=t,this.secret=n}static _fromSecret(e,t){return new hs(t,void 0,e)}static _fromEnrollmentId(e,t){return new hs(t,e)}async _finalizeEnroll(e,t,n){return E("undefined"!==typeof this.secret,e,"argument-error"),Mn(e,{idToken:t,displayName:n,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(e,t){E(void 0!==this.enrollmentId&&void 0!==this.otp,e,"argument-error");const n={verificationCode:this.otp};return Tr(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:n})}}class ds{constructor(e,t,n,r,i,s,o){this.sessionInfo=s,this.auth=o,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=n,this.codeIntervalSeconds=r,this.enrollmentCompletionDeadline=i}static _fromStartTotpMfaEnrollmentResponse(e,t){return new ds(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,t){var n;let r=!1;return(fs(e)||fs(t))&&(r=!0),r&&(fs(e)&&(e=(null===(n=this.auth.currentUser)||void 0===n?void 0:n.email)||"unknownuser"),fs(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function fs(e){return"undefined"===typeof e||0===(null===e||void 0===e?void 0:e.length)}var ps="@firebase/auth",gs="0.23.2";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ms{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(t=>{e((null===t||void 0===t?void 0:t.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){E(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vs(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function ys(e){Object(i["_registerComponent"])(new a["a"]("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;E(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ce(e)},u=new Ge(r,i,s,c);return He(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{const r=e.getProvider("auth-internal");r.initialize()})),Object(i["_registerComponent"])(new a["a"]("auth-internal",e=>{const t=$e(e.getProvider("auth").getImmediate());return(e=>new ms(e))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Object(i["registerVersion"])(ps,gs,vs(e)),Object(i["registerVersion"])(ps,gs,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bs=300;Object(r["o"])("authIdTokenMaxAge");
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ws(){return window}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ys("Browser");const _s=2e3;async function Is(e,t,n){var r;const{BuildInfo:i}=ws();S(t.sessionId,"AuthEvent did not contain a session ID");const s=await ks(t.sessionId),o={};return Ee()?o["ibi"]=i.packageName:we()?o["apn"]=i.packageName:y(e,"operation-not-supported-in-this-environment"),i.displayName&&(o["appDisplayName"]=i.displayName),o["sessionId"]=s,ns(e,n,t.type,void 0,null!==(r=t.eventId)&&void 0!==r?r:void 0,o)}async function Es(e){const{BuildInfo:t}=ws(),n={};Ee()?n.iosBundleId=t.packageName:we()?n.androidPackageName=t.packageName:y(e,"operation-not-supported-in-this-environment"),await Ai(e,n)}function Ts(e){const{cordova:t}=ws();return new Promise(n=>{t.plugins.browsertab.isAvailable(r=>{let i=null;r?t.plugins.browsertab.openUrl(e):i=t.InAppBrowser.open(e,Te()?"_blank":"_system","location=yes"),n(i)})})}async function Ss(e,t,n){const{cordova:r}=ws();let i=()=>{};try{await new Promise((s,o)=>{let a=null;function c(){var e;s();const t=null===(e=r.plugins.browsertab)||void 0===e?void 0:e.close;"function"===typeof t&&t(),"function"===typeof(null===n||void 0===n?void 0:n.close)&&n.close()}function u(){a||(a=window.setTimeout(()=>{o(b(e,"redirect-cancelled-by-user"))},_s))}function l(){"visible"===(null===document||void 0===document?void 0:document.visibilityState)&&u()}t.addPassiveListener(c),document.addEventListener("resume",u,!1),we()&&document.addEventListener("visibilitychange",l,!1),i=()=>{t.removePassiveListener(c),document.removeEventListener("resume",u,!1),document.removeEventListener("visibilitychange",l,!1),a&&window.clearTimeout(a)}})}finally{i()}}function Os(e){var t,n,r,i,s,o,a,c,u,l;const h=ws();E("function"===typeof(null===(t=null===h||void 0===h?void 0:h.universalLinks)||void 0===t?void 0:t.subscribe),e,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),E("undefined"!==typeof(null===(n=null===h||void 0===h?void 0:h.BuildInfo)||void 0===n?void 0:n.packageName),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),E("function"===typeof(null===(s=null===(i=null===(r=null===h||void 0===h?void 0:h.cordova)||void 0===r?void 0:r.plugins)||void 0===i?void 0:i.browsertab)||void 0===s?void 0:s.openUrl),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),E("function"===typeof(null===(c=null===(a=null===(o=null===h||void 0===h?void 0:h.cordova)||void 0===o?void 0:o.plugins)||void 0===a?void 0:a.browsertab)||void 0===c?void 0:c.isAvailable),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),E("function"===typeof(null===(l=null===(u=null===h||void 0===h?void 0:h.cordova)||void 0===u?void 0:u.InAppBrowser)||void 0===l?void 0:l.open),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function ks(e){const t=As(e),n=await crypto.subtle.digest("SHA-256",t),r=Array.from(new Uint8Array(n));return r.map(e=>e.toString(16).padStart(2,"0")).join("")}function As(e){if(S(/[0-9a-zA-Z]+/.test(e),"Can only convert alpha-numeric strings"),"undefined"!==typeof TextEncoder)return(new TextEncoder).encode(e);const t=new ArrayBuffer(e.length),n=new Uint8Array(t);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cs=20;class xs extends Ti{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(t=>t(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function Ns(e,t,n=null){return{type:t,eventId:n,urlResponse:null,sessionId:js(),postBody:null,tenantId:e.tenantId,error:b(e,"no-auth-event")}}function Ds(e,t){return Ls()._set(Ms(e),t)}async function Rs(e){const t=await Ls()._get(Ms(e));return t&&await Ls()._remove(Ms(e)),t}function Ps(e,t){var n,r;const i=Vs(t);if(i.includes("/__/auth/callback")){const t=Us(i),s=t["firebaseError"]?Fs(decodeURIComponent(t["firebaseError"])):null,o=null===(r=null===(n=null===s||void 0===s?void 0:s["code"])||void 0===n?void 0:n.split("auth/"))||void 0===r?void 0:r[1],a=o?b(o):null;return a?{type:e.type,eventId:e.eventId,tenantId:e.tenantId,error:a,urlResponse:null,sessionId:null,postBody:null}:{type:e.type,eventId:e.eventId,tenantId:e.tenantId,sessionId:e.sessionId,urlResponse:i,postBody:null}}return null}function js(){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<Cs;n++){const n=Math.floor(Math.random()*t.length);e.push(t.charAt(n))}return e.join("")}function Ls(){return le(Wn)}function Ms(e){return fe("authEvent",e.config.apiKey,e.name)}function Fs(e){try{return JSON.parse(e)}catch(t){return null}}function Vs(e){const t=Us(e),n=t["link"]?decodeURIComponent(t["link"]):void 0,r=Us(n)["link"],i=t["deep_link_id"]?decodeURIComponent(t["deep_link_id"]):void 0,s=Us(i)["link"];return s||i||r||n||e}function Us(e){if(!(null===e||void 0===e?void 0:e.includes("?")))return{};const[t,...n]=e.split("?");return Object(r["B"])(n.join("?"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bs=500;class qs{constructor(){this._redirectPersistence=Yn,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=_i,this._overrideRedirectResult=hi}async _initialize(e){const t=e._key();let n=this.eventManagers.get(t);return n||(n=new xs(e),this.eventManagers.set(t,n),this.attachCallbackListeners(e,n)),n}_openPopup(e){y(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,n,r){Os(e);const i=await this._initialize(e);await i.initialized(),i.resetRedirect(),li(),await this._originValidation(e);const s=Ns(e,n,r);await Ds(e,s);const o=await Is(e,s,t),a=await Ts(o);return Ss(e,i,a)}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Es(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:n,handleOpenURL:r,BuildInfo:i}=ws(),s=setTimeout(async()=>{await Rs(e),t.onEvent(Gs())},Bs),o=async n=>{clearTimeout(s);const r=await Rs(e);let i=null;r&&(null===n||void 0===n?void 0:n["url"])&&(i=Ps(r,n["url"])),t.onEvent(i||Gs())};"undefined"!==typeof n&&"function"===typeof n.subscribe&&n.subscribe(null,o);const a=r,c=i.packageName.toLowerCase()+"://";ws().handleOpenURL=async e=>{if(e.toLowerCase().startsWith(c)&&o({url:e}),"function"===typeof a)try{a(e)}catch(t){console.error(t)}}}}const zs=qs;function Gs(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:b("no-auth-event")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $s(e,t){$e(e)._logFramework(t)}},"1fd5":function(e,t,n){"use strict";(function(e,r){n.d(t,"a",(function(){return I})),n.d(t,"b",(function(){return L})),n.d(t,"c",(function(){return j})),n.d(t,"d",(function(){return l})),n.d(t,"e",(function(){return u})),n.d(t,"f",(function(){return V})),n.d(t,"g",(function(){return E})),n.d(t,"h",(function(){return K})),n.d(t,"i",(function(){return B})),n.d(t,"j",(function(){return h})),n.d(t,"k",(function(){return $})),n.d(t,"l",(function(){return w})),n.d(t,"m",(function(){return y})),n.d(t,"n",(function(){return b})),n.d(t,"o",(function(){return _})),n.d(t,"p",(function(){return Y})),n.d(t,"q",(function(){return T})),n.d(t,"r",(function(){return k})),n.d(t,"s",(function(){return A})),n.d(t,"t",(function(){return U})),n.d(t,"u",(function(){return x})),n.d(t,"v",(function(){return D})),n.d(t,"w",(function(){return S})),n.d(t,"x",(function(){return O})),n.d(t,"y",(function(){return C})),n.d(t,"z",(function(){return N})),n.d(t,"A",(function(){return z})),n.d(t,"B",(function(){return G})),n.d(t,"C",(function(){return R}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const i=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296===(64512&i)&&r+1<e.length&&56320===(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},s=function(e){const t=[];let n=0,r=0;while(n<e.length){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=e[n++],o=e[n++],a=e[n++],c=((7&i)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(1023&c))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return t.join("")},o={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const t=e[i],s=i+1<e.length,o=s?e[i+1]:0,a=i+2<e.length,c=a?e[i+2]:0,u=t>>2,l=(3&t)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(h=64)),r.push(n[u],n[l],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(i(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):s(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const t=n[e.charAt(i++)],s=i<e.length,o=s?n[e.charAt(i)]:0;++i;const c=i<e.length,u=c?n[e.charAt(i)]:64;++i;const l=i<e.length,h=l?n[e.charAt(i)]:64;if(++i,null==t||null==o||null==u||null==h)throw new a;const d=t<<2|o>>4;if(r.push(d),64!==u){const e=o<<4&240|u>>2;if(r.push(e),64!==h){const e=u<<6&192|h;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const c=function(e){const t=i(e);return o.encodeByteArray(t,!0)},u=function(e){return c(e).replace(/\./g,"")},l=function(e){try{return o.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};function h(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const n=t;return new Date(n.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&d(n)&&(e[n]=h(e[n],t[n]));return e}function d(e){return"__proto__"!==e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof e)return e;throw new Error("Unable to locate global object.")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p=()=>f().__FIREBASE_DEFAULTS__,g=()=>{if("undefined"===typeof r)return;const e=Object({NODE_ENV:"production",BASE_URL:"/"}).__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0},m=()=>{if("undefined"===typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const t=e&&l(e[1]);return t&&JSON.parse(t)},v=()=>{try{return p()||g()||m()}catch(e){return void console.info("Unable to get __FIREBASE_DEFAULTS__ due to: "+e)}},y=e=>{var t,n;return null===(n=null===(t=v())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},b=e=>{const t=y(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]},w=()=>{var e;return null===(e=v())||void 0===e?void 0:e.config},_=e=>{var t;return null===(t=v())||void 0===t?void 0:t["_"+e]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class I{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:"https://securetoken.google.com/"+r,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[u(JSON.stringify(n)),u(JSON.stringify(o)),a].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function S(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(T())}function O(){var t;const n=null===(t=v())||void 0===t?void 0:t.forceEnvironment;if("node"===n)return!0;if("browser"===n)return!1;try{return"[object process]"===Object.prototype.toString.call(e.process)}catch(r){return!1}}function k(){return"object"===typeof self&&self.self===self}function A(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function C(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function x(){const e=T();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function N(){return!O()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function D(){try{return"object"===typeof indexedDB}catch(e){return!1}}function R(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}})}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const P="FirebaseError";class j extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=P,Object.setPrototypeOf(this,j.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,L.prototype.create)}}class L{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?M(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`,a=new j(r,o,n);return a}}function M(e,t){return e.replace(F,(e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`})}const F=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function V(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function U(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function B(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],s=t[i];if(q(n)&&q(s)){if(!B(n,s))return!1}else if(n!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function q(e){return null!==e&&"object"===typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function z(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function G(e){const t={},n=e.replace(/^\?/,"").split("&");return n.forEach(e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}}),t}function $(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K(e,t){const n=new H(e,t);return n.subscribe.bind(n)}class H{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=W(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=Q),void 0===r.error&&(r.error=Q),void 0===r.complete&&(r.complete=Q);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}}),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function W(e,t){if("object"!==typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"===typeof e[n])return!0;return!1}function Q(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Y(e){return e&&e._delegate?e._delegate:e}}).call(this,n("c8ba"),n("4362"))},2266:function(e,t,n){var r=n("da84"),i=n("0366"),s=n("c65b"),o=n("825a"),a=n("0d51"),c=n("e95a"),u=n("07fa"),l=n("3a9b"),h=n("9a1f"),d=n("35a1"),f=n("2a62"),p=r.TypeError,g=function(e,t){this.stopped=e,this.result=t},m=g.prototype;e.exports=function(e,t,n){var r,v,y,b,w,_,I,E=n&&n.that,T=!(!n||!n.AS_ENTRIES),S=!(!n||!n.IS_ITERATOR),O=!(!n||!n.INTERRUPTED),k=i(t,E),A=function(e){return r&&f(r,"normal",e),new g(!0,e)},C=function(e){return T?(o(e),O?k(e[0],e[1],A):k(e[0],e[1])):O?k(e,A):k(e)};if(S)r=e;else{if(v=d(e),!v)throw p(a(e)+" is not iterable");if(c(v)){for(y=0,b=u(e);b>y;y++)if(w=C(e[y]),w&&l(m,w))return w;return new g(!1)}r=h(e,v)}_=r.next;while(!(I=s(_,r)).done){try{w=C(I.value)}catch(x){f(r,"throw",x)}if("object"==typeof w&&w&&l(m,w))return w}return new g(!1)}},"22e5":function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return u}));var r=n("1fd5");class i{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new r["a"];if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),r=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(c(e))try{this.getOrInitializeService({instanceIdentifier:s})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});n.resolve(e)}catch(t){}}}}clearInstance(e=s){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=s){return this.instances.has(e)}getOptions(e=s){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,s]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(i);n===e&&s.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(r){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(r){}return n||null}normalizeInstanceIdentifier(e=s){return this.component?this.component.multipleInstances?e:s:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(e){return e===s?void 0:e}function c(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new o(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},"23cb":function(e,t,n){var r=n("5926"),i=Math.max,s=Math.min;e.exports=function(e,t){var n=r(e);return n<0?i(n+t,0):s(n,t)}},"23e7":function(e,t,n){var r=n("da84"),i=n("06cf").f,s=n("9112"),o=n("6eeb"),a=n("ce4e"),c=n("e893"),u=n("94ca");e.exports=function(e,t){var n,l,h,d,f,p,g=e.target,m=e.global,v=e.stat;if(l=m?r:v?r[g]||a(g,{}):(r[g]||{}).prototype,l)for(h in t){if(f=t[h],e.noTargetGet?(p=i(l,h),d=p&&p.value):d=l[h],n=u(m?h:g+(v?".":"#")+h,e.forced),!n&&void 0!==d){if(typeof f==typeof d)continue;c(f,d)}(e.sham||d&&d.sham)&&s(f,"sham",!0),o(l,h,f,e)}}},"241c":function(e,t,n){var r=n("ca84"),i=n("7839"),s=i.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,s)}},2626:function(e,t,n){"use strict";var r=n("d066"),i=n("9bf2"),s=n("b622"),o=n("83ab"),a=s("species");e.exports=function(e){var t=r(e),n=i.f;o&&t&&!t[a]&&n(t,a,{configurable:!0,get:function(){return this}})}},2909:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i(e){if(Array.isArray(e))return r(e)}n.d(t,"a",(function(){return c}));n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0"),n("a630");function s(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}n("fb6a"),n("b0c0"),n("ac1f"),n("00b4");function o(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}function a(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(e){return i(e)||s(e)||o(e)||a()}},"2a62":function(e,t,n){var r=n("c65b"),i=n("825a"),s=n("dc4a");e.exports=function(e,t,n){var o,a;i(e);try{if(o=s(e,"return"),!o){if("throw"===t)throw n;return n}o=r(o,e)}catch(c){a=!0,o=c}if("throw"===t)throw n;if(a)throw o;return i(o),n}},"2ba4":function(e,t){var n=Function.prototype,r=n.apply,i=n.bind,s=n.call;e.exports="object"==typeof Reflect&&Reflect.apply||(i?s.bind(r):function(){return s.apply(r,arguments)})},"2cf4":function(e,t,n){var r,i,s,o,a=n("da84"),c=n("2ba4"),u=n("0366"),l=n("1626"),h=n("1a2d"),d=n("d039"),f=n("1be4"),p=n("f36a"),g=n("cc12"),m=n("1cdc"),v=n("605d"),y=a.setImmediate,b=a.clearImmediate,w=a.process,_=a.Dispatch,I=a.Function,E=a.MessageChannel,T=a.String,S=0,O={},k="onreadystatechange";try{r=a.location}catch(D){}var A=function(e){if(h(O,e)){var t=O[e];delete O[e],t()}},C=function(e){return function(){A(e)}},x=function(e){A(e.data)},N=function(e){a.postMessage(T(e),r.protocol+"//"+r.host)};y&&b||(y=function(e){var t=p(arguments,1);return O[++S]=function(){c(l(e)?e:I(e),void 0,t)},i(S),S},b=function(e){delete O[e]},v?i=function(e){w.nextTick(C(e))}:_&&_.now?i=function(e){_.now(C(e))}:E&&!m?(s=new E,o=s.port2,s.port1.onmessage=x,i=u(o.postMessage,o)):a.addEventListener&&l(a.postMessage)&&!a.importScripts&&r&&"file:"!==r.protocol&&!d(N)?(i=N,a.addEventListener("message",x,!1)):i=k in g("script")?function(e){f.appendChild(g("script"))[k]=function(){f.removeChild(this),A(e)}}:function(e){setTimeout(C(e),0)}),e.exports={set:y,clear:b}},"2d00":function(e,t,n){var r,i,s=n("da84"),o=n("342f"),a=s.process,c=s.Deno,u=a&&a.versions||c&&c.version,l=u&&u.v8;l&&(r=l.split("."),i=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!i&&o&&(r=o.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=o.match(/Chrome\/(\d+)/),r&&(i=+r[1]))),e.exports=i},"342f":function(e,t,n){var r=n("d066");e.exports=r("navigator","userAgent")||""},"35a1":function(e,t,n){var r=n("f5df"),i=n("dc4a"),s=n("3f8c"),o=n("b622"),a=o("iterator");e.exports=function(e){if(void 0!=e)return i(e,a)||i(e,"@@iterator")||s[r(e)]}},"37e8":function(e,t,n){var r=n("83ab"),i=n("9bf2"),s=n("825a"),o=n("fc6a"),a=n("df75");e.exports=r?Object.defineProperties:function(e,t){s(e);var n,r=o(t),c=a(t),u=c.length,l=0;while(u>l)i.f(e,n=c[l++],r[n]);return e}},"3a9b":function(e,t,n){var r=n("e330");e.exports=r({}.isPrototypeOf)},"3bbe":function(e,t,n){var r=n("da84"),i=n("1626"),s=r.String,o=r.TypeError;e.exports=function(e){if("object"==typeof e||i(e))return e;throw o("Can't set "+s(e)+" as a prototype")}},"3ca3":function(e,t,n){"use strict";var r=n("6547").charAt,i=n("577e"),s=n("69f3"),o=n("7dd0"),a="String Iterator",c=s.set,u=s.getterFor(a);o(String,"String",(function(e){c(this,{type:a,string:i(e),index:0})}),(function(){var e,t=u(this),n=t.string,i=t.index;return i>=n.length?{value:void 0,done:!0}:(e=r(n,i),t.index+=e.length,{value:e,done:!1})}))},"3f8c":function(e,t){e.exports={}},"408a":function(e,t,n){var r=n("e330");e.exports=r(1..valueOf)},"428f":function(e,t,n){var r=n("da84");e.exports=r},4362:function(e,t,n){t.nextTick=function(e){var t=Array.prototype.slice.call(arguments);t.shift(),setTimeout((function(){e.apply(null,t)}),0)},t.platform=t.arch=t.execPath=t.title="browser",t.pid=1,t.browser=!0,t.env={},t.argv=[],t.binding=function(e){throw new Error("No such module. (Possibly not yet loaded)")},function(){var e,r="/";t.cwd=function(){return r},t.chdir=function(t){e||(e=n("df7c")),r=e.resolve(t,r)}}(),t.exit=t.kill=t.umask=t.dlopen=t.uptime=t.memoryUsage=t.uvCounters=function(){},t.features={}},"44ad":function(e,t,n){var r=n("da84"),i=n("e330"),s=n("d039"),o=n("c6b6"),a=r.Object,c=i("".split);e.exports=s((function(){return!a("z").propertyIsEnumerable(0)}))?function(e){return"String"==o(e)?c(e,""):a(e)}:a},"44d2":function(e,t,n){var r=n("b622"),i=n("7c73"),s=n("9bf2"),o=r("unscopables"),a=Array.prototype;void 0==a[o]&&s.f(a,o,{configurable:!0,value:i(null)}),e.exports=function(e){a[o][e]=!0}},"44de":function(e,t,n){var r=n("da84");e.exports=function(e,t){var n=r.console;n&&n.error&&(1==arguments.length?n.error(e):n.error(e,t))}},4840:function(e,t,n){var r=n("825a"),i=n("5087"),s=n("b622"),o=s("species");e.exports=function(e,t){var n,s=r(e).constructor;return void 0===s||void 0==(n=r(s)[o])?t:i(n)}},"485a":function(e,t,n){var r=n("da84"),i=n("c65b"),s=n("1626"),o=n("861d"),a=r.TypeError;e.exports=function(e,t){var n,r;if("string"===t&&s(n=e.toString)&&!o(r=i(n,e)))return r;if(s(n=e.valueOf)&&!o(r=i(n,e)))return r;if("string"!==t&&s(n=e.toString)&&!o(r=i(n,e)))return r;throw a("Can't convert object to primitive value")}},4930:function(e,t,n){var r=n("2d00"),i=n("d039");e.exports=!!Object.getOwnPropertySymbols&&!i((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},"4d64":function(e,t,n){var r=n("fc6a"),i=n("23cb"),s=n("07fa"),o=function(e){return function(t,n,o){var a,c=r(t),u=s(c),l=i(o,u);if(e&&n!=n){while(u>l)if(a=c[l++],a!=a)return!0}else for(;u>l;l++)if((e||l in c)&&c[l]===n)return e||l||0;return!e&&-1}};e.exports={includes:o(!0),indexOf:o(!1)}},"4dae":function(e,t,n){var r=n("da84"),i=n("23cb"),s=n("07fa"),o=n("8418"),a=r.Array,c=Math.max;e.exports=function(e,t,n){for(var r=s(e),u=i(t,r),l=i(void 0===n?r:n,r),h=a(c(l-u,0)),d=0;u<l;u++,d++)o(h,d,e[u]);return h.length=d,h}},"4de4":function(e,t,n){"use strict";var r=n("23e7"),i=n("b727").filter,s=n("1dde"),o=s("filter");r({target:"Array",proto:!0,forced:!o},{filter:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}})},"4df4":function(e,t,n){"use strict";var r=n("da84"),i=n("0366"),s=n("c65b"),o=n("7b0b"),a=n("9bdd"),c=n("e95a"),u=n("68ee"),l=n("07fa"),h=n("8418"),d=n("9a1f"),f=n("35a1"),p=r.Array;e.exports=function(e){var t=o(e),n=u(this),r=arguments.length,g=r>1?arguments[1]:void 0,m=void 0!==g;m&&(g=i(g,r>2?arguments[2]:void 0));var v,y,b,w,_,I,E=f(t),T=0;if(!E||this==p&&c(E))for(v=l(t),y=n?new this(v):p(v);v>T;T++)I=m?g(t[T],T):t[T],h(y,T,I);else for(w=d(t,E),_=w.next,y=n?new this:[];!(b=s(_,w)).done;T++)I=m?a(w,g,[b.value,T],!0):b.value,h(y,T,I);return y.length=T,y}},5087:function(e,t,n){var r=n("da84"),i=n("68ee"),s=n("0d51"),o=r.TypeError;e.exports=function(e){if(i(e))return e;throw o(s(e)+" is not a constructor")}},"50c4":function(e,t,n){var r=n("5926"),i=Math.min;e.exports=function(e){return e>0?i(r(e),9007199254740991):0}},5530:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));n("b64b"),n("a4d3"),n("4de4"),n("d3b7"),n("e439"),n("159b"),n("dbb4");function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},5692:function(e,t,n){var r=n("c430"),i=n("c6cd");(e.exports=function(e,t){return i[e]||(i[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.20.0",mode:r?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},"56ef":function(e,t,n){var r=n("d066"),i=n("e330"),s=n("241c"),o=n("7418"),a=n("825a"),c=i([].concat);e.exports=r("Reflect","ownKeys")||function(e){var t=s.f(a(e)),n=o.f;return n?c(t,n(e)):t}},"577e":function(e,t,n){var r=n("da84"),i=n("f5df"),s=r.String;e.exports=function(e){if("Symbol"===i(e))throw TypeError("Cannot convert a Symbol value to a string");return s(e)}},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"589b":function(e,t,n){"use strict";n.r(t),n.d(t,"FirebaseError",(function(){return s["c"]})),n.d(t,"SDK_VERSION",(function(){return ye})),n.d(t,"_DEFAULT_ENTRY_NAME",(function(){return se})),n.d(t,"_addComponent",(function(){return ue})),n.d(t,"_addOrOverwriteComponent",(function(){return le})),n.d(t,"_apps",(function(){return ae})),n.d(t,"_clearComponents",(function(){return pe})),n.d(t,"_components",(function(){return ce})),n.d(t,"_getProvider",(function(){return de})),n.d(t,"_registerComponent",(function(){return he})),n.d(t,"_removeServiceInstance",(function(){return fe})),n.d(t,"deleteApp",(function(){return Ie})),n.d(t,"getApp",(function(){return we})),n.d(t,"getApps",(function(){return _e})),n.d(t,"initializeApp",(function(){return be})),n.d(t,"onLog",(function(){return Te})),n.d(t,"registerVersion",(function(){return Ee})),n.d(t,"setLogLevel",(function(){return Se}));var r=n("22e5"),i=n("e691"),s=n("1fd5");const o=(e,t)=>t.some(t=>e instanceof t);let a,c;function u(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function l(){return c||(c=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const h=new WeakMap,d=new WeakMap,f=new WeakMap,p=new WeakMap,g=new WeakMap;function m(e){const t=new Promise((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(I(e.result)),r()},s=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",s)});return t.then(t=>{t instanceof IDBCursor&&h.set(t,e)}).catch(()=>{}),g.set(t,e),t}function v(e){if(d.has(e))return;const t=new Promise((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)});d.set(e,t)}let y={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return d.get(e);if("objectStoreNames"===t)return e.objectStoreNames||f.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return I(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function b(e){y=e(y)}function w(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?l().includes(e)?function(...t){return e.apply(E(this),t),I(h.get(this))}:function(...t){return I(e.apply(E(this),t))}:function(t,...n){const r=e.call(E(this),t,...n);return f.set(r,t.sort?t.sort():[t]),I(r)}}function _(e){return"function"===typeof e?w(e):(e instanceof IDBTransaction&&v(e),o(e,u())?new Proxy(e,y):e)}function I(e){if(e instanceof IDBRequest)return m(e);if(p.has(e))return p.get(e);const t=_(e);return t!==e&&(p.set(e,t),g.set(t,e)),t}const E=e=>g.get(e);function T(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=I(o);return r&&o.addEventListener("upgradeneeded",e=>{r(I(o.result),e.oldVersion,e.newVersion,I(o.transaction),e)}),n&&o.addEventListener("blocked",e=>n(e.oldVersion,e.newVersion,e)),a.then(e=>{s&&e.addEventListener("close",()=>s()),i&&e.addEventListener("versionchange",e=>i(e.oldVersion,e.newVersion,e))}).catch(()=>{}),a}const S=["get","getKey","getAll","getAllKeys","count"],O=["put","add","delete","clear"],k=new Map;function A(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(k.get(t))return k.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=O.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!S.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&s.done]))[0]};return k.set(t,s),s}b(e=>({...e,get:(t,n,r)=>A(t,n)||e.get(t,n,r),has:(t,n)=>!!A(t,n)||e.has(t,n)}));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class C{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map(e=>{if(x(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null}).filter(e=>e).join(" ")}}function x(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const N="@firebase/app",D="0.9.13",R=new i["b"]("@firebase/app"),P="@firebase/app-compat",j="@firebase/analytics-compat",L="@firebase/analytics",M="@firebase/app-check-compat",F="@firebase/app-check",V="@firebase/auth",U="@firebase/auth-compat",B="@firebase/database",q="@firebase/database-compat",z="@firebase/functions",G="@firebase/functions-compat",$="@firebase/installations",K="@firebase/installations-compat",H="@firebase/messaging",W="@firebase/messaging-compat",Q="@firebase/performance",Y="@firebase/performance-compat",J="@firebase/remote-config",X="@firebase/remote-config-compat",Z="@firebase/storage",ee="@firebase/storage-compat",te="@firebase/firestore",ne="@firebase/firestore-compat",re="firebase",ie="9.23.0",se="[DEFAULT]",oe={[N]:"fire-core",[P]:"fire-core-compat",[L]:"fire-analytics",[j]:"fire-analytics-compat",[F]:"fire-app-check",[M]:"fire-app-check-compat",[V]:"fire-auth",[U]:"fire-auth-compat",[B]:"fire-rtdb",[q]:"fire-rtdb-compat",[z]:"fire-fn",[G]:"fire-fn-compat",[$]:"fire-iid",[K]:"fire-iid-compat",[H]:"fire-fcm",[W]:"fire-fcm-compat",[Q]:"fire-perf",[Y]:"fire-perf-compat",[J]:"fire-rc",[X]:"fire-rc-compat",[Z]:"fire-gcs",[ee]:"fire-gcs-compat",[te]:"fire-fst",[ne]:"fire-fst-compat","fire-js":"fire-js",[re]:"fire-js-all"},ae=new Map,ce=new Map;function ue(e,t){try{e.container.addComponent(t)}catch(n){R.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function le(e,t){e.container.addOrOverwriteComponent(t)}function he(e){const t=e.name;if(ce.has(t))return R.debug(`There were multiple attempts to register component ${t}.`),!1;ce.set(t,e);for(const n of ae.values())ue(n,e);return!0}function de(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function fe(e,t,n=se){de(e,t).clearInstance(n)}function pe(){ce.clear()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ge={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},me=new s["b"]("app","Firebase",ge);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ve{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r["a"]("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw me.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ye=ie;function be(e,t={}){let n=e;if("object"!==typeof t){const e=t;t={name:e}}const i=Object.assign({name:se,automaticDataCollectionEnabled:!1},t),o=i.name;if("string"!==typeof o||!o)throw me.create("bad-app-name",{appName:String(o)});if(n||(n=Object(s["l"])()),!n)throw me.create("no-options");const a=ae.get(o);if(a){if(Object(s["i"])(n,a.options)&&Object(s["i"])(i,a.config))return a;throw me.create("duplicate-app",{appName:o})}const c=new r["b"](o);for(const r of ce.values())c.addComponent(r);const u=new ve(n,i,c);return ae.set(o,u),u}function we(e=se){const t=ae.get(e);if(!t&&e===se&&Object(s["l"])())return be();if(!t)throw me.create("no-app",{appName:e});return t}function _e(){return Array.from(ae.values())}async function Ie(e){const t=e.name;ae.has(t)&&(ae.delete(t),await Promise.all(e.container.getProviders().map(e=>e.delete())),e.isDeleted=!0)}function Ee(e,t,n){var i;let s=null!==(i=oe[e])&&void 0!==i?i:e;n&&(s+="-"+n);const o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const e=[`Unable to register library "${s}" with version "${t}":`];return o&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void R.warn(e.join(" "))}he(new r["a"](s+"-version",()=>({library:s,version:t}),"VERSION"))}function Te(e,t){if(null!==e&&"function"!==typeof e)throw me.create("invalid-log-argument");Object(i["d"])(e,t)}function Se(e){Object(i["c"])(e)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oe="firebase-heartbeat-database",ke=1,Ae="firebase-heartbeat-store";let Ce=null;function xe(){return Ce||(Ce=T(Oe,ke,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Ae)}}}).catch(e=>{throw me.create("idb-open",{originalErrorMessage:e.message})})),Ce}async function Ne(e){try{const t=await xe(),n=await t.transaction(Ae).objectStore(Ae).get(Re(e));return n}catch(t){if(t instanceof s["c"])R.warn(t.message);else{const e=me.create("idb-get",{originalErrorMessage:null===t||void 0===t?void 0:t.message});R.warn(e.message)}}}async function De(e,t){try{const n=await xe(),r=n.transaction(Ae,"readwrite"),i=r.objectStore(Ae);await i.put(t,Re(e)),await r.done}catch(n){if(n instanceof s["c"])R.warn(n.message);else{const e=me.create("idb-set",{originalErrorMessage:null===n||void 0===n?void 0:n.message});R.warn(e.message)}}}function Re(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pe=1024,je=2592e6;class Le{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Ve(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),n=Me();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some(e=>e.date===n))return this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(e=>{const t=new Date(e.date).valueOf(),n=Date.now();return n-t<=je}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=Me(),{heartbeatsToSend:t,unsentEntries:n}=Fe(this._heartbeatsCache.heartbeats),r=Object(s["e"])(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Me(){const e=new Date;return e.toISOString().substring(0,10)}function Fe(e,t=Pe){const n=[];let r=e.slice();for(const i of e){const e=n.find(e=>e.agent===i.agent);if(e){if(e.dates.push(i.date),Ue(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ue(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Ve{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!Object(s["v"])()&&Object(s["C"])().then(()=>!0).catch(()=>!1)}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await Ne(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return De(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return De(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function Ue(e){return Object(s["e"])(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Be(e){he(new r["a"]("platform-logger",e=>new C(e),"PRIVATE")),he(new r["a"]("heartbeat",e=>new Le(e),"PRIVATE")),Ee(N,D,e),Ee(N,D,"esm2017"),Ee("fire-js","")}Be("")},"58a8":function(e,t,n){var r=n("e330"),i=n("1d80"),s=n("577e"),o=n("5899"),a=r("".replace),c="["+o+"]",u=RegExp("^"+c+c+"*"),l=RegExp(c+c+"*$"),h=function(e){return function(t){var n=s(i(t));return 1&e&&(n=a(n,u,"")),2&e&&(n=a(n,l,"")),n}};e.exports={start:h(1),end:h(2),trim:h(3)}},5926:function(e,t){var n=Math.ceil,r=Math.floor;e.exports=function(e){var t=+e;return t!==t||0===t?0:(t>0?r:n)(t)}},5994:function(e,t,n){"use strict";(function(e){var t=n("7ded"),r=n("1f5a"),i=n("22e5"),s=n("1fd5"),o="@firebase/auth-compat",a="0.4.2";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const c=1e3;function u(){var e;return(null===(e=null===self||void 0===self?void 0:self.location)||void 0===e?void 0:e.protocol)||null}function l(){return"http:"===u()||"https:"===u()}function h(e=Object(s["q"])()){return!("file:"!==u()&&"ionic:"!==u()&&"capacitor:"!==u()||!e.toLowerCase().match(/iphone|ipad|ipod|android/))}function d(){return Object(s["y"])()||Object(s["x"])()}function f(){return Object(s["u"])()&&11===(null===document||void 0===document?void 0:document.documentMode)}function p(e=Object(s["q"])()){return/Edge\/\d+/.test(e)}function g(e=Object(s["q"])()){return f()||p(e)}function m(){try{const e=self.localStorage,t=r["s"]();if(e)return e["setItem"](t,"1"),e["removeItem"](t),!g()||Object(s["v"])()}catch(e){return v()&&Object(s["v"])()}return!1}function v(){return"undefined"!==typeof e&&"WorkerGlobalScope"in e&&"importScripts"in e}function y(){return(l()||Object(s["s"])()||h())&&!d()&&m()&&!v()}function b(){return h()&&"undefined"!==typeof document}async function w(){return!!b()&&new Promise(e=>{const t=setTimeout(()=>{e(!1)},c);document.addEventListener("deviceready",()=>{clearTimeout(t),e(!0)})})}function _(){return"undefined"!==typeof window?window:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I={LOCAL:"local",NONE:"none",SESSION:"session"},E=r["p"],T="persistence";function S(e,t){E(Object.values(I).includes(t),e,"invalid-persistence-type"),Object(s["y"])()?E(t!==I.SESSION,e,"unsupported-persistence-type"):Object(s["x"])()?E(t===I.NONE,e,"unsupported-persistence-type"):v()?E(t===I.NONE||t===I.LOCAL&&Object(s["v"])(),e,"unsupported-persistence-type"):E(t===I.NONE||m(),e,"unsupported-persistence-type")}async function O(e){await e._initializationPromise;const t=A(),n=r["w"](T,e.config.apiKey,e.name);t&&t.setItem(n,e._getPersistence())}function k(e,t){const n=A();if(!n)return[];const i=r["w"](T,e,t),s=n.getItem(i);switch(s){case I.NONE:return[r["M"]];case I.LOCAL:return[r["N"],r["B"]];case I.SESSION:return[r["B"]];default:return[]}}function A(){var e;try{return(null===(e=_())||void 0===e?void 0:e.sessionStorage)||null}catch(t){return null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C=r["p"];class x{constructor(){this.browserResolver=r["t"](r["A"]),this.cordovaResolver=r["t"](r["F"]),this.underlyingResolver=null,this._redirectPersistence=r["B"],this._completeRedirectFn=r["u"],this._overrideRedirectResult=r["v"]}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,n,r){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,n,r)}async _openRedirect(e,t,n,r){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,n,r)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return b()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return C(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await w();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N(e){return e.unwrap()}function D(e){return e.wrapped()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R(e){return j(e)}function P(e,t){var n;const i=null===(n=t.customData)||void 0===n?void 0:n._tokenResponse;if("auth/multi-factor-auth-required"===(null===t||void 0===t?void 0:t.code)){const n=t;n.resolver=new F(e,r["K"](e,t))}else if(i){const e=j(t),n=t;e&&(n.credential=e,n.tenantId=i.tenantId||void 0,n.email=i.email||void 0,n.phoneNumber=i.phoneNumber||void 0)}}function j(e){const{_tokenResponse:t}=e instanceof s["c"]?e.customData:e;if(!t)return null;if(!(e instanceof s["c"])&&"temporaryProof"in t&&"phoneNumber"in t)return r["i"].credentialFromResult(e);const n=t.providerId;if(!n||n===r["k"].PASSWORD)return null;let i;switch(n){case r["k"].GOOGLE:i=r["f"];break;case r["k"].FACEBOOK:i=r["d"];break;case r["k"].GITHUB:i=r["e"];break;case r["k"].TWITTER:i=r["o"];break;default:const{oauthIdToken:e,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:c}=t;return s||o||e||a?a?n.startsWith("saml.")?r["m"]._create(n,a):r["g"]._fromParams({providerId:n,signInMethod:n,pendingToken:a,idToken:e,accessToken:s}):new r["h"](n).credential({idToken:e,accessToken:s,rawNonce:c}):null}return e instanceof s["c"]?i.credentialFromError(e):i.credentialFromResult(e)}function L(e,t){return t.catch(t=>{throw t instanceof s["c"]&&P(e,t),t}).then(e=>{const t=e.operationType,n=e.user;return{operationType:t,credential:R(e),additionalUserInfo:r["J"](e),user:V.getOrCreate(n)}})}async function M(e,t){const n=await t;return{verificationId:n.verificationId,confirm:t=>L(e,n.confirm(t))}}class F{constructor(e,t){this.resolver=t,this.auth=D(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return L(N(this.auth),this.resolver.resolveSignIn(e))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e){this._delegate=e,this.multiFactor=r["T"](e)}static getOrCreate(e){return V.USER_MAP.has(e)||V.USER_MAP.set(e,new V(e)),V.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return L(this.auth,r["P"](this._delegate,e))}async linkWithPhoneNumber(e,t){return M(this.auth,r["Q"](this._delegate,e,t))}async linkWithPopup(e){return L(this.auth,r["R"](this._delegate,e,x))}async linkWithRedirect(e){return await O(r["q"](this.auth)),r["S"](this._delegate,e,x)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return L(this.auth,r["U"](this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return M(this.auth,r["V"](this._delegate,e,t))}reauthenticateWithPopup(e){return L(this.auth,r["W"](this._delegate,e,x))}async reauthenticateWithRedirect(e){return await O(r["q"](this.auth)),r["X"](this._delegate,e,x)}sendEmailVerification(e){return r["Y"](this._delegate,e)}async unlink(e){return await r["jb"](this._delegate,e),this}updateEmail(e){return r["kb"](this._delegate,e)}updatePassword(e){return r["lb"](this._delegate,e)}updatePhoneNumber(e){return r["mb"](this._delegate,e)}updateProfile(e){return r["nb"](this._delegate,e)}verifyBeforeUpdateEmail(e,t){return r["ob"](this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}V.USER_MAP=new WeakMap;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const U=r["p"];class B{constructor(e,t){if(this.app=e,t.isInitialized())return this._delegate=t.getImmediate(),void this.linkUnderlyingAuth();const{apiKey:n}=e.options;U(n,"invalid-api-key",{appName:e.name}),U(n,"invalid-api-key",{appName:e.name});const i="undefined"!==typeof window?x:void 0;this._delegate=t.initialize({options:{persistence:z(n,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(r["H"]),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?V.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){r["E"](this._delegate,e,t)}applyActionCode(e){return r["y"](this._delegate,e)}checkActionCode(e){return r["C"](this._delegate,e)}confirmPasswordReset(e,t){return r["D"](this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return L(this._delegate,r["G"](this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return r["I"](this._delegate,e)}isSignInWithEmailLink(e){return r["O"](this._delegate,e)}async getRedirectResult(){U(y(),this._delegate,"operation-not-supported-in-this-environment");const e=await r["L"](this._delegate,x);return e?L(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){r["x"](this._delegate,e)}onAuthStateChanged(e,t,n){const{next:r,error:i,complete:s}=q(e,t,n);return this._delegate.onAuthStateChanged(r,i,s)}onIdTokenChanged(e,t,n){const{next:r,error:i,complete:s}=q(e,t,n);return this._delegate.onIdTokenChanged(r,i,s)}sendSignInLinkToEmail(e,t){return r["ab"](this._delegate,e,t)}sendPasswordResetEmail(e,t){return r["Z"](this._delegate,e,t||void 0)}async setPersistence(e){let t;switch(S(this._delegate,e),e){case I.SESSION:t=r["B"];break;case I.LOCAL:const e=await r["t"](r["N"])._isAvailable();t=e?r["N"]:r["z"];break;case I.NONE:t=r["M"];break;default:return r["r"]("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return L(this._delegate,r["bb"](this._delegate))}signInWithCredential(e){return L(this._delegate,r["cb"](this._delegate,e))}signInWithCustomToken(e){return L(this._delegate,r["db"](this._delegate,e))}signInWithEmailAndPassword(e,t){return L(this._delegate,r["eb"](this._delegate,e,t))}signInWithEmailLink(e,t){return L(this._delegate,r["fb"](this._delegate,e,t))}signInWithPhoneNumber(e,t){return M(this._delegate,r["gb"](this._delegate,e,t))}async signInWithPopup(e){return U(y(),this._delegate,"operation-not-supported-in-this-environment"),L(this._delegate,r["hb"](this._delegate,e,x))}async signInWithRedirect(e){return U(y(),this._delegate,"operation-not-supported-in-this-environment"),await O(this._delegate),r["ib"](this._delegate,e,x)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return r["pb"](this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}function q(e,t,n){let r=e;"function"!==typeof e&&({next:r,error:t,complete:n}=e);const i=r,s=e=>i(e&&V.getOrCreate(e));return{next:s,error:t,complete:n}}function z(e,t){const n=k(e,t);if("undefined"===typeof self||n.includes(r["N"])||n.push(r["N"]),"undefined"!==typeof window)for(const i of[r["z"],r["B"]])n.includes(i)||n.push(i);return n.includes(r["M"])||n.push(r["M"]),n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */B.Persistence=I;class G{constructor(){this.providerId="phone",this._delegate=new r["i"](N(t["a"].auth()))}static credential(e,t){return r["i"].credential(e,t)}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}}G.PHONE_SIGN_IN_METHOD=r["i"].PHONE_SIGN_IN_METHOD,G.PROVIDER_ID=r["i"].PROVIDER_ID;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const $=r["p"];class K{constructor(e,n,i=t["a"].app()){var s;$(null===(s=i.options)||void 0===s?void 0:s.apiKey,"invalid-api-key",{appName:i.name}),this._delegate=new r["l"](e,n,i.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H="auth-compat";function W(e){e.INTERNAL.registerComponent(new i["a"](H,e=>{const t=e.getProvider("app-compat").getImmediate(),n=e.getProvider("auth");return new B(t,n)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:r["a"].EMAIL_SIGNIN,PASSWORD_RESET:r["a"].PASSWORD_RESET,RECOVER_EMAIL:r["a"].RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:r["a"].REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:r["a"].VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:r["a"].VERIFY_EMAIL}},EmailAuthProvider:r["c"],FacebookAuthProvider:r["d"],GithubAuthProvider:r["e"],GoogleAuthProvider:r["f"],OAuthProvider:r["h"],SAMLAuthProvider:r["n"],PhoneAuthProvider:G,PhoneMultiFactorGenerator:r["j"],RecaptchaVerifier:K,TwitterAuthProvider:r["o"],Auth:B,AuthCredential:r["b"],Error:s["c"]}).setInstantiationMode("LAZY").setMultipleInstances(!1)),e.registerVersion(o,a)}W(t["a"])}).call(this,n("c8ba"))},"59ed":function(e,t,n){var r=n("da84"),i=n("1626"),s=n("0d51"),o=r.TypeError;e.exports=function(e){if(i(e))return e;throw o(s(e)+" is not a function")}},"5c6c":function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},"5cb3":function(e,t,n){"use strict";var r=n("7ded"),i=n("0829"),s=n("1fd5"),o=n("22e5");const a="@firebase/firestore-compat",c="0.3.12";
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function u(e,t){if(void 0===t)return{merge:!1};if(void 0!==t.mergeFields&&void 0!==t.merge)throw new i["g"]("invalid-argument",`Invalid options passed to function ${e}(): You cannot specify both "merge" and "mergeFields".`);return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l(){if("undefined"===typeof Uint8Array)throw new i["g"]("unimplemented","Uint8Arrays are not available in this environment.")}function h(){if(!Object(i["r"])())throw new i["g"]("unimplemented","Blobs are unavailable in Firestore in this environment.")}class d{constructor(e){this._delegate=e}static fromBase64String(e){return h(),new d(i["b"].fromBase64String(e))}static fromUint8Array(e){return l(),new d(i["b"].fromUint8Array(e))}toBase64(){return h(),this._delegate.toBase64()}toUint8Array(){return l(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f(e){return p(e,["next","error","complete"])}function p(e,t){if("object"!==typeof e||null===e)return!1;const n=e;for(const r of t)if(r in n&&"function"===typeof n[r])return!0;return!1}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g{enableIndexedDbPersistence(e,t){return Object(i["F"])(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return Object(i["G"])(e._delegate)}clearIndexedDbPersistence(e){return Object(i["x"])(e._delegate)}}class m{constructor(e,t,n){this._delegate=t,this._persistenceProvider=n,this.INTERNAL={delete:()=>this.terminate()},e instanceof i["m"]||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const t=this._delegate._getSettings();e.merge||t.host===e.host||Object(i["s"])("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},t),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,t,n={}){Object(i["A"])(this._delegate,e,t,n)}enableNetwork(){return Object(i["H"])(this._delegate)}disableNetwork(){return Object(i["D"])(this._delegate)}enablePersistence(e){let t=!1,n=!1;return e&&(t=!!e.synchronizeTabs,n=!!e.experimentalForceOwningTab,Object(i["t"])("synchronizeTabs",t,"experimentalForceOwningTab",n)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,n)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return Object(i["lb"])(this._delegate)}onSnapshotsInSync(e){return Object(i["Y"])(this._delegate,e)}get app(){if(!this._appCompat)throw new i["g"]("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new N(this,Object(i["y"])(this._delegate,e))}catch(t){throw E(t,"collection()","Firestore.collection()")}}doc(e){try{return new I(this,Object(i["E"])(this._delegate,e))}catch(t){throw E(t,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new A(this,Object(i["z"])(this._delegate,e))}catch(t){throw E(t,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return Object(i["db"])(this._delegate,t=>e(new b(this,t)))}batch(){return Object(i["K"])(this._delegate),new w(new i["l"](this._delegate,e=>Object(i["L"])(this._delegate,e)))}loadBundle(e){return Object(i["V"])(this._delegate,e)}namedQuery(e){return Object(i["W"])(this._delegate,e).then(e=>e?new A(this,e):null)}}class v extends i["a"]{constructor(e){super(),this.firestore=e}convertBytes(e){return new d(new i["b"](e))}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return I.forKey(t,this.firestore,null)}}function y(e){Object(i["gb"])(e)}class b{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new v(e)}get(e){const t=D(e);return this._delegate.get(t).then(e=>new O(this._firestore,new i["e"](this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,t.converter)))}set(e,t,n){const r=D(e);return n?(u("Transaction.set",n),this._delegate.set(r,t,n)):this._delegate.set(r,t),this}update(e,t,n,...r){const i=D(e);return 2===arguments.length?this._delegate.update(i,t):this._delegate.update(i,t,n,...r),this}delete(e){const t=D(e);return this._delegate.delete(t),this}}class w{constructor(e){this._delegate=e}set(e,t,n){const r=D(e);return n?(u("WriteBatch.set",n),this._delegate.set(r,t,n)):this._delegate.set(r,t),this}update(e,t,n,...r){const i=D(e);return 2===arguments.length?this._delegate.update(i,t):this._delegate.update(i,t,n,...r),this}delete(e){const t=D(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class _{constructor(e,t,n){this._firestore=e,this._userDataWriter=t,this._delegate=n}fromFirestore(e,t){const n=new i["i"](this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new k(this._firestore,n),null!==t&&void 0!==t?t:{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){const n=_.INSTANCES;let r=n.get(e);r||(r=new WeakMap,n.set(e,r));let i=r.get(t);return i||(i=new _(e,new v(e),t),r.set(t,i)),i}}_.INSTANCES=new WeakMap;class I{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new v(e)}static forPath(e,t,n){if(e.length%2!==0)throw new i["g"]("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new I(t,new i["d"](t._delegate,n,new i["n"](e)))}static forKey(e,t,n){return new I(t,new i["d"](t._delegate,n,e))}get id(){return this._delegate.id}get parent(){return new N(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new N(this.firestore,Object(i["y"])(this._delegate,e))}catch(t){throw E(t,"collection()","DocumentReference.collection()")}}isEqual(e){return e=Object(s["p"])(e),e instanceof i["d"]&&Object(i["cb"])(this._delegate,e)}set(e,t){t=u("DocumentReference.set",t);try{return t?Object(i["fb"])(this._delegate,e,t):Object(i["fb"])(this._delegate,e)}catch(n){throw E(n,"setDoc()","DocumentReference.set()")}}update(e,t,...n){try{return 1===arguments.length?Object(i["kb"])(this._delegate,e):Object(i["kb"])(this._delegate,e,t,...n)}catch(r){throw E(r,"updateDoc()","DocumentReference.update()")}}delete(){return Object(i["B"])(this._delegate)}onSnapshot(...e){const t=T(e),n=S(e,e=>new O(this.firestore,new i["e"](this.firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,this._delegate.converter)));return Object(i["X"])(this._delegate,t,n)}get(e){let t;return t="cache"===(null===e||void 0===e?void 0:e.source)?Object(i["N"])(this._delegate):"server"===(null===e||void 0===e?void 0:e.source)?Object(i["O"])(this._delegate):Object(i["M"])(this._delegate),t.then(e=>new O(this.firestore,new i["e"](this.firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,this._delegate.converter)))}withConverter(e){return new I(this.firestore,e?this._delegate.withConverter(_.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function E(e,t,n){return e.message=e.message.replace(t,n),e}function T(e){for(const t of e)if("object"===typeof t&&!f(t))return t;return{}}function S(e,t){var n,r;let i;return i=f(e[0])?e[0]:f(e[1])?e[1]:"function"===typeof e[0]?{next:e[0],error:e[1],complete:e[2]}:{next:e[1],error:e[2],complete:e[3]},{next:e=>{i.next&&i.next(t(e))},error:null===(n=i.error)||void 0===n?void 0:n.bind(i),complete:null===(r=i.complete)||void 0===r?void 0:r.bind(i)}}class O{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new I(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return Object(i["hb"])(this._delegate,e._delegate)}}class k extends O{data(e){const t=this._delegate.data(e);return Object(i["q"])(void 0!==t,"Document in a QueryDocumentSnapshot should exist"),t}}class A{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new v(e)}where(e,t,n){try{return new A(this.firestore,Object(i["ab"])(this._delegate,Object(i["mb"])(e,t,n)))}catch(r){throw E(r,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new A(this.firestore,Object(i["ab"])(this._delegate,Object(i["Z"])(e,t)))}catch(n){throw E(n,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new A(this.firestore,Object(i["ab"])(this._delegate,Object(i["T"])(e)))}catch(t){throw E(t,"limit()","Query.limit()")}}limitToLast(e){try{return new A(this.firestore,Object(i["ab"])(this._delegate,Object(i["U"])(e)))}catch(t){throw E(t,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new A(this.firestore,Object(i["ab"])(this._delegate,Object(i["jb"])(...e)))}catch(t){throw E(t,"startAt()","Query.startAt()")}}startAfter(...e){try{return new A(this.firestore,Object(i["ab"])(this._delegate,Object(i["ib"])(...e)))}catch(t){throw E(t,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new A(this.firestore,Object(i["ab"])(this._delegate,Object(i["J"])(...e)))}catch(t){throw E(t,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new A(this.firestore,Object(i["ab"])(this._delegate,Object(i["I"])(...e)))}catch(t){throw E(t,"endAt()","Query.endAt()")}}isEqual(e){return Object(i["bb"])(this._delegate,e._delegate)}get(e){let t;return t="cache"===(null===e||void 0===e?void 0:e.source)?Object(i["Q"])(this._delegate):"server"===(null===e||void 0===e?void 0:e.source)?Object(i["R"])(this._delegate):Object(i["P"])(this._delegate),t.then(e=>new x(this.firestore,new i["j"](this.firestore._delegate,this._userDataWriter,this._delegate,e._snapshot)))}onSnapshot(...e){const t=T(e),n=S(e,e=>new x(this.firestore,new i["j"](this.firestore._delegate,this._userDataWriter,this._delegate,e._snapshot)));return Object(i["X"])(this._delegate,t,n)}withConverter(e){return new A(this.firestore,e?this._delegate.withConverter(_.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class C{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new k(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class x{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new A(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new k(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(e=>new C(this._firestore,e))}forEach(e,t){this._delegate.forEach(n=>{e.call(t,new k(this._firestore,n))})}isEqual(e){return Object(i["hb"])(this._delegate,e._delegate)}}class N extends A{constructor(e,t){super(e,t),this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new I(this.firestore,e):null}doc(e){try{return new I(this.firestore,void 0===e?Object(i["E"])(this._delegate):Object(i["E"])(this._delegate,e))}catch(t){throw E(t,"doc()","CollectionReference.doc()")}}add(e){return Object(i["u"])(this._delegate,e).then(e=>new I(this.firestore,e))}isEqual(e){return Object(i["cb"])(this._delegate,e._delegate)}withConverter(e){return new N(this.firestore,e?this._delegate.withConverter(_.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function D(e){return Object(i["p"])(e,i["d"])}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(...e){this._delegate=new i["f"](...e)}static documentId(){return new R(i["o"].keyField().canonicalString())}isEqual(e){return e=Object(s["p"])(e),e instanceof i["f"]&&this._delegate._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(e){this._delegate=e}static serverTimestamp(){const e=Object(i["eb"])();return e._methodName="FieldValue.serverTimestamp",new P(e)}static delete(){const e=Object(i["C"])();return e._methodName="FieldValue.delete",new P(e)}static arrayUnion(...e){const t=Object(i["w"])(...e);return t._methodName="FieldValue.arrayUnion",new P(t)}static arrayRemove(...e){const t=Object(i["v"])(...e);return t._methodName="FieldValue.arrayRemove",new P(t)}static increment(e){const t=Object(i["S"])(e);return t._methodName="FieldValue.increment",new P(t)}isEqual(e){return this._delegate.isEqual(e._delegate)}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j={Firestore:m,GeoPoint:i["h"],Timestamp:i["k"],Blob:d,Transaction:b,WriteBatch:w,DocumentReference:I,DocumentSnapshot:O,Query:A,QueryDocumentSnapshot:k,QuerySnapshot:x,CollectionReference:N,FieldPath:R,FieldValue:P,setLogLevel:y,CACHE_SIZE_UNLIMITED:i["c"]};function L(e,t){e.INTERNAL.registerComponent(new o["a"]("firestore-compat",e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("firestore").getImmediate();return t(n,r)},"PUBLIC").setServiceProps(Object.assign({},j)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(e){L(e,(e,t)=>new m(e,t,new g)),e.registerVersion(a,c)}M(r["a"])},"5e77":function(e,t,n){var r=n("83ab"),i=n("1a2d"),s=Function.prototype,o=r&&Object.getOwnPropertyDescriptor,a=i(s,"name"),c=a&&"something"===function(){}.name,u=a&&(!r||r&&o(s,"name").configurable);e.exports={EXISTS:a,PROPER:c,CONFIGURABLE:u}},"605d":function(e,t,n){var r=n("c6b6"),i=n("da84");e.exports="process"==r(i.process)},6069:function(e,t){e.exports="object"==typeof window},"60da":function(e,t,n){"use strict";var r=n("83ab"),i=n("e330"),s=n("c65b"),o=n("d039"),a=n("df75"),c=n("7418"),u=n("d1e7"),l=n("7b0b"),h=n("44ad"),d=Object.assign,f=Object.defineProperty,p=i([].concat);e.exports=!d||o((function(){if(r&&1!==d({b:1},d(f({},"a",{enumerable:!0,get:function(){f(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var e={},t={},n=Symbol(),i="abcdefghijklmnopqrst";return e[n]=7,i.split("").forEach((function(e){t[e]=e})),7!=d({},e)[n]||a(d({},t)).join("")!=i}))?function(e,t){var n=l(e),i=arguments.length,o=1,d=c.f,f=u.f;while(i>o){var g,m=h(arguments[o++]),v=d?p(a(m),d(m)):a(m),y=v.length,b=0;while(y>b)g=v[b++],r&&!s(f,m,g)||(n[g]=m[g])}return n}:d},6547:function(e,t,n){var r=n("e330"),i=n("5926"),s=n("577e"),o=n("1d80"),a=r("".charAt),c=r("".charCodeAt),u=r("".slice),l=function(e){return function(t,n){var r,l,h=s(o(t)),d=i(n),f=h.length;return d<0||d>=f?e?"":void 0:(r=c(h,d),r<55296||r>56319||d+1===f||(l=c(h,d+1))<56320||l>57343?e?a(h,d):r:e?u(h,d,d+2):l-56320+(r-55296<<10)+65536)}};e.exports={codeAt:l(!1),charAt:l(!0)}},"65f0":function(e,t,n){var r=n("0b42");e.exports=function(e,t){return new(r(e))(0===t?0:t)}},"68ee":function(e,t,n){var r=n("e330"),i=n("d039"),s=n("1626"),o=n("f5df"),a=n("d066"),c=n("8925"),u=function(){},l=[],h=a("Reflect","construct"),d=/^\s*(?:class|function)\b/,f=r(d.exec),p=!d.exec(u),g=function(e){if(!s(e))return!1;try{return h(u,l,e),!0}catch(t){return!1}},m=function(e){if(!s(e))return!1;switch(o(e)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return p||!!f(d,c(e))}catch(t){return!0}};m.sham=!0,e.exports=!h||i((function(){var e;return g(g.call)||!g(Object)||!g((function(){e=!0}))||e}))?m:g},"69f3":function(e,t,n){var r,i,s,o=n("7f9a"),a=n("da84"),c=n("e330"),u=n("861d"),l=n("9112"),h=n("1a2d"),d=n("c6cd"),f=n("f772"),p=n("d012"),g="Object already initialized",m=a.TypeError,v=a.WeakMap,y=function(e){return s(e)?i(e):r(e,{})},b=function(e){return function(t){var n;if(!u(t)||(n=i(t)).type!==e)throw m("Incompatible receiver, "+e+" required");return n}};if(o||d.state){var w=d.state||(d.state=new v),_=c(w.get),I=c(w.has),E=c(w.set);r=function(e,t){if(I(w,e))throw new m(g);return t.facade=e,E(w,e,t),t},i=function(e){return _(w,e)||{}},s=function(e){return I(w,e)}}else{var T=f("state");p[T]=!0,r=function(e,t){if(h(e,T))throw new m(g);return t.facade=e,l(e,T,t),t},i=function(e){return h(e,T)?e[T]:{}},s=function(e){return h(e,T)}}e.exports={set:r,get:i,has:s,enforce:y,getterFor:b}},"6b0d":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=(e,t)=>{const n=e.__vccOpts||e;for(const[r,i]of t)n[r]=i;return n}},"6c02":function(e,t,n){"use strict";n.d(t,"a",(function(){return Ze})),n.d(t,"b",(function(){return G})),n.d(t,"c",(function(){return nt}));var r=n("7a23");n("abc5");
/*!
  * vue-router v4.0.12
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */
const i="function"===typeof Symbol&&"symbol"===typeof Symbol.toStringTag,s=e=>i?Symbol(e):"_vr_"+e,o=s("rvlm"),a=s("rvd"),c=s("r"),u=s("rl"),l=s("rvl"),h="undefined"!==typeof window;function d(e){return e.__esModule||i&&"Module"===e[Symbol.toStringTag]}const f=Object.assign;function p(e,t){const n={};for(const r in t){const i=t[r];n[r]=Array.isArray(i)?i.map(e):e(i)}return n}const g=()=>{};const m=/\/$/,v=e=>e.replace(m,"");function y(e,t,n="/"){let r,i={},s="",o="";const a=t.indexOf("?"),c=t.indexOf("#",a>-1?a:0);return a>-1&&(r=t.slice(0,a),s=t.slice(a+1,c>-1?c:t.length),i=e(s)),c>-1&&(r=r||t.slice(0,c),o=t.slice(c,t.length)),r=O(null!=r?r:t,n),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:o}}function b(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function w(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function _(e,t,n){const r=t.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&I(t.matched[r],n.matched[i])&&E(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function I(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function E(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!T(e[n],t[n]))return!1;return!0}function T(e,t){return Array.isArray(e)?S(e,t):Array.isArray(t)?S(t,e):e===t}function S(e,t){return Array.isArray(t)?e.length===t.length&&e.every((e,n)=>e===t[n]):1===e.length&&e[0]===t}function O(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let i,s,o=n.length-1;for(i=0;i<r.length;i++)if(s=r[i],1!==o&&"."!==s){if(".."!==s)break;o--}return n.slice(0,o).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var k,A;(function(e){e["pop"]="pop",e["push"]="push"})(k||(k={})),function(e){e["back"]="back",e["forward"]="forward",e["unknown"]=""}(A||(A={}));function C(e){if(!e)if(h){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),v(e)}const x=/^[^#]+#/;function N(e,t){return e.replace(x,"#")+t}function D(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const R=()=>({left:window.pageXOffset,top:window.pageYOffset});function P(e){let t;if("el"in e){const n=e.el,r="string"===typeof n&&n.startsWith("#");0;const i="string"===typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=D(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.pageXOffset,null!=t.top?t.top:window.pageYOffset)}function j(e,t){const n=history.state?history.state.position-t:-1;return n+e}const L=new Map;function M(e,t){L.set(e,t)}function F(e){const t=L.get(e);return L.delete(e),t}let V=()=>location.protocol+"//"+location.host;function U(e,t){const{pathname:n,search:r,hash:i}=t,s=e.indexOf("#");if(s>-1){let t=i.includes(e.slice(s))?e.slice(s).length:1,n=i.slice(t);return"/"!==n[0]&&(n="/"+n),w(n,"")}const o=w(n,e);return o+r+i}function B(e,t,n,r){let i=[],s=[],o=null;const a=({state:s})=>{const a=U(e,location),c=n.value,u=t.value;let l=0;if(s){if(n.value=a,t.value=s,o&&o===c)return void(o=null);l=u?s.position-u.position:0}else r(a);i.forEach(e=>{e(n.value,c,{delta:l,type:k.pop,direction:l?l>0?A.forward:A.back:A.unknown})})};function c(){o=n.value}function u(e){i.push(e);const t=()=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)};return s.push(t),t}function l(){const{history:e}=window;e.state&&e.replaceState(f({},e.state,{scroll:R()}),"")}function h(){for(const e of s)e();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",l)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",l),{pauseListeners:c,listen:u,destroy:h}}function q(e,t,n,r=!1,i=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:i?R():null}}function z(e){const{history:t,location:n}=window,r={value:U(e,n)},i={value:t.state};function s(r,s,o){const a=e.indexOf("#"),c=a>-1?(n.host&&document.querySelector("base")?e:e.slice(a))+r:V()+e+r;try{t[o?"replaceState":"pushState"](s,"",c),i.value=s}catch(u){console.error(u),n[o?"replace":"assign"](c)}}function o(e,n){const o=f({},t.state,q(i.value.back,e,i.value.forward,!0),n,{position:i.value.position});s(e,o,!0),r.value=e}function a(e,n){const o=f({},i.value,t.state,{forward:e,scroll:R()});s(o.current,o,!0);const a=f({},q(r.value,e,null),{position:o.position+1},n);s(e,a,!1),r.value=e}return i.value||s(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:r,state:i,push:a,replace:o}}function G(e){e=C(e);const t=z(e),n=B(e,t.state,t.location,t.replace);function r(e,t=!0){t||n.pauseListeners(),history.go(e)}const i=f({location:"",base:e,go:r,createHref:N.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}function $(e){return"string"===typeof e||e&&"object"===typeof e}function K(e){return"string"===typeof e||"symbol"===typeof e}const H={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},W=s("nf");var Q;(function(e){e[e["aborted"]=4]="aborted",e[e["cancelled"]=8]="cancelled",e[e["duplicated"]=16]="duplicated"})(Q||(Q={}));function Y(e,t){return f(new Error,{type:e,[W]:!0},t)}function J(e,t){return e instanceof Error&&W in e&&(null==t||!!(e.type&t))}const X="[^/]+?",Z={sensitive:!1,strict:!1,start:!0,end:!0},ee=/[.+*?^${}()[\]/\\]/g;function te(e,t){const n=f({},Z,t),r=[];let i=n.start?"^":"";const s=[];for(const l of e){const e=l.length?[]:[90];n.strict&&!l.length&&(i+="/");for(let t=0;t<l.length;t++){const r=l[t];let o=40+(n.sensitive?.25:0);if(0===r.type)t||(i+="/"),i+=r.value.replace(ee,"\\$&"),o+=40;else if(1===r.type){const{value:e,repeatable:n,optional:a,regexp:c}=r;s.push({name:e,repeatable:n,optional:a});const h=c||X;if(h!==X){o+=10;try{new RegExp(`(${h})`)}catch(u){throw new Error(`Invalid custom RegExp for param "${e}" (${h}): `+u.message)}}let d=n?`((?:${h})(?:/(?:${h}))*)`:`(${h})`;t||(d=a&&l.length<2?`(?:/${d})`:"/"+d),a&&(d+="?"),i+=d,o+=20,a&&(o+=-8),n&&(o+=-20),".*"===h&&(o+=-50)}e.push(o)}r.push(e)}if(n.strict&&n.end){const e=r.length-1;r[e][r[e].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(e){const t=e.match(o),n={};if(!t)return null;for(let r=1;r<t.length;r++){const e=t[r]||"",i=s[r-1];n[i.name]=e&&i.repeatable?e.split("/"):e}return n}function c(t){let n="",r=!1;for(const i of e){r&&n.endsWith("/")||(n+="/"),r=!1;for(const e of i)if(0===e.type)n+=e.value;else if(1===e.type){const{value:s,repeatable:o,optional:a}=e,c=s in t?t[s]:"";if(Array.isArray(c)&&!o)throw new Error(`Provided param "${s}" is an array but it is not repeatable (* or + modifiers)`);const u=Array.isArray(c)?c.join("/"):c;if(!u){if(!a)throw new Error(`Missing required param "${s}"`);i.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=u}}return n}return{re:o,score:r,keys:s,parse:a,stringify:c}}function ne(e,t){let n=0;while(n<e.length&&n<t.length){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function re(e,t){let n=0;const r=e.score,i=t.score;while(n<r.length&&n<i.length){const e=ne(r[n],i[n]);if(e)return e;n++}return i.length-r.length}const ie={type:0,value:""},se=/[a-zA-Z0-9_]/;function oe(e){if(!e)return[[]];if("/"===e)return[[ie]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${n})/"${u}": ${e}`)}let n=0,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let a,c=0,u="",l="";function h(){u&&(0===n?s.push({type:0,value:u}):1===n||2===n||3===n?(s.length>1&&("*"===a||"+"===a)&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:u,regexp:l,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):t("Invalid state to consume buffer"),u="")}function d(){u+=a}while(c<e.length)if(a=e[c++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(u&&h(),o()):":"===a?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:"("===a?n=2:se.test(a)?d():(h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--);break;case 2:")"===a?"\\"==l[l.length-1]?l=l.slice(0,-1)+a:n=3:l+=a;break;case 3:h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--,l="";break;default:t("Unknown state");break}else r=n,n=4;return 2===n&&t(`Unfinished custom RegExp for param "${u}"`),h(),o(),i}function ae(e,t,n){const r=te(oe(e.path),n);const i=f(r,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf===!t.record.aliasOf&&t.children.push(i),i}function ce(e,t){const n=[],r=new Map;function i(e){return r.get(e)}function s(e,n,r){const i=!r,a=le(e);a.aliasOf=r&&r.record;const u=pe(t,e),l=[a];if("alias"in e){const t="string"===typeof e.alias?[e.alias]:e.alias;for(const e of t)l.push(f({},a,{components:r?r.record.components:a.components,path:e,aliasOf:r?r.record:a}))}let h,d;for(const t of l){const{path:l}=t;if(n&&"/"!==l[0]){const e=n.record.path,r="/"===e[e.length-1]?"":"/";t.path=n.record.path+(l&&r+l)}if(h=ae(t,n,u),r?r.alias.push(h):(d=d||h,d!==h&&d.alias.push(h),i&&e.name&&!de(h)&&o(e.name)),"children"in a){const e=a.children;for(let t=0;t<e.length;t++)s(e[t],h,r&&r.children[t])}r=r||h,c(h)}return d?()=>{o(d)}:g}function o(e){if(K(e)){const t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(o),t.alias.forEach(o))}else{const t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(o),e.alias.forEach(o))}}function a(){return n}function c(e){let t=0;while(t<n.length&&re(e,n[t])>=0)t++;n.splice(t,0,e),e.record.name&&!de(e)&&r.set(e.record.name,e)}function u(e,t){let i,s,o,a={};if("name"in e&&e.name){if(i=r.get(e.name),!i)throw Y(1,{location:e});o=i.record.name,a=f(ue(t.params,i.keys.filter(e=>!e.optional).map(e=>e.name)),e.params),s=i.stringify(a)}else if("path"in e)s=e.path,i=n.find(e=>e.re.test(s)),i&&(a=i.parse(s),o=i.record.name);else{if(i=t.name?r.get(t.name):n.find(e=>e.re.test(t.path)),!i)throw Y(1,{location:e,currentLocation:t});o=i.record.name,a=f({},t.params,e.params),s=i.stringify(a)}const c=[];let u=i;while(u)c.unshift(u.record),u=u.parent;return{name:o,path:s,params:a,matched:c,meta:fe(c)}}return t=pe({strict:!1,end:!0,sensitive:!1},t),e.forEach(e=>s(e)),{addRoute:s,resolve:u,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function ue(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function le(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:he(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||{}:{default:e.component}}}function he(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]="boolean"===typeof n?n:n[r];return t}function de(e){while(e){if(e.record.aliasOf)return!0;e=e.parent}return!1}function fe(e){return e.reduce((e,t)=>f(e,t.meta),{})}function pe(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}const ge=/#/g,me=/&/g,ve=/\//g,ye=/=/g,be=/\?/g,we=/\+/g,_e=/%5B/g,Ie=/%5D/g,Ee=/%5E/g,Te=/%60/g,Se=/%7B/g,Oe=/%7C/g,ke=/%7D/g,Ae=/%20/g;function Ce(e){return encodeURI(""+e).replace(Oe,"|").replace(_e,"[").replace(Ie,"]")}function xe(e){return Ce(e).replace(Se,"{").replace(ke,"}").replace(Ee,"^")}function Ne(e){return Ce(e).replace(we,"%2B").replace(Ae,"+").replace(ge,"%23").replace(me,"%26").replace(Te,"`").replace(Se,"{").replace(ke,"}").replace(Ee,"^")}function De(e){return Ne(e).replace(ye,"%3D")}function Re(e){return Ce(e).replace(ge,"%23").replace(be,"%3F")}function Pe(e){return null==e?"":Re(e).replace(ve,"%2F")}function je(e){try{return decodeURIComponent(""+e)}catch(t){}return""+e}function Le(e){const t={};if(""===e||"?"===e)return t;const n="?"===e[0],r=(n?e.slice(1):e).split("&");for(let i=0;i<r.length;++i){const e=r[i].replace(we," "),n=e.indexOf("="),s=je(n<0?e:e.slice(0,n)),o=n<0?null:je(e.slice(n+1));if(s in t){let e=t[s];Array.isArray(e)||(e=t[s]=[e]),e.push(o)}else t[s]=o}return t}function Me(e){let t="";for(let n in e){const r=e[n];if(n=De(n),null==r){void 0!==r&&(t+=(t.length?"&":"")+n);continue}const i=Array.isArray(r)?r.map(e=>e&&Ne(e)):[r&&Ne(r)];i.forEach(e=>{void 0!==e&&(t+=(t.length?"&":"")+n,null!=e&&(t+="="+e))})}return t}function Fe(e){const t={};for(const n in e){const r=e[n];void 0!==r&&(t[n]=Array.isArray(r)?r.map(e=>null==e?null:""+e):null==r?r:""+r)}return t}function Ve(){let e=[];function t(t){return e.push(t),()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function Ue(e,t,n,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const c=e=>{!1===e?a(Y(4,{from:n,to:t})):e instanceof Error?a(e):$(e)?a(Y(2,{from:t,to:e})):(s&&r.enterCallbacks[i]===s&&"function"===typeof e&&s.push(e),o())},u=e.call(r&&r.instances[i],t,n,c);let l=Promise.resolve(u);e.length<3&&(l=l.then(c)),l.catch(e=>a(e))})}function Be(e,t,n,r){const i=[];for(const s of e)for(const e in s.components){let o=s.components[e];if("beforeRouteEnter"===t||s.instances[e])if(qe(o)){const a=o.__vccOpts||o,c=a[t];c&&i.push(Ue(c,n,r,s,e))}else{let a=o();0,i.push(()=>a.then(i=>{if(!i)return Promise.reject(new Error(`Couldn't resolve component "${e}" at "${s.path}"`));const o=d(i)?i.default:i;s.components[e]=o;const a=o.__vccOpts||o,c=a[t];return c&&Ue(c,n,r,s,e)()}))}}return i}function qe(e){return"object"===typeof e||"displayName"in e||"props"in e||"__vccOpts"in e}function ze(e){const t=Object(r["n"])(c),n=Object(r["n"])(u),i=Object(r["b"])(()=>t.resolve(Object(r["D"])(e.to))),s=Object(r["b"])(()=>{const{matched:e}=i.value,{length:t}=e,r=e[t-1],s=n.matched;if(!r||!s.length)return-1;const o=s.findIndex(I.bind(null,r));if(o>-1)return o;const a=We(e[t-2]);return t>1&&We(r)===a&&s[s.length-1].path!==a?s.findIndex(I.bind(null,e[t-2])):o}),o=Object(r["b"])(()=>s.value>-1&&He(n.params,i.value.params)),a=Object(r["b"])(()=>s.value>-1&&s.value===n.matched.length-1&&E(n.params,i.value.params));function l(n={}){return Ke(n)?t[Object(r["D"])(e.replace)?"replace":"push"](Object(r["D"])(e.to)).catch(g):Promise.resolve()}return{route:i,href:Object(r["b"])(()=>i.value.href),isActive:o,isExactActive:a,navigate:l}}const Ge=Object(r["k"])({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ze,setup(e,{slots:t}){const n=Object(r["w"])(ze(e)),{options:i}=Object(r["n"])(c),s=Object(r["b"])(()=>({[Qe(e.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[Qe(e.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&t.default(n);return e.custom?i:Object(r["m"])("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),$e=Ge;function Ke(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&(void 0===e.button||0===e.button)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function He(e,t){for(const n in t){const r=t[n],i=e[n];if("string"===typeof r){if(r!==i)return!1}else if(!Array.isArray(i)||i.length!==r.length||r.some((e,t)=>e!==i[t]))return!1}return!0}function We(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Qe=(e,t,n)=>null!=e?e:null!=t?t:n,Ye=Object(r["k"])({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(e,{attrs:t,slots:n}){const i=Object(r["n"])(l),s=Object(r["b"])(()=>e.route||i.value),c=Object(r["n"])(a,0),u=Object(r["b"])(()=>s.value.matched[c]);Object(r["u"])(a,c+1),Object(r["u"])(o,u),Object(r["u"])(l,s);const h=Object(r["x"])();return Object(r["F"])(()=>[h.value,u.value,e.name],([e,t,n],[r,i,s])=>{t&&(t.instances[n]=e,i&&i!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=i.leaveGuards),t.updateGuards.size||(t.updateGuards=i.updateGuards))),!e||!t||i&&I(t,i)&&r||(t.enterCallbacks[n]||[]).forEach(t=>t(e))},{flush:"post"}),()=>{const i=s.value,o=u.value,a=o&&o.components[e.name],c=e.name;if(!a)return Je(n.default,{Component:a,route:i});const l=o.props[e.name],d=l?!0===l?i.params:"function"===typeof l?l(i):l:null,p=e=>{e.component.isUnmounted&&(o.instances[c]=null)},g=Object(r["m"])(a,f({},d,t,{onVnodeUnmounted:p,ref:h}));return Je(n.default,{Component:g,route:i})||g}}});function Je(e,t){if(!e)return null;const n=e(t);return 1===n.length?n[0]:n}const Xe=Ye;function Ze(e){const t=ce(e.routes,e),n=e.parseQuery||Le,i=e.stringifyQuery||Me,s=e.history;const o=Ve(),a=Ve(),d=Ve(),m=Object(r["B"])(H);let v=H;h&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const w=p.bind(null,e=>""+e),I=p.bind(null,Pe),E=p.bind(null,je);function T(e,n){let r,i;return K(e)?(r=t.getRecordMatcher(e),i=n):i=e,t.addRoute(i,r)}function S(e){const n=t.getRecordMatcher(e);n&&t.removeRoute(n)}function O(){return t.getRoutes().map(e=>e.record)}function A(e){return!!t.getRecordMatcher(e)}function C(e,r){if(r=f({},r||m.value),"string"===typeof e){const i=y(n,e,r.path),o=t.resolve({path:i.path},r),a=s.createHref(i.fullPath);return f(i,o,{params:E(o.params),hash:je(i.hash),redirectedFrom:void 0,href:a})}let o;if("path"in e)o=f({},e,{path:y(n,e.path,r.path).path});else{const t=f({},e.params);for(const e in t)null==t[e]&&delete t[e];o=f({},e,{params:I(e.params)}),r.params=I(r.params)}const a=t.resolve(o,r),c=e.hash||"";a.params=w(E(a.params));const u=b(i,f({},e,{hash:xe(c),path:a.path})),l=s.createHref(u);return f({fullPath:u,hash:c,query:i===Me?Fe(e.query):e.query||{}},a,{redirectedFrom:void 0,href:l})}function x(e){return"string"===typeof e?y(n,e,m.value.path):f({},e)}function N(e,t){if(v!==e)return Y(8,{from:t,to:e})}function D(e){return U(e)}function L(e){return D(f(x(e),{replace:!0}))}function V(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:n}=t;let r="function"===typeof n?n(e):n;return"string"===typeof r&&(r=r.includes("?")||r.includes("#")?r=x(r):{path:r},r.params={}),f({query:e.query,hash:e.hash,params:e.params},r)}}function U(e,t){const n=v=C(e),r=m.value,s=e.state,o=e.force,a=!0===e.replace,c=V(n);if(c)return U(f(x(c),{state:s,force:o,replace:a}),t||n);const u=n;let l;return u.redirectedFrom=t,!o&&_(i,r,n)&&(l=Y(16,{to:u,from:r}),re(r,r,!0,!1)),(l?Promise.resolve(l):q(u,r)).catch(e=>J(e)?e:ee(e,u,r)).then(e=>{if(e){if(J(e,2))return U(f(x(e.to),{state:s,force:o,replace:a}),t||u)}else e=G(u,r,!0,a,s);return z(u,r,e),e})}function B(e,t){const n=N(e,t);return n?Promise.reject(n):Promise.resolve()}function q(e,t){let n;const[r,i,s]=tt(e,t);n=Be(r.reverse(),"beforeRouteLeave",e,t);for(const o of r)o.leaveGuards.forEach(r=>{n.push(Ue(r,e,t))});const c=B.bind(null,e,t);return n.push(c),et(n).then(()=>{n=[];for(const r of o.list())n.push(Ue(r,e,t));return n.push(c),et(n)}).then(()=>{n=Be(i,"beforeRouteUpdate",e,t);for(const r of i)r.updateGuards.forEach(r=>{n.push(Ue(r,e,t))});return n.push(c),et(n)}).then(()=>{n=[];for(const r of e.matched)if(r.beforeEnter&&!t.matched.includes(r))if(Array.isArray(r.beforeEnter))for(const i of r.beforeEnter)n.push(Ue(i,e,t));else n.push(Ue(r.beforeEnter,e,t));return n.push(c),et(n)}).then(()=>(e.matched.forEach(e=>e.enterCallbacks={}),n=Be(s,"beforeRouteEnter",e,t),n.push(c),et(n))).then(()=>{n=[];for(const r of a.list())n.push(Ue(r,e,t));return n.push(c),et(n)}).catch(e=>J(e,8)?e:Promise.reject(e))}function z(e,t,n){for(const r of d.list())r(e,t,n)}function G(e,t,n,r,i){const o=N(e,t);if(o)return o;const a=t===H,c=h?history.state:{};n&&(r||a?s.replace(e.fullPath,f({scroll:a&&c&&c.scroll},i)):s.push(e.fullPath,i)),m.value=e,re(e,t,n,a),ne()}let $;function W(){$=s.listen((e,t,n)=>{const r=C(e),i=V(r);if(i)return void U(f(i,{replace:!0}),r).catch(g);v=r;const o=m.value;h&&M(j(o.fullPath,n.delta),R()),q(r,o).catch(e=>J(e,12)?e:J(e,2)?(U(e.to,r).then(e=>{J(e,20)&&!n.delta&&n.type===k.pop&&s.go(-1,!1)}).catch(g),Promise.reject()):(n.delta&&s.go(-n.delta,!1),ee(e,r,o))).then(e=>{e=e||G(r,o,!1),e&&(n.delta?s.go(-n.delta,!1):n.type===k.pop&&J(e,20)&&s.go(-1,!1)),z(r,o,e)}).catch(g)})}let Q,X=Ve(),Z=Ve();function ee(e,t,n){ne(e);const r=Z.list();return r.length?r.forEach(r=>r(e,t,n)):console.error(e),Promise.reject(e)}function te(){return Q&&m.value!==H?Promise.resolve():new Promise((e,t)=>{X.add([e,t])})}function ne(e){Q||(Q=!0,W(),X.list().forEach(([t,n])=>e?n(e):t()),X.reset())}function re(t,n,i,s){const{scrollBehavior:o}=e;if(!h||!o)return Promise.resolve();const a=!i&&F(j(t.fullPath,0))||(s||!i)&&history.state&&history.state.scroll||null;return Object(r["o"])().then(()=>o(t,n,a)).then(e=>e&&P(e)).catch(e=>ee(e,t,n))}const ie=e=>s.go(e);let se;const oe=new Set,ae={currentRoute:m,addRoute:T,removeRoute:S,hasRoute:A,getRoutes:O,resolve:C,options:e,push:D,replace:L,go:ie,back:()=>ie(-1),forward:()=>ie(1),beforeEach:o.add,beforeResolve:a.add,afterEach:d.add,onError:Z.add,isReady:te,install(e){const t=this;e.component("RouterLink",$e),e.component("RouterView",Xe),e.config.globalProperties.$router=t,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>Object(r["D"])(m)}),h&&!se&&m.value===H&&(se=!0,D(s.location).catch(e=>{0}));const n={};for(const s in H)n[s]=Object(r["b"])(()=>m.value[s]);e.provide(c,t),e.provide(u,Object(r["w"])(n)),e.provide(l,m);const i=e.unmount;oe.add(e),e.unmount=function(){oe.delete(e),oe.size<1&&(v=H,$&&$(),m.value=H,se=!1,Q=!1),i()}}};return ae}function et(e){return e.reduce((e,t)=>e.then(()=>t()),Promise.resolve())}function tt(e,t){const n=[],r=[],i=[],s=Math.max(t.matched.length,e.matched.length);for(let o=0;o<s;o++){const s=t.matched[o];s&&(e.matched.find(e=>I(e,s))?r.push(s):n.push(s));const a=e.matched[o];a&&(t.matched.find(e=>I(e,a))||i.push(a))}return[n,r,i]}function nt(){return Object(r["n"])(u)}},"6eeb":function(e,t,n){var r=n("da84"),i=n("1626"),s=n("1a2d"),o=n("9112"),a=n("ce4e"),c=n("8925"),u=n("69f3"),l=n("5e77").CONFIGURABLE,h=u.get,d=u.enforce,f=String(String).split("String");(e.exports=function(e,t,n,c){var u,h=!!c&&!!c.unsafe,p=!!c&&!!c.enumerable,g=!!c&&!!c.noTargetGet,m=c&&void 0!==c.name?c.name:t;i(n)&&("Symbol("===String(m).slice(0,7)&&(m="["+String(m).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!s(n,"name")||l&&n.name!==m)&&o(n,"name",m),u=d(n),u.source||(u.source=f.join("string"==typeof m?m:""))),e!==r?(h?!g&&e[t]&&(p=!0):delete e[t],p?e[t]=n:o(e,t,n)):p?e[t]=n:a(t,n)})(Function.prototype,"toString",(function(){return i(this)&&h(this).source||c(this)}))},7156:function(e,t,n){var r=n("1626"),i=n("861d"),s=n("d2bb");e.exports=function(e,t,n){var o,a;return s&&r(o=t.constructor)&&o!==n&&i(a=o.prototype)&&a!==n.prototype&&s(e,a),e}},7418:function(e,t){t.f=Object.getOwnPropertySymbols},"746f":function(e,t,n){var r=n("428f"),i=n("1a2d"),s=n("e538"),o=n("9bf2").f;e.exports=function(e){var t=r.Symbol||(r.Symbol={});i(t,e)||o(t,e,{value:s.f(e)})}},7839:function(e,t){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},"785a":function(e,t,n){var r=n("cc12"),i=r("span").classList,s=i&&i.constructor&&i.constructor.prototype;e.exports=s===Object.prototype?void 0:s},"7a23":function(e,t,n){"use strict";n.d(t,"b",(function(){return $e})),n.d(t,"w",(function(){return Ee})),n.d(t,"x",(function(){return Me})),n.d(t,"B",(function(){return Fe})),n.d(t,"D",(function(){return Be})),n.d(t,"C",(function(){return r["L"]})),n.d(t,"a",(function(){return Bn})),n.d(t,"d",(function(){return Zn})),n.d(t,"e",(function(){return dr})),n.d(t,"f",(function(){return Xn})),n.d(t,"g",(function(){return sr})),n.d(t,"h",(function(){return hr})),n.d(t,"i",(function(){return lr})),n.d(t,"j",(function(){return or})),n.d(t,"k",(function(){return _t})),n.d(t,"l",(function(){return Or})),n.d(t,"m",(function(){return Ei})),n.d(t,"n",(function(){return lt})),n.d(t,"o",(function(){return si})),n.d(t,"p",(function(){return St})),n.d(t,"q",(function(){return Ot})),n.d(t,"r",(function(){return Ft})),n.d(t,"s",(function(){return Hn})),n.d(t,"t",(function(){return Ze})),n.d(t,"u",(function(){return ut})),n.d(t,"v",(function(){return Xe})),n.d(t,"y",(function(){return yr})),n.d(t,"z",(function(){return Ln})),n.d(t,"A",(function(){return Fn})),n.d(t,"F",(function(){return yi})),n.d(t,"G",(function(){return et})),n.d(t,"H",(function(){return wn})),n.d(t,"c",(function(){return ks})),n.d(t,"E",(function(){return Es}));var r=n("9ff4");let i;const s=[];class o{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&i&&(this.parent=i,this.index=(i.scopes||(i.scopes=[])).push(this)-1)}run(e){if(this.active)try{return this.on(),e()}finally{this.off()}else 0}on(){this.active&&(s.push(this),i=this)}off(){this.active&&(s.pop(),i=s[s.length-1])}stop(e){if(this.active){if(this.effects.forEach(e=>e.stop()),this.cleanups.forEach(e=>e()),this.scopes&&this.scopes.forEach(e=>e.stop(!0)),this.parent&&!e){const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.active=!1}}}function a(e,t){t=t||i,t&&t.active&&t.effects.push(e)}const c=e=>{const t=new Set(e);return t.w=0,t.n=0,t},u=e=>(e.w&g)>0,l=e=>(e.n&g)>0,h=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=g},d=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const i=t[r];u(i)&&!l(i)?i.delete(e):t[n++]=i,i.w&=~g,i.n&=~g}t.length=n}},f=new WeakMap;let p=0,g=1;const m=30,v=[];let y;const b=Symbol(""),w=Symbol("");class _{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],a(this,n)}run(){if(!this.active)return this.fn();if(!v.includes(this))try{return v.push(y=this),O(),g=1<<++p,p<=m?h(this):I(this),this.fn()}finally{p<=m&&d(this),g=1<<--p,k(),v.pop();const e=v.length;y=e>0?v[e-1]:void 0}}stop(){this.active&&(I(this),this.onStop&&this.onStop(),this.active=!1)}}function I(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let E=!0;const T=[];function S(){T.push(E),E=!1}function O(){T.push(E),E=!0}function k(){const e=T.pop();E=void 0===e||e}function A(e,t,n){if(!C())return;let r=f.get(e);r||f.set(e,r=new Map);let i=r.get(n);i||r.set(n,i=c());const s=void 0;x(i,s)}function C(){return E&&void 0!==y}function x(e,t){let n=!1;p<=m?l(e)||(e.n|=g,n=!u(e)):n=!e.has(y),n&&(e.add(y),y.deps.push(e))}function N(e,t,n,i,s,o){const a=f.get(e);if(!a)return;let u=[];if("clear"===t)u=[...a.values()];else if("length"===n&&Object(r["o"])(e))a.forEach((e,t)=>{("length"===t||t>=i)&&u.push(e)});else switch(void 0!==n&&u.push(a.get(n)),t){case"add":Object(r["o"])(e)?Object(r["s"])(n)&&u.push(a.get("length")):(u.push(a.get(b)),Object(r["t"])(e)&&u.push(a.get(w)));break;case"delete":Object(r["o"])(e)||(u.push(a.get(b)),Object(r["t"])(e)&&u.push(a.get(w)));break;case"set":Object(r["t"])(e)&&u.push(a.get(b));break}if(1===u.length)u[0]&&D(u[0]);else{const e=[];for(const t of u)t&&e.push(...t);D(c(e))}}function D(e,t){for(const n of Object(r["o"])(e)?e:[...e])(n!==y||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const R=Object(r["H"])("__proto__,__v_isRef,__isVue"),P=new Set(Object.getOwnPropertyNames(Symbol).map(e=>Symbol[e]).filter(r["E"])),j=U(),L=U(!1,!0),M=U(!0),F=V();function V(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...e){const n=xe(this);for(let t=0,i=this.length;t<i;t++)A(n,"get",t+"");const r=n[t](...e);return-1===r||!1===r?n[t](...e.map(xe)):r}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...e){S();const n=xe(this)[t].apply(this,e);return k(),n}}),e}function U(e=!1,t=!1){return function(n,i,s){if("__v_isReactive"===i)return!e;if("__v_isReadonly"===i)return e;if("__v_raw"===i&&s===(e?t?we:be:t?ye:ve).get(n))return n;const o=Object(r["o"])(n);if(!e&&o&&Object(r["k"])(F,i))return Reflect.get(F,i,s);const a=Reflect.get(n,i,s);if(Object(r["E"])(i)?P.has(i):R(i))return a;if(e||A(n,"get",i),t)return a;if(Le(a)){const e=!o||!Object(r["s"])(i);return e?a.value:a}return Object(r["v"])(a)?e?Se(a):Ee(a):a}}const B=z(),q=z(!0);function z(e=!1){return function(t,n,i,s){let o=t[n];if(!e&&!Ae(i)&&(i=xe(i),o=xe(o),!Object(r["o"])(t)&&Le(o)&&!Le(i)))return o.value=i,!0;const a=Object(r["o"])(t)&&Object(r["s"])(n)?Number(n)<t.length:Object(r["k"])(t,n),c=Reflect.set(t,n,i,s);return t===xe(s)&&(a?Object(r["j"])(i,o)&&N(t,"set",n,i,o):N(t,"add",n,i)),c}}function G(e,t){const n=Object(r["k"])(e,t),i=e[t],s=Reflect.deleteProperty(e,t);return s&&n&&N(e,"delete",t,void 0,i),s}function $(e,t){const n=Reflect.has(e,t);return Object(r["E"])(t)&&P.has(t)||A(e,"has",t),n}function K(e){return A(e,"iterate",Object(r["o"])(e)?"length":b),Reflect.ownKeys(e)}const H={get:j,set:B,deleteProperty:G,has:$,ownKeys:K},W={get:M,set(e,t){return!0},deleteProperty(e,t){return!0}},Q=Object(r["h"])({},H,{get:L,set:q}),Y=e=>e,J=e=>Reflect.getPrototypeOf(e);function X(e,t,n=!1,r=!1){e=e["__v_raw"];const i=xe(e),s=xe(t);t!==s&&!n&&A(i,"get",t),!n&&A(i,"get",s);const{has:o}=J(i),a=r?Y:n?Re:De;return o.call(i,t)?a(e.get(t)):o.call(i,s)?a(e.get(s)):void(e!==i&&e.get(t))}function Z(e,t=!1){const n=this["__v_raw"],r=xe(n),i=xe(e);return e!==i&&!t&&A(r,"has",e),!t&&A(r,"has",i),e===i?n.has(e):n.has(e)||n.has(i)}function ee(e,t=!1){return e=e["__v_raw"],!t&&A(xe(e),"iterate",b),Reflect.get(e,"size",e)}function te(e){e=xe(e);const t=xe(this),n=J(t),r=n.has.call(t,e);return r||(t.add(e),N(t,"add",e,e)),this}function ne(e,t){t=xe(t);const n=xe(this),{has:i,get:s}=J(n);let o=i.call(n,e);o||(e=xe(e),o=i.call(n,e));const a=s.call(n,e);return n.set(e,t),o?Object(r["j"])(t,a)&&N(n,"set",e,t,a):N(n,"add",e,t),this}function re(e){const t=xe(this),{has:n,get:r}=J(t);let i=n.call(t,e);i||(e=xe(e),i=n.call(t,e));const s=r?r.call(t,e):void 0,o=t.delete(e);return i&&N(t,"delete",e,void 0,s),o}function ie(){const e=xe(this),t=0!==e.size,n=void 0,r=e.clear();return t&&N(e,"clear",void 0,void 0,n),r}function se(e,t){return function(n,r){const i=this,s=i["__v_raw"],o=xe(s),a=t?Y:e?Re:De;return!e&&A(o,"iterate",b),s.forEach((e,t)=>n.call(r,a(e),a(t),i))}}function oe(e,t,n){return function(...i){const s=this["__v_raw"],o=xe(s),a=Object(r["t"])(o),c="entries"===e||e===Symbol.iterator&&a,u="keys"===e&&a,l=s[e](...i),h=n?Y:t?Re:De;return!t&&A(o,"iterate",u?w:b),{next(){const{value:e,done:t}=l.next();return t?{value:e,done:t}:{value:c?[h(e[0]),h(e[1])]:h(e),done:t}},[Symbol.iterator](){return this}}}}function ae(e){return function(...t){return"delete"!==e&&this}}function ce(){const e={get(e){return X(this,e)},get size(){return ee(this)},has:Z,add:te,set:ne,delete:re,clear:ie,forEach:se(!1,!1)},t={get(e){return X(this,e,!1,!0)},get size(){return ee(this)},has:Z,add:te,set:ne,delete:re,clear:ie,forEach:se(!1,!0)},n={get(e){return X(this,e,!0)},get size(){return ee(this,!0)},has(e){return Z.call(this,e,!0)},add:ae("add"),set:ae("set"),delete:ae("delete"),clear:ae("clear"),forEach:se(!0,!1)},r={get(e){return X(this,e,!0,!0)},get size(){return ee(this,!0)},has(e){return Z.call(this,e,!0)},add:ae("add"),set:ae("set"),delete:ae("delete"),clear:ae("clear"),forEach:se(!0,!0)},i=["keys","values","entries",Symbol.iterator];return i.forEach(i=>{e[i]=oe(i,!1,!1),n[i]=oe(i,!0,!1),t[i]=oe(i,!1,!0),r[i]=oe(i,!0,!0)}),[e,n,t,r]}const[ue,le,he,de]=ce();function fe(e,t){const n=t?e?de:he:e?le:ue;return(t,i,s)=>"__v_isReactive"===i?!e:"__v_isReadonly"===i?e:"__v_raw"===i?t:Reflect.get(Object(r["k"])(n,i)&&i in t?n:t,i,s)}const pe={get:fe(!1,!1)},ge={get:fe(!1,!0)},me={get:fe(!0,!1)};const ve=new WeakMap,ye=new WeakMap,be=new WeakMap,we=new WeakMap;function _e(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ie(e){return e["__v_skip"]||!Object.isExtensible(e)?0:_e(Object(r["O"])(e))}function Ee(e){return e&&e["__v_isReadonly"]?e:Oe(e,!1,H,pe,ve)}function Te(e){return Oe(e,!1,Q,ge,ye)}function Se(e){return Oe(e,!0,W,me,be)}function Oe(e,t,n,i,s){if(!Object(r["v"])(e))return e;if(e["__v_raw"]&&(!t||!e["__v_isReactive"]))return e;const o=s.get(e);if(o)return o;const a=Ie(e);if(0===a)return e;const c=new Proxy(e,2===a?i:n);return s.set(e,c),c}function ke(e){return Ae(e)?ke(e["__v_raw"]):!(!e||!e["__v_isReactive"])}function Ae(e){return!(!e||!e["__v_isReadonly"])}function Ce(e){return ke(e)||Ae(e)}function xe(e){const t=e&&e["__v_raw"];return t?xe(t):e}function Ne(e){return Object(r["g"])(e,"__v_skip",!0),e}const De=e=>Object(r["v"])(e)?Ee(e):e,Re=e=>Object(r["v"])(e)?Se(e):e;function Pe(e){C()&&(e=xe(e),e.dep||(e.dep=c()),x(e.dep))}function je(e,t){e=xe(e),e.dep&&D(e.dep)}function Le(e){return Boolean(e&&!0===e.__v_isRef)}function Me(e){return Ve(e,!1)}function Fe(e){return Ve(e,!0)}function Ve(e,t){return Le(e)?e:new Ue(e,t)}class Ue{constructor(e,t){this._shallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:xe(e),this._value=t?e:De(e)}get value(){return Pe(this),this._value}set value(e){e=this._shallow?e:xe(e),Object(r["j"])(e,this._rawValue)&&(this._rawValue=e,this._value=this._shallow?e:De(e),je(this,e))}}function Be(e){return Le(e)?e.value:e}const qe={get:(e,t,n)=>Be(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return Le(i)&&!Le(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function ze(e){return ke(e)?e:new Proxy(e,qe)}class Ge{constructor(e,t,n){this._setter=t,this.dep=void 0,this._dirty=!0,this.__v_isRef=!0,this.effect=new _(e,()=>{this._dirty||(this._dirty=!0,je(this))}),this["__v_isReadonly"]=n}get value(){const e=xe(this);return Pe(e),e._dirty&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function $e(e,t){let n,i;const s=Object(r["p"])(e);s?(n=e,i=r["d"]):(n=e.get,i=e.set);const o=new Ge(n,i,s||!i);return o}Promise.resolve();new Set;new Map;function Ke(e,t,...n){const i=e.vnode.props||r["b"];let s=n;const o=t.startsWith("update:"),a=o&&t.slice(7);if(a&&a in i){const e=("modelValue"===a?"model":a)+"Modifiers",{number:t,trim:o}=i[e]||r["b"];o?s=n.map(e=>e.trim()):t&&(s=n.map(r["N"]))}let c;let u=i[c=Object(r["M"])(t)]||i[c=Object(r["M"])(Object(r["e"])(t))];!u&&o&&(u=i[c=Object(r["M"])(Object(r["l"])(t))]),u&&zr(u,e,6,s);const l=i[c+"Once"];if(l){if(e.emitted){if(e.emitted[c])return}else e.emitted={};e.emitted[c]=!0,zr(l,e,6,s)}}function He(e,t,n=!1){const i=t.emitsCache,s=i.get(e);if(void 0!==s)return s;const o=e.emits;let a={},c=!1;if(!Object(r["p"])(e)){const i=e=>{const n=He(e,t,!0);n&&(c=!0,Object(r["h"])(a,n))};!n&&t.mixins.length&&t.mixins.forEach(i),e.extends&&i(e.extends),e.mixins&&e.mixins.forEach(i)}return o||c?(Object(r["o"])(o)?o.forEach(e=>a[e]=null):Object(r["h"])(a,o),i.set(e,a),a):(i.set(e,null),null)}function We(e,t){return!(!e||!Object(r["w"])(t))&&(t=t.slice(2).replace(/Once$/,""),Object(r["k"])(e,t[0].toLowerCase()+t.slice(1))||Object(r["k"])(e,Object(r["l"])(t))||Object(r["k"])(e,t))}let Qe=null,Ye=null;function Je(e){const t=Qe;return Qe=e,Ye=e&&e.type.__scopeId||null,t}function Xe(e){Ye=e}function Ze(){Ye=null}function et(e,t=Qe,n){if(!t)return e;if(e._n)return e;const r=(...n)=>{r._d&&Yn(-1);const i=Je(t),s=e(...n);return Je(i),r._d&&Yn(1),s};return r._n=!0,r._c=!0,r._d=!0,r}function tt(e){const{type:t,vnode:n,proxy:i,withProxy:s,props:o,propsOptions:[a],slots:c,attrs:u,emit:l,render:h,renderCache:d,data:f,setupState:p,ctx:g,inheritAttrs:m}=e;let v,y;const b=Je(e);try{if(4&n.shapeFlag){const e=s||i;v=fr(h.call(e,e,d,o,p,f,g)),y=u}else{const e=t;0,v=fr(e.length>1?e(o,{attrs:u,slots:c,emit:l}):e(o,null)),y=t.props?u:nt(u)}}catch(_){$n.length=0,Gr(_,e,1),v=or(zn)}let w=v;if(y&&!1!==m){const e=Object.keys(y),{shapeFlag:t}=w;e.length&&7&t&&(a&&e.some(r["u"])&&(y=rt(y,a)),w=ur(w,y))}return n.dirs&&(w.dirs=w.dirs?w.dirs.concat(n.dirs):n.dirs),n.transition&&(w.transition=n.transition),v=w,Je(b),v}const nt=e=>{let t;for(const n in e)("class"===n||"style"===n||Object(r["w"])(n))&&((t||(t={}))[n]=e[n]);return t},rt=(e,t)=>{const n={};for(const i in e)Object(r["u"])(i)&&i.slice(9)in t||(n[i]=e[i]);return n};function it(e,t,n){const{props:r,children:i,component:s}=e,{props:o,children:a,patchFlag:c}=t,u=s.emitsOptions;if(t.dirs||t.transition)return!0;if(!(n&&c>=0))return!(!i&&!a||a&&a.$stable)||r!==o&&(r?!o||st(r,o,u):!!o);if(1024&c)return!0;if(16&c)return r?st(r,o,u):!!o;if(8&c){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const n=e[t];if(o[n]!==r[n]&&!We(u,n))return!0}}return!1}function st(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(t[s]!==e[s]&&!We(n,s))return!0}return!1}function ot({vnode:e,parent:t},n){while(t&&t.subTree===e)(e=t.vnode).el=n,t=t.parent}const at=e=>e.__isSuspense;function ct(e,t){t&&t.pendingBranch?Object(r["o"])(e)?t.effects.push(...e):t.effects.push(e):di(e)}function ut(e,t){if(Sr){let n=Sr.provides;const r=Sr.parent&&Sr.parent.provides;r===n&&(n=Sr.provides=Object.create(r)),n[e]=t}else 0}function lt(e,t,n=!1){const i=Sr||Qe;if(i){const s=null==i.parent?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides;if(s&&e in s)return s[e];if(arguments.length>1)return n&&Object(r["p"])(t)?t.call(i.proxy):t}else 0}function ht(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Pt(()=>{e.isMounted=!0}),Mt(()=>{e.isUnmounting=!0}),e}const dt=[Function,Array],ft={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:dt,onEnter:dt,onAfterEnter:dt,onEnterCancelled:dt,onBeforeLeave:dt,onLeave:dt,onAfterLeave:dt,onLeaveCancelled:dt,onBeforeAppear:dt,onAppear:dt,onAfterAppear:dt,onAppearCancelled:dt},setup(e,{slots:t}){const n=Or(),r=ht();let i;return()=>{const s=t.default&&wt(t.default(),!0);if(!s||!s.length)return;const o=xe(e),{mode:a}=o;const c=s[0];if(r.isLeaving)return vt(c);const u=yt(c);if(!u)return vt(c);const l=mt(u,o,r,n);bt(u,l);const h=n.subTree,d=h&&yt(h);let f=!1;const{getTransitionKey:p}=u.type;if(p){const e=p();void 0===i?i=e:e!==i&&(i=e,f=!0)}if(d&&d.type!==zn&&(!tr(u,d)||f)){const e=mt(d,o,r,n);if(bt(d,e),"out-in"===a)return r.isLeaving=!0,e.afterLeave=()=>{r.isLeaving=!1,n.update()},vt(c);"in-out"===a&&u.type!==zn&&(e.delayLeave=(e,t,n)=>{const i=gt(r,d);i[String(d.key)]=d,e._leaveCb=()=>{t(),e._leaveCb=void 0,delete l.delayedLeave},l.delayedLeave=n})}return c}}},pt=ft;function gt(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function mt(e,t,n,r){const{appear:i,mode:s,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:u,onEnterCancelled:l,onBeforeLeave:h,onLeave:d,onAfterLeave:f,onLeaveCancelled:p,onBeforeAppear:g,onAppear:m,onAfterAppear:v,onAppearCancelled:y}=t,b=String(e.key),w=gt(n,e),_=(e,t)=>{e&&zr(e,r,9,t)},I={mode:s,persisted:o,beforeEnter(t){let r=a;if(!n.isMounted){if(!i)return;r=g||a}t._leaveCb&&t._leaveCb(!0);const s=w[b];s&&tr(e,s)&&s.el._leaveCb&&s.el._leaveCb(),_(r,[t])},enter(e){let t=c,r=u,s=l;if(!n.isMounted){if(!i)return;t=m||c,r=v||u,s=y||l}let o=!1;const a=e._enterCb=t=>{o||(o=!0,_(t?s:r,[e]),I.delayedLeave&&I.delayedLeave(),e._enterCb=void 0)};t?(t(e,a),t.length<=1&&a()):a()},leave(t,r){const i=String(e.key);if(t._enterCb&&t._enterCb(!0),n.isUnmounting)return r();_(h,[t]);let s=!1;const o=t._leaveCb=n=>{s||(s=!0,r(),_(n?p:f,[t]),t._leaveCb=void 0,w[i]===e&&delete w[i])};w[i]=e,d?(d(t,o),d.length<=1&&o()):o()},clone(e){return mt(e,t,n,r)}};return I}function vt(e){if(Et(e))return e=ur(e),e.children=null,e}function yt(e){return Et(e)?e.children?e.children[0]:void 0:e}function bt(e,t){6&e.shapeFlag&&e.component?bt(e.component.subTree,t):128&e.shapeFlag?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function wt(e,t=!1){let n=[],r=0;for(let i=0;i<e.length;i++){const s=e[i];s.type===Bn?(128&s.patchFlag&&r++,n=n.concat(wt(s.children,t))):(t||s.type!==zn)&&n.push(s)}if(r>1)for(let i=0;i<n.length;i++)n[i].patchFlag=-2;return n}function _t(e){return Object(r["p"])(e)?{setup:e,name:e.name}:e}const It=e=>!!e.type.__asyncLoader;const Et=e=>e.type.__isKeepAlive;RegExp,RegExp;function Tt(e,t){return Object(r["o"])(e)?e.some(e=>Tt(e,t)):Object(r["D"])(e)?e.split(",").indexOf(t)>-1:!!e.test&&e.test(t)}function St(e,t){kt(e,"a",t)}function Ot(e,t){kt(e,"da",t)}function kt(e,t,n=Sr){const r=e.__wdc||(e.__wdc=()=>{let t=n;while(t){if(t.isDeactivated)return;t=t.parent}return e()});if(Nt(t,r,n),n){let e=n.parent;while(e&&e.parent)Et(e.parent.vnode)&&At(r,t,n,e),e=e.parent}}function At(e,t,n,i){const s=Nt(t,e,i,!0);Ft(()=>{Object(r["K"])(i[t],s)},n)}function Ct(e){let t=e.shapeFlag;256&t&&(t-=256),512&t&&(t-=512),e.shapeFlag=t}function xt(e){return 128&e.shapeFlag?e.ssContent:e}function Nt(e,t,n=Sr,r=!1){if(n){const i=n[e]||(n[e]=[]),s=t.__weh||(t.__weh=(...r)=>{if(n.isUnmounted)return;S(),kr(n);const i=zr(t,n,e,r);return Ar(),k(),i});return r?i.unshift(s):i.push(s),s}}const Dt=e=>(t,n=Sr)=>(!Dr||"sp"===e)&&Nt(e,t,n),Rt=Dt("bm"),Pt=Dt("m"),jt=Dt("bu"),Lt=Dt("u"),Mt=Dt("bum"),Ft=Dt("um"),Vt=Dt("sp"),Ut=Dt("rtg"),Bt=Dt("rtc");function qt(e,t=Sr){Nt("ec",e,t)}let zt=!0;function Gt(e){const t=Wt(e),n=e.proxy,i=e.ctx;zt=!1,t.beforeCreate&&Kt(t.beforeCreate,e,"bc");const{data:s,computed:o,methods:a,watch:c,provide:u,inject:l,created:h,beforeMount:d,mounted:f,beforeUpdate:p,updated:g,activated:m,deactivated:v,beforeDestroy:y,beforeUnmount:b,destroyed:w,unmounted:_,render:I,renderTracked:E,renderTriggered:T,errorCaptured:S,serverPrefetch:O,expose:k,inheritAttrs:A,components:C,directives:x,filters:N}=t,D=null;if(l&&$t(l,i,D,e.appContext.config.unwrapInjectedRef),a)for(const P in a){const e=a[P];Object(r["p"])(e)&&(i[P]=e.bind(n))}if(s){0;const t=s.call(n,n);0,Object(r["v"])(t)&&(e.data=Ee(t))}if(zt=!0,o)for(const P in o){const e=o[P],t=Object(r["p"])(e)?e.bind(n,n):Object(r["p"])(e.get)?e.get.bind(n,n):r["d"];0;const s=!Object(r["p"])(e)&&Object(r["p"])(e.set)?e.set.bind(n):r["d"],a=$e({get:t,set:s});Object.defineProperty(i,P,{enumerable:!0,configurable:!0,get:()=>a.value,set:e=>a.value=e})}if(c)for(const r in c)Ht(c[r],i,n,r);if(u){const e=Object(r["p"])(u)?u.call(n):u;Reflect.ownKeys(e).forEach(t=>{ut(t,e[t])})}function R(e,t){Object(r["o"])(t)?t.forEach(t=>e(t.bind(n))):t&&e(t.bind(n))}if(h&&Kt(h,e,"c"),R(Rt,d),R(Pt,f),R(jt,p),R(Lt,g),R(St,m),R(Ot,v),R(qt,S),R(Bt,E),R(Ut,T),R(Mt,b),R(Ft,_),R(Vt,O),Object(r["o"])(k))if(k.length){const t=e.exposed||(e.exposed={});k.forEach(e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t})})}else e.exposed||(e.exposed={});I&&e.render===r["d"]&&(e.render=I),null!=A&&(e.inheritAttrs=A),C&&(e.components=C),x&&(e.directives=x)}function $t(e,t,n=r["d"],i=!1){Object(r["o"])(e)&&(e=Zt(e));for(const s in e){const n=e[s];let o;o=Object(r["v"])(n)?"default"in n?lt(n.from||s,n.default,!0):lt(n.from||s):lt(n),Le(o)&&i?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:e=>o.value=e}):t[s]=o}}function Kt(e,t,n){zr(Object(r["o"])(e)?e.map(e=>e.bind(t.proxy)):e.bind(t.proxy),t,n)}function Ht(e,t,n,i){const s=i.includes(".")?_i(n,i):()=>n[i];if(Object(r["D"])(e)){const n=t[e];Object(r["p"])(n)&&yi(s,n)}else if(Object(r["p"])(e))yi(s,e.bind(n));else if(Object(r["v"])(e))if(Object(r["o"])(e))e.forEach(e=>Ht(e,t,n,i));else{const i=Object(r["p"])(e.handler)?e.handler.bind(n):t[e.handler];Object(r["p"])(i)&&yi(s,i,e)}else 0}function Wt(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=e.appContext,a=s.get(t);let c;return a?c=a:i.length||n||r?(c={},i.length&&i.forEach(e=>Qt(c,e,o,!0)),Qt(c,t,o)):c=t,s.set(t,c),c}function Qt(e,t,n,r=!1){const{mixins:i,extends:s}=t;s&&Qt(e,s,n,!0),i&&i.forEach(t=>Qt(e,t,n,!0));for(const o in t)if(r&&"expose"===o);else{const r=Yt[o]||n&&n[o];e[o]=r?r(e[o],t[o]):t[o]}return e}const Yt={data:Jt,props:tn,emits:tn,methods:tn,computed:tn,beforeCreate:en,created:en,beforeMount:en,mounted:en,beforeUpdate:en,updated:en,beforeDestroy:en,beforeUnmount:en,destroyed:en,unmounted:en,activated:en,deactivated:en,errorCaptured:en,serverPrefetch:en,components:tn,directives:tn,watch:nn,provide:Jt,inject:Xt};function Jt(e,t){return t?e?function(){return Object(r["h"])(Object(r["p"])(e)?e.call(this,this):e,Object(r["p"])(t)?t.call(this,this):t)}:t:e}function Xt(e,t){return tn(Zt(e),Zt(t))}function Zt(e){if(Object(r["o"])(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function en(e,t){return e?[...new Set([].concat(e,t))]:t}function tn(e,t){return e?Object(r["h"])(Object(r["h"])(Object.create(null),e),t):t}function nn(e,t){if(!e)return t;if(!t)return e;const n=Object(r["h"])(Object.create(null),e);for(const r in t)n[r]=en(e[r],t[r]);return n}function rn(e,t,n,i=!1){const s={},o={};Object(r["g"])(o,nr,1),e.propsDefaults=Object.create(null),on(e,t,s,o);for(const r in e.propsOptions[0])r in s||(s[r]=void 0);n?e.props=i?s:Te(s):e.type.props?e.props=s:e.props=o,e.attrs=o}function sn(e,t,n,i){const{props:s,attrs:o,vnode:{patchFlag:a}}=e,c=xe(s),[u]=e.propsOptions;let l=!1;if(!(i||a>0)||16&a){let i;on(e,t,s,o)&&(l=!0);for(const o in c)t&&(Object(r["k"])(t,o)||(i=Object(r["l"])(o))!==o&&Object(r["k"])(t,i))||(u?!n||void 0===n[o]&&void 0===n[i]||(s[o]=an(u,c,o,void 0,e,!0)):delete s[o]);if(o!==c)for(const e in o)t&&Object(r["k"])(t,e)||(delete o[e],l=!0)}else if(8&a){const n=e.vnode.dynamicProps;for(let i=0;i<n.length;i++){let a=n[i];const h=t[a];if(u)if(Object(r["k"])(o,a))h!==o[a]&&(o[a]=h,l=!0);else{const t=Object(r["e"])(a);s[t]=an(u,c,t,h,e,!1)}else h!==o[a]&&(o[a]=h,l=!0)}}l&&N(e,"set","$attrs")}function on(e,t,n,i){const[s,o]=e.propsOptions;let a,c=!1;if(t)for(let u in t){if(Object(r["z"])(u))continue;const l=t[u];let h;s&&Object(r["k"])(s,h=Object(r["e"])(u))?o&&o.includes(h)?(a||(a={}))[h]=l:n[h]=l:We(e.emitsOptions,u)||u in i&&l===i[u]||(i[u]=l,c=!0)}if(o){const t=xe(n),i=a||r["b"];for(let a=0;a<o.length;a++){const c=o[a];n[c]=an(s,t,c,i[c],e,!Object(r["k"])(i,c))}}return c}function an(e,t,n,i,s,o){const a=e[n];if(null!=a){const e=Object(r["k"])(a,"default");if(e&&void 0===i){const e=a.default;if(a.type!==Function&&Object(r["p"])(e)){const{propsDefaults:r}=s;n in r?i=r[n]:(kr(s),i=r[n]=e.call(null,t),Ar())}else i=e}a[0]&&(o&&!e?i=!1:!a[1]||""!==i&&i!==Object(r["l"])(n)||(i=!0))}return i}function cn(e,t,n=!1){const i=t.propsCache,s=i.get(e);if(s)return s;const o=e.props,a={},c=[];let u=!1;if(!Object(r["p"])(e)){const i=e=>{u=!0;const[n,i]=cn(e,t,!0);Object(r["h"])(a,n),i&&c.push(...i)};!n&&t.mixins.length&&t.mixins.forEach(i),e.extends&&i(e.extends),e.mixins&&e.mixins.forEach(i)}if(!o&&!u)return i.set(e,r["a"]),r["a"];if(Object(r["o"])(o))for(let h=0;h<o.length;h++){0;const e=Object(r["e"])(o[h]);un(e)&&(a[e]=r["b"])}else if(o){0;for(const e in o){const t=Object(r["e"])(e);if(un(t)){const n=o[e],i=a[t]=Object(r["o"])(n)||Object(r["p"])(n)?{type:n}:n;if(i){const e=dn(Boolean,i.type),n=dn(String,i.type);i[0]=e>-1,i[1]=n<0||e<n,(e>-1||Object(r["k"])(i,"default"))&&c.push(t)}}}}const l=[a,c];return i.set(e,l),l}function un(e){return"$"!==e[0]}function ln(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:null===e?"null":""}function hn(e,t){return ln(e)===ln(t)}function dn(e,t){return Object(r["o"])(t)?t.findIndex(t=>hn(t,e)):Object(r["p"])(t)&&hn(t,e)?0:-1}const fn=e=>"_"===e[0]||"$stable"===e,pn=e=>Object(r["o"])(e)?e.map(fr):[fr(e)],gn=(e,t,n)=>{const r=et((...e)=>pn(t(...e)),n);return r._c=!1,r},mn=(e,t,n)=>{const i=e._ctx;for(const s in e){if(fn(s))continue;const n=e[s];if(Object(r["p"])(n))t[s]=gn(s,n,i);else if(null!=n){0;const e=pn(n);t[s]=()=>e}}},vn=(e,t)=>{const n=pn(t);e.slots.default=()=>n},yn=(e,t)=>{if(32&e.vnode.shapeFlag){const n=t._;n?(e.slots=xe(t),Object(r["g"])(t,"_",n)):mn(t,e.slots={})}else e.slots={},t&&vn(e,t);Object(r["g"])(e.slots,nr,1)},bn=(e,t,n)=>{const{vnode:i,slots:s}=e;let o=!0,a=r["b"];if(32&i.shapeFlag){const e=t._;e?n&&1===e?o=!1:(Object(r["h"])(s,t),n||1!==e||delete s._):(o=!t.$stable,mn(t,s)),a=t}else t&&(vn(e,t),a={default:1});if(o)for(const r in s)fn(r)||r in a||delete s[r]};function wn(e,t){const n=Qe;if(null===n)return e;const i=n.proxy,s=e.dirs||(e.dirs=[]);for(let o=0;o<t.length;o++){let[e,n,a,c=r["b"]]=t[o];Object(r["p"])(e)&&(e={mounted:e,updated:e}),e.deep&&Ii(n),s.push({dir:e,instance:i,value:n,oldValue:void 0,arg:a,modifiers:c})}return e}function _n(e,t,n,r){const i=e.dirs,s=t&&t.dirs;for(let o=0;o<i.length;o++){const a=i[o];s&&(a.oldValue=s[o].value);let c=a.dir[r];c&&(S(),zr(c,n,8,[e.el,a,e,t]),k())}}function In(){return{app:null,config:{isNativeTag:r["c"],performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let En=0;function Tn(e,t){return function(n,i=null){null==i||Object(r["v"])(i)||(i=null);const s=In(),o=new Set;let a=!1;const c=s.app={_uid:En++,_component:n,_props:i,_container:null,_context:s,_instance:null,version:Ti,get config(){return s.config},set config(e){0},use(e,...t){return o.has(e)||(e&&Object(r["p"])(e.install)?(o.add(e),e.install(c,...t)):Object(r["p"])(e)&&(o.add(e),e(c,...t))),c},mixin(e){return s.mixins.includes(e)||s.mixins.push(e),c},component(e,t){return t?(s.components[e]=t,c):s.components[e]},directive(e,t){return t?(s.directives[e]=t,c):s.directives[e]},mount(r,o,u){if(!a){const l=or(n,i);return l.appContext=s,o&&t?t(l,r):e(l,r,u),a=!0,c._container=r,r.__vue_app__=c,Vr(l.component)||l.component.proxy}},unmount(){a&&(e(null,c._container),delete c._container.__vue_app__)},provide(e,t){return s.provides[e]=t,c}};return c}}function Sn(e,t,n,i,s=!1){if(Object(r["o"])(e))return void e.forEach((e,o)=>Sn(e,t&&(Object(r["o"])(t)?t[o]:t),n,i,s));if(It(i)&&!s)return;const o=4&i.shapeFlag?Vr(i.component)||i.component.proxy:i.el,a=s?null:o,{i:c,r:u}=e;const l=t&&t.r,h=c.refs===r["b"]?c.refs={}:c.refs,d=c.setupState;if(null!=l&&l!==u&&(Object(r["D"])(l)?(h[l]=null,Object(r["k"])(d,l)&&(d[l]=null)):Le(l)&&(l.value=null)),Object(r["p"])(u))qr(u,c,12,[a,h]);else{const t=Object(r["D"])(u),i=Le(u);if(t||i){const i=()=>{if(e.f){const n=t?h[u]:u.value;s?Object(r["o"])(n)&&Object(r["K"])(n,o):Object(r["o"])(n)?n.includes(o)||n.push(o):t?h[u]=[o]:(u.value=[o],e.k&&(h[e.k]=u.value))}else t?(h[u]=a,Object(r["k"])(d,u)&&(d[u]=a)):Le(u)&&(u.value=a,e.k&&(h[e.k]=a))};a?(i.id=-1,kn(i,n)):i()}else 0}}function On(){}const kn=ct;function An(e){return Cn(e)}function Cn(e,t){On();const n=Object(r["i"])();n.__VUE__=!0;const{insert:i,remove:s,patchProp:o,createElement:a,createText:c,createComment:u,setText:l,setElementText:h,parentNode:d,nextSibling:f,setScopeId:p=r["d"],cloneNode:g,insertStaticContent:m}=e,v=(e,t,n,r=null,i=null,s=null,o=!1,a=null,c=!!t.dynamicChildren)=>{if(e===t)return;e&&!tr(e,t)&&(r=W(e),z(e,i,s,!0),e=null),-2===t.patchFlag&&(c=!1,t.dynamicChildren=null);const{type:u,ref:l,shapeFlag:h}=t;switch(u){case qn:y(e,t,n,r);break;case zn:b(e,t,n,r);break;case Gn:null==e&&w(t,n,r,o);break;case Bn:R(e,t,n,r,i,s,o,a,c);break;default:1&h?T(e,t,n,r,i,s,o,a,c):6&h?P(e,t,n,r,i,s,o,a,c):(64&h||128&h)&&u.process(e,t,n,r,i,s,o,a,c,Y)}null!=l&&i&&Sn(l,e&&e.ref,s,t||e,!t)},y=(e,t,n,r)=>{if(null==e)i(t.el=c(t.children),n,r);else{const n=t.el=e.el;t.children!==e.children&&l(n,t.children)}},b=(e,t,n,r)=>{null==e?i(t.el=u(t.children||""),n,r):t.el=e.el},w=(e,t,n,r)=>{[e.el,e.anchor]=m(e.children,t,n,r)},I=({el:e,anchor:t},n,r)=>{let s;while(e&&e!==t)s=f(e),i(e,n,r),e=s;i(t,n,r)},E=({el:e,anchor:t})=>{let n;while(e&&e!==t)n=f(e),s(e),e=n;s(t)},T=(e,t,n,r,i,s,o,a,c)=>{o=o||"svg"===t.type,null==e?O(t,n,r,i,s,o,a,c):x(e,t,i,s,o,a,c)},O=(e,t,n,s,c,u,l,d)=>{let f,p;const{type:m,props:v,shapeFlag:y,transition:b,patchFlag:w,dirs:_}=e;if(e.el&&void 0!==g&&-1===w)f=e.el=g(e.el);else{if(f=e.el=a(e.type,u,v&&v.is,v),8&y?h(f,e.children):16&y&&C(e.children,f,null,s,c,u&&"foreignObject"!==m,l,d),_&&_n(e,null,s,"created"),v){for(const t in v)"value"===t||Object(r["z"])(t)||o(f,t,null,v[t],u,e.children,s,c,H);"value"in v&&o(f,"value",null,v.value),(p=v.onVnodeBeforeMount)&&vr(p,s,e)}A(f,e,e.scopeId,l,s)}_&&_n(e,null,s,"beforeMount");const I=(!c||c&&!c.pendingBranch)&&b&&!b.persisted;I&&b.beforeEnter(f),i(f,t,n),((p=v&&v.onVnodeMounted)||I||_)&&kn(()=>{p&&vr(p,s,e),I&&b.enter(f),_&&_n(e,null,s,"mounted")},c)},A=(e,t,n,r,i)=>{if(n&&p(e,n),r)for(let s=0;s<r.length;s++)p(e,r[s]);if(i){let n=i.subTree;if(t===n){const t=i.vnode;A(e,t,t.scopeId,t.slotScopeIds,i.parent)}}},C=(e,t,n,r,i,s,o,a,c=0)=>{for(let u=c;u<e.length;u++){const c=e[u]=a?pr(e[u]):fr(e[u]);v(null,c,t,n,r,i,s,o,a)}},x=(e,t,n,i,s,a,c)=>{const u=t.el=e.el;let{patchFlag:l,dynamicChildren:d,dirs:f}=t;l|=16&e.patchFlag;const p=e.props||r["b"],g=t.props||r["b"];let m;n&&xn(n,!1),(m=g.onVnodeBeforeUpdate)&&vr(m,n,t,e),f&&_n(t,e,n,"beforeUpdate"),n&&xn(n,!0);const v=s&&"foreignObject"!==t.type;if(d?N(e.dynamicChildren,d,u,n,i,v,a):c||V(e,t,u,null,n,i,v,a,!1),l>0){if(16&l)D(u,t,p,g,n,i,s);else if(2&l&&p.class!==g.class&&o(u,"class",null,g.class,s),4&l&&o(u,"style",p.style,g.style,s),8&l){const r=t.dynamicProps;for(let t=0;t<r.length;t++){const a=r[t],c=p[a],l=g[a];l===c&&"value"!==a||o(u,a,c,l,s,e.children,n,i,H)}}1&l&&e.children!==t.children&&h(u,t.children)}else c||null!=d||D(u,t,p,g,n,i,s);((m=g.onVnodeUpdated)||f)&&kn(()=>{m&&vr(m,n,t,e),f&&_n(t,e,n,"updated")},i)},N=(e,t,n,r,i,s,o)=>{for(let a=0;a<t.length;a++){const c=e[a],u=t[a],l=c.el&&(c.type===Bn||!tr(c,u)||70&c.shapeFlag)?d(c.el):n;v(c,u,l,null,r,i,s,o,!0)}},D=(e,t,n,i,s,a,c)=>{if(n!==i){for(const u in i){if(Object(r["z"])(u))continue;const l=i[u],h=n[u];l!==h&&"value"!==u&&o(e,u,h,l,c,t.children,s,a,H)}if(n!==r["b"])for(const u in n)Object(r["z"])(u)||u in i||o(e,u,n[u],null,c,t.children,s,a,H);"value"in i&&o(e,"value",n.value,i.value)}},R=(e,t,n,r,s,o,a,u,l)=>{const h=t.el=e?e.el:c(""),d=t.anchor=e?e.anchor:c("");let{patchFlag:f,dynamicChildren:p,slotScopeIds:g}=t;g&&(u=u?u.concat(g):g),null==e?(i(h,n,r),i(d,n,r),C(t.children,n,d,s,o,a,u,l)):f>0&&64&f&&p&&e.dynamicChildren?(N(e.dynamicChildren,p,n,s,o,a,u),(null!=t.key||s&&t===s.subTree)&&Nn(e,t,!0)):V(e,t,n,d,s,o,a,u,l)},P=(e,t,n,r,i,s,o,a,c)=>{t.slotScopeIds=a,null==e?512&t.shapeFlag?i.ctx.activate(t,n,r,o,c):j(t,n,r,i,s,o,c):L(e,t,c)},j=(e,t,n,r,i,s,o)=>{const a=e.component=Tr(e,r,i);if(Et(e)&&(a.ctx.renderer=Y),Rr(a),a.asyncDep){if(i&&i.registerDep(a,M),!e.el){const e=a.subTree=or(zn);b(null,e,t,n)}}else M(a,e,t,n,i,s,o)},L=(e,t,n)=>{const r=t.component=e.component;if(it(e,t,n)){if(r.asyncDep&&!r.asyncResolved)return void F(r,t,n);r.next=t,ui(r.update),r.update()}else t.component=e.component,t.el=e.el,r.vnode=t},M=(e,t,n,i,s,o,a)=>{const c=()=>{if(e.isMounted){let t,{next:n,bu:i,u:c,parent:u,vnode:l}=e,h=n;0,xn(e,!1),n?(n.el=l.el,F(e,n,a)):n=l,i&&Object(r["n"])(i),(t=n.props&&n.props.onVnodeBeforeUpdate)&&vr(t,u,n,l),xn(e,!0);const f=tt(e);0;const p=e.subTree;e.subTree=f,v(p,f,d(p.el),W(p),e,s,o),n.el=f.el,null===h&&ot(e,f.el),c&&kn(c,s),(t=n.props&&n.props.onVnodeUpdated)&&kn(()=>vr(t,u,n,l),s)}else{let a;const{el:c,props:u}=t,{bm:l,m:h,parent:d}=e,f=It(t);if(xn(e,!1),l&&Object(r["n"])(l),!f&&(a=u&&u.onVnodeBeforeMount)&&vr(a,d,t),xn(e,!0),c&&X){const n=()=>{e.subTree=tt(e),X(c,e.subTree,e,s,null)};f?t.type.__asyncLoader().then(()=>!e.isUnmounted&&n()):n()}else{0;const r=e.subTree=tt(e);0,v(null,r,n,i,e,s,o),t.el=r.el}if(h&&kn(h,s),!f&&(a=u&&u.onVnodeMounted)){const e=t;kn(()=>vr(a,d,e),s)}256&t.shapeFlag&&e.a&&kn(e.a,s),e.isMounted=!0,t=n=i=null}},u=e.effect=new _(c,()=>ai(e.update),e.scope),l=e.update=u.run.bind(u);l.id=e.uid,xn(e,!0),l()},F=(e,t,n)=>{t.component=e;const r=e.vnode.props;e.vnode=t,e.next=null,sn(e,t.props,r,n),bn(e,t.children,n),S(),fi(void 0,e.update),k()},V=(e,t,n,r,i,s,o,a,c=!1)=>{const u=e&&e.children,l=e?e.shapeFlag:0,d=t.children,{patchFlag:f,shapeFlag:p}=t;if(f>0){if(128&f)return void B(u,d,n,r,i,s,o,a,c);if(256&f)return void U(u,d,n,r,i,s,o,a,c)}8&p?(16&l&&H(u,i,s),d!==u&&h(n,d)):16&l?16&p?B(u,d,n,r,i,s,o,a,c):H(u,i,s,!0):(8&l&&h(n,""),16&p&&C(d,n,r,i,s,o,a,c))},U=(e,t,n,i,s,o,a,c,u)=>{e=e||r["a"],t=t||r["a"];const l=e.length,h=t.length,d=Math.min(l,h);let f;for(f=0;f<d;f++){const r=t[f]=u?pr(t[f]):fr(t[f]);v(e[f],r,n,null,s,o,a,c,u)}l>h?H(e,s,o,!0,!1,d):C(t,n,i,s,o,a,c,u,d)},B=(e,t,n,i,s,o,a,c,u)=>{let l=0;const h=t.length;let d=e.length-1,f=h-1;while(l<=d&&l<=f){const r=e[l],i=t[l]=u?pr(t[l]):fr(t[l]);if(!tr(r,i))break;v(r,i,n,null,s,o,a,c,u),l++}while(l<=d&&l<=f){const r=e[d],i=t[f]=u?pr(t[f]):fr(t[f]);if(!tr(r,i))break;v(r,i,n,null,s,o,a,c,u),d--,f--}if(l>d){if(l<=f){const e=f+1,r=e<h?t[e].el:i;while(l<=f)v(null,t[l]=u?pr(t[l]):fr(t[l]),n,r,s,o,a,c,u),l++}}else if(l>f)while(l<=d)z(e[l],s,o,!0),l++;else{const p=l,g=l,m=new Map;for(l=g;l<=f;l++){const e=t[l]=u?pr(t[l]):fr(t[l]);null!=e.key&&m.set(e.key,l)}let y,b=0;const w=f-g+1;let _=!1,I=0;const E=new Array(w);for(l=0;l<w;l++)E[l]=0;for(l=p;l<=d;l++){const r=e[l];if(b>=w){z(r,s,o,!0);continue}let i;if(null!=r.key)i=m.get(r.key);else for(y=g;y<=f;y++)if(0===E[y-g]&&tr(r,t[y])){i=y;break}void 0===i?z(r,s,o,!0):(E[i-g]=l+1,i>=I?I=i:_=!0,v(r,t[i],n,null,s,o,a,c,u),b++)}const T=_?Dn(E):r["a"];for(y=T.length-1,l=w-1;l>=0;l--){const e=g+l,r=t[e],d=e+1<h?t[e+1].el:i;0===E[l]?v(null,r,n,d,s,o,a,c,u):_&&(y<0||l!==T[y]?q(r,n,d,2):y--)}}},q=(e,t,n,r,s=null)=>{const{el:o,type:a,transition:c,children:u,shapeFlag:l}=e;if(6&l)return void q(e.component.subTree,t,n,r);if(128&l)return void e.suspense.move(t,n,r);if(64&l)return void a.move(e,t,n,Y);if(a===Bn){i(o,t,n);for(let e=0;e<u.length;e++)q(u[e],t,n,r);return void i(e.anchor,t,n)}if(a===Gn)return void I(e,t,n);const h=2!==r&&1&l&&c;if(h)if(0===r)c.beforeEnter(o),i(o,t,n),kn(()=>c.enter(o),s);else{const{leave:e,delayLeave:r,afterLeave:s}=c,a=()=>i(o,t,n),u=()=>{e(o,()=>{a(),s&&s()})};r?r(o,a,u):u()}else i(o,t,n)},z=(e,t,n,r=!1,i=!1)=>{const{type:s,props:o,ref:a,children:c,dynamicChildren:u,shapeFlag:l,patchFlag:h,dirs:d}=e;if(null!=a&&Sn(a,null,n,e,!0),256&l)return void t.ctx.deactivate(e);const f=1&l&&d,p=!It(e);let g;if(p&&(g=o&&o.onVnodeBeforeUnmount)&&vr(g,t,e),6&l)K(e.component,n,r);else{if(128&l)return void e.suspense.unmount(n,r);f&&_n(e,null,t,"beforeUnmount"),64&l?e.type.remove(e,t,n,i,Y,r):u&&(s!==Bn||h>0&&64&h)?H(u,t,n,!1,!0):(s===Bn&&384&h||!i&&16&l)&&H(c,t,n),r&&G(e)}(p&&(g=o&&o.onVnodeUnmounted)||f)&&kn(()=>{g&&vr(g,t,e),f&&_n(e,null,t,"unmounted")},n)},G=e=>{const{type:t,el:n,anchor:r,transition:i}=e;if(t===Bn)return void $(n,r);if(t===Gn)return void E(e);const o=()=>{s(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(1&e.shapeFlag&&i&&!i.persisted){const{leave:t,delayLeave:r}=i,s=()=>t(n,o);r?r(e.el,o,s):s()}else o()},$=(e,t)=>{let n;while(e!==t)n=f(e),s(e),e=n;s(t)},K=(e,t,n)=>{const{bum:i,scope:s,update:o,subTree:a,um:c}=e;i&&Object(r["n"])(i),s.stop(),o&&(o.active=!1,z(a,e,t,n)),c&&kn(c,t),kn(()=>{e.isUnmounted=!0},t),t&&t.pendingBranch&&!t.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===t.pendingId&&(t.deps--,0===t.deps&&t.resolve())},H=(e,t,n,r=!1,i=!1,s=0)=>{for(let o=s;o<e.length;o++)z(e[o],t,n,r,i)},W=e=>6&e.shapeFlag?W(e.component.subTree):128&e.shapeFlag?e.suspense.next():f(e.anchor||e.el),Q=(e,t,n)=>{null==e?t._vnode&&z(t._vnode,null,null,!0):v(t._vnode||null,e,t,null,null,null,n),pi(),t._vnode=e},Y={p:v,um:z,m:q,r:G,mt:j,mc:C,pc:V,pbc:N,n:W,o:e};let J,X;return t&&([J,X]=t(Y)),{render:Q,hydrate:J,createApp:Tn(Q,J)}}function xn({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Nn(e,t,n=!1){const i=e.children,s=t.children;if(Object(r["o"])(i)&&Object(r["o"])(s))for(let r=0;r<i.length;r++){const e=i[r];let t=s[r];1&t.shapeFlag&&!t.dynamicChildren&&((t.patchFlag<=0||32===t.patchFlag)&&(t=s[r]=pr(s[r]),t.el=e.el),n||Nn(e,t))}}function Dn(e){const t=e.slice(),n=[0];let r,i,s,o,a;const c=e.length;for(r=0;r<c;r++){const c=e[r];if(0!==c){if(i=n[n.length-1],e[i]<c){t[r]=i,n.push(r);continue}s=0,o=n.length-1;while(s<o)a=s+o>>1,e[n[a]]<c?s=a+1:o=a;c<e[n[s]]&&(s>0&&(t[r]=n[s-1]),n[s]=r)}}s=n.length,o=n[s-1];while(s-- >0)n[s]=o,o=t[o];return n}const Rn=e=>e.__isTeleport;const Pn="components",jn="directives";function Ln(e,t){return Vn(Pn,e,!0,t)||e}const Mn=Symbol();function Fn(e){return Vn(jn,e)}function Vn(e,t,n=!0,i=!1){const s=Qe||Sr;if(s){const n=s.type;if(e===Pn){const e=Ur(n);if(e&&(e===t||e===Object(r["e"])(t)||e===Object(r["f"])(Object(r["e"])(t))))return n}const o=Un(s[e]||n[e],t)||Un(s.appContext[e],t);return!o&&i?n:o}}function Un(e,t){return e&&(e[t]||e[Object(r["e"])(t)]||e[Object(r["f"])(Object(r["e"])(t))])}const Bn=Symbol(void 0),qn=Symbol(void 0),zn=Symbol(void 0),Gn=Symbol(void 0),$n=[];let Kn=null;function Hn(e=!1){$n.push(Kn=e?null:[])}function Wn(){$n.pop(),Kn=$n[$n.length-1]||null}let Qn=1;function Yn(e){Qn+=e}function Jn(e){return e.dynamicChildren=Qn>0?Kn||r["a"]:null,Wn(),Qn>0&&Kn&&Kn.push(e),e}function Xn(e,t,n,r,i,s){return Jn(sr(e,t,n,r,i,s,!0))}function Zn(e,t,n,r,i){return Jn(or(e,t,n,r,i,!0))}function er(e){return!!e&&!0===e.__v_isVNode}function tr(e,t){return e.type===t.type&&e.key===t.key}const nr="__vInternal",rr=({key:e})=>null!=e?e:null,ir=({ref:e,ref_key:t,ref_for:n})=>null!=e?Object(r["D"])(e)||Le(e)||Object(r["p"])(e)?{i:Qe,r:e,k:t,f:!!n}:e:null;function sr(e,t=null,n=null,i=0,s=null,o=(e===Bn?0:1),a=!1,c=!1){const u={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&rr(t),ref:t&&ir(t),scopeId:Ye,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null};return c?(gr(u,n),128&o&&e.normalize(u)):n&&(u.shapeFlag|=Object(r["D"])(n)?8:16),Qn>0&&!a&&Kn&&(u.patchFlag>0||6&o)&&32!==u.patchFlag&&Kn.push(u),u}const or=ar;function ar(e,t=null,n=null,i=0,s=null,o=!1){if(e&&e!==Mn||(e=zn),er(e)){const r=ur(e,t,!0);return n&&gr(r,n),r}if(Br(e)&&(e=e.__vccOpts),t){t=cr(t);let{class:e,style:n}=t;e&&!Object(r["D"])(e)&&(t.class=Object(r["I"])(e)),Object(r["v"])(n)&&(Ce(n)&&!Object(r["o"])(n)&&(n=Object(r["h"])({},n)),t.style=Object(r["J"])(n))}const a=Object(r["D"])(e)?1:at(e)?128:Rn(e)?64:Object(r["v"])(e)?4:Object(r["p"])(e)?2:0;return sr(e,t,n,i,s,a,o,!0)}function cr(e){return e?Ce(e)||nr in e?Object(r["h"])({},e):e:null}function ur(e,t,n=!1){const{props:i,ref:s,patchFlag:o,children:a}=e,c=t?mr(i||{},t):i,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&rr(c),ref:t&&t.ref?n&&s?Object(r["o"])(s)?s.concat(ir(t)):[s,ir(t)]:ir(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Bn?-1===o?16:16|o:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&ur(e.ssContent),ssFallback:e.ssFallback&&ur(e.ssFallback),el:e.el,anchor:e.anchor};return u}function lr(e=" ",t=0){return or(qn,null,e,t)}function hr(e,t){const n=or(Gn,null,e);return n.staticCount=t,n}function dr(e="",t=!1){return t?(Hn(),Zn(zn,null,e)):or(zn,null,e)}function fr(e){return null==e||"boolean"===typeof e?or(zn):Object(r["o"])(e)?or(Bn,null,e.slice()):"object"===typeof e?pr(e):or(qn,null,String(e))}function pr(e){return null===e.el||e.memo?e:ur(e)}function gr(e,t){let n=0;const{shapeFlag:i}=e;if(null==t)t=null;else if(Object(r["o"])(t))n=16;else if("object"===typeof t){if(65&i){const n=t.default;return void(n&&(n._c&&(n._d=!1),gr(e,n()),n._c&&(n._d=!0)))}{n=32;const r=t._;r||nr in t?3===r&&Qe&&(1===Qe.slots._?t._=1:(t._=2,e.patchFlag|=1024)):t._ctx=Qe}}else Object(r["p"])(t)?(t={default:t,_ctx:Qe},n=32):(t=String(t),64&i?(n=16,t=[lr(t)]):n=8);e.children=t,e.shapeFlag|=n}function mr(...e){const t={};for(let n=0;n<e.length;n++){const i=e[n];for(const e in i)if("class"===e)t.class!==i.class&&(t.class=Object(r["I"])([t.class,i.class]));else if("style"===e)t.style=Object(r["J"])([t.style,i.style]);else if(Object(r["w"])(e)){const n=t[e],s=i[e];n===s||Object(r["o"])(n)&&n.includes(s)||(t[e]=n?[].concat(n,s):s)}else""!==e&&(t[e]=i[e])}return t}function vr(e,t,n,r=null){zr(e,t,7,[n,r])}function yr(e,t,n,i){let s;const o=n&&n[i];if(Object(r["o"])(e)||Object(r["D"])(e)){s=new Array(e.length);for(let n=0,r=e.length;n<r;n++)s[n]=t(e[n],n,void 0,o&&o[n])}else if("number"===typeof e){0,s=new Array(e);for(let n=0;n<e;n++)s[n]=t(n+1,n,void 0,o&&o[n])}else if(Object(r["v"])(e))if(e[Symbol.iterator])s=Array.from(e,(e,n)=>t(e,n,void 0,o&&o[n]));else{const n=Object.keys(e);s=new Array(n.length);for(let r=0,i=n.length;r<i;r++){const i=n[r];s[r]=t(e[i],i,r,o&&o[r])}}else s=[];return n&&(n[i]=s),s}const br=e=>e?Cr(e)?Vr(e)||e.proxy:br(e.parent):null,wr=Object(r["h"])(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>br(e.parent),$root:e=>br(e.root),$emit:e=>e.emit,$options:e=>Wt(e),$forceUpdate:e=>()=>ai(e.update),$nextTick:e=>si.bind(e.proxy),$watch:e=>wi.bind(e)}),_r={get({_:e},t){const{ctx:n,setupState:i,data:s,props:o,accessCache:a,type:c,appContext:u}=e;let l;if("$"!==t[0]){const c=a[t];if(void 0!==c)switch(c){case 1:return i[t];case 2:return s[t];case 4:return n[t];case 3:return o[t]}else{if(i!==r["b"]&&Object(r["k"])(i,t))return a[t]=1,i[t];if(s!==r["b"]&&Object(r["k"])(s,t))return a[t]=2,s[t];if((l=e.propsOptions[0])&&Object(r["k"])(l,t))return a[t]=3,o[t];if(n!==r["b"]&&Object(r["k"])(n,t))return a[t]=4,n[t];zt&&(a[t]=0)}}const h=wr[t];let d,f;return h?("$attrs"===t&&A(e,"get",t),h(e)):(d=c.__cssModules)&&(d=d[t])?d:n!==r["b"]&&Object(r["k"])(n,t)?(a[t]=4,n[t]):(f=u.config.globalProperties,Object(r["k"])(f,t)?f[t]:void 0)},set({_:e},t,n){const{data:i,setupState:s,ctx:o}=e;if(s!==r["b"]&&Object(r["k"])(s,t))s[t]=n;else if(i!==r["b"]&&Object(r["k"])(i,t))i[t]=n;else if(Object(r["k"])(e.props,t))return!1;return("$"!==t[0]||!(t.slice(1)in e))&&(o[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:i,appContext:s,propsOptions:o}},a){let c;return!!n[a]||e!==r["b"]&&Object(r["k"])(e,a)||t!==r["b"]&&Object(r["k"])(t,a)||(c=o[0])&&Object(r["k"])(c,a)||Object(r["k"])(i,a)||Object(r["k"])(wr,a)||Object(r["k"])(s.config.globalProperties,a)}};const Ir=In();let Er=0;function Tr(e,t,n){const i=e.type,s=(t?t.appContext:e.appContext)||Ir,a={uid:Er++,vnode:e,type:i,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new o(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:cn(i,s),emitsOptions:He(i,s),emit:null,emitted:null,propsDefaults:r["b"],inheritAttrs:i.inheritAttrs,ctx:r["b"],data:r["b"],props:r["b"],attrs:r["b"],slots:r["b"],refs:r["b"],setupState:r["b"],setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=Ke.bind(null,a),e.ce&&e.ce(a),a}let Sr=null;const Or=()=>Sr||Qe,kr=e=>{Sr=e,e.scope.on()},Ar=()=>{Sr&&Sr.scope.off(),Sr=null};function Cr(e){return 4&e.vnode.shapeFlag}let xr,Nr,Dr=!1;function Rr(e,t=!1){Dr=t;const{props:n,children:r}=e.vnode,i=Cr(e);rn(e,n,i,t),yn(e,r);const s=i?Pr(e,t):void 0;return Dr=!1,s}function Pr(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Ne(new Proxy(e.ctx,_r));const{setup:i}=n;if(i){const n=e.setupContext=i.length>1?Fr(e):null;kr(e),S();const s=qr(i,e,0,[e.props,n]);if(k(),Ar(),Object(r["y"])(s)){if(s.then(Ar,Ar),t)return s.then(n=>{jr(e,n,t)}).catch(t=>{Gr(t,e,0)});e.asyncDep=s}else jr(e,s,t)}else Lr(e,t)}function jr(e,t,n){Object(r["p"])(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Object(r["v"])(t)&&(e.setupState=ze(t)),Lr(e,n)}function Lr(e,t,n){const i=e.type;if(!e.render){if(!t&&xr&&!i.render){const t=i.template;if(t){0;const{isCustomElement:n,compilerOptions:s}=e.appContext.config,{delimiters:o,compilerOptions:a}=i,c=Object(r["h"])(Object(r["h"])({isCustomElement:n,delimiters:o},s),a);i.render=xr(t,c)}}e.render=i.render||r["d"],Nr&&Nr(e)}kr(e),S(),Gt(e),k(),Ar()}function Mr(e){return new Proxy(e.attrs,{get(t,n){return A(e,"get","$attrs"),t[n]}})}function Fr(e){const t=t=>{e.exposed=t||{}};let n;return{get attrs(){return n||(n=Mr(e))},slots:e.slots,emit:e.emit,expose:t}}function Vr(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(ze(Ne(e.exposed)),{get(t,n){return n in t?t[n]:n in wr?wr[n](e):void 0}}))}function Ur(e){return Object(r["p"])(e)&&e.displayName||e.name}function Br(e){return Object(r["p"])(e)&&"__vccOpts"in e}function qr(e,t,n,r){let i;try{i=r?e(...r):e()}catch(s){Gr(s,t,n)}return i}function zr(e,t,n,i){if(Object(r["p"])(e)){const s=qr(e,t,n,i);return s&&Object(r["y"])(s)&&s.catch(e=>{Gr(e,t,n)}),s}const s=[];for(let r=0;r<e.length;r++)s.push(zr(e[r],t,n,i));return s}function Gr(e,t,n,r=!0){const i=t?t.vnode:null;if(t){let r=t.parent;const i=t.proxy,s=n;while(r){const t=r.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,i,s))return;r=r.parent}const o=t.appContext.config.errorHandler;if(o)return void qr(o,null,10,[e,i,s])}$r(e,n,i,r)}function $r(e,t,n,r=!0){console.error(e)}let Kr=!1,Hr=!1;const Wr=[];let Qr=0;const Yr=[];let Jr=null,Xr=0;const Zr=[];let ei=null,ti=0;const ni=Promise.resolve();let ri=null,ii=null;function si(e){const t=ri||ni;return e?t.then(this?e.bind(this):e):t}function oi(e){let t=Qr+1,n=Wr.length;while(t<n){const r=t+n>>>1,i=gi(Wr[r]);i<e?t=r+1:n=r}return t}function ai(e){Wr.length&&Wr.includes(e,Kr&&e.allowRecurse?Qr+1:Qr)||e===ii||(null==e.id?Wr.push(e):Wr.splice(oi(e.id),0,e),ci())}function ci(){Kr||Hr||(Hr=!0,ri=ni.then(mi))}function ui(e){const t=Wr.indexOf(e);t>Qr&&Wr.splice(t,1)}function li(e,t,n,i){Object(r["o"])(e)?n.push(...e):t&&t.includes(e,e.allowRecurse?i+1:i)||n.push(e),ci()}function hi(e){li(e,Jr,Yr,Xr)}function di(e){li(e,ei,Zr,ti)}function fi(e,t=null){if(Yr.length){for(ii=t,Jr=[...new Set(Yr)],Yr.length=0,Xr=0;Xr<Jr.length;Xr++)Jr[Xr]();Jr=null,Xr=0,ii=null,fi(e,t)}}function pi(e){if(Zr.length){const e=[...new Set(Zr)];if(Zr.length=0,ei)return void ei.push(...e);for(ei=e,ei.sort((e,t)=>gi(e)-gi(t)),ti=0;ti<ei.length;ti++)ei[ti]();ei=null,ti=0}}const gi=e=>null==e.id?1/0:e.id;function mi(e){Hr=!1,Kr=!0,fi(e),Wr.sort((e,t)=>gi(e)-gi(t));r["d"];try{for(Qr=0;Qr<Wr.length;Qr++){const e=Wr[Qr];e&&!1!==e.active&&qr(e,null,14)}}finally{Qr=0,Wr.length=0,pi(e),Kr=!1,ri=null,(Wr.length||Yr.length||Zr.length)&&mi(e)}}const vi={};function yi(e,t,n){return bi(e,t,n)}function bi(e,t,{immediate:n,deep:i,flush:s,onTrack:o,onTrigger:a}=r["b"]){const c=Sr;let u,l,h=!1,d=!1;if(Le(e)?(u=()=>e.value,h=!!e._shallow):ke(e)?(u=()=>e,i=!0):Object(r["o"])(e)?(d=!0,h=e.some(ke),u=()=>e.map(e=>Le(e)?e.value:ke(e)?Ii(e):Object(r["p"])(e)?qr(e,c,2):void 0)):u=Object(r["p"])(e)?t?()=>qr(e,c,2):()=>{if(!c||!c.isUnmounted)return l&&l(),zr(e,c,3,[f])}:r["d"],t&&i){const e=u;u=()=>Ii(e())}let f=e=>{l=v.onStop=()=>{qr(e,c,4)}};if(Dr)return f=r["d"],t?n&&zr(t,c,3,[u(),d?[]:void 0,f]):u(),r["d"];let p=d?[]:vi;const g=()=>{if(v.active)if(t){const e=v.run();(i||h||(d?e.some((e,t)=>Object(r["j"])(e,p[t])):Object(r["j"])(e,p)))&&(l&&l(),zr(t,c,3,[e,p===vi?void 0:p,f]),p=e)}else v.run()};let m;g.allowRecurse=!!t,m="sync"===s?g:"post"===s?()=>kn(g,c&&c.suspense):()=>{!c||c.isMounted?hi(g):g()};const v=new _(u,m);return t?n?g():p=v.run():"post"===s?kn(v.run.bind(v),c&&c.suspense):v.run(),()=>{v.stop(),c&&c.scope&&Object(r["K"])(c.scope.effects,v)}}function wi(e,t,n){const i=this.proxy,s=Object(r["D"])(e)?e.includes(".")?_i(i,e):()=>i[e]:e.bind(i,i);let o;Object(r["p"])(t)?o=t:(o=t.handler,n=t);const a=Sr;kr(this);const c=bi(s,o.bind(i),n);return a?kr(a):Ar(),c}function _i(e,t){const n=t.split(".");return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}function Ii(e,t){if(!Object(r["v"])(e)||e["__v_skip"])return e;if(t=t||new Set,t.has(e))return e;if(t.add(e),Le(e))Ii(e.value,t);else if(Object(r["o"])(e))for(let n=0;n<e.length;n++)Ii(e[n],t);else if(Object(r["B"])(e)||Object(r["t"])(e))e.forEach(e=>{Ii(e,t)});else if(Object(r["x"])(e))for(const n in e)Ii(e[n],t);return e}function Ei(e,t,n){const i=arguments.length;return 2===i?Object(r["v"])(t)&&!Object(r["o"])(t)?er(t)?or(e,null,[t]):or(e,t):or(e,null,t):(i>3?n=Array.prototype.slice.call(arguments,2):3===i&&er(n)&&(n=[n]),or(e,t,n))}Symbol("");const Ti="3.2.26",Si="http://www.w3.org/2000/svg",Oi="undefined"!==typeof document?document:null,ki=new Map,Ai={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i=t?Oi.createElementNS(Si,e):Oi.createElement(e,n?{is:n}:void 0);return"select"===e&&r&&null!=r.multiple&&i.setAttribute("multiple",r.multiple),i},createText:e=>Oi.createTextNode(e),createComment:e=>Oi.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Oi.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,r){const i=n?n.previousSibling:t.lastChild;let s=ki.get(e);if(!s){const t=Oi.createElement("template");if(t.innerHTML=r?`<svg>${e}</svg>`:e,s=t.content,r){const e=s.firstChild;while(e.firstChild)s.appendChild(e.firstChild);s.removeChild(e)}ki.set(e,s)}return t.insertBefore(s.cloneNode(!0),n),[i?i.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function Ci(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),null==t?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function xi(e,t,n){const i=e.style,s=Object(r["D"])(n);if(n&&!s){for(const e in n)Di(i,e,n[e]);if(t&&!Object(r["D"])(t))for(const e in t)null==n[e]&&Di(i,e,"")}else{const r=i.display;s?t!==n&&(i.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(i.display=r)}}const Ni=/\s*!important$/;function Di(e,t,n){if(Object(r["o"])(n))n.forEach(n=>Di(e,t,n));else if(t.startsWith("--"))e.setProperty(t,n);else{const i=ji(e,t);Ni.test(n)?e.setProperty(Object(r["l"])(i),n.replace(Ni,""),"important"):e[i]=n}}const Ri=["Webkit","Moz","ms"],Pi={};function ji(e,t){const n=Pi[t];if(n)return n;let i=Object(r["e"])(t);if("filter"!==i&&i in e)return Pi[t]=i;i=Object(r["f"])(i);for(let r=0;r<Ri.length;r++){const n=Ri[r]+i;if(n in e)return Pi[t]=n}return t}const Li="http://www.w3.org/1999/xlink";function Mi(e,t,n,i,s){if(i&&t.startsWith("xlink:"))null==n?e.removeAttributeNS(Li,t.slice(6,t.length)):e.setAttributeNS(Li,t,n);else{const i=Object(r["C"])(t);null==n||i&&!Object(r["m"])(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function Fi(e,t,n,i,s,o,a){if("innerHTML"===t||"textContent"===t)return i&&a(i,s,o),void(e[t]=null==n?"":n);if("value"===t&&"PROGRESS"!==e.tagName&&!e.tagName.includes("-")){e._value=n;const r=null==n?"":n;return e.value===r&&"OPTION"!==e.tagName||(e.value=r),void(null==n&&e.removeAttribute(t))}if(""===n||null==n){const i=typeof e[t];if("boolean"===i)return void(e[t]=Object(r["m"])(n));if(null==n&&"string"===i)return e[t]="",void e.removeAttribute(t);if("number"===i){try{e[t]=0}catch(c){}return void e.removeAttribute(t)}}try{e[t]=n}catch(u){0}}let Vi=Date.now,Ui=!1;if("undefined"!==typeof window){Vi()>document.createEvent("Event").timeStamp&&(Vi=()=>performance.now());const e=navigator.userAgent.match(/firefox\/(\d+)/i);Ui=!!(e&&Number(e[1])<=53)}let Bi=0;const qi=Promise.resolve(),zi=()=>{Bi=0},Gi=()=>Bi||(qi.then(zi),Bi=Vi());function $i(e,t,n,r){e.addEventListener(t,n,r)}function Ki(e,t,n,r){e.removeEventListener(t,n,r)}function Hi(e,t,n,r,i=null){const s=e._vei||(e._vei={}),o=s[t];if(r&&o)o.value=r;else{const[n,a]=Qi(t);if(r){const o=s[t]=Yi(r,i);$i(e,n,o,a)}else o&&(Ki(e,n,o,a),s[t]=void 0)}}const Wi=/(?:Once|Passive|Capture)$/;function Qi(e){let t;if(Wi.test(e)){let n;t={};while(n=e.match(Wi))e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[Object(r["l"])(e.slice(2)),t]}function Yi(e,t){const n=e=>{const r=e.timeStamp||Vi();(Ui||r>=n.attached-1)&&zr(Ji(e,n.value),t,5,[e])};return n.value=e,n.attached=Gi(),n}function Ji(e,t){if(Object(r["o"])(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(e=>t=>!t._stopped&&e(t))}return t}const Xi=/^on[a-z]/,Zi=(e,t,n,i,s=!1,o,a,c,u)=>{"class"===t?Ci(e,i,s):"style"===t?xi(e,n,i):Object(r["w"])(t)?Object(r["u"])(t)||Hi(e,t,n,i,a):("."===t[0]?(t=t.slice(1),1):"^"===t[0]?(t=t.slice(1),0):es(e,t,i,s))?Fi(e,t,i,o,a,c,u):("true-value"===t?e._trueValue=i:"false-value"===t&&(e._falseValue=i),Mi(e,t,i,s))};function es(e,t,n,i){return i?"innerHTML"===t||"textContent"===t||!!(t in e&&Xi.test(t)&&Object(r["p"])(n)):"spellcheck"!==t&&"draggable"!==t&&("form"!==t&&(("list"!==t||"INPUT"!==e.tagName)&&(("type"!==t||"TEXTAREA"!==e.tagName)&&((!Xi.test(t)||!Object(r["D"])(n))&&t in e))))}"undefined"!==typeof HTMLElement&&HTMLElement;const ts="transition",ns="animation",rs=(e,{slots:t})=>Ei(pt,as(e),t);rs.displayName="Transition";const is={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},ss=(rs.props=Object(r["h"])({},pt.props,is),(e,t=[])=>{Object(r["o"])(e)?e.forEach(e=>e(...t)):e&&e(...t)}),os=e=>!!e&&(Object(r["o"])(e)?e.some(e=>e.length>1):e.length>1);function as(e){const t={};for(const r in e)r in is||(t[r]=e[r]);if(!1===e.css)return t;const{name:n="v",type:i,duration:s,enterFromClass:o=n+"-enter-from",enterActiveClass:a=n+"-enter-active",enterToClass:c=n+"-enter-to",appearFromClass:u=o,appearActiveClass:l=a,appearToClass:h=c,leaveFromClass:d=n+"-leave-from",leaveActiveClass:f=n+"-leave-active",leaveToClass:p=n+"-leave-to"}=e,g=cs(s),m=g&&g[0],v=g&&g[1],{onBeforeEnter:y,onEnter:b,onEnterCancelled:w,onLeave:_,onLeaveCancelled:I,onBeforeAppear:E=y,onAppear:T=b,onAppearCancelled:S=w}=t,O=(e,t,n)=>{hs(e,t?h:c),hs(e,t?l:a),n&&n()},k=(e,t)=>{hs(e,p),hs(e,f),t&&t()},A=e=>(t,n)=>{const r=e?T:b,s=()=>O(t,e,n);ss(r,[t,s]),ds(()=>{hs(t,e?u:o),ls(t,e?h:c),os(r)||ps(t,i,m,s)})};return Object(r["h"])(t,{onBeforeEnter(e){ss(y,[e]),ls(e,o),ls(e,a)},onBeforeAppear(e){ss(E,[e]),ls(e,u),ls(e,l)},onEnter:A(!1),onAppear:A(!0),onLeave(e,t){const n=()=>k(e,t);ls(e,d),ys(),ls(e,f),ds(()=>{hs(e,d),ls(e,p),os(_)||ps(e,i,v,n)}),ss(_,[e,n])},onEnterCancelled(e){O(e,!1),ss(w,[e])},onAppearCancelled(e){O(e,!0),ss(S,[e])},onLeaveCancelled(e){k(e),ss(I,[e])}})}function cs(e){if(null==e)return null;if(Object(r["v"])(e))return[us(e.enter),us(e.leave)];{const t=us(e);return[t,t]}}function us(e){const t=Object(r["N"])(e);return t}function ls(e,t){t.split(/\s+/).forEach(t=>t&&e.classList.add(t)),(e._vtc||(e._vtc=new Set)).add(t)}function hs(e,t){t.split(/\s+/).forEach(t=>t&&e.classList.remove(t));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function ds(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let fs=0;function ps(e,t,n,r){const i=e._endId=++fs,s=()=>{i===e._endId&&r()};if(n)return setTimeout(s,n);const{type:o,timeout:a,propCount:c}=gs(e,t);if(!o)return r();const u=o+"end";let l=0;const h=()=>{e.removeEventListener(u,d),s()},d=t=>{t.target===e&&++l>=c&&h()};setTimeout(()=>{l<c&&h()},a+1),e.addEventListener(u,d)}function gs(e,t){const n=window.getComputedStyle(e),r=e=>(n[e]||"").split(", "),i=r(ts+"Delay"),s=r(ts+"Duration"),o=ms(i,s),a=r(ns+"Delay"),c=r(ns+"Duration"),u=ms(a,c);let l=null,h=0,d=0;t===ts?o>0&&(l=ts,h=o,d=s.length):t===ns?u>0&&(l=ns,h=u,d=c.length):(h=Math.max(o,u),l=h>0?o>u?ts:ns:null,d=l?l===ts?s.length:c.length:0);const f=l===ts&&/\b(transform|all)(,|$)/.test(n[ts+"Property"]);return{type:l,timeout:h,propCount:d,hasTransform:f}}function ms(e,t){while(e.length<t.length)e=e.concat(e);return Math.max(...t.map((t,n)=>vs(t)+vs(e[n])))}function vs(e){return 1e3*Number(e.slice(0,-1).replace(",","."))}function ys(){return document.body.offsetHeight}new WeakMap,new WeakMap;const bs=e=>{const t=e.props["onUpdate:modelValue"];return Object(r["o"])(t)?e=>Object(r["n"])(t,e):t};function ws(e){e.target.composing=!0}function _s(e){const t=e.target;t.composing&&(t.composing=!1,Is(t,"input"))}function Is(e,t){const n=document.createEvent("HTMLEvents");n.initEvent(t,!0,!0),e.dispatchEvent(n)}const Es={created(e,{modifiers:{lazy:t,trim:n,number:i}},s){e._assign=bs(s);const o=i||s.props&&"number"===s.props.type;$i(e,t?"change":"input",t=>{if(t.target.composing)return;let i=e.value;n?i=i.trim():o&&(i=Object(r["N"])(i)),e._assign(i)}),n&&$i(e,"change",()=>{e.value=e.value.trim()}),t||($i(e,"compositionstart",ws),$i(e,"compositionend",_s),$i(e,"change",_s))},mounted(e,{value:t}){e.value=null==t?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:i,number:s}},o){if(e._assign=bs(o),e.composing)return;if(document.activeElement===e){if(n)return;if(i&&e.value.trim()===t)return;if((s||"number"===e.type)&&Object(r["N"])(e.value)===t)return}const a=null==t?"":t;e.value!==a&&(e.value=a)}};const Ts=Object(r["h"])({patchProp:Zi},Ai);let Ss;function Os(){return Ss||(Ss=An(Ts))}const ks=(...e)=>{const t=Os().createApp(...e);const{mount:n}=t;return t.mount=e=>{const i=As(e);if(!i)return;const s=t._component;Object(r["p"])(s)||s.render||s.template||(s.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},t};function As(e){if(Object(r["D"])(e)){const t=document.querySelector(e);return t}return e}},"7b0b":function(e,t,n){var r=n("da84"),i=n("1d80"),s=r.Object;e.exports=function(e){return s(i(e))}},"7c73":function(e,t,n){var r,i=n("825a"),s=n("37e8"),o=n("7839"),a=n("d012"),c=n("1be4"),u=n("cc12"),l=n("f772"),h=">",d="<",f="prototype",p="script",g=l("IE_PROTO"),m=function(){},v=function(e){return d+p+h+e+d+"/"+p+h},y=function(e){e.write(v("")),e.close();var t=e.parentWindow.Object;return e=null,t},b=function(){var e,t=u("iframe"),n="java"+p+":";return t.style.display="none",c.appendChild(t),t.src=String(n),e=t.contentWindow.document,e.open(),e.write(v("document.F=Object")),e.close(),e.F},w=function(){try{r=new ActiveXObject("htmlfile")}catch(t){}w="undefined"!=typeof document?document.domain&&r?y(r):b():y(r);var e=o.length;while(e--)delete w[f][o[e]];return w()};a[g]=!0,e.exports=Object.create||function(e,t){var n;return null!==e?(m[f]=i(e),n=new m,m[f]=null,n[g]=e):n=w(),void 0===t?n:s(n,t)}},"7dd0":function(e,t,n){"use strict";var r=n("23e7"),i=n("c65b"),s=n("c430"),o=n("5e77"),a=n("1626"),c=n("9ed3"),u=n("e163"),l=n("d2bb"),h=n("d44e"),d=n("9112"),f=n("6eeb"),p=n("b622"),g=n("3f8c"),m=n("ae93"),v=o.PROPER,y=o.CONFIGURABLE,b=m.IteratorPrototype,w=m.BUGGY_SAFARI_ITERATORS,_=p("iterator"),I="keys",E="values",T="entries",S=function(){return this};e.exports=function(e,t,n,o,p,m,O){c(n,t,o);var k,A,C,x=function(e){if(e===p&&j)return j;if(!w&&e in R)return R[e];switch(e){case I:return function(){return new n(this,e)};case E:return function(){return new n(this,e)};case T:return function(){return new n(this,e)}}return function(){return new n(this)}},N=t+" Iterator",D=!1,R=e.prototype,P=R[_]||R["@@iterator"]||p&&R[p],j=!w&&P||x(p),L="Array"==t&&R.entries||P;if(L&&(k=u(L.call(new e)),k!==Object.prototype&&k.next&&(s||u(k)===b||(l?l(k,b):a(k[_])||f(k,_,S)),h(k,N,!0,!0),s&&(g[N]=S))),v&&p==E&&P&&P.name!==E&&(!s&&y?d(R,"name",E):(D=!0,j=function(){return i(P,this)})),p)if(A={values:x(E),keys:m?j:x(I),entries:x(T)},O)for(C in A)(w||D||!(C in R))&&f(R,C,A[C]);else r({target:t,proto:!0,forced:w||D},A);return s&&!O||R[_]===j||f(R,_,j,{name:p}),g[t]=j,A}},"7ded":function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));var r=n("1fd5"),i=n("22e5"),s=n("589b"),o=n("e691");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class a{constructor(e,t){this._delegate=e,this.firebase=t,Object(s["_addComponent"])(e,new i["a"]("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Object(s["deleteApp"])(this._delegate)))}_getService(e,t=s["_DEFAULT_ENTRY_NAME"]){var n;this._delegate.checkDestroyed();const r=this._delegate.container.getProvider(e);return r.isInitialized()||"EXPLICIT"!==(null===(n=r.getComponent())||void 0===n?void 0:n.instantiationMode)||r.initialize(),r.getImmediate({identifier:t})}_removeServiceInstance(e,t=s["_DEFAULT_ENTRY_NAME"]){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){Object(s["_addComponent"])(this._delegate,e)}_addOrOverwriteComponent(e){Object(s["_addOrOverwriteComponent"])(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},u=new r["b"]("app-compat","Firebase",c);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function l(e){const t={},n={__esModule:!0,initializeApp:a,app:o,registerVersion:s["registerVersion"],setLogLevel:s["setLogLevel"],onLog:s["onLog"],apps:null,SDK_VERSION:s["SDK_VERSION"],INTERNAL:{registerComponent:l,removeApp:i,useAsService:h,modularAPIs:s}};function i(e){delete t[e]}function o(e){if(e=e||s["_DEFAULT_ENTRY_NAME"],!Object(r["f"])(t,e))throw u.create("no-app",{appName:e});return t[e]}function a(i,o={}){const a=s["initializeApp"](i,o);if(Object(r["f"])(t,a.name))return t[a.name];const c=new e(a,n);return t[a.name]=c,c}function c(){return Object.keys(t).map(e=>t[e])}function l(t){const i=t.name,a=i.replace("-compat","");if(s["_registerComponent"](t)&&"PUBLIC"===t.type){const s=(e=o())=>{if("function"!==typeof e[a])throw u.create("invalid-app-argument",{appName:i});return e[a]()};void 0!==t.serviceProps&&Object(r["j"])(s,t.serviceProps),n[a]=s,e.prototype[a]=function(...e){const n=this._getService.bind(this,i);return n.apply(this,t.multipleInstances?e:[])}}return"PUBLIC"===t.type?n[a]:null}function h(e,t){if("serverAuth"===t)return null;const n=t;return n}return n["default"]=n,Object.defineProperty(n,"apps",{get:c}),o["App"]=e,n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h(){const e=l(a);function t(t){Object(r["j"])(e,t)}return e.INTERNAL=Object.assign(Object.assign({},e.INTERNAL),{createFirebaseNamespace:h,extendNamespace:t,createSubscribe:r["h"],ErrorFactory:r["b"],deepExtend:r["j"]}),e}const d=h(),f=new o["b"]("@firebase/app-compat"),p="@firebase/app-compat",g="0.2.13";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function m(e){Object(s["registerVersion"])(p,g,e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(Object(r["r"])()&&void 0!==self.firebase){f.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");const e=self.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&f.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")}const v=d;m()},"7f9a":function(e,t,n){var r=n("da84"),i=n("1626"),s=n("8925"),o=r.WeakMap;e.exports=i(o)&&/native code/.test(s(o))},"825a":function(e,t,n){var r=n("da84"),i=n("861d"),s=r.String,o=r.TypeError;e.exports=function(e){if(i(e))return e;throw o(s(e)+" is not an object")}},"83ab":function(e,t,n){var r=n("d039");e.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},8418:function(e,t,n){"use strict";var r=n("a04b"),i=n("9bf2"),s=n("5c6c");e.exports=function(e,t,n){var o=r(t);o in e?i.f(e,o,s(0,n)):e[o]=n}},"861d":function(e,t,n){var r=n("1626");e.exports=function(e){return"object"==typeof e?null!==e:r(e)}},8925:function(e,t,n){var r=n("e330"),i=n("1626"),s=n("c6cd"),o=r(Function.toString);i(s.inspectSource)||(s.inspectSource=function(e){return o(e)}),e.exports=s.inspectSource},"90e3":function(e,t,n){var r=n("e330"),i=0,s=Math.random(),o=r(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+o(++i+s,36)}},9112:function(e,t,n){var r=n("83ab"),i=n("9bf2"),s=n("5c6c");e.exports=r?function(e,t,n){return i.f(e,t,s(1,n))}:function(e,t,n){return e[t]=n,e}},9263:function(e,t,n){"use strict";var r=n("c65b"),i=n("e330"),s=n("577e"),o=n("ad6d"),a=n("9f7f"),c=n("5692"),u=n("7c73"),l=n("69f3").get,h=n("fce3"),d=n("107c"),f=c("native-string-replace",String.prototype.replace),p=RegExp.prototype.exec,g=p,m=i("".charAt),v=i("".indexOf),y=i("".replace),b=i("".slice),w=function(){var e=/a/,t=/b*/g;return r(p,e,"a"),r(p,t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),_=a.BROKEN_CARET,I=void 0!==/()??/.exec("")[1],E=w||I||_||h||d;E&&(g=function(e){var t,n,i,a,c,h,d,E=this,T=l(E),S=s(e),O=T.raw;if(O)return O.lastIndex=E.lastIndex,t=r(g,O,S),E.lastIndex=O.lastIndex,t;var k=T.groups,A=_&&E.sticky,C=r(o,E),x=E.source,N=0,D=S;if(A&&(C=y(C,"y",""),-1===v(C,"g")&&(C+="g"),D=b(S,E.lastIndex),E.lastIndex>0&&(!E.multiline||E.multiline&&"\n"!==m(S,E.lastIndex-1))&&(x="(?: "+x+")",D=" "+D,N++),n=new RegExp("^(?:"+x+")",C)),I&&(n=new RegExp("^"+x+"$(?!\\s)",C)),w&&(i=E.lastIndex),a=r(p,A?n:E,D),A?a?(a.input=b(a.input,N),a[0]=b(a[0],N),a.index=E.lastIndex,E.lastIndex+=a[0].length):E.lastIndex=0:w&&a&&(E.lastIndex=E.global?a.index+a[0].length:i),I&&a&&a.length>1&&r(f,a[0],n,(function(){for(c=1;c<arguments.length-2;c++)void 0===arguments[c]&&(a[c]=void 0)})),a&&k)for(a.groups=h=u(null),c=0;c<k.length;c++)d=k[c],h[d[0]]=a[d[1]];return a}),e.exports=g},"94ca":function(e,t,n){var r=n("d039"),i=n("1626"),s=/#|\.prototype\./,o=function(e,t){var n=c[a(e)];return n==l||n!=u&&(i(t)?r(t):!!t)},a=o.normalize=function(e){return String(e).replace(s,".").toLowerCase()},c=o.data={},u=o.NATIVE="N",l=o.POLYFILL="P";e.exports=o},"96cf":function(e,t,n){var r=function(e){"use strict";var t,n=Object.prototype,r=n.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},s=i.iterator||"@@iterator",o=i.asyncIterator||"@@asyncIterator",a=i.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(D){c=function(e,t,n){return e[t]=n}}function u(e,t,n,r){var i=t&&t.prototype instanceof m?t:m,s=Object.create(i.prototype),o=new C(r||[]);return s._invoke=S(e,n,o),s}function l(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(D){return{type:"throw",arg:D}}}e.wrap=u;var h="suspendedStart",d="suspendedYield",f="executing",p="completed",g={};function m(){}function v(){}function y(){}var b={};c(b,s,(function(){return this}));var w=Object.getPrototypeOf,_=w&&w(w(x([])));_&&_!==n&&r.call(_,s)&&(b=_);var I=y.prototype=m.prototype=Object.create(b);function E(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function T(e,t){function n(i,s,o,a){var c=l(e[i],e,s);if("throw"!==c.type){var u=c.arg,h=u.value;return h&&"object"===typeof h&&r.call(h,"__await")?t.resolve(h.__await).then((function(e){n("next",e,o,a)}),(function(e){n("throw",e,o,a)})):t.resolve(h).then((function(e){u.value=e,o(u)}),(function(e){return n("throw",e,o,a)}))}a(c.arg)}var i;function s(e,r){function s(){return new t((function(t,i){n(e,r,t,i)}))}return i=i?i.then(s,s):s()}this._invoke=s}function S(e,t,n){var r=h;return function(i,s){if(r===f)throw new Error("Generator is already running");if(r===p){if("throw"===i)throw s;return N()}n.method=i,n.arg=s;while(1){var o=n.delegate;if(o){var a=O(o,n);if(a){if(a===g)continue;return a}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===h)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=f;var c=l(e,t,n);if("normal"===c.type){if(r=n.done?p:d,c.arg===g)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=p,n.method="throw",n.arg=c.arg)}}}function O(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator["return"]&&(n.method="return",n.arg=t,O(e,n),"throw"===n.method))return g;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var i=l(r,e.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,g;var s=i.arg;return s?s.done?(n[e.resultName]=s.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,g):s:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,g)}function k(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function A(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function C(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(k,this),this.reset(!0)}function x(e){if(e){var n=e[s];if(n)return n.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var i=-1,o=function n(){while(++i<e.length)if(r.call(e,i))return n.value=e[i],n.done=!1,n;return n.value=t,n.done=!0,n};return o.next=o}}return{next:N}}function N(){return{value:t,done:!0}}return v.prototype=y,c(I,"constructor",y),c(y,"constructor",v),v.displayName=c(y,a,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"===typeof e&&e.constructor;return!!t&&(t===v||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,c(e,a,"GeneratorFunction")),e.prototype=Object.create(I),e},e.awrap=function(e){return{__await:e}},E(T.prototype),c(T.prototype,o,(function(){return this})),e.AsyncIterator=T,e.async=function(t,n,r,i,s){void 0===s&&(s=Promise);var o=new T(u(t,n,r,i),s);return e.isGeneratorFunction(n)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},E(I),c(I,a,"Generator"),c(I,s,(function(){return this})),c(I,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){while(t.length){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=x,C.prototype={constructor:C,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(A),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0],t=e.completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function i(r,i){return a.type="throw",a.arg=e,n.next=r,i&&(n.method="next",n.arg=t),!!i}for(var s=this.tryEntries.length-1;s>=0;--s){var o=this.tryEntries[s],a=o.completion;if("root"===o.tryLoc)return i("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),u=r.call(o,"finallyLoc");if(c&&u){if(this.prev<o.catchLoc)return i(o.catchLoc,!0);if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return i(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return i(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var s=i;break}}s&&("break"===e||"continue"===e)&&s.tryLoc<=t&&t<=s.finallyLoc&&(s=null);var o=s?s.completion:{};return o.type=e,o.arg=t,s?(this.method="next",this.next=s.finallyLoc,g):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),A(n),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;A(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:x(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),g}},e}(e.exports);try{regeneratorRuntime=r}catch(i){"object"===typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}},"9a1f":function(e,t,n){var r=n("da84"),i=n("c65b"),s=n("59ed"),o=n("825a"),a=n("0d51"),c=n("35a1"),u=r.TypeError;e.exports=function(e,t){var n=arguments.length<2?c(e):t;if(s(n))return o(i(n,e));throw u(a(e)+" is not iterable")}},"9bdd":function(e,t,n){var r=n("825a"),i=n("2a62");e.exports=function(e,t,n,s){try{return s?t(r(n)[0],n[1]):t(n)}catch(o){i(e,"throw",o)}}},"9bf2":function(e,t,n){var r=n("da84"),i=n("83ab"),s=n("0cfb"),o=n("825a"),a=n("a04b"),c=r.TypeError,u=Object.defineProperty;t.f=i?u:function(e,t,n){if(o(e),t=a(t),o(n),s)try{return u(e,t,n)}catch(r){}if("get"in n||"set"in n)throw c("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},"9c44":function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return jr})),n.d(t,"b",(function(){return Mr})),n.d(t,"c",(function(){return Lr})),n.d(t,"d",(function(){return Vr})),n.d(t,"e",(function(){return zr})),n.d(t,"f",(function(){return qr})),n.d(t,"g",(function(){return Fr})),n.d(t,"h",(function(){return Ur})),n.d(t,"i",(function(){return Br})),n.d(t,"j",(function(){return Rr})),n.d(t,"k",(function(){return Pr}));var r,i="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof e?e:"undefined"!==typeof self?self:{},s={},o=o||{},a=i||self;function c(e){var t=typeof e;return t="object"!=t?t:e?Array.isArray(e)?"array":t:"null","array"==t||"object"==t&&"number"==typeof e.length}function u(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function l(e){return Object.prototype.hasOwnProperty.call(e,h)&&e[h]||(e[h]=++d)}var h="closure_uid_"+(1e9*Math.random()>>>0),d=0;function f(e,t,n){return e.call.apply(e.bind,arguments)}function p(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function g(e,t,n){return g=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?f:p,g.apply(null,arguments)}function m(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function v(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[n].apply(e,i)}}function y(){this.s=this.s,this.o=this.o}var b=0;y.prototype.s=!1,y.prototype.sa=function(){this.s||(this.s=!0,this.N(),0==b)||l(this)},y.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const w=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"===typeof e)return"string"!==typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function _(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function I(e,t){for(let n=1;n<arguments.length;n++){const t=arguments[n];if(c(t)){const n=e.length||0,r=t.length||0;e.length=n+r;for(let i=0;i<r;i++)e[n+i]=t[i]}else e.push(t)}}function E(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}E.prototype.h=function(){this.defaultPrevented=!0};var T=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{a.addEventListener("test",()=>{},t),a.removeEventListener("test",()=>{},t)}catch(n){}return e}();function S(e){return/^[\s\xa0]*$/.test(e)}function O(){var e=a.navigator;return e&&(e=e.userAgent)?e:""}function k(e){return-1!=O().indexOf(e)}function A(e){return A[" "](e),e}function C(e,t){var n=mr;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}A[" "]=function(){};var x,N,D=k("Opera"),R=k("Trident")||k("MSIE"),P=k("Edge"),j=P||R,L=k("Gecko")&&!(-1!=O().toLowerCase().indexOf("webkit")&&!k("Edge"))&&!(k("Trident")||k("MSIE"))&&!k("Edge"),M=-1!=O().toLowerCase().indexOf("webkit")&&!k("Edge");function F(){var e=a.document;return e?e.documentMode:void 0}e:{var V="",U=function(){var e=O();return L?/rv:([^\);]+)(\)|;)/.exec(e):P?/Edge\/([\d\.]+)/.exec(e):R?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e):M?/WebKit\/(\S+)/.exec(e):D?/(?:Version)[ \/]?(\S+)/.exec(e):void 0}();if(U&&(V=U?U[1]:""),R){var B=F();if(null!=B&&B>parseFloat(V)){x=String(B);break e}}x=V}if(a.document&&R){var q=F();N=q||(parseInt(x,10)||void 0)}else N=void 0;var z=N;function G(e,t){if(E.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(L){e:{try{A(t.nodeName);var i=!0;break e}catch(s){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"===typeof e.pointerType?e.pointerType:$[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&G.$.h.call(this)}}v(G,E);var $={2:"touch",3:"pen",4:"mouse"};G.prototype.h=function(){G.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var K="closure_listenable_"+(1e6*Math.random()|0),H=0;function W(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.la=i,this.key=++H,this.fa=this.ia=!1}function Q(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function Y(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function J(e,t){for(const n in e)t.call(void 0,e[n],n,e)}function X(e){const t={};for(const n in e)t[n]=e[n];return t}const Z="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ee(e,t){let n,r;for(let i=1;i<arguments.length;i++){for(n in r=arguments[i],r)e[n]=r[n];for(let t=0;t<Z.length;t++)n=Z[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function te(e){this.src=e,this.g={},this.h=0}function ne(e,t){var n=t.type;if(n in e.g){var r,i=e.g[n],s=w(i,t);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(Q(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function re(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.fa&&s.listener==t&&s.capture==!!n&&s.la==r)return i}return-1}te.prototype.add=function(e,t,n,r,i){var s=e.toString();e=this.g[s],e||(e=this.g[s]=[],this.h++);var o=re(e,t,r,i);return-1<o?(t=e[o],n||(t.ia=!1)):(t=new W(t,this.src,s,!!r,i),t.ia=n,e.push(t)),t};var ie="closure_lm_"+(1e6*Math.random()|0),se={};function oe(e,t,n,r,i){if(r&&r.once)return ue(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)oe(e,t[s],n,r,i);return null}return n=me(n),e&&e[K]?e.O(t,n,u(r)?!!r.capture:!!r,i):ae(e,t,n,!1,r,i)}function ae(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=u(i)?!!i.capture:!!i,a=pe(e);if(a||(e[ie]=a=new te(e)),n=a.add(t,n,r,o,s),n.proxy)return n;if(r=ce(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)T||(i=o),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(de(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}function ce(){function e(n){return t.call(e.src,e.listener,n)}const t=fe;return e}function ue(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)ue(e,t[s],n,r,i);return null}return n=me(n),e&&e[K]?e.P(t,n,u(r)?!!r.capture:!!r,i):ae(e,t,n,!0,r,i)}function le(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)le(e,t[s],n,r,i);else r=u(r)?!!r.capture:!!r,n=me(n),e&&e[K]?(e=e.i,t=String(t).toString(),t in e.g&&(s=e.g[t],n=re(s,n,r,i),-1<n&&(Q(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete e.g[t],e.h--)))):e&&(e=pe(e))&&(t=e.g[t.toString()],e=-1,t&&(e=re(t,n,r,i)),(n=-1<e?t[e]:null)&&he(n))}function he(e){if("number"!==typeof e&&e&&!e.fa){var t=e.src;if(t&&t[K])ne(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(de(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=pe(t))?(ne(n,e),0==n.h&&(n.src=null,t[ie]=null)):Q(e)}}}function de(e){return e in se?se[e]:se[e]="on"+e}function fe(e,t){if(e.fa)e=!0;else{t=new G(t,this);var n=e.listener,r=e.la||e.src;e.ia&&he(e),e=n.call(r,t)}return e}function pe(e){return e=e[ie],e instanceof te?e:null}var ge="__closure_events_fn_"+(1e9*Math.random()>>>0);function me(e){return"function"===typeof e?e:(e[ge]||(e[ge]=function(t){return e.handleEvent(t)}),e[ge])}function ve(){y.call(this),this.i=new te(this),this.S=this,this.J=null}function ye(e,t){var n,r=e.J;if(r)for(n=[];r;r=r.J)n.push(r);if(e=e.S,r=t.type||t,"string"===typeof t)t=new E(t,e);else if(t instanceof E)t.target=t.target||e;else{var i=t;t=new E(r,e),ee(t,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=be(o,r,!0,t)&&i}if(o=t.g=e,i=be(o,r,!0,t)&&i,i=be(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)o=t.g=n[s],i=be(o,r,!1,t)&&i}function be(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&ne(e.i,o),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}v(ve,y),ve.prototype[K]=!0,ve.prototype.removeEventListener=function(e,t,n,r){le(this,e,t,n,r)},ve.prototype.N=function(){if(ve.$.N.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Q(n[r]);delete t.g[e],t.h--}}this.J=null},ve.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},ve.prototype.P=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};var we=a.JSON.stringify;class _e{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function Ie(){var e=xe;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class Ee{constructor(){this.h=this.g=null}add(e,t){const n=Te.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}}var Te=new _e(()=>new Se,e=>e.reset());class Se{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function Oe(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function ke(e){a.setTimeout(()=>{throw e},0)}let Ae,Ce=!1,xe=new Ee,Ne=()=>{const e=a.Promise.resolve(void 0);Ae=()=>{e.then(De)}};var De=()=>{for(var e;e=Ie();){try{e.h.call(e.g)}catch(n){ke(n)}var t=Te;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Ce=!1};function Re(e,t){ve.call(this),this.h=e||1,this.g=t||a,this.j=g(this.qb,this),this.l=Date.now()}function Pe(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}function je(e,t,n){if("function"===typeof e)n&&(e=g(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=g(e.handleEvent,e)}return 2147483647<Number(t)?-1:a.setTimeout(e,t||0)}function Le(e){e.g=je(()=>{e.g=null,e.i&&(e.i=!1,Le(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}v(Re,ve),r=Re.prototype,r.ga=!1,r.T=null,r.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),ye(this,"tick"),this.ga&&(Pe(this),this.start()))}},r.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())},r.N=function(){Re.$.N.call(this),Pe(this),delete this.g};class Me extends y{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Le(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Fe(e){y.call(this),this.h=e,this.g={}}v(Fe,y);var Ve=[];function Ue(e,t,n,r){Array.isArray(n)||(n&&(Ve[0]=n.toString()),n=Ve);for(var i=0;i<n.length;i++){var s=oe(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function Be(e){Y(e.g,(function(e,t){this.g.hasOwnProperty(t)&&he(e)}),e),e.g={}}function qe(){this.g=!0}function ze(e,t,n,r,i,s){e.info((function(){if(e.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+u+"&":o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+o}))}function Ge(e,t,n,r,i,s,o){e.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+s+" "+o}))}function $e(e,t,n,r){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+He(e,n)+(r?" "+r:"")}))}function Ke(e,t){e.info((function(){return"TIMEOUT: "+t}))}function He(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return we(n)}catch(a){return t}}Fe.prototype.N=function(){Fe.$.N.call(this),Be(this)},Fe.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},qe.prototype.Ea=function(){this.g=!1},qe.prototype.info=function(){};var We={},Qe=null;function Ye(){return Qe=Qe||new ve}function Je(e){E.call(this,We.Ta,e)}function Xe(e){const t=Ye();ye(t,new Je(t))}function Ze(e,t){E.call(this,We.STAT_EVENT,e),this.stat=t}function et(e){const t=Ye();ye(t,new Ze(t,e))}function tt(e,t){E.call(this,We.Ua,e),this.size=t}function nt(e,t){if("function"!==typeof e)throw Error("Fn must not be null and must be a function");return a.setTimeout((function(){e()}),t)}We.Ta="serverreachability",v(Je,E),We.STAT_EVENT="statevent",v(Ze,E),We.Ua="timingevent",v(tt,E);var rt={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},it={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function st(){}function ot(e){return e.h||(e.h=e.i())}function at(){}st.prototype.h=null;var ct,ut={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function lt(){E.call(this,"d")}function ht(){E.call(this,"c")}function dt(){}function ft(e,t,n,r){this.l=e,this.j=t,this.m=n,this.W=r||1,this.U=new Fe(this),this.P=gt,e=j?125:void 0,this.V=new Re(e),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new pt}function pt(){this.i=null,this.g="",this.h=!1}v(lt,E),v(ht,E),v(dt,st),dt.prototype.g=function(){return new XMLHttpRequest},dt.prototype.i=function(){return{}},ct=new dt;var gt=45e3,mt={},vt={};function yt(e,t,n){e.L=1,e.v=Ut(jt(t)),e.s=n,e.S=!0,bt(e,null)}function bt(e,t){e.G=Date.now(),Et(e),e.A=jt(e.v);var n=e.A,r=e.W;Array.isArray(r)||(r=[String(r)]),Zt(n.i,"t",r),e.C=0,n=e.l.J,e.h=new pt,e.g=sr(e.l,n?t:null,!e.s),0<e.O&&(e.M=new Me(g(e.Pa,e,e.g),e.O)),Ue(e.U,e.g,"readystatechange",e.nb),t=e.I?X(e.I):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.A,e.u,e.s,t)):(e.u="GET",e.g.ha(e.A,e.u,null,t)),Xe(),ze(e.j,e.u,e.A,e.m,e.W,e.s)}function wt(e){return!!e.g&&("GET"==e.u&&2!=e.L&&e.l.Ha)}function _t(e,t,n){let r,i=!0;for(;!e.J&&e.C<n.length;){if(r=It(e,n),r==vt){4==t&&(e.o=4,et(14),i=!1),$e(e.j,e.m,null,"[Incomplete Response]");break}if(r==mt){e.o=4,et(15),$e(e.j,e.m,n,"[Invalid Chunk]"),i=!1;break}$e(e.j,e.m,r,null),At(e,r)}wt(e)&&r!=vt&&r!=mt&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,et(16),i=!1),e.i=e.i&&i,i?0<n.length&&!e.ba&&(e.ba=!0,t=e.l,t.g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Jn(t),t.M=!0,et(11))):($e(e.j,e.m,n,"[Invalid Chunked Response]"),kt(e),Ot(e))}function It(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?vt:(n=Number(t.substring(n,r)),isNaN(n)?mt:(r+=1,r+n>t.length?vt:(t=t.slice(r,r+n),e.C=r+n,t)))}function Et(e){e.Y=Date.now()+e.P,Tt(e,e.P)}function Tt(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=nt(g(e.lb,e),t)}function St(e){e.B&&(a.clearTimeout(e.B),e.B=null)}function Ot(e){0==e.l.H||e.J||er(e.l,e)}function kt(e){St(e);var t=e.M;t&&"function"==typeof t.sa&&t.sa(),e.M=null,Pe(e.V),Be(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function At(e,t){try{var n=e.l;if(0!=n.H&&(n.g==e||cn(n.i,e)))if(!e.K&&cn(n.i,e)&&3==n.H){try{var r=n.Ja.g.parse(t)}catch(u){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.u){if(n.g){if(!(n.g.G+3e3<e.G))break e;Zn(n),qn(n)}Yn(n),et(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&0==n.A&&!n.v&&(n.v=nt(g(n.ib,n),6e3));if(1>=an(n.i)&&n.oa){try{n.oa()}catch(u){}n.oa=void 0}}else nr(n,11)}else if((e.K||n.g==e)&&Zn(n),!S(t))for(i=n.Ja.g.parse(t),t=0;t<i.length;t++){let u=i[t];if(n.V=u[0],u=u[1],2==n.H)if("c"==u[0]){n.K=u[1],n.pa=u[2];const t=u[3];null!=t&&(n.ra=t,n.l.info("VER="+n.ra));const i=u[4];null!=i&&(n.Ga=i,n.l.info("SVER="+n.Ga));const l=u[5];null!=l&&"number"===typeof l&&0<l&&(r=1.5*l,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=e.g;if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=r.i;s.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(un(s,s.h),s.h=null))}if(r.F){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.Da=e,Vt(r.I,r.F,e))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=e;if(r.wa=ir(r,r.J?r.pa:null,r.Y),o.K){ln(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.B&&(St(a),Et(a)),r.g=o}else Qn(r);0<n.j.length&&Gn(n)}else"stop"!=u[0]&&"close"!=u[0]||nr(n,7);else 3==n.H&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?nr(n,7):Bn(n):"noop"!=u[0]&&n.h&&n.h.Aa(u),n.A=0)}Xe(4)}catch(u){}}function Ct(e){if(e.Z&&"function"==typeof e.Z)return e.Z();if("undefined"!==typeof Map&&e instanceof Map||"undefined"!==typeof Set&&e instanceof Set)return Array.from(e.values());if("string"===typeof e)return e.split("");if(c(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}function xt(e){if(e.ta&&"function"==typeof e.ta)return e.ta();if(!e.Z||"function"!=typeof e.Z){if("undefined"!==typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!==typeof Set&&e instanceof Set)){if(c(e)||"string"===typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function Nt(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(c(e)||"string"===typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=xt(e),r=Ct(e),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}r=ft.prototype,r.setTimeout=function(e){this.P=e},r.nb=function(e){e=e.target;const t=this.M;t&&3==Pn(e)?t.l():this.Pa(e)},r.Pa=function(e){try{if(e==this.g)e:{const h=Pn(this.g);var t=this.g.Ia();const d=this.g.da();if(!(3>h)&&(3!=h||j||this.g&&(this.h.h||this.g.ja()||jn(this.g)))){this.J||4!=h||7==t||Xe(8==t||0>=d?3:2),St(this);var n=this.g.da();this.ca=n;t:if(wt(this)){var r=jn(this.g);e="";var i=r.length,s=4==Pn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){kt(this),Ot(this);var o="";break t}this.h.i=new a.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=200==n,Ge(this.j,this.u,this.A,this.m,this.W,h,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var c,u=this.g;if((c=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!S(c)){var l=c;break t}}l=null}if(!(n=l)){this.i=!1,this.o=3,et(12),kt(this),Ot(this);break e}$e(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,At(this,n)}this.S?(_t(this,h,o),j&&this.i&&3==h&&(Ue(this.U,this.V,"tick",this.mb),this.V.start())):($e(this.j,this.m,o,null),At(this,o)),4==h&&kt(this),this.i&&!this.J&&(4==h?er(this.l,this):(this.i=!1,Et(this)))}else Ln(this.g),400==n&&0<o.indexOf("Unknown SID")?(this.o=3,et(12)):(this.o=0,et(13)),kt(this),Ot(this)}}}catch(h){}},r.mb=function(){if(this.g){var e=Pn(this.g),t=this.g.ja();this.C<t.length&&(St(this),_t(this,e,t),this.i&&4!=e&&Et(this))}},r.cancel=function(){this.J=!0,kt(this)},r.lb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(Ke(this.j,this.A),2!=this.L&&(Xe(),et(17)),kt(this),this.o=2,Ot(this)):Tt(this,this.Y-e)};var Dt=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Rt(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Pt(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Pt){this.h=e.h,Lt(this,e.j),this.s=e.s,this.g=e.g,Mt(this,e.m),this.l=e.l;var t=e.i,n=new Qt;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),Ft(this,n),this.o=e.o}else e&&(t=String(e).match(Dt))?(this.h=!1,Lt(this,t[1]||"",!0),this.s=Bt(t[2]||""),this.g=Bt(t[3]||"",!0),Mt(this,t[4]),this.l=Bt(t[5]||"",!0),Ft(this,t[6]||"",!0),this.o=Bt(t[7]||"")):(this.h=!1,this.i=new Qt(null,this.h))}function jt(e){return new Pt(e)}function Lt(e,t,n){e.j=n?Bt(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Mt(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Ft(e,t,n){t instanceof Qt?(e.i=t,tn(e.i,e.h)):(n||(t=qt(t,Ht)),e.i=new Qt(t,e.h))}function Vt(e,t,n){e.i.set(t,n)}function Ut(e){return Vt(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Bt(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function qt(e,t,n){return"string"===typeof e?(e=encodeURI(e).replace(t,zt),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function zt(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(15&e).toString(16)}Pt.prototype.toString=function(){var e=[],t=this.j;t&&e.push(qt(t,Gt,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(qt(t,Gt,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(qt(n,"/"==n.charAt(0)?Kt:$t,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",qt(n,Wt)),e.join("")};var Gt=/[#\/\?@]/g,$t=/[#\?:]/g,Kt=/[#\?]/g,Ht=/[#\?@]/g,Wt=/#/g;function Qt(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Yt(e){e.g||(e.g=new Map,e.h=0,e.i&&Rt(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function Jt(e,t){Yt(e),t=en(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function Xt(e,t){return Yt(e),t=en(e,t),e.g.has(t)}function Zt(e,t,n){Jt(e,t),0<n.length&&(e.i=null,e.g.set(en(e,t),_(n)),e.h+=n.length)}function en(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function tn(e,t){t&&!e.j&&(Yt(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(Jt(this,t),Zt(this,n,e))}),e)),e.j=t}r=Qt.prototype,r.add=function(e,t){Yt(this),this.i=null,e=en(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},r.forEach=function(e,t){Yt(this),this.g.forEach((function(n,r){n.forEach((function(n){e.call(t,n,r,this)}),this)}),this)},r.ta=function(){Yt(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let e=0;e<i.length;e++)n.push(t[r])}return n},r.Z=function(e){Yt(this);let t=[];if("string"===typeof e)Xt(this,e)&&(t=t.concat(this.g.get(en(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},r.set=function(e,t){return Yt(this),this.i=null,e=en(this,e),Xt(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},r.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t},r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;""!==o[r]&&(i+="="+encodeURIComponent(String(o[r]))),e.push(i)}}return this.i=e.join("&")};var nn=class{constructor(e,t){this.g=e,this.map=t}};function rn(e){this.l=e||sn,a.PerformanceNavigationTiming?(e=a.performance.getEntriesByType("navigation"),e=0<e.length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol)):e=!!(a.g&&a.g.Ka&&a.g.Ka()&&a.g.Ka().ec),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var sn=10;function on(e){return!!e.h||!!e.g&&e.g.size>=e.j}function an(e){return e.h?1:e.g?e.g.size:0}function cn(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function un(e,t){e.g?e.g.add(t):e.h=t}function ln(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function hn(e){if(null!=e.h)return e.i.concat(e.h.F);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return _(e.i)}rn.prototype.cancel=function(){if(this.i=hn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}};var dn=class{stringify(e){return a.JSON.stringify(e,void 0)}parse(e){return a.JSON.parse(e,void 0)}};function fn(){this.g=new dn}function pn(e,t,n){const r=n||"";try{Nt(e,(function(e,n){let i=e;u(e)&&(i=we(e)),t.push(r+n+"="+encodeURIComponent(i))}))}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function gn(e,t){const n=new qe;if(a.Image){const r=new Image;r.onload=m(mn,n,r,"TestLoadImage: loaded",!0,t),r.onerror=m(mn,n,r,"TestLoadImage: error",!1,t),r.onabort=m(mn,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=m(mn,n,r,"TestLoadImage: timeout",!1,t),a.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=e}else t(!1)}function mn(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch(s){}}function vn(e){this.l=e.fc||null,this.j=e.ob||!1}function yn(e,t){ve.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=bn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}v(vn,st),vn.prototype.g=function(){return new yn(this.l,this.j)},vn.prototype.i=function(e){return function(){return e}}({}),v(yn,ve);var bn=0;function wn(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}function _n(e){e.readyState=4,e.l=null,e.j=null,e.A=null,In(e)}function In(e){e.onreadystatechange&&e.onreadystatechange.call(e)}r=yn.prototype,r.open=function(e,t){if(this.readyState!=bn)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,In(this)},r.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||a).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))},r.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,_n(this)),this.readyState=bn},r.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,In(this)),this.g&&(this.readyState=3,In(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if("undefined"!==typeof a.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;wn(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))},r.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?_n(this):In(this),3==this.readyState&&wn(this)}},r.Za=function(e){this.g&&(this.response=this.responseText=e,_n(this))},r.Ya=function(e){this.g&&(this.response=e,_n(this))},r.ka=function(){this.g&&_n(this)},r.setRequestHeader=function(e,t){this.v.append(e,t)},r.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(yn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var En=a.JSON.parse;function Tn(e){ve.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Sn,this.L=this.M=!1}v(Tn,ve);var Sn="",On=/^https?$/i,kn=["POST","PUT"];function An(e){return R&&"number"===typeof e.timeout&&void 0!==e.ontimeout}function Cn(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,xn(e),Dn(e)}function xn(e){e.F||(e.F=!0,ye(e,"complete"),ye(e,"error"))}function Nn(e){if(e.h&&"undefined"!=typeof o&&(!e.C[1]||4!=Pn(e)||2!=e.da()))if(e.v&&4==Pn(e))je(e.La,0,e);else if(ye(e,"readystatechange"),4==Pn(e)){e.h=!1;try{const o=e.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=0===o){var i=String(e.I).match(Dt)[1]||null;!i&&a.self&&a.self.location&&(i=a.self.location.protocol.slice(0,-1)),r=!On.test(i?i.toLowerCase():"")}n=r}if(n)ye(e,"complete"),ye(e,"success");else{e.m=6;try{var s=2<Pn(e)?e.g.statusText:""}catch(c){s=""}e.j=s+" ["+e.da()+"]",xn(e)}}finally{Dn(e)}}}function Dn(e,t){if(e.g){Rn(e);const r=e.g,i=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||ye(e,"ready");try{r.onreadystatechange=i}catch(n){}}}function Rn(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(a.clearTimeout(e.A),e.A=null)}function Pn(e){return e.g?e.g.readyState:0}function jn(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case Sn:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(t){return null}}function Ln(e){const t={};e=(e.g&&2<=Pn(e)&&e.g.getAllResponseHeaders()||"").split("\r\n");for(let r=0;r<e.length;r++){if(S(e[r]))continue;var n=Oe(e[r]);const i=n[0];if(n=n[1],"string"!==typeof n)continue;n=n.trim();const s=t[i]||[];t[i]=s,s.push(n)}J(t,(function(e){return e.join(", ")}))}function Mn(e){let t="";return Y(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}function Fn(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Mn(n),"string"===typeof e?null!=n&&encodeURIComponent(String(n)):Vt(e,t,n))}function Vn(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Un(e){this.Ga=0,this.j=[],this.l=new qe,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Vn("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Vn("baseRetryDelayMs",5e3,e),this.hb=Vn("retryDelaySeedMs",1e4,e),this.eb=Vn("forwardChannelMaxRetries",2,e),this.xa=Vn("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.dc||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new rn(e&&e.concurrentRequestLimit),this.Ja=new fn,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}function Bn(e){if(zn(e),3==e.H){var t=e.W++,n=jt(e.I);if(Vt(n,"SID",e.K),Vt(n,"RID",t),Vt(n,"TYPE","terminate"),Hn(e,n),t=new ft(e,e.l,t),t.L=2,t.v=Ut(jt(n)),n=!1,a.navigator&&a.navigator.sendBeacon)try{n=a.navigator.sendBeacon(t.v.toString(),"")}catch(r){}!n&&a.Image&&((new Image).src=t.v,n=!0),n||(t.g=sr(t.l,null),t.g.ha(t.v)),t.G=Date.now(),Et(t)}rr(e)}function qn(e){e.g&&(Jn(e),e.g.cancel(),e.g=null)}function zn(e){qn(e),e.u&&(a.clearTimeout(e.u),e.u=null),Zn(e),e.i.cancel(),e.m&&("number"===typeof e.m&&a.clearTimeout(e.m),e.m=null)}function Gn(e){if(!on(e.i)&&!e.m){e.m=!0;var t=e.Na;Ae||Ne(),Ce||(Ae(),Ce=!0),xe.add(t,e),e.C=0}}function $n(e,t){return!(an(e.i)>=e.i.j-(e.m?1:0))&&(e.m?(e.j=t.F.concat(e.j),!0):!(1==e.H||2==e.H||e.C>=(e.cb?0:e.eb))&&(e.m=nt(g(e.Na,e,t),tr(e,e.C)),e.C++,!0))}function Kn(e,t){var n;n=t?t.m:e.W++;const r=jt(e.I);Vt(r,"SID",e.K),Vt(r,"RID",n),Vt(r,"AID",e.V),Hn(e,r),e.o&&e.s&&Fn(r,e.o,e.s),n=new ft(e,e.l,n,e.C+1),null===e.o&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=Wn(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),un(e.i,n),yt(n,r,t)}function Hn(e,t){e.na&&Y(e.na,(function(e,n){Vt(t,n,e)})),e.h&&Nt({},(function(e,n){Vt(t,n,e)}))}function Wn(e,t,n){n=Math.min(e.j.length,n);var r=e.h?g(e.h.Va,e.h,e):null;e:{var i=e.j;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=i[0].g,e.push("ofs="+t)):t=0:e.push("ofs="+t);let o=!0;for(let a=0;a<n;a++){let n=i[a].g;const c=i[a].map;if(n-=t,0>n)t=Math.max(0,i[a].g-100),o=!1;else try{pn(c,e,"req"+n+"_")}catch(s){r&&r(c)}}if(o){r=e.join("&");break e}}}return e=e.j.splice(0,n),t.F=e,r}function Qn(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;Ae||Ne(),Ce||(Ae(),Ce=!0),xe.add(t,e),e.A=0}}function Yn(e){return!(e.g||e.u||3<=e.A)&&(e.ba++,e.u=nt(g(e.Ma,e),tr(e,e.A)),e.A++,!0)}function Jn(e){null!=e.B&&(a.clearTimeout(e.B),e.B=null)}function Xn(e){e.g=new ft(e,e.l,"rpc",e.ba),null===e.o&&(e.g.I=e.s),e.g.O=0;var t=jt(e.wa);Vt(t,"RID","rpc"),Vt(t,"SID",e.K),Vt(t,"AID",e.V),Vt(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&Vt(t,"TO",e.qa),Vt(t,"TYPE","xmlhttp"),Hn(e,t),e.o&&e.s&&Fn(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.v=Ut(jt(t)),n.s=null,n.S=!0,bt(n,e)}function Zn(e){null!=e.v&&(a.clearTimeout(e.v),e.v=null)}function er(e,t){var n=null;if(e.g==t){Zn(e),Jn(e),e.g=null;var r=2}else{if(!cn(e.i,t))return;n=t.F,ln(e.i,t),r=1}if(0!=e.H)if(t.i)if(1==r){n=t.s?t.s.length:0,t=Date.now()-t.G;var i=e.C;r=Ye(),ye(r,new tt(r,n)),Gn(e)}else Qn(e);else if(i=t.o,3==i||0==i&&0<t.ca||!(1==r&&$n(e,t)||2==r&&Yn(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:nr(e,5);break;case 4:nr(e,10);break;case 3:nr(e,6);break;default:nr(e,2)}}function tr(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function nr(e,t){if(e.l.info("Error code "+t),2==t){var n=null;e.h&&(n=null);var r=g(e.pb,e);n||(n=new Pt("//www.google.com/images/cleardot.gif"),a.location&&"http"==a.location.protocol||Lt(n,"https"),Ut(n)),gn(n.toString(),r)}else et(2);e.H=0,e.h&&e.h.za(t),rr(e),zn(e)}function rr(e){if(e.H=0,e.ma=[],e.h){const t=hn(e.i);0==t.length&&0==e.j.length||(I(e.ma,t),I(e.ma,e.j),e.i.i.length=0,_(e.j),e.j.length=0),e.h.ya()}}function ir(e,t,n){var r=n instanceof Pt?jt(n):new Pt(n);if(""!=r.g)t&&(r.g=t+"."+r.g),Mt(r,r.m);else{var i=a.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new Pt(null);r&&Lt(s,r),t&&(s.g=t),i&&Mt(s,i),n&&(s.l=n),r=s}return n=e.F,t=e.Da,n&&t&&Vt(r,n,t),Vt(r,"VER",e.ra),Hn(e,r),r}function sr(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ha&&!e.va?new Tn(new vn({ob:!0})):new Tn(e.va),t.Oa(e.J),t}function or(){}function ar(){if(R&&!(10<=Number(z)))throw Error("Environmental error: no available transport.")}function cr(e,t){ve.call(this),this.g=new Un(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!S(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!S(t)&&(this.g.F=t,e=this.h,null!==e&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new hr(this)}function ur(e){lt.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function lr(){ht.call(this),this.status=1}function hr(e){this.g=e}function dr(){this.blockSize=-1}function fr(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}function pr(e,t,n){n||(n=0);var r=Array(16);if("string"===typeof t)for(var i=0;16>i;++i)r[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];var s=e.g[3],o=t+(s^n&(i^s))+r[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[1]+3905402710&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[5]+1200080426&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[9]+2336552879&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[13]+4254626195&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(i^s&(n^i))+r[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[6]+3225465664&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[10]+38016083&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[14]+3275163606&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[2]+4243563512&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(n^i^s)+r[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[8]+2272392833&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[4]+1272893353&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[0]+3936430074&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[12]+3873151461&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(i^(n|~s))+r[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[7]+1126891415&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[3]+2399980690&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[15]+4264355552&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[11]+3174756917&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+s&4294967295}function gr(e,t){this.h=t;for(var n=[],r=!0,i=e.length-1;0<=i;i--){var s=0|e[i];r&&s==t||(n[i]=s,r=!1)}this.g=n}r=Tn.prototype,r.Oa=function(e){this.M=e},r.ha=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():ct.g(),this.C=this.u?ot(this.u):ot(ct),this.g.onreadystatechange=g(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(s){return void Cn(this,s)}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else{if("function"!==typeof r.keys||"function"!==typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const e of r.keys())n.set(e,r.get(e))}r=Array.from(n.keys()).find(e=>"content-type"==e.toLowerCase()),i=a.FormData&&e instanceof a.FormData,!(0<=w(kn,t))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[o,a]of n)this.g.setRequestHeader(o,a);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Rn(this),0<this.B&&((this.L=An(this.g))?(this.g.timeout=this.B,this.g.ontimeout=g(this.ua,this)):this.A=je(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(s){Cn(this,s)}},r.ua=function(){"undefined"!=typeof o&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ye(this,"timeout"),this.abort(8))},r.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,ye(this,"complete"),ye(this,"abort"),Dn(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Dn(this,!0)),Tn.$.N.call(this)},r.La=function(){this.s||(this.G||this.v||this.l?Nn(this):this.kb())},r.kb=function(){Nn(this)},r.isActive=function(){return!!this.g},r.da=function(){try{return 2<Pn(this)?this.g.status:-1}catch(e){return-1}},r.ja=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},r.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),En(t)}},r.Ia=function(){return this.m},r.Sa=function(){return"string"===typeof this.j?this.j:String(this.j)},r=Un.prototype,r.ra=8,r.H=1,r.Na=function(e){if(this.m)if(this.m=null,1==this.H){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const i=new ft(this,this.l,e);let s=this.s;if(this.U&&(s?(s=X(s),ee(s,this.U)):s=this.U),null!==this.o||this.O||(i.I=s,s=null),this.P)e:{for(var t=0,n=0;n<this.j.length;n++){var r=this.j[n];if(r="__data__"in r.map&&(r=r.map.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(t+=r,4096<t){t=n;break e}if(4096===t||n===this.j.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=Wn(this,i,t),n=jt(this.I),Vt(n,"RID",e),Vt(n,"CVER",22),this.F&&Vt(n,"X-HTTP-Session-Id",this.F),Hn(this,n),s&&(this.O?t="headers="+encodeURIComponent(String(Mn(s)))+"&"+t:this.o&&Fn(n,this.o,s)),un(this.i,i),this.bb&&Vt(n,"TYPE","init"),this.P?(Vt(n,"$req",t),Vt(n,"SID","null"),i.aa=!0,yt(i,n,null)):yt(i,n,t),this.H=2}}else 3==this.H&&(e?Kn(this,e):0==this.j.length||on(this.i)||Kn(this))},r.Ma=function(){if(this.u=null,Xn(this),this.ca&&!(this.M||null==this.g||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=nt(g(this.jb,this),e)}},r.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,et(10),qn(this),Xn(this))},r.ib=function(){null!=this.v&&(this.v=null,qn(this),Yn(this),et(19))},r.pb=function(e){e?(this.l.info("Successfully pinged google.com"),et(2)):(this.l.info("Failed to ping google.com"),et(1))},r.isActive=function(){return!!this.h&&this.h.isActive(this)},r=or.prototype,r.Ba=function(){},r.Aa=function(){},r.za=function(){},r.ya=function(){},r.isActive=function(){return!0},r.Va=function(){},ar.prototype.g=function(e,t){return new cr(e,t)},v(cr,ve),cr.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;et(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=ir(e,null,e.Y),Gn(e)},cr.prototype.close=function(){Bn(this.g)},cr.prototype.u=function(e){var t=this.g;if("string"===typeof e){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=we(e),e=n);t.j.push(new nn(t.fb++,e)),3==t.H&&Gn(t)},cr.prototype.N=function(){this.g.h=null,delete this.j,Bn(this.g),delete this.g,cr.$.N.call(this)},v(ur,lt),v(lr,ht),v(hr,or),hr.prototype.Ba=function(){ye(this.g,"a")},hr.prototype.Aa=function(e){ye(this.g,new ur(e))},hr.prototype.za=function(e){ye(this.g,new lr)},hr.prototype.ya=function(){ye(this.g,"b")},v(fr,dr),fr.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0},fr.prototype.j=function(e,t){void 0===t&&(t=e.length);for(var n=t-this.blockSize,r=this.m,i=this.h,s=0;s<t;){if(0==i)for(;s<=n;)pr(this,e,s),s+=this.blockSize;if("string"===typeof e){for(;s<t;)if(r[i++]=e.charCodeAt(s++),i==this.blockSize){pr(this,r),i=0;break}}else for(;s<t;)if(r[i++]=e[s++],i==this.blockSize){pr(this,r),i=0;break}}this.h=i,this.i+=t},fr.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=255&n,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};var mr={};function vr(e){return-128<=e&&128>e?C(e,(function(e){return new gr([0|e],0>e?-1:0)})):new gr([0|e],0>e?-1:0)}function yr(e){if(isNaN(e)||!isFinite(e))return _r;if(0>e)return Or(yr(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=wr;return new gr(t,0)}function br(e,t){if(0==e.length)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if("-"==e.charAt(0))return Or(br(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=yr(Math.pow(t,8)),r=_r,i=0;i<e.length;i+=8){var s=Math.min(8,e.length-i),o=parseInt(e.substring(i,i+s),t);8>s?(s=yr(Math.pow(t,s)),r=r.R(s).add(yr(o))):(r=r.R(n),r=r.add(yr(o)))}return r}var wr=4294967296,_r=vr(0),Ir=vr(1),Er=vr(16777216);function Tr(e){if(0!=e.h)return!1;for(var t=0;t<e.g.length;t++)if(0!=e.g[t])return!1;return!0}function Sr(e){return-1==e.h}function Or(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new gr(n,~e.h).add(Ir)}function kr(e,t){return e.add(Or(t))}function Ar(e,t){for(;(65535&e[t])!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function Cr(e,t){this.g=e,this.h=t}function xr(e,t){if(Tr(t))throw Error("division by zero");if(Tr(e))return new Cr(_r,_r);if(Sr(e))return t=xr(Or(e),t),new Cr(Or(t.g),Or(t.h));if(Sr(t))return t=xr(e,Or(t)),new Cr(Or(t.g),t.h);if(30<e.g.length){if(Sr(e)||Sr(t))throw Error("slowDivide_ only works with positive integers.");for(var n=Ir,r=t;0>=r.X(e);)n=Nr(n),r=Nr(r);var i=Dr(n,1),s=Dr(r,1);for(r=Dr(r,2),n=Dr(n,2);!Tr(r);){var o=s.add(r);0>=o.X(e)&&(i=i.add(n),s=o),r=Dr(r,1),n=Dr(n,1)}return t=kr(e,i.R(t)),new Cr(i,t)}for(i=_r;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=yr(n),o=s.R(t);Sr(o)||0<o.X(e);)n-=r,s=yr(n),o=s.R(t);Tr(s)&&(s=Ir),i=i.add(s),e=kr(e,o)}return new Cr(i,e)}function Nr(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.D(r)<<1|e.D(r-1)>>>31;return new gr(n,e.h)}function Dr(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,i=[],s=0;s<r;s++)i[s]=0<t?e.D(s+n)>>>t|e.D(s+n+1)<<32-t:e.D(s+n);return new gr(i,e.h)}r=gr.prototype,r.ea=function(){if(Sr(this))return-Or(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.D(n);e+=(0<=r?r:wr+r)*t,t*=wr}return e},r.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(Tr(this))return"0";if(Sr(this))return"-"+Or(this).toString(e);for(var t=yr(Math.pow(e,6)),n=this,r="";;){var i=xr(n,t).g;n=kr(n,i.R(t));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=i,Tr(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}},r.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h},r.X=function(e){return e=kr(this,e),Sr(e)?-1:Tr(e)?0:1},r.abs=function(){return Sr(this)?Or(this):this},r.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,i=0;i<=t;i++){var s=r+(65535&this.D(i))+(65535&e.D(i)),o=(s>>>16)+(this.D(i)>>>16)+(e.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new gr(n,-2147483648&n[n.length-1]?-1:0)},r.R=function(e){if(Tr(this)||Tr(e))return _r;if(Sr(this))return Sr(e)?Or(this).R(Or(e)):Or(Or(this).R(e));if(Sr(e))return Or(this.R(Or(e)));if(0>this.X(Er)&&0>e.X(Er))return yr(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<e.g.length;i++){var s=this.D(r)>>>16,o=65535&this.D(r),a=e.D(i)>>>16,c=65535&e.D(i);n[2*r+2*i]+=o*c,Ar(n,2*r+2*i),n[2*r+2*i+1]+=s*c,Ar(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,Ar(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,Ar(n,2*r+2*i+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new gr(n,0)},r.gb=function(e){return xr(this,e).h},r.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)&e.D(r);return new gr(n,this.h&e.h)},r.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)|e.D(r);return new gr(n,this.h|e.h)},r.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)^e.D(r);return new gr(n,this.h^e.h)},ar.prototype.createWebChannel=ar.prototype.g,cr.prototype.send=cr.prototype.u,cr.prototype.open=cr.prototype.m,cr.prototype.close=cr.prototype.close,rt.NO_ERROR=0,rt.TIMEOUT=8,rt.HTTP_ERROR=6,it.COMPLETE="complete",at.EventType=ut,ut.OPEN="a",ut.CLOSE="b",ut.ERROR="c",ut.MESSAGE="d",ve.prototype.listen=ve.prototype.O,Tn.prototype.listenOnce=Tn.prototype.P,Tn.prototype.getLastError=Tn.prototype.Sa,Tn.prototype.getLastErrorCode=Tn.prototype.Ia,Tn.prototype.getStatus=Tn.prototype.da,Tn.prototype.getResponseJson=Tn.prototype.Wa,Tn.prototype.getResponseText=Tn.prototype.ja,Tn.prototype.send=Tn.prototype.ha,Tn.prototype.setWithCredentials=Tn.prototype.Oa,fr.prototype.digest=fr.prototype.l,fr.prototype.reset=fr.prototype.reset,fr.prototype.update=fr.prototype.j,gr.prototype.add=gr.prototype.add,gr.prototype.multiply=gr.prototype.R,gr.prototype.modulo=gr.prototype.gb,gr.prototype.compare=gr.prototype.X,gr.prototype.toNumber=gr.prototype.ea,gr.prototype.toString=gr.prototype.toString,gr.prototype.getBits=gr.prototype.D,gr.fromNumber=yr,gr.fromString=br;var Rr=s.createWebChannelTransport=function(){return new ar},Pr=s.getStatEventTarget=function(){return Ye()},jr=s.ErrorCode=rt,Lr=s.EventType=it,Mr=s.Event=We,Fr=s.Stat={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Vr=s.FetchXmlHttpFactory=vn,Ur=s.WebChannel=at,Br=s.XhrIo=Tn,qr=s.Md5=fr,zr=s.Integer=gr}).call(this,n("c8ba"))},"9ed3":function(e,t,n){"use strict";var r=n("ae93").IteratorPrototype,i=n("7c73"),s=n("5c6c"),o=n("d44e"),a=n("3f8c"),c=function(){return this};e.exports=function(e,t,n,u){var l=t+" Iterator";return e.prototype=i(r,{next:s(+!u,n)}),o(e,l,!1,!0),a[l]=c,e}},"9f7f":function(e,t,n){var r=n("d039"),i=n("da84"),s=i.RegExp,o=r((function(){var e=s("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),a=o||r((function(){return!s("a","y").sticky})),c=o||r((function(){var e=s("^r","gy");return e.lastIndex=2,null!=e.exec("str")}));e.exports={BROKEN_CARET:c,MISSED_STICKY:a,UNSUPPORTED_Y:o}},"9ff4":function(e,t,n){"use strict";(function(e){function r(e,t){const n=Object.create(null),r=e.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return t?e=>!!n[e.toLowerCase()]:e=>!!n[e]}n.d(t,"a",(function(){return T})),n.d(t,"b",(function(){return E})),n.d(t,"c",(function(){return O})),n.d(t,"d",(function(){return S})),n.d(t,"e",(function(){return J})),n.d(t,"f",(function(){return ee})),n.d(t,"g",(function(){return ie})),n.d(t,"h",(function(){return x})),n.d(t,"i",(function(){return ae})),n.d(t,"j",(function(){return ne})),n.d(t,"k",(function(){return R})),n.d(t,"l",(function(){return Z})),n.d(t,"m",(function(){return c})),n.d(t,"n",(function(){return re})),n.d(t,"o",(function(){return P})),n.d(t,"p",(function(){return F})),n.d(t,"q",(function(){return s})),n.d(t,"r",(function(){return m})),n.d(t,"s",(function(){return H})),n.d(t,"t",(function(){return j})),n.d(t,"u",(function(){return C})),n.d(t,"v",(function(){return B})),n.d(t,"w",(function(){return A})),n.d(t,"x",(function(){return K})),n.d(t,"y",(function(){return q})),n.d(t,"z",(function(){return W})),n.d(t,"A",(function(){return v})),n.d(t,"B",(function(){return L})),n.d(t,"C",(function(){return a})),n.d(t,"D",(function(){return V})),n.d(t,"E",(function(){return U})),n.d(t,"F",(function(){return b})),n.d(t,"G",(function(){return w})),n.d(t,"H",(function(){return r})),n.d(t,"I",(function(){return f})),n.d(t,"J",(function(){return u})),n.d(t,"K",(function(){return N})),n.d(t,"L",(function(){return _})),n.d(t,"M",(function(){return te})),n.d(t,"N",(function(){return se})),n.d(t,"O",(function(){return $}));const i="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",s=r(i);const o="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",a=r(o);function c(e){return!!e||""===e}function u(e){if(P(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=V(r)?d(r):u(r);if(i)for(const e in i)t[e]=i[e]}return t}return V(e)||B(e)?e:void 0}const l=/;(?![^(]*\))/g,h=/:(.+)/;function d(e){const t={};return e.split(l).forEach(e=>{if(e){const n=e.split(h);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function f(e){let t="";if(V(e))t=e;else if(P(e))for(let n=0;n<e.length;n++){const r=f(e[n]);r&&(t+=r+" ")}else if(B(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const p="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",g="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",m=r(p),v=r(g);function y(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=b(e[r],t[r]);return n}function b(e,t){if(e===t)return!0;let n=M(e),r=M(t);if(n||r)return!(!n||!r)&&e.getTime()===t.getTime();if(n=P(e),r=P(t),n||r)return!(!n||!r)&&y(e,t);if(n=B(e),r=B(t),n||r){if(!n||!r)return!1;const i=Object.keys(e).length,s=Object.keys(t).length;if(i!==s)return!1;for(const n in e){const r=e.hasOwnProperty(n),i=t.hasOwnProperty(n);if(r&&!i||!r&&i||!b(e[n],t[n]))return!1}}return String(e)===String(t)}function w(e,t){return e.findIndex(e=>b(e,t))}const _=e=>null==e?"":P(e)||B(e)&&(e.toString===z||!F(e.toString))?JSON.stringify(e,I,2):String(e),I=(e,t)=>t&&t.__v_isRef?I(e,t.value):j(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[t,n])=>(e[t+" =>"]=n,e),{})}:L(t)?{[`Set(${t.size})`]:[...t.values()]}:!B(t)||P(t)||K(t)?t:String(t),E={},T=[],S=()=>{},O=()=>!1,k=/^on[^a-z]/,A=e=>k.test(e),C=e=>e.startsWith("onUpdate:"),x=Object.assign,N=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},D=Object.prototype.hasOwnProperty,R=(e,t)=>D.call(e,t),P=Array.isArray,j=e=>"[object Map]"===G(e),L=e=>"[object Set]"===G(e),M=e=>e instanceof Date,F=e=>"function"===typeof e,V=e=>"string"===typeof e,U=e=>"symbol"===typeof e,B=e=>null!==e&&"object"===typeof e,q=e=>B(e)&&F(e.then)&&F(e.catch),z=Object.prototype.toString,G=e=>z.call(e),$=e=>G(e).slice(8,-1),K=e=>"[object Object]"===G(e),H=e=>V(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,W=r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Q=e=>{const t=Object.create(null);return n=>{const r=t[n];return r||(t[n]=e(n))}},Y=/-(\w)/g,J=Q(e=>e.replace(Y,(e,t)=>t?t.toUpperCase():"")),X=/\B([A-Z])/g,Z=Q(e=>e.replace(X,"-$1").toLowerCase()),ee=Q(e=>e.charAt(0).toUpperCase()+e.slice(1)),te=Q(e=>e?"on"+ee(e):""),ne=(e,t)=>!Object.is(e,t),re=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},ie=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},se=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let oe;const ae=()=>oe||(oe="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof e?e:{})}).call(this,n("c8ba"))},a04b:function(e,t,n){var r=n("c04e"),i=n("d9b5");e.exports=function(e){var t=r(e,"string");return i(t)?t:t+""}},a4b4:function(e,t,n){var r=n("342f");e.exports=/web0s(?!.*chrome)/i.test(r)},a4d3:function(e,t,n){"use strict";var r=n("23e7"),i=n("da84"),s=n("d066"),o=n("2ba4"),a=n("c65b"),c=n("e330"),u=n("c430"),l=n("83ab"),h=n("4930"),d=n("d039"),f=n("1a2d"),p=n("e8b5"),g=n("1626"),m=n("861d"),v=n("3a9b"),y=n("d9b5"),b=n("825a"),w=n("7b0b"),_=n("fc6a"),I=n("a04b"),E=n("577e"),T=n("5c6c"),S=n("7c73"),O=n("df75"),k=n("241c"),A=n("057f"),C=n("7418"),x=n("06cf"),N=n("9bf2"),D=n("d1e7"),R=n("f36a"),P=n("6eeb"),j=n("5692"),L=n("f772"),M=n("d012"),F=n("90e3"),V=n("b622"),U=n("e538"),B=n("746f"),q=n("d44e"),z=n("69f3"),G=n("b727").forEach,$=L("hidden"),K="Symbol",H="prototype",W=V("toPrimitive"),Q=z.set,Y=z.getterFor(K),J=Object[H],X=i.Symbol,Z=X&&X[H],ee=i.TypeError,te=i.QObject,ne=s("JSON","stringify"),re=x.f,ie=N.f,se=A.f,oe=D.f,ae=c([].push),ce=j("symbols"),ue=j("op-symbols"),le=j("string-to-symbol-registry"),he=j("symbol-to-string-registry"),de=j("wks"),fe=!te||!te[H]||!te[H].findChild,pe=l&&d((function(){return 7!=S(ie({},"a",{get:function(){return ie(this,"a",{value:7}).a}})).a}))?function(e,t,n){var r=re(J,t);r&&delete J[t],ie(e,t,n),r&&e!==J&&ie(J,t,r)}:ie,ge=function(e,t){var n=ce[e]=S(Z);return Q(n,{type:K,tag:e,description:t}),l||(n.description=t),n},me=function(e,t,n){e===J&&me(ue,t,n),b(e);var r=I(t);return b(n),f(ce,r)?(n.enumerable?(f(e,$)&&e[$][r]&&(e[$][r]=!1),n=S(n,{enumerable:T(0,!1)})):(f(e,$)||ie(e,$,T(1,{})),e[$][r]=!0),pe(e,r,n)):ie(e,r,n)},ve=function(e,t){b(e);var n=_(t),r=O(n).concat(Ie(n));return G(r,(function(t){l&&!a(be,n,t)||me(e,t,n[t])})),e},ye=function(e,t){return void 0===t?S(e):ve(S(e),t)},be=function(e){var t=I(e),n=a(oe,this,t);return!(this===J&&f(ce,t)&&!f(ue,t))&&(!(n||!f(this,t)||!f(ce,t)||f(this,$)&&this[$][t])||n)},we=function(e,t){var n=_(e),r=I(t);if(n!==J||!f(ce,r)||f(ue,r)){var i=re(n,r);return!i||!f(ce,r)||f(n,$)&&n[$][r]||(i.enumerable=!0),i}},_e=function(e){var t=se(_(e)),n=[];return G(t,(function(e){f(ce,e)||f(M,e)||ae(n,e)})),n},Ie=function(e){var t=e===J,n=se(t?ue:_(e)),r=[];return G(n,(function(e){!f(ce,e)||t&&!f(J,e)||ae(r,ce[e])})),r};if(h||(X=function(){if(v(Z,this))throw ee("Symbol is not a constructor");var e=arguments.length&&void 0!==arguments[0]?E(arguments[0]):void 0,t=F(e),n=function(e){this===J&&a(n,ue,e),f(this,$)&&f(this[$],t)&&(this[$][t]=!1),pe(this,t,T(1,e))};return l&&fe&&pe(J,t,{configurable:!0,set:n}),ge(t,e)},Z=X[H],P(Z,"toString",(function(){return Y(this).tag})),P(X,"withoutSetter",(function(e){return ge(F(e),e)})),D.f=be,N.f=me,x.f=we,k.f=A.f=_e,C.f=Ie,U.f=function(e){return ge(V(e),e)},l&&(ie(Z,"description",{configurable:!0,get:function(){return Y(this).description}}),u||P(J,"propertyIsEnumerable",be,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!h,sham:!h},{Symbol:X}),G(O(de),(function(e){B(e)})),r({target:K,stat:!0,forced:!h},{for:function(e){var t=E(e);if(f(le,t))return le[t];var n=X(t);return le[t]=n,he[n]=t,n},keyFor:function(e){if(!y(e))throw ee(e+" is not a symbol");if(f(he,e))return he[e]},useSetter:function(){fe=!0},useSimple:function(){fe=!1}}),r({target:"Object",stat:!0,forced:!h,sham:!l},{create:ye,defineProperty:me,defineProperties:ve,getOwnPropertyDescriptor:we}),r({target:"Object",stat:!0,forced:!h},{getOwnPropertyNames:_e,getOwnPropertySymbols:Ie}),r({target:"Object",stat:!0,forced:d((function(){C.f(1)}))},{getOwnPropertySymbols:function(e){return C.f(w(e))}}),ne){var Ee=!h||d((function(){var e=X();return"[null]"!=ne([e])||"{}"!=ne({a:e})||"{}"!=ne(Object(e))}));r({target:"JSON",stat:!0,forced:Ee},{stringify:function(e,t,n){var r=R(arguments),i=t;if((m(t)||void 0!==e)&&!y(e))return p(t)||(t=function(e,t){if(g(i)&&(t=a(i,this,e,t)),!y(t))return t}),r[1]=t,o(ne,null,r)}})}if(!Z[W]){var Te=Z.valueOf;P(Z,W,(function(e){return a(Te,this)}))}q(X,K),M[$]=!0},a630:function(e,t,n){var r=n("23e7"),i=n("4df4"),s=n("1c7e"),o=!s((function(e){Array.from(e)}));r({target:"Array",stat:!0,forced:o},{from:i})},a640:function(e,t,n){"use strict";var r=n("d039");e.exports=function(e,t){var n=[][e];return!!n&&r((function(){n.call(null,t||function(){throw 1},1)}))}},a79d:function(e,t,n){"use strict";var r=n("23e7"),i=n("c430"),s=n("fea9"),o=n("d039"),a=n("d066"),c=n("1626"),u=n("4840"),l=n("cdf9"),h=n("6eeb"),d=!!s&&o((function(){s.prototype["finally"].call({then:function(){}},(function(){}))}));if(r({target:"Promise",proto:!0,real:!0,forced:d},{finally:function(e){var t=u(this,a("Promise")),n=c(e);return this.then(n?function(n){return l(t,e()).then((function(){return n}))}:e,n?function(n){return l(t,e()).then((function(){throw n}))}:e)}}),!i&&c(s)){var f=a("Promise").prototype["finally"];s.prototype["finally"]!==f&&h(s.prototype,"finally",f,{unsafe:!0})}},a9e3:function(e,t,n){"use strict";var r=n("83ab"),i=n("da84"),s=n("e330"),o=n("94ca"),a=n("6eeb"),c=n("1a2d"),u=n("7156"),l=n("3a9b"),h=n("d9b5"),d=n("c04e"),f=n("d039"),p=n("241c").f,g=n("06cf").f,m=n("9bf2").f,v=n("408a"),y=n("58a8").trim,b="Number",w=i[b],_=w.prototype,I=i.TypeError,E=s("".slice),T=s("".charCodeAt),S=function(e){var t=d(e,"number");return"bigint"==typeof t?t:O(t)},O=function(e){var t,n,r,i,s,o,a,c,u=d(e,"number");if(h(u))throw I("Cannot convert a Symbol value to a number");if("string"==typeof u&&u.length>2)if(u=y(u),t=T(u,0),43===t||45===t){if(n=T(u,2),88===n||120===n)return NaN}else if(48===t){switch(T(u,1)){case 66:case 98:r=2,i=49;break;case 79:case 111:r=8,i=55;break;default:return+u}for(s=E(u,2),o=s.length,a=0;a<o;a++)if(c=T(s,a),c<48||c>i)return NaN;return parseInt(s,r)}return+u};if(o(b,!w(" 0o1")||!w("0b1")||w("+0x1"))){for(var k,A=function(e){var t=arguments.length<1?0:w(S(e)),n=this;return l(_,n)&&f((function(){v(n)}))?u(Object(t),n,A):t},C=r?p(w):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),x=0;C.length>x;x++)c(w,k=C[x])&&!c(A,k)&&m(A,k,g(w,k));A.prototype=_,_.constructor=A,a(i,b,A)}},abc5:function(e,t,n){"use strict";(function(e){function r(){return i().__VUE_DEVTOOLS_GLOBAL_HOOK__}function i(){return"undefined"!==typeof navigator&&"undefined"!==typeof window?window:"undefined"!==typeof e?e:{}}n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return s}));const s="function"===typeof Proxy}).call(this,n("c8ba"))},ac1f:function(e,t,n){"use strict";var r=n("23e7"),i=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},ad6d:function(e,t,n){"use strict";var r=n("825a");e.exports=function(){var e=r(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},ae93:function(e,t,n){"use strict";var r,i,s,o=n("d039"),a=n("1626"),c=n("7c73"),u=n("e163"),l=n("6eeb"),h=n("b622"),d=n("c430"),f=h("iterator"),p=!1;[].keys&&(s=[].keys(),"next"in s?(i=u(u(s)),i!==Object.prototype&&(r=i)):p=!0);var g=void 0==r||o((function(){var e={};return r[f].call(e)!==e}));g?r={}:d&&(r=c(r)),a(r[f])||l(r,f,(function(){return this})),e.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:p}},aedf:function(e,t,n){"use strict";var r=n("7ded");n.d(t,"a",(function(){return r["a"]}));var i="firebase",s="9.23.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
r["a"].registerVersion(i,s,"app-compat")},b041:function(e,t,n){"use strict";var r=n("00ee"),i=n("f5df");e.exports=r?{}.toString:function(){return"[object "+i(this)+"]"}},b0c0:function(e,t,n){var r=n("83ab"),i=n("5e77").EXISTS,s=n("e330"),o=n("9bf2").f,a=Function.prototype,c=s(a.toString),u=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,l=s(u.exec),h="name";r&&!i&&o(a,h,{configurable:!0,get:function(){try{return l(u,c(this))[1]}catch(e){return""}}})},b575:function(e,t,n){var r,i,s,o,a,c,u,l,h=n("da84"),d=n("0366"),f=n("06cf").f,p=n("2cf4").set,g=n("1cdc"),m=n("d4c3"),v=n("a4b4"),y=n("605d"),b=h.MutationObserver||h.WebKitMutationObserver,w=h.document,_=h.process,I=h.Promise,E=f(h,"queueMicrotask"),T=E&&E.value;T||(r=function(){var e,t;y&&(e=_.domain)&&e.exit();while(i){t=i.fn,i=i.next;try{t()}catch(n){throw i?o():s=void 0,n}}s=void 0,e&&e.enter()},g||y||v||!b||!w?!m&&I&&I.resolve?(u=I.resolve(void 0),u.constructor=I,l=d(u.then,u),o=function(){l(r)}):y?o=function(){_.nextTick(r)}:(p=d(p,h),o=function(){p(r)}):(a=!0,c=w.createTextNode(""),new b(r).observe(c,{characterData:!0}),o=function(){c.data=a=!a})),e.exports=T||function(e){var t={fn:e,next:void 0};s&&(s.next=t),i||(i=t,o()),s=t}},b622:function(e,t,n){var r=n("da84"),i=n("5692"),s=n("1a2d"),o=n("90e3"),a=n("4930"),c=n("fdbf"),u=i("wks"),l=r.Symbol,h=l&&l["for"],d=c?l:l&&l.withoutSetter||o;e.exports=function(e){if(!s(u,e)||!a&&"string"!=typeof u[e]){var t="Symbol."+e;a&&s(l,e)?u[e]=l[e]:u[e]=c&&h?h(t):d(t)}return u[e]}},b64b:function(e,t,n){var r=n("23e7"),i=n("7b0b"),s=n("df75"),o=n("d039"),a=o((function(){s(1)}));r({target:"Object",stat:!0,forced:a},{keys:function(e){return s(i(e))}})},b727:function(e,t,n){var r=n("0366"),i=n("e330"),s=n("44ad"),o=n("7b0b"),a=n("07fa"),c=n("65f0"),u=i([].push),l=function(e){var t=1==e,n=2==e,i=3==e,l=4==e,h=6==e,d=7==e,f=5==e||h;return function(p,g,m,v){for(var y,b,w=o(p),_=s(w),I=r(g,m),E=a(_),T=0,S=v||c,O=t?S(p,E):n||d?S(p,0):void 0;E>T;T++)if((f||T in _)&&(y=_[T],b=I(y,T,w),e))if(t)O[T]=b;else if(b)switch(e){case 3:return!0;case 5:return y;case 6:return T;case 2:u(O,y)}else switch(e){case 4:return!1;case 7:u(O,y)}return h?-1:i||l?l:O}};e.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6),filterReject:l(7)}},c04e:function(e,t,n){var r=n("da84"),i=n("c65b"),s=n("861d"),o=n("d9b5"),a=n("dc4a"),c=n("485a"),u=n("b622"),l=r.TypeError,h=u("toPrimitive");e.exports=function(e,t){if(!s(e)||o(e))return e;var n,r=a(e,h);if(r){if(void 0===t&&(t="default"),n=i(r,e,t),!s(n)||o(n))return n;throw l("Can't convert object to primitive value")}return void 0===t&&(t="number"),c(e,t)}},c430:function(e,t){e.exports=!1},c65b:function(e,t){var n=Function.prototype.call;e.exports=n.bind?n.bind(n):function(){return n.apply(n,arguments)}},c6b6:function(e,t,n){var r=n("e330"),i=r({}.toString),s=r("".slice);e.exports=function(e){return s(i(e),8,-1)}},c6cd:function(e,t,n){var r=n("da84"),i=n("ce4e"),s="__core-js_shared__",o=r[s]||i(s,{});e.exports=o},c8ba:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}e.exports=n},ca84:function(e,t,n){var r=n("e330"),i=n("1a2d"),s=n("fc6a"),o=n("4d64").indexOf,a=n("d012"),c=r([].push);e.exports=function(e,t){var n,r=s(e),u=0,l=[];for(n in r)!i(a,n)&&i(r,n)&&c(l,n);while(t.length>u)i(r,n=t[u++])&&(~o(l,n)||c(l,n));return l}},cc12:function(e,t,n){var r=n("da84"),i=n("861d"),s=r.document,o=i(s)&&i(s.createElement);e.exports=function(e){return o?s.createElement(e):{}}},cca6:function(e,t,n){var r=n("23e7"),i=n("60da");r({target:"Object",stat:!0,forced:Object.assign!==i},{assign:i})},cdf9:function(e,t,n){var r=n("825a"),i=n("861d"),s=n("f069");e.exports=function(e,t){if(r(e),i(t)&&t.constructor===e)return t;var n=s.f(e),o=n.resolve;return o(t),n.promise}},ce4e:function(e,t,n){var r=n("da84"),i=Object.defineProperty;e.exports=function(e,t){try{i(r,e,{value:t,configurable:!0,writable:!0})}catch(n){r[e]=t}return t}},d012:function(e,t){e.exports={}},d039:function(e,t){e.exports=function(e){try{return!!e()}catch(t){return!0}}},d066:function(e,t,n){var r=n("da84"),i=n("1626"),s=function(e){return i(e)?e:void 0};e.exports=function(e,t){return arguments.length<2?s(r[e]):r[e]&&r[e][t]}},d1e7:function(e,t,n){"use strict";var r={}.propertyIsEnumerable,i=Object.getOwnPropertyDescriptor,s=i&&!r.call({1:2},1);t.f=s?function(e){var t=i(this,e);return!!t&&t.enumerable}:r},d28b:function(e,t,n){var r=n("746f");r("iterator")},d2bb:function(e,t,n){var r=n("e330"),i=n("825a"),s=n("3bbe");e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,n={};try{e=r(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set),e(n,[]),t=n instanceof Array}catch(o){}return function(n,r){return i(n),s(r),t?e(n,r):n.__proto__=r,n}}():void 0)},d3b7:function(e,t,n){var r=n("00ee"),i=n("6eeb"),s=n("b041");r||i(Object.prototype,"toString",s,{unsafe:!0})},d44e:function(e,t,n){var r=n("9bf2").f,i=n("1a2d"),s=n("b622"),o=s("toStringTag");e.exports=function(e,t,n){e&&!n&&(e=e.prototype),e&&!i(e,o)&&r(e,o,{configurable:!0,value:t})}},d4c3:function(e,t,n){var r=n("342f"),i=n("da84");e.exports=/ipad|iphone|ipod/i.test(r)&&void 0!==i.Pebble},d81d:function(e,t,n){"use strict";var r=n("23e7"),i=n("b727").map,s=n("1dde"),o=s("map");r({target:"Array",proto:!0,forced:!o},{map:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}})},d9b5:function(e,t,n){var r=n("da84"),i=n("d066"),s=n("1626"),o=n("3a9b"),a=n("fdbf"),c=r.Object;e.exports=a?function(e){return"symbol"==typeof e}:function(e){var t=i("Symbol");return s(t)&&o(t.prototype,c(e))}},da84:function(e,t,n){(function(t){var n=function(e){return e&&e.Math==Math&&e};e.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof t&&t)||function(){return this}()||Function("return this")()}).call(this,n("c8ba"))},dbb4:function(e,t,n){var r=n("23e7"),i=n("83ab"),s=n("56ef"),o=n("fc6a"),a=n("06cf"),c=n("8418");r({target:"Object",stat:!0,sham:!i},{getOwnPropertyDescriptors:function(e){var t,n,r=o(e),i=a.f,u=s(r),l={},h=0;while(u.length>h)n=i(r,t=u[h++]),void 0!==n&&c(l,t,n);return l}})},dc4a:function(e,t,n){var r=n("59ed");e.exports=function(e,t){var n=e[t];return null==n?void 0:r(n)}},ddb0:function(e,t,n){var r=n("da84"),i=n("fdbc"),s=n("785a"),o=n("e260"),a=n("9112"),c=n("b622"),u=c("iterator"),l=c("toStringTag"),h=o.values,d=function(e,t){if(e){if(e[u]!==h)try{a(e,u,h)}catch(r){e[u]=h}if(e[l]||a(e,l,t),i[t])for(var n in o)if(e[n]!==o[n])try{a(e,n,o[n])}catch(r){e[n]=o[n]}}};for(var f in i)d(r[f]&&r[f].prototype,f);d(s,"DOMTokenList")},df75:function(e,t,n){var r=n("ca84"),i=n("7839");e.exports=Object.keys||function(e){return r(e,i)}},df7c:function(e,t,n){(function(e){function n(e,t){for(var n=0,r=e.length-1;r>=0;r--){var i=e[r];"."===i?e.splice(r,1):".."===i?(e.splice(r,1),n++):n&&(e.splice(r,1),n--)}if(t)for(;n--;n)e.unshift("..");return e}function r(e){"string"!==typeof e&&(e+="");var t,n=0,r=-1,i=!0;for(t=e.length-1;t>=0;--t)if(47===e.charCodeAt(t)){if(!i){n=t+1;break}}else-1===r&&(i=!1,r=t+1);return-1===r?"":e.slice(n,r)}function i(e,t){if(e.filter)return e.filter(t);for(var n=[],r=0;r<e.length;r++)t(e[r],r,e)&&n.push(e[r]);return n}t.resolve=function(){for(var t="",r=!1,s=arguments.length-1;s>=-1&&!r;s--){var o=s>=0?arguments[s]:e.cwd();if("string"!==typeof o)throw new TypeError("Arguments to path.resolve must be strings");o&&(t=o+"/"+t,r="/"===o.charAt(0))}return t=n(i(t.split("/"),(function(e){return!!e})),!r).join("/"),(r?"/":"")+t||"."},t.normalize=function(e){var r=t.isAbsolute(e),o="/"===s(e,-1);return e=n(i(e.split("/"),(function(e){return!!e})),!r).join("/"),e||r||(e="."),e&&o&&(e+="/"),(r?"/":"")+e},t.isAbsolute=function(e){return"/"===e.charAt(0)},t.join=function(){var e=Array.prototype.slice.call(arguments,0);return t.normalize(i(e,(function(e,t){if("string"!==typeof e)throw new TypeError("Arguments to path.join must be strings");return e})).join("/"))},t.relative=function(e,n){function r(e){for(var t=0;t<e.length;t++)if(""!==e[t])break;for(var n=e.length-1;n>=0;n--)if(""!==e[n])break;return t>n?[]:e.slice(t,n-t+1)}e=t.resolve(e).substr(1),n=t.resolve(n).substr(1);for(var i=r(e.split("/")),s=r(n.split("/")),o=Math.min(i.length,s.length),a=o,c=0;c<o;c++)if(i[c]!==s[c]){a=c;break}var u=[];for(c=a;c<i.length;c++)u.push("..");return u=u.concat(s.slice(a)),u.join("/")},t.sep="/",t.delimiter=":",t.dirname=function(e){if("string"!==typeof e&&(e+=""),0===e.length)return".";for(var t=e.charCodeAt(0),n=47===t,r=-1,i=!0,s=e.length-1;s>=1;--s)if(t=e.charCodeAt(s),47===t){if(!i){r=s;break}}else i=!1;return-1===r?n?"/":".":n&&1===r?"/":e.slice(0,r)},t.basename=function(e,t){var n=r(e);return t&&n.substr(-1*t.length)===t&&(n=n.substr(0,n.length-t.length)),n},t.extname=function(e){"string"!==typeof e&&(e+="");for(var t=-1,n=0,r=-1,i=!0,s=0,o=e.length-1;o>=0;--o){var a=e.charCodeAt(o);if(47!==a)-1===r&&(i=!1,r=o+1),46===a?-1===t?t=o:1!==s&&(s=1):-1!==t&&(s=-1);else if(!i){n=o+1;break}}return-1===t||-1===r||0===s||1===s&&t===r-1&&t===n+1?"":e.slice(t,r)};var s="b"==="ab".substr(-1)?function(e,t,n){return e.substr(t,n)}:function(e,t,n){return t<0&&(t=e.length+t),e.substr(t,n)}}).call(this,n("4362"))},e01a:function(e,t,n){"use strict";var r=n("23e7"),i=n("83ab"),s=n("da84"),o=n("e330"),a=n("1a2d"),c=n("1626"),u=n("3a9b"),l=n("577e"),h=n("9bf2").f,d=n("e893"),f=s.Symbol,p=f&&f.prototype;if(i&&c(f)&&(!("description"in p)||void 0!==f().description)){var g={},m=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:l(arguments[0]),t=u(p,this)?new f(e):void 0===e?f():f(e);return""===e&&(g[t]=!0),t};d(m,f),m.prototype=p,p.constructor=m;var v="Symbol(test)"==String(f("test")),y=o(p.toString),b=o(p.valueOf),w=/^Symbol\((.*)\)[^)]+$/,_=o("".replace),I=o("".slice);h(p,"description",{configurable:!0,get:function(){var e=b(this),t=y(e);if(a(g,e))return"";var n=v?I(t,7,-1):_(t,w,"$1");return""===n?void 0:n}}),r({global:!0,forced:!0},{Symbol:m})}},e163:function(e,t,n){var r=n("da84"),i=n("1a2d"),s=n("1626"),o=n("7b0b"),a=n("f772"),c=n("e177"),u=a("IE_PROTO"),l=r.Object,h=l.prototype;e.exports=c?l.getPrototypeOf:function(e){var t=o(e);if(i(t,u))return t[u];var n=t.constructor;return s(n)&&t instanceof n?n.prototype:t instanceof l?h:null}},e177:function(e,t,n){var r=n("d039");e.exports=!r((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}))},e181:function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}n.d(t,"a",(function(){return _})),n.d(t,"b",(function(){return I}));var i=!1;if("undefined"!==typeof window){var s={get passive(){i=!0}};window.addEventListener("testPassive",null,s),window.removeEventListener("testPassive",null,s)}var o="undefined"!==typeof window&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&window.navigator.maxTouchPoints>1),a=[],c=!1,u=-1,l=void 0,h=void 0,d=void 0,f=function(e){return a.some((function(t){return!(!t.options.allowTouchMove||!t.options.allowTouchMove(e))}))},p=function(e){var t=e||window.event;return!!f(t.target)||(t.touches.length>1||(t.preventDefault&&t.preventDefault(),!1))},g=function(e){if(void 0===d){var t=!!e&&!0===e.reserveScrollBarGap,n=window.innerWidth-document.documentElement.clientWidth;if(t&&n>0){var r=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right"),10);d=document.body.style.paddingRight,document.body.style.paddingRight=r+n+"px"}}void 0===l&&(l=document.body.style.overflow,document.body.style.overflow="hidden")},m=function(){void 0!==d&&(document.body.style.paddingRight=d,d=void 0),void 0!==l&&(document.body.style.overflow=l,l=void 0)},v=function(){return window.requestAnimationFrame((function(){if(void 0===h){h={position:document.body.style.position,top:document.body.style.top,left:document.body.style.left};var e=window,t=e.scrollY,n=e.scrollX,r=e.innerHeight;document.body.style.position="fixed",document.body.style.top=-t,document.body.style.left=-n,setTimeout((function(){return window.requestAnimationFrame((function(){var e=r-window.innerHeight;e&&t>=r&&(document.body.style.top=-(t+e))}))}),300)}}))},y=function(){if(void 0!==h){var e=-parseInt(document.body.style.top,10),t=-parseInt(document.body.style.left,10);document.body.style.position=h.position,document.body.style.top=h.top,document.body.style.left=h.left,window.scrollTo(t,e),h=void 0}},b=function(e){return!!e&&e.scrollHeight-e.scrollTop<=e.clientHeight},w=function(e,t){var n=e.targetTouches[0].clientY-u;return!f(e.target)&&(t&&0===t.scrollTop&&n>0||b(t)&&n<0?p(e):(e.stopPropagation(),!0))},_=function(e,t){if(e){if(!a.some((function(t){return t.targetElement===e}))){var n={targetElement:e,options:t||{}};a=[].concat(r(a),[n]),o?v():g(t),o&&(e.ontouchstart=function(e){1===e.targetTouches.length&&(u=e.targetTouches[0].clientY)},e.ontouchmove=function(t){1===t.targetTouches.length&&w(t,e)},c||(document.addEventListener("touchmove",p,i?{passive:!1}:void 0),c=!0))}}else console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.")},I=function(e){e?(a=a.filter((function(t){return t.targetElement!==e})),o&&(e.ontouchstart=null,e.ontouchmove=null,c&&0===a.length&&(document.removeEventListener("touchmove",p,i?{passive:!1}:void 0),c=!1)),o?y():m()):console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.")}},e260:function(e,t,n){"use strict";var r=n("fc6a"),i=n("44d2"),s=n("3f8c"),o=n("69f3"),a=n("9bf2").f,c=n("7dd0"),u=n("c430"),l=n("83ab"),h="Array Iterator",d=o.set,f=o.getterFor(h);e.exports=c(Array,"Array",(function(e,t){d(this,{type:h,target:r(e),index:0,kind:t})}),(function(){var e=f(this),t=e.target,n=e.kind,r=e.index++;return!t||r>=t.length?(e.target=void 0,{value:void 0,done:!0}):"keys"==n?{value:r,done:!1}:"values"==n?{value:t[r],done:!1}:{value:[r,t[r]],done:!1}}),"values");var p=s.Arguments=s.Array;if(i("keys"),i("values"),i("entries"),!u&&l&&"values"!==p.name)try{a(p,"name",{value:"values"})}catch(g){}},e2cc:function(e,t,n){var r=n("6eeb");e.exports=function(e,t,n){for(var i in t)r(e,i,t[i],n);return e}},e330:function(e,t){var n=Function.prototype,r=n.bind,i=n.call,s=r&&r.bind(i);e.exports=r?function(e){return e&&s(i,e)}:function(e){return e&&function(){return i.apply(e,arguments)}}},e439:function(e,t,n){var r=n("23e7"),i=n("d039"),s=n("fc6a"),o=n("06cf").f,a=n("83ab"),c=i((function(){o(1)})),u=!a||c;r({target:"Object",stat:!0,forced:u,sham:!a},{getOwnPropertyDescriptor:function(e,t){return o(s(e),t)}})},e538:function(e,t,n){var r=n("b622");t.f=r},e667:function(e,t){e.exports=function(e){try{return{error:!1,value:e()}}catch(t){return{error:!0,value:t}}}},e691:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return l})),n.d(t,"d",(function(){return h}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=[];var i;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(i||(i={}));const s={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},o=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=a[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class u{constructor(e){this.name=e,this._logLevel=o,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in i))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?s[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...e),this._logHandler(this,i.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...e),this._logHandler(this,i.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,i.INFO,...e),this._logHandler(this,i.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,i.WARN,...e),this._logHandler(this,i.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...e),this._logHandler(this,i.ERROR,...e)}}function l(e){r.forEach(t=>{t.setLogLevel(e)})}function h(e,t){for(const n of r){let r=null;t&&t.level&&(r=s[t.level]),n.userLogHandler=null===e?null:(t,n,...s)=>{const o=s.map(e=>{if(null==e)return null;if("string"===typeof e)return e;if("number"===typeof e||"boolean"===typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(t){return null}}).filter(e=>e).join(" ");n>=(null!==r&&void 0!==r?r:t.logLevel)&&e({level:i[n].toLowerCase(),message:o,args:s,type:t.name})}}}},e6cf:function(e,t,n){"use strict";var r,i,s,o,a=n("23e7"),c=n("c430"),u=n("da84"),l=n("d066"),h=n("c65b"),d=n("fea9"),f=n("6eeb"),p=n("e2cc"),g=n("d2bb"),m=n("d44e"),v=n("2626"),y=n("59ed"),b=n("1626"),w=n("861d"),_=n("19aa"),I=n("8925"),E=n("2266"),T=n("1c7e"),S=n("4840"),O=n("2cf4").set,k=n("b575"),A=n("cdf9"),C=n("44de"),x=n("f069"),N=n("e667"),D=n("69f3"),R=n("94ca"),P=n("b622"),j=n("6069"),L=n("605d"),M=n("2d00"),F=P("species"),V="Promise",U=D.getterFor(V),B=D.set,q=D.getterFor(V),z=d&&d.prototype,G=d,$=z,K=u.TypeError,H=u.document,W=u.process,Q=x.f,Y=Q,J=!!(H&&H.createEvent&&u.dispatchEvent),X=b(u.PromiseRejectionEvent),Z="unhandledrejection",ee="rejectionhandled",te=0,ne=1,re=2,ie=1,se=2,oe=!1,ae=R(V,(function(){var e=I(G),t=e!==String(G);if(!t&&66===M)return!0;if(c&&!$["finally"])return!0;if(M>=51&&/native code/.test(e))return!1;var n=new G((function(e){e(1)})),r=function(e){e((function(){}),(function(){}))},i=n.constructor={};return i[F]=r,oe=n.then((function(){}))instanceof r,!oe||!t&&j&&!X})),ce=ae||!T((function(e){G.all(e)["catch"]((function(){}))})),ue=function(e){var t;return!(!w(e)||!b(t=e.then))&&t},le=function(e,t){if(!e.notified){e.notified=!0;var n=e.reactions;k((function(){var r=e.value,i=e.state==ne,s=0;while(n.length>s){var o,a,c,u=n[s++],l=i?u.ok:u.fail,d=u.resolve,f=u.reject,p=u.domain;try{l?(i||(e.rejection===se&&pe(e),e.rejection=ie),!0===l?o=r:(p&&p.enter(),o=l(r),p&&(p.exit(),c=!0)),o===u.promise?f(K("Promise-chain cycle")):(a=ue(o))?h(a,o,d,f):d(o)):f(r)}catch(g){p&&!c&&p.exit(),f(g)}}e.reactions=[],e.notified=!1,t&&!e.rejection&&de(e)}))}},he=function(e,t,n){var r,i;J?(r=H.createEvent("Event"),r.promise=t,r.reason=n,r.initEvent(e,!1,!0),u.dispatchEvent(r)):r={promise:t,reason:n},!X&&(i=u["on"+e])?i(r):e===Z&&C("Unhandled promise rejection",n)},de=function(e){h(O,u,(function(){var t,n=e.facade,r=e.value,i=fe(e);if(i&&(t=N((function(){L?W.emit("unhandledRejection",r,n):he(Z,n,r)})),e.rejection=L||fe(e)?se:ie,t.error))throw t.value}))},fe=function(e){return e.rejection!==ie&&!e.parent},pe=function(e){h(O,u,(function(){var t=e.facade;L?W.emit("rejectionHandled",t):he(ee,t,e.value)}))},ge=function(e,t,n){return function(r){e(t,r,n)}},me=function(e,t,n){e.done||(e.done=!0,n&&(e=n),e.value=t,e.state=re,le(e,!0))},ve=function(e,t,n){if(!e.done){e.done=!0,n&&(e=n);try{if(e.facade===t)throw K("Promise can't be resolved itself");var r=ue(t);r?k((function(){var n={done:!1};try{h(r,t,ge(ve,n,e),ge(me,n,e))}catch(i){me(n,i,e)}})):(e.value=t,e.state=ne,le(e,!1))}catch(i){me({done:!1},i,e)}}};if(ae&&(G=function(e){_(this,$),y(e),h(r,this);var t=U(this);try{e(ge(ve,t),ge(me,t))}catch(n){me(t,n)}},$=G.prototype,r=function(e){B(this,{type:V,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:te,value:void 0})},r.prototype=p($,{then:function(e,t){var n=q(this),r=n.reactions,i=Q(S(this,G));return i.ok=!b(e)||e,i.fail=b(t)&&t,i.domain=L?W.domain:void 0,n.parent=!0,r[r.length]=i,n.state!=te&&le(n,!1),i.promise},catch:function(e){return this.then(void 0,e)}}),i=function(){var e=new r,t=U(e);this.promise=e,this.resolve=ge(ve,t),this.reject=ge(me,t)},x.f=Q=function(e){return e===G||e===s?new i(e):Y(e)},!c&&b(d)&&z!==Object.prototype)){o=z.then,oe||(f(z,"then",(function(e,t){var n=this;return new G((function(e,t){h(o,n,e,t)})).then(e,t)}),{unsafe:!0}),f(z,"catch",$["catch"],{unsafe:!0}));try{delete z.constructor}catch(ye){}g&&g(z,$)}a({global:!0,wrap:!0,forced:ae},{Promise:G}),m(G,V,!1,!0),v(V),s=l(V),a({target:V,stat:!0,forced:ae},{reject:function(e){var t=Q(this);return h(t.reject,void 0,e),t.promise}}),a({target:V,stat:!0,forced:c||ae},{resolve:function(e){return A(c&&this===s?G:this,e)}}),a({target:V,stat:!0,forced:ce},{all:function(e){var t=this,n=Q(t),r=n.resolve,i=n.reject,s=N((function(){var n=y(t.resolve),s=[],o=0,a=1;E(e,(function(e){var c=o++,u=!1;a++,h(n,t,e).then((function(e){u||(u=!0,s[c]=e,--a||r(s))}),i)})),--a||r(s)}));return s.error&&i(s.value),n.promise},race:function(e){var t=this,n=Q(t),r=n.reject,i=N((function(){var i=y(t.resolve);E(e,(function(e){h(i,t,e).then(n.resolve,r)}))}));return i.error&&r(i.value),n.promise}})},e893:function(e,t,n){var r=n("1a2d"),i=n("56ef"),s=n("06cf"),o=n("9bf2");e.exports=function(e,t,n){for(var a=i(t),c=o.f,u=s.f,l=0;l<a.length;l++){var h=a[l];r(e,h)||n&&r(n,h)||c(e,h,u(t,h))}}},e8b5:function(e,t,n){var r=n("c6b6");e.exports=Array.isArray||function(e){return"Array"==r(e)}},e95a:function(e,t,n){var r=n("b622"),i=n("3f8c"),s=r("iterator"),o=Array.prototype;e.exports=function(e){return void 0!==e&&(i.Array===e||o[s]===e)}},e9f8:function(e,t,n){"use strict";n("5994")},f069:function(e,t,n){"use strict";var r=n("59ed"),i=function(e){var t,n;this.promise=new e((function(e,r){if(void 0!==t||void 0!==n)throw TypeError("Bad Promise constructor");t=e,n=r})),this.resolve=r(t),this.reject=r(n)};e.exports.f=function(e){return new i(e)}},f36a:function(e,t,n){var r=n("e330");e.exports=r([].slice)},f5df:function(e,t,n){var r=n("da84"),i=n("00ee"),s=n("1626"),o=n("c6b6"),a=n("b622"),c=a("toStringTag"),u=r.Object,l="Arguments"==o(function(){return arguments}()),h=function(e,t){try{return e[t]}catch(n){}};e.exports=i?o:function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=h(t=u(e),c))?n:l?o(t):"Object"==(r=o(t))&&s(t.callee)?"Arguments":r}},f772:function(e,t,n){var r=n("5692"),i=n("90e3"),s=r("keys");e.exports=function(e){return s[e]||(s[e]=i(e))}},fb6a:function(e,t,n){"use strict";var r=n("23e7"),i=n("da84"),s=n("e8b5"),o=n("68ee"),a=n("861d"),c=n("23cb"),u=n("07fa"),l=n("fc6a"),h=n("8418"),d=n("b622"),f=n("1dde"),p=n("f36a"),g=f("slice"),m=d("species"),v=i.Array,y=Math.max;r({target:"Array",proto:!0,forced:!g},{slice:function(e,t){var n,r,i,d=l(this),f=u(d),g=c(e,f),b=c(void 0===t?f:t,f);if(s(d)&&(n=d.constructor,o(n)&&(n===v||s(n.prototype))?n=void 0:a(n)&&(n=n[m],null===n&&(n=void 0)),n===v||void 0===n))return p(d,g,b);for(r=new(void 0===n?v:n)(y(b-g,0)),i=0;g<b;g++,i++)g in d&&h(r,i,d[g]);return r.length=i,r}})},fc6a:function(e,t,n){var r=n("44ad"),i=n("1d80");e.exports=function(e){return r(i(e))}},fce3:function(e,t,n){var r=n("d039"),i=n("da84"),s=i.RegExp;e.exports=r((function(){var e=s(".","s");return!(e.dotAll&&e.exec("\n")&&"s"===e.flags)}))},fdbc:function(e,t){e.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},fdbf:function(e,t,n){var r=n("4930");e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},fea9:function(e,t,n){var r=n("da84");e.exports=r.Promise}}]);
//# sourceMappingURL=chunk-vendors.f10b4bcf.js.map