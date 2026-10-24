(()=>{var mu=0,wc=1,gu=2;var jn=1,vu=2,Fs=3,Wi=0,Ze=1,ke=2,Xi=0,Cn=1,Ve=2,Tc=3,Ec=4,xu=5;var Qn=100,_u=101,yu=102,Mu=103,bu=104,Su=200,wu=201,Tu=202,Eu=203,Ac=204,Rc=205,Au=206,Ru=207,Cu=208,Iu=209,Pu=210,Lu=211,Du=212,Nu=213,Uu=214,Da=0,Na=1,Ua=2,ws=3,Fa=4,Ba=5,Oa=6,ka=7,Cc=0,Fu=1,Bu=2,pi=0,Ic=1,Pc=2,Lc=3,Dc=4,Nc=5,Uc=6,Fc=7;var Bc=300,In=301,ts=302,vo=303,xo=304,Or=306,an=1e3,ti=1001,za=1002,Ye=1003,Ou=1004;var kr=1005;var Pe=1006,_o=1007;var Pn=1008;var ei=1009,Oc=1010,kc=1011,Bs=1012,yo=1013,Pi=1014,yi=1015,mi=1016,Mo=1017,bo=1018,Os=1020,zc=35902,Hc=35899,Vc=1021,Gc=1022,Mi=1023,Oi=1026,Ln=1027,So=1028,wo=1029,Dn=1030,To=1031;var Eo=1033,zr=33776,Hr=33777,Vr=33778,Gr=33779,Ao=35840,Ro=35841,Co=35842,Io=35843,Po=36196,Lo=37492,Do=37496,No=37488,Uo=37489,Wr=37490,Fo=37491,Bo=37808,Oo=37809,ko=37810,zo=37811,Ho=37812,Vo=37813,Go=37814,Wo=37815,Xo=37816,qo=37817,Yo=37818,$o=37819,Zo=37820,Jo=37821,Ko=36492,jo=36494,Qo=36495,tl=36283,el=36284,Xr=36285,il=36286;var hr=2300,Ha=2301,Pa=2302,hc=2303,uc=2400,dc=2401,fc=2402;var ku=3200;var nl=0,zu=1,dn="",Je="srgb",Yn="srgb-linear",ur="linear",fe="srgb";var La=7680;var Hu=519,Vu=512,Gu=513,Wu=514,sl=515,Xu=516,qu=517,rl=518,Yu=519,$u=35044,Wc=35048;var Xc="300 es",Ci=2e3,Ts=2001;function of(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function lf(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function dr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Zu(){let s=dr("canvas");return s.style.display="block",s}var Bh={},Es=null;function qc(...s){let t="THREE."+s.shift();Es?Es("log",t,...s):console.log(t,...s)}function Ju(s){let t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Ht(...s){s=Ju(s);let t="THREE."+s.shift();if(Es)Es("warn",t,...s);else{let e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function Gt(...s){s=Ju(s);let t="THREE."+s.shift();if(Es)Es("error",t,...s);else{let e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function qn(...s){let t=s.join(" ");t in Bh||(Bh[t]=!0,Ht(...s))}function Ku(s,t,e){return new Promise(function(i,n){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:n();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var ju={[Da]:Na,[Ua]:Oa,[Fa]:ka,[ws]:Ba,[Na]:Da,[Oa]:Ua,[ka]:Fa,[Ba]:ws},ki=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let n=i[t];if(n!==void 0){let r=n.indexOf(e);r!==-1&&n.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let n=i.slice(0);for(let r=0,a=n.length;r<a;r++)n[r].call(this,t);t.target=null}}},je=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Oh=1234567,ar=Math.PI/180,$n=180/Math.PI;function es(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(je[s&255]+je[s>>8&255]+je[s>>16&255]+je[s>>24&255]+"-"+je[t&255]+je[t>>8&255]+"-"+je[t>>16&15|64]+je[t>>24&255]+"-"+je[e&63|128]+je[e>>8&255]+"-"+je[e>>16&255]+je[e>>24&255]+je[i&255]+je[i>>8&255]+je[i>>16&255]+je[i>>24&255]).toLowerCase()}function te(s,t,e){return Math.max(t,Math.min(e,s))}function Yc(s,t){return(s%t+t)%t}function cf(s,t,e,i,n){return i+(s-t)*(n-i)/(e-t)}function hf(s,t,e){return s!==t?(e-s)/(t-s):0}function or(s,t,e){return(1-e)*s+e*t}function uf(s,t,e,i){return or(s,t,1-Math.exp(-e*i))}function df(s,t=1){return t-Math.abs(Yc(s,t*2)-t)}function ff(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function pf(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function mf(s,t){return s+Math.floor(Math.random()*(t-s+1))}function gf(s,t){return s+Math.random()*(t-s)}function vf(s){return s*(.5-Math.random())}function xf(s){s!==void 0&&(Oh=s);let t=Oh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function _f(s){return s*ar}function yf(s){return s*$n}function Mf(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function bf(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Sf(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function wf(s,t,e,i,n){let r=Math.cos,a=Math.sin,o=r(e/2),c=a(e/2),l=r((t+i)/2),u=a((t+i)/2),f=r((t-i)/2),h=a((t-i)/2),d=r((i-t)/2),m=a((i-t)/2);switch(n){case"XYX":s.set(o*u,c*f,c*h,o*l);break;case"YZY":s.set(c*h,o*u,c*f,o*l);break;case"ZXZ":s.set(c*f,c*h,o*u,o*l);break;case"XZX":s.set(o*u,c*m,c*d,o*l);break;case"YXY":s.set(c*d,o*u,c*m,o*l);break;case"ZYZ":s.set(c*m,c*d,o*u,o*l);break;default:Ht("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function bs(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:case Uint8ClampedArray:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function si(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var be={DEG2RAD:ar,RAD2DEG:$n,generateUUID:es,clamp:te,euclideanModulo:Yc,mapLinear:cf,inverseLerp:hf,lerp:or,damp:uf,pingpong:df,smoothstep:ff,smootherstep:pf,randInt:mf,randFloat:gf,randFloatSpread:vf,seededRandom:xf,degToRad:_f,radToDeg:yf,isPowerOfTwo:Mf,ceilPowerOfTwo:bf,floorPowerOfTwo:Sf,setQuaternionFromProperEuler:wf,normalize:si,denormalize:bs},Qc=class Qc{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=te(this.x,t.x,e.x),this.y=te(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=te(this.x,t,e),this.y=te(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(te(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(te(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),n=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*n+t.x,this.y=r*n+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Qc.prototype.isVector2=!0;var at=Qc,ri=class{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,r,a,o){let c=i[n+0],l=i[n+1],u=i[n+2],f=i[n+3],h=r[a+0],d=r[a+1],m=r[a+2],v=r[a+3];if(f!==v||c!==h||l!==d||u!==m){let g=c*h+l*d+u*m+f*v;g<0&&(h=-h,d=-d,m=-m,v=-v,g=-g);let p=1-o;if(g<.9995){let M=Math.acos(g),y=Math.sin(M);p=Math.sin(p*M)/y,o=Math.sin(o*M)/y,c=c*p+h*o,l=l*p+d*o,u=u*p+m*o,f=f*p+v*o}else{c=c*p+h*o,l=l*p+d*o,u=u*p+m*o,f=f*p+v*o;let M=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=M,l*=M,u*=M,f*=M}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,n,r,a){let o=i[n],c=i[n+1],l=i[n+2],u=i[n+3],f=r[a],h=r[a+1],d=r[a+2],m=r[a+3];return t[e]=o*m+u*f+c*d-l*h,t[e+1]=c*m+u*h+l*f-o*d,t[e+2]=l*m+u*d+o*h-c*f,t[e+3]=u*m-o*f-c*h-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,n=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(i/2),u=o(n/2),f=o(r/2),h=c(i/2),d=c(n/2),m=c(r/2);switch(a){case"XYZ":this._x=h*u*f+l*d*m,this._y=l*d*f-h*u*m,this._z=l*u*m+h*d*f,this._w=l*u*f-h*d*m;break;case"YXZ":this._x=h*u*f+l*d*m,this._y=l*d*f-h*u*m,this._z=l*u*m-h*d*f,this._w=l*u*f+h*d*m;break;case"ZXY":this._x=h*u*f-l*d*m,this._y=l*d*f+h*u*m,this._z=l*u*m+h*d*f,this._w=l*u*f-h*d*m;break;case"ZYX":this._x=h*u*f-l*d*m,this._y=l*d*f+h*u*m,this._z=l*u*m-h*d*f,this._w=l*u*f+h*d*m;break;case"YZX":this._x=h*u*f+l*d*m,this._y=l*d*f+h*u*m,this._z=l*u*m-h*d*f,this._w=l*u*f-h*d*m;break;case"XZY":this._x=h*u*f-l*d*m,this._y=l*d*f-h*u*m,this._z=l*u*m+h*d*f,this._w=l*u*f+h*d*m;break;default:Ht("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],n=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],u=e[6],f=e[10],h=i+o+f;if(h>0){let d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-c)*d,this._y=(r-l)*d,this._z=(a-n)*d}else if(i>o&&i>f){let d=2*Math.sqrt(1+i-o-f);this._w=(u-c)/d,this._x=.25*d,this._y=(n+a)/d,this._z=(r+l)/d}else if(o>f){let d=2*Math.sqrt(1+o-i-f);this._w=(r-l)/d,this._x=(n+a)/d,this._y=.25*d,this._z=(c+u)/d}else{let d=2*Math.sqrt(1+f-i-o);this._w=(a-n)/d,this._x=(r+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(te(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,n=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,u=e._w;return this._x=i*u+a*o+n*l-r*c,this._y=n*u+a*c+r*o-i*l,this._z=r*u+a*l+i*c-n*o,this._w=a*u-i*o-n*c-r*l,this._onChangeCallback(),this}slerp(t,e){let i=t._x,n=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(i=-i,n=-n,r=-r,a=-a,o=-o);let c=1-e;if(o<.9995){let l=Math.acos(o),u=Math.sin(l);c=Math.sin(c*l)/u,e=Math.sin(e*l)/u,this._x=this._x*c+i*e,this._y=this._y*c+n*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this._onChangeCallback()}else this._x=this._x*c+i*e,this._y=this._y*c+n*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(n*Math.sin(t),n*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},th=class th{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(kh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(kh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*n,this.y=r[1]*e+r[4]*i+r[7]*n,this.z=r[2]*e+r[5]*i+r[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*n+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*n+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*n+r[14])*a,this}applyQuaternion(t){let e=this.x,i=this.y,n=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*n-o*i),u=2*(o*e-r*n),f=2*(r*i-a*e);return this.x=e+c*l+a*f-o*u,this.y=i+c*u+o*l-r*f,this.z=n+c*f+r*u-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*n,this.y=r[1]*e+r[5]*i+r[9]*n,this.z=r[2]*e+r[6]*i+r[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=te(this.x,t.x,e.x),this.y=te(this.y,t.y,e.y),this.z=te(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=te(this.x,t,e),this.y=te(this.y,t,e),this.z=te(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(te(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,n=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=n*c-r*o,this.y=r*a-i*c,this.z=i*o-n*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return zl.copy(this).projectOnVector(t),this.sub(zl)}reflect(t){return this.sub(zl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(te(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};th.prototype.isVector3=!0;var P=th,zl=new P,kh=new ri,eh=class eh{constructor(t,e,i,n,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,r,a,o,c,l)}set(t,e,i,n,r,a,o,c,l){let u=this.elements;return u[0]=t,u[1]=n,u[2]=o,u[3]=e,u[4]=r,u[5]=c,u[6]=i,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,r=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],u=i[4],f=i[7],h=i[2],d=i[5],m=i[8],v=n[0],g=n[3],p=n[6],M=n[1],y=n[4],x=n[7],S=n[2],w=n[5],A=n[8];return r[0]=a*v+o*M+c*S,r[3]=a*g+o*y+c*w,r[6]=a*p+o*x+c*A,r[1]=l*v+u*M+f*S,r[4]=l*g+u*y+f*w,r[7]=l*p+u*x+f*A,r[2]=h*v+d*M+m*S,r[5]=h*g+d*y+m*w,r[8]=h*p+d*x+m*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8];return e*a*u-e*o*l-i*r*u+i*o*c+n*r*l-n*a*c}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],f=u*a-o*l,h=o*c-u*r,d=l*r-a*c,m=e*f+i*h+n*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/m;return t[0]=f*v,t[1]=(n*l-u*i)*v,t[2]=(o*i-n*a)*v,t[3]=h*v,t[4]=(u*e-n*c)*v,t[5]=(n*r-o*e)*v,t[6]=d*v,t[7]=(i*c-l*e)*v,t[8]=(a*e-i*r)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*a+l*o)+a+t,-n*l,n*c,-n*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return qn("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Hl.makeScale(t,e)),this}rotate(t){return qn("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Hl.makeRotation(-t)),this}translate(t,e){return qn("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Hl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};eh.prototype.isMatrix3=!0;var qt=eh,Hl=new qt,zh=new qt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Hh=new qt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Tf(){let s={enabled:!0,workingColorSpace:Yn,spaces:{},convert:function(n,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===fe&&(n.r=rn(n.r),n.g=rn(n.g),n.b=rn(n.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(n.applyMatrix3(this.spaces[r].toXYZ),n.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===fe&&(n.r=Ss(n.r),n.g=Ss(n.g),n.b=Ss(n.b))),n},workingToColorSpace:function(n,r){return this.convert(n,this.workingColorSpace,r)},colorSpaceToWorking:function(n,r){return this.convert(n,r,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===dn?ur:this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,r=this.workingColorSpace){return n.fromArray(this.spaces[r].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,r,a){return n.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(n,r){return qn("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(n,r)},toWorkingColorSpace:function(n,r){return qn("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(n,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return s.define({[Yn]:{primaries:t,whitePoint:i,transfer:ur,toXYZ:zh,fromXYZ:Hh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Je},outputColorSpaceConfig:{drawingBufferColorSpace:Je}},[Je]:{primaries:t,whitePoint:i,transfer:fe,toXYZ:zh,fromXYZ:Hh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Je}}}),s}var ne=Tf();function rn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ss(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var ls,Va=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{ls===void 0&&(ls=dr("canvas")),ls.width=t.width,ls.height=t.height;let n=ls.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),i=ls}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=dr("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let n=i.getImageData(0,0,t.width,t.height),r=n.data;for(let a=0;a<r.length;a++)r[a]=rn(r[a]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(rn(e[i]/255)*255):e[i]=rn(e[i]);return{data:e,width:t.width,height:t.height}}else return Ht("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Ef=0,As=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Ef++}),this.uuid=es(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?r.push(Vl(n[a].image)):r.push(Vl(n[a]))}else r=Vl(n);i.url=r}return e||(t.images[this.uuid]=i),i}};function Vl(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Va.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Ht("Texture: Unable to serialize Texture."),{})}var Af=0,Gl=new P,ai=class s extends ki{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,i=ti,n=ti,r=Pe,a=Pn,o=Mi,c=ei,l=s.DEFAULT_ANISOTROPY,u=dn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Af++}),this.uuid=es(),this.name="",this.source=new As(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Gl).x}get height(){return this.source.getSize(Gl).y}get depth(){return this.source.getSize(Gl).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){Ht(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let n=this[e];if(n===void 0){Ht(`Texture.setValues(): property '${e}' does not exist.`);continue}n&&i&&n.isVector2&&i.isVector2||n&&i&&n.isVector3&&i.isVector3||n&&i&&n.isMatrix3&&i.isMatrix3?n.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Bc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case an:t.x=t.x-Math.floor(t.x);break;case ti:t.x=t.x<0?0:1;break;case za:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case an:t.y=t.y-Math.floor(t.y);break;case ti:t.y=t.y<0?0:1;break;case za:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};ai.DEFAULT_IMAGE=null;ai.DEFAULT_MAPPING=Bc;ai.DEFAULT_ANISOTROPY=1;var ih=class ih{constructor(t=0,e=0,i=0,n=1){this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*n+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*n+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*n+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*n+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,r,c=t.elements,l=c[0],u=c[4],f=c[8],h=c[1],d=c[5],m=c[9],v=c[2],g=c[6],p=c[10];if(Math.abs(u-h)<.01&&Math.abs(f-v)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+v)<.1&&Math.abs(m+g)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let y=(l+1)/2,x=(d+1)/2,S=(p+1)/2,w=(u+h)/4,A=(f+v)/4,_=(m+g)/4;return y>x&&y>S?y<.01?(i=0,n=.707106781,r=.707106781):(i=Math.sqrt(y),n=w/i,r=A/i):x>S?x<.01?(i=.707106781,n=0,r=.707106781):(n=Math.sqrt(x),i=w/n,r=_/n):S<.01?(i=.707106781,n=.707106781,r=0):(r=Math.sqrt(S),i=A/r,n=_/r),this.set(i,n,r,e),this}let M=Math.sqrt((g-m)*(g-m)+(f-v)*(f-v)+(h-u)*(h-u));return Math.abs(M)<.001&&(M=1),this.x=(g-m)/M,this.y=(f-v)/M,this.z=(h-u)/M,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=te(this.x,t.x,e.x),this.y=te(this.y,t.y,e.y),this.z=te(this.z,t.z,e.z),this.w=te(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=te(this.x,t,e),this.y=te(this.y,t,e),this.z=te(this.z,t,e),this.w=te(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(te(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};ih.prototype.isVector4=!0;var Me=ih,Ga=class extends ki{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pe,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Me(0,0,t,e),this.scissorTest=!1,this.viewport=new Me(0,0,t,e),this.textures=[];let n={width:t,height:e,depth:i.depth},r=new ai(n),a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Pe,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let n=0,r=this.textures.length;n<r;n++)this.textures[n].image.width=t,this.textures[n].image.height=e,this.textures[n].image.depth=i,this.textures[n].isData3DTexture!==!0&&(this.textures[n].isArrayTexture=this.textures[n].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let n=Object.assign({},t.textures[e].image);this.textures[e].source=new As(n)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},$e=class extends Ga{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},fr=class extends ai{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=Ye,this.minFilter=Ye,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Wa=class extends ai{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=Ye,this.minFilter=Ye,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var go=class go{constructor(t,e,i,n,r,a,o,c,l,u,f,h,d,m,v,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,r,a,o,c,l,u,f,h,d,m,v,g)}set(t,e,i,n,r,a,o,c,l,u,f,h,d,m,v,g){let p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=n,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=m,p[11]=v,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new go().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,n=1/cs.setFromMatrixColumn(t,0).length(),r=1/cs.setFromMatrixColumn(t,1).length(),a=1/cs.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,n=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(n),l=Math.sin(n),u=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let h=a*u,d=a*f,m=o*u,v=o*f;e[0]=c*u,e[4]=-c*f,e[8]=l,e[1]=d+m*l,e[5]=h-v*l,e[9]=-o*c,e[2]=v-h*l,e[6]=m+d*l,e[10]=a*c}else if(t.order==="YXZ"){let h=c*u,d=c*f,m=l*u,v=l*f;e[0]=h+v*o,e[4]=m*o-d,e[8]=a*l,e[1]=a*f,e[5]=a*u,e[9]=-o,e[2]=d*o-m,e[6]=v+h*o,e[10]=a*c}else if(t.order==="ZXY"){let h=c*u,d=c*f,m=l*u,v=l*f;e[0]=h-v*o,e[4]=-a*f,e[8]=m+d*o,e[1]=d+m*o,e[5]=a*u,e[9]=v-h*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){let h=a*u,d=a*f,m=o*u,v=o*f;e[0]=c*u,e[4]=m*l-d,e[8]=h*l+v,e[1]=c*f,e[5]=v*l+h,e[9]=d*l-m,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){let h=a*c,d=a*l,m=o*c,v=o*l;e[0]=c*u,e[4]=v-h*f,e[8]=m*f+d,e[1]=f,e[5]=a*u,e[9]=-o*u,e[2]=-l*u,e[6]=d*f+m,e[10]=h-v*f}else if(t.order==="XZY"){let h=a*c,d=a*l,m=o*c,v=o*l;e[0]=c*u,e[4]=-f,e[8]=l*u,e[1]=h*f+v,e[5]=a*u,e[9]=d*f-m,e[2]=m*f-d,e[6]=o*u,e[10]=v*f+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Rf,t,Cf)}lookAt(t,e,i){let n=this.elements;return hi.subVectors(t,e),hi.lengthSq()===0&&(hi.z=1),hi.normalize(),xn.crossVectors(i,hi),xn.lengthSq()===0&&(Math.abs(i.z)===1?hi.x+=1e-4:hi.z+=1e-4,hi.normalize(),xn.crossVectors(i,hi)),xn.normalize(),oa.crossVectors(hi,xn),n[0]=xn.x,n[4]=oa.x,n[8]=hi.x,n[1]=xn.y,n[5]=oa.y,n[9]=hi.y,n[2]=xn.z,n[6]=oa.z,n[10]=hi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,r=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],u=i[1],f=i[5],h=i[9],d=i[13],m=i[2],v=i[6],g=i[10],p=i[14],M=i[3],y=i[7],x=i[11],S=i[15],w=n[0],A=n[4],_=n[8],T=n[12],R=n[1],I=n[5],L=n[9],B=n[13],N=n[2],O=n[6],q=n[10],W=n[14],nt=n[3],X=n[7],tt=n[11],et=n[15];return r[0]=a*w+o*R+c*N+l*nt,r[4]=a*A+o*I+c*O+l*X,r[8]=a*_+o*L+c*q+l*tt,r[12]=a*T+o*B+c*W+l*et,r[1]=u*w+f*R+h*N+d*nt,r[5]=u*A+f*I+h*O+d*X,r[9]=u*_+f*L+h*q+d*tt,r[13]=u*T+f*B+h*W+d*et,r[2]=m*w+v*R+g*N+p*nt,r[6]=m*A+v*I+g*O+p*X,r[10]=m*_+v*L+g*q+p*tt,r[14]=m*T+v*B+g*W+p*et,r[3]=M*w+y*R+x*N+S*nt,r[7]=M*A+y*I+x*O+S*X,r[11]=M*_+y*L+x*q+S*tt,r[15]=M*T+y*B+x*W+S*et,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],n=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],u=t[2],f=t[6],h=t[10],d=t[14],m=t[3],v=t[7],g=t[11],p=t[15],M=c*d-l*h,y=o*d-l*f,x=o*h-c*f,S=a*d-l*u,w=a*h-c*u,A=a*f-o*u;return e*(v*M-g*y+p*x)-i*(m*M-g*S+p*w)+n*(m*y-v*S+p*A)-r*(m*x-v*w+g*A)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],n=t[8],r=t[1],a=t[5],o=t[9],c=t[2],l=t[6],u=t[10];return e*(a*u-o*l)-i*(r*u-o*c)+n*(r*l-a*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],f=t[9],h=t[10],d=t[11],m=t[12],v=t[13],g=t[14],p=t[15],M=e*o-i*a,y=e*c-n*a,x=e*l-r*a,S=i*c-n*o,w=i*l-r*o,A=n*l-r*c,_=u*v-f*m,T=u*g-h*m,R=u*p-d*m,I=f*g-h*v,L=f*p-d*v,B=h*p-d*g,N=M*B-y*L+x*I+S*R-w*T+A*_;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let O=1/N;return t[0]=(o*B-c*L+l*I)*O,t[1]=(n*L-i*B-r*I)*O,t[2]=(v*A-g*w+p*S)*O,t[3]=(h*w-f*A-d*S)*O,t[4]=(c*R-a*B-l*T)*O,t[5]=(e*B-n*R+r*T)*O,t[6]=(g*x-m*A-p*y)*O,t[7]=(u*A-h*x+d*y)*O,t[8]=(a*L-o*R+l*_)*O,t[9]=(i*R-e*L-r*_)*O,t[10]=(m*w-v*x+p*M)*O,t[11]=(f*x-u*w-d*M)*O,t[12]=(o*T-a*I-c*_)*O,t[13]=(e*I-i*T+n*_)*O,t[14]=(v*y-m*S-g*M)*O,t[15]=(u*S-f*y+h*M)*O,this}scale(t){let e=this.elements,i=t.x,n=t.y,r=t.z;return e[0]*=i,e[4]*=n,e[8]*=r,e[1]*=i,e[5]*=n,e[9]*=r,e[2]*=i,e[6]*=n,e[10]*=r,e[3]*=i,e[7]*=n,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),n=Math.sin(e),r=1-i,a=t.x,o=t.y,c=t.z,l=r*a,u=r*o;return this.set(l*a+i,l*o-n*c,l*c+n*o,0,l*o+n*c,u*o+i,u*c-n*a,0,l*c-n*o,u*c+n*a,r*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,r,a){return this.set(1,i,r,0,t,1,a,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){let n=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,u=a+a,f=o+o,h=r*l,d=r*u,m=r*f,v=a*u,g=a*f,p=o*f,M=c*l,y=c*u,x=c*f,S=i.x,w=i.y,A=i.z;return n[0]=(1-(v+p))*S,n[1]=(d+x)*S,n[2]=(m-y)*S,n[3]=0,n[4]=(d-x)*w,n[5]=(1-(h+p))*w,n[6]=(g+M)*w,n[7]=0,n[8]=(m+y)*A,n[9]=(g-M)*A,n[10]=(1-(h+v))*A,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){let n=this.elements;t.x=n[12],t.y=n[13],t.z=n[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let a=cs.set(n[0],n[1],n[2]).length(),o=cs.set(n[4],n[5],n[6]).length(),c=cs.set(n[8],n[9],n[10]).length();r<0&&(a=-a),Ti.copy(this);let l=1/a,u=1/o,f=1/c;return Ti.elements[0]*=l,Ti.elements[1]*=l,Ti.elements[2]*=l,Ti.elements[4]*=u,Ti.elements[5]*=u,Ti.elements[6]*=u,Ti.elements[8]*=f,Ti.elements[9]*=f,Ti.elements[10]*=f,e.setFromRotationMatrix(Ti),i.x=a,i.y=o,i.z=c,this}makePerspective(t,e,i,n,r,a,o=Ci,c=!1){let l=this.elements,u=2*r/(e-t),f=2*r/(i-n),h=(e+t)/(e-t),d=(i+n)/(i-n),m,v;if(c)m=r/(a-r),v=a*r/(a-r);else if(o===Ci)m=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===Ts)m=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=f,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,n,r,a,o=Ci,c=!1){let l=this.elements,u=2/(e-t),f=2/(i-n),h=-(e+t)/(e-t),d=-(i+n)/(i-n),m,v;if(c)m=1/(a-r),v=a/(a-r);else if(o===Ci)m=-2/(a-r),v=-(a+r)/(a-r);else if(o===Ts)m=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=f,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};go.prototype.isMatrix4=!0;var se=go,cs=new P,Ti=new se,Rf=new P(0,0,0),Cf=new P(1,1,1),xn=new P,oa=new P,hi=new P,Vh=new se,Gh=new ri,li=class s{constructor(t=0,e=0,i=0,n=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let n=t.elements,r=n[0],a=n[4],o=n[8],c=n[1],l=n[5],u=n[9],f=n[2],h=n[6],d=n[10];switch(e){case"XYZ":this._y=Math.asin(te(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-te(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(te(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-te(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(te(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-te(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:Ht("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Vh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Vh,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Gh.setFromEuler(this),this.setFromQuaternion(Gh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};li.DEFAULT_ORDER="XYZ";var pr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},If=0,Wh=new P,hs=new ri,Qi=new se,la=new P,Qs=new P,Pf=new P,Lf=new ri,Xh=new P(1,0,0),qh=new P(0,1,0),Yh=new P(0,0,1),$h={type:"added"},Df={type:"removed"},us={type:"childadded",child:null},Wl={type:"childremoved",child:null},He=class s extends ki{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:If++}),this.uuid=es(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new P,e=new li,i=new ri,n=new P(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new se},normalMatrix:{value:new qt}}),this.matrix=new se,this.matrixWorld=new se,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return hs.setFromAxisAngle(t,e),this.quaternion.multiply(hs),this}rotateOnWorldAxis(t,e){return hs.setFromAxisAngle(t,e),this.quaternion.premultiply(hs),this}rotateX(t){return this.rotateOnAxis(Xh,t)}rotateY(t){return this.rotateOnAxis(qh,t)}rotateZ(t){return this.rotateOnAxis(Yh,t)}translateOnAxis(t,e){return Wh.copy(t).applyQuaternion(this.quaternion),this.position.add(Wh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Xh,t)}translateY(t){return this.translateOnAxis(qh,t)}translateZ(t){return this.translateOnAxis(Yh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Qi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?la.copy(t):la.set(t,e,i);let n=this.parent;this.updateWorldMatrix(!0,!1),Qs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qi.lookAt(Qs,la,this.up):Qi.lookAt(la,Qs,this.up),this.quaternion.setFromRotationMatrix(Qi),n&&(Qi.extractRotation(n.matrixWorld),hs.setFromRotationMatrix(Qi),this.quaternion.premultiply(hs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Gt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent($h),us.child=t,this.dispatchEvent(us),us.child=null):Gt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Df),Wl.child=t,this.dispatchEvent(Wl),Wl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Qi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Qi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Qi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent($h),us.child=t,this.dispatchEvent(us),us.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){let a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qs,t,Pf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qs,Lf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,n=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*n,r[13]+=i-r[1]*e-r[5]*i-r[9]*n,r[14]+=n-r[2]*e-r[6]*i-r[10]*n}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let n={};n.uuid=this.uuid,n.type=this.type,n.name=this.name,n.castShadow=this.castShadow,n.receiveShadow=this.receiveShadow,n.visible=this.visible,n.frustumCulled=this.frustumCulled,n.renderOrder=this.renderOrder,n.static=this.static,n.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.pivot!==null&&(n.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(n.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(n.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(o=>({...o})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(t),n.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let f=c[l];r(t.shapes,f)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));n.material=o}else n.material=r(t.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];n.animations.push(r(t.animations,c))}}if(e){let o=a(t.geometries),c=a(t.materials),l=a(t.textures),u=a(t.images),f=a(t.shapes),h=a(t.skeletons),d=a(t.animations),m=a(t.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),d.length>0&&(i.animations=d),m.length>0&&(i.nodes=m)}return i.object=n,i;function a(o){let c=[];for(let l in o){let u=o[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let n=t.children[i];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};He.DEFAULT_UP=new P(0,1,0);He.DEFAULT_MATRIX_AUTO_UPDATE=!0;He.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ze=class extends He{constructor(){super(),this.isGroup=!0,this.type="Group"}},Nf={type:"move"},Rs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ze,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ze,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ze,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(let v of t.hand.values()){let g=e.getJointPose(v,i),p=this._getHandJoint(l,v);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,m=.005;l.inputState.pinching&&h>d+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&h<=d-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&r!==null&&(n=r),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Nf)))}return o!==null&&(o.visible=n!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new ze;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},Qu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_n={h:0,s:0,l:0},ca={h:0,s:0,l:0};function Xl(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var ft=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Je){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ne.colorSpaceToWorking(this,e),this}setRGB(t,e,i,n=ne.workingColorSpace){return this.r=t,this.g=e,this.b=i,ne.colorSpaceToWorking(this,n),this}setHSL(t,e,i,n=ne.workingColorSpace){if(t=Yc(t,1),e=te(e,0,1),i=te(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=Xl(a,r,t+1/3),this.g=Xl(a,r,t),this.b=Xl(a,r,t-1/3)}return ne.colorSpaceToWorking(this,n),this}setStyle(t,e=Je){function i(r){r!==void 0&&parseFloat(r)<1&&Ht("Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Ht("Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=n[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Ht("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Je){let i=Qu[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Ht("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=rn(t.r),this.g=rn(t.g),this.b=rn(t.b),this}copyLinearToSRGB(t){return this.r=Ss(t.r),this.g=Ss(t.g),this.b=Ss(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Je){return ne.workingToColorSpace(Qe.copy(this),t),Math.round(te(Qe.r*255,0,255))*65536+Math.round(te(Qe.g*255,0,255))*256+Math.round(te(Qe.b*255,0,255))}getHexString(t=Je){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ne.workingColorSpace){ne.workingToColorSpace(Qe.copy(this),e);let i=Qe.r,n=Qe.g,r=Qe.b,a=Math.max(i,n,r),o=Math.min(i,n,r),c,l,u=(o+a)/2;if(o===a)c=0,l=0;else{let f=a-o;switch(l=u<=.5?f/(a+o):f/(2-a-o),a){case i:c=(n-r)/f+(n<r?6:0);break;case n:c=(r-i)/f+2;break;case r:c=(i-n)/f+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=ne.workingColorSpace){return ne.workingToColorSpace(Qe.copy(this),e),t.r=Qe.r,t.g=Qe.g,t.b=Qe.b,t}getStyle(t=Je){ne.workingToColorSpace(Qe.copy(this),t);let e=Qe.r,i=Qe.g,n=Qe.b;return t!==Je?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(_n),this.setHSL(_n.h+t,_n.s+e,_n.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(_n),t.getHSL(ca);let i=or(_n.h,ca.h,e),n=or(_n.s,ca.s,e),r=or(_n.l,ca.l,e);return this.setHSL(i,n,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,n=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*n,this.g=r[1]*e+r[4]*i+r[7]*n,this.b=r[2]*e+r[5]*i+r[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Qe=new ft;ft.NAMES=Qu;var mr=class s{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new ft(t),this.density=e}clone(){return new s(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var on=class extends He{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new li,this.environmentIntensity=1,this.environmentRotation=new li,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Ei=new P,tn=new P,ql=new P,en=new P,ds=new P,fs=new P,Zh=new P,Yl=new P,$l=new P,Zl=new P,Jl=new Me,Kl=new Me,jl=new Me,Sn=class s{constructor(t=new P,e=new P,i=new P){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),Ei.subVectors(t,e),n.cross(Ei);let r=n.lengthSq();return r>0?n.multiplyScalar(1/Math.sqrt(r)):n.set(0,0,0)}static getBarycoord(t,e,i,n,r){Ei.subVectors(n,e),tn.subVectors(i,e),ql.subVectors(t,e);let a=Ei.dot(Ei),o=Ei.dot(tn),c=Ei.dot(ql),l=tn.dot(tn),u=tn.dot(ql),f=a*l-o*o;if(f===0)return r.set(0,0,0),null;let h=1/f,d=(l*c-o*u)*h,m=(a*u-o*c)*h;return r.set(1-d-m,m,d)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,en)===null?!1:en.x>=0&&en.y>=0&&en.x+en.y<=1}static getInterpolation(t,e,i,n,r,a,o,c){return this.getBarycoord(t,e,i,n,en)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,en.x),c.addScaledVector(a,en.y),c.addScaledVector(o,en.z),c)}static getInterpolatedAttribute(t,e,i,n,r,a){return Jl.setScalar(0),Kl.setScalar(0),jl.setScalar(0),Jl.fromBufferAttribute(t,e),Kl.fromBufferAttribute(t,i),jl.fromBufferAttribute(t,n),a.setScalar(0),a.addScaledVector(Jl,r.x),a.addScaledVector(Kl,r.y),a.addScaledVector(jl,r.z),a}static isFrontFacing(t,e,i,n){return Ei.subVectors(i,e),tn.subVectors(t,e),Ei.cross(tn).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ei.subVectors(this.c,this.b),tn.subVectors(this.a,this.b),Ei.cross(tn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,n,r){return s.getInterpolation(t,this.a,this.b,this.c,e,i,n,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,n=this.b,r=this.c,a,o;ds.subVectors(n,i),fs.subVectors(r,i),Yl.subVectors(t,i);let c=ds.dot(Yl),l=fs.dot(Yl);if(c<=0&&l<=0)return e.copy(i);$l.subVectors(t,n);let u=ds.dot($l),f=fs.dot($l);if(u>=0&&f<=u)return e.copy(n);let h=c*f-u*l;if(h<=0&&c>=0&&u<=0)return a=c/(c-u),e.copy(i).addScaledVector(ds,a);Zl.subVectors(t,r);let d=ds.dot(Zl),m=fs.dot(Zl);if(m>=0&&d<=m)return e.copy(r);let v=d*l-c*m;if(v<=0&&l>=0&&m<=0)return o=l/(l-m),e.copy(i).addScaledVector(fs,o);let g=u*m-d*f;if(g<=0&&f-u>=0&&d-m>=0)return Zh.subVectors(r,n),o=(f-u)/(f-u+(d-m)),e.copy(n).addScaledVector(Zh,o);let p=1/(g+v+h);return a=v*p,o=h*p,e.copy(i).addScaledVector(ds,a).addScaledVector(fs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},zi=class{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Ai.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Ai.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Ai.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Ai):Ai.fromBufferAttribute(r,a),Ai.applyMatrix4(t.matrixWorld),this.expandByPoint(Ai);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ha.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ha.copy(i.boundingBox)),ha.applyMatrix4(t.matrixWorld),this.union(ha)}let n=t.children;for(let r=0,a=n.length;r<a;r++)this.expandByObject(n[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ai),Ai.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(tr),ua.subVectors(this.max,tr),ps.subVectors(t.a,tr),ms.subVectors(t.b,tr),gs.subVectors(t.c,tr),yn.subVectors(ms,ps),Mn.subVectors(gs,ms),Hn.subVectors(ps,gs);let e=[0,-yn.z,yn.y,0,-Mn.z,Mn.y,0,-Hn.z,Hn.y,yn.z,0,-yn.x,Mn.z,0,-Mn.x,Hn.z,0,-Hn.x,-yn.y,yn.x,0,-Mn.y,Mn.x,0,-Hn.y,Hn.x,0];return!Ql(e,ps,ms,gs,ua)||(e=[1,0,0,0,1,0,0,0,1],!Ql(e,ps,ms,gs,ua))?!1:(da.crossVectors(yn,Mn),e=[da.x,da.y,da.z],Ql(e,ps,ms,gs,ua))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ai).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ai).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(nn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),nn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),nn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),nn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),nn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),nn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),nn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),nn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(nn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},nn=[new P,new P,new P,new P,new P,new P,new P,new P],Ai=new P,ha=new zi,ps=new P,ms=new P,gs=new P,yn=new P,Mn=new P,Hn=new P,tr=new P,ua=new P,da=new P,Vn=new P;function Ql(s,t,e,i,n){for(let r=0,a=s.length-3;r<=a;r+=3){Vn.fromArray(s,r);let o=n.x*Math.abs(Vn.x)+n.y*Math.abs(Vn.y)+n.z*Math.abs(Vn.z),c=t.dot(Vn),l=e.dot(Vn),u=i.dot(Vn);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}var Fe=new P,fa=new at,Uf=0,Be=class extends ki{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Uf++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=$u,this.updateRanges=[],this.gpuType=yi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)fa.fromBufferAttribute(this,e),fa.applyMatrix3(t),this.setXY(e,fa.x,fa.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Fe.fromBufferAttribute(this,e),Fe.applyMatrix3(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Fe.fromBufferAttribute(this,e),Fe.applyMatrix4(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Fe.fromBufferAttribute(this,e),Fe.applyNormalMatrix(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Fe.fromBufferAttribute(this,e),Fe.transformDirection(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=bs(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=si(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=bs(e,this.array)),e}setX(t,e){return this.normalized&&(e=si(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=bs(e,this.array)),e}setY(t,e){return this.normalized&&(e=si(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=bs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=si(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=bs(e,this.array)),e}setW(t,e){return this.normalized&&(e=si(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=si(e,this.array),i=si(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=si(e,this.array),i=si(i,this.array),n=si(n,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,r){return t*=this.itemSize,this.normalized&&(e=si(e,this.array),i=si(i,this.array),n=si(n,this.array),r=si(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var gr=class extends Be{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var vr=class extends Be{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var Qt=class extends Be{constructor(t,e,i){super(new Float32Array(t),e,i)}},Ff=new zi,er=new P,tc=new P,ln=class{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):Ff.setFromPoints(t).getCenter(i);let n=0;for(let r=0,a=t.length;r<a;r++)n=Math.max(n,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;er.subVectors(t,this.center);let e=er.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(er,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(tc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(er.copy(t.center).add(tc)),this.expandByPoint(er.copy(t.center).sub(tc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Bf=0,xi=new se,ec=new He,vs=new P,ui=new zi,ir=new zi,Xe=new P,ve=class s extends ki{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Bf++}),this.uuid=es(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(of(t)?vr:gr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new qt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return xi.makeRotationFromQuaternion(t),this.applyMatrix4(xi),this}rotateX(t){return xi.makeRotationX(t),this.applyMatrix4(xi),this}rotateY(t){return xi.makeRotationY(t),this.applyMatrix4(xi),this}rotateZ(t){return xi.makeRotationZ(t),this.applyMatrix4(xi),this}translate(t,e,i){return xi.makeTranslation(t,e,i),this.applyMatrix4(xi),this}scale(t,e,i){return xi.makeScale(t,e,i),this.applyMatrix4(xi),this}lookAt(t){return ec.lookAt(t),ec.updateMatrix(),this.applyMatrix4(ec.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vs).negate(),this.translate(vs.x,vs.y,vs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let n=0,r=t.length;n<r;n++){let a=t[n];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Qt(i,3))}else{let i=Math.min(t.length,e.count);for(let n=0;n<i;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&Ht("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Gt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){let r=e[i];ui.setFromBufferAttribute(r),this.morphTargetsRelative?(Xe.addVectors(this.boundingBox.min,ui.min),this.boundingBox.expandByPoint(Xe),Xe.addVectors(this.boundingBox.max,ui.max),this.boundingBox.expandByPoint(Xe)):(this.boundingBox.expandByPoint(ui.min),this.boundingBox.expandByPoint(ui.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Gt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ln);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Gt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){let i=this.boundingSphere.center;if(ui.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];ir.setFromBufferAttribute(o),this.morphTargetsRelative?(Xe.addVectors(ui.min,ir.min),ui.expandByPoint(Xe),Xe.addVectors(ui.max,ir.max),ui.expandByPoint(Xe)):(ui.expandByPoint(ir.min),ui.expandByPoint(ir.max))}ui.getCenter(i);let n=0;for(let r=0,a=t.count;r<a;r++)Xe.fromBufferAttribute(t,r),n=Math.max(n,i.distanceToSquared(Xe));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Xe.fromBufferAttribute(o,l),c&&(vs.fromBufferAttribute(t,l),Xe.add(vs)),n=Math.max(n,i.distanceToSquared(Xe))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&Gt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Gt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,n=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new Be(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],c=[];for(let _=0;_<i.count;_++)o[_]=new P,c[_]=new P;let l=new P,u=new P,f=new P,h=new at,d=new at,m=new at,v=new P,g=new P;function p(_,T,R){l.fromBufferAttribute(i,_),u.fromBufferAttribute(i,T),f.fromBufferAttribute(i,R),h.fromBufferAttribute(r,_),d.fromBufferAttribute(r,T),m.fromBufferAttribute(r,R),u.sub(l),f.sub(l),d.sub(h),m.sub(h);let I=1/(d.x*m.y-m.x*d.y);isFinite(I)&&(v.copy(u).multiplyScalar(m.y).addScaledVector(f,-d.y).multiplyScalar(I),g.copy(f).multiplyScalar(d.x).addScaledVector(u,-m.x).multiplyScalar(I),o[_].add(v),o[T].add(v),o[R].add(v),c[_].add(g),c[T].add(g),c[R].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let _=0,T=M.length;_<T;++_){let R=M[_],I=R.start,L=R.count;for(let B=I,N=I+L;B<N;B+=3)p(t.getX(B+0),t.getX(B+1),t.getX(B+2))}let y=new P,x=new P,S=new P,w=new P;function A(_){S.fromBufferAttribute(n,_),w.copy(S);let T=o[_];y.copy(T),y.sub(S.multiplyScalar(S.dot(T))).normalize(),x.crossVectors(w,T);let I=x.dot(c[_])<0?-1:1;a.setXYZW(_,y.x,y.y,y.z,I)}for(let _=0,T=M.length;_<T;++_){let R=M[_],I=R.start,L=R.count;for(let B=I,N=I+L;B<N;B+=3)A(t.getX(B+0)),A(t.getX(B+1)),A(t.getX(B+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new Be(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let h=0,d=i.count;h<d;h++)i.setXYZ(h,0,0,0);let n=new P,r=new P,a=new P,o=new P,c=new P,l=new P,u=new P,f=new P;if(t)for(let h=0,d=t.count;h<d;h+=3){let m=t.getX(h+0),v=t.getX(h+1),g=t.getX(h+2);n.fromBufferAttribute(e,m),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,g),u.subVectors(a,r),f.subVectors(n,r),u.cross(f),o.fromBufferAttribute(i,m),c.fromBufferAttribute(i,v),l.fromBufferAttribute(i,g),o.add(u),c.add(u),l.add(u),i.setXYZ(m,o.x,o.y,o.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(g,l.x,l.y,l.z)}else for(let h=0,d=e.count;h<d;h+=3)n.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),a.fromBufferAttribute(e,h+2),u.subVectors(a,r),f.subVectors(n,r),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Xe.fromBufferAttribute(t,e),Xe.normalize(),t.setXYZ(e,Xe.x,Xe.y,Xe.z)}toNonIndexed(){function t(o,c){let l=o.array,u=o.itemSize,f=o.normalized,h=new l.constructor(c.length*u),d=0,m=0;for(let v=0,g=c.length;v<g;v++){o.isInterleavedBufferAttribute?d=c[v]*o.data.stride+o.offset:d=c[v]*u;for(let p=0;p<u;p++)h[m++]=l[d++]}return new Be(h,u,f)}if(this.index===null)return Ht("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,i=this.index.array,n=this.attributes;for(let o in n){let c=n[o],l=t(c,i);e.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let u=0,f=l.length;u<f;u++){let h=l[u],d=t(h,i);c.push(d)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let c in i){let l=i[c];t.data.attributes[c]=l.toJSON(t.data)}let n={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let f=0,h=l.length;f<h;f++){let d=l[f];u.push(d.toJSON(t.data))}u.length>0&&(n[c]=u,r=!0)}r&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let n=t.attributes;for(let l in n){let u=n[l];this.setAttribute(l,u.clone(e))}let r=t.morphAttributes;for(let l in r){let u=[],f=r[l];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let l=0,u=a.length;l<u;l++){let f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var ic=new P,Of=new P,kf=new qt,Ri=class{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let n=ic.subVectors(i,e).cross(Of.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let n=t.delta(ic),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(n,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||kf.getNormalMatrix(t),n=this.coplanarPoint(ic).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},zf=0,cn=class extends ki{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zf++}),this.uuid=es(),this.name="",this.type="Material",this.blending=Cn,this.side=Wi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ac,this.blendDst=Rc,this.blendEquation=Qn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ft(0,0,0),this.blendAlpha=0,this.depthFunc=ws,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=La,this.stencilZFail=La,this.stencilZPass=La,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){Ht(`Material: parameter '${e}' has value of undefined.`);continue}let n=this[e];if(n===void 0){Ht(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector2&&i&&i.isVector2||n&&n.isEuler&&i&&i.isEuler||n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(e){let r=n(t.textures),a=n(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new ft().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new Ri().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new at().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new at().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let n=e.length;i=new Array(n);for(let r=0;r!==n;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var sn=new P,nc=new P,pa=new P,ma=new P,xr=class{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,sn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=sn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(sn.copy(this.origin).addScaledVector(this.direction,e),sn.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){nc.copy(t).add(e).multiplyScalar(.5),pa.copy(e).sub(t).normalize(),ma.copy(this.origin).sub(nc);let r=t.distanceTo(e)*.5,a=-this.direction.dot(pa),o=ma.dot(this.direction),c=-ma.dot(pa),l=ma.lengthSq(),u=Math.abs(1-a*a),f,h,d,m;if(u>0)if(f=a*c-o,h=a*o-c,m=r*u,f>=0)if(h>=-m)if(h<=m){let v=1/u;f*=v,h*=v,d=f*(f+a*h+2*o)+h*(a*f+h+2*c)+l}else h=r,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*c)+l;else h=-r,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*c)+l;else h<=-m?(f=Math.max(0,-(-a*r+o)),h=f>0?-r:Math.min(Math.max(-r,-c),r),d=-f*f+h*(h+2*c)+l):h<=m?(f=0,h=Math.min(Math.max(-r,-c),r),d=h*(h+2*c)+l):(f=Math.max(0,-(a*r+o)),h=f>0?r:Math.min(Math.max(-r,-c),r),d=-f*f+h*(h+2*c)+l);else h=a>0?-r:r,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,f),n&&n.copy(nc).addScaledVector(pa,h),d}intersectSphere(t,e){if(t.radius<0)return null;sn.subVectors(t.center,this.origin);let i=sn.dot(this.direction),n=sn.dot(sn)-i*i,r=t.radius*t.radius;if(n>r)return null;let a=Math.sqrt(r-n),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,r,a,o,c,l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return l>=0?(i=(t.min.x-h.x)*l,n=(t.max.x-h.x)*l):(i=(t.max.x-h.x)*l,n=(t.min.x-h.x)*l),u>=0?(r=(t.min.y-h.y)*u,a=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,a=(t.min.y-h.y)*u),i>a||r>n||((r>i||isNaN(i))&&(i=r),(a<n||isNaN(n))&&(n=a),f>=0?(o=(t.min.z-h.z)*f,c=(t.max.z-h.z)*f):(o=(t.max.z-h.z)*f,c=(t.min.z-h.z)*f),i>c||o>n)||((o>i||i!==i)&&(i=o),(c<n||n!==n)&&(n=c),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,sn)!==null}intersectTriangle(t,e,i,n,r){let a=this.origin,o=this.direction,c=o.x,l=o.y,u=o.z,f=t.x-a.x,h=t.y-a.y,d=t.z-a.z,m=e.x-a.x,v=e.y-a.y,g=e.z-a.z,p=i.x-a.x,M=i.y-a.y,y=i.z-a.z,x=Math.abs(c),S=Math.abs(l),w=Math.abs(u),A,_,T,R,I,L,B,N,O,q,W,nt;if(x>=S&&x>=w?(T=c,L=f,O=m,nt=p,c>=0?(A=l,_=u,R=h,I=d,B=v,N=g,q=M,W=y):(A=u,_=l,R=d,I=h,B=g,N=v,q=y,W=M)):S>=w?(T=l,L=h,O=v,nt=M,l>=0?(A=u,_=c,R=d,I=f,B=g,N=m,q=y,W=p):(A=c,_=u,R=f,I=d,B=m,N=g,q=p,W=y)):(T=u,L=d,O=g,nt=y,u>=0?(A=c,_=l,R=f,I=h,B=m,N=v,q=p,W=M):(A=l,_=c,R=h,I=f,B=v,N=m,q=M,W=p)),T===0)return null;let X=A/T,tt=_/T,et=1/T,Ct=R-X*L,Tt=I-tt*L,ae=B-X*O,Xt=N-tt*O,Jt=q-X*nt,Y=W-tt*nt,K=Jt*Xt-Y*ae,pt=Ct*Y-Tt*Jt,Ot=ae*Tt-Xt*Ct;if(n){if(K<0||pt<0||Ot<0)return null}else if((K<0||pt<0||Ot<0)&&(K>0||pt>0||Ot>0))return null;let ht=K+pt+Ot;if(ht===0)return null;let Vt=et*(K*L+pt*O+Ot*nt);return(ht>0?Vt<0:Vt>0)?null:this.at(Vt/ht,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Hi=class extends cn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new li,this.combine=Cc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Jh=new se,Gn=new xr,ga=new ln,Kh=new P,va=new P,xa=new P,_a=new P,sc=new P,ya=new P,jh=new P,Ma=new P,mt=class extends He{constructor(t=new ve,e=new Hi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){let o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let i=this.geometry,n=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(n,t);let o=this.morphTargetInfluences;if(r&&o){ya.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let u=o[c],f=r[c];u!==0&&(sc.fromBufferAttribute(f,t),a?ya.addScaledVector(sc,u):ya.addScaledVector(sc.sub(e),u))}e.add(ya)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,n=this.material,r=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ga.copy(i.boundingSphere),ga.applyMatrix4(r),Gn.copy(t.ray).recast(t.near),!(ga.containsPoint(Gn.origin)===!1&&(Gn.intersectSphere(ga,Kh)===null||Gn.origin.distanceToSquared(Kh)>(t.far-t.near)**2))&&(Jh.copy(r).invert(),Gn.copy(t.ray).applyMatrix4(Jh),!(i.boundingBox!==null&&Gn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Gn)))}_computeIntersections(t,e,i){let n,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,v=h.length;m<v;m++){let g=h[m],p=a[g.materialIndex],M=Math.max(g.start,d.start),y=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let x=M,S=y;x<S;x+=3){let w=o.getX(x),A=o.getX(x+1),_=o.getX(x+2);n=ba(this,p,t,i,l,u,f,w,A,_),n&&(n.faceIndex=Math.floor(x/3),n.face.materialIndex=g.materialIndex,e.push(n))}}else{let m=Math.max(0,d.start),v=Math.min(o.count,d.start+d.count);for(let g=m,p=v;g<p;g+=3){let M=o.getX(g),y=o.getX(g+1),x=o.getX(g+2);n=ba(this,a,t,i,l,u,f,M,y,x),n&&(n.faceIndex=Math.floor(g/3),e.push(n))}}else if(c!==void 0)if(Array.isArray(a))for(let m=0,v=h.length;m<v;m++){let g=h[m],p=a[g.materialIndex],M=Math.max(g.start,d.start),y=Math.min(c.count,Math.min(g.start+g.count,d.start+d.count));for(let x=M,S=y;x<S;x+=3){let w=x,A=x+1,_=x+2;n=ba(this,p,t,i,l,u,f,w,A,_),n&&(n.faceIndex=Math.floor(x/3),n.face.materialIndex=g.materialIndex,e.push(n))}}else{let m=Math.max(0,d.start),v=Math.min(c.count,d.start+d.count);for(let g=m,p=v;g<p;g+=3){let M=g,y=g+1,x=g+2;n=ba(this,a,t,i,l,u,f,M,y,x),n&&(n.faceIndex=Math.floor(g/3),e.push(n))}}}};function Hf(s,t,e,i,n,r,a,o){let c;if(t.side===Ze?c=i.intersectTriangle(a,r,n,!0,o):c=i.intersectTriangle(n,r,a,t.side===Wi,o),c===null)return null;Ma.copy(o),Ma.applyMatrix4(s.matrixWorld);let l=e.ray.origin.distanceTo(Ma);return l<e.near||l>e.far?null:{distance:l,point:Ma.clone(),object:s}}function ba(s,t,e,i,n,r,a,o,c,l){s.getVertexPosition(o,va),s.getVertexPosition(c,xa),s.getVertexPosition(l,_a);let u=Hf(s,t,e,i,va,xa,_a,jh);if(u){let f=new P;Sn.getBarycoord(jh,va,xa,_a,f),n&&(u.uv=Sn.getInterpolatedAttribute(n,o,c,l,f,new at)),r&&(u.uv1=Sn.getInterpolatedAttribute(r,o,c,l,f,new at)),a&&(u.normal=Sn.getInterpolatedAttribute(a,o,c,l,f,new P),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let h={a:o,b:c,c:l,normal:new P,materialIndex:0};Sn.getNormal(va,xa,_a,h.normal),u.face=h,u.barycoord=f}return u}var _r=class extends ai{constructor(t=null,e=1,i=1,n,r,a,o,c,l=Ye,u=Ye,f,h){super(null,a,o,c,l,u,n,r,f,h),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Oe=class extends Be{constructor(t,e,i,n=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},xs=new se,Qh=new se,Sa=[],tu=new zi,Vf=new se,nr=new mt,sr=new ln,hn=class extends mt{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Oe(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,Vf)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new zi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,xs),tu.copy(t.boundingBox).applyMatrix4(xs),this.boundingBox.union(tu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ln),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,xs),sr.copy(t.boundingSphere).applyMatrix4(xs),this.boundingSphere.union(sr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,n=this.morphTexture.source.data.data,r=i.length+1,a=t*r+1;for(let o=0;o<i.length;o++)i[o]=n[a+o]}raycast(t,e){let i=this.matrixWorld,n=this.count;if(nr.geometry=this.geometry,nr.material=this.material,nr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),sr.copy(this.boundingSphere),sr.applyMatrix4(i),t.ray.intersectsSphere(sr)!==!1))for(let r=0;r<n;r++){this.getMatrixAt(r,xs),Qh.multiplyMatrices(i,xs),nr.matrixWorld=Qh,nr.raycast(t,Sa);for(let a=0,o=Sa.length;a<o;a++){let c=Sa[a];c.instanceId=r,c.object=this,e.push(c)}Sa.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Oe(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let i=e.morphTargetInfluences,n=i.length+1;this.morphTexture===null&&(this.morphTexture=new _r(new Float32Array(n*this.count),n,this.count,So,yi));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<i.length;l++)a+=i[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=n*t;return r[c]=o,r.set(i,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Wn=new ln,Gf=new at(.5,.5),wa=new P,Cs=class{constructor(t=new Ri,e=new Ri,i=new Ri,n=new Ri,r=new Ri,a=new Ri){this.planes=[t,e,i,n,r,a]}set(t,e,i,n,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(n),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Ci,i=!1){let n=this.planes,r=t.elements,a=r[0],o=r[1],c=r[2],l=r[3],u=r[4],f=r[5],h=r[6],d=r[7],m=r[8],v=r[9],g=r[10],p=r[11],M=r[12],y=r[13],x=r[14],S=r[15];if(n[0].setComponents(l-a,d-u,p-m,S-M).normalize(),n[1].setComponents(l+a,d+u,p+m,S+M).normalize(),n[2].setComponents(l+o,d+f,p+v,S+y).normalize(),n[3].setComponents(l-o,d-f,p-v,S-y).normalize(),i)n[4].setComponents(c,h,g,x).normalize(),n[5].setComponents(l-c,d-h,p-g,S-x).normalize();else if(n[4].setComponents(l-c,d-h,p-g,S-x).normalize(),e===Ci)n[5].setComponents(l+c,d+h,p+g,S+x).normalize();else if(e===Ts)n[5].setComponents(c,h,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Wn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Wn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Wn)}intersectsSprite(t){Wn.center.set(0,0,0);let e=Gf.distanceTo(t.center);return Wn.radius=.7071067811865476+e,Wn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Wn)}intersectsSphere(t){let e=this.planes,i=t.center,n=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let n=e[i];if(wa.x=n.normal.x>0?t.max.x:t.min.x,wa.y=n.normal.y>0?t.max.y:t.min.y,wa.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(wa)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Xa=class extends cn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ft(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},eu=new se,pc=new xr,Ta=new ln,Ea=new P,Zn=class extends He{constructor(t=new ve,e=new Xa){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,n=this.matrixWorld,r=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ta.copy(i.boundingSphere),Ta.applyMatrix4(n),Ta.radius+=r,t.ray.intersectsSphere(Ta)===!1)return;eu.copy(n).invert(),pc.copy(t.ray).applyMatrix4(eu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=i.index,f=i.attributes.position;if(l!==null){let h=Math.max(0,a.start),d=Math.min(l.count,a.start+a.count);for(let m=h,v=d;m<v;m++){let g=l.getX(m);Ea.fromBufferAttribute(f,g),iu(Ea,g,c,n,t,e,this)}}else{let h=Math.max(0,a.start),d=Math.min(f.count,a.start+a.count);for(let m=h,v=d;m<v;m++)Ea.fromBufferAttribute(f,m),iu(Ea,m,c,n,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){let o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function iu(s,t,e,i,n,r,a){let o=pc.distanceSqToPoint(s);if(o<e){let c=new P;pc.closestPointToPoint(s,c),c.applyMatrix4(i);let l=n.ray.origin.distanceTo(c);if(l<n.near||l>n.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var yr=class extends ai{constructor(t=[],e=In,i,n,r,a,o,c,l,u){super(t,e,i,n,r,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},un=class extends ai{constructor(t,e,i,n,r,a,o,c,l){super(t,e,i,n,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var wn=class extends ai{constructor(t,e,i=Pi,n,r,a,o=Ye,c=Ye,l,u=Oi,f=1){if(u!==Oi&&u!==Ln)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:t,height:e,depth:f};super(h,n,r,a,o,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new As(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},qa=class extends wn{constructor(t,e=Pi,i=In,n,r,a=Ye,o=Ye,c,l=Oi){let u={width:t,height:t,depth:1},f=[u,u,u,u,u,u];super(t,t,e,i,n,r,a,o,c,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Mr=class extends ai{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Ce=class s extends ve{constructor(t=1,e=1,i=1,n=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:r,depthSegments:a};let o=this;n=Math.floor(n),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],u=[],f=[],h=0,d=0;m("z","y","x",-1,-1,i,e,t,a,r,0),m("z","y","x",1,-1,i,e,-t,a,r,1),m("x","z","y",1,1,t,i,e,n,a,2),m("x","z","y",1,-1,t,i,-e,n,a,3),m("x","y","z",1,-1,t,e,i,n,r,4),m("x","y","z",-1,-1,t,e,-i,n,r,5),this.setIndex(c),this.setAttribute("position",new Qt(l,3)),this.setAttribute("normal",new Qt(u,3)),this.setAttribute("uv",new Qt(f,2));function m(v,g,p,M,y,x,S,w,A,_,T){let R=x/A,I=S/_,L=x/2,B=S/2,N=w/2,O=A+1,q=_+1,W=0,nt=0,X=new P;for(let tt=0;tt<q;tt++){let et=tt*I-B;for(let Ct=0;Ct<O;Ct++){let Tt=Ct*R-L;X[v]=Tt*M,X[g]=et*y,X[p]=N,l.push(X.x,X.y,X.z),X[v]=0,X[g]=0,X[p]=w>0?1:-1,u.push(X.x,X.y,X.z),f.push(Ct/A),f.push(1-tt/_),W+=1}}for(let tt=0;tt<_;tt++)for(let et=0;et<A;et++){let Ct=h+et+O*tt,Tt=h+et+O*(tt+1),ae=h+(et+1)+O*(tt+1),Xt=h+(et+1)+O*tt;c.push(Ct,Tt,Xt),c.push(Tt,ae,Xt),nt+=6}o.addGroup(d,nt,T),d+=nt,h+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Vi=class s extends ve{constructor(t=1,e=32,i=0,n=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:n},e=Math.max(3,e);let r=[],a=[],o=[],c=[],l=new P,u=new at;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let f=0,h=3;f<=e;f++,h+=3){let d=i+f/e*n;l.x=t*Math.cos(d),l.y=t*Math.sin(d),a.push(l.x,l.y,l.z),o.push(0,0,1),u.x=(a[h]/t+1)/2,u.y=(a[h+1]/t+1)/2,c.push(u.x,u.y)}for(let f=1;f<=e;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new Qt(a,3)),this.setAttribute("normal",new Qt(o,3)),this.setAttribute("uv",new Qt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Ie=class s extends ve{constructor(t=1,e=1,i=1,n=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:n,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;n=Math.floor(n),r=Math.floor(r);let u=[],f=[],h=[],d=[],m=0,v=[],g=i/2,p=0;M(),a===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new Qt(f,3)),this.setAttribute("normal",new Qt(h,3)),this.setAttribute("uv",new Qt(d,2));function M(){let x=new P,S=new P,w=0,A=(e-t)/i;for(let _=0;_<=r;_++){let T=[],R=_/r,I=R*(e-t)+t;for(let L=0;L<=n;L++){let B=L/n,N=B*c+o,O=Math.sin(N),q=Math.cos(N);S.x=I*O,S.y=-R*i+g,S.z=I*q,f.push(S.x,S.y,S.z),x.set(O,A,q).normalize(),h.push(x.x,x.y,x.z),d.push(B,1-R),T.push(m++)}v.push(T)}for(let _=0;_<n;_++)for(let T=0;T<r;T++){let R=v[T][_],I=v[T+1][_],L=v[T+1][_+1],B=v[T][_+1];(t>0||T!==0)&&(u.push(R,I,B),w+=3),(e>0||T!==r-1)&&(u.push(I,L,B),w+=3)}l.addGroup(p,w,0),p+=w}function y(x){let S=m,w=new at,A=new P,_=0,T=x===!0?t:e,R=x===!0?1:-1;for(let L=1;L<=n;L++)f.push(0,g*R,0),h.push(0,R,0),d.push(.5,.5),m++;let I=m;for(let L=0;L<=n;L++){let N=L/n*c+o,O=Math.cos(N),q=Math.sin(N);A.x=T*q,A.y=g*R,A.z=T*O,f.push(A.x,A.y,A.z),h.push(0,R,0),w.x=O*.5+.5,w.y=q*.5*R+.5,d.push(w.x,w.y),m++}for(let L=0;L<n;L++){let B=S+L,N=I+L;x===!0?u.push(N,N+1,B):u.push(N+1,N,B),_+=3}l.addGroup(p,_,x===!0?1:2),p+=_}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},br=class s extends Ie{constructor(t=1,e=1,i=32,n=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,i,n,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:n,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new s(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ya=class s extends ve{constructor(t=[],e=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:n};let r=[],a=[];o(n),l(i),u(),this.setAttribute("position",new Qt(r,3)),this.setAttribute("normal",new Qt(r.slice(),3)),this.setAttribute("uv",new Qt(a,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function o(M){let y=new P,x=new P,S=new P;for(let w=0;w<e.length;w+=3)d(e[w+0],y),d(e[w+1],x),d(e[w+2],S),c(y,x,S,M)}function c(M,y,x,S){let w=S+1,A=[];for(let _=0;_<=w;_++){A[_]=[];let T=M.clone().lerp(x,_/w),R=y.clone().lerp(x,_/w),I=w-_;for(let L=0;L<=I;L++)L===0&&_===w?A[_][L]=T:A[_][L]=T.clone().lerp(R,L/I)}for(let _=0;_<w;_++)for(let T=0;T<2*(w-_)-1;T++){let R=Math.floor(T/2);T%2===0?(h(A[_][R+1]),h(A[_+1][R]),h(A[_][R])):(h(A[_][R+1]),h(A[_+1][R+1]),h(A[_+1][R]))}}function l(M){let y=new P;for(let x=0;x<r.length;x+=3)y.x=r[x+0],y.y=r[x+1],y.z=r[x+2],y.normalize().multiplyScalar(M),r[x+0]=y.x,r[x+1]=y.y,r[x+2]=y.z}function u(){let M=new P;for(let y=0;y<r.length;y+=3){M.x=r[y+0],M.y=r[y+1],M.z=r[y+2];let x=g(M)/2/Math.PI+.5,S=p(M)/Math.PI+.5;a.push(x,1-S)}m(),f()}function f(){for(let M=0;M<a.length;M+=6){let y=a[M+0],x=a[M+2],S=a[M+4],w=Math.max(y,x,S),A=Math.min(y,x,S);w>.9&&A<.1&&(y<.2&&(a[M+0]+=1),x<.2&&(a[M+2]+=1),S<.2&&(a[M+4]+=1))}}function h(M){r.push(M.x,M.y,M.z)}function d(M,y){let x=M*3;y.x=t[x+0],y.y=t[x+1],y.z=t[x+2]}function m(){let M=new P,y=new P,x=new P,S=new P,w=new at,A=new at,_=new at;for(let T=0,R=0;T<r.length;T+=9,R+=6){M.set(r[T+0],r[T+1],r[T+2]),y.set(r[T+3],r[T+4],r[T+5]),x.set(r[T+6],r[T+7],r[T+8]),w.set(a[R+0],a[R+1]),A.set(a[R+2],a[R+3]),_.set(a[R+4],a[R+5]),S.copy(M).add(y).add(x).divideScalar(3);let I=g(S);v(w,R+0,M,I),v(A,R+2,y,I),v(_,R+4,x,I)}}function v(M,y,x,S){S<0&&M.x===1&&(a[y]=M.x-1),x.x===0&&x.z===0&&(a[y]=S/2/Math.PI+.5)}function g(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.vertices,t.indices,t.radius,t.detail)}};var di=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ht("Curve: .getPoint() not implemented.")}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,n=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),r+=i.distanceTo(n),e.push(r),n=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let i=this.getLengths(),n=0,r=i.length,a;e?a=e:a=t*i[r-1];let o=0,c=r-1,l;for(;o<=c;)if(n=Math.floor(o+(c-o)/2),l=i[n]-a,l<0)o=n+1;else if(l>0)c=n-1;else{c=n;break}if(n=c,i[n]===a)return n/(r-1);let u=i[n],h=i[n+1]-u,d=(a-u)/h;return(n+d)/(r-1)}getTangent(t,e){let n=t-1e-4,r=t+1e-4;n<0&&(n=0),r>1&&(r=1);let a=this.getPoint(n),o=this.getPoint(r),c=e||(a.isVector2?new at:new P);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){let i=new P,n=[],r=[],a=[],o=new P,c=new se;for(let d=0;d<=t;d++){let m=d/t;n[d]=this.getTangentAt(m,new P)}r[0]=new P,a[0]=new P;let l=Number.MAX_VALUE,u=Math.abs(n[0].x),f=Math.abs(n[0].y),h=Math.abs(n[0].z);u<=l&&(l=u,i.set(1,0,0)),f<=l&&(l=f,i.set(0,1,0)),h<=l&&i.set(0,0,1),o.crossVectors(n[0],i).normalize(),r[0].crossVectors(n[0],o),a[0].crossVectors(n[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(n[d-1],n[d]),o.length()>Number.EPSILON){o.normalize();let m=Math.acos(te(n[d-1].dot(n[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(o,m))}a[d].crossVectors(n[d],r[d])}if(e===!0){let d=Math.acos(te(r[0].dot(r[t]),-1,1));d/=t,n[0].dot(o.crossVectors(r[0],r[t]))>0&&(d=-d);for(let m=1;m<=t;m++)r[m].applyMatrix4(c.makeRotationAxis(n[m],d*m)),a[m].crossVectors(n[m],r[m])}return{tangents:n,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Is=class extends di{constructor(t=0,e=0,i=1,n=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=n,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e=new at){let i=e,n=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=n;for(;r>n;)r-=n;r<Number.EPSILON&&(a?r=0:r=n),this.aClockwise===!0&&!a&&(r===n?r=-n:r=r-n);let o=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=c-this.aX,d=l-this.aY;c=h*u-d*f+this.aX,l=h*f+d*u+this.aY}return i.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},$a=class extends Is{constructor(t,e,i,n,r,a){super(t,e,i,i,n,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function $c(){let s=0,t=0,e=0,i=0;function n(r,a,o,c){s=r,t=o,e=-3*r+3*a-2*o-c,i=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){n(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,u,f){let h=(a-r)/l-(o-r)/(l+u)+(o-a)/u,d=(o-a)/u-(c-a)/(u+f)+(c-o)/f;h*=u,d*=u,n(a,o,h,d)},calc:function(r){let a=r*r,o=a*r;return s+t*r+e*a+i*o}}}var nu=new P,su=new P,rc=new $c,ac=new $c,oc=new $c,Za=class extends di{constructor(t=[],e=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=n}getPoint(t,e=new P){let i=e,n=this.points,r=n.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,u;this.closed||o>0?l=n[(o-1)%r]:(su.subVectors(n[0],n[1]).add(n[0]),l=su);let f=n[o%r],h=n[(o+1)%r];if(this.closed||o+2<r?u=n[(o+2)%r]:(nu.subVectors(n[r-1],n[r-2]).add(n[r-1]),u=nu),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,m=Math.pow(l.distanceToSquared(f),d),v=Math.pow(f.distanceToSquared(h),d),g=Math.pow(h.distanceToSquared(u),d);v<1e-4&&(v=1),m<1e-4&&(m=v),g<1e-4&&(g=v),rc.initNonuniformCatmullRom(l.x,f.x,h.x,u.x,m,v,g),ac.initNonuniformCatmullRom(l.y,f.y,h.y,u.y,m,v,g),oc.initNonuniformCatmullRom(l.z,f.z,h.z,u.z,m,v,g)}else this.curveType==="catmullrom"&&(rc.initCatmullRom(l.x,f.x,h.x,u.x,this.tension),ac.initCatmullRom(l.y,f.y,h.y,u.y,this.tension),oc.initCatmullRom(l.z,f.z,h.z,u.z,this.tension));return i.set(rc.calc(c),ac.calc(c),oc.calc(c)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(n.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let n=this.points[e];t.points.push(n.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(new P().fromArray(n))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function ru(s,t,e,i,n){let r=(i-t)*.5,a=(n-e)*.5,o=s*s,c=s*o;return(2*e-2*i+r+a)*c+(-3*e+3*i-2*r-a)*o+r*s+e}function Wf(s,t){let e=1-s;return e*e*t}function Xf(s,t){return 2*(1-s)*s*t}function qf(s,t){return s*s*t}function lr(s,t,e,i){return Wf(s,t)+Xf(s,e)+qf(s,i)}function Yf(s,t){let e=1-s;return e*e*e*t}function $f(s,t){let e=1-s;return 3*e*e*s*t}function Zf(s,t){return 3*(1-s)*s*s*t}function Jf(s,t){return s*s*s*t}function cr(s,t,e,i,n){return Yf(s,t)+$f(s,e)+Zf(s,i)+Jf(s,n)}var Sr=class extends di{constructor(t=new at,e=new at,i=new at,n=new at){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new at){let i=e,n=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(cr(t,n.x,r.x,a.x,o.x),cr(t,n.y,r.y,a.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ja=class extends di{constructor(t=new P,e=new P,i=new P,n=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new P){let i=e,n=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(cr(t,n.x,r.x,a.x,o.x),cr(t,n.y,r.y,a.y,o.y),cr(t,n.z,r.z,a.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},wr=class extends di{constructor(t=new at,e=new at){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new at){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new at){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ka=class extends di{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Tr=class extends di{constructor(t=new at,e=new at,i=new at){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new at){let i=e,n=this.v0,r=this.v1,a=this.v2;return i.set(lr(t,n.x,r.x,a.x),lr(t,n.y,r.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ja=class extends di{constructor(t=new P,e=new P,i=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new P){let i=e,n=this.v0,r=this.v1,a=this.v2;return i.set(lr(t,n.x,r.x,a.x),lr(t,n.y,r.y,a.y),lr(t,n.z,r.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Er=class extends di{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new at){let i=e,n=this.points,r=(n.length-1)*t,a=Math.floor(r),o=r-a,c=n[a===0?a:a-1],l=n[a],u=n[a>n.length-2?n.length-1:a+1],f=n[a>n.length-3?n.length-1:a+2];return i.set(ru(o,c.x,l.x,u.x,f.x),ru(o,c.y,l.y,u.y,f.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(n.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let n=this.points[e];t.points.push(n.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(new at().fromArray(n))}return this}},mc=Object.freeze({__proto__:null,ArcCurve:$a,CatmullRomCurve3:Za,CubicBezierCurve:Sr,CubicBezierCurve3:Ja,EllipseCurve:Is,LineCurve:wr,LineCurve3:Ka,QuadraticBezierCurve:Tr,QuadraticBezierCurve3:ja,SplineCurve:Er}),Qa=class extends di{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new mc[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),n=this.getCurveLengths(),r=0;for(;r<n.length;){if(n[r]>=i){let a=n[r]-i,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,n=this.curves.length;i<n;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let n=0,r=this.curves;n<r.length;n++){let a=r[n],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let l=0;l<c.length;l++){let u=c[l];i&&i.equals(u)||(e.push(u),i=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let n=t.curves[e];this.curves.push(n.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let n=this.curves[e];t.curves.push(n.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let n=t.curves[e];this.curves.push(new mc[n.type]().fromJSON(n))}return this}},Ar=class extends Qa{constructor(t){super(),this.type="Path",this.currentPoint=new at,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new wr(this.currentPoint.clone(),new at(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,n){let r=new Tr(this.currentPoint.clone(),new at(t,e),new at(i,n));return this.curves.push(r),this.currentPoint.set(i,n),this}bezierCurveTo(t,e,i,n,r,a){let o=new Sr(this.currentPoint.clone(),new at(t,e),new at(i,n),new at(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new Er(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,n,r,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,i,n,r,a),this}absarc(t,e,i,n,r,a){return this.absellipse(t,e,i,i,n,r,a),this}ellipse(t,e,i,n,r,a,o,c){let l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+l,e+u,i,n,r,a,o,c),this}absellipse(t,e,i,n,r,a,o,c){let l=new Is(t,e,i,n,r,a,o,c);if(this.curves.length>0){let f=l.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(l);let u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Ps=class extends Ar{constructor(t){super(t),this.uuid=es(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let i=0,n=this.holes.length;i<n;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let n=t.holes[e];this.holes.push(n.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){let n=this.holes[e];t.holes.push(n.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let n=t.holes[e];this.holes.push(new Ar().fromJSON(n))}return this}};function Kf(s,t,e=2){let i=t&&t.length,n=i?t[0]*e:s.length,r=td(s,0,n,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,c,l;if(i&&(r=ip(s,t,r,e)),s.length>80*e){o=s[0],c=s[1];let u=o,f=c;for(let h=e;h<n;h+=e){let d=s[h],m=s[h+1];d<o&&(o=d),m<c&&(c=m),d>u&&(u=d),m>f&&(f=m)}l=Math.max(u-o,f-c),l=l!==0?32767/l:0}return Rr(r,a,e,o,c,l,0),a}function td(s,t,e,i,n){let r;if(n===fp(s,t,e,i)>0)for(let a=t;a<e;a+=i)r=au(a/i|0,s[a],s[a+1],r);else for(let a=e-i;a>=t;a-=i)r=au(a/i|0,s[a],s[a+1],r);return r&&Ls(r,r.next)&&(Ir(r),r=r.next),r}function Jn(s,t){if(!s)return s;t||(t=s);let e=s,i;do if(i=!1,!e.steiner&&(Ls(e,e.next)||Re(e.prev,e,e.next)===0)){if(Ir(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function Rr(s,t,e,i,n,r,a){if(!s)return;!a&&r&&op(s,i,n,r);let o=s;for(;s.prev!==s.next;){let c=s.prev,l=s.next;if(r?Qf(s,i,n,r):jf(s)){t.push(c.i,s.i,l.i),Ir(s),s=l.next,o=l.next;continue}if(s=l,s===o){a?a===1?(s=tp(Jn(s),t),Rr(s,t,e,i,n,r,2)):a===2&&ep(s,t,e,i,n,r):Rr(Jn(s),t,e,i,n,r,1);break}}}function jf(s){let t=s.prev,e=s,i=s.next;if(Re(t,e,i)>=0)return!1;let n=t.x,r=e.x,a=i.x,o=t.y,c=e.y,l=i.y,u=Math.min(n,r,a),f=Math.min(o,c,l),h=Math.max(n,r,a),d=Math.max(o,c,l),m=i.next;for(;m!==t;){if(m.x>=u&&m.x<=h&&m.y>=f&&m.y<=d&&rr(n,o,r,c,a,l,m.x,m.y)&&Re(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Qf(s,t,e,i){let n=s.prev,r=s,a=s.next;if(Re(n,r,a)>=0)return!1;let o=n.x,c=r.x,l=a.x,u=n.y,f=r.y,h=a.y,d=Math.min(o,c,l),m=Math.min(u,f,h),v=Math.max(o,c,l),g=Math.max(u,f,h),p=gc(d,m,t,e,i),M=gc(v,g,t,e,i),y=s.prevZ,x=s.nextZ;for(;y&&y.z>=p&&x&&x.z<=M;){if(y.x>=d&&y.x<=v&&y.y>=m&&y.y<=g&&y!==n&&y!==a&&rr(o,u,c,f,l,h,y.x,y.y)&&Re(y.prev,y,y.next)>=0||(y=y.prevZ,x.x>=d&&x.x<=v&&x.y>=m&&x.y<=g&&x!==n&&x!==a&&rr(o,u,c,f,l,h,x.x,x.y)&&Re(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;y&&y.z>=p;){if(y.x>=d&&y.x<=v&&y.y>=m&&y.y<=g&&y!==n&&y!==a&&rr(o,u,c,f,l,h,y.x,y.y)&&Re(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;x&&x.z<=M;){if(x.x>=d&&x.x<=v&&x.y>=m&&x.y<=g&&x!==n&&x!==a&&rr(o,u,c,f,l,h,x.x,x.y)&&Re(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function tp(s,t){let e=s;do{let i=e.prev,n=e.next.next;!Ls(i,n)&&id(i,e,e.next,n)&&Cr(i,n)&&Cr(n,i)&&(t.push(i.i,e.i,n.i),Ir(e),Ir(e.next),e=s=n),e=e.next}while(e!==s);return Jn(e)}function ep(s,t,e,i,n,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&hp(a,o)){let c=nd(a,o);a=Jn(a,a.next),c=Jn(c,c.next),Rr(a,t,e,i,n,r,0),Rr(c,t,e,i,n,r,0);return}o=o.next}a=a.next}while(a!==s)}function ip(s,t,e,i){let n=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*i,c=r<a-1?t[r+1]*i:s.length,l=td(s,o,c,i,!1);l===l.next&&(l.steiner=!0),n.push(cp(l))}n.sort(np);for(let r=0;r<n.length;r++)e=sp(n[r],e);return e}function np(s,t){let e=s.x-t.x;if(e===0&&(e=s.y-t.y,e===0)){let i=(s.next.y-s.y)/(s.next.x-s.x),n=(t.next.y-t.y)/(t.next.x-t.x);e=i-n}return e}function sp(s,t){let e=rp(s,t);if(!e)return t;let i=nd(e,s);return Jn(i,i.next),Jn(e,e.next)}function rp(s,t){let e=t,i=s.x,n=s.y,r=-1/0,a;if(Ls(s,e))return e;do{if(Ls(s,e.next))return e.next;if(n<=e.y&&n>=e.next.y&&e.next.y!==e.y){let f=e.x+(n-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=i&&f>r&&(r=f,a=e.x<e.next.x?e:e.next,f===i))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,c=a.x,l=a.y,u=1/0;e=a;do{if(i>=e.x&&e.x>=c&&i!==e.x&&ed(n<l?i:r,n,c,l,n<l?r:i,n,e.x,e.y)){let f=Math.abs(n-e.y)/(i-e.x);Cr(e,s)&&(f<u||f===u&&(e.x>a.x||e.x===a.x&&ap(a,e)))&&(a=e,u=f)}e=e.next}while(e!==o);return a}function ap(s,t){return Re(s.prev,s,t.prev)<0&&Re(t.next,s,s.next)<0}function op(s,t,e,i){let n=s;do n.z===0&&(n.z=gc(n.x,n.y,t,e,i)),n.prevZ=n.prev,n.nextZ=n.next,n=n.next;while(n!==s);n.prevZ.nextZ=null,n.prevZ=null,lp(n)}function lp(s){let t,e=1;do{let i=s,n;s=null;let r=null;for(t=0;i;){t++;let a=i,o=0;for(let l=0;l<e&&(o++,a=a.nextZ,!!a);l++);let c=e;for(;o>0||c>0&&a;)o!==0&&(c===0||!a||i.z<=a.z)?(n=i,i=i.nextZ,o--):(n=a,a=a.nextZ,c--),r?r.nextZ=n:s=n,n.prevZ=r,r=n;i=a}r.nextZ=null,e*=2}while(t>1);return s}function gc(s,t,e,i,n){return s=(s-e)*n|0,t=(t-i)*n|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function cp(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function ed(s,t,e,i,n,r,a,o){return(n-a)*(t-o)>=(s-a)*(r-o)&&(s-a)*(i-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(n-a)*(i-o)}function rr(s,t,e,i,n,r,a,o){return!(s===a&&t===o)&&ed(s,t,e,i,n,r,a,o)}function hp(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!up(s,t)&&(Cr(s,t)&&Cr(t,s)&&dp(s,t)&&(Re(s.prev,s,t.prev)||Re(s,t.prev,t))||Ls(s,t)&&Re(s.prev,s,s.next)>0&&Re(t.prev,t,t.next)>0)}function Re(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function Ls(s,t){return s.x===t.x&&s.y===t.y}function id(s,t,e,i){let n=Ra(Re(s,t,e)),r=Ra(Re(s,t,i)),a=Ra(Re(e,i,s)),o=Ra(Re(e,i,t));return!!(n!==r&&a!==o||n===0&&Aa(s,e,t)||r===0&&Aa(s,i,t)||a===0&&Aa(e,s,i)||o===0&&Aa(e,t,i))}function Aa(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function Ra(s){return s>0?1:s<0?-1:0}function up(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&id(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function Cr(s,t){return Re(s.prev,s,s.next)<0?Re(s,t,s.next)>=0&&Re(s,s.prev,t)>=0:Re(s,t,s.prev)<0||Re(s,s.next,t)<0}function dp(s,t){let e=s,i=!1,n=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&n<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==s);return i}function nd(s,t){let e=vc(s.i,s.x,s.y),i=vc(t.i,t.x,t.y),n=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=n,n.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function au(s,t,e,i){let n=vc(s,t,e);return i?(n.next=i.next,n.prev=i,i.next.prev=n,i.next=n):(n.prev=n,n.next=n),n}function Ir(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function vc(s,t,e){return{i:s,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function fp(s,t,e,i){let n=0;for(let r=t,a=e-i;r<e;r+=i)n+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return n}var xc=class{static triangulate(t,e,i=2){return Kf(t,e,i)}},Xn=class s{static area(t){let e=t.length,i=0;for(let n=e-1,r=0;r<e;n=r++)i+=t[n].x*t[r].y-t[r].x*t[n].y;return i*.5}static isClockWise(t){return s.area(t)<0}static triangulateShape(t,e){let i=[],n=[],r=[];ou(t),lu(i,t);let a=t.length;e.forEach(ou);for(let c=0;c<e.length;c++)n.push(a),a+=e[c].length,lu(i,e[c]);let o=xc.triangulate(i,n);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}};function ou(s){let t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function lu(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}var Pr=class s extends ve{constructor(t=new Ps([new at(.5,.5),new at(-.5,.5),new at(-.5,-.5),new at(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let i=this,n=[],r=[];for(let o=0,c=t.length;o<c;o++){let l=t[o];a(l)}this.setAttribute("position",new Qt(n,3)),this.setAttribute("uv",new Qt(r,2)),this.computeVertexNormals();function a(o){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1,h=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:d-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:pp,y,x=!1,S,w,A,_;if(p){y=p.getSpacedPoints(u),x=!0,h=!1;let j=p.isCatmullRomCurve3?p.closed:!1;S=p.computeFrenetFrames(u,j),w=new P,A=new P,_=new P}h||(g=0,d=0,m=0,v=0);let T=o.extractPoints(l),R=T.shape,I=T.holes;if(!Xn.isClockWise(R)){R=R.reverse();for(let j=0,rt=I.length;j<rt;j++){let ot=I[j];Xn.isClockWise(ot)&&(I[j]=ot.reverse())}}function B(j){let ot=10000000000000001e-36,lt=j[0];for(let dt=1;dt<=j.length;dt++){let kt=dt%j.length,Bt=j[kt],Wt=Bt.x-lt.x,$t=Bt.y-lt.y,D=Wt*Wt+$t*$t,he=Math.max(Math.abs(Bt.x),Math.abs(Bt.y),Math.abs(lt.x),Math.abs(lt.y)),ee=ot*he*he;if(D<=ee){j.splice(kt,1),dt--;continue}lt=Bt}}B(R),I.forEach(B);let N=I.length,O=R;for(let j=0;j<N;j++){let rt=I[j];R=R.concat(rt)}function q(j,rt,ot){return rt||Gt("ExtrudeGeometry: vec does not exist"),j.clone().addScaledVector(rt,ot)}let W=R.length;function nt(j,rt,ot){let lt,dt,kt,Bt=j.x-rt.x,Wt=j.y-rt.y,$t=ot.x-j.x,D=ot.y-j.y,he=Bt*Bt+Wt*Wt,ee=Bt*D-Wt*$t;if(Math.abs(ee)>Number.EPSILON){let C=Math.sqrt(he),b=Math.sqrt($t*$t+D*D),k=rt.x-Wt/C,V=rt.y+Bt/C,$=ot.x-D/b,ct=ot.y+$t/b,ut=(($-k)*D-(ct-V)*$t)/(Bt*D-Wt*$t);lt=k+Bt*ut-j.x,dt=V+Wt*ut-j.y;let J=lt*lt+dt*dt;if(J<=2)return new at(lt,dt);kt=Math.sqrt(J/2)}else{let C=!1;Bt>Number.EPSILON?$t>Number.EPSILON&&(C=!0):Bt<-Number.EPSILON?$t<-Number.EPSILON&&(C=!0):Math.sign(Wt)===Math.sign(D)&&(C=!0),C?(lt=-Wt,dt=Bt,kt=Math.sqrt(he)):(lt=Bt,dt=Wt,kt=Math.sqrt(he/2))}return new at(lt/kt,dt/kt)}let X=[];for(let j=0,rt=O.length,ot=rt-1,lt=j+1;j<rt;j++,ot++,lt++)ot===rt&&(ot=0),lt===rt&&(lt=0),X[j]=nt(O[j],O[ot],O[lt]);let tt=[],et,Ct=X.concat();for(let j=0,rt=N;j<rt;j++){let ot=I[j];et=[];for(let lt=0,dt=ot.length,kt=dt-1,Bt=lt+1;lt<dt;lt++,kt++,Bt++)kt===dt&&(kt=0),Bt===dt&&(Bt=0),et[lt]=nt(ot[lt],ot[kt],ot[Bt]);tt.push(et),Ct=Ct.concat(et)}let Tt;if(g===0)Tt=Xn.triangulateShape(O,I);else{let j=[],rt=[];for(let ot=0;ot<g;ot++){let lt=ot/g,dt=d*Math.cos(lt*Math.PI/2),kt=m*Math.sin(lt*Math.PI/2)+v;for(let Bt=0,Wt=O.length;Bt<Wt;Bt++){let $t=q(O[Bt],X[Bt],kt);pt($t.x,$t.y,-dt),lt===0&&j.push($t)}for(let Bt=0,Wt=N;Bt<Wt;Bt++){let $t=I[Bt];et=tt[Bt];let D=[];for(let he=0,ee=$t.length;he<ee;he++){let C=q($t[he],et[he],kt);pt(C.x,C.y,-dt),lt===0&&D.push(C)}lt===0&&rt.push(D)}}Tt=Xn.triangulateShape(j,rt)}let ae=Tt.length,Xt=m+v;for(let j=0;j<W;j++){let rt=h?q(R[j],Ct[j],Xt):R[j];x?(A.copy(S.normals[0]).multiplyScalar(rt.x),w.copy(S.binormals[0]).multiplyScalar(rt.y),_.copy(y[0]).add(A).add(w),pt(_.x,_.y,_.z)):pt(rt.x,rt.y,0)}for(let j=1;j<=u;j++)for(let rt=0;rt<W;rt++){let ot=h?q(R[rt],Ct[rt],Xt):R[rt];x?(A.copy(S.normals[j]).multiplyScalar(ot.x),w.copy(S.binormals[j]).multiplyScalar(ot.y),_.copy(y[j]).add(A).add(w),pt(_.x,_.y,_.z)):pt(ot.x,ot.y,f/u*j)}for(let j=g-1;j>=0;j--){let rt=j/g,ot=d*Math.cos(rt*Math.PI/2),lt=m*Math.sin(rt*Math.PI/2)+v;for(let dt=0,kt=O.length;dt<kt;dt++){let Bt=q(O[dt],X[dt],lt);pt(Bt.x,Bt.y,f+ot)}for(let dt=0,kt=I.length;dt<kt;dt++){let Bt=I[dt];et=tt[dt];for(let Wt=0,$t=Bt.length;Wt<$t;Wt++){let D=q(Bt[Wt],et[Wt],lt);x?pt(D.x,D.y+y[u-1].y,y[u-1].x+ot):pt(D.x,D.y,f+ot)}}}Jt(),Y();function Jt(){let j=n.length/3;if(h){let rt=0,ot=W*rt;for(let lt=0;lt<ae;lt++){let dt=Tt[lt];Ot(dt[2]+ot,dt[1]+ot,dt[0]+ot)}rt=u+g*2,ot=W*rt;for(let lt=0;lt<ae;lt++){let dt=Tt[lt];Ot(dt[0]+ot,dt[1]+ot,dt[2]+ot)}}else{for(let rt=0;rt<ae;rt++){let ot=Tt[rt];Ot(ot[2],ot[1],ot[0])}for(let rt=0;rt<ae;rt++){let ot=Tt[rt];Ot(ot[0]+W*u,ot[1]+W*u,ot[2]+W*u)}}i.addGroup(j,n.length/3-j,0)}function Y(){let j=n.length/3,rt=0;K(O,rt),rt+=O.length;for(let ot=0,lt=I.length;ot<lt;ot++){let dt=I[ot];K(dt,rt),rt+=dt.length}i.addGroup(j,n.length/3-j,1)}function K(j,rt){let ot=j.length;for(;--ot>=0;){let lt=ot,dt=ot-1;dt<0&&(dt=j.length-1);for(let kt=0,Bt=u+g*2;kt<Bt;kt++){let Wt=W*kt,$t=W*(kt+1),D=rt+lt+Wt,he=rt+dt+Wt,ee=rt+dt+$t,C=rt+lt+$t;ht(D,he,ee,C)}}}function pt(j,rt,ot){c.push(j),c.push(rt),c.push(ot)}function Ot(j,rt,ot){Vt(j),Vt(rt),Vt(ot);let lt=n.length/3,dt=M.generateTopUV(i,n,lt-3,lt-2,lt-1);ce(dt[0]),ce(dt[1]),ce(dt[2])}function ht(j,rt,ot,lt){Vt(j),Vt(rt),Vt(lt),Vt(rt),Vt(ot),Vt(lt);let dt=n.length/3,kt=M.generateSideWallUV(i,n,dt-6,dt-3,dt-2,dt-1);ce(kt[0]),ce(kt[1]),ce(kt[3]),ce(kt[1]),ce(kt[2]),ce(kt[3])}function Vt(j){n.push(c[j*3+0]),n.push(c[j*3+1]),n.push(c[j*3+2])}function ce(j){r.push(j.x),r.push(j.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return mp(e,i,t)}static fromJSON(t,e){let i=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];i.push(o)}let n=t.options.extrudePath;return n!==void 0&&(t.options.extrudePath=new mc[n.type]().fromJSON(n)),new s(i,t.options)}},pp={generateTopUV:function(s,t,e,i,n){let r=t[e*3],a=t[e*3+1],o=t[i*3],c=t[i*3+1],l=t[n*3],u=t[n*3+1];return[new at(r,a),new at(o,c),new at(l,u)]},generateSideWallUV:function(s,t,e,i,n,r){let a=t[e*3],o=t[e*3+1],c=t[e*3+2],l=t[i*3],u=t[i*3+1],f=t[i*3+2],h=t[n*3],d=t[n*3+1],m=t[n*3+2],v=t[r*3],g=t[r*3+1],p=t[r*3+2];return Math.abs(o-u)<Math.abs(a-l)?[new at(a,1-c),new at(l,1-f),new at(h,1-m),new at(v,1-p)]:[new at(o,1-c),new at(u,1-f),new at(d,1-m),new at(g,1-p)]}};function mp(s,t,e){if(e.shapes=[],Array.isArray(s))for(let i=0,n=s.length;i<n;i++){let r=s[i];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Lr=class s extends Ya{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,n=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(n,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}},Ds=class s extends ve{constructor(t=[new at(0,-.5),new at(.5,0),new at(0,.5)],e=12,i=0,n=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:n},e=Math.floor(e),n=te(n,0,Math.PI*2);let r=[],a=[],o=[],c=[],l=[],u=1/e,f=new P,h=new at,d=new P,m=new P,v=new P,g=0,p=0;for(let M=0;M<=t.length-1;M++)switch(M){case 0:g=t[M+1].x-t[M].x,p=t[M+1].y-t[M].y,d.x=p*1,d.y=-g,d.z=p*0,v.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case t.length-1:c.push(v.x,v.y,v.z);break;default:g=t[M+1].x-t[M].x,p=t[M+1].y-t[M].y,d.x=p*1,d.y=-g,d.z=p*0,m.copy(d),d.x+=v.x,d.y+=v.y,d.z+=v.z,d.normalize(),c.push(d.x,d.y,d.z),v.copy(m)}for(let M=0;M<=e;M++){let y=i+M*u*n,x=Math.sin(y),S=Math.cos(y);for(let w=0;w<=t.length-1;w++){f.x=t[w].x*x,f.y=t[w].y,f.z=t[w].x*S,a.push(f.x,f.y,f.z),h.x=M/e,h.y=w/(t.length-1),o.push(h.x,h.y);let A=c[3*w+0]*x,_=c[3*w+1],T=c[3*w+0]*S;l.push(A,_,T)}}for(let M=0;M<e;M++)for(let y=0;y<t.length-1;y++){let x=y+M*t.length,S=x,w=x+t.length,A=x+t.length+1,_=x+1;r.push(S,w,_),r.push(A,_,w)}this.setIndex(r),this.setAttribute("position",new Qt(a,3)),this.setAttribute("uv",new Qt(o,2)),this.setAttribute("normal",new Qt(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.points,t.segments,t.phiStart,t.phiLength)}};var Le=class s extends ve{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};let r=t/2,a=e/2,o=Math.floor(i),c=Math.floor(n),l=o+1,u=c+1,f=t/o,h=e/c,d=[],m=[],v=[],g=[];for(let p=0;p<u;p++){let M=p*h-a;for(let y=0;y<l;y++){let x=y*f-r;m.push(x,-M,0),v.push(0,0,1),g.push(y/o),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let M=0;M<o;M++){let y=M+l*p,x=M+l*(p+1),S=M+1+l*(p+1),w=M+1+l*p;d.push(y,x,w),d.push(x,S,w)}this.setIndex(d),this.setAttribute("position",new Qt(m,3)),this.setAttribute("normal",new Qt(v,3)),this.setAttribute("uv",new Qt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},Ii=class s extends ve{constructor(t=.5,e=1,i=32,n=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:n,thetaStart:r,thetaLength:a},i=Math.max(3,i),n=Math.max(1,n);let o=[],c=[],l=[],u=[],f=t,h=(e-t)/n,d=new P,m=new at;for(let v=0;v<=n;v++){for(let g=0;g<=i;g++){let p=r+g/i*a;d.x=f*Math.cos(p),d.y=f*Math.sin(p),c.push(d.x,d.y,d.z),l.push(0,0,1),m.x=(d.x/e+1)/2,m.y=(d.y/e+1)/2,u.push(m.x,m.y)}f+=h}for(let v=0;v<n;v++){let g=v*(i+1);for(let p=0;p<i;p++){let M=p+g,y=M,x=M+i+1,S=M+i+2,w=M+1;o.push(y,x,w),o.push(x,S,w)}}this.setIndex(o),this.setAttribute("position",new Qt(c,3)),this.setAttribute("normal",new Qt(l,3)),this.setAttribute("uv",new Qt(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var _i=class s extends ve{constructor(t=1,e=32,i=16,n=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:n,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let c=Math.min(a+o,Math.PI),l=0,u=[],f=new P,h=new P,d=[],m=[],v=[],g=[];for(let p=0;p<=i;p++){let M=[],y=p/i,x=a+y*o,S=t*Math.cos(x),w=Math.sqrt(t*t-S*S),A=0;p===0&&a===0?A=.5/e:p===i&&c===Math.PI&&(A=-.5/e);for(let _=0;_<=e;_++){let T=_/e,R=n+T*r;f.x=-w*Math.cos(R),f.y=S,f.z=w*Math.sin(R),m.push(f.x,f.y,f.z),h.copy(f).normalize(),v.push(h.x,h.y,h.z),g.push(T+A,1-y),M.push(l++)}u.push(M)}for(let p=0;p<i;p++)for(let M=0;M<e;M++){let y=u[p][M+1],x=u[p][M],S=u[p+1][M],w=u[p+1][M+1];(p!==0||a>0)&&d.push(y,x,w),(p!==i-1||c<Math.PI)&&d.push(x,S,w)}this.setIndex(d),this.setAttribute("position",new Qt(m,3)),this.setAttribute("normal",new Qt(v,3)),this.setAttribute("uv",new Qt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function is(s){let t={};for(let e in s){t[e]={};for(let i in s[e]){let n=s[e][i];if(cu(n))n.isRenderTargetTexture?(Ht("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone();else if(Array.isArray(n))if(cu(n[0])){let r=[];for(let a=0,o=n.length;a<o;a++)r[a]=n[a].clone();t[e][i]=r}else t[e][i]=n.slice();else t[e][i]=n}}return t}function ii(s){let t={};for(let e=0;e<s.length;e++){let i=is(s[e]);for(let n in i)t[n]=i[n]}return t}function cu(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function gp(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Zc(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ne.workingColorSpace}var sd={clone:is,merge:ii},vp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,re=class extends cn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vp,this.fragmentShader=xp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=is(t.uniforms),this.uniformsGroups=gp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let n in this.uniforms){let a=this.uniforms[n].value;a&&a.isTexture?e.uniforms[n]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[n]={type:"m4",value:a.toArray()}:e.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let n=t.uniforms[i];switch(this.uniforms[i]={},n.type){case"t":this.uniforms[i].value=e[n.value]||null;break;case"c":this.uniforms[i].value=new ft().setHex(n.value);break;case"v2":this.uniforms[i].value=new at().fromArray(n.value);break;case"v3":this.uniforms[i].value=new P().fromArray(n.value);break;case"v4":this.uniforms[i].value=new Me().fromArray(n.value);break;case"m3":this.uniforms[i].value=new qt().fromArray(n.value);break;case"m4":this.uniforms[i].value=new se().fromArray(n.value);break;default:this.uniforms[i].value=n.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},to=class extends re{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},oe=class extends cn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ft(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nl,this.normalScale=new at(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new li,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var eo=class extends cn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ku,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},io=class extends cn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function _s(s,t){return!s||s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function lc(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}var Tn=class{constructor(t,e,i,n){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,n=e[i],r=e[i-1];i:{t:{let a;e:{n:if(!(t<n)){for(let o=i+2;;){if(n===void 0){if(t<r)break n;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=n,n=e[++i],t<n)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(i=2,r=o);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(n=r,r=e[--i-1],t>=r)break t}a=i,i=0;break e}break i}for(;i<a;){let o=i+a>>>1;t<e[o]?a=o:i=o+1}if(n=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,n)}return this.interpolate_(i,r,t,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,n=this.valueSize,r=t*n;for(let a=0;a!==n;++a)e[a]=i[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},no=class extends Tn{constructor(t,e,i,n){super(t,e,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:uc,endingEnd:uc}}intervalChanged_(t,e,i){let n=this.parameterPositions,r=t-2,a=t+1,o=n[r],c=n[a];if(o===void 0)switch(this.getSettings_().endingStart){case dc:r=t,o=2*e-i;break;case fc:r=n.length-2,o=e+n[r]-n[r+1];break;default:r=t,o=i}if(c===void 0)switch(this.getSettings_().endingEnd){case dc:a=t,c=2*i-e;break;case fc:a=1,c=i+n[1]-n[0];break;default:a=t-1,c=e}let l=(i-e)*.5,u=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-i),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(t,e,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,u=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,d=this._weightNext,m=(i-e)/(n-e),v=m*m,g=v*m,p=-h*g+2*h*v-h*m,M=(1+h)*g+(-1.5-2*h)*v+(-.5+h)*m+1,y=(-1-d)*g+(1.5+d)*v+.5*m,x=d*g-d*v;for(let S=0;S!==o;++S)r[S]=p*a[u+S]+M*a[l+S]+y*a[c+S]+x*a[f+S];return r}},so=class extends Tn{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,u=(i-e)/(n-e),f=1-u;for(let h=0;h!==o;++h)r[h]=a[l+h]*f+a[c+h]*u;return r}},ro=class extends Tn{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t){return this.copySampleValue_(t-1)}},ao=class extends Tn{interpolate_(t,e,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,u=this.inTangents,f=this.outTangents;if(!u||!f){let m=(i-e)/(n-e),v=1-m;for(let g=0;g!==o;++g)r[g]=a[l+g]*v+a[c+g]*m;return r}let h=o*2,d=t-1;for(let m=0;m!==o;++m){let v=a[l+m],g=a[c+m],p=d*h+m*2,M=f[p],y=f[p+1],x=t*h+m*2,S=u[x],w=u[x+1],A=yp(i,e,M,S,n);r[m]=rd(A,v,y,w,g)}return r}};function rd(s,t,e,i,n){let r=1-s;return r*r*r*t+3*r*r*s*e+3*r*s*s*i+s*s*s*n}function _p(s,t,e,i,n){let r=1-s;return 3*r*r*(e-t)+6*r*s*(i-e)+3*s*s*(n-i)}function yp(s,t,e,i,n){let r=(s-t)/(n-t);for(let a=0;a<8;a++){let o=rd(r,t,e,i,n)-s;if(Math.abs(o)<1e-10)break;let c=_p(r,t,e,i,n);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}var fi=class{constructor(t,e,i,n){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=_s(e,this.TimeBufferType),this.values=_s(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:_s(t.times,Array),values:_s(t.values,Array)};let n=t.getInterpolation();n!==t.DefaultInterpolation&&(i.interpolation=n),lc(t.settings)&&(i.settings={inTangents:_s(t.settings.inTangents,Array),outTangents:_s(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new ro(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new so(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new no(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new ao(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case hr:e=this.InterpolantFactoryMethodDiscrete;break;case Ha:e=this.InterpolantFactoryMethodLinear;break;case Pa:e=this.InterpolantFactoryMethodSmooth;break;case hc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Ht("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return hr;case this.InterpolantFactoryMethodLinear:return Ha;case this.InterpolantFactoryMethodSmooth:return Pa;case this.InterpolantFactoryMethodBezier:return hc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]*=t;lc(this.settings)&&(hu(this.settings.inTangents,t),hu(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,n=i.length,r=0,a=n-1;for(;r!==n&&i[r]<t;)++r;for(;a!==-1&&i[a]>e;)--a;if(++a,r!==0||a!==n){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Gt("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,n=this.values,r=i.length;r===0&&(Gt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let c=i[o];if(typeof c=="number"&&isNaN(c)){Gt("KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){Gt("KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(n!==void 0&&lf(n))for(let o=0,c=n.length;o!==c;++o){let l=n[o];if(isNaN(l)){Gt("KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===Pa,r=t.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=t[o],u=t[o+1];if(l!==u&&(o!==1||l!==t[0]))if(n)c=!0;else{let f=o*i,h=f-i,d=f+i;for(let m=0;m!==i;++m){let v=e[f+m];if(v!==e[h+m]||v!==e[d+m]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];let f=o*i,h=a*i;for(let d=0;d!==i;++d)e[h+d]=e[f+d]}++a}}if(r>0){t[a]=t[r];for(let o=r*i,c=a*i,l=0;l!==i;++l)e[c+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,n=new i(this.name,t,e);return n.createInterpolant=this.createInterpolant,lc(this.settings)&&(n.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),n}};function hu(s,t){for(let e=0,i=s.length;e!==i;e+=2)s[e]*=t}fi.prototype.ValueTypeName="";fi.prototype.TimeBufferType=Float32Array;fi.prototype.ValueBufferType=Float32Array;fi.prototype.DefaultInterpolation=Ha;var En=class extends fi{constructor(t,e,i){super(t,e,i)}};En.prototype.ValueTypeName="bool";En.prototype.ValueBufferType=Array;En.prototype.DefaultInterpolation=hr;En.prototype.InterpolantFactoryMethodLinear=void 0;En.prototype.InterpolantFactoryMethodSmooth=void 0;var oo=class extends fi{constructor(t,e,i,n){super(t,e,i,n)}};oo.prototype.ValueTypeName="color";var lo=class extends fi{constructor(t,e,i,n){super(t,e,i,n)}};lo.prototype.ValueTypeName="number";var co=class extends Tn{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(i-e)/(n-e),l=t*o;for(let u=l+o;l!==u;l+=4)ri.slerpFlat(r,0,a,l-o,a,l,c);return r}},Dr=class extends fi{constructor(t,e,i,n){super(t,e,i,n)}InterpolantFactoryMethodLinear(t){return new co(this.times,this.values,this.getValueSize(),t)}};Dr.prototype.ValueTypeName="quaternion";Dr.prototype.InterpolantFactoryMethodSmooth=void 0;var An=class extends fi{constructor(t,e,i){super(t,e,i)}};An.prototype.ValueTypeName="string";An.prototype.ValueBufferType=Array;An.prototype.DefaultInterpolation=hr;An.prototype.InterpolantFactoryMethodLinear=void 0;An.prototype.InterpolantFactoryMethodSmooth=void 0;var ho=class extends fi{constructor(t,e,i,n){super(t,e,i,n)}};ho.prototype.ValueTypeName="vector";var uo=class{constructor(t,e,i){let n=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(u){o++,r===!1&&n.onStart!==void 0&&n.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,n.onProgress!==void 0&&n.onProgress(u,a,o),a===o&&(r=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(u){n.onError!==void 0&&n.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,f){return l.push(u,f),this},this.removeHandler=function(u){let f=l.indexOf(u);return f!==-1&&l.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=l.length;f<h;f+=2){let d=l[f],m=l[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},ad=new uo,fo=class{constructor(t){this.manager=t!==void 0?t:ad,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(n,r){i.load(t,n,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};fo.DEFAULT_MATERIAL_NAME="__DEFAULT";var Kn=class extends He{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ft(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Nr=class extends Kn{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(He.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ft(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},cc=new se,uu=new P,du=new P,Ns=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new at(512,512),this.mapType=ei,this.map=null,this.mapPass=null,this.matrix=new se,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Cs,this._frameExtents=new at(1,1),this._viewportCount=1,this._viewports=[new Me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;uu.setFromMatrixPosition(t.matrixWorld),e.position.copy(uu),du.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(du),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,n){cc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(cc,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=n?n.z/r.x:1,o=n?n.w/r.y:1,c=n?n.x/r.x:0,l=n?n.y/r.y:0;t.coordinateSystem===Ts||t.reversedDepth?e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),e.multiply(cc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Ca=new P,Ia=new ri,Bi=new P,Ur=class extends He{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new se,this.projectionMatrix=new se,this.projectionMatrixInverse=new se,this.coordinateSystem=Ci,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Ca,Ia,Bi),Bi.x===1&&Bi.y===1&&Bi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ca,Ia,Bi.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(Ca,Ia,Bi),Bi.x===1&&Bi.y===1&&Bi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ca,Ia,Bi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},bn=new P,fu=new at,pu=new at,qe=class extends Ur{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=$n*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ar*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return $n*2*Math.atan(Math.tan(ar*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){bn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(bn.x,bn.y).multiplyScalar(-t/bn.z),bn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(bn.x,bn.y).multiplyScalar(-t/bn.z)}getViewSize(t,e){return this.getViewBounds(t,fu,pu),e.subVectors(pu,fu)}setViewOffset(t,e,i,n,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ar*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,r=-.5*n,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*n/c,e-=a.offsetY*i/l,n*=a.width/c,i*=a.height/l}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},_c=class extends Ns{constructor(){super(new qe(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){let e=this.camera,i=$n*2*t.angle*this.focus,n=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(i!==e.fov||n!==e.aspect||r!==e.far)&&(e.fov=i,e.aspect=n,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this.aspect=t.aspect,this}toJSON(){let t=super.toJSON();return t.focus=this.focus,t.aspect=this.aspect,t}},Fr=class extends Kn{constructor(t,e,i=0,n=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(He.DEFAULT_UP),this.updateMatrix(),this.target=new He,this.distance=i,this.angle=n,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new _c}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}},yc=class extends Ns{constructor(){super(new qe(90,1,.5,500)),this.isPointLightShadow=!0}},Us=class extends Kn{constructor(t,e,i=0,n=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new yc}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Rn=class extends Ur{constructor(t=-1,e=1,i=1,n=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,r=i-t,a=i+t,o=n+e,c=n-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Mc=class extends Ns{constructor(){super(new Rn(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Br=class extends Kn{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(He.DEFAULT_UP),this.updateMatrix(),this.target=new He,this.shadow=new Mc}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Gi=class extends ve{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var ys=-90,Ms=1,po=class extends He{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new qe(ys,Ms,t,e);n.layers=this.layers,this.add(n);let r=new qe(ys,Ms,t,e);r.layers=this.layers,this.add(r);let a=new qe(ys,Ms,t,e);a.layers=this.layers,this.add(a);let o=new qe(ys,Ms,t,e);o.layers=this.layers,this.add(o);let c=new qe(ys,Ms,t,e);c.layers=this.layers,this.add(c);let l=new qe(ys,Ms,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,n,r,a,o,c]=e;for(let l of e)this.remove(l);if(t===Ci)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Ts)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,u]=this.children,f=t.getRenderTarget(),h=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(i,0,n),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,n),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,2,n),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,3,n),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(i,4,n),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),i.texture.generateMipmaps=v,t.setRenderTarget(i,5,n),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(f,h,d),t.xr.enabled=m,i.texture.needsPMREMUpdate=!0}},mo=class extends qe{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Jc="\\[\\]\\.:\\/",Mp=new RegExp("["+Jc+"]","g"),Kc="[^"+Jc+"]",bp="[^"+Jc.replace("\\.","")+"]",Sp=/((?:WC+[\/:])*)/.source.replace("WC",Kc),wp=/(WCOD+)?/.source.replace("WCOD",bp),Tp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Kc),Ep=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Kc),Ap=new RegExp("^"+Sp+wp+Tp+Ep+"$"),Rp=["material","materials","bones","map"],bc=class{constructor(t,e,i){let n=i||Ee.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,n)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,r=i.length;n!==r;++n)i[n].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Ee=class s{constructor(t,e,i){this.path=e,this.parsedPath=i||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,i):new s(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Mp,"")}static parseTrackName(t){let e=Ap.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let r=i.nodeName.substring(n+1);Rp.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let c=i(o.children);if(c)return c}return null},n=i(t.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)t[e++]=i[n]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,n=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Ht("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=e.objectIndex;switch(i){case"materials":if(!t.material){Gt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Gt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Gt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===l){l=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Gt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Gt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Gt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(l!==void 0){if(t[l]===void 0){Gt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let a=t[n];if(a===void 0){let l=e.nodeName;Gt("PropertyBinding: Trying to update property for track: "+l+"."+n+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(n==="morphTargetInfluences"){if(!t.geometry){Gt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Gt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=n;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ee.Composite=bc;Ee.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ee.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ee.prototype.GetterByBindingType=[Ee.prototype._getValue_direct,Ee.prototype._getValue_array,Ee.prototype._getValue_arrayElement,Ee.prototype._getValue_toArray];Ee.prototype.SetterByBindingTypeAndVersioning=[[Ee.prototype._setValue_direct,Ee.prototype._setValue_direct_setNeedsUpdate,Ee.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ee.prototype._setValue_array,Ee.prototype._setValue_array_setNeedsUpdate,Ee.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ee.prototype._setValue_arrayElement,Ee.prototype._setValue_arrayElement_setNeedsUpdate,Ee.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ee.prototype._setValue_fromArray,Ee.prototype._setValue_fromArray_setNeedsUpdate,Ee.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Gx=new Float32Array(1);var nh=class nh{constructor(t,e,i,n){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,n)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,n){let r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=n,this}};nh.prototype.isMatrix2=!0;var Sc=nh;function jc(s,t,e,i){let n=Cp(i);switch(e){case Vc:return s*t;case So:return s*t/n.components*n.byteLength;case wo:return s*t/n.components*n.byteLength;case Dn:return s*t*2/n.components*n.byteLength;case To:return s*t*2/n.components*n.byteLength;case Gc:return s*t*3/n.components*n.byteLength;case Mi:return s*t*4/n.components*n.byteLength;case Eo:return s*t*4/n.components*n.byteLength;case zr:case Hr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Vr:case Gr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ro:case Io:return Math.max(s,16)*Math.max(t,8)/4;case Ao:case Co:return Math.max(s,8)*Math.max(t,8)/2;case Po:case Lo:case No:case Uo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Do:case Wr:case Fo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Bo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Oo:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case ko:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case zo:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Ho:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Vo:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Go:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Wo:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Xo:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case qo:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Yo:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case $o:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Zo:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Jo:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Ko:case jo:case Qo:return Math.ceil(s/4)*Math.ceil(t/4)*16;case tl:case el:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Xr:case il:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Cp(s){switch(s){case ei:case Oc:return{byteLength:1,components:1};case Bs:case kc:case mi:return{byteLength:2,components:1};case Mo:case bo:return{byteLength:2,components:4};case Pi:case yo:case yi:return{byteLength:4,components:1};case zc:case Hc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Ht("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Rd(){let s=null,t=!1,e=null,i=null;function n(r,a){i=s.requestAnimationFrame(n),e(r,a)}return{start:function(){t!==!0&&e!==null&&s!==null&&(i=s.requestAnimationFrame(n),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Fp(s){let t=new WeakMap;function e(o,c){let l=o.array,u=o.usage,f=l.byteLength,h=s.createBuffer();s.bindBuffer(c,h),s.bufferData(c,l,u),o.onUploadCallback();let d;if(l instanceof Float32Array)d=s.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=s.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=s.SHORT;else if(l instanceof Uint32Array)d=s.UNSIGNED_INT;else if(l instanceof Int32Array)d=s.INT;else if(l instanceof Int8Array)d=s.BYTE;else if(l instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,c,l){let u=c.array,f=c.updateRanges;if(s.bindBuffer(l,o),f.length===0)s.bufferSubData(l,0,u);else{f.sort((d,m)=>d.start-m.start);let h=0;for(let d=1;d<f.length;d++){let m=f[h],v=f[d];v.start<=m.start+m.count+1?m.count=Math.max(m.count,v.start+v.count-m.start):(++h,f[h]=v)}f.length=h+1;for(let d=0,m=f.length;d<m;d++){let v=f[d];s.bufferSubData(l,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=t.get(o);c&&(s.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:n,remove:r,update:a}}var Bp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Op=`#ifdef USE_ALPHAHASH
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
#endif`,kp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Vp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Gp=`#ifdef USE_AOMAP
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
#endif`,Wp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Xp=`#ifdef USE_BATCHING
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
#endif`,qp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Yp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$p=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Zp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Jp=`#ifdef USE_IRIDESCENCE
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
#endif`,Kp=`#ifdef USE_BUMPMAP
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
#endif`,jp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Qp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,tm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,em=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,im=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,nm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,sm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,rm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,am=`#define PI 3.141592653589793
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
} // validated`,om=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,lm=`vec3 transformedNormal = objectNormal;
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
#endif`,cm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,um=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,dm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,fm="gl_FragColor = linearToOutputTexel( gl_FragColor );",pm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,mm=`#ifdef USE_ENVMAP
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
#endif`,gm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,vm=`#ifdef USE_ENVMAP
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
#endif`,xm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_m=`#ifdef USE_ENVMAP
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
#endif`,ym=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Mm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Sm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wm=`#ifdef USE_GRADIENTMAP
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
}`,Tm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Em=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Am=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Rm=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Cm=`#ifdef USE_ENVMAP
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
#endif`,Im=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Pm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Lm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Dm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Nm=`PhysicalMaterial material;
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
#endif`,Um=`uniform sampler2D dfgLUT;
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
}`,Fm=`
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
#endif`,Bm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Om=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,km=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,zm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Hm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Wm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Xm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ym=`#if defined( USE_POINTS_UV )
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
#endif`,$m=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Zm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Jm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Km=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,jm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qm=`#ifdef USE_MORPHTARGETS
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
#endif`,t0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,e0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,i0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,n0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,s0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,r0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,a0=`#ifdef USE_NORMALMAP
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
#endif`,o0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,l0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,c0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,h0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,u0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,d0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,f0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,p0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,m0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,g0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,v0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,x0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,y0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,M0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,b0=`float getShadowMask() {
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
}`,S0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,w0=`#ifdef USE_SKINNING
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
#endif`,T0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,E0=`#ifdef USE_SKINNING
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
#endif`,A0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,R0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,C0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,I0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,P0=`#ifdef USE_TRANSMISSION
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
#endif`,L0=`#ifdef USE_TRANSMISSION
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
#endif`,D0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,N0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,U0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,F0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,B0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,O0=`uniform sampler2D t2D;
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
}`,k0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,z0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,H0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,V0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,G0=`#include <common>
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
}`,W0=`#if DEPTH_PACKING == 3200
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
}`,X0=`#define DISTANCE
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
}`,q0=`#define DISTANCE
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
}`,Y0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Z0=`uniform float scale;
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
}`,J0=`uniform vec3 diffuse;
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
}`,K0=`#include <common>
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
}`,j0=`uniform vec3 diffuse;
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
}`,Q0=`#define LAMBERT
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
}`,tg=`#define LAMBERT
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
}`,eg=`#define MATCAP
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
}`,ig=`#define MATCAP
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
}`,ng=`#define NORMAL
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
}`,sg=`#define NORMAL
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
}`,rg=`#define PHONG
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
}`,ag=`#define PHONG
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
}`,og=`#define STANDARD
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
}`,lg=`#define STANDARD
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
}`,cg=`#define TOON
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
}`,hg=`#define TOON
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
}`,ug=`uniform float size;
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
}`,dg=`uniform vec3 diffuse;
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
}`,fg=`#include <common>
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
}`,pg=`uniform vec3 color;
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
}`,mg=`uniform float rotation;
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
}`,gg=`uniform vec3 diffuse;
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
}`,Yt={alphahash_fragment:Bp,alphahash_pars_fragment:Op,alphamap_fragment:kp,alphamap_pars_fragment:zp,alphatest_fragment:Hp,alphatest_pars_fragment:Vp,aomap_fragment:Gp,aomap_pars_fragment:Wp,batching_pars_vertex:Xp,batching_vertex:qp,begin_vertex:Yp,beginnormal_vertex:$p,bsdfs:Zp,iridescence_fragment:Jp,bumpmap_pars_fragment:Kp,clipping_planes_fragment:jp,clipping_planes_pars_fragment:Qp,clipping_planes_pars_vertex:tm,clipping_planes_vertex:em,color_fragment:im,color_pars_fragment:nm,color_pars_vertex:sm,color_vertex:rm,common:am,cube_uv_reflection_fragment:om,defaultnormal_vertex:lm,displacementmap_pars_vertex:cm,displacementmap_vertex:hm,emissivemap_fragment:um,emissivemap_pars_fragment:dm,colorspace_fragment:fm,colorspace_pars_fragment:pm,envmap_fragment:mm,envmap_common_pars_fragment:gm,envmap_pars_fragment:vm,envmap_pars_vertex:xm,envmap_physical_pars_fragment:Cm,envmap_vertex:_m,fog_vertex:ym,fog_pars_vertex:Mm,fog_fragment:bm,fog_pars_fragment:Sm,gradientmap_pars_fragment:wm,lightmap_pars_fragment:Tm,lights_lambert_fragment:Em,lights_lambert_pars_fragment:Am,lights_pars_begin:Rm,lights_toon_fragment:Im,lights_toon_pars_fragment:Pm,lights_phong_fragment:Lm,lights_phong_pars_fragment:Dm,lights_physical_fragment:Nm,lights_physical_pars_fragment:Um,lights_fragment_begin:Fm,lights_fragment_maps:Bm,lights_fragment_end:Om,lightprobes_pars_fragment:km,logdepthbuf_fragment:zm,logdepthbuf_pars_fragment:Hm,logdepthbuf_pars_vertex:Vm,logdepthbuf_vertex:Gm,map_fragment:Wm,map_pars_fragment:Xm,map_particle_fragment:qm,map_particle_pars_fragment:Ym,metalnessmap_fragment:$m,metalnessmap_pars_fragment:Zm,morphinstance_vertex:Jm,morphcolor_vertex:Km,morphnormal_vertex:jm,morphtarget_pars_vertex:Qm,morphtarget_vertex:t0,normal_fragment_begin:e0,normal_fragment_maps:i0,normal_pars_fragment:n0,normal_pars_vertex:s0,normal_vertex:r0,normalmap_pars_fragment:a0,clearcoat_normal_fragment_begin:o0,clearcoat_normal_fragment_maps:l0,clearcoat_pars_fragment:c0,iridescence_pars_fragment:h0,opaque_fragment:u0,packing:d0,premultiplied_alpha_fragment:f0,project_vertex:p0,dithering_fragment:m0,dithering_pars_fragment:g0,roughnessmap_fragment:v0,roughnessmap_pars_fragment:x0,shadowmap_pars_fragment:_0,shadowmap_pars_vertex:y0,shadowmap_vertex:M0,shadowmask_pars_fragment:b0,skinbase_vertex:S0,skinning_pars_vertex:w0,skinning_vertex:T0,skinnormal_vertex:E0,specularmap_fragment:A0,specularmap_pars_fragment:R0,tonemapping_fragment:C0,tonemapping_pars_fragment:I0,transmission_fragment:P0,transmission_pars_fragment:L0,uv_pars_fragment:D0,uv_pars_vertex:N0,uv_vertex:U0,worldpos_vertex:F0,background_vert:B0,background_frag:O0,backgroundCube_vert:k0,backgroundCube_frag:z0,cube_vert:H0,cube_frag:V0,depth_vert:G0,depth_frag:W0,distance_vert:X0,distance_frag:q0,equirect_vert:Y0,equirect_frag:$0,linedashed_vert:Z0,linedashed_frag:J0,meshbasic_vert:K0,meshbasic_frag:j0,meshlambert_vert:Q0,meshlambert_frag:tg,meshmatcap_vert:eg,meshmatcap_frag:ig,meshnormal_vert:ng,meshnormal_frag:sg,meshphong_vert:rg,meshphong_frag:ag,meshphysical_vert:og,meshphysical_frag:lg,meshtoon_vert:cg,meshtoon_frag:hg,points_vert:ug,points_frag:dg,shadow_vert:fg,shadow_frag:pg,sprite_vert:mg,sprite_frag:gg},Mt={common:{diffuse:{value:new ft(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qt}},envmap:{envMap:{value:null},envMapRotation:{value:new qt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qt},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new P},probesMax:{value:new P},probesResolution:{value:new P}},points:{diffuse:{value:new ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0},uvTransform:{value:new qt}},sprite:{diffuse:{value:new ft(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}}},Yi={basic:{uniforms:ii([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.fog]),vertexShader:Yt.meshbasic_vert,fragmentShader:Yt.meshbasic_frag},lambert:{uniforms:ii([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new ft(0)},envMapIntensity:{value:1}}]),vertexShader:Yt.meshlambert_vert,fragmentShader:Yt.meshlambert_frag},phong:{uniforms:ii([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new ft(0)},specular:{value:new ft(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphong_vert,fragmentShader:Yt.meshphong_frag},standard:{uniforms:ii([Mt.common,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.roughnessmap,Mt.metalnessmap,Mt.fog,Mt.lights,{emissive:{value:new ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag},toon:{uniforms:ii([Mt.common,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.gradientmap,Mt.fog,Mt.lights,{emissive:{value:new ft(0)}}]),vertexShader:Yt.meshtoon_vert,fragmentShader:Yt.meshtoon_frag},matcap:{uniforms:ii([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,{matcap:{value:null}}]),vertexShader:Yt.meshmatcap_vert,fragmentShader:Yt.meshmatcap_frag},points:{uniforms:ii([Mt.points,Mt.fog]),vertexShader:Yt.points_vert,fragmentShader:Yt.points_frag},dashed:{uniforms:ii([Mt.common,Mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Yt.linedashed_vert,fragmentShader:Yt.linedashed_frag},depth:{uniforms:ii([Mt.common,Mt.displacementmap]),vertexShader:Yt.depth_vert,fragmentShader:Yt.depth_frag},normal:{uniforms:ii([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,{opacity:{value:1}}]),vertexShader:Yt.meshnormal_vert,fragmentShader:Yt.meshnormal_frag},sprite:{uniforms:ii([Mt.sprite,Mt.fog]),vertexShader:Yt.sprite_vert,fragmentShader:Yt.sprite_frag},background:{uniforms:{uvTransform:{value:new qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Yt.background_vert,fragmentShader:Yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qt}},vertexShader:Yt.backgroundCube_vert,fragmentShader:Yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Yt.cube_vert,fragmentShader:Yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Yt.equirect_vert,fragmentShader:Yt.equirect_frag},distance:{uniforms:ii([Mt.common,Mt.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Yt.distance_vert,fragmentShader:Yt.distance_frag},shadow:{uniforms:ii([Mt.lights,Mt.fog,{color:{value:new ft(0)},opacity:{value:1}}]),vertexShader:Yt.shadow_vert,fragmentShader:Yt.shadow_frag}};Yi.physical={uniforms:ii([Yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qt},clearcoatNormalScale:{value:new at(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qt},sheen:{value:0},sheenColor:{value:new ft(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qt},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qt},attenuationDistance:{value:0},attenuationColor:{value:new ft(0)},specularColor:{value:new ft(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qt},anisotropyVector:{value:new at},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qt}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag};var al={r:0,b:0,g:0},vg=new se,Cd=new qt;Cd.set(-1,0,0,0,1,0,0,0,1);function xg(s,t,e,i,n,r){let a=new ft(0),o=n===!0?0:1,c,l,u=null,f=0,h=null;function d(M){let y=M.isScene===!0?M.background:null;if(y&&y.isTexture){let x=M.backgroundBlurriness>0;y=t.get(y,x)}return y}function m(M){let y=!1,x=d(M);x===null?g(a,o):x&&x.isColor&&(g(x,1),y=!0);let S=s.xr.getEnvironmentBlendMode();S==="additive"?e.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(s.autoClear||y)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function v(M,y){let x=d(y);x&&(x.isCubeTexture||x.mapping===Or)?(l===void 0&&(l=new mt(new Ce(1,1,1),new re({name:"BackgroundCubeMaterial",uniforms:is(Yi.backgroundCube.uniforms),vertexShader:Yi.backgroundCube.vertexShader,fragmentShader:Yi.backgroundCube.fragmentShader,side:Ze,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(S,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=x,l.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(vg.makeRotationFromEuler(y.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Cd),l.material.toneMapped=ne.getTransfer(x.colorSpace)!==fe,(u!==x||f!==x.version||h!==s.toneMapping)&&(l.material.needsUpdate=!0,u=x,f=x.version,h=s.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new mt(new Le(2,2),new re({name:"BackgroundMaterial",uniforms:is(Yi.background.uniforms),vertexShader:Yi.background.vertexShader,fragmentShader:Yi.background.fragmentShader,side:Wi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=ne.getTransfer(x.colorSpace)!==fe,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||f!==x.version||h!==s.toneMapping)&&(c.material.needsUpdate=!0,u=x,f=x.version,h=s.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function g(M,y){M.getRGB(al,Zc(s)),e.buffers.color.setClear(al.r,al.g,al.b,y,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,y=1){a.set(M),o=y,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,g(a,o)},render:m,addToRenderList:v,dispose:p}}function _g(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},n=h(null),r=n,a=!1;function o(I,L,B,N,O){let q=!1,W=f(I,N,B,L);r!==W&&(r=W,l(r.object)),q=d(I,N,B,O),q&&m(I,N,B,O),O!==null&&t.update(O,s.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,x(I,L,B,N),O!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function c(){return s.createVertexArray()}function l(I){return s.bindVertexArray(I)}function u(I){return s.deleteVertexArray(I)}function f(I,L,B,N){let O=N.wireframe===!0,q=i[L.id];q===void 0&&(q={},i[L.id]=q);let W=I.isInstancedMesh===!0?I.id:0,nt=q[W];nt===void 0&&(nt={},q[W]=nt);let X=nt[B.id];X===void 0&&(X={},nt[B.id]=X);let tt=X[O];return tt===void 0&&(tt=h(c()),X[O]=tt),tt}function h(I){let L=[],B=[],N=[];for(let O=0;O<e;O++)L[O]=0,B[O]=0,N[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:B,attributeDivisors:N,object:I,attributes:{},index:null}}function d(I,L,B,N){let O=r.attributes,q=L.attributes,W=0,nt=B.getAttributes();for(let X in nt)if(nt[X].location>=0){let et=O[X],Ct=q[X];if(Ct===void 0&&(X==="instanceMatrix"&&I.instanceMatrix&&(Ct=I.instanceMatrix),X==="instanceColor"&&I.instanceColor&&(Ct=I.instanceColor)),et===void 0||et.attribute!==Ct||Ct&&et.data!==Ct.data)return!0;W++}return r.attributesNum!==W||r.index!==N}function m(I,L,B,N){let O={},q=L.attributes,W=0,nt=B.getAttributes();for(let X in nt)if(nt[X].location>=0){let et=q[X];et===void 0&&(X==="instanceMatrix"&&I.instanceMatrix&&(et=I.instanceMatrix),X==="instanceColor"&&I.instanceColor&&(et=I.instanceColor));let Ct={};Ct.attribute=et,et&&et.data&&(Ct.data=et.data),O[X]=Ct,W++}r.attributes=O,r.attributesNum=W,r.index=N}function v(){let I=r.newAttributes;for(let L=0,B=I.length;L<B;L++)I[L]=0}function g(I){p(I,0)}function p(I,L){let B=r.newAttributes,N=r.enabledAttributes,O=r.attributeDivisors;B[I]=1,N[I]===0&&(s.enableVertexAttribArray(I),N[I]=1),O[I]!==L&&(s.vertexAttribDivisor(I,L),O[I]=L)}function M(){let I=r.newAttributes,L=r.enabledAttributes;for(let B=0,N=L.length;B<N;B++)L[B]!==I[B]&&(s.disableVertexAttribArray(B),L[B]=0)}function y(I,L,B,N,O,q,W){W===!0?s.vertexAttribIPointer(I,L,B,O,q):s.vertexAttribPointer(I,L,B,N,O,q)}function x(I,L,B,N){v();let O=N.attributes,q=B.getAttributes(),W=L.defaultAttributeValues;for(let nt in q){let X=q[nt];if(X.location>=0){let tt=O[nt];if(tt===void 0&&(nt==="instanceMatrix"&&I.instanceMatrix&&(tt=I.instanceMatrix),nt==="instanceColor"&&I.instanceColor&&(tt=I.instanceColor)),tt!==void 0){let et=tt.normalized,Ct=tt.itemSize,Tt=t.get(tt);if(Tt===void 0)continue;let ae=Tt.buffer,Xt=Tt.type,Jt=Tt.bytesPerElement,Y=Xt===s.INT||Xt===s.UNSIGNED_INT||tt.gpuType===yo;if(tt.isInterleavedBufferAttribute){let K=tt.data,pt=K.stride,Ot=tt.offset;if(K.isInstancedInterleavedBuffer){for(let ht=0;ht<X.locationSize;ht++)p(X.location+ht,K.meshPerAttribute);I.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let ht=0;ht<X.locationSize;ht++)g(X.location+ht);s.bindBuffer(s.ARRAY_BUFFER,ae);for(let ht=0;ht<X.locationSize;ht++)y(X.location+ht,Ct/X.locationSize,Xt,et,pt*Jt,(Ot+Ct/X.locationSize*ht)*Jt,Y)}else{if(tt.isInstancedBufferAttribute){for(let K=0;K<X.locationSize;K++)p(X.location+K,tt.meshPerAttribute);I.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let K=0;K<X.locationSize;K++)g(X.location+K);s.bindBuffer(s.ARRAY_BUFFER,ae);for(let K=0;K<X.locationSize;K++)y(X.location+K,Ct/X.locationSize,Xt,et,Ct*Jt,Ct/X.locationSize*K*Jt,Y)}}else if(W!==void 0){let et=W[nt];if(et!==void 0)switch(et.length){case 2:s.vertexAttrib2fv(X.location,et);break;case 3:s.vertexAttrib3fv(X.location,et);break;case 4:s.vertexAttrib4fv(X.location,et);break;default:s.vertexAttrib1fv(X.location,et)}}}}M()}function S(){T();for(let I in i){let L=i[I];for(let B in L){let N=L[B];for(let O in N){let q=N[O];for(let W in q)u(q[W].object),delete q[W];delete N[O]}}delete i[I]}}function w(I){if(i[I.id]===void 0)return;let L=i[I.id];for(let B in L){let N=L[B];for(let O in N){let q=N[O];for(let W in q)u(q[W].object),delete q[W];delete N[O]}}delete i[I.id]}function A(I){for(let L in i){let B=i[L];for(let N in B){let O=B[N];if(O[I.id]===void 0)continue;let q=O[I.id];for(let W in q)u(q[W].object),delete q[W];delete O[I.id]}}}function _(I){for(let L in i){let B=i[L],N=I.isInstancedMesh===!0?I.id:0,O=B[N];if(O!==void 0){for(let q in O){let W=O[q];for(let nt in W)u(W[nt].object),delete W[nt];delete O[q]}delete B[N],Object.keys(B).length===0&&delete i[L]}}}function T(){R(),a=!0,r!==n&&(r=n,l(r.object))}function R(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:T,resetDefaultState:R,dispose:S,releaseStatesOfGeometry:w,releaseStatesOfObject:_,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:g,disableUnusedAttributes:M}}function yg(s,t,e){let i;function n(c){i=c}function r(c,l){s.drawArrays(i,c,l),e.update(l,i,1)}function a(c,l,u){u!==0&&(s.drawArraysInstanced(i,c,l,u),e.update(l,i,u))}function o(c,l,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,u);let h=0;for(let d=0;d<u;d++)h+=l[d];e.update(h,i,1)}this.setMode=n,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Mg(s,t,e,i){let n;function r(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(A){return!(A!==Mi&&i.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){let _=A===mi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==ei&&A!==yi&&!_&&i.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function c(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",u=c(l);u!==l&&(Ht("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let f=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&h===!1&&Ht("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),M=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),y=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),S=s.getParameter(s.MAX_SAMPLES),w=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:M,maxVaryings:y,maxFragmentUniforms:x,maxSamples:S,samples:w}}function bg(s){let t=this,e=null,i=0,n=!1,r=!1,a=new Ri,o=new qt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){let d=f.length!==0||h||i!==0||n;return n=h,i=f.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){e=u(f,h,0)},this.setState=function(f,h,d){let m=f.clippingPlanes,v=f.clipIntersection,g=f.clipShadows,p=s.get(f);if(!n||m===null||m.length===0||r&&!g)r?u(null):l();else{let M=r?0:i,y=M*4,x=p.clippingState||null;c.value=x,x=u(m,h,y,d);for(let S=0;S!==y;++S)x[S]=e[S];p.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(f,h,d,m){let v=f!==null?f.length:0,g=null;if(v!==0){if(g=c.value,m!==!0||g===null){let p=d+v*4,M=h.matrixWorldInverse;o.getNormalMatrix(M),(g===null||g.length<p)&&(g=new Float32Array(p));for(let y=0,x=d;y!==v;++y,x+=4)a.copy(f[y]).applyMatrix4(M,o),a.normal.toArray(g,x),g[x+3]=a.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,g}}var zs=4,Sg=6,wg=20,Tg=256,qr=new Rn,od=new ft,sh=null,rh=0,ah=0,oh=!1,Eg=new P,ns=new P,Vs=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,n=100,r={}){let{size:a=256,position:o=Eg}=r;sh=this._renderer.getRenderTarget(),rh=this._renderer.getActiveCubeFace(),ah=this._renderer.getActiveMipmapLevel(),oh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,i,n,c,o),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(sh,rh,ah),this._renderer.xr.enabled=oh,t.scissorTest=!1,ks(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===In||t.mapping===ts?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),sh=this._renderer.getRenderTarget(),rh=this._renderer.getActiveCubeFace(),ah=this._renderer.getActiveMipmapLevel(),oh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Pe,minFilter:Pe,generateMipmaps:!1,type:mi,format:Mi,colorSpace:Yn,depthBuffer:!1},n=ld(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ld(t,e,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Ag(r)),this._blurMaterial=Cg(r,t,e),this._ggxMaterial=Rg(r,t,e)}return n}_compileMaterial(t){let e=new mt(new ve,t);this._renderer.compile(e,qr)}_sceneToCubeUV(t,e,i,n,r){let c=new qe(90,1,e,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(od),f.toneMapping=pi,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(n),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new mt(new Ce,new Hi({name:"PMREM.Background",side:Ze,depthWrite:!1,depthTest:!1})));let v=this._backgroundBox,g=v.material,p=!1,M=t.background;M?M.isColor&&(g.color.copy(M),t.background=null,p=!0):(g.color.copy(od),p=!0);for(let y=0;y<6;y++){let x=y%3;x===0?(c.up.set(0,l[y],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[y],r.y,r.z)):x===1?(c.up.set(0,0,l[y]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[y],r.z)):(c.up.set(0,l[y],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[y]));let S=this._cubeSize;ks(n,x*S,y>2?S:0,S,S),f.setRenderTarget(n),p&&f.render(v,c),f.render(t,c)}f.toneMapping=d,f.autoClear=h,t.background=M}_textureToCubeUV(t,e){let i=this._renderer,n=t.mapping===In||t.mapping===ts;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=hd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=cd());let r=n?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let c=this._cubeSize;ks(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(a,qr)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let n=this._lodMeshes.length;for(let r=1;r<n;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=i}_applyGGXFilter(t,e,i){let n=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;let c=a.uniforms,l=i/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),f=Math.sqrt(l*l-u*u),h=l*1.25,d=f*h,{_lodMax:m}=this,v=this._sizeLods[i],g=3*v*(i>m-zs?i-m+zs:0),p=4*(this._cubeSize-v);c.envMap.value=t.texture,c.roughness.value=d,c.mipInt.value=m-e,ks(r,g,p,3*v,2*v),n.setRenderTarget(r),n.render(o,qr),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=m-i,ks(t,g,p,3*v,2*v),n.setRenderTarget(t),n.render(o,qr)}_blur(t,e,i,n){let r=this._pingPongRenderTarget,a=Math.min(n,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,i,a),this._blurPass(r,t,i,i,a)}_blurPass(t,e,i,n,r){let a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[n];c.material=o;let l=o.uniforms;l.envMap.value=t.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-i;let u=this._sizeLods[n],f=3*u*(n>this._lodMax-zs?n-this._lodMax+zs:0),h=4*(this._cubeSize-u);ks(e,f,h,3*u,2*u),a.setRenderTarget(e),a.render(c,qr)}};function Ag(s){let t=[],e=[],i=s,n=s-zs+1+Sg;for(let r=0;r<n;r++){let a=Math.pow(2,i);t.push(a);let o=1/(a-2),c=-o,l=1+o,u=[c,c,l,c,l,l,c,c,l,l,c,l],f=6,h=6,d=3,m=new Float32Array(d*h*f),v=new Float32Array(d*h*f);for(let p=0;p<f;p++){let M=p%3*2/3-1,y=p>2?0:-1,x=[M,y,0,M+2/3,y,0,M+2/3,y+1,0,M,y,0,M+2/3,y+1,0,M,y+1,0];m.set(x,d*h*p);for(let S=0;S<h;S++){let w=u[S*2]*2-1,A=u[S*2+1]*2-1;p===0?ns.set(1,A,w):p===1?ns.set(-w,1,-A):p===2?ns.set(-w,A,1):p===3?ns.set(-1,A,-w):p===4?ns.set(-w,-1,A):ns.set(w,A,-1),ns.toArray(v,(p*h+S)*d)}}let g=new ve;g.setAttribute("position",new Be(m,d)),g.setAttribute("outputDirection",new Be(v,d)),e.push(new mt(g,null)),i>zs&&i--}return{lodMeshes:e,sizeLods:t}}function ld(s,t,e){let i=new $e(s,t,e);return i.texture.mapping=Or,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ks(s,t,e,i,n){s.viewport.set(t,e,i,n),s.scissor.set(t,e,i,n)}function Rg(s,t,e){return new re({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Tg,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:hl(),fragmentShader:`

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
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function Cg(s,t,e){return new re({name:"SphericalGaussianBlur",defines:{SAMPLES:wg,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:hl(),fragmentShader:`

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
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function cd(){return new re({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hl(),fragmentShader:`

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
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function hd(){return new re({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function hl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var ll=class extends $e{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];this.texture=new yr(n),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new Ce(5,5,5),r=new re({name:"CubemapFromEquirect",uniforms:is(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ze,blending:Xi});r.uniforms.tEquirect.value=e;let a=new mt(n,r),o=e.minFilter;return e.minFilter===Pn&&(e.minFilter=Pe),new po(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,n=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,n);t.setRenderTarget(r)}};function Ig(s){let t=new WeakMap,e=new WeakMap,i=null;function n(h,d=!1){return h==null?null:d?a(h):r(h)}function r(h){if(h&&h.isTexture){let d=h.mapping;if(d===vo||d===xo)if(t.has(h)){let m=t.get(h).texture;return o(m,h.mapping)}else{let m=h.image;if(m&&m.height>0){let v=new ll(m.height);return v.fromEquirectangularTexture(s,h),t.set(h,v),h.addEventListener("dispose",l),o(v.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){let d=h.mapping,m=d===vo||d===xo,v=d===In||d===ts;if(m||v){let g=e.get(h),p=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return i===null&&(i=new Vs(s)),g=m?i.fromEquirectangular(h,g):i.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,e.set(h,g),g.texture;if(g!==void 0)return g.texture;{let M=h.image;return m&&M&&M.height>0||v&&M&&c(M)?(i===null&&(i=new Vs(s)),g=m?i.fromEquirectangular(h):i.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,e.set(h,g),h.addEventListener("dispose",u),g.texture):null}}}return h}function o(h,d){return d===vo?h.mapping=In:d===xo&&(h.mapping=ts),h}function c(h){let d=0,m=6;for(let v=0;v<m;v++)h[v]!==void 0&&d++;return d===m}function l(h){let d=h.target;d.removeEventListener("dispose",l);let m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function u(h){let d=h.target;d.removeEventListener("dispose",u);let m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function f(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:n,dispose:f}}function Pg(s){let t={};function e(i){if(t[i]!==void 0)return t[i];let n=s.getExtension(i);return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let n=e(i);return n===null&&qn("WebGLRenderer: "+i+" extension not supported."),n}}}function Lg(s,t,e,i){let n={},r=new WeakMap;function a(f){let h=f.target;h.index!==null&&t.remove(h.index);for(let m in h.attributes)t.remove(h.attributes[m]);h.removeEventListener("dispose",a),delete n[h.id];let d=r.get(h);d&&(t.remove(d),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function o(f,h){return n[h.id]===!0||(h.addEventListener("dispose",a),n[h.id]=!0,e.memory.geometries++),h}function c(f){let h=f.attributes;for(let d in h)t.update(h[d],s.ARRAY_BUFFER)}function l(f){let h=[],d=f.index,m=f.attributes.position,v=0;if(m===void 0)return;if(d!==null){let M=d.array;v=d.version;for(let y=0,x=M.length;y<x;y+=3){let S=M[y+0],w=M[y+1],A=M[y+2];h.push(S,w,w,A,A,S)}}else{let M=m.array;v=m.version;for(let y=0,x=M.length/3-1;y<x;y+=3){let S=y+0,w=y+1,A=y+2;h.push(S,w,w,A,A,S)}}let g=new(m.count>=65535?vr:gr)(h,1);g.version=v;let p=r.get(f);p&&t.remove(p),r.set(f,g)}function u(f){let h=r.get(f);if(h){let d=f.index;d!==null&&h.version<d.version&&l(f)}else l(f);return r.get(f)}return{get:o,update:c,getWireframeAttribute:u}}function Dg(s,t,e){let i;function n(f){i=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function c(f,h){s.drawElements(i,h,r,f*a),e.update(h,i,1)}function l(f,h,d){d!==0&&(s.drawElementsInstanced(i,h,r,f*a,d),e.update(h,i,d))}function u(f,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,f,0,d);let v=0;for(let g=0;g<d;g++)v+=h[g];e.update(v,i,1)}this.setMode=n,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Ng(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:Gt("WebGLInfo: Unknown draw mode:",a);break}}function n(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function Ug(s,t,e){let i=new WeakMap,n=new Me;function r(a,o,c){let l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0,h=i.get(o);if(h===void 0||h.count!==f){let T=function(){A.dispose(),i.delete(o),o.removeEventListener("dispose",T)};h!==void 0&&h.texture.dispose();let d=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],M=o.morphAttributes.color||[],y=0;d===!0&&(y=1),m===!0&&(y=2),v===!0&&(y=3);let x=o.attributes.position.count*y,S=1;x>t.maxTextureSize&&(S=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);let w=new Float32Array(x*S*4*f),A=new fr(w,x,S,f);A.type=yi,A.needsUpdate=!0;let _=y*4;for(let R=0;R<f;R++){let I=g[R],L=p[R],B=M[R],N=x*S*4*R;for(let O=0;O<I.count;O++){let q=O*_;d===!0&&(n.fromBufferAttribute(I,O),w[N+q+0]=n.x,w[N+q+1]=n.y,w[N+q+2]=n.z,w[N+q+3]=0),m===!0&&(n.fromBufferAttribute(L,O),w[N+q+4]=n.x,w[N+q+5]=n.y,w[N+q+6]=n.z,w[N+q+7]=0),v===!0&&(n.fromBufferAttribute(B,O),w[N+q+8]=n.x,w[N+q+9]=n.y,w[N+q+10]=n.z,w[N+q+11]=B.itemSize===4?n.w:1)}}h={count:f,texture:A,size:new at(x,S)},i.set(o,h),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let d=0;for(let v=0;v<l.length;v++)d+=l[v];let m=o.morphTargetsRelative?1:1-d;c.getUniforms().setValue(s,"morphTargetBaseInfluence",m),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",h.texture,e),c.getUniforms().setValue(s,"morphTargetsTextureSize",h.size)}return{update:r}}function Fg(s,t,e,i,n){let r=new WeakMap;function a(l){let u=n.render.frame,f=l.geometry,h=t.get(l,f);if(r.get(h)!==u&&(t.update(h),r.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==u&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){let d=l.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return h}function o(){r=new WeakMap}function c(l){let u=l.target;u.removeEventListener("dispose",c),i.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:a,dispose:o}}var Bg={[Ic]:"LINEAR_TONE_MAPPING",[Pc]:"REINHARD_TONE_MAPPING",[Lc]:"CINEON_TONE_MAPPING",[Dc]:"ACES_FILMIC_TONE_MAPPING",[Uc]:"AGX_TONE_MAPPING",[Fc]:"NEUTRAL_TONE_MAPPING",[Nc]:"CUSTOM_TONE_MAPPING"};function Og(s,t,e,i,n,r){let a=new $e(t,e,{type:s,depthBuffer:n,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=new ve;l.setAttribute("position",new Qt([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Qt([0,2,0,0,2,0],2));let u=new to({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new mt(l,u),h=new Rn(-1,1,1,-1,0,1),d=null,m=null,v=!1,g,p=null,M=[],y=!1;this.setSize=function(x,S){a.setSize(x,S),o!==null&&o.setSize(x,S),c!==null&&c.setSize(x,S);for(let w=0;w<M.length;w++){let A=M[w];A.setSize&&A.setSize(x,S)}},this.setEffects=function(x){M=x,y=M.length>0&&M[0].isRenderPass===!0;let S=a.width,w=a.height;M.length>0&&o===null&&(o=new $e(S,w,{type:mi,depthBuffer:!1,stencilBuffer:!1}),c=new $e(S,w,{type:mi,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<M.length;A++){let _=M[A];_.setSize&&_.setSize(S,w)}},this.begin=function(x,S){if(v||x.toneMapping===pi&&M.length===0)return!1;if(p=S,S!==null){let w=S.width,A=S.height;(a.width!==w||a.height!==A)&&this.setSize(w,A)}return y===!1&&x.setRenderTarget(a),g=x.toneMapping,x.toneMapping=pi,!0},this.hasRenderPass=function(){return y},this.end=function(x,S){x.toneMapping=g,v=!0;let w=a,A=o;for(let _=0;_<M.length;_++){let T=M[_];T.enabled!==!1&&(T.render(x,A,w,S),T.needsSwap!==!1&&(w=A,A=A===o?c:o))}if(d!==x.outputColorSpace||m!==x.toneMapping){d=x.outputColorSpace,m=x.toneMapping,u.defines={},ne.getTransfer(d)===fe&&(u.defines.SRGB_TRANSFER="");let _=Bg[m];_&&(u.defines[_]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=w.texture,x.setRenderTarget(p),x.render(f,h),p=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var Id=new ai,hh=new wn(1,1),Pd=new fr,Ld=new Wa,Dd=new yr,ud=[],dd=[],fd=new Float32Array(16),pd=new Float32Array(9),md=new Float32Array(4);function Gs(s,t,e){let i=s[0];if(i<=0||i>0)return s;let n=t*e,r=ud[n];if(r===void 0&&(r=new Float32Array(n),ud[n]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function Ge(s,t){if(s.length!==t.length)return!1;for(let e=0,i=s.length;e<i;e++)if(s[e]!==t[e])return!1;return!0}function We(s,t){for(let e=0,i=t.length;e<i;e++)s[e]=t[e]}function ul(s,t){let e=dd[t];e===void 0&&(e=new Int32Array(t),dd[t]=e);for(let i=0;i!==t;++i)e[i]=s.allocateTextureUnit();return e}function kg(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function zg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ge(e,t))return;s.uniform2fv(this.addr,t),We(e,t)}}function Hg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ge(e,t))return;s.uniform3fv(this.addr,t),We(e,t)}}function Vg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ge(e,t))return;s.uniform4fv(this.addr,t),We(e,t)}}function Gg(s,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ge(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),We(e,t)}else{if(Ge(e,i))return;md.set(i),s.uniformMatrix2fv(this.addr,!1,md),We(e,i)}}function Wg(s,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ge(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),We(e,t)}else{if(Ge(e,i))return;pd.set(i),s.uniformMatrix3fv(this.addr,!1,pd),We(e,i)}}function Xg(s,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ge(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),We(e,t)}else{if(Ge(e,i))return;fd.set(i),s.uniformMatrix4fv(this.addr,!1,fd),We(e,i)}}function qg(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Yg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ge(e,t))return;s.uniform2iv(this.addr,t),We(e,t)}}function $g(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ge(e,t))return;s.uniform3iv(this.addr,t),We(e,t)}}function Zg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ge(e,t))return;s.uniform4iv(this.addr,t),We(e,t)}}function Jg(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Kg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ge(e,t))return;s.uniform2uiv(this.addr,t),We(e,t)}}function jg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ge(e,t))return;s.uniform3uiv(this.addr,t),We(e,t)}}function Qg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ge(e,t))return;s.uniform4uiv(this.addr,t),We(e,t)}}function tv(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);let r;this.type===s.SAMPLER_2D_SHADOW?(hh.compareFunction=e.isReversedDepthBuffer()?rl:sl,r=hh):r=Id,e.setTexture2D(t||r,n)}function ev(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||Ld,n)}function iv(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTextureCube(t||Dd,n)}function nv(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||Pd,n)}function sv(s){switch(s){case 5126:return kg;case 35664:return zg;case 35665:return Hg;case 35666:return Vg;case 35674:return Gg;case 35675:return Wg;case 35676:return Xg;case 5124:case 35670:return qg;case 35667:case 35671:return Yg;case 35668:case 35672:return $g;case 35669:case 35673:return Zg;case 5125:return Jg;case 36294:return Kg;case 36295:return jg;case 36296:return Qg;case 35678:case 36198:case 36298:case 36306:case 35682:return tv;case 35679:case 36299:case 36307:return ev;case 35680:case 36300:case 36308:case 36293:return iv;case 36289:case 36303:case 36311:case 36292:return nv}}function rv(s,t){s.uniform1fv(this.addr,t)}function av(s,t){let e=Gs(t,this.size,2);s.uniform2fv(this.addr,e)}function ov(s,t){let e=Gs(t,this.size,3);s.uniform3fv(this.addr,e)}function lv(s,t){let e=Gs(t,this.size,4);s.uniform4fv(this.addr,e)}function cv(s,t){let e=Gs(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function hv(s,t){let e=Gs(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function uv(s,t){let e=Gs(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function dv(s,t){s.uniform1iv(this.addr,t)}function fv(s,t){s.uniform2iv(this.addr,t)}function pv(s,t){s.uniform3iv(this.addr,t)}function mv(s,t){s.uniform4iv(this.addr,t)}function gv(s,t){s.uniform1uiv(this.addr,t)}function vv(s,t){s.uniform2uiv(this.addr,t)}function xv(s,t){s.uniform3uiv(this.addr,t)}function _v(s,t){s.uniform4uiv(this.addr,t)}function yv(s,t,e){let i=this.cache,n=t.length,r=ul(e,n);Ge(i,r)||(s.uniform1iv(this.addr,r),We(i,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=hh:a=Id;for(let o=0;o!==n;++o)e.setTexture2D(t[o]||a,r[o])}function Mv(s,t,e){let i=this.cache,n=t.length,r=ul(e,n);Ge(i,r)||(s.uniform1iv(this.addr,r),We(i,r));for(let a=0;a!==n;++a)e.setTexture3D(t[a]||Ld,r[a])}function bv(s,t,e){let i=this.cache,n=t.length,r=ul(e,n);Ge(i,r)||(s.uniform1iv(this.addr,r),We(i,r));for(let a=0;a!==n;++a)e.setTextureCube(t[a]||Dd,r[a])}function Sv(s,t,e){let i=this.cache,n=t.length,r=ul(e,n);Ge(i,r)||(s.uniform1iv(this.addr,r),We(i,r));for(let a=0;a!==n;++a)e.setTexture2DArray(t[a]||Pd,r[a])}function wv(s){switch(s){case 5126:return rv;case 35664:return av;case 35665:return ov;case 35666:return lv;case 35674:return cv;case 35675:return hv;case 35676:return uv;case 5124:case 35670:return dv;case 35667:case 35671:return fv;case 35668:case 35672:return pv;case 35669:case 35673:return mv;case 5125:return gv;case 36294:return vv;case 36295:return xv;case 36296:return _v;case 35678:case 36198:case 36298:case 36306:case 35682:return yv;case 35679:case 36299:case 36307:return Mv;case 35680:case 36300:case 36308:case 36293:return bv;case 36289:case 36303:case 36311:case 36292:return Sv}}var uh=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=sv(e.type)}},dh=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=wv(e.type)}},fh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let n=this.seq;for(let r=0,a=n.length;r!==a;++r){let o=n[r];o.setValue(t,e[o.id],i)}}},lh=/(\w+)(\])?(\[|\.)?/g;function gd(s,t){s.seq.push(t),s.map[t.id]=t}function Tv(s,t,e){let i=s.name,n=i.length;for(lh.lastIndex=0;;){let r=lh.exec(i),a=lh.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===n){gd(e,l===void 0?new uh(o,s,t):new dh(o,s,t));break}else{let f=e.map[o];f===void 0&&(f=new fh(o),gd(e,f)),e=f}}}var Hs=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=t.getActiveUniform(e,a),c=t.getUniformLocation(e,o.name);Tv(o,c,this)}let n=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?n.push(a):r.push(a);n.length>0&&(this.seq=n.concat(r))}setValue(t,e,i,n){let r=this.map[e];r!==void 0&&r.setValue(t,i,n)}setOptional(t,e,i){let n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let r=0,a=e.length;r!==a;++r){let o=e[r],c=i[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,n)}}static seqWithValue(t,e){let i=[];for(let n=0,r=t.length;n!==r;++n){let a=t[n];a.id in e&&i.push(a)}return i}};function vd(s,t,e){let i=s.createShader(t);return s.shaderSource(i,e),s.compileShader(i),i}var Ev=37297,Av=0;function Rv(s,t){let e=s.split(`
`),i=[],n=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=n;a<r;a++){let o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}var xd=new qt;function Cv(s){ne._getMatrix(xd,ne.workingColorSpace,s);let t=`mat3( ${xd.elements.map(e=>e.toFixed(4))} )`;switch(ne.getTransfer(s)){case ur:return[t,"LinearTransferOETF"];case fe:return[t,"sRGBTransferOETF"];default:return Ht("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function _d(s,t,e){let i=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Rv(s.getShaderSource(t),o)}else return r}function Iv(s,t){let e=Cv(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var Pv={[Ic]:"Linear",[Pc]:"Reinhard",[Lc]:"Cineon",[Dc]:"ACESFilmic",[Uc]:"AgX",[Fc]:"Neutral",[Nc]:"Custom"};function Lv(s,t){let e=Pv[t];return e===void 0?(Ht("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var ol=new P;function Dv(){ne.getLuminanceCoefficients(ol);let s=ol.x.toFixed(4),t=ol.y.toFixed(4),e=ol.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Nv(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($r).join(`
`)}function Uv(s){let t=[];for(let e in s){let i=s[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Fv(s,t){let e={},i=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){let r=s.getActiveAttrib(t,n),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function $r(s){return s!==""}function yd(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Md(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Bv=/^[ \t]*#include +<([\w\d./]+)>/gm;function ph(s){return s.replace(Bv,kv)}var Ov=new Map;function kv(s,t){let e=Yt[t];if(e===void 0){let i=Ov.get(t);if(i!==void 0)e=Yt[i],Ht('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return ph(e)}var zv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bd(s){return s.replace(zv,Hv)}function Hv(s,t,e,i){let n="";for(let r=parseInt(t);r<parseInt(e);r++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return n}function Sd(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}var Vv={[jn]:"SHADOWMAP_TYPE_PCF",[Fs]:"SHADOWMAP_TYPE_VSM"};function Gv(s){return Vv[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Wv={[In]:"ENVMAP_TYPE_CUBE",[ts]:"ENVMAP_TYPE_CUBE",[Or]:"ENVMAP_TYPE_CUBE_UV"};function Xv(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":Wv[s.envMapMode]||"ENVMAP_TYPE_CUBE"}var qv={[ts]:"ENVMAP_MODE_REFRACTION"};function Yv(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":qv[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var $v={[Cc]:"ENVMAP_BLENDING_MULTIPLY",[Fu]:"ENVMAP_BLENDING_MIX",[Bu]:"ENVMAP_BLENDING_ADD"};function Zv(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":$v[s.combine]||"ENVMAP_BLENDING_NONE"}function Jv(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function Kv(s,t,e,i){let n=s.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,c=Gv(e),l=Xv(e),u=Yv(e),f=Zv(e),h=Jv(e),d=Nv(e),m=Uv(r),v=n.createProgram(),g,p,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter($r).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter($r).join(`
`),p.length>0&&(p+=`
`)):(g=[Sd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($r).join(`
`),p=[Sd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==pi?"#define TONE_MAPPING":"",e.toneMapping!==pi?Yt.tonemapping_pars_fragment:"",e.toneMapping!==pi?Lv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Yt.colorspace_pars_fragment,Iv("linearToOutputTexel",e.outputColorSpace),Dv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter($r).join(`
`)),a=ph(a),a=yd(a,e),a=Md(a,e),o=ph(o),o=yd(o,e),o=Md(o,e),a=bd(a),o=bd(o),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===Xc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Xc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let y=M+g+a,x=M+p+o,S=vd(n,n.VERTEX_SHADER,y),w=vd(n,n.FRAGMENT_SHADER,x);n.attachShader(v,S),n.attachShader(v,w),e.index0AttributeName!==void 0?n.bindAttribLocation(v,0,e.index0AttributeName):e.hasPositionAttribute===!0&&n.bindAttribLocation(v,0,"position"),n.linkProgram(v);function A(I){if(s.debug.checkShaderErrors){let L=n.getProgramInfoLog(v)||"",B=n.getShaderInfoLog(S)||"",N=n.getShaderInfoLog(w)||"",O=L.trim(),q=B.trim(),W=N.trim(),nt=!0,X=!0;if(n.getProgramParameter(v,n.LINK_STATUS)===!1)if(nt=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(n,v,S,w);else{let tt=_d(n,S,"vertex"),et=_d(n,w,"fragment");Gt("WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(v,n.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+O+`
`+tt+`
`+et)}else O!==""?Ht("WebGLProgram: Program Info Log:",O):(q===""||W==="")&&(X=!1);X&&(I.diagnostics={runnable:nt,programLog:O,vertexShader:{log:q,prefix:g},fragmentShader:{log:W,prefix:p}})}n.deleteShader(S),n.deleteShader(w),_=new Hs(n,v),T=Fv(n,v)}let _;this.getUniforms=function(){return _===void 0&&A(this),_};let T;this.getAttributes=function(){return T===void 0&&A(this),T};let R=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=n.getProgramParameter(v,Ev)),R},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Av++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=S,this.fragmentShader=w,this}var jv=0,mh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let n=this._getShaderCacheForMaterial(t);return n.has(e)===!1&&(n.add(e),e.usedTimes++),n.has(i)===!1&&(n.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new gh(t),e.set(t,i)),i}},gh=class{constructor(t){this.id=jv++,this.code=t,this.usedTimes=0}};function Qv(s){return s===Dn||s===Wr||s===Xr}function tx(s,t,e,i,n,r){let a=new pr,o=new mh,c=new Set,l=[],u=new Map,f=i.logarithmicDepthBuffer,h=i.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(_){return c.add(_),_===0?"uv":`uv${_}`}function v(_,T,R,I,L,B){let N=I.fog,O=L.geometry,q=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?I.environment:null,W=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,nt=t.get(_.envMap||q,W),X=nt&&nt.mapping===Or?nt.image.height:null,tt=d[_.type];_.precision!==null&&(h=i.getMaxPrecision(_.precision),h!==_.precision&&Ht("WebGLProgram.getParameters:",_.precision,"not supported, using",h,"instead."));let et=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Ct=et!==void 0?et.length:0,Tt=0;O.morphAttributes.position!==void 0&&(Tt=1),O.morphAttributes.normal!==void 0&&(Tt=2),O.morphAttributes.color!==void 0&&(Tt=3);let ae,Xt,Jt,Y;if(tt){let _e=Yi[tt];ae=_e.vertexShader,Xt=_e.fragmentShader}else{ae=_.vertexShader,Xt=_.fragmentShader;let _e=o.getVertexShaderStage(_),ue=o.getFragmentShaderStage(_);o.update(_,_e,ue),Jt=_e.id,Y=ue.id}let K=s.getRenderTarget(),pt=s.state.buffers.depth.getReversed(),Ot=L.isInstancedMesh===!0,ht=L.isBatchedMesh===!0,Vt=!!_.map,ce=!!_.matcap,j=!!nt,rt=!!_.aoMap,ot=!!_.lightMap,lt=!!_.bumpMap&&_.wireframe===!1,dt=!!_.normalMap,kt=!!_.displacementMap,Bt=!!_.emissiveMap,Wt=!!_.metalnessMap,$t=!!_.roughnessMap,D=_.anisotropy>0,he=_.clearcoat>0,ee=_.dispersion>0,C=_.retroreflectivity>0,b=_.iridescence>0,k=_.sheen>0,V=_.transmission>0,$=D&&!!_.anisotropyMap,ct=he&&!!_.clearcoatMap,ut=he&&!!_.clearcoatNormalMap,J=he&&!!_.clearcoatRoughnessMap,it=b&&!!_.iridescenceMap,gt=b&&!!_.iridescenceThicknessMap,Nt=k&&!!_.sheenColorMap,yt=k&&!!_.sheenRoughnessMap,vt=!!_.specularMap,Ut=!!_.specularColorMap,zt=!!_.specularIntensityMap,Zt=V&&!!_.transmissionMap,F=V&&!!_.thicknessMap,xt=!!_.gradientMap,Q=!!_.alphaMap,_t=_.alphaTest>0,wt=!!_.alphaHash,st=!!_.extensions,Ft=pi;_.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Ft=s.toneMapping);let Lt={shaderID:tt,shaderType:_.type,shaderName:_.name,vertexShader:ae,fragmentShader:Xt,defines:_.defines,customVertexShaderID:Jt,customFragmentShaderID:Y,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:h,batching:ht,batchingColor:ht&&L._colorsTexture!==null,instancing:Ot,instancingColor:Ot&&L.instanceColor!==null,instancingMorph:Ot&&L.morphTexture!==null,outputColorSpace:K===null?s.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:ne.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Vt,matcap:ce,envMap:j,envMapMode:j&&nt.mapping,envMapCubeUVHeight:X,aoMap:rt,lightMap:ot,bumpMap:lt,normalMap:dt,displacementMap:kt,emissiveMap:Bt,normalMapObjectSpace:dt&&_.normalMapType===zu,normalMapTangentSpace:dt&&_.normalMapType===nl,packedNormalMap:dt&&_.normalMapType===nl&&Qv(_.normalMap.format),metalnessMap:Wt,roughnessMap:$t,anisotropy:D,anisotropyMap:$,clearcoat:he,clearcoatMap:ct,clearcoatNormalMap:ut,clearcoatRoughnessMap:J,dispersion:ee,retroreflection:C,iridescence:b,iridescenceMap:it,iridescenceThicknessMap:gt,sheen:k,sheenColorMap:Nt,sheenRoughnessMap:yt,specularMap:vt,specularColorMap:Ut,specularIntensityMap:zt,transmission:V,transmissionMap:Zt,thicknessMap:F,gradientMap:xt,opaque:_.transparent===!1&&_.blending===Cn&&_.alphaToCoverage===!1,alphaMap:Q,alphaTest:_t,alphaHash:wt,combine:_.combine,mapUv:Vt&&m(_.map.channel),aoMapUv:rt&&m(_.aoMap.channel),lightMapUv:ot&&m(_.lightMap.channel),bumpMapUv:lt&&m(_.bumpMap.channel),normalMapUv:dt&&m(_.normalMap.channel),displacementMapUv:kt&&m(_.displacementMap.channel),emissiveMapUv:Bt&&m(_.emissiveMap.channel),metalnessMapUv:Wt&&m(_.metalnessMap.channel),roughnessMapUv:$t&&m(_.roughnessMap.channel),anisotropyMapUv:$&&m(_.anisotropyMap.channel),clearcoatMapUv:ct&&m(_.clearcoatMap.channel),clearcoatNormalMapUv:ut&&m(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&m(_.clearcoatRoughnessMap.channel),iridescenceMapUv:it&&m(_.iridescenceMap.channel),iridescenceThicknessMapUv:gt&&m(_.iridescenceThicknessMap.channel),sheenColorMapUv:Nt&&m(_.sheenColorMap.channel),sheenRoughnessMapUv:yt&&m(_.sheenRoughnessMap.channel),specularMapUv:vt&&m(_.specularMap.channel),specularColorMapUv:Ut&&m(_.specularColorMap.channel),specularIntensityMapUv:zt&&m(_.specularIntensityMap.channel),transmissionMapUv:Zt&&m(_.transmissionMap.channel),thicknessMapUv:F&&m(_.thicknessMap.channel),alphaMapUv:Q&&m(_.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(dt||D),vertexNormals:!!O.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!O.attributes.uv&&(Vt||Q),fog:!!N,useFog:_.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||O.attributes.normal===void 0&&dt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:pt,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:O.attributes.position!==void 0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:Ct,morphTextureStride:Tt,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:B.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:s.shadowMap.enabled&&R.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ft,decodeVideoTexture:Vt&&_.map.isVideoTexture===!0&&ne.getTransfer(_.map.colorSpace)===fe,decodeVideoTextureEmissive:Bt&&_.emissiveMap.isVideoTexture===!0&&ne.getTransfer(_.emissiveMap.colorSpace)===fe,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===ke,flipSided:_.side===Ze,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:st&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(st&&_.extensions.multiDraw===!0||ht)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Lt.vertexUv1s=c.has(1),Lt.vertexUv2s=c.has(2),Lt.vertexUv3s=c.has(3),c.clear(),Lt}function g(_){let T=[];if(_.shaderID?T.push(_.shaderID):(T.push(_.customVertexShaderID),T.push(_.customFragmentShaderID)),_.defines!==void 0)for(let R in _.defines)T.push(R),T.push(_.defines[R]);return _.isRawShaderMaterial===!1&&(p(T,_),M(T,_),T.push(s.outputColorSpace)),T.push(_.customProgramCacheKey),T.join()}function p(_,T){_.push(T.precision),_.push(T.outputColorSpace),_.push(T.envMapMode),_.push(T.envMapCubeUVHeight),_.push(T.mapUv),_.push(T.alphaMapUv),_.push(T.lightMapUv),_.push(T.aoMapUv),_.push(T.bumpMapUv),_.push(T.normalMapUv),_.push(T.displacementMapUv),_.push(T.emissiveMapUv),_.push(T.metalnessMapUv),_.push(T.roughnessMapUv),_.push(T.anisotropyMapUv),_.push(T.clearcoatMapUv),_.push(T.clearcoatNormalMapUv),_.push(T.clearcoatRoughnessMapUv),_.push(T.iridescenceMapUv),_.push(T.iridescenceThicknessMapUv),_.push(T.sheenColorMapUv),_.push(T.sheenRoughnessMapUv),_.push(T.specularMapUv),_.push(T.specularColorMapUv),_.push(T.specularIntensityMapUv),_.push(T.transmissionMapUv),_.push(T.thicknessMapUv),_.push(T.combine),_.push(T.fogExp2),_.push(T.sizeAttenuation),_.push(T.morphTargetsCount),_.push(T.morphAttributeCount),_.push(T.numSunLights),_.push(T.numDirLights),_.push(T.numPointLights),_.push(T.numSpotLights),_.push(T.numSpotLightMaps),_.push(T.numHemiLights),_.push(T.numRectAreaLights),_.push(T.numSunLightShadows),_.push(T.numDirLightShadows),_.push(T.numPointLightShadows),_.push(T.numSpotLightShadows),_.push(T.numSpotLightShadowsWithMaps),_.push(T.numLightProbes),_.push(T.shadowMapType),_.push(T.toneMapping),_.push(T.numClippingPlanes),_.push(T.numClipIntersection),_.push(T.depthPacking)}function M(_,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function y(_){let T=d[_.type],R;if(T){let I=Yi[T];R=sd.clone(I.uniforms)}else R=_.uniforms;return R}function x(_,T){let R=u.get(T);return R!==void 0?++R.usedTimes:(R=new Kv(s,T,_,n),l.push(R),u.set(T,R)),R}function S(_){if(--_.usedTimes===0){let T=l.indexOf(_);l[T]=l[l.length-1],l.pop(),u.delete(_.cacheKey),_.destroy()}}function w(_){o.remove(_)}function A(){o.dispose()}return{getParameters:v,getProgramCacheKey:g,getUniforms:y,acquireProgram:x,releaseProgram:S,releaseShaderCache:w,programs:l,dispose:A}}function ex(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function i(a){s.delete(a)}function n(a,o,c){s.get(a)[o]=c}function r(){s=new WeakMap}return{has:t,get:e,remove:i,update:n,dispose:r}}function ix(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function wd(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Td(){let s=[],t=0,e=[],i=[],n=[];function r(){t=0,e.length=0,i.length=0,n.length=0}function a(h){let d=0;return h.isInstancedMesh&&(d+=2),h.isSkinnedMesh&&(d+=1),d}function o(h,d,m,v,g,p){let M=s[t];return M===void 0?(M={id:h.id,object:h,geometry:d,material:m,materialVariant:a(h),groupOrder:v,renderOrder:h.renderOrder,z:g,group:p},s[t]=M):(M.id=h.id,M.object=h,M.geometry=d,M.material=m,M.materialVariant=a(h),M.groupOrder=v,M.renderOrder=h.renderOrder,M.z=g,M.group=p),t++,M}function c(h,d,m,v,g,p,M){M.reversedDepth===!0&&(g=-g);let y=o(h,d,m,v,g,p);m.transmission>0?i.push(y):m.transparent===!0?n.push(y):e.push(y)}function l(h,d,m,v,g,p){let M=o(h,d,m,v,g,p);m.transmission>0?i.unshift(M):m.transparent===!0?n.unshift(M):e.unshift(M)}function u(h,d){e.length>1&&e.sort(h||ix),i.length>1&&i.sort(d||wd),n.length>1&&n.sort(d||wd)}function f(){for(let h=t,d=s.length;h<d;h++){let m=s[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:i,transparent:n,init:r,push:c,unshift:l,finish:f,sort:u}}function nx(){let s=new WeakMap;function t(i,n){let r=s.get(i),a;return r===void 0?(a=new Td,s.set(i,[a])):n>=r.length?(a=new Td,r.push(a)):a=r[n],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function sx(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new P,color:new ft};break;case"SpotLight":e={position:new P,direction:new P,color:new ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new ft,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new ft,groundColor:new ft};break;case"RectAreaLight":e={color:new ft,position:new P,halfWidth:new P,halfHeight:new P};break}return s[t.id]=e,e}}}function rx(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var ax=0;function ox(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function lx(s){let t=new sx,e=rx(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new P);let n=new P,r=new se,a=new se;function o(l){let u=0,f=0,h=0;for(let L=0;L<9;L++)i.probe[L].set(0,0,0);let d=0,m=0,v=0,g=0,p=0,M=0,y=0,x=0,S=0,w=0,A=0,_=0,T=0,R=0;l.sort(ox);for(let L=0,B=l.length;L<B;L++){let N=l[L],O=N.color,q=N.intensity,W=N.distance,nt=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===Dn?nt=N.shadow.map.texture:nt=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)u+=O.r*q,f+=O.g*q,h+=O.b*q;else if(N.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(N.sh.coefficients[X],q);R++}else if(N.isSunLight){let X=t.get(N);if(X.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let tt=N.shadow,et=e.get(N);et.shadowIntensity=tt.intensity,et.shadowBias=tt.bias,et.shadowNormalBias=tt.normalBias,et.shadowRadius=tt.radius,et.shadowMapSize.copy(tt.mapSize).multiply(tt.getFrameExtents()),i.sunShadow[m]=et,i.sunShadowMap[m]=nt;let Ct=tt.getViewportCount();for(let Tt=0;Tt<Ct;Tt++)i.sunShadowMatrix[v+Tt]=tt.getMatrix(Tt),i.sunShadowCascade[v+Tt]=tt._cascadeData[Tt];v+=Ct,m++}i.sun[d]=X,d++}else if(N.isDirectionalLight){let X=t.get(N);if(X.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let tt=N.shadow,et=e.get(N);et.shadowIntensity=tt.intensity,et.shadowBias=tt.bias,et.shadowNormalBias=tt.normalBias,et.shadowRadius=tt.radius,et.shadowMapSize=tt.mapSize,i.directionalShadow[g]=et,i.directionalShadowMap[g]=nt,i.directionalShadowMatrix[g]=N.shadow.matrix,S++}i.directional[g]=X,g++}else if(N.isSpotLight){let X=t.get(N);X.position.setFromMatrixPosition(N.matrixWorld),X.color.copy(O).multiplyScalar(q),X.distance=W,X.coneCos=Math.cos(N.angle),X.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),X.decay=N.decay,i.spot[M]=X;let tt=N.shadow;if(N.map&&(i.spotLightMap[_]=N.map,_++,tt.updateMatrices(N),N.castShadow&&T++),i.spotLightMatrix[M]=tt.matrix,N.castShadow){let et=e.get(N);et.shadowIntensity=tt.intensity,et.shadowBias=tt.bias,et.shadowNormalBias=tt.normalBias,et.shadowRadius=tt.radius,et.shadowMapSize=tt.mapSize,i.spotShadow[M]=et,i.spotShadowMap[M]=nt,A++}M++}else if(N.isRectAreaLight){let X=t.get(N);X.color.copy(O).multiplyScalar(q),X.halfWidth.set(N.width*.5,0,0),X.halfHeight.set(0,N.height*.5,0),i.rectArea[y]=X,y++}else if(N.isPointLight){let X=t.get(N);if(X.color.copy(N.color).multiplyScalar(N.intensity),X.distance=N.distance,X.decay=N.decay,N.castShadow){let tt=N.shadow,et=e.get(N);et.shadowIntensity=tt.intensity,et.shadowBias=tt.bias,et.shadowNormalBias=tt.normalBias,et.shadowRadius=tt.radius,et.shadowMapSize=tt.mapSize,et.shadowCameraNear=tt.camera.near,et.shadowCameraFar=tt.camera.far,i.pointShadow[p]=et,i.pointShadowMap[p]=nt,i.pointShadowMatrix[p]=N.shadow.matrix,w++}i.point[p]=X,p++}else if(N.isHemisphereLight){let X=t.get(N);X.skyColor.copy(N.color).multiplyScalar(q),X.groundColor.copy(N.groundColor).multiplyScalar(q),i.hemi[x]=X,x++}}y>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Mt.LTC_FLOAT_1,i.rectAreaLTC2=Mt.LTC_FLOAT_2):(i.rectAreaLTC1=Mt.LTC_HALF_1,i.rectAreaLTC2=Mt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;let I=i.hash;(I.sunLength!==d||I.directionalLength!==g||I.pointLength!==p||I.spotLength!==M||I.rectAreaLength!==y||I.hemiLength!==x||I.numSunShadows!==m||I.numDirectionalShadows!==S||I.numPointShadows!==w||I.numSpotShadows!==A||I.numSpotMaps!==_||I.numLightProbes!==R)&&(i.sun.length=d,i.directional.length=g,i.spot.length=M,i.rectArea.length=y,i.point.length=p,i.hemi.length=x,i.sunShadow.length=m,i.sunShadowMap.length=m,i.sunShadowMatrix.length=v,i.sunShadowCascade.length=v,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.directionalShadowMatrix.length=S,i.pointShadow.length=w,i.pointShadowMap.length=w,i.pointShadowMatrix.length=w,i.spotShadow.length=A,i.spotShadowMap.length=A,i.spotLightMatrix.length=A+_-T,i.spotLightMap.length=_,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=R,I.sunLength=d,I.directionalLength=g,I.pointLength=p,I.spotLength=M,I.rectAreaLength=y,I.hemiLength=x,I.numSunShadows=m,I.numDirectionalShadows=S,I.numPointShadows=w,I.numSpotShadows=A,I.numSpotMaps=_,I.numLightProbes=R,i.version=ax++)}function c(l,u){let f=0,h=0,d=0,m=0,v=0,g=0,p=u.matrixWorldInverse;for(let M=0,y=l.length;M<y;M++){let x=l[M];if(x.isSunLight){let S=i.sun[f];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(p),f++}else if(x.isDirectionalLight){let S=i.directional[h];S.direction.setFromMatrixPosition(x.matrixWorld),n.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(n),S.direction.transformDirection(p),h++}else if(x.isSpotLight){let S=i.spot[m];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(x.matrixWorld),n.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(n),S.direction.transformDirection(p),m++}else if(x.isRectAreaLight){let S=i.rectArea[v];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(p),a.identity(),r.copy(x.matrixWorld),r.premultiply(p),a.extractRotation(r),S.halfWidth.set(x.width*.5,0,0),S.halfHeight.set(0,x.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),v++}else if(x.isPointLight){let S=i.point[d];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(p),d++}else if(x.isHemisphereLight){let S=i.hemi[g];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(p),g++}}}return{setup:o,setupView:c,state:i}}function Ed(s){let t=new lx(s),e=[],i=[],n=[];function r(h){f.camera=h,e.length=0,i.length=0,n.length=0}function a(h){e.push(h)}function o(h){i.push(h)}function c(h){n.push(h)}function l(){t.setup(e)}function u(h){t.setupView(e,h)}let f={lightsArray:e,shadowsArray:i,lightProbeGridArray:n,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:l,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function cx(s){let t=new WeakMap;function e(n,r=0){let a=t.get(n),o;return a===void 0?(o=new Ed(s),t.set(n,[o])):r>=a.length?(o=new Ed(s),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}var hx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ux=`uniform sampler2D shadow_pass;
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
}`,dx=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],fx=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],Ad=new se,Yr=new P,ch=new P;function px(s,t,e){let i=new Cs,n=new at,r=new at,a=new Me,o=new eo,c=new io,l={},u=e.maxTextureSize,f={[Wi]:Ze,[Ze]:Wi,[ke]:ke},h=new re({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:hx,fragmentShader:ux}),d=h.clone();d.defines.HORIZONTAL_PASS=1;let m=new ve;m.setAttribute("position",new Be(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new mt(m,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=jn;let p=this.type;this.render=function(w,A,_){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;this.type===vu&&(Ht("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=jn);let T=s.getRenderTarget(),R=s.getActiveCubeFace(),I=s.getActiveMipmapLevel(),L=s.state;L.setBlending(Xi),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let B=p!==this.type;B&&A.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(O=>O.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,O=w.length;N<O;N++){let q=w[N],W=q.shadow;if(W===void 0){Ht("WebGLShadowMap:",q,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;n.copy(W.mapSize);let nt=W.getFrameExtents();n.multiply(nt),r.copy(W.mapSize),(n.x>u||n.y>u)&&(n.x>u&&(r.x=Math.floor(u/nt.x),n.x=r.x*nt.x,W.mapSize.x=r.x),n.y>u&&(r.y=Math.floor(u/nt.y),n.y=r.y*nt.y,W.mapSize.y=r.y));let X=s.state.buffers.depth.getReversed();if(W.camera._reversedDepth=X,W.map===null||B===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===Fs){if(q.isPointLight){Ht("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new $e(n.x,n.y,{format:Dn,type:mi,minFilter:Pe,magFilter:Pe,generateMipmaps:!1}),W.map.texture.name=q.name+".shadowMap",W.map.depthTexture=new wn(n.x,n.y,yi),W.map.depthTexture.name=q.name+".shadowMapDepth",W.map.depthTexture.format=Oi,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Ye,W.map.depthTexture.magFilter=Ye}else q.isPointLight?(W.map=new ll(n.x),W.map.depthTexture=new qa(n.x,Pi)):(W.map=new $e(n.x,n.y),W.map.depthTexture=new wn(n.x,n.y,Pi)),W.map.depthTexture.name=q.name+".shadowMap",W.map.depthTexture.format=Oi,this.type===jn?(W.map.depthTexture.compareFunction=X?rl:sl,W.map.depthTexture.minFilter=Pe,W.map.depthTexture.magFilter=Pe):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Ye,W.map.depthTexture.magFilter=Ye);W.camera.updateProjectionMatrix()}W.map.isWebGLCubeRenderTarget!==!0&&(W.map.width!==n.x||W.map.height!==n.y)&&W.map.setSize(n.x,n.y);let tt=W.map.isWebGLCubeRenderTarget?6:W.getViewportCount();q.isPointLight!==!0&&W.updateMatrices(q,_);for(let et=0;et<tt;et++){let Ct=W.getCamera(et);if(q.isPointLight){let Tt=W.camera,ae=W.matrix,Xt=q.distance||Tt.far;Xt!==Tt.far&&(Tt.far=Xt,Tt.updateProjectionMatrix()),Yr.setFromMatrixPosition(q.matrixWorld),Tt.position.copy(Yr),ch.copy(Tt.position),ch.add(dx[et]),Tt.up.copy(fx[et]),Tt.lookAt(ch),Tt.updateMatrixWorld(),ae.makeTranslation(-Yr.x,-Yr.y,-Yr.z),Ad.multiplyMatrices(Tt.projectionMatrix,Tt.matrixWorldInverse),W._frustum.setFromProjectionMatrix(Ad,Tt.coordinateSystem,Tt.reversedDepth)}if(W.map.isWebGLCubeRenderTarget)s.setRenderTarget(W.map,et),s.clear();else{et===0&&(s.setRenderTarget(W.map),s.clear());let Tt=W.getViewport(et);a.set(r.x*Tt.x,r.y*Tt.y,r.x*Tt.z,r.y*Tt.w),L.viewport(a)}i=W.getFrustum(et),x(A,_,Ct,q,this.type)}W.isPointLightShadow!==!0&&this.type===Fs&&M(W,_),W.needsUpdate=!1}p=this.type,g.needsUpdate=!1,s.setRenderTarget(T,R,I)};function M(w,A){let _=t.update(v);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null?w.mapPass=new $e(n.x,n.y,{format:Dn,type:mi}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),h.uniforms.shadow_pass.value=w.map.depthTexture,h.uniforms.resolution.value.set(w.map.width,w.map.height),h.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(A,null,_,h,v,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value.set(w.map.width,w.map.height),d.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(A,null,_,d,v,null)}function y(w,A,_,T){let R=null,I=_.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(I!==void 0)R=I;else if(R=_.isPointLight===!0?c:o,s.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let L=R.uuid,B=A.uuid,N=l[L];N===void 0&&(N={},l[L]=N);let O=N[B];O===void 0&&(O=R.clone(),N[B]=O,A.addEventListener("dispose",S)),R=O}if(R.visible=A.visible,R.wireframe=A.wireframe,T===Fs?R.side=A.shadowSide!==null?A.shadowSide:A.side:R.side=A.shadowSide!==null?A.shadowSide:f[A.side],R.alphaMap=A.alphaMap,R.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,R.map=A.map,R.clipShadows=A.clipShadows,R.clippingPlanes=A.clippingPlanes,R.clipIntersection=A.clipIntersection,R.displacementMap=A.displacementMap,R.displacementScale=A.displacementScale,R.displacementBias=A.displacementBias,R.wireframeLinewidth=A.wireframeLinewidth,R.linewidth=A.linewidth,_.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let L=s.properties.get(R);L.light=_}return R}function x(w,A,_,T,R){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&R===Fs)&&(!w.frustumCulled||w.intersectsFrustum(i))){w.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,w.matrixWorld);let B=t.update(w),N=w.material;if(Array.isArray(N)){let O=B.groups;for(let q=0,W=O.length;q<W;q++){let nt=O[q],X=N[nt.materialIndex];if(X&&X.visible){let tt=y(w,X,T,R);w.onBeforeShadow(s,w,A,_,B,tt,nt),s.renderBufferDirect(_,null,B,tt,w,nt),w.onAfterShadow(s,w,A,_,B,tt,nt)}}}else if(N.visible){let O=y(w,N,T,R);w.onBeforeShadow(s,w,A,_,B,O,null),s.renderBufferDirect(_,null,B,O,w,null),w.onAfterShadow(s,w,A,_,B,O,null)}}let L=w.children;for(let B=0,N=L.length;B<N;B++)x(L[B],A,_,T,R)}function S(w){w.target.removeEventListener("dispose",S);for(let _ in l){let T=l[_],R=w.target.uuid;R in T&&(T[R].dispose(),delete T[R])}}}function mx(s,t){function e(){let F=!1,xt=new Me,Q=null,_t=new Me(0,0,0,0);return{setMask:function(wt){Q!==wt&&!F&&(s.colorMask(wt,wt,wt,wt),Q=wt)},setLocked:function(wt){F=wt},setClear:function(wt,st,Ft,Lt,_e){_e===!0&&(wt*=Lt,st*=Lt,Ft*=Lt),xt.set(wt,st,Ft,Lt),_t.equals(xt)===!1&&(s.clearColor(wt,st,Ft,Lt),_t.copy(xt))},reset:function(){F=!1,Q=null,_t.set(-1,0,0,0)}}}function i(){let F=!1,xt=!1,Q=null,_t=null,wt=null;return{setReversed:function(st){if(xt!==st){let Ft=t.get("EXT_clip_control");st?Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.ZERO_TO_ONE_EXT):Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.NEGATIVE_ONE_TO_ONE_EXT),xt=st;let Lt=wt;wt=null,this.setClear(Lt)}},getReversed:function(){return xt},setTest:function(st){st?K(s.DEPTH_TEST):pt(s.DEPTH_TEST)},setMask:function(st){Q!==st&&!F&&(s.depthMask(st),Q=st)},setFunc:function(st){if(xt&&(st=ju[st]),_t!==st){switch(st){case Da:s.depthFunc(s.NEVER);break;case Na:s.depthFunc(s.ALWAYS);break;case Ua:s.depthFunc(s.LESS);break;case ws:s.depthFunc(s.LEQUAL);break;case Fa:s.depthFunc(s.EQUAL);break;case Ba:s.depthFunc(s.GEQUAL);break;case Oa:s.depthFunc(s.GREATER);break;case ka:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}_t=st}},setLocked:function(st){F=st},setClear:function(st){wt!==st&&(wt=st,xt&&(st=1-st),s.clearDepth(st))},reset:function(){F=!1,Q=null,_t=null,wt=null,xt=!1}}}function n(){let F=!1,xt=null,Q=null,_t=null,wt=null,st=null,Ft=null,Lt=null,_e=null;return{setTest:function(ue){F||(ue?K(s.STENCIL_TEST):pt(s.STENCIL_TEST))},setMask:function(ue){xt!==ue&&!F&&(s.stencilMask(ue),xt=ue)},setFunc:function(ue,wi,Ui){(Q!==ue||_t!==wi||wt!==Ui)&&(s.stencilFunc(ue,wi,Ui),Q=ue,_t=wi,wt=Ui)},setOp:function(ue,wi,Ui){(st!==ue||Ft!==wi||Lt!==Ui)&&(s.stencilOp(ue,wi,Ui),st=ue,Ft=wi,Lt=Ui)},setLocked:function(ue){F=ue},setClear:function(ue){_e!==ue&&(s.clearStencil(ue),_e=ue)},reset:function(){F=!1,xt=null,Q=null,_t=null,wt=null,st=null,Ft=null,Lt=null,_e=null}}}let r=new e,a=new i,o=new n,c=new WeakMap,l=new WeakMap,u={},f={},h={},d=new WeakMap,m=[],v=null,g=!1,p=null,M=null,y=null,x=null,S=null,w=null,A=null,_=new ft(0,0,0),T=0,R=!1,I=null,L=null,B=null,N=null,O=null,q=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,nt=0,X=s.getParameter(s.VERSION);X.indexOf("WebGL")!==-1?(nt=parseFloat(/^WebGL (\d)/.exec(X)[1]),W=nt>=1):X.indexOf("OpenGL ES")!==-1&&(nt=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),W=nt>=2);let tt=null,et={},Ct=s.getParameter(s.SCISSOR_BOX),Tt=s.getParameter(s.VIEWPORT),ae=new Me().fromArray(Ct),Xt=new Me().fromArray(Tt);function Jt(F,xt,Q,_t){let wt=new Uint8Array(4),st=s.createTexture();s.bindTexture(F,st),s.texParameteri(F,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(F,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ft=0;Ft<Q;Ft++)F===s.TEXTURE_3D||F===s.TEXTURE_2D_ARRAY?s.texImage3D(xt,0,s.RGBA,1,1,_t,0,s.RGBA,s.UNSIGNED_BYTE,wt):s.texImage2D(xt+Ft,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,wt);return st}let Y={};Y[s.TEXTURE_2D]=Jt(s.TEXTURE_2D,s.TEXTURE_2D,1),Y[s.TEXTURE_CUBE_MAP]=Jt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[s.TEXTURE_2D_ARRAY]=Jt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Y[s.TEXTURE_3D]=Jt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),K(s.DEPTH_TEST),a.setFunc(ws),lt(!1),dt(wc),K(s.CULL_FACE),rt(Xi);function K(F){u[F]!==!0&&(s.enable(F),u[F]=!0)}function pt(F){u[F]!==!1&&(s.disable(F),u[F]=!1)}function Ot(F,xt){return h[F]!==xt?(s.bindFramebuffer(F,xt),h[F]=xt,F===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=xt),F===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=xt),!0):!1}function ht(F,xt){let Q=m,_t=!1;if(F){Q=d.get(xt),Q===void 0&&(Q=[],d.set(xt,Q));let wt=F.textures;if(Q.length!==wt.length||Q[0]!==s.COLOR_ATTACHMENT0){for(let st=0,Ft=wt.length;st<Ft;st++)Q[st]=s.COLOR_ATTACHMENT0+st;Q.length=wt.length,_t=!0}}else Q[0]!==s.BACK&&(Q[0]=s.BACK,_t=!0);_t&&s.drawBuffers(Q)}function Vt(F){return v!==F?(s.useProgram(F),v=F,!0):!1}let ce={[Qn]:s.FUNC_ADD,[_u]:s.FUNC_SUBTRACT,[yu]:s.FUNC_REVERSE_SUBTRACT};ce[Mu]=s.MIN,ce[bu]=s.MAX;let j={[Su]:s.ZERO,[wu]:s.ONE,[Tu]:s.SRC_COLOR,[Ac]:s.SRC_ALPHA,[Pu]:s.SRC_ALPHA_SATURATE,[Cu]:s.DST_COLOR,[Au]:s.DST_ALPHA,[Eu]:s.ONE_MINUS_SRC_COLOR,[Rc]:s.ONE_MINUS_SRC_ALPHA,[Iu]:s.ONE_MINUS_DST_COLOR,[Ru]:s.ONE_MINUS_DST_ALPHA,[Lu]:s.CONSTANT_COLOR,[Du]:s.ONE_MINUS_CONSTANT_COLOR,[Nu]:s.CONSTANT_ALPHA,[Uu]:s.ONE_MINUS_CONSTANT_ALPHA};function rt(F,xt,Q,_t,wt,st,Ft,Lt,_e,ue){if(F===Xi){g===!0&&(pt(s.BLEND),g=!1);return}if(g===!1&&(K(s.BLEND),g=!0),F!==xu){if(F!==p||ue!==R){if((M!==Qn||S!==Qn)&&(s.blendEquation(s.FUNC_ADD),M=Qn,S=Qn),ue)switch(F){case Cn:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ve:s.blendFunc(s.ONE,s.ONE);break;case Tc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ec:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Gt("WebGLState: Invalid blending: ",F);break}else switch(F){case Cn:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ve:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Tc:Gt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ec:Gt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Gt("WebGLState: Invalid blending: ",F);break}y=null,x=null,w=null,A=null,_.set(0,0,0),T=0,p=F,R=ue}return}wt=wt||xt,st=st||Q,Ft=Ft||_t,(xt!==M||wt!==S)&&(s.blendEquationSeparate(ce[xt],ce[wt]),M=xt,S=wt),(Q!==y||_t!==x||st!==w||Ft!==A)&&(s.blendFuncSeparate(j[Q],j[_t],j[st],j[Ft]),y=Q,x=_t,w=st,A=Ft),(Lt.equals(_)===!1||_e!==T)&&(s.blendColor(Lt.r,Lt.g,Lt.b,_e),_.copy(Lt),T=_e),p=F,R=!1}function ot(F,xt){F.side===ke?pt(s.CULL_FACE):K(s.CULL_FACE);let Q=F.side===Ze;xt&&(Q=!Q),lt(Q),F.blending===Cn&&F.transparent===!1?rt(Xi):rt(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),r.setMask(F.colorWrite);let _t=F.stencilWrite;o.setTest(_t),_t&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Bt(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?K(s.SAMPLE_ALPHA_TO_COVERAGE):pt(s.SAMPLE_ALPHA_TO_COVERAGE)}function lt(F){I!==F&&(F?s.frontFace(s.CW):s.frontFace(s.CCW),I=F)}function dt(F){F!==mu?(K(s.CULL_FACE),F!==L&&(F===wc?s.cullFace(s.BACK):F===gu?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):pt(s.CULL_FACE),L=F}function kt(F){F!==B&&(W&&s.lineWidth(F),B=F)}function Bt(F,xt,Q){F?(K(s.POLYGON_OFFSET_FILL),(N!==xt||O!==Q)&&(N=xt,O=Q,a.getReversed()&&(xt=-xt),s.polygonOffset(xt,Q))):pt(s.POLYGON_OFFSET_FILL)}function Wt(F){F?K(s.SCISSOR_TEST):pt(s.SCISSOR_TEST)}function $t(F){F===void 0&&(F=s.TEXTURE0+q-1),tt!==F&&(s.activeTexture(F),tt=F)}function D(F,xt,Q){Q===void 0&&(tt===null?Q=s.TEXTURE0+q-1:Q=tt);let _t=et[Q];_t===void 0&&(_t={type:void 0,texture:void 0},et[Q]=_t),(_t.type!==F||_t.texture!==xt)&&(tt!==Q&&(s.activeTexture(Q),tt=Q),s.bindTexture(F,xt||Y[F]),_t.type=F,_t.texture=xt)}function he(){let F=et[tt];F!==void 0&&F.type!==void 0&&(s.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function ee(){try{s.compressedTexImage2D(...arguments)}catch(F){Gt("WebGLState:",F)}}function C(){try{s.compressedTexImage3D(...arguments)}catch(F){Gt("WebGLState:",F)}}function b(){try{s.texSubImage2D(...arguments)}catch(F){Gt("WebGLState:",F)}}function k(){try{s.texSubImage3D(...arguments)}catch(F){Gt("WebGLState:",F)}}function V(){try{s.compressedTexSubImage2D(...arguments)}catch(F){Gt("WebGLState:",F)}}function $(){try{s.compressedTexSubImage3D(...arguments)}catch(F){Gt("WebGLState:",F)}}function ct(){try{s.texStorage2D(...arguments)}catch(F){Gt("WebGLState:",F)}}function ut(){try{s.texStorage3D(...arguments)}catch(F){Gt("WebGLState:",F)}}function J(){try{s.texImage2D(...arguments)}catch(F){Gt("WebGLState:",F)}}function it(){try{s.texImage3D(...arguments)}catch(F){Gt("WebGLState:",F)}}function gt(F){return f[F]!==void 0?f[F]:s.getParameter(F)}function Nt(F,xt){f[F]!==xt&&(s.pixelStorei(F,xt),f[F]=xt)}function yt(F){ae.equals(F)===!1&&(s.scissor(F.x,F.y,F.z,F.w),ae.copy(F))}function vt(F){Xt.equals(F)===!1&&(s.viewport(F.x,F.y,F.z,F.w),Xt.copy(F))}function Ut(F,xt){let Q=l.get(xt);Q===void 0&&(Q=new WeakMap,l.set(xt,Q));let _t=Q.get(F);_t===void 0&&(_t=s.getUniformBlockIndex(xt,F.name),Q.set(F,_t))}function zt(F,xt){let _t=l.get(xt).get(F);c.get(xt)!==_t&&(s.uniformBlockBinding(xt,_t,F.__bindingPointIndex),c.set(xt,_t))}function Zt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),u={},f={},tt=null,et={},h={},d=new WeakMap,m=[],v=null,g=!1,p=null,M=null,y=null,x=null,S=null,w=null,A=null,_=new ft(0,0,0),T=0,R=!1,I=null,L=null,B=null,N=null,O=null,ae.set(0,0,s.canvas.width,s.canvas.height),Xt.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:K,disable:pt,bindFramebuffer:Ot,drawBuffers:ht,useProgram:Vt,setBlending:rt,setMaterial:ot,setFlipSided:lt,setCullFace:dt,setLineWidth:kt,setPolygonOffset:Bt,setScissorTest:Wt,activeTexture:$t,bindTexture:D,unbindTexture:he,compressedTexImage2D:ee,compressedTexImage3D:C,texImage2D:J,texImage3D:it,pixelStorei:Nt,getParameter:gt,updateUBOMapping:Ut,uniformBlockBinding:zt,texStorage2D:ct,texStorage3D:ut,texSubImage2D:b,texSubImage3D:k,compressedTexSubImage2D:V,compressedTexSubImage3D:$,scissor:yt,viewport:vt,reset:Zt}}function gx(s,t,e,i,n,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new at,u=new WeakMap,f=new Set,h,d=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(C,b){return m?new OffscreenCanvas(C,b):dr("canvas")}function g(C,b,k){let V=1,$=ee(C);if(($.width>k||$.height>k)&&(V=k/Math.max($.width,$.height)),V<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let ct=Math.floor(V*$.width),ut=Math.floor(V*$.height);h===void 0&&(h=v(ct,ut));let J=b?v(ct,ut):h;return J.width=ct,J.height=ut,J.getContext("2d").drawImage(C,0,0,ct,ut),Ht("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+ct+"x"+ut+")."),J}else return"data"in C&&Ht("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),C;return C}function p(C){return C.generateMipmaps}function M(C){s.generateMipmap(C)}function y(C){return C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?s.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function x(C,b,k,V,$,ct=!1){if(C!==null){if(s[C]!==void 0)return s[C];Ht("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ut;V&&(ut=t.get("EXT_texture_norm16"),ut||Ht("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=b;if(b===s.RED&&(k===s.FLOAT&&(J=s.R32F),k===s.HALF_FLOAT&&(J=s.R16F),k===s.UNSIGNED_BYTE&&(J=s.R8),k===s.UNSIGNED_SHORT&&ut&&(J=ut.R16_EXT),k===s.SHORT&&ut&&(J=ut.R16_SNORM_EXT)),b===s.RED_INTEGER&&(k===s.UNSIGNED_BYTE&&(J=s.R8UI),k===s.UNSIGNED_SHORT&&(J=s.R16UI),k===s.UNSIGNED_INT&&(J=s.R32UI),k===s.BYTE&&(J=s.R8I),k===s.SHORT&&(J=s.R16I),k===s.INT&&(J=s.R32I)),b===s.RG&&(k===s.FLOAT&&(J=s.RG32F),k===s.HALF_FLOAT&&(J=s.RG16F),k===s.UNSIGNED_BYTE&&(J=s.RG8),k===s.UNSIGNED_SHORT&&ut&&(J=ut.RG16_EXT),k===s.SHORT&&ut&&(J=ut.RG16_SNORM_EXT)),b===s.RG_INTEGER&&(k===s.UNSIGNED_BYTE&&(J=s.RG8UI),k===s.UNSIGNED_SHORT&&(J=s.RG16UI),k===s.UNSIGNED_INT&&(J=s.RG32UI),k===s.BYTE&&(J=s.RG8I),k===s.SHORT&&(J=s.RG16I),k===s.INT&&(J=s.RG32I)),b===s.RGB_INTEGER&&(k===s.UNSIGNED_BYTE&&(J=s.RGB8UI),k===s.UNSIGNED_SHORT&&(J=s.RGB16UI),k===s.UNSIGNED_INT&&(J=s.RGB32UI),k===s.BYTE&&(J=s.RGB8I),k===s.SHORT&&(J=s.RGB16I),k===s.INT&&(J=s.RGB32I)),b===s.RGBA_INTEGER&&(k===s.UNSIGNED_BYTE&&(J=s.RGBA8UI),k===s.UNSIGNED_SHORT&&(J=s.RGBA16UI),k===s.UNSIGNED_INT&&(J=s.RGBA32UI),k===s.BYTE&&(J=s.RGBA8I),k===s.SHORT&&(J=s.RGBA16I),k===s.INT&&(J=s.RGBA32I)),b===s.RGB&&(k===s.UNSIGNED_SHORT&&ut&&(J=ut.RGB16_EXT),k===s.SHORT&&ut&&(J=ut.RGB16_SNORM_EXT),k===s.UNSIGNED_INT_5_9_9_9_REV&&(J=s.RGB9_E5),k===s.UNSIGNED_INT_10F_11F_11F_REV&&(J=s.R11F_G11F_B10F)),b===s.RGBA){let it=ct?ur:ne.getTransfer($);k===s.FLOAT&&(J=s.RGBA32F),k===s.HALF_FLOAT&&(J=s.RGBA16F),k===s.UNSIGNED_BYTE&&(J=it===fe?s.SRGB8_ALPHA8:s.RGBA8),k===s.UNSIGNED_SHORT&&ut&&(J=ut.RGBA16_EXT),k===s.SHORT&&ut&&(J=ut.RGBA16_SNORM_EXT),k===s.UNSIGNED_SHORT_4_4_4_4&&(J=s.RGBA4),k===s.UNSIGNED_SHORT_5_5_5_1&&(J=s.RGB5_A1)}return(J===s.R16F||J===s.R32F||J===s.RG16F||J===s.RG32F||J===s.RGBA16F||J===s.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function S(C,b){let k;return C?b===null||b===Pi||b===Os?k=s.DEPTH24_STENCIL8:b===yi?k=s.DEPTH32F_STENCIL8:b===Bs&&(k=s.DEPTH24_STENCIL8,Ht("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Pi||b===Os?k=s.DEPTH_COMPONENT24:b===yi?k=s.DEPTH_COMPONENT32F:b===Bs&&(k=s.DEPTH_COMPONENT16),k}function w(C,b){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==Ye&&C.minFilter!==Pe?Math.log2(Math.max(b.width,b.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?b.mipmaps.length:1}function A(C){let b=C.target;b.removeEventListener("dispose",A),T(b),b.isVideoTexture&&u.delete(b),b.isHTMLTexture&&f.delete(b)}function _(C){let b=C.target;b.removeEventListener("dispose",_),I(b)}function T(C){let b=i.get(C);if(b.__webglInit===void 0)return;let k=C.source,V=d.get(k);if(V){let $=V[b.__cacheKey];$.usedTimes--,$.usedTimes===0&&R(C),Object.keys(V).length===0&&d.delete(k)}i.remove(C)}function R(C){let b=i.get(C);s.deleteTexture(b.__webglTexture);let k=C.source,V=d.get(k);delete V[b.__cacheKey],a.memory.textures--}function I(C){let b=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(b.__webglFramebuffer[V]))for(let $=0;$<b.__webglFramebuffer[V].length;$++)s.deleteFramebuffer(b.__webglFramebuffer[V][$]);else s.deleteFramebuffer(b.__webglFramebuffer[V]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[V])}else{if(Array.isArray(b.__webglFramebuffer))for(let V=0;V<b.__webglFramebuffer.length;V++)s.deleteFramebuffer(b.__webglFramebuffer[V]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let V=0;V<b.__webglColorRenderbuffer.length;V++)b.__webglColorRenderbuffer[V]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[V]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let k=C.textures;for(let V=0,$=k.length;V<$;V++){let ct=i.get(k[V]);ct.__webglTexture&&(s.deleteTexture(ct.__webglTexture),a.memory.textures--),i.remove(k[V])}i.remove(C)}let L=0;function B(){L=0}function N(){return L}function O(C){L=C}function q(){let C=L;return C>=n.maxTextures&&Ht("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+n.maxTextures),L+=1,C}function W(C){let b=[];return b.push(C.wrapS),b.push(C.wrapT),b.push(C.wrapR||0),b.push(C.magFilter),b.push(C.minFilter),b.push(C.anisotropy),b.push(C.internalFormat),b.push(C.format),b.push(C.type),b.push(C.generateMipmaps),b.push(C.premultiplyAlpha),b.push(C.flipY),b.push(C.unpackAlignment),b.push(C.colorSpace),b.join()}function nt(C,b){let k=i.get(C);if(C.isVideoTexture&&D(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&k.__version!==C.version){let V=C.image;if(V===null)Ht("WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)Ht("WebGLRenderer: Texture marked for update but image is incomplete");else{pt(k,C,b);return}}else C.isExternalTexture&&(k.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,k.__webglTexture,s.TEXTURE0+b)}function X(C,b){let k=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&k.__version!==C.version){pt(k,C,b);return}else C.isExternalTexture&&(k.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,k.__webglTexture,s.TEXTURE0+b)}function tt(C,b){let k=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&k.__version!==C.version){pt(k,C,b);return}e.bindTexture(s.TEXTURE_3D,k.__webglTexture,s.TEXTURE0+b)}function et(C,b){let k=i.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&k.__version!==C.version){Ot(k,C,b);return}e.bindTexture(s.TEXTURE_CUBE_MAP,k.__webglTexture,s.TEXTURE0+b)}let Ct={[an]:s.REPEAT,[ti]:s.CLAMP_TO_EDGE,[za]:s.MIRRORED_REPEAT},Tt={[Ye]:s.NEAREST,[Ou]:s.NEAREST_MIPMAP_NEAREST,[kr]:s.NEAREST_MIPMAP_LINEAR,[Pe]:s.LINEAR,[_o]:s.LINEAR_MIPMAP_NEAREST,[Pn]:s.LINEAR_MIPMAP_LINEAR},ae={[Vu]:s.NEVER,[Yu]:s.ALWAYS,[Gu]:s.LESS,[sl]:s.LEQUAL,[Wu]:s.EQUAL,[rl]:s.GEQUAL,[Xu]:s.GREATER,[qu]:s.NOTEQUAL};function Xt(C,b){if(b.type===yi&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Pe||b.magFilter===_o||b.magFilter===kr||b.magFilter===Pn||b.minFilter===Pe||b.minFilter===_o||b.minFilter===kr||b.minFilter===Pn)&&Ht("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(C,s.TEXTURE_WRAP_S,Ct[b.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,Ct[b.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,Ct[b.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,Tt[b.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,Tt[b.minFilter]),b.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,ae[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Ye||b.minFilter!==kr&&b.minFilter!==Pn||b.type===yi&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){let k=t.get("EXT_texture_filter_anisotropic");s.texParameterf(C,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,n.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function Jt(C,b){let k=!1;C.__webglInit===void 0&&(C.__webglInit=!0,b.addEventListener("dispose",A));let V=b.source,$=d.get(V);$===void 0&&($={},d.set(V,$));let ct=W(b);if(ct!==C.__cacheKey){$[ct]===void 0&&($[ct]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,k=!0),$[ct].usedTimes++;let ut=$[C.__cacheKey];ut!==void 0&&($[C.__cacheKey].usedTimes--,ut.usedTimes===0&&R(b)),C.__cacheKey=ct,C.__webglTexture=$[ct].texture}return k}function Y(C,b,k){return Math.floor(Math.floor(C/k)/b)}function K(C,b,k,V){let ct=C.updateRanges;if(ct.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,b.width,b.height,k,V,b.data);else{ct.sort((Nt,yt)=>Nt.start-yt.start);let ut=0;for(let Nt=1;Nt<ct.length;Nt++){let yt=ct[ut],vt=ct[Nt],Ut=yt.start+yt.count,zt=Y(vt.start,b.width,4),Zt=Y(yt.start,b.width,4);vt.start<=Ut+1&&zt===Zt&&Y(vt.start+vt.count-1,b.width,4)===zt?yt.count=Math.max(yt.count,vt.start+vt.count-yt.start):(++ut,ct[ut]=vt)}ct.length=ut+1;let J=e.getParameter(s.UNPACK_ROW_LENGTH),it=e.getParameter(s.UNPACK_SKIP_PIXELS),gt=e.getParameter(s.UNPACK_SKIP_ROWS);e.pixelStorei(s.UNPACK_ROW_LENGTH,b.width);for(let Nt=0,yt=ct.length;Nt<yt;Nt++){let vt=ct[Nt],Ut=Math.floor(vt.start/4),zt=Math.ceil(vt.count/4),Zt=Ut%b.width,F=Math.floor(Ut/b.width),xt=zt,Q=1;e.pixelStorei(s.UNPACK_SKIP_PIXELS,Zt),e.pixelStorei(s.UNPACK_SKIP_ROWS,F),e.texSubImage2D(s.TEXTURE_2D,0,Zt,F,xt,Q,k,V,b.data)}C.clearUpdateRanges(),e.pixelStorei(s.UNPACK_ROW_LENGTH,J),e.pixelStorei(s.UNPACK_SKIP_PIXELS,it),e.pixelStorei(s.UNPACK_SKIP_ROWS,gt)}}function pt(C,b,k){let V=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(V=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(V=s.TEXTURE_3D);let $=Jt(C,b),ct=b.source;e.bindTexture(V,C.__webglTexture,s.TEXTURE0+k);let ut=i.get(ct);if(ct.version!==ut.__version||$===!0){if(e.activeTexture(s.TEXTURE0+k),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){let Q=ne.getPrimaries(ne.workingColorSpace),_t=b.colorSpace===dn?null:ne.getPrimaries(b.colorSpace),wt=b.colorSpace===dn||Q===_t?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,wt)}e.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment);let it=g(b.image,!1,n.maxTextureSize);it=he(b,it);let gt=r.convert(b.format,b.colorSpace),Nt=r.convert(b.type),yt=x(b.internalFormat,gt,Nt,b.normalized,b.colorSpace,b.isVideoTexture);Xt(V,b);let vt,Ut=b.mipmaps,zt=b.isVideoTexture!==!0,Zt=ut.__version===void 0||$===!0,F=ct.dataReady,xt=w(b,it);if(b.isDepthTexture)yt=S(b.format===Ln,b.type),Zt&&(zt?e.texStorage2D(s.TEXTURE_2D,1,yt,it.width,it.height):e.texImage2D(s.TEXTURE_2D,0,yt,it.width,it.height,0,gt,Nt,null));else if(b.isDataTexture)if(Ut.length>0){zt&&Zt&&e.texStorage2D(s.TEXTURE_2D,xt,yt,Ut[0].width,Ut[0].height);for(let Q=0,_t=Ut.length;Q<_t;Q++)vt=Ut[Q],zt?F&&e.texSubImage2D(s.TEXTURE_2D,Q,0,0,vt.width,vt.height,gt,Nt,vt.data):e.texImage2D(s.TEXTURE_2D,Q,yt,vt.width,vt.height,0,gt,Nt,vt.data);b.generateMipmaps=!1}else zt?(Zt&&e.texStorage2D(s.TEXTURE_2D,xt,yt,it.width,it.height),F&&K(b,it,gt,Nt)):e.texImage2D(s.TEXTURE_2D,0,yt,it.width,it.height,0,gt,Nt,it.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){zt&&Zt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,xt,yt,Ut[0].width,Ut[0].height,it.depth);for(let Q=0,_t=Ut.length;Q<_t;Q++)if(vt=Ut[Q],b.format!==Mi)if(gt!==null)if(zt){if(F)if(b.layerUpdates.size>0){let wt=jc(vt.width,vt.height,b.format,b.type);for(let st of b.layerUpdates){let Ft=vt.data.subarray(st*wt/vt.data.BYTES_PER_ELEMENT,(st+1)*wt/vt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Q,0,0,st,vt.width,vt.height,1,gt,Ft)}}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Q,0,0,0,vt.width,vt.height,it.depth,gt,vt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Q,yt,vt.width,vt.height,it.depth,0,vt.data,0,0);else Ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else zt?F&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,Q,0,0,0,vt.width,vt.height,it.depth,gt,Nt,vt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,Q,yt,vt.width,vt.height,it.depth,0,gt,Nt,vt.data);b.layerUpdates.size>0&&b.clearLayerUpdates()}else{zt&&Zt&&e.texStorage2D(s.TEXTURE_2D,xt,yt,Ut[0].width,Ut[0].height);for(let Q=0,_t=Ut.length;Q<_t;Q++)vt=Ut[Q],b.format!==Mi?gt!==null?zt?F&&e.compressedTexSubImage2D(s.TEXTURE_2D,Q,0,0,vt.width,vt.height,gt,vt.data):e.compressedTexImage2D(s.TEXTURE_2D,Q,yt,vt.width,vt.height,0,vt.data):Ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):zt?F&&e.texSubImage2D(s.TEXTURE_2D,Q,0,0,vt.width,vt.height,gt,Nt,vt.data):e.texImage2D(s.TEXTURE_2D,Q,yt,vt.width,vt.height,0,gt,Nt,vt.data)}else if(b.isDataArrayTexture)if(zt){if(Zt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,xt,yt,it.width,it.height,it.depth),F)if(b.layerUpdates.size>0){let Q=jc(it.width,it.height,b.format,b.type);for(let _t of b.layerUpdates){let wt=it.data.subarray(_t*Q/it.data.BYTES_PER_ELEMENT,(_t+1)*Q/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,_t,it.width,it.height,1,gt,Nt,wt)}b.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,gt,Nt,it.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,yt,it.width,it.height,it.depth,0,gt,Nt,it.data);else if(b.isData3DTexture)zt?(Zt&&e.texStorage3D(s.TEXTURE_3D,xt,yt,it.width,it.height,it.depth),F&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,gt,Nt,it.data)):e.texImage3D(s.TEXTURE_3D,0,yt,it.width,it.height,it.depth,0,gt,Nt,it.data);else if(b.isFramebufferTexture){if(Zt)if(zt)e.texStorage2D(s.TEXTURE_2D,xt,yt,it.width,it.height);else{let Q=it.width,_t=it.height;for(let wt=0;wt<xt;wt++)e.texImage2D(s.TEXTURE_2D,wt,yt,Q,_t,0,gt,Nt,null),Q>>=1,_t>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in s){let Q=s.canvas;if(Q.hasAttribute("layoutsubtree")||Q.setAttribute("layoutsubtree","true"),it.parentNode!==Q){Q.appendChild(it),f.add(b),Q.onpaint=_t=>{let wt=_t.changedElements;for(let st of f)wt.includes(st.image)&&(st.needsUpdate=!0)},Q.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,it);else{let wt=s.RGBA,st=s.RGBA,Ft=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,wt,st,Ft,it)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Ut.length>0){if(zt&&Zt){let Q=ee(Ut[0]);e.texStorage2D(s.TEXTURE_2D,xt,yt,Q.width,Q.height)}for(let Q=0,_t=Ut.length;Q<_t;Q++)vt=Ut[Q],zt?F&&e.texSubImage2D(s.TEXTURE_2D,Q,0,0,gt,Nt,vt):e.texImage2D(s.TEXTURE_2D,Q,yt,gt,Nt,vt);b.generateMipmaps=!1}else if(zt){if(Zt){let Q=ee(it);e.texStorage2D(s.TEXTURE_2D,xt,yt,Q.width,Q.height)}F&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,gt,Nt,it)}else e.texImage2D(s.TEXTURE_2D,0,yt,gt,Nt,it);p(b)&&M(V),ut.__version=ct.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function Ot(C,b,k){if(b.image.length!==6)return;let V=Jt(C,b),$=b.source;e.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+k);let ct=i.get($);if($.version!==ct.__version||V===!0){e.activeTexture(s.TEXTURE0+k);let ut=ne.getPrimaries(ne.workingColorSpace),J=b.colorSpace===dn?null:ne.getPrimaries(b.colorSpace),it=b.colorSpace===dn||ut===J?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),e.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,it);let gt=b.isCompressedTexture||b.image[0].isCompressedTexture,Nt=b.image[0]&&b.image[0].isDataTexture,yt=[];for(let st=0;st<6;st++)!gt&&!Nt?yt[st]=g(b.image[st],!0,n.maxCubemapSize):yt[st]=Nt?b.image[st].image:b.image[st],yt[st]=he(b,yt[st]);let vt=yt[0],Ut=r.convert(b.format,b.colorSpace),zt=r.convert(b.type),Zt=x(b.internalFormat,Ut,zt,b.normalized,b.colorSpace),F=b.isVideoTexture!==!0,xt=ct.__version===void 0||V===!0,Q=$.dataReady,_t=w(b,vt);Xt(s.TEXTURE_CUBE_MAP,b);let wt;if(gt){F&&xt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,_t,Zt,vt.width,vt.height);for(let st=0;st<6;st++){wt=yt[st].mipmaps;for(let Ft=0;Ft<wt.length;Ft++){let Lt=wt[Ft];b.format!==Mi?Ut!==null?F?Q&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ft,0,0,Lt.width,Lt.height,Ut,Lt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ft,Zt,Lt.width,Lt.height,0,Lt.data):Ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?Q&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ft,0,0,Lt.width,Lt.height,Ut,zt,Lt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ft,Zt,Lt.width,Lt.height,0,Ut,zt,Lt.data)}}}else{if(wt=b.mipmaps,F&&xt){wt.length>0&&_t++;let st=ee(yt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,_t,Zt,st.width,st.height)}for(let st=0;st<6;st++)if(Nt){F?Q&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,yt[st].width,yt[st].height,Ut,zt,yt[st].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Zt,yt[st].width,yt[st].height,0,Ut,zt,yt[st].data);for(let Ft=0;Ft<wt.length;Ft++){let _e=wt[Ft].image[st].image;F?Q&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ft+1,0,0,_e.width,_e.height,Ut,zt,_e.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ft+1,Zt,_e.width,_e.height,0,Ut,zt,_e.data)}}else{F?Q&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,Ut,zt,yt[st]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Zt,Ut,zt,yt[st]);for(let Ft=0;Ft<wt.length;Ft++){let Lt=wt[Ft];F?Q&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ft+1,0,0,Ut,zt,Lt.image[st]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ft+1,Zt,Ut,zt,Lt.image[st])}}}p(b)&&M(s.TEXTURE_CUBE_MAP),ct.__version=$.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function ht(C,b,k,V,$,ct){let ut=r.convert(k.format,k.colorSpace),J=r.convert(k.type),it=x(k.internalFormat,ut,J,k.normalized,k.colorSpace),gt=i.get(b),Nt=i.get(k);if(Nt.__renderTarget=b,!gt.__hasExternalTextures){let yt=Math.max(1,b.width>>ct),vt=Math.max(1,b.height>>ct);$===s.TEXTURE_3D||$===s.TEXTURE_2D_ARRAY?e.texImage3D($,ct,it,yt,vt,b.depth,0,ut,J,null):e.texImage2D($,ct,it,yt,vt,0,ut,J,null)}e.bindFramebuffer(s.FRAMEBUFFER,C),$t(b)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,V,$,Nt.__webglTexture,0,Wt(b)):($===s.TEXTURE_2D||$>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,V,$,Nt.__webglTexture,ct),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Vt(C,b,k){if(s.bindRenderbuffer(s.RENDERBUFFER,C),b.depthBuffer){let V=b.depthTexture,$=V&&V.isDepthTexture?V.type:null,ct=S(b.stencilBuffer,$),ut=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;$t(b)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Wt(b),ct,b.width,b.height):k?s.renderbufferStorageMultisample(s.RENDERBUFFER,Wt(b),ct,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,ct,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,ut,s.RENDERBUFFER,C)}else{let V=b.textures;for(let $=0;$<V.length;$++){let ct=V[$],ut=r.convert(ct.format,ct.colorSpace),J=r.convert(ct.type),it=x(ct.internalFormat,ut,J,ct.normalized,ct.colorSpace);$t(b)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Wt(b),it,b.width,b.height):k?s.renderbufferStorageMultisample(s.RENDERBUFFER,Wt(b),it,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,it,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ce(C,b,k){let V=b.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,C),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let $=i.get(b.depthTexture);if($.__renderTarget=b,(!$.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),V){if($.__webglInit===void 0&&($.__webglInit=!0,b.depthTexture.addEventListener("dispose",A)),$.__webglTexture===void 0){$.__webglTexture=s.createTexture(),e.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture),Xt(s.TEXTURE_CUBE_MAP,b.depthTexture);let gt=r.convert(b.depthTexture.format),Nt=r.convert(b.depthTexture.type),yt;b.depthTexture.format===Oi?yt=s.DEPTH_COMPONENT24:b.depthTexture.format===Ln&&(yt=s.DEPTH24_STENCIL8);for(let vt=0;vt<6;vt++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,yt,b.width,b.height,0,gt,Nt,null)}}else nt(b.depthTexture,0);let ct=$.__webglTexture,ut=Wt(b),J=V?s.TEXTURE_CUBE_MAP_POSITIVE_X+k:s.TEXTURE_2D,it=b.depthTexture.format===Ln?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(b.depthTexture.format===Oi)$t(b)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,it,J,ct,0,ut):s.framebufferTexture2D(s.FRAMEBUFFER,it,J,ct,0);else if(b.depthTexture.format===Ln)$t(b)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,it,J,ct,0,ut):s.framebufferTexture2D(s.FRAMEBUFFER,it,J,ct,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function j(C){let b=i.get(C),k=C.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==C.depthTexture){let V=C.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),V){let $=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,V.removeEventListener("dispose",$)};V.addEventListener("dispose",$),b.__depthDisposeCallback=$}b.__boundDepthTexture=V}if(C.depthTexture&&!b.__autoAllocateDepthBuffer)if(k)for(let V=0;V<6;V++)ce(b.__webglFramebuffer[V],C,V);else{let V=C.texture.mipmaps;V&&V.length>0?ce(b.__webglFramebuffer[0],C,0):ce(b.__webglFramebuffer,C,0)}else if(k){b.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(e.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[V]),b.__webglDepthbuffer[V]===void 0)b.__webglDepthbuffer[V]=s.createRenderbuffer(),Vt(b.__webglDepthbuffer[V],C,!1);else{let $=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ct=b.__webglDepthbuffer[V];s.bindRenderbuffer(s.RENDERBUFFER,ct),s.framebufferRenderbuffer(s.FRAMEBUFFER,$,s.RENDERBUFFER,ct)}}else{let V=C.texture.mipmaps;if(V&&V.length>0?e.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=s.createRenderbuffer(),Vt(b.__webglDepthbuffer,C,!1);else{let $=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ct=b.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ct),s.framebufferRenderbuffer(s.FRAMEBUFFER,$,s.RENDERBUFFER,ct)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function rt(C,b,k){let V=i.get(C);b!==void 0&&ht(V.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),k!==void 0&&j(C)}function ot(C){let b=C.texture,k=i.get(C),V=i.get(b);C.addEventListener("dispose",_);let $=C.textures,ct=C.isWebGLCubeRenderTarget===!0,ut=$.length>1;if(ut||(V.__webglTexture===void 0&&(V.__webglTexture=s.createTexture()),V.__version=b.version,a.memory.textures++),ct){k.__webglFramebuffer=[];for(let J=0;J<6;J++)if(b.mipmaps&&b.mipmaps.length>0){k.__webglFramebuffer[J]=[];for(let it=0;it<b.mipmaps.length;it++)k.__webglFramebuffer[J][it]=s.createFramebuffer()}else k.__webglFramebuffer[J]=s.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){k.__webglFramebuffer=[];for(let J=0;J<b.mipmaps.length;J++)k.__webglFramebuffer[J]=s.createFramebuffer()}else k.__webglFramebuffer=s.createFramebuffer();if(ut)for(let J=0,it=$.length;J<it;J++){let gt=i.get($[J]);gt.__webglTexture===void 0&&(gt.__webglTexture=s.createTexture(),a.memory.textures++)}if(C.samples>0&&$t(C)===!1){k.__webglMultisampledFramebuffer=s.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let J=0;J<$.length;J++){let it=$[J];k.__webglColorRenderbuffer[J]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,k.__webglColorRenderbuffer[J]);let gt=r.convert(it.format,it.colorSpace),Nt=r.convert(it.type),yt=x(it.internalFormat,gt,Nt,it.normalized,it.colorSpace,C.isXRRenderTarget===!0),vt=Wt(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,vt,yt,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+J,s.RENDERBUFFER,k.__webglColorRenderbuffer[J])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(k.__webglDepthRenderbuffer=s.createRenderbuffer(),Vt(k.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ct){e.bindTexture(s.TEXTURE_CUBE_MAP,V.__webglTexture),Xt(s.TEXTURE_CUBE_MAP,b);for(let J=0;J<6;J++)if(b.mipmaps&&b.mipmaps.length>0)for(let it=0;it<b.mipmaps.length;it++)ht(k.__webglFramebuffer[J][it],C,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+J,it);else ht(k.__webglFramebuffer[J],C,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);p(b)&&M(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ut){for(let J=0,it=$.length;J<it;J++){let gt=$[J],Nt=i.get(gt),yt=s.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(yt=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(yt,Nt.__webglTexture),Xt(yt,gt),ht(k.__webglFramebuffer,C,gt,s.COLOR_ATTACHMENT0+J,yt,0),p(gt)&&M(yt)}e.unbindTexture()}else{let J=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(J=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(J,V.__webglTexture),Xt(J,b),b.mipmaps&&b.mipmaps.length>0)for(let it=0;it<b.mipmaps.length;it++)ht(k.__webglFramebuffer[it],C,b,s.COLOR_ATTACHMENT0,J,it);else ht(k.__webglFramebuffer,C,b,s.COLOR_ATTACHMENT0,J,0);p(b)&&M(J),e.unbindTexture()}C.depthBuffer&&j(C)}function lt(C){let b=C.textures;for(let k=0,V=b.length;k<V;k++){let $=b[k];if(p($)){let ct=y(C),ut=i.get($).__webglTexture;e.bindTexture(ct,ut),M(ct),e.unbindTexture()}}}let dt=[],kt=[];function Bt(C){if(C.samples>0){if($t(C)===!1){let b=C.textures,k=C.width,V=C.height,$=s.COLOR_BUFFER_BIT,ct=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ut=i.get(C),J=b.length>1;if(J)for(let gt=0;gt<b.length;gt++)e.bindFramebuffer(s.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+gt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,ut.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+gt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,ut.__webglMultisampledFramebuffer);let it=C.texture.mipmaps;it&&it.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ut.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ut.__webglFramebuffer);for(let gt=0;gt<b.length;gt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&($|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&($|=s.STENCIL_BUFFER_BIT)),J){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ut.__webglColorRenderbuffer[gt]);let Nt=i.get(b[gt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Nt,0)}s.blitFramebuffer(0,0,k,V,0,0,k,V,$,s.NEAREST),c===!0&&(dt.length=0,kt.length=0,dt.push(s.COLOR_ATTACHMENT0+gt),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&(dt.push(ct),kt.push(ct),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,kt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,dt))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),J)for(let gt=0;gt<b.length;gt++){e.bindFramebuffer(s.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+gt,s.RENDERBUFFER,ut.__webglColorRenderbuffer[gt]);let Nt=i.get(b[gt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,ut.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+gt,s.TEXTURE_2D,Nt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ut.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&c){let b=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[b])}}}function Wt(C){return Math.min(n.maxSamples,C.samples)}function $t(C){let b=i.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function D(C){let b=a.render.frame;u.get(C)!==b&&(u.set(C,b),C.update())}function he(C,b){let k=C.colorSpace,V=C.format,$=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||k!==Yn&&k!==dn&&(ne.getTransfer(k)===fe?(V!==Mi||$!==ei)&&Ht("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Gt("WebGLTextures: Unsupported texture color space:",k)),b}function ee(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=q,this.resetTextureUnits=B,this.getTextureUnits=N,this.setTextureUnits=O,this.setTexture2D=nt,this.setTexture2DArray=X,this.setTexture3D=tt,this.setTextureCube=et,this.rebindTextures=rt,this.setupRenderTarget=ot,this.updateRenderTargetMipmap=lt,this.updateMultisampleRenderTarget=Bt,this.setupDepthRenderbuffer=j,this.setupFrameBufferTexture=ht,this.useMultisampledRTT=$t,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function vx(s,t){function e(i,n=dn){let r,a=ne.getTransfer(n);if(i===ei)return s.UNSIGNED_BYTE;if(i===Mo)return s.UNSIGNED_SHORT_4_4_4_4;if(i===bo)return s.UNSIGNED_SHORT_5_5_5_1;if(i===zc)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===Hc)return s.UNSIGNED_INT_10F_11F_11F_REV;if(i===Oc)return s.BYTE;if(i===kc)return s.SHORT;if(i===Bs)return s.UNSIGNED_SHORT;if(i===yo)return s.INT;if(i===Pi)return s.UNSIGNED_INT;if(i===yi)return s.FLOAT;if(i===mi)return s.HALF_FLOAT;if(i===Vc)return s.ALPHA;if(i===Gc)return s.RGB;if(i===Mi)return s.RGBA;if(i===Oi)return s.DEPTH_COMPONENT;if(i===Ln)return s.DEPTH_STENCIL;if(i===So)return s.RED;if(i===wo)return s.RED_INTEGER;if(i===Dn)return s.RG;if(i===To)return s.RG_INTEGER;if(i===Eo)return s.RGBA_INTEGER;if(i===zr||i===Hr||i===Vr||i===Gr)if(a===fe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===zr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Hr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Vr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Gr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===zr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Hr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Vr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Gr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ao||i===Ro||i===Co||i===Io)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Ao)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ro)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Co)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Io)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Po||i===Lo||i===Do||i===No||i===Uo||i===Wr||i===Fo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Po||i===Lo)return a===fe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Do)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===No)return r.COMPRESSED_R11_EAC;if(i===Uo)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Wr)return r.COMPRESSED_RG11_EAC;if(i===Fo)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Bo||i===Oo||i===ko||i===zo||i===Ho||i===Vo||i===Go||i===Wo||i===Xo||i===qo||i===Yo||i===$o||i===Zo||i===Jo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Bo)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Oo)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ko)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===zo)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ho)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Vo)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Go)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Wo)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Xo)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===qo)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Yo)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===$o)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Zo)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Jo)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ko||i===jo||i===Qo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Ko)return a===fe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===jo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Qo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===tl||i===el||i===Xr||i===il)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===tl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===el)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Xr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===il)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Os?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:e}}var xx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_x=`
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

}`,vh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new Mr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new re({vertexShader:xx,fragmentShader:_x,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new mt(new Le(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},xh=class extends ki{constructor(t,e){super();let i=this,n=null,r=1,a=null,o="local-floor",c=1,l=null,u=null,f=null,h=null,d=null,m=null,v=typeof XRWebGLBinding<"u",g=new vh,p={},M=e.getContextAttributes(),y=null,x=null,S=[],w=[],A=new at,_=null,T=null,R=new qe;R.viewport=new Me;let I=new qe;I.viewport=new Me;let L=[R,I],B=new mo,N=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let K=S[Y];return K===void 0&&(K=new Rs,S[Y]=K),K.getTargetRaySpace()},this.getControllerGrip=function(Y){let K=S[Y];return K===void 0&&(K=new Rs,S[Y]=K),K.getGripSpace()},this.getHand=function(Y){let K=S[Y];return K===void 0&&(K=new Rs,S[Y]=K),K.getHandSpace()};function q(Y){let K=w.indexOf(Y.inputSource);if(K===-1)return;let pt=S[K];pt!==void 0&&(pt.update(Y.inputSource,Y.frame,l||a),pt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function W(){n.removeEventListener("select",q),n.removeEventListener("selectstart",q),n.removeEventListener("selectend",q),n.removeEventListener("squeeze",q),n.removeEventListener("squeezestart",q),n.removeEventListener("squeezeend",q),n.removeEventListener("end",W),n.removeEventListener("inputsourceschange",nt);for(let Y=0;Y<S.length;Y++){let K=w[Y];K!==null&&(w[Y]=null,S[Y].disconnect(K))}N=null,O=null,g.reset();for(let Y in p)delete p[Y];if(t.setRenderTarget(y),d=null,h=null,f=null,n=null,x=null,Jt.stop(),i.isPresenting=!1,t.setPixelRatio(_),t.setSize(A.width,A.height,!1),T!==null){let Y=T.camera;Y.fov=T.fov,Y.zoom=T.zoom,Y.updateProjectionMatrix(),T=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,i.isPresenting===!0&&Ht("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,i.isPresenting===!0&&Ht("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f===null&&v&&(f=new XRWebGLBinding(n,e)),f},this.getFrame=function(){return m},this.getSession=function(){return n},this.setSession=async function(Y){if(n=Y,n!==null){if(y=t.getRenderTarget(),n.addEventListener("select",q),n.addEventListener("selectstart",q),n.addEventListener("selectend",q),n.addEventListener("squeeze",q),n.addEventListener("squeezestart",q),n.addEventListener("squeezeend",q),n.addEventListener("end",W),n.addEventListener("inputsourceschange",nt),M.xrCompatible!==!0&&await e.makeXRCompatible(),_=t.getPixelRatio(),t.getSize(A),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let pt=null,Ot=null,ht=null;M.depth&&(ht=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,pt=M.stencil?Ln:Oi,Ot=M.stencil?Os:Pi);let Vt={colorFormat:e.RGBA8,depthFormat:ht,scaleFactor:r};f=this.getBinding(),h=f.createProjectionLayer(Vt),n.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),x=new $e(h.textureWidth,h.textureHeight,{format:Mi,type:ei,depthTexture:new wn(h.textureWidth,h.textureHeight,Ot,void 0,void 0,void 0,void 0,void 0,void 0,pt),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let pt={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(n,e,pt),n.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new $e(d.framebufferWidth,d.framebufferHeight,{format:Mi,type:ei,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await n.requestReferenceSpace(o),Jt.setContext(n),Jt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function nt(Y){for(let K=0;K<Y.removed.length;K++){let pt=Y.removed[K],Ot=w.indexOf(pt);Ot>=0&&(w[Ot]=null,S[Ot].disconnect(pt))}for(let K=0;K<Y.added.length;K++){let pt=Y.added[K],Ot=w.indexOf(pt);if(Ot===-1){for(let Vt=0;Vt<S.length;Vt++)if(Vt>=w.length){w.push(pt),Ot=Vt;break}else if(w[Vt]===null){w[Vt]=pt,Ot=Vt;break}if(Ot===-1)break}let ht=S[Ot];ht&&ht.connect(pt)}}let X=new P,tt=new P;function et(Y,K,pt){X.setFromMatrixPosition(K.matrixWorld),tt.setFromMatrixPosition(pt.matrixWorld);let Ot=X.distanceTo(tt),ht=K.projectionMatrix.elements,Vt=pt.projectionMatrix.elements,ce=ht[14]/(ht[10]-1),j=ht[14]/(ht[10]+1),rt=(ht[9]+1)/ht[5],ot=(ht[9]-1)/ht[5],lt=(ht[8]-1)/ht[0],dt=(Vt[8]+1)/Vt[0],kt=ce*lt,Bt=ce*dt,Wt=Ot/(-lt+dt),$t=Wt*-lt;if(K.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX($t),Y.translateZ(Wt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),ht[10]===-1)Y.projectionMatrix.copy(K.projectionMatrix),Y.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{let D=ce+Wt,he=j+Wt,ee=kt-$t,C=Bt+(Ot-$t),b=rt*j/he*D,k=ot*j/he*D;Y.projectionMatrix.makePerspective(ee,C,b,k,D,he),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function Ct(Y,K){K===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(K.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(n===null)return;let K=Y.near,pt=Y.far;g.texture!==null&&(g.depthNear>0&&(K=g.depthNear),g.depthFar>0&&(pt=g.depthFar)),B.near=I.near=R.near=K,B.far=I.far=R.far=pt,(N!==B.near||O!==B.far)&&(n.updateRenderState({depthNear:B.near,depthFar:B.far}),N=B.near,O=B.far),B.layers.mask=Y.layers.mask|6,R.layers.mask=B.layers.mask&-5,I.layers.mask=B.layers.mask&-3;let Ot=Y.parent,ht=B.cameras;Ct(B,Ot);for(let Vt=0;Vt<ht.length;Vt++)Ct(ht[Vt],Ot);ht.length===2?et(B,R,I):B.projectionMatrix.copy(R.projectionMatrix),T===null&&Y.isPerspectiveCamera&&(T={camera:Y,fov:Y.fov,zoom:Y.zoom}),Tt(Y,B,Ot)};function Tt(Y,K,pt){pt===null?Y.matrix.copy(K.matrixWorld):(Y.matrix.copy(pt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(K.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(K.projectionMatrix),Y.projectionMatrixInverse.copy(K.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=$n*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(h===null&&d===null))return c},this.setFoveation=function(Y){c=Y,h!==null&&(h.fixedFoveation=Y),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Y)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(B)},this.getCameraTexture=function(Y){return p[Y]};let ae=null;function Xt(Y,K){if(u=K.getViewerPose(l||a),m=K,u!==null){let pt=u.views;d!==null&&(t.setRenderTargetFramebuffer(x,d.framebuffer),t.setRenderTarget(x));let Ot=!1;pt.length!==B.cameras.length&&(B.cameras.length=0,Ot=!0);for(let j=0;j<pt.length;j++){let rt=pt[j],ot=null;if(d!==null)ot=d.getViewport(rt);else{let dt=f.getViewSubImage(h,rt);ot=dt.viewport,j===0&&(t.setRenderTargetTextures(x,dt.colorTexture,dt.depthStencilTexture),t.setRenderTarget(x))}let lt=L[j];lt===void 0&&(lt=new qe,lt.layers.enable(j),lt.viewport=new Me,L[j]=lt),lt.matrix.fromArray(rt.transform.matrix),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.projectionMatrix.fromArray(rt.projectionMatrix),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert(),lt.viewport.set(ot.x,ot.y,ot.width,ot.height),j===0&&(B.matrix.copy(lt.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Ot===!0&&B.cameras.push(lt)}let ht=n.enabledFeatures;if(ht&&ht.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&v){f=i.getBinding();let j=f.getDepthInformation(pt[0]);j&&j.isValid&&j.texture&&g.init(j,n.renderState)}if(ht&&ht.includes("camera-access")&&v){t.state.unbindTexture(),f=i.getBinding();for(let j=0;j<pt.length;j++){let rt=pt[j].camera;if(rt){let ot=p[rt];ot||(ot=new Mr,p[rt]=ot);let lt=f.getCameraImage(rt);ot.sourceTexture=lt}}}}for(let pt=0;pt<S.length;pt++){let Ot=w[pt],ht=S[pt];Ot!==null&&ht!==void 0&&ht.update(Ot,K,l||a)}ae&&ae(Y,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),m=null}let Jt=new Rd;Jt.setAnimationLoop(Xt),this.setAnimationLoop=function(Y){ae=Y},this.dispose=function(){}}},yx=new se,Nd=new qt;Nd.set(-1,0,0,0,1,0,0,0,1);function Mx(s,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,Zc(s)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function n(g,p,M,y,x){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(g,p):p.isMeshLambertMaterial?(r(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(g,p),f(g,p)):p.isMeshPhongMaterial?(r(g,p),u(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(g,p),h(g,p),p.isMeshPhysicalMaterial&&d(g,p,x)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),v(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?c(g,p,M,y):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Ze&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Ze&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let M=t.get(p),y=M.envMap,x=M.envMapRotation;y&&(g.envMap.value=y,g.envMapRotation.value.setFromMatrix4(yx.makeRotationFromEuler(x)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Nd),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,M,y){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*M,g.scale.value=y*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function f(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function h(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,M){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ze&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function v(g,p){let M=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function bx(s,t,e,i){let n={},r={},a=[],o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,S){let w=S.program;i.uniformBlockBinding(x,w)}function l(x,S){let w=n[x.id];w===void 0&&(g(x),w=u(x),n[x.id]=w,x.addEventListener("dispose",M));let A=S.program;i.updateUBOMapping(x,A);let _=t.render.frame;r[x.id]!==_&&(h(x),r[x.id]=_)}function u(x){let S=f();x.__bindingPointIndex=S;let w=s.createBuffer(),A=x.__size,_=x.usage;return s.bindBuffer(s.UNIFORM_BUFFER,w),s.bufferData(s.UNIFORM_BUFFER,A,_),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,S,w),w}function f(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return Gt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){let S=n[x.id],w=x.uniforms,A=x.__cache;s.bindBuffer(s.UNIFORM_BUFFER,S);for(let _=0,T=w.length;_<T;_++){let R=w[_];if(Array.isArray(R))for(let I=0,L=R.length;I<L;I++)d(R[I],_,I,A);else d(R,_,0,A)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(x,S,w,A){if(v(x,S,w,A)===!0){let _=x.__offset,T=x.value;if(Array.isArray(T)){let R=0;for(let I=0;I<T.length;I++){let L=T[I],B=p(L);m(L,x.__data,R),typeof L!="number"&&typeof L!="boolean"&&!L.isMatrix3&&!ArrayBuffer.isView(L)&&(R+=B.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(T,x.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,_,x.__data)}}function m(x,S,w){typeof x=="number"||typeof x=="boolean"?S[0]=x:x.isMatrix3?(S[0]=x.elements[0],S[1]=x.elements[1],S[2]=x.elements[2],S[3]=0,S[4]=x.elements[3],S[5]=x.elements[4],S[6]=x.elements[5],S[7]=0,S[8]=x.elements[6],S[9]=x.elements[7],S[10]=x.elements[8],S[11]=0):ArrayBuffer.isView(x)?S.set(new x.constructor(x.buffer,x.byteOffset,S.length)):x.toArray(S,w)}function v(x,S,w,A){let _=x.value,T=S+"_"+w;if(A[T]===void 0)return typeof _=="number"||typeof _=="boolean"?A[T]=_:ArrayBuffer.isView(_)?A[T]=_.slice():A[T]=_.clone(),!0;{let R=A[T];if(typeof _=="number"||typeof _=="boolean"){if(R!==_)return A[T]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(R.equals(_)===!1)return R.copy(_),!0}}return!1}function g(x){let S=x.uniforms,w=0,A=16;for(let T=0,R=S.length;T<R;T++){let I=Array.isArray(S[T])?S[T]:[S[T]];for(let L=0,B=I.length;L<B;L++){let N=I[L],O=Array.isArray(N.value)?N.value:[N.value];for(let q=0,W=O.length;q<W;q++){let nt=O[q],X=p(nt),tt=w%A,et=tt%X.boundary,Ct=tt+et;w+=et,Ct!==0&&A-Ct<X.storage&&(w+=A-Ct),N.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=w,w+=X.storage}}}let _=w%A;return _>0&&(w+=A-_),x.__size=w,x.__cache={},this}function p(x){let S={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(S.boundary=4,S.storage=4):x.isVector2?(S.boundary=8,S.storage=8):x.isVector3||x.isColor?(S.boundary=16,S.storage=12):x.isVector4?(S.boundary=16,S.storage=16):x.isMatrix3?(S.boundary=48,S.storage=48):x.isMatrix4?(S.boundary=64,S.storage=64):x.isTexture?Ht("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(S.boundary=16,S.storage=x.byteLength):Ht("WebGLRenderer: Unsupported uniform value type.",x),S}function M(x){let S=x.target;S.removeEventListener("dispose",M);let w=a.indexOf(S.__bindingPointIndex);a.splice(w,1),s.deleteBuffer(n[S.id]),delete n[S.id],delete r[S.id]}function y(){for(let x in n)s.deleteBuffer(n[x]);a=[],n={},r={}}return{bind:c,update:l,dispose:y}}var Sx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),qi=null;function wx(){return qi===null&&(qi=new _r(Sx,16,16,Dn,mi),qi.name="DFG_LUT",qi.minFilter=Pe,qi.magFilter=Pe,qi.wrapS=ti,qi.wrapT=ti,qi.generateMipmaps=!1,qi.needsUpdate=!0),qi}var cl=class{constructor(t={}){let{canvas:e=Zu(),context:i=null,depth:n=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:d=ei}=t;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=a;let v=d,g=new Set([Eo,To,wo]),p=new Set([ei,Pi,Bs,Os,Mo,bo]),M=new Uint32Array(4),y=new Int32Array(4),x=new P,S=null,w=null,A=[],_=[],T=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=pi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,I=!1,L=null,B=null,N=null,O=null;this._outputColorSpace=Je;let q=0,W=0,nt=null,X=-1,tt=null,et=new Me,Ct=new Me,Tt=null,ae=new ft(0),Xt=0,Jt=e.width,Y=e.height,K=1,pt=null,Ot=null,ht=new Me(0,0,Jt,Y),Vt=new Me(0,0,Jt,Y),ce=!1,j=new Cs,rt=!1,ot=!1,lt=new se,dt=new P,kt=new Me,Bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Wt=!1;function $t(){return nt===null?K:1}let D=i;function he(E,U){return e.getContext(E,U)}let ee,C,b,k,V,$,ct,ut,J,it,gt,Nt,yt,vt,Ut,zt,Zt,F,xt,Q,_t,wt,st;try{let E={alpha:!0,depth:n,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",_e,!1),e.addEventListener("webglcontextrestored",ue,!1),e.addEventListener("webglcontextcreationerror",wi,!1),D===null){let U="webgl2";if(D=he(U,E),D===null)throw he(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ft()}catch(E){throw e.removeEventListener("webglcontextlost",_e,!1),e.removeEventListener("webglcontextrestored",ue,!1),e.removeEventListener("webglcontextcreationerror",wi,!1),Gt("WebGLRenderer: "+E.message),E}function Ft(){ee=new Pg(D),ee.init(),_t=new vx(D,ee),C=new Mg(D,ee,t,_t),b=new mx(D,ee),C.reversedDepthBuffer&&h&&b.buffers.depth.setReversed(!0),B=D.createFramebuffer(),N=D.createFramebuffer(),O=D.createFramebuffer(),k=new Ng(D),V=new ex,$=new gx(D,ee,b,V,C,_t,k),ct=new Ig(R),ut=new Fp(D),wt=new _g(D,ut),J=new Lg(D,ut,k,wt),it=new Fg(D,J,ut,wt,k),F=new Ug(D,C,$),Ut=new bg(V),gt=new tx(R,ct,ee,C,wt,Ut),Nt=new Mx(R,V),yt=new nx,vt=new cx(ee),Zt=new xg(R,ct,b,it,m,c),zt=new px(R,it,C),st=new bx(D,k,C,b),xt=new yg(D,ee,k),Q=new Dg(D,ee,k),k.programs=gt.programs,R.capabilities=C,R.extensions=ee,R.properties=V,R.renderLists=yt,R.shadowMap=zt,R.state=b,R.info=k}v!==ei&&(T=new Og(v,e.width,e.height,o,n,r));let Lt=new xh(R,D);this.xr=Lt,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let E=ee.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=ee.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(E){E!==void 0&&(K=E,this.setSize(Jt,Y,!1))},this.getSize=function(E){return E.set(Jt,Y)},this.setSize=function(E,U,G=!0){if(Lt.isPresenting){Ht("WebGLRenderer: Can't change size while VR device is presenting.");return}Jt=E,Y=U,e.width=Math.floor(E*K),e.height=Math.floor(U*K),G===!0&&(e.style.width=E+"px",e.style.height=U+"px"),T!==null&&T.setSize(e.width,e.height),this.setViewport(0,0,E,U)},this.getDrawingBufferSize=function(E){return E.set(Jt*K,Y*K).floor()},this.setDrawingBufferSize=function(E,U,G){Jt=E,Y=U,K=G,e.width=Math.floor(E*G),e.height=Math.floor(U*G),this.setViewport(0,0,E,U)},this.setEffects=function(E){if(v===ei){Gt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let U=0;U<E.length;U++)if(E[U].isOutputPass===!0){Ht("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(et)},this.getViewport=function(E){return E.copy(ht)},this.setViewport=function(E,U,G,z){E.isVector4?ht.set(E.x,E.y,E.z,E.w):ht.set(E,U,G,z),b.viewport(et.copy(ht).multiplyScalar(K).round())},this.getScissor=function(E){return E.copy(Vt)},this.setScissor=function(E,U,G,z){E.isVector4?Vt.set(E.x,E.y,E.z,E.w):Vt.set(E,U,G,z),b.scissor(Ct.copy(Vt).multiplyScalar(K).round())},this.getScissorTest=function(){return ce},this.setScissorTest=function(E){b.setScissorTest(ce=E)},this.setOpaqueSort=function(E){pt=E},this.setTransparentSort=function(E){Ot=E},this.getClearColor=function(E){return E.copy(Zt.getClearColor())},this.setClearColor=function(){Zt.setClearColor(...arguments)},this.getClearAlpha=function(){return Zt.getClearAlpha()},this.setClearAlpha=function(){Zt.setClearAlpha(...arguments)},this.clear=function(E=!0,U=!0,G=!0){let z=0;if(E){let H=!1;if(nt!==null){let St=nt.texture.format;H=g.has(St)}if(H){let St=nt.texture.type,At=p.has(St),bt=Zt.getClearColor(),It=Zt.getClearAlpha(),Dt=bt.r,jt=bt.g,ie=bt.b;At?(M[0]=Dt,M[1]=jt,M[2]=ie,M[3]=It,D.clearBufferuiv(D.COLOR,0,M)):(y[0]=Dt,y[1]=jt,y[2]=ie,y[3]=It,D.clearBufferiv(D.COLOR,0,y))}else z|=D.COLOR_BUFFER_BIT}U&&(z|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),G&&(z|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z!==0&&D.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),L=E},this.dispose=function(){e.removeEventListener("webglcontextlost",_e,!1),e.removeEventListener("webglcontextrestored",ue,!1),e.removeEventListener("webglcontextcreationerror",wi,!1),Zt.dispose(),yt.dispose(),vt.dispose(),V.dispose(),ct.dispose(),it.dispose(),wt.dispose(),st.dispose(),gt.dispose(),Lt.dispose(),Lt.removeEventListener("sessionstart",Rh),Lt.removeEventListener("sessionend",Ch),zn.stop()};function _e(E){E.preventDefault(),qc("WebGLRenderer: Context Lost."),I=!0}function ue(){qc("WebGLRenderer: Context Restored."),I=!1;let E=k.autoReset,U=zt.enabled,G=zt.autoUpdate,z=zt.needsUpdate,H=zt.type;Ft(),k.autoReset=E,zt.enabled=U,zt.autoUpdate=G,zt.needsUpdate=z,zt.type=H}function wi(E){Gt("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Ui(E){let U=E.target;U.removeEventListener("dispose",Ui),Qd(U)}function Qd(E){tf(E),V.remove(E)}function tf(E){let U=V.get(E).programs;U!==void 0&&(U.forEach(function(G){gt.releaseProgram(G)}),E.isShaderMaterial&&gt.releaseShaderCache(E))}this.renderBufferDirect=function(E,U,G,z,H,St){U===null&&(U=Bt);let At=H.isMesh&&H.matrixWorld.determinantAffine()<0,bt=sf(E,U,G,z,H);b.setMaterial(z,At);let It=G.index,Dt=1;if(z.wireframe===!0){if(It=J.getWireframeAttribute(G),It===void 0)return;Dt=2}let jt=G.drawRange,ie=G.attributes.position,Pt=jt.start*Dt,de=(jt.start+jt.count)*Dt;St!==null&&(Pt=Math.max(Pt,St.start*Dt),de=Math.min(de,(St.start+St.count)*Dt)),It!==null?(Pt=Math.max(Pt,0),de=Math.min(de,It.count)):ie!=null&&(Pt=Math.max(Pt,0),de=Math.min(de,ie.count));let Ue=de-Pt;if(Ue<0||Ue===1/0)return;wt.setup(H,z,bt,G,It);let Te,ge=xt;if(It!==null&&(Te=ut.get(It),ge=Q,ge.setIndex(Te)),H.isMesh)z.wireframe===!0?(b.setLineWidth(z.wireframeLinewidth*$t()),ge.setMode(D.LINES)):ge.setMode(D.TRIANGLES);else if(H.isLine){let Ke=z.linewidth;Ke===void 0&&(Ke=1),b.setLineWidth(Ke*$t()),H.isLineSegments?ge.setMode(D.LINES):H.isLineLoop?ge.setMode(D.LINE_LOOP):ge.setMode(D.LINE_STRIP)}else H.isPoints?ge.setMode(D.POINTS):H.isSprite&&ge.setMode(D.TRIANGLES);if(H.isBatchedMesh)if(ee.get("WEBGL_multi_draw"))ge.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{let Ke=H._multiDrawStarts,Et=H._multiDrawCounts,ni=H._multiDrawCount,le=It?ut.get(It).bytesPerElement:1,vi=V.get(z).currentProgram.getUniforms();for(let Fi=0;Fi<ni;Fi++)vi.setValue(D,"_gl_DrawID",Fi),ge.render(Ke[Fi]/le,Et[Fi])}else if(H.isInstancedMesh)ge.renderInstances(Pt,Ue,H.count);else if(G.isInstancedBufferGeometry){let Ke=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Et=Math.min(G.instanceCount,Ke);ge.renderInstances(Pt,Ue,Et)}else ge.render(Pt,Ue)};function Ah(E,U,G,z){L!==null&&E.isNodeMaterial&&L.setObject(z,E),rt===!0&&Ut.setState(E,G,!1),E.transparent===!0&&E.side===ke&&E.forceSinglePass===!1?(E.side=Ze,E.needsUpdate=!0,aa(E,U,z),E.side=Wi,E.needsUpdate=!0,aa(E,U,z),E.side=ke):aa(E,U,z)}this.compile=function(E,U,G=null){G===null&&(G=E),L!==null&&L.renderStart(E,U,G),w=vt.get(G),w.init(U),_.push(w),G.traverseVisible(function(H){H.isLight&&H.layers.test(U.layers)&&(w.pushLight(H),H.castShadow&&w.pushShadow(H))}),E!==G&&E.traverseVisible(function(H){H.isLight&&H.layers.test(U.layers)&&(w.pushLight(H),H.castShadow&&w.pushShadow(H))}),w.setupLights(),L!==null&&L.updateLights(w.state.lightsArray),ot=this.localClippingEnabled,rt=Ut.init(this.clippingPlanes,ot),rt===!0&&Ut.setGlobalState(this.clippingPlanes,U),L!==null&&zt.render(w.state.shadowsArray,G,U);let z=new Set;return E.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;let St=H.material;if(St)if(Array.isArray(St))for(let At=0;At<St.length;At++){let bt=St[At];Ah(bt,G,U,H),z.add(bt)}else Ah(St,G,U,H),z.add(St)}),w=_.pop(),L!==null&&L.renderEnd(),z},this.compileAsync=function(E,U,G=null){let z=this.compile(E,U,G);return new Promise(H=>{function St(){if(z.forEach(function(At){let It=V.get(At).currentProgram;(It===void 0||It.isReady())&&z.delete(At)}),z.size===0){H(E);return}setTimeout(St,10)}ee.get("KHR_parallel_shader_compile")!==null?St():setTimeout(St,10)})};let Ol=null;function ef(E){Ol&&Ol(E)}function Rh(){zn.stop()}function Ch(){zn.start()}let zn=new Rd;zn.setAnimationLoop(ef),typeof self<"u"&&zn.setContext(self),this.setAnimationLoop=function(E){Ol=E,Lt.setAnimationLoop(E),E===null?zn.stop():zn.start()},Lt.addEventListener("sessionstart",Rh),Lt.addEventListener("sessionend",Ch),this.render=function(E,U){if(U!==void 0&&U.isCamera!==!0){Gt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;L!==null&&L.renderStart(E,U);let G=Lt.enabled===!0&&Lt.isPresenting===!0,z=T!==null&&(nt===null||G)&&T.begin(R,nt);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Lt.enabled===!0&&Lt.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Lt.cameraAutoUpdate===!0&&Lt.updateCamera(U),U=Lt.getCamera()),E.isScene===!0&&E.onBeforeRender(R,E,U,nt),w=vt.get(E,_.length),w.init(U),w.state.textureUnits=$.getTextureUnits(),_.push(w),lt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),j.setFromProjectionMatrix(lt,Ci,U.reversedDepth),ot=this.localClippingEnabled,rt=Ut.init(this.clippingPlanes,ot),S=yt.get(E,A.length),S.init(),A.push(S),Lt.enabled===!0&&Lt.isPresenting===!0){let At=R.xr.getDepthSensingMesh();At!==null&&kl(At,U,-1/0,R.sortObjects)}kl(E,U,0,R.sortObjects),S.finish(),L!==null&&L.updateLights(w.state.lightsArray),R.sortObjects===!0&&S.sort(pt,Ot),Wt=Lt.enabled===!1||Lt.isPresenting===!1||Lt.hasDepthSensing()===!1,Wt&&Zt.addToRenderList(S,E),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),rt===!0&&Ut.beginShadows();let H=w.state.shadowsArray;if(zt.render(H,E,U),rt===!0&&Ut.endShadows(),(z&&T.hasRenderPass())===!1){let At=S.opaque,bt=S.transmissive;if(w.setupLights(),U.isArrayCamera){let It=U.cameras;if(bt.length>0)for(let Dt=0,jt=It.length;Dt<jt;Dt++){let ie=It[Dt];Ph(At,bt,E,ie)}Wt&&Zt.render(E);for(let Dt=0,jt=It.length;Dt<jt;Dt++){let ie=It[Dt];Ih(S,E,ie,ie.viewport)}}else bt.length>0&&Ph(At,bt,E,U),Wt&&Zt.render(E),Ih(S,E,U)}nt!==null&&W===0&&($.updateMultisampleRenderTarget(nt),$.updateRenderTargetMipmap(nt)),z&&T.end(R),E.isScene===!0&&E.onAfterRender(R,E,U),wt.resetDefaultState(),X=-1,tt=null,_.pop(),_.length>0?(w=_[_.length-1],$.setTextureUnits(w.state.textureUnits),rt===!0&&Ut.setGlobalState(R.clippingPlanes,w.state.camera)):w=null,A.pop(),A.length>0?S=A[A.length-1]:S=null,L!==null&&L.renderEnd()};function kl(E,U,G,z){if(E.visible===!1)return;if(E.layers.test(U.layers)){if(E.isGroup)G=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(U);else if(E.isLightProbeGrid)w.pushLightProbeGrid(E);else if(E.isLight)w.pushLight(E),E.castShadow&&w.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||E.intersectsFrustum(j)){z&&kt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(lt);let At=it.update(E),bt=E.material;bt.visible&&S.push(E,At,bt,G,kt.z,null,U)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||E.intersectsFrustum(j))){let At=it.update(E),bt=E.material;if(z&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),kt.copy(E.boundingSphere.center)):(At.boundingSphere===null&&At.computeBoundingSphere(),kt.copy(At.boundingSphere.center)),kt.applyMatrix4(E.matrixWorld).applyMatrix4(lt)),Array.isArray(bt)){let It=At.groups;for(let Dt=0,jt=It.length;Dt<jt;Dt++){let ie=It[Dt],Pt=bt[ie.materialIndex];Pt&&Pt.visible&&S.push(E,At,Pt,G,kt.z,ie,U)}}else bt.visible&&S.push(E,At,bt,G,kt.z,null,U)}}let St=E.children;for(let At=0,bt=St.length;At<bt;At++)kl(St[At],U,G,z)}function Ih(E,U,G,z){let{opaque:H,transmissive:St,transparent:At}=E;w.setupLightsView(G),rt===!0&&Ut.setGlobalState(R.clippingPlanes,G),z&&b.viewport(et.copy(z)),H.length>0&&ra(H,U,G),St.length>0&&ra(St,U,G),At.length>0&&ra(At,U,G),b.buffers.depth.setTest(!0),b.buffers.depth.setMask(!0),b.buffers.color.setMask(!0),b.setPolygonOffset(!1)}function Ph(E,U,G,z){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[z.id]===void 0){let Pt=ee.has("EXT_color_buffer_half_float")||ee.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[z.id]=new $e(1,1,{generateMipmaps:!0,type:Pt?mi:ei,minFilter:Pn,samples:Math.max(4,C.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ne.workingColorSpace})}let St=w.state.transmissionRenderTarget[z.id],At=z.viewport||et;St.setSize(At.z*R.transmissionResolutionScale,At.w*R.transmissionResolutionScale);let bt=R.getRenderTarget(),It=R.getActiveCubeFace(),Dt=R.getActiveMipmapLevel();R.setRenderTarget(St),R.getClearColor(ae),Xt=R.getClearAlpha(),Xt<1&&R.setClearColor(16777215,.5),R.clear(),Wt&&Zt.render(G);let jt=R.toneMapping;R.toneMapping=pi;let ie=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),w.setupLightsView(z),rt===!0&&Ut.setGlobalState(R.clippingPlanes,z),ra(E,G,z),$.updateMultisampleRenderTarget(St),$.updateRenderTargetMipmap(St),ee.has("WEBGL_multisampled_render_to_texture")===!1){let Pt=!1;for(let de=0,Ue=U.length;de<Ue;de++){let Te=U[de],{object:ge,geometry:Ke,material:Et,group:ni}=Te;if(Et.side===ke&&ge.layers.test(z.layers)){let le=Et.side;Et.side=Ze,Et.needsUpdate=!0,Lh(ge,G,z,Ke,Et,ni),Et.side=le,Et.needsUpdate=!0,Pt=!0}}Pt===!0&&($.updateMultisampleRenderTarget(St),$.updateRenderTargetMipmap(St))}R.setRenderTarget(bt,It,Dt),R.setClearColor(ae,Xt),ie!==void 0&&(z.viewport=ie),R.toneMapping=jt}function ra(E,U,G){let z=U.isScene===!0?U.overrideMaterial:null;for(let H=0,St=E.length;H<St;H++){let At=E[H],{object:bt,geometry:It,group:Dt}=At,jt=At.material;jt.allowOverride===!0&&z!==null&&(jt=z),bt.layers.test(G.layers)&&Lh(bt,U,G,It,jt,Dt)}}function Lh(E,U,G,z,H,St){L!==null&&H.isNodeMaterial&&L.setObject(E,H),E.onBeforeRender(R,U,G,z,H,St),E.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),H.onBeforeRender(R,U,G,z,E,St),H.transparent===!0&&H.side===ke&&H.forceSinglePass===!1?(H.side=Ze,H.needsUpdate=!0,R.renderBufferDirect(G,U,z,H,E,St),H.side=Wi,H.needsUpdate=!0,R.renderBufferDirect(G,U,z,H,E,St),H.side=ke):R.renderBufferDirect(G,U,z,H,E,St),E.onAfterRender(R,U,G,z,H,St)}function aa(E,U,G){U.isScene!==!0&&(U=Bt);let z=V.get(E),H=w.state.lights,St=w.state.shadowsArray,At=H.state.version,bt=gt.getParameters(E,H.state,St,U,G,w.state.lightProbeGridArray),It=gt.getProgramCacheKey(bt),Dt=z.programs;z.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?U.environment:null,z.fog=U.fog;let jt=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;z.envMap=ct.get(E.envMap||z.environment,jt),z.envMapRotation=z.environment!==null&&E.envMap===null?U.environmentRotation:E.envMapRotation,Dt===void 0&&(E.addEventListener("dispose",Ui),Dt=new Map,z.programs=Dt);let ie=Dt.get(It);if(ie!==void 0){if(z.currentProgram===ie&&z.lightsStateVersion===At)return Nh(E,bt),ie}else bt.uniforms=gt.getUniforms(E),L!==null&&E.isNodeMaterial&&L.build(E,G,bt),E.onBeforeCompile(bt,R),ie=gt.acquireProgram(bt,It),Dt.set(It,ie),z.uniforms=bt.uniforms;let Pt=z.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Pt.clippingPlanes=Ut.uniform),Nh(E,bt),z.needsLights=af(E),z.lightsStateVersion=At,z.needsLights&&(Pt.ambientLightColor.value=H.state.ambient,Pt.lightProbe.value=H.state.probe,Pt.sunLights.value=H.state.sun,Pt.sunLightShadows.value=H.state.sunShadow,Pt.directionalLights.value=H.state.directional,Pt.directionalLightShadows.value=H.state.directionalShadow,Pt.spotLights.value=H.state.spot,Pt.spotLightShadows.value=H.state.spotShadow,Pt.rectAreaLights.value=H.state.rectArea,Pt.ltc_1.value=H.state.rectAreaLTC1,Pt.ltc_2.value=H.state.rectAreaLTC2,Pt.pointLights.value=H.state.point,Pt.pointLightShadows.value=H.state.pointShadow,Pt.hemisphereLights.value=H.state.hemi,Pt.sunShadowMatrix.value=H.state.sunShadowMatrix,Pt.sunShadowCascade.value=H.state.sunShadowCascade,Pt.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Pt.spotLightMatrix.value=H.state.spotLightMatrix,Pt.spotLightMap.value=H.state.spotLightMap,Pt.pointShadowMatrix.value=H.state.pointShadowMatrix),z.lightProbeGrid=w.state.lightProbeGridArray.length>0,z.currentProgram=ie,z.uniformsList=null,ie}function Dh(E){if(E.uniformsList===null){let U=E.currentProgram.getUniforms();E.uniformsList=Hs.seqWithValue(U.seq,E.uniforms)}return E.uniformsList}function Nh(E,U){let G=V.get(E);G.outputColorSpace=U.outputColorSpace,G.batching=U.batching,G.batchingColor=U.batchingColor,G.instancing=U.instancing,G.instancingColor=U.instancingColor,G.instancingMorph=U.instancingMorph,G.skinning=U.skinning,G.morphTargets=U.morphTargets,G.morphNormals=U.morphNormals,G.morphColors=U.morphColors,G.morphTargetsCount=U.morphTargetsCount,G.numClippingPlanes=U.numClippingPlanes,G.numIntersection=U.numClipIntersection,G.vertexAlphas=U.vertexAlphas,G.vertexTangents=U.vertexTangents,G.toneMapping=U.toneMapping}function nf(E,U){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;x.setFromMatrixPosition(U.matrixWorld);for(let G=0,z=E.length;G<z;G++){let H=E[G];if(H.texture!==null&&H.boundingBox.containsPoint(x))return H}return null}function sf(E,U,G,z,H){U.isScene!==!0&&(U=Bt),$.resetTextureUnits();let St=U.fog,At=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?U.environment:null,bt=nt===null?R.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:ne.workingColorSpace,It=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,Dt=ct.get(z.envMap||At,It),jt=z.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,ie=!!G.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Pt=!!G.morphAttributes.position,de=!!G.morphAttributes.normal,Ue=!!G.morphAttributes.color,Te=pi;z.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(Te=R.toneMapping);let ge=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Ke=ge!==void 0?ge.length:0,Et=V.get(z),ni=w.state.lights;if(rt===!0&&(ot===!0||E!==tt)){let ye=E===tt&&z.id===X;Ut.setState(z,E,ye)}let le=!1;z.version===Et.__version?(Et.needsLights&&Et.lightsStateVersion!==ni.state.version||Et.outputColorSpace!==bt||H.isBatchedMesh&&Et.batching===!1||!H.isBatchedMesh&&Et.batching===!0||H.isBatchedMesh&&Et.batchingColor===!0&&H._colorsTexture===null||H.isBatchedMesh&&Et.batchingColor===!1&&H._colorsTexture!==null||H.isInstancedMesh&&Et.instancing===!1||!H.isInstancedMesh&&Et.instancing===!0||H.isSkinnedMesh&&Et.skinning===!1||!H.isSkinnedMesh&&Et.skinning===!0||H.isInstancedMesh&&Et.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Et.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Et.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Et.instancingMorph===!1&&H.morphTexture!==null||Et.envMap!==Dt||z.fog===!0&&Et.fog!==St||Et.numClippingPlanes!==void 0&&(Et.numClippingPlanes!==Ut.numPlanes||Et.numIntersection!==Ut.numIntersection)||Et.vertexAlphas!==jt||Et.vertexTangents!==ie||Et.morphTargets!==Pt||Et.morphNormals!==de||Et.morphColors!==Ue||Et.toneMapping!==Te||Et.morphTargetsCount!==Ke||!!Et.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(le=!0):(le=!0,Et.__version=z.version);let vi=Et.currentProgram;le===!0&&(vi=aa(z,U,H),L&&z.isNodeMaterial&&L.onUpdateProgram(z,vi,Et));let Fi=!1,mn=!1,as=!1,me=vi.getUniforms(),Ne=Et.uniforms;if(b.useProgram(vi.program)&&(Fi=!0,mn=!0,as=!0),z.id!==X&&(X=z.id,mn=!0),Et.needsLights){let ye=nf(w.state.lightProbeGridArray,H);Et.lightProbeGrid!==ye&&(Et.lightProbeGrid=ye,mn=!0)}if(Fi||tt!==E){b.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),me.setValue(D,"projectionMatrix",E.projectionMatrix),me.setValue(D,"viewMatrix",E.matrixWorldInverse);let vn=me.map.cameraPosition;vn!==void 0&&vn.setValue(D,dt.setFromMatrixPosition(E.matrixWorld)),C.logarithmicDepthBuffer&&me.setValue(D,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&me.setValue(D,"isOrthographic",E.isOrthographicCamera===!0),tt!==E&&(tt=E,mn=!0,as=!0)}if(Et.needsLights&&(ni.state.sunShadowMap.length>0&&me.setValue(D,"sunShadowMap",ni.state.sunShadowMap,$),ni.state.directionalShadowMap.length>0&&me.setValue(D,"directionalShadowMap",ni.state.directionalShadowMap,$),ni.state.spotShadowMap.length>0&&me.setValue(D,"spotShadowMap",ni.state.spotShadowMap,$),ni.state.pointShadowMap.length>0&&me.setValue(D,"pointShadowMap",ni.state.pointShadowMap,$)),H.isSkinnedMesh){me.setOptional(D,H,"bindMatrix"),me.setOptional(D,H,"bindMatrixInverse");let ye=H.skeleton;ye&&(ye.boneTexture===null&&ye.computeBoneTexture(),me.setValue(D,"boneTexture",ye.boneTexture,$))}H.isBatchedMesh&&(me.setOptional(D,H,"batchingTexture"),me.setValue(D,"batchingTexture",H._matricesTexture,$),me.setOptional(D,H,"batchingIdTexture"),me.setValue(D,"batchingIdTexture",H._indirectTexture,$),me.setOptional(D,H,"batchingColorTexture"),H._colorsTexture!==null&&me.setValue(D,"batchingColorTexture",H._colorsTexture,$));let gn=G.morphAttributes;if((gn.position!==void 0||gn.normal!==void 0||gn.color!==void 0)&&F.update(H,G,vi),(mn||Et.receiveShadow!==H.receiveShadow)&&(Et.receiveShadow=H.receiveShadow,me.setValue(D,"receiveShadow",H.receiveShadow)),(z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&U.environment!==null&&(Ne.envMapIntensity.value=U.environmentIntensity),Ne.dfgLUT!==void 0&&(Ne.dfgLUT.value=wx()),mn){if(me.setValue(D,"toneMappingExposure",R.toneMappingExposure),Et.needsLights&&rf(Ne,as),St&&z.fog===!0&&Nt.refreshFogUniforms(Ne,St),Nt.refreshMaterialUniforms(Ne,z,K,Y,w.state.transmissionRenderTarget[E.id]),Et.needsLights&&Et.lightProbeGrid){let ye=Et.lightProbeGrid;Ne.probesSH.value=ye.texture,Ne.probesMin.value.copy(ye.boundingBox.min),Ne.probesMax.value.copy(ye.boundingBox.max),Ne.probesResolution.value.copy(ye.resolution)}Hs.upload(D,Dh(Et),Ne,$)}if(z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Hs.upload(D,Dh(Et),Ne,$),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&me.setValue(D,"center",H.center),me.setValue(D,"modelViewMatrix",H.modelViewMatrix),me.setValue(D,"normalMatrix",H.normalMatrix),me.setValue(D,"modelMatrix",H.matrixWorld),z.uniformsGroups!==void 0){let ye=z.uniformsGroups;for(let vn=0,os=ye.length;vn<os;vn++){let Fh=ye[vn];st.update(Fh,vi),st.bind(Fh,vi)}}return vi}function rf(E,U){E.ambientLightColor.needsUpdate=U,E.lightProbe.needsUpdate=U,E.sunLights.needsUpdate=U,E.sunLightShadows.needsUpdate=U,E.directionalLights.needsUpdate=U,E.directionalLightShadows.needsUpdate=U,E.pointLights.needsUpdate=U,E.pointLightShadows.needsUpdate=U,E.spotLights.needsUpdate=U,E.spotLightShadows.needsUpdate=U,E.rectAreaLights.needsUpdate=U,E.hemisphereLights.needsUpdate=U}function af(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return nt},this.setRenderTargetTextures=function(E,U,G){let z=V.get(E);z.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),V.get(E.texture).__webglTexture=U,V.get(E.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:G,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,U){let G=V.get(E);G.__webglFramebuffer=U,G.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(E,U=0,G=0){nt=E,q=U,W=G;let z=null,H=!1,St=!1;if(E){let bt=V.get(E);if(bt.__useDefaultFramebuffer!==void 0){b.bindFramebuffer(D.FRAMEBUFFER,bt.__webglFramebuffer),et.copy(E.viewport),Ct.copy(E.scissor),Tt=E.scissorTest,b.viewport(et),b.scissor(Ct),b.setScissorTest(Tt),X=-1;return}else if(bt.__webglFramebuffer===void 0)$.setupRenderTarget(E);else if(bt.__hasExternalTextures)$.rebindTextures(E,V.get(E.texture).__webglTexture,V.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let jt=E.depthTexture;if(bt.__boundDepthTexture!==jt){if(jt!==null&&V.has(jt)&&(E.width!==jt.image.width||E.height!==jt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");$.setupDepthRenderbuffer(E)}}let It=E.texture;(It.isData3DTexture||It.isDataArrayTexture||It.isCompressedArrayTexture)&&(St=!0);let Dt=V.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Dt[U])?z=Dt[U][G]:z=Dt[U],H=!0):E.samples>0&&$.useMultisampledRTT(E)===!1?z=V.get(E).__webglMultisampledFramebuffer:Array.isArray(Dt)?z=Dt[G]:z=Dt,et.copy(E.viewport),Ct.copy(E.scissor),Tt=E.scissorTest}else et.copy(ht).multiplyScalar(K).floor(),Ct.copy(Vt).multiplyScalar(K).floor(),Tt=ce;if(G!==0&&(z=B),b.bindFramebuffer(D.FRAMEBUFFER,z)&&b.drawBuffers(E,z),b.viewport(et),b.scissor(Ct),b.setScissorTest(Tt),H){let bt=V.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+U,bt.__webglTexture,G)}else if(St){let bt=U;for(let It=0;It<E.textures.length;It++){let Dt=V.get(E.textures[It]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+It,Dt.__webglTexture,G,bt)}}else if(E!==null&&G!==0){let bt=V.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,bt.__webglTexture,G)}X=-1};function Uh(E){let U=V.get(E);return(U.__readFormat!==E.format||U.__readType!==E.type)&&(U.__readFormat=E.format,U.__readType=E.type,U.__formatReadable=C.textureFormatReadable(E.format),U.__typeReadable=C.textureTypeReadable(E.type)),U}this.readRenderTargetPixels=function(E,U,G,z,H,St,At,bt=0){if(!(E&&E.isWebGLRenderTarget)){Gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=V.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&At!==void 0&&(It=It[At]),It){b.bindFramebuffer(D.FRAMEBUFFER,It);try{let Dt=E.textures[bt],jt=Dt.format,ie=Dt.type;E.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+bt);let Pt=Uh(Dt);if(Pt.__formatReadable===!1){Gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Pt.__typeReadable===!1){Gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=E.width-z&&G>=0&&G<=E.height-H&&D.readPixels(U,G,z,H,_t.convert(jt),_t.convert(ie),St)}finally{let Dt=nt!==null?V.get(nt).__webglFramebuffer:null;b.bindFramebuffer(D.FRAMEBUFFER,Dt)}}},this.readRenderTargetPixelsAsync=async function(E,U,G,z,H,St,At,bt=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let It=V.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&At!==void 0&&(It=It[At]),It)if(U>=0&&U<=E.width-z&&G>=0&&G<=E.height-H){b.bindFramebuffer(D.FRAMEBUFFER,It);let Dt=E.textures[bt],jt=Dt.format,ie=Dt.type;E.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+bt);let Pt=Uh(Dt);if(Pt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Pt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let de=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,de),D.bufferData(D.PIXEL_PACK_BUFFER,St.byteLength,D.STREAM_READ),D.readPixels(U,G,z,H,_t.convert(jt),_t.convert(ie),0),D.bindBuffer(D.PIXEL_PACK_BUFFER,null);let Ue=nt!==null?V.get(nt).__webglFramebuffer:null;b.bindFramebuffer(D.FRAMEBUFFER,Ue);let Te=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Ku(D,Te,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,de),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,St),D.bindBuffer(D.PIXEL_PACK_BUFFER,null),D.deleteBuffer(de),D.deleteSync(Te),St}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,U=null,G=0){let z=Math.pow(2,-G),H=Math.floor(E.image.width*z),St=Math.floor(E.image.height*z),At=U!==null?U.x:0,bt=U!==null?U.y:0;$.setTexture2D(E,0),D.copyTexSubImage2D(D.TEXTURE_2D,G,0,0,At,bt,H,St),b.unbindTexture()},this.copyTextureToTexture=function(E,U,G=null,z=null,H=0,St=0){let At,bt,It,Dt,jt,ie,Pt,de,Ue,Te=E.isCompressedTexture?E.mipmaps[St]:E.image;if(G!==null)At=G.max.x-G.min.x,bt=G.max.y-G.min.y,It=G.isBox3?G.max.z-G.min.z:1,Dt=G.min.x,jt=G.min.y,ie=G.isBox3?G.min.z:0;else{let Ne=Math.pow(2,-H);At=Math.floor(Te.width*Ne),bt=Math.floor(Te.height*Ne),E.isDataArrayTexture?It=Te.depth:E.isData3DTexture?It=Math.floor(Te.depth*Ne):It=1,Dt=0,jt=0,ie=0}z!==null?(Pt=z.x,de=z.y,Ue=z.z):(Pt=0,de=0,Ue=0);let ge=_t.convert(U.format),Ke=_t.convert(U.type),Et;U.isData3DTexture?($.setTexture3D(U,0),Et=D.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?($.setTexture2DArray(U,0),Et=D.TEXTURE_2D_ARRAY):($.setTexture2D(U,0),Et=D.TEXTURE_2D),b.activeTexture(D.TEXTURE0),b.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,U.flipY),b.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),b.pixelStorei(D.UNPACK_ALIGNMENT,U.unpackAlignment);let ni=b.getParameter(D.UNPACK_ROW_LENGTH),le=b.getParameter(D.UNPACK_IMAGE_HEIGHT),vi=b.getParameter(D.UNPACK_SKIP_PIXELS),Fi=b.getParameter(D.UNPACK_SKIP_ROWS),mn=b.getParameter(D.UNPACK_SKIP_IMAGES);b.pixelStorei(D.UNPACK_ROW_LENGTH,Te.width),b.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Te.height),b.pixelStorei(D.UNPACK_SKIP_PIXELS,Dt),b.pixelStorei(D.UNPACK_SKIP_ROWS,jt),b.pixelStorei(D.UNPACK_SKIP_IMAGES,ie);let as=E.isDataArrayTexture||E.isData3DTexture,me=U.isDataArrayTexture||U.isData3DTexture;if(E.isDepthTexture){let Ne=V.get(E),gn=V.get(U),ye=V.get(Ne.__renderTarget),vn=V.get(gn.__renderTarget);b.bindFramebuffer(D.READ_FRAMEBUFFER,ye.__webglFramebuffer),b.bindFramebuffer(D.DRAW_FRAMEBUFFER,vn.__webglFramebuffer);for(let os=0;os<It;os++)as&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,V.get(E).__webglTexture,H,ie+os),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,V.get(U).__webglTexture,St,Ue+os)),D.blitFramebuffer(Dt,jt,At,bt,Pt,de,At,bt,D.DEPTH_BUFFER_BIT,D.NEAREST);b.bindFramebuffer(D.READ_FRAMEBUFFER,null),b.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(H!==0||E.isRenderTargetTexture||V.has(E)){let Ne=V.get(E),gn=V.get(U);b.bindFramebuffer(D.READ_FRAMEBUFFER,N),b.bindFramebuffer(D.DRAW_FRAMEBUFFER,O);for(let ye=0;ye<It;ye++)as?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ne.__webglTexture,H,ie+ye):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ne.__webglTexture,H),me?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,gn.__webglTexture,St,Ue+ye):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,gn.__webglTexture,St),H!==0?D.blitFramebuffer(Dt,jt,At,bt,Pt,de,At,bt,D.COLOR_BUFFER_BIT,D.NEAREST):me?D.copyTexSubImage3D(Et,St,Pt,de,Ue+ye,Dt,jt,At,bt):D.copyTexSubImage2D(Et,St,Pt,de,Dt,jt,At,bt);b.bindFramebuffer(D.READ_FRAMEBUFFER,null),b.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else me?E.isDataTexture||E.isData3DTexture?D.texSubImage3D(Et,St,Pt,de,Ue,At,bt,It,ge,Ke,Te.data):U.isCompressedArrayTexture?D.compressedTexSubImage3D(Et,St,Pt,de,Ue,At,bt,It,ge,Te.data):D.texSubImage3D(Et,St,Pt,de,Ue,At,bt,It,ge,Ke,Te):E.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,St,Pt,de,At,bt,ge,Ke,Te.data):E.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,St,Pt,de,Te.width,Te.height,ge,Te.data):D.texSubImage2D(D.TEXTURE_2D,St,Pt,de,At,bt,ge,Ke,Te);b.pixelStorei(D.UNPACK_ROW_LENGTH,ni),b.pixelStorei(D.UNPACK_IMAGE_HEIGHT,le),b.pixelStorei(D.UNPACK_SKIP_PIXELS,vi),b.pixelStorei(D.UNPACK_SKIP_ROWS,Fi),b.pixelStorei(D.UNPACK_SKIP_IMAGES,mn),St===0&&U.generateMipmaps&&D.generateMipmap(Et),b.unbindTexture()},this.initRenderTarget=function(E){V.get(E).__webglFramebuffer===void 0&&$.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?$.setTextureCube(E,0):E.isData3DTexture?$.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?$.setTexture2DArray(E,0):$.setTexture2D(E,0),b.unbindTexture()},this.resetState=function(){q=0,W=0,nt=null,b.reset(),wt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ne._getDrawingBufferColorSpace(t),e.unpackColorSpace=ne._getUnpackColorSpace()}};var Zr="1.0.0";var Rt={height:146,width:20,cz:-24,front:-14,armH:118,pivotX:6.2,pivotZ:-14,armLen:34,armHalf:1,armTall:3.6,openYaw:.5,closeTime:.85,mountTop:26,mountR:10},dl={booster:{key:"booster",name:"Super Heavy",len:71,r:4.5,cg:28,pin:64,dry:18e4,engT:11e5,isp:2747,minThr:.4,cdEnd:70,cdSide:560,kn:130,stab:.55,finAuth:.7,rcs:.09,gimbal:.9,engines:(()=>{let s=[];for(let t=0;t<3;t++){let e=(90+t*120)*Math.PI/180;s.push({x:Math.cos(e)*1.05,z:Math.sin(e)*1.05,g:"c"})}for(let t=0;t<10;t++){let e=(t*36+18)*Math.PI/180;s.push({x:Math.cos(e)*2.5,z:Math.sin(e)*2.5,g:"i"})}for(let t=0;t<20;t++){let e=(t*18+9)*Math.PI/180;s.push({x:Math.cos(e)*3.85,z:Math.sin(e)*3.85,g:"o"})}return s})(),sets:{big:13,small:3},switchSpeed:48,bigSpeed:140},ship:{key:"ship",name:"Starship",len:50,r:4.5,cg:19,pin:42,dry:1e5,engT:11e5,isp:2747,minThr:.4,plate:!0,cdEnd:26,cdSide:300,kn:70,stab:0,finAuth:.9,rcs:.12,gimbal:1.4,engines:(()=>{let s=[];for(let t=0;t<3;t++){let e=(90+t*120)*Math.PI/180;s.push({x:Math.cos(e)*1.35,z:Math.sin(e)*1.35,g:"c"})}for(let t=0;t<3;t++){let e=(30+t*120)*Math.PI/180;s.push({x:Math.cos(e)*3.1,z:Math.sin(e)*3.1,g:"v"})}return s})(),sets:{big:3,small:2},switchSpeed:25,bigSpeed:9999}},ss={day:{label:"Tag",sunEl:52,sunAz:140,exposure:1},afternoon:{label:"Nachmittag",sunEl:28,sunAz:235,exposure:1},dusk:{label:"Abendd\xE4mmerung",sunEl:4.5,sunAz:262,exposure:1.15},night:{label:"Nacht",sunEl:-18,sunAz:300,exposure:1.25},dawn:{label:"Morgennebel",sunEl:7,sunAz:95,exposure:1.1},storm:{label:"Sturm",sunEl:20,sunAz:250,exposure:.95}},gi=[{id:1,name:"Erster Fang",sub:"Ruhiger Tag, leichter Wind",start:"final",vehicle:"booster",tod:"day",wind:{base:2,dir:-1,gust:.6},fuel:8e4,failP:0,seed:101,tutorial:!0,brief:"Dein erster Fang. Der Booster ist bereits im Endanflug. Lenke ihn \xFCber die Startrampe, z\xFCnde rechtzeitig die Landetriebwerke und schliesse die Arme, wenn die Fangbolzen knapp \xFCber den Schienen sind."},{id:2,name:"Heimkehr",sub:"Die komplette R\xFCckkehr",start:"sep",vehicle:"booster",tod:"afternoon",wind:{base:4,dir:-1,gust:1.5},fuel:255e3,failP:0,seed:202,brief:"Nach der Stufentrennung fliegst du den ganzen Weg zur\xFCck: R\xFCckstoss-Z\xFCndung, Freiflug, Wiedereintritt, Landez\xFCndung und Fang. Achte beim R\xFCckstoss auf den Aufschlagpunkt."},{id:3,name:"Seitenwind",sub:"Kr\xE4ftiger, stetiger Wind von See",start:"entry",vehicle:"booster",tod:"afternoon",wind:{base:13,dir:-1,gust:2.5},fuel:84e3,failP:0,seed:303,brief:"Starker Seewind dr\xFCckt den Booster Richtung Land. Halte dagegen \u2013 mit Neigung in den Wind, besonders im Schwebeflug."},{id:4,name:"Nachtfang",sub:"Nur Turmlichter und Feuer",start:"entry",vehicle:"booster",tod:"night",wind:{base:5,dir:1,gust:1.5},fuel:7e4,failP:.02,seed:404,brief:"Ein Fang in tiefer Nacht. Der Turm ist beleuchtet, der Rest liegt im Dunkeln. Verlass dich auf die Instrumente."},{id:5,name:"Seenebel",sub:"Dichter Nebel \xFCber der K\xFCste",start:"entry",vehicle:"booster",tod:"dawn",wind:{base:3,dir:-1,gust:1},fuel:7e4,failP:.02,seed:505,fog:!0,brief:"Morgennebel liegt \xFCber dem Golf. Der Turm taucht erst sp\xE4t aus dem Dunst auf. Instrumentenanflug!"},{id:6,name:"Triebwerksausfall",sub:"Z\xFCndaussetzer & Ausfall",start:"entry",vehicle:"booster",tod:"day",wind:{base:5,dir:1,gust:2},fuel:74e3,failP:.18,engineOut:!0,seed:606,brief:"Die Telemetrie zeigt Probleme. Einzelne Triebwerke k\xF6nnten nicht z\xFCnden, und im Schwebeflug wird ein Mitteltriebwerk ausfallen. Halte den Booster trotzdem gerade."},{id:7,name:"Letzte Tropfen",sub:"Knapper Treibstoff",start:"sep",vehicle:"booster",tod:"dusk",wind:{base:4,dir:-1,gust:1.5},fuel:222e3,failP:.03,seed:707,brief:"Der Aufstieg hat mehr gekostet als geplant. Brenne beim R\xFCckstoss nur so viel wie n\xF6tig \u2013 jede Tonne fehlt dir sonst beim Fang."},{id:8,name:"Sturmfront",sub:"B\xF6en, Regen, Blitze",start:"entry",vehicle:"booster",tod:"storm",wind:{base:9,dir:-1,gust:8},fuel:84e3,failP:.05,seed:808,rain:!0,brief:"Eine Sturmfront zieht auf. Heftige B\xF6en sch\xFCtteln den Booster. Fange ihn, bevor das Wetter endg\xFCltig zumacht."},{id:9,name:"Schiffsfang",sub:"Bonus: Fang das Starship",start:"ship",vehicle:"ship",tod:"dusk",wind:{base:4,dir:1,gust:1.5},fuel:34e3,failP:.02,seed:909,bonus:!0,brief:"Bonusmission: Das Starship kommt in Bauchlage zur\xFCck. Steuere mit den Klappen, z\xFCnde f\xFCr das Aufrichten und fange es mit den Armen."},{id:10,name:"Zeitrennen",sub:"So schnell wie m\xF6glich fangen",start:"entry",vehicle:"booster",tod:"day",wind:{base:3,dir:-1,gust:1},fuel:74e3,failP:0,seed:1010,timeTrial:{gold:72,silver:82,bronze:96},brief:"Gegen die Uhr: vom Wiedereintritt bis zum Fang. Sp\xE4te, harte Z\xFCndung spart Zeit \u2013 aber nur, wenn der Fang gelingt."}],Nn=[{id:"steel",name:"Edelstahl",desc:"Frisch vom Band",stars:0,tint:[.8,.81,.83],rough:.32,soot:.15,frost:.55},{id:"soot",name:"Russpatina",desc:"Veteran mit Flugspuren",stars:4,tint:[.62,.6,.58],rough:.5,soot:.85,frost:.4},{id:"frost",name:"Frostlinie",desc:"Volle Tanks, dicker Reif",stars:8,tint:[.84,.86,.9],rough:.36,soot:.25,frost:1},{id:"black",name:"Nachtschwarz",desc:"Keramikbeschichtung",stars:12,tint:[.1,.1,.11],rough:.55,soot:.3,frost:.25},{id:"gold",name:"Goldjubil\xE4um",desc:"Hundert F\xE4nge, ein Glanz",stars:18,tint:[.92,.74,.4],rough:.25,soot:.12,frost:.3},{id:"retro",name:"Retro-Weiss",desc:"Klassisches Rollmuster",stars:24,tint:[.93,.93,.92],rough:.6,soot:.15,frost:.2,pattern:"roll"}],rs=[{id:"b1",name:"Block 1",desc:"71 m, vier Gridfins",req:null,len:71,fins:4},{id:"b2",name:"Block 2",desc:"72 m, drei grosse Gridfins",req:{perfect:1},len:72.5,fins:3},{id:"b3",name:"Block 3",desc:"Schlank, integrierter Heissstufen-Ring",req:{missions:8},len:74,fins:3,sleek:!0}],Ws=[{id:"auto",name:"Regie (Auto)",req:null},{id:"chase",name:"Verfolger",req:null},{id:"tower",name:"Turm-Kamera",req:null},{id:"drone",name:"Drohne",req:null},{id:"beach",name:"Strand-Zuschauer",req:null},{id:"arm",name:"Arm-Kamera",req:{mission:3}},{id:"ground",name:"Bodenkamera",req:{mission:5}},{id:"onboard",name:"Bordkamera",req:{mission:7}}],Jr=[{id:"first",name:"Erster Fang",desc:"Fange zum ersten Mal einen Booster."},{id:"perfect",name:"Perfektionist",desc:"Schaffe einen perfekten Fang."},{id:"feather",name:"Federleicht",desc:"Setze mit weniger als 0.5 m/s auf."},{id:"needle",name:"Nadel\xF6hr",desc:"Fange mit weniger als 0.3 m Versatz."},{id:"reserve",name:"Auf Reserve",desc:"Fange mit weniger als 4 % Treibstoff."},{id:"night",name:"Nachtschw\xE4rmer",desc:"Schaffe den Nachtfang."},{id:"fog",name:"Blindflug",desc:"Schaffe den Fang im Seenebel."},{id:"engine",name:"Einer fehlt",desc:"Fange trotz Triebwerksausfall."},{id:"storm",name:"Sturmreiter",desc:"Bezwinge die Sturmfront."},{id:"ship",name:"Schiffsf\xE4nger",desc:"Fange das Starship."},{id:"gold",name:"Zeitj\xE4ger",desc:"Hol dir Gold im Zeitrennen."},{id:"pro",name:"Profi",desc:"Fange auf der Stufe Profi."},{id:"boom",name:"Feuerwerk",desc:"Lass einen Booster spektakul\xE4r explodieren."},{id:"streak",name:"Serient\xE4ter",desc:"F\xFCnf F\xE4nge in Folge."},{id:"veteran",name:"Veteran",desc:"25 erfolgreiche F\xE4nge."},{id:"allstars",name:"Sternenhimmel",desc:"Sammle alle 30 Sterne."}],fl={easy:{id:"easy",name:"Leicht",desc:"Flugbahn, Z\xFCndhilfe, Lenkpfeile, Schub-Empfehlung, Positionshalten"},normal:{id:"normal",name:"Normal",desc:"Flugbahn und Z\xFCndanzeige"},pro:{id:"pro",name:"Profi",desc:"Direkte Lageregelung, keine Hilfen"}};function ci(s){let t=s>>>0;return function(){t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}var Kr=class{constructor(t){let e=ci(t);this.v=new Float32Array(512);for(let i=0;i<512;i++)this.v[i]=e()*2-1}at(t){let e=Math.floor(t),i=t-e,n=this.v[e&511],r=this.v[e+1&511],a=i*i*(3-2*i);return n+(r-n)*a}fbm(t){return this.at(t)*.55+this.at(t*2.13+17.3)*.28+this.at(t*4.37+41.1)*.17}},Se=(s,t,e)=>s<t?t:s>e?e:s;var jr=(s,t,e)=>{let i=Se((e-s)/(t-s),0,1);return i*i*(3-2*i)},De=Math.PI/180;var Xs=9.81,_h=1/120,pl=s=>1.225*Math.exp(-Math.max(0,s)/8500),Tx=s=>340-.0039*Se(s,0,11e3);function Ud(s){return Rt.pivotX+Math.tan(s)*-Rt.pivotZ-Rt.armHalf/Math.cos(s)}function Ex(s){let t=-.3,e=Rt.openYaw;for(let i=0;i<40;i++){let n=(t+e)/2;Ud(n)>s?e=n:t=n}return(t+e)/2}var Li=Ex(4.62),bi=Rt.openYaw,Ax={sep:{x:36e3,y:56e3,vx:720,vy:180,th:52*De,T0:162},entry:{x:5600,y:2e4,vx:-180,vy:-540,th:18*De,T0:318},final:{x:1150,y:6200,vx:-92,vy:-255,th:0,T0:388},ship:{x:1500,y:6e3,vx:-80,vy:-70,th:-90*De,T0:3720}};var ml=class{constructor(t,e={}){this.m=t,this.opts=Object.assign({assist:"normal",autoClose:!1,len:null},e);let i=dl[t.vehicle];if(this.V=Object.assign({},i),e.len&&i.key==="booster"){let r=e.len-i.len;this.V.len=e.len,this.V.pin=i.pin+r,this.V.cg=i.cg+r*.4}this.ship=i.key==="ship",this.rng=ci(t.seed*7919+(e.seedSalt|0)),this.noise=new Kr(t.seed*31+5),this.noise2=new Kr(t.seed*17+9);let n=Ax[t.start];this.x=n.x,this.y=n.y,this.vx=n.vx,this.vy=n.vy,this.th=n.th,this.om=0,this.T0=n.T0,this.t=0,this.fuel=t.fuel,this.fuel0=t.fuel,this.reserve=t.start==="sep"?52e3:0,this.eng=this.V.engines.map((r,a)=>({i:a,x:r.x,z:r.z,g:r.g,st:0,sp:0,tt:0,failed:!1})),this.mode="off",this.thrCmd=0,this.thr=0,this.T=0,this.phase=t.start==="sep"?"sep":(t.start==="ship","entry"),this.locked=t.start==="sep",this.burned=0,this.landUnlocked=t.start!=="sep"&&t.start!=="entry",this.ship&&(this.landUnlocked=!0),this.input={u:0,thr:0,close:!1,small:!1},this.auto=null,this.thTgt=this.th,this.thSm=this.th,this.arms={phi:bi,tgt:bi,y:Rt.armH,vy:0,p:0,closing:!1,reopenAt:-1},this.attempts=0,this.events=[],this.timeScale=1,this.tsTarget=1,this.mach=0,this.q=0,this.heat=0,this.qPeak=0,this.maxQdone=!1,this.sonicDone=!1,this.wind=0,this.gustT=0,this.result=null,this.crash=null,this.caught=null,this.tipping=0,this.outOfFuel=!1,this.engineOutDone=!1,this.acc=0,this.flipDone=!1,this.gridfins=t.start!=="sep",this.finAct=0,this.lastFinCmd=0,this.lift=0,this.closeRequested=!1,this.stats={maxG:0,ignitions:0},this.prevPinY=this.pinY(),this.windDir=t.wind.dir,this.storm=!!t.rain,this.phase==="sep"?this.say("Stufentrennung best\xE4tigt","info"):this.ship?this.say("Starship in Bauchlage \u2013 Klappen aktiv","info"):this.say(t.start==="final"?"Endanflug \u2013 Booster im Sinkflug":"Wiedereintritt \u2013 Gridfins aktiv","info")}say(t,e="info",i=!0){this.events.push({type:"callout",text:t,kind:e,speak:i})}ev(t,e){this.events.push(Object.assign({type:t},e||{}))}mass(){return this.V.dry+this.fuel}axis(){return[Math.sin(this.th),Math.cos(this.th)]}bottomY(){return this.y-this.V.cg*Math.cos(this.th)}bottomX(){return this.x-this.V.cg*Math.sin(this.th)}pinY(){return this.y+(this.V.pin-this.V.cg)*Math.cos(this.th)}pinX(){return this.x+(this.V.pin-this.V.cg)*Math.sin(this.th)}catchCGY(){return Rt.armH-(this.V.pin-this.V.cg)}speed(){return Math.hypot(this.vx,this.vy)}windAt(t,e){let i=this.m.wind,n=.55+.45*jr(0,800,t)+1.4*jr(1500,12e3,t),r=this.noise.fbm(e*.35+t*.0021)*i.gust;return this.storm&&(r+=Math.max(0,this.noise2.at(e*.12)-.25)*i.gust*1.6*Math.sign(this.noise2.at(e*.5+3)+.3)),this.windDir*i.base*n+r*(.6+.4*jr(0,300,t))}thrustMax(t){return t*this.V.engT}liveCount(){let t=0;for(let e of this.eng)(e.st===2||e.st===1)&&t++;return t}runningCount(){let t=0;for(let e of this.eng)e.st===2&&t++;return t}forces(t,e,i,n,r,a,o){let c=this.mass(),l=Math.sin(t),u=Math.cos(t),f=n-o,h=r,d=Math.hypot(f,h),m=i*l,v=i*u,g=0,p=0;if(d>.05){let M=-f/d,y=-h/d,x=l*M+u*y;if(g=l*y-u*M,p=.5*pl(a)*d*d,this.V.plate){m+=p*this.V.cdEnd*x*x*M,v+=p*this.V.cdEnd*x*x*y;let _=-g,T=p*this.V.cdSide*_*Math.abs(_);m+=T*u,v+=T*-l}else{let _=this.V.cdEnd*x*x+this.V.cdSide*g*g;m+=p*_*M,v+=p*_*y}let S=M-x*l,w=y-x*u,A=this.V.kn*x;m+=p*A*S,v+=p*A*w}return e.ax=m/c,e.ay=v/c-Xs,e.sinA=g,e.q=p,e}setInput(t,e){this.input.u=Se(t,-1,1),this.input.thr=Se(e,0,1)}requestClose(){return this.phase!=="land"&&this.phase!=="entry"||this.arms.tgt===Li||this.arms.reopenAt>0?!1:(this.arms.tgt=Li,this.arms.closing=!0,this.closeRequested=!0,this.closeState=null,this.ev("armsClose"),this.say("Arme schliessen","info",!1),!0)}ignite(t){let e=[];for(let n=0;n<this.eng.length&&e.length<t;n++)!this.eng[n].failed&&(this.eng[n].g==="c"||this.eng[n].g==="i")&&e.push(n);let i=0;for(let n of e){let r=this.eng[n];if(this.m.failP>0&&this.rng()<this.m.failP){r.failed=!0,r.st=3,i++,this.ev("engineFail",{i:n});continue}r.st=1,r.tt=.42+this.rng()*.22}this.stats.ignitions++,this.mode=t>=10?"big":"small",this.ev("ignite",{n:e.length-i}),i&&this.say(i===1?"Z\xFCndaussetzer bei einem Triebwerk":`Z\xFCndaussetzer bei ${i} Triebwerken`,"warn"),this.mode==="small"&&this.backup()}backup(){let t=0;for(let n of this.eng)n.g==="c"&&(n.st===1||n.st===2)&&t++;let e=this.liveCount(),i=this.ship?2:3;for(;e<i;){let n=this.eng.find(r=>!r.failed&&r.st===0&&(r.g==="i"||r.g==="c"));if(!n)break;if(this.m.failP>0&&this.rng()<this.m.failP*.5){n.failed=!0,n.st=3,this.ev("engineFail",{i:n.i});continue}n.st=1,n.tt=.5,e++,this.say("Ersatztriebwerk z\xFCndet","warn")}}shutdown(t=!0){for(let e of this.eng)(e.st===1||e.st===2)&&(e.st=0);this.mode="off",t&&this.ev("shutdown")}update(t,e=1){let i=1;this.phase==="sep"?i=2.5:this.phase==="boost"?i=this.mode==="off"?2.5:4:(this.phase==="coast"||this.phase==="entry"&&this.mode==="off")&&(i=1+8*jr(14e3,32e3,this.y)),this.tsTarget=i,this.timeScale+=(i-this.timeScale)*Math.min(1,t*2.5),Math.abs(this.timeScale-i)<.02&&(this.timeScale=i),this.acc+=Math.min(t,.1)*this.timeScale*e;let n=0;for(;this.acc>=_h&&n<60;)this.step(_h),this.acc-=_h,n++;n>=60&&(this.acc=0)}step(t){if(this.phase==="done"||this.phase==="crashed"||this.phase==="caught"){this.t+=t,this.catchLogic(t),this.postStep(t);return}this.t+=t;let e=this.V;this.auto&&this.auto.control(this,t);let i=this.input,n=this.windAt(this.y,this.t);this.wind=n;let r=this.mass();this.phase==="sep"&&Math.abs(this.th- -80*De)<7*De&&Math.abs(this.om)<.25&&(this.phase="boost",this.locked=!1,this.ev("phase",{p:"boost"}),this.say("Drehung abgeschlossen \u2013 R\xFCckstoss-Z\xFCndung bereit","go")),this.phase==="coast"&&this.y<34e3&&this.vy<0&&(this.phase="entry",this.gridfins=!0,this.locked=!1,this.ev("phase",{p:"entry"}),this.say("Gridfins aktiv \u2013 du steuerst","go")),this.phase==="entry"&&!this.landUnlocked&&this.y<11e3&&(this.landUnlocked=!0,this.say("Landez\xFCndung freigegeben","go"));let a=!this.locked&&(this.phase==="boost"||(this.phase==="entry"||this.phase==="land")&&this.landUnlocked),o=i.thr>=.05&&a&&this.fuel>0;if(o&&this.mode==="off"){let _=this.speed();this.ship?(this.ignite(3),this.mode="big"):this.ignite(this.phase==="boost"||_>e.bigSpeed?e.sets.big:e.sets.small),this.phase==="boost"?this.say("R\xFCckstoss-Z\xFCndung","info"):(this.phase!=="land"&&(this.phase="land",this.ev("phase",{p:"land"})),this.say(this.mode==="big"?"Landez\xFCndung \u2013 13 Triebwerke":"Landez\xFCndung","info"))}else!o&&this.mode!=="off"&&(this.shutdown(),this.phase==="boost"&&this.burned>2&&(this.phase="coast",this.locked=!0,this.ev("phase",{p:"coast"}),this.say("Brennschluss \u2013 Freiflug","info")));if(this.mode!=="off"){let _=e.minThr+(1-e.minThr)*Se((i.thr-.05)/.95,0,1),T=1;if(this.opts.assist!=="pro"&&this.phase==="land"&&(T=1/Math.max(.86,Math.cos(this.th))),this.thr+=(Math.min(1,_*T)-this.thr)*Math.min(1,t/.18),this.mode==="big"&&this.phase==="land"&&(-this.vy<e.switchSpeed||this.input.small&&-this.vy<130)){let R=this.ship?2:3,I=0;for(let L of this.eng)(L.st===1||L.st===2)&&(L.g==="c"&&I<R?I++:L.st=0);this.mode="small",this.backup(),this.say(this.ship?"Wechsel auf 2 Triebwerke":"Wechsel auf 3 Mitteltriebwerke","info"),this.ev("switch")}if(this.m.engineOut&&!this.engineOutDone&&this.mode==="small"&&this.bottomY()<Rt.armH+260){this.engineOutDone=!0;let R=this.eng.find(I=>I.g==="c"&&I.st===2&&I.i===1)||this.eng.find(I=>I.g==="c"&&I.st===2);R&&(R.st=3,R.failed=!0,this.ev("engineFail",{i:R.i,hard:!0}),this.say("Ausfall Mitteltriebwerk!","bad"),this.backupAt=this.t+.9)}this.backupAt&&this.t>this.backupAt&&(this.backupAt=0,this.backup())}else this.thr+=(0-this.thr)*Math.min(1,t/.1);let c=0,l=0;for(let _ of this.eng){_.st===1&&(_.tt-=t,_.tt<=0&&(_.st=2));let T=_.st===2?1:0;_.sp+=(T-_.sp)*Math.min(1,t*(T>_.sp?3.2:_.failed?9:5)),_.sp<.002&&(_.sp=0);let R=e.engT*_.sp*Math.max(this.thr,_.st===2?e.minThr:0);c+=R,l+=R*_.x}this.fuel<=0&&(c=0,l=0,this.outOfFuel||(this.outOfFuel=!0,this.shutdown(),this.say("Treibstoff ersch\xF6pft!","bad"))),this.T=c;let u=c/e.isp;this.fuel=Math.max(0,this.fuel-u*t),this.phase==="boost"&&c>0&&(this.burned+=t),this.phase==="boost"&&this.reserve&&this.fuel<this.reserve&&!this.reserveWarned&&(this.reserveWarned=!0,this.say("Landereserve erreicht \u2013 Brennschluss!","warn"));let f=this.opts.assist==="pro",h;if(this.phase==="sep")h=-80*De;else if(this.phase==="boost")h=(-80+i.u*22)*De;else if(this.phase==="coast")h=0;else if(this.ship&&this.mode==="off"&&this.th<-40*De)h=f&&!this.auto?(-90+i.u*25)*De:this.searchTilt(i.aCmd??i.u*1.4,-118*De,-62*De,n,-90*De);else{let _=(this.phase==="land"?10:12)*De,T=0;{let R=this.vx-n;this.vy<-5&&(T=Se(Math.atan2(-R,-this.vy),-35*De,35*De)*Se(this.q/2e4,0,1))}if(f&&!this.auto)h=T+i.u*_*1.1;else{let R=i.aCmd;if(R==null){let I=this.phase==="land"?3.2:4.5;R=i.u*I,this.opts.assist==="easy"&&this.bottomY()<2500&&(R+=(1-Math.abs(i.u))*(-.55*this.vx))}h=this.searchTilt(R,T-_,T+_,n,T)}}this.thTgt=h,this.thSm+=(h-this.thSm)*Math.min(1,t/.22);let d=this.q/(this.ship?4e3:25e3),m=e.rcs*(this.phase==="sep"?3.5:1)+e.gimbal*Math.min(1.5,c/(3*e.engT))+(this.gridfins?e.finAuth*Math.min(1.6,d):0);this.ship&&this.mode!=="off"&&(m+=.6);let v=f?1.7:2.1,p=v*v*(this.thSm-this.th)-2*.95*v*this.om;p=Se(p,-m,m),this.finAct=p/Math.max(m,.001);let M=r*e.len*e.len/12,y=this.forces(this.th,this._f||(this._f={}),c,this.vx,this.vy,this.y,n);this.q=y.q;let x=p+l*3/M-e.stab*Math.min(2,y.q/25e3)*y.sinA-.15*Math.min(2,y.q/25e3)*this.om;this.storm&&(x+=this.noise2.fbm(this.t*1.3)*.05*Math.min(1,y.q/3e3)),this.om+=x*t,this.th+=this.om*t,this.vx+=y.ax*t,this.vy+=y.ay*t,this.x+=this.vx*t,this.y+=this.vy*t;let S=Math.hypot(y.ax,y.ay+Xs)/Xs;S>this.stats.maxG&&this.t>1&&(this.stats.maxG=S);let w=this.speed(),A=w/Tx(this.y);!this.sonicDone&&this.mach>=1&&A<1&&this.vy<0&&this.y<2e4&&(this.sonicDone=!0,this.ev("sonic"),this.say("\xDCberschallknall \xFCber der K\xFCste","info",!1)),this.mach=A,(this.phase==="entry"||this.phase==="coast")&&(y.q>this.qPeak?this.qPeak=y.q:!this.maxQdone&&this.qPeak>15e3&&y.q<this.qPeak*.97&&(this.maxQdone=!0,this.say("Max Q \u2013 maximale aerodynamische Last","info"),this.ev("maxq"))),this.heat=Se(pl(this.y)*w*w*w/32e6,0,1.5)*(this.vy<0?1:.3),this.catchLogic(t),this.groundLogic(t),this.tipUpdate(t),this.prevPinY=this.pinY()}searchTilt(t,e,i,n,r){let a=this._sf||(this._sf={}),o=r,c=1e9,l=Math.max(this.T,this.mode!=="off"?this.V.engT*this.V.minThr*2:0),u=0;this.mode==="off"&&(this.forces(r,a,0,this.vx,this.vy,this.y,n),u=a.ax);for(let f=e;f<=i+1e-6;f+=.5*De){this.forces(f,a,l,this.vx,this.vy,this.y,n);let h=Math.abs(a.ax-u-t)+Math.abs(f-r)*.25;h<c&&(c=h,o=f)}return o}catchLogic(t){let e=this.arms,i=this.V,n=Rt.armH,r=(bi-Li)/Rt.closeTime;e.reopenAt>0&&this.t>=e.reopenAt&&(e.tgt=bi,e.reopenAt=-1,this.ev("armsOpen"));let a=e.tgt-e.phi;if(e.phi+=Se(a,-r*t,r*t),e.p=(bi-e.phi)/(bi-Li),this.phase==="caught")return;let o=Ud(e.phi),c=this.pinY();if(this.opts.autoClose&&this.opts.assist==="easy"&&!this.auto&&e.tgt===bi&&e.reopenAt<0&&this.phase==="land"){let g=c-n;g>.8&&g<2.5+Math.abs(this.vy)*Rt.closeTime*1.1&&Math.abs(this.x)<2.2&&Math.abs(this.vx)<1.8&&Math.abs(this.th)<3.5*De&&this.vy>-4.5&&this.requestClose()}let l=Math.cos(this.th),u=Math.sin(this.th),f=i.r/Math.max(.3,l),h=2*Rt.armHalf/Math.cos(e.phi),d=0,m=0,v=!1;for(let g=0;g<3;g++){let M=(n-Rt.armTall*g/2-this.y)/l;if(M<-i.cg||M>i.len-i.cg)continue;let y=this.x+M*u,x=y-f,S=y+f;if(S>o&&x<o+h)if(v=!0,y<o){let w=S-o;w>d&&(d=w,m=1)}else d=99;if(x<-o&&S>-o-h)if(v=!0,y>-o){let w=-o-x;w>d&&(d=w,m=-1)}else d=99}if(v)if(e.p>.55&&Math.abs(this.x)<3.3&&d<3.4)this.x-=m*d*.6,Math.sign(this.vx)===m&&(this.vx*=.6),this.centered||(this.centered=!0,this.ev("armTouch",{pen:d}));else return this.doCrash("Kollision mit einem Fangarm","arm");if(e.tgt===Li&&e.p>=.999&&e.reopenAt<0){if(this.closeState||(this.closeState={pinDh:c-n,x:this.x,t:this.t},c<n-.25&&(this.attempts++,e.reopenAt=this.t+1,this.say("Bolzen unter den Schienen \u2013 Arme \xF6ffnen!","bad"),this.ev("miss"))),this.prevPinY>=n&&c<n&&Math.abs(this.x)<3.5)return this.doCatch();if(c>n+.25&&this.closeState.pinDh<-.25&&c-n<Rt.armTall+1&&this.vy>.4)return this.doCrash("Bolzen von unten gegen den Arm","arm")}e.tgt===Li&&this.closeState&&this.closeState.pinDh>Rt.armTall+40&&c-n>60}doCatch(){let t=this.V,e=-this.vy,i=Math.abs(this.vx),n=Math.abs(this.x),r=Math.abs(this.th)/De,a=this.fuel/(this.reserve?24e4:this.fuel0)*100,o=this.fuel,c=(m,v,g,p)=>m<=v?0:m<=g?1:m<=p?2:3,l=c(e,1,2.6,5.2),u=c(n,.8,1.8,3.2),f=c(r,1.6,3.2,6.5),h=c(i,.7,1.6,3.2),d=Math.max(l,u,f,h);if(this.attempts>0&&d<1&&(d=1),this.shutdown(),this.caught={vy:e,vx:i,off:n,tilt:r,fuelPct:a,fuelAbs:o,grade:d,t:this.t,attempts:this.attempts,parts:{gv:l,gx:u,gt:f,gh:h}},d>=3){this.caught.grade=3;let m=l>=3?"Aufprall zu hart \u2013 Struktur versagt":f>=3?"Zu schr\xE4g \u2013 Booster rutscht aus den Armen":u>=3?"Zu weit neben der Mitte":"Zu viel Seitw\xE4rtsfahrt";return this.doCrash(m,"catch")}this.phase="caught",this.ev("contact",{vy:e,grade:d}),this.arms.vy=-e*.9,this.caughtT=this.t,this.say(d===0?"Booster gefangen \u2013 perfekt!":d===1?"Booster gefangen!":"Booster gefangen \u2013 harter Fang","go")}doCrash(t,e){if(this.phase==="crashed")return;let i=this.speed();this.crash={why:t,kind:e,x:this.x,y:this.y,bx:this.bottomX(),by:this.bottomY(),vx:this.vx,vy:this.vy,th:this.th,om:this.om,sp:i,t:this.t,fuel:this.fuel,water:this.overWater(this.bottomX())&&this.bottomY()<5},this.shutdown(!1);for(let n of this.eng)n.st=0,n.sp=0;this.phase="crashed",this.ev("crash",this.crash),this.say(t,"bad")}overWater(t){return t>720}groundLogic(t){if(this.phase==="crashed"||this.phase==="caught"||this.phase==="done")return;let e=this.bottomY(),i=this.bottomX(),n=Math.abs(i)<Rt.mountR+2,r=n?Rt.mountTop:this.overWater(i)?0:1.5,a=e-Math.abs(Math.sin(this.th))*this.V.r;if(a<=r){let o=this.speed();if(this.tipping>0)return;o<3.5&&Math.abs(this.th)<.3?(this.tipping=1,this.y+=r-a,this.vx=0,this.vy=0,this.say(n?"Aufgesetzt statt gefangen \u2013 Booster kippt!":"Notlandung \u2013 Booster kippt!","bad"),this.tipT=this.t):this.doCrash(this.overWater(i)?"Wasserung \u2013 Booster im Golf versunken":n?"Aufprall auf dem Starttisch":"Aufprall am Boden","ground")}}postStep(t){if(this.phase==="caught"||this.phase==="done"&&this.caught){let e=this.arms,i=14,n=4.2;e.vy+=(-i*(e.y-Rt.armH)-n*e.vy)*t,e.y+=e.vy*t,this.x+=(0-this.x)*Math.min(1,t*1.5),this.vx=0,this.om+=(-3.5*this.th-1.4*this.om)*t,this.th+=this.om*t,this.y=e.y-(this.V.pin-this.V.cg)*Math.cos(this.th)+.15,this.vy=e.vy,this.phase==="caught"&&this.t-this.caughtT>3.6&&(this.phase="done",this.ev("done"))}}tick(t){}tipUpdate(t){if(this.tipping>0&&this.phase!=="crashed"){let e=this.th>=0?1:-1;this.om+=e*.9*t,this.th+=this.om*t,(Math.abs(this.th)>.65||this.t-this.tipT>2.6)&&this.doCrash("Booster umgekippt","ground")}}predict(t={}){let e=t.pts||null,i=0,n=this.x,r=this.y,a=this.vx,o=this.vy,c=this.catchCGY(),l=t.thrust?this.T:0,u={},f=0,h=t.horizon||900,d=this.th,m=this.mass();for(;f<h;){let v=t.thrust?.1:Se((r-c)/1500,.08,1.5),g=this.windAt(r,this.t+f)*(t.noGust,1);if(t.thrust||(d=Math.hypot(a-g,o)>1?Math.atan2(-(a-g),-o):0,this.ship&&d<-.8&&(d=-Math.PI/2),!this.ship&&o>0&&(d=this.th)),this.forces(d,u,l,a,o,r,g),a+=u.ax*v,o+=u.ay*v,n+=a*v,r+=o*v,f+=v,e&&i<e.length/3&&(e[i*3]=n,e[i*3+1]=r,e[i*3+2]=f,i++),o<0&&r<=c){let p=(c-r)/o;n+=a*p,f+=p;break}if(t.thrust&&o>0&&f>1)break}return{x:n,t:f,n:i,vy:o,vx:a,y:r}}predictLanding(){let t=this.V,e=this.x,i=this.y,n=this.vx,r=this.vy,a=0,o=this.catchCGY()+1.2,c=this._pf||(this._pf={}),l=this.mass(),u=t.sets.big,f=this.mode!=="off",h=-1,d=this.profile();for(;a<600;){let m=f?.1:Se((i-o)/1500,.08,1),v=this.windAt(i,this.t+a),g=n-v,p=Math.hypot(g,r),M=p>1&&r<-5?Math.atan2(-g,-r):0;this.ship&&!f&&(M=-Math.PI/2);let y=0;if(!f){let S=.5*pl(i)*p*p*t.cdEnd/l,w=Math.max(1,.55*(u*t.engT/l-Xs)+.45*S),A=Math.max(0,-r),_=A<=d.vs?A*A/(2*d.aS):d.dS+(A*A-d.vs*d.vs)/(2*w);_+=A*.75+(this.ship?A*2.2:0),this.landUnlocked!==!1&&i<=o+_&&r<-5&&(f=!0,h=a)}if(f){let x=.5*pl(i)*p*p;M*=Se(x/2e4,0,1),this.forces(M,c,0,n,r,i,v);let S=i-o,w=Math.max(0,(r*r-d.vs*d.vs)/(2*Math.max(5,S-d.dS)));if(y=Se(l*(w-c.ay)/Math.max(.5,Math.cos(M)),u*t.minThr*t.engT,u*t.engT),-r<d.vs){let A=2*Math.max(0,S)/Math.max(1,-r);e+=n*A*.45;break}}if(this.forces(M,c,y,n,r,i,v),n+=c.ax*m,r+=c.ay*m,e+=n*m,i+=r*m,a+=m,i<=o&&r<0)break}return{x:e,t:a,tIgn:h}}profile(){let t=this.V,e=this.mass(),i=t.sets.big,n=t.sets.small,r=Math.max(.8,.7*(n*t.engT/Math.max(e-8e3,t.dry)-Xs)),a=this.q*t.cdEnd/e,o=Math.max(1,.55*(i*t.engT/e-Xs)+.45*a),c=this.ship?24:44;return{aS:r,aB:o,vs:c,dS:c*c/(2*r)}}refVy(t){let e=this.profile();return t<=0?0:t<=e.dS?-Math.sqrt(2*e.aS*t):-Math.sqrt(e.vs*e.vs+2*e.aB*(t-e.dS))}refAcc(t){let e=this.profile();return t<=e.dS?e.aS:e.aB}burnAltitude(){let t=this.profile(),e=Math.max(0,-this.vy),i=e<=t.vs?e*e/(2*t.aS):t.dS+(e*e-t.vs*t.vs)/(2*t.aB);return i+=e*(this.mode==="off"?.75:0)+(this.ship?e*2.2:0),this.catchCGY()+1.2+i}};var Rx=0;function yh(s,t){t=t||{};let e=Rt.armH,i=s.V;if(t.aCmd=0,t.thr=0,t.ignite=!1,t.close=!1,t.burnAlt=0,t.mode=s.phase,s.phase==="boost")return t.thr=1,t.aCmd=0,s.pred&&s.pred.x<(s.bbAim??250)&&(t.thr=0),t;if(s.phase!=="entry"&&s.phase!=="land")return t;let n=s.pinY()-(e+1.2),r=s.ship;if(s.mode==="off"){let y=s.pred,x=s.predL;if(y){let S=s.landUnlocked&&x?x.x:y.x,w=Math.max(y.t,3);if(t.aCmd=Se(-2.4*S/(w*w)-(w<25?.35*(s.vx+S/w)*0:0),-4.5,4.5),s.bottomY()<3500&&(t.aCmd=Se(t.aCmd-.02*s.x-0*s.vx,-4.5,4.5)),s.bottomY()<7e3&&s.landUnlocked){let A=Math.max(4,x&&x.t||w),_=Se(-s.x/A,-40,40);t.aCmd=Se(t.aCmd-Rx*(s.vx-_),-4.5,4.5)}}return t.burnAlt=s.burnAltitude(),s.landUnlocked&&s.y<=t.burnAlt&&s.vy<-5&&(t.ignite=!0,t.thr=1),t}let a=s._gf||(s._gf={});s.forces(s.th,a,0,s.vx,s.vy,s.y,s.wind);let o=a.ay,c,l=Math.abs(s.x)+Math.abs(s.vx)*1.5,u=l>5.5?76:l>2.2?9:0,f=n-u,h=s.profile();if(t.small=!1,s.mode==="big"&&f>h.dS+15){c=Math.max(0,(s.vy*s.vy-h.vs*h.vs)/(2*(f-h.dS)));let x=Math.max(1,s.liveCount())*i.minThr*i.engT/s.mass()+o;c<x*.8&&-s.vy<125&&(t.small=!0)}else if(f>14){let y=-Math.sqrt(12.9+2*h.aS*(f-12));c=(s.vy<y?Math.max(0,(s.vy*s.vy-12.9)/(2*(f-12))):h.aS)+1*(y-s.vy),s.mode==="big"&&(t.small=-s.vy<125)}else{let y=f>0?-Se(.8+f*.22,.8,3.6):Se(-f*.4,0,2);s.arms.tgt===Li&&s.arms.p>.98&&s.arms.reopenAt<0&&(y=-.75),c=(y-s.vy)*1.8}s.vy>2.5&&(c=Math.min(c,-1));let d=s.mass(),m=Math.max(.5,Math.cos(s.th)),v=d*(c-o)/m,g=Math.max(1,s.liveCount()),p=v/(g*i.engT);t.thrEff=p,t.thr=Se(.05+.95*(p-i.minThr)/(1-i.minThr),.06,1);let M=Se(2*Math.max(n,0)/Math.max(1,-s.vy),2.5,40);if(n>60&&s.vy<-8){let y=s.x+s.vx*M;t.aCmd=Se(-3.2*y/(M*M),-5,5)}else t.aCmd=Se(-.22*s.x-1.1*s.vx,-3.2,3.2);return r&&s.th<-20*De&&(t.aCmd=0),t.close=s.arms.tgt!==Li&&s.arms.reopenAt<0&&n>-.4&&n<2.2&&Math.abs(s.x)<1.1&&Math.abs(s.vx)<.6&&Math.abs(s.th)<1.6*De&&s.vy>-3,t}var Un=class{constructor(t={}){this.tp=0,this.g={},this.bbAim=t.bbAim??250,this.lateClose=t.lateClose||0,this.sloppy=t.sloppy||0}control(t,e){this.tp-=e,this.tp<=0&&(t.phase==="boost"||t.phase==="entry"||t.phase==="land"&&t.mode==="off")&&(t.pred=t.predict(),t.phase!=="boost"&&(t.predL=t.predictLanding()),this.tp=t.phase==="boost"?.2:.25),t.bbAim=this.bbAim;let i=yh(t,this.g);t.input.aCmd=i.aCmd+this.sloppy*Math.sin(t.t*.7)*2.5,t.input.u=0,t.input.thr=i.thr,t.input.small=!!i.small,t.phase==="land"&&t.mode==="off"&&!i.ignite&&(t.input.thr=0),i.close&&!this.lateClose&&t.requestClose()}};var QM={falloff:{value:.0011},horizon:{value:new ft(.6,.7,.85)}};function Fd(){Yt.fog_pars_vertex=`
#ifdef USE_FOG
  varying vec3 vFogWorld;
#endif`,Yt.fog_vertex=`
#ifdef USE_FOG
  vec4 fogW = vec4(transformed, 1.0);
  #ifdef USE_INSTANCING
    fogW = instanceMatrix * fogW;
  #endif
  vFogWorld = (modelMatrix * fogW).xyz;
#endif`,Yt.fog_pars_fragment=`
#ifdef USE_FOG
  uniform vec3 fogColor;
  varying vec3 vFogWorld;
  uniform float fogDensity;
  uniform float fogNear;
  uniform float fogFar;
#endif`,Yt.fog_fragment=`
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
#endif`}var Qr=`
vec3 applyFog(vec3 col, vec3 wp, vec3 camPos, vec3 fogCol, float dens){
  vec3 rd = wp - camPos; float dist = length(rd); float b = 0.0011;
  float k = dens * exp(-max(camPos.y, 0.0) * b); float dy = rd.y; float f;
  if (abs(dy) > 0.01) f = k * dist * (1.0 - exp(-dy * b)) / (dy * b); else f = k * dist;
  f = 1.0 - exp(-max(f + dens * dist * 0.14, 0.0));
  return mix(col, fogCol, clamp(f, 0.0, 1.0));
}`;function Zi(s,t){let e=document.createElement("canvas");return e.width=s,e.height=t,e}function Cx(s,t,e){let i=ci(e),n=new Float32Array(t*t);for(let a=0;a<n.length;a++)n[a]=i();let r=new Float32Array(s*s);for(let a=0;a<s;a++)for(let o=0;o<s;o++){let c=o/s*t,l=a/s*t,u=Math.floor(c),f=Math.floor(l),h=c-u,d=l-f,m=h*h*(3-2*h),v=d*d*(3-2*d),g=n[f%t*t+u%t],p=n[f%t*t+(u+1)%t],M=n[(f+1)%t*t+u%t],y=n[(f+1)%t*t+(u+1)%t];r[a*s+o]=(g+(p-g)*m)*(1-v)+(M+(y-M)*m)*v}return r}function fn(s,t,e=4,i=4){let n=new Float32Array(s*s),r=.5,a=0;for(let o=0;o<e;o++){let c=Cx(s,i<<o,t+o*101);for(let l=0;l<n.length;l++)n[l]+=c[l]*r;a+=r,r*=.5}for(let o=0;o<n.length;o++)n[o]/=a;return n}var xe={};function Ji(s,t={}){let e=new un(s);return e.wrapS=t.wrapS??an,e.wrapT=t.wrapT??an,e.anisotropy=t.aniso??4,t.srgb!==!1&&(e.colorSpace=Je),e.needsUpdate=!0,e}function Bd(s,t,e={}){let i="hull:"+s.id+":"+t+":"+(e.ship?"s":"b")+":"+(e.small?1:0);if(xe[i])return xe[i];let n=e.small?256:512,r=e.small?1024:2048,a=Zi(n,r),o=Zi(n,r),c=Zi(n,r),l=a.getContext("2d"),u=o.getContext("2d"),f=c.getContext("2d"),h=fn(256,7+t|0,5,4),d=l.createImageData(n,r),m=u.createImageData(n,r),v=f.createImageData(n,r),[g,p,M]=s.tint,y=1.83,x=t/y,S=ci(99+t*3),w=[];for(let _=0;_<Math.ceil(x)+2;_++)w.push([S(),S(),S()]);for(let _=0;_<r;_++){let R=(1-_/r)*t,I=Math.floor(R/y),L=R/y-I,B=Math.max(0,1-Math.abs(L-0)*y*9)+Math.max(0,1-Math.abs(L-1)*y*9),N=s.soot*Math.pow(Math.max(0,1-R/(t*.42)),1.6),O=e.ship?0:(R>6&&R<t*.48?1:0)*.6+(R>t*.52&&R<t*.8?.4:0),q=w[I]||[0,0,0];for(let W=0;W<n;W++){let nt=W/n,X=h[(_>>3&255)*256+(W>>1&255)],tt=h[(_*3&255)*256+(W*3&255)],et=0;for(let j=0;j<3;j++){let rt=Math.abs((nt-q[j]+1)%1-1e-4);et=Math.max(et,Math.max(0,1-Math.min(rt,1-rt)*n*.45))}let Ct=Math.max(B,et*.8),Tt=.86+(X-.5)*.22+(tt-.5)*.06+Math.sin(nt*6.283*3+R*.6)*.012;Tt-=Ct*.18;let ae=Ct*.25,Xt=g*Tt+ae*.08,Jt=p*Tt+ae*.02,Y=M*Tt-ae*.04,K=N*(.65+X*.7)*(.7+.3*Math.sin(nt*6.283*2+X*4));Xt=Xt*(1-K)+.05*K,Jt=Jt*(1-K)+.045*K,Y=Y*(1-K)+.04*K;let pt=s.frost*O*Math.max(0,X-.38)*1.25*(e.frostOff?0:1);Xt+=(.92-Xt)*pt*.55,Jt+=(.94-Jt)*pt*.55,Y+=(.97-Y)*pt*.55,s.pattern==="roll"&&(Math.floor(nt*4)+(R>t*.5?1:0))%2&&R>8&&R<t-6&&(Xt*=.12,Jt*=.12,Y*=.12);let Ot=Math.max(0,1-Math.abs(nt-.25)*80);Xt*=1-Ot*.25,Jt*=1-Ot*.25,Y*=1-Ot*.25;let ht=(_*n+W)*4;d.data[ht]=Math.min(255,Xt*255),d.data[ht+1]=Math.min(255,Jt*255),d.data[ht+2]=Math.min(255,Y*255),d.data[ht+3]=255;let Vt=Math.min(1,s.rough+(X-.5)*.25+K*.45+pt*.5+Ct*.15);m.data[ht]=0,m.data[ht+1]=Vt*255,m.data[ht+2]=0,m.data[ht+3]=255;let ce=.5+Ct*.45+(tt-.5)*.08;v.data[ht]=v.data[ht+1]=v.data[ht+2]=ce*255,v.data[ht+3]=255}}l.putImageData(d,0,0),u.putImageData(m,0,0),f.putImageData(v,0,0);let A={map:Ji(a),rough:Ji(o,{srgb:!1}),bump:Ji(c,{srgb:!1})};for(let _ of Object.values(A))_.wrapT=ti;return xe[i]=A,A}function Od(){if(xe.tiles)return xe.tiles;let s=Zi(512,512),t=s.getContext("2d");t.fillStyle="#141416",t.fillRect(0,0,512,512);let e=ci(5),i=16,n=i*Math.sqrt(3)/2;for(let r=-1;r<512/n+1;r++)for(let a=-1;a<512/(i*1.5)+1;a++){let o=a*i*1.5*2+r%2*i*1.5,c=r*n,l=22+e()*16|0;t.fillStyle=`rgb(${l},${l},${l+2})`,t.beginPath();for(let u=0;u<6;u++){let f=u*Math.PI/3;t.lineTo(o+Math.cos(f)*(i-1.2),c+Math.sin(f)*(i-1.2))}t.fill()}return xe.tiles=Ji(s),xe.tiles}function kd(){if(xe.grid)return xe.grid;let s=Zi(256,256),t=s.getContext("2d");t.clearRect(0,0,256,256),t.strokeStyle="#ffffff",t.lineWidth=7,t.save(),t.translate(128,128),t.rotate(Math.PI/4);for(let e=-260;e<=260;e+=30)t.beginPath(),t.moveTo(e,-260),t.lineTo(e,260),t.stroke(),t.beginPath(),t.moveTo(-260,e),t.lineTo(260,e),t.stroke();return t.restore(),t.lineWidth=14,t.strokeRect(4,4,248,248),xe.grid=Ji(s,{wrapS:ti,wrapT:ti}),xe.grid}function ta(){if(xe.ground)return xe.ground;let s=512,t=fn(s,31,6,4),e=fn(s,77,4,8),i=Zi(s,s),n=i.getContext("2d"),r=n.createImageData(s,s);for(let h=0;h<s*s;h++){let d=t[h],m=e[h],v=.75+(d-.5)*.6+(m-.5)*.25;r.data[h*4]=255*v,r.data[h*4+1]=255*v,r.data[h*4+2]=255*v,r.data[h*4+3]=255}n.putImageData(r,0,0);let a=Ji(i,{srgb:!1,aniso:8}),o=Zi(512,512),c=o.getContext("2d"),l=c.createImageData(512,512),u=fn(512,55,5,8);for(let h=0;h<512;h++)for(let d=0;d<512;d++){let m=h*512+d,v=.62+(u[m]-.5)*.18;(d%128<2||h%128<2)&&(v*=.55);let g=Math.max(0,u[m*7%(512*512)]-.72)*1.6;v-=g*.25,l.data[m*4]=255*v,l.data[m*4+1]=255*v*.99,l.data[m*4+2]=255*v*.96,l.data[m*4+3]=255}c.putImageData(l,0,0);let f=Ji(o,{aniso:8});return xe.ground={detail:a,concrete:f},xe.ground}function zd(){if(xe.wn)return xe.wn;let s=256,t=fn(s,404,5,4),e=Zi(s,s),i=e.getContext("2d"),n=i.createImageData(s,s);for(let r=0;r<s;r++)for(let a=0;a<s;a++){let o=t[r*s+(a+s-1)%s],c=t[r*s+(a+1)%s],l=t[(r+s-1)%s*s+a],u=t[(r+1)%s*s+a],f=(o-c)*6,h=(l-u)*6,d=1,m=Math.hypot(f,h,d);f/=m,h/=m,d/=m;let v=(r*s+a)*4;n.data[v]=(f*.5+.5)*255,n.data[v+1]=(h*.5+.5)*255,n.data[v+2]=(d*.5+.5)*255,n.data[v+3]=255}return i.putImageData(n,0,0),xe.wn=Ji(e,{srgb:!1}),xe.wn}function pn(s="smoke"){let t="puff:"+s;if(xe[t])return xe[t];let e=128,i=Zi(e,e),n=i.getContext("2d"),r=n.createImageData(e,e),a=fn(e,s==="cloud"?4:3,5,3);for(let o=0;o<e;o++)for(let c=0;c<e;c++){let l=(c+.5)/e*2-1,u=(o+.5)/e*2-1,f=Math.hypot(l,u),h;if(s==="glow")h=Math.pow(Math.max(0,1-f),2.2);else if(s==="spark")h=Math.pow(Math.max(0,1-f),4);else if(s==="cloud"){let m=a[o*e+c],v=Math.pow(Math.max(0,1-f),1.1)*(.55+m*.8);h=Math.min(1,Math.max(0,(v-.06)/.6)),h=h*h*(3-2*h)}else{let m=a[o*e+c];h=Math.max(0,(1-f*f)*(.35+m*1.1)-.15),h=Math.min(1,h*1.5),h*=Math.max(0,1-f)}let d=(o*e+c)*4;r.data[d]=255,r.data[d+1]=255,r.data[d+2]=255,r.data[d+3]=Math.min(255,h*255)}return n.putImageData(r,0,0),xe[t]=Ji(i,{wrapS:ti,wrapT:ti,srgb:!1}),xe[t]}function qs(){if(xe.noise)return xe.noise;let s=256,t=fn(s,1,5,4),e=fn(s,2,5,4),i=fn(s,3,4,8),n=Zi(s,s),r=n.getContext("2d"),a=r.createImageData(s,s);for(let o=0;o<s*s;o++)a.data[o*4]=t[o]*255,a.data[o*4+1]=e[o]*255,a.data[o*4+2]=i[o]*255,a.data[o*4+3]=255;return r.putImageData(a,0,0),xe.noise=Ji(n,{srgb:!1,aniso:1}),xe.noise}var Di=720,gl=`
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
}`;var vl=class{constructor(t,e,i={}){Fd(),this.renderer=t,this.scene=e,this.q=i.quality||"high",this.time=0,this.u={uSunDir:{value:new P(0,1,0)},uMoonDir:{value:new P(.3,.5,-.8).normalize()},uZenith:{value:new ft},uHorizon:{value:new ft},uSunGlow:{value:new ft},uGround:{value:new ft},uSunI:{value:1},uNight:{value:0},uCamAlt:{value:0},uTime:{value:0},uOvercast:{value:0},uCity:{value:new ft(.06,.035,.015)},uFlash:{value:0},fogColor:{value:new ft},fogDensity:{value:12e-5}},e.fog=new mr(16777215,12e-5),this.buildSky(),this.buildLights(),this.buildWater(),this.buildTerrain(),this.buildClouds(),this.buildRain(),this.flash=0,this.nextBolt=5,this.rain=!1}buildSky(){let t=new re({uniforms:this.u,depthWrite:!1,depthTest:!1,side:Ze,vertexShader:"varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; gl_Position.z = gl_Position.w * 0.99999; }",fragmentShader:gl+"varying vec3 vW; void main(){ vec3 d = normalize(vW - cameraPosition); gl_FragColor = vec4(skyColor(d, true), 1.0); }"});this.skyMat=t,this.sky=new mt(new _i(1e3,48,24),t),this.sky.frustumCulled=!1,this.sky.renderOrder=-10,this.scene.add(this.sky),this.envScene=new on;let e=new mt(new _i(100,32,16),new re({uniforms:this.u,side:Ze,depthWrite:!1,vertexShader:"varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:gl+"varying vec3 vW; void main(){ vec3 d = normalize(vW - cameraPosition); vec3 c = skyColor(d, false); c += vec3(1.0,0.9,0.75) * pow(max(dot(d,uSunDir),0.0), 900.0) * uSunI * 30.0 * (1.0-uOvercast); gl_FragColor = vec4(c, 1.0); }"}));this.envScene.add(e),this.pmrem=new Vs(this.renderer)}buildLights(){this.sun=new Br(16777215,3),this.sun.position.set(100,200,100),this.sun.target.position.set(0,60,-20),this.scene.add(this.sun,this.sun.target);let t=this.q==="high"?2048:1024;if(this.q!=="low"){this.sun.castShadow=!0,this.sun.shadow.mapSize.set(t,t);let e=this.sun.shadow.camera;e.left=-110,e.right=110,e.top=110,e.bottom=-110,e.near=10,e.far=900,this.sun.shadow.bias=-4e-4,this.sun.shadow.normalBias=.6}this.hemi=new Nr(12374783,5918784,.8),this.scene.add(this.hemi)}buildWater(){let t=zd();this.waterMat=new re({uniforms:Object.assign({},this.u,{uNormal:{value:t},uSpec:{value:new ft(1,1,1)},uDeep:{value:new ft(.012,.05,.07)},uWave:{value:1},uLightPos:{value:new P(0,-1e3,0)},uLightCol:{value:new ft(0,0,0)},uCoast:{value:Di}}),vertexShader:"varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:gl+Qr+`
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
          // Brandung
          float sx = vW.x - uCoast;
          float wav = texture2D(uNormal, vW.xz * 0.02 + vec2(uTime * 0.03, 0.0)).r;
          float foam = smoothstep(55.0, 0.0, sx) * smoothstep(-2.0, 6.0, sx) * smoothstep(0.35, 0.75, wav + 0.25 * sin(sx * 0.25 - uTime * 1.3));
          col = mix(col, vec3(0.75, 0.8, 0.82) * (0.25 + 0.75 * max(uSunDir.y + 0.2, 0.05)) * (1.0 - uNight * 0.85), foam * 0.75);
          col = applyFog(col, vW, cameraPosition, fogColor, fogDensity);
          gl_FragColor = vec4(col, 1.0);
        }`});let e=new Le(1,1,1,1);e.rotateX(-Math.PI/2);let i=new mt(e,this.waterMat);i.scale.set(16e4,1,32e4),i.position.set(80600,0,0),i.frustumCulled=!1,i.renderOrder=-5,this.scene.add(i),this.water=i}height(t,e){let i=2,n=Math.sin(t*.0021+e*.0013)*.6+Math.sin(t*.011-e*.007)*.35+Math.sin(t*.043+e*.031)*.15;i+=n;let r=Di-t;i+=Math.exp(-Math.pow((r-70)/30,2))*(2.5+Math.sin(e*.02)*1.2),r<60&&(i=Math.min(i,-2+r/60*4.6));let a=Math.sin(t*.0011+1.3)*Math.sin(e*.0017+.4);e<-1100&&(i-=Math.max(0,(-e-1100)/300)*Math.max(0,a+.35)*2.2);let o=Math.hypot(t+30,e+40);return i=be.lerp(1.6,i,be.smoothstep(o,160,320)),i}buildTerrain(){let{detail:t}=ta(),e=16e3,i=18e3,n=170,r=150,a=new Le(e,i,n,r);a.rotateX(-Math.PI/2),a.translate(Di+300-e/2,0,0);let o=a.attributes.position,c=new Float32Array(o.count*3),l=new ft(.28,.27,.17),u=new ft(.38,.33,.21),f=new ft(.78,.7,.55),h=new ft(.45,.4,.32),d=new ft(.42,.38,.3),m=new ft(.72,.7,.64),v=new ft;for(let T=0;T<o.count;T++){let R=o.getX(T),I=o.getZ(T),L=(R-(Di+300-e))/e;R=Di+300-e*Math.pow(1-L,2.2),o.setX(T,R);let B=I/(i/2);I=Math.sign(B)*Math.pow(Math.abs(B),1.8)*i/2,o.setZ(T,I);let N=this.height(R,I);o.setY(T,N);let O=Di-R,q=.5+.5*Math.sin(R*.013+Math.sin(I*.009)*3)*Math.sin(I*.017);v.copy(l).lerp(u,q),N<1.2&&v.lerp(m,be.clamp((1.2-N)*.6,0,.7)),N<.6&&v.copy(d),O<110&&v.lerp(f,be.smoothstep(110-O,0,45)),O<14&&v.lerp(h,be.smoothstep(14-O,0,14)),Math.abs(I-95-Math.sin(R*.002)*30)<5&&O>20&&v.lerp(new ft(.2,.2,.21),.85),c[T*3]=v.r,c[T*3+1]=v.g,c[T*3+2]=v.b}a.setAttribute("color",new Be(c,3)),a.computeVertexNormals(),t.repeat.set(220,220);let g=new oe({vertexColors:!0,map:t,roughness:.95,metalness:0}),p=new mt(a,g);p.receiveShadow=!0,this.scene.add(p),this.terrain=p;let M=new Le(e,i*.5,1,1);M.rotateX(-Math.PI/2);let y=new mt(M,this.waterMat);y.position.set(Di-e/2-100,-.05,-i*.25-600),y.renderOrder=-5,this.scene.add(y);let x=new oe({color:new ft(.31,.285,.18),map:ta().detail,roughness:.95,metalness:0}),S=new Le(1,1);S.rotateX(-Math.PI/2);let w=new mt(S,x);w.scale.set(15e4,1,32e4),w.position.set(Di+300-e-75e3,.6,0);let A=new mt(S,x);A.scale.set(e-100,1,15e4),A.position.set(Di+300-e/2-50,.6,-i/2-75e3);let _=A.clone();_.position.z=i/2+75e3;for(let T of[w,A,_])T.frustumCulled=!1,this.scene.add(T);this.farLand=x}buildClouds(){let t=this.q==="low"?260:620,e=new Gi,i=new Le(1,1);e.index=i.index,e.attributes.position=i.attributes.position,e.attributes.uv=i.attributes.uv,this.cloudData=new Float32Array(t*4),this.cloudExtra=new Float32Array(t*4),e.setAttribute("aCloud",new Oe(this.cloudData,4)),e.setAttribute("aExtra",new Oe(this.cloudExtra,4)),e.instanceCount=0,this.cloudMat=new re({uniforms:Object.assign({},this.u,{uTex:{value:pn("cloud")},uLit:{value:new ft(1,1,1)},uShade:{value:new ft(.5,.55,.65)}}),transparent:!0,depthWrite:!1,vertexShader:`attribute vec4 aCloud; attribute vec4 aExtra; varying vec2 vUv; varying float vShade; varying vec3 vW; varying float vA; varying float vRot;
        void main(){ vUv = uv; vec3 c = aCloud.xyz; float s = aCloud.w;
          vec3 right = vec3(viewMatrix[0][0], viewMatrix[1][0], viewMatrix[2][0]); vec3 up = vec3(viewMatrix[0][1], viewMatrix[1][1], viewMatrix[2][1]);
          float r = aExtra.y; vec2 p = vec2(position.x * cos(r) - position.y * sin(r), position.x * sin(r) + position.y * cos(r));
          vec3 w = c + (right * p.x + up * p.y * 0.62) * s; vW = w; vShade = aExtra.x; vA = aExtra.z;
          float dc = length(c - cameraPosition); vA *= smoothstep(s * 0.4, s * 1.4, dc);
          gl_Position = projectionMatrix * viewMatrix * vec4(w, 1.0); }`,fragmentShader:gl+Qr+`uniform sampler2D uTex; uniform vec3 uLit; uniform vec3 uShade; uniform vec3 fogColor; uniform float fogDensity; varying vec2 vUv; varying float vShade; varying vec3 vW; varying float vA;
        void main(){ vec4 t = texture2D(uTex, vUv); float a = t.a * vA; if (a < 0.01) discard;
          float lit = clamp(vShade + (vUv.y - 0.5) * 0.6, 0.0, 1.0);
          vec3 col = mix(uShade, uLit, lit) + vec3(0.8,0.85,1.0) * uFlash * 2.0;
          col = applyFog(col, vW, cameraPosition, fogColor, fogDensity * 0.6);
          gl_FragColor = vec4(col, a); }`}),this.clouds=new mt(e,this.cloudMat),this.clouds.frustumCulled=!1,this.clouds.renderOrder=5,this.scene.add(this.clouds),this.cloudN=t}layoutClouds(t,e){let i=ci(e),n=0,r=this.cloudN,a=this.cloudData,o=this.cloudExtra,c=(h,d,m,v,g,p)=>{n>=r||(a[n*4]=h,a[n*4+1]=d,a[n*4+2]=m,a[n*4+3]=v,o[n*4]=g,o[n*4+1]=i()*6.28,o[n*4+2]=p,n++)},l=(h,d,m,v,g,p=1)=>{for(let M=0;M<g;M++){let y=(i()-.5)*v*1.6,x=(i()-.5)*v*1.6,S=(i()-.3)*v*.35,w=v*(.5+i()*.6);c(h+y,d+S+w*.15,m+x,w,.35+(S/v+.3)*1.2,p)}},u={day:[26,1400],afternoon:[34,1700],dusk:[26,2200],night:[14,1800],dawn:[20,900],storm:[70,650]}[t]||[20,1500],f=Math.floor(r*.8/u[0]);for(let h=0;h<u[0];h++){let d=i()*Math.PI*2,m=2500+Math.pow(i(),.7)*38e3,v=Math.cos(d)*m+3e3,g=Math.sin(d)*m-8e3*i(),p=(t==="storm"?900:380)+i()*600;l(v,u[1]+i()*400,g,p,Math.max(4,f-2+(i()*4|0)),t==="storm"?.95:.9)}if(t==="dawn")for(let h=0;h<70&&n<r;h++)c((i()-.6)*9e3,40+i()*90,(i()-.5)*9e3-2e3,500+i()*600,.7,.35);if(t==="storm")for(let h=0;h<60&&n<r;h++)c((i()-.5)*3e4,900+i()*300,(i()-.5)*3e4,2500,.15,.8);this.clouds.geometry.instanceCount=n,this.clouds.geometry.attributes.aCloud.needsUpdate=!0,this.clouds.geometry.attributes.aExtra.needsUpdate=!0}buildRain(){let t=this.q==="low"?1500:4e3,e=new Gi,i=new Le(1,1);e.index=i.index,e.attributes.position=i.attributes.position;let n=new Float32Array(t*4),r=ci(3);for(let a=0;a<t;a++)n[a*4]=r(),n[a*4+1]=r(),n[a*4+2]=r(),n[a*4+3]=.6+r()*.8;e.setAttribute("aR",new Oe(n,4)),e.instanceCount=t,this.rainMat=new re({uniforms:{uTime:this.u.uTime,uBox:{value:60},uWind:{value:new at(-6,0)},uCol:{value:new ft(.6,.65,.7)},uVel:{value:new P},uFlash:this.u.uFlash},transparent:!0,depthWrite:!1,blending:Ve,vertexShader:`attribute vec4 aR; uniform float uTime; uniform float uBox; uniform vec2 uWind; uniform vec3 uVel; varying float vA; varying vec2 vUv;
        void main(){ vUv = position.xy + 0.5; float sp = 22.0 * aR.w; vec3 vel = vec3(uWind.x, -sp, uWind.y) - uVel * 0.5;
          vec3 p = vec3(aR.x, aR.y, aR.z) * uBox * 2.0 + vel * uTime; vec3 cam = cameraPosition;
          p = mod(p - cam + uBox, uBox * 2.0) - uBox + cam;
          vec3 dir = normalize(vel); vec3 toCam = normalize(cameraPosition - p); vec3 side = normalize(cross(dir, toCam));
          float len = 0.9 + length(vel) * 0.03; vec3 w = p + side * position.x * 0.03 + dir * position.y * len;
          vA = 0.18 * smoothstep(uBox, uBox * 0.3, length(p - cam)) * step(0.0, p.y);
          gl_Position = projectionMatrix * viewMatrix * vec4(w, 1.0); }`,fragmentShader:"uniform vec3 uCol; uniform float uFlash; varying float vA; varying vec2 vUv; void main(){ float a = vA * (1.0 - abs(vUv.x - 0.5) * 2.0); gl_FragColor = vec4(uCol * (1.0 + uFlash * 6.0) * a, 1.0); }"}),this.rainMesh=new mt(e,this.rainMat),this.rainMesh.frustumCulled=!1,this.rainMesh.visible=!1,this.rainMesh.renderOrder=8,this.scene.add(this.rainMesh)}setTod(t,e={}){let i=ss[t]||ss.day;this.todKey=t,this.T=i;let n=i.sunEl*Math.PI/180,r=i.sunAz*Math.PI/180,a=new P(Math.sin(r)*Math.cos(n),Math.sin(n),-Math.cos(r)*Math.cos(n)).normalize();this.u.uSunDir.value.copy(a);let o=t==="night"?1:0;this.u.uNight.value=o;let c=t==="storm"?.9:t==="dawn"?.35:0;this.u.uOvercast.value=c;let l=(A,_,T)=>new ft(A,_,T),u,f,h,d,m,v,g,p,M,y,x,S,w;switch(t){case"afternoon":u=l(.1,.26,.62),f=l(.62,.7,.8),h=l(.6,.45,.25),d=l(.36,.42,.48),m=l(1,.9,.78),v=3.4,g=l(.45,.56,.75),p=l(.32,.28,.2),M=1.2,y=11e-5,S=l(1.25,1.12,.98),w=l(.45,.5,.6);break;case"dusk":u=l(.05,.08,.2),f=l(.55,.3,.2),h=l(1.5,.55,.18),d=l(.14,.11,.13),m=l(1,.5,.22),v=2,g=l(.25,.25,.4),p=l(.2,.12,.08),M=.9,y=13e-5,S=l(1.4,.65,.35),w=l(.18,.15,.22);break;case"night":u=l(.002,.004,.011),f=l(.012,.016,.026),h=l(0,0,0),d=l(.006,.007,.01),m=l(.5,.6,.85),v=.1,g=l(.1,.13,.22),p=l(.04,.03,.03),M=.35,y=1e-4,S=l(.05,.055,.075),w=l(.015,.016,.022);break;case"dawn":u=l(.25,.33,.48),f=l(.82,.74,.66),h=l(1,.6,.3),d=l(.6,.58,.55),m=l(1,.75,.5),v=1.6,g=l(.6,.6,.65),p=l(.35,.32,.28),M=1.2,y=.0011,S=l(1.15,.98,.85),w=l(.6,.6,.64);break;case"storm":u=l(.13,.145,.16),f=l(.3,.32,.34),h=l(.05,.05,.05),d=l(.2,.21,.22),m=l(.7,.75,.8),v=.7,g=l(.42,.46,.5),p=l(.2,.2,.18),M=1.1,y=42e-5,S=l(.42,.44,.47),w=l(.17,.18,.2);break;default:u=l(.09,.25,.65),f=l(.6,.72,.86),h=l(.45,.4,.3),d=l(.36,.44,.52),m=l(1,.96,.9),v=3.8,g=l(.5,.62,.82),p=l(.33,.3,.22),M=1.25,y=1e-4,S=l(1.3,1.28,1.25),w=l(.5,.56,.68)}if(e.fog&&(y=Math.max(y,.0011)),this.u.uZenith.value.copy(u),this.u.uHorizon.value.copy(f),this.u.uSunGlow.value.copy(h),this.u.uGround.value.copy(d),this.u.uSunI.value=t==="night"?0:1,x=f.clone().lerp(d,.3),this.u.fogColor.value.copy(x),this.u.fogDensity.value=y,this.scene.fog.color.copy(x),this.scene.fog.density=y,this.baseFog=y,this.sun.color.copy(m),this.sun.intensity=v,this.baseSunI=v,t==="night"){let A=this.u.uMoonDir.value;this.sun.position.copy(A).multiplyScalar(500)}else this.sun.position.copy(a).multiplyScalar(500);this.sun.position.add(this.sun.target.position),this.sun.castShadow=this.q!=="low"&&t!=="night"&&t!=="storm"&&t!=="dawn",this.hemi.color.copy(g),this.hemi.groundColor.copy(p),this.hemi.intensity=M,this.baseHemi=M,this.cloudMat.uniforms.uLit.value.copy(S),this.cloudMat.uniforms.uShade.value.copy(w),this.waterMat.uniforms.uWave.value=t==="storm"?2.2:t==="dawn"?.5:1,this.farLand.color.setRGB(.25,.24,.17).multiplyScalar(t==="night"?.15:1),this.layoutClouds(t,(e.seed||1)*7+3),this.rain=!!e.rain||t==="storm",this.rainMesh.visible=this.rain,this.exposure=i.exposure,this.envRT&&this.envRT.dispose(),this.u.uCamAlt.value=0,this.envRT=this.pmrem.fromScene(this.envScene,0,.1,1e3),this.scene.environment=this.envRT.texture,this.scene.environmentIntensity=t==="night"?.25:t==="dusk"?.7:1}update(t,e,i={}){this.time+=t,this.u.uTime.value=this.time,this.sky.position.copy(e.position),this.u.uCamAlt.value=e.position.y,this.flash=Math.max(0,this.flash-t*6);let n=!1;this.todKey==="storm"&&i.lightning!==!1&&(this.nextBolt-=t,this.nextBolt<=0&&(this.flash=1,this.nextBolt=4+Math.random()*9,n=!0),this.flash>0&&Math.random()<.15&&(this.flash=Math.max(this.flash,.6))),this.u.uFlash.value=this.flash*.35,this.hemi.intensity=this.baseHemi+this.flash*2.5;let r=e.position.y,a=this.baseFog*(1/(1+Math.max(0,r-200)/2500));if(this.scene.fog.density=a,this.u.fogDensity.value=a,i.velocity&&this.rainMat.uniforms.uVel.value.copy(i.velocity),i.wind!==void 0&&this.rainMat.uniforms.uWind.value.set(i.wind,0),i.light&&(this.waterMat.uniforms.uLightPos.value.copy(i.light.pos),this.waterMat.uniforms.uLightCol.value.copy(i.light.col)),i.focus){let o=i.focus,c=this.sun.target.position;c.set(be.clamp(o.x,-400,400)*.5,be.clamp(o.y,0,300)*.5+40,-20);let l=this.todKey==="night"?this.u.uMoonDir.value:this.u.uSunDir.value;this.sun.position.copy(l).multiplyScalar(500).add(c)}return n}};function oi(s,t=!1){let e=s[0].index!==null,i=new Set(Object.keys(s[0].attributes)),n=new Set(Object.keys(s[0].morphAttributes)),r={},a={},o=s[0].morphTargetsRelative,c=new ve,l=0;for(let u=0;u<s.length;++u){let f=s[u],h=0;if(e!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in f.attributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(f.attributes[d]),h++}if(h!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in f.morphAttributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;a[d]===void 0&&(a[d]=[]),a[d].push(f.morphAttributes[d])}if(t){let d;if(e)d=f.index.count;else if(f.attributes.position!==void 0)d=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,u),l+=d}}if(e){let u=0,f=[];for(let h=0;h<s.length;++h){let d=s[h].index;for(let m=0;m<d.count;++m)f.push(d.getX(m)+u);u+=s[h].attributes.position.count}c.setIndex(f)}for(let u in r){let f=Hd(r[u]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,f)}for(let u in a){let f=a[u][0].length;if(f!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let h=0;h<f;++h){let d=[];for(let v=0;v<a[u].length;++v)d.push(a[u][v][h]);let m=Hd(d);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(m)}}}return c}function Hd(s){let t,e,i,n=-1,r=0;for(let l=0;l<s.length;++l){let u=s[l];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(n===-1&&(n=u.gpuType),n!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*e}let a=new t(r),o=new Be(a,e,i),c=0;for(let l=0;l<s.length;++l){let u=s[l];if(u.isInterleavedBufferAttribute){let f=c/e;for(let h=0,d=u.count;h<d;h++)for(let m=0;m<e;m++){let v=u.getComponent(h,m);o.setComponent(h+f,m,v)}}else a.set(u.array,c);c+=u.count*e}return n!==void 0&&(o.gpuType=n),o}var Ys=new se,ea=new ri,Mh=new P,xl=new P,bh=new P(0,1,0),Si=new P,_l=class{constructor(){this.list=[]}box(t,e,i,n,r,a){Ys.compose(xl.set(t,e,i),ea.identity(),Mh.set(n,r,a)),this.list.push(Ys.clone())}rod(t,e,i){Si.subVectors(e,t);let n=Si.length();Si.divideScalar(n),ea.setFromUnitVectors(bh,Si),xl.addVectors(t,e).multiplyScalar(.5),Ys.compose(xl,ea,Mh.set(i,n,i)),this.list.push(Ys.clone())}mesh(t,e){let i=new hn(e||new Ce(1,1,1),t,this.list.length);return this.list.forEach((n,r)=>i.setMatrixAt(r,n)),i.instanceMatrix.needsUpdate=!0,i.castShadow=!0,i.receiveShadow=!0,i.computeBoundingSphere(),i}};function Kt(s,t,e,i,n,r,a=0,o=0,c=0){let l=new Ce(s,t,e);return(a||o||c)&&l.applyMatrix4(new se().makeRotationFromEuler(new li(a,o,c))),l.translate(i,n,r),l}function Ix(s,t,e){let i=new Ce(e,1,e);Si.subVectors(t,s);let n=Si.length();return Si.divideScalar(n),ea.setFromUnitVectors(bh,Si),Ys.compose(xl.addVectors(s,t).multiplyScalar(.5),ea,Mh.set(1,n,1)),i.applyMatrix4(Ys),i}function Fn(s,t,e,i,n,r,a=16,o=!1){let c=new Ie(s,t,e,a,1,o);return c.translate(i,n,r),c}var pe=(s,t,e)=>new P(s,t,e),yl=class{constructor(t,e={}){this.scene=t,this.q=e.quality||"high",this.group=new ze,t.add(this.group),this.steel=new oe({color:3882563,metalness:.55,roughness:.58}),this.steelLight=new oe({color:7041143,metalness:.6,roughness:.45}),this.rail=new oe({color:12106946,metalness:.9,roughness:.25}),this.black=new oe({color:1316120,metalness:.3,roughness:.7}),this.white=new oe({color:14211284,metalness:.1,roughness:.6}),this.yellow=new oe({color:13214247,metalness:.2,roughness:.5});let{concrete:i}=ta();i.repeat.set(10,10),this.concrete=new oe({map:i,color:13223357,roughness:.9,metalness:0,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),this.lightsOn=!1,this.buildPad(),this.buildTower(),this.buildArms(),this.buildMount(),this.buildFarm(),this.buildFar(),this.buildLights()}buildPad(){let t=new Vi(95,48);t.rotateX(-Math.PI/2);let e=new mt(t,this.concrete);e.position.set(-10,1.62,-20),e.receiveShadow=!0,this.group.add(e);let i=new Vi(26,32);i.rotateX(-Math.PI/2);let n=new mt(i,new oe({color:1776153,roughness:1,transparent:!0,opacity:.7,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4,depthWrite:!1}));n.position.set(0,1.63,0),this.group.add(n);let r=new Le(200,12);r.rotateX(-Math.PI/2);let a=new mt(r,this.concrete);a.position.set(-150,1.61,40),a.receiveShadow=!0,this.group.add(a)}buildTower(){let t=new _l,e=Rt,i=e.width/2-.7,n=e.cz,r=9,a=Math.round(e.height/r),o=[[-i,-i],[i,-i],[i,i],[-i,i]];for(let d=0;d<a;d++){let m=d*r,v=m+r;for(let[g,p]of o)t.box(g,(m+v)/2,n+p,1.5,r,1.5);for(let g=0;g<4;g++){let[p,M]=o[g],[y,x]=o[(g+1)%4];t.rod(pe(p,v,n+M),pe(y,v,n+x),.9),t.rod(pe(p,m+r/2,n+M),pe(y,m+r/2,n+x),.45),t.rod(pe(p,m,n+M),pe(y,v,n+x),.5),t.rod(pe(y,m,n+x),pe(p,v,n+M),.5)}t.rod(pe(-i,v,n-i),pe(i,v,n+i),.35)}t.box(0,e.height/2,n+2,4,e.height,.3),t.box(-3,e.height/2,n-3,.6,e.height,.6),t.box(3,e.height/2,n-3,.6,e.height,.6);for(let d of[-e.pivotX,e.pivotX])t.box(d,e.height/2+4,e.front+.4,.9,e.height-8,.9);t.box(0,e.height+.5,n,e.width+1.5,1,e.width+1.5),this.tower=t.mesh(this.steel),this.group.add(this.tower);let c=oi([Kt(10,6,12,0,e.height+4,n-1),Kt(4,3,4,5,e.height+8,n),Fn(.4,.15,18,-7,e.height+10,n-7,8),Fn(.3,.1,12,7,e.height+7,n+7,8),Kt(16,.8,1.2,0,e.height+2,n+9),Kt(1,6,1,-7.5,e.height+4,n+9),Kt(1,6,1,7.5,e.height+4,n+9)]),l=new mt(c,this.steelLight);l.castShadow=!0,this.group.add(l);let u=new ze,f=oi([Kt(3,3,22,0,0,11),Kt(3.6,4.4,3,0,0,22),Fn(.5,.5,22,1.1,-1.8,11,8).rotateX(Math.PI/2)]),h=new mt(f,this.steel);h.castShadow=!0,u.add(h),u.position.set(-7.5,96,e.front),u.rotation.y=-1.25,this.group.add(u)}armGeometry(){let t=Rt,e=t.armLen,i=t.armHalf*2,n=t.armTall,r=[];r.push(Kt(i,.7,e,0,-.35,e/2),Kt(i,.6,e,0,-n+.3,e/2));let a=12;for(let o of[-i/2+.15,i/2-.15]){for(let c=0;c<=a;c++){let l=c/a*e;r.push(Kt(.3,n,.35,o,-n/2,l))}for(let c=0;c<a;c++){let l=c/a*e,u=(c+1)/a*e;r.push(Ix(pe(o,-n+.3,l),pe(o,-.4,u),.22))}}return r.push(Kt(i+.6,n+1.4,3,0,-n/2,1.5)),r.push(Kt(i+.2,n*.8,.8,0,-n*.45,e-.4)),oi(r)}railGeometry(t){let e=Rt,i=e.armLen,n=e.armHalf*2;return oi([Kt(.7,.35,i*.55,-t*(n/2-.35),.17,i*.47),Kt(.4,.5,.6,-t*(n/2-.2),.1,i*.2),Kt(.4,.5,.6,-t*(n/2-.2),.1,i*.75)])}buildArms(){let t=Rt,e=this.armGeometry();this.arms=[];let i=oi([Kt(t.width+3,2.2,1.8,0,1,t.front+.6),Kt(t.width+3,1.6,1.8,0,-6,t.front+.6),Kt(1.8,9,t.width+2,-(t.width/2+1.2),-2.5,t.cz),Kt(1.8,9,t.width+2,t.width/2+1.2,-2.5,t.cz),Kt(t.width+3,1.6,1.6,0,1,t.cz-t.width/2-.6),Fn(1.1,1.1,t.armTall+3,-t.pivotX,-1.5,t.pivotZ,12),Fn(1.1,1.1,t.armTall+3,t.pivotX,-1.5,t.pivotZ,12),Kt(4,3,4,-(t.width/2+2.5),-1,t.cz+3),Kt(4,3,4,t.width/2+2.5,-1,t.cz+3)]);this.carriage=new mt(i,this.steelLight),this.carriage.castShadow=!0,this.carriage.position.y=t.armH,this.group.add(this.carriage);for(let n of[1,-1]){let r=new ze;r.position.set(n*t.pivotX,t.armH,t.pivotZ);let a=new mt(e,this.steelLight);a.castShadow=!0,a.receiveShadow=!0,r.add(a);let o=new mt(this.railGeometry(n),this.rail);o.castShadow=!0,r.add(o);let c=new mt(new Ce(t.armHalf*2+.25,.6,2),this.yellow);c.position.set(0,-t.armTall+.3,t.armLen-1.5),r.add(c);let l=new mt(new Ie(.45,.45,1,10),this.steel),u=new mt(new Ie(.25,.25,1,8),this.rail);this.group.add(l,u),l.castShadow=!0,this.group.add(r),this.arms.push({sgn:n,piv:r,cylA:l,cylB:u,base:pe(n*(t.width/2+2.5),t.armH-1.5,t.cz+4)})}}buildMount(){let t=Rt,e=new ze,i=[];for(let f=0;f<6;f++){let h=f/6*Math.PI*2+Math.PI/6;i.push(Kt(3.2,20,3.2,Math.cos(h)*12,10+1.6,Math.sin(h)*12,0,-h,0))}let n=new Ie(15,15,5,36,1,!0);n.translate(0,23.5,0),i.push(n);let r=new Ie(6.4,6.4,5,36,1,!0);r.translate(0,23.5,0),i.push(r);let a=new Ii(6.4,15,36,1);a.rotateX(-Math.PI/2),a.translate(0,t.mountTop,0),i.push(a);let o=a.clone();o.translate(0,-5,0),o.rotateX(0),i.push(o);for(let f=0;f<20;f++){let h=f/20*Math.PI*2;i.push(Kt(.8,1.6,1.4,Math.cos(h)*6.9,t.mountTop+.8,Math.sin(h)*6.9,0,-h,0))}i.push(Kt(3,3,9,-10,t.mountTop-3,-9,0,.6,0));let c=new mt(oi(i.map(f=>f.index?f.toNonIndexed():f)),this.steel);c.castShadow=!0,c.receiveShadow=!0,c.material=this.steel,e.add(c);let l=new mt(new Ie(9,11,1.4,32),this.black);l.position.set(0,2.3,0),l.receiveShadow=!0,e.add(l);let u=new mt(new Ce(40,1.4,40),this.concrete);u.position.set(0,1.9,0),u.receiveShadow=!0,e.add(u),this.group.add(e),this.mount=e}buildFarm(){let t=ci(42),e=[],i=[],n=[],r=[];for(let v=0;v<8;v++){let g=-150-v%4*16,p=-70+Math.floor(v/4)*18,M=30+t()*10;e.push(Fn(6,6,M,g,M/2+1.6,p,24));let y=new _i(6,20,8,0,Math.PI*2,0,Math.PI/2);y.translate(g,M+1.6,p),e.push(y)}for(let v=0;v<10;v++){let g=new Ie(3,3,26,18);g.rotateX(Math.PI/2),g.translate(-230-v%5*9,5.5,-30+Math.floor(v/5)*32),i.push(g)}n.push(Kt(140,1.2,3,-80,4,-45),Kt(1,4,1,-30,2,-45),Kt(1,4,1,-70,2,-45),Kt(1,4,1,-110,2,-45),Kt(1,4,1,-140,2,-45)),n.push(Fn(.7,.7,140,-80,5.2,-44,8).rotateZ(Math.PI/2)),r.push(Kt(26,9,18,-110,6,60),Kt(14,6,10,-60,4.6,75),Kt(40,14,22,-300,8.6,70),Kt(12,22,12,-190,12.6,30));let a=new mt(oi(e.map(v=>v.toNonIndexed())),new oe({color:13158857,metalness:.65,roughness:.32})),o=new mt(oi(i.map(v=>v.toNonIndexed())),this.white),c=new mt(oi(n.map(v=>v.toNonIndexed())),this.steel),l=new mt(oi(r.map(v=>v.toNonIndexed())),new oe({color:11120051,metalness:.3,roughness:.6}));for(let v of[a,o,c,l])v.castShadow=!0,v.receiveShadow=!0,this.group.add(v);let u=new _l,f=-40,h=-420,d=9;for(let v=0;v<16;v++){let g=v*9;for(let[p,M]of[[-d,-d],[d,-d],[d,d],[-d,d]])u.box(h+p,g+4.5,f+M,1.4,9,1.4);u.box(h,g+9,f-d,d*2,.8,.8),u.box(h,g+9,f+d,d*2,.8,.8),u.rod(pe(h-d,g,f+d),pe(h+d,g+9,f+d),.5),u.rod(pe(h-d,g,f-d),pe(h+d,g+9,f-d),.5),u.rod(pe(h-d,g,f-d),pe(h-d,g+9,f+d),.5),u.rod(pe(h+d,g,f-d),pe(h+d,g+9,f+d),.5)}u.box(h-6,110,f+26,2,3.6,34),u.box(h+6,110,f+26,2,3.6,34),this.group.add(u.mesh(this.steel));let m=new mt(new Vi(60,32).rotateX(-Math.PI/2),this.concrete);m.position.set(h,1.6,f+20),this.group.add(m)}buildFar(){let t=[];t.push(Kt(90,82,60,-2600,41,-200),Kt(140,30,80,-2780,15,-120),Kt(60,60,40,-2480,30,-60),Kt(220,22,120,-3e3,11,40),Kt(30,70,30,-2700,35,40));let e=ci(9);for(let n=0;n<40;n++){let r=10+e()*30,a=4+e()*10;t.push(Kt(r,a,r*(.5+e()),-2200-e()*1600,a/2+1,-400+e()*800))}let i=new mt(oi(t.map(n=>n.toNonIndexed())),new oe({color:9278104,metalness:.4,roughness:.55}));i.receiveShadow=!1,this.group.add(i)}buildLights(){let t=Rt,e=[],i=[],n=[],r=[],a=(m,v,g,p,M,y=0)=>{e.push(m,v,g),i.push(p[0],p[1],p[2]),n.push(M),r.push(y)},o=[1,.82,.55],c=[.85,.9,1],l=[1,.08,.04];for(let m=1;m<16;m++)a(-10.6,m*9+.5,t.cz+10.6,m%3?o:c,1.4),a(10.6,m*9+.5,t.cz+10.6,m%3?o:c,1.4),a(-10.6,m*9+.5,t.cz-10.6,o,1),a(10.6,m*9+.5,t.cz-10.6,o,1);a(-7,t.height+19,t.cz-7,l,3.5,1),a(7,t.height+13,t.cz+7,l,3,1),a(-10.6,75,t.cz+10.6,l,2.4,1),a(10.6,75,t.cz+10.6,l,2.4,1),a(-429,146,-49,l,3,1),this.masts=[pe(-70,0,60),pe(70,0,60),pe(-80,0,-80),pe(80,0,-60)];let u=[];for(let m of this.masts){u.push(Fn(.5,.8,40,m.x,20+1.6,m.z,8),Kt(5,2.4,1,m.x,41.6,m.z));for(let v=-2;v<=2;v++)a(m.x+v,41.6,m.z+.8*Math.sign(-m.z),c,2.4)}let f=new mt(oi(u.map(m=>m.toNonIndexed())),this.steel);f.castShadow=!0,this.group.add(f);let h=ci(77);for(let m=0;m<90;m++)a(-2100-h()*1800,6+h()*30,-400+h()*800,o,6+h()*5);for(let m=0;m<30;m++)a(-150-h()*250,6+h()*20,-90+h()*180,o,2.5);let d=new ve;d.setAttribute("position",new Qt(e,3)),d.setAttribute("color",new Qt(i,3)),d.setAttribute("size",new Qt(n,1)),d.setAttribute("blink",new Qt(r,1)),this.lampMat=new re({uniforms:{uTex:{value:pn("glow")},uTime:{value:0},uOn:{value:0},uScale:{value:600}},transparent:!0,depthWrite:!1,blending:Ve,vertexShader:`attribute float size; attribute float blink; attribute vec3 color; uniform float uTime; uniform float uOn; uniform float uScale; varying vec3 vC;
        void main(){ vec4 mv = modelViewMatrix * vec4(position, 1.0); float b = blink > 0.5 ? step(0.5, fract(uTime * 0.75)) : 1.0;
          vC = color * b * (blink > 0.5 ? 1.0 : uOn) * 3.0; gl_PointSize = clamp(size * uScale / -mv.z, 1.5, 64.0); gl_Position = projectionMatrix * mv; }`,fragmentShader:"uniform sampler2D uTex; varying vec3 vC; void main(){ float a = texture2D(uTex, gl_PointCoord).a; gl_FragColor = vec4(vC * a, 1.0); }"}),this.lamps=new Zn(d,this.lampMat),this.lamps.frustumCulled=!1,this.lamps.renderOrder=9,this.group.add(this.lamps),this.spots=[];for(let m of[pe(-70,42,60),pe(70,42,60)]){let v=new Fr(14674175,0,420,.42,.6,1.2);v.position.copy(m),v.target.position.set(0,110,-18),this.group.add(v,v.target),this.spots.push(v)}}setNight(t,e=!1){this.lightsOn=t||e,this.lampMat.uniforms.uOn.value=t?1:e?.6:0;for(let i of this.spots)i.intensity=t?1400:e?350:0;this.steel.emissive.setRGB(0,0,0),this.steelLight.emissive.setRGB(0,0,0)}update(t,e,i,n){let r=Rt;this.lampMat.uniforms.uTime.value=i,this.lampMat.uniforms.uScale.value=(this.pxH||window.innerHeight||800)*.9/Math.tan(n.fov*Math.PI/180/2)/2;let a=t?t.arms.y:r.armH,o=t?t.arms.phi:r.openYaw;this.carriage.position.y=a;for(let c of this.arms){c.piv.position.y=a,c.piv.rotation.y=c.sgn*o;let l=9,u=c.piv.position.x+Math.sin(c.sgn*o)*l,f=c.piv.position.z+Math.cos(c.sgn*o)*l,h=pe(c.base.x,a-1.5,c.base.z),d=pe(u+c.sgn*1.1,a-1.5,f),m=h.clone().lerp(d,.55);Vd(c.cylA,h,m),Vd(c.cylB,m,d)}}};function Vd(s,t,e){Si.subVectors(e,t);let i=Si.length();Si.divideScalar(i),s.quaternion.setFromUnitVectors(bh,Si),s.position.addVectors(t,e).multiplyScalar(.5),s.scale.set(1,i,1)}function Gd(s,t){s.onBeforeCompile=e=>{e.uniforms.uHeat=t.uHeat,e.uniforms.uFlowV=t.uFlowV,e.uniforms.uLen=t.uLen,e.uniforms.uBase=t.uBase,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
varying float vLy;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vLy = position.y;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
uniform float uHeat; uniform vec3 uFlowV; uniform float uLen; uniform float uBase; varying float vLy;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        { float lead = max(dot(normal, uFlowV), 0.0); float bot = 1.0 - smoothstep(uBase, uBase + uLen * 0.35, vLy);
          float h = uHeat * (pow(lead, 2.0) * 0.8 + bot * 0.45) ;
          totalEmissiveRadiance += mix(vec3(1.0, 0.25, 0.05), vec3(1.0, 0.6, 0.3), clamp(h - 0.4, 0.0, 1.0)) * h * h * 3.5; }`)},s.customProgramCacheKey=()=>"heat"}function Px(){let s=document.createElement("canvas");s.width=512,s.height=64;let t=s.getContext("2d");t.fillStyle="#9a9ca0",t.fillRect(0,0,512,64);for(let i=0;i<32;i++)t.fillStyle="#0c0c0e",t.fillRect(i*16+3,10,9,44),t.fillStyle="#c9cbd0",t.fillRect(i*16+3,8,9,2);let e=new un(s);return e.colorSpace=Je,e.wrapS=an,e.anisotropy=4,e}var Ml=class{constructor(t="booster",e={}){if(this.kind=t,this.V=Object.assign({},dl[t]),this.livery=Nn.find(i=>i.id===e.livery)||Nn[0],this.variant=rs.find(i=>i.id===e.variant)||rs[0],t==="booster"&&this.variant.len){let i=this.variant.len-this.V.len;this.V.len=this.variant.len,this.V.pin+=i,this.V.cg+=i*.4}this.q=e.quality||"high",this.group=new ze,this.body=new ze,this.group.add(this.body),this.u={uHeat:{value:0},uFlowV:{value:new P(0,-1,0)},uLen:{value:this.V.len},uBase:{value:-this.V.cg}},this.fins=[],this.flaps=[],t==="ship"?this.buildShip():this.buildBooster(),this.group.traverse(i=>{i.isMesh&&(i.castShadow=!0,i.receiveShadow=!0)})}hullMat(t){let e=Bd(t?Nn[0]:this.livery,this.V.len,{ship:t,small:this.q==="low"}),i=new oe({map:e.map,roughnessMap:e.rough,bumpMap:e.bump,bumpScale:.22,metalness:t?.8:this.livery.id==="black"||this.livery.id==="retro"?.3:.78,roughness:1,envMapIntensity:1});return Gd(i,this.u),i}bells(t,e,i,n,r,a){let o=new Ie(n,r,i,20,1,!0);o.translate(0,-i/2,0),new Ie(n*.96,r*.97,i,20,1,!0).translate(0,-i/2,0);let l=new oe({color:5920080,metalness:.75,roughness:.4,side:ke}),u=new Float32Array(t);l.onBeforeCompile=d=>{d.vertexShader=d.vertexShader.replace("#include <common>",`#include <common>
attribute float aHeat; varying float vHeat; varying float vBy;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vHeat = aHeat; vBy = position.y;`),d.fragmentShader=d.fragmentShader.replace("#include <common>",`#include <common>
varying float vHeat; varying float vBy;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        totalEmissiveRadiance += vec3(1.0, 0.42, 0.12) * vHeat * vHeat * (0.6 + 2.5 * smoothstep(${(-i).toFixed(2)}, 0.0, vBy) * (gl_FrontFacing ? 0.4 : 1.0)) * 2.0;`)},l.customProgramCacheKey=()=>"bell";let f=new hn(o,l,t);f.geometry.setAttribute("aHeat",new Oe(u,1));let h=new se;return e.forEach((d,m)=>{h.makeTranslation(d.x,a,d.z),f.setMatrixAt(m,h)}),f.frustumCulled=!1,this.body.add(f),this.bellMesh=f,this.bellHeat=u,this.bellY=a,this.bellLen=i,f}buildBooster(){let t=this.V,e=t.r,i=t.len,n=t.cg,r=-n,a=i-n,o=new mt(new Ie(e,e,i-2.2,this.q==="low"?32:64,8,!0),this.hullMat(!1));o.position.y=r+.3+(i-2.2)/2,this.body.add(o),this.hull=o;let c=this.variant.sleek?o.material:new oe({map:Px(),metalness:.7,roughness:.45});this.variant.sleek||c.map.repeat.set(1,1);let l=new mt(new Ie(e*.995,e*.995,1.9,48,1,!0),c);l.position.y=a-.95,this.body.add(l);let u=new oe({color:9211796,metalness:.8,roughness:.4}),f=new mt(new Vi(e,48),u);f.rotation.x=-Math.PI/2,f.position.y=a,this.body.add(f);let h=new mt(new _i(e*.9,32,8,0,Math.PI*2,0,.5),u);h.position.y=a-e*.9*Math.cos(.5)+.05,this.body.add(h);let d=new mt(new Ce(.7,i*.8,.5),new oe({color:10396328,metalness:.7,roughness:.45}));d.position.set(0,r+i*.48,e+.1),this.body.add(d);let m=new oe({color:2763566,metalness:.6,roughness:.5});for(let T of[1,-1]){let R=new mt(new Ce(1.3,.8,1.6),m);R.position.set(T*(e+.55),t.pin-n+.4,0),this.body.add(R)}let v=this.variant.fins||4,g=v===3,p=kd(),M=new oe({map:p,alphaMap:p,alphaTest:.5,transparent:!1,color:5592924,metalness:.7,roughness:.5,side:ke}),y=new oe({color:3948098,metalness:.7,roughness:.5}),x=g?4.2:3.5,S=g?5:4.2;for(let T=0;T<v;T++){let R=(v===4?45+T*90:90+T*120)*Math.PI/180,I=new ze;I.position.set(Math.cos(R)*e,a-3.6,Math.sin(R)*e),I.rotation.y=-R;let L=new ze;I.add(L);let B=new mt(new Le(S,x),M);B.rotation.x=-Math.PI/2,B.position.x=S/2+.6,L.add(B);let N=oi([new Ce(S,.5,.25).translate(S/2+.6,0,x/2),new Ce(S,.5,.25).translate(S/2+.6,0,-x/2),new Ce(.25,.5,x).translate(S+.6,0,0),new Ce(.8,.9,x*.5).translate(.4,0,0)]);L.add(new mt(N,y));let O=new mt(new Ce(1.2,2.6,2),y);O.position.set(.3,.2,0),I.add(O),this.body.add(I),this.fins.push({pivot:L,a:R})}let w=new oe({color:4868942,metalness:.6,roughness:.6}),A=new mt(new Ie(e,e*1,2.6,48,1,!0),w);A.position.y=r+1.3,this.body.add(A);let _=new mt(new Ii(.3,e,48),new oe({color:1710620,metalness:.2,roughness:.9,side:ke}));_.rotation.x=Math.PI/2,_.position.y=r+.9,this.body.add(_),this.bells(t.engines.length,t.engines,2.1,.42,.66,r+.9),this.nozzleY=r+.9-2.1}buildShip(){let t=this.V,e=t.r,i=t.len,n=t.cg,r=-n,a=i-n,o=i-18,c=new mt(new Ie(e,e,o,64,6,!0),this.hullMat(!0));c.position.y=r+o/2,this.body.add(c),this.hull=c;let l=[];for(let w=0;w<=24;w++){let A=w/24,_=A*18,T=e*Math.sqrt(Math.max(0,1-Math.pow(A,2.2)))*(1-.08*A);l.push(new at(Math.max(.05,T),_))}let u=new mt(new Ds(l,64),c.material);u.position.y=r+o,this.body.add(u);let f=Od();f.repeat.set(6,14);let h=new oe({map:f,color:16777215,metalness:.05,roughness:.75});Gd(h,this.u);let d=new mt(new Ie(e+.06,e+.06,o,48,4,!0,Math.PI*.5+.35+Math.PI,Math.PI-.7),h);d.geometry.dispose(),d.geometry=new Ie(e+.06,e+.06,o,48,4,!0,Math.PI*1.5-1.25,2.5),d.position.y=r+o/2,this.body.add(d);let m=l.map(w=>new at(w.x+.06,w.y)),v=new mt(new Ds(m,48,Math.PI*1.5-1.25-Math.PI/2,2.5),h);v.position.y=r+o,this.body.add(v);let g=new oe({color:1776413,metalness:.2,roughness:.8}),p=(w,A,_,T)=>{let R=new ze;R.position.set(-e*.25,w,T*e*.97);let I=new ze;R.add(I);let L=new Ps;L.moveTo(0,0),L.lineTo(0,A),L.lineTo(_,A*.8),L.lineTo(_*.9,.3),L.lineTo(0,0);let B=new Pr(L,{depth:.35,bevelEnabled:!1});B.rotateY(T>0?-Math.PI/2:Math.PI/2),B.translate(0,-A/2,0);let N=new mt(B,g);return I.add(N),this.body.add(R),this.flaps.push({p:I,z:T,fwd:w>0}),R};p(a-12.5,8,3.2,1),p(a-12.5,8,3.2,-1),p(r+7.5,12,4.4,1),p(r+7.5,12,4.4,-1);let M=new oe({color:2763566,metalness:.6,roughness:.5});for(let w of[1,-1]){let A=new mt(new Ce(1.2,.8,1.4),M);A.position.set(w*(e+.5),t.pin-n+.4,0),this.body.add(A)}let y=new mt(new Vi(e,48),new oe({color:1710620,roughness:.9}));y.rotation.x=Math.PI/2,y.position.y=r+.6,this.body.add(y);let x=t.engines;this.bells(x.length,x,2.4,.42,.7,r+.6);let S=new se;x.forEach((w,A)=>{w.g==="v"&&(S.makeScale(1.9,1.35,1.9).setPosition(w.x,r+.6,w.z),this.bellMesh.setMatrixAt(A,S))}),this.nozzleY=r+.6-2.4}nozzleLocal(t,e){return e.set(t.x,this.nozzleY-(t.g==="v"?.9:0),t.z)}update(t,e,i){if(!t)return;this.group.position.set(t.x,t.y,0),this.group.rotation.set(0,0,-t.th);let n=t.T>0?Math.min(1,t.T/2e7):0;this.body.position.set((Math.random()-.5)*.02*n,0,(Math.random()-.5)*.02*n);let r=t.finAct||0;if(this.fins.forEach((c,l)=>{let u=Math.cos(c.a)>.1?1:Math.cos(c.a)<-.1?-1:0;c.pivot.rotation.x=be.lerp(c.pivot.rotation.x,(u||1)*r*.45*(u?1:.3),Math.min(1,e*10))}),this.flaps.length){let c=t.th<-.6,l=r;for(let u of this.flaps){let f=c?.15:1.25,h=c?(u.fwd?-l:l)*.45:0;u.p.rotation.y=be.lerp(u.p.rotation.y,(f+h)*(u.z>0?1:-1)*.6,Math.min(1,e*6))}}for(let c=0;c<t.eng.length;c++){let l=t.eng[c],u=l.st===2||l.st===1?.5+.5*l.sp:0;this.bellHeat[c]+=(Math.max(u,this.bellHeat[c]*.995)-this.bellHeat[c])*Math.min(1,e*(u>this.bellHeat[c]?4:.25))}this.bellMesh.geometry.attributes.aHeat.needsUpdate=!0,this.u.uHeat.value+=(Math.min(1.2,t.heat||0)-this.u.uHeat.value)*Math.min(1,e*3);let a=Math.hypot(t.vx,t.vy)||1;this.u.uFlowV.value.set(t.vx/a,t.vy/a,0).transformDirection(i.matrixWorldInverse)}dispose(){this.group.traverse(t=>{t.isMesh&&t.geometry.dispose()})}};var $s=class{constructor(t,{additive:e=!1,tex:i="smoke",fogU:n,light:r}={}){this.max=t,this.n=0,this.additive=e,this.pos=new Float32Array(t*3),this.vel=new Float32Array(t*3),this.size=new Float32Array(t),this.grow=new Float32Array(t),this.life=new Float32Array(t),this.age=new Float32Array(t),this.c0=new Float32Array(t*3),this.c1=new Float32Array(t*3),this.a0=new Float32Array(t),this.drag=new Float32Array(t),this.buoy=new Float32Array(t),this.rot=new Float32Array(t),this.rotV=new Float32Array(t),this.fin=new Float32Array(t),this.gnd=new Float32Array(t);let a=new Gi,o=new Le(1,1);a.index=o.index,a.attributes.position=o.attributes.position,a.attributes.uv=o.attributes.uv,this.aPS=new Oe(new Float32Array(t*4),4),this.aCol=new Oe(new Float32Array(t*4),4),this.aRot=new Oe(new Float32Array(t),1);for(let c of[this.aPS,this.aCol,this.aRot])c.setUsage(Wc);a.setAttribute("aPS",this.aPS),a.setAttribute("aCol",this.aCol),a.setAttribute("aRot",this.aRot),a.instanceCount=0,this.uniforms={uTex:{value:pn(i)},uLight:{value:new ft(1,1,1)},uAmb:{value:new ft(.4,.4,.45)},uPL:{value:new P(0,-9999,0)},uPLc:{value:new ft(0,0,0)},fogColor:n?n.fogColor:{value:new ft},fogDensity:n?n.fogDensity:{value:0}},this.mat=new re({uniforms:this.uniforms,transparent:!0,depthWrite:!1,blending:e?Ve:Cn,vertexShader:`attribute vec4 aPS; attribute vec4 aCol; attribute float aRot; varying vec2 vUv; varying vec4 vCol; varying vec3 vW;
        void main(){ vUv = uv; vCol = aCol; vec3 right = vec3(viewMatrix[0][0], viewMatrix[1][0], viewMatrix[2][0]); vec3 up = vec3(viewMatrix[0][1], viewMatrix[1][1], viewMatrix[2][1]);
          float c = cos(aRot), s = sin(aRot); vec2 p = vec2(position.x * c - position.y * s, position.x * s + position.y * c) * aPS.w;
          vec3 w = aPS.xyz + right * p.x + up * p.y; vW = w;
          vec4 mv = viewMatrix * vec4(w, 1.0);
          // nahe der Kamera ausblenden
          vCol.a *= smoothstep(0.3, 1.2 + aPS.w * 0.4, -mv.z);
          gl_Position = projectionMatrix * mv; }`,fragmentShader:Qr+`uniform sampler2D uTex; uniform vec3 uLight; uniform vec3 uAmb; uniform vec3 uPL; uniform vec3 uPLc; uniform vec3 fogColor; uniform float fogDensity; varying vec2 vUv; varying vec4 vCol; varying vec3 vW;
        void main(){ float t = texture2D(uTex, vUv).a; float a = t * vCol.a; if (a < 0.004) discard;
          ${e?"vec3 col = vCol.rgb * a; col = applyFog(col, vW, cameraPosition, vec3(0.0), fogDensity); gl_FragColor = vec4(col, 1.0);":`vec3 d = uPL - vW; float l = 1.0 / (1.0 + dot(d, d) * 0.0006);
          vec3 col = vCol.rgb * (uAmb + uLight * (0.55 + 0.45 * (vUv.y))) + uPLc * l * vCol.rgb;
          col = applyFog(col, vW, cameraPosition, fogColor, fogDensity); gl_FragColor = vec4(col, a);`} }`}),this.mesh=new mt(a,this.mat),this.mesh.frustumCulled=!1,this.mesh.renderOrder=e?7:6}spawn(t,e,i,n,r,a,o,c,l,u,f,h,d=.5,m=0,v=.1,g=-1e9){let p=this.n;p>=this.max?p=Math.random()*this.max|0:this.n++;let M=p*3;this.pos[M]=t,this.pos[M+1]=e,this.pos[M+2]=i,this.vel[M]=n,this.vel[M+1]=r,this.vel[M+2]=a,this.size[p]=o,this.grow[p]=c,this.life[p]=l,this.age[p]=0,this.c0[M]=u[0],this.c0[M+1]=u[1],this.c0[M+2]=u[2],f=f||u,this.c1[M]=f[0],this.c1[M+1]=f[1],this.c1[M+2]=f[2],this.a0[p]=h,this.drag[p]=d,this.buoy[p]=m,this.rot[p]=Math.random()*6.28,this.rotV[p]=(Math.random()-.5)*.8,this.fin[p]=v,this.gnd[p]=g}update(t,e=0){let i=this.pos,n=this.vel,r=this.aPS.array,a=this.aCol.array,o=this.aRot.array,c=0;for(;c<this.n;){if(this.age[c]+=t,this.age[c]>=this.life[c]){this.kill(c);continue}let l=c*3,u=Math.exp(-this.drag[c]*t);if(n[l]=(n[l]-e)*u+e,n[l+1]=n[l+1]*u+this.buoy[c]*t,n[l+2]*=u,i[l]+=n[l]*t,i[l+1]+=n[l+1]*t,i[l+2]+=n[l+2]*t,i[l+1]<this.gnd[c]&&(i[l+1]=this.gnd[c],n[l+1]<0)){let g=-n[l+1]*.5;n[l+1]=0;let p=Math.random()*6.28;n[l]+=Math.cos(p)*g,n[l+2]+=Math.sin(p)*g}this.size[c]+=this.grow[c]*t,this.rot[c]+=this.rotV[c]*t;let f=this.age[c]/this.life[c],h=this.fin[c],d=this.a0[c]*(f<h?f/h:1)*(1-Math.pow(Math.max(0,(f-h)/(1-h)),1.6)),m=Math.min(1,f*2.2),v=c*4;r[v]=i[l],r[v+1]=i[l+1],r[v+2]=i[l+2],r[v+3]=this.size[c],a[v]=this.c0[l]+(this.c1[l]-this.c0[l])*m,a[v+1]=this.c0[l+1]+(this.c1[l+1]-this.c0[l+1])*m,a[v+2]=this.c0[l+2]+(this.c1[l+2]-this.c0[l+2])*m,a[v+3]=d,o[c]=this.rot[c],c++}this.mesh.geometry.instanceCount=this.n,this.aPS.needsUpdate=!0,this.aCol.needsUpdate=!0,this.aRot.needsUpdate=!0}kill(t){let e=--this.n;if(t===e)return;let i=t*3,n=e*3;for(let r=0;r<3;r++)this.pos[i+r]=this.pos[n+r],this.vel[i+r]=this.vel[n+r],this.c0[i+r]=this.c0[n+r],this.c1[i+r]=this.c1[n+r];for(let r of[this.size,this.grow,this.life,this.age,this.a0,this.drag,this.buoy,this.rot,this.rotV,this.fin,this.gnd])r[t]=r[e]}clear(){this.n=0,this.mesh.geometry.instanceCount=0}};var Bn=new P,bl=new P,Z=Math.random,Zs=s=>Math.abs(s)<Rt.mountR+4?Rt.mountTop:s>Di?.2:1.6,Sl=class{constructor(t,e,i={}){this.scene=t,this.world=e,this.q=i.quality||"high";let n=this.q==="high"?5200:this.q==="med"?3200:1700,r=e.u;this.smoke=new $s(n,{additive:!1,tex:"smoke",fogU:r}),this.fire=new $s(Math.floor(n*.7),{additive:!0,tex:"glow",fogU:r}),this.sparks=new $s(800,{additive:!0,tex:"spark",fogU:r}),t.add(this.smoke.mesh,this.fire.mesh,this.sparks.mesh),this.density=this.q==="high"?1:this.q==="med"?.65:.38,this.time=0,this.flash=0,this.shake=0,this.haze=0,this.light=new Us(16746560,0,900,1.6),t.add(this.light),this.boomLight=new Us(16755285,0,3e3,1.4),t.add(this.boomLight),this.buildPlumeMat(),this.buildDebris(),this.buildShock(),this.buildVapor(),this.buildHalo(),this.wrecks=[],this.pendingBooms=[],this.lastSim=null}buildPlumeMat(){let t=new Ie(1,1,1,20,40,!0);t.translate(0,-.5,0),this.plumeGeo=t,this.plumeU={uTime:{value:0},uNoise:{value:qs()}},this.plumeMat=new re({uniforms:this.plumeU,transparent:!0,depthWrite:!1,blending:Ve,side:Wi,vertexShader:`attribute vec4 aP; attribute vec4 aQ; varying float vT; varying float vI; varying vec3 vN; varying vec3 vV; varying float vLen; varying float vExp; varying vec2 vUv; varying float vSeed;
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
          gl_FragColor = vec4(col * a * 2.6, 1.0); }`})}buildHalo(){this.halo=new mt(new Le(1,1),new re({uniforms:{uTex:{value:pn("glow")},uI:{value:0},uCol:{value:new ft(1,.6,.3)}},transparent:!0,depthWrite:!1,depthTest:!0,blending:Ve,vertexShader:"varying vec2 vUv; void main(){ vUv = uv; vec4 mv = modelViewMatrix * vec4(0.0,0.0,0.0,1.0); mv.xy += position.xy * vec2(length(modelMatrix[0].xyz)); gl_Position = projectionMatrix * mv; }",fragmentShader:"uniform sampler2D uTex; uniform float uI; uniform vec3 uCol; varying vec2 vUv; void main(){ float a = texture2D(uTex, vUv).a; gl_FragColor = vec4(uCol * a * uI, 1.0); }"})),this.halo.frustumCulled=!1,this.halo.renderOrder=9,this.scene.add(this.halo),this.shockGlow=this.halo.clone(),this.shockGlow.material=this.halo.material.clone(),this.shockGlow.material.uniforms.uTex.value=pn("glow"),this.scene.add(this.shockGlow)}attach(t){if(this.plumes&&(this.plumes.parent&&this.plumes.parent.remove(this.plumes),this.plumes.geometry.dispose()),!t){this.plumes=null;return}let e=t.V.engines.length,i=new Gi;i.index=this.plumeGeo.index,i.attributes.position=this.plumeGeo.attributes.position,i.attributes.uv=this.plumeGeo.attributes.uv,this.aP=new Oe(new Float32Array(e*4),4),this.aQ=new Oe(new Float32Array(e*4),4),i.setAttribute("aP",this.aP),i.setAttribute("aQ",this.aQ),i.instanceCount=e,t.V.engines.forEach((n,r)=>{t.nozzleLocal(n,Bn),this.aP.array.set([Bn.x,Bn.y,Bn.z,n.g==="v"?1.15:.62],r*4),this.aQ.array[r*4+3]=Z()*10}),this.plumes=new mt(i,this.plumeMat),this.plumes.frustumCulled=!1,this.plumes.renderOrder=8,t.body.add(this.plumes),this.vehicle=t}buildDebris(){this.debris=new hn(new Ce(1,1,1),new oe({color:9079952,metalness:.75,roughness:.45,emissive:0}),160),this.debris.instanceColor=new Oe(new Float32Array(480).fill(1),3),this.debris.count=0,this.debris.frustumCulled=!1,this.debris.castShadow=!0,this.scene.add(this.debris),this.deb=[]}buildShock(){let t=new mt(new Ii(.85,1,64,1),new Hi({color:16767400,transparent:!0,opacity:0,depthWrite:!1,blending:Ve,side:ke}));t.rotation.x=-Math.PI/2,t.visible=!1,this.scene.add(t),this.ring=t;let e=new mt(new _i(1,32,16),new re({transparent:!0,depthWrite:!1,blending:Ve,uniforms:{uA:{value:0}},vertexShader:"varying vec3 vN; varying vec3 vV; void main(){ vec4 w = modelMatrix * vec4(position,1.0); vN = normalize(mat3(modelMatrix) * normal); vV = normalize(cameraPosition - w.xyz); gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:"uniform float uA; varying vec3 vN; varying vec3 vV; void main(){ float f = pow(1.0 - abs(dot(vN, vV)), 4.0); gl_FragColor = vec4(vec3(1.0, 0.8, 0.6) * f * uA, 1.0); }"}));e.visible=!1,this.scene.add(e),this.shockSphere=e;let i=new mt(new Lr(1,4),new re({transparent:!0,depthWrite:!1,blending:Ve,uniforms:{uA:{value:0},uT:{value:0},uNoise:{value:qs()}},vertexShader:`uniform float uT; uniform sampler2D uNoise; varying vec3 vN; varying vec3 vV; varying float vH;
        void main(){ vec3 p = position; float h = texture2D(uNoise, vec2(atan(p.z, p.x) * 0.3 + uT * 0.05, p.y * 0.5 + 0.5 - uT * 0.1)).r; vH = h; p *= 0.75 + h * 0.6;
          vec4 w = modelMatrix * vec4(p,1.0); vN = normalize(mat3(modelMatrix) * normal); vV = normalize(cameraPosition - w.xyz); gl_Position = projectionMatrix * viewMatrix * w; }`,fragmentShader:`uniform float uA; uniform float uT; varying vec3 vN; varying vec3 vV; varying float vH;
        void main(){ float f = pow(abs(dot(vN, vV)), 1.5); vec3 c = mix(vec3(1.0, 0.25, 0.04), vec3(1.0, 0.85, 0.55), f * vH * 1.4 * (1.0 - uT));
          gl_FragColor = vec4(c * (0.6 + f) * uA * 6.0, 1.0); }`}));i.visible=!1,this.scene.add(i),this.fireball=i}buildVapor(){let t=new br(1,1,40,8,!0);t.translate(0,-.5,0),this.vapor=new mt(t,new re({transparent:!0,depthWrite:!1,side:ke,uniforms:{uA:{value:0},uT:{value:0},uNoise:{value:qs()},uLight:{value:new ft(1,1,1)}},vertexShader:"varying vec2 vUv; varying vec3 vN; varying vec3 vV; void main(){ vUv = uv; vec4 w = modelMatrix * vec4(position,1.0); vN = normalize(mat3(modelMatrix) * normal); vV = normalize(cameraPosition - w.xyz); gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`uniform float uA; uniform float uT; uniform sampler2D uNoise; uniform vec3 uLight; varying vec2 vUv; varying vec3 vN; varying vec3 vV;
        void main(){ float n = texture2D(uNoise, vec2(vUv.x * 3.0, vUv.y * 0.8 - uT * 2.0)).g; float f = pow(1.0 - abs(dot(vN, vV)), 1.3);
          float a = uA * (0.25 + f) * smoothstep(0.0, 0.35, vUv.y) * smoothstep(1.0, 0.75, vUv.y) * (0.5 + n);
          gl_FragColor = vec4(uLight * 0.95, clamp(a, 0.0, 0.85)); }`})),this.vapor.visible=!1,this.vapor.renderOrder=6,this.scene.add(this.vapor)}reset(){this.smoke.clear(),this.fire.clear(),this.sparks.clear(),this.deb.length=0,this.debris.count=0,this.wrecks.length=0,this.pendingBooms.length=0,this.ring.visible=!1,this.shockSphere.visible=!1,this.fireball.visible=!1,this.flash=0,this.shake=0,this.light.intensity=0,this.boomLight.intensity=0,this.ventT=0,this.boomT=-1}setLighting(t,e){for(let i of[this.smoke])i.uniforms.uLight.value.copy(t),i.uniforms.uAmb.value.copy(e);this.vapor.material.uniforms.uLight.value.copy(t).add(e)}explode(t,e=1,i=!1){let n=t.bx!==void 0?(t.x+t.bx)/2:t.x,r=Math.max(Zs(n)+2,t.by!==void 0?(t.y+t.by)/2:t.y),a=0,o=Math.max(.45,Math.min(1.3,e)),c=this.density,l=Zs(n);this.flash=Math.min(1.4,.8+o*.5),this.shake=1.2*o,this.haze=1,this.boomLight.position.set(n,r+10,8),this.boomLight.intensity=6e6*o,this.boomT=0,this.boomPos=new P(n,r,a),this.fireball.visible=!0,this.fireball.position.set(n,r,a),this.fireball.scale.setScalar(4),this.fbT=0,this.fbE=o,this.shockSphere.visible=!0,this.shockSphere.position.set(n,r,a),this.ssT=0,this.ring.visible=!0,this.ring.position.set(n,l+.6,0),this.ringT=0;let u=(t.vx||0)*.25,f=Math.max(-20,(t.vy||0)*.15),h=Math.floor(280*c*o),d=Math.floor(170*c*o);for(let v=0;v<h;v++){let g=Z()*6.283,p=Math.acos(2*Z()-1),M=(8+Z()*38)*o,y=Math.sin(p)*Math.cos(g),x=Math.abs(Math.cos(p))*(i?1.6:.8),S=Math.sin(p)*Math.sin(g);this.fire.spawn(n+y*4,r+x*4,a+S*4,u+y*M,f+x*M,S*M,6+Z()*12,10+Z()*10,1+Z()*1.8,[7,3.6,1.3],[1.6,.28,.05],1,1.6,7,.05,l)}for(let v=0;v<d;v++){let g=Z()*6.283,p=(3+Z()*22)*o,M=Math.cos(g),y=Math.sin(g),x=i?[.9,.92,.95]:[.16,.13,.11],S=i?[.75,.77,.8]:[.07,.07,.07];this.smoke.spawn(n+M*6,r+Z()*10,a+y*6,u+M*p,Z()*20*o+(i?25:0),y*p,10+Z()*14,6+Z()*5,6+Z()*8,x,S,.85,1,i?-4:3.5,.08,l)}for(let v=0;v<240*c;v++){let g=Z()*6.283,p=Math.acos(2*Z()-1),M=25+Z()*80;this.sparks.spawn(n,r,a,Math.sin(p)*Math.cos(g)*M+u,Math.abs(Math.cos(p))*M*.9,Math.sin(p)*Math.sin(g)*M,.6+Z()*.9,-.1,1+Z()*2.2,[9,4.5,1.5],[3,.6,.1],1,.4,-9.8,.02,l)}for(let v=0;v<70*c;v++){let g=Z()*6.283,p=30+Z()*40;this.smoke.spawn(n+Math.cos(g)*8,l+2,Math.sin(g)*8,Math.cos(g)*p,1+Z()*3,Math.sin(g)*p,5+Z()*4,6,3+Z()*3,i?[.85,.88,.9]:[.55,.5,.42],null,.6,1.4,.5,.05,l)}if(i)for(let v=0;v<260*c;v++){let g=Z()*6.283,p=Z()*12;this.smoke.spawn(n+Math.cos(g)*p,1,Math.sin(g)*p,Math.cos(g)*(4+Z()*10),30+Z()*70,Math.sin(g)*(4+Z()*10),3+Z()*5,4,2.5+Z()*3,[.95,.97,1],[.85,.88,.92],.9,.6,-9.8,.03,0)}let m=Math.floor((60+90*o)*Math.max(.5,c));for(let v=0;v<m;v++){let g=Z()*6.283,p=Math.acos(2*Z()-1),M=12+Z()*60*o,y=v<5;this.deb.push({p:new P(n+(Z()-.5)*8,r+(Z()-.5)*20,(Z()-.5)*6),v:new P(Math.sin(p)*Math.cos(g)*M*(y?.3:1)+u,Math.abs(Math.cos(p))*M*.9+5,Math.sin(p)*Math.sin(g)*M*(y?.3:1)),s:y?new P(4+Z()*3,6+Z()*6,1.2+Z()):new P(.3+Z()*2.2,.2+Z()*1.6,.1+Z()*.8),q:new ri().setFromEuler(new li(Z()*6,Z()*6,Z()*6)),w:new P((Z()-.5)*8,(Z()-.5)*8,(Z()-.5)*8),trail:Z()<.3||y,hot:Z()<.5?1:0,rest:!1,life:30})}this.debris.count=Math.min(this.deb.length,160),this.wrecks.push({x:n,z:0,y:l,t:0,water:i,life:i?14:60});for(let v=0;v<3;v++)this.pendingBooms.push({t:.35+Z()*1.4,x:n+(Z()-.5)*30,y:r+(Z()-.3)*25,e:.35*o})}smallBoom(t,e,i){let n=this.density,r=Zs(t);this.flash=Math.max(this.flash,.4),this.shake=Math.max(this.shake,.5);for(let a=0;a<80*n;a++){let o=Z()*6.283,c=Math.acos(2*Z()-1),l=6+Z()*22,u=Math.sin(c)*Math.cos(o),f=Math.cos(c),h=Math.sin(c)*Math.sin(o);this.fire.spawn(t,e,0,u*l,f*l,h*l,4+Z()*7,8,.8+Z()*1.2,[7,3.4,1.2],[1.4,.25,.05],1,1.8,6,.05,r)}for(let a=0;a<40*n;a++)this.smoke.spawn(t+(Z()-.5)*8,e,(Z()-.5)*8,(Z()-.5)*10,4+Z()*8,(Z()-.5)*10,8+Z()*8,5,5+Z()*5,[.15,.12,.1],[.07,.07,.07],.8,1,3,.08,r)}update(t,e,i,n,r={}){this.time+=t,this.plumeU.uTime.value=this.time;let a=this.density,o=e?e.wind*.6:0,c=0;if(e&&i&&this.plumes&&e.phase!=="crashed"){let l=e.y,u=be.smoothstep(l,6e3,4e4),f=e.thr,h=0,d=(16+f*26)*(1+u*1.8);for(let p=0;p<e.eng.length;p++){let M=e.eng[p],x=(M.st===2||M.st===1?M.sp:M.sp*.6)*(.55+.45*f)*(M.st===1?.5+Z()*.5:1)*(.93+Z()*.07);this.aQ.array[p*4]=x,this.aQ.array[p*4+1]=d*(.85+.15*Z())*(M.g==="v"?1.4:1),this.aQ.array[p*4+2]=u,x>.05&&(h+=x)}this.aQ.needsUpdate=!0;let m=Bn.set(Math.sin(e.th),Math.cos(e.th),0),v=bl.set(e.bottomX(),e.bottomY(),0).addScaledVector(m,-2.5);c=Math.min(13,h);let g=c/13;if(this.light.position.copy(v).addScaledVector(m,-10),this.light.intensity=c>.05?(9e3+26e3*g)*(.85+Z()*.3):0,this.halo.position.copy(v).addScaledVector(m,-3),this.halo.scale.setScalar(14+26*g+u*90),this.halo.material.uniforms.uI.value=c>.05?(.35+.95*Math.sqrt(g))*(.9+Z()*.2):0,this.halo.material.uniforms.uCol.value.setRGB(1,.55+u*.1,.25+u*.6),c>.05){let p=-m.y,M=Zs(v.x);if(p<-.3){let y=(v.y-M)/-p,x=d*2.2+25;if(y>0&&y<x){let S=(1-y/x)*Math.min(1,c/3),w=v.x-m.x*y,A=M===Rt.mountTop,_=M<1,T=Math.floor(S*14*a*Math.min(t*60,3));for(let R=0;R<T;R++){let I=Z()*6.283,L=20+Z()*45*S+c*2,B=A?[.92,.93,.95]:_?[.9,.93,.96]:[.62,.56,.47];this.smoke.spawn(w+Math.cos(I)*4,M+1+Z()*3,Math.sin(I)*4,Math.cos(I)*L,2+Z()*6,Math.sin(I)*L,3+Z()*4,7+Z()*5,2.5+Z()*3,B,B,A?.55:.45,1.2,A?5:1.5,.12,M)}for(let R=0;R<T*.6;R++){let I=Z()*6.283,L=25+Z()*30;this.fire.spawn(w,M+1.5,0,Math.cos(I)*L,1+Z()*3,Math.sin(I)*L,3+Z()*3,6,.35+Z()*.3,[4,1.8,.6],[1.2,.3,.05],.8*S,3,1,.05,M)}A&&Z()<.3&&this.sparks.spawn(w+(Z()-.5)*6,M+1,(Z()-.5)*6,(Z()-.5)*50,10+Z()*30,(Z()-.5)*50,.5,0,.8+Z(),[8,4,1.3],[3,.6,.1],1,.3,-9.8,.02,M)}}l>2e3&&Z()<.5*a?this.fire.spawn(v.x-m.x*d,v.y-m.y*d,(Z()-.5)*6,e.vx*.3,e.vy*.3,0,8+u*30,20+u*60,.6,[1.5*g,.6*g,.4*g],[.1,.05,.1],.5,.5,0,.1):l<2e3&&Z()<.35*a&&this.smoke.spawn(v.x-m.x*d*1.1,v.y-m.y*d*1.1,(Z()-.5)*4,e.vx*.2+o,e.vy*.2,0,4,6,2.5,[.7,.7,.72],null,.12,.8,0,.2,Zs(v.x))}this.smoke.uniforms.uPL.value.copy(this.light.position),this.smoke.uniforms.uPLc.value.setRGB(1,.5,.2).multiplyScalar(c>.05?.6+2.2*g:0)}else this.light.intensity=0,this.halo.material.uniforms.uI.value=0,this.smoke.uniforms.uPLc.value.setRGB(0,0,0);if(this.lightLevel=c,e&&e.phase!=="crashed"&&i){let l=Math.min(1.3,e.heat||0),u=Math.hypot(e.vx,e.vy)||1,f=e.vx/u,h=e.vy/u,d=i.kind==="ship"?Bn.set(e.x,e.y,0).addScaledVector(bl.set(f,h,0),4):Bn.set(e.bottomX(),e.bottomY(),0).addScaledVector(bl.set(f,h,0),2);if(this.shockGlow.position.copy(d),this.shockGlow.scale.setScalar(14+l*24),this.shockGlow.material.uniforms.uI.value=l>.15?(l-.15)*2.2:0,this.shockGlow.material.uniforms.uCol.value.setRGB(1,.45,.18),l>.2&&e.phase!=="caught"){let g=Math.floor((l-.2)*10*a*Math.min(3,t*60));for(let p=0;p<g;p++){let M=4.5*(Z()-.5)*2;this.fire.spawn(d.x+h*M,d.y-f*M,(Z()-.5)*8,e.vx*.55+(Z()-.5)*30,e.vy*.55+(Z()-.5)*30,(Z()-.5)*30,2+Z()*4,6+l*8,.3+Z()*.5,[3.5*l,1.2*l,.4*l],[.6,.12,.05],.9,.6,0,.05)}}let m=e.mach||0,v=e.y<14e3?Math.max(0,1-Math.abs(m-1)/.14)*be.smoothstep(14e3-e.y,0,4e3):0;if(this.vapor.visible=v>.01,this.vapor.visible){let g=bl.set(f,h,0),p=i.V.len,M=9+5*v;this.vapor.position.set(e.x,e.y,0).addScaledVector(g,i.kind==="ship"?2:-i.V.cg+4),this.vapor.quaternion.setFromUnitVectors(new P(0,1,0),g),this.vapor.scale.set(M,p*.9,M),this.vapor.material.uniforms.uA.value=v*.85,this.vapor.material.uniforms.uT.value=this.time}if(e.phase==="coast"&&Z()<.3*a){let g=Bn.set(e.x+Math.sin(e.th)*(i.V.len-i.V.cg),e.y+Math.cos(e.th)*(i.V.len-i.V.cg),0);this.smoke.spawn(g.x,g.y,3,e.vx+(Z()-.5)*6,e.vy+3,4+Z()*3,1.5,4,2,[.9,.92,.95],null,.35,.05,0,.1)}if((e.phase==="caught"||e.phase==="done"&&e.caught)&&r.vent!==!1){if(this.ventT+=t,this.ventT>1.2&&this.ventT<14&&Z()<.9*a){let g=i.V.len-i.V.cg;for(let p of[1,-1])this.smoke.spawn(e.x+p*3.5,e.y+g-2,1,p*(6+Z()*6)+o,2+Z()*3,(Z()-.5)*3,2,3.2,3.5+Z()*2,[.95,.96,.98],null,.5,.6,.6,.1);Z()<.4&&this.smoke.spawn(e.x+(Z()-.5)*6,e.y-i.V.cg-1,(Z()-.5)*6,(Z()-.5)*3+o,-3-Z()*2,(Z()-.5)*3,2,2.4,4,[.88,.9,.93],null,.35,.4,-.5,.1,30)}}else this.ventT=0}else this.shockGlow.material.uniforms.uI.value=0,this.vapor.visible=!1;if(this.fireball.visible){this.fbT+=t;let l=this.fbT,u=this.fbE;this.fireball.scale.setScalar((8+l*70*u)*(1-Math.exp(-l*6))+4),this.fireball.position.y+=t*6,this.fireball.material.uniforms.uA.value=Math.max(0,1-l/.9),this.fireball.material.uniforms.uT.value=l,l>.9&&(this.fireball.visible=!1)}if(this.shockSphere.visible){this.ssT+=t;let l=10+this.ssT*340;this.shockSphere.scale.setScalar(l),this.shockSphere.material.uniforms.uA.value=Math.max(0,.6*(1-this.ssT/.6)),this.ssT>.6&&(this.shockSphere.visible=!1)}if(this.ring.visible){this.ringT+=t;let l=6+this.ringT*210;this.ring.scale.setScalar(l),this.ring.material.opacity=Math.max(0,.7*(1-this.ringT/1.3)),this.ringT>1.3&&(this.ring.visible=!1)}this.boomT>=0&&(this.boomT+=t,this.boomLight.intensity=6e6*Math.exp(-this.boomT*3.2)+(this.boomT<6?15e4*(.7+Z()*.3)*Math.exp(-this.boomT*.3):0));for(let l=this.pendingBooms.length-1;l>=0;l--){let u=this.pendingBooms[l];u.t-=t,u.t<=0&&(this.smallBoom(u.x,u.y,u.e),this.pendingBooms.splice(l,1),r.onBoom&&r.onBoom(.5))}if(this.deb.length){let l=new se,u=new ri,f=new li,h=0;for(let d of this.deb){if(!d.rest){d.v.y-=9.81*t,d.v.multiplyScalar(Math.exp(-.08*t*(1+d.v.length()*.01))),d.p.addScaledVector(d.v,t),f.set(d.w.x*t,d.w.y*t,d.w.z*t),u.setFromEuler(f),d.q.multiply(u);let m=Zs(d.p.x)+d.s.y*.3;d.p.y<m&&(d.p.y=m,Math.abs(d.v.y)>4?(d.v.y*=-.3,d.v.x*=.5,d.v.z*=.5,d.w.multiplyScalar(.5),m<1&&(d.rest=!0)):d.rest=!0),d.trail&&Z()<.6*a&&(d.hot&&this.fire.spawn(d.p.x,d.p.y,d.p.z,0,0,0,1.5+Z()*2,3,.4,[5,2.2,.7],[1,.2,.05],.8,1,2,.05),this.smoke.spawn(d.p.x,d.p.y,d.p.z,o,1,0,1.6+Z(),3,2.5+Z()*2,[.16,.14,.13],[.1,.1,.1],.55,.7,1.5,.1))}if(!(d.p.y<-2)&&h<160){l.compose(d.p,d.q,d.s),this.debris.setMatrixAt(h,l);let m=d.hot?.25:1;this.debris.instanceColor.setXYZ(h,m+(1-m)*.5,m*.95+.1,m),h++}}this.debris.count=h,this.debris.instanceMatrix.needsUpdate=!0,this.debris.instanceColor.needsUpdate=!0}for(let l of this.wrecks){if(l.t+=t,l.t>l.life)continue;let u=Math.max(0,1-l.t/l.life);!l.water&&Z()<.8*a*u&&this.fire.spawn(l.x+(Z()-.5)*16,l.y+1,(Z()-.5)*12,o*.3,4+Z()*6,0,3+Z()*5,4,.8+Z(),[5,2.2,.7],[1.2,.2,.04],.9,1,3,.1),Z()<.6*a*u&&this.smoke.spawn(l.x+(Z()-.5)*14,l.y+6,(Z()-.5)*10,o,6+Z()*6,0,6+Z()*4,5,9+Z()*6,l.water?[.85,.87,.9]:[.13,.11,.1],l.water?[.75,.77,.8]:[.08,.08,.08],l.water?.4:.7,.5,2,.1)}this.smoke.update(t,o),this.fire.update(t,o*.5),this.sparks.update(t,0),this.flash=Math.max(0,this.flash-t*2.2),this.shake=Math.max(0,this.shake-t*.7),this.haze=Math.max(0,this.haze-t*.4)}};var wl="varying vec2 vUv; void main(){ vUv = position.xy * 0.5 + 0.5; gl_Position = vec4(position.xy, 0.0, 1.0); }",Lx=`
uniform sampler2D tSrc; uniform vec2 uTexel; uniform float uThreshold; varying vec2 vUv;
void main(){
  vec3 c = texture2D(tSrc, vUv + uTexel * vec2(-1.0,-1.0)).rgb + texture2D(tSrc, vUv + uTexel * vec2(1.0,-1.0)).rgb
         + texture2D(tSrc, vUv + uTexel * vec2(-1.0,1.0)).rgb + texture2D(tSrc, vUv + uTexel * vec2(1.0,1.0)).rgb;
  c *= 0.25;
  float b = max(c.r, max(c.g, c.b));
  float k = smoothstep(uThreshold, uThreshold + 0.6, b);
  gl_FragColor = vec4(min(c * k, vec3(24.0)), 1.0);
}`,Dx=`
uniform sampler2D tSrc; uniform vec2 uDir; varying vec2 vUv;
void main(){
  vec3 c = texture2D(tSrc, vUv).rgb * 0.2270270270;
  vec2 o1 = uDir * 1.3846153846, o2 = uDir * 3.2307692308;
  c += (texture2D(tSrc, vUv + o1).rgb + texture2D(tSrc, vUv - o1).rgb) * 0.3162162162;
  c += (texture2D(tSrc, vUv + o2).rgb + texture2D(tSrc, vUv - o2).rgb) * 0.0702702703;
  gl_FragColor = vec4(c, 1.0);
}`,Nx=`uniform sampler2D tSrc; uniform vec2 uTexel; varying vec2 vUv;
void main(){ vec3 c = texture2D(tSrc, vUv + uTexel*vec2(-0.5,-0.5)).rgb + texture2D(tSrc, vUv + uTexel*vec2(0.5,-0.5)).rgb + texture2D(tSrc, vUv + uTexel*vec2(-0.5,0.5)).rgb + texture2D(tSrc, vUv + uTexel*vec2(0.5,0.5)).rgb; gl_FragColor = vec4(c*0.25,1.0); }`,Ux=`
uniform sampler2D tScene, tB1, tB2, tB3;
uniform float uBloom, uChroma, uVig, uTime, uGrain, uExposure, uFlashA, uSlow, uLevels, uRadial, uAspect, uSat;
uniform vec3 uFlash, uTint; uniform vec2 uRes; uniform vec4 uHaze; uniform float uHazeA, uBars, uShock; uniform vec2 uShockP; uniform sampler2D tNoise;
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
  if (uBars > 0.001) { float b = uBars * 0.11; col *= step(b, vUv.y) * step(vUv.y, 1.0 - b); }
  col += (hash(uv * uRes + fract(uTime) * 100.0) - 0.5) * uGrain;
  gl_FragColor = vec4(col, 1.0);
}`,Tl=class{constructor(t){this.r=t;let e=t.getContext(),i=t.extensions;this.hdr=!!(i.has("EXT_color_buffer_half_float")||i.has("EXT_color_buffer_float")),this.type=this.hdr?mi:ei,this.levels=3,this.samples=4,this.radial=!0,this.scene=new on,this.cam=new Rn(-1,1,1,-1,0,1);let n=new ve;n.setAttribute("position",new Qt([-1,-1,0,3,-1,0,-1,3,0],3)),this.quad=new mt(n,null),this.quad.frustumCulled=!1,this.scene.add(this.quad),this.mBright=new re({vertexShader:wl,fragmentShader:Lx,depthTest:!1,depthWrite:!1,uniforms:{tSrc:{value:null},uTexel:{value:new at},uThreshold:{value:this.hdr?1:.72}}}),this.mBlur=new re({vertexShader:wl,fragmentShader:Dx,depthTest:!1,depthWrite:!1,uniforms:{tSrc:{value:null},uDir:{value:new at}}}),this.mCopy=new re({vertexShader:wl,fragmentShader:Nx,depthTest:!1,depthWrite:!1,uniforms:{tSrc:{value:null},uTexel:{value:new at}}}),this.u={tScene:{value:null},tB1:{value:null},tB2:{value:null},tB3:{value:null},uBloom:{value:.9},uChroma:{value:0},uVig:{value:.75},uTime:{value:0},uGrain:{value:.025},uExposure:{value:1},uFlashA:{value:0},uFlash:{value:new ft(1,1,1)},uSlow:{value:0},uTint:{value:new ft(1,.92,.8)},uLevels:{value:3},uRadial:{value:0},uAspect:{value:1},uRes:{value:new at(1,1)},uSat:{value:1},uHaze:{value:new Me(.5,.3,.1,.1)},uHazeA:{value:0},uBars:{value:0},uShock:{value:0},uShockP:{value:new at(.5,.5)},tNoise:{value:null}},this.mComp=new re({vertexShader:wl,fragmentShader:Ux,depthTest:!1,depthWrite:!1,uniforms:this.u,defines:{RADIAL:1}}),this.rtScene=null,this.rtA=[],this.rtB=[],this.w=1,this.h=1}configure({levels:t,samples:e,radial:i}){let n=t!==this.levels||e!==this.samples||i!==this.radial;this.levels=t,this.samples=e,i!==this.radial&&(this.radial=i,i?this.mComp.defines.RADIAL=1:delete this.mComp.defines.RADIAL,this.mComp.needsUpdate=!0),n&&this._alloc()}setSize(t,e){this.w=Math.max(1,Math.floor(t)),this.h=Math.max(1,Math.floor(e)),this._alloc()}_alloc(){let{w:t,h:e}=this;this.rtScene&&this.rtScene.dispose(),this.rtA.forEach(r=>r.dispose()),this.rtB.forEach(r=>r.dispose()),this.rtScene=new $e(t,e,{type:this.type,samples:this.samples,depthBuffer:!0,stencilBuffer:!1,minFilter:Pe,magFilter:Pe}),this.rtA=[],this.rtB=[];let i=t,n=e;for(let r=0;r<3;r++){i=Math.max(1,Math.floor(i/(r===0?4:2))),n=Math.max(1,Math.floor(n/(r===0?4:2)));let a={type:this.type,depthBuffer:!1,minFilter:Pe,magFilter:Pe};this.rtA.push(new $e(i,n,a)),this.rtB.push(new $e(i,n,a))}this.u.uRes.value.set(t,e),this.u.uAspect.value=t/e}_pass(t,e){this.quad.material=t,this.r.setRenderTarget(e),this.r.render(this.scene,this.cam)}render(t,e,i){let n=this.r;n.setRenderTarget(this.rtScene),n.render(t,e);let r=this.levels;if(r>0){this.mBright.uniforms.tSrc.value=this.rtScene.texture,this.mBright.uniforms.uTexel.value.set(1/this.w,1/this.h),this._pass(this.mBright,this.rtA[0]);for(let a=0;a<r;a++){let o=this.rtA[a],c=this.rtB[a];a>0&&(this.mCopy.uniforms.tSrc.value=this.rtA[a-1].texture,this.mCopy.uniforms.uTexel.value.set(1/this.rtA[a-1].width,1/this.rtA[a-1].height),this._pass(this.mCopy,o)),this.mBlur.uniforms.tSrc.value=o.texture,this.mBlur.uniforms.uDir.value.set(1/o.width,0),this._pass(this.mBlur,c),this.mBlur.uniforms.tSrc.value=c.texture,this.mBlur.uniforms.uDir.value.set(0,1/o.height),this._pass(this.mBlur,o)}}this.u.tScene.value=this.rtScene.texture,this.u.tB1.value=this.rtA[0].texture,this.u.tB2.value=this.rtA[1].texture,this.u.tB3.value=this.rtA[2].texture,this.u.uLevels.value=r,this.u.uTime.value=i,this._pass(this.mComp,null)}};var Ae=(s,t,e)=>new P(s,t,e),Ib=Ae(0,Rt.armH,0),Fx=(s,t,e,i)=>s+(t-s)*(1-Math.exp(-e*i)),ia=(s,t,e,i)=>s.lerp(t,1-Math.exp(-e*i)),El=class{constructor(t){this.cam=t,this.mode="auto",this.shot="chase",this.shotT=0,this.lastShot="",this.off=Ae(30,20,140),this.look=Ae(0,60,0),this.pos=Ae(0,60,200),this.fov=60,this.inputSign=1,this.t=0,this.orbit=0,this.cutFlag=!1,this.shake=0,this.aspect=.46,this.beachIdx=0,this.ground=Ae(-34,2.2,42),this.armCam=Ae(Rt.pivotX+1,Rt.armH+1.5,Rt.pivotZ+30)}setMode(t){this.mode=t,this.cut()}cut(){this.cutFlag=!0,this.shotT=0}direct(t,e,i){let n=t.y,r=t.bottomY(),a="chase";return i.title?"title":i.attract&&t.phase!=="crashed"&&t.phase!=="caught"&&t.phase!=="done"?n>2600?"beach":r>Rt.armH+260?"sideup":"final":t.phase==="crashed"?this.shot==="crashwide"||this.shot==="chase"?this.shotT>2.2?"crashwide":this.shot:"crashwide":t.phase==="caught"||t.phase==="done"?this.shotT>3.5&&this.shot==="catchwide"||this.shot==="orbit"?"orbit":"catchwide":(t.phase==="sep"||t.phase==="boost"?a="chase":t.phase==="coast"?a=this.shotT>7&&this.shot==="chase"||this.shot==="drone"&&this.shotT<6?"drone":"chase":n>3500?a="chase":n>1400?a=this.shot==="beach"&&this.shotT<4.5?"beach":this.shot==="beach"?"chase":this.lastShot!=="beach"&&this.shot==="chase"&&this.shotT>2.5?"beach":"chase":r>Rt.armH+120?a=this.shot==="sideup"&&this.shotT<4.5||this.shot==="chase"&&this.shotT>3&&this.lastShot!=="sideup"?"sideup":"final":a="final",a)}update(t,e,i={}){this.t+=t,this.shotT+=t;let n=this.cam,r=this.mode,a=r==="auto"?this.direct(e,t,i):r;i.title&&(a="title"),i.replay&&(a=i.replayShot||"chase"),a!==this.shot&&(this.lastShot=this.shot,this.shot=a,this.shotT=0,this.cutFlag=!0);let o=this.cutFlag;this.cutFlag=!1;let c=Ae(e.x,e.y,0),l=Ae(e.vx,e.vy,0),u=l.length(),f=Ae(),h=Ae(),d=60,m=x=>x/Math.min(1,Math.max(.4,this.aspect*1.6)),v=e.V.len,g=Ae(e.x+Math.sin(e.th)*(v*.5-e.V.cg),e.y+Math.cos(e.th)*(v*.5-e.V.cg),0);switch(a){case"title":{this.orbit+=t*.06;let x=120+Math.sin(this.t*.07)*25,S=this.orbit+.4;f.set(Math.sin(S)*x,40+Math.sin(this.t*.11)*25+30,Math.cos(S)*x),h.set(0,92+Math.sin(this.t*.09)*10,-8),d=m(48);break}case"chase":{let S=e.y>2500?150+Math.min(120,u*.12):120;e.ship&&(S*=1.1);let w=u>1?l.clone().divideScalar(u):Ae(0,-1,0),A=Ae(w.x*-S*.35+18,w.y*-S*.35+10,S);(e.phase==="sep"||e.phase==="boost")&&A.set(-60,30,S*.9),o?this.off.copy(A):ia(this.off,A,1.5,t),f.copy(c).add(this.off),h.copy(g),d=m(52);break}case"drone":{this.orbit+=t*.18;let x=95,S=Ae(Math.sin(this.orbit)*x,25+Math.sin(this.t*.3)*15,Math.cos(this.orbit)*x);o?this.off.copy(S):ia(this.off,S,2,t),f.copy(c).add(this.off),h.copy(g),d=m(55);break}case"final":{let x=Math.max(0,e.bottomY()-Rt.armH),S=be.clamp(1-x/900,0,1),w=be.lerp(120,150,S)+Math.min(260,x*.25),A=Ae(e.x*.55+46,be.lerp(e.y-10,Rt.armH*.55,S*.6),w);A.y=Math.max(A.y,12),o?this.pos.copy(A):ia(this.pos,A,1.6,t),f.copy(this.pos);let _=g.clone().lerp(Ae(0,Rt.armH-10,-10),S*.45);o?this.look.copy(_):ia(this.look,_,3,t),h.copy(this.look);let T=f.distanceTo(h),R=Math.max(90,Math.abs(g.y-Rt.armH)*1.1+90+Math.abs(e.x)*.8);d=be.clamp(2*Math.atan(R/2/T)*180/Math.PI,30,70),d=m(d*.85);break}case"tower":{f.set(-8,Rt.height+6,Rt.cz+12),h.copy(g);let x=f.distanceTo(h),S=v*2.6+40;d=be.clamp(2*Math.atan(S/2/x)*180/Math.PI,3,75);break}case"sideup":{f.set(-170,7,300),h.copy(g).addScaledVector(Ae(0,-1,0),v*.25);let x=f.distanceTo(g),S=v*3.4;d=be.clamp(2*Math.atan(S/2/x)*180/Math.PI,6,55),d=m(d);break}case"beach":{f.set(690,1.8,2200),h.copy(g);let x=f.distanceTo(h),S=Math.max(v*2.2,60)+(e.y<800?e.y*.6:0);d=be.clamp(2*Math.atan(S/2/x)*180/Math.PI,1,40),d=m(d);break}case"arm":{f.copy(this.armCam),h.copy(g);let x=f.distanceTo(h);d=be.clamp(2*Math.atan((v*1.4+30)/2/x)*180/Math.PI,8,80);break}case"ground":{f.copy(this.ground),h.copy(g);let x=f.distanceTo(h);d=be.clamp(2*Math.atan((v*1.5+40)/2/x)*180/Math.PI,4,80);break}case"onboard":{let x=Ae(Math.sin(e.th),Math.cos(e.th),0),S=Ae(Math.cos(e.th),-Math.sin(e.th),0);f.copy(c).addScaledVector(x,v-e.V.cg-8).addScaledVector(S,e.V.r+1.6).add(Ae(0,0,1.2)),h.copy(f).addScaledVector(x,-60).addScaledVector(S,2.5),d=m(78);break}case"catchwide":{let x=Ae(70,70,120);f.copy(x),h.set(0,Rt.armH-22,-10),d=m(50);break}case"orbit":{this.orbit+=t*.12;let x=105;f.set(Math.sin(this.orbit+.6)*x,72+Math.sin(this.t*.2)*15,Math.cos(this.orbit+.6)*x),h.set(0,Rt.armH-25,-12),d=m(52);break}case"crashwide":{let x=e.crash||{x:e.x,y:e.y},S=Ae(x.x+140,Math.max(25,Math.min(x.y,300)*.5+30),230);o?this.pos.copy(S):ia(this.pos,S,.8,t),f.copy(this.pos),h.set(x.x,Math.max(10,Math.min(x.y,260)*.6),0),d=m(55);break}case"replay-arm":{f.set(Rt.pivotX+3,Rt.armH-6,22),h.copy(g),d=60;break}case"replay-low":{f.set(28,6,60),h.copy(g),h.y-=6,d=m(46);break}case"replay-orbit":{this.orbit+=t*.25;let x=70;f.set(e.x+Math.sin(this.orbit)*x,e.y-8,Math.cos(this.orbit)*x),h.copy(g),d=m(56);break}default:f.copy(c).add(Ae(30,20,150)),h.copy(c)}f.y=Math.max(f.y,f.x>720?.8:2);let p=this.shake*1;if(p>.001){let x=p*(.25+f.distanceTo(h)*.004);f.x+=(Math.random()-.5)*x,f.y+=(Math.random()-.5)*x,h.x+=(Math.random()-.5)*x*.6,h.y+=(Math.random()-.5)*x*.6}n.position.copy(f),n.up.set(0,1,0),n.lookAt(h),o?this.fov=d:this.fov=Fx(this.fov,d,3,t),n.fov=this.fov;let M=f.distanceTo(h);n.near=be.clamp(M*.012,.25,40),n.far=42e4,n.updateProjectionMatrix();let y=Ae(1,0,0).applyQuaternion(n.quaternion);return this.inputSign=y.x>=-.05?1:-1,a}};var Bx=["t","x","y","vx","vy","th","thr","T","finAct","heat","mach","q","wind","aphi","ay","fuel"],On=Bx.length,Wd=["sep","boost","coast","entry","land","caught","done","crashed"],Xd=["off","big","small"],Al=class{constructor(t=900){this.cap=t,this.reset(null)}reset(t){this.n=0,this.head=0,this.last=-1,this.ne=t?t.eng.length:33,this.f=new Float32Array(this.cap*On),this.e=new Uint8Array(this.cap*this.ne*2),this.p=new Uint8Array(this.cap*2),this.eventT=null,this.sim=t}record(t){if(t.t-this.last<1/30-1e-6)return;this.last=t.t;let e=this.head,i=e*On,n=this.f;n[i]=t.t,n[i+1]=t.x,n[i+2]=t.y,n[i+3]=t.vx,n[i+4]=t.vy,n[i+5]=t.th,n[i+6]=t.thr,n[i+7]=t.T,n[i+8]=t.finAct,n[i+9]=t.heat,n[i+10]=t.mach,n[i+11]=t.q,n[i+12]=t.wind,n[i+13]=t.arms.phi,n[i+14]=t.arms.y,n[i+15]=t.fuel;let r=e*this.ne*2;for(let a=0;a<this.ne;a++){let o=t.eng[a];this.e[r+a*2]=o.st,this.e[r+a*2+1]=Math.round(o.sp*255)}this.p[e*2]=Math.max(0,Wd.indexOf(t.phase)),this.p[e*2+1]=Math.max(0,Xd.indexOf(t.mode)),this.head=(this.head+1)%this.cap,this.n=Math.min(this.cap,this.n+1)}idx(t){return(this.head-this.n+t+this.cap)%this.cap}get t0(){return this.n?this.f[this.idx(0)*On]:0}get t1(){return this.n?this.f[this.idx(this.n-1)*On]:0}},Rl=class{constructor(t,e){this.rec=t,this.src=e,this.V=e.V,this.ship=e.ship,this.T0=e.T0,this.eng=e.eng.map(i=>({i:i.i,x:i.x,z:i.z,g:i.g,st:0,sp:0})),this.arms={phi:bi,tgt:bi,y:Rt.armH,vy:0,p:0,reopenAt:-1},this.crash=null,this.caught=e.caught,this.events=[],this.j=0,this.reserve=e.reserve,this.fuel0=e.fuel0,this.landUnlocked=!0,this.timeScale=1,this.om=0,this.seek(t.t0)}seek(t){let e=this.rec,i=this.j;for((i>=e.n-1||e.f[e.idx(i)*On]>t)&&(i=0);i<e.n-2&&e.f[e.idx(i+1)*On]<=t;)i++;this.j=i;let n=e.idx(i)*On,r=e.idx(Math.min(e.n-1,i+1))*On,a=e.f[n],o=e.f[r],c=o>a?Math.max(0,Math.min(1,(t-a)/(o-a))):0,l=h=>e.f[n+h]+(e.f[r+h]-e.f[n+h])*c;this.t=t,this.x=l(1),this.y=l(2),this.vx=l(3),this.vy=l(4),this.th=l(5),this.thr=l(6),this.T=l(7),this.finAct=l(8),this.heat=l(9),this.mach=l(10),this.q=l(11),this.wind=l(12),this.arms.phi=l(13),this.arms.y=l(14),this.fuel=l(15),this.arms.p=(bi-this.arms.phi)/(bi-Li);let u=e.idx(c<.5?i:Math.min(e.n-1,i+1)),f=u*e.ne*2;for(let h=0;h<this.eng.length;h++)this.eng[h].st=e.e[f+h*2],this.eng[h].sp=e.e[f+h*2+1]/255;this.phase=Wd[e.p[u*2]],this.mode=Xd[e.p[u*2+1]],this.phase==="crashed"&&this.src.crash?this.crash=this.src.crash:this.phase!=="crashed"&&(this.crash=null)}bottomY(){return this.y-this.V.cg*Math.cos(this.th)}bottomX(){return this.x-this.V.cg*Math.sin(this.th)}pinY(){return this.y+(this.V.pin-this.V.cg)*Math.cos(this.th)}speed(){return Math.hypot(this.vx,this.vy)}};var Cl="chopstix.save";function Js(){return{v:2,created:Date.now(),missions:{},stats:{catches:0,crashes:0,explosions:0,flights:0,perfect:0,streak:0,bestStreak:0,playTime:0,fuelSaved:0},ach:{},sel:{livery:"steel",variant:"b1",camera:"auto"},settings:{quality:"auto",autoFps:!0,music:.6,sfx:.9,voice:!1,muted:!1,control:"stick",sens:1,assist:"normal",autoClose:!0,autoCam:!0,haptics:!0,shake:!0,units:"metric"},tutorialDone:!1,seen:{}}}var Ox={1:s=>{let t=Js(),e=s.stars||{};for(let i of Object.keys(e)){let n=parseInt(i,10);n&&(t.missions[n]={stars:Math.max(0,Math.min(3,e[i]|0)),grade:null,best:(s.best&&s.best[i])|0,time:null,done:(e[i]|0)>0,attempts:0,catches:(e[i]|0)>0?1:0})}return s.sound===!1&&(t.settings.muted=!0),s.livery&&(t.sel.livery=s.livery),t.stats.catches=s.catches|0,t.tutorialDone=!!s.tutorialDone||Object.keys(e).length>0,t.created=s.created||Date.now(),t}};function Yd(s,t){if(t===null||typeof t!="object"||Array.isArray(t))return t===void 0?s:t;let e={...s};for(let i of Object.keys(t)){let n=s?s[i]:void 0;n&&typeof n=="object"&&!Array.isArray(n)&&t[i]&&typeof t[i]=="object"&&!Array.isArray(t[i])?e[i]=Yd(n,t[i]):t[i]!==void 0&&(e[i]=t[i])}return e}function $d(){let s=null;try{s=localStorage.getItem(Cl)}catch{}if(!s)try{s=localStorage.getItem("chopstix")}catch{}if(!s)return Js();let t;try{t=JSON.parse(s)}catch{try{localStorage.setItem(Cl+".corrupt",s)}catch{}return Js()}let e=t.v||t.version||1;if(e<2){try{localStorage.setItem(Cl+".bak.v"+e,s)}catch{}for(;e<2;){let n=Ox[e];if(!n)break;t=n(t),e=t.v=e+1}}let i=Yd(Js(),t);return e<=2&&(i.v=2),i}var qd=0;function Ni(s){try{return localStorage.setItem(Cl,JSON.stringify(s)),!0}catch{return!1}}function Ki(s){clearTimeout(qd),qd=setTimeout(()=>Ni(s),200)}function kn(s){let t=0;for(let e of Object.keys(s.missions))t+=s.missions[e].stars|0;return t}var Zd=[{pr:2,samples:4,levels:3,radial:!0,shadow:2048},{pr:1.6,samples:0,levels:3,radial:!0,shadow:2048},{pr:1.35,samples:0,levels:2,radial:!1,shadow:1024},{pr:1.1,samples:0,levels:2,radial:!1,shadow:1024},{pr:.85,samples:0,levels:1,radial:!1,shadow:0}],kx=["Perfekt","Gut","Hart","Fehlgeschlagen"],zx={auto:"Regie",chase:"Verfolger",drone:"Drohne",tower:"Turm-Kamera",beach:"Strand",arm:"Arm-Kamera",ground:"Bodenkamera",onboard:"Bordkamera"},Il=/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)||navigator.maxTouchPoints>1&&/Macintosh/.test(navigator.userAgent),Sh=class extends Un{control(t,e){super.control(t,e),(t.phase==="land"||t.phase==="entry")&&t.bottomY()<700&&(t.input.thr=0,t.input.aCmd=0)}},Pl=class{constructor(t,e){this.app=e,this.canvas=t,this.save=e.save,this.test=!!e.test;let i=this.save.settings.quality;this.qName=i==="auto"?Il?"med":"high":i,this.test&&(this.qName=e.testQuality||"med");let n=new cl({canvas:t,antialias:!1,alpha:!1,stencil:!1,depth:!0,powerPreference:"high-performance",preserveDrawingBuffer:this.test});n.outputColorSpace=Yn,n.toneMapping=pi,n.setClearColor(0,1),n.shadowMap.enabled=this.qName!=="low",n.shadowMap.type=jn,this.renderer=n,this.scene=new on,this.camera=new qe(55,.46,.5,42e4),this.world=new vl(n,this.scene,{quality:this.qName}),this.site=new yl(this.scene,{quality:this.qName}),this.fx=new Sl(this.scene,this.world,{quality:this.qName}),this.post=new Tl(n),this.post.u.tNoise.value=qs(),this.rig=new El(this.camera),this.rec=new Al(900),this.buildGuides(),this.quality={tier:i==="high"?0:i==="med"?2:i==="low"?4:Il?1:0,auto:i==="auto"&&this.save.settings.autoFps!==!1,acc:0,n:0,cool:3,good:0,downs:0},this.test&&(this.quality.tier=3,this.quality.auto=!1),this.fps=60,this.frameTimes=[],this.time=0,this.state="title",this.paused=!1,this.banner(null),this.sim=null,this.vehicle=null,this.g={},this.extScale=1,this.manual=!1,this.camMode=this.save.sel.camera||"auto",this.tmp=new P,this.tmp2=new P,this.lastFin=0,this.predT=0,this.endT=0,this.attract(!0),this.warm()}warm(){let t=[];this.scene.traverse(e=>{e.visible||(t.push(e),e.visible=!0)});try{this.renderer.compile(this.scene,this.camera)}catch{}for(let e of t)e.visible=!1}buildGuides(){this.pathN=90,this.pathPts=new Float32Array(270);let e=new ve;e.setAttribute("position",new Be(new Float32Array(270),3)),e.setAttribute("aI",new Be(new Float32Array(90).map((r,a)=>a/90),1)),this.pathMat=new re({transparent:!0,depthWrite:!1,depthTest:!0,blending:Ve,uniforms:{uCol:{value:new ft(.35,.85,1.4)},uPx:{value:7},uA:{value:1}},vertexShader:"attribute float aI; uniform float uPx; varying float vA; void main(){ vec4 mv = modelViewMatrix * vec4(position,1.0); gl_Position = projectionMatrix * mv; gl_PointSize = uPx * (1.0 - aI * 0.5); vA = 1.0 - aI; }",fragmentShader:"uniform vec3 uCol; uniform float uA; varying float vA; void main(){ vec2 d = gl_PointCoord - 0.5; float r = dot(d,d); if (r > 0.25) discard; gl_FragColor = vec4(uCol * smoothstep(0.25, 0.05, r) * vA * uA, 1.0); }"}),this.path=new Zn(e,this.pathMat),this.path.frustumCulled=!1,this.path.renderOrder=9,this.path.visible=!1,this.scene.add(this.path);let i=new Ii(3.2,4.2,40);this.markMat=new Hi({color:new ft(.4,1.2,1.6),transparent:!0,opacity:.9,blending:Ve,depthWrite:!1,side:ke}),this.mark=new mt(i,this.markMat),this.mark.rotation.x=-Math.PI/2,this.mark.visible=!1,this.mark.renderOrder=9,this.scene.add(this.mark);let n=new Le(9.2,2.2);this.gateMat=new Hi({color:new ft(.2,1.4,.6),transparent:!0,opacity:0,blending:Ve,depthWrite:!1,side:ke,map:(()=>{let r=document.createElement("canvas");r.width=128,r.height=32;let a=r.getContext("2d"),o=a.createLinearGradient(0,0,0,32);return o.addColorStop(0,"rgba(255,255,255,0)"),o.addColorStop(.5,"rgba(255,255,255,0.8)"),o.addColorStop(1,"rgba(255,255,255,0)"),a.fillStyle=o,a.fillRect(0,0,128,32),a.clearRect(14,0,100,32),a.fillStyle="rgba(255,255,255,0.18)",a.fillRect(14,14,100,4),new un(r)})()}),this.gate=new mt(n,this.gateMat),this.gate.position.set(0,Rt.armH+1.6,0),this.gate.visible=!1,this.gate.renderOrder=9,this.scene.add(this.gate)}resize(t,e){this.w=t,this.h=e,this.camera.aspect=t/e,this.rig.aspect=t/e,this.camera.updateProjectionMatrix(),this.applyQuality()}setQualityMode(t){let e=this.quality;e.auto=t==="auto"&&this.save.settings.autoFps!==!1,e.tier=t==="high"?0:t==="med"?2:t==="low"?4:Il?1:0,e.downs=0,e.good=0,e.cool=2,this.applyQuality()}applyQuality(){if(!this.w)return;let t=Zd[this.quality.tier],e=window.devicePixelRatio||1,i=Math.min(e,t.pr);this.pr=i,this.renderer.setPixelRatio(1),this.renderer.setSize(this.w,this.h,!1),this.canvas.width=Math.floor(this.w*i),this.canvas.height=Math.floor(this.h*i),this.renderer.setViewport(0,0,this.canvas.width,this.canvas.height),this.post.configure({levels:t.levels,samples:t.samples,radial:t.radial}),this.post.setSize(this.canvas.width,this.canvas.height),this.site.pxH=this.canvas.height,this.pathMat.uniforms.uPx.value=7*i;let n=this.world.sun,r=t.shadow>0&&this.qName!=="low";this.renderer.shadowMap.enabled=r,n.shadow&&n.shadow.mapSize.x!==t.shadow&&t.shadow>0&&(n.shadow.mapSize.set(t.shadow,t.shadow),n.shadow.map&&(n.shadow.map.dispose(),n.shadow.map=null)),this.post.u.uGrain.value=.02}monitor(t){let e=this.quality;if(!(t>.1||document.hidden)&&(e.acc+=t,e.n++,e.cool-=t,e.acc>=1.5)){let i=e.acc/e.n;if(e.acc=0,e.n=0,this.fps=1/i,!e.auto||this.test||e.cool>0)return;i>.0185&&e.tier<Zd.length-1?(e.tier++,e.downs++,e.good=0,e.cool=2.5,this.applyQuality()):i<.0135&&e.tier>(Il?1:0)&&e.downs<3&&(e.good+=1.5,e.good>9&&(e.tier--,e.good=0,e.cool=3,this.applyQuality()))}}setVehicle(t){let e=this.save.sel;this.vehicle&&(this.scene.remove(this.vehicle.group),this.vehicle.dispose()),this.vehicle=new Ml(t,{livery:e.livery,variant:t==="booster"?e.variant:null,quality:this.qName}),this.scene.add(this.vehicle.group),this.fx.attach(this.vehicle)}setTod(t,e){this.world.setTod(t,e),this.site.setNight(t==="night",t==="dusk"||t==="storm"||t==="dawn");let i=this.world.sun,n=this.world.hemi,r=i.color.clone().multiplyScalar(Math.min(1.3,i.intensity*.32)),a=n.color.clone().multiplyScalar(n.intensity*.45);t==="night"&&(r.multiplyScalar(.5),a.multiplyScalar(.6)),this.fx.setLighting(r,a)}makeSim(t,e){let i=this.vehicle.V,n=new ml(t,Object.assign({},e));return n.V.key==="booster"&&(n.V.len=i.len,n.V.pin=i.pin,n.V.cg=i.cg,n.prevPinY=n.pinY()),n}attract(t){this.state="title",this.paused=!1,this.banner(null);let e=["dusk","night","day","afternoon"];this.attractIdx=t?0:(this.attractIdx+1)%e.length;let i=Object.assign({},gi[0],{tod:e[this.attractIdx],seed:4242+this.attractIdx,wind:{base:2,dir:-1,gust:.5}});this.setVehicle("booster"),this.setTod(i.tod,i),this.mission=i,this.sim=this.makeSim(i,{assist:"normal"}),this.sim.auto=new Un;for(let n=0;n<6e3&&this.sim.y>(t?1500:2400)&&this.sim.phase!=="crashed";n++)this.sim.update(1/30,1);this.sim.events.length=0,this.fx.reset(),this.rec.reset(this.sim),this.rig.setMode("auto"),this.rig.cut(),this.endT=0,this.app.hud.show(!1),this.app.input.enabled=!1,this.path.visible=!1,this.mark.visible=!1,this.gate.visible=!1,this.app.audio&&this.app.audio.setMode(this.app.ui&&this.app.ui.screen!=="title"?"menu":"title")}startMission(t,e={}){let i=gi.find(l=>l.id===t)||gi[0],n=this.save.settings;this.mission=i,this.opts=e;let r=e.assist||n.assist;this.assist=r,this.setVehicle(i.vehicle),this.setTod(i.tod,i),this._warmV!==i.vehicle&&(this._warmV=i.vehicle,this.warm()),this.sim=this.makeSim(i,{assist:r,autoClose:n.autoClose}),e.auto&&(this.sim.auto=e.crash?new Sh:new Un),this.fx.reset(),this.rec.reset(this.sim),this.state="flight",this.paused=!1,this.endT=0,this.replayDone=!1,this.lastFin=0,this.predT=0,this.g={},this.camMode=this.save.sel.camera||"auto",this.isCamUnlocked(this.camMode)||(this.camMode="auto"),this.rig.setMode(this.camMode),this.rig.cut();let a=this.app.hud;a.setMission(i,r),a.buildEngines(this.sim.V),a.show(!0),this._hudHidden=!1,this.banner(null);let o=this.app.input;o.reset(),o.enabled=!e.auto,o.mode=n.control,o.sens=n.sens;let c=this.app.audio;c.setMode("flight"),c.setTension(.2),this.save.stats.flights++,Ki(this.save),this.flightStart=performance.now(),this.result=null,this.app.ui.onFlightStart&&this.app.ui.onFlightStart()}isCamUnlocked(t){let e=Ws.find(n=>n.id===t);if(!e)return!1;if(!e.req)return!0;let i=this.save.missions[e.req.mission];return!!(i&&i.done)}cycleCamera(){let t=Ws.filter(i=>this.isCamUnlocked(i.id)).map(i=>i.id),e=t.indexOf(this.camMode);this.camMode=t[(e+1)%t.length],this.rig.setMode(this.camMode),this.app.hud.showCam(zx[this.camMode]||this.camMode),this.save.sel.camera=this.camMode,Ki(this.save),this.app.audio.ui("tap")}setCamera(t){this.camMode=t,this.rig.setMode(t)}pause(t){this.state!=="flight"&&this.state!=="replay"||(this.paused=t,this.app.input.enabled=!t&&this.state==="flight"&&!(this.sim&&this.sim.auto),t?(this.app.audio.silenceSfx(),this.app.audio.setMode("menu")):this.app.audio.setMode(this.state==="flight"?"flight":"silent"))}quitToTitle(){this.attract(!1)}closeArms(){if(this.state!=="flight"||!this.sim)return;this.sim.requestClose()||this.app.audio.ui("back")}handleEvents(t,e){let i=this.app.audio,n=this.app.hud;for(let r of t.events)switch(r.type){case"callout":e&&(n.callout(r.text,r.kind),r.speak&&i.say(r.text));break;case"ignite":i.ignite(),this.rig.shake=Math.max(this.rig.shake,.35);break;case"shutdown":i.shutdown();break;case"switch":i.shutdown();break;case"sonic":i.boom(),this.rig.shake=Math.max(this.rig.shake,.6),this.post.u.uShock.value=.6,this.shockP="veh";break;case"armsClose":i.hydraulics(Rt.closeTime),this.haptic(10);break;case"armsOpen":i.hydraulics(.7);break;case"armTouch":i.clunk(.8);break;case"miss":i.alarm(),this.haptic(30);break;case"engineFail":i.fail(),r.hard&&(this.rig.shake=Math.max(this.rig.shake,.5));break;case"contact":i.contact(r.grade),this.rig.shake=Math.max(this.rig.shake,.6+r.vy*.15),this.haptic(40),setTimeout(()=>i.cheer(),500);break;case"crash":this.onCrash(r,e);break}t.events.length=0}onCrash(t,e){let i=this.app.audio,n=Math.min(1.3,.45+t.sp/90+t.fuel/14e4);this.fx.explode(t,n,t.water),t.water?(i.splash(),i.explosion(n*.6)):i.explosion(n),i.gasp(),this.haptic(80),this.post.u.uShock.value=1,this.shockP="crash",e&&this.save.stats.explosions++}haptic(t){try{this.save.settings.haptics&&navigator.vibrate&&navigator.vibrate(t)}catch{}}frame(t){this.time+=t;let e=this.sim,i=this.app;this.state==="title"?this.updateTitle(t):this.state==="flight"?this.updateFlight(t):this.state==="replay"?this.updateReplay(t):this.state==="result"&&this.updateAfter(t),this.render(t)}updateTitle(t){let e=this.sim;e.update(t,1),this.handleEvents(e,!1),(e.phase==="done"||e.phase==="crashed")&&(this.endT+=t,this.endT>9&&this.attract(!1)),this.view(t,e,{attract:!0}),this.app.audio.update(this.audioParams(e,.35))}updateFlight(t){let e=this.sim,i=this.app;if(!this.paused){let n=i.input;if(n.update(t),e.auto||(e.setInput(n.u*this.rig.inputSign,n.thr),e.input.aCmd=null,n.thr<.05&&(e.input.small=!1)),this.predT-=t,!e.auto&&this.predT<=0&&(e.phase==="boost"||e.phase==="entry"||e.phase==="land"||e.phase==="coast"))this.predT=.25,e.mode==="off"||e.phase==="boost"?(e.pred=e.predict({pts:this.pathPts}),e.predPts=e.pred.n,e.phase!=="boost"&&e.phase!=="coast"&&(e.predL=e.predictLanding())):(e.pred=e.predict({pts:this.pathPts,thrust:!0,horizon:30}),e.predPts=e.pred.n);else if(e.auto&&this.predT<=0){this.predT=.25;let c=e.predict({pts:this.pathPts});e.predPts=c.n}this.g=yh(e,this.g),e.update(t,this.extScale),this.handleEvents(e,!0),this.rec.record(e);let r=e.finAct||0;e.gridfins&&e.q>2500&&Math.abs(r-this.lastFin)>.45&&(i.audio.fin(Math.min(1,e.q/3e4)),this.lastFin=r);let a=e.pinY()-Rt.armH,o=e.phase==="entry"?.3+.2*(1-Math.min(1,e.y/2e4)):e.phase==="land"?.55+.45*(1-Math.min(1,Math.max(0,a)/900)):e.phase==="boost"?.35:.2;if(i.audio.setTension(o),e.phase==="caught"||e.phase==="done"||e.phase==="crashed"){this.endT===0&&(i.input.enabled=!1,i.audio.setMode(e.phase==="crashed"?"fail":"success"),this.finish()),this.endT+=t,this.endT>1.4&&!this._hudHidden&&(this._hudHidden=!0,i.hud.show(!1)),this.endT>4&&this._ban&&this._ban.classList.contains("on")&&(this._ban.className=this._ban.className.replace("on","off"));let c=e.phase==="crashed"?4.2:4.6;this.endT>c&&!this.replayStarted&&this.afterFlight()}}this.view(t,e,{}),i.hud.update(e,this.g,{thrInput:e.auto?e.input.thr:i.input.thr,assist:this.assist,stick:i.input.stick,inputSign:this.rig.inputSign}),i.audio.update(this.audioParams(e,1))}afterFlight(){this.replayStarted=!0,this.test&&!this.opts.replay||this.app.save.settings.skipReplay||this.rec.n<30?this.showResult():this.startReplay()}view(t,e,i){let n=this.rig;n.shake=Math.max(n.shake*Math.exp(-t*3.2),this.fx.shake*(this.save.settings.shake===!1?.2:1)),this.fx.shake*=Math.exp(-t*2.5);let r=n.update(t,e,i);r!==this.lastShot&&(this.lastShot=r),this.vehicle.update(e,t,this.camera),this.vehicle.group.visible=!(e.phase==="crashed"&&this.state!=="title")||this.state==="title",e.phase==="crashed"&&(this.vehicle.group.visible=!1),this.site.update(e,t,this.time,this.camera);let a=t*(i.slow||1);this.fx.update(a,e,this.vehicle,this.camera,{onBoom:d=>{this.app.audio.explosion(d*.6),this.rig.shake=Math.max(this.rig.shake,.4)}}),this.world.update(t,this.camera,{velocity:this.tmp.set(e.vx,e.vy,0),wind:e.wind,focus:this.tmp2.set(e.x,e.y,0),light:{pos:this.fx.light.position,col:this._lc||(this._lc=new ft).setRGB(1,.55,.25).multiplyScalar(this.fx.lightLevel/13*3)}})&&setTimeout(()=>this.app.audio.boom(),700+Math.random()*1500);let c=this.state==="flight"&&this.assist!=="pro"&&!e.auto,l=(c||this.state==="flight"&&this.test&&e.auto)&&e.predPts>1&&(e.phase==="boost"||e.phase==="entry"||e.phase==="land"&&e.bottomY()>Rt.armH+60||e.phase==="coast");if(this.path.visible=l,l){let d=this.path.geometry.attributes.position.array,m=Math.min(this.pathN,e.predPts),v=Math.max(1,Math.floor(e.predPts/this.pathN));for(let M=0;M<this.pathN;M++){let y=Math.min(e.predPts-1,M*v);d[M*3]=this.pathPts[y*3],d[M*3+1]=this.pathPts[y*3+1]-(e.V.cg-2),d[M*3+2]=0}this.path.geometry.attributes.position.needsUpdate=!0,this.path.geometry.setDrawRange(0,Math.min(this.pathN,Math.ceil(e.predPts/v)));let g=e.phase==="boost"||e.phase==="coast"?e.pred.x:e.predL?e.predL.x:e.pred.x,p=Math.abs(g);this.pathMat.uniforms.uCol.value.setRGB(p<30?.3:1.4,p<30?1.4:p<300?1:.45,p<30?.6:.3)}let u=c&&e.pred&&(e.phase==="boost"||e.phase==="coast"||e.phase==="entry");if(this.mark.visible=!!u,u){let d=e.phase==="entry"&&e.predL?e.predL.x:e.pred.x;this.mark.position.set(d,Rt.armH+.3,0);let m=this.camera.position.distanceTo(this.mark.position);this.mark.scale.setScalar(Math.max(1,m/160))}let f=e.pinY()-Rt.armH,h=c&&e.phase==="land"&&f<400;if(this.gate.visible=!!h,h){let d=Math.abs(e.x)<1.1&&f<40;this.gateMat.color.setRGB(d?.25:1.4,d?1.5:.9,d?.6:.25),this.gateMat.opacity=.35+.25*Math.sin(this.time*6)}}audioParams(t,e){let i=this.camera.position,n=t.bottomX(),r=t.bottomY(),a=Math.hypot(i.x-n,i.y-r,i.z),o=t.T/(13*t.V.engT)*1.6;return{dist:a/Math.max(.2,e),thrust:Math.min(1,o),q:t.q,heat:t.heat,alt:t.y,onboard:this.rig.shot==="onboard",ground:i.y<200,crowd:(t.phase==="land"&&r<Rt.armH+600?.18:.03)*e,slow:this.state==="replay"}}render(t){let e=this.post.u;e.uExposure.value=(this.world.exposure||1)*(this.state==="replay"?1.02:1),e.uFlashA.value=Math.min(.85,this.fx.flash*.55+this.world.flash*.25),this.fx.flash*=Math.exp(-t*4),e.uFlash.value.setRGB(1,.86,.66);let i=this.sim;if(i&&i.T>0&&this.vehicle){let r=this.tmp.set(i.bottomX(),i.bottomY()-14,0).project(this.camera),a=r.z<1&&Math.abs(r.x)<1.5&&Math.abs(r.y)<1.5,o=this.camera.position.distanceTo(this.tmp),c=Math.min(.5,40/Math.max(10,o)/Math.tan(this.camera.fov*Math.PI/360));e.uHaze.value.set(r.x*.5+.5,r.y*.5+.5,c*.6/(this.camera.aspect||.5)*.5,c*.9),e.uHazeA.value=a?Math.min(1,i.T/15e6)*(i.y<3e3?1:.4):0}else e.uHazeA.value=Math.max(0,e.uHazeA.value-t*2);if(e.uShock.value>0){let a=(this.shockP==="crash"&&i&&i.crash?this.tmp.set(i.crash.x,Math.max(5,i.crash.by||i.crash.y),0):this.tmp.set(i?i.x:0,i?i.y:0,0)).project(this.camera);e.uShockP.value.set(a.x*.5+.5,a.y*.5+.5),e.uShock.value=Math.max(0,e.uShock.value-t*.9),a.z>1&&(e.uShock.value=0)}let n=this.state==="replay"?1:0;e.uSlow.value+=(n*.55-e.uSlow.value)*Math.min(1,t*3),e.uBars.value+=((this.state==="replay"?1:0)-e.uBars.value)*Math.min(1,t*3),e.uSat.value=this.state==="replay"?.92:1,e.uRadial.value=i&&i.heat>.3&&this.state==="flight"?Math.min(1,i.heat-.3):0,e.uVig.value=.65,this.post.render(this.scene,this.camera,this.time)}startReplay(){let t=this.sim,e=this.rec;this.state="replay";let i=t.crash?t.crash.t:t.caught?t.caught.t:e.t1;this.rpEv=i,this.rpStart=Math.max(e.t0,i-(t.crash?6.5:8)),this.rpEnd=Math.min(e.t1,i+(t.crash?3.5:2.6)),this.ghost=new Rl(e,t),this.ghost.seek(this.rpStart),this.rpT=this.rpStart,this.rpBoomed=!1,this.rpShot=0,this.fx.reset(),this.rig.cut(),this.app.hud.replay(!0,this.ghost,1),this.app.audio.setMode("silent"),this.app.ui.onReplay&&this.app.ui.onReplay(!0)}skipReplay(){this.state==="replay"&&this.endReplay()}endReplay(){if(this.app.hud.replay(!1),this.app.ui.onReplay&&this.app.ui.onReplay(!1),this.fx.reset(),this.sim.crash){this.fx.explode(this.sim.crash,.6,this.sim.crash.water),this.fx.flash=0,this.fx.shake=0,this.post.u.uShock.value=0;for(let t=0;t<90;t++)this.fx.update(1/30,this.sim,this.vehicle,this.camera,{});this.fx.pendingBooms.length=0}this.showResult()}updateReplay(t){let e=this.ghost,i=this.rpEv,r=this.rpT>i-1.6&&this.rpT<i+1.4?.3:this.rpT>i?.55:1;this.paused||(this.rpT+=t*r),e.seek(Math.min(this.rpEnd,this.rpT));let a=this.sim.crash?["replay-low","crashwide"]:["replay-low","replay-arm","replay-orbit"],o=this.rpT<i-1.6?0:this.rpT<i+.5?1:2,c=a[Math.min(a.length-1,o)];e.phase==="crashed"&&!this.rpBoomed&&(this.rpBoomed=!0,this.onCrash(this.sim.crash,!1)),e.phase==="caught"&&!this.rpContact&&(this.rpContact=!0,this.app.audio.contact(0)),e.phase!=="caught"&&e.phase!=="done"&&(this.rpContact=!1),this.view(t*r,e,{replay:!0,replayShot:c,slow:1}),this.app.hud.replay(!0,e,r),this.app.audio.update(Object.assign(this.audioParams(e,1),{slow:!0})),this.rpT>=this.rpEnd&&this.endReplay()}updateAfter(t){let e=this.sim;e.update(t,1),e.events.length=0,this.view(t,e,{}),this.app.audio.update(Object.assign(this.audioParams(e,.5),{crowd:.05}))}banner(t){let e=this._ban||(this._ban=document.getElementById("banner"));if(e){if(!t){e.className="";return}e.innerHTML=t.caught?`<small>Booster gefangen</small><b>${t.gradeName}</b><i>${"\u2605".repeat(t.stars)}${"\u2606".repeat(3-t.stars)}</i>`:`<small>${t.crash?t.crash.why:"Verloren"}</small><b>Fehlgeschlagen</b>`,e.className="on "+(t.caught?"ok g"+t.grade:"fail")}}finish(){let t=this.sim,e=this.mission,i=this.save;if(this.result)return;this.replayStarted=!1;let n=t.auto&&!this.test?!0:!!t.auto,r=!!t.caught&&!t.crash,a=this.unlockState(),o=i.missions[e.id]||(i.missions[e.id]={stars:0,grade:null,best:0,time:null,done:!1,attempts:0,catches:0});o.attempts++;let c=0,l=0,u=3,f=null,h=null;if(r){let y=t.caught;u=y.grade;let x=[5e3,3500,2e3][u],S=Math.max(0,1-y.off/3.2)*1e3+Math.max(0,1-y.vy/5.2)*1e3+Math.max(0,1-y.tilt/6.5)*500,w=Math.max(0,y.fuelPct)*25,A=this.assist==="easy"?.8:this.assist==="pro"?1.5:1;if(c=Math.round((x+S+w-y.attempts*500)*A),l=u===0?3:u===1?2:1,h=y.t,e.timeTrial){let _=e.timeTrial;f=h<=_.gold?"gold":h<=_.silver?"silver":h<=_.bronze?"bronze":null,l=Math.min(l,f==="gold"?3:f==="silver"?2:1),c+=Math.max(0,Math.round((_.bronze-h)*60))}o.catches++,o.done=!0,i.stats.catches++,i.stats.streak++,i.stats.bestStreak=Math.max(i.stats.bestStreak,i.stats.streak),u===0&&i.stats.perfect++,i.stats.fuelSaved+=Math.max(0,y.fuelAbs||0)}else i.stats.crashes++,i.stats.streak=0;let d=o.stars|0,m=o.best|0;(!n||this.test)&&(o.stars=Math.max(d,l),c>m&&(o.best=c),r&&(o.grade===null||u<o.grade)&&(o.grade=u),h!==null&&(o.time===null||h<o.time)&&(o.time=h)),i.stats.playTime+=(performance.now()-this.flightStart)/1e3;let v=[],g=y=>{if(!i.ach[y]){i.ach[y]=Date.now();let x=Jr.find(S=>S.id===y);x&&v.push(x)}};if(r){let y=t.caught;g("first"),u===0&&g("perfect"),y.vy<.5&&g("feather"),y.off<.3&&g("needle"),y.fuelPct<4&&g("reserve"),e.id===4&&g("night"),e.id===5&&g("fog"),e.id===6&&g("engine"),e.id===8&&g("storm"),e.id===9&&g("ship"),f==="gold"&&g("gold"),this.assist==="pro"&&g("pro"),i.stats.streak>=5&&g("streak"),i.stats.catches>=25&&g("veteran"),kn(i)>=30&&g("allstars")}else t.crash&&g("boom");let M=this.unlockState().filter(y=>!a.includes(y));Ni(i),this.result={mission:e,caught:r,grade:u,gradeName:kx[u],stars:l,prevStars:d,score:c,best:Math.max(m,c),newBest:c>m&&r,time:h,medal:f,crash:t.crash,c:t.caught,achievements:v,unlocks:M,assist:this.assist,auto:!!t.auto,next:gi.find(y=>y.id===e.id+1)||null},this.banner(this.result)}unlockState(){let t=this.save,e=kn(t),i=[];for(let n of Nn)e>=n.stars&&i.push("Lackierung: "+n.name);for(let n of rs)this.variantUnlocked(n)&&i.push("Variante: "+n.name);for(let n of Ws)this.isCamUnlocked(n.id)&&i.push("Kamera: "+n.name);for(let n of gi)this.missionUnlocked(n.id)&&i.push("Mission "+n.id+": "+n.name);return i}variantUnlocked(t){if(!t.req)return!0;let e=this.save;return t.req.perfect?e.stats.perfect>=t.req.perfect:t.req.missions?Object.values(e.missions).filter(i=>i.done).length>=t.req.missions:!1}missionUnlocked(t){if(t<=1)return!0;let e=gi.find(n=>n.id===t);if(e&&e.bonus)return kn(this.save)>=12;let i=this.save.missions[t-1]||(t===10?this.save.missions[8]:null);return t===10?!!(this.save.missions[8]&&this.save.missions[8].done):!!(i&&i.done)}showResult(){this.state="result",this.app.hud.show(!1),this.rig.setMode("auto"),this.path.visible=!1,this.mark.visible=!1,this.gate.visible=!1,this.app.ui.showResult(this.result)}};var Ks=s=>440*Math.pow(2,(s-69)/12),Ll=(s,t,e)=>s<t?t:s>e?e:s,Dl=class{constructor(){this.ctx=null,this.muted=!1,this.musicVol=.6,this.sfxVol=.9,this.voice=!1,this.mode="title",this.tension=0,this.step=0,this.nextTime=0,this.bpm=96,this._timer=0,this.lastClank=0,this.voiceName=null}get ready(){return!!this.ctx&&this.ctx.state==="running"}unlock(){if(this.ctx){this.ctx.state!=="running"&&this.ctx.resume().catch(()=>{});return}let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let e;try{e=new t({latencyHint:"interactive"})}catch{try{e=new t}catch{return}}this.ctx=e;let i=e.createBuffer(1,1,22050),n=e.createBufferSource();n.buffer=i,n.connect(e.destination),n.start(0),e.resume().catch(()=>{}),this._build(),this.nextTime=e.currentTime+.1,this._timer=setInterval(()=>this._schedule(),30),document.addEventListener("visibilitychange",()=>{this.ctx&&(document.hidden?this.ctx.suspend().catch(()=>{}):this.ctx.resume().catch(()=>{}))});try{if(window.speechSynthesis){let r=()=>{let a=speechSynthesis.getVoices();this.voiceObj=a.find(o=>/de[-_]CH/i.test(o.lang))||a.find(o=>/^de/i.test(o.lang))||null};r(),speechSynthesis.onvoiceschanged=r}}catch{}}_noise(t,e="white"){let i=this.ctx,n=Math.floor(i.sampleRate*t),r=i.createBuffer(1,n,i.sampleRate),a=r.getChannelData(0),o=0,c=0,l=0,u=0;for(let h=0;h<n;h++){let d=Math.random()*2-1;e==="brown"?(o=(o+.02*d)/1.02,a[h]=o*3.5):e==="pink"?(c=.99765*c+d*.099046,l=.963*l+d*.2965164,u=.57*u+d*1.0526913,a[h]=(c+l+u+d*.1848)*.2):e==="crackle"?a[h]=Math.random()<.004?(Math.random()*2-1)*(.5+Math.random()):d*.04:a[h]=d}let f=Math.min(2e3,n/4);for(let h=0;h<f;h++){let d=h/f;a[h]=a[h]*d+a[n-f+h]*(1-d)}return r}_impulse(t,e){let i=this.ctx,n=Math.floor(i.sampleRate*t),r=i.createBuffer(2,n,i.sampleRate);for(let a=0;a<2;a++){let o=r.getChannelData(a);for(let c=0;c<n;c++)o[c]=(Math.random()*2-1)*Math.pow(1-c/n,e)}return r}_loop(t,e,i=1){let n=this.ctx.createBufferSource();return n.buffer=t,n.loop=!0,n.playbackRate.value=i,n.connect(e),n.start(),n}_build(){let t=this.ctx;this.master=t.createGain(),this.master.gain.value=this.muted?0:.9;let e=t.createDynamicsCompressor();e.threshold.value=-12,e.knee.value=10,e.ratio.value=5,e.attack.value=.003,e.release.value=.25,this.master.connect(e),e.connect(t.destination),this.musicBus=t.createGain(),this.musicBus.gain.value=this.musicVol*.5,this.musicBus.connect(this.master),this.sfxBus=t.createGain(),this.sfxBus.gain.value=this.sfxVol,this.sfxBus.connect(this.master),this.reverb=t.createConvolver(),this.reverb.buffer=this._impulse(3.2,2.2),this.revSend=t.createGain();let i=t.createGain();i.gain.value=.35,this.revSend.connect(this.reverb),this.reverb.connect(i),i.connect(this.master),this.white=this._noise(2.5),this.brown=this._noise(4,"brown"),this.pink=this._noise(3,"pink"),this.crackleB=this._noise(3,"crackle"),this.eng=t.createGain(),this.eng.gain.value=0,this.eng.connect(this.sfxBus),this.engLP=t.createBiquadFilter(),this.engLP.type="lowpass",this.engLP.frequency.value=600,this.engLP.Q.value=.5,this.engLP.connect(this.eng);let n=t.createGain();n.gain.value=.9,n.connect(this.engLP),this._loop(this.brown,n,1);let r=t.createGain();r.gain.value=.35;let a=t.createBiquadFilter();a.type="bandpass",a.frequency.value=900,a.Q.value=.5,a.connect(r),r.connect(this.engLP),this._loop(this.pink,a,.9),this.crk=t.createGain(),this.crk.gain.value=0;let o=t.createBiquadFilter();o.type="highpass",o.frequency.value=300,this.crk.connect(o),o.connect(this.engLP),this._loop(this.crackleB,this.crk,1),this.rumble=t.createGain(),this.rumble.gain.value=0,this.rumble.connect(this.sfxBus);let c=t.createWaveShaper(),l=new Float32Array(1024);for(let m=0;m<1024;m++){let v=m/512-1;l[m]=Math.tanh(v*3)}c.curve=l,c.connect(this.rumble);let u=t.createBiquadFilter();u.type="lowpass",u.frequency.value=90,u.connect(c);for(let m of[31,38.5,46]){let v=t.createOscillator();v.type="sawtooth",v.frequency.value=m;let g=t.createGain();g.gain.value=.25,v.connect(g),g.connect(u),v.start()}let f=t.createGain();f.gain.value=.8,f.connect(u),this._loop(this.brown,f,.5),this.wind=t.createGain(),this.wind.gain.value=0,this.wind.connect(this.sfxBus),this.windBP=t.createBiquadFilter(),this.windBP.type="bandpass",this.windBP.frequency.value=500,this.windBP.Q.value=.6,this.windBP.connect(this.wind),this._loop(this.pink,this.windBP,1),this.amb=t.createGain(),this.amb.gain.value=0,this.amb.connect(this.sfxBus);let h=t.createBiquadFilter();h.type="lowpass",h.frequency.value=700,h.connect(this.amb),this._loop(this.pink,h,.6),this.ambLFO=t.createOscillator(),this.ambLFO.frequency.value=.12;let d=t.createGain();d.gain.value=.25,this.ambLFO.connect(d),d.connect(this.amb.gain),this.ambLFO.start(),this.crowd=t.createGain(),this.crowd.gain.value=0,this.crowd.connect(this.sfxBus),this.crowd.connect(this.revSend);for(let m=0;m<6;m++){let v=t.createBiquadFilter();v.type="bandpass",v.frequency.value=500+m*260,v.Q.value=1.4;let g=t.createGain();g.gain.value=.18,v.connect(g),g.connect(this.crowd);let p=t.createOscillator();p.frequency.value=.4+Math.random()*1.6;let M=t.createGain();M.gain.value=.12,p.connect(M),M.connect(g.gain),p.start(),this._loop(this.white,v,.8+Math.random()*.4)}this.mus={pad:t.createGain(),bass:t.createGain(),pulse:t.createGain(),arp:t.createGain(),drum:t.createGain()};for(let m of Object.keys(this.mus))this.mus[m].gain.value=0,this.mus[m].connect(this.musicBus);this.mus.pad.connect(this.revSend),this.mus.arp.connect(this.revSend),this.padLP=t.createBiquadFilter(),this.padLP.type="lowpass",this.padLP.frequency.value=900,this.padLP.connect(this.mus.pad),this.padOsc=[];for(let m=0;m<6;m++){let v=t.createOscillator();v.type="sawtooth",v.detune.value=(m%2?1:-1)*(6+m*2);let g=t.createGain();g.gain.value=.07,v.connect(g),g.connect(this.padLP),v.start(),this.padOsc.push(v)}this.chord=0,this.setChord([45,52,57,60,64,69],0),this.setMode("title")}setChord(t,e){if(!this.padOsc)return;let i=e||this.ctx.currentTime;this.padOsc.forEach((n,r)=>n.frequency.setTargetAtTime(Ks(t[r%t.length]),i,.6))}setMode(t){if(this.mode=t,!this.ctx)return;let e=this.ctx.currentTime,i=(n,r,a=.8)=>this.mus[n].gain.setTargetAtTime(r,e,a);if(t==="title")i("pad",.55),i("bass",0),i("pulse",0),i("arp",.18),i("drum",0),this.setChord([45,52,57,59,64,71]);else if(t==="menu")i("pad",.45),i("arp",.12),i("pulse",0),i("drum",0),i("bass",0);else if(t==="flight")i("pad",.32),i("arp",0),i("pulse",0),i("drum",0),i("bass",.25);else if(t==="success")i("pad",.7,.3),i("arp",.3),i("pulse",0,.2),i("drum",0,.2),i("bass",.2),this.setChord([48,55,60,64,67,72]);else if(t==="fail")i("pad",.45,.5),i("arp",0),i("pulse",0,.1),i("drum",0,.1),i("bass",.15),this.setChord([41,48,53,56,60,65]);else if(t==="silent")for(let n of Object.keys(this.mus))i(n,0,.3)}setTension(t){if(this.tension=Ll(t,0,1),!this.ctx||this.mode!=="flight")return;let e=this.ctx.currentTime;this.mus.pulse.gain.setTargetAtTime(.1+.35*this.tension,e,.5),this.mus.drum.gain.setTargetAtTime(this.tension>.45?.5*this.tension:0,e,.5),this.padLP.frequency.setTargetAtTime(500+2500*this.tension,e,.8)}_schedule(){let t=this.ctx;if(!t)return;let e=60/this.bpm/4;if(this.nextTime<t.currentTime-.05){let i=Math.ceil((t.currentTime+.02-this.nextTime)/e);this.nextTime+=i*e,this.step+=i}for(;this.nextTime<t.currentTime+.12;)this._tick(this.step,this.nextTime),this.nextTime+=e,this.step++}_tick(t,e){let i=this.ctx,n=Math.floor(t/16),r=t%16,o=(this.mode==="flight"?[[45,52,57,60,64],[41,48,53,57,60],[43,50,55,59,62],[40,47,52,56,59]]:[[45,52,57,59,64],[41,48,55,57,64],[48,55,59,62,67],[43,50,57,59,62]])[n%4];if(r===0&&(this.mode==="flight"||this.mode==="title"||this.mode==="menu")&&this.setChord(o.concat([o[2]+12]),e),this.mus.pulse.gain.value>.01&&r%2===0&&this._pluck(Ks(o[0]-12+(r%8===6?12:0)),e,.18,"sawtooth",this.mus.pulse,380+this.tension*1400),this.mus.bass.gain.value>.01&&r%8===0&&this._pluck(Ks(o[0]-12),e,.9,"triangle",this.mus.bass,300),this.mus.arp.gain.value>.01&&r%3===0){let c=o[(t/3|0)%o.length]+12;this._pluck(Ks(c),e,.6,"sine",this.mus.arp,3e3)}this.mus.drum.gain.value>.01&&((r===0||r===10)&&this._kick(e),(r===4||r===12)&&this._tom(e,r===12?90:120),this.tension>.75&&r%2===1&&this._hat(e))}_pluck(t,e,i,n,r,a){let o=this.ctx,c=o.createOscillator();c.type=n,c.frequency.value=t;let l=o.createBiquadFilter();l.type="lowpass",l.frequency.setValueAtTime(a*2,e),l.frequency.exponentialRampToValueAtTime(Math.max(80,a*.4),e+i);let u=o.createGain();u.gain.setValueAtTime(1e-4,e),u.gain.exponentialRampToValueAtTime(.5,e+.01),u.gain.exponentialRampToValueAtTime(1e-4,e+i),c.connect(l),l.connect(u),u.connect(r),c.start(e),c.stop(e+i+.05)}_kick(t){let e=this.ctx,i=e.createOscillator();i.frequency.setValueAtTime(110,t),i.frequency.exponentialRampToValueAtTime(38,t+.25);let n=e.createGain();n.gain.setValueAtTime(.9,t),n.gain.exponentialRampToValueAtTime(.001,t+.5),i.connect(n),n.connect(this.mus.drum),i.start(t),i.stop(t+.55)}_tom(t,e){let i=this.ctx,n=i.createOscillator();n.type="triangle",n.frequency.setValueAtTime(e,t),n.frequency.exponentialRampToValueAtTime(e*.5,t+.3);let r=i.createGain();r.gain.setValueAtTime(.5,t),r.gain.exponentialRampToValueAtTime(.001,t+.4),n.connect(r),r.connect(this.mus.drum),r.connect(this.revSend),n.start(t),n.stop(t+.45)}_hat(t){let e=this.ctx,i=e.createBufferSource();i.buffer=this.white;let n=e.createBiquadFilter();n.type="highpass",n.frequency.value=7e3;let r=e.createGain();r.gain.setValueAtTime(.12,t),r.gain.exponentialRampToValueAtTime(.001,t+.05),i.connect(n),n.connect(r),r.connect(this.mus.drum),i.start(t,Math.random()*2,.06)}_burst(t,e,i,n,r="lowpass",a,o=.7,c){let l=this.ctx,u=l.currentTime,f=l.createBufferSource();f.buffer=c||this.white;let h=l.createBiquadFilter();h.type=r,h.Q.value=o,h.frequency.setValueAtTime(e,u),h.frequency.exponentialRampToValueAtTime(Math.max(20,i),u+t);let d=l.createGain();return d.gain.setValueAtTime(n,u),d.gain.exponentialRampToValueAtTime(5e-4,u+t),f.connect(h),h.connect(d),d.connect(a||this.sfxBus),f.start(u,Math.random()),f.stop(u+t+.05),d}_tone(t,e,i,n,r="sine",a,o=0){let c=this.ctx,l=c.currentTime+o,u=c.createOscillator();u.type=r,u.frequency.setValueAtTime(t,l),u.frequency.exponentialRampToValueAtTime(Math.max(10,e),l+i);let f=c.createGain();f.gain.setValueAtTime(1e-4,l),f.gain.exponentialRampToValueAtTime(n,l+.008),f.gain.exponentialRampToValueAtTime(1e-4,l+i),u.connect(f),f.connect(a||this.sfxBus),u.start(l),u.stop(l+i+.05)}update(t){if(!this.ready)return;let e=this.ctx,i=e.currentTime,r=1/(1+Math.max(20,t.dist||100)/260),a=Ll(t.thrust||0,0,1),o=a>.01?(.25+.75*a)*r*1.6*(t.alt>3e4?.15:1):0;this.eng.gain.setTargetAtTime(Math.min(1.6,o*(t.slow?.6:1)),i,.06),this.engLP.frequency.setTargetAtTime(Ll(300+9e3*r*r+a*400,200,9e3)*(t.slow?.5:1),i,.1),this.crk.gain.setTargetAtTime(a*1.5*Math.sqrt(r),i,.1),this.rumble.gain.setTargetAtTime(a>.01?Math.min(.9,(.3+a)*Math.sqrt(r)*.8):0,i,.1);let c=Ll((t.q||0)/35e3,0,1)*(t.onboard?1.4:.7)+(t.heat||0)*.3;this.wind.gain.setTargetAtTime(c*.5,i,.2),this.windBP.frequency.setTargetAtTime(300+c*1200,i,.3),this.amb.gain.setTargetAtTime(t.ground?.18:.04,i,.5),this.crowd.gain.setTargetAtTime((t.crowd||0)*.5,i,t.crowd>.5?.25:1.2)}boom(){this.ready&&(this._burst(.5,900,60,1.1,"lowpass"),this._tone(70,28,.6,.9),setTimeout(()=>{this.ready&&(this._burst(.45,800,60,.9,"lowpass"),this._tone(65,25,.5,.7))},140))}fin(t=1){if(!this.ready)return;let e=performance.now();e-this.lastClank<140||(this.lastClank=e,this._burst(.12,2400,600,.12*t,"bandpass",null,4),this._tone(900+Math.random()*300,500,.15,.05*t,"square"))}hydraulics(t=.85){if(!this.ready)return;let e=this.ctx,i=e.currentTime,n=e.createOscillator();n.type="sawtooth",n.frequency.setValueAtTime(110,i),n.frequency.linearRampToValueAtTime(170,i+t*.7),n.frequency.linearRampToValueAtTime(130,i+t);let r=e.createBiquadFilter();r.type="lowpass",r.frequency.value=900;let a=e.createGain();a.gain.setValueAtTime(1e-4,i),a.gain.exponentialRampToValueAtTime(.25,i+.08),a.gain.setValueAtTime(.25,i+t-.1),a.gain.exponentialRampToValueAtTime(1e-4,i+t+.1),n.connect(r),r.connect(a),a.connect(this.sfxBus),n.start(i),n.stop(i+t+.2),this._burst(t,4e3,2500,.08,"highpass"),setTimeout(()=>this.clunk(.6),t*1e3)}clunk(t=1){this.ready&&(this._tone(160,50,.25,.5*t,"triangle"),this._burst(.2,1800,200,.4*t,"lowpass"))}contact(t=0){if(!this.ready)return;this._tone(90,35,.9,1,"sine"),this._burst(.6,2600,150,.9,"lowpass");for(let i of[420,610,1270,1730])this._tone(i,i*.98,1.6+t,.06,"sine");let e=this._burst(2,300,120,.25,"bandpass",this.revSend,3)}explosion(t=1){this.ready&&(this._burst(4.5,2500,40,1.4*t,"lowpass",null,.5,this.brown),this._burst(1.2,6e3,200,.7*t,"lowpass"),this._tone(55,18,2.5,1.2*t,"sine"),this._burst(6,1500,300,.3*t,"bandpass",this.revSend,1,this.crackleB))}splash(){this.ready&&(this._burst(2.2,3e3,200,.9,"lowpass",null,.5,this.pink),this._tone(60,25,1.4,.8))}ignite(){this.ready&&(this._burst(.35,300,2400,.5,"bandpass",null,.8),this._tone(45,80,.5,.5,"sawtooth"))}shutdown(){this.ready&&this._burst(.6,1200,120,.25,"lowpass")}fail(){this.ready&&(this._burst(.2,1200,300,.6,"bandpass",null,2),this._tone(240,120,.25,.15,"square"))}alarm(){this.ready&&(this._tone(880,880,.12,.12,"square"),this._tone(660,660,.12,.12,"square",null,.15))}beep(t=!1){this.ready&&this._tone(t?2500:1800,t?2500:1800,.09,.06,"sine")}ui(t="tap"){this.ready&&(t==="tap"?this._tone(1400,900,.06,.06,"sine"):t==="back"?this._tone(700,500,.08,.06,"sine"):t==="star"?(this._tone(1320,1320,.25,.12,"sine"),this._tone(1760,1760,.3,.08,"sine",null,.06)):t==="unlock"&&[0,4,7,12].forEach((e,i)=>this._tone(Ks(72+e),Ks(72+e),.35,.09,"triangle",null,i*.08)))}cheer(){if(!this.ready)return;let t=this.ctx,e=t.currentTime;this.crowd.gain.cancelScheduledValues(e),this.crowd.gain.setTargetAtTime(.65,e,.15),this.crowd.gain.setTargetAtTime(.18,e+4,1.5);for(let i=0;i<4;i++){let n=1500+Math.random()*900;this._tone(n,n*1.6,.5,.05,"sine",null,.3+i*.4+Math.random()*.3)}}gasp(){if(!this.ready)return;let t=this.ctx,e=t.currentTime;this.crowd.gain.setTargetAtTime(.35,e,.1),this.crowd.gain.setTargetAtTime(.02,e+1.5,1)}say(t){if(!(!this.voice||this.muted))try{if(!window.speechSynthesis)return;let e=new SpeechSynthesisUtterance(t);e.lang=this.voiceObj?this.voiceObj.lang:"de-CH",this.voiceObj&&(e.voice=this.voiceObj),e.rate=1.08,e.pitch=.95,e.volume=.9,speechSynthesis.cancel(),speechSynthesis.speak(e)}catch{}}applySettings(t){if(this.muted=!!t.muted,this.musicVol=t.music,this.sfxVol=t.sfx,this.voice=!!t.voice,!this.ctx)return;let e=this.ctx.currentTime;this.master.gain.setTargetAtTime(this.muted?0:.9,e,.05),this.musicBus.gain.setTargetAtTime(this.musicVol*.5,e,.05),this.sfxBus.gain.setTargetAtTime(this.sfxVol,e,.05)}silenceSfx(){if(!this.ctx)return;let t=this.ctx.currentTime;for(let e of[this.eng,this.rumble,this.wind,this.crk])e.gain.setTargetAtTime(0,t,.08)}};var Nl=class{constructor(t){this.el=t,this.u=0,this.thr=0,this.enabled=!1,this.mode="stick",this.sens=1,this.stick={id:null,x0:0,y0:0,x:0,y:0,active:!1},this.slide={id:null,y0:0,t0:0,active:!1},this.keys={},this.tilt=null,this.onClose=null,this.onCamera=null,this.onPause=null,this.haptic=null,this.lastThrStep=0,t.addEventListener("pointerdown",e=>this.down(e),{passive:!1}),window.addEventListener("pointermove",e=>this.move(e),{passive:!1}),window.addEventListener("pointerup",e=>this.up(e)),window.addEventListener("pointercancel",e=>this.up(e)),window.addEventListener("keydown",e=>this.key(e,!0)),window.addEventListener("keyup",e=>this.key(e,!1)),window.addEventListener("deviceorientation",e=>{e.gamma!=null&&(this.tilt=e.gamma)})}async requestTilt(){try{return typeof DeviceOrientationEvent<"u"&&typeof DeviceOrientationEvent.requestPermission=="function"?await DeviceOrientationEvent.requestPermission()==="granted":!0}catch{return!1}}reset(){this.u=0,this.thr=0,this.stick.active=!1,this.stick.id=null,this.slide.active=!1,this.slide.id=null}down(t){if(!this.enabled)return;t.preventDefault();let e=window.innerWidth,i=window.innerHeight;t.clientX<e*.5&&this.stick.id===null&&this.mode!=="tilt"?this.stick={id:t.pointerId,x0:t.clientX,y0:t.clientY,x:t.clientX,y:t.clientY,active:!0}:t.clientX>=e*.5&&this.slide.id===null&&(this.slide={id:t.pointerId,y0:t.clientY,t0:this.thr,active:!0,x:t.clientX,y:t.clientY})}move(t){if(this.stick.id===t.pointerId){this.stick.x=t.clientX,this.stick.y=t.clientY;let e=62,i=this.stick.x-this.stick.x0;Math.abs(i)>e*1.6&&(this.stick.x0=this.stick.x-Math.sign(i)*e*1.6,i=this.stick.x-this.stick.x0),this.u=Math.max(-1,Math.min(1,i/e*this.sens)),Math.abs(this.u)<.06&&(this.u=0)}else if(this.slide.id===t.pointerId){let e=window.innerHeight;this.slide.y=t.clientY;let i=this.thr;this.thr=Math.max(0,Math.min(1,this.slide.t0+(this.slide.y0-t.clientY)/(e*.38)));let n=Math.floor(this.thr*10);n!==this.lastThrStep&&(this.lastThrStep=n,this.haptic&&this.haptic(4)),i>=.05&&this.thr<.05&&this.haptic&&this.haptic(12)}}up(t){this.stick.id===t.pointerId&&(this.stick.id=null,this.stick.active=!1,this.u=0),this.slide.id===t.pointerId&&(this.slide.id=null,this.slide.active=!1)}key(t,e){let i=t.key.toLowerCase();this.keys[i]=e,!(!e||!this.enabled)&&((i===" "||i==="enter")&&(t.preventDefault(),this.onClose&&this.onClose()),i==="c"&&this.onCamera&&this.onCamera(),(i==="escape"||i==="p")&&this.onPause&&this.onPause())}update(t){if(!this.enabled)return;let e=this.keys,i=e.arrowleft||e.a,n=e.arrowright||e.d;if(i||n?this.u=(n?1:0)-(i?1:0):!this.stick.active&&this.mode!=="tilt"&&(this.u*=Math.exp(-t*20)),(e.arrowup||e.w)&&(this.thr=Math.min(1,this.thr+t*.9)),(e.arrowdown||e.s)&&(this.thr=Math.max(0,this.thr-t*.9)),e.x&&(this.thr=0),e.f&&(this.thr=1),this.mode==="tilt"&&this.tilt!=null&&!i&&!n){let r=this.tilt;this.u=Math.max(-1,Math.min(1,(Math.abs(r)<2.5?0:r-Math.sign(r)*2.5)/22*this.sens))}}};var ji=s=>{let t=Math.round(Math.abs(s)).toString();return(s<0?"\u2212":"")+t.replace(/\B(?=(\d{3})+(?!\d))/g,"\u2019")},Jd=s=>(s<0?"\u2212":"")+Math.abs(s).toFixed(1),Hx=[["sep","Trennung"],["boost","R\xFCckstoss"],["coast","Freiflug"],["entry","Eintritt"],["land","Landung"],["catch","Fang"]],wh={pause:'<svg viewBox="0 0 24 24"><path fill="currentColor" d="M7 5h3.2v14H7zM13.8 5H17v14h-3.2z"/></svg>',cam:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="7" width="13" height="10" rx="2"/><path d="M16 10.5l5-3v9l-5-3"/></svg>',arms:'<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M8 10v28M40 10v28"/><path d="M8 22h12M40 22H28"/><path d="M20 18v8M28 18v8"/></svg>'},Ul=class{constructor(t,e){this.app=e,this.root=t,this.cache={},t.innerHTML=`
    <div class="hud-top">
      <div class="hud-chip glass-s"><span class="h-mis"></span><b class="h-t">T+ 00:00</b></div>
      <div class="spacer"></div>
      <button class="icon-btn h-cam" aria-label="Kamera">${wh.cam}</button>
      <button class="icon-btn h-pause" aria-label="Pause">${wh.pause}</button>
    </div>
    <div class="hud-cam-name"></div>
    <div class="hud-phases">${Hx.map(([n,r])=>`<span data-p="${n}">${r}</span>`).join("<i></i>")}</div>
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
    <button class="hud-close h-close"><span class="ring"></span>${wh.arms}<b>Arme schliessen</b></button>
    <div class="hud-warn h-warn"></div>
    <div class="stick h-stick"><div class="knob h-knob"></div></div>
    <div class="hud-replay">
      <div class="rp-tag"><i></i>Wiederholung <span class="rp-speed">\xBC\xD7</span></div>
      <div class="rp-lower"><div class="rp-a"><small>T+</small><b class="rp-t">00:00</b></div><div class="rp-a"><small>H\xF6he</small><b class="rp-alt">0 m</b></div><div class="rp-a"><small>Tempo</small><b class="rp-sp">0 km/h</b></div><div class="rp-brand">CHOPSTIX<small>Live vom Startplatz</small></div></div>
      <button class="btn rp-skip">Weiter \u203A</button>
    </div>`;let i=n=>t.querySelector(n);this.el={};for(let n of["h-mis","h-t","h-alt","h-altu","h-vy","h-vx","h-th","h-dx","h-mach","h-machrow","h-eng","h-engn","h-fuel","h-fuelres","h-fuelp","h-thrf","h-thrg","h-thrk","h-thrv","h-cue","h-cuet","h-cuev","h-cueb","h-al","h-ar","h-win","h-wpin","h-wx","h-close","h-warn","h-stick","h-knob","h-cam","h-pause"])this.el[n.slice(2)]=i("."+n);this.phases=t.querySelectorAll(".hud-phases span"),this.callouts=i(".hud-callouts"),this.camName=i(".hud-cam-name"),this.replayEl=i(".hud-replay"),this.rp={t:i(".rp-t"),alt:i(".rp-alt"),sp:i(".rp-sp"),speed:i(".rp-speed"),skip:i(".rp-skip")},this.engDots=null,this.lastEngKey="",this.lastCall=0}set(t,e){this.cache[t]!==e&&(this.cache[t]=e,this.el[t].textContent=e)}cls(t,e,i){let n=t+"."+e;this.cache[n]!==i&&(this.cache[n]=i,this.el[t].classList.toggle(e,i))}style(t,e,i){let n=t+":"+e;this.cache[n]!==i&&(this.cache[n]=i,e.startsWith("--")?this.el[t].style.setProperty(e,i):this.el[t].style[e]=i)}buildEngines(t){let e=t.engines.map((i,n)=>`<circle cx="${(i.x*2.1).toFixed(2)}" cy="${(-i.z*2.1).toFixed(2)}" r="${i.g==="v"?1.9:1.05}" data-i="${n}"/>`).join("");this.el.eng.innerHTML=`<circle cx="0" cy="0" r="9.7" class="rim"/>${e}`,this.engDots=Array.from(this.el.eng.querySelectorAll("circle[data-i]")),this.lastEngKey=""}show(t){this.root.classList.toggle("on",t)}setMission(t,e){this.set("mis",t.id+" \xB7 "+t.name),this.root.dataset.assist=e,this.cache={mis:this.cache.mis},this.callouts.innerHTML="",this.root.classList.remove("replay")}callout(t,e="info"){let i=document.createElement("div");for(i.className="co "+e,i.textContent=t,this.callouts.prepend(i);this.callouts.children.length>3;)this.callouts.lastChild.remove();setTimeout(()=>i.classList.add("out"),4200),setTimeout(()=>i.remove(),4800)}showCam(t){this.camName.textContent=t,this.camName.classList.remove("flash"),this.camName.offsetWidth,this.camName.classList.add("flash")}update(t,e,i){let n=t,r=n.T0+n.t,a=Math.floor(r/60),o=Math.floor(r%60);this.set("t",`T+ ${String(a).padStart(2,"0")}:${String(o).padStart(2,"0")}`);let c=n.phase==="caught"||n.phase==="done"||n.phase==="land"&&n.bottomY()<Rt.armH+200?"catch":n.phase;if(this.cache.ph!==c){this.cache.ph=c;let T=!0;this.phases.forEach(R=>{let I=R.dataset.p===c;R.classList.toggle("on",I),I&&(T=!1),R.classList.toggle("past",T&&!I)})}let l=Math.max(0,n.bottomY()-1.6);l>9999?(this.set("alt",(l/1e3).toFixed(1)),this.set("altu","km")):(this.set("alt",ji(l)),this.set("altu","m")),this.set("vy",ji(-n.vy)),this.set("vx",Jd(n.vx)),this.set("th",Jd(n.th*57.2958));let u=n.x;this.set("dx",Math.abs(u)>9999?(u/1e3).toFixed(1)+" k":ji(u)),this.set("mach",n.mach.toFixed(2)),this.cls("machrow","hide",n.mach<.3);let h=n.bottomY()<Rt.armH+400&&n.phase==="land"&&-n.vy>(n.pinY()-Rt.armH)*.35+6;if(this.cls("vy","bad",h),this.engDots){let T="",R=0,I=n.mode==="big"?n.V.sets.big:n.mode==="small"?n.V.sets.small:n.ship?3:13;for(let L of n.eng){let B=L.st===2?"r":L.st===1?"s":L.st===3?"f":"o";T+=B,L.st===2&&R++}T!==this.lastEngKey&&(this.lastEngKey=T,this.engDots.forEach((L,B)=>L.setAttribute("class",T[B]))),this.set("engn",`${R}/${I}`)}let d=n.fuel/(n.reserve?24e4:n.fuel0);this.style("fuel","transform",`scaleX(${Math.max(0,Math.min(1,d)).toFixed(3)})`),this.style("fuelres","left",n.reserve?`${(n.reserve/24e4*100).toFixed(1)}%`:"-10%"),this.set("fuelp",Math.max(0,d*100).toFixed(d<.1?1:0)+"%"),this.cls("fuel","low",d<.12);let m=i.thrInput;this.style("thrf","transform",`scaleY(${m.toFixed(3)})`),this.style("thrk","bottom",`calc(${(m*100).toFixed(1)}% - 22px)`),this.set("thrv",m<.05?"AUS":Math.round(m*100)+"%");let v=i.assist!=="pro"&&e&&(n.phase==="land"||e.ignite||n.phase==="boost");this.cls("thrg","on",!!v),v&&this.style("thrg","bottom",`${(Math.max(.05,e.thr)*100).toFixed(1)}%`);let g="";if(i.assist!=="pro"&&e&&(n.phase==="boost"&&n.mode==="off"?g="boost":n.phase==="entry"&&n.mode==="off"&&n.landUnlocked&&n.vy<-5?g="ign":n.phase==="sep"&&(g="flip")),this.cls("cue","on",!!g),g==="ign"){let T=Math.max(0,(n.y-e.burnAlt)/Math.max(1,-n.vy));this.set("cuet",T<.4?"Jetzt z\xFCnden!":"Landez\xFCndung in"),this.set("cuev",T<.4?"SCHUB \u25B2":T.toFixed(1)+" s"),this.style("cueb","transform",`scaleX(${Math.min(1,T/12).toFixed(3)})`),this.cls("cue","now",T<.4)}else g==="boost"?(this.set("cuet","R\xFCckstoss-Z\xFCndung"),this.set("cuev","SCHUB \u25B2"),this.style("cueb","transform","scaleX(1)"),this.cls("cue","now",!0)):g==="flip"&&(this.set("cuet","Booster dreht"),this.set("cuev","\u2026"),this.style("cueb","transform","scaleX(0.5)"),this.cls("cue","now",!1));let p=i.assist==="easy"&&e&&(n.phase==="entry"||n.phase==="land"||n.phase==="boost"),M=0;if(p){let T=e.aCmd*(i.inputSign||1);M=Math.abs(T)>.35?Math.sign(T):0,n.phase==="boost"&&n.pred&&(M=0)}this.cls("al","on",M<0),this.cls("ar","on",M>0);let y=n.pinY()-Rt.armH,x=(n.phase==="land"||n.phase==="caught")&&y<120&&i.assist!=="pro";if(this.cls("win","on",x),x){let T=Math.max(-.1,Math.min(1.1,y/40));this.style("wpin","bottom",`${(T*100).toFixed(1)}%`),this.cls("wpin","ok",y>.8&&y<3+Math.abs(n.vy)*.9&&Math.abs(n.vx)<1.8);let R=Math.max(-1,Math.min(1,n.x/6));this.style("wx","left",`${(50+R*50).toFixed(1)}%`),this.cls("wx","ok",Math.abs(n.x)<1.1)}let w=n.phase==="land"&&n.arms.tgt!==n.arms.phi-999&&n.arms.p<.02&&n.arms.reopenAt<0&&y<160&&y>.8&&y<3+Math.abs(n.vy)*.9&&Math.abs(n.x)<2.2;this.cls("close","on",n.phase==="land"&&y<220||n.arms.p>.01),this.cls("close","ready",w),this.cls("close","closing",n.arms.p>.01&&n.arms.p<.999),this.cls("close","closed",n.arms.p>=.999),this.style("close","--p",n.arms.p.toFixed(3));let A="";n.fuel<=0&&n.phase!=="caught"&&n.phase!=="done"?A="Kein Treibstoff":d<.06&&n.mode!=="off"?A="Treibstoff knapp":n.phase==="boost"&&n.reserve&&n.fuel<n.reserve?A="Landereserve \u2013 Schub weg!":h&&n.mode!=="off"&&i.assist!=="pro"?A="Zu schnell \u2013 mehr Schub":n.phase==="land"&&Math.abs(n.x)>18&&y<60&&(A="Zu weit neben dem Turm"),this.set("warn",A),this.cls("warn","on",!!A);let _=i.stick;_&&_.active?(this.cls("stick","on",!0),this.style("stick","transform",`translate(${_.x0-60}px, ${_.y0-60}px)`),this.style("knob","transform",`translate(${Math.max(-62,Math.min(62,_.x-_.x0))}px, 0px)`)):this.cls("stick","on",!1)}replay(t,e,i){if(this.root.classList.toggle("replay",t),!t||!e)return;let n=e.T0+e.t,r=Math.floor(n/60),a=n%60;this.rp.t.textContent=`${String(r).padStart(2,"0")}:${a.toFixed(1).padStart(4,"0")}`,this.rp.alt.textContent=ji(Math.max(0,e.bottomY()-1.6))+" m",this.rp.sp.textContent=ji(Math.hypot(e.vx,e.vy)*3.6)+" km/h",this.rp.speed.textContent=i>=.99?"1\xD7":i>=.45?"\xBD\xD7":"\xBC\xD7"}};var Kd=(s,t=document)=>t.querySelector(s),we=s=>String(s).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),js='<svg viewBox="0 0 24 24"><path d="M12 2.6l2.9 6 6.6.8-4.9 4.6 1.3 6.5L12 17.3l-5.9 3.2 1.3-6.5L2.5 9.4l6.6-.8z"/></svg>',na='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 018 0v3"/></svg>',sa='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M15 5l-7 7 7 7"/></svg>',Th={day:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="4.2"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M5 19l2-2M17 7l2-2"/></svg>',afternoon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="13" r="4"/><path d="M12 4v2.5M4.5 13H2M22 13h-2.5M6.3 7.3l1.6 1.6M17.7 7.3l-1.6 1.6M3 19h18"/></svg>',dusk:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M7 17a5 5 0 0110 0"/><path d="M2 17h20M5 21h14M12 7v3M4.9 10.9l1.8 1.8M19.1 10.9l-1.8 1.8"/></svg>',night:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M20 14.5A8 8 0 019.5 4a8 8 0 1010.5 10.5z"/></svg>',dawn:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 10h18M5 14h14M3 18h18M8 6h8"/></svg>',storm:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M7 15a4 4 0 01.5-8 5.5 5.5 0 0110.6 1.5A3.5 3.5 0 0117.5 15"/><path d="M12 13l-2 4h3l-2 4"/></svg>'},Vx={sep:"Ab Stufentrennung",entry:"Ab Wiedereintritt",final:"Endanflug",ship:"Bauchlage"},Fl=class{constructor(t){this.app=t,this.root=Kd("#ui"),this.screen="boot",this.stack=[],this.root.addEventListener("click",e=>this.onClick(e)),this.root.addEventListener("input",e=>this.onInput(e)),this.toastEl=Kd("#toast")}get save(){return this.app.save}get game(){return this.app.game}click(){this.app.audio.ui("tap")}show(t,e,i=""){this.screen=t;let n=this.root.querySelector(".screen.on"),r=document.createElement("div");return r.className="screen "+t+" "+i,r.innerHTML=e,r.dataset.screen=t,this.root.appendChild(r),requestAnimationFrame(()=>r.classList.add("on")),n&&(n.classList.remove("on"),n.classList.add("out"),setTimeout(()=>n.remove(),420)),document.body.dataset.screen=t,r}hideAll(){this.screen="none",document.body.dataset.screen="none";for(let t of this.root.querySelectorAll(".screen"))t.classList.remove("on"),t.classList.add("out"),setTimeout(()=>t.remove(),420)}toast(t,e,i){let n=this.toastEl;n.innerHTML=`<span>${we(t)}</span>`+(e?`<button class="btn sm">${we(e)}</button>`:""),n.classList.add("on"),clearTimeout(this.toastT),e?n.querySelector("button").onclick=()=>{n.classList.remove("on"),i&&i()}:this.toastT=setTimeout(()=>n.classList.remove("on"),2600)}updateAvailable(t){this.toast("Neue Version verf\xFCgbar \u2013 Neu laden","Neu laden",t),this.toastEl.classList.add("update")}title(){let t=kn(this.save);this.show("title",`
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
        <div class="title-stats"><span class="stars-inline">${js}<b>${t}</b>/30</span><span>${this.save.stats.catches} F\xE4nge</span></div>
      </div>
      <div class="title-foot">v${Zr} \xB7 Fan-Projekt, nicht mit SpaceX verbunden</div>`),this.app.audio.setMode("title")}missions(){let t=this.game,e=this.save,i=gi.map(n=>{let r=e.missions[n.id]||{},a=t.missionUnlocked(n.id),o=[0,1,2].map(l=>`<i class="${(r.stars|0)>l?"on":""}">${js}</i>`).join(""),c=n.bonus?"12 Sterne n\xF6tig":n.id===10?"Mission 8 abschliessen":`Mission ${n.id-1} abschliessen`;return`<button class="mcard ${a?"":"locked"} ${r.done?"done":""} tod-${n.tod}" data-a="${a?"brief":"lockedm"}" data-id="${n.id}">
        <div class="mc-num">${String(n.id).padStart(2,"0")}</div>
        <div class="mc-body"><b>${we(n.name)}</b><small>${we(n.sub)}</small>
          <div class="mc-meta"><span class="tod">${Th[n.tod]||""}${we(ss[n.tod].label)}</span>${n.bonus?'<span class="tag">Bonus</span>':""}${n.timeTrial?'<span class="tag">Zeit</span>':""}</div></div>
        <div class="mc-right">${a?`<div class="mc-stars">${o}</div>${r.best?`<small>${ji(r.best)}</small>`:""}`:`<div class="mc-lock">${na}<small>${c}</small></div>`}</div>
      </button>`}).join("");this.show("missions",`
      <header class="bar"><button class="icon-btn" data-a="back">${sa}</button><h2>Missionen</h2><span class="stars-inline">${js}<b>${kn(e)}</b>/30</span></header>
      <div class="scroll"><div class="mlist">${i}</div></div>`)}brief(t){let e=gi.find(c=>c.id===t);this.sel=t;let i=this.save.settings,n=this.save.missions[t]||{},r=e.wind.base+e.wind.gust,a=i.assist,o=e.start==="sep"?Math.round(e.fuel/2550):Math.round(e.fuel/840);this.show("brief",`
      <header class="bar"><button class="icon-btn" data-a="back">${sa}</button><h2>Mission ${e.id}</h2><span></span></header>
      <div class="scroll"><div class="brief-card glass">
        <div class="kicker">${we(Vx[e.start])} \xB7 ${we(ss[e.tod].label)}</div>
        <h1>${we(e.name)}</h1>
        <p>${we(e.brief)}</p>
        <div class="chips">
          <span class="chip">${Th[e.tod]}${we(ss[e.tod].label)}</span>
          <span class="chip"><b>Wind</b> bis ${r.toFixed(0)} m/s ${e.wind.dir<0?"von See":"von Land"}</span>
          <span class="chip"><b>Fahrzeug</b> ${e.vehicle==="ship"?"Starship":"Super Heavy"}</span>
          ${e.failP?`<span class="chip warn"><b>Z\xFCndaussetzer</b> ${Math.round(e.failP*100)} %</span>`:""}
          ${e.timeTrial?`<span class="chip"><b>Gold</b> ${e.timeTrial.gold} s \xB7 Silber ${e.timeTrial.silver} s \xB7 Bronze ${e.timeTrial.bronze} s</span>`:""}
        </div>
        ${n.best?`<div class="best">Bestwert <b>${ji(n.best)}</b>${n.time?` \xB7 Bestzeit ${n.time.toFixed(1)} s`:""}</div>`:""}
        <div class="label">Hilfen</div>
        <div class="seg" data-k="assist">${["easy","normal","pro"].map(c=>`<button data-v="${c}" class="${a===c?"on":""}">${fl[c].name}</button>`).join("")}</div>
        <small class="assist-desc">${we(fl[a].desc)}</small>
      </div></div>
      <div class="foot"><button class="btn ghost" data-a="tutorial">Steuerung</button><button class="btn primary big" data-a="go">Start</button></div>`)}tutorial(t){this.tutAfter=t,this.tutI=0;let e=[{t:"Lage steuern",d:"Linker Daumen: nach links oder rechts ziehen. Der Booster neigt sich und driftet in diese Richtung \u2013 im Wiedereintritt \xFCber die Gridfins, sp\xE4ter \xFCber die Triebwerke.",ill:"stick"},{t:"Schub geben",d:"Rechter Daumen: nach oben schieben f\xFCr mehr Schub, ganz nach unten schaltet die Triebwerke ab. Z\xFCnde rechtzeitig \u2013 die Anzeige hilft dir. Der Treibstoff ist begrenzt.",ill:"thr"},{t:"Schweben & ausrichten",d:"Unter 50 m/s schalten 13 auf 3 Triebwerke. Bring den Booster genau zwischen die Arme, langsam und senkrecht. Die Bolzen m\xFCssen knapp \xFCber den Schienen sein.",ill:"win"},{t:"Arme schliessen",d:"Tippe auf \xABArme schliessen\xBB, wenn die Anzeige gr\xFCn ist. Dann sinkt der Booster auf die Schienen: je sanfter, gerader und mittiger, desto besser die Note.",ill:"arms"}];this.tutSlides=e;let i=e.map((n,r)=>`<div class="tslide ${r===0?"on":""}"><div class="ill ill-${n.ill}"><i></i><b></b></div><h2>${n.t}</h2><p>${n.d}</p></div>`).join("");this.show("tutorial",`<div class="tut glass">${i}<div class="dots">${e.map((n,r)=>`<i class="${r===0?"on":""}"></i>`).join("")}</div>
      <div class="row"><button class="btn ghost" data-a="tutskip">\xDCberspringen</button><button class="btn primary" data-a="tutnext">Weiter</button></div></div>`)}tutStep(){this.tutI++;let t=this.root.querySelector(".screen.tutorial.on")||this.root.querySelector(".screen.tutorial");if(this.tutI>=this.tutSlides.length)return this.tutDone();t.querySelectorAll(".tslide").forEach((e,i)=>e.classList.toggle("on",i===this.tutI)),t.querySelectorAll(".dots i").forEach((e,i)=>e.classList.toggle("on",i===this.tutI)),this.tutI===this.tutSlides.length-1&&(t.querySelector('[data-a="tutnext"]').textContent="Los gehts")}tutDone(){this.save.tutorialDone=!0,Ki(this.save);let t=this.tutAfter;this.tutAfter=null,t?t():this.title()}launch(t){this.hideAll(),this.app.unlockAudio(),this.game.startMission(t,{})}onFlightStart(){this.screen="flight",document.body.dataset.screen="flight"}onReplay(t){document.body.dataset.screen=t?"replay":"flight"}pause(){this.game.state!=="flight"&&this.game.state!=="replay"||(this.game.pause(!0),this.show("pause",`<div class="pause-card glass">
      <h2>Pause</h2><small>${we(this.game.mission.id+" \xB7 "+this.game.mission.name)}</small>
      <button class="btn primary big" data-a="resume">Weiter</button>
      <button class="btn" data-a="restart">Neu starten</button>
      <button class="btn" data-a="psettings">Einstellungen</button>
      <button class="btn ghost" data-a="quit">Mission verlassen</button></div>`,"modal"))}resume(){this.hideAll(),this.screen="flight",document.body.dataset.screen=this.game.state==="replay"?"replay":"flight",this.game.pause(!1)}showResult(t){let e=t.mission,i=[];if(t.caught){let l=t.c;i.push(["Sinkrate",l.vy.toFixed(1)+" m/s",l.parts.gv]),i.push(["Versatz",l.off.toFixed(2)+" m",l.parts.gx]),i.push(["Neigung",l.tilt.toFixed(1)+"\xB0",l.parts.gt]),i.push(["Seitw\xE4rts",l.vx.toFixed(1)+" m/s",l.parts.gh]),i.push(["Treibstoff",Math.max(0,l.fuelPct).toFixed(1)+" %",-1]),i.push(["Flugzeit",l.t.toFixed(1)+" s",-1]),l.attempts&&i.push(["Fehlversuche",String(l.attempts),2])}else t.crash&&i.push(["Ursache",t.crash.why,3],["Aufprall",(t.crash.sp*3.6).toFixed(0)+" km/h",3]);let n=[0,1,2].map(l=>`<i class="${t.stars>l?"on":""}" style="--d:${.5+l*.25}s">${js}</i>`).join(""),r=t.medal?`<div class="medal ${t.medal}">${t.medal==="gold"?"Gold":t.medal==="silver"?"Silber":"Bronze"}</div>`:"",a=[...t.achievements.map(l=>`<div class="unl ach"><b>Erfolg</b>${we(l.name)}</div>`),...t.unlocks.map(l=>`<div class="unl"><b>Neu</b>${we(l)}</div>`)].join(""),o=t.next&&this.game.missionUnlocked(t.next.id);this.show("result",`<div class="res glass ${t.caught?"ok":"fail"} g${t.grade}">
      <div class="kicker">Mission ${e.id} \xB7 ${we(e.name)}</div>
      <div class="grade">${t.caught?we(t.gradeName):"Fehlgeschlagen"}</div>
      <div class="sub">${t.caught?t.grade===0?"Butterweich in die Arme.":t.grade===1?"Sauber gefangen.":"Gefangen \u2013 aber das hat gescheppert.":we(t.crash?t.crash.why:"")}</div>
      <div class="res-stars">${n}</div>${r}
      <div class="rows">${i.map(([l,u,f])=>`<div class="r ${f>=0?"q"+f:""}"><span>${l}</span><b>${we(u)}</b></div>`).join("")}</div>
      ${t.caught?`<div class="score"><small>Punkte</small><b data-count="${t.score}">0</b>${t.newBest?"<em>Neuer Bestwert!</em>":`<small>Bestwert ${ji(t.best)}</small>`}</div>`:""}
      ${a?`<div class="unls">${a}</div>`:""}
      <div class="res-btns">
        <button class="btn" data-a="replay">Wiederholung</button>
        <button class="btn" data-a="retry">Nochmal</button>
        ${o?`<button class="btn primary" data-a="next" data-id="${t.next.id}">Weiter</button>`:'<button class="btn primary" data-a="tomissions">Missionen</button>'}
      </div>
      <button class="link" data-a="tomissions2">Zur Missionsauswahl</button></div>`,"result-screen");let c=this.root.querySelector(".screen.result [data-count]");if(c){let l=+c.dataset.count,u=performance.now(),f=()=>{let h=Math.min(1,(performance.now()-u-700)/1300);c.textContent=ji(Math.max(0,l*(1-Math.pow(1-Math.max(0,h),3)))),h<1&&requestAnimationFrame(f)};f()}for(let l=0;l<t.stars;l++)setTimeout(()=>this.app.audio.ui("star"),520+l*250);(t.unlocks.length||t.achievements.length)&&setTimeout(()=>this.app.audio.ui("unlock"),1500)}hangar(t="livery"){this.hTab=t;let e=this.save,i=kn(e),n=this.game,r="";t==="livery"?r=Nn.map(a=>{let o=i>=a.stars,c=e.sel.livery===a.id;return`<button class="hcard ${o?"":"locked"} ${c?"on":""}" data-a="${o?"setlivery":"lockedh"}" data-id="${a.id}"><span class="sw" style="--c:rgb(${a.tint.map(l=>Math.round(l*255)).join(",")})"></span><b>${we(a.name)}</b><small>${o?we(a.desc):`${na} ${a.stars} Sterne`}</small></button>`}).join(""):t==="variant"?r=rs.map(a=>{let o=n.variantUnlocked(a),c=e.sel.variant===a.id,l=a.req?a.req.perfect?"Ein perfekter Fang":`${a.req.missions} Missionen abschliessen`:"";return`<button class="hcard ${o?"":"locked"} ${c?"on":""}" data-a="${o?"setvariant":"lockedh"}" data-id="${a.id}"><span class="vbadge">${we(a.name.replace("Block ","B"))}</span><b>${we(a.name)}</b><small>${o?we(a.desc):`${na} ${l}`}</small></button>`}).join(""):r=Ws.map(a=>{let o=n.isCamUnlocked(a.id),c=e.sel.camera===a.id;return`<button class="hcard ${o?"":"locked"} ${c?"on":""}" data-a="${o?"setcam":"lockedh"}" data-id="${a.id}"><span class="vbadge">${Th.day.replace('circle cx="12" cy="12" r="4.2"','rect x="4" y="7" width="12" height="10" rx="2"')}</span><b>${we(a.name)}</b><small>${o?"Startkamera im Flug":`${na} Mission ${a.req.mission} abschliessen`}</small></button>`}).join(""),this.show("hangar",`<header class="bar"><button class="icon-btn" data-a="back">${sa}</button><h2>Hangar</h2><span class="stars-inline">${js}<b>${i}</b></span></header>
      <div class="tabs">${[["livery","Lackierung"],["variant","Variante"],["camera","Kamera"]].map(([a,o])=>`<button data-a="htab" data-id="${a}" class="${t===a?"on":""}">${o}</button>`).join("")}</div>
      <div class="hangar-space"></div>
      <div class="hsheet glass"><div class="hgrid">${r}</div></div>`)}achievements(){let t=this.save,e=Object.keys(t.ach).length,i=t.stats,n=Jr.map(r=>`<div class="ach ${t.ach[r.id]?"on":""}"><i>${t.ach[r.id]?js:na}</i><div><b>${we(r.name)}</b><small>${we(r.desc)}</small></div></div>`).join("");this.show("achs",`<header class="bar"><button class="icon-btn" data-a="back">${sa}</button><h2>Erfolge</h2><span>${e}/${Jr.length}</span></header>
      <div class="scroll"><div class="statgrid glass">
        <div><b>${i.catches}</b><small>F\xE4nge</small></div><div><b>${i.perfect}</b><small>Perfekt</small></div><div><b>${i.bestStreak}</b><small>Beste Serie</small></div>
        <div><b>${i.explosions}</b><small>Explosionen</small></div><div><b>${i.flights}</b><small>Fl\xFCge</small></div><div><b>${Math.round(i.playTime/60)}</b><small>Minuten</small></div>
      </div><div class="achlist">${n}</div></div>`)}settings(t){this.setFromPause=!!t;let e=this.save.settings,i=(a,o)=>`<div class="seg" data-k="${a}">${o.map(([c,l])=>`<button data-v="${c}" class="${String(e[a])===String(c)?"on":""}">${l}</button>`).join("")}</div>`,n=(a,o,c)=>`<label class="tog"><span>${o}${c?`<small>${c}</small>`:""}</span><input type="checkbox" data-k="${a}" ${e[a]?"checked":""}><i></i></label>`,r=(a,o,c,l,u)=>`<label class="sl"><span>${o}</span><input type="range" data-k="${a}" min="${c}" max="${l}" step="${u}" value="${e[a]}"></label>`;this.show("settings",`<header class="bar"><button class="icon-btn" data-a="back">${sa}</button><h2>Einstellungen</h2><span></span></header>
      <div class="scroll"><div class="sets">
        <section class="glass"><h3>Grafik</h3>${i("quality",[["auto","Auto"],["low","Niedrig"],["med","Mittel"],["high","Hoch"]])}
          ${n("autoFps","Dynamische Aufl\xF6sung","H\xE4lt die Bildrate stabil (bei \xABAuto\xBB)")}${n("shake","Kamerawackeln")}
          <small class="note">Partikel- und Schattenqualit\xE4t werden beim n\xE4chsten Start vollst\xE4ndig \xFCbernommen.</small></section>
        <section class="glass"><h3>Ton</h3>${r("music","Musik",0,1,.05)}${r("sfx","Effekte",0,1,.05)}${n("voice","Sprachausgabe","Funkspr\xFCche der Flugleitung vorlesen")}${n("muted","Alles stumm")}</section>
        <section class="glass"><h3>Steuerung</h3>${i("control",[["stick","Daumen-Stick"],["tilt","Neigen"]])}${r("sens","Empfindlichkeit",.5,1.6,.05)}${n("haptics","Vibration","Wo vom Ger\xE4t unterst\xFCtzt")}</section>
        <section class="glass"><h3>Hilfen</h3>${i("assist",[["easy","Leicht"],["normal","Normal"],["pro","Profi"]])}${n("autoClose","Arme automatisch schliessen","Nur auf \xABLeicht\xBB")}${n("skipReplay","Wiederholung \xFCberspringen")}
          <button class="btn sm ghost" data-a="tutorial2">Tutorial ansehen</button></section>
        <section class="glass about"><h3>\xDCber</h3><p><b>CHOPSTIX</b> v${Zr}</p><p>Fan-Projekt, nicht mit SpaceX verbunden. \xABSuper Heavy\xBB, \xABStarship\xBB und \xABMechazilla\xBB werden nur beschreibend verwendet. Alle Grafiken, Modelle und Kl\xE4nge werden im Spiel prozedural erzeugt.</p>
          <p class="small">Schriften: Barlow (SIL Open Font License). Grafik-Engine: three.js (MIT).</p>
          <button class="btn sm danger" data-a="reset">Spielstand zur\xFCcksetzen</button></section>
      </div></div>`)}applySetting(t,e){let i=this.save.settings;i[t]=e,Ki(this.save);let n=this.app;["music","sfx","voice","muted"].includes(t)&&n.audio.applySettings(i),(t==="quality"||t==="autoFps")&&n.game.setQualityMode(i.quality),t==="control"&&(n.input.mode=e,e==="tilt"&&n.input.requestTilt().then(r=>{r||(this.toast("Neigungssensor nicht erlaubt"),i.control="stick",n.input.mode="stick",Ki(this.save))})),t==="sens"&&(n.input.sens=e)}back(){this.click();let t=this.screen;if(t==="brief")return this.missions();if(t==="settings"&&this.setFromPause)return this.pause();this.title()}onInput(t){let e=t.target,i=e.dataset.k;i&&(e.type==="range"?this.applySetting(i,parseFloat(e.value)):e.type==="checkbox"&&(this.applySetting(i,e.checked),this.click()))}onClick(t){let e=t.target.closest(".seg button");if(e){let a=e.parentElement,o=a.dataset.k,c=e.dataset.v;if(a.querySelectorAll("button").forEach(l=>l.classList.toggle("on",l===e)),this.click(),this.applySetting(o,c),o==="assist"){let l=this.root.querySelector(".screen.on .assist-desc");l&&(l.textContent=fl[c].desc)}return}let i=t.target.closest("[data-a]");if(!i)return;let n=i.dataset.a,r=i.dataset.id;switch(this.app.unlockAudio(),n){case"play":this.click(),this.missions();break;case"hangar":this.click(),this.hangar();break;case"ach":this.click(),this.achievements();break;case"settings":this.click(),this.settings(!1);break;case"back":this.back();break;case"brief":this.click(),this.brief(+r);break;case"lockedm":this.app.audio.ui("back"),this.toast("Noch gesperrt");break;case"lockedh":this.app.audio.ui("back"),this.toast("Noch nicht freigeschaltet");break;case"go":this.click();{let a=gi.find(o=>o.id===this.sel);!this.save.tutorialDone&&a.tutorial?this.tutorial(()=>this.launch(this.sel)):this.launch(this.sel)}break;case"tutorial":this.click(),this.tutorial(()=>this.brief(this.sel));break;case"tutorial2":this.click(),this.tutorial(()=>this.settings(this.setFromPause));break;case"tutnext":this.click(),this.tutStep();break;case"tutskip":this.click(),this.tutDone();break;case"resume":this.click(),this.resume();break;case"restart":this.click(),this.hideAll(),this.game.startMission(this.game.mission.id,{});break;case"psettings":this.click(),this.settings(!0);break;case"quit":this.click(),this.game.quitToTitle(),this.missions(),this.app.audio.setMode("menu");break;case"replay":this.click(),this.hideAll(),this.game.startReplay();break;case"retry":this.click(),this.hideAll(),this.game.startMission(this.game.mission.id,{});break;case"next":this.click(),this.brief(+r),this.game.quitToTitle();break;case"tomissions":case"tomissions2":this.click(),this.game.quitToTitle(),this.missions(),this.app.audio.setMode("menu");break;case"htab":this.click(),this.hangar(r);break;case"setlivery":this.save.sel.livery=r,Ki(this.save),this.app.audio.ui("unlock"),this.game.setVehicle("booster"),this.hangar("livery");break;case"setvariant":this.save.sel.variant=r,Ki(this.save),this.app.audio.ui("unlock"),this.game.attract(!1),this.hangar("variant");break;case"setcam":this.save.sel.camera=r,Ki(this.save),this.click(),this.hangar("camera");break;case"reset":if(i.dataset.confirm){let a=Js();Object.keys(this.save).forEach(o=>delete this.save[o]),Object.assign(this.save,a),Ni(this.save),this.toast("Spielstand zur\xFCckgesetzt"),this.title()}else i.dataset.confirm="1",i.textContent="Wirklich zur\xFCcksetzen?";break}}};var Bl=new URLSearchParams(location.search),Eh=Bl.get("test")==="1";["gesturestart","gesturechange","gestureend"].forEach(s=>document.addEventListener(s,t=>t.preventDefault(),{passive:!1}));document.addEventListener("touchmove",s=>{let t=s.target;for(;t&&t!==document.body;){if(t.classList&&(t.classList.contains("scroll")||t.classList.contains("hsheet")||t.classList.contains("res")))return;t=t.parentNode}s.preventDefault()},{passive:!1});document.addEventListener("contextmenu",s=>s.preventDefault());document.addEventListener("dblclick",s=>s.preventDefault(),{passive:!1});document.addEventListener("selectstart",s=>s.preventDefault());function jd(){let s=$d();Bl.get("notut")==="1"&&(s.tutorialDone=!0),Ni(s);let t=document.getElementById("gl"),e=new Dl;e.applySettings(s.settings);let i=new Nl(document.getElementById("touch"));i.mode=s.settings.control==="tilt"?"tilt":"stick",i.sens=s.settings.sens,i.haptic=y=>{try{s.settings.haptics&&navigator.vibrate&&navigator.vibrate(y)}catch{}};let n={save:s,audio:e,input:i,test:Eh,testQuality:Bl.get("q")};n.unlockAudio=()=>{e.unlock(),e.applySettings(s.settings)},n.hud=new Ul(document.getElementById("hud"),n);let r=new Fl(n);n.ui=r;let a;try{a=new Pl(t,n)}catch(y){console.warn("WebGL nicht verf\xFCgbar",y),document.getElementById("ui").innerHTML='<div class="nogl"><h2>CHOPSTIX</h2><p>Dein Browser unterst\xFCtzt kein WebGL 2. Bitte \xF6ffne das Spiel in Safari oder Chrome.</p></div>';return}n.game=a;let o=document.getElementById("hud"),c=(y,x)=>{o.querySelector(y).addEventListener("pointerdown",w=>{w.preventDefault(),w.stopPropagation(),x()})};c(".h-close",()=>a.closeArms()),c(".h-cam",()=>a.cycleCamera()),c(".h-pause",()=>{e.ui("tap"),r.pause()}),c(".rp-skip",()=>{e.ui("tap"),a.skipReplay()}),i.onClose=()=>a.closeArms(),i.onCamera=()=>a.cycleCamera(),i.onPause=()=>{a.paused?r.resume():r.pause()};let l=()=>a.resize(window.innerWidth,window.innerHeight);window.addEventListener("resize",l),window.addEventListener("orientationchange",()=>setTimeout(l,200)),l();let u=performance.now(),f=0,h=new Float32Array(600),d=0,m=y=>{requestAnimationFrame(m);let x=(y-u)/1e3;if(u=y,a.manual)return;x=Math.min(.1,Math.max(0,x));let S=performance.now();a.frame(x),a.monitor(x),h[d++%600]=performance.now()-S,f++,f===2&&document.body.classList.add("ready")};requestAnimationFrame(y=>{u=y,m(y)}),setTimeout(()=>{document.getElementById("boot").classList.add("off"),r.title()},Eh?50:900);let v=()=>n.unlockAudio();if(window.addEventListener("pointerdown",v,{passive:!0}),window.addEventListener("touchend",v,{passive:!0}),window.addEventListener("keydown",v,{passive:!0}),document.addEventListener("visibilitychange",()=>{document.hidden&&(a.state==="flight"&&!a.paused&&!Eh&&r.pause(),Ni(s))}),window.addEventListener("pagehide",()=>Ni(s)),"serviceWorker"in navigator&&location.protocol!=="file:"&&Bl.get("nosw")!=="1"){let y=!1,x=!1;navigator.serviceWorker.addEventListener("controllerchange",()=>{y||!x||(y=!0,Ni(s),location.reload())}),navigator.serviceWorker.register("sw.js").then(S=>{let w=A=>r.updateAvailable(()=>{x=!0,Ni(s),A.postMessage({type:"SKIP_WAITING"}),setTimeout(()=>location.reload(),1500)});S.waiting&&navigator.serviceWorker.controller&&w(S.waiting),S.addEventListener("updatefound",()=>{let A=S.installing;A&&A.addEventListener("statechange",()=>{A.state==="installed"&&navigator.serviceWorker.controller&&w(A)})}),setInterval(()=>S.update().catch(()=>{}),1800*1e3),document.addEventListener("visibilitychange",()=>{document.hidden||S.update().catch(()=>{})})}).catch(()=>{})}let g=new Uint8Array(4),p=()=>{try{let y=a.renderer.getContext();y.readPixels(0,0,1,1,y.RGBA,y.UNSIGNED_BYTE,g)}catch{}},M=y=>{a.frame(y),p()};window.__cx={version:Zr,game:a,ui:r,save:s,audio:e,input:i,hud:n.hud,state:()=>({state:a.state,screen:r.screen,phase:a.sim&&a.sim.phase,t:a.sim&&a.sim.t,y:a.sim&&a.sim.y,paused:a.paused}),start:(y,x={})=>{r.hideAll(),n.unlockAudio(),a.startMission(y,Object.assign({auto:!0},x))},setAuto:y=>{a.sim&&(a.sim.auto=y?new Un:null)},speed:y=>{a.extScale=y},result:()=>a.result&&{caught:a.result.caught,grade:a.result.gradeName,stars:a.result.stars,score:a.result.score,why:a.result.crash&&a.result.crash.why},setCamera:y=>a.setCamera(y),manual:y=>{a.manual=!!y},step:(y=1,x=1/30)=>{for(let S=0;S<y;S++)M(x);return a.state},simulate:(y,x=1/30)=>{let S=Math.round(y/x);for(let w=0;w<S;w++)w%6===5||w===S-1?M(x):(a.sim.update(x,a.extScale),a.handleEvents(a.sim,!0),a.rec.record(a.sim),a.state==="flight"&&(a.sim.phase==="caught"||a.sim.phase==="crashed"||a.sim.phase==="done")&&M(x));return a.state},until:(y,x=240,S=1/30)=>{let w=Math.round(x/S),A=0;for(;A<w&&!y(a);A++){let _=a.state,T=a.sim;if(!(A%8!==7&&(_==="title"||_==="flight"&&!a.paused&&T.phase!=="caught"&&T.phase!=="done"&&T.phase!=="crashed"))){M(S);continue}T.update(S,_==="title"?1:a.extScale),a.handleEvents(T,_==="flight"),_==="flight"&&a.rec.record(T)}return[+(A*S).toFixed(1),a.state,a.sim&&a.sim.phase]},missions:gi.length,frameStats:()=>{let y=Math.min(d,600),x=Array.from(h.slice(0,y)).sort((S,w)=>S-w);return{n:y,avg:x.reduce((S,w)=>S+w,0)/(y||1),p50:x[Math.floor(y*.5)]||0,p95:x[Math.floor(y*.95)]||0,max:x[y-1]||0,fps:a.fps||0,tier:a.quality.tier}},resetFrameStats:()=>{d=0},frames:()=>f}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",jd):jd();})();
