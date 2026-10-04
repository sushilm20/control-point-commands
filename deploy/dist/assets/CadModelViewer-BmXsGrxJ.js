import{c as jl,w as ih,q as rh,r as on,j as bt,B as sh,M as ah,X as oh,x as lh}from"./index-CrBFnu9-.js";/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ch=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]],uh=jl("grid-3x3",ch);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hh=[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",key:"1p45f6"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}]],dh=jl("rotate-cw",hh);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ao="186",Xi={ROTATE:0,DOLLY:1,PAN:2},Vi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},fh=0,Vo=1,ph=2,as=1,mh=2,ur=3,Si=0,rn=1,bn=2,Jn=0,fr=1,Wo=2,Xo=3,Yo=4,_h=5,Hi=100,gh=101,vh=102,xh=103,Sh=104,Mh=200,Eh=201,yh=202,bh=203,Ql=204,ec=205,Th=206,wh=207,Ah=208,Rh=209,Ch=210,Ph=211,Dh=212,Lh=213,Uh=214,va=0,xa=1,Sa=2,_r=3,Ma=4,Ea=5,ya=6,ba=7,tc=0,Ih=1,Nh=2,Bn=0,nc=1,ic=2,rc=3,sc=4,ac=5,oc=6,lc=7,cc=300,Mi=301,$i=302,Fs=303,Os=304,Ss=306,Ta=1e3,Zn=1001,wa=1002,qt=1003,Fh=1004,Nr=1005,Jt=1006,Bs=1007,vi=1008,hn=1009,uc=1010,hc=1011,gr=1012,oo=1013,kn=1014,Fn=1015,zn=1016,lo=1017,co=1018,vr=1020,dc=35902,fc=35899,pc=1021,mc=1022,wn=1023,Qn=1026,xi=1027,_c=1028,uo=1029,Ei=1030,ho=1031,fo=1033,os=33776,ls=33777,cs=33778,us=33779,Aa=35840,Ra=35841,Ca=35842,Pa=35843,Da=36196,La=37492,Ua=37496,Ia=37488,Na=37489,ds=37490,Fa=37491,Oa=37808,Ba=37809,ka=37810,za=37811,Ha=37812,Ga=37813,Va=37814,Wa=37815,Xa=37816,Ya=37817,qa=37818,$a=37819,Ka=37820,Za=37821,Ja=36492,ja=36494,Qa=36495,eo=36283,to=36284,fs=36285,no=36286,Oh=3200,io=0,Bh=1,li="",un="srgb",ps="srgb-linear",ms="linear",Mt="srgb",ks=7680,kh=519,zh=512,Hh=513,Gh=514,po=515,Vh=516,Wh=517,mo=518,Xh=519,Yh=35044,qo="300 es",On=2e3,xr=2001;function qh(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function _s(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function $h(){const i=_s("canvas");return i.style.display="block",i}const $o={};function Ko(...i){const e="THREE."+i.shift();console.log(e,...i)}function gc(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function We(...i){i=gc(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function gt(...i){i=gc(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Yi(...i){const e=i.join(" ");e in $o||($o[e]=!0,We(...i))}function Kh(i,e,t){return new Promise(function(n,r){function a(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:n()}}setTimeout(a,t)})}const Zh={[va]:xa,[Sa]:ya,[Ma]:ba,[_r]:Ea,[xa]:va,[ya]:Sa,[ba]:Ma,[Ea]:_r};class hi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let a=0,l=r.length;a<l;a++)r[a].call(this,e);e.target=null}}}const Kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Zo=1234567;const pr=Math.PI/180,Sr=180/Math.PI;function Zi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Kt[i&255]+Kt[i>>8&255]+Kt[i>>16&255]+Kt[i>>24&255]+"-"+Kt[e&255]+Kt[e>>8&255]+"-"+Kt[e>>16&15|64]+Kt[e>>24&255]+"-"+Kt[t&63|128]+Kt[t>>8&255]+"-"+Kt[t>>16&255]+Kt[t>>24&255]+Kt[n&255]+Kt[n>>8&255]+Kt[n>>16&255]+Kt[n>>24&255]).toLowerCase()}function rt(i,e,t){return Math.max(e,Math.min(t,i))}function _o(i,e){return(i%e+e)%e}function Jh(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function jh(i,e,t){return i!==e?(t-i)/(e-i):0}function mr(i,e,t){return(1-t)*i+t*e}function Qh(i,e,t,n){return mr(i,e,1-Math.exp(-t*n))}function ed(i,e=1){return e-Math.abs(_o(i,e*2)-e)}function td(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function nd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function id(i,e){return i+Math.floor(Math.random()*(e-i+1))}function rd(i,e){return i+Math.random()*(e-i)}function sd(i){return i*(.5-Math.random())}function ad(i){i!==void 0&&(Zo=i);let e=Zo+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function od(i){return i*pr}function ld(i){return i*Sr}function cd(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function ud(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function hd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function dd(i,e,t,n,r){const a=Math.cos,l=Math.sin,c=a(t/2),d=l(t/2),h=a((e+n)/2),m=l((e+n)/2),g=a((e-n)/2),f=l((e-n)/2),v=a((n-e)/2),T=l((n-e)/2);switch(r){case"XYX":i.set(c*m,d*g,d*f,c*h);break;case"YZY":i.set(d*f,c*m,d*g,c*h);break;case"ZXZ":i.set(d*g,d*f,c*m,c*h);break;case"XZX":i.set(c*m,d*T,d*v,c*h);break;case"YXY":i.set(d*v,c*m,d*T,c*h);break;case"ZYZ":i.set(d*T,d*v,c*m,c*h);break;default:We("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Gi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function jt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const vc={DEG2RAD:pr,RAD2DEG:Sr,generateUUID:Zi,clamp:rt,euclideanModulo:_o,mapLinear:Jh,inverseLerp:jh,lerp:mr,damp:Qh,pingpong:ed,smoothstep:td,smootherstep:nd,randInt:id,randFloat:rd,randFloatSpread:sd,seededRandom:ad,degToRad:od,radToDeg:ld,isPowerOfTwo:cd,ceilPowerOfTwo:ud,floorPowerOfTwo:hd,setQuaternionFromProperEuler:dd,normalize:jt,denormalize:Gi},yo=class yo{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(rt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),a=this.x-e.x,l=this.y-e.y;return this.x=a*n-l*r+e.x,this.y=a*r+l*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};yo.prototype.isVector2=!0;let Ke=yo;class ci{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,a,l,c){let d=n[r+0],h=n[r+1],m=n[r+2],g=n[r+3],f=a[l+0],v=a[l+1],T=a[l+2],A=a[l+3];if(g!==A||d!==f||h!==v||m!==T){let S=d*f+h*v+m*T+g*A;S<0&&(f=-f,v=-v,T=-T,A=-A,S=-S);let _=1-c;if(S<.9995){const I=Math.acos(S),H=Math.sin(I);_=Math.sin(_*I)/H,c=Math.sin(c*I)/H,d=d*_+f*c,h=h*_+v*c,m=m*_+T*c,g=g*_+A*c}else{d=d*_+f*c,h=h*_+v*c,m=m*_+T*c,g=g*_+A*c;const I=1/Math.sqrt(d*d+h*h+m*m+g*g);d*=I,h*=I,m*=I,g*=I}}e[t]=d,e[t+1]=h,e[t+2]=m,e[t+3]=g}static multiplyQuaternionsFlat(e,t,n,r,a,l){const c=n[r],d=n[r+1],h=n[r+2],m=n[r+3],g=a[l],f=a[l+1],v=a[l+2],T=a[l+3];return e[t]=c*T+m*g+d*v-h*f,e[t+1]=d*T+m*f+h*g-c*v,e[t+2]=h*T+m*v+c*f-d*g,e[t+3]=m*T-c*g-d*f-h*v,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,a=e._z,l=e._order,c=Math.cos,d=Math.sin,h=c(n/2),m=c(r/2),g=c(a/2),f=d(n/2),v=d(r/2),T=d(a/2);switch(l){case"XYZ":this._x=f*m*g+h*v*T,this._y=h*v*g-f*m*T,this._z=h*m*T+f*v*g,this._w=h*m*g-f*v*T;break;case"YXZ":this._x=f*m*g+h*v*T,this._y=h*v*g-f*m*T,this._z=h*m*T-f*v*g,this._w=h*m*g+f*v*T;break;case"ZXY":this._x=f*m*g-h*v*T,this._y=h*v*g+f*m*T,this._z=h*m*T+f*v*g,this._w=h*m*g-f*v*T;break;case"ZYX":this._x=f*m*g-h*v*T,this._y=h*v*g+f*m*T,this._z=h*m*T-f*v*g,this._w=h*m*g+f*v*T;break;case"YZX":this._x=f*m*g+h*v*T,this._y=h*v*g+f*m*T,this._z=h*m*T-f*v*g,this._w=h*m*g-f*v*T;break;case"XZY":this._x=f*m*g-h*v*T,this._y=h*v*g-f*m*T,this._z=h*m*T+f*v*g,this._w=h*m*g+f*v*T;break;default:We("Quaternion: .setFromEuler() encountered an unknown order: "+l)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],a=t[8],l=t[1],c=t[5],d=t[9],h=t[2],m=t[6],g=t[10],f=n+c+g;if(f>0){const v=.5/Math.sqrt(f+1);this._w=.25/v,this._x=(m-d)*v,this._y=(a-h)*v,this._z=(l-r)*v}else if(n>c&&n>g){const v=2*Math.sqrt(1+n-c-g);this._w=(m-d)/v,this._x=.25*v,this._y=(r+l)/v,this._z=(a+h)/v}else if(c>g){const v=2*Math.sqrt(1+c-n-g);this._w=(a-h)/v,this._x=(r+l)/v,this._y=.25*v,this._z=(d+m)/v}else{const v=2*Math.sqrt(1+g-n-c);this._w=(l-r)/v,this._x=(a+h)/v,this._y=(d+m)/v,this._z=.25*v}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,a=e._z,l=e._w,c=t._x,d=t._y,h=t._z,m=t._w;return this._x=n*m+l*c+r*h-a*d,this._y=r*m+l*d+a*c-n*h,this._z=a*m+l*h+n*d-r*c,this._w=l*m-n*c-r*d-a*h,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,a=e._z,l=e._w,c=this.dot(e);c<0&&(n=-n,r=-r,a=-a,l=-l,c=-c);let d=1-t;if(c<.9995){const h=Math.acos(c),m=Math.sin(h);d=Math.sin(d*h)/m,t=Math.sin(t*h)/m,this._x=this._x*d+n*t,this._y=this._y*d+r*t,this._z=this._z*d+a*t,this._w=this._w*d+l*t,this._onChangeCallback()}else this._x=this._x*d+n*t,this._y=this._y*d+r*t,this._z=this._z*d+a*t,this._w=this._w*d+l*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const bo=class bo{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Jo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Jo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*r,this.y=a[1]*t+a[4]*n+a[7]*r,this.z=a[2]*t+a[5]*n+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=e.elements,l=1/(a[3]*t+a[7]*n+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*r+a[12])*l,this.y=(a[1]*t+a[5]*n+a[9]*r+a[13])*l,this.z=(a[2]*t+a[6]*n+a[10]*r+a[14])*l,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,a=e.x,l=e.y,c=e.z,d=e.w,h=2*(l*r-c*n),m=2*(c*t-a*r),g=2*(a*n-l*t);return this.x=t+d*h+l*g-c*m,this.y=n+d*m+c*h-a*g,this.z=r+d*g+a*m-l*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r,this.y=a[1]*t+a[5]*n+a[9]*r,this.z=a[2]*t+a[6]*n+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(rt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,a=e.z,l=t.x,c=t.y,d=t.z;return this.x=r*d-a*c,this.y=a*l-n*d,this.z=n*c-r*l,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return zs.copy(this).projectOnVector(e),this.sub(zs)}reflect(e){return this.sub(zs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};bo.prototype.isVector3=!0;let J=bo;const zs=new J,Jo=new ci,To=class To{constructor(e,t,n,r,a,l,c,d,h){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,l,c,d,h)}set(e,t,n,r,a,l,c,d,h){const m=this.elements;return m[0]=e,m[1]=r,m[2]=c,m[3]=t,m[4]=a,m[5]=d,m[6]=n,m[7]=l,m[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,l=n[0],c=n[3],d=n[6],h=n[1],m=n[4],g=n[7],f=n[2],v=n[5],T=n[8],A=r[0],S=r[3],_=r[6],I=r[1],H=r[4],w=r[7],P=r[2],R=r[5],N=r[8];return a[0]=l*A+c*I+d*P,a[3]=l*S+c*H+d*R,a[6]=l*_+c*w+d*N,a[1]=h*A+m*I+g*P,a[4]=h*S+m*H+g*R,a[7]=h*_+m*w+g*N,a[2]=f*A+v*I+T*P,a[5]=f*S+v*H+T*R,a[8]=f*_+v*w+T*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],l=e[4],c=e[5],d=e[6],h=e[7],m=e[8];return t*l*m-t*c*h-n*a*m+n*c*d+r*a*h-r*l*d}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],l=e[4],c=e[5],d=e[6],h=e[7],m=e[8],g=m*l-c*h,f=c*d-m*a,v=h*a-l*d,T=t*g+n*f+r*v;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/T;return e[0]=g*A,e[1]=(r*h-m*n)*A,e[2]=(c*n-r*l)*A,e[3]=f*A,e[4]=(m*t-r*d)*A,e[5]=(r*a-c*t)*A,e[6]=v*A,e[7]=(n*d-h*t)*A,e[8]=(l*t-n*a)*A,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,a,l,c){const d=Math.cos(a),h=Math.sin(a);return this.set(n*d,n*h,-n*(d*l+h*c)+l+e,-r*h,r*d,-r*(-h*l+d*c)+c+t,0,0,1),this}scale(e,t){return Yi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Hs.makeScale(e,t)),this}rotate(e){return Yi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Hs.makeRotation(-e)),this}translate(e,t){return Yi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Hs.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};To.prototype.isMatrix3=!0;let Ze=To;const Hs=new Ze,jo=new Ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Qo=new Ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function fd(){const i={enabled:!0,workingColorSpace:ps,spaces:{},convert:function(r,a,l){return this.enabled===!1||a===l||!a||!l||(this.spaces[a].transfer===Mt&&(r.r=jn(r.r),r.g=jn(r.g),r.b=jn(r.b)),this.spaces[a].primaries!==this.spaces[l].primaries&&(r.applyMatrix3(this.spaces[a].toXYZ),r.applyMatrix3(this.spaces[l].fromXYZ)),this.spaces[l].transfer===Mt&&(r.r=qi(r.r),r.g=qi(r.g),r.b=qi(r.b))),r},workingToColorSpace:function(r,a){return this.convert(r,this.workingColorSpace,a)},colorSpaceToWorking:function(r,a){return this.convert(r,a,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===li?ms:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,a=this.workingColorSpace){return r.fromArray(this.spaces[a].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,a,l){return r.copy(this.spaces[a].toXYZ).multiply(this.spaces[l].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,a){return Yi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,a)},toWorkingColorSpace:function(r,a){return Yi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,a)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ps]:{primaries:e,whitePoint:n,transfer:ms,toXYZ:jo,fromXYZ:Qo,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:un},outputColorSpaceConfig:{drawingBufferColorSpace:un}},[un]:{primaries:e,whitePoint:n,transfer:Mt,toXYZ:jo,fromXYZ:Qo,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:un}}}),i}const lt=fd();function jn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function qi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ri;class pd{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ri===void 0&&(Ri=_s("canvas")),Ri.width=e.width,Ri.height=e.height;const r=Ri.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Ri}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=_s("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),a=r.data;for(let l=0;l<a.length;l++)a[l]=jn(a[l]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(jn(t[n]/255)*255):t[n]=jn(t[n]);return{data:t,width:e.width,height:e.height}}else return We("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let md=0;class go{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:md++}),this.uuid=Zi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let l=0,c=r.length;l<c;l++)r[l].isDataTexture?a.push(Gs(r[l].image)):a.push(Gs(r[l]))}else a=Gs(r);n.url=a}return t||(e.images[this.uuid]=n),n}}function Gs(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?pd.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(We("Texture: Unable to serialize Texture."),{})}let _d=0;const Vs=new J;class en extends hi{constructor(e=en.DEFAULT_IMAGE,t=en.DEFAULT_MAPPING,n=Zn,r=Zn,a=Jt,l=vi,c=wn,d=hn,h=en.DEFAULT_ANISOTROPY,m=li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_d++}),this.uuid=Zi(),this.name="",this.source=new go(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=a,this.minFilter=l,this.anisotropy=h,this.format=c,this.internalFormat=null,this.type=d,this.offset=new Ke(0,0),this.repeat=new Ke(1,1),this.center=new Ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Vs).x}get height(){return this.source.getSize(Vs).y}get depth(){return this.source.getSize(Vs).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){We(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){We(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==cc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ta:e.x=e.x-Math.floor(e.x);break;case Zn:e.x=e.x<0?0:1;break;case wa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ta:e.y=e.y-Math.floor(e.y);break;case Zn:e.y=e.y<0?0:1;break;case wa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}en.DEFAULT_IMAGE=null;en.DEFAULT_MAPPING=cc;en.DEFAULT_ANISOTROPY=1;const wo=class wo{constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=this.w,l=e.elements;return this.x=l[0]*t+l[4]*n+l[8]*r+l[12]*a,this.y=l[1]*t+l[5]*n+l[9]*r+l[13]*a,this.z=l[2]*t+l[6]*n+l[10]*r+l[14]*a,this.w=l[3]*t+l[7]*n+l[11]*r+l[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,a;const d=e.elements,h=d[0],m=d[4],g=d[8],f=d[1],v=d[5],T=d[9],A=d[2],S=d[6],_=d[10];if(Math.abs(m-f)<.01&&Math.abs(g-A)<.01&&Math.abs(T-S)<.01){if(Math.abs(m+f)<.1&&Math.abs(g+A)<.1&&Math.abs(T+S)<.1&&Math.abs(h+v+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const H=(h+1)/2,w=(v+1)/2,P=(_+1)/2,R=(m+f)/4,N=(g+A)/4,E=(T+S)/4;return H>w&&H>P?H<.01?(n=0,r=.707106781,a=.707106781):(n=Math.sqrt(H),r=R/n,a=N/n):w>P?w<.01?(n=.707106781,r=0,a=.707106781):(r=Math.sqrt(w),n=R/r,a=E/r):P<.01?(n=.707106781,r=.707106781,a=0):(a=Math.sqrt(P),n=N/a,r=E/a),this.set(n,r,a,t),this}let I=Math.sqrt((S-T)*(S-T)+(g-A)*(g-A)+(f-m)*(f-m));return Math.abs(I)<.001&&(I=1),this.x=(S-T)/I,this.y=(g-A)/I,this.z=(f-m)/I,this.w=Math.acos((h+v+_-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this.w=rt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this.w=rt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(rt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};wo.prototype.isVector4=!0;let Lt=wo;class gd extends hi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Jt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Lt(0,0,e,t),this.scissorTest=!1,this.viewport=new Lt(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:n.depth},a=new en(r),l=n.count;for(let c=0;c<l;c++)this.textures[c]=a.clone(),this.textures[c].isRenderTargetTexture=!0,this.textures[c].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Jt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new go(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class An extends gd{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class xc extends en{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=qt,this.minFilter=qt,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class vd extends en{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=qt,this.minFilter=qt,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const xs=class xs{constructor(e,t,n,r,a,l,c,d,h,m,g,f,v,T,A,S){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,l,c,d,h,m,g,f,v,T,A,S)}set(e,t,n,r,a,l,c,d,h,m,g,f,v,T,A,S){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=r,_[1]=a,_[5]=l,_[9]=c,_[13]=d,_[2]=h,_[6]=m,_[10]=g,_[14]=f,_[3]=v,_[7]=T,_[11]=A,_[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xs().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,r=1/Ci.setFromMatrixColumn(e,0).length(),a=1/Ci.setFromMatrixColumn(e,1).length(),l=1/Ci.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*l,t[9]=n[9]*l,t[10]=n[10]*l,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,a=e.z,l=Math.cos(n),c=Math.sin(n),d=Math.cos(r),h=Math.sin(r),m=Math.cos(a),g=Math.sin(a);if(e.order==="XYZ"){const f=l*m,v=l*g,T=c*m,A=c*g;t[0]=d*m,t[4]=-d*g,t[8]=h,t[1]=v+T*h,t[5]=f-A*h,t[9]=-c*d,t[2]=A-f*h,t[6]=T+v*h,t[10]=l*d}else if(e.order==="YXZ"){const f=d*m,v=d*g,T=h*m,A=h*g;t[0]=f+A*c,t[4]=T*c-v,t[8]=l*h,t[1]=l*g,t[5]=l*m,t[9]=-c,t[2]=v*c-T,t[6]=A+f*c,t[10]=l*d}else if(e.order==="ZXY"){const f=d*m,v=d*g,T=h*m,A=h*g;t[0]=f-A*c,t[4]=-l*g,t[8]=T+v*c,t[1]=v+T*c,t[5]=l*m,t[9]=A-f*c,t[2]=-l*h,t[6]=c,t[10]=l*d}else if(e.order==="ZYX"){const f=l*m,v=l*g,T=c*m,A=c*g;t[0]=d*m,t[4]=T*h-v,t[8]=f*h+A,t[1]=d*g,t[5]=A*h+f,t[9]=v*h-T,t[2]=-h,t[6]=c*d,t[10]=l*d}else if(e.order==="YZX"){const f=l*d,v=l*h,T=c*d,A=c*h;t[0]=d*m,t[4]=A-f*g,t[8]=T*g+v,t[1]=g,t[5]=l*m,t[9]=-c*m,t[2]=-h*m,t[6]=v*g+T,t[10]=f-A*g}else if(e.order==="XZY"){const f=l*d,v=l*h,T=c*d,A=c*h;t[0]=d*m,t[4]=-g,t[8]=h*m,t[1]=f*g+A,t[5]=l*m,t[9]=v*g-T,t[2]=T*g-v,t[6]=c*m,t[10]=A*g+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(xd,e,Sd)}lookAt(e,t,n){const r=this.elements;return ln.subVectors(e,t),ln.lengthSq()===0&&(ln.z=1),ln.normalize(),ii.crossVectors(n,ln),ii.lengthSq()===0&&(Math.abs(n.z)===1?ln.x+=1e-4:ln.z+=1e-4,ln.normalize(),ii.crossVectors(n,ln)),ii.normalize(),Fr.crossVectors(ln,ii),r[0]=ii.x,r[4]=Fr.x,r[8]=ln.x,r[1]=ii.y,r[5]=Fr.y,r[9]=ln.y,r[2]=ii.z,r[6]=Fr.z,r[10]=ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,l=n[0],c=n[4],d=n[8],h=n[12],m=n[1],g=n[5],f=n[9],v=n[13],T=n[2],A=n[6],S=n[10],_=n[14],I=n[3],H=n[7],w=n[11],P=n[15],R=r[0],N=r[4],E=r[8],L=r[12],k=r[1],z=r[5],Y=r[9],$=r[13],O=r[2],K=r[6],ne=r[10],X=r[14],re=r[3],se=r[7],ce=r[11],he=r[15];return a[0]=l*R+c*k+d*O+h*re,a[4]=l*N+c*z+d*K+h*se,a[8]=l*E+c*Y+d*ne+h*ce,a[12]=l*L+c*$+d*X+h*he,a[1]=m*R+g*k+f*O+v*re,a[5]=m*N+g*z+f*K+v*se,a[9]=m*E+g*Y+f*ne+v*ce,a[13]=m*L+g*$+f*X+v*he,a[2]=T*R+A*k+S*O+_*re,a[6]=T*N+A*z+S*K+_*se,a[10]=T*E+A*Y+S*ne+_*ce,a[14]=T*L+A*$+S*X+_*he,a[3]=I*R+H*k+w*O+P*re,a[7]=I*N+H*z+w*K+P*se,a[11]=I*E+H*Y+w*ne+P*ce,a[15]=I*L+H*$+w*X+P*he,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],a=e[12],l=e[1],c=e[5],d=e[9],h=e[13],m=e[2],g=e[6],f=e[10],v=e[14],T=e[3],A=e[7],S=e[11],_=e[15],I=d*v-h*f,H=c*v-h*g,w=c*f-d*g,P=l*v-h*m,R=l*f-d*m,N=l*g-c*m;return t*(A*I-S*H+_*w)-n*(T*I-S*P+_*R)+r*(T*H-A*P+_*N)-a*(T*w-A*R+S*N)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],r=e[8],a=e[1],l=e[5],c=e[9],d=e[2],h=e[6],m=e[10];return t*(l*m-c*h)-n*(a*m-c*d)+r*(a*h-l*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],l=e[4],c=e[5],d=e[6],h=e[7],m=e[8],g=e[9],f=e[10],v=e[11],T=e[12],A=e[13],S=e[14],_=e[15],I=t*c-n*l,H=t*d-r*l,w=t*h-a*l,P=n*d-r*c,R=n*h-a*c,N=r*h-a*d,E=m*A-g*T,L=m*S-f*T,k=m*_-v*T,z=g*S-f*A,Y=g*_-v*A,$=f*_-v*S,O=I*$-H*Y+w*z+P*k-R*L+N*E;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const K=1/O;return e[0]=(c*$-d*Y+h*z)*K,e[1]=(r*Y-n*$-a*z)*K,e[2]=(A*N-S*R+_*P)*K,e[3]=(f*R-g*N-v*P)*K,e[4]=(d*k-l*$-h*L)*K,e[5]=(t*$-r*k+a*L)*K,e[6]=(S*w-T*N-_*H)*K,e[7]=(m*N-f*w+v*H)*K,e[8]=(l*Y-c*k+h*E)*K,e[9]=(n*k-t*Y-a*E)*K,e[10]=(T*R-A*w+_*I)*K,e[11]=(g*w-m*R-v*I)*K,e[12]=(c*L-l*z-d*E)*K,e[13]=(t*z-n*L+r*E)*K,e[14]=(A*H-T*P-S*I)*K,e[15]=(m*P-g*H+f*I)*K,this}scale(e){const t=this.elements,n=e.x,r=e.y,a=e.z;return t[0]*=n,t[4]*=r,t[8]*=a,t[1]*=n,t[5]*=r,t[9]*=a,t[2]*=n,t[6]*=r,t[10]*=a,t[3]*=n,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),a=1-n,l=e.x,c=e.y,d=e.z,h=a*l,m=a*c;return this.set(h*l+n,h*c-r*d,h*d+r*c,0,h*c+r*d,m*c+n,m*d-r*l,0,h*d-r*c,m*d+r*l,a*d*d+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,a,l){return this.set(1,n,a,0,e,1,l,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,a=t._x,l=t._y,c=t._z,d=t._w,h=a+a,m=l+l,g=c+c,f=a*h,v=a*m,T=a*g,A=l*m,S=l*g,_=c*g,I=d*h,H=d*m,w=d*g,P=n.x,R=n.y,N=n.z;return r[0]=(1-(A+_))*P,r[1]=(v+w)*P,r[2]=(T-H)*P,r[3]=0,r[4]=(v-w)*R,r[5]=(1-(f+_))*R,r[6]=(S+I)*R,r[7]=0,r[8]=(T+H)*N,r[9]=(S-I)*N,r[10]=(1-(f+A))*N,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const a=this.determinantAffine();if(a===0)return n.set(1,1,1),t.identity(),this;let l=Ci.set(r[0],r[1],r[2]).length();const c=Ci.set(r[4],r[5],r[6]).length(),d=Ci.set(r[8],r[9],r[10]).length();a<0&&(l=-l),Mn.copy(this);const h=1/l,m=1/c,g=1/d;return Mn.elements[0]*=h,Mn.elements[1]*=h,Mn.elements[2]*=h,Mn.elements[4]*=m,Mn.elements[5]*=m,Mn.elements[6]*=m,Mn.elements[8]*=g,Mn.elements[9]*=g,Mn.elements[10]*=g,t.setFromRotationMatrix(Mn),n.x=l,n.y=c,n.z=d,this}makePerspective(e,t,n,r,a,l,c=On,d=!1){const h=this.elements,m=2*a/(t-e),g=2*a/(n-r),f=(t+e)/(t-e),v=(n+r)/(n-r);let T,A;if(d)T=a/(l-a),A=l*a/(l-a);else if(c===On)T=-(l+a)/(l-a),A=-2*l*a/(l-a);else if(c===xr)T=-l/(l-a),A=-l*a/(l-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return h[0]=m,h[4]=0,h[8]=f,h[12]=0,h[1]=0,h[5]=g,h[9]=v,h[13]=0,h[2]=0,h[6]=0,h[10]=T,h[14]=A,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,n,r,a,l,c=On,d=!1){const h=this.elements,m=2/(t-e),g=2/(n-r),f=-(t+e)/(t-e),v=-(n+r)/(n-r);let T,A;if(d)T=1/(l-a),A=l/(l-a);else if(c===On)T=-2/(l-a),A=-(l+a)/(l-a);else if(c===xr)T=-1/(l-a),A=-a/(l-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return h[0]=m,h[4]=0,h[8]=0,h[12]=f,h[1]=0,h[5]=g,h[9]=0,h[13]=v,h[2]=0,h[6]=0,h[10]=T,h[14]=A,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};xs.prototype.isMatrix4=!0;let Ut=xs;const Ci=new J,Mn=new Ut,xd=new J(0,0,0),Sd=new J(1,1,1),ii=new J,Fr=new J,ln=new J,el=new Ut,tl=new ci;class ui{constructor(e=0,t=0,n=0,r=ui.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,a=r[0],l=r[4],c=r[8],d=r[1],h=r[5],m=r[9],g=r[2],f=r[6],v=r[10];switch(t){case"XYZ":this._y=Math.asin(rt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-m,v),this._z=Math.atan2(-l,a)):(this._x=Math.atan2(f,h),this._z=0);break;case"YXZ":this._x=Math.asin(-rt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(c,v),this._z=Math.atan2(d,h)):(this._y=Math.atan2(-g,a),this._z=0);break;case"ZXY":this._x=Math.asin(rt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-g,v),this._z=Math.atan2(-l,h)):(this._y=0,this._z=Math.atan2(d,a));break;case"ZYX":this._y=Math.asin(-rt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(f,v),this._z=Math.atan2(d,a)):(this._x=0,this._z=Math.atan2(-l,h));break;case"YZX":this._z=Math.asin(rt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-m,h),this._y=Math.atan2(-g,a)):(this._x=0,this._y=Math.atan2(c,v));break;case"XZY":this._z=Math.asin(-rt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(f,h),this._y=Math.atan2(c,a)):(this._x=Math.atan2(-m,v),this._y=0);break;default:We("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return el.makeRotationFromQuaternion(e),this.setFromRotationMatrix(el,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return tl.setFromEuler(this),this.setFromQuaternion(tl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ui.DEFAULT_ORDER="XYZ";class Sc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Md=0;const nl=new J,Pi=new ci,Vn=new Ut,Or=new J,ir=new J,Ed=new J,yd=new ci,il=new J(1,0,0),rl=new J(0,1,0),sl=new J(0,0,1),al={type:"added"},bd={type:"removed"},Di={type:"childadded",child:null},Ws={type:"childremoved",child:null};class Vt extends hi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Md++}),this.uuid=Zi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Vt.DEFAULT_UP.clone();const e=new J,t=new ui,n=new ci,r=new J(1,1,1);function a(){n.setFromEuler(t,!1)}function l(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(l),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ut},normalMatrix:{value:new Ze}}),this.matrix=new Ut,this.matrixWorld=new Ut,this.matrixAutoUpdate=Vt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Sc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Pi.setFromAxisAngle(e,t),this.quaternion.multiply(Pi),this}rotateOnWorldAxis(e,t){return Pi.setFromAxisAngle(e,t),this.quaternion.premultiply(Pi),this}rotateX(e){return this.rotateOnAxis(il,e)}rotateY(e){return this.rotateOnAxis(rl,e)}rotateZ(e){return this.rotateOnAxis(sl,e)}translateOnAxis(e,t){return nl.copy(e).applyQuaternion(this.quaternion),this.position.add(nl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(il,e)}translateY(e){return this.translateOnAxis(rl,e)}translateZ(e){return this.translateOnAxis(sl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Vn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Or.copy(e):Or.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),ir.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vn.lookAt(ir,Or,this.up):Vn.lookAt(Or,ir,this.up),this.quaternion.setFromRotationMatrix(Vn),r&&(Vn.extractRotation(r.matrixWorld),Pi.setFromRotationMatrix(Vn),this.quaternion.premultiply(Pi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(gt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(al),Di.child=e,this.dispatchEvent(Di),Di.child=null):gt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(bd),Ws.child=e,this.dispatchEvent(Ws),Ws.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Vn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Vn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Vn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(al),Di.child=e,this.dispatchEvent(Di),Di.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const l=this.children[n].getObjectByProperty(e,t);if(l!==void 0)return l}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let a=0,l=r.length;a<l;a++)r[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ir,e,Ed),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ir,yd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,r=e.z,a=this.matrix.elements;a[12]+=t-a[0]*t-a[4]*n-a[8]*r,a[13]+=n-a[1]*t-a[5]*n-a[9]*r,a[14]+=r-a[2]*t-a[6]*n-a[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const a=this.children;for(let l=0,c=a.length;l<c;l++)a[l].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(c=>({...c,boundingBox:c.boundingBox?c.boundingBox.toJSON():void 0,boundingSphere:c.boundingSphere?c.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(c=>({...c})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function a(c,d){return c[d.uuid]===void 0&&(c[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const d=c.shapes;if(Array.isArray(d))for(let h=0,m=d.length;h<m;h++){const g=d[h];a(e.shapes,g)}else a(e.shapes,d)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let d=0,h=this.material.length;d<h;d++)c.push(a(e.materials,this.material[d]));r.material=c}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let c=0;c<this.children.length;c++)r.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let c=0;c<this.animations.length;c++){const d=this.animations[c];r.animations.push(a(e.animations,d))}}if(t){const c=l(e.geometries),d=l(e.materials),h=l(e.textures),m=l(e.images),g=l(e.shapes),f=l(e.skeletons),v=l(e.animations),T=l(e.nodes);c.length>0&&(n.geometries=c),d.length>0&&(n.materials=d),h.length>0&&(n.textures=h),m.length>0&&(n.images=m),g.length>0&&(n.shapes=g),f.length>0&&(n.skeletons=f),v.length>0&&(n.animations=v),T.length>0&&(n.nodes=T)}return n.object=r,n;function l(c){const d=[];for(const h in c){const m=c[h];delete m.metadata,d.push(m)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Vt.DEFAULT_UP=new J(0,1,0);Vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class hr extends Vt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Td={type:"move"};class Xs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new hr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new hr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new hr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,a=null,l=null;const c=this._targetRay,d=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){l=!0;for(const A of e.hand.values()){const S=t.getJointPose(A,n),_=this._getHandJoint(h,A);S!==null&&(_.matrix.fromArray(S.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=S.radius),_.visible=S!==null}const m=h.joints["index-finger-tip"],g=h.joints["thumb-tip"],f=m.position.distanceTo(g.position),v=.02,T=.005;h.inputState.pinching&&f>v+T?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&f<=v-T&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1,d.eventsEnabled&&d.dispatchEvent({type:"gripUpdated",data:e,target:this})));c!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&a!==null&&(r=a),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(Td)))}return c!==null&&(c.visible=r!==null),d!==null&&(d.visible=a!==null),h!==null&&(h.visible=l!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new hr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Mc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ri={h:0,s:0,l:0},Br={h:0,s:0,l:0};function Ys(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class tt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=un){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=lt.workingColorSpace){return this.r=e,this.g=t,this.b=n,lt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=lt.workingColorSpace){if(e=_o(e,1),t=rt(t,0,1),n=rt(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,l=2*n-a;this.r=Ys(l,a,e+1/3),this.g=Ys(l,a,e),this.b=Ys(l,a,e-1/3)}return lt.colorSpaceToWorking(this,r),this}setStyle(e,t=un){function n(a){a!==void 0&&parseFloat(a)<1&&We("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const l=r[1],c=r[2];switch(l){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:We("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],l=a.length;if(l===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(l===6)return this.setHex(parseInt(a,16),t);We("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=un){const n=Mc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):We("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=jn(e.r),this.g=jn(e.g),this.b=jn(e.b),this}copyLinearToSRGB(e){return this.r=qi(e.r),this.g=qi(e.g),this.b=qi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=un){return lt.workingToColorSpace(Zt.copy(this),e),Math.round(rt(Zt.r*255,0,255))*65536+Math.round(rt(Zt.g*255,0,255))*256+Math.round(rt(Zt.b*255,0,255))}getHexString(e=un){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=lt.workingColorSpace){lt.workingToColorSpace(Zt.copy(this),t);const n=Zt.r,r=Zt.g,a=Zt.b,l=Math.max(n,r,a),c=Math.min(n,r,a);let d,h;const m=(c+l)/2;if(c===l)d=0,h=0;else{const g=l-c;switch(h=m<=.5?g/(l+c):g/(2-l-c),l){case n:d=(r-a)/g+(r<a?6:0);break;case r:d=(a-n)/g+2;break;case a:d=(n-r)/g+4;break}d/=6}return e.h=d,e.s=h,e.l=m,e}getRGB(e,t=lt.workingColorSpace){return lt.workingToColorSpace(Zt.copy(this),t),e.r=Zt.r,e.g=Zt.g,e.b=Zt.b,e}getStyle(e=un){lt.workingToColorSpace(Zt.copy(this),e);const t=Zt.r,n=Zt.g,r=Zt.b;return e!==un?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(ri),this.setHSL(ri.h+e,ri.s+t,ri.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ri),e.getHSL(Br);const n=mr(ri.h,Br.h,t),r=mr(ri.s,Br.s,t),a=mr(ri.l,Br.l,t);return this.setHSL(n,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*r,this.g=a[1]*t+a[4]*n+a[7]*r,this.b=a[2]*t+a[5]*n+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Zt=new tt;tt.NAMES=Mc;class wd extends Vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ui,this.environmentIntensity=1,this.environmentRotation=new ui,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const En=new J,Wn=new J,qs=new J,Xn=new J,Li=new J,Ui=new J,ol=new J,$s=new J,Ks=new J,Zs=new J,Js=new Lt,js=new Lt,Qs=new Lt;class Tn{constructor(e=new J,t=new J,n=new J){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),En.subVectors(e,t),r.cross(En);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,n,r,a){En.subVectors(r,t),Wn.subVectors(n,t),qs.subVectors(e,t);const l=En.dot(En),c=En.dot(Wn),d=En.dot(qs),h=Wn.dot(Wn),m=Wn.dot(qs),g=l*h-c*c;if(g===0)return a.set(0,0,0),null;const f=1/g,v=(h*d-c*m)*f,T=(l*m-c*d)*f;return a.set(1-v-T,T,v)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Xn)===null?!1:Xn.x>=0&&Xn.y>=0&&Xn.x+Xn.y<=1}static getInterpolation(e,t,n,r,a,l,c,d){return this.getBarycoord(e,t,n,r,Xn)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(a,Xn.x),d.addScaledVector(l,Xn.y),d.addScaledVector(c,Xn.z),d)}static getInterpolatedAttribute(e,t,n,r,a,l){return Js.setScalar(0),js.setScalar(0),Qs.setScalar(0),Js.fromBufferAttribute(e,t),js.fromBufferAttribute(e,n),Qs.fromBufferAttribute(e,r),l.setScalar(0),l.addScaledVector(Js,a.x),l.addScaledVector(js,a.y),l.addScaledVector(Qs,a.z),l}static isFrontFacing(e,t,n,r){return En.subVectors(n,t),Wn.subVectors(e,t),En.cross(Wn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return En.subVectors(this.c,this.b),Wn.subVectors(this.a,this.b),En.cross(Wn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Tn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Tn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,a){return Tn.getInterpolation(e,this.a,this.b,this.c,t,n,r,a)}containsPoint(e){return Tn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Tn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,a=this.c;let l,c;Li.subVectors(r,n),Ui.subVectors(a,n),$s.subVectors(e,n);const d=Li.dot($s),h=Ui.dot($s);if(d<=0&&h<=0)return t.copy(n);Ks.subVectors(e,r);const m=Li.dot(Ks),g=Ui.dot(Ks);if(m>=0&&g<=m)return t.copy(r);const f=d*g-m*h;if(f<=0&&d>=0&&m<=0)return l=d/(d-m),t.copy(n).addScaledVector(Li,l);Zs.subVectors(e,a);const v=Li.dot(Zs),T=Ui.dot(Zs);if(T>=0&&v<=T)return t.copy(a);const A=v*h-d*T;if(A<=0&&h>=0&&T<=0)return c=h/(h-T),t.copy(n).addScaledVector(Ui,c);const S=m*T-v*g;if(S<=0&&g-m>=0&&v-T>=0)return ol.subVectors(a,r),c=(g-m)/(g-m+(v-T)),t.copy(r).addScaledVector(ol,c);const _=1/(S+A+f);return l=A*_,c=f*_,t.copy(n).addScaledVector(Li,l).addScaledVector(Ui,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Ji{constructor(e=new J(1/0,1/0,1/0),t=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(yn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(yn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=yn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let l=0,c=a.count;l<c;l++)e.isMesh===!0?e.getVertexPosition(l,yn):yn.fromBufferAttribute(a,l),yn.applyMatrix4(e.matrixWorld),this.expandByPoint(yn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),kr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),kr.copy(n.boundingBox)),kr.applyMatrix4(e.matrixWorld),this.union(kr)}const r=e.children;for(let a=0,l=r.length;a<l;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,yn),yn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(rr),zr.subVectors(this.max,rr),Ii.subVectors(e.a,rr),Ni.subVectors(e.b,rr),Fi.subVectors(e.c,rr),si.subVectors(Ni,Ii),ai.subVectors(Fi,Ni),fi.subVectors(Ii,Fi);let t=[0,-si.z,si.y,0,-ai.z,ai.y,0,-fi.z,fi.y,si.z,0,-si.x,ai.z,0,-ai.x,fi.z,0,-fi.x,-si.y,si.x,0,-ai.y,ai.x,0,-fi.y,fi.x,0];return!ea(t,Ii,Ni,Fi,zr)||(t=[1,0,0,0,1,0,0,0,1],!ea(t,Ii,Ni,Fi,zr))?!1:(Hr.crossVectors(si,ai),t=[Hr.x,Hr.y,Hr.z],ea(t,Ii,Ni,Fi,zr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,yn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(yn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Yn=[new J,new J,new J,new J,new J,new J,new J,new J],yn=new J,kr=new Ji,Ii=new J,Ni=new J,Fi=new J,si=new J,ai=new J,fi=new J,rr=new J,zr=new J,Hr=new J,pi=new J;function ea(i,e,t,n,r){for(let a=0,l=i.length-3;a<=l;a+=3){pi.fromArray(i,a);const c=r.x*Math.abs(pi.x)+r.y*Math.abs(pi.y)+r.z*Math.abs(pi.z),d=e.dot(pi),h=t.dot(pi),m=n.dot(pi);if(Math.max(-Math.max(d,h,m),Math.min(d,h,m))>c)return!1}return!0}const Nt=new J,Gr=new Ke;let Ad=0;class gn extends hi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ad++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Yh,this.updateRanges=[],this.gpuType=Fn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Gr.fromBufferAttribute(this,t),Gr.applyMatrix3(e),this.setXY(t,Gr.x,Gr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix3(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix4(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyNormalMatrix(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.transformDirection(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Gi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=jt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Gi(t,this.array)),t}setX(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Gi(t,this.array)),t}setY(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Gi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Gi(t,this.array)),t}setW(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=jt(t,this.array),n=jt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=jt(t,this.array),n=jt(n,this.array),r=jt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,a){return e*=this.itemSize,this.normalized&&(t=jt(t,this.array),n=jt(n,this.array),r=jt(r,this.array),a=jt(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class Ec extends gn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class yc extends gn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class $t extends gn{constructor(e,t,n){super(new Float32Array(e),t,n)}}const Rd=new Ji,sr=new J,ta=new J;class Ms{constructor(e=new J,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Rd.setFromPoints(e).getCenter(n);let r=0;for(let a=0,l=e.length;a<l;a++)r=Math.max(r,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;sr.subVectors(e,this.center);const t=sr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(sr,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ta.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(sr.copy(e.center).add(ta)),this.expandByPoint(sr.copy(e.center).sub(ta))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Cd=0;const mn=new Ut,na=new Vt,Oi=new J,cn=new Ji,ar=new Ji,Gt=new J;class sn extends hi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Cd++}),this.uuid=Zi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(qh(e)?yc:Ec)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new Ze().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return mn.makeRotationFromQuaternion(e),this.applyMatrix4(mn),this}rotateX(e){return mn.makeRotationX(e),this.applyMatrix4(mn),this}rotateY(e){return mn.makeRotationY(e),this.applyMatrix4(mn),this}rotateZ(e){return mn.makeRotationZ(e),this.applyMatrix4(mn),this}translate(e,t,n){return mn.makeTranslation(e,t,n),this.applyMatrix4(mn),this}scale(e,t,n){return mn.makeScale(e,t,n),this.applyMatrix4(mn),this}lookAt(e){return na.lookAt(e),na.updateMatrix(),this.applyMatrix4(na.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Oi).negate(),this.translate(Oi.x,Oi.y,Oi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,a=e.length;r<a;r++){const l=e[r];n.push(l.x,l.y,l.z||0)}this.setAttribute("position",new $t(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const a=e[r];t.setXYZ(r,a.x,a.y,a.z||0)}e.length>t.count&&We("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ji);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){gt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const a=t[n];cn.setFromBufferAttribute(a),this.morphTargetsRelative?(Gt.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(Gt),Gt.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(Gt)):(this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&gt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ms);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){gt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new J,1/0);return}if(e){const n=this.boundingSphere.center;if(cn.setFromBufferAttribute(e),t)for(let a=0,l=t.length;a<l;a++){const c=t[a];ar.setFromBufferAttribute(c),this.morphTargetsRelative?(Gt.addVectors(cn.min,ar.min),cn.expandByPoint(Gt),Gt.addVectors(cn.max,ar.max),cn.expandByPoint(Gt)):(cn.expandByPoint(ar.min),cn.expandByPoint(ar.max))}cn.getCenter(n);let r=0;for(let a=0,l=e.count;a<l;a++)Gt.fromBufferAttribute(e,a),r=Math.max(r,n.distanceToSquared(Gt));if(t)for(let a=0,l=t.length;a<l;a++){const c=t[a],d=this.morphTargetsRelative;for(let h=0,m=c.count;h<m;h++)Gt.fromBufferAttribute(c,h),d&&(Oi.fromBufferAttribute(e,h),Gt.add(Oi)),r=Math.max(r,n.distanceToSquared(Gt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&gt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){gt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,a=t.uv;let l=this.getAttribute("tangent");(l===void 0||l.count!==n.count)&&(l=new gn(new Float32Array(4*n.count),4),this.setAttribute("tangent",l));const c=[],d=[];for(let E=0;E<n.count;E++)c[E]=new J,d[E]=new J;const h=new J,m=new J,g=new J,f=new Ke,v=new Ke,T=new Ke,A=new J,S=new J;function _(E,L,k){h.fromBufferAttribute(n,E),m.fromBufferAttribute(n,L),g.fromBufferAttribute(n,k),f.fromBufferAttribute(a,E),v.fromBufferAttribute(a,L),T.fromBufferAttribute(a,k),m.sub(h),g.sub(h),v.sub(f),T.sub(f);const z=1/(v.x*T.y-T.x*v.y);isFinite(z)&&(A.copy(m).multiplyScalar(T.y).addScaledVector(g,-v.y).multiplyScalar(z),S.copy(g).multiplyScalar(v.x).addScaledVector(m,-T.x).multiplyScalar(z),c[E].add(A),c[L].add(A),c[k].add(A),d[E].add(S),d[L].add(S),d[k].add(S))}let I=this.groups;I.length===0&&(I=[{start:0,count:e.count}]);for(let E=0,L=I.length;E<L;++E){const k=I[E],z=k.start,Y=k.count;for(let $=z,O=z+Y;$<O;$+=3)_(e.getX($+0),e.getX($+1),e.getX($+2))}const H=new J,w=new J,P=new J,R=new J;function N(E){P.fromBufferAttribute(r,E),R.copy(P);const L=c[E];H.copy(L),H.sub(P.multiplyScalar(P.dot(L))).normalize(),w.crossVectors(R,L);const z=w.dot(d[E])<0?-1:1;l.setXYZW(E,H.x,H.y,H.z,z)}for(let E=0,L=I.length;E<L;++E){const k=I[E],z=k.start,Y=k.count;for(let $=z,O=z+Y;$<O;$+=3)N(e.getX($+0)),N(e.getX($+1)),N(e.getX($+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new gn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,v=n.count;f<v;f++)n.setXYZ(f,0,0,0);const r=new J,a=new J,l=new J,c=new J,d=new J,h=new J,m=new J,g=new J;if(e)for(let f=0,v=e.count;f<v;f+=3){const T=e.getX(f+0),A=e.getX(f+1),S=e.getX(f+2);r.fromBufferAttribute(t,T),a.fromBufferAttribute(t,A),l.fromBufferAttribute(t,S),m.subVectors(l,a),g.subVectors(r,a),m.cross(g),c.fromBufferAttribute(n,T),d.fromBufferAttribute(n,A),h.fromBufferAttribute(n,S),c.add(m),d.add(m),h.add(m),n.setXYZ(T,c.x,c.y,c.z),n.setXYZ(A,d.x,d.y,d.z),n.setXYZ(S,h.x,h.y,h.z)}else for(let f=0,v=t.count;f<v;f+=3)r.fromBufferAttribute(t,f+0),a.fromBufferAttribute(t,f+1),l.fromBufferAttribute(t,f+2),m.subVectors(l,a),g.subVectors(r,a),m.cross(g),n.setXYZ(f+0,m.x,m.y,m.z),n.setXYZ(f+1,m.x,m.y,m.z),n.setXYZ(f+2,m.x,m.y,m.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Gt.fromBufferAttribute(e,t),Gt.normalize(),e.setXYZ(t,Gt.x,Gt.y,Gt.z)}toNonIndexed(){function e(c,d){const h=c.array,m=c.itemSize,g=c.normalized,f=new h.constructor(d.length*m);let v=0,T=0;for(let A=0,S=d.length;A<S;A++){c.isInterleavedBufferAttribute?v=d[A]*c.data.stride+c.offset:v=d[A]*m;for(let _=0;_<m;_++)f[T++]=h[v++]}return new gn(f,m,g)}if(this.index===null)return We("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new sn,n=this.index.array,r=this.attributes;for(const c in r){const d=r[c],h=e(d,n);t.setAttribute(c,h)}const a=this.morphAttributes;for(const c in a){const d=[],h=a[c];for(let m=0,g=h.length;m<g;m++){const f=h[m],v=e(f,n);d.push(v)}t.morphAttributes[c]=d}t.morphTargetsRelative=this.morphTargetsRelative;const l=this.groups;for(let c=0,d=l.length;c<d;c++){const h=l[c];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const d=this.parameters;for(const h in d)d[h]!==void 0&&(e[h]=d[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const d in n){const h=n[d];e.data.attributes[d]=h.toJSON(e.data)}const r={};let a=!1;for(const d in this.morphAttributes){const h=this.morphAttributes[d],m=[];for(let g=0,f=h.length;g<f;g++){const v=h[g];m.push(v.toJSON(e.data))}m.length>0&&(r[d]=m,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const l=this.groups;l.length>0&&(e.data.groups=JSON.parse(JSON.stringify(l)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere=c.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const h in r){const m=r[h];this.setAttribute(h,m.clone(t))}const a=e.morphAttributes;for(const h in a){const m=[],g=a[h];for(let f=0,v=g.length;f<v;f++)m.push(g[f].clone(t));this.morphAttributes[h]=m}this.morphTargetsRelative=e.morphTargetsRelative;const l=e.groups;for(let h=0,m=l.length;h<m;h++){const g=l[h];this.addGroup(g.start,g.count,g.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ia=new J,Pd=new J,Dd=new Ze;class Kn{constructor(e=new J(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=ia.subVectors(n,t).cross(Pd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const r=e.delta(ia),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/a;return n===!0&&(l<0||l>1)?null:t.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Dd.getNormalMatrix(e),r=this.coplanarPoint(ia).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let Ld=0;class ji extends hi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ld++}),this.uuid=Zi(),this.name="",this.type="Material",this.blending=fr,this.side=Si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ql,this.blendDst=ec,this.blendEquation=Hi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new tt(0,0,0),this.blendAlpha=0,this.depthFunc=_r,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=kh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ks,this.stencilZFail=ks,this.stencilZPass=ks,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){We(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){We(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(a=>a.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(a){const l=[];for(const c in a){const d=a[c];delete d.metadata,l.push(d)}return l}if(t){const a=r(e.textures),l=r(e.images);a.length>0&&(n.textures=a),l.length>0&&(n.images=l)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new tt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Kn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ke().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ke().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let a=0;a!==r;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const qn=new J,ra=new J,Vr=new J,Wr=new J;class vo{constructor(e=new J,t=new J(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,qn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=qn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(qn.copy(this.origin).addScaledVector(this.direction,t),qn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){ra.copy(e).add(t).multiplyScalar(.5),Vr.copy(t).sub(e).normalize(),Wr.copy(this.origin).sub(ra);const a=e.distanceTo(t)*.5,l=-this.direction.dot(Vr),c=Wr.dot(this.direction),d=-Wr.dot(Vr),h=Wr.lengthSq(),m=Math.abs(1-l*l);let g,f,v,T;if(m>0)if(g=l*d-c,f=l*c-d,T=a*m,g>=0)if(f>=-T)if(f<=T){const A=1/m;g*=A,f*=A,v=g*(g+l*f+2*c)+f*(l*g+f+2*d)+h}else f=a,g=Math.max(0,-(l*f+c)),v=-g*g+f*(f+2*d)+h;else f=-a,g=Math.max(0,-(l*f+c)),v=-g*g+f*(f+2*d)+h;else f<=-T?(g=Math.max(0,-(-l*a+c)),f=g>0?-a:Math.min(Math.max(-a,-d),a),v=-g*g+f*(f+2*d)+h):f<=T?(g=0,f=Math.min(Math.max(-a,-d),a),v=f*(f+2*d)+h):(g=Math.max(0,-(l*a+c)),f=g>0?a:Math.min(Math.max(-a,-d),a),v=-g*g+f*(f+2*d)+h);else f=l>0?-a:a,g=Math.max(0,-(l*f+c)),v=-g*g+f*(f+2*d)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,g),r&&r.copy(ra).addScaledVector(Vr,f),v}intersectSphere(e,t){if(e.radius<0)return null;qn.subVectors(e.center,this.origin);const n=qn.dot(this.direction),r=qn.dot(qn)-n*n,a=e.radius*e.radius;if(r>a)return null;const l=Math.sqrt(a-r),c=n-l,d=n+l;return d<0?null:c<0?this.at(d,t):this.at(c,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,a,l,c,d;const h=1/this.direction.x,m=1/this.direction.y,g=1/this.direction.z,f=this.origin;return h>=0?(n=(e.min.x-f.x)*h,r=(e.max.x-f.x)*h):(n=(e.max.x-f.x)*h,r=(e.min.x-f.x)*h),m>=0?(a=(e.min.y-f.y)*m,l=(e.max.y-f.y)*m):(a=(e.max.y-f.y)*m,l=(e.min.y-f.y)*m),n>l||a>r||((a>n||isNaN(n))&&(n=a),(l<r||isNaN(r))&&(r=l),g>=0?(c=(e.min.z-f.z)*g,d=(e.max.z-f.z)*g):(c=(e.max.z-f.z)*g,d=(e.min.z-f.z)*g),n>d||c>r)||((c>n||n!==n)&&(n=c),(d<r||r!==r)&&(r=d),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,qn)!==null}intersectTriangle(e,t,n,r,a){const l=this.origin,c=this.direction,d=c.x,h=c.y,m=c.z,g=e.x-l.x,f=e.y-l.y,v=e.z-l.z,T=t.x-l.x,A=t.y-l.y,S=t.z-l.z,_=n.x-l.x,I=n.y-l.y,H=n.z-l.z,w=Math.abs(d),P=Math.abs(h),R=Math.abs(m);let N,E,L,k,z,Y,$,O,K,ne,X,re;if(w>=P&&w>=R?(L=d,Y=g,K=T,re=_,d>=0?(N=h,E=m,k=f,z=v,$=A,O=S,ne=I,X=H):(N=m,E=h,k=v,z=f,$=S,O=A,ne=H,X=I)):P>=R?(L=h,Y=f,K=A,re=I,h>=0?(N=m,E=d,k=v,z=g,$=S,O=T,ne=H,X=_):(N=d,E=m,k=g,z=v,$=T,O=S,ne=_,X=H)):(L=m,Y=v,K=S,re=H,m>=0?(N=d,E=h,k=g,z=f,$=T,O=A,ne=_,X=I):(N=h,E=d,k=f,z=g,$=A,O=T,ne=I,X=_)),L===0)return null;const se=N/L,ce=E/L,he=1/L,Oe=k-se*Y,Be=z-ce*Y,ht=$-se*K,nt=O-ce*K,it=ne-se*re,ae=X-ce*re,ue=it*nt-ae*ht,ye=Oe*ae-Be*it,He=ht*Be-nt*Oe;if(r){if(ue<0||ye<0||He<0)return null}else if((ue<0||ye<0||He<0)&&(ue>0||ye>0||He>0))return null;const Ae=ue+ye+He;if(Ae===0)return null;const Ve=he*(ue*Y+ye*K+He*re);return(Ae>0?Ve<0:Ve>0)?null:this.at(Ve/Ae,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class bc extends ji{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ui,this.combine=tc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ll=new Ut,mi=new vo,Xr=new Ms,cl=new J,Yr=new J,qr=new J,$r=new J,sa=new J,Kr=new J,ul=new J,Zr=new J;class Rn extends Vt{constructor(e=new sn,t=new bc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,l=r.length;a<l;a++){const c=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,a=n.morphAttributes.position,l=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const c=this.morphTargetInfluences;if(a&&c){Kr.set(0,0,0);for(let d=0,h=a.length;d<h;d++){const m=c[d],g=a[d];m!==0&&(sa.fromBufferAttribute(g,e),l?Kr.addScaledVector(sa,m):Kr.addScaledVector(sa.sub(t),m))}t.add(Kr)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Xr.copy(n.boundingSphere),Xr.applyMatrix4(a),mi.copy(e.ray).recast(e.near),!(Xr.containsPoint(mi.origin)===!1&&(mi.intersectSphere(Xr,cl)===null||mi.origin.distanceToSquared(cl)>(e.far-e.near)**2))&&(ll.copy(a).invert(),mi.copy(e.ray).applyMatrix4(ll),!(n.boundingBox!==null&&mi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,mi)))}_computeIntersections(e,t,n){let r;const a=this.geometry,l=this.material,c=a.index,d=a.attributes.position,h=a.attributes.uv,m=a.attributes.uv1,g=a.attributes.normal,f=a.groups,v=a.drawRange;if(c!==null)if(Array.isArray(l))for(let T=0,A=f.length;T<A;T++){const S=f[T],_=l[S.materialIndex],I=Math.max(S.start,v.start),H=Math.min(c.count,Math.min(S.start+S.count,v.start+v.count));for(let w=I,P=H;w<P;w+=3){const R=c.getX(w),N=c.getX(w+1),E=c.getX(w+2);r=Jr(this,_,e,n,h,m,g,R,N,E),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=S.materialIndex,t.push(r))}}else{const T=Math.max(0,v.start),A=Math.min(c.count,v.start+v.count);for(let S=T,_=A;S<_;S+=3){const I=c.getX(S),H=c.getX(S+1),w=c.getX(S+2);r=Jr(this,l,e,n,h,m,g,I,H,w),r&&(r.faceIndex=Math.floor(S/3),t.push(r))}}else if(d!==void 0)if(Array.isArray(l))for(let T=0,A=f.length;T<A;T++){const S=f[T],_=l[S.materialIndex],I=Math.max(S.start,v.start),H=Math.min(d.count,Math.min(S.start+S.count,v.start+v.count));for(let w=I,P=H;w<P;w+=3){const R=w,N=w+1,E=w+2;r=Jr(this,_,e,n,h,m,g,R,N,E),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=S.materialIndex,t.push(r))}}else{const T=Math.max(0,v.start),A=Math.min(d.count,v.start+v.count);for(let S=T,_=A;S<_;S+=3){const I=S,H=S+1,w=S+2;r=Jr(this,l,e,n,h,m,g,I,H,w),r&&(r.faceIndex=Math.floor(S/3),t.push(r))}}}}function Ud(i,e,t,n,r,a,l,c){let d;if(e.side===rn?d=n.intersectTriangle(l,a,r,!0,c):d=n.intersectTriangle(r,a,l,e.side===Si,c),d===null)return null;Zr.copy(c),Zr.applyMatrix4(i.matrixWorld);const h=t.ray.origin.distanceTo(Zr);return h<t.near||h>t.far?null:{distance:h,point:Zr.clone(),object:i}}function Jr(i,e,t,n,r,a,l,c,d,h){i.getVertexPosition(c,Yr),i.getVertexPosition(d,qr),i.getVertexPosition(h,$r);const m=Ud(i,e,t,n,Yr,qr,$r,ul);if(m){const g=new J;Tn.getBarycoord(ul,Yr,qr,$r,g),r&&(m.uv=Tn.getInterpolatedAttribute(r,c,d,h,g,new Ke)),a&&(m.uv1=Tn.getInterpolatedAttribute(a,c,d,h,g,new Ke)),l&&(m.normal=Tn.getInterpolatedAttribute(l,c,d,h,g,new J),m.normal.dot(n.direction)>0&&m.normal.multiplyScalar(-1));const f={a:c,b:d,c:h,normal:new J,materialIndex:0};Tn.getNormal(Yr,qr,$r,f.normal),m.face=f,m.barycoord=g}return m}class Id extends en{constructor(e=null,t=1,n=1,r,a,l,c,d,h=qt,m=qt,g,f){super(null,l,c,d,h,m,r,a,g,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const _i=new Ms,Nd=new Ke(.5,.5),jr=new J;class xo{constructor(e=new Kn,t=new Kn,n=new Kn,r=new Kn,a=new Kn,l=new Kn){this.planes=[e,t,n,r,a,l]}set(e,t,n,r,a,l){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(n),c[3].copy(r),c[4].copy(a),c[5].copy(l),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=On,n=!1){const r=this.planes,a=e.elements,l=a[0],c=a[1],d=a[2],h=a[3],m=a[4],g=a[5],f=a[6],v=a[7],T=a[8],A=a[9],S=a[10],_=a[11],I=a[12],H=a[13],w=a[14],P=a[15];if(r[0].setComponents(h-l,v-m,_-T,P-I).normalize(),r[1].setComponents(h+l,v+m,_+T,P+I).normalize(),r[2].setComponents(h+c,v+g,_+A,P+H).normalize(),r[3].setComponents(h-c,v-g,_-A,P-H).normalize(),n)r[4].setComponents(d,f,S,w).normalize(),r[5].setComponents(h-d,v-f,_-S,P-w).normalize();else if(r[4].setComponents(h-d,v-f,_-S,P-w).normalize(),t===On)r[5].setComponents(h+d,v+f,_+S,P+w).normalize();else if(t===xr)r[5].setComponents(d,f,S,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),_i.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),_i.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(_i)}intersectsSprite(e){_i.center.set(0,0,0);const t=Nd.distanceTo(e.center);return _i.radius=.7071067811865476+t,_i.applyMatrix4(e.matrixWorld),this.intersectsSphere(_i)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(jr.x=r.normal.x>0?e.max.x:e.min.x,jr.y=r.normal.y>0?e.max.y:e.min.y,jr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(jr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Tc extends ji{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new tt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const gs=new J,vs=new J,hl=new Ut,or=new vo,Qr=new Ms,aa=new J,dl=new J;class Fd extends Vt{constructor(e=new sn,t=new Tc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,a=t.count;r<a;r++)gs.fromBufferAttribute(t,r-1),vs.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=gs.distanceTo(vs);e.setAttribute("lineDistance",new $t(n,1))}else We("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,r=this.matrixWorld,a=e.params.Line.threshold,l=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Qr.copy(n.boundingSphere),Qr.applyMatrix4(r),Qr.radius+=a,e.ray.intersectsSphere(Qr)===!1)return;hl.copy(r).invert(),or.copy(e.ray).applyMatrix4(hl);const c=a/((this.scale.x+this.scale.y+this.scale.z)/3),d=c*c,h=this.isLineSegments?2:1,m=n.index,f=n.attributes.position;if(m!==null){const v=Math.max(0,l.start),T=Math.min(m.count,l.start+l.count);for(let A=v,S=T-1;A<S;A+=h){const _=m.getX(A),I=m.getX(A+1),H=es(this,e,or,d,_,I,A);H&&t.push(H)}if(this.isLineLoop){const A=m.getX(T-1),S=m.getX(v),_=es(this,e,or,d,A,S,T-1);_&&t.push(_)}}else{const v=Math.max(0,l.start),T=Math.min(f.count,l.start+l.count);for(let A=v,S=T-1;A<S;A+=h){const _=es(this,e,or,d,A,A+1,A);_&&t.push(_)}if(this.isLineLoop){const A=es(this,e,or,d,T-1,v,T-1);A&&t.push(A)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,l=r.length;a<l;a++){const c=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}}function es(i,e,t,n,r,a,l){const c=i.geometry.attributes.position;if(gs.fromBufferAttribute(c,r),vs.fromBufferAttribute(c,a),t.distanceSqToSegment(gs,vs,aa,dl)>n)return;aa.applyMatrix4(i.matrixWorld);const h=e.ray.origin.distanceTo(aa);if(!(h<e.near||h>e.far))return{distance:h,point:dl.clone().applyMatrix4(i.matrixWorld),index:l,face:null,faceIndex:null,barycoord:null,object:i}}const fl=new J,pl=new J;class Od extends Fd{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,a=t.count;r<a;r+=2)fl.fromBufferAttribute(t,r),pl.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+fl.distanceTo(pl);e.setAttribute("lineDistance",new $t(n,1))}else We("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class wc extends en{constructor(e=[],t=Mi,n,r,a,l,c,d,h,m){super(e,t,n,r,a,l,c,d,h,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Mr extends en{constructor(e,t,n=kn,r,a,l,c=qt,d=qt,h,m=Qn,g=1){if(m!==Qn&&m!==xi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:g};super(f,r,a,l,c,d,m,n,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new go(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Bd extends Mr{constructor(e,t=kn,n=Mi,r,a,l=qt,c=qt,d,h=Qn){const m={width:e,height:e,depth:1},g=[m,m,m,m,m,m];super(e,e,t,n,r,a,l,c,d,h),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Ac extends en{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Er extends sn{constructor(e=1,t=1,n=1,r=1,a=1,l=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:a,depthSegments:l};const c=this;r=Math.floor(r),a=Math.floor(a),l=Math.floor(l);const d=[],h=[],m=[],g=[];let f=0,v=0;T("z","y","x",-1,-1,n,t,e,l,a,0),T("z","y","x",1,-1,n,t,-e,l,a,1),T("x","z","y",1,1,e,n,t,r,l,2),T("x","z","y",1,-1,e,n,-t,r,l,3),T("x","y","z",1,-1,e,t,n,r,a,4),T("x","y","z",-1,-1,e,t,-n,r,a,5),this.setIndex(d),this.setAttribute("position",new $t(h,3)),this.setAttribute("normal",new $t(m,3)),this.setAttribute("uv",new $t(g,2));function T(A,S,_,I,H,w,P,R,N,E,L){const k=w/N,z=P/E,Y=w/2,$=P/2,O=R/2,K=N+1,ne=E+1;let X=0,re=0;const se=new J;for(let ce=0;ce<ne;ce++){const he=ce*z-$;for(let Oe=0;Oe<K;Oe++){const Be=Oe*k-Y;se[A]=Be*I,se[S]=he*H,se[_]=O,h.push(se.x,se.y,se.z),se[A]=0,se[S]=0,se[_]=R>0?1:-1,m.push(se.x,se.y,se.z),g.push(Oe/N),g.push(1-ce/E),X+=1}}for(let ce=0;ce<E;ce++)for(let he=0;he<N;he++){const Oe=f+he+K*ce,Be=f+he+K*(ce+1),ht=f+(he+1)+K*(ce+1),nt=f+(he+1)+K*ce;d.push(Oe,Be,nt),d.push(Be,ht,nt),re+=6}c.addGroup(v,re,L),v+=re,f+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Er(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Es extends sn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const a=e/2,l=t/2,c=Math.floor(n),d=Math.floor(r),h=c+1,m=d+1,g=e/c,f=t/d,v=[],T=[],A=[],S=[];for(let _=0;_<m;_++){const I=_*f-l;for(let H=0;H<h;H++){const w=H*g-a;T.push(w,-I,0),A.push(0,0,1),S.push(H/c),S.push(1-_/d)}}for(let _=0;_<d;_++)for(let I=0;I<c;I++){const H=I+h*_,w=I+h*(_+1),P=I+1+h*(_+1),R=I+1+h*_;v.push(H,w,R),v.push(w,P,R)}this.setIndex(v),this.setAttribute("position",new $t(T,3)),this.setAttribute("normal",new $t(A,3)),this.setAttribute("uv",new $t(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Es(e.width,e.height,e.widthSegments,e.heightSegments)}}function Ki(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];if(ml(r))r.isRenderTargetTexture?(We("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone();else if(Array.isArray(r))if(ml(r[0])){const a=[];for(let l=0,c=r.length;l<c;l++)a[l]=r[l].clone();e[t][n]=a}else e[t][n]=r.slice();else e[t][n]=r}}return e}function Qt(i){const e={};for(let t=0;t<i.length;t++){const n=Ki(i[t]);for(const r in n)e[r]=n[r]}return e}function ml(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function kd(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Rc(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:lt.workingColorSpace}const zd={clone:Ki,merge:Qt};var Hd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Gd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Hn extends ji{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Hd,this.fragmentShader=Gd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ki(e.uniforms),this.uniformsGroups=kd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const l=this.uniforms[r].value;l&&l.isTexture?t.uniforms[r]={type:"t",value:l.toJSON(e).uuid}:l&&l.isColor?t.uniforms[r]={type:"c",value:l.getHex()}:l&&l.isVector2?t.uniforms[r]={type:"v2",value:l.toArray()}:l&&l.isVector3?t.uniforms[r]={type:"v3",value:l.toArray()}:l&&l.isVector4?t.uniforms[r]={type:"v4",value:l.toArray()}:l&&l.isMatrix3?t.uniforms[r]={type:"m3",value:l.toArray()}:l&&l.isMatrix4?t.uniforms[r]={type:"m4",value:l.toArray()}:t.uniforms[r]={value:l}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=t[r.value]||null;break;case"c":this.uniforms[n].value=new tt().setHex(r.value);break;case"v2":this.uniforms[n].value=new Ke().fromArray(r.value);break;case"v3":this.uniforms[n].value=new J().fromArray(r.value);break;case"v4":this.uniforms[n].value=new Lt().fromArray(r.value);break;case"m3":this.uniforms[n].value=new Ze().fromArray(r.value);break;case"m4":this.uniforms[n].value=new Ut().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Vd extends Hn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class _l extends ji{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new tt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=io,this.normalScale=new Ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ui,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Wd extends ji{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Oh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Xd extends ji{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const gl={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(vl(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!vl(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function vl(i){try{const e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class Yd{constructor(e,t,n){const r=this;let a=!1,l=0,c=0,d;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(m){c++,a===!1&&r.onStart!==void 0&&r.onStart(m,l,c),a=!0},this.itemEnd=function(m){l++,r.onProgress!==void 0&&r.onProgress(m,l,c),l===c&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(m){r.onError!==void 0&&r.onError(m)},this.resolveURL=function(m){return m=m.normalize("NFC"),d?d(m):m},this.setURLModifier=function(m){return d=m,this},this.addHandler=function(m,g){return h.push(m,g),this},this.removeHandler=function(m){const g=h.indexOf(m);return g!==-1&&h.splice(g,2),this},this.getHandler=function(m){for(let g=0,f=h.length;g<f;g+=2){const v=h[g],T=h[g+1];if(v.global&&(v.lastIndex=0),v.test(m))return T}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const qd=new Yd;class So{constructor(e){this.manager=e!==void 0?e:qd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,a){n.load(e,r,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}So.DEFAULT_MATERIAL_NAME="__DEFAULT";const $n={};class $d extends Error{constructor(e,t){super(e),this.response=t}}class Kd extends So{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=gl.get(`file:${e}`);if(a!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(a),this.manager.itemEnd(e)},0);return}if($n[e]!==void 0){$n[e].push({onLoad:t,onProgress:n,onError:r});return}$n[e]=[],$n[e].push({onLoad:t,onProgress:n,onError:r});const l=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),c=this.mimeType,d=this.responseType;fetch(l).then(h=>{if(h.status===200||h.status===0){if(h.status===0&&We("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||h.body===void 0||h.body.getReader===void 0)return h;const m=$n[e],g=h.body.getReader(),f=h.headers.get("X-File-Size")||h.headers.get("Content-Length"),v=f?parseInt(f):0,T=v!==0;let A=0;const S=new ReadableStream({start(_){I();function I(){g.read().then(({done:H,value:w})=>{if(H)_.close();else{A+=w.byteLength;const P=new ProgressEvent("progress",{lengthComputable:T,loaded:A,total:v});for(let R=0,N=m.length;R<N;R++){const E=m[R];E.onProgress&&E.onProgress(P)}_.enqueue(w),I()}},H=>{_.error(H)})}}});return new Response(S)}else throw new $d(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`,h)}).then(h=>{switch(d){case"arraybuffer":return h.arrayBuffer();case"blob":return h.blob();case"document":return h.text().then(m=>new DOMParser().parseFromString(m,c));case"json":return h.json();default:if(c==="")return h.text();{const g=/charset="?([^;"\s]*)"?/i.exec(c),f=g&&g[1]?g[1].toLowerCase():void 0,v=new TextDecoder(f);return h.arrayBuffer().then(T=>v.decode(T))}}}).then(h=>{gl.add(`file:${e}`,h);const m=$n[e];delete $n[e];for(let g=0,f=m.length;g<f;g++){const v=m[g];v.onLoad&&v.onLoad(h)}}).catch(h=>{const m=$n[e];if(m===void 0)throw this.manager.itemError(e),h;delete $n[e];for(let g=0,f=m.length;g<f;g++){const v=m[g];v.onError&&v.onError(h)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class Cc extends Vt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new tt(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class Zd extends Cc{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Vt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new tt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const oa=new Ut,xl=new J,Sl=new J;class Jd{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ke(512,512),this.mapType=hn,this.map=null,this.mapPass=null,this.matrix=new Ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new xo,this._frameExtents=new Ke(1,1),this._viewportCount=1,this._viewports=[new Lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;xl.setFromMatrixPosition(e.matrixWorld),t.position.copy(xl),Sl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Sl),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){oa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(oa,e.coordinateSystem,e.reversedDepth);const a=this._frameExtents,l=r?r.z/a.x:1,c=r?r.w/a.y:1,d=r?r.x/a.x:0,h=r?r.y/a.y:0;e.coordinateSystem===xr||e.reversedDepth?t.set(.5*l,0,0,.5*l+d,0,.5*c,0,.5*c+h,0,0,1,0,0,0,0,1):t.set(.5*l,0,0,.5*l+d,0,.5*c,0,.5*c+h,0,0,.5,.5,0,0,0,1),t.multiply(oa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const ts=new J,ns=new ci,Un=new J;class Pc extends Vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ut,this.projectionMatrix=new Ut,this.projectionMatrixInverse=new Ut,this.coordinateSystem=On,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ts,ns,Un),Un.x===1&&Un.y===1&&Un.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ts,ns,Un.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(ts,ns,Un),Un.x===1&&Un.y===1&&Un.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ts,ns,Un.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const oi=new J,Ml=new Ke,El=new Ke;class _n extends Pc{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Sr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(pr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Sr*2*Math.atan(Math.tan(pr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){oi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(oi.x,oi.y).multiplyScalar(-e/oi.z),oi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(oi.x,oi.y).multiplyScalar(-e/oi.z)}getViewSize(e,t){return this.getViewBounds(e,Ml,El),t.subVectors(El,Ml)}setViewOffset(e,t,n,r,a,l){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(pr*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,a=-.5*r;const l=this.view;if(this.view!==null&&this.view.enabled){const d=l.fullWidth,h=l.fullHeight;a+=l.offsetX*r/d,t-=l.offsetY*n/h,r*=l.width/d,n*=l.height/h}const c=this.filmOffset;c!==0&&(a+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Mo extends Pc{constructor(e=-1,t=1,n=1,r=-1,a=.1,l=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=a,this.far=l,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,a,l){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=n-e,l=n+e,c=r+t,d=r-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=h*this.view.offsetX,l=a+h*this.view.width,c-=m*this.view.offsetY,d=c-m*this.view.height}this.projectionMatrix.makeOrthographic(a,l,c,d,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class jd extends Jd{constructor(){super(new Mo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class yl extends Cc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Vt.DEFAULT_UP),this.updateMatrix(),this.target=new Vt,this.shadow=new jd}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const Bi=-90,ki=1;class Qd extends Vt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new _n(Bi,ki,e,t);r.layers=this.layers,this.add(r);const a=new _n(Bi,ki,e,t);a.layers=this.layers,this.add(a);const l=new _n(Bi,ki,e,t);l.layers=this.layers,this.add(l);const c=new _n(Bi,ki,e,t);c.layers=this.layers,this.add(c);const d=new _n(Bi,ki,e,t);d.layers=this.layers,this.add(d);const h=new _n(Bi,ki,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,a,l,c,d]=t;for(const h of t)this.remove(h);if(e===On)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),l.up.set(0,0,1),l.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===xr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),l.up.set(0,0,-1),l.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,l,c,d,h,m]=this.children,g=e.getRenderTarget(),f=e.getActiveCubeFace(),v=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const A=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let S=!1;e.isWebGLRenderer===!0?S=e.state.buffers.depth.getReversed():S=e.reversedDepthBuffer,e.setRenderTarget(n,0,r),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,1,r),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,2,r),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,3,r),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(n,4,r),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),n.texture.generateMipmaps=A,e.setRenderTarget(n,5,r),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,m),e.setRenderTarget(g,f,v),e.xr.enabled=T,n.texture.needsPMREMUpdate=!0}}class ef extends _n{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class bl{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=rt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(rt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Ao=class Ao{constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){const a=this.elements;return a[0]=e,a[2]=t,a[1]=n,a[3]=r,this}};Ao.prototype.isMatrix2=!0;let Tl=Ao;class tf extends Od{constructor(e=10,t=10,n=4473924,r=8947848){n=new tt(n),r=new tt(r);const a=t/2,l=e/t,c=e/2,d=[],h=[];for(let f=0,v=0,T=-c;f<=t;f++,T+=l){d.push(-c,0,T,c,0,T),d.push(T,0,-c,T,0,c);const A=f===a?n:r;A.toArray(h,v),v+=3,A.toArray(h,v),v+=3,A.toArray(h,v),v+=3,A.toArray(h,v),v+=3}const m=new sn;m.setAttribute("position",new $t(d,3)),m.setAttribute("color",new $t(h,3));const g=new Tc({vertexColors:!0,toneMapped:!1});super(m,g),this.type="GridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}class nf extends hi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function wl(i,e,t,n){const r=rf(n);switch(t){case pc:return i*e;case _c:return i*e/r.components*r.byteLength;case uo:return i*e/r.components*r.byteLength;case Ei:return i*e*2/r.components*r.byteLength;case ho:return i*e*2/r.components*r.byteLength;case mc:return i*e*3/r.components*r.byteLength;case wn:return i*e*4/r.components*r.byteLength;case fo:return i*e*4/r.components*r.byteLength;case os:case ls:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case cs:case us:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ra:case Pa:return Math.max(i,16)*Math.max(e,8)/4;case Aa:case Ca:return Math.max(i,8)*Math.max(e,8)/2;case Da:case La:case Ia:case Na:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ua:case ds:case Fa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Oa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ba:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ka:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case za:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ha:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ga:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Va:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Wa:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Xa:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ya:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case qa:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case $a:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Ka:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Za:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ja:case ja:case Qa:return Math.ceil(i/4)*Math.ceil(e/4)*16;case eo:case to:return Math.ceil(i/4)*Math.ceil(e/4)*8;case fs:case no:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function rf(i){switch(i){case hn:case uc:return{byteLength:1,components:1};case gr:case hc:case zn:return{byteLength:2,components:1};case lo:case co:return{byteLength:2,components:4};case kn:case oo:case Fn:return{byteLength:4,components:1};case dc:case fc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ao}}));typeof window<"u"&&(window.__THREE__?We("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ao);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Dc(){let i=null,e=!1,t=null,n=null;function r(a,l){n=i.requestAnimationFrame(r),t(a,l)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){i=a}}}function sf(i){const e=new WeakMap;function t(c,d){const h=c.array,m=c.usage,g=h.byteLength,f=i.createBuffer();i.bindBuffer(d,f),i.bufferData(d,h,m),c.onUploadCallback();let v;if(h instanceof Float32Array)v=i.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)v=i.HALF_FLOAT;else if(h instanceof Uint16Array)c.isFloat16BufferAttribute?v=i.HALF_FLOAT:v=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)v=i.SHORT;else if(h instanceof Uint32Array)v=i.UNSIGNED_INT;else if(h instanceof Int32Array)v=i.INT;else if(h instanceof Int8Array)v=i.BYTE;else if(h instanceof Uint8Array)v=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)v=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:f,type:v,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:g}}function n(c,d,h){const m=d.array,g=d.updateRanges;if(i.bindBuffer(h,c),g.length===0)i.bufferSubData(h,0,m);else{g.sort((v,T)=>v.start-T.start);let f=0;for(let v=1;v<g.length;v++){const T=g[f],A=g[v];A.start<=T.start+T.count+1?T.count=Math.max(T.count,A.start+A.count-T.start):(++f,g[f]=A)}g.length=f+1;for(let v=0,T=g.length;v<T;v++){const A=g[v];i.bufferSubData(h,A.start*m.BYTES_PER_ELEMENT,m,A.start,A.count)}d.clearUpdateRanges()}d.onUploadCallback()}function r(c){return c.isInterleavedBufferAttribute&&(c=c.data),e.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const d=e.get(c);d&&(i.deleteBuffer(d.buffer),e.delete(c))}function l(c,d){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){const m=e.get(c);(!m||m.version<c.version)&&e.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}const h=e.get(c);if(h===void 0)e.set(c,t(c,d));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,c,d),h.version=c.version}}return{get:r,remove:a,update:l}}var af=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,of=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,lf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,cf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,uf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,hf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,df=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ff=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,pf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,mf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_f=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,gf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,xf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Sf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Mf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Ef=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Tf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,wf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Af=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Rf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Cf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Pf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Df=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Lf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Uf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,If=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Nf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ff="gl_FragColor = linearToOutputTexel( gl_FragColor );",Of=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Bf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,kf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,zf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Hf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Gf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Vf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Wf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Xf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Yf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,$f=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Kf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Zf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Jf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,jf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Qf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ep=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,tp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,np=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ip=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,rp=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,sp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ap=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,op=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lp=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,cp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,up=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,fp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,pp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,_p=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Sp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Mp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ep=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,yp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Tp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,wp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ap=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Cp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Pp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Dp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Lp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Up=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ip=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Np=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Fp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Op=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Bp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,kp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,zp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Hp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Gp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Vp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Wp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Xp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Yp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,$p=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Kp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Zp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Jp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Qp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,em=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,tm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,nm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,im=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,rm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,sm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const am=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,om=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,um=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,fm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,pm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,mm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,_m=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,gm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,xm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Sm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Mm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Em=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ym=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Tm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Am=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Rm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Cm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Dm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Um=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Im=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Nm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Fm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Om=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Bm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,km=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,et={alphahash_fragment:af,alphahash_pars_fragment:of,alphamap_fragment:lf,alphamap_pars_fragment:cf,alphatest_fragment:uf,alphatest_pars_fragment:hf,aomap_fragment:df,aomap_pars_fragment:ff,batching_pars_vertex:pf,batching_vertex:mf,begin_vertex:_f,beginnormal_vertex:gf,bsdfs:vf,iridescence_fragment:xf,bumpmap_pars_fragment:Sf,clipping_planes_fragment:Mf,clipping_planes_pars_fragment:Ef,clipping_planes_pars_vertex:yf,clipping_planes_vertex:bf,color_fragment:Tf,color_pars_fragment:wf,color_pars_vertex:Af,color_vertex:Rf,common:Cf,cube_uv_reflection_fragment:Pf,defaultnormal_vertex:Df,displacementmap_pars_vertex:Lf,displacementmap_vertex:Uf,emissivemap_fragment:If,emissivemap_pars_fragment:Nf,colorspace_fragment:Ff,colorspace_pars_fragment:Of,envmap_fragment:Bf,envmap_common_pars_fragment:kf,envmap_pars_fragment:zf,envmap_pars_vertex:Hf,envmap_physical_pars_fragment:jf,envmap_vertex:Gf,fog_vertex:Vf,fog_pars_vertex:Wf,fog_fragment:Xf,fog_pars_fragment:Yf,gradientmap_pars_fragment:qf,lightmap_pars_fragment:$f,lights_lambert_fragment:Kf,lights_lambert_pars_fragment:Zf,lights_pars_begin:Jf,lights_toon_fragment:Qf,lights_toon_pars_fragment:ep,lights_phong_fragment:tp,lights_phong_pars_fragment:np,lights_physical_fragment:ip,lights_physical_pars_fragment:rp,lights_fragment_begin:sp,lights_fragment_maps:ap,lights_fragment_end:op,lightprobes_pars_fragment:lp,logdepthbuf_fragment:cp,logdepthbuf_pars_fragment:up,logdepthbuf_pars_vertex:hp,logdepthbuf_vertex:dp,map_fragment:fp,map_pars_fragment:pp,map_particle_fragment:mp,map_particle_pars_fragment:_p,metalnessmap_fragment:gp,metalnessmap_pars_fragment:vp,morphinstance_vertex:xp,morphcolor_vertex:Sp,morphnormal_vertex:Mp,morphtarget_pars_vertex:Ep,morphtarget_vertex:yp,normal_fragment_begin:bp,normal_fragment_maps:Tp,normal_pars_fragment:wp,normal_pars_vertex:Ap,normal_vertex:Rp,normalmap_pars_fragment:Cp,clearcoat_normal_fragment_begin:Pp,clearcoat_normal_fragment_maps:Dp,clearcoat_pars_fragment:Lp,iridescence_pars_fragment:Up,opaque_fragment:Ip,packing:Np,premultiplied_alpha_fragment:Fp,project_vertex:Op,dithering_fragment:Bp,dithering_pars_fragment:kp,roughnessmap_fragment:zp,roughnessmap_pars_fragment:Hp,shadowmap_pars_fragment:Gp,shadowmap_pars_vertex:Vp,shadowmap_vertex:Wp,shadowmask_pars_fragment:Xp,skinbase_vertex:Yp,skinning_pars_vertex:qp,skinning_vertex:$p,skinnormal_vertex:Kp,specularmap_fragment:Zp,specularmap_pars_fragment:Jp,tonemapping_fragment:jp,tonemapping_pars_fragment:Qp,transmission_fragment:em,transmission_pars_fragment:tm,uv_pars_fragment:nm,uv_pars_vertex:im,uv_vertex:rm,worldpos_vertex:sm,background_vert:am,background_frag:om,backgroundCube_vert:lm,backgroundCube_frag:cm,cube_vert:um,cube_frag:hm,depth_vert:dm,depth_frag:fm,distance_vert:pm,distance_frag:mm,equirect_vert:_m,equirect_frag:gm,linedashed_vert:vm,linedashed_frag:xm,meshbasic_vert:Sm,meshbasic_frag:Mm,meshlambert_vert:Em,meshlambert_frag:ym,meshmatcap_vert:bm,meshmatcap_frag:Tm,meshnormal_vert:wm,meshnormal_frag:Am,meshphong_vert:Rm,meshphong_frag:Cm,meshphysical_vert:Pm,meshphysical_frag:Dm,meshtoon_vert:Lm,meshtoon_frag:Um,points_vert:Im,points_frag:Nm,shadow_vert:Fm,shadow_frag:Om,sprite_vert:Bm,sprite_frag:km},we={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},envMapRotation:{value:new Ze},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new Ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new J},probesMax:{value:new J},probesResolution:{value:new J}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new Ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},Nn={basic:{uniforms:Qt([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:Qt([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new tt(0)},envMapIntensity:{value:1}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:Qt([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:Qt([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:Qt([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new tt(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:Qt([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:Qt([we.points,we.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:Qt([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:Qt([we.common,we.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:Qt([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:Qt([we.sprite,we.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ze}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distance:{uniforms:Qt([we.common,we.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distance_vert,fragmentShader:et.distance_frag},shadow:{uniforms:Qt([we.lights,we.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};Nn.physical={uniforms:Qt([Nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new Ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new Ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new Ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};const is={r:0,b:0,g:0},zm=new Ut,Lc=new Ze;Lc.set(-1,0,0,0,1,0,0,0,1);function Hm(i,e,t,n,r,a){const l=new tt(0);let c=r===!0?0:1,d,h,m=null,g=0,f=null;function v(I){let H=I.isScene===!0?I.background:null;if(H&&H.isTexture){const w=I.backgroundBlurriness>0;H=e.get(H,w)}return H}function T(I){let H=!1;const w=v(I);w===null?S(l,c):w&&w.isColor&&(S(w,1),H=!0);const P=i.xr.getEnvironmentBlendMode();P==="additive"?t.buffers.color.setClear(0,0,0,1,a):P==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,a),(i.autoClear||H)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function A(I,H){const w=v(H);w&&(w.isCubeTexture||w.mapping===Ss)?(h===void 0&&(h=new Rn(new Er(1,1,1),new Hn({name:"BackgroundCubeMaterial",uniforms:Ki(Nn.backgroundCube.uniforms),vertexShader:Nn.backgroundCube.vertexShader,fragmentShader:Nn.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,R,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),h.material.uniforms.envMap.value=w,h.material.uniforms.backgroundBlurriness.value=H.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=H.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(zm.makeRotationFromEuler(H.backgroundRotation)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(Lc),h.material.toneMapped=lt.getTransfer(w.colorSpace)!==Mt,(m!==w||g!==w.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,m=w,g=w.version,f=i.toneMapping),h.layers.enableAll(),I.unshift(h,h.geometry,h.material,0,0,null)):w&&w.isTexture&&(d===void 0&&(d=new Rn(new Es(2,2),new Hn({name:"BackgroundMaterial",uniforms:Ki(Nn.background.uniforms),vertexShader:Nn.background.vertexShader,fragmentShader:Nn.background.fragmentShader,side:Si,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(d)),d.material.uniforms.t2D.value=w,d.material.uniforms.backgroundIntensity.value=H.backgroundIntensity,d.material.toneMapped=lt.getTransfer(w.colorSpace)!==Mt,w.matrixAutoUpdate===!0&&w.updateMatrix(),d.material.uniforms.uvTransform.value.copy(w.matrix),(m!==w||g!==w.version||f!==i.toneMapping)&&(d.material.needsUpdate=!0,m=w,g=w.version,f=i.toneMapping),d.layers.enableAll(),I.unshift(d,d.geometry,d.material,0,0,null))}function S(I,H){I.getRGB(is,Rc(i)),t.buffers.color.setClear(is.r,is.g,is.b,H,a)}function _(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return l},setClearColor:function(I,H=1){l.set(I),c=H,S(l,c)},getClearAlpha:function(){return c},setClearAlpha:function(I){c=I,S(l,c)},render:T,addToRenderList:A,dispose:_}}function Gm(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null);let a=r,l=!1;function c(z,Y,$,O,K){let ne=!1;const X=g(z,O,$,Y);a!==X&&(a=X,h(a.object)),ne=v(z,O,$,K),ne&&T(z,O,$,K),K!==null&&e.update(K,i.ELEMENT_ARRAY_BUFFER),(ne||l)&&(l=!1,w(z,Y,$,O),K!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(K).buffer))}function d(){return i.createVertexArray()}function h(z){return i.bindVertexArray(z)}function m(z){return i.deleteVertexArray(z)}function g(z,Y,$,O){const K=O.wireframe===!0;let ne=n[Y.id];ne===void 0&&(ne={},n[Y.id]=ne);const X=z.isInstancedMesh===!0?z.id:0;let re=ne[X];re===void 0&&(re={},ne[X]=re);let se=re[$.id];se===void 0&&(se={},re[$.id]=se);let ce=se[K];return ce===void 0&&(ce=f(d()),se[K]=ce),ce}function f(z){const Y=[],$=[],O=[];for(let K=0;K<t;K++)Y[K]=0,$[K]=0,O[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Y,enabledAttributes:$,attributeDivisors:O,object:z,attributes:{},index:null}}function v(z,Y,$,O){const K=a.attributes,ne=Y.attributes;let X=0;const re=$.getAttributes();for(const se in re)if(re[se].location>=0){const he=K[se];let Oe=ne[se];if(Oe===void 0&&(se==="instanceMatrix"&&z.instanceMatrix&&(Oe=z.instanceMatrix),se==="instanceColor"&&z.instanceColor&&(Oe=z.instanceColor)),he===void 0||he.attribute!==Oe||Oe&&he.data!==Oe.data)return!0;X++}return a.attributesNum!==X||a.index!==O}function T(z,Y,$,O){const K={},ne=Y.attributes;let X=0;const re=$.getAttributes();for(const se in re)if(re[se].location>=0){let he=ne[se];he===void 0&&(se==="instanceMatrix"&&z.instanceMatrix&&(he=z.instanceMatrix),se==="instanceColor"&&z.instanceColor&&(he=z.instanceColor));const Oe={};Oe.attribute=he,he&&he.data&&(Oe.data=he.data),K[se]=Oe,X++}a.attributes=K,a.attributesNum=X,a.index=O}function A(){const z=a.newAttributes;for(let Y=0,$=z.length;Y<$;Y++)z[Y]=0}function S(z){_(z,0)}function _(z,Y){const $=a.newAttributes,O=a.enabledAttributes,K=a.attributeDivisors;$[z]=1,O[z]===0&&(i.enableVertexAttribArray(z),O[z]=1),K[z]!==Y&&(i.vertexAttribDivisor(z,Y),K[z]=Y)}function I(){const z=a.newAttributes,Y=a.enabledAttributes;for(let $=0,O=Y.length;$<O;$++)Y[$]!==z[$]&&(i.disableVertexAttribArray($),Y[$]=0)}function H(z,Y,$,O,K,ne,X){X===!0?i.vertexAttribIPointer(z,Y,$,K,ne):i.vertexAttribPointer(z,Y,$,O,K,ne)}function w(z,Y,$,O){A();const K=O.attributes,ne=$.getAttributes(),X=Y.defaultAttributeValues;for(const re in ne){const se=ne[re];if(se.location>=0){let ce=K[re];if(ce===void 0&&(re==="instanceMatrix"&&z.instanceMatrix&&(ce=z.instanceMatrix),re==="instanceColor"&&z.instanceColor&&(ce=z.instanceColor)),ce!==void 0){const he=ce.normalized,Oe=ce.itemSize,Be=e.get(ce);if(Be===void 0)continue;const ht=Be.buffer,nt=Be.type,it=Be.bytesPerElement,ae=nt===i.INT||nt===i.UNSIGNED_INT||ce.gpuType===oo;if(ce.isInterleavedBufferAttribute){const ue=ce.data,ye=ue.stride,He=ce.offset;if(ue.isInstancedInterleavedBuffer){for(let Ae=0;Ae<se.locationSize;Ae++)_(se.location+Ae,ue.meshPerAttribute);z.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let Ae=0;Ae<se.locationSize;Ae++)S(se.location+Ae);i.bindBuffer(i.ARRAY_BUFFER,ht);for(let Ae=0;Ae<se.locationSize;Ae++)H(se.location+Ae,Oe/se.locationSize,nt,he,ye*it,(He+Oe/se.locationSize*Ae)*it,ae)}else{if(ce.isInstancedBufferAttribute){for(let ue=0;ue<se.locationSize;ue++)_(se.location+ue,ce.meshPerAttribute);z.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let ue=0;ue<se.locationSize;ue++)S(se.location+ue);i.bindBuffer(i.ARRAY_BUFFER,ht);for(let ue=0;ue<se.locationSize;ue++)H(se.location+ue,Oe/se.locationSize,nt,he,Oe*it,Oe/se.locationSize*ue*it,ae)}}else if(X!==void 0){const he=X[re];if(he!==void 0)switch(he.length){case 2:i.vertexAttrib2fv(se.location,he);break;case 3:i.vertexAttrib3fv(se.location,he);break;case 4:i.vertexAttrib4fv(se.location,he);break;default:i.vertexAttrib1fv(se.location,he)}}}}I()}function P(){L();for(const z in n){const Y=n[z];for(const $ in Y){const O=Y[$];for(const K in O){const ne=O[K];for(const X in ne)m(ne[X].object),delete ne[X];delete O[K]}}delete n[z]}}function R(z){if(n[z.id]===void 0)return;const Y=n[z.id];for(const $ in Y){const O=Y[$];for(const K in O){const ne=O[K];for(const X in ne)m(ne[X].object),delete ne[X];delete O[K]}}delete n[z.id]}function N(z){for(const Y in n){const $=n[Y];for(const O in $){const K=$[O];if(K[z.id]===void 0)continue;const ne=K[z.id];for(const X in ne)m(ne[X].object),delete ne[X];delete K[z.id]}}}function E(z){for(const Y in n){const $=n[Y],O=z.isInstancedMesh===!0?z.id:0,K=$[O];if(K!==void 0){for(const ne in K){const X=K[ne];for(const re in X)m(X[re].object),delete X[re];delete K[ne]}delete $[O],Object.keys($).length===0&&delete n[Y]}}}function L(){k(),l=!0,a!==r&&(a=r,h(a.object))}function k(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:c,reset:L,resetDefaultState:k,dispose:P,releaseStatesOfGeometry:R,releaseStatesOfObject:E,releaseStatesOfProgram:N,initAttributes:A,enableAttribute:S,disableUnusedAttributes:I}}function Vm(i,e,t){let n;function r(d){n=d}function a(d,h){i.drawArrays(n,d,h),t.update(h,n,1)}function l(d,h,m){m!==0&&(i.drawArraysInstanced(n,d,h,m),t.update(h,n,m))}function c(d,h,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,d,0,h,0,m);let f=0;for(let v=0;v<m;v++)f+=h[v];t.update(f,n,1)}this.setMode=r,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function Wm(i,e,t,n){let r;function a(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const N=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function l(N){return!(N!==wn&&n.convert(N)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(N){const E=N===zn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(N!==hn&&N!==Fn&&!E&&n.convert(N)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function d(N){if(N==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const m=d(h);m!==h&&(We("WebGLRenderer:",h,"not supported, using",m,"instead."),h=m);const g=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&f===!1&&We("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const v=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),T=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=i.getParameter(i.MAX_TEXTURE_SIZE),S=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),I=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),H=i.getParameter(i.MAX_VARYING_VECTORS),w=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=i.getParameter(i.MAX_SAMPLES),R=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:d,textureFormatReadable:l,textureTypeReadable:c,precision:h,logarithmicDepthBuffer:g,reversedDepthBuffer:f,maxTextures:v,maxVertexTextures:T,maxTextureSize:A,maxCubemapSize:S,maxAttributes:_,maxVertexUniforms:I,maxVaryings:H,maxFragmentUniforms:w,maxSamples:P,samples:R}}function Xm(i){const e=this;let t=null,n=0,r=!1,a=!1;const l=new Kn,c=new Ze,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(g,f){const v=g.length!==0||f||n!==0||r;return r=f,n=g.length,v},this.beginShadows=function(){a=!0,m(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(g,f){t=m(g,f,0)},this.setState=function(g,f,v){const T=g.clippingPlanes,A=g.clipIntersection,S=g.clipShadows,_=i.get(g);if(!r||T===null||T.length===0||a&&!S)a?m(null):h();else{const I=a?0:n,H=I*4;let w=_.clippingState||null;d.value=w,w=m(T,f,H,v);for(let P=0;P!==H;++P)w[P]=t[P];_.clippingState=w,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=I}};function h(){d.value!==t&&(d.value=t,d.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function m(g,f,v,T){const A=g!==null?g.length:0;let S=null;if(A!==0){if(S=d.value,T!==!0||S===null){const _=v+A*4,I=f.matrixWorldInverse;c.getNormalMatrix(I),(S===null||S.length<_)&&(S=new Float32Array(_));for(let H=0,w=v;H!==A;++H,w+=4)l.copy(g[H]).applyMatrix4(I,c),l.normal.toArray(S,w),S[w+3]=l.constant}d.value=S,d.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,S}}const Wi=4,Ym=6,qm=20,$m=256,lr=new Mo,Al=new tt;let la=null,ca=0,ua=0,ha=!1;const Km=new J,gi=new J;class Rl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,a={}){const{size:l=256,position:c=Km}=a;la=this._renderer.getRenderTarget(),ca=this._renderer.getActiveCubeFace(),ua=this._renderer.getActiveMipmapLevel(),ha=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(l);const d=this._allocateTargets();return d.depthBuffer=!0,this._sceneToCubeUV(e,n,r,d,c),t>0&&this._blur(d,0,0,t),this._applyPMREM(d),this._cleanup(d),d}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Dl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Pl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(la,ca,ua),this._renderer.xr.enabled=ha,e.scissorTest=!1,zi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Mi||e.mapping===$i?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),la=this._renderer.getRenderTarget(),ca=this._renderer.getActiveCubeFace(),ua=this._renderer.getActiveMipmapLevel(),ha=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Jt,minFilter:Jt,generateMipmaps:!1,type:zn,format:wn,colorSpace:ps,depthBuffer:!1},r=Cl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Cl(e,t,n);const{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Zm(a)),this._blurMaterial=jm(a,e,t),this._ggxMaterial=Jm(a,e,t)}return r}_compileMaterial(e){const t=new Rn(new sn,e);this._renderer.compile(t,lr)}_sceneToCubeUV(e,t,n,r,a){const d=new _n(90,1,t,n),h=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],g=this._renderer,f=g.autoClear,v=g.toneMapping;g.getClearColor(Al),g.toneMapping=Bn,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(r),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Rn(new Er,new bc({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1})));const A=this._backgroundBox,S=A.material;let _=!1;const I=e.background;I?I.isColor&&(S.color.copy(I),e.background=null,_=!0):(S.color.copy(Al),_=!0);for(let H=0;H<6;H++){const w=H%3;w===0?(d.up.set(0,h[H],0),d.position.set(a.x,a.y,a.z),d.lookAt(a.x+m[H],a.y,a.z)):w===1?(d.up.set(0,0,h[H]),d.position.set(a.x,a.y,a.z),d.lookAt(a.x,a.y+m[H],a.z)):(d.up.set(0,h[H],0),d.position.set(a.x,a.y,a.z),d.lookAt(a.x,a.y,a.z+m[H]));const P=this._cubeSize;zi(r,w*P,H>2?P:0,P,P),g.setRenderTarget(r),_&&g.render(A,d),g.render(e,d)}g.toneMapping=v,g.autoClear=f,e.background=I}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Mi||e.mapping===$i;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Dl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Pl());const a=r?this._cubemapMaterial:this._equirectMaterial,l=this._lodMeshes[0];l.material=a;const c=a.uniforms;c.envMap.value=e;const d=this._cubeSize;zi(t,0,0,3*d,2*d),n.setRenderTarget(t),n.render(l,lr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let a=1;a<r;a++)this._applyGGXFilter(e,a-1,a);t.autoClear=n}_applyGGXFilter(e,t,n){const r=this._renderer,a=this._pingPongRenderTarget,l=this._ggxMaterial,c=this._lodMeshes[n];c.material=l;const d=l.uniforms,h=n/(this._lodMeshes.length-1),m=t/(this._lodMeshes.length-1),g=Math.sqrt(h*h-m*m),f=h*1.25,v=g*f,{_lodMax:T}=this,A=this._sizeLods[n],S=3*A*(n>T-Wi?n-T+Wi:0),_=4*(this._cubeSize-A);d.envMap.value=e.texture,d.roughness.value=v,d.mipInt.value=T-t,zi(a,S,_,3*A,2*A),r.setRenderTarget(a),r.render(c,lr),d.envMap.value=a.texture,d.roughness.value=0,d.mipInt.value=T-n,zi(e,S,_,3*A,2*A),r.setRenderTarget(e),r.render(c,lr)}_blur(e,t,n,r){const a=this._pingPongRenderTarget,l=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,a,t,n,l),this._blurPass(a,e,n,n,l)}_blurPass(e,t,n,r,a){const l=this._renderer,c=this._blurMaterial,d=this._lodMeshes[r];d.material=c;const h=c.uniforms;h.envMap.value=e.texture,h.sigma.value=a,h.mipInt.value=this._lodMax-n;const m=this._sizeLods[r],g=3*m*(r>this._lodMax-Wi?r-this._lodMax+Wi:0),f=4*(this._cubeSize-m);zi(t,g,f,3*m,2*m),l.setRenderTarget(t),l.render(d,lr)}}function Zm(i){const e=[],t=[];let n=i;const r=i-Wi+1+Ym;for(let a=0;a<r;a++){const l=Math.pow(2,n);e.push(l);const c=1/(l-2),d=-c,h=1+c,m=[d,d,h,d,h,h,d,d,h,h,d,h],g=6,f=6,v=3,T=new Float32Array(v*f*g),A=new Float32Array(v*f*g);for(let _=0;_<g;_++){const I=_%3*2/3-1,H=_>2?0:-1,w=[I,H,0,I+2/3,H,0,I+2/3,H+1,0,I,H,0,I+2/3,H+1,0,I,H+1,0];T.set(w,v*f*_);for(let P=0;P<f;P++){const R=m[P*2]*2-1,N=m[P*2+1]*2-1;_===0?gi.set(1,N,R):_===1?gi.set(-R,1,-N):_===2?gi.set(-R,N,1):_===3?gi.set(-1,N,-R):_===4?gi.set(-R,-1,N):gi.set(R,N,-1),gi.toArray(A,(_*f+P)*v)}}const S=new sn;S.setAttribute("position",new gn(T,v)),S.setAttribute("outputDirection",new gn(A,v)),t.push(new Rn(S,null)),n>Wi&&n--}return{lodMeshes:t,sizeLods:e}}function Cl(i,e,t){const n=new An(i,e,t);return n.texture.mapping=Ss,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function zi(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Jm(i,e,t){return new Hn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:$m,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ys(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function jm(i,e,t){return new Hn({name:"SphericalGaussianBlur",defines:{SAMPLES:qm,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:ys(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function Pl(){return new Hn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ys(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function Dl(){return new Hn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ys(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function ys(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Uc extends An{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new wc(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Er(5,5,5),a=new Hn({name:"CubemapFromEquirect",uniforms:Ki(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:rn,blending:Jn});a.uniforms.tEquirect.value=t;const l=new Rn(r,a),c=t.minFilter;return t.minFilter===vi&&(t.minFilter=Jt),new Qd(1,10,this).update(e,l),t.minFilter=c,l.geometry.dispose(),l.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const a=e.getRenderTarget();for(let l=0;l<6;l++)e.setRenderTarget(this,l),e.clear(t,n,r);e.setRenderTarget(a)}}function Qm(i){let e=new WeakMap,t=new WeakMap,n=null;function r(f,v=!1){return f==null?null:v?l(f):a(f)}function a(f){if(f&&f.isTexture){const v=f.mapping;if(v===Fs||v===Os)if(e.has(f)){const T=e.get(f).texture;return c(T,f.mapping)}else{const T=f.image;if(T&&T.height>0){const A=new Uc(T.height);return A.fromEquirectangularTexture(i,f),e.set(f,A),f.addEventListener("dispose",h),c(A.texture,f.mapping)}else return null}}return f}function l(f){if(f&&f.isTexture){const v=f.mapping,T=v===Fs||v===Os,A=v===Mi||v===$i;if(T||A){let S=t.get(f);const _=S!==void 0?S.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==_)return n===null&&(n=new Rl(i)),S=T?n.fromEquirectangular(f,S):n.fromCubemap(f,S),S.texture.pmremVersion=f.pmremVersion,t.set(f,S),S.texture;if(S!==void 0)return S.texture;{const I=f.image;return T&&I&&I.height>0||A&&I&&d(I)?(n===null&&(n=new Rl(i)),S=T?n.fromEquirectangular(f):n.fromCubemap(f),S.texture.pmremVersion=f.pmremVersion,t.set(f,S),f.addEventListener("dispose",m),S.texture):null}}}return f}function c(f,v){return v===Fs?f.mapping=Mi:v===Os&&(f.mapping=$i),f}function d(f){let v=0;const T=6;for(let A=0;A<T;A++)f[A]!==void 0&&v++;return v===T}function h(f){const v=f.target;v.removeEventListener("dispose",h);const T=e.get(v);T!==void 0&&(e.delete(v),T.dispose())}function m(f){const v=f.target;v.removeEventListener("dispose",m);const T=t.get(v);T!==void 0&&(t.delete(v),T.dispose())}function g(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:g}}function e_(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&Yi("WebGLRenderer: "+n+" extension not supported."),r}}}function t_(i,e,t,n){const r={},a=new WeakMap;function l(g){const f=g.target;f.index!==null&&e.remove(f.index);for(const T in f.attributes)e.remove(f.attributes[T]);f.removeEventListener("dispose",l),delete r[f.id];const v=a.get(f);v&&(e.remove(v),a.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function c(g,f){return r[f.id]===!0||(f.addEventListener("dispose",l),r[f.id]=!0,t.memory.geometries++),f}function d(g){const f=g.attributes;for(const v in f)e.update(f[v],i.ARRAY_BUFFER)}function h(g){const f=[],v=g.index,T=g.attributes.position;let A=0;if(T===void 0)return;if(v!==null){const I=v.array;A=v.version;for(let H=0,w=I.length;H<w;H+=3){const P=I[H+0],R=I[H+1],N=I[H+2];f.push(P,R,R,N,N,P)}}else{const I=T.array;A=T.version;for(let H=0,w=I.length/3-1;H<w;H+=3){const P=H+0,R=H+1,N=H+2;f.push(P,R,R,N,N,P)}}const S=new(T.count>=65535?yc:Ec)(f,1);S.version=A;const _=a.get(g);_&&e.remove(_),a.set(g,S)}function m(g){const f=a.get(g);if(f){const v=g.index;v!==null&&f.version<v.version&&h(g)}else h(g);return a.get(g)}return{get:c,update:d,getWireframeAttribute:m}}function n_(i,e,t){let n;function r(g){n=g}let a,l;function c(g){a=g.type,l=g.bytesPerElement}function d(g,f){i.drawElements(n,f,a,g*l),t.update(f,n,1)}function h(g,f,v){v!==0&&(i.drawElementsInstanced(n,f,a,g*l,v),t.update(f,n,v))}function m(g,f,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,a,g,0,v);let A=0;for(let S=0;S<v;S++)A+=f[S];t.update(A,n,1)}this.setMode=r,this.setIndex=c,this.render=d,this.renderInstances=h,this.renderMultiDraw=m}function i_(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,l,c){switch(t.calls++,l){case i.TRIANGLES:t.triangles+=c*(a/3);break;case i.LINES:t.lines+=c*(a/2);break;case i.LINE_STRIP:t.lines+=c*(a-1);break;case i.LINE_LOOP:t.lines+=c*a;break;case i.POINTS:t.points+=c*a;break;default:gt("WebGLInfo: Unknown draw mode:",l);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function r_(i,e,t){const n=new WeakMap,r=new Lt;function a(l,c,d){const h=l.morphTargetInfluences,m=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,g=m!==void 0?m.length:0;let f=n.get(c);if(f===void 0||f.count!==g){let L=function(){N.dispose(),n.delete(c),c.removeEventListener("dispose",L)};f!==void 0&&f.texture.dispose();const v=c.morphAttributes.position!==void 0,T=c.morphAttributes.normal!==void 0,A=c.morphAttributes.color!==void 0,S=c.morphAttributes.position||[],_=c.morphAttributes.normal||[],I=c.morphAttributes.color||[];let H=0;v===!0&&(H=1),T===!0&&(H=2),A===!0&&(H=3);let w=c.attributes.position.count*H,P=1;w>e.maxTextureSize&&(P=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const R=new Float32Array(w*P*4*g),N=new xc(R,w,P,g);N.type=Fn,N.needsUpdate=!0;const E=H*4;for(let k=0;k<g;k++){const z=S[k],Y=_[k],$=I[k],O=w*P*4*k;for(let K=0;K<z.count;K++){const ne=K*E;v===!0&&(r.fromBufferAttribute(z,K),R[O+ne+0]=r.x,R[O+ne+1]=r.y,R[O+ne+2]=r.z,R[O+ne+3]=0),T===!0&&(r.fromBufferAttribute(Y,K),R[O+ne+4]=r.x,R[O+ne+5]=r.y,R[O+ne+6]=r.z,R[O+ne+7]=0),A===!0&&(r.fromBufferAttribute($,K),R[O+ne+8]=r.x,R[O+ne+9]=r.y,R[O+ne+10]=r.z,R[O+ne+11]=$.itemSize===4?r.w:1)}}f={count:g,texture:N,size:new Ke(w,P)},n.set(c,f),c.addEventListener("dispose",L)}if(l.isInstancedMesh===!0&&l.morphTexture!==null)d.getUniforms().setValue(i,"morphTexture",l.morphTexture,t);else{let v=0;for(let A=0;A<h.length;A++)v+=h[A];const T=c.morphTargetsRelative?1:1-v;d.getUniforms().setValue(i,"morphTargetBaseInfluence",T),d.getUniforms().setValue(i,"morphTargetInfluences",h)}d.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),d.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:a}}function s_(i,e,t,n,r){let a=new WeakMap;function l(h){const m=r.render.frame,g=h.geometry,f=e.get(h,g);if(a.get(f)!==m&&(e.update(f),a.set(f,m)),h.isInstancedMesh&&(h.hasEventListener("dispose",d)===!1&&h.addEventListener("dispose",d),a.get(h)!==m&&(t.update(h.instanceMatrix,i.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,i.ARRAY_BUFFER),a.set(h,m))),h.isSkinnedMesh){const v=h.skeleton;a.get(v)!==m&&(v.update(),a.set(v,m))}return f}function c(){a=new WeakMap}function d(h){const m=h.target;m.removeEventListener("dispose",d),n.releaseStatesOfObject(m),t.remove(m.instanceMatrix),m.instanceColor!==null&&t.remove(m.instanceColor)}return{update:l,dispose:c}}const a_={[nc]:"LINEAR_TONE_MAPPING",[ic]:"REINHARD_TONE_MAPPING",[rc]:"CINEON_TONE_MAPPING",[sc]:"ACES_FILMIC_TONE_MAPPING",[oc]:"AGX_TONE_MAPPING",[lc]:"NEUTRAL_TONE_MAPPING",[ac]:"CUSTOM_TONE_MAPPING"};function o_(i,e,t,n,r,a){const l=new An(e,t,{type:i,depthBuffer:r,stencilBuffer:a,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let c=null,d=null;const h=new sn;h.setAttribute("position",new $t([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new $t([0,2,0,0,2,0],2));const m=new Vd({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),g=new Rn(h,m),f=new Mo(-1,1,1,-1,0,1);let v=null,T=null,A=!1,S,_=null,I=[],H=!1;this.setSize=function(w,P){l.setSize(w,P),c!==null&&c.setSize(w,P),d!==null&&d.setSize(w,P);for(let R=0;R<I.length;R++){const N=I[R];N.setSize&&N.setSize(w,P)}},this.setEffects=function(w){I=w,H=I.length>0&&I[0].isRenderPass===!0;const P=l.width,R=l.height;I.length>0&&c===null&&(c=new An(P,R,{type:zn,depthBuffer:!1,stencilBuffer:!1}),d=new An(P,R,{type:zn,depthBuffer:!1,stencilBuffer:!1}));for(let N=0;N<I.length;N++){const E=I[N];E.setSize&&E.setSize(P,R)}},this.begin=function(w,P){if(A||w.toneMapping===Bn&&I.length===0)return!1;if(_=P,P!==null){const R=P.width,N=P.height;(l.width!==R||l.height!==N)&&this.setSize(R,N)}return H===!1&&w.setRenderTarget(l),S=w.toneMapping,w.toneMapping=Bn,!0},this.hasRenderPass=function(){return H},this.end=function(w,P){w.toneMapping=S,A=!0;let R=l,N=c;for(let E=0;E<I.length;E++){const L=I[E];L.enabled!==!1&&(L.render(w,N,R,P),L.needsSwap!==!1&&(R=N,N=N===c?d:c))}if(v!==w.outputColorSpace||T!==w.toneMapping){v=w.outputColorSpace,T=w.toneMapping,m.defines={},lt.getTransfer(v)===Mt&&(m.defines.SRGB_TRANSFER="");const E=a_[T];E&&(m.defines[E]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=R.texture,w.setRenderTarget(_),w.render(g,f),_=null,A=!1},this.isCompositing=function(){return A},this.dispose=function(){l.dispose(),c!==null&&c.dispose(),d!==null&&d.dispose(),h.dispose(),m.dispose()}}const Ic=new en,ro=new Mr(1,1),Nc=new xc,Fc=new vd,Oc=new wc,Ll=[],Ul=[],Il=new Float32Array(16),Nl=new Float32Array(9),Fl=new Float32Array(4);function Qi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let a=Ll[r];if(a===void 0&&(a=new Float32Array(r),Ll[r]=a),e!==0){n.toArray(a,0);for(let l=1,c=0;l!==e;++l)c+=t,i[l].toArray(a,c)}return a}function Bt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function kt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function bs(i,e){let t=Ul[e];t===void 0&&(t=new Int32Array(e),Ul[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function l_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function c_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;i.uniform2fv(this.addr,e),kt(t,e)}}function u_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Bt(t,e))return;i.uniform3fv(this.addr,e),kt(t,e)}}function h_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;i.uniform4fv(this.addr,e),kt(t,e)}}function d_(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),kt(t,e)}else{if(Bt(t,n))return;Fl.set(n),i.uniformMatrix2fv(this.addr,!1,Fl),kt(t,n)}}function f_(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),kt(t,e)}else{if(Bt(t,n))return;Nl.set(n),i.uniformMatrix3fv(this.addr,!1,Nl),kt(t,n)}}function p_(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),kt(t,e)}else{if(Bt(t,n))return;Il.set(n),i.uniformMatrix4fv(this.addr,!1,Il),kt(t,n)}}function m_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function __(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;i.uniform2iv(this.addr,e),kt(t,e)}}function g_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;i.uniform3iv(this.addr,e),kt(t,e)}}function v_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;i.uniform4iv(this.addr,e),kt(t,e)}}function x_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function S_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;i.uniform2uiv(this.addr,e),kt(t,e)}}function M_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;i.uniform3uiv(this.addr,e),kt(t,e)}}function E_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;i.uniform4uiv(this.addr,e),kt(t,e)}}function y_(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let a;this.type===i.SAMPLER_2D_SHADOW?(ro.compareFunction=t.isReversedDepthBuffer()?mo:po,a=ro):a=Ic,t.setTexture2D(e||a,r)}function b_(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Fc,r)}function T_(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Oc,r)}function w_(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Nc,r)}function A_(i){switch(i){case 5126:return l_;case 35664:return c_;case 35665:return u_;case 35666:return h_;case 35674:return d_;case 35675:return f_;case 35676:return p_;case 5124:case 35670:return m_;case 35667:case 35671:return __;case 35668:case 35672:return g_;case 35669:case 35673:return v_;case 5125:return x_;case 36294:return S_;case 36295:return M_;case 36296:return E_;case 35678:case 36198:case 36298:case 36306:case 35682:return y_;case 35679:case 36299:case 36307:return b_;case 35680:case 36300:case 36308:case 36293:return T_;case 36289:case 36303:case 36311:case 36292:return w_}}function R_(i,e){i.uniform1fv(this.addr,e)}function C_(i,e){const t=Qi(e,this.size,2);i.uniform2fv(this.addr,t)}function P_(i,e){const t=Qi(e,this.size,3);i.uniform3fv(this.addr,t)}function D_(i,e){const t=Qi(e,this.size,4);i.uniform4fv(this.addr,t)}function L_(i,e){const t=Qi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function U_(i,e){const t=Qi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function I_(i,e){const t=Qi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function N_(i,e){i.uniform1iv(this.addr,e)}function F_(i,e){i.uniform2iv(this.addr,e)}function O_(i,e){i.uniform3iv(this.addr,e)}function B_(i,e){i.uniform4iv(this.addr,e)}function k_(i,e){i.uniform1uiv(this.addr,e)}function z_(i,e){i.uniform2uiv(this.addr,e)}function H_(i,e){i.uniform3uiv(this.addr,e)}function G_(i,e){i.uniform4uiv(this.addr,e)}function V_(i,e,t){const n=this.cache,r=e.length,a=bs(t,r);Bt(n,a)||(i.uniform1iv(this.addr,a),kt(n,a));let l;this.type===i.SAMPLER_2D_SHADOW?l=ro:l=Ic;for(let c=0;c!==r;++c)t.setTexture2D(e[c]||l,a[c])}function W_(i,e,t){const n=this.cache,r=e.length,a=bs(t,r);Bt(n,a)||(i.uniform1iv(this.addr,a),kt(n,a));for(let l=0;l!==r;++l)t.setTexture3D(e[l]||Fc,a[l])}function X_(i,e,t){const n=this.cache,r=e.length,a=bs(t,r);Bt(n,a)||(i.uniform1iv(this.addr,a),kt(n,a));for(let l=0;l!==r;++l)t.setTextureCube(e[l]||Oc,a[l])}function Y_(i,e,t){const n=this.cache,r=e.length,a=bs(t,r);Bt(n,a)||(i.uniform1iv(this.addr,a),kt(n,a));for(let l=0;l!==r;++l)t.setTexture2DArray(e[l]||Nc,a[l])}function q_(i){switch(i){case 5126:return R_;case 35664:return C_;case 35665:return P_;case 35666:return D_;case 35674:return L_;case 35675:return U_;case 35676:return I_;case 5124:case 35670:return N_;case 35667:case 35671:return F_;case 35668:case 35672:return O_;case 35669:case 35673:return B_;case 5125:return k_;case 36294:return z_;case 36295:return H_;case 36296:return G_;case 35678:case 36198:case 36298:case 36306:case 35682:return V_;case 35679:case 36299:case 36307:return W_;case 35680:case 36300:case 36308:case 36293:return X_;case 36289:case 36303:case 36311:case 36292:return Y_}}class $_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=A_(t.type)}}class K_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=q_(t.type)}}class Z_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let a=0,l=r.length;a!==l;++a){const c=r[a];c.setValue(e,t[c.id],n)}}}const da=/(\w+)(\])?(\[|\.)?/g;function Ol(i,e){i.seq.push(e),i.map[e.id]=e}function J_(i,e,t){const n=i.name,r=n.length;for(da.lastIndex=0;;){const a=da.exec(n),l=da.lastIndex;let c=a[1];const d=a[2]==="]",h=a[3];if(d&&(c=c|0),h===void 0||h==="["&&l+2===r){Ol(t,h===void 0?new $_(c,i,e):new K_(c,i,e));break}else{let g=t.map[c];g===void 0&&(g=new Z_(c),Ol(t,g)),t=g}}}class hs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let l=0;l<n;++l){const c=e.getActiveUniform(t,l),d=e.getUniformLocation(t,c.name);J_(c,d,this)}const r=[],a=[];for(const l of this.seq)l.type===e.SAMPLER_2D_SHADOW||l.type===e.SAMPLER_CUBE_SHADOW||l.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(l):a.push(l);r.length>0&&(this.seq=r.concat(a))}setValue(e,t,n,r){const a=this.map[t];a!==void 0&&a.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let a=0,l=t.length;a!==l;++a){const c=t[a],d=n[c.id];d.needsUpdate!==!1&&c.setValue(e,d.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,a=e.length;r!==a;++r){const l=e[r];l.id in t&&n.push(l)}return n}}function Bl(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const j_=37297;let Q_=0;function eg(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let l=r;l<a;l++){const c=l+1;n.push(`${c===e?">":" "} ${c}: ${t[l]}`)}return n.join(`
`)}const kl=new Ze;function tg(i){lt._getMatrix(kl,lt.workingColorSpace,i);const e=`mat3( ${kl.elements.map(t=>t.toFixed(4))} )`;switch(lt.getTransfer(i)){case ms:return[e,"LinearTransferOETF"];case Mt:return[e,"sRGBTransferOETF"];default:return We("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function zl(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),a=(i.getShaderInfoLog(e)||"").trim();if(n&&a==="")return"";const l=/ERROR: 0:(\d+)/.exec(a);if(l){const c=parseInt(l[1]);return t.toUpperCase()+`

`+a+`

`+eg(i.getShaderSource(e),c)}else return a}function ng(i,e){const t=tg(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const ig={[nc]:"Linear",[ic]:"Reinhard",[rc]:"Cineon",[sc]:"ACESFilmic",[oc]:"AgX",[lc]:"Neutral",[ac]:"Custom"};function rg(i,e){const t=ig[e];return t===void 0?(We("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const rs=new J;function sg(){lt.getLuminanceCoefficients(rs);const i=rs.x.toFixed(4),e=rs.y.toFixed(4),t=rs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ag(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(dr).join(`
`)}function og(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function lg(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const a=i.getActiveAttrib(e,r),l=a.name;let c=1;a.type===i.FLOAT_MAT2&&(c=2),a.type===i.FLOAT_MAT3&&(c=3),a.type===i.FLOAT_MAT4&&(c=4),t[l]={type:a.type,location:i.getAttribLocation(e,l),locationSize:c}}return t}function dr(i){return i!==""}function Hl(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Gl(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const cg=/^[ \t]*#include +<([\w\d./]+)>/gm;function so(i){return i.replace(cg,hg)}const ug=new Map;function hg(i,e){let t=et[e];if(t===void 0){const n=ug.get(e);if(n!==void 0)t=et[n],We('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return so(t)}const dg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vl(i){return i.replace(dg,fg)}function fg(i,e,t,n){let r="";for(let a=parseInt(e);a<parseInt(t);a++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function Wl(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const pg={[as]:"SHADOWMAP_TYPE_PCF",[ur]:"SHADOWMAP_TYPE_VSM"};function mg(i){return pg[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const _g={[Mi]:"ENVMAP_TYPE_CUBE",[$i]:"ENVMAP_TYPE_CUBE",[Ss]:"ENVMAP_TYPE_CUBE_UV"};function gg(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":_g[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const vg={[$i]:"ENVMAP_MODE_REFRACTION"};function xg(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":vg[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Sg={[tc]:"ENVMAP_BLENDING_MULTIPLY",[Ih]:"ENVMAP_BLENDING_MIX",[Nh]:"ENVMAP_BLENDING_ADD"};function Mg(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Sg[i.combine]||"ENVMAP_BLENDING_NONE"}function Eg(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function yg(i,e,t,n){const r=i.getContext(),a=t.defines;let l=t.vertexShader,c=t.fragmentShader;const d=mg(t),h=gg(t),m=xg(t),g=Mg(t),f=Eg(t),v=ag(t),T=og(a),A=r.createProgram();let S,_,I=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T].filter(dr).join(`
`),S.length>0&&(S+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T].filter(dr).join(`
`),_.length>0&&(_+=`
`)):(S=[Wl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(dr).join(`
`),_=[Wl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+m:"",t.envMap?"#define "+g:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Bn?"#define TONE_MAPPING":"",t.toneMapping!==Bn?et.tonemapping_pars_fragment:"",t.toneMapping!==Bn?rg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",et.colorspace_pars_fragment,ng("linearToOutputTexel",t.outputColorSpace),sg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(dr).join(`
`)),l=so(l),l=Hl(l,t),l=Gl(l,t),c=so(c),c=Hl(c,t),c=Gl(c,t),l=Vl(l),c=Vl(c),t.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,S=[v,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,_=["#define varying in",t.glslVersion===qo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===qo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const H=I+S+l,w=I+_+c,P=Bl(r,r.VERTEX_SHADER,H),R=Bl(r,r.FRAGMENT_SHADER,w);r.attachShader(A,P),r.attachShader(A,R),t.index0AttributeName!==void 0?r.bindAttribLocation(A,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(A,0,"position"),r.linkProgram(A);function N(z){if(i.debug.checkShaderErrors){const Y=r.getProgramInfoLog(A)||"",$=r.getShaderInfoLog(P)||"",O=r.getShaderInfoLog(R)||"",K=Y.trim(),ne=$.trim(),X=O.trim();let re=!0,se=!0;if(r.getProgramParameter(A,r.LINK_STATUS)===!1)if(re=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,A,P,R);else{const ce=zl(r,P,"vertex"),he=zl(r,R,"fragment");gt("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(A,r.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+K+`
`+ce+`
`+he)}else K!==""?We("WebGLProgram: Program Info Log:",K):(ne===""||X==="")&&(se=!1);se&&(z.diagnostics={runnable:re,programLog:K,vertexShader:{log:ne,prefix:S},fragmentShader:{log:X,prefix:_}})}r.deleteShader(P),r.deleteShader(R),E=new hs(r,A),L=lg(r,A)}let E;this.getUniforms=function(){return E===void 0&&N(this),E};let L;this.getAttributes=function(){return L===void 0&&N(this),L};let k=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=r.getProgramParameter(A,j_)),k},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(A),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Q_++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=P,this.fragmentShader=R,this}let bg=0;class Tg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new wg(e),t.set(e,n)),n}}class wg{constructor(e){this.id=bg++,this.code=e,this.usedTimes=0}}function Ag(i){return i===Ei||i===ds||i===fs}function Rg(i,e,t,n,r,a){const l=new Sc,c=new Tg,d=new Set,h=[],m=new Map,g=n.logarithmicDepthBuffer;let f=n.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(E){return d.add(E),E===0?"uv":`uv${E}`}function A(E,L,k,z,Y,$){const O=z.fog,K=Y.geometry,ne=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?z.environment:null,X=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap,re=e.get(E.envMap||ne,X),se=re&&re.mapping===Ss?re.image.height:null,ce=v[E.type];E.precision!==null&&(f=n.getMaxPrecision(E.precision),f!==E.precision&&We("WebGLProgram.getParameters:",E.precision,"not supported, using",f,"instead."));const he=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Oe=he!==void 0?he.length:0;let Be=0;K.morphAttributes.position!==void 0&&(Be=1),K.morphAttributes.normal!==void 0&&(Be=2),K.morphAttributes.color!==void 0&&(Be=3);let ht,nt,it,ae;if(ce){const yt=Nn[ce];ht=yt.vertexShader,nt=yt.fragmentShader}else{ht=E.vertexShader,nt=E.fragmentShader;const yt=c.getVertexShaderStage(E),mt=c.getFragmentShaderStage(E);c.update(E,yt,mt),it=yt.id,ae=mt.id}const ue=i.getRenderTarget(),ye=i.state.buffers.depth.getReversed(),He=Y.isInstancedMesh===!0,Ae=Y.isBatchedMesh===!0,Ve=!!E.map,Tt=!!E.matcap,Qe=!!re,at=!!E.aoMap,vt=!!E.lightMap,Je=!!E.bumpMap&&E.wireframe===!1,wt=!!E.normalMap,It=!!E.displacementMap,Ft=!!E.emissiveMap,At=!!E.metalnessMap,Rt=!!E.roughnessMap,V=E.anisotropy>0,zt=E.clearcoat>0,pt=E.dispersion>0,D=E.retroreflectivity>0,x=E.iridescence>0,q=E.sheen>0,W=E.transmission>0,te=V&&!!E.anisotropyMap,me=zt&&!!E.clearcoatMap,ge=zt&&!!E.clearcoatNormalMap,Q=zt&&!!E.clearcoatRoughnessMap,le=x&&!!E.iridescenceMap,ve=x&&!!E.iridescenceThicknessMap,Ue=q&&!!E.sheenColorMap,Ee=q&&!!E.sheenRoughnessMap,_e=!!E.specularMap,ke=!!E.specularColorMap,Ge=!!E.specularIntensityMap,qe=W&&!!E.transmissionMap,G=W&&!!E.thicknessMap,Se=!!E.gradientMap,oe=!!E.alphaMap,Me=E.alphaTest>0,Re=!!E.alphaHash,de=!!E.extensions;let pe=Bn;E.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(pe=i.toneMapping);const Fe={shaderID:ce,shaderType:E.type,shaderName:E.name,vertexShader:ht,fragmentShader:nt,defines:E.defines,customVertexShaderID:it,customFragmentShaderID:ae,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:f,batching:Ae,batchingColor:Ae&&Y._colorsTexture!==null,instancing:He,instancingColor:He&&Y.instanceColor!==null,instancingMorph:He&&Y.morphTexture!==null,outputColorSpace:ue===null?i.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:lt.workingColorSpace,alphaToCoverage:!!E.alphaToCoverage,map:Ve,matcap:Tt,envMap:Qe,envMapMode:Qe&&re.mapping,envMapCubeUVHeight:se,aoMap:at,lightMap:vt,bumpMap:Je,normalMap:wt,displacementMap:It,emissiveMap:Ft,normalMapObjectSpace:wt&&E.normalMapType===Bh,normalMapTangentSpace:wt&&E.normalMapType===io,packedNormalMap:wt&&E.normalMapType===io&&Ag(E.normalMap.format),metalnessMap:At,roughnessMap:Rt,anisotropy:V,anisotropyMap:te,clearcoat:zt,clearcoatMap:me,clearcoatNormalMap:ge,clearcoatRoughnessMap:Q,dispersion:pt,retroreflection:D,iridescence:x,iridescenceMap:le,iridescenceThicknessMap:ve,sheen:q,sheenColorMap:Ue,sheenRoughnessMap:Ee,specularMap:_e,specularColorMap:ke,specularIntensityMap:Ge,transmission:W,transmissionMap:qe,thicknessMap:G,gradientMap:Se,opaque:E.transparent===!1&&E.blending===fr&&E.alphaToCoverage===!1,alphaMap:oe,alphaTest:Me,alphaHash:Re,combine:E.combine,mapUv:Ve&&T(E.map.channel),aoMapUv:at&&T(E.aoMap.channel),lightMapUv:vt&&T(E.lightMap.channel),bumpMapUv:Je&&T(E.bumpMap.channel),normalMapUv:wt&&T(E.normalMap.channel),displacementMapUv:It&&T(E.displacementMap.channel),emissiveMapUv:Ft&&T(E.emissiveMap.channel),metalnessMapUv:At&&T(E.metalnessMap.channel),roughnessMapUv:Rt&&T(E.roughnessMap.channel),anisotropyMapUv:te&&T(E.anisotropyMap.channel),clearcoatMapUv:me&&T(E.clearcoatMap.channel),clearcoatNormalMapUv:ge&&T(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&T(E.clearcoatRoughnessMap.channel),iridescenceMapUv:le&&T(E.iridescenceMap.channel),iridescenceThicknessMapUv:ve&&T(E.iridescenceThicknessMap.channel),sheenColorMapUv:Ue&&T(E.sheenColorMap.channel),sheenRoughnessMapUv:Ee&&T(E.sheenRoughnessMap.channel),specularMapUv:_e&&T(E.specularMap.channel),specularColorMapUv:ke&&T(E.specularColorMap.channel),specularIntensityMapUv:Ge&&T(E.specularIntensityMap.channel),transmissionMapUv:qe&&T(E.transmissionMap.channel),thicknessMapUv:G&&T(E.thicknessMap.channel),alphaMapUv:oe&&T(E.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(wt||V),vertexNormals:!!K.attributes.normal,vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!K.attributes.uv&&(Ve||oe),fog:!!O,useFog:E.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:E.wireframe===!1&&(E.flatShading===!0||K.attributes.normal===void 0&&wt===!1&&(E.isMeshLambertMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isMeshPhysicalMaterial)),sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:ye,skinning:Y.isSkinnedMesh===!0,hasPositionAttribute:K.attributes.position!==void 0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:Oe,morphTextureStride:Be,numSunLights:L.sun.length,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numSunLightShadows:L.sunShadowMap.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numLightProbeGrids:$.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&k.length>0,shadowMapType:i.shadowMap.type,toneMapping:pe,decodeVideoTexture:Ve&&E.map.isVideoTexture===!0&&lt.getTransfer(E.map.colorSpace)===Mt,decodeVideoTextureEmissive:Ft&&E.emissiveMap.isVideoTexture===!0&&lt.getTransfer(E.emissiveMap.colorSpace)===Mt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===bn,flipSided:E.side===rn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:de&&E.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(de&&E.extensions.multiDraw===!0||Ae)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Fe.vertexUv1s=d.has(1),Fe.vertexUv2s=d.has(2),Fe.vertexUv3s=d.has(3),d.clear(),Fe}function S(E){const L=[];if(E.shaderID?L.push(E.shaderID):(L.push(E.customVertexShaderID),L.push(E.customFragmentShaderID)),E.defines!==void 0)for(const k in E.defines)L.push(k),L.push(E.defines[k]);return E.isRawShaderMaterial===!1&&(_(L,E),I(L,E),L.push(i.outputColorSpace)),L.push(E.customProgramCacheKey),L.join()}function _(E,L){E.push(L.precision),E.push(L.outputColorSpace),E.push(L.envMapMode),E.push(L.envMapCubeUVHeight),E.push(L.mapUv),E.push(L.alphaMapUv),E.push(L.lightMapUv),E.push(L.aoMapUv),E.push(L.bumpMapUv),E.push(L.normalMapUv),E.push(L.displacementMapUv),E.push(L.emissiveMapUv),E.push(L.metalnessMapUv),E.push(L.roughnessMapUv),E.push(L.anisotropyMapUv),E.push(L.clearcoatMapUv),E.push(L.clearcoatNormalMapUv),E.push(L.clearcoatRoughnessMapUv),E.push(L.iridescenceMapUv),E.push(L.iridescenceThicknessMapUv),E.push(L.sheenColorMapUv),E.push(L.sheenRoughnessMapUv),E.push(L.specularMapUv),E.push(L.specularColorMapUv),E.push(L.specularIntensityMapUv),E.push(L.transmissionMapUv),E.push(L.thicknessMapUv),E.push(L.combine),E.push(L.fogExp2),E.push(L.sizeAttenuation),E.push(L.morphTargetsCount),E.push(L.morphAttributeCount),E.push(L.numSunLights),E.push(L.numDirLights),E.push(L.numPointLights),E.push(L.numSpotLights),E.push(L.numSpotLightMaps),E.push(L.numHemiLights),E.push(L.numRectAreaLights),E.push(L.numSunLightShadows),E.push(L.numDirLightShadows),E.push(L.numPointLightShadows),E.push(L.numSpotLightShadows),E.push(L.numSpotLightShadowsWithMaps),E.push(L.numLightProbes),E.push(L.shadowMapType),E.push(L.toneMapping),E.push(L.numClippingPlanes),E.push(L.numClipIntersection),E.push(L.depthPacking)}function I(E,L){l.disableAll(),L.instancing&&l.enable(0),L.instancingColor&&l.enable(1),L.instancingMorph&&l.enable(2),L.matcap&&l.enable(3),L.envMap&&l.enable(4),L.normalMapObjectSpace&&l.enable(5),L.normalMapTangentSpace&&l.enable(6),L.clearcoat&&l.enable(7),L.iridescence&&l.enable(8),L.alphaTest&&l.enable(9),L.vertexColors&&l.enable(10),L.vertexAlphas&&l.enable(11),L.vertexUv1s&&l.enable(12),L.vertexUv2s&&l.enable(13),L.vertexUv3s&&l.enable(14),L.vertexTangents&&l.enable(15),L.anisotropy&&l.enable(16),L.alphaHash&&l.enable(17),L.batching&&l.enable(18),L.dispersion&&l.enable(19),L.retroreflection&&l.enable(24),L.batchingColor&&l.enable(20),L.gradientMap&&l.enable(21),L.packedNormalMap&&l.enable(22),L.vertexNormals&&l.enable(23),E.push(l.mask),l.disableAll(),L.fog&&l.enable(0),L.useFog&&l.enable(1),L.flatShading&&l.enable(2),L.logarithmicDepthBuffer&&l.enable(3),L.reversedDepthBuffer&&l.enable(4),L.skinning&&l.enable(5),L.morphTargets&&l.enable(6),L.morphNormals&&l.enable(7),L.morphColors&&l.enable(8),L.premultipliedAlpha&&l.enable(9),L.shadowMapEnabled&&l.enable(10),L.doubleSided&&l.enable(11),L.flipSided&&l.enable(12),L.useDepthPacking&&l.enable(13),L.dithering&&l.enable(14),L.transmission&&l.enable(15),L.sheen&&l.enable(16),L.opaque&&l.enable(17),L.pointsUvs&&l.enable(18),L.decodeVideoTexture&&l.enable(19),L.decodeVideoTextureEmissive&&l.enable(20),L.alphaToCoverage&&l.enable(21),L.numLightProbeGrids>0&&l.enable(22),L.hasPositionAttribute&&l.enable(23),E.push(l.mask)}function H(E){const L=v[E.type];let k;if(L){const z=Nn[L];k=zd.clone(z.uniforms)}else k=E.uniforms;return k}function w(E,L){let k=m.get(L);return k!==void 0?++k.usedTimes:(k=new yg(i,L,E,r),h.push(k),m.set(L,k)),k}function P(E){if(--E.usedTimes===0){const L=h.indexOf(E);h[L]=h[h.length-1],h.pop(),m.delete(E.cacheKey),E.destroy()}}function R(E){c.remove(E)}function N(){c.dispose()}return{getParameters:A,getProgramCacheKey:S,getUniforms:H,acquireProgram:w,releaseProgram:P,releaseShaderCache:R,programs:h,dispose:N}}function Cg(){let i=new WeakMap;function e(l){return i.has(l)}function t(l){let c=i.get(l);return c===void 0&&(c={},i.set(l,c)),c}function n(l){i.delete(l)}function r(l,c,d){i.get(l)[c]=d}function a(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:a}}function Pg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Xl(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Yl(){const i=[];let e=0;const t=[],n=[],r=[];function a(){e=0,t.length=0,n.length=0,r.length=0}function l(f){let v=0;return f.isInstancedMesh&&(v+=2),f.isSkinnedMesh&&(v+=1),v}function c(f,v,T,A,S,_){let I=i[e];return I===void 0?(I={id:f.id,object:f,geometry:v,material:T,materialVariant:l(f),groupOrder:A,renderOrder:f.renderOrder,z:S,group:_},i[e]=I):(I.id=f.id,I.object=f,I.geometry=v,I.material=T,I.materialVariant=l(f),I.groupOrder=A,I.renderOrder=f.renderOrder,I.z=S,I.group=_),e++,I}function d(f,v,T,A,S,_,I){I.reversedDepth===!0&&(S=-S);const H=c(f,v,T,A,S,_);T.transmission>0?n.push(H):T.transparent===!0?r.push(H):t.push(H)}function h(f,v,T,A,S,_){const I=c(f,v,T,A,S,_);T.transmission>0?n.unshift(I):T.transparent===!0?r.unshift(I):t.unshift(I)}function m(f,v){t.length>1&&t.sort(f||Pg),n.length>1&&n.sort(v||Xl),r.length>1&&r.sort(v||Xl)}function g(){for(let f=e,v=i.length;f<v;f++){const T=i[f];if(T.id===null)break;T.id=null,T.object=null,T.geometry=null,T.material=null,T.group=null}}return{opaque:t,transmissive:n,transparent:r,init:a,push:d,unshift:h,finish:g,sort:m}}function Dg(){let i=new WeakMap;function e(n,r){const a=i.get(n);let l;return a===void 0?(l=new Yl,i.set(n,[l])):r>=a.length?(l=new Yl,a.push(l)):l=a[r],l}function t(){i=new WeakMap}return{get:e,dispose:t}}function Lg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new J,color:new tt};break;case"SpotLight":t={position:new J,direction:new J,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new J,color:new tt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new J,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":t={color:new tt,position:new J,halfWidth:new J,halfHeight:new J};break}return i[e.id]=t,t}}}function Ug(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Ig=0;function Ng(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Fg(i){const e=new Lg,t=Ug(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new J);const r=new J,a=new Ut,l=new Ut;function c(h){let m=0,g=0,f=0;for(let Y=0;Y<9;Y++)n.probe[Y].set(0,0,0);let v=0,T=0,A=0,S=0,_=0,I=0,H=0,w=0,P=0,R=0,N=0,E=0,L=0,k=0;h.sort(Ng);for(let Y=0,$=h.length;Y<$;Y++){const O=h[Y],K=O.color,ne=O.intensity,X=O.distance;let re=null;if(O.shadow&&O.shadow.map&&(O.shadow.map.texture.format===Ei?re=O.shadow.map.texture:re=O.shadow.map.depthTexture||O.shadow.map.texture),O.isAmbientLight)m+=K.r*ne,g+=K.g*ne,f+=K.b*ne;else if(O.isLightProbe){for(let se=0;se<9;se++)n.probe[se].addScaledVector(O.sh.coefficients[se],ne);k++}else if(O.isSunLight){const se=e.get(O);if(se.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){const ce=O.shadow,he=t.get(O);he.shadowIntensity=ce.intensity,he.shadowBias=ce.bias,he.shadowNormalBias=ce.normalBias,he.shadowRadius=ce.radius,he.shadowMapSize.copy(ce.mapSize).multiply(ce.getFrameExtents()),n.sunShadow[T]=he,n.sunShadowMap[T]=re;const Oe=ce.getViewportCount();for(let Be=0;Be<Oe;Be++)n.sunShadowMatrix[A+Be]=ce.getMatrix(Be),n.sunShadowCascade[A+Be]=ce._cascadeData[Be];A+=Oe,T++}n.sun[v]=se,v++}else if(O.isDirectionalLight){const se=e.get(O);if(se.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){const ce=O.shadow,he=t.get(O);he.shadowIntensity=ce.intensity,he.shadowBias=ce.bias,he.shadowNormalBias=ce.normalBias,he.shadowRadius=ce.radius,he.shadowMapSize=ce.mapSize,n.directionalShadow[S]=he,n.directionalShadowMap[S]=re,n.directionalShadowMatrix[S]=O.shadow.matrix,P++}n.directional[S]=se,S++}else if(O.isSpotLight){const se=e.get(O);se.position.setFromMatrixPosition(O.matrixWorld),se.color.copy(K).multiplyScalar(ne),se.distance=X,se.coneCos=Math.cos(O.angle),se.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),se.decay=O.decay,n.spot[I]=se;const ce=O.shadow;if(O.map&&(n.spotLightMap[E]=O.map,E++,ce.updateMatrices(O),O.castShadow&&L++),n.spotLightMatrix[I]=ce.matrix,O.castShadow){const he=t.get(O);he.shadowIntensity=ce.intensity,he.shadowBias=ce.bias,he.shadowNormalBias=ce.normalBias,he.shadowRadius=ce.radius,he.shadowMapSize=ce.mapSize,n.spotShadow[I]=he,n.spotShadowMap[I]=re,N++}I++}else if(O.isRectAreaLight){const se=e.get(O);se.color.copy(K).multiplyScalar(ne),se.halfWidth.set(O.width*.5,0,0),se.halfHeight.set(0,O.height*.5,0),n.rectArea[H]=se,H++}else if(O.isPointLight){const se=e.get(O);if(se.color.copy(O.color).multiplyScalar(O.intensity),se.distance=O.distance,se.decay=O.decay,O.castShadow){const ce=O.shadow,he=t.get(O);he.shadowIntensity=ce.intensity,he.shadowBias=ce.bias,he.shadowNormalBias=ce.normalBias,he.shadowRadius=ce.radius,he.shadowMapSize=ce.mapSize,he.shadowCameraNear=ce.camera.near,he.shadowCameraFar=ce.camera.far,n.pointShadow[_]=he,n.pointShadowMap[_]=re,n.pointShadowMatrix[_]=O.shadow.matrix,R++}n.point[_]=se,_++}else if(O.isHemisphereLight){const se=e.get(O);se.skyColor.copy(O.color).multiplyScalar(ne),se.groundColor.copy(O.groundColor).multiplyScalar(ne),n.hemi[w]=se,w++}}H>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=we.LTC_FLOAT_1,n.rectAreaLTC2=we.LTC_FLOAT_2):(n.rectAreaLTC1=we.LTC_HALF_1,n.rectAreaLTC2=we.LTC_HALF_2)),n.ambient[0]=m,n.ambient[1]=g,n.ambient[2]=f;const z=n.hash;(z.sunLength!==v||z.directionalLength!==S||z.pointLength!==_||z.spotLength!==I||z.rectAreaLength!==H||z.hemiLength!==w||z.numSunShadows!==T||z.numDirectionalShadows!==P||z.numPointShadows!==R||z.numSpotShadows!==N||z.numSpotMaps!==E||z.numLightProbes!==k)&&(n.sun.length=v,n.directional.length=S,n.spot.length=I,n.rectArea.length=H,n.point.length=_,n.hemi.length=w,n.sunShadow.length=T,n.sunShadowMap.length=T,n.sunShadowMatrix.length=A,n.sunShadowCascade.length=A,n.directionalShadow.length=P,n.directionalShadowMap.length=P,n.directionalShadowMatrix.length=P,n.pointShadow.length=R,n.pointShadowMap.length=R,n.pointShadowMatrix.length=R,n.spotShadow.length=N,n.spotShadowMap.length=N,n.spotLightMatrix.length=N+E-L,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=L,n.numLightProbes=k,z.sunLength=v,z.directionalLength=S,z.pointLength=_,z.spotLength=I,z.rectAreaLength=H,z.hemiLength=w,z.numSunShadows=T,z.numDirectionalShadows=P,z.numPointShadows=R,z.numSpotShadows=N,z.numSpotMaps=E,z.numLightProbes=k,n.version=Ig++)}function d(h,m){let g=0,f=0,v=0,T=0,A=0,S=0;const _=m.matrixWorldInverse;for(let I=0,H=h.length;I<H;I++){const w=h[I];if(w.isSunLight){const P=n.sun[g];P.direction.setFromMatrixPosition(w.matrixWorld),P.direction.transformDirection(_),g++}else if(w.isDirectionalLight){const P=n.directional[f];P.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),P.direction.sub(r),P.direction.transformDirection(_),f++}else if(w.isSpotLight){const P=n.spot[T];P.position.setFromMatrixPosition(w.matrixWorld),P.position.applyMatrix4(_),P.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),P.direction.sub(r),P.direction.transformDirection(_),T++}else if(w.isRectAreaLight){const P=n.rectArea[A];P.position.setFromMatrixPosition(w.matrixWorld),P.position.applyMatrix4(_),l.identity(),a.copy(w.matrixWorld),a.premultiply(_),l.extractRotation(a),P.halfWidth.set(w.width*.5,0,0),P.halfHeight.set(0,w.height*.5,0),P.halfWidth.applyMatrix4(l),P.halfHeight.applyMatrix4(l),A++}else if(w.isPointLight){const P=n.point[v];P.position.setFromMatrixPosition(w.matrixWorld),P.position.applyMatrix4(_),v++}else if(w.isHemisphereLight){const P=n.hemi[S];P.direction.setFromMatrixPosition(w.matrixWorld),P.direction.transformDirection(_),S++}}}return{setup:c,setupView:d,state:n}}function ql(i){const e=new Fg(i),t=[],n=[],r=[];function a(f){g.camera=f,t.length=0,n.length=0,r.length=0}function l(f){t.push(f)}function c(f){n.push(f)}function d(f){r.push(f)}function h(){e.setup(t)}function m(f){e.setupView(t,f)}const g={lightsArray:t,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:g,setupLights:h,setupLightsView:m,pushLight:l,pushShadow:c,pushLightProbeGrid:d}}function Og(i){let e=new WeakMap;function t(r,a=0){const l=e.get(r);let c;return l===void 0?(c=new ql(i),e.set(r,[c])):a>=l.length?(c=new ql(i),l.push(c)):c=l[a],c}function n(){e=new WeakMap}return{get:t,dispose:n}}const Bg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,kg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,zg=[new J(1,0,0),new J(-1,0,0),new J(0,1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1)],Hg=[new J(0,-1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1),new J(0,-1,0),new J(0,-1,0)],$l=new Ut,cr=new J,fa=new J;function Gg(i,e,t){let n=new xo;const r=new Ke,a=new Ke,l=new Lt,c=new Wd,d=new Xd,h={},m=t.maxTextureSize,g={[Si]:rn,[rn]:Si,[bn]:bn},f=new Hn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ke},radius:{value:4}},vertexShader:Bg,fragmentShader:kg}),v=f.clone();v.defines.HORIZONTAL_PASS=1;const T=new sn;T.setAttribute("position",new gn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new Rn(T,f),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=as;let _=this.type;this.render=function(R,N,E){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||R.length===0)return;this.type===mh&&(We("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=as);const L=i.getRenderTarget(),k=i.getActiveCubeFace(),z=i.getActiveMipmapLevel(),Y=i.state;Y.setBlending(Jn),Y.buffers.depth.getReversed()===!0?Y.buffers.color.setClear(0,0,0,0):Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const $=_!==this.type;$&&N.traverse(function(O){O.material&&(Array.isArray(O.material)?O.material.forEach(K=>K.needsUpdate=!0):O.material.needsUpdate=!0)});for(let O=0,K=R.length;O<K;O++){const ne=R[O],X=ne.shadow;if(X===void 0){We("WebGLShadowMap:",ne,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;r.copy(X.mapSize);const re=X.getFrameExtents();r.multiply(re),a.copy(X.mapSize),(r.x>m||r.y>m)&&(r.x>m&&(a.x=Math.floor(m/re.x),r.x=a.x*re.x,X.mapSize.x=a.x),r.y>m&&(a.y=Math.floor(m/re.y),r.y=a.y*re.y,X.mapSize.y=a.y));const se=i.state.buffers.depth.getReversed();if(X.camera._reversedDepth=se,X.map===null||$===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===ur){if(ne.isPointLight){We("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new An(r.x,r.y,{format:Ei,type:zn,minFilter:Jt,magFilter:Jt,generateMipmaps:!1}),X.map.texture.name=ne.name+".shadowMap",X.map.depthTexture=new Mr(r.x,r.y,Fn),X.map.depthTexture.name=ne.name+".shadowMapDepth",X.map.depthTexture.format=Qn,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=qt,X.map.depthTexture.magFilter=qt}else ne.isPointLight?(X.map=new Uc(r.x),X.map.depthTexture=new Bd(r.x,kn)):(X.map=new An(r.x,r.y),X.map.depthTexture=new Mr(r.x,r.y,kn)),X.map.depthTexture.name=ne.name+".shadowMap",X.map.depthTexture.format=Qn,this.type===as?(X.map.depthTexture.compareFunction=se?mo:po,X.map.depthTexture.minFilter=Jt,X.map.depthTexture.magFilter=Jt):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=qt,X.map.depthTexture.magFilter=qt);X.camera.updateProjectionMatrix()}X.map.isWebGLCubeRenderTarget!==!0&&(X.map.width!==r.x||X.map.height!==r.y)&&X.map.setSize(r.x,r.y);const ce=X.map.isWebGLCubeRenderTarget?6:X.getViewportCount();ne.isPointLight!==!0&&X.updateMatrices(ne,E);for(let he=0;he<ce;he++){const Oe=X.getCamera(he);if(ne.isPointLight){const Be=X.camera,ht=X.matrix,nt=ne.distance||Be.far;nt!==Be.far&&(Be.far=nt,Be.updateProjectionMatrix()),cr.setFromMatrixPosition(ne.matrixWorld),Be.position.copy(cr),fa.copy(Be.position),fa.add(zg[he]),Be.up.copy(Hg[he]),Be.lookAt(fa),Be.updateMatrixWorld(),ht.makeTranslation(-cr.x,-cr.y,-cr.z),$l.multiplyMatrices(Be.projectionMatrix,Be.matrixWorldInverse),X._frustum.setFromProjectionMatrix($l,Be.coordinateSystem,Be.reversedDepth)}if(X.map.isWebGLCubeRenderTarget)i.setRenderTarget(X.map,he),i.clear();else{he===0&&(i.setRenderTarget(X.map),i.clear());const Be=X.getViewport(he);l.set(a.x*Be.x,a.y*Be.y,a.x*Be.z,a.y*Be.w),Y.viewport(l)}n=X.getFrustum(he),w(N,E,Oe,ne,this.type)}X.isPointLightShadow!==!0&&this.type===ur&&I(X,E),X.needsUpdate=!1}_=this.type,S.needsUpdate=!1,i.setRenderTarget(L,k,z)};function I(R,N){const E=e.update(A);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,v.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,v.needsUpdate=!0),R.mapPass===null?R.mapPass=new An(r.x,r.y,{format:Ei,type:zn}):(R.mapPass.width!==R.map.width||R.mapPass.height!==R.map.height)&&R.mapPass.setSize(R.map.width,R.map.height),f.uniforms.shadow_pass.value=R.map.depthTexture,f.uniforms.resolution.value.set(R.map.width,R.map.height),f.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(N,null,E,f,A,null),v.uniforms.shadow_pass.value=R.mapPass.texture,v.uniforms.resolution.value.set(R.map.width,R.map.height),v.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(N,null,E,v,A,null)}function H(R,N,E,L){let k=null;const z=E.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(z!==void 0)k=z;else if(k=E.isPointLight===!0?d:c,i.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0||N.alphaToCoverage===!0){const Y=k.uuid,$=N.uuid;let O=h[Y];O===void 0&&(O={},h[Y]=O);let K=O[$];K===void 0&&(K=k.clone(),O[$]=K,N.addEventListener("dispose",P)),k=K}if(k.visible=N.visible,k.wireframe=N.wireframe,L===ur?k.side=N.shadowSide!==null?N.shadowSide:N.side:k.side=N.shadowSide!==null?N.shadowSide:g[N.side],k.alphaMap=N.alphaMap,k.alphaTest=N.alphaToCoverage===!0?.5:N.alphaTest,k.map=N.map,k.clipShadows=N.clipShadows,k.clippingPlanes=N.clippingPlanes,k.clipIntersection=N.clipIntersection,k.displacementMap=N.displacementMap,k.displacementScale=N.displacementScale,k.displacementBias=N.displacementBias,k.wireframeLinewidth=N.wireframeLinewidth,k.linewidth=N.linewidth,E.isPointLight===!0&&k.isMeshDistanceMaterial===!0){const Y=i.properties.get(k);Y.light=E}return k}function w(R,N,E,L,k){if(R.visible===!1)return;if(R.layers.test(N.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&k===ur)&&(!R.frustumCulled||R.intersectsFrustum(n))){R.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,R.matrixWorld);const $=e.update(R),O=R.material;if(Array.isArray(O)){const K=$.groups;for(let ne=0,X=K.length;ne<X;ne++){const re=K[ne],se=O[re.materialIndex];if(se&&se.visible){const ce=H(R,se,L,k);R.onBeforeShadow(i,R,N,E,$,ce,re),i.renderBufferDirect(E,null,$,ce,R,re),R.onAfterShadow(i,R,N,E,$,ce,re)}}}else if(O.visible){const K=H(R,O,L,k);R.onBeforeShadow(i,R,N,E,$,K,null),i.renderBufferDirect(E,null,$,K,R,null),R.onAfterShadow(i,R,N,E,$,K,null)}}const Y=R.children;for(let $=0,O=Y.length;$<O;$++)w(Y[$],N,E,L,k)}function P(R){R.target.removeEventListener("dispose",P);for(const E in h){const L=h[E],k=R.target.uuid;k in L&&(L[k].dispose(),delete L[k])}}}function Vg(i,e){function t(){let G=!1;const Se=new Lt;let oe=null;const Me=new Lt(0,0,0,0);return{setMask:function(Re){oe!==Re&&!G&&(i.colorMask(Re,Re,Re,Re),oe=Re)},setLocked:function(Re){G=Re},setClear:function(Re,de,pe,Fe,yt){yt===!0&&(Re*=Fe,de*=Fe,pe*=Fe),Se.set(Re,de,pe,Fe),Me.equals(Se)===!1&&(i.clearColor(Re,de,pe,Fe),Me.copy(Se))},reset:function(){G=!1,oe=null,Me.set(-1,0,0,0)}}}function n(){let G=!1,Se=!1,oe=null,Me=null,Re=null;return{setReversed:function(de){if(Se!==de){const pe=e.get("EXT_clip_control");de?pe.clipControlEXT(pe.LOWER_LEFT_EXT,pe.ZERO_TO_ONE_EXT):pe.clipControlEXT(pe.LOWER_LEFT_EXT,pe.NEGATIVE_ONE_TO_ONE_EXT),Se=de;const Fe=Re;Re=null,this.setClear(Fe)}},getReversed:function(){return Se},setTest:function(de){de?ue(i.DEPTH_TEST):ye(i.DEPTH_TEST)},setMask:function(de){oe!==de&&!G&&(i.depthMask(de),oe=de)},setFunc:function(de){if(Se&&(de=Zh[de]),Me!==de){switch(de){case va:i.depthFunc(i.NEVER);break;case xa:i.depthFunc(i.ALWAYS);break;case Sa:i.depthFunc(i.LESS);break;case _r:i.depthFunc(i.LEQUAL);break;case Ma:i.depthFunc(i.EQUAL);break;case Ea:i.depthFunc(i.GEQUAL);break;case ya:i.depthFunc(i.GREATER);break;case ba:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Me=de}},setLocked:function(de){G=de},setClear:function(de){Re!==de&&(Re=de,Se&&(de=1-de),i.clearDepth(de))},reset:function(){G=!1,oe=null,Me=null,Re=null,Se=!1}}}function r(){let G=!1,Se=null,oe=null,Me=null,Re=null,de=null,pe=null,Fe=null,yt=null;return{setTest:function(mt){G||(mt?ue(i.STENCIL_TEST):ye(i.STENCIL_TEST))},setMask:function(mt){Se!==mt&&!G&&(i.stencilMask(mt),Se=mt)},setFunc:function(mt,an,dn){(oe!==mt||Me!==an||Re!==dn)&&(i.stencilFunc(mt,an,dn),oe=mt,Me=an,Re=dn)},setOp:function(mt,an,dn){(de!==mt||pe!==an||Fe!==dn)&&(i.stencilOp(mt,an,dn),de=mt,pe=an,Fe=dn)},setLocked:function(mt){G=mt},setClear:function(mt){yt!==mt&&(i.clearStencil(mt),yt=mt)},reset:function(){G=!1,Se=null,oe=null,Me=null,Re=null,de=null,pe=null,Fe=null,yt=null}}}const a=new t,l=new n,c=new r,d=new WeakMap,h=new WeakMap;let m={},g={},f={},v=new WeakMap,T=[],A=null,S=!1,_=null,I=null,H=null,w=null,P=null,R=null,N=null,E=new tt(0,0,0),L=0,k=!1,z=null,Y=null,$=null,O=null,K=null;const ne=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,re=0;const se=i.getParameter(i.VERSION);se.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(se)[1]),X=re>=1):se.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(se)[1]),X=re>=2);let ce=null,he={};const Oe=i.getParameter(i.SCISSOR_BOX),Be=i.getParameter(i.VIEWPORT),ht=new Lt().fromArray(Oe),nt=new Lt().fromArray(Be);function it(G,Se,oe,Me){const Re=new Uint8Array(4),de=i.createTexture();i.bindTexture(G,de),i.texParameteri(G,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(G,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let pe=0;pe<oe;pe++)G===i.TEXTURE_3D||G===i.TEXTURE_2D_ARRAY?i.texImage3D(Se,0,i.RGBA,1,1,Me,0,i.RGBA,i.UNSIGNED_BYTE,Re):i.texImage2D(Se+pe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Re);return de}const ae={};ae[i.TEXTURE_2D]=it(i.TEXTURE_2D,i.TEXTURE_2D,1),ae[i.TEXTURE_CUBE_MAP]=it(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[i.TEXTURE_2D_ARRAY]=it(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ae[i.TEXTURE_3D]=it(i.TEXTURE_3D,i.TEXTURE_3D,1,1),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),ue(i.DEPTH_TEST),l.setFunc(_r),Je(!1),wt(Vo),ue(i.CULL_FACE),at(Jn);function ue(G){m[G]!==!0&&(i.enable(G),m[G]=!0)}function ye(G){m[G]!==!1&&(i.disable(G),m[G]=!1)}function He(G,Se){return f[G]!==Se?(i.bindFramebuffer(G,Se),f[G]=Se,G===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=Se),G===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=Se),!0):!1}function Ae(G,Se){let oe=T,Me=!1;if(G){oe=v.get(Se),oe===void 0&&(oe=[],v.set(Se,oe));const Re=G.textures;if(oe.length!==Re.length||oe[0]!==i.COLOR_ATTACHMENT0){for(let de=0,pe=Re.length;de<pe;de++)oe[de]=i.COLOR_ATTACHMENT0+de;oe.length=Re.length,Me=!0}}else oe[0]!==i.BACK&&(oe[0]=i.BACK,Me=!0);Me&&i.drawBuffers(oe)}function Ve(G){return A!==G?(i.useProgram(G),A=G,!0):!1}const Tt={[Hi]:i.FUNC_ADD,[gh]:i.FUNC_SUBTRACT,[vh]:i.FUNC_REVERSE_SUBTRACT};Tt[xh]=i.MIN,Tt[Sh]=i.MAX;const Qe={[Mh]:i.ZERO,[Eh]:i.ONE,[yh]:i.SRC_COLOR,[Ql]:i.SRC_ALPHA,[Ch]:i.SRC_ALPHA_SATURATE,[Ah]:i.DST_COLOR,[Th]:i.DST_ALPHA,[bh]:i.ONE_MINUS_SRC_COLOR,[ec]:i.ONE_MINUS_SRC_ALPHA,[Rh]:i.ONE_MINUS_DST_COLOR,[wh]:i.ONE_MINUS_DST_ALPHA,[Ph]:i.CONSTANT_COLOR,[Dh]:i.ONE_MINUS_CONSTANT_COLOR,[Lh]:i.CONSTANT_ALPHA,[Uh]:i.ONE_MINUS_CONSTANT_ALPHA};function at(G,Se,oe,Me,Re,de,pe,Fe,yt,mt){if(G===Jn){S===!0&&(ye(i.BLEND),S=!1);return}if(S===!1&&(ue(i.BLEND),S=!0),G!==_h){if(G!==_||mt!==k){if((I!==Hi||P!==Hi)&&(i.blendEquation(i.FUNC_ADD),I=Hi,P=Hi),mt)switch(G){case fr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Wo:i.blendFunc(i.ONE,i.ONE);break;case Xo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Yo:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:gt("WebGLState: Invalid blending: ",G);break}else switch(G){case fr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Wo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Xo:gt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Yo:gt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:gt("WebGLState: Invalid blending: ",G);break}H=null,w=null,R=null,N=null,E.set(0,0,0),L=0,_=G,k=mt}return}Re=Re||Se,de=de||oe,pe=pe||Me,(Se!==I||Re!==P)&&(i.blendEquationSeparate(Tt[Se],Tt[Re]),I=Se,P=Re),(oe!==H||Me!==w||de!==R||pe!==N)&&(i.blendFuncSeparate(Qe[oe],Qe[Me],Qe[de],Qe[pe]),H=oe,w=Me,R=de,N=pe),(Fe.equals(E)===!1||yt!==L)&&(i.blendColor(Fe.r,Fe.g,Fe.b,yt),E.copy(Fe),L=yt),_=G,k=!1}function vt(G,Se){G.side===bn?ye(i.CULL_FACE):ue(i.CULL_FACE);let oe=G.side===rn;Se&&(oe=!oe),Je(oe),G.blending===fr&&G.transparent===!1?at(Jn):at(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),l.setFunc(G.depthFunc),l.setTest(G.depthTest),l.setMask(G.depthWrite),a.setMask(G.colorWrite);const Me=G.stencilWrite;c.setTest(Me),Me&&(c.setMask(G.stencilWriteMask),c.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),c.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Ft(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?ue(i.SAMPLE_ALPHA_TO_COVERAGE):ye(i.SAMPLE_ALPHA_TO_COVERAGE)}function Je(G){z!==G&&(G?i.frontFace(i.CW):i.frontFace(i.CCW),z=G)}function wt(G){G!==fh?(ue(i.CULL_FACE),G!==Y&&(G===Vo?i.cullFace(i.BACK):G===ph?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ye(i.CULL_FACE),Y=G}function It(G){G!==$&&(X&&i.lineWidth(G),$=G)}function Ft(G,Se,oe){G?(ue(i.POLYGON_OFFSET_FILL),(O!==Se||K!==oe)&&(O=Se,K=oe,l.getReversed()&&(Se=-Se),i.polygonOffset(Se,oe))):ye(i.POLYGON_OFFSET_FILL)}function At(G){G?ue(i.SCISSOR_TEST):ye(i.SCISSOR_TEST)}function Rt(G){G===void 0&&(G=i.TEXTURE0+ne-1),ce!==G&&(i.activeTexture(G),ce=G)}function V(G,Se,oe){oe===void 0&&(ce===null?oe=i.TEXTURE0+ne-1:oe=ce);let Me=he[oe];Me===void 0&&(Me={type:void 0,texture:void 0},he[oe]=Me),(Me.type!==G||Me.texture!==Se)&&(ce!==oe&&(i.activeTexture(oe),ce=oe),i.bindTexture(G,Se||ae[G]),Me.type=G,Me.texture=Se)}function zt(){const G=he[ce];G!==void 0&&G.type!==void 0&&(i.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function pt(){try{i.compressedTexImage2D(...arguments)}catch(G){gt("WebGLState:",G)}}function D(){try{i.compressedTexImage3D(...arguments)}catch(G){gt("WebGLState:",G)}}function x(){try{i.texSubImage2D(...arguments)}catch(G){gt("WebGLState:",G)}}function q(){try{i.texSubImage3D(...arguments)}catch(G){gt("WebGLState:",G)}}function W(){try{i.compressedTexSubImage2D(...arguments)}catch(G){gt("WebGLState:",G)}}function te(){try{i.compressedTexSubImage3D(...arguments)}catch(G){gt("WebGLState:",G)}}function me(){try{i.texStorage2D(...arguments)}catch(G){gt("WebGLState:",G)}}function ge(){try{i.texStorage3D(...arguments)}catch(G){gt("WebGLState:",G)}}function Q(){try{i.texImage2D(...arguments)}catch(G){gt("WebGLState:",G)}}function le(){try{i.texImage3D(...arguments)}catch(G){gt("WebGLState:",G)}}function ve(G){return g[G]!==void 0?g[G]:i.getParameter(G)}function Ue(G,Se){g[G]!==Se&&(i.pixelStorei(G,Se),g[G]=Se)}function Ee(G){ht.equals(G)===!1&&(i.scissor(G.x,G.y,G.z,G.w),ht.copy(G))}function _e(G){nt.equals(G)===!1&&(i.viewport(G.x,G.y,G.z,G.w),nt.copy(G))}function ke(G,Se){let oe=h.get(Se);oe===void 0&&(oe=new WeakMap,h.set(Se,oe));let Me=oe.get(G);Me===void 0&&(Me=i.getUniformBlockIndex(Se,G.name),oe.set(G,Me))}function Ge(G,Se){const Me=h.get(Se).get(G);d.get(Se)!==Me&&(i.uniformBlockBinding(Se,Me,G.__bindingPointIndex),d.set(Se,Me))}function qe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),l.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),m={},g={},ce=null,he={},f={},v=new WeakMap,T=[],A=null,S=!1,_=null,I=null,H=null,w=null,P=null,R=null,N=null,E=new tt(0,0,0),L=0,k=!1,z=null,Y=null,$=null,O=null,K=null,ht.set(0,0,i.canvas.width,i.canvas.height),nt.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:ue,disable:ye,bindFramebuffer:He,drawBuffers:Ae,useProgram:Ve,setBlending:at,setMaterial:vt,setFlipSided:Je,setCullFace:wt,setLineWidth:It,setPolygonOffset:Ft,setScissorTest:At,activeTexture:Rt,bindTexture:V,unbindTexture:zt,compressedTexImage2D:pt,compressedTexImage3D:D,texImage2D:Q,texImage3D:le,pixelStorei:Ue,getParameter:ve,updateUBOMapping:ke,uniformBlockBinding:Ge,texStorage2D:me,texStorage3D:ge,texSubImage2D:x,texSubImage3D:q,compressedTexSubImage2D:W,compressedTexSubImage3D:te,scissor:Ee,viewport:_e,reset:qe}}function Wg(i,e,t,n,r,a,l){const c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Ke,m=new WeakMap,g=new Set;let f;const v=new WeakMap;let T=!1;try{T=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(D,x){return T?new OffscreenCanvas(D,x):_s("canvas")}function S(D,x,q){let W=1;const te=pt(D);if((te.width>q||te.height>q)&&(W=q/Math.max(te.width,te.height)),W<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const me=Math.floor(W*te.width),ge=Math.floor(W*te.height);f===void 0&&(f=A(me,ge));const Q=x?A(me,ge):f;return Q.width=me,Q.height=ge,Q.getContext("2d").drawImage(D,0,0,me,ge),We("WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+me+"x"+ge+")."),Q}else return"data"in D&&We("WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),D;return D}function _(D){return D.generateMipmaps}function I(D){i.generateMipmap(D)}function H(D){return D.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?i.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function w(D,x,q,W,te,me=!1){if(D!==null){if(i[D]!==void 0)return i[D];We("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let ge;W&&(ge=e.get("EXT_texture_norm16"),ge||We("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Q=x;if(x===i.RED&&(q===i.FLOAT&&(Q=i.R32F),q===i.HALF_FLOAT&&(Q=i.R16F),q===i.UNSIGNED_BYTE&&(Q=i.R8),q===i.UNSIGNED_SHORT&&ge&&(Q=ge.R16_EXT),q===i.SHORT&&ge&&(Q=ge.R16_SNORM_EXT)),x===i.RED_INTEGER&&(q===i.UNSIGNED_BYTE&&(Q=i.R8UI),q===i.UNSIGNED_SHORT&&(Q=i.R16UI),q===i.UNSIGNED_INT&&(Q=i.R32UI),q===i.BYTE&&(Q=i.R8I),q===i.SHORT&&(Q=i.R16I),q===i.INT&&(Q=i.R32I)),x===i.RG&&(q===i.FLOAT&&(Q=i.RG32F),q===i.HALF_FLOAT&&(Q=i.RG16F),q===i.UNSIGNED_BYTE&&(Q=i.RG8),q===i.UNSIGNED_SHORT&&ge&&(Q=ge.RG16_EXT),q===i.SHORT&&ge&&(Q=ge.RG16_SNORM_EXT)),x===i.RG_INTEGER&&(q===i.UNSIGNED_BYTE&&(Q=i.RG8UI),q===i.UNSIGNED_SHORT&&(Q=i.RG16UI),q===i.UNSIGNED_INT&&(Q=i.RG32UI),q===i.BYTE&&(Q=i.RG8I),q===i.SHORT&&(Q=i.RG16I),q===i.INT&&(Q=i.RG32I)),x===i.RGB_INTEGER&&(q===i.UNSIGNED_BYTE&&(Q=i.RGB8UI),q===i.UNSIGNED_SHORT&&(Q=i.RGB16UI),q===i.UNSIGNED_INT&&(Q=i.RGB32UI),q===i.BYTE&&(Q=i.RGB8I),q===i.SHORT&&(Q=i.RGB16I),q===i.INT&&(Q=i.RGB32I)),x===i.RGBA_INTEGER&&(q===i.UNSIGNED_BYTE&&(Q=i.RGBA8UI),q===i.UNSIGNED_SHORT&&(Q=i.RGBA16UI),q===i.UNSIGNED_INT&&(Q=i.RGBA32UI),q===i.BYTE&&(Q=i.RGBA8I),q===i.SHORT&&(Q=i.RGBA16I),q===i.INT&&(Q=i.RGBA32I)),x===i.RGB&&(q===i.UNSIGNED_SHORT&&ge&&(Q=ge.RGB16_EXT),q===i.SHORT&&ge&&(Q=ge.RGB16_SNORM_EXT),q===i.UNSIGNED_INT_5_9_9_9_REV&&(Q=i.RGB9_E5),q===i.UNSIGNED_INT_10F_11F_11F_REV&&(Q=i.R11F_G11F_B10F)),x===i.RGBA){const le=me?ms:lt.getTransfer(te);q===i.FLOAT&&(Q=i.RGBA32F),q===i.HALF_FLOAT&&(Q=i.RGBA16F),q===i.UNSIGNED_BYTE&&(Q=le===Mt?i.SRGB8_ALPHA8:i.RGBA8),q===i.UNSIGNED_SHORT&&ge&&(Q=ge.RGBA16_EXT),q===i.SHORT&&ge&&(Q=ge.RGBA16_SNORM_EXT),q===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),q===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)}return(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function P(D,x){let q;return D?x===null||x===kn||x===vr?q=i.DEPTH24_STENCIL8:x===Fn?q=i.DEPTH32F_STENCIL8:x===gr&&(q=i.DEPTH24_STENCIL8,We("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===kn||x===vr?q=i.DEPTH_COMPONENT24:x===Fn?q=i.DEPTH_COMPONENT32F:x===gr&&(q=i.DEPTH_COMPONENT16),q}function R(D,x){return _(D)===!0||D.isFramebufferTexture&&D.minFilter!==qt&&D.minFilter!==Jt?Math.log2(Math.max(x.width,x.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?x.mipmaps.length:1}function N(D){const x=D.target;x.removeEventListener("dispose",N),L(x),x.isVideoTexture&&m.delete(x),x.isHTMLTexture&&g.delete(x)}function E(D){const x=D.target;x.removeEventListener("dispose",E),z(x)}function L(D){const x=n.get(D);if(x.__webglInit===void 0)return;const q=D.source,W=v.get(q);if(W){const te=W[x.__cacheKey];te.usedTimes--,te.usedTimes===0&&k(D),Object.keys(W).length===0&&v.delete(q)}n.remove(D)}function k(D){const x=n.get(D);i.deleteTexture(x.__webglTexture);const q=D.source,W=v.get(q);delete W[x.__cacheKey],l.memory.textures--}function z(D){const x=n.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),n.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(x.__webglFramebuffer[W]))for(let te=0;te<x.__webglFramebuffer[W].length;te++)i.deleteFramebuffer(x.__webglFramebuffer[W][te]);else i.deleteFramebuffer(x.__webglFramebuffer[W]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[W])}else{if(Array.isArray(x.__webglFramebuffer))for(let W=0;W<x.__webglFramebuffer.length;W++)i.deleteFramebuffer(x.__webglFramebuffer[W]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let W=0;W<x.__webglColorRenderbuffer.length;W++)x.__webglColorRenderbuffer[W]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[W]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const q=D.textures;for(let W=0,te=q.length;W<te;W++){const me=n.get(q[W]);me.__webglTexture&&(i.deleteTexture(me.__webglTexture),l.memory.textures--),n.remove(q[W])}n.remove(D)}let Y=0;function $(){Y=0}function O(){return Y}function K(D){Y=D}function ne(){const D=Y;return D>=r.maxTextures&&We("WebGLTextures: Trying to use "+(D+1)+" texture units while this GPU supports only "+r.maxTextures),Y+=1,D}function X(D){const x=[];return x.push(D.wrapS),x.push(D.wrapT),x.push(D.wrapR||0),x.push(D.magFilter),x.push(D.minFilter),x.push(D.anisotropy),x.push(D.internalFormat),x.push(D.format),x.push(D.type),x.push(D.generateMipmaps),x.push(D.premultiplyAlpha),x.push(D.flipY),x.push(D.unpackAlignment),x.push(D.colorSpace),x.join()}function re(D,x){const q=n.get(D);if(D.isVideoTexture&&V(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&q.__version!==D.version){const W=D.image;if(W===null)We("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)We("WebGLRenderer: Texture marked for update but image is incomplete");else{ye(q,D,x);return}}else D.isExternalTexture&&(q.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,q.__webglTexture,i.TEXTURE0+x)}function se(D,x){const q=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&q.__version!==D.version){ye(q,D,x);return}else D.isExternalTexture&&(q.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,q.__webglTexture,i.TEXTURE0+x)}function ce(D,x){const q=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&q.__version!==D.version){ye(q,D,x);return}t.bindTexture(i.TEXTURE_3D,q.__webglTexture,i.TEXTURE0+x)}function he(D,x){const q=n.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&q.__version!==D.version){He(q,D,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture,i.TEXTURE0+x)}const Oe={[Ta]:i.REPEAT,[Zn]:i.CLAMP_TO_EDGE,[wa]:i.MIRRORED_REPEAT},Be={[qt]:i.NEAREST,[Fh]:i.NEAREST_MIPMAP_NEAREST,[Nr]:i.NEAREST_MIPMAP_LINEAR,[Jt]:i.LINEAR,[Bs]:i.LINEAR_MIPMAP_NEAREST,[vi]:i.LINEAR_MIPMAP_LINEAR},ht={[zh]:i.NEVER,[Xh]:i.ALWAYS,[Hh]:i.LESS,[po]:i.LEQUAL,[Gh]:i.EQUAL,[mo]:i.GEQUAL,[Vh]:i.GREATER,[Wh]:i.NOTEQUAL};function nt(D,x){if(x.type===Fn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Jt||x.magFilter===Bs||x.magFilter===Nr||x.magFilter===vi||x.minFilter===Jt||x.minFilter===Bs||x.minFilter===Nr||x.minFilter===vi)&&We("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(D,i.TEXTURE_WRAP_S,Oe[x.wrapS]),i.texParameteri(D,i.TEXTURE_WRAP_T,Oe[x.wrapT]),(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)&&i.texParameteri(D,i.TEXTURE_WRAP_R,Oe[x.wrapR]),i.texParameteri(D,i.TEXTURE_MAG_FILTER,Be[x.magFilter]),i.texParameteri(D,i.TEXTURE_MIN_FILTER,Be[x.minFilter]),x.compareFunction&&(i.texParameteri(D,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(D,i.TEXTURE_COMPARE_FUNC,ht[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===qt||x.minFilter!==Nr&&x.minFilter!==vi||x.type===Fn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const q=e.get("EXT_texture_filter_anisotropic");i.texParameterf(D,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function it(D,x){let q=!1;D.__webglInit===void 0&&(D.__webglInit=!0,x.addEventListener("dispose",N));const W=x.source;let te=v.get(W);te===void 0&&(te={},v.set(W,te));const me=X(x);if(me!==D.__cacheKey){te[me]===void 0&&(te[me]={texture:i.createTexture(),usedTimes:0},l.memory.textures++,q=!0),te[me].usedTimes++;const ge=te[D.__cacheKey];ge!==void 0&&(te[D.__cacheKey].usedTimes--,ge.usedTimes===0&&k(x)),D.__cacheKey=me,D.__webglTexture=te[me].texture}return q}function ae(D,x,q){return Math.floor(Math.floor(D/q)/x)}function ue(D,x,q,W){const me=D.updateRanges;if(me.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,q,W,x.data);else{me.sort((Ue,Ee)=>Ue.start-Ee.start);let ge=0;for(let Ue=1;Ue<me.length;Ue++){const Ee=me[ge],_e=me[Ue],ke=Ee.start+Ee.count,Ge=ae(_e.start,x.width,4),qe=ae(Ee.start,x.width,4);_e.start<=ke+1&&Ge===qe&&ae(_e.start+_e.count-1,x.width,4)===Ge?Ee.count=Math.max(Ee.count,_e.start+_e.count-Ee.start):(++ge,me[ge]=_e)}me.length=ge+1;const Q=t.getParameter(i.UNPACK_ROW_LENGTH),le=t.getParameter(i.UNPACK_SKIP_PIXELS),ve=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let Ue=0,Ee=me.length;Ue<Ee;Ue++){const _e=me[Ue],ke=Math.floor(_e.start/4),Ge=Math.ceil(_e.count/4),qe=ke%x.width,G=Math.floor(ke/x.width),Se=Ge,oe=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,qe),t.pixelStorei(i.UNPACK_SKIP_ROWS,G),t.texSubImage2D(i.TEXTURE_2D,0,qe,G,Se,oe,q,W,x.data)}D.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,Q),t.pixelStorei(i.UNPACK_SKIP_PIXELS,le),t.pixelStorei(i.UNPACK_SKIP_ROWS,ve)}}function ye(D,x,q){let W=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(W=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(W=i.TEXTURE_3D);const te=it(D,x),me=x.source;t.bindTexture(W,D.__webglTexture,i.TEXTURE0+q);const ge=n.get(me);if(me.version!==ge.__version||te===!0){if(t.activeTexture(i.TEXTURE0+q),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){const oe=lt.getPrimaries(lt.workingColorSpace),Me=x.colorSpace===li?null:lt.getPrimaries(x.colorSpace),Re=x.colorSpace===li||oe===Me?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re)}t.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment);let le=S(x.image,!1,r.maxTextureSize);le=zt(x,le);const ve=a.convert(x.format,x.colorSpace),Ue=a.convert(x.type);let Ee=w(x.internalFormat,ve,Ue,x.normalized,x.colorSpace,x.isVideoTexture);nt(W,x);let _e;const ke=x.mipmaps,Ge=x.isVideoTexture!==!0,qe=ge.__version===void 0||te===!0,G=me.dataReady,Se=R(x,le);if(x.isDepthTexture)Ee=P(x.format===xi,x.type),qe&&(Ge?t.texStorage2D(i.TEXTURE_2D,1,Ee,le.width,le.height):t.texImage2D(i.TEXTURE_2D,0,Ee,le.width,le.height,0,ve,Ue,null));else if(x.isDataTexture)if(ke.length>0){Ge&&qe&&t.texStorage2D(i.TEXTURE_2D,Se,Ee,ke[0].width,ke[0].height);for(let oe=0,Me=ke.length;oe<Me;oe++)_e=ke[oe],Ge?G&&t.texSubImage2D(i.TEXTURE_2D,oe,0,0,_e.width,_e.height,ve,Ue,_e.data):t.texImage2D(i.TEXTURE_2D,oe,Ee,_e.width,_e.height,0,ve,Ue,_e.data);x.generateMipmaps=!1}else Ge?(qe&&t.texStorage2D(i.TEXTURE_2D,Se,Ee,le.width,le.height),G&&ue(x,le,ve,Ue)):t.texImage2D(i.TEXTURE_2D,0,Ee,le.width,le.height,0,ve,Ue,le.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Ge&&qe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Se,Ee,ke[0].width,ke[0].height,le.depth);for(let oe=0,Me=ke.length;oe<Me;oe++)if(_e=ke[oe],x.format!==wn)if(ve!==null)if(Ge){if(G)if(x.layerUpdates.size>0){const Re=wl(_e.width,_e.height,x.format,x.type);for(const de of x.layerUpdates){const pe=_e.data.subarray(de*Re/_e.data.BYTES_PER_ELEMENT,(de+1)*Re/_e.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,oe,0,0,de,_e.width,_e.height,1,ve,pe)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,oe,0,0,0,_e.width,_e.height,le.depth,ve,_e.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,oe,Ee,_e.width,_e.height,le.depth,0,_e.data,0,0);else We("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ge?G&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,oe,0,0,0,_e.width,_e.height,le.depth,ve,Ue,_e.data):t.texImage3D(i.TEXTURE_2D_ARRAY,oe,Ee,_e.width,_e.height,le.depth,0,ve,Ue,_e.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{Ge&&qe&&t.texStorage2D(i.TEXTURE_2D,Se,Ee,ke[0].width,ke[0].height);for(let oe=0,Me=ke.length;oe<Me;oe++)_e=ke[oe],x.format!==wn?ve!==null?Ge?G&&t.compressedTexSubImage2D(i.TEXTURE_2D,oe,0,0,_e.width,_e.height,ve,_e.data):t.compressedTexImage2D(i.TEXTURE_2D,oe,Ee,_e.width,_e.height,0,_e.data):We("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?G&&t.texSubImage2D(i.TEXTURE_2D,oe,0,0,_e.width,_e.height,ve,Ue,_e.data):t.texImage2D(i.TEXTURE_2D,oe,Ee,_e.width,_e.height,0,ve,Ue,_e.data)}else if(x.isDataArrayTexture)if(Ge){if(qe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Se,Ee,le.width,le.height,le.depth),G)if(x.layerUpdates.size>0){const oe=wl(le.width,le.height,x.format,x.type);for(const Me of x.layerUpdates){const Re=le.data.subarray(Me*oe/le.data.BYTES_PER_ELEMENT,(Me+1)*oe/le.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Me,le.width,le.height,1,ve,Ue,Re)}x.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,ve,Ue,le.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ee,le.width,le.height,le.depth,0,ve,Ue,le.data);else if(x.isData3DTexture)Ge?(qe&&t.texStorage3D(i.TEXTURE_3D,Se,Ee,le.width,le.height,le.depth),G&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,ve,Ue,le.data)):t.texImage3D(i.TEXTURE_3D,0,Ee,le.width,le.height,le.depth,0,ve,Ue,le.data);else if(x.isFramebufferTexture){if(qe)if(Ge)t.texStorage2D(i.TEXTURE_2D,Se,Ee,le.width,le.height);else{let oe=le.width,Me=le.height;for(let Re=0;Re<Se;Re++)t.texImage2D(i.TEXTURE_2D,Re,Ee,oe,Me,0,ve,Ue,null),oe>>=1,Me>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in i){const oe=i.canvas;if(oe.hasAttribute("layoutsubtree")||oe.setAttribute("layoutsubtree","true"),le.parentNode!==oe){oe.appendChild(le),g.add(x),oe.onpaint=Me=>{const Re=Me.changedElements;for(const de of g)Re.includes(de.image)&&(de.needsUpdate=!0)},oe.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,le);else{const Re=i.RGBA,de=i.RGBA,pe=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Re,de,pe,le)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(ke.length>0){if(Ge&&qe){const oe=pt(ke[0]);t.texStorage2D(i.TEXTURE_2D,Se,Ee,oe.width,oe.height)}for(let oe=0,Me=ke.length;oe<Me;oe++)_e=ke[oe],Ge?G&&t.texSubImage2D(i.TEXTURE_2D,oe,0,0,ve,Ue,_e):t.texImage2D(i.TEXTURE_2D,oe,Ee,ve,Ue,_e);x.generateMipmaps=!1}else if(Ge){if(qe){const oe=pt(le);t.texStorage2D(i.TEXTURE_2D,Se,Ee,oe.width,oe.height)}G&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ve,Ue,le)}else t.texImage2D(i.TEXTURE_2D,0,Ee,ve,Ue,le);_(x)&&I(W),ge.__version=me.version,x.onUpdate&&x.onUpdate(x)}D.__version=x.version}function He(D,x,q){if(x.image.length!==6)return;const W=it(D,x),te=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+q);const me=n.get(te);if(te.version!==me.__version||W===!0){t.activeTexture(i.TEXTURE0+q);const ge=lt.getPrimaries(lt.workingColorSpace),Q=x.colorSpace===li?null:lt.getPrimaries(x.colorSpace),le=x.colorSpace===li||ge===Q?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,le);const ve=x.isCompressedTexture||x.image[0].isCompressedTexture,Ue=x.image[0]&&x.image[0].isDataTexture,Ee=[];for(let de=0;de<6;de++)!ve&&!Ue?Ee[de]=S(x.image[de],!0,r.maxCubemapSize):Ee[de]=Ue?x.image[de].image:x.image[de],Ee[de]=zt(x,Ee[de]);const _e=Ee[0],ke=a.convert(x.format,x.colorSpace),Ge=a.convert(x.type),qe=w(x.internalFormat,ke,Ge,x.normalized,x.colorSpace),G=x.isVideoTexture!==!0,Se=me.__version===void 0||W===!0,oe=te.dataReady;let Me=R(x,_e);nt(i.TEXTURE_CUBE_MAP,x);let Re;if(ve){G&&Se&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Me,qe,_e.width,_e.height);for(let de=0;de<6;de++){Re=Ee[de].mipmaps;for(let pe=0;pe<Re.length;pe++){const Fe=Re[pe];x.format!==wn?ke!==null?G?oe&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,pe,0,0,Fe.width,Fe.height,ke,Fe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,pe,qe,Fe.width,Fe.height,0,Fe.data):We("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,pe,0,0,Fe.width,Fe.height,ke,Ge,Fe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,pe,qe,Fe.width,Fe.height,0,ke,Ge,Fe.data)}}}else{if(Re=x.mipmaps,G&&Se){Re.length>0&&Me++;const de=pt(Ee[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Me,qe,de.width,de.height)}for(let de=0;de<6;de++)if(Ue){G?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Ee[de].width,Ee[de].height,ke,Ge,Ee[de].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,qe,Ee[de].width,Ee[de].height,0,ke,Ge,Ee[de].data);for(let pe=0;pe<Re.length;pe++){const yt=Re[pe].image[de].image;G?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,pe+1,0,0,yt.width,yt.height,ke,Ge,yt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,pe+1,qe,yt.width,yt.height,0,ke,Ge,yt.data)}}else{G?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,ke,Ge,Ee[de]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,qe,ke,Ge,Ee[de]);for(let pe=0;pe<Re.length;pe++){const Fe=Re[pe];G?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,pe+1,0,0,ke,Ge,Fe.image[de]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,pe+1,qe,ke,Ge,Fe.image[de])}}}_(x)&&I(i.TEXTURE_CUBE_MAP),me.__version=te.version,x.onUpdate&&x.onUpdate(x)}D.__version=x.version}function Ae(D,x,q,W,te,me){const ge=a.convert(q.format,q.colorSpace),Q=a.convert(q.type),le=w(q.internalFormat,ge,Q,q.normalized,q.colorSpace),ve=n.get(x),Ue=n.get(q);if(Ue.__renderTarget=x,!ve.__hasExternalTextures){const Ee=Math.max(1,x.width>>me),_e=Math.max(1,x.height>>me);te===i.TEXTURE_3D||te===i.TEXTURE_2D_ARRAY?t.texImage3D(te,me,le,Ee,_e,x.depth,0,ge,Q,null):t.texImage2D(te,me,le,Ee,_e,0,ge,Q,null)}t.bindFramebuffer(i.FRAMEBUFFER,D),Rt(x)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,W,te,Ue.__webglTexture,0,At(x)):(te===i.TEXTURE_2D||te>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,W,te,Ue.__webglTexture,me),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ve(D,x,q){if(i.bindRenderbuffer(i.RENDERBUFFER,D),x.depthBuffer){const W=x.depthTexture,te=W&&W.isDepthTexture?W.type:null,me=P(x.stencilBuffer,te),ge=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Rt(x)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,At(x),me,x.width,x.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,At(x),me,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,me,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ge,i.RENDERBUFFER,D)}else{const W=x.textures;for(let te=0;te<W.length;te++){const me=W[te],ge=a.convert(me.format,me.colorSpace),Q=a.convert(me.type),le=w(me.internalFormat,ge,Q,me.normalized,me.colorSpace);Rt(x)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,At(x),le,x.width,x.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,At(x),le,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,le,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Tt(D,x,q){const W=x.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,D),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const te=n.get(x.depthTexture);if(te.__renderTarget=x,(!te.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),W){if(te.__webglInit===void 0&&(te.__webglInit=!0,x.depthTexture.addEventListener("dispose",N)),te.__webglTexture===void 0){te.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,te.__webglTexture),nt(i.TEXTURE_CUBE_MAP,x.depthTexture);const ve=a.convert(x.depthTexture.format),Ue=a.convert(x.depthTexture.type);let Ee;x.depthTexture.format===Qn?Ee=i.DEPTH_COMPONENT24:x.depthTexture.format===xi&&(Ee=i.DEPTH24_STENCIL8);for(let _e=0;_e<6;_e++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,Ee,x.width,x.height,0,ve,Ue,null)}}else re(x.depthTexture,0);const me=te.__webglTexture,ge=At(x),Q=W?i.TEXTURE_CUBE_MAP_POSITIVE_X+q:i.TEXTURE_2D,le=x.depthTexture.format===xi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(x.depthTexture.format===Qn)Rt(x)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,le,Q,me,0,ge):i.framebufferTexture2D(i.FRAMEBUFFER,le,Q,me,0);else if(x.depthTexture.format===xi)Rt(x)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,le,Q,me,0,ge):i.framebufferTexture2D(i.FRAMEBUFFER,le,Q,me,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Qe(D){const x=n.get(D),q=D.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==D.depthTexture){const W=D.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),W){const te=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,W.removeEventListener("dispose",te)};W.addEventListener("dispose",te),x.__depthDisposeCallback=te}x.__boundDepthTexture=W}if(D.depthTexture&&!x.__autoAllocateDepthBuffer)if(q)for(let W=0;W<6;W++)Tt(x.__webglFramebuffer[W],D,W);else{const W=D.texture.mipmaps;W&&W.length>0?Tt(x.__webglFramebuffer[0],D,0):Tt(x.__webglFramebuffer,D,0)}else if(q){x.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[W]),x.__webglDepthbuffer[W]===void 0)x.__webglDepthbuffer[W]=i.createRenderbuffer(),Ve(x.__webglDepthbuffer[W],D,!1);else{const te=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,me=x.__webglDepthbuffer[W];i.bindRenderbuffer(i.RENDERBUFFER,me),i.framebufferRenderbuffer(i.FRAMEBUFFER,te,i.RENDERBUFFER,me)}}else{const W=D.texture.mipmaps;if(W&&W.length>0?t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),Ve(x.__webglDepthbuffer,D,!1);else{const te=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,me=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,me),i.framebufferRenderbuffer(i.FRAMEBUFFER,te,i.RENDERBUFFER,me)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function at(D,x,q){const W=n.get(D);x!==void 0&&Ae(W.__webglFramebuffer,D,D.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),q!==void 0&&Qe(D)}function vt(D){const x=D.texture,q=n.get(D),W=n.get(x);D.addEventListener("dispose",E);const te=D.textures,me=D.isWebGLCubeRenderTarget===!0,ge=te.length>1;if(ge||(W.__webglTexture===void 0&&(W.__webglTexture=i.createTexture()),W.__version=x.version,l.memory.textures++),me){q.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(x.mipmaps&&x.mipmaps.length>0){q.__webglFramebuffer[Q]=[];for(let le=0;le<x.mipmaps.length;le++)q.__webglFramebuffer[Q][le]=i.createFramebuffer()}else q.__webglFramebuffer[Q]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){q.__webglFramebuffer=[];for(let Q=0;Q<x.mipmaps.length;Q++)q.__webglFramebuffer[Q]=i.createFramebuffer()}else q.__webglFramebuffer=i.createFramebuffer();if(ge)for(let Q=0,le=te.length;Q<le;Q++){const ve=n.get(te[Q]);ve.__webglTexture===void 0&&(ve.__webglTexture=i.createTexture(),l.memory.textures++)}if(D.samples>0&&Rt(D)===!1){q.__webglMultisampledFramebuffer=i.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let Q=0;Q<te.length;Q++){const le=te[Q];q.__webglColorRenderbuffer[Q]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,q.__webglColorRenderbuffer[Q]);const ve=a.convert(le.format,le.colorSpace),Ue=a.convert(le.type),Ee=w(le.internalFormat,ve,Ue,le.normalized,le.colorSpace,D.isXRRenderTarget===!0),_e=At(D);i.renderbufferStorageMultisample(i.RENDERBUFFER,_e,Ee,D.width,D.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Q,i.RENDERBUFFER,q.__webglColorRenderbuffer[Q])}i.bindRenderbuffer(i.RENDERBUFFER,null),D.depthBuffer&&(q.__webglDepthRenderbuffer=i.createRenderbuffer(),Ve(q.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(me){t.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture),nt(i.TEXTURE_CUBE_MAP,x);for(let Q=0;Q<6;Q++)if(x.mipmaps&&x.mipmaps.length>0)for(let le=0;le<x.mipmaps.length;le++)Ae(q.__webglFramebuffer[Q][le],D,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,le);else Ae(q.__webglFramebuffer[Q],D,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);_(x)&&I(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ge){for(let Q=0,le=te.length;Q<le;Q++){const ve=te[Q],Ue=n.get(ve);let Ee=i.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Ee=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Ee,Ue.__webglTexture),nt(Ee,ve),Ae(q.__webglFramebuffer,D,ve,i.COLOR_ATTACHMENT0+Q,Ee,0),_(ve)&&I(Ee)}t.unbindTexture()}else{let Q=i.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Q=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Q,W.__webglTexture),nt(Q,x),x.mipmaps&&x.mipmaps.length>0)for(let le=0;le<x.mipmaps.length;le++)Ae(q.__webglFramebuffer[le],D,x,i.COLOR_ATTACHMENT0,Q,le);else Ae(q.__webglFramebuffer,D,x,i.COLOR_ATTACHMENT0,Q,0);_(x)&&I(Q),t.unbindTexture()}D.depthBuffer&&Qe(D)}function Je(D){const x=D.textures;for(let q=0,W=x.length;q<W;q++){const te=x[q];if(_(te)){const me=H(D),ge=n.get(te).__webglTexture;t.bindTexture(me,ge),I(me),t.unbindTexture()}}}const wt=[],It=[];function Ft(D){if(D.samples>0){if(Rt(D)===!1){const x=D.textures,q=D.width,W=D.height;let te=i.COLOR_BUFFER_BIT;const me=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ge=n.get(D),Q=x.length>1;if(Q)for(let ve=0;ve<x.length;ve++)t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer);const le=D.texture.mipmaps;le&&le.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ge.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let ve=0;ve<x.length;ve++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(te|=i.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(te|=i.STENCIL_BUFFER_BIT)),Q){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ge.__webglColorRenderbuffer[ve]);const Ue=n.get(x[ve]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ue,0)}i.blitFramebuffer(0,0,q,W,0,0,q,W,te,i.NEAREST),d===!0&&(wt.length=0,It.length=0,wt.push(i.COLOR_ATTACHMENT0+ve),D.depthBuffer&&D.storeMultisampledDepthBuffer===!1&&(wt.push(me),It.push(me),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,It)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,wt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Q)for(let ve=0;ve<x.length;ve++){t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,ge.__webglColorRenderbuffer[ve]);const Ue=n.get(x[ve]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,Ue,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.storeMultisampledDepthBuffer===!1&&d){const x=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function At(D){return Math.min(r.maxSamples,D.samples)}function Rt(D){const x=n.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function V(D){const x=l.render.frame;m.get(D)!==x&&(m.set(D,x),D.update())}function zt(D,x){const q=D.colorSpace,W=D.format,te=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||q!==ps&&q!==li&&(lt.getTransfer(q)===Mt?(W!==wn||te!==hn)&&We("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):gt("WebGLTextures: Unsupported texture color space:",q)),x}function pt(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(h.width=D.naturalWidth||D.width,h.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(h.width=D.displayWidth,h.height=D.displayHeight):(h.width=D.width,h.height=D.height),h}this.allocateTextureUnit=ne,this.resetTextureUnits=$,this.getTextureUnits=O,this.setTextureUnits=K,this.setTexture2D=re,this.setTexture2DArray=se,this.setTexture3D=ce,this.setTextureCube=he,this.rebindTextures=at,this.setupRenderTarget=vt,this.updateRenderTargetMipmap=Je,this.updateMultisampleRenderTarget=Ft,this.setupDepthRenderbuffer=Qe,this.setupFrameBufferTexture=Ae,this.useMultisampledRTT=Rt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Xg(i,e){function t(n,r=li){let a;const l=lt.getTransfer(r);if(n===hn)return i.UNSIGNED_BYTE;if(n===lo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===co)return i.UNSIGNED_SHORT_5_5_5_1;if(n===dc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===fc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===uc)return i.BYTE;if(n===hc)return i.SHORT;if(n===gr)return i.UNSIGNED_SHORT;if(n===oo)return i.INT;if(n===kn)return i.UNSIGNED_INT;if(n===Fn)return i.FLOAT;if(n===zn)return i.HALF_FLOAT;if(n===pc)return i.ALPHA;if(n===mc)return i.RGB;if(n===wn)return i.RGBA;if(n===Qn)return i.DEPTH_COMPONENT;if(n===xi)return i.DEPTH_STENCIL;if(n===_c)return i.RED;if(n===uo)return i.RED_INTEGER;if(n===Ei)return i.RG;if(n===ho)return i.RG_INTEGER;if(n===fo)return i.RGBA_INTEGER;if(n===os||n===ls||n===cs||n===us)if(l===Mt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===os)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ls)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===cs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===us)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===os)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ls)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===cs)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===us)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Aa||n===Ra||n===Ca||n===Pa)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===Aa)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ra)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ca)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Pa)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Da||n===La||n===Ua||n===Ia||n===Na||n===ds||n===Fa)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(n===Da||n===La)return l===Mt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===Ua)return l===Mt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ia)return a.COMPRESSED_R11_EAC;if(n===Na)return a.COMPRESSED_SIGNED_R11_EAC;if(n===ds)return a.COMPRESSED_RG11_EAC;if(n===Fa)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Oa||n===Ba||n===ka||n===za||n===Ha||n===Ga||n===Va||n===Wa||n===Xa||n===Ya||n===qa||n===$a||n===Ka||n===Za)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(n===Oa)return l===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ba)return l===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ka)return l===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===za)return l===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ha)return l===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ga)return l===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Va)return l===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Wa)return l===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Xa)return l===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ya)return l===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===qa)return l===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===$a)return l===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ka)return l===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Za)return l===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ja||n===ja||n===Qa)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(n===Ja)return l===Mt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ja)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Qa)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===eo||n===to||n===fs||n===no)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(n===eo)return a.COMPRESSED_RED_RGTC1_EXT;if(n===to)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===fs)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===no)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===vr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Yg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class $g{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Ac(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Hn({vertexShader:Yg,fragmentShader:qg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Rn(new Es(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Kg extends hi{constructor(e,t){super();const n=this;let r=null,a=1,l=null,c="local-floor",d=1,h=null,m=null,g=null,f=null,v=null,T=null;const A=typeof XRWebGLBinding<"u",S=new $g,_={},I=t.getContextAttributes();let H=null,w=null;const P=[],R=[],N=new Ke;let E=null,L=null;const k=new _n;k.viewport=new Lt;const z=new _n;z.viewport=new Lt;const Y=[k,z],$=new ef;let O=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ae){let ue=P[ae];return ue===void 0&&(ue=new Xs,P[ae]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(ae){let ue=P[ae];return ue===void 0&&(ue=new Xs,P[ae]=ue),ue.getGripSpace()},this.getHand=function(ae){let ue=P[ae];return ue===void 0&&(ue=new Xs,P[ae]=ue),ue.getHandSpace()};function ne(ae){const ue=R.indexOf(ae.inputSource);if(ue===-1)return;const ye=P[ue];ye!==void 0&&(ye.update(ae.inputSource,ae.frame,h||l),ye.dispatchEvent({type:ae.type,data:ae.inputSource}))}function X(){r.removeEventListener("select",ne),r.removeEventListener("selectstart",ne),r.removeEventListener("selectend",ne),r.removeEventListener("squeeze",ne),r.removeEventListener("squeezestart",ne),r.removeEventListener("squeezeend",ne),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",re);for(let ae=0;ae<P.length;ae++){const ue=R[ae];ue!==null&&(R[ae]=null,P[ae].disconnect(ue))}O=null,K=null,S.reset();for(const ae in _)delete _[ae];if(e.setRenderTarget(H),v=null,f=null,g=null,r=null,w=null,it.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(N.width,N.height,!1),L!==null){const ae=L.camera;ae.fov=L.fov,ae.zoom=L.zoom,ae.updateProjectionMatrix(),L=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ae){a=ae,n.isPresenting===!0&&We("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ae){c=ae,n.isPresenting===!0&&We("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||l},this.setReferenceSpace=function(ae){h=ae},this.getBaseLayer=function(){return f!==null?f:v},this.getBinding=function(){return g===null&&A&&(g=new XRWebGLBinding(r,t)),g},this.getFrame=function(){return T},this.getSession=function(){return r},this.setSession=async function(ae){if(r=ae,r!==null){if(H=e.getRenderTarget(),r.addEventListener("select",ne),r.addEventListener("selectstart",ne),r.addEventListener("selectend",ne),r.addEventListener("squeeze",ne),r.addEventListener("squeezestart",ne),r.addEventListener("squeezeend",ne),r.addEventListener("end",X),r.addEventListener("inputsourceschange",re),I.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(N),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let ye=null,He=null,Ae=null;I.depth&&(Ae=I.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ye=I.stencil?xi:Qn,He=I.stencil?vr:kn);const Ve={colorFormat:t.RGBA8,depthFormat:Ae,scaleFactor:a};g=this.getBinding(),f=g.createProjectionLayer(Ve),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),w=new An(f.textureWidth,f.textureHeight,{format:wn,type:hn,depthTexture:new Mr(f.textureWidth,f.textureHeight,He,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:I.stencil,colorSpace:e.outputColorSpace,samples:I.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{const ye={antialias:I.antialias,alpha:!0,depth:I.depth,stencil:I.stencil,framebufferScaleFactor:a};v=new XRWebGLLayer(r,t,ye),r.updateRenderState({baseLayer:v}),e.setPixelRatio(1),e.setSize(v.framebufferWidth,v.framebufferHeight,!1),w=new An(v.framebufferWidth,v.framebufferHeight,{format:wn,type:hn,colorSpace:e.outputColorSpace,stencilBuffer:I.stencil,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1,storeMultisampledDepthBuffer:v.ignoreDepthValues===!1,storeMultisampledStencilBuffer:v.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(d),h=null,l=await r.requestReferenceSpace(c),it.setContext(r),it.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function re(ae){for(let ue=0;ue<ae.removed.length;ue++){const ye=ae.removed[ue],He=R.indexOf(ye);He>=0&&(R[He]=null,P[He].disconnect(ye))}for(let ue=0;ue<ae.added.length;ue++){const ye=ae.added[ue];let He=R.indexOf(ye);if(He===-1){for(let Ve=0;Ve<P.length;Ve++)if(Ve>=R.length){R.push(ye),He=Ve;break}else if(R[Ve]===null){R[Ve]=ye,He=Ve;break}if(He===-1)break}const Ae=P[He];Ae&&Ae.connect(ye)}}const se=new J,ce=new J;function he(ae,ue,ye){se.setFromMatrixPosition(ue.matrixWorld),ce.setFromMatrixPosition(ye.matrixWorld);const He=se.distanceTo(ce),Ae=ue.projectionMatrix.elements,Ve=ye.projectionMatrix.elements,Tt=Ae[14]/(Ae[10]-1),Qe=Ae[14]/(Ae[10]+1),at=(Ae[9]+1)/Ae[5],vt=(Ae[9]-1)/Ae[5],Je=(Ae[8]-1)/Ae[0],wt=(Ve[8]+1)/Ve[0],It=Tt*Je,Ft=Tt*wt,At=He/(-Je+wt),Rt=At*-Je;if(ue.matrixWorld.decompose(ae.position,ae.quaternion,ae.scale),ae.translateX(Rt),ae.translateZ(At),ae.matrixWorld.compose(ae.position,ae.quaternion,ae.scale),ae.matrixWorldInverse.copy(ae.matrixWorld).invert(),Ae[10]===-1)ae.projectionMatrix.copy(ue.projectionMatrix),ae.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{const V=Tt+At,zt=Qe+At,pt=It-Rt,D=Ft+(He-Rt),x=at*Qe/zt*V,q=vt*Qe/zt*V;ae.projectionMatrix.makePerspective(pt,D,x,q,V,zt),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert()}}function Oe(ae,ue){ue===null?ae.matrixWorld.copy(ae.matrix):ae.matrixWorld.multiplyMatrices(ue.matrixWorld,ae.matrix),ae.matrixWorldInverse.copy(ae.matrixWorld).invert()}this.updateCamera=function(ae){if(r===null)return;let ue=ae.near,ye=ae.far;S.texture!==null&&(S.depthNear>0&&(ue=S.depthNear),S.depthFar>0&&(ye=S.depthFar)),$.near=z.near=k.near=ue,$.far=z.far=k.far=ye,(O!==$.near||K!==$.far)&&(r.updateRenderState({depthNear:$.near,depthFar:$.far}),O=$.near,K=$.far),$.layers.mask=ae.layers.mask|6,k.layers.mask=$.layers.mask&-5,z.layers.mask=$.layers.mask&-3;const He=ae.parent,Ae=$.cameras;Oe($,He);for(let Ve=0;Ve<Ae.length;Ve++)Oe(Ae[Ve],He);Ae.length===2?he($,k,z):$.projectionMatrix.copy(k.projectionMatrix),L===null&&ae.isPerspectiveCamera&&(L={camera:ae,fov:ae.fov,zoom:ae.zoom}),Be(ae,$,He)};function Be(ae,ue,ye){ye===null?ae.matrix.copy(ue.matrixWorld):(ae.matrix.copy(ye.matrixWorld),ae.matrix.invert(),ae.matrix.multiply(ue.matrixWorld)),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.updateMatrixWorld(!0),ae.projectionMatrix.copy(ue.projectionMatrix),ae.projectionMatrixInverse.copy(ue.projectionMatrixInverse),ae.isPerspectiveCamera&&(ae.fov=Sr*2*Math.atan(1/ae.projectionMatrix.elements[5]),ae.zoom=1)}this.getCamera=function(){return $},this.getFoveation=function(){if(!(f===null&&v===null))return d},this.setFoveation=function(ae){d=ae,f!==null&&(f.fixedFoveation=ae),v!==null&&v.fixedFoveation!==void 0&&(v.fixedFoveation=ae)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh($)},this.getCameraTexture=function(ae){return _[ae]};let ht=null;function nt(ae,ue){if(m=ue.getViewerPose(h||l),T=ue,m!==null){const ye=m.views;v!==null&&(e.setRenderTargetFramebuffer(w,v.framebuffer),e.setRenderTarget(w));let He=!1;ye.length!==$.cameras.length&&($.cameras.length=0,He=!0);for(let Qe=0;Qe<ye.length;Qe++){const at=ye[Qe];let vt=null;if(v!==null)vt=v.getViewport(at);else{const wt=g.getViewSubImage(f,at);vt=wt.viewport,Qe===0&&(e.setRenderTargetTextures(w,wt.colorTexture,wt.depthStencilTexture),e.setRenderTarget(w))}let Je=Y[Qe];Je===void 0&&(Je=new _n,Je.layers.enable(Qe),Je.viewport=new Lt,Y[Qe]=Je),Je.matrix.fromArray(at.transform.matrix),Je.matrix.decompose(Je.position,Je.quaternion,Je.scale),Je.projectionMatrix.fromArray(at.projectionMatrix),Je.projectionMatrixInverse.copy(Je.projectionMatrix).invert(),Je.viewport.set(vt.x,vt.y,vt.width,vt.height),Qe===0&&($.matrix.copy(Je.matrix),$.matrix.decompose($.position,$.quaternion,$.scale)),He===!0&&$.cameras.push(Je)}const Ae=r.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&A){g=n.getBinding();const Qe=g.getDepthInformation(ye[0]);Qe&&Qe.isValid&&Qe.texture&&S.init(Qe,r.renderState)}if(Ae&&Ae.includes("camera-access")&&A){e.state.unbindTexture(),g=n.getBinding();for(let Qe=0;Qe<ye.length;Qe++){const at=ye[Qe].camera;if(at){let vt=_[at];vt||(vt=new Ac,_[at]=vt);const Je=g.getCameraImage(at);vt.sourceTexture=Je}}}}for(let ye=0;ye<P.length;ye++){const He=R[ye],Ae=P[ye];He!==null&&Ae!==void 0&&Ae.update(He,ue,h||l)}ht&&ht(ae,ue),ue.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ue}),T=null}const it=new Dc;it.setAnimationLoop(nt),this.setAnimationLoop=function(ae){ht=ae},this.dispose=function(){}}}const Zg=new Ut,Bc=new Ze;Bc.set(-1,0,0,0,1,0,0,0,1);function Jg(i,e){function t(S,_){S.matrixAutoUpdate===!0&&S.updateMatrix(),_.value.copy(S.matrix)}function n(S,_){_.color.getRGB(S.fogColor.value,Rc(i)),_.isFog?(S.fogNear.value=_.near,S.fogFar.value=_.far):_.isFogExp2&&(S.fogDensity.value=_.density)}function r(S,_,I,H,w){_.isNodeMaterial?_.uniformsNeedUpdate=!1:_.isMeshBasicMaterial?a(S,_):_.isMeshLambertMaterial?(a(S,_),_.envMap&&(S.envMapIntensity.value=_.envMapIntensity)):_.isMeshToonMaterial?(a(S,_),g(S,_)):_.isMeshPhongMaterial?(a(S,_),m(S,_),_.envMap&&(S.envMapIntensity.value=_.envMapIntensity)):_.isMeshStandardMaterial?(a(S,_),f(S,_),_.isMeshPhysicalMaterial&&v(S,_,w)):_.isMeshMatcapMaterial?(a(S,_),T(S,_)):_.isMeshDepthMaterial?a(S,_):_.isMeshDistanceMaterial?(a(S,_),A(S,_)):_.isMeshNormalMaterial?a(S,_):_.isLineBasicMaterial?(l(S,_),_.isLineDashedMaterial&&c(S,_)):_.isPointsMaterial?d(S,_,I,H):_.isSpriteMaterial?h(S,_):_.isShadowMaterial?(S.color.value.copy(_.color),S.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function a(S,_){S.opacity.value=_.opacity,_.color&&S.diffuse.value.copy(_.color),_.emissive&&S.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(S.map.value=_.map,t(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,t(_.alphaMap,S.alphaMapTransform)),_.bumpMap&&(S.bumpMap.value=_.bumpMap,t(_.bumpMap,S.bumpMapTransform),S.bumpScale.value=_.bumpScale,_.side===rn&&(S.bumpScale.value*=-1)),_.normalMap&&(S.normalMap.value=_.normalMap,t(_.normalMap,S.normalMapTransform),S.normalScale.value.copy(_.normalScale),_.side===rn&&S.normalScale.value.negate()),_.displacementMap&&(S.displacementMap.value=_.displacementMap,t(_.displacementMap,S.displacementMapTransform),S.displacementScale.value=_.displacementScale,S.displacementBias.value=_.displacementBias),_.emissiveMap&&(S.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,S.emissiveMapTransform)),_.specularMap&&(S.specularMap.value=_.specularMap,t(_.specularMap,S.specularMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest);const I=e.get(_),H=I.envMap,w=I.envMapRotation;H&&(S.envMap.value=H,S.envMapRotation.value.setFromMatrix4(Zg.makeRotationFromEuler(w)).transpose(),H.isCubeTexture&&H.isRenderTargetTexture===!1&&S.envMapRotation.value.premultiply(Bc),S.reflectivity.value=_.reflectivity,S.ior.value=_.ior,S.refractionRatio.value=_.refractionRatio),_.lightMap&&(S.lightMap.value=_.lightMap,S.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,S.lightMapTransform)),_.aoMap&&(S.aoMap.value=_.aoMap,S.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,S.aoMapTransform))}function l(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,_.map&&(S.map.value=_.map,t(_.map,S.mapTransform))}function c(S,_){S.dashSize.value=_.dashSize,S.totalSize.value=_.dashSize+_.gapSize,S.scale.value=_.scale}function d(S,_,I,H){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.size.value=_.size*I,S.scale.value=H*.5,_.map&&(S.map.value=_.map,t(_.map,S.uvTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,t(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function h(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.rotation.value=_.rotation,_.map&&(S.map.value=_.map,t(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,t(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function m(S,_){S.specular.value.copy(_.specular),S.shininess.value=Math.max(_.shininess,1e-4)}function g(S,_){_.gradientMap&&(S.gradientMap.value=_.gradientMap)}function f(S,_){S.metalness.value=_.metalness,_.metalnessMap&&(S.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,S.metalnessMapTransform)),S.roughness.value=_.roughness,_.roughnessMap&&(S.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,S.roughnessMapTransform)),_.envMap&&(S.envMapIntensity.value=_.envMapIntensity)}function v(S,_,I){S.ior.value=_.ior,_.sheen>0&&(S.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),S.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(S.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,S.sheenColorMapTransform)),_.sheenRoughnessMap&&(S.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,S.sheenRoughnessMapTransform))),_.clearcoat>0&&(S.clearcoat.value=_.clearcoat,S.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(S.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,S.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(S.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===rn&&S.clearcoatNormalScale.value.negate())),_.dispersion>0&&(S.dispersion.value=_.dispersion),_.retroreflectivity>0&&(S.retroreflectivity.value=_.retroreflectivity),_.iridescence>0&&(S.iridescence.value=_.iridescence,S.iridescenceIOR.value=_.iridescenceIOR,S.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(S.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,S.iridescenceMapTransform)),_.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),_.transmission>0&&(S.transmission.value=_.transmission,S.transmissionSamplerMap.value=I.texture,S.transmissionSamplerSize.value.set(I.width,I.height),_.transmissionMap&&(S.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,S.transmissionMapTransform)),S.thickness.value=_.thickness,_.thicknessMap&&(S.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=_.attenuationDistance,S.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(S.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(S.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=_.specularIntensity,S.specularColor.value.copy(_.specularColor),_.specularColorMap&&(S.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,S.specularColorMapTransform)),_.specularIntensityMap&&(S.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,S.specularIntensityMapTransform))}function T(S,_){_.matcap&&(S.matcap.value=_.matcap)}function A(S,_){const I=e.get(_).light;S.referencePosition.value.setFromMatrixPosition(I.matrixWorld),S.nearDistance.value=I.shadow.camera.near,S.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function jg(i,e,t,n){let r={},a={},l=[];const c=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function d(w,P){const R=P.program;n.uniformBlockBinding(w,R)}function h(w,P){let R=r[w.id];R===void 0&&(S(w),R=m(w),r[w.id]=R,w.addEventListener("dispose",I));const N=P.program;n.updateUBOMapping(w,N);const E=e.render.frame;a[w.id]!==E&&(f(w),a[w.id]=E)}function m(w){const P=g();w.__bindingPointIndex=P;const R=i.createBuffer(),N=w.__size,E=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,R),i.bufferData(i.UNIFORM_BUFFER,N,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,P,R),R}function g(){for(let w=0;w<c;w++)if(l.indexOf(w)===-1)return l.push(w),w;return gt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(w){const P=r[w.id],R=w.uniforms,N=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,P);for(let E=0,L=R.length;E<L;E++){const k=R[E];if(Array.isArray(k))for(let z=0,Y=k.length;z<Y;z++)v(k[z],E,z,N);else v(k,E,0,N)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function v(w,P,R,N){if(A(w,P,R,N)===!0){const E=w.__offset,L=w.value;if(Array.isArray(L)){let k=0;for(let z=0;z<L.length;z++){const Y=L[z],$=_(Y);T(Y,w.__data,k),typeof Y!="number"&&typeof Y!="boolean"&&!Y.isMatrix3&&!ArrayBuffer.isView(Y)&&(k+=$.storage/Float32Array.BYTES_PER_ELEMENT)}}else T(L,w.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,E,w.__data)}}function T(w,P,R){typeof w=="number"||typeof w=="boolean"?P[0]=w:w.isMatrix3?(P[0]=w.elements[0],P[1]=w.elements[1],P[2]=w.elements[2],P[3]=0,P[4]=w.elements[3],P[5]=w.elements[4],P[6]=w.elements[5],P[7]=0,P[8]=w.elements[6],P[9]=w.elements[7],P[10]=w.elements[8],P[11]=0):ArrayBuffer.isView(w)?P.set(new w.constructor(w.buffer,w.byteOffset,P.length)):w.toArray(P,R)}function A(w,P,R,N){const E=w.value,L=P+"_"+R;if(N[L]===void 0)return typeof E=="number"||typeof E=="boolean"?N[L]=E:ArrayBuffer.isView(E)?N[L]=E.slice():N[L]=E.clone(),!0;{const k=N[L];if(typeof E=="number"||typeof E=="boolean"){if(k!==E)return N[L]=E,!0}else{if(ArrayBuffer.isView(E))return!0;if(k.equals(E)===!1)return k.copy(E),!0}}return!1}function S(w){const P=w.uniforms;let R=0;const N=16;for(let L=0,k=P.length;L<k;L++){const z=Array.isArray(P[L])?P[L]:[P[L]];for(let Y=0,$=z.length;Y<$;Y++){const O=z[Y],K=Array.isArray(O.value)?O.value:[O.value];for(let ne=0,X=K.length;ne<X;ne++){const re=K[ne],se=_(re),ce=R%N,he=ce%se.boundary,Oe=ce+he;R+=he,Oe!==0&&N-Oe<se.storage&&(R+=N-Oe),O.__data=new Float32Array(se.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=R,R+=se.storage}}}const E=R%N;return E>0&&(R+=N-E),w.__size=R,w.__cache={},this}function _(w){const P={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(P.boundary=4,P.storage=4):w.isVector2?(P.boundary=8,P.storage=8):w.isVector3||w.isColor?(P.boundary=16,P.storage=12):w.isVector4?(P.boundary=16,P.storage=16):w.isMatrix3?(P.boundary=48,P.storage=48):w.isMatrix4?(P.boundary=64,P.storage=64):w.isTexture?We("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(w)?(P.boundary=16,P.storage=w.byteLength):We("WebGLRenderer: Unsupported uniform value type.",w),P}function I(w){const P=w.target;P.removeEventListener("dispose",I);const R=l.indexOf(P.__bindingPointIndex);l.splice(R,1),i.deleteBuffer(r[P.id]),delete r[P.id],delete a[P.id]}function H(){for(const w in r)i.deleteBuffer(r[w]);l=[],r={},a={}}return{bind:d,update:h,dispose:H}}const Qg=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let In=null;function e0(){return In===null&&(In=new Id(Qg,16,16,Ei,zn),In.name="DFG_LUT",In.minFilter=Jt,In.magFilter=Jt,In.wrapS=Zn,In.wrapT=Zn,In.generateMipmaps=!1,In.needsUpdate=!0),In}class t0{constructor(e={}){const{canvas:t=$h(),context:n=null,depth:r=!0,stencil:a=!1,alpha:l=!1,antialias:c=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:h=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:f=!1,outputBufferType:v=hn}=e;this.isWebGLRenderer=!0;let T;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=n.getContextAttributes().alpha}else T=l;const A=v,S=new Set([fo,ho,uo]),_=new Set([hn,kn,gr,vr,lo,co]),I=new Uint32Array(4),H=new Int32Array(4),w=new J;let P=null,R=null;const N=[],E=[];let L=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Bn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const k=this;let z=!1,Y=null,$=null,O=null,K=null;this._outputColorSpace=un;let ne=0,X=0,re=null,se=-1,ce=null;const he=new Lt,Oe=new Lt;let Be=null;const ht=new tt(0);let nt=0,it=t.width,ae=t.height,ue=1,ye=null,He=null;const Ae=new Lt(0,0,it,ae),Ve=new Lt(0,0,it,ae);let Tt=!1;const Qe=new xo;let at=!1,vt=!1;const Je=new Ut,wt=new J,It=new Lt,Ft={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let At=!1;function Rt(){return re===null?ue:1}let V=n;function zt(b,F){return t.getContext(b,F)}let pt,D,x,q,W,te,me,ge,Q,le,ve,Ue,Ee,_e,ke,Ge,qe,G,Se,oe,Me,Re,de;try{const b={alpha:!0,depth:r,stencil:a,antialias:c,premultipliedAlpha:d,preserveDrawingBuffer:h,powerPreference:m,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ao}`),t.addEventListener("webglcontextlost",yt,!1),t.addEventListener("webglcontextrestored",mt,!1),t.addEventListener("webglcontextcreationerror",an,!1),V===null){const F="webgl2";if(V=zt(F,b),V===null)throw zt(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}pe()}catch(b){throw t.removeEventListener("webglcontextlost",yt,!1),t.removeEventListener("webglcontextrestored",mt,!1),t.removeEventListener("webglcontextcreationerror",an,!1),gt("WebGLRenderer: "+b.message),b}function pe(){pt=new e_(V),pt.init(),Me=new Xg(V,pt),D=new Wm(V,pt,e,Me),x=new Vg(V,pt),D.reversedDepthBuffer&&f&&x.buffers.depth.setReversed(!0),$=V.createFramebuffer(),O=V.createFramebuffer(),K=V.createFramebuffer(),q=new i_(V),W=new Cg,te=new Wg(V,pt,x,W,D,Me,q),me=new Qm(k),ge=new sf(V),Re=new Gm(V,ge),Q=new t_(V,ge,q,Re),le=new s_(V,Q,ge,Re,q),G=new r_(V,D,te),ke=new Xm(W),ve=new Rg(k,me,pt,D,Re,ke),Ue=new Jg(k,W),Ee=new Dg,_e=new Og(pt),qe=new Hm(k,me,x,le,T,d),Ge=new Gg(k,le,D),de=new jg(V,q,D,x),Se=new Vm(V,pt,q),oe=new n_(V,pt,q),q.programs=ve.programs,k.capabilities=D,k.extensions=pt,k.properties=W,k.renderLists=Ee,k.shadowMap=Ge,k.state=x,k.info=q}A!==hn&&(L=new o_(A,t.width,t.height,c,r,a));const Fe=new Kg(k,V);this.xr=Fe,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const b=pt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=pt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return ue},this.setPixelRatio=function(b){b!==void 0&&(ue=b,this.setSize(it,ae,!1))},this.getSize=function(b){return b.set(it,ae)},this.setSize=function(b,F,ee=!0){if(Fe.isPresenting){We("WebGLRenderer: Can't change size while VR device is presenting.");return}it=b,ae=F,t.width=Math.floor(b*ue),t.height=Math.floor(F*ue),ee===!0&&(t.style.width=b+"px",t.style.height=F+"px"),L!==null&&L.setSize(t.width,t.height),this.setViewport(0,0,b,F)},this.getDrawingBufferSize=function(b){return b.set(it*ue,ae*ue).floor()},this.setDrawingBufferSize=function(b,F,ee){it=b,ae=F,ue=ee,t.width=Math.floor(b*ee),t.height=Math.floor(F*ee),this.setViewport(0,0,b,F)},this.setEffects=function(b){if(A===hn){gt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let F=0;F<b.length;F++)if(b[F].isOutputPass===!0){We("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(he)},this.getViewport=function(b){return b.copy(Ae)},this.setViewport=function(b,F,ee,Z){b.isVector4?Ae.set(b.x,b.y,b.z,b.w):Ae.set(b,F,ee,Z),x.viewport(he.copy(Ae).multiplyScalar(ue).round())},this.getScissor=function(b){return b.copy(Ve)},this.setScissor=function(b,F,ee,Z){b.isVector4?Ve.set(b.x,b.y,b.z,b.w):Ve.set(b,F,ee,Z),x.scissor(Oe.copy(Ve).multiplyScalar(ue).round())},this.getScissorTest=function(){return Tt},this.setScissorTest=function(b){x.setScissorTest(Tt=b)},this.setOpaqueSort=function(b){ye=b},this.setTransparentSort=function(b){He=b},this.getClearColor=function(b){return b.copy(qe.getClearColor())},this.setClearColor=function(){qe.setClearColor(...arguments)},this.getClearAlpha=function(){return qe.getClearAlpha()},this.setClearAlpha=function(){qe.setClearAlpha(...arguments)},this.clear=function(b=!0,F=!0,ee=!0){let Z=0;if(b){let j=!1;if(re!==null){const Te=re.texture.format;j=S.has(Te)}if(j){const Te=re.texture.type,xe=_.has(Te),be=qe.getClearColor(),Ne=qe.getClearAlpha(),ze=be.r,je=be.g,Ye=be.b;xe?(I[0]=ze,I[1]=je,I[2]=Ye,I[3]=Ne,V.clearBufferuiv(V.COLOR,0,I)):(H[0]=ze,H[1]=je,H[2]=Ye,H[3]=Ne,V.clearBufferiv(V.COLOR,0,H))}else Z|=V.COLOR_BUFFER_BIT}F&&(Z|=V.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ee&&(Z|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Z!==0&&V.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),Y=b},this.dispose=function(){t.removeEventListener("webglcontextlost",yt,!1),t.removeEventListener("webglcontextrestored",mt,!1),t.removeEventListener("webglcontextcreationerror",an,!1),qe.dispose(),Ee.dispose(),_e.dispose(),W.dispose(),me.dispose(),le.dispose(),Re.dispose(),de.dispose(),ve.dispose(),Fe.dispose(),Fe.removeEventListener("sessionstart",yr),Fe.removeEventListener("sessionend",br),fn.stop()};function yt(b){b.preventDefault(),Ko("WebGLRenderer: Context Lost."),z=!0}function mt(){Ko("WebGLRenderer: Context Restored."),z=!1;const b=q.autoReset,F=Ge.enabled,ee=Ge.autoUpdate,Z=Ge.needsUpdate,j=Ge.type;pe(),q.autoReset=b,Ge.enabled=F,Ge.autoUpdate=ee,Ge.needsUpdate=Z,Ge.type=j}function an(b){gt("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function dn(b){const F=b.target;F.removeEventListener("dispose",dn),Ts(F)}function Ts(b){er(b),W.remove(b)}function er(b){const F=W.get(b).programs;F!==void 0&&(F.forEach(function(ee){ve.releaseProgram(ee)}),b.isShaderMaterial&&ve.releaseShaderCache(b))}this.renderBufferDirect=function(b,F,ee,Z,j,Te){F===null&&(F=Ft);const xe=j.isMesh&&j.matrixWorld.determinantAffine()<0,be=As(b,F,ee,Z,j);x.setMaterial(Z,xe);let Ne=ee.index,ze=1;if(Z.wireframe===!0){if(Ne=Q.getWireframeAttribute(ee),Ne===void 0)return;ze=2}const je=ee.drawRange,Ye=ee.attributes.position;let Pe=je.start*ze,_t=(je.start+je.count)*ze;Te!==null&&(Pe=Math.max(Pe,Te.start*ze),_t=Math.min(_t,(Te.start+Te.count)*ze)),Ne!==null?(Pe=Math.max(Pe,0),_t=Math.min(_t,Ne.count)):Ye!=null&&(Pe=Math.max(Pe,0),_t=Math.min(_t,Ye.count));const Ct=_t-Pe;if(Ct<0||Ct===1/0)return;Re.setup(j,Z,be,ee,Ne);let ot,xt=Se;if(Ne!==null&&(ot=ge.get(Ne),xt=oe,xt.setIndex(ot)),j.isMesh)Z.wireframe===!0?(x.setLineWidth(Z.wireframeLinewidth*Rt()),xt.setMode(V.LINES)):xt.setMode(V.TRIANGLES);else if(j.isLine){let Ht=Z.linewidth;Ht===void 0&&(Ht=1),x.setLineWidth(Ht*Rt()),j.isLineSegments?xt.setMode(V.LINES):j.isLineLoop?xt.setMode(V.LINE_LOOP):xt.setMode(V.LINE_STRIP)}else j.isPoints?xt.setMode(V.POINTS):j.isSprite&&xt.setMode(V.TRIANGLES);if(j.isBatchedMesh)if(pt.get("WEBGL_multi_draw"))xt.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const Ht=j._multiDrawStarts,De=j._multiDrawCounts,ct=j._multiDrawCount,st=Ne?ge.get(Ne).bytesPerElement:1,tn=W.get(Z).currentProgram.getUniforms();for(let pn=0;pn<ct;pn++)tn.setValue(V,"_gl_DrawID",pn),xt.render(Ht[pn]/st,De[pn])}else if(j.isInstancedMesh)xt.renderInstances(Pe,Ct,j.count);else if(ee.isInstancedBufferGeometry){const Ht=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,De=Math.min(ee.instanceCount,Ht);xt.renderInstances(Pe,Ct,De)}else xt.render(Pe,Ct)};function M(b,F,ee,Z){Y!==null&&b.isNodeMaterial&&Y.setObject(Z,b),at===!0&&ke.setState(b,ee,!1),b.transparent===!0&&b.side===bn&&b.forceSinglePass===!1?(b.side=rn,b.needsUpdate=!0,bi(b,F,Z),b.side=Si,b.needsUpdate=!0,bi(b,F,Z),b.side=bn):bi(b,F,Z)}this.compile=function(b,F,ee=null){ee===null&&(ee=b),Y!==null&&Y.renderStart(b,F,ee),R=_e.get(ee),R.init(F),E.push(R),ee.traverseVisible(function(j){j.isLight&&j.layers.test(F.layers)&&(R.pushLight(j),j.castShadow&&R.pushShadow(j))}),b!==ee&&b.traverseVisible(function(j){j.isLight&&j.layers.test(F.layers)&&(R.pushLight(j),j.castShadow&&R.pushShadow(j))}),R.setupLights(),Y!==null&&Y.updateLights(R.state.lightsArray),vt=this.localClippingEnabled,at=ke.init(this.clippingPlanes,vt),at===!0&&ke.setGlobalState(this.clippingPlanes,F),Y!==null&&Ge.render(R.state.shadowsArray,ee,F);const Z=new Set;return b.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const Te=j.material;if(Te)if(Array.isArray(Te))for(let xe=0;xe<Te.length;xe++){const be=Te[xe];M(be,ee,F,j),Z.add(be)}else M(Te,ee,F,j),Z.add(Te)}),R=E.pop(),Y!==null&&Y.renderEnd(),Z},this.compileAsync=function(b,F,ee=null){const Z=this.compile(b,F,ee);return new Promise(j=>{function Te(){if(Z.forEach(function(xe){const Ne=W.get(xe).currentProgram;(Ne===void 0||Ne.isReady())&&Z.delete(xe)}),Z.size===0){j(b);return}setTimeout(Te,10)}pt.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let di=null;function dt(b){di&&di(b)}function yr(){fn.stop()}function br(){fn.start()}const fn=new Dc;fn.setAnimationLoop(dt),typeof self<"u"&&fn.setContext(self),this.setAnimationLoop=function(b){di=b,Fe.setAnimationLoop(b),b===null?fn.stop():fn.start()},Fe.addEventListener("sessionstart",yr),Fe.addEventListener("sessionend",br),this.render=function(b,F){if(F!==void 0&&F.isCamera!==!0){gt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;Y!==null&&Y.renderStart(b,F);const ee=Fe.enabled===!0&&Fe.isPresenting===!0,Z=L!==null&&(re===null||ee)&&L.begin(k,re);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Fe.enabled===!0&&Fe.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(Fe.cameraAutoUpdate===!0&&Fe.updateCamera(F),F=Fe.getCamera()),b.isScene===!0&&b.onBeforeRender(k,b,F,re),R=_e.get(b,E.length),R.init(F),R.state.textureUnits=te.getTextureUnits(),E.push(R),Je.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Qe.setFromProjectionMatrix(Je,On,F.reversedDepth),vt=this.localClippingEnabled,at=ke.init(this.clippingPlanes,vt),P=Ee.get(b,N.length),P.init(),N.push(P),Fe.enabled===!0&&Fe.isPresenting===!0){const xe=k.xr.getDepthSensingMesh();xe!==null&&Cn(xe,F,-1/0,k.sortObjects)}Cn(b,F,0,k.sortObjects),P.finish(),Y!==null&&Y.updateLights(R.state.lightsArray),k.sortObjects===!0&&P.sort(ye,He),At=Fe.enabled===!1||Fe.isPresenting===!1||Fe.hasDepthSensing()===!1,At&&qe.addToRenderList(P,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),at===!0&&ke.beginShadows();const j=R.state.shadowsArray;if(Ge.render(j,b,F),at===!0&&ke.endShadows(),(Z&&L.hasRenderPass())===!1){const xe=P.opaque,be=P.transmissive;if(R.setupLights(),F.isArrayCamera){const Ne=F.cameras;if(be.length>0)for(let ze=0,je=Ne.length;ze<je;ze++){const Ye=Ne[ze];wr(xe,be,b,Ye)}At&&qe.render(b);for(let ze=0,je=Ne.length;ze<je;ze++){const Ye=Ne[ze];Tr(P,b,Ye,Ye.viewport)}}else be.length>0&&wr(xe,be,b,F),At&&qe.render(b),Tr(P,b,F)}re!==null&&X===0&&(te.updateMultisampleRenderTarget(re),te.updateRenderTargetMipmap(re)),Z&&L.end(k),b.isScene===!0&&b.onAfterRender(k,b,F),Re.resetDefaultState(),se=-1,ce=null,E.pop(),E.length>0?(R=E[E.length-1],te.setTextureUnits(R.state.textureUnits),at===!0&&ke.setGlobalState(k.clippingPlanes,R.state.camera)):R=null,N.pop(),N.length>0?P=N[N.length-1]:P=null,Y!==null&&Y.renderEnd()};function Cn(b,F,ee,Z){if(b.visible===!1)return;if(b.layers.test(F.layers)){if(b.isGroup)ee=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(F);else if(b.isLightProbeGrid)R.pushLightProbeGrid(b);else if(b.isLight)R.pushLight(b),b.castShadow&&R.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||b.intersectsFrustum(Qe)){Z&&It.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Je);const xe=le.update(b),be=b.material;be.visible&&P.push(b,xe,be,ee,It.z,null,F)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||b.intersectsFrustum(Qe))){const xe=le.update(b),be=b.material;if(Z&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),It.copy(b.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),It.copy(xe.boundingSphere.center)),It.applyMatrix4(b.matrixWorld).applyMatrix4(Je)),Array.isArray(be)){const Ne=xe.groups;for(let ze=0,je=Ne.length;ze<je;ze++){const Ye=Ne[ze],Pe=be[Ye.materialIndex];Pe&&Pe.visible&&P.push(b,xe,Pe,ee,It.z,Ye,F)}}else be.visible&&P.push(b,xe,be,ee,It.z,null,F)}}const Te=b.children;for(let xe=0,be=Te.length;xe<be;xe++)Cn(Te[xe],F,ee,Z)}function Tr(b,F,ee,Z){const{opaque:j,transmissive:Te,transparent:xe}=b;R.setupLightsView(ee),at===!0&&ke.setGlobalState(k.clippingPlanes,ee),Z&&x.viewport(he.copy(Z)),j.length>0&&yi(j,F,ee),Te.length>0&&yi(Te,F,ee),xe.length>0&&yi(xe,F,ee),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function wr(b,F,ee,Z){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;if(R.state.transmissionRenderTarget[Z.id]===void 0){const Pe=pt.has("EXT_color_buffer_half_float")||pt.has("EXT_color_buffer_float");R.state.transmissionRenderTarget[Z.id]=new An(1,1,{generateMipmaps:!0,type:Pe?zn:hn,minFilter:vi,samples:Math.max(4,D.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:lt.workingColorSpace})}const Te=R.state.transmissionRenderTarget[Z.id],xe=Z.viewport||he;Te.setSize(xe.z*k.transmissionResolutionScale,xe.w*k.transmissionResolutionScale);const be=k.getRenderTarget(),Ne=k.getActiveCubeFace(),ze=k.getActiveMipmapLevel();k.setRenderTarget(Te),k.getClearColor(ht),nt=k.getClearAlpha(),nt<1&&k.setClearColor(16777215,.5),k.clear(),At&&qe.render(ee);const je=k.toneMapping;k.toneMapping=Bn;const Ye=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),R.setupLightsView(Z),at===!0&&ke.setGlobalState(k.clippingPlanes,Z),yi(b,ee,Z),te.updateMultisampleRenderTarget(Te),te.updateRenderTargetMipmap(Te),pt.has("WEBGL_multisampled_render_to_texture")===!1){let Pe=!1;for(let _t=0,Ct=F.length;_t<Ct;_t++){const ot=F[_t],{object:xt,geometry:Ht,material:De,group:ct}=ot;if(De.side===bn&&xt.layers.test(Z.layers)){const st=De.side;De.side=rn,De.needsUpdate=!0,Ar(xt,ee,Z,Ht,De,ct),De.side=st,De.needsUpdate=!0,Pe=!0}}Pe===!0&&(te.updateMultisampleRenderTarget(Te),te.updateRenderTargetMipmap(Te))}k.setRenderTarget(be,Ne,ze),k.setClearColor(ht,nt),Ye!==void 0&&(Z.viewport=Ye),k.toneMapping=je}function yi(b,F,ee){const Z=F.isScene===!0?F.overrideMaterial:null;for(let j=0,Te=b.length;j<Te;j++){const xe=b[j],{object:be,geometry:Ne,group:ze}=xe;let je=xe.material;je.allowOverride===!0&&Z!==null&&(je=Z),be.layers.test(ee.layers)&&Ar(be,F,ee,Ne,je,ze)}}function Ar(b,F,ee,Z,j,Te){Y!==null&&j.isNodeMaterial&&Y.setObject(b,j),b.onBeforeRender(k,F,ee,Z,j,Te),b.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),j.onBeforeRender(k,F,ee,Z,b,Te),j.transparent===!0&&j.side===bn&&j.forceSinglePass===!1?(j.side=rn,j.needsUpdate=!0,k.renderBufferDirect(ee,F,Z,j,b,Te),j.side=Si,j.needsUpdate=!0,k.renderBufferDirect(ee,F,Z,j,b,Te),j.side=bn):k.renderBufferDirect(ee,F,Z,j,b,Te),b.onAfterRender(k,F,ee,Z,j,Te)}function bi(b,F,ee){F.isScene!==!0&&(F=Ft);const Z=W.get(b),j=R.state.lights,Te=R.state.shadowsArray,xe=j.state.version,be=ve.getParameters(b,j.state,Te,F,ee,R.state.lightProbeGridArray),Ne=ve.getProgramCacheKey(be);let ze=Z.programs;Z.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?F.environment:null,Z.fog=F.fog;const je=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;Z.envMap=me.get(b.envMap||Z.environment,je),Z.envMapRotation=Z.environment!==null&&b.envMap===null?F.environmentRotation:b.envMapRotation,ze===void 0&&(b.addEventListener("dispose",dn),ze=new Map,Z.programs=ze);let Ye=ze.get(Ne);if(Ye!==void 0){if(Z.currentProgram===Ye&&Z.lightsStateVersion===xe)return Cr(b,be),Ye}else be.uniforms=ve.getUniforms(b),Y!==null&&b.isNodeMaterial&&Y.build(b,ee,be),b.onBeforeCompile(be,k),Ye=ve.acquireProgram(be,Ne),ze.set(Ne,Ye),Z.uniforms=be.uniforms;const Pe=Z.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Pe.clippingPlanes=ke.uniform),Cr(b,be),Z.needsLights=Cs(b),Z.lightsStateVersion=xe,Z.needsLights&&(Pe.ambientLightColor.value=j.state.ambient,Pe.lightProbe.value=j.state.probe,Pe.sunLights.value=j.state.sun,Pe.sunLightShadows.value=j.state.sunShadow,Pe.directionalLights.value=j.state.directional,Pe.directionalLightShadows.value=j.state.directionalShadow,Pe.spotLights.value=j.state.spot,Pe.spotLightShadows.value=j.state.spotShadow,Pe.rectAreaLights.value=j.state.rectArea,Pe.ltc_1.value=j.state.rectAreaLTC1,Pe.ltc_2.value=j.state.rectAreaLTC2,Pe.pointLights.value=j.state.point,Pe.pointLightShadows.value=j.state.pointShadow,Pe.hemisphereLights.value=j.state.hemi,Pe.sunShadowMatrix.value=j.state.sunShadowMatrix,Pe.sunShadowCascade.value=j.state.sunShadowCascade,Pe.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Pe.spotLightMatrix.value=j.state.spotLightMatrix,Pe.spotLightMap.value=j.state.spotLightMap,Pe.pointShadowMatrix.value=j.state.pointShadowMatrix),Z.lightProbeGrid=R.state.lightProbeGridArray.length>0,Z.currentProgram=Ye,Z.uniformsList=null,Ye}function Rr(b){if(b.uniformsList===null){const F=b.currentProgram.getUniforms();b.uniformsList=hs.seqWithValue(F.seq,b.uniforms)}return b.uniformsList}function Cr(b,F){const ee=W.get(b);ee.outputColorSpace=F.outputColorSpace,ee.batching=F.batching,ee.batchingColor=F.batchingColor,ee.instancing=F.instancing,ee.instancingColor=F.instancingColor,ee.instancingMorph=F.instancingMorph,ee.skinning=F.skinning,ee.morphTargets=F.morphTargets,ee.morphNormals=F.morphNormals,ee.morphColors=F.morphColors,ee.morphTargetsCount=F.morphTargetsCount,ee.numClippingPlanes=F.numClippingPlanes,ee.numIntersection=F.numClipIntersection,ee.vertexAlphas=F.vertexAlphas,ee.vertexTangents=F.vertexTangents,ee.toneMapping=F.toneMapping}function ws(b,F){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;w.setFromMatrixPosition(F.matrixWorld);for(let ee=0,Z=b.length;ee<Z;ee++){const j=b[ee];if(j.texture!==null&&j.boundingBox.containsPoint(w))return j}return null}function As(b,F,ee,Z,j){F.isScene!==!0&&(F=Ft),te.resetTextureUnits();const Te=F.fog,xe=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial?F.environment:null,be=re===null?k.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:lt.workingColorSpace,Ne=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial&&!Z.envMap||Z.isMeshPhongMaterial&&!Z.envMap,ze=me.get(Z.envMap||xe,Ne),je=Z.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,Ye=!!ee.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Pe=!!ee.morphAttributes.position,_t=!!ee.morphAttributes.normal,Ct=!!ee.morphAttributes.color;let ot=Bn;Z.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(ot=k.toneMapping);const xt=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,Ht=xt!==void 0?xt.length:0,De=W.get(Z),ct=R.state.lights;if(at===!0&&(vt===!0||b!==ce)){const St=b===ce&&Z.id===se;ke.setState(Z,b,St)}let st=!1;Z.version===De.__version?(De.needsLights&&De.lightsStateVersion!==ct.state.version||De.outputColorSpace!==be||j.isBatchedMesh&&De.batching===!1||!j.isBatchedMesh&&De.batching===!0||j.isBatchedMesh&&De.batchingColor===!0&&j._colorsTexture===null||j.isBatchedMesh&&De.batchingColor===!1&&j._colorsTexture!==null||j.isInstancedMesh&&De.instancing===!1||!j.isInstancedMesh&&De.instancing===!0||j.isSkinnedMesh&&De.skinning===!1||!j.isSkinnedMesh&&De.skinning===!0||j.isInstancedMesh&&De.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&De.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&De.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&De.instancingMorph===!1&&j.morphTexture!==null||De.envMap!==ze||Z.fog===!0&&De.fog!==Te||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==ke.numPlanes||De.numIntersection!==ke.numIntersection)||De.vertexAlphas!==je||De.vertexTangents!==Ye||De.morphTargets!==Pe||De.morphNormals!==_t||De.morphColors!==Ct||De.toneMapping!==ot||De.morphTargetsCount!==Ht||!!De.lightProbeGrid!=R.state.lightProbeGridArray.length>0)&&(st=!0):(st=!0,De.__version=Z.version);let tn=De.currentProgram;st===!0&&(tn=bi(Z,F,j),Y&&Z.isNodeMaterial&&Y.onUpdateProgram(Z,tn,De));let pn=!1,Pn=!1,ei=!1;const ft=tn.getUniforms(),Pt=De.uniforms;if(x.useProgram(tn.program)&&(pn=!0,Pn=!0,ei=!0),Z.id!==se&&(se=Z.id,Pn=!0),De.needsLights){const St=ws(R.state.lightProbeGridArray,j);De.lightProbeGrid!==St&&(De.lightProbeGrid=St,Pn=!0)}if(pn||ce!==b){x.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),ft.setValue(V,"projectionMatrix",b.projectionMatrix),ft.setValue(V,"viewMatrix",b.matrixWorldInverse);const Dn=ft.map.cameraPosition;Dn!==void 0&&Dn.setValue(V,wt.setFromMatrixPosition(b.matrixWorld)),D.logarithmicDepthBuffer&&ft.setValue(V,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&ft.setValue(V,"isOrthographic",b.isOrthographicCamera===!0),ce!==b&&(ce=b,Pn=!0,ei=!0)}if(De.needsLights&&(ct.state.sunShadowMap.length>0&&ft.setValue(V,"sunShadowMap",ct.state.sunShadowMap,te),ct.state.directionalShadowMap.length>0&&ft.setValue(V,"directionalShadowMap",ct.state.directionalShadowMap,te),ct.state.spotShadowMap.length>0&&ft.setValue(V,"spotShadowMap",ct.state.spotShadowMap,te),ct.state.pointShadowMap.length>0&&ft.setValue(V,"pointShadowMap",ct.state.pointShadowMap,te)),j.isSkinnedMesh){ft.setOptional(V,j,"bindMatrix"),ft.setOptional(V,j,"bindMatrixInverse");const St=j.skeleton;St&&(St.boneTexture===null&&St.computeBoneTexture(),ft.setValue(V,"boneTexture",St.boneTexture,te))}j.isBatchedMesh&&(ft.setOptional(V,j,"batchingTexture"),ft.setValue(V,"batchingTexture",j._matricesTexture,te),ft.setOptional(V,j,"batchingIdTexture"),ft.setValue(V,"batchingIdTexture",j._indirectTexture,te),ft.setOptional(V,j,"batchingColorTexture"),j._colorsTexture!==null&&ft.setValue(V,"batchingColorTexture",j._colorsTexture,te));const vn=ee.morphAttributes;if((vn.position!==void 0||vn.normal!==void 0||vn.color!==void 0)&&G.update(j,ee,tn),(Pn||De.receiveShadow!==j.receiveShadow)&&(De.receiveShadow=j.receiveShadow,ft.setValue(V,"receiveShadow",j.receiveShadow)),(Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial)&&Z.envMap===null&&F.environment!==null&&(Pt.envMapIntensity.value=F.environmentIntensity),Pt.dfgLUT!==void 0&&(Pt.dfgLUT.value=e0()),Pn){if(ft.setValue(V,"toneMappingExposure",k.toneMappingExposure),De.needsLights&&Rs(Pt,ei),Te&&Z.fog===!0&&Ue.refreshFogUniforms(Pt,Te),Ue.refreshMaterialUniforms(Pt,Z,ue,ae,R.state.transmissionRenderTarget[b.id]),De.needsLights&&De.lightProbeGrid){const St=De.lightProbeGrid;Pt.probesSH.value=St.texture,Pt.probesMin.value.copy(St.boundingBox.min),Pt.probesMax.value.copy(St.boundingBox.max),Pt.probesResolution.value.copy(St.resolution)}hs.upload(V,Rr(De),Pt,te)}if(Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(hs.upload(V,Rr(De),Pt,te),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&ft.setValue(V,"center",j.center),ft.setValue(V,"modelViewMatrix",j.modelViewMatrix),ft.setValue(V,"normalMatrix",j.normalMatrix),ft.setValue(V,"modelMatrix",j.matrixWorld),Z.uniformsGroups!==void 0){const St=Z.uniformsGroups;for(let Dn=0,ti=St.length;Dn<ti;Dn++){const Dr=St[Dn];de.update(Dr,tn),de.bind(Dr,tn)}}return tn}function Rs(b,F){b.ambientLightColor.needsUpdate=F,b.lightProbe.needsUpdate=F,b.sunLights.needsUpdate=F,b.sunLightShadows.needsUpdate=F,b.directionalLights.needsUpdate=F,b.directionalLightShadows.needsUpdate=F,b.pointLights.needsUpdate=F,b.pointLightShadows.needsUpdate=F,b.spotLights.needsUpdate=F,b.spotLightShadows.needsUpdate=F,b.rectAreaLights.needsUpdate=F,b.hemisphereLights.needsUpdate=F}function Cs(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return ne},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return re},this.setRenderTargetTextures=function(b,F,ee){const Z=W.get(b);Z.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,Z.__autoAllocateDepthBuffer===!1&&(Z.__useRenderToTexture=!1),W.get(b.texture).__webglTexture=F,W.get(b.depthTexture).__webglTexture=Z.__autoAllocateDepthBuffer?void 0:ee,Z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,F){const ee=W.get(b);ee.__webglFramebuffer=F,ee.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(b,F=0,ee=0){re=b,ne=F,X=ee;let Z=null,j=!1,Te=!1;if(b){const be=W.get(b);if(be.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(V.FRAMEBUFFER,be.__webglFramebuffer),he.copy(b.viewport),Oe.copy(b.scissor),Be=b.scissorTest,x.viewport(he),x.scissor(Oe),x.setScissorTest(Be),se=-1;return}else if(be.__webglFramebuffer===void 0)te.setupRenderTarget(b);else if(be.__hasExternalTextures)te.rebindTextures(b,W.get(b.texture).__webglTexture,W.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const je=b.depthTexture;if(be.__boundDepthTexture!==je){if(je!==null&&W.has(je)&&(b.width!==je.image.width||b.height!==je.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");te.setupDepthRenderbuffer(b)}}const Ne=b.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(Te=!0);const ze=W.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(ze[F])?Z=ze[F][ee]:Z=ze[F],j=!0):b.samples>0&&te.useMultisampledRTT(b)===!1?Z=W.get(b).__webglMultisampledFramebuffer:Array.isArray(ze)?Z=ze[ee]:Z=ze,he.copy(b.viewport),Oe.copy(b.scissor),Be=b.scissorTest}else he.copy(Ae).multiplyScalar(ue).floor(),Oe.copy(Ve).multiplyScalar(ue).floor(),Be=Tt;if(ee!==0&&(Z=$),x.bindFramebuffer(V.FRAMEBUFFER,Z)&&x.drawBuffers(b,Z),x.viewport(he),x.scissor(Oe),x.setScissorTest(Be),j){const be=W.get(b.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+F,be.__webglTexture,ee)}else if(Te){const be=F;for(let Ne=0;Ne<b.textures.length;Ne++){const ze=W.get(b.textures[Ne]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+Ne,ze.__webglTexture,ee,be)}}else if(b!==null&&ee!==0){const be=W.get(b.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,be.__webglTexture,ee)}se=-1};function Pr(b){const F=W.get(b);return(F.__readFormat!==b.format||F.__readType!==b.type)&&(F.__readFormat=b.format,F.__readType=b.type,F.__formatReadable=D.textureFormatReadable(b.format),F.__typeReadable=D.textureTypeReadable(b.type)),F}this.readRenderTargetPixels=function(b,F,ee,Z,j,Te,xe,be=0){if(!(b&&b.isWebGLRenderTarget)){gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=W.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&xe!==void 0&&(Ne=Ne[xe]),Ne){x.bindFramebuffer(V.FRAMEBUFFER,Ne);try{const ze=b.textures[be],je=ze.format,Ye=ze.type;b.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+be);const Pe=Pr(ze);if(Pe.__formatReadable===!1){gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Pe.__typeReadable===!1){gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=b.width-Z&&ee>=0&&ee<=b.height-j&&V.readPixels(F,ee,Z,j,Me.convert(je),Me.convert(Ye),Te)}finally{const ze=re!==null?W.get(re).__webglFramebuffer:null;x.bindFramebuffer(V.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(b,F,ee,Z,j,Te,xe,be=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=W.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&xe!==void 0&&(Ne=Ne[xe]),Ne)if(F>=0&&F<=b.width-Z&&ee>=0&&ee<=b.height-j){x.bindFramebuffer(V.FRAMEBUFFER,Ne);const ze=b.textures[be],je=ze.format,Ye=ze.type;b.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+be);const Pe=Pr(ze);if(Pe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Pe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const _t=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,_t),V.bufferData(V.PIXEL_PACK_BUFFER,Te.byteLength,V.STREAM_READ),V.readPixels(F,ee,Z,j,Me.convert(je),Me.convert(Ye),0),V.bindBuffer(V.PIXEL_PACK_BUFFER,null);const Ct=re!==null?W.get(re).__webglFramebuffer:null;x.bindFramebuffer(V.FRAMEBUFFER,Ct);const ot=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await Kh(V,ot,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,_t),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Te),V.bindBuffer(V.PIXEL_PACK_BUFFER,null),V.deleteBuffer(_t),V.deleteSync(ot),Te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,F=null,ee=0){const Z=Math.pow(2,-ee),j=Math.floor(b.image.width*Z),Te=Math.floor(b.image.height*Z),xe=F!==null?F.x:0,be=F!==null?F.y:0;te.setTexture2D(b,0),V.copyTexSubImage2D(V.TEXTURE_2D,ee,0,0,xe,be,j,Te),x.unbindTexture()},this.copyTextureToTexture=function(b,F,ee=null,Z=null,j=0,Te=0){let xe,be,Ne,ze,je,Ye,Pe,_t,Ct;const ot=b.isCompressedTexture?b.mipmaps[Te]:b.image;if(ee!==null)xe=ee.max.x-ee.min.x,be=ee.max.y-ee.min.y,Ne=ee.isBox3?ee.max.z-ee.min.z:1,ze=ee.min.x,je=ee.min.y,Ye=ee.isBox3?ee.min.z:0;else{const Pt=Math.pow(2,-j);xe=Math.floor(ot.width*Pt),be=Math.floor(ot.height*Pt),b.isDataArrayTexture?Ne=ot.depth:b.isData3DTexture?Ne=Math.floor(ot.depth*Pt):Ne=1,ze=0,je=0,Ye=0}Z!==null?(Pe=Z.x,_t=Z.y,Ct=Z.z):(Pe=0,_t=0,Ct=0);const xt=Me.convert(F.format),Ht=Me.convert(F.type);let De;F.isData3DTexture?(te.setTexture3D(F,0),De=V.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(te.setTexture2DArray(F,0),De=V.TEXTURE_2D_ARRAY):(te.setTexture2D(F,0),De=V.TEXTURE_2D),x.activeTexture(V.TEXTURE0),x.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,F.flipY),x.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),x.pixelStorei(V.UNPACK_ALIGNMENT,F.unpackAlignment);const ct=x.getParameter(V.UNPACK_ROW_LENGTH),st=x.getParameter(V.UNPACK_IMAGE_HEIGHT),tn=x.getParameter(V.UNPACK_SKIP_PIXELS),pn=x.getParameter(V.UNPACK_SKIP_ROWS),Pn=x.getParameter(V.UNPACK_SKIP_IMAGES);x.pixelStorei(V.UNPACK_ROW_LENGTH,ot.width),x.pixelStorei(V.UNPACK_IMAGE_HEIGHT,ot.height),x.pixelStorei(V.UNPACK_SKIP_PIXELS,ze),x.pixelStorei(V.UNPACK_SKIP_ROWS,je),x.pixelStorei(V.UNPACK_SKIP_IMAGES,Ye);const ei=b.isDataArrayTexture||b.isData3DTexture,ft=F.isDataArrayTexture||F.isData3DTexture;if(b.isDepthTexture){const Pt=W.get(b),vn=W.get(F),St=W.get(Pt.__renderTarget),Dn=W.get(vn.__renderTarget);x.bindFramebuffer(V.READ_FRAMEBUFFER,St.__webglFramebuffer),x.bindFramebuffer(V.DRAW_FRAMEBUFFER,Dn.__webglFramebuffer);for(let ti=0;ti<Ne;ti++)ei&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,W.get(b).__webglTexture,j,Ye+ti),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,W.get(F).__webglTexture,Te,Ct+ti)),V.blitFramebuffer(ze,je,xe,be,Pe,_t,xe,be,V.DEPTH_BUFFER_BIT,V.NEAREST);x.bindFramebuffer(V.READ_FRAMEBUFFER,null),x.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(j!==0||b.isRenderTargetTexture||W.has(b)){const Pt=W.get(b),vn=W.get(F);x.bindFramebuffer(V.READ_FRAMEBUFFER,O),x.bindFramebuffer(V.DRAW_FRAMEBUFFER,K);for(let St=0;St<Ne;St++)ei?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Pt.__webglTexture,j,Ye+St):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Pt.__webglTexture,j),ft?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,vn.__webglTexture,Te,Ct+St):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,vn.__webglTexture,Te),j!==0?V.blitFramebuffer(ze,je,xe,be,Pe,_t,xe,be,V.COLOR_BUFFER_BIT,V.NEAREST):ft?V.copyTexSubImage3D(De,Te,Pe,_t,Ct+St,ze,je,xe,be):V.copyTexSubImage2D(De,Te,Pe,_t,ze,je,xe,be);x.bindFramebuffer(V.READ_FRAMEBUFFER,null),x.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else ft?b.isDataTexture||b.isData3DTexture?V.texSubImage3D(De,Te,Pe,_t,Ct,xe,be,Ne,xt,Ht,ot.data):F.isCompressedArrayTexture?V.compressedTexSubImage3D(De,Te,Pe,_t,Ct,xe,be,Ne,xt,ot.data):V.texSubImage3D(De,Te,Pe,_t,Ct,xe,be,Ne,xt,Ht,ot):b.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Te,Pe,_t,xe,be,xt,Ht,ot.data):b.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Te,Pe,_t,ot.width,ot.height,xt,ot.data):V.texSubImage2D(V.TEXTURE_2D,Te,Pe,_t,xe,be,xt,Ht,ot);x.pixelStorei(V.UNPACK_ROW_LENGTH,ct),x.pixelStorei(V.UNPACK_IMAGE_HEIGHT,st),x.pixelStorei(V.UNPACK_SKIP_PIXELS,tn),x.pixelStorei(V.UNPACK_SKIP_ROWS,pn),x.pixelStorei(V.UNPACK_SKIP_IMAGES,Pn),Te===0&&F.generateMipmaps&&V.generateMipmap(De),x.unbindTexture()},this.initRenderTarget=function(b){W.get(b).__webglFramebuffer===void 0&&te.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?te.setTextureCube(b,0):b.isData3DTexture?te.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?te.setTexture2DArray(b,0):te.setTexture2D(b,0),x.unbindTexture()},this.resetState=function(){ne=0,X=0,re=null,x.reset(),Re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return On}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=lt._getDrawingBufferColorSpace(e),t.unpackColorSpace=lt._getUnpackColorSpace()}}const Kl={type:"change"},Eo={type:"start"},kc={type:"end"},ss=new vo,Zl=new Kn,n0=Math.cos(70*vc.DEG2RAD),Ot=new J,nn=2*Math.PI,Et={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},pa=1e-6;class i0 extends nf{constructor(e,t=null){super(e,t),this.state=Et.NONE,this.target=new J,this.cursor=new J,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Xi.ROTATE,MIDDLE:Xi.DOLLY,RIGHT:Xi.PAN},this.touches={ONE:Vi.ROTATE,TWO:Vi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new J,this._lastQuaternion=new ci,this._lastTargetPosition=new J,this._quat=new ci().setFromUnitVectors(e.up,new J(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new bl,this._sphericalDelta=new bl,this._scale=1,this._panOffset=new J,this._rotateStart=new Ke,this._rotateEnd=new Ke,this._rotateDelta=new Ke,this._panStart=new Ke,this._panEnd=new Ke,this._panDelta=new Ke,this._dollyStart=new Ke,this._dollyEnd=new Ke,this._dollyDelta=new Ke,this._dollyDirection=new J,this._mouse=new Ke,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=s0.bind(this),this._onPointerDown=r0.bind(this),this._onPointerUp=a0.bind(this),this._onContextMenu=f0.bind(this),this._onMouseWheel=c0.bind(this),this._onKeyDown=u0.bind(this),this._onTouchStart=h0.bind(this),this._onTouchMove=d0.bind(this),this._onMouseDown=o0.bind(this),this._onMouseMove=l0.bind(this),this._interceptControlDown=p0.bind(this),this._interceptControlUp=m0.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=Et.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();const e=this.domElement.getRootNode();e.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),e.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Kl),this.update(),this.state=Et.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const t=this.object.position;Ot.copy(t).sub(this.target),Ot.applyQuaternion(this._quat),this._spherical.setFromVector3(Ot),this.autoRotate&&this.state===Et.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=nn:n>Math.PI&&(n-=nn),r<-Math.PI?r+=nn:r>Math.PI&&(r-=nn),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let a=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const l=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),a=l!=this._spherical.radius}if(Ot.setFromSpherical(this._spherical),Ot.applyQuaternion(this._quatInverse),t.copy(this.target).add(Ot),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let l=null;if(this.object.isPerspectiveCamera){const c=Ot.length();l=this._clampDistance(c*this._scale);const d=c-l;this.object.position.addScaledVector(this._dollyDirection,d),this.object.updateMatrixWorld(),a=!!d}else if(this.object.isOrthographicCamera){const c=new J(this._mouse.x,this._mouse.y,0);c.unproject(this.object);const d=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),a=d!==this.object.zoom;const h=new J(this._mouse.x,this._mouse.y,0);h.unproject(this.object),this.object.position.sub(h).add(c),this.object.updateMatrixWorld(),l=Ot.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;l!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(l).add(this.object.position):(ss.origin.copy(this.object.position),ss.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ss.direction))<n0?this.object.lookAt(this.target):(Zl.setFromNormalAndCoplanarPoint(this.object.up,this.target),ss.intersectPlane(Zl,this.target))))}else if(this.object.isOrthographicCamera){const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),l!==this.object.zoom&&(this.object.updateProjectionMatrix(),a=!0)}return this._scale=1,this._performCursorZoom=!1,a||this._lastPosition.distanceToSquared(this.object.position)>pa||8*(1-this._lastQuaternion.dot(this.object.quaternion))>pa||this._lastTargetPosition.distanceToSquared(this.target)>pa?(this.dispatchEvent(Kl),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?nn/60*this.autoRotateSpeed*e:nn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Ot.setFromMatrixColumn(t,0),Ot.multiplyScalar(-e),this._panOffset.add(Ot)}_panUp(e,t){this.screenSpacePanning===!0?Ot.setFromMatrixColumn(t,1):(Ot.setFromMatrixColumn(t,0),Ot.crossVectors(this.object.up,Ot)),Ot.multiplyScalar(e),this._panOffset.add(Ot)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Ot.copy(r).sub(this.target);let a=Ot.length();a*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*a/n.clientHeight,this.object.matrix),this._panUp(2*t*a/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),r=e-n.left,a=t-n.top,l=n.width,c=n.height;this._mouse.x=r/l*2-1,this._mouse.y=-(a/c)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(nn*this._rotateDelta.x/t.clientHeight),this._rotateUp(nn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(nn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-nn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(nn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-nn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(n,r)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,a=Math.sqrt(n*n+r*r);this._dollyStart.set(0,a)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),r=.5*(e.pageX+n.x),a=.5*(e.pageY+n.y);this._rotateEnd.set(r,a)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(nn*this._rotateDelta.x/t.clientHeight),this._rotateUp(nn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,a=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,a),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const l=(e.pageX+t.x)*.5,c=(e.pageY+t.y)*.5;this._updateZoomParameters(l,c)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Ke,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function r0(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function s0(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function a0(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(kc),this.state=Et.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function o0(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Xi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Et.DOLLY;break;case Xi.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Et.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Et.ROTATE}break;case Xi.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Et.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Et.PAN}break;default:this.state=Et.NONE}this.state!==Et.NONE&&this.dispatchEvent(Eo)}function l0(i){switch(this.state){case Et.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Et.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Et.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function c0(i){this.enabled===!1||this.enableZoom===!1||this.state!==Et.NONE||(i.preventDefault(),this.dispatchEvent(Eo),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(kc))}function u0(i){this.enabled!==!1&&this._handleKeyDown(i)}function h0(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Vi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Et.TOUCH_ROTATE;break;case Vi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Et.TOUCH_PAN;break;default:this.state=Et.NONE}break;case 2:switch(this.touches.TWO){case Vi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Et.TOUCH_DOLLY_PAN;break;case Vi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Et.TOUCH_DOLLY_ROTATE;break;default:this.state=Et.NONE}break;default:this.state=Et.NONE}this.state!==Et.NONE&&this.dispatchEvent(Eo)}function d0(i){switch(this._trackPointer(i),this.state){case Et.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Et.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Et.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Et.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Et.NONE}}function f0(i){this.enabled!==!1&&i.preventDefault()}function p0(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function m0(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class _0 extends So{constructor(e){super(e)}load(e,t,n,r){const a=this,l=new Kd(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{t(a.parse(c))}catch(d){r?r(d):console.error(d),a.manager.itemError(e)}},n,r)}parse(e){function t(h){const m=new DataView(h),g=32/8*3+32/8*3*3+16/8,f=m.getUint32(80,!0);if(80+32/8+f*g===m.byteLength)return!0;const T=[115,111,108,105,100];for(let A=0;A<5;A++)if(n(T,m,A))return!1;return!0}function n(h,m,g){for(let f=0,v=h.length;f<v;f++)if(h[f]!==m.getUint8(g+f))return!1;return!0}function r(h){const m=new DataView(h),g=m.getUint32(80,!0);let f,v,T,A=!1,S,_,I,H,w;for(let z=0;z<70;z++)m.getUint32(z,!1)==1129270351&&m.getUint8(z+4)==82&&m.getUint8(z+5)==61&&(A=!0,S=new Float32Array(g*3*3),_=m.getUint8(z+6)/255,I=m.getUint8(z+7)/255,H=m.getUint8(z+8)/255,w=m.getUint8(z+9)/255);const P=84,R=50,N=new sn,E=new Float32Array(g*3*3),L=new Float32Array(g*3*3),k=new tt;for(let z=0;z<g;z++){const Y=P+z*R,$=m.getFloat32(Y,!0),O=m.getFloat32(Y+4,!0),K=m.getFloat32(Y+8,!0);if(A){const ne=m.getUint16(Y+48,!0);(ne&32768)===0?(f=(ne&31)/31,v=(ne>>5&31)/31,T=(ne>>10&31)/31):(f=_,v=I,T=H)}for(let ne=1;ne<=3;ne++){const X=Y+ne*12,re=z*3*3+(ne-1)*3;E[re]=m.getFloat32(X,!0),E[re+1]=m.getFloat32(X+4,!0),E[re+2]=m.getFloat32(X+8,!0),L[re]=$,L[re+1]=O,L[re+2]=K,A&&(k.setRGB(f,v,T,un),S[re]=k.r,S[re+1]=k.g,S[re+2]=k.b)}}return N.setAttribute("position",new gn(E,3)),N.setAttribute("normal",new gn(L,3)),A&&(N.setAttribute("color",new gn(S,3)),N.hasColors=!0,N.alpha=w),N}function a(h){const m=new sn,g=/solid([\s\S]*?)endsolid/g,f=/facet([\s\S]*?)endfacet/g,v=/solid\s(.+)/;let T=0;const A=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,S=new RegExp("vertex"+A+A+A,"g"),_=new RegExp("normal"+A+A+A,"g"),I=[],H=[],w=[],P=new J;let R,N=0,E=0,L=0;for(;(R=g.exec(h))!==null;){E=L;const k=R[0],z=(R=v.exec(k))!==null?R[1]:"";for(w.push(z);(R=f.exec(k))!==null;){let O=0,K=0;const ne=R[0];for(;(R=_.exec(ne))!==null;)P.x=parseFloat(R[1]),P.y=parseFloat(R[2]),P.z=parseFloat(R[3]),K++;for(;(R=S.exec(ne))!==null;)I.push(parseFloat(R[1]),parseFloat(R[2]),parseFloat(R[3])),H.push(P.x,P.y,P.z),O++,L++;K!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+T),O!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+T),T++}const Y=E,$=L-E;m.userData.groupNames=w,m.addGroup(Y,$,N),N++}return m.setAttribute("position",new $t(I,3)),m.setAttribute("normal",new $t(H,3)),m}function l(h){return typeof h!="string"?new TextDecoder().decode(h):h}function c(h){if(typeof h=="string"){const m=new Uint8Array(h.length);for(let g=0;g<h.length;g++)m[g]=h.charCodeAt(g)&255;return m.buffer||m}else return h}const d=c(e);return t(d)?r(d):a(l(e))}}var ma={exports:{}};const g0={},v0=Object.freeze(Object.defineProperty({__proto__:null,default:g0},Symbol.toStringTag,{value:"Module"})),_a=ih(v0);var Jl;function x0(){return Jl||(Jl=1,(function(i,e){var t=(()=>{var r;var n=typeof document<"u"?(r=document.currentScript)==null?void 0:r.src:void 0;return typeof __filename<"u"&&(n=n||__filename),(function(a={}){var l,c=a,d,h,m=new Promise((s,o)=>{d=s,h=o}),g=typeof window=="object",f=typeof importScripts=="function",v=typeof process=="object"&&typeof process.versions=="object"&&typeof process.versions.node=="string"&&process.type!="renderer",T=Object.assign({},c),A="./this.program",S=(s,o)=>{throw o},_="";function I(s){return c.locateFile?c.locateFile(s,_):_+s}var H,w;if(v){var P=_a,R=_a;_=__dirname+"/",w=s=>{s=Ft(s)?new URL(s):R.normalize(s);var o=P.readFileSync(s);return o},H=(s,o=!0)=>(s=Ft(s)?new URL(s):R.normalize(s),new Promise((u,p)=>{P.readFile(s,o?void 0:"utf8",(y,C)=>{y?p(y):u(o?C.buffer:C)})})),!c.thisProgram&&process.argv.length>1&&(A=process.argv[1].replace(/\\/g,"/")),process.argv.slice(2),S=(s,o)=>{throw process.exitCode=s,o}}else(g||f)&&(f?_=self.location.href:typeof document<"u"&&document.currentScript&&(_=document.currentScript.src),n&&(_=n),_.startsWith("blob:")?_="":_=_.substr(0,_.replace(/[?#].*/,"").lastIndexOf("/")+1),f&&(w=s=>{var o=new XMLHttpRequest;return o.open("GET",s,!1),o.responseType="arraybuffer",o.send(null),new Uint8Array(o.response)}),H=s=>Ft(s)?new Promise((o,u)=>{var p=new XMLHttpRequest;p.open("GET",s,!0),p.responseType="arraybuffer",p.onload=()=>{if(p.status==200||p.status==0&&p.response){o(p.response);return}u(p.status)},p.onerror=u,p.send(null)}):fetch(s,{credentials:"same-origin"}).then(o=>o.ok?o.arrayBuffer():Promise.reject(new Error(o.status+" : "+o.url))));var N=c.print||console.log.bind(console),E=c.printErr||console.error.bind(console);Object.assign(c,T),T=null,c.arguments&&c.arguments,c.thisProgram&&(A=c.thisProgram);var L=c.wasmBinary,k,z=!1;function Y(s,o){s||Je(o)}var $,O,K,ne,X,re,se,ce;function he(){var s=k.buffer;c.HEAP8=$=new Int8Array(s),c.HEAP16=K=new Int16Array(s),c.HEAPU8=O=new Uint8Array(s),c.HEAPU16=ne=new Uint16Array(s),c.HEAP32=X=new Int32Array(s),c.HEAPU32=re=new Uint32Array(s),c.HEAPF32=se=new Float32Array(s),c.HEAPF64=ce=new Float64Array(s)}var Oe=[],Be=[],ht=[],nt=!1;function it(){var s=c.preRun;s&&(typeof s=="function"&&(s=[s]),s.forEach(ye)),ge(Oe)}function ae(){nt=!0,!c.noFSInit&&!M.initialized&&M.init(),M.ignorePermissions=!1,ge(Be)}function ue(){var s=c.postRun;s&&(typeof s=="function"&&(s=[s]),s.forEach(Ae)),ge(ht)}function ye(s){Oe.unshift(s)}function He(s){Be.unshift(s)}function Ae(s){ht.unshift(s)}var Ve=0,Tt=null;function Qe(s){return s}function at(s){var o;Ve++,(o=c.monitorRunDependencies)==null||o.call(c,Ve)}function vt(s){var u;if(Ve--,(u=c.monitorRunDependencies)==null||u.call(c,Ve),Ve==0&&Tt){var o=Tt;Tt=null,o()}}function Je(s){var u;(u=c.onAbort)==null||u.call(c,s),s="Aborted("+s+")",E(s),z=!0,s+=". Build with -sASSERTIONS for more info.",nt&&zo();var o=new WebAssembly.RuntimeError(s);throw h(o),o}var wt="data:application/octet-stream;base64,",It=s=>s.startsWith(wt),Ft=s=>s.startsWith("file://");function At(){var s="occt-import-js.wasm";return It(s)?s:I(s)}var Rt;function V(s){if(s==Rt&&L)return new Uint8Array(L);if(w)return w(s);throw"both async and sync fetching of the wasm failed"}function zt(s){return L?Promise.resolve().then(()=>V(s)):H(s).then(o=>new Uint8Array(o),()=>V(s))}function pt(s,o,u){return zt(s).then(p=>WebAssembly.instantiate(p,o)).then(u,p=>{E(`failed to asynchronously prepare wasm: ${p}`),Je(p)})}function D(s,o,u,p){return!s&&typeof WebAssembly.instantiateStreaming=="function"&&!It(o)&&!Ft(o)&&!v&&typeof fetch=="function"?fetch(o,{credentials:"same-origin"}).then(y=>{var C=WebAssembly.instantiateStreaming(y,u);return C.then(p,function(U){return E(`wasm streaming compile failed: ${U}`),E("falling back to ArrayBuffer instantiation"),pt(o,u,p)})}):pt(o,u,p)}function x(){return{a:nh}}function q(){var s=x();function o(p,y){return Wt=p.exports,k=Wt._,he(),Ro=Wt.ba,He(Wt.$),vt(),Wt}at();function u(p){o(p.instance)}if(c.instantiateWasm)try{return c.instantiateWasm(s,o)}catch(p){E(`Module.instantiateWasm callback failed with error: ${p}`),h(p)}return Rt??(Rt=At()),D(L,Rt,s,u).catch(h),{}}var W,te;function me(s){this.name="ExitStatus",this.message=`Program terminated with exit(${s})`,this.status=s}var ge=s=>{s.forEach(o=>o(c))};c.noExitRuntime;var Q={isAbs:s=>s.charAt(0)==="/",splitPath:s=>{var o=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;return o.exec(s).slice(1)},normalizeArray:(s,o)=>{for(var u=0,p=s.length-1;p>=0;p--){var y=s[p];y==="."?s.splice(p,1):y===".."?(s.splice(p,1),u++):u&&(s.splice(p,1),u--)}if(o)for(;u;u--)s.unshift("..");return s},normalize:s=>{var o=Q.isAbs(s),u=s.substr(-1)==="/";return s=Q.normalizeArray(s.split("/").filter(p=>!!p),!o).join("/"),!s&&!o&&(s="."),s&&u&&(s+="/"),(o?"/":"")+s},dirname:s=>{var o=Q.splitPath(s),u=o[0],p=o[1];return!u&&!p?".":(p&&(p=p.substr(0,p.length-1)),u+p)},basename:s=>{if(s==="/")return"/";s=Q.normalize(s),s=s.replace(/\/$/,"");var o=s.lastIndexOf("/");return o===-1?s:s.substr(o+1)},join:(...s)=>Q.normalize(s.join("/")),join2:(s,o)=>Q.normalize(s+"/"+o)},le=()=>{if(typeof crypto=="object"&&typeof crypto.getRandomValues=="function")return p=>crypto.getRandomValues(p);if(v)try{var s=_a,o=s.randomFillSync;if(o)return p=>s.randomFillSync(p);var u=s.randomBytes;return p=>(p.set(u(p.byteLength)),p)}catch{}Je("initRandomDevice")},ve=s=>(ve=le())(s),Ue={resolve:(...s)=>{for(var o="",u=!1,p=s.length-1;p>=-1&&!u;p--){var y=p>=0?s[p]:M.cwd();if(typeof y!="string")throw new TypeError("Arguments to path.resolve must be strings");if(!y)return"";o=y+"/"+o,u=Q.isAbs(y)}return o=Q.normalizeArray(o.split("/").filter(C=>!!C),!u).join("/"),(u?"/":"")+o||"."},relative:(s,o)=>{s=Ue.resolve(s).substr(1),o=Ue.resolve(o).substr(1);function u(fe){for(var Ce=0;Ce<fe.length&&fe[Ce]==="";Ce++);for(var Le=fe.length-1;Le>=0&&fe[Le]==="";Le--);return Ce>Le?[]:fe.slice(Ce,Le-Ce+1)}for(var p=u(s.split("/")),y=u(o.split("/")),C=Math.min(p.length,y.length),U=C,B=0;B<C;B++)if(p[B]!==y[B]){U=B;break}for(var ie=[],B=U;B<p.length;B++)ie.push("..");return ie=ie.concat(y.slice(U)),ie.join("/")}},Ee=typeof TextDecoder<"u"?new TextDecoder:void 0,_e=(s,o=0,u=NaN)=>{for(var p=o+u,y=o;s[y]&&!(y>=p);)++y;if(y-o>16&&s.buffer&&Ee)return Ee.decode(s.subarray(o,y));for(var C="";o<y;){var U=s[o++];if(!(U&128)){C+=String.fromCharCode(U);continue}var B=s[o++]&63;if((U&224)==192){C+=String.fromCharCode((U&31)<<6|B);continue}var ie=s[o++]&63;if((U&240)==224?U=(U&15)<<12|B<<6|ie:U=(U&7)<<18|B<<12|ie<<6|s[o++]&63,U<65536)C+=String.fromCharCode(U);else{var fe=U-65536;C+=String.fromCharCode(55296|fe>>10,56320|fe&1023)}}return C},ke=[],Ge=s=>{for(var o=0,u=0;u<s.length;++u){var p=s.charCodeAt(u);p<=127?o++:p<=2047?o+=2:p>=55296&&p<=57343?(o+=4,++u):o+=3}return o},qe=(s,o,u,p)=>{if(!(p>0))return 0;for(var y=u,C=u+p-1,U=0;U<s.length;++U){var B=s.charCodeAt(U);if(B>=55296&&B<=57343){var ie=s.charCodeAt(++U);B=65536+((B&1023)<<10)|ie&1023}if(B<=127){if(u>=C)break;o[u++]=B}else if(B<=2047){if(u+1>=C)break;o[u++]=192|B>>6,o[u++]=128|B&63}else if(B<=65535){if(u+2>=C)break;o[u++]=224|B>>12,o[u++]=128|B>>6&63,o[u++]=128|B&63}else{if(u+3>=C)break;o[u++]=240|B>>18,o[u++]=128|B>>12&63,o[u++]=128|B>>6&63,o[u++]=128|B&63}}return o[u]=0,u-y};function G(s,o,u){var p=Ge(s)+1,y=new Array(p),C=qe(s,y,0,y.length);return y.length=C,y}var Se=()=>{if(!ke.length){var s=null;if(v){var o=256,u=Buffer.alloc(o),p=0,y=process.stdin.fd;try{p=P.readSync(y,u,0,o)}catch(C){if(C.toString().includes("EOF"))p=0;else throw C}p>0&&(s=u.slice(0,p).toString("utf-8"))}else typeof window<"u"&&typeof window.prompt=="function"&&(s=window.prompt("Input: "),s!==null&&(s+=`
`));if(!s)return null;ke=G(s)}return ke.shift()},oe={ttys:[],init(){},shutdown(){},register(s,o){oe.ttys[s]={input:[],output:[],ops:o},M.registerDevice(s,oe.stream_ops)},stream_ops:{open(s){var o=oe.ttys[s.node.rdev];if(!o)throw new M.ErrnoError(43);s.tty=o,s.seekable=!1},close(s){s.tty.ops.fsync(s.tty)},fsync(s){s.tty.ops.fsync(s.tty)},read(s,o,u,p,y){if(!s.tty||!s.tty.ops.get_char)throw new M.ErrnoError(60);for(var C=0,U=0;U<p;U++){var B;try{B=s.tty.ops.get_char(s.tty)}catch{throw new M.ErrnoError(29)}if(B===void 0&&C===0)throw new M.ErrnoError(6);if(B==null)break;C++,o[u+U]=B}return C&&(s.node.timestamp=Date.now()),C},write(s,o,u,p,y){if(!s.tty||!s.tty.ops.put_char)throw new M.ErrnoError(60);try{for(var C=0;C<p;C++)s.tty.ops.put_char(s.tty,o[u+C])}catch{throw new M.ErrnoError(29)}return p&&(s.node.timestamp=Date.now()),C}},default_tty_ops:{get_char(s){return Se()},put_char(s,o){o===null||o===10?(N(_e(s.output)),s.output=[]):o!=0&&s.output.push(o)},fsync(s){s.output&&s.output.length>0&&(N(_e(s.output)),s.output=[])},ioctl_tcgets(s){return{c_iflag:25856,c_oflag:5,c_cflag:191,c_lflag:35387,c_cc:[3,28,127,21,4,0,1,0,17,19,26,0,18,15,23,22,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}},ioctl_tcsets(s,o,u){return 0},ioctl_tiocgwinsz(s){return[24,80]}},default_tty1_ops:{put_char(s,o){o===null||o===10?(E(_e(s.output)),s.output=[]):o!=0&&s.output.push(o)},fsync(s){s.output&&s.output.length>0&&(E(_e(s.output)),s.output=[])}}},Me=(s,o)=>{O.fill(0,s,s+o)},Re=(s,o)=>Math.ceil(s/o)*o,de=s=>{s=Re(s,65536);var o=ko(65536,s);return o&&Me(o,s),o},pe={ops_table:null,mount(s){return pe.createNode(null,"/",16895,0)},createNode(s,o,u,p){if(M.isBlkdev(u)||M.isFIFO(u))throw new M.ErrnoError(63);pe.ops_table||(pe.ops_table={dir:{node:{getattr:pe.node_ops.getattr,setattr:pe.node_ops.setattr,lookup:pe.node_ops.lookup,mknod:pe.node_ops.mknod,rename:pe.node_ops.rename,unlink:pe.node_ops.unlink,rmdir:pe.node_ops.rmdir,readdir:pe.node_ops.readdir,symlink:pe.node_ops.symlink},stream:{llseek:pe.stream_ops.llseek}},file:{node:{getattr:pe.node_ops.getattr,setattr:pe.node_ops.setattr},stream:{llseek:pe.stream_ops.llseek,read:pe.stream_ops.read,write:pe.stream_ops.write,allocate:pe.stream_ops.allocate,mmap:pe.stream_ops.mmap,msync:pe.stream_ops.msync}},link:{node:{getattr:pe.node_ops.getattr,setattr:pe.node_ops.setattr,readlink:pe.node_ops.readlink},stream:{}},chrdev:{node:{getattr:pe.node_ops.getattr,setattr:pe.node_ops.setattr},stream:M.chrdev_stream_ops}});var y=M.createNode(s,o,u,p);return M.isDir(y.mode)?(y.node_ops=pe.ops_table.dir.node,y.stream_ops=pe.ops_table.dir.stream,y.contents={}):M.isFile(y.mode)?(y.node_ops=pe.ops_table.file.node,y.stream_ops=pe.ops_table.file.stream,y.usedBytes=0,y.contents=null):M.isLink(y.mode)?(y.node_ops=pe.ops_table.link.node,y.stream_ops=pe.ops_table.link.stream):M.isChrdev(y.mode)&&(y.node_ops=pe.ops_table.chrdev.node,y.stream_ops=pe.ops_table.chrdev.stream),y.timestamp=Date.now(),s&&(s.contents[o]=y,s.timestamp=y.timestamp),y},getFileDataAsTypedArray(s){return s.contents?s.contents.subarray?s.contents.subarray(0,s.usedBytes):new Uint8Array(s.contents):new Uint8Array(0)},expandFileStorage(s,o){var u=s.contents?s.contents.length:0;if(!(u>=o)){var p=1024*1024;o=Math.max(o,u*(u<p?2:1.125)>>>0),u!=0&&(o=Math.max(o,256));var y=s.contents;s.contents=new Uint8Array(o),s.usedBytes>0&&s.contents.set(y.subarray(0,s.usedBytes),0)}},resizeFileStorage(s,o){if(s.usedBytes!=o)if(o==0)s.contents=null,s.usedBytes=0;else{var u=s.contents;s.contents=new Uint8Array(o),u&&s.contents.set(u.subarray(0,Math.min(o,s.usedBytes))),s.usedBytes=o}},node_ops:{getattr(s){var o={};return o.dev=M.isChrdev(s.mode)?s.id:1,o.ino=s.id,o.mode=s.mode,o.nlink=1,o.uid=0,o.gid=0,o.rdev=s.rdev,M.isDir(s.mode)?o.size=4096:M.isFile(s.mode)?o.size=s.usedBytes:M.isLink(s.mode)?o.size=s.link.length:o.size=0,o.atime=new Date(s.timestamp),o.mtime=new Date(s.timestamp),o.ctime=new Date(s.timestamp),o.blksize=4096,o.blocks=Math.ceil(o.size/o.blksize),o},setattr(s,o){o.mode!==void 0&&(s.mode=o.mode),o.timestamp!==void 0&&(s.timestamp=o.timestamp),o.size!==void 0&&pe.resizeFileStorage(s,o.size)},lookup(s,o){throw M.genericErrors[44]},mknod(s,o,u,p){return pe.createNode(s,o,u,p)},rename(s,o,u){if(M.isDir(s.mode)){var p;try{p=M.lookupNode(o,u)}catch{}if(p)for(var y in p.contents)throw new M.ErrnoError(55)}delete s.parent.contents[s.name],s.parent.timestamp=Date.now(),s.name=u,o.contents[u]=s,o.timestamp=s.parent.timestamp},unlink(s,o){delete s.contents[o],s.timestamp=Date.now()},rmdir(s,o){var u=M.lookupNode(s,o);for(var p in u.contents)throw new M.ErrnoError(55);delete s.contents[o],s.timestamp=Date.now()},readdir(s){var o=[".",".."];for(var u of Object.keys(s.contents))o.push(u);return o},symlink(s,o,u){var p=pe.createNode(s,o,41471,0);return p.link=u,p},readlink(s){if(!M.isLink(s.mode))throw new M.ErrnoError(28);return s.link}},stream_ops:{read(s,o,u,p,y){var C=s.node.contents;if(y>=s.node.usedBytes)return 0;var U=Math.min(s.node.usedBytes-y,p);if(U>8&&C.subarray)o.set(C.subarray(y,y+U),u);else for(var B=0;B<U;B++)o[u+B]=C[y+B];return U},write(s,o,u,p,y,C){if(o.buffer===$.buffer&&(C=!1),!p)return 0;var U=s.node;if(U.timestamp=Date.now(),o.subarray&&(!U.contents||U.contents.subarray)){if(C)return U.contents=o.subarray(u,u+p),U.usedBytes=p,p;if(U.usedBytes===0&&y===0)return U.contents=o.slice(u,u+p),U.usedBytes=p,p;if(y+p<=U.usedBytes)return U.contents.set(o.subarray(u,u+p),y),p}if(pe.expandFileStorage(U,y+p),U.contents.subarray&&o.subarray)U.contents.set(o.subarray(u,u+p),y);else for(var B=0;B<p;B++)U.contents[y+B]=o[u+B];return U.usedBytes=Math.max(U.usedBytes,y+p),p},llseek(s,o,u){var p=o;if(u===1?p+=s.position:u===2&&M.isFile(s.node.mode)&&(p+=s.node.usedBytes),p<0)throw new M.ErrnoError(28);return p},allocate(s,o,u){pe.expandFileStorage(s.node,o+u),s.node.usedBytes=Math.max(s.node.usedBytes,o+u)},mmap(s,o,u,p,y){if(!M.isFile(s.node.mode))throw new M.ErrnoError(43);var C,U,B=s.node.contents;if(!(y&2)&&B&&B.buffer===$.buffer)U=!1,C=B.byteOffset;else{if(U=!0,C=de(o),!C)throw new M.ErrnoError(48);B&&((u>0||u+o<B.length)&&(B.subarray?B=B.subarray(u,u+o):B=Array.prototype.slice.call(B,u,u+o)),$.set(B,C))}return{ptr:C,allocated:U}},msync(s,o,u,p,y){return pe.stream_ops.write(s,o,0,p,u,!1),0}}},Fe=(s,o,u,p)=>{var y=`al ${s}`;H(s).then(C=>{o(new Uint8Array(C)),y&&vt()},C=>{if(u)u();else throw`Loading data file "${s}" failed.`}),y&&at()},yt=(s,o,u,p,y,C)=>{M.createDataFile(s,o,u,p,y,C)},mt=c.preloadPlugins||[],an=(s,o,u,p)=>{typeof Browser<"u"&&Browser.init();var y=!1;return mt.forEach(C=>{y||C.canHandle(o)&&(C.handle(s,o,u,p),y=!0)}),y},dn=(s,o,u,p,y,C,U,B,ie,fe)=>{var Ce=o?Ue.resolve(Q.join2(s,o)):s;function Le(Xe){function Ie($e){fe==null||fe(),B||yt(s,o,$e,p,y,ie),C==null||C(),vt()}an(Xe,Ce,Ie,()=>{U==null||U(),vt()})||Ie(Xe)}at(),typeof u=="string"?Fe(u,Le,U):Le(u)},Ts=s=>{var o={r:0,"r+":2,w:577,"w+":578,a:1089,"a+":1090},u=o[s];if(typeof u>"u")throw new Error(`Unknown file open mode: ${s}`);return u},er=(s,o)=>{var u=0;return s&&(u|=365),o&&(u|=146),u},M={root:null,mounts:[],devices:{},streams:[],nextInode:1,nameTable:null,currentPath:"/",initialized:!1,ignorePermissions:!0,ErrnoError:class{constructor(s){this.name="ErrnoError",this.errno=s}},genericErrors:{},filesystems:null,syncFSRequests:0,readFiles:{},FSStream:class{constructor(){this.shared={}}get object(){return this.node}set object(s){this.node=s}get isRead(){return(this.flags&2097155)!==1}get isWrite(){return(this.flags&2097155)!==0}get isAppend(){return this.flags&1024}get flags(){return this.shared.flags}set flags(s){this.shared.flags=s}get position(){return this.shared.position}set position(s){this.shared.position=s}},FSNode:class{constructor(s,o,u,p){s||(s=this),this.parent=s,this.mount=s.mount,this.mounted=null,this.id=M.nextInode++,this.name=o,this.mode=u,this.node_ops={},this.stream_ops={},this.rdev=p,this.readMode=365,this.writeMode=146}get read(){return(this.mode&this.readMode)===this.readMode}set read(s){s?this.mode|=this.readMode:this.mode&=~this.readMode}get write(){return(this.mode&this.writeMode)===this.writeMode}set write(s){s?this.mode|=this.writeMode:this.mode&=~this.writeMode}get isFolder(){return M.isDir(this.mode)}get isDevice(){return M.isChrdev(this.mode)}},lookupPath(s,o={}){if(s=Ue.resolve(s),!s)return{path:"",node:null};var u={follow_mount:!0,recurse_count:0};if(o=Object.assign(u,o),o.recurse_count>8)throw new M.ErrnoError(32);for(var p=s.split("/").filter(Le=>!!Le),y=M.root,C="/",U=0;U<p.length;U++){var B=U===p.length-1;if(B&&o.parent)break;if(y=M.lookupNode(y,p[U]),C=Q.join2(C,p[U]),M.isMountpoint(y)&&(!B||B&&o.follow_mount)&&(y=y.mounted.root),!B||o.follow)for(var ie=0;M.isLink(y.mode);){var fe=M.readlink(C);C=Ue.resolve(Q.dirname(C),fe);var Ce=M.lookupPath(C,{recurse_count:o.recurse_count+1});if(y=Ce.node,ie++>40)throw new M.ErrnoError(32)}}return{path:C,node:y}},getPath(s){for(var o;;){if(M.isRoot(s)){var u=s.mount.mountpoint;return o?u[u.length-1]!=="/"?`${u}/${o}`:u+o:u}o=o?`${s.name}/${o}`:s.name,s=s.parent}},hashName(s,o){for(var u=0,p=0;p<o.length;p++)u=(u<<5)-u+o.charCodeAt(p)|0;return(s+u>>>0)%M.nameTable.length},hashAddNode(s){var o=M.hashName(s.parent.id,s.name);s.name_next=M.nameTable[o],M.nameTable[o]=s},hashRemoveNode(s){var o=M.hashName(s.parent.id,s.name);if(M.nameTable[o]===s)M.nameTable[o]=s.name_next;else for(var u=M.nameTable[o];u;){if(u.name_next===s){u.name_next=s.name_next;break}u=u.name_next}},lookupNode(s,o){var u=M.mayLookup(s);if(u)throw new M.ErrnoError(u);for(var p=M.hashName(s.id,o),y=M.nameTable[p];y;y=y.name_next){var C=y.name;if(y.parent.id===s.id&&C===o)return y}return M.lookup(s,o)},createNode(s,o,u,p){var y=new M.FSNode(s,o,u,p);return M.hashAddNode(y),y},destroyNode(s){M.hashRemoveNode(s)},isRoot(s){return s===s.parent},isMountpoint(s){return!!s.mounted},isFile(s){return(s&61440)===32768},isDir(s){return(s&61440)===16384},isLink(s){return(s&61440)===40960},isChrdev(s){return(s&61440)===8192},isBlkdev(s){return(s&61440)===24576},isFIFO(s){return(s&61440)===4096},isSocket(s){return(s&49152)===49152},flagsToPermissionString(s){var o=["r","w","rw"][s&3];return s&512&&(o+="w"),o},nodePermissions(s,o){return M.ignorePermissions?0:o.includes("r")&&!(s.mode&292)||o.includes("w")&&!(s.mode&146)||o.includes("x")&&!(s.mode&73)?2:0},mayLookup(s){if(!M.isDir(s.mode))return 54;var o=M.nodePermissions(s,"x");return o||(s.node_ops.lookup?0:2)},mayCreate(s,o){try{var u=M.lookupNode(s,o);return 20}catch{}return M.nodePermissions(s,"wx")},mayDelete(s,o,u){var p;try{p=M.lookupNode(s,o)}catch(C){return C.errno}var y=M.nodePermissions(s,"wx");if(y)return y;if(u){if(!M.isDir(p.mode))return 54;if(M.isRoot(p)||M.getPath(p)===M.cwd())return 10}else if(M.isDir(p.mode))return 31;return 0},mayOpen(s,o){return s?M.isLink(s.mode)?32:M.isDir(s.mode)&&(M.flagsToPermissionString(o)!=="r"||o&512)?31:M.nodePermissions(s,M.flagsToPermissionString(o)):44},MAX_OPEN_FDS:4096,nextfd(){for(var s=0;s<=M.MAX_OPEN_FDS;s++)if(!M.streams[s])return s;throw new M.ErrnoError(33)},getStreamChecked(s){var o=M.getStream(s);if(!o)throw new M.ErrnoError(8);return o},getStream:s=>M.streams[s],createStream(s,o=-1){return s=Object.assign(new M.FSStream,s),o==-1&&(o=M.nextfd()),s.fd=o,M.streams[o]=s,s},closeStream(s){M.streams[s]=null},dupStream(s,o=-1){var p,y;var u=M.createStream(s,o);return(y=(p=u.stream_ops)==null?void 0:p.dup)==null||y.call(p,u),u},chrdev_stream_ops:{open(s){var u,p;var o=M.getDevice(s.node.rdev);s.stream_ops=o.stream_ops,(p=(u=s.stream_ops).open)==null||p.call(u,s)},llseek(){throw new M.ErrnoError(70)}},major:s=>s>>8,minor:s=>s&255,makedev:(s,o)=>s<<8|o,registerDevice(s,o){M.devices[s]={stream_ops:o}},getDevice:s=>M.devices[s],getMounts(s){for(var o=[],u=[s];u.length;){var p=u.pop();o.push(p),u.push(...p.mounts)}return o},syncfs(s,o){typeof s=="function"&&(o=s,s=!1),M.syncFSRequests++,M.syncFSRequests>1&&E(`warning: ${M.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work`);var u=M.getMounts(M.root.mount),p=0;function y(U){return M.syncFSRequests--,o(U)}function C(U){if(U)return C.errored?void 0:(C.errored=!0,y(U));++p>=u.length&&y(null)}u.forEach(U=>{if(!U.type.syncfs)return C(null);U.type.syncfs(U,s,C)})},mount(s,o,u){var p=u==="/",y=!u,C;if(p&&M.root)throw new M.ErrnoError(10);if(!p&&!y){var U=M.lookupPath(u,{follow_mount:!1});if(u=U.path,C=U.node,M.isMountpoint(C))throw new M.ErrnoError(10);if(!M.isDir(C.mode))throw new M.ErrnoError(54)}var B={type:s,opts:o,mountpoint:u,mounts:[]},ie=s.mount(B);return ie.mount=B,B.root=ie,p?M.root=ie:C&&(C.mounted=B,C.mount&&C.mount.mounts.push(B)),ie},unmount(s){var o=M.lookupPath(s,{follow_mount:!1});if(!M.isMountpoint(o.node))throw new M.ErrnoError(28);var u=o.node,p=u.mounted,y=M.getMounts(p);Object.keys(M.nameTable).forEach(U=>{for(var B=M.nameTable[U];B;){var ie=B.name_next;y.includes(B.mount)&&M.destroyNode(B),B=ie}}),u.mounted=null;var C=u.mount.mounts.indexOf(p);u.mount.mounts.splice(C,1)},lookup(s,o){return s.node_ops.lookup(s,o)},mknod(s,o,u){var p=M.lookupPath(s,{parent:!0}),y=p.node,C=Q.basename(s);if(!C||C==="."||C==="..")throw new M.ErrnoError(28);var U=M.mayCreate(y,C);if(U)throw new M.ErrnoError(U);if(!y.node_ops.mknod)throw new M.ErrnoError(63);return y.node_ops.mknod(y,C,o,u)},create(s,o){return o=o!==void 0?o:438,o&=4095,o|=32768,M.mknod(s,o,0)},mkdir(s,o){return o=o!==void 0?o:511,o&=1023,o|=16384,M.mknod(s,o,0)},mkdirTree(s,o){for(var u=s.split("/"),p="",y=0;y<u.length;++y)if(u[y]){p+="/"+u[y];try{M.mkdir(p,o)}catch(C){if(C.errno!=20)throw C}}},mkdev(s,o,u){return typeof u>"u"&&(u=o,o=438),o|=8192,M.mknod(s,o,u)},symlink(s,o){if(!Ue.resolve(s))throw new M.ErrnoError(44);var u=M.lookupPath(o,{parent:!0}),p=u.node;if(!p)throw new M.ErrnoError(44);var y=Q.basename(o),C=M.mayCreate(p,y);if(C)throw new M.ErrnoError(C);if(!p.node_ops.symlink)throw new M.ErrnoError(63);return p.node_ops.symlink(p,y,s)},rename(s,o){var u=Q.dirname(s),p=Q.dirname(o),y=Q.basename(s),C=Q.basename(o),U,B,ie;if(U=M.lookupPath(s,{parent:!0}),B=U.node,U=M.lookupPath(o,{parent:!0}),ie=U.node,!B||!ie)throw new M.ErrnoError(44);if(B.mount!==ie.mount)throw new M.ErrnoError(75);var fe=M.lookupNode(B,y),Ce=Ue.relative(s,p);if(Ce.charAt(0)!==".")throw new M.ErrnoError(28);if(Ce=Ue.relative(o,u),Ce.charAt(0)!==".")throw new M.ErrnoError(55);var Le;try{Le=M.lookupNode(ie,C)}catch{}if(fe!==Le){var Xe=M.isDir(fe.mode),Ie=M.mayDelete(B,y,Xe);if(Ie)throw new M.ErrnoError(Ie);if(Ie=Le?M.mayDelete(ie,C,Xe):M.mayCreate(ie,C),Ie)throw new M.ErrnoError(Ie);if(!B.node_ops.rename)throw new M.ErrnoError(63);if(M.isMountpoint(fe)||Le&&M.isMountpoint(Le))throw new M.ErrnoError(10);if(ie!==B&&(Ie=M.nodePermissions(B,"w"),Ie))throw new M.ErrnoError(Ie);M.hashRemoveNode(fe);try{B.node_ops.rename(fe,ie,C),fe.parent=ie}catch($e){throw $e}finally{M.hashAddNode(fe)}}},rmdir(s){var o=M.lookupPath(s,{parent:!0}),u=o.node,p=Q.basename(s),y=M.lookupNode(u,p),C=M.mayDelete(u,p,!0);if(C)throw new M.ErrnoError(C);if(!u.node_ops.rmdir)throw new M.ErrnoError(63);if(M.isMountpoint(y))throw new M.ErrnoError(10);u.node_ops.rmdir(u,p),M.destroyNode(y)},readdir(s){var o=M.lookupPath(s,{follow:!0}),u=o.node;if(!u.node_ops.readdir)throw new M.ErrnoError(54);return u.node_ops.readdir(u)},unlink(s){var o=M.lookupPath(s,{parent:!0}),u=o.node;if(!u)throw new M.ErrnoError(44);var p=Q.basename(s),y=M.lookupNode(u,p),C=M.mayDelete(u,p,!1);if(C)throw new M.ErrnoError(C);if(!u.node_ops.unlink)throw new M.ErrnoError(63);if(M.isMountpoint(y))throw new M.ErrnoError(10);u.node_ops.unlink(u,p),M.destroyNode(y)},readlink(s){var o=M.lookupPath(s),u=o.node;if(!u)throw new M.ErrnoError(44);if(!u.node_ops.readlink)throw new M.ErrnoError(28);return Ue.resolve(M.getPath(u.parent),u.node_ops.readlink(u))},stat(s,o){var u=M.lookupPath(s,{follow:!o}),p=u.node;if(!p)throw new M.ErrnoError(44);if(!p.node_ops.getattr)throw new M.ErrnoError(63);return p.node_ops.getattr(p)},lstat(s){return M.stat(s,!0)},chmod(s,o,u){var p;if(typeof s=="string"){var y=M.lookupPath(s,{follow:!u});p=y.node}else p=s;if(!p.node_ops.setattr)throw new M.ErrnoError(63);p.node_ops.setattr(p,{mode:o&4095|p.mode&-4096,timestamp:Date.now()})},lchmod(s,o){M.chmod(s,o,!0)},fchmod(s,o){var u=M.getStreamChecked(s);M.chmod(u.node,o)},chown(s,o,u,p){var y;if(typeof s=="string"){var C=M.lookupPath(s,{follow:!p});y=C.node}else y=s;if(!y.node_ops.setattr)throw new M.ErrnoError(63);y.node_ops.setattr(y,{timestamp:Date.now()})},lchown(s,o,u){M.chown(s,o,u,!0)},fchown(s,o,u){var p=M.getStreamChecked(s);M.chown(p.node,o,u)},truncate(s,o){if(o<0)throw new M.ErrnoError(28);var u;if(typeof s=="string"){var p=M.lookupPath(s,{follow:!0});u=p.node}else u=s;if(!u.node_ops.setattr)throw new M.ErrnoError(63);if(M.isDir(u.mode))throw new M.ErrnoError(31);if(!M.isFile(u.mode))throw new M.ErrnoError(28);var y=M.nodePermissions(u,"w");if(y)throw new M.ErrnoError(y);u.node_ops.setattr(u,{size:o,timestamp:Date.now()})},ftruncate(s,o){var u=M.getStreamChecked(s);if((u.flags&2097155)===0)throw new M.ErrnoError(28);M.truncate(u.node,o)},utime(s,o,u){var p=M.lookupPath(s,{follow:!0}),y=p.node;y.node_ops.setattr(y,{timestamp:Math.max(o,u)})},open(s,o,u){if(s==="")throw new M.ErrnoError(44);o=typeof o=="string"?Ts(o):o,o&64?(u=typeof u>"u"?438:u,u=u&4095|32768):u=0;var p;if(typeof s=="object")p=s;else{s=Q.normalize(s);try{var y=M.lookupPath(s,{follow:!(o&131072)});p=y.node}catch{}}var C=!1;if(o&64)if(p){if(o&128)throw new M.ErrnoError(20)}else p=M.mknod(s,u,0),C=!0;if(!p)throw new M.ErrnoError(44);if(M.isChrdev(p.mode)&&(o&=-513),o&65536&&!M.isDir(p.mode))throw new M.ErrnoError(54);if(!C){var U=M.mayOpen(p,o);if(U)throw new M.ErrnoError(U)}o&512&&!C&&M.truncate(p,0),o&=-131713;var B=M.createStream({node:p,path:M.getPath(p),flags:o,seekable:!0,position:0,stream_ops:p.stream_ops,ungotten:[],error:!1});return B.stream_ops.open&&B.stream_ops.open(B),c.logReadFiles&&!(o&1)&&(s in M.readFiles||(M.readFiles[s]=1)),B},close(s){if(M.isClosed(s))throw new M.ErrnoError(8);s.getdents&&(s.getdents=null);try{s.stream_ops.close&&s.stream_ops.close(s)}catch(o){throw o}finally{M.closeStream(s.fd)}s.fd=null},isClosed(s){return s.fd===null},llseek(s,o,u){if(M.isClosed(s))throw new M.ErrnoError(8);if(!s.seekable||!s.stream_ops.llseek)throw new M.ErrnoError(70);if(u!=0&&u!=1&&u!=2)throw new M.ErrnoError(28);return s.position=s.stream_ops.llseek(s,o,u),s.ungotten=[],s.position},read(s,o,u,p,y){if(p<0||y<0)throw new M.ErrnoError(28);if(M.isClosed(s))throw new M.ErrnoError(8);if((s.flags&2097155)===1)throw new M.ErrnoError(8);if(M.isDir(s.node.mode))throw new M.ErrnoError(31);if(!s.stream_ops.read)throw new M.ErrnoError(28);var C=typeof y<"u";if(!C)y=s.position;else if(!s.seekable)throw new M.ErrnoError(70);var U=s.stream_ops.read(s,o,u,p,y);return C||(s.position+=U),U},write(s,o,u,p,y,C){if(p<0||y<0)throw new M.ErrnoError(28);if(M.isClosed(s))throw new M.ErrnoError(8);if((s.flags&2097155)===0)throw new M.ErrnoError(8);if(M.isDir(s.node.mode))throw new M.ErrnoError(31);if(!s.stream_ops.write)throw new M.ErrnoError(28);s.seekable&&s.flags&1024&&M.llseek(s,0,2);var U=typeof y<"u";if(!U)y=s.position;else if(!s.seekable)throw new M.ErrnoError(70);var B=s.stream_ops.write(s,o,u,p,y,C);return U||(s.position+=B),B},allocate(s,o,u){if(M.isClosed(s))throw new M.ErrnoError(8);if(o<0||u<=0)throw new M.ErrnoError(28);if((s.flags&2097155)===0)throw new M.ErrnoError(8);if(!M.isFile(s.node.mode)&&!M.isDir(s.node.mode))throw new M.ErrnoError(43);if(!s.stream_ops.allocate)throw new M.ErrnoError(138);s.stream_ops.allocate(s,o,u)},mmap(s,o,u,p,y){if((p&2)!==0&&(y&2)===0&&(s.flags&2097155)!==2)throw new M.ErrnoError(2);if((s.flags&2097155)===1)throw new M.ErrnoError(2);if(!s.stream_ops.mmap)throw new M.ErrnoError(43);if(!o)throw new M.ErrnoError(28);return s.stream_ops.mmap(s,o,u,p,y)},msync(s,o,u,p,y){return s.stream_ops.msync?s.stream_ops.msync(s,o,u,p,y):0},ioctl(s,o,u){if(!s.stream_ops.ioctl)throw new M.ErrnoError(59);return s.stream_ops.ioctl(s,o,u)},readFile(s,o={}){if(o.flags=o.flags||0,o.encoding=o.encoding||"binary",o.encoding!=="utf8"&&o.encoding!=="binary")throw new Error(`Invalid encoding type "${o.encoding}"`);var u,p=M.open(s,o.flags),y=M.stat(s),C=y.size,U=new Uint8Array(C);return M.read(p,U,0,C,0),o.encoding==="utf8"?u=_e(U):o.encoding==="binary"&&(u=U),M.close(p),u},writeFile(s,o,u={}){u.flags=u.flags||577;var p=M.open(s,u.flags,u.mode);if(typeof o=="string"){var y=new Uint8Array(Ge(o)+1),C=qe(o,y,0,y.length);M.write(p,y,0,C,void 0,u.canOwn)}else if(ArrayBuffer.isView(o))M.write(p,o,0,o.byteLength,void 0,u.canOwn);else throw new Error("Unsupported data type");M.close(p)},cwd:()=>M.currentPath,chdir(s){var o=M.lookupPath(s,{follow:!0});if(o.node===null)throw new M.ErrnoError(44);if(!M.isDir(o.node.mode))throw new M.ErrnoError(54);var u=M.nodePermissions(o.node,"x");if(u)throw new M.ErrnoError(u);M.currentPath=o.path},createDefaultDirectories(){M.mkdir("/tmp"),M.mkdir("/home"),M.mkdir("/home/web_user")},createDefaultDevices(){M.mkdir("/dev"),M.registerDevice(M.makedev(1,3),{read:()=>0,write:(p,y,C,U,B)=>U}),M.mkdev("/dev/null",M.makedev(1,3)),oe.register(M.makedev(5,0),oe.default_tty_ops),oe.register(M.makedev(6,0),oe.default_tty1_ops),M.mkdev("/dev/tty",M.makedev(5,0)),M.mkdev("/dev/tty1",M.makedev(6,0));var s=new Uint8Array(1024),o=0,u=()=>(o===0&&(o=ve(s).byteLength),s[--o]);M.createDevice("/dev","random",u),M.createDevice("/dev","urandom",u),M.mkdir("/dev/shm"),M.mkdir("/dev/shm/tmp")},createSpecialDirectories(){M.mkdir("/proc");var s=M.mkdir("/proc/self");M.mkdir("/proc/self/fd"),M.mount({mount(){var o=M.createNode(s,"fd",16895,73);return o.node_ops={lookup(u,p){var y=+p,C=M.getStreamChecked(y),U={parent:null,mount:{mountpoint:"fake"},node_ops:{readlink:()=>C.path}};return U.parent=U,U}},o}},{},"/proc/self/fd")},createStandardStreams(s,o,u){s?M.createDevice("/dev","stdin",s):M.symlink("/dev/tty","/dev/stdin"),o?M.createDevice("/dev","stdout",null,o):M.symlink("/dev/tty","/dev/stdout"),u?M.createDevice("/dev","stderr",null,u):M.symlink("/dev/tty1","/dev/stderr"),M.open("/dev/stdin",0),M.open("/dev/stdout",1),M.open("/dev/stderr",1)},staticInit(){[44].forEach(s=>{M.genericErrors[s]=new M.ErrnoError(s),M.genericErrors[s].stack="<generic error, no stack>"}),M.nameTable=new Array(4096),M.mount(pe,{},"/"),M.createDefaultDirectories(),M.createDefaultDevices(),M.createSpecialDirectories(),M.filesystems={MEMFS:pe}},init(s,o,u){M.initialized=!0,s??(s=c.stdin),o??(o=c.stdout),u??(u=c.stderr),M.createStandardStreams(s,o,u)},quit(){M.initialized=!1;for(var s=0;s<M.streams.length;s++){var o=M.streams[s];o&&M.close(o)}},findObject(s,o){var u=M.analyzePath(s,o);return u.exists?u.object:null},analyzePath(s,o){try{var u=M.lookupPath(s,{follow:!o});s=u.path}catch{}var p={isRoot:!1,exists:!1,error:0,name:null,path:null,object:null,parentExists:!1,parentPath:null,parentObject:null};try{var u=M.lookupPath(s,{parent:!0});p.parentExists=!0,p.parentPath=u.path,p.parentObject=u.node,p.name=Q.basename(s),u=M.lookupPath(s,{follow:!o}),p.exists=!0,p.path=u.path,p.object=u.node,p.name=u.node.name,p.isRoot=u.path==="/"}catch(y){p.error=y.errno}return p},createPath(s,o,u,p){s=typeof s=="string"?s:M.getPath(s);for(var y=o.split("/").reverse();y.length;){var C=y.pop();if(C){var U=Q.join2(s,C);try{M.mkdir(U)}catch{}s=U}}return U},createFile(s,o,u,p,y){var C=Q.join2(typeof s=="string"?s:M.getPath(s),o),U=er(p,y);return M.create(C,U)},createDataFile(s,o,u,p,y,C){var U=o;s&&(s=typeof s=="string"?s:M.getPath(s),U=o?Q.join2(s,o):s);var B=er(p,y),ie=M.create(U,B);if(u){if(typeof u=="string"){for(var fe=new Array(u.length),Ce=0,Le=u.length;Ce<Le;++Ce)fe[Ce]=u.charCodeAt(Ce);u=fe}M.chmod(ie,B|146);var Xe=M.open(ie,577);M.write(Xe,u,0,u.length,0,C),M.close(Xe),M.chmod(ie,B)}},createDevice(s,o,u,p){var B;var y=Q.join2(typeof s=="string"?s:M.getPath(s),o),C=er(!!u,!!p);(B=M.createDevice).major??(B.major=64);var U=M.makedev(M.createDevice.major++,0);return M.registerDevice(U,{open(ie){ie.seekable=!1},close(ie){var fe;(fe=p==null?void 0:p.buffer)!=null&&fe.length&&p(10)},read(ie,fe,Ce,Le,Xe){for(var Ie=0,$e=0;$e<Le;$e++){var ut;try{ut=u()}catch{throw new M.ErrnoError(29)}if(ut===void 0&&Ie===0)throw new M.ErrnoError(6);if(ut==null)break;Ie++,fe[Ce+$e]=ut}return Ie&&(ie.node.timestamp=Date.now()),Ie},write(ie,fe,Ce,Le,Xe){for(var Ie=0;Ie<Le;Ie++)try{p(fe[Ce+Ie])}catch{throw new M.ErrnoError(29)}return Le&&(ie.node.timestamp=Date.now()),Ie}}),M.mkdev(y,C,U)},forceLoadFile(s){if(s.isDevice||s.isFolder||s.link||s.contents)return!0;if(typeof XMLHttpRequest<"u")throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");try{s.contents=w(s.url),s.usedBytes=s.contents.length}catch{throw new M.ErrnoError(29)}},createLazyFile(s,o,u,p,y){class C{constructor(){this.lengthKnown=!1,this.chunks=[]}get(Ie){if(!(Ie>this.length-1||Ie<0)){var $e=Ie%this.chunkSize,ut=Ie/this.chunkSize|0;return this.getter(ut)[$e]}}setDataGetter(Ie){this.getter=Ie}cacheLength(){var Ie=new XMLHttpRequest;if(Ie.open("HEAD",u,!1),Ie.send(null),!(Ie.status>=200&&Ie.status<300||Ie.status===304))throw new Error("Couldn't load "+u+". Status: "+Ie.status);var $e=Number(Ie.getResponseHeader("Content-length")),ut,Xt=(ut=Ie.getResponseHeader("Accept-Ranges"))&&ut==="bytes",Dt=(ut=Ie.getResponseHeader("Content-Encoding"))&&ut==="gzip",xn=1024*1024;Xt||(xn=$e);var Sn=(Ln,Ai)=>{if(Ln>Ai)throw new Error("invalid range ("+Ln+", "+Ai+") or no bytes requested!");if(Ai>$e-1)throw new Error("only "+$e+" bytes available! programmer error!");var Yt=new XMLHttpRequest;if(Yt.open("GET",u,!1),$e!==xn&&Yt.setRequestHeader("Range","bytes="+Ln+"-"+Ai),Yt.responseType="arraybuffer",Yt.overrideMimeType&&Yt.overrideMimeType("text/plain; charset=x-user-defined"),Yt.send(null),!(Yt.status>=200&&Yt.status<300||Yt.status===304))throw new Error("Couldn't load "+u+". Status: "+Yt.status);return Yt.response!==void 0?new Uint8Array(Yt.response||[]):G(Yt.responseText||"")},nr=this;nr.setDataGetter(Ln=>{var Ai=Ln*xn,Yt=(Ln+1)*xn-1;if(Yt=Math.min(Yt,$e-1),typeof nr.chunks[Ln]>"u"&&(nr.chunks[Ln]=Sn(Ai,Yt)),typeof nr.chunks[Ln]>"u")throw new Error("doXHR failed!");return nr.chunks[Ln]}),(Dt||!$e)&&(xn=$e=1,$e=this.getter(0).length,xn=$e,N("LazyFiles on gzip forces download of the whole file when length is accessed")),this._length=$e,this._chunkSize=xn,this.lengthKnown=!0}get length(){return this.lengthKnown||this.cacheLength(),this._length}get chunkSize(){return this.lengthKnown||this.cacheLength(),this._chunkSize}}if(typeof XMLHttpRequest<"u"){if(!f)throw"Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";var U=new C,B={isDevice:!1,contents:U}}else var B={isDevice:!1,url:u};var ie=M.createFile(s,o,B,p,y);B.contents?ie.contents=B.contents:B.url&&(ie.contents=null,ie.url=B.url),Object.defineProperties(ie,{usedBytes:{get:function(){return this.contents.length}}});var fe={},Ce=Object.keys(ie.stream_ops);Ce.forEach(Xe=>{var Ie=ie.stream_ops[Xe];fe[Xe]=(...$e)=>(M.forceLoadFile(ie),Ie(...$e))});function Le(Xe,Ie,$e,ut,Xt){var Dt=Xe.node.contents;if(Xt>=Dt.length)return 0;var xn=Math.min(Dt.length-Xt,ut);if(Dt.slice)for(var Sn=0;Sn<xn;Sn++)Ie[$e+Sn]=Dt[Xt+Sn];else for(var Sn=0;Sn<xn;Sn++)Ie[$e+Sn]=Dt.get(Xt+Sn);return xn}return fe.read=(Xe,Ie,$e,ut,Xt)=>(M.forceLoadFile(ie),Le(Xe,Ie,$e,ut,Xt)),fe.mmap=(Xe,Ie,$e,ut,Xt)=>{M.forceLoadFile(ie);var Dt=de(Ie);if(!Dt)throw new M.ErrnoError(48);return Le(Xe,$,Dt,Ie,$e),{ptr:Dt,allocated:!0}},ie.stream_ops=fe,ie}},di=(s,o)=>s?_e(O,s,o):"",dt={DEFAULT_POLLMASK:5,calculateAt(s,o,u){if(Q.isAbs(o))return o;var p;if(s===-100)p=M.cwd();else{var y=dt.getStreamFromFD(s);p=y.path}if(o.length==0){if(!u)throw new M.ErrnoError(44);return p}return Q.join2(p,o)},doStat(s,o,u){var p=s(o);X[u>>2]=p.dev,X[u+4>>2]=p.mode,re[u+8>>2]=p.nlink,X[u+12>>2]=p.uid,X[u+16>>2]=p.gid,X[u+20>>2]=p.rdev,te=[p.size>>>0,(W=p.size,+Math.abs(W)>=1?W>0?+Math.floor(W/4294967296)>>>0:~~+Math.ceil((W-+(~~W>>>0))/4294967296)>>>0:0)],X[u+24>>2]=te[0],X[u+28>>2]=te[1],X[u+32>>2]=4096,X[u+36>>2]=p.blocks;var y=p.atime.getTime(),C=p.mtime.getTime(),U=p.ctime.getTime();return te=[Math.floor(y/1e3)>>>0,(W=Math.floor(y/1e3),+Math.abs(W)>=1?W>0?+Math.floor(W/4294967296)>>>0:~~+Math.ceil((W-+(~~W>>>0))/4294967296)>>>0:0)],X[u+40>>2]=te[0],X[u+44>>2]=te[1],re[u+48>>2]=y%1e3*1e3*1e3,te=[Math.floor(C/1e3)>>>0,(W=Math.floor(C/1e3),+Math.abs(W)>=1?W>0?+Math.floor(W/4294967296)>>>0:~~+Math.ceil((W-+(~~W>>>0))/4294967296)>>>0:0)],X[u+56>>2]=te[0],X[u+60>>2]=te[1],re[u+64>>2]=C%1e3*1e3*1e3,te=[Math.floor(U/1e3)>>>0,(W=Math.floor(U/1e3),+Math.abs(W)>=1?W>0?+Math.floor(W/4294967296)>>>0:~~+Math.ceil((W-+(~~W>>>0))/4294967296)>>>0:0)],X[u+72>>2]=te[0],X[u+76>>2]=te[1],re[u+80>>2]=U%1e3*1e3*1e3,te=[p.ino>>>0,(W=p.ino,+Math.abs(W)>=1?W>0?+Math.floor(W/4294967296)>>>0:~~+Math.ceil((W-+(~~W>>>0))/4294967296)>>>0:0)],X[u+88>>2]=te[0],X[u+92>>2]=te[1],0},doMsync(s,o,u,p,y){if(!M.isFile(o.node.mode))throw new M.ErrnoError(43);if(p&2)return 0;var C=O.slice(s,s+u);M.msync(o,C,y,u,p)},getStreamFromFD(s){var o=M.getStreamChecked(s);return o},varargs:void 0,getStr(s){var o=di(s);return o}};function yr(s,o){try{return s=dt.getStr(s),M.chmod(s,o),0}catch(u){if(typeof M>"u"||u.name!=="ErrnoError")throw u;return-u.errno}}function br(s,o,u,p){try{if(o=dt.getStr(o),o=dt.calculateAt(s,o),u&-8)return-28;var y=M.lookupPath(o,{follow:!0}),C=y.node;if(!C)return-44;var U="";return u&4&&(U+="r"),u&2&&(U+="w"),u&1&&(U+="x"),U&&M.nodePermissions(C,U)?-2:0}catch(B){if(typeof M>"u"||B.name!=="ErrnoError")throw B;return-B.errno}}function fn(){var s=X[+dt.varargs>>2];return dt.varargs+=4,s}var Cn=fn;function Tr(s,o,u){dt.varargs=u;try{var p=dt.getStreamFromFD(s);switch(o){case 0:{var y=fn();if(y<0)return-28;for(;M.streams[y];)y++;var C;return C=M.dupStream(p,y),C.fd}case 1:case 2:return 0;case 3:return p.flags;case 4:{var y=fn();return p.flags|=y,0}case 12:{var y=Cn(),U=0;return K[y+U>>1]=2,0}case 13:case 14:return 0}return-28}catch(B){if(typeof M>"u"||B.name!=="ErrnoError")throw B;return-B.errno}}function wr(s,o){try{var u=dt.getStreamFromFD(s);return dt.doStat(M.stat,u.path,o)}catch(p){if(typeof M>"u"||p.name!=="ErrnoError")throw p;return-p.errno}}function yi(s,o,u){dt.varargs=u;try{var p=dt.getStreamFromFD(s);switch(o){case 21509:return p.tty?0:-59;case 21505:{if(!p.tty)return-59;if(p.tty.ops.ioctl_tcgets){var y=p.tty.ops.ioctl_tcgets(p),C=Cn();X[C>>2]=y.c_iflag||0,X[C+4>>2]=y.c_oflag||0,X[C+8>>2]=y.c_cflag||0,X[C+12>>2]=y.c_lflag||0;for(var U=0;U<32;U++)$[C+U+17]=y.c_cc[U]||0;return 0}return 0}case 21510:case 21511:case 21512:return p.tty?0:-59;case 21506:case 21507:case 21508:{if(!p.tty)return-59;if(p.tty.ops.ioctl_tcsets){for(var C=Cn(),B=X[C>>2],ie=X[C+4>>2],fe=X[C+8>>2],Ce=X[C+12>>2],Le=[],U=0;U<32;U++)Le.push($[C+U+17]);return p.tty.ops.ioctl_tcsets(p.tty,o,{c_iflag:B,c_oflag:ie,c_cflag:fe,c_lflag:Ce,c_cc:Le})}return 0}case 21519:{if(!p.tty)return-59;var C=Cn();return X[C>>2]=0,0}case 21520:return p.tty?-28:-59;case 21531:{var C=Cn();return M.ioctl(p,o,C)}case 21523:{if(!p.tty)return-59;if(p.tty.ops.ioctl_tiocgwinsz){var Xe=p.tty.ops.ioctl_tiocgwinsz(p.tty),C=Cn();K[C>>1]=Xe[0],K[C+2>>1]=Xe[1]}return 0}case 21524:return p.tty?0:-59;case 21515:return p.tty?0:-59;default:return-28}}catch(Ie){if(typeof M>"u"||Ie.name!=="ErrnoError")throw Ie;return-Ie.errno}}function Ar(s,o){try{return s=dt.getStr(s),dt.doStat(M.lstat,s,o)}catch(u){if(typeof M>"u"||u.name!=="ErrnoError")throw u;return-u.errno}}function bi(s,o,u,p){try{o=dt.getStr(o);var y=p&256,C=p&4096;return p=p&-6401,o=dt.calculateAt(s,o,C),dt.doStat(y?M.lstat:M.stat,o,u)}catch(U){if(typeof M>"u"||U.name!=="ErrnoError")throw U;return-U.errno}}function Rr(s,o,u,p){dt.varargs=p;try{o=dt.getStr(o),o=dt.calculateAt(s,o);var y=p?fn():0;return M.open(o,u,y).fd}catch(C){if(typeof M>"u"||C.name!=="ErrnoError")throw C;return-C.errno}}function Cr(s){try{return s=dt.getStr(s),M.rmdir(s),0}catch(o){if(typeof M>"u"||o.name!=="ErrnoError")throw o;return-o.errno}}function ws(s,o){try{return s=dt.getStr(s),dt.doStat(M.stat,s,o)}catch(u){if(typeof M>"u"||u.name!=="ErrnoError")throw u;return-u.errno}}function As(s,o,u){try{return o=dt.getStr(o),o=dt.calculateAt(s,o),u===0?M.unlink(o):u===512?M.rmdir(o):Je("Invalid flags passed to unlinkat"),0}catch(p){if(typeof M>"u"||p.name!=="ErrnoError")throw p;return-p.errno}}var Rs=()=>{Je("")},Cs=(s,o,u,p,y)=>{},Pr=()=>{for(var s=new Array(256),o=0;o<256;++o)s[o]=String.fromCharCode(o);b=s},b,F=s=>{for(var o="",u=s;O[u];)o+=b[O[u++]];return o},ee={},Z={},j={},Te,xe=s=>{throw new Te(s)},be,Ne=s=>{throw new be(s)},ze=(s,o,u)=>{s.forEach(B=>j[B]=o);function p(B){var ie=u(B);ie.length!==s.length&&Ne("Mismatched type converter count");for(var fe=0;fe<s.length;++fe)Ye(s[fe],ie[fe])}var y=new Array(o.length),C=[],U=0;o.forEach((B,ie)=>{Z.hasOwnProperty(B)?y[ie]=Z[B]:(C.push(B),ee.hasOwnProperty(B)||(ee[B]=[]),ee[B].push(()=>{y[ie]=Z[B],++U,U===C.length&&p(y)}))}),C.length===0&&p(y)};function je(s,o,u={}){var p=o.name;if(s||xe(`type "${p}" must have a positive integer typeid pointer`),Z.hasOwnProperty(s)){if(u.ignoreDuplicateRegistrations)return;xe(`Cannot register type '${p}' twice`)}if(Z[s]=o,delete j[s],ee.hasOwnProperty(s)){var y=ee[s];delete ee[s],y.forEach(C=>C())}}function Ye(s,o,u={}){return je(s,o,u)}var Pe=8,_t=(s,o,u,p)=>{o=F(o),Ye(s,{name:o,fromWireType:function(y){return!!y},toWireType:function(y,C){return C?u:p},argPackAdvance:Pe,readValueFromPointer:function(y){return this.fromWireType(O[y])},destructorFunction:null})},Ct=[],ot=[],xt=s=>{s>9&&--ot[s+1]===0&&(ot[s]=void 0,Ct.push(s))},Ht=()=>ot.length/2-5-Ct.length,De=()=>{ot.push(0,1,void 0,1,null,1,!0,1,!1,1),c.count_emval_handles=Ht},ct={toValue:s=>(s||xe("Cannot use deleted val. handle = "+s),ot[s]),toHandle:s=>{switch(s){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:{const o=Ct.pop()||ot.length;return ot[o]=s,ot[o+1]=1,o}}}};function st(s){return this.fromWireType(re[s>>2])}var tn={name:"emscripten::val",fromWireType:s=>{var o=ct.toValue(s);return xt(s),o},toWireType:(s,o)=>ct.toHandle(o),argPackAdvance:Pe,readValueFromPointer:st,destructorFunction:null},pn=s=>Ye(s,tn),Pn=(s,o)=>{switch(o){case 4:return function(u){return this.fromWireType(se[u>>2])};case 8:return function(u){return this.fromWireType(ce[u>>3])};default:throw new TypeError(`invalid float width (${o}): ${s}`)}},ei=(s,o,u)=>{o=F(o),Ye(s,{name:o,fromWireType:p=>p,toWireType:(p,y)=>y,argPackAdvance:Pe,readValueFromPointer:Pn(o,u),destructorFunction:null})},ft=(s,o)=>Object.defineProperty(o,"name",{value:s}),Pt=s=>{for(;s.length;){var o=s.pop(),u=s.pop();u(o)}};function vn(s){for(var o=1;o<s.length;++o)if(s[o]!==null&&s[o].destructorFunction===void 0)return!0;return!1}function St(s,o){if(!(s instanceof Function))throw new TypeError(`new_ called with constructor type ${typeof s} which is not a function`);var u=ft(s.name||"unknownFunctionName",function(){});u.prototype=s.prototype;var p=new u,y=s.apply(p,o);return y instanceof Object?y:p}function Dn(s,o,u,p){for(var y=vn(s),C=s.length-2,U=[],B=["fn"],ie=0;ie<C;++ie)U.push(`arg${ie}`),B.push(`arg${ie}Wired`);U=U.join(","),B=B.join(",");var fe=`return function (${U}) {
`;y&&(fe+=`var destructors = [];
`);for(var Ce=y?"destructors":"null",Le=["humanName","throwBindingError","invoker","fn","runDestructors","retType","classParam"],ie=0;ie<C;++ie)fe+=`var arg${ie}Wired = argType${ie}['toWireType'](${Ce}, arg${ie});
`,Le.push(`argType${ie}`);if(fe+=(u||p?"var rv = ":"")+`invoker(${B});
`,y)fe+=`runDestructors(destructors);
`;else for(var ie=2;ie<s.length;++ie){var Xe=ie===1?"thisWired":"arg"+(ie-2)+"Wired";s[ie].destructorFunction!==null&&(fe+=`${Xe}_dtor(${Xe});
`,Le.push(`${Xe}_dtor`))}return u&&(fe+=`var ret = retType['fromWireType'](rv);
return ret;
`),fe+=`}
`,[Le,fe]}function ti(s,o,u,p,y,C){var U=o.length;U<2&&xe("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var B=o[1]!==null&&u!==null,ie=vn(o),fe=o[0].name!=="void",Ce=[s,xe,p,y,Pt,o[0],o[1]],Le=0;Le<U-2;++Le)Ce.push(o[Le+2]);if(!ie)for(var Le=2;Le<o.length;++Le)o[Le].destructorFunction!==null&&Ce.push(o[Le].destructorFunction);let[Xe,Ie]=Dn(o,B,fe,C);Xe.push(Ie);var $e=St(Function,Xe)(...Ce);return ft(s,$e)}var Dr=(s,o,u)=>{if(s[o].overloadTable===void 0){var p=s[o];s[o]=function(...y){return s[o].overloadTable.hasOwnProperty(y.length)||xe(`Function '${u}' called with an invalid number of arguments (${y.length}) - expects one of (${s[o].overloadTable})!`),s[o].overloadTable[y.length].apply(this,y)},s[o].overloadTable=[],s[o].overloadTable[p.argCount]=p}},zc=(s,o,u)=>{c.hasOwnProperty(s)?((u===void 0||c[s].overloadTable!==void 0&&c[s].overloadTable[u]!==void 0)&&xe(`Cannot register public name '${s}' twice`),Dr(c,s,s),c.hasOwnProperty(u)&&xe(`Cannot register multiple overloads of a function with the same number of arguments (${u})!`),c[s].overloadTable[u]=o):(c[s]=o,u!==void 0&&(c[s].numArguments=u))},Hc=(s,o)=>{for(var u=[],p=0;p<s;p++)u.push(re[o+p*4>>2]);return u},Gc=(s,o,u)=>{c.hasOwnProperty(s)||Ne("Replacing nonexistent public symbol"),c[s].overloadTable!==void 0&&u!==void 0?c[s].overloadTable[u]=o:(c[s]=o,c[s].argCount=u)},Vc=(s,o,u)=>{s=s.replace(/p/g,"i");var p=c["dynCall_"+s];return p(o,...u)},Lr=[],Ro,Co=s=>{var o=Lr[s];return o||(s>=Lr.length&&(Lr.length=s+1),Lr[s]=o=Ro.get(s)),o},Wc=(s,o,u=[])=>{if(s.includes("j"))return Vc(s,o,u);var p=Co(o)(...u);return p},Xc=(s,o)=>(...u)=>Wc(s,o,u),Yc=(s,o)=>{s=F(s);function u(){return s.includes("j")?Xc(s,o):Co(o)}var p=u();return typeof p!="function"&&xe(`unknown function pointer with signature ${s}: ${o}`),p},qc=(s,o)=>{var u=ft(o,function(p){this.name=o,this.message=p;var y=new Error(p).stack;y!==void 0&&(this.stack=this.toString()+`
`+y.replace(/^Error(:[^\n]*)?\n/,""))});return u.prototype=Object.create(s.prototype),u.prototype.constructor=u,u.prototype.toString=function(){return this.message===void 0?this.name:`${this.name}: ${this.message}`},u},Po,Do=s=>{var o=Oo(s),u=F(o);return Gn(o),u},$c=(s,o)=>{var u=[],p={};function y(C){if(!p[C]&&!Z[C]){if(j[C]){j[C].forEach(y);return}u.push(C),p[C]=!0}}throw o.forEach(y),new Po(`${s}: `+u.map(Do).join([", "]))},Kc=s=>{s=s.trim();const o=s.indexOf("(");return o!==-1?s.substr(0,o):s},Zc=(s,o,u,p,y,C,U,B)=>{var ie=Hc(o,u);s=F(s),s=Kc(s),y=Yc(p,y),zc(s,function(){$c(`Cannot call ${s} due to unbound types`,ie)},o-1),ze([],ie,fe=>{var Ce=[fe[0],null].concat(fe.slice(1));return Gc(s,ti(s,Ce,null,y,C,U),o-1),[]})},Jc=(s,o,u)=>{switch(o){case 1:return u?p=>$[p]:p=>O[p];case 2:return u?p=>K[p>>1]:p=>ne[p>>1];case 4:return u?p=>X[p>>2]:p=>re[p>>2];default:throw new TypeError(`invalid integer width (${o}): ${s}`)}},jc=(s,o,u,p,y)=>{o=F(o);var C=Ce=>Ce;if(p===0){var U=32-8*u;C=Ce=>Ce<<U>>>U}var B=o.includes("unsigned"),ie=(Ce,Le)=>{},fe;B?fe=function(Ce,Le){return ie(Le,this.name),Le>>>0}:fe=function(Ce,Le){return ie(Le,this.name),Le},Ye(s,{name:o,fromWireType:C,toWireType:fe,argPackAdvance:Pe,readValueFromPointer:Jc(o,u,p!==0),destructorFunction:null})},Qc=(s,o,u)=>{var p=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array],y=p[o];function C(U){var B=re[U>>2],ie=re[U+4>>2];return new y($.buffer,ie,B)}u=F(u),Ye(s,{name:u,fromWireType:C,argPackAdvance:Pe,readValueFromPointer:C},{ignoreDuplicateRegistrations:!0})},Ti=(s,o,u)=>qe(s,O,o,u),eu=(s,o)=>{o=F(o);var u=o==="std::string";Ye(s,{name:o,fromWireType(p){var y=re[p>>2],C=p+4,U;if(u)for(var B=C,ie=0;ie<=y;++ie){var fe=C+ie;if(ie==y||O[fe]==0){var Ce=fe-B,Le=di(B,Ce);U===void 0?U=Le:(U+="\0",U+=Le),B=fe+1}}else{for(var Xe=new Array(y),ie=0;ie<y;++ie)Xe[ie]=String.fromCharCode(O[C+ie]);U=Xe.join("")}return Gn(p),U},toWireType(p,y){y instanceof ArrayBuffer&&(y=new Uint8Array(y));var C,U=typeof y=="string";U||y instanceof Uint8Array||y instanceof Uint8ClampedArray||y instanceof Int8Array||xe("Cannot pass non-string to std::string"),u&&U?C=Ge(y):C=y.length;var B=Ns(4+C+1),ie=B+4;if(re[B>>2]=C,u&&U)Ti(y,ie,C+1);else if(U)for(var fe=0;fe<C;++fe){var Ce=y.charCodeAt(fe);Ce>255&&(Gn(ie),xe("String has UTF-16 code units that do not fit in 8 bits")),O[ie+fe]=Ce}else for(var fe=0;fe<C;++fe)O[ie+fe]=y[fe];return p!==null&&p.push(Gn,B),B},argPackAdvance:Pe,readValueFromPointer:st,destructorFunction(p){Gn(p)}})},Lo=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,tu=(s,o)=>{for(var u=s,p=u>>1,y=p+o/2;!(p>=y)&&ne[p];)++p;if(u=p<<1,u-s>32&&Lo)return Lo.decode(O.subarray(s,u));for(var C="",U=0;!(U>=o/2);++U){var B=K[s+U*2>>1];if(B==0)break;C+=String.fromCharCode(B)}return C},nu=(s,o,u)=>{if(u??(u=2147483647),u<2)return 0;u-=2;for(var p=o,y=u<s.length*2?u/2:s.length,C=0;C<y;++C){var U=s.charCodeAt(C);K[o>>1]=U,o+=2}return K[o>>1]=0,o-p},iu=s=>s.length*2,ru=(s,o)=>{for(var u=0,p="";!(u>=o/4);){var y=X[s+u*4>>2];if(y==0)break;if(++u,y>=65536){var C=y-65536;p+=String.fromCharCode(55296|C>>10,56320|C&1023)}else p+=String.fromCharCode(y)}return p},su=(s,o,u)=>{if(u??(u=2147483647),u<4)return 0;for(var p=o,y=p+u-4,C=0;C<s.length;++C){var U=s.charCodeAt(C);if(U>=55296&&U<=57343){var B=s.charCodeAt(++C);U=65536+((U&1023)<<10)|B&1023}if(X[o>>2]=U,o+=4,o+4>y)break}return X[o>>2]=0,o-p},au=s=>{for(var o=0,u=0;u<s.length;++u){var p=s.charCodeAt(u);p>=55296&&p<=57343&&++u,o+=4}return o},ou=(s,o,u)=>{u=F(u);var p,y,C,U;o===2?(p=tu,y=nu,U=iu,C=B=>ne[B>>1]):o===4&&(p=ru,y=su,U=au,C=B=>re[B>>2]),Ye(s,{name:u,fromWireType:B=>{for(var ie=re[B>>2],fe,Ce=B+4,Le=0;Le<=ie;++Le){var Xe=B+4+Le*o;if(Le==ie||C(Xe)==0){var Ie=Xe-Ce,$e=p(Ce,Ie);fe===void 0?fe=$e:(fe+="\0",fe+=$e),Ce=Xe+o}}return Gn(B),fe},toWireType:(B,ie)=>{typeof ie!="string"&&xe(`Cannot pass non-string to C++ string type ${u}`);var fe=U(ie),Ce=Ns(4+fe+o);return re[Ce>>2]=fe/o,y(ie,Ce+4,fe+o),B!==null&&B.push(Gn,Ce),Ce},argPackAdvance:Pe,readValueFromPointer:st,destructorFunction(B){Gn(B)}})},lu=(s,o)=>{o=F(o),Ye(s,{isVoid:!0,name:o,argPackAdvance:0,fromWireType:()=>{},toWireType:(u,p)=>{}})},cu=1,uu=()=>cu,Uo=s=>{for(var o=s.split("."),u=0;u<4;u++){var p=Number(o[u]);if(isNaN(p))return null;o[u]=p}return(o[0]|o[1]<<8|o[2]<<16|o[3]<<24)>>>0},Ur=s=>parseInt(s),hu=s=>{var o,u,p,y,C=/^((?=.*::)(?!.*::.+::)(::)?([\dA-F]{1,4}:(:|\b)|){5}|([\dA-F]{1,4}:){6})((([\dA-F]{1,4}((?!\3)::|:\b|$))|(?!\2\3)){2}|(((2[0-4]|1\d|[1-9])?\d|25[0-5])\.?\b){4})$/i,U=[];if(!C.test(s))return null;if(s==="::")return[0,0,0,0,0,0,0,0];for(s.startsWith("::")?s=s.replace("::","Z:"):s=s.replace("::",":Z:"),s.indexOf(".")>0?(s=s.replace(new RegExp("[.]","g"),":"),o=s.split(":"),o[o.length-4]=Ur(o[o.length-4])+Ur(o[o.length-3])*256,o[o.length-3]=Ur(o[o.length-2])+Ur(o[o.length-1])*256,o=o.slice(0,o.length-2)):o=s.split(":"),p=0,y=0,u=0;u<o.length;u++)if(typeof o[u]=="string")if(o[u]==="Z"){for(y=0;y<8-o.length+1;y++)U[u+y]=0;p=y-1}else U[u+p]=Bo(parseInt(o[u],16));else U[u+p]=o[u];return[U[1]<<16|U[0],U[3]<<16|U[2],U[5]<<16|U[4],U[7]<<16|U[6]]},ni={address_map:{id:1,addrs:{},names:{}},lookup_name(s){var o=Uo(s);if(o!==null||(o=hu(s),o!==null))return s;var u;if(ni.address_map.addrs[s])u=ni.address_map.addrs[s];else{var p=ni.address_map.id++;Y(p<65535,"exceeded max address mappings of 65535"),u="172.29."+(p&255)+"."+(p&65280),ni.address_map.names[u]=s,ni.address_map.addrs[s]=u}return u},lookup_addr(s){return ni.address_map.names[s]?ni.address_map.names[s]:null}},du=s=>{var o=di(s);return Uo(ni.lookup_name(o))},fu=(s,o,u)=>O.copyWithin(s,o,o+u),Ps=(s,o)=>{var u=Z[s];return u===void 0&&xe(`${o} has unknown type ${Do(s)}`),u},Io=(s,o,u)=>{var p=[],y=s.toWireType(p,u);return p.length&&(re[o>>2]=ct.toHandle(p)),y},pu=(s,o,u)=>(s=ct.toValue(s),o=Ps(o,"emval::as"),Io(o,u,s)),mu={},Ds=s=>{var o=mu[s];return o===void 0?F(s):o},Ls=[],_u=(s,o,u,p,y)=>(s=Ls[s],o=ct.toValue(o),u=Ds(u),s(o,o[u],p,y)),No=()=>typeof globalThis=="object"?globalThis:(function(){return Function})()("return this")(),gu=s=>s===0?ct.toHandle(No()):(s=Ds(s),ct.toHandle(No()[s])),vu=s=>{var o=Ls.length;return Ls.push(s),o},xu=(s,o)=>{for(var u=new Array(s),p=0;p<s;++p)u[p]=Ps(re[o+p*4>>2],"parameter "+p);return u},Su=(s,o,u)=>{var p=xu(s,o),y=p.shift();s--;var C=`return function (obj, func, destructorsRef, args) {
`,U=0,B=[];u===0&&B.push("obj");for(var ie=["retType"],fe=[y],Ce=0;Ce<s;++Ce)B.push("arg"+Ce),ie.push("argType"+Ce),fe.push(p[Ce]),C+=`  var arg${Ce} = argType${Ce}.readValueFromPointer(args${U?"+"+U:""});
`,U+=p[Ce].argPackAdvance;var Le=u===1?"new func":"func.call";C+=`  var rv = ${Le}(${B.join(", ")});
`,y.isVoid||(ie.push("emval_returnValue"),fe.push(Io),C+=`  return emval_returnValue(retType, destructorsRef, rv);
`),C+=`};
`,ie.push(C);var Xe=St(Function,ie)(...fe),Ie=`methodCaller<(${p.map($e=>$e.name).join(", ")}) => ${y.name}>`;return vu(ft(Ie,Xe))},Mu=(s,o)=>(s=ct.toValue(s),o=ct.toValue(o),ct.toHandle(s[o])),Eu=s=>{s>9&&(ot[s+1]+=1)},yu=()=>ct.toHandle([]),bu=s=>ct.toHandle(Ds(s)),Tu=()=>ct.toHandle({}),wu=s=>{var o=ct.toValue(s);Pt(o),xt(s)},Au=(s,o,u)=>{s=ct.toValue(s),o=ct.toValue(o),u=ct.toValue(u),s[o]=u},Ru=(s,o)=>{s=Ps(s,"_emval_take_value");var u=s.readValueFromPointer(o);return ct.toHandle(u)},Cu=s=>s%4===0&&(s%100!==0||s%400===0),Pu=[0,31,60,91,121,152,182,213,244,274,305,335],Du=[0,31,59,90,120,151,181,212,243,273,304,334],Lu=s=>{var o=Cu(s.getFullYear()),u=o?Pu:Du,p=u[s.getMonth()]+s.getDate()-1;return p},Us=(s,o)=>o+2097152>>>0<4194305-!!s?(s>>>0)+o*4294967296:NaN;function Uu(s,o,u){var p=Us(s,o),y=new Date(p*1e3);X[u>>2]=y.getSeconds(),X[u+4>>2]=y.getMinutes(),X[u+8>>2]=y.getHours(),X[u+12>>2]=y.getDate(),X[u+16>>2]=y.getMonth(),X[u+20>>2]=y.getFullYear()-1900,X[u+24>>2]=y.getDay();var C=Lu(y)|0;X[u+28>>2]=C,X[u+36>>2]=-(y.getTimezoneOffset()*60);var U=new Date(y.getFullYear(),0,1),B=new Date(y.getFullYear(),6,1).getTimezoneOffset(),ie=U.getTimezoneOffset(),fe=(B!=ie&&y.getTimezoneOffset()==Math.min(ie,B))|0;X[u+32>>2]=fe}function Iu(s,o,u,p,y,C,U){var B=Us(C,U);try{var ie=dt.getStreamFromFD(y);u&2&&dt.doMsync(s,ie,o,p,B)}catch(fe){if(typeof M>"u"||fe.name!=="ErrnoError")throw fe;return-fe.errno}}var Nu=(s,o,u,p)=>{var y=new Date().getFullYear(),C=new Date(y,0,1),U=new Date(y,6,1),B=C.getTimezoneOffset(),ie=U.getTimezoneOffset(),fe=Math.max(B,ie);re[s>>2]=fe*60,X[o>>2]=+(B!=ie);var Ce=Ie=>{var $e=Ie>=0?"-":"+",ut=Math.abs(Ie),Xt=String(Math.floor(ut/60)).padStart(2,"0"),Dt=String(ut%60).padStart(2,"0");return`UTC${$e}${Xt}${Dt}`},Le=Ce(B),Xe=Ce(ie);ie<B?(Ti(Le,u,17),Ti(Xe,p,17)):(Ti(Le,p,17),Ti(Xe,u,17))},Fu=()=>Date.now();function Ou(){return new Error().stack.toString()}var wi=s=>{wi.shown||(wi.shown={}),wi.shown[s]||(wi.shown[s]=1,v&&(s="warning: "+s),E(s))};function Bu(s){var o=Ou(),u=o.lastIndexOf("_emscripten_log"),p=o.lastIndexOf("_emscripten_get_callstack"),y=o.indexOf(`
`,Math.max(u,p))+1;o=o.slice(y),s&8&&typeof emscripten_source_map>"u"&&(wi('Source map information is not available, emscripten_log with EM_LOG_C_STACK will be ignored. Build with "--pre-js $EMSCRIPTEN/src/emscripten-source-map.min.js" linker flag to add source map loading to code.'),s^=8,s|=16);var C=o.split(`
`);o="";var U=new RegExp("\\s*(.*?)@(.*?):([0-9]+):([0-9]+)"),B=new RegExp("\\s*(.*?)@(.*):(.*)(:(.*))?"),ie=new RegExp("\\s*at (.*?) \\((.*):(.*):(.*)\\)");for(var fe in C){var Ce=C[fe],Le="",Xe="",Ie=0,$e=0,ut=ie.exec(Ce);if(ut&&ut.length==5)Le=ut[1],Xe=ut[2],Ie=ut[3],$e=ut[4];else if(ut=U.exec(Ce)||B.exec(Ce),ut&&ut.length>=4)Le=ut[1],Xe=ut[2],Ie=ut[3],$e=ut[4]|0;else{o+=Ce+`
`;continue}var Xt=!1;if(s&8){var Dt=emscripten_source_map.originalPositionFor({line:Ie,column:$e});Xt=Dt==null?void 0:Dt.source,Xt&&(s&64&&(Dt.source=Dt.source.substring(Dt.source.replace(/\\/g,"/").lastIndexOf("/")+1)),o+=`    at ${Le} (${Dt.source}:${Dt.line}:${Dt.column})
`)}(s&16||!Xt)&&(s&64&&(Xe=Xe.substring(Xe.replace(/\\/g,"/").lastIndexOf("/")+1)),o+=(Xt?`     = ${Le}`:`    at ${Le}`)+` (${Xe}:${Ie}:${$e})
`)}return o=o.replace(/\s+$/,""),o}function ku(s,o,u){var p=Bu(s);if(!o||u<=0)return Ge(p)+1;var y=Ti(p,o,u);return y+1}var Fo=()=>2147483648,zu=()=>Fo(),Hu=s=>{var o=k.buffer,u=(s-o.byteLength+65535)/65536|0;try{return k.grow(u),he(),1}catch{}},Gu=s=>{var o=O.length;s>>>=0;var u=Fo();if(s>u)return!1;for(var p=1;p<=4;p*=2){var y=o*(1+.2/p);y=Math.min(y,s+100663296);var C=Math.min(u,Re(Math.max(s,y),65536)),U=Hu(C);if(U)return!0}return!1},Is={},Vu=()=>A||"./this.program",tr=()=>{if(!tr.strings){var s=(typeof navigator=="object"&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",o={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:s,_:Vu()};for(var u in Is)Is[u]===void 0?delete o[u]:o[u]=Is[u];var p=[];for(var u in o)p.push(`${u}=${o[u]}`);tr.strings=p}return tr.strings},Wu=(s,o)=>{for(var u=0;u<s.length;++u)$[o++]=s.charCodeAt(u);$[o]=0},Xu=(s,o)=>{var u=0;return tr().forEach((p,y)=>{var C=o+u;re[s+y*4>>2]=C,Wu(p,C),u+=p.length+1}),0},Yu=(s,o)=>{var u=tr();re[s>>2]=u.length;var p=0;return u.forEach(y=>p+=y.length+1),re[o>>2]=p,0},qu=s=>{S(s,new me(s))},$u=(s,o)=>{qu(s)},Ku=$u;function Zu(s){try{var o=dt.getStreamFromFD(s);return M.close(o),0}catch(u){if(typeof M>"u"||u.name!=="ErrnoError")throw u;return u.errno}}var Ju=(s,o,u,p)=>{for(var y=0,C=0;C<u;C++){var U=re[o>>2],B=re[o+4>>2];o+=8;var ie=M.read(s,$,U,B,p);if(ie<0)return-1;if(y+=ie,ie<B)break}return y};function ju(s,o,u,p){try{var y=dt.getStreamFromFD(s),C=Ju(y,o,u);return re[p>>2]=C,0}catch(U){if(typeof M>"u"||U.name!=="ErrnoError")throw U;return U.errno}}function Qu(s,o,u,p,y){var C=Us(o,u);try{if(isNaN(C))return 61;var U=dt.getStreamFromFD(s);return M.llseek(U,C,p),te=[U.position>>>0,(W=U.position,+Math.abs(W)>=1?W>0?+Math.floor(W/4294967296)>>>0:~~+Math.ceil((W-+(~~W>>>0))/4294967296)>>>0:0)],X[y>>2]=te[0],X[y+4>>2]=te[1],U.getdents&&C===0&&p===0&&(U.getdents=null),0}catch(B){if(typeof M>"u"||B.name!=="ErrnoError")throw B;return B.errno}}var eh=(s,o,u,p)=>{for(var y=0,C=0;C<u;C++){var U=re[o>>2],B=re[o+4>>2];o+=8;var ie=M.write(s,$,U,B,p);if(ie<0)return-1;if(y+=ie,ie<B)break}return y};function th(s,o,u,p){try{var y=dt.getStreamFromFD(s),C=eh(y,o,u);return re[p>>2]=C,0}catch(U){if(typeof M>"u"||U.name!=="ErrnoError")throw U;return U.errno}}M.createPreloadedFile=dn,M.staticInit(),Pr(),Te=c.BindingError=class extends Error{constructor(o){super(o),this.name="BindingError"}},be=c.InternalError=class extends Error{constructor(o){super(o),this.name="InternalError"}},De(),Po=c.UnboundTypeError=qc(Error,"UnboundTypeError");var nh={M:yr,N:br,h:Tr,I:wr,Q:yi,F:Ar,G:bi,j:Rr,B:Cr,H:ws,C:As,A:Rs,w:Cs,V:_t,U:pn,n:ei,f:Zc,b:jc,a:Qc,m:eu,i:ou,W:lu,J:uu,x:du,L:fu,e:pu,q:_u,T:xt,u:gu,p:Su,k:Mu,Y:Eu,X:yu,r:bu,Z:Tu,o:wu,c:Au,d:Ru,t:Uu,s:Iu,O:Nu,K:Fu,R:ku,z:zu,y:Gu,D:Xu,E:Yu,S:Ku,g:Zu,P:ju,v:Qu,l:th},Wt=q(),Oo=s=>(Oo=Wt.aa)(s),Ns=s=>(Ns=Wt.ca)(s),Gn=s=>(Gn=Wt.da)(s),Bo=s=>(Bo=Wt.ea)(s),ko=(s,o)=>(ko=Wt.fa)(s,o),zo=()=>(zo=Wt.ga)();c.dynCall_viijii=(s,o,u,p,y,C,U)=>(c.dynCall_viijii=Wt.ha)(s,o,u,p,y,C,U),c.dynCall_viiiiji=(s,o,u,p,y,C,U,B)=>(c.dynCall_viiiiji=Wt.ia)(s,o,u,p,y,C,U,B),c.dynCall_jiji=(s,o,u,p,y)=>(c.dynCall_jiji=Wt.ja)(s,o,u,p,y),c.dynCall_iiiiij=(s,o,u,p,y,C,U)=>(c.dynCall_iiiiij=Wt.ka)(s,o,u,p,y,C,U),c.dynCall_iiiiijj=(s,o,u,p,y,C,U,B,ie)=>(c.dynCall_iiiiijj=Wt.la)(s,o,u,p,y,C,U,B,ie),c.dynCall_iiiiiijj=(s,o,u,p,y,C,U,B,ie,fe)=>(c.dynCall_iiiiiijj=Wt.ma)(s,o,u,p,y,C,U,B,ie,fe);var Ir,Ho;Tt=function s(){Ir||Go(),Ir||(Tt=s)};function Go(){if(Ve>0||!Ho&&(Ho=1,it(),Ve>0))return;function s(){var o;Ir||(Ir=1,c.calledRun=1,!z&&(ae(),d(c),(o=c.onRuntimeInitialized)==null||o.call(c),ue()))}c.setStatus?(c.setStatus("Running..."),setTimeout(()=>{setTimeout(()=>c.setStatus(""),1),s()},1)):s()}if(c.preInit)for(typeof c.preInit=="function"&&(c.preInit=[c.preInit]);c.preInit.length>0;)c.preInit.pop()();return Go(),l=m,l})})();i.exports=t})(ma)),ma.exports}var S0=x0();const M0=rh(S0);let ga=null;function E0(){return ga||(ga=M0({locateFile:()=>"/occt/occt-import-js.wasm"})),ga}function y0(i){var r;const e=new sn;e.setAttribute("position",new $t(i.attributes.position.array,3)),(r=i.attributes.normal)!=null&&r.array?e.setAttribute("normal",new $t(i.attributes.normal.array,3)):e.computeVertexNormals();const t=i.index.array,n=Array.isArray(t[0])?t.flat():Array.from(t);return e.setIndex(n),e}function A0({fileUrl:i,fileType:e,fileName:t,onClose:n}){const r=on.useRef(null),[a,l]=on.useState(!0),[c,d]=on.useState(null),[h,m]=on.useState(!1),[g,f]=on.useState(!1),[v,T]=on.useState(0),[A,S]=on.useState(0),_=on.useRef(null),I=on.useRef(null);on.useEffect(()=>{const w=P=>{P.key==="Escape"&&n()};return window.addEventListener("keydown",w),()=>window.removeEventListener("keydown",w)},[n]),on.useEffect(()=>{const w=r.current;if(!w)return;let P=!1,R=null,N=0;const E=async()=>{var k;try{const z=new wd,Y=new _n(45,1,.1,1e5);Y.position.set(180,140,180),R=new t0({antialias:!0,alpha:!0}),R.setPixelRatio(Math.min(window.devicePixelRatio,2)),w.appendChild(R.domElement);const $=new i0(Y,R.domElement);$.enableDamping=!0,$.dampingFactor=.08,_.current=$,z.add(new Zd(16777215,1710623,1.1));const O=new yl(16777215,1.6);O.position.set(200,300,150),z.add(O);const K=new yl(16762624,.35);K.position.set(-200,100,-150),z.add(K);const ne=new tf(400,40,3816002,2302760);ne.material.transparent=!0,ne.material.opacity=.5,z.add(ne);const X=new hr;I.current=X,z.add(X);const re=await fetch(i);if(!re.ok)throw new Error(`Could not download the model file (HTTP ${re.status})`);const se=await re.arrayBuffer();if(P)return;let ce=0,he=0;if(e==="step"){const ye=await E0();if(P)return;const He=ye.ReadStepFile(new Uint8Array(se),null);if(!(He!=null&&He.success)||!((k=He.meshes)!=null&&k.length))throw new Error("Could not parse this STEP file — it may be corrupt or use unsupported entities.");for(const Ae of He.meshes){const Ve=y0(Ae),Tt=Array.isArray(Ae.color)?new tt(Ae.color[0],Ae.color[1],Ae.color[2]):new tt(12106948),Qe=new _l({color:Tt,metalness:.35,roughness:.45,side:bn});X.add(new Rn(Ve,Qe)),ce+=1,he+=Ve.index?Ve.index.count/3:0}}else{const ye=new _0().parse(se);ye.computeVertexNormals();const He=new _l({color:12106948,metalness:.35,roughness:.45,side:bn});X.add(new Rn(ye,He)),ce=1,he=ye.index?ye.index.count/3:ye.attributes.position.count/3}const Oe=new Ji().setFromObject(X),Be=Oe.getCenter(new J),ht=Oe.getSize(new J),nt=Math.max(ht.x,ht.y,ht.z,1);X.position.sub(Be),Oe.setFromObject(X),ne.position.y=Oe.min.y-.5;const it=nt*1.9/Math.tan(vc.degToRad(Y.fov/2));if(Y.position.set(it*.75,it*.55,it*.75),Y.near=it/1e3,Y.far=it*20,Y.updateProjectionMatrix(),$.target.set(0,0,0),$.update(),P)return;T(ce),S(Math.round(he)),l(!1);const ae=()=>{const ye=w.clientWidth,He=w.clientHeight;Y.aspect=ye/He,Y.updateProjectionMatrix(),R==null||R.setSize(ye,He)};ae(),window.addEventListener("resize",ae);const ue=()=>{N=requestAnimationFrame(ue),$.update(),R==null||R.render(z,Y)};return ue(),()=>window.removeEventListener("resize",ae)}catch(z){P||(console.error("CAD viewer error:",z),d((z==null?void 0:z.message)||"Failed to load the 3D model."),l(!1))}};let L;return E().then(k=>{L=k}),()=>{var k,z;P=!0,cancelAnimationFrame(N),L&&L(),(k=_.current)==null||k.dispose(),_.current=null,(z=I.current)==null||z.traverse(Y=>{var $,O;(O=($=Y.geometry)==null?void 0:$.dispose)==null||O.call($),(Array.isArray(Y.material)?Y.material:[Y.material]).forEach(K=>{var ne;return(ne=K==null?void 0:K.dispose)==null?void 0:ne.call(K)})}),I.current=null,R&&(R.dispose(),R.domElement.remove(),R=null)}},[i,e]),on.useEffect(()=>{_.current&&(_.current.autoRotate=h)},[h]),on.useEffect(()=>{var w;(w=I.current)==null||w.traverse(P=>{P.isMesh&&(Array.isArray(P.material)?P.material:[P.material]).forEach(R=>{R.wireframe=g})})},[g]);const H=()=>{var w;(w=_.current)==null||w.reset()};return bt.jsxs("div",{className:"fixed inset-0 z-[80] bg-black/90 backdrop-blur-sm flex flex-col",role:"dialog","aria-modal":"true",children:[bt.jsxs("div",{className:"flex items-center gap-3 px-4 sm:px-6 py-3 border-b border-text-base/10",children:[bt.jsx("div",{className:"rounded-xl bg-accent/12 p-2",children:bt.jsx(sh,{className:"w-5 h-5 text-accent"})}),bt.jsxs("div",{className:"min-w-0 flex-1",children:[bt.jsx("h3",{className:"text-text-base font-bold truncate",children:t}),bt.jsxs("p",{className:"text-[11px] text-text-muted uppercase tracking-widest",children:[e==="step"?"STEP model":"STL model",v>0&&` · ${v} part${v===1?"":"s"} · ${A.toLocaleString()} triangles`]})]}),bt.jsx("button",{onClick:()=>m(w=>!w),title:"Auto-rotate",className:`p-2 rounded-xl border transition-all ${h?"bg-accent text-accent-ink border-accent":"border-text-base/10 text-text-muted hover:text-text-base hover:bg-text-base/5"}`,children:bt.jsx(dh,{className:"w-4 h-4"})}),bt.jsx("button",{onClick:()=>f(w=>!w),title:"Wireframe",className:`p-2 rounded-xl border transition-all ${g?"bg-accent text-accent-ink border-accent":"border-text-base/10 text-text-muted hover:text-text-base hover:bg-text-base/5"}`,children:bt.jsx(uh,{className:"w-4 h-4"})}),bt.jsx("button",{onClick:H,title:"Reset view",className:"p-2 rounded-xl border border-text-base/10 text-text-muted hover:text-text-base hover:bg-text-base/5 transition-all",children:bt.jsx(ah,{className:"w-4 h-4"})}),bt.jsx("button",{onClick:n,title:"Close (Esc)",className:"p-2 rounded-xl border border-text-base/10 text-text-muted hover:text-text-base hover:bg-text-base/5 transition-all",children:bt.jsx(oh,{className:"w-4 h-4"})})]}),bt.jsxs("div",{className:"relative flex-1 min-h-0",children:[bt.jsx("div",{ref:r,className:"absolute inset-0 [&>canvas]:w-full [&>canvas]:h-full [&>canvas]:block"}),a&&bt.jsxs("div",{className:"absolute inset-0 flex flex-col items-center justify-center gap-3 text-text-muted",children:[bt.jsx("div",{className:"w-10 h-10 rounded-full border-2 border-text-base/10 border-t-accent animate-spin"}),bt.jsx("p",{className:"text-sm",children:"Loading 3D model…"}),e==="step"&&bt.jsx("p",{className:"text-xs text-text-muted/70",children:"Parsing STEP geometry in your browser"})]}),c&&bt.jsx("div",{className:"absolute inset-0 flex items-center justify-center p-6",children:bt.jsxs("div",{className:"max-w-md text-center space-y-3",children:[bt.jsx(lh,{className:"w-10 h-10 text-warning mx-auto"}),bt.jsx("p",{className:"text-text-base font-bold",children:"Couldn't load this model"}),bt.jsx("p",{className:"text-sm text-text-muted",children:c})]})}),!a&&!c&&bt.jsx("div",{className:"absolute bottom-4 left-1/2 -translate-x-1/2 pointer-events-none",children:bt.jsx("p",{className:"text-[11px] text-text-muted/80 bg-black/50 border border-text-base/10 rounded-full px-4 py-1.5 whitespace-nowrap",children:"Drag to orbit · Scroll to zoom · Right-drag to pan"})})]})]})}export{A0 as default,y0 as meshFromOcct};
