(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const vi="170",lu=0,Wo=1,cu=2,pc=1,mc=2,Dn=3,Fn=0,_t=1,Ht=2,Ft=0,Vi=1,Mr=2,Yo=3,Xo=4,uu=5,ui=100,hu=101,du=102,fu=103,pu=104,mu=200,gu=201,vu=202,xu=203,_a=204,Ea=205,Mu=206,Au=207,Su=208,wu=209,yu=210,_u=211,Eu=212,Tu=213,bu=214,Ta=0,Ar=1,ba=2,Zi=3,Ca=4,Ra=5,Da=6,Pa=7,gc=0,Cu=1,Ru=2,Bn=0,Du=1,Pu=2,Iu=3,Lu=4,Bu=5,Uu=6,Fu=7,vc=300,Qi=301,qi=302,Ia=303,La=304,br=306,Bt=1e3,$t=1001,Ba=1002,Nt=1003,Nu=1004,Is=1005,ut=1006,Br=1007,vn=1008,Lt=1009,xc=1010,Mc=1011,As=1012,vo=1013,Jn=1014,dn=1015,Nn=1016,xo=1017,Mo=1018,fi=1020,Ac=35902,Sc=1021,wc=1022,Et=1023,yc=1024,_c=1025,di=1026,pi=1027,Ao=1028,So=1029,Ec=1030,wo=1031,yo=1033,fr=33776,pr=33777,mr=33778,gr=33779,Ua=35840,Fa=35841,Na=35842,Oa=35843,za=36196,ka=37492,Ga=37496,Ha=37808,Va=37809,Wa=37810,Ya=37811,Xa=37812,Za=37813,Qa=37814,qa=37815,Ka=37816,Ja=37817,ja=37818,$a=37819,eo=37820,to=37821,vr=36492,no=36494,io=36495,Tc=36283,so=36284,ro=36285,ao=36286,xi=3200,Ou=3201,bc=0,zu=1,gn="",et="srgb",jn="srgb-linear",Cr="linear",lt="srgb",_i=7680,Zo=519,ku=512,Gu=513,Hu=514,Cc=515,Vu=516,Wu=517,Yu=518,Xu=519,Qo=35044,qo="300 es",Ln=2e3,Sr=2001;class On{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Ot=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ko=1234567;const Wi=Math.PI/180,Ki=180/Math.PI;function Mi(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ot[n&255]+Ot[n>>8&255]+Ot[n>>16&255]+Ot[n>>24&255]+"-"+Ot[e&255]+Ot[e>>8&255]+"-"+Ot[e>>16&15|64]+Ot[e>>24&255]+"-"+Ot[t&63|128]+Ot[t>>8&255]+"-"+Ot[t>>16&255]+Ot[t>>24&255]+Ot[i&255]+Ot[i>>8&255]+Ot[i>>16&255]+Ot[i>>24&255]).toLowerCase()}function yt(n,e,t){return Math.max(e,Math.min(t,n))}function _o(n,e){return(n%e+e)%e}function Zu(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function Qu(n,e,t){return n!==e?(t-n)/(e-n):0}function gs(n,e,t){return(1-t)*n+t*e}function qu(n,e,t,i){return gs(n,e,1-Math.exp(-t*i))}function Ku(n,e=1){return e-Math.abs(_o(n,e*2)-e)}function Ju(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function ju(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function $u(n,e){return n+Math.floor(Math.random()*(e-n+1))}function eh(n,e){return n+Math.random()*(e-n)}function th(n){return n*(.5-Math.random())}function nh(n){n!==void 0&&(Ko=n);let e=Ko+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ih(n){return n*Wi}function sh(n){return n*Ki}function rh(n){return(n&n-1)===0&&n!==0}function ah(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function oh(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function lh(n,e,t,i,s){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+i)/2),u=a((e+i)/2),h=r((e-i)/2),d=a((e-i)/2),f=r((i-e)/2),m=a((i-e)/2);switch(s){case"XYX":n.set(o*u,l*h,l*d,o*c);break;case"YZY":n.set(l*d,o*u,l*h,o*c);break;case"ZXZ":n.set(l*h,l*d,o*u,o*c);break;case"XZX":n.set(o*u,l*m,l*f,o*c);break;case"YXY":n.set(l*f,o*u,l*m,o*c);break;case"ZYZ":n.set(l*m,l*f,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ki(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Vt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const me={DEG2RAD:Wi,RAD2DEG:Ki,generateUUID:Mi,clamp:yt,euclideanModulo:_o,mapLinear:Zu,inverseLerp:Qu,lerp:gs,damp:qu,pingpong:Ku,smoothstep:Ju,smootherstep:ju,randInt:$u,randFloat:eh,randFloatSpread:th,seededRandom:nh,degToRad:ih,radToDeg:sh,isPowerOfTwo:rh,ceilPowerOfTwo:ah,floorPowerOfTwo:oh,setQuaternionFromProperEuler:lh,normalize:Vt,denormalize:ki};class de{constructor(e=0,t=0){de.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(yt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xe{constructor(e,t,i,s,r,a,o,l,c){Xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],h=i[7],d=i[2],f=i[5],m=i[8],v=s[0],g=s[3],p=s[6],A=s[1],M=s[4],x=s[7],C=s[2],E=s[5],y=s[8];return r[0]=a*v+o*A+l*C,r[3]=a*g+o*M+l*E,r[6]=a*p+o*x+l*y,r[1]=c*v+u*A+h*C,r[4]=c*g+u*M+h*E,r[7]=c*p+u*x+h*y,r[2]=d*v+f*A+m*C,r[5]=d*g+f*M+m*E,r[8]=d*p+f*x+m*y,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*r*u+i*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,d=o*l-u*r,f=c*r-a*l,m=t*h+i*d+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/m;return e[0]=h*v,e[1]=(s*c-u*i)*v,e[2]=(o*i-s*a)*v,e[3]=d*v,e[4]=(u*t-s*l)*v,e[5]=(s*r-o*t)*v,e[6]=f*v,e[7]=(i*l-c*t)*v,e[8]=(a*t-i*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ur.makeScale(e,t)),this}rotate(e){return this.premultiply(Ur.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ur.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ur=new Xe;function Rc(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function wr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function ch(){const n=wr("canvas");return n.style.display="block",n}const Jo={};function ps(n){n in Jo||(Jo[n]=!0,console.warn(n))}function uh(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function hh(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function dh(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Je={enabled:!0,workingColorSpace:jn,spaces:{},convert:function(n,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===lt&&(n.r=Un(n.r),n.g=Un(n.g),n.b=Un(n.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===lt&&(n.r=Yi(n.r),n.g=Yi(n.g),n.b=Yi(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===gn?Cr:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,t){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Un(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Yi(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const jo=[.64,.33,.3,.6,.15,.06],$o=[.2126,.7152,.0722],el=[.3127,.329],tl=new Xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),nl=new Xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Je.define({[jn]:{primaries:jo,whitePoint:el,transfer:Cr,toXYZ:tl,fromXYZ:nl,luminanceCoefficients:$o,workingColorSpaceConfig:{unpackColorSpace:et},outputColorSpaceConfig:{drawingBufferColorSpace:et}},[et]:{primaries:jo,whitePoint:el,transfer:lt,toXYZ:tl,fromXYZ:nl,luminanceCoefficients:$o,outputColorSpaceConfig:{drawingBufferColorSpace:et}}});let Ei;class fh{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ei===void 0&&(Ei=wr("canvas")),Ei.width=e.width,Ei.height=e.height;const i=Ei.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Ei}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=wr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Un(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Un(t[i]/255)*255):t[i]=Un(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ph=0;class Dc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ph++}),this.uuid=Mi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Fr(s[a].image)):r.push(Fr(s[a]))}else r=Fr(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function Fr(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?fh.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let mh=0;class wt extends On{constructor(e=wt.DEFAULT_IMAGE,t=wt.DEFAULT_MAPPING,i=$t,s=$t,r=ut,a=vn,o=Et,l=Lt,c=wt.DEFAULT_ANISOTROPY,u=gn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:mh++}),this.uuid=Mi(),this.name="",this.source=new Dc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new de(0,0),this.repeat=new de(1,1),this.center=new de(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==vc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Bt:e.x=e.x-Math.floor(e.x);break;case $t:e.x=e.x<0?0:1;break;case Ba:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Bt:e.y=e.y-Math.floor(e.y);break;case $t:e.y=e.y<0?0:1;break;case Ba:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}wt.DEFAULT_IMAGE=null;wt.DEFAULT_MAPPING=vc;wt.DEFAULT_ANISOTROPY=1;class at{constructor(e=0,t=0,i=0,s=1){at.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],m=l[9],v=l[2],g=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-v)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+v)<.1&&Math.abs(m+g)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,x=(f+1)/2,C=(p+1)/2,E=(u+d)/4,y=(h+v)/4,T=(m+g)/4;return M>x&&M>C?M<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(M),s=E/i,r=y/i):x>C?x<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),i=E/s,r=T/s):C<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),i=y/r,s=T/r),this.set(i,s,r,t),this}let A=Math.sqrt((g-m)*(g-m)+(h-v)*(h-v)+(d-u)*(d-u));return Math.abs(A)<.001&&(A=1),this.x=(g-m)/A,this.y=(h-v)/A,this.z=(d-u)/A,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class gh extends On{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new at(0,0,e,t),this.scissorTest=!1,this.viewport=new at(0,0,e,t);const s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ut,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new wt(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Dc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Mt extends gh{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Pc extends wt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=$t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class vh extends wt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=$t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class bs{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3];const d=r[a+0],f=r[a+1],m=r[a+2],v=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=m,e[t+3]=v;return}if(h!==v||l!==d||c!==f||u!==m){let g=1-o;const p=l*d+c*f+u*m+h*v,A=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const C=Math.sqrt(M),E=Math.atan2(C,p*A);g=Math.sin(g*E)/C,o=Math.sin(o*E)/C}const x=o*A;if(l=l*g+d*x,c=c*g+f*x,u=u*g+m*x,h=h*g+v*x,g===1-o){const C=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=C,c*=C,u*=C,h*=C}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,s,r,a){const o=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[a],d=r[a+1],f=r[a+2],m=r[a+3];return e[t]=o*m+u*h+l*f-c*d,e[t+1]=l*m+u*d+c*h-o*f,e[t+2]=c*m+u*f+o*d-l*h,e[t+3]=u*m-o*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(s/2),h=o(r/2),d=l(i/2),f=l(s/2),m=l(r/2);switch(a){case"XYZ":this._x=d*u*h+c*f*m,this._y=c*f*h-d*u*m,this._z=c*u*m+d*f*h,this._w=c*u*h-d*f*m;break;case"YXZ":this._x=d*u*h+c*f*m,this._y=c*f*h-d*u*m,this._z=c*u*m-d*f*h,this._w=c*u*h+d*f*m;break;case"ZXY":this._x=d*u*h-c*f*m,this._y=c*f*h+d*u*m,this._z=c*u*m+d*f*h,this._w=c*u*h-d*f*m;break;case"ZYX":this._x=d*u*h-c*f*m,this._y=c*f*h+d*u*m,this._z=c*u*m-d*f*h,this._w=c*u*h+d*f*m;break;case"YZX":this._x=d*u*h+c*f*m,this._y=c*f*h+d*u*m,this._z=c*u*m-d*f*h,this._w=c*u*h-d*f*m;break;case"XZY":this._x=d*u*h-c*f*m,this._y=c*f*h-d*u*m,this._z=c*u*m+d*f*h,this._w=c*u*h+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=i+o+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(i>o&&i>h){const f=2*Math.sqrt(1+i-o-h);this._w=(u-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>h){const f=2*Math.sqrt(1+o-i-h);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-i-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(yt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-i*c,this._z=r*u+a*c+i*l-s*o,this._w=a*u-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+i*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*i+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=a*h+this._w*d,this._x=i*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,t=0,i=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(il.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(il.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),u=2*(o*t-r*s),h=2*(r*i-a*t);return this.x=t+l*c+a*h-o*u,this.y=i+l*u+o*c-r*h,this.z=s+l*h+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Nr.copy(this).projectOnVector(e),this.sub(Nr)}reflect(e){return this.sub(Nr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(yt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Nr=new N,il=new bs;class Ai{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ln.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ln.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=ln.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,ln):ln.fromBufferAttribute(r,a),ln.applyMatrix4(e.matrixWorld),this.expandByPoint(ln);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ls.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ls.copy(i.boundingBox)),Ls.applyMatrix4(e.matrixWorld),this.union(Ls)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ln),ln.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ts),Bs.subVectors(this.max,ts),Ti.subVectors(e.a,ts),bi.subVectors(e.b,ts),Ci.subVectors(e.c,ts),Hn.subVectors(bi,Ti),Vn.subVectors(Ci,bi),ei.subVectors(Ti,Ci);let t=[0,-Hn.z,Hn.y,0,-Vn.z,Vn.y,0,-ei.z,ei.y,Hn.z,0,-Hn.x,Vn.z,0,-Vn.x,ei.z,0,-ei.x,-Hn.y,Hn.x,0,-Vn.y,Vn.x,0,-ei.y,ei.x,0];return!Or(t,Ti,bi,Ci,Bs)||(t=[1,0,0,0,1,0,0,0,1],!Or(t,Ti,bi,Ci,Bs))?!1:(Us.crossVectors(Hn,Vn),t=[Us.x,Us.y,Us.z],Or(t,Ti,bi,Ci,Bs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ln).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ln).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_n),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const _n=[new N,new N,new N,new N,new N,new N,new N,new N],ln=new N,Ls=new Ai,Ti=new N,bi=new N,Ci=new N,Hn=new N,Vn=new N,ei=new N,ts=new N,Bs=new N,Us=new N,ti=new N;function Or(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){ti.fromArray(n,r);const o=s.x*Math.abs(ti.x)+s.y*Math.abs(ti.y)+s.z*Math.abs(ti.z),l=e.dot(ti),c=t.dot(ti),u=i.dot(ti);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const xh=new Ai,ns=new N,zr=new N;class Si{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):xh.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ns.subVectors(e,this.center);const t=ns.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(ns,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(zr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ns.copy(e.center).add(zr)),this.expandByPoint(ns.copy(e.center).sub(zr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const En=new N,kr=new N,Fs=new N,Wn=new N,Gr=new N,Ns=new N,Hr=new N;class Eo{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,En)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=En.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(En.copy(this.origin).addScaledVector(this.direction,t),En.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){kr.copy(e).add(t).multiplyScalar(.5),Fs.copy(t).sub(e).normalize(),Wn.copy(this.origin).sub(kr);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Fs),o=Wn.dot(this.direction),l=-Wn.dot(Fs),c=Wn.lengthSq(),u=Math.abs(1-a*a);let h,d,f,m;if(u>0)if(h=a*l-o,d=a*o-l,m=r*u,h>=0)if(d>=-m)if(d<=m){const v=1/u;h*=v,d*=v,f=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d<=-m?(h=Math.max(0,-(-a*r+o)),d=h>0?-r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c):d<=m?(h=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(h=Math.max(0,-(a*r+o)),d=h>0?r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c);else d=a>0?-r:r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(kr).addScaledVector(Fs,d),f}intersectSphere(e,t){En.subVectors(e.center,this.origin);const i=En.dot(this.direction),s=En.dot(En)-i*i,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,En)!==null}intersectTriangle(e,t,i,s,r){Gr.subVectors(t,e),Ns.subVectors(i,e),Hr.crossVectors(Gr,Ns);let a=this.direction.dot(Hr),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Wn.subVectors(this.origin,e);const l=o*this.direction.dot(Ns.crossVectors(Wn,Ns));if(l<0)return null;const c=o*this.direction.dot(Gr.cross(Wn));if(c<0||l+c>a)return null;const u=-o*Wn.dot(Hr);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class it{constructor(e,t,i,s,r,a,o,l,c,u,h,d,f,m,v,g){it.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,u,h,d,f,m,v,g)}set(e,t,i,s,r,a,o,l,c,u,h,d,f,m,v,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=m,p[11]=v,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new it().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/Ri.setFromMatrixColumn(e,0).length(),r=1/Ri.setFromMatrixColumn(e,1).length(),a=1/Ri.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=a*u,f=a*h,m=o*u,v=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+m*c,t[5]=d-v*c,t[9]=-o*l,t[2]=v-d*c,t[6]=m+f*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*u,f=l*h,m=c*u,v=c*h;t[0]=d+v*o,t[4]=m*o-f,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=f*o-m,t[6]=v+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*u,f=l*h,m=c*u,v=c*h;t[0]=d-v*o,t[4]=-a*h,t[8]=m+f*o,t[1]=f+m*o,t[5]=a*u,t[9]=v-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*u,f=a*h,m=o*u,v=o*h;t[0]=l*u,t[4]=m*c-f,t[8]=d*c+v,t[1]=l*h,t[5]=v*c+d,t[9]=f*c-m,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,f=a*c,m=o*l,v=o*c;t[0]=l*u,t[4]=v-d*h,t[8]=m*h+f,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=f*h+m,t[10]=d-v*h}else if(e.order==="XZY"){const d=a*l,f=a*c,m=o*l,v=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+v,t[5]=a*u,t[9]=f*h-m,t[2]=m*h-f,t[6]=o*u,t[10]=v*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Mh,e,Ah)}lookAt(e,t,i){const s=this.elements;return Kt.subVectors(e,t),Kt.lengthSq()===0&&(Kt.z=1),Kt.normalize(),Yn.crossVectors(i,Kt),Yn.lengthSq()===0&&(Math.abs(i.z)===1?Kt.x+=1e-4:Kt.z+=1e-4,Kt.normalize(),Yn.crossVectors(i,Kt)),Yn.normalize(),Os.crossVectors(Kt,Yn),s[0]=Yn.x,s[4]=Os.x,s[8]=Kt.x,s[1]=Yn.y,s[5]=Os.y,s[9]=Kt.y,s[2]=Yn.z,s[6]=Os.z,s[10]=Kt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],h=i[5],d=i[9],f=i[13],m=i[2],v=i[6],g=i[10],p=i[14],A=i[3],M=i[7],x=i[11],C=i[15],E=s[0],y=s[4],T=s[8],S=s[12],w=s[1],_=s[5],D=s[9],I=s[13],F=s[2],k=s[6],z=s[10],V=s[14],G=s[3],J=s[7],q=s[11],re=s[15];return r[0]=a*E+o*w+l*F+c*G,r[4]=a*y+o*_+l*k+c*J,r[8]=a*T+o*D+l*z+c*q,r[12]=a*S+o*I+l*V+c*re,r[1]=u*E+h*w+d*F+f*G,r[5]=u*y+h*_+d*k+f*J,r[9]=u*T+h*D+d*z+f*q,r[13]=u*S+h*I+d*V+f*re,r[2]=m*E+v*w+g*F+p*G,r[6]=m*y+v*_+g*k+p*J,r[10]=m*T+v*D+g*z+p*q,r[14]=m*S+v*I+g*V+p*re,r[3]=A*E+M*w+x*F+C*G,r[7]=A*y+M*_+x*k+C*J,r[11]=A*T+M*D+x*z+C*q,r[15]=A*S+M*I+x*V+C*re,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],m=e[3],v=e[7],g=e[11],p=e[15];return m*(+r*l*h-s*c*h-r*o*d+i*c*d+s*o*f-i*l*f)+v*(+t*l*f-t*c*d+r*a*d-s*a*f+s*c*u-r*l*u)+g*(+t*c*h-t*o*f-r*a*h+i*a*f+r*o*u-i*c*u)+p*(-s*o*u-t*l*h+t*o*d+s*a*h-i*a*d+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],m=e[12],v=e[13],g=e[14],p=e[15],A=h*g*c-v*d*c+v*l*f-o*g*f-h*l*p+o*d*p,M=m*d*c-u*g*c-m*l*f+a*g*f+u*l*p-a*d*p,x=u*v*c-m*h*c+m*o*f-a*v*f-u*o*p+a*h*p,C=m*h*l-u*v*l-m*o*d+a*v*d+u*o*g-a*h*g,E=t*A+i*M+s*x+r*C;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const y=1/E;return e[0]=A*y,e[1]=(v*d*r-h*g*r-v*s*f+i*g*f+h*s*p-i*d*p)*y,e[2]=(o*g*r-v*l*r+v*s*c-i*g*c-o*s*p+i*l*p)*y,e[3]=(h*l*r-o*d*r-h*s*c+i*d*c+o*s*f-i*l*f)*y,e[4]=M*y,e[5]=(u*g*r-m*d*r+m*s*f-t*g*f-u*s*p+t*d*p)*y,e[6]=(m*l*r-a*g*r-m*s*c+t*g*c+a*s*p-t*l*p)*y,e[7]=(a*d*r-u*l*r+u*s*c-t*d*c-a*s*f+t*l*f)*y,e[8]=x*y,e[9]=(m*h*r-u*v*r-m*i*f+t*v*f+u*i*p-t*h*p)*y,e[10]=(a*v*r-m*o*r+m*i*c-t*v*c-a*i*p+t*o*p)*y,e[11]=(u*o*r-a*h*r-u*i*c+t*h*c+a*i*f-t*o*f)*y,e[12]=C*y,e[13]=(u*v*s-m*h*s+m*i*d-t*v*d-u*i*g+t*h*g)*y,e[14]=(m*o*s-a*v*s-m*i*l+t*v*l+a*i*g-t*o*g)*y,e[15]=(a*h*s-u*o*s+u*i*l-t*h*l-a*i*d+t*o*d)*y,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+i,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,h=o+o,d=r*c,f=r*u,m=r*h,v=a*u,g=a*h,p=o*h,A=l*c,M=l*u,x=l*h,C=i.x,E=i.y,y=i.z;return s[0]=(1-(v+p))*C,s[1]=(f+x)*C,s[2]=(m-M)*C,s[3]=0,s[4]=(f-x)*E,s[5]=(1-(d+p))*E,s[6]=(g+A)*E,s[7]=0,s[8]=(m+M)*y,s[9]=(g-A)*y,s[10]=(1-(d+v))*y,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=Ri.set(s[0],s[1],s[2]).length();const a=Ri.set(s[4],s[5],s[6]).length(),o=Ri.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],cn.copy(this);const c=1/r,u=1/a,h=1/o;return cn.elements[0]*=c,cn.elements[1]*=c,cn.elements[2]*=c,cn.elements[4]*=u,cn.elements[5]*=u,cn.elements[6]*=u,cn.elements[8]*=h,cn.elements[9]*=h,cn.elements[10]*=h,t.setFromRotationMatrix(cn),i.x=r,i.y=a,i.z=o,this}makePerspective(e,t,i,s,r,a,o=Ln){const l=this.elements,c=2*r/(t-e),u=2*r/(i-s),h=(t+e)/(t-e),d=(i+s)/(i-s);let f,m;if(o===Ln)f=-(a+r)/(a-r),m=-2*a*r/(a-r);else if(o===Sr)f=-a/(a-r),m=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=Ln){const l=this.elements,c=1/(t-e),u=1/(i-s),h=1/(a-r),d=(t+e)*c,f=(i+s)*u;let m,v;if(o===Ln)m=(a+r)*h,v=-2*h;else if(o===Sr)m=r*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=v,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ri=new N,cn=new it,Mh=new N(0,0,0),Ah=new N(1,1,1),Yn=new N,Os=new N,Kt=new N,sl=new it,rl=new bs;class An{constructor(e=0,t=0,i=0,s=An.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(yt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-yt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(yt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-yt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(yt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-yt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return sl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(sl,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return rl.setFromEuler(this),this.setFromQuaternion(rl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}An.DEFAULT_ORDER="XYZ";class Ic{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Sh=0;const al=new N,Di=new bs,Tn=new it,zs=new N,is=new N,wh=new N,yh=new bs,ol=new N(1,0,0),ll=new N(0,1,0),cl=new N(0,0,1),ul={type:"added"},_h={type:"removed"},Pi={type:"childadded",child:null},Vr={type:"childremoved",child:null};class dt extends On{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Sh++}),this.uuid=Mi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=dt.DEFAULT_UP.clone();const e=new N,t=new An,i=new bs,s=new N(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new it},normalMatrix:{value:new Xe}}),this.matrix=new it,this.matrixWorld=new it,this.matrixAutoUpdate=dt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ic,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Di.setFromAxisAngle(e,t),this.quaternion.multiply(Di),this}rotateOnWorldAxis(e,t){return Di.setFromAxisAngle(e,t),this.quaternion.premultiply(Di),this}rotateX(e){return this.rotateOnAxis(ol,e)}rotateY(e){return this.rotateOnAxis(ll,e)}rotateZ(e){return this.rotateOnAxis(cl,e)}translateOnAxis(e,t){return al.copy(e).applyQuaternion(this.quaternion),this.position.add(al.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ol,e)}translateY(e){return this.translateOnAxis(ll,e)}translateZ(e){return this.translateOnAxis(cl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Tn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?zs.copy(e):zs.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),is.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Tn.lookAt(is,zs,this.up):Tn.lookAt(zs,is,this.up),this.quaternion.setFromRotationMatrix(Tn),s&&(Tn.extractRotation(s.matrixWorld),Di.setFromRotationMatrix(Tn),this.quaternion.premultiply(Di.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ul),Pi.child=e,this.dispatchEvent(Pi),Pi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(_h),Vr.child=e,this.dispatchEvent(Vr),Vr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Tn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Tn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Tn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ul),Pi.child=e,this.dispatchEvent(Pi),Pi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(is,e,wh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(is,yh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),f=a(e.animations),m=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),m.length>0&&(i.nodes=m)}return i.object=s,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}dt.DEFAULT_UP=new N(0,1,0);dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const un=new N,bn=new N,Wr=new N,Cn=new N,Ii=new N,Li=new N,hl=new N,Yr=new N,Xr=new N,Zr=new N,Qr=new at,qr=new at,Kr=new at;class an{constructor(e=new N,t=new N,i=new N){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),un.subVectors(e,t),s.cross(un);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){un.subVectors(s,t),bn.subVectors(i,t),Wr.subVectors(e,t);const a=un.dot(un),o=un.dot(bn),l=un.dot(Wr),c=bn.dot(bn),u=bn.dot(Wr),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;const d=1/h,f=(c*l-o*u)*d,m=(a*u-o*l)*d;return r.set(1-f-m,m,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Cn)===null?!1:Cn.x>=0&&Cn.y>=0&&Cn.x+Cn.y<=1}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,Cn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Cn.x),l.addScaledVector(a,Cn.y),l.addScaledVector(o,Cn.z),l)}static getInterpolatedAttribute(e,t,i,s,r,a){return Qr.setScalar(0),qr.setScalar(0),Kr.setScalar(0),Qr.fromBufferAttribute(e,t),qr.fromBufferAttribute(e,i),Kr.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Qr,r.x),a.addScaledVector(qr,r.y),a.addScaledVector(Kr,r.z),a}static isFrontFacing(e,t,i,s){return un.subVectors(i,t),bn.subVectors(e,t),un.cross(bn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return un.subVectors(this.c,this.b),bn.subVectors(this.a,this.b),un.cross(bn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return an.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return an.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return an.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return an.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return an.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let a,o;Ii.subVectors(s,i),Li.subVectors(r,i),Yr.subVectors(e,i);const l=Ii.dot(Yr),c=Li.dot(Yr);if(l<=0&&c<=0)return t.copy(i);Xr.subVectors(e,s);const u=Ii.dot(Xr),h=Li.dot(Xr);if(u>=0&&h<=u)return t.copy(s);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(Ii,a);Zr.subVectors(e,r);const f=Ii.dot(Zr),m=Li.dot(Zr);if(m>=0&&f<=m)return t.copy(r);const v=f*c-l*m;if(v<=0&&c>=0&&m<=0)return o=c/(c-m),t.copy(i).addScaledVector(Li,o);const g=u*m-f*h;if(g<=0&&h-u>=0&&f-m>=0)return hl.subVectors(r,s),o=(h-u)/(h-u+(f-m)),t.copy(s).addScaledVector(hl,o);const p=1/(g+v+d);return a=v*p,o=d*p,t.copy(i).addScaledVector(Ii,a).addScaledVector(Li,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Lc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xn={h:0,s:0,l:0},ks={h:0,s:0,l:0};function Jr(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Te{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=et){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=Je.workingColorSpace){return this.r=e,this.g=t,this.b=i,Je.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=Je.workingColorSpace){if(e=_o(e,1),t=yt(t,0,1),i=yt(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=Jr(a,r,e+1/3),this.g=Jr(a,r,e),this.b=Jr(a,r,e-1/3)}return Je.toWorkingColorSpace(this,s),this}setStyle(e,t=et){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=et){const i=Lc[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Un(e.r),this.g=Un(e.g),this.b=Un(e.b),this}copyLinearToSRGB(e){return this.r=Yi(e.r),this.g=Yi(e.g),this.b=Yi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=et){return Je.fromWorkingColorSpace(zt.copy(this),e),Math.round(yt(zt.r*255,0,255))*65536+Math.round(yt(zt.g*255,0,255))*256+Math.round(yt(zt.b*255,0,255))}getHexString(e=et){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.fromWorkingColorSpace(zt.copy(this),t);const i=zt.r,s=zt.g,r=zt.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Je.workingColorSpace){return Je.fromWorkingColorSpace(zt.copy(this),t),e.r=zt.r,e.g=zt.g,e.b=zt.b,e}getStyle(e=et){Je.fromWorkingColorSpace(zt.copy(this),e);const t=zt.r,i=zt.g,s=zt.b;return e!==et?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Xn),this.setHSL(Xn.h+e,Xn.s+t,Xn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Xn),e.getHSL(ks);const i=gs(Xn.h,ks.h,t),s=gs(Xn.s,ks.s,t),r=gs(Xn.l,ks.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zt=new Te;Te.NAMES=Lc;let Eh=0;class zn extends On{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Eh++}),this.uuid=Mi(),this.name="",this.blending=Vi,this.side=Fn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_a,this.blendDst=Ea,this.blendEquation=ui,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Te(0,0,0),this.blendAlpha=0,this.depthFunc=Zi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_i,this.stencilZFail=_i,this.stencilZPass=_i,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Vi&&(i.blending=this.blending),this.side!==Fn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==_a&&(i.blendSrc=this.blendSrc),this.blendDst!==Ea&&(i.blendDst=this.blendDst),this.blendEquation!==ui&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Zi&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Zo&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==_i&&(i.stencilFail=this.stencilFail),this.stencilZFail!==_i&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==_i&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class hn extends zn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.combine=gc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const In=Th();function Th(){const n=new ArrayBuffer(4),e=new Float32Array(n),t=new Uint32Array(n),i=new Uint32Array(512),s=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(i[l]=0,i[l|256]=32768,s[l]=24,s[l|256]=24):c<-14?(i[l]=1024>>-c-14,i[l|256]=1024>>-c-14|32768,s[l]=-c-1,s[l|256]=-c-1):c<=15?(i[l]=c+15<<10,i[l|256]=c+15<<10|32768,s[l]=13,s[l|256]=13):c<128?(i[l]=31744,i[l|256]=64512,s[l]=24,s[l|256]=24):(i[l]=31744,i[l|256]=64512,s[l]=13,s[l|256]=13)}const r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;(c&8388608)===0;)c<<=1,u-=8388608;c&=-8388609,u+=947912704,r[l]=c|u}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:i,shiftTable:s,mantissaTable:r,exponentTable:a,offsetTable:o}}function bh(n){Math.abs(n)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),n=yt(n,-65504,65504),In.floatView[0]=n;const e=In.uint32View[0],t=e>>23&511;return In.baseTable[t]+((e&8388607)>>In.shiftTable[t])}function Ch(n){const e=n>>10;return In.uint32View[0]=In.mantissaTable[In.offsetTable[e]+(n&1023)]+In.exponentTable[e],In.floatView[0]}const jr={toHalfFloat:bh,fromHalfFloat:Ch},At=new N,Gs=new de;class Tt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Qo,this.updateRanges=[],this.gpuType=dn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Gs.fromBufferAttribute(this,t),Gs.applyMatrix3(e),this.setXY(t,Gs.x,Gs.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.applyMatrix3(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.applyMatrix4(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.applyNormalMatrix(e),this.setXYZ(t,At.x,At.y,At.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.transformDirection(e),this.setXYZ(t,At.x,At.y,At.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ki(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Vt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ki(t,this.array)),t}setX(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ki(t,this.array)),t}setY(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ki(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ki(t,this.array)),t}setW(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),i=Vt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),i=Vt(i,this.array),s=Vt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),i=Vt(i,this.array),s=Vt(s,this.array),r=Vt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Qo&&(e.usage=this.usage),e}}class Bc extends Tt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Uc extends Tt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class nt extends Tt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Rh=0;const nn=new it,$r=new dt,Bi=new N,Jt=new Ai,ss=new Ai,Dt=new N;class Rt extends On{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Rh++}),this.uuid=Mi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Rc(e)?Uc:Bc)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Xe().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return nn.makeRotationFromQuaternion(e),this.applyMatrix4(nn),this}rotateX(e){return nn.makeRotationX(e),this.applyMatrix4(nn),this}rotateY(e){return nn.makeRotationY(e),this.applyMatrix4(nn),this}rotateZ(e){return nn.makeRotationZ(e),this.applyMatrix4(nn),this}translate(e,t,i){return nn.makeTranslation(e,t,i),this.applyMatrix4(nn),this}scale(e,t,i){return nn.makeScale(e,t,i),this.applyMatrix4(nn),this}lookAt(e){return $r.lookAt(e),$r.updateMatrix(),this.applyMatrix4($r.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bi).negate(),this.translate(Bi.x,Bi.y,Bi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new nt(i,3))}else{for(let i=0,s=t.count;i<s;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ai);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];Jt.setFromBufferAttribute(r),this.morphTargetsRelative?(Dt.addVectors(this.boundingBox.min,Jt.min),this.boundingBox.expandByPoint(Dt),Dt.addVectors(this.boundingBox.max,Jt.max),this.boundingBox.expandByPoint(Dt)):(this.boundingBox.expandByPoint(Jt.min),this.boundingBox.expandByPoint(Jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Si);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const i=this.boundingSphere.center;if(Jt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];ss.setFromBufferAttribute(o),this.morphTargetsRelative?(Dt.addVectors(Jt.min,ss.min),Jt.expandByPoint(Dt),Dt.addVectors(Jt.max,ss.max),Jt.expandByPoint(Dt)):(Jt.expandByPoint(ss.min),Jt.expandByPoint(ss.max))}Jt.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)Dt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Dt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Dt.fromBufferAttribute(o,c),l&&(Bi.fromBufferAttribute(e,c),Dt.add(Bi)),s=Math.max(s,i.distanceToSquared(Dt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Tt(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let T=0;T<i.count;T++)o[T]=new N,l[T]=new N;const c=new N,u=new N,h=new N,d=new de,f=new de,m=new de,v=new N,g=new N;function p(T,S,w){c.fromBufferAttribute(i,T),u.fromBufferAttribute(i,S),h.fromBufferAttribute(i,w),d.fromBufferAttribute(r,T),f.fromBufferAttribute(r,S),m.fromBufferAttribute(r,w),u.sub(c),h.sub(c),f.sub(d),m.sub(d);const _=1/(f.x*m.y-m.x*f.y);isFinite(_)&&(v.copy(u).multiplyScalar(m.y).addScaledVector(h,-f.y).multiplyScalar(_),g.copy(h).multiplyScalar(f.x).addScaledVector(u,-m.x).multiplyScalar(_),o[T].add(v),o[S].add(v),o[w].add(v),l[T].add(g),l[S].add(g),l[w].add(g))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let T=0,S=A.length;T<S;++T){const w=A[T],_=w.start,D=w.count;for(let I=_,F=_+D;I<F;I+=3)p(e.getX(I+0),e.getX(I+1),e.getX(I+2))}const M=new N,x=new N,C=new N,E=new N;function y(T){C.fromBufferAttribute(s,T),E.copy(C);const S=o[T];M.copy(S),M.sub(C.multiplyScalar(C.dot(S))).normalize(),x.crossVectors(E,S);const _=x.dot(l[T])<0?-1:1;a.setXYZW(T,M.x,M.y,M.z,_)}for(let T=0,S=A.length;T<S;++T){const w=A[T],_=w.start,D=w.count;for(let I=_,F=_+D;I<F;I+=3)y(e.getX(I+0)),y(e.getX(I+1)),y(e.getX(I+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Tt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const s=new N,r=new N,a=new N,o=new N,l=new N,c=new N,u=new N,h=new N;if(e)for(let d=0,f=e.count;d<f;d+=3){const m=e.getX(d+0),v=e.getX(d+1),g=e.getX(d+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,g),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(i,m),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,g),o.add(u),l.add(u),c.add(u),i.setXYZ(m,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Dt.fromBufferAttribute(e,t),Dt.normalize(),e.setXYZ(t,Dt.x,Dt.y,Dt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u);let f=0,m=0;for(let v=0,g=l.length;v<g;v++){o.isInterleavedBufferAttribute?f=l[v]*o.data.stride+o.offset:f=l[v]*u;for(let p=0;p<u;p++)d[m++]=c[f++]}return new Tt(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Rt,i=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,i);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=e(d,i);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const dl=new it,ni=new Eo,Hs=new Si,fl=new N,Vs=new N,Ws=new N,Ys=new N,ea=new N,Xs=new N,pl=new N,Zs=new N;class Oe extends dt{constructor(e=new Rt,t=new hn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Xs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],h=r[l];u!==0&&(ea.fromBufferAttribute(h,e),a?Xs.addScaledVector(ea,u):Xs.addScaledVector(ea.sub(t),u))}t.add(Xs)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Hs.copy(i.boundingSphere),Hs.applyMatrix4(r),ni.copy(e.ray).recast(e.near),!(Hs.containsPoint(ni.origin)===!1&&(ni.intersectSphere(Hs,fl)===null||ni.origin.distanceToSquared(fl)>(e.far-e.near)**2))&&(dl.copy(r).invert(),ni.copy(e.ray).applyMatrix4(dl),!(i.boundingBox!==null&&ni.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ni)))}_computeIntersections(e,t,i){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,v=d.length;m<v;m++){const g=d[m],p=a[g.materialIndex],A=Math.max(g.start,f.start),M=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let x=A,C=M;x<C;x+=3){const E=o.getX(x),y=o.getX(x+1),T=o.getX(x+2);s=Qs(this,p,e,i,c,u,h,E,y,T),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const m=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let g=m,p=v;g<p;g+=3){const A=o.getX(g),M=o.getX(g+1),x=o.getX(g+2);s=Qs(this,a,e,i,c,u,h,A,M,x),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,v=d.length;m<v;m++){const g=d[m],p=a[g.materialIndex],A=Math.max(g.start,f.start),M=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let x=A,C=M;x<C;x+=3){const E=x,y=x+1,T=x+2;s=Qs(this,p,e,i,c,u,h,E,y,T),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const m=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let g=m,p=v;g<p;g+=3){const A=g,M=g+1,x=g+2;s=Qs(this,a,e,i,c,u,h,A,M,x),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}}function Dh(n,e,t,i,s,r,a,o){let l;if(e.side===_t?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===Fn,o),l===null)return null;Zs.copy(o),Zs.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Zs);return c<t.near||c>t.far?null:{distance:c,point:Zs.clone(),object:n}}function Qs(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,Vs),n.getVertexPosition(l,Ws),n.getVertexPosition(c,Ys);const u=Dh(n,e,t,i,Vs,Ws,Ys,pl);if(u){const h=new N;an.getBarycoord(pl,Vs,Ws,Ys,h),s&&(u.uv=an.getInterpolatedAttribute(s,o,l,c,h,new de)),r&&(u.uv1=an.getInterpolatedAttribute(r,o,l,c,h,new de)),a&&(u.normal=an.getInterpolatedAttribute(a,o,l,c,h,new N),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new N,materialIndex:0};an.getNormal(Vs,Ws,Ys,d.normal),u.face=d,u.barycoord=h}return u}class Zt extends Rt{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],h=[];let d=0,f=0;m("z","y","x",-1,-1,i,t,e,a,r,0),m("z","y","x",1,-1,i,t,-e,a,r,1),m("x","z","y",1,1,e,i,t,s,a,2),m("x","z","y",1,-1,e,i,-t,s,a,3),m("x","y","z",1,-1,e,t,i,s,r,4),m("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new nt(c,3)),this.setAttribute("normal",new nt(u,3)),this.setAttribute("uv",new nt(h,2));function m(v,g,p,A,M,x,C,E,y,T,S){const w=x/y,_=C/T,D=x/2,I=C/2,F=E/2,k=y+1,z=T+1;let V=0,G=0;const J=new N;for(let q=0;q<z;q++){const re=q*_-I;for(let fe=0;fe<k;fe++){const Se=fe*w-D;J[v]=Se*A,J[g]=re*M,J[p]=F,c.push(J.x,J.y,J.z),J[v]=0,J[g]=0,J[p]=E>0?1:-1,u.push(J.x,J.y,J.z),h.push(fe/y),h.push(1-q/T),V+=1}}for(let q=0;q<T;q++)for(let re=0;re<y;re++){const fe=d+re+k*q,Se=d+re+k*(q+1),O=d+(re+1)+k*(q+1),U=d+(re+1)+k*q;l.push(fe,Se,U),l.push(Se,O,U),G+=6}o.addGroup(f,G,S),f+=G,d+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ji(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Wt(n){const e={};for(let t=0;t<n.length;t++){const i=Ji(n[t]);for(const s in i)e[s]=i[s]}return e}function Ph(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Fc(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}const Ih={clone:Ji,merge:Wt};var Lh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Bh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class xt extends zn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Lh,this.fragmentShader=Bh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ji(e.uniforms),this.uniformsGroups=Ph(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Nc extends dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new it,this.projectionMatrix=new it,this.projectionMatrixInverse=new it,this.coordinateSystem=Ln}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Zn=new N,ml=new de,gl=new de;class Gt extends Nc{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ki*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Wi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ki*2*Math.atan(Math.tan(Wi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Zn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Zn.x,Zn.y).multiplyScalar(-e/Zn.z),Zn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Zn.x,Zn.y).multiplyScalar(-e/Zn.z)}getViewSize(e,t){return this.getViewBounds(e,ml,gl),t.subVectors(gl,ml)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Wi*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ui=-90,Fi=1;class Uh extends dt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Gt(Ui,Fi,e,t);s.layers=this.layers,this.add(s);const r=new Gt(Ui,Fi,e,t);r.layers=this.layers,this.add(r);const a=new Gt(Ui,Fi,e,t);a.layers=this.layers,this.add(a);const o=new Gt(Ui,Fi,e,t);o.layers=this.layers,this.add(o);const l=new Gt(Ui,Fi,e,t);l.layers=this.layers,this.add(l);const c=new Gt(Ui,Fi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===Ln)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Sr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,a),e.setRenderTarget(i,2,s),e.render(t,o),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class Oc extends wt{constructor(e,t,i,s,r,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Qi,super(e,t,i,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Fh extends Mt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Oc(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ut}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Zt(5,5,5),r=new xt({name:"CubemapFromEquirect",uniforms:Ji(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:_t,blending:Ft});r.uniforms.tEquirect.value=t;const a=new Oe(s,r),o=t.minFilter;return t.minFilter===vn&&(t.minFilter=ut),new Uh(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,s){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}}const ta=new N,Nh=new N,Oh=new Xe;class qn{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=ta.subVectors(i,t).cross(Nh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(ta),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Oh.getNormalMatrix(e),s=this.coplanarPoint(ta).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ii=new Si,qs=new N;class To{constructor(e=new qn,t=new qn,i=new qn,s=new qn,r=new qn,a=new qn){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ln){const i=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],u=s[5],h=s[6],d=s[7],f=s[8],m=s[9],v=s[10],g=s[11],p=s[12],A=s[13],M=s[14],x=s[15];if(i[0].setComponents(l-r,d-c,g-f,x-p).normalize(),i[1].setComponents(l+r,d+c,g+f,x+p).normalize(),i[2].setComponents(l+a,d+u,g+m,x+A).normalize(),i[3].setComponents(l-a,d-u,g-m,x-A).normalize(),i[4].setComponents(l-o,d-h,g-v,x-M).normalize(),t===Ln)i[5].setComponents(l+o,d+h,g+v,x+M).normalize();else if(t===Sr)i[5].setComponents(o,h,v,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ii.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ii.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ii)}intersectsSprite(e){return ii.center.set(0,0,0),ii.radius=.7071067811865476,ii.applyMatrix4(e.matrixWorld),this.intersectsSphere(ii)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(qs.x=s.normal.x>0?e.max.x:e.min.x,qs.y=s.normal.y>0?e.max.y:e.min.y,qs.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(qs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function zc(){let n=null,e=!1,t=null,i=null;function s(r,a){t(r,a),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function zh(n){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,h=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,c){const u=l.array,h=l.updateRanges;if(n.bindBuffer(c,o),h.length===0)n.bufferSubData(c,0,u);else{h.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<h.length;f++){const m=h[d],v=h[f];v.start<=m.start+m.count+1?m.count=Math.max(m.count,v.start+v.count-m.start):(++d,h[d]=v)}h.length=d+1;for(let f=0,m=h.length;f<m;f++){const v=h[f];n.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}class kt extends Rt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,u=l+1,h=e/o,d=t/l,f=[],m=[],v=[],g=[];for(let p=0;p<u;p++){const A=p*d-a;for(let M=0;M<c;M++){const x=M*h-r;m.push(x,-A,0),v.push(0,0,1),g.push(M/o),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let A=0;A<o;A++){const M=A+c*p,x=A+c*(p+1),C=A+1+c*(p+1),E=A+1+c*p;f.push(M,x,E),f.push(x,C,E)}this.setIndex(f),this.setAttribute("position",new nt(m,3)),this.setAttribute("normal",new nt(v,3)),this.setAttribute("uv",new nt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kt(e.width,e.height,e.widthSegments,e.heightSegments)}}var kh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Gh=`#ifdef USE_ALPHAHASH
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
#endif`,Hh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Yh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Xh=`#ifdef USE_AOMAP
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
#endif`,Zh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Qh=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,qh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Kh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Jh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,$h=`#ifdef USE_IRIDESCENCE
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
#endif`,ed=`#ifdef USE_BUMPMAP
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
#endif`,td=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,nd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,id=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,rd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ad=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,od=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ld=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,cd=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,ud=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,hd=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,dd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,pd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,md=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gd="gl_FragColor = linearToOutputTexel( gl_FragColor );",vd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,xd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Md=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ad=`#ifdef USE_ENVMAP
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
#endif`,Sd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,yd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_d=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ed=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Td=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bd=`#ifdef USE_GRADIENTMAP
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
}`,Cd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Rd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Dd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Pd=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,Id=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
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
	#endif
#endif`,Ld=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Bd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ud=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Fd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Nd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,Od=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,zd=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,kd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Gd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Hd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Vd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Xd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Zd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Qd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,qd=`#if defined( USE_POINTS_UV )
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
#endif`,Kd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Jd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$d=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ef=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tf=`#ifdef USE_MORPHTARGETS
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
#endif`,nf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,rf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,af=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,of=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,cf=`#ifdef USE_NORMALMAP
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
#endif`,uf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,df=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ff=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,pf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,mf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,gf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Mf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Af=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Sf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,yf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,_f=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,Ef=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,Tf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bf=`#ifdef USE_SKINNING
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
#endif`,Cf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Rf=`#ifdef USE_SKINNING
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
#endif`,Df=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Pf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,If=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Lf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Bf=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Uf=`#ifdef USE_TRANSMISSION
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
#endif`,Ff=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Nf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Of=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const kf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Gf=`uniform sampler2D t2D;
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
}`,Hf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xf=`#include <common>
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
}`,Zf=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Qf=`#define DISTANCE
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
}`,qf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Kf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Jf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jf=`uniform float scale;
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
}`,$f=`uniform vec3 diffuse;
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
}`,ep=`#include <common>
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
}`,tp=`uniform vec3 diffuse;
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
}`,np=`#define LAMBERT
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
}`,ip=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,sp=`#define MATCAP
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
}`,rp=`#define MATCAP
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
}`,ap=`#define NORMAL
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
}`,op=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,lp=`#define PHONG
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
}`,cp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,up=`#define STANDARD
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
}`,hp=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,dp=`#define TOON
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
}`,fp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,pp=`uniform float size;
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
}`,mp=`uniform vec3 diffuse;
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
}`,gp=`#include <common>
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
}`,vp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,xp=`uniform float rotation;
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
}`,Mp=`uniform vec3 diffuse;
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
}`,Qe={alphahash_fragment:kh,alphahash_pars_fragment:Gh,alphamap_fragment:Hh,alphamap_pars_fragment:Vh,alphatest_fragment:Wh,alphatest_pars_fragment:Yh,aomap_fragment:Xh,aomap_pars_fragment:Zh,batching_pars_vertex:Qh,batching_vertex:qh,begin_vertex:Kh,beginnormal_vertex:Jh,bsdfs:jh,iridescence_fragment:$h,bumpmap_pars_fragment:ed,clipping_planes_fragment:td,clipping_planes_pars_fragment:nd,clipping_planes_pars_vertex:id,clipping_planes_vertex:sd,color_fragment:rd,color_pars_fragment:ad,color_pars_vertex:od,color_vertex:ld,common:cd,cube_uv_reflection_fragment:ud,defaultnormal_vertex:hd,displacementmap_pars_vertex:dd,displacementmap_vertex:fd,emissivemap_fragment:pd,emissivemap_pars_fragment:md,colorspace_fragment:gd,colorspace_pars_fragment:vd,envmap_fragment:xd,envmap_common_pars_fragment:Md,envmap_pars_fragment:Ad,envmap_pars_vertex:Sd,envmap_physical_pars_fragment:Id,envmap_vertex:wd,fog_vertex:yd,fog_pars_vertex:_d,fog_fragment:Ed,fog_pars_fragment:Td,gradientmap_pars_fragment:bd,lightmap_pars_fragment:Cd,lights_lambert_fragment:Rd,lights_lambert_pars_fragment:Dd,lights_pars_begin:Pd,lights_toon_fragment:Ld,lights_toon_pars_fragment:Bd,lights_phong_fragment:Ud,lights_phong_pars_fragment:Fd,lights_physical_fragment:Nd,lights_physical_pars_fragment:Od,lights_fragment_begin:zd,lights_fragment_maps:kd,lights_fragment_end:Gd,logdepthbuf_fragment:Hd,logdepthbuf_pars_fragment:Vd,logdepthbuf_pars_vertex:Wd,logdepthbuf_vertex:Yd,map_fragment:Xd,map_pars_fragment:Zd,map_particle_fragment:Qd,map_particle_pars_fragment:qd,metalnessmap_fragment:Kd,metalnessmap_pars_fragment:Jd,morphinstance_vertex:jd,morphcolor_vertex:$d,morphnormal_vertex:ef,morphtarget_pars_vertex:tf,morphtarget_vertex:nf,normal_fragment_begin:sf,normal_fragment_maps:rf,normal_pars_fragment:af,normal_pars_vertex:of,normal_vertex:lf,normalmap_pars_fragment:cf,clearcoat_normal_fragment_begin:uf,clearcoat_normal_fragment_maps:hf,clearcoat_pars_fragment:df,iridescence_pars_fragment:ff,opaque_fragment:pf,packing:mf,premultiplied_alpha_fragment:gf,project_vertex:vf,dithering_fragment:xf,dithering_pars_fragment:Mf,roughnessmap_fragment:Af,roughnessmap_pars_fragment:Sf,shadowmap_pars_fragment:wf,shadowmap_pars_vertex:yf,shadowmap_vertex:_f,shadowmask_pars_fragment:Ef,skinbase_vertex:Tf,skinning_pars_vertex:bf,skinning_vertex:Cf,skinnormal_vertex:Rf,specularmap_fragment:Df,specularmap_pars_fragment:Pf,tonemapping_fragment:If,tonemapping_pars_fragment:Lf,transmission_fragment:Bf,transmission_pars_fragment:Uf,uv_pars_fragment:Ff,uv_pars_vertex:Nf,uv_vertex:Of,worldpos_vertex:zf,background_vert:kf,background_frag:Gf,backgroundCube_vert:Hf,backgroundCube_frag:Vf,cube_vert:Wf,cube_frag:Yf,depth_vert:Xf,depth_frag:Zf,distanceRGBA_vert:Qf,distanceRGBA_frag:qf,equirect_vert:Kf,equirect_frag:Jf,linedashed_vert:jf,linedashed_frag:$f,meshbasic_vert:ep,meshbasic_frag:tp,meshlambert_vert:np,meshlambert_frag:ip,meshmatcap_vert:sp,meshmatcap_frag:rp,meshnormal_vert:ap,meshnormal_frag:op,meshphong_vert:lp,meshphong_frag:cp,meshphysical_vert:up,meshphysical_frag:hp,meshtoon_vert:dp,meshtoon_frag:fp,points_vert:pp,points_frag:mp,shadow_vert:gp,shadow_frag:vp,sprite_vert:xp,sprite_frag:Mp},be={common:{diffuse:{value:new Te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},envMapRotation:{value:new Xe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new de(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new Te(16777215)},opacity:{value:1},center:{value:new de(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},mn={basic:{uniforms:Wt([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:Wt([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Te(0)}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:Wt([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Te(0)},specular:{value:new Te(1118481)},shininess:{value:30}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:Wt([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new Te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:Wt([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new Te(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:Wt([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:Wt([be.points,be.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:Wt([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:Wt([be.common,be.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:Wt([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:Wt([be.sprite,be.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xe}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distanceRGBA:{uniforms:Wt([be.common,be.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distanceRGBA_vert,fragmentShader:Qe.distanceRGBA_frag},shadow:{uniforms:Wt([be.lights,be.fog,{color:{value:new Te(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};mn.physical={uniforms:Wt([mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new de(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new Te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new de},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new Te(0)},specularColor:{value:new Te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new de},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};const Ks={r:0,b:0,g:0},si=new An,Ap=new it;function Sp(n,e,t,i,s,r,a){const o=new Te(0);let l=r===!0?0:1,c,u,h=null,d=0,f=null;function m(A){let M=A.isScene===!0?A.background:null;return M&&M.isTexture&&(M=(A.backgroundBlurriness>0?t:e).get(M)),M}function v(A){let M=!1;const x=m(A);x===null?p(o,l):x&&x.isColor&&(p(x,1),M=!0);const C=n.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,a):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(A,M){const x=m(M);x&&(x.isCubeTexture||x.mapping===br)?(u===void 0&&(u=new Oe(new Zt(1,1,1),new xt({name:"BackgroundCubeMaterial",uniforms:Ji(mn.backgroundCube.uniforms),vertexShader:mn.backgroundCube.vertexShader,fragmentShader:mn.backgroundCube.fragmentShader,side:_t,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,E,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),si.copy(M.backgroundRotation),si.x*=-1,si.y*=-1,si.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(si.y*=-1,si.z*=-1),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Ap.makeRotationFromEuler(si)),u.material.toneMapped=Je.getTransfer(x.colorSpace)!==lt,(h!==x||d!==x.version||f!==n.toneMapping)&&(u.material.needsUpdate=!0,h=x,d=x.version,f=n.toneMapping),u.layers.enableAll(),A.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Oe(new kt(2,2),new xt({name:"BackgroundMaterial",uniforms:Ji(mn.background.uniforms),vertexShader:mn.background.vertexShader,fragmentShader:mn.background.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=Je.getTransfer(x.colorSpace)!==lt,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||d!==x.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,h=x,d=x.version,f=n.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null))}function p(A,M){A.getRGB(Ks,Fc(n)),i.buffers.color.setClear(Ks.r,Ks.g,Ks.b,M,a)}return{getClearColor:function(){return o},setClearColor:function(A,M=1){o.set(A),l=M,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(A){l=A,p(o,l)},render:v,addToRenderList:g}}function wp(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null);let r=s,a=!1;function o(w,_,D,I,F){let k=!1;const z=h(I,D,_);r!==z&&(r=z,c(r.object)),k=f(w,I,D,F),k&&m(w,I,D,F),F!==null&&e.update(F,n.ELEMENT_ARRAY_BUFFER),(k||a)&&(a=!1,x(w,_,D,I),F!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function l(){return n.createVertexArray()}function c(w){return n.bindVertexArray(w)}function u(w){return n.deleteVertexArray(w)}function h(w,_,D){const I=D.wireframe===!0;let F=i[w.id];F===void 0&&(F={},i[w.id]=F);let k=F[_.id];k===void 0&&(k={},F[_.id]=k);let z=k[I];return z===void 0&&(z=d(l()),k[I]=z),z}function d(w){const _=[],D=[],I=[];for(let F=0;F<t;F++)_[F]=0,D[F]=0,I[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:_,enabledAttributes:D,attributeDivisors:I,object:w,attributes:{},index:null}}function f(w,_,D,I){const F=r.attributes,k=_.attributes;let z=0;const V=D.getAttributes();for(const G in V)if(V[G].location>=0){const q=F[G];let re=k[G];if(re===void 0&&(G==="instanceMatrix"&&w.instanceMatrix&&(re=w.instanceMatrix),G==="instanceColor"&&w.instanceColor&&(re=w.instanceColor)),q===void 0||q.attribute!==re||re&&q.data!==re.data)return!0;z++}return r.attributesNum!==z||r.index!==I}function m(w,_,D,I){const F={},k=_.attributes;let z=0;const V=D.getAttributes();for(const G in V)if(V[G].location>=0){let q=k[G];q===void 0&&(G==="instanceMatrix"&&w.instanceMatrix&&(q=w.instanceMatrix),G==="instanceColor"&&w.instanceColor&&(q=w.instanceColor));const re={};re.attribute=q,q&&q.data&&(re.data=q.data),F[G]=re,z++}r.attributes=F,r.attributesNum=z,r.index=I}function v(){const w=r.newAttributes;for(let _=0,D=w.length;_<D;_++)w[_]=0}function g(w){p(w,0)}function p(w,_){const D=r.newAttributes,I=r.enabledAttributes,F=r.attributeDivisors;D[w]=1,I[w]===0&&(n.enableVertexAttribArray(w),I[w]=1),F[w]!==_&&(n.vertexAttribDivisor(w,_),F[w]=_)}function A(){const w=r.newAttributes,_=r.enabledAttributes;for(let D=0,I=_.length;D<I;D++)_[D]!==w[D]&&(n.disableVertexAttribArray(D),_[D]=0)}function M(w,_,D,I,F,k,z){z===!0?n.vertexAttribIPointer(w,_,D,F,k):n.vertexAttribPointer(w,_,D,I,F,k)}function x(w,_,D,I){v();const F=I.attributes,k=D.getAttributes(),z=_.defaultAttributeValues;for(const V in k){const G=k[V];if(G.location>=0){let J=F[V];if(J===void 0&&(V==="instanceMatrix"&&w.instanceMatrix&&(J=w.instanceMatrix),V==="instanceColor"&&w.instanceColor&&(J=w.instanceColor)),J!==void 0){const q=J.normalized,re=J.itemSize,fe=e.get(J);if(fe===void 0)continue;const Se=fe.buffer,O=fe.type,U=fe.bytesPerElement,W=O===n.INT||O===n.UNSIGNED_INT||J.gpuType===vo;if(J.isInterleavedBufferAttribute){const H=J.data,ie=H.stride,oe=J.offset;if(H.isInstancedInterleavedBuffer){for(let ue=0;ue<G.locationSize;ue++)p(G.location+ue,H.meshPerAttribute);w.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let ue=0;ue<G.locationSize;ue++)g(G.location+ue);n.bindBuffer(n.ARRAY_BUFFER,Se);for(let ue=0;ue<G.locationSize;ue++)M(G.location+ue,re/G.locationSize,O,q,ie*U,(oe+re/G.locationSize*ue)*U,W)}else{if(J.isInstancedBufferAttribute){for(let H=0;H<G.locationSize;H++)p(G.location+H,J.meshPerAttribute);w.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let H=0;H<G.locationSize;H++)g(G.location+H);n.bindBuffer(n.ARRAY_BUFFER,Se);for(let H=0;H<G.locationSize;H++)M(G.location+H,re/G.locationSize,O,q,re*U,re/G.locationSize*H*U,W)}}else if(z!==void 0){const q=z[V];if(q!==void 0)switch(q.length){case 2:n.vertexAttrib2fv(G.location,q);break;case 3:n.vertexAttrib3fv(G.location,q);break;case 4:n.vertexAttrib4fv(G.location,q);break;default:n.vertexAttrib1fv(G.location,q)}}}}A()}function C(){T();for(const w in i){const _=i[w];for(const D in _){const I=_[D];for(const F in I)u(I[F].object),delete I[F];delete _[D]}delete i[w]}}function E(w){if(i[w.id]===void 0)return;const _=i[w.id];for(const D in _){const I=_[D];for(const F in I)u(I[F].object),delete I[F];delete _[D]}delete i[w.id]}function y(w){for(const _ in i){const D=i[_];if(D[w.id]===void 0)continue;const I=D[w.id];for(const F in I)u(I[F].object),delete I[F];delete D[w.id]}}function T(){S(),a=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:T,resetDefaultState:S,dispose:C,releaseStatesOfGeometry:E,releaseStatesOfProgram:y,initAttributes:v,enableAttribute:g,disableUnusedAttributes:A}}function yp(n,e,t){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function a(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),t.update(u,i,h))}function o(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let f=0;for(let m=0;m<h;m++)f+=u[m];t.update(f,i,1)}function l(c,u,h,d){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<c.length;m++)a(c[m],u[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,h);let m=0;for(let v=0;v<h;v++)m+=u[v]*d[v];t.update(m,i,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function _p(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const y=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(y){return!(y!==Et&&i.convert(y)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(y){const T=y===Nn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(y!==Lt&&i.convert(y)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&y!==dn&&!T)}function l(y){if(y==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";y="mediump"}return y==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),A=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),C=m>0,E=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:A,maxVaryings:M,maxFragmentUniforms:x,vertexTextures:C,maxSamples:E}}function Ep(n){const e=this;let t=null,i=0,s=!1,r=!1;const a=new qn,o=new Xe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||i!==0||s;return s=d,i=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const m=h.clippingPlanes,v=h.clipIntersection,g=h.clipShadows,p=n.get(h);if(!s||m===null||m.length===0||r&&!g)r?u(null):c();else{const A=r?0:i,M=A*4;let x=p.clippingState||null;l.value=x,x=u(m,d,M,f);for(let C=0;C!==M;++C)x[C]=t[C];p.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,f,m){const v=h!==null?h.length:0;let g=null;if(v!==0){if(g=l.value,m!==!0||g===null){const p=f+v*4,A=d.matrixWorldInverse;o.getNormalMatrix(A),(g===null||g.length<p)&&(g=new Float32Array(p));for(let M=0,x=f;M!==v;++M,x+=4)a.copy(h[M]).applyMatrix4(A,o),a.normal.toArray(g,x),g[x+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}function Tp(n){let e=new WeakMap;function t(a,o){return o===Ia?a.mapping=Qi:o===La&&(a.mapping=qi),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Ia||o===La)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Fh(l.height);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class bo extends Nc{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Gi=4,vl=[.125,.215,.35,.446,.526,.582],hi=20,na=new bo,xl=new Te;let ia=null,sa=0,ra=0,aa=!1;const li=(1+Math.sqrt(5))/2,Ni=1/li,Ml=[new N(-li,Ni,0),new N(li,Ni,0),new N(-Ni,0,li),new N(Ni,0,li),new N(0,li,-Ni),new N(0,li,Ni),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)];class oo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){ia=this._renderer.getRenderTarget(),sa=this._renderer.getActiveCubeFace(),ra=this._renderer.getActiveMipmapLevel(),aa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ia,sa,ra),this._renderer.xr.enabled=aa,e.scissorTest=!1,Js(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Qi||e.mapping===qi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ia=this._renderer.getRenderTarget(),sa=this._renderer.getActiveCubeFace(),ra=this._renderer.getActiveMipmapLevel(),aa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:ut,minFilter:ut,generateMipmaps:!1,type:Nn,format:Et,colorSpace:jn,depthBuffer:!1},s=Al(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Al(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=bp(r)),this._blurMaterial=Cp(r,e,t)}return s}_compileMaterial(e){const t=new Oe(this._lodPlanes[0],e);this._renderer.compile(t,na)}_sceneToCubeUV(e,t,i,s){const o=new Gt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(xl),u.toneMapping=Bn,u.autoClear=!1;const f=new hn({name:"PMREM.Background",side:_t,depthWrite:!1,depthTest:!1}),m=new Oe(new Zt,f);let v=!1;const g=e.background;g?g.isColor&&(f.color.copy(g),e.background=null,v=!0):(f.color.copy(xl),v=!0);for(let p=0;p<6;p++){const A=p%3;A===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):A===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const M=this._cubeSize;Js(s,A*M,p>2?M:0,M,M),u.setRenderTarget(s),v&&u.render(m,o),u.render(e,o)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=g}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Qi||e.mapping===qi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=wl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sl());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Oe(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Js(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,na)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Ml[(s-r-1)%Ml.length];this._blur(e,r-1,r,a,o)}t.autoClear=i}_blur(e,t,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,s,"latitudinal",r),this._halfBlur(a,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Oe(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[i]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*hi-1),v=r/m,g=isFinite(r)?1+Math.floor(u*v):hi;g>hi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${hi}`);const p=[];let A=0;for(let y=0;y<hi;++y){const T=y/v,S=Math.exp(-T*T/2);p.push(S),y===0?A+=S:y<g&&(A+=2*S)}for(let y=0;y<p.length;y++)p[y]=p[y]/A;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:M}=this;d.dTheta.value=m,d.mipInt.value=M-i;const x=this._sizeLods[s],C=3*x*(s>M-Gi?s-M+Gi:0),E=4*(this._cubeSize-x);Js(t,C,E,3*x,2*x),l.setRenderTarget(t),l.render(h,na)}}function bp(n){const e=[],t=[],i=[];let s=n;const r=n-Gi+1+vl.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let l=1/o;a>n-Gi?l=vl[a-n+Gi-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,m=6,v=3,g=2,p=1,A=new Float32Array(v*m*f),M=new Float32Array(g*m*f),x=new Float32Array(p*m*f);for(let E=0;E<f;E++){const y=E%3*2/3-1,T=E>2?0:-1,S=[y,T,0,y+2/3,T,0,y+2/3,T+1,0,y,T,0,y+2/3,T+1,0,y,T+1,0];A.set(S,v*m*E),M.set(d,g*m*E);const w=[E,E,E,E,E,E];x.set(w,p*m*E)}const C=new Rt;C.setAttribute("position",new Tt(A,v)),C.setAttribute("uv",new Tt(M,g)),C.setAttribute("faceIndex",new Tt(x,p)),e.push(C),s>Gi&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Al(n,e,t){const i=new Mt(n,e,t);return i.texture.mapping=br,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Js(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function Cp(n,e,t){const i=new Float32Array(hi),s=new N(0,1,0);return new xt({name:"SphericalGaussianBlur",defines:{n:hi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Co(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ft,depthTest:!1,depthWrite:!1})}function Sl(){return new xt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Co(),fragmentShader:`

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
		`,blending:Ft,depthTest:!1,depthWrite:!1})}function wl(){return new xt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Co(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ft,depthTest:!1,depthWrite:!1})}function Co(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Rp(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Ia||l===La,u=l===Qi||l===qi;if(c||u){let h=e.get(o);const d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new oo(n)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const f=o.image;return c&&f&&f.height>0||u&&f&&s(f)?(t===null&&(t=new oo(n)),h=c?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function s(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function Dp(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&ps("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Pp(n,e,t,i){const s={},r=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const m in d.attributes)e.remove(d.attributes[m]);for(const m in d.morphAttributes){const v=d.morphAttributes[m];for(let g=0,p=v.length;g<p;g++)e.remove(v[g])}d.removeEventListener("dispose",a),delete s[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const m in d)e.update(d[m],n.ARRAY_BUFFER);const f=h.morphAttributes;for(const m in f){const v=f[m];for(let g=0,p=v.length;g<p;g++)e.update(v[g],n.ARRAY_BUFFER)}}function c(h){const d=[],f=h.index,m=h.attributes.position;let v=0;if(f!==null){const A=f.array;v=f.version;for(let M=0,x=A.length;M<x;M+=3){const C=A[M+0],E=A[M+1],y=A[M+2];d.push(C,E,E,y,y,C)}}else if(m!==void 0){const A=m.array;v=m.version;for(let M=0,x=A.length/3-1;M<x;M+=3){const C=M+0,E=M+1,y=M+2;d.push(C,E,E,y,y,C)}}else return;const g=new(Rc(d)?Uc:Bc)(d,1);g.version=v;const p=r.get(h);p&&e.remove(p),r.set(h,g)}function u(h){const d=r.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function Ip(n,e,t){let i;function s(d){i=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,f){n.drawElements(i,f,r,d*a),t.update(f,i,1)}function c(d,f,m){m!==0&&(n.drawElementsInstanced(i,f,r,d*a,m),t.update(f,i,m))}function u(d,f,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,d,0,m);let g=0;for(let p=0;p<m;p++)g+=f[p];t.update(g,i,1)}function h(d,f,m,v){if(m===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<d.length;p++)c(d[p]/a,f[p],v[p]);else{g.multiDrawElementsInstancedWEBGL(i,f,0,r,d,0,v,0,m);let p=0;for(let A=0;A<m;A++)p+=f[A]*v[A];t.update(p,i,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Lp(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Bp(n,e,t){const i=new WeakMap,s=new at;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let d=i.get(o);if(d===void 0||d.count!==h){let w=function(){T.dispose(),i.delete(o),o.removeEventListener("dispose",w)};var f=w;d!==void 0&&d.texture.dispose();const m=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],A=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let x=0;m===!0&&(x=1),v===!0&&(x=2),g===!0&&(x=3);let C=o.attributes.position.count*x,E=1;C>e.maxTextureSize&&(E=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const y=new Float32Array(C*E*4*h),T=new Pc(y,C,E,h);T.type=dn,T.needsUpdate=!0;const S=x*4;for(let _=0;_<h;_++){const D=p[_],I=A[_],F=M[_],k=C*E*4*_;for(let z=0;z<D.count;z++){const V=z*S;m===!0&&(s.fromBufferAttribute(D,z),y[k+V+0]=s.x,y[k+V+1]=s.y,y[k+V+2]=s.z,y[k+V+3]=0),v===!0&&(s.fromBufferAttribute(I,z),y[k+V+4]=s.x,y[k+V+5]=s.y,y[k+V+6]=s.z,y[k+V+7]=0),g===!0&&(s.fromBufferAttribute(F,z),y[k+V+8]=s.x,y[k+V+9]=s.y,y[k+V+10]=s.z,y[k+V+11]=F.itemSize===4?s.w:1)}}d={count:h,texture:T,size:new de(C,E)},i.set(o,d),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let m=0;for(let g=0;g<c.length;g++)m+=c[g];const v=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function Up(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return h}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}class Xi extends wt{constructor(e,t,i,s,r,a,o,l,c,u=di){if(u!==di&&u!==pi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===di&&(i=Jn),i===void 0&&u===pi&&(i=fi),super(null,s,r,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Nt,this.minFilter=l!==void 0?l:Nt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const kc=new wt,yl=new Xi(1,1),Gc=new Pc,Hc=new vh,Vc=new Oc,_l=[],El=[],Tl=new Float32Array(16),bl=new Float32Array(9),Cl=new Float32Array(4);function ji(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=_l[s];if(r===void 0&&(r=new Float32Array(s),_l[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function bt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ct(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Rr(n,e){let t=El[e];t===void 0&&(t=new Int32Array(e),El[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Fp(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Np(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;n.uniform2fv(this.addr,e),Ct(t,e)}}function Op(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(bt(t,e))return;n.uniform3fv(this.addr,e),Ct(t,e)}}function zp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;n.uniform4fv(this.addr,e),Ct(t,e)}}function kp(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(bt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ct(t,e)}else{if(bt(t,i))return;Cl.set(i),n.uniformMatrix2fv(this.addr,!1,Cl),Ct(t,i)}}function Gp(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(bt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ct(t,e)}else{if(bt(t,i))return;bl.set(i),n.uniformMatrix3fv(this.addr,!1,bl),Ct(t,i)}}function Hp(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(bt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ct(t,e)}else{if(bt(t,i))return;Tl.set(i),n.uniformMatrix4fv(this.addr,!1,Tl),Ct(t,i)}}function Vp(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Wp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;n.uniform2iv(this.addr,e),Ct(t,e)}}function Yp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;n.uniform3iv(this.addr,e),Ct(t,e)}}function Xp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;n.uniform4iv(this.addr,e),Ct(t,e)}}function Zp(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Qp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;n.uniform2uiv(this.addr,e),Ct(t,e)}}function qp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;n.uniform3uiv(this.addr,e),Ct(t,e)}}function Kp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;n.uniform4uiv(this.addr,e),Ct(t,e)}}function Jp(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(yl.compareFunction=Cc,r=yl):r=kc,t.setTexture2D(e||r,s)}function jp(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Hc,s)}function $p(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Vc,s)}function em(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Gc,s)}function tm(n){switch(n){case 5126:return Fp;case 35664:return Np;case 35665:return Op;case 35666:return zp;case 35674:return kp;case 35675:return Gp;case 35676:return Hp;case 5124:case 35670:return Vp;case 35667:case 35671:return Wp;case 35668:case 35672:return Yp;case 35669:case 35673:return Xp;case 5125:return Zp;case 36294:return Qp;case 36295:return qp;case 36296:return Kp;case 35678:case 36198:case 36298:case 36306:case 35682:return Jp;case 35679:case 36299:case 36307:return jp;case 35680:case 36300:case 36308:case 36293:return $p;case 36289:case 36303:case 36311:case 36292:return em}}function nm(n,e){n.uniform1fv(this.addr,e)}function im(n,e){const t=ji(e,this.size,2);n.uniform2fv(this.addr,t)}function sm(n,e){const t=ji(e,this.size,3);n.uniform3fv(this.addr,t)}function rm(n,e){const t=ji(e,this.size,4);n.uniform4fv(this.addr,t)}function am(n,e){const t=ji(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function om(n,e){const t=ji(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function lm(n,e){const t=ji(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function cm(n,e){n.uniform1iv(this.addr,e)}function um(n,e){n.uniform2iv(this.addr,e)}function hm(n,e){n.uniform3iv(this.addr,e)}function dm(n,e){n.uniform4iv(this.addr,e)}function fm(n,e){n.uniform1uiv(this.addr,e)}function pm(n,e){n.uniform2uiv(this.addr,e)}function mm(n,e){n.uniform3uiv(this.addr,e)}function gm(n,e){n.uniform4uiv(this.addr,e)}function vm(n,e,t){const i=this.cache,s=e.length,r=Rr(t,s);bt(i,r)||(n.uniform1iv(this.addr,r),Ct(i,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||kc,r[a])}function xm(n,e,t){const i=this.cache,s=e.length,r=Rr(t,s);bt(i,r)||(n.uniform1iv(this.addr,r),Ct(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Hc,r[a])}function Mm(n,e,t){const i=this.cache,s=e.length,r=Rr(t,s);bt(i,r)||(n.uniform1iv(this.addr,r),Ct(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Vc,r[a])}function Am(n,e,t){const i=this.cache,s=e.length,r=Rr(t,s);bt(i,r)||(n.uniform1iv(this.addr,r),Ct(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Gc,r[a])}function Sm(n){switch(n){case 5126:return nm;case 35664:return im;case 35665:return sm;case 35666:return rm;case 35674:return am;case 35675:return om;case 35676:return lm;case 5124:case 35670:return cm;case 35667:case 35671:return um;case 35668:case 35672:return hm;case 35669:case 35673:return dm;case 5125:return fm;case 36294:return pm;case 36295:return mm;case 36296:return gm;case 35678:case 36198:case 36298:case 36306:case 35682:return vm;case 35679:case 36299:case 36307:return xm;case 35680:case 36300:case 36308:case 36293:return Mm;case 36289:case 36303:case 36311:case 36292:return Am}}class wm{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=tm(t.type)}}class ym{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Sm(t.type)}}class _m{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],i)}}}const oa=/(\w+)(\])?(\[|\.)?/g;function Rl(n,e){n.seq.push(e),n.map[e.id]=e}function Em(n,e,t){const i=n.name,s=i.length;for(oa.lastIndex=0;;){const r=oa.exec(i),a=oa.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Rl(t,c===void 0?new wm(o,n,e):new ym(o,n,e));break}else{let h=t.map[o];h===void 0&&(h=new _m(o),Rl(t,h)),t=h}}}class xr{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);Em(r,a,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&i.push(a)}return i}}function Dl(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Tm=37297;let bm=0;function Cm(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const Pl=new Xe;function Rm(n){Je._getMatrix(Pl,Je.workingColorSpace,n);const e=`mat3( ${Pl.elements.map(t=>t.toFixed(4))} )`;switch(Je.getTransfer(n)){case Cr:return[e,"LinearTransferOETF"];case lt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Il(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Cm(n.getShaderSource(e),a)}else return s}function Dm(n,e){const t=Rm(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Pm(n,e){let t;switch(e){case Du:t="Linear";break;case Pu:t="Reinhard";break;case Iu:t="Cineon";break;case Lu:t="ACESFilmic";break;case Uu:t="AgX";break;case Fu:t="Neutral";break;case Bu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const js=new N;function Im(){Je.getLuminanceCoefficients(js);const n=js.x.toFixed(4),e=js.y.toFixed(4),t=js.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Lm(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ms).join(`
`)}function Bm(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Um(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function ms(n){return n!==""}function Ll(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Bl(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Fm=/^[ \t]*#include +<([\w\d./]+)>/gm;function lo(n){return n.replace(Fm,Om)}const Nm=new Map;function Om(n,e){let t=Qe[e];if(t===void 0){const i=Nm.get(e);if(i!==void 0)t=Qe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return lo(t)}const zm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ul(n){return n.replace(zm,km)}function km(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Fl(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Gm(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===pc?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===mc?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Dn&&(e="SHADOWMAP_TYPE_VSM"),e}function Hm(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Qi:case qi:e="ENVMAP_TYPE_CUBE";break;case br:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Vm(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case qi:e="ENVMAP_MODE_REFRACTION";break}return e}function Wm(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case gc:e="ENVMAP_BLENDING_MULTIPLY";break;case Cu:e="ENVMAP_BLENDING_MIX";break;case Ru:e="ENVMAP_BLENDING_ADD";break}return e}function Ym(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Xm(n,e,t,i){const s=n.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Gm(t),c=Hm(t),u=Vm(t),h=Wm(t),d=Ym(t),f=Lm(t),m=Bm(r),v=s.createProgram();let g,p,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(ms).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(ms).join(`
`),p.length>0&&(p+=`
`)):(g=[Fl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ms).join(`
`),p=[Fl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Bn?"#define TONE_MAPPING":"",t.toneMapping!==Bn?Qe.tonemapping_pars_fragment:"",t.toneMapping!==Bn?Pm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,Dm("linearToOutputTexel",t.outputColorSpace),Im(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ms).join(`
`)),a=lo(a),a=Ll(a,t),a=Bl(a,t),o=lo(o),o=Ll(o,t),o=Bl(o,t),a=Ul(a),o=Ul(o),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===qo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===qo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=A+g+a,x=A+p+o,C=Dl(s,s.VERTEX_SHADER,M),E=Dl(s,s.FRAGMENT_SHADER,x);s.attachShader(v,C),s.attachShader(v,E),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function y(_){if(n.debug.checkShaderErrors){const D=s.getProgramInfoLog(v).trim(),I=s.getShaderInfoLog(C).trim(),F=s.getShaderInfoLog(E).trim();let k=!0,z=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(k=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,C,E);else{const V=Il(s,C,"vertex"),G=Il(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+_.name+`
Material Type: `+_.type+`

Program Info Log: `+D+`
`+V+`
`+G)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(I===""||F==="")&&(z=!1);z&&(_.diagnostics={runnable:k,programLog:D,vertexShader:{log:I,prefix:g},fragmentShader:{log:F,prefix:p}})}s.deleteShader(C),s.deleteShader(E),T=new xr(s,v),S=Um(s,v)}let T;this.getUniforms=function(){return T===void 0&&y(this),T};let S;this.getAttributes=function(){return S===void 0&&y(this),S};let w=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=s.getProgramParameter(v,Tm)),w},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=bm++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=C,this.fragmentShader=E,this}let Zm=0;class Qm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new qm(e),t.set(e,i)),i}}class qm{constructor(e){this.id=Zm++,this.code=e,this.usedTimes=0}}function Km(n,e,t,i,s,r,a){const o=new Ic,l=new Qm,c=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return c.add(S),S===0?"uv":`uv${S}`}function g(S,w,_,D,I){const F=D.fog,k=I.geometry,z=S.isMeshStandardMaterial?D.environment:null,V=(S.isMeshStandardMaterial?t:e).get(S.envMap||z),G=V&&V.mapping===br?V.image.height:null,J=m[S.type];S.precision!==null&&(f=s.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const q=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,re=q!==void 0?q.length:0;let fe=0;k.morphAttributes.position!==void 0&&(fe=1),k.morphAttributes.normal!==void 0&&(fe=2),k.morphAttributes.color!==void 0&&(fe=3);let Se,O,U,W;if(J){const Ke=mn[J];Se=Ke.vertexShader,O=Ke.fragmentShader}else Se=S.vertexShader,O=S.fragmentShader,l.update(S),U=l.getVertexShaderID(S),W=l.getFragmentShaderID(S);const H=n.getRenderTarget(),ie=n.state.buffers.depth.getReversed(),oe=I.isInstancedMesh===!0,ue=I.isBatchedMesh===!0,ne=!!S.map,j=!!S.matcap,le=!!V,B=!!S.aoMap,Me=!!S.lightMap,ce=!!S.bumpMap,xe=!!S.normalMap,ge=!!S.displacementMap,Ee=!!S.emissiveMap,we=!!S.metalnessMap,P=!!S.roughnessMap,b=S.anisotropy>0,Q=S.clearcoat>0,te=S.dispersion>0,he=S.iridescence>0,se=S.sheen>0,Le=S.transmission>0,pe=b&&!!S.anisotropyMap,Ce=Q&&!!S.clearcoatMap,He=Q&&!!S.clearcoatNormalMap,ve=Q&&!!S.clearcoatRoughnessMap,Re=he&&!!S.iridescenceMap,Ne=he&&!!S.iridescenceThicknessMap,ke=se&&!!S.sheenColorMap,Pe=se&&!!S.sheenRoughnessMap,Ze=!!S.specularMap,Ve=!!S.specularColorMap,tt=!!S.specularIntensityMap,L=Le&&!!S.transmissionMap,K=Le&&!!S.thicknessMap,Y=!!S.gradientMap,ae=!!S.alphaMap,ye=S.alphaTest>0,_e=!!S.alphaHash,Ge=!!S.extensions;let ot=Bn;S.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(ot=n.toneMapping);const ct={shaderID:J,shaderType:S.type,shaderName:S.name,vertexShader:Se,fragmentShader:O,defines:S.defines,customVertexShaderID:U,customFragmentShaderID:W,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:ue,batchingColor:ue&&I._colorsTexture!==null,instancing:oe,instancingColor:oe&&I.instanceColor!==null,instancingMorph:oe&&I.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:H===null?n.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:jn,alphaToCoverage:!!S.alphaToCoverage,map:ne,matcap:j,envMap:le,envMapMode:le&&V.mapping,envMapCubeUVHeight:G,aoMap:B,lightMap:Me,bumpMap:ce,normalMap:xe,displacementMap:d&&ge,emissiveMap:Ee,normalMapObjectSpace:xe&&S.normalMapType===zu,normalMapTangentSpace:xe&&S.normalMapType===bc,metalnessMap:we,roughnessMap:P,anisotropy:b,anisotropyMap:pe,clearcoat:Q,clearcoatMap:Ce,clearcoatNormalMap:He,clearcoatRoughnessMap:ve,dispersion:te,iridescence:he,iridescenceMap:Re,iridescenceThicknessMap:Ne,sheen:se,sheenColorMap:ke,sheenRoughnessMap:Pe,specularMap:Ze,specularColorMap:Ve,specularIntensityMap:tt,transmission:Le,transmissionMap:L,thicknessMap:K,gradientMap:Y,opaque:S.transparent===!1&&S.blending===Vi&&S.alphaToCoverage===!1,alphaMap:ae,alphaTest:ye,alphaHash:_e,combine:S.combine,mapUv:ne&&v(S.map.channel),aoMapUv:B&&v(S.aoMap.channel),lightMapUv:Me&&v(S.lightMap.channel),bumpMapUv:ce&&v(S.bumpMap.channel),normalMapUv:xe&&v(S.normalMap.channel),displacementMapUv:ge&&v(S.displacementMap.channel),emissiveMapUv:Ee&&v(S.emissiveMap.channel),metalnessMapUv:we&&v(S.metalnessMap.channel),roughnessMapUv:P&&v(S.roughnessMap.channel),anisotropyMapUv:pe&&v(S.anisotropyMap.channel),clearcoatMapUv:Ce&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:He&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ve&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Re&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ne&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:ke&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&v(S.sheenRoughnessMap.channel),specularMapUv:Ze&&v(S.specularMap.channel),specularColorMapUv:Ve&&v(S.specularColorMap.channel),specularIntensityMapUv:tt&&v(S.specularIntensityMap.channel),transmissionMapUv:L&&v(S.transmissionMap.channel),thicknessMapUv:K&&v(S.thicknessMap.channel),alphaMapUv:ae&&v(S.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(xe||b),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!k.attributes.uv&&(ne||ae),fog:!!F,useFog:S.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:ie,skinning:I.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:fe,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&_.length>0,shadowMapType:n.shadowMap.type,toneMapping:ot,decodeVideoTexture:ne&&S.map.isVideoTexture===!0&&Je.getTransfer(S.map.colorSpace)===lt,decodeVideoTextureEmissive:Ee&&S.emissiveMap.isVideoTexture===!0&&Je.getTransfer(S.emissiveMap.colorSpace)===lt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Ht,flipSided:S.side===_t,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ge&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ge&&S.extensions.multiDraw===!0||ue)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return ct.vertexUv1s=c.has(1),ct.vertexUv2s=c.has(2),ct.vertexUv3s=c.has(3),c.clear(),ct}function p(S){const w=[];if(S.shaderID?w.push(S.shaderID):(w.push(S.customVertexShaderID),w.push(S.customFragmentShaderID)),S.defines!==void 0)for(const _ in S.defines)w.push(_),w.push(S.defines[_]);return S.isRawShaderMaterial===!1&&(A(w,S),M(w,S),w.push(n.outputColorSpace)),w.push(S.customProgramCacheKey),w.join()}function A(S,w){S.push(w.precision),S.push(w.outputColorSpace),S.push(w.envMapMode),S.push(w.envMapCubeUVHeight),S.push(w.mapUv),S.push(w.alphaMapUv),S.push(w.lightMapUv),S.push(w.aoMapUv),S.push(w.bumpMapUv),S.push(w.normalMapUv),S.push(w.displacementMapUv),S.push(w.emissiveMapUv),S.push(w.metalnessMapUv),S.push(w.roughnessMapUv),S.push(w.anisotropyMapUv),S.push(w.clearcoatMapUv),S.push(w.clearcoatNormalMapUv),S.push(w.clearcoatRoughnessMapUv),S.push(w.iridescenceMapUv),S.push(w.iridescenceThicknessMapUv),S.push(w.sheenColorMapUv),S.push(w.sheenRoughnessMapUv),S.push(w.specularMapUv),S.push(w.specularColorMapUv),S.push(w.specularIntensityMapUv),S.push(w.transmissionMapUv),S.push(w.thicknessMapUv),S.push(w.combine),S.push(w.fogExp2),S.push(w.sizeAttenuation),S.push(w.morphTargetsCount),S.push(w.morphAttributeCount),S.push(w.numDirLights),S.push(w.numPointLights),S.push(w.numSpotLights),S.push(w.numSpotLightMaps),S.push(w.numHemiLights),S.push(w.numRectAreaLights),S.push(w.numDirLightShadows),S.push(w.numPointLightShadows),S.push(w.numSpotLightShadows),S.push(w.numSpotLightShadowsWithMaps),S.push(w.numLightProbes),S.push(w.shadowMapType),S.push(w.toneMapping),S.push(w.numClippingPlanes),S.push(w.numClipIntersection),S.push(w.depthPacking)}function M(S,w){o.disableAll(),w.supportsVertexTextures&&o.enable(0),w.instancing&&o.enable(1),w.instancingColor&&o.enable(2),w.instancingMorph&&o.enable(3),w.matcap&&o.enable(4),w.envMap&&o.enable(5),w.normalMapObjectSpace&&o.enable(6),w.normalMapTangentSpace&&o.enable(7),w.clearcoat&&o.enable(8),w.iridescence&&o.enable(9),w.alphaTest&&o.enable(10),w.vertexColors&&o.enable(11),w.vertexAlphas&&o.enable(12),w.vertexUv1s&&o.enable(13),w.vertexUv2s&&o.enable(14),w.vertexUv3s&&o.enable(15),w.vertexTangents&&o.enable(16),w.anisotropy&&o.enable(17),w.alphaHash&&o.enable(18),w.batching&&o.enable(19),w.dispersion&&o.enable(20),w.batchingColor&&o.enable(21),S.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reverseDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),S.push(o.mask)}function x(S){const w=m[S.type];let _;if(w){const D=mn[w];_=Ih.clone(D.uniforms)}else _=S.uniforms;return _}function C(S,w){let _;for(let D=0,I=u.length;D<I;D++){const F=u[D];if(F.cacheKey===w){_=F,++_.usedTimes;break}}return _===void 0&&(_=new Xm(n,w,S,r),u.push(_)),_}function E(S){if(--S.usedTimes===0){const w=u.indexOf(S);u[w]=u[u.length-1],u.pop(),S.destroy()}}function y(S){l.remove(S)}function T(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:x,acquireProgram:C,releaseProgram:E,releaseShaderCache:y,programs:u,dispose:T}}function Jm(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function jm(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Nl(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Ol(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(h,d,f,m,v,g){let p=n[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:m,renderOrder:h.renderOrder,z:v,group:g},n[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=h.renderOrder,p.z=v,p.group=g),e++,p}function o(h,d,f,m,v,g){const p=a(h,d,f,m,v,g);f.transmission>0?i.push(p):f.transparent===!0?s.push(p):t.push(p)}function l(h,d,f,m,v,g){const p=a(h,d,f,m,v,g);f.transmission>0?i.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function c(h,d){t.length>1&&t.sort(h||jm),i.length>1&&i.sort(d||Nl),s.length>1&&s.sort(d||Nl)}function u(){for(let h=e,d=n.length;h<d;h++){const f=n[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:o,unshift:l,finish:u,sort:c}}function $m(){let n=new WeakMap;function e(i,s){const r=n.get(i);let a;return r===void 0?(a=new Ol,n.set(i,[a])):s>=r.length?(a=new Ol,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function e0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new Te};break;case"SpotLight":t={position:new N,direction:new N,color:new Te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new Te,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new Te,groundColor:new Te};break;case"RectAreaLight":t={color:new Te,position:new N,halfWidth:new N,halfHeight:new N};break}return n[e.id]=t,t}}}function t0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let n0=0;function i0(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function s0(n){const e=new e0,t=t0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new N);const s=new N,r=new it,a=new it;function o(c){let u=0,h=0,d=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let f=0,m=0,v=0,g=0,p=0,A=0,M=0,x=0,C=0,E=0,y=0;c.sort(i0);for(let S=0,w=c.length;S<w;S++){const _=c[S],D=_.color,I=_.intensity,F=_.distance,k=_.shadow&&_.shadow.map?_.shadow.map.texture:null;if(_.isAmbientLight)u+=D.r*I,h+=D.g*I,d+=D.b*I;else if(_.isLightProbe){for(let z=0;z<9;z++)i.probe[z].addScaledVector(_.sh.coefficients[z],I);y++}else if(_.isDirectionalLight){const z=e.get(_);if(z.color.copy(_.color).multiplyScalar(_.intensity),_.castShadow){const V=_.shadow,G=t.get(_);G.shadowIntensity=V.intensity,G.shadowBias=V.bias,G.shadowNormalBias=V.normalBias,G.shadowRadius=V.radius,G.shadowMapSize=V.mapSize,i.directionalShadow[f]=G,i.directionalShadowMap[f]=k,i.directionalShadowMatrix[f]=_.shadow.matrix,A++}i.directional[f]=z,f++}else if(_.isSpotLight){const z=e.get(_);z.position.setFromMatrixPosition(_.matrixWorld),z.color.copy(D).multiplyScalar(I),z.distance=F,z.coneCos=Math.cos(_.angle),z.penumbraCos=Math.cos(_.angle*(1-_.penumbra)),z.decay=_.decay,i.spot[v]=z;const V=_.shadow;if(_.map&&(i.spotLightMap[C]=_.map,C++,V.updateMatrices(_),_.castShadow&&E++),i.spotLightMatrix[v]=V.matrix,_.castShadow){const G=t.get(_);G.shadowIntensity=V.intensity,G.shadowBias=V.bias,G.shadowNormalBias=V.normalBias,G.shadowRadius=V.radius,G.shadowMapSize=V.mapSize,i.spotShadow[v]=G,i.spotShadowMap[v]=k,x++}v++}else if(_.isRectAreaLight){const z=e.get(_);z.color.copy(D).multiplyScalar(I),z.halfWidth.set(_.width*.5,0,0),z.halfHeight.set(0,_.height*.5,0),i.rectArea[g]=z,g++}else if(_.isPointLight){const z=e.get(_);if(z.color.copy(_.color).multiplyScalar(_.intensity),z.distance=_.distance,z.decay=_.decay,_.castShadow){const V=_.shadow,G=t.get(_);G.shadowIntensity=V.intensity,G.shadowBias=V.bias,G.shadowNormalBias=V.normalBias,G.shadowRadius=V.radius,G.shadowMapSize=V.mapSize,G.shadowCameraNear=V.camera.near,G.shadowCameraFar=V.camera.far,i.pointShadow[m]=G,i.pointShadowMap[m]=k,i.pointShadowMatrix[m]=_.shadow.matrix,M++}i.point[m]=z,m++}else if(_.isHemisphereLight){const z=e.get(_);z.skyColor.copy(_.color).multiplyScalar(I),z.groundColor.copy(_.groundColor).multiplyScalar(I),i.hemi[p]=z,p++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=be.LTC_FLOAT_1,i.rectAreaLTC2=be.LTC_FLOAT_2):(i.rectAreaLTC1=be.LTC_HALF_1,i.rectAreaLTC2=be.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;const T=i.hash;(T.directionalLength!==f||T.pointLength!==m||T.spotLength!==v||T.rectAreaLength!==g||T.hemiLength!==p||T.numDirectionalShadows!==A||T.numPointShadows!==M||T.numSpotShadows!==x||T.numSpotMaps!==C||T.numLightProbes!==y)&&(i.directional.length=f,i.spot.length=v,i.rectArea.length=g,i.point.length=m,i.hemi.length=p,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=A,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=x+C-E,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=y,T.directionalLength=f,T.pointLength=m,T.spotLength=v,T.rectAreaLength=g,T.hemiLength=p,T.numDirectionalShadows=A,T.numPointShadows=M,T.numSpotShadows=x,T.numSpotMaps=C,T.numLightProbes=y,i.version=n0++)}function l(c,u){let h=0,d=0,f=0,m=0,v=0;const g=u.matrixWorldInverse;for(let p=0,A=c.length;p<A;p++){const M=c[p];if(M.isDirectionalLight){const x=i.directional[h];x.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(g),h++}else if(M.isSpotLight){const x=i.spot[f];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(g),x.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(g),f++}else if(M.isRectAreaLight){const x=i.rectArea[m];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(g),a.identity(),r.copy(M.matrixWorld),r.premultiply(g),a.extractRotation(r),x.halfWidth.set(M.width*.5,0,0),x.halfHeight.set(0,M.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),m++}else if(M.isPointLight){const x=i.point[d];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(g),d++}else if(M.isHemisphereLight){const x=i.hemi[v];x.direction.setFromMatrixPosition(M.matrixWorld),x.direction.transformDirection(g),v++}}}return{setup:o,setupView:l,state:i}}function zl(n){const e=new s0(n),t=[],i=[];function s(u){c.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function a(u){i.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function r0(n){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new zl(n),e.set(s,[o])):r>=a.length?(o=new zl(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}class a0 extends zn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=xi,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class o0 extends zn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const l0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,c0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function u0(n,e,t){let i=new To;const s=new de,r=new de,a=new at,o=new a0({depthPacking:Ou}),l=new o0,c={},u=t.maxTextureSize,h={[Fn]:_t,[_t]:Fn,[Ht]:Ht},d=new xt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new de},radius:{value:4}},vertexShader:l0,fragmentShader:c0}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const m=new Rt;m.setAttribute("position",new Tt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Oe(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=pc;let p=this.type;this.render=function(E,y,T){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;const S=n.getRenderTarget(),w=n.getActiveCubeFace(),_=n.getActiveMipmapLevel(),D=n.state;D.setBlending(Ft),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const I=p!==Dn&&this.type===Dn,F=p===Dn&&this.type!==Dn;for(let k=0,z=E.length;k<z;k++){const V=E[k],G=V.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",V,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const J=G.getFrameExtents();if(s.multiply(J),r.copy(G.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/J.x),s.x=r.x*J.x,G.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/J.y),s.y=r.y*J.y,G.mapSize.y=r.y)),G.map===null||I===!0||F===!0){const re=this.type!==Dn?{minFilter:Nt,magFilter:Nt}:{};G.map!==null&&G.map.dispose(),G.map=new Mt(s.x,s.y,re),G.map.texture.name=V.name+".shadowMap",G.camera.updateProjectionMatrix()}n.setRenderTarget(G.map),n.clear();const q=G.getViewportCount();for(let re=0;re<q;re++){const fe=G.getViewport(re);a.set(r.x*fe.x,r.y*fe.y,r.x*fe.z,r.y*fe.w),D.viewport(a),G.updateMatrices(V,re),i=G.getFrustum(),x(y,T,G.camera,V,this.type)}G.isPointLightShadow!==!0&&this.type===Dn&&A(G,T),G.needsUpdate=!1}p=this.type,g.needsUpdate=!1,n.setRenderTarget(S,w,_)};function A(E,y){const T=e.update(v);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Mt(s.x,s.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(y,null,T,d,v,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(y,null,T,f,v,null)}function M(E,y,T,S){let w=null;const _=T.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(_!==void 0)w=_;else if(w=T.isPointLight===!0?l:o,n.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0){const D=w.uuid,I=y.uuid;let F=c[D];F===void 0&&(F={},c[D]=F);let k=F[I];k===void 0&&(k=w.clone(),F[I]=k,y.addEventListener("dispose",C)),w=k}if(w.visible=y.visible,w.wireframe=y.wireframe,S===Dn?w.side=y.shadowSide!==null?y.shadowSide:y.side:w.side=y.shadowSide!==null?y.shadowSide:h[y.side],w.alphaMap=y.alphaMap,w.alphaTest=y.alphaTest,w.map=y.map,w.clipShadows=y.clipShadows,w.clippingPlanes=y.clippingPlanes,w.clipIntersection=y.clipIntersection,w.displacementMap=y.displacementMap,w.displacementScale=y.displacementScale,w.displacementBias=y.displacementBias,w.wireframeLinewidth=y.wireframeLinewidth,w.linewidth=y.linewidth,T.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const D=n.properties.get(w);D.light=T}return w}function x(E,y,T,S,w){if(E.visible===!1)return;if(E.layers.test(y.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&w===Dn)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,E.matrixWorld);const I=e.update(E),F=E.material;if(Array.isArray(F)){const k=I.groups;for(let z=0,V=k.length;z<V;z++){const G=k[z],J=F[G.materialIndex];if(J&&J.visible){const q=M(E,J,S,w);E.onBeforeShadow(n,E,y,T,I,q,G),n.renderBufferDirect(T,null,I,q,E,G),E.onAfterShadow(n,E,y,T,I,q,G)}}}else if(F.visible){const k=M(E,F,S,w);E.onBeforeShadow(n,E,y,T,I,k,null),n.renderBufferDirect(T,null,I,k,E,null),E.onAfterShadow(n,E,y,T,I,k,null)}}const D=E.children;for(let I=0,F=D.length;I<F;I++)x(D[I],y,T,S,w)}function C(E){E.target.removeEventListener("dispose",C);for(const T in c){const S=c[T],w=E.target.uuid;w in S&&(S[w].dispose(),delete S[w])}}}const h0={[Ta]:Ar,[ba]:Da,[Ca]:Pa,[Zi]:Ra,[Ar]:Ta,[Da]:ba,[Pa]:Ca,[Ra]:Zi};function d0(n,e){function t(){let L=!1;const K=new at;let Y=null;const ae=new at(0,0,0,0);return{setMask:function(ye){Y!==ye&&!L&&(n.colorMask(ye,ye,ye,ye),Y=ye)},setLocked:function(ye){L=ye},setClear:function(ye,_e,Ge,ot,ct){ct===!0&&(ye*=ot,_e*=ot,Ge*=ot),K.set(ye,_e,Ge,ot),ae.equals(K)===!1&&(n.clearColor(ye,_e,Ge,ot),ae.copy(K))},reset:function(){L=!1,Y=null,ae.set(-1,0,0,0)}}}function i(){let L=!1,K=!1,Y=null,ae=null,ye=null;return{setReversed:function(_e){if(K!==_e){const Ge=e.get("EXT_clip_control");K?Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.ZERO_TO_ONE_EXT):Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.NEGATIVE_ONE_TO_ONE_EXT);const ot=ye;ye=null,this.setClear(ot)}K=_e},getReversed:function(){return K},setTest:function(_e){_e?H(n.DEPTH_TEST):ie(n.DEPTH_TEST)},setMask:function(_e){Y!==_e&&!L&&(n.depthMask(_e),Y=_e)},setFunc:function(_e){if(K&&(_e=h0[_e]),ae!==_e){switch(_e){case Ta:n.depthFunc(n.NEVER);break;case Ar:n.depthFunc(n.ALWAYS);break;case ba:n.depthFunc(n.LESS);break;case Zi:n.depthFunc(n.LEQUAL);break;case Ca:n.depthFunc(n.EQUAL);break;case Ra:n.depthFunc(n.GEQUAL);break;case Da:n.depthFunc(n.GREATER);break;case Pa:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ae=_e}},setLocked:function(_e){L=_e},setClear:function(_e){ye!==_e&&(K&&(_e=1-_e),n.clearDepth(_e),ye=_e)},reset:function(){L=!1,Y=null,ae=null,ye=null,K=!1}}}function s(){let L=!1,K=null,Y=null,ae=null,ye=null,_e=null,Ge=null,ot=null,ct=null;return{setTest:function(Ke){L||(Ke?H(n.STENCIL_TEST):ie(n.STENCIL_TEST))},setMask:function(Ke){K!==Ke&&!L&&(n.stencilMask(Ke),K=Ke)},setFunc:function(Ke,Qt,wn){(Y!==Ke||ae!==Qt||ye!==wn)&&(n.stencilFunc(Ke,Qt,wn),Y=Ke,ae=Qt,ye=wn)},setOp:function(Ke,Qt,wn){(_e!==Ke||Ge!==Qt||ot!==wn)&&(n.stencilOp(Ke,Qt,wn),_e=Ke,Ge=Qt,ot=wn)},setLocked:function(Ke){L=Ke},setClear:function(Ke){ct!==Ke&&(n.clearStencil(Ke),ct=Ke)},reset:function(){L=!1,K=null,Y=null,ae=null,ye=null,_e=null,Ge=null,ot=null,ct=null}}}const r=new t,a=new i,o=new s,l=new WeakMap,c=new WeakMap;let u={},h={},d=new WeakMap,f=[],m=null,v=!1,g=null,p=null,A=null,M=null,x=null,C=null,E=null,y=new Te(0,0,0),T=0,S=!1,w=null,_=null,D=null,I=null,F=null;const k=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,V=0;const G=n.getParameter(n.VERSION);G.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(G)[1]),z=V>=1):G.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),z=V>=2);let J=null,q={};const re=n.getParameter(n.SCISSOR_BOX),fe=n.getParameter(n.VIEWPORT),Se=new at().fromArray(re),O=new at().fromArray(fe);function U(L,K,Y,ae){const ye=new Uint8Array(4),_e=n.createTexture();n.bindTexture(L,_e),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ge=0;Ge<Y;Ge++)L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY?n.texImage3D(K,0,n.RGBA,1,1,ae,0,n.RGBA,n.UNSIGNED_BYTE,ye):n.texImage2D(K+Ge,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ye);return _e}const W={};W[n.TEXTURE_2D]=U(n.TEXTURE_2D,n.TEXTURE_2D,1),W[n.TEXTURE_CUBE_MAP]=U(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),W[n.TEXTURE_2D_ARRAY]=U(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),W[n.TEXTURE_3D]=U(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),H(n.DEPTH_TEST),a.setFunc(Zi),ce(!1),xe(Wo),H(n.CULL_FACE),B(Ft);function H(L){u[L]!==!0&&(n.enable(L),u[L]=!0)}function ie(L){u[L]!==!1&&(n.disable(L),u[L]=!1)}function oe(L,K){return h[L]!==K?(n.bindFramebuffer(L,K),h[L]=K,L===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=K),L===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=K),!0):!1}function ue(L,K){let Y=f,ae=!1;if(L){Y=d.get(K),Y===void 0&&(Y=[],d.set(K,Y));const ye=L.textures;if(Y.length!==ye.length||Y[0]!==n.COLOR_ATTACHMENT0){for(let _e=0,Ge=ye.length;_e<Ge;_e++)Y[_e]=n.COLOR_ATTACHMENT0+_e;Y.length=ye.length,ae=!0}}else Y[0]!==n.BACK&&(Y[0]=n.BACK,ae=!0);ae&&n.drawBuffers(Y)}function ne(L){return m!==L?(n.useProgram(L),m=L,!0):!1}const j={[ui]:n.FUNC_ADD,[hu]:n.FUNC_SUBTRACT,[du]:n.FUNC_REVERSE_SUBTRACT};j[fu]=n.MIN,j[pu]=n.MAX;const le={[mu]:n.ZERO,[gu]:n.ONE,[vu]:n.SRC_COLOR,[_a]:n.SRC_ALPHA,[yu]:n.SRC_ALPHA_SATURATE,[Su]:n.DST_COLOR,[Mu]:n.DST_ALPHA,[xu]:n.ONE_MINUS_SRC_COLOR,[Ea]:n.ONE_MINUS_SRC_ALPHA,[wu]:n.ONE_MINUS_DST_COLOR,[Au]:n.ONE_MINUS_DST_ALPHA,[_u]:n.CONSTANT_COLOR,[Eu]:n.ONE_MINUS_CONSTANT_COLOR,[Tu]:n.CONSTANT_ALPHA,[bu]:n.ONE_MINUS_CONSTANT_ALPHA};function B(L,K,Y,ae,ye,_e,Ge,ot,ct,Ke){if(L===Ft){v===!0&&(ie(n.BLEND),v=!1);return}if(v===!1&&(H(n.BLEND),v=!0),L!==uu){if(L!==g||Ke!==S){if((p!==ui||x!==ui)&&(n.blendEquation(n.FUNC_ADD),p=ui,x=ui),Ke)switch(L){case Vi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Mr:n.blendFunc(n.ONE,n.ONE);break;case Yo:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Xo:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Vi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Mr:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Yo:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Xo:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}A=null,M=null,C=null,E=null,y.set(0,0,0),T=0,g=L,S=Ke}return}ye=ye||K,_e=_e||Y,Ge=Ge||ae,(K!==p||ye!==x)&&(n.blendEquationSeparate(j[K],j[ye]),p=K,x=ye),(Y!==A||ae!==M||_e!==C||Ge!==E)&&(n.blendFuncSeparate(le[Y],le[ae],le[_e],le[Ge]),A=Y,M=ae,C=_e,E=Ge),(ot.equals(y)===!1||ct!==T)&&(n.blendColor(ot.r,ot.g,ot.b,ct),y.copy(ot),T=ct),g=L,S=!1}function Me(L,K){L.side===Ht?ie(n.CULL_FACE):H(n.CULL_FACE);let Y=L.side===_t;K&&(Y=!Y),ce(Y),L.blending===Vi&&L.transparent===!1?B(Ft):B(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);const ae=L.stencilWrite;o.setTest(ae),ae&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Ee(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?H(n.SAMPLE_ALPHA_TO_COVERAGE):ie(n.SAMPLE_ALPHA_TO_COVERAGE)}function ce(L){w!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),w=L)}function xe(L){L!==lu?(H(n.CULL_FACE),L!==_&&(L===Wo?n.cullFace(n.BACK):L===cu?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ie(n.CULL_FACE),_=L}function ge(L){L!==D&&(z&&n.lineWidth(L),D=L)}function Ee(L,K,Y){L?(H(n.POLYGON_OFFSET_FILL),(I!==K||F!==Y)&&(n.polygonOffset(K,Y),I=K,F=Y)):ie(n.POLYGON_OFFSET_FILL)}function we(L){L?H(n.SCISSOR_TEST):ie(n.SCISSOR_TEST)}function P(L){L===void 0&&(L=n.TEXTURE0+k-1),J!==L&&(n.activeTexture(L),J=L)}function b(L,K,Y){Y===void 0&&(J===null?Y=n.TEXTURE0+k-1:Y=J);let ae=q[Y];ae===void 0&&(ae={type:void 0,texture:void 0},q[Y]=ae),(ae.type!==L||ae.texture!==K)&&(J!==Y&&(n.activeTexture(Y),J=Y),n.bindTexture(L,K||W[L]),ae.type=L,ae.texture=K)}function Q(){const L=q[J];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function te(){try{n.compressedTexImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function he(){try{n.compressedTexImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function se(){try{n.texSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Le(){try{n.texSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function pe(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ce(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function He(){try{n.texStorage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ve(){try{n.texStorage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Re(){try{n.texImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ne(){try{n.texImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ke(L){Se.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),Se.copy(L))}function Pe(L){O.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),O.copy(L))}function Ze(L,K){let Y=c.get(K);Y===void 0&&(Y=new WeakMap,c.set(K,Y));let ae=Y.get(L);ae===void 0&&(ae=n.getUniformBlockIndex(K,L.name),Y.set(L,ae))}function Ve(L,K){const ae=c.get(K).get(L);l.get(K)!==ae&&(n.uniformBlockBinding(K,ae,L.__bindingPointIndex),l.set(K,ae))}function tt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},J=null,q={},h={},d=new WeakMap,f=[],m=null,v=!1,g=null,p=null,A=null,M=null,x=null,C=null,E=null,y=new Te(0,0,0),T=0,S=!1,w=null,_=null,D=null,I=null,F=null,Se.set(0,0,n.canvas.width,n.canvas.height),O.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:H,disable:ie,bindFramebuffer:oe,drawBuffers:ue,useProgram:ne,setBlending:B,setMaterial:Me,setFlipSided:ce,setCullFace:xe,setLineWidth:ge,setPolygonOffset:Ee,setScissorTest:we,activeTexture:P,bindTexture:b,unbindTexture:Q,compressedTexImage2D:te,compressedTexImage3D:he,texImage2D:Re,texImage3D:Ne,updateUBOMapping:Ze,uniformBlockBinding:Ve,texStorage2D:He,texStorage3D:ve,texSubImage2D:se,texSubImage3D:Le,compressedTexSubImage2D:pe,compressedTexSubImage3D:Ce,scissor:ke,viewport:Pe,reset:tt}}function kl(n,e,t,i){const s=f0(i);switch(t){case Sc:return n*e;case yc:return n*e;case _c:return n*e*2;case Ao:return n*e/s.components*s.byteLength;case So:return n*e/s.components*s.byteLength;case Ec:return n*e*2/s.components*s.byteLength;case wo:return n*e*2/s.components*s.byteLength;case wc:return n*e*3/s.components*s.byteLength;case Et:return n*e*4/s.components*s.byteLength;case yo:return n*e*4/s.components*s.byteLength;case fr:case pr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case mr:case gr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Fa:case Oa:return Math.max(n,16)*Math.max(e,8)/4;case Ua:case Na:return Math.max(n,8)*Math.max(e,8)/2;case za:case ka:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ga:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ha:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Va:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Wa:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Ya:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Xa:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Za:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Qa:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case qa:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Ka:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Ja:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case ja:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case $a:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case eo:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case to:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case vr:case no:case io:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Tc:case so:return Math.ceil(n/4)*Math.ceil(e/4)*8;case ro:case ao:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function f0(n){switch(n){case Lt:case xc:return{byteLength:1,components:1};case As:case Mc:case Nn:return{byteLength:2,components:1};case xo:case Mo:return{byteLength:2,components:4};case Jn:case vo:case dn:return{byteLength:4,components:1};case Ac:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function p0(n,e,t,i,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new de,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(P,b){return f?new OffscreenCanvas(P,b):wr("canvas")}function v(P,b,Q){let te=1;const he=we(P);if((he.width>Q||he.height>Q)&&(te=Q/Math.max(he.width,he.height)),te<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const se=Math.floor(te*he.width),Le=Math.floor(te*he.height);h===void 0&&(h=m(se,Le));const pe=b?m(se,Le):h;return pe.width=se,pe.height=Le,pe.getContext("2d").drawImage(P,0,0,se,Le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+he.width+"x"+he.height+") to ("+se+"x"+Le+")."),pe}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+he.width+"x"+he.height+")."),P;return P}function g(P){return P.generateMipmaps}function p(P){n.generateMipmap(P)}function A(P){return P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?n.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(P,b,Q,te,he=!1){if(P!==null){if(n[P]!==void 0)return n[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let se=b;if(b===n.RED&&(Q===n.FLOAT&&(se=n.R32F),Q===n.HALF_FLOAT&&(se=n.R16F),Q===n.UNSIGNED_BYTE&&(se=n.R8)),b===n.RED_INTEGER&&(Q===n.UNSIGNED_BYTE&&(se=n.R8UI),Q===n.UNSIGNED_SHORT&&(se=n.R16UI),Q===n.UNSIGNED_INT&&(se=n.R32UI),Q===n.BYTE&&(se=n.R8I),Q===n.SHORT&&(se=n.R16I),Q===n.INT&&(se=n.R32I)),b===n.RG&&(Q===n.FLOAT&&(se=n.RG32F),Q===n.HALF_FLOAT&&(se=n.RG16F),Q===n.UNSIGNED_BYTE&&(se=n.RG8)),b===n.RG_INTEGER&&(Q===n.UNSIGNED_BYTE&&(se=n.RG8UI),Q===n.UNSIGNED_SHORT&&(se=n.RG16UI),Q===n.UNSIGNED_INT&&(se=n.RG32UI),Q===n.BYTE&&(se=n.RG8I),Q===n.SHORT&&(se=n.RG16I),Q===n.INT&&(se=n.RG32I)),b===n.RGB_INTEGER&&(Q===n.UNSIGNED_BYTE&&(se=n.RGB8UI),Q===n.UNSIGNED_SHORT&&(se=n.RGB16UI),Q===n.UNSIGNED_INT&&(se=n.RGB32UI),Q===n.BYTE&&(se=n.RGB8I),Q===n.SHORT&&(se=n.RGB16I),Q===n.INT&&(se=n.RGB32I)),b===n.RGBA_INTEGER&&(Q===n.UNSIGNED_BYTE&&(se=n.RGBA8UI),Q===n.UNSIGNED_SHORT&&(se=n.RGBA16UI),Q===n.UNSIGNED_INT&&(se=n.RGBA32UI),Q===n.BYTE&&(se=n.RGBA8I),Q===n.SHORT&&(se=n.RGBA16I),Q===n.INT&&(se=n.RGBA32I)),b===n.RGB&&Q===n.UNSIGNED_INT_5_9_9_9_REV&&(se=n.RGB9_E5),b===n.RGBA){const Le=he?Cr:Je.getTransfer(te);Q===n.FLOAT&&(se=n.RGBA32F),Q===n.HALF_FLOAT&&(se=n.RGBA16F),Q===n.UNSIGNED_BYTE&&(se=Le===lt?n.SRGB8_ALPHA8:n.RGBA8),Q===n.UNSIGNED_SHORT_4_4_4_4&&(se=n.RGBA4),Q===n.UNSIGNED_SHORT_5_5_5_1&&(se=n.RGB5_A1)}return(se===n.R16F||se===n.R32F||se===n.RG16F||se===n.RG32F||se===n.RGBA16F||se===n.RGBA32F)&&e.get("EXT_color_buffer_float"),se}function x(P,b){let Q;return P?b===null||b===Jn||b===fi?Q=n.DEPTH24_STENCIL8:b===dn?Q=n.DEPTH32F_STENCIL8:b===As&&(Q=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Jn||b===fi?Q=n.DEPTH_COMPONENT24:b===dn?Q=n.DEPTH_COMPONENT32F:b===As&&(Q=n.DEPTH_COMPONENT16),Q}function C(P,b){return g(P)===!0||P.isFramebufferTexture&&P.minFilter!==Nt&&P.minFilter!==ut?Math.log2(Math.max(b.width,b.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?b.mipmaps.length:1}function E(P){const b=P.target;b.removeEventListener("dispose",E),T(b),b.isVideoTexture&&u.delete(b)}function y(P){const b=P.target;b.removeEventListener("dispose",y),w(b)}function T(P){const b=i.get(P);if(b.__webglInit===void 0)return;const Q=P.source,te=d.get(Q);if(te){const he=te[b.__cacheKey];he.usedTimes--,he.usedTimes===0&&S(P),Object.keys(te).length===0&&d.delete(Q)}i.remove(P)}function S(P){const b=i.get(P);n.deleteTexture(b.__webglTexture);const Q=P.source,te=d.get(Q);delete te[b.__cacheKey],a.memory.textures--}function w(P){const b=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(b.__webglFramebuffer[te]))for(let he=0;he<b.__webglFramebuffer[te].length;he++)n.deleteFramebuffer(b.__webglFramebuffer[te][he]);else n.deleteFramebuffer(b.__webglFramebuffer[te]);b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer[te])}else{if(Array.isArray(b.__webglFramebuffer))for(let te=0;te<b.__webglFramebuffer.length;te++)n.deleteFramebuffer(b.__webglFramebuffer[te]);else n.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&n.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let te=0;te<b.__webglColorRenderbuffer.length;te++)b.__webglColorRenderbuffer[te]&&n.deleteRenderbuffer(b.__webglColorRenderbuffer[te]);b.__webglDepthRenderbuffer&&n.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const Q=P.textures;for(let te=0,he=Q.length;te<he;te++){const se=i.get(Q[te]);se.__webglTexture&&(n.deleteTexture(se.__webglTexture),a.memory.textures--),i.remove(Q[te])}i.remove(P)}let _=0;function D(){_=0}function I(){const P=_;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),_+=1,P}function F(P){const b=[];return b.push(P.wrapS),b.push(P.wrapT),b.push(P.wrapR||0),b.push(P.magFilter),b.push(P.minFilter),b.push(P.anisotropy),b.push(P.internalFormat),b.push(P.format),b.push(P.type),b.push(P.generateMipmaps),b.push(P.premultiplyAlpha),b.push(P.flipY),b.push(P.unpackAlignment),b.push(P.colorSpace),b.join()}function k(P,b){const Q=i.get(P);if(P.isVideoTexture&&ge(P),P.isRenderTargetTexture===!1&&P.version>0&&Q.__version!==P.version){const te=P.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{O(Q,P,b);return}}t.bindTexture(n.TEXTURE_2D,Q.__webglTexture,n.TEXTURE0+b)}function z(P,b){const Q=i.get(P);if(P.version>0&&Q.__version!==P.version){O(Q,P,b);return}t.bindTexture(n.TEXTURE_2D_ARRAY,Q.__webglTexture,n.TEXTURE0+b)}function V(P,b){const Q=i.get(P);if(P.version>0&&Q.__version!==P.version){O(Q,P,b);return}t.bindTexture(n.TEXTURE_3D,Q.__webglTexture,n.TEXTURE0+b)}function G(P,b){const Q=i.get(P);if(P.version>0&&Q.__version!==P.version){U(Q,P,b);return}t.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture,n.TEXTURE0+b)}const J={[Bt]:n.REPEAT,[$t]:n.CLAMP_TO_EDGE,[Ba]:n.MIRRORED_REPEAT},q={[Nt]:n.NEAREST,[Nu]:n.NEAREST_MIPMAP_NEAREST,[Is]:n.NEAREST_MIPMAP_LINEAR,[ut]:n.LINEAR,[Br]:n.LINEAR_MIPMAP_NEAREST,[vn]:n.LINEAR_MIPMAP_LINEAR},re={[ku]:n.NEVER,[Xu]:n.ALWAYS,[Gu]:n.LESS,[Cc]:n.LEQUAL,[Hu]:n.EQUAL,[Yu]:n.GEQUAL,[Vu]:n.GREATER,[Wu]:n.NOTEQUAL};function fe(P,b){if(b.type===dn&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===ut||b.magFilter===Br||b.magFilter===Is||b.magFilter===vn||b.minFilter===ut||b.minFilter===Br||b.minFilter===Is||b.minFilter===vn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(P,n.TEXTURE_WRAP_S,J[b.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,J[b.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,J[b.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,q[b.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,q[b.minFilter]),b.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,re[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Nt||b.minFilter!==Is&&b.minFilter!==vn||b.type===dn&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){const Q=e.get("EXT_texture_filter_anisotropic");n.texParameterf(P,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function Se(P,b){let Q=!1;P.__webglInit===void 0&&(P.__webglInit=!0,b.addEventListener("dispose",E));const te=b.source;let he=d.get(te);he===void 0&&(he={},d.set(te,he));const se=F(b);if(se!==P.__cacheKey){he[se]===void 0&&(he[se]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,Q=!0),he[se].usedTimes++;const Le=he[P.__cacheKey];Le!==void 0&&(he[P.__cacheKey].usedTimes--,Le.usedTimes===0&&S(b)),P.__cacheKey=se,P.__webglTexture=he[se].texture}return Q}function O(P,b,Q){let te=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(te=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&(te=n.TEXTURE_3D);const he=Se(P,b),se=b.source;t.bindTexture(te,P.__webglTexture,n.TEXTURE0+Q);const Le=i.get(se);if(se.version!==Le.__version||he===!0){t.activeTexture(n.TEXTURE0+Q);const pe=Je.getPrimaries(Je.workingColorSpace),Ce=b.colorSpace===gn?null:Je.getPrimaries(b.colorSpace),He=b.colorSpace===gn||pe===Ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,He);let ve=v(b.image,!1,s.maxTextureSize);ve=Ee(b,ve);const Re=r.convert(b.format,b.colorSpace),Ne=r.convert(b.type);let ke=M(b.internalFormat,Re,Ne,b.colorSpace,b.isVideoTexture);fe(te,b);let Pe;const Ze=b.mipmaps,Ve=b.isVideoTexture!==!0,tt=Le.__version===void 0||he===!0,L=se.dataReady,K=C(b,ve);if(b.isDepthTexture)ke=x(b.format===pi,b.type),tt&&(Ve?t.texStorage2D(n.TEXTURE_2D,1,ke,ve.width,ve.height):t.texImage2D(n.TEXTURE_2D,0,ke,ve.width,ve.height,0,Re,Ne,null));else if(b.isDataTexture)if(Ze.length>0){Ve&&tt&&t.texStorage2D(n.TEXTURE_2D,K,ke,Ze[0].width,Ze[0].height);for(let Y=0,ae=Ze.length;Y<ae;Y++)Pe=Ze[Y],Ve?L&&t.texSubImage2D(n.TEXTURE_2D,Y,0,0,Pe.width,Pe.height,Re,Ne,Pe.data):t.texImage2D(n.TEXTURE_2D,Y,ke,Pe.width,Pe.height,0,Re,Ne,Pe.data);b.generateMipmaps=!1}else Ve?(tt&&t.texStorage2D(n.TEXTURE_2D,K,ke,ve.width,ve.height),L&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ve.width,ve.height,Re,Ne,ve.data)):t.texImage2D(n.TEXTURE_2D,0,ke,ve.width,ve.height,0,Re,Ne,ve.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Ve&&tt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,K,ke,Ze[0].width,Ze[0].height,ve.depth);for(let Y=0,ae=Ze.length;Y<ae;Y++)if(Pe=Ze[Y],b.format!==Et)if(Re!==null)if(Ve){if(L)if(b.layerUpdates.size>0){const ye=kl(Pe.width,Pe.height,b.format,b.type);for(const _e of b.layerUpdates){const Ge=Pe.data.subarray(_e*ye/Pe.data.BYTES_PER_ELEMENT,(_e+1)*ye/Pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,_e,Pe.width,Pe.height,1,Re,Ge)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,0,Pe.width,Pe.height,ve.depth,Re,Pe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Y,ke,Pe.width,Pe.height,ve.depth,0,Pe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ve?L&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,0,Pe.width,Pe.height,ve.depth,Re,Ne,Pe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Y,ke,Pe.width,Pe.height,ve.depth,0,Re,Ne,Pe.data)}else{Ve&&tt&&t.texStorage2D(n.TEXTURE_2D,K,ke,Ze[0].width,Ze[0].height);for(let Y=0,ae=Ze.length;Y<ae;Y++)Pe=Ze[Y],b.format!==Et?Re!==null?Ve?L&&t.compressedTexSubImage2D(n.TEXTURE_2D,Y,0,0,Pe.width,Pe.height,Re,Pe.data):t.compressedTexImage2D(n.TEXTURE_2D,Y,ke,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?L&&t.texSubImage2D(n.TEXTURE_2D,Y,0,0,Pe.width,Pe.height,Re,Ne,Pe.data):t.texImage2D(n.TEXTURE_2D,Y,ke,Pe.width,Pe.height,0,Re,Ne,Pe.data)}else if(b.isDataArrayTexture)if(Ve){if(tt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,K,ke,ve.width,ve.height,ve.depth),L)if(b.layerUpdates.size>0){const Y=kl(ve.width,ve.height,b.format,b.type);for(const ae of b.layerUpdates){const ye=ve.data.subarray(ae*Y/ve.data.BYTES_PER_ELEMENT,(ae+1)*Y/ve.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ae,ve.width,ve.height,1,Re,Ne,ye)}b.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ve.width,ve.height,ve.depth,Re,Ne,ve.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ke,ve.width,ve.height,ve.depth,0,Re,Ne,ve.data);else if(b.isData3DTexture)Ve?(tt&&t.texStorage3D(n.TEXTURE_3D,K,ke,ve.width,ve.height,ve.depth),L&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ve.width,ve.height,ve.depth,Re,Ne,ve.data)):t.texImage3D(n.TEXTURE_3D,0,ke,ve.width,ve.height,ve.depth,0,Re,Ne,ve.data);else if(b.isFramebufferTexture){if(tt)if(Ve)t.texStorage2D(n.TEXTURE_2D,K,ke,ve.width,ve.height);else{let Y=ve.width,ae=ve.height;for(let ye=0;ye<K;ye++)t.texImage2D(n.TEXTURE_2D,ye,ke,Y,ae,0,Re,Ne,null),Y>>=1,ae>>=1}}else if(Ze.length>0){if(Ve&&tt){const Y=we(Ze[0]);t.texStorage2D(n.TEXTURE_2D,K,ke,Y.width,Y.height)}for(let Y=0,ae=Ze.length;Y<ae;Y++)Pe=Ze[Y],Ve?L&&t.texSubImage2D(n.TEXTURE_2D,Y,0,0,Re,Ne,Pe):t.texImage2D(n.TEXTURE_2D,Y,ke,Re,Ne,Pe);b.generateMipmaps=!1}else if(Ve){if(tt){const Y=we(ve);t.texStorage2D(n.TEXTURE_2D,K,ke,Y.width,Y.height)}L&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Re,Ne,ve)}else t.texImage2D(n.TEXTURE_2D,0,ke,Re,Ne,ve);g(b)&&p(te),Le.__version=se.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function U(P,b,Q){if(b.image.length!==6)return;const te=Se(P,b),he=b.source;t.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+Q);const se=i.get(he);if(he.version!==se.__version||te===!0){t.activeTexture(n.TEXTURE0+Q);const Le=Je.getPrimaries(Je.workingColorSpace),pe=b.colorSpace===gn?null:Je.getPrimaries(b.colorSpace),Ce=b.colorSpace===gn||Le===pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);const He=b.isCompressedTexture||b.image[0].isCompressedTexture,ve=b.image[0]&&b.image[0].isDataTexture,Re=[];for(let ae=0;ae<6;ae++)!He&&!ve?Re[ae]=v(b.image[ae],!0,s.maxCubemapSize):Re[ae]=ve?b.image[ae].image:b.image[ae],Re[ae]=Ee(b,Re[ae]);const Ne=Re[0],ke=r.convert(b.format,b.colorSpace),Pe=r.convert(b.type),Ze=M(b.internalFormat,ke,Pe,b.colorSpace),Ve=b.isVideoTexture!==!0,tt=se.__version===void 0||te===!0,L=he.dataReady;let K=C(b,Ne);fe(n.TEXTURE_CUBE_MAP,b);let Y;if(He){Ve&&tt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,K,Ze,Ne.width,Ne.height);for(let ae=0;ae<6;ae++){Y=Re[ae].mipmaps;for(let ye=0;ye<Y.length;ye++){const _e=Y[ye];b.format!==Et?ke!==null?Ve?L&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ye,0,0,_e.width,_e.height,ke,_e.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ye,Ze,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ve?L&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ye,0,0,_e.width,_e.height,ke,Pe,_e.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ye,Ze,_e.width,_e.height,0,ke,Pe,_e.data)}}}else{if(Y=b.mipmaps,Ve&&tt){Y.length>0&&K++;const ae=we(Re[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,K,Ze,ae.width,ae.height)}for(let ae=0;ae<6;ae++)if(ve){Ve?L&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,Re[ae].width,Re[ae].height,ke,Pe,Re[ae].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,Ze,Re[ae].width,Re[ae].height,0,ke,Pe,Re[ae].data);for(let ye=0;ye<Y.length;ye++){const Ge=Y[ye].image[ae].image;Ve?L&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ye+1,0,0,Ge.width,Ge.height,ke,Pe,Ge.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ye+1,Ze,Ge.width,Ge.height,0,ke,Pe,Ge.data)}}else{Ve?L&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,ke,Pe,Re[ae]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,Ze,ke,Pe,Re[ae]);for(let ye=0;ye<Y.length;ye++){const _e=Y[ye];Ve?L&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ye+1,0,0,ke,Pe,_e.image[ae]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ye+1,Ze,ke,Pe,_e.image[ae])}}}g(b)&&p(n.TEXTURE_CUBE_MAP),se.__version=he.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function W(P,b,Q,te,he,se){const Le=r.convert(Q.format,Q.colorSpace),pe=r.convert(Q.type),Ce=M(Q.internalFormat,Le,pe,Q.colorSpace),He=i.get(b),ve=i.get(Q);if(ve.__renderTarget=b,!He.__hasExternalTextures){const Re=Math.max(1,b.width>>se),Ne=Math.max(1,b.height>>se);he===n.TEXTURE_3D||he===n.TEXTURE_2D_ARRAY?t.texImage3D(he,se,Ce,Re,Ne,b.depth,0,Le,pe,null):t.texImage2D(he,se,Ce,Re,Ne,0,Le,pe,null)}t.bindFramebuffer(n.FRAMEBUFFER,P),xe(b)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,te,he,ve.__webglTexture,0,ce(b)):(he===n.TEXTURE_2D||he>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&he<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,te,he,ve.__webglTexture,se),t.bindFramebuffer(n.FRAMEBUFFER,null)}function H(P,b,Q){if(n.bindRenderbuffer(n.RENDERBUFFER,P),b.depthBuffer){const te=b.depthTexture,he=te&&te.isDepthTexture?te.type:null,se=x(b.stencilBuffer,he),Le=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pe=ce(b);xe(b)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,pe,se,b.width,b.height):Q?n.renderbufferStorageMultisample(n.RENDERBUFFER,pe,se,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,se,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Le,n.RENDERBUFFER,P)}else{const te=b.textures;for(let he=0;he<te.length;he++){const se=te[he],Le=r.convert(se.format,se.colorSpace),pe=r.convert(se.type),Ce=M(se.internalFormat,Le,pe,se.colorSpace),He=ce(b);Q&&xe(b)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,He,Ce,b.width,b.height):xe(b)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,He,Ce,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,Ce,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ie(P,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,P),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const te=i.get(b.depthTexture);te.__renderTarget=b,(!te.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),k(b.depthTexture,0);const he=te.__webglTexture,se=ce(b);if(b.depthTexture.format===di)xe(b)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,he,0,se):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,he,0);else if(b.depthTexture.format===pi)xe(b)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,he,0,se):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,he,0);else throw new Error("Unknown depthTexture format")}function oe(P){const b=i.get(P),Q=P.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==P.depthTexture){const te=P.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),te){const he=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,te.removeEventListener("dispose",he)};te.addEventListener("dispose",he),b.__depthDisposeCallback=he}b.__boundDepthTexture=te}if(P.depthTexture&&!b.__autoAllocateDepthBuffer){if(Q)throw new Error("target.depthTexture not supported in Cube render targets");ie(b.__webglFramebuffer,P)}else if(Q){b.__webglDepthbuffer=[];for(let te=0;te<6;te++)if(t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[te]),b.__webglDepthbuffer[te]===void 0)b.__webglDepthbuffer[te]=n.createRenderbuffer(),H(b.__webglDepthbuffer[te],P,!1);else{const he=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,se=b.__webglDepthbuffer[te];n.bindRenderbuffer(n.RENDERBUFFER,se),n.framebufferRenderbuffer(n.FRAMEBUFFER,he,n.RENDERBUFFER,se)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=n.createRenderbuffer(),H(b.__webglDepthbuffer,P,!1);else{const te=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,he=b.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,he),n.framebufferRenderbuffer(n.FRAMEBUFFER,te,n.RENDERBUFFER,he)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ue(P,b,Q){const te=i.get(P);b!==void 0&&W(te.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),Q!==void 0&&oe(P)}function ne(P){const b=P.texture,Q=i.get(P),te=i.get(b);P.addEventListener("dispose",y);const he=P.textures,se=P.isWebGLCubeRenderTarget===!0,Le=he.length>1;if(Le||(te.__webglTexture===void 0&&(te.__webglTexture=n.createTexture()),te.__version=b.version,a.memory.textures++),se){Q.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(b.mipmaps&&b.mipmaps.length>0){Q.__webglFramebuffer[pe]=[];for(let Ce=0;Ce<b.mipmaps.length;Ce++)Q.__webglFramebuffer[pe][Ce]=n.createFramebuffer()}else Q.__webglFramebuffer[pe]=n.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){Q.__webglFramebuffer=[];for(let pe=0;pe<b.mipmaps.length;pe++)Q.__webglFramebuffer[pe]=n.createFramebuffer()}else Q.__webglFramebuffer=n.createFramebuffer();if(Le)for(let pe=0,Ce=he.length;pe<Ce;pe++){const He=i.get(he[pe]);He.__webglTexture===void 0&&(He.__webglTexture=n.createTexture(),a.memory.textures++)}if(P.samples>0&&xe(P)===!1){Q.__webglMultisampledFramebuffer=n.createFramebuffer(),Q.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let pe=0;pe<he.length;pe++){const Ce=he[pe];Q.__webglColorRenderbuffer[pe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Q.__webglColorRenderbuffer[pe]);const He=r.convert(Ce.format,Ce.colorSpace),ve=r.convert(Ce.type),Re=M(Ce.internalFormat,He,ve,Ce.colorSpace,P.isXRRenderTarget===!0),Ne=ce(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ne,Re,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,Q.__webglColorRenderbuffer[pe])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&(Q.__webglDepthRenderbuffer=n.createRenderbuffer(),H(Q.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(se){t.bindTexture(n.TEXTURE_CUBE_MAP,te.__webglTexture),fe(n.TEXTURE_CUBE_MAP,b);for(let pe=0;pe<6;pe++)if(b.mipmaps&&b.mipmaps.length>0)for(let Ce=0;Ce<b.mipmaps.length;Ce++)W(Q.__webglFramebuffer[pe][Ce],P,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ce);else W(Q.__webglFramebuffer[pe],P,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);g(b)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Le){for(let pe=0,Ce=he.length;pe<Ce;pe++){const He=he[pe],ve=i.get(He);t.bindTexture(n.TEXTURE_2D,ve.__webglTexture),fe(n.TEXTURE_2D,He),W(Q.__webglFramebuffer,P,He,n.COLOR_ATTACHMENT0+pe,n.TEXTURE_2D,0),g(He)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let pe=n.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(pe=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(pe,te.__webglTexture),fe(pe,b),b.mipmaps&&b.mipmaps.length>0)for(let Ce=0;Ce<b.mipmaps.length;Ce++)W(Q.__webglFramebuffer[Ce],P,b,n.COLOR_ATTACHMENT0,pe,Ce);else W(Q.__webglFramebuffer,P,b,n.COLOR_ATTACHMENT0,pe,0);g(b)&&p(pe),t.unbindTexture()}P.depthBuffer&&oe(P)}function j(P){const b=P.textures;for(let Q=0,te=b.length;Q<te;Q++){const he=b[Q];if(g(he)){const se=A(P),Le=i.get(he).__webglTexture;t.bindTexture(se,Le),p(se),t.unbindTexture()}}}const le=[],B=[];function Me(P){if(P.samples>0){if(xe(P)===!1){const b=P.textures,Q=P.width,te=P.height;let he=n.COLOR_BUFFER_BIT;const se=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Le=i.get(P),pe=b.length>1;if(pe)for(let Ce=0;Ce<b.length;Ce++)t.bindFramebuffer(n.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Le.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Le.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Le.__webglFramebuffer);for(let Ce=0;Ce<b.length;Ce++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(he|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(he|=n.STENCIL_BUFFER_BIT)),pe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Le.__webglColorRenderbuffer[Ce]);const He=i.get(b[Ce]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,He,0)}n.blitFramebuffer(0,0,Q,te,0,0,Q,te,he,n.NEAREST),l===!0&&(le.length=0,B.length=0,le.push(n.COLOR_ATTACHMENT0+Ce),P.depthBuffer&&P.resolveDepthBuffer===!1&&(le.push(se),B.push(se),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,B)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,le))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),pe)for(let Ce=0;Ce<b.length;Ce++){t.bindFramebuffer(n.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.RENDERBUFFER,Le.__webglColorRenderbuffer[Ce]);const He=i.get(b[Ce]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Le.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.TEXTURE_2D,He,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Le.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const b=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[b])}}}function ce(P){return Math.min(s.maxSamples,P.samples)}function xe(P){const b=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function ge(P){const b=a.render.frame;u.get(P)!==b&&(u.set(P,b),P.update())}function Ee(P,b){const Q=P.colorSpace,te=P.format,he=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||Q!==jn&&Q!==gn&&(Je.getTransfer(Q)===lt?(te!==Et||he!==Lt)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Q)),b}function we(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=I,this.resetTextureUnits=D,this.setTexture2D=k,this.setTexture2DArray=z,this.setTexture3D=V,this.setTextureCube=G,this.rebindTextures=ue,this.setupRenderTarget=ne,this.updateRenderTargetMipmap=j,this.updateMultisampleRenderTarget=Me,this.setupDepthRenderbuffer=oe,this.setupFrameBufferTexture=W,this.useMultisampledRTT=xe}function m0(n,e){function t(i,s=gn){let r;const a=Je.getTransfer(s);if(i===Lt)return n.UNSIGNED_BYTE;if(i===xo)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Mo)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Ac)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===xc)return n.BYTE;if(i===Mc)return n.SHORT;if(i===As)return n.UNSIGNED_SHORT;if(i===vo)return n.INT;if(i===Jn)return n.UNSIGNED_INT;if(i===dn)return n.FLOAT;if(i===Nn)return n.HALF_FLOAT;if(i===Sc)return n.ALPHA;if(i===wc)return n.RGB;if(i===Et)return n.RGBA;if(i===yc)return n.LUMINANCE;if(i===_c)return n.LUMINANCE_ALPHA;if(i===di)return n.DEPTH_COMPONENT;if(i===pi)return n.DEPTH_STENCIL;if(i===Ao)return n.RED;if(i===So)return n.RED_INTEGER;if(i===Ec)return n.RG;if(i===wo)return n.RG_INTEGER;if(i===yo)return n.RGBA_INTEGER;if(i===fr||i===pr||i===mr||i===gr)if(a===lt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===fr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===pr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===mr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===gr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===fr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===pr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===mr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===gr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ua||i===Fa||i===Na||i===Oa)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Ua)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Fa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Na)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Oa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===za||i===ka||i===Ga)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===za||i===ka)return a===lt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Ga)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ha||i===Va||i===Wa||i===Ya||i===Xa||i===Za||i===Qa||i===qa||i===Ka||i===Ja||i===ja||i===$a||i===eo||i===to)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Ha)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Va)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Wa)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ya)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Xa)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Za)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Qa)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===qa)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ka)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ja)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ja)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===$a)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===eo)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===to)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===vr||i===no||i===io)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===vr)return a===lt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===no)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===io)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Tc||i===so||i===ro||i===ao)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===vr)return r.COMPRESSED_RED_RGTC1_EXT;if(i===so)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ro)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ao)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===fi?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class g0 extends Gt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Kn extends dt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const v0={type:"move"};class la{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Kn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Kn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Kn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const g=t.getJointPose(v,i),p=this._getHandJoint(c,v);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,m=.005;c.inputState.pinching&&d>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(v0)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Kn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const x0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,M0=`
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

}`;class A0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new wt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new xt({vertexShader:x0,fragmentShader:M0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Oe(new kt(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class S0 extends On{constructor(e,t){super();const i=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,m=null;const v=new A0,g=t.getContextAttributes();let p=null,A=null;const M=[],x=[],C=new de;let E=null;const y=new Gt;y.viewport=new at;const T=new Gt;T.viewport=new at;const S=[y,T],w=new g0;let _=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(O){let U=M[O];return U===void 0&&(U=new la,M[O]=U),U.getTargetRaySpace()},this.getControllerGrip=function(O){let U=M[O];return U===void 0&&(U=new la,M[O]=U),U.getGripSpace()},this.getHand=function(O){let U=M[O];return U===void 0&&(U=new la,M[O]=U),U.getHandSpace()};function I(O){const U=x.indexOf(O.inputSource);if(U===-1)return;const W=M[U];W!==void 0&&(W.update(O.inputSource,O.frame,c||a),W.dispatchEvent({type:O.type,data:O.inputSource}))}function F(){s.removeEventListener("select",I),s.removeEventListener("selectstart",I),s.removeEventListener("selectend",I),s.removeEventListener("squeeze",I),s.removeEventListener("squeezestart",I),s.removeEventListener("squeezeend",I),s.removeEventListener("end",F),s.removeEventListener("inputsourceschange",k);for(let O=0;O<M.length;O++){const U=x[O];U!==null&&(x[O]=null,M[O].disconnect(U))}_=null,D=null,v.reset(),e.setRenderTarget(p),f=null,d=null,h=null,s=null,A=null,Se.stop(),i.isPresenting=!1,e.setPixelRatio(E),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){r=O,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){o=O,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(O){c=O},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(O){if(s=O,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",I),s.addEventListener("selectstart",I),s.addEventListener("selectend",I),s.addEventListener("squeeze",I),s.addEventListener("squeezestart",I),s.addEventListener("squeezeend",I),s.addEventListener("end",F),s.addEventListener("inputsourceschange",k),g.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(C),s.renderState.layers===void 0){const U={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,U),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),A=new Mt(f.framebufferWidth,f.framebufferHeight,{format:Et,type:Lt,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let U=null,W=null,H=null;g.depth&&(H=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,U=g.stencil?pi:di,W=g.stencil?fi:Jn);const ie={colorFormat:t.RGBA8,depthFormat:H,scaleFactor:r};h=new XRWebGLBinding(s,t),d=h.createProjectionLayer(ie),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),A=new Mt(d.textureWidth,d.textureHeight,{format:Et,type:Lt,depthTexture:new Xi(d.textureWidth,d.textureHeight,W,void 0,void 0,void 0,void 0,void 0,void 0,U),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Se.setContext(s),Se.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function k(O){for(let U=0;U<O.removed.length;U++){const W=O.removed[U],H=x.indexOf(W);H>=0&&(x[H]=null,M[H].disconnect(W))}for(let U=0;U<O.added.length;U++){const W=O.added[U];let H=x.indexOf(W);if(H===-1){for(let oe=0;oe<M.length;oe++)if(oe>=x.length){x.push(W),H=oe;break}else if(x[oe]===null){x[oe]=W,H=oe;break}if(H===-1)break}const ie=M[H];ie&&ie.connect(W)}}const z=new N,V=new N;function G(O,U,W){z.setFromMatrixPosition(U.matrixWorld),V.setFromMatrixPosition(W.matrixWorld);const H=z.distanceTo(V),ie=U.projectionMatrix.elements,oe=W.projectionMatrix.elements,ue=ie[14]/(ie[10]-1),ne=ie[14]/(ie[10]+1),j=(ie[9]+1)/ie[5],le=(ie[9]-1)/ie[5],B=(ie[8]-1)/ie[0],Me=(oe[8]+1)/oe[0],ce=ue*B,xe=ue*Me,ge=H/(-B+Me),Ee=ge*-B;if(U.matrixWorld.decompose(O.position,O.quaternion,O.scale),O.translateX(Ee),O.translateZ(ge),O.matrixWorld.compose(O.position,O.quaternion,O.scale),O.matrixWorldInverse.copy(O.matrixWorld).invert(),ie[10]===-1)O.projectionMatrix.copy(U.projectionMatrix),O.projectionMatrixInverse.copy(U.projectionMatrixInverse);else{const we=ue+ge,P=ne+ge,b=ce-Ee,Q=xe+(H-Ee),te=j*ne/P*we,he=le*ne/P*we;O.projectionMatrix.makePerspective(b,Q,te,he,we,P),O.projectionMatrixInverse.copy(O.projectionMatrix).invert()}}function J(O,U){U===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices(U.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.updateCamera=function(O){if(s===null)return;let U=O.near,W=O.far;v.texture!==null&&(v.depthNear>0&&(U=v.depthNear),v.depthFar>0&&(W=v.depthFar)),w.near=T.near=y.near=U,w.far=T.far=y.far=W,(_!==w.near||D!==w.far)&&(s.updateRenderState({depthNear:w.near,depthFar:w.far}),_=w.near,D=w.far),y.layers.mask=O.layers.mask|2,T.layers.mask=O.layers.mask|4,w.layers.mask=y.layers.mask|T.layers.mask;const H=O.parent,ie=w.cameras;J(w,H);for(let oe=0;oe<ie.length;oe++)J(ie[oe],H);ie.length===2?G(w,y,T):w.projectionMatrix.copy(y.projectionMatrix),q(O,w,H)};function q(O,U,W){W===null?O.matrix.copy(U.matrixWorld):(O.matrix.copy(W.matrixWorld),O.matrix.invert(),O.matrix.multiply(U.matrixWorld)),O.matrix.decompose(O.position,O.quaternion,O.scale),O.updateMatrixWorld(!0),O.projectionMatrix.copy(U.projectionMatrix),O.projectionMatrixInverse.copy(U.projectionMatrixInverse),O.isPerspectiveCamera&&(O.fov=Ki*2*Math.atan(1/O.projectionMatrix.elements[5]),O.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(O){l=O,d!==null&&(d.fixedFoveation=O),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=O)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(w)};let re=null;function fe(O,U){if(u=U.getViewerPose(c||a),m=U,u!==null){const W=u.views;f!==null&&(e.setRenderTargetFramebuffer(A,f.framebuffer),e.setRenderTarget(A));let H=!1;W.length!==w.cameras.length&&(w.cameras.length=0,H=!0);for(let oe=0;oe<W.length;oe++){const ue=W[oe];let ne=null;if(f!==null)ne=f.getViewport(ue);else{const le=h.getViewSubImage(d,ue);ne=le.viewport,oe===0&&(e.setRenderTargetTextures(A,le.colorTexture,d.ignoreDepthValues?void 0:le.depthStencilTexture),e.setRenderTarget(A))}let j=S[oe];j===void 0&&(j=new Gt,j.layers.enable(oe),j.viewport=new at,S[oe]=j),j.matrix.fromArray(ue.transform.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale),j.projectionMatrix.fromArray(ue.projectionMatrix),j.projectionMatrixInverse.copy(j.projectionMatrix).invert(),j.viewport.set(ne.x,ne.y,ne.width,ne.height),oe===0&&(w.matrix.copy(j.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),H===!0&&w.cameras.push(j)}const ie=s.enabledFeatures;if(ie&&ie.includes("depth-sensing")){const oe=h.getDepthInformation(W[0]);oe&&oe.isValid&&oe.texture&&v.init(e,oe,s.renderState)}}for(let W=0;W<M.length;W++){const H=x[W],ie=M[W];H!==null&&ie!==void 0&&ie.update(H,U,c||a)}re&&re(O,U),U.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:U}),m=null}const Se=new zc;Se.setAnimationLoop(fe),this.setAnimationLoop=function(O){re=O},this.dispose=function(){}}}const ri=new An,w0=new it;function y0(n,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,Fc(n)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,A,M,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),h(g,p)):p.isMeshPhongMaterial?(r(g,p),u(g,p)):p.isMeshStandardMaterial?(r(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,x)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),v(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?l(g,p,A,M):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===_t&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===_t&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const A=e.get(p),M=A.envMap,x=A.envMapRotation;M&&(g.envMap.value=M,ri.copy(x),ri.x*=-1,ri.y*=-1,ri.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(ri.y*=-1,ri.z*=-1),g.envMapRotation.value.setFromMatrix4(w0.makeRotationFromEuler(ri)),g.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,A,M){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*A,g.scale.value=M*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function h(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,A){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===_t&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=A.texture,g.transmissionSamplerSize.value.set(A.width,A.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function v(g,p){const A=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(A.matrixWorld),g.nearDistance.value=A.shadow.camera.near,g.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function _0(n,e,t,i){let s={},r={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(A,M){const x=M.program;i.uniformBlockBinding(A,x)}function c(A,M){let x=s[A.id];x===void 0&&(m(A),x=u(A),s[A.id]=x,A.addEventListener("dispose",g));const C=M.program;i.updateUBOMapping(A,C);const E=e.render.frame;r[A.id]!==E&&(d(A),r[A.id]=E)}function u(A){const M=h();A.__bindingPointIndex=M;const x=n.createBuffer(),C=A.__size,E=A.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,C,E),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,x),x}function h(){for(let A=0;A<o;A++)if(a.indexOf(A)===-1)return a.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(A){const M=s[A.id],x=A.uniforms,C=A.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let E=0,y=x.length;E<y;E++){const T=Array.isArray(x[E])?x[E]:[x[E]];for(let S=0,w=T.length;S<w;S++){const _=T[S];if(f(_,E,S,C)===!0){const D=_.__offset,I=Array.isArray(_.value)?_.value:[_.value];let F=0;for(let k=0;k<I.length;k++){const z=I[k],V=v(z);typeof z=="number"||typeof z=="boolean"?(_.__data[0]=z,n.bufferSubData(n.UNIFORM_BUFFER,D+F,_.__data)):z.isMatrix3?(_.__data[0]=z.elements[0],_.__data[1]=z.elements[1],_.__data[2]=z.elements[2],_.__data[3]=0,_.__data[4]=z.elements[3],_.__data[5]=z.elements[4],_.__data[6]=z.elements[5],_.__data[7]=0,_.__data[8]=z.elements[6],_.__data[9]=z.elements[7],_.__data[10]=z.elements[8],_.__data[11]=0):(z.toArray(_.__data,F),F+=V.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,D,_.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(A,M,x,C){const E=A.value,y=M+"_"+x;if(C[y]===void 0)return typeof E=="number"||typeof E=="boolean"?C[y]=E:C[y]=E.clone(),!0;{const T=C[y];if(typeof E=="number"||typeof E=="boolean"){if(T!==E)return C[y]=E,!0}else if(T.equals(E)===!1)return T.copy(E),!0}return!1}function m(A){const M=A.uniforms;let x=0;const C=16;for(let y=0,T=M.length;y<T;y++){const S=Array.isArray(M[y])?M[y]:[M[y]];for(let w=0,_=S.length;w<_;w++){const D=S[w],I=Array.isArray(D.value)?D.value:[D.value];for(let F=0,k=I.length;F<k;F++){const z=I[F],V=v(z),G=x%C,J=G%V.boundary,q=G+J;x+=J,q!==0&&C-q<V.storage&&(x+=C-q),D.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=x,x+=V.storage}}}const E=x%C;return E>0&&(x+=C-E),A.__size=x,A.__cache={},this}function v(A){const M={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(M.boundary=4,M.storage=4):A.isVector2?(M.boundary=8,M.storage=8):A.isVector3||A.isColor?(M.boundary=16,M.storage=12):A.isVector4?(M.boundary=16,M.storage=16):A.isMatrix3?(M.boundary=48,M.storage=48):A.isMatrix4?(M.boundary=64,M.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),M}function g(A){const M=A.target;M.removeEventListener("dispose",g);const x=a.indexOf(M.__bindingPointIndex);a.splice(x,1),n.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function p(){for(const A in s)n.deleteBuffer(s[A]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}class E0{constructor(e={}){const{canvas:t=ch(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=a;const m=new Uint32Array(4),v=new Int32Array(4);let g=null,p=null;const A=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=et,this.toneMapping=Bn,this.toneMappingExposure=1;const x=this;let C=!1,E=0,y=0,T=null,S=-1,w=null;const _=new at,D=new at;let I=null;const F=new Te(0);let k=0,z=t.width,V=t.height,G=1,J=null,q=null;const re=new at(0,0,z,V),fe=new at(0,0,z,V);let Se=!1;const O=new To;let U=!1,W=!1;const H=new it,ie=new it,oe=new N,ue=new at,ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let j=!1;function le(){return T===null?G:1}let B=i;function Me(R,X){return t.getContext(R,X)}try{const R={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${vi}`),t.addEventListener("webglcontextlost",ae,!1),t.addEventListener("webglcontextrestored",ye,!1),t.addEventListener("webglcontextcreationerror",_e,!1),B===null){const X="webgl2";if(B=Me(X,R),B===null)throw Me(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let ce,xe,ge,Ee,we,P,b,Q,te,he,se,Le,pe,Ce,He,ve,Re,Ne,ke,Pe,Ze,Ve,tt,L;function K(){ce=new Dp(B),ce.init(),Ve=new m0(B,ce),xe=new _p(B,ce,e,Ve),ge=new d0(B,ce),xe.reverseDepthBuffer&&d&&ge.buffers.depth.setReversed(!0),Ee=new Lp(B),we=new Jm,P=new p0(B,ce,ge,we,xe,Ve,Ee),b=new Tp(x),Q=new Rp(x),te=new zh(B),tt=new wp(B,te),he=new Pp(B,te,Ee,tt),se=new Up(B,he,te,Ee),ke=new Bp(B,xe,P),ve=new Ep(we),Le=new Km(x,b,Q,ce,xe,tt,ve),pe=new y0(x,we),Ce=new $m,He=new r0(ce),Ne=new Sp(x,b,Q,ge,se,f,l),Re=new u0(x,se,xe),L=new _0(B,Ee,xe,ge),Pe=new yp(B,ce,Ee),Ze=new Ip(B,ce,Ee),Ee.programs=Le.programs,x.capabilities=xe,x.extensions=ce,x.properties=we,x.renderLists=Ce,x.shadowMap=Re,x.state=ge,x.info=Ee}K();const Y=new S0(x,B);this.xr=Y,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const R=ce.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=ce.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(R){R!==void 0&&(G=R,this.setSize(z,V,!1))},this.getSize=function(R){return R.set(z,V)},this.setSize=function(R,X,$=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=R,V=X,t.width=Math.floor(R*G),t.height=Math.floor(X*G),$===!0&&(t.style.width=R+"px",t.style.height=X+"px"),this.setViewport(0,0,R,X)},this.getDrawingBufferSize=function(R){return R.set(z*G,V*G).floor()},this.setDrawingBufferSize=function(R,X,$){z=R,V=X,G=$,t.width=Math.floor(R*$),t.height=Math.floor(X*$),this.setViewport(0,0,R,X)},this.getCurrentViewport=function(R){return R.copy(_)},this.getViewport=function(R){return R.copy(re)},this.setViewport=function(R,X,$,ee){R.isVector4?re.set(R.x,R.y,R.z,R.w):re.set(R,X,$,ee),ge.viewport(_.copy(re).multiplyScalar(G).round())},this.getScissor=function(R){return R.copy(fe)},this.setScissor=function(R,X,$,ee){R.isVector4?fe.set(R.x,R.y,R.z,R.w):fe.set(R,X,$,ee),ge.scissor(D.copy(fe).multiplyScalar(G).round())},this.getScissorTest=function(){return Se},this.setScissorTest=function(R){ge.setScissorTest(Se=R)},this.setOpaqueSort=function(R){J=R},this.setTransparentSort=function(R){q=R},this.getClearColor=function(R){return R.copy(Ne.getClearColor())},this.setClearColor=function(){Ne.setClearColor.apply(Ne,arguments)},this.getClearAlpha=function(){return Ne.getClearAlpha()},this.setClearAlpha=function(){Ne.setClearAlpha.apply(Ne,arguments)},this.clear=function(R=!0,X=!0,$=!0){let ee=0;if(R){let Z=!1;if(T!==null){const Ae=T.texture.format;Z=Ae===yo||Ae===wo||Ae===So}if(Z){const Ae=T.texture.type,De=Ae===Lt||Ae===Jn||Ae===As||Ae===fi||Ae===xo||Ae===Mo,Be=Ne.getClearColor(),Ue=Ne.getClearAlpha(),We=Be.r,Ye=Be.g,Fe=Be.b;De?(m[0]=We,m[1]=Ye,m[2]=Fe,m[3]=Ue,B.clearBufferuiv(B.COLOR,0,m)):(v[0]=We,v[1]=Ye,v[2]=Fe,v[3]=Ue,B.clearBufferiv(B.COLOR,0,v))}else ee|=B.COLOR_BUFFER_BIT}X&&(ee|=B.DEPTH_BUFFER_BIT),$&&(ee|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ae,!1),t.removeEventListener("webglcontextrestored",ye,!1),t.removeEventListener("webglcontextcreationerror",_e,!1),Ce.dispose(),He.dispose(),we.dispose(),b.dispose(),Q.dispose(),se.dispose(),tt.dispose(),L.dispose(),Le.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",Fo),Y.removeEventListener("sessionend",No),$n.stop()};function ae(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function ye(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const R=Ee.autoReset,X=Re.enabled,$=Re.autoUpdate,ee=Re.needsUpdate,Z=Re.type;K(),Ee.autoReset=R,Re.enabled=X,Re.autoUpdate=$,Re.needsUpdate=ee,Re.type=Z}function _e(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Ge(R){const X=R.target;X.removeEventListener("dispose",Ge),ot(X)}function ot(R){ct(R),we.remove(R)}function ct(R){const X=we.get(R).programs;X!==void 0&&(X.forEach(function($){Le.releaseProgram($)}),R.isShaderMaterial&&Le.releaseShaderCache(R))}this.renderBufferDirect=function(R,X,$,ee,Z,Ae){X===null&&(X=ne);const De=Z.isMesh&&Z.matrixWorld.determinant()<0,Be=ru(R,X,$,ee,Z);ge.setMaterial(ee,De);let Ue=$.index,We=1;if(ee.wireframe===!0){if(Ue=he.getWireframeAttribute($),Ue===void 0)return;We=2}const Ye=$.drawRange,Fe=$.attributes.position;let je=Ye.start*We,ht=(Ye.start+Ye.count)*We;Ae!==null&&(je=Math.max(je,Ae.start*We),ht=Math.min(ht,(Ae.start+Ae.count)*We)),Ue!==null?(je=Math.max(je,0),ht=Math.min(ht,Ue.count)):Fe!=null&&(je=Math.max(je,0),ht=Math.min(ht,Fe.count));const ft=ht-je;if(ft<0||ft===1/0)return;tt.setup(Z,ee,Be,$,Ue);let Yt,st=Pe;if(Ue!==null&&(Yt=te.get(Ue),st=Ze,st.setIndex(Yt)),Z.isMesh)ee.wireframe===!0?(ge.setLineWidth(ee.wireframeLinewidth*le()),st.setMode(B.LINES)):st.setMode(B.TRIANGLES);else if(Z.isLine){let ze=ee.linewidth;ze===void 0&&(ze=1),ge.setLineWidth(ze*le()),Z.isLineSegments?st.setMode(B.LINES):Z.isLineLoop?st.setMode(B.LINE_LOOP):st.setMode(B.LINE_STRIP)}else Z.isPoints?st.setMode(B.POINTS):Z.isSprite&&st.setMode(B.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)st.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(ce.get("WEBGL_multi_draw"))st.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const ze=Z._multiDrawStarts,yn=Z._multiDrawCounts,rt=Z._multiDrawCount,on=Ue?te.get(Ue).bytesPerElement:1,yi=we.get(ee).currentProgram.getUniforms();for(let qt=0;qt<rt;qt++)yi.setValue(B,"_gl_DrawID",qt),st.render(ze[qt]/on,yn[qt])}else if(Z.isInstancedMesh)st.renderInstances(je,ft,Z.count);else if($.isInstancedBufferGeometry){const ze=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,yn=Math.min($.instanceCount,ze);st.renderInstances(je,ft,yn)}else st.render(je,ft)};function Ke(R,X,$){R.transparent===!0&&R.side===Ht&&R.forceSinglePass===!1?(R.side=_t,R.needsUpdate=!0,Ps(R,X,$),R.side=Fn,R.needsUpdate=!0,Ps(R,X,$),R.side=Ht):Ps(R,X,$)}this.compile=function(R,X,$=null){$===null&&($=R),p=He.get($),p.init(X),M.push(p),$.traverseVisible(function(Z){Z.isLight&&Z.layers.test(X.layers)&&(p.pushLight(Z),Z.castShadow&&p.pushShadow(Z))}),R!==$&&R.traverseVisible(function(Z){Z.isLight&&Z.layers.test(X.layers)&&(p.pushLight(Z),Z.castShadow&&p.pushShadow(Z))}),p.setupLights();const ee=new Set;return R.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const Ae=Z.material;if(Ae)if(Array.isArray(Ae))for(let De=0;De<Ae.length;De++){const Be=Ae[De];Ke(Be,$,Z),ee.add(Be)}else Ke(Ae,$,Z),ee.add(Ae)}),M.pop(),p=null,ee},this.compileAsync=function(R,X,$=null){const ee=this.compile(R,X,$);return new Promise(Z=>{function Ae(){if(ee.forEach(function(De){we.get(De).currentProgram.isReady()&&ee.delete(De)}),ee.size===0){Z(R);return}setTimeout(Ae,10)}ce.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let Qt=null;function wn(R){Qt&&Qt(R)}function Fo(){$n.stop()}function No(){$n.start()}const $n=new zc;$n.setAnimationLoop(wn),typeof self<"u"&&$n.setContext(self),this.setAnimationLoop=function(R){Qt=R,Y.setAnimationLoop(R),R===null?$n.stop():$n.start()},Y.addEventListener("sessionstart",Fo),Y.addEventListener("sessionend",No),this.render=function(R,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(X),X=Y.getCamera()),R.isScene===!0&&R.onBeforeRender(x,R,X,T),p=He.get(R,M.length),p.init(X),M.push(p),ie.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),O.setFromProjectionMatrix(ie),W=this.localClippingEnabled,U=ve.init(this.clippingPlanes,W),g=Ce.get(R,A.length),g.init(),A.push(g),Y.enabled===!0&&Y.isPresenting===!0){const Ae=x.xr.getDepthSensingMesh();Ae!==null&&Lr(Ae,X,-1/0,x.sortObjects)}Lr(R,X,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(J,q),j=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,j&&Ne.addToRenderList(g,R),this.info.render.frame++,U===!0&&ve.beginShadows();const $=p.state.shadowsArray;Re.render($,R,X),U===!0&&ve.endShadows(),this.info.autoReset===!0&&this.info.reset();const ee=g.opaque,Z=g.transmissive;if(p.setupLights(),X.isArrayCamera){const Ae=X.cameras;if(Z.length>0)for(let De=0,Be=Ae.length;De<Be;De++){const Ue=Ae[De];zo(ee,Z,R,Ue)}j&&Ne.render(R);for(let De=0,Be=Ae.length;De<Be;De++){const Ue=Ae[De];Oo(g,R,Ue,Ue.viewport)}}else Z.length>0&&zo(ee,Z,R,X),j&&Ne.render(R),Oo(g,R,X);T!==null&&(P.updateMultisampleRenderTarget(T),P.updateRenderTargetMipmap(T)),R.isScene===!0&&R.onAfterRender(x,R,X),tt.resetDefaultState(),S=-1,w=null,M.pop(),M.length>0?(p=M[M.length-1],U===!0&&ve.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,A.pop(),A.length>0?g=A[A.length-1]:g=null};function Lr(R,X,$,ee){if(R.visible===!1)return;if(R.layers.test(X.layers)){if(R.isGroup)$=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(X);else if(R.isLight)p.pushLight(R),R.castShadow&&p.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||O.intersectsSprite(R)){ee&&ue.setFromMatrixPosition(R.matrixWorld).applyMatrix4(ie);const De=se.update(R),Be=R.material;Be.visible&&g.push(R,De,Be,$,ue.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||O.intersectsObject(R))){const De=se.update(R),Be=R.material;if(ee&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),ue.copy(R.boundingSphere.center)):(De.boundingSphere===null&&De.computeBoundingSphere(),ue.copy(De.boundingSphere.center)),ue.applyMatrix4(R.matrixWorld).applyMatrix4(ie)),Array.isArray(Be)){const Ue=De.groups;for(let We=0,Ye=Ue.length;We<Ye;We++){const Fe=Ue[We],je=Be[Fe.materialIndex];je&&je.visible&&g.push(R,De,je,$,ue.z,Fe)}}else Be.visible&&g.push(R,De,Be,$,ue.z,null)}}const Ae=R.children;for(let De=0,Be=Ae.length;De<Be;De++)Lr(Ae[De],X,$,ee)}function Oo(R,X,$,ee){const Z=R.opaque,Ae=R.transmissive,De=R.transparent;p.setupLightsView($),U===!0&&ve.setGlobalState(x.clippingPlanes,$),ee&&ge.viewport(_.copy(ee)),Z.length>0&&Ds(Z,X,$),Ae.length>0&&Ds(Ae,X,$),De.length>0&&Ds(De,X,$),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function zo(R,X,$,ee){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[ee.id]===void 0&&(p.state.transmissionRenderTarget[ee.id]=new Mt(1,1,{generateMipmaps:!0,type:ce.has("EXT_color_buffer_half_float")||ce.has("EXT_color_buffer_float")?Nn:Lt,minFilter:vn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace}));const Ae=p.state.transmissionRenderTarget[ee.id],De=ee.viewport||_;Ae.setSize(De.z,De.w);const Be=x.getRenderTarget();x.setRenderTarget(Ae),x.getClearColor(F),k=x.getClearAlpha(),k<1&&x.setClearColor(16777215,.5),x.clear(),j&&Ne.render($);const Ue=x.toneMapping;x.toneMapping=Bn;const We=ee.viewport;if(ee.viewport!==void 0&&(ee.viewport=void 0),p.setupLightsView(ee),U===!0&&ve.setGlobalState(x.clippingPlanes,ee),Ds(R,$,ee),P.updateMultisampleRenderTarget(Ae),P.updateRenderTargetMipmap(Ae),ce.has("WEBGL_multisampled_render_to_texture")===!1){let Ye=!1;for(let Fe=0,je=X.length;Fe<je;Fe++){const ht=X[Fe],ft=ht.object,Yt=ht.geometry,st=ht.material,ze=ht.group;if(st.side===Ht&&ft.layers.test(ee.layers)){const yn=st.side;st.side=_t,st.needsUpdate=!0,ko(ft,$,ee,Yt,st,ze),st.side=yn,st.needsUpdate=!0,Ye=!0}}Ye===!0&&(P.updateMultisampleRenderTarget(Ae),P.updateRenderTargetMipmap(Ae))}x.setRenderTarget(Be),x.setClearColor(F,k),We!==void 0&&(ee.viewport=We),x.toneMapping=Ue}function Ds(R,X,$){const ee=X.isScene===!0?X.overrideMaterial:null;for(let Z=0,Ae=R.length;Z<Ae;Z++){const De=R[Z],Be=De.object,Ue=De.geometry,We=ee===null?De.material:ee,Ye=De.group;Be.layers.test($.layers)&&ko(Be,X,$,Ue,We,Ye)}}function ko(R,X,$,ee,Z,Ae){R.onBeforeRender(x,X,$,ee,Z,Ae),R.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Z.onBeforeRender(x,X,$,ee,R,Ae),Z.transparent===!0&&Z.side===Ht&&Z.forceSinglePass===!1?(Z.side=_t,Z.needsUpdate=!0,x.renderBufferDirect($,X,ee,Z,R,Ae),Z.side=Fn,Z.needsUpdate=!0,x.renderBufferDirect($,X,ee,Z,R,Ae),Z.side=Ht):x.renderBufferDirect($,X,ee,Z,R,Ae),R.onAfterRender(x,X,$,ee,Z,Ae)}function Ps(R,X,$){X.isScene!==!0&&(X=ne);const ee=we.get(R),Z=p.state.lights,Ae=p.state.shadowsArray,De=Z.state.version,Be=Le.getParameters(R,Z.state,Ae,X,$),Ue=Le.getProgramCacheKey(Be);let We=ee.programs;ee.environment=R.isMeshStandardMaterial?X.environment:null,ee.fog=X.fog,ee.envMap=(R.isMeshStandardMaterial?Q:b).get(R.envMap||ee.environment),ee.envMapRotation=ee.environment!==null&&R.envMap===null?X.environmentRotation:R.envMapRotation,We===void 0&&(R.addEventListener("dispose",Ge),We=new Map,ee.programs=We);let Ye=We.get(Ue);if(Ye!==void 0){if(ee.currentProgram===Ye&&ee.lightsStateVersion===De)return Ho(R,Be),Ye}else Be.uniforms=Le.getUniforms(R),R.onBeforeCompile(Be,x),Ye=Le.acquireProgram(Be,Ue),We.set(Ue,Ye),ee.uniforms=Be.uniforms;const Fe=ee.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Fe.clippingPlanes=ve.uniform),Ho(R,Be),ee.needsLights=ou(R),ee.lightsStateVersion=De,ee.needsLights&&(Fe.ambientLightColor.value=Z.state.ambient,Fe.lightProbe.value=Z.state.probe,Fe.directionalLights.value=Z.state.directional,Fe.directionalLightShadows.value=Z.state.directionalShadow,Fe.spotLights.value=Z.state.spot,Fe.spotLightShadows.value=Z.state.spotShadow,Fe.rectAreaLights.value=Z.state.rectArea,Fe.ltc_1.value=Z.state.rectAreaLTC1,Fe.ltc_2.value=Z.state.rectAreaLTC2,Fe.pointLights.value=Z.state.point,Fe.pointLightShadows.value=Z.state.pointShadow,Fe.hemisphereLights.value=Z.state.hemi,Fe.directionalShadowMap.value=Z.state.directionalShadowMap,Fe.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Fe.spotShadowMap.value=Z.state.spotShadowMap,Fe.spotLightMatrix.value=Z.state.spotLightMatrix,Fe.spotLightMap.value=Z.state.spotLightMap,Fe.pointShadowMap.value=Z.state.pointShadowMap,Fe.pointShadowMatrix.value=Z.state.pointShadowMatrix),ee.currentProgram=Ye,ee.uniformsList=null,Ye}function Go(R){if(R.uniformsList===null){const X=R.currentProgram.getUniforms();R.uniformsList=xr.seqWithValue(X.seq,R.uniforms)}return R.uniformsList}function Ho(R,X){const $=we.get(R);$.outputColorSpace=X.outputColorSpace,$.batching=X.batching,$.batchingColor=X.batchingColor,$.instancing=X.instancing,$.instancingColor=X.instancingColor,$.instancingMorph=X.instancingMorph,$.skinning=X.skinning,$.morphTargets=X.morphTargets,$.morphNormals=X.morphNormals,$.morphColors=X.morphColors,$.morphTargetsCount=X.morphTargetsCount,$.numClippingPlanes=X.numClippingPlanes,$.numIntersection=X.numClipIntersection,$.vertexAlphas=X.vertexAlphas,$.vertexTangents=X.vertexTangents,$.toneMapping=X.toneMapping}function ru(R,X,$,ee,Z){X.isScene!==!0&&(X=ne),P.resetTextureUnits();const Ae=X.fog,De=ee.isMeshStandardMaterial?X.environment:null,Be=T===null?x.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:jn,Ue=(ee.isMeshStandardMaterial?Q:b).get(ee.envMap||De),We=ee.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Ye=!!$.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),Fe=!!$.morphAttributes.position,je=!!$.morphAttributes.normal,ht=!!$.morphAttributes.color;let ft=Bn;ee.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(ft=x.toneMapping);const Yt=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,st=Yt!==void 0?Yt.length:0,ze=we.get(ee),yn=p.state.lights;if(U===!0&&(W===!0||R!==w)){const tn=R===w&&ee.id===S;ve.setState(ee,R,tn)}let rt=!1;ee.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==yn.state.version||ze.outputColorSpace!==Be||Z.isBatchedMesh&&ze.batching===!1||!Z.isBatchedMesh&&ze.batching===!0||Z.isBatchedMesh&&ze.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&ze.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&ze.instancing===!1||!Z.isInstancedMesh&&ze.instancing===!0||Z.isSkinnedMesh&&ze.skinning===!1||!Z.isSkinnedMesh&&ze.skinning===!0||Z.isInstancedMesh&&ze.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&ze.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&ze.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&ze.instancingMorph===!1&&Z.morphTexture!==null||ze.envMap!==Ue||ee.fog===!0&&ze.fog!==Ae||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==ve.numPlanes||ze.numIntersection!==ve.numIntersection)||ze.vertexAlphas!==We||ze.vertexTangents!==Ye||ze.morphTargets!==Fe||ze.morphNormals!==je||ze.morphColors!==ht||ze.toneMapping!==ft||ze.morphTargetsCount!==st)&&(rt=!0):(rt=!0,ze.__version=ee.version);let on=ze.currentProgram;rt===!0&&(on=Ps(ee,X,Z));let yi=!1,qt=!1,$i=!1;const pt=on.getUniforms(),fn=ze.uniforms;if(ge.useProgram(on.program)&&(yi=!0,qt=!0,$i=!0),ee.id!==S&&(S=ee.id,qt=!0),yi||w!==R){ge.buffers.depth.getReversed()?(H.copy(R.projectionMatrix),hh(H),dh(H),pt.setValue(B,"projectionMatrix",H)):pt.setValue(B,"projectionMatrix",R.projectionMatrix),pt.setValue(B,"viewMatrix",R.matrixWorldInverse);const kn=pt.map.cameraPosition;kn!==void 0&&kn.setValue(B,oe.setFromMatrixPosition(R.matrixWorld)),xe.logarithmicDepthBuffer&&pt.setValue(B,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&pt.setValue(B,"isOrthographic",R.isOrthographicCamera===!0),w!==R&&(w=R,qt=!0,$i=!0)}if(Z.isSkinnedMesh){pt.setOptional(B,Z,"bindMatrix"),pt.setOptional(B,Z,"bindMatrixInverse");const tn=Z.skeleton;tn&&(tn.boneTexture===null&&tn.computeBoneTexture(),pt.setValue(B,"boneTexture",tn.boneTexture,P))}Z.isBatchedMesh&&(pt.setOptional(B,Z,"batchingTexture"),pt.setValue(B,"batchingTexture",Z._matricesTexture,P),pt.setOptional(B,Z,"batchingIdTexture"),pt.setValue(B,"batchingIdTexture",Z._indirectTexture,P),pt.setOptional(B,Z,"batchingColorTexture"),Z._colorsTexture!==null&&pt.setValue(B,"batchingColorTexture",Z._colorsTexture,P));const es=$.morphAttributes;if((es.position!==void 0||es.normal!==void 0||es.color!==void 0)&&ke.update(Z,$,on),(qt||ze.receiveShadow!==Z.receiveShadow)&&(ze.receiveShadow=Z.receiveShadow,pt.setValue(B,"receiveShadow",Z.receiveShadow)),ee.isMeshGouraudMaterial&&ee.envMap!==null&&(fn.envMap.value=Ue,fn.flipEnvMap.value=Ue.isCubeTexture&&Ue.isRenderTargetTexture===!1?-1:1),ee.isMeshStandardMaterial&&ee.envMap===null&&X.environment!==null&&(fn.envMapIntensity.value=X.environmentIntensity),qt&&(pt.setValue(B,"toneMappingExposure",x.toneMappingExposure),ze.needsLights&&au(fn,$i),Ae&&ee.fog===!0&&pe.refreshFogUniforms(fn,Ae),pe.refreshMaterialUniforms(fn,ee,G,V,p.state.transmissionRenderTarget[R.id]),xr.upload(B,Go(ze),fn,P)),ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(xr.upload(B,Go(ze),fn,P),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&pt.setValue(B,"center",Z.center),pt.setValue(B,"modelViewMatrix",Z.modelViewMatrix),pt.setValue(B,"normalMatrix",Z.normalMatrix),pt.setValue(B,"modelMatrix",Z.matrixWorld),ee.isShaderMaterial||ee.isRawShaderMaterial){const tn=ee.uniformsGroups;for(let kn=0,Gn=tn.length;kn<Gn;kn++){const Vo=tn[kn];L.update(Vo,on),L.bind(Vo,on)}}return on}function au(R,X){R.ambientLightColor.needsUpdate=X,R.lightProbe.needsUpdate=X,R.directionalLights.needsUpdate=X,R.directionalLightShadows.needsUpdate=X,R.pointLights.needsUpdate=X,R.pointLightShadows.needsUpdate=X,R.spotLights.needsUpdate=X,R.spotLightShadows.needsUpdate=X,R.rectAreaLights.needsUpdate=X,R.hemisphereLights.needsUpdate=X}function ou(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return y},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(R,X,$){we.get(R.texture).__webglTexture=X,we.get(R.depthTexture).__webglTexture=$;const ee=we.get(R);ee.__hasExternalTextures=!0,ee.__autoAllocateDepthBuffer=$===void 0,ee.__autoAllocateDepthBuffer||ce.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ee.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,X){const $=we.get(R);$.__webglFramebuffer=X,$.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(R,X=0,$=0){T=R,E=X,y=$;let ee=!0,Z=null,Ae=!1,De=!1;if(R){const Ue=we.get(R);if(Ue.__useDefaultFramebuffer!==void 0)ge.bindFramebuffer(B.FRAMEBUFFER,null),ee=!1;else if(Ue.__webglFramebuffer===void 0)P.setupRenderTarget(R);else if(Ue.__hasExternalTextures)P.rebindTextures(R,we.get(R.texture).__webglTexture,we.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Fe=R.depthTexture;if(Ue.__boundDepthTexture!==Fe){if(Fe!==null&&we.has(Fe)&&(R.width!==Fe.image.width||R.height!==Fe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(R)}}const We=R.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(De=!0);const Ye=we.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ye[X])?Z=Ye[X][$]:Z=Ye[X],Ae=!0):R.samples>0&&P.useMultisampledRTT(R)===!1?Z=we.get(R).__webglMultisampledFramebuffer:Array.isArray(Ye)?Z=Ye[$]:Z=Ye,_.copy(R.viewport),D.copy(R.scissor),I=R.scissorTest}else _.copy(re).multiplyScalar(G).floor(),D.copy(fe).multiplyScalar(G).floor(),I=Se;if(ge.bindFramebuffer(B.FRAMEBUFFER,Z)&&ee&&ge.drawBuffers(R,Z),ge.viewport(_),ge.scissor(D),ge.setScissorTest(I),Ae){const Ue=we.get(R.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+X,Ue.__webglTexture,$)}else if(De){const Ue=we.get(R.texture),We=X||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ue.__webglTexture,$||0,We)}S=-1},this.readRenderTargetPixels=function(R,X,$,ee,Z,Ae,De){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=we.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&De!==void 0&&(Be=Be[De]),Be){ge.bindFramebuffer(B.FRAMEBUFFER,Be);try{const Ue=R.texture,We=Ue.format,Ye=Ue.type;if(!xe.textureFormatReadable(We)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!xe.textureTypeReadable(Ye)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=R.width-ee&&$>=0&&$<=R.height-Z&&B.readPixels(X,$,ee,Z,Ve.convert(We),Ve.convert(Ye),Ae)}finally{const Ue=T!==null?we.get(T).__webglFramebuffer:null;ge.bindFramebuffer(B.FRAMEBUFFER,Ue)}}},this.readRenderTargetPixelsAsync=async function(R,X,$,ee,Z,Ae,De){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Be=we.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&De!==void 0&&(Be=Be[De]),Be){const Ue=R.texture,We=Ue.format,Ye=Ue.type;if(!xe.textureFormatReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!xe.textureTypeReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(X>=0&&X<=R.width-ee&&$>=0&&$<=R.height-Z){ge.bindFramebuffer(B.FRAMEBUFFER,Be);const Fe=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Fe),B.bufferData(B.PIXEL_PACK_BUFFER,Ae.byteLength,B.STREAM_READ),B.readPixels(X,$,ee,Z,Ve.convert(We),Ve.convert(Ye),0);const je=T!==null?we.get(T).__webglFramebuffer:null;ge.bindFramebuffer(B.FRAMEBUFFER,je);const ht=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await uh(B,ht,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,Fe),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Ae),B.deleteBuffer(Fe),B.deleteSync(ht),Ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,X=null,$=0){R.isTexture!==!0&&(ps("WebGLRenderer: copyFramebufferToTexture function signature has changed."),X=arguments[0]||null,R=arguments[1]);const ee=Math.pow(2,-$),Z=Math.floor(R.image.width*ee),Ae=Math.floor(R.image.height*ee),De=X!==null?X.x:0,Be=X!==null?X.y:0;P.setTexture2D(R,0),B.copyTexSubImage2D(B.TEXTURE_2D,$,0,0,De,Be,Z,Ae),ge.unbindTexture()},this.copyTextureToTexture=function(R,X,$=null,ee=null,Z=0){R.isTexture!==!0&&(ps("WebGLRenderer: copyTextureToTexture function signature has changed."),ee=arguments[0]||null,R=arguments[1],X=arguments[2],Z=arguments[3]||0,$=null);let Ae,De,Be,Ue,We,Ye,Fe,je,ht;const ft=R.isCompressedTexture?R.mipmaps[Z]:R.image;$!==null?(Ae=$.max.x-$.min.x,De=$.max.y-$.min.y,Be=$.isBox3?$.max.z-$.min.z:1,Ue=$.min.x,We=$.min.y,Ye=$.isBox3?$.min.z:0):(Ae=ft.width,De=ft.height,Be=ft.depth||1,Ue=0,We=0,Ye=0),ee!==null?(Fe=ee.x,je=ee.y,ht=ee.z):(Fe=0,je=0,ht=0);const Yt=Ve.convert(X.format),st=Ve.convert(X.type);let ze;X.isData3DTexture?(P.setTexture3D(X,0),ze=B.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(P.setTexture2DArray(X,0),ze=B.TEXTURE_2D_ARRAY):(P.setTexture2D(X,0),ze=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,X.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,X.unpackAlignment);const yn=B.getParameter(B.UNPACK_ROW_LENGTH),rt=B.getParameter(B.UNPACK_IMAGE_HEIGHT),on=B.getParameter(B.UNPACK_SKIP_PIXELS),yi=B.getParameter(B.UNPACK_SKIP_ROWS),qt=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,ft.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ft.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Ue),B.pixelStorei(B.UNPACK_SKIP_ROWS,We),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Ye);const $i=R.isDataArrayTexture||R.isData3DTexture,pt=X.isDataArrayTexture||X.isData3DTexture;if(R.isRenderTargetTexture||R.isDepthTexture){const fn=we.get(R),es=we.get(X),tn=we.get(fn.__renderTarget),kn=we.get(es.__renderTarget);ge.bindFramebuffer(B.READ_FRAMEBUFFER,tn.__webglFramebuffer),ge.bindFramebuffer(B.DRAW_FRAMEBUFFER,kn.__webglFramebuffer);for(let Gn=0;Gn<Be;Gn++)$i&&B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,we.get(R).__webglTexture,Z,Ye+Gn),R.isDepthTexture?(pt&&B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,we.get(X).__webglTexture,Z,ht+Gn),B.blitFramebuffer(Ue,We,Ae,De,Fe,je,Ae,De,B.DEPTH_BUFFER_BIT,B.NEAREST)):pt?B.copyTexSubImage3D(ze,Z,Fe,je,ht+Gn,Ue,We,Ae,De):B.copyTexSubImage2D(ze,Z,Fe,je,ht+Gn,Ue,We,Ae,De);ge.bindFramebuffer(B.READ_FRAMEBUFFER,null),ge.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else pt?R.isDataTexture||R.isData3DTexture?B.texSubImage3D(ze,Z,Fe,je,ht,Ae,De,Be,Yt,st,ft.data):X.isCompressedArrayTexture?B.compressedTexSubImage3D(ze,Z,Fe,je,ht,Ae,De,Be,Yt,ft.data):B.texSubImage3D(ze,Z,Fe,je,ht,Ae,De,Be,Yt,st,ft):R.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,Z,Fe,je,Ae,De,Yt,st,ft.data):R.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,Z,Fe,je,ft.width,ft.height,Yt,ft.data):B.texSubImage2D(B.TEXTURE_2D,Z,Fe,je,Ae,De,Yt,st,ft);B.pixelStorei(B.UNPACK_ROW_LENGTH,yn),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,rt),B.pixelStorei(B.UNPACK_SKIP_PIXELS,on),B.pixelStorei(B.UNPACK_SKIP_ROWS,yi),B.pixelStorei(B.UNPACK_SKIP_IMAGES,qt),Z===0&&X.generateMipmaps&&B.generateMipmap(ze),ge.unbindTexture()},this.copyTextureToTexture3D=function(R,X,$=null,ee=null,Z=0){return R.isTexture!==!0&&(ps("WebGLRenderer: copyTextureToTexture3D function signature has changed."),$=arguments[0]||null,ee=arguments[1]||null,R=arguments[2],X=arguments[3],Z=arguments[4]||0),ps('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,X,$,ee,Z)},this.initRenderTarget=function(R){we.get(R).__webglFramebuffer===void 0&&P.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?P.setTextureCube(R,0):R.isData3DTexture?P.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?P.setTexture2DArray(R,0):P.setTexture2D(R,0),ge.unbindTexture()},this.resetState=function(){E=0,y=0,T=null,ge.reset(),tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ln}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Je._getDrawingBufferColorSpace(e),t.unpackColorSpace=Je._getUnpackColorSpace()}}class Dr{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Te(e),this.density=t}clone(){return new Dr(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class yr extends dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new An,this.environmentIntensity=1,this.environmentRotation=new An,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class wi extends wt{constructor(e=null,t=1,i=1,s,r,a,o,l,c=Nt,u=Nt,h,d){super(null,a,o,l,c,u,s,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Gl extends Tt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Oi=new it,Hl=new it,$s=[],Vl=new Ai,T0=new it,rs=new Oe,as=new Si;class rn extends Oe{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Gl(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,T0)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ai),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Oi),Vl.copy(e.boundingBox).applyMatrix4(Oi),this.boundingBox.union(Vl)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Si),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Oi),as.copy(e.boundingSphere).applyMatrix4(Oi),this.boundingSphere.union(as)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=e*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(rs.geometry=this.geometry,rs.material=this.material,rs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),as.copy(this.boundingSphere),as.applyMatrix4(i),e.ray.intersectsSphere(as)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Oi),Hl.multiplyMatrices(i,Oi),rs.matrixWorld=Hl,rs.raycast(e,$s);for(let a=0,o=$s.length;a<o;a++){const l=$s[a];l.instanceId=r,l.object=this,t.push(l)}$s.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Gl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new wi(new Float32Array(s*this.count),s,this.count,Ao,dn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<i.length;c++)a+=i[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;r[l]=o,r.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Wc extends zn{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Te(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const _r=new N,Er=new N,Wl=new it,os=new Eo,er=new Si,ca=new N,Yl=new N;class b0 extends dt{constructor(e=new Rt,t=new Wc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)_r.fromBufferAttribute(t,s-1),Er.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=_r.distanceTo(Er);e.setAttribute("lineDistance",new nt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),er.copy(i.boundingSphere),er.applyMatrix4(s),er.radius+=r,e.ray.intersectsSphere(er)===!1)return;Wl.copy(s).invert(),os.copy(e.ray).applyMatrix4(Wl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){const f=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let v=f,g=m-1;v<g;v+=c){const p=u.getX(v),A=u.getX(v+1),M=tr(this,e,os,l,p,A);M&&t.push(M)}if(this.isLineLoop){const v=u.getX(m-1),g=u.getX(f),p=tr(this,e,os,l,v,g);p&&t.push(p)}}else{const f=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let v=f,g=m-1;v<g;v+=c){const p=tr(this,e,os,l,v,v+1);p&&t.push(p)}if(this.isLineLoop){const v=tr(this,e,os,l,m-1,f);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function tr(n,e,t,i,s,r){const a=n.geometry.attributes.position;if(_r.fromBufferAttribute(a,s),Er.fromBufferAttribute(a,r),t.distanceSqToSegment(_r,Er,ca,Yl)>i)return;ca.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(ca);if(!(l<e.near||l>e.far))return{distance:l,point:Yl.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}const Xl=new N,Zl=new N;class C0 extends b0{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)Xl.fromBufferAttribute(t,s),Zl.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Xl.distanceTo(Zl);e.setAttribute("lineDistance",new nt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Yc extends zn{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Te(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ql=new it,co=new Eo,nr=new Si,ir=new N;class R0 extends dt{constructor(e=new Rt,t=new Yc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),nr.copy(i.boundingSphere),nr.applyMatrix4(s),nr.radius+=r,e.ray.intersectsSphere(nr)===!1)return;Ql.copy(s).invert(),co.copy(e.ray).applyMatrix4(Ql);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,h=i.attributes.position;if(c!==null){const d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let m=d,v=f;m<v;m++){const g=c.getX(m);ir.fromBufferAttribute(h,g),ql(ir,g,l,s,e,t,this)}}else{const d=Math.max(0,a.start),f=Math.min(h.count,a.start+a.count);for(let m=d,v=f;m<v;m++)ir.fromBufferAttribute(h,m),ql(ir,m,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function ql(n,e,t,i,s,r,a){const o=co.distanceSqToPoint(n);if(o<t){const l=new N;co.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class mi extends wt{constructor(e,t,i,s,r,a,o,l,c){super(e,t,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Sn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let s=0;const r=i.length;let a;t?a=t:a=e*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=i[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===a)return s/(r-1);const u=i[s],d=i[s+1]-u,f=(a-u)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new de:new N);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new N,s=[],r=[],a=[],o=new N,l=new it;for(let f=0;f<=e;f++){const m=f/e;s[f]=this.getTangentAt(m,new N)}r[0]=new N,a[0]=new N;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=c&&(c=u,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),d<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();const m=Math.acos(yt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,m))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(yt(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let m=1;m<=e;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],f*m)),a[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Ro extends Sn{constructor(e=0,t=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new de){const i=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*u-f*h+this.aX,c=d*h+f*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class D0 extends Ro{constructor(e,t,i,s,r,a){super(e,t,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Do(){let n=0,e=0,t=0,i=0;function s(r,a,o,l){n=r,e=o,t=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,h){let d=(a-r)/c-(o-r)/(c+u)+(o-a)/u,f=(o-a)/u-(l-a)/(u+h)+(l-o)/h;d*=u,f*=u,s(a,o,d,f)},calc:function(r){const a=r*r,o=a*r;return n+e*r+t*a+i*o}}}const sr=new N,ua=new Do,ha=new Do,da=new Do;class P0 extends Sn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new N){const i=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%r]:(sr.subVectors(s[0],s[1]).add(s[0]),c=sr);const h=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(sr.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=sr),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let m=Math.pow(c.distanceToSquared(h),f),v=Math.pow(h.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(u),f);v<1e-4&&(v=1),m<1e-4&&(m=v),g<1e-4&&(g=v),ua.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,m,v,g),ha.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,m,v,g),da.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,m,v,g)}else this.curveType==="catmullrom"&&(ua.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),ha.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),da.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return i.set(ua.calc(l),ha.calc(l),da.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new N().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Kl(n,e,t,i,s){const r=(i-e)*.5,a=(s-t)*.5,o=n*n,l=n*o;return(2*t-2*i+r+a)*l+(-3*t+3*i-2*r-a)*o+r*n+t}function I0(n,e){const t=1-n;return t*t*e}function L0(n,e){return 2*(1-n)*n*e}function B0(n,e){return n*n*e}function vs(n,e,t,i){return I0(n,e)+L0(n,t)+B0(n,i)}function U0(n,e){const t=1-n;return t*t*t*e}function F0(n,e){const t=1-n;return 3*t*t*n*e}function N0(n,e){return 3*(1-n)*n*n*e}function O0(n,e){return n*n*n*e}function xs(n,e,t,i,s){return U0(n,e)+F0(n,t)+N0(n,i)+O0(n,s)}class Xc extends Sn{constructor(e=new de,t=new de,i=new de,s=new de){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new de){const i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(xs(e,s.x,r.x,a.x,o.x),xs(e,s.y,r.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class z0 extends Sn{constructor(e=new N,t=new N,i=new N,s=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new N){const i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(xs(e,s.x,r.x,a.x,o.x),xs(e,s.y,r.y,a.y,o.y),xs(e,s.z,r.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Zc extends Sn{constructor(e=new de,t=new de){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new de){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new de){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class k0 extends Sn{constructor(e=new N,t=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new N){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new N){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Qc extends Sn{constructor(e=new de,t=new de,i=new de){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new de){const i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(vs(e,s.x,r.x,a.x),vs(e,s.y,r.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class G0 extends Sn{constructor(e=new N,t=new N,i=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new N){const i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(vs(e,s.x,r.x,a.x),vs(e,s.y,r.y,a.y),vs(e,s.z,r.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class qc extends Sn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new de){const i=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],u=s[a>s.length-2?s.length-1:a+1],h=s[a>s.length-3?s.length-1:a+2];return i.set(Kl(o,l.x,c.x,u.x,h.x),Kl(o,l.y,c.y,u.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new de().fromArray(s))}return this}}var uo=Object.freeze({__proto__:null,ArcCurve:D0,CatmullRomCurve3:P0,CubicBezierCurve:Xc,CubicBezierCurve3:z0,EllipseCurve:Ro,LineCurve:Zc,LineCurve3:k0,QuadraticBezierCurve:Qc,QuadraticBezierCurve3:G0,SplineCurve:qc});class H0 extends Sn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new uo[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const a=s[r]-i,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const u=l[c];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(new uo[s.type]().fromJSON(s))}return this}}class Jl extends H0{constructor(e){super(),this.type="Path",this.currentPoint=new de,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new Zc(this.currentPoint.clone(),new de(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){const r=new Qc(this.currentPoint.clone(),new de(e,t),new de(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,a){const o=new Xc(this.currentPoint.clone(),new de(e,t),new de(i,s),new de(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new qc(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,s,r,a),this}absarc(e,t,i,s,r,a){return this.absellipse(e,t,i,i,s,r,a),this}ellipse(e,t,i,s,r,a,o,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,i,s,r,a,o,l),this}absellipse(e,t,i,s,r,a,o,l){const c=new Ro(e,t,i,s,r,a,o,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Ss extends Rt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);const r=[],a=[],o=[],l=[],c=new N,u=new de;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){const f=i+h/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[d]/e+1)/2,u.y=(a[d+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new nt(a,3)),this.setAttribute("normal",new nt(o,3)),this.setAttribute("uv",new nt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ss(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Pt extends Rt{constructor(e=1,t=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],d=[],f=[];let m=0;const v=[],g=i/2;let p=0;A(),a===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(u),this.setAttribute("position",new nt(h,3)),this.setAttribute("normal",new nt(d,3)),this.setAttribute("uv",new nt(f,2));function A(){const x=new N,C=new N;let E=0;const y=(t-e)/i;for(let T=0;T<=r;T++){const S=[],w=T/r,_=w*(t-e)+e;for(let D=0;D<=s;D++){const I=D/s,F=I*l+o,k=Math.sin(F),z=Math.cos(F);C.x=_*k,C.y=-w*i+g,C.z=_*z,h.push(C.x,C.y,C.z),x.set(k,y,z).normalize(),d.push(x.x,x.y,x.z),f.push(I,1-w),S.push(m++)}v.push(S)}for(let T=0;T<s;T++)for(let S=0;S<r;S++){const w=v[S][T],_=v[S+1][T],D=v[S+1][T+1],I=v[S][T+1];(e>0||S!==0)&&(u.push(w,_,I),E+=3),(t>0||S!==r-1)&&(u.push(_,D,I),E+=3)}c.addGroup(p,E,0),p+=E}function M(x){const C=m,E=new de,y=new N;let T=0;const S=x===!0?e:t,w=x===!0?1:-1;for(let D=1;D<=s;D++)h.push(0,g*w,0),d.push(0,w,0),f.push(.5,.5),m++;const _=m;for(let D=0;D<=s;D++){const F=D/s*l+o,k=Math.cos(F),z=Math.sin(F);y.x=S*z,y.y=g*w,y.z=S*k,h.push(y.x,y.y,y.z),d.push(0,w,0),E.x=k*.5+.5,E.y=z*.5*w+.5,f.push(E.x,E.y),m++}for(let D=0;D<s;D++){const I=C+D,F=_+D;x===!0?u.push(F,F+1,I):u.push(F+1,F,I),T+=3}c.addGroup(p,T,x===!0?1:2),p+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}const rr=new N,ar=new N,fa=new N,or=new an;class V0 extends Rt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const s=Math.pow(10,4),r=Math.cos(Wi*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],u=["a","b","c"],h=new Array(3),d={},f=[];for(let m=0;m<l;m+=3){a?(c[0]=a.getX(m),c[1]=a.getX(m+1),c[2]=a.getX(m+2)):(c[0]=m,c[1]=m+1,c[2]=m+2);const{a:v,b:g,c:p}=or;if(v.fromBufferAttribute(o,c[0]),g.fromBufferAttribute(o,c[1]),p.fromBufferAttribute(o,c[2]),or.getNormal(fa),h[0]=`${Math.round(v.x*s)},${Math.round(v.y*s)},${Math.round(v.z*s)}`,h[1]=`${Math.round(g.x*s)},${Math.round(g.y*s)},${Math.round(g.z*s)}`,h[2]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let A=0;A<3;A++){const M=(A+1)%3,x=h[A],C=h[M],E=or[u[A]],y=or[u[M]],T=`${x}_${C}`,S=`${C}_${x}`;S in d&&d[S]?(fa.dot(d[S].normal)<=r&&(f.push(E.x,E.y,E.z),f.push(y.x,y.y,y.z)),d[S]=null):T in d||(d[T]={index0:c[A],index1:c[M],normal:fa.clone()})}}for(const m in d)if(d[m]){const{index0:v,index1:g}=d[m];rr.fromBufferAttribute(o,v),ar.fromBufferAttribute(o,g),f.push(rr.x,rr.y,rr.z),f.push(ar.x,ar.y,ar.z)}this.setAttribute("position",new nt(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class ho extends Jl{constructor(e){super(e),this.uuid=Mi(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(new Jl().fromJSON(s))}return this}}const W0={triangulate:function(n,e,t=2){const i=e&&e.length,s=i?e[0]*t:n.length;let r=Kc(n,0,s,t,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c,u,h,d,f;if(i&&(r=q0(n,e,r,t)),n.length>80*t){o=c=n[0],l=u=n[1];for(let m=t;m<s;m+=t)h=n[m],d=n[m+1],h<o&&(o=h),d<l&&(l=d),h>c&&(c=h),d>u&&(u=d);f=Math.max(c-o,u-l),f=f!==0?32767/f:0}return ws(r,a,t,o,l,f,0),a}};function Kc(n,e,t,i,s){let r,a;if(s===ag(n,e,t,i)>0)for(r=e;r<t;r+=i)a=jl(r,n[r],n[r+1],a);else for(r=t-i;r>=e;r-=i)a=jl(r,n[r],n[r+1],a);return a&&Pr(a,a.next)&&(_s(a),a=a.next),a}function gi(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Pr(t,t.next)||gt(t.prev,t,t.next)===0)){if(_s(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function ws(n,e,t,i,s,r,a){if(!n)return;!a&&r&&eg(n,i,s,r);let o=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,r?X0(n,i,s,r):Y0(n)){e.push(l.i/t|0),e.push(n.i/t|0),e.push(c.i/t|0),_s(n),n=c.next,o=c.next;continue}if(n=c,n===o){a?a===1?(n=Z0(gi(n),e,t),ws(n,e,t,i,s,r,2)):a===2&&Q0(n,e,t,i,s,r):ws(gi(n),e,t,i,s,r,1);break}}}function Y0(n){const e=n.prev,t=n,i=n.next;if(gt(e,t,i)>=0)return!1;const s=e.x,r=t.x,a=i.x,o=e.y,l=t.y,c=i.y,u=s<r?s<a?s:a:r<a?r:a,h=o<l?o<c?o:c:l<c?l:c,d=s>r?s>a?s:a:r>a?r:a,f=o>l?o>c?o:c:l>c?l:c;let m=i.next;for(;m!==e;){if(m.x>=u&&m.x<=d&&m.y>=h&&m.y<=f&&Hi(s,o,r,l,a,c,m.x,m.y)&&gt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function X0(n,e,t,i){const s=n.prev,r=n,a=n.next;if(gt(s,r,a)>=0)return!1;const o=s.x,l=r.x,c=a.x,u=s.y,h=r.y,d=a.y,f=o<l?o<c?o:c:l<c?l:c,m=u<h?u<d?u:d:h<d?h:d,v=o>l?o>c?o:c:l>c?l:c,g=u>h?u>d?u:d:h>d?h:d,p=fo(f,m,e,t,i),A=fo(v,g,e,t,i);let M=n.prevZ,x=n.nextZ;for(;M&&M.z>=p&&x&&x.z<=A;){if(M.x>=f&&M.x<=v&&M.y>=m&&M.y<=g&&M!==s&&M!==a&&Hi(o,u,l,h,c,d,M.x,M.y)&&gt(M.prev,M,M.next)>=0||(M=M.prevZ,x.x>=f&&x.x<=v&&x.y>=m&&x.y<=g&&x!==s&&x!==a&&Hi(o,u,l,h,c,d,x.x,x.y)&&gt(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;M&&M.z>=p;){if(M.x>=f&&M.x<=v&&M.y>=m&&M.y<=g&&M!==s&&M!==a&&Hi(o,u,l,h,c,d,M.x,M.y)&&gt(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;x&&x.z<=A;){if(x.x>=f&&x.x<=v&&x.y>=m&&x.y<=g&&x!==s&&x!==a&&Hi(o,u,l,h,c,d,x.x,x.y)&&gt(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Z0(n,e,t){let i=n;do{const s=i.prev,r=i.next.next;!Pr(s,r)&&Jc(s,i,i.next,r)&&ys(s,r)&&ys(r,s)&&(e.push(s.i/t|0),e.push(i.i/t|0),e.push(r.i/t|0),_s(i),_s(i.next),i=n=r),i=i.next}while(i!==n);return gi(i)}function Q0(n,e,t,i,s,r){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&ig(a,o)){let l=jc(a,o);a=gi(a,a.next),l=gi(l,l.next),ws(a,e,t,i,s,r,0),ws(l,e,t,i,s,r,0);return}o=o.next}a=a.next}while(a!==n)}function q0(n,e,t,i){const s=[];let r,a,o,l,c;for(r=0,a=e.length;r<a;r++)o=e[r]*i,l=r<a-1?e[r+1]*i:n.length,c=Kc(n,o,l,i,!1),c===c.next&&(c.steiner=!0),s.push(ng(c));for(s.sort(K0),r=0;r<s.length;r++)t=J0(s[r],t);return t}function K0(n,e){return n.x-e.x}function J0(n,e){const t=j0(n,e);if(!t)return e;const i=jc(t,n);return gi(i,i.next),gi(t,t.next)}function j0(n,e){let t=e,i=-1/0,s;const r=n.x,a=n.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){const d=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>i&&(i=d,s=t.x<t.next.x?t:t.next,d===r))return s}t=t.next}while(t!==e);if(!s)return null;const o=s,l=s.x,c=s.y;let u=1/0,h;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&Hi(a<c?r:i,a,l,c,a<c?i:r,a,t.x,t.y)&&(h=Math.abs(a-t.y)/(r-t.x),ys(t,n)&&(h<u||h===u&&(t.x>s.x||t.x===s.x&&$0(s,t)))&&(s=t,u=h)),t=t.next;while(t!==o);return s}function $0(n,e){return gt(n.prev,n,e.prev)<0&&gt(e.next,n,n.next)<0}function eg(n,e,t,i){let s=n;do s.z===0&&(s.z=fo(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,tg(s)}function tg(n){let e,t,i,s,r,a,o,l,c=1;do{for(t=n,n=null,r=null,a=0;t;){for(a++,i=t,o=0,e=0;e<c&&(o++,i=i.nextZ,!!i);e++);for(l=c;o>0||l>0&&i;)o!==0&&(l===0||!i||t.z<=i.z)?(s=t,t=t.nextZ,o--):(s=i,i=i.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;t=i}r.nextZ=null,c*=2}while(a>1);return n}function fo(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function ng(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Hi(n,e,t,i,s,r,a,o){return(s-a)*(e-o)>=(n-a)*(r-o)&&(n-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(i-o)}function ig(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!sg(n,e)&&(ys(n,e)&&ys(e,n)&&rg(n,e)&&(gt(n.prev,n,e.prev)||gt(n,e.prev,e))||Pr(n,e)&&gt(n.prev,n,n.next)>0&&gt(e.prev,e,e.next)>0)}function gt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Pr(n,e){return n.x===e.x&&n.y===e.y}function Jc(n,e,t,i){const s=cr(gt(n,e,t)),r=cr(gt(n,e,i)),a=cr(gt(t,i,n)),o=cr(gt(t,i,e));return!!(s!==r&&a!==o||s===0&&lr(n,t,e)||r===0&&lr(n,i,e)||a===0&&lr(t,n,i)||o===0&&lr(t,e,i))}function lr(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function cr(n){return n>0?1:n<0?-1:0}function sg(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Jc(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function ys(n,e){return gt(n.prev,n,n.next)<0?gt(n,e,n.next)>=0&&gt(n,n.prev,e)>=0:gt(n,e,n.prev)<0||gt(n,n.next,e)<0}function rg(n,e){let t=n,i=!1;const s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function jc(n,e){const t=new po(n.i,n.x,n.y),i=new po(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function jl(n,e,t,i){const s=new po(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function _s(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function po(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function ag(n,e,t,i){let s=0;for(let r=e,a=t-i;r<t;r+=i)s+=(n[a]-n[r])*(n[r+1]+n[a+1]),a=r;return s}class Ms{static area(e){const t=e.length;let i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return Ms.area(e)<0}static triangulateShape(e,t){const i=[],s=[],r=[];$l(e),ec(i,e);let a=e.length;t.forEach($l);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,ec(i,t[l]);const o=W0.triangulate(i,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function $l(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function ec(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class Tr extends Rt{constructor(e=new ho([new de(.5,.5),new de(-.5,.5),new de(-.5,-.5),new de(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];a(c)}this.setAttribute("position",new nt(s,3)),this.setAttribute("uv",new nt(r,2)),this.computeVertexNormals();function a(o){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:f-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,A=t.UVGenerator!==void 0?t.UVGenerator:og;let M,x=!1,C,E,y,T;p&&(M=p.getSpacedPoints(u),x=!0,d=!1,C=p.computeFrenetFrames(u,!1),E=new N,y=new N,T=new N),d||(g=0,f=0,m=0,v=0);const S=o.extractPoints(c);let w=S.shape;const _=S.holes;if(!Ms.isClockWise(w)){w=w.reverse();for(let j=0,le=_.length;j<le;j++){const B=_[j];Ms.isClockWise(B)&&(_[j]=B.reverse())}}const I=Ms.triangulateShape(w,_),F=w;for(let j=0,le=_.length;j<le;j++){const B=_[j];w=w.concat(B)}function k(j,le,B){return le||console.error("THREE.ExtrudeGeometry: vec does not exist"),j.clone().addScaledVector(le,B)}const z=w.length,V=I.length;function G(j,le,B){let Me,ce,xe;const ge=j.x-le.x,Ee=j.y-le.y,we=B.x-j.x,P=B.y-j.y,b=ge*ge+Ee*Ee,Q=ge*P-Ee*we;if(Math.abs(Q)>Number.EPSILON){const te=Math.sqrt(b),he=Math.sqrt(we*we+P*P),se=le.x-Ee/te,Le=le.y+ge/te,pe=B.x-P/he,Ce=B.y+we/he,He=((pe-se)*P-(Ce-Le)*we)/(ge*P-Ee*we);Me=se+ge*He-j.x,ce=Le+Ee*He-j.y;const ve=Me*Me+ce*ce;if(ve<=2)return new de(Me,ce);xe=Math.sqrt(ve/2)}else{let te=!1;ge>Number.EPSILON?we>Number.EPSILON&&(te=!0):ge<-Number.EPSILON?we<-Number.EPSILON&&(te=!0):Math.sign(Ee)===Math.sign(P)&&(te=!0),te?(Me=-Ee,ce=ge,xe=Math.sqrt(b)):(Me=ge,ce=Ee,xe=Math.sqrt(b/2))}return new de(Me/xe,ce/xe)}const J=[];for(let j=0,le=F.length,B=le-1,Me=j+1;j<le;j++,B++,Me++)B===le&&(B=0),Me===le&&(Me=0),J[j]=G(F[j],F[B],F[Me]);const q=[];let re,fe=J.concat();for(let j=0,le=_.length;j<le;j++){const B=_[j];re=[];for(let Me=0,ce=B.length,xe=ce-1,ge=Me+1;Me<ce;Me++,xe++,ge++)xe===ce&&(xe=0),ge===ce&&(ge=0),re[Me]=G(B[Me],B[xe],B[ge]);q.push(re),fe=fe.concat(re)}for(let j=0;j<g;j++){const le=j/g,B=f*Math.cos(le*Math.PI/2),Me=m*Math.sin(le*Math.PI/2)+v;for(let ce=0,xe=F.length;ce<xe;ce++){const ge=k(F[ce],J[ce],Me);H(ge.x,ge.y,-B)}for(let ce=0,xe=_.length;ce<xe;ce++){const ge=_[ce];re=q[ce];for(let Ee=0,we=ge.length;Ee<we;Ee++){const P=k(ge[Ee],re[Ee],Me);H(P.x,P.y,-B)}}}const Se=m+v;for(let j=0;j<z;j++){const le=d?k(w[j],fe[j],Se):w[j];x?(y.copy(C.normals[0]).multiplyScalar(le.x),E.copy(C.binormals[0]).multiplyScalar(le.y),T.copy(M[0]).add(y).add(E),H(T.x,T.y,T.z)):H(le.x,le.y,0)}for(let j=1;j<=u;j++)for(let le=0;le<z;le++){const B=d?k(w[le],fe[le],Se):w[le];x?(y.copy(C.normals[j]).multiplyScalar(B.x),E.copy(C.binormals[j]).multiplyScalar(B.y),T.copy(M[j]).add(y).add(E),H(T.x,T.y,T.z)):H(B.x,B.y,h/u*j)}for(let j=g-1;j>=0;j--){const le=j/g,B=f*Math.cos(le*Math.PI/2),Me=m*Math.sin(le*Math.PI/2)+v;for(let ce=0,xe=F.length;ce<xe;ce++){const ge=k(F[ce],J[ce],Me);H(ge.x,ge.y,h+B)}for(let ce=0,xe=_.length;ce<xe;ce++){const ge=_[ce];re=q[ce];for(let Ee=0,we=ge.length;Ee<we;Ee++){const P=k(ge[Ee],re[Ee],Me);x?H(P.x,P.y+M[u-1].y,M[u-1].x+B):H(P.x,P.y,h+B)}}}O(),U();function O(){const j=s.length/3;if(d){let le=0,B=z*le;for(let Me=0;Me<V;Me++){const ce=I[Me];ie(ce[2]+B,ce[1]+B,ce[0]+B)}le=u+g*2,B=z*le;for(let Me=0;Me<V;Me++){const ce=I[Me];ie(ce[0]+B,ce[1]+B,ce[2]+B)}}else{for(let le=0;le<V;le++){const B=I[le];ie(B[2],B[1],B[0])}for(let le=0;le<V;le++){const B=I[le];ie(B[0]+z*u,B[1]+z*u,B[2]+z*u)}}i.addGroup(j,s.length/3-j,0)}function U(){const j=s.length/3;let le=0;W(F,le),le+=F.length;for(let B=0,Me=_.length;B<Me;B++){const ce=_[B];W(ce,le),le+=ce.length}i.addGroup(j,s.length/3-j,1)}function W(j,le){let B=j.length;for(;--B>=0;){const Me=B;let ce=B-1;ce<0&&(ce=j.length-1);for(let xe=0,ge=u+g*2;xe<ge;xe++){const Ee=z*xe,we=z*(xe+1),P=le+Me+Ee,b=le+ce+Ee,Q=le+ce+we,te=le+Me+we;oe(P,b,Q,te)}}}function H(j,le,B){l.push(j),l.push(le),l.push(B)}function ie(j,le,B){ue(j),ue(le),ue(B);const Me=s.length/3,ce=A.generateTopUV(i,s,Me-3,Me-2,Me-1);ne(ce[0]),ne(ce[1]),ne(ce[2])}function oe(j,le,B,Me){ue(j),ue(le),ue(Me),ue(le),ue(B),ue(Me);const ce=s.length/3,xe=A.generateSideWallUV(i,s,ce-6,ce-3,ce-2,ce-1);ne(xe[0]),ne(xe[1]),ne(xe[3]),ne(xe[1]),ne(xe[2]),ne(xe[3])}function ue(j){s.push(l[j*3+0]),s.push(l[j*3+1]),s.push(l[j*3+2])}function ne(j){r.push(j.x),r.push(j.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return lg(t,i,e)}static fromJSON(e,t){const i=[];for(let r=0,a=e.shapes.length;r<a;r++){const o=t[e.shapes[r]];i.push(o)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new uo[s.type]().fromJSON(s)),new Tr(i,e.options)}}const og={generateTopUV:function(n,e,t,i,s){const r=e[t*3],a=e[t*3+1],o=e[i*3],l=e[i*3+1],c=e[s*3],u=e[s*3+1];return[new de(r,a),new de(o,l),new de(c,u)]},generateSideWallUV:function(n,e,t,i,s,r){const a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[i*3],u=e[i*3+1],h=e[i*3+2],d=e[s*3],f=e[s*3+1],m=e[s*3+2],v=e[r*3],g=e[r*3+1],p=e[r*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new de(a,1-l),new de(c,1-h),new de(d,1-m),new de(v,1-p)]:[new de(o,1-l),new de(u,1-h),new de(f,1-m),new de(g,1-p)]}};function lg(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Es extends Rt{constructor(e=.5,t=1,i=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:a},i=Math.max(3,i),s=Math.max(1,s);const o=[],l=[],c=[],u=[];let h=e;const d=(t-e)/s,f=new N,m=new de;for(let v=0;v<=s;v++){for(let g=0;g<=i;g++){const p=r+g/i*a;f.x=h*Math.cos(p),f.y=h*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),m.x=(f.x/t+1)/2,m.y=(f.y/t+1)/2,u.push(m.x,m.y)}h+=d}for(let v=0;v<s;v++){const g=v*(i+1);for(let p=0;p<i;p++){const A=p+g,M=A,x=A+i+1,C=A+i+2,E=A+1;o.push(M,x,E),o.push(x,C,E)}}this.setIndex(o),this.setAttribute("position",new nt(l,3)),this.setAttribute("normal",new nt(c,3)),this.setAttribute("uv",new nt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Es(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Ts extends Rt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const u=[],h=new N,d=new N,f=[],m=[],v=[],g=[];for(let p=0;p<=i;p++){const A=[],M=p/i;let x=0;p===0&&a===0?x=.5/t:p===i&&l===Math.PI&&(x=-.5/t);for(let C=0;C<=t;C++){const E=C/t;h.x=-e*Math.cos(s+E*r)*Math.sin(a+M*o),h.y=e*Math.cos(a+M*o),h.z=e*Math.sin(s+E*r)*Math.sin(a+M*o),m.push(h.x,h.y,h.z),d.copy(h).normalize(),v.push(d.x,d.y,d.z),g.push(E+x,1-M),A.push(c++)}u.push(A)}for(let p=0;p<i;p++)for(let A=0;A<t;A++){const M=u[p][A+1],x=u[p][A],C=u[p+1][A],E=u[p+1][A+1];(p!==0||a>0)&&f.push(M,x,E),(p!==i-1||l<Math.PI)&&f.push(x,C,E)}this.setIndex(f),this.setAttribute("position",new nt(m,3)),this.setAttribute("normal",new nt(v,3)),this.setAttribute("uv",new nt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ts(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Po extends Rt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);const a=[],o=[],l=[],c=[],u=new N,h=new N,d=new N;for(let f=0;f<=i;f++)for(let m=0;m<=s;m++){const v=m/s*r,g=f/i*Math.PI*2;h.x=(e+t*Math.cos(g))*Math.cos(v),h.y=(e+t*Math.cos(g))*Math.sin(v),h.z=t*Math.sin(g),o.push(h.x,h.y,h.z),u.x=e*Math.cos(v),u.y=e*Math.sin(v),d.subVectors(h,u).normalize(),l.push(d.x,d.y,d.z),c.push(m/s),c.push(f/i)}for(let f=1;f<=i;f++)for(let m=1;m<=s;m++){const v=(s+1)*f+m-1,g=(s+1)*(f-1)+m-1,p=(s+1)*(f-1)+m,A=(s+1)*f+m;a.push(v,g,A),a.push(g,p,A)}this.setIndex(a),this.setAttribute("position",new nt(o,3)),this.setAttribute("normal",new nt(l,3)),this.setAttribute("uv",new nt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Po(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class ci extends zn{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Te(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bc,this.normalScale=new de(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ls extends ci{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new de(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return yt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Te(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Te(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Te(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class cg{constructor(e,t,i){const s=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const f=c[h],m=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return m}return null}}}class Ir extends dt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Te(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const pa=new it,tc=new N,nc=new N;class Io{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new de(512,512),this.map=null,this.mapPass=null,this.matrix=new it,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new To,this._frameExtents=new de(1,1),this._viewportCount=1,this._viewports=[new at(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;tc.setFromMatrixPosition(e.matrixWorld),t.position.copy(tc),nc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(nc),t.updateMatrixWorld(),pa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(pa),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(pa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class ug extends Io{constructor(){super(new Gt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=Ki*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class $c extends Ir{constructor(e,t,i=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.target=new dt,this.distance=i,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new ug}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const ic=new it,cs=new N,ma=new N;class hg extends Io{constructor(){super(new Gt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new de(4,2),this._viewportCount=6,this._viewports=[new at(2,1,1,1),new at(0,1,1,1),new at(3,1,1,1),new at(1,1,1,1),new at(3,0,1,1),new at(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),cs.setFromMatrixPosition(e.matrixWorld),i.position.copy(cs),ma.copy(i.position),ma.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(ma),i.updateMatrixWorld(),s.makeTranslation(-cs.x,-cs.y,-cs.z),ic.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ic)}}class Ut extends Ir{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new hg}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class dg extends Io{constructor(){super(new bo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class fg extends Ir{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.target=new dt,this.shadow=new dg}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class pg extends Ir{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class mg{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=sc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=sc();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function sc(){return performance.now()}class Ie{constructor(e){this.value=e}clone(){return new Ie(this.value.clone===void 0?this.value:this.value.clone())}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:vi}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=vi);const vt=0,mo=()=>new Promise(n=>{requestAnimationFrame(()=>{window.setTimeout(n,0)})});function Pn(n,e,t=1337){let i=Math.imul(n,374761393)+Math.imul(e,668265263)+Math.imul(t,1442695041);return i=(i^i>>>13)*1274126177,((i^i>>>16)>>>0)/4294967295}async function ga(n=1024,e=6,t=[243,245,244],i=[148,156,159],s=1.65,r,a){const o=n/e,l=Math.max(1.8,o*.024),c=Math.max(5.5,o*.115),u=document.createElement("canvas");u.width=n,u.height=n;const h=u.getContext("2d"),d=h.createImageData(n,n),f=d.data,m=document.createElement("canvas");m.width=n,m.height=n;const v=m.getContext("2d"),g=v.createImageData(n,n),p=g.data,A=new Float32Array(n*n),M=e*e,x=new Float32Array(M),C=new Float32Array(M),E=new Float32Array(M),y=new Float32Array(M),T=new Float32Array(M),S=new Float32Array(M),w=new Float32Array(M),_=new Float32Array(M),D=new Float32Array(M);for(let G=0;G<e;G++)for(let J=0;J<e;J++){const q=G*e+J;if(x[q]=(Pn(J,G,19)-.5)*6.5,C[q]=(Pn(J,G,41)-.5)*3.4,E[q]=(Pn(J,G,73)-.5)*.028,y[q]=(Pn(J,G,97)-.5)*.015,T[q]=(Pn(J,G,131)-.5)*.015,S[q]=Pn(J,G,193)*Math.PI*2,r&&r.length>0){const re=Math.floor(Pn(J,G,311)*r.length)%r.length,fe=r[re];w[q]=fe[0],_[q]=fe[1],D[q]=fe[2]}else w[q]=t[0],_[q]=t[1],D[q]=t[2]}const I=128;for(let G=0;G<n;G+=I){const J=Math.min(n,G+I);for(let q=G;q<J;q++){const re=q/o,fe=Math.floor(re)%e,Se=(re-Math.floor(re))*o,O=Math.min(Se,o-Se);for(let U=0;U<n;U++){const W=U/o,H=Math.floor(W)%e,ie=(W-Math.floor(W))*o,oe=Math.min(ie,o-ie),ue=fe*e+H,ne=q*n+U,j=ne*4,le=Math.min(oe,O),B=ie/o-.5,Me=Se/o-.5,ce=Math.max(0,c-Math.max(0,oe-l)),xe=Math.max(0,c-Math.max(0,O-l)),ge=Math.hypot(ce,xe),Ee=Math.max(0,Math.min(1,1-ge/c)),we=Ee*Ee*(3-2*Ee),P=Math.max(0,Math.min(1,(le-l)/2.4)),b=P*P*(3-2*P),Q=(Pn(U,q,509)-.5)*7,te=.84+.16*Math.min(1,le/Math.max(1,l)),he=(i[0]+Q)*te,se=(i[1]+Q)*te,Le=(i[2]+Q)*te,pe=.9+.1*we,Ce=x[ue],He=C[ue],ve=Math.max(0,Math.min(255,(w[ue]+Ce+He)*pe)),Re=Math.max(0,Math.min(255,(_[ue]+Ce)*pe)),Ne=Math.max(0,Math.min(255,(D[ue]+Ce-He*.45)*pe));f[j]=Math.round(he+(ve-he)*b),f[j+1]=Math.round(se+(Re-se)*b),f[j+2]=Math.round(Le+(Ne-Le)*b),f[j+3]=255;const ke=S[ue],Pe=Math.sin(B*5.2+ke)*Math.cos(Me*4.8-ke*.7)*.009*we,Ze=.08+.06*Math.sin(Math.min(1,le/Math.max(1,l))*Math.PI*.5),Ve=(1-(B*B+Me*Me)*.48)*.036,tt=.3+.58*we+Ve+Pe+y[ue]*B+T[ue]*Me;A[ne]=Math.max(0,Math.min(1,Ze+(tt-Ze)*b));const L=.88,K=.13+E[ue]+(1-we)*.075,Y=Math.round(Math.max(22,Math.min(242,(L+(K-L)*b)*255)));p[j]=Y,p[j+1]=Y,p[j+2]=Y,p[j+3]=255}}a?.(J/n*.65),await mo()}h.putImageData(d,0,0),v.putImageData(g,0,0);const F=new Uint8Array(n*n*4);for(let G=0;G<n;G+=I*2){const J=Math.min(n,G+I*2);for(let q=G;q<J;q++){const re=(q-1+n)%n,fe=(q+1)%n;for(let Se=0;Se<n;Se++){const O=(Se-1+n)%n,U=(Se+1)%n,W=A[re*n+O],H=A[re*n+Se],ie=A[re*n+U],oe=A[q*n+O],ue=A[q*n+U],ne=A[fe*n+O],j=A[fe*n+Se],le=A[fe*n+U],B=(3*ie+10*ue+3*le-(3*W+10*oe+3*ne))*.0625,Me=(3*ne+10*j+3*le-(3*W+10*H+3*ie))*.0625;let ce=-B*s*3.2,xe=-Me*s*3.2,ge=1;const Ee=1/Math.hypot(ce,xe,ge);ce*=Ee,xe*=Ee,ge*=Ee;const we=(q*n+Se)*4;F[we]=Math.round((ce*.5+.5)*255),F[we+1]=Math.round((xe*.5+.5)*255),F[we+2]=Math.round((ge*.5+.5)*255),F[we+3]=255}}a?.(.65+J/n*.35),await mo()}const k=new mi(u);k.colorSpace=et,k.wrapS=Bt,k.wrapT=Bt,k.anisotropy=16;const z=new mi(m);z.wrapS=Bt,z.wrapT=Bt,z.anisotropy=16;const V=new wi(F,n,n,Et);return V.wrapS=Bt,V.wrapT=Bt,V.anisotropy=16,V.generateMipmaps=!0,V.minFilter=vn,V.magFilter=ut,V.needsUpdate=!0,{albedoMap:k,normalMap:V,roughnessMap:z}}async function gg(n=512,e=4){const t=n/e,i=t*.045,s=document.createElement("canvas");s.width=n,s.height=n;const r=s.getContext("2d"),a=r.createImageData(n,n),o=a.data,l=document.createElement("canvas");l.width=n,l.height=n;const c=l.getContext("2d"),u=c.createImageData(n,n),h=u.data,d=new Float32Array(n*n);for(let p=0;p<n;p+=128){const A=Math.min(n,p+128);for(let M=p;M<A;M++){const x=M/t,C=Math.floor(x)%e,E=(x-Math.floor(x))*t,y=Math.min(E,t-E);for(let T=0;T<n;T++){const S=T/t,w=Math.floor(S)%e,_=(S-Math.floor(S))*t,D=Math.min(_,t-_),I=Math.min(D,y),F=M*n+T,k=F*4,z=Math.max(0,Math.min(1,(I-i)/3)),V=Math.max(0,Math.min(1,(I-i*2.2)/(t*.14))),G=Pn(w,C,307)*6.283,J=_/t-.5,q=E/t-.5,re=Math.sin(J*9.4+G)*.35+Math.cos(q*9.4-G*.8)*.35+Math.sin((J+q)*6.2+G)*.22,fe=172,Se=179,O=181,U=.76+.24*V+re*.06,W=Math.min(255,212*U),H=Math.min(255,236*U),ie=Math.min(255,239*U);o[k]=Math.round(fe+(W-fe)*z),o[k+1]=Math.round(Se+(H-Se)*z),o[k+2]=Math.round(O+(ie-O)*z),o[k+3]=255,d[F]=z*(.45+.35*V+re*.14*V);const oe=.9+(.09-.9)*z+(1-V)*.12*z,ue=Math.round(Math.max(18,Math.min(240,oe*255)));h[k]=ue,h[k+1]=ue,h[k+2]=ue,h[k+3]=255}}await mo()}r.putImageData(a,0,0),c.putImageData(u,0,0);const f=new Uint8Array(n*n*4);for(let p=0;p<n;p++){const A=(p-1+n)%n,M=(p+1)%n;for(let x=0;x<n;x++){const C=(x-1+n)%n,E=(x+1)%n,y=d[p*n+E]-d[p*n+C],T=d[M*n+x]-d[A*n+x];let S=-y*3.8,w=-T*3.8,_=1;const D=1/Math.hypot(S,w,_);S*=D,w*=D,_*=D;const I=(p*n+x)*4;f[I]=Math.round((S*.5+.5)*255),f[I+1]=Math.round((w*.5+.5)*255),f[I+2]=Math.round((_*.5+.5)*255),f[I+3]=255}}const m=new mi(s);m.colorSpace=et,m.wrapS=Bt,m.wrapT=Bt,m.anisotropy=8;const v=new mi(l);v.wrapS=Bt,v.wrapT=Bt;const g=new wi(f,n,n,Et);return g.wrapS=Bt,g.wrapT=Bt,g.generateMipmaps=!0,g.minFilter=vn,g.needsUpdate=!0,{albedoMap:m,normalMap:g,roughnessMap:v}}function vg(n=256){const e=document.createElement("canvas");e.width=n,e.height=n;const t=e.getContext("2d");t.fillStyle="#adb8be",t.fillRect(0,0,n,n),t.strokeStyle="#7c888f",t.lineWidth=16,t.strokeRect(8,8,n-16,n-16),t.fillStyle="#0b1216";const i=2,s=9,r=28,a=30,o=20,l=(n-a*2-o)/i,c=(n-r*2)/s;for(let h=0;h<i;h++){const d=a+h*(l+o);for(let f=0;f<s;f++){const m=r+f*c+4,v=c-8;t.beginPath(),t.roundRect(m,d,v,l,4),t.fill()}}t.fillStyle="#5e6a70";for(const[h,d]of[[16,16],[n-16,16],[16,n-16],[n-16,n-16]])t.beginPath(),t.arc(h,d,5,0,Math.PI*2),t.fill();const u=new mi(e);return u.colorSpace=et,u.wrapS=Bt,u.wrapT=Bt,u.anisotropy=8,u}function xg(n,e,t,i){const a=document.createElement("canvas");a.width=512,a.height=1024;const o=a.getContext("2d"),l=o.createLinearGradient(0,0,512,1024);l.addColorStop(0,n),l.addColorStop(1,e),o.fillStyle=l,o.fillRect(0,0,512,1024);const c=(h,d,f,m)=>{o.strokeStyle=t,o.lineWidth=11,o.strokeRect(h,d,f,m),o.strokeStyle=i,o.lineWidth=4,o.strokeRect(h+9,d+9,f-18,m-18)};c(68,82,376,356),c(68,508,376,424);const u=new mi(a);return u.colorSpace=et,u.anisotropy=8,u}function Mg(){const n=new Uint8Array(64);for(let t=0;t<16;t++)n[t*4]=255,n[t*4+1]=180,n[t*4+2]=255,n[t*4+3]=128;const e=new wi(n,4,4,Et);return e.minFilter=ut,e.magFilter=ut,e.wrapS=$t,e.wrapT=$t,e.needsUpdate=!0,{texture:e,centerX:0,centerZ:0,sizeX:400,sizeZ:400}}function Ag(n){return new xt({uniforms:{uTime:n,uTint:{value:new Te(13628150)}},vertexShader:`
      varying vec2 vUv;
      varying vec3 vNormalView;
      varying vec3 vViewDir;
      void main() {
        vUv = uv;
        vec4 mvPos = modelViewMatrix * vec4(position, 1.0);
        vNormalView = normalize(normalMatrix * normal);
        vViewDir = normalize(-mvPos.xyz);
        gl_Position = projectionMatrix * mvPos;
      }
    `,fragmentShader:`
      uniform float uTime;
      uniform vec3 uTint;
      varying vec2 vUv;
      varying vec3 vNormalView;
      varying vec3 vViewDir;
      void main() {
        float flow1 = sin(vUv.y * 28.0 + uTime * 4.2 + sin(vUv.x * 16.0) * 1.4) * 0.5 + 0.5;
        float flow2 = sin(vUv.y * 52.0 + uTime * 6.8 - vUv.x * 9.0) * 0.5 + 0.5;
        float sheen = pow(flow1 * 0.65 + flow2 * 0.35, 2.2);
        float fres = pow(1.0 - abs(dot(vNormalView, vViewDir)), 2.0);
        float edgeMask = smoothstep(0.0, 0.08, vUv.x) * smoothstep(1.0, 0.92, vUv.x);
        float endFade = smoothstep(0.0, 0.14, vUv.y) * smoothstep(1.0, 0.90, vUv.y);
        vec3 col = uTint * (0.62 + sheen * 0.68 + fres * 0.55);
        float alpha = (0.24 + sheen * 0.22 + fres * 0.24) * edgeMask * endFade;
        gl_FragColor = vec4(col, alpha);
      }
    `,transparent:!0,depthWrite:!1,side:Ht})}const Sg=`
uniform float uPoolTime;
uniform float uWaterLevel;
uniform float uWetBandHeight;
uniform float uCausticStrength;
uniform float uWallBounceCaustic;
uniform float uWaveSplashScale;
uniform float uGrimeStrength;
uniform vec3 uCausticColor;
uniform vec3 uHeightMistColor;
uniform float uHeightMistStartY;
uniform float uHeightMistEndY;
uniform float uHeightMistStrength;
uniform sampler2D uFieldMap;
uniform vec2 uFieldCenter;
uniform vec2 uFieldSize;

varying vec3 vPoolWorldPos;
varying vec3 vPoolWorldNormal;

vec2 poolHash22(vec2 p) {
  p = vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)));
  return fract(sin(p) * 43758.5453123);
}

float poolValueNoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * f * (f * (f * 6.0 - 15.0) + 10.0);
  float a = fract(sin(dot(i + vec2(0.0, 0.0), vec2(127.1, 311.7))) * 43758.5453);
  float b = fract(sin(dot(i + vec2(1.0, 0.0), vec2(127.1, 311.7))) * 43758.5453);
  float c = fract(sin(dot(i + vec2(0.0, 1.0), vec2(127.1, 311.7))) * 43758.5453);
  float d = fract(sin(dot(i + vec2(1.0, 1.0), vec2(127.1, 311.7))) * 43758.5453);
  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}

float poolCausticLayer(vec2 uv, float t) {
  vec2 n = floor(uv);
  vec2 f = fract(uv);
  float md1 = 8.0;
  float md2 = 8.0;
  for (int j = -1; j <= 1; j++) {
    for (int i = -1; i <= 1; i++) {
      vec2 g = vec2(float(i), float(j));
      vec2 o = poolHash22(n + g);
      o = 0.5 + 0.42 * sin(t * 0.85 + 6.28318 * o);
      vec2 r = g + o - f;
      float d = dot(r, r);
      if (d < md1) {
        md2 = md1;
        md1 = d;
      } else if (d < md2) {
        md2 = d;
      }
    }
  }
  float edge = sqrt(md2) - sqrt(md1);
  return pow(clamp(1.0 - edge * 2.45, 0.0, 1.0), 3.8);
}

float computePoolCaustics(vec3 wp, vec3 wn, float t) {
  vec2 proj = wp.xz * 0.58 + wp.y * 0.19;
  float c1 = poolCausticLayer(proj + vec2(t * 0.055, -t * 0.042), t);
  float c2 = poolCausticLayer(proj * 1.52 - vec2(t * 0.046, t * 0.068) + 4.3, t * 1.08);
  float net = clamp(c1 * 0.62 + c2 * 0.55, 0.0, 1.0);
  float upMask = clamp(wn.y * 0.58 + 0.44, 0.10, 1.0);
  return net * upMask;
}

vec4 sampleLevelField(vec2 xz) {
  vec2 uv = (xz - uFieldCenter) / max(uFieldSize, vec2(1.0)) + 0.5;
  return texture2D(uFieldMap, clamp(uv, 0.002, 0.998));
}

float computeWetFactor(vec3 wp, float waterPresence) {
  if (waterPresence < 0.02) return 0.0;
  float hAbove = wp.y - uWaterLevel;
  if (hAbove < 0.0) return waterPresence;
  float tide1 = poolValueNoise(wp.xz * 1.15 + vec2(wp.x * 0.18, wp.z * 0.18));
  float drip = poolValueNoise(vec2((wp.x + wp.z) * 3.6, wp.y * 0.48));
  float band = (uWetBandHeight + tide1 * (0.14 + uWaveSplashScale * 0.25) + drip * 0.08) * waterPresence;
  return (1.0 - smoothstep(-0.015, max(0.04, band), hAbove)) * waterPresence;
}

vec3 computeTriplanarWeights(vec3 wn) {
  vec3 w = pow(abs(wn), vec3(8.0));
  return w / max(w.x + w.y + w.z, 1e-5);
}

vec3 sampleTriplanarWorldNormal(sampler2D nMap, vec3 wp, vec3 wn, vec3 tw, vec2 scale, float invTile) {
  vec3 tnX = texture2D(nMap, wp.zy * invTile).xyz * 2.0 - 1.0;
  vec3 tnY = texture2D(nMap, wp.xz * invTile).xyz * 2.0 - 1.0;
  vec3 tnZ = texture2D(nMap, wp.xy * invTile).xyz * 2.0 - 1.0;

  tnX.xy *= scale;
  tnY.xy *= scale;
  tnZ.xy *= scale;

  vec3 wX = vec3(wn.x, wn.y + tnX.y * sign(wn.x + 1e-5), wn.z + tnX.x);
  vec3 wY = vec3(wn.x + tnY.x, wn.y, wn.z + tnY.y * sign(wn.y + 1e-5));
  vec3 wZ = vec3(wn.x + tnZ.x * sign(wn.z + 1e-5), wn.y + tnZ.y, wn.z);
  return normalize(wX * tw.x + wY * tw.y + wZ * tw.z);
}
`;function ur(n,e,t,i=1){n.onBeforeCompile=s=>{if(s.uniforms.uPoolTime=e.uPoolTime,s.uniforms.uWaterLevel=e.uWaterLevel,s.uniforms.uWetBandHeight=e.uWetBandHeight,s.uniforms.uCausticStrength=e.uCausticStrength,s.uniforms.uWallBounceCaustic=e.uWallBounceCaustic,s.uniforms.uWaveSplashScale=e.uWaveSplashScale,s.uniforms.uGrimeStrength=e.uGrimeStrength,s.uniforms.uCausticColor=e.uCausticColor,s.uniforms.uHeightMistColor=e.uHeightMistColor,s.uniforms.uHeightMistStartY=e.uHeightMistStartY,s.uniforms.uHeightMistEndY=e.uHeightMistEndY,s.uniforms.uHeightMistStrength=e.uHeightMistStrength,s.uniforms.uFieldMap=e.uFieldMap,s.uniforms.uFieldCenter=e.uFieldCenter,s.uniforms.uFieldSize=e.uFieldSize,s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
        varying vec3 vPoolWorldPos;
        varying vec3 vPoolWorldNormal;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
        vec4 poolWp = vec4(transformed, 1.0);
        #ifdef USE_INSTANCING
          poolWp = instanceMatrix * poolWp;
        #endif
        poolWp = modelMatrix * poolWp;
        vPoolWorldPos = poolWp.xyz;
        mat3 poolNormMat = mat3(modelMatrix);
        #ifdef USE_INSTANCING
          poolNormMat = poolNormMat * mat3(instanceMatrix);
        #endif
        vPoolWorldNormal = normalize(poolNormMat * objectNormal);`),s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
        ${Sg}`).replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
        vec3 triWn = normalize(vPoolWorldNormal);
        vec3 triW = computeTriplanarWeights(triWn);

        vec4 poolField = sampleLevelField(vPoolWorldPos.xz + triWn.xz * 0.68);
        vec4 poolFieldSelf = sampleLevelField(vPoolWorldPos.xz);
        float poolWaterNear = max(poolField.r, poolFieldSelf.r * 0.85);
        float poolSunlitWater = max(poolField.g, poolFieldSelf.g * 0.65);
        float poolWet = computeWetFactor(vPoolWorldPos, poolWaterNear);
        vec3 poolPerturbedWorldN = triWn;`),t>0){const r=t.toFixed(6);s.fragmentShader=s.fragmentShader.replace("#include <map_fragment>",`#ifdef USE_MAP
            const float poolInvTile = ${r};
            vec4 triCol =
              texture2D(map, vPoolWorldPos.zy * poolInvTile) * triW.x +
              texture2D(map, vPoolWorldPos.xz * poolInvTile) * triW.y +
              texture2D(map, vPoolWorldPos.xy * poolInvTile) * triW.z;
            diffuseColor *= triCol;
          #endif`).replace("#include <roughnessmap_fragment>",`float roughnessFactor = roughness;
          #ifdef USE_ROUGHNESSMAP
            const float poolInvTileR = ${r};
            float triRough =
              texture2D(roughnessMap, vPoolWorldPos.zy * poolInvTileR).g * triW.x +
              texture2D(roughnessMap, vPoolWorldPos.xz * poolInvTileR).g * triW.y +
              texture2D(roughnessMap, vPoolWorldPos.xy * poolInvTileR).g * triW.z;
            roughnessFactor *= triRough;
          #endif`).replace("#include <normal_fragment_maps>",`#ifdef USE_NORMALMAP_TANGENTSPACE
            poolPerturbedWorldN = sampleTriplanarWorldNormal(normalMap, vPoolWorldPos, triWn, triW, normalScale, ${r});
            normal = normalize((viewMatrix * vec4(poolPerturbedWorldN, 0.0)).xyz);
          #endif

          vec3 dndu = dFdx(poolPerturbedWorldN);
          vec3 dndv = dFdy(poolPerturbedWorldN);
          float normVariance = 0.42 * (dot(dndu, dndu) + dot(dndv, dndv));
          float kernelRough2 = min(2.0 * normVariance, 0.22);
          roughnessFactor = sqrt(clamp(roughnessFactor * roughnessFactor + kernelRough2, 0.004, 1.0));`).replace("#include <clearcoat_normal_fragment_maps>",`#ifdef USE_CLEARCOAT_NORMALMAP
            vec3 ccWorldN = sampleTriplanarWorldNormal(clearcoatNormalMap, vPoolWorldPos, triWn, triW, clearcoatNormalScale, ${r});
            clearcoatNormal = normalize((viewMatrix * vec4(ccWorldN, 0.0)).xyz);
          #endif`)}s.fragmentShader=s.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>

        float macroEnclosureAO = mix(0.76, 1.0, poolFieldSelf.b);
        diffuseColor.rgb *= macroEnclosureAO;

        if (uGrimeStrength > 0.01) {
          float dampPatch = poolValueNoise(vPoolWorldPos.xz * 0.32 + vPoolWorldPos.y * 0.34);
          float verticalStreak = poolValueNoise(vec2((vPoolWorldPos.x + vPoolWorldPos.z) * 1.75, vPoolWorldPos.y * 0.15));
          float grimeMask = clamp((dampPatch * 0.62 + verticalStreak * 0.56 - 0.36) * 1.55, 0.0, 1.0) * uGrimeStrength;
          float grimeHeight = mix(0.42, 1.0, poolWet) * grimeMask;
          diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb * vec3(0.24, 0.30, 0.28), grimeHeight * 0.72);
        }

        diffuseColor.rgb *= mix(1.0, 0.64, poolWet * 0.85);

        float subD = max(0.0, uWaterLevel - vPoolWorldPos.y) * poolWaterNear;
        if (subD > 0.001) {
          vec3 subAbsorb = exp(-subD * vec3(0.48, 0.20, 0.17));
          float abyssFade = exp(-max(0.0, subD - 1.8) * 0.19);
          diffuseColor.rgb *= mix(vec3(1.0), subAbsorb * abyssFade, 0.92);
        }`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>

        roughnessFactor = mix(roughnessFactor, 0.056, poolWet * 0.90);`).replace("#include <lights_fragment_end>",`#include <lights_fragment_end>

        float directLitLuma = dot(reflectedLight.directDiffuse, vec3(0.3333));
        float lightGate = clamp(0.16 + directLitLuma * 1.35, 0.0, 1.35);

        float subDepthC = uWaterLevel - vPoolWorldPos.y;
        if (subDepthC > -0.04 && poolWaterNear > 0.1) {
          float underMask = smoothstep(-0.03, 0.14, subDepthC) * poolWaterNear;
          float depthFade = exp(-max(0.0, subDepthC) * 0.20);
          float caust = computePoolCaustics(vPoolWorldPos, triWn, uPoolTime);
          reflectedLight.directDiffuse += uCausticColor * caust * underMask * depthFade * lightGate * uCausticStrength * ${i.toFixed(3)};
        }

        float aboveH = vPoolWorldPos.y - uWaterLevel;
        if (aboveH > 0.0 && aboveH < 4.5 && poolSunlitWater > 0.02) {
          float heightFade = pow(1.0 - smoothstep(0.0, 4.5, aboveH), 1.65);

          float bounceAngleMask = clamp(0.68 - triWn.y * 0.48, 0.08, 1.0);
          float bCaust = computePoolCaustics(
            vPoolWorldPos * 0.88 + vec3(0.0, -aboveH * 0.30, 0.0),
            vec3(0.0, 1.0, 0.0),
            uPoolTime * 0.84
          );
          float bounceEnergy = poolSunlitWater * pow(poolWaterNear, 1.15) * heightFade * bounceAngleMask;
          reflectedLight.indirectDiffuse += uCausticColor * bCaust * bounceEnergy * uWallBounceCaustic * ${i.toFixed(3)};

          reflectedLight.indirectDiffuse += diffuseColor.rgb * uCausticColor * (0.08 * bounceEnergy);
        }

        float specPeak = max(reflectedLight.directSpecular.r, max(reflectedLight.directSpecular.g, reflectedLight.directSpecular.b));
        if (specPeak > 2.6) {
          float clampedPeak = 2.6 + log(1.0 + (specPeak - 2.6)) * 0.85;
          reflectedLight.directSpecular *= (clampedPeak / specPeak);
        }
        float indSpecPeak = max(reflectedLight.indirectSpecular.r, max(reflectedLight.indirectSpecular.g, reflectedLight.indirectSpecular.b));
        if (indSpecPeak > 2.2) {
          float clampedInd = 2.2 + log(1.0 + (indSpecPeak - 2.2)) * 0.75;
          reflectedLight.indirectSpecular *= (clampedInd / indSpecPeak);
        }`).replace("#include <fog_fragment>",`#include <fog_fragment>
        if (uHeightMistStrength > 0.005) {
          float hmVert = smoothstep(uHeightMistStartY, uHeightMistEndY, vPoolWorldPos.y);
          float hmDist = smoothstep(26.0, 138.0, length(cameraPosition - vPoolWorldPos));
          float hmBlend = clamp(hmVert * hmDist * uHeightMistStrength, 0.0, 0.88);
          gl_FragColor.rgb = mix(gl_FragColor.rgb, uHeightMistColor, hmBlend);
        }
        #ifdef USE_COLOR
          float thresholdLightMask = smoothstep(0.03, 0.72, vColor.r);
          gl_FragColor.rgb *= thresholdLightMask;
        #endif`)},n.customProgramCacheKey=()=>`triplanar-porcelain-v5-${t.toFixed(4)}-${i.toFixed(2)}`}async function wg(n){n?.(.02,"SYNTHESIZING GLAZED PORCELAIN TILE MAPS...");const e=await ga(1024,6,[243,245,244],[148,156,159],1.55,void 0,E=>n?.(.02+E*.3,"SYNTHESIZING GLAZED PORCELAIN TILE MAPS..."));n?.(.34,"SYNTHESIZING ARCHITECTURAL MOSAIC TRIM MAPS...");const t=await ga(1024,8,[118,136,140],[64,74,78],1.45,void 0,E=>n?.(.34+E*.24,"SYNTHESIZING ARCHITECTURAL MOSAIC TRIM MAPS..."));n?.(.6,"SYNTHESIZING COBALT & AZURE MOSAIC MAPS...");const s=await ga(1024,10,[32,98,156],[20,42,64],1.62,[[26,86,148],[34,108,168],[22,68,128],[48,136,182],[18,56,108],[62,154,194],[30,96,158]],E=>n?.(.6+E*.28,"SYNTHESIZING COBALT & AZURE MOSAIC MAPS..."));n?.(.9,"SYNTHESIZING GLASS-BLOCK & HARDWARE MAPS...");const r=await gg(512,4),a=vg(256),o=xg("#cfd8dc","#b2bec4","rgba(72, 84, 90, 0.68)","rgba(248, 252, 254, 0.45)"),l=Mg(),c={uPoolTime:{value:0},uWaterLevel:{value:vt},uWetBandHeight:{value:.44},uCausticStrength:{value:.65},uWallBounceCaustic:{value:.28},uWaveSplashScale:{value:.2},uGrimeStrength:{value:0},uCausticColor:{value:new Te(8055007)},uHeightMistColor:{value:new Te(14214376)},uHeightMistStartY:{value:45},uHeightMistEndY:{value:145},uHeightMistStrength:{value:0},uFieldMap:{value:l.texture},uFieldCenter:{value:new de(l.centerX,l.centerZ)},uFieldSize:{value:new de(l.sizeX,l.sizeZ)}},u=new ls({map:e.albedoMap,normalMap:e.normalMap,normalScale:new de(.58,.58),roughnessMap:e.roughnessMap,roughness:1,metalness:0,clearcoat:.9,clearcoatRoughness:.068,clearcoatNormalMap:e.normalMap,clearcoatNormalScale:new de(.42,.42),ior:1.53,vertexColors:!0});ur(u,c,1/2.4,1);const h=new ls({map:t.albedoMap,normalMap:t.normalMap,normalScale:new de(.54,.54),roughnessMap:t.roughnessMap,roughness:.98,metalness:.02,clearcoat:.88,clearcoatRoughness:.072,clearcoatNormalMap:t.normalMap,clearcoatNormalScale:new de(.38,.38),ior:1.53,vertexColors:!0});ur(h,c,1/1.6,.88);const d=new ls({map:s.albedoMap,normalMap:s.normalMap,normalScale:new de(.64,.64),roughnessMap:s.roughnessMap,roughness:.92,metalness:.04,clearcoat:.94,clearcoatRoughness:.055,clearcoatNormalMap:s.normalMap,clearcoatNormalScale:new de(.46,.46),ior:1.54,vertexColors:!0});ur(d,c,1/1.4,.92);const f=new ls({map:r.albedoMap,normalMap:r.normalMap,normalScale:new de(.75,.75),roughnessMap:r.roughnessMap,roughness:.32,metalness:0,clearcoat:.95,clearcoatRoughness:.06,ior:1.52,emissive:new Te(13822703),emissiveMap:r.albedoMap,emissiveIntensity:.45});ur(f,c,1/.88,.35);const m=new ci({color:new Te(14871278),roughness:.13,metalness:.95}),v=new ci({color:new Te(5661288),roughness:.34,metalness:.88}),g=new ci({map:a,roughness:.32,metalness:.88,color:new Te(14213862)}),p=new ci({color:new Te(2042672),roughness:.54,metalness:.8}),A=new ci({color:new Te(856598),roughness:.36,metalness:.48}),M=Ag(c.uPoolTime),x=new ci({color:new Te(14464108),roughness:.24,metalness:.9}),C=new ls({map:o,roughness:.34,metalness:.08,clearcoat:.55,clearcoatRoughness:.16});return n?.(1,"MATERIALS INITIALIZED"),{whiteTile:u,ceilingTile:u,accentTile:h,cobaltMosaicTile:d,glassBlock:f,chromeMetal:m,weatheredSteel:v,stainlessGrate:g,darkTrussMetal:p,cubeFrameMat:A,waterSheetMat:M,brushedBrass:x,paintedDoor:C,configureForLevel({tileTint:E,accentTint:y,wetBandHeight:T,causticStrength:S,wallBounceCaustic:w,waveAmplitude:_,grimeStrength:D,causticColor:I,glassGlowColor:F,glassGlowIntensity:k,heightMistColor:z,heightMistStartY:V,heightMistEndY:G,heightMistStrength:J,fieldData:q}){u.color.setHex(E),h.color.setHex(y),f.emissive.setHex(F),f.emissiveIntensity=k,c.uWetBandHeight.value=T,c.uCausticStrength.value=S,c.uWallBounceCaustic.value=w,c.uWaveSplashScale.value=Math.max(0,_-.3),c.uGrimeStrength.value=D,c.uCausticColor.value.copy(I),c.uHeightMistColor.value.setHex(z),c.uHeightMistStartY.value=V,c.uHeightMistEndY.value=G,c.uHeightMistStrength.value=J,c.uFieldMap.value=q.texture,c.uFieldCenter.value.set(q.centerX,q.centerZ),c.uFieldSize.value.set(q.sizeX,q.sizeZ)},update(E){c.uPoolTime.value=E},dispose(){l.texture.dispose(),e.albedoMap.dispose(),e.normalMap.dispose(),e.roughnessMap.dispose(),t.albedoMap.dispose(),t.normalMap.dispose(),t.roughnessMap.dispose(),s.albedoMap.dispose(),s.normalMap.dispose(),s.roughnessMap.dispose(),r.albedoMap.dispose(),r.normalMap.dispose(),r.roughnessMap.dispose(),a.dispose(),o.dispose(),u.dispose(),h.dispose(),d.dispose(),f.dispose(),m.dispose(),v.dispose(),g.dispose(),p.dispose(),A.dispose(),M.dispose(),x.dispose(),C.dispose()}}}class yg{size=160;worldSpan=26;texture;curr;prev;next;texData;centerX=0;centerZ=0;simAccum=0;constructor(){const e=this.size*this.size;this.curr=new Float32Array(e),this.prev=new Float32Array(e),this.next=new Float32Array(e),this.texData=new Uint16Array(e*4);const t=jr.toHalfFloat(0),i=jr.toHalfFloat(1);for(let s=0;s<e;s++){const r=s*4;this.texData[r]=t,this.texData[r+1]=t,this.texData[r+2]=t,this.texData[r+3]=i}this.texture=new wi(this.texData,this.size,this.size,Et,Nn),this.texture.minFilter=ut,this.texture.magFilter=ut,this.texture.wrapS=$t,this.texture.wrapT=$t,this.texture.needsUpdate=!0}reset(e,t){this.curr.fill(0),this.prev.fill(0),this.next.fill(0),this.centerX=e,this.centerZ=t,this.uploadTexture()}recenter(e,t){const i=this.worldSpan/this.size,s=Math.round((e-this.centerX)/i),r=Math.round((t-this.centerZ)/i);if(s===0&&r===0)return;const a=this.size,o=l=>{const c=new Float32Array(a*a);for(let u=0;u<a;u++){const h=u+r;if(h<0||h>=a)continue;const d=u*a,f=h*a;for(let m=0;m<a;m++){const v=m+s;v<0||v>=a||(c[d+m]=l[f+v])}}return c};this.curr=o(this.curr),this.prev=o(this.prev),this.centerX+=s*i,this.centerZ+=r*i}addImpulse(e,t,i,s=.44){const r=this.worldSpan/this.size,a=(e-this.centerX)/r+this.size*.5,o=(t-this.centerZ)/r+this.size*.5,l=Math.max(1.8,s/r),c=Math.ceil(l*2.4),u=Math.floor(a),h=Math.floor(o),d=this.size;for(let f=-c;f<=c;f++){const m=h+f;if(!(m<=1||m>=d-2))for(let v=-c;v<=c;v++){const g=u+v;if(g<=1||g>=d-2)continue;const p=(g-a)*(g-a)+(m-o)*(m-o),A=Math.exp(-p/(l*l*.85));if(A>.004){const M=m*d+g;this.curr[M]=Math.max(-1.8,Math.min(1.8,this.curr[M]-i*A*.68))}}}}step(e){const t=.016666666666666666;this.simAccum=Math.min(this.simAccum+e,.05);const i=this.size,s=.24,r=.986;let a=!1;for(;this.simAccum>=t;){this.simAccum-=t,a=!0;for(let l=1;l<i-1;l++){const c=l*i,u=(l-1)*i,h=(l+1)*i;for(let d=1;d<i-1;d++){const f=c+d,m=this.curr[f-1]+this.curr[f+1]+this.curr[u+d]+this.curr[h+d]-4*this.curr[f];let v=(2*this.curr[f]-this.prev[f]+s*m)*r;const g=Math.min(d,l,i-1-d,i-1-l);g<10&&(v*=.84+g/10*.16),this.next[f]=Math.max(-2,Math.min(2,v))}}const o=this.prev;this.prev=this.curr,this.curr=this.next,this.next=o}a&&this.uploadTexture()}uploadTexture(){const e=this.size,t=this.texData,i=this.curr,s=jr.toHalfFloat;for(let r=1;r<e-1;r++){const a=r*e,o=(r-1)*e,l=(r+1)*e;for(let c=1;c<e-1;c++){const u=a+c,h=i[u],d=(i[u+1]-i[u-1])*.5,f=(i[l+c]-i[o+c])*.5,m=u*4;t[m]=s(h),t[m+1]=s(d),t[m+2]=s(f)}}this.texture.needsUpdate=!0}dispose(){this.texture.dispose()}}function _g(n=296){const e=new kt(1,1,n,n);e.rotateX(-Math.PI/2);const t=e.attributes.position;for(let i=0;i<t.count;i++){const s=t.getX(i)*2,r=t.getZ(i)*2,a=Math.abs(s),o=Math.abs(r),l=Math.sign(s)*(.2*a+.8*a*a)*.5,c=Math.sign(r)*(.2*o+.8*o*o)*.5;t.setX(i,l),t.setZ(i,c)}return t.needsUpdate=!0,e}const rc=[[.866,.5,.92,2.35,.195],[-.866,.5,1.04,2.52,.175],[.258,-.966,1.18,2.74,.15],[-.5,-.866,1.38,2.98,.125],[.966,-.258,1.66,3.28,.1],[-.342,.94,1.98,3.62,.082],[.707,.707,2.42,4.02,.062],[-.94,-.342,2.92,4.45,.048]],eu=`
struct WaveEval {
  vec3 offset;
  vec2 slope;
  float crest;
};

WaveEval evaluateWaveSpectrum(
  vec2 worldXZ,
  float t,
  float amp,
  float chop,
  float spd,
  float turb,
  vec2 flowVel,
  float wallProximity
) {
  vec2 p = worldXZ - flowVel * t * 0.45;
  float tt = t * spd;

  vec2 horizDisp = vec2(0.0);
  float heightSum = 0.0;
  vec2 gradSum = vec2(0.0);

  float reboundBoost = 1.0 + wallProximity * (0.34 + turb * 0.36);
  float effAmp = amp * reboundBoost;

  vec2 dirs[8];
  dirs[0] = vec2(0.866, 0.500);
  dirs[1] = vec2(-0.866, 0.500);
  dirs[2] = vec2(0.258, -0.966);
  dirs[3] = vec2(-0.500, -0.866);
  dirs[4] = vec2(0.966, -0.258);
  dirs[5] = vec2(-0.342, 0.940);
  dirs[6] = vec2(0.707, 0.707);
  dirs[7] = vec2(-0.940, -0.342);

  float ks[8];
  ks[0] = 0.92; ks[1] = 1.04; ks[2] = 1.18; ks[3] = 1.38;
  ks[4] = 1.66; ks[5] = 1.98; ks[6] = 2.42; ks[7] = 2.92;

  float omegas[8];
  omegas[0] = 2.35; omegas[1] = 2.52; omegas[2] = 2.74; omegas[3] = 2.98;
  omegas[4] = 3.28; omegas[5] = 3.62; omegas[6] = 4.02; omegas[7] = 4.45;

  float weights[8];
  weights[0] = 0.195; weights[1] = 0.175; weights[2] = 0.150; weights[3] = 0.125;
  weights[4] = 0.100; weights[5] = 0.082; weights[6] = 0.062; weights[7] = 0.048;

  for (int i = 0; i < 8; i++) {
    float a = weights[i] * effAmp;
    float k = ks[i];
    vec2 d = dirs[i];
    float phase = dot(p, d) * k + tt * omegas[i] + float(i) * 1.67;
    float s = sin(phase);
    float c = cos(phase);

    float steep = chop * 0.48 / max(k * a * 6.0, 1.0);
    horizDisp -= d * (steep * a * c);

    float hWave = a * (s + chop * 0.22 * (s * s - 0.5));
    float dhPhase = a * k * (c + chop * 0.44 * s * c);

    heightSum += hWave;
    gradSum += d * dhPhase;
  }

  vec2 c1 = p - vec2(4.2, -3.5);
  float r1 = length(mod(c1 + 9.0, 18.0) - 9.0) + 0.08;
  float env1 = exp(-r1 * 0.24);
  float ph1 = r1 * 2.55 - tt * 3.85;
  float spAmp1 = effAmp * 0.18 * env1 * (0.45 + 0.55 * turb);
  vec2 radDir1 = (mod(c1 + 9.0, 18.0) - 9.0) / r1;
  heightSum += sin(ph1) * spAmp1;
  gradSum += radDir1 * (cos(ph1) * 2.55 * spAmp1);

  vec2 c2 = p - vec2(-6.5, 5.8);
  float r2 = length(mod(c2 + 11.0, 22.0) - 11.0) + 0.08;
  float env2 = exp(-r2 * 0.20);
  float ph2 = r2 * 2.15 - tt * 3.42 + 2.1;
  float spAmp2 = effAmp * 0.16 * env2 * (0.45 + 0.55 * turb);
  vec2 radDir2 = (mod(c2 + 11.0, 22.0) - 11.0) / r2;
  heightSum += sin(ph2) * spAmp2;
  gradSum += radDir2 * (cos(ph2) * 2.15 * spAmp2);

  float standA = sin(p.x * 1.48 - tt * 2.65) * cos(p.y * 1.42 + tt * 2.48);
  float standAmp = effAmp * (0.10 + wallProximity * 0.22) * (0.5 + 0.5 * turb);
  heightSum += standA * standAmp;
  gradSum.x += 1.48 * cos(p.x * 1.48 - tt * 2.65) * cos(p.y * 1.42 + tt * 2.48) * standAmp;
  gradSum.y -= 1.42 * sin(p.x * 1.48 - tt * 2.65) * sin(p.y * 1.42 + tt * 2.48) * standAmp;

  WaveEval res;
  res.offset = vec3(horizDisp.x, heightSum, horizDisp.y);
  res.slope = gradSum;
  float maxPossible = max(0.06, effAmp * 0.92);
  res.crest = clamp(heightSum / maxPossible * 0.5 + 0.5, 0.0, 1.0);
  return res;
}
`,Eg=`
uniform float uTime;
uniform float uWaveAmp;
uniform float uChoppiness;
uniform float uWaveSpeed;
uniform float uTurbulence;
uniform float uDepthWaveDamping;
uniform vec2 uFlowVel;
uniform vec2 uSimCenter;
uniform float uSimSpan;
uniform sampler2D tWaveSim;
uniform sampler2D uFieldMap;
uniform vec2 uFieldCenter;
uniform vec2 uFieldSize;

varying vec3 vWorldPos;
varying vec3 vUndisplacedWorldPos;
varying vec4 vScreenClip;

${eu}

void main() {
  vec4 baseWp = modelMatrix * vec4(position, 1.0);
  vUndisplacedWorldPos = baseWp.xyz;

  vec2 fieldUV = (baseWp.xz - uFieldCenter) / max(uFieldSize, vec2(1.0)) + 0.5;
  vec4 field = texture2D(uFieldMap, clamp(fieldUV, 0.002, 0.998));

  float wallProx = smoothstep(0.05, 0.45, field.r) * (1.0 - smoothstep(0.55, 0.98, field.r));
  float depthAtten = mix(1.0, mix(0.42, 1.0, smoothstep(0.04, 0.24, field.a)), uDepthWaveDamping);
  float localAmp = uWaveAmp * depthAtten;

  WaveEval wv = evaluateWaveSpectrum(
    baseWp.xz,
    uTime,
    localAmp,
    uChoppiness,
    uWaveSpeed,
    uTurbulence,
    uFlowVel,
    wallProx
  );

  vec2 simUv = (baseWp.xz - uSimCenter) / uSimSpan + 0.5;
  float simH = 0.0;
  if (simUv.x > 0.02 && simUv.x < 0.98 && simUv.y > 0.02 && simUv.y < 0.98) {
    float edgeFade = smoothstep(0.02, 0.14, simUv.x) * smoothstep(0.98, 0.86, simUv.x)
                   * smoothstep(0.02, 0.14, simUv.y) * smoothstep(0.98, 0.86, simUv.y);
    simH = texture2D(tWaveSim, simUv).r * 0.085 * edgeFade;
  }

  vec4 displacedWp = vec4(
    baseWp.x + wv.offset.x,
    baseWp.y + wv.offset.y + simH,
    baseWp.z + wv.offset.z,
    1.0
  );

  vWorldPos = displacedWp.xyz;
  vec4 clipPos = projectionMatrix * viewMatrix * displacedWp;
  vScreenClip = clipPos;
  gl_Position = clipPos;
}
`,Tg=`
precision highp float;

uniform float uTime;
uniform float uWaterLevel;
uniform float uNear;
uniform float uFar;
uniform vec3 uFogColor;
uniform float uFogDensity;
uniform vec3 uCameraPos;
uniform mat4 uReflectionMatrix;
uniform vec2 uReflTexelSize;

uniform vec2 uSimCenter;
uniform float uSimSpan;
uniform vec3 uFlashlightPos;
uniform vec3 uFlashlightDir;
uniform float uFlashlightIntensity;

uniform vec3 uAbsorption;
uniform vec3 uDeepColor;
uniform vec3 uShallowColor;
uniform vec3 uReflectionTint;
uniform float uWaveAmp;
uniform float uChoppiness;
uniform float uWaveSpeed;
uniform float uTurbulence;
uniform float uDepthWaveDamping;
uniform vec2 uFlowVel;
uniform vec3 uSunDir;
uniform vec3 uSunSpecColor;
uniform float uSpecularIntensity;

uniform sampler2D tWaveSim;
uniform sampler2D tReflection;
uniform sampler2D tRefraction;
uniform sampler2D tDepth;
uniform sampler2D uFieldMap;
uniform vec2 uFieldCenter;
uniform vec2 uFieldSize;

varying vec3 vWorldPos;
varying vec3 vUndisplacedWorldPos;
varying vec4 vScreenClip;

${eu}

float linearizeDepth(float depthSample) {
  float z = depthSample * 2.0 - 1.0;
  return (2.0 * uNear * uFar) / (uFar + uNear - z * (uFar - uNear));
}

vec2 computeLiquidRippleNormals(vec2 p, float t, float strength) {
  vec2 g = vec2(0.0);

  vec2 rDirs[6];
  rDirs[0] = vec2(0.924, 0.383);
  rDirs[1] = vec2(-0.383, 0.924);
  rDirs[2] = vec2(-0.809, -0.588);
  rDirs[3] = vec2(0.588, -0.809);
  rDirs[4] = vec2(0.174, 0.985);
  rDirs[5] = vec2(-0.985, 0.174);

  float rKs[6];
  rKs[0] = 3.8; rKs[1] = 4.6; rKs[2] = 5.9;
  rKs[3] = 7.4; rKs[4] = 9.2; rKs[5] = 11.4;

  float rOm[6];
  rOm[0] = 4.2; rOm[1] = 4.8; rOm[2] = 5.5;
  rOm[3] = 6.3; rOm[4] = 7.1; rOm[5] = 7.9;

  float rW[6];
  rW[0] = 0.036; rW[1] = 0.030; rW[2] = 0.024;
  rW[3] = 0.018; rW[4] = 0.013; rW[5] = 0.009;

  for (int i = 0; i < 6; i++) {
    float ph = dot(p, rDirs[i]) * rKs[i] + t * rOm[i] + float(i) * 2.17;
    float s = sin(ph);
    float c = cos(ph);
    float amp = rW[i] * strength;
    g += rDirs[i] * (amp * rKs[i] * (c + 0.28 * s * c));
  }
  return g;
}

void main() {
  vec3 viewVec = uCameraPos - vWorldPos;
  float viewDist = length(viewVec);
  vec3 V = viewVec / max(viewDist, 0.0001);

  vec2 fieldUV = (vUndisplacedWorldPos.xz - uFieldCenter) / max(uFieldSize, vec2(1.0)) + 0.5;
  vec4 field = texture2D(uFieldMap, clamp(fieldUV, 0.002, 0.998));
  float wallProx = smoothstep(0.04, 0.42, field.r) * (1.0 - smoothstep(0.56, 0.98, field.r));
  float depthAtten = mix(1.0, mix(0.42, 1.0, smoothstep(0.04, 0.24, field.a)), uDepthWaveDamping);
  float localAmp = uWaveAmp * depthAtten;

  WaveEval wv = evaluateWaveSpectrum(
    vUndisplacedWorldPos.xz,
    uTime,
    localAmp,
    uChoppiness,
    uWaveSpeed,
    uTurbulence,
    uFlowVel,
    wallProx
  );

  float distAtten = exp(-viewDist * 0.014);
  float rippleStrength = clamp(localAmp * 2.4 + 0.18 + wallProx * 0.28, 0.14, 1.15) * distAtten;
  vec2 liquidRipples = computeLiquidRippleNormals(vUndisplacedWorldPos.xz, uTime * uWaveSpeed, rippleStrength);
  vec2 totalSlope = wv.slope + liquidRipples;

  vec2 simUv = (vUndisplacedWorldPos.xz - uSimCenter) / uSimSpan + 0.5;
  if (simUv.x > 0.02 && simUv.x < 0.98 && simUv.y > 0.02 && simUv.y < 0.98) {
    float edgeFade = smoothstep(0.02, 0.14, simUv.x) * smoothstep(0.98, 0.86, simUv.x)
                   * smoothstep(0.02, 0.14, simUv.y) * smoothstep(0.98, 0.86, simUv.y);
    vec3 simSample = texture2D(tWaveSim, simUv).rgb;
    totalSlope += simSample.gb * 1.45 * edgeFade;
  }

  vec3 N = normalize(vec3(-totalSlope.x, 1.0, -totalSlope.y));
  bool fromBelow = !gl_FrontFacing || (uCameraPos.y < uWaterLevel - 0.02);

  vec2 screenUV = (vScreenClip.xy / vScreenClip.w) * 0.5 + 0.5;

  vec4 flatMirrorClip = uReflectionMatrix * vec4(vWorldPos.x, uWaterLevel, vWorldPos.z, 1.0);
  vec2 reflUV = (flatMirrorClip.xy / max(0.0001, flatMirrorClip.w)) * 0.5 + 0.5;

  if (fromBelow) {
    vec3 Ndown = -N;
    float cosTheta = clamp(dot(Ndown, V), 0.0, 1.0);
    float snellWindow = smoothstep(0.56, 0.76, cosTheta);

    vec2 refrUV = clamp(screenUV + N.xz * 0.068, vec2(0.002), vec2(0.998));
    vec3 aboveColor = texture2D(tRefraction, refrUV).rgb;
    vec3 tirColor = uDeepColor * 1.55 + uShallowColor * 0.48 * pow(1.0 - cosTheta, 2.2);
    vec3 col = mix(tirColor, aboveColor * vec3(0.84, 0.98, 1.02) * 1.18, snellWindow);

    float rim = smoothstep(0.50, 0.66, cosTheta) * (1.0 - smoothstep(0.66, 0.84, cosTheta));
    col += uShallowColor * 2.5 * rim;

    float fogFactor = 1.0 - exp(-uFogDensity * uFogDensity * viewDist * viewDist);
    col = mix(col, uFogColor, clamp(fogFactor, 0.0, 1.0));
    gl_FragColor = vec4(col, 0.96);
    return;
  }

  float waterLinearDepth = linearizeDepth(gl_FragCoord.z);
  float rawSceneDepth = texture2D(tDepth, clamp(screenUV, 0.001, 0.999)).r;
  float sceneLinearDepth = linearizeDepth(rawSceneDepth);
  float rayWaterDist = max(0.0, sceneLinearDepth - waterLinearDepth);

  float edgeFade = smoothstep(0.0, 0.055, screenUV.x) * smoothstep(1.0, 0.945, screenUV.x)
                 * smoothstep(0.0, 0.055, screenUV.y) * smoothstep(1.0, 0.945, screenUV.y);
  float shallowDamp = clamp(rayWaterDist * 1.55, 0.0, 1.0);
  float distortScale = (0.082 + uChoppiness * 0.028) / (1.0 + viewDist * 0.015);
  vec2 distort = N.xz * distortScale * shallowDamp * edgeFade;
  vec2 refrUV = clamp(screenUV + distort, vec2(0.002), vec2(0.998));

  float refrRawDepth = texture2D(tDepth, refrUV).r;
  float refrLinearDepth = linearizeDepth(refrRawDepth);
  if (refrLinearDepth < waterLinearDepth + 0.012) {
    refrUV = clamp(screenUV, vec2(0.002), vec2(0.998));
    refrLinearDepth = sceneLinearDepth;
  }

  float effectiveDist = max(0.0, refrLinearDepth - waterLinearDepth);
  float effVertDepth = effectiveDist * max(0.32, abs(V.y));

  vec2 dispOff = N.xz * 0.0028 * shallowDamp * edgeFade;
  vec3 underwaterScene = vec3(
    texture2D(tRefraction, clamp(refrUV + dispOff, 0.002, 0.998)).r,
    texture2D(tRefraction, refrUV).g,
    texture2D(tRefraction, clamp(refrUV - dispOff, 0.002, 0.998)).b
  );

  float abyssDrop = smoothstep(1.10, 4.6, effVertDepth);
  vec3 transmittance = exp(-effVertDepth * uAbsorption * mix(1.08, 1.98, abyssDrop));
  vec3 waterBodyColor = mix(uShallowColor, uDeepColor, smoothstep(0.32, 3.4, effVertDepth));

  float sssCrest = pow(clamp(wv.crest, 0.0, 1.0), 2.4) * clamp(1.0 - V.y, 0.15, 1.0) * (1.0 - abyssDrop * 0.65);
  waterBodyColor += mix(uDeepColor, uShallowColor, 0.40) * sssCrest * 0.26;

  float clarity = clamp(max(transmittance.g, transmittance.b) * 0.98, 0.0, 1.0);
  vec3 refractedColor = mix(waterBodyColor, underwaterScene * transmittance, clarity);

  float reflScale = (0.115 + uChoppiness * 0.055) / (1.0 + viewDist * 0.010);
  vec2 reflDistort = vec2(N.x * reflScale, N.z * reflScale * 1.38);
  vec2 sampleReflUV = clamp(reflUV + reflDistort, vec2(0.002), vec2(0.998));

  float slopeMag = length(N.xz);
  float blurSpread = slopeMag * 0.85 * (0.3 + viewDist * 0.012);
  vec2 offX = vec2(uReflTexelSize.x * blurSpread, 0.0);
  vec2 offY = vec2(0.0, uReflTexelSize.y * blurSpread * 1.25);
  vec3 reflCenter = texture2D(tReflection, sampleReflUV).rgb;
  vec3 reflFiltered = (
    reflCenter * 4.0 +
    texture2D(tReflection, clamp(sampleReflUV + offX, vec2(0.002), vec2(0.998))).rgb +
    texture2D(tReflection, clamp(sampleReflUV - offX, vec2(0.002), vec2(0.998))).rgb +
    texture2D(tReflection, clamp(sampleReflUV + offY, vec2(0.002), vec2(0.998))).rgb +
    texture2D(tReflection, clamp(sampleReflUV - offY, vec2(0.002), vec2(0.998))).rgb
  ) / 8.0;
  vec3 reflectionColor = mix(reflCenter, reflFiltered, clamp(slopeMag * 0.65, 0.0, 0.55)) * uReflectionTint;

  float reflPeak = max(reflectionColor.r, max(reflectionColor.g, reflectionColor.b));
  if (reflPeak > 3.2) {
    reflectionColor *= (3.2 + log(1.0 + reflPeak - 3.2) * 0.9) / reflPeak;
  }

  float NdotV = clamp(dot(N, V), 0.0, 1.0);
  const float F0 = 0.0204;
  float fresnel = F0 + (1.0 - F0) * pow(1.0 - NdotV, 5.0);
  fresnel = clamp(fresnel * 1.06, 0.0204, 0.985);

  vec3 surfaceColor = mix(refractedColor, reflectionColor, fresnel);

  if (uSpecularIntensity > 0.01) {
    vec3 Lsun = normalize(uSunDir);
    vec3 Hsun = normalize(Lsun + V);
    float NdotH = max(dot(N, Hsun), 0.0);
    float specTight = pow(NdotH, 340.0) * 1.35;
    float specBroad = pow(NdotH, 48.0) * 0.16;
    surfaceColor += uSunSpecColor * (specTight + specBroad) * uSpecularIntensity;
  }

  if (uFlashlightIntensity > 0.01) {
    vec3 toLight = uFlashlightPos - vWorldPos;
    float lDist = length(toLight);
    vec3 L = toLight / max(lDist, 0.001);
    float cone = dot(-L, normalize(uFlashlightDir));
    float spot = smoothstep(0.79, 0.96, cone);
    float atten = 1.0 / (1.0 + lDist * lDist * 0.044);
    vec3 Hfl = normalize(L + V);
    float flSpec = pow(max(dot(N, Hfl), 0.0), 180.0) * spot * atten;
    float flScatter = spot * atten * 0.075;
    surfaceColor += vec3(0.78, 0.93, 0.97) * flSpec * 0.78 * uFlashlightIntensity;
    surfaceColor += (uShallowColor * 1.3 + vec3(0.02, 0.05, 0.06)) * flScatter * uFlashlightIntensity;
  }

  float fogFactor = 1.0 - exp(-uFogDensity * uFogDensity * viewDist * viewDist);
  surfaceColor = mix(surfaceColor, uFogColor, clamp(fogFactor, 0.0, 1.0));

  float edgeAlpha = smoothstep(0.0, 0.024, rayWaterDist + 0.004);
  gl_FragColor = vec4(surfaceColor, max(edgeAlpha, 0.968));
}
`;function bg(n,e,t,i){const s=(O,U)=>({reflW:Math.max(640,Math.floor(O*.84)),reflH:Math.max(640,Math.floor(U*.84)),refrW:Math.max(640,Math.floor(O*.86)),refrH:Math.max(640,Math.floor(U*.86))}),r=s(n,e),a=new Mt(r.reflW,r.reflH,{minFilter:ut,magFilter:ut,format:Et,type:Nn,depthBuffer:!0}),o=new Xi(r.refrW,r.refrH);o.type=Jn,o.format=di;const l=new Mt(r.refrW,r.refrH,{minFilter:ut,magFilter:ut,format:Et,type:Nn,depthBuffer:!0,depthTexture:o}),c=new yg;let u=.24,h=.28,d=1,f=.65,m=0,v=0,g=0,p=!0,A=[0,0],M=[680,680],x=0,C=null;const E=new wi(new Uint8Array([255,180,255,128]),1,1,Et);E.needsUpdate=!0;const y=new Gt,T=new it,S=new qn(new N(0,1,0),-vt+.05),w={uTime:{value:0},uWaterLevel:{value:vt},uNear:{value:.08},uFar:{value:1200},uFogColor:{value:t.clone()},uFogDensity:{value:i},uCameraPos:{value:new N},uReflectionMatrix:{value:T},uReflTexelSize:{value:new de(1/r.reflW,1/r.reflH)},uSimCenter:{value:new de(0,0)},uSimSpan:{value:c.worldSpan},uFlashlightPos:{value:new N},uFlashlightDir:{value:new N(0,0,-1)},uFlashlightIntensity:{value:0},uAbsorption:{value:new N(.6,.13,.14)},uDeepColor:{value:new N(.02,.22,.24)},uShallowColor:{value:new N(.08,.54,.52)},uReflectionTint:{value:new N(.96,.98,1)},uWaveAmp:{value:u},uChoppiness:{value:h},uWaveSpeed:{value:d},uTurbulence:{value:f},uDepthWaveDamping:{value:m},uFlowVel:{value:new de(0,0)},uSunDir:{value:new N(.4,.85,-.3)},uSunSpecColor:{value:new N(1,.95,.82)},uSpecularIntensity:{value:1},tWaveSim:{value:c.texture},tReflection:{value:a.texture},tRefraction:{value:l.texture},tDepth:{value:o},uFieldMap:{value:E},uFieldCenter:{value:new de(0,0)},uFieldSize:{value:new de(400,400)}},_=new xt({vertexShader:Eg,fragmentShader:Tg,uniforms:w,transparent:!0,side:Ht,depthWrite:!0}),D=_g(296),I=new Oe(D,_);I.position.set(0,vt,0),I.scale.set(680,1,680),I.renderOrder=2,I.frustumCulled=!1;const F=new N,k=new N,z=new N,V=new N,G=new N,J=new N,q=new it,re=[],fe=(O,U)=>{if(m<.01||!C?.depthGrid||!C.gridRes)return 1;const W=C.gridRes,H=me.clamp((O-C.centerX)/C.sizeX+.5,0,.999),ie=me.clamp((U-C.centerZ)/C.sizeZ+.5,0,.999),oe=Math.floor(H*W),ue=Math.floor(ie*W),ne=C.depthGrid[ue*W+oe],j=me.smoothstep(ne,.04,.24),le=me.lerp(.42,1,j);return me.lerp(1,le,m)},Se=(O,U,W)=>{const H=O-v*W*.45,ie=U-g*W*.45,oe=W*d,ue=u*fe(O,U);let ne=0,j=v,le=g;for(let Me=0;Me<rc.length;Me++){const[ce,xe,ge,Ee,we]=rc[Me],P=we*ue,b=(H*ce+ie*xe)*ge+oe*Ee+Me*1.67,Q=Math.sin(b),te=Math.cos(b);ne+=P*(Q+h*.22*(Q*Q-.5));const he=P*Ee*d*.85*te;j-=ce*he,le-=xe*he}const B=Math.sin(H*1.48-oe*2.65)*Math.cos(ie*1.42+oe*2.48);return ne+=B*ue*.14*(.5+.5*f),{height:vt+ne,surgeVx:j,surgeVz:le}};return{mesh:I,material:_,applyStyle(O,U,W,H){C=U,w.uAbsorption.value.set(...O.absorption),w.uDeepColor.value.set(...O.deepColor),w.uShallowColor.value.set(...O.shallowColor),w.uReflectionTint.value.set(...O.reflectionTint),w.uWaveAmp.value=O.waveAmplitude,w.uChoppiness.value=O.choppiness,w.uWaveSpeed.value=O.waveSpeed,f=O.turbulence??.65,w.uTurbulence.value=f,m=O.depthWaveDamping??0,w.uDepthWaveDamping.value=m,v=O.flowVelocity?.[0]??0,g=O.flowVelocity?.[1]??0,w.uFlowVel.value.set(v,g),w.uSunDir.value.set(...O.sunDirection).normalize(),w.uSunSpecColor.value.set(...O.sunSpecularColor),w.uSpecularIntensity.value=O.specularIntensity??1,w.uFieldMap.value=U.texture,w.uFieldCenter.value.set(U.centerX,U.centerZ),w.uFieldSize.value.set(U.sizeX,U.sizeZ),u=O.waveAmplitude,h=O.choppiness,d=O.waveSpeed,A=[O.planeCenter[0],O.planeCenter[1]],M=[Math.max(240,O.planeSize[0]),Math.max(240,O.planeSize[1])],p=M[0]>=360||M[1]>=360,I.position.set(W,vt,H),I.scale.set(Math.max(M[0],560),1,Math.max(M[1],560)),c.reset(W,H),w.uSimCenter.value.set(c.centerX,c.centerZ)},sampleWaveHeight(O,U,W){return Se(O,U,W).height},sampleWavePhysics(O,U,W){return Se(O,U,W)},addRipple(O,U,W=.9,H=.44){c.addImpulse(O,U,W,H)},update(O,U,W,H,ie,oe,ue,ne,j,le,B){p?I.position.set(Math.round(W.position.x/.5)*.5,vt,Math.round(W.position.z/.5)*.5):I.position.set(me.clamp(W.position.x,A[0]-120,A[0]+120),vt,me.clamp(W.position.z,A[1]-120,A[1]+120)),c.recenter(oe.x,oe.z);const Me=Math.hypot(ue.x,ue.z);ne>.1&&Me>.18&&(x+=H*(2.6+Me*2.2),x>=.28&&(x=0,c.addImpulse(oe.x,oe.z,Math.min(1,.28+Me*.18),.44))),c.step(H),w.uTime.value=ie,w.uNear.value=W.near,w.uFar.value=W.far,w.uCameraPos.value.copy(W.position),w.uSimCenter.value.set(c.centerX,c.centerZ),w.uFlashlightPos.value.copy(j),w.uFlashlightDir.value.copy(le),w.uFlashlightIntensity.value=B,U.fog instanceof Dr&&(w.uFogColor.value.copy(U.fog.color),w.uFogDensity.value=U.fog.density);const ce=O.getRenderTarget(),xe=O.xr.enabled,ge=O.shadowMap.autoUpdate;re.length=0;for(const Ee of O.clippingPlanes)re.push(Ee);if(O.xr.enabled=!1,O.shadowMap.autoUpdate=!1,I.visible=!1,O.clippingPlanes=[],O.setRenderTarget(l),O.clear(),O.render(U,W),W.position.y>=vt-.3){W.updateMatrixWorld(),W.matrixWorld.extractBasis(F,k,z),y.fov=W.fov,y.aspect=W.aspect,y.near=W.near,y.far=W.far,y.updateProjectionMatrix(),y.position.set(W.position.x,2*vt-W.position.y,W.position.z),V.set(F.x,-F.y,F.z).normalize(),J.set(z.x,-z.y,z.z).normalize(),G.crossVectors(J,V).normalize(),q.makeBasis(V,G,J),y.quaternion.setFromRotationMatrix(q),y.updateMatrixWorld(!0),T.multiplyMatrices(y.projectionMatrix,y.matrixWorldInverse);const Ee=Math.max(.14,u*1.15);S.constant=-vt+Ee,O.clippingPlanes=[S],O.setRenderTarget(a),O.clear(),O.render(U,y)}I.visible=!0,O.clippingPlanes=re.slice(),O.shadowMap.autoUpdate=ge,O.xr.enabled=xe,O.setRenderTarget(ce)},resize(O,U){const W=s(O,U);a.setSize(W.reflW,W.reflH),l.setSize(W.refrW,W.refrH),w.uReflTexelSize.value.set(1/W.reflW,1/W.reflH)},dispose(){E.dispose(),c.dispose(),D.dispose(),_.dispose(),a.dispose(),l.dispose(),o.dispose()}}}const mt=.36,zi=1.72,hr=1.54,va=.38,Cg=1.56,Rg=16,xa=.32;function Dg(n,e){let t=(n-e)%(Math.PI*2);return t>Math.PI&&(t-=Math.PI*2),t<-Math.PI&&(t+=Math.PI*2),t}class Pg{camera;flashlight;flashlightTarget;position=new N;velocity=new N;colliders;cylinders;ladders;currents;zones;callbacks;domElement;keys=new Set;isLocked=!1;isPlaying=!1;isDragLooking=!1;yaw=0;pitch=-.04;smoothedYawVel=0;smoothedPitchVel=0;smoothedRoll=0;visualYOffset=0;bobPhase=0;stepAccum=0;stepParity=1;swimStrokeAccum=0;swimPulse=0;ladderRungAccum=0;ladderCyclePhase=0;ladderStepCount=0;ladderMountElapsed=0;ladderDismountCooldown=0;ladderCamOffsetX=0;ladderCamOffsetY=0;ladderCamRoll=0;ladderCamPitch=0;mantling=!1;mantleElapsed=0;mantleDuration=.48;mantleFromLadder=!1;mantleStart=new N;mantleEnd=new N;activeLadder=null;nearLadder=!1;grounded=!1;wasInWater=!1;wasUnderwater=!1;wetLensIntensity=0;motionState="dry";isUnderwater=!1;waterDepthAtFeet=0;flashlightOn=!1;flashlightBlend=0;forwardVec=new N;rightVec=new N;moveDir=new N;flashlightLagPos=new N;flashlightLagDir=new N(0,0,-1);desiredLookDir=new N;flTargetScratch=new N;boundKeyDown;boundKeyUp;boundMouseMove;boundMouseDown;boundMouseUp;boundPointerLockChange;constructor(e,t,i,s,r,a,o,l,c,u={}){this.camera=e,this.domElement=i,this.colliders=r,this.cylinders=a,this.ladders=o,this.currents=l,this.zones=c,this.callbacks=u,this.position.copy(s),this.position.y+=.04,this.camera.position.set(this.position.x,this.position.y+hr,this.position.z),this.camera.rotation.order="YXZ",this.flashlight=new $c(15136505,0,44,Math.PI*.25,.74,1.45),this.flashlight.visible=!0,this.flashlight.castShadow=!0,this.flashlight.shadow.mapSize.set(1024,1024),this.flashlight.shadow.bias=-45e-5,this.flashlight.shadow.normalBias=.03,this.flashlight.shadow.camera.near=.16,this.flashlight.shadow.camera.far=44,this.flashlightTarget=new dt,t.add(this.flashlight,this.flashlightTarget),this.flashlight.target=this.flashlightTarget,this.flashlightLagPos.copy(this.camera.position),this.boundKeyDown=this.handleKeyDown.bind(this),this.boundKeyUp=this.handleKeyUp.bind(this),this.boundMouseMove=this.handleMouseMove.bind(this),this.boundMouseDown=this.handleMouseDown.bind(this),this.boundMouseUp=this.handleMouseUp.bind(this),this.boundPointerLockChange=this.handlePointerLockChange.bind(this),window.addEventListener("keydown",this.boundKeyDown),window.addEventListener("keyup",this.boundKeyUp),window.addEventListener("mousemove",this.boundMouseMove),this.domElement.addEventListener("mousedown",this.boundMouseDown),window.addEventListener("mouseup",this.boundMouseUp),document.addEventListener("pointerlockchange",this.boundPointerLockChange)}loadLevel(e,t,i,s,r,a,o,l){this.colliders=e,this.cylinders=t,this.ladders=i,this.currents=s,this.zones=r,this.position.copy(a),this.position.y+=.04,this.velocity.set(0,0,0),this.yaw=o,this.pitch=-.04,this.mantling=!1,this.activeLadder=null,this.nearLadder=!1,this.ladderMountElapsed=0,this.ladderDismountCooldown=0,this.ladderCamOffsetX=0,this.ladderCamOffsetY=0,this.ladderCamRoll=0,this.ladderCamPitch=0,this.visualYOffset=0,this.grounded=!1,this.wasInWater=!1,this.wasUnderwater=!1,this.wetLensIntensity=0,this.stepAccum=0,this.stepParity=1,this.swimStrokeAccum=0,this.flashlightOn=l,this.flashlightBlend=l?1:0,this.camera.position.set(a.x,a.y+hr,a.z),this.flashlightLagPos.copy(this.camera.position)}setPlayingState(e){this.isPlaying!==e&&(this.isPlaying=e,e||(this.keys.clear(),this.isDragLooking=!1),this.callbacks.onPointerLockChange?.(this.isPlaying))}enterAndLock(){if(this.setPlayingState(!0),document.pointerLockElement!==this.domElement&&typeof this.domElement.requestPointerLock=="function")try{const e=this.domElement.requestPointerLock();e&&typeof e.catch=="function"&&e.catch(()=>{})}catch{}}get playing(){return this.isPlaying}get locked(){return this.isLocked}getFlashlightNormalizedIntensity(){return this.flashlightBlend}handlePointerLockChange(){const e=document.pointerLockElement===this.domElement,t=this.isLocked;this.isLocked=e,e?this.setPlayingState(!0):t&&this.setPlayingState(!1)}handleMouseDown(e){e.button===0&&this.isPlaying&&!this.isLocked&&(this.isDragLooking=!0)}handleMouseUp(){this.isDragLooking=!1}handleKeyDown(e){const t=e.code;(t==="Space"||t==="ArrowUp"||t==="ArrowDown"||t==="ArrowLeft"||t==="ArrowRight")&&this.isPlaying&&e.preventDefault(),this.keys.add(t),t==="KeyF"&&this.isPlaying&&!e.repeat&&(this.flashlightOn=!this.flashlightOn,this.callbacks.onFlashlightToggle?.(this.flashlightOn))}handleKeyUp(e){this.keys.delete(e.code)}handleMouseMove(e){if(!this.isLocked&&!this.isDragLooking)return;const t=.00205,i=Math.max(-120,Math.min(120,e.movementX)),s=Math.max(-120,Math.min(120,e.movementY));this.yaw-=i*t,this.pitch=Math.max(-1.46,Math.min(1.46,this.pitch-s*t)),this.smoothedYawVel=me.clamp(this.smoothedYawVel+i*.00125,-.085,.085),this.smoothedPitchVel=me.clamp(this.smoothedPitchVel+s*55e-5,-.04,.04)}overlapsBox(e,t,i){const s=e-mt,r=e+mt,a=t+.02,o=t+zi,l=i-mt,c=i+mt;for(let u=0;u<this.colliders.length;u++){const h=this.colliders[u];if(r>h.minX&&s<h.maxX&&o>h.minY&&a<h.maxY&&c>h.minZ&&l<h.maxZ)return h}return null}resolveCylinders(){const e=this.position.y+.04,t=this.position.y+zi;for(let i=0;i<this.cylinders.length;i++){const s=this.cylinders[i];if(t<=s.minY||e>=s.maxY)continue;const r=this.position.x-s.cx,a=this.position.z-s.cz,o=Math.hypot(r,a);if(s.inverted){const l=s.radius,c=s.radius+(s.thickness??1),u=Math.atan2(a,r);if(s.openings){let d=!1;for(let f=0;f<s.openings.length;f++){const m=s.openings[f];if(e>=m.minY-.15&&t<=m.maxY+.15&&Math.abs(Dg(u,m.angle))<=m.halfArc){d=!0;break}}if(d)continue}const h=(l+c)*.5;if(o<h&&o>l-mt){const d=o>1e-5?r/o:1,f=o>1e-5?a/o:0;this.position.x=s.cx+d*(l-mt),this.position.z=s.cz+f*(l-mt)}else if(o>=h&&o<c+mt){const d=o>1e-5?r/o:1,f=o>1e-5?a/o:0;this.position.x=s.cx+d*(c+mt),this.position.z=s.cz+f*(c+mt)}}else{const l=s.radius+mt;if(o<l){const c=o>1e-5?r/o:1,u=o>1e-5?a/o:0;this.position.x=s.cx+c*l,this.position.z=s.cz+u*l}}}}findNearbyLadder(){let e=null,t=1.18;for(let i=0;i<this.ladders.length;i++){const s=this.ladders[i];if(this.position.y+zi<s.minY-.45||this.position.y>s.maxY+.42)continue;const r=Math.hypot(this.position.x-s.x,this.position.z-s.z);r<t&&(t=r,e=s)}return e}tryStartMantle(){const e=mt+.46,t=this.position.x+this.forwardVec.x*e,i=this.position.z+this.forwardVec.z*e;let s=null,r=-1/0;for(let u=0;u<this.colliders.length;u++){const h=this.colliders[u];if(h.climbable===!1||t<h.minX-.16||t>h.maxX+.16||i<h.minZ-.16||i>h.maxZ+.16)continue;const d=h.maxY-this.position.y;d>=va*.82&&d<=Cg&&h.maxY>r&&(r=h.maxY,s=h)}if(!s)return!1;const a=me.clamp(this.position.x+this.forwardVec.x*.68,s.minX+mt*.55,s.maxX-mt*.55),o=me.clamp(this.position.z+this.forwardVec.z*.68,s.minZ+mt*.55,s.maxZ-mt*.55),l=s.maxY+.01;if(this.overlapsBox(a,l,o))return!1;const c=this.waterDepthAtFeet>.25;return this.mantling=!0,this.mantleFromLadder=!1,this.mantleDuration=c?.52:.44,this.mantleElapsed=0,this.mantleStart.copy(this.position),this.mantleEnd.set(a,l,o),this.velocity.set(0,0,0),this.callbacks.onMantle?.(c),!0}moveHorizontal(e,t){const i=this.position.y;if(Math.abs(e)>1e-6){const r=this.position.x+e,a=this.overlapsBox(r,this.position.y,this.position.z);if(!a)this.position.x=r;else{const o=a.maxY-this.position.y;o>0&&o<=va&&!this.overlapsBox(r,a.maxY+.005,this.position.z)?(this.position.x=r,this.position.y=a.maxY):this.velocity.x=0}}if(Math.abs(t)>1e-6){const r=this.position.z+t,a=this.overlapsBox(this.position.x,this.position.y,r);if(!a)this.position.z=r;else{const o=a.maxY-this.position.y;o>0&&o<=va&&!this.overlapsBox(this.position.x,a.maxY+.005,r)?(this.position.z=r,this.position.y=a.maxY):this.velocity.z=0}}this.resolveCylinders();const s=this.position.y-i;s>.005&&(this.visualYOffset-=s)}moveVertical(e){const t=this.position.y+e,i=this.position.x-mt,s=this.position.x+mt,r=this.position.z-mt,a=this.position.z+mt;if(this.grounded=!1,e<=0){let o=-1/0;for(let l=0;l<this.colliders.length;l++){const c=this.colliders[l];s>c.minX&&i<c.maxX&&a>c.minZ&&r<c.maxZ&&c.maxY<=this.position.y+.09&&c.maxY>=t-.001&&c.maxY>o&&(o=c.maxY)}o>-1/0?(this.position.y=o,this.velocity.y=0,this.grounded=!0):this.position.y=t}else{let o=1/0;const l=this.position.y+zi,c=t+zi;for(let u=0;u<this.colliders.length;u++){const h=this.colliders[u];s>h.minX&&i<h.maxX&&a>h.minZ&&r<h.maxZ&&h.minY>=l-.08&&h.minY<=c+.001&&h.minY<o&&(o=h.minY)}o<1/0?(this.position.y=o-zi,this.velocity.y=0):this.position.y=t}}getFloorBeneath(){const e=this.position.x-mt*.85,t=this.position.x+mt*.85,i=this.position.z-mt*.85,s=this.position.z+mt*.85;let r=-48;for(let a=0;a<this.colliders.length;a++){const o=this.colliders[a];t>o.minX&&e<o.maxX&&s>o.minZ&&i<o.maxZ&&o.maxY<=this.position.y+.25&&o.maxY>r&&(r=o.maxY)}return r}getLocalCurrent(e,t){let i=0,s=0;for(let r=0;r<this.currents.length;r++){const a=this.currents[r];e>=a.minX&&e<=a.maxX&&t>=a.minZ&&t<=a.maxZ&&(i+=a.vx,s+=a.vz)}return{vx:i,vz:s}}update(e,t,i,s=.35){const r=Math.min(e,.05);this.ladderDismountCooldown>0&&(this.ladderDismountCooldown=Math.max(0,this.ladderDismountCooldown-r));const a=(this.keys.has("KeyW")||this.keys.has("ArrowUp")?1:0)-(this.keys.has("KeyS")||this.keys.has("ArrowDown")?1:0),o=(this.keys.has("KeyD")||this.keys.has("ArrowRight")?1:0)-(this.keys.has("KeyA")||this.keys.has("ArrowLeft")?1:0),l=this.keys.has("ShiftLeft")||this.keys.has("ShiftRight"),c=this.keys.has("Space"),u=this.keys.has("KeyC")||this.keys.has("ControlLeft")||this.keys.has("ControlRight");this.forwardVec.set(-Math.sin(this.yaw),0,-Math.cos(this.yaw)),this.rightVec.set(Math.cos(this.yaw),0,-Math.sin(this.yaw)),this.moveDir.set(0,0,0),this.isPlaying&&(this.moveDir.addScaledVector(this.forwardVec,a).addScaledVector(this.rightVec,o),this.moveDir.lengthSq()>.001&&this.moveDir.normalize());const h=i(this.position.x,this.position.z,t),d=h.height,f=this.getLocalCurrent(this.position.x,this.position.z),m=this.getFloorBeneath(),v=d-m;this.waterDepthAtFeet=Math.max(0,d-this.position.y);const g=this.position.y+hr;this.isUnderwater=g<d-.03,!this.wasUnderwater&&this.isUnderwater?(this.callbacks.onSubmerge?.(Math.abs(this.velocity.y)+1),this.callbacks.onRipple?.(this.position.x,this.position.z,.9,.55)):this.wasUnderwater&&!this.isUnderwater?(this.wetLensIntensity=1,this.callbacks.onEmerge?.(),this.callbacks.onRipple?.(this.position.x,this.position.z,1,.58)):!this.isUnderwater&&d>vt+.24&&this.position.y<d+.45&&(this.wetLensIntensity=Math.max(this.wetLensIntensity,.52)),this.wasUnderwater=this.isUnderwater,this.isUnderwater?this.wetLensIntensity=0:this.wetLensIntensity>0&&(this.wetLensIntensity=Math.max(0,this.wetLensIntensity-r*.22));const p=this.findNearbyLadder();if(this.nearLadder=p!==null,!this.activeLadder&&!this.mantling&&this.ladderDismountCooldown<=0&&p&&this.isPlaying){const H=this.forwardVec.x*-p.normalX+this.forwardVec.z*-p.normalZ,ie=a>0&&H>.2||c&&H>-.15,oe=(a<0||u)&&this.position.y>p.maxY-.85&&Math.hypot(this.position.x-p.x,this.position.z-p.z)<1.1;if(ie||oe){this.activeLadder=p,this.ladderMountElapsed=0,this.ladderRungAccum=0,this.velocity.set(0,0,0),this.grounded=!1;const ue=this.position.y<vt+1.8;this.callbacks.onLadderStep?.(ue,p.material??"chrome",!1)}}const A=this.waterDepthAtFeet>.88&&v>1.02,M=!this.activeLadder&&(A||this.isUnderwater),x=!this.activeLadder&&!M&&this.waterDepthAtFeet>.06,C=this.waterDepthAtFeet>.14;if(C&&!this.wasInWater&&this.velocity.y<-.55){const H=me.clamp(Math.abs(this.velocity.y)/6,.35,1);this.callbacks.onWaterSplash?.(H),this.callbacks.onRipple?.(this.position.x,this.position.z,.95+H*.55,.58),H>.5&&(this.wetLensIntensity=Math.max(this.wetLensIntensity,H*.6))}this.wasInWater=C;let E=0,y=0,T=0,S=0,w=0,_=0;if(this.activeLadder){this.motionState="climbing";const H=this.activeLadder;this.grounded=!1,this.ladderMountElapsed+=r;const ie=Math.min(1,this.ladderMountElapsed/.28),oe=me.lerp(7,11.5,ie),ue=1-Math.exp(-oe*r);this.position.x=me.lerp(this.position.x,H.x,ue),this.position.z=me.lerp(this.position.z,H.z,ue);const ne=(a>0||c?1:0)-(a<0||u?1:0),j=l?1.56:1.18,le=.78+.44*Math.pow(Math.sin(this.ladderCyclePhase),2),B=j*le*ne*me.smoothstep(ie,0,1);if(this.position.y+=B*r,this.velocity.set(0,B,0),Math.abs(ne)>0){const Me=Math.abs(B)*r;this.ladderRungAccum+=Me,this.ladderCyclePhase+=Me/xa*Math.PI;const ce=Math.sin(this.ladderCyclePhase*.5),xe=Math.sin(this.ladderCyclePhase);if(T=ce*.036,S=xe*.028,w=-ce*.022,_=Math.cos(this.ladderCyclePhase)*.016*ne,this.ladderRungAccum>=xa){this.ladderRungAccum-=xa,this.ladderStepCount++;const ge=this.position.y<vt+2.2,Ee=this.ladderStepCount%2===1;this.callbacks.onLadderStep?.(ge,H.material??"chrome",Ee),this.waterDepthAtFeet>.05&&this.waterDepthAtFeet<1.8&&this.callbacks.onRipple?.(this.position.x,this.position.z,.36,.38)}}else _=-.015*Math.sin(this.ladderMountElapsed*1.6);this.position.y>=H.maxY-.16&&ne>=0?(this.activeLadder=null,this.mantling=!0,this.mantleFromLadder=!0,this.mantleDuration=.56,this.mantleElapsed=0,this.mantleStart.copy(this.position),this.mantleEnd.set(H.topExitX,H.topExitY,H.topExitZ),this.callbacks.onMantle?.(!1)):(this.position.y<H.minY-.18&&ne<=0||Math.abs(o)>0&&ne===0&&this.ladderMountElapsed>.25)&&(this.activeLadder=null,this.ladderDismountCooldown=.38,this.velocity.set(H.normalX*1.25,.12,H.normalZ*1.25))}else if(this.mantling){this.motionState="mantling",this.mantleElapsed+=r;const H=Math.min(1,this.mantleElapsed/this.mantleDuration),ie=this.mantleFromLadder?me.clamp(H/.62,0,1):me.clamp(H/.68,0,1),oe=this.mantleFromLadder?me.clamp((H-.24)/.76,0,1):me.clamp((H-.18)/.82,0,1),ue=1-Math.pow(1-ie,3),ne=oe*oe*(3-2*oe);this.position.x=me.lerp(this.mantleStart.x,this.mantleEnd.x,ne),this.position.z=me.lerp(this.mantleStart.z,this.mantleEnd.z,ne),this.position.y=me.lerp(this.mantleStart.y,this.mantleEnd.y,ue),E=-Math.sin(H*Math.PI)*(this.mantleFromLadder?.11:.085),y=Math.sin(H*Math.PI*2)*.026,H>=1&&(this.mantling=!1,this.grounded=!0)}else if(M){if(this.motionState=this.isUnderwater?"underwater":"swimming",!(this.isPlaying&&c&&!this.isUnderwater&&this.tryStartMantle())){this.swimPulse*=Math.exp(-3.2*r);const ie=(l?3.85:2.55)*(.86+this.swimPulse*.34),oe=this.isUnderwater?Math.exp(-Math.max(0,d-g)*.45):1,ue=h.surgeVx*.55*oe+f.vx,ne=h.surgeVz*.55*oe+f.vz,j=this.moveDir.x*ie+ue,le=this.moveDir.z*ie+ne;let B=0;if(this.isPlaying)if(c)B=l?2.65:1.95;else if(u)B=l?-2.65:-1.95;else if(this.isUnderwater&&Math.abs(a)>0)B=Math.sin(this.pitch)*a*ie*.88-.08;else{const xe=d-1.24-this.position.y;B=me.clamp(xe*3.2,-1.75,1.95)}this.position.y>d-1.04&&B>0&&!this.grounded&&(B=c?2.35:Math.min(B,.35));const Me=1-Math.exp(-3.8*r);this.velocity.x=me.lerp(this.velocity.x,j,Me),this.velocity.z=me.lerp(this.velocity.z,le,Me),this.velocity.y=me.lerp(this.velocity.y,B,Me),this.moveHorizontal(this.velocity.x*r,this.velocity.z*r),this.moveVertical(this.velocity.y*r)}}else{this.motionState=x?"wading":"dry";const H=me.clamp(this.waterDepthAtFeet/.96,0,1),ie=x?me.lerp(.89,.48,H*H*.5+H*.5):1,oe=(l?5.6:3.55)*ie,ue=this.grounded?x?me.lerp(9.2,4.5,H):14.5:3.5,ne=x?H*.42:0,j=this.moveDir.x*oe+(h.surgeVx+f.vx)*ne,le=this.moveDir.z*oe+(h.surgeVz+f.vz)*ne,B=1-Math.exp(-ue*r);this.velocity.x=me.lerp(this.velocity.x,j,B),this.velocity.z=me.lerp(this.velocity.z,le,B),c&&this.isPlaying&&((this.grounded||this.velocity.y>-2.5)&&this.tryStartMantle()||this.grounded&&(this.velocity.y=x?me.lerp(5.25,4.05,H):5.8,this.grounded=!1,x&&(this.callbacks.onWaterSplash?.(.42),this.callbacks.onRipple?.(this.position.x,this.position.z,.78,.52)))),this.mantling||(this.velocity.y-=Rg*r,this.moveHorizontal(this.velocity.x*r,this.velocity.z*r),this.moveVertical(this.velocity.y*r))}const D=Math.hypot(this.velocity.x,this.velocity.z),I=this.velocity.length();if(this.motionState==="swimming"||this.motionState==="underwater"||this.isUnderwater)this.stepAccum=0,I>.32&&(this.swimStrokeAccum+=I*r,this.swimStrokeAccum>=1.92&&(this.swimStrokeAccum=0,this.swimPulse=1,this.callbacks.onSwimStroke?.(I,this.isUnderwater),this.isUnderwater||this.callbacks.onRipple?.(this.position.x,this.position.z,.72+Math.min(.42,I*.12),.52)));else if(this.motionState==="wading"&&!this.isUnderwater&&this.waterDepthAtFeet>.04&&this.waterDepthAtFeet<=.88)this.swimStrokeAccum=0,this.grounded&&D>.28&&(this.stepAccum+=D*r,this.stepAccum>=1.48&&(this.stepAccum=0,this.stepParity=-this.stepParity,this.callbacks.onWadeStep?.(D,this.waterDepthAtFeet,this.stepParity),this.callbacks.onRipple?.(this.position.x,this.position.z,.55+Math.min(.45,D*.13),.46)));else if(this.motionState==="dry"&&!this.isUnderwater&&this.waterDepthAtFeet<=.04&&(this.swimStrokeAccum=0,this.grounded&&D>.3)){const H=l?2.15:1.72;if(this.stepAccum+=D*r,this.stepAccum>=H){this.stepAccum=0,this.stepParity=-this.stepParity;const ie=this.position.y-d<.85;this.callbacks.onFootstep?.(D,ie,this.stepParity)}}const F=1-Math.exp(-9*r);this.ladderCamOffsetX=me.lerp(this.ladderCamOffsetX,T,F),this.ladderCamOffsetY=me.lerp(this.ladderCamOffsetY,S,F),this.ladderCamRoll=me.lerp(this.ladderCamRoll,w,F),this.ladderCamPitch=me.lerp(this.ladderCamPitch,_,F),this.visualYOffset*=Math.exp(-14.5*r);let k=this.ladderCamOffsetY,z=this.ladderCamOffsetX,V=this.ladderCamRoll;if(this.motionState==="swimming"||this.motionState==="underwater")k=Math.sin(t*1.75)*.044,z=Math.cos(t*1.05)*.028,V=Math.sin(t*1.25)*.018+h.surgeVx*.012;else if(this.grounded&&(this.motionState==="dry"||this.motionState==="wading")&&D>.2){const H=this.motionState==="wading"?6.4:l?11.2:8.2;this.bobPhase+=r*H*Math.min(1.15,D/3.3);const ie=Math.min(1,D/3.2)*(this.motionState==="wading"?.042:l?.046:.03);k=Math.sin(this.bobPhase*2)*ie,z=Math.cos(this.bobPhase)*ie*.65,V=Math.cos(this.bobPhase)*(this.motionState==="wading"?.014:.008)}else this.motionState!=="climbing"&&(k+=Math.sin(t*1.25)*.006);this.smoothedYawVel*=Math.exp(-9.2*r),this.smoothedPitchVel*=Math.exp(-10*r);const G=-o*.018-this.smoothedYawVel*.68+V+y;this.smoothedRoll=me.lerp(this.smoothedRoll,G,1-Math.exp(-10.5*r)),this.camera.position.set(this.position.x+this.rightVec.x*z,this.position.y+hr+this.visualYOffset+k,this.position.z+this.rightVec.z*z),this.camera.rotation.set(this.pitch+E+this.ladderCamPitch-this.smoothedPitchVel*.3,this.yaw,this.smoothedRoll,"YXZ");const J=this.flashlightOn?1:0;this.flashlightBlend+=(J-this.flashlightBlend)*(1-Math.exp(-24*r)),this.camera.getWorldDirection(this.desiredLookDir);const q=1-Math.exp(-13.5*r);this.flTargetScratch.set(this.camera.position.x+this.rightVec.x*.16,this.camera.position.y-.14,this.camera.position.z+this.rightVec.z*.16),this.flashlightLagPos.lerp(this.flTargetScratch,q),this.flashlightLagDir.lerp(this.desiredLookDir,q).normalize(),this.flashlight.position.copy(this.flashlightLagPos),this.flashlightTarget.position.copy(this.flashlightLagPos).addScaledVector(this.flashlightLagDir,8);const re=this.isUnderwater?12.5:18;this.flashlight.intensity=this.flashlightBlend*re,this.flashlight.color.setHex(this.isUnderwater?9628405:15398906);const fe=Math.max(0,Math.sin(this.pitch))*.38,Se=this.isUnderwater?-.2:0,O=this.flashlightBlend*.06,U=me.clamp(s+fe+Se+O,.08,1.25);let W=this.zones[0]?.label??"POOLROOMS";for(const H of this.zones)if((H.minY===void 0||this.position.y>=H.minY)&&(H.maxY===void 0||this.position.y<=H.maxY)&&this.position.x>=H.minX&&this.position.x<=H.maxX&&this.position.z>=H.minZ&&this.position.z<=H.maxZ){W=H.label;break}return{position:{x:this.position.x,y:this.position.y,z:this.position.z},velocity:{x:this.velocity.x,y:this.velocity.y,z:this.velocity.z},horizontalSpeed:D,motionState:this.motionState,isUnderwater:this.isUnderwater,nearLadder:this.nearLadder&&!this.activeLadder,waterDepthAtFeet:this.waterDepthAtFeet,flashlightOn:this.flashlightOn,zoneLabel:W,wetLensIntensity:this.wetLensIntensity,estimatedLuminance:U}}getFlashlightWorldDirection(e){return e.copy(this.flashlightLagDir)}dispose(){window.removeEventListener("keydown",this.boundKeyDown),window.removeEventListener("keyup",this.boundKeyUp),window.removeEventListener("mousemove",this.boundMouseMove),this.domElement.removeEventListener("mousedown",this.boundMouseDown),window.removeEventListener("mouseup",this.boundMouseUp),document.removeEventListener("pointerlockchange",this.boundPointerLockChange)}}const pn=120;function Ig(n,e){let t=(n-e)%(Math.PI*2);return t>Math.PI&&(t-=Math.PI*2),t<-Math.PI&&(t+=Math.PI*2),Math.abs(t)}function Lg(n,e,t,i,s,r,a,o){let l=0,c=o;if(Math.abs(i)<1e-6){if(n<a.minX||n>a.maxX)return-1}else{const u=1/i;let h=(a.minX-n)*u,d=(a.maxX-n)*u;if(h>d){const f=h;h=d,d=f}if(l=Math.max(l,h),c=Math.min(c,d),l>c)return-1}if(Math.abs(s)<1e-6){if(e<a.minY||e>a.maxY)return-1}else{const u=1/s;let h=(a.minY-e)*u,d=(a.maxY-e)*u;if(h>d){const f=h;h=d,d=f}if(l=Math.max(l,h),c=Math.min(c,d),l>c)return-1}if(Math.abs(r)<1e-6){if(t<a.minZ||t>a.maxZ)return-1}else{const u=1/r;let h=(a.minZ-t)*u,d=(a.maxZ-t)*u;if(h>d){const f=h;h=d,d=f}if(l=Math.max(l,h),c=Math.min(c,d),l>c)return-1}return l>.04?l:-1}function Bg(n,e,t,i,s,r,a,o){const l=n-a.cx,c=t-a.cz,u=i*i+r*r;if(u<1e-7)return-1;const h=2*(l*i+c*r),d=a.radius,f=l*l+c*c-d*d,m=h*h-4*u*f;if(m<0)return-1;const v=Math.sqrt(m),g=.5/u,p=(-h-v)*g,A=(-h+v)*g,M=p>.05?[p,A]:[A];for(let x=0;x<M.length;x++){const C=M[x];if(C<=.05||C>=o)continue;const E=e+s*C;if(!(E<a.minY||E>a.maxY)){if(a.inverted&&a.openings&&a.openings.length>0){const y=n+i*C,T=t+r*C,S=Math.atan2(T-a.cz,y-a.cx);let w=!1;for(let _=0;_<a.openings.length;_++){const D=a.openings[_];if(E>=D.minY&&E<=D.maxY&&Ig(S,D.angle)<=D.halfArc){w=!0;break}}if(w)continue}return C}}return-1}function sn(n,e,t,i,s,r,a,o,l){let c=a;for(let u=0;u<o.length;u++){const h=Lg(n,e,t,i,s,r,o[u],c);h>0&&h<c&&(c=h)}for(let u=0;u<l.length;u++){const h=Bg(n,e,t,i,s,r,l[u],c);h>0&&h<c&&(c=h)}return c}function Ug(n,e,t,i,s,r,a,o){const l=i-n,c=s-e,u=r-t,h=Math.hypot(l,c,u);if(h<.65)return 0;const d=1/h,f=l*d,m=c*d,v=u*d,g=Math.max(.2,h-.35);let p=0;sn(n,e,t,f,m,v,g,a,o)<g-.15&&(p+=1);const M=-v,x=f,C=Math.hypot(M,x);if(C>.01){const E=M/C*.42,y=x/C*.42;sn(n+E,e,t+y,f,m,v,g,a,o)<g-.15&&(p+=.5),sn(n-E,e,t-y,f,m,v,g,a,o)<g-.15&&(p+=.5)}else p*=2;return me.clamp(p*.5,0,1)}const us=[[0,1,0],[.55,.835,0],[-.55,.835,0],[0,.835,.55],[0,.835,-.55]];function Fg(n,e,t,i,s,r){const a=n.x,o=n.y,l=n.z,c=e.x,u=e.z,h=Math.hypot(c,u)||1,d=c/h,f=u/h,m=t.x,v=t.z,g=Math.hypot(m,v)||1,p=m/g,A=v/g,M=sn(a,o,l,d,0,f,pn,i,s),x=sn(a,o,l,-d,0,-f,pn,i,s),C=sn(a,o,l,p,0,A,pn,i,s),E=sn(a,o,l,-p,0,-A,pn,i,s),y=sn(a,o,l,.7071,0,.7071,pn,i,s),T=sn(a,o,l,-.7071,0,.7071,pn,i,s),S=sn(a,o,l,.7071,0,-.7071,pn,i,s),w=sn(a,o,l,-.7071,0,-.7071,pn,i,s),_=x+M,D=C+E,I=(x+M+C+E+y+T+S+w)/8;let F=0,k=0;for(let Se=0;Se<us.length;Se++){const[O,U,W]=us[Se],H=sn(a,o,l,O,U,W,pn,i,s);k+=H,H>=pn-2&&F++}const z=k/us.length,V=r?F/us.length:F/us.length*.25;let G=0;const J=[x,M,C,E,y,T,S,w];for(let Se=0;Se<J.length;Se++)J[Se]<48&&G++;const q=me.clamp(G/8*(1-V*.75),0,1);let re=0;if(_<3.4&&z<5.5){const Se=Math.min(x,M),O=Math.min(C,E)<12;Se<1.35&&O&&(re=me.clamp((3.4-_)/1.6,0,1))}for(let Se=0;Se<s.length;Se++){const O=s[Se];if(O.inverted&&O.radius>30&&O.radius<55){const U=Math.hypot(a-O.cx,l-O.cz);if(U>O.radius+.75&&o>10&&o<110){const W=U-O.radius,H=me.smoothstep(W,.75,2.1);re=Math.max(re,H)}}}return{widthMeters:_,lengthMeters:D,leftDist:x,rightDist:M,ceilingDist:z,openSkyRatio:V,enclosureRatio:q,inDarkThreshold:re,averageRadius:I}}function Ng(n){switch(n){case 0:return[{id:"s1-lap-n",kind:"water-lap",x:-11.5,y:.1,z:-12,gain:.44,refDistance:4.5,maxDistance:42,rolloffFactor:1.25,reverbSend:.58,orbitRadius:3.5,orbitSpeed:.14,orbitPhase:0},{id:"s1-lap-s",kind:"water-lap",x:11.5,y:.1,z:-28,gain:.44,refDistance:4.5,maxDistance:42,rolloffFactor:1.25,reverbSend:.58,orbitRadius:3.5,orbitSpeed:-.12,orbitPhase:1.9},{id:"s1-lap-basin-w",kind:"water-lap",x:-7.5,y:.1,z:-60,gain:.48,refDistance:5,maxDistance:48,rolloffFactor:1.2,reverbSend:.65,orbitRadius:2.5,orbitSpeed:.16,orbitPhase:3.1},{id:"s1-lap-basin-e",kind:"water-lap",x:7.5,y:.1,z:-78,gain:.48,refDistance:5,maxDistance:48,rolloffFactor:1.2,reverbSend:.65,orbitRadius:2.5,orbitSpeed:-.15,orbitPhase:4.8},{id:"s1-glass-w",kind:"skylight-hum",x:-16.5,y:4.2,z:-14,gain:.2,refDistance:3.5,maxDistance:30,rolloffFactor:1.4,reverbSend:.35,pitchScale:1},{id:"s1-glass-e",kind:"skylight-hum",x:16.5,y:4.2,z:-26,gain:.2,refDistance:3.5,maxDistance:30,rolloffFactor:1.4,reverbSend:.35,pitchScale:1.04},{id:"s1-sky-mid",kind:"skylight-hum",x:0,y:9.4,z:-68,gain:.22,refDistance:5,maxDistance:38,rolloffFactor:1.25,reverbSend:.48,pitchScale:.96},{id:"s1-atrium-air",kind:"cathedral-stillness",x:0,y:5.5,z:-95,gain:.24,refDistance:6,maxDistance:36,rolloffFactor:1.2,reverbSend:.65,pitchScale:1.12},{id:"s1-corridor-hum",kind:"skylight-hum",x:0,y:3.4,z:-116,gain:.2,refDistance:3,maxDistance:24,rolloffFactor:1.5,reverbSend:.42,pitchScale:.92}];case 1:return[{id:"s2-shelf-lap",kind:"water-lap",x:0,y:.1,z:-36,gain:.48,refDistance:5.5,maxDistance:48,rolloffFactor:1.15,reverbSend:.65},{id:"s2-surge-w",kind:"wave-surge",x:-54,y:.4,z:-78,gain:.68,refDistance:12,maxDistance:140,rolloffFactor:1,reverbSend:.85,orbitRadius:10,orbitSpeed:.11,orbitPhase:0},{id:"s2-surge-e",kind:"wave-surge",x:54,y:.4,z:-96,gain:.68,refDistance:12,maxDistance:140,rolloffFactor:1,reverbSend:.85,orbitRadius:10,orbitSpeed:-.1,orbitPhase:2.1},{id:"s2-surge-n",kind:"wave-surge",x:0,y:.4,z:-168,gain:.66,refDistance:14,maxDistance:150,rolloffFactor:1,reverbSend:.88,orbitRadius:12,orbitSpeed:.09,orbitPhase:4.2},{id:"s2-surge-mid",kind:"wave-surge",x:0,y:.3,z:-102,gain:.64,refDistance:11,maxDistance:130,rolloffFactor:1.05,reverbSend:.82,orbitRadius:16,orbitSpeed:.13,orbitPhase:1.1},{id:"s2-abyss-deep",kind:"abyss-resonance",x:0,y:-16,z:-102,gain:.62,refDistance:16,maxDistance:145,rolloffFactor:.9,reverbSend:.72,pitchScale:.95},{id:"s2-draft-w",kind:"wind-draft",x:-58,y:20,z:-102,gain:.36,refDistance:10,maxDistance:85,rolloffFactor:1.1,reverbSend:.68,pitchScale:.92},{id:"s2-draft-e",kind:"wind-draft",x:58,y:20,z:-102,gain:.36,refDistance:10,maxDistance:85,rolloffFactor:1.1,reverbSend:.68,pitchScale:1.06},{id:"s2-draft-high",kind:"wind-draft",x:0,y:40,z:-172,gain:.44,refDistance:14,maxDistance:100,rolloffFactor:1.05,reverbSend:.76,pitchScale:1.12}];case 2:return[{id:"s3-surge-n",kind:"wave-surge",x:0,y:.4,z:-40,gain:.7,refDistance:12,maxDistance:175,rolloffFactor:.95,reverbSend:.92,orbitRadius:8,orbitSpeed:.12,orbitPhase:0},{id:"s3-surge-s",kind:"wave-surge",x:0,y:.4,z:38,gain:.68,refDistance:12,maxDistance:175,rolloffFactor:.95,reverbSend:.92,orbitRadius:8,orbitSpeed:-.11,orbitPhase:2.4},{id:"s3-surge-e",kind:"wave-surge",x:40,y:.4,z:0,gain:.68,refDistance:12,maxDistance:175,rolloffFactor:.95,reverbSend:.92,orbitRadius:7,orbitSpeed:.1,orbitPhase:1.2},{id:"s3-surge-w",kind:"wave-surge",x:-40,y:.4,z:0,gain:.68,refDistance:12,maxDistance:175,rolloffFactor:.95,reverbSend:.92,orbitRadius:7,orbitSpeed:-.13,orbitPhase:4.1},{id:"s3-abyss-pit",kind:"abyss-resonance",x:0,y:-18,z:0,gain:.66,refDistance:18,maxDistance:180,rolloffFactor:.85,reverbSend:.78,pitchScale:.88},{id:"s3-updraft-mid",kind:"wind-draft",x:0,y:54,z:0,gain:.4,refDistance:18,maxDistance:120,rolloffFactor:1,reverbSend:.82,orbitRadius:16,orbitSpeed:.08,orbitPhase:.5,pitchScale:.9},{id:"s3-bridge-wind-w",kind:"wind-draft",x:-18,y:97.5,z:0,gain:.58,refDistance:10,maxDistance:75,rolloffFactor:1.1,reverbSend:.72,pitchScale:1.18},{id:"s3-bridge-wind-e",kind:"wind-draft",x:18,y:97.5,z:0,gain:.58,refDistance:10,maxDistance:75,rolloffFactor:1.1,reverbSend:.72,pitchScale:1.08},{id:"s3-apex-wind",kind:"zenith-air",x:0,y:157,z:0,gain:.52,refDistance:12,maxDistance:85,rolloffFactor:1.05,reverbSend:.78,pitchScale:1.15},{id:"s3-cube-void-a",kind:"cube-void-hum",x:96,y:46,z:-6,gain:.54,refDistance:12,maxDistance:72,rolloffFactor:1.15,reverbSend:.72,pitchScale:1},{id:"s3-cube-void-b",kind:"cube-void-hum",x:118,y:52,z:8,gain:.5,refDistance:14,maxDistance:78,rolloffFactor:1.15,reverbSend:.76,pitchScale:1.19}];case 3:return[{id:"s4-wind-alpha",kind:"wind-draft",x:24,y:30,z:-18,gain:.62,refDistance:14,maxDistance:145,rolloffFactor:.95,reverbSend:.3,orbitRadius:18,orbitSpeed:.09,orbitPhase:0,pitchScale:1.04},{id:"s4-wind-bridge1",kind:"wind-draft",x:-16,y:29,z:-48,gain:.64,refDistance:12,maxDistance:125,rolloffFactor:1,reverbSend:.28,orbitRadius:14,orbitSpeed:-.11,orbitPhase:1.6,pitchScale:.94},{id:"s4-wind-bridge2",kind:"wind-draft",x:-58,y:45,z:-116,gain:.72,refDistance:16,maxDistance:160,rolloffFactor:.92,reverbSend:.26,orbitRadius:22,orbitSpeed:.08,orbitPhase:3.1,pitchScale:1.16},{id:"s4-wind-gamma",kind:"wind-draft",x:-112,y:46,z:-172,gain:.7,refDistance:16,maxDistance:165,rolloffFactor:.95,reverbSend:.28,pitchScale:1.1},{id:"s4-ocean-1",kind:"ocean-swell",x:0,y:.5,z:-45,gain:.76,refDistance:18,maxDistance:190,rolloffFactor:.9,reverbSend:.34,orbitRadius:24,orbitSpeed:.07,orbitPhase:.4},{id:"s4-ocean-2",kind:"ocean-swell",x:-52,y:.5,z:-130,gain:.78,refDistance:18,maxDistance:195,rolloffFactor:.9,reverbSend:.34,orbitRadius:26,orbitSpeed:-.06,orbitPhase:2.2},{id:"s4-ocean-3",kind:"ocean-swell",x:-84,y:.5,z:-215,gain:.8,refDistance:16,maxDistance:170,rolloffFactor:.95,reverbSend:.38,orbitRadius:14,orbitSpeed:.1,orbitPhase:4},{id:"s4-delta-shaft",kind:"abyss-resonance",x:-84,y:-6,z:-242,gain:.58,refDistance:10,maxDistance:72,rolloffFactor:1.1,reverbSend:.78,pitchScale:1.06}];case 4:default:return[{id:"s5-colonnade-1",kind:"cathedral-stillness",x:0,y:24,z:-24,gain:.48,refDistance:18,maxDistance:140,rolloffFactor:.95,reverbSend:.92,pitchScale:.96},{id:"s5-colonnade-2",kind:"cathedral-stillness",x:0,y:24,z:-84,gain:.48,refDistance:18,maxDistance:140,rolloffFactor:.95,reverbSend:.92,pitchScale:1.04},{id:"s5-lap-col-w",kind:"water-lap",x:-24,y:.2,z:-48,gain:.44,refDistance:10,maxDistance:85,rolloffFactor:1.15,reverbSend:.82,orbitRadius:8,orbitSpeed:.09,orbitPhase:.5},{id:"s5-lap-col-e",kind:"water-lap",x:24,y:.2,z:-72,gain:.44,refDistance:10,maxDistance:85,rolloffFactor:1.15,reverbSend:.82,orbitRadius:8,orbitSpeed:-.08,orbitPhase:2.6},{id:"s5-crypt-deep",kind:"abyss-resonance",x:0,y:-14,z:-56,gain:.56,refDistance:14,maxDistance:105,rolloffFactor:.95,reverbSend:.8,pitchScale:.9},{id:"s5-casc-ne",kind:"waterfall-curtain",x:28,y:6.5,z:-152,gain:.56,refDistance:9,maxDistance:82,rolloffFactor:1.12,reverbSend:.88,pitchScale:1},{id:"s5-casc-e",kind:"waterfall-curtain",x:35,y:6.5,z:-180,gain:.58,refDistance:9,maxDistance:82,rolloffFactor:1.12,reverbSend:.88,pitchScale:1.06},{id:"s5-casc-se",kind:"waterfall-curtain",x:28,y:6.5,z:-208,gain:.56,refDistance:9,maxDistance:82,rolloffFactor:1.12,reverbSend:.88,pitchScale:.95},{id:"s5-casc-nw",kind:"waterfall-curtain",x:-28,y:6.5,z:-152,gain:.56,refDistance:9,maxDistance:82,rolloffFactor:1.12,reverbSend:.88,pitchScale:1.03},{id:"s5-casc-w",kind:"waterfall-curtain",x:-35,y:6.5,z:-180,gain:.58,refDistance:9,maxDistance:82,rolloffFactor:1.12,reverbSend:.88,pitchScale:.98},{id:"s5-casc-sw",kind:"waterfall-curtain",x:-28,y:6.5,z:-208,gain:.56,refDistance:9,maxDistance:82,rolloffFactor:1.12,reverbSend:.88,pitchScale:1.08},{id:"s5-rotunda-pit",kind:"abyss-resonance",x:0,y:-16,z:-180,gain:.52,refDistance:16,maxDistance:95,rolloffFactor:1,reverbSend:.84,pitchScale:.84},{id:"s5-zenith-air",kind:"zenith-air",x:0,y:42,z:-318,gain:.52,refDistance:14,maxDistance:95,rolloffFactor:1,reverbSend:.85,pitchScale:1}]}}class Og{ctx=null;masterGain=null;underwaterFilter=null;dryBus=null;reverbInputBus=null;reverbColorFilter=null;reverbMasterGain=null;underwaterDirectBus=null;noiseBuffer=null;tightGain=null;mediumGain=null;colossalGain=null;openAirGain=null;erLeftDelay=null;erRightDelay=null;erCeilDelay=null;erGain=null;underwaterPressureGain=null;underwaterStructureGain=null;roomToneGain=null;liveEmitters=[];activeStageIndex=0;currentProfile="stage01-glass-halls";initialized=!1;currentUnderwater=0;currentWaterDepth=0;smoothedDarkThreshold=0;probeAccum=0;occlusionAccum=0;underwaterBubbleTimer=1.4;waveSlapTimer=2.4;listenerPos=new N;listenerForward=new N(0,0,-1);listenerUp=new N(0,1,0);listenerRight=new N(1,0,0);currentProbe={widthMeters:16,lengthMeters:28,leftDist:8,rightDist:8,ceilingDist:9,openSkyRatio:0,enclosureRatio:.9,inDarkThreshold:0,averageRadius:12};init(){if(this.initialized){this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume();return}const e=window.AudioContext||window.webkitAudioContext;if(!e)return;const t=new e;this.ctx=t;const i=t.createDynamicsCompressor();i.threshold.value=-15,i.knee.value=18,i.ratio.value=3.8,i.attack.value=.004,i.release.value=.22;const s=t.createGain();s.gain.setValueAtTime(1e-4,t.currentTime),s.gain.exponentialRampToValueAtTime(.88,t.currentTime+1.1),this.masterGain=s;const r=t.createBiquadFilter();r.type="lowpass",r.frequency.value=18500,r.Q.value=.76;const a=t.createGain();a.gain.value=.92;const o=t.createGain();o.gain.value=1;const l=t.createBiquadFilter();l.type="lowpass",l.frequency.value=14500,l.Q.value=.65;const c=t.createGain();c.gain.value=.78;const u=t.createGain();u.gain.value=1;const h=t.createConvolver();h.buffer=this.createArchitecturalIR(t,.78,4.4,.52,0,.008);const d=t.createGain();d.gain.value=.12;const f=t.createConvolver();f.buffer=this.createArchitecturalIR(t,2.65,1.55,.44,.06,.018);const m=t.createGain();m.gain.value=.65;const v=t.createConvolver();v.buffer=this.createArchitecturalIR(t,6.85,.68,.36,.22,.052);const g=t.createGain();g.gain.value=.15;const p=t.createConvolver();p.buffer=this.createArchitecturalIR(t,1.45,2.35,.26,0,.082);const A=t.createGain();A.gain.value=.02,o.connect(l),l.connect(h),l.connect(f),l.connect(v),l.connect(p),h.connect(d),f.connect(m),v.connect(g),p.connect(A),d.connect(c),m.connect(c),g.connect(c),A.connect(c);const M=t.createGain();M.gain.value=.22;const x=t.createBiquadFilter();x.type="bandpass",x.frequency.value=1850,x.Q.value=.7;const C=t.createDelay(.35);C.delayTime.value=.028;const E=t.createStereoPanner();E.pan.value=-.82;const y=t.createDelay(.35);y.delayTime.value=.032;const T=t.createStereoPanner();T.pan.value=.82;const S=t.createDelay(.35);S.delayTime.value=.045,l.connect(x),x.connect(C),x.connect(y),x.connect(S),C.connect(E),y.connect(T),E.connect(M),T.connect(M),S.connect(M),M.connect(r),a.connect(r),c.connect(r),r.connect(i),u.connect(i),i.connect(s),s.connect(t.destination),this.underwaterFilter=r,this.dryBus=a,this.reverbInputBus=o,this.reverbColorFilter=l,this.reverbMasterGain=c,this.underwaterDirectBus=u,this.tightGain=d,this.mediumGain=m,this.colossalGain=g,this.openAirGain=A,this.erLeftDelay=C,this.erRightDelay=y,this.erCeilDelay=S,this.erGain=M,this.noiseBuffer=this.createWhiteNoiseBuffer(t,4.5),this.startCoreSubmergedAndRoomTone(t),this.initialized=!0,this.rebuildStageEmitters(this.activeStageIndex)}setProfile(e,t=0){this.currentProfile=e,this.activeStageIndex=t,this.initialized&&this.ctx&&(this.masterGain&&this.masterGain.gain.setTargetAtTime(.88,this.ctx.currentTime,.32),this.rebuildStageEmitters(t))}fadeOutToSilence(){!this.initialized||!this.ctx||!this.masterGain||this.masterGain.gain.setTargetAtTime(1e-4,this.ctx.currentTime,.55)}createArchitecturalIR(e,t,i,s,r,a){const o=e.sampleRate,l=Math.floor(o*t),c=Math.floor(o*a),u=e.createBuffer(2,l,o);for(let h=0;h<2;h++){const d=u.getChannelData(h);let f=0;for(let g=c;g<l;g++){const p=(g-c)/o,A=Math.exp(-p*i)*(1-Math.exp(-p*48)),M=r>.01?1+r*Math.sin(p*52+h*.85):1,x=Math.random()*2-1,C=Math.max(.035,s-p*.055);f+=(x-f)*C,d[g]=f*A*M*.44}const m=a+.006,v=[.008,.019,.034,.052,.076,.108,.148];for(let g=0;g<v.length;g++){const p=Math.floor((m+v[g]+h*.0048)*o);if(p<l){const A=.26/(g+1)*(g%2===0?1:-1);d[p]+=A}}}return u}createWhiteNoiseBuffer(e,t){const i=Math.floor(e.sampleRate*t),s=e.createBuffer(1,i,e.sampleRate),r=s.getChannelData(0);for(let a=0;a<i;a++)r[a]=Math.random()*2-1;return s}startCoreSubmergedAndRoomTone(e){if(!this.dryBus||!this.underwaterDirectBus||!this.noiseBuffer)return;const t=e.createBufferSource();t.buffer=this.noiseBuffer,t.loop=!0;const i=e.createBiquadFilter();i.type="lowpass",i.frequency.value=140,i.Q.value=.8;const s=e.createGain();s.gain.value=.025,this.roomToneGain=s,t.connect(i),i.connect(s),s.connect(this.dryBus),t.start();const r=e.createBufferSource();r.buffer=this.noiseBuffer,r.loop=!0;const a=e.createBiquadFilter();a.type="lowpass",a.frequency.value=98,a.Q.value=1.95;const o=e.createGain();o.gain.value=1e-4,this.underwaterPressureGain=o,r.connect(a),a.connect(o),o.connect(this.underwaterDirectBus),r.start();const l=e.createBiquadFilter();l.type="lowpass",l.frequency.value=118,l.Q.value=2.4;const c=e.createGain();c.gain.value=1e-4,this.underwaterStructureGain=c;const u=e.createOscillator();u.frequency.value=.08;const h=e.createGain();h.gain.value=22,u.connect(h),h.connect(l.frequency),u.start();for(const[d,f]of[34,51.2,68.4].entries()){const m=e.createOscillator();m.type="sine",m.frequency.value=f;const v=e.createGain();v.gain.value=d===0?.52:.22,m.connect(v),v.connect(l),m.start()}l.connect(c),c.connect(this.underwaterDirectBus)}clearStageEmitters(){for(let e=0;e<this.liveEmitters.length;e++){const t=this.liveEmitters[e];for(const i of t.sources)try{i.stop()}catch{}for(const i of t.nodes)try{i.disconnect()}catch{}}this.liveEmitters=[]}createEmitterSource(e,t,i=1){const s=[],r=[],a=e.createGain();a.gain.value=1,r.push(a);const o=this.noiseBuffer;if(t==="water-lap"){const l=e.createBufferSource();l.buffer=o,l.loop=!0;const c=e.createBiquadFilter();c.type="bandpass",c.frequency.value=460*i,c.Q.value=1.75;const u=e.createGain();u.gain.value=.36;const h=e.createOscillator();h.frequency.value=.26+Math.random()*.14;const d=e.createGain();d.gain.value=.22,h.connect(d),d.connect(u.gain),l.connect(c),c.connect(u),u.connect(a),l.start(0,Math.random()*2.5),h.start(),s.push(l,h),r.push(l,c,u,h,d)}else if(t==="wave-surge"||t==="ocean-swell"){const l=e.createBufferSource();l.buffer=o,l.loop=!0;const c=e.createBiquadFilter();c.type="lowpass",c.frequency.value=(t==="ocean-swell"?280:390)*i,c.Q.value=1.15;const u=e.createGain();u.gain.value=.48;const h=e.createOscillator();h.frequency.value=(t==="ocean-swell"?.14:.34)+Math.random()*.12;const d=e.createGain();d.gain.value=.3;const f=e.createGain();f.gain.value=t==="ocean-swell"?160:250,h.connect(d),d.connect(u.gain),h.connect(f),f.connect(c.frequency),l.connect(c),c.connect(u),u.connect(a),l.start(0,Math.random()*2.5),h.start(),s.push(l,h),r.push(l,c,u,h,d,f)}else if(t==="waterfall-curtain"){const l=e.createBufferSource();l.buffer=o,l.loop=!0;const c=e.createBiquadFilter();c.type="bandpass",c.frequency.value=920*i,c.Q.value=.72;const u=e.createBiquadFilter();u.type="lowpass",u.frequency.value=3400;const h=e.createGain();h.gain.value=.34,l.connect(c),c.connect(u),u.connect(h),h.connect(a),l.start(0,Math.random()*2.5),s.push(l),r.push(l,c,u,h)}else if(t==="wind-draft"||t==="zenith-air"){const l=e.createBufferSource();l.buffer=o,l.loop=!0;const c=e.createBiquadFilter();c.type="bandpass",c.frequency.value=(t==="zenith-air"?520:340)*i,c.Q.value=t==="zenith-air"?1.8:1.35;const u=e.createOscillator();u.frequency.value=.11+Math.random()*.08;const h=e.createGain();h.gain.value=145,u.connect(h),h.connect(c.frequency);const d=e.createGain();d.gain.value=.34,l.connect(c),c.connect(d),d.connect(a),l.start(0,Math.random()*2.5),u.start(),s.push(l,u),r.push(l,c,u,h,d)}else if(t==="skylight-hum"){const l=e.createBiquadFilter();l.type="lowpass",l.frequency.value=320;const c=e.createGain();c.gain.value=.16,l.connect(c),c.connect(a),r.push(l,c);for(const[u,h]of[60,120,180.4].entries()){const d=e.createOscillator();d.type=u===0?"sine":"triangle",d.frequency.value=h*i;const f=e.createGain();f.gain.value=u===0?.55:u===1?.26:.12,d.connect(f),f.connect(l),d.start(),s.push(d),r.push(d,f)}}else if(t==="abyss-resonance"){const l=e.createBiquadFilter();l.type="lowpass",l.frequency.value=115,l.Q.value=1.6;const c=e.createGain();c.gain.value=.36,l.connect(c),c.connect(a),r.push(l,c);for(const[u,h]of[36,48,54.3].entries()){const d=e.createOscillator();d.type="sine",d.frequency.value=h*i;const f=e.createGain();f.gain.value=u===0?.55:.24,d.connect(f),f.connect(l),d.start(),s.push(d),r.push(d,f)}}else if(t==="cube-void-hum"){const l=e.createBiquadFilter();l.type="bandpass",l.frequency.value=360*i,l.Q.value=2.6;const c=e.createOscillator();c.frequency.value=.17;const u=e.createGain();u.gain.value=95,c.connect(u),u.connect(l.frequency);const h=e.createGain();h.gain.value=.24,l.connect(h),h.connect(a),c.start(),s.push(c),r.push(l,c,u,h);for(const d of[146.83,220,221.4,329.63]){const f=e.createOscillator();f.type="sine",f.frequency.value=d*i;const m=e.createGain();m.gain.value=.22,f.connect(m),m.connect(l),f.start(),s.push(f),r.push(f,m)}}else{const l=e.createBiquadFilter();l.type="lowpass",l.frequency.value=460;const c=e.createGain();c.gain.value=.22,l.connect(c),c.connect(a),r.push(l,c);for(const u of[130.81,196,246.94,293.66]){const h=e.createOscillator();h.type="sine",h.frequency.value=u*i;const d=e.createGain();d.gain.value=.18,h.connect(d),d.connect(l),h.start(),s.push(h),r.push(h,d)}}return{output:a,sources:s,nodes:r}}rebuildStageEmitters(e){if(!this.ctx||!this.dryBus||!this.reverbInputBus||!this.noiseBuffer)return;this.clearStageEmitters();const t=this.ctx,i=Ng(e);for(let s=0;s<i.length;s++){const r=i[s],a=this.createEmitterSource(t,r.kind,r.pitchScale??1),o=t.createBiquadFilter();o.type="lowpass",o.frequency.value=16e3,o.Q.value=.7;const l=t.createGain();l.gain.value=r.gain;const c=t.createPanner();c.panningModel="HRTF",c.distanceModel="inverse",c.refDistance=r.refDistance,c.maxDistance=r.maxDistance,c.rolloffFactor=r.rolloffFactor,c.coneInnerAngle=360,c.coneOuterAngle=360,c.positionX.value=r.x,c.positionY.value=r.y,c.positionZ.value=r.z;const u=t.createGain();u.gain.value=r.gain*r.reverbSend*.42,a.output.connect(o),o.connect(l),l.connect(c),c.connect(this.dryBus),a.output.connect(u),u.connect(this.reverbInputBus),a.nodes.push(o,l,c,u),this.liveEmitters.push({spec:r,panner:c,occlusionFilter:o,directGain:l,reverbSendGain:u,sources:a.sources,nodes:a.nodes,smoothedOcclusion:0,baseDirectGain:r.gain,baseReverbSend:r.gain*r.reverbSend*.42})}}createOneShotPanner(e,t,i,s,r=1.6,a=65,o=1.15){const l=e.createPanner();return l.panningModel="HRTF",l.distanceModel="inverse",l.refDistance=r,l.maxDistance=a,l.rolloffFactor=o,l.positionX.setValueAtTime(t,e.currentTime),l.positionY.setValueAtTime(i,e.currentTime),l.positionZ.setValueAtTime(s,e.currentTime),l}updateSpatial(e){const{camera:t,isUnderwater:i,waterDepthAtFeet:s,dt:r,elapsedTime:a,waveAmplitude:o,hasOpenSky:l,colliders:c,cylinders:u}=e;if(this.currentWaterDepth=s,!this.initialized||!this.ctx||!this.underwaterFilter)return;const h=this.ctx,d=h.currentTime,f=Math.min(r,.05);this.listenerPos.copy(t.position),t.getWorldDirection(this.listenerForward),this.listenerUp.set(0,1,0).applyQuaternion(t.quaternion).normalize(),this.listenerRight.crossVectors(this.listenerForward,this.listenerUp).normalize();const m=h.listener;m.positionX&&(m.positionX.setTargetAtTime(this.listenerPos.x,d,.015),m.positionY.setTargetAtTime(this.listenerPos.y,d,.015),m.positionZ.setTargetAtTime(this.listenerPos.z,d,.015),m.forwardX.setTargetAtTime(this.listenerForward.x,d,.015),m.forwardY.setTargetAtTime(this.listenerForward.y,d,.015),m.forwardZ.setTargetAtTime(this.listenerForward.z,d,.015),m.upX.setTargetAtTime(this.listenerUp.x,d,.015),m.upY.setTargetAtTime(this.listenerUp.y,d,.015),m.upZ.setTargetAtTime(this.listenerUp.z,d,.015));const v=i?1:0;this.currentUnderwater+=(v-this.currentUnderwater)*(1-Math.exp(-9.5*f));const g=195*Math.pow(18500/195,1-this.currentUnderwater);this.underwaterFilter.frequency.setTargetAtTime(g,d,.032),this.underwaterFilter.Q.setTargetAtTime(.76+this.currentUnderwater*1.45,d,.045),this.underwaterPressureGain&&this.underwaterPressureGain.gain.setTargetAtTime(1e-4+this.currentUnderwater*.36,d,.065),this.underwaterStructureGain&&this.underwaterStructureGain.gain.setTargetAtTime(1e-4+this.currentUnderwater*.16,d,.11),this.probeAccum+=f,this.probeAccum>=.055&&(this.probeAccum=0,this.currentProbe=Fg(this.listenerPos,this.listenerRight,this.listenerForward,c,u,l));const p=this.currentProbe;this.smoothedDarkThreshold+=(p.inDarkThreshold-this.smoothedDarkThreshold)*(1-Math.exp(-6.5*f));const A=me.smoothstep(p.openSkyRatio,.32,.85),M=1-A,x=me.clamp((7.5-p.widthMeters)/4.8,0,1)*me.clamp((8-p.ceilingDist)/4.5,0,1),C=me.smoothstep(p.averageRadius,16,44)*.55+me.smoothstep(p.ceilingDist,18,58)*.45,E=this.smoothedDarkThreshold,y=me.clamp((x*.72+E*.65)*M,.02,.92),T=me.clamp(C*M*(1-E*.82),.02,.98),S=me.clamp((1-Math.max(x,C*.85))*M*(1-E*.72),.04,.85),w=me.clamp(A*(1-E),.01,.72);if(this.tightGain?.gain.setTargetAtTime(y,d,.14),this.mediumGain?.gain.setTargetAtTime(S,d,.14),this.colossalGain?.gain.setTargetAtTime(T,d,.18),this.openAirGain?.gain.setTargetAtTime(w,d,.14),this.reverbColorFilter){const D=me.lerp(14800,960,E);this.reverbColorFilter.frequency.setTargetAtTime(D,d,.12)}if(this.reverbMasterGain){const D=me.lerp(.84,.34,A),I=me.lerp(1,.42,E),F=1-this.currentUnderwater*.74;this.reverbMasterGain.gain.setTargetAtTime(D*I*F,d,.08)}if(this.erLeftDelay&&this.erRightDelay&&this.erCeilDelay&&this.erGain){const I=me.clamp(p.leftDist*2/343,.004,.24),F=me.clamp(p.rightDist*2/343,.004,.24),k=me.clamp(p.ceilingDist*2/343,.006,.28);this.erLeftDelay.delayTime.setTargetAtTime(I,d,.08),this.erRightDelay.delayTime.setTargetAtTime(F,d,.08),this.erCeilDelay.delayTime.setTargetAtTime(k,d,.08);const z=(.28*M+.05)*(1-E*.65)*(1-this.currentUnderwater*.85);this.erGain.gain.setTargetAtTime(z,d,.09)}if(this.roomToneGain){const D=this.currentProfile==="stage04-azure-spires"?.015:.028;this.roomToneGain.gain.setTargetAtTime(D*(1-this.currentUnderwater*.85),d,.15)}this.occlusionAccum+=f;const _=this.occlusionAccum>=.075;_&&(this.occlusionAccum=0);for(let D=0;D<this.liveEmitters.length;D++){const I=this.liveEmitters[D],F=I.spec;let k=F.x;const z=F.y;let V=F.z;if(F.orbitRadius&&F.orbitSpeed){const U=a*F.orbitSpeed+(F.orbitPhase??0);k+=Math.cos(U)*F.orbitRadius,V+=Math.sin(U)*F.orbitRadius,I.panner.positionX.setTargetAtTime(k,d,.05),I.panner.positionY.setTargetAtTime(z,d,.05),I.panner.positionZ.setTargetAtTime(V,d,.05)}const G=Math.hypot(k-this.listenerPos.x,z-this.listenerPos.y,V-this.listenerPos.z);if(_){const U=G<F.maxDistance*1.15?Ug(this.listenerPos.x,this.listenerPos.y,this.listenerPos.z,k,z,V,c,u):1;I.smoothedOcclusion+=(U-I.smoothedOcclusion)*.42}const J=Math.max(I.smoothedOcclusion,E*.88),q=me.clamp(18e3*Math.exp(-G*.015),1150,18e3),re=me.lerp(q,420,J);I.occlusionFilter.frequency.setTargetAtTime(re,d,.08);const fe=me.lerp(1,.22,J)*(1-E*.62);I.directGain.gain.setTargetAtTime(I.baseDirectGain*fe,d,.08);const Se=1/(1+G/Math.max(1,F.refDistance)*.65),O=me.lerp(1,.72,J)*(1-E*.75);I.reverbSendGain.gain.setTargetAtTime(I.baseReverbSend*Se*O,d,.1)}i?(this.underwaterBubbleTimer-=f,this.underwaterBubbleTimer<=0&&(this.underwaterBubbleTimer=1.1+Math.random()*2.4,this.playUnderwaterAmbientBubble())):o>.2&&(this.waveSlapTimer-=f,this.waveSlapTimer<=0&&(this.waveSlapTimer=1.8+Math.random()*3.1,this.playDirectionalWaveWallSlap(o)))}playUnderwaterAmbientBubble(){if(!this.ctx||!this.underwaterDirectBus)return;const e=this.ctx,t=e.currentTime,i=1+Math.floor(Math.random()*3);for(let s=0;s<i;s++){const r=s*(.06+Math.random()*.09),a=e.createOscillator();a.type="sine";const o=220+Math.random()*210;a.frequency.setValueAtTime(o,t+r),a.frequency.exponentialRampToValueAtTime(o*1.85,t+r+.065);const l=e.createGain();l.gain.setValueAtTime(1e-4,t+r),l.gain.linearRampToValueAtTime(.022,t+r+.012),l.gain.exponentialRampToValueAtTime(1e-4,t+r+.075);const c=e.createStereoPanner();c.pan.value=(Math.random()-.5)*1.4,a.connect(l),l.connect(c),c.connect(this.underwaterDirectBus),a.start(t+r),a.stop(t+r+.09)}}playDirectionalWaveWallSlap(e){if(!this.ctx||!this.dryBus||!this.reverbInputBus||!this.noiseBuffer||this.smoothedDarkThreshold>.65)return;const t=this.ctx,i=t.currentTime,s=Math.random()*Math.PI*2,r=8+Math.random()*26,a=this.listenerPos.x+Math.cos(s)*r,o=this.listenerPos.z+Math.sin(s)*r,c=this.createOneShotPanner(t,a,.25,o,6,95,1.05),u=t.createBufferSource();u.buffer=this.noiseBuffer;const h=t.createBiquadFilter();h.type="bandpass",h.frequency.setValueAtTime(240+Math.random()*140,i),h.frequency.exponentialRampToValueAtTime(680+Math.random()*220,i+.16),h.frequency.exponentialRampToValueAtTime(180,i+.72),h.Q.value=1.25;const d=Math.min(.32,.14+e*.48),f=t.createGain();f.gain.setValueAtTime(1e-4,i),f.gain.linearRampToValueAtTime(d,i+.11),f.gain.exponentialRampToValueAtTime(1e-4,i+.78);const m=t.createGain();m.gain.value=.62,u.connect(h),h.connect(f),f.connect(c),c.connect(this.dryBus),f.connect(m),m.connect(this.reverbInputBus),u.start(i,Math.random()*2.2,.82)}playSubmerge(e){if(!this.initialized||!this.ctx||!this.underwaterDirectBus||!this.noiseBuffer)return;const t=this.ctx,i=t.currentTime,s=Math.min(1.15,Math.max(.5,e*.36)),r=t.createOscillator();r.type="sine",r.frequency.setValueAtTime(132,i),r.frequency.exponentialRampToValueAtTime(38,i+.26);const a=t.createGain();a.gain.setValueAtTime(.34*s,i),a.gain.exponentialRampToValueAtTime(1e-4,i+.3),r.connect(a),a.connect(this.underwaterDirectBus),r.start(i),r.stop(i+.32);const o=t.createBufferSource();o.buffer=this.noiseBuffer;const l=t.createBiquadFilter();l.type="lowpass",l.frequency.setValueAtTime(720,i),l.frequency.exponentialRampToValueAtTime(125,i+.56),l.Q.value=1.75;const c=t.createGain();c.gain.setValueAtTime(.001,i),c.gain.linearRampToValueAtTime(.3*s,i+.05),c.gain.exponentialRampToValueAtTime(1e-4,i+.62),o.connect(l),l.connect(c),c.connect(this.underwaterDirectBus),o.start(i,Math.random()*1.5,.66);for(let u=0;u<4;u++){const h=.08+u*.085+Math.random()*.04,d=t.createOscillator();d.type="sine";const f=190+Math.random()*180;d.frequency.setValueAtTime(f,i+h),d.frequency.exponentialRampToValueAtTime(f*1.9,i+h+.07);const m=t.createGain();m.gain.setValueAtTime(1e-4,i+h),m.gain.linearRampToValueAtTime(.036*s,i+h+.015),m.gain.exponentialRampToValueAtTime(1e-4,i+h+.08),d.connect(m),m.connect(this.underwaterDirectBus),d.start(i+h),d.stop(i+h+.09)}}playEmerge(){if(!this.initialized||!this.ctx||!this.dryBus||!this.reverbInputBus||!this.noiseBuffer)return;const e=this.ctx,t=e.currentTime,i=e.createBufferSource();i.buffer=this.noiseBuffer;const s=e.createBiquadFilter();s.type="bandpass",s.frequency.setValueAtTime(320,t),s.frequency.exponentialRampToValueAtTime(1850,t+.14),s.frequency.exponentialRampToValueAtTime(580,t+.56),s.Q.value=1.1;const r=e.createGain();r.gain.setValueAtTime(.001,t),r.gain.linearRampToValueAtTime(.28,t+.045),r.gain.exponentialRampToValueAtTime(1e-4,t+.62),i.connect(s),s.connect(r),r.connect(this.dryBus),r.connect(this.reverbInputBus),i.start(t,Math.random()*1.4,.66);for(let a=0;a<3;a++){const o=.14+a*.11+Math.random()*.05;this.playSpatialWaterDrip(this.listenerPos.x+(Math.random()-.5)*.6,this.listenerPos.y-1.1,this.listenerPos.z+(Math.random()-.5)*.6,o,.034)}}playSpatialWaterDrip(e,t,i,s,r){if(!this.ctx||!this.dryBus||!this.reverbInputBus)return;const a=this.ctx,o=a.currentTime+s,l=a.createOscillator();l.type="sine";const c=980+Math.random()*880;l.frequency.setValueAtTime(c,o),l.frequency.exponentialRampToValueAtTime(c*1.65,o+.042);const u=a.createGain();u.gain.setValueAtTime(1e-4,o),u.gain.linearRampToValueAtTime(r,o+.006),u.gain.exponentialRampToValueAtTime(1e-4,o+.055);const h=this.createOneShotPanner(a,e,t,i,1.2,24,1.3);l.connect(u),u.connect(h),h.connect(this.dryBus),u.connect(this.reverbInputBus),l.start(o),l.stop(o+.065)}playFootstep(e,t,i=1){if(this.currentUnderwater>.08||this.currentWaterDepth>.06||!this.initialized||!this.ctx||!this.dryBus||!this.reverbInputBus||!this.noiseBuffer)return;const s=this.ctx,r=s.currentTime,a=Math.min(1.15,Math.max(.32,e/4.3)),o=.86+Math.random()*.28,l=this.listenerPos.x+this.listenerRight.x*.16*i,c=this.listenerPos.y-1.5,u=this.listenerPos.z+this.listenerRight.z*.16*i,h=this.createOneShotPanner(s,l,c,u,1.2,36,1.25),d=s.createOscillator();d.type="triangle",d.frequency.setValueAtTime(340*o,r),d.frequency.exponentialRampToValueAtTime(94*o,r+.048);const f=s.createGain();f.gain.setValueAtTime(.11*a,r),f.gain.exponentialRampToValueAtTime(1e-4,r+.058);const m=s.createBufferSource();m.buffer=this.noiseBuffer;const v=s.createBiquadFilter();v.type="bandpass",v.frequency.value=(t?2350:1680)*o,v.Q.value=t?1.85:2.9;const g=s.createGain();g.gain.setValueAtTime((t?.145:.085)*a,r),g.gain.exponentialRampToValueAtTime(1e-4,r+(t?.082:.046));const p=s.createGain();p.gain.value=.72,d.connect(f),m.connect(v),v.connect(g),f.connect(h),g.connect(h),h.connect(this.dryBus),f.connect(p),g.connect(p),p.connect(this.reverbInputBus),d.start(r),d.stop(r+.065),m.start(r,Math.random()*2,.095)}playWadeStep(e,t,i=1){if(this.currentUnderwater>.12||!this.initialized||!this.ctx||!this.dryBus||!this.reverbInputBus||!this.noiseBuffer)return;const s=this.ctx,r=s.currentTime,a=me.clamp(t/.85,.12,1),o=Math.min(1.15,(.38+e*.16)*(.58+a*.64)),l=this.listenerPos.x+this.listenerRight.x*.2*i,c=this.listenerPos.y-1.35,u=this.listenerPos.z+this.listenerRight.z*.2*i,h=this.createOneShotPanner(s,l,c,u,1.6,44,1.2),d=s.createOscillator();d.type="sine";const f=165+Math.random()*85-a*35;d.frequency.setValueAtTime(f,r),d.frequency.exponentialRampToValueAtTime(f*1.9,r+.085),d.frequency.exponentialRampToValueAtTime(f*.68,r+.26);const m=s.createGain();m.gain.setValueAtTime(.001,r),m.gain.linearRampToValueAtTime(.105*o,r+.03),m.gain.exponentialRampToValueAtTime(1e-4,r+.28);const v=s.createBufferSource();v.buffer=this.noiseBuffer;const g=s.createBiquadFilter();g.type="bandpass",g.frequency.setValueAtTime(240+Math.random()*90,r),g.frequency.exponentialRampToValueAtTime(640+e*90,r+.14),g.frequency.exponentialRampToValueAtTime(190,r+.44),g.Q.value=1.5;const p=s.createGain();p.gain.setValueAtTime(.001,r),p.gain.linearRampToValueAtTime(.24*o,r+.055),p.gain.exponentialRampToValueAtTime(1e-4,r+.46);const A=s.createGain();if(A.gain.value=.68,d.connect(m),v.connect(g),g.connect(p),m.connect(h),p.connect(h),h.connect(this.dryBus),m.connect(A),p.connect(A),A.connect(this.reverbInputBus),d.start(r),d.stop(r+.3),v.start(r,Math.random()*2,.48),e>1.8){const M=s.createBufferSource();M.buffer=this.noiseBuffer;const x=s.createBiquadFilter();x.type="bandpass",x.frequency.setValueAtTime(1350+Math.random()*350,r+.03),x.frequency.exponentialRampToValueAtTime(520,r+.28),x.Q.value=1.4;const C=s.createGain();C.gain.setValueAtTime(.001,r+.025),C.gain.linearRampToValueAtTime(.095*o,r+.06),C.gain.exponentialRampToValueAtTime(1e-4,r+.3),M.connect(x),x.connect(C),C.connect(h),C.connect(A),M.start(r+.025,Math.random()*2,.32)}}playSwimStroke(e,t){if(!this.initialized||!this.ctx||!this.dryBus||!this.reverbInputBus||!this.underwaterDirectBus||!this.noiseBuffer)return;const i=this.ctx,s=i.currentTime,r=Math.min(1.15,.42+e*.16);if(t){const m=i.createBufferSource();m.buffer=this.noiseBuffer;const v=i.createBiquadFilter();v.type="lowpass",v.frequency.setValueAtTime(92,s),v.frequency.exponentialRampToValueAtTime(240+Math.random()*50,s+.2),v.frequency.exponentialRampToValueAtTime(76,s+.64),v.Q.value=1.65;const g=i.createGain();g.gain.setValueAtTime(.001,s),g.gain.linearRampToValueAtTime(.32*r,s+.15),g.gain.exponentialRampToValueAtTime(1e-4,s+.68);const p=i.createStereoPanner();p.pan.value=(Math.random()-.5)*.55,m.connect(v),v.connect(g),g.connect(p),p.connect(this.underwaterDirectBus),m.start(s,Math.random()*1.8,.72);for(let A=0;A<3;A++){const M=.07+A*.12+Math.random()*.05,x=i.createOscillator();x.type="sine";const C=195+Math.random()*160;x.frequency.setValueAtTime(C,s+M),x.frequency.exponentialRampToValueAtTime(C*1.82,s+M+.068);const E=i.createGain();E.gain.setValueAtTime(1e-4,s+M),E.gain.linearRampToValueAtTime(.032*r,s+M+.014),E.gain.exponentialRampToValueAtTime(1e-4,s+M+.078);const y=i.createStereoPanner();y.pan.value=(Math.random()-.5)*1.1,x.connect(E),E.connect(y),y.connect(this.underwaterDirectBus),x.start(s+M),x.stop(s+M+.09)}return}const a=this.listenerPos.x+this.listenerForward.x*.45,o=this.listenerPos.y-.45,l=this.listenerPos.z+this.listenerForward.z*.45,c=this.createOneShotPanner(i,a,o,l,1.5,42,1.2),u=i.createBufferSource();u.buffer=this.noiseBuffer;const h=i.createBiquadFilter();h.type="bandpass",h.frequency.setValueAtTime(220,s),h.frequency.exponentialRampToValueAtTime(620,s+.22),h.frequency.exponentialRampToValueAtTime(155,s+.58),h.Q.value=1.3;const d=i.createGain();d.gain.setValueAtTime(.001,s),d.gain.linearRampToValueAtTime(.28*r,s+.14),d.gain.exponentialRampToValueAtTime(1e-4,s+.6);const f=i.createGain();f.gain.value=.65,u.connect(h),h.connect(d),d.connect(c),c.connect(this.dryBus),d.connect(f),f.connect(this.reverbInputBus),u.start(s,Math.random()*1.8,.64)}playLadderStep(e,t,i){if(!this.initialized||!this.ctx||!this.dryBus||!this.reverbInputBus||!this.noiseBuffer)return;const s=this.ctx,r=s.currentTime,a=i?-1:1,o=this.listenerPos.x+this.listenerForward.x*.42+this.listenerRight.x*.22*a,l=this.listenerPos.y+(i?-1.15:-.15),c=this.listenerPos.z+this.listenerForward.z*.42+this.listenerRight.z*.22*a,u=this.createOneShotPanner(s,o,l,c,1.2,48,1.2),h=s.createGain();h.gain.value=.72;const d=t==="steel",f=(d?.74:1)*(i?.88:1.08)*(.9+Math.random()*.2),m=s.createOscillator();m.type="sine",m.frequency.setValueAtTime((i?162:205)*f,r),m.frequency.exponentialRampToValueAtTime(58*f,r+.068);const v=s.createGain();v.gain.setValueAtTime(i?.16:.085,r),v.gain.exponentialRampToValueAtTime(1e-4,r+.078),m.connect(v),v.connect(u),v.connect(h),m.start(r),m.stop(r+.088);const g=d?[[410*f,.082,.14],[920*f,.044,.1],[1740*f,.022,.065]]:[[555*f,.07,.13],[1220*f,.04,.092],[2240*f,.019,.058]];for(const[x,C,E]of g){const y=s.createOscillator();y.type="triangle";const T=.95+Math.random()*.1;y.frequency.setValueAtTime(x*T,r);const S=s.createGain();S.gain.setValueAtTime(C*(i?1.15:.76),r),S.gain.exponentialRampToValueAtTime(1e-4,r+E*(.85+Math.random()*.3)),y.connect(S),S.connect(u),S.connect(h),y.start(r),y.stop(r+E+.03)}const p=s.createBufferSource();p.buffer=this.noiseBuffer;const A=s.createBiquadFilter();A.type="bandpass",A.frequency.setValueAtTime((e?2150:1520)*(.88+Math.random()*.24),r),A.frequency.exponentialRampToValueAtTime(920,r+.085),A.Q.value=e?2.1:3.2;const M=s.createGain();M.gain.setValueAtTime(e?.105:.065,r),M.gain.exponentialRampToValueAtTime(1e-4,r+(e?.082:.052)),p.connect(A),A.connect(M),M.connect(u),M.connect(h),p.start(r,Math.random()*2,.095),u.connect(this.dryBus),h.connect(this.reverbInputBus),e&&Math.random()<.72&&this.playSpatialWaterDrip(o+(Math.random()-.5)*.3,l-.4,c+(Math.random()-.5)*.3,.06+Math.random()*.12,.032)}playSplash(e){if(!this.initialized||!this.ctx||!this.dryBus||!this.reverbInputBus||!this.noiseBuffer)return;const t=this.ctx,i=t.currentTime,s=Math.min(1,Math.max(.25,e)),r=this.createOneShotPanner(t,this.listenerPos.x,this.listenerPos.y-1.2,this.listenerPos.z,1.8,54,1.15),a=t.createGain();a.gain.value=.74;const o=t.createOscillator();o.type="sine",o.frequency.setValueAtTime(140,i),o.frequency.exponentialRampToValueAtTime(36,i+.19);const l=t.createGain();l.gain.setValueAtTime(.3*s,i),l.gain.exponentialRampToValueAtTime(1e-4,i+.23),o.connect(l),l.connect(r),l.connect(a),o.start(i),o.stop(i+.25);const c=t.createBufferSource();c.buffer=this.noiseBuffer;const u=t.createBiquadFilter();u.type="bandpass",u.frequency.setValueAtTime(1280,i),u.frequency.exponentialRampToValueAtTime(340,i+.58),u.Q.value=.88;const h=t.createGain();h.gain.setValueAtTime(.001,i),h.gain.linearRampToValueAtTime(.34*s,i+.025),h.gain.exponentialRampToValueAtTime(1e-4,i+.62),c.connect(u),u.connect(h),h.connect(r),h.connect(a),c.start(i,Math.random()*1.4,.66),r.connect(this.dryBus),a.connect(this.reverbInputBus)}playMantle(e=!1){if(!this.initialized||!this.ctx||!this.dryBus||!this.reverbInputBus||!this.noiseBuffer)return;const t=this.ctx,i=t.currentTime,s=this.listenerPos.x+this.listenerForward.x*.45,r=this.listenerPos.y-.25,a=this.listenerPos.z+this.listenerForward.z*.45,o=this.createOneShotPanner(t,s,r,a,1.4,38,1.2),l=t.createGain();l.gain.value=.68;const c=t.createBufferSource();c.buffer=this.noiseBuffer;const u=t.createBiquadFilter();u.type="bandpass",u.frequency.setValueAtTime(e?1180:880,i),u.frequency.exponentialRampToValueAtTime(310,i+.15),u.Q.value=1.45;const h=t.createGain();h.gain.setValueAtTime(e?.24:.18,i),h.gain.exponentialRampToValueAtTime(1e-4,i+.17),c.connect(u),u.connect(h),h.connect(o),h.connect(l),c.start(i,Math.random()*1.2,.19);const d=t.createOscillator();d.type="sine",d.frequency.setValueAtTime(104,i+.28),d.frequency.exponentialRampToValueAtTime(44,i+.44);const f=t.createGain();f.gain.setValueAtTime(1e-4,i+.27),f.gain.linearRampToValueAtTime(.16,i+.3),f.gain.exponentialRampToValueAtTime(1e-4,i+.46),d.connect(f),f.connect(o),d.start(i+.27),d.stop(i+.48),o.connect(this.dryBus),l.connect(this.reverbInputBus),e&&(this.playSpatialWaterDrip(s-.2,r-.5,a,.18,.036),this.playSpatialWaterDrip(s+.25,r-.6,a,.34,.03))}playLevelTransition(){if(!this.initialized||!this.ctx||!this.reverbInputBus)return;const e=this.ctx,t=e.currentTime;for(const[i,s]of[110,164.81,220].entries()){const r=e.createOscillator();r.type="sine",r.frequency.setValueAtTime(s,t);const a=e.createGain();a.gain.setValueAtTime(1e-4,t),a.gain.linearRampToValueAtTime(i===0?.15:.075,t+.35),a.gain.exponentialRampToValueAtTime(1e-4,t+2.4),r.connect(a),a.connect(this.reverbInputBus),r.start(t),r.stop(t+2.5)}}playFlashlightClick(){if(!this.initialized||!this.ctx||!this.dryBus||!this.noiseBuffer)return;const e=this.ctx,t=e.currentTime,i=e.createBufferSource();i.buffer=this.noiseBuffer;const s=e.createBiquadFilter();s.type="highpass",s.frequency.value=2600;const r=e.createGain();r.gain.setValueAtTime(.14,t),r.gain.exponentialRampToValueAtTime(1e-4,t+.022),i.connect(s),s.connect(r),r.connect(this.dryBus),i.start(t,.2,.03)}dispose(){this.clearStageEmitters(),this.ctx&&(this.ctx.close(),this.ctx=null),this.initialized=!1}}/**
 * postprocessing v6.39.6 build Sun Nov 01 2026
 * https://github.com/pmndrs/postprocessing
 * Copyright 2015-2026 Raoul van Rüschen
 * @license Zlib
 */var zg=(()=>{const n=new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),e=new Float32Array([0,0,2,0,0,2]),t=new Rt;return t.setAttribute("position",new Tt(n,3)),t.setAttribute("uv",new Tt(e,2)),t})(),en=class go{static get fullscreenGeometry(){return zg}constructor(e="Pass",t=new yr,i=new bo){this.name=e,this.renderer=null,this.scene=t,this.camera=i,this.screen=null,this.rtt=!0,this.needsSwap=!0,this.needsDepthBlit=!1,this.needsDepthTexture=!1,this.enabled=!0}get renderToScreen(){return!this.rtt}set renderToScreen(e){if(this.rtt===e){const t=this.fullscreenMaterial;t!==null&&(t.needsUpdate=!0),this.rtt=!e}}set mainScene(e){}set mainCamera(e){}setRenderer(e){this.renderer=e}isEnabled(){return this.enabled}setEnabled(e){this.enabled=e}get fullscreenMaterial(){return this.screen!==null?this.screen.material:null}set fullscreenMaterial(e){let t=this.screen;t!==null?t.material=e:(t=new Oe(go.fullscreenGeometry,e),t.frustumCulled=!1,this.scene===null&&(this.scene=new yr),this.scene.add(t),this.screen=t)}getFullscreenMaterial(){return this.fullscreenMaterial}setFullscreenMaterial(e){this.fullscreenMaterial=e}getDepthTexture(){return null}setDepthTexture(e,t=xi){}render(e,t,i,s,r){throw new Error("Render method not implemented!")}setSize(e,t){}initialize(e,t,i){}dispose(){for(const e of Object.keys(this)){const t=this[e];(t instanceof Mt||t instanceof zn||t instanceof wt||t instanceof go)&&this[e].dispose()}this.fullscreenMaterial!==null&&this.fullscreenMaterial.dispose()}},kg=class extends en{constructor(){super("ClearMaskPass",null,null),this.needsSwap=!1}render(n,e,t,i,s){const r=n.state.buffers.stencil;r.setLocked(!1),r.setTest(!1)}},Gg=`#ifdef COLOR_WRITE
#include <common>
#include <dithering_pars_fragment>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#endif
#ifdef DEPTH_WRITE
#include <packing>
#ifdef GL_FRAGMENT_PRECISION_HIGH
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
return unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
return texture2D(depthBuffer,uv).r;
#endif
}
#endif
#ifdef USE_WEIGHTS
uniform vec4 channelWeights;
#endif
uniform float opacity;varying vec2 vUv;void main(){
#ifdef COLOR_WRITE
vec4 texel=texture2D(inputBuffer,vUv);
#ifdef USE_WEIGHTS
texel*=channelWeights;
#endif
gl_FragColor=opacity*texel;
#ifdef COLOR_SPACE_CONVERSION
#include <colorspace_fragment>
#endif
#include <dithering_fragment>
#else
gl_FragColor=vec4(0.0);
#endif
#ifdef DEPTH_WRITE
gl_FragDepth=readDepth(vUv);
#endif
}`,Lo="varying vec2 vUv;void main(){vUv=position.xy*0.5+0.5;gl_Position=vec4(position.xy,1.0,1.0);}",tu=class extends xt{constructor(){super({name:"CopyMaterial",defines:{COLOR_SPACE_CONVERSION:"1",DEPTH_PACKING:"0",COLOR_WRITE:"1"},uniforms:{inputBuffer:new Ie(null),depthBuffer:new Ie(null),channelWeights:new Ie(null),opacity:new Ie(1)},blending:Ft,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:Gg,vertexShader:Lo}),this.depthFunc=Ar}get inputBuffer(){return this.uniforms.inputBuffer.value}set inputBuffer(n){const e=n!==null;this.colorWrite!==e&&(e?this.defines.COLOR_WRITE=!0:delete this.defines.COLOR_WRITE,this.colorWrite=e,this.needsUpdate=!0),this.uniforms.inputBuffer.value=n}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(n){const e=n!==null;this.depthWrite!==e&&(e?this.defines.DEPTH_WRITE=!0:delete this.defines.DEPTH_WRITE,this.depthTest=e,this.depthWrite=e,this.needsUpdate=!0),this.uniforms.depthBuffer.value=n}set depthPacking(n){this.defines.DEPTH_PACKING=n.toFixed(0),this.needsUpdate=!0}get colorSpaceConversion(){return this.defines.COLOR_SPACE_CONVERSION!==void 0}set colorSpaceConversion(n){this.colorSpaceConversion!==n&&(n?this.defines.COLOR_SPACE_CONVERSION=!0:delete this.defines.COLOR_SPACE_CONVERSION,this.needsUpdate=!0)}get channelWeights(){return this.uniforms.channelWeights.value}set channelWeights(n){n!==null?(this.defines.USE_WEIGHTS="1",this.uniforms.channelWeights.value=n):delete this.defines.USE_WEIGHTS,this.needsUpdate=!0}setInputBuffer(n){this.uniforms.inputBuffer.value=n}getOpacity(n){return this.uniforms.opacity.value}setOpacity(n){this.uniforms.opacity.value=n}},nu=class extends en{constructor(n,e=!0){super("CopyPass"),this.fullscreenMaterial=new tu,this.needsSwap=!1,this.renderTarget=n,n===void 0&&(this.renderTarget=new Mt(1,1,{minFilter:ut,magFilter:ut,stencilBuffer:!1,depthBuffer:!1}),this.renderTarget.texture.name="CopyPass.Target"),this.autoResize=e}get resize(){return this.autoResize}set resize(n){this.autoResize=n}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}setAutoResizeEnabled(n){this.autoResize=n}render(n,e,t,i,s){this.fullscreenMaterial.inputBuffer=e.texture,n.setRenderTarget(this.renderToScreen?null:this.renderTarget),n.render(this.scene,this.camera)}setSize(n,e){this.autoResize&&this.renderTarget.setSize(n,e)}initialize(n,e,t){t!==void 0&&(this.renderTarget.texture.type=t,t!==Lt?this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1":n!==null&&n.outputColorSpace===et&&(this.renderTarget.texture.colorSpace=et))}},ac=new Te,Bo=class extends en{constructor(n=!0,e=!0,t=!1){super("ClearPass",null,null),this.needsSwap=!1,this.color=n,this.depth=e,this.stencil=t,this.overrideClearColor=null,this.overrideClearAlpha=-1}setClearFlags(n,e,t){this.color=n,this.depth=e,this.stencil=t}getOverrideClearColor(){return this.overrideClearColor}setOverrideClearColor(n){this.overrideClearColor=n}getOverrideClearAlpha(){return this.overrideClearAlpha}setOverrideClearAlpha(n){this.overrideClearAlpha=n}render(n,e,t,i,s){const r=this.overrideClearColor,a=this.overrideClearAlpha,o=n.getClearAlpha(),l=r!==null,c=a>=0;l?(n.getClearColor(ac),n.setClearColor(r,c?a:o)):c&&n.setClearAlpha(a),n.setRenderTarget(this.renderToScreen?null:e),n.clear(this.color,this.depth,this.stencil),l?n.setClearColor(ac,o):c&&n.setClearAlpha(o)}},Hg=class extends en{constructor(n,e){super("MaskPass",n,e),this.needsSwap=!1,this.clearPass=new Bo(!1,!1,!0),this.inverse=!1}set mainScene(n){this.scene=n}set mainCamera(n){this.camera=n}get inverted(){return this.inverse}set inverted(n){this.inverse=n}get clear(){return this.clearPass.enabled}set clear(n){this.clearPass.enabled=n}getClearPass(){return this.clearPass}isInverted(){return this.inverted}setInverted(n){this.inverted=n}render(n,e,t,i,s){const r=n.getContext(),a=n.state.buffers,o=this.scene,l=this.camera,c=this.clearPass,u=this.inverted?0:1,h=1-u;a.color.setMask(!1),a.depth.setMask(!1),a.color.setLocked(!0),a.depth.setLocked(!0),a.stencil.setTest(!0),a.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),a.stencil.setFunc(r.ALWAYS,u,4294967295),a.stencil.setClear(h),a.stencil.setLocked(!0),this.clearPass.enabled&&(this.renderToScreen?c.render(n,null):(c.render(n,e),c.render(n,t))),this.renderToScreen?(n.setRenderTarget(null),n.render(o,l)):(n.setRenderTarget(e),n.render(o,l),n.setRenderTarget(t),n.render(o,l)),a.color.setLocked(!1),a.depth.setLocked(!1),a.stencil.setLocked(!1),a.stencil.setFunc(r.EQUAL,1,4294967295),a.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),a.stencil.setLocked(!0)}};function Vg(n,e){const t=n.getContext();if(e<=0||typeof t.renderbufferStorageMultisample!="function")return 0;const i=t.getParameter(t.MAX_SAMPLES),s=Math.min(e,i);if(s<=0)return 0;const r=t.getParameter(t.RENDERBUFFER_BINDING),a=t.createRenderbuffer();try{return t.bindRenderbuffer(t.RENDERBUFFER,a),t.renderbufferStorageMultisample(t.RENDERBUFFER,s,t.RGBA8,1,1),s}catch{return 0}finally{t.bindRenderbuffer(t.RENDERBUFFER,r),t.deleteRenderbuffer(a)}}var Ma=1/1e3,Wg=1e3,Yg=class{constructor(){this.startTime=performance.now(),this.previousTime=0,this.currentTime=0,this._delta=0,this._elapsed=0,this._fixedDelta=1e3/60,this.timescale=1,this.useFixedDelta=!1,this._autoReset=!1}get autoReset(){return this._autoReset}set autoReset(n){typeof document<"u"&&document.hidden!==void 0&&(n?document.addEventListener("visibilitychange",this):document.removeEventListener("visibilitychange",this),this._autoReset=n)}get delta(){return this._delta*Ma}get fixedDelta(){return this._fixedDelta*Ma}set fixedDelta(n){this._fixedDelta=n*Wg}get elapsed(){return this._elapsed*Ma}update(n){this.useFixedDelta?this._delta=this.fixedDelta:(this.previousTime=this.currentTime,this.currentTime=(n!==void 0?n:performance.now())-this.startTime,this._delta=this.currentTime-this.previousTime),this._delta*=this.timescale,this._elapsed+=this._delta}reset(){this._delta=0,this._elapsed=0,this.currentTime=performance.now()-this.startTime}getDelta(){return this.delta}getElapsed(){return this.elapsed}handleEvent(n){document.hidden||(this.currentTime=performance.now()-this.startTime)}dispose(){this.autoReset=!1}},Xg=class{constructor(n=null,{depthBuffer:e=!0,stencilBuffer:t=!1,multisampling:i=0,frameBufferType:s=Lt}={}){this.renderer=null,this.inputBuffer=this.createBuffer(e,t,s,i),this.outputBuffer=this.inputBuffer.clone(),this.copyPass=new nu,this.depthRenderTarget=null,this.passes=[],this.timer=new Yg,this.autoRenderToScreen=!0,this.setRenderer(n)}get stableDepthTexture(){return this.depthRenderTarget===null?null:this.depthRenderTarget.depthTexture}get multisampling(){return this.inputBuffer.samples}set multisampling(n){const e=this.renderer===null?n:Vg(this.renderer,n);this.multisampling!==e&&(this.inputBuffer.samples=e,this.outputBuffer.samples=e,this.inputBuffer.dispose(),this.outputBuffer.dispose())}getTimer(){return this.timer}getRenderer(){return this.renderer}setRenderer(n){if(this.renderer=n,n!==null){const e=n.getSize(new de),t=n.getContext().getContextAttributes().alpha,i=this.inputBuffer.texture.type;i===Lt&&n.outputColorSpace===et&&(this.inputBuffer.texture.colorSpace=et,this.outputBuffer.texture.colorSpace=et,this.inputBuffer.dispose(),this.outputBuffer.dispose());const s=this.multisampling;this.multisampling=s,n.autoClear=!1,this.setSize(e.width,e.height);for(const r of this.passes)r.initialize(n,t,i)}}replaceRenderer(n,e=!0){const t=this.renderer,i=t.domElement.parentNode;return this.setRenderer(n),e&&i!==null&&(i.removeChild(t.domElement),i.appendChild(n.domElement)),t}createDepthTexture(){const n=new Xi;n.name="EffectComposer.InputDepth",this.inputBuffer.stencilBuffer?(n.format=pi,n.type=fi):n.type=dn;const e=new Xi;e.format=n.format,e.type=n.type,e.name="EffectComposer.OutputDepth";const t=new Xi;t.format=n.format,t.type=n.type,t.name="EffectComposer.StableDepth",this.inputBuffer.depthTexture=n,this.outputBuffer.depthTexture=e,this.inputBuffer.dispose(),this.outputBuffer.dispose();const{width:i,height:s}=this.inputBuffer;this.depthRenderTarget=new Mt(i,s,{depthBuffer:!0,stencilBuffer:this.inputBuffer.stencilBuffer,depthTexture:t})}blitDepthBuffer(n){const e=this.renderer,t=this.depthRenderTarget,i=e.properties,s=e.getContext();e.setRenderTarget(t);const r=i.get(n).__webglFramebuffer,a=i.get(t).__webglFramebuffer,o=n.stencilBuffer?s.DEPTH_BUFFER_BIT|s.STENCIL_BUFFER_BIT:s.DEPTH_BUFFER_BIT;s.bindFramebuffer(s.READ_FRAMEBUFFER,r),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,a),s.blitFramebuffer(0,0,n.width,n.height,0,0,t.width,t.height,o,s.NEAREST),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),e.setRenderTarget(null)}deleteDepthTexture(){const n=this.stableDepthTexture;for(const e of this.passes)e.getDepthTexture()===n&&e.setDepthTexture(null);this.depthRenderTarget!==null&&(this.depthRenderTarget.dispose(),this.depthRenderTarget=null),this.inputBuffer.depthTexture!==null&&(this.inputBuffer.depthTexture.dispose(),this.inputBuffer.depthTexture=null),this.outputBuffer.depthTexture!==null&&(this.outputBuffer.depthTexture.dispose(),this.outputBuffer.depthTexture=null)}createBuffer(n,e,t,i){const s=this.renderer,r=s===null?new de:s.getDrawingBufferSize(new de),a=new Mt(r.width,r.height,{minFilter:ut,magFilter:ut,samples:i,stencilBuffer:e,depthBuffer:n,type:t});return t===Lt&&s!==null&&s.outputColorSpace===et&&(a.texture.colorSpace=et),a.texture.name="EffectComposer.Buffer",a.texture.generateMipmaps=!1,a}setMainScene(n){for(const e of this.passes)e.mainScene=n}setMainCamera(n){for(const e of this.passes)e.mainCamera=n}addPass(n,e){const t=this.passes,i=this.renderer,s=i.getDrawingBufferSize(new de),r=i.getContext().getContextAttributes().alpha,a=this.inputBuffer.texture.type;if(n.renderer=i,n.setSize(s.width,s.height),n.initialize(i,r,a),this.autoRenderToScreen&&(t.length>0&&(t[t.length-1].renderToScreen=!1),n.renderToScreen&&(this.autoRenderToScreen=!1)),e!==void 0?t.splice(e,0,n):t.push(n),this.autoRenderToScreen&&(t[t.length-1].renderToScreen=!0),n.needsDepthTexture||this.depthRenderTarget!==null)if(this.depthRenderTarget===null){this.createDepthTexture();for(const o of t)o.setDepthTexture(this.stableDepthTexture)}else n.setDepthTexture(this.stableDepthTexture)}removePass(n){const e=this.passes,t=e.indexOf(n);if(t!==-1&&e.splice(t,1).length>0){const r=this.stableDepthTexture;if(r!==null){const a=(l,c)=>l||c.needsDepthTexture;e.reduce(a,!1)||(n.getDepthTexture()===r&&n.setDepthTexture(null),this.deleteDepthTexture())}this.autoRenderToScreen&&t===e.length&&(n.renderToScreen=!1,e.length>0&&(e[e.length-1].renderToScreen=!0))}}removeAllPasses(){const n=this.passes;this.deleteDepthTexture(),n.length>0&&(this.autoRenderToScreen&&(n[n.length-1].renderToScreen=!1),this.passes=[])}render(n){const e=this.renderer,t=this.copyPass;let i=this.inputBuffer,s=this.outputBuffer,r,a=!1;n===void 0&&(this.timer.update(),n=this.timer.getDelta());for(const o of this.passes)if(o.enabled){if(o.render(e,i,s,n,a),o.needsDepthBlit&&this.depthRenderTarget!==null&&this.blitDepthBuffer(i),o.needsSwap){if(a){t.renderToScreen=o.renderToScreen;const l=e.getContext(),c=e.state.buffers.stencil;c.setFunc(l.NOTEQUAL,1,4294967295),t.render(e,i,s,n,a),c.setFunc(l.EQUAL,1,4294967295)}r=i,i=s,s=r}o instanceof Hg?a=!0:o instanceof kg&&(a=!1)}}setSize(n,e,t){const i=this.renderer,s=i.getSize(new de);(n===void 0||e===void 0)&&(n=s.width,e=s.height),(s.width!==n||s.height!==e)&&i.setSize(n,e,t);const r=i.getDrawingBufferSize(new de);this.inputBuffer.setSize(r.width,r.height),this.outputBuffer.setSize(r.width,r.height),this.depthRenderTarget!==null&&this.depthRenderTarget.setSize(r.width,r.height);for(const a of this.passes)a.setSize(r.width,r.height)}reset(){this.dispose(),this.autoRenderToScreen=!0}dispose(){for(const n of this.passes)n.dispose();this.deleteDepthTexture(),this.inputBuffer.dispose(),this.outputBuffer.dispose(),this.copyPass.dispose(),this.timer.dispose(),this.passes=[],en.fullscreenGeometry.dispose()}},Mn={NONE:0,DEPTH:1,CONVOLUTION:2},$e={FRAGMENT_HEAD:"FRAGMENT_HEAD",FRAGMENT_MAIN_UV:"FRAGMENT_MAIN_UV",FRAGMENT_MAIN_IMAGE:"FRAGMENT_MAIN_IMAGE",VERTEX_HEAD:"VERTEX_HEAD",VERTEX_MAIN_SUPPORT:"VERTEX_MAIN_SUPPORT"},Zg=class{constructor(){this.shaderParts=new Map([[$e.FRAGMENT_HEAD,null],[$e.FRAGMENT_MAIN_UV,null],[$e.FRAGMENT_MAIN_IMAGE,null],[$e.VERTEX_HEAD,null],[$e.VERTEX_MAIN_SUPPORT,null]]),this.defines=new Map,this.uniforms=new Map,this.blendModes=new Map,this.extensions=new Set,this.attributes=Mn.NONE,this.varyings=new Set,this.uvTransformation=!1,this.readDepth=!1,this.colorSpace=jn}},Aa=!1,oc=class{constructor(n=null){this.originalMaterials=new Map,this.material=null,this.materials=null,this.materialsBackSide=null,this.materialsDoubleSide=null,this.materialsFlatShaded=null,this.materialsFlatShadedBackSide=null,this.materialsFlatShadedDoubleSide=null,this.setMaterial(n),this.meshCount=0,this.replaceMaterial=e=>{if(e.isMesh){let t;if(e.material.flatShading)switch(e.material.side){case Ht:t=this.materialsFlatShadedDoubleSide;break;case _t:t=this.materialsFlatShadedBackSide;break;default:t=this.materialsFlatShaded;break}else switch(e.material.side){case Ht:t=this.materialsDoubleSide;break;case _t:t=this.materialsBackSide;break;default:t=this.materials;break}this.originalMaterials.set(e,e.material),e.isSkinnedMesh?e.material=t[2]:e.isInstancedMesh?e.material=t[1]:e.material=t[0],++this.meshCount}}}cloneMaterial(n){if(!(n instanceof xt))return n.clone();const e=n.uniforms,t=new Map;for(const s in e){const r=e[s].value;r.isRenderTargetTexture&&(e[s].value=null,t.set(s,r))}const i=n.clone();for(const s of t)e[s[0]].value=s[1],i.uniforms[s[0]].value=s[1];return i}setMaterial(n){if(this.disposeMaterials(),this.material=n,n!==null){const e=this.materials=[this.cloneMaterial(n),this.cloneMaterial(n),this.cloneMaterial(n)];for(const t of e)t.uniforms=Object.assign({},n.uniforms),t.side=Fn;e[2].skinning=!0,this.materialsBackSide=e.map(t=>{const i=this.cloneMaterial(t);return i.uniforms=Object.assign({},n.uniforms),i.side=_t,i}),this.materialsDoubleSide=e.map(t=>{const i=this.cloneMaterial(t);return i.uniforms=Object.assign({},n.uniforms),i.side=Ht,i}),this.materialsFlatShaded=e.map(t=>{const i=this.cloneMaterial(t);return i.uniforms=Object.assign({},n.uniforms),i.flatShading=!0,i}),this.materialsFlatShadedBackSide=e.map(t=>{const i=this.cloneMaterial(t);return i.uniforms=Object.assign({},n.uniforms),i.flatShading=!0,i.side=_t,i}),this.materialsFlatShadedDoubleSide=e.map(t=>{const i=this.cloneMaterial(t);return i.uniforms=Object.assign({},n.uniforms),i.flatShading=!0,i.side=Ht,i})}}render(n,e,t){const i=n.shadowMap.enabled;if(n.shadowMap.enabled=!1,Aa){const s=this.originalMaterials;this.meshCount=0,e.traverse(this.replaceMaterial),n.render(e,t);for(const r of s)r[0].material=r[1];this.meshCount!==s.size&&s.clear()}else{const s=e.overrideMaterial;e.overrideMaterial=this.material,n.render(e,t),e.overrideMaterial=s}n.shadowMap.enabled=i}disposeMaterials(){if(this.material!==null){const n=this.materials.concat(this.materialsBackSide).concat(this.materialsDoubleSide).concat(this.materialsFlatShaded).concat(this.materialsFlatShadedBackSide).concat(this.materialsFlatShadedDoubleSide);for(const e of n)e.dispose()}}dispose(){this.originalMaterials.clear(),this.disposeMaterials()}static get workaroundEnabled(){return Aa}static set workaroundEnabled(n){Aa=n}},Qn=-1,xn=class extends On{constructor(n=null,e=Qn,t=Qn,i=1){super(),n!==null&&this.addEventListener("change",()=>n.setSize(this.baseSize.width,this.baseSize.height)),this.baseSize=new de(1,1),this.preferredSize=new de(e,t),this.target=this.preferredSize,this.s=i,this.effectiveSize=new de,this.addEventListener("change",()=>this.updateEffectiveSize()),this.updateEffectiveSize()}updateEffectiveSize(){const n=this.baseSize,e=this.preferredSize,t=this.effectiveSize,i=this.scale;e.width!==Qn?t.width=e.width:e.height!==Qn?t.width=Math.round(e.height*(n.width/Math.max(n.height,1))):t.width=Math.round(n.width*i),e.height!==Qn?t.height=e.height:e.width!==Qn?t.height=Math.round(e.width/Math.max(n.width/Math.max(n.height,1),1)):t.height=Math.round(n.height*i)}get width(){return this.effectiveSize.width}set width(n){this.preferredWidth=n}get height(){return this.effectiveSize.height}set height(n){this.preferredHeight=n}getWidth(){return this.width}getHeight(){return this.height}get scale(){return this.s}set scale(n){this.s!==n&&(this.s=n,this.preferredSize.setScalar(Qn),this.dispatchEvent({type:"change"}))}getScale(){return this.scale}setScale(n){this.scale=n}get baseWidth(){return this.baseSize.width}set baseWidth(n){this.baseSize.width!==n&&(this.baseSize.width=n,this.dispatchEvent({type:"change"}))}getBaseWidth(){return this.baseWidth}setBaseWidth(n){this.baseWidth=n}get baseHeight(){return this.baseSize.height}set baseHeight(n){this.baseSize.height!==n&&(this.baseSize.height=n,this.dispatchEvent({type:"change"}))}getBaseHeight(){return this.baseHeight}setBaseHeight(n){this.baseHeight=n}setBaseSize(n,e){(this.baseSize.width!==n||this.baseSize.height!==e)&&(this.baseSize.set(n,e),this.dispatchEvent({type:"change"}))}get preferredWidth(){return this.preferredSize.width}set preferredWidth(n){this.preferredSize.width!==n&&(this.preferredSize.width=n,this.dispatchEvent({type:"change"}))}getPreferredWidth(){return this.preferredWidth}setPreferredWidth(n){this.preferredWidth=n}get preferredHeight(){return this.preferredSize.height}set preferredHeight(n){this.preferredSize.height!==n&&(this.preferredSize.height=n,this.dispatchEvent({type:"change"}))}getPreferredHeight(){return this.preferredHeight}setPreferredHeight(n){this.preferredHeight=n}setPreferredSize(n,e){(this.preferredSize.width!==n||this.preferredSize.height!==e)&&(this.preferredSize.set(n,e),this.dispatchEvent({type:"change"}))}copy(n){this.s=n.scale,this.baseSize.set(n.baseWidth,n.baseHeight),this.preferredSize.set(n.preferredWidth,n.preferredHeight),this.dispatchEvent({type:"change"})}static get AUTO_SIZE(){return Qn}},qe={ADD:0,ALPHA:1,AVERAGE:2,COLOR:3,COLOR_BURN:4,COLOR_DODGE:5,DARKEN:6,DIFFERENCE:7,DIVIDE:8,DST:9,EXCLUSION:10,HARD_LIGHT:11,HARD_MIX:12,HUE:13,INVERT:14,INVERT_RGB:15,LIGHTEN:16,LINEAR_BURN:17,LINEAR_DODGE:18,LINEAR_LIGHT:19,LUMINOSITY:20,MULTIPLY:21,NEGATION:22,NORMAL:23,OVERLAY:24,PIN_LIGHT:25,REFLECT:26,SATURATION:27,SCREEN:28,SOFT_LIGHT:29,SRC:30,SUBTRACT:31,VIVID_LIGHT:32},Qg="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",qg="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,src.a*opacity);}",Kg="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=(dst.rgb+src.rgb)*0.5;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Jg="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.xy,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",jg="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=mix(step(0.0,b)*(1.0-min(vec3(1.0),(1.0-a)/max(b,1e-9))),vec3(1.0),step(1.0,a));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",$g="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=step(0.0,a)*mix(min(vec3(1.0),a/max(1.0-b,1e-9)),vec3(1.0),step(1.0,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",ev="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",tv="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=abs(dst.rgb-src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",nv="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb/max(src.rgb,1e-9);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",iv="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-2.0*dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",sv="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb,1.0);vec3 b=min(src.rgb,1.0);vec3 c=mix(2.0*a*b,1.0-2.0*(1.0-a)*(1.0-b),step(0.5,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",rv="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=step(1.0,dst.rgb+src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",av="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.x,a.yz));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",ov="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",lv="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=src.rgb*max(1.0-dst.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",cv="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",uv="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",hv="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb+src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",dv="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(2.0*src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",fv="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.xy,b.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",pv="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",mv="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-abs(1.0-dst.rgb-src.rgb),0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",gv="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,opacity);}",vv="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=2.0*src.rgb*dst.rgb;vec3 b=1.0-2.0*(1.0-src.rgb)*(1.0-dst.rgb);vec3 c=mix(a,b,step(0.5,dst.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",xv="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 c=mix(mix(src2,dst.rgb,step(0.5*dst.rgb,src.rgb)),max(src2-1.0,vec3(0.0)),step(dst.rgb,src2-1.0));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Mv="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb*dst.rgb/max(1.0-src.rgb,1e-9),1.0);vec3 c=mix(a,src.rgb,step(1.0,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Av="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.x,b.y,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Sv="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-min(dst.rgb*src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",wv="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 d=dst.rgb+(src2-1.0);vec3 w=step(0.5,src.rgb);vec3 a=dst.rgb-(1.0-src2)*dst.rgb*(1.0-dst.rgb);vec3 b=mix(d*(sqrt(dst.rgb)-dst.rgb),d*dst.rgb*((16.0*dst.rgb-12.0)*dst.rgb+3.0),w*(1.0-step(0.25,dst.rgb)));vec3 c=mix(a,b,w);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",yv="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return src;}",_v="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Ev="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=mix(max(1.0-min((1.0-dst.rgb)/(2.0*src.rgb),1.0),0.0),min(dst.rgb/(2.0*(1.0-src.rgb)),1.0),step(0.5,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Tv=new Map([[qe.ADD,Qg],[qe.ALPHA,qg],[qe.AVERAGE,Kg],[qe.COLOR,Jg],[qe.COLOR_BURN,jg],[qe.COLOR_DODGE,$g],[qe.DARKEN,ev],[qe.DIFFERENCE,tv],[qe.DIVIDE,nv],[qe.DST,null],[qe.EXCLUSION,iv],[qe.HARD_LIGHT,sv],[qe.HARD_MIX,rv],[qe.HUE,av],[qe.INVERT,ov],[qe.INVERT_RGB,lv],[qe.LIGHTEN,cv],[qe.LINEAR_BURN,uv],[qe.LINEAR_DODGE,hv],[qe.LINEAR_LIGHT,dv],[qe.LUMINOSITY,fv],[qe.MULTIPLY,pv],[qe.NEGATION,mv],[qe.NORMAL,gv],[qe.OVERLAY,vv],[qe.PIN_LIGHT,xv],[qe.REFLECT,Mv],[qe.SATURATION,Av],[qe.SCREEN,Sv],[qe.SOFT_LIGHT,wv],[qe.SRC,yv],[qe.SUBTRACT,_v],[qe.VIVID_LIGHT,Ev]]),bv=class extends On{constructor(n,e=1){super(),this._blendFunction=n,this.opacity=new Ie(e)}getOpacity(){return this.opacity.value}setOpacity(n){this.opacity.value=n}get blendFunction(){return this._blendFunction}set blendFunction(n){this._blendFunction=n,this.dispatchEvent({type:"change"})}getBlendFunction(){return this.blendFunction}setBlendFunction(n){this.blendFunction=n}getShaderCode(){return Tv.get(this.blendFunction)}},Cs=class extends On{constructor(n,e,{attributes:t=Mn.NONE,blendFunction:i=qe.NORMAL,defines:s=new Map,uniforms:r=new Map,extensions:a=null,vertexShader:o=null}={}){super(),this.name=n,this.renderer=null,this.attributes=t,this.fragmentShader=e,this.vertexShader=o,this.defines=s,this.uniforms=r,this.extensions=a,this.blendMode=new bv(i),this.blendMode.addEventListener("change",l=>this.setChanged()),this._inputColorSpace=jn,this._outputColorSpace=gn}get inputColorSpace(){return this._inputColorSpace}set inputColorSpace(n){this._inputColorSpace=n,this.setChanged()}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(n){this._outputColorSpace=n,this.setChanged()}set mainScene(n){}set mainCamera(n){}getName(){return this.name}setRenderer(n){this.renderer=n}getDefines(){return this.defines}getUniforms(){return this.uniforms}getExtensions(){return this.extensions}getBlendMode(){return this.blendMode}getAttributes(){return this.attributes}setAttributes(n){this.attributes=n,this.setChanged()}getFragmentShader(){return this.fragmentShader}setFragmentShader(n){this.fragmentShader=n,this.setChanged()}getVertexShader(){return this.vertexShader}setVertexShader(n){this.vertexShader=n,this.setChanged()}setChanged(){this.dispatchEvent({type:"change"})}setDepthTexture(n,e=xi){}update(n,e,t){}setSize(n,e){}initialize(n,e,t){}dispose(){for(const n of Object.keys(this)){const e=this[n];(e instanceof Mt||e instanceof zn||e instanceof wt||e instanceof en)&&this[n].dispose()}}},Uo={MEDIUM:2,LARGE:3},Cv=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec4 sum=texture2D(inputBuffer,vUv0);sum+=texture2D(inputBuffer,vUv1);sum+=texture2D(inputBuffer,vUv2);sum+=texture2D(inputBuffer,vUv3);gl_FragColor=sum*0.25;
#include <colorspace_fragment>
}`,Rv="uniform vec4 texelSize;uniform float kernel;uniform float scale;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec2 uv=position.xy*0.5+0.5;vec2 dUv=(texelSize.xy*vec2(kernel)+texelSize.zw)*scale;vUv0=vec2(uv.x-dUv.x,uv.y+dUv.y);vUv1=vec2(uv.x+dUv.x,uv.y+dUv.y);vUv2=vec2(uv.x+dUv.x,uv.y-dUv.y);vUv3=vec2(uv.x-dUv.x,uv.y-dUv.y);gl_Position=vec4(position.xy,1.0,1.0);}",Dv=[new Float32Array([0,0]),new Float32Array([0,1,1]),new Float32Array([0,1,1,2]),new Float32Array([0,1,2,2,3]),new Float32Array([0,1,2,3,4,4,5]),new Float32Array([0,1,2,3,4,5,7,8,9,10])],Pv=class extends xt{constructor(n=new at){super({name:"KawaseBlurMaterial",uniforms:{inputBuffer:new Ie(null),texelSize:new Ie(new at),scale:new Ie(1),kernel:new Ie(0)},blending:Ft,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:Cv,vertexShader:Rv}),this.setTexelSize(n.x,n.y),this.kernelSize=Uo.MEDIUM}set inputBuffer(n){this.uniforms.inputBuffer.value=n}setInputBuffer(n){this.inputBuffer=n}get kernelSequence(){return Dv[this.kernelSize]}get scale(){return this.uniforms.scale.value}set scale(n){this.uniforms.scale.value=n}getScale(){return this.uniforms.scale.value}setScale(n){this.uniforms.scale.value=n}getKernel(){return null}get kernel(){return this.uniforms.kernel.value}set kernel(n){this.uniforms.kernel.value=n}setKernel(n){this.kernel=n}setTexelSize(n,e){this.uniforms.texelSize.value.set(n,e,n*.5,e*.5)}setSize(n,e){const t=1/n,i=1/e;this.uniforms.texelSize.value.set(t,i,t*.5,i*.5)}},Iv=class extends en{constructor({kernelSize:n=Uo.MEDIUM,resolutionScale:e=.5,width:t=xn.AUTO_SIZE,height:i=xn.AUTO_SIZE,resolutionX:s=t,resolutionY:r=i}={}){super("KawaseBlurPass"),this.renderTargetA=new Mt(1,1,{depthBuffer:!1}),this.renderTargetA.texture.name="Blur.Target.A",this.renderTargetB=this.renderTargetA.clone(),this.renderTargetB.texture.name="Blur.Target.B";const a=this.resolution=new xn(this,s,r,e);a.addEventListener("change",o=>this.setSize(a.baseWidth,a.baseHeight)),this._blurMaterial=new Pv,this._blurMaterial.kernelSize=n,this.copyMaterial=new tu}getResolution(){return this.resolution}get blurMaterial(){return this._blurMaterial}set blurMaterial(n){this._blurMaterial=n}get dithering(){return this.copyMaterial.dithering}set dithering(n){this.copyMaterial.dithering=n}get kernelSize(){return this.blurMaterial.kernelSize}set kernelSize(n){this.blurMaterial.kernelSize=n}get width(){return this.resolution.width}set width(n){this.resolution.preferredWidth=n}get height(){return this.resolution.height}set height(n){this.resolution.preferredHeight=n}get scale(){return this.blurMaterial.scale}set scale(n){this.blurMaterial.scale=n}getScale(){return this.blurMaterial.scale}setScale(n){this.blurMaterial.scale=n}getKernelSize(){return this.kernelSize}setKernelSize(n){this.kernelSize=n}getResolutionScale(){return this.resolution.scale}setResolutionScale(n){this.resolution.scale=n}render(n,e,t,i,s){const r=this.scene,a=this.camera,o=this.renderTargetA,l=this.renderTargetB,c=this.blurMaterial,u=c.kernelSequence;let h=e;this.fullscreenMaterial=c;for(let d=0,f=u.length;d<f;++d){const m=(d&1)===0?o:l;c.kernel=u[d],c.inputBuffer=h.texture,n.setRenderTarget(m),n.render(r,a),h=m}this.fullscreenMaterial=this.copyMaterial,this.copyMaterial.inputBuffer=h.texture,n.setRenderTarget(this.renderToScreen?null:t),n.render(r,a)}setSize(n,e){const t=this.resolution;t.setBaseSize(n,e);const i=t.width,s=t.height;this.renderTargetA.setSize(i,s),this.renderTargetB.setSize(i,s),this.blurMaterial.setSize(n,e)}initialize(n,e,t){t!==void 0&&(this.renderTargetA.texture.type=t,this.renderTargetB.texture.type=t,t!==Lt?(this.blurMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1",this.copyMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1"):n!==null&&n.outputColorSpace===et&&(this.renderTargetA.texture.colorSpace=et,this.renderTargetB.texture.colorSpace=et))}static get AUTO_SIZE(){return xn.AUTO_SIZE}},Lv=`#include <common>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#ifdef RANGE
uniform vec2 range;
#elif defined(THRESHOLD)
uniform float threshold;uniform float smoothing;
#endif
varying vec2 vUv;void main(){vec4 texel=texture2D(inputBuffer,vUv);float l=luminance(texel.rgb);float mask=1.0;
#ifdef RANGE
float low=step(range.x,l);float high=step(l,range.y);mask=low*high;
#elif defined(THRESHOLD)
mask=smoothstep(threshold,threshold+smoothing,l);
#endif
#ifdef COLOR
gl_FragColor=texel*mask;
#else
gl_FragColor=vec4(l*mask);
#endif
}`,Bv=class extends xt{constructor(n=!1,e=null){super({name:"LuminanceMaterial",defines:{THREE_REVISION:vi.replace(/\D+/g,"")},uniforms:{inputBuffer:new Ie(null),threshold:new Ie(0),smoothing:new Ie(1),range:new Ie(null)},blending:Ft,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:Lv,vertexShader:Lo}),this.colorOutput=n,this.luminanceRange=e}set inputBuffer(n){this.uniforms.inputBuffer.value=n}setInputBuffer(n){this.uniforms.inputBuffer.value=n}get threshold(){return this.uniforms.threshold.value}set threshold(n){this.smoothing>0||n>0?this.defines.THRESHOLD="1":delete this.defines.THRESHOLD,this.uniforms.threshold.value=n}getThreshold(){return this.threshold}setThreshold(n){this.threshold=n}get smoothing(){return this.uniforms.smoothing.value}set smoothing(n){this.threshold>0||n>0?this.defines.THRESHOLD="1":delete this.defines.THRESHOLD,this.uniforms.smoothing.value=n}getSmoothingFactor(){return this.smoothing}setSmoothingFactor(n){this.smoothing=n}get useThreshold(){return this.threshold>0||this.smoothing>0}set useThreshold(n){}get colorOutput(){return this.defines.COLOR!==void 0}set colorOutput(n){n?this.defines.COLOR="1":delete this.defines.COLOR,this.needsUpdate=!0}isColorOutputEnabled(n){return this.colorOutput}setColorOutputEnabled(n){this.colorOutput=n}get useRange(){return this.luminanceRange!==null}set useRange(n){this.luminanceRange=null}get luminanceRange(){return this.uniforms.range.value}set luminanceRange(n){n!==null?this.defines.RANGE="1":delete this.defines.RANGE,this.uniforms.range.value=n,this.needsUpdate=!0}getLuminanceRange(){return this.luminanceRange}setLuminanceRange(n){this.luminanceRange=n}},iu=class extends en{constructor({renderTarget:n,luminanceRange:e,colorOutput:t,resolutionScale:i=1,width:s=xn.AUTO_SIZE,height:r=xn.AUTO_SIZE,resolutionX:a=s,resolutionY:o=r}={}){super("LuminancePass"),this.fullscreenMaterial=new Bv(t,e),this.needsSwap=!1,this.renderTarget=n,this.renderTarget===void 0&&(this.renderTarget=new Mt(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="LuminancePass.Target");const l=this.resolution=new xn(this,a,o,i);l.addEventListener("change",c=>this.setSize(l.baseWidth,l.baseHeight))}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}getResolution(){return this.resolution}render(n,e,t,i,s){const r=this.fullscreenMaterial;r.inputBuffer=e.texture,n.setRenderTarget(this.renderToScreen?null:this.renderTarget),n.render(this.scene,this.camera)}setSize(n,e){const t=this.resolution;t.setBaseSize(n,e),this.renderTarget.setSize(t.width,t.height)}initialize(n,e,t){t!==void 0&&t!==Lt&&(this.renderTarget.texture.type=t,this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}},Uv=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#define WEIGHT_INNER 0.125
#define WEIGHT_OUTER 0.05556
varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;float clampToBorder(const in vec2 uv){return float(uv.s>=0.0&&uv.s<=1.0&&uv.t>=0.0&&uv.t<=1.0);}void main(){vec4 c=vec4(0.0);vec4 w=WEIGHT_INNER*vec4(clampToBorder(vUv00),clampToBorder(vUv01),clampToBorder(vUv02),clampToBorder(vUv03));c+=w.x*texture2D(inputBuffer,vUv00);c+=w.y*texture2D(inputBuffer,vUv01);c+=w.z*texture2D(inputBuffer,vUv02);c+=w.w*texture2D(inputBuffer,vUv03);w=WEIGHT_OUTER*vec4(clampToBorder(vUv04),clampToBorder(vUv05),clampToBorder(vUv06),clampToBorder(vUv07));c+=w.x*texture2D(inputBuffer,vUv04);c+=w.y*texture2D(inputBuffer,vUv05);c+=w.z*texture2D(inputBuffer,vUv06);c+=w.w*texture2D(inputBuffer,vUv07);w=WEIGHT_OUTER*vec4(clampToBorder(vUv08),clampToBorder(vUv09),clampToBorder(vUv10),clampToBorder(vUv11));c+=w.x*texture2D(inputBuffer,vUv08);c+=w.y*texture2D(inputBuffer,vUv09);c+=w.z*texture2D(inputBuffer,vUv10);c+=w.w*texture2D(inputBuffer,vUv11);c+=WEIGHT_OUTER*texture2D(inputBuffer,vUv);gl_FragColor=c;
#include <colorspace_fragment>
}`,Fv="uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;void main(){vUv=position.xy*0.5+0.5;vUv00=vUv+texelSize*vec2(-1.0,1.0);vUv01=vUv+texelSize*vec2(1.0,1.0);vUv02=vUv+texelSize*vec2(-1.0,-1.0);vUv03=vUv+texelSize*vec2(1.0,-1.0);vUv04=vUv+texelSize*vec2(-2.0,2.0);vUv05=vUv+texelSize*vec2(0.0,2.0);vUv06=vUv+texelSize*vec2(2.0,2.0);vUv07=vUv+texelSize*vec2(-2.0,0.0);vUv08=vUv+texelSize*vec2(2.0,0.0);vUv09=vUv+texelSize*vec2(-2.0,-2.0);vUv10=vUv+texelSize*vec2(0.0,-2.0);vUv11=vUv+texelSize*vec2(2.0,-2.0);gl_Position=vec4(position.xy,1.0,1.0);}",Nv=class extends xt{constructor(){super({name:"DownsamplingMaterial",uniforms:{inputBuffer:new Ie(null),texelSize:new Ie(new de)},blending:Ft,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:Uv,vertexShader:Fv})}set inputBuffer(n){this.uniforms.inputBuffer.value=n}setSize(n,e){this.uniforms.texelSize.value.set(1/n,1/e)}},Ov=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;uniform mediump sampler2D supportBuffer;
#else
uniform lowp sampler2D inputBuffer;uniform lowp sampler2D supportBuffer;
#endif
uniform float radius;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vec4 c=vec4(0.0);c+=texture2D(inputBuffer,vUv0)*0.0625;c+=texture2D(inputBuffer,vUv1)*0.125;c+=texture2D(inputBuffer,vUv2)*0.0625;c+=texture2D(inputBuffer,vUv3)*0.125;c+=texture2D(inputBuffer,vUv)*0.25;c+=texture2D(inputBuffer,vUv4)*0.125;c+=texture2D(inputBuffer,vUv5)*0.0625;c+=texture2D(inputBuffer,vUv6)*0.125;c+=texture2D(inputBuffer,vUv7)*0.0625;vec4 baseColor=texture2D(supportBuffer,vUv);gl_FragColor=mix(baseColor,c,radius);
#include <colorspace_fragment>
}`,zv="uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vUv=position.xy*0.5+0.5;vUv0=vUv+texelSize*vec2(-1.0,1.0);vUv1=vUv+texelSize*vec2(0.0,1.0);vUv2=vUv+texelSize*vec2(1.0,1.0);vUv3=vUv+texelSize*vec2(-1.0,0.0);vUv4=vUv+texelSize*vec2(1.0,0.0);vUv5=vUv+texelSize*vec2(-1.0,-1.0);vUv6=vUv+texelSize*vec2(0.0,-1.0);vUv7=vUv+texelSize*vec2(1.0,-1.0);gl_Position=vec4(position.xy,1.0,1.0);}",kv=class extends xt{constructor(){super({name:"UpsamplingMaterial",uniforms:{inputBuffer:new Ie(null),supportBuffer:new Ie(null),texelSize:new Ie(new de),radius:new Ie(.85)},blending:Ft,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:Ov,vertexShader:zv})}set inputBuffer(n){this.uniforms.inputBuffer.value=n}set supportBuffer(n){this.uniforms.supportBuffer.value=n}get radius(){return this.uniforms.radius.value}set radius(n){this.uniforms.radius.value=n}setSize(n,e){this.uniforms.texelSize.value.set(1/n,1/e)}},Gv=class extends en{constructor(){super("MipmapBlurPass"),this.needsSwap=!1,this.renderTarget=new Mt(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="Upsampling.Mipmap0",this.downsamplingMipmaps=[],this.upsamplingMipmaps=[],this.downsamplingMaterial=new Nv,this.upsamplingMaterial=new kv,this.resolution=new de}get texture(){return this.renderTarget.texture}get levels(){return this.downsamplingMipmaps.length}set levels(n){if(this.levels!==n){const e=this.renderTarget;this.dispose(),this.downsamplingMipmaps=[],this.upsamplingMipmaps=[];for(let t=0;t<n;++t){const i=e.clone();i.texture.name="Downsampling.Mipmap"+t,this.downsamplingMipmaps.push(i)}this.upsamplingMipmaps.push(e);for(let t=1,i=n-1;t<i;++t){const s=e.clone();s.texture.name="Upsampling.Mipmap"+t,this.upsamplingMipmaps.push(s)}this.setSize(this.resolution.x,this.resolution.y)}}get radius(){return this.upsamplingMaterial.radius}set radius(n){this.upsamplingMaterial.radius=n}render(n,e,t,i,s){const{scene:r,camera:a}=this,{downsamplingMaterial:o,upsamplingMaterial:l}=this,{downsamplingMipmaps:c,upsamplingMipmaps:u}=this;let h=e;this.fullscreenMaterial=o;for(let d=0,f=c.length;d<f;++d){const m=c[d];o.setSize(h.width,h.height),o.inputBuffer=h.texture,n.setRenderTarget(m),n.render(r,a),h=m}this.fullscreenMaterial=l;for(let d=u.length-1;d>=0;--d){const f=u[d];l.setSize(h.width,h.height),l.inputBuffer=h.texture,l.supportBuffer=c[d].texture,n.setRenderTarget(f),n.render(r,a),h=f}}setSize(n,e){const t=this.resolution;t.set(n,e);let i=t.width,s=t.height;for(let r=0,a=this.downsamplingMipmaps.length;r<a;++r)i=Math.round(i*.5),s=Math.round(s*.5),this.downsamplingMipmaps[r].setSize(i,s),r<this.upsamplingMipmaps.length&&this.upsamplingMipmaps[r].setSize(i,s)}initialize(n,e,t){if(t!==void 0){const i=this.downsamplingMipmaps.concat(this.upsamplingMipmaps);for(const s of i)s.texture.type=t;if(t!==Lt)this.downsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1",this.upsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1";else if(n!==null&&n.outputColorSpace===et)for(const s of i)s.texture.colorSpace=et}}dispose(){super.dispose();for(const n of this.downsamplingMipmaps.concat(this.upsamplingMipmaps))n.dispose()}},Hv=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D map;
#else
uniform lowp sampler2D map;
#endif
uniform float intensity;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){outputColor=texture2D(map,uv)*intensity;}`,Vv=class extends Cs{constructor({blendFunction:n=qe.SCREEN,luminanceThreshold:e=1,luminanceSmoothing:t=.03,mipmapBlur:i=!0,intensity:s=1,radius:r=.85,levels:a=8,kernelSize:o=Uo.LARGE,resolutionScale:l=.5,width:c=xn.AUTO_SIZE,height:u=xn.AUTO_SIZE,resolutionX:h=c,resolutionY:d=u}={}){super("BloomEffect",Hv,{blendFunction:n,uniforms:new Map([["map",new Ie(null)],["intensity",new Ie(s)]])}),this.renderTarget=new Mt(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="Bloom.Target",this.blurPass=new Iv({kernelSize:o}),this.luminancePass=new iu({colorOutput:!0}),this.luminanceMaterial.threshold=e,this.luminanceMaterial.smoothing=t,this.mipmapBlurPass=new Gv,this.mipmapBlurPass.enabled=i,this.mipmapBlurPass.radius=r,this.mipmapBlurPass.levels=a,this.uniforms.get("map").value=i?this.mipmapBlurPass.texture:this.renderTarget.texture;const f=this.resolution=new xn(this,h,d,l);f.addEventListener("change",m=>this.setSize(f.baseWidth,f.baseHeight))}get texture(){return this.mipmapBlurPass.enabled?this.mipmapBlurPass.texture:this.renderTarget.texture}getTexture(){return this.texture}getResolution(){return this.resolution}getBlurPass(){return this.blurPass}getLuminancePass(){return this.luminancePass}get luminanceMaterial(){return this.luminancePass.fullscreenMaterial}getLuminanceMaterial(){return this.luminancePass.fullscreenMaterial}get width(){return this.resolution.width}set width(n){this.resolution.preferredWidth=n}get height(){return this.resolution.height}set height(n){this.resolution.preferredHeight=n}get dithering(){return this.blurPass.dithering}set dithering(n){this.blurPass.dithering=n}get kernelSize(){return this.blurPass.kernelSize}set kernelSize(n){this.blurPass.kernelSize=n}get distinction(){return console.warn(this.name,"distinction was removed"),1}set distinction(n){console.warn(this.name,"distinction was removed")}get intensity(){return this.uniforms.get("intensity").value}set intensity(n){this.uniforms.get("intensity").value=n}getIntensity(){return this.intensity}setIntensity(n){this.intensity=n}getResolutionScale(){return this.resolution.scale}setResolutionScale(n){this.resolution.scale=n}update(n,e,t){const i=this.renderTarget,s=this.luminancePass;s.enabled?(s.render(n,e),this.mipmapBlurPass.enabled?this.mipmapBlurPass.render(n,s.renderTarget):this.blurPass.render(n,s.renderTarget,i)):this.mipmapBlurPass.enabled?this.mipmapBlurPass.render(n,e):this.blurPass.render(n,e,i)}setSize(n,e){const t=this.resolution;t.setBaseSize(n,e),this.renderTarget.setSize(t.width,t.height),this.blurPass.resolution.copy(t),this.luminancePass.setSize(n,e),this.mipmapBlurPass.setSize(n,e)}initialize(n,e,t){this.blurPass.initialize(n,e,t),this.luminancePass.initialize(n,e,t),this.mipmapBlurPass.initialize(n,e,t),t!==void 0&&(this.renderTarget.texture.type=t,n!==null&&n.outputColorSpace===et&&(this.renderTarget.texture.colorSpace=et))}},lc=class extends en{constructor(n,e="inputBuffer"){super("ShaderPass"),this.fullscreenMaterial=n,this.input=e}setInput(n){this.input=n}render(n,e,t,i,s){const r=this.fullscreenMaterial.uniforms;e!==null&&r!==void 0&&r[this.input]!==void 0&&(r[this.input].value=e.texture),n.setRenderTarget(this.renderToScreen?null:t),n.render(this.scene,this.camera)}initialize(n,e,t){t!==void 0&&t!==Lt&&(this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}},Wv=class extends en{constructor(n,e,t=null){super("RenderPass",n,e),this.needsSwap=!1,this.needsDepthBlit=!0,this.clearPass=new Bo,this.overrideMaterialManager=t===null?null:new oc(t),this.ignoreBackground=!1,this.skipShadowMapUpdate=!1,this.selection=null}set mainScene(n){this.scene=n}set mainCamera(n){this.camera=n}get renderToScreen(){return super.renderToScreen}set renderToScreen(n){super.renderToScreen=n,this.clearPass.renderToScreen=n}get overrideMaterial(){const n=this.overrideMaterialManager;return n!==null?n.material:null}set overrideMaterial(n){const e=this.overrideMaterialManager;n!==null?e!==null?e.setMaterial(n):this.overrideMaterialManager=new oc(n):e!==null&&(e.dispose(),this.overrideMaterialManager=null)}getOverrideMaterial(){return this.overrideMaterial}setOverrideMaterial(n){this.overrideMaterial=n}get clear(){return this.clearPass.enabled}set clear(n){this.clearPass.enabled=n}getSelection(){return this.selection}setSelection(n){this.selection=n}isBackgroundDisabled(){return this.ignoreBackground}setBackgroundDisabled(n){this.ignoreBackground=n}isShadowMapDisabled(){return this.skipShadowMapUpdate}setShadowMapDisabled(n){this.skipShadowMapUpdate=n}getClearPass(){return this.clearPass}render(n,e,t,i,s){const r=this.scene,a=this.camera,o=this.selection,l=a.layers.mask,c=r.background,u=n.shadowMap.autoUpdate,h=this.renderToScreen?null:e;o!==null&&a.layers.set(o.getLayer()),this.skipShadowMapUpdate&&(n.shadowMap.autoUpdate=!1),(this.ignoreBackground||this.clearPass.overrideClearColor!==null)&&(r.background=null),this.clearPass.enabled&&this.clearPass.render(n,e),n.setRenderTarget(h),this.overrideMaterialManager!==null?this.overrideMaterialManager.render(n,r,a):n.render(r,a),a.layers.mask=l,r.background=c,n.shadowMap.autoUpdate=u}},su={COLOR:2},Yv={DISABLED:0},hs={LOW:0,MEDIUM:1,HIGH:2,ULTRA:3},Xt={LINEAR:0,REINHARD:1,REINHARD2:2,REINHARD2_ADAPTIVE:3,OPTIMIZED_CINEON:5,CINEON:5,ACES_FILMIC:6,AGX:7,NEUTRAL:8},Xv=`varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;
#if EDGE_DETECTION_MODE != 0
varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;
#endif
#if EDGE_DETECTION_MODE == 1
#include <common>
#endif
#if EDGE_DETECTION_MODE == 0 || PREDICATION_MODE == 1
#ifdef GL_FRAGMENT_PRECISION_HIGH
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
return unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
return texture2D(depthBuffer,uv).r;
#endif
}vec3 gatherNeighbors(){float p=readDepth(vUv);float pLeft=readDepth(vUv0);float pTop=readDepth(vUv1);return vec3(p,pLeft,pTop);}
#elif PREDICATION_MODE == 2
uniform sampler2D predicationBuffer;vec3 gatherNeighbors(){float p=texture2D(predicationBuffer,vUv).r;float pLeft=texture2D(predicationBuffer,vUv0).r;float pTop=texture2D(predicationBuffer,vUv1).r;return vec3(p,pLeft,pTop);}
#endif
#if PREDICATION_MODE != 0
vec2 calculatePredicatedThreshold(){vec3 neighbours=gatherNeighbors();vec2 delta=abs(neighbours.xx-neighbours.yz);vec2 edges=step(PREDICATION_THRESHOLD,delta);return PREDICATION_SCALE*EDGE_THRESHOLD*(1.0-PREDICATION_STRENGTH*edges);}
#endif
#if EDGE_DETECTION_MODE != 0
uniform sampler2D inputBuffer;
#endif
void main(){
#if EDGE_DETECTION_MODE == 0
const vec2 threshold=vec2(DEPTH_THRESHOLD);
#elif PREDICATION_MODE != 0
vec2 threshold=calculatePredicatedThreshold();
#else
const vec2 threshold=vec2(EDGE_THRESHOLD);
#endif
#if EDGE_DETECTION_MODE == 0
vec3 neighbors=gatherNeighbors();vec2 delta=abs(neighbors.xx-vec2(neighbors.y,neighbors.z));vec2 edges=step(threshold,delta);if(dot(edges,vec2(1.0))==0.0){discard;}gl_FragColor=vec4(edges,0.0,1.0);
#elif EDGE_DETECTION_MODE == 1
float l=luminance(texture2D(inputBuffer,vUv).rgb);float lLeft=luminance(texture2D(inputBuffer,vUv0).rgb);float lTop=luminance(texture2D(inputBuffer,vUv1).rgb);vec4 delta;delta.xy=abs(l-vec2(lLeft,lTop));vec2 edges=step(threshold,delta.xy);if(dot(edges,vec2(1.0))==0.0){discard;}float lRight=luminance(texture2D(inputBuffer,vUv2).rgb);float lBottom=luminance(texture2D(inputBuffer,vUv3).rgb);delta.zw=abs(l-vec2(lRight,lBottom));vec2 maxDelta=max(delta.xy,delta.zw);float lLeftLeft=luminance(texture2D(inputBuffer,vUv4).rgb);float lTopTop=luminance(texture2D(inputBuffer,vUv5).rgb);delta.zw=abs(vec2(lLeft,lTop)-vec2(lLeftLeft,lTopTop));maxDelta=max(maxDelta.xy,delta.zw);float finalDelta=max(maxDelta.x,maxDelta.y);edges.xy*=step(finalDelta,LOCAL_CONTRAST_ADAPTATION_FACTOR*delta.xy);gl_FragColor=vec4(edges,0.0,1.0);
#elif EDGE_DETECTION_MODE == 2
vec4 delta;vec3 c=texture2D(inputBuffer,vUv).rgb;vec3 cLeft=texture2D(inputBuffer,vUv0).rgb;vec3 t=abs(c-cLeft);delta.x=max(max(t.r,t.g),t.b);vec3 cTop=texture2D(inputBuffer,vUv1).rgb;t=abs(c-cTop);delta.y=max(max(t.r,t.g),t.b);vec2 edges=step(threshold,delta.xy);if(dot(edges,vec2(1.0))==0.0){discard;}vec3 cRight=texture2D(inputBuffer,vUv2).rgb;t=abs(c-cRight);delta.z=max(max(t.r,t.g),t.b);vec3 cBottom=texture2D(inputBuffer,vUv3).rgb;t=abs(c-cBottom);delta.w=max(max(t.r,t.g),t.b);vec2 maxDelta=max(delta.xy,delta.zw);vec3 cLeftLeft=texture2D(inputBuffer,vUv4).rgb;t=abs(c-cLeftLeft);delta.z=max(max(t.r,t.g),t.b);vec3 cTopTop=texture2D(inputBuffer,vUv5).rgb;t=abs(c-cTopTop);delta.w=max(max(t.r,t.g),t.b);maxDelta=max(maxDelta.xy,delta.zw);float finalDelta=max(maxDelta.x,maxDelta.y);edges*=step(finalDelta,LOCAL_CONTRAST_ADAPTATION_FACTOR*delta.xy);gl_FragColor=vec4(edges,0.0,1.0);
#endif
}`,Zv=`uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;
#if EDGE_DETECTION_MODE != 0
varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;
#endif
void main(){vUv=position.xy*0.5+0.5;vUv0=vUv+texelSize*vec2(-1.0,0.0);vUv1=vUv+texelSize*vec2(0.0,-1.0);
#if EDGE_DETECTION_MODE != 0
vUv2=vUv+texelSize*vec2(1.0,0.0);vUv3=vUv+texelSize*vec2(0.0,1.0);vUv4=vUv+texelSize*vec2(-2.0,0.0);vUv5=vUv+texelSize*vec2(0.0,-2.0);
#endif
gl_Position=vec4(position.xy,1.0,1.0);}`,Qv=class extends xt{constructor(n=new de,e=su.COLOR){super({name:"EdgeDetectionMaterial",defines:{THREE_REVISION:vi.replace(/\D+/g,""),LOCAL_CONTRAST_ADAPTATION_FACTOR:"2.0",EDGE_THRESHOLD:"0.1",DEPTH_THRESHOLD:"0.01",PREDICATION_MODE:"0",PREDICATION_THRESHOLD:"0.01",PREDICATION_SCALE:"2.0",PREDICATION_STRENGTH:"1.0",DEPTH_PACKING:"0"},uniforms:{inputBuffer:new Ie(null),depthBuffer:new Ie(null),predicationBuffer:new Ie(null),texelSize:new Ie(n)},blending:Ft,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:Xv,vertexShader:Zv}),this.edgeDetectionMode=e}set depthBuffer(n){this.uniforms.depthBuffer.value=n}set depthPacking(n){this.defines.DEPTH_PACKING=n.toFixed(0),this.needsUpdate=!0}setDepthBuffer(n,e=xi){this.depthBuffer=n,this.depthPacking=e}get edgeDetectionMode(){return Number(this.defines.EDGE_DETECTION_MODE)}set edgeDetectionMode(n){this.defines.EDGE_DETECTION_MODE=n.toFixed(0),this.needsUpdate=!0}getEdgeDetectionMode(){return this.edgeDetectionMode}setEdgeDetectionMode(n){this.edgeDetectionMode=n}get localContrastAdaptationFactor(){return Number(this.defines.LOCAL_CONTRAST_ADAPTATION_FACTOR)}set localContrastAdaptationFactor(n){this.defines.LOCAL_CONTRAST_ADAPTATION_FACTOR=n.toFixed("6"),this.needsUpdate=!0}getLocalContrastAdaptationFactor(){return this.localContrastAdaptationFactor}setLocalContrastAdaptationFactor(n){this.localContrastAdaptationFactor=n}get edgeDetectionThreshold(){return Number(this.defines.EDGE_THRESHOLD)}set edgeDetectionThreshold(n){this.defines.EDGE_THRESHOLD=n.toFixed("6"),this.defines.DEPTH_THRESHOLD=(n*.1).toFixed("6"),this.needsUpdate=!0}getEdgeDetectionThreshold(){return this.edgeDetectionThreshold}setEdgeDetectionThreshold(n){this.edgeDetectionThreshold=n}get predicationMode(){return Number(this.defines.PREDICATION_MODE)}set predicationMode(n){this.defines.PREDICATION_MODE=n.toFixed(0),this.needsUpdate=!0}getPredicationMode(){return this.predicationMode}setPredicationMode(n){this.predicationMode=n}set predicationBuffer(n){this.uniforms.predicationBuffer.value=n}setPredicationBuffer(n){this.uniforms.predicationBuffer.value=n}get predicationThreshold(){return Number(this.defines.PREDICATION_THRESHOLD)}set predicationThreshold(n){this.defines.PREDICATION_THRESHOLD=n.toFixed("6"),this.needsUpdate=!0}getPredicationThreshold(){return this.predicationThreshold}setPredicationThreshold(n){this.predicationThreshold=n}get predicationScale(){return Number(this.defines.PREDICATION_SCALE)}set predicationScale(n){this.defines.PREDICATION_SCALE=n.toFixed("6"),this.needsUpdate=!0}getPredicationScale(){return this.predicationScale}setPredicationScale(n){this.predicationScale=n}get predicationStrength(){return Number(this.defines.PREDICATION_STRENGTH)}set predicationStrength(n){this.defines.PREDICATION_STRENGTH=n.toFixed("6"),this.needsUpdate=!0}getPredicationStrength(){return this.predicationStrength}setPredicationStrength(n){this.predicationStrength=n}setSize(n,e){this.uniforms.texelSize.value.set(1/n,1/e)}},qv=`#define sampleLevelZeroOffset(t, coord, offset) texture2D(t, coord + offset * texelSize)
#if __VERSION__ < 300
#define round(v) floor(v + 0.5)
#endif
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
uniform lowp sampler2D areaTexture;uniform lowp sampler2D searchTexture;uniform vec2 texelSize;uniform vec2 resolution;varying vec2 vUv;varying vec4 vOffset[3];varying vec2 vPixCoord;void movec(const in bvec2 c,inout vec2 variable,const in vec2 value){if(c.x){variable.x=value.x;}if(c.y){variable.y=value.y;}}void movec(const in bvec4 c,inout vec4 variable,const in vec4 value){movec(c.xy,variable.xy,value.xy);movec(c.zw,variable.zw,value.zw);}vec2 decodeDiagBilinearAccess(in vec2 e){e.r=e.r*abs(5.0*e.r-5.0*0.75);return round(e);}vec4 decodeDiagBilinearAccess(in vec4 e){e.rb=e.rb*abs(5.0*e.rb-5.0*0.75);return round(e);}vec2 searchDiag1(const in vec2 texCoord,const in vec2 dir,out vec2 e){vec4 coord=vec4(texCoord,-1.0,1.0);vec3 t=vec3(texelSize,1.0);for(int i=0;i<MAX_SEARCH_STEPS_INT;++i){if(!(coord.z<float(MAX_SEARCH_STEPS_DIAG_INT-1)&&coord.w>0.9)){break;}coord.xyz=t*vec3(dir,1.0)+coord.xyz;e=texture2D(inputBuffer,coord.xy).rg;coord.w=dot(e,vec2(0.5));}return coord.zw;}vec2 searchDiag2(const in vec2 texCoord,const in vec2 dir,out vec2 e){vec4 coord=vec4(texCoord,-1.0,1.0);coord.x+=0.25*texelSize.x;vec3 t=vec3(texelSize,1.0);for(int i=0;i<MAX_SEARCH_STEPS_INT;++i){if(!(coord.z<float(MAX_SEARCH_STEPS_DIAG_INT-1)&&coord.w>0.9)){break;}coord.xyz=t*vec3(dir,1.0)+coord.xyz;e=texture2D(inputBuffer,coord.xy).rg;e=decodeDiagBilinearAccess(e);coord.w=dot(e,vec2(0.5));}return coord.zw;}vec2 areaDiag(const in vec2 dist,const in vec2 e,const in float offset){vec2 texCoord=vec2(AREATEX_MAX_DISTANCE_DIAG,AREATEX_MAX_DISTANCE_DIAG)*e+dist;texCoord=AREATEX_PIXEL_SIZE*texCoord+0.5*AREATEX_PIXEL_SIZE;texCoord.x+=0.5;texCoord.y+=AREATEX_SUBTEX_SIZE*offset;return texture2D(areaTexture,texCoord).rg;}vec2 calculateDiagWeights(const in vec2 texCoord,const in vec2 e,const in vec4 subsampleIndices){vec2 weights=vec2(0.0);vec4 d;vec2 end;if(e.r>0.0){d.xz=searchDiag1(texCoord,vec2(-1.0,1.0),end);d.x+=float(end.y>0.9);}else{d.xz=vec2(0.0);}d.yw=searchDiag1(texCoord,vec2(1.0,-1.0),end);if(d.x+d.y>2.0){vec4 coords=vec4(-d.x+0.25,d.x,d.y,-d.y-0.25)*texelSize.xyxy+texCoord.xyxy;vec4 c;c.xy=sampleLevelZeroOffset(inputBuffer,coords.xy,vec2(-1,0)).rg;c.zw=sampleLevelZeroOffset(inputBuffer,coords.zw,vec2(1,0)).rg;c.yxwz=decodeDiagBilinearAccess(c.xyzw);vec2 cc=vec2(2.0)*c.xz+c.yw;movec(bvec2(step(0.9,d.zw)),cc,vec2(0.0));weights+=areaDiag(d.xy,cc,subsampleIndices.z);}d.xz=searchDiag2(texCoord,vec2(-1.0,-1.0),end);if(sampleLevelZeroOffset(inputBuffer,texCoord,vec2(1,0)).r>0.0){d.yw=searchDiag2(texCoord,vec2(1.0),end);d.y+=float(end.y>0.9);}else{d.yw=vec2(0.0);}if(d.x+d.y>2.0){vec4 coords=vec4(-d.x,-d.x,d.y,d.y)*texelSize.xyxy+texCoord.xyxy;vec4 c;c.x=sampleLevelZeroOffset(inputBuffer,coords.xy,vec2(-1,0)).g;c.y=sampleLevelZeroOffset(inputBuffer,coords.xy,vec2(0,-1)).r;c.zw=sampleLevelZeroOffset(inputBuffer,coords.zw,vec2(1,0)).gr;vec2 cc=vec2(2.0)*c.xz+c.yw;movec(bvec2(step(0.9,d.zw)),cc,vec2(0.0));weights+=areaDiag(d.xy,cc,subsampleIndices.w).gr;}return weights;}float searchLength(const in vec2 e,const in float offset){vec2 scale=SEARCHTEX_SIZE*vec2(0.5,-1.0);vec2 bias=SEARCHTEX_SIZE*vec2(offset,1.0);scale+=vec2(-1.0,1.0);bias+=vec2(0.5,-0.5);scale*=1.0/SEARCHTEX_PACKED_SIZE;bias*=1.0/SEARCHTEX_PACKED_SIZE;return texture2D(searchTexture,scale*e+bias).r;}float searchXLeft(in vec2 texCoord,const in float end){vec2 e=vec2(0.0,1.0);for(int i=0;i<MAX_SEARCH_STEPS_INT;++i){if(!(texCoord.x>end&&e.g>0.8281&&e.r==0.0)){break;}e=texture2D(inputBuffer,texCoord).rg;texCoord=vec2(-2.0,0.0)*texelSize+texCoord;}float offset=-(255.0/127.0)*searchLength(e,0.0)+3.25;return texelSize.x*offset+texCoord.x;}float searchXRight(vec2 texCoord,const in float end){vec2 e=vec2(0.0,1.0);for(int i=0;i<MAX_SEARCH_STEPS_INT;++i){if(!(texCoord.x<end&&e.g>0.8281&&e.r==0.0)){break;}e=texture2D(inputBuffer,texCoord).rg;texCoord=vec2(2.0,0.0)*texelSize.xy+texCoord;}float offset=-(255.0/127.0)*searchLength(e,0.5)+3.25;return-texelSize.x*offset+texCoord.x;}float searchYUp(vec2 texCoord,const in float end){vec2 e=vec2(1.0,0.0);for(int i=0;i<MAX_SEARCH_STEPS_INT;++i){if(!(texCoord.y>end&&e.r>0.8281&&e.g==0.0)){break;}e=texture2D(inputBuffer,texCoord).rg;texCoord=-vec2(0.0,2.0)*texelSize.xy+texCoord;}float offset=-(255.0/127.0)*searchLength(e.gr,0.0)+3.25;return texelSize.y*offset+texCoord.y;}float searchYDown(vec2 texCoord,const in float end){vec2 e=vec2(1.0,0.0);for(int i=0;i<MAX_SEARCH_STEPS_INT;i++){if(!(texCoord.y<end&&e.r>0.8281&&e.g==0.0)){break;}e=texture2D(inputBuffer,texCoord).rg;texCoord=vec2(0.0,2.0)*texelSize.xy+texCoord;}float offset=-(255.0/127.0)*searchLength(e.gr,0.5)+3.25;return-texelSize.y*offset+texCoord.y;}vec2 area(const in vec2 dist,const in float e1,const in float e2,const in float offset){vec2 texCoord=vec2(AREATEX_MAX_DISTANCE)*round(4.0*vec2(e1,e2))+dist;texCoord=AREATEX_PIXEL_SIZE*texCoord+0.5*AREATEX_PIXEL_SIZE;texCoord.y=AREATEX_SUBTEX_SIZE*offset+texCoord.y;return texture2D(areaTexture,texCoord).rg;}void detectHorizontalCornerPattern(inout vec2 weights,const in vec4 texCoord,const in vec2 d){
#if !defined(DISABLE_CORNER_DETECTION)
vec2 leftRight=step(d.xy,d.yx);vec2 rounding=(1.0-CORNER_ROUNDING_NORM)*leftRight;rounding/=leftRight.x+leftRight.y;vec2 factor=vec2(1.0);factor.x-=rounding.x*sampleLevelZeroOffset(inputBuffer,texCoord.xy,vec2(0,1)).r;factor.x-=rounding.y*sampleLevelZeroOffset(inputBuffer,texCoord.zw,vec2(1,1)).r;factor.y-=rounding.x*sampleLevelZeroOffset(inputBuffer,texCoord.xy,vec2(0,-2)).r;factor.y-=rounding.y*sampleLevelZeroOffset(inputBuffer,texCoord.zw,vec2(1,-2)).r;weights*=clamp(factor,0.0,1.0);
#endif
}void detectVerticalCornerPattern(inout vec2 weights,const in vec4 texCoord,const in vec2 d){
#if !defined(DISABLE_CORNER_DETECTION)
vec2 leftRight=step(d.xy,d.yx);vec2 rounding=(1.0-CORNER_ROUNDING_NORM)*leftRight;rounding/=leftRight.x+leftRight.y;vec2 factor=vec2(1.0);factor.x-=rounding.x*sampleLevelZeroOffset(inputBuffer,texCoord.xy,vec2(1,0)).g;factor.x-=rounding.y*sampleLevelZeroOffset(inputBuffer,texCoord.zw,vec2(1,1)).g;factor.y-=rounding.x*sampleLevelZeroOffset(inputBuffer,texCoord.xy,vec2(-2,0)).g;factor.y-=rounding.y*sampleLevelZeroOffset(inputBuffer,texCoord.zw,vec2(-2,1)).g;weights*=clamp(factor,0.0,1.0);
#endif
}void main(){vec4 weights=vec4(0.0);vec4 subsampleIndices=vec4(0.0);vec2 e=texture2D(inputBuffer,vUv).rg;if(e.g>0.0){
#if !defined(DISABLE_DIAG_DETECTION)
weights.rg=calculateDiagWeights(vUv,e,subsampleIndices);if(weights.r==-weights.g){
#endif
vec2 d;vec3 coords;coords.x=searchXLeft(vOffset[0].xy,vOffset[2].x);coords.y=vOffset[1].y;d.x=coords.x;float e1=texture2D(inputBuffer,coords.xy).r;coords.z=searchXRight(vOffset[0].zw,vOffset[2].y);d.y=coords.z;d=round(resolution.xx*d+-vPixCoord.xx);vec2 sqrtD=sqrt(abs(d));float e2=sampleLevelZeroOffset(inputBuffer,coords.zy,vec2(1,0)).r;weights.rg=area(sqrtD,e1,e2,subsampleIndices.y);coords.y=vUv.y;detectHorizontalCornerPattern(weights.rg,coords.xyzy,d);
#if !defined(DISABLE_DIAG_DETECTION)
}else{e.r=0.0;}
#endif
}if(e.r>0.0){vec2 d;vec3 coords;coords.y=searchYUp(vOffset[1].xy,vOffset[2].z);coords.x=vOffset[0].x;d.x=coords.y;float e1=texture2D(inputBuffer,coords.xy).g;coords.z=searchYDown(vOffset[1].zw,vOffset[2].w);d.y=coords.z;d=round(resolution.yy*d-vPixCoord.yy);vec2 sqrtD=sqrt(abs(d));float e2=sampleLevelZeroOffset(inputBuffer,coords.xz,vec2(0,1)).g;weights.ba=area(sqrtD,e1,e2,subsampleIndices.x);coords.x=vUv.x;detectVerticalCornerPattern(weights.ba,coords.xyxz,d);}gl_FragColor=weights;}`,Kv="uniform vec2 texelSize;uniform vec2 resolution;varying vec2 vUv;varying vec4 vOffset[3];varying vec2 vPixCoord;void main(){vUv=position.xy*0.5+0.5;vPixCoord=vUv*resolution;vOffset[0]=vUv.xyxy+texelSize.xyxy*vec4(-0.25,-0.125,1.25,-0.125);vOffset[1]=vUv.xyxy+texelSize.xyxy*vec4(-0.125,-0.25,-0.125,1.25);vOffset[2]=vec4(vOffset[0].xz,vOffset[1].yw)+vec4(-2.0,2.0,-2.0,2.0)*texelSize.xxyy*MAX_SEARCH_STEPS_FLOAT;gl_Position=vec4(position.xy,1.0,1.0);}",Jv=class extends xt{constructor(n=new de,e=new de){super({name:"SMAAWeightsMaterial",defines:{MAX_SEARCH_STEPS_INT:"16",MAX_SEARCH_STEPS_FLOAT:"16.0",MAX_SEARCH_STEPS_DIAG_INT:"8",MAX_SEARCH_STEPS_DIAG_FLOAT:"8.0",CORNER_ROUNDING:"25",CORNER_ROUNDING_NORM:"0.25",AREATEX_MAX_DISTANCE:"16.0",AREATEX_MAX_DISTANCE_DIAG:"20.0",AREATEX_PIXEL_SIZE:"(1.0 / vec2(160.0, 560.0))",AREATEX_SUBTEX_SIZE:"(1.0 / 7.0)",SEARCHTEX_SIZE:"vec2(66.0, 33.0)",SEARCHTEX_PACKED_SIZE:"vec2(64.0, 16.0)"},uniforms:{inputBuffer:new Ie(null),searchTexture:new Ie(null),areaTexture:new Ie(null),resolution:new Ie(e),texelSize:new Ie(n)},blending:Ft,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:qv,vertexShader:Kv})}set inputBuffer(n){this.uniforms.inputBuffer.value=n}setInputBuffer(n){this.uniforms.inputBuffer.value=n}get searchTexture(){return this.uniforms.searchTexture.value}set searchTexture(n){this.uniforms.searchTexture.value=n}get areaTexture(){return this.uniforms.areaTexture.value}set areaTexture(n){this.uniforms.areaTexture.value=n}setLookupTextures(n,e){this.searchTexture=n,this.areaTexture=e}get orthogonalSearchSteps(){return Number(this.defines.MAX_SEARCH_STEPS_INT)}set orthogonalSearchSteps(n){const e=Math.min(Math.max(n,0),112);this.defines.MAX_SEARCH_STEPS_INT=e.toFixed("0"),this.defines.MAX_SEARCH_STEPS_FLOAT=e.toFixed("1"),this.needsUpdate=!0}setOrthogonalSearchSteps(n){this.orthogonalSearchSteps=n}get diagonalSearchSteps(){return Number(this.defines.MAX_SEARCH_STEPS_DIAG_INT)}set diagonalSearchSteps(n){const e=Math.min(Math.max(n,0),20);this.defines.MAX_SEARCH_STEPS_DIAG_INT=e.toFixed("0"),this.defines.MAX_SEARCH_STEPS_DIAG_FLOAT=e.toFixed("1"),this.needsUpdate=!0}setDiagonalSearchSteps(n){this.diagonalSearchSteps=n}get diagonalDetection(){return this.defines.DISABLE_DIAG_DETECTION===void 0}set diagonalDetection(n){n?delete this.defines.DISABLE_DIAG_DETECTION:this.defines.DISABLE_DIAG_DETECTION="1",this.needsUpdate=!0}isDiagonalDetectionEnabled(){return this.diagonalDetection}setDiagonalDetectionEnabled(n){this.diagonalDetection=n}get cornerRounding(){return Number(this.defines.CORNER_ROUNDING)}set cornerRounding(n){const e=Math.min(Math.max(n,0),100);this.defines.CORNER_ROUNDING=e.toFixed("4"),this.defines.CORNER_ROUNDING_NORM=(e/100).toFixed("4"),this.needsUpdate=!0}setCornerRounding(n){this.cornerRounding=n}get cornerDetection(){return this.defines.DISABLE_CORNER_DETECTION===void 0}set cornerDetection(n){n?delete this.defines.DISABLE_CORNER_DETECTION:this.defines.DISABLE_CORNER_DETECTION="1",this.needsUpdate=!0}isCornerRoundingEnabled(){return this.cornerDetection}setCornerRoundingEnabled(n){this.cornerDetection=n}setSize(n,e){const t=this.uniforms;t.texelSize.value.set(1/n,1/e),t.resolution.value.set(n,e)}},cc="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAAQCAYAAACm53kpAAAAeElEQVRYR+2XSwqAMAxEJ168ePEqwRSKhIIiuHjJqiU0gWE+1CQdApcVAMUAuARaMGCX1MIL/Ow13++9lW2s3mW9MWvsnWc/2fvGygwPAN4E8QzAA4CXAB6AHjG4JTHYI1ey3pcx6FHnEfhLDOIBKAmUBK6/ANUDTlROXAHd9EC1AAAAAElFTkSuQmCC",uc="data:image/png;base64,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",jv="uniform sampler2D weightMap;varying vec2 vOffset0;varying vec2 vOffset1;void movec(const in bvec2 c,inout vec2 variable,const in vec2 value){if(c.x){variable.x=value.x;}if(c.y){variable.y=value.y;}}void movec(const in bvec4 c,inout vec4 variable,const in vec4 value){movec(c.xy,variable.xy,value.xy);movec(c.zw,variable.zw,value.zw);}void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){vec4 a;a.x=texture2D(weightMap,vOffset0).a;a.y=texture2D(weightMap,vOffset1).g;a.wz=texture2D(weightMap,uv).rb;vec4 color=inputColor;if(dot(a,vec4(1.0))>=1e-5){bool h=max(a.x,a.z)>max(a.y,a.w);vec4 blendingOffset=vec4(0.0,a.y,0.0,a.w);vec2 blendingWeight=a.yw;movec(bvec4(h),blendingOffset,vec4(a.x,0.0,a.z,0.0));movec(bvec2(h),blendingWeight,a.xz);blendingWeight/=dot(blendingWeight,vec2(1.0));vec4 blendingCoord=blendingOffset*vec4(texelSize,-texelSize)+uv.xyxy;color=blendingWeight.x*texture2D(inputBuffer,blendingCoord.xy);color+=blendingWeight.y*texture2D(inputBuffer,blendingCoord.zw);}outputColor=color;}",$v="varying vec2 vOffset0;varying vec2 vOffset1;void mainSupport(const in vec2 uv){vOffset0=uv+texelSize*vec2(1.0,0.0);vOffset1=uv+texelSize*vec2(0.0,1.0);}",ex=class extends Cs{constructor({blendFunction:n=qe.SRC,preset:e=hs.MEDIUM,edgeDetectionMode:t=su.COLOR,predicationMode:i=Yv.DISABLED}={}){super("SMAAEffect",jv,{vertexShader:$v,blendFunction:n,attributes:Mn.CONVOLUTION|Mn.DEPTH,uniforms:new Map([["weightMap",new Ie(null)]])});let s,r;arguments.length>1&&(s=arguments[0],r=arguments[1],arguments.length>2&&(e=arguments[2]),arguments.length>3&&(t=arguments[3])),this.renderTargetEdges=new Mt(1,1,{depthBuffer:!1}),this.renderTargetEdges.texture.name="SMAA.Edges",this.renderTargetWeights=this.renderTargetEdges.clone(),this.renderTargetWeights.texture.name="SMAA.Weights",this.uniforms.get("weightMap").value=this.renderTargetWeights.texture,this.clearPass=new Bo(!0,!1,!1),this.clearPass.overrideClearColor=new Te(0),this.clearPass.overrideClearAlpha=1,this.edgeDetectionPass=new lc(new Qv),this.edgeDetectionMaterial.edgeDetectionMode=t,this.edgeDetectionMaterial.predicationMode=i,this.weightsPass=new lc(new Jv);const a=new cg;a.onLoad=()=>{const o=new wt(s);o.name="SMAA.Search",o.magFilter=Nt,o.minFilter=Nt,o.generateMipmaps=!1,o.needsUpdate=!0,o.flipY=!0,this.weightsMaterial.searchTexture=o;const l=new wt(r);l.name="SMAA.Area",l.magFilter=ut,l.minFilter=ut,l.generateMipmaps=!1,l.needsUpdate=!0,l.flipY=!1,this.weightsMaterial.areaTexture=l,this.dispatchEvent({type:"load"})},a.itemStart("search"),a.itemStart("area"),s!==void 0&&r!==void 0?(a.itemEnd("search"),a.itemEnd("area")):typeof Image<"u"&&(s=new Image,r=new Image,s.addEventListener("load",()=>a.itemEnd("search")),r.addEventListener("load",()=>a.itemEnd("area")),s.src=cc,r.src=uc),this.applyPreset(e)}get edgesTexture(){return this.renderTargetEdges.texture}getEdgesTexture(){return this.edgesTexture}get weightsTexture(){return this.renderTargetWeights.texture}getWeightsTexture(){return this.weightsTexture}get edgeDetectionMaterial(){return this.edgeDetectionPass.fullscreenMaterial}get colorEdgesMaterial(){return this.edgeDetectionMaterial}getEdgeDetectionMaterial(){return this.edgeDetectionMaterial}get weightsMaterial(){return this.weightsPass.fullscreenMaterial}getWeightsMaterial(){return this.weightsMaterial}setEdgeDetectionThreshold(n){this.edgeDetectionMaterial.edgeDetectionThreshold=n}setOrthogonalSearchSteps(n){this.weightsMaterial.orthogonalSearchSteps=n}applyPreset(n){const e=this.edgeDetectionMaterial,t=this.weightsMaterial;switch(n){case hs.LOW:e.edgeDetectionThreshold=.15,t.orthogonalSearchSteps=4,t.diagonalDetection=!1,t.cornerDetection=!1;break;case hs.MEDIUM:e.edgeDetectionThreshold=.1,t.orthogonalSearchSteps=8,t.diagonalDetection=!1,t.cornerDetection=!1;break;case hs.HIGH:e.edgeDetectionThreshold=.1,t.orthogonalSearchSteps=16,t.diagonalSearchSteps=8,t.cornerRounding=25,t.diagonalDetection=!0,t.cornerDetection=!0;break;case hs.ULTRA:e.edgeDetectionThreshold=.05,t.orthogonalSearchSteps=32,t.diagonalSearchSteps=16,t.cornerRounding=25,t.diagonalDetection=!0,t.cornerDetection=!0;break}}setDepthTexture(n,e=xi){this.edgeDetectionMaterial.depthBuffer=n,this.edgeDetectionMaterial.depthPacking=e}update(n,e,t){this.clearPass.render(n,this.renderTargetEdges),this.edgeDetectionPass.render(n,e,this.renderTargetEdges),this.weightsPass.render(n,this.renderTargetEdges,this.renderTargetWeights)}setSize(n,e){this.edgeDetectionMaterial.setSize(n,e),this.weightsMaterial.setSize(n,e),this.renderTargetEdges.setSize(n,e),this.renderTargetWeights.setSize(n,e)}dispose(){const{searchTexture:n,areaTexture:e}=this.weightsMaterial;n!==null&&e!==null&&(n.dispose(),e.dispose()),super.dispose()}static get searchImageDataURL(){return cc}static get areaImageDataURL(){return uc}},tx=`#include <packing>
#define packFloatToRGBA(v) packDepthToRGBA(v)
#define unpackRGBAToFloat(v) unpackRGBAToDepth(v)
uniform lowp sampler2D luminanceBuffer0;uniform lowp sampler2D luminanceBuffer1;uniform float minLuminance;uniform float deltaTime;uniform float tau;varying vec2 vUv;void main(){float l0=unpackRGBAToFloat(texture2D(luminanceBuffer0,vUv));
#if __VERSION__ < 300
float l1=texture2DLodEXT(luminanceBuffer1,vUv,MIP_LEVEL_1X1).r;
#else
float l1=textureLod(luminanceBuffer1,vUv,MIP_LEVEL_1X1).r;
#endif
l0=max(minLuminance,l0);l1=max(minLuminance,l1);float adaptedLum=l0+(l1-l0)*(1.0-exp(-deltaTime*tau));gl_FragColor=(adaptedLum==1.0)?vec4(1.0):packFloatToRGBA(adaptedLum);}`,nx=class extends xt{constructor(){super({name:"AdaptiveLuminanceMaterial",defines:{MIP_LEVEL_1X1:"0.0"},uniforms:{luminanceBuffer0:new Ie(null),luminanceBuffer1:new Ie(null),minLuminance:new Ie(.01),deltaTime:new Ie(0),tau:new Ie(1)},extensions:{shaderTextureLOD:!0},blending:Ft,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:tx,vertexShader:Lo})}set luminanceBuffer0(n){this.uniforms.luminanceBuffer0.value=n}setLuminanceBuffer0(n){this.uniforms.luminanceBuffer0.value=n}set luminanceBuffer1(n){this.uniforms.luminanceBuffer1.value=n}setLuminanceBuffer1(n){this.uniforms.luminanceBuffer1.value=n}set mipLevel1x1(n){this.defines.MIP_LEVEL_1X1=n.toFixed(1),this.needsUpdate=!0}setMipLevel1x1(n){this.mipLevel1x1=n}set deltaTime(n){this.uniforms.deltaTime.value=n}setDeltaTime(n){this.uniforms.deltaTime.value=n}get minLuminance(){return this.uniforms.minLuminance.value}set minLuminance(n){this.uniforms.minLuminance.value=n}getMinLuminance(){return this.uniforms.minLuminance.value}setMinLuminance(n){this.uniforms.minLuminance.value=n}get adaptationRate(){return this.uniforms.tau.value}set adaptationRate(n){this.uniforms.tau.value=n}getAdaptationRate(){return this.uniforms.tau.value}setAdaptationRate(n){this.uniforms.tau.value=n}},ix=class extends en{constructor(n,{minLuminance:e=.01,adaptationRate:t=1}={}){super("AdaptiveLuminancePass"),this.fullscreenMaterial=new nx,this.needsSwap=!1,this.renderTargetPrevious=new Mt(1,1,{minFilter:Nt,magFilter:Nt,depthBuffer:!1}),this.renderTargetPrevious.texture.name="Luminance.Previous";const i=this.fullscreenMaterial;i.luminanceBuffer0=this.renderTargetPrevious.texture,i.luminanceBuffer1=n,i.minLuminance=e,i.adaptationRate=t,this.renderTargetAdapted=this.renderTargetPrevious.clone(),this.renderTargetAdapted.texture.name="Luminance.Adapted",this.copyPass=new nu(this.renderTargetPrevious,!1)}get texture(){return this.renderTargetAdapted.texture}getTexture(){return this.renderTargetAdapted.texture}set mipLevel1x1(n){this.fullscreenMaterial.mipLevel1x1=n}get adaptationRate(){return this.fullscreenMaterial.adaptationRate}set adaptationRate(n){this.fullscreenMaterial.adaptationRate=n}render(n,e,t,i,s){this.fullscreenMaterial.deltaTime=i,n.setRenderTarget(this.renderToScreen?null:this.renderTargetAdapted),n.render(this.scene,this.camera),this.copyPass.render(n,this.renderTargetAdapted)}},sx=`#include <tonemapping_pars_fragment>
uniform float whitePoint;
#if TONE_MAPPING_MODE == 2 || TONE_MAPPING_MODE == 3
uniform float middleGrey;
#if TONE_MAPPING_MODE == 3
uniform lowp sampler2D luminanceBuffer;
#else
uniform float averageLuminance;
#endif
vec3 Reinhard2ToneMapping(vec3 color){color*=toneMappingExposure;float l=luminance(color);
#if TONE_MAPPING_MODE == 3
float lumAvg=unpackRGBAToFloat(texture2D(luminanceBuffer,vec2(0.5)));
#else
float lumAvg=averageLuminance;
#endif
float lumScaled=(l*middleGrey)/max(lumAvg,1e-6);float lumCompressed=lumScaled*(1.0+lumScaled/(whitePoint*whitePoint));lumCompressed/=(1.0+lumScaled);return clamp(lumCompressed*color,0.0,1.0);}
#elif TONE_MAPPING_MODE == 4
#define A 0.15
#define B 0.50
#define C 0.10
#define D 0.20
#define E 0.02
#define F 0.30
vec3 Uncharted2Helper(const in vec3 x){return((x*(A*x+C*B)+D*E)/(x*(A*x+B)+D*F))-E/F;}vec3 Uncharted2ToneMapping(vec3 color){color*=toneMappingExposure;return clamp(Uncharted2Helper(color)/Uncharted2Helper(vec3(whitePoint)),0.0,1.0);}
#endif
void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){
#if TONE_MAPPING_MODE == 2 || TONE_MAPPING_MODE == 3
outputColor=vec4(Reinhard2ToneMapping(inputColor.rgb),inputColor.a);
#elif TONE_MAPPING_MODE == 4
outputColor=vec4(Uncharted2ToneMapping(inputColor.rgb),inputColor.a);
#else
outputColor=vec4(toneMapping(inputColor.rgb),inputColor.a);
#endif
}`,rx=class extends Cs{constructor({blendFunction:n=qe.SRC,adaptive:e=!1,mode:t=e?Xt.REINHARD2_ADAPTIVE:Xt.AGX,resolution:i=256,maxLuminance:s=4,whitePoint:r=s,middleGrey:a=.6,minLuminance:o=.01,averageLuminance:l=1,adaptationRate:c=1}={}){super("ToneMappingEffect",sx,{blendFunction:n,uniforms:new Map([["luminanceBuffer",new Ie(null)],["maxLuminance",new Ie(s)],["whitePoint",new Ie(r)],["middleGrey",new Ie(a)],["averageLuminance",new Ie(l)]])}),this.renderTargetLuminance=new Mt(1,1,{minFilter:vn,depthBuffer:!1}),this.renderTargetLuminance.texture.generateMipmaps=!0,this.renderTargetLuminance.texture.name="Luminance",this.luminancePass=new iu({renderTarget:this.renderTargetLuminance}),this.adaptiveLuminancePass=new ix(this.luminancePass.texture,{minLuminance:o,adaptationRate:c}),this.uniforms.get("luminanceBuffer").value=this.adaptiveLuminancePass.texture,this.resolution=i,this.mode=t}get mode(){return Number(this.defines.get("TONE_MAPPING_MODE"))}set mode(n){if(this.mode===n)return;const t=vi.replace(/\D+/g,"")>=168?"CineonToneMapping(texel)":"OptimizedCineonToneMapping(texel)";switch(this.defines.clear(),this.defines.set("TONE_MAPPING_MODE",n.toFixed(0)),n){case Xt.LINEAR:this.defines.set("toneMapping(texel)","LinearToneMapping(texel)");break;case Xt.REINHARD:this.defines.set("toneMapping(texel)","ReinhardToneMapping(texel)");break;case Xt.CINEON:case Xt.OPTIMIZED_CINEON:this.defines.set("toneMapping(texel)",t);break;case Xt.ACES_FILMIC:this.defines.set("toneMapping(texel)","ACESFilmicToneMapping(texel)");break;case Xt.AGX:this.defines.set("toneMapping(texel)","AgXToneMapping(texel)");break;case Xt.NEUTRAL:this.defines.set("toneMapping(texel)","NeutralToneMapping(texel)");break;default:this.defines.set("toneMapping(texel)","texel");break}this.adaptiveLuminancePass.enabled=n===Xt.REINHARD2_ADAPTIVE,this.setChanged()}getMode(){return this.mode}setMode(n){this.mode=n}get whitePoint(){return this.uniforms.get("whitePoint").value}set whitePoint(n){this.uniforms.get("whitePoint").value=n}get middleGrey(){return this.uniforms.get("middleGrey").value}set middleGrey(n){this.uniforms.get("middleGrey").value=n}get averageLuminance(){return this.uniforms.get("averageLuminance").value}set averageLuminance(n){this.uniforms.get("averageLuminance").value=n}get adaptiveLuminanceMaterial(){return this.adaptiveLuminancePass.fullscreenMaterial}getAdaptiveLuminanceMaterial(){return this.adaptiveLuminanceMaterial}get resolution(){return this.luminancePass.resolution.width}set resolution(n){const e=Math.max(0,Math.ceil(Math.log2(n))),t=Math.pow(2,e);this.luminancePass.resolution.setPreferredSize(t,t),this.adaptiveLuminanceMaterial.mipLevel1x1=e}getResolution(){return this.resolution}setResolution(n){this.resolution=n}get adaptive(){return this.mode===Xt.REINHARD2_ADAPTIVE}set adaptive(n){this.mode=n?Xt.REINHARD2_ADAPTIVE:Xt.REINHARD2}get adaptationRate(){return this.adaptiveLuminanceMaterial.adaptationRate}set adaptationRate(n){this.adaptiveLuminanceMaterial.adaptationRate=n}get distinction(){return console.warn(this.name,"distinction was removed."),1}set distinction(n){console.warn(this.name,"distinction was removed.")}update(n,e,t){this.adaptiveLuminancePass.enabled&&(this.luminancePass.render(n,e),this.adaptiveLuminancePass.render(n,null,null,t))}initialize(n,e,t){this.adaptiveLuminancePass.initialize(n,e,t)}},ax=`#include <common>
#include <packing>
#include <dithering_pars_fragment>
#define packFloatToRGBA(v) packDepthToRGBA(v)
#define unpackRGBAToFloat(v) unpackRGBAToDepth(v)
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#if DEPTH_PACKING == 3201
uniform lowp sampler2D depthBuffer;
#elif defined(GL_FRAGMENT_PRECISION_HIGH)
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;vec4 sRGBToLinear(const in vec4 value){return vec4(mix(pow(value.rgb*0.9478672986+vec3(0.0521327014),vec3(2.4)),value.rgb*0.0773993808,vec3(lessThanEqual(value.rgb,vec3(0.04045)))),value.a);}float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
float depth=unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
float depth=texture2D(depthBuffer,uv).r;
#endif
#if defined(USE_LOGARITHMIC_DEPTH_BUFFER) || defined(LOG_DEPTH)
float d=pow(2.0,depth*log2(cameraFar+1.0))-1.0;float a=cameraFar/(cameraFar-cameraNear);float b=cameraFar*cameraNear/(cameraNear-cameraFar);depth=a+b/d;
#elif defined(USE_REVERSED_DEPTH_BUFFER)
depth=1.0-depth;
#endif
return depth;}float getViewZ(const in float depth){
#ifdef PERSPECTIVE_CAMERA
return perspectiveDepthToViewZ(depth,cameraNear,cameraFar);
#else
return orthographicDepthToViewZ(depth,cameraNear,cameraFar);
#endif
}vec3 RGBToHCV(const in vec3 RGB){vec4 P=mix(vec4(RGB.bg,-1.0,2.0/3.0),vec4(RGB.gb,0.0,-1.0/3.0),step(RGB.b,RGB.g));vec4 Q=mix(vec4(P.xyw,RGB.r),vec4(RGB.r,P.yzx),step(P.x,RGB.r));float C=Q.x-min(Q.w,Q.y);float H=abs((Q.w-Q.y)/(6.0*C+EPSILON)+Q.z);return vec3(H,C,Q.x);}vec3 RGBToHSL(const in vec3 RGB){vec3 HCV=RGBToHCV(RGB);float L=HCV.z-HCV.y*0.5;float S=HCV.y/(1.0-abs(L*2.0-1.0)+EPSILON);return vec3(HCV.x,S,L);}vec3 HueToRGB(const in float H){float R=abs(H*6.0-3.0)-1.0;float G=2.0-abs(H*6.0-2.0);float B=2.0-abs(H*6.0-4.0);return clamp(vec3(R,G,B),0.0,1.0);}vec3 HSLToRGB(const in vec3 HSL){vec3 RGB=HueToRGB(HSL.x);float C=(1.0-abs(2.0*HSL.z-1.0))*HSL.y;return(RGB-0.5)*C+HSL.z;}FRAGMENT_HEAD void main(){FRAGMENT_MAIN_UV vec4 color0=texture2D(inputBuffer,UV);vec4 color1=vec4(0.0);FRAGMENT_MAIN_IMAGE color0.a=clamp(color0.a,0.0,1.0);gl_FragColor=color0;
#ifdef ENCODE_OUTPUT
#include <colorspace_fragment>
#endif
#include <dithering_fragment>
}`,ox="uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;VERTEX_HEAD void main(){vUv=position.xy*0.5+0.5;VERTEX_MAIN_SUPPORT gl_Position=vec4(position.xy,1.0,1.0);}",lx=class extends xt{constructor(n,e,t,i,s=!1){super({name:"EffectMaterial",defines:{THREE_REVISION:vi.replace(/\D+/g,""),DEPTH_PACKING:"0",ENCODE_OUTPUT:"1"},uniforms:{inputBuffer:new Ie(null),depthBuffer:new Ie(null),resolution:new Ie(new de),texelSize:new Ie(new de),cameraNear:new Ie(.3),cameraFar:new Ie(1e3),aspect:new Ie(1),time:new Ie(0)},blending:Ft,toneMapped:!1,depthWrite:!1,depthTest:!1,dithering:s}),n&&this.setShaderParts(n),e&&this.setDefines(e),t&&this.setUniforms(t),this.copyCameraSettings(i)}set inputBuffer(n){this.uniforms.inputBuffer.value=n}setInputBuffer(n){this.uniforms.inputBuffer.value=n}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(n){this.uniforms.depthBuffer.value=n}get depthPacking(){return Number(this.defines.DEPTH_PACKING)}set depthPacking(n){this.defines.DEPTH_PACKING=n.toFixed(0),this.needsUpdate=!0}setDepthBuffer(n,e=xi){this.depthBuffer=n,this.depthPacking=e}setShaderData(n){this.setShaderParts(n.shaderParts),this.setDefines(n.defines),this.setUniforms(n.uniforms),this.setExtensions(n.extensions)}setShaderParts(n){return this.fragmentShader=ax.replace($e.FRAGMENT_HEAD,n.get($e.FRAGMENT_HEAD)||"").replace($e.FRAGMENT_MAIN_UV,n.get($e.FRAGMENT_MAIN_UV)||"").replace($e.FRAGMENT_MAIN_IMAGE,n.get($e.FRAGMENT_MAIN_IMAGE)||""),this.vertexShader=ox.replace($e.VERTEX_HEAD,n.get($e.VERTEX_HEAD)||"").replace($e.VERTEX_MAIN_SUPPORT,n.get($e.VERTEX_MAIN_SUPPORT)||""),this.needsUpdate=!0,this}setDefines(n){for(const e of n.entries())this.defines[e[0]]=e[1];return this.needsUpdate=!0,this}setUniforms(n){for(const e of n.entries())this.uniforms[e[0]]=e[1];return this}setExtensions(n){this.extensions={};for(const e of n)this.extensions[e]=!0;return this}get encodeOutput(){return this.defines.ENCODE_OUTPUT!==void 0}set encodeOutput(n){this.encodeOutput!==n&&(n?this.defines.ENCODE_OUTPUT="1":delete this.defines.ENCODE_OUTPUT,this.needsUpdate=!0)}isOutputEncodingEnabled(n){return this.encodeOutput}setOutputEncodingEnabled(n){this.encodeOutput=n}get time(){return this.uniforms.time.value}set time(n){this.uniforms.time.value=n}setDeltaTime(n){this.uniforms.time.value+=n}adoptCameraSettings(n){this.copyCameraSettings(n)}copyCameraSettings(n){n&&(this.uniforms.cameraNear.value=n.near,this.uniforms.cameraFar.value=n.far,n instanceof Gt?this.defines.PERSPECTIVE_CAMERA="1":delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0)}setSize(n,e){const t=this.uniforms;t.resolution.value.set(n,e),t.texelSize.value.set(1/n,1/e),t.aspect.value=n/e}static get Section(){return $e}};function hc(n,e,t){for(const i of e){const s="$1"+n+i.charAt(0).toUpperCase()+i.slice(1),r=new RegExp("([^\\.])(\\b"+i+"\\b)","g");for(const a of t.entries())a[1]!==null&&t.set(a[0],a[1].replace(r,s))}}function cx(n,e,t){let i=e.getFragmentShader(),s=e.getVertexShader();const r=i!==void 0&&/mainImage/.test(i),a=i!==void 0&&/mainUv/.test(i);if(t.attributes|=e.getAttributes(),i===void 0)throw new Error(`Missing fragment shader (${e.name})`);if(a&&(t.attributes&Mn.CONVOLUTION)!==0)throw new Error(`Effects that transform UVs are incompatible with convolution effects (${e.name})`);if(!r&&!a)throw new Error(`Could not find mainImage or mainUv function (${e.name})`);{const o=/\w+\s+(\w+)\([\w\s,]*\)\s*{/g,l=t.shaderParts;let c=l.get($e.FRAGMENT_HEAD)||"",u=l.get($e.FRAGMENT_MAIN_UV)||"",h=l.get($e.FRAGMENT_MAIN_IMAGE)||"",d=l.get($e.VERTEX_HEAD)||"",f=l.get($e.VERTEX_MAIN_SUPPORT)||"";const m=new Set,v=new Set;if(a&&(u+=`	${n}MainUv(UV);
`,t.uvTransformation=!0),s!==null&&/mainSupport/.test(s)){const A=/mainSupport *\([\w\s]*?uv\s*?\)/.test(s);f+=`	${n}MainSupport(`,f+=A?`vUv);
`:`);
`;for(const M of s.matchAll(/(?:varying\s+\w+\s+([\S\s]*?);)/g))for(const x of M[1].split(/\s*,\s*/))t.varyings.add(x),m.add(x),v.add(x);for(const M of s.matchAll(o))v.add(M[1])}for(const A of i.matchAll(o))v.add(A[1]);for(const A of e.defines.keys())v.add(A.replace(/\([\w\s,]*\)/g,""));for(const A of e.uniforms.keys())v.add(A);v.delete("while"),v.delete("for"),v.delete("if"),e.uniforms.forEach((A,M)=>t.uniforms.set(n+M.charAt(0).toUpperCase()+M.slice(1),A)),e.defines.forEach((A,M)=>t.defines.set(n+M.charAt(0).toUpperCase()+M.slice(1),A));const g=new Map([["fragment",i],["vertex",s]]);hc(n,v,t.defines),hc(n,v,g),i=g.get("fragment"),s=g.get("vertex");const p=e.blendMode;if(t.blendModes.set(p.blendFunction,p),r){e.inputColorSpace!==null&&e.inputColorSpace!==t.colorSpace&&(h+=e.inputColorSpace===et?`color0 = sRGBTransferOETF(color0);
	`:`color0 = sRGBToLinear(color0);
	`),e.outputColorSpace!==gn?t.colorSpace=e.outputColorSpace:e.inputColorSpace!==null&&(t.colorSpace=e.inputColorSpace);const A=/MainImage *\([\w\s,]*?depth[\w\s,]*?\)/;h+=`${n}MainImage(color0, UV, `,(t.attributes&Mn.DEPTH)!==0&&A.test(i)&&(h+="depth, ",t.readDepth=!0),h+=`color1);
	`;const M=n+"BlendOpacity";t.uniforms.set(M,p.opacity),h+=`color0 = blend${p.blendFunction}(color0, color1, ${M});

	`,c+=`uniform float ${M};

`}if(c+=i+`
`,s!==null&&(d+=s+`
`),l.set($e.FRAGMENT_HEAD,c),l.set($e.FRAGMENT_MAIN_UV,u),l.set($e.FRAGMENT_MAIN_IMAGE,h),l.set($e.VERTEX_HEAD,d),l.set($e.VERTEX_MAIN_SUPPORT,f),e.extensions!==null)for(const A of e.extensions)t.extensions.add(A)}}var dr=class extends en{constructor(n,...e){super("EffectPass"),this.fullscreenMaterial=new lx(null,null,null,n),this.listener=t=>this.handleEvent(t),this.effects=[],this.setEffects(e),this.skipRendering=!1,this.minTime=1,this.maxTime=Number.POSITIVE_INFINITY,this.timeScale=1}set mainScene(n){for(const e of this.effects)e.mainScene=n}set mainCamera(n){this.fullscreenMaterial.copyCameraSettings(n);for(const e of this.effects)e.mainCamera=n}get encodeOutput(){return this.fullscreenMaterial.encodeOutput}set encodeOutput(n){this.fullscreenMaterial.encodeOutput=n}get dithering(){return this.fullscreenMaterial.dithering}set dithering(n){const e=this.fullscreenMaterial;e.dithering=n,e.needsUpdate=!0}setEffects(n){for(const e of this.effects)e.removeEventListener("change",this.listener);this.effects=n.sort((e,t)=>t.attributes-e.attributes);for(const e of this.effects)e.addEventListener("change",this.listener)}updateMaterial(){const n=new Zg;let e=0;for(const a of this.effects)if(a.blendMode.blendFunction===qe.DST)n.attributes|=a.getAttributes()&Mn.DEPTH;else{if((n.attributes&a.getAttributes()&Mn.CONVOLUTION)!==0)throw new Error(`Convolution effects cannot be merged (${a.name})`);cx("e"+e++,a,n)}let t=n.shaderParts.get($e.FRAGMENT_HEAD),i=n.shaderParts.get($e.FRAGMENT_MAIN_IMAGE),s=n.shaderParts.get($e.FRAGMENT_MAIN_UV);const r=/\bblend\b/g;for(const a of n.blendModes.values())t+=a.getShaderCode().replace(r,`blend${a.blendFunction}`)+`
`;(n.attributes&Mn.DEPTH)!==0?(n.readDepth&&(i=`float depth = readDepth(UV);

	`+i),this.needsDepthTexture=this.getDepthTexture()===null):this.needsDepthTexture=!1,n.colorSpace===et&&(i+=`color0 = sRGBToLinear(color0);
	`),n.uvTransformation?(s=`vec2 transformedUv = vUv;
`+s,n.defines.set("UV","transformedUv")):n.defines.set("UV","vUv"),n.shaderParts.set($e.FRAGMENT_HEAD,t),n.shaderParts.set($e.FRAGMENT_MAIN_IMAGE,i),n.shaderParts.set($e.FRAGMENT_MAIN_UV,s);for(const[a,o]of n.shaderParts)o!==null&&n.shaderParts.set(a,o.trim().replace(/^#/,`
#`));this.skipRendering=e===0,this.needsSwap=!this.skipRendering,this.fullscreenMaterial.setShaderData(n)}recompile(){this.updateMaterial()}getDepthTexture(){return this.fullscreenMaterial.depthBuffer}setDepthTexture(n,e=xi){this.fullscreenMaterial.depthBuffer=n,this.fullscreenMaterial.depthPacking=e;for(const t of this.effects)t.setDepthTexture(n,e)}render(n,e,t,i,s){for(const r of this.effects)r.update(n,e,i);if(!this.skipRendering||this.renderToScreen){const r=this.fullscreenMaterial;r.inputBuffer=e.texture,r.time+=i*this.timeScale,n.setRenderTarget(this.renderToScreen?null:t),n.render(this.scene,this.camera)}}setSize(n,e){this.fullscreenMaterial.setSize(n,e);for(const t of this.effects)t.setSize(n,e)}initialize(n,e,t){this.renderer=n;for(const i of this.effects)i.initialize(n,e,t);this.updateMaterial(),t!==void 0&&t!==Lt&&(this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}dispose(){super.dispose();for(const n of this.effects)n.removeEventListener("change",this.listener),n.dispose()}handleEvent(n){switch(n.type){case"change":this.recompile();break}}};const ux=`
uniform float uTime;
uniform float uExposure;
uniform float uWarmthGrade;
uniform float uUnderwater;
uniform float uSsaoIntensity;
uniform float uTanHalfFov;
uniform float uAspect;
uniform vec3 uUnderwaterTint;

float ignHash(vec2 pixel) {
  return fract(52.9829189 * fract(dot(pixel, vec2(0.06711056, 0.00583715))));
}

float linearizeViewZ(float rawDepth) {

  float zNdc = rawDepth * 2.0 - 1.0;
  return (2.0 * cameraNear * cameraFar) / (cameraFar + cameraNear - zNdc * (cameraFar - cameraNear));
}

vec3 reconstructViewPos(vec2 uv, float viewDist) {
  vec2 ndc = uv * 2.0 - 1.0;
  return vec3(ndc.x * uAspect * uTanHalfFov * viewDist, ndc.y * uTanHalfFov * viewDist, -viewDist);
}

float computeArchitecturalAO(vec2 uv, float centerDepthRaw) {
  if (centerDepthRaw >= 0.9998 || uSsaoIntensity < 0.01) return 1.0;

  float viewZ = linearizeViewZ(centerDepthRaw);
  if (viewZ > 85.0) return 1.0;

  vec3 P = reconstructViewPos(uv, viewZ);

  vec2 px = texelSize;
  vec3 Pr = reconstructViewPos(uv + vec2(px.x, 0.0), linearizeViewZ(readDepth(uv + vec2(px.x, 0.0))));
  vec3 Pl = reconstructViewPos(uv - vec2(px.x, 0.0), linearizeViewZ(readDepth(uv - vec2(px.x, 0.0))));
  vec3 Pu = reconstructViewPos(uv + vec2(0.0, px.y), linearizeViewZ(readDepth(uv + vec2(0.0, px.y))));
  vec3 Pd = reconstructViewPos(uv - vec2(0.0, px.y), linearizeViewZ(readDepth(uv - vec2(0.0, px.y))));

  vec3 dPdx = (abs(Pr.z - P.z) < abs(P.z - Pl.z)) ? (Pr - P) : (P - Pl);
  vec3 dPdy = (abs(Pu.z - P.z) < abs(P.z - Pd.z)) ? (Pu - P) : (P - Pd);
  vec3 N = normalize(cross(dPdx, dPdy));

  float jitter = ignHash(uv * resolution) * 6.2831853;

  float projScale = 0.5 / max(uTanHalfFov, 0.25);
  float worldRadius = mix(0.42, 1.35, clamp(viewZ / 24.0, 0.0, 1.0));
  vec2 baseUvRad = vec2(worldRadius * projScale / max(viewZ, 0.65)) * vec2(1.0 / max(uAspect, 0.5), 1.0);
  baseUvRad = clamp(baseUvRad, px * 2.5, vec2(0.065));

  float occ = 0.0;
  const int SAMPLES = 12;
  for (int i = 0; i < SAMPLES; i++) {
    float fi = float(i);
    float rNorm = sqrt((fi + 0.5) / float(SAMPLES));
    float ang = fi * 2.39996323 + jitter;
    vec2 sUv = uv + vec2(cos(ang), sin(ang)) * baseUvRad * rNorm;
    if (sUv.x < 0.001 || sUv.x > 0.999 || sUv.y < 0.001 || sUv.y > 0.999) continue;

    float sRaw = readDepth(sUv);
    if (sRaw >= 0.9998) continue;

    float sViewZ = linearizeViewZ(sRaw);
    vec3 S = reconstructViewPos(sUv, sViewZ);
    vec3 V = S - P;
    float dist2 = dot(V, V);
    float dist = sqrt(max(dist2, 1e-6));

    float nDotV = dot(N, V / dist) - 0.065;

    float rangeWeight = smoothstep(worldRadius * 2.1, worldRadius * 0.35, dist);
    occ += max(0.0, nDotV) * rangeWeight;
  }

  float rawAo = 1.0 - (occ / float(SAMPLES)) * 1.95 * uSsaoIntensity;
  float distFade = 1.0 - smoothstep(48.0, 85.0, viewZ);
  return mix(1.0, clamp(rawAo, 0.28, 1.0), distFade);
}

void mainImage(const in vec4 inputColor, const in vec2 uv, const in float depth, out vec4 outputColor) {
  vec3 col = inputColor.rgb;

  float lumaRaw = dot(col, vec3(0.2126, 0.7152, 0.0722));
  float emitterMask = 1.0 - smoothstep(0.95, 2.4, lumaRaw);
  float aoStrengthMask = emitterMask * (1.0 - uUnderwater * 0.65);
  if (aoStrengthMask > 0.02) {
    float ao = computeArchitecturalAO(uv, depth);

    vec3 aoColor = mix(vec3(ao * 0.95, ao * 0.97, ao), vec3(ao), 0.65);
    col *= mix(vec3(1.0), aoColor, aoStrengthMask);
  }

  col *= uExposure;

  if (uWarmthGrade > 0.01) {
    vec3 warmTint = col * vec3(1.055, 1.008, 0.935) + vec3(0.007, 0.004, 0.0005);
    col = mix(col, warmTint, uWarmthGrade * 0.74);
  }

  if (uUnderwater > 0.001) {
    vec3 uwColor =
      col * mix(vec3(0.46, 0.86, 0.92), uUnderwaterTint * 4.0 + vec3(0.32, 0.72, 0.78), 0.45) +
      uUnderwaterTint * 0.34;
    float topShimmer = smoothstep(0.30, 1.0, uv.y)
      * (0.5 + 0.5 * sin(uv.x * 15.0 + uTime * 2.1) * cos(uv.y * 8.5 - uTime * 1.6));
    uwColor += vec3(0.022, 0.065, 0.076) * topShimmer * 0.42;
    col = mix(col, uwColor, uUnderwater * 0.84);
  }

  float peak = max(col.r, max(col.g, col.b));
  if (peak > 3.6) {
    float knee = 3.6 + log(1.0 + (peak - 3.6)) * 0.95;
    col *= (knee / peak);
  }

  outputColor = vec4(max(col, vec3(0.0)), inputColor.a);
}
`,hx=`
uniform float uTime;
uniform float uUnderwater;
uniform float uWetLens;
uniform float uDistortion;
uniform float uChromatic;
uniform float uGrain;
uniform float uVignette;

float filmHash(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}

vec2 hash22(vec2 p) {
  p = vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)));
  return fract(sin(p) * 43758.5453);
}

vec2 barrelDistort(vec2 uv, float k) {
  vec2 centered = uv - 0.5;
  float r2 = dot(centered, centered);
  vec2 distorted = centered * (1.0 + k * r2 + k * 0.28 * r2 * r2);
  distorted /= (1.0 + k * 0.23);
  return distorted + 0.5;
}

vec2 computeLensDroplets(vec2 uv, float t, float wetAmount) {
  if (wetAmount < 0.01) return vec2(0.0);

  vec2 grid = uv * vec2(11.0, 6.5);
  grid.y += t * 0.42;
  vec2 cellId = floor(grid);
  vec2 local = fract(grid) - 0.5;

  vec2 rnd = hash22(cellId);
  float activeMask = step(0.42, rnd.x);
  vec2 dropPos = (rnd - 0.5) * 0.52;
  dropPos.y += sin(t * 1.4 + rnd.y * 6.2831) * 0.08;

  vec2 diff = local - dropPos;
  diff.y *= 0.62;
  float dist = length(diff);
  float radius = mix(0.08, 0.23, rnd.y) * wetAmount;

  float dropMask = smoothstep(radius, radius * 0.25, dist) * activeMask;
  float trailMask = smoothstep(0.09, 0.0, abs(local.x - dropPos.x))
                  * smoothstep(dropPos.y, dropPos.y + 0.42, local.y)
                  * smoothstep(dropPos.y + 0.48, dropPos.y + 0.1, local.y)
                  * activeMask * 0.35;

  vec2 normalOffset = normalize(diff + 0.0001) * dropMask * 0.015 + vec2(0.0, trailMask * 0.004);
  return normalOffset * wetAmount;
}

void mainUv(inout vec2 uv) {
  uv = barrelDistort(uv, uDistortion);

  if (uUnderwater > 0.001) {
    float wx = sin(uv.y * 13.0 + uTime * 2.1) * 0.0034 + sin(uv.y * 25.0 - uTime * 2.7) * 0.0013;
    float wy = cos(uv.x * 11.0 + uTime * 1.8) * 0.0030 + cos(uv.x * 21.0 + uTime * 2.5) * 0.0012;
    uv += vec2(wx, wy) * uUnderwater;
  }

  if (uWetLens > 0.01) {
    uv += computeLensDroplets(uv, uTime, uWetLens);
  }
}

void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {
  vec2 centered = uv - 0.5;
  float r2 = dot(centered, centered);

  float caStrength = (uChromatic + uUnderwater * 0.0005 + uWetLens * 0.0007) * (0.15 + r2 * 1.75);
  vec2 caOffset = centered * caStrength;

  float r = texture2D(inputBuffer, clamp(uv + caOffset, 0.001, 0.999)).r;
  float g = inputColor.g;
  float b = texture2D(inputBuffer, clamp(uv - caOffset, 0.001, 0.999)).b;
  vec3 col = vec3(r, g, b);

  if (uWetLens > 0.04) {
    vec2 px = texelSize;
    float blurRad = uWetLens * 2.1;
    vec3 blurSum =
      texture2D(inputBuffer, clamp(uv + px * vec2(blurRad, blurRad), 0.001, 0.999)).rgb +
      texture2D(inputBuffer, clamp(uv + px * vec2(-blurRad, blurRad), 0.001, 0.999)).rgb +
      texture2D(inputBuffer, clamp(uv + px * vec2(blurRad, -blurRad), 0.001, 0.999)).rgb +
      texture2D(inputBuffer, clamp(uv - px * vec2(-blurRad, -blurRad), 0.001, 0.999)).rgb;
    col = mix(col, blurSum * 0.25, uWetLens * 0.30);
  }

  float luma = dot(col, vec3(0.299, 0.587, 0.114));
  float shadowIso = mix(1.35, 0.26, clamp(luma * 2.3, 0.0, 1.0));
  float grain = (filmHash(uv * resolution + fract(uTime * 37.13) * 100.0) - 0.5) * uGrain * shadowIso;
  col += grain;

  float vigAmount = uVignette + uUnderwater * 0.12;
  float vig = smoothstep(0.96, 0.26, length(centered) * (1.12 + vigAmount * 0.40));
  col *= mix(1.0 - vigAmount, 1.0, vig);

  outputColor = vec4(clamp(col, 0.0, 1.0), inputColor.a);
}
`;class dx extends Cs{constructor(){super("ArchitecturalGtaoHdrEffect",ux,{blendFunction:qe.NORMAL,attributes:Mn.DEPTH,uniforms:new Map([["uTime",new Ie(0)],["uExposure",new Ie(1)],["uWarmthGrade",new Ie(0)],["uUnderwater",new Ie(0)],["uSsaoIntensity",new Ie(.85)],["uTanHalfFov",new Ie(Math.tan(me.degToRad(37)))],["uAspect",new Ie(16/9)],["uUnderwaterTint",new Ie(new Te(68624))]])})}updateParams(e,t,i,s,r,a,o){this.uniforms.get("uTime").value=e,this.uniforms.get("uExposure").value=t,this.uniforms.get("uWarmthGrade").value=i,this.uniforms.get("uUnderwater").value=s,this.uniforms.get("uSsaoIntensity").value=r,this.uniforms.get("uTanHalfFov").value=Math.tan(me.degToRad(a.fov*.5)),this.uniforms.get("uAspect").value=a.aspect,this.uniforms.get("uUnderwaterTint").value.setHex(o)}}class fx extends Cs{constructor(){super("LdrBodycamOpticsEffect",hx,{blendFunction:qe.NORMAL,uniforms:new Map([["uTime",new Ie(0)],["uUnderwater",new Ie(0)],["uWetLens",new Ie(0)],["uDistortion",new Ie(.048)],["uChromatic",new Ie(48e-5)],["uGrain",new Ie(.018)],["uVignette",new Ie(.28)]])})}updateParams(e,t,i){this.uniforms.get("uTime").value=e,this.uniforms.get("uUnderwater").value=t,this.uniforms.get("uWetLens").value=i}}function px(n,e,t){const i=new Xg(n,{frameBufferType:Nn}),s=new Wv(e,t),r=new dx,a=new Vv({intensity:.36,luminanceThreshold:1.02,luminanceSmoothing:.35,mipmapBlur:!0}),o=new dr(t,r,a),l=new rx({mode:Xt.ACES_FILMIC}),c=new dr(t,l),u=new fx,h=new dr(t,u),d=new ex,f=new dr(t,d);return i.addPass(s),i.addPass(o),i.addPass(c),i.addPass(h),i.addPass(f),{composer:i,update(m,v,g,p,A,M,x=.85,C=.36){r.updateParams(m,p,A,v,x,t,M),a.intensity=C,u.updateParams(m,v,g)},render(m){i.render(m)},resize(m,v){i.setSize(m,v)},dispose(){i.dispose()}}}const It=2.4,St=()=>new Promise(n=>{requestAnimationFrame(()=>{window.setTimeout(n,0)})});function ai(n,e,t,i,s,r,a=.86,o=.96){n.computeVertexNormals();const l=n.attributes.position,c=n.attributes.normal,u=new Float32Array(l.count*2),h=new Float32Array(l.count*3),d=Math.max(.15,r-s);for(let f=0;f<l.count;f++){const m=l.getX(f),v=l.getY(f),g=l.getZ(f),p=m+e,A=v+t,M=g+i,x=Math.abs(c.getX(f)),C=Math.abs(c.getY(f)),E=Math.abs(c.getZ(f));let y=0,T=0;C>.65?(y=p/It,T=M/It):x>=E?(y=M/It,T=A/It):(y=p/It,T=A/It),u[f*2]=y,u[f*2+1]=T;const S=me.clamp((A-s)/d,0,1),w=me.lerp(a,1,me.smoothstep(S,0,.35)),_=me.lerp(1,o,me.smoothstep(S,.72,1)),D=w*_;h[f*3]=D,h[f*3+1]=D,h[f*3+2]=D}return n.setAttribute("uv",new Tt(u,2)),n.setAttribute("color",new Tt(h,3)),n}function ds(n,e,t,i,s,r=!1,a=!0,o=0,l=0,c=!0){const u=n*.5,h=e*.5,d=Math.min(t*.5,u-.06),f=r?-h+.006:-Math.min(i*.5,h-.06),m=Math.min(r?-h+i:i*.5,h-.06),v=[],g=[],p=[],A=[],M=I=>{if(l<=.1)return 0;const F=Math.min(Math.abs(I),l*.95),k=l-Math.sqrt(Math.max(.01,l*l-F*F));return c?k:-k},x=I=>{if(l<=.1)return[0,0,1];const k=(c?-1:1)*I/l,z=Math.sqrt(Math.max(.01,1-k*k));return[k,0,z]},C=(I,F,k,z,V,G,J,q,re,fe,Se)=>{const O=[[I,q],[F,re],[k,fe],[I,q],[k,fe],[z,Se]];for(const[U,W]of O)v.push(U[0],U[1],U[2]),g.push(V,G,J),Math.abs(G)>.5?p.push(U[0]/It,U[2]/It):Math.abs(V)>.5?p.push(U[2]/It,U[1]/It):p.push(U[0]/It,U[1]/It),A.push(W,W,W)},E=(I,F,k,z,V)=>{const G=(F-I)/V;for(let J=0;J<V;J++){const q=I+J*G,re=I+(J+1)*G,fe=M(q),Se=M(re),O=x((q+re)*.5);C([q,k,fe],[re,k,Se],[re,z,Se],[q,z,fe],O[0],O[1],O[2],.96,.96,.96,.96)}},y=l>.1?3:1,T=l>.1?2:1;!r&&f>-h+.005&&(E(-u,-d,-h,f,y),E(-d,d,-h,f,T),E(d,u,-h,f,y)),E(-u,-d,m,h,y),E(-d,d,m,h,T),E(d,u,m,h,y),E(-u,-d,f,m,y),E(d,u,f,m,y);const S=M(d),w=-s,_=[];if(o<=.12){const I=Math.min(s*.35,.52),F=Math.min(s*.65,.98),k=Math.min(s*.85,1.32);_.push([S,.96]),_.push([S-I,.76]),_.push([S-F,.12]),s>1.38?(_.push([S-k,0]),_.push([w,0])):_.push([w,0])}else _.push([S,.96]),_.push([w,o]);for(let I=0;I<_.length-1;I++){const[F,k]=_[I],[z,V]=_[I+1];C([-d,f,z],[-d,f,F],[d,f,F],[d,f,z],0,1,0,V,k,k,V),C([-d,m,F],[-d,m,z],[d,m,z],[d,m,F],0,-1,0,k*.92,V*.92,V*.92,k*.92),C([-d,f,z],[-d,m,z],[-d,m,F],[-d,f,F],1,0,0,V*.95,V*.95,k*.95,k*.95),C([d,f,F],[d,m,F],[d,m,z],[d,f,z],-1,0,0,k*.95,k*.95,V*.95,V*.95)}a&&C([-d,f,w],[d,f,w],[d,m,w],[-d,m,w],0,0,1,o,o,o,o);const D=new Rt;return D.setAttribute("position",new nt(v,3)),D.setAttribute("normal",new nt(g,3)),D.setAttribute("uv",new nt(p,2)),D.setAttribute("color",new nt(A,3)),D}function Sa(n,e,t=!1){return new xt({uniforms:{uColor:{value:new Te(n)},uOpacity:{value:e},uTime:{value:0},uShimmer:{value:t?1:0}},vertexShader:`
      varying vec2 vUv;
      varying vec3 vNormalView;
      varying vec3 vViewDir;
      varying float vViewDist;
      void main() {
        vUv = uv;
        vec4 mvPos = modelViewMatrix * vec4(position, 1.0);
        vNormalView = normalize(normalMatrix * normal);
        vViewDist = length(mvPos.xyz);
        vViewDir = -mvPos.xyz / max(vViewDist, 0.001);
        gl_Position = projectionMatrix * mvPos;
      }
    `,fragmentShader:`
      uniform vec3 uColor;
      uniform float uOpacity;
      uniform float uTime;
      uniform float uShimmer;
      varying vec2 vUv;
      varying vec3 vNormalView;
      varying vec3 vViewDir;
      varying float vViewDist;
      void main() {
        float topFade = smoothstep(1.0, 0.80, vUv.y);
        float bottomFade = smoothstep(0.0, 0.76, vUv.y);
        float fresnelEdge = pow(abs(dot(vNormalView, vViewDir)), 2.05);

        float camFade = smoothstep(0.6, 2.8, vViewDist);
        float streak = 1.0;
        if (uShimmer > 0.5) {
          float s1 = 0.68 + 0.32 * sin(vUv.x * 34.0 + uTime * 1.05);
          float s2 = 0.74 + 0.26 * sin(vUv.x * 58.0 - uTime * 1.45 + vUv.y * 3.8);
          streak = s1 * s2;
        } else {
          streak = 0.86 + 0.14 * sin(vUv.x * 18.0 + uTime * 0.28 + vUv.y * 2.5);
        }
        float alpha = topFade * bottomFade * fresnelEdge * camFade * streak * uOpacity;
        gl_FragColor = vec4(uColor, alpha);
      }
    `,transparent:!0,depthWrite:!1,blending:Mr,side:Ht})}class Rs{group=new Kn;colliders=[];cylinders=[];ladders=[];currents=[];disposables=[];animatedShaftMats=[];waterLights=[];globalWaterSunlit=0;materials;skylightMat;constructor(e,t=new Te(1.65,1.95,2.08)){this.materials=e,this.skylightMat=new hn({color:t,toneMapped:!1}),this.disposables.push(this.skylightMat)}registerWaterLight(e,t,i,s=1){this.waterLights.push({x:e,z:t,radius:i,strength:s})}setGlobalWaterIllumination(e){this.globalWaterSunlit=me.clamp(e,0,1)}createShadowKeyLight(e){const{color:t,intensity:i,offsetX:s,offsetY:r,offsetZ:a,frustumHalfSize:o=48,mapSize:l=4096}=e,c=new fg(t,i);return c.position.set(s,r,a),c.target.position.set(0,0,0),c.castShadow=!0,c.shadow.mapSize.set(l,l),c.shadow.camera.left=-o,c.shadow.camera.right=o,c.shadow.camera.top=o,c.shadow.camera.bottom=-o,c.shadow.camera.near=2,c.shadow.camera.far=Math.hypot(s,r,a)+o*1.8,c.shadow.bias=-35e-5,c.shadow.normalBias=.032,this.group.add(c,c.target),{light:c,offset:new N(s,r,a),frustumHalfSize:o}}addBlock(e,t,i,s,r,a,o=this.materials.whiteTile,l={}){const{collide:c=!0,castShadow:u=!0,receiveShadow:h=!0,surface:d="tile",climbable:f=!0,blocksWater:m=!0,aoBottom:v=.86,aoTop:g=.96}=l,p=t-e,A=s-i,M=a-r,x=(e+t)*.5,C=(i+s)*.5,E=(r+a)*.5,y=new Zt(p,A,M);ai(y,x,C,E,i,s,v,g),this.disposables.push(y);const T=new Oe(y,o);return T.position.set(x,C,E),T.castShadow=u,T.receiveShadow=h,this.group.add(T),c&&this.colliders.push({minX:e,maxX:t,minY:i,maxY:s,minZ:r,maxZ:a,surface:d,climbable:f,blocksWater:m}),T}addCylinderColumn(e,t,i,s,r,a=this.materials.whiteTile,o=!0,l=!0,c=!0,u=32){const h=r-s,d=(s+r)*.5,f=new Pt(i,i,h,u,1),m=f.attributes.position,v=f.attributes.uv,g=new Float32Array(m.count*3),p=2*Math.PI*i,A=Math.max(1,Math.round(p/It)),M=h/It;for(let C=0;C<m.count;C++){v.setXY(C,v.getX(C)*A,v.getY(C)*M);const E=m.getY(C)+d,y=me.clamp((E-s)/Math.max(.1,h),0,1),T=me.lerp(.84,1,me.smoothstep(y,0,.25))*me.lerp(1,.92,me.smoothstep(y,.82,1));g[C*3]=T,g[C*3+1]=T,g[C*3+2]=T}v.needsUpdate=!0,f.setAttribute("color",new Tt(g,3)),this.disposables.push(f);const x=new Oe(f,a);if(x.position.set(e,d,t),x.castShadow=l,x.receiveShadow=!0,this.group.add(x),c&&h>2.2){const C=new Pt(i*1.14,i*1.18,.34,u);ai(C,e,s+.17,t,s,s+.4,.85,.96);const E=new Pt(i*1.18,i*1.12,.32,u);ai(E,e,r-.16,t,r-.4,r,.92,.95),this.disposables.push(C,E);const y=new Oe(C,a);y.position.set(e,s+.17,t),y.castShadow=l,y.receiveShadow=!0;const T=new Oe(E,a);T.position.set(e,r-.16,t),T.castShadow=l,T.receiveShadow=!0,this.group.add(y,T)}return o&&this.cylinders.push({cx:e,cz:t,radius:i,minY:s,maxY:r}),x}addRecessedTiledWallGrid(e){const{axis:t,wallFacePos:i,inwardSign:s,alongMin:r,alongMax:a,minY:o,maxY:l,stepAlong:c,stepY:u,winW:h,winH:d,recessDepth:f=2,mat:m=this.materials.whiteTile,exclusions:v=[]}=e,g=Math.max(1,Math.round((a-r)/c)),p=Math.max(1,Math.round((l-o)/u)),A=(a-r)/g,M=(l-o)/p,x=ds(A+.01,M+.01,h,d,f,!1,!0,0,0,!0),C=new Zt(A+.01,M+.01,.35);ai(C,0,0,0,-M*.5,M*.5,.94,.96),this.disposables.push(x,C);const E=t==="X"?s>0?0:Math.PI:s>0?Math.PI*.5:-Math.PI*.5,y=[],T=[],S=new dt;for(let w=0;w<p;w++){const _=o+(w+.5)*M;for(let D=0;D<g;D++){const I=r+(D+.5)*A;let F=null;for(let k=0;k<v.length;k++){const z=v[k];if(I+A*.48>z.aMin&&I-A*.48<z.aMax&&_+M*.48>z.yMin&&_-M*.48<z.yMax){F=z;break}}t==="X"?S.position.set(I,_,i):S.position.set(i,_,I),S.rotation.set(0,E,0),S.scale.set(1,1,1),F?F.solidFill&&(t==="X"?S.position.set(I,_,i-s*.175):S.position.set(i-s*.175,_,I),S.updateMatrix(),T.push(S.matrix.clone())):(S.updateMatrix(),y.push(S.matrix.clone()))}}if(y.length>0){const w=new rn(x,m,y.length);for(let _=0;_<y.length;_++)w.setMatrixAt(_,y[_]);w.instanceMatrix.needsUpdate=!0,w.receiveShadow=!0,w.frustumCulled=!1,this.group.add(w)}if(T.length>0){const w=new rn(C,m,T.length);for(let _=0;_<T.length;_++)w.setMatrixAt(_,T[_]);w.instanceMatrix.needsUpdate=!0,w.receiveShadow=!0,w.frustumCulled=!1,this.group.add(w)}}addRecessedCylinderWallGrid(e){const{cx:t,cz:i,radius:s,facingInward:r,minY:a,maxY:o,stepY:l,countPerRing:c,winW:u,winH:h,recessDepth:d=2,mat:f=this.materials.whiteTile,excludeAngles:m=[],pinpointLightEveryN:v=0,pinpointColor:g=15923452}=e,p=Math.max(1,Math.round((o-a)/l)),A=(o-a)/p,M=2*s*Math.sin(Math.PI/c)+.06,x=Math.min(u,M-.35),C=Math.min(h,A-.35),E=ds(M,A+.02,x,C,d,!1,!0,0,s,r);this.disposables.push(E);const y=(_,D)=>{let I=(_-D)%(Math.PI*2);return I>Math.PI&&(I-=Math.PI*2),I<-Math.PI&&(I+=Math.PI*2),Math.abs(I)},T=[],S=[],w=new dt;for(let _=0;_<p;_++){const D=a+(_+.5)*A;for(let I=0;I<c;I++){const F=I/c*Math.PI*2;let k=!1;for(const re of m)if(D+A*.45>re.minY&&D-A*.45<re.maxY&&y(F,re.angle)<re.halfArc){k=!0;break}if(k)continue;const z=t+Math.cos(F)*s,V=i+Math.sin(F)*s,G=r?-Math.cos(F):Math.cos(F),J=r?-Math.sin(F):Math.sin(F),q=Math.atan2(G,J);if(w.position.set(z,D,V),w.rotation.set(0,q,0),w.scale.set(1,1,1),w.updateMatrix(),T.push(w.matrix.clone()),v>0&&(I+_*5)%v===0){const re=r?s+d*.65:s-d*.65;S.push({x:t+Math.cos(F)*re,y:D,z:i+Math.sin(F)*re,rotY:q})}}}if(T.length>0){const _=new rn(E,f,T.length);for(let D=0;D<T.length;D++)_.setMatrixAt(D,T[D]);_.instanceMatrix.needsUpdate=!0,_.receiveShadow=!0,_.frustumCulled=!1,this.group.add(_)}if(S.length>0){const _=new kt(x*.55,C*.42),D=new Te(g),I=new hn({color:new Te(D.r*2.1,D.g*2.1,D.b*2.1),toneMapped:!1});this.disposables.push(_,I);const F=new rn(_,I,S.length);for(let k=0;k<S.length;k++){const z=S[k];w.position.set(z.x,z.y,z.z),w.rotation.set(0,z.rotY,0),w.updateMatrix(),F.setMatrixAt(k,w.matrix)}F.instanceMatrix.needsUpdate=!0,F.frustumCulled=!1,this.group.add(F)}}addRecessedBalconyCorridorRing(e){const{cx:t,cz:i,radius:s,floorY:r,bandHeight:a,count:o,doorW:l,doorH:c,corridorDepth:u,mat:h=this.materials.whiteTile,openAngles:d=[]}=e,f=2*s*Math.sin(Math.PI/o)+.08,m=ds(f,a+.02,l,c,u,!0,!0,0,s,!0),v=ds(f,a+.02,l,c,u,!0,!1,0,s,!0);this.disposables.push(m,v);const g=(T,S)=>{let w=(T-S)%(Math.PI*2);return w>Math.PI&&(w-=Math.PI*2),w<-Math.PI&&(w+=Math.PI*2),Math.abs(w)},p=[],A=[],M=new dt,x=r+a*.5;for(let T=0;T<o;T++){const S=T/o*Math.PI*2,w=d.some(F=>g(S,F.angle)<=F.halfArc),_=t+Math.cos(S)*s,D=i+Math.sin(S)*s,I=Math.atan2(-Math.cos(S),-Math.sin(S));M.position.set(_,x,D),M.rotation.set(0,I,0),M.scale.set(1,1,1),M.updateMatrix(),w?A.push(M.matrix.clone()):p.push(M.matrix.clone())}if(p.length>0){const T=new rn(m,h,p.length);for(let S=0;S<p.length;S++)T.setMatrixAt(S,p[S]);T.instanceMatrix.needsUpdate=!0,T.receiveShadow=!0,T.frustumCulled=!1,this.group.add(T)}if(A.length>0){const T=new rn(v,h,A.length);for(let S=0;S<A.length;S++)T.setMatrixAt(S,A[S]);T.instanceMatrix.needsUpdate=!0,T.receiveShadow=!0,T.frustumCulled=!1,this.group.add(T)}const C=Math.PI/o,E=Math.max(.42,(2*s*Math.sin(C)-l)*.5*.48),y=Math.max(2,Math.ceil(u/2.2));for(let T=0;T<o;T++){const S=(T+.5)/o*Math.PI*2,w=Math.cos(S),_=Math.sin(S);for(let D=1;D<=y;D++){const I=s+u*D/y;this.cylinders.push({cx:t+w*I,cz:i+_*I,radius:E,minY:r,maxY:r+c})}}}addCofferedWhiteSkylightGrid(e){const{ceilingY:t,spacing:i,panelSize:s,gridHalfCount:r,centerX:a,centerZ:o,clipRadius:l,panelColor:c=new Te().setRGB(2.35,2.48,2.55),beamDepth:u=1.6,beamMat:h=this.materials.whiteTile}=e,d=[];for(let M=-r;M<=r;M++)for(let x=-r;x<=r;x++){const C=a+x*i,E=o+M*i;l&&Math.hypot(C-a,E-o)>l+i*.4||d.push([C,E])}if(d.length===0)return;const f=ds(i+.02,i+.02,s,s,u,!1,!1,.85);f.rotateX(Math.PI/2);const m=new kt(s+.04,s+.04);m.rotateX(Math.PI/2);const v=new hn({color:c,toneMapped:!1});this.disposables.push(f,m,v);const g=new rn(f,h,d.length),p=new rn(m,v,d.length),A=new dt;for(let M=0;M<d.length;M++){const[x,C]=d[M];A.position.set(x,t,C),A.rotation.set(0,0,0),A.updateMatrix(),g.setMatrixAt(M,A.matrix),A.position.set(x,t+u-.04,C),A.updateMatrix(),p.setMatrixAt(M,A.matrix)}g.instanceMatrix.needsUpdate=!0,p.instanceMatrix.needsUpdate=!0,g.frustumCulled=!1,p.frustumCulled=!1,this.group.add(g,p),this.setGlobalWaterIllumination(.62)}addHollowCylinderShell(e){const{cx:t,cz:i,radius:s,thickness:r,minY:a,maxY:o,segments:l=72,mat:c=this.materials.whiteTile,openings:u=[],collide:h=!0,castShadow:d=!1}=e,f=s,m=s+r;if(u.length===0)this.addCurvedWallArc({cx:t,cz:i,rInner:f,rOuter:m,startAngle:0,endAngle:Math.PI*2,minY:a,maxY:o,segments:l,mat:c,collide:!1,castShadow:d});else{const v=new Set([a,o]);for(const p of u)v.add(me.clamp(p.minY,a,o)),v.add(me.clamp(p.maxY,a,o));const g=Array.from(v).sort((p,A)=>p-A);for(let p=0;p<g.length-1;p++){const A=g[p],M=g[p+1];if(M-A<.05)continue;const x=(A+M)*.5,C=u.filter(E=>x>E.minY+.01&&x<E.maxY-.01).map(E=>{let y=E.angle-E.halfArc,T=E.angle+E.halfArc;for(;y<0;)y+=Math.PI*2,T+=Math.PI*2;return{a0:y,a1:T}}).sort((E,y)=>E.a0-y.a0);if(C.length===0)this.addCurvedWallArc({cx:t,cz:i,rInner:f,rOuter:m,startAngle:0,endAngle:Math.PI*2,minY:A,maxY:M,segments:l,mat:c,collide:!1,castShadow:d});else{const E=[];for(const S of C)S.a1>Math.PI*2?(E.push([S.a0,Math.PI*2]),E.push([0,S.a1-Math.PI*2])):E.push([S.a0,S.a1]);E.sort((S,w)=>S[0]-w[0]);const y=[];for(const S of E)y.length===0||S[0]>y[y.length-1][1]?y.push([S[0],S[1]]):y[y.length-1][1]=Math.max(y[y.length-1][1],S[1]);let T=0;for(const[S,w]of y){if(S-T>.01){const _=Math.max(4,Math.ceil((S-T)/(Math.PI*2)*l));this.addCurvedWallArc({cx:t,cz:i,rInner:f,rOuter:m,startAngle:T,endAngle:S,minY:A,maxY:M,segments:_,mat:c,collide:!1,castShadow:d})}T=Math.max(T,w)}if(Math.PI*2-T>.01){const S=Math.max(4,Math.ceil((Math.PI*2-T)/(Math.PI*2)*l));this.addCurvedWallArc({cx:t,cz:i,rInner:f,rOuter:m,startAngle:T,endAngle:Math.PI*2,minY:A,maxY:M,segments:S,mat:c,collide:!1,castShadow:d})}}}}h&&this.cylinders.push({cx:t,cz:i,radius:f,minY:a,maxY:o,inverted:!0,thickness:r,openings:u})}addCircularWalkwayRing(e){const{cx:t,cz:i,rInner:s,rOuter:r,minY:a,maxY:o,startAngle:l=0,endAngle:c=Math.PI*2,segments:u=56,mat:h=this.materials.whiteTile,collide:d=!0,blocksWater:f=!1,castShadow:m=!0,visual:v=!0}=e,g=v?this.addCurvedWallArc({cx:t,cz:i,rInner:s,rOuter:r,startAngle:l,endAngle:c,minY:a,maxY:o,segments:u,mat:h,collide:!1,castShadow:m}):null;if(d){const p=c-l,A=(s+r)*.5,M=r-s,x=Math.max(12,Math.ceil(Math.abs(p)*A/Math.max(1.25,M*.55))),C=p/x;for(let E=0;E<x;E++){const y=l+E*C,T=y+C,S=(y+T)*.5,w=t+Math.cos(S)*A,_=i+Math.sin(S)*A,D=Math.abs(C)*r,I=Math.max(M*.52,D*.56),F=Math.abs(Math.cos(S))*(M*.5)+Math.abs(Math.sin(S))*(D*.55),k=Math.abs(Math.sin(S))*(M*.5)+Math.abs(Math.cos(S))*(D*.55),z=Math.min(I,Math.max(.55,F)),V=Math.min(I,Math.max(.55,k));this.colliders.push({minX:w-z,maxX:w+z,minY:a,maxY:o,minZ:_-V,maxZ:_+V,climbable:!0,blocksWater:f})}}return g}addWaterCascadeSheet(e){const{x:t,z:i,width:s,topY:r,bottomY:a,rotY:o}=e,l=Math.max(.2,r-a),c=new kt(s,l,8,8);this.disposables.push(c);const u=new Oe(c,this.materials.waterSheetMat);return u.position.set(t,(r+a)*.5,i),u.rotation.y=o,u.renderOrder=3,this.group.add(u),u}addSmoothArchedWall(e){const{orientation:t,planeMin:i,planeMax:s,spanMin:r,spanMax:a,openCenter:o,openWidth:l,floorY:c,springY:u,topY:h,mat:d=this.materials.whiteTile,castShadow:f=!0,collide:m=!0}=e,v=l*.5,g=s-i,p=o-v,A=o+v,M=Math.min(h-.12,u+v),x=new ho;x.moveTo(r,c),x.lineTo(p,c),x.lineTo(p,u),x.absarc(o,u,v,Math.PI,0,!0),x.lineTo(A,c),x.lineTo(a,c),x.lineTo(a,h),x.lineTo(r,h),x.closePath();const C=new Tr(x,{depth:g,bevelEnabled:!1,curveSegments:28});if(t==="Z"){C.translate(0,0,i),ai(C,0,0,0,c,h,.86,.96),this.disposables.push(C);const T=new Oe(C,d);T.castShadow=f,T.receiveShadow=!0,this.group.add(T),m&&(p>r+.05&&this.colliders.push({minX:r,maxX:p,minY:c,maxY:h,minZ:i,maxZ:s,climbable:!1}),a>A+.05&&this.colliders.push({minX:A,maxX:a,minY:c,maxY:h,minZ:i,maxZ:s,climbable:!1}),this.colliders.push({minX:p,maxX:A,minY:M-.12,maxY:h,minZ:i,maxZ:s,climbable:!1,blocksWater:!1}));return}const E=C.attributes.position;for(let T=0;T<E.count;T++){const S=E.getX(T),w=E.getY(T),_=E.getZ(T);E.setXYZ(T,i+_,w,S)}if(C.index){const T=C.index;for(let S=0;S<T.count;S+=3){const w=T.getX(S+1),_=T.getX(S+2);T.setX(S+1,_),T.setX(S+2,w)}}else for(let T=0;T<E.count;T+=3){const S=E.getX(T+1),w=E.getY(T+1),_=E.getZ(T+1),D=E.getX(T+2),I=E.getY(T+2),F=E.getZ(T+2);E.setXYZ(T+1,D,I,F),E.setXYZ(T+2,S,w,_)}E.needsUpdate=!0,ai(C,0,0,0,c,h,.86,.96),this.disposables.push(C);const y=new Oe(C,d);y.castShadow=f,y.receiveShadow=!0,this.group.add(y),m&&(p>r+.05&&this.colliders.push({minX:i,maxX:s,minY:c,maxY:h,minZ:r,maxZ:p,climbable:!1}),a>A+.05&&this.colliders.push({minX:i,maxX:s,minY:c,maxY:h,minZ:A,maxZ:a,climbable:!1}),this.colliders.push({minX:i,maxX:s,minY:M-.12,maxY:h,minZ:p,maxZ:A,climbable:!1,blocksWater:!1}))}addCurvedWallArc(e){const{cx:t,cz:i,rInner:s,rOuter:r,startAngle:a,endAngle:o,minY:l,maxY:c,segments:u=28,mat:h=this.materials.whiteTile,collide:d=!0,castShadow:f=!0}=e,m=c-l,v=new ho,g=o-a,p=Math.max(8,u);for(let S=0;S<=p;S++){const w=a+g*S/p,_=Math.cos(w)*r,D=-Math.sin(w)*r;S===0?v.moveTo(_,D):v.lineTo(_,D)}for(let S=p;S>=0;S--){const w=a+g*S/p,_=Math.cos(w)*s,D=-Math.sin(w)*s;v.lineTo(_,D)}v.closePath();const A=new Tr(v,{depth:m,bevelEnabled:!1,curveSegments:1});A.rotateX(-Math.PI/2),A.translate(t,l,i),A.computeVertexNormals();const M=A.attributes.position,x=A.attributes.normal,C=new Float32Array(M.count*2),E=new Float32Array(M.count*3),y=(s+r)*.5;for(let S=0;S<M.count;S++){const w=M.getX(S),_=M.getY(S),D=M.getZ(S);if(Math.abs(x.getY(S))>.65)C[S*2]=w/It,C[S*2+1]=D/It;else{const V=Math.atan2(D-i,w-t)*y;C[S*2]=V/It,C[S*2+1]=_/It}const F=me.clamp((_-l)/Math.max(.1,m),0,1),k=me.lerp(.85,1,me.smoothstep(F,0,.32))*me.lerp(1,.94,me.smoothstep(F,.78,1));E[S*3]=k,E[S*3+1]=k,E[S*3+2]=k}A.setAttribute("uv",new Tt(C,2)),A.setAttribute("color",new Tt(E,3)),this.disposables.push(A);const T=new Oe(A,h);if(T.castShadow=f,T.receiveShadow=!0,this.group.add(T),d){const w=Math.max(.25,r-s)*.52,_=Math.abs(g)*y,D=Math.max(4,Math.ceil(_/Math.max(.35,w*1.1)));for(let I=0;I<=D;I++){const F=a+g*I/D;this.cylinders.push({cx:t+Math.cos(F)*y,cz:i+Math.sin(F)*y,radius:w,minY:l,maxY:c})}}return T}addGlassBlockWall(e){const{axis:t,planePos:i,thickness:s=.28,startAlong:r,endAlong:a,minY:o,maxY:l,lightColor:c=14676726,lightIntensity:u=28,lightDistance:h=22,inwardSign:d=1,withLights:f=!0}=e,m=Math.min(r,a),v=Math.max(r,a),g=s*.5,p=.28;if(t==="Z"){if(this.addBlock(i-g-.06,i+g+.06,o,o+p,m,v,this.materials.whiteTile,{climbable:!1}),this.addBlock(i-g-.06,i+g+.06,l-p,l,m,v,this.materials.whiteTile,{climbable:!1}),this.addBlock(i-g,i+g,o+p,l-p,m,v,this.materials.glassBlock,{climbable:!1,surface:"glass",castShadow:!1}),f){const A=v-m,M=Math.max(1,Math.round(A/8.5));for(let x=0;x<M;x++){const C=m+(x+.5)/M*A,E=i+d*1.4,y=new Ut(c,u,h,1.45);y.position.set(E,(o+l)*.5,C),this.group.add(y),this.registerWaterLight(E+d*2.5,C,h*.65,.85)}}}else if(this.addBlock(m,v,o,o+p,i-g-.06,i+g+.06,this.materials.whiteTile,{climbable:!1}),this.addBlock(m,v,l-p,l,i-g-.06,i+g+.06,this.materials.whiteTile,{climbable:!1}),this.addBlock(m,v,o+p,l-p,i-g,i+g,this.materials.glassBlock,{climbable:!1,surface:"glass",castShadow:!1}),f){const A=v-m,M=Math.max(1,Math.round(A/8.5));for(let x=0;x<M;x++){const C=m+(x+.5)/M*A,E=i+d*1.4,y=new Ut(c,u,h,1.45);y.position.set(C,(o+l)*.5,E),this.group.add(y),this.registerWaterLight(C,E+d*2.5,h*.65,.85)}}}addStaircase(e){const{axis:t,startPos:i,endPos:s,crossMin:r,crossMax:a,startY:o,endY:l,baseY:c,steps:u,mat:h=this.materials.whiteTile,castShadow:d=!0}=e,f=(s-i)/u,m=(l-o)/u;for(let v=0;v<u;v++){const g=i+v*f,p=i+(v+1)*f,A=Math.min(g,p),M=Math.max(g,p),x=o+(v+1)*m;t==="-Z"||t==="+Z"?this.addBlock(r,a,c,x,A,M,h,{collide:!0,castShadow:d,climbable:!0,aoBottom:.86,aoTop:.98}):this.addBlock(A,M,c,x,r,a,h,{collide:!0,castShadow:d,climbable:!0,aoBottom:.86,aoTop:.98})}}addSpiralStaircase(e){const{cx:t,cz:i,coreRadius:s,outerRadius:r,startAngle:a,totalAngle:o,startY:l,endY:c,steps:u,mat:h=this.materials.whiteTile}=e,d=o/u,f=(c-l)/u;for(let m=0;m<u;m++){const v=a+m*d,g=v+d*1.08,p=l+(m+1)*f,A=m<4?Math.min(l-.6,-1.2):p-Math.max(.62,Math.abs(f)*2.6),M=Math.min(v,g),x=Math.max(v,g);this.addCurvedWallArc({cx:t,cz:i,rInner:s*.96,rOuter:r,startAngle:M,endAngle:x,minY:A,maxY:p,segments:5,mat:h,collide:!1,castShadow:!0});const C=(v+g)*.5,E=(s+r)*.5,y=t+Math.cos(C)*E,T=i+Math.sin(C)*E,S=Math.max(.65,(r-s)*.48);this.colliders.push({minX:y-S,maxX:y+S,minY:A,maxY:p,minZ:T-S,maxZ:T+S,climbable:!0})}}addChromePoolLadder(e){const{x:t,z:i,normalX:s,normalZ:r,minY:a,maxY:o,topExitOffset:l=.85,topExitX:c,topExitZ:u,deckReturn:h=!0,style:d="chrome"}=e,f=d==="steel"?this.materials.weatheredSteel:this.materials.chromeMetal,m=Math.hypot(s,r)||1,v=s/m,g=r/m,p=d==="steel"?.54:.58,A=.18,M=d==="steel"?.028:.025,x=d==="steel"?.017:.018,C=.24,E=o+.54,y=A-C*2,T=new Kn;this.group.add(T),T.position.set(t,0,i),T.rotation.y=Math.atan2(v,g);const S=h?E:o+.92,w=S-a,_=new Pt(M,M,w,12),D=new Pt(x,x,p,10);D.rotateZ(Math.PI/2);const I=A+.05,F=new Pt(M*.72,M*.72,I,10);F.rotateX(Math.PI/2);const k=new Pt(.058,.062,.028,14);k.rotateX(Math.PI/2);const z=new Ts(M,10,8);this.disposables.push(_,D,F,k,z);let V=null,G=null,J=null;if(h){V=new Po(C,M,12,22,Math.PI);const U=E-(o-.02);G=new Pt(M,M,U,12),J=new Pt(.062,.068,.032,16),this.disposables.push(V,G,J)}const q=[],re=o-a,fe=Math.max(2,Math.ceil(re/2.6)+1);for(let U=0;U<fe;U++){const W=fe===1?.5:U/(fe-1);q.push(me.lerp(a+.16,o-.14,W))}for(const U of[-1,1]){const W=U*(p*.5),H=new Oe(_,f);H.position.set(W,(a+S)*.5,A),H.castShadow=!0,T.add(H);const ie=new Oe(z,f);if(ie.position.set(W,a,A),T.add(ie),h&&V&&G&&J){const oe=new Oe(V,f);oe.rotation.y=Math.PI/2,oe.position.set(W,E,A-C),oe.castShadow=!0,T.add(oe);const ue=E-(o-.02),ne=new Oe(G,f);ne.position.set(W,o-.02+ue*.5,y),ne.castShadow=!0,T.add(ne);const j=new Oe(J,f);j.position.set(W,o+.014,y),T.add(j)}else{const oe=new Oe(z,f);oe.position.set(W,S,A),T.add(oe)}for(const oe of q){const ue=new Oe(F,f);ue.position.set(W,oe,(A-.05)*.5),ue.castShadow=!0,T.add(ue);const ne=new Oe(k,f);ne.position.set(W,oe,.012),T.add(ne)}}const Se=.32,O=Math.max(3,Math.floor((o-a-.22)/Se));for(let U=0;U<=O;U++){const W=a+.24+U*Se;if(W>o-.08)break;const H=new Oe(D,f);H.position.set(0,W,A),H.castShadow=!0,T.add(H)}this.ladders.push({x:t+v*(A+.42),z:i+g*(A+.42),normalX:v,normalZ:g,minY:a,maxY:o,topExitX:c??t-v*l,topExitY:o+.02,topExitZ:u??i-g*l,material:d})}addChromeHandrail(e){const{axis:t,crossPos:i,startAlong:s,endAlong:r,deckY:a,height:o=1.04,collide:l=!1}=e,c=Math.min(s,r),u=Math.max(s,r),h=u-c;if(h<.3)return;const d=this.materials.chromeMetal,f=new Pt(.024,.024,h,10),m=new Pt(.016,.016,h,8);t==="X"?(f.rotateZ(Math.PI/2),m.rotateZ(Math.PI/2)):(f.rotateX(Math.PI/2),m.rotateX(Math.PI/2));const v=new Pt(.022,.022,o,10),g=new Pt(.052,.056,.024,12);this.disposables.push(f,m,v,g);const p=(c+u)*.5,A=new Oe(f,d),M=new Oe(m,d);t==="X"?(A.position.set(p,a+o,i),M.position.set(p,a+o*.52,i)):(A.position.set(i,a+o,p),M.position.set(i,a+o*.52,p)),A.castShadow=!0,this.group.add(A,M);const x=Math.max(2,Math.ceil(h/2.6)+1);for(let C=0;C<x;C++){const E=c+h*C/(x-1),y=new Oe(v,d),T=new Oe(g,d);t==="X"?(y.position.set(E,a+o*.5,i),T.position.set(E,a+.012,i)):(y.position.set(i,a+o*.5,E),T.position.set(i,a+.012,E)),y.castShadow=!0,this.group.add(y,T)}l&&(t==="X"?this.colliders.push({minX:c,maxX:u,minY:a,maxY:a+o,minZ:i-.08,maxZ:i+.08,climbable:!1,blocksWater:!1}):this.colliders.push({minX:i-.08,maxX:i+.08,minY:a,maxY:a+o,minZ:c,maxZ:u,climbable:!1,blocksWater:!1}))}addSubmergedPoolDrain(e,t,i,s=1.35){const r=new kt(s+.28,s+.28);r.rotateX(-Math.PI/2),ai(r,e,t+.008,i,t,t+.2,.9,.95);const a=new kt(s,s);a.rotateX(-Math.PI/2),this.disposables.push(r,a);const o=new Oe(r,this.materials.accentTile);o.position.set(e,t+.008,i),o.receiveShadow=!0;const l=new Oe(a,this.materials.stainlessGrate);l.position.set(e,t+.014,i),l.receiveShadow=!0,this.group.add(o,l)}addWallVentGrate(e,t,i,s,r,a=1.1,o=.52){const l=new kt(a,o);this.disposables.push(l);const c=new Oe(l,this.materials.stainlessGrate);c.position.set(e+s*.02,t,i+r*.02),c.rotation.y=Math.atan2(s,r),c.receiveShadow=!0,this.group.add(c)}addRecessedUnderwaterLamp(e){const{x:t,y:i,z:s,normalX:r,normalZ:a,color:o=8450296,intensity:l=18,distance:c=18,withBeam:u=!0}=e,h=new Es(.18,.26,20),d=new Ss(.18,20),f=new Te(o),m=new hn({color:new Te(f.r*2.1,f.g*2.1,f.b*2.1),toneMapped:!1});this.disposables.push(h,d,m);const v=Math.atan2(r,a),g=new Oe(h,this.materials.chromeMetal);g.position.set(t+r*.02,i,s+a*.02),g.rotation.y=v;const p=new Oe(d,m);p.position.set(t+r*.024,i,s+a*.024),p.rotation.y=v,this.group.add(g,p);const A=new Ut(o,l,c,1.5);if(A.position.set(t+r*.45,i,s+a*.45),this.group.add(A),this.registerWaterLight(t+r*2.2,s+a*2.2,c*.65,.65),u){const M=Math.min(9.5,c*.48),x=new Pt(.18,1.45,M,18,1,!0);x.rotateX(Math.PI/2);const C=Sa(o,.11,!0);this.disposables.push(x,C),this.animatedShaftMats.push(C);const E=new Oe(x,C);E.position.set(t+r*(M*.5+.08),i,s+a*(M*.5+.08)),E.rotation.y=v,E.renderOrder=1,this.group.add(E)}}addLonelyDoor(e){const{x:t,floorY:i,z:s,normalX:r,normalZ:a,ajarAngle:o=0,glowColor:l=16770744,glowIntensity:c=0}=e,u=new Kn;u.position.set(t,i,s),u.rotation.y=Math.atan2(r,a),this.group.add(u);const h=1.48,d=2.68,f=h*.5,m=new Zt(.18,d+.18,.28),v=new Zt(h+.36,.18,.28),g=new Zt(h-.04,d-.03,.09),p=new Ts(.052,14,10);this.disposables.push(m,v,g,p);const A=new Oe(m,this.materials.chromeMetal);A.position.set(-f-.09,(d+.18)*.5,.04),A.castShadow=!0;const M=new Oe(m,this.materials.chromeMetal);M.position.set(f+.09,(d+.18)*.5,.04),M.castShadow=!0;const x=new Oe(v,this.materials.chromeMetal);x.position.set(0,d+.09,.04),x.castShadow=!0,u.add(A,M,x);const C=new Kn;C.position.set(-f+.02,0,.06),C.rotation.y=o,u.add(C);const E=new Oe(g,this.materials.paintedDoor);E.position.set(f-.02,d*.5,0),E.castShadow=!0,E.receiveShadow=!0;const y=new Oe(p,this.materials.brushedBrass);if(y.position.set(h-.2,1.12,.08),C.add(E,y),c>.1){const T=new Ut(l,c,16,1.45);T.position.set(0,1.8,.65),u.add(T)}return C}addSkylightWell(e){const{cx:t,cz:i,w:s,d:r,ceilingY:a,wellHeight:o,beamLength:l,lightColor:c=16773340,lightIntensity:u,lightDistance:h,bounceColor:d=15265769,bounceIntensity:f=4.2,shaftColor:m=16772048,shaftOpacity:v=.11,castShadow:g=!1,tiltX:p=0,tiltZ:A=0,underwaterBeamDepth:M=0,useGlassBlocks:x=!1}=e,C=.36,E=a+o;this.addBlock(t-s/2-C,t-s/2,a,E,i-r/2,i+r/2,this.materials.whiteTile,{collide:!1}),this.addBlock(t+s/2,t+s/2+C,a,E,i-r/2,i+r/2,this.materials.whiteTile,{collide:!1}),this.addBlock(t-s/2-C,t+s/2+C,a,E,i-r/2-C,i-r/2,this.materials.whiteTile,{collide:!1}),this.addBlock(t-s/2-C,t+s/2+C,a,E,i+r/2,i+r/2+C,this.materials.whiteTile,{collide:!1});const y=new kt(s,r);y.rotateX(Math.PI/2),this.disposables.push(y);const T=new Oe(y,x?this.materials.glassBlock:this.skylightMat);T.position.set(t,E-.04,i),this.group.add(T);const S=new $c(c,u,h,Math.PI*.44,.82,1.45);S.position.set(t,a+o*.45,i);const w=t+p*l,_=i+A*l;if(S.target.position.set(w,-1.2,_),g&&(S.castShadow=!0,S.shadow.mapSize.set(1024,1024),S.shadow.bias=-42e-5,S.shadow.normalBias=.032,S.shadow.camera.near=.8,S.shadow.camera.far=h),this.group.add(S,S.target),this.registerWaterLight(w,_,Math.max(s,r)*1.45+6.5,1),f>.1){const D=new Ut(d,f,h*.85,1.5);D.position.set(t+p*2.2,Math.min(a-2,4),i+A*2.2),this.group.add(D)}if(v>.005){const D=Math.min(s,r)*.46,I=D*1.85,F=new Pt(D,I,l,24,1,!0),k=Sa(m,v,!1);this.disposables.push(F,k),this.animatedShaftMats.push(k);const z=new Oe(F,k);if(z.position.set(t+p*l*.45,a-l*.5+.2,i+A*l*.45),z.rotation.z=-p*.45,z.rotation.x=A*.45,z.renderOrder=3,this.group.add(z),M>.2){const V=new Pt(D*1.15,D*2.05,M,24,1,!0),G=Sa(m,Math.min(.22,v*1.35),!0);this.disposables.push(V,G),this.animatedShaftMats.push(G);const J=new Oe(V,G);J.position.set(t+p*l*.65,-M*.5-.04,i+A*l*.65),J.renderOrder=1,this.group.add(J)}}}addRecessedCeilingLight(e){const{x:t,ceilingY:i,z:s,w:r=1.8,d:a=1.8,color:o=15398650,intensity:l=28,distance:c=24,hdrScale:u=1.9,circular:h=!1}=e,d=new Te(o),f=new hn({color:new Te(d.r*u,d.g*u,d.b*u),toneMapped:!1});if(h){const m=r*.5,v=new Es(m,m+.09,20);v.rotateX(Math.PI/2);const g=new Ss(m,20);g.rotateX(Math.PI/2),this.disposables.push(v,g,f);const p=new Oe(v,this.materials.chromeMetal);p.position.set(t,i-.015,s);const A=new Oe(g,f);A.position.set(t,i-.022,s),this.group.add(p,A)}else{const m=new Zt(r+.22,.1,a+.22),v=new kt(r,a);v.rotateX(Math.PI/2),this.disposables.push(m,v,f);const g=new Oe(m,this.materials.chromeMetal);g.position.set(t,i+.02,s);const p=new Oe(v,f);p.position.set(t,i-.032,s),this.group.add(g,p)}if(l>.1){const m=new Ut(o,l,c,1.48);return m.position.set(t,i-.55,s),this.group.add(m),this.registerWaterLight(t,s,c*.55,Math.min(.85,l/42)),m}return null}addCeilingWithCutouts(e,t,i,s,r,a,o=this.materials.whiteTile){if(a.length===0){this.addBlock(e,t,r,r+.72,i,s,o,{collide:!0,climbable:!1,blocksWater:!1});return}const c=new Set([e,t]),u=new Set([i,s]);for(const f of a)c.add(me.clamp(f.cx-f.w*.5,e,t)),c.add(me.clamp(f.cx+f.w*.5,e,t)),u.add(me.clamp(f.cz-f.d*.5,i,s)),u.add(me.clamp(f.cz+f.d*.5,i,s));const h=Array.from(c).sort((f,m)=>f-m),d=Array.from(u).sort((f,m)=>f-m);for(let f=0;f<d.length-1;f++){const m=d[f],v=d[f+1];if(v-m<.02)continue;const g=(m+v)*.5;let p=null;for(let A=0;A<h.length-1;A++){const M=h[A],x=h[A+1];if(x-M<.02)continue;const C=(M+x)*.5;a.some(y=>C>y.cx-y.w*.5+.005&&C<y.cx+y.w*.5-.005&&g>y.cz-y.d*.5+.005&&g<y.cz+y.d*.5-.005)?p!==null&&(this.addBlock(p,M,r,r+.72,m,v,o,{collide:!0,climbable:!1,blocksWater:!1}),p=null):p===null&&(p=M)}p!==null&&this.addBlock(p,h[h.length-1],r,r+.72,m,v,o,{collide:!0,climbable:!1,blocksWater:!1})}}async bakeLevelFieldAsync(e,t){let s=1/0,r=-1/0,a=1/0,o=-1/0;if(t)s=t.centerX-t.sizeX*.5,r=t.centerX+t.sizeX*.5,a=t.centerZ-t.sizeZ*.5,o=t.centerZ+t.sizeZ*.5;else{for(const _ of this.colliders)_.maxX-_.minX>360||(s=Math.min(s,_.minX-8),r=Math.max(r,_.maxX+8),a=Math.min(a,_.minZ-8),o=Math.max(o,_.maxZ+8));Number.isFinite(s)||(s=-160,r=160,a=-160,o=160)}const l=(s+r)*.5,c=(a+o)*.5,u=Math.max(40,r-s),h=Math.max(40,o-a),d=new Float32Array(36864),f=new Float32Array(36864),m=new Float32Array(36864),v=new Float32Array(36864),g=this.colliders.filter(_=>_.blocksWater!==!1&&_.maxY>vt-.04&&_.minY<vt+.6),p=this.colliders.filter(_=>_.maxY<=vt+.02),A=this.colliders.filter(_=>_.minY>1.8&&_.minY<7.2&&_.maxX-_.minX<280),M=32;for(let _=0;_<192;_+=M){const D=Math.min(192,_+M);for(let I=_;I<D;I++){const F=c+((I+.5)/192-.5)*h;for(let k=0;k<192;k++){const z=l+((k+.5)/192-.5)*u,V=I*192+k;let G=-36;for(let O=0;O<p.length;O++){const U=p[O];z>=U.minX&&z<=U.maxX&&F>=U.minZ&&F<=U.maxZ&&U.maxY>G&&(G=U.maxY)}let J=!1;for(let O=0;O<g.length;O++){const U=g[O];if(z>=U.minX&&z<=U.maxX&&F>=U.minZ&&F<=U.maxZ){J=!0;break}}if(!J)for(let O=0;O<this.cylinders.length;O++){const U=this.cylinders[O];if(U.maxY>vt-.04&&U.minY<vt+.6&&!U.inverted){const W=z-U.cx,H=F-U.cz;if(W*W+H*H<=U.radius*U.radius){J=!0;break}}}const q=Math.max(0,vt-G),re=!J&&q>.04?1:0;d[V]=re,v[V]=me.clamp(q/12,0,1);let fe=this.globalWaterSunlit;for(let O=0;O<this.waterLights.length;O++){const U=this.waterLights[O],W=(z-U.x)*(z-U.x)+(F-U.z)*(F-U.z),H=U.radius*U.radius;if(W<H){const ie=1-Math.sqrt(W/H);fe=Math.max(fe,ie*ie*U.strength)}}f[V]=re*me.clamp(fe,0,1);let Se=.94;for(let O=0;O<A.length;O++){const U=A[O];if(z>=U.minX&&z<=U.maxX&&F>=U.minZ&&F<=U.maxZ){const W=me.clamp((U.minY-2.2)/5,0,1);Se=Math.min(Se,.72+.22*W)}}Se=Math.min(1,Se+fe*.14),m[V]=Se}}e?.(D/192*.78),await St()}const x=(_,D)=>{let I=_,F=new Float32Array(36864);for(let k=0;k<D;k++){for(let z=0;z<192;z++){const V=z*192;for(let G=0;G<192;G++){const J=Math.max(0,G-2),q=Math.max(0,G-1),re=Math.min(191,G+1),fe=Math.min(191,G+2);F[V+G]=I[V+J]*.0625+I[V+q]*.25+I[V+G]*.375+I[V+re]*.25+I[V+fe]*.0625}}for(let z=0;z<192;z++){const V=Math.max(0,z-2)*192,G=Math.max(0,z-1)*192,J=z*192,q=Math.min(191,z+1)*192,re=Math.min(191,z+2)*192;for(let fe=0;fe<192;fe++)I[J+fe]=F[V+fe]*.0625+F[G+fe]*.25+F[J+fe]*.375+F[q+fe]*.25+F[re+fe]*.0625}}return I},C=x(d,2),E=x(f,3),y=x(m,3),T=x(v,2);e?.(.95),await St();const S=new Uint8Array(36864*4);for(let _=0;_<36864;_++){const D=_*4;S[D]=Math.round(me.clamp(C[_],0,1)*255),S[D+1]=Math.round(me.clamp(E[_],0,1)*255),S[D+2]=Math.round(me.clamp(y[_],0,1)*255),S[D+3]=Math.round(me.clamp(T[_],0,1)*255)}const w=new wi(S,192,192,Et);return w.minFilter=ut,w.magFilter=ut,w.wrapS=$t,w.wrapT=$t,w.needsUpdate=!0,this.disposables.push(w),e?.(1),{texture:w,centerX:l,centerZ:c,sizeX:u,sizeZ:h,depthGrid:T,gridRes:192}}updateAnimatedShafts(e){for(let t=0;t<this.animatedShaftMats.length;t++)this.animatedShaftMats[t].uniforms.uTime.value=e}dispose(){for(const e of this.disposables)e.dispose()}}async function mx(n,e){e?.(.05,"CONSTRUCTING GLASS-BLOCK NATATORIUM...");const t=new Rs(n,new Te(1.75,1.98,2.08)),i=t.createShadowKeyLight({color:14676214,intensity:2.95,offsetX:-18,offsetY:28,offsetZ:8,frustumHalfSize:42}),s=9.2;t.addBlock(-18,18,-1.6,-.48,-40.5,15,n.whiteTile,{climbable:!1}),t.addBlock(-18.2,18.2,-1.5,s+.6,13.8,15.2,n.whiteTile,{climbable:!1}),t.addBlock(-7.5,7.5,-.48,.75,6.5,13.8,n.whiteTile,{climbable:!0}),t.addStaircase({axis:"-Z",startPos:6.5,endPos:2.2,crossMin:-4,crossMax:4,startY:.75,endY:-.42,baseY:-.5,steps:5});for(const o of[[-36,-20],[-16,0],[3,13.5]])t.addGlassBlockWall({axis:"Z",planePos:-16.8,startAlong:o[0],endAlong:o[1],minY:.4,maxY:7.8,lightColor:14479606,lightIntensity:34,lightDistance:24,inwardSign:1}),t.addGlassBlockWall({axis:"Z",planePos:16.8,startAlong:o[0],endAlong:o[1],minY:.4,maxY:7.8,lightColor:14479606,lightIntensity:34,lightDistance:24,inwardSign:-1});t.addBlock(-17.6,-16.4,-1.2,.45,-40,14,n.whiteTile,{climbable:!1}),t.addBlock(16.4,17.6,-1.2,.45,-40,14,n.whiteTile,{climbable:!1}),t.addBlock(-17.6,-16.4,7.75,s+.6,-40,14,n.whiteTile,{climbable:!1}),t.addBlock(16.4,17.6,7.75,s+.6,-40,14,n.whiteTile,{climbable:!1});for(const[o,l]of[[0,3],[-20,-16],[-40,-36]])t.addBlock(-17.6,-16.2,-1.2,s+.6,o,l,n.whiteTile,{climbable:!1}),t.addBlock(16.2,17.6,-1.2,s+.6,o,l,n.whiteTile,{climbable:!1});for(const o of[0,-12,-24,-36])t.addCylinderColumn(-7.2,o,.6,-.5,s,n.whiteTile,!0,!0),t.addCylinderColumn(7.2,o,.6,-.5,s,n.whiteTile,!0,!0),t.addSubmergedPoolDrain(0,-.48,o-5.5,1.45);e?.(.24,"CONSTRUCTING DEEP BASIN & WALKWAYS..."),await St(),t.addSmoothArchedWall({orientation:"Z",planeMin:-40.8,planeMax:-39.4,spanMin:-17.4,spanMax:17.4,openCenter:0,openWidth:11.4,floorY:-.48,springY:3.2,topY:s}),t.addBlock(-18.2,-16.8,-4.2,s+.6,-90,-39.4,n.whiteTile,{climbable:!1}),t.addBlock(16.8,18.2,-4.2,s+.6,-90,-39.4,n.whiteTile,{climbable:!1}),t.addBlock(-9,9,-4.4,-3.45,-90,-39.4,n.accentTile,{climbable:!1}),t.addSubmergedPoolDrain(0,-3.45,-52,1.6),t.addSubmergedPoolDrain(0,-3.45,-76,1.6),t.addRecessedUnderwaterLamp({x:-8.6,y:-1.65,z:-56,normalX:1,normalZ:0,color:9368312,intensity:22,distance:20}),t.addRecessedUnderwaterLamp({x:8.6,y:-1.65,z:-74,normalX:-1,normalZ:0,color:9368312,intensity:22,distance:20}),t.addBlock(-16.8,16.8,-3.45,-.42,-45.5,-40.5,n.whiteTile,{climbable:!0}),t.addStaircase({axis:"-Z",startPos:-45.5,endPos:-52,crossMin:-4.2,crossMax:4.2,startY:-.42,endY:-3.35,baseY:-3.45,steps:10}),t.addStaircase({axis:"-Z",startPos:-45.5,endPos:-54.5,crossMin:-16.4,crossMax:-10.4,startY:-.42,endY:2.35,baseY:-3.45,steps:11}),t.addStaircase({axis:"-Z",startPos:-45.5,endPos:-54.5,crossMin:10.4,crossMax:16.4,startY:-.42,endY:2.35,baseY:-3.45,steps:11}),t.addBlock(-16.8,-8.6,-3.45,2.35,-88.5,-54.5,n.whiteTile,{climbable:!0}),t.addBlock(8.6,16.8,-3.45,2.35,-88.5,-54.5,n.whiteTile,{climbable:!0}),t.addChromeHandrail({axis:"Z",crossPos:-8.78,startAlong:-60.1,endAlong:-55,deckY:2.35,collide:!0}),t.addChromeHandrail({axis:"Z",crossPos:-8.78,startAlong:-65.4,endAlong:-61.9,deckY:2.35,collide:!0}),t.addChromeHandrail({axis:"Z",crossPos:-8.78,startAlong:-86,endAlong:-70.6,deckY:2.35,collide:!0}),t.addChromeHandrail({axis:"Z",crossPos:8.78,startAlong:-65.4,endAlong:-55,deckY:2.35,collide:!0}),t.addChromeHandrail({axis:"Z",crossPos:8.78,startAlong:-77.1,endAlong:-70.6,deckY:2.35,collide:!0}),t.addChromeHandrail({axis:"Z",crossPos:8.78,startAlong:-86,endAlong:-78.9,deckY:2.35,collide:!0}),t.addBlock(-8.6,8.6,1.75,2.35,-70.4,-65.6,n.whiteTile,{climbable:!0,blocksWater:!1}),t.addChromeHandrail({axis:"X",crossPos:-65.75,startAlong:-8.4,endAlong:8.4,deckY:2.35,collide:!0}),t.addChromeHandrail({axis:"X",crossPos:-70.25,startAlong:-8.4,endAlong:8.4,deckY:2.35,collide:!0}),t.addChromePoolLadder({x:-8.6,z:-61,normalX:1,normalZ:0,minY:-2.9,maxY:2.35,topExitOffset:.92,deckReturn:!0,style:"chrome"}),t.addChromePoolLadder({x:8.6,z:-78,normalX:-1,normalZ:0,minY:-2.9,maxY:2.35,topExitOffset:.92,deckReturn:!0,style:"chrome"}),t.addGlassBlockWall({axis:"Z",planePos:-16.8,startAlong:-84,endAlong:-56,minY:5.2,maxY:8.6,lightColor:14216949,lightIntensity:32,lightDistance:24,inwardSign:1}),t.addGlassBlockWall({axis:"Z",planePos:16.8,startAlong:-84,endAlong:-56,minY:5.2,maxY:8.6,lightColor:14216949,lightIntensity:32,lightDistance:24,inwardSign:-1}),t.addLonelyDoor({x:-16.75,floorY:2.35,z:-68,normalX:1,normalZ:0}),t.addLonelyDoor({x:16.75,floorY:2.35,z:-68,normalX:-1,normalZ:0}),t.addWallVentGrate(-16.75,4.3,-60,1,0,1.3,.55),t.addWallVentGrate(16.75,4.3,-76,-1,0,1.3,.55),e?.(.45,"INSTALLING SKYLIGHT WELLS & TRANSITION CORRIDOR..."),await St(),t.addCeilingWithCutouts(-17.8,17.8,-101.2,14.5,s,[{cx:0,cz:-16,w:6.4,d:10},{cx:0,cz:-68,w:7.2,d:12},{cx:0,cz:-94.5,w:6.8,d:6.8}]);for(const[o,l]of[[-16,10],[-68,12],[-94.5,6.8]])t.addSkylightWell({cx:0,cz:o,w:6.6,d:l,ceilingY:s,wellHeight:1.8,beamLength:9.6,lightColor:14479606,lightIntensity:88,lightDistance:32,shaftColor:14085878,shaftOpacity:.095,underwaterBeamDepth:2.4,useGlassBlocks:!0});t.addBlock(-16.8,16.8,-3.45,.85,-100,-88.5,n.whiteTile,{climbable:!0}),t.addStaircase({axis:"+Z",startPos:-88.5,endPos:-81,crossMin:-4,crossMax:4,startY:.85,endY:-3.3,baseY:-3.45,steps:13}),t.addStaircase({axis:"-Z",startPos:-88.5,endPos:-93.5,crossMin:-14.8,crossMax:-10.4,startY:2.35,endY:.85,baseY:.2,steps:5}),t.addStaircase({axis:"-Z",startPos:-88.5,endPos:-93.5,crossMin:10.4,crossMax:14.8,startY:2.35,endY:.85,baseY:.2,steps:5}),t.addBlock(-18.2,-16.8,-1,s+.6,-101.2,-89.5,n.whiteTile,{climbable:!1}),t.addBlock(16.8,18.2,-1,s+.6,-101.2,-89.5,n.whiteTile,{climbable:!1}),t.addSmoothArchedWall({orientation:"Z",planeMin:-101.2,planeMax:-99.8,spanMin:-17.4,spanMax:17.4,openCenter:0,openWidth:4.8,floorY:.85,springY:3.4,topY:s+.6}),t.addBlock(-2.6,2.6,-.8,.85,-104,-99.8,n.whiteTile,{climbable:!0}),t.addStaircase({axis:"-Z",startPos:-104,endPos:-108.5,crossMin:-2.4,crossMax:2.4,startY:.85,endY:-.38,baseY:-1,steps:5}),t.addBlock(-2.6,2.6,-1.2,-.38,-126,-108.5,n.whiteTile,{climbable:!1}),t.addBlock(-3.6,-2.4,-1.2,4.4,-126,-99.8,n.whiteTile,{climbable:!1}),t.addBlock(2.4,3.6,-1.2,4.4,-126,-99.8,n.whiteTile,{climbable:!1}),t.addBlock(-3.6,3.6,3.85,4.4,-126,-99.8,n.whiteTile,{climbable:!1,blocksWater:!1}),t.addBlock(-3.6,3.6,-1.2,4.4,-126.8,-125.8,n.glassBlock,{climbable:!1,castShadow:!1}),t.addRecessedCeilingLight({x:0,ceilingY:3.85,z:-106,w:1.4,d:2.8,color:15137020,intensity:26,distance:18}),t.addRecessedCeilingLight({x:0,ceilingY:3.85,z:-116,w:1.4,d:2.8,color:13694200,intensity:28,distance:20}),t.addRecessedCeilingLight({x:0,ceilingY:3.85,z:-123.5,w:1.8,d:2.2,color:10416373,intensity:34,distance:22});const r=await t.bakeLevelFieldAsync(o=>e?.(.5+o*.5,"BAKING HYDRODYNAMIC LIGHT FIELD...")),a=[{id:"s1-natatorium",label:"STAGE 01 · GLASS-BLOCK NATATORIUM",minX:-19,maxX:19,minZ:-40,maxZ:16},{id:"s1-basin",label:"STAGE 01 · PERIMETER WALKWAYS & BASIN",minX:-19,maxX:19,minZ:-89,maxZ:-40},{id:"s1-atrium",label:"STAGE 01 · FROSTED MIST ATRIUM",minX:-19,maxX:19,minZ:-101,maxZ:-89},{id:"s1-corridor",label:"STAGE 01 · DESCENT THRESHOLD CORRIDOR",minX:-6,maxX:6,minZ:-128,maxZ:-101}];return{index:0,code:"STAGE 01",title:"GLASS-BLOCK HALLS",subtitle:"LIMINAL THRESHOLD // DIFFUSED NATATORIUM",group:t.group,colliders:t.colliders,cylinders:t.cylinders,ladders:t.ladders,currents:t.currents,zones:a,exitTrigger:{minX:-2.6,maxX:2.6,minY:-1,maxY:4,minZ:-126,maxZ:-121.5,nextLevelIndex:1},spawnPosition:new N(0,.75,10.8),spawnYaw:0,fieldData:r,shadowRig:i,waterStyle:{absorption:[.58,.13,.14],deepColor:[.02,.18,.22],shallowColor:[.09,.46,.5],reflectionTint:[.96,.99,1],waveAmplitude:.13,choppiness:.24,waveSpeed:.92,turbulence:.42,foamStrength:0,sunDirection:[-.45,.84,.18],sunSpecularColor:[.95,1.05,1.1],specularIntensity:.85,wetBandHeight:.42,causticStrength:.66,wallBounceCaustic:.3,underwaterFogColor:669760,underwaterFogDensity:.082,planeCenter:[0,-54],planeSize:[48,152]},envStyle:{fogColor:12768474,fogDensity:.0118,indirectFillColor:14543084,indirectFillIntensity:.065,envPreset:"overcast-mist",envIntensity:.25,baseExposure:.98,warmthGrade:.06,grimeStrength:.04,glassGlowColor:14479606,glassGlowIntensity:.62,ssaoIntensity:.9,bloomIntensity:.36,audioProfile:"stage01-glass-halls",tileTint:16054521,accentTint:8296866,causticTint:10021874,defaultFlashlightOn:!1},update(o){t.updateAnimatedShafts(o)},dispose(){t.dispose()}}}async function gx(n,e){e?.(.04,"CONSTRUCTING ENTRY CORRIDOR & TURQUOISE SHELF...");const t=new Rs(n,new Te(2.15,2.3,2.38)),i=t.createShadowKeyLight({color:14215922,intensity:2.45,offsetX:-36,offsetY:96,offsetZ:28,frustumHalfSize:88}),s=-36,r=114,a=-62,o=62,l=-24,c=-180;t.addBlock(-2.6,2.6,-1.2,-.38,-24,18,n.whiteTile,{climbable:!1}),t.addBlock(-4.4,-2.4,-1.2,4.4,-24,18,n.whiteTile,{climbable:!1}),t.addBlock(2.4,4.4,-1.2,4.4,-24,18,n.whiteTile,{climbable:!1}),t.addBlock(-4.4,4.4,3.85,4.8,-24,18,n.whiteTile,{climbable:!1,blocksWater:!1}),t.addBlock(-4.4,4.4,-1.2,4.8,17.2,18.6,n.whiteTile,{climbable:!1}),t.addRecessedCeilingLight({x:0,ceilingY:3.85,z:12,w:1.5,d:3,color:15792636,intensity:30,distance:20}),t.addRecessedCeilingLight({x:0,ceilingY:3.85,z:-2,w:1.5,d:3,color:15398651,intensity:30,distance:20}),t.addRecessedCeilingLight({x:0,ceilingY:3.85,z:-15.5,w:1.5,d:3,color:14480634,intensity:36,distance:22}),t.addBlock(-24,24,s,-.44,-44,-24,n.whiteTile,{climbable:!0}),t.addBlock(-24,24,-.44,.36,-44,-41.6,n.whiteTile,{climbable:!0}),t.addStaircase({axis:"-Z",startPos:-39.2,endPos:-41.6,crossMin:-16,crossMax:16,startY:-.44,endY:.36,baseY:-.5,steps:3}),t.addBlock(a,-24,s,-.44,-31.5,-24,n.whiteTile,{climbable:!0}),t.addBlock(24,o,s,-.44,-31.5,-24,n.whiteTile,{climbable:!0}),t.addRecessedUnderwaterLamp({x:-11,y:-.22,z:-24.05,normalX:0,normalZ:-1,color:7402222,intensity:34,distance:28,withBeam:!1}),t.addRecessedUnderwaterLamp({x:11,y:-.22,z:-24.05,normalX:0,normalZ:-1,color:7402222,intensity:34,distance:28,withBeam:!1});const u=new Ut(13169912,78,52,1.3);u.position.set(0,9.5,-34),t.group.add(u),t.registerWaterLight(0,-34,28,1),t.addChromePoolLadder({x:-9.5,z:-44,normalX:0,normalZ:-1,minY:-6.5,maxY:.36,topExitOffset:.9,deckReturn:!0,style:"chrome"}),t.addChromePoolLadder({x:9.5,z:-44,normalX:0,normalZ:-1,minY:-6.5,maxY:.36,topExitOffset:.9,deckReturn:!0,style:"chrome"}),t.addBlock(a-4,o+4,s-2,s,c-4,l+4,n.accentTile,{climbable:!1}),e?.(.16,"CARVING THOUSANDS OF RECESSED TILED WINDOW CAVITIES..."),await St(),t.addBlock(a-3,-2.4,s,4.2,l-2.4,l+.4,n.whiteTile,{climbable:!1}),t.addBlock(2.4,o+3,s,4.2,l-2.4,l+.4,n.whiteTile,{climbable:!1}),t.addBlock(a-3,a,s,4.2,c-2.4,l+.4,n.whiteTile,{climbable:!1}),t.addBlock(o,o+3,s,4.2,c-2.4,l+.4,n.whiteTile,{climbable:!1}),t.addBlock(a-3,-4,s,4.2,c-2.4,c,n.whiteTile,{climbable:!1}),t.addBlock(4,o+3,s,4.2,c-2.4,c,n.whiteTile,{climbable:!1}),t.colliders.push({minX:a-2.4,maxX:o+2.4,minY:4.2,maxY:r,minZ:l-2.4,maxZ:l,climbable:!1},{minX:a-2.4,maxX:a,minY:4.2,maxY:18,minZ:c,maxZ:l,climbable:!1},{minX:a-2.4,maxX:a,minY:22.8,maxY:r,minZ:c,maxZ:l,climbable:!1},{minX:a-2.4,maxX:a,minY:18,maxY:22.8,minZ:-64,maxZ:l,climbable:!1},{minX:a-2.4,maxX:a,minY:18,maxY:22.8,minZ:-136,maxZ:-70,climbable:!1},{minX:a-2.4,maxX:a,minY:18,maxY:22.8,minZ:c,maxZ:-142,climbable:!1},{minX:o,maxX:o+2.4,minY:4.2,maxY:18,minZ:c,maxZ:l,climbable:!1},{minX:o,maxX:o+2.4,minY:22.8,maxY:r,minZ:c,maxZ:l,climbable:!1},{minX:o,maxX:o+2.4,minY:18,maxY:22.8,minZ:-64,maxZ:l,climbable:!1},{minX:o,maxX:o+2.4,minY:18,maxY:22.8,minZ:-136,maxZ:-70,climbable:!1},{minX:o,maxX:o+2.4,minY:18,maxY:22.8,minZ:c,maxZ:-142,climbable:!1},{minX:a-2.4,maxX:o+2.4,minY:4.2,maxY:36,minZ:c-2.4,maxZ:c,climbable:!1},{minX:a-2.4,maxX:46,minY:36,maxY:41.2,minZ:c-2.4,maxZ:c,climbable:!1},{minX:54,maxX:o+2.4,minY:36,maxY:41.2,minZ:c-2.4,maxZ:c,climbable:!1},{minX:a-2.4,maxX:o+2.4,minY:41.2,maxY:r,minZ:c-2.4,maxZ:c,climbable:!1}),t.addRecessedTiledWallGrid({axis:"X",wallFacePos:l-.02,inwardSign:-1,alongMin:a,alongMax:o,minY:4.2,maxY:r,stepAlong:2.8,stepY:2.8,winW:1.08,winH:1.08,recessDepth:2.2}),e?.(.24,"CARVING NORTH & LATERAL PERFORATED MONOLITHS..."),await St(),t.addRecessedTiledWallGrid({axis:"X",wallFacePos:c+.02,inwardSign:1,alongMin:a,alongMax:o,minY:4.2,maxY:r,stepAlong:2.8,stepY:2.8,winW:1.08,winH:1.08,recessDepth:2.2,exclusions:[{aMin:46,aMax:54,yMin:35.8,yMax:41.6,solidFill:!1}]}),t.addRecessedTiledWallGrid({axis:"Z",wallFacePos:a+.02,inwardSign:1,alongMin:c,alongMax:l,minY:4.2,maxY:r,stepAlong:2.8,stepY:2.8,winW:1.08,winH:1.08,recessDepth:2.2,exclusions:[{aMin:-70,aMax:-64,yMin:17.8,yMax:23,solidFill:!1},{aMin:-142,aMax:-136,yMin:17.8,yMax:23,solidFill:!1},{aMin:-70.5,aMax:-63.5,yMin:4.2,yMax:17.8,solidFill:!0},{aMin:-142.5,aMax:-135.5,yMin:23,yMax:36.8,solidFill:!0}]}),t.addRecessedTiledWallGrid({axis:"Z",wallFacePos:o-.02,inwardSign:-1,alongMin:c,alongMax:l,minY:4.2,maxY:r,stepAlong:2.8,stepY:2.8,winW:1.08,winH:1.08,recessDepth:2.2,exclusions:[{aMin:-70,aMax:-64,yMin:17.8,yMax:23,solidFill:!1},{aMin:-142,aMax:-136,yMin:17.8,yMax:23,solidFill:!1},{aMin:-70.5,aMax:-63.5,yMin:4.2,yMax:17.8,solidFill:!0}]}),e?.(.38,"BUILDING ABYSSAL PIERS, LADDERS & HIGH GALLERIES..."),await St();for(const f of[-26,26])t.addBlock(f-4.2,f+4.2,s,.72,-108,-99.6,n.whiteTile,{climbable:!0}),t.addBlock(f-3.4,f+3.4,.72,24,-107.2,-100.4,n.whiteTile,{climbable:!1}),t.addChromePoolLadder({x:f,z:-99.6,normalX:0,normalZ:1,minY:-5.5,maxY:.72,topExitOffset:.75,deckReturn:!0,style:"chrome"}),t.addRecessedUnderwaterLamp({x:f,y:-6.5,z:-99.55,normalX:0,normalZ:1,color:4907228,intensity:36,distance:34}),t.addRecessedUnderwaterLamp({x:f,y:-13,z:-108.05,normalX:0,normalZ:-1,color:4115156,intensity:36,distance:34});t.addSmoothArchedWall({orientation:"Z",planeMin:-106.2,planeMax:-101.4,spanMin:-22.5,spanMax:22.5,openCenter:0,openWidth:26,floorY:-18.5,springY:-11.5,topY:-3.6,mat:n.whiteTile}),t.addBlock(a,-56.5,s,.72,-78,-31.5,n.whiteTile,{climbable:!0}),t.addStaircase({axis:"-Z",startPos:-31.5,endPos:-35.5,crossMin:a,crossMax:-56.5,startY:-.44,endY:.72,baseY:-.7,steps:4}),t.addChromePoolLadder({x:-56.5,z:-50,normalX:1,normalZ:0,minY:-5.5,maxY:.72,topExitOffset:.9,deckReturn:!0,style:"chrome"}),t.addBlock(56.5,o,s,.72,-78,-31.5,n.whiteTile,{climbable:!0}),t.addStaircase({axis:"-Z",startPos:-31.5,endPos:-35.5,crossMin:56.5,crossMax:o,startY:-.44,endY:.72,baseY:-.7,steps:4}),t.addChromePoolLadder({x:56.5,z:-50,normalX:-1,normalZ:0,minY:-5.5,maxY:.72,topExitOffset:.9,deckReturn:!0,style:"chrome"}),t.addBlock(a,-55.5,17.1,18,-72,-62,n.whiteTile,{climbable:!0,blocksWater:!1}),t.addChromePoolLadder({x:a+.04,z:-67,normalX:1,normalZ:0,minY:.72,maxY:18,topExitX:-59.5,topExitZ:-64,deckReturn:!1,style:"steel"}),t.addBlock(55.5,o,17.1,18,-72,-62,n.whiteTile,{climbable:!0,blocksWater:!1}),t.addChromePoolLadder({x:o-.04,z:-67,normalX:-1,normalZ:0,minY:.72,maxY:18,topExitX:59.5,topExitZ:-64,deckReturn:!1,style:"steel"}),t.addBlock(a-9,a,17.1,18,-145,-60,n.whiteTile,{climbable:!0,blocksWater:!1}),t.addBlock(a-10.2,a-9,17.1,23.6,-145,-60,n.whiteTile,{climbable:!1}),t.addBlock(a-10.2,a,22.8,23.8,-145,-60,n.whiteTile,{climbable:!1,blocksWater:!1}),t.addBlock(a-10.2,a,17.1,23.8,-61,-60,n.whiteTile,{climbable:!1}),t.addBlock(a-10.2,a,17.1,23.8,-146,-145,n.whiteTile,{climbable:!1}),t.addBlock(o,o+9,17.1,18,-145,-60,n.whiteTile,{climbable:!0,blocksWater:!1}),t.addBlock(o+9,o+10.2,17.1,23.6,-145,-60,n.whiteTile,{climbable:!1}),t.addBlock(o,o+10.2,22.8,23.8,-145,-60,n.whiteTile,{climbable:!1,blocksWater:!1}),t.addBlock(o,o+10.2,17.1,23.8,-61,-60,n.whiteTile,{climbable:!1}),t.addBlock(o,o+10.2,17.1,23.8,-146,-145,n.whiteTile,{climbable:!1});for(const f of[-68,-90,-112,-134])t.addRecessedCeilingLight({x:a-4.5,ceilingY:22.8,z:f,w:1.8,d:2.8,color:14742264,intensity:28,distance:26}),t.addRecessedCeilingLight({x:o+4.5,ceilingY:22.8,z:f,w:1.8,d:2.8,color:14742264,intensity:28,distance:26});t.addBlock(a,-54.5,17.1,18,-144,-134,n.whiteTile,{climbable:!0,blocksWater:!1}),t.addBlock(54.5,o,17.1,18,-144,-134,n.whiteTile,{climbable:!0,blocksWater:!1}),t.addBlock(a,-55.5,35.1,36,c,-132,n.whiteTile,{climbable:!0,blocksWater:!1}),t.addBlock(a,o,35.1,36,c,-173.5,n.whiteTile,{climbable:!0,blocksWater:!1}),t.addChromeHandrail({axis:"X",crossPos:-173.8,startAlong:-55.2,endAlong:55.2,deckY:36,collide:!0}),t.addChromePoolLadder({x:a+.04,z:-139,normalX:1,normalZ:0,minY:18,maxY:36,topExitX:-59.5,topExitZ:-135.5,deckReturn:!1,style:"steel"}),e?.(.52,"CONSTRUCTING NORTH DESCENT & COFFERED SKYLIGHT ROOF..."),await St(),t.addBlock(45.5,55,35.1,36,-190,c,n.whiteTile,{climbable:!0,blocksWater:!1}),t.addBlock(44.5,45.5,-1,42,-192,c,n.whiteTile,{climbable:!1}),t.addBlock(55,56.2,-1,42,-192,c,n.whiteTile,{climbable:!1}),t.addBlock(44.5,56.2,-1,42,-193.2,-192,n.whiteTile,{climbable:!1}),t.addBlock(44.5,56.2,41.2,42.2,-193.2,c,n.whiteTile,{climbable:!1,blocksWater:!1}),t.addStaircase({axis:"-X",startPos:48,endPos:14,crossMin:-189,crossMax:-182.5,startY:36,endY:18,baseY:17,steps:52}),t.addBlock(5,14.5,17,18,-189.5,-182,n.whiteTile,{climbable:!0,blocksWater:!1}),t.addBlock(5,56,17,42,-190.5,-189.5,n.whiteTile,{climbable:!1}),t.addBlock(5,56,41,42,-190.5,-181.5,n.whiteTile,{climbable:!1,blocksWater:!1}),t.addStaircase({axis:"-Z",startPos:-189.5,endPos:-214,crossMin:5.5,crossMax:13.5,startY:18,endY:.72,baseY:-.8,steps:50}),t.addBlock(4.5,5.5,-1,23,-216,-181.5,n.whiteTile,{climbable:!1}),t.addBlock(13.5,14.5,-1,23,-216,-189.5,n.whiteTile,{climbable:!1}),t.addBlock(4.5,14.5,22.5,23.5,-216,-189.5,n.whiteTile,{climbable:!1,blocksWater:!1}),t.addBlock(-12,12,s,.72,c,-172,n.whiteTile,{climbable:!0}),t.addChromePoolLadder({x:0,z:-172,normalX:0,normalZ:1,minY:-5.5,maxY:.72,topExitOffset:.9,deckReturn:!0,style:"chrome"}),t.addBlock(-4.5,14.5,-1.2,.72,-216,c,n.whiteTile,{climbable:!0}),t.addStaircase({axis:"-Z",startPos:-190,endPos:-196,crossMin:-3.5,crossMax:3.5,startY:.72,endY:-.52,baseY:-1.4,steps:5}),t.addBlock(-3.8,3.8,-1.6,-.52,-216,-196,n.whiteTile,{climbable:!1}),t.addBlock(-4.8,-3.6,-1.6,4.8,-216,c,n.whiteTile,{climbable:!1}),t.addBlock(3.6,4.8,-1.6,4.8,-216,-206,n.whiteTile,{climbable:!1}),t.addBlock(-4.8,4.8,3.9,4.8,-216,c,n.whiteTile,{climbable:!1,blocksWater:!1}),t.addBlock(-4.8,4.8,-1.6,4.8,-217.2,-216,n.whiteTile,{climbable:!1}),t.addRecessedCeilingLight({x:30,ceilingY:40.9,z:-185.8,w:2.2,d:2.2,color:15004922,intensity:36,distance:32}),t.addRecessedCeilingLight({x:9.5,ceilingY:22.4,z:-202,w:2.2,d:2.2,color:15004922,intensity:36,distance:30}),t.addRecessedCeilingLight({x:0,ceilingY:3.9,z:-194,w:1.6,d:2.6,color:12775158,intensity:30,distance:22}),t.addRecessedCeilingLight({x:0,ceilingY:3.9,z:-209,w:1.6,d:2.6,color:10807026,intensity:34,distance:22}),t.addCofferedWhiteSkylightGrid({ceilingY:r,spacing:22,panelSize:15.5,gridHalfCount:4,centerX:0,centerZ:-102,beamDepth:2.4,panelColor:new Te(1.95,2.12,2.2)});for(const f of[-56,-102,-148]){const m=new Ut(12770532,240,155,1.12);m.position.set(0,68,f),t.group.add(m),t.registerWaterLight(0,f,58,.78)}const h=await t.bakeLevelFieldAsync(f=>e?.(.6+f*.4,"BAKING ABYSSAL DEPTH & WAVE FIELD..."),{centerX:0,centerZ:-102,sizeX:164,sizeZ:256}),d=[{id:"s2-entry",label:"STAGE 02 · WHITE-TILED APPROACH",minX:-5,maxX:5,minZ:-24,maxZ:18},{id:"s2-shelf",label:"STAGE 02 · LUMINOUS TURQUOISE SHELF",minX:-26,maxX:26,minZ:-44,maxZ:-24,maxY:5},{id:"s2-high",label:"STAGE 02 · HIGH PERFORATED OVERLOOK",minX:-74,maxX:74,minZ:-195,maxZ:-24,minY:30},{id:"s2-mid",label:"STAGE 02 · RECESSED MONOLITH GALLERIES",minX:-74,maxX:74,minZ:-195,maxZ:-24,minY:14,maxY:30},{id:"s2-exit",label:"STAGE 02 · FLOODED DRAIN TUNNEL",minX:-6,maxX:16,minZ:-218,maxZ:-180,maxY:10},{id:"s2-abyss",label:"STAGE 02 · THE PERFORATED ABYSS",minX:-68,maxX:68,minZ:-184,maxZ:-24}];return{index:1,code:"STAGE 02",title:"THE PERFORATED ABYSS",subtitle:"MEGALOPHOBIC WAVE ATRIUM // BOTTOMLESS DROP-OFF",group:t.group,colliders:t.colliders,cylinders:t.cylinders,ladders:t.ladders,currents:t.currents,zones:d,exitTrigger:{minX:-3.8,maxX:3.8,minY:-1.6,maxY:4.2,minZ:-216.5,maxZ:-210,nextLevelIndex:2},spawnPosition:new N(0,-.36,13.5),spawnYaw:0,fieldData:h,shadowRig:i,waterStyle:{absorption:[.82,.24,.2],deepColor:[.003,.022,.03],shallowColor:[.08,.58,.6],reflectionTint:[.92,.96,1],waveAmplitude:.25,choppiness:.34,waveSpeed:1.05,turbulence:.74,depthWaveDamping:.45,foamStrength:0,sunDirection:[-.3,.94,.14],sunSpecularColor:[.9,.98,1.04],specularIntensity:.92,wetBandHeight:.72,causticStrength:.68,wallBounceCaustic:.26,underwaterFogColor:135702,underwaterFogDensity:.112,planeCenter:[0,-102],planeSize:[180,260]},envStyle:{fogColor:10137784,fogDensity:.0052,heightMistColor:14082790,heightMistStartY:36,heightMistEndY:112,heightMistStrength:.8,indirectFillColor:11978960,indirectFillIntensity:.075,envPreset:"abyss-courtyard",envIntensity:.28,baseExposure:.98,warmthGrade:0,grimeStrength:.08,glassGlowColor:13167346,glassGlowIntensity:.55,ssaoIntensity:.95,bloomIntensity:.34,audioProfile:"stage02-perforated-abyss",tileTint:15923193,accentTint:6058618,causticTint:7530726,defaultFlashlightOn:!1},update(f){t.updateAnimatedShafts(f)},dispose(){t.dispose()}}}async function vx(n,e){e?.(.04,"EXCAVATING 54-STORY CYLINDRICAL SILO...");const t=new Rs(n,new Te(2.25,2.38,2.46)),i=t.createShadowKeyLight({color:14872822,intensity:2.35,offsetX:-18,offsetY:148,offsetZ:18,frustumHalfSize:72}),s=48,r=41.2,a=11,o=-36,l=162,c=[16,36,56,76,96],u=5.2;t.addBlock(-2.6,2.6,-1.8,-.45,s-.5,s+18,n.whiteTile,{climbable:!1}),t.addBlock(-4.2,-2.4,-1.8,3.8,s-.5,s+18,n.whiteTile,{climbable:!1}),t.addBlock(2.4,4.2,-1.8,3.8,s-.5,s+18,n.whiteTile,{climbable:!1}),t.addBlock(-4.2,4.2,3.05,4,s-.5,s+18,n.whiteTile,{climbable:!1,blocksWater:!1}),t.addBlock(-4.2,4.2,-1.8,4,s+17.2,s+18.6,n.whiteTile,{climbable:!1}),t.addRecessedCeilingLight({x:0,ceilingY:3.05,z:s+12,w:1.5,d:2.4,color:15529722,intensity:26,distance:18}),t.addRecessedCeilingLight({x:0,ceilingY:3.05,z:s+3.5,w:1.5,d:2.4,color:14873594,intensity:28,distance:18}),t.addBlock(-s-6,s+6,o-2,o,-s-6,s+6,n.accentTile,{climbable:!1}),t.addCircularWalkwayRing({cx:0,cz:0,rInner:r+2,rOuter:s+.4,minY:o,maxY:-.36,segments:72,mat:n.whiteTile,collide:!0,blocksWater:!1}),t.addHollowCylinderShell({cx:0,cz:0,radius:s,thickness:2.4,minY:o,maxY:4.4,segments:72,mat:n.whiteTile,openings:[{angle:Math.PI*.5,halfArc:.056,minY:-1.6,maxY:3.2}],collide:!0,castShadow:!1}),t.addCurvedWallArc({cx:0,cz:0,rInner:s-.06,rOuter:s+.65,startAngle:0,endAngle:Math.PI*2,minY:4.25,maxY:4.55,segments:72,mat:n.whiteTile,collide:!1,castShadow:!1});const h=[],d=24;for(let U=0;U<c.length;U++){const W=c[U];for(let H=0;H<d;H++){const ie=H/d*Math.PI*2;h.push({angle:ie,halfArc:.025,minY:W-.1,maxY:W+3.55})}}t.cylinders.push({cx:0,cz:0,radius:s,minY:4.4,maxY:l+2,inverted:!0,thickness:2.2,openings:h}),t.cylinders.push({cx:0,cz:0,radius:s+a-.4,minY:14,maxY:104,inverted:!0,thickness:1.6,openings:[{angle:0,halfArc:.06,minY:35.5,maxY:40.5},{angle:0,halfArc:.06,minY:55.5,maxY:60.5}]}),e?.(.18,"CARVING RECESSED TILED WINDOW BANDS & BALCONY CORRIDORS..."),await St();const f=[[4.4,c[0]-.85],[c[0]+u,c[1]-.85],[c[1]+u,c[2]-.85],[c[2]+u,c[3]-.85],[c[3]+u,c[4]-.85],[c[4]+u,l]];for(let U=0;U<f.length;U++){const[W,H]=f[U];t.addRecessedCylinderWallGrid({cx:0,cz:0,radius:s,facingInward:!0,minY:W,maxY:H,stepY:3,countPerRing:72,winW:1.25,winH:1.6,recessDepth:2.2,mat:n.whiteTile,pinpointLightEveryN:13,pinpointColor:16055036}),U===3&&(e?.(.28,"CARVING UPPER SILO TIERS..."),await St())}const m=new Ss(.58,20);m.rotateX(Math.PI/2);const v=new Es(.58,.68,20);v.rotateX(Math.PI/2);const g=new hn({color:new Te(2.2,2.35,2.45),toneMapped:!1});t.disposables.push(m,v,g);const p=[],A=new dt;for(let U=0;U<c.length;U++){const W=c[U];t.addCircularWalkwayRing({cx:0,cz:0,rInner:r,rOuter:s+.06,minY:W-.85,maxY:W,segments:72,mat:n.whiteTile,collide:!0,blocksWater:!1}),t.addCircularWalkwayRing({cx:0,cz:0,rInner:s-.2,rOuter:s+a+.5,minY:W-.85,maxY:W,segments:48,mat:n.whiteTile,collide:!0,blocksWater:!1,visual:!1}),t.addCurvedWallArc({cx:0,cz:0,rInner:s-.08,rOuter:s+.65,startAngle:0,endAngle:Math.PI*2,minY:W-.88,maxY:W-.45,segments:72,mat:n.whiteTile,collide:!1,castShadow:!1}),t.addCurvedWallArc({cx:0,cz:0,rInner:s-.08,rOuter:s+.65,startAngle:0,endAngle:Math.PI*2,minY:W+u-.14,maxY:W+u+.16,segments:72,mat:n.whiteTile,collide:!1,castShadow:!1});const H=U===1||U===2?[{angle:0,halfArc:.08}]:[];t.addRecessedBalconyCorridorRing({cx:0,cz:0,radius:s,floorY:W,bandHeight:u,count:d,doorW:1.95,doorH:3.45,corridorDepth:a,mat:n.whiteTile,openAngles:H});const ie=36,oe=(r+s)*.5;for(let ue=0;ue<ie;ue++){const ne=(ue+.5)/ie*Math.PI*2;A.position.set(Math.cos(ne)*oe,W-.87,Math.sin(ne)*oe),A.rotation.set(0,0,0),A.updateMatrix(),p.push(A.matrix.clone())}for(let ue=0;ue<6;ue++){const ne=ue/6*Math.PI*2+U*.3,j=new Ut(15004408,48,38,1.32);j.position.set(Math.cos(ne)*oe,W+3.6,Math.sin(ne)*oe),t.group.add(j)}}const M=new rn(m,g,p.length),x=new rn(v,n.chromeMetal,p.length);for(let U=0;U<p.length;U++)M.setMatrixAt(U,p[U]),x.setMatrixAt(U,p[U]);M.instanceMatrix.needsUpdate=!0,x.instanceMatrix.needsUpdate=!0,M.frustumCulled=!1,x.frustumCulled=!1,t.group.add(x,M),e?.(.42,"ANCHORING LONG WEATHERED-STEEL VERTICAL LADDERS..."),await St();const C=[.3*Math.PI,.78*Math.PI,1.26*Math.PI,1.74*Math.PI,.14*Math.PI];for(let U=0;U<c.length;U++){const W=C[U],H=U===0?-4:c[U-1],ie=c[U],oe=Math.cos(W),ue=Math.sin(W),ne=r+.65,j=oe*ne,le=ue*ne,B=U===0?o:H-.85;t.addCylinderColumn(j,le,.72,B,ie,n.whiteTile,!0,!0,!1,18);const Me=oe*(ne-.68),ce=ue*(ne-.68),xe=r+1.85;t.addChromePoolLadder({x:Me,z:ce,normalX:-oe,normalZ:-ue,minY:H,maxY:ie,topExitX:oe*xe,topExitZ:ue*xe,deckReturn:!0,style:"steel"})}e?.(.52,"CONSTRUCTING NON-EUCLIDEAN FLOATING CUBE VOID..."),await St();const E=c[1],y=c[2];t.addBlock(s+a-1,s+24,E-.8,E,-2.2,2.2,n.whiteTile,{climbable:!0,blocksWater:!1,aoBottom:0,aoTop:0}),t.addBlock(s+a-1,s+24,E,E+4.4,-3.2,-2,n.whiteTile,{climbable:!1,aoBottom:0,aoTop:0}),t.addBlock(s+a-1,s+24,E,E+4.4,2,3.2,n.whiteTile,{climbable:!1,aoBottom:0,aoTop:0}),t.addBlock(s+a-1,s+24,E+3.6,E+4.4,-3.2,3.2,n.whiteTile,{climbable:!1,blocksWater:!1,aoBottom:0,aoTop:0}),t.addBlock(s+a-1,s+24,y-.8,y,-2.2,2.2,n.whiteTile,{climbable:!0,blocksWater:!1,aoBottom:0,aoTop:0}),t.addBlock(s+a-1,s+24,y,y+4.4,-3.2,-2,n.whiteTile,{climbable:!1,aoBottom:0,aoTop:0}),t.addBlock(s+a-1,s+24,y,y+4.4,2,3.2,n.whiteTile,{climbable:!1,aoBottom:0,aoTop:0}),t.addBlock(s+a-1,s+24,y+3.6,y+4.4,-3.2,3.2,n.whiteTile,{climbable:!1,blocksWater:!1,aoBottom:0,aoTop:0});const T=s+26,S=26,w=[];for(let U=0;U<=S;U++){const W=U/S,H=W*Math.PI*2,ie=T+Math.sin(W*Math.PI)*42,oe=-Math.sin(H)*18,ue=me.lerp(E,y,W);w.push([ie,ue,oe,4.4])}const _=new Wc({color:724754});t.disposables.push(_);for(const[U,W,H,ie]of w){const oe=ie*.5;t.addBlock(U-oe,U+oe,W-ie,W,H-oe,H+oe,n.whiteTile,{collide:!0,climbable:!0,blocksWater:!1,castShadow:!1});const ue=new V0(new Zt(ie+.05,ie+.05,ie+.05));t.disposables.push(ue);const ne=new C0(ue,_);ne.position.set(U,W-oe,H),t.group.add(ne)}const D=new Zt(4.6,4.6,4.6),I=new Zt(4.78,.22,4.78);t.disposables.push(D,I);const F=[];for(let U=0;U<8;U++)for(let W=-5;W<=5;W++)for(let H=0;H<6;H++){const ie=T+4+U*14+(H*7+W*3)%3*2.1,oe=12+H*14.5+(U+W)%2*3,ue=W*13.5+U*5%3*1.8;let ne=!1;for(const[j,le,B]of w)if(Math.hypot(ie-j,oe-(le-2.2),ue-B)<8.5){ne=!0;break}ne||ie<T+6&&Math.abs(ue)<8||F.push([ie,oe,ue,.72+(U*3+H*5+Math.abs(W))%5*.28])}const k=new rn(D,n.whiteTile,F.length),z=new rn(I,n.cubeFrameMat,F.length);for(let U=0;U<F.length;U++){const[W,H,ie,oe]=F[U];A.position.set(W,H,ie),A.rotation.set(0,0,0),A.scale.setScalar(oe),A.updateMatrix(),k.setMatrixAt(U,A.matrix),A.position.set(W,H+2.3*oe,ie),A.scale.setScalar(oe),A.updateMatrix(),z.setMatrixAt(U,A.matrix)}k.instanceMatrix.needsUpdate=!0,z.instanceMatrix.needsUpdate=!0,k.frustumCulled=!1,z.frustumCulled=!1,t.group.add(k,z);for(const[U,W,H]of[[T+18,46,-12],[T+44,52,0],[T+24,60,14]]){const ie=new Ut(15004922,110,75,1.2);ie.position.set(U,W,H),t.group.add(ie)}e?.(.64,"SPANNING 83M RAILINGLESS SKYBRIDGE & COFFERED SKYLIGHT APEX..."),await St();const V=c[4];t.addBlock(-r-.6,r+.6,V-.75,V,-.82,.82,n.whiteTile,{climbable:!0,blocksWater:!1}),t.addCylinderColumn(0,0,4.2,V-1.2,V,n.whiteTile,!1,!0,!1,36),t.addBlock(-3.4,3.4,V-1.2,V,-3.4,3.4,n.whiteTile,{collide:!0,climbable:!0,blocksWater:!1,castShadow:!1});const G=155.5;t.addBlock(-.62,.62,V,G,-1.85,-.62,n.whiteTile,{climbable:!1,blocksWater:!1}),t.addChromePoolLadder({x:0,z:-.62,normalX:0,normalZ:1,minY:V,maxY:G,topExitX:0,topExitZ:-2,deckReturn:!0,style:"steel"}),t.addBlock(-4.4,4.4,G-.75,G,-4.4,.3,n.whiteTile,{climbable:!0,blocksWater:!1}),t.addChromeHandrail({axis:"X",crossPos:-4.2,startAlong:-4.2,endAlong:4.2,deckY:G,collide:!0}),t.addChromeHandrail({axis:"Z",crossPos:-4.2,startAlong:-4.2,endAlong:.1,deckY:G,collide:!0}),t.addChromeHandrail({axis:"Z",crossPos:4.2,startAlong:-4.2,endAlong:.1,deckY:G,collide:!0}),t.addBlock(-2.8,2.8,G,l,-4.5,-4,n.glassBlock,{climbable:!1,castShadow:!1}),t.addSubmergedPoolDrain(0,G+.01,-2.4,2.2),t.addCofferedWhiteSkylightGrid({ceilingY:l,spacing:11.5,panelSize:7.8,gridHalfCount:5,centerX:0,centerZ:0,clipRadius:s+2,beamDepth:2,panelColor:new Te(2.45,2.55,2.62)});const J=new Ut(15792380,380,210,1.08);J.position.set(0,l-8,0),t.group.add(J);const q=new Ut(13821164,240,160,1.15);q.position.set(0,92,0),t.group.add(q);const re=new Ut(11718360,165,130,1.2);re.position.set(0,36,0),t.group.add(re);const fe=new Ut(9224910,90,90,1.25);fe.position.set(0,8,0),t.group.add(fe),t.registerWaterLight(0,0,s,.88);const Se=await t.bakeLevelFieldAsync(U=>e?.(.68+U*.32,"BAKING SILO DEPTH & ACOUSTIC FIELD..."),{centerX:48,centerZ:4,sizeX:240,sizeZ:150}),O=[{id:"s3-tunnel",label:"STAGE 03 · FLOODED ENTRY TUNNEL",minX:-6,maxX:6,minZ:s-1,maxZ:s+20,maxY:6},{id:"s3-cube-void",label:"STAGE 03 · TESSELLATED CUBE VOID",minX:s+10,maxX:220,minZ:-90,maxZ:90},{id:"s3-zenith",label:"STAGE 03 · SKYLIGHT GRID APEX",minX:-54,maxX:54,minZ:-54,maxZ:54,minY:142},{id:"s3-skybridge",label:"STAGE 03 · RAILINGLESS SKYBRIDGE (96M)",minX:-54,maxX:54,minZ:-54,maxZ:54,minY:92,maxY:142},{id:"s3-balconies",label:"STAGE 03 · OVERHANGING BALCONY RINGS",minX:-62,maxX:62,minZ:-62,maxZ:62,minY:12,maxY:92},{id:"s3-silo",label:"STAGE 03 · THE SUNKEN PURGATORY",minX:-56,maxX:56,minZ:-56,maxZ:56}];return{index:2,code:"STAGE 03",title:"THE SUNKEN PURGATORY",subtitle:"54-STORY CYLINDRICAL SILO // VERTICAL VERTIGO",group:t.group,colliders:t.colliders,cylinders:t.cylinders,ladders:t.ladders,currents:t.currents,zones:O,exitTrigger:{minX:-4,maxX:4,minY:G-.5,maxY:l,minZ:-4.6,maxZ:-1.4,nextLevelIndex:3},spawnPosition:new N(0,-.4,s+14),spawnYaw:0,fieldData:Se,shadowRig:i,waterStyle:{absorption:[.85,.25,.21],deepColor:[.002,.018,.024],shallowColor:[.05,.36,.4],reflectionTint:[.9,.95,.98],waveAmplitude:.28,choppiness:.36,waveSpeed:1.08,turbulence:.8,depthWaveDamping:.38,foamStrength:0,sunDirection:[.1,.98,.1],sunSpecularColor:[.92,.98,1.05],specularIntensity:.9,wetBandHeight:.78,causticStrength:.58,wallBounceCaustic:.26,underwaterFogColor:135188,underwaterFogDensity:.122,planeCenter:[0,0],planeSize:[140,140]},envStyle:{fogColor:10794686,fogDensity:.0046,heightMistColor:14740206,heightMistStartY:40,heightMistEndY:158,heightMistStrength:.86,indirectFillColor:12241874,indirectFillIntensity:.082,envPreset:"silo-purgatory",envIntensity:.28,baseExposure:1,warmthGrade:0,grimeStrength:.12,glassGlowColor:14217978,glassGlowIntensity:.78,ssaoIntensity:.94,bloomIntensity:.42,audioProfile:"stage03-sunken-purgatory",tileTint:15791608,accentTint:5663348,causticTint:7397604,defaultFlashlightOn:!1},update(U){t.updateAnimatedShafts(U)},dispose(){t.dispose()}}}async function xx(n,e){e?.(.04,"SCULPTING COBALT MOSAIC ENTRY CANYON...");const t=new Rs(n,new Te(1.45,1.65,1.8)),i=n.cobaltMosaicTile,s=t.createShadowKeyLight({color:14214896,intensity:2.4,offsetX:76,offsetY:145,offsetZ:54,frustumHalfSize:120}),r=-36,a=26,o=42;t.addBlock(-520,520,r-2,r,-540,260,n.accentTile,{climbable:!1}),t.addBlock(-3.4,4.4,a-1,a,18,62,i,{climbable:!0,blocksWater:!1}),t.addCurvedWallArc({cx:28,cz:40,rInner:24.4,rOuter:26.6,startAngle:Math.PI*.72,endAngle:Math.PI*1.18,minY:a-1,maxY:a+28,segments:24,mat:i,collide:!0}),t.addCurvedWallArc({cx:28,cz:40,rInner:30.8,rOuter:33,startAngle:Math.PI*.72,endAngle:Math.PI*1.18,minY:a-1,maxY:a+28,segments:24,mat:i,collide:!0}),t.addBlock(-4.5,5,a,a+28,58,60.2,i,{climbable:!1}),t.addBlock(-3,3,a-1,a,0,24,i,{climbable:!0,blocksWater:!1}),t.addSmoothArchedWall({orientation:"Z",planeMin:18.8,planeMax:21.6,spanMin:-5.5,spanMax:5.5,openCenter:0,openWidth:5.4,floorY:a,springY:a+2.8,topY:a+26,mat:i});const l=20,c=148;t.addHollowCylinderShell({cx:0,cz:0,radius:l,thickness:2,minY:r,maxY:a+6.5,segments:60,mat:i,openings:[{angle:Math.PI*.5,halfArc:.16,minY:a,maxY:a+5.6},{angle:-Math.PI*.5,halfArc:.16,minY:a,maxY:a+5.6},{angle:0,halfArc:.16,minY:a,maxY:a+5.6}],collide:!0}),t.addCylinderColumn(0,0,12.2,r,c,i,!0,!0,!1,40),t.addRecessedCylinderWallGrid({cx:0,cz:0,radius:l+2,facingInward:!1,minY:a+6.5,maxY:c,stepY:4.2,countPerRing:36,winW:1.55,winH:1.85,recessDepth:2.4,mat:i}),t.addCircularWalkwayRing({cx:0,cz:0,rInner:12.2,rOuter:l+.15,minY:a-.85,maxY:a,segments:56,mat:i,collide:!0,blocksWater:!1}),t.addCircularWalkwayRing({cx:0,cz:0,rInner:l+1.8,rOuter:l+6.8,minY:a-.85,maxY:a,startAngle:-Math.PI*.65,endAngle:Math.PI*.45,segments:48,mat:i,collide:!0,blocksWater:!1}),t.addCircularWalkwayRing({cx:0,cz:0,rInner:l-.2,rOuter:l+2.3,minY:a+6.2,maxY:a+6.8,segments:48,mat:i,collide:!1});for(const _ of[48,72,96,120,140])t.addCircularWalkwayRing({cx:0,cz:0,rInner:l+1.8,rOuter:l+5.2,minY:_-.8,maxY:_,segments:40,mat:i,collide:!1});e?.(.18,"BRIDGING SKYWALK I & 50-STORY SPIRE BETA..."),await St(),t.addBlock(-2.8,2.8,a-.95,a,-72,-21.5,i,{climbable:!0,blocksWater:!1}),t.addBlock(-3,-2.5,a,a+.62,-72,-21.5,i,{climbable:!1,blocksWater:!1}),t.addBlock(2.5,3,a,a+.62,-72,-21.5,i,{climbable:!1,blocksWater:!1}),t.addSmoothArchedWall({orientation:"X",planeMin:-2.6,planeMax:2.6,spanMin:-72,spanMax:-21.5,openCenter:-46.75,openWidth:42,floorY:a-12.5,springY:a-10,topY:a-.9,mat:i,collide:!1});const u=-96,h=24,d=176,f=[{angle:Math.PI*.5,halfArc:.14,minY:a,maxY:a+5.8},{angle:Math.PI,halfArc:.14,minY:o,maxY:o+5.8}];for(let _=0;_<12;_++){const D=_/12*Math.PI*2+.26;f.push({angle:D,halfArc:.085,minY:a+1.1,maxY:a+6.8}),f.push({angle:D,halfArc:.085,minY:o+1.1,maxY:o+6.8})}t.addHollowCylinderShell({cx:0,cz:u,radius:h,thickness:2,minY:r,maxY:o+8.5,segments:64,mat:i,openings:f,collide:!0}),t.addCylinderColumn(0,u,15.6,r,d,i,!0,!0,!1,44),t.addRecessedCylinderWallGrid({cx:0,cz:u,radius:h+2,facingInward:!1,minY:o+8.5,maxY:d,stepY:4.2,countPerRing:42,winW:1.65,winH:1.9,recessDepth:2.5,mat:i}),t.addCircularWalkwayRing({cx:0,cz:u,rInner:15.6,rOuter:h+.15,minY:a-.85,maxY:a,segments:60,mat:i,collide:!0,blocksWater:!1}),t.addCircularWalkwayRing({cx:0,cz:u,rInner:15.6,rOuter:h+.15,minY:o-.85,maxY:o,startAngle:Math.PI*.45,endAngle:Math.PI*1.65,segments:44,mat:i,collide:!0,blocksWater:!1}),t.addSpiralStaircase({cx:0,cz:u,coreRadius:15.7,outerRadius:h-.15,startAngle:-Math.PI*.4,totalAngle:Math.PI*.88,startY:a,endY:o,steps:44,mat:i}),t.addCircularWalkwayRing({cx:0,cz:u,rInner:h-.2,rOuter:h+2.3,minY:o+8.2,maxY:o+8.8,segments:48,mat:i,collide:!1});for(const _ of[a,o,72,102,132,162])t.addCircularWalkwayRing({cx:0,cz:u,rInner:h+1.8,rOuter:h+5.6,minY:_-.85,maxY:_,segments:44,mat:i,collide:!1});for(let _=0;_<6;_++){const D=_/6*Math.PI*2,I=new Ut(12770540,42,34,1.35);I.position.set(Math.cos(D)*19.6,a+5.2,u+Math.sin(D)*19.6),t.group.add(I)}e?.(.34,"BRIDGING SKYWALK II & 55-STORY SPIRE GAMMA..."),await St();const m=-84,v=-172,g=24,p=194;t.addBlock(m-3.2,-23.5,o-.95,o,u-2.8,u+2.8,i,{climbable:!0,blocksWater:!1}),t.addBlock(m-3.2,-23.5,o,o+.62,u-3,u-2.5,i,{climbable:!1,blocksWater:!1}),t.addBlock(m+3.2,-23.5,o,o+.62,u+2.5,u+3,i,{climbable:!1,blocksWater:!1}),t.addBlock(m-3,m+3,o-.95,o,v+g-.5,u+2.8,i,{climbable:!0,blocksWater:!1}),t.addBlock(m-3.2,m-2.7,o,o+.62,v+g-.5,u+2.8,i,{climbable:!1,blocksWater:!1}),t.addBlock(m+2.7,m+3.2,o,o+.62,v+g-.5,u-2.8,i,{climbable:!1,blocksWater:!1});const A=[{angle:Math.PI*.5,halfArc:.16,minY:o,maxY:o+5.8},{angle:-Math.PI*.5,halfArc:.16,minY:1.8,maxY:7.4},{angle:Math.PI,halfArc:.16,minY:o,maxY:o+5.8}];for(let _=0;_<10;_++){const D=_/10*Math.PI*2+.31;A.push({angle:D,halfArc:.09,minY:o+1.1,maxY:o+6.8})}t.addHollowCylinderShell({cx:m,cz:v,radius:g,thickness:2,minY:r,maxY:o+8.5,segments:64,mat:i,openings:A,collide:!0}),t.addCylinderColumn(m,v,15.2,r,p,i,!0,!0,!1,44),t.addRecessedCylinderWallGrid({cx:m,cz:v,radius:g+2,facingInward:!1,minY:o+8.5,maxY:p,stepY:4.2,countPerRing:42,winW:1.65,winH:1.9,recessDepth:2.5,mat:i}),t.addCircularWalkwayRing({cx:m,cz:v,rInner:15.2,rOuter:g+.15,minY:o-.85,maxY:o,startAngle:-Math.PI*.05,endAngle:Math.PI*1.38,segments:44,mat:i,collide:!0,blocksWater:!1}),t.addCircularWalkwayRing({cx:m,cz:v,rInner:g+1.8,rOuter:g+7.2,minY:o-.85,maxY:o,startAngle:Math.PI*.65,endAngle:Math.PI*1.35,segments:32,mat:i,collide:!0,blocksWater:!1});const M=22;t.addSpiralStaircase({cx:m,cz:v,coreRadius:15.3,outerRadius:g-.15,startAngle:Math.PI*1.36,totalAngle:Math.PI*.86,startY:o,endY:M,steps:52,mat:i}),t.addCircularWalkwayRing({cx:m,cz:v,rInner:15.2,rOuter:g+.15,minY:M-.85,maxY:M,startAngle:Math.PI*.2,endAngle:Math.PI*.76,segments:24,mat:i,collide:!0,blocksWater:!1}),t.addSpiralStaircase({cx:m,cz:v,coreRadius:15.3,outerRadius:g-.15,startAngle:Math.PI*.72,totalAngle:Math.PI*.82,startY:M,endY:2,steps:52,mat:i}),t.addCircularWalkwayRing({cx:m,cz:v,rInner:15.2,rOuter:g+.15,minY:.4,maxY:2,segments:56,mat:i,collide:!0,blocksWater:!0}),t.addCircularWalkwayRing({cx:m,cz:v,rInner:g-.2,rOuter:g+2.3,minY:o+8.2,maxY:o+8.8,segments:48,mat:i,collide:!1});for(const _ of[74,108,142,176])t.addCircularWalkwayRing({cx:m,cz:v,rInner:g+1.8,rOuter:g+5.8,minY:_-.85,maxY:_,segments:40,mat:i,collide:!1});e?.(.5,"ERECTING 35-55 STORY COBALT SKYSCRAPER SEA..."),await St();const x=m,C=-242,E=16;t.addBlock(m-3.2,m+3.2,.4,2,C+E-.5,v-g+.5,i,{climbable:!0,blocksWater:!0}),t.addHollowCylinderShell({cx:x,cz:C,radius:E,thickness:2,minY:r,maxY:16,segments:52,mat:i,openings:[{angle:Math.PI*.5,halfArc:.22,minY:1.4,maxY:7.4}],collide:!0}),t.addRecessedCylinderWallGrid({cx:x,cz:C,radius:E+2,facingInward:!1,minY:16,maxY:132,stepY:4.4,countPerRing:32,winW:1.5,winH:1.85,recessDepth:2.2,mat:i}),t.addCircularWalkwayRing({cx:x,cz:C,rInner:E-.2,rOuter:E+2.3,minY:15.7,maxY:16.3,segments:40,mat:i,collide:!1}),t.addCircularWalkwayRing({cx:x,cz:C,rInner:6.4,rOuter:E+.15,minY:-16,maxY:2,segments:44,mat:i,collide:!0,blocksWater:!0}),t.addChromePoolLadder({x,z:C+6.4,normalX:0,normalZ:-1,minY:-5.5,maxY:2,topExitOffset:1,deckReturn:!0,style:"chrome"});for(let _=0;_<6;_++){const D=_/6*Math.PI*2;t.addRecessedUnderwaterLamp({x:x+Math.cos(D)*6.35,y:-7.5,z:C+Math.sin(D)*6.35,normalX:-Math.cos(D),normalZ:-Math.sin(D),color:5563636,intensity:44,distance:28})}const y=new Ut(8972020,62,46,1.3);y.position.set(x,16,C),t.group.add(y);const T=[[-74,18,17,134],[68,-14,21,162],[88,-82,19,178],[-64,-48,16,126],[66,-148,24,194],[136,-142,22,152],[-148,-84,25,184],[-162,-164,21,158],[-26,-196,19,144],[46,-224,27,198],[128,-238,22,168],[-156,-248,24,188],[-218,-118,28,192],[-228,-218,23,164],[192,-62,25,176],[206,-178,28,196],[176,-310,24,162],[68,-328,26,184],[-28,-344,22,154],[-172,-356,27,194],[-268,-316,25,174],[-276,-42,22,148],[148,54,20,138],[-152,46,22,146],[248,-288,29,198],[-318,-186,28,188],[-212,-418,26,176],[28,-428,30,196],[146,-408,25,172],[-108,-424,24,166]];for(let _=0;_<T.length;_++){const[D,I,F,k]=T[_];t.addCylinderColumn(D,I,F-2.3,r,k,i,!1,!1,!1,24),t.addRecessedCylinderWallGrid({cx:D,cz:I,radius:F,facingInward:!1,minY:-6,maxY:k,stepY:6.4,countPerRing:Math.max(16,Math.round(F*1.15)),winW:2.1,winH:2.5,recessDepth:2.3,mat:i});const z=26;for(let V=22;V<k-8;V+=z)t.addCircularWalkwayRing({cx:D,cz:I,rInner:F-.1,rOuter:F+3.4,minY:V-.85,maxY:V,segments:24,mat:i,collide:!1,castShadow:!1});_%6===5&&(e?.(.52+_/T.length*.18,"CARVING RECESSED WINDOWS ON COBALT MONOLITHS..."),await St())}t.setGlobalWaterIllumination(.66);const S=await t.bakeLevelFieldAsync(_=>e?.(.72+_*.28,"BAKING OCEANIC HORIZON FIELD..."),{centerX:-34,centerZ:-128,sizeX:420,sizeZ:440}),w=[{id:"s4-canyon",label:"STAGE 04 · COBALT MOSAIC CANYON",minX:-16,maxX:16,minZ:18,maxZ:64},{id:"s4-alpha",label:"STAGE 04 · SPIRE ALPHA CANTILEVER (26M)",minX:-32,maxX:32,minZ:-32,maxZ:24},{id:"s4-beta",label:"STAGE 04 · SPIRE BETA RING-CORRIDOR",minX:-34,maxX:34,minZ:-128,maxZ:-64},{id:"s4-gamma",label:"STAGE 04 · SPIRE GAMMA OVERLOOK (42M)",minX:-120,maxX:-48,minZ:-206,maxZ:-138},{id:"s4-delta",label:"STAGE 04 · SUBMERGED DESCENT SHAFT",minX:-108,maxX:-60,minZ:-268,maxZ:-216},{id:"s4-sea",label:"STAGE 04 · THE AZURE MONOLITH SPIRES",minX:-420,maxX:420,minZ:-460,maxZ:220}];return{index:3,code:"STAGE 04",title:"THE AZURE MONOLITH SPIRES",subtitle:"DROWNED OPEN-AIR HORIZON // 50-STORY COBALT SEA",group:t.group,colliders:t.colliders,cylinders:t.cylinders,ladders:t.ladders,currents:t.currents,zones:w,exitTrigger:{minX:x-6.8,maxX:x+6.8,minY:-16,maxY:-5.5,minZ:C-6.8,maxZ:C+6.8,nextLevelIndex:4},spawnPosition:new N(.4,a,52),spawnYaw:0,fieldData:S,shadowRig:s,waterStyle:{absorption:[.76,.28,.16],deepColor:[.005,.018,.036],shallowColor:[.02,.082,.13],reflectionTint:[.92,.96,1],waveAmplitude:.3,choppiness:.35,waveSpeed:1.06,turbulence:.76,depthWaveDamping:0,foamStrength:0,sunDirection:[.35,.72,.28],sunSpecularColor:[.85,.92,.98],specularIntensity:.78,wetBandHeight:.82,causticStrength:.48,wallBounceCaustic:.2,underwaterFogColor:202790,underwaterFogDensity:.088,planeCenter:[-35,-130],planeSize:[1100,1100]},envStyle:{fogColor:9083556,fogDensity:.0028,heightMistColor:10135986,heightMistStartY:95,heightMistEndY:210,heightMistStrength:.42,indirectFillColor:11715276,indirectFillIntensity:.16,envPreset:"azure-horizon",envIntensity:.38,baseExposure:1.02,warmthGrade:0,grimeStrength:.06,glassGlowColor:10281716,glassGlowIntensity:.55,ssaoIntensity:.84,bloomIntensity:.28,audioProfile:"stage04-azure-spires",hasSkyDome:!0,skyTopColor:6056564,skyHorizonColor:10135986,skySunColor:13688034,skySunDir:[.35,.72,.28],skyCloudCoverage:1,tileTint:15398138,accentTint:2509678,causticTint:7526640,defaultFlashlightOn:!1},update(_){t.updateAnimatedShafts(_)},dispose(){t.dispose()}}}async function Mx(n,e){e?.(.04,"RAISING 68M SUBMERGED HYPOSTYLE COLONNADE...");const t=new Rs(n,new Te(2.05,2.18,2.22)),i=t.createShadowKeyLight({color:15660794,intensity:2.75,offsetX:-32,offsetY:88,offsetZ:-24,frustumHalfSize:96}),s=-24,r=68;t.addBlock(-14,14,s,.92,22,38,n.whiteTile,{climbable:!0}),t.addBlock(-65.5,65.5,s,r+1.5,37.5,40,n.whiteTile,{climbable:!1}),t.addBlock(-67,-64,s,r+1.5,-126,40,n.whiteTile,{climbable:!1}),t.addBlock(64,67,s,r+1.5,-126,40,n.whiteTile,{climbable:!1}),t.addBlock(-65.5,65.5,s-2,s,-126,38,n.accentTile,{climbable:!1}),t.addStaircase({axis:"-Z",startPos:22,endPos:18,crossMin:-5.5,crossMax:5.5,startY:.92,endY:.62,baseY:-1,steps:2}),t.addBlock(-3.6,3.6,-.45,.62,-124,18,n.whiteTile,{climbable:!0,blocksWater:!1});for(const y of[0,-24,-48,-72,-96])t.addBlock(-15.5,15.5,-.45,.62,y-2.4,y+2.4,n.whiteTile,{climbable:!0,blocksWater:!1});t.addChromePoolLadder({x:-3.6,z:-12,normalX:-1,normalZ:0,minY:-6.8,maxY:.62,topExitOffset:.9,deckReturn:!0,style:"chrome"}),t.addChromePoolLadder({x:3.6,z:-60,normalX:1,normalZ:0,minY:-6.8,maxY:.62,topExitOffset:.9,deckReturn:!0,style:"chrome"}),t.addChromePoolLadder({x:-3.6,z:-108,normalX:-1,normalZ:0,minY:-6.8,maxY:.62,topExitOffset:.9,deckReturn:!0,style:"chrome"});const a=[-42,-16.5,16.5,42],o=[4,-20,-44,-68,-92,-114];for(const y of a)for(const T of o)t.addCylinderColumn(y,T,2.85,s,r,n.whiteTile,!0,!0,!0,32);t.addBlock(-64,-28,s,-8.5,-114,10,n.whiteTile,{climbable:!0}),t.addBlock(28,64,s,-8.5,-114,10,n.whiteTile,{climbable:!0}),t.addBlock(-28,28,s,-16,-120,6,n.whiteTile,{climbable:!0});for(const y of[-18,-54,-90])t.addSmoothArchedWall({orientation:"Z",planeMin:y-2,planeMax:y+2,spanMin:-28,spanMax:28,openCenter:0,openWidth:18,floorY:-16,springY:-8.5,topY:-2.2,mat:n.whiteTile}),t.addRecessedUnderwaterLamp({x:-27.8,y:-10.5,z:y+10,normalX:1,normalZ:0,color:7792882,intensity:46,distance:38}),t.addRecessedUnderwaterLamp({x:27.8,y:-10.5,z:y+10,normalX:-1,normalZ:0,color:7792882,intensity:46,distance:38});e?.(.22,"PIERCING CATHEDRAL OCULI & MONUMENTAL VAULTED PORTAL..."),await St();const l=[{cx:0,cz:-8,w:11,d:11},{cx:0,cz:-56,w:11,d:11},{cx:0,cz:-104,w:11,d:11},{cx:-29,cz:-32,w:8.5,d:8.5},{cx:29,cz:-32,w:8.5,d:8.5},{cx:-29,cz:-80,w:8.5,d:8.5},{cx:29,cz:-80,w:8.5,d:8.5}];t.addCeilingWithCutouts(-65.5,65.5,-126,38.5,r,l,n.whiteTile);for(const y of l)t.addSkylightWell({cx:y.cx,cz:y.cz,w:y.w,d:y.d,ceilingY:r,wellHeight:4.5,beamLength:r+1,lightColor:14873338,lightIntensity:260,lightDistance:112,bounceColor:11724014,bounceIntensity:34,shaftColor:14217978,shaftOpacity:.088,underwaterBeamDepth:18});t.addSmoothArchedWall({orientation:"Z",planeMin:-126.8,planeMax:-122.8,spanMin:-65.5,spanMax:65.5,openCenter:0,openWidth:24,floorY:-2,springY:16.5,topY:r+1.5,mat:n.whiteTile}),t.addSmoothArchedWall({orientation:"Z",planeMin:-126.8,planeMax:-122.8,spanMin:-65.5,spanMax:65.5,openCenter:0,openWidth:15,floorY:s,springY:-11,topY:-2,mat:n.whiteTile}),e?.(.38,"SHAPING 108M INVERTED STEPWELL ROTUNDA..."),await St();const c=-180,u=54,h=74,d=-34;t.addBlock(-u-6,u+6,d-2,d,c-u-6,c+u+6,n.accentTile,{climbable:!1}),t.addHollowCylinderShell({cx:0,cz:c,radius:u,thickness:2.8,minY:d,maxY:h+2,segments:80,mat:n.whiteTile,openings:[{angle:Math.PI*.5,halfArc:.24,minY:-18,maxY:28},{angle:-Math.PI*.5,halfArc:.24,minY:13.8,maxY:48}],collide:!0,castShadow:!1}),t.addCircularWalkwayRing({cx:0,cz:c,rInner:43,rOuter:u+.2,minY:9,maxY:14,segments:72,mat:n.whiteTile,collide:!0,blocksWater:!1}),t.addCircularWalkwayRing({cx:0,cz:c,rInner:35,rOuter:43.3,minY:4.5,maxY:9,segments:64,mat:n.whiteTile,collide:!0,blocksWater:!1}),t.addCircularWalkwayRing({cx:0,cz:c,rInner:26.5,rOuter:35.3,minY:.62,maxY:4.5,segments:60,mat:n.whiteTile,collide:!0,blocksWater:!1}),t.addCircularWalkwayRing({cx:0,cz:c,rInner:20.5,rOuter:26.8,minY:-5,maxY:.62,segments:56,mat:n.whiteTile,collide:!0,blocksWater:!0}),t.addCircularWalkwayRing({cx:0,cz:c,rInner:15.5,rOuter:20.8,minY:-12,maxY:-5,segments:48,mat:n.whiteTile,collide:!0,blocksWater:!1}),t.addCircularWalkwayRing({cx:0,cz:c,rInner:11,rOuter:15.8,minY:-20.5,maxY:-12,segments:44,mat:n.accentTile,collide:!0,blocksWater:!1}),t.addBlock(-9.5,9.5,-.45,.62,c+26,-123.5,n.whiteTile,{climbable:!0,blocksWater:!1}),t.addChromePoolLadder({x:0,z:c+20.5,normalX:0,normalZ:-1,minY:-6.5,maxY:.62,topExitOffset:1,deckReturn:!0,style:"chrome"}),t.addSpiralStaircase({cx:0,cz:c,coreRadius:26.8,outerRadius:34.8,startAngle:Math.PI*.42,totalAngle:-Math.PI*.22,startY:.62,endY:4.5,steps:14,mat:n.whiteTile}),t.addSpiralStaircase({cx:0,cz:c,coreRadius:35.2,outerRadius:42.8,startAngle:Math.PI*.16,totalAngle:-Math.PI*.22,startY:4.5,endY:9,steps:16,mat:n.whiteTile}),t.addSpiralStaircase({cx:0,cz:c,coreRadius:43.2,outerRadius:50.8,startAngle:-Math.PI*.08,totalAngle:-Math.PI*.22,startY:9,endY:14,steps:18,mat:n.whiteTile}),t.addSpiralStaircase({cx:0,cz:c,coreRadius:26.8,outerRadius:34.8,startAngle:Math.PI*.58,totalAngle:Math.PI*.22,startY:.62,endY:4.5,steps:14,mat:n.whiteTile}),t.addSpiralStaircase({cx:0,cz:c,coreRadius:35.2,outerRadius:42.8,startAngle:Math.PI*.84,totalAngle:Math.PI*.22,startY:4.5,endY:9,steps:16,mat:n.whiteTile}),t.addSpiralStaircase({cx:0,cz:c,coreRadius:43.2,outerRadius:50.8,startAngle:Math.PI*1.08,totalAngle:Math.PI*.22,startY:9,endY:14,steps:18,mat:n.whiteTile});for(const y of[20,34,48,60])t.addCurvedWallArc({cx:0,cz:c,rInner:u-.22,rOuter:u+.06,startAngle:-Math.PI*.22,endAngle:Math.PI*.26,minY:y,maxY:y+2.6,segments:28,mat:n.glassBlock,collide:!1,castShadow:!1}),t.addCurvedWallArc({cx:0,cz:c,rInner:u-.22,rOuter:u+.06,startAngle:Math.PI*.74,endAngle:Math.PI*1.22,minY:y,maxY:y+2.6,segments:28,mat:n.glassBlock,collide:!1,castShadow:!1});for(let y=0;y<12;y++){const T=y/12*Math.PI*2+Math.PI*.083;if(Math.abs(Math.sin(T))>.9)continue;const S=-Math.cos(T),w=-Math.sin(T),_=Math.atan2(S,w);t.addWaterCascadeSheet({x:Math.cos(T)*42.8,z:c+Math.sin(T)*42.8,width:5.2,topY:14.05,bottomY:8.95,rotY:_}),t.addWaterCascadeSheet({x:Math.cos(T)*34.8,z:c+Math.sin(T)*34.8,width:4.8,topY:9.05,bottomY:4.45,rotY:_}),t.addWaterCascadeSheet({x:Math.cos(T)*26.3,z:c+Math.sin(T)*26.3,width:4.4,topY:4.55,bottomY:0,rotY:_})}t.addCeilingWithCutouts(-58,58,c-58,c+58,h,[{cx:0,cz:c,w:30,d:30}],n.whiteTile),t.addSkylightWell({cx:0,cz:c,w:30,d:30,ceilingY:h,wellHeight:6,beamLength:h+4,lightColor:16185588,lightIntensity:340,lightDistance:145,bounceColor:14479604,bounceIntensity:48,shaftColor:16054517,shaftOpacity:.085,underwaterBeamDepth:22}),e?.(.56,"RAISING FLOODED GRAND STAIRCASE & ZENITH SANCTUARY..."),await St();const f=c-u+2.5,m=f-72,v=38,g=76;t.addBlock(-16,16,12.2,14,f-2,c-42.5,n.whiteTile,{climbable:!0,blocksWater:!1}),t.addStaircase({axis:"-Z",startPos:f,endPos:m,crossMin:-10,crossMax:10,startY:14,endY:v,baseY:11.8,steps:64,mat:n.whiteTile}),t.addBlock(-20,-10,11.8,g+1.5,m-42,f+3,n.whiteTile,{climbable:!1}),t.addBlock(10,20,11.8,g+1.5,m-42,f+3,n.whiteTile,{climbable:!1});for(let y=0;y<6;y++){const T=f-8-y*11.8,S=me.lerp(15.5,v,(y+.5)/6);t.addCylinderColumn(-9.1,T,1.15,S-3,g,n.whiteTile,!0,!0,!0,24),t.addCylinderColumn(9.1,T,1.15,S-3,g,n.whiteTile,!0,!0,!0,24),t.addGlassBlockWall({axis:"Z",planePos:-9.95,startAlong:T-4,endAlong:T+4,minY:S+.8,maxY:S+14.5,lightColor:16774630,lightIntensity:48,lightDistance:32,inwardSign:1}),t.addGlassBlockWall({axis:"Z",planePos:9.95,startAlong:T-4,endAlong:T+4,minY:S+.8,maxY:S+14.5,lightColor:16774630,lightIntensity:48,lightDistance:32,inwardSign:-1})}const p=m,A=p-38;t.addBlock(-18,18,v-1.8,v,A,p,n.whiteTile,{climbable:!0,blocksWater:!1}),t.addBlock(-19.5,19.5,v-1.8,g+1.5,A-2.4,A,n.whiteTile,{climbable:!1}),t.addSmoothArchedWall({orientation:"Z",planeMin:A-.8,planeMax:A+1.8,spanMin:-18,spanMax:18,openCenter:0,openWidth:10.5,floorY:v,springY:v+10.5,topY:g+1.5,mat:n.whiteTile}),t.addBlock(-5.6,5.6,v,v+16.5,A-.6,A+.3,n.glassBlock,{climbable:!1,castShadow:!1});const M=(p+A)*.5+6;t.addCeilingWithCutouts(-21.5,21.5,A-3,f+5,g,[{cx:0,cz:M,w:20,d:34}],n.whiteTile),t.addSkylightWell({cx:0,cz:M,w:20,d:34,ceilingY:g,wellHeight:6.5,beamLength:42,lightColor:16775148,lightIntensity:380,lightDistance:120,bounceColor:16774114,bounceIntensity:68,shaftColor:16775406,shaftOpacity:.12,useGlassBlocks:!1});const x=new Ut(16774628,110,52,1.25);x.position.set(0,v+7.2,A+3.8),t.group.add(x),t.setGlobalWaterIllumination(.75);const C=await t.bakeLevelFieldAsync(y=>e?.(.64+y*.36,"BAKING CATHEDRAL CAUSTIC & LIGHT FIELD..."),{centerX:0,centerZ:-154,sizeX:168,sizeZ:400}),E=[{id:"s5-vestibule",label:"STAGE 05 · BASILICA THRESHOLD",minX:-18,maxX:18,minZ:18,maxZ:42},{id:"s5-submerged",label:"STAGE 05 · SUBMERGED COLONNADE CRYPT",minX:-68,maxX:68,minZ:-126,maxZ:20,maxY:-1.5},{id:"s5-colonnade",label:"STAGE 05 · 68M HYPOSTYLE COLONNADE",minX:-68,maxX:68,minZ:-126,maxZ:20},{id:"s5-stepwell",label:"STAGE 05 · INVERTED STEPWELL ROTUNDA",minX:-60,maxX:60,minZ:-236,maxZ:-126},{id:"s5-stair",label:"STAGE 05 · FLOODED GRAND STAIRCASE",minX:-24,maxX:24,minZ:m,maxZ:-232},{id:"s5-zenith",label:"STAGE 05 · THE ZENITH SANCTUARY",minX:-24,maxX:24,minZ:A-6,maxZ:m}];return{index:4,code:"STAGE 05",title:"THE ABYSSAL BASILICA",subtitle:"SUBTERRANEAN CATHEDRAL // ZENITH SANCTUARY",group:t.group,colliders:t.colliders,cylinders:t.cylinders,ladders:t.ladders,currents:t.currents,zones:E,exitTrigger:{minX:-5.8,maxX:5.8,minY:v-.5,maxY:v+14,minZ:A-1.5,maxZ:A+5.5,nextLevelIndex:-1},spawnPosition:new N(0,.92,30.5),spawnYaw:0,fieldData:C,shadowRig:i,waterStyle:{absorption:[.44,.1,.11],deepColor:[.006,.068,.092],shallowColor:[.08,.5,.54],reflectionTint:[.98,.99,1],waveAmplitude:.18,choppiness:.28,waveSpeed:.96,turbulence:.56,depthWaveDamping:0,foamStrength:0,sunDirection:[-.25,.94,-.22],sunSpecularColor:[1,.98,.94],specularIntensity:.94,wetBandHeight:.52,causticStrength:.8,wallBounceCaustic:.34,underwaterFogColor:338484,underwaterFogDensity:.044,planeCenter:[0,-108],planeSize:[220,320]},envStyle:{fogColor:13030616,fogDensity:.0038,heightMistColor:15134447,heightMistStartY:36,heightMistEndY:74,heightMistStrength:.45,indirectFillColor:15265516,indirectFillIntensity:.082,envPreset:"basilica-zenith",envIntensity:.3,baseExposure:1,warmthGrade:.14,grimeStrength:.03,glassGlowColor:16052968,glassGlowIntensity:.78,ssaoIntensity:.88,bloomIntensity:.42,audioProfile:"stage05-abyssal-basilica",tileTint:16250610,accentTint:7768978,causticTint:9367794,defaultFlashlightOn:!1},update(y){t.updateAnimatedShafts(y)},dispose(){t.dispose()}}}const Rn=[{shortName:"Glass-Block Halls",tag:"THRESHOLD",build:mx},{shortName:"The Perforated Abyss",tag:"WAVE ATRIUM",build:gx},{shortName:"The Sunken Purgatory",tag:"ENDLESS SILO",build:vx},{shortName:"The Azure Monolith Spires",tag:"OPEN HORIZON",build:xx},{shortName:"The Abyssal Basilica",tag:"CATHEDRAL FINALE",build:Mx}],jt=()=>new Promise(n=>{requestAnimationFrame(()=>{window.setTimeout(n,0)})});function Ax(n,e){const t=new oo(n),i=new yr,r={"overcast-mist":{bg:10794170,wall:10530998,bounceFloor:9412774,panel:15267578,grid:!1},"abyss-courtyard":{bg:9743026,wall:10006198,bounceFloor:1453106,panel:15135992,grid:!0},"silo-purgatory":{bg:10268856,wall:10794686,bounceFloor:1188392,panel:15792380,grid:!0},"azure-horizon":{bg:8820900,wall:7506070,bounceFloor:1716288,panel:13951206,grid:!1},"basilica-zenith":{bg:11845828,wall:11582656,bounceFloor:7244948,panel:16775406,grid:!1}}[e];i.background=new Te(r.bg);const a=new hn({color:r.panel}),o=new hn({color:r.wall}),l=new hn({color:r.bounceFloor}),c=r.grid?3.8:9.6,u=new kt(c,c);if(r.grid)for(const v of[-5.2,0,5.2])for(const g of[-5.2,0,5.2]){const p=new Oe(u,a);p.position.set(v,6.2,g),p.rotation.x=Math.PI/2,i.add(p)}else{const v=new Oe(u,a);v.position.set(0,6.2,-1.5),v.rotation.x=Math.PI/2,i.add(v)}const h=new kt(18,12);for(const[v,g,p]of[[-8.5,0,Math.PI/2],[8.5,0,-Math.PI/2],[0,-8.5,0],[0,8.5,Math.PI]]){const A=new Oe(h,o);A.position.set(v,.5,g),A.rotation.y=p,i.add(A)}const d=new kt(18,18),f=new Oe(d,l);f.position.set(0,-5.2,0),f.rotation.x=-Math.PI/2,i.add(f);const m=t.fromScene(i,.045);return u.dispose(),h.dispose(),d.dispose(),a.dispose(),o.dispose(),l.dispose(),t.dispose(),m.texture}function Sx(){const n=new Ts(1050,36,24),e=new xt({uniforms:{uTime:{value:0},uTopColor:{value:new Te(6056564)},uHorizonColor:{value:new Te(10135986)},uSunColor:{value:new Te(13688034)},uSunDir:{value:new N(.35,.72,.28).normalize()},uCloudCoverage:{value:0}},vertexShader:`
      varying vec3 vDir;
      void main() {
        vDir = normalize(position);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
      uniform float uTime;
      uniform vec3 uTopColor;
      uniform vec3 uHorizonColor;
      uniform vec3 uSunColor;
      uniform vec3 uSunDir;
      uniform float uCloudCoverage;
      varying vec3 vDir;

      float skyHash(vec2 p) {
        return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
      }

      float skyNoise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        vec2 u = f * f * (3.0 - 2.0 * f);
        return mix(
          mix(skyHash(i), skyHash(i + vec2(1.0, 0.0)), u.x),
          mix(skyHash(i + vec2(0.0, 1.0)), skyHash(i + vec2(1.0, 1.0)), u.x),
          u.y
        );
      }

      float skyFbm(vec2 p) {
        float v = 0.0;
        float a = 0.5;
        for (int i = 0; i < 5; i++) {
          v += a * skyNoise(p);
          p = p * 2.04 + vec2(13.7, -9.2);
          a *= 0.5;
        }
        return v;
      }

      void main() {
        vec3 d = normalize(vDir);
        float h = clamp(d.y, 0.0, 1.0);
        vec3 sky = mix(uHorizonColor, uTopColor, pow(h, 0.55));

        if (uCloudCoverage > 0.01) {
          vec2 cloudUv = d.xz / (max(d.y, 0.06) + 0.16) * 1.45 + vec2(uTime * 0.008, -uTime * 0.005);
          float c1 = skyFbm(cloudUv);
          float c2 = skyFbm(cloudUv * 2.15 - vec2(uTime * 0.006, uTime * 0.004));
          float cloudDensity = smoothstep(0.28, 0.82, c1 * 0.68 + c2 * 0.32);
          vec3 cloudDark = uTopColor * 0.72;
          vec3 cloudLight = mix(uHorizonColor, uSunColor, 0.35) * 1.04;
          vec3 cloudCol = mix(cloudLight, cloudDark, cloudDensity);
          float horizonFade = smoothstep(0.01, 0.24, h);
          sky = mix(sky, cloudCol, horizonFade * uCloudCoverage * 0.86);
        }

        float sunAmt = max(dot(d, normalize(uSunDir)), 0.0);
        float diffuseBreak = mix(0.38, 0.14, uCloudCoverage);
        sky += uSunColor * pow(sunAmt, 6.0) * diffuseBreak;
        gl_FragColor = vec4(sky, 1.0);
      }
    `,side:_t,depthWrite:!1,fog:!1}),t=new Oe(n,e);return t.visible=!1,t.frustumCulled=!1,{mesh:t,configure(i){t.visible=!!i.hasSkyDome,i.hasSkyDome&&(i.skyTopColor!==void 0&&e.uniforms.uTopColor.value.setHex(i.skyTopColor),i.skyHorizonColor!==void 0&&e.uniforms.uHorizonColor.value.setHex(i.skyHorizonColor),i.skySunColor!==void 0&&e.uniforms.uSunColor.value.setHex(i.skySunColor),i.skySunDir&&e.uniforms.uSunDir.value.set(...i.skySunDir).normalize(),e.uniforms.uCloudCoverage.value=i.skyCloudCoverage??0)},update(i){t.visible&&(e.uniforms.uTime.value=i)},dispose(){n.dispose(),e.dispose()}}}function wx(n){const t=new Float32Array(1680),i=new Float32Array(560),s=new Float32Array(560);for(let d=0;d<560;d++)t[d*3]=(Math.random()-.5)*16,t[d*3+1]=-Math.random()*14-.08,t[d*3+2]=(Math.random()-.5)*16,i[d]=.06+Math.random()*.2,s[d]=Math.random()*Math.PI*2;const r=new Rt;r.setAttribute("position",new Tt(t,3));const a=document.createElement("canvas");a.width=64,a.height=64;const o=a.getContext("2d"),l=o.createRadialGradient(32,32,2,32,32,30);l.addColorStop(0,"rgba(220, 250, 255, 0.95)"),l.addColorStop(.45,"rgba(135, 218, 228, 0.45)"),l.addColorStop(1,"rgba(60, 140, 155, 0.0)"),o.fillStyle=l,o.fillRect(0,0,64,64);const c=new mi(a),u=new Yc({map:c,size:.055,transparent:!0,opacity:0,depthWrite:!1,blending:Mr,color:new Te(10939378)}),h=new R0(r,u);return h.frustumCulled=!1,n.add(h),{update(d,f,m,v){if(u.opacity=v*.56,h.visible=v>.01,!h.visible)return;const g=r.attributes.position,p=g.array,A=14,M=A*.5;for(let x=0;x<560;x++){const C=x*3;let E=p[C],y=p[C+1],T=p[C+2];y+=i[x]*d,E+=Math.sin(f*.78+s[x])*.06*d,T+=Math.cos(f*.68+s[x])*.06*d,E-m.x>M&&(E-=A),E-m.x<-M&&(E+=A),T-m.z>M&&(T-=A),T-m.z<-M&&(T+=A),y>vt-.06&&(y=Math.max(-36,m.y-5.2)),y<m.y-6&&(y=Math.min(vt-.14,m.y+4.8)),p[C]=E,p[C+1]=y,p[C+2]=T}g.needsUpdate=!0},dispose(){r.dispose(),u.dispose(),c.dispose()}}}const fs=new N,yx=new N(0,1,0),oi=new N,wa=new N,ya=new N;function dc(n,e){if(!n)return;const t=n.light.shadow.mapSize.x||4096,i=n.frustumHalfSize*2/t;fs.copy(n.offset).normalize().negate(),oi.crossVectors(fs,yx),oi.lengthSq()<1e-4?oi.set(1,0,0):oi.normalize(),wa.crossVectors(oi,fs).normalize();const s=Math.round(e.dot(oi)/i)*i,r=Math.round(e.dot(wa)/i)*i,a=e.dot(fs);ya.set(0,0,0).addScaledVector(oi,s).addScaledVector(wa,r).addScaledVector(fs,a),n.light.target.position.copy(ya),n.light.position.copy(ya).add(n.offset),n.light.target.updateMatrixWorld()}function _x(n){const e=Math.floor(n/3600),t=Math.floor(n%3600/60),i=Math.floor(n%60);return`${String(e).padStart(2,"0")}:${String(t).padStart(2,"0")}:${String(i).padStart(2,"0")}`}async function fc(n,e,t){typeof n.compileAsync=="function"?await n.compileAsync(e,t):n.compile(e,t)}async function Ex(){const n=document.getElementById("app"),e=document.getElementById("scene-canvas"),t=document.getElementById("loader"),i=document.getElementById("loader-fill"),s=document.getElementById("loader-pct"),r=document.getElementById("loader-status"),a=document.getElementById("overlay"),o=document.getElementById("glass-card"),l=document.getElementById("enter-btn"),c=document.getElementById("level-grid"),u=document.getElementById("cam-hud"),h=document.getElementById("cam-zone"),d=document.getElementById("cam-time"),f=document.getElementById("hint-bar"),m=document.getElementById("ladder-hint"),v=document.getElementById("transition-veil"),g=document.getElementById("transition-stage-label"),p=document.getElementById("transition-fill"),A=document.getElementById("transition-pct"),M=document.getElementById("transition-status"),x=document.getElementById("chapter-banner"),C=document.getElementById("chapter-code"),E=document.getElementById("chapter-title"),y=document.getElementById("chapter-sub"),T=document.getElementById("finale-card"),S=(L,K)=>{const Y=Math.max(0,Math.min(100,Math.round(L)));i.style.width=`${Y}%`,s.textContent=`${Y}%`,r.textContent=K},w=(L,K)=>{const Y=Math.max(0,Math.min(100,Math.round(L)));p.style.width=`${Y}%`,A.textContent=`${Y}%`,M.textContent=K};S(2,"INITIALIZING WEBGL2 HDR PIPELINE..."),await jt();const _=new E0({canvas:e,antialias:!1,powerPreference:"high-performance"});_.setPixelRatio(Math.min(window.devicePixelRatio,2)),_.setSize(window.innerWidth,window.innerHeight),_.shadowMap.enabled=!0,_.shadowMap.type=mc,_.toneMapping=Bn,_.localClippingEnabled=!0;const D=new yr,I=new Te(12768474),F=new Te(669760);let k=.0118,z=.082;const V=new Dr(I.getHex(),k);D.fog=V,D.background=I.clone();const G=new pg(14543084,.065);D.add(G);const J=Sx();D.add(J.mesh);const q=new Gt(74,window.innerWidth/window.innerHeight,.08,1200);S(6,"SYNTHESIZING GLAZED PORCELAIN & MOSAIC MAPS..."),await jt();const re=await wg((L,K)=>{S(6+L*38,K)});S(46,"INITIALIZING HYDRODYNAMIC WAVE & POST-PROCESSING PIPELINE..."),await jt();const fe=bg(window.innerWidth,window.innerHeight,I,k);D.add(fe.mesh);const Se=wx(D),O=new Og,U=px(_,D,q),W=new Map,H=L=>{let K=W.get(L);return K||(K=Ax(_,L),W.set(L,K)),K},ie=new URLSearchParams(window.location.search),oe=parseInt(ie.get("level")??ie.get("stage")??"1",10),ue=Number.isFinite(oe)?me.clamp(oe-1,0,Rn.length-1):0;let ne=await Rn[ue].build(re,(L,K)=>{S(48+L*32,K)});D.add(ne.group);let j=1,le=1,B=.56,Me=.06,ce=.9,xe=.36,ge=!1,Ee=!1,we=null,P=null,b=!1,Q=!1;const te=[],he=()=>{for(let L=0;L<te.length;L++)te[L].classList.toggle("active",L===ne.index)};Rn.forEach((L,K)=>{const Y=document.createElement("button");Y.type="button",Y.className="level-pill";const ae=document.createElement("span");ae.className="level-pill-main";const ye=document.createElement("span");ye.className="level-num",ye.textContent=String(K+1).padStart(2,"0");const _e=document.createElement("span");_e.className="level-name",_e.textContent=L.shortName,ae.append(ye,_e);const Ge=document.createElement("span");Ge.className="level-tag",Ge.textContent=L.tag,Y.append(ae,Ge),Y.addEventListener("click",ot=>{ot.stopPropagation(),O.init(),K!==ne.index?He(K,!0):pe.enterAndLock()}),te.push(Y),c.appendChild(Y)}),o.addEventListener("click",L=>{L.stopPropagation()});const se=L=>{C.textContent=L.code,E.textContent=L.title,y.textContent=L.subtitle,x.classList.remove("hidden"),P!==null&&window.clearTimeout(P),P=window.setTimeout(()=>{x.classList.add("hidden")},3800)},Le=L=>{const K=L.envStyle,Y=L.waterStyle;I.setHex(K.fogColor),k=K.fogDensity,F.setHex(Y.underwaterFogColor),z=Y.underwaterFogDensity,G.color.setHex(K.indirectFillColor),G.intensity=K.indirectFillIntensity,D.environment=H(K.envPreset),D.environmentIntensity=K.envIntensity,J.configure(K),fe.applyStyle(Y,L.fieldData,L.spawnPosition.x,L.spawnPosition.z),re.configureForLevel({tileTint:K.tileTint,accentTint:K.accentTint,wetBandHeight:Y.wetBandHeight,causticStrength:Y.causticStrength,wallBounceCaustic:Y.wallBounceCaustic,waveAmplitude:Y.waveAmplitude,grimeStrength:K.grimeStrength,causticColor:new Te(K.causticTint??8055007),glassGlowColor:K.glassGlowColor??14216948,glassGlowIntensity:K.glassGlowIntensity??.55,heightMistColor:K.heightMistColor??K.fogColor,heightMistStartY:K.heightMistStartY??45,heightMistEndY:K.heightMistEndY??150,heightMistStrength:K.heightMistStrength??0,fieldData:L.fieldData}),O.setProfile(K.audioProfile,L.index),le=K.baseExposure,Me=K.warmthGrade,ce=K.ssaoIntensity??.9,xe=K.bloomIntensity??.36,B=K.hasSkyDome?.62:K.envPreset==="overcast-mist"||K.envPreset==="basilica-zenith"?.56:.34,dc(L.shadowRig,L.spawnPosition),he()};S(82,"GENERATING ENVIRONMENT REFLECTION CUBEMAPS..."),await jt(),Le(ne);const pe=new Pg(q,D,e,ne.spawnPosition,ne.colliders,ne.cylinders,ne.ladders,ne.currents,ne.zones,{onRipple:(L,K,Y,ae)=>fe.addRipple(L,K,Y,ae),onFootstep:(L,K,Y)=>O.playFootstep(L,K,Y),onWadeStep:(L,K,Y)=>O.playWadeStep(L,K,Y),onSwimStroke:(L,K)=>O.playSwimStroke(L,K),onWaterSplash:L=>O.playSplash(L),onSubmerge:L=>O.playSubmerge(L),onEmerge:()=>O.playEmerge(),onLadderStep:(L,K,Y)=>O.playLadderStep(L,K,Y),onMantle:L=>O.playMantle(L),onFlashlightToggle:()=>O.playFlashlightClick(),onPointerLockChange:L=>{L?(a.classList.add("hidden"),u.classList.remove("hidden"),l.textContent="[ RESUME EXPLORATION ]",b||(b=!0,se(ne),f.classList.remove("hidden"),we!==null&&window.clearTimeout(we),we=window.setTimeout(()=>{f.classList.add("hidden")},7200))):(Ee||a.classList.remove("hidden"),u.classList.add("hidden"),f.classList.add("hidden"),m.classList.add("hidden"))}});S(88,"PRE-COMPILING GPU SHADERS..."),await jt(),await fc(_,D,q),S(94,"WARMING REFLECTION & POST-PROCESSING TARGETS..."),await jt();const Ce=new N(0,0,-1);fe.update(_,D,q,.016,0,pe.position,pe.velocity,0,pe.flashlight.position,Ce,0),U.update(0,0,0,j,Me,ne.waterStyle.underwaterFogColor,ce,xe),U.render(.016),S(100,"FIVE-STAGE ARCHIVE READY"),await jt(),a.classList.remove("hidden"),t.classList.add("done"),window.setTimeout(()=>{t.remove()},600);async function He(L,K=!1){if(ge||L<0||L>=Rn.length)return;ge=!0,Ee=!1,T.classList.add("hidden"),m.classList.add("hidden"),O.playLevelTransition();const Y=Rn[L];g.textContent=`STAGE 0${L+1} · ${Y.shortName.toUpperCase()}`,w(4,"PREPARING STAGE TRANSITION..."),K&&pe.enterAndLock(),v.classList.remove("hidden"),v.classList.add("active"),await jt(),await new Promise(ye=>window.setTimeout(ye,220)),w(12,"RELEASING PREVIOUS ARCHITECTURE..."),await jt(),D.remove(ne.group),ne.dispose(),ne=await Y.build(re,(ye,_e)=>{w(14+ye*62,_e)}),D.add(ne.group),w(80,"CONFIGURING ACOUSTICS & ENVIRONMENT..."),await jt(),Le(ne),pe.loadLevel(ne.colliders,ne.cylinders,ne.ladders,ne.currents,ne.zones,ne.spawnPosition,ne.spawnYaw,ne.envStyle.defaultFlashlightOn),w(88,"PRE-COMPILING STAGE SHADERS..."),await jt(),await fc(_,D,q),w(95,"WARMING PLANAR WATER & SHADOW RIG..."),await jt(),fe.update(_,D,q,.016,0,pe.position,pe.velocity,0,pe.flashlight.position,Ce,0),U.render(.016),w(100,"STAGE READY"),await jt(),v.classList.remove("active"),v.classList.add("hidden"),se(ne),ge=!1}window.addEventListener("keydown",L=>{if(L.code==="KeyR"&&Ee){Ee=!1,T.classList.add("hidden"),He(0,!0);return}if(L.code==="BracketLeft"&&!L.repeat){const K=(ne.index-1+Rn.length)%Rn.length;He(K,pe.playing);return}if(L.code==="BracketRight"&&!L.repeat){const K=(ne.index+1)%Rn.length;He(K,pe.playing);return}if(L.altKey&&L.code.startsWith("Digit")){const Y=parseInt(L.code.replace("Digit",""),10)-1;Y>=0&&Y<Rn.length&&Y!==ne.index&&(L.preventDefault(),He(Y,pe.playing))}});const ve=()=>{O.init(),pe.enterAndLock()};l.addEventListener("click",L=>{L.stopPropagation(),ve()}),a.addEventListener("click",ve),e.addEventListener("click",()=>{Ee||ve()}),window.addEventListener("resize",()=>{const L=window.innerWidth,K=window.innerHeight;q.aspect=L/K,q.updateProjectionMatrix(),_.setSize(L,K),fe.resize(L,K),U.resize(L,K)}),document.addEventListener("visibilitychange",()=>{Q=document.hidden,Q||Re.getDelta()}),n.addEventListener("contentvisibilityautostatechange",L=>{const K=L;typeof K.skipped=="boolean"&&(Q=K.skipped,Q||Re.getDelta())});const Re=new mg;let Ne=0,ke="",Pe=-1,Ze=!1;const Ve=new N,tt=()=>{if(requestAnimationFrame(tt),Q||ge)return;const L=Math.min(Re.getDelta(),.05),K=Re.elapsedTime;re.update(K),J.update(K),ne.update(K,q.position);const Y=pe.update(L,K,(ct,Ke,Qt)=>fe.sampleWavePhysics(ct,Ke,Qt),B);if(!pe.playing&&!Ee&&(q.rotation.y=ne.spawnYaw+Math.sin(K*.22)*.06,q.rotation.x=-.04+Math.cos(K*.17)*.02),dc(ne.shadowRig,q.position),!ge&&!Ee&&pe.playing){const ct=ne.exitTrigger,Ke=Y.position;Ke.x>=ct.minX&&Ke.x<=ct.maxX&&Ke.y>=ct.minY&&Ke.y<=ct.maxY&&Ke.z>=ct.minZ&&Ke.z<=ct.maxZ&&(ct.nextLevelIndex>=0?He(ct.nextLevelIndex):(Ee=!0,O.fadeOutToSilence(),u.classList.add("hidden"),m.classList.add("hidden"),T.classList.remove("hidden")))}const ae=pe.playing&&Y.nearLadder&&!Ee;ae!==Ze&&(Ze=ae,m.classList.toggle("hidden",!ae));const ye=Y.isUnderwater?1:0;Ne+=(ye-Ne)*(1-Math.exp(-9*L)),V.color.copy(I).lerp(F,Ne),V.density=me.lerp(k,z,Ne),D.background instanceof Te&&D.background.copy(V.color),J.mesh.visible&&J.mesh.position.copy(q.position);const _e=me.clamp(le*(.98/(.62+Y.estimatedLuminance*.68)),.74,1.34);j+=(_e-j)*(1-Math.exp(-1.55*L)),Se.update(L,K,q.position,Ne),O.updateSpatial({camera:q,isUnderwater:Y.isUnderwater,waterDepthAtFeet:Y.waterDepthAtFeet,dt:L,elapsedTime:K,waveAmplitude:ne.waterStyle.waveAmplitude,hasOpenSky:!!ne.envStyle.hasSkyDome,colliders:ne.colliders,cylinders:ne.cylinders});const Ge=Y.waterDepthAtFeet>.06?1:0;pe.getFlashlightWorldDirection(Ve),fe.update(_,D,q,L,K,pe.position,pe.velocity,Ge,pe.flashlight.position,Ve,pe.getFlashlightNormalizedIntensity()),U.update(K,Ne,Y.wetLensIntensity,j,Me,ne.waterStyle.underwaterFogColor,ce,xe),U.render(L),Y.zoneLabel!==ke&&(ke=Y.zoneLabel,h.textContent=Y.zoneLabel);const ot=Math.floor(K);ot!==Pe&&(Pe=ot,d.textContent=_x(ot))};tt()}Ex();
