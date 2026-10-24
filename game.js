(()=>{var _u=0,Ac=1,yu=2;var es=1,Mu=2,Vs=3,$i=0,Ze=1,De=2,Zi=0,In=1,Fe=2,Rc=3,Cc=4,bu=5;var is=100,Su=101,wu=102,Tu=103,Eu=104,Au=200,Ru=201,Cu=202,Iu=203,Ic=204,Pc=205,Pu=206,Lu=207,Du=208,Nu=209,Uu=210,Fu=211,Bu=212,Ou=213,ku=214,Na=0,Ua=1,Fa=2,Is=3,Ba=4,Oa=5,ka=6,za=7,Lc=0,zu=1,Hu=2,mi=0,Dc=1,Nc=2,Uc=3,Fc=4,Bc=5,Oc=6,kc=7;var zc=300,Pn=301,ns=302,xo=303,_o=304,Hr=306,cn=1e3,ii=1001,Ha=1002,Ye=1003,Vu=1004;var Vr=1005;var Pe=1006,yo=1007;var Ln=1008;var ni=1009,Hc=1010,Vc=1011,Gs=1012,Mo=1013,Ni=1014,Mi=1015,gi=1016,bo=1017,So=1018,Ws=1020,Gc=35902,Wc=35899,Xc=1021,qc=1022,bi=1023,Vi=1026,Dn=1027,wo=1028,To=1029,Nn=1030,Eo=1031;var Ao=1033,Gr=33776,Wr=33777,Xr=33778,qr=33779,Ro=35840,Co=35841,Io=35842,Po=35843,Lo=36196,Do=37492,No=37496,Uo=37488,Fo=37489,Yr=37490,Bo=37491,Oo=37808,ko=37809,zo=37810,Ho=37811,Vo=37812,Go=37813,Wo=37814,Xo=37815,qo=37816,Yo=37817,$o=37818,Zo=37819,Jo=37820,Ko=37821,jo=36492,Qo=36494,tl=36495,el=36283,il=36284,$r=36285,nl=36286;var pr=2300,Va=2301,La=2302,fc=2303,pc=2400,mc=2401,gc=2402;var Gu=3200;var sl=0,Wu=1,pn="",Je="srgb",Zn="srgb-linear",mr="linear",pe="srgb";var Da=7680;var Xu=519,qu=512,Yu=513,$u=514,rl=515,Zu=516,Ju=517,al=518,Ku=519,ju=35044,Yc=35048;var $c="300 es",Pi=2e3,Ps=2001;function df(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function ff(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function gr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Qu(){let s=gr("canvas");return s.style.display="block",s}var Hh={},Ls=null;function Zc(...s){let t="THREE."+s.shift();Ls?Ls("log",t,...s):console.log(t,...s)}function td(s){let t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Wt(...s){s=td(s);let t="THREE."+s.shift();if(Ls)Ls("warn",t,...s);else{let e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function Xt(...s){s=td(s);let t="THREE."+s.shift();if(Ls)Ls("error",t,...s);else{let e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function $n(...s){let t=s.join(" ");t in Hh||(Hh[t]=!0,Wt(...s))}function ed(s,t,e){return new Promise(function(i,n){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:n();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var id={[Na]:Ua,[Fa]:ka,[Ba]:za,[Is]:Oa,[Ua]:Na,[ka]:Fa,[za]:Ba,[Oa]:Is},Gi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let n=i[t];if(n!==void 0){let r=n.indexOf(e);r!==-1&&n.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let n=i.slice(0);for(let r=0,a=n.length;r<a;r++)n[r].call(this,t);t.target=null}}},ti=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Vh=1234567,hr=Math.PI/180,Jn=180/Math.PI;function ss(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ti[s&255]+ti[s>>8&255]+ti[s>>16&255]+ti[s>>24&255]+"-"+ti[t&255]+ti[t>>8&255]+"-"+ti[t>>16&15|64]+ti[t>>24&255]+"-"+ti[e&63|128]+ti[e>>8&255]+"-"+ti[e>>16&255]+ti[e>>24&255]+ti[i&255]+ti[i>>8&255]+ti[i>>16&255]+ti[i>>24&255]).toLowerCase()}function ee(s,t,e){return Math.max(t,Math.min(e,s))}function Jc(s,t){return(s%t+t)%t}function pf(s,t,e,i,n){return i+(s-t)*(n-i)/(e-t)}function mf(s,t,e){return s!==t?(e-s)/(t-s):0}function ur(s,t,e){return(1-e)*s+e*t}function gf(s,t,e,i){return ur(s,t,1-Math.exp(-e*i))}function vf(s,t=1){return t-Math.abs(Jc(s,t*2)-t)}function xf(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function _f(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function yf(s,t){return s+Math.floor(Math.random()*(t-s+1))}function Mf(s,t){return s+Math.random()*(t-s)}function bf(s){return s*(.5-Math.random())}function Sf(s){s!==void 0&&(Vh=s);let t=Vh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function wf(s){return s*hr}function Tf(s){return s*Jn}function Ef(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function Af(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Rf(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Cf(s,t,e,i,n){let r=Math.cos,a=Math.sin,o=r(e/2),c=a(e/2),l=r((t+i)/2),u=a((t+i)/2),f=r((t-i)/2),h=a((t-i)/2),d=r((i-t)/2),g=a((i-t)/2);switch(n){case"XYX":s.set(o*u,c*f,c*h,o*l);break;case"YZY":s.set(c*h,o*u,c*f,o*l);break;case"ZXZ":s.set(c*f,c*h,o*u,o*l);break;case"XZX":s.set(o*u,c*g,c*d,o*l);break;case"YXY":s.set(c*d,o*u,c*g,o*l);break;case"ZYZ":s.set(c*g,c*d,o*u,o*l);break;default:Wt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function Rs(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:case Uint8ClampedArray:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function oi(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Se={DEG2RAD:hr,RAD2DEG:Jn,generateUUID:ss,clamp:ee,euclideanModulo:Jc,mapLinear:pf,inverseLerp:mf,lerp:ur,damp:gf,pingpong:vf,smoothstep:xf,smootherstep:_f,randInt:yf,randFloat:Mf,randFloatSpread:bf,seededRandom:Sf,degToRad:wf,radToDeg:Tf,isPowerOfTwo:Ef,ceilPowerOfTwo:Af,floorPowerOfTwo:Rf,setQuaternionFromProperEuler:Cf,normalize:oi,denormalize:Rs},ih=class ih{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ee(this.x,t.x,e.x),this.y=ee(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ee(this.x,t,e),this.y=ee(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ee(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(ee(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),n=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*n+t.x,this.y=r*n+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ih.prototype.isVector2=!0;var at=ih,Ke=class{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,r,a,o){let c=i[n+0],l=i[n+1],u=i[n+2],f=i[n+3],h=r[a+0],d=r[a+1],g=r[a+2],v=r[a+3];if(f!==v||c!==h||l!==d||u!==g){let m=c*h+l*d+u*g+f*v;m<0&&(h=-h,d=-d,g=-g,v=-v,m=-m);let p=1-o;if(m<.9995){let y=Math.acos(m),M=Math.sin(y);p=Math.sin(p*y)/M,o=Math.sin(o*y)/M,c=c*p+h*o,l=l*p+d*o,u=u*p+g*o,f=f*p+v*o}else{c=c*p+h*o,l=l*p+d*o,u=u*p+g*o,f=f*p+v*o;let y=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=y,l*=y,u*=y,f*=y}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,n,r,a){let o=i[n],c=i[n+1],l=i[n+2],u=i[n+3],f=r[a],h=r[a+1],d=r[a+2],g=r[a+3];return t[e]=o*g+u*f+c*d-l*h,t[e+1]=c*g+u*h+l*f-o*d,t[e+2]=l*g+u*d+o*h-c*f,t[e+3]=u*g-o*f-c*h-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,n=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(i/2),u=o(n/2),f=o(r/2),h=c(i/2),d=c(n/2),g=c(r/2);switch(a){case"XYZ":this._x=h*u*f+l*d*g,this._y=l*d*f-h*u*g,this._z=l*u*g+h*d*f,this._w=l*u*f-h*d*g;break;case"YXZ":this._x=h*u*f+l*d*g,this._y=l*d*f-h*u*g,this._z=l*u*g-h*d*f,this._w=l*u*f+h*d*g;break;case"ZXY":this._x=h*u*f-l*d*g,this._y=l*d*f+h*u*g,this._z=l*u*g+h*d*f,this._w=l*u*f-h*d*g;break;case"ZYX":this._x=h*u*f-l*d*g,this._y=l*d*f+h*u*g,this._z=l*u*g-h*d*f,this._w=l*u*f+h*d*g;break;case"YZX":this._x=h*u*f+l*d*g,this._y=l*d*f+h*u*g,this._z=l*u*g-h*d*f,this._w=l*u*f-h*d*g;break;case"XZY":this._x=h*u*f-l*d*g,this._y=l*d*f-h*u*g,this._z=l*u*g+h*d*f,this._w=l*u*f+h*d*g;break;default:Wt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],n=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],u=e[6],f=e[10],h=i+o+f;if(h>0){let d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-c)*d,this._y=(r-l)*d,this._z=(a-n)*d}else if(i>o&&i>f){let d=2*Math.sqrt(1+i-o-f);this._w=(u-c)/d,this._x=.25*d,this._y=(n+a)/d,this._z=(r+l)/d}else if(o>f){let d=2*Math.sqrt(1+o-i-f);this._w=(r-l)/d,this._x=(n+a)/d,this._y=.25*d,this._z=(c+u)/d}else{let d=2*Math.sqrt(1+f-i-o);this._w=(a-n)/d,this._x=(r+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ee(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,n=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,u=e._w;return this._x=i*u+a*o+n*l-r*c,this._y=n*u+a*c+r*o-i*l,this._z=r*u+a*l+i*c-n*o,this._w=a*u-i*o-n*c-r*l,this._onChangeCallback(),this}slerp(t,e){let i=t._x,n=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(i=-i,n=-n,r=-r,a=-a,o=-o);let c=1-e;if(o<.9995){let l=Math.acos(o),u=Math.sin(l);c=Math.sin(c*l)/u,e=Math.sin(e*l)/u,this._x=this._x*c+i*e,this._y=this._y*c+n*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this._onChangeCallback()}else this._x=this._x*c+i*e,this._y=this._y*c+n*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(n*Math.sin(t),n*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},nh=class nh{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Gh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Gh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*n,this.y=r[1]*e+r[4]*i+r[7]*n,this.z=r[2]*e+r[5]*i+r[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*n+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*n+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*n+r[14])*a,this}applyQuaternion(t){let e=this.x,i=this.y,n=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*n-o*i),u=2*(o*e-r*n),f=2*(r*i-a*e);return this.x=e+c*l+a*f-o*u,this.y=i+c*u+o*l-r*f,this.z=n+c*f+r*u-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*n,this.y=r[1]*e+r[5]*i+r[9]*n,this.z=r[2]*e+r[6]*i+r[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ee(this.x,t.x,e.x),this.y=ee(this.y,t.y,e.y),this.z=ee(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ee(this.x,t,e),this.y=ee(this.y,t,e),this.z=ee(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ee(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,n=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=n*c-r*o,this.y=r*a-i*c,this.z=i*o-n*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Gl.copy(this).projectOnVector(t),this.sub(Gl)}reflect(t){return this.sub(Gl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(ee(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};nh.prototype.isVector3=!0;var P=nh,Gl=new P,Gh=new Ke,sh=class sh{constructor(t,e,i,n,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,r,a,o,c,l)}set(t,e,i,n,r,a,o,c,l){let u=this.elements;return u[0]=t,u[1]=n,u[2]=o,u[3]=e,u[4]=r,u[5]=c,u[6]=i,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,r=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],u=i[4],f=i[7],h=i[2],d=i[5],g=i[8],v=n[0],m=n[3],p=n[6],y=n[1],M=n[4],x=n[7],S=n[2],w=n[5],A=n[8];return r[0]=a*v+o*y+c*S,r[3]=a*m+o*M+c*w,r[6]=a*p+o*x+c*A,r[1]=l*v+u*y+f*S,r[4]=l*m+u*M+f*w,r[7]=l*p+u*x+f*A,r[2]=h*v+d*y+g*S,r[5]=h*m+d*M+g*w,r[8]=h*p+d*x+g*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8];return e*a*u-e*o*l-i*r*u+i*o*c+n*r*l-n*a*c}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],f=u*a-o*l,h=o*c-u*r,d=l*r-a*c,g=e*f+i*h+n*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return t[0]=f*v,t[1]=(n*l-u*i)*v,t[2]=(o*i-n*a)*v,t[3]=h*v,t[4]=(u*e-n*c)*v,t[5]=(n*r-o*e)*v,t[6]=d*v,t[7]=(i*c-l*e)*v,t[8]=(a*e-i*r)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*a+l*o)+a+t,-n*l,n*c,-n*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return $n("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Wl.makeScale(t,e)),this}rotate(t){return $n("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Wl.makeRotation(-t)),this}translate(t,e){return $n("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Wl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};sh.prototype.isMatrix3=!0;var Yt=sh,Wl=new Yt,Wh=new Yt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xh=new Yt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function If(){let s={enabled:!0,workingColorSpace:Zn,spaces:{},convert:function(n,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===pe&&(n.r=ln(n.r),n.g=ln(n.g),n.b=ln(n.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(n.applyMatrix3(this.spaces[r].toXYZ),n.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===pe&&(n.r=Cs(n.r),n.g=Cs(n.g),n.b=Cs(n.b))),n},workingToColorSpace:function(n,r){return this.convert(n,this.workingColorSpace,r)},colorSpaceToWorking:function(n,r){return this.convert(n,r,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===pn?mr:this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,r=this.workingColorSpace){return n.fromArray(this.spaces[r].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,r,a){return n.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(n,r){return $n("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(n,r)},toWorkingColorSpace:function(n,r){return $n("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(n,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return s.define({[Zn]:{primaries:t,whitePoint:i,transfer:mr,toXYZ:Wh,fromXYZ:Xh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Je},outputColorSpaceConfig:{drawingBufferColorSpace:Je}},[Je]:{primaries:t,whitePoint:i,transfer:pe,toXYZ:Wh,fromXYZ:Xh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Je}}}),s}var le=If();function ln(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Cs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var ps,Ga=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{ps===void 0&&(ps=gr("canvas")),ps.width=t.width,ps.height=t.height;let n=ps.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),i=ps}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=gr("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let n=i.getImageData(0,0,t.width,t.height),r=n.data;for(let a=0;a<r.length;a++)r[a]=ln(r[a]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(ln(e[i]/255)*255):e[i]=ln(e[i]);return{data:e,width:t.width,height:t.height}}else return Wt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Pf=0,Ds=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Pf++}),this.uuid=ss(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?r.push(Xl(n[a].image)):r.push(Xl(n[a]))}else r=Xl(n);i.url=r}return e||(t.images[this.uuid]=i),i}};function Xl(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Ga.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Wt("Texture: Unable to serialize Texture."),{})}var Lf=0,ql=new P,li=class s extends Gi{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,i=ii,n=ii,r=Pe,a=Ln,o=bi,c=ni,l=s.DEFAULT_ANISOTROPY,u=pn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Lf++}),this.uuid=ss(),this.name="",this.source=new Ds(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ql).x}get height(){return this.source.getSize(ql).y}get depth(){return this.source.getSize(ql).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){Wt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let n=this[e];if(n===void 0){Wt(`Texture.setValues(): property '${e}' does not exist.`);continue}n&&i&&n.isVector2&&i.isVector2||n&&i&&n.isVector3&&i.isVector3||n&&i&&n.isMatrix3&&i.isMatrix3?n.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==zc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case cn:t.x=t.x-Math.floor(t.x);break;case ii:t.x=t.x<0?0:1;break;case Ha:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case cn:t.y=t.y-Math.floor(t.y);break;case ii:t.y=t.y<0?0:1;break;case Ha:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};li.DEFAULT_IMAGE=null;li.DEFAULT_MAPPING=zc;li.DEFAULT_ANISOTROPY=1;var rh=class rh{constructor(t=0,e=0,i=0,n=1){this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*n+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*n+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*n+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*n+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,r,c=t.elements,l=c[0],u=c[4],f=c[8],h=c[1],d=c[5],g=c[9],v=c[2],m=c[6],p=c[10];if(Math.abs(u-h)<.01&&Math.abs(f-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let M=(l+1)/2,x=(d+1)/2,S=(p+1)/2,w=(u+h)/4,A=(f+v)/4,_=(g+m)/4;return M>x&&M>S?M<.01?(i=0,n=.707106781,r=.707106781):(i=Math.sqrt(M),n=w/i,r=A/i):x>S?x<.01?(i=.707106781,n=0,r=.707106781):(n=Math.sqrt(x),i=w/n,r=_/n):S<.01?(i=.707106781,n=.707106781,r=0):(r=Math.sqrt(S),i=A/r,n=_/r),this.set(i,n,r,e),this}let y=Math.sqrt((m-g)*(m-g)+(f-v)*(f-v)+(h-u)*(h-u));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(f-v)/y,this.z=(h-u)/y,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ee(this.x,t.x,e.x),this.y=ee(this.y,t.y,e.y),this.z=ee(this.z,t.z,e.z),this.w=ee(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ee(this.x,t,e),this.y=ee(this.y,t,e),this.z=ee(this.z,t,e),this.w=ee(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ee(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};rh.prototype.isVector4=!0;var ge=rh,Wa=class extends Gi{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pe,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new ge(0,0,t,e),this.scissorTest=!1,this.viewport=new ge(0,0,t,e),this.textures=[];let n={width:t,height:e,depth:i.depth},r=new li(n),a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Pe,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let n=0,r=this.textures.length;n<r;n++)this.textures[n].image.width=t,this.textures[n].image.height=e,this.textures[n].image.depth=i,this.textures[n].isData3DTexture!==!0&&(this.textures[n].isArrayTexture=this.textures[n].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let n=Object.assign({},t.textures[e].image);this.textures[e].source=new Ds(n)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},$e=class extends Wa{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},vr=class extends li{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=Ye,this.minFilter=Ye,this.wrapR=ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Xa=class extends li{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=Ye,this.minFilter=Ye,this.wrapR=ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var vo=class vo{constructor(t,e,i,n,r,a,o,c,l,u,f,h,d,g,v,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,r,a,o,c,l,u,f,h,d,g,v,m)}set(t,e,i,n,r,a,o,c,l,u,f,h,d,g,v,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=n,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new vo().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,n=1/ms.setFromMatrixColumn(t,0).length(),r=1/ms.setFromMatrixColumn(t,1).length(),a=1/ms.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,n=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(n),l=Math.sin(n),u=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let h=a*u,d=a*f,g=o*u,v=o*f;e[0]=c*u,e[4]=-c*f,e[8]=l,e[1]=d+g*l,e[5]=h-v*l,e[9]=-o*c,e[2]=v-h*l,e[6]=g+d*l,e[10]=a*c}else if(t.order==="YXZ"){let h=c*u,d=c*f,g=l*u,v=l*f;e[0]=h+v*o,e[4]=g*o-d,e[8]=a*l,e[1]=a*f,e[5]=a*u,e[9]=-o,e[2]=d*o-g,e[6]=v+h*o,e[10]=a*c}else if(t.order==="ZXY"){let h=c*u,d=c*f,g=l*u,v=l*f;e[0]=h-v*o,e[4]=-a*f,e[8]=g+d*o,e[1]=d+g*o,e[5]=a*u,e[9]=v-h*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){let h=a*u,d=a*f,g=o*u,v=o*f;e[0]=c*u,e[4]=g*l-d,e[8]=h*l+v,e[1]=c*f,e[5]=v*l+h,e[9]=d*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){let h=a*c,d=a*l,g=o*c,v=o*l;e[0]=c*u,e[4]=v-h*f,e[8]=g*f+d,e[1]=f,e[5]=a*u,e[9]=-o*u,e[2]=-l*u,e[6]=d*f+g,e[10]=h-v*f}else if(t.order==="XZY"){let h=a*c,d=a*l,g=o*c,v=o*l;e[0]=c*u,e[4]=-f,e[8]=l*u,e[1]=h*f+v,e[5]=a*u,e[9]=d*f-g,e[2]=g*f-d,e[6]=o*u,e[10]=v*f+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Df,t,Nf)}lookAt(t,e,i){let n=this.elements;return ui.subVectors(t,e),ui.lengthSq()===0&&(ui.z=1),ui.normalize(),_n.crossVectors(i,ui),_n.lengthSq()===0&&(Math.abs(i.z)===1?ui.x+=1e-4:ui.z+=1e-4,ui.normalize(),_n.crossVectors(i,ui)),_n.normalize(),la.crossVectors(ui,_n),n[0]=_n.x,n[4]=la.x,n[8]=ui.x,n[1]=_n.y,n[5]=la.y,n[9]=ui.y,n[2]=_n.z,n[6]=la.z,n[10]=ui.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,r=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],u=i[1],f=i[5],h=i[9],d=i[13],g=i[2],v=i[6],m=i[10],p=i[14],y=i[3],M=i[7],x=i[11],S=i[15],w=n[0],A=n[4],_=n[8],T=n[12],R=n[1],I=n[5],D=n[9],k=n[13],N=n[2],O=n[6],z=n[10],Y=n[14],tt=n[3],X=n[7],j=n[11],et=n[15];return r[0]=a*w+o*R+c*N+l*tt,r[4]=a*A+o*I+c*O+l*X,r[8]=a*_+o*D+c*z+l*j,r[12]=a*T+o*k+c*Y+l*et,r[1]=u*w+f*R+h*N+d*tt,r[5]=u*A+f*I+h*O+d*X,r[9]=u*_+f*D+h*z+d*j,r[13]=u*T+f*k+h*Y+d*et,r[2]=g*w+v*R+m*N+p*tt,r[6]=g*A+v*I+m*O+p*X,r[10]=g*_+v*D+m*z+p*j,r[14]=g*T+v*k+m*Y+p*et,r[3]=y*w+M*R+x*N+S*tt,r[7]=y*A+M*I+x*O+S*X,r[11]=y*_+M*D+x*z+S*j,r[15]=y*T+M*k+x*Y+S*et,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],n=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],u=t[2],f=t[6],h=t[10],d=t[14],g=t[3],v=t[7],m=t[11],p=t[15],y=c*d-l*h,M=o*d-l*f,x=o*h-c*f,S=a*d-l*u,w=a*h-c*u,A=a*f-o*u;return e*(v*y-m*M+p*x)-i*(g*y-m*S+p*w)+n*(g*M-v*S+p*A)-r*(g*x-v*w+m*A)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],n=t[8],r=t[1],a=t[5],o=t[9],c=t[2],l=t[6],u=t[10];return e*(a*u-o*l)-i*(r*u-o*c)+n*(r*l-a*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],f=t[9],h=t[10],d=t[11],g=t[12],v=t[13],m=t[14],p=t[15],y=e*o-i*a,M=e*c-n*a,x=e*l-r*a,S=i*c-n*o,w=i*l-r*o,A=n*l-r*c,_=u*v-f*g,T=u*m-h*g,R=u*p-d*g,I=f*m-h*v,D=f*p-d*v,k=h*p-d*m,N=y*k-M*D+x*I+S*R-w*T+A*_;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let O=1/N;return t[0]=(o*k-c*D+l*I)*O,t[1]=(n*D-i*k-r*I)*O,t[2]=(v*A-m*w+p*S)*O,t[3]=(h*w-f*A-d*S)*O,t[4]=(c*R-a*k-l*T)*O,t[5]=(e*k-n*R+r*T)*O,t[6]=(m*x-g*A-p*M)*O,t[7]=(u*A-h*x+d*M)*O,t[8]=(a*D-o*R+l*_)*O,t[9]=(i*R-e*D-r*_)*O,t[10]=(g*w-v*x+p*y)*O,t[11]=(f*x-u*w-d*y)*O,t[12]=(o*T-a*I-c*_)*O,t[13]=(e*I-i*T+n*_)*O,t[14]=(v*M-g*S-m*y)*O,t[15]=(u*S-f*M+h*y)*O,this}scale(t){let e=this.elements,i=t.x,n=t.y,r=t.z;return e[0]*=i,e[4]*=n,e[8]*=r,e[1]*=i,e[5]*=n,e[9]*=r,e[2]*=i,e[6]*=n,e[10]*=r,e[3]*=i,e[7]*=n,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),n=Math.sin(e),r=1-i,a=t.x,o=t.y,c=t.z,l=r*a,u=r*o;return this.set(l*a+i,l*o-n*c,l*c+n*o,0,l*o+n*c,u*o+i,u*c-n*a,0,l*c-n*o,u*c+n*a,r*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,r,a){return this.set(1,i,r,0,t,1,a,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){let n=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,u=a+a,f=o+o,h=r*l,d=r*u,g=r*f,v=a*u,m=a*f,p=o*f,y=c*l,M=c*u,x=c*f,S=i.x,w=i.y,A=i.z;return n[0]=(1-(v+p))*S,n[1]=(d+x)*S,n[2]=(g-M)*S,n[3]=0,n[4]=(d-x)*w,n[5]=(1-(h+p))*w,n[6]=(m+y)*w,n[7]=0,n[8]=(g+M)*A,n[9]=(m-y)*A,n[10]=(1-(h+v))*A,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){let n=this.elements;t.x=n[12],t.y=n[13],t.z=n[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let a=ms.set(n[0],n[1],n[2]).length(),o=ms.set(n[4],n[5],n[6]).length(),c=ms.set(n[8],n[9],n[10]).length();r<0&&(a=-a),Ai.copy(this);let l=1/a,u=1/o,f=1/c;return Ai.elements[0]*=l,Ai.elements[1]*=l,Ai.elements[2]*=l,Ai.elements[4]*=u,Ai.elements[5]*=u,Ai.elements[6]*=u,Ai.elements[8]*=f,Ai.elements[9]*=f,Ai.elements[10]*=f,e.setFromRotationMatrix(Ai),i.x=a,i.y=o,i.z=c,this}makePerspective(t,e,i,n,r,a,o=Pi,c=!1){let l=this.elements,u=2*r/(e-t),f=2*r/(i-n),h=(e+t)/(e-t),d=(i+n)/(i-n),g,v;if(c)g=r/(a-r),v=a*r/(a-r);else if(o===Pi)g=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===Ps)g=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=f,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,n,r,a,o=Pi,c=!1){let l=this.elements,u=2/(e-t),f=2/(i-n),h=-(e+t)/(e-t),d=-(i+n)/(i-n),g,v;if(c)g=1/(a-r),v=a/(a-r);else if(o===Pi)g=-2/(a-r),v=-(a+r)/(a-r);else if(o===Ps)g=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=f,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};vo.prototype.isMatrix4=!0;var ne=vo,ms=new P,Ai=new ne,Df=new P(0,0,0),Nf=new P(1,1,1),_n=new P,la=new P,ui=new P,qh=new ne,Yh=new Ke,ci=class s{constructor(t=0,e=0,i=0,n=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let n=t.elements,r=n[0],a=n[4],o=n[8],c=n[1],l=n[5],u=n[9],f=n[2],h=n[6],d=n[10];switch(e){case"XYZ":this._y=Math.asin(ee(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ee(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(ee(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ee(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(ee(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-ee(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:Wt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return qh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(qh,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Yh.setFromEuler(this),this.setFromQuaternion(Yh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ci.DEFAULT_ORDER="XYZ";var xr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Uf=0,$h=new P,gs=new Ke,nn=new ne,ca=new P,nr=new P,Ff=new P,Bf=new Ke,Zh=new P(1,0,0),Jh=new P(0,1,0),Kh=new P(0,0,1),jh={type:"added"},Of={type:"removed"},vs={type:"childadded",child:null},Yl={type:"childremoved",child:null},Ve=class s extends Gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Uf++}),this.uuid=ss(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new P,e=new ci,i=new Ke,n=new P(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new ne},normalMatrix:{value:new Yt}}),this.matrix=new ne,this.matrixWorld=new ne,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return gs.setFromAxisAngle(t,e),this.quaternion.multiply(gs),this}rotateOnWorldAxis(t,e){return gs.setFromAxisAngle(t,e),this.quaternion.premultiply(gs),this}rotateX(t){return this.rotateOnAxis(Zh,t)}rotateY(t){return this.rotateOnAxis(Jh,t)}rotateZ(t){return this.rotateOnAxis(Kh,t)}translateOnAxis(t,e){return $h.copy(t).applyQuaternion(this.quaternion),this.position.add($h.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Zh,t)}translateY(t){return this.translateOnAxis(Jh,t)}translateZ(t){return this.translateOnAxis(Kh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(nn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?ca.copy(t):ca.set(t,e,i);let n=this.parent;this.updateWorldMatrix(!0,!1),nr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?nn.lookAt(nr,ca,this.up):nn.lookAt(ca,nr,this.up),this.quaternion.setFromRotationMatrix(nn),n&&(nn.extractRotation(n.matrixWorld),gs.setFromRotationMatrix(nn),this.quaternion.premultiply(gs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Xt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(jh),vs.child=t,this.dispatchEvent(vs),vs.child=null):Xt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Of),Yl.child=t,this.dispatchEvent(Yl),Yl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),nn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),nn.multiply(t.parent.matrixWorld)),t.applyMatrix4(nn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(jh),vs.child=t,this.dispatchEvent(vs),vs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){let a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nr,t,Ff),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nr,Bf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,n=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*n,r[13]+=i-r[1]*e-r[5]*i-r[9]*n,r[14]+=n-r[2]*e-r[6]*i-r[10]*n}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let n={};n.uuid=this.uuid,n.type=this.type,n.name=this.name,n.castShadow=this.castShadow,n.receiveShadow=this.receiveShadow,n.visible=this.visible,n.frustumCulled=this.frustumCulled,n.renderOrder=this.renderOrder,n.static=this.static,n.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.pivot!==null&&(n.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(n.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(n.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(o=>({...o})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(t),n.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let f=c[l];r(t.shapes,f)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));n.material=o}else n.material=r(t.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];n.animations.push(r(t.animations,c))}}if(e){let o=a(t.geometries),c=a(t.materials),l=a(t.textures),u=a(t.images),f=a(t.shapes),h=a(t.skeletons),d=a(t.animations),g=a(t.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=n,i;function a(o){let c=[];for(let l in o){let u=o[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let n=t.children[i];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ve.DEFAULT_UP=new P(0,1,0);Ve.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var He=class extends Ve{constructor(){super(),this.isGroup=!0,this.type="Group"}},kf={type:"move"},Ns=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new He,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new He,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new He,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(let v of t.hand.values()){let m=e.getJointPose(v,i),p=this._getHandJoint(l,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,g=.005;l.inputState.pinching&&h>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&h<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&r!==null&&(n=r),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(kf)))}return o!==null&&(o.visible=n!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new He;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},nd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yn={h:0,s:0,l:0},ha={h:0,s:0,l:0};function $l(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var ht=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Je){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,le.colorSpaceToWorking(this,e),this}setRGB(t,e,i,n=le.workingColorSpace){return this.r=t,this.g=e,this.b=i,le.colorSpaceToWorking(this,n),this}setHSL(t,e,i,n=le.workingColorSpace){if(t=Jc(t,1),e=ee(e,0,1),i=ee(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=$l(a,r,t+1/3),this.g=$l(a,r,t),this.b=$l(a,r,t-1/3)}return le.colorSpaceToWorking(this,n),this}setStyle(t,e=Je){function i(r){r!==void 0&&parseFloat(r)<1&&Wt("Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Wt("Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=n[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Wt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Je){let i=nd[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Wt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ln(t.r),this.g=ln(t.g),this.b=ln(t.b),this}copyLinearToSRGB(t){return this.r=Cs(t.r),this.g=Cs(t.g),this.b=Cs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Je){return le.workingToColorSpace(ei.copy(this),t),Math.round(ee(ei.r*255,0,255))*65536+Math.round(ee(ei.g*255,0,255))*256+Math.round(ee(ei.b*255,0,255))}getHexString(t=Je){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=le.workingColorSpace){le.workingToColorSpace(ei.copy(this),e);let i=ei.r,n=ei.g,r=ei.b,a=Math.max(i,n,r),o=Math.min(i,n,r),c,l,u=(o+a)/2;if(o===a)c=0,l=0;else{let f=a-o;switch(l=u<=.5?f/(a+o):f/(2-a-o),a){case i:c=(n-r)/f+(n<r?6:0);break;case n:c=(r-i)/f+2;break;case r:c=(i-n)/f+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=le.workingColorSpace){return le.workingToColorSpace(ei.copy(this),e),t.r=ei.r,t.g=ei.g,t.b=ei.b,t}getStyle(t=Je){le.workingToColorSpace(ei.copy(this),t);let e=ei.r,i=ei.g,n=ei.b;return t!==Je?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(yn),this.setHSL(yn.h+t,yn.s+e,yn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(yn),t.getHSL(ha);let i=ur(yn.h,ha.h,e),n=ur(yn.s,ha.s,e),r=ur(yn.l,ha.l,e);return this.setHSL(i,n,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,n=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*n,this.g=r[1]*e+r[4]*i+r[7]*n,this.b=r[2]*e+r[5]*i+r[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ei=new ht;ht.NAMES=nd;var _r=class s{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new ht(t),this.density=e}clone(){return new s(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var hn=class extends Ve{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ci,this.environmentIntensity=1,this.environmentRotation=new ci,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Ri=new P,sn=new P,Zl=new P,rn=new P,xs=new P,_s=new P,Qh=new P,Jl=new P,Kl=new P,jl=new P,Ql=new ge,tc=new ge,ec=new ge,wn=class s{constructor(t=new P,e=new P,i=new P){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),Ri.subVectors(t,e),n.cross(Ri);let r=n.lengthSq();return r>0?n.multiplyScalar(1/Math.sqrt(r)):n.set(0,0,0)}static getBarycoord(t,e,i,n,r){Ri.subVectors(n,e),sn.subVectors(i,e),Zl.subVectors(t,e);let a=Ri.dot(Ri),o=Ri.dot(sn),c=Ri.dot(Zl),l=sn.dot(sn),u=sn.dot(Zl),f=a*l-o*o;if(f===0)return r.set(0,0,0),null;let h=1/f,d=(l*c-o*u)*h,g=(a*u-o*c)*h;return r.set(1-d-g,g,d)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,rn)===null?!1:rn.x>=0&&rn.y>=0&&rn.x+rn.y<=1}static getInterpolation(t,e,i,n,r,a,o,c){return this.getBarycoord(t,e,i,n,rn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,rn.x),c.addScaledVector(a,rn.y),c.addScaledVector(o,rn.z),c)}static getInterpolatedAttribute(t,e,i,n,r,a){return Ql.setScalar(0),tc.setScalar(0),ec.setScalar(0),Ql.fromBufferAttribute(t,e),tc.fromBufferAttribute(t,i),ec.fromBufferAttribute(t,n),a.setScalar(0),a.addScaledVector(Ql,r.x),a.addScaledVector(tc,r.y),a.addScaledVector(ec,r.z),a}static isFrontFacing(t,e,i,n){return Ri.subVectors(i,e),sn.subVectors(t,e),Ri.cross(sn).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ri.subVectors(this.c,this.b),sn.subVectors(this.a,this.b),Ri.cross(sn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,n,r){return s.getInterpolation(t,this.a,this.b,this.c,e,i,n,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,n=this.b,r=this.c,a,o;xs.subVectors(n,i),_s.subVectors(r,i),Jl.subVectors(t,i);let c=xs.dot(Jl),l=_s.dot(Jl);if(c<=0&&l<=0)return e.copy(i);Kl.subVectors(t,n);let u=xs.dot(Kl),f=_s.dot(Kl);if(u>=0&&f<=u)return e.copy(n);let h=c*f-u*l;if(h<=0&&c>=0&&u<=0)return a=c/(c-u),e.copy(i).addScaledVector(xs,a);jl.subVectors(t,r);let d=xs.dot(jl),g=_s.dot(jl);if(g>=0&&d<=g)return e.copy(r);let v=d*l-c*g;if(v<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(i).addScaledVector(_s,o);let m=u*g-d*f;if(m<=0&&f-u>=0&&d-g>=0)return Qh.subVectors(r,n),o=(f-u)/(f-u+(d-g)),e.copy(n).addScaledVector(Qh,o);let p=1/(m+v+h);return a=v*p,o=h*p,e.copy(i).addScaledVector(xs,a).addScaledVector(_s,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Wi=class{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Ci.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Ci.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Ci.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Ci):Ci.fromBufferAttribute(r,a),Ci.applyMatrix4(t.matrixWorld),this.expandByPoint(Ci);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ua.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ua.copy(i.boundingBox)),ua.applyMatrix4(t.matrixWorld),this.union(ua)}let n=t.children;for(let r=0,a=n.length;r<a;r++)this.expandByObject(n[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ci),Ci.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(sr),da.subVectors(this.max,sr),ys.subVectors(t.a,sr),Ms.subVectors(t.b,sr),bs.subVectors(t.c,sr),Mn.subVectors(Ms,ys),bn.subVectors(bs,Ms),Gn.subVectors(ys,bs);let e=[0,-Mn.z,Mn.y,0,-bn.z,bn.y,0,-Gn.z,Gn.y,Mn.z,0,-Mn.x,bn.z,0,-bn.x,Gn.z,0,-Gn.x,-Mn.y,Mn.x,0,-bn.y,bn.x,0,-Gn.y,Gn.x,0];return!ic(e,ys,Ms,bs,da)||(e=[1,0,0,0,1,0,0,0,1],!ic(e,ys,Ms,bs,da))?!1:(fa.crossVectors(Mn,bn),e=[fa.x,fa.y,fa.z],ic(e,ys,Ms,bs,da))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ci).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ci).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(an[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),an[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),an[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),an[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),an[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),an[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),an[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),an[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(an),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},an=[new P,new P,new P,new P,new P,new P,new P,new P],Ci=new P,ua=new Wi,ys=new P,Ms=new P,bs=new P,Mn=new P,bn=new P,Gn=new P,sr=new P,da=new P,fa=new P,Wn=new P;function ic(s,t,e,i,n){for(let r=0,a=s.length-3;r<=a;r+=3){Wn.fromArray(s,r);let o=n.x*Math.abs(Wn.x)+n.y*Math.abs(Wn.y)+n.z*Math.abs(Wn.z),c=t.dot(Wn),l=e.dot(Wn),u=i.dot(Wn);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}var Oe=new P,pa=new at,zf=0,ke=class extends Gi{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:zf++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=ju,this.updateRanges=[],this.gpuType=Mi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)pa.fromBufferAttribute(this,e),pa.applyMatrix3(t),this.setXY(e,pa.x,pa.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Oe.fromBufferAttribute(this,e),Oe.applyMatrix3(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Oe.fromBufferAttribute(this,e),Oe.applyMatrix4(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Oe.fromBufferAttribute(this,e),Oe.applyNormalMatrix(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Oe.fromBufferAttribute(this,e),Oe.transformDirection(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Rs(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=oi(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Rs(e,this.array)),e}setX(t,e){return this.normalized&&(e=oi(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Rs(e,this.array)),e}setY(t,e){return this.normalized&&(e=oi(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Rs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=oi(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Rs(e,this.array)),e}setW(t,e){return this.normalized&&(e=oi(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=oi(e,this.array),i=oi(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=oi(e,this.array),i=oi(i,this.array),n=oi(n,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,r){return t*=this.itemSize,this.normalized&&(e=oi(e,this.array),i=oi(i,this.array),n=oi(n,this.array),r=oi(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var yr=class extends ke{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Mr=class extends ke{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var Qt=class extends ke{constructor(t,e,i){super(new Float32Array(t),e,i)}},Hf=new Wi,rr=new P,nc=new P,un=class{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):Hf.setFromPoints(t).getCenter(i);let n=0;for(let r=0,a=t.length;r<a;r++)n=Math.max(n,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;rr.subVectors(t,this.center);let e=rr.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(rr,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(nc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(rr.copy(t.center).add(nc)),this.expandByPoint(rr.copy(t.center).sub(nc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Vf=0,_i=new ne,sc=new Ve,Ss=new P,di=new Wi,ar=new Wi,Xe=new P,xe=class s extends Gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Vf++}),this.uuid=ss(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(df(t)?Mr:yr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Yt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return _i.makeRotationFromQuaternion(t),this.applyMatrix4(_i),this}rotateX(t){return _i.makeRotationX(t),this.applyMatrix4(_i),this}rotateY(t){return _i.makeRotationY(t),this.applyMatrix4(_i),this}rotateZ(t){return _i.makeRotationZ(t),this.applyMatrix4(_i),this}translate(t,e,i){return _i.makeTranslation(t,e,i),this.applyMatrix4(_i),this}scale(t,e,i){return _i.makeScale(t,e,i),this.applyMatrix4(_i),this}lookAt(t){return sc.lookAt(t),sc.updateMatrix(),this.applyMatrix4(sc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ss).negate(),this.translate(Ss.x,Ss.y,Ss.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let n=0,r=t.length;n<r;n++){let a=t[n];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Qt(i,3))}else{let i=Math.min(t.length,e.count);for(let n=0;n<i;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&Wt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Xt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){let r=e[i];di.setFromBufferAttribute(r),this.morphTargetsRelative?(Xe.addVectors(this.boundingBox.min,di.min),this.boundingBox.expandByPoint(Xe),Xe.addVectors(this.boundingBox.max,di.max),this.boundingBox.expandByPoint(Xe)):(this.boundingBox.expandByPoint(di.min),this.boundingBox.expandByPoint(di.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Xt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new un);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Xt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){let i=this.boundingSphere.center;if(di.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];ar.setFromBufferAttribute(o),this.morphTargetsRelative?(Xe.addVectors(di.min,ar.min),di.expandByPoint(Xe),Xe.addVectors(di.max,ar.max),di.expandByPoint(Xe)):(di.expandByPoint(ar.min),di.expandByPoint(ar.max))}di.getCenter(i);let n=0;for(let r=0,a=t.count;r<a;r++)Xe.fromBufferAttribute(t,r),n=Math.max(n,i.distanceToSquared(Xe));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Xe.fromBufferAttribute(o,l),c&&(Ss.fromBufferAttribute(t,l),Xe.add(Ss)),n=Math.max(n,i.distanceToSquared(Xe))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&Xt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Xt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,n=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new ke(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],c=[];for(let _=0;_<i.count;_++)o[_]=new P,c[_]=new P;let l=new P,u=new P,f=new P,h=new at,d=new at,g=new at,v=new P,m=new P;function p(_,T,R){l.fromBufferAttribute(i,_),u.fromBufferAttribute(i,T),f.fromBufferAttribute(i,R),h.fromBufferAttribute(r,_),d.fromBufferAttribute(r,T),g.fromBufferAttribute(r,R),u.sub(l),f.sub(l),d.sub(h),g.sub(h);let I=1/(d.x*g.y-g.x*d.y);isFinite(I)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(I),m.copy(f).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(I),o[_].add(v),o[T].add(v),o[R].add(v),c[_].add(m),c[T].add(m),c[R].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let _=0,T=y.length;_<T;++_){let R=y[_],I=R.start,D=R.count;for(let k=I,N=I+D;k<N;k+=3)p(t.getX(k+0),t.getX(k+1),t.getX(k+2))}let M=new P,x=new P,S=new P,w=new P;function A(_){S.fromBufferAttribute(n,_),w.copy(S);let T=o[_];M.copy(T),M.sub(S.multiplyScalar(S.dot(T))).normalize(),x.crossVectors(w,T);let I=x.dot(c[_])<0?-1:1;a.setXYZW(_,M.x,M.y,M.z,I)}for(let _=0,T=y.length;_<T;++_){let R=y[_],I=R.start,D=R.count;for(let k=I,N=I+D;k<N;k+=3)A(t.getX(k+0)),A(t.getX(k+1)),A(t.getX(k+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new ke(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let h=0,d=i.count;h<d;h++)i.setXYZ(h,0,0,0);let n=new P,r=new P,a=new P,o=new P,c=new P,l=new P,u=new P,f=new P;if(t)for(let h=0,d=t.count;h<d;h+=3){let g=t.getX(h+0),v=t.getX(h+1),m=t.getX(h+2);n.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,m),u.subVectors(a,r),f.subVectors(n,r),u.cross(f),o.fromBufferAttribute(i,g),c.fromBufferAttribute(i,v),l.fromBufferAttribute(i,m),o.add(u),c.add(u),l.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let h=0,d=e.count;h<d;h+=3)n.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),a.fromBufferAttribute(e,h+2),u.subVectors(a,r),f.subVectors(n,r),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Xe.fromBufferAttribute(t,e),Xe.normalize(),t.setXYZ(e,Xe.x,Xe.y,Xe.z)}toNonIndexed(){function t(o,c){let l=o.array,u=o.itemSize,f=o.normalized,h=new l.constructor(c.length*u),d=0,g=0;for(let v=0,m=c.length;v<m;v++){o.isInterleavedBufferAttribute?d=c[v]*o.data.stride+o.offset:d=c[v]*u;for(let p=0;p<u;p++)h[g++]=l[d++]}return new ke(h,u,f)}if(this.index===null)return Wt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,i=this.index.array,n=this.attributes;for(let o in n){let c=n[o],l=t(c,i);e.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let u=0,f=l.length;u<f;u++){let h=l[u],d=t(h,i);c.push(d)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let c in i){let l=i[c];t.data.attributes[c]=l.toJSON(t.data)}let n={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let f=0,h=l.length;f<h;f++){let d=l[f];u.push(d.toJSON(t.data))}u.length>0&&(n[c]=u,r=!0)}r&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let n=t.attributes;for(let l in n){let u=n[l];this.setAttribute(l,u.clone(e))}let r=t.morphAttributes;for(let l in r){let u=[],f=r[l];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let l=0,u=a.length;l<u;l++){let f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var rc=new P,Gf=new P,Wf=new Yt,Ii=class{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let n=rc.subVectors(i,e).cross(Gf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let n=t.delta(rc),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(n,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||Wf.getNormalMatrix(t),n=this.coplanarPoint(rc).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Xf=0,dn=class extends Gi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xf++}),this.uuid=ss(),this.name="",this.type="Material",this.blending=In,this.side=$i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ic,this.blendDst=Pc,this.blendEquation=is,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ht(0,0,0),this.blendAlpha=0,this.depthFunc=Is,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Da,this.stencilZFail=Da,this.stencilZPass=Da,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){Wt(`Material: parameter '${e}' has value of undefined.`);continue}let n=this[e];if(n===void 0){Wt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector2&&i&&i.isVector2||n&&n.isEuler&&i&&i.isEuler||n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(e){let r=n(t.textures),a=n(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new ht().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new Ii().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new at().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new at().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let n=e.length;i=new Array(n);for(let r=0;r!==n;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var on=new P,ac=new P,ma=new P,ga=new P,br=class{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,on)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=on.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(on.copy(this.origin).addScaledVector(this.direction,e),on.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){ac.copy(t).add(e).multiplyScalar(.5),ma.copy(e).sub(t).normalize(),ga.copy(this.origin).sub(ac);let r=t.distanceTo(e)*.5,a=-this.direction.dot(ma),o=ga.dot(this.direction),c=-ga.dot(ma),l=ga.lengthSq(),u=Math.abs(1-a*a),f,h,d,g;if(u>0)if(f=a*c-o,h=a*o-c,g=r*u,f>=0)if(h>=-g)if(h<=g){let v=1/u;f*=v,h*=v,d=f*(f+a*h+2*o)+h*(a*f+h+2*c)+l}else h=r,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*c)+l;else h=-r,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*c)+l;else h<=-g?(f=Math.max(0,-(-a*r+o)),h=f>0?-r:Math.min(Math.max(-r,-c),r),d=-f*f+h*(h+2*c)+l):h<=g?(f=0,h=Math.min(Math.max(-r,-c),r),d=h*(h+2*c)+l):(f=Math.max(0,-(a*r+o)),h=f>0?r:Math.min(Math.max(-r,-c),r),d=-f*f+h*(h+2*c)+l);else h=a>0?-r:r,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,f),n&&n.copy(ac).addScaledVector(ma,h),d}intersectSphere(t,e){if(t.radius<0)return null;on.subVectors(t.center,this.origin);let i=on.dot(this.direction),n=on.dot(on)-i*i,r=t.radius*t.radius;if(n>r)return null;let a=Math.sqrt(r-n),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,r,a,o,c,l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return l>=0?(i=(t.min.x-h.x)*l,n=(t.max.x-h.x)*l):(i=(t.max.x-h.x)*l,n=(t.min.x-h.x)*l),u>=0?(r=(t.min.y-h.y)*u,a=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,a=(t.min.y-h.y)*u),i>a||r>n||((r>i||isNaN(i))&&(i=r),(a<n||isNaN(n))&&(n=a),f>=0?(o=(t.min.z-h.z)*f,c=(t.max.z-h.z)*f):(o=(t.max.z-h.z)*f,c=(t.min.z-h.z)*f),i>c||o>n)||((o>i||i!==i)&&(i=o),(c<n||n!==n)&&(n=c),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,on)!==null}intersectTriangle(t,e,i,n,r){let a=this.origin,o=this.direction,c=o.x,l=o.y,u=o.z,f=t.x-a.x,h=t.y-a.y,d=t.z-a.z,g=e.x-a.x,v=e.y-a.y,m=e.z-a.z,p=i.x-a.x,y=i.y-a.y,M=i.z-a.z,x=Math.abs(c),S=Math.abs(l),w=Math.abs(u),A,_,T,R,I,D,k,N,O,z,Y,tt;if(x>=S&&x>=w?(T=c,D=f,O=g,tt=p,c>=0?(A=l,_=u,R=h,I=d,k=v,N=m,z=y,Y=M):(A=u,_=l,R=d,I=h,k=m,N=v,z=M,Y=y)):S>=w?(T=l,D=h,O=v,tt=y,l>=0?(A=u,_=c,R=d,I=f,k=m,N=g,z=M,Y=p):(A=c,_=u,R=f,I=d,k=g,N=m,z=p,Y=M)):(T=u,D=d,O=m,tt=M,u>=0?(A=c,_=l,R=f,I=h,k=g,N=v,z=p,Y=y):(A=l,_=c,R=h,I=f,k=v,N=g,z=y,Y=p)),T===0)return null;let X=A/T,j=_/T,et=1/T,Ct=R-X*D,wt=I-j*D,re=k-X*O,qt=N-j*O,te=z-X*tt,Z=Y-j*tt,K=te*qt-Z*re,mt=Ct*Z-wt*te,Vt=re*wt-qt*Ct;if(n){if(K<0||mt<0||Vt<0)return null}else if((K<0||mt<0||Vt<0)&&(K>0||mt>0||Vt>0))return null;let pt=K+mt+Vt;if(pt===0)return null;let zt=et*(K*D+mt*O+Vt*tt);return(pt>0?zt<0:zt>0)?null:this.at(zt/pt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Xi=class extends dn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ci,this.combine=Lc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},tu=new ne,Xn=new br,va=new un,eu=new P,xa=new P,_a=new P,ya=new P,oc=new P,Ma=new P,iu=new P,ba=new P,dt=class extends Ve{constructor(t=new xe,e=new Xi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){let o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let i=this.geometry,n=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(n,t);let o=this.morphTargetInfluences;if(r&&o){Ma.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let u=o[c],f=r[c];u!==0&&(oc.fromBufferAttribute(f,t),a?Ma.addScaledVector(oc,u):Ma.addScaledVector(oc.sub(e),u))}e.add(Ma)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,n=this.material,r=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),va.copy(i.boundingSphere),va.applyMatrix4(r),Xn.copy(t.ray).recast(t.near),!(va.containsPoint(Xn.origin)===!1&&(Xn.intersectSphere(va,eu)===null||Xn.origin.distanceToSquared(eu)>(t.far-t.near)**2))&&(tu.copy(r).invert(),Xn.copy(t.ray).applyMatrix4(tu),!(i.boundingBox!==null&&Xn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Xn)))}_computeIntersections(t,e,i){let n,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=h.length;g<v;g++){let m=h[g],p=a[m.materialIndex],y=Math.max(m.start,d.start),M=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let x=y,S=M;x<S;x+=3){let w=o.getX(x),A=o.getX(x+1),_=o.getX(x+2);n=Sa(this,p,t,i,l,u,f,w,A,_),n&&(n.faceIndex=Math.floor(x/3),n.face.materialIndex=m.materialIndex,e.push(n))}}else{let g=Math.max(0,d.start),v=Math.min(o.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){let y=o.getX(m),M=o.getX(m+1),x=o.getX(m+2);n=Sa(this,a,t,i,l,u,f,y,M,x),n&&(n.faceIndex=Math.floor(m/3),e.push(n))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,v=h.length;g<v;g++){let m=h[g],p=a[m.materialIndex],y=Math.max(m.start,d.start),M=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let x=y,S=M;x<S;x+=3){let w=x,A=x+1,_=x+2;n=Sa(this,p,t,i,l,u,f,w,A,_),n&&(n.faceIndex=Math.floor(x/3),n.face.materialIndex=m.materialIndex,e.push(n))}}else{let g=Math.max(0,d.start),v=Math.min(c.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){let y=m,M=m+1,x=m+2;n=Sa(this,a,t,i,l,u,f,y,M,x),n&&(n.faceIndex=Math.floor(m/3),e.push(n))}}}};function qf(s,t,e,i,n,r,a,o){let c;if(t.side===Ze?c=i.intersectTriangle(a,r,n,!0,o):c=i.intersectTriangle(n,r,a,t.side===$i,o),c===null)return null;ba.copy(o),ba.applyMatrix4(s.matrixWorld);let l=e.ray.origin.distanceTo(ba);return l<e.near||l>e.far?null:{distance:l,point:ba.clone(),object:s}}function Sa(s,t,e,i,n,r,a,o,c,l){s.getVertexPosition(o,xa),s.getVertexPosition(c,_a),s.getVertexPosition(l,ya);let u=qf(s,t,e,i,xa,_a,ya,iu);if(u){let f=new P;wn.getBarycoord(iu,xa,_a,ya,f),n&&(u.uv=wn.getInterpolatedAttribute(n,o,c,l,f,new at)),r&&(u.uv1=wn.getInterpolatedAttribute(r,o,c,l,f,new at)),a&&(u.normal=wn.getInterpolatedAttribute(a,o,c,l,f,new P),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let h={a:o,b:c,c:l,normal:new P,materialIndex:0};wn.getNormal(xa,_a,ya,h.normal),u.face=h,u.barycoord=f}return u}var Sr=class extends li{constructor(t=null,e=1,i=1,n,r,a,o,c,l=Ye,u=Ye,f,h){super(null,a,o,c,l,u,n,r,f,h),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ze=class extends ke{constructor(t,e,i,n=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},ws=new ne,nu=new ne,wa=[],su=new Wi,Yf=new ne,or=new dt,lr=new un,Li=class extends dt{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ze(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,Yf)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Wi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,ws),su.copy(t.boundingBox).applyMatrix4(ws),this.boundingBox.union(su)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new un),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,ws),lr.copy(t.boundingSphere).applyMatrix4(ws),this.boundingSphere.union(lr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,n=this.morphTexture.source.data.data,r=i.length+1,a=t*r+1;for(let o=0;o<i.length;o++)i[o]=n[a+o]}raycast(t,e){let i=this.matrixWorld,n=this.count;if(or.geometry=this.geometry,or.material=this.material,or.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),lr.copy(this.boundingSphere),lr.applyMatrix4(i),t.ray.intersectsSphere(lr)!==!1))for(let r=0;r<n;r++){this.getMatrixAt(r,ws),nu.multiplyMatrices(i,ws),or.matrixWorld=nu,or.raycast(t,wa);for(let a=0,o=wa.length;a<o;a++){let c=wa[a];c.instanceId=r,c.object=this,e.push(c)}wa.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new ze(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let i=e.morphTargetInfluences,n=i.length+1;this.morphTexture===null&&(this.morphTexture=new Sr(new Float32Array(n*this.count),n,this.count,wo,Mi));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<i.length;l++)a+=i[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=n*t;return r[c]=o,r.set(i,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},qn=new un,$f=new at(.5,.5),Ta=new P,Us=class{constructor(t=new Ii,e=new Ii,i=new Ii,n=new Ii,r=new Ii,a=new Ii){this.planes=[t,e,i,n,r,a]}set(t,e,i,n,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(n),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Pi,i=!1){let n=this.planes,r=t.elements,a=r[0],o=r[1],c=r[2],l=r[3],u=r[4],f=r[5],h=r[6],d=r[7],g=r[8],v=r[9],m=r[10],p=r[11],y=r[12],M=r[13],x=r[14],S=r[15];if(n[0].setComponents(l-a,d-u,p-g,S-y).normalize(),n[1].setComponents(l+a,d+u,p+g,S+y).normalize(),n[2].setComponents(l+o,d+f,p+v,S+M).normalize(),n[3].setComponents(l-o,d-f,p-v,S-M).normalize(),i)n[4].setComponents(c,h,m,x).normalize(),n[5].setComponents(l-c,d-h,p-m,S-x).normalize();else if(n[4].setComponents(l-c,d-h,p-m,S-x).normalize(),e===Pi)n[5].setComponents(l+c,d+h,p+m,S+x).normalize();else if(e===Ps)n[5].setComponents(c,h,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),qn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),qn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(qn)}intersectsSprite(t){qn.center.set(0,0,0);let e=$f.distanceTo(t.center);return qn.radius=.7071067811865476+e,qn.applyMatrix4(t.matrixWorld),this.intersectsSphere(qn)}intersectsSphere(t){let e=this.planes,i=t.center,n=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let n=e[i];if(Ta.x=n.normal.x>0?t.max.x:t.min.x,Ta.y=n.normal.y>0?t.max.y:t.min.y,Ta.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(Ta)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var qa=class extends dn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ht(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},ru=new ne,vc=new br,Ea=new un,Aa=new P,Kn=class extends Ve{constructor(t=new xe,e=new qa){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,n=this.matrixWorld,r=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ea.copy(i.boundingSphere),Ea.applyMatrix4(n),Ea.radius+=r,t.ray.intersectsSphere(Ea)===!1)return;ru.copy(n).invert(),vc.copy(t.ray).applyMatrix4(ru);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=i.index,f=i.attributes.position;if(l!==null){let h=Math.max(0,a.start),d=Math.min(l.count,a.start+a.count);for(let g=h,v=d;g<v;g++){let m=l.getX(g);Aa.fromBufferAttribute(f,m),au(Aa,m,c,n,t,e,this)}}else{let h=Math.max(0,a.start),d=Math.min(f.count,a.start+a.count);for(let g=h,v=d;g<v;g++)Aa.fromBufferAttribute(f,g),au(Aa,g,c,n,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){let o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function au(s,t,e,i,n,r,a){let o=vc.distanceSqToPoint(s);if(o<e){let c=new P;vc.closestPointToPoint(s,c),c.applyMatrix4(i);let l=n.ray.origin.distanceTo(c);if(l<n.near||l>n.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var wr=class extends li{constructor(t=[],e=Pn,i,n,r,a,o,c,l,u){super(t,e,i,n,r,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},fn=class extends li{constructor(t,e,i,n,r,a,o,c,l){super(t,e,i,n,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Tn=class extends li{constructor(t,e,i=Ni,n,r,a,o=Ye,c=Ye,l,u=Vi,f=1){if(u!==Vi&&u!==Dn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:t,height:e,depth:f};super(h,n,r,a,o,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ds(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Ya=class extends Tn{constructor(t,e=Ni,i=Pn,n,r,a=Ye,o=Ye,c,l=Vi){let u={width:t,height:t,depth:1},f=[u,u,u,u,u,u];super(t,t,e,i,n,r,a,o,c,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Tr=class extends li{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Re=class s extends xe{constructor(t=1,e=1,i=1,n=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:r,depthSegments:a};let o=this;n=Math.floor(n),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],u=[],f=[],h=0,d=0;g("z","y","x",-1,-1,i,e,t,a,r,0),g("z","y","x",1,-1,i,e,-t,a,r,1),g("x","z","y",1,1,t,i,e,n,a,2),g("x","z","y",1,-1,t,i,-e,n,a,3),g("x","y","z",1,-1,t,e,i,n,r,4),g("x","y","z",-1,-1,t,e,-i,n,r,5),this.setIndex(c),this.setAttribute("position",new Qt(l,3)),this.setAttribute("normal",new Qt(u,3)),this.setAttribute("uv",new Qt(f,2));function g(v,m,p,y,M,x,S,w,A,_,T){let R=x/A,I=S/_,D=x/2,k=S/2,N=w/2,O=A+1,z=_+1,Y=0,tt=0,X=new P;for(let j=0;j<z;j++){let et=j*I-k;for(let Ct=0;Ct<O;Ct++){let wt=Ct*R-D;X[v]=wt*y,X[m]=et*M,X[p]=N,l.push(X.x,X.y,X.z),X[v]=0,X[m]=0,X[p]=w>0?1:-1,u.push(X.x,X.y,X.z),f.push(Ct/A),f.push(1-j/_),Y+=1}}for(let j=0;j<_;j++)for(let et=0;et<A;et++){let Ct=h+et+O*j,wt=h+et+O*(j+1),re=h+(et+1)+O*(j+1),qt=h+(et+1)+O*j;c.push(Ct,wt,qt),c.push(wt,re,qt),tt+=6}o.addGroup(d,tt,T),d+=tt,h+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var qi=class s extends xe{constructor(t=1,e=32,i=0,n=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:n},e=Math.max(3,e);let r=[],a=[],o=[],c=[],l=new P,u=new at;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let f=0,h=3;f<=e;f++,h+=3){let d=i+f/e*n;l.x=t*Math.cos(d),l.y=t*Math.sin(d),a.push(l.x,l.y,l.z),o.push(0,0,1),u.x=(a[h]/t+1)/2,u.y=(a[h+1]/t+1)/2,c.push(u.x,u.y)}for(let f=1;f<=e;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new Qt(a,3)),this.setAttribute("normal",new Qt(o,3)),this.setAttribute("uv",new Qt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.segments,t.thetaStart,t.thetaLength)}},_e=class s extends xe{constructor(t=1,e=1,i=1,n=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:n,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;n=Math.floor(n),r=Math.floor(r);let u=[],f=[],h=[],d=[],g=0,v=[],m=i/2,p=0;y(),a===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(u),this.setAttribute("position",new Qt(f,3)),this.setAttribute("normal",new Qt(h,3)),this.setAttribute("uv",new Qt(d,2));function y(){let x=new P,S=new P,w=0,A=(e-t)/i;for(let _=0;_<=r;_++){let T=[],R=_/r,I=R*(e-t)+t;for(let D=0;D<=n;D++){let k=D/n,N=k*c+o,O=Math.sin(N),z=Math.cos(N);S.x=I*O,S.y=-R*i+m,S.z=I*z,f.push(S.x,S.y,S.z),x.set(O,A,z).normalize(),h.push(x.x,x.y,x.z),d.push(k,1-R),T.push(g++)}v.push(T)}for(let _=0;_<n;_++)for(let T=0;T<r;T++){let R=v[T][_],I=v[T+1][_],D=v[T+1][_+1],k=v[T][_+1];(t>0||T!==0)&&(u.push(R,I,k),w+=3),(e>0||T!==r-1)&&(u.push(I,D,k),w+=3)}l.addGroup(p,w,0),p+=w}function M(x){let S=g,w=new at,A=new P,_=0,T=x===!0?t:e,R=x===!0?1:-1;for(let D=1;D<=n;D++)f.push(0,m*R,0),h.push(0,R,0),d.push(.5,.5),g++;let I=g;for(let D=0;D<=n;D++){let N=D/n*c+o,O=Math.cos(N),z=Math.sin(N);A.x=T*z,A.y=m*R,A.z=T*O,f.push(A.x,A.y,A.z),h.push(0,R,0),w.x=O*.5+.5,w.y=z*.5*R+.5,d.push(w.x,w.y),g++}for(let D=0;D<n;D++){let k=S+D,N=I+D;x===!0?u.push(N,N+1,k):u.push(N+1,N,k),_+=3}l.addGroup(p,_,x===!0?1:2),p+=_}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Er=class s extends _e{constructor(t=1,e=1,i=32,n=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,i,n,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:n,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new s(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},$a=class s extends xe{constructor(t=[],e=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:n};let r=[],a=[];o(n),l(i),u(),this.setAttribute("position",new Qt(r,3)),this.setAttribute("normal",new Qt(r.slice(),3)),this.setAttribute("uv",new Qt(a,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function o(y){let M=new P,x=new P,S=new P;for(let w=0;w<e.length;w+=3)d(e[w+0],M),d(e[w+1],x),d(e[w+2],S),c(M,x,S,y)}function c(y,M,x,S){let w=S+1,A=[];for(let _=0;_<=w;_++){A[_]=[];let T=y.clone().lerp(x,_/w),R=M.clone().lerp(x,_/w),I=w-_;for(let D=0;D<=I;D++)D===0&&_===w?A[_][D]=T:A[_][D]=T.clone().lerp(R,D/I)}for(let _=0;_<w;_++)for(let T=0;T<2*(w-_)-1;T++){let R=Math.floor(T/2);T%2===0?(h(A[_][R+1]),h(A[_+1][R]),h(A[_][R])):(h(A[_][R+1]),h(A[_+1][R+1]),h(A[_+1][R]))}}function l(y){let M=new P;for(let x=0;x<r.length;x+=3)M.x=r[x+0],M.y=r[x+1],M.z=r[x+2],M.normalize().multiplyScalar(y),r[x+0]=M.x,r[x+1]=M.y,r[x+2]=M.z}function u(){let y=new P;for(let M=0;M<r.length;M+=3){y.x=r[M+0],y.y=r[M+1],y.z=r[M+2];let x=m(y)/2/Math.PI+.5,S=p(y)/Math.PI+.5;a.push(x,1-S)}g(),f()}function f(){for(let y=0;y<a.length;y+=6){let M=a[y+0],x=a[y+2],S=a[y+4],w=Math.max(M,x,S),A=Math.min(M,x,S);w>.9&&A<.1&&(M<.2&&(a[y+0]+=1),x<.2&&(a[y+2]+=1),S<.2&&(a[y+4]+=1))}}function h(y){r.push(y.x,y.y,y.z)}function d(y,M){let x=y*3;M.x=t[x+0],M.y=t[x+1],M.z=t[x+2]}function g(){let y=new P,M=new P,x=new P,S=new P,w=new at,A=new at,_=new at;for(let T=0,R=0;T<r.length;T+=9,R+=6){y.set(r[T+0],r[T+1],r[T+2]),M.set(r[T+3],r[T+4],r[T+5]),x.set(r[T+6],r[T+7],r[T+8]),w.set(a[R+0],a[R+1]),A.set(a[R+2],a[R+3]),_.set(a[R+4],a[R+5]),S.copy(y).add(M).add(x).divideScalar(3);let I=m(S);v(w,R+0,y,I),v(A,R+2,M,I),v(_,R+4,x,I)}}function v(y,M,x,S){S<0&&y.x===1&&(a[M]=y.x-1),x.x===0&&x.z===0&&(a[M]=S/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.vertices,t.indices,t.radius,t.detail)}};var fi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Wt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,n=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),r+=i.distanceTo(n),e.push(r),n=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let i=this.getLengths(),n=0,r=i.length,a;e?a=e:a=t*i[r-1];let o=0,c=r-1,l;for(;o<=c;)if(n=Math.floor(o+(c-o)/2),l=i[n]-a,l<0)o=n+1;else if(l>0)c=n-1;else{c=n;break}if(n=c,i[n]===a)return n/(r-1);let u=i[n],h=i[n+1]-u,d=(a-u)/h;return(n+d)/(r-1)}getTangent(t,e){let n=t-1e-4,r=t+1e-4;n<0&&(n=0),r>1&&(r=1);let a=this.getPoint(n),o=this.getPoint(r),c=e||(a.isVector2?new at:new P);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){let i=new P,n=[],r=[],a=[],o=new P,c=new ne;for(let d=0;d<=t;d++){let g=d/t;n[d]=this.getTangentAt(g,new P)}r[0]=new P,a[0]=new P;let l=Number.MAX_VALUE,u=Math.abs(n[0].x),f=Math.abs(n[0].y),h=Math.abs(n[0].z);u<=l&&(l=u,i.set(1,0,0)),f<=l&&(l=f,i.set(0,1,0)),h<=l&&i.set(0,0,1),o.crossVectors(n[0],i).normalize(),r[0].crossVectors(n[0],o),a[0].crossVectors(n[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(n[d-1],n[d]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(ee(n[d-1].dot(n[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(o,g))}a[d].crossVectors(n[d],r[d])}if(e===!0){let d=Math.acos(ee(r[0].dot(r[t]),-1,1));d/=t,n[0].dot(o.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(n[g],d*g)),a[g].crossVectors(n[g],r[g])}return{tangents:n,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Fs=class extends fi{constructor(t=0,e=0,i=1,n=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=n,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e=new at){let i=e,n=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=n;for(;r>n;)r-=n;r<Number.EPSILON&&(a?r=0:r=n),this.aClockwise===!0&&!a&&(r===n?r=-n:r=r-n);let o=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=c-this.aX,d=l-this.aY;c=h*u-d*f+this.aX,l=h*f+d*u+this.aY}return i.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Za=class extends Fs{constructor(t,e,i,n,r,a){super(t,e,i,i,n,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Kc(){let s=0,t=0,e=0,i=0;function n(r,a,o,c){s=r,t=o,e=-3*r+3*a-2*o-c,i=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){n(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,u,f){let h=(a-r)/l-(o-r)/(l+u)+(o-a)/u,d=(o-a)/u-(c-a)/(u+f)+(c-o)/f;h*=u,d*=u,n(a,o,h,d)},calc:function(r){let a=r*r,o=a*r;return s+t*r+e*a+i*o}}}var ou=new P,lu=new P,lc=new Kc,cc=new Kc,hc=new Kc,Ja=class extends fi{constructor(t=[],e=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=n}getPoint(t,e=new P){let i=e,n=this.points,r=n.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,u;this.closed||o>0?l=n[(o-1)%r]:(lu.subVectors(n[0],n[1]).add(n[0]),l=lu);let f=n[o%r],h=n[(o+1)%r];if(this.closed||o+2<r?u=n[(o+2)%r]:(ou.subVectors(n[r-1],n[r-2]).add(n[r-1]),u=ou),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(f),d),v=Math.pow(f.distanceToSquared(h),d),m=Math.pow(h.distanceToSquared(u),d);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),lc.initNonuniformCatmullRom(l.x,f.x,h.x,u.x,g,v,m),cc.initNonuniformCatmullRom(l.y,f.y,h.y,u.y,g,v,m),hc.initNonuniformCatmullRom(l.z,f.z,h.z,u.z,g,v,m)}else this.curveType==="catmullrom"&&(lc.initCatmullRom(l.x,f.x,h.x,u.x,this.tension),cc.initCatmullRom(l.y,f.y,h.y,u.y,this.tension),hc.initCatmullRom(l.z,f.z,h.z,u.z,this.tension));return i.set(lc.calc(c),cc.calc(c),hc.calc(c)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(n.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let n=this.points[e];t.points.push(n.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(new P().fromArray(n))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function cu(s,t,e,i,n){let r=(i-t)*.5,a=(n-e)*.5,o=s*s,c=s*o;return(2*e-2*i+r+a)*c+(-3*e+3*i-2*r-a)*o+r*s+e}function Zf(s,t){let e=1-s;return e*e*t}function Jf(s,t){return 2*(1-s)*s*t}function Kf(s,t){return s*s*t}function dr(s,t,e,i){return Zf(s,t)+Jf(s,e)+Kf(s,i)}function jf(s,t){let e=1-s;return e*e*e*t}function Qf(s,t){let e=1-s;return 3*e*e*s*t}function tp(s,t){return 3*(1-s)*s*s*t}function ep(s,t){return s*s*s*t}function fr(s,t,e,i,n){return jf(s,t)+Qf(s,e)+tp(s,i)+ep(s,n)}var Ar=class extends fi{constructor(t=new at,e=new at,i=new at,n=new at){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new at){let i=e,n=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(fr(t,n.x,r.x,a.x,o.x),fr(t,n.y,r.y,a.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ka=class extends fi{constructor(t=new P,e=new P,i=new P,n=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new P){let i=e,n=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(fr(t,n.x,r.x,a.x,o.x),fr(t,n.y,r.y,a.y,o.y),fr(t,n.z,r.z,a.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Rr=class extends fi{constructor(t=new at,e=new at){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new at){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new at){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ja=class extends fi{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Cr=class extends fi{constructor(t=new at,e=new at,i=new at){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new at){let i=e,n=this.v0,r=this.v1,a=this.v2;return i.set(dr(t,n.x,r.x,a.x),dr(t,n.y,r.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Qa=class extends fi{constructor(t=new P,e=new P,i=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new P){let i=e,n=this.v0,r=this.v1,a=this.v2;return i.set(dr(t,n.x,r.x,a.x),dr(t,n.y,r.y,a.y),dr(t,n.z,r.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ir=class extends fi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new at){let i=e,n=this.points,r=(n.length-1)*t,a=Math.floor(r),o=r-a,c=n[a===0?a:a-1],l=n[a],u=n[a>n.length-2?n.length-1:a+1],f=n[a>n.length-3?n.length-1:a+2];return i.set(cu(o,c.x,l.x,u.x,f.x),cu(o,c.y,l.y,u.y,f.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(n.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let n=this.points[e];t.points.push(n.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(new at().fromArray(n))}return this}},xc=Object.freeze({__proto__:null,ArcCurve:Za,CatmullRomCurve3:Ja,CubicBezierCurve:Ar,CubicBezierCurve3:Ka,EllipseCurve:Fs,LineCurve:Rr,LineCurve3:ja,QuadraticBezierCurve:Cr,QuadraticBezierCurve3:Qa,SplineCurve:Ir}),to=class extends fi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new xc[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),n=this.getCurveLengths(),r=0;for(;r<n.length;){if(n[r]>=i){let a=n[r]-i,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,n=this.curves.length;i<n;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let n=0,r=this.curves;n<r.length;n++){let a=r[n],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let l=0;l<c.length;l++){let u=c[l];i&&i.equals(u)||(e.push(u),i=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let n=t.curves[e];this.curves.push(n.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let n=this.curves[e];t.curves.push(n.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let n=t.curves[e];this.curves.push(new xc[n.type]().fromJSON(n))}return this}},Pr=class extends to{constructor(t){super(),this.type="Path",this.currentPoint=new at,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new Rr(this.currentPoint.clone(),new at(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,n){let r=new Cr(this.currentPoint.clone(),new at(t,e),new at(i,n));return this.curves.push(r),this.currentPoint.set(i,n),this}bezierCurveTo(t,e,i,n,r,a){let o=new Ar(this.currentPoint.clone(),new at(t,e),new at(i,n),new at(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new Ir(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,n,r,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,i,n,r,a),this}absarc(t,e,i,n,r,a){return this.absellipse(t,e,i,i,n,r,a),this}ellipse(t,e,i,n,r,a,o,c){let l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+l,e+u,i,n,r,a,o,c),this}absellipse(t,e,i,n,r,a,o,c){let l=new Fs(t,e,i,n,r,a,o,c);if(this.curves.length>0){let f=l.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(l);let u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Bs=class extends Pr{constructor(t){super(t),this.uuid=ss(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let i=0,n=this.holes.length;i<n;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let n=t.holes[e];this.holes.push(n.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){let n=this.holes[e];t.holes.push(n.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let n=t.holes[e];this.holes.push(new Pr().fromJSON(n))}return this}};function ip(s,t,e=2){let i=t&&t.length,n=i?t[0]*e:s.length,r=sd(s,0,n,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,c,l;if(i&&(r=op(s,t,r,e)),s.length>80*e){o=s[0],c=s[1];let u=o,f=c;for(let h=e;h<n;h+=e){let d=s[h],g=s[h+1];d<o&&(o=d),g<c&&(c=g),d>u&&(u=d),g>f&&(f=g)}l=Math.max(u-o,f-c),l=l!==0?32767/l:0}return Lr(r,a,e,o,c,l,0),a}function sd(s,t,e,i,n){let r;if(n===xp(s,t,e,i)>0)for(let a=t;a<e;a+=i)r=hu(a/i|0,s[a],s[a+1],r);else for(let a=e-i;a>=t;a-=i)r=hu(a/i|0,s[a],s[a+1],r);return r&&Os(r,r.next)&&(Nr(r),r=r.next),r}function jn(s,t){if(!s)return s;t||(t=s);let e=s,i;do if(i=!1,!e.steiner&&(Os(e,e.next)||Ie(e.prev,e,e.next)===0)){if(Nr(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function Lr(s,t,e,i,n,r,a){if(!s)return;!a&&r&&dp(s,i,n,r);let o=s;for(;s.prev!==s.next;){let c=s.prev,l=s.next;if(r?sp(s,i,n,r):np(s)){t.push(c.i,s.i,l.i),Nr(s),s=l.next,o=l.next;continue}if(s=l,s===o){a?a===1?(s=rp(jn(s),t),Lr(s,t,e,i,n,r,2)):a===2&&ap(s,t,e,i,n,r):Lr(jn(s),t,e,i,n,r,1);break}}}function np(s){let t=s.prev,e=s,i=s.next;if(Ie(t,e,i)>=0)return!1;let n=t.x,r=e.x,a=i.x,o=t.y,c=e.y,l=i.y,u=Math.min(n,r,a),f=Math.min(o,c,l),h=Math.max(n,r,a),d=Math.max(o,c,l),g=i.next;for(;g!==t;){if(g.x>=u&&g.x<=h&&g.y>=f&&g.y<=d&&cr(n,o,r,c,a,l,g.x,g.y)&&Ie(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function sp(s,t,e,i){let n=s.prev,r=s,a=s.next;if(Ie(n,r,a)>=0)return!1;let o=n.x,c=r.x,l=a.x,u=n.y,f=r.y,h=a.y,d=Math.min(o,c,l),g=Math.min(u,f,h),v=Math.max(o,c,l),m=Math.max(u,f,h),p=_c(d,g,t,e,i),y=_c(v,m,t,e,i),M=s.prevZ,x=s.nextZ;for(;M&&M.z>=p&&x&&x.z<=y;){if(M.x>=d&&M.x<=v&&M.y>=g&&M.y<=m&&M!==n&&M!==a&&cr(o,u,c,f,l,h,M.x,M.y)&&Ie(M.prev,M,M.next)>=0||(M=M.prevZ,x.x>=d&&x.x<=v&&x.y>=g&&x.y<=m&&x!==n&&x!==a&&cr(o,u,c,f,l,h,x.x,x.y)&&Ie(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;M&&M.z>=p;){if(M.x>=d&&M.x<=v&&M.y>=g&&M.y<=m&&M!==n&&M!==a&&cr(o,u,c,f,l,h,M.x,M.y)&&Ie(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;x&&x.z<=y;){if(x.x>=d&&x.x<=v&&x.y>=g&&x.y<=m&&x!==n&&x!==a&&cr(o,u,c,f,l,h,x.x,x.y)&&Ie(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function rp(s,t){let e=s;do{let i=e.prev,n=e.next.next;!Os(i,n)&&ad(i,e,e.next,n)&&Dr(i,n)&&Dr(n,i)&&(t.push(i.i,e.i,n.i),Nr(e),Nr(e.next),e=s=n),e=e.next}while(e!==s);return jn(e)}function ap(s,t,e,i,n,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&mp(a,o)){let c=od(a,o);a=jn(a,a.next),c=jn(c,c.next),Lr(a,t,e,i,n,r,0),Lr(c,t,e,i,n,r,0);return}o=o.next}a=a.next}while(a!==s)}function op(s,t,e,i){let n=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*i,c=r<a-1?t[r+1]*i:s.length,l=sd(s,o,c,i,!1);l===l.next&&(l.steiner=!0),n.push(pp(l))}n.sort(lp);for(let r=0;r<n.length;r++)e=cp(n[r],e);return e}function lp(s,t){let e=s.x-t.x;if(e===0&&(e=s.y-t.y,e===0)){let i=(s.next.y-s.y)/(s.next.x-s.x),n=(t.next.y-t.y)/(t.next.x-t.x);e=i-n}return e}function cp(s,t){let e=hp(s,t);if(!e)return t;let i=od(e,s);return jn(i,i.next),jn(e,e.next)}function hp(s,t){let e=t,i=s.x,n=s.y,r=-1/0,a;if(Os(s,e))return e;do{if(Os(s,e.next))return e.next;if(n<=e.y&&n>=e.next.y&&e.next.y!==e.y){let f=e.x+(n-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=i&&f>r&&(r=f,a=e.x<e.next.x?e:e.next,f===i))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,c=a.x,l=a.y,u=1/0;e=a;do{if(i>=e.x&&e.x>=c&&i!==e.x&&rd(n<l?i:r,n,c,l,n<l?r:i,n,e.x,e.y)){let f=Math.abs(n-e.y)/(i-e.x);Dr(e,s)&&(f<u||f===u&&(e.x>a.x||e.x===a.x&&up(a,e)))&&(a=e,u=f)}e=e.next}while(e!==o);return a}function up(s,t){return Ie(s.prev,s,t.prev)<0&&Ie(t.next,s,s.next)<0}function dp(s,t,e,i){let n=s;do n.z===0&&(n.z=_c(n.x,n.y,t,e,i)),n.prevZ=n.prev,n.nextZ=n.next,n=n.next;while(n!==s);n.prevZ.nextZ=null,n.prevZ=null,fp(n)}function fp(s){let t,e=1;do{let i=s,n;s=null;let r=null;for(t=0;i;){t++;let a=i,o=0;for(let l=0;l<e&&(o++,a=a.nextZ,!!a);l++);let c=e;for(;o>0||c>0&&a;)o!==0&&(c===0||!a||i.z<=a.z)?(n=i,i=i.nextZ,o--):(n=a,a=a.nextZ,c--),r?r.nextZ=n:s=n,n.prevZ=r,r=n;i=a}r.nextZ=null,e*=2}while(t>1);return s}function _c(s,t,e,i,n){return s=(s-e)*n|0,t=(t-i)*n|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function pp(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function rd(s,t,e,i,n,r,a,o){return(n-a)*(t-o)>=(s-a)*(r-o)&&(s-a)*(i-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(n-a)*(i-o)}function cr(s,t,e,i,n,r,a,o){return!(s===a&&t===o)&&rd(s,t,e,i,n,r,a,o)}function mp(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!gp(s,t)&&(Dr(s,t)&&Dr(t,s)&&vp(s,t)&&(Ie(s.prev,s,t.prev)||Ie(s,t.prev,t))||Os(s,t)&&Ie(s.prev,s,s.next)>0&&Ie(t.prev,t,t.next)>0)}function Ie(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function Os(s,t){return s.x===t.x&&s.y===t.y}function ad(s,t,e,i){let n=Ca(Ie(s,t,e)),r=Ca(Ie(s,t,i)),a=Ca(Ie(e,i,s)),o=Ca(Ie(e,i,t));return!!(n!==r&&a!==o||n===0&&Ra(s,e,t)||r===0&&Ra(s,i,t)||a===0&&Ra(e,s,i)||o===0&&Ra(e,t,i))}function Ra(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function Ca(s){return s>0?1:s<0?-1:0}function gp(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&ad(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function Dr(s,t){return Ie(s.prev,s,s.next)<0?Ie(s,t,s.next)>=0&&Ie(s,s.prev,t)>=0:Ie(s,t,s.prev)<0||Ie(s,s.next,t)<0}function vp(s,t){let e=s,i=!1,n=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&n<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==s);return i}function od(s,t){let e=yc(s.i,s.x,s.y),i=yc(t.i,t.x,t.y),n=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=n,n.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function hu(s,t,e,i){let n=yc(s,t,e);return i?(n.next=i.next,n.prev=i,i.next.prev=n,i.next=n):(n.prev=n,n.next=n),n}function Nr(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function yc(s,t,e){return{i:s,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function xp(s,t,e,i){let n=0;for(let r=t,a=e-i;r<e;r+=i)n+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return n}var Mc=class{static triangulate(t,e,i=2){return ip(t,e,i)}},Yn=class s{static area(t){let e=t.length,i=0;for(let n=e-1,r=0;r<e;n=r++)i+=t[n].x*t[r].y-t[r].x*t[n].y;return i*.5}static isClockWise(t){return s.area(t)<0}static triangulateShape(t,e){let i=[],n=[],r=[];uu(t),du(i,t);let a=t.length;e.forEach(uu);for(let c=0;c<e.length;c++)n.push(a),a+=e[c].length,du(i,e[c]);let o=Mc.triangulate(i,n);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}};function uu(s){let t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function du(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}var Ur=class s extends xe{constructor(t=new Bs([new at(.5,.5),new at(-.5,.5),new at(-.5,-.5),new at(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let i=this,n=[],r=[];for(let o=0,c=t.length;o<c;o++){let l=t[o];a(l)}this.setAttribute("position",new Qt(n,3)),this.setAttribute("uv",new Qt(r,2)),this.computeVertexNormals();function a(o){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1,h=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:_p,M,x=!1,S,w,A,_;if(p){M=p.getSpacedPoints(u),x=!0,h=!1;let it=p.isCatmullRomCurve3?p.closed:!1;S=p.computeFrenetFrames(u,it),w=new P,A=new P,_=new P}h||(m=0,d=0,g=0,v=0);let T=o.extractPoints(l),R=T.shape,I=T.holes;if(!Yn.isClockWise(R)){R=R.reverse();for(let it=0,rt=I.length;it<rt;it++){let ot=I[it];Yn.isClockWise(ot)&&(I[it]=ot.reverse())}}function k(it){let ot=10000000000000001e-36,lt=it[0];for(let ut=1;ut<=it.length;ut++){let Ot=ut%it.length,Nt=it[Ot],Ut=Nt.x-lt.x,Ht=Nt.y-lt.y,L=Ut*Ut+Ht*Ht,ie=Math.max(Math.abs(Nt.x),Math.abs(Nt.y),Math.abs(lt.x),Math.abs(lt.y)),Kt=ot*ie*ie;if(L<=Kt){it.splice(Ot,1),ut--;continue}lt=Nt}}k(R),I.forEach(k);let N=I.length,O=R;for(let it=0;it<N;it++){let rt=I[it];R=R.concat(rt)}function z(it,rt,ot){return rt||Xt("ExtrudeGeometry: vec does not exist"),it.clone().addScaledVector(rt,ot)}let Y=R.length;function tt(it,rt,ot){let lt,ut,Ot,Nt=it.x-rt.x,Ut=it.y-rt.y,Ht=ot.x-it.x,L=ot.y-it.y,ie=Nt*Nt+Ut*Ut,Kt=Nt*L-Ut*Ht;if(Math.abs(Kt)>Number.EPSILON){let C=Math.sqrt(ie),b=Math.sqrt(Ht*Ht+L*L),B=rt.x-Ut/C,G=rt.y+Nt/C,$=ot.x-L/b,ct=ot.y+Ht/b,ft=(($-B)*L-(ct-G)*Ht)/(Nt*L-Ut*Ht);lt=B+Nt*ft-it.x,ut=G+Ut*ft-it.y;let J=lt*lt+ut*ut;if(J<=2)return new at(lt,ut);Ot=Math.sqrt(J/2)}else{let C=!1;Nt>Number.EPSILON?Ht>Number.EPSILON&&(C=!0):Nt<-Number.EPSILON?Ht<-Number.EPSILON&&(C=!0):Math.sign(Ut)===Math.sign(L)&&(C=!0),C?(lt=-Ut,ut=Nt,Ot=Math.sqrt(ie)):(lt=Nt,ut=Ut,Ot=Math.sqrt(ie/2))}return new at(lt/Ot,ut/Ot)}let X=[];for(let it=0,rt=O.length,ot=rt-1,lt=it+1;it<rt;it++,ot++,lt++)ot===rt&&(ot=0),lt===rt&&(lt=0),X[it]=tt(O[it],O[ot],O[lt]);let j=[],et,Ct=X.concat();for(let it=0,rt=N;it<rt;it++){let ot=I[it];et=[];for(let lt=0,ut=ot.length,Ot=ut-1,Nt=lt+1;lt<ut;lt++,Ot++,Nt++)Ot===ut&&(Ot=0),Nt===ut&&(Nt=0),et[lt]=tt(ot[lt],ot[Ot],ot[Nt]);j.push(et),Ct=Ct.concat(et)}let wt;if(m===0)wt=Yn.triangulateShape(O,I);else{let it=[],rt=[];for(let ot=0;ot<m;ot++){let lt=ot/m,ut=d*Math.cos(lt*Math.PI/2),Ot=g*Math.sin(lt*Math.PI/2)+v;for(let Nt=0,Ut=O.length;Nt<Ut;Nt++){let Ht=z(O[Nt],X[Nt],Ot);mt(Ht.x,Ht.y,-ut),lt===0&&it.push(Ht)}for(let Nt=0,Ut=N;Nt<Ut;Nt++){let Ht=I[Nt];et=j[Nt];let L=[];for(let ie=0,Kt=Ht.length;ie<Kt;ie++){let C=z(Ht[ie],et[ie],Ot);mt(C.x,C.y,-ut),lt===0&&L.push(C)}lt===0&&rt.push(L)}}wt=Yn.triangulateShape(it,rt)}let re=wt.length,qt=g+v;for(let it=0;it<Y;it++){let rt=h?z(R[it],Ct[it],qt):R[it];x?(A.copy(S.normals[0]).multiplyScalar(rt.x),w.copy(S.binormals[0]).multiplyScalar(rt.y),_.copy(M[0]).add(A).add(w),mt(_.x,_.y,_.z)):mt(rt.x,rt.y,0)}for(let it=1;it<=u;it++)for(let rt=0;rt<Y;rt++){let ot=h?z(R[rt],Ct[rt],qt):R[rt];x?(A.copy(S.normals[it]).multiplyScalar(ot.x),w.copy(S.binormals[it]).multiplyScalar(ot.y),_.copy(M[it]).add(A).add(w),mt(_.x,_.y,_.z)):mt(ot.x,ot.y,f/u*it)}for(let it=m-1;it>=0;it--){let rt=it/m,ot=d*Math.cos(rt*Math.PI/2),lt=g*Math.sin(rt*Math.PI/2)+v;for(let ut=0,Ot=O.length;ut<Ot;ut++){let Nt=z(O[ut],X[ut],lt);mt(Nt.x,Nt.y,f+ot)}for(let ut=0,Ot=I.length;ut<Ot;ut++){let Nt=I[ut];et=j[ut];for(let Ut=0,Ht=Nt.length;Ut<Ht;Ut++){let L=z(Nt[Ut],et[Ut],lt);x?mt(L.x,L.y+M[u-1].y,M[u-1].x+ot):mt(L.x,L.y,f+ot)}}}te(),Z();function te(){let it=n.length/3;if(h){let rt=0,ot=Y*rt;for(let lt=0;lt<re;lt++){let ut=wt[lt];Vt(ut[2]+ot,ut[1]+ot,ut[0]+ot)}rt=u+m*2,ot=Y*rt;for(let lt=0;lt<re;lt++){let ut=wt[lt];Vt(ut[0]+ot,ut[1]+ot,ut[2]+ot)}}else{for(let rt=0;rt<re;rt++){let ot=wt[rt];Vt(ot[2],ot[1],ot[0])}for(let rt=0;rt<re;rt++){let ot=wt[rt];Vt(ot[0]+Y*u,ot[1]+Y*u,ot[2]+Y*u)}}i.addGroup(it,n.length/3-it,0)}function Z(){let it=n.length/3,rt=0;K(O,rt),rt+=O.length;for(let ot=0,lt=I.length;ot<lt;ot++){let ut=I[ot];K(ut,rt),rt+=ut.length}i.addGroup(it,n.length/3-it,1)}function K(it,rt){let ot=it.length;for(;--ot>=0;){let lt=ot,ut=ot-1;ut<0&&(ut=it.length-1);for(let Ot=0,Nt=u+m*2;Ot<Nt;Ot++){let Ut=Y*Ot,Ht=Y*(Ot+1),L=rt+lt+Ut,ie=rt+ut+Ut,Kt=rt+ut+Ht,C=rt+lt+Ht;pt(L,ie,Kt,C)}}}function mt(it,rt,ot){c.push(it),c.push(rt),c.push(ot)}function Vt(it,rt,ot){zt(it),zt(rt),zt(ot);let lt=n.length/3,ut=y.generateTopUV(i,n,lt-3,lt-2,lt-1);ce(ut[0]),ce(ut[1]),ce(ut[2])}function pt(it,rt,ot,lt){zt(it),zt(rt),zt(lt),zt(rt),zt(ot),zt(lt);let ut=n.length/3,Ot=y.generateSideWallUV(i,n,ut-6,ut-3,ut-2,ut-1);ce(Ot[0]),ce(Ot[1]),ce(Ot[3]),ce(Ot[1]),ce(Ot[2]),ce(Ot[3])}function zt(it){n.push(c[it*3+0]),n.push(c[it*3+1]),n.push(c[it*3+2])}function ce(it){r.push(it.x),r.push(it.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return yp(e,i,t)}static fromJSON(t,e){let i=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];i.push(o)}let n=t.options.extrudePath;return n!==void 0&&(t.options.extrudePath=new xc[n.type]().fromJSON(n)),new s(i,t.options)}},_p={generateTopUV:function(s,t,e,i,n){let r=t[e*3],a=t[e*3+1],o=t[i*3],c=t[i*3+1],l=t[n*3],u=t[n*3+1];return[new at(r,a),new at(o,c),new at(l,u)]},generateSideWallUV:function(s,t,e,i,n,r){let a=t[e*3],o=t[e*3+1],c=t[e*3+2],l=t[i*3],u=t[i*3+1],f=t[i*3+2],h=t[n*3],d=t[n*3+1],g=t[n*3+2],v=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(o-u)<Math.abs(a-l)?[new at(a,1-c),new at(l,1-f),new at(h,1-g),new at(v,1-p)]:[new at(o,1-c),new at(u,1-f),new at(d,1-g),new at(m,1-p)]}};function yp(s,t,e){if(e.shapes=[],Array.isArray(s))for(let i=0,n=s.length;i<n;i++){let r=s[i];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Qn=class s extends $a{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,n=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(n,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}},ks=class s extends xe{constructor(t=[new at(0,-.5),new at(.5,0),new at(0,.5)],e=12,i=0,n=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:n},e=Math.floor(e),n=ee(n,0,Math.PI*2);let r=[],a=[],o=[],c=[],l=[],u=1/e,f=new P,h=new at,d=new P,g=new P,v=new P,m=0,p=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:m=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,d.x=p*1,d.y=-m,d.z=p*0,v.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case t.length-1:c.push(v.x,v.y,v.z);break;default:m=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=v.x,d.y+=v.y,d.z+=v.z,d.normalize(),c.push(d.x,d.y,d.z),v.copy(g)}for(let y=0;y<=e;y++){let M=i+y*u*n,x=Math.sin(M),S=Math.cos(M);for(let w=0;w<=t.length-1;w++){f.x=t[w].x*x,f.y=t[w].y,f.z=t[w].x*S,a.push(f.x,f.y,f.z),h.x=y/e,h.y=w/(t.length-1),o.push(h.x,h.y);let A=c[3*w+0]*x,_=c[3*w+1],T=c[3*w+0]*S;l.push(A,_,T)}}for(let y=0;y<e;y++)for(let M=0;M<t.length-1;M++){let x=M+y*t.length,S=x,w=x+t.length,A=x+t.length+1,_=x+1;r.push(S,w,_),r.push(A,_,w)}this.setIndex(r),this.setAttribute("position",new Qt(a,3)),this.setAttribute("uv",new Qt(o,2)),this.setAttribute("normal",new Qt(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.points,t.segments,t.phiStart,t.phiLength)}};var Le=class s extends xe{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};let r=t/2,a=e/2,o=Math.floor(i),c=Math.floor(n),l=o+1,u=c+1,f=t/o,h=e/c,d=[],g=[],v=[],m=[];for(let p=0;p<u;p++){let y=p*h-a;for(let M=0;M<l;M++){let x=M*f-r;g.push(x,-y,0),v.push(0,0,1),m.push(M/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let y=0;y<o;y++){let M=y+l*p,x=y+l*(p+1),S=y+1+l*(p+1),w=y+1+l*p;d.push(M,x,w),d.push(x,S,w)}this.setIndex(d),this.setAttribute("position",new Qt(g,3)),this.setAttribute("normal",new Qt(v,3)),this.setAttribute("uv",new Qt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},Di=class s extends xe{constructor(t=.5,e=1,i=32,n=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:n,thetaStart:r,thetaLength:a},i=Math.max(3,i),n=Math.max(1,n);let o=[],c=[],l=[],u=[],f=t,h=(e-t)/n,d=new P,g=new at;for(let v=0;v<=n;v++){for(let m=0;m<=i;m++){let p=r+m/i*a;d.x=f*Math.cos(p),d.y=f*Math.sin(p),c.push(d.x,d.y,d.z),l.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,u.push(g.x,g.y)}f+=h}for(let v=0;v<n;v++){let m=v*(i+1);for(let p=0;p<i;p++){let y=p+m,M=y,x=y+i+1,S=y+i+2,w=y+1;o.push(M,x,w),o.push(x,S,w)}}this.setIndex(o),this.setAttribute("position",new Qt(c,3)),this.setAttribute("normal",new Qt(l,3)),this.setAttribute("uv",new Qt(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var yi=class s extends xe{constructor(t=1,e=32,i=16,n=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:n,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let c=Math.min(a+o,Math.PI),l=0,u=[],f=new P,h=new P,d=[],g=[],v=[],m=[];for(let p=0;p<=i;p++){let y=[],M=p/i,x=a+M*o,S=t*Math.cos(x),w=Math.sqrt(t*t-S*S),A=0;p===0&&a===0?A=.5/e:p===i&&c===Math.PI&&(A=-.5/e);for(let _=0;_<=e;_++){let T=_/e,R=n+T*r;f.x=-w*Math.cos(R),f.y=S,f.z=w*Math.sin(R),g.push(f.x,f.y,f.z),h.copy(f).normalize(),v.push(h.x,h.y,h.z),m.push(T+A,1-M),y.push(l++)}u.push(y)}for(let p=0;p<i;p++)for(let y=0;y<e;y++){let M=u[p][y+1],x=u[p][y],S=u[p+1][y],w=u[p+1][y+1];(p!==0||a>0)&&d.push(M,x,w),(p!==i-1||c<Math.PI)&&d.push(x,S,w)}this.setIndex(d),this.setAttribute("position",new Qt(g,3)),this.setAttribute("normal",new Qt(v,3)),this.setAttribute("uv",new Qt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function rs(s){let t={};for(let e in s){t[e]={};for(let i in s[e]){let n=s[e][i];if(fu(n))n.isRenderTargetTexture?(Wt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone();else if(Array.isArray(n))if(fu(n[0])){let r=[];for(let a=0,o=n.length;a<o;a++)r[a]=n[a].clone();t[e][i]=r}else t[e][i]=n.slice();else t[e][i]=n}}return t}function si(s){let t={};for(let e=0;e<s.length;e++){let i=rs(s[e]);for(let n in i)t[n]=i[n]}return t}function fu(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function Mp(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function jc(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:le.workingColorSpace}var ld={clone:rs,merge:si},bp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Sp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,se=class extends dn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=bp,this.fragmentShader=Sp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=rs(t.uniforms),this.uniformsGroups=Mp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let n in this.uniforms){let a=this.uniforms[n].value;a&&a.isTexture?e.uniforms[n]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[n]={type:"m4",value:a.toArray()}:e.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let n=t.uniforms[i];switch(this.uniforms[i]={},n.type){case"t":this.uniforms[i].value=e[n.value]||null;break;case"c":this.uniforms[i].value=new ht().setHex(n.value);break;case"v2":this.uniforms[i].value=new at().fromArray(n.value);break;case"v3":this.uniforms[i].value=new P().fromArray(n.value);break;case"v4":this.uniforms[i].value=new ge().fromArray(n.value);break;case"m3":this.uniforms[i].value=new Yt().fromArray(n.value);break;case"m4":this.uniforms[i].value=new ne().fromArray(n.value);break;default:this.uniforms[i].value=n.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},eo=class extends se{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},oe=class extends dn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ht(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=sl,this.normalScale=new at(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ci,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var io=class extends dn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Gu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},no=class extends dn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Ts(s,t){return!s||s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function uc(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}var En=class{constructor(t,e,i,n){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,n=e[i],r=e[i-1];i:{t:{let a;e:{n:if(!(t<n)){for(let o=i+2;;){if(n===void 0){if(t<r)break n;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=n,n=e[++i],t<n)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(i=2,r=o);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(n=r,r=e[--i-1],t>=r)break t}a=i,i=0;break e}break i}for(;i<a;){let o=i+a>>>1;t<e[o]?a=o:i=o+1}if(n=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,n)}return this.interpolate_(i,r,t,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,n=this.valueSize,r=t*n;for(let a=0;a!==n;++a)e[a]=i[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},so=class extends En{constructor(t,e,i,n){super(t,e,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:pc,endingEnd:pc}}intervalChanged_(t,e,i){let n=this.parameterPositions,r=t-2,a=t+1,o=n[r],c=n[a];if(o===void 0)switch(this.getSettings_().endingStart){case mc:r=t,o=2*e-i;break;case gc:r=n.length-2,o=e+n[r]-n[r+1];break;default:r=t,o=i}if(c===void 0)switch(this.getSettings_().endingEnd){case mc:a=t,c=2*i-e;break;case gc:a=1,c=i+n[1]-n[0];break;default:a=t-1,c=e}let l=(i-e)*.5,u=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-i),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(t,e,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,u=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,d=this._weightNext,g=(i-e)/(n-e),v=g*g,m=v*g,p=-h*m+2*h*v-h*g,y=(1+h)*m+(-1.5-2*h)*v+(-.5+h)*g+1,M=(-1-d)*m+(1.5+d)*v+.5*g,x=d*m-d*v;for(let S=0;S!==o;++S)r[S]=p*a[u+S]+y*a[l+S]+M*a[c+S]+x*a[f+S];return r}},ro=class extends En{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,u=(i-e)/(n-e),f=1-u;for(let h=0;h!==o;++h)r[h]=a[l+h]*f+a[c+h]*u;return r}},ao=class extends En{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t){return this.copySampleValue_(t-1)}},oo=class extends En{interpolate_(t,e,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,u=this.inTangents,f=this.outTangents;if(!u||!f){let g=(i-e)/(n-e),v=1-g;for(let m=0;m!==o;++m)r[m]=a[l+m]*v+a[c+m]*g;return r}let h=o*2,d=t-1;for(let g=0;g!==o;++g){let v=a[l+g],m=a[c+g],p=d*h+g*2,y=f[p],M=f[p+1],x=t*h+g*2,S=u[x],w=u[x+1],A=Tp(i,e,y,S,n);r[g]=cd(A,v,M,w,m)}return r}};function cd(s,t,e,i,n){let r=1-s;return r*r*r*t+3*r*r*s*e+3*r*s*s*i+s*s*s*n}function wp(s,t,e,i,n){let r=1-s;return 3*r*r*(e-t)+6*r*s*(i-e)+3*s*s*(n-i)}function Tp(s,t,e,i,n){let r=(s-t)/(n-t);for(let a=0;a<8;a++){let o=cd(r,t,e,i,n)-s;if(Math.abs(o)<1e-10)break;let c=wp(r,t,e,i,n);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}var pi=class{constructor(t,e,i,n){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ts(e,this.TimeBufferType),this.values=Ts(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Ts(t.times,Array),values:Ts(t.values,Array)};let n=t.getInterpolation();n!==t.DefaultInterpolation&&(i.interpolation=n),uc(t.settings)&&(i.settings={inTangents:Ts(t.settings.inTangents,Array),outTangents:Ts(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new ao(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ro(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new so(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new oo(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case pr:e=this.InterpolantFactoryMethodDiscrete;break;case Va:e=this.InterpolantFactoryMethodLinear;break;case La:e=this.InterpolantFactoryMethodSmooth;break;case fc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Wt("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return pr;case this.InterpolantFactoryMethodLinear:return Va;case this.InterpolantFactoryMethodSmooth:return La;case this.InterpolantFactoryMethodBezier:return fc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]*=t;uc(this.settings)&&(pu(this.settings.inTangents,t),pu(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,n=i.length,r=0,a=n-1;for(;r!==n&&i[r]<t;)++r;for(;a!==-1&&i[a]>e;)--a;if(++a,r!==0||a!==n){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Xt("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,n=this.values,r=i.length;r===0&&(Xt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let c=i[o];if(typeof c=="number"&&isNaN(c)){Xt("KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){Xt("KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(n!==void 0&&ff(n))for(let o=0,c=n.length;o!==c;++o){let l=n[o];if(isNaN(l)){Xt("KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===La,r=t.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=t[o],u=t[o+1];if(l!==u&&(o!==1||l!==t[0]))if(n)c=!0;else{let f=o*i,h=f-i,d=f+i;for(let g=0;g!==i;++g){let v=e[f+g];if(v!==e[h+g]||v!==e[d+g]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];let f=o*i,h=a*i;for(let d=0;d!==i;++d)e[h+d]=e[f+d]}++a}}if(r>0){t[a]=t[r];for(let o=r*i,c=a*i,l=0;l!==i;++l)e[c+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,n=new i(this.name,t,e);return n.createInterpolant=this.createInterpolant,uc(this.settings)&&(n.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),n}};function pu(s,t){for(let e=0,i=s.length;e!==i;e+=2)s[e]*=t}pi.prototype.ValueTypeName="";pi.prototype.TimeBufferType=Float32Array;pi.prototype.ValueBufferType=Float32Array;pi.prototype.DefaultInterpolation=Va;var An=class extends pi{constructor(t,e,i){super(t,e,i)}};An.prototype.ValueTypeName="bool";An.prototype.ValueBufferType=Array;An.prototype.DefaultInterpolation=pr;An.prototype.InterpolantFactoryMethodLinear=void 0;An.prototype.InterpolantFactoryMethodSmooth=void 0;var lo=class extends pi{constructor(t,e,i,n){super(t,e,i,n)}};lo.prototype.ValueTypeName="color";var co=class extends pi{constructor(t,e,i,n){super(t,e,i,n)}};co.prototype.ValueTypeName="number";var ho=class extends En{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(i-e)/(n-e),l=t*o;for(let u=l+o;l!==u;l+=4)Ke.slerpFlat(r,0,a,l-o,a,l,c);return r}},Fr=class extends pi{constructor(t,e,i,n){super(t,e,i,n)}InterpolantFactoryMethodLinear(t){return new ho(this.times,this.values,this.getValueSize(),t)}};Fr.prototype.ValueTypeName="quaternion";Fr.prototype.InterpolantFactoryMethodSmooth=void 0;var Rn=class extends pi{constructor(t,e,i){super(t,e,i)}};Rn.prototype.ValueTypeName="string";Rn.prototype.ValueBufferType=Array;Rn.prototype.DefaultInterpolation=pr;Rn.prototype.InterpolantFactoryMethodLinear=void 0;Rn.prototype.InterpolantFactoryMethodSmooth=void 0;var uo=class extends pi{constructor(t,e,i,n){super(t,e,i,n)}};uo.prototype.ValueTypeName="vector";var fo=class{constructor(t,e,i){let n=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(u){o++,r===!1&&n.onStart!==void 0&&n.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,n.onProgress!==void 0&&n.onProgress(u,a,o),a===o&&(r=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(u){n.onError!==void 0&&n.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,f){return l.push(u,f),this},this.removeHandler=function(u){let f=l.indexOf(u);return f!==-1&&l.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=l.length;f<h;f+=2){let d=l[f],g=l[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},hd=new fo,po=class{constructor(t){this.manager=t!==void 0?t:hd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(n,r){i.load(t,n,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};po.DEFAULT_MATERIAL_NAME="__DEFAULT";var ts=class extends Ve{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ht(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Br=class extends ts{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ve.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ht(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},dc=new ne,mu=new P,gu=new P,zs=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new at(512,512),this.mapType=ni,this.map=null,this.mapPass=null,this.matrix=new ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Us,this._frameExtents=new at(1,1),this._viewportCount=1,this._viewports=[new ge(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;mu.setFromMatrixPosition(t.matrixWorld),e.position.copy(mu),gu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(gu),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,n){dc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(dc,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=n?n.z/r.x:1,o=n?n.w/r.y:1,c=n?n.x/r.x:0,l=n?n.y/r.y:0;t.coordinateSystem===Ps||t.reversedDepth?e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),e.multiply(dc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Ia=new P,Pa=new Ke,Hi=new P,Or=class extends Ve{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ne,this.projectionMatrix=new ne,this.projectionMatrixInverse=new ne,this.coordinateSystem=Pi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Ia,Pa,Hi),Hi.x===1&&Hi.y===1&&Hi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ia,Pa,Hi.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(Ia,Pa,Hi),Hi.x===1&&Hi.y===1&&Hi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ia,Pa,Hi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Sn=new P,vu=new at,xu=new at,qe=class extends Or{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Jn*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(hr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Jn*2*Math.atan(Math.tan(hr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Sn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Sn.x,Sn.y).multiplyScalar(-t/Sn.z),Sn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Sn.x,Sn.y).multiplyScalar(-t/Sn.z)}getViewSize(t,e){return this.getViewBounds(t,vu,xu),e.subVectors(xu,vu)}setViewOffset(t,e,i,n,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(hr*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,r=-.5*n,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*n/c,e-=a.offsetY*i/l,n*=a.width/c,i*=a.height/l}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},bc=class extends zs{constructor(){super(new qe(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){let e=this.camera,i=Jn*2*t.angle*this.focus,n=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(i!==e.fov||n!==e.aspect||r!==e.far)&&(e.fov=i,e.aspect=n,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this.aspect=t.aspect,this}toJSON(){let t=super.toJSON();return t.focus=this.focus,t.aspect=this.aspect,t}},kr=class extends ts{constructor(t,e,i=0,n=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ve.DEFAULT_UP),this.updateMatrix(),this.target=new Ve,this.distance=i,this.angle=n,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new bc}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}},Sc=class extends zs{constructor(){super(new qe(90,1,.5,500)),this.isPointLightShadow=!0}},Hs=class extends ts{constructor(t,e,i=0,n=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new Sc}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Cn=class extends Or{constructor(t=-1,e=1,i=1,n=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,r=i-t,a=i+t,o=n+e,c=n-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},wc=class extends zs{constructor(){super(new Cn(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},zr=class extends ts{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ve.DEFAULT_UP),this.updateMatrix(),this.target=new Ve,this.shadow=new wc}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Yi=class extends xe{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var Es=-90,As=1,mo=class extends Ve{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new qe(Es,As,t,e);n.layers=this.layers,this.add(n);let r=new qe(Es,As,t,e);r.layers=this.layers,this.add(r);let a=new qe(Es,As,t,e);a.layers=this.layers,this.add(a);let o=new qe(Es,As,t,e);o.layers=this.layers,this.add(o);let c=new qe(Es,As,t,e);c.layers=this.layers,this.add(c);let l=new qe(Es,As,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,n,r,a,o,c]=e;for(let l of e)this.remove(l);if(t===Pi)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Ps)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,u]=this.children,f=t.getRenderTarget(),h=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(i,0,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,2,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,3,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(i,4,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),i.texture.generateMipmaps=v,t.setRenderTarget(i,5,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(f,h,d),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},go=class extends qe{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Qc="\\[\\]\\.:\\/",Ep=new RegExp("["+Qc+"]","g"),th="[^"+Qc+"]",Ap="[^"+Qc.replace("\\.","")+"]",Rp=/((?:WC+[\/:])*)/.source.replace("WC",th),Cp=/(WCOD+)?/.source.replace("WCOD",Ap),Ip=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",th),Pp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",th),Lp=new RegExp("^"+Rp+Cp+Ip+Pp+"$"),Dp=["material","materials","bones","map"],Tc=class{constructor(t,e,i){let n=i||Ae.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,n)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,r=i.length;n!==r;++n)i[n].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Ae=class s{constructor(t,e,i){this.path=e,this.parsedPath=i||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,i):new s(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Ep,"")}static parseTrackName(t){let e=Lp.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let r=i.nodeName.substring(n+1);Dp.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let c=i(o.children);if(c)return c}return null},n=i(t.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)t[e++]=i[n]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,n=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Wt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=e.objectIndex;switch(i){case"materials":if(!t.material){Xt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Xt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Xt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===l){l=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Xt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Xt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Xt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(l!==void 0){if(t[l]===void 0){Xt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let a=t[n];if(a===void 0){let l=e.nodeName;Xt("PropertyBinding: Trying to update property for track: "+l+"."+n+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(n==="morphTargetInfluences"){if(!t.geometry){Xt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Xt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=n;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ae.Composite=Tc;Ae.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ae.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ae.prototype.GetterByBindingType=[Ae.prototype._getValue_direct,Ae.prototype._getValue_array,Ae.prototype._getValue_arrayElement,Ae.prototype._getValue_toArray];Ae.prototype.SetterByBindingTypeAndVersioning=[[Ae.prototype._setValue_direct,Ae.prototype._setValue_direct_setNeedsUpdate,Ae.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ae.prototype._setValue_array,Ae.prototype._setValue_array_setNeedsUpdate,Ae.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ae.prototype._setValue_arrayElement,Ae.prototype._setValue_arrayElement_setNeedsUpdate,Ae.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ae.prototype._setValue_fromArray,Ae.prototype._setValue_fromArray_setNeedsUpdate,Ae.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Jx=new Float32Array(1);var ah=class ah{constructor(t,e,i,n){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,n)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,n){let r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=n,this}};ah.prototype.isMatrix2=!0;var Ec=ah;function eh(s,t,e,i){let n=Np(i);switch(e){case Xc:return s*t;case wo:return s*t/n.components*n.byteLength;case To:return s*t/n.components*n.byteLength;case Nn:return s*t*2/n.components*n.byteLength;case Eo:return s*t*2/n.components*n.byteLength;case qc:return s*t*3/n.components*n.byteLength;case bi:return s*t*4/n.components*n.byteLength;case Ao:return s*t*4/n.components*n.byteLength;case Gr:case Wr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Xr:case qr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Co:case Po:return Math.max(s,16)*Math.max(t,8)/4;case Ro:case Io:return Math.max(s,8)*Math.max(t,8)/2;case Lo:case Do:case Uo:case Fo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case No:case Yr:case Bo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Oo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ko:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case zo:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Ho:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Vo:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Go:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Wo:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Xo:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case qo:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Yo:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case $o:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Zo:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Jo:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Ko:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case jo:case Qo:case tl:return Math.ceil(s/4)*Math.ceil(t/4)*16;case el:case il:return Math.ceil(s/4)*Math.ceil(t/4)*8;case $r:case nl:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Np(s){switch(s){case ni:case Hc:return{byteLength:1,components:1};case Gs:case Vc:case gi:return{byteLength:2,components:1};case bo:case So:return{byteLength:2,components:4};case Ni:case Mo:case Mi:return{byteLength:4,components:1};case Gc:case Wc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Wt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Ld(){let s=null,t=!1,e=null,i=null;function n(r,a){i=s.requestAnimationFrame(n),e(r,a)}return{start:function(){t!==!0&&e!==null&&s!==null&&(i=s.requestAnimationFrame(n),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Hp(s){let t=new WeakMap;function e(o,c){let l=o.array,u=o.usage,f=l.byteLength,h=s.createBuffer();s.bindBuffer(c,h),s.bufferData(c,l,u),o.onUploadCallback();let d;if(l instanceof Float32Array)d=s.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=s.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=s.SHORT;else if(l instanceof Uint32Array)d=s.UNSIGNED_INT;else if(l instanceof Int32Array)d=s.INT;else if(l instanceof Int8Array)d=s.BYTE;else if(l instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,c,l){let u=c.array,f=c.updateRanges;if(s.bindBuffer(l,o),f.length===0)s.bufferSubData(l,0,u);else{f.sort((d,g)=>d.start-g.start);let h=0;for(let d=1;d<f.length;d++){let g=f[h],v=f[d];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++h,f[h]=v)}f.length=h+1;for(let d=0,g=f.length;d<g;d++){let v=f[d];s.bufferSubData(l,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=t.get(o);c&&(s.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:n,remove:r,update:a}}var Vp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Gp=`#ifdef USE_ALPHAHASH
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
#endif`,Wp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Xp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Yp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$p=`#ifdef USE_AOMAP
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
#endif`,Zp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Jp=`#ifdef USE_BATCHING
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
#endif`,Kp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,jp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Qp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,tm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,em=`#ifdef USE_IRIDESCENCE
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
#endif`,im=`#ifdef USE_BUMPMAP
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
#endif`,nm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,sm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,rm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,am=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,om=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,lm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,cm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,hm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,um=`#define PI 3.141592653589793
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
} // validated`,dm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,fm=`vec3 transformedNormal = objectNormal;
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
#endif`,pm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xm="gl_FragColor = linearToOutputTexel( gl_FragColor );",_m=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ym=`#ifdef USE_ENVMAP
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
#endif`,Mm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,bm=`#ifdef USE_ENVMAP
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
#endif`,Sm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wm=`#ifdef USE_ENVMAP
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
#endif`,Tm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Em=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Am=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Rm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Cm=`#ifdef USE_GRADIENTMAP
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
}`,Im=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Pm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Lm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Dm=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Nm=`#ifdef USE_ENVMAP
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
#endif`,Um=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Fm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Bm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Om=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,km=`PhysicalMaterial material;
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
#endif`,zm=`uniform sampler2D dfgLUT;
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
}`,Hm=`
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
#endif`,Vm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Gm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Wm=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Xm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ym=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$m=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Zm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Jm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Km=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,jm=`#if defined( USE_POINTS_UV )
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
#endif`,Qm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,t0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,e0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,i0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,n0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,s0=`#ifdef USE_MORPHTARGETS
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
#endif`,r0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,a0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,o0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,l0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,c0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,h0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,u0=`#ifdef USE_NORMALMAP
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
#endif`,d0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,f0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,p0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,m0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,g0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,v0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,x0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,y0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,M0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,b0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,S0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,w0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,T0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,E0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,A0=`float getShadowMask() {
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
}`,R0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,C0=`#ifdef USE_SKINNING
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
#endif`,I0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,P0=`#ifdef USE_SKINNING
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
#endif`,L0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,D0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,N0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,U0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,F0=`#ifdef USE_TRANSMISSION
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
#endif`,B0=`#ifdef USE_TRANSMISSION
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
#endif`,O0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,k0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,z0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,H0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,V0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,G0=`uniform sampler2D t2D;
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
}`,W0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,X0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,q0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Y0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$0=`#include <common>
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
}`,Z0=`#if DEPTH_PACKING == 3200
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
}`,J0=`#define DISTANCE
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
}`,K0=`#define DISTANCE
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
}`,j0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Q0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tg=`uniform float scale;
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
}`,eg=`uniform vec3 diffuse;
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
}`,ig=`#include <common>
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
}`,ng=`uniform vec3 diffuse;
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
}`,sg=`#define LAMBERT
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
}`,rg=`#define LAMBERT
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
}`,ag=`#define MATCAP
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
}`,og=`#define MATCAP
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
}`,lg=`#define NORMAL
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
}`,cg=`#define NORMAL
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
}`,hg=`#define PHONG
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
}`,ug=`#define PHONG
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
}`,dg=`#define STANDARD
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
}`,fg=`#define STANDARD
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
}`,pg=`#define TOON
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
}`,mg=`#define TOON
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
}`,gg=`uniform float size;
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
}`,vg=`uniform vec3 diffuse;
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
}`,xg=`#include <common>
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
}`,_g=`uniform vec3 color;
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
}`,yg=`uniform float rotation;
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
}`,Mg=`uniform vec3 diffuse;
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
}`,$t={alphahash_fragment:Vp,alphahash_pars_fragment:Gp,alphamap_fragment:Wp,alphamap_pars_fragment:Xp,alphatest_fragment:qp,alphatest_pars_fragment:Yp,aomap_fragment:$p,aomap_pars_fragment:Zp,batching_pars_vertex:Jp,batching_vertex:Kp,begin_vertex:jp,beginnormal_vertex:Qp,bsdfs:tm,iridescence_fragment:em,bumpmap_pars_fragment:im,clipping_planes_fragment:nm,clipping_planes_pars_fragment:sm,clipping_planes_pars_vertex:rm,clipping_planes_vertex:am,color_fragment:om,color_pars_fragment:lm,color_pars_vertex:cm,color_vertex:hm,common:um,cube_uv_reflection_fragment:dm,defaultnormal_vertex:fm,displacementmap_pars_vertex:pm,displacementmap_vertex:mm,emissivemap_fragment:gm,emissivemap_pars_fragment:vm,colorspace_fragment:xm,colorspace_pars_fragment:_m,envmap_fragment:ym,envmap_common_pars_fragment:Mm,envmap_pars_fragment:bm,envmap_pars_vertex:Sm,envmap_physical_pars_fragment:Nm,envmap_vertex:wm,fog_vertex:Tm,fog_pars_vertex:Em,fog_fragment:Am,fog_pars_fragment:Rm,gradientmap_pars_fragment:Cm,lightmap_pars_fragment:Im,lights_lambert_fragment:Pm,lights_lambert_pars_fragment:Lm,lights_pars_begin:Dm,lights_toon_fragment:Um,lights_toon_pars_fragment:Fm,lights_phong_fragment:Bm,lights_phong_pars_fragment:Om,lights_physical_fragment:km,lights_physical_pars_fragment:zm,lights_fragment_begin:Hm,lights_fragment_maps:Vm,lights_fragment_end:Gm,lightprobes_pars_fragment:Wm,logdepthbuf_fragment:Xm,logdepthbuf_pars_fragment:qm,logdepthbuf_pars_vertex:Ym,logdepthbuf_vertex:$m,map_fragment:Zm,map_pars_fragment:Jm,map_particle_fragment:Km,map_particle_pars_fragment:jm,metalnessmap_fragment:Qm,metalnessmap_pars_fragment:t0,morphinstance_vertex:e0,morphcolor_vertex:i0,morphnormal_vertex:n0,morphtarget_pars_vertex:s0,morphtarget_vertex:r0,normal_fragment_begin:a0,normal_fragment_maps:o0,normal_pars_fragment:l0,normal_pars_vertex:c0,normal_vertex:h0,normalmap_pars_fragment:u0,clearcoat_normal_fragment_begin:d0,clearcoat_normal_fragment_maps:f0,clearcoat_pars_fragment:p0,iridescence_pars_fragment:m0,opaque_fragment:g0,packing:v0,premultiplied_alpha_fragment:x0,project_vertex:_0,dithering_fragment:y0,dithering_pars_fragment:M0,roughnessmap_fragment:b0,roughnessmap_pars_fragment:S0,shadowmap_pars_fragment:w0,shadowmap_pars_vertex:T0,shadowmap_vertex:E0,shadowmask_pars_fragment:A0,skinbase_vertex:R0,skinning_pars_vertex:C0,skinning_vertex:I0,skinnormal_vertex:P0,specularmap_fragment:L0,specularmap_pars_fragment:D0,tonemapping_fragment:N0,tonemapping_pars_fragment:U0,transmission_fragment:F0,transmission_pars_fragment:B0,uv_pars_fragment:O0,uv_pars_vertex:k0,uv_vertex:z0,worldpos_vertex:H0,background_vert:V0,background_frag:G0,backgroundCube_vert:W0,backgroundCube_frag:X0,cube_vert:q0,cube_frag:Y0,depth_vert:$0,depth_frag:Z0,distance_vert:J0,distance_frag:K0,equirect_vert:j0,equirect_frag:Q0,linedashed_vert:tg,linedashed_frag:eg,meshbasic_vert:ig,meshbasic_frag:ng,meshlambert_vert:sg,meshlambert_frag:rg,meshmatcap_vert:ag,meshmatcap_frag:og,meshnormal_vert:lg,meshnormal_frag:cg,meshphong_vert:hg,meshphong_frag:ug,meshphysical_vert:dg,meshphysical_frag:fg,meshtoon_vert:pg,meshtoon_frag:mg,points_vert:gg,points_frag:vg,shadow_vert:xg,shadow_frag:_g,sprite_vert:yg,sprite_frag:Mg},Mt={common:{diffuse:{value:new ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Yt}},envmap:{envMap:{value:null},envMapRotation:{value:new Yt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Yt},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new P},probesMax:{value:new P},probesResolution:{value:new P}},points:{diffuse:{value:new ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0},uvTransform:{value:new Yt}},sprite:{diffuse:{value:new ht(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}}},Ki={basic:{uniforms:si([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.fog]),vertexShader:$t.meshbasic_vert,fragmentShader:$t.meshbasic_frag},lambert:{uniforms:si([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new ht(0)},envMapIntensity:{value:1}}]),vertexShader:$t.meshlambert_vert,fragmentShader:$t.meshlambert_frag},phong:{uniforms:si([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new ht(0)},specular:{value:new ht(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:$t.meshphong_vert,fragmentShader:$t.meshphong_frag},standard:{uniforms:si([Mt.common,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.roughnessmap,Mt.metalnessmap,Mt.fog,Mt.lights,{emissive:{value:new ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag},toon:{uniforms:si([Mt.common,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.gradientmap,Mt.fog,Mt.lights,{emissive:{value:new ht(0)}}]),vertexShader:$t.meshtoon_vert,fragmentShader:$t.meshtoon_frag},matcap:{uniforms:si([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,{matcap:{value:null}}]),vertexShader:$t.meshmatcap_vert,fragmentShader:$t.meshmatcap_frag},points:{uniforms:si([Mt.points,Mt.fog]),vertexShader:$t.points_vert,fragmentShader:$t.points_frag},dashed:{uniforms:si([Mt.common,Mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$t.linedashed_vert,fragmentShader:$t.linedashed_frag},depth:{uniforms:si([Mt.common,Mt.displacementmap]),vertexShader:$t.depth_vert,fragmentShader:$t.depth_frag},normal:{uniforms:si([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,{opacity:{value:1}}]),vertexShader:$t.meshnormal_vert,fragmentShader:$t.meshnormal_frag},sprite:{uniforms:si([Mt.sprite,Mt.fog]),vertexShader:$t.sprite_vert,fragmentShader:$t.sprite_frag},background:{uniforms:{uvTransform:{value:new Yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$t.background_vert,fragmentShader:$t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Yt}},vertexShader:$t.backgroundCube_vert,fragmentShader:$t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$t.cube_vert,fragmentShader:$t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$t.equirect_vert,fragmentShader:$t.equirect_frag},distance:{uniforms:si([Mt.common,Mt.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$t.distance_vert,fragmentShader:$t.distance_frag},shadow:{uniforms:si([Mt.lights,Mt.fog,{color:{value:new ht(0)},opacity:{value:1}}]),vertexShader:$t.shadow_vert,fragmentShader:$t.shadow_frag}};Ki.physical={uniforms:si([Ki.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Yt},clearcoatNormalScale:{value:new at(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Yt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Yt},sheen:{value:0},sheenColor:{value:new ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Yt},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Yt},attenuationDistance:{value:0},attenuationColor:{value:new ht(0)},specularColor:{value:new ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Yt},anisotropyVector:{value:new at},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Yt}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag};var ol={r:0,b:0,g:0},bg=new ne,Dd=new Yt;Dd.set(-1,0,0,0,1,0,0,0,1);function Sg(s,t,e,i,n,r){let a=new ht(0),o=n===!0?0:1,c,l,u=null,f=0,h=null;function d(y){let M=y.isScene===!0?y.background:null;if(M&&M.isTexture){let x=y.backgroundBlurriness>0;M=t.get(M,x)}return M}function g(y){let M=!1,x=d(y);x===null?m(a,o):x&&x.isColor&&(m(x,1),M=!0);let S=s.xr.getEnvironmentBlendMode();S==="additive"?e.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(s.autoClear||M)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function v(y,M){let x=d(M);x&&(x.isCubeTexture||x.mapping===Hr)?(l===void 0&&(l=new dt(new Re(1,1,1),new se({name:"BackgroundCubeMaterial",uniforms:rs(Ki.backgroundCube.uniforms),vertexShader:Ki.backgroundCube.vertexShader,fragmentShader:Ki.backgroundCube.fragmentShader,side:Ze,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(S,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=x,l.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(bg.makeRotationFromEuler(M.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Dd),l.material.toneMapped=le.getTransfer(x.colorSpace)!==pe,(u!==x||f!==x.version||h!==s.toneMapping)&&(l.material.needsUpdate=!0,u=x,f=x.version,h=s.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new dt(new Le(2,2),new se({name:"BackgroundMaterial",uniforms:rs(Ki.background.uniforms),vertexShader:Ki.background.vertexShader,fragmentShader:Ki.background.fragmentShader,side:$i,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=le.getTransfer(x.colorSpace)!==pe,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||f!==x.version||h!==s.toneMapping)&&(c.material.needsUpdate=!0,u=x,f=x.version,h=s.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function m(y,M){y.getRGB(ol,jc(s)),e.buffers.color.setClear(ol.r,ol.g,ol.b,M,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,M=1){a.set(y),o=M,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,m(a,o)},render:g,addToRenderList:v,dispose:p}}function wg(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},n=h(null),r=n,a=!1;function o(I,D,k,N,O){let z=!1,Y=f(I,N,k,D);r!==Y&&(r=Y,l(r.object)),z=d(I,N,k,O),z&&g(I,N,k,O),O!==null&&t.update(O,s.ELEMENT_ARRAY_BUFFER),(z||a)&&(a=!1,x(I,D,k,N),O!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function c(){return s.createVertexArray()}function l(I){return s.bindVertexArray(I)}function u(I){return s.deleteVertexArray(I)}function f(I,D,k,N){let O=N.wireframe===!0,z=i[D.id];z===void 0&&(z={},i[D.id]=z);let Y=I.isInstancedMesh===!0?I.id:0,tt=z[Y];tt===void 0&&(tt={},z[Y]=tt);let X=tt[k.id];X===void 0&&(X={},tt[k.id]=X);let j=X[O];return j===void 0&&(j=h(c()),X[O]=j),j}function h(I){let D=[],k=[],N=[];for(let O=0;O<e;O++)D[O]=0,k[O]=0,N[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:k,attributeDivisors:N,object:I,attributes:{},index:null}}function d(I,D,k,N){let O=r.attributes,z=D.attributes,Y=0,tt=k.getAttributes();for(let X in tt)if(tt[X].location>=0){let et=O[X],Ct=z[X];if(Ct===void 0&&(X==="instanceMatrix"&&I.instanceMatrix&&(Ct=I.instanceMatrix),X==="instanceColor"&&I.instanceColor&&(Ct=I.instanceColor)),et===void 0||et.attribute!==Ct||Ct&&et.data!==Ct.data)return!0;Y++}return r.attributesNum!==Y||r.index!==N}function g(I,D,k,N){let O={},z=D.attributes,Y=0,tt=k.getAttributes();for(let X in tt)if(tt[X].location>=0){let et=z[X];et===void 0&&(X==="instanceMatrix"&&I.instanceMatrix&&(et=I.instanceMatrix),X==="instanceColor"&&I.instanceColor&&(et=I.instanceColor));let Ct={};Ct.attribute=et,et&&et.data&&(Ct.data=et.data),O[X]=Ct,Y++}r.attributes=O,r.attributesNum=Y,r.index=N}function v(){let I=r.newAttributes;for(let D=0,k=I.length;D<k;D++)I[D]=0}function m(I){p(I,0)}function p(I,D){let k=r.newAttributes,N=r.enabledAttributes,O=r.attributeDivisors;k[I]=1,N[I]===0&&(s.enableVertexAttribArray(I),N[I]=1),O[I]!==D&&(s.vertexAttribDivisor(I,D),O[I]=D)}function y(){let I=r.newAttributes,D=r.enabledAttributes;for(let k=0,N=D.length;k<N;k++)D[k]!==I[k]&&(s.disableVertexAttribArray(k),D[k]=0)}function M(I,D,k,N,O,z,Y){Y===!0?s.vertexAttribIPointer(I,D,k,O,z):s.vertexAttribPointer(I,D,k,N,O,z)}function x(I,D,k,N){v();let O=N.attributes,z=k.getAttributes(),Y=D.defaultAttributeValues;for(let tt in z){let X=z[tt];if(X.location>=0){let j=O[tt];if(j===void 0&&(tt==="instanceMatrix"&&I.instanceMatrix&&(j=I.instanceMatrix),tt==="instanceColor"&&I.instanceColor&&(j=I.instanceColor)),j!==void 0){let et=j.normalized,Ct=j.itemSize,wt=t.get(j);if(wt===void 0)continue;let re=wt.buffer,qt=wt.type,te=wt.bytesPerElement,Z=qt===s.INT||qt===s.UNSIGNED_INT||j.gpuType===Mo;if(j.isInterleavedBufferAttribute){let K=j.data,mt=K.stride,Vt=j.offset;if(K.isInstancedInterleavedBuffer){for(let pt=0;pt<X.locationSize;pt++)p(X.location+pt,K.meshPerAttribute);I.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let pt=0;pt<X.locationSize;pt++)m(X.location+pt);s.bindBuffer(s.ARRAY_BUFFER,re);for(let pt=0;pt<X.locationSize;pt++)M(X.location+pt,Ct/X.locationSize,qt,et,mt*te,(Vt+Ct/X.locationSize*pt)*te,Z)}else{if(j.isInstancedBufferAttribute){for(let K=0;K<X.locationSize;K++)p(X.location+K,j.meshPerAttribute);I.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let K=0;K<X.locationSize;K++)m(X.location+K);s.bindBuffer(s.ARRAY_BUFFER,re);for(let K=0;K<X.locationSize;K++)M(X.location+K,Ct/X.locationSize,qt,et,Ct*te,Ct/X.locationSize*K*te,Z)}}else if(Y!==void 0){let et=Y[tt];if(et!==void 0)switch(et.length){case 2:s.vertexAttrib2fv(X.location,et);break;case 3:s.vertexAttrib3fv(X.location,et);break;case 4:s.vertexAttrib4fv(X.location,et);break;default:s.vertexAttrib1fv(X.location,et)}}}}y()}function S(){T();for(let I in i){let D=i[I];for(let k in D){let N=D[k];for(let O in N){let z=N[O];for(let Y in z)u(z[Y].object),delete z[Y];delete N[O]}}delete i[I]}}function w(I){if(i[I.id]===void 0)return;let D=i[I.id];for(let k in D){let N=D[k];for(let O in N){let z=N[O];for(let Y in z)u(z[Y].object),delete z[Y];delete N[O]}}delete i[I.id]}function A(I){for(let D in i){let k=i[D];for(let N in k){let O=k[N];if(O[I.id]===void 0)continue;let z=O[I.id];for(let Y in z)u(z[Y].object),delete z[Y];delete O[I.id]}}}function _(I){for(let D in i){let k=i[D],N=I.isInstancedMesh===!0?I.id:0,O=k[N];if(O!==void 0){for(let z in O){let Y=O[z];for(let tt in Y)u(Y[tt].object),delete Y[tt];delete O[z]}delete k[N],Object.keys(k).length===0&&delete i[D]}}}function T(){R(),a=!0,r!==n&&(r=n,l(r.object))}function R(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:T,resetDefaultState:R,dispose:S,releaseStatesOfGeometry:w,releaseStatesOfObject:_,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:m,disableUnusedAttributes:y}}function Tg(s,t,e){let i;function n(c){i=c}function r(c,l){s.drawArrays(i,c,l),e.update(l,i,1)}function a(c,l,u){u!==0&&(s.drawArraysInstanced(i,c,l,u),e.update(l,i,u))}function o(c,l,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,u);let h=0;for(let d=0;d<u;d++)h+=l[d];e.update(h,i,1)}this.setMode=n,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Eg(s,t,e,i){let n;function r(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(A){return!(A!==bi&&i.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){let _=A===gi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==ni&&A!==Mi&&!_&&i.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function c(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",u=c(l);u!==l&&(Wt("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let f=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&h===!1&&Wt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),y=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),M=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),S=s.getParameter(s.MAX_SAMPLES),w=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:M,maxFragmentUniforms:x,maxSamples:S,samples:w}}function Ag(s){let t=this,e=null,i=0,n=!1,r=!1,a=new Ii,o=new Yt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){let d=f.length!==0||h||i!==0||n;return n=h,i=f.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){e=u(f,h,0)},this.setState=function(f,h,d){let g=f.clippingPlanes,v=f.clipIntersection,m=f.clipShadows,p=s.get(f);if(!n||g===null||g.length===0||r&&!m)r?u(null):l();else{let y=r?0:i,M=y*4,x=p.clippingState||null;c.value=x,x=u(g,h,M,d);for(let S=0;S!==M;++S)x[S]=e[S];p.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(f,h,d,g){let v=f!==null?f.length:0,m=null;if(v!==0){if(m=c.value,g!==!0||m===null){let p=d+v*4,y=h.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,x=d;M!==v;++M,x+=4)a.copy(f[M]).applyMatrix4(y,o),a.normal.toArray(m,x),m[x+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}var qs=4,Rg=6,Cg=20,Ig=256,Zr=new Cn,ud=new ht,oh=null,lh=0,ch=0,hh=!1,Pg=new P,as=new P,$s=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,n=100,r={}){let{size:a=256,position:o=Pg}=r;oh=this._renderer.getRenderTarget(),lh=this._renderer.getActiveCubeFace(),ch=this._renderer.getActiveMipmapLevel(),hh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,i,n,c,o),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=pd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(oh,lh,ch),this._renderer.xr.enabled=hh,t.scissorTest=!1,Xs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Pn||t.mapping===ns?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),oh=this._renderer.getRenderTarget(),lh=this._renderer.getActiveCubeFace(),ch=this._renderer.getActiveMipmapLevel(),hh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Pe,minFilter:Pe,generateMipmaps:!1,type:gi,format:bi,colorSpace:Zn,depthBuffer:!1},n=dd(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=dd(t,e,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Lg(r)),this._blurMaterial=Ng(r,t,e),this._ggxMaterial=Dg(r,t,e)}return n}_compileMaterial(t){let e=new dt(new xe,t);this._renderer.compile(e,Zr)}_sceneToCubeUV(t,e,i,n,r){let c=new qe(90,1,e,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(ud),f.toneMapping=mi,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(n),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new dt(new Re,new Xi({name:"PMREM.Background",side:Ze,depthWrite:!1,depthTest:!1})));let v=this._backgroundBox,m=v.material,p=!1,y=t.background;y?y.isColor&&(m.color.copy(y),t.background=null,p=!0):(m.color.copy(ud),p=!0);for(let M=0;M<6;M++){let x=M%3;x===0?(c.up.set(0,l[M],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[M],r.y,r.z)):x===1?(c.up.set(0,0,l[M]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[M],r.z)):(c.up.set(0,l[M],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[M]));let S=this._cubeSize;Xs(n,x*S,M>2?S:0,S,S),f.setRenderTarget(n),p&&f.render(v,c),f.render(t,c)}f.toneMapping=d,f.autoClear=h,t.background=y}_textureToCubeUV(t,e){let i=this._renderer,n=t.mapping===Pn||t.mapping===ns;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=pd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fd());let r=n?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let c=this._cubeSize;Xs(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(a,Zr)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let n=this._lodMeshes.length;for(let r=1;r<n;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=i}_applyGGXFilter(t,e,i){let n=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;let c=a.uniforms,l=i/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),f=Math.sqrt(l*l-u*u),h=l*1.25,d=f*h,{_lodMax:g}=this,v=this._sizeLods[i],m=3*v*(i>g-qs?i-g+qs:0),p=4*(this._cubeSize-v);c.envMap.value=t.texture,c.roughness.value=d,c.mipInt.value=g-e,Xs(r,m,p,3*v,2*v),n.setRenderTarget(r),n.render(o,Zr),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=g-i,Xs(t,m,p,3*v,2*v),n.setRenderTarget(t),n.render(o,Zr)}_blur(t,e,i,n){let r=this._pingPongRenderTarget,a=Math.min(n,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,i,a),this._blurPass(r,t,i,i,a)}_blurPass(t,e,i,n,r){let a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[n];c.material=o;let l=o.uniforms;l.envMap.value=t.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-i;let u=this._sizeLods[n],f=3*u*(n>this._lodMax-qs?n-this._lodMax+qs:0),h=4*(this._cubeSize-u);Xs(e,f,h,3*u,2*u),a.setRenderTarget(e),a.render(c,Zr)}};function Lg(s){let t=[],e=[],i=s,n=s-qs+1+Rg;for(let r=0;r<n;r++){let a=Math.pow(2,i);t.push(a);let o=1/(a-2),c=-o,l=1+o,u=[c,c,l,c,l,l,c,c,l,l,c,l],f=6,h=6,d=3,g=new Float32Array(d*h*f),v=new Float32Array(d*h*f);for(let p=0;p<f;p++){let y=p%3*2/3-1,M=p>2?0:-1,x=[y,M,0,y+2/3,M,0,y+2/3,M+1,0,y,M,0,y+2/3,M+1,0,y,M+1,0];g.set(x,d*h*p);for(let S=0;S<h;S++){let w=u[S*2]*2-1,A=u[S*2+1]*2-1;p===0?as.set(1,A,w):p===1?as.set(-w,1,-A):p===2?as.set(-w,A,1):p===3?as.set(-1,A,-w):p===4?as.set(-w,-1,A):as.set(w,A,-1),as.toArray(v,(p*h+S)*d)}}let m=new xe;m.setAttribute("position",new ke(g,d)),m.setAttribute("outputDirection",new ke(v,d)),e.push(new dt(m,null)),i>qs&&i--}return{lodMeshes:e,sizeLods:t}}function dd(s,t,e){let i=new $e(s,t,e);return i.texture.mapping=Hr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Xs(s,t,e,i,n){s.viewport.set(t,e,i,n),s.scissor.set(t,e,i,n)}function Dg(s,t,e){return new se({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Ig,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ul(),fragmentShader:`

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
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function Ng(s,t,e){return new se({name:"SphericalGaussianBlur",defines:{SAMPLES:Cg,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:ul(),fragmentShader:`

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
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function fd(){return new se({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ul(),fragmentShader:`

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
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function pd(){return new se({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ul(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function ul(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var cl=class extends $e{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];this.texture=new wr(n),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new Re(5,5,5),r=new se({name:"CubemapFromEquirect",uniforms:rs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ze,blending:Zi});r.uniforms.tEquirect.value=e;let a=new dt(n,r),o=e.minFilter;return e.minFilter===Ln&&(e.minFilter=Pe),new mo(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,n=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,n);t.setRenderTarget(r)}};function Ug(s){let t=new WeakMap,e=new WeakMap,i=null;function n(h,d=!1){return h==null?null:d?a(h):r(h)}function r(h){if(h&&h.isTexture){let d=h.mapping;if(d===xo||d===_o)if(t.has(h)){let g=t.get(h).texture;return o(g,h.mapping)}else{let g=h.image;if(g&&g.height>0){let v=new cl(g.height);return v.fromEquirectangularTexture(s,h),t.set(h,v),h.addEventListener("dispose",l),o(v.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){let d=h.mapping,g=d===xo||d===_o,v=d===Pn||d===ns;if(g||v){let m=e.get(h),p=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return i===null&&(i=new $s(s)),m=g?i.fromEquirectangular(h,m):i.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),m.texture;if(m!==void 0)return m.texture;{let y=h.image;return g&&y&&y.height>0||v&&y&&c(y)?(i===null&&(i=new $s(s)),m=g?i.fromEquirectangular(h):i.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function o(h,d){return d===xo?h.mapping=Pn:d===_o&&(h.mapping=ns),h}function c(h){let d=0,g=6;for(let v=0;v<g;v++)h[v]!==void 0&&d++;return d===g}function l(h){let d=h.target;d.removeEventListener("dispose",l);let g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function u(h){let d=h.target;d.removeEventListener("dispose",u);let g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function f(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:n,dispose:f}}function Fg(s){let t={};function e(i){if(t[i]!==void 0)return t[i];let n=s.getExtension(i);return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let n=e(i);return n===null&&$n("WebGLRenderer: "+i+" extension not supported."),n}}}function Bg(s,t,e,i){let n={},r=new WeakMap;function a(f){let h=f.target;h.index!==null&&t.remove(h.index);for(let g in h.attributes)t.remove(h.attributes[g]);h.removeEventListener("dispose",a),delete n[h.id];let d=r.get(h);d&&(t.remove(d),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function o(f,h){return n[h.id]===!0||(h.addEventListener("dispose",a),n[h.id]=!0,e.memory.geometries++),h}function c(f){let h=f.attributes;for(let d in h)t.update(h[d],s.ARRAY_BUFFER)}function l(f){let h=[],d=f.index,g=f.attributes.position,v=0;if(g===void 0)return;if(d!==null){let y=d.array;v=d.version;for(let M=0,x=y.length;M<x;M+=3){let S=y[M+0],w=y[M+1],A=y[M+2];h.push(S,w,w,A,A,S)}}else{let y=g.array;v=g.version;for(let M=0,x=y.length/3-1;M<x;M+=3){let S=M+0,w=M+1,A=M+2;h.push(S,w,w,A,A,S)}}let m=new(g.count>=65535?Mr:yr)(h,1);m.version=v;let p=r.get(f);p&&t.remove(p),r.set(f,m)}function u(f){let h=r.get(f);if(h){let d=f.index;d!==null&&h.version<d.version&&l(f)}else l(f);return r.get(f)}return{get:o,update:c,getWireframeAttribute:u}}function Og(s,t,e){let i;function n(f){i=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function c(f,h){s.drawElements(i,h,r,f*a),e.update(h,i,1)}function l(f,h,d){d!==0&&(s.drawElementsInstanced(i,h,r,f*a,d),e.update(h,i,d))}function u(f,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,f,0,d);let v=0;for(let m=0;m<d;m++)v+=h[m];e.update(v,i,1)}this.setMode=n,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function kg(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:Xt("WebGLInfo: Unknown draw mode:",a);break}}function n(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function zg(s,t,e){let i=new WeakMap,n=new ge;function r(a,o,c){let l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0,h=i.get(o);if(h===void 0||h.count!==f){let T=function(){A.dispose(),i.delete(o),o.removeEventListener("dispose",T)};h!==void 0&&h.texture.dispose();let d=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],y=o.morphAttributes.color||[],M=0;d===!0&&(M=1),g===!0&&(M=2),v===!0&&(M=3);let x=o.attributes.position.count*M,S=1;x>t.maxTextureSize&&(S=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);let w=new Float32Array(x*S*4*f),A=new vr(w,x,S,f);A.type=Mi,A.needsUpdate=!0;let _=M*4;for(let R=0;R<f;R++){let I=m[R],D=p[R],k=y[R],N=x*S*4*R;for(let O=0;O<I.count;O++){let z=O*_;d===!0&&(n.fromBufferAttribute(I,O),w[N+z+0]=n.x,w[N+z+1]=n.y,w[N+z+2]=n.z,w[N+z+3]=0),g===!0&&(n.fromBufferAttribute(D,O),w[N+z+4]=n.x,w[N+z+5]=n.y,w[N+z+6]=n.z,w[N+z+7]=0),v===!0&&(n.fromBufferAttribute(k,O),w[N+z+8]=n.x,w[N+z+9]=n.y,w[N+z+10]=n.z,w[N+z+11]=k.itemSize===4?n.w:1)}}h={count:f,texture:A,size:new at(x,S)},i.set(o,h),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let d=0;for(let v=0;v<l.length;v++)d+=l[v];let g=o.morphTargetsRelative?1:1-d;c.getUniforms().setValue(s,"morphTargetBaseInfluence",g),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",h.texture,e),c.getUniforms().setValue(s,"morphTargetsTextureSize",h.size)}return{update:r}}function Hg(s,t,e,i,n){let r=new WeakMap;function a(l){let u=n.render.frame,f=l.geometry,h=t.get(l,f);if(r.get(h)!==u&&(t.update(h),r.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==u&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){let d=l.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return h}function o(){r=new WeakMap}function c(l){let u=l.target;u.removeEventListener("dispose",c),i.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:a,dispose:o}}var Vg={[Dc]:"LINEAR_TONE_MAPPING",[Nc]:"REINHARD_TONE_MAPPING",[Uc]:"CINEON_TONE_MAPPING",[Fc]:"ACES_FILMIC_TONE_MAPPING",[Oc]:"AGX_TONE_MAPPING",[kc]:"NEUTRAL_TONE_MAPPING",[Bc]:"CUSTOM_TONE_MAPPING"};function Gg(s,t,e,i,n,r){let a=new $e(t,e,{type:s,depthBuffer:n,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=new xe;l.setAttribute("position",new Qt([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Qt([0,2,0,0,2,0],2));let u=new eo({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new dt(l,u),h=new Cn(-1,1,1,-1,0,1),d=null,g=null,v=!1,m,p=null,y=[],M=!1;this.setSize=function(x,S){a.setSize(x,S),o!==null&&o.setSize(x,S),c!==null&&c.setSize(x,S);for(let w=0;w<y.length;w++){let A=y[w];A.setSize&&A.setSize(x,S)}},this.setEffects=function(x){y=x,M=y.length>0&&y[0].isRenderPass===!0;let S=a.width,w=a.height;y.length>0&&o===null&&(o=new $e(S,w,{type:gi,depthBuffer:!1,stencilBuffer:!1}),c=new $e(S,w,{type:gi,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<y.length;A++){let _=y[A];_.setSize&&_.setSize(S,w)}},this.begin=function(x,S){if(v||x.toneMapping===mi&&y.length===0)return!1;if(p=S,S!==null){let w=S.width,A=S.height;(a.width!==w||a.height!==A)&&this.setSize(w,A)}return M===!1&&x.setRenderTarget(a),m=x.toneMapping,x.toneMapping=mi,!0},this.hasRenderPass=function(){return M},this.end=function(x,S){x.toneMapping=m,v=!0;let w=a,A=o;for(let _=0;_<y.length;_++){let T=y[_];T.enabled!==!1&&(T.render(x,A,w,S),T.needsSwap!==!1&&(w=A,A=A===o?c:o))}if(d!==x.outputColorSpace||g!==x.toneMapping){d=x.outputColorSpace,g=x.toneMapping,u.defines={},le.getTransfer(d)===pe&&(u.defines.SRGB_TRANSFER="");let _=Vg[g];_&&(u.defines[_]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=w.texture,x.setRenderTarget(p),x.render(f,h),p=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var Nd=new li,fh=new Tn(1,1),Ud=new vr,Fd=new Xa,Bd=new wr,md=[],gd=[],vd=new Float32Array(16),xd=new Float32Array(9),_d=new Float32Array(4);function Zs(s,t,e){let i=s[0];if(i<=0||i>0)return s;let n=t*e,r=md[n];if(r===void 0&&(r=new Float32Array(n),md[n]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function Ge(s,t){if(s.length!==t.length)return!1;for(let e=0,i=s.length;e<i;e++)if(s[e]!==t[e])return!1;return!0}function We(s,t){for(let e=0,i=t.length;e<i;e++)s[e]=t[e]}function dl(s,t){let e=gd[t];e===void 0&&(e=new Int32Array(t),gd[t]=e);for(let i=0;i!==t;++i)e[i]=s.allocateTextureUnit();return e}function Wg(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Xg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ge(e,t))return;s.uniform2fv(this.addr,t),We(e,t)}}function qg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ge(e,t))return;s.uniform3fv(this.addr,t),We(e,t)}}function Yg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ge(e,t))return;s.uniform4fv(this.addr,t),We(e,t)}}function $g(s,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ge(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),We(e,t)}else{if(Ge(e,i))return;_d.set(i),s.uniformMatrix2fv(this.addr,!1,_d),We(e,i)}}function Zg(s,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ge(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),We(e,t)}else{if(Ge(e,i))return;xd.set(i),s.uniformMatrix3fv(this.addr,!1,xd),We(e,i)}}function Jg(s,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ge(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),We(e,t)}else{if(Ge(e,i))return;vd.set(i),s.uniformMatrix4fv(this.addr,!1,vd),We(e,i)}}function Kg(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function jg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ge(e,t))return;s.uniform2iv(this.addr,t),We(e,t)}}function Qg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ge(e,t))return;s.uniform3iv(this.addr,t),We(e,t)}}function tv(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ge(e,t))return;s.uniform4iv(this.addr,t),We(e,t)}}function ev(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function iv(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ge(e,t))return;s.uniform2uiv(this.addr,t),We(e,t)}}function nv(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ge(e,t))return;s.uniform3uiv(this.addr,t),We(e,t)}}function sv(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ge(e,t))return;s.uniform4uiv(this.addr,t),We(e,t)}}function rv(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);let r;this.type===s.SAMPLER_2D_SHADOW?(fh.compareFunction=e.isReversedDepthBuffer()?al:rl,r=fh):r=Nd,e.setTexture2D(t||r,n)}function av(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||Fd,n)}function ov(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTextureCube(t||Bd,n)}function lv(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||Ud,n)}function cv(s){switch(s){case 5126:return Wg;case 35664:return Xg;case 35665:return qg;case 35666:return Yg;case 35674:return $g;case 35675:return Zg;case 35676:return Jg;case 5124:case 35670:return Kg;case 35667:case 35671:return jg;case 35668:case 35672:return Qg;case 35669:case 35673:return tv;case 5125:return ev;case 36294:return iv;case 36295:return nv;case 36296:return sv;case 35678:case 36198:case 36298:case 36306:case 35682:return rv;case 35679:case 36299:case 36307:return av;case 35680:case 36300:case 36308:case 36293:return ov;case 36289:case 36303:case 36311:case 36292:return lv}}function hv(s,t){s.uniform1fv(this.addr,t)}function uv(s,t){let e=Zs(t,this.size,2);s.uniform2fv(this.addr,e)}function dv(s,t){let e=Zs(t,this.size,3);s.uniform3fv(this.addr,e)}function fv(s,t){let e=Zs(t,this.size,4);s.uniform4fv(this.addr,e)}function pv(s,t){let e=Zs(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function mv(s,t){let e=Zs(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function gv(s,t){let e=Zs(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function vv(s,t){s.uniform1iv(this.addr,t)}function xv(s,t){s.uniform2iv(this.addr,t)}function _v(s,t){s.uniform3iv(this.addr,t)}function yv(s,t){s.uniform4iv(this.addr,t)}function Mv(s,t){s.uniform1uiv(this.addr,t)}function bv(s,t){s.uniform2uiv(this.addr,t)}function Sv(s,t){s.uniform3uiv(this.addr,t)}function wv(s,t){s.uniform4uiv(this.addr,t)}function Tv(s,t,e){let i=this.cache,n=t.length,r=dl(e,n);Ge(i,r)||(s.uniform1iv(this.addr,r),We(i,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=fh:a=Nd;for(let o=0;o!==n;++o)e.setTexture2D(t[o]||a,r[o])}function Ev(s,t,e){let i=this.cache,n=t.length,r=dl(e,n);Ge(i,r)||(s.uniform1iv(this.addr,r),We(i,r));for(let a=0;a!==n;++a)e.setTexture3D(t[a]||Fd,r[a])}function Av(s,t,e){let i=this.cache,n=t.length,r=dl(e,n);Ge(i,r)||(s.uniform1iv(this.addr,r),We(i,r));for(let a=0;a!==n;++a)e.setTextureCube(t[a]||Bd,r[a])}function Rv(s,t,e){let i=this.cache,n=t.length,r=dl(e,n);Ge(i,r)||(s.uniform1iv(this.addr,r),We(i,r));for(let a=0;a!==n;++a)e.setTexture2DArray(t[a]||Ud,r[a])}function Cv(s){switch(s){case 5126:return hv;case 35664:return uv;case 35665:return dv;case 35666:return fv;case 35674:return pv;case 35675:return mv;case 35676:return gv;case 5124:case 35670:return vv;case 35667:case 35671:return xv;case 35668:case 35672:return _v;case 35669:case 35673:return yv;case 5125:return Mv;case 36294:return bv;case 36295:return Sv;case 36296:return wv;case 35678:case 36198:case 36298:case 36306:case 35682:return Tv;case 35679:case 36299:case 36307:return Ev;case 35680:case 36300:case 36308:case 36293:return Av;case 36289:case 36303:case 36311:case 36292:return Rv}}var ph=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=cv(e.type)}},mh=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Cv(e.type)}},gh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let n=this.seq;for(let r=0,a=n.length;r!==a;++r){let o=n[r];o.setValue(t,e[o.id],i)}}},uh=/(\w+)(\])?(\[|\.)?/g;function yd(s,t){s.seq.push(t),s.map[t.id]=t}function Iv(s,t,e){let i=s.name,n=i.length;for(uh.lastIndex=0;;){let r=uh.exec(i),a=uh.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===n){yd(e,l===void 0?new ph(o,s,t):new mh(o,s,t));break}else{let f=e.map[o];f===void 0&&(f=new gh(o),yd(e,f)),e=f}}}var Ys=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=t.getActiveUniform(e,a),c=t.getUniformLocation(e,o.name);Iv(o,c,this)}let n=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?n.push(a):r.push(a);n.length>0&&(this.seq=n.concat(r))}setValue(t,e,i,n){let r=this.map[e];r!==void 0&&r.setValue(t,i,n)}setOptional(t,e,i){let n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let r=0,a=e.length;r!==a;++r){let o=e[r],c=i[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,n)}}static seqWithValue(t,e){let i=[];for(let n=0,r=t.length;n!==r;++n){let a=t[n];a.id in e&&i.push(a)}return i}};function Md(s,t,e){let i=s.createShader(t);return s.shaderSource(i,e),s.compileShader(i),i}var Pv=37297,Lv=0;function Dv(s,t){let e=s.split(`
`),i=[],n=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=n;a<r;a++){let o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}var bd=new Yt;function Nv(s){le._getMatrix(bd,le.workingColorSpace,s);let t=`mat3( ${bd.elements.map(e=>e.toFixed(4))} )`;switch(le.getTransfer(s)){case mr:return[t,"LinearTransferOETF"];case pe:return[t,"sRGBTransferOETF"];default:return Wt("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Sd(s,t,e){let i=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Dv(s.getShaderSource(t),o)}else return r}function Uv(s,t){let e=Nv(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var Fv={[Dc]:"Linear",[Nc]:"Reinhard",[Uc]:"Cineon",[Fc]:"ACESFilmic",[Oc]:"AgX",[kc]:"Neutral",[Bc]:"Custom"};function Bv(s,t){let e=Fv[t];return e===void 0?(Wt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var ll=new P;function Ov(){le.getLuminanceCoefficients(ll);let s=ll.x.toFixed(4),t=ll.y.toFixed(4),e=ll.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function kv(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Kr).join(`
`)}function zv(s){let t=[];for(let e in s){let i=s[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Hv(s,t){let e={},i=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){let r=s.getActiveAttrib(t,n),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function Kr(s){return s!==""}function wd(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Td(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Vv=/^[ \t]*#include +<([\w\d./]+)>/gm;function vh(s){return s.replace(Vv,Wv)}var Gv=new Map;function Wv(s,t){let e=$t[t];if(e===void 0){let i=Gv.get(t);if(i!==void 0)e=$t[i],Wt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return vh(e)}var Xv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ed(s){return s.replace(Xv,qv)}function qv(s,t,e,i){let n="";for(let r=parseInt(t);r<parseInt(e);r++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return n}function Ad(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var Yv={[es]:"SHADOWMAP_TYPE_PCF",[Vs]:"SHADOWMAP_TYPE_VSM"};function $v(s){return Yv[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Zv={[Pn]:"ENVMAP_TYPE_CUBE",[ns]:"ENVMAP_TYPE_CUBE",[Hr]:"ENVMAP_TYPE_CUBE_UV"};function Jv(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":Zv[s.envMapMode]||"ENVMAP_TYPE_CUBE"}var Kv={[ns]:"ENVMAP_MODE_REFRACTION"};function jv(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":Kv[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Qv={[Lc]:"ENVMAP_BLENDING_MULTIPLY",[zu]:"ENVMAP_BLENDING_MIX",[Hu]:"ENVMAP_BLENDING_ADD"};function tx(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":Qv[s.combine]||"ENVMAP_BLENDING_NONE"}function ex(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function ix(s,t,e,i){let n=s.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,c=$v(e),l=Jv(e),u=jv(e),f=tx(e),h=ex(e),d=kv(e),g=zv(r),v=n.createProgram(),m,p,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Kr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Kr).join(`
`),p.length>0&&(p+=`
`)):(m=[Ad(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Kr).join(`
`),p=[Ad(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==mi?"#define TONE_MAPPING":"",e.toneMapping!==mi?$t.tonemapping_pars_fragment:"",e.toneMapping!==mi?Bv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",$t.colorspace_pars_fragment,Uv("linearToOutputTexel",e.outputColorSpace),Ov(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Kr).join(`
`)),a=vh(a),a=wd(a,e),a=Td(a,e),o=vh(o),o=wd(o,e),o=Td(o,e),a=Ed(a),o=Ed(o),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===$c?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===$c?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let M=y+m+a,x=y+p+o,S=Md(n,n.VERTEX_SHADER,M),w=Md(n,n.FRAGMENT_SHADER,x);n.attachShader(v,S),n.attachShader(v,w),e.index0AttributeName!==void 0?n.bindAttribLocation(v,0,e.index0AttributeName):e.hasPositionAttribute===!0&&n.bindAttribLocation(v,0,"position"),n.linkProgram(v);function A(I){if(s.debug.checkShaderErrors){let D=n.getProgramInfoLog(v)||"",k=n.getShaderInfoLog(S)||"",N=n.getShaderInfoLog(w)||"",O=D.trim(),z=k.trim(),Y=N.trim(),tt=!0,X=!0;if(n.getProgramParameter(v,n.LINK_STATUS)===!1)if(tt=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(n,v,S,w);else{let j=Sd(n,S,"vertex"),et=Sd(n,w,"fragment");Xt("WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(v,n.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+O+`
`+j+`
`+et)}else O!==""?Wt("WebGLProgram: Program Info Log:",O):(z===""||Y==="")&&(X=!1);X&&(I.diagnostics={runnable:tt,programLog:O,vertexShader:{log:z,prefix:m},fragmentShader:{log:Y,prefix:p}})}n.deleteShader(S),n.deleteShader(w),_=new Ys(n,v),T=Hv(n,v)}let _;this.getUniforms=function(){return _===void 0&&A(this),_};let T;this.getAttributes=function(){return T===void 0&&A(this),T};let R=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=n.getProgramParameter(v,Pv)),R},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Lv++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=S,this.fragmentShader=w,this}var nx=0,xh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let n=this._getShaderCacheForMaterial(t);return n.has(e)===!1&&(n.add(e),e.usedTimes++),n.has(i)===!1&&(n.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new _h(t),e.set(t,i)),i}},_h=class{constructor(t){this.id=nx++,this.code=t,this.usedTimes=0}};function sx(s){return s===Nn||s===Yr||s===$r}function rx(s,t,e,i,n,r){let a=new xr,o=new xh,c=new Set,l=[],u=new Map,f=i.logarithmicDepthBuffer,h=i.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(_){return c.add(_),_===0?"uv":`uv${_}`}function v(_,T,R,I,D,k){let N=I.fog,O=D.geometry,z=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?I.environment:null,Y=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,tt=t.get(_.envMap||z,Y),X=tt&&tt.mapping===Hr?tt.image.height:null,j=d[_.type];_.precision!==null&&(h=i.getMaxPrecision(_.precision),h!==_.precision&&Wt("WebGLProgram.getParameters:",_.precision,"not supported, using",h,"instead."));let et=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Ct=et!==void 0?et.length:0,wt=0;O.morphAttributes.position!==void 0&&(wt=1),O.morphAttributes.normal!==void 0&&(wt=2),O.morphAttributes.color!==void 0&&(wt=3);let re,qt,te,Z;if(j){let Me=Ki[j];re=Me.vertexShader,qt=Me.fragmentShader}else{re=_.vertexShader,qt=_.fragmentShader;let Me=o.getVertexShaderStage(_),de=o.getFragmentShaderStage(_);o.update(_,Me,de),te=Me.id,Z=de.id}let K=s.getRenderTarget(),mt=s.state.buffers.depth.getReversed(),Vt=D.isInstancedMesh===!0,pt=D.isBatchedMesh===!0,zt=!!_.map,ce=!!_.matcap,it=!!tt,rt=!!_.aoMap,ot=!!_.lightMap,lt=!!_.bumpMap&&_.wireframe===!1,ut=!!_.normalMap,Ot=!!_.displacementMap,Nt=!!_.emissiveMap,Ut=!!_.metalnessMap,Ht=!!_.roughnessMap,L=_.anisotropy>0,ie=_.clearcoat>0,Kt=_.dispersion>0,C=_.retroreflectivity>0,b=_.iridescence>0,B=_.sheen>0,G=_.transmission>0,$=L&&!!_.anisotropyMap,ct=ie&&!!_.clearcoatMap,ft=ie&&!!_.clearcoatNormalMap,J=ie&&!!_.clearcoatRoughnessMap,nt=b&&!!_.iridescenceMap,gt=b&&!!_.iridescenceThicknessMap,Ft=B&&!!_.sheenColorMap,yt=B&&!!_.sheenRoughnessMap,vt=!!_.specularMap,Bt=!!_.specularColorMap,Gt=!!_.specularIntensityMap,Jt=G&&!!_.transmissionMap,F=G&&!!_.thicknessMap,xt=!!_.gradientMap,Q=!!_.alphaMap,_t=_.alphaTest>0,Tt=!!_.alphaHash,st=!!_.extensions,kt=mi;_.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(kt=s.toneMapping);let Lt={shaderID:j,shaderType:_.type,shaderName:_.name,vertexShader:re,fragmentShader:qt,defines:_.defines,customVertexShaderID:te,customFragmentShaderID:Z,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:h,batching:pt,batchingColor:pt&&D._colorsTexture!==null,instancing:Vt,instancingColor:Vt&&D.instanceColor!==null,instancingMorph:Vt&&D.morphTexture!==null,outputColorSpace:K===null?s.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:le.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:zt,matcap:ce,envMap:it,envMapMode:it&&tt.mapping,envMapCubeUVHeight:X,aoMap:rt,lightMap:ot,bumpMap:lt,normalMap:ut,displacementMap:Ot,emissiveMap:Nt,normalMapObjectSpace:ut&&_.normalMapType===Wu,normalMapTangentSpace:ut&&_.normalMapType===sl,packedNormalMap:ut&&_.normalMapType===sl&&sx(_.normalMap.format),metalnessMap:Ut,roughnessMap:Ht,anisotropy:L,anisotropyMap:$,clearcoat:ie,clearcoatMap:ct,clearcoatNormalMap:ft,clearcoatRoughnessMap:J,dispersion:Kt,retroreflection:C,iridescence:b,iridescenceMap:nt,iridescenceThicknessMap:gt,sheen:B,sheenColorMap:Ft,sheenRoughnessMap:yt,specularMap:vt,specularColorMap:Bt,specularIntensityMap:Gt,transmission:G,transmissionMap:Jt,thicknessMap:F,gradientMap:xt,opaque:_.transparent===!1&&_.blending===In&&_.alphaToCoverage===!1,alphaMap:Q,alphaTest:_t,alphaHash:Tt,combine:_.combine,mapUv:zt&&g(_.map.channel),aoMapUv:rt&&g(_.aoMap.channel),lightMapUv:ot&&g(_.lightMap.channel),bumpMapUv:lt&&g(_.bumpMap.channel),normalMapUv:ut&&g(_.normalMap.channel),displacementMapUv:Ot&&g(_.displacementMap.channel),emissiveMapUv:Nt&&g(_.emissiveMap.channel),metalnessMapUv:Ut&&g(_.metalnessMap.channel),roughnessMapUv:Ht&&g(_.roughnessMap.channel),anisotropyMapUv:$&&g(_.anisotropyMap.channel),clearcoatMapUv:ct&&g(_.clearcoatMap.channel),clearcoatNormalMapUv:ft&&g(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&g(_.clearcoatRoughnessMap.channel),iridescenceMapUv:nt&&g(_.iridescenceMap.channel),iridescenceThicknessMapUv:gt&&g(_.iridescenceThicknessMap.channel),sheenColorMapUv:Ft&&g(_.sheenColorMap.channel),sheenRoughnessMapUv:yt&&g(_.sheenRoughnessMap.channel),specularMapUv:vt&&g(_.specularMap.channel),specularColorMapUv:Bt&&g(_.specularColorMap.channel),specularIntensityMapUv:Gt&&g(_.specularIntensityMap.channel),transmissionMapUv:Jt&&g(_.transmissionMap.channel),thicknessMapUv:F&&g(_.thicknessMap.channel),alphaMapUv:Q&&g(_.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(ut||L),vertexNormals:!!O.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!O.attributes.uv&&(zt||Q),fog:!!N,useFog:_.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||O.attributes.normal===void 0&&ut===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:mt,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:O.attributes.position!==void 0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:Ct,morphTextureStride:wt,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:k.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:s.shadowMap.enabled&&R.length>0,shadowMapType:s.shadowMap.type,toneMapping:kt,decodeVideoTexture:zt&&_.map.isVideoTexture===!0&&le.getTransfer(_.map.colorSpace)===pe,decodeVideoTextureEmissive:Nt&&_.emissiveMap.isVideoTexture===!0&&le.getTransfer(_.emissiveMap.colorSpace)===pe,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===De,flipSided:_.side===Ze,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:st&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(st&&_.extensions.multiDraw===!0||pt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Lt.vertexUv1s=c.has(1),Lt.vertexUv2s=c.has(2),Lt.vertexUv3s=c.has(3),c.clear(),Lt}function m(_){let T=[];if(_.shaderID?T.push(_.shaderID):(T.push(_.customVertexShaderID),T.push(_.customFragmentShaderID)),_.defines!==void 0)for(let R in _.defines)T.push(R),T.push(_.defines[R]);return _.isRawShaderMaterial===!1&&(p(T,_),y(T,_),T.push(s.outputColorSpace)),T.push(_.customProgramCacheKey),T.join()}function p(_,T){_.push(T.precision),_.push(T.outputColorSpace),_.push(T.envMapMode),_.push(T.envMapCubeUVHeight),_.push(T.mapUv),_.push(T.alphaMapUv),_.push(T.lightMapUv),_.push(T.aoMapUv),_.push(T.bumpMapUv),_.push(T.normalMapUv),_.push(T.displacementMapUv),_.push(T.emissiveMapUv),_.push(T.metalnessMapUv),_.push(T.roughnessMapUv),_.push(T.anisotropyMapUv),_.push(T.clearcoatMapUv),_.push(T.clearcoatNormalMapUv),_.push(T.clearcoatRoughnessMapUv),_.push(T.iridescenceMapUv),_.push(T.iridescenceThicknessMapUv),_.push(T.sheenColorMapUv),_.push(T.sheenRoughnessMapUv),_.push(T.specularMapUv),_.push(T.specularColorMapUv),_.push(T.specularIntensityMapUv),_.push(T.transmissionMapUv),_.push(T.thicknessMapUv),_.push(T.combine),_.push(T.fogExp2),_.push(T.sizeAttenuation),_.push(T.morphTargetsCount),_.push(T.morphAttributeCount),_.push(T.numSunLights),_.push(T.numDirLights),_.push(T.numPointLights),_.push(T.numSpotLights),_.push(T.numSpotLightMaps),_.push(T.numHemiLights),_.push(T.numRectAreaLights),_.push(T.numSunLightShadows),_.push(T.numDirLightShadows),_.push(T.numPointLightShadows),_.push(T.numSpotLightShadows),_.push(T.numSpotLightShadowsWithMaps),_.push(T.numLightProbes),_.push(T.shadowMapType),_.push(T.toneMapping),_.push(T.numClippingPlanes),_.push(T.numClipIntersection),_.push(T.depthPacking)}function y(_,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function M(_){let T=d[_.type],R;if(T){let I=Ki[T];R=ld.clone(I.uniforms)}else R=_.uniforms;return R}function x(_,T){let R=u.get(T);return R!==void 0?++R.usedTimes:(R=new ix(s,T,_,n),l.push(R),u.set(T,R)),R}function S(_){if(--_.usedTimes===0){let T=l.indexOf(_);l[T]=l[l.length-1],l.pop(),u.delete(_.cacheKey),_.destroy()}}function w(_){o.remove(_)}function A(){o.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:M,acquireProgram:x,releaseProgram:S,releaseShaderCache:w,programs:l,dispose:A}}function ax(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function i(a){s.delete(a)}function n(a,o,c){s.get(a)[o]=c}function r(){s=new WeakMap}return{has:t,get:e,remove:i,update:n,dispose:r}}function ox(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function Rd(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Cd(){let s=[],t=0,e=[],i=[],n=[];function r(){t=0,e.length=0,i.length=0,n.length=0}function a(h){let d=0;return h.isInstancedMesh&&(d+=2),h.isSkinnedMesh&&(d+=1),d}function o(h,d,g,v,m,p){let y=s[t];return y===void 0?(y={id:h.id,object:h,geometry:d,material:g,materialVariant:a(h),groupOrder:v,renderOrder:h.renderOrder,z:m,group:p},s[t]=y):(y.id=h.id,y.object=h,y.geometry=d,y.material=g,y.materialVariant=a(h),y.groupOrder=v,y.renderOrder=h.renderOrder,y.z=m,y.group=p),t++,y}function c(h,d,g,v,m,p,y){y.reversedDepth===!0&&(m=-m);let M=o(h,d,g,v,m,p);g.transmission>0?i.push(M):g.transparent===!0?n.push(M):e.push(M)}function l(h,d,g,v,m,p){let y=o(h,d,g,v,m,p);g.transmission>0?i.unshift(y):g.transparent===!0?n.unshift(y):e.unshift(y)}function u(h,d){e.length>1&&e.sort(h||ox),i.length>1&&i.sort(d||Rd),n.length>1&&n.sort(d||Rd)}function f(){for(let h=t,d=s.length;h<d;h++){let g=s[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:i,transparent:n,init:r,push:c,unshift:l,finish:f,sort:u}}function lx(){let s=new WeakMap;function t(i,n){let r=s.get(i),a;return r===void 0?(a=new Cd,s.set(i,[a])):n>=r.length?(a=new Cd,r.push(a)):a=r[n],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function cx(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new P,color:new ht};break;case"SpotLight":e={position:new P,direction:new P,color:new ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new ht,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new ht,groundColor:new ht};break;case"RectAreaLight":e={color:new ht,position:new P,halfWidth:new P,halfHeight:new P};break}return s[t.id]=e,e}}}function hx(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var ux=0;function dx(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function fx(s){let t=new cx,e=hx(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new P);let n=new P,r=new ne,a=new ne;function o(l){let u=0,f=0,h=0;for(let D=0;D<9;D++)i.probe[D].set(0,0,0);let d=0,g=0,v=0,m=0,p=0,y=0,M=0,x=0,S=0,w=0,A=0,_=0,T=0,R=0;l.sort(dx);for(let D=0,k=l.length;D<k;D++){let N=l[D],O=N.color,z=N.intensity,Y=N.distance,tt=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===Nn?tt=N.shadow.map.texture:tt=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)u+=O.r*z,f+=O.g*z,h+=O.b*z;else if(N.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(N.sh.coefficients[X],z);R++}else if(N.isSunLight){let X=t.get(N);if(X.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let j=N.shadow,et=e.get(N);et.shadowIntensity=j.intensity,et.shadowBias=j.bias,et.shadowNormalBias=j.normalBias,et.shadowRadius=j.radius,et.shadowMapSize.copy(j.mapSize).multiply(j.getFrameExtents()),i.sunShadow[g]=et,i.sunShadowMap[g]=tt;let Ct=j.getViewportCount();for(let wt=0;wt<Ct;wt++)i.sunShadowMatrix[v+wt]=j.getMatrix(wt),i.sunShadowCascade[v+wt]=j._cascadeData[wt];v+=Ct,g++}i.sun[d]=X,d++}else if(N.isDirectionalLight){let X=t.get(N);if(X.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let j=N.shadow,et=e.get(N);et.shadowIntensity=j.intensity,et.shadowBias=j.bias,et.shadowNormalBias=j.normalBias,et.shadowRadius=j.radius,et.shadowMapSize=j.mapSize,i.directionalShadow[m]=et,i.directionalShadowMap[m]=tt,i.directionalShadowMatrix[m]=N.shadow.matrix,S++}i.directional[m]=X,m++}else if(N.isSpotLight){let X=t.get(N);X.position.setFromMatrixPosition(N.matrixWorld),X.color.copy(O).multiplyScalar(z),X.distance=Y,X.coneCos=Math.cos(N.angle),X.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),X.decay=N.decay,i.spot[y]=X;let j=N.shadow;if(N.map&&(i.spotLightMap[_]=N.map,_++,j.updateMatrices(N),N.castShadow&&T++),i.spotLightMatrix[y]=j.matrix,N.castShadow){let et=e.get(N);et.shadowIntensity=j.intensity,et.shadowBias=j.bias,et.shadowNormalBias=j.normalBias,et.shadowRadius=j.radius,et.shadowMapSize=j.mapSize,i.spotShadow[y]=et,i.spotShadowMap[y]=tt,A++}y++}else if(N.isRectAreaLight){let X=t.get(N);X.color.copy(O).multiplyScalar(z),X.halfWidth.set(N.width*.5,0,0),X.halfHeight.set(0,N.height*.5,0),i.rectArea[M]=X,M++}else if(N.isPointLight){let X=t.get(N);if(X.color.copy(N.color).multiplyScalar(N.intensity),X.distance=N.distance,X.decay=N.decay,N.castShadow){let j=N.shadow,et=e.get(N);et.shadowIntensity=j.intensity,et.shadowBias=j.bias,et.shadowNormalBias=j.normalBias,et.shadowRadius=j.radius,et.shadowMapSize=j.mapSize,et.shadowCameraNear=j.camera.near,et.shadowCameraFar=j.camera.far,i.pointShadow[p]=et,i.pointShadowMap[p]=tt,i.pointShadowMatrix[p]=N.shadow.matrix,w++}i.point[p]=X,p++}else if(N.isHemisphereLight){let X=t.get(N);X.skyColor.copy(N.color).multiplyScalar(z),X.groundColor.copy(N.groundColor).multiplyScalar(z),i.hemi[x]=X,x++}}M>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Mt.LTC_FLOAT_1,i.rectAreaLTC2=Mt.LTC_FLOAT_2):(i.rectAreaLTC1=Mt.LTC_HALF_1,i.rectAreaLTC2=Mt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;let I=i.hash;(I.sunLength!==d||I.directionalLength!==m||I.pointLength!==p||I.spotLength!==y||I.rectAreaLength!==M||I.hemiLength!==x||I.numSunShadows!==g||I.numDirectionalShadows!==S||I.numPointShadows!==w||I.numSpotShadows!==A||I.numSpotMaps!==_||I.numLightProbes!==R)&&(i.sun.length=d,i.directional.length=m,i.spot.length=y,i.rectArea.length=M,i.point.length=p,i.hemi.length=x,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=v,i.sunShadowCascade.length=v,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.directionalShadowMatrix.length=S,i.pointShadow.length=w,i.pointShadowMap.length=w,i.pointShadowMatrix.length=w,i.spotShadow.length=A,i.spotShadowMap.length=A,i.spotLightMatrix.length=A+_-T,i.spotLightMap.length=_,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=R,I.sunLength=d,I.directionalLength=m,I.pointLength=p,I.spotLength=y,I.rectAreaLength=M,I.hemiLength=x,I.numSunShadows=g,I.numDirectionalShadows=S,I.numPointShadows=w,I.numSpotShadows=A,I.numSpotMaps=_,I.numLightProbes=R,i.version=ux++)}function c(l,u){let f=0,h=0,d=0,g=0,v=0,m=0,p=u.matrixWorldInverse;for(let y=0,M=l.length;y<M;y++){let x=l[y];if(x.isSunLight){let S=i.sun[f];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(p),f++}else if(x.isDirectionalLight){let S=i.directional[h];S.direction.setFromMatrixPosition(x.matrixWorld),n.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(n),S.direction.transformDirection(p),h++}else if(x.isSpotLight){let S=i.spot[g];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(x.matrixWorld),n.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(n),S.direction.transformDirection(p),g++}else if(x.isRectAreaLight){let S=i.rectArea[v];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(p),a.identity(),r.copy(x.matrixWorld),r.premultiply(p),a.extractRotation(r),S.halfWidth.set(x.width*.5,0,0),S.halfHeight.set(0,x.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),v++}else if(x.isPointLight){let S=i.point[d];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(p),d++}else if(x.isHemisphereLight){let S=i.hemi[m];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(p),m++}}}return{setup:o,setupView:c,state:i}}function Id(s){let t=new fx(s),e=[],i=[],n=[];function r(h){f.camera=h,e.length=0,i.length=0,n.length=0}function a(h){e.push(h)}function o(h){i.push(h)}function c(h){n.push(h)}function l(){t.setup(e)}function u(h){t.setupView(e,h)}let f={lightsArray:e,shadowsArray:i,lightProbeGridArray:n,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:l,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function px(s){let t=new WeakMap;function e(n,r=0){let a=t.get(n),o;return a===void 0?(o=new Id(s),t.set(n,[o])):r>=a.length?(o=new Id(s),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}var mx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,gx=`uniform sampler2D shadow_pass;
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
}`,vx=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],xx=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],Pd=new ne,Jr=new P,dh=new P;function _x(s,t,e){let i=new Us,n=new at,r=new at,a=new ge,o=new io,c=new no,l={},u=e.maxTextureSize,f={[$i]:Ze,[Ze]:$i,[De]:De},h=new se({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:mx,fragmentShader:gx}),d=h.clone();d.defines.HORIZONTAL_PASS=1;let g=new xe;g.setAttribute("position",new ke(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new dt(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=es;let p=this.type;this.render=function(w,A,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===Mu&&(Wt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=es);let T=s.getRenderTarget(),R=s.getActiveCubeFace(),I=s.getActiveMipmapLevel(),D=s.state;D.setBlending(Zi),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let k=p!==this.type;k&&A.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(O=>O.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,O=w.length;N<O;N++){let z=w[N],Y=z.shadow;if(Y===void 0){Wt("WebGLShadowMap:",z,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;n.copy(Y.mapSize);let tt=Y.getFrameExtents();n.multiply(tt),r.copy(Y.mapSize),(n.x>u||n.y>u)&&(n.x>u&&(r.x=Math.floor(u/tt.x),n.x=r.x*tt.x,Y.mapSize.x=r.x),n.y>u&&(r.y=Math.floor(u/tt.y),n.y=r.y*tt.y,Y.mapSize.y=r.y));let X=s.state.buffers.depth.getReversed();if(Y.camera._reversedDepth=X,Y.map===null||k===!0){if(Y.map!==null&&(Y.map.depthTexture!==null&&(Y.map.depthTexture.dispose(),Y.map.depthTexture=null),Y.map.dispose()),this.type===Vs){if(z.isPointLight){Wt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Y.map=new $e(n.x,n.y,{format:Nn,type:gi,minFilter:Pe,magFilter:Pe,generateMipmaps:!1}),Y.map.texture.name=z.name+".shadowMap",Y.map.depthTexture=new Tn(n.x,n.y,Mi),Y.map.depthTexture.name=z.name+".shadowMapDepth",Y.map.depthTexture.format=Vi,Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=Ye,Y.map.depthTexture.magFilter=Ye}else z.isPointLight?(Y.map=new cl(n.x),Y.map.depthTexture=new Ya(n.x,Ni)):(Y.map=new $e(n.x,n.y),Y.map.depthTexture=new Tn(n.x,n.y,Ni)),Y.map.depthTexture.name=z.name+".shadowMap",Y.map.depthTexture.format=Vi,this.type===es?(Y.map.depthTexture.compareFunction=X?al:rl,Y.map.depthTexture.minFilter=Pe,Y.map.depthTexture.magFilter=Pe):(Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=Ye,Y.map.depthTexture.magFilter=Ye);Y.camera.updateProjectionMatrix()}Y.map.isWebGLCubeRenderTarget!==!0&&(Y.map.width!==n.x||Y.map.height!==n.y)&&Y.map.setSize(n.x,n.y);let j=Y.map.isWebGLCubeRenderTarget?6:Y.getViewportCount();z.isPointLight!==!0&&Y.updateMatrices(z,_);for(let et=0;et<j;et++){let Ct=Y.getCamera(et);if(z.isPointLight){let wt=Y.camera,re=Y.matrix,qt=z.distance||wt.far;qt!==wt.far&&(wt.far=qt,wt.updateProjectionMatrix()),Jr.setFromMatrixPosition(z.matrixWorld),wt.position.copy(Jr),dh.copy(wt.position),dh.add(vx[et]),wt.up.copy(xx[et]),wt.lookAt(dh),wt.updateMatrixWorld(),re.makeTranslation(-Jr.x,-Jr.y,-Jr.z),Pd.multiplyMatrices(wt.projectionMatrix,wt.matrixWorldInverse),Y._frustum.setFromProjectionMatrix(Pd,wt.coordinateSystem,wt.reversedDepth)}if(Y.map.isWebGLCubeRenderTarget)s.setRenderTarget(Y.map,et),s.clear();else{et===0&&(s.setRenderTarget(Y.map),s.clear());let wt=Y.getViewport(et);a.set(r.x*wt.x,r.y*wt.y,r.x*wt.z,r.y*wt.w),D.viewport(a)}i=Y.getFrustum(et),x(A,_,Ct,z,this.type)}Y.isPointLightShadow!==!0&&this.type===Vs&&y(Y,_),Y.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(T,R,I)};function y(w,A){let _=t.update(v);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null?w.mapPass=new $e(n.x,n.y,{format:Nn,type:gi}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),h.uniforms.shadow_pass.value=w.map.depthTexture,h.uniforms.resolution.value.set(w.map.width,w.map.height),h.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(A,null,_,h,v,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value.set(w.map.width,w.map.height),d.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(A,null,_,d,v,null)}function M(w,A,_,T){let R=null,I=_.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(I!==void 0)R=I;else if(R=_.isPointLight===!0?c:o,s.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let D=R.uuid,k=A.uuid,N=l[D];N===void 0&&(N={},l[D]=N);let O=N[k];O===void 0&&(O=R.clone(),N[k]=O,A.addEventListener("dispose",S)),R=O}if(R.visible=A.visible,R.wireframe=A.wireframe,T===Vs?R.side=A.shadowSide!==null?A.shadowSide:A.side:R.side=A.shadowSide!==null?A.shadowSide:f[A.side],R.alphaMap=A.alphaMap,R.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,R.map=A.map,R.clipShadows=A.clipShadows,R.clippingPlanes=A.clippingPlanes,R.clipIntersection=A.clipIntersection,R.displacementMap=A.displacementMap,R.displacementScale=A.displacementScale,R.displacementBias=A.displacementBias,R.wireframeLinewidth=A.wireframeLinewidth,R.linewidth=A.linewidth,_.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let D=s.properties.get(R);D.light=_}return R}function x(w,A,_,T,R){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&R===Vs)&&(!w.frustumCulled||w.intersectsFrustum(i))){w.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,w.matrixWorld);let k=t.update(w),N=w.material;if(Array.isArray(N)){let O=k.groups;for(let z=0,Y=O.length;z<Y;z++){let tt=O[z],X=N[tt.materialIndex];if(X&&X.visible){let j=M(w,X,T,R);w.onBeforeShadow(s,w,A,_,k,j,tt),s.renderBufferDirect(_,null,k,j,w,tt),w.onAfterShadow(s,w,A,_,k,j,tt)}}}else if(N.visible){let O=M(w,N,T,R);w.onBeforeShadow(s,w,A,_,k,O,null),s.renderBufferDirect(_,null,k,O,w,null),w.onAfterShadow(s,w,A,_,k,O,null)}}let D=w.children;for(let k=0,N=D.length;k<N;k++)x(D[k],A,_,T,R)}function S(w){w.target.removeEventListener("dispose",S);for(let _ in l){let T=l[_],R=w.target.uuid;R in T&&(T[R].dispose(),delete T[R])}}}function yx(s,t){function e(){let F=!1,xt=new ge,Q=null,_t=new ge(0,0,0,0);return{setMask:function(Tt){Q!==Tt&&!F&&(s.colorMask(Tt,Tt,Tt,Tt),Q=Tt)},setLocked:function(Tt){F=Tt},setClear:function(Tt,st,kt,Lt,Me){Me===!0&&(Tt*=Lt,st*=Lt,kt*=Lt),xt.set(Tt,st,kt,Lt),_t.equals(xt)===!1&&(s.clearColor(Tt,st,kt,Lt),_t.copy(xt))},reset:function(){F=!1,Q=null,_t.set(-1,0,0,0)}}}function i(){let F=!1,xt=!1,Q=null,_t=null,Tt=null;return{setReversed:function(st){if(xt!==st){let kt=t.get("EXT_clip_control");st?kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.ZERO_TO_ONE_EXT):kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.NEGATIVE_ONE_TO_ONE_EXT),xt=st;let Lt=Tt;Tt=null,this.setClear(Lt)}},getReversed:function(){return xt},setTest:function(st){st?K(s.DEPTH_TEST):mt(s.DEPTH_TEST)},setMask:function(st){Q!==st&&!F&&(s.depthMask(st),Q=st)},setFunc:function(st){if(xt&&(st=id[st]),_t!==st){switch(st){case Na:s.depthFunc(s.NEVER);break;case Ua:s.depthFunc(s.ALWAYS);break;case Fa:s.depthFunc(s.LESS);break;case Is:s.depthFunc(s.LEQUAL);break;case Ba:s.depthFunc(s.EQUAL);break;case Oa:s.depthFunc(s.GEQUAL);break;case ka:s.depthFunc(s.GREATER);break;case za:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}_t=st}},setLocked:function(st){F=st},setClear:function(st){Tt!==st&&(Tt=st,xt&&(st=1-st),s.clearDepth(st))},reset:function(){F=!1,Q=null,_t=null,Tt=null,xt=!1}}}function n(){let F=!1,xt=null,Q=null,_t=null,Tt=null,st=null,kt=null,Lt=null,Me=null;return{setTest:function(de){F||(de?K(s.STENCIL_TEST):mt(s.STENCIL_TEST))},setMask:function(de){xt!==de&&!F&&(s.stencilMask(de),xt=de)},setFunc:function(de,Ei,ki){(Q!==de||_t!==Ei||Tt!==ki)&&(s.stencilFunc(de,Ei,ki),Q=de,_t=Ei,Tt=ki)},setOp:function(de,Ei,ki){(st!==de||kt!==Ei||Lt!==ki)&&(s.stencilOp(de,Ei,ki),st=de,kt=Ei,Lt=ki)},setLocked:function(de){F=de},setClear:function(de){Me!==de&&(s.clearStencil(de),Me=de)},reset:function(){F=!1,xt=null,Q=null,_t=null,Tt=null,st=null,kt=null,Lt=null,Me=null}}}let r=new e,a=new i,o=new n,c=new WeakMap,l=new WeakMap,u={},f={},h={},d=new WeakMap,g=[],v=null,m=!1,p=null,y=null,M=null,x=null,S=null,w=null,A=null,_=new ht(0,0,0),T=0,R=!1,I=null,D=null,k=null,N=null,O=null,z=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Y=!1,tt=0,X=s.getParameter(s.VERSION);X.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec(X)[1]),Y=tt>=1):X.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),Y=tt>=2);let j=null,et={},Ct=s.getParameter(s.SCISSOR_BOX),wt=s.getParameter(s.VIEWPORT),re=new ge().fromArray(Ct),qt=new ge().fromArray(wt);function te(F,xt,Q,_t){let Tt=new Uint8Array(4),st=s.createTexture();s.bindTexture(F,st),s.texParameteri(F,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(F,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let kt=0;kt<Q;kt++)F===s.TEXTURE_3D||F===s.TEXTURE_2D_ARRAY?s.texImage3D(xt,0,s.RGBA,1,1,_t,0,s.RGBA,s.UNSIGNED_BYTE,Tt):s.texImage2D(xt+kt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Tt);return st}let Z={};Z[s.TEXTURE_2D]=te(s.TEXTURE_2D,s.TEXTURE_2D,1),Z[s.TEXTURE_CUBE_MAP]=te(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[s.TEXTURE_2D_ARRAY]=te(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Z[s.TEXTURE_3D]=te(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),K(s.DEPTH_TEST),a.setFunc(Is),lt(!1),ut(Ac),K(s.CULL_FACE),rt(Zi);function K(F){u[F]!==!0&&(s.enable(F),u[F]=!0)}function mt(F){u[F]!==!1&&(s.disable(F),u[F]=!1)}function Vt(F,xt){return h[F]!==xt?(s.bindFramebuffer(F,xt),h[F]=xt,F===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=xt),F===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=xt),!0):!1}function pt(F,xt){let Q=g,_t=!1;if(F){Q=d.get(xt),Q===void 0&&(Q=[],d.set(xt,Q));let Tt=F.textures;if(Q.length!==Tt.length||Q[0]!==s.COLOR_ATTACHMENT0){for(let st=0,kt=Tt.length;st<kt;st++)Q[st]=s.COLOR_ATTACHMENT0+st;Q.length=Tt.length,_t=!0}}else Q[0]!==s.BACK&&(Q[0]=s.BACK,_t=!0);_t&&s.drawBuffers(Q)}function zt(F){return v!==F?(s.useProgram(F),v=F,!0):!1}let ce={[is]:s.FUNC_ADD,[Su]:s.FUNC_SUBTRACT,[wu]:s.FUNC_REVERSE_SUBTRACT};ce[Tu]=s.MIN,ce[Eu]=s.MAX;let it={[Au]:s.ZERO,[Ru]:s.ONE,[Cu]:s.SRC_COLOR,[Ic]:s.SRC_ALPHA,[Uu]:s.SRC_ALPHA_SATURATE,[Du]:s.DST_COLOR,[Pu]:s.DST_ALPHA,[Iu]:s.ONE_MINUS_SRC_COLOR,[Pc]:s.ONE_MINUS_SRC_ALPHA,[Nu]:s.ONE_MINUS_DST_COLOR,[Lu]:s.ONE_MINUS_DST_ALPHA,[Fu]:s.CONSTANT_COLOR,[Bu]:s.ONE_MINUS_CONSTANT_COLOR,[Ou]:s.CONSTANT_ALPHA,[ku]:s.ONE_MINUS_CONSTANT_ALPHA};function rt(F,xt,Q,_t,Tt,st,kt,Lt,Me,de){if(F===Zi){m===!0&&(mt(s.BLEND),m=!1);return}if(m===!1&&(K(s.BLEND),m=!0),F!==bu){if(F!==p||de!==R){if((y!==is||S!==is)&&(s.blendEquation(s.FUNC_ADD),y=is,S=is),de)switch(F){case In:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Fe:s.blendFunc(s.ONE,s.ONE);break;case Rc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Cc:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Xt("WebGLState: Invalid blending: ",F);break}else switch(F){case In:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Fe:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Rc:Xt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Cc:Xt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Xt("WebGLState: Invalid blending: ",F);break}M=null,x=null,w=null,A=null,_.set(0,0,0),T=0,p=F,R=de}return}Tt=Tt||xt,st=st||Q,kt=kt||_t,(xt!==y||Tt!==S)&&(s.blendEquationSeparate(ce[xt],ce[Tt]),y=xt,S=Tt),(Q!==M||_t!==x||st!==w||kt!==A)&&(s.blendFuncSeparate(it[Q],it[_t],it[st],it[kt]),M=Q,x=_t,w=st,A=kt),(Lt.equals(_)===!1||Me!==T)&&(s.blendColor(Lt.r,Lt.g,Lt.b,Me),_.copy(Lt),T=Me),p=F,R=!1}function ot(F,xt){F.side===De?mt(s.CULL_FACE):K(s.CULL_FACE);let Q=F.side===Ze;xt&&(Q=!Q),lt(Q),F.blending===In&&F.transparent===!1?rt(Zi):rt(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),r.setMask(F.colorWrite);let _t=F.stencilWrite;o.setTest(_t),_t&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Nt(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?K(s.SAMPLE_ALPHA_TO_COVERAGE):mt(s.SAMPLE_ALPHA_TO_COVERAGE)}function lt(F){I!==F&&(F?s.frontFace(s.CW):s.frontFace(s.CCW),I=F)}function ut(F){F!==_u?(K(s.CULL_FACE),F!==D&&(F===Ac?s.cullFace(s.BACK):F===yu?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):mt(s.CULL_FACE),D=F}function Ot(F){F!==k&&(Y&&s.lineWidth(F),k=F)}function Nt(F,xt,Q){F?(K(s.POLYGON_OFFSET_FILL),(N!==xt||O!==Q)&&(N=xt,O=Q,a.getReversed()&&(xt=-xt),s.polygonOffset(xt,Q))):mt(s.POLYGON_OFFSET_FILL)}function Ut(F){F?K(s.SCISSOR_TEST):mt(s.SCISSOR_TEST)}function Ht(F){F===void 0&&(F=s.TEXTURE0+z-1),j!==F&&(s.activeTexture(F),j=F)}function L(F,xt,Q){Q===void 0&&(j===null?Q=s.TEXTURE0+z-1:Q=j);let _t=et[Q];_t===void 0&&(_t={type:void 0,texture:void 0},et[Q]=_t),(_t.type!==F||_t.texture!==xt)&&(j!==Q&&(s.activeTexture(Q),j=Q),s.bindTexture(F,xt||Z[F]),_t.type=F,_t.texture=xt)}function ie(){let F=et[j];F!==void 0&&F.type!==void 0&&(s.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function Kt(){try{s.compressedTexImage2D(...arguments)}catch(F){Xt("WebGLState:",F)}}function C(){try{s.compressedTexImage3D(...arguments)}catch(F){Xt("WebGLState:",F)}}function b(){try{s.texSubImage2D(...arguments)}catch(F){Xt("WebGLState:",F)}}function B(){try{s.texSubImage3D(...arguments)}catch(F){Xt("WebGLState:",F)}}function G(){try{s.compressedTexSubImage2D(...arguments)}catch(F){Xt("WebGLState:",F)}}function $(){try{s.compressedTexSubImage3D(...arguments)}catch(F){Xt("WebGLState:",F)}}function ct(){try{s.texStorage2D(...arguments)}catch(F){Xt("WebGLState:",F)}}function ft(){try{s.texStorage3D(...arguments)}catch(F){Xt("WebGLState:",F)}}function J(){try{s.texImage2D(...arguments)}catch(F){Xt("WebGLState:",F)}}function nt(){try{s.texImage3D(...arguments)}catch(F){Xt("WebGLState:",F)}}function gt(F){return f[F]!==void 0?f[F]:s.getParameter(F)}function Ft(F,xt){f[F]!==xt&&(s.pixelStorei(F,xt),f[F]=xt)}function yt(F){re.equals(F)===!1&&(s.scissor(F.x,F.y,F.z,F.w),re.copy(F))}function vt(F){qt.equals(F)===!1&&(s.viewport(F.x,F.y,F.z,F.w),qt.copy(F))}function Bt(F,xt){let Q=l.get(xt);Q===void 0&&(Q=new WeakMap,l.set(xt,Q));let _t=Q.get(F);_t===void 0&&(_t=s.getUniformBlockIndex(xt,F.name),Q.set(F,_t))}function Gt(F,xt){let _t=l.get(xt).get(F);c.get(xt)!==_t&&(s.uniformBlockBinding(xt,_t,F.__bindingPointIndex),c.set(xt,_t))}function Jt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),u={},f={},j=null,et={},h={},d=new WeakMap,g=[],v=null,m=!1,p=null,y=null,M=null,x=null,S=null,w=null,A=null,_=new ht(0,0,0),T=0,R=!1,I=null,D=null,k=null,N=null,O=null,re.set(0,0,s.canvas.width,s.canvas.height),qt.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:K,disable:mt,bindFramebuffer:Vt,drawBuffers:pt,useProgram:zt,setBlending:rt,setMaterial:ot,setFlipSided:lt,setCullFace:ut,setLineWidth:Ot,setPolygonOffset:Nt,setScissorTest:Ut,activeTexture:Ht,bindTexture:L,unbindTexture:ie,compressedTexImage2D:Kt,compressedTexImage3D:C,texImage2D:J,texImage3D:nt,pixelStorei:Ft,getParameter:gt,updateUBOMapping:Bt,uniformBlockBinding:Gt,texStorage2D:ct,texStorage3D:ft,texSubImage2D:b,texSubImage3D:B,compressedTexSubImage2D:G,compressedTexSubImage3D:$,scissor:yt,viewport:vt,reset:Jt}}function Mx(s,t,e,i,n,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new at,u=new WeakMap,f=new Set,h,d=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(C,b){return g?new OffscreenCanvas(C,b):gr("canvas")}function m(C,b,B){let G=1,$=Kt(C);if(($.width>B||$.height>B)&&(G=B/Math.max($.width,$.height)),G<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let ct=Math.floor(G*$.width),ft=Math.floor(G*$.height);h===void 0&&(h=v(ct,ft));let J=b?v(ct,ft):h;return J.width=ct,J.height=ft,J.getContext("2d").drawImage(C,0,0,ct,ft),Wt("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+ct+"x"+ft+")."),J}else return"data"in C&&Wt("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),C;return C}function p(C){return C.generateMipmaps}function y(C){s.generateMipmap(C)}function M(C){return C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?s.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function x(C,b,B,G,$,ct=!1){if(C!==null){if(s[C]!==void 0)return s[C];Wt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ft;G&&(ft=t.get("EXT_texture_norm16"),ft||Wt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=b;if(b===s.RED&&(B===s.FLOAT&&(J=s.R32F),B===s.HALF_FLOAT&&(J=s.R16F),B===s.UNSIGNED_BYTE&&(J=s.R8),B===s.UNSIGNED_SHORT&&ft&&(J=ft.R16_EXT),B===s.SHORT&&ft&&(J=ft.R16_SNORM_EXT)),b===s.RED_INTEGER&&(B===s.UNSIGNED_BYTE&&(J=s.R8UI),B===s.UNSIGNED_SHORT&&(J=s.R16UI),B===s.UNSIGNED_INT&&(J=s.R32UI),B===s.BYTE&&(J=s.R8I),B===s.SHORT&&(J=s.R16I),B===s.INT&&(J=s.R32I)),b===s.RG&&(B===s.FLOAT&&(J=s.RG32F),B===s.HALF_FLOAT&&(J=s.RG16F),B===s.UNSIGNED_BYTE&&(J=s.RG8),B===s.UNSIGNED_SHORT&&ft&&(J=ft.RG16_EXT),B===s.SHORT&&ft&&(J=ft.RG16_SNORM_EXT)),b===s.RG_INTEGER&&(B===s.UNSIGNED_BYTE&&(J=s.RG8UI),B===s.UNSIGNED_SHORT&&(J=s.RG16UI),B===s.UNSIGNED_INT&&(J=s.RG32UI),B===s.BYTE&&(J=s.RG8I),B===s.SHORT&&(J=s.RG16I),B===s.INT&&(J=s.RG32I)),b===s.RGB_INTEGER&&(B===s.UNSIGNED_BYTE&&(J=s.RGB8UI),B===s.UNSIGNED_SHORT&&(J=s.RGB16UI),B===s.UNSIGNED_INT&&(J=s.RGB32UI),B===s.BYTE&&(J=s.RGB8I),B===s.SHORT&&(J=s.RGB16I),B===s.INT&&(J=s.RGB32I)),b===s.RGBA_INTEGER&&(B===s.UNSIGNED_BYTE&&(J=s.RGBA8UI),B===s.UNSIGNED_SHORT&&(J=s.RGBA16UI),B===s.UNSIGNED_INT&&(J=s.RGBA32UI),B===s.BYTE&&(J=s.RGBA8I),B===s.SHORT&&(J=s.RGBA16I),B===s.INT&&(J=s.RGBA32I)),b===s.RGB&&(B===s.UNSIGNED_SHORT&&ft&&(J=ft.RGB16_EXT),B===s.SHORT&&ft&&(J=ft.RGB16_SNORM_EXT),B===s.UNSIGNED_INT_5_9_9_9_REV&&(J=s.RGB9_E5),B===s.UNSIGNED_INT_10F_11F_11F_REV&&(J=s.R11F_G11F_B10F)),b===s.RGBA){let nt=ct?mr:le.getTransfer($);B===s.FLOAT&&(J=s.RGBA32F),B===s.HALF_FLOAT&&(J=s.RGBA16F),B===s.UNSIGNED_BYTE&&(J=nt===pe?s.SRGB8_ALPHA8:s.RGBA8),B===s.UNSIGNED_SHORT&&ft&&(J=ft.RGBA16_EXT),B===s.SHORT&&ft&&(J=ft.RGBA16_SNORM_EXT),B===s.UNSIGNED_SHORT_4_4_4_4&&(J=s.RGBA4),B===s.UNSIGNED_SHORT_5_5_5_1&&(J=s.RGB5_A1)}return(J===s.R16F||J===s.R32F||J===s.RG16F||J===s.RG32F||J===s.RGBA16F||J===s.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function S(C,b){let B;return C?b===null||b===Ni||b===Ws?B=s.DEPTH24_STENCIL8:b===Mi?B=s.DEPTH32F_STENCIL8:b===Gs&&(B=s.DEPTH24_STENCIL8,Wt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Ni||b===Ws?B=s.DEPTH_COMPONENT24:b===Mi?B=s.DEPTH_COMPONENT32F:b===Gs&&(B=s.DEPTH_COMPONENT16),B}function w(C,b){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==Ye&&C.minFilter!==Pe?Math.log2(Math.max(b.width,b.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?b.mipmaps.length:1}function A(C){let b=C.target;b.removeEventListener("dispose",A),T(b),b.isVideoTexture&&u.delete(b),b.isHTMLTexture&&f.delete(b)}function _(C){let b=C.target;b.removeEventListener("dispose",_),I(b)}function T(C){let b=i.get(C);if(b.__webglInit===void 0)return;let B=C.source,G=d.get(B);if(G){let $=G[b.__cacheKey];$.usedTimes--,$.usedTimes===0&&R(C),Object.keys(G).length===0&&d.delete(B)}i.remove(C)}function R(C){let b=i.get(C);s.deleteTexture(b.__webglTexture);let B=C.source,G=d.get(B);delete G[b.__cacheKey],a.memory.textures--}function I(C){let b=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(b.__webglFramebuffer[G]))for(let $=0;$<b.__webglFramebuffer[G].length;$++)s.deleteFramebuffer(b.__webglFramebuffer[G][$]);else s.deleteFramebuffer(b.__webglFramebuffer[G]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[G])}else{if(Array.isArray(b.__webglFramebuffer))for(let G=0;G<b.__webglFramebuffer.length;G++)s.deleteFramebuffer(b.__webglFramebuffer[G]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let G=0;G<b.__webglColorRenderbuffer.length;G++)b.__webglColorRenderbuffer[G]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[G]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let B=C.textures;for(let G=0,$=B.length;G<$;G++){let ct=i.get(B[G]);ct.__webglTexture&&(s.deleteTexture(ct.__webglTexture),a.memory.textures--),i.remove(B[G])}i.remove(C)}let D=0;function k(){D=0}function N(){return D}function O(C){D=C}function z(){let C=D;return C>=n.maxTextures&&Wt("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+n.maxTextures),D+=1,C}function Y(C){let b=[];return b.push(C.wrapS),b.push(C.wrapT),b.push(C.wrapR||0),b.push(C.magFilter),b.push(C.minFilter),b.push(C.anisotropy),b.push(C.internalFormat),b.push(C.format),b.push(C.type),b.push(C.generateMipmaps),b.push(C.premultiplyAlpha),b.push(C.flipY),b.push(C.unpackAlignment),b.push(C.colorSpace),b.join()}function tt(C,b){let B=i.get(C);if(C.isVideoTexture&&L(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&B.__version!==C.version){let G=C.image;if(G===null)Wt("WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)Wt("WebGLRenderer: Texture marked for update but image is incomplete");else{mt(B,C,b);return}}else C.isExternalTexture&&(B.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,B.__webglTexture,s.TEXTURE0+b)}function X(C,b){let B=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&B.__version!==C.version){mt(B,C,b);return}else C.isExternalTexture&&(B.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,B.__webglTexture,s.TEXTURE0+b)}function j(C,b){let B=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&B.__version!==C.version){mt(B,C,b);return}e.bindTexture(s.TEXTURE_3D,B.__webglTexture,s.TEXTURE0+b)}function et(C,b){let B=i.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&B.__version!==C.version){Vt(B,C,b);return}e.bindTexture(s.TEXTURE_CUBE_MAP,B.__webglTexture,s.TEXTURE0+b)}let Ct={[cn]:s.REPEAT,[ii]:s.CLAMP_TO_EDGE,[Ha]:s.MIRRORED_REPEAT},wt={[Ye]:s.NEAREST,[Vu]:s.NEAREST_MIPMAP_NEAREST,[Vr]:s.NEAREST_MIPMAP_LINEAR,[Pe]:s.LINEAR,[yo]:s.LINEAR_MIPMAP_NEAREST,[Ln]:s.LINEAR_MIPMAP_LINEAR},re={[qu]:s.NEVER,[Ku]:s.ALWAYS,[Yu]:s.LESS,[rl]:s.LEQUAL,[$u]:s.EQUAL,[al]:s.GEQUAL,[Zu]:s.GREATER,[Ju]:s.NOTEQUAL};function qt(C,b){if(b.type===Mi&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Pe||b.magFilter===yo||b.magFilter===Vr||b.magFilter===Ln||b.minFilter===Pe||b.minFilter===yo||b.minFilter===Vr||b.minFilter===Ln)&&Wt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(C,s.TEXTURE_WRAP_S,Ct[b.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,Ct[b.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,Ct[b.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,wt[b.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,wt[b.minFilter]),b.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,re[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Ye||b.minFilter!==Vr&&b.minFilter!==Ln||b.type===Mi&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){let B=t.get("EXT_texture_filter_anisotropic");s.texParameterf(C,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,n.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function te(C,b){let B=!1;C.__webglInit===void 0&&(C.__webglInit=!0,b.addEventListener("dispose",A));let G=b.source,$=d.get(G);$===void 0&&($={},d.set(G,$));let ct=Y(b);if(ct!==C.__cacheKey){$[ct]===void 0&&($[ct]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,B=!0),$[ct].usedTimes++;let ft=$[C.__cacheKey];ft!==void 0&&($[C.__cacheKey].usedTimes--,ft.usedTimes===0&&R(b)),C.__cacheKey=ct,C.__webglTexture=$[ct].texture}return B}function Z(C,b,B){return Math.floor(Math.floor(C/B)/b)}function K(C,b,B,G){let ct=C.updateRanges;if(ct.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,b.width,b.height,B,G,b.data);else{ct.sort((Ft,yt)=>Ft.start-yt.start);let ft=0;for(let Ft=1;Ft<ct.length;Ft++){let yt=ct[ft],vt=ct[Ft],Bt=yt.start+yt.count,Gt=Z(vt.start,b.width,4),Jt=Z(yt.start,b.width,4);vt.start<=Bt+1&&Gt===Jt&&Z(vt.start+vt.count-1,b.width,4)===Gt?yt.count=Math.max(yt.count,vt.start+vt.count-yt.start):(++ft,ct[ft]=vt)}ct.length=ft+1;let J=e.getParameter(s.UNPACK_ROW_LENGTH),nt=e.getParameter(s.UNPACK_SKIP_PIXELS),gt=e.getParameter(s.UNPACK_SKIP_ROWS);e.pixelStorei(s.UNPACK_ROW_LENGTH,b.width);for(let Ft=0,yt=ct.length;Ft<yt;Ft++){let vt=ct[Ft],Bt=Math.floor(vt.start/4),Gt=Math.ceil(vt.count/4),Jt=Bt%b.width,F=Math.floor(Bt/b.width),xt=Gt,Q=1;e.pixelStorei(s.UNPACK_SKIP_PIXELS,Jt),e.pixelStorei(s.UNPACK_SKIP_ROWS,F),e.texSubImage2D(s.TEXTURE_2D,0,Jt,F,xt,Q,B,G,b.data)}C.clearUpdateRanges(),e.pixelStorei(s.UNPACK_ROW_LENGTH,J),e.pixelStorei(s.UNPACK_SKIP_PIXELS,nt),e.pixelStorei(s.UNPACK_SKIP_ROWS,gt)}}function mt(C,b,B){let G=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(G=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(G=s.TEXTURE_3D);let $=te(C,b),ct=b.source;e.bindTexture(G,C.__webglTexture,s.TEXTURE0+B);let ft=i.get(ct);if(ct.version!==ft.__version||$===!0){if(e.activeTexture(s.TEXTURE0+B),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){let Q=le.getPrimaries(le.workingColorSpace),_t=b.colorSpace===pn?null:le.getPrimaries(b.colorSpace),Tt=b.colorSpace===pn||Q===_t?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt)}e.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment);let nt=m(b.image,!1,n.maxTextureSize);nt=ie(b,nt);let gt=r.convert(b.format,b.colorSpace),Ft=r.convert(b.type),yt=x(b.internalFormat,gt,Ft,b.normalized,b.colorSpace,b.isVideoTexture);qt(G,b);let vt,Bt=b.mipmaps,Gt=b.isVideoTexture!==!0,Jt=ft.__version===void 0||$===!0,F=ct.dataReady,xt=w(b,nt);if(b.isDepthTexture)yt=S(b.format===Dn,b.type),Jt&&(Gt?e.texStorage2D(s.TEXTURE_2D,1,yt,nt.width,nt.height):e.texImage2D(s.TEXTURE_2D,0,yt,nt.width,nt.height,0,gt,Ft,null));else if(b.isDataTexture)if(Bt.length>0){Gt&&Jt&&e.texStorage2D(s.TEXTURE_2D,xt,yt,Bt[0].width,Bt[0].height);for(let Q=0,_t=Bt.length;Q<_t;Q++)vt=Bt[Q],Gt?F&&e.texSubImage2D(s.TEXTURE_2D,Q,0,0,vt.width,vt.height,gt,Ft,vt.data):e.texImage2D(s.TEXTURE_2D,Q,yt,vt.width,vt.height,0,gt,Ft,vt.data);b.generateMipmaps=!1}else Gt?(Jt&&e.texStorage2D(s.TEXTURE_2D,xt,yt,nt.width,nt.height),F&&K(b,nt,gt,Ft)):e.texImage2D(s.TEXTURE_2D,0,yt,nt.width,nt.height,0,gt,Ft,nt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Gt&&Jt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,xt,yt,Bt[0].width,Bt[0].height,nt.depth);for(let Q=0,_t=Bt.length;Q<_t;Q++)if(vt=Bt[Q],b.format!==bi)if(gt!==null)if(Gt){if(F)if(b.layerUpdates.size>0){let Tt=eh(vt.width,vt.height,b.format,b.type);for(let st of b.layerUpdates){let kt=vt.data.subarray(st*Tt/vt.data.BYTES_PER_ELEMENT,(st+1)*Tt/vt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Q,0,0,st,vt.width,vt.height,1,gt,kt)}}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Q,0,0,0,vt.width,vt.height,nt.depth,gt,vt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Q,yt,vt.width,vt.height,nt.depth,0,vt.data,0,0);else Wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Gt?F&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,Q,0,0,0,vt.width,vt.height,nt.depth,gt,Ft,vt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,Q,yt,vt.width,vt.height,nt.depth,0,gt,Ft,vt.data);b.layerUpdates.size>0&&b.clearLayerUpdates()}else{Gt&&Jt&&e.texStorage2D(s.TEXTURE_2D,xt,yt,Bt[0].width,Bt[0].height);for(let Q=0,_t=Bt.length;Q<_t;Q++)vt=Bt[Q],b.format!==bi?gt!==null?Gt?F&&e.compressedTexSubImage2D(s.TEXTURE_2D,Q,0,0,vt.width,vt.height,gt,vt.data):e.compressedTexImage2D(s.TEXTURE_2D,Q,yt,vt.width,vt.height,0,vt.data):Wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Gt?F&&e.texSubImage2D(s.TEXTURE_2D,Q,0,0,vt.width,vt.height,gt,Ft,vt.data):e.texImage2D(s.TEXTURE_2D,Q,yt,vt.width,vt.height,0,gt,Ft,vt.data)}else if(b.isDataArrayTexture)if(Gt){if(Jt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,xt,yt,nt.width,nt.height,nt.depth),F)if(b.layerUpdates.size>0){let Q=eh(nt.width,nt.height,b.format,b.type);for(let _t of b.layerUpdates){let Tt=nt.data.subarray(_t*Q/nt.data.BYTES_PER_ELEMENT,(_t+1)*Q/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,_t,nt.width,nt.height,1,gt,Ft,Tt)}b.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,gt,Ft,nt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,yt,nt.width,nt.height,nt.depth,0,gt,Ft,nt.data);else if(b.isData3DTexture)Gt?(Jt&&e.texStorage3D(s.TEXTURE_3D,xt,yt,nt.width,nt.height,nt.depth),F&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,gt,Ft,nt.data)):e.texImage3D(s.TEXTURE_3D,0,yt,nt.width,nt.height,nt.depth,0,gt,Ft,nt.data);else if(b.isFramebufferTexture){if(Jt)if(Gt)e.texStorage2D(s.TEXTURE_2D,xt,yt,nt.width,nt.height);else{let Q=nt.width,_t=nt.height;for(let Tt=0;Tt<xt;Tt++)e.texImage2D(s.TEXTURE_2D,Tt,yt,Q,_t,0,gt,Ft,null),Q>>=1,_t>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in s){let Q=s.canvas;if(Q.hasAttribute("layoutsubtree")||Q.setAttribute("layoutsubtree","true"),nt.parentNode!==Q){Q.appendChild(nt),f.add(b),Q.onpaint=_t=>{let Tt=_t.changedElements;for(let st of f)Tt.includes(st.image)&&(st.needsUpdate=!0)},Q.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,nt);else{let Tt=s.RGBA,st=s.RGBA,kt=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Tt,st,kt,nt)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Bt.length>0){if(Gt&&Jt){let Q=Kt(Bt[0]);e.texStorage2D(s.TEXTURE_2D,xt,yt,Q.width,Q.height)}for(let Q=0,_t=Bt.length;Q<_t;Q++)vt=Bt[Q],Gt?F&&e.texSubImage2D(s.TEXTURE_2D,Q,0,0,gt,Ft,vt):e.texImage2D(s.TEXTURE_2D,Q,yt,gt,Ft,vt);b.generateMipmaps=!1}else if(Gt){if(Jt){let Q=Kt(nt);e.texStorage2D(s.TEXTURE_2D,xt,yt,Q.width,Q.height)}F&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,gt,Ft,nt)}else e.texImage2D(s.TEXTURE_2D,0,yt,gt,Ft,nt);p(b)&&y(G),ft.__version=ct.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function Vt(C,b,B){if(b.image.length!==6)return;let G=te(C,b),$=b.source;e.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+B);let ct=i.get($);if($.version!==ct.__version||G===!0){e.activeTexture(s.TEXTURE0+B);let ft=le.getPrimaries(le.workingColorSpace),J=b.colorSpace===pn?null:le.getPrimaries(b.colorSpace),nt=b.colorSpace===pn||ft===J?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),e.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,nt);let gt=b.isCompressedTexture||b.image[0].isCompressedTexture,Ft=b.image[0]&&b.image[0].isDataTexture,yt=[];for(let st=0;st<6;st++)!gt&&!Ft?yt[st]=m(b.image[st],!0,n.maxCubemapSize):yt[st]=Ft?b.image[st].image:b.image[st],yt[st]=ie(b,yt[st]);let vt=yt[0],Bt=r.convert(b.format,b.colorSpace),Gt=r.convert(b.type),Jt=x(b.internalFormat,Bt,Gt,b.normalized,b.colorSpace),F=b.isVideoTexture!==!0,xt=ct.__version===void 0||G===!0,Q=$.dataReady,_t=w(b,vt);qt(s.TEXTURE_CUBE_MAP,b);let Tt;if(gt){F&&xt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,_t,Jt,vt.width,vt.height);for(let st=0;st<6;st++){Tt=yt[st].mipmaps;for(let kt=0;kt<Tt.length;kt++){let Lt=Tt[kt];b.format!==bi?Bt!==null?F?Q&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,kt,0,0,Lt.width,Lt.height,Bt,Lt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,kt,Jt,Lt.width,Lt.height,0,Lt.data):Wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?Q&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,kt,0,0,Lt.width,Lt.height,Bt,Gt,Lt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,kt,Jt,Lt.width,Lt.height,0,Bt,Gt,Lt.data)}}}else{if(Tt=b.mipmaps,F&&xt){Tt.length>0&&_t++;let st=Kt(yt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,_t,Jt,st.width,st.height)}for(let st=0;st<6;st++)if(Ft){F?Q&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,yt[st].width,yt[st].height,Bt,Gt,yt[st].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Jt,yt[st].width,yt[st].height,0,Bt,Gt,yt[st].data);for(let kt=0;kt<Tt.length;kt++){let Me=Tt[kt].image[st].image;F?Q&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,kt+1,0,0,Me.width,Me.height,Bt,Gt,Me.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,kt+1,Jt,Me.width,Me.height,0,Bt,Gt,Me.data)}}else{F?Q&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,Bt,Gt,yt[st]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Jt,Bt,Gt,yt[st]);for(let kt=0;kt<Tt.length;kt++){let Lt=Tt[kt];F?Q&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,kt+1,0,0,Bt,Gt,Lt.image[st]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,kt+1,Jt,Bt,Gt,Lt.image[st])}}}p(b)&&y(s.TEXTURE_CUBE_MAP),ct.__version=$.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function pt(C,b,B,G,$,ct){let ft=r.convert(B.format,B.colorSpace),J=r.convert(B.type),nt=x(B.internalFormat,ft,J,B.normalized,B.colorSpace),gt=i.get(b),Ft=i.get(B);if(Ft.__renderTarget=b,!gt.__hasExternalTextures){let yt=Math.max(1,b.width>>ct),vt=Math.max(1,b.height>>ct);$===s.TEXTURE_3D||$===s.TEXTURE_2D_ARRAY?e.texImage3D($,ct,nt,yt,vt,b.depth,0,ft,J,null):e.texImage2D($,ct,nt,yt,vt,0,ft,J,null)}e.bindFramebuffer(s.FRAMEBUFFER,C),Ht(b)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,G,$,Ft.__webglTexture,0,Ut(b)):($===s.TEXTURE_2D||$>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,G,$,Ft.__webglTexture,ct),e.bindFramebuffer(s.FRAMEBUFFER,null)}function zt(C,b,B){if(s.bindRenderbuffer(s.RENDERBUFFER,C),b.depthBuffer){let G=b.depthTexture,$=G&&G.isDepthTexture?G.type:null,ct=S(b.stencilBuffer,$),ft=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Ht(b)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ut(b),ct,b.width,b.height):B?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ut(b),ct,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,ct,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,ft,s.RENDERBUFFER,C)}else{let G=b.textures;for(let $=0;$<G.length;$++){let ct=G[$],ft=r.convert(ct.format,ct.colorSpace),J=r.convert(ct.type),nt=x(ct.internalFormat,ft,J,ct.normalized,ct.colorSpace);Ht(b)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ut(b),nt,b.width,b.height):B?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ut(b),nt,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,nt,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ce(C,b,B){let G=b.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,C),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let $=i.get(b.depthTexture);if($.__renderTarget=b,(!$.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),G){if($.__webglInit===void 0&&($.__webglInit=!0,b.depthTexture.addEventListener("dispose",A)),$.__webglTexture===void 0){$.__webglTexture=s.createTexture(),e.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture),qt(s.TEXTURE_CUBE_MAP,b.depthTexture);let gt=r.convert(b.depthTexture.format),Ft=r.convert(b.depthTexture.type),yt;b.depthTexture.format===Vi?yt=s.DEPTH_COMPONENT24:b.depthTexture.format===Dn&&(yt=s.DEPTH24_STENCIL8);for(let vt=0;vt<6;vt++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,yt,b.width,b.height,0,gt,Ft,null)}}else tt(b.depthTexture,0);let ct=$.__webglTexture,ft=Ut(b),J=G?s.TEXTURE_CUBE_MAP_POSITIVE_X+B:s.TEXTURE_2D,nt=b.depthTexture.format===Dn?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(b.depthTexture.format===Vi)Ht(b)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,nt,J,ct,0,ft):s.framebufferTexture2D(s.FRAMEBUFFER,nt,J,ct,0);else if(b.depthTexture.format===Dn)Ht(b)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,nt,J,ct,0,ft):s.framebufferTexture2D(s.FRAMEBUFFER,nt,J,ct,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function it(C){let b=i.get(C),B=C.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==C.depthTexture){let G=C.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),G){let $=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,G.removeEventListener("dispose",$)};G.addEventListener("dispose",$),b.__depthDisposeCallback=$}b.__boundDepthTexture=G}if(C.depthTexture&&!b.__autoAllocateDepthBuffer)if(B)for(let G=0;G<6;G++)ce(b.__webglFramebuffer[G],C,G);else{let G=C.texture.mipmaps;G&&G.length>0?ce(b.__webglFramebuffer[0],C,0):ce(b.__webglFramebuffer,C,0)}else if(B){b.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(e.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[G]),b.__webglDepthbuffer[G]===void 0)b.__webglDepthbuffer[G]=s.createRenderbuffer(),zt(b.__webglDepthbuffer[G],C,!1);else{let $=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ct=b.__webglDepthbuffer[G];s.bindRenderbuffer(s.RENDERBUFFER,ct),s.framebufferRenderbuffer(s.FRAMEBUFFER,$,s.RENDERBUFFER,ct)}}else{let G=C.texture.mipmaps;if(G&&G.length>0?e.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=s.createRenderbuffer(),zt(b.__webglDepthbuffer,C,!1);else{let $=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ct=b.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ct),s.framebufferRenderbuffer(s.FRAMEBUFFER,$,s.RENDERBUFFER,ct)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function rt(C,b,B){let G=i.get(C);b!==void 0&&pt(G.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),B!==void 0&&it(C)}function ot(C){let b=C.texture,B=i.get(C),G=i.get(b);C.addEventListener("dispose",_);let $=C.textures,ct=C.isWebGLCubeRenderTarget===!0,ft=$.length>1;if(ft||(G.__webglTexture===void 0&&(G.__webglTexture=s.createTexture()),G.__version=b.version,a.memory.textures++),ct){B.__webglFramebuffer=[];for(let J=0;J<6;J++)if(b.mipmaps&&b.mipmaps.length>0){B.__webglFramebuffer[J]=[];for(let nt=0;nt<b.mipmaps.length;nt++)B.__webglFramebuffer[J][nt]=s.createFramebuffer()}else B.__webglFramebuffer[J]=s.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){B.__webglFramebuffer=[];for(let J=0;J<b.mipmaps.length;J++)B.__webglFramebuffer[J]=s.createFramebuffer()}else B.__webglFramebuffer=s.createFramebuffer();if(ft)for(let J=0,nt=$.length;J<nt;J++){let gt=i.get($[J]);gt.__webglTexture===void 0&&(gt.__webglTexture=s.createTexture(),a.memory.textures++)}if(C.samples>0&&Ht(C)===!1){B.__webglMultisampledFramebuffer=s.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let J=0;J<$.length;J++){let nt=$[J];B.__webglColorRenderbuffer[J]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,B.__webglColorRenderbuffer[J]);let gt=r.convert(nt.format,nt.colorSpace),Ft=r.convert(nt.type),yt=x(nt.internalFormat,gt,Ft,nt.normalized,nt.colorSpace,C.isXRRenderTarget===!0),vt=Ut(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,vt,yt,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+J,s.RENDERBUFFER,B.__webglColorRenderbuffer[J])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(B.__webglDepthRenderbuffer=s.createRenderbuffer(),zt(B.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ct){e.bindTexture(s.TEXTURE_CUBE_MAP,G.__webglTexture),qt(s.TEXTURE_CUBE_MAP,b);for(let J=0;J<6;J++)if(b.mipmaps&&b.mipmaps.length>0)for(let nt=0;nt<b.mipmaps.length;nt++)pt(B.__webglFramebuffer[J][nt],C,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+J,nt);else pt(B.__webglFramebuffer[J],C,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);p(b)&&y(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ft){for(let J=0,nt=$.length;J<nt;J++){let gt=$[J],Ft=i.get(gt),yt=s.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(yt=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(yt,Ft.__webglTexture),qt(yt,gt),pt(B.__webglFramebuffer,C,gt,s.COLOR_ATTACHMENT0+J,yt,0),p(gt)&&y(yt)}e.unbindTexture()}else{let J=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(J=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(J,G.__webglTexture),qt(J,b),b.mipmaps&&b.mipmaps.length>0)for(let nt=0;nt<b.mipmaps.length;nt++)pt(B.__webglFramebuffer[nt],C,b,s.COLOR_ATTACHMENT0,J,nt);else pt(B.__webglFramebuffer,C,b,s.COLOR_ATTACHMENT0,J,0);p(b)&&y(J),e.unbindTexture()}C.depthBuffer&&it(C)}function lt(C){let b=C.textures;for(let B=0,G=b.length;B<G;B++){let $=b[B];if(p($)){let ct=M(C),ft=i.get($).__webglTexture;e.bindTexture(ct,ft),y(ct),e.unbindTexture()}}}let ut=[],Ot=[];function Nt(C){if(C.samples>0){if(Ht(C)===!1){let b=C.textures,B=C.width,G=C.height,$=s.COLOR_BUFFER_BIT,ct=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ft=i.get(C),J=b.length>1;if(J)for(let gt=0;gt<b.length;gt++)e.bindFramebuffer(s.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+gt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,ft.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+gt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,ft.__webglMultisampledFramebuffer);let nt=C.texture.mipmaps;nt&&nt.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ft.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ft.__webglFramebuffer);for(let gt=0;gt<b.length;gt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&($|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&($|=s.STENCIL_BUFFER_BIT)),J){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ft.__webglColorRenderbuffer[gt]);let Ft=i.get(b[gt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ft,0)}s.blitFramebuffer(0,0,B,G,0,0,B,G,$,s.NEAREST),c===!0&&(ut.length=0,Ot.length=0,ut.push(s.COLOR_ATTACHMENT0+gt),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&(ut.push(ct),Ot.push(ct),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Ot)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ut))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),J)for(let gt=0;gt<b.length;gt++){e.bindFramebuffer(s.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+gt,s.RENDERBUFFER,ft.__webglColorRenderbuffer[gt]);let Ft=i.get(b[gt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,ft.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+gt,s.TEXTURE_2D,Ft,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ft.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&c){let b=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[b])}}}function Ut(C){return Math.min(n.maxSamples,C.samples)}function Ht(C){let b=i.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function L(C){let b=a.render.frame;u.get(C)!==b&&(u.set(C,b),C.update())}function ie(C,b){let B=C.colorSpace,G=C.format,$=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||B!==Zn&&B!==pn&&(le.getTransfer(B)===pe?(G!==bi||$!==ni)&&Wt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Xt("WebGLTextures: Unsupported texture color space:",B)),b}function Kt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=z,this.resetTextureUnits=k,this.getTextureUnits=N,this.setTextureUnits=O,this.setTexture2D=tt,this.setTexture2DArray=X,this.setTexture3D=j,this.setTextureCube=et,this.rebindTextures=rt,this.setupRenderTarget=ot,this.updateRenderTargetMipmap=lt,this.updateMultisampleRenderTarget=Nt,this.setupDepthRenderbuffer=it,this.setupFrameBufferTexture=pt,this.useMultisampledRTT=Ht,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function bx(s,t){function e(i,n=pn){let r,a=le.getTransfer(n);if(i===ni)return s.UNSIGNED_BYTE;if(i===bo)return s.UNSIGNED_SHORT_4_4_4_4;if(i===So)return s.UNSIGNED_SHORT_5_5_5_1;if(i===Gc)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===Wc)return s.UNSIGNED_INT_10F_11F_11F_REV;if(i===Hc)return s.BYTE;if(i===Vc)return s.SHORT;if(i===Gs)return s.UNSIGNED_SHORT;if(i===Mo)return s.INT;if(i===Ni)return s.UNSIGNED_INT;if(i===Mi)return s.FLOAT;if(i===gi)return s.HALF_FLOAT;if(i===Xc)return s.ALPHA;if(i===qc)return s.RGB;if(i===bi)return s.RGBA;if(i===Vi)return s.DEPTH_COMPONENT;if(i===Dn)return s.DEPTH_STENCIL;if(i===wo)return s.RED;if(i===To)return s.RED_INTEGER;if(i===Nn)return s.RG;if(i===Eo)return s.RG_INTEGER;if(i===Ao)return s.RGBA_INTEGER;if(i===Gr||i===Wr||i===Xr||i===qr)if(a===pe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Gr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Wr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Xr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===qr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Gr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Wr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Xr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===qr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ro||i===Co||i===Io||i===Po)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Ro)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Co)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Io)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Po)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Lo||i===Do||i===No||i===Uo||i===Fo||i===Yr||i===Bo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Lo||i===Do)return a===pe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===No)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Uo)return r.COMPRESSED_R11_EAC;if(i===Fo)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Yr)return r.COMPRESSED_RG11_EAC;if(i===Bo)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Oo||i===ko||i===zo||i===Ho||i===Vo||i===Go||i===Wo||i===Xo||i===qo||i===Yo||i===$o||i===Zo||i===Jo||i===Ko)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Oo)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ko)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===zo)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ho)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Vo)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Go)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Wo)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Xo)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===qo)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Yo)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===$o)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Zo)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Jo)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ko)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===jo||i===Qo||i===tl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===jo)return a===pe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Qo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===tl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===el||i===il||i===$r||i===nl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===el)return r.COMPRESSED_RED_RGTC1_EXT;if(i===il)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===$r)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===nl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ws?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:e}}var Sx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,wx=`
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

}`,yh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new Tr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new se({vertexShader:Sx,fragmentShader:wx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new dt(new Le(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Mh=class extends Gi{constructor(t,e){super();let i=this,n=null,r=1,a=null,o="local-floor",c=1,l=null,u=null,f=null,h=null,d=null,g=null,v=typeof XRWebGLBinding<"u",m=new yh,p={},y=e.getContextAttributes(),M=null,x=null,S=[],w=[],A=new at,_=null,T=null,R=new qe;R.viewport=new ge;let I=new qe;I.viewport=new ge;let D=[R,I],k=new go,N=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let K=S[Z];return K===void 0&&(K=new Ns,S[Z]=K),K.getTargetRaySpace()},this.getControllerGrip=function(Z){let K=S[Z];return K===void 0&&(K=new Ns,S[Z]=K),K.getGripSpace()},this.getHand=function(Z){let K=S[Z];return K===void 0&&(K=new Ns,S[Z]=K),K.getHandSpace()};function z(Z){let K=w.indexOf(Z.inputSource);if(K===-1)return;let mt=S[K];mt!==void 0&&(mt.update(Z.inputSource,Z.frame,l||a),mt.dispatchEvent({type:Z.type,data:Z.inputSource}))}function Y(){n.removeEventListener("select",z),n.removeEventListener("selectstart",z),n.removeEventListener("selectend",z),n.removeEventListener("squeeze",z),n.removeEventListener("squeezestart",z),n.removeEventListener("squeezeend",z),n.removeEventListener("end",Y),n.removeEventListener("inputsourceschange",tt);for(let Z=0;Z<S.length;Z++){let K=w[Z];K!==null&&(w[Z]=null,S[Z].disconnect(K))}N=null,O=null,m.reset();for(let Z in p)delete p[Z];if(t.setRenderTarget(M),d=null,h=null,f=null,n=null,x=null,te.stop(),i.isPresenting=!1,t.setPixelRatio(_),t.setSize(A.width,A.height,!1),T!==null){let Z=T.camera;Z.fov=T.fov,Z.zoom=T.zoom,Z.updateProjectionMatrix(),T=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,i.isPresenting===!0&&Wt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,i.isPresenting===!0&&Wt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f===null&&v&&(f=new XRWebGLBinding(n,e)),f},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function(Z){if(n=Z,n!==null){if(M=t.getRenderTarget(),n.addEventListener("select",z),n.addEventListener("selectstart",z),n.addEventListener("selectend",z),n.addEventListener("squeeze",z),n.addEventListener("squeezestart",z),n.addEventListener("squeezeend",z),n.addEventListener("end",Y),n.addEventListener("inputsourceschange",tt),y.xrCompatible!==!0&&await e.makeXRCompatible(),_=t.getPixelRatio(),t.getSize(A),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let mt=null,Vt=null,pt=null;y.depth&&(pt=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,mt=y.stencil?Dn:Vi,Vt=y.stencil?Ws:Ni);let zt={colorFormat:e.RGBA8,depthFormat:pt,scaleFactor:r};f=this.getBinding(),h=f.createProjectionLayer(zt),n.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),x=new $e(h.textureWidth,h.textureHeight,{format:bi,type:ni,depthTexture:new Tn(h.textureWidth,h.textureHeight,Vt,void 0,void 0,void 0,void 0,void 0,void 0,mt),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let mt={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(n,e,mt),n.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new $e(d.framebufferWidth,d.framebufferHeight,{format:bi,type:ni,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await n.requestReferenceSpace(o),te.setContext(n),te.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function tt(Z){for(let K=0;K<Z.removed.length;K++){let mt=Z.removed[K],Vt=w.indexOf(mt);Vt>=0&&(w[Vt]=null,S[Vt].disconnect(mt))}for(let K=0;K<Z.added.length;K++){let mt=Z.added[K],Vt=w.indexOf(mt);if(Vt===-1){for(let zt=0;zt<S.length;zt++)if(zt>=w.length){w.push(mt),Vt=zt;break}else if(w[zt]===null){w[zt]=mt,Vt=zt;break}if(Vt===-1)break}let pt=S[Vt];pt&&pt.connect(mt)}}let X=new P,j=new P;function et(Z,K,mt){X.setFromMatrixPosition(K.matrixWorld),j.setFromMatrixPosition(mt.matrixWorld);let Vt=X.distanceTo(j),pt=K.projectionMatrix.elements,zt=mt.projectionMatrix.elements,ce=pt[14]/(pt[10]-1),it=pt[14]/(pt[10]+1),rt=(pt[9]+1)/pt[5],ot=(pt[9]-1)/pt[5],lt=(pt[8]-1)/pt[0],ut=(zt[8]+1)/zt[0],Ot=ce*lt,Nt=ce*ut,Ut=Vt/(-lt+ut),Ht=Ut*-lt;if(K.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Ht),Z.translateZ(Ut),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),pt[10]===-1)Z.projectionMatrix.copy(K.projectionMatrix),Z.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{let L=ce+Ut,ie=it+Ut,Kt=Ot-Ht,C=Nt+(Vt-Ht),b=rt*it/ie*L,B=ot*it/ie*L;Z.projectionMatrix.makePerspective(Kt,C,b,B,L,ie),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function Ct(Z,K){K===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(K.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(n===null)return;let K=Z.near,mt=Z.far;m.texture!==null&&(m.depthNear>0&&(K=m.depthNear),m.depthFar>0&&(mt=m.depthFar)),k.near=I.near=R.near=K,k.far=I.far=R.far=mt,(N!==k.near||O!==k.far)&&(n.updateRenderState({depthNear:k.near,depthFar:k.far}),N=k.near,O=k.far),k.layers.mask=Z.layers.mask|6,R.layers.mask=k.layers.mask&-5,I.layers.mask=k.layers.mask&-3;let Vt=Z.parent,pt=k.cameras;Ct(k,Vt);for(let zt=0;zt<pt.length;zt++)Ct(pt[zt],Vt);pt.length===2?et(k,R,I):k.projectionMatrix.copy(R.projectionMatrix),T===null&&Z.isPerspectiveCamera&&(T={camera:Z,fov:Z.fov,zoom:Z.zoom}),wt(Z,k,Vt)};function wt(Z,K,mt){mt===null?Z.matrix.copy(K.matrixWorld):(Z.matrix.copy(mt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(K.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(K.projectionMatrix),Z.projectionMatrixInverse.copy(K.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Jn*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(h===null&&d===null))return c},this.setFoveation=function(Z){c=Z,h!==null&&(h.fixedFoveation=Z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(k)},this.getCameraTexture=function(Z){return p[Z]};let re=null;function qt(Z,K){if(u=K.getViewerPose(l||a),g=K,u!==null){let mt=u.views;d!==null&&(t.setRenderTargetFramebuffer(x,d.framebuffer),t.setRenderTarget(x));let Vt=!1;mt.length!==k.cameras.length&&(k.cameras.length=0,Vt=!0);for(let it=0;it<mt.length;it++){let rt=mt[it],ot=null;if(d!==null)ot=d.getViewport(rt);else{let ut=f.getViewSubImage(h,rt);ot=ut.viewport,it===0&&(t.setRenderTargetTextures(x,ut.colorTexture,ut.depthStencilTexture),t.setRenderTarget(x))}let lt=D[it];lt===void 0&&(lt=new qe,lt.layers.enable(it),lt.viewport=new ge,D[it]=lt),lt.matrix.fromArray(rt.transform.matrix),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.projectionMatrix.fromArray(rt.projectionMatrix),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert(),lt.viewport.set(ot.x,ot.y,ot.width,ot.height),it===0&&(k.matrix.copy(lt.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),Vt===!0&&k.cameras.push(lt)}let pt=n.enabledFeatures;if(pt&&pt.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&v){f=i.getBinding();let it=f.getDepthInformation(mt[0]);it&&it.isValid&&it.texture&&m.init(it,n.renderState)}if(pt&&pt.includes("camera-access")&&v){t.state.unbindTexture(),f=i.getBinding();for(let it=0;it<mt.length;it++){let rt=mt[it].camera;if(rt){let ot=p[rt];ot||(ot=new Tr,p[rt]=ot);let lt=f.getCameraImage(rt);ot.sourceTexture=lt}}}}for(let mt=0;mt<S.length;mt++){let Vt=w[mt],pt=S[mt];Vt!==null&&pt!==void 0&&pt.update(Vt,K,l||a)}re&&re(Z,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),g=null}let te=new Ld;te.setAnimationLoop(qt),this.setAnimationLoop=function(Z){re=Z},this.dispose=function(){}}},Tx=new ne,Od=new Yt;Od.set(-1,0,0,0,1,0,0,0,1);function Ex(s,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,jc(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function n(m,p,y,M,x){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),f(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,y,M):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ze&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ze&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let y=t.get(p),M=y.envMap,x=y.envMapRotation;M&&(m.envMap.value=M,m.envMapRotation.value.setFromMatrix4(Tx.makeRotationFromEuler(x)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Od),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,y,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=M*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ze&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){let y=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function Ax(s,t,e,i){let n={},r={},a=[],o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,S){let w=S.program;i.uniformBlockBinding(x,w)}function l(x,S){let w=n[x.id];w===void 0&&(m(x),w=u(x),n[x.id]=w,x.addEventListener("dispose",y));let A=S.program;i.updateUBOMapping(x,A);let _=t.render.frame;r[x.id]!==_&&(h(x),r[x.id]=_)}function u(x){let S=f();x.__bindingPointIndex=S;let w=s.createBuffer(),A=x.__size,_=x.usage;return s.bindBuffer(s.UNIFORM_BUFFER,w),s.bufferData(s.UNIFORM_BUFFER,A,_),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,S,w),w}function f(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return Xt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){let S=n[x.id],w=x.uniforms,A=x.__cache;s.bindBuffer(s.UNIFORM_BUFFER,S);for(let _=0,T=w.length;_<T;_++){let R=w[_];if(Array.isArray(R))for(let I=0,D=R.length;I<D;I++)d(R[I],_,I,A);else d(R,_,0,A)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(x,S,w,A){if(v(x,S,w,A)===!0){let _=x.__offset,T=x.value;if(Array.isArray(T)){let R=0;for(let I=0;I<T.length;I++){let D=T[I],k=p(D);g(D,x.__data,R),typeof D!="number"&&typeof D!="boolean"&&!D.isMatrix3&&!ArrayBuffer.isView(D)&&(R+=k.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(T,x.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,_,x.__data)}}function g(x,S,w){typeof x=="number"||typeof x=="boolean"?S[0]=x:x.isMatrix3?(S[0]=x.elements[0],S[1]=x.elements[1],S[2]=x.elements[2],S[3]=0,S[4]=x.elements[3],S[5]=x.elements[4],S[6]=x.elements[5],S[7]=0,S[8]=x.elements[6],S[9]=x.elements[7],S[10]=x.elements[8],S[11]=0):ArrayBuffer.isView(x)?S.set(new x.constructor(x.buffer,x.byteOffset,S.length)):x.toArray(S,w)}function v(x,S,w,A){let _=x.value,T=S+"_"+w;if(A[T]===void 0)return typeof _=="number"||typeof _=="boolean"?A[T]=_:ArrayBuffer.isView(_)?A[T]=_.slice():A[T]=_.clone(),!0;{let R=A[T];if(typeof _=="number"||typeof _=="boolean"){if(R!==_)return A[T]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(R.equals(_)===!1)return R.copy(_),!0}}return!1}function m(x){let S=x.uniforms,w=0,A=16;for(let T=0,R=S.length;T<R;T++){let I=Array.isArray(S[T])?S[T]:[S[T]];for(let D=0,k=I.length;D<k;D++){let N=I[D],O=Array.isArray(N.value)?N.value:[N.value];for(let z=0,Y=O.length;z<Y;z++){let tt=O[z],X=p(tt),j=w%A,et=j%X.boundary,Ct=j+et;w+=et,Ct!==0&&A-Ct<X.storage&&(w+=A-Ct),N.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=w,w+=X.storage}}}let _=w%A;return _>0&&(w+=A-_),x.__size=w,x.__cache={},this}function p(x){let S={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(S.boundary=4,S.storage=4):x.isVector2?(S.boundary=8,S.storage=8):x.isVector3||x.isColor?(S.boundary=16,S.storage=12):x.isVector4?(S.boundary=16,S.storage=16):x.isMatrix3?(S.boundary=48,S.storage=48):x.isMatrix4?(S.boundary=64,S.storage=64):x.isTexture?Wt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(S.boundary=16,S.storage=x.byteLength):Wt("WebGLRenderer: Unsupported uniform value type.",x),S}function y(x){let S=x.target;S.removeEventListener("dispose",y);let w=a.indexOf(S.__bindingPointIndex);a.splice(w,1),s.deleteBuffer(n[S.id]),delete n[S.id],delete r[S.id]}function M(){for(let x in n)s.deleteBuffer(n[x]);a=[],n={},r={}}return{bind:c,update:l,dispose:M}}var Rx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ji=null;function Cx(){return Ji===null&&(Ji=new Sr(Rx,16,16,Nn,gi),Ji.name="DFG_LUT",Ji.minFilter=Pe,Ji.magFilter=Pe,Ji.wrapS=ii,Ji.wrapT=ii,Ji.generateMipmaps=!1,Ji.needsUpdate=!0),Ji}var hl=class{constructor(t={}){let{canvas:e=Qu(),context:i=null,depth:n=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:d=ni}=t;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;let v=d,m=new Set([Ao,Eo,To]),p=new Set([ni,Ni,Gs,Ws,bo,So]),y=new Uint32Array(4),M=new Int32Array(4),x=new P,S=null,w=null,A=[],_=[],T=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=mi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,I=!1,D=null,k=null,N=null,O=null;this._outputColorSpace=Je;let z=0,Y=0,tt=null,X=-1,j=null,et=new ge,Ct=new ge,wt=null,re=new ht(0),qt=0,te=e.width,Z=e.height,K=1,mt=null,Vt=null,pt=new ge(0,0,te,Z),zt=new ge(0,0,te,Z),ce=!1,it=new Us,rt=!1,ot=!1,lt=new ne,ut=new P,Ot=new ge,Nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ut=!1;function Ht(){return tt===null?K:1}let L=i;function ie(E,U){return e.getContext(E,U)}let Kt,C,b,B,G,$,ct,ft,J,nt,gt,Ft,yt,vt,Bt,Gt,Jt,F,xt,Q,_t,Tt,st;try{let E={alpha:!0,depth:n,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Me,!1),e.addEventListener("webglcontextrestored",de,!1),e.addEventListener("webglcontextcreationerror",Ei,!1),L===null){let U="webgl2";if(L=ie(U,E),L===null)throw ie(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}kt()}catch(E){throw e.removeEventListener("webglcontextlost",Me,!1),e.removeEventListener("webglcontextrestored",de,!1),e.removeEventListener("webglcontextcreationerror",Ei,!1),Xt("WebGLRenderer: "+E.message),E}function kt(){Kt=new Fg(L),Kt.init(),_t=new bx(L,Kt),C=new Eg(L,Kt,t,_t),b=new yx(L,Kt),C.reversedDepthBuffer&&h&&b.buffers.depth.setReversed(!0),k=L.createFramebuffer(),N=L.createFramebuffer(),O=L.createFramebuffer(),B=new kg(L),G=new ax,$=new Mx(L,Kt,b,G,C,_t,B),ct=new Ug(R),ft=new Hp(L),Tt=new wg(L,ft),J=new Bg(L,ft,B,Tt),nt=new Hg(L,J,ft,Tt,B),F=new zg(L,C,$),Bt=new Ag(G),gt=new rx(R,ct,Kt,C,Tt,Bt),Ft=new Ex(R,G),yt=new lx,vt=new px(Kt),Jt=new Sg(R,ct,b,nt,g,c),Gt=new _x(R,nt,C),st=new Ax(L,B,C,b),xt=new Tg(L,Kt,B),Q=new Og(L,Kt,B),B.programs=gt.programs,R.capabilities=C,R.extensions=Kt,R.properties=G,R.renderLists=yt,R.shadowMap=Gt,R.state=b,R.info=B}v!==ni&&(T=new Gg(v,e.width,e.height,o,n,r));let Lt=new Mh(R,L);this.xr=Lt,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let E=Kt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=Kt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(E){E!==void 0&&(K=E,this.setSize(te,Z,!1))},this.getSize=function(E){return E.set(te,Z)},this.setSize=function(E,U,W=!0){if(Lt.isPresenting){Wt("WebGLRenderer: Can't change size while VR device is presenting.");return}te=E,Z=U,e.width=Math.floor(E*K),e.height=Math.floor(U*K),W===!0&&(e.style.width=E+"px",e.style.height=U+"px"),T!==null&&T.setSize(e.width,e.height),this.setViewport(0,0,E,U)},this.getDrawingBufferSize=function(E){return E.set(te*K,Z*K).floor()},this.setDrawingBufferSize=function(E,U,W){te=E,Z=U,K=W,e.width=Math.floor(E*W),e.height=Math.floor(U*W),this.setViewport(0,0,E,U)},this.setEffects=function(E){if(v===ni){Xt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let U=0;U<E.length;U++)if(E[U].isOutputPass===!0){Wt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(et)},this.getViewport=function(E){return E.copy(pt)},this.setViewport=function(E,U,W,H){E.isVector4?pt.set(E.x,E.y,E.z,E.w):pt.set(E,U,W,H),b.viewport(et.copy(pt).multiplyScalar(K).round())},this.getScissor=function(E){return E.copy(zt)},this.setScissor=function(E,U,W,H){E.isVector4?zt.set(E.x,E.y,E.z,E.w):zt.set(E,U,W,H),b.scissor(Ct.copy(zt).multiplyScalar(K).round())},this.getScissorTest=function(){return ce},this.setScissorTest=function(E){b.setScissorTest(ce=E)},this.setOpaqueSort=function(E){mt=E},this.setTransparentSort=function(E){Vt=E},this.getClearColor=function(E){return E.copy(Jt.getClearColor())},this.setClearColor=function(){Jt.setClearColor(...arguments)},this.getClearAlpha=function(){return Jt.getClearAlpha()},this.setClearAlpha=function(){Jt.setClearAlpha(...arguments)},this.clear=function(E=!0,U=!0,W=!0){let H=0;if(E){let V=!1;if(tt!==null){let St=tt.texture.format;V=m.has(St)}if(V){let St=tt.texture.type,Rt=p.has(St),bt=Jt.getClearColor(),It=Jt.getClearAlpha(),Dt=bt.r,jt=bt.g,ae=bt.b;Rt?(y[0]=Dt,y[1]=jt,y[2]=ae,y[3]=It,L.clearBufferuiv(L.COLOR,0,y)):(M[0]=Dt,M[1]=jt,M[2]=ae,M[3]=It,L.clearBufferiv(L.COLOR,0,M))}else H|=L.COLOR_BUFFER_BIT}U&&(H|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(H|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&L.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),D=E},this.dispose=function(){e.removeEventListener("webglcontextlost",Me,!1),e.removeEventListener("webglcontextrestored",de,!1),e.removeEventListener("webglcontextcreationerror",Ei,!1),Jt.dispose(),yt.dispose(),vt.dispose(),G.dispose(),ct.dispose(),nt.dispose(),Tt.dispose(),st.dispose(),gt.dispose(),Lt.dispose(),Lt.removeEventListener("sessionstart",Lh),Lt.removeEventListener("sessionend",Dh),Vn.stop()};function Me(E){E.preventDefault(),Zc("WebGLRenderer: Context Lost."),I=!0}function de(){Zc("WebGLRenderer: Context Restored."),I=!1;let E=B.autoReset,U=Gt.enabled,W=Gt.autoUpdate,H=Gt.needsUpdate,V=Gt.type;kt(),B.autoReset=E,Gt.enabled=U,Gt.autoUpdate=W,Gt.needsUpdate=H,Gt.type=V}function Ei(E){Xt("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function ki(E){let U=E.target;U.removeEventListener("dispose",ki),rf(U)}function rf(E){af(E),G.remove(E)}function af(E){let U=G.get(E).programs;U!==void 0&&(U.forEach(function(W){gt.releaseProgram(W)}),E.isShaderMaterial&&gt.releaseShaderCache(E))}this.renderBufferDirect=function(E,U,W,H,V,St){U===null&&(U=Nt);let Rt=V.isMesh&&V.matrixWorld.determinantAffine()<0,bt=cf(E,U,W,H,V);b.setMaterial(H,Rt);let It=W.index,Dt=1;if(H.wireframe===!0){if(It=J.getWireframeAttribute(W),It===void 0)return;Dt=2}let jt=W.drawRange,ae=W.attributes.position,Pt=jt.start*Dt,fe=(jt.start+jt.count)*Dt;St!==null&&(Pt=Math.max(Pt,St.start*Dt),fe=Math.min(fe,(St.start+St.count)*Dt)),It!==null?(Pt=Math.max(Pt,0),fe=Math.min(fe,It.count)):ae!=null&&(Pt=Math.max(Pt,0),fe=Math.min(fe,ae.count));let Be=fe-Pt;if(Be<0||Be===1/0)return;Tt.setup(V,H,bt,W,It);let Ee,ve=xt;if(It!==null&&(Ee=ft.get(It),ve=Q,ve.setIndex(Ee)),V.isMesh)H.wireframe===!0?(b.setLineWidth(H.wireframeLinewidth*Ht()),ve.setMode(L.LINES)):ve.setMode(L.TRIANGLES);else if(V.isLine){let Qe=H.linewidth;Qe===void 0&&(Qe=1),b.setLineWidth(Qe*Ht()),V.isLineSegments?ve.setMode(L.LINES):V.isLineLoop?ve.setMode(L.LINE_LOOP):ve.setMode(L.LINE_STRIP)}else V.isPoints?ve.setMode(L.POINTS):V.isSprite&&ve.setMode(L.TRIANGLES);if(V.isBatchedMesh)if(Kt.get("WEBGL_multi_draw"))ve.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{let Qe=V._multiDrawStarts,At=V._multiDrawCounts,ai=V._multiDrawCount,he=It?ft.get(It).bytesPerElement:1,xi=G.get(H).currentProgram.getUniforms();for(let zi=0;zi<ai;zi++)xi.setValue(L,"_gl_DrawID",zi),ve.render(Qe[zi]/he,At[zi])}else if(V.isInstancedMesh)ve.renderInstances(Pt,Be,V.count);else if(W.isInstancedBufferGeometry){let Qe=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,At=Math.min(W.instanceCount,Qe);ve.renderInstances(Pt,Be,At)}else ve.render(Pt,Be)};function Ph(E,U,W,H){D!==null&&E.isNodeMaterial&&D.setObject(H,E),rt===!0&&Bt.setState(E,W,!1),E.transparent===!0&&E.side===De&&E.forceSinglePass===!1?(E.side=Ze,E.needsUpdate=!0,oa(E,U,H),E.side=$i,E.needsUpdate=!0,oa(E,U,H),E.side=De):oa(E,U,H)}this.compile=function(E,U,W=null){W===null&&(W=E),D!==null&&D.renderStart(E,U,W),w=vt.get(W),w.init(U),_.push(w),W.traverseVisible(function(V){V.isLight&&V.layers.test(U.layers)&&(w.pushLight(V),V.castShadow&&w.pushShadow(V))}),E!==W&&E.traverseVisible(function(V){V.isLight&&V.layers.test(U.layers)&&(w.pushLight(V),V.castShadow&&w.pushShadow(V))}),w.setupLights(),D!==null&&D.updateLights(w.state.lightsArray),ot=this.localClippingEnabled,rt=Bt.init(this.clippingPlanes,ot),rt===!0&&Bt.setGlobalState(this.clippingPlanes,U),D!==null&&Gt.render(w.state.shadowsArray,W,U);let H=new Set;return E.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;let St=V.material;if(St)if(Array.isArray(St))for(let Rt=0;Rt<St.length;Rt++){let bt=St[Rt];Ph(bt,W,U,V),H.add(bt)}else Ph(St,W,U,V),H.add(St)}),w=_.pop(),D!==null&&D.renderEnd(),H},this.compileAsync=function(E,U,W=null){let H=this.compile(E,U,W);return new Promise(V=>{function St(){if(H.forEach(function(Rt){let It=G.get(Rt).currentProgram;(It===void 0||It.isReady())&&H.delete(Rt)}),H.size===0){V(E);return}setTimeout(St,10)}Kt.get("KHR_parallel_shader_compile")!==null?St():setTimeout(St,10)})};let Hl=null;function of(E){Hl&&Hl(E)}function Lh(){Vn.stop()}function Dh(){Vn.start()}let Vn=new Ld;Vn.setAnimationLoop(of),typeof self<"u"&&Vn.setContext(self),this.setAnimationLoop=function(E){Hl=E,Lt.setAnimationLoop(E),E===null?Vn.stop():Vn.start()},Lt.addEventListener("sessionstart",Lh),Lt.addEventListener("sessionend",Dh),this.render=function(E,U){if(U!==void 0&&U.isCamera!==!0){Xt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;D!==null&&D.renderStart(E,U);let W=Lt.enabled===!0&&Lt.isPresenting===!0,H=T!==null&&(tt===null||W)&&T.begin(R,tt);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Lt.enabled===!0&&Lt.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Lt.cameraAutoUpdate===!0&&Lt.updateCamera(U),U=Lt.getCamera()),E.isScene===!0&&E.onBeforeRender(R,E,U,tt),w=vt.get(E,_.length),w.init(U),w.state.textureUnits=$.getTextureUnits(),_.push(w),lt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),it.setFromProjectionMatrix(lt,Pi,U.reversedDepth),ot=this.localClippingEnabled,rt=Bt.init(this.clippingPlanes,ot),S=yt.get(E,A.length),S.init(),A.push(S),Lt.enabled===!0&&Lt.isPresenting===!0){let Rt=R.xr.getDepthSensingMesh();Rt!==null&&Vl(Rt,U,-1/0,R.sortObjects)}Vl(E,U,0,R.sortObjects),S.finish(),D!==null&&D.updateLights(w.state.lightsArray),R.sortObjects===!0&&S.sort(mt,Vt),Ut=Lt.enabled===!1||Lt.isPresenting===!1||Lt.hasDepthSensing()===!1,Ut&&Jt.addToRenderList(S,E),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),rt===!0&&Bt.beginShadows();let V=w.state.shadowsArray;if(Gt.render(V,E,U),rt===!0&&Bt.endShadows(),(H&&T.hasRenderPass())===!1){let Rt=S.opaque,bt=S.transmissive;if(w.setupLights(),U.isArrayCamera){let It=U.cameras;if(bt.length>0)for(let Dt=0,jt=It.length;Dt<jt;Dt++){let ae=It[Dt];Uh(Rt,bt,E,ae)}Ut&&Jt.render(E);for(let Dt=0,jt=It.length;Dt<jt;Dt++){let ae=It[Dt];Nh(S,E,ae,ae.viewport)}}else bt.length>0&&Uh(Rt,bt,E,U),Ut&&Jt.render(E),Nh(S,E,U)}tt!==null&&Y===0&&($.updateMultisampleRenderTarget(tt),$.updateRenderTargetMipmap(tt)),H&&T.end(R),E.isScene===!0&&E.onAfterRender(R,E,U),Tt.resetDefaultState(),X=-1,j=null,_.pop(),_.length>0?(w=_[_.length-1],$.setTextureUnits(w.state.textureUnits),rt===!0&&Bt.setGlobalState(R.clippingPlanes,w.state.camera)):w=null,A.pop(),A.length>0?S=A[A.length-1]:S=null,D!==null&&D.renderEnd()};function Vl(E,U,W,H){if(E.visible===!1)return;if(E.layers.test(U.layers)){if(E.isGroup)W=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(U);else if(E.isLightProbeGrid)w.pushLightProbeGrid(E);else if(E.isLight)w.pushLight(E),E.castShadow&&w.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||E.intersectsFrustum(it)){H&&Ot.setFromMatrixPosition(E.matrixWorld).applyMatrix4(lt);let Rt=nt.update(E),bt=E.material;bt.visible&&S.push(E,Rt,bt,W,Ot.z,null,U)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||E.intersectsFrustum(it))){let Rt=nt.update(E),bt=E.material;if(H&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ot.copy(E.boundingSphere.center)):(Rt.boundingSphere===null&&Rt.computeBoundingSphere(),Ot.copy(Rt.boundingSphere.center)),Ot.applyMatrix4(E.matrixWorld).applyMatrix4(lt)),Array.isArray(bt)){let It=Rt.groups;for(let Dt=0,jt=It.length;Dt<jt;Dt++){let ae=It[Dt],Pt=bt[ae.materialIndex];Pt&&Pt.visible&&S.push(E,Rt,Pt,W,Ot.z,ae,U)}}else bt.visible&&S.push(E,Rt,bt,W,Ot.z,null,U)}}let St=E.children;for(let Rt=0,bt=St.length;Rt<bt;Rt++)Vl(St[Rt],U,W,H)}function Nh(E,U,W,H){let{opaque:V,transmissive:St,transparent:Rt}=E;w.setupLightsView(W),rt===!0&&Bt.setGlobalState(R.clippingPlanes,W),H&&b.viewport(et.copy(H)),V.length>0&&aa(V,U,W),St.length>0&&aa(St,U,W),Rt.length>0&&aa(Rt,U,W),b.buffers.depth.setTest(!0),b.buffers.depth.setMask(!0),b.buffers.color.setMask(!0),b.setPolygonOffset(!1)}function Uh(E,U,W,H){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[H.id]===void 0){let Pt=Kt.has("EXT_color_buffer_half_float")||Kt.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[H.id]=new $e(1,1,{generateMipmaps:!0,type:Pt?gi:ni,minFilter:Ln,samples:Math.max(4,C.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:le.workingColorSpace})}let St=w.state.transmissionRenderTarget[H.id],Rt=H.viewport||et;St.setSize(Rt.z*R.transmissionResolutionScale,Rt.w*R.transmissionResolutionScale);let bt=R.getRenderTarget(),It=R.getActiveCubeFace(),Dt=R.getActiveMipmapLevel();R.setRenderTarget(St),R.getClearColor(re),qt=R.getClearAlpha(),qt<1&&R.setClearColor(16777215,.5),R.clear(),Ut&&Jt.render(W);let jt=R.toneMapping;R.toneMapping=mi;let ae=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),w.setupLightsView(H),rt===!0&&Bt.setGlobalState(R.clippingPlanes,H),aa(E,W,H),$.updateMultisampleRenderTarget(St),$.updateRenderTargetMipmap(St),Kt.has("WEBGL_multisampled_render_to_texture")===!1){let Pt=!1;for(let fe=0,Be=U.length;fe<Be;fe++){let Ee=U[fe],{object:ve,geometry:Qe,material:At,group:ai}=Ee;if(At.side===De&&ve.layers.test(H.layers)){let he=At.side;At.side=Ze,At.needsUpdate=!0,Fh(ve,W,H,Qe,At,ai),At.side=he,At.needsUpdate=!0,Pt=!0}}Pt===!0&&($.updateMultisampleRenderTarget(St),$.updateRenderTargetMipmap(St))}R.setRenderTarget(bt,It,Dt),R.setClearColor(re,qt),ae!==void 0&&(H.viewport=ae),R.toneMapping=jt}function aa(E,U,W){let H=U.isScene===!0?U.overrideMaterial:null;for(let V=0,St=E.length;V<St;V++){let Rt=E[V],{object:bt,geometry:It,group:Dt}=Rt,jt=Rt.material;jt.allowOverride===!0&&H!==null&&(jt=H),bt.layers.test(W.layers)&&Fh(bt,U,W,It,jt,Dt)}}function Fh(E,U,W,H,V,St){D!==null&&V.isNodeMaterial&&D.setObject(E,V),E.onBeforeRender(R,U,W,H,V,St),E.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),V.onBeforeRender(R,U,W,H,E,St),V.transparent===!0&&V.side===De&&V.forceSinglePass===!1?(V.side=Ze,V.needsUpdate=!0,R.renderBufferDirect(W,U,H,V,E,St),V.side=$i,V.needsUpdate=!0,R.renderBufferDirect(W,U,H,V,E,St),V.side=De):R.renderBufferDirect(W,U,H,V,E,St),E.onAfterRender(R,U,W,H,V,St)}function oa(E,U,W){U.isScene!==!0&&(U=Nt);let H=G.get(E),V=w.state.lights,St=w.state.shadowsArray,Rt=V.state.version,bt=gt.getParameters(E,V.state,St,U,W,w.state.lightProbeGridArray),It=gt.getProgramCacheKey(bt),Dt=H.programs;H.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?U.environment:null,H.fog=U.fog;let jt=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;H.envMap=ct.get(E.envMap||H.environment,jt),H.envMapRotation=H.environment!==null&&E.envMap===null?U.environmentRotation:E.envMapRotation,Dt===void 0&&(E.addEventListener("dispose",ki),Dt=new Map,H.programs=Dt);let ae=Dt.get(It);if(ae!==void 0){if(H.currentProgram===ae&&H.lightsStateVersion===Rt)return Oh(E,bt),ae}else bt.uniforms=gt.getUniforms(E),D!==null&&E.isNodeMaterial&&D.build(E,W,bt),E.onBeforeCompile(bt,R),ae=gt.acquireProgram(bt,It),Dt.set(It,ae),H.uniforms=bt.uniforms;let Pt=H.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Pt.clippingPlanes=Bt.uniform),Oh(E,bt),H.needsLights=uf(E),H.lightsStateVersion=Rt,H.needsLights&&(Pt.ambientLightColor.value=V.state.ambient,Pt.lightProbe.value=V.state.probe,Pt.sunLights.value=V.state.sun,Pt.sunLightShadows.value=V.state.sunShadow,Pt.directionalLights.value=V.state.directional,Pt.directionalLightShadows.value=V.state.directionalShadow,Pt.spotLights.value=V.state.spot,Pt.spotLightShadows.value=V.state.spotShadow,Pt.rectAreaLights.value=V.state.rectArea,Pt.ltc_1.value=V.state.rectAreaLTC1,Pt.ltc_2.value=V.state.rectAreaLTC2,Pt.pointLights.value=V.state.point,Pt.pointLightShadows.value=V.state.pointShadow,Pt.hemisphereLights.value=V.state.hemi,Pt.sunShadowMatrix.value=V.state.sunShadowMatrix,Pt.sunShadowCascade.value=V.state.sunShadowCascade,Pt.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Pt.spotLightMatrix.value=V.state.spotLightMatrix,Pt.spotLightMap.value=V.state.spotLightMap,Pt.pointShadowMatrix.value=V.state.pointShadowMatrix),H.lightProbeGrid=w.state.lightProbeGridArray.length>0,H.currentProgram=ae,H.uniformsList=null,ae}function Bh(E){if(E.uniformsList===null){let U=E.currentProgram.getUniforms();E.uniformsList=Ys.seqWithValue(U.seq,E.uniforms)}return E.uniformsList}function Oh(E,U){let W=G.get(E);W.outputColorSpace=U.outputColorSpace,W.batching=U.batching,W.batchingColor=U.batchingColor,W.instancing=U.instancing,W.instancingColor=U.instancingColor,W.instancingMorph=U.instancingMorph,W.skinning=U.skinning,W.morphTargets=U.morphTargets,W.morphNormals=U.morphNormals,W.morphColors=U.morphColors,W.morphTargetsCount=U.morphTargetsCount,W.numClippingPlanes=U.numClippingPlanes,W.numIntersection=U.numClipIntersection,W.vertexAlphas=U.vertexAlphas,W.vertexTangents=U.vertexTangents,W.toneMapping=U.toneMapping}function lf(E,U){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;x.setFromMatrixPosition(U.matrixWorld);for(let W=0,H=E.length;W<H;W++){let V=E[W];if(V.texture!==null&&V.boundingBox.containsPoint(x))return V}return null}function cf(E,U,W,H,V){U.isScene!==!0&&(U=Nt),$.resetTextureUnits();let St=U.fog,Rt=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?U.environment:null,bt=tt===null?R.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:le.workingColorSpace,It=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,Dt=ct.get(H.envMap||Rt,It),jt=H.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,ae=!!W.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Pt=!!W.morphAttributes.position,fe=!!W.morphAttributes.normal,Be=!!W.morphAttributes.color,Ee=mi;H.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(Ee=R.toneMapping);let ve=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Qe=ve!==void 0?ve.length:0,At=G.get(H),ai=w.state.lights;if(rt===!0&&(ot===!0||E!==j)){let be=E===j&&H.id===X;Bt.setState(H,E,be)}let he=!1;H.version===At.__version?(At.needsLights&&At.lightsStateVersion!==ai.state.version||At.outputColorSpace!==bt||V.isBatchedMesh&&At.batching===!1||!V.isBatchedMesh&&At.batching===!0||V.isBatchedMesh&&At.batchingColor===!0&&V._colorsTexture===null||V.isBatchedMesh&&At.batchingColor===!1&&V._colorsTexture!==null||V.isInstancedMesh&&At.instancing===!1||!V.isInstancedMesh&&At.instancing===!0||V.isSkinnedMesh&&At.skinning===!1||!V.isSkinnedMesh&&At.skinning===!0||V.isInstancedMesh&&At.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&At.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&At.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&At.instancingMorph===!1&&V.morphTexture!==null||At.envMap!==Dt||H.fog===!0&&At.fog!==St||At.numClippingPlanes!==void 0&&(At.numClippingPlanes!==Bt.numPlanes||At.numIntersection!==Bt.numIntersection)||At.vertexAlphas!==jt||At.vertexTangents!==ae||At.morphTargets!==Pt||At.morphNormals!==fe||At.morphColors!==Be||At.toneMapping!==Ee||At.morphTargetsCount!==Qe||!!At.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(he=!0):(he=!0,At.__version=H.version);let xi=At.currentProgram;he===!0&&(xi=oa(H,U,V),D&&H.isNodeMaterial&&D.onUpdateProgram(H,xi,At));let zi=!1,gn=!1,ds=!1,me=xi.getUniforms(),Ue=At.uniforms;if(b.useProgram(xi.program)&&(zi=!0,gn=!0,ds=!0),H.id!==X&&(X=H.id,gn=!0),At.needsLights){let be=lf(w.state.lightProbeGridArray,V);At.lightProbeGrid!==be&&(At.lightProbeGrid=be,gn=!0)}if(zi||j!==E){b.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),me.setValue(L,"projectionMatrix",E.projectionMatrix),me.setValue(L,"viewMatrix",E.matrixWorldInverse);let xn=me.map.cameraPosition;xn!==void 0&&xn.setValue(L,ut.setFromMatrixPosition(E.matrixWorld)),C.logarithmicDepthBuffer&&me.setValue(L,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&me.setValue(L,"isOrthographic",E.isOrthographicCamera===!0),j!==E&&(j=E,gn=!0,ds=!0)}if(At.needsLights&&(ai.state.sunShadowMap.length>0&&me.setValue(L,"sunShadowMap",ai.state.sunShadowMap,$),ai.state.directionalShadowMap.length>0&&me.setValue(L,"directionalShadowMap",ai.state.directionalShadowMap,$),ai.state.spotShadowMap.length>0&&me.setValue(L,"spotShadowMap",ai.state.spotShadowMap,$),ai.state.pointShadowMap.length>0&&me.setValue(L,"pointShadowMap",ai.state.pointShadowMap,$)),V.isSkinnedMesh){me.setOptional(L,V,"bindMatrix"),me.setOptional(L,V,"bindMatrixInverse");let be=V.skeleton;be&&(be.boneTexture===null&&be.computeBoneTexture(),me.setValue(L,"boneTexture",be.boneTexture,$))}V.isBatchedMesh&&(me.setOptional(L,V,"batchingTexture"),me.setValue(L,"batchingTexture",V._matricesTexture,$),me.setOptional(L,V,"batchingIdTexture"),me.setValue(L,"batchingIdTexture",V._indirectTexture,$),me.setOptional(L,V,"batchingColorTexture"),V._colorsTexture!==null&&me.setValue(L,"batchingColorTexture",V._colorsTexture,$));let vn=W.morphAttributes;if((vn.position!==void 0||vn.normal!==void 0||vn.color!==void 0)&&F.update(V,W,xi),(gn||At.receiveShadow!==V.receiveShadow)&&(At.receiveShadow=V.receiveShadow,me.setValue(L,"receiveShadow",V.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&U.environment!==null&&(Ue.envMapIntensity.value=U.environmentIntensity),Ue.dfgLUT!==void 0&&(Ue.dfgLUT.value=Cx()),gn){if(me.setValue(L,"toneMappingExposure",R.toneMappingExposure),At.needsLights&&hf(Ue,ds),St&&H.fog===!0&&Ft.refreshFogUniforms(Ue,St),Ft.refreshMaterialUniforms(Ue,H,K,Z,w.state.transmissionRenderTarget[E.id]),At.needsLights&&At.lightProbeGrid){let be=At.lightProbeGrid;Ue.probesSH.value=be.texture,Ue.probesMin.value.copy(be.boundingBox.min),Ue.probesMax.value.copy(be.boundingBox.max),Ue.probesResolution.value.copy(be.resolution)}Ys.upload(L,Bh(At),Ue,$)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Ys.upload(L,Bh(At),Ue,$),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&me.setValue(L,"center",V.center),me.setValue(L,"modelViewMatrix",V.modelViewMatrix),me.setValue(L,"normalMatrix",V.normalMatrix),me.setValue(L,"modelMatrix",V.matrixWorld),H.uniformsGroups!==void 0){let be=H.uniformsGroups;for(let xn=0,fs=be.length;xn<fs;xn++){let zh=be[xn];st.update(zh,xi),st.bind(zh,xi)}}return xi}function hf(E,U){E.ambientLightColor.needsUpdate=U,E.lightProbe.needsUpdate=U,E.sunLights.needsUpdate=U,E.sunLightShadows.needsUpdate=U,E.directionalLights.needsUpdate=U,E.directionalLightShadows.needsUpdate=U,E.pointLights.needsUpdate=U,E.pointLightShadows.needsUpdate=U,E.spotLights.needsUpdate=U,E.spotLightShadows.needsUpdate=U,E.rectAreaLights.needsUpdate=U,E.hemisphereLights.needsUpdate=U}function uf(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return tt},this.setRenderTargetTextures=function(E,U,W){let H=G.get(E);H.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),G.get(E.texture).__webglTexture=U,G.get(E.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:W,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,U){let W=G.get(E);W.__webglFramebuffer=U,W.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(E,U=0,W=0){tt=E,z=U,Y=W;let H=null,V=!1,St=!1;if(E){let bt=G.get(E);if(bt.__useDefaultFramebuffer!==void 0){b.bindFramebuffer(L.FRAMEBUFFER,bt.__webglFramebuffer),et.copy(E.viewport),Ct.copy(E.scissor),wt=E.scissorTest,b.viewport(et),b.scissor(Ct),b.setScissorTest(wt),X=-1;return}else if(bt.__webglFramebuffer===void 0)$.setupRenderTarget(E);else if(bt.__hasExternalTextures)$.rebindTextures(E,G.get(E.texture).__webglTexture,G.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let jt=E.depthTexture;if(bt.__boundDepthTexture!==jt){if(jt!==null&&G.has(jt)&&(E.width!==jt.image.width||E.height!==jt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");$.setupDepthRenderbuffer(E)}}let It=E.texture;(It.isData3DTexture||It.isDataArrayTexture||It.isCompressedArrayTexture)&&(St=!0);let Dt=G.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Dt[U])?H=Dt[U][W]:H=Dt[U],V=!0):E.samples>0&&$.useMultisampledRTT(E)===!1?H=G.get(E).__webglMultisampledFramebuffer:Array.isArray(Dt)?H=Dt[W]:H=Dt,et.copy(E.viewport),Ct.copy(E.scissor),wt=E.scissorTest}else et.copy(pt).multiplyScalar(K).floor(),Ct.copy(zt).multiplyScalar(K).floor(),wt=ce;if(W!==0&&(H=k),b.bindFramebuffer(L.FRAMEBUFFER,H)&&b.drawBuffers(E,H),b.viewport(et),b.scissor(Ct),b.setScissorTest(wt),V){let bt=G.get(E.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+U,bt.__webglTexture,W)}else if(St){let bt=U;for(let It=0;It<E.textures.length;It++){let Dt=G.get(E.textures[It]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+It,Dt.__webglTexture,W,bt)}}else if(E!==null&&W!==0){let bt=G.get(E.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,bt.__webglTexture,W)}X=-1};function kh(E){let U=G.get(E);return(U.__readFormat!==E.format||U.__readType!==E.type)&&(U.__readFormat=E.format,U.__readType=E.type,U.__formatReadable=C.textureFormatReadable(E.format),U.__typeReadable=C.textureTypeReadable(E.type)),U}this.readRenderTargetPixels=function(E,U,W,H,V,St,Rt,bt=0){if(!(E&&E.isWebGLRenderTarget)){Xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=G.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Rt!==void 0&&(It=It[Rt]),It){b.bindFramebuffer(L.FRAMEBUFFER,It);try{let Dt=E.textures[bt],jt=Dt.format,ae=Dt.type;E.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+bt);let Pt=kh(Dt);if(Pt.__formatReadable===!1){Xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Pt.__typeReadable===!1){Xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=E.width-H&&W>=0&&W<=E.height-V&&L.readPixels(U,W,H,V,_t.convert(jt),_t.convert(ae),St)}finally{let Dt=tt!==null?G.get(tt).__webglFramebuffer:null;b.bindFramebuffer(L.FRAMEBUFFER,Dt)}}},this.readRenderTargetPixelsAsync=async function(E,U,W,H,V,St,Rt,bt=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let It=G.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Rt!==void 0&&(It=It[Rt]),It)if(U>=0&&U<=E.width-H&&W>=0&&W<=E.height-V){b.bindFramebuffer(L.FRAMEBUFFER,It);let Dt=E.textures[bt],jt=Dt.format,ae=Dt.type;E.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+bt);let Pt=kh(Dt);if(Pt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Pt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let fe=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,fe),L.bufferData(L.PIXEL_PACK_BUFFER,St.byteLength,L.STREAM_READ),L.readPixels(U,W,H,V,_t.convert(jt),_t.convert(ae),0),L.bindBuffer(L.PIXEL_PACK_BUFFER,null);let Be=tt!==null?G.get(tt).__webglFramebuffer:null;b.bindFramebuffer(L.FRAMEBUFFER,Be);let Ee=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await ed(L,Ee,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,fe),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,St),L.bindBuffer(L.PIXEL_PACK_BUFFER,null),L.deleteBuffer(fe),L.deleteSync(Ee),St}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,U=null,W=0){let H=Math.pow(2,-W),V=Math.floor(E.image.width*H),St=Math.floor(E.image.height*H),Rt=U!==null?U.x:0,bt=U!==null?U.y:0;$.setTexture2D(E,0),L.copyTexSubImage2D(L.TEXTURE_2D,W,0,0,Rt,bt,V,St),b.unbindTexture()},this.copyTextureToTexture=function(E,U,W=null,H=null,V=0,St=0){let Rt,bt,It,Dt,jt,ae,Pt,fe,Be,Ee=E.isCompressedTexture?E.mipmaps[St]:E.image;if(W!==null)Rt=W.max.x-W.min.x,bt=W.max.y-W.min.y,It=W.isBox3?W.max.z-W.min.z:1,Dt=W.min.x,jt=W.min.y,ae=W.isBox3?W.min.z:0;else{let Ue=Math.pow(2,-V);Rt=Math.floor(Ee.width*Ue),bt=Math.floor(Ee.height*Ue),E.isDataArrayTexture?It=Ee.depth:E.isData3DTexture?It=Math.floor(Ee.depth*Ue):It=1,Dt=0,jt=0,ae=0}H!==null?(Pt=H.x,fe=H.y,Be=H.z):(Pt=0,fe=0,Be=0);let ve=_t.convert(U.format),Qe=_t.convert(U.type),At;U.isData3DTexture?($.setTexture3D(U,0),At=L.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?($.setTexture2DArray(U,0),At=L.TEXTURE_2D_ARRAY):($.setTexture2D(U,0),At=L.TEXTURE_2D),b.activeTexture(L.TEXTURE0),b.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,U.flipY),b.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),b.pixelStorei(L.UNPACK_ALIGNMENT,U.unpackAlignment);let ai=b.getParameter(L.UNPACK_ROW_LENGTH),he=b.getParameter(L.UNPACK_IMAGE_HEIGHT),xi=b.getParameter(L.UNPACK_SKIP_PIXELS),zi=b.getParameter(L.UNPACK_SKIP_ROWS),gn=b.getParameter(L.UNPACK_SKIP_IMAGES);b.pixelStorei(L.UNPACK_ROW_LENGTH,Ee.width),b.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ee.height),b.pixelStorei(L.UNPACK_SKIP_PIXELS,Dt),b.pixelStorei(L.UNPACK_SKIP_ROWS,jt),b.pixelStorei(L.UNPACK_SKIP_IMAGES,ae);let ds=E.isDataArrayTexture||E.isData3DTexture,me=U.isDataArrayTexture||U.isData3DTexture;if(E.isDepthTexture){let Ue=G.get(E),vn=G.get(U),be=G.get(Ue.__renderTarget),xn=G.get(vn.__renderTarget);b.bindFramebuffer(L.READ_FRAMEBUFFER,be.__webglFramebuffer),b.bindFramebuffer(L.DRAW_FRAMEBUFFER,xn.__webglFramebuffer);for(let fs=0;fs<It;fs++)ds&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,G.get(E).__webglTexture,V,ae+fs),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,G.get(U).__webglTexture,St,Be+fs)),L.blitFramebuffer(Dt,jt,Rt,bt,Pt,fe,Rt,bt,L.DEPTH_BUFFER_BIT,L.NEAREST);b.bindFramebuffer(L.READ_FRAMEBUFFER,null),b.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(V!==0||E.isRenderTargetTexture||G.has(E)){let Ue=G.get(E),vn=G.get(U);b.bindFramebuffer(L.READ_FRAMEBUFFER,N),b.bindFramebuffer(L.DRAW_FRAMEBUFFER,O);for(let be=0;be<It;be++)ds?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ue.__webglTexture,V,ae+be):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ue.__webglTexture,V),me?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,vn.__webglTexture,St,Be+be):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,vn.__webglTexture,St),V!==0?L.blitFramebuffer(Dt,jt,Rt,bt,Pt,fe,Rt,bt,L.COLOR_BUFFER_BIT,L.NEAREST):me?L.copyTexSubImage3D(At,St,Pt,fe,Be+be,Dt,jt,Rt,bt):L.copyTexSubImage2D(At,St,Pt,fe,Dt,jt,Rt,bt);b.bindFramebuffer(L.READ_FRAMEBUFFER,null),b.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else me?E.isDataTexture||E.isData3DTexture?L.texSubImage3D(At,St,Pt,fe,Be,Rt,bt,It,ve,Qe,Ee.data):U.isCompressedArrayTexture?L.compressedTexSubImage3D(At,St,Pt,fe,Be,Rt,bt,It,ve,Ee.data):L.texSubImage3D(At,St,Pt,fe,Be,Rt,bt,It,ve,Qe,Ee):E.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,St,Pt,fe,Rt,bt,ve,Qe,Ee.data):E.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,St,Pt,fe,Ee.width,Ee.height,ve,Ee.data):L.texSubImage2D(L.TEXTURE_2D,St,Pt,fe,Rt,bt,ve,Qe,Ee);b.pixelStorei(L.UNPACK_ROW_LENGTH,ai),b.pixelStorei(L.UNPACK_IMAGE_HEIGHT,he),b.pixelStorei(L.UNPACK_SKIP_PIXELS,xi),b.pixelStorei(L.UNPACK_SKIP_ROWS,zi),b.pixelStorei(L.UNPACK_SKIP_IMAGES,gn),St===0&&U.generateMipmaps&&L.generateMipmap(At),b.unbindTexture()},this.initRenderTarget=function(E){G.get(E).__webglFramebuffer===void 0&&$.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?$.setTextureCube(E,0):E.isData3DTexture?$.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?$.setTexture2DArray(E,0):$.setTexture2D(E,0),b.unbindTexture()},this.resetState=function(){z=0,Y=0,tt=null,b.reset(),Tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=le._getDrawingBufferColorSpace(t),e.unpackColorSpace=le._getUnpackColorSpace()}};var jr="1.1.0";var Et={height:146,width:20,cz:-24,front:-14,armH:118,pivotX:6.2,pivotZ:-14,armLen:34,armHalf:1,armTall:3.6,openYaw:.5,closeTime:.85,mountTop:26,mountR:10},fl={booster:{key:"booster",name:"Super Heavy",len:71,r:4.5,cg:28,pin:64,dry:18e4,engT:11e5,isp:2747,minThr:.4,cdEnd:70,cdSide:560,kn:130,stab:.55,finAuth:.7,rcs:.09,gimbal:.9,engines:(()=>{let s=[];for(let t=0;t<3;t++){let e=(90+t*120)*Math.PI/180;s.push({x:Math.cos(e)*1.05,z:Math.sin(e)*1.05,g:"c"})}for(let t=0;t<10;t++){let e=(t*36+18)*Math.PI/180;s.push({x:Math.cos(e)*2.5,z:Math.sin(e)*2.5,g:"i"})}for(let t=0;t<20;t++){let e=(t*18+9)*Math.PI/180;s.push({x:Math.cos(e)*3.85,z:Math.sin(e)*3.85,g:"o"})}return s})(),sets:{big:13,small:3},switchSpeed:48,bigSpeed:140},ship:{key:"ship",name:"Starship",len:50,r:4.5,cg:19,pin:42,dry:1e5,engT:11e5,isp:2747,minThr:.4,plate:!0,cdEnd:26,cdSide:300,kn:70,stab:0,finAuth:.9,rcs:.12,gimbal:1.4,engines:(()=>{let s=[];for(let t=0;t<3;t++){let e=(90+t*120)*Math.PI/180;s.push({x:Math.cos(e)*1.35,z:Math.sin(e)*1.35,g:"c"})}for(let t=0;t<3;t++){let e=(30+t*120)*Math.PI/180;s.push({x:Math.cos(e)*3.1,z:Math.sin(e)*3.1,g:"v"})}return s})(),sets:{big:3,small:2},switchSpeed:25,bigSpeed:9999}},os={day:{label:"Tag",sunEl:52,sunAz:140,exposure:1},afternoon:{label:"Nachmittag",sunEl:28,sunAz:235,exposure:1},dusk:{label:"Abendd\xE4mmerung",sunEl:4.5,sunAz:262,exposure:1.15},night:{label:"Nacht",sunEl:-18,sunAz:300,exposure:1.25},dawn:{label:"Morgennebel",sunEl:7,sunAz:95,exposure:1.1},storm:{label:"Sturm",sunEl:20,sunAz:250,exposure:.95}},vi=[{id:1,name:"Erster Fang",sub:"Ruhiger Tag, leichter Wind",start:"final",vehicle:"booster",tod:"day",wind:{base:2,dir:-1,gust:.6},fuel:8e4,failP:0,seed:101,tutorial:!0,brief:"Dein erster Fang. Der Booster ist bereits im Endanflug. Lenke ihn \xFCber die Startrampe, z\xFCnde rechtzeitig die Landetriebwerke und schliesse die Arme, wenn die Fangbolzen knapp \xFCber den Schienen sind."},{id:2,name:"Heimkehr",sub:"Die komplette R\xFCckkehr",start:"sep",vehicle:"booster",tod:"afternoon",wind:{base:4,dir:-1,gust:1.5},fuel:255e3,failP:0,seed:202,brief:"Nach der Stufentrennung fliegst du den ganzen Weg zur\xFCck: R\xFCckstoss-Z\xFCndung, Freiflug, Wiedereintritt, Landez\xFCndung und Fang. Achte beim R\xFCckstoss auf den Aufschlagpunkt."},{id:3,name:"Seitenwind",sub:"Kr\xE4ftiger, stetiger Wind von See",start:"entry",vehicle:"booster",tod:"afternoon",wind:{base:13,dir:-1,gust:2.5},fuel:84e3,failP:0,seed:303,brief:"Starker Seewind dr\xFCckt den Booster Richtung Land. Halte dagegen \u2013 mit Neigung in den Wind, besonders im Schwebeflug."},{id:4,name:"Nachtfang",sub:"Nur Turmlichter und Feuer",start:"entry",vehicle:"booster",tod:"night",wind:{base:5,dir:1,gust:1.5},fuel:7e4,failP:.02,seed:404,brief:"Ein Fang in tiefer Nacht. Der Turm ist beleuchtet, der Rest liegt im Dunkeln. Verlass dich auf die Instrumente."},{id:5,name:"Seenebel",sub:"Dichter Nebel \xFCber der K\xFCste",start:"entry",vehicle:"booster",tod:"dawn",wind:{base:3,dir:-1,gust:1},fuel:7e4,failP:.02,seed:505,fog:!0,brief:"Morgennebel liegt \xFCber dem Golf. Der Turm taucht erst sp\xE4t aus dem Dunst auf. Instrumentenanflug!"},{id:6,name:"Triebwerksausfall",sub:"Z\xFCndaussetzer & Ausfall",start:"entry",vehicle:"booster",tod:"day",wind:{base:5,dir:1,gust:2},fuel:74e3,failP:.18,engineOut:!0,seed:606,brief:"Die Telemetrie zeigt Probleme. Einzelne Triebwerke k\xF6nnten nicht z\xFCnden, und im Schwebeflug wird ein Mitteltriebwerk ausfallen. Halte den Booster trotzdem gerade."},{id:7,name:"Letzte Tropfen",sub:"Knapper Treibstoff",start:"sep",vehicle:"booster",tod:"dusk",wind:{base:4,dir:-1,gust:1.5},fuel:222e3,failP:.03,seed:707,brief:"Der Aufstieg hat mehr gekostet als geplant. Brenne beim R\xFCckstoss nur so viel wie n\xF6tig \u2013 jede Tonne fehlt dir sonst beim Fang."},{id:8,name:"Sturmfront",sub:"B\xF6en, Regen, Blitze",start:"entry",vehicle:"booster",tod:"storm",wind:{base:9,dir:-1,gust:8},fuel:84e3,failP:.05,seed:808,rain:!0,brief:"Eine Sturmfront zieht auf. Heftige B\xF6en sch\xFCtteln den Booster. Fange ihn, bevor das Wetter endg\xFCltig zumacht."},{id:9,name:"Schiffsfang",sub:"Bonus: Fang das Starship",start:"ship",vehicle:"ship",tod:"dusk",wind:{base:4,dir:1,gust:1.5},fuel:34e3,failP:.02,seed:909,bonus:!0,brief:"Bonusmission: Das Starship kommt in Bauchlage zur\xFCck. Steuere mit den Klappen, z\xFCnde f\xFCr das Aufrichten und fange es mit den Armen."},{id:10,name:"Zeitrennen",sub:"So schnell wie m\xF6glich fangen",start:"entry",vehicle:"booster",tod:"day",wind:{base:3,dir:-1,gust:1},fuel:74e3,failP:0,seed:1010,timeTrial:{gold:72,silver:82,bronze:96},brief:"Gegen die Uhr: vom Wiedereintritt bis zum Fang. Sp\xE4te, harte Z\xFCndung spart Zeit \u2013 aber nur, wenn der Fang gelingt."}],Un=[{id:"steel",name:"Edelstahl",desc:"Frisch vom Band",stars:0,tint:[.8,.81,.83],rough:.32,soot:.15,frost:.55},{id:"soot",name:"Russpatina",desc:"Veteran mit Flugspuren",stars:4,tint:[.62,.6,.58],rough:.5,soot:.85,frost:.4},{id:"frost",name:"Frostlinie",desc:"Volle Tanks, dicker Reif",stars:8,tint:[.84,.86,.9],rough:.36,soot:.25,frost:1},{id:"black",name:"Nachtschwarz",desc:"Keramikbeschichtung",stars:12,tint:[.1,.1,.11],rough:.55,soot:.3,frost:.25},{id:"gold",name:"Goldjubil\xE4um",desc:"Hundert F\xE4nge, ein Glanz",stars:18,tint:[.92,.74,.4],rough:.25,soot:.12,frost:.3},{id:"retro",name:"Retro-Weiss",desc:"Klassisches Rollmuster",stars:24,tint:[.93,.93,.92],rough:.6,soot:.15,frost:.2,pattern:"roll"}],ls=[{id:"b1",name:"Block 1",desc:"71 m, vier Gridfins",req:null,len:71,fins:4},{id:"b2",name:"Block 2",desc:"72 m, drei grosse Gridfins",req:{perfect:1},len:72.5,fins:3},{id:"b3",name:"Block 3",desc:"Schlank, integrierter Heissstufen-Ring",req:{missions:8},len:74,fins:3,sleek:!0}],Js=[{id:"auto",name:"Regie (Auto)",req:null},{id:"chase",name:"Verfolger",req:null},{id:"tower",name:"Turm-Kamera",req:null},{id:"drone",name:"Drohne",req:null},{id:"beach",name:"Strand-Zuschauer",req:null},{id:"arm",name:"Arm-Kamera",req:{mission:3}},{id:"ground",name:"Bodenkamera",req:{mission:5}},{id:"onboard",name:"Bordkamera",req:{mission:7}}],Qr=[{id:"first",name:"Erster Fang",desc:"Fange zum ersten Mal einen Booster."},{id:"perfect",name:"Perfektionist",desc:"Schaffe einen perfekten Fang."},{id:"feather",name:"Federleicht",desc:"Setze mit weniger als 0.5 m/s auf."},{id:"needle",name:"Nadel\xF6hr",desc:"Fange mit weniger als 0.3 m Versatz."},{id:"reserve",name:"Auf Reserve",desc:"Fange mit weniger als 4 % Treibstoff."},{id:"night",name:"Nachtschw\xE4rmer",desc:"Schaffe den Nachtfang."},{id:"fog",name:"Blindflug",desc:"Schaffe den Fang im Seenebel."},{id:"engine",name:"Einer fehlt",desc:"Fange trotz Triebwerksausfall."},{id:"storm",name:"Sturmreiter",desc:"Bezwinge die Sturmfront."},{id:"ship",name:"Schiffsf\xE4nger",desc:"Fange das Starship."},{id:"gold",name:"Zeitj\xE4ger",desc:"Hol dir Gold im Zeitrennen."},{id:"pro",name:"Profi",desc:"Fange auf der Stufe Profi."},{id:"boom",name:"Feuerwerk",desc:"Lass einen Booster spektakul\xE4r explodieren."},{id:"streak",name:"Serient\xE4ter",desc:"F\xFCnf F\xE4nge in Folge."},{id:"veteran",name:"Veteran",desc:"25 erfolgreiche F\xE4nge."},{id:"allstars",name:"Sternenhimmel",desc:"Sammle alle 30 Sterne."}],pl={easy:{id:"easy",name:"Leicht",desc:"Flugbahn, Z\xFCndhilfe, Lenkpfeile, Schub-Empfehlung, Positionshalten"},normal:{id:"normal",name:"Normal",desc:"Flugbahn und Z\xFCndanzeige"},pro:{id:"pro",name:"Profi",desc:"Direkte Lageregelung, keine Hilfen"}};function ri(s){let t=s>>>0;return function(){t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}var ta=class{constructor(t){let e=ri(t);this.v=new Float32Array(512);for(let i=0;i<512;i++)this.v[i]=e()*2-1}at(t){let e=Math.floor(t),i=t-e,n=this.v[e&511],r=this.v[e+1&511],a=i*i*(3-2*i);return n+(r-n)*a}fbm(t){return this.at(t)*.55+this.at(t*2.13+17.3)*.28+this.at(t*4.37+41.1)*.17}},we=(s,t,e)=>s<t?t:s>e?e:s;var ea=(s,t,e)=>{let i=we((e-s)/(t-s),0,1);return i*i*(3-2*i)},Ne=Math.PI/180;var Ks=9.81,bh=1/120,ml=s=>1.225*Math.exp(-Math.max(0,s)/8500),Ix=s=>340-.0039*we(s,0,11e3);function kd(s){return Et.pivotX+Math.tan(s)*-Et.pivotZ-Et.armHalf/Math.cos(s)}function Px(s){let t=-.3,e=Et.openYaw;for(let i=0;i<40;i++){let n=(t+e)/2;kd(n)>s?e=n:t=n}return(t+e)/2}var Fi=Px(4.62),Si=Et.openYaw,Lx={sep:{x:36e3,y:56e3,vx:720,vy:180,th:52*Ne,T0:162},entry:{x:5600,y:2e4,vx:-180,vy:-540,th:18*Ne,T0:318},final:{x:1150,y:6200,vx:-92,vy:-255,th:0,T0:388},ship:{x:1500,y:6e3,vx:-80,vy:-70,th:-90*Ne,T0:3720}};var gl=class{constructor(t,e={}){this.m=t,this.opts=Object.assign({assist:"normal",autoClose:!1,len:null},e);let i=fl[t.vehicle];if(this.V=Object.assign({},i),e.len&&i.key==="booster"){let r=e.len-i.len;this.V.len=e.len,this.V.pin=i.pin+r,this.V.cg=i.cg+r*.4}this.ship=i.key==="ship",this.rng=ri(t.seed*7919+(e.seedSalt|0)),this.noise=new ta(t.seed*31+5),this.noise2=new ta(t.seed*17+9);let n=Lx[t.start];this.x=n.x,this.y=n.y,this.vx=n.vx,this.vy=n.vy,this.th=n.th,this.om=0,this.T0=n.T0,this.t=0,this.fuel=t.fuel,this.fuel0=t.fuel,this.reserve=t.start==="sep"?52e3:0,this.eng=this.V.engines.map((r,a)=>({i:a,x:r.x,z:r.z,g:r.g,st:0,sp:0,tt:0,failed:!1})),this.mode="off",this.thrCmd=0,this.thr=0,this.T=0,this.phase=t.start==="sep"?"sep":(t.start==="ship","entry"),this.locked=t.start==="sep",this.burned=0,this.landUnlocked=t.start!=="sep"&&t.start!=="entry",this.ship&&(this.landUnlocked=!0),this.input={u:0,thr:0,close:!1,small:!1},this.auto=null,this.thTgt=this.th,this.thSm=this.th,this.arms={phi:Si,tgt:Si,y:Et.armH,vy:0,p:0,closing:!1,reopenAt:-1},this.attempts=0,this.events=[],this.timeScale=1,this.tsTarget=1,this.mach=0,this.q=0,this.heat=0,this.qPeak=0,this.maxQdone=!1,this.sonicDone=!1,this.wind=0,this.gustT=0,this.result=null,this.crash=null,this.caught=null,this.tipping=0,this.outOfFuel=!1,this.engineOutDone=!1,this.acc=0,this.flipDone=!1,this.gridfins=t.start!=="sep",this.finAct=0,this.lastFinCmd=0,this.lift=0,this.closeRequested=!1,this.stats={maxG:0,ignitions:0},this.prevPinY=this.pinY(),this.windDir=t.wind.dir,this.storm=!!t.rain,this.phase==="sep"?this.say("Stufentrennung best\xE4tigt","info"):this.ship?this.say("Starship in Bauchlage \u2013 Klappen aktiv","info"):this.say(t.start==="final"?"Endanflug \u2013 Booster im Sinkflug":"Wiedereintritt \u2013 Gridfins aktiv","info")}say(t,e="info",i=!0){this.events.push({type:"callout",text:t,kind:e,speak:i})}ev(t,e){this.events.push(Object.assign({type:t},e||{}))}mass(){return this.V.dry+this.fuel}axis(){return[Math.sin(this.th),Math.cos(this.th)]}bottomY(){return this.y-this.V.cg*Math.cos(this.th)}bottomX(){return this.x-this.V.cg*Math.sin(this.th)}pinY(){return this.y+(this.V.pin-this.V.cg)*Math.cos(this.th)}pinX(){return this.x+(this.V.pin-this.V.cg)*Math.sin(this.th)}catchCGY(){return Et.armH-(this.V.pin-this.V.cg)}speed(){return Math.hypot(this.vx,this.vy)}windAt(t,e){let i=this.m.wind,n=.55+.45*ea(0,800,t)+1.4*ea(1500,12e3,t),r=this.noise.fbm(e*.35+t*.0021)*i.gust;return this.storm&&(r+=Math.max(0,this.noise2.at(e*.12)-.25)*i.gust*1.6*Math.sign(this.noise2.at(e*.5+3)+.3)),this.windDir*i.base*n+r*(.6+.4*ea(0,300,t))}thrustMax(t){return t*this.V.engT}liveCount(){let t=0;for(let e of this.eng)(e.st===2||e.st===1)&&t++;return t}runningCount(){let t=0;for(let e of this.eng)e.st===2&&t++;return t}forces(t,e,i,n,r,a,o){let c=this.mass(),l=Math.sin(t),u=Math.cos(t),f=n-o,h=r,d=Math.hypot(f,h),g=i*l,v=i*u,m=0,p=0;if(d>.05){let y=-f/d,M=-h/d,x=l*y+u*M;if(m=l*M-u*y,p=.5*ml(a)*d*d,this.V.plate){g+=p*this.V.cdEnd*x*x*y,v+=p*this.V.cdEnd*x*x*M;let _=-m,T=p*this.V.cdSide*_*Math.abs(_);g+=T*u,v+=T*-l}else{let _=this.V.cdEnd*x*x+this.V.cdSide*m*m;g+=p*_*y,v+=p*_*M}let S=y-x*l,w=M-x*u,A=this.V.kn*x;g+=p*A*S,v+=p*A*w}return e.ax=g/c,e.ay=v/c-Ks,e.sinA=m,e.q=p,e}setInput(t,e){this.input.u=we(t,-1,1),this.input.thr=we(e,0,1)}requestClose(){return this.phase!=="land"&&this.phase!=="entry"||this.arms.tgt===Fi||this.arms.reopenAt>0?!1:(this.arms.tgt=Fi,this.arms.closing=!0,this.closeRequested=!0,this.closeState=null,this.ev("armsClose"),this.say("Arme schliessen","info",!1),!0)}ignite(t){let e=[];for(let n=0;n<this.eng.length&&e.length<t;n++)!this.eng[n].failed&&(this.eng[n].g==="c"||this.eng[n].g==="i")&&e.push(n);let i=0;for(let n of e){let r=this.eng[n];if(this.m.failP>0&&this.rng()<this.m.failP){r.failed=!0,r.st=3,i++,this.ev("engineFail",{i:n});continue}r.st=1,r.tt=.42+this.rng()*.22}this.stats.ignitions++,this.mode=t>=10?"big":"small",this.ev("ignite",{n:e.length-i}),i&&this.say(i===1?"Z\xFCndaussetzer bei einem Triebwerk":`Z\xFCndaussetzer bei ${i} Triebwerken`,"warn"),this.mode==="small"&&this.backup()}backup(){let t=0;for(let n of this.eng)n.g==="c"&&(n.st===1||n.st===2)&&t++;let e=this.liveCount(),i=this.ship?2:3;for(;e<i;){let n=this.eng.find(r=>!r.failed&&r.st===0&&(r.g==="i"||r.g==="c"));if(!n)break;if(this.m.failP>0&&this.rng()<this.m.failP*.5){n.failed=!0,n.st=3,this.ev("engineFail",{i:n.i});continue}n.st=1,n.tt=.5,e++,this.say("Ersatztriebwerk z\xFCndet","warn")}}shutdown(t=!0){for(let e of this.eng)(e.st===1||e.st===2)&&(e.st=0);this.mode="off",t&&this.ev("shutdown")}update(t,e=1){let i=1;this.phase==="sep"?i=2.5:this.phase==="boost"?i=this.mode==="off"?2.5:4:(this.phase==="coast"||this.phase==="entry"&&this.mode==="off")&&(i=1+8*ea(14e3,32e3,this.y)),this.tsTarget=i,this.timeScale+=(i-this.timeScale)*Math.min(1,t*2.5),Math.abs(this.timeScale-i)<.02&&(this.timeScale=i),this.acc+=Math.min(t,.1)*this.timeScale*e;let n=0;for(;this.acc>=bh&&n<60;)this.step(bh),this.acc-=bh,n++;n>=60&&(this.acc=0)}step(t){if(this.phase==="done"||this.phase==="crashed"||this.phase==="caught"){this.t+=t,this.catchLogic(t),this.postStep(t);return}this.t+=t;let e=this.V;this.auto&&this.auto.control(this,t);let i=this.input,n=this.windAt(this.y,this.t);this.wind=n;let r=this.mass();this.phase==="sep"&&Math.abs(this.th- -80*Ne)<7*Ne&&Math.abs(this.om)<.25&&(this.phase="boost",this.locked=!1,this.ev("phase",{p:"boost"}),this.say("Drehung abgeschlossen \u2013 R\xFCckstoss-Z\xFCndung bereit","go")),this.phase==="coast"&&this.y<34e3&&this.vy<0&&(this.phase="entry",this.gridfins=!0,this.locked=!1,this.ev("phase",{p:"entry"}),this.say("Gridfins aktiv \u2013 du steuerst","go")),this.phase==="entry"&&!this.landUnlocked&&this.y<11e3&&(this.landUnlocked=!0,this.say("Landez\xFCndung freigegeben","go"));let a=!this.locked&&(this.phase==="boost"||(this.phase==="entry"||this.phase==="land")&&this.landUnlocked),o=i.thr>=.05&&a&&this.fuel>0;if(o&&this.mode==="off"){let _=this.speed();this.ship?(this.ignite(3),this.mode="big"):this.ignite(this.phase==="boost"||_>e.bigSpeed?e.sets.big:e.sets.small),this.phase==="boost"?this.say("R\xFCckstoss-Z\xFCndung","info"):(this.phase!=="land"&&(this.phase="land",this.ev("phase",{p:"land"})),this.say(this.mode==="big"?"Landez\xFCndung \u2013 13 Triebwerke":"Landez\xFCndung","info"))}else!o&&this.mode!=="off"&&(this.shutdown(),this.phase==="boost"&&this.burned>2&&(this.phase="coast",this.locked=!0,this.ev("phase",{p:"coast"}),this.say("Brennschluss \u2013 Freiflug","info")));if(this.mode!=="off"){let _=e.minThr+(1-e.minThr)*we((i.thr-.05)/.95,0,1),T=1;if(this.opts.assist!=="pro"&&this.phase==="land"&&(T=1/Math.max(.86,Math.cos(this.th))),this.thr+=(Math.min(1,_*T)-this.thr)*Math.min(1,t/.18),this.mode==="big"&&this.phase==="land"&&(-this.vy<e.switchSpeed||this.input.small&&-this.vy<130)){let R=this.ship?2:3,I=0;for(let D of this.eng)(D.st===1||D.st===2)&&(D.g==="c"&&I<R?I++:D.st=0);this.mode="small",this.backup(),this.say(this.ship?"Wechsel auf 2 Triebwerke":"Wechsel auf 3 Mitteltriebwerke","info"),this.ev("switch")}if(this.m.engineOut&&!this.engineOutDone&&this.mode==="small"&&this.bottomY()<Et.armH+260){this.engineOutDone=!0;let R=this.eng.find(I=>I.g==="c"&&I.st===2&&I.i===1)||this.eng.find(I=>I.g==="c"&&I.st===2);R&&(R.st=3,R.failed=!0,this.ev("engineFail",{i:R.i,hard:!0}),this.say("Ausfall Mitteltriebwerk!","bad"),this.backupAt=this.t+.9)}this.backupAt&&this.t>this.backupAt&&(this.backupAt=0,this.backup())}else this.thr+=(0-this.thr)*Math.min(1,t/.1);let c=0,l=0;for(let _ of this.eng){_.st===1&&(_.tt-=t,_.tt<=0&&(_.st=2));let T=_.st===2?1:0;_.sp+=(T-_.sp)*Math.min(1,t*(T>_.sp?3.2:_.failed?9:5)),_.sp<.002&&(_.sp=0);let R=e.engT*_.sp*Math.max(this.thr,_.st===2?e.minThr:0);c+=R,l+=R*_.x}this.fuel<=0&&(c=0,l=0,this.outOfFuel||(this.outOfFuel=!0,this.shutdown(),this.say("Treibstoff ersch\xF6pft!","bad"))),this.T=c;let u=c/e.isp;this.fuel=Math.max(0,this.fuel-u*t),this.phase==="boost"&&c>0&&(this.burned+=t),this.phase==="boost"&&this.reserve&&this.fuel<this.reserve&&!this.reserveWarned&&(this.reserveWarned=!0,this.say("Landereserve erreicht \u2013 Brennschluss!","warn"));let f=this.opts.assist==="pro",h;if(this.phase==="sep")h=-80*Ne;else if(this.phase==="boost")h=(-80+i.u*22)*Ne;else if(this.phase==="coast")h=0;else if(this.ship&&this.mode==="off"&&this.th<-40*Ne)h=f&&!this.auto?(-90+i.u*25)*Ne:this.searchTilt(i.aCmd??i.u*1.4,-118*Ne,-62*Ne,n,-90*Ne);else{let _=(this.phase==="land"?10:12)*Ne,T=0;{let R=this.vx-n;this.vy<-5&&(T=we(Math.atan2(-R,-this.vy),-35*Ne,35*Ne)*we(this.q/2e4,0,1))}if(f&&!this.auto)h=T+i.u*_*1.1;else{let R=i.aCmd;if(R==null){let I=this.phase==="land"?3.2:4.5;R=i.u*I,this.opts.assist==="easy"&&this.bottomY()<2500&&(R+=(1-Math.abs(i.u))*(-.55*this.vx))}h=this.searchTilt(R,T-_,T+_,n,T)}}this.thTgt=h,this.thSm+=(h-this.thSm)*Math.min(1,t/.22);let d=this.q/(this.ship?4e3:25e3),g=e.rcs*(this.phase==="sep"?3.5:1)+e.gimbal*Math.min(1.5,c/(3*e.engT))+(this.gridfins?e.finAuth*Math.min(1.6,d):0);this.ship&&this.mode!=="off"&&(g+=.6);let v=f?1.7:2.1,p=v*v*(this.thSm-this.th)-2*.95*v*this.om;p=we(p,-g,g),this.finAct=p/Math.max(g,.001);let y=r*e.len*e.len/12,M=this.forces(this.th,this._f||(this._f={}),c,this.vx,this.vy,this.y,n);this.q=M.q;let x=p+l*3/y-e.stab*Math.min(2,M.q/25e3)*M.sinA-.15*Math.min(2,M.q/25e3)*this.om;this.storm&&(x+=this.noise2.fbm(this.t*1.3)*.05*Math.min(1,M.q/3e3)),this.om+=x*t,this.th+=this.om*t,this.vx+=M.ax*t,this.vy+=M.ay*t,this.x+=this.vx*t,this.y+=this.vy*t;let S=Math.hypot(M.ax,M.ay+Ks)/Ks;S>this.stats.maxG&&this.t>1&&(this.stats.maxG=S);let w=this.speed(),A=w/Ix(this.y);!this.sonicDone&&this.mach>=1&&A<1&&this.vy<0&&this.y<2e4&&(this.sonicDone=!0,this.ev("sonic"),this.say("\xDCberschallknall \xFCber der K\xFCste","info",!1)),this.mach=A,(this.phase==="entry"||this.phase==="coast")&&(M.q>this.qPeak?this.qPeak=M.q:!this.maxQdone&&this.qPeak>15e3&&M.q<this.qPeak*.97&&(this.maxQdone=!0,this.say("Max Q \u2013 maximale aerodynamische Last","info"),this.ev("maxq"))),this.heat=we(ml(this.y)*w*w*w/32e6,0,1.5)*(this.vy<0?1:.3),this.catchLogic(t),this.groundLogic(t),this.tipUpdate(t),this.prevPinY=this.pinY()}searchTilt(t,e,i,n,r){let a=this._sf||(this._sf={}),o=r,c=1e9,l=Math.max(this.T,this.mode!=="off"?this.V.engT*this.V.minThr*2:0),u=0;this.mode==="off"&&(this.forces(r,a,0,this.vx,this.vy,this.y,n),u=a.ax);for(let f=e;f<=i+1e-6;f+=.5*Ne){this.forces(f,a,l,this.vx,this.vy,this.y,n);let h=Math.abs(a.ax-u-t)+Math.abs(f-r)*.25;h<c&&(c=h,o=f)}return o}catchLogic(t){let e=this.arms,i=this.V,n=Et.armH,r=(Si-Fi)/Et.closeTime;e.reopenAt>0&&this.t>=e.reopenAt&&(e.tgt=Si,e.reopenAt=-1,this.ev("armsOpen"));let a=e.tgt-e.phi;if(e.phi+=we(a,-r*t,r*t),e.p=(Si-e.phi)/(Si-Fi),this.phase==="caught")return;let o=kd(e.phi),c=this.pinY();if(this.opts.autoClose&&this.opts.assist==="easy"&&!this.auto&&e.tgt===Si&&e.reopenAt<0&&this.phase==="land"){let m=c-n;m>.8&&m<2.5+Math.abs(this.vy)*Et.closeTime*1.1&&Math.abs(this.x)<2.2&&Math.abs(this.vx)<1.8&&Math.abs(this.th)<3.5*Ne&&this.vy>-4.5&&this.requestClose()}let l=Math.cos(this.th),u=Math.sin(this.th),f=i.r/Math.max(.3,l),h=2*Et.armHalf/Math.cos(e.phi),d=0,g=0,v=!1;for(let m=0;m<3;m++){let y=(n-Et.armTall*m/2-this.y)/l;if(y<-i.cg||y>i.len-i.cg)continue;let M=this.x+y*u,x=M-f,S=M+f;if(S>o&&x<o+h)if(v=!0,M<o){let w=S-o;w>d&&(d=w,g=1)}else d=99;if(x<-o&&S>-o-h)if(v=!0,M>-o){let w=-o-x;w>d&&(d=w,g=-1)}else d=99}if(v)if(e.p>.55&&Math.abs(this.x)<3.3&&d<3.4)this.x-=g*d*.6,Math.sign(this.vx)===g&&(this.vx*=.6),this.centered||(this.centered=!0,this.ev("armTouch",{pen:d}));else return this.doCrash("Kollision mit einem Fangarm","arm");if(e.tgt===Fi&&e.p>=.999&&e.reopenAt<0){if(this.closeState||(this.closeState={pinDh:c-n,x:this.x,t:this.t},c<n-.25&&(this.attempts++,e.reopenAt=this.t+1,this.say("Bolzen unter den Schienen \u2013 Arme \xF6ffnen!","bad"),this.ev("miss"))),this.prevPinY>=n&&c<n&&Math.abs(this.x)<3.5)return this.doCatch();if(c>n+.25&&this.closeState.pinDh<-.25&&c-n<Et.armTall+1&&this.vy>.4)return this.doCrash("Bolzen von unten gegen den Arm","arm")}e.tgt===Fi&&this.closeState&&this.closeState.pinDh>Et.armTall+40&&c-n>60}doCatch(){let t=this.V,e=-this.vy,i=Math.abs(this.vx),n=Math.abs(this.x),r=Math.abs(this.th)/Ne,a=this.fuel/(this.reserve?24e4:this.fuel0)*100,o=this.fuel,c=(g,v,m,p)=>g<=v?0:g<=m?1:g<=p?2:3,l=c(e,1,2.6,5.2),u=c(n,.8,1.8,3.2),f=c(r,1.6,3.2,6.5),h=c(i,.7,1.6,3.2),d=Math.max(l,u,f,h);if(this.attempts>0&&d<1&&(d=1),this.shutdown(),this.caught={vy:e,vx:i,off:n,tilt:r,fuelPct:a,fuelAbs:o,grade:d,t:this.t,attempts:this.attempts,parts:{gv:l,gx:u,gt:f,gh:h}},d>=3){this.caught.grade=3;let g=l>=3?"Aufprall zu hart \u2013 Struktur versagt":f>=3?"Zu schr\xE4g \u2013 Booster rutscht aus den Armen":u>=3?"Zu weit neben der Mitte":"Zu viel Seitw\xE4rtsfahrt";return this.doCrash(g,"catch")}this.phase="caught",this.ev("contact",{vy:e,grade:d}),this.arms.vy=-e*.9,this.caughtT=this.t,this.say(d===0?"Booster gefangen \u2013 perfekt!":d===1?"Booster gefangen!":"Booster gefangen \u2013 harter Fang","go")}doCrash(t,e){if(this.phase==="crashed")return;let i=this.speed();this.crash={why:t,kind:e,x:this.x,y:this.y,bx:this.bottomX(),by:this.bottomY(),vx:this.vx,vy:this.vy,th:this.th,om:this.om,sp:i,t:this.t,fuel:this.fuel,water:this.overWater(this.bottomX())&&this.bottomY()<5},this.shutdown(!1);for(let n of this.eng)n.st=0,n.sp=0;this.phase="crashed",this.ev("crash",this.crash),this.say(t,"bad")}overWater(t){return t>720}groundLogic(t){if(this.phase==="crashed"||this.phase==="caught"||this.phase==="done")return;let e=this.bottomY(),i=this.bottomX(),n=Math.abs(i)<Et.mountR+2,r=n?Et.mountTop:this.overWater(i)?0:1.5,a=e-Math.abs(Math.sin(this.th))*this.V.r;if(a<=r){let o=this.speed();if(this.tipping>0)return;o<3.5&&Math.abs(this.th)<.3?(this.tipping=1,this.y+=r-a,this.vx=0,this.vy=0,this.say(n?"Aufgesetzt statt gefangen \u2013 Booster kippt!":"Notlandung \u2013 Booster kippt!","bad"),this.tipT=this.t):this.doCrash(this.overWater(i)?"Wasserung \u2013 Booster im Golf versunken":n?"Aufprall auf dem Starttisch":"Aufprall am Boden","ground")}}postStep(t){if(this.phase==="caught"||this.phase==="done"&&this.caught){let e=this.arms,i=14,n=4.2;e.vy+=(-i*(e.y-Et.armH)-n*e.vy)*t,e.y+=e.vy*t,this.x+=(0-this.x)*Math.min(1,t*1.5),this.vx=0,this.om+=(-3.5*this.th-1.4*this.om)*t,this.th+=this.om*t,this.y=e.y-(this.V.pin-this.V.cg)*Math.cos(this.th)+.15,this.vy=e.vy,this.phase==="caught"&&this.t-this.caughtT>3.6&&(this.phase="done",this.ev("done"))}}tick(t){}tipUpdate(t){if(this.tipping>0&&this.phase!=="crashed"){let e=this.th>=0?1:-1;this.om+=e*.9*t,this.th+=this.om*t,(Math.abs(this.th)>.65||this.t-this.tipT>2.6)&&this.doCrash("Booster umgekippt","ground")}}predict(t={}){let e=t.pts||null,i=0,n=this.x,r=this.y,a=this.vx,o=this.vy,c=this.catchCGY(),l=t.thrust?this.T:0,u={},f=0,h=t.horizon||900,d=this.th,g=this.mass();for(;f<h;){let v=t.thrust?.1:we((r-c)/1500,.08,1.5),m=this.windAt(r,this.t+f)*(t.noGust,1);if(t.thrust||(d=Math.hypot(a-m,o)>1?Math.atan2(-(a-m),-o):0,this.ship&&d<-.8&&(d=-Math.PI/2),!this.ship&&o>0&&(d=this.th)),this.forces(d,u,l,a,o,r,m),a+=u.ax*v,o+=u.ay*v,n+=a*v,r+=o*v,f+=v,e&&i<e.length/3&&(e[i*3]=n,e[i*3+1]=r,e[i*3+2]=f,i++),o<0&&r<=c){let p=(c-r)/o;n+=a*p,f+=p;break}if(t.thrust&&o>0&&f>1)break}return{x:n,t:f,n:i,vy:o,vx:a,y:r}}predictLanding(){let t=this.V,e=this.x,i=this.y,n=this.vx,r=this.vy,a=0,o=this.catchCGY()+1.2,c=this._pf||(this._pf={}),l=this.mass(),u=t.sets.big,f=this.mode!=="off",h=-1,d=this.profile();for(;a<600;){let g=f?.1:we((i-o)/1500,.08,1),v=this.windAt(i,this.t+a),m=n-v,p=Math.hypot(m,r),y=p>1&&r<-5?Math.atan2(-m,-r):0;this.ship&&!f&&(y=-Math.PI/2);let M=0;if(!f){let S=.5*ml(i)*p*p*t.cdEnd/l,w=Math.max(1,.55*(u*t.engT/l-Ks)+.45*S),A=Math.max(0,-r),_=A<=d.vs?A*A/(2*d.aS):d.dS+(A*A-d.vs*d.vs)/(2*w);_+=A*.75+(this.ship?A*2.2:0),this.landUnlocked!==!1&&i<=o+_&&r<-5&&(f=!0,h=a)}if(f){let x=.5*ml(i)*p*p;y*=we(x/2e4,0,1),this.forces(y,c,0,n,r,i,v);let S=i-o,w=Math.max(0,(r*r-d.vs*d.vs)/(2*Math.max(5,S-d.dS)));if(M=we(l*(w-c.ay)/Math.max(.5,Math.cos(y)),u*t.minThr*t.engT,u*t.engT),-r<d.vs){let A=2*Math.max(0,S)/Math.max(1,-r);e+=n*A*.45;break}}if(this.forces(y,c,M,n,r,i,v),n+=c.ax*g,r+=c.ay*g,e+=n*g,i+=r*g,a+=g,i<=o&&r<0)break}return{x:e,t:a,tIgn:h}}profile(){let t=this.V,e=this.mass(),i=t.sets.big,n=t.sets.small,r=Math.max(.8,.7*(n*t.engT/Math.max(e-8e3,t.dry)-Ks)),a=this.q*t.cdEnd/e,o=Math.max(1,.55*(i*t.engT/e-Ks)+.45*a),c=this.ship?24:44;return{aS:r,aB:o,vs:c,dS:c*c/(2*r)}}refVy(t){let e=this.profile();return t<=0?0:t<=e.dS?-Math.sqrt(2*e.aS*t):-Math.sqrt(e.vs*e.vs+2*e.aB*(t-e.dS))}refAcc(t){let e=this.profile();return t<=e.dS?e.aS:e.aB}burnAltitude(){let t=this.profile(),e=Math.max(0,-this.vy),i=e<=t.vs?e*e/(2*t.aS):t.dS+(e*e-t.vs*t.vs)/(2*t.aB);return i+=e*(this.mode==="off"?.75:0)+(this.ship?e*2.2:0),this.catchCGY()+1.2+i}};var Dx=0;function Sh(s,t){t=t||{};let e=Et.armH,i=s.V;if(t.aCmd=0,t.thr=0,t.ignite=!1,t.close=!1,t.burnAlt=0,t.mode=s.phase,s.phase==="boost")return t.thr=1,t.aCmd=0,s.pred&&s.pred.x<(s.bbAim??250)&&(t.thr=0),t;if(s.phase!=="entry"&&s.phase!=="land")return t;let n=s.pinY()-(e+1.2),r=s.ship;if(s.mode==="off"){let M=s.pred,x=s.predL;if(M){let S=s.landUnlocked&&x?x.x:M.x,w=Math.max(M.t,3);if(t.aCmd=we(-2.4*S/(w*w)-(w<25?.35*(s.vx+S/w)*0:0),-4.5,4.5),s.bottomY()<3500&&(t.aCmd=we(t.aCmd-.02*s.x-0*s.vx,-4.5,4.5)),s.bottomY()<7e3&&s.landUnlocked){let A=Math.max(4,x&&x.t||w),_=we(-s.x/A,-40,40);t.aCmd=we(t.aCmd-Dx*(s.vx-_),-4.5,4.5)}}return t.burnAlt=s.burnAltitude(),s.landUnlocked&&s.y<=t.burnAlt&&s.vy<-5&&(t.ignite=!0,t.thr=1),t}let a=s._gf||(s._gf={});s.forces(s.th,a,0,s.vx,s.vy,s.y,s.wind);let o=a.ay,c,l=Math.abs(s.x)+Math.abs(s.vx)*1.5,u=l>5.5?76:l>2.2?9:0,f=n-u,h=s.profile();if(t.small=!1,s.mode==="big"&&f>h.dS+15){c=Math.max(0,(s.vy*s.vy-h.vs*h.vs)/(2*(f-h.dS)));let x=Math.max(1,s.liveCount())*i.minThr*i.engT/s.mass()+o;c<x*.8&&-s.vy<125&&(t.small=!0)}else if(f>14){let M=-Math.sqrt(12.9+2*h.aS*(f-12));c=(s.vy<M?Math.max(0,(s.vy*s.vy-12.9)/(2*(f-12))):h.aS)+1*(M-s.vy),s.mode==="big"&&(t.small=-s.vy<125)}else{let M=f>0?-we(.8+f*.22,.8,3.6):we(-f*.4,0,2);s.arms.tgt===Fi&&s.arms.p>.98&&s.arms.reopenAt<0&&(M=-.75),c=(M-s.vy)*1.8}s.vy>2.5&&(c=Math.min(c,-1));let d=s.mass(),g=Math.max(.5,Math.cos(s.th)),v=d*(c-o)/g,m=Math.max(1,s.liveCount()),p=v/(m*i.engT);t.thrEff=p,t.thr=we(.05+.95*(p-i.minThr)/(1-i.minThr),.06,1);let y=we(2*Math.max(n,0)/Math.max(1,-s.vy),2.5,40);if(n>60&&s.vy<-8){let M=s.x+s.vx*y;t.aCmd=we(-3.2*M/(y*y),-5,5)}else t.aCmd=we(-.22*s.x-1.1*s.vx,-3.2,3.2);return r&&s.th<-20*Ne&&(t.aCmd=0),t.close=s.arms.tgt!==Fi&&s.arms.reopenAt<0&&n>-.4&&n<2.2&&Math.abs(s.x)<1.1&&Math.abs(s.vx)<.6&&Math.abs(s.th)<1.6*Ne&&s.vy>-3,t}var Fn=class{constructor(t={}){this.tp=0,this.g={},this.bbAim=t.bbAim??250,this.lateClose=t.lateClose||0,this.sloppy=t.sloppy||0}control(t,e){this.tp-=e,this.tp<=0&&(t.phase==="boost"||t.phase==="entry"||t.phase==="land"&&t.mode==="off")&&(t.pred=t.predict(),t.phase!=="boost"&&(t.predL=t.predictLanding()),this.tp=t.phase==="boost"?.2:.25),t.bbAim=this.bbAim;let i=Sh(t,this.g);t.input.aCmd=i.aCmd+this.sloppy*Math.sin(t.t*.7)*2.5,t.input.u=0,t.input.thr=i.thr,t.input.small=!!i.small,t.phase==="land"&&t.mode==="off"&&!i.ignite&&(t.input.thr=0),i.close&&!this.lateClose&&t.requestClose()}};var ab={falloff:{value:.0011},horizon:{value:new ht(.6,.7,.85)}};function zd(){$t.fog_pars_vertex=`
#ifdef USE_FOG
  varying vec3 vFogWorld;
#endif`,$t.fog_vertex=`
#ifdef USE_FOG
  vec4 fogW = vec4(transformed, 1.0);
  #ifdef USE_INSTANCING
    fogW = instanceMatrix * fogW;
  #endif
  vFogWorld = (modelMatrix * fogW).xyz;
#endif`,$t.fog_pars_fragment=`
#ifdef USE_FOG
  uniform vec3 fogColor;
  varying vec3 vFogWorld;
  uniform float fogDensity;
  uniform float fogNear;
  uniform float fogFar;
#endif`,$t.fog_fragment=`
#ifdef USE_FOG
  {
    vec3 rd = vFogWorld - cameraPosition;
    float dist = length(rd);
    float b = 0.0011;
    float camH = max(cameraPosition.y, 0.0);
    float dy = rd.y;
    float fogAmt;
    float k = fogDensity * exp(-camH * b); float fogAir = fogDensity * dist * 0.14;
    if (abs(dy) > 0.01) fogAmt = k * dist * (1.0 - exp(-dy * b)) / (dy * b);
    else fogAmt = k * dist;
    fogAmt = 1.0 - exp(-max(fogAmt + fogAir, 0.0));
    gl_FragColor.rgb = mix(gl_FragColor.rgb, fogColor, clamp(fogAmt, 0.0, 1.0));
  }
#endif`}var ia=`
vec3 applyFog(vec3 col, vec3 wp, vec3 camPos, vec3 fogCol, float dens){
  vec3 rd = wp - camPos; float dist = length(rd); float b = 0.0011;
  float k = dens * exp(-max(camPos.y, 0.0) * b); float dy = rd.y; float f;
  if (abs(dy) > 0.01) f = k * dist * (1.0 - exp(-dy * b)) / (dy * b); else f = k * dist;
  f = 1.0 - exp(-max(f + dens * dist * 0.14, 0.0));
  return mix(col, fogCol, clamp(f, 0.0, 1.0));
}`;function ji(s,t){let e=document.createElement("canvas");return e.width=s,e.height=t,e}function Nx(s,t,e){let i=ri(e),n=new Float32Array(t*t);for(let a=0;a<n.length;a++)n[a]=i();let r=new Float32Array(s*s);for(let a=0;a<s;a++)for(let o=0;o<s;o++){let c=o/s*t,l=a/s*t,u=Math.floor(c),f=Math.floor(l),h=c-u,d=l-f,g=h*h*(3-2*h),v=d*d*(3-2*d),m=n[f%t*t+u%t],p=n[f%t*t+(u+1)%t],y=n[(f+1)%t*t+u%t],M=n[(f+1)%t*t+(u+1)%t];r[a*s+o]=(m+(p-m)*g)*(1-v)+(y+(M-y)*g)*v}return r}function Bi(s,t,e=4,i=4){let n=new Float32Array(s*s),r=.5,a=0;for(let o=0;o<e;o++){let c=Nx(s,i<<o,t+o*101);for(let l=0;l<n.length;l++)n[l]+=c[l]*r;a+=r,r*=.5}for(let o=0;o<n.length;o++)n[o]/=a;return n}var ye={};function Qi(s,t={}){let e=new fn(s);return e.wrapS=t.wrapS??cn,e.wrapT=t.wrapT??cn,e.anisotropy=t.aniso??4,t.srgb!==!1&&(e.colorSpace=Je),e.needsUpdate=!0,e}function Hd(s,t,e={}){let i="hull:"+s.id+":"+t+":"+(e.ship?"s":"b")+":"+(e.small?1:0)+(e.hi?"h":"");if(ye[i])return ye[i];let n=e.small?256:e.hi?1024:512,r=e.small?1024:2048,a=e.r||4.5,o=2*Math.PI*a,c=ji(n,r),l=ji(n,r),u=ji(n,r),f=c.getContext("2d"),h=l.getContext("2d"),d=u.getContext("2d"),g=Bi(256,7+t|0,5,4),v=Bi(256,19+t|0,4,4),m=Bi(256,33,3,16),p=f.createImageData(n,r),y=h.createImageData(n,r),M=d.createImageData(n,r),x=new Float32Array(n*r),[S,w,A]=s.tint,_=1.83,T=t/_,R=ri(99+t*3),I=[];for(let z=0;z<Math.ceil(T)+2;z++)I.push([R(),R(),R(),R()]);let D=e.ship?[t*.62]:[t*.46,t*.83],k=n/o,N=r/t;for(let z=0;z<r;z++){let tt=(1-z/r)*t,X=Math.floor(tt/_),j=tt/_-X,et=Math.min(j,1-j)*_,Ct=Math.max(0,1-et*10),wt=0;for(let pt of D)wt=Math.max(wt,Math.max(0,1-Math.abs(tt-pt)*2.2));let re=s.soot*Math.pow(Math.max(0,1-tt/(t*.45)),1.5),qt=e.ship?0:Math.max(0,1-tt/7),te=e.ship?0:(tt>5&&tt<t*.44?1:0)*.85+(tt>t*.5&&tt<t*.78?.55:0),Z=I[X]||[0,0,0,0],K=z>>3&255,mt=z*3&255,Vt=z>>4&255;for(let pt=0;pt<n;pt++){let zt=pt/n,ce=g[K*256+(pt*256/n*2&255)],it=g[mt*256+(pt*3&255)],rt=v[Vt*256+(pt*512/n&255)],ot=0;for(let $=0;$<3;$++){let ct=Math.abs(zt-Z[$]);ct=Math.min(ct,1-ct)*o,ot=Math.max(ot,Math.max(0,1-ct*10))}let lt=Math.max(Ct,ot*.85),ut=(ce-.5)*.9*Math.min(1,et*1.6),Ot=.8+(ce-.5)*.2+(it-.5)*.05+Math.sin(zt*6.283*3+tt*.6)*.012+(Z[3]-.5)*.05;Ot-=lt*.16+wt*.06;let Nt=lt*.3+qt*.5,Ut=S*Ot+Nt*.06,Ht=w*Ot+Nt*.015,L=A*Ot-Nt*.02+qt*.04*(1-qt),ie=Math.max(0,Math.min(1,re*(.45+ce*.6)*(.55+.9*Math.max(0,rt-.35))));Ut=Ut*(1-ie)+.05*ie,Ht=Ht*(1-ie)+.045*ie,L=L*(1-ie)+.04*ie;let Kt=qt*qt*.7;Ut*=1-Kt*.6,Ht*=1-Kt*.7,L*=1-Kt*.75;let C=Math.min(1,s.frost*te*Math.max(0,ce-.36+(m[mt*256+(pt*5&255)]-.5)*.3)*1.6)*(e.frostOff?0:1);Ut+=(.93-Ut)*C*.7,Ht+=(.95-Ht)*C*.7,L+=(.98-L)*C*.7,s.pattern==="roll"&&(Math.floor(zt*4)+(tt>t*.5?1:0))%2&&tt>8&&tt<t-6&&(Ut*=.12,Ht*=.12,L*=.12);let b=Math.max(0,1-Math.abs(zt-.25)*80);Ut*=1-b*.25,Ht*=1-b*.25,L*=1-b*.25;let B=(z*n+pt)*4;p.data[B]=Math.min(255,Ut*255),p.data[B+1]=Math.min(255,Ht*255),p.data[B+2]=Math.min(255,L*255),p.data[B+3]=255;let G=Math.min(1,s.rough+(ce-.5)*.2+(rt-.5)*.08+ie*.45+C*.55+lt*.12);y.data[B]=0,y.data[B+1]=G*255,y.data[B+2]=0,y.data[B+3]=255,x[z*n+pt]=lt*.012+wt*.02+ut*.01+(it-.5)*.0015+C*.004}}for(let z=0;z<r;z++){let Y=Math.max(0,z-1),tt=Math.min(r-1,z+1);for(let X=0;X<n;X++){let j=(X+n-1)%n,et=(X+1)%n,Ct=(x[z*n+et]-x[z*n+j])*k*.5,wt=(x[Y*n+X]-x[tt*n+X])*N*.5,re=-Ct*4,qt=-wt*4,te=1,Z=Math.hypot(re,qt,te);re/=Z,qt/=Z,te/=Z;let K=(z*n+X)*4;M.data[K]=(re*.5+.5)*255,M.data[K+1]=(qt*.5+.5)*255,M.data[K+2]=(te*.5+.5)*255,M.data[K+3]=255}}f.putImageData(p,0,0),h.putImageData(y,0,0),d.putImageData(M,0,0);let O={map:Qi(c,{aniso:8}),rough:Qi(l,{srgb:!1,aniso:8}),normal:Qi(u,{srgb:!1,aniso:8})};for(let z of Object.values(O))z.wrapT=ii;return ye[i]=O,O}function Vd(){if(ye.tiles)return ye.tiles;let s=ji(512,512),t=s.getContext("2d");t.fillStyle="#141416",t.fillRect(0,0,512,512);let e=ri(5),i=16,n=i*Math.sqrt(3)/2;for(let r=-1;r<512/n+1;r++)for(let a=-1;a<512/(i*1.5)+1;a++){let o=a*i*1.5*2+r%2*i*1.5,c=r*n,l=22+e()*16|0;t.fillStyle=`rgb(${l},${l},${l+2})`,t.beginPath();for(let u=0;u<6;u++){let f=u*Math.PI/3;t.lineTo(o+Math.cos(f)*(i-1.2),c+Math.sin(f)*(i-1.2))}t.fill()}return ye.tiles=Qi(s),ye.tiles}function Gd(){if(ye.grid)return ye.grid;let s=ji(256,256),t=s.getContext("2d");t.clearRect(0,0,256,256),t.strokeStyle="#ffffff",t.lineWidth=5,t.save(),t.translate(128,128),t.rotate(Math.PI/4);for(let e=-260;e<=260;e+=21)t.beginPath(),t.moveTo(e,-260),t.lineTo(e,260),t.stroke(),t.beginPath(),t.moveTo(-260,e),t.lineTo(260,e),t.stroke();return t.restore(),t.lineWidth=14,t.strokeRect(4,4,248,248),ye.grid=Qi(s,{wrapS:ii,wrapT:ii}),ye.grid}function vl(){if(ye.ground)return ye.ground;let s=512,t=Bi(s,31,6,4),e=Bi(s,77,4,8),i=ji(s,s),n=i.getContext("2d"),r=n.createImageData(s,s);for(let h=0;h<s*s;h++){let d=t[h],g=e[h],v=.75+(d-.5)*.6+(g-.5)*.25;r.data[h*4]=255*v,r.data[h*4+1]=255*v,r.data[h*4+2]=255*v,r.data[h*4+3]=255}n.putImageData(r,0,0);let a=Qi(i,{srgb:!1,aniso:8}),o=ji(512,512),c=o.getContext("2d"),l=c.createImageData(512,512),u=Bi(512,55,5,8);for(let h=0;h<512;h++)for(let d=0;d<512;d++){let g=h*512+d,v=.62+(u[g]-.5)*.18;(d%128<2||h%128<2)&&(v*=.55);let m=Math.max(0,u[g*7%(512*512)]-.72)*1.6;v-=m*.25,l.data[g*4]=255*v,l.data[g*4+1]=255*v*.99,l.data[g*4+2]=255*v*.96,l.data[g*4+3]=255}c.putImageData(l,0,0);let f=Qi(o,{aniso:8});return ye.ground={detail:a,concrete:f},ye.ground}function Wd(){if(ye.wn)return ye.wn;let s=256,t=Bi(s,404,5,4),e=ji(s,s),i=e.getContext("2d"),n=i.createImageData(s,s);for(let r=0;r<s;r++)for(let a=0;a<s;a++){let o=t[r*s+(a+s-1)%s],c=t[r*s+(a+1)%s],l=t[(r+s-1)%s*s+a],u=t[(r+1)%s*s+a],f=(o-c)*6,h=(l-u)*6,d=1,g=Math.hypot(f,h,d);f/=g,h/=g,d/=g;let v=(r*s+a)*4;n.data[v]=(f*.5+.5)*255,n.data[v+1]=(h*.5+.5)*255,n.data[v+2]=(d*.5+.5)*255,n.data[v+3]=255}return i.putImageData(n,0,0),ye.wn=Qi(e,{srgb:!1}),ye.wn}function mn(s="smoke"){let t="puff:"+s;if(ye[t])return ye[t];let e=s==="cloud"||s==="smoke"?256:128,i=ji(e,e),n=i.getContext("2d"),r=n.createImageData(e,e),a=Bi(e,s==="cloud"?4:3,6,3);for(let o=0;o<e;o++)for(let c=0;c<e;c++){let l=(c+.5)/e*2-1,u=(o+.5)/e*2-1,f=Math.hypot(l,u),h;if(s==="glow")h=Math.pow(Math.max(0,1-f),2.2);else if(s==="spark")h=Math.pow(Math.max(0,1-f),4);else if(s==="cloud"){let g=a[o*e+c],v=Math.pow(Math.max(0,1-f),1.1)*(.55+g*.8);h=Math.min(1,Math.max(0,(v-.06)/.6)),h=h*h*(3-2*h)}else{let g=a[o*e+c];h=Math.max(0,(1-f*f)*(.35+g*1.1)-.15),h=Math.min(1,h*1.5),h*=Math.max(0,1-f)}let d=(o*e+c)*4;r.data[d]=255,r.data[d+1]=255,r.data[d+2]=255,r.data[d+3]=Math.min(255,h*255)}return n.putImageData(r,0,0),ye[t]=Qi(i,{wrapS:ii,wrapT:ii,srgb:!1}),ye[t]}function Bn(){if(ye.noise)return ye.noise;let s=256,t=Bi(s,1,5,4),e=Bi(s,2,5,4),i=Bi(s,3,4,8),n=ji(s,s),r=n.getContext("2d"),a=r.createImageData(s,s);for(let o=0;o<s*s;o++)a.data[o*4]=t[o]*255,a.data[o*4+1]=e[o]*255,a.data[o*4+2]=i[o]*255,a.data[o*4+3]=255;return r.putImageData(a,0,0),ye.noise=Qi(n,{srgb:!1,aniso:1}),ye.noise}var cs={uDN:{value:null},uAO:{value:Array.from({length:10},()=>new ge(0,0,1,0))},uDetHi:{value:1}};function Xd(s){s.slice(0,10).forEach((t,e)=>cs.uAO.value[e].set(t[0],t[1],t[2],t[3]))}var Ux=`
uniform sampler2D uDN; uniform vec4 uAO[10]; uniform float uDetHi;
uniform vec3 uDetA; uniform vec3 uDetB; uniform float uDetBump;
varying vec3 vDW;
float dAlb = 1.0; vec3 dTint = vec3(1.0); float dRough = 0.0; float dH = 0.0; float dAO = 1.0; float dMet = 0.0;
float dn1(vec2 p){ return texture2D(uDN, p).r; }
float blobAO(vec2 p){ float a = 1.0; for (int i = 0; i < 10; i++){ vec4 b = uAO[i]; vec2 d = (p - b.xy) / b.z; a *= 1.0 - b.w * exp(-dot(d, d) * 2.2); } return a; }
`,Fx={ground:`
    vec2 p = vDW.xz; float dist = length(vViewPosition);
    vec4 nM = texture2D(uDN, p * 0.00083 + vec2(0.31, 0.77));
    vec4 nA = texture2D(uDN, p * 0.0061 + nM.rg * 0.15);
    vec4 nF = texture2D(uDN, vec2(p.x * 0.7 + p.y * 0.71, p.y * 0.7 - p.x * 0.71) * 0.083);
    float lum = dot(diffuseColor.rgb, vec3(0.3, 0.59, 0.11));
    float scrubK = 1.0 - smoothstep(0.22, 0.42, lum);
    float veg = smoothstep(0.42, 0.68, nA.g * 0.7 + nM.b * 0.5) * scrubK;
    dTint = mix(vec3(1.0), uDetA, veg * 0.85);
    dTint *= mix(vec3(1.0), uDetB, smoothstep(0.55, 0.8, nM.r) * scrubK * 0.7);
    float nX = texture2D(uDN, p * 0.61).r;
    float nearK = 1.0 - smoothstep(25.0, 140.0, dist);
    dAlb = (0.68 + 0.64 * nM.g) * (0.8 + 0.4 * nA.r) * (0.86 + 0.28 * nF.b) * mix(1.0, 0.78 + 0.44 * nX, nearK);
    // Sandrippel
    float sandK = smoothstep(0.32, 0.5, lum);
    float rip = sin(dot(p, vec2(0.9, 0.42)) * 2.4 + nF.r * 9.0) * 0.5 + 0.5;
    dH = (nF.g - 0.5) * 0.6 + rip * sandK * 0.35 + veg * nF.r * 0.5 + (nX - 0.5) * 0.12 * nearK;
    dH *= 1.0 - smoothstep(60.0, 260.0, dist);
    dRough = veg * 0.05 - sandK * 0.02;
    dAO = blobAO(p);
  `,concrete:`
    vec2 p = vDW.xz; float dist = length(vViewPosition);
    vec4 nM = texture2D(uDN, p * 0.0071 + 0.13);
    vec4 nF = texture2D(uDN, p * 0.061);
    float stain = smoothstep(0.45, 0.75, nM.r) * 0.32 + smoothstep(0.6, 0.8, nF.g) * 0.12;
    float r = length(p);
    float scorch = (1.0 - smoothstep(18.0, 55.0, r)) * (0.55 + 0.45 * nM.g);
    float crack = 1.0 - smoothstep(0.0, 0.012, abs(nF.b - 0.5));
    dAlb = (1.0 - stain) * (1.0 - scorch * 0.72) * (1.0 - crack * 0.4) * (0.92 + 0.16 * nF.r);
    dTint = mix(vec3(1.0), vec3(0.92, 0.88, 0.82), stain);
    dH = (nF.r - 0.5) * 0.15 - crack * 0.25;
    dH *= 1.0 - smoothstep(30.0, 160.0, dist);
    dRough = -stain * 0.12 + scorch * 0.05;
    dAO = blobAO(p);
  `,metal:`
    vec3 p = vDW; float dist = length(vViewPosition);
    vec3 gn = normalize(cross(dFdx(vDW), dFdy(vDW)));
    vec2 q = abs(gn.x) > abs(gn.z) ? p.zy : p.xy;
    vec4 nS = texture2D(uDN, vec2(q.x * 0.21, q.y * 0.011));
    vec4 nM = texture2D(uDN, q * 0.035 + p.z * 0.013);
    float streak = smoothstep(0.5, 0.8, nS.g);
    float rust = smoothstep(0.62, 0.82, nM.r);
    float low = 1.0 - smoothstep(1.5, 14.0, p.y);
    dAlb = (0.78 + 0.4 * nM.b) * (1.0 - streak * 0.28) * (1.0 - low * 0.35);
    dTint = mix(vec3(1.0), uDetA, rust * 0.8) * mix(vec3(1.0), vec3(0.85, 0.8, 0.75), low);
    dRough = streak * 0.12 + rust * 0.25 - nM.g * 0.08;
    dMet = -rust * 0.35;
    dH = (nM.g - 0.5) * 0.12 * (1.0 - smoothstep(20.0, 90.0, dist));
    dAO = mix(0.55, 1.0, smoothstep(0.0, 9.0, p.y));
  `,facade:`
    vec3 p = vDW; float dist = length(vViewPosition);
    vec3 gn = normalize(cross(dFdx(vDW), dFdy(vDW)));
    vec4 nM = texture2D(uDN, (abs(gn.x) > abs(gn.z) ? p.zy : p.xy) * vec2(0.03, 0.01) + p.y * 0.002);
    if (gn.y > 0.6) {
      vec4 nR = texture2D(uDN, p.xz * 0.02);
      dAlb = 0.6 + 0.25 * nR.r; dTint = vec3(0.92, 0.94, 0.97); dRough = 0.1;
      dH = (nR.g - 0.5) * 0.1;
    } else {
      float along = abs(gn.x) > abs(gn.z) ? p.z : p.x;
      float corr = sin(along * 6.2832 / 0.6);
      float band = 1.0 - smoothstep(0.0, 0.06, abs(fract(p.y / 6.0) - 0.5) - 0.44);
      float panel = 1.0 - smoothstep(0.0, 0.08, abs(fract(along / 12.0) - 0.5) - 0.45);
      float drip = smoothstep(0.55, 0.85, texture2D(uDN, vec2(along * 0.17, p.y * 0.008)).g);
      float low = 1.0 - smoothstep(1.0, 5.0, p.y - 1.6);
      dAlb = (0.93 + 0.07 * corr) * (1.0 - drip * 0.18) * (1.0 - band * 0.22) * (1.0 - panel * 0.15) * (1.0 - low * 0.3) * (0.9 + 0.2 * nM.r);
      dTint = mix(vec3(1.0), vec3(0.9, 0.86, 0.8), low + drip * 0.5);
      dH = corr * 0.05 * (1.0 - smoothstep(25.0, 140.0, dist)) - band * 0.1;
      dRough = drip * 0.1;
      dAO = mix(0.6, 1.0, smoothstep(1.6, 6.0, p.y));
    }
  `,tank:`
    vec3 p = vDW; float dist = length(vViewPosition);
    vec4 nS = texture2D(uDN, vec2((p.x + p.z) * 0.13, p.y * 0.012));
    float ring = 1.0 - smoothstep(0.0, 0.07, abs(fract(p.y / 2.4) - 0.5) - 0.46);
    float streak = smoothstep(0.5, 0.85, nS.g);
    float low = 1.0 - smoothstep(1.5, 8.0, p.y);
    dAlb = (1.0 - streak * 0.22) * (1.0 - ring * 0.12) * (1.0 - low * 0.35) * (0.92 + 0.16 * nS.r);
    dTint = mix(vec3(1.0), vec3(0.88, 0.84, 0.78), low + streak * 0.4);
    dRough = streak * 0.1 + ring * 0.05;
    dH = ring * 0.06 * (1.0 - smoothstep(30.0, 160.0, dist));
    dAO = mix(0.55, 1.0, smoothstep(1.6, 7.0, p.y));
  `},wh=null;function wi(s,t,e={}){wh||(wh=Bn(),cs.uDN.value=wh);let i=e.hi!==!1,n={value:new ht(...e.a||[.75,.9,.55])},r={value:new ht(...e.b||[1.15,1,.8])},a={value:e.bump??1},o=s.onBeforeCompile;s.onBeforeCompile=(l,u)=>{o&&o(l,u),l.uniforms.uDN=cs.uDN,l.uniforms.uAO=cs.uAO,l.uniforms.uDetHi=cs.uDetHi,l.uniforms.uDetA=n,l.uniforms.uDetB=r,l.uniforms.uDetBump=a,l.vertexShader=l.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vDW;`).replace("#include <project_vertex>",`#include <project_vertex>
        { vec4 dW = vec4(transformed, 1.0);
        #ifdef USE_INSTANCING
          dW = instanceMatrix * dW;
        #endif
          vDW = (modelMatrix * dW).xyz; }`),l.fragmentShader=l.fragmentShader.replace("#include <common>",`#include <common>
`+Ux).replace("#include <color_fragment>",`#include <color_fragment>
        { ${Fx[t]} }
        diffuseColor.rgb *= dAlb * dTint;`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
roughnessFactor = clamp(roughnessFactor + dRough, 0.04, 1.0);`).replace("#include <metalnessmap_fragment>",`#include <metalnessmap_fragment>
metalnessFactor = clamp(metalnessFactor + dMet, 0.0, 1.0);`).replace("#include <normal_fragment_maps>",i?`#include <normal_fragment_maps>
        if (uDetHi > 0.5) { float hh = dH * uDetBump; vec3 dpx = dFdx(-vViewPosition), dpy = dFdy(-vViewPosition);
          vec3 r1 = cross(dpy, normal), r2 = cross(normal, dpx); float det = dot(dpx, r1);
          vec3 grad = sign(det) * (dFdx(hh) * r1 + dFdy(hh) * r2); normal = normalize(abs(det) * normal - grad); }`:"#include <normal_fragment_maps>").replace("#include <aomap_fragment>",`#include <aomap_fragment>
        reflectedLight.indirectDiffuse *= dAO; reflectedLight.indirectSpecular *= dAO; reflectedLight.directDiffuse *= mix(1.0, dAO, 0.35);`)};let c=s.customProgramCacheKey?s.customProgramCacheKey():"";return s.customProgramCacheKey=()=>c+"|det-"+t+(i?"h":"l"),s.userData.detail={uA:n,uB:r,bump:a},s}var Ti=720,xl=`
uniform vec3 uSunDir; uniform vec3 uMoonDir; uniform vec3 uZenith; uniform vec3 uHorizon; uniform vec3 uSunGlow; uniform vec3 uGround;
uniform float uSunI; uniform float uNight; uniform float uCamAlt; uniform float uTime; uniform float uOvercast; uniform vec3 uCity; uniform float uFlash;
float hash13(vec3 p){ p = fract(p * 0.1031); p += dot(p, p.zyx + 31.32); return fract((p.x + p.y) * p.z); }
vec3 skyColor(vec3 d, bool withSun){
  float h = d.y;
  float space = smoothstep(9000.0, 70000.0, uCamAlt);
  float horizonDip = -0.02 - space * 0.12;
  float hh = max(h - horizonDip, 0.0);
  vec3 zen = mix(uZenith, vec3(0.002, 0.004, 0.012), space);
  vec3 col = mix(uHorizon, zen, pow(min(hh * 1.6, 1.0), 0.42));
  float sd = max(dot(d, uSunDir), 0.0);
  float sunUp = smoothstep(-0.12, 0.05, uSunDir.y);
  // warmer Horizont Richtung Sonne
  float towards = pow(sd, 3.0) * (1.0 - min(hh * 2.5, 1.0));
  col += uSunGlow * towards * 0.9;
  col += uSunGlow * pow(sd, 18.0) * 0.6 * sunUp;
  col += uSunGlow * pow(sd, 260.0) * 2.0 * sunUp;
  // Mie-Streuung und Dunstband am Horizont (Luftperspektive)
  col += uSunGlow * pow(sd, 6.0) * 0.22 * sunUp * (1.0 - uOvercast * 0.7) * (1.0 - space);
  col = mix(col, uHorizon * 1.06 + uSunGlow * 0.06 * sunUp, exp(-hh * 16.0) * 0.38 * (1.0 - space) * (1.0 - uNight * 0.6));
  // Stadtlicht am Horizont (Westen)
  float city = pow(max(-d.x * 0.9 + 0.1, 0.0), 1.5) * exp(-hh * 22.0);
  col += uCity * city * uNight;
  // Sterne
  if (uNight > 0.01) {
    vec3 sp = d * 420.0; vec3 cell = floor(sp); float r = hash13(cell);
    if (r > 0.9965) { vec3 c = cell + 0.5 + (vec3(hash13(cell + 1.7), hash13(cell + 3.1), hash13(cell + 7.3)) - 0.5) * 0.6;
      float dd = length(sp - c); float tw = 0.65 + 0.35 * sin(uTime * (2.0 + r * 30.0) + r * 100.0);
      col += vec3(0.85, 0.9, 1.0) * smoothstep(0.38, 0.0, dd) * tw * (r - 0.9965) * 900.0 * uNight * smoothstep(0.0, 0.12, h) * (1.0 - uOvercast);
    }
    // Milchstrasse (grob)
    float band = exp(-pow(dot(d, normalize(vec3(0.3, 0.55, 0.78))) * 4.0, 2.0));
    col += vec3(0.010, 0.011, 0.016) * band * uNight * (1.0 - uOvercast) * smoothstep(0.0, 0.3, h);
    float md = max(dot(d, uMoonDir), 0.0);
    col += vec3(1.0, 0.97, 0.9) * smoothstep(0.99985, 0.99992, md) * 3.0 * uNight;
    col += vec3(0.2, 0.22, 0.28) * pow(md, 200.0) * 0.08 * uNight;
  }
  if (withSun) col += vec3(1.0, 0.92, 0.8) * smoothstep(0.99955, 0.99975, sd) * uSunI * 40.0 * sunUp * (1.0 - uOvercast * 0.95);
  // unter dem Horizont: Dunst/Boden
  float below = smoothstep(horizonDip + 0.002, horizonDip - 0.06, h);
  col = mix(col, uGround, below * (1.0 - space * 0.4));
  col += vec3(0.75, 0.8, 1.0) * uFlash;
  return col;
}`;var _l=class{constructor(t,e,i={}){zd(),this.renderer=t,this.scene=e,this.q=i.quality||"high",this.time=0,this.u={uSunDir:{value:new P(0,1,0)},uMoonDir:{value:new P(.3,.5,-.8).normalize()},uZenith:{value:new ht},uHorizon:{value:new ht},uSunGlow:{value:new ht},uGround:{value:new ht},uSunI:{value:1},uNight:{value:0},uCamAlt:{value:0},uTime:{value:0},uOvercast:{value:0},uCity:{value:new ht(.06,.035,.015)},uFlash:{value:0},fogColor:{value:new ht},fogDensity:{value:12e-5}},e.fog=new _r(16777215,12e-5),this.buildSky(),this.buildLights(),this.buildWater(),this.buildTerrain(),this.buildClouds(),this.buildRain(),this.flash=0,this.nextBolt=5,this.rain=!1}buildSky(){let t=new se({uniforms:this.u,depthWrite:!1,depthTest:!1,side:Ze,vertexShader:"varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; gl_Position.z = gl_Position.w * 0.99999; }",fragmentShader:xl+"varying vec3 vW; void main(){ vec3 d = normalize(vW - cameraPosition); gl_FragColor = vec4(skyColor(d, true), 1.0); }"});this.skyMat=t,this.sky=new dt(new yi(1e3,48,24),t),this.sky.frustumCulled=!1,this.sky.renderOrder=-10,this.scene.add(this.sky),this.envScene=new hn;let e=new dt(new yi(100,32,16),new se({uniforms:this.u,side:Ze,depthWrite:!1,vertexShader:"varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:xl+"varying vec3 vW; void main(){ vec3 d = normalize(vW - cameraPosition); vec3 c = skyColor(d, false); c += vec3(1.0,0.9,0.75) * pow(max(dot(d,uSunDir),0.0), 900.0) * uSunI * 30.0 * (1.0-uOvercast); gl_FragColor = vec4(c, 1.0); }"}));this.envScene.add(e),this.pmrem=new $s(this.renderer)}buildLights(){this.sun=new zr(16777215,3),this.sun.position.set(100,200,100),this.sun.target.position.set(0,60,-20),this.scene.add(this.sun,this.sun.target);let t=this.q==="high"?2048:1024;if(this.q!=="low"){this.sun.castShadow=!0,this.sun.shadow.mapSize.set(t,t);let e=this.sun.shadow.camera;e.left=-110,e.right=110,e.top=110,e.bottom=-110,e.near=10,e.far=900,this.sun.shadow.bias=-4e-4,this.sun.shadow.normalBias=.6}this.hemi=new Br(12374783,5918784,.8),this.scene.add(this.hemi)}buildWater(){let t=Wd();this.waterMat=new se({uniforms:Object.assign({},this.u,{uNormal:{value:t},uSpec:{value:new ht(1,1,1)},uDeep:{value:new ht(.012,.05,.07)},uWave:{value:1},uLightPos:{value:new P(0,-1e3,0)},uLightCol:{value:new ht(0,0,0)},uCoast:{value:Ti}}),vertexShader:"varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:xl+ia+`
        uniform sampler2D uNormal; uniform vec3 uDeep; uniform float uWave; uniform vec3 uLightPos; uniform vec3 uLightCol; uniform float uCoast;
        uniform vec3 fogColor; uniform float fogDensity; varying vec3 vW;
        vec3 nrm(vec2 p, float s, vec2 v){ return texture2D(uNormal, p * s + v * uTime).xzy * 2.0 - 1.0; }
        void main(){
          vec3 V = cameraPosition - vW; float dist = length(V); V /= dist;
          float fade = clamp(dist / 4000.0, 0.0, 1.0);
          vec3 n = nrm(vW.xz, 1.0/38.0, vec2(0.012, 0.007)) + nrm(vW.xz, 1.0/11.0, vec2(-0.02, 0.016)) * 0.6 + nrm(vW.xz, 1.0/170.0, vec2(0.004, -0.003)) * 1.2;
          n = normalize(vec3(n.x * uWave * (1.0 - fade * 0.85), 1.0 * 2.2, n.z * uWave * (1.0 - fade * 0.85)));
          vec3 R = reflect(-V, n); R.y = abs(R.y);
          float fres = 0.02 + 0.98 * pow(1.0 - max(dot(n, V), 0.0), 5.0);
          vec3 refl = skyColor(normalize(R), false);
          vec3 col = mix(uDeep * (0.25 + 0.75 * max(uSunDir.y, 0.05)) * (1.0 - uNight * 0.9), refl, fres);
          vec3 H = normalize(uSunDir + V); float sp = pow(max(dot(n, H), 0.0), 320.0) * 60.0 + pow(max(dot(n, H), 0.0), 40.0) * 0.35;
          col += uSunGlow * 0.3 * sp * smoothstep(-0.05, 0.05, uSunDir.y) * (1.0 - uOvercast * 0.9) + vec3(1.0,0.95,0.85) * sp * 0.5 * uSunI * smoothstep(-0.05, 0.05, uSunDir.y) * (1.0 - uOvercast);
          // Licht von Triebwerken
          vec3 L = uLightPos - vW; float ld = length(L); L /= ld;
          vec3 H2 = normalize(L + V); col += uLightCol * (pow(max(dot(n, H2), 0.0), 120.0) * 8.0 + 0.04) / (1.0 + ld * ld * 0.00004);
          // Streulicht in Wellenk\xE4mmen + Sonnenglitzern
          float crest = clamp(n.x * 0.6 + n.z * 0.4 + 0.15, 0.0, 1.0);
          col += vec3(0.015, 0.075, 0.07) * crest * (1.0 - fres) * max(uSunDir.y, 0.0) * 1.6 * (1.0 - uNight);
          float gl = pow(max(dot(n, H), 0.0), 1400.0) * 260.0 * (1.0 - fade) * smoothstep(-0.02, 0.06, uSunDir.y) * (1.0 - uOvercast);
          col += vec3(1.0, 0.92, 0.78) * gl * uSunI;
          // Brandung: Wellenb\xE4nder, Gischtstreifen, Schaumkronen draussen
          float sx = vW.x - uCoast;
          float wav = texture2D(uNormal, vW.xz * 0.02 + vec2(uTime * 0.03, 0.0)).r;
          float ft = texture2D(uNormal, vW.xz * vec2(0.22, 0.1) + vec2(uTime * 0.05, uTime * 0.012)).g;
          float shore = smoothstep(75.0, 0.0, sx) * smoothstep(-2.0, 4.0, sx);
          float br1 = smoothstep(0.6, 1.0, sin(sx * 0.21 - uTime * 1.25 + wav * 3.0 + sin(vW.z * 0.013) * 2.0 + ft * 2.0) * 0.5 + 0.5);
          float foam = shore * clamp(br1 * 1.3 + smoothstep(16.0, 0.0, sx) * 0.8, 0.0, 1.0) * smoothstep(0.38, 0.72, ft + wav * 0.5);
          foam += smoothstep(0.9, 0.98, wav + ft * 0.3) * 0.16 * smoothstep(2500.0, 150.0, dist) * uWave * (1.0 - shore);
          col = mix(col, vec3(0.82, 0.86, 0.88) * (0.25 + 0.75 * max(uSunDir.y + 0.2, 0.05)) * (1.0 - uNight * 0.85), clamp(foam, 0.0, 1.0) * 0.8);
          col = applyFog(col, vW, cameraPosition, fogColor, fogDensity);
          gl_FragColor = vec4(col, 1.0);
        }`});let e=new Le(1,1,1,1);e.rotateX(-Math.PI/2);let i=new dt(e,this.waterMat);i.scale.set(16e4,1,32e4),i.position.set(80600,0,0),i.frustumCulled=!1,i.renderOrder=-5,this.scene.add(i),this.water=i}height(t,e){let i=2,n=Math.sin(t*.0021+e*.0013)*.6+Math.sin(t*.011-e*.007)*.35+Math.sin(t*.043+e*.031)*.15;i+=n;let r=Ti-t;i+=Math.exp(-Math.pow((r-70)/30,2))*(2.5+Math.sin(e*.02)*1.2),r<60&&(i=Math.min(i,-2+r/60*4.6));let a=Math.sin(t*.0011+1.3)*Math.sin(e*.0017+.4);e<-1100&&(i-=Math.max(0,(-e-1100)/300)*Math.max(0,a+.35)*2.2);let o=Math.hypot(t+30,e+40);return i=Se.lerp(1.6,i,Se.smoothstep(o,160,320)),i}buildTerrain(){let{detail:t}=vl(),e=16e3,i=18e3,n=this.q==="high"?320:this.q==="med"?240:170,r=this.q==="high"?280:this.q==="med"?210:150,a=new Le(e,i,n,r);a.rotateX(-Math.PI/2),a.translate(Ti+300-e/2,0,0);let o=a.attributes.position,c=new Float32Array(o.count*3),l=new ht(.17,.17,.095),u=new ht(.29,.25,.15),f=new ht(.64,.56,.42),h=new ht(.33,.29,.23),d=new ht(.3,.27,.21),g=new ht(.62,.6,.55),v=new ht;for(let T=0;T<o.count;T++){let R=o.getX(T),I=o.getZ(T),D=(R-(Ti+300-e))/e;R=Ti+300-e*Math.pow(1-D,2.2),o.setX(T,R);let k=I/(i/2);I=Math.sign(k)*Math.pow(Math.abs(k),1.8)*i/2,o.setZ(T,I);let N=this.height(R,I);o.setY(T,N);let O=Ti-R,z=.5+.5*Math.sin(R*.013+Math.sin(I*.009)*3)*Math.sin(I*.017);v.copy(l).lerp(u,z),N<1.2&&v.lerp(g,Se.clamp((1.2-N)*.6,0,.7)),N<.6&&v.copy(d),O<110&&v.lerp(f,Se.smoothstep(110-O,0,45)),O<14&&v.lerp(h,Se.smoothstep(14-O,0,14)),Math.abs(I-95-Math.sin(R*.002)*30)<5&&O>20&&v.lerp(new ht(.2,.2,.21),.85),c[T*3]=v.r,c[T*3+1]=v.g,c[T*3+2]=v.b}a.setAttribute("color",new ke(c,3)),a.computeVertexNormals();let m=wi(new oe({vertexColors:!0,roughness:.95,metalness:0}),"ground",{hi:this.q!=="low",a:[.78,.86,.58],b:[1.16,1,.8],bump:1}),p=new dt(a,m);p.receiveShadow=!0,this.scene.add(p),this.terrain=p;let y=new Le(e,i*.5,1,1);y.rotateX(-Math.PI/2);let M=new dt(y,this.waterMat);M.position.set(Ti-e/2-100,-.05,-i*.25-600),M.renderOrder=-5,this.scene.add(M);let x=wi(new oe({color:new ht(.31,.285,.18),roughness:.95,metalness:0}),"ground",{hi:!1,a:[.78,.86,.58]}),S=new Le(1,1);S.rotateX(-Math.PI/2);let w=new dt(S,x);w.scale.set(15e4,1,32e4),w.position.set(Ti+300-e-75e3,.6,0);let A=new dt(S,x);A.scale.set(e-100,1,15e4),A.position.set(Ti+300-e/2-50,.6,-i/2-75e3);let _=A.clone();_.position.z=i/2+75e3;for(let T of[w,A,_])T.frustumCulled=!1,this.scene.add(T);this.farLand=x,this.buildScrub()}buildScrub(){let t=this.q==="high"?9e3:this.q==="med"?5e3:1400,e=new Qn(1,1),i=e.attributes.position,n=ri(12);for(let p=0;p<i.count;p++){let y=.75+n()*.5;i.setXYZ(p,i.getX(p)*y,Math.max(-.2,i.getY(p))*y*.62,i.getZ(p)*y)}let r=e.toNonIndexed();r.computeVertexNormals();let a=new oe({color:16777215,roughness:.92,metalness:0,flatShading:!0}),o=new Li(r,a,t),c=ri(2024),l=new ne,u=new Ke,f=new P,h=new P,d=new ht,g=[[.16,.18,.08],[.22,.21,.1],[.27,.24,.13],[.13,.15,.07],[.3,.27,.17]],v=0,m=0;for(;v<t&&m<t*6;){m++;let p=c()*Math.PI*2,y=190+Math.pow(c(),1.5)*3200,M=-30+Math.cos(p)*y,x=-40+Math.sin(p)*y;if(M>Ti-115)continue;let S=.5+.5*Math.sin(M*.031+Math.sin(x*.019)*2.2)*Math.sin(x*.027+Math.sin(M*.013)*1.7);if(c()>S*S*1.6+.08||M<-95&&M>-330&&x>-110&&x<110||Math.abs(x-95-Math.sin(M*.002)*30)<9)continue;let w=this.height(M,x);if(w<1)continue;let A=.8+Math.pow(c(),2)*2.6;h.set(M,w-.15,x),u.setFromAxisAngle(new P(0,1,0),c()*6.28),f.set(A*(.8+c()*.6),A,A*(.8+c()*.6)),o.setMatrixAt(v,l.compose(h,u,f));let _=g[c()*g.length|0];d.setRGB(_[0],_[1],_[2]).multiplyScalar(.85+c()*.3),o.setColorAt(v,d),v++}o.count=v,o.instanceMatrix.needsUpdate=!0,o.instanceColor&&(o.instanceColor.needsUpdate=!0),o.receiveShadow=this.q!=="low",o.castShadow=!1,o.frustumCulled=!1,this.scene.add(o),this.scrub=o,this.scrubMat=a}buildClouds(){let t=this.q==="low"?260:620,e=new Yi,i=new Le(1,1);e.index=i.index,e.attributes.position=i.attributes.position,e.attributes.uv=i.attributes.uv,this.cloudData=new Float32Array(t*4),this.cloudExtra=new Float32Array(t*4),e.setAttribute("aCloud",new ze(this.cloudData,4)),e.setAttribute("aExtra",new ze(this.cloudExtra,4)),e.instanceCount=0,this.cloudMat=new se({uniforms:Object.assign({},this.u,{uTex:{value:mn("cloud")},uLit:{value:new ht(1,1,1)},uShade:{value:new ht(.5,.55,.65)}}),transparent:!0,depthWrite:!1,vertexShader:`attribute vec4 aCloud; attribute vec4 aExtra; varying vec2 vUv; varying float vShade; varying vec3 vW; varying float vA; varying float vRot;
        void main(){ vUv = uv; vec3 c = aCloud.xyz; float s = aCloud.w;
          vec3 right = vec3(viewMatrix[0][0], viewMatrix[1][0], viewMatrix[2][0]); vec3 up = vec3(viewMatrix[0][1], viewMatrix[1][1], viewMatrix[2][1]);
          float r = aExtra.y; vec2 p = vec2(position.x * cos(r) - position.y * sin(r), position.x * sin(r) + position.y * cos(r));
          vec3 w = c + (right * p.x + up * p.y * 0.62) * s; vW = w; vShade = aExtra.x; vA = aExtra.z;
          float dc = length(c - cameraPosition); vA *= smoothstep(s * 0.4, s * 1.4, dc);
          gl_Position = projectionMatrix * viewMatrix * vec4(w, 1.0); }`,fragmentShader:xl+ia+`uniform sampler2D uTex; uniform vec3 uLit; uniform vec3 uShade; uniform vec3 fogColor; uniform float fogDensity; varying vec2 vUv; varying float vShade; varying vec3 vW; varying float vA;
        void main(){ vec4 t = texture2D(uTex, vUv); float a = t.a * vA; if (a < 0.01) discard;
          float lit = clamp(vShade + (vUv.y - 0.5) * 0.6, 0.0, 1.0);
          vec3 col = mix(uShade, uLit, lit) + vec3(0.8,0.85,1.0) * uFlash * 2.0;
          float fw = pow(max(dot(normalize(vW - cameraPosition), uSunDir), 0.0), 6.0) * smoothstep(-0.1, 0.05, uSunDir.y);
          col += uLit * fw * (1.0 - t.a) * 1.1 + uSunGlow * fw * 0.35;
          col = applyFog(col, vW, cameraPosition, fogColor, fogDensity * 0.6);
          gl_FragColor = vec4(col, a); }`}),this.clouds=new dt(e,this.cloudMat),this.clouds.frustumCulled=!1,this.clouds.renderOrder=5,this.scene.add(this.clouds),this.cloudN=t}layoutClouds(t,e){let i=ri(e),n=0,r=this.cloudN,a=this.cloudData,o=this.cloudExtra,c=(h,d,g,v,m,p)=>{n>=r||(a[n*4]=h,a[n*4+1]=d,a[n*4+2]=g,a[n*4+3]=v,o[n*4]=m,o[n*4+1]=i()*6.28,o[n*4+2]=p,n++)},l=(h,d,g,v,m,p=1)=>{for(let y=0;y<m;y++){let M=(i()-.5)*v*1.6,x=(i()-.5)*v*1.6,S=(i()-.3)*v*.35,w=v*(.5+i()*.6);c(h+M,d+S+w*.15,g+x,w,.35+(S/v+.3)*1.2,p)}},u={day:[26,1400],afternoon:[34,1700],dusk:[26,2200],night:[14,1800],dawn:[20,900],storm:[70,650]}[t]||[20,1500],f=Math.floor(r*.8/u[0]);for(let h=0;h<u[0];h++){let d=i()*Math.PI*2,g=2500+Math.pow(i(),.7)*38e3,v=Math.cos(d)*g+3e3,m=Math.sin(d)*g-8e3*i(),p=(t==="storm"?900:380)+i()*600;l(v,u[1]+i()*400,m,p,Math.max(4,f-2+(i()*4|0)),t==="storm"?.95:.9)}if(t==="dawn")for(let h=0;h<70&&n<r;h++)c((i()-.6)*9e3,40+i()*90,(i()-.5)*9e3-2e3,500+i()*600,.7,.35);if(t==="storm")for(let h=0;h<60&&n<r;h++)c((i()-.5)*3e4,900+i()*300,(i()-.5)*3e4,2500,.15,.8);this.clouds.geometry.instanceCount=n,this.clouds.geometry.attributes.aCloud.needsUpdate=!0,this.clouds.geometry.attributes.aExtra.needsUpdate=!0}buildRain(){let t=this.q==="low"?1500:4e3,e=new Yi,i=new Le(1,1);e.index=i.index,e.attributes.position=i.attributes.position;let n=new Float32Array(t*4),r=ri(3);for(let a=0;a<t;a++)n[a*4]=r(),n[a*4+1]=r(),n[a*4+2]=r(),n[a*4+3]=.6+r()*.8;e.setAttribute("aR",new ze(n,4)),e.instanceCount=t,this.rainMat=new se({uniforms:{uTime:this.u.uTime,uBox:{value:60},uWind:{value:new at(-6,0)},uCol:{value:new ht(.6,.65,.7)},uVel:{value:new P},uFlash:this.u.uFlash},transparent:!0,depthWrite:!1,blending:Fe,vertexShader:`attribute vec4 aR; uniform float uTime; uniform float uBox; uniform vec2 uWind; uniform vec3 uVel; varying float vA; varying vec2 vUv;
        void main(){ vUv = position.xy + 0.5; float sp = 22.0 * aR.w; vec3 vel = vec3(uWind.x, -sp, uWind.y) - uVel * 0.5;
          vec3 p = vec3(aR.x, aR.y, aR.z) * uBox * 2.0 + vel * uTime; vec3 cam = cameraPosition;
          p = mod(p - cam + uBox, uBox * 2.0) - uBox + cam;
          vec3 dir = normalize(vel); vec3 toCam = normalize(cameraPosition - p); vec3 side = normalize(cross(dir, toCam));
          float len = 0.9 + length(vel) * 0.03; vec3 w = p + side * position.x * 0.03 + dir * position.y * len;
          vA = 0.18 * smoothstep(uBox, uBox * 0.3, length(p - cam)) * step(0.0, p.y);
          gl_Position = projectionMatrix * viewMatrix * vec4(w, 1.0); }`,fragmentShader:"uniform vec3 uCol; uniform float uFlash; varying float vA; varying vec2 vUv; void main(){ float a = vA * (1.0 - abs(vUv.x - 0.5) * 2.0); gl_FragColor = vec4(uCol * (1.0 + uFlash * 6.0) * a, 1.0); }"}),this.rainMesh=new dt(e,this.rainMat),this.rainMesh.frustumCulled=!1,this.rainMesh.visible=!1,this.rainMesh.renderOrder=8,this.scene.add(this.rainMesh)}setTod(t,e={}){let i=os[t]||os.day;this.todKey=t,this.T=i;let n=i.sunEl*Math.PI/180,r=i.sunAz*Math.PI/180,a=new P(Math.sin(r)*Math.cos(n),Math.sin(n),-Math.cos(r)*Math.cos(n)).normalize();this.u.uSunDir.value.copy(a);let o=t==="night"?1:0;this.u.uNight.value=o;let c=t==="storm"?.9:t==="dawn"?.35:0;this.u.uOvercast.value=c;let l=(A,_,T)=>new ht(A,_,T),u,f,h,d,g,v,m,p,y,M,x,S,w;switch(t){case"afternoon":u=l(.1,.26,.62),f=l(.62,.7,.8),h=l(.6,.45,.25),d=l(.36,.42,.48),g=l(1,.9,.78),v=3.4,m=l(.45,.56,.75),p=l(.32,.28,.2),y=1.2,M=11e-5,S=l(1.25,1.12,.98),w=l(.45,.5,.6);break;case"dusk":u=l(.05,.08,.2),f=l(.55,.3,.2),h=l(1.5,.55,.18),d=l(.14,.11,.13),g=l(1,.5,.22),v=2,m=l(.25,.25,.4),p=l(.2,.12,.08),y=.9,M=13e-5,S=l(1.4,.65,.35),w=l(.18,.15,.22);break;case"night":u=l(.002,.004,.011),f=l(.012,.016,.026),h=l(0,0,0),d=l(.006,.007,.01),g=l(.5,.6,.85),v=.1,m=l(.1,.13,.22),p=l(.04,.03,.03),y=.35,M=1e-4,S=l(.05,.055,.075),w=l(.015,.016,.022);break;case"dawn":u=l(.25,.33,.48),f=l(.82,.74,.66),h=l(1,.6,.3),d=l(.6,.58,.55),g=l(1,.75,.5),v=1.6,m=l(.6,.6,.65),p=l(.35,.32,.28),y=1.2,M=.0011,S=l(1.15,.98,.85),w=l(.6,.6,.64);break;case"storm":u=l(.13,.145,.16),f=l(.3,.32,.34),h=l(.05,.05,.05),d=l(.2,.21,.22),g=l(.7,.75,.8),v=.7,m=l(.42,.46,.5),p=l(.2,.2,.18),y=1.1,M=42e-5,S=l(.42,.44,.47),w=l(.17,.18,.2);break;default:u=l(.09,.25,.65),f=l(.6,.72,.86),h=l(.45,.4,.3),d=l(.36,.44,.52),g=l(1,.96,.9),v=3.8,m=l(.5,.62,.82),p=l(.33,.3,.22),y=1.25,M=1e-4,S=l(1.3,1.28,1.25),w=l(.5,.56,.68)}if(e.fog&&(M=Math.max(M,.0011)),this.u.uZenith.value.copy(u),this.u.uHorizon.value.copy(f),this.u.uSunGlow.value.copy(h),this.u.uGround.value.copy(d),this.u.uSunI.value=t==="night"?0:1,x=f.clone().lerp(d,.3),this.u.fogColor.value.copy(x),this.u.fogDensity.value=M,this.scene.fog.color.copy(x),this.scene.fog.density=M,this.baseFog=M,this.sun.color.copy(g),this.sun.intensity=v,this.baseSunI=v,t==="night"){let A=this.u.uMoonDir.value;this.sun.position.copy(A).multiplyScalar(500)}else this.sun.position.copy(a).multiplyScalar(500);this.sun.position.add(this.sun.target.position),this.sun.castShadow=this.q!=="low"&&t!=="night"&&t!=="storm"&&t!=="dawn",this.hemi.color.copy(m),this.hemi.groundColor.copy(p),this.hemi.intensity=y,this.baseHemi=y,this.cloudMat.uniforms.uLit.value.copy(S),this.cloudMat.uniforms.uShade.value.copy(w),this.waterMat.uniforms.uWave.value=t==="storm"?2.2:t==="dawn"?.5:1,this.farLand.color.setRGB(.25,.24,.17).multiplyScalar(t==="night"?.15:1),this.layoutClouds(t,(e.seed||1)*7+3),this.rain=!!e.rain||t==="storm",this.rainMesh.visible=this.rain,this.exposure=i.exposure,this.envRT&&this.envRT.dispose(),this.u.uCamAlt.value=0,this.envRT=this.pmrem.fromScene(this.envScene,0,.1,1e3),this.scene.environment=this.envRT.texture,this.scene.environmentIntensity=t==="night"?.25:t==="dusk"?.7:1}update(t,e,i={}){this.time+=t,this.u.uTime.value=this.time,this.sky.position.copy(e.position),this.u.uCamAlt.value=e.position.y,this.flash=Math.max(0,this.flash-t*6);let n=!1;this.todKey==="storm"&&i.lightning!==!1&&(this.nextBolt-=t,this.nextBolt<=0&&(this.flash=1,this.nextBolt=4+Math.random()*9,n=!0),this.flash>0&&Math.random()<.15&&(this.flash=Math.max(this.flash,.6))),this.u.uFlash.value=this.flash*.35,this.hemi.intensity=this.baseHemi+this.flash*2.5;let r=e.position.y,a=this.baseFog*(1/(1+Math.max(0,r-200)/2500));if(this.scene.fog.density=a,this.u.fogDensity.value=a,i.velocity&&this.rainMat.uniforms.uVel.value.copy(i.velocity),i.wind!==void 0&&this.rainMat.uniforms.uWind.value.set(i.wind,0),i.light&&(this.waterMat.uniforms.uLightPos.value.copy(i.light.pos),this.waterMat.uniforms.uLightCol.value.copy(i.light.col)),i.focus){let o=i.focus,c=this.sun.target.position;c.set(Se.clamp(o.x,-400,400)*.5,Se.clamp(o.y,0,300)*.5+40,-20);let l=this.todKey==="night"?this.u.uMoonDir.value:this.u.uSunDir.value;this.sun.position.copy(l).multiplyScalar(500).add(c)}return n}};function je(s,t=!1){let e=s[0].index!==null,i=new Set(Object.keys(s[0].attributes)),n=new Set(Object.keys(s[0].morphAttributes)),r={},a={},o=s[0].morphTargetsRelative,c=new xe,l=0;for(let u=0;u<s.length;++u){let f=s[u],h=0;if(e!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in f.attributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(f.attributes[d]),h++}if(h!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in f.morphAttributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;a[d]===void 0&&(a[d]=[]),a[d].push(f.morphAttributes[d])}if(t){let d;if(e)d=f.index.count;else if(f.attributes.position!==void 0)d=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,u),l+=d}}if(e){let u=0,f=[];for(let h=0;h<s.length;++h){let d=s[h].index;for(let g=0;g<d.count;++g)f.push(d.getX(g)+u);u+=s[h].attributes.position.count}c.setIndex(f)}for(let u in r){let f=qd(r[u]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,f)}for(let u in a){let f=a[u][0].length;if(f!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let h=0;h<f;++h){let d=[];for(let v=0;v<a[u].length;++v)d.push(a[u][v][h]);let g=qd(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(g)}}}return c}function qd(s){let t,e,i,n=-1,r=0;for(let l=0;l<s.length;++l){let u=s[l];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(n===-1&&(n=u.gpuType),n!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*e}let a=new t(r),o=new ke(a,e,i),c=0;for(let l=0;l<s.length;++l){let u=s[l];if(u.isInterleavedBufferAttribute){let f=c/e;for(let h=0,d=u.count;h<d;h++)for(let g=0;g<e;g++){let v=u.getComponent(h,g);o.setComponent(h+f,g,v)}}else a.set(u.array,c);c+=u.count*e}return n!==void 0&&(o.gpuType=n),o}var hs=new ne,us=new Ke,Ml=new P,yl=new P,Th=new P(0,1,0),hi=new P,bl=class{constructor(){this.list=[]}box(t,e,i,n,r,a){hs.compose(yl.set(t,e,i),us.identity(),Ml.set(n,r,a)),this.list.push(hs.clone())}rod(t,e,i){hi.subVectors(e,t);let n=hi.length();hi.divideScalar(n),us.setFromUnitVectors(Th,hi),yl.addVectors(t,e).multiplyScalar(.5),hs.compose(yl,us,Ml.set(i,n,i)),this.list.push(hs.clone())}mesh(t,e){let i=new Li(e||new Re(1,1,1),t,this.list.length);return this.list.forEach((n,r)=>i.setMatrixAt(r,n)),i.instanceMatrix.needsUpdate=!0,i.castShadow=!0,i.receiveShadow=!0,i.computeBoundingSphere(),i}};function Zt(s,t,e,i,n,r,a=0,o=0,c=0){let l=new Re(s,t,e);return(a||o||c)&&l.applyMatrix4(new ne().makeRotationFromEuler(new ci(a,o,c))),l.translate(i,n,r),l}function Bx(s,t,e){let i=new Re(e,1,e);hi.subVectors(t,s);let n=hi.length();return hi.divideScalar(n),us.setFromUnitVectors(Th,hi),hs.compose(yl.addVectors(s,t).multiplyScalar(.5),us,Ml.set(1,n,1)),i.applyMatrix4(hs),i}function On(s,t,e,i,n,r,a=16,o=!1){let c=new _e(s,t,e,a,1,o);return c.translate(i,n,r),c}var ue=(s,t,e)=>new P(s,t,e),Sl=class{constructor(t,e={}){this.scene=t,this.q=e.quality||"high",this.group=new He,t.add(this.group),this.steel=new oe({color:3882563,metalness:.55,roughness:.58}),this.steelLight=new oe({color:7041143,metalness:.6,roughness:.45}),this.rail=new oe({color:12106946,metalness:.9,roughness:.25}),this.black=new oe({color:1316120,metalness:.3,roughness:.7}),this.white=new oe({color:14211284,metalness:.1,roughness:.6}),this.yellow=new oe({color:13214247,metalness:.2,roughness:.5});let{concrete:i}=vl();i.repeat.set(10,10),this.concrete=new oe({map:i,color:13223357,roughness:.9,metalness:0,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2});let n=this.q!=="low";wi(this.steel,"metal",{a:[.62,.42,.3],hi:n}),wi(this.steelLight,"metal",{a:[.7,.55,.42],hi:n}),wi(this.concrete,"concrete",{hi:n}),wi(this.white,"tank",{hi:n}),this.tankMat=wi(new oe({color:13158857,metalness:.65,roughness:.32}),"tank",{hi:n}),this.facade=wi(new oe({color:11843773,metalness:.35,roughness:.55}),"facade",{hi:n}),this.facadeFar=wi(new oe({color:10133414,metalness:.35,roughness:.55}),"facade",{hi:n}),Xd([[0,Et.cz,17,.55],[0,0,19,.5],[-174,-61,36,.45],[-248,-14,30,.4],[-110,60,19,.45],[-300,70,28,.4],[-190,30,10,.4],[-420,-40,15,.5],[-60,75,10,.4],[-80,-45,8,.25]]),this.lightsOn=!1,this.buildPad(),this.buildTower(),this.buildArms(),this.buildMount(),this.buildFarm(),this.buildFar(),this.buildLights()}buildPad(){let t=new qi(95,48);t.rotateX(-Math.PI/2);let e=new dt(t,this.concrete);e.position.set(-10,1.62,-20),e.receiveShadow=!0,this.group.add(e);let i=new qi(26,32);i.rotateX(-Math.PI/2);let n=new dt(i,new oe({color:1776153,roughness:1,transparent:!0,opacity:.7,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4,depthWrite:!1}));n.position.set(0,1.63,0),this.group.add(n);let r=new Le(200,12);r.rotateX(-Math.PI/2);let a=new dt(r,this.concrete);a.position.set(-150,1.61,40),a.receiveShadow=!0,this.group.add(a)}buildTower(){let t=new bl,e=Et,i=e.width/2-.7,n=e.cz,r=9,a=Math.round(e.height/r),o=[[-i,-i],[i,-i],[i,i],[-i,i]];for(let d=0;d<a;d++){let g=d*r,v=g+r;for(let[m,p]of o)t.box(m,(g+v)/2,n+p,1.5,r,1.5);for(let m=0;m<4;m++){let[p,y]=o[m],[M,x]=o[(m+1)%4];t.rod(ue(p,v,n+y),ue(M,v,n+x),.9),t.rod(ue(p,g+r/2,n+y),ue(M,g+r/2,n+x),.45),t.rod(ue(p,g,n+y),ue(M,v,n+x),.5),t.rod(ue(M,g,n+x),ue(p,v,n+y),.5)}t.rod(ue(-i,v,n-i),ue(i,v,n+i),.35)}for(let d=2;d<a;d+=3)t.box(0,d*r+.2,n,e.width-2.4,.25,e.width-2.4);t.box(0,e.height/2,n+2,4,e.height,.3),t.box(-3,e.height/2,n-3,.6,e.height,.6),t.box(3,e.height/2,n-3,.6,e.height,.6);for(let d of[-e.pivotX,e.pivotX])t.box(d,e.height/2+4,e.front+.4,.9,e.height-8,.9);t.box(0,e.height+.5,n,e.width+1.5,1,e.width+1.5),this.tower=t.mesh(this.steel),this.group.add(this.tower);let c=je([Zt(10,6,12,0,e.height+4,n-1),Zt(4,3,4,5,e.height+8,n),On(.4,.15,18,-7,e.height+10,n-7,8),On(.3,.1,12,7,e.height+7,n+7,8),Zt(16,.8,1.2,0,e.height+2,n+9),Zt(1,6,1,-7.5,e.height+4,n+9),Zt(1,6,1,7.5,e.height+4,n+9)]),l=new dt(c,this.steelLight);l.castShadow=!0,this.group.add(l);let u=new He,f=je([Zt(3,3,22,0,0,11),Zt(3.6,4.4,3,0,0,22),On(.5,.5,22,1.1,-1.8,11,8).rotateX(Math.PI/2)]),h=new dt(f,this.steel);h.castShadow=!0,u.add(h),u.position.set(-7.5,96,e.front),u.rotation.y=-1.25,this.group.add(u)}armGeometry(){let t=Et,e=t.armLen,i=t.armHalf*2,n=t.armTall,r=[];r.push(Zt(i,.7,e,0,-.35,e/2),Zt(i,.6,e,0,-n+.3,e/2));let a=12;for(let o of[-i/2+.15,i/2-.15]){for(let c=0;c<=a;c++){let l=c/a*e;r.push(Zt(.3,n,.35,o,-n/2,l))}for(let c=0;c<a;c++){let l=c/a*e,u=(c+1)/a*e;r.push(Bx(ue(o,-n+.3,l),ue(o,-.4,u),.22))}}r.push(Zt(i+.6,n+1.4,3,0,-n/2,1.5)),r.push(Zt(i*.7,.12,e*.92,0,-n+.75,e*.48));for(let o of[-i/2-.25,i/2+.25])r.push(Zt(.3,.5,e*.85,o,-n*.55,e*.45));return r.push(Zt(i+.2,n*.8,.8,0,-n*.45,e-.4)),je(r)}railGeometry(t){let e=Et,i=e.armLen,n=e.armHalf*2,r=[Zt(.7,.35,i*.55,-t*(n/2-.35),.17,i*.47),Zt(.4,.5,.6,-t*(n/2-.2),.1,i*.2),Zt(.4,.5,.6,-t*(n/2-.2),.1,i*.75)],a=this.q==="low"?6:16;for(let c=0;c<a;c++){let l=i*(.22+.5*c/(a-1)),u=new _e(.22,.22,.62,10);u.rotateZ(Math.PI/2),u.translate(-t*(n/2-.35),.5,l),r.push(u.toNonIndexed())}for(let c=0;c<6;c++)r.push(Zt(.9,.12,.3,-t*(n/2-.35),.38,i*(.24+.09*c)));return je(r.map(c=>c.index?c.toNonIndexed():c))}buildArms(){let t=Et,e=this.armGeometry();this.arms=[];let i=je([Zt(t.width+3,2.2,1.8,0,1,t.front+.6),Zt(t.width+3,1.6,1.8,0,-6,t.front+.6),Zt(1.8,9,t.width+2,-(t.width/2+1.2),-2.5,t.cz),Zt(1.8,9,t.width+2,t.width/2+1.2,-2.5,t.cz),Zt(t.width+3,1.6,1.6,0,1,t.cz-t.width/2-.6),On(1.1,1.1,t.armTall+3,-t.pivotX,-1.5,t.pivotZ,12),On(1.1,1.1,t.armTall+3,t.pivotX,-1.5,t.pivotZ,12),Zt(4,3,4,-(t.width/2+2.5),-1,t.cz+3),Zt(4,3,4,t.width/2+2.5,-1,t.cz+3)]);this.carriage=new dt(i,this.steelLight),this.carriage.castShadow=!0,this.carriage.position.y=t.armH,this.group.add(this.carriage);for(let n of[1,-1]){let r=new He;r.position.set(n*t.pivotX,t.armH,t.pivotZ);let a=new dt(e,this.steelLight);a.castShadow=!0,a.receiveShadow=!0,r.add(a);let o=new dt(this.railGeometry(n),this.rail);o.castShadow=!0,r.add(o);let c=new dt(new Re(t.armHalf*2+.25,.6,2),this.yellow);c.position.set(0,-t.armTall+.3,t.armLen-1.5),r.add(c);let l=new dt(new _e(.45,.45,1,10),this.steel),u=new dt(new _e(.25,.25,1,8),this.rail);this.group.add(l,u),l.castShadow=!0,this.group.add(r),this.arms.push({sgn:n,piv:r,cylA:l,cylB:u,base:ue(n*(t.width/2+2.5),t.armH-1.5,t.cz+4)})}}buildMount(){let t=Et,e=new He,i=[];for(let f=0;f<6;f++){let h=f/6*Math.PI*2+Math.PI/6;i.push(Zt(3.2,20,3.2,Math.cos(h)*12,10+1.6,Math.sin(h)*12,0,-h,0))}let n=new _e(15,15,5,36,1,!0);n.translate(0,23.5,0),i.push(n);let r=new _e(6.4,6.4,5,36,1,!0);r.translate(0,23.5,0),i.push(r);let a=new Di(6.4,15,36,1);a.rotateX(-Math.PI/2),a.translate(0,t.mountTop,0),i.push(a);let o=a.clone();o.translate(0,-5,0),o.rotateX(0),i.push(o);for(let f=0;f<20;f++){let h=f/20*Math.PI*2;i.push(Zt(.8,1.6,1.4,Math.cos(h)*6.9,t.mountTop+.8,Math.sin(h)*6.9,0,-h,0))}i.push(Zt(3,3,9,-10,t.mountTop-3,-9,0,.6,0));let c=new dt(je(i.map(f=>f.index?f.toNonIndexed():f)),this.steel);c.castShadow=!0,c.receiveShadow=!0,c.material=this.steel,e.add(c);let l=new dt(new _e(9,11,1.4,32),this.black);l.position.set(0,2.3,0),l.receiveShadow=!0,e.add(l);let u=new dt(new Re(40,1.4,40),this.concrete);u.position.set(0,1.9,0),u.receiveShadow=!0,e.add(u),this.group.add(e),this.mount=e}buildFarm(){let t=ri(42),e=[],i=[],n=[],r=[];for(let v=0;v<8;v++){let m=-150-v%4*16,p=-70+Math.floor(v/4)*18,y=30+t()*10;e.push(On(6,6,y,m,y/2+1.6,p,24));let M=new yi(6,20,8,0,Math.PI*2,0,Math.PI/2);M.translate(m,y+1.6,p),e.push(M)}for(let v=0;v<10;v++){let m=new _e(3,3,26,18);m.rotateX(Math.PI/2),m.translate(-230-v%5*9,5.5,-30+Math.floor(v/5)*32),i.push(m)}n.push(Zt(140,1.2,3,-80,4,-45),Zt(1,4,1,-30,2,-45),Zt(1,4,1,-70,2,-45),Zt(1,4,1,-110,2,-45),Zt(1,4,1,-140,2,-45)),n.push(On(.7,.7,140,-80,5.2,-44,8).rotateZ(Math.PI/2)),r.push(Zt(26,9,18,-110,6,60),Zt(14,6,10,-60,4.6,75),Zt(40,14,22,-300,8.6,70),Zt(12,22,12,-190,12.6,30));let a=new dt(je(e.map(v=>v.toNonIndexed())),this.tankMat),o=new dt(je(i.map(v=>v.toNonIndexed())),this.white),c=new dt(je(n.map(v=>v.toNonIndexed())),this.steel),l=new dt(je(r.map(v=>v.toNonIndexed())),this.facade);for(let v of[a,o,c,l])v.castShadow=!0,v.receiveShadow=!0,this.group.add(v);let u=new bl,f=-40,h=-420,d=9;for(let v=0;v<16;v++){let m=v*9;for(let[p,y]of[[-d,-d],[d,-d],[d,d],[-d,d]])u.box(h+p,m+4.5,f+y,1.4,9,1.4);u.box(h,m+9,f-d,d*2,.8,.8),u.box(h,m+9,f+d,d*2,.8,.8),u.rod(ue(h-d,m,f+d),ue(h+d,m+9,f+d),.5),u.rod(ue(h-d,m,f-d),ue(h+d,m+9,f-d),.5),u.rod(ue(h-d,m,f-d),ue(h-d,m+9,f+d),.5),u.rod(ue(h+d,m,f-d),ue(h+d,m+9,f+d),.5)}u.box(h-6,110,f+26,2,3.6,34),u.box(h+6,110,f+26,2,3.6,34),this.group.add(u.mesh(this.steel));let g=new dt(new qi(60,32).rotateX(-Math.PI/2),this.concrete);g.position.set(h,1.6,f+20),this.group.add(g)}buildFar(){let t=[];t.push(Zt(90,82,60,-2600,41,-200),Zt(140,30,80,-2780,15,-120),Zt(60,60,40,-2480,30,-60),Zt(220,22,120,-3e3,11,40),Zt(30,70,30,-2700,35,40));let e=ri(9);for(let o=0;o<40;o++){let c=10+e()*30,l=4+e()*10;t.push(Zt(c,l,c*(.5+e()),-2200-e()*1600,l/2+1,-400+e()*800))}let i=new dt(je(t.map(o=>o.toNonIndexed())),this.facadeFar);i.receiveShadow=!1,this.group.add(i);let n=[],r=(o,c,l,u,f=0)=>{let h=new _e(l,l,u,20,1,!1,-Math.PI/2,Math.PI);h.rotateZ(Math.PI/2),f&&h.rotateY(f),h.translate(o,1.4,c),n.push(h.toNonIndexed())};r(-2350,-260,22,120),r(-2350,-200,22,120),r(-2900,-260,28,150,0),r(-520,150,14,60,Math.PI/2),r(-560,150,14,60,Math.PI/2);let a=new dt(je(n),wi(new oe({color:14277855,metalness:.1,roughness:.7}),"tank",{hi:this.q!=="low"}));a.castShadow=!0,a.receiveShadow=!0,this.group.add(a)}buildLights(){let t=Et,e=[],i=[],n=[],r=[],a=(v,m,p,y,M,x=0)=>{e.push(v,m,p),i.push(y[0],y[1],y[2]),n.push(M),r.push(x)},o=[1,.82,.55],c=[.85,.9,1],l=[1,.08,.04];for(let v=1;v<16;v++)a(-10.6,v*9+.5,t.cz+10.6,v%3?o:c,1.4),a(10.6,v*9+.5,t.cz+10.6,v%3?o:c,1.4),a(-10.6,v*9+.5,t.cz-10.6,o,1),a(10.6,v*9+.5,t.cz-10.6,o,1);a(-7,t.height+19,t.cz-7,l,3.5,1),a(7,t.height+13,t.cz+7,l,3,1),a(-10.6,75,t.cz+10.6,l,2.4,1),a(10.6,75,t.cz+10.6,l,2.4,1),a(-429,146,-49,l,3,1),this.masts=[ue(-70,0,60),ue(70,0,60),ue(-80,0,-80),ue(80,0,-60)];let u=[];for(let v of this.masts){u.push(On(.5,.8,40,v.x,20+1.6,v.z,8),Zt(5,2.4,1,v.x,41.6,v.z));for(let m=-2;m<=2;m++)a(v.x+m,41.6,v.z+.8*Math.sign(-v.z),c,2.4)}let f=new dt(je(u.map(v=>v.toNonIndexed())),this.steel);f.castShadow=!0,this.group.add(f);let h=ri(77);for(let v=0;v<90;v++)a(-2100-h()*1800,6+h()*30,-400+h()*800,o,6+h()*5);for(let v=0;v<30;v++)a(-150-h()*250,6+h()*20,-90+h()*180,o,2.5);let d=new xe;d.setAttribute("position",new Qt(e,3)),d.setAttribute("color",new Qt(i,3)),d.setAttribute("size",new Qt(n,1)),d.setAttribute("blink",new Qt(r,1)),this.lampMat=new se({uniforms:{uTex:{value:mn("glow")},uTime:{value:0},uOn:{value:0},uScale:{value:600}},transparent:!0,depthWrite:!1,blending:Fe,vertexShader:`attribute float size; attribute float blink; attribute vec3 color; uniform float uTime; uniform float uOn; uniform float uScale; varying vec3 vC;
        void main(){ vec4 mv = modelViewMatrix * vec4(position, 1.0); float b = blink > 0.5 ? step(0.5, fract(uTime * 0.75)) : 1.0;
          vC = color * b * (blink > 0.5 ? 1.0 : uOn) * 3.0; gl_PointSize = clamp(size * uScale / -mv.z, 1.5, 64.0); gl_Position = projectionMatrix * mv; }`,fragmentShader:"uniform sampler2D uTex; varying vec3 vC; void main(){ float a = texture2D(uTex, gl_PointCoord).a; gl_FragColor = vec4(vC * a, 1.0); }"}),this.lamps=new Kn(d,this.lampMat),this.lamps.frustumCulled=!1,this.lamps.renderOrder=9,this.group.add(this.lamps),this.coneMat=new se({transparent:!0,depthWrite:!1,blending:Fe,side:De,uniforms:{uOn:{value:0},uCol:{value:new ht(.75,.82,1)}},vertexShader:"varying float vT; varying vec3 vN; varying vec3 vV; void main(){ vT = uv.y; vec4 mv = modelViewMatrix * vec4(position, 1.0); vN = normalize(normalMatrix * normal); vV = normalize(-mv.xyz); gl_Position = projectionMatrix * mv; }",fragmentShader:`uniform float uOn; uniform vec3 uCol; varying float vT; varying vec3 vN; varying vec3 vV;
        void main(){ float e = pow(abs(dot(normalize(vN), normalize(vV))), 1.6); float a = pow(vT, 1.6) * e * uOn * 0.07; gl_FragColor = vec4(uCol * a, 1.0); }`});let g=[];for(let v of this.masts){let m=ue(v.x,41.6,v.z),p=ue(0,105,t.cz-2),y=m.distanceTo(p)*1.05,M=new _e(1.2,y*.2,y,20,1,!0);M.translate(0,-y/2,0),hi.subVectors(p,m).normalize(),us.setFromUnitVectors(ue(0,-1,0),hi),M.applyMatrix4(hs.compose(m,us,Ml.set(1,1,1))),g.push(M)}this.cones=new dt(je(g),this.coneMat),this.cones.visible=!1,this.cones.renderOrder=8,this.cones.frustumCulled=!1,this.group.add(this.cones),this.spots=[];for(let v of[ue(-70,42,60),ue(70,42,60)]){let m=new kr(14674175,0,420,.42,.6,1.2);m.position.copy(v),m.target.position.set(0,110,-18),this.group.add(m,m.target),this.spots.push(m)}}setNight(t,e=!1){this.lightsOn=t||e,this.lampMat.uniforms.uOn.value=t?1:e?.6:0;for(let i of this.spots)i.intensity=t?1400:e?350:0;this.coneMat.uniforms.uOn.value=t?1:e?.25:0,this.cones.visible=t||e,this.steel.emissive.setRGB(0,0,0),this.steelLight.emissive.setRGB(0,0,0)}update(t,e,i,n){let r=Et;this.lampMat.uniforms.uTime.value=i,this.lampMat.uniforms.uScale.value=(this.pxH||window.innerHeight||800)*.9/Math.tan(n.fov*Math.PI/180/2)/2;let a=t?t.arms.y:r.armH,o=t?t.arms.phi:r.openYaw;this.carriage.position.y=a;for(let c of this.arms){c.piv.position.y=a,c.piv.rotation.y=c.sgn*o;let l=9,u=c.piv.position.x+Math.sin(c.sgn*o)*l,f=c.piv.position.z+Math.cos(c.sgn*o)*l,h=ue(c.base.x,a-1.5,c.base.z),d=ue(u+c.sgn*1.1,a-1.5,f),g=h.clone().lerp(d,.55);Yd(c.cylA,h,g),Yd(c.cylB,g,d)}}};function Yd(s,t,e){hi.subVectors(e,t);let i=hi.length();hi.divideScalar(i),s.quaternion.setFromUnitVectors(Th,hi),s.position.addVectors(t,e).multiplyScalar(.5),s.scale.set(1,i,1)}function $d(s,t){s.onBeforeCompile=e=>{e.uniforms.uHeat=t.uHeat,e.uniforms.uFlowV=t.uFlowV,e.uniforms.uLen=t.uLen,e.uniforms.uBase=t.uBase,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
varying float vLy;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vLy = position.y;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
uniform float uHeat; uniform vec3 uFlowV; uniform float uLen; uniform float uBase; varying float vLy;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        { float lead = max(dot(normal, uFlowV), 0.0); float bot = 1.0 - smoothstep(uBase, uBase + uLen * 0.35, vLy);
          float h = uHeat * (pow(lead, 2.0) * 0.8 + bot * 0.45) ;
          totalEmissiveRadiance += mix(vec3(1.0, 0.25, 0.05), vec3(1.0, 0.6, 0.3), clamp(h - 0.4, 0.0, 1.0)) * h * h * 3.5; }`)},s.customProgramCacheKey=()=>"heat"}function Ox(){let s=document.createElement("canvas");s.width=512,s.height=64;let t=s.getContext("2d");t.fillStyle="#9a9ca0",t.fillRect(0,0,512,64);for(let i=0;i<32;i++)t.fillStyle="#0c0c0e",t.fillRect(i*16+3,10,9,44),t.fillStyle="#c9cbd0",t.fillRect(i*16+3,8,9,2);let e=new fn(s);return e.colorSpace=Je,e.wrapS=cn,e.anisotropy=4,e}var wl=class{constructor(t="booster",e={}){if(this.kind=t,this.V=Object.assign({},fl[t]),this.livery=Un.find(i=>i.id===e.livery)||Un[0],this.variant=ls.find(i=>i.id===e.variant)||ls[0],t==="booster"&&this.variant.len){let i=this.variant.len-this.V.len;this.V.len=this.variant.len,this.V.pin+=i,this.V.cg+=i*.4}this.q=e.quality||"high",this.group=new He,this.body=new He,this.group.add(this.body),this.u={uHeat:{value:0},uFlowV:{value:new P(0,-1,0)},uLen:{value:this.V.len},uBase:{value:-this.V.cg}},this.fins=[],this.flaps=[],t==="ship"?this.buildShip():this.buildBooster(),this.group.traverse(i=>{i.isMesh&&(i.castShadow=!0,i.receiveShadow=!0)})}hullMat(t){let e=Hd(t?Un[0]:this.livery,this.V.len,{ship:t,small:this.q==="low",hi:this.q==="high",r:this.V.r}),i=new oe({map:e.map,roughnessMap:e.rough,normalMap:e.normal,normalScale:new at(1,1),metalness:t?.82:this.livery.id==="black"||this.livery.id==="retro"?.3:.86,roughness:1,envMapIntensity:1.15});return $d(i,this.u),i}bells(t,e,i,n,r,a){let o=new _e(n,r,i,20,1,!0);o.translate(0,-i/2,0),new _e(n*.96,r*.97,i,20,1,!0).translate(0,-i/2,0);let l=new oe({color:5920080,metalness:.75,roughness:.4,side:De}),u=new Float32Array(t);l.onBeforeCompile=d=>{d.vertexShader=d.vertexShader.replace("#include <common>",`#include <common>
attribute float aHeat; varying float vHeat; varying float vBy;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vHeat = aHeat; vBy = position.y;`),d.fragmentShader=d.fragmentShader.replace("#include <common>",`#include <common>
varying float vHeat; varying float vBy;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        totalEmissiveRadiance += vec3(1.0, 0.42, 0.12) * vHeat * vHeat * (0.6 + 2.5 * smoothstep(${(-i).toFixed(2)}, 0.0, vBy) * (gl_FrontFacing ? 0.4 : 1.0)) * 2.0;`)},l.customProgramCacheKey=()=>"bell";let f=new Li(o,l,t);f.geometry.setAttribute("aHeat",new ze(u,1));let h=new ne;return e.forEach((d,g)=>{h.makeTranslation(d.x,a,d.z),f.setMatrixAt(g,h)}),f.frustumCulled=!1,this.body.add(f),this.bellMesh=f,this.bellHeat=u,this.bellY=a,this.bellLen=i,f}buildBooster(){let t=this.V,e=t.r,i=t.len,n=t.cg,r=-n,a=i-n,o=new dt(new _e(e,e,i-2.2,this.q==="low"?32:64,8,!0),this.hullMat(!1));o.position.y=r+.3+(i-2.2)/2,this.body.add(o),this.hull=o;let c=this.variant.sleek?o.material:new oe({map:Ox(),metalness:.7,roughness:.45});this.variant.sleek||c.map.repeat.set(1,1);let l=new dt(new _e(e*.995,e*.995,1.9,48,1,!0),c);l.position.y=a-.95,this.body.add(l);let u=new oe({color:9211796,metalness:.8,roughness:.4}),f=new dt(new qi(e,48),u);f.rotation.x=-Math.PI/2,f.position.y=a,this.body.add(f);let h=new dt(new yi(e*.9,32,8,0,Math.PI*2,0,.5),u);h.position.y=a-e*.9*Math.cos(.5)+.05,this.body.add(h);let d=new dt(new Re(.7,i*.8,.5),new oe({color:10396328,metalness:.7,roughness:.45}));d.position.set(0,r+i*.48,e+.1),this.body.add(d);let g=new oe({color:2763566,metalness:.6,roughness:.5});for(let T of[1,-1]){let R=new dt(new Re(1.3,.8,1.6),g);R.position.set(T*(e+.55),t.pin-n+.4,0),this.body.add(R)}let v=this.variant.fins||4,m=v===3,p=Gd(),y=new oe({map:p,alphaMap:p,alphaTest:.5,transparent:!1,color:5592924,metalness:.7,roughness:.5,side:De}),M=new oe({color:3948098,metalness:.7,roughness:.5}),x=m?4.2:3.5,S=m?5:4.2;for(let T=0;T<v;T++){let R=(v===4?45+T*90:90+T*120)*Math.PI/180,I=new He;I.position.set(Math.cos(R)*e,a-3.6,Math.sin(R)*e),I.rotation.y=-R;let D=new He;I.add(D);for(let O of this.q==="low"?[0]:[-.22,0,.22]){let z=new dt(new Le(S,x),y);z.rotation.x=-Math.PI/2,z.position.set(S/2+.6,O,0),D.add(z)}let k=je([new Re(S,.62,.28).translate(S/2+.6,0,x/2),new Re(S,.62,.28).translate(S/2+.6,0,-x/2),new Re(.28,.62,x).translate(S+.6,0,0),new Re(.28,.62,x).translate(.62,0,0),new Re(.8,.9,x*.5).translate(.4,0,0)]);D.add(new dt(k,M));let N=new dt(new Re(1.2,2.6,2),M);N.position.set(.3,.2,0),I.add(N),this.body.add(I),this.fins.push({pivot:D,a:R})}let w=new oe({color:4868942,metalness:.6,roughness:.6}),A=new dt(new _e(e,e*1,2.6,48,1,!0),w);A.position.y=r+1.3,this.body.add(A);let _=new dt(new Di(.3,e,48),new oe({color:1710620,metalness:.2,roughness:.9,side:De}));_.rotation.x=Math.PI/2,_.position.y=r+.9,this.body.add(_),this.bells(t.engines.length,t.engines,2.1,.42,.66,r+.9),this.nozzleY=r+.9-2.1}buildShip(){let t=this.V,e=t.r,i=t.len,n=t.cg,r=-n,a=i-n,o=i-18,c=new dt(new _e(e,e,o,64,6,!0),this.hullMat(!0));c.position.y=r+o/2,this.body.add(c),this.hull=c;let l=[];for(let w=0;w<=24;w++){let A=w/24,_=A*18,T=e*Math.sqrt(Math.max(0,1-Math.pow(A,2.2)))*(1-.08*A);l.push(new at(Math.max(.05,T),_))}let u=new dt(new ks(l,64),c.material);u.position.y=r+o,this.body.add(u);let f=Vd();f.repeat.set(6,14);let h=new oe({map:f,color:16777215,metalness:.05,roughness:.75});$d(h,this.u);let d=new dt(new _e(e+.06,e+.06,o,48,4,!0,Math.PI*.5+.35+Math.PI,Math.PI-.7),h);d.geometry.dispose(),d.geometry=new _e(e+.06,e+.06,o,48,4,!0,Math.PI*1.5-1.25,2.5),d.position.y=r+o/2,this.body.add(d);let g=l.map(w=>new at(w.x+.06,w.y)),v=new dt(new ks(g,48,Math.PI*1.5-1.25-Math.PI/2,2.5),h);v.position.y=r+o,this.body.add(v);let m=new oe({color:1776413,metalness:.2,roughness:.8}),p=(w,A,_,T)=>{let R=new He;R.position.set(-e*.25,w,T*e*.97);let I=new He;R.add(I);let D=new Bs;D.moveTo(0,0),D.lineTo(0,A),D.lineTo(_,A*.8),D.lineTo(_*.9,.3),D.lineTo(0,0);let k=new Ur(D,{depth:.35,bevelEnabled:!1});k.rotateY(T>0?-Math.PI/2:Math.PI/2),k.translate(0,-A/2,0);let N=new dt(k,m);return I.add(N),this.body.add(R),this.flaps.push({p:I,z:T,fwd:w>0}),R};p(a-12.5,8,3.2,1),p(a-12.5,8,3.2,-1),p(r+7.5,12,4.4,1),p(r+7.5,12,4.4,-1);let y=new oe({color:2763566,metalness:.6,roughness:.5});for(let w of[1,-1]){let A=new dt(new Re(1.2,.8,1.4),y);A.position.set(w*(e+.5),t.pin-n+.4,0),this.body.add(A)}let M=new dt(new qi(e,48),new oe({color:1710620,roughness:.9}));M.rotation.x=Math.PI/2,M.position.y=r+.6,this.body.add(M);let x=t.engines;this.bells(x.length,x,2.4,.42,.7,r+.6);let S=new ne;x.forEach((w,A)=>{w.g==="v"&&(S.makeScale(1.9,1.35,1.9).setPosition(w.x,r+.6,w.z),this.bellMesh.setMatrixAt(A,S))}),this.nozzleY=r+.6-2.4}nozzleLocal(t,e){return e.set(t.x,this.nozzleY-(t.g==="v"?.9:0),t.z)}update(t,e,i){if(!t)return;this.group.position.set(t.x,t.y,0),this.group.rotation.set(0,0,-t.th);let n=t.T>0?Math.min(1,t.T/2e7):0;this.body.position.set((Math.random()-.5)*.02*n,0,(Math.random()-.5)*.02*n);let r=t.finAct||0;if(this.fins.forEach((c,l)=>{let u=Math.cos(c.a)>.1?1:Math.cos(c.a)<-.1?-1:0;c.pivot.rotation.x=Se.lerp(c.pivot.rotation.x,(u||1)*r*.45*(u?1:.3),Math.min(1,e*10))}),this.flaps.length){let c=t.th<-.6,l=r;for(let u of this.flaps){let f=c?.15:1.25,h=c?(u.fwd?-l:l)*.45:0;u.p.rotation.y=Se.lerp(u.p.rotation.y,(f+h)*(u.z>0?1:-1)*.6,Math.min(1,e*6))}}for(let c=0;c<t.eng.length;c++){let l=t.eng[c],u=l.st===2||l.st===1?.5+.5*l.sp:0;this.bellHeat[c]+=(Math.max(u,this.bellHeat[c]*.995)-this.bellHeat[c])*Math.min(1,e*(u>this.bellHeat[c]?4:.25))}this.bellMesh.geometry.attributes.aHeat.needsUpdate=!0,this.u.uHeat.value+=(Math.min(1.2,t.heat||0)-this.u.uHeat.value)*Math.min(1,e*3);let a=Math.hypot(t.vx,t.vy)||1;this.u.uFlowV.value.set(t.vx/a,t.vy/a,0).transformDirection(i.matrixWorldInverse)}dispose(){this.group.traverse(t=>{t.isMesh&&t.geometry.dispose()})}};var js=class{constructor(t,{additive:e=!1,tex:i="smoke",fogU:n,light:r}={}){this.max=t,this.n=0,this.additive=e,this.pos=new Float32Array(t*3),this.vel=new Float32Array(t*3),this.size=new Float32Array(t),this.grow=new Float32Array(t),this.life=new Float32Array(t),this.age=new Float32Array(t),this.c0=new Float32Array(t*3),this.c1=new Float32Array(t*3),this.a0=new Float32Array(t),this.drag=new Float32Array(t),this.buoy=new Float32Array(t),this.rot=new Float32Array(t),this.rotV=new Float32Array(t),this.fin=new Float32Array(t),this.gnd=new Float32Array(t);let a=new Yi,o=new Le(1,1);a.index=o.index,a.attributes.position=o.attributes.position,a.attributes.uv=o.attributes.uv,this.aPS=new ze(new Float32Array(t*4),4),this.aCol=new ze(new Float32Array(t*4),4),this.aRot=new ze(new Float32Array(t),1);for(let c of[this.aPS,this.aCol,this.aRot])c.setUsage(Yc);a.setAttribute("aPS",this.aPS),a.setAttribute("aCol",this.aCol),a.setAttribute("aRot",this.aRot),a.instanceCount=0,this.uniforms={uTex:{value:mn(i)},uLight:{value:new ht(1,1,1)},uAmb:{value:new ht(.4,.4,.45)},uPL:{value:new P(0,-9999,0)},uPLc:{value:new ht(0,0,0)},uSunDir:n&&n.uSunDir?n.uSunDir:{value:new P(0,1,0)},fogColor:n?n.fogColor:{value:new ht},fogDensity:n?n.fogDensity:{value:0}},this.mat=new se({uniforms:this.uniforms,transparent:!0,depthWrite:!1,blending:e?Fe:In,vertexShader:`attribute vec4 aPS; attribute vec4 aCol; attribute float aRot; varying vec2 vUv; varying vec4 vCol; varying vec3 vW; varying vec3 vR; varying vec3 vU;
        void main(){ vUv = uv; vCol = aCol; vec3 right = vec3(viewMatrix[0][0], viewMatrix[1][0], viewMatrix[2][0]); vec3 up = vec3(viewMatrix[0][1], viewMatrix[1][1], viewMatrix[2][1]);
          float c = cos(aRot), s = sin(aRot); vec2 p = vec2(position.x * c - position.y * s, position.x * s + position.y * c) * aPS.w;
          vR = right * c + up * s; vU = up * c - right * s;
          vec3 w = aPS.xyz + right * p.x + up * p.y; vW = w;
          vec4 mv = viewMatrix * vec4(w, 1.0);
          // nahe der Kamera ausblenden
          vCol.a *= smoothstep(0.3, 1.2 + aPS.w * 0.4, -mv.z);
          gl_Position = projectionMatrix * mv; }`,fragmentShader:ia+`uniform vec3 uSunDir; varying vec3 vR; varying vec3 vU; uniform sampler2D uTex; uniform vec3 uLight; uniform vec3 uAmb; uniform vec3 uPL; uniform vec3 uPLc; uniform vec3 fogColor; uniform float fogDensity; varying vec2 vUv; varying vec4 vCol; varying vec3 vW;
        void main(){ float t = texture2D(uTex, vUv).a; float a = t * vCol.a; if (a < 0.004) discard;
          ${e?"vec3 col = vCol.rgb * a; col = applyFog(col, vW, cameraPosition, vec3(0.0), fogDensity); gl_FragColor = vec4(col, 1.0);":`vec3 d = uPL - vW; float l = 1.0 / (1.0 + dot(d, d) * 0.0006);
          // Pseudo-Volumen: Kugelnormale aus der Billboard-Koordinate, weiches Wrap-Licht + R\xFCckstreuung
          vec2 q = vUv * 2.0 - 1.0; vec3 toC = normalize(cameraPosition - vW);
          vec3 nr = normalize(vR * q.x + vU * q.y + toC * sqrt(max(0.05, 1.0 - dot(q, q))));
          float lit = clamp(dot(nr, uSunDir) * 0.5 + 0.5, 0.0, 1.0); lit = lit * lit * (3.0 - 2.0 * lit);
          float back = pow(max(dot(-toC, uSunDir), 0.0), 8.0) * (1.0 - t) * 0.8;
          vec3 col = vCol.rgb * (uAmb + uLight * (0.25 + 0.95 * lit + back)) + uPLc * l * vCol.rgb * (0.6 + 0.4 * (1.0 - lit));
          col = applyFog(col, vW, cameraPosition, fogColor, fogDensity); gl_FragColor = vec4(col, a);`} }`}),this.mesh=new dt(a,this.mat),this.mesh.frustumCulled=!1,this.mesh.renderOrder=e?7:6}spawn(t,e,i,n,r,a,o,c,l,u,f,h,d=.5,g=0,v=.1,m=-1e9){let p=this.n;p>=this.max?p=Math.random()*this.max|0:this.n++;let y=p*3;this.pos[y]=t,this.pos[y+1]=e,this.pos[y+2]=i,this.vel[y]=n,this.vel[y+1]=r,this.vel[y+2]=a,this.size[p]=o,this.grow[p]=c,this.life[p]=l,this.age[p]=0,this.c0[y]=u[0],this.c0[y+1]=u[1],this.c0[y+2]=u[2],f=f||u,this.c1[y]=f[0],this.c1[y+1]=f[1],this.c1[y+2]=f[2],this.a0[p]=h,this.drag[p]=d,this.buoy[p]=g,this.rot[p]=Math.random()*6.28,this.rotV[p]=(Math.random()-.5)*.8,this.fin[p]=v,this.gnd[p]=m}update(t,e=0){let i=this.pos,n=this.vel,r=this.aPS.array,a=this.aCol.array,o=this.aRot.array,c=0;for(;c<this.n;){if(this.age[c]+=t,this.age[c]>=this.life[c]){this.kill(c);continue}let l=c*3,u=Math.exp(-this.drag[c]*t);if(n[l]=(n[l]-e)*u+e,n[l+1]=n[l+1]*u+this.buoy[c]*t,n[l+2]*=u,i[l]+=n[l]*t,i[l+1]+=n[l+1]*t,i[l+2]+=n[l+2]*t,i[l+1]<this.gnd[c]&&(i[l+1]=this.gnd[c],n[l+1]<0)){let m=-n[l+1]*.5;n[l+1]=0;let p=Math.random()*6.28;n[l]+=Math.cos(p)*m,n[l+2]+=Math.sin(p)*m}this.size[c]+=this.grow[c]*t,this.rot[c]+=this.rotV[c]*t;let f=this.age[c]/this.life[c],h=this.fin[c],d=this.a0[c]*(f<h?f/h:1)*(1-Math.pow(Math.max(0,(f-h)/(1-h)),1.6)),g=Math.min(1,f*2.2),v=c*4;r[v]=i[l],r[v+1]=i[l+1],r[v+2]=i[l+2],r[v+3]=this.size[c],a[v]=this.c0[l]+(this.c1[l]-this.c0[l])*g,a[v+1]=this.c0[l+1]+(this.c1[l+1]-this.c0[l+1])*g,a[v+2]=this.c0[l+2]+(this.c1[l+2]-this.c0[l+2])*g,a[v+3]=d,o[c]=this.rot[c],c++}this.mesh.geometry.instanceCount=this.n,this.aPS.needsUpdate=!0,this.aCol.needsUpdate=!0,this.aRot.needsUpdate=!0}kill(t){let e=--this.n;if(t===e)return;let i=t*3,n=e*3;for(let r=0;r<3;r++)this.pos[i+r]=this.pos[n+r],this.vel[i+r]=this.vel[n+r],this.c0[i+r]=this.c0[n+r],this.c1[i+r]=this.c1[n+r];for(let r of[this.size,this.grow,this.life,this.age,this.a0,this.drag,this.buoy,this.rot,this.rotV,this.fin,this.gnd])r[t]=r[e]}clear(){this.n=0,this.mesh.geometry.instanceCount=0}};var kn=new P,Tl=new P,q=Math.random,Qs=s=>Math.abs(s)<Et.mountR+4?Et.mountTop:s>Ti?.2:1.6,El=class{constructor(t,e,i={}){this.scene=t,this.world=e,this.q=i.quality||"high";let n=this.q==="high"?5200:this.q==="med"?3200:1700,r=e.u;this.smoke=new js(n,{additive:!1,tex:"smoke",fogU:r}),this.fire=new js(Math.floor(n*.7),{additive:!0,tex:"glow",fogU:r}),this.sparks=new js(800,{additive:!0,tex:"spark",fogU:r}),t.add(this.smoke.mesh,this.fire.mesh,this.sparks.mesh),this.density=this.q==="high"?1:this.q==="med"?.65:.38,this.time=0,this.flash=0,this.shake=0,this.haze=0,this.light=new Hs(16746560,0,900,1.6),t.add(this.light),this.boomLight=new Hs(16755285,0,3e3,1.4),t.add(this.boomLight),this.buildPlumeMat(),this.buildSheath(),this.buildDebris(),this.buildShock(),this.buildVapor(),this.buildHalo(),this.wrecks=[],this.pendingBooms=[],this.lastSim=null}buildPlumeMat(){let t=new _e(1,1,1,20,40,!0);t.translate(0,-.5,0),this.plumeGeo=t,this.plumeU={uTime:{value:0},uNoise:{value:Bn()}},this.plumeMat=new se({uniforms:this.plumeU,transparent:!0,depthWrite:!1,blending:Fe,side:$i,vertexShader:`attribute vec4 aP; attribute vec4 aQ; varying float vT; varying float vI; varying vec3 vN; varying vec3 vV; varying float vLen; varying float vExp; varying vec2 vUv; varying float vSeed;
        void main(){ float t = -position.y; vT = t; vI = aQ.x; vLen = aQ.y; vExp = aQ.z; vSeed = aQ.w; vUv = uv;
          float w = aP.w * (1.0 + t * (0.18 + vExp * 4.5)) * (1.0 - 0.75 * pow(t, 2.5) * (1.0 - vExp));
          vec3 p = vec3(position.x * w, -t * vLen, position.z * w) + aP.xyz;
          vec4 wp = modelMatrix * vec4(p, 1.0);
          vN = normalize(mat3(modelMatrix) * vec3(position.x, 0.25 + vExp, position.z)); vV = normalize(cameraPosition - wp.xyz);
          gl_Position = projectionMatrix * viewMatrix * wp; }`,fragmentShader:`uniform float uTime; uniform sampler2D uNoise; varying float vT; varying float vI; varying vec3 vN; varying vec3 vV; varying float vLen; varying float vExp; varying vec2 vUv; varying float vSeed;
        void main(){ if (vI < 0.01) discard;
          float edge = abs(dot(normalize(vN), vV)); float core = pow(edge, 1.6 + vExp * 2.0);
          float d = vT * vLen; float spacing = 2.4 + vExp * 6.0;
          float ph = fract(d / spacing); float dia = exp(-pow((ph - 0.55) * 5.0, 2.0)) * exp(-d / (spacing * 4.5)) * (1.0 - vExp * 0.6);
          float n = texture2D(uNoise, vec2(vUv.x * 2.0 + vSeed, vT * 2.0 - uTime * 6.0)).r;
          float fall = exp(-vT * (2.4 - vExp)) * (0.75 + 0.5 * n);
          vec3 hot = vec3(1.0, 0.82, 0.62); vec3 sea = vec3(1.0, 0.45, 0.16); vec3 vac = vec3(0.5, 0.42, 1.0);
          vec3 col = mix(sea, vac, clamp(vExp * 1.6, 0.0, 1.0));
          col = mix(col, hot, exp(-vT * 7.0));
          col += vec3(1.0, 0.75, 0.85) * dia * 2.2;
          float a = vI * core * fall * (1.0 - smoothstep(0.75, 1.0, vT)) * (vExp > 0.3 ? 0.5 : 1.0);
          gl_FragColor = vec4(col * a * 2.6, 1.0); }`})}buildSheath(){let t=new _e(1,1,1,28,24,!0);t.translate(0,-.5,0),this.sheathU={uTime:this.plumeU.uTime,uNoise:this.plumeU.uNoise,uI:{value:0},uExp:{value:0}},this.sheath=new dt(t,new se({uniforms:this.sheathU,transparent:!0,depthWrite:!1,blending:Fe,vertexShader:`uniform float uExp; varying float vT; varying vec3 vN; varying vec3 vV; varying vec2 vUv;
        void main(){ float t = -position.y; vT = t; vUv = uv; float w = 1.0 + t * (0.9 + uExp * 6.0);
          vec3 p = vec3(position.x * w, position.y, position.z * w); vec4 wp = modelMatrix * vec4(p, 1.0);
          vN = normalize(mat3(modelMatrix) * vec3(position.x, 0.4, position.z)); vV = normalize(cameraPosition - wp.xyz); gl_Position = projectionMatrix * viewMatrix * wp; }`,fragmentShader:`uniform float uTime; uniform sampler2D uNoise; uniform float uI; uniform float uExp; varying float vT; varying vec3 vN; varying vec3 vV; varying vec2 vUv;
        void main(){ float e = abs(dot(normalize(vN), vV)); float n = texture2D(uNoise, vec2(vUv.x * 3.0, vT * 1.4 - uTime * 3.2)).g; float n2 = texture2D(uNoise, vec2(vUv.x * 7.0 + 0.3, vT * 3.0 - uTime * 5.5)).b;
          float a = uI * pow(e, 1.3) * smoothstep(0.0, 0.08, vT) * (1.0 - smoothstep(0.35, 1.0, vT)) * smoothstep(0.3, 0.75, n * 0.7 + n2 * 0.5);
          vec3 col = mix(vec3(1.0, 0.5, 0.18), vec3(0.55, 0.4, 0.95), clamp(uExp * 1.5, 0.0, 1.0)); col = mix(vec3(1.0, 0.8, 0.55), col, smoothstep(0.0, 0.3, vT));
          gl_FragColor = vec4(col * a * 0.55, 1.0); }`})),this.sheath.frustumCulled=!1,this.sheath.renderOrder=8,this.sheath.visible=!1}buildHalo(){this.halo=new dt(new Le(1,1),new se({uniforms:{uTex:{value:mn("glow")},uI:{value:0},uCol:{value:new ht(1,.6,.3)}},transparent:!0,depthWrite:!1,depthTest:!0,blending:Fe,vertexShader:"varying vec2 vUv; void main(){ vUv = uv; vec4 mv = modelViewMatrix * vec4(0.0,0.0,0.0,1.0); mv.xy += position.xy * vec2(length(modelMatrix[0].xyz)); gl_Position = projectionMatrix * mv; }",fragmentShader:"uniform sampler2D uTex; uniform float uI; uniform vec3 uCol; varying vec2 vUv; void main(){ float a = texture2D(uTex, vUv).a; gl_FragColor = vec4(uCol * a * uI, 1.0); }"})),this.halo.frustumCulled=!1,this.halo.renderOrder=9,this.scene.add(this.halo),this.shockGlow=this.halo.clone(),this.shockGlow.material=this.halo.material.clone(),this.shockGlow.material.uniforms.uTex.value=mn("glow"),this.scene.add(this.shockGlow)}attach(t){if(this.plumes&&(this.plumes.parent&&this.plumes.parent.remove(this.plumes),this.plumes.geometry.dispose()),!t){this.plumes=null;return}let e=t.V.engines.length,i=new Yi;i.index=this.plumeGeo.index,i.attributes.position=this.plumeGeo.attributes.position,i.attributes.uv=this.plumeGeo.attributes.uv,this.aP=new ze(new Float32Array(e*4),4),this.aQ=new ze(new Float32Array(e*4),4),i.setAttribute("aP",this.aP),i.setAttribute("aQ",this.aQ),i.instanceCount=e,t.V.engines.forEach((n,r)=>{t.nozzleLocal(n,kn),this.aP.array.set([kn.x,kn.y,kn.z,n.g==="v"?1.15:.62],r*4),this.aQ.array[r*4+3]=q()*10}),this.plumes=new dt(i,this.plumeMat),this.plumes.frustumCulled=!1,this.plumes.renderOrder=8,t.body.add(this.plumes),t.body.add(this.sheath),this.sheath.position.set(0,t.nozzleY+.6,0),this.vehicle=t}buildDebris(){this.debris=new Li(new Re(1,1,1),new oe({color:9079952,metalness:.75,roughness:.45,emissive:0}),160),this.debris.instanceColor=new ze(new Float32Array(480).fill(1),3),this.debris.count=0,this.debris.frustumCulled=!1,this.debris.castShadow=!0,this.scene.add(this.debris),this.deb=[]}buildShock(){let t=new dt(new Di(.85,1,64,1),new Xi({color:16767400,transparent:!0,opacity:0,depthWrite:!1,blending:Fe,side:De}));t.rotation.x=-Math.PI/2,t.visible=!1,this.scene.add(t),this.ring=t;let e=new dt(new yi(1,32,16),new se({transparent:!0,depthWrite:!1,blending:Fe,uniforms:{uA:{value:0}},vertexShader:"varying vec3 vN; varying vec3 vV; void main(){ vec4 w = modelMatrix * vec4(position,1.0); vN = normalize(mat3(modelMatrix) * normal); vV = normalize(cameraPosition - w.xyz); gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:"uniform float uA; varying vec3 vN; varying vec3 vV; void main(){ float f = pow(1.0 - abs(dot(vN, vV)), 4.0); gl_FragColor = vec4(vec3(1.0, 0.8, 0.6) * f * uA, 1.0); }"}));e.visible=!1,this.scene.add(e),this.shockSphere=e;let i=new dt(new Qn(1,4),new se({transparent:!0,depthWrite:!1,blending:Fe,uniforms:{uA:{value:0},uT:{value:0},uNoise:{value:Bn()}},vertexShader:`uniform float uT; uniform sampler2D uNoise; varying vec3 vN; varying vec3 vV; varying float vH;
        void main(){ vec3 p = position; float h = texture2D(uNoise, vec2(atan(p.z, p.x) * 0.3 + uT * 0.05, p.y * 0.5 + 0.5 - uT * 0.1)).r; vH = h; p *= 0.75 + h * 0.6;
          vec4 w = modelMatrix * vec4(p,1.0); vN = normalize(mat3(modelMatrix) * normal); vV = normalize(cameraPosition - w.xyz); gl_Position = projectionMatrix * viewMatrix * w; }`,fragmentShader:`uniform float uA; uniform float uT; varying vec3 vN; varying vec3 vV; varying float vH;
        void main(){ float f = pow(abs(dot(vN, vV)), 1.5); vec3 c = mix(vec3(1.0, 0.25, 0.04), vec3(1.0, 0.85, 0.55), f * vH * 1.4 * (1.0 - uT));
          gl_FragColor = vec4(c * (0.6 + f) * uA * 6.0, 1.0); }`}));i.visible=!1,this.scene.add(i),this.fireball=i}buildVapor(){let t=new Er(1,1,40,8,!0);t.translate(0,-.5,0),this.vapor=new dt(t,new se({transparent:!0,depthWrite:!1,side:De,uniforms:{uA:{value:0},uT:{value:0},uNoise:{value:Bn()},uLight:{value:new ht(1,1,1)}},vertexShader:"varying vec2 vUv; varying vec3 vN; varying vec3 vV; void main(){ vUv = uv; vec4 w = modelMatrix * vec4(position,1.0); vN = normalize(mat3(modelMatrix) * normal); vV = normalize(cameraPosition - w.xyz); gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`uniform float uA; uniform float uT; uniform sampler2D uNoise; uniform vec3 uLight; varying vec2 vUv; varying vec3 vN; varying vec3 vV;
        void main(){ float n = texture2D(uNoise, vec2(vUv.x * 3.0, vUv.y * 0.8 - uT * 2.0)).g; float f = pow(1.0 - abs(dot(vN, vV)), 1.3);
          float a = uA * (0.25 + f) * smoothstep(0.0, 0.35, vUv.y) * smoothstep(1.0, 0.75, vUv.y) * (0.5 + n);
          gl_FragColor = vec4(uLight * 0.95, clamp(a, 0.0, 0.85)); }`})),this.vapor.visible=!1,this.vapor.renderOrder=6,this.scene.add(this.vapor)}reset(){this.smoke.clear(),this.fire.clear(),this.sparks.clear(),this.deb.length=0,this.debris.count=0,this.wrecks.length=0,this.pendingBooms.length=0,this.ring.visible=!1,this.shockSphere.visible=!1,this.fireball.visible=!1,this.flash=0,this.shake=0,this.light.intensity=0,this.boomLight.intensity=0,this.ventT=0,this.boomT=-1}setLighting(t,e){for(let i of[this.smoke])i.uniforms.uLight.value.copy(t),i.uniforms.uAmb.value.copy(e);this.vapor.material.uniforms.uLight.value.copy(t).add(e)}explode(t,e=1,i=!1){let n=t.bx!==void 0?(t.x+t.bx)/2:t.x,r=Math.max(Qs(n)+2,t.by!==void 0?(t.y+t.by)/2:t.y),a=0,o=Math.max(.45,Math.min(1.3,e)),c=this.density,l=Qs(n);this.flash=Math.min(1.4,.8+o*.5),this.shake=1.2*o,this.haze=1,this.boomLight.position.set(n,r+10,8),this.boomLight.intensity=3e5*o,this.boomT=0,this.boomPos=new P(n,r,a),this.fireball.visible=!0,this.fireball.position.set(n,r,a),this.fireball.scale.setScalar(4),this.fbT=0,this.fbE=o,this.shockSphere.visible=!0,this.shockSphere.position.set(n,r,a),this.ssT=0,this.ring.visible=!0,this.ring.position.set(n,l+.6,0),this.ringT=0;let u=(t.vx||0)*.25,f=Math.max(-20,(t.vy||0)*.15),h=Math.floor(280*c*o),d=Math.floor(170*c*o);for(let v=0;v<h;v++){let m=q()*6.283,p=Math.acos(2*q()-1),y=(8+q()*38)*o,M=Math.sin(p)*Math.cos(m),x=Math.abs(Math.cos(p))*(i?1.6:.8),S=Math.sin(p)*Math.sin(m);this.fire.spawn(n+M*4,r+x*4,a+S*4,u+M*y,f+x*y,S*y,10+q()*18,14+q()*14,1+q()*1.8,[7,3.6,1.3],[1.6,.28,.05],1,1.6,7,.05,l)}for(let v=0;v<d;v++){let m=q()*6.283,p=(3+q()*22)*o,y=Math.cos(m),M=Math.sin(m),x=i?[.9,.92,.95]:[.16,.13,.11],S=i?[.75,.77,.8]:[.07,.07,.07];this.smoke.spawn(n+y*6,r+q()*10,a+M*6,u+y*p,q()*20*o+(i?25:0),M*p,16+q()*20,8+q()*6,6+q()*8,x,S,.85,1,i?-4:3.5,.08,l)}for(let v=0;v<240*c;v++){let m=q()*6.283,p=Math.acos(2*q()-1),y=25+q()*80;this.sparks.spawn(n,r,a,Math.sin(p)*Math.cos(m)*y+u,Math.abs(Math.cos(p))*y*.9,Math.sin(p)*Math.sin(m)*y,.6+q()*.9,-.1,1+q()*2.2,[9,4.5,1.5],[3,.6,.1],1,.4,-9.8,.02,l)}for(let v=0;v<70*c;v++){let m=q()*6.283,p=30+q()*40;this.smoke.spawn(n+Math.cos(m)*8,l+2,Math.sin(m)*8,Math.cos(m)*p,1+q()*3,Math.sin(m)*p,5+q()*4,6,3+q()*3,i?[.85,.88,.9]:[.55,.5,.42],null,.6,1.4,.5,.05,l)}if(i)for(let v=0;v<260*c;v++){let m=q()*6.283,p=q()*12;this.smoke.spawn(n+Math.cos(m)*p,1,Math.sin(m)*p,Math.cos(m)*(4+q()*10),30+q()*70,Math.sin(m)*(4+q()*10),3+q()*5,4,2.5+q()*3,[.95,.97,1],[.85,.88,.92],.9,.6,-9.8,.03,0)}let g=Math.floor((60+90*o)*Math.max(.5,c));for(let v=0;v<g;v++){let m=q()*6.283,p=Math.acos(2*q()-1),y=12+q()*60*o,M=v<5;this.deb.push({p:new P(n+(q()-.5)*8,r+(q()-.5)*20,(q()-.5)*6),v:new P(Math.sin(p)*Math.cos(m)*y*(M?.3:1)+u,Math.abs(Math.cos(p))*y*.9+5,Math.sin(p)*Math.sin(m)*y*(M?.3:1)),s:M?new P(4+q()*3,6+q()*6,1.2+q()):new P(.3+q()*2.2,.2+q()*1.6,.1+q()*.8),q:new Ke().setFromEuler(new ci(q()*6,q()*6,q()*6)),w:new P((q()-.5)*8,(q()-.5)*8,(q()-.5)*8),trail:q()<.3||M,hot:q()<.5?1:0,rest:!1,life:30})}this.debris.count=Math.min(this.deb.length,160),this.wrecks.push({x:n,z:0,y:l,t:0,water:i,life:i?14:60});for(let v=0;v<3;v++)this.pendingBooms.push({t:.35+q()*1.4,x:n+(q()-.5)*30,y:r+(q()-.3)*25,e:.35*o})}smallBoom(t,e,i){let n=this.density,r=Qs(t);this.flash=Math.max(this.flash,.4),this.shake=Math.max(this.shake,.5);for(let a=0;a<80*n;a++){let o=q()*6.283,c=Math.acos(2*q()-1),l=6+q()*22,u=Math.sin(c)*Math.cos(o),f=Math.cos(c),h=Math.sin(c)*Math.sin(o);this.fire.spawn(t,e,0,u*l,f*l,h*l,4+q()*7,8,.8+q()*1.2,[7,3.4,1.2],[1.4,.25,.05],1,1.8,6,.05,r)}for(let a=0;a<40*n;a++)this.smoke.spawn(t+(q()-.5)*8,e,(q()-.5)*8,(q()-.5)*10,4+q()*8,(q()-.5)*10,8+q()*8,5,5+q()*5,[.15,.12,.1],[.07,.07,.07],.8,1,3,.08,r)}update(t,e,i,n,r={}){this.time+=t,this.plumeU.uTime.value=this.time;let a=this.density,o=e?e.wind*.6:0,c=0;if(e&&i&&this.plumes&&e.phase!=="crashed"){let l=e.y,u=Se.smoothstep(l,6e3,4e4),f=e.thr,h=0,d=(16+f*26)*(1+u*1.8);for(let p=0;p<e.eng.length;p++){let y=e.eng[p],x=(y.st===2||y.st===1?y.sp:y.sp*.6)*(.55+.45*f)*(y.st===1?.5+q()*.5:1)*(.93+q()*.07);this.aQ.array[p*4]=x,this.aQ.array[p*4+1]=d*(.85+.15*q())*(y.g==="v"?1.4:1),this.aQ.array[p*4+2]=u,x>.05&&(h+=x)}this.aQ.needsUpdate=!0;{let p=Math.min(1,h/13);this.sheath.visible=p>.02,this.sheathU.uI.value=Math.sqrt(p)*(.85+q()*.15),this.sheathU.uExp.value=u;let y=i.kind==="ship"?3.2:i.V.r*.55+p*1.2;this.sheath.scale.set(y,d*1.35,y)}let g=kn.set(Math.sin(e.th),Math.cos(e.th),0),v=Tl.set(e.bottomX(),e.bottomY(),0).addScaledVector(g,-2.5);c=Math.min(13,h);let m=c/13;if(this.light.position.copy(v).addScaledVector(g,-10),this.light.intensity=c>.05?(9e3+26e3*m)*(.85+q()*.3):0,this.halo.position.copy(v).addScaledVector(g,-3),this.halo.scale.setScalar(14+26*m+u*90),this.halo.material.uniforms.uI.value=c>.05?(.35+.95*Math.sqrt(m))*(.9+q()*.2):0,this.halo.material.uniforms.uCol.value.setRGB(1,.55+u*.1,.25+u*.6),c>.05){let p=-g.y,y=Qs(v.x);if(p<-.3){let M=(v.y-y)/-p,x=d*2.2+25;if(M>0&&M<x){let S=(1-M/x)*Math.min(1,c/3),w=v.x-g.x*M,A=y===Et.mountTop,_=y<1,T=Math.floor(S*14*a*Math.min(t*60,3));for(let R=0;R<T;R++){let I=q()*6.283,D=20+q()*45*S+c*2,k=A?[.92,.93,.95]:_?[.9,.93,.96]:[.62,.56,.47];this.smoke.spawn(w+Math.cos(I)*4,y+1+q()*3,Math.sin(I)*4,Math.cos(I)*D,2+q()*6,Math.sin(I)*D,3+q()*4,7+q()*5,2.5+q()*3,k,k,A?.55:.45,1.2,A?5:1.5,.12,y)}for(let R=0;R<T*.6;R++){let I=q()*6.283,D=25+q()*30;this.fire.spawn(w,y+1.5,0,Math.cos(I)*D,1+q()*3,Math.sin(I)*D,3+q()*3,6,.35+q()*.3,[4,1.8,.6],[1.2,.3,.05],.8*S,3,1,.05,y)}A&&q()<.3&&this.sparks.spawn(w+(q()-.5)*6,y+1,(q()-.5)*6,(q()-.5)*50,10+q()*30,(q()-.5)*50,.5,0,.8+q(),[8,4,1.3],[3,.6,.1],1,.3,-9.8,.02,y)}}l>2e3&&q()<.5*a?this.fire.spawn(v.x-g.x*d,v.y-g.y*d,(q()-.5)*6,e.vx*.3,e.vy*.3,0,8+u*30,20+u*60,.6,[1.5*m,.6*m,.4*m],[.1,.05,.1],.5,.5,0,.1):l<2e3&&q()<.35*a&&this.smoke.spawn(v.x-g.x*d*1.1,v.y-g.y*d*1.1,(q()-.5)*4,e.vx*.2+o,e.vy*.2,0,4,6,2.5,[.7,.7,.72],null,.12,.8,0,.2,Qs(v.x))}this.smoke.uniforms.uPL.value.copy(this.light.position),this.smoke.uniforms.uPLc.value.setRGB(1,.5,.2).multiplyScalar(c>.05?.6+2.2*m:0)}else this.sheath.visible=!1,this.light.intensity=0,this.halo.material.uniforms.uI.value=0,this.smoke.uniforms.uPLc.value.setRGB(0,0,0);if(this.lightLevel=c,e&&e.phase!=="crashed"&&i){let l=Math.min(1.3,e.heat||0),u=Math.hypot(e.vx,e.vy)||1,f=e.vx/u,h=e.vy/u,d=i.kind==="ship"?kn.set(e.x,e.y,0).addScaledVector(Tl.set(f,h,0),4):kn.set(e.bottomX(),e.bottomY(),0).addScaledVector(Tl.set(f,h,0),2);if(this.shockGlow.position.copy(d),this.shockGlow.scale.setScalar(14+l*24),this.shockGlow.material.uniforms.uI.value=l>.15?(l-.15)*2.2:0,this.shockGlow.material.uniforms.uCol.value.setRGB(1,.45,.18),l>.2&&e.phase!=="caught"){let y=Math.floor((l-.2)*10*a*Math.min(3,t*60));for(let M=0;M<y;M++){let x=4.5*(q()-.5)*2;this.fire.spawn(d.x+h*x,d.y-f*x,(q()-.5)*8,e.vx*.55+(q()-.5)*30,e.vy*.55+(q()-.5)*30,(q()-.5)*30,2+q()*4,6+l*8,.3+q()*.5,[3.5*l,1.2*l,.4*l],[.6,.12,.05],.9,.6,0,.05)}}let g=e.mach||0,v=e.y<14e3?Math.max(0,1-Math.abs(g-1)/.14)*Se.smoothstep(14e3-e.y,0,4e3):0;if(this.vapor.visible=v>.01,this.vapor.visible){let y=Tl.set(f,h,0),M=i.V.len,x=9+5*v;this.vapor.position.set(e.x,e.y,0).addScaledVector(y,i.kind==="ship"?2:-i.V.cg+4),this.vapor.quaternion.setFromUnitVectors(new P(0,1,0),y),this.vapor.scale.set(x,M*.9,x),this.vapor.material.uniforms.uA.value=v*.85,this.vapor.material.uniforms.uT.value=this.time}if(e.phase==="coast"&&q()<.3*a){let y=kn.set(e.x+Math.sin(e.th)*(i.V.len-i.V.cg),e.y+Math.cos(e.th)*(i.V.len-i.V.cg),0);this.smoke.spawn(y.x,y.y,3,e.vx+(q()-.5)*6,e.vy+3,4+q()*3,1.5,4,2,[.9,.92,.95],null,.35,.05,0,.1)}if((e.phase==="caught"||e.phase==="done"&&e.caught)&&r.vent!==!1){if(this.ventT+=t,this.ventT>1.2&&this.ventT<14&&q()<.9*a){let y=i.V.len-i.V.cg;for(let M of[1,-1])this.smoke.spawn(e.x+M*3.5,e.y+y-2,1,M*(6+q()*6)+o,2+q()*3,(q()-.5)*3,2,3.2,3.5+q()*2,[.95,.96,.98],null,.5,.6,.6,.1);q()<.4&&this.smoke.spawn(e.x+(q()-.5)*6,e.y-i.V.cg-1,(q()-.5)*6,(q()-.5)*3+o,-3-q()*2,(q()-.5)*3,2,2.4,4,[.88,.9,.93],null,.35,.4,-.5,.1,30)}}else this.ventT=0;let m=e.phase==="caught"||e.phase==="done"&&e.caught,p=e.y-i.V.cg<Et.mountTop+90&&Math.abs(e.x)<45&&c>.05;if(i.kind==="booster"&&(p||m&&this.ventT<6)){let y=m?Math.max(0,1-this.ventT/6):1,M=Math.floor(7*a*y*Math.min(3,t*60)+q());for(let x=0;x<M;x++){let S=q()*6.283,w=7+q()*8,A=16+q()*26;this.smoke.spawn(Math.cos(S)*w,Et.mountTop+.5,Math.sin(S)*w,Math.cos(S)*(2+q()*4)+o,A,Math.sin(S)*(2+q()*4),1.2+q(),3.5+q()*2,1.6+q()*1.2,[.93,.95,.98],[.85,.87,.9],.32,.25,-7,.12,Et.mountTop),q()<.5&&this.sparks.spawn(Math.cos(S)*w,Et.mountTop+.5,Math.sin(S)*w,Math.cos(S)*5,A*1.1,Math.sin(S)*5,.18,0,1+q()*.6,[.5,.55,.6],[.2,.22,.25],.8,.1,-9.8,.05,1.6)}}}else this.shockGlow.material.uniforms.uI.value=0,this.vapor.visible=!1;if(this.fireball.visible){this.fbT+=t;let l=this.fbT,u=this.fbE;this.fireball.scale.setScalar((12+l*110*u)*(1-Math.exp(-l*6))+4),this.fireball.position.y+=t*6,this.fireball.material.uniforms.uA.value=Math.max(0,1-l/.9),this.fireball.material.uniforms.uT.value=l,l>.9&&(this.fireball.visible=!1)}if(this.shockSphere.visible){this.ssT+=t;let l=10+this.ssT*340;this.shockSphere.scale.setScalar(l),this.shockSphere.material.uniforms.uA.value=Math.max(0,.6*(1-this.ssT/.6)),this.ssT>.6&&(this.shockSphere.visible=!1)}if(this.ring.visible){this.ringT+=t;let l=6+this.ringT*210;this.ring.scale.setScalar(l),this.ring.material.opacity=Math.max(0,.7*(1-this.ringT/1.3)),this.ringT>1.3&&(this.ring.visible=!1)}this.boomT>=0&&(this.boomT+=t,this.boomLight.intensity=3e5*Math.exp(-this.boomT*3.2)+(this.boomT<6?12e3*(.7+q()*.3)*Math.exp(-this.boomT*.3):0));for(let l=this.pendingBooms.length-1;l>=0;l--){let u=this.pendingBooms[l];u.t-=t,u.t<=0&&(this.smallBoom(u.x,u.y,u.e),this.pendingBooms.splice(l,1),r.onBoom&&r.onBoom(.5))}if(this.deb.length){let l=new ne,u=new Ke,f=new ci,h=0;for(let d of this.deb){if(!d.rest){d.v.y-=9.81*t,d.v.multiplyScalar(Math.exp(-.08*t*(1+d.v.length()*.01))),d.p.addScaledVector(d.v,t),f.set(d.w.x*t,d.w.y*t,d.w.z*t),u.setFromEuler(f),d.q.multiply(u);let g=Qs(d.p.x)+d.s.y*.3;d.p.y<g&&(d.p.y=g,Math.abs(d.v.y)>4?(d.v.y*=-.3,d.v.x*=.5,d.v.z*=.5,d.w.multiplyScalar(.5),g<1&&(d.rest=!0)):d.rest=!0),d.trail&&q()<.6*a&&(d.hot&&this.fire.spawn(d.p.x,d.p.y,d.p.z,0,0,0,1.5+q()*2,3,.4,[5,2.2,.7],[1,.2,.05],.8,1,2,.05),this.smoke.spawn(d.p.x,d.p.y,d.p.z,o,1,0,1.6+q(),3,2.5+q()*2,[.16,.14,.13],[.1,.1,.1],.55,.7,1.5,.1))}if(!(d.p.y<-2)&&h<160){l.compose(d.p,d.q,d.s),this.debris.setMatrixAt(h,l);let g=d.hot?.25:1;this.debris.instanceColor.setXYZ(h,g+(1-g)*.5,g*.95+.1,g),h++}}this.debris.count=h,this.debris.instanceMatrix.needsUpdate=!0,this.debris.instanceColor.needsUpdate=!0}for(let l of this.wrecks){if(l.t+=t,l.t>l.life)continue;let u=Math.max(0,1-l.t/l.life);!l.water&&q()<.8*a*u&&this.fire.spawn(l.x+(q()-.5)*16,l.y+1,(q()-.5)*12,o*.3,4+q()*6,0,3+q()*5,4,.8+q(),[5,2.2,.7],[1.2,.2,.04],.9,1,3,.1),q()<.6*a*u&&this.smoke.spawn(l.x+(q()-.5)*14,l.y+6,(q()-.5)*10,o,6+q()*6,0,6+q()*4,5,9+q()*6,l.water?[.85,.87,.9]:[.13,.11,.1],l.water?[.75,.77,.8]:[.08,.08,.08],l.water?.4:.7,.5,2,.1)}this.smoke.update(t,o),this.fire.update(t,o*.5),this.sparks.update(t,0),this.flash=Math.max(0,this.flash-t*2.2),this.shake=Math.max(0,this.shake-t*.7),this.haze=Math.max(0,this.haze-t*.4)}};var Al="varying vec2 vUv; void main(){ vUv = position.xy * 0.5 + 0.5; gl_Position = vec4(position.xy, 0.0, 1.0); }",kx=`
uniform sampler2D tSrc; uniform vec2 uTexel; uniform float uThreshold; varying vec2 vUv;
void main(){
  vec3 c = texture2D(tSrc, vUv + uTexel * vec2(-1.0,-1.0)).rgb + texture2D(tSrc, vUv + uTexel * vec2(1.0,-1.0)).rgb
         + texture2D(tSrc, vUv + uTexel * vec2(-1.0,1.0)).rgb + texture2D(tSrc, vUv + uTexel * vec2(1.0,1.0)).rgb;
  c *= 0.25;
  float b = max(c.r, max(c.g, c.b));
  float k = smoothstep(uThreshold, uThreshold + 0.6, b);
  gl_FragColor = vec4(min(c * k, vec3(24.0)), 1.0);
}`,zx=`
uniform sampler2D tSrc; uniform vec2 uDir; varying vec2 vUv;
void main(){
  vec3 c = texture2D(tSrc, vUv).rgb * 0.2270270270;
  vec2 o1 = uDir * 1.3846153846, o2 = uDir * 3.2307692308;
  c += (texture2D(tSrc, vUv + o1).rgb + texture2D(tSrc, vUv - o1).rgb) * 0.3162162162;
  c += (texture2D(tSrc, vUv + o2).rgb + texture2D(tSrc, vUv - o2).rgb) * 0.0702702703;
  gl_FragColor = vec4(c, 1.0);
}`,Hx=`uniform sampler2D tSrc; uniform vec2 uTexel; varying vec2 vUv;
void main(){ vec3 c = texture2D(tSrc, vUv + uTexel*vec2(-0.5,-0.5)).rgb + texture2D(tSrc, vUv + uTexel*vec2(0.5,-0.5)).rgb + texture2D(tSrc, vUv + uTexel*vec2(-0.5,0.5)).rgb + texture2D(tSrc, vUv + uTexel*vec2(0.5,0.5)).rgb; gl_FragColor = vec4(c*0.25,1.0); }`,Vx=`
uniform sampler2D tScene, tB1, tB2, tB3;
uniform float uBloom, uChroma, uVig, uTime, uGrain, uExposure, uFlashA, uSlow, uLevels, uRadial, uAspect, uSat;
uniform vec3 uFlash, uTint, uLift, uGam, uGain; uniform float uCon, uFlare; uniform vec2 uRes; uniform vec4 uHaze; uniform float uHazeA, uBars, uShock; uniform vec2 uShockP; uniform sampler2D tNoise;
varying vec2 vUv;
vec3 aces(vec3 x){ const float a=2.51; const float b=0.03; const float c=2.43; const float d=0.59; const float e=0.14; return clamp((x*(a*x+b))/(x*(c*x+d)+e),0.0,1.0); }
float hash(vec2 p){ p = fract(p*vec2(123.34, 456.21)); p += dot(p, p+45.32); return fract(p.x*p.y); }
void main(){
  vec2 uv = vUv; vec2 d = uv - 0.5;
  // Hitzeflimmern unter den Triebwerken (elliptische Zone, Bildschirmraum)
  if (uHazeA > 0.001) {
    vec2 hp = (uv - uHaze.xy) / max(uHaze.zw, vec2(0.001)); float hk = exp(-dot(hp, hp) * 1.2) * uHazeA;
    vec2 n = texture2D(tNoise, uv * vec2(3.0, 1.6) + vec2(0.0, -uTime * 0.9)).rg - 0.5;
    uv += n * hk * 0.012;
  }
  if (uShock > 0.001) { vec2 sd = uv - uShockP; float r = length(sd * vec2(uAspect, 1.0)); float w = exp(-pow((r - (1.0 - uShock) * 0.9) * 18.0, 2.0)); uv += normalize(sd + 1e-5) * w * uShock * 0.025; }
  vec3 col;
  if (uChroma > 0.0001) {
    vec2 off = d * uChroma;
    col.r = texture2D(tScene, uv + off).r; col.g = texture2D(tScene, uv).g; col.b = texture2D(tScene, uv - off).b;
  } else col = texture2D(tScene, uv).rgb;
  #ifdef RADIAL
  if (uRadial > 0.001) {
    vec3 acc = col; vec2 dir = d * uRadial * 0.06;
    for (int i = 1; i < 6; i++) acc += texture2D(tScene, uv - dir * float(i)).rgb;
    col = mix(col, acc / 6.0, smoothstep(0.08, 0.45, length(d)));
  }
  #endif
  vec3 bl = vec3(0.0);
  if (uLevels > 0.5) bl += texture2D(tB1, uv).rgb * 1.0;
  if (uLevels > 1.5) bl += texture2D(tB2, uv).rgb * 1.1;
  if (uLevels > 2.5) bl += texture2D(tB3, uv).rgb * 1.3;
  col += bl * uBloom;
  // Lens-Flare: Geister + Halo aus der gespiegelten Bloom-Stufe (verdeckt sich selbst korrekt)
  if (uFlare > 0.001 && uLevels > 1.5) {
    vec2 g = 1.0 - vUv; vec2 gd = vec2(0.5) - g; vec3 fl = vec3(0.0);
    for (int i = 1; i < 5; i++) { vec2 o = g + gd * float(i) * 0.38; float w = pow(max(0.0, 1.0 - length(vec2(0.5) - o) / 0.7071), 5.0);
      fl += texture2D(tB2, o).rgb * w * vec3(0.9 - float(i) * 0.12, 0.8, 0.6 + float(i) * 0.12); }
    vec2 hv = g + normalize(gd + 1e-5) * 0.4; float hw = pow(max(0.0, 1.0 - length(vec2(0.5) - hv) / 0.7071), 4.0);
    fl += texture2D(tB2, hv).rgb * hw * vec3(0.55, 0.7, 1.0) * 0.5;
    col += fl * uFlare;
  }
  col *= uExposure;
  col = aces(col);
  float l = dot(col, vec3(0.299,0.587,0.114));
  col = mix(vec3(l), col, uSat);
  col = mix(col, col * uTint, uSlow);
  vec2 vd = d * vec2(uAspect, 1.0);
  float v = smoothstep(0.95, 0.25, length(vd) * 1.15);
  col *= mix(1.0, v, uVig);
  col = mix(col, uFlash, uFlashA);
  col = pow(max(col, 0.0), vec3(1.0/2.2));
  // Color-Grading (je Tageszeit): Kontrast, Lift/Gamma/Gain
  col = clamp((col - 0.5) * uCon + 0.5, 0.0, 1.0);
  col = col * uGain + uLift * (1.0 - col);
  col = pow(max(col, 0.0), uGam);
  if (uBars > 0.001) { float b = uBars * 0.11; col *= step(b, vUv.y) * step(vUv.y, 1.0 - b); }
  col += (hash(uv * uRes + fract(uTime) * 100.0) - 0.5) * uGrain;
  gl_FragColor = vec4(col, 1.0);
}`,Rl=class{constructor(t){this.r=t;let e=t.getContext(),i=t.extensions;this.hdr=!!(i.has("EXT_color_buffer_half_float")||i.has("EXT_color_buffer_float")),this.type=this.hdr?gi:ni,this.levels=3,this.samples=4,this.radial=!0,this.scene=new hn,this.cam=new Cn(-1,1,1,-1,0,1);let n=new xe;n.setAttribute("position",new Qt([-1,-1,0,3,-1,0,-1,3,0],3)),this.quad=new dt(n,null),this.quad.frustumCulled=!1,this.scene.add(this.quad),this.mBright=new se({vertexShader:Al,fragmentShader:kx,depthTest:!1,depthWrite:!1,uniforms:{tSrc:{value:null},uTexel:{value:new at},uThreshold:{value:this.hdr?1:.72}}}),this.mBlur=new se({vertexShader:Al,fragmentShader:zx,depthTest:!1,depthWrite:!1,uniforms:{tSrc:{value:null},uDir:{value:new at}}}),this.mCopy=new se({vertexShader:Al,fragmentShader:Hx,depthTest:!1,depthWrite:!1,uniforms:{tSrc:{value:null},uTexel:{value:new at}}}),this.u={tScene:{value:null},tB1:{value:null},tB2:{value:null},tB3:{value:null},uBloom:{value:.9},uChroma:{value:0},uVig:{value:.75},uTime:{value:0},uGrain:{value:.025},uExposure:{value:1},uFlashA:{value:0},uFlash:{value:new ht(1,1,1)},uSlow:{value:0},uTint:{value:new ht(1,.92,.8)},uLevels:{value:3},uRadial:{value:0},uAspect:{value:1},uRes:{value:new at(1,1)},uSat:{value:1},uLift:{value:new P(0,0,0)},uGam:{value:new P(1,1,1)},uGain:{value:new P(1,1,1)},uCon:{value:1},uFlare:{value:0},uHaze:{value:new ge(.5,.3,.1,.1)},uHazeA:{value:0},uBars:{value:0},uShock:{value:0},uShockP:{value:new at(.5,.5)},tNoise:{value:null}},this.mComp=new se({vertexShader:Al,fragmentShader:Vx,depthTest:!1,depthWrite:!1,uniforms:this.u,defines:{RADIAL:1}}),this.rtScene=null,this.rtA=[],this.rtB=[],this.w=1,this.h=1}configure({levels:t,samples:e,radial:i}){let n=t!==this.levels||e!==this.samples||i!==this.radial;this.levels=t,this.samples=e,i!==this.radial&&(this.radial=i,i?this.mComp.defines.RADIAL=1:delete this.mComp.defines.RADIAL,this.mComp.needsUpdate=!0),n&&this._alloc()}setSize(t,e){this.w=Math.max(1,Math.floor(t)),this.h=Math.max(1,Math.floor(e)),this._alloc()}_alloc(){let{w:t,h:e}=this;this.rtScene&&this.rtScene.dispose(),this.rtA.forEach(r=>r.dispose()),this.rtB.forEach(r=>r.dispose()),this.rtScene=new $e(t,e,{type:this.type,samples:this.samples,depthBuffer:!0,stencilBuffer:!1,minFilter:Pe,magFilter:Pe}),this.rtA=[],this.rtB=[];let i=t,n=e;for(let r=0;r<3;r++){i=Math.max(1,Math.floor(i/(r===0?4:2))),n=Math.max(1,Math.floor(n/(r===0?4:2)));let a={type:this.type,depthBuffer:!1,minFilter:Pe,magFilter:Pe};this.rtA.push(new $e(i,n,a)),this.rtB.push(new $e(i,n,a))}this.u.uRes.value.set(t,e),this.u.uAspect.value=t/e}_pass(t,e){this.quad.material=t,this.r.setRenderTarget(e),this.r.render(this.scene,this.cam)}render(t,e,i){let n=this.r;n.setRenderTarget(this.rtScene),n.render(t,e);let r=this.levels;if(r>0){this.mBright.uniforms.tSrc.value=this.rtScene.texture,this.mBright.uniforms.uTexel.value.set(1/this.w,1/this.h),this._pass(this.mBright,this.rtA[0]);for(let a=0;a<r;a++){let o=this.rtA[a],c=this.rtB[a];a>0&&(this.mCopy.uniforms.tSrc.value=this.rtA[a-1].texture,this.mCopy.uniforms.uTexel.value.set(1/this.rtA[a-1].width,1/this.rtA[a-1].height),this._pass(this.mCopy,o)),this.mBlur.uniforms.tSrc.value=o.texture,this.mBlur.uniforms.uDir.value.set(1/o.width,0),this._pass(this.mBlur,c),this.mBlur.uniforms.tSrc.value=c.texture,this.mBlur.uniforms.uDir.value.set(0,1/o.height),this._pass(this.mBlur,o)}}this.u.tScene.value=this.rtScene.texture,this.u.tB1.value=this.rtA[0].texture,this.u.tB2.value=this.rtA[1].texture,this.u.tB3.value=this.rtA[2].texture,this.u.uLevels.value=r,this.u.uTime.value=i,this._pass(this.mComp,null)}},Eh={day:{lift:[0,.004,.012],gam:[1,1,.99],gain:[1.02,1,.97],con:1.06,flare:.08},afternoon:{lift:[.01,.006,0],gam:[.98,1,1.03],gain:[1.05,1,.92],con:1.07,flare:.1},dusk:{lift:[.02,.008,.03],gam:[.97,1,1],gain:[1.06,.97,.9],con:1.08,flare:.14},night:{lift:[0,.008,.022],gam:[1.03,1,.97],gain:[.96,1,1.06],con:1.1,flare:.12},dawn:{lift:[.025,.02,.02],gam:[.98,.99,1],gain:[1.03,1,.95],con:1,flare:.08},storm:{lift:[0,.01,.015],gam:[1.03,1,.98],gain:[.96,.99,1.02],con:1.12,flare:.03}};var Ce=(s,t,e)=>new P(s,t,e),Hb=Ce(0,Et.armH,0),Gx=(s,t,e,i)=>s+(t-s)*(1-Math.exp(-e*i)),na=(s,t,e,i)=>s.lerp(t,1-Math.exp(-e*i)),Cl=class{constructor(t){this.cam=t,this.mode="auto",this.shot="chase",this.shotT=0,this.lastShot="",this.off=Ce(30,20,140),this.look=Ce(0,60,0),this.pos=Ce(0,60,200),this.fov=60,this.inputSign=1,this.t=0,this.orbit=0,this.cutFlag=!1,this.shake=0,this.aspect=.46,this.beachIdx=0,this.ground=Ce(-34,2.2,42),this.armCam=Ce(Et.pivotX+1,Et.armH+1.5,Et.pivotZ+30)}setMode(t){this.mode=t,this.cut()}cut(){this.cutFlag=!0,this.shotT=0}direct(t,e,i){let n=t.y,r=t.bottomY(),a="chase";return i.title?"title":i.attract&&t.phase!=="crashed"&&t.phase!=="caught"&&t.phase!=="done"?n>2600?"beach":r>Et.armH+260?"sideup":"final":t.phase==="crashed"?this.shot==="crashwide"||this.shot==="chase"?this.shotT>2.2?"crashwide":this.shot:"crashwide":t.phase==="caught"||t.phase==="done"?this.shotT>3.5&&this.shot==="catchwide"||this.shot==="orbit"?"orbit":"catchwide":(t.phase==="sep"||t.phase==="boost"?a="chase":t.phase==="coast"?a=this.shotT>7&&this.shot==="chase"||this.shot==="drone"&&this.shotT<6?"drone":"chase":n>3500?a="chase":n>1400?a=this.shot==="beach"&&this.shotT<4.5?"beach":this.shot==="beach"?"chase":this.lastShot!=="beach"&&this.shot==="chase"&&this.shotT>2.5?"beach":"chase":r>Et.armH+120?a=this.shot==="sideup"&&this.shotT<4.5||this.shot==="chase"&&this.shotT>3&&this.lastShot!=="sideup"?"sideup":"final":a="final",a)}update(t,e,i={}){this.t+=t,this.shotT+=t;let n=this.cam,r=this.mode,a=r==="auto"?this.direct(e,t,i):r;i.title&&(a="title"),i.replay&&(a=i.replayShot||"chase"),a!==this.shot&&(this.lastShot=this.shot,this.shot=a,this.shotT=0,this.cutFlag=!0);let o=this.cutFlag;this.cutFlag=!1;let c=Ce(e.x,e.y,0),l=Ce(e.vx,e.vy,0),u=l.length(),f=Ce(),h=Ce(),d=60,g=x=>x/Math.min(1,Math.max(.4,this.aspect*1.6)),v=e.V.len,m=Ce(e.x+Math.sin(e.th)*(v*.5-e.V.cg),e.y+Math.cos(e.th)*(v*.5-e.V.cg),0);switch(a){case"title":{this.orbit+=t*.06;let x=120+Math.sin(this.t*.07)*25,S=this.orbit+.4;f.set(Math.sin(S)*x,40+Math.sin(this.t*.11)*25+30,Math.cos(S)*x),h.set(0,92+Math.sin(this.t*.09)*10,-8),d=g(48);break}case"chase":{let S=e.y>2500?150+Math.min(120,u*.12):120;e.ship&&(S*=1.1);let w=u>1?l.clone().divideScalar(u):Ce(0,-1,0),A=Ce(w.x*-S*.35+18,w.y*-S*.35+10,S);(e.phase==="sep"||e.phase==="boost")&&A.set(-60,30,S*.9),o?this.off.copy(A):na(this.off,A,1.5,t),f.copy(c).add(this.off),h.copy(m),d=g(52);break}case"drone":{this.orbit+=t*.18;let x=95,S=Ce(Math.sin(this.orbit)*x,25+Math.sin(this.t*.3)*15,Math.cos(this.orbit)*x);o?this.off.copy(S):na(this.off,S,2,t),f.copy(c).add(this.off),h.copy(m),d=g(55);break}case"final":{let x=Math.max(0,e.bottomY()-Et.armH),S=Se.clamp(1-x/900,0,1),w=Se.lerp(120,150,S)+Math.min(260,x*.25),A=Ce(e.x*.55+46,Se.lerp(e.y-10,Et.armH*.55,S*.6),w);A.y=Math.max(A.y,12),o?this.pos.copy(A):na(this.pos,A,1.6,t),f.copy(this.pos);let _=m.clone().lerp(Ce(0,Et.armH-10,-10),S*.45);o?this.look.copy(_):na(this.look,_,3,t),h.copy(this.look);let T=f.distanceTo(h),R=Math.max(90,Math.abs(m.y-Et.armH)*1.1+90+Math.abs(e.x)*.8);d=Se.clamp(2*Math.atan(R/2/T)*180/Math.PI,30,70),d=g(d*.85);break}case"tower":{f.set(-8,Et.height+6,Et.cz+12),h.copy(m);let x=f.distanceTo(h),S=v*2.6+40;d=Se.clamp(2*Math.atan(S/2/x)*180/Math.PI,3,75);break}case"sideup":{f.set(-170,7,300),h.copy(m).addScaledVector(Ce(0,-1,0),v*.25);let x=f.distanceTo(m),S=v*3.4;d=Se.clamp(2*Math.atan(S/2/x)*180/Math.PI,6,55),d=g(d);break}case"beach":{f.set(690,1.8,2200),h.copy(m);let x=f.distanceTo(h),S=Math.max(v*2.2,60)+(e.y<800?e.y*.6:0);d=Se.clamp(2*Math.atan(S/2/x)*180/Math.PI,1,40),d=g(d);break}case"arm":{f.copy(this.armCam),h.copy(m);let x=f.distanceTo(h);d=Se.clamp(2*Math.atan((v*1.4+30)/2/x)*180/Math.PI,8,80);break}case"ground":{f.copy(this.ground),h.copy(m);let x=f.distanceTo(h);d=Se.clamp(2*Math.atan((v*1.5+40)/2/x)*180/Math.PI,4,80);break}case"onboard":{let x=Ce(Math.sin(e.th),Math.cos(e.th),0),S=Ce(Math.cos(e.th),-Math.sin(e.th),0);f.copy(c).addScaledVector(x,v-e.V.cg-8).addScaledVector(S,e.V.r+1.6).add(Ce(0,0,1.2)),h.copy(f).addScaledVector(x,-60).addScaledVector(S,2.5),d=g(78);break}case"catchwide":{let x=Ce(70,70,120);f.copy(x),h.set(0,Et.armH-22,-10),d=g(50);break}case"orbit":{this.orbit+=t*.12;let x=105;f.set(Math.sin(this.orbit+.6)*x,72+Math.sin(this.t*.2)*15,Math.cos(this.orbit+.6)*x),h.set(0,Et.armH-25,-12),d=g(52);break}case"crashwide":{let x=e.crash||{x:e.x,y:e.y},S=Ce(x.x+210,Math.max(32,Math.min(x.y,300)*.5+34),380);o?this.pos.copy(S):na(this.pos,S,.8,t),f.copy(this.pos),h.set(x.x,Math.max(45,Math.min(x.y,260)*.6+35),0),d=g(50);break}case"replay-arm":{f.set(Et.pivotX+3,Et.armH-6,22),h.copy(m),d=60;break}case"replay-low":{f.set(28,6,60),h.copy(m),h.y-=6,d=g(46);break}case"replay-orbit":{this.orbit+=t*.25;let x=70;f.set(e.x+Math.sin(this.orbit)*x,e.y-8,Math.cos(this.orbit)*x),h.copy(m),d=g(56);break}default:f.copy(c).add(Ce(30,20,150)),h.copy(c)}f.y=Math.max(f.y,f.x>720?.8:2);let p=this.shake*1;if(p>.001){let x=p*(.25+f.distanceTo(h)*.004);f.x+=(Math.random()-.5)*x,f.y+=(Math.random()-.5)*x,h.x+=(Math.random()-.5)*x*.6,h.y+=(Math.random()-.5)*x*.6}n.position.copy(f),n.up.set(0,1,0),n.lookAt(h),o?this.fov=d:this.fov=Gx(this.fov,d,3,t),n.fov=this.fov;let y=f.distanceTo(h);n.near=Se.clamp(y*.012,.25,40),n.far=42e4,n.updateProjectionMatrix();let M=Ce(1,0,0).applyQuaternion(n.quaternion);return this.inputSign=M.x>=-.05?1:-1,a}};var Wx=["t","x","y","vx","vy","th","thr","T","finAct","heat","mach","q","wind","aphi","ay","fuel"],zn=Wx.length,Zd=["sep","boost","coast","entry","land","caught","done","crashed"],Jd=["off","big","small"],Il=class{constructor(t=900){this.cap=t,this.reset(null)}reset(t){this.n=0,this.head=0,this.last=-1,this.ne=t?t.eng.length:33,this.f=new Float32Array(this.cap*zn),this.e=new Uint8Array(this.cap*this.ne*2),this.p=new Uint8Array(this.cap*2),this.eventT=null,this.sim=t}record(t){if(t.t-this.last<1/30-1e-6)return;this.last=t.t;let e=this.head,i=e*zn,n=this.f;n[i]=t.t,n[i+1]=t.x,n[i+2]=t.y,n[i+3]=t.vx,n[i+4]=t.vy,n[i+5]=t.th,n[i+6]=t.thr,n[i+7]=t.T,n[i+8]=t.finAct,n[i+9]=t.heat,n[i+10]=t.mach,n[i+11]=t.q,n[i+12]=t.wind,n[i+13]=t.arms.phi,n[i+14]=t.arms.y,n[i+15]=t.fuel;let r=e*this.ne*2;for(let a=0;a<this.ne;a++){let o=t.eng[a];this.e[r+a*2]=o.st,this.e[r+a*2+1]=Math.round(o.sp*255)}this.p[e*2]=Math.max(0,Zd.indexOf(t.phase)),this.p[e*2+1]=Math.max(0,Jd.indexOf(t.mode)),this.head=(this.head+1)%this.cap,this.n=Math.min(this.cap,this.n+1)}idx(t){return(this.head-this.n+t+this.cap)%this.cap}get t0(){return this.n?this.f[this.idx(0)*zn]:0}get t1(){return this.n?this.f[this.idx(this.n-1)*zn]:0}},Pl=class{constructor(t,e){this.rec=t,this.src=e,this.V=e.V,this.ship=e.ship,this.T0=e.T0,this.eng=e.eng.map(i=>({i:i.i,x:i.x,z:i.z,g:i.g,st:0,sp:0})),this.arms={phi:Si,tgt:Si,y:Et.armH,vy:0,p:0,reopenAt:-1},this.crash=null,this.caught=e.caught,this.events=[],this.j=0,this.reserve=e.reserve,this.fuel0=e.fuel0,this.landUnlocked=!0,this.timeScale=1,this.om=0,this.seek(t.t0)}seek(t){let e=this.rec,i=this.j;for((i>=e.n-1||e.f[e.idx(i)*zn]>t)&&(i=0);i<e.n-2&&e.f[e.idx(i+1)*zn]<=t;)i++;this.j=i;let n=e.idx(i)*zn,r=e.idx(Math.min(e.n-1,i+1))*zn,a=e.f[n],o=e.f[r],c=o>a?Math.max(0,Math.min(1,(t-a)/(o-a))):0,l=h=>e.f[n+h]+(e.f[r+h]-e.f[n+h])*c;this.t=t,this.x=l(1),this.y=l(2),this.vx=l(3),this.vy=l(4),this.th=l(5),this.thr=l(6),this.T=l(7),this.finAct=l(8),this.heat=l(9),this.mach=l(10),this.q=l(11),this.wind=l(12),this.arms.phi=l(13),this.arms.y=l(14),this.fuel=l(15),this.arms.p=(Si-this.arms.phi)/(Si-Fi);let u=e.idx(c<.5?i:Math.min(e.n-1,i+1)),f=u*e.ne*2;for(let h=0;h<this.eng.length;h++)this.eng[h].st=e.e[f+h*2],this.eng[h].sp=e.e[f+h*2+1]/255;this.phase=Zd[e.p[u*2]],this.mode=Jd[e.p[u*2+1]],this.phase==="crashed"&&this.src.crash?this.crash=this.src.crash:this.phase!=="crashed"&&(this.crash=null)}bottomY(){return this.y-this.V.cg*Math.cos(this.th)}bottomX(){return this.x-this.V.cg*Math.sin(this.th)}pinY(){return this.y+(this.V.pin-this.V.cg)*Math.cos(this.th)}speed(){return Math.hypot(this.vx,this.vy)}};var Ll="chopstix.save";function tr(){return{v:2,created:Date.now(),missions:{},stats:{catches:0,crashes:0,explosions:0,flights:0,perfect:0,streak:0,bestStreak:0,playTime:0,fuelSaved:0},ach:{},sel:{livery:"steel",variant:"b1",camera:"auto"},settings:{quality:"auto",autoFps:!0,music:.6,sfx:.9,voice:!1,muted:!1,control:"stick",sens:1,assist:"normal",autoClose:!0,autoCam:!0,haptics:!0,shake:!0,units:"metric"},tutorialDone:!1,seen:{}}}var Xx={1:s=>{let t=tr(),e=s.stars||{};for(let i of Object.keys(e)){let n=parseInt(i,10);n&&(t.missions[n]={stars:Math.max(0,Math.min(3,e[i]|0)),grade:null,best:(s.best&&s.best[i])|0,time:null,done:(e[i]|0)>0,attempts:0,catches:(e[i]|0)>0?1:0})}return s.sound===!1&&(t.settings.muted=!0),s.livery&&(t.sel.livery=s.livery),t.stats.catches=s.catches|0,t.tutorialDone=!!s.tutorialDone||Object.keys(e).length>0,t.created=s.created||Date.now(),t}};function jd(s,t){if(t===null||typeof t!="object"||Array.isArray(t))return t===void 0?s:t;let e={...s};for(let i of Object.keys(t)){let n=s?s[i]:void 0;n&&typeof n=="object"&&!Array.isArray(n)&&t[i]&&typeof t[i]=="object"&&!Array.isArray(t[i])?e[i]=jd(n,t[i]):t[i]!==void 0&&(e[i]=t[i])}return e}function Qd(){let s=null;try{s=localStorage.getItem(Ll)}catch{}if(!s)try{s=localStorage.getItem("chopstix")}catch{}if(!s)return tr();let t;try{t=JSON.parse(s)}catch{try{localStorage.setItem(Ll+".corrupt",s)}catch{}return tr()}let e=t.v||t.version||1;if(e<2){try{localStorage.setItem(Ll+".bak.v"+e,s)}catch{}for(;e<2;){let n=Xx[e];if(!n)break;t=n(t),e=t.v=e+1}}let i=jd(tr(),t);return e<=2&&(i.v=2),i}var Kd=0;function Oi(s){try{return localStorage.setItem(Ll,JSON.stringify(s)),!0}catch{return!1}}function tn(s){clearTimeout(Kd),Kd=setTimeout(()=>Oi(s),200)}function Hn(s){let t=0;for(let e of Object.keys(s.missions))t+=s.missions[e].stars|0;return t}var tf=[{pr:2,samples:4,levels:3,radial:!0,shadow:2048},{pr:1.6,samples:0,levels:3,radial:!0,shadow:2048},{pr:1.35,samples:0,levels:2,radial:!1,shadow:1024},{pr:1.1,samples:0,levels:2,radial:!1,shadow:1024},{pr:.85,samples:0,levels:1,radial:!1,shadow:0}],qx=["Perfekt","Gut","Hart","Fehlgeschlagen"],Yx={auto:"Regie",chase:"Verfolger",drone:"Drohne",tower:"Turm-Kamera",beach:"Strand",arm:"Arm-Kamera",ground:"Bodenkamera",onboard:"Bordkamera"},Dl=/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)||navigator.maxTouchPoints>1&&/Macintosh/.test(navigator.userAgent),Ah=class extends Fn{control(t,e){super.control(t,e),(t.phase==="land"||t.phase==="entry")&&t.bottomY()<700&&(t.input.thr=0,t.input.aCmd=0)}},Nl=class{constructor(t,e){this.app=e,this.canvas=t,this.save=e.save,this.test=!!e.test;let i=this.save.settings.quality;this.qName=i==="auto"?Dl?"med":"high":i,this.test&&(this.qName=e.testQuality||"med");let n=new hl({canvas:t,antialias:!1,alpha:!1,stencil:!1,depth:!0,powerPreference:"high-performance",preserveDrawingBuffer:this.test});n.outputColorSpace=Zn,n.toneMapping=mi,n.setClearColor(0,1),n.shadowMap.enabled=this.qName!=="low",n.shadowMap.type=es,this.renderer=n,this.scene=new hn,this.camera=new qe(55,.46,.5,42e4),this.world=new _l(n,this.scene,{quality:this.qName}),this.site=new Sl(this.scene,{quality:this.qName}),this.fx=new El(this.scene,this.world,{quality:this.qName}),this.post=new Rl(n),this.post.u.tNoise.value=Bn(),this.rig=new Cl(this.camera),this.rec=new Il(900),this.buildGuides(),this.quality={tier:i==="high"?0:i==="med"?2:i==="low"?4:Dl?1:0,auto:i==="auto"&&this.save.settings.autoFps!==!1,acc:0,n:0,cool:3,good:0,downs:0},this.test&&(this.quality.tier=3,this.quality.auto=!1),this.fps=60,this.frameTimes=[],this.time=0,this.state="title",this.paused=!1,this.banner(null),this.sim=null,this.vehicle=null,this.g={},this.extScale=1,this.manual=!1,this.camMode=this.save.sel.camera||"auto",this.tmp=new P,this.tmp2=new P,this.lastFin=0,this.predT=0,this.endT=0,this.attract(!0),this.warm()}warm(){let t=[];this.scene.traverse(e=>{e.visible||(t.push(e),e.visible=!0)});try{this.renderer.compile(this.scene,this.camera)}catch{}for(let e of t)e.visible=!1}buildGuides(){this.pathN=90,this.pathPts=new Float32Array(270);let e=new xe;e.setAttribute("position",new ke(new Float32Array(270),3)),e.setAttribute("aI",new ke(new Float32Array(90).map((r,a)=>a/90),1)),this.pathMat=new se({transparent:!0,depthWrite:!1,depthTest:!0,blending:Fe,uniforms:{uCol:{value:new ht(.35,.85,1.4)},uPx:{value:7},uA:{value:1}},vertexShader:"attribute float aI; uniform float uPx; varying float vA; void main(){ vec4 mv = modelViewMatrix * vec4(position,1.0); gl_Position = projectionMatrix * mv; gl_PointSize = uPx * (1.0 - aI * 0.5); vA = 1.0 - aI; }",fragmentShader:"uniform vec3 uCol; uniform float uA; varying float vA; void main(){ vec2 d = gl_PointCoord - 0.5; float r = dot(d,d); if (r > 0.25) discard; gl_FragColor = vec4(uCol * smoothstep(0.25, 0.05, r) * vA * uA, 1.0); }"}),this.path=new Kn(e,this.pathMat),this.path.frustumCulled=!1,this.path.renderOrder=9,this.path.visible=!1,this.scene.add(this.path);let i=new Di(3.2,4.2,40);this.markMat=new Xi({color:new ht(.4,1.2,1.6),transparent:!0,opacity:.9,blending:Fe,depthWrite:!1,side:De}),this.mark=new dt(i,this.markMat),this.mark.rotation.x=-Math.PI/2,this.mark.visible=!1,this.mark.renderOrder=9,this.scene.add(this.mark);let n=new Le(9.2,2.2);this.gateMat=new Xi({color:new ht(.2,1.4,.6),transparent:!0,opacity:0,blending:Fe,depthWrite:!1,side:De,map:(()=>{let r=document.createElement("canvas");r.width=128,r.height=32;let a=r.getContext("2d"),o=a.createLinearGradient(0,0,0,32);return o.addColorStop(0,"rgba(255,255,255,0)"),o.addColorStop(.5,"rgba(255,255,255,0.8)"),o.addColorStop(1,"rgba(255,255,255,0)"),a.fillStyle=o,a.fillRect(0,0,128,32),a.clearRect(14,0,100,32),a.fillStyle="rgba(255,255,255,0.18)",a.fillRect(14,14,100,4),new fn(r)})()}),this.gate=new dt(n,this.gateMat),this.gate.position.set(0,Et.armH+1.6,0),this.gate.visible=!1,this.gate.renderOrder=9,this.scene.add(this.gate)}resize(t,e){this.w=t,this.h=e,this.camera.aspect=t/e,this.rig.aspect=t/e,this.camera.updateProjectionMatrix(),this.applyQuality()}setQualityMode(t){let e=this.quality;e.auto=t==="auto"&&this.save.settings.autoFps!==!1,e.tier=t==="high"?0:t==="med"?2:t==="low"?4:Dl?1:0,e.downs=0,e.good=0,e.cool=2,this.applyQuality()}applyQuality(){if(!this.w)return;let t=tf[this.quality.tier],e=window.devicePixelRatio||1,i=Math.min(e,t.pr);this.pr=i,this.renderer.setPixelRatio(1),this.renderer.setSize(this.w,this.h,!1),this.canvas.width=Math.floor(this.w*i),this.canvas.height=Math.floor(this.h*i),this.renderer.setViewport(0,0,this.canvas.width,this.canvas.height),this.post.configure({levels:t.levels,samples:t.samples,radial:t.radial}),this.post.setSize(this.canvas.width,this.canvas.height),this.site.pxH=this.canvas.height,this.pathMat.uniforms.uPx.value=7*i;let n=this.world.sun,r=t.shadow>0&&this.qName!=="low";this.renderer.shadowMap.enabled=r,n.shadow&&n.shadow.mapSize.x!==t.shadow&&t.shadow>0&&(n.shadow.mapSize.set(t.shadow,t.shadow),n.shadow.map&&(n.shadow.map.dispose(),n.shadow.map=null)),this.post.u.uGrain.value=.02,cs.uDetHi.value=this.quality.tier>=4?0:1}monitor(t){let e=this.quality;if(!(t>.1||document.hidden)&&(e.acc+=t,e.n++,e.cool-=t,e.acc>=1.5)){let i=e.acc/e.n;if(e.acc=0,e.n=0,this.fps=1/i,!e.auto||this.test||e.cool>0)return;i>.0185&&e.tier<tf.length-1?(e.tier++,e.downs++,e.good=0,e.cool=2.5,this.applyQuality()):i<.0135&&e.tier>(Dl?1:0)&&e.downs<3&&(e.good+=1.5,e.good>9&&(e.tier--,e.good=0,e.cool=3,this.applyQuality()))}}setVehicle(t){let e=this.save.sel;this.vehicle&&(this.scene.remove(this.vehicle.group),this.vehicle.dispose()),this.vehicle=new wl(t,{livery:e.livery,variant:t==="booster"?e.variant:null,quality:this.qName}),this.scene.add(this.vehicle.group),this.fx.attach(this.vehicle)}setTod(t,e){this.world.setTod(t,e);{let o=Eh[t]||Eh.day,c=this.post.u;c.uLift.value.fromArray(o.lift),c.uGam.value.fromArray(o.gam),c.uGain.value.fromArray(o.gain),c.uCon.value=o.con,c.uFlare.value=o.flare}this.site.setNight(t==="night",t==="dusk"||t==="storm"||t==="dawn");let i=this.world.sun,n=this.world.hemi,r=i.color.clone().multiplyScalar(Math.min(1.3,i.intensity*.32)),a=n.color.clone().multiplyScalar(n.intensity*.45);t==="night"&&(r.multiplyScalar(.5),a.multiplyScalar(.6)),this.fx.setLighting(r,a)}makeSim(t,e){let i=this.vehicle.V,n=new gl(t,Object.assign({},e));return n.V.key==="booster"&&(n.V.len=i.len,n.V.pin=i.pin,n.V.cg=i.cg,n.prevPinY=n.pinY()),n}attract(t){this.state="title",this.paused=!1,this.banner(null);let e=["dusk","night","day","afternoon"];this.attractIdx=t?0:(this.attractIdx+1)%e.length;let i=Object.assign({},vi[0],{tod:e[this.attractIdx],seed:4242+this.attractIdx,wind:{base:2,dir:-1,gust:.5}});this.setVehicle("booster"),this.setTod(i.tod,i),this.mission=i,this.sim=this.makeSim(i,{assist:"normal"}),this.sim.auto=new Fn;for(let n=0;n<6e3&&this.sim.y>(t?1500:2400)&&this.sim.phase!=="crashed";n++)this.sim.update(1/30,1);this.sim.events.length=0,this.fx.reset(),this.rec.reset(this.sim),this.rig.setMode("auto"),this.rig.cut(),this.endT=0,this.app.hud.show(!1),this.app.input.enabled=!1,this.path.visible=!1,this.mark.visible=!1,this.gate.visible=!1,this.app.audio&&this.app.audio.setMode(this.app.ui&&this.app.ui.screen!=="title"?"menu":"title")}startMission(t,e={}){let i=vi.find(l=>l.id===t)||vi[0],n=this.save.settings;this.mission=i,this.opts=e;let r=e.assist||n.assist;this.assist=r,this.setVehicle(i.vehicle),this.setTod(i.tod,i),this._warmV!==i.vehicle&&(this._warmV=i.vehicle,this.warm()),this.sim=this.makeSim(i,{assist:r,autoClose:n.autoClose}),e.auto&&(this.sim.auto=e.crash?new Ah:new Fn),this.fx.reset(),this.rec.reset(this.sim),this.state="flight",this.paused=!1,this.endT=0,this.replayDone=!1,this.lastFin=0,this.predT=0,this.g={},this.camMode=this.save.sel.camera||"auto",this.isCamUnlocked(this.camMode)||(this.camMode="auto"),this.rig.setMode(this.camMode),this.rig.cut();let a=this.app.hud;a.setMission(i,r),a.buildEngines(this.sim.V),a.show(!0),this._hudHidden=!1,this.banner(null);let o=this.app.input;o.reset(),o.enabled=!e.auto,o.mode=n.control,o.sens=n.sens;let c=this.app.audio;c.setMode("flight"),c.setTension(.2),this.save.stats.flights++,tn(this.save),this.flightStart=performance.now(),this.result=null,this.app.ui.onFlightStart&&this.app.ui.onFlightStart()}isCamUnlocked(t){let e=Js.find(n=>n.id===t);if(!e)return!1;if(!e.req)return!0;let i=this.save.missions[e.req.mission];return!!(i&&i.done)}cycleCamera(){let t=Js.filter(i=>this.isCamUnlocked(i.id)).map(i=>i.id),e=t.indexOf(this.camMode);this.camMode=t[(e+1)%t.length],this.rig.setMode(this.camMode),this.app.hud.showCam(Yx[this.camMode]||this.camMode),this.save.sel.camera=this.camMode,tn(this.save),this.app.audio.ui("tap")}setCamera(t){this.camMode=t,this.rig.setMode(t)}pause(t){this.state!=="flight"&&this.state!=="replay"||(this.paused=t,this.app.input.enabled=!t&&this.state==="flight"&&!(this.sim&&this.sim.auto),t?(this.app.audio.silenceSfx(),this.app.audio.setMode("menu")):this.app.audio.setMode(this.state==="flight"?"flight":"silent"))}quitToTitle(){this.attract(!1)}closeArms(){if(this.state!=="flight"||!this.sim)return;this.sim.requestClose()||this.app.audio.ui("back")}handleEvents(t,e){let i=this.app.audio,n=this.app.hud;for(let r of t.events)switch(r.type){case"callout":e&&(n.callout(r.text,r.kind),r.speak&&i.say(r.text));break;case"ignite":i.ignite(),this.rig.shake=Math.max(this.rig.shake,.35);break;case"shutdown":i.shutdown();break;case"switch":i.shutdown();break;case"sonic":i.boom(),this.rig.shake=Math.max(this.rig.shake,.6),this.post.u.uShock.value=.6,this.shockP="veh";break;case"armsClose":i.hydraulics(Et.closeTime),this.haptic(10);break;case"armsOpen":i.hydraulics(.7);break;case"armTouch":i.clunk(.8);break;case"miss":i.alarm(),this.haptic(30);break;case"engineFail":i.fail(),r.hard&&(this.rig.shake=Math.max(this.rig.shake,.5));break;case"contact":i.contact(r.grade),this.rig.shake=Math.max(this.rig.shake,.6+r.vy*.15),this.haptic(40),setTimeout(()=>i.cheer(),500);break;case"crash":this.onCrash(r,e);break}t.events.length=0}onCrash(t,e){let i=this.app.audio,n=Math.min(1.3,.45+t.sp/90+t.fuel/14e4);this.fx.explode(t,n,t.water),t.water?(i.splash(),i.explosion(n*.6)):i.explosion(n),i.gasp(),this.haptic(80),this.post.u.uShock.value=1,this.shockP="crash",e&&this.save.stats.explosions++}haptic(t){try{this.save.settings.haptics&&navigator.vibrate&&navigator.vibrate(t)}catch{}}frame(t){this.time+=t;let e=this.sim,i=this.app;this.state==="title"?this.updateTitle(t):this.state==="flight"?this.updateFlight(t):this.state==="replay"?this.updateReplay(t):this.state==="result"&&this.updateAfter(t),this.render(t)}updateTitle(t){let e=this.sim;e.update(t,1),this.handleEvents(e,!1),(e.phase==="done"||e.phase==="crashed")&&(this.endT+=t,this.endT>9&&this.attract(!1)),this.view(t,e,{attract:!0}),this.app.audio.update(this.audioParams(e,.35))}updateFlight(t){let e=this.sim,i=this.app;if(!this.paused){let n=i.input;if(n.update(t),e.auto||(e.setInput(n.u*this.rig.inputSign,n.thr),e.input.aCmd=null,n.thr<.05&&(e.input.small=!1)),this.predT-=t,!e.auto&&this.predT<=0&&(e.phase==="boost"||e.phase==="entry"||e.phase==="land"||e.phase==="coast"))this.predT=.25,e.mode==="off"||e.phase==="boost"?(e.pred=e.predict({pts:this.pathPts}),e.predPts=e.pred.n,e.phase!=="boost"&&e.phase!=="coast"&&(e.predL=e.predictLanding())):(e.pred=e.predict({pts:this.pathPts,thrust:!0,horizon:30}),e.predPts=e.pred.n);else if(e.auto&&this.predT<=0){this.predT=.25;let c=e.predict({pts:this.pathPts});e.predPts=c.n}this.g=Sh(e,this.g),e.update(t,this.extScale),this.handleEvents(e,!0),this.rec.record(e);let r=e.finAct||0;e.gridfins&&e.q>2500&&Math.abs(r-this.lastFin)>.45&&(i.audio.fin(Math.min(1,e.q/3e4)),this.lastFin=r);let a=e.pinY()-Et.armH,o=e.phase==="entry"?.3+.2*(1-Math.min(1,e.y/2e4)):e.phase==="land"?.55+.45*(1-Math.min(1,Math.max(0,a)/900)):e.phase==="boost"?.35:.2;if(i.audio.setTension(o),e.phase==="caught"||e.phase==="done"||e.phase==="crashed"){this.endT===0&&(i.input.enabled=!1,i.audio.setMode(e.phase==="crashed"?"fail":"success"),this.finish()),this.endT+=t,this.endT>1.4&&!this._hudHidden&&(this._hudHidden=!0,i.hud.show(!1)),this.endT>4&&this._ban&&this._ban.classList.contains("on")&&(this._ban.className=this._ban.className.replace("on","off"));let c=e.phase==="crashed"?4.2:4.6;this.endT>c&&!this.replayStarted&&this.afterFlight()}}this.view(t,e,{}),i.hud.update(e,this.g,{thrInput:e.auto?e.input.thr:i.input.thr,assist:this.assist,stick:i.input.stick,inputSign:this.rig.inputSign}),i.audio.update(this.audioParams(e,1))}afterFlight(){this.replayStarted=!0,this.test&&!this.opts.replay||this.app.save.settings.skipReplay||this.rec.n<30?this.showResult():this.startReplay()}view(t,e,i){let n=this.rig;n.shake=Math.max(n.shake*Math.exp(-t*3.2),this.fx.shake*(this.save.settings.shake===!1?.2:1)),this.fx.shake*=Math.exp(-t*2.5);let r=n.update(t,e,i);r!==this.lastShot&&(this.lastShot=r),this.vehicle.update(e,t,this.camera),this.vehicle.group.visible=!(e.phase==="crashed"&&this.state!=="title")||this.state==="title",e.phase==="crashed"&&(this.vehicle.group.visible=!1),this.site.update(e,t,this.time,this.camera);let a=t*(i.slow||1);this.fx.update(a,e,this.vehicle,this.camera,{onBoom:d=>{this.app.audio.explosion(d*.6),this.rig.shake=Math.max(this.rig.shake,.4)}}),this.world.update(t,this.camera,{velocity:this.tmp.set(e.vx,e.vy,0),wind:e.wind,focus:this.tmp2.set(e.x,e.y,0),light:{pos:this.fx.light.position,col:this._lc||(this._lc=new ht).setRGB(1,.55,.25).multiplyScalar(this.fx.lightLevel/13*3)}})&&setTimeout(()=>this.app.audio.boom(),700+Math.random()*1500);let c=this.state==="flight"&&this.assist!=="pro"&&!e.auto,l=(c||this.state==="flight"&&this.test&&e.auto)&&e.predPts>1&&(e.phase==="boost"||e.phase==="entry"||e.phase==="land"&&e.bottomY()>Et.armH+60||e.phase==="coast");if(this.path.visible=l,l){let d=this.path.geometry.attributes.position.array,g=Math.min(this.pathN,e.predPts),v=Math.max(1,Math.floor(e.predPts/this.pathN));for(let y=0;y<this.pathN;y++){let M=Math.min(e.predPts-1,y*v);d[y*3]=this.pathPts[M*3],d[y*3+1]=this.pathPts[M*3+1]-(e.V.cg-2),d[y*3+2]=0}this.path.geometry.attributes.position.needsUpdate=!0,this.path.geometry.setDrawRange(0,Math.min(this.pathN,Math.ceil(e.predPts/v)));let m=e.phase==="boost"||e.phase==="coast"?e.pred.x:e.predL?e.predL.x:e.pred.x,p=Math.abs(m);this.pathMat.uniforms.uCol.value.setRGB(p<30?.3:1.4,p<30?1.4:p<300?1:.45,p<30?.6:.3)}let u=c&&e.pred&&(e.phase==="boost"||e.phase==="coast"||e.phase==="entry");if(this.mark.visible=!!u,u){let d=e.phase==="entry"&&e.predL?e.predL.x:e.pred.x;this.mark.position.set(d,Et.armH+.3,0);let g=this.camera.position.distanceTo(this.mark.position);this.mark.scale.setScalar(Math.max(1,g/160))}let f=e.pinY()-Et.armH,h=c&&e.phase==="land"&&f<400;if(this.gate.visible=!!h,h){let d=Math.abs(e.x)<1.1&&f<40;this.gateMat.color.setRGB(d?.25:1.4,d?1.5:.9,d?.6:.25),this.gateMat.opacity=.35+.25*Math.sin(this.time*6)}}audioParams(t,e){let i=this.camera.position,n=t.bottomX(),r=t.bottomY(),a=Math.hypot(i.x-n,i.y-r,i.z),o=t.T/(13*t.V.engT)*1.6;return{dist:a/Math.max(.2,e),thrust:Math.min(1,o),q:t.q,heat:t.heat,alt:t.y,onboard:this.rig.shot==="onboard",ground:i.y<200,crowd:(t.phase==="land"&&r<Et.armH+600?.18:.03)*e,slow:this.state==="replay"}}render(t){let e=this.post.u;e.uExposure.value=(this.world.exposure||1)*(this.state==="replay"?1.02:1),e.uFlashA.value=Math.min(.85,this.fx.flash*.55+this.world.flash*.25),this.fx.flash*=Math.exp(-t*4),e.uFlash.value.setRGB(1,.86,.66);let i=this.sim;if(i&&i.T>0&&this.vehicle){let r=this.tmp.set(i.bottomX(),i.bottomY()-14,0).project(this.camera),a=r.z<1&&Math.abs(r.x)<1.5&&Math.abs(r.y)<1.5,o=this.camera.position.distanceTo(this.tmp),c=Math.min(.5,40/Math.max(10,o)/Math.tan(this.camera.fov*Math.PI/360));e.uHaze.value.set(r.x*.5+.5,r.y*.5+.5,c*.6/(this.camera.aspect||.5)*.5,c*.9),e.uHazeA.value=a?Math.min(1,i.T/15e6)*(i.y<3e3?1:.4):0}else e.uHazeA.value=Math.max(0,e.uHazeA.value-t*2);if(e.uShock.value>0){let a=(this.shockP==="crash"&&i&&i.crash?this.tmp.set(i.crash.x,Math.max(5,i.crash.by||i.crash.y),0):this.tmp.set(i?i.x:0,i?i.y:0,0)).project(this.camera);e.uShockP.value.set(a.x*.5+.5,a.y*.5+.5),e.uShock.value=Math.max(0,e.uShock.value-t*.9),a.z>1&&(e.uShock.value=0)}let n=this.state==="replay"?1:0;e.uSlow.value+=(n*.55-e.uSlow.value)*Math.min(1,t*3),e.uBars.value+=((this.state==="replay"?1:0)-e.uBars.value)*Math.min(1,t*3),e.uSat.value=this.state==="replay"?.92:1,e.uRadial.value=i&&i.heat>.3&&this.state==="flight"?Math.min(1,i.heat-.3):0,e.uVig.value=.65,this.post.render(this.scene,this.camera,this.time)}startReplay(){let t=this.sim,e=this.rec;this.state="replay";let i=t.crash?t.crash.t:t.caught?t.caught.t:e.t1;this.rpEv=i,this.rpStart=Math.max(e.t0,i-(t.crash?6.5:8)),this.rpEnd=Math.min(e.t1,i+(t.crash?3.5:2.6)),this.ghost=new Pl(e,t),this.ghost.seek(this.rpStart),this.rpT=this.rpStart,this.rpBoomed=!1,this.rpShot=0,this.fx.reset(),this.rig.cut(),this.app.hud.replay(!0,this.ghost,1),this.app.audio.setMode("silent"),this.app.ui.onReplay&&this.app.ui.onReplay(!0)}skipReplay(){this.state==="replay"&&this.endReplay()}endReplay(){if(this.app.hud.replay(!1),this.app.ui.onReplay&&this.app.ui.onReplay(!1),this.fx.reset(),this.sim.crash){this.fx.explode(this.sim.crash,.6,this.sim.crash.water),this.fx.flash=0,this.fx.shake=0,this.post.u.uShock.value=0;for(let t=0;t<90;t++)this.fx.update(1/30,this.sim,this.vehicle,this.camera,{});this.fx.pendingBooms.length=0}this.showResult()}updateReplay(t){let e=this.ghost,i=this.rpEv,r=this.rpT>i-1.6&&this.rpT<i+1.4?.3:this.rpT>i?.55:1;this.paused||(this.rpT+=t*r),e.seek(Math.min(this.rpEnd,this.rpT));let a=this.sim.crash?["replay-low","crashwide"]:["replay-low","replay-arm","replay-orbit"],o=this.rpT<i-1.6?0:this.rpT<i+.5?1:2,c=a[Math.min(a.length-1,o)];e.phase==="crashed"&&!this.rpBoomed&&(this.rpBoomed=!0,this.onCrash(this.sim.crash,!1)),e.phase==="caught"&&!this.rpContact&&(this.rpContact=!0,this.app.audio.contact(0)),e.phase!=="caught"&&e.phase!=="done"&&(this.rpContact=!1),this.view(t*r,e,{replay:!0,replayShot:c,slow:1}),this.app.hud.replay(!0,e,r),this.app.audio.update(Object.assign(this.audioParams(e,1),{slow:!0})),this.rpT>=this.rpEnd&&this.endReplay()}updateAfter(t){let e=this.sim;e.update(t,1),e.events.length=0,this.view(t,e,{}),this.app.audio.update(Object.assign(this.audioParams(e,.5),{crowd:.05}))}banner(t){let e=this._ban||(this._ban=document.getElementById("banner"));if(e){if(!t){e.className="";return}e.innerHTML=t.caught?`<small>Booster gefangen</small><b>${t.gradeName}</b><i>${"\u2605".repeat(t.stars)}${"\u2606".repeat(3-t.stars)}</i>`:`<small>${t.crash?t.crash.why:"Verloren"}</small><b>Fehlgeschlagen</b>`,e.className="on "+(t.caught?"ok g"+t.grade:"fail")}}finish(){let t=this.sim,e=this.mission,i=this.save;if(this.result)return;this.replayStarted=!1;let n=t.auto&&!this.test?!0:!!t.auto,r=!!t.caught&&!t.crash,a=this.unlockState(),o=i.missions[e.id]||(i.missions[e.id]={stars:0,grade:null,best:0,time:null,done:!1,attempts:0,catches:0});o.attempts++;let c=0,l=0,u=3,f=null,h=null;if(r){let M=t.caught;u=M.grade;let x=[5e3,3500,2e3][u],S=Math.max(0,1-M.off/3.2)*1e3+Math.max(0,1-M.vy/5.2)*1e3+Math.max(0,1-M.tilt/6.5)*500,w=Math.max(0,M.fuelPct)*25,A=this.assist==="easy"?.8:this.assist==="pro"?1.5:1;if(c=Math.round((x+S+w-M.attempts*500)*A),l=u===0?3:u===1?2:1,h=M.t,e.timeTrial){let _=e.timeTrial;f=h<=_.gold?"gold":h<=_.silver?"silver":h<=_.bronze?"bronze":null,l=Math.min(l,f==="gold"?3:f==="silver"?2:1),c+=Math.max(0,Math.round((_.bronze-h)*60))}o.catches++,o.done=!0,i.stats.catches++,i.stats.streak++,i.stats.bestStreak=Math.max(i.stats.bestStreak,i.stats.streak),u===0&&i.stats.perfect++,i.stats.fuelSaved+=Math.max(0,M.fuelAbs||0)}else i.stats.crashes++,i.stats.streak=0;let d=o.stars|0,g=o.best|0;(!n||this.test)&&(o.stars=Math.max(d,l),c>g&&(o.best=c),r&&(o.grade===null||u<o.grade)&&(o.grade=u),h!==null&&(o.time===null||h<o.time)&&(o.time=h)),i.stats.playTime+=(performance.now()-this.flightStart)/1e3;let v=[],m=M=>{if(!i.ach[M]){i.ach[M]=Date.now();let x=Qr.find(S=>S.id===M);x&&v.push(x)}};if(r){let M=t.caught;m("first"),u===0&&m("perfect"),M.vy<.5&&m("feather"),M.off<.3&&m("needle"),M.fuelPct<4&&m("reserve"),e.id===4&&m("night"),e.id===5&&m("fog"),e.id===6&&m("engine"),e.id===8&&m("storm"),e.id===9&&m("ship"),f==="gold"&&m("gold"),this.assist==="pro"&&m("pro"),i.stats.streak>=5&&m("streak"),i.stats.catches>=25&&m("veteran"),Hn(i)>=30&&m("allstars")}else t.crash&&m("boom");let y=this.unlockState().filter(M=>!a.includes(M));Oi(i),this.result={mission:e,caught:r,grade:u,gradeName:qx[u],stars:l,prevStars:d,score:c,best:Math.max(g,c),newBest:c>g&&r,time:h,medal:f,crash:t.crash,c:t.caught,achievements:v,unlocks:y,assist:this.assist,auto:!!t.auto,next:vi.find(M=>M.id===e.id+1)||null},this.banner(this.result)}unlockState(){let t=this.save,e=Hn(t),i=[];for(let n of Un)e>=n.stars&&i.push("Lackierung: "+n.name);for(let n of ls)this.variantUnlocked(n)&&i.push("Variante: "+n.name);for(let n of Js)this.isCamUnlocked(n.id)&&i.push("Kamera: "+n.name);for(let n of vi)this.missionUnlocked(n.id)&&i.push("Mission "+n.id+": "+n.name);return i}variantUnlocked(t){if(!t.req)return!0;let e=this.save;return t.req.perfect?e.stats.perfect>=t.req.perfect:t.req.missions?Object.values(e.missions).filter(i=>i.done).length>=t.req.missions:!1}missionUnlocked(t){if(t<=1)return!0;let e=vi.find(n=>n.id===t);if(e&&e.bonus)return Hn(this.save)>=12;let i=this.save.missions[t-1]||(t===10?this.save.missions[8]:null);return t===10?!!(this.save.missions[8]&&this.save.missions[8].done):!!(i&&i.done)}showResult(){this.state="result",this.app.hud.show(!1),this.rig.setMode("auto"),this.path.visible=!1,this.mark.visible=!1,this.gate.visible=!1,this.app.ui.showResult(this.result)}};var er=s=>440*Math.pow(2,(s-69)/12),Ul=(s,t,e)=>s<t?t:s>e?e:s,Fl=class{constructor(){this.ctx=null,this.muted=!1,this.musicVol=.6,this.sfxVol=.9,this.voice=!1,this.mode="title",this.tension=0,this.step=0,this.nextTime=0,this.bpm=96,this._timer=0,this.lastClank=0,this.voiceName=null}get ready(){return!!this.ctx&&this.ctx.state==="running"}unlock(){if(this.ctx){this.ctx.state!=="running"&&this.ctx.resume().catch(()=>{});return}let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let e;try{e=new t({latencyHint:"interactive"})}catch{try{e=new t}catch{return}}this.ctx=e;let i=e.createBuffer(1,1,22050),n=e.createBufferSource();n.buffer=i,n.connect(e.destination),n.start(0),e.resume().catch(()=>{}),this._build(),this.nextTime=e.currentTime+.1,this._timer=setInterval(()=>this._schedule(),30),document.addEventListener("visibilitychange",()=>{this.ctx&&(document.hidden?this.ctx.suspend().catch(()=>{}):this.ctx.resume().catch(()=>{}))});try{if(window.speechSynthesis){let r=()=>{let a=speechSynthesis.getVoices();this.voiceObj=a.find(o=>/de[-_]CH/i.test(o.lang))||a.find(o=>/^de/i.test(o.lang))||null};r(),speechSynthesis.onvoiceschanged=r}}catch{}}_noise(t,e="white"){let i=this.ctx,n=Math.floor(i.sampleRate*t),r=i.createBuffer(1,n,i.sampleRate),a=r.getChannelData(0),o=0,c=0,l=0,u=0;for(let h=0;h<n;h++){let d=Math.random()*2-1;e==="brown"?(o=(o+.02*d)/1.02,a[h]=o*3.5):e==="pink"?(c=.99765*c+d*.099046,l=.963*l+d*.2965164,u=.57*u+d*1.0526913,a[h]=(c+l+u+d*.1848)*.2):e==="crackle"?a[h]=Math.random()<.004?(Math.random()*2-1)*(.5+Math.random()):d*.04:a[h]=d}let f=Math.min(2e3,n/4);for(let h=0;h<f;h++){let d=h/f;a[h]=a[h]*d+a[n-f+h]*(1-d)}return r}_impulse(t,e){let i=this.ctx,n=Math.floor(i.sampleRate*t),r=i.createBuffer(2,n,i.sampleRate);for(let a=0;a<2;a++){let o=r.getChannelData(a);for(let c=0;c<n;c++)o[c]=(Math.random()*2-1)*Math.pow(1-c/n,e)}return r}_loop(t,e,i=1){let n=this.ctx.createBufferSource();return n.buffer=t,n.loop=!0,n.playbackRate.value=i,n.connect(e),n.start(),n}_build(){let t=this.ctx;this.master=t.createGain(),this.master.gain.value=this.muted?0:.9;let e=t.createDynamicsCompressor();e.threshold.value=-12,e.knee.value=10,e.ratio.value=5,e.attack.value=.003,e.release.value=.25,this.master.connect(e),e.connect(t.destination),this.musicBus=t.createGain(),this.musicBus.gain.value=this.musicVol*.5,this.musicBus.connect(this.master),this.sfxBus=t.createGain(),this.sfxBus.gain.value=this.sfxVol,this.sfxBus.connect(this.master),this.reverb=t.createConvolver(),this.reverb.buffer=this._impulse(3.2,2.2),this.revSend=t.createGain();let i=t.createGain();i.gain.value=.35,this.revSend.connect(this.reverb),this.reverb.connect(i),i.connect(this.master),this.white=this._noise(2.5),this.brown=this._noise(4,"brown"),this.pink=this._noise(3,"pink"),this.crackleB=this._noise(3,"crackle"),this.eng=t.createGain(),this.eng.gain.value=0,this.eng.connect(this.sfxBus),this.engLP=t.createBiquadFilter(),this.engLP.type="lowpass",this.engLP.frequency.value=600,this.engLP.Q.value=.5,this.engLP.connect(this.eng);let n=t.createGain();n.gain.value=.9,n.connect(this.engLP),this._loop(this.brown,n,1);let r=t.createGain();r.gain.value=.35;let a=t.createBiquadFilter();a.type="bandpass",a.frequency.value=900,a.Q.value=.5,a.connect(r),r.connect(this.engLP),this._loop(this.pink,a,.9),this.crk=t.createGain(),this.crk.gain.value=0;let o=t.createBiquadFilter();o.type="highpass",o.frequency.value=300,this.crk.connect(o),o.connect(this.engLP),this._loop(this.crackleB,this.crk,1),this.rumble=t.createGain(),this.rumble.gain.value=0,this.rumble.connect(this.sfxBus);let c=t.createWaveShaper(),l=new Float32Array(1024);for(let g=0;g<1024;g++){let v=g/512-1;l[g]=Math.tanh(v*3)}c.curve=l,c.connect(this.rumble);let u=t.createBiquadFilter();u.type="lowpass",u.frequency.value=90,u.connect(c);for(let g of[31,38.5,46]){let v=t.createOscillator();v.type="sawtooth",v.frequency.value=g;let m=t.createGain();m.gain.value=.25,v.connect(m),m.connect(u),v.start()}let f=t.createGain();f.gain.value=.8,f.connect(u),this._loop(this.brown,f,.5),this.wind=t.createGain(),this.wind.gain.value=0,this.wind.connect(this.sfxBus),this.windBP=t.createBiquadFilter(),this.windBP.type="bandpass",this.windBP.frequency.value=500,this.windBP.Q.value=.6,this.windBP.connect(this.wind),this._loop(this.pink,this.windBP,1),this.amb=t.createGain(),this.amb.gain.value=0,this.amb.connect(this.sfxBus);let h=t.createBiquadFilter();h.type="lowpass",h.frequency.value=700,h.connect(this.amb),this._loop(this.pink,h,.6),this.ambLFO=t.createOscillator(),this.ambLFO.frequency.value=.12;let d=t.createGain();d.gain.value=.25,this.ambLFO.connect(d),d.connect(this.amb.gain),this.ambLFO.start(),this.crowd=t.createGain(),this.crowd.gain.value=0,this.crowd.connect(this.sfxBus),this.crowd.connect(this.revSend);for(let g=0;g<6;g++){let v=t.createBiquadFilter();v.type="bandpass",v.frequency.value=500+g*260,v.Q.value=1.4;let m=t.createGain();m.gain.value=.18,v.connect(m),m.connect(this.crowd);let p=t.createOscillator();p.frequency.value=.4+Math.random()*1.6;let y=t.createGain();y.gain.value=.12,p.connect(y),y.connect(m.gain),p.start(),this._loop(this.white,v,.8+Math.random()*.4)}this.mus={pad:t.createGain(),bass:t.createGain(),pulse:t.createGain(),arp:t.createGain(),drum:t.createGain()};for(let g of Object.keys(this.mus))this.mus[g].gain.value=0,this.mus[g].connect(this.musicBus);this.mus.pad.connect(this.revSend),this.mus.arp.connect(this.revSend),this.padLP=t.createBiquadFilter(),this.padLP.type="lowpass",this.padLP.frequency.value=900,this.padLP.connect(this.mus.pad),this.padOsc=[];for(let g=0;g<6;g++){let v=t.createOscillator();v.type="sawtooth",v.detune.value=(g%2?1:-1)*(6+g*2);let m=t.createGain();m.gain.value=.07,v.connect(m),m.connect(this.padLP),v.start(),this.padOsc.push(v)}this.chord=0,this.setChord([45,52,57,60,64,69],0),this.setMode("title")}setChord(t,e){if(!this.padOsc)return;let i=e||this.ctx.currentTime;this.padOsc.forEach((n,r)=>n.frequency.setTargetAtTime(er(t[r%t.length]),i,.6))}setMode(t){if(this.mode=t,!this.ctx)return;let e=this.ctx.currentTime,i=(n,r,a=.8)=>this.mus[n].gain.setTargetAtTime(r,e,a);if(t==="title")i("pad",.55),i("bass",0),i("pulse",0),i("arp",.18),i("drum",0),this.setChord([45,52,57,59,64,71]);else if(t==="menu")i("pad",.45),i("arp",.12),i("pulse",0),i("drum",0),i("bass",0);else if(t==="flight")i("pad",.32),i("arp",0),i("pulse",0),i("drum",0),i("bass",.25);else if(t==="success")i("pad",.7,.3),i("arp",.3),i("pulse",0,.2),i("drum",0,.2),i("bass",.2),this.setChord([48,55,60,64,67,72]);else if(t==="fail")i("pad",.45,.5),i("arp",0),i("pulse",0,.1),i("drum",0,.1),i("bass",.15),this.setChord([41,48,53,56,60,65]);else if(t==="silent")for(let n of Object.keys(this.mus))i(n,0,.3)}setTension(t){if(this.tension=Ul(t,0,1),!this.ctx||this.mode!=="flight")return;let e=this.ctx.currentTime;this.mus.pulse.gain.setTargetAtTime(.1+.35*this.tension,e,.5),this.mus.drum.gain.setTargetAtTime(this.tension>.45?.5*this.tension:0,e,.5),this.padLP.frequency.setTargetAtTime(500+2500*this.tension,e,.8)}_schedule(){let t=this.ctx;if(!t)return;let e=60/this.bpm/4;if(this.nextTime<t.currentTime-.05){let i=Math.ceil((t.currentTime+.02-this.nextTime)/e);this.nextTime+=i*e,this.step+=i}for(;this.nextTime<t.currentTime+.12;)this._tick(this.step,this.nextTime),this.nextTime+=e,this.step++}_tick(t,e){let i=this.ctx,n=Math.floor(t/16),r=t%16,o=(this.mode==="flight"?[[45,52,57,60,64],[41,48,53,57,60],[43,50,55,59,62],[40,47,52,56,59]]:[[45,52,57,59,64],[41,48,55,57,64],[48,55,59,62,67],[43,50,57,59,62]])[n%4];if(r===0&&(this.mode==="flight"||this.mode==="title"||this.mode==="menu")&&this.setChord(o.concat([o[2]+12]),e),this.mus.pulse.gain.value>.01&&r%2===0&&this._pluck(er(o[0]-12+(r%8===6?12:0)),e,.18,"sawtooth",this.mus.pulse,380+this.tension*1400),this.mus.bass.gain.value>.01&&r%8===0&&this._pluck(er(o[0]-12),e,.9,"triangle",this.mus.bass,300),this.mus.arp.gain.value>.01&&r%3===0){let c=o[(t/3|0)%o.length]+12;this._pluck(er(c),e,.6,"sine",this.mus.arp,3e3)}this.mus.drum.gain.value>.01&&((r===0||r===10)&&this._kick(e),(r===4||r===12)&&this._tom(e,r===12?90:120),this.tension>.75&&r%2===1&&this._hat(e))}_pluck(t,e,i,n,r,a){let o=this.ctx,c=o.createOscillator();c.type=n,c.frequency.value=t;let l=o.createBiquadFilter();l.type="lowpass",l.frequency.setValueAtTime(a*2,e),l.frequency.exponentialRampToValueAtTime(Math.max(80,a*.4),e+i);let u=o.createGain();u.gain.setValueAtTime(1e-4,e),u.gain.exponentialRampToValueAtTime(.5,e+.01),u.gain.exponentialRampToValueAtTime(1e-4,e+i),c.connect(l),l.connect(u),u.connect(r),c.start(e),c.stop(e+i+.05)}_kick(t){let e=this.ctx,i=e.createOscillator();i.frequency.setValueAtTime(110,t),i.frequency.exponentialRampToValueAtTime(38,t+.25);let n=e.createGain();n.gain.setValueAtTime(.9,t),n.gain.exponentialRampToValueAtTime(.001,t+.5),i.connect(n),n.connect(this.mus.drum),i.start(t),i.stop(t+.55)}_tom(t,e){let i=this.ctx,n=i.createOscillator();n.type="triangle",n.frequency.setValueAtTime(e,t),n.frequency.exponentialRampToValueAtTime(e*.5,t+.3);let r=i.createGain();r.gain.setValueAtTime(.5,t),r.gain.exponentialRampToValueAtTime(.001,t+.4),n.connect(r),r.connect(this.mus.drum),r.connect(this.revSend),n.start(t),n.stop(t+.45)}_hat(t){let e=this.ctx,i=e.createBufferSource();i.buffer=this.white;let n=e.createBiquadFilter();n.type="highpass",n.frequency.value=7e3;let r=e.createGain();r.gain.setValueAtTime(.12,t),r.gain.exponentialRampToValueAtTime(.001,t+.05),i.connect(n),n.connect(r),r.connect(this.mus.drum),i.start(t,Math.random()*2,.06)}_burst(t,e,i,n,r="lowpass",a,o=.7,c){let l=this.ctx,u=l.currentTime,f=l.createBufferSource();f.buffer=c||this.white;let h=l.createBiquadFilter();h.type=r,h.Q.value=o,h.frequency.setValueAtTime(e,u),h.frequency.exponentialRampToValueAtTime(Math.max(20,i),u+t);let d=l.createGain();return d.gain.setValueAtTime(n,u),d.gain.exponentialRampToValueAtTime(5e-4,u+t),f.connect(h),h.connect(d),d.connect(a||this.sfxBus),f.start(u,Math.random()),f.stop(u+t+.05),d}_tone(t,e,i,n,r="sine",a,o=0){let c=this.ctx,l=c.currentTime+o,u=c.createOscillator();u.type=r,u.frequency.setValueAtTime(t,l),u.frequency.exponentialRampToValueAtTime(Math.max(10,e),l+i);let f=c.createGain();f.gain.setValueAtTime(1e-4,l),f.gain.exponentialRampToValueAtTime(n,l+.008),f.gain.exponentialRampToValueAtTime(1e-4,l+i),u.connect(f),f.connect(a||this.sfxBus),u.start(l),u.stop(l+i+.05)}update(t){if(!this.ready)return;let e=this.ctx,i=e.currentTime,r=1/(1+Math.max(20,t.dist||100)/260),a=Ul(t.thrust||0,0,1),o=a>.01?(.25+.75*a)*r*1.6*(t.alt>3e4?.15:1):0;this.eng.gain.setTargetAtTime(Math.min(1.6,o*(t.slow?.6:1)),i,.06),this.engLP.frequency.setTargetAtTime(Ul(300+9e3*r*r+a*400,200,9e3)*(t.slow?.5:1),i,.1),this.crk.gain.setTargetAtTime(a*1.5*Math.sqrt(r),i,.1),this.rumble.gain.setTargetAtTime(a>.01?Math.min(.9,(.3+a)*Math.sqrt(r)*.8):0,i,.1);let c=Ul((t.q||0)/35e3,0,1)*(t.onboard?1.4:.7)+(t.heat||0)*.3;this.wind.gain.setTargetAtTime(c*.5,i,.2),this.windBP.frequency.setTargetAtTime(300+c*1200,i,.3),this.amb.gain.setTargetAtTime(t.ground?.18:.04,i,.5),this.crowd.gain.setTargetAtTime((t.crowd||0)*.5,i,t.crowd>.5?.25:1.2)}boom(){this.ready&&(this._burst(.5,900,60,1.1,"lowpass"),this._tone(70,28,.6,.9),setTimeout(()=>{this.ready&&(this._burst(.45,800,60,.9,"lowpass"),this._tone(65,25,.5,.7))},140))}fin(t=1){if(!this.ready)return;let e=performance.now();e-this.lastClank<140||(this.lastClank=e,this._burst(.12,2400,600,.12*t,"bandpass",null,4),this._tone(900+Math.random()*300,500,.15,.05*t,"square"))}hydraulics(t=.85){if(!this.ready)return;let e=this.ctx,i=e.currentTime,n=e.createOscillator();n.type="sawtooth",n.frequency.setValueAtTime(110,i),n.frequency.linearRampToValueAtTime(170,i+t*.7),n.frequency.linearRampToValueAtTime(130,i+t);let r=e.createBiquadFilter();r.type="lowpass",r.frequency.value=900;let a=e.createGain();a.gain.setValueAtTime(1e-4,i),a.gain.exponentialRampToValueAtTime(.25,i+.08),a.gain.setValueAtTime(.25,i+t-.1),a.gain.exponentialRampToValueAtTime(1e-4,i+t+.1),n.connect(r),r.connect(a),a.connect(this.sfxBus),n.start(i),n.stop(i+t+.2),this._burst(t,4e3,2500,.08,"highpass"),setTimeout(()=>this.clunk(.6),t*1e3)}clunk(t=1){this.ready&&(this._tone(160,50,.25,.5*t,"triangle"),this._burst(.2,1800,200,.4*t,"lowpass"))}contact(t=0){if(!this.ready)return;this._tone(90,35,.9,1,"sine"),this._burst(.6,2600,150,.9,"lowpass");for(let i of[420,610,1270,1730])this._tone(i,i*.98,1.6+t,.06,"sine");let e=this._burst(2,300,120,.25,"bandpass",this.revSend,3)}explosion(t=1){this.ready&&(this._burst(4.5,2500,40,1.4*t,"lowpass",null,.5,this.brown),this._burst(1.2,6e3,200,.7*t,"lowpass"),this._tone(55,18,2.5,1.2*t,"sine"),this._burst(6,1500,300,.3*t,"bandpass",this.revSend,1,this.crackleB))}splash(){this.ready&&(this._burst(2.2,3e3,200,.9,"lowpass",null,.5,this.pink),this._tone(60,25,1.4,.8))}ignite(){this.ready&&(this._burst(.35,300,2400,.5,"bandpass",null,.8),this._tone(45,80,.5,.5,"sawtooth"))}shutdown(){this.ready&&this._burst(.6,1200,120,.25,"lowpass")}fail(){this.ready&&(this._burst(.2,1200,300,.6,"bandpass",null,2),this._tone(240,120,.25,.15,"square"))}alarm(){this.ready&&(this._tone(880,880,.12,.12,"square"),this._tone(660,660,.12,.12,"square",null,.15))}beep(t=!1){this.ready&&this._tone(t?2500:1800,t?2500:1800,.09,.06,"sine")}ui(t="tap"){this.ready&&(t==="tap"?this._tone(1400,900,.06,.06,"sine"):t==="back"?this._tone(700,500,.08,.06,"sine"):t==="star"?(this._tone(1320,1320,.25,.12,"sine"),this._tone(1760,1760,.3,.08,"sine",null,.06)):t==="unlock"&&[0,4,7,12].forEach((e,i)=>this._tone(er(72+e),er(72+e),.35,.09,"triangle",null,i*.08)))}cheer(){if(!this.ready)return;let t=this.ctx,e=t.currentTime;this.crowd.gain.cancelScheduledValues(e),this.crowd.gain.setTargetAtTime(.65,e,.15),this.crowd.gain.setTargetAtTime(.18,e+4,1.5);for(let i=0;i<4;i++){let n=1500+Math.random()*900;this._tone(n,n*1.6,.5,.05,"sine",null,.3+i*.4+Math.random()*.3)}}gasp(){if(!this.ready)return;let t=this.ctx,e=t.currentTime;this.crowd.gain.setTargetAtTime(.35,e,.1),this.crowd.gain.setTargetAtTime(.02,e+1.5,1)}say(t){if(!(!this.voice||this.muted))try{if(!window.speechSynthesis)return;let e=new SpeechSynthesisUtterance(t);e.lang=this.voiceObj?this.voiceObj.lang:"de-CH",this.voiceObj&&(e.voice=this.voiceObj),e.rate=1.08,e.pitch=.95,e.volume=.9,speechSynthesis.cancel(),speechSynthesis.speak(e)}catch{}}applySettings(t){if(this.muted=!!t.muted,this.musicVol=t.music,this.sfxVol=t.sfx,this.voice=!!t.voice,!this.ctx)return;let e=this.ctx.currentTime;this.master.gain.setTargetAtTime(this.muted?0:.9,e,.05),this.musicBus.gain.setTargetAtTime(this.musicVol*.5,e,.05),this.sfxBus.gain.setTargetAtTime(this.sfxVol,e,.05)}silenceSfx(){if(!this.ctx)return;let t=this.ctx.currentTime;for(let e of[this.eng,this.rumble,this.wind,this.crk])e.gain.setTargetAtTime(0,t,.08)}};var Bl=class{constructor(t){this.el=t,this.u=0,this.thr=0,this.enabled=!1,this.mode="stick",this.sens=1,this.stick={id:null,x0:0,y0:0,x:0,y:0,active:!1},this.slide={id:null,y0:0,t0:0,active:!1},this.keys={},this.tilt=null,this.onClose=null,this.onCamera=null,this.onPause=null,this.haptic=null,this.lastThrStep=0,t.addEventListener("pointerdown",e=>this.down(e),{passive:!1}),window.addEventListener("pointermove",e=>this.move(e),{passive:!1}),window.addEventListener("pointerup",e=>this.up(e)),window.addEventListener("pointercancel",e=>this.up(e)),window.addEventListener("keydown",e=>this.key(e,!0)),window.addEventListener("keyup",e=>this.key(e,!1)),window.addEventListener("deviceorientation",e=>{e.gamma!=null&&(this.tilt=e.gamma)})}async requestTilt(){try{return typeof DeviceOrientationEvent<"u"&&typeof DeviceOrientationEvent.requestPermission=="function"?await DeviceOrientationEvent.requestPermission()==="granted":!0}catch{return!1}}reset(){this.u=0,this.thr=0,this.stick.active=!1,this.stick.id=null,this.slide.active=!1,this.slide.id=null}down(t){if(!this.enabled)return;t.preventDefault();let e=window.innerWidth,i=window.innerHeight;t.clientX<e*.5&&this.stick.id===null&&this.mode!=="tilt"?this.stick={id:t.pointerId,x0:t.clientX,y0:t.clientY,x:t.clientX,y:t.clientY,active:!0}:t.clientX>=e*.5&&this.slide.id===null&&(this.slide={id:t.pointerId,y0:t.clientY,t0:this.thr,active:!0,x:t.clientX,y:t.clientY})}move(t){if(this.stick.id===t.pointerId){this.stick.x=t.clientX,this.stick.y=t.clientY;let e=62,i=this.stick.x-this.stick.x0;Math.abs(i)>e*1.6&&(this.stick.x0=this.stick.x-Math.sign(i)*e*1.6,i=this.stick.x-this.stick.x0),this.u=Math.max(-1,Math.min(1,i/e*this.sens)),Math.abs(this.u)<.06&&(this.u=0)}else if(this.slide.id===t.pointerId){let e=window.innerHeight;this.slide.y=t.clientY;let i=this.thr;this.thr=Math.max(0,Math.min(1,this.slide.t0+(this.slide.y0-t.clientY)/(e*.38)));let n=Math.floor(this.thr*10);n!==this.lastThrStep&&(this.lastThrStep=n,this.haptic&&this.haptic(4)),i>=.05&&this.thr<.05&&this.haptic&&this.haptic(12)}}up(t){this.stick.id===t.pointerId&&(this.stick.id=null,this.stick.active=!1,this.u=0),this.slide.id===t.pointerId&&(this.slide.id=null,this.slide.active=!1)}key(t,e){let i=t.key.toLowerCase();this.keys[i]=e,!(!e||!this.enabled)&&((i===" "||i==="enter")&&(t.preventDefault(),this.onClose&&this.onClose()),i==="c"&&this.onCamera&&this.onCamera(),(i==="escape"||i==="p")&&this.onPause&&this.onPause())}update(t){if(!this.enabled)return;let e=this.keys,i=e.arrowleft||e.a,n=e.arrowright||e.d;if(i||n?this.u=(n?1:0)-(i?1:0):!this.stick.active&&this.mode!=="tilt"&&(this.u*=Math.exp(-t*20)),(e.arrowup||e.w)&&(this.thr=Math.min(1,this.thr+t*.9)),(e.arrowdown||e.s)&&(this.thr=Math.max(0,this.thr-t*.9)),e.x&&(this.thr=0),e.f&&(this.thr=1),this.mode==="tilt"&&this.tilt!=null&&!i&&!n){let r=this.tilt;this.u=Math.max(-1,Math.min(1,(Math.abs(r)<2.5?0:r-Math.sign(r)*2.5)/22*this.sens))}}};var en=s=>{let t=Math.round(Math.abs(s)).toString();return(s<0?"\u2212":"")+t.replace(/\B(?=(\d{3})+(?!\d))/g,"\u2019")},ef=s=>(s<0?"\u2212":"")+Math.abs(s).toFixed(1),$x=[["sep","Trennung"],["boost","R\xFCckstoss"],["coast","Freiflug"],["entry","Eintritt"],["land","Landung"],["catch","Fang"]],Rh={pause:'<svg viewBox="0 0 24 24"><path fill="currentColor" d="M7 5h3.2v14H7zM13.8 5H17v14h-3.2z"/></svg>',cam:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="7" width="13" height="10" rx="2"/><path d="M16 10.5l5-3v9l-5-3"/></svg>',arms:'<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M8 10v28M40 10v28"/><path d="M8 22h12M40 22H28"/><path d="M20 18v8M28 18v8"/></svg>'},Ol=class{constructor(t,e){this.app=e,this.root=t,this.cache={},t.innerHTML=`
    <div class="hud-top">
      <div class="hud-chip glass-s"><span class="h-mis"></span><b class="h-t">T+ 00:00</b></div>
      <div class="spacer"></div>
      <button class="icon-btn h-cam" aria-label="Kamera">${Rh.cam}</button>
      <button class="icon-btn h-pause" aria-label="Pause">${Rh.pause}</button>
    </div>
    <div class="hud-cam-name"></div>
    <div class="hud-phases">${$x.map(([n,r])=>`<span data-p="${n}">${r}</span>`).join("<i></i>")}</div>
    <div class="hud-callouts"></div>
    <div class="hud-left">
      <div class="tl"><small>H\xF6he</small><b class="h-alt">0</b><em class="h-altu">m</em></div>
      <div class="tl"><small>Sinkrate</small><b class="h-vy">0</b><em>m/s</em></div>
      <div class="tl"><small>Seitlich</small><b class="h-vx">0</b><em>m/s</em></div>
      <div class="tl sm"><small>Neigung</small><b class="h-th">0</b><em>\xB0</em></div>
      <div class="tl sm"><small>Abstand Turm</small><b class="h-dx">0</b><em>m</em></div>
      <div class="tl sm h-machrow"><small>Mach</small><b class="h-mach">0</b></div>
    </div>
    <div class="hud-right">
      <div class="eng-wrap"><svg class="h-eng" viewBox="-10 -10 20 20"></svg><span class="h-engn">0/13</span></div>
      <div class="fuel"><small>Treibstoff</small><div class="fuel-bar"><i class="h-fuel"></i><s class="h-fuelres"></s></div><b class="h-fuelp">100%</b></div>
      <div class="thr-track"><div class="thr-fill h-thrf"></div><div class="thr-ghost h-thrg"></div><div class="thr-knob h-thrk"><b class="h-thrv">AUS</b></div><span class="thr-lbl">SCHUB</span></div>
    </div>
    <div class="hud-cue h-cue"><span class="h-cuet">Z\xFCndung in</span><b class="h-cuev">0.0 s</b><div class="cue-bar"><i class="h-cueb"></i></div></div>
    <div class="hud-arrows"><div class="arr l h-al">\u2039\u2039</div><div class="arr r h-ar">\u203A\u203A</div></div>
    <div class="hud-window h-win">
      <div class="win-v"><div class="win-zone"></div><div class="win-pin h-wpin"></div><small>Bolzen</small></div>
      <div class="win-h"><div class="win-hzone"></div><div class="win-x h-wx"></div><small>Versatz</small></div>
    </div>
    <button class="hud-close h-close"><span class="ring"></span>${Rh.arms}<b>Arme schliessen</b></button>
    <div class="hud-warn h-warn"></div>
    <div class="stick h-stick"><div class="knob h-knob"></div></div>
    <div class="hud-replay">
      <div class="rp-tag"><i></i>Wiederholung <span class="rp-speed">\xBC\xD7</span></div>
      <div class="rp-lower"><div class="rp-a"><small>T+</small><b class="rp-t">00:00</b></div><div class="rp-a"><small>H\xF6he</small><b class="rp-alt">0 m</b></div><div class="rp-a"><small>Tempo</small><b class="rp-sp">0 km/h</b></div><div class="rp-brand">CHOPSTIX<small>Live vom Startplatz</small></div></div>
      <button class="btn rp-skip">Weiter \u203A</button>
    </div>`;let i=n=>t.querySelector(n);this.el={};for(let n of["h-mis","h-t","h-alt","h-altu","h-vy","h-vx","h-th","h-dx","h-mach","h-machrow","h-eng","h-engn","h-fuel","h-fuelres","h-fuelp","h-thrf","h-thrg","h-thrk","h-thrv","h-cue","h-cuet","h-cuev","h-cueb","h-al","h-ar","h-win","h-wpin","h-wx","h-close","h-warn","h-stick","h-knob","h-cam","h-pause"])this.el[n.slice(2)]=i("."+n);this.phases=t.querySelectorAll(".hud-phases span"),this.callouts=i(".hud-callouts"),this.camName=i(".hud-cam-name"),this.replayEl=i(".hud-replay"),this.rp={t:i(".rp-t"),alt:i(".rp-alt"),sp:i(".rp-sp"),speed:i(".rp-speed"),skip:i(".rp-skip")},this.engDots=null,this.lastEngKey="",this.lastCall=0}set(t,e){this.cache[t]!==e&&(this.cache[t]=e,this.el[t].textContent=e)}cls(t,e,i){let n=t+"."+e;this.cache[n]!==i&&(this.cache[n]=i,this.el[t].classList.toggle(e,i))}style(t,e,i){let n=t+":"+e;this.cache[n]!==i&&(this.cache[n]=i,e.startsWith("--")?this.el[t].style.setProperty(e,i):this.el[t].style[e]=i)}buildEngines(t){let e=t.engines.map((i,n)=>`<circle cx="${(i.x*2.1).toFixed(2)}" cy="${(-i.z*2.1).toFixed(2)}" r="${i.g==="v"?1.9:1.05}" data-i="${n}"/>`).join("");this.el.eng.innerHTML=`<circle cx="0" cy="0" r="9.7" class="rim"/>${e}`,this.engDots=Array.from(this.el.eng.querySelectorAll("circle[data-i]")),this.lastEngKey=""}show(t){this.root.classList.toggle("on",t)}setMission(t,e){this.set("mis",t.id+" \xB7 "+t.name),this.root.dataset.assist=e,this.cache={mis:this.cache.mis},this.callouts.innerHTML="",this.root.classList.remove("replay")}callout(t,e="info"){let i=document.createElement("div");for(i.className="co "+e,i.textContent=t,this.callouts.prepend(i);this.callouts.children.length>3;)this.callouts.lastChild.remove();setTimeout(()=>i.classList.add("out"),4200),setTimeout(()=>i.remove(),4800)}showCam(t){this.camName.textContent=t,this.camName.classList.remove("flash"),this.camName.offsetWidth,this.camName.classList.add("flash")}update(t,e,i){let n=t,r=n.T0+n.t,a=Math.floor(r/60),o=Math.floor(r%60);this.set("t",`T+ ${String(a).padStart(2,"0")}:${String(o).padStart(2,"0")}`);let c=n.phase==="caught"||n.phase==="done"||n.phase==="land"&&n.bottomY()<Et.armH+200?"catch":n.phase;if(this.cache.ph!==c){this.cache.ph=c;let T=!0;this.phases.forEach(R=>{let I=R.dataset.p===c;R.classList.toggle("on",I),I&&(T=!1),R.classList.toggle("past",T&&!I)})}let l=Math.max(0,n.bottomY()-1.6);l>9999?(this.set("alt",(l/1e3).toFixed(1)),this.set("altu","km")):(this.set("alt",en(l)),this.set("altu","m")),this.set("vy",en(-n.vy)),this.set("vx",ef(n.vx)),this.set("th",ef(n.th*57.2958));let u=n.x;this.set("dx",Math.abs(u)>9999?(u/1e3).toFixed(1)+" k":en(u)),this.set("mach",n.mach.toFixed(2)),this.cls("machrow","hide",n.mach<.3);let h=n.bottomY()<Et.armH+400&&n.phase==="land"&&-n.vy>(n.pinY()-Et.armH)*.35+6;if(this.cls("vy","bad",h),this.engDots){let T="",R=0,I=n.mode==="big"?n.V.sets.big:n.mode==="small"?n.V.sets.small:n.ship?3:13;for(let D of n.eng){let k=D.st===2?"r":D.st===1?"s":D.st===3?"f":"o";T+=k,D.st===2&&R++}T!==this.lastEngKey&&(this.lastEngKey=T,this.engDots.forEach((D,k)=>D.setAttribute("class",T[k]))),this.set("engn",`${R}/${I}`)}let d=n.fuel/(n.reserve?24e4:n.fuel0);this.style("fuel","transform",`scaleX(${Math.max(0,Math.min(1,d)).toFixed(3)})`),this.style("fuelres","left",n.reserve?`${(n.reserve/24e4*100).toFixed(1)}%`:"-10%"),this.set("fuelp",Math.max(0,d*100).toFixed(d<.1?1:0)+"%"),this.cls("fuel","low",d<.12);let g=i.thrInput;this.style("thrf","transform",`scaleY(${g.toFixed(3)})`),this.style("thrk","bottom",`calc(${(g*100).toFixed(1)}% - 22px)`),this.set("thrv",g<.05?"AUS":Math.round(g*100)+"%");let v=i.assist!=="pro"&&e&&(n.phase==="land"||e.ignite||n.phase==="boost");this.cls("thrg","on",!!v),v&&this.style("thrg","bottom",`${(Math.max(.05,e.thr)*100).toFixed(1)}%`);let m="";if(i.assist!=="pro"&&e&&(n.phase==="boost"&&n.mode==="off"?m="boost":n.phase==="entry"&&n.mode==="off"&&n.landUnlocked&&n.vy<-5?m="ign":n.phase==="sep"&&(m="flip")),this.cls("cue","on",!!m),m==="ign"){let T=Math.max(0,(n.y-e.burnAlt)/Math.max(1,-n.vy));this.set("cuet",T<.4?"Jetzt z\xFCnden!":"Landez\xFCndung in"),this.set("cuev",T<.4?"SCHUB \u25B2":T.toFixed(1)+" s"),this.style("cueb","transform",`scaleX(${Math.min(1,T/12).toFixed(3)})`),this.cls("cue","now",T<.4)}else m==="boost"?(this.set("cuet","R\xFCckstoss-Z\xFCndung"),this.set("cuev","SCHUB \u25B2"),this.style("cueb","transform","scaleX(1)"),this.cls("cue","now",!0)):m==="flip"&&(this.set("cuet","Booster dreht"),this.set("cuev","\u2026"),this.style("cueb","transform","scaleX(0.5)"),this.cls("cue","now",!1));let p=i.assist==="easy"&&e&&(n.phase==="entry"||n.phase==="land"||n.phase==="boost"),y=0;if(p){let T=e.aCmd*(i.inputSign||1);y=Math.abs(T)>.35?Math.sign(T):0,n.phase==="boost"&&n.pred&&(y=0)}this.cls("al","on",y<0),this.cls("ar","on",y>0);let M=n.pinY()-Et.armH,x=(n.phase==="land"||n.phase==="caught")&&M<120&&i.assist!=="pro";if(this.cls("win","on",x),x){let T=Math.max(-.1,Math.min(1.1,M/40));this.style("wpin","bottom",`${(T*100).toFixed(1)}%`),this.cls("wpin","ok",M>.8&&M<3+Math.abs(n.vy)*.9&&Math.abs(n.vx)<1.8);let R=Math.max(-1,Math.min(1,n.x/6));this.style("wx","left",`${(50+R*50).toFixed(1)}%`),this.cls("wx","ok",Math.abs(n.x)<1.1)}let w=n.phase==="land"&&n.arms.tgt!==n.arms.phi-999&&n.arms.p<.02&&n.arms.reopenAt<0&&M<160&&M>.8&&M<3+Math.abs(n.vy)*.9&&Math.abs(n.x)<2.2;this.cls("close","on",n.phase==="land"&&M<220||n.arms.p>.01),this.cls("close","ready",w),this.cls("close","closing",n.arms.p>.01&&n.arms.p<.999),this.cls("close","closed",n.arms.p>=.999),this.style("close","--p",n.arms.p.toFixed(3));let A="";n.fuel<=0&&n.phase!=="caught"&&n.phase!=="done"?A="Kein Treibstoff":d<.06&&n.mode!=="off"?A="Treibstoff knapp":n.phase==="boost"&&n.reserve&&n.fuel<n.reserve?A="Landereserve \u2013 Schub weg!":h&&n.mode!=="off"&&i.assist!=="pro"?A="Zu schnell \u2013 mehr Schub":n.phase==="land"&&Math.abs(n.x)>18&&M<60&&(A="Zu weit neben dem Turm"),this.set("warn",A),this.cls("warn","on",!!A);let _=i.stick;_&&_.active?(this.cls("stick","on",!0),this.style("stick","transform",`translate(${_.x0-60}px, ${_.y0-60}px)`),this.style("knob","transform",`translate(${Math.max(-62,Math.min(62,_.x-_.x0))}px, 0px)`)):this.cls("stick","on",!1)}replay(t,e,i){if(this.root.classList.toggle("replay",t),!t||!e)return;let n=e.T0+e.t,r=Math.floor(n/60),a=n%60;this.rp.t.textContent=`${String(r).padStart(2,"0")}:${a.toFixed(1).padStart(4,"0")}`,this.rp.alt.textContent=en(Math.max(0,e.bottomY()-1.6))+" m",this.rp.sp.textContent=en(Math.hypot(e.vx,e.vy)*3.6)+" km/h",this.rp.speed.textContent=i>=.99?"1\xD7":i>=.45?"\xBD\xD7":"\xBC\xD7"}};var nf=(s,t=document)=>t.querySelector(s),Te=s=>String(s).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),ir='<svg viewBox="0 0 24 24"><path d="M12 2.6l2.9 6 6.6.8-4.9 4.6 1.3 6.5L12 17.3l-5.9 3.2 1.3-6.5L2.5 9.4l6.6-.8z"/></svg>',sa='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 018 0v3"/></svg>',ra='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M15 5l-7 7 7 7"/></svg>',Ch={day:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="4.2"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M5 19l2-2M17 7l2-2"/></svg>',afternoon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="13" r="4"/><path d="M12 4v2.5M4.5 13H2M22 13h-2.5M6.3 7.3l1.6 1.6M17.7 7.3l-1.6 1.6M3 19h18"/></svg>',dusk:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M7 17a5 5 0 0110 0"/><path d="M2 17h20M5 21h14M12 7v3M4.9 10.9l1.8 1.8M19.1 10.9l-1.8 1.8"/></svg>',night:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M20 14.5A8 8 0 019.5 4a8 8 0 1010.5 10.5z"/></svg>',dawn:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 10h18M5 14h14M3 18h18M8 6h8"/></svg>',storm:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M7 15a4 4 0 01.5-8 5.5 5.5 0 0110.6 1.5A3.5 3.5 0 0117.5 15"/><path d="M12 13l-2 4h3l-2 4"/></svg>'},Zx={sep:"Ab Stufentrennung",entry:"Ab Wiedereintritt",final:"Endanflug",ship:"Bauchlage"},kl=class{constructor(t){this.app=t,this.root=nf("#ui"),this.screen="boot",this.stack=[],this.root.addEventListener("click",e=>this.onClick(e)),this.root.addEventListener("input",e=>this.onInput(e)),this.toastEl=nf("#toast")}get save(){return this.app.save}get game(){return this.app.game}click(){this.app.audio.ui("tap")}show(t,e,i=""){this.screen=t;let n=this.root.querySelector(".screen.on"),r=document.createElement("div");return r.className="screen "+t+" "+i,r.innerHTML=e,r.dataset.screen=t,this.root.appendChild(r),requestAnimationFrame(()=>r.classList.add("on")),n&&(n.classList.remove("on"),n.classList.add("out"),setTimeout(()=>n.remove(),420)),document.body.dataset.screen=t,r}hideAll(){this.screen="none",document.body.dataset.screen="none";for(let t of this.root.querySelectorAll(".screen"))t.classList.remove("on"),t.classList.add("out"),setTimeout(()=>t.remove(),420)}toast(t,e,i){let n=this.toastEl;n.innerHTML=`<span>${Te(t)}</span>`+(e?`<button class="btn sm">${Te(e)}</button>`:""),n.classList.add("on"),clearTimeout(this.toastT),e?n.querySelector("button").onclick=()=>{n.classList.remove("on"),i&&i()}:this.toastT=setTimeout(()=>n.classList.remove("on"),2600)}updateAvailable(t){this.toast("Neue Version verf\xFCgbar \u2013 Neu laden","Neu laden",t),this.toastEl.classList.add("update")}title(){let t=Hn(this.save);this.show("title",`
      <div class="logo-wrap">
        <div class="logo" aria-label="CHOPSTIX"><span class="lg-c">CHOP</span><span class="lg-s">STIX</span><i class="stick s1"></i><i class="stick s2"></i></div>
        <div class="tagline">Fang den Booster. Mit dem Turm.</div>
      </div>
      <div class="title-menu">
        <button class="btn primary big" data-a="play">Spielen</button>
        <div class="row">
          <button class="btn" data-a="hangar">Hangar</button>
          <button class="btn" data-a="ach">Erfolge</button>
          <button class="btn icon-only" data-a="settings" aria-label="Einstellungen"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="3.2"/><path d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3M5.3 5.3l2.1 2.1M16.6 16.6l2.1 2.1M5.3 18.7l2.1-2.1M16.6 7.4l2.1-2.1"/></svg></button>
        </div>
        <div class="title-stats"><span class="stars-inline">${ir}<b>${t}</b>/30</span><span>${this.save.stats.catches} F\xE4nge</span></div>
      </div>
      <div class="title-foot">v${jr} \xB7 Fan-Projekt, nicht mit SpaceX verbunden</div>`),this.app.audio.setMode("title")}missions(){let t=this.game,e=this.save,i=vi.map(n=>{let r=e.missions[n.id]||{},a=t.missionUnlocked(n.id),o=[0,1,2].map(l=>`<i class="${(r.stars|0)>l?"on":""}">${ir}</i>`).join(""),c=n.bonus?"12 Sterne n\xF6tig":n.id===10?"Mission 8 abschliessen":`Mission ${n.id-1} abschliessen`;return`<button class="mcard ${a?"":"locked"} ${r.done?"done":""} tod-${n.tod}" data-a="${a?"brief":"lockedm"}" data-id="${n.id}">
        <div class="mc-num">${String(n.id).padStart(2,"0")}</div>
        <div class="mc-body"><b>${Te(n.name)}</b><small>${Te(n.sub)}</small>
          <div class="mc-meta"><span class="tod">${Ch[n.tod]||""}${Te(os[n.tod].label)}</span>${n.bonus?'<span class="tag">Bonus</span>':""}${n.timeTrial?'<span class="tag">Zeit</span>':""}</div></div>
        <div class="mc-right">${a?`<div class="mc-stars">${o}</div>${r.best?`<small>${en(r.best)}</small>`:""}`:`<div class="mc-lock">${sa}<small>${c}</small></div>`}</div>
      </button>`}).join("");this.show("missions",`
      <header class="bar"><button class="icon-btn" data-a="back">${ra}</button><h2>Missionen</h2><span class="stars-inline">${ir}<b>${Hn(e)}</b>/30</span></header>
      <div class="scroll"><div class="mlist">${i}</div></div>`)}brief(t){let e=vi.find(c=>c.id===t);this.sel=t;let i=this.save.settings,n=this.save.missions[t]||{},r=e.wind.base+e.wind.gust,a=i.assist,o=e.start==="sep"?Math.round(e.fuel/2550):Math.round(e.fuel/840);this.show("brief",`
      <header class="bar"><button class="icon-btn" data-a="back">${ra}</button><h2>Mission ${e.id}</h2><span></span></header>
      <div class="scroll"><div class="brief-card glass">
        <div class="kicker">${Te(Zx[e.start])} \xB7 ${Te(os[e.tod].label)}</div>
        <h1>${Te(e.name)}</h1>
        <p>${Te(e.brief)}</p>
        <div class="chips">
          <span class="chip">${Ch[e.tod]}${Te(os[e.tod].label)}</span>
          <span class="chip"><b>Wind</b> bis ${r.toFixed(0)} m/s ${e.wind.dir<0?"von See":"von Land"}</span>
          <span class="chip"><b>Fahrzeug</b> ${e.vehicle==="ship"?"Starship":"Super Heavy"}</span>
          ${e.failP?`<span class="chip warn"><b>Z\xFCndaussetzer</b> ${Math.round(e.failP*100)} %</span>`:""}
          ${e.timeTrial?`<span class="chip"><b>Gold</b> ${e.timeTrial.gold} s \xB7 Silber ${e.timeTrial.silver} s \xB7 Bronze ${e.timeTrial.bronze} s</span>`:""}
        </div>
        ${n.best?`<div class="best">Bestwert <b>${en(n.best)}</b>${n.time?` \xB7 Bestzeit ${n.time.toFixed(1)} s`:""}</div>`:""}
        <div class="label">Hilfen</div>
        <div class="seg" data-k="assist">${["easy","normal","pro"].map(c=>`<button data-v="${c}" class="${a===c?"on":""}">${pl[c].name}</button>`).join("")}</div>
        <small class="assist-desc">${Te(pl[a].desc)}</small>
      </div></div>
      <div class="foot"><button class="btn ghost" data-a="tutorial">Steuerung</button><button class="btn primary big" data-a="go">Start</button></div>`)}tutorial(t){this.tutAfter=t,this.tutI=0;let e=[{t:"Lage steuern",d:"Linker Daumen: nach links oder rechts ziehen. Der Booster neigt sich und driftet in diese Richtung \u2013 im Wiedereintritt \xFCber die Gridfins, sp\xE4ter \xFCber die Triebwerke.",ill:"stick"},{t:"Schub geben",d:"Rechter Daumen: nach oben schieben f\xFCr mehr Schub, ganz nach unten schaltet die Triebwerke ab. Z\xFCnde rechtzeitig \u2013 die Anzeige hilft dir. Der Treibstoff ist begrenzt.",ill:"thr"},{t:"Schweben & ausrichten",d:"Unter 50 m/s schalten 13 auf 3 Triebwerke. Bring den Booster genau zwischen die Arme, langsam und senkrecht. Die Bolzen m\xFCssen knapp \xFCber den Schienen sein.",ill:"win"},{t:"Arme schliessen",d:"Tippe auf \xABArme schliessen\xBB, wenn die Anzeige gr\xFCn ist. Dann sinkt der Booster auf die Schienen: je sanfter, gerader und mittiger, desto besser die Note.",ill:"arms"}];this.tutSlides=e;let i=e.map((n,r)=>`<div class="tslide ${r===0?"on":""}"><div class="ill ill-${n.ill}"><i></i><b></b></div><h2>${n.t}</h2><p>${n.d}</p></div>`).join("");this.show("tutorial",`<div class="tut glass">${i}<div class="dots">${e.map((n,r)=>`<i class="${r===0?"on":""}"></i>`).join("")}</div>
      <div class="row"><button class="btn ghost" data-a="tutskip">\xDCberspringen</button><button class="btn primary" data-a="tutnext">Weiter</button></div></div>`)}tutStep(){this.tutI++;let t=this.root.querySelector(".screen.tutorial.on")||this.root.querySelector(".screen.tutorial");if(this.tutI>=this.tutSlides.length)return this.tutDone();t.querySelectorAll(".tslide").forEach((e,i)=>e.classList.toggle("on",i===this.tutI)),t.querySelectorAll(".dots i").forEach((e,i)=>e.classList.toggle("on",i===this.tutI)),this.tutI===this.tutSlides.length-1&&(t.querySelector('[data-a="tutnext"]').textContent="Los gehts")}tutDone(){this.save.tutorialDone=!0,tn(this.save);let t=this.tutAfter;this.tutAfter=null,t?t():this.title()}launch(t){this.hideAll(),this.app.unlockAudio(),this.game.startMission(t,{})}onFlightStart(){this.screen="flight",document.body.dataset.screen="flight"}onReplay(t){document.body.dataset.screen=t?"replay":"flight"}pause(){this.game.state!=="flight"&&this.game.state!=="replay"||(this.game.pause(!0),this.show("pause",`<div class="pause-card glass">
      <h2>Pause</h2><small>${Te(this.game.mission.id+" \xB7 "+this.game.mission.name)}</small>
      <button class="btn primary big" data-a="resume">Weiter</button>
      <button class="btn" data-a="restart">Neu starten</button>
      <button class="btn" data-a="psettings">Einstellungen</button>
      <button class="btn ghost" data-a="quit">Mission verlassen</button></div>`,"modal"))}resume(){this.hideAll(),this.screen="flight",document.body.dataset.screen=this.game.state==="replay"?"replay":"flight",this.game.pause(!1)}showResult(t){let e=t.mission,i=[];if(t.caught){let l=t.c;i.push(["Sinkrate",l.vy.toFixed(1)+" m/s",l.parts.gv]),i.push(["Versatz",l.off.toFixed(2)+" m",l.parts.gx]),i.push(["Neigung",l.tilt.toFixed(1)+"\xB0",l.parts.gt]),i.push(["Seitw\xE4rts",l.vx.toFixed(1)+" m/s",l.parts.gh]),i.push(["Treibstoff",Math.max(0,l.fuelPct).toFixed(1)+" %",-1]),i.push(["Flugzeit",l.t.toFixed(1)+" s",-1]),l.attempts&&i.push(["Fehlversuche",String(l.attempts),2])}else t.crash&&i.push(["Ursache",t.crash.why,3],["Aufprall",(t.crash.sp*3.6).toFixed(0)+" km/h",3]);let n=[0,1,2].map(l=>`<i class="${t.stars>l?"on":""}" style="--d:${.5+l*.25}s">${ir}</i>`).join(""),r=t.medal?`<div class="medal ${t.medal}">${t.medal==="gold"?"Gold":t.medal==="silver"?"Silber":"Bronze"}</div>`:"",a=[...t.achievements.map(l=>`<div class="unl ach"><b>Erfolg</b>${Te(l.name)}</div>`),...t.unlocks.map(l=>`<div class="unl"><b>Neu</b>${Te(l)}</div>`)].join(""),o=t.next&&this.game.missionUnlocked(t.next.id);this.show("result",`<div class="res glass ${t.caught?"ok":"fail"} g${t.grade}">
      <div class="kicker">Mission ${e.id} \xB7 ${Te(e.name)}</div>
      <div class="grade">${t.caught?Te(t.gradeName):"Fehlgeschlagen"}</div>
      <div class="sub">${t.caught?t.grade===0?"Butterweich in die Arme.":t.grade===1?"Sauber gefangen.":"Gefangen \u2013 aber das hat gescheppert.":Te(t.crash?t.crash.why:"")}</div>
      <div class="res-stars">${n}</div>${r}
      <div class="rows">${i.map(([l,u,f])=>`<div class="r ${f>=0?"q"+f:""}"><span>${l}</span><b>${Te(u)}</b></div>`).join("")}</div>
      ${t.caught?`<div class="score"><small>Punkte</small><b data-count="${t.score}">0</b>${t.newBest?"<em>Neuer Bestwert!</em>":`<small>Bestwert ${en(t.best)}</small>`}</div>`:""}
      ${a?`<div class="unls">${a}</div>`:""}
      <div class="res-btns">
        <button class="btn" data-a="replay">Wiederholung</button>
        <button class="btn" data-a="retry">Nochmal</button>
        ${o?`<button class="btn primary" data-a="next" data-id="${t.next.id}">Weiter</button>`:'<button class="btn primary" data-a="tomissions">Missionen</button>'}
      </div>
      <button class="link" data-a="tomissions2">Zur Missionsauswahl</button></div>`,"result-screen");let c=this.root.querySelector(".screen.result [data-count]");if(c){let l=+c.dataset.count,u=performance.now(),f=()=>{let h=Math.min(1,(performance.now()-u-700)/1300);c.textContent=en(Math.max(0,l*(1-Math.pow(1-Math.max(0,h),3)))),h<1&&requestAnimationFrame(f)};f()}for(let l=0;l<t.stars;l++)setTimeout(()=>this.app.audio.ui("star"),520+l*250);(t.unlocks.length||t.achievements.length)&&setTimeout(()=>this.app.audio.ui("unlock"),1500)}hangar(t="livery"){this.hTab=t;let e=this.save,i=Hn(e),n=this.game,r="";t==="livery"?r=Un.map(a=>{let o=i>=a.stars,c=e.sel.livery===a.id;return`<button class="hcard ${o?"":"locked"} ${c?"on":""}" data-a="${o?"setlivery":"lockedh"}" data-id="${a.id}"><span class="sw" style="--c:rgb(${a.tint.map(l=>Math.round(l*255)).join(",")})"></span><b>${Te(a.name)}</b><small>${o?Te(a.desc):`${sa} ${a.stars} Sterne`}</small></button>`}).join(""):t==="variant"?r=ls.map(a=>{let o=n.variantUnlocked(a),c=e.sel.variant===a.id,l=a.req?a.req.perfect?"Ein perfekter Fang":`${a.req.missions} Missionen abschliessen`:"";return`<button class="hcard ${o?"":"locked"} ${c?"on":""}" data-a="${o?"setvariant":"lockedh"}" data-id="${a.id}"><span class="vbadge">${Te(a.name.replace("Block ","B"))}</span><b>${Te(a.name)}</b><small>${o?Te(a.desc):`${sa} ${l}`}</small></button>`}).join(""):r=Js.map(a=>{let o=n.isCamUnlocked(a.id),c=e.sel.camera===a.id;return`<button class="hcard ${o?"":"locked"} ${c?"on":""}" data-a="${o?"setcam":"lockedh"}" data-id="${a.id}"><span class="vbadge">${Ch.day.replace('circle cx="12" cy="12" r="4.2"','rect x="4" y="7" width="12" height="10" rx="2"')}</span><b>${Te(a.name)}</b><small>${o?"Startkamera im Flug":`${sa} Mission ${a.req.mission} abschliessen`}</small></button>`}).join(""),this.show("hangar",`<header class="bar"><button class="icon-btn" data-a="back">${ra}</button><h2>Hangar</h2><span class="stars-inline">${ir}<b>${i}</b></span></header>
      <div class="tabs">${[["livery","Lackierung"],["variant","Variante"],["camera","Kamera"]].map(([a,o])=>`<button data-a="htab" data-id="${a}" class="${t===a?"on":""}">${o}</button>`).join("")}</div>
      <div class="hangar-space"></div>
      <div class="hsheet glass"><div class="hgrid">${r}</div></div>`)}achievements(){let t=this.save,e=Object.keys(t.ach).length,i=t.stats,n=Qr.map(r=>`<div class="ach ${t.ach[r.id]?"on":""}"><i>${t.ach[r.id]?ir:sa}</i><div><b>${Te(r.name)}</b><small>${Te(r.desc)}</small></div></div>`).join("");this.show("achs",`<header class="bar"><button class="icon-btn" data-a="back">${ra}</button><h2>Erfolge</h2><span>${e}/${Qr.length}</span></header>
      <div class="scroll"><div class="statgrid glass">
        <div><b>${i.catches}</b><small>F\xE4nge</small></div><div><b>${i.perfect}</b><small>Perfekt</small></div><div><b>${i.bestStreak}</b><small>Beste Serie</small></div>
        <div><b>${i.explosions}</b><small>Explosionen</small></div><div><b>${i.flights}</b><small>Fl\xFCge</small></div><div><b>${Math.round(i.playTime/60)}</b><small>Minuten</small></div>
      </div><div class="achlist">${n}</div></div>`)}settings(t){this.setFromPause=!!t;let e=this.save.settings,i=(a,o)=>`<div class="seg" data-k="${a}">${o.map(([c,l])=>`<button data-v="${c}" class="${String(e[a])===String(c)?"on":""}">${l}</button>`).join("")}</div>`,n=(a,o,c)=>`<label class="tog"><span>${o}${c?`<small>${c}</small>`:""}</span><input type="checkbox" data-k="${a}" ${e[a]?"checked":""}><i></i></label>`,r=(a,o,c,l,u)=>`<label class="sl"><span>${o}</span><input type="range" data-k="${a}" min="${c}" max="${l}" step="${u}" value="${e[a]}"></label>`;this.show("settings",`<header class="bar"><button class="icon-btn" data-a="back">${ra}</button><h2>Einstellungen</h2><span></span></header>
      <div class="scroll"><div class="sets">
        <section class="glass"><h3>Grafik</h3>${i("quality",[["auto","Auto"],["low","Niedrig"],["med","Mittel"],["high","Hoch"]])}
          ${n("autoFps","Dynamische Aufl\xF6sung","H\xE4lt die Bildrate stabil (bei \xABAuto\xBB)")}${n("shake","Kamerawackeln")}
          <small class="note">Partikel- und Schattenqualit\xE4t werden beim n\xE4chsten Start vollst\xE4ndig \xFCbernommen.</small></section>
        <section class="glass"><h3>Ton</h3>${r("music","Musik",0,1,.05)}${r("sfx","Effekte",0,1,.05)}${n("voice","Sprachausgabe","Funkspr\xFCche der Flugleitung vorlesen")}${n("muted","Alles stumm")}</section>
        <section class="glass"><h3>Steuerung</h3>${i("control",[["stick","Daumen-Stick"],["tilt","Neigen"]])}${r("sens","Empfindlichkeit",.5,1.6,.05)}${n("haptics","Vibration","Wo vom Ger\xE4t unterst\xFCtzt")}</section>
        <section class="glass"><h3>Hilfen</h3>${i("assist",[["easy","Leicht"],["normal","Normal"],["pro","Profi"]])}${n("autoClose","Arme automatisch schliessen","Nur auf \xABLeicht\xBB")}${n("skipReplay","Wiederholung \xFCberspringen")}
          <button class="btn sm ghost" data-a="tutorial2">Tutorial ansehen</button></section>
        <section class="glass about"><h3>\xDCber</h3><p><b>CHOPSTIX</b> v${jr}</p><p>Fan-Projekt, nicht mit SpaceX verbunden. \xABSuper Heavy\xBB, \xABStarship\xBB und \xABMechazilla\xBB werden nur beschreibend verwendet. Alle Grafiken, Modelle und Kl\xE4nge werden im Spiel prozedural erzeugt.</p>
          <p class="small">Schriften: Barlow (SIL Open Font License). Grafik-Engine: three.js (MIT).</p>
          <button class="btn sm danger" data-a="reset">Spielstand zur\xFCcksetzen</button></section>
      </div></div>`)}applySetting(t,e){let i=this.save.settings;i[t]=e,tn(this.save);let n=this.app;["music","sfx","voice","muted"].includes(t)&&n.audio.applySettings(i),(t==="quality"||t==="autoFps")&&n.game.setQualityMode(i.quality),t==="control"&&(n.input.mode=e,e==="tilt"&&n.input.requestTilt().then(r=>{r||(this.toast("Neigungssensor nicht erlaubt"),i.control="stick",n.input.mode="stick",tn(this.save))})),t==="sens"&&(n.input.sens=e)}back(){this.click();let t=this.screen;if(t==="brief")return this.missions();if(t==="settings"&&this.setFromPause)return this.pause();this.title()}onInput(t){let e=t.target,i=e.dataset.k;i&&(e.type==="range"?this.applySetting(i,parseFloat(e.value)):e.type==="checkbox"&&(this.applySetting(i,e.checked),this.click()))}onClick(t){let e=t.target.closest(".seg button");if(e){let a=e.parentElement,o=a.dataset.k,c=e.dataset.v;if(a.querySelectorAll("button").forEach(l=>l.classList.toggle("on",l===e)),this.click(),this.applySetting(o,c),o==="assist"){let l=this.root.querySelector(".screen.on .assist-desc");l&&(l.textContent=pl[c].desc)}return}let i=t.target.closest("[data-a]");if(!i)return;let n=i.dataset.a,r=i.dataset.id;switch(this.app.unlockAudio(),n){case"play":this.click(),this.missions();break;case"hangar":this.click(),this.hangar();break;case"ach":this.click(),this.achievements();break;case"settings":this.click(),this.settings(!1);break;case"back":this.back();break;case"brief":this.click(),this.brief(+r);break;case"lockedm":this.app.audio.ui("back"),this.toast("Noch gesperrt");break;case"lockedh":this.app.audio.ui("back"),this.toast("Noch nicht freigeschaltet");break;case"go":this.click();{let a=vi.find(o=>o.id===this.sel);!this.save.tutorialDone&&a.tutorial?this.tutorial(()=>this.launch(this.sel)):this.launch(this.sel)}break;case"tutorial":this.click(),this.tutorial(()=>this.brief(this.sel));break;case"tutorial2":this.click(),this.tutorial(()=>this.settings(this.setFromPause));break;case"tutnext":this.click(),this.tutStep();break;case"tutskip":this.click(),this.tutDone();break;case"resume":this.click(),this.resume();break;case"restart":this.click(),this.hideAll(),this.game.startMission(this.game.mission.id,{});break;case"psettings":this.click(),this.settings(!0);break;case"quit":this.click(),this.game.quitToTitle(),this.missions(),this.app.audio.setMode("menu");break;case"replay":this.click(),this.hideAll(),this.game.startReplay();break;case"retry":this.click(),this.hideAll(),this.game.startMission(this.game.mission.id,{});break;case"next":this.click(),this.brief(+r),this.game.quitToTitle();break;case"tomissions":case"tomissions2":this.click(),this.game.quitToTitle(),this.missions(),this.app.audio.setMode("menu");break;case"htab":this.click(),this.hangar(r);break;case"setlivery":this.save.sel.livery=r,tn(this.save),this.app.audio.ui("unlock"),this.game.setVehicle("booster"),this.hangar("livery");break;case"setvariant":this.save.sel.variant=r,tn(this.save),this.app.audio.ui("unlock"),this.game.attract(!1),this.hangar("variant");break;case"setcam":this.save.sel.camera=r,tn(this.save),this.click(),this.hangar("camera");break;case"reset":if(i.dataset.confirm){let a=tr();Object.keys(this.save).forEach(o=>delete this.save[o]),Object.assign(this.save,a),Oi(this.save),this.toast("Spielstand zur\xFCckgesetzt"),this.title()}else i.dataset.confirm="1",i.textContent="Wirklich zur\xFCcksetzen?";break}}};var zl=new URLSearchParams(location.search),Ih=zl.get("test")==="1";["gesturestart","gesturechange","gestureend"].forEach(s=>document.addEventListener(s,t=>t.preventDefault(),{passive:!1}));document.addEventListener("touchmove",s=>{let t=s.target;for(;t&&t!==document.body;){if(t.classList&&(t.classList.contains("scroll")||t.classList.contains("hsheet")||t.classList.contains("res")))return;t=t.parentNode}s.preventDefault()},{passive:!1});document.addEventListener("contextmenu",s=>s.preventDefault());document.addEventListener("dblclick",s=>s.preventDefault(),{passive:!1});document.addEventListener("selectstart",s=>s.preventDefault());function sf(){let s=Qd();zl.get("notut")==="1"&&(s.tutorialDone=!0),Oi(s);let t=document.getElementById("gl"),e=new Fl;e.applySettings(s.settings);let i=new Bl(document.getElementById("touch"));i.mode=s.settings.control==="tilt"?"tilt":"stick",i.sens=s.settings.sens,i.haptic=M=>{try{s.settings.haptics&&navigator.vibrate&&navigator.vibrate(M)}catch{}};let n={save:s,audio:e,input:i,test:Ih,testQuality:zl.get("q")};n.unlockAudio=()=>{e.unlock(),e.applySettings(s.settings)},n.hud=new Ol(document.getElementById("hud"),n);let r=new kl(n);n.ui=r;let a;try{a=new Nl(t,n)}catch(M){console.warn("WebGL nicht verf\xFCgbar",M),document.getElementById("ui").innerHTML='<div class="nogl"><h2>CHOPSTIX</h2><p>Dein Browser unterst\xFCtzt kein WebGL 2. Bitte \xF6ffne das Spiel in Safari oder Chrome.</p></div>';return}n.game=a;let o=document.getElementById("hud"),c=(M,x)=>{o.querySelector(M).addEventListener("pointerdown",w=>{w.preventDefault(),w.stopPropagation(),x()})};c(".h-close",()=>a.closeArms()),c(".h-cam",()=>a.cycleCamera()),c(".h-pause",()=>{e.ui("tap"),r.pause()}),c(".rp-skip",()=>{e.ui("tap"),a.skipReplay()}),i.onClose=()=>a.closeArms(),i.onCamera=()=>a.cycleCamera(),i.onPause=()=>{a.paused?r.resume():r.pause()};let l=()=>a.resize(window.innerWidth,window.innerHeight);window.addEventListener("resize",l),window.addEventListener("orientationchange",()=>setTimeout(l,200)),l();let u=performance.now(),f=0,h=new Float32Array(600),d=0,g=M=>{requestAnimationFrame(g);let x=(M-u)/1e3;if(u=M,a.manual)return;x=Math.min(.1,Math.max(0,x));let S=performance.now();a.frame(x),a.monitor(x),h[d++%600]=performance.now()-S,f++,f===2&&document.body.classList.add("ready")};requestAnimationFrame(M=>{u=M,g(M)}),setTimeout(()=>{document.getElementById("boot").classList.add("off"),r.title()},Ih?50:900);let v=()=>n.unlockAudio();if(window.addEventListener("pointerdown",v,{passive:!0}),window.addEventListener("touchend",v,{passive:!0}),window.addEventListener("keydown",v,{passive:!0}),document.addEventListener("visibilitychange",()=>{document.hidden&&(a.state==="flight"&&!a.paused&&!Ih&&r.pause(),Oi(s))}),window.addEventListener("pagehide",()=>Oi(s)),"serviceWorker"in navigator&&location.protocol!=="file:"&&zl.get("nosw")!=="1"){let M=!1,x=!1;navigator.serviceWorker.addEventListener("controllerchange",()=>{M||!x||(M=!0,Oi(s),location.reload())}),navigator.serviceWorker.register("sw.js").then(S=>{let w=A=>r.updateAvailable(()=>{x=!0,Oi(s),A.postMessage({type:"SKIP_WAITING"}),setTimeout(()=>location.reload(),1500)});S.waiting&&navigator.serviceWorker.controller&&w(S.waiting),S.addEventListener("updatefound",()=>{let A=S.installing;A&&A.addEventListener("statechange",()=>{A.state==="installed"&&navigator.serviceWorker.controller&&w(A)})}),setInterval(()=>S.update().catch(()=>{}),1800*1e3),document.addEventListener("visibilitychange",()=>{document.hidden||S.update().catch(()=>{})})}).catch(()=>{})}let m=new Uint8Array(4),p=()=>{try{let M=a.renderer.getContext();M.readPixels(0,0,1,1,M.RGBA,M.UNSIGNED_BYTE,m)}catch{}},y=M=>{a.frame(M),p()};window.__cx={version:jr,game:a,ui:r,save:s,audio:e,input:i,hud:n.hud,state:()=>({state:a.state,screen:r.screen,phase:a.sim&&a.sim.phase,t:a.sim&&a.sim.t,y:a.sim&&a.sim.y,paused:a.paused}),start:(M,x={})=>{r.hideAll(),n.unlockAudio(),a.startMission(M,Object.assign({auto:!0},x))},setAuto:M=>{a.sim&&(a.sim.auto=M?new Fn:null)},speed:M=>{a.extScale=M},result:()=>a.result&&{caught:a.result.caught,grade:a.result.gradeName,stars:a.result.stars,score:a.result.score,why:a.result.crash&&a.result.crash.why},setCamera:M=>a.setCamera(M),manual:M=>{a.manual=!!M},step:(M=1,x=1/30)=>{for(let S=0;S<M;S++)y(x);return a.state},simulate:(M,x=1/30)=>{let S=Math.round(M/x);for(let w=0;w<S;w++)w%6===5||w===S-1?y(x):(a.sim.update(x,a.extScale),a.handleEvents(a.sim,!0),a.rec.record(a.sim),a.state==="flight"&&(a.sim.phase==="caught"||a.sim.phase==="crashed"||a.sim.phase==="done")&&y(x));return a.state},until:(M,x=240,S=1/30)=>{let w=Math.round(x/S),A=0;for(;A<w&&!M(a);A++){let _=a.state,T=a.sim;if(!(A%8!==7&&(_==="title"||_==="flight"&&!a.paused&&T.phase!=="caught"&&T.phase!=="done"&&T.phase!=="crashed"))){y(S);continue}T.update(S,_==="title"?1:a.extScale),a.handleEvents(T,_==="flight"),_==="flight"&&a.rec.record(T)}return[+(A*S).toFixed(1),a.state,a.sim&&a.sim.phase]},missions:vi.length,frameStats:()=>{let M=Math.min(d,600),x=Array.from(h.slice(0,M)).sort((S,w)=>S-w);return{n:M,avg:x.reduce((S,w)=>S+w,0)/(M||1),p50:x[Math.floor(M*.5)]||0,p95:x[Math.floor(M*.95)]||0,max:x[M-1]||0,fps:a.fps||0,tier:a.quality.tier}},resetFrameStats:()=>{d=0},frames:()=>f}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",sf):sf();})();
