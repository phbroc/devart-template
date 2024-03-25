(function dartProgram(){function copyProperties(a,b){var s=Object.keys(a)
for(var r=0;r<s.length;r++){var q=s[r]
b[q]=a[q]}}function mixinPropertiesHard(a,b){var s=Object.keys(a)
for(var r=0;r<s.length;r++){var q=s[r]
if(!b.hasOwnProperty(q))b[q]=a[q]}}function mixinPropertiesEasy(a,b){Object.assign(b,a)}var z=function(){var s=function(){}
s.prototype={p:{}}
var r=new s()
if(!(r.__proto__&&r.__proto__.p===s.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var q=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(q))return true}}catch(p){}return false}()
function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){a.prototype.__proto__=b.prototype
return}var s=Object.create(b.prototype)
copyProperties(a.prototype,s)
a.prototype=s}}function inheritMany(a,b){for(var s=0;s<b.length;s++)inherit(b[s],a)}function mixinEasy(a,b){mixinPropertiesEasy(b.prototype,a.prototype)
a.prototype.constructor=a}function mixinHard(a,b){mixinPropertiesHard(b.prototype,a.prototype)
a.prototype.constructor=a}function lazyOld(a,b,c,d){var s=a
a[b]=s
a[c]=function(){a[c]=function(){A.k6(b)}
var r
var q=d
try{if(a[b]===s){r=a[b]=q
r=a[b]=d()}else r=a[b]}finally{if(r===q)a[b]=null
a[c]=function(){return this[b]}}return r}}function lazy(a,b,c,d){var s=a
a[b]=s
a[c]=function(){if(a[b]===s)a[b]=d()
a[c]=function(){return this[b]}
return a[b]}}function lazyFinal(a,b,c,d){var s=a
a[b]=s
a[c]=function(){if(a[b]===s){var r=d()
if(a[b]!==s)A.k7(b)
a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s)convertToFastObject(a[s])}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.fQ(b)
return new s(c,this)}:function(){if(s===null)s=A.fQ(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.fQ(a).prototype
return s}}var x=0
function tearOffParameters(a,b,c,d,e,f,g,h,i,j){if(typeof h=="number")h+=x
return{co:a,iS:b,iI:c,rC:d,dV:e,cs:f,fs:g,fT:h,aI:i||0,nDA:j}}function installStaticTearOff(a,b,c,d,e,f,g,h){var s=tearOffParameters(a,true,false,c,d,e,f,g,h,false)
var r=staticTearOffGetter(s)
a[b]=r}function installInstanceTearOff(a,b,c,d,e,f,g,h,i,j){c=!!c
var s=tearOffParameters(a,false,c,d,e,f,g,h,i,!!j)
var r=instanceTearOffGetter(c,s)
a[b]=r}function setOrUpdateInterceptorsByTag(a){var s=v.interceptorsByTag
if(!s){v.interceptorsByTag=a
return}copyProperties(a,s)}function setOrUpdateLeafTags(a){var s=v.leafTags
if(!s){v.leafTags=a
return}copyProperties(a,s)}function updateTypes(a){var s=v.types
var r=s.length
s.push.apply(s,a)
return r}function updateHolder(a,b){copyProperties(b,a)
return a}var hunkHelpers=function(){var s=function(a,b,c,d,e){return function(f,g,h,i){return installInstanceTearOff(f,g,a,b,c,d,[h],i,e,false)}},r=function(a,b,c,d){return function(e,f,g,h){return installStaticTearOff(e,f,a,b,c,[g],h,d)}}
return{inherit:inherit,inheritMany:inheritMany,mixin:mixinEasy,mixinHard:mixinHard,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:s(0,0,null,["$0"],0),_instance_1u:s(0,1,null,["$1"],0),_instance_2u:s(0,2,null,["$2"],0),_instance_0i:s(1,0,null,["$0"],0),_instance_1i:s(1,1,null,["$1"],0),_instance_2i:s(1,2,null,["$2"],0),_static_0:r(0,null,["$0"],0),_static_1:r(1,null,["$1"],0),_static_2:r(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,lazyFinal:lazyFinal,lazyOld:lazyOld,updateHolder:updateHolder,convertToFastObject:convertToFastObject,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}var A={fC:function fC(){},
k(){return $},
iC(a){return new A.bh("Field '"+a+"' has not been initialized.")},
hl(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
iS(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
cT(a,b,c){return a},
h6(){return new A.aP("No element")},
ix(){return new A.aP("Too many elements")},
bh:function bh(a){this.a=a},
eA:function eA(){},
b6:function b6(){},
U:function U(){},
av:function av(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
V:function V(a,b,c){this.a=a
this.b=b
this.$ti=c},
ay:function ay(a,b,c){this.a=a
this.b=b
this.$ti=c},
bz:function bz(a,b,c){this.a=a
this.b=b
this.$ti=c},
hV(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
jX(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.p.b(a)},
r(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.c0(a)
return s},
br(a){var s,r=$.he
if(r==null)r=$.he=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
fE(a,b){var s,r=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(r==null)return null
if(3>=r.length)return A.i(r,3)
s=r[3]
if(s!=null)return parseInt(a,10)
if(r[2]!=null)return parseInt(a,16)
return null},
w(a){var s,r
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return null
s=parseFloat(a)
if(isNaN(s)){r=B.i.cS(a)
if(r==="NaN"||r==="+NaN"||r==="-NaN")return s
return null}return s},
ey(a){return A.iH(a)},
iH(a){var s,r,q,p,o
if(a instanceof A.v)return A.L(A.aj(a),null)
s=J.b_(a)
if(s===B.Q||s===B.S||t.cr.b(a)){r=B.q(a)
q=r!=="Object"&&r!==""
if(q)return r
p=a.constructor
if(typeof p=="function"){o=p.name
if(typeof o=="string")q=o!=="Object"&&o!==""
else q=!1
if(q)return o}}return A.L(A.aj(a),null)},
p(a){var s
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((B.f.ab(s,10)|55296)>>>0,s&1023|56320)}throw A.e(A.ez(a,0,1114111,null,null))},
Q(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
iO(a){return a.b?A.Q(a).getUTCFullYear()+0:A.Q(a).getFullYear()+0},
iM(a){return a.b?A.Q(a).getUTCMonth()+1:A.Q(a).getMonth()+1},
iI(a){return a.b?A.Q(a).getUTCDate()+0:A.Q(a).getDate()+0},
iJ(a){return a.b?A.Q(a).getUTCHours()+0:A.Q(a).getHours()+0},
iL(a){return a.b?A.Q(a).getUTCMinutes()+0:A.Q(a).getMinutes()+0},
iN(a){return a.b?A.Q(a).getUTCSeconds()+0:A.Q(a).getSeconds()+0},
iK(a){return a.b?A.Q(a).getUTCMilliseconds()+0:A.Q(a).getMilliseconds()+0},
i(a,b){if(a==null)J.c_(a)
throw A.e(A.bX(a,b))},
bX(a,b){var s,r="index"
if(!A.hG(b))return new A.a3(!0,b,r,null)
s=A.R(J.c_(a))
if(b<0||b>=s)return A.fA(b,a,r,null,s)
return A.iP(b,r)},
e(a){var s,r
if(a==null)a=new A.ch()
s=new Error()
s.dartException=a
r=A.k8
if("defineProperty" in Object){Object.defineProperty(s,"message",{get:r})
s.name=""}else s.toString=r
return s},
k8(){return J.c0(this.dartException)},
ab(a){throw A.e(a)},
cV(a){throw A.e(A.aI(a))},
a7(a){var s,r,q,p,o,n
a=A.k4(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.B([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.eD(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
eE(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
hn(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
fD(a,b){var s=b==null,r=s?null:b.method
return new A.cg(a,r,s?null:b.receiver)},
ak(a){if(a==null)return new A.ex(a)
if(typeof a!=="object")return a
if("dartException" in a)return A.aC(a,a.dartException)
return A.jI(a)},
aC(a,b){if(t.R.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
jI(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.f.ab(r,16)&8191)===10)switch(q){case 438:return A.aC(a,A.fD(A.r(s)+" (Error "+q+")",e))
case 445:case 5007:p=A.r(s)
return A.aC(a,new A.bq(p+" (Error "+q+")",e))}}if(a instanceof TypeError){o=$.hY()
n=$.hZ()
m=$.i_()
l=$.i0()
k=$.i3()
j=$.i4()
i=$.i2()
$.i1()
h=$.i6()
g=$.i5()
f=o.ao(s)
if(f!=null)return A.aC(a,A.fD(A.K(s),f))
else{f=n.ao(s)
if(f!=null){f.method="call"
return A.aC(a,A.fD(A.K(s),f))}else{f=m.ao(s)
if(f==null){f=l.ao(s)
if(f==null){f=k.ao(s)
if(f==null){f=j.ao(s)
if(f==null){f=i.ao(s)
if(f==null){f=l.ao(s)
if(f==null){f=h.ao(s)
if(f==null){f=g.ao(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p){A.K(s)
return A.aC(a,new A.bq(s,f==null?e:f.method))}}}return A.aC(a,new A.cu(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.bv()
s=function(b){try{return String(b)}catch(d){}return null}(a)
return A.aC(a,new A.a3(!1,e,e,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.bv()
return a},
aB(a){var s
if(a==null)return new A.bL(a)
s=a.$cachedTrace
if(s!=null)return s
return a.$cachedTrace=new A.bL(a)},
hS(a){if(a==null||typeof a!="object")return J.cW(a)
else return A.br(a)},
jW(a,b,c,d,e,f){t.Y.a(a)
switch(A.R(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.e(new A.eQ("Unsupported number of arguments for wrapped closure"))},
aA(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.jW)
a.$identity=s
return s},
ip(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.cm().constructor.prototype):Object.create(new A.aF(null,null).constructor.prototype)
s.$initialize=s.constructor
if(h)r=function static_tear_off(){this.$initialize()}
else r=function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.h3(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.ik(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.h3(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
ik(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.e("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.ii)}throw A.e("Error in functionType of tearoff")},
il(a,b,c,d){var s=A.h2
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
h3(a,b,c,d){var s,r
if(c)return A.io(a,b,d)
s=b.length
r=A.il(s,d,a,b)
return r},
im(a,b,c,d){var s=A.h2,r=A.ij
switch(b?-1:a){case 0:throw A.e(new A.ck("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
io(a,b,c){var s,r
if($.h0==null)$.h0=A.h_("interceptor")
if($.h1==null)$.h1=A.h_("receiver")
s=b.length
r=A.im(s,c,a,b)
return r},
fQ(a){return A.ip(a)},
ii(a,b){return A.fe(v.typeUniverse,A.aj(a.a),b)},
h2(a){return a.a},
ij(a){return a.b},
h_(a){var s,r,q,p=new A.aF("receiver","interceptor"),o=J.h7(Object.getOwnPropertyNames(p),t.X)
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw A.e(A.d_("Field name "+a+" not found.",null))},
fP(a){if(a==null)A.jJ("boolean expression must not be null")
return a},
jJ(a){throw A.e(new A.cw(a))},
k6(a){throw A.e(new A.c7(a))},
jO(a){return v.getIsolateTag(a)},
kL(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
jZ(a){var s,r,q,p,o,n=A.K($.hO.$1(a)),m=$.fl[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.fr[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=A.hC($.hL.$2(a,n))
if(q!=null){m=$.fl[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.fr[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.fs(s)
$.fl[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.fr[n]=s
return s}if(p==="-"){o=A.fs(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.hT(a,s)
if(p==="*")throw A.e(A.eF(n))
if(v.leafTags[n]===true){o=A.fs(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.hT(a,s)},
hT(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.fV(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
fs(a){return J.fV(a,!1,null,!!a.$icf)},
k0(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.fs(s)
else return J.fV(s,c,null,null)},
jT(){if(!0===$.fU)return
$.fU=!0
A.jU()},
jU(){var s,r,q,p,o,n,m,l
$.fl=Object.create(null)
$.fr=Object.create(null)
A.jS()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.hU.$1(o)
if(n!=null){m=A.k0(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
jS(){var s,r,q,p,o,n,m=B.C()
m=A.aY(B.D,A.aY(B.E,A.aY(B.r,A.aY(B.r,A.aY(B.F,A.aY(B.G,A.aY(B.H(B.q),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.hO=new A.fo(p)
$.hL=new A.fp(o)
$.hU=new A.fq(n)},
aY(a,b){return a(b)||b},
k4(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
bb:function bb(){},
aM:function aM(a,b){this.a=a
this.$ti=b},
eD:function eD(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
bq:function bq(a,b){this.a=a
this.b=b},
cg:function cg(a,b,c){this.a=a
this.b=b
this.c=c},
cu:function cu(a){this.a=a},
ex:function ex(a){this.a=a},
bL:function bL(a){this.a=a
this.b=null},
E:function E(){},
c3:function c3(){},
c4:function c4(){},
cs:function cs(){},
cm:function cm(){},
aF:function aF(a,b){this.a=a
this.b=b},
ck:function ck(a){this.a=a},
cw:function cw(a){this.a=a},
bg:function bg(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
eq:function eq(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
bi:function bi(a,b){this.a=a
this.$ti=b},
bj:function bj(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
fo:function fo(a){this.a=a},
fp:function fp(a){this.a=a},
fq:function fq(a){this.a=a},
k7(a){return A.ab(new A.bh("Field '"+a+"' has been assigned during initialization."))},
iZ(a){var s=new A.eO(a)
return s.b=s},
a(a,b){if(a===$)throw A.e(A.iC(b))
return a},
eO:function eO(a){this.a=a
this.b=null},
hh(a,b){var s=b.c
return s==null?b.c=A.fL(a,b.y,!0):s},
hg(a,b){var s=b.c
return s==null?b.c=A.bO(a,"ar",[b.y]):s},
hi(a){var s=a.x
if(s===6||s===7||s===8)return A.hi(a.y)
return s===11||s===12},
iR(a){return a.at},
aZ(a){return A.cQ(v.typeUniverse,a,!1)},
jV(a,b){var s,r,q,p,o
if(a==null)return null
s=b.z
r=a.as
if(r==null)r=a.as=new Map()
q=b.at
p=r.get(q)
if(p!=null)return p
o=A.a8(v.typeUniverse,a.y,s,0)
r.set(q,o)
return o},
a8(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.x
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.y
r=A.a8(a,s,a0,a1)
if(r===s)return b
return A.hy(a,r,!0)
case 7:s=b.y
r=A.a8(a,s,a0,a1)
if(r===s)return b
return A.fL(a,r,!0)
case 8:s=b.y
r=A.a8(a,s,a0,a1)
if(r===s)return b
return A.hx(a,r,!0)
case 9:q=b.z
p=A.bW(a,q,a0,a1)
if(p===q)return b
return A.bO(a,b.y,p)
case 10:o=b.y
n=A.a8(a,o,a0,a1)
m=b.z
l=A.bW(a,m,a0,a1)
if(n===o&&l===m)return b
return A.fJ(a,n,l)
case 11:k=b.y
j=A.a8(a,k,a0,a1)
i=b.z
h=A.jF(a,i,a0,a1)
if(j===k&&h===i)return b
return A.hw(a,j,h)
case 12:g=b.z
a1+=g.length
f=A.bW(a,g,a0,a1)
o=b.y
n=A.a8(a,o,a0,a1)
if(f===g&&n===o)return b
return A.fK(a,n,f,!0)
case 13:e=b.y
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw A.e(A.d0("Attempted to substitute unexpected RTI kind "+c))}},
bW(a,b,c,d){var s,r,q,p,o=b.length,n=A.ff(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.a8(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
jG(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.ff(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.a8(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
jF(a,b,c,d){var s,r=b.a,q=A.bW(a,r,c,d),p=b.b,o=A.bW(a,p,c,d),n=b.c,m=A.jG(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.cD()
s.a=q
s.b=o
s.c=m
return s},
B(a,b){a[v.arrayRti]=b
return a},
fR(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.jP(s)
return a.$S()}return null},
hP(a,b){var s
if(A.hi(b))if(a instanceof A.E){s=A.fR(a)
if(s!=null)return s}return A.aj(a)},
aj(a){var s
if(a instanceof A.v){s=a.$ti
return s!=null?s:A.fM(a)}if(Array.isArray(a))return A.ai(a)
return A.fM(J.b_(a))},
ai(a){var s=a[v.arrayRti],r=t.ce
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
a2(a){var s=a.$ti
return s!=null?s:A.fM(a)},
fM(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.jq(a,s)},
jq(a,b){var s=a instanceof A.E?a.__proto__.__proto__.constructor:b,r=A.jf(v.typeUniverse,s.name)
b.$ccache=r
return r},
jP(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.cQ(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
fT(a){var s=a instanceof A.E?A.fR(a):null
return A.fS(s==null?A.aj(a):s)},
fS(a){var s,r,q,p=a.w
if(p!=null)return p
s=a.at
r=s.replace(/\*/g,"")
if(r===s)return a.w=new A.cO(a)
q=A.cQ(v.typeUniverse,r,!0)
p=q.w
return a.w=p==null?q.w=new A.cO(q):p},
k9(a){return A.fS(A.cQ(v.typeUniverse,a,!1))},
jp(a){var s,r,q,p,o=this
if(o===t.K)return A.aV(o,a,A.ju)
if(!A.aa(o))if(!(o===t._))s=!1
else s=!0
else s=!0
if(s)return A.aV(o,a,A.jx)
s=o.x
r=s===6?o.y:o
if(r===t.bL)q=A.hG
else if(r===t.cb||r===t.H)q=A.jt
else if(r===t.N)q=A.jv
else q=r===t.y?A.fh:null
if(q!=null)return A.aV(o,a,q)
if(r.x===9){p=r.y
if(r.z.every(A.jY)){o.r="$i"+p
if(p==="T")return A.aV(o,a,A.js)
return A.aV(o,a,A.jw)}}else if(s===7)return A.aV(o,a,A.jn)
return A.aV(o,a,A.jl)},
aV(a,b,c){a.b=c
return a.b(b)},
jo(a){var s,r=this,q=A.jk
if(!A.aa(r))if(!(r===t._))s=!1
else s=!0
else s=!0
if(s)q=A.jj
else if(r===t.K)q=A.ji
else{s=A.bY(r)
if(s)q=A.jm}r.a=q
return r.a(a)},
fi(a){var s,r=a.x
if(!A.aa(a))if(!(a===t._))if(!(a===t.I))if(r!==7)s=r===8&&A.fi(a.y)||a===t.P||a===t.T
else s=!0
else s=!0
else s=!0
else s=!0
return s},
jl(a){var s=this
if(a==null)return A.fi(s)
return A.A(v.typeUniverse,A.hP(a,s),null,s,null)},
jn(a){if(a==null)return!0
return this.y.b(a)},
jw(a){var s,r=this
if(a==null)return A.fi(r)
s=r.r
if(a instanceof A.v)return!!a[s]
return!!J.b_(a)[s]},
js(a){var s,r=this
if(a==null)return A.fi(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.r
if(a instanceof A.v)return!!a[s]
return!!J.b_(a)[s]},
jk(a){var s,r=this
if(a==null){s=A.bY(r)
if(s)return a}else if(r.b(a))return a
A.hD(a,r)},
jm(a){var s=this
if(a==null)return a
else if(s.b(a))return a
A.hD(a,s)},
hD(a,b){throw A.e(A.hv(A.hp(a,A.hP(a,b),A.L(b,null))))},
hN(a,b,c,d){var s=null
if(A.A(v.typeUniverse,a,s,b,s))return a
throw A.e(A.hv("The type argument '"+A.L(a,s)+"' is not a subtype of the type variable bound '"+A.L(b,s)+"' of type variable '"+c+"' in '"+d+"'."))},
hp(a,b,c){var s=A.ca(a)
return s+": type '"+A.L(b==null?A.aj(a):b,null)+"' is not a subtype of type '"+c+"'"},
hv(a){return new A.bN("TypeError: "+a)},
J(a,b){return new A.bN("TypeError: "+A.hp(a,null,b))},
ju(a){return a!=null},
ji(a){if(a!=null)return a
throw A.e(A.J(a,"Object"))},
jx(a){return!0},
jj(a){return a},
fh(a){return!0===a||!1===a},
j(a){if(!0===a)return!0
if(!1===a)return!1
throw A.e(A.J(a,"bool"))},
kC(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.e(A.J(a,"bool"))},
kB(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.e(A.J(a,"bool?"))},
jh(a){if(typeof a=="number")return a
throw A.e(A.J(a,"double"))},
kE(a){if(typeof a=="number")return a
if(a==null)return a
throw A.e(A.J(a,"double"))},
kD(a){if(typeof a=="number")return a
if(a==null)return a
throw A.e(A.J(a,"double?"))},
hG(a){return typeof a=="number"&&Math.floor(a)===a},
R(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.e(A.J(a,"int"))},
kG(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.e(A.J(a,"int"))},
kF(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.e(A.J(a,"int?"))},
jt(a){return typeof a=="number"},
bT(a){if(typeof a=="number")return a
throw A.e(A.J(a,"num"))},
kI(a){if(typeof a=="number")return a
if(a==null)return a
throw A.e(A.J(a,"num"))},
kH(a){if(typeof a=="number")return a
if(a==null)return a
throw A.e(A.J(a,"num?"))},
jv(a){return typeof a=="string"},
K(a){if(typeof a=="string")return a
throw A.e(A.J(a,"String"))},
kJ(a){if(typeof a=="string")return a
if(a==null)return a
throw A.e(A.J(a,"String"))},
hC(a){if(typeof a=="string")return a
if(a==null)return a
throw A.e(A.J(a,"String?"))},
jC(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.L(a[q],b)
return s},
hE(a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=", "
if(a6!=null){s=a6.length
if(a5==null){a5=A.B([],t.s)
r=null}else r=a5.length
q=a5.length
for(p=s;p>0;--p)B.b.v(a5,"T"+(q+p))
for(o=t.X,n=t._,m="<",l="",p=0;p<s;++p,l=a3){k=a5.length
j=k-1-p
if(!(j>=0))return A.i(a5,j)
m=B.i.bL(m+l,a5[j])
i=a6[p]
h=i.x
if(!(h===2||h===3||h===4||h===5||i===o))if(!(i===n))k=!1
else k=!0
else k=!0
if(!k)m+=" extends "+A.L(i,a5)}m+=">"}else{m=""
r=null}o=a4.y
g=a4.z
f=g.a
e=f.length
d=g.b
c=d.length
b=g.c
a=b.length
a0=A.L(o,a5)
for(a1="",a2="",p=0;p<e;++p,a2=a3)a1+=a2+A.L(f[p],a5)
if(c>0){a1+=a2+"["
for(a2="",p=0;p<c;++p,a2=a3)a1+=a2+A.L(d[p],a5)
a1+="]"}if(a>0){a1+=a2+"{"
for(a2="",p=0;p<a;p+=3,a2=a3){a1+=a2
if(b[p+1])a1+="required "
a1+=A.L(b[p+2],a5)+" "+b[p]}a1+="}"}if(r!=null){a5.toString
a5.length=r}return m+"("+a1+") => "+a0},
L(a,b){var s,r,q,p,o,n,m,l=a.x
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=A.L(a.y,b)
return s}if(l===7){r=a.y
s=A.L(r,b)
q=r.x
return(q===11||q===12?"("+s+")":s)+"?"}if(l===8)return"FutureOr<"+A.L(a.y,b)+">"
if(l===9){p=A.jH(a.y)
o=a.z
return o.length>0?p+("<"+A.jC(o,b)+">"):p}if(l===11)return A.hE(a,b,null)
if(l===12)return A.hE(a.y,b,a.z)
if(l===13){n=a.y
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.i(b,n)
return b[n]}return"?"},
jH(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
jg(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
jf(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.cQ(a,b,!1)
else if(typeof m=="number"){s=m
r=A.bP(a,5,"#")
q=A.ff(s)
for(p=0;p<s;++p)q[p]=r
o=A.bO(a,b,q)
n[b]=o
return o}else return m},
jd(a,b){return A.hz(a.tR,b)},
jc(a,b){return A.hz(a.eT,b)},
cQ(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.ht(A.hr(a,null,b,c))
r.set(b,s)
return s},
fe(a,b,c){var s,r,q=b.Q
if(q==null)q=b.Q=new Map()
s=q.get(c)
if(s!=null)return s
r=A.ht(A.hr(a,b,c,!0))
q.set(c,r)
return r},
je(a,b,c){var s,r,q,p=b.as
if(p==null)p=b.as=new Map()
s=c.at
r=p.get(s)
if(r!=null)return r
q=A.fJ(a,b,c.x===10?c.z:[c])
p.set(s,q)
return q},
ah(a,b){b.a=A.jo
b.b=A.jp
return b},
bP(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.X(null,null)
s.x=b
s.at=c
r=A.ah(a,s)
a.eC.set(c,r)
return r},
hy(a,b,c){var s,r=b.at+"*",q=a.eC.get(r)
if(q!=null)return q
s=A.ja(a,b,r,c)
a.eC.set(r,s)
return s},
ja(a,b,c,d){var s,r,q
if(d){s=b.x
if(!A.aa(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new A.X(null,null)
q.x=6
q.y=b
q.at=c
return A.ah(a,q)},
fL(a,b,c){var s,r=b.at+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.j9(a,b,r,c)
a.eC.set(r,s)
return s},
j9(a,b,c,d){var s,r,q,p
if(d){s=b.x
if(!A.aa(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&A.bY(b.y)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.I)return t.P
else if(s===6){q=b.y
if(q.x===8&&A.bY(q.y))return q
else return A.hh(a,b)}}p=new A.X(null,null)
p.x=7
p.y=b
p.at=c
return A.ah(a,p)},
hx(a,b,c){var s,r=b.at+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.j7(a,b,r,c)
a.eC.set(r,s)
return s},
j7(a,b,c,d){var s,r,q
if(d){s=b.x
if(!A.aa(b))if(!(b===t._))r=!1
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return A.bO(a,"ar",[b])
else if(b===t.P||b===t.T)return t.bc}q=new A.X(null,null)
q.x=8
q.y=b
q.at=c
return A.ah(a,q)},
jb(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.X(null,null)
s.x=13
s.y=b
s.at=q
r=A.ah(a,s)
a.eC.set(q,r)
return r},
cP(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].at
return s},
j6(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].at}return s},
bO(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.cP(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.X(null,null)
r.x=9
r.y=b
r.z=c
if(c.length>0)r.c=c[0]
r.at=p
q=A.ah(a,r)
a.eC.set(p,q)
return q},
fJ(a,b,c){var s,r,q,p,o,n
if(b.x===10){s=b.y
r=b.z.concat(c)}else{r=c
s=b}q=s.at+(";<"+A.cP(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.X(null,null)
o.x=10
o.y=s
o.z=r
o.at=q
n=A.ah(a,o)
a.eC.set(q,n)
return n},
hw(a,b,c){var s,r,q,p,o,n=b.at,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.cP(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.cP(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.j6(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.X(null,null)
p.x=11
p.y=b
p.z=c
p.at=r
o=A.ah(a,p)
a.eC.set(r,o)
return o},
fK(a,b,c,d){var s,r=b.at+("<"+A.cP(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.j8(a,b,c,r,d)
a.eC.set(r,s)
return s},
j8(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.ff(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.x===1){r[p]=o;++q}}if(q>0){n=A.a8(a,b,r,0)
m=A.bW(a,c,r,0)
return A.fK(a,n,m,c!==m)}}l=new A.X(null,null)
l.x=12
l.y=b
l.z=c
l.at=d
return A.ah(a,l)},
hr(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
ht(a){var s,r,q,p,o,n,m,l,k,j,i,h=a.r,g=a.s
for(s=h.length,r=0;r<s;){q=h.charCodeAt(r)
if(q>=48&&q<=57)r=A.j1(r+1,q,h,g)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36)r=A.hs(a,r,h,g,!1)
else if(q===46)r=A.hs(a,r,h,g,!0)
else{++r
switch(q){case 44:break
case 58:g.push(!1)
break
case 33:g.push(!0)
break
case 59:g.push(A.ag(a.u,a.e,g.pop()))
break
case 94:g.push(A.jb(a.u,g.pop()))
break
case 35:g.push(A.bP(a.u,5,"#"))
break
case 64:g.push(A.bP(a.u,2,"@"))
break
case 126:g.push(A.bP(a.u,3,"~"))
break
case 60:g.push(a.p)
a.p=g.length
break
case 62:p=a.u
o=g.splice(a.p)
A.fI(a.u,a.e,o)
a.p=g.pop()
n=g.pop()
if(typeof n=="string")g.push(A.bO(p,n,o))
else{m=A.ag(p,a.e,n)
switch(m.x){case 11:g.push(A.fK(p,m,o,a.n))
break
default:g.push(A.fJ(p,m,o))
break}}break
case 38:A.j2(a,g)
break
case 42:p=a.u
g.push(A.hy(p,A.ag(p,a.e,g.pop()),a.n))
break
case 63:p=a.u
g.push(A.fL(p,A.ag(p,a.e,g.pop()),a.n))
break
case 47:p=a.u
g.push(A.hx(p,A.ag(p,a.e,g.pop()),a.n))
break
case 40:g.push(a.p)
a.p=g.length
break
case 41:p=a.u
l=new A.cD()
k=p.sEA
j=p.sEA
n=g.pop()
if(typeof n=="number")switch(n){case-1:k=g.pop()
break
case-2:j=g.pop()
break
default:g.push(n)
break}else g.push(n)
o=g.splice(a.p)
A.fI(a.u,a.e,o)
a.p=g.pop()
l.a=o
l.b=k
l.c=j
g.push(A.hw(p,A.ag(p,a.e,g.pop()),l))
break
case 91:g.push(a.p)
a.p=g.length
break
case 93:o=g.splice(a.p)
A.fI(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-1)
break
case 123:g.push(a.p)
a.p=g.length
break
case 125:o=g.splice(a.p)
A.j4(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-2)
break
default:throw"Bad character "+q}}}i=g.pop()
return A.ag(a.u,a.e,i)},
j1(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
hs(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.x===10)o=o.y
n=A.jg(s,o.y)[p]
if(n==null)A.ab('No "'+p+'" in "'+A.iR(o)+'"')
d.push(A.fe(s,o,n))}else d.push(p)
return m},
j2(a,b){var s=b.pop()
if(0===s){b.push(A.bP(a.u,1,"0&"))
return}if(1===s){b.push(A.bP(a.u,4,"1&"))
return}throw A.e(A.d0("Unexpected extended operation "+A.r(s)))},
ag(a,b,c){if(typeof c=="string")return A.bO(a,c,a.sEA)
else if(typeof c=="number")return A.j3(a,b,c)
else return c},
fI(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.ag(a,b,c[s])},
j4(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.ag(a,b,c[s])},
j3(a,b,c){var s,r,q=b.x
if(q===10){if(c===0)return b.y
s=b.z
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.y
q=b.x}else if(c===0)return b
if(q!==9)throw A.e(A.d0("Indexed base must be an interface type"))
s=b.z
if(c<=s.length)return s[c-1]
throw A.e(A.d0("Bad index "+c+" for "+b.l(0)))},
A(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(!A.aa(d))if(!(d===t._))s=!1
else s=!0
else s=!0
if(s)return!0
r=b.x
if(r===4)return!0
if(A.aa(b))return!1
if(b.x!==1)s=!1
else s=!0
if(s)return!0
q=r===13
if(q)if(A.A(a,c[b.y],c,d,e))return!0
p=d.x
s=b===t.P||b===t.T
if(s){if(p===8)return A.A(a,b,c,d.y,e)
return d===t.P||d===t.T||p===7||p===6}if(d===t.K){if(r===8)return A.A(a,b.y,c,d,e)
if(r===6)return A.A(a,b.y,c,d,e)
return r!==7}if(r===6)return A.A(a,b.y,c,d,e)
if(p===6){s=A.hh(a,d)
return A.A(a,b,c,s,e)}if(r===8){if(!A.A(a,b.y,c,d,e))return!1
return A.A(a,A.hg(a,b),c,d,e)}if(r===7){s=A.A(a,t.P,c,d,e)
return s&&A.A(a,b.y,c,d,e)}if(p===8){if(A.A(a,b,c,d.y,e))return!0
return A.A(a,b,c,A.hg(a,d),e)}if(p===7){s=A.A(a,b,c,t.P,e)
return s||A.A(a,b,c,d.y,e)}if(q)return!1
s=r!==11
if((!s||r===12)&&d===t.Y)return!0
if(p===12){if(b===t.g)return!0
if(r!==12)return!1
o=b.z
n=d.z
m=o.length
if(m!==n.length)return!1
c=c==null?o:o.concat(c)
e=e==null?n:n.concat(e)
for(l=0;l<m;++l){k=o[l]
j=n[l]
if(!A.A(a,k,c,j,e)||!A.A(a,j,e,k,c))return!1}return A.hF(a,b.y,c,d.y,e)}if(p===11){if(b===t.g)return!0
if(s)return!1
return A.hF(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return A.jr(a,b,c,d,e)}return!1},
hF(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!A.A(a3,a4.y,a5,a6.y,a7))return!1
s=a4.z
r=a6.z
q=s.a
p=r.a
o=q.length
n=p.length
if(o>n)return!1
m=n-o
l=s.b
k=r.b
j=l.length
i=k.length
if(o+j<n+i)return!1
for(h=0;h<o;++h){g=q[h]
if(!A.A(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!A.A(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!A.A(a3,k[h],a7,g,a5))return!1}f=s.c
e=r.c
d=f.length
c=e.length
for(b=0,a=0;a<c;a+=3){a0=e[a]
for(;!0;){if(b>=d)return!1
a1=f[b]
b+=3
if(a0<a1)return!1
a2=f[b-2]
if(a1<a0){if(a2)return!1
continue}g=e[a+1]
if(a2&&!g)return!1
g=f[b-1]
if(!A.A(a3,e[a+2],a7,g,a5))return!1
break}}for(;b<d;){if(f[b+1])return!1
b+=3}return!0},
jr(a,b,c,d,e){var s,r,q,p,o,n,m,l=b.y,k=d.y
for(;l!==k;){s=a.tR[l]
if(s==null)return!1
if(typeof s=="string"){l=s
continue}r=s[k]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.fe(a,b,r[o])
return A.hB(a,p,null,c,d.z,e)}n=b.z
m=d.z
return A.hB(a,n,null,c,m,e)},
hB(a,b,c,d,e,f){var s,r,q,p=b.length
for(s=0;s<p;++s){r=b[s]
q=e[s]
if(!A.A(a,r,d,q,f))return!1}return!0},
bY(a){var s,r=a.x
if(!(a===t.P||a===t.T))if(!A.aa(a))if(r!==7)if(!(r===6&&A.bY(a.y)))s=r===8&&A.bY(a.y)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
jY(a){var s
if(!A.aa(a))if(!(a===t._))s=!1
else s=!0
else s=!0
return s},
aa(a){var s=a.x
return s===2||s===3||s===4||s===5||a===t.X},
hz(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
ff(a){return a>0?new Array(a):v.typeUniverse.sEA},
X:function X(a,b){var _=this
_.a=a
_.b=b
_.w=_.r=_.c=null
_.x=0
_.at=_.as=_.Q=_.z=_.y=null},
cD:function cD(){this.c=this.b=this.a=null},
cO:function cO(a){this.a=a},
cB:function cB(){},
bN:function bN(a){this.a=a},
iV(){var s,r,q={}
if(self.scheduleImmediate!=null)return A.jK()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(A.aA(new A.eL(q),1)).observe(s,{childList:true})
return new A.eK(q,s,r)}else if(self.setImmediate!=null)return A.jL()
return A.jM()},
iW(a){self.scheduleImmediate(A.aA(new A.eM(t.M.a(a)),0))},
iX(a){self.setImmediate(A.aA(new A.eN(t.M.a(a)),0))},
iY(a){A.fF(B.M,t.M.a(a))},
fF(a,b){return A.j5(a.a/1000|0,b)},
j5(a,b){var s=new A.cN()
s.c_(a,b)
return s},
d1(a,b){var s=A.cT(a,"error",t.K)
return new A.b3(s,b==null?A.fZ(a):b)},
fZ(a){var s
if(t.R.b(a)){s=a.gaR()
if(s!=null)return s}return B.K},
fG(a,b){var s,r,q
for(s=t.c;r=a.a,(r&4)!==0;)a=s.a(a.c)
if((r&24)!==0){q=b.aS()
b.b0(a)
A.aU(b,q)}else{q=t.F.a(b.c)
b.a=b.a&1|4
b.c=a
a.bu(q)}},
aU(a,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c={},b=c.a=a
for(s=t.n,r=t.F,q=t.d;!0;){p={}
o=b.a
n=(o&16)===0
m=!n
if(a0==null){if(m&&(o&1)===0){l=s.a(b.c)
A.fj(l.a,l.b)}return}p.a=a0
k=a0.a
for(b=a0;k!=null;b=k,k=j){b.a=null
A.aU(c.a,b)
p.a=k
j=k.a}o=c.a
i=o.c
p.b=m
p.c=i
if(n){h=b.c
h=(h&1)!==0||(h&15)===8}else h=!0
if(h){g=b.b.b
if(m){o=o.b===g
o=!(o||o)}else o=!1
if(o){s.a(i)
A.fj(i.a,i.b)
return}f=$.z
if(f!==g)$.z=g
else f=null
b=b.c
if((b&15)===8)new A.f0(p,c,m).$0()
else if(n){if((b&1)!==0)new A.f_(p,i).$0()}else if((b&2)!==0)new A.eZ(c,p).$0()
if(f!=null)$.z=f
b=p.c
if(q.b(b)){o=p.a.$ti
o=o.i("ar<2>").b(b)||!o.z[1].b(b)}else o=!1
if(o){q.a(b)
e=p.a.b
if((b.a&24)!==0){d=r.a(e.c)
e.c=null
a0=e.aT(d)
e.a=b.a&30|e.a&1
e.c=b.c
c.a=b
continue}else A.fG(b,e)
return}}e=p.a.b
d=r.a(e.c)
e.c=null
a0=e.aT(d)
b=p.b
o=p.c
if(!b){e.$ti.c.a(o)
e.a=8
e.c=o}else{s.a(o)
e.a=e.a&1|16
e.c=o}c.a=e
b=e}},
jA(a,b){var s=t.C
if(s.b(a))return s.a(a)
s=t.v
if(s.b(a))return s.a(a)
throw A.e(A.fY(a,"onError",u.c))},
jz(){var s,r
for(s=$.aW;s!=null;s=$.aW){$.bV=null
r=s.b
$.aW=r
if(r==null)$.bU=null
s.a.$0()}},
jE(){$.fN=!0
try{A.jz()}finally{$.bV=null
$.fN=!1
if($.aW!=null)$.fW().$1(A.hM())}},
hJ(a){var s=new A.cx(a),r=$.bU
if(r==null){$.aW=$.bU=s
if(!$.fN)$.fW().$1(A.hM())}else $.bU=r.b=s},
jD(a){var s,r,q,p=$.aW
if(p==null){A.hJ(a)
$.bV=$.bU
return}s=new A.cx(a)
r=$.bV
if(r==null){s.b=p
$.aW=$.bV=s}else{q=r.b
s.b=q
$.bV=r.b=s
if(q==null)$.bU=s}},
k5(a){var s=null,r=$.z
if(B.h===r){A.aX(s,s,B.h,a)
return}A.aX(s,s,r,t.M.a(r.b6(a)))},
hm(a,b){var s=$.z
if(s===B.h)return A.fF(a,t.M.a(b))
return A.fF(a,t.M.a(s.b6(b)))},
fj(a,b){A.jD(new A.fk(a,b))},
hH(a,b,c,d,e){var s,r=$.z
if(r===c)return d.$0()
$.z=c
s=r
try{r=d.$0()
return r}finally{$.z=s}},
hI(a,b,c,d,e,f,g){var s,r=$.z
if(r===c)return d.$1(e)
$.z=c
s=r
try{r=d.$1(e)
return r}finally{$.z=s}},
jB(a,b,c,d,e,f,g,h,i){var s,r=$.z
if(r===c)return d.$2(e,f)
$.z=c
s=r
try{r=d.$2(e,f)
return r}finally{$.z=s}},
aX(a,b,c,d){t.M.a(d)
if(B.h!==c)d=c.b6(d)
A.hJ(d)},
eL:function eL(a){this.a=a},
eK:function eK(a,b,c){this.a=a
this.b=b
this.c=c},
eM:function eM(a){this.a=a},
eN:function eN(a){this.a=a},
cN:function cN(){this.b=null},
fd:function fd(a,b){this.a=a
this.b=b},
b3:function b3(a,b){this.a=a
this.b=b},
bB:function bB(){},
bA:function bA(a,b){this.a=a
this.$ti=b},
bM:function bM(a,b){this.a=a
this.$ti=b},
bE:function bE(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
I:function I(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
eR:function eR(a,b){this.a=a
this.b=b},
eY:function eY(a,b){this.a=a
this.b=b},
eU:function eU(a){this.a=a},
eV:function eV(a){this.a=a},
eW:function eW(a,b,c){this.a=a
this.b=b
this.c=c},
eT:function eT(a,b){this.a=a
this.b=b},
eX:function eX(a,b){this.a=a
this.b=b},
eS:function eS(a,b,c){this.a=a
this.b=b
this.c=c},
f0:function f0(a,b,c){this.a=a
this.b=b
this.c=c},
f1:function f1(a){this.a=a},
f_:function f_(a,b){this.a=a
this.b=b},
eZ:function eZ(a,b){this.a=a
this.b=b},
cx:function cx(a){this.a=a
this.b=null},
bx:function bx(){},
eB:function eB(a,b){this.a=a
this.b=b},
eC:function eC(a,b){this.a=a
this.b=b},
cn:function cn(){},
co:function co(){},
bR:function bR(){},
fk:function fk(a,b){this.a=a
this.b=b},
cI:function cI(){},
f4:function f4(a,b){this.a=a
this.b=b},
f5:function f5(a,b,c){this.a=a
this.b=b
this.c=c},
ha(a,b){return new A.bg(a.i("@<0>").aC(b).i("bg<1,2>"))},
er(a){return new A.bF(a.i("bF<0>"))},
fH(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
iw(a,b,c){var s,r
if(A.fO(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.B([],t.s)
B.b.v($.S,a)
try{A.jy(a,s)}finally{if(0>=$.S.length)return A.i($.S,-1)
$.S.pop()}r=A.hk(b,t.bi.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
fB(a,b,c){var s,r
if(A.fO(a))return b+"..."+c
s=new A.cp(b)
B.b.v($.S,a)
try{r=s
r.a=A.hk(r.a,a,", ")}finally{if(0>=$.S.length)return A.i($.S,-1)
$.S.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
fO(a){var s,r
for(s=$.S.length,r=0;r<s;++r)if(a===$.S[r])return!0
return!1},
jy(a,b){var s,r,q,p,o,n,m,l=a.gaj(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.P())return
s=A.r(l.gR())
B.b.v(b,s)
k+=s.length+2;++j}if(!l.P()){if(j<=5)return
if(0>=b.length)return A.i(b,-1)
r=b.pop()
if(0>=b.length)return A.i(b,-1)
q=b.pop()}else{p=l.gR();++j
if(!l.P()){if(j<=4){B.b.v(b,A.r(p))
return}r=A.r(p)
if(0>=b.length)return A.i(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gR();++j
for(;l.P();p=o,o=n){n=l.gR();++j
if(j>100){while(!0){if(!(k>75&&j>3))break
if(0>=b.length)return A.i(b,-1)
k-=b.pop().length+2;--j}B.b.v(b,"...")
return}}q=A.r(p)
r=A.r(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
while(!0){if(!(k>80&&b.length>3))break
if(0>=b.length)return A.i(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)B.b.v(b,m)
B.b.v(b,q)
B.b.v(b,r)},
hb(a,b){var s,r,q=A.er(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.cV)(a),++r)q.v(0,b.a(a[r]))
return q},
hc(a){var s,r={}
if(A.fO(a))return"{...}"
s=new A.cp("")
try{B.b.v($.S,a)
s.a+="{"
r.a=!0
a.aU(0,new A.et(r,s))
s.a+="}"}finally{if(0>=$.S.length)return A.i($.S,-1)
$.S.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
bF:function bF(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cF:function cF(a){this.a=a
this.b=null},
bG:function bG(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
bk:function bk(){},
F:function F(){},
bn:function bn(){},
et:function et(a,b){this.a=a
this.b=b},
G:function G(){},
bu:function bu(){},
bJ:function bJ(){},
bH:function bH(){},
bS:function bS(){},
ep:function ep(){},
iu(a){if(a instanceof A.E)return a.l(0)
return"Instance of '"+A.ey(a)+"'"},
iv(a,b){a=A.e(a)
if(a==null)a=t.K.a(a)
a.stack=b.l(0)
throw a
throw A.e("unreachable")},
iE(a,b,c,d){var s,r=J.iy(a,d)
if(a!==0&&!0)for(s=0;s<a;++s)r[s]=b
return r},
es(a,b,c){var s=A.iD(a,c)
return s},
iD(a,b){var s,r
if(Array.isArray(a))return A.B(a.slice(0),b.i("C<0>"))
s=A.B([],b.i("C<0>"))
for(r=J.bZ(a);r.P();)B.b.v(s,r.gR())
return s},
hk(a,b,c){var s=J.bZ(b)
if(!s.P())return a
if(c.length===0){do a+=A.r(s.gR())
while(s.P())}else{a+=A.r(s.gR())
for(;s.P();)a=a+c+A.r(s.gR())}return a},
iq(){return new A.aJ(Date.now(),!1)},
ir(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
is(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
c8(a){if(a>=10)return""+a
return"0"+a},
ca(a){if(typeof a=="number"||A.fh(a)||a==null)return J.c0(a)
if(typeof a=="string")return JSON.stringify(a)
return A.iu(a)},
d0(a){return new A.b2(a)},
d_(a,b){return new A.a3(!1,null,b,a)},
fY(a,b,c){return new A.a3(!0,a,b,c)},
iP(a,b){return new A.bs(null,null,!0,a,b,"Value not in range")},
ez(a,b,c,d,e){return new A.bs(b,c,!0,a,d,"Invalid value")},
iQ(a,b,c){if(a>c)throw A.e(A.ez(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.e(A.ez(b,a,c,"end",null))
return b}return c},
fA(a,b,c,d,e){var s=A.R(e==null?J.c_(b):e)
return new A.cc(s,!0,a,c,"Index out of range")},
a1(a){return new A.cv(a)},
eF(a){return new A.ct(a)},
bw(a){return new A.aP(a)},
aI(a){return new A.c5(a)},
iG(a,b){var s,r=a.gO(a)
b=A.br(b)
s=$.i8()
return A.iS(A.hl(A.hl(s,r),b))},
aJ:function aJ(a,b){this.a=a
this.b=b},
aL:function aL(a){this.a=a},
u:function u(){},
b2:function b2(a){this.a=a},
af:function af(){},
ch:function ch(){},
a3:function a3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bs:function bs(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
cc:function cc(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
cv:function cv(a){this.a=a},
ct:function ct(a){this.a=a},
aP:function aP(a){this.a=a},
c5:function c5(a){this.a=a},
ci:function ci(){},
bv:function bv(){},
c7:function c7(a){this.a=a},
eQ:function eQ(a){this.a=a},
t:function t(){},
N:function N(){},
D:function D(){},
v:function v(){},
cK:function cK(){},
cp:function cp(a){this.a=a},
c6(a,b){var s,r,q,p=!0,o=!0
b=b
r=document.createEvent("CustomEvent")
r.toString
s=t.h.a(r)
s._dartDetail=b
if(t.j.b(b)||t.f.b(b)||typeof b=="string"||typeof b=="number")try{b=new A.f9([],[]).aB(b)
J.fw(s,a,p,o,b)}catch(q){J.fw(s,a,p,o,null)}else J.fw(s,a,p,o,null)
return s},
it(a,b,c){var s,r,q,p=document.body
p.toString
s=t.ba
s=new A.ay(new A.H(B.p.ak(p,a,b,c)),s.i("M(F.E)").a(new A.ej()),s.i("ay<F.E>"))
r=s.gaj(s)
if(!r.P())A.ab(A.h6())
q=r.gR()
if(r.P())A.ab(A.ix())
return t.Q.a(q)},
b7(a){var s,r,q="element tag unavailable"
try{s=J.b0(a)
s.gbI(a)
q=s.gbI(a)}catch(r){}return q},
d(a,b,c,d,e){var s=A.hK(new A.eP(c),t.B),r=s!=null
if(r&&!0){t.E.a(s)
if(r)J.ib(a,b,s,!1)}return new A.cC(a,b,s,!1,e.i("cC<0>"))},
hq(a){var s=document.createElement("a")
s.toString
s=new A.cJ(s,t.at.a(window.location))
s=new A.az(s)
s.bY(a)
return s},
j_(a,b,c,d){t.Q.a(a)
A.K(b)
A.K(c)
t.G.a(d)
return!0},
j0(a,b,c,d){var s,r,q,p,o
t.Q.a(a)
A.K(b)
A.K(c)
s=t.G.a(d).a
r=s.a
B.z.scC(r,c)
q=r.hostname
s=s.b
if(q==s.hostname){p=r.port
o=s.port
o.toString
if(p===o){p=r.protocol
s=s.protocol
s.toString
s=p===s}else s=!1}else s=!1
if(!s)if(q==="")if(r.port===""){s=r.protocol
s=s===":"||s===""}else s=!1
else s=!1
else s=!0
return s},
hu(){var s=t.N,r=A.hb(B.u,s),q=A.B(["TEMPLATE"],t.s),p=t.bm.a(new A.fc())
s=new A.cM(r,A.er(s),A.er(s),A.er(s),null)
s.bZ(null,new A.V(B.u,p,t.cw),q,null)
return s},
hK(a,b){var s=$.z
if(s===B.h)return a
return s.cm(a,b)},
y(a){return document.querySelector(a)},
f:function f(){},
aD:function aD(){},
c1:function c1(){},
aE:function aE(){},
am:function am(){},
aG:function aG(){},
an:function an(){},
b4:function b4(){},
Z:function Z(){},
b5:function b5(){},
eh:function eh(){},
ao:function ao(){},
aK:function aK(){},
ap:function ap(){},
ei:function ei(){},
c9:function c9(){},
q:function q(){},
ej:function ej(){},
b:function b(){},
o:function o(){},
cb:function cb(){},
b9:function b9(){},
as:function as(){},
ba:function ba(){},
au:function au(){},
bl:function bl(){},
P:function P(){},
H:function H(a){this.a=a},
h:function h(){},
bo:function bo(){},
cl:function cl(){},
aw:function aw(){},
by:function by(){},
cq:function cq(){},
cr:function cr(){},
aQ:function aQ(){},
ax:function ax(){},
a6:function a6(){},
a0:function a0(){},
aS:function aS(){},
eG:function eG(a){this.a=a},
aT:function aT(){},
bI:function bI(){},
cy:function cy(){},
cA:function cA(a){this.a=a},
fz:function fz(a,b){this.a=a
this.$ti=b},
bD:function bD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
bC:function bC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
cC:function cC(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
eP:function eP(a){this.a=a},
az:function az(a){this.a=a},
a_:function a_(){},
bp:function bp(a){this.a=a},
ev:function ev(a){this.a=a},
eu:function eu(a,b,c){this.a=a
this.b=b
this.c=c},
bK:function bK(){},
f6:function f6(){},
f7:function f7(){},
cM:function cM(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
fc:function fc(){},
cL:function cL(){},
aq:function aq(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
cJ:function cJ(a,b){this.a=a
this.b=b},
bQ:function bQ(a){this.a=a
this.b=0},
fg:function fg(a){this.a=a},
cz:function cz(){},
cG:function cG(){},
cH:function cH(){},
cR:function cR(){},
cS:function cS(){},
f8:function f8(){},
fa:function fa(a,b){this.a=a
this.b=b},
fb:function fb(a,b){this.a=a
this.b=b},
eH:function eH(){},
eJ:function eJ(a,b){this.a=a
this.b=b},
f9:function f9(a,b){this.a=a
this.b=b},
eI:function eI(a,b){this.a=a
this.b=b
this.c=!1},
k3(a,b){var s=new A.I($.z,b.i("I<0>")),r=new A.bA(s,b.i("bA<0>"))
a.then(A.aA(new A.ft(r,b),1),A.aA(new A.fu(r),1))
return s},
ew:function ew(a){this.a=a},
ft:function ft(a,b){this.a=a
this.b=b},
fu:function fu(a){this.a=a},
hR(a,b,c){A.hN(c,t.H,"T","min")
return Math.min(c.a(a),c.a(b))},
hQ(a,b,c){A.hN(c,t.H,"T","max")
return Math.max(c.a(a),c.a(b))},
f2:function f2(){},
aN:function aN(){},
c:function c(){},
m(a,b,c){var s=new A.cX(a,b,c)
s.bW(a,b,c)
return s},
cX:function cX(a,b,c){var _=this
_.a=a
_.c=_.b=0
_.d=b
_.e=c
_.f=1
_.r=""
_.w=$
_.x=0
_.y=1},
cY:function cY(a){this.a=a},
cZ:function cZ(a){this.a=a},
c2:function c2(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7){var _=this
_.k1=_.id=_.cy=_.a=$
_.q=a
_.ac=b
_.a_=c
_.a0=d
_.a8=e
_.a1=f
_.Y=g
_.L=h
_.S=i
_.ad=j
_.N=k
_.U=l
_.a2=m
_.a3=n
_.a4=o
_.T=p
_.ah=q
_.ai=r
_.az=s
_.M=a0
_.V=a1
_.B=a2
_.aL=a3
_.aM=a4
_.aN=a5
_.bC=a6
_.bD=a7},
d2:function d2(a){this.a=a},
d3:function d3(a){this.a=a},
d4:function d4(a){this.a=a},
d5:function d5(a){this.a=a},
d6:function d6(a){this.a=a},
d7:function d7(a){this.a=a},
d8:function d8(a){this.a=a},
d9:function d9(a){this.a=a},
da:function da(a){this.a=a},
db:function db(a){this.a=a},
dc:function dc(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=0
_.r=1
_.x=_.w=$
_.ae=a
_.af=b
_.am=c
_.F=d
_.G=e
_.H=f
_.J=g
_.I=h
_.K=i
_.a6=j
_.X=k
_.a7=l
_.an=m
_.Z=n
_.ag="butt"
_.t=o
_.u=p
_.q=q
_.ac=r
_.a_=s
_.a0=a0
_.a8=a1
_.a1=a2
_.Y=a3
_.L=a4
_.S=a5
_.ad=a6
_.N=a7
_.U=a8
_.a2=a9
_.a3=b0
_.a4=b1
_.T=b2
_.ah=b3
_.ai=b4
_.az=0
_.M="C1"
_.V="L1"
_.B=""},
dd:function dd(a){this.a=a},
de:function de(a){this.a=a},
df:function df(a){this.a=a},
dr:function dr(a){this.a=a},
dC:function dC(a){this.a=a},
dN:function dN(a){this.a=a},
dY:function dY(a){this.a=a},
e6:function e6(a){this.a=a},
e7:function e7(a){this.a=a},
e8:function e8(a){this.a=a},
e9:function e9(a){this.a=a},
dg:function dg(a){this.a=a},
dh:function dh(a){this.a=a},
di:function di(a){this.a=a},
dj:function dj(a){this.a=a},
dk:function dk(a){this.a=a},
dl:function dl(a){this.a=a},
dm:function dm(a){this.a=a},
dn:function dn(a){this.a=a},
dp:function dp(a){this.a=a},
dq:function dq(a){this.a=a},
ds:function ds(a){this.a=a},
dt:function dt(a){this.a=a},
du:function du(a){this.a=a},
dv:function dv(a){this.a=a},
dw:function dw(a){this.a=a},
dx:function dx(a){this.a=a},
dy:function dy(a){this.a=a},
dz:function dz(a){this.a=a},
dA:function dA(a){this.a=a},
dB:function dB(a){this.a=a},
dD:function dD(a){this.a=a},
dE:function dE(a){this.a=a},
dF:function dF(a){this.a=a},
dG:function dG(a){this.a=a},
dH:function dH(a){this.a=a},
dI:function dI(a){this.a=a},
dJ:function dJ(a){this.a=a},
dK:function dK(a){this.a=a},
dL:function dL(a){this.a=a},
dM:function dM(a){this.a=a},
dO:function dO(a){this.a=a},
dP:function dP(a){this.a=a},
dQ:function dQ(a){this.a=a},
dR:function dR(a){this.a=a},
dS:function dS(a){this.a=a},
dT:function dT(a){this.a=a},
dU:function dU(a){this.a=a},
dV:function dV(a){this.a=a},
dW:function dW(a){this.a=a},
dX:function dX(a){this.a=a},
dZ:function dZ(a){this.a=a},
e_:function e_(a){this.a=a},
e0:function e0(a){this.a=a},
e1:function e1(a){this.a=a},
e2:function e2(a){this.a=a},
e3:function e3(a){this.a=a},
e4:function e4(a){this.a=a},
e5:function e5(a){this.a=a},
l(a,b,c){var s=new A.ea()
s.bX(a,b,c)
return s},
ea:function ea(){this.a=$},
eb:function eb(a){this.a=a},
ec:function ec(a){this.a=a},
ed:function ed(a){this.a=a},
ee:function ee(a){this.a=a},
ef:function ef(a){this.a=a},
fx(a,b,c){var s=new A.eg(a,b,c)
s.aF()
s.at=""
return s},
eg:function eg(a,b,c){var _=this
_.a=$
_.b=a
_.d=_.c=$
_.e=b
_.r=_.f=$
_.w=c
_.as=_.Q=_.z=_.y=_.x=$
_.at=""
_.ax=0
_.ay=1},
aH:function aH(){},
b8:function b8(a,b,c){this.a=a
this.b=b
this.c=c},
ek:function ek(a){this.a=a},
el:function el(a){this.a=a},
em:function em(a){this.a=a},
en:function en(){},
bt:function bt(a,b,c){this.a=a
this.b=b
this.c=c},
k_(){var s=document.querySelector("#title")
if(s!=null)J.ig(s,"Bezier Curves Big Circus")
s=$.hW()
$.hA.b=s
$.hA.toString
s.cG()}},J={
fV(a,b,c,d){return{i:a,p:b,e:c,x:d}},
fn(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.fU==null){A.jT()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw A.e(A.eF("Return interceptor for "+A.r(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.f3
if(o==null)o=$.f3=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=A.jZ(a)
if(p!=null)return p
if(typeof a=="function")return B.R
s=Object.getPrototypeOf(a)
if(s==null)return B.v
if(s===Object.prototype)return B.v
if(typeof q=="function"){o=$.f3
if(o==null)o=$.f3=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:B.o,enumerable:false,writable:true,configurable:true})
return B.o}return B.o},
iy(a,b){if(a<0||a>4294967295)throw A.e(A.ez(a,0,4294967295,"length",null))
return J.iz(new Array(a),b)},
iz(a,b){return J.h7(A.B(a,b.i("C<0>")),b)},
h7(a,b){a.fixed$length=Array
return a},
h9(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
iA(a,b){var s,r
for(s=a.length;b<s;){r=B.i.b1(a,b)
if(r!==32&&r!==13&&!J.h9(r))break;++b}return b},
iB(a,b){var s,r
for(;b>0;b=s){s=b-1
r=B.i.bA(a,s)
if(r!==32&&r!==13&&!J.h9(r))break}return b},
b_(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.bd.prototype
return J.ce.prototype}if(typeof a=="string")return J.at.prototype
if(a==null)return J.be.prototype
if(typeof a=="boolean")return J.cd.prototype
if(a.constructor==Array)return J.C.prototype
if(typeof a!="object"){if(typeof a=="function")return J.a5.prototype
return a}if(a instanceof A.v)return a
return J.fn(a)},
cU(a){if(typeof a=="string")return J.at.prototype
if(a==null)return a
if(a.constructor==Array)return J.C.prototype
if(typeof a!="object"){if(typeof a=="function")return J.a5.prototype
return a}if(a instanceof A.v)return a
return J.fn(a)},
fm(a){if(a==null)return a
if(a.constructor==Array)return J.C.prototype
if(typeof a!="object"){if(typeof a=="function")return J.a5.prototype
return a}if(a instanceof A.v)return a
return J.fn(a)},
jN(a){if(typeof a=="string")return J.at.prototype
if(a==null)return a
if(!(a instanceof A.v))return J.aR.prototype
return a},
b0(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.a5.prototype
return a}if(a instanceof A.v)return a
return J.fn(a)},
fv(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.b_(a).ap(a,b)},
i9(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||A.jX(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.cU(a).aa(a,b)},
ia(a,b,c){return J.fm(a).C(a,b,c)},
ib(a,b,c,d){return J.b0(a).c1(a,b,c,d)},
fw(a,b,c,d,e){return J.b0(a).c9(a,b,c,d,e)},
ic(a,b){return J.fm(a).aH(a,b)},
id(a){return J.b0(a).gcl(a)},
cW(a){return J.b_(a).gO(a)},
bZ(a){return J.fm(a).gaj(a)},
c_(a){return J.cU(a).gD(a)},
fX(a){return J.b0(a).cM(a)},
ie(a,b){return J.b0(a).sca(a,b)},
ig(a,b){return J.b0(a).sbJ(a,b)},
ih(a){return J.jN(a).cR(a)},
c0(a){return J.b_(a).l(a)},
bc:function bc(){},
cd:function cd(){},
be:function be(){},
O:function O(){},
ae:function ae(){},
cj:function cj(){},
aR:function aR(){},
a5:function a5(){},
C:function C(a){this.$ti=a},
eo:function eo(a){this.$ti=a},
b1:function b1(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
bf:function bf(){},
bd:function bd(){},
ce:function ce(){},
at:function at(){}},B={}
var w=[A,J,B]
var $={}
A.fC.prototype={}
J.bc.prototype={
ap(a,b){return a===b},
gO(a){return A.br(a)},
l(a){return"Instance of '"+A.ey(a)+"'"}}
J.cd.prototype={
l(a){return String(a)},
gO(a){return a?519018:218159},
$iM:1}
J.be.prototype={
ap(a,b){return null==b},
l(a){return"null"},
gO(a){return 0},
$iD:1}
J.O.prototype={}
J.ae.prototype={
gO(a){return 0},
l(a){return String(a)},
$ih8:1}
J.cj.prototype={}
J.aR.prototype={}
J.a5.prototype={
l(a){var s=a[$.hX()]
if(s==null)return this.bU(a)
return"JavaScript function for "+J.c0(s)},
$ia4:1}
J.C.prototype={
v(a,b){A.ai(a).c.a(b)
if(!!a.fixed$length)A.ab(A.a1("add"))
a.push(b)},
cI(a,b){var s,r=A.iE(a.length,"",!1,t.N)
for(s=0;s<a.length;++s)this.C(r,s,A.r(a[s]))
return r.join(b)},
bG(a,b){var s,r,q
A.ai(a).i("1(1,1)").a(b)
s=a.length
if(s===0)throw A.e(A.h6())
if(0>=s)return A.i(a,0)
r=a[0]
for(q=1;q<s;++q){r=b.$2(r,a[q])
if(s!==a.length)throw A.e(A.aI(a))}return r},
aH(a,b){if(!(b>=0&&b<a.length))return A.i(a,b)
return a[b]},
bx(a,b){var s,r
A.ai(a).i("M(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(A.fP(b.$1(a[r])))return!0
if(a.length!==s)throw A.e(A.aI(a))}return!1},
a5(a,b){var s
for(s=0;s<a.length;++s)if(J.fv(a[s],b))return!0
return!1},
l(a){return A.fB(a,"[","]")},
gaj(a){return new J.b1(a,a.length,A.ai(a).i("b1<1>"))},
gO(a){return A.br(a)},
gD(a){return a.length},
aa(a,b){if(!(b>=0&&b<a.length))throw A.e(A.bX(a,b))
return a[b]},
C(a,b,c){A.R(b)
A.ai(a).c.a(c)
if(!!a.immutable$list)A.ab(A.a1("indexed set"))
if(!(b>=0&&b<a.length))throw A.e(A.bX(a,b))
a[b]=c},
$it:1,
$iT:1}
J.eo.prototype={}
J.b1.prototype={
gR(){var s=this.d
return s==null?this.$ti.c.a(s):s},
P(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw A.e(A.cV(q))
s=r.c
if(s>=p){r.sbr(null)
return!1}r.sbr(q[s]);++r.c
return!0},
sbr(a){this.d=this.$ti.i("1?").a(a)},
$iN:1}
J.bf.prototype={
W(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.e(A.a1(""+a+".toInt()"))},
bz(a){var s,r
if(a>=0){if(a<=2147483647){s=a|0
return a===s?s:s+1}}else if(a>=-2147483648)return a|0
r=Math.ceil(a)
if(isFinite(r))return r
throw A.e(A.a1(""+a+".ceil()"))},
bE(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw A.e(A.a1(""+a+".floor()"))},
a9(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.e(A.a1(""+a+".round()"))},
l(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gO(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
aY(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
return s+b},
bv(a,b){return(a|0)===a?a/b|0:this.ci(a,b)},
ci(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.e(A.a1("Result of truncating division is "+A.r(s)+": "+A.r(a)+" ~/ "+b))},
ab(a,b){var s
if(a>0)s=this.cg(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
cg(a,b){return b>31?0:a>>>b},
$iY:1,
$ix:1}
J.bd.prototype={$ia9:1}
J.ce.prototype={}
J.at.prototype={
bA(a,b){if(b<0)throw A.e(A.bX(a,b))
if(b>=a.length)A.ab(A.bX(a,b))
return a.charCodeAt(b)},
b1(a,b){if(b>=a.length)throw A.e(A.bX(a,b))
return a.charCodeAt(b)},
bL(a,b){return a+b},
bQ(a,b){var s=b.length
if(s>a.length)return!1
return b===a.substring(0,s)},
bh(a,b,c){return a.substring(b,A.iQ(b,c,a.length))},
cR(a){return a.toLowerCase()},
cS(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(this.b1(p,0)===133){s=J.iA(p,1)
if(s===o)return""}else s=0
r=o-1
q=this.bA(p,r)===133?J.iB(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
bM(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.e(B.J)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
cK(a,b,c){var s=b-a.length
if(s<=0)return a
return this.bM(c,s)+a},
l(a){return a},
gO(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gD(a){return a.length},
$ihd:1,
$in:1}
A.bh.prototype={
l(a){return"LateInitializationError: "+this.a}}
A.eA.prototype={}
A.b6.prototype={}
A.U.prototype={
gaj(a){var s=this
return new A.av(s,s.gD(s),s.$ti.i("av<U.E>"))},
aX(a,b){return this.bT(0,this.$ti.i("M(U.E)").a(b))}}
A.av.prototype={
gR(){var s=this.d
return s==null?this.$ti.c.a(s):s},
P(){var s,r=this,q=r.a,p=J.cU(q),o=p.gD(q)
if(r.b!==o)throw A.e(A.aI(q))
s=r.c
if(s>=o){r.sbi(null)
return!1}r.sbi(p.aH(q,s));++r.c
return!0},
sbi(a){this.d=this.$ti.i("1?").a(a)},
$iN:1}
A.V.prototype={
gD(a){return J.c_(this.a)},
aH(a,b){return this.b.$1(J.ic(this.a,b))}}
A.ay.prototype={
gaj(a){return new A.bz(J.bZ(this.a),this.b,this.$ti.i("bz<1>"))}}
A.bz.prototype={
P(){var s,r
for(s=this.a,r=this.b;s.P();)if(A.fP(r.$1(s.gR())))return!0
return!1},
gR(){return this.a.gR()}}
A.bb.prototype={
ap(a,b){if(b==null)return!1
return b instanceof A.bb&&this.a.ap(0,b.a)&&A.fT(this)===A.fT(b)},
gO(a){return A.iG(this.a,A.fT(this))},
l(a){var s=B.b.cI([A.fS(this.$ti.c)],", ")
return this.a.l(0)+" with "+("<"+s+">")}}
A.aM.prototype={
$2(a,b){return this.a.$1$2(a,b,this.$ti.z[0])},
$S(){return A.jV(A.fR(this.a),this.$ti)}}
A.eD.prototype={
ao(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
if(p==null)return null
s=Object.create(null)
r=q.b
if(r!==-1)s.arguments=p[r+1]
r=q.c
if(r!==-1)s.argumentsExpr=p[r+1]
r=q.d
if(r!==-1)s.expr=p[r+1]
r=q.e
if(r!==-1)s.method=p[r+1]
r=q.f
if(r!==-1)s.receiver=p[r+1]
return s}}
A.bq.prototype={
l(a){var s=this.b
if(s==null)return"NoSuchMethodError: "+this.a
return"NoSuchMethodError: method not found: '"+s+"' on null"}}
A.cg.prototype={
l(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.cu.prototype={
l(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.ex.prototype={
l(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.bL.prototype={
l(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$iaO:1}
A.E.prototype={
l(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.hV(r==null?"unknown":r)+"'"},
$ia4:1,
gcT(){return this},
$C:"$1",
$R:1,
$D:null}
A.c3.prototype={$C:"$0",$R:0}
A.c4.prototype={$C:"$2",$R:2}
A.cs.prototype={}
A.cm.prototype={
l(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.hV(s)+"'"}}
A.aF.prototype={
ap(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.aF))return!1
return this.$_target===b.$_target&&this.a===b.a},
gO(a){return(A.hS(this.a)^A.br(this.$_target))>>>0},
l(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.ey(this.a)+"'")}}
A.ck.prototype={
l(a){return"RuntimeError: "+this.a}}
A.cw.prototype={
l(a){return"Assertion failed: "+A.ca(this.a)}}
A.bg.prototype={
gD(a){return this.a},
gaD(){return new A.bi(this,this.$ti.i("bi<1>"))},
aa(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.cH(b)},
cH(a){var s,r,q=this.d
if(q==null)return null
s=q[J.cW(a)&0x3fffffff]
r=this.bF(s,a)
if(r<0)return null
return s[r].b},
C(a,b,c){var s,r,q,p,o,n,m=this,l=m.$ti
l.c.a(b)
l.z[1].a(c)
if(typeof b=="string"){s=m.b
m.bj(s==null?m.b=m.b4():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=m.c
m.bj(r==null?m.c=m.b4():r,b,c)}else{q=m.d
if(q==null)q=m.d=m.b4()
p=J.cW(b)&0x3fffffff
o=q[p]
if(o==null)q[p]=[m.b_(b,c)]
else{n=m.bF(o,b)
if(n>=0)o[n].b=c
else o.push(m.b_(b,c))}}},
aU(a,b){var s,r,q=this
q.$ti.i("~(1,2)").a(b)
s=q.e
r=q.r
for(;s!=null;){b.$2(s.a,s.b)
if(r!==q.r)throw A.e(A.aI(q))
s=s.c}},
bj(a,b,c){var s,r=this.$ti
r.c.a(b)
r.z[1].a(c)
s=a[b]
if(s==null)a[b]=this.b_(b,c)
else s.b=c},
cb(){this.r=this.r+1&1073741823},
b_(a,b){var s=this,r=s.$ti,q=new A.eq(r.c.a(a),r.z[1].a(b))
if(s.e==null)s.e=s.f=q
else{r=s.f
r.toString
q.d=r
s.f=r.c=q}++s.a
s.cb()
return q},
bF(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.fv(a[r].a,b))return r
return-1},
l(a){return A.hc(this)},
b4(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s}}
A.eq.prototype={}
A.bi.prototype={
gD(a){return this.a.a},
gaj(a){var s=this.a,r=new A.bj(s,s.r,this.$ti.i("bj<1>"))
r.c=s.e
return r}}
A.bj.prototype={
gR(){return this.d},
P(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.e(A.aI(q))
s=r.c
if(s==null){r.sbk(null)
return!1}else{r.sbk(s.a)
r.c=s.c
return!0}},
sbk(a){this.d=this.$ti.i("1?").a(a)},
$iN:1}
A.fo.prototype={
$1(a){return this.a(a)},
$S:14}
A.fp.prototype={
$2(a,b){return this.a(a,b)},
$S:15}
A.fq.prototype={
$1(a){return this.a(A.K(a))},
$S:16}
A.eO.prototype={}
A.X.prototype={
i(a){return A.fe(v.typeUniverse,this,a)},
aC(a){return A.je(v.typeUniverse,this,a)}}
A.cD.prototype={}
A.cO.prototype={
l(a){return A.L(this.a,null)}}
A.cB.prototype={
l(a){return this.a}}
A.bN.prototype={$iaf:1}
A.eL.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:4}
A.eK.prototype={
$1(a){var s,r
this.a.a=t.M.a(a)
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:17}
A.eM.prototype={
$0(){this.a.$0()},
$S:5}
A.eN.prototype={
$0(){this.a.$0()},
$S:5}
A.cN.prototype={
c_(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(A.aA(new A.fd(this,b),0),a)
else throw A.e(A.a1("`setTimeout()` not found."))},
by(){if(self.setTimeout!=null){var s=this.b
if(s==null)return
self.clearTimeout(s)
this.b=null}else throw A.e(A.a1("Canceling a timer."))},
$iiT:1}
A.fd.prototype={
$0(){this.a.b=null
this.b.$0()},
$S:1}
A.b3.prototype={
l(a){return A.r(this.a)},
$iu:1,
gaR(){return this.b}}
A.bB.prototype={
bB(a){var s
A.cT(a,"error",t.K)
if((this.a.a&30)!==0)throw A.e(A.bw("Future already completed"))
s=A.fZ(a)
this.au(a,s)}}
A.bA.prototype={
au(a,b){this.a.c3(a,b)}}
A.bM.prototype={
au(a,b){this.a.au(a,b)}}
A.bE.prototype={
cJ(a){if((this.c&15)!==6)return!0
return this.b.b.b8(t.bG.a(this.d),a.a,t.y,t.K)},
cB(a){var s,r=this,q=r.e,p=null,o=t.z,n=t.K,m=a.a,l=r.b.b
if(t.C.b(q))p=l.cO(q,m,a.b,o,n,t.l)
else p=l.b8(t.v.a(q),m,o,n)
try{o=r.$ti.i("2/").a(p)
return o}catch(s){if(t.b7.b(A.ak(s))){if((r.c&1)!==0)throw A.e(A.d_("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.e(A.d_("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.I.prototype={
bK(a,b,c){var s,r,q,p=this.$ti
p.aC(c).i("1/(2)").a(a)
s=$.z
if(s===B.h){if(b!=null&&!t.C.b(b)&&!t.v.b(b))throw A.e(A.fY(b,"onError",u.c))}else{c.i("@<0/>").aC(p.c).i("1(2)").a(a)
if(b!=null)b=A.jA(b,s)}r=new A.I(s,c.i("I<0>"))
q=b==null?1:3
this.bm(new A.bE(r,q,a,b,p.i("@<1>").aC(c).i("bE<1,2>")))
return r},
b9(a,b){return this.bK(a,null,b)},
cf(a){this.a=this.a&1|16
this.c=a},
b0(a){this.a=a.a&30|this.a&1
this.c=a.c},
bm(a){var s,r=this,q=r.a
if(q<=3){a.a=t.F.a(r.c)
r.c=a}else{if((q&4)!==0){s=t.c.a(r.c)
if((s.a&24)===0){s.bm(a)
return}r.b0(s)}A.aX(null,null,r.b,t.M.a(new A.eR(r,a)))}},
bu(a){var s,r,q,p,o,n,m=this,l={}
l.a=a
if(a==null)return
s=m.a
if(s<=3){r=t.F.a(m.c)
m.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){n=t.c.a(m.c)
if((n.a&24)===0){n.bu(a)
return}m.b0(n)}l.a=m.aT(a)
A.aX(null,null,m.b,t.M.a(new A.eY(l,m)))}},
aS(){var s=t.F.a(this.c)
this.c=null
return this.aT(s)},
aT(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
c5(a){var s,r,q,p=this
p.a^=2
try{a.bK(new A.eU(p),new A.eV(p),t.P)}catch(q){s=A.ak(q)
r=A.aB(q)
A.k5(new A.eW(p,s,r))}},
bo(a){var s,r=this,q=r.$ti
q.i("1/").a(a)
s=r.aS()
q.c.a(a)
r.a=8
r.c=a
A.aU(r,s)},
bp(a){var s,r=this
r.$ti.c.a(a)
s=r.aS()
r.a=8
r.c=a
A.aU(r,s)},
au(a,b){var s
t.l.a(b)
s=this.aS()
this.cf(A.d1(a,b))
A.aU(this,s)},
c2(a){var s=this.$ti
s.i("1/").a(a)
if(s.i("ar<1>").b(a)){this.c6(a)
return}this.c4(s.c.a(a))},
c4(a){var s=this
s.$ti.c.a(a)
s.a^=2
A.aX(null,null,s.b,t.M.a(new A.eT(s,a)))},
c6(a){var s=this,r=s.$ti
r.i("ar<1>").a(a)
if(r.b(a)){if((a.a&16)!==0){s.a^=2
A.aX(null,null,s.b,t.M.a(new A.eX(s,a)))}else A.fG(a,s)
return}s.c5(a)},
c3(a,b){this.a^=2
A.aX(null,null,this.b,t.M.a(new A.eS(this,a,b)))},
$iar:1}
A.eR.prototype={
$0(){A.aU(this.a,this.b)},
$S:1}
A.eY.prototype={
$0(){A.aU(this.b,this.a.a)},
$S:1}
A.eU.prototype={
$1(a){var s,r,q,p=this.a
p.a^=2
try{p.bp(p.$ti.c.a(a))}catch(q){s=A.ak(q)
r=A.aB(q)
p.au(s,r)}},
$S:4}
A.eV.prototype={
$2(a,b){this.a.au(t.K.a(a),t.l.a(b))},
$S:18}
A.eW.prototype={
$0(){this.a.au(this.b,this.c)},
$S:1}
A.eT.prototype={
$0(){this.a.bp(this.b)},
$S:1}
A.eX.prototype={
$0(){A.fG(this.b,this.a)},
$S:1}
A.eS.prototype={
$0(){this.a.au(this.b,this.c)},
$S:1}
A.f0.prototype={
$0(){var s,r,q,p,o,n,m=this,l=null
try{q=m.a.a
l=q.b.b.cN(t.O.a(q.d),t.z)}catch(p){s=A.ak(p)
r=A.aB(p)
q=m.c&&t.n.a(m.b.a.c).a===s
o=m.a
if(q)o.c=t.n.a(m.b.a.c)
else o.c=A.d1(s,r)
o.b=!0
return}if(l instanceof A.I&&(l.a&24)!==0){if((l.a&16)!==0){q=m.a
q.c=t.n.a(l.c)
q.b=!0}return}if(t.d.b(l)){n=m.b.a
q=m.a
q.c=l.b9(new A.f1(n),t.z)
q.b=!1}},
$S:1}
A.f1.prototype={
$1(a){return this.a},
$S:19}
A.f_.prototype={
$0(){var s,r,q,p,o,n,m,l
try{q=this.a
p=q.a
o=p.$ti
n=o.c
m=n.a(this.b)
q.c=p.b.b.b8(o.i("2/(1)").a(p.d),m,o.i("2/"),n)}catch(l){s=A.ak(l)
r=A.aB(l)
q=this.a
q.c=A.d1(s,r)
q.b=!0}},
$S:1}
A.eZ.prototype={
$0(){var s,r,q,p,o,n,m=this
try{s=t.n.a(m.a.a.c)
p=m.b
if(p.a.cJ(s)&&p.a.e!=null){p.c=p.a.cB(s)
p.b=!1}}catch(o){r=A.ak(o)
q=A.aB(o)
p=t.n.a(m.a.a.c)
n=m.b
if(p.a===r)n.c=p
else n.c=A.d1(r,q)
n.b=!0}},
$S:1}
A.cx.prototype={}
A.bx.prototype={
gD(a){var s,r,q=this,p={},o=new A.I($.z,t.aQ)
p.a=0
s=A.a2(q)
r=s.i("~(1)?").a(new A.eB(p,q))
t.Z.a(new A.eC(p,o))
A.d(q.a,q.b,r,!1,s.c)
return o}}
A.eB.prototype={
$1(a){A.a2(this.b).c.a(a);++this.a.a},
$S(){return A.a2(this.b).i("~(1)")}}
A.eC.prototype={
$0(){this.b.bo(this.a.a)},
$S:1}
A.cn.prototype={}
A.co.prototype={}
A.bR.prototype={$iho:1}
A.fk.prototype={
$0(){var s=this.a,r=this.b
A.cT(s,"error",t.K)
A.cT(r,"stackTrace",t.l)
A.iv(s,r)},
$S:1}
A.cI.prototype={
cP(a){var s,r,q
t.M.a(a)
try{if(B.h===$.z){a.$0()
return}A.hH(null,null,this,a,t.o)}catch(q){s=A.ak(q)
r=A.aB(q)
A.fj(t.K.a(s),t.l.a(r))}},
cQ(a,b,c){var s,r,q
c.i("~(0)").a(a)
c.a(b)
try{if(B.h===$.z){a.$1(b)
return}A.hI(null,null,this,a,b,t.o,c)}catch(q){s=A.ak(q)
r=A.aB(q)
A.fj(t.K.a(s),t.l.a(r))}},
b6(a){return new A.f4(this,t.M.a(a))},
cm(a,b){return new A.f5(this,b.i("~(0)").a(a),b)},
cN(a,b){b.i("0()").a(a)
if($.z===B.h)return a.$0()
return A.hH(null,null,this,a,b)},
b8(a,b,c,d){c.i("@<0>").aC(d).i("1(2)").a(a)
d.a(b)
if($.z===B.h)return a.$1(b)
return A.hI(null,null,this,a,b,c,d)},
cO(a,b,c,d,e,f){d.i("@<0>").aC(e).aC(f).i("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.z===B.h)return a.$2(b,c)
return A.jB(null,null,this,a,b,c,d,e,f)}}
A.f4.prototype={
$0(){return this.a.cP(this.b)},
$S:1}
A.f5.prototype={
$1(a){var s=this.c
return this.a.cQ(this.b,s.a(a),s)},
$S(){return this.c.i("~(0)")}}
A.bF.prototype={
gaj(a){var s=this,r=new A.bG(s,s.r,A.a2(s).i("bG<1>"))
r.c=s.e
return r},
gD(a){return this.a},
a5(a,b){var s,r
if(b!=="__proto__"){s=this.b
if(s==null)return!1
return t.L.a(s[b])!=null}else{r=this.c7(b)
return r}},
c7(a){var s=this.d
if(s==null)return!1
return this.bs(s[this.bq(a)],a)>=0},
v(a,b){var s,r,q=this
A.a2(q).c.a(b)
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.bl(s==null?q.b=A.fH():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.bl(r==null?q.c=A.fH():r,b)}else return q.c0(b)},
c0(a){var s,r,q,p=this
A.a2(p).c.a(a)
s=p.d
if(s==null)s=p.d=A.fH()
r=p.bq(a)
q=s[r]
if(q==null)s[r]=[p.b5(a)]
else{if(p.bs(q,a)>=0)return!1
q.push(p.b5(a))}return!0},
bl(a,b){A.a2(this).c.a(b)
if(t.L.a(a[b])!=null)return!1
a[b]=this.b5(b)
return!0},
b5(a){var s=this,r=new A.cF(A.a2(s).c.a(a))
if(s.e==null)s.e=s.f=r
else s.f=s.f.b=r;++s.a
s.r=s.r+1&1073741823
return r},
bq(a){return J.cW(a)&1073741823},
bs(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.fv(a[r].a,b))return r
return-1}}
A.cF.prototype={}
A.bG.prototype={
gR(){var s=this.d
return s==null?this.$ti.c.a(s):s},
P(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.e(A.aI(q))
else if(r==null){s.sbn(null)
return!1}else{s.sbn(s.$ti.i("1?").a(r.a))
s.c=r.b
return!0}},
sbn(a){this.d=this.$ti.i("1?").a(a)},
$iN:1}
A.bk.prototype={$it:1,$iT:1}
A.F.prototype={
gaj(a){return new A.av(a,this.gD(a),A.aj(a).i("av<F.E>"))},
aH(a,b){return this.aa(a,b)},
l(a){return A.fB(a,"[","]")}}
A.bn.prototype={}
A.et.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=r.a+=A.r(a)
r.a=s+": "
r.a+=A.r(b)},
$S:20}
A.G.prototype={
aU(a,b){var s,r,q,p=A.a2(this)
p.i("~(G.K,G.V)").a(b)
for(s=J.bZ(this.gaD()),p=p.i("G.V");s.P();){r=s.gR()
q=this.aa(0,r)
b.$2(r,q==null?p.a(q):q)}},
gD(a){return J.c_(this.gaD())},
l(a){return A.hc(this)},
$ibm:1}
A.bu.prototype={
av(a,b){var s
for(s=J.bZ(A.a2(this).i("t<1>").a(b));s.P();)this.v(0,s.gR())},
l(a){return A.fB(this,"{","}")}}
A.bJ.prototype={$it:1,$ihj:1}
A.bH.prototype={}
A.bS.prototype={}
A.ep.prototype={
cq(a){var s,r,q,p,o=A.B([],t.s),n=a.length
for(s=0,r=0,q=0;q<n;++q,r=p){p=B.i.b1(a,q)
if(p!==13){if(p!==10)continue
if(r===13){s=q+1
continue}}B.b.v(o,B.i.bh(a,s,q))
s=q+1}if(s<n)B.b.v(o,B.i.bh(a,s,n))
return o}}
A.aJ.prototype={
ap(a,b){if(b==null)return!1
return b instanceof A.aJ&&this.a===b.a&&this.b===b.b},
gO(a){var s=this.a
return(s^B.f.ab(s,30))&1073741823},
l(a){var s=this,r=A.ir(A.iO(s)),q=A.c8(A.iM(s)),p=A.c8(A.iI(s)),o=A.c8(A.iJ(s)),n=A.c8(A.iL(s)),m=A.c8(A.iN(s)),l=A.is(A.iK(s)),k=r+"-"+q
if(s.b)return k+"-"+p+" "+o+":"+n+":"+m+"."+l+"Z"
else return k+"-"+p+" "+o+":"+n+":"+m+"."+l}}
A.aL.prototype={
ap(a,b){if(b==null)return!1
return b instanceof A.aL&&this.a===b.a},
gO(a){return B.f.gO(this.a)},
l(a){var s,r,q,p=this.a,o=p%36e8,n=B.f.bv(o,6e7)
o%=6e7
s=n<10?"0":""
r=B.f.bv(o,1e6)
q=r<10?"0":""
return""+(p/36e8|0)+":"+s+n+":"+q+r+"."+B.i.cK(B.f.l(o%1e6),6,"0")}}
A.u.prototype={
gaR(){return A.aB(this.$thrownJsError)}}
A.b2.prototype={
l(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.ca(s)
return"Assertion failed"}}
A.af.prototype={}
A.ch.prototype={
l(a){return"Throw of null."}}
A.a3.prototype={
gb3(){return"Invalid argument"+(!this.a?"(s)":"")},
gb2(){return""},
l(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+p,n=s.gb3()+q+o
if(!s.a)return n
return n+s.gb2()+": "+A.ca(s.b)}}
A.bs.prototype={
gb3(){return"RangeError"},
gb2(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.r(q):""
else if(q==null)s=": Not greater than or equal to "+A.r(r)
else if(q>r)s=": Not in inclusive range "+A.r(r)+".."+A.r(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.r(r)
return s}}
A.cc.prototype={
gb3(){return"RangeError"},
gb2(){if(A.R(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gD(a){return this.f}}
A.cv.prototype={
l(a){return"Unsupported operation: "+this.a}}
A.ct.prototype={
l(a){return"UnimplementedError: "+this.a}}
A.aP.prototype={
l(a){return"Bad state: "+this.a}}
A.c5.prototype={
l(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.ca(s)+"."}}
A.ci.prototype={
l(a){return"Out of Memory"},
gaR(){return null},
$iu:1}
A.bv.prototype={
l(a){return"Stack Overflow"},
gaR(){return null},
$iu:1}
A.c7.prototype={
l(a){return"Reading static variable '"+this.a+"' during its initialization"}}
A.eQ.prototype={
l(a){return"Exception: "+this.a}}
A.t.prototype={
aX(a,b){var s=A.a2(this)
return new A.ay(this,s.i("M(t.E)").a(b),s.i("ay<t.E>"))},
gD(a){var s,r=this.gaj(this)
for(s=0;r.P();)++s
return s},
l(a){return A.iw(this,"(",")")}}
A.N.prototype={}
A.D.prototype={
gO(a){return A.v.prototype.gO.call(this,this)},
l(a){return"null"}}
A.v.prototype={$iv:1,
ap(a,b){return this===b},
gO(a){return A.br(this)},
l(a){return"Instance of '"+A.ey(this)+"'"},
toString(){return this.l(this)}}
A.cK.prototype={
l(a){return""},
$iaO:1}
A.cp.prototype={
gD(a){return this.a.length},
l(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
A.f.prototype={}
A.aD.prototype={
scC(a,b){a.href=b},
l(a){var s=String(a)
s.toString
return s},
$iaD:1}
A.c1.prototype={
l(a){var s=String(a)
s.toString
return s}}
A.aE.prototype={$iaE:1}
A.am.prototype={$iam:1}
A.aG.prototype={$iaG:1}
A.an.prototype={
saO(a,b){a.height=b},
saP(a,b){a.width=b},
cj(a,b,c){var s=a.toDataURL(b,c)
s.toString
return s},
$ian:1}
A.b4.prototype={
scw(a,b){a.fillStyle=b},
sbR(a,b){a.strokeStyle=b},
$ib4:1}
A.Z.prototype={
gD(a){return a.length}}
A.b5.prototype={
gD(a){var s=a.length
s.toString
return s}}
A.eh.prototype={}
A.ao.prototype={
gm(a){var s,r=a._dartDetail
if(r!=null)return r
r=a.detail
s=new A.eI([],[])
s.c=!0
return s.aB(r)},
c9(a,b,c,d,e){return a.initCustomEvent(b,!0,!0,e)},
$iao:1}
A.aK.prototype={$iaK:1}
A.ap.prototype={}
A.ei.prototype={
l(a){var s=String(a)
s.toString
return s}}
A.c9.prototype={
ct(a,b){var s=a.createHTMLDocument(b)
s.toString
return s}}
A.q.prototype={
gcl(a){return new A.cA(a)},
l(a){var s=a.localName
s.toString
return s},
ak(a,b,c,d){var s,r,q,p
if(c==null){s=$.h5
if(s==null){s=A.B([],t.i)
r=new A.bp(s)
B.b.v(s,A.hq(null))
B.b.v(s,A.hu())
$.h5=r
d=r}else d=s
s=$.h4
if(s==null){s=new A.bQ(d)
$.h4=s
c=s}else{s.a=d
c=s}}if($.ad==null){s=document
r=s.implementation
r.toString
r=B.L.ct(r,"")
$.ad=r
r=r.createRange()
r.toString
$.fy=r
r=$.ad.createElement("base")
t.k.a(r)
s=s.baseURI
s.toString
r.href=s
$.ad.head.appendChild(r).toString}s=$.ad
if(s.body==null){r=s.createElement("body")
B.P.scn(s,t.t.a(r))}s=$.ad
if(t.t.b(a)){s=s.body
s.toString
q=s}else{s.toString
r=a.tagName
r.toString
q=s.createElement(r)
$.ad.body.appendChild(q).toString}s="createContextualFragment" in window.Range.prototype
s.toString
if(s){s=a.tagName
s.toString
s=!B.b.a5(B.U,s)}else s=!1
if(s){$.fy.selectNodeContents(q)
s=$.fy
s=s.createContextualFragment(b)
s.toString
p=s}else{J.ie(q,b)
s=$.ad.createDocumentFragment()
s.toString
for(;r=q.firstChild,r!=null;)s.appendChild(r).toString
p=s}if(q!==$.ad.body)J.fX(q)
c.bf(p)
document.adoptNode(p).toString
return p},
cs(a,b,c){return this.ak(a,b,c,null)},
p(a,b){this.sbJ(a,null)
a.appendChild(this.ak(a,b,null,null)).toString},
sca(a,b){a.innerHTML=b},
gbI(a){var s=a.tagName
s.toString
return s},
$iq:1}
A.ej.prototype={
$1(a){return t.Q.b(t.A.a(a))},
$S:21}
A.b.prototype={$ib:1}
A.o.prototype={
c1(a,b,c,d){return a.addEventListener(b,A.aA(t.E.a(c),1),!1)},
$io:1}
A.cb.prototype={
gD(a){return a.length}}
A.b9.prototype={
scn(a,b){a.body=b}}
A.as.prototype={
saO(a,b){a.height=b},
sbg(a,b){a.src=b},
saP(a,b){a.width=b},
$ias:1}
A.ba.prototype={
sE(a,b){a.checked=b},
$ihf:1}
A.au.prototype={$iau:1}
A.bl.prototype={
l(a){var s=String(a)
s.toString
return s},
$ibl:1}
A.P.prototype={$iP:1}
A.H.prototype={
gaQ(a){var s=this.a,r=s.childNodes.length
if(r===0)throw A.e(A.bw("No elements"))
if(r>1)throw A.e(A.bw("More than one element"))
s=s.firstChild
s.toString
return s},
av(a,b){var s,r,q,p,o
t.cH.a(b)
s=b.a
r=this.a
if(s!==r)for(q=s.childNodes.length,p=0;p<q;++p){o=s.firstChild
o.toString
r.appendChild(o).toString}return},
C(a,b,c){var s,r
A.R(b)
t.A.a(c)
s=this.a
r=s.childNodes
if(!(b>=0&&b<r.length))return A.i(r,b)
s.replaceChild(c,r[b]).toString},
gaj(a){var s=this.a.childNodes
return new A.aq(s,s.length,A.aj(s).i("aq<a_.E>"))},
gD(a){return this.a.childNodes.length},
aa(a,b){var s=this.a.childNodes
if(!(b>=0&&b<s.length))return A.i(s,b)
return s[b]}}
A.h.prototype={
cM(a){var s=a.parentNode
if(s!=null)s.removeChild(a).toString},
l(a){var s=a.nodeValue
return s==null?this.bS(a):s},
sbJ(a,b){a.textContent=b},
$ih:1}
A.bo.prototype={
gD(a){var s=a.length
s.toString
return s},
aa(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw A.e(A.fA(b,a,null,null,null))
s=a[b]
s.toString
return s},
C(a,b,c){A.R(b)
t.A.a(c)
throw A.e(A.a1("Cannot assign element of immutable List."))},
aH(a,b){if(!(b<a.length))return A.i(a,b)
return a[b]},
$icf:1,
$it:1,
$iT:1}
A.cl.prototype={
gD(a){return a.length}}
A.aw.prototype={$iaw:1}
A.by.prototype={
ak(a,b,c,d){var s,r="createContextualFragment" in window.Range.prototype
r.toString
if(r)return this.aZ(a,b,c,d)
s=A.it("<table>"+b+"</table>",c,d)
r=document.createDocumentFragment()
r.toString
new A.H(r).av(0,new A.H(s))
return r}}
A.cq.prototype={
ak(a,b,c,d){var s,r="createContextualFragment" in window.Range.prototype
r.toString
if(r)return this.aZ(a,b,c,d)
r=document
s=r.createDocumentFragment()
s.toString
r=r.createElement("table")
r.toString
r=new A.H(B.x.ak(r,b,c,d))
r=new A.H(r.gaQ(r))
new A.H(s).av(0,new A.H(r.gaQ(r)))
return s}}
A.cr.prototype={
ak(a,b,c,d){var s,r="createContextualFragment" in window.Range.prototype
r.toString
if(r)return this.aZ(a,b,c,d)
r=document
s=r.createDocumentFragment()
s.toString
r=r.createElement("table")
r.toString
r=new A.H(B.x.ak(r,b,c,d))
new A.H(s).av(0,new A.H(r.gaQ(r)))
return s}}
A.aQ.prototype={$iaQ:1}
A.ax.prototype={
sba(a,b){a.value=b},
$iax:1}
A.a6.prototype={$ia6:1}
A.a0.prototype={}
A.aS.prototype={
gbw(a){var s=new A.I($.z,t.aa),r=t.J.a(new A.eG(new A.bM(s,t.d1)))
this.c8(a)
r=A.hK(r,t.H)
r.toString
this.cc(a,r)
return s},
cc(a,b){var s=a.requestAnimationFrame(A.aA(t.J.a(b),1))
s.toString
return s},
c8(a){var s=!!(a.requestAnimationFrame&&a.cancelAnimationFrame)
s.toString
if(s)return;(function(b){var r=["ms","moz","webkit","o"]
for(var q=0;q<r.length&&!b.requestAnimationFrame;++q){b.requestAnimationFrame=b[r[q]+"RequestAnimationFrame"]
b.cancelAnimationFrame=b[r[q]+"CancelAnimationFrame"]||b[r[q]+"CancelRequestAnimationFrame"]}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
A.eG.prototype={
$1(a){var s=this.a,r=s.$ti
a=r.i("1/?").a(A.bT(a))
s=s.a
if((s.a&30)!==0)A.ab(A.bw("Future already completed"))
s.bo(r.i("1/").a(a))},
$S:6}
A.aT.prototype={$iaT:1}
A.bI.prototype={
gD(a){var s=a.length
s.toString
return s},
aa(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw A.e(A.fA(b,a,null,null,null))
s=a[b]
s.toString
return s},
C(a,b,c){A.R(b)
t.A.a(c)
throw A.e(A.a1("Cannot assign element of immutable List."))},
aH(a,b){if(!(b<a.length))return A.i(a,b)
return a[b]},
$icf:1,
$it:1,
$iT:1}
A.cy.prototype={
aU(a,b){var s,r,q,p,o,n
t.aV.a(b)
for(s=this.gaD(),r=s.length,q=this.a,p=0;p<s.length;s.length===r||(0,A.cV)(s),++p){o=s[p]
n=q.getAttribute(o)
b.$2(o,n==null?A.K(n):n)}},
gaD(){var s,r,q,p,o,n,m=this.a.attributes
m.toString
s=A.B([],t.s)
for(r=m.length,q=t.x,p=0;p<r;++p){if(!(p<m.length))return A.i(m,p)
o=q.a(m[p])
if(o.namespaceURI==null){n=o.name
n.toString
B.b.v(s,n)}}return s}}
A.cA.prototype={
aa(a,b){return this.a.getAttribute(A.K(b))},
gD(a){return this.gaD().length}}
A.fz.prototype={}
A.bD.prototype={}
A.bC.prototype={}
A.cC.prototype={}
A.eP.prototype={
$1(a){return this.a.$1(t.B.a(a))},
$S:0}
A.az.prototype={
bY(a){var s
if($.cE.a===0){for(s=0;s<262;++s)$.cE.C(0,B.T[s],A.jQ())
for(s=0;s<12;++s)$.cE.C(0,B.m[s],A.jR())}},
aG(a){return $.i7().a5(0,A.b7(a))},
aw(a,b,c){var s=$.cE.aa(0,A.b7(a)+"::"+b)
if(s==null)s=$.cE.aa(0,"*::"+b)
if(s==null)return!1
return A.j(s.$4(a,b,c,this))},
$iW:1}
A.a_.prototype={
gaj(a){return new A.aq(a,this.gD(a),A.aj(a).i("aq<a_.E>"))}}
A.bp.prototype={
aG(a){return B.b.bx(this.a,new A.ev(a))},
aw(a,b,c){return B.b.bx(this.a,new A.eu(a,b,c))},
$iW:1}
A.ev.prototype={
$1(a){return t.e.a(a).aG(this.a)},
$S:7}
A.eu.prototype={
$1(a){return t.e.a(a).aw(this.a,this.b,this.c)},
$S:7}
A.bK.prototype={
bZ(a,b,c,d){var s,r,q
this.a.av(0,c)
s=b.aX(0,new A.f6())
r=b.aX(0,new A.f7())
this.b.av(0,s)
q=this.c
q.av(0,B.V)
q.av(0,r)},
aG(a){return this.a.a5(0,A.b7(a))},
aw(a,b,c){var s,r=this,q=A.b7(a),p=r.c,o=q+"::"+b
if(p.a5(0,o))return r.d.ck(c)
else{s="*::"+b
if(p.a5(0,s))return r.d.ck(c)
else{p=r.b
if(p.a5(0,o))return!0
else if(p.a5(0,s))return!0
else if(p.a5(0,q+"::*"))return!0
else if(p.a5(0,"*::*"))return!0}}return!1},
$iW:1}
A.f6.prototype={
$1(a){return!B.b.a5(B.m,A.K(a))},
$S:8}
A.f7.prototype={
$1(a){return B.b.a5(B.m,A.K(a))},
$S:8}
A.cM.prototype={
aw(a,b,c){if(this.bV(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.a5(0,b)
return!1}}
A.fc.prototype={
$1(a){return"TEMPLATE::"+A.K(a)},
$S:22}
A.cL.prototype={
aG(a){var s
if(t.ck.b(a))return!1
s=t.bM.b(a)
if(s&&A.b7(a)==="foreignObject")return!1
if(s)return!0
return!1},
aw(a,b,c){if(b==="is"||B.i.bQ(b,"on"))return!1
return this.aG(a)},
$iW:1}
A.aq.prototype={
P(){var s=this,r=s.c+1,q=s.b
if(r<q){s.sbt(J.i9(s.a,r))
s.c=r
return!0}s.sbt(null)
s.c=q
return!1},
gR(){var s=this.d
return s==null?this.$ti.c.a(s):s},
sbt(a){this.d=this.$ti.i("1?").a(a)},
$iN:1}
A.cJ.prototype={$iiU:1}
A.bQ.prototype={
bf(a){var s,r=new A.fg(this)
do{s=this.b
r.$2(a,null)}while(s!==this.b)},
aK(a,b){++this.b
if(b==null||b!==a.parentNode)J.fX(a)
else b.removeChild(a).toString},
ce(a,b){var s,r,q,p,o,n,m,l=!0,k=null,j=null
try{k=J.id(a)
j=k.a.getAttribute("is")
t.Q.a(a)
p=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
if(c.id=="lastChild"||c.name=="lastChild"||c.id=="previousSibling"||c.name=="previousSibling"||c.id=="children"||c.name=="children")return true
var i=c.childNodes
if(c.lastChild&&c.lastChild!==i[i.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var h=0
if(c.children)h=c.children.length
for(var g=0;g<h;g++){var f=c.children[g]
if(f.id=="attributes"||f.name=="attributes"||f.id=="lastChild"||f.name=="lastChild"||f.id=="previousSibling"||f.name=="previousSibling"||f.id=="children"||f.name=="children")return true}return false}(a)
p.toString
s=p
if(A.fP(s))o=!0
else{p=!(a.attributes instanceof NamedNodeMap)
p.toString
o=p}l=o}catch(n){}r="element unprintable"
try{r=J.c0(a)}catch(n){}try{q=A.b7(a)
this.cd(t.Q.a(a),b,l,r,q,t.f.a(k),A.hC(j))}catch(n){if(A.ak(n) instanceof A.a3)throw n
else{this.aK(a,b)
window.toString
p=A.r(r)
m=typeof console!="undefined"
m.toString
if(m)window.console.warn("Removing corrupted element "+p)}}},
cd(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l=this
if(c){l.aK(a,b)
window.toString
s=typeof console!="undefined"
s.toString
if(s)window.console.warn("Removing element due to corrupted attributes on <"+d+">")
return}if(!l.a.aG(a)){l.aK(a,b)
window.toString
s=A.r(b)
r=typeof console!="undefined"
r.toString
if(r)window.console.warn("Removing disallowed element <"+e+"> from "+s)
return}if(g!=null)if(!l.a.aw(a,"is",g)){l.aK(a,b)
window.toString
s=typeof console!="undefined"
s.toString
if(s)window.console.warn("Removing disallowed type extension <"+e+' is="'+g+'">')
return}s=f.gaD()
q=A.B(s.slice(0),A.ai(s))
for(p=f.gaD().length-1,s=f.a,r="Removing disallowed attribute <"+e+" ";p>=0;--p){if(!(p<q.length))return A.i(q,p)
o=q[p]
n=l.a
m=J.ih(o)
A.K(o)
if(!n.aw(a,m,A.K(s.getAttribute(o)))){window.toString
n=s.getAttribute(o)
m=typeof console!="undefined"
m.toString
if(m)window.console.warn(r+o+'="'+A.r(n)+'">')
s.removeAttribute(o)}}if(t.bg.b(a)){s=a.content
s.toString
l.bf(s)}},
$iiF:1}
A.fg.prototype={
$2(a,b){var s,r,q,p,o,n=this.a,m=a.nodeType
m.toString
switch(m){case 1:n.ce(a,b)
break
case 8:case 11:case 3:case 4:break
default:n.aK(a,b)}s=a.lastChild
for(m=t.A;s!=null;){r=null
try{r=s.previousSibling
if(r!=null){q=r.nextSibling
p=s
p=q==null?p!=null:q!==p
q=p}else q=!1
if(q){q=A.bw("Corrupt HTML")
throw A.e(q)}}catch(o){q=m.a(s);++n.b
p=q.parentNode
if(a!==p){if(p!=null)p.removeChild(q).toString}else a.removeChild(q).toString
s=null
r=a.lastChild}if(s!=null)this.$2(s,a)
s=r}},
$S:23}
A.cz.prototype={}
A.cG.prototype={}
A.cH.prototype={}
A.cR.prototype={}
A.cS.prototype={}
A.f8.prototype={
aI(a){var s,r=this.a,q=r.length
for(s=0;s<q;++s)if(r[s]===a)return s
B.b.v(r,a)
B.b.v(this.b,null)
return q},
aB(a){var s,r,q,p,o=this,n={}
if(a==null)return a
if(A.fh(a))return a
if(typeof a=="number")return a
if(typeof a=="string")return a
if(a instanceof A.aJ)return new Date(a.a)
if(t.f.b(a)){s=o.aI(a)
r=o.b
if(!(s<r.length))return A.i(r,s)
q=n.a=r[s]
if(q!=null)return q
q={}
n.a=q
B.b.C(r,s,q)
a.aU(0,new A.fa(n,o))
return n.a}if(t.j.b(a)){s=o.aI(a)
n=o.b
if(!(s<n.length))return A.i(n,s)
q=n[s]
if(q!=null)return q
return o.cr(a,s)}if(t.m.b(a)){s=o.aI(a)
r=o.b
if(!(s<r.length))return A.i(r,s)
q=n.b=r[s]
if(q!=null)return q
p={}
p.toString
n.b=p
B.b.C(r,s,p)
o.cA(a,new A.fb(n,o))
return n.b}throw A.e(A.eF("structured clone of other type"))},
cr(a,b){var s,r=J.cU(a),q=r.gD(a),p=new Array(q)
p.toString
B.b.C(this.b,b,p)
for(s=0;s<q;++s)B.b.C(p,s,this.aB(r.aa(a,s)))
return p}}
A.fa.prototype={
$2(a,b){this.a.a[a]=this.b.aB(b)},
$S:24}
A.fb.prototype={
$2(a,b){this.a.b[a]=this.b.aB(b)},
$S:25}
A.eH.prototype={
aI(a){var s,r=this.a,q=r.length
for(s=0;s<q;++s)if(r[s]===a)return s
B.b.v(r,a)
B.b.v(this.b,null)
return q},
aB(a){var s,r,q,p,o,n,m,l,k,j=this,i={}
if(a==null)return a
if(A.fh(a))return a
if(typeof a=="number")return a
if(typeof a=="string")return a
s=a instanceof Date
s.toString
if(s){s=a.getTime()
s.toString
if(Math.abs(s)<=864e13)r=!1
else r=!0
if(r)A.ab(A.d_("DateTime is outside valid range: "+s,null))
A.cT(!0,"isUtc",t.y)
return new A.aJ(s,!0)}s=a instanceof RegExp
s.toString
if(s)throw A.e(A.eF("structured clone of RegExp"))
s=typeof Promise!="undefined"&&a instanceof Promise
s.toString
if(s)return A.k3(a,t.z)
q=Object.getPrototypeOf(a)
s=q===Object.prototype
s.toString
if(!s){s=q===null
s.toString}else s=!0
if(s){p=j.aI(a)
s=j.b
if(!(p<s.length))return A.i(s,p)
o=i.a=s[p]
if(o!=null)return o
r=t.z
o=A.ha(r,r)
i.a=o
B.b.C(s,p,o)
j.cz(a,new A.eJ(i,j))
return i.a}s=a instanceof Array
s.toString
if(s){s=a
s.toString
p=j.aI(s)
r=j.b
if(!(p<r.length))return A.i(r,p)
o=r[p]
if(o!=null)return o
n=J.cU(s)
m=n.gD(s)
if(j.c){l=new Array(m)
l.toString
o=l}else o=s
B.b.C(r,p,o)
for(r=J.fm(o),k=0;k<m;++k)r.C(o,k,j.aB(n.aa(s,k)))
return o}return a}}
A.eJ.prototype={
$2(a,b){var s=this.a.a,r=this.b.aB(b)
J.ia(s,a,r)
return r},
$S:26}
A.f9.prototype={
cA(a,b){var s,r,q,p
t.a.a(b)
for(s=Object.keys(a),r=s.length,q=0;q<s.length;s.length===r||(0,A.cV)(s),++q){p=s[q]
b.$2(p,a[p])}}}
A.eI.prototype={
cz(a,b){var s,r,q,p
t.a.a(b)
for(s=Object.keys(a),r=s.length,q=0;q<s.length;s.length===r||(0,A.cV)(s),++q){p=s[q]
b.$2(p,a[p])}}}
A.ew.prototype={
l(a){return"Promise was rejected with a value of `"+(this.a?"undefined":"null")+"`."}}
A.ft.prototype={
$1(a){var s=this.a,r=s.$ti
a=r.i("1/?").a(this.b.i("0/?").a(a))
s=s.a
if((s.a&30)!==0)A.ab(A.bw("Future already completed"))
s.c2(r.i("1/").a(a))
return null},
$S:9}
A.fu.prototype={
$1(a){if(a==null)return this.a.bB(new A.ew(a===undefined))
return this.a.bB(a)},
$S:9}
A.f2.prototype={
aA(){return Math.random()}}
A.aN.prototype={$iaN:1}
A.c.prototype={
ak(a,b,c,d){var s,r,q,p=A.B([],t.i)
B.b.v(p,A.hq(null))
B.b.v(p,A.hu())
B.b.v(p,new A.cL())
c=new A.bQ(new A.bp(p))
p=document
s=p.body
s.toString
r=B.p.cs(s,'<svg version="1.1">'+b+"</svg>",c)
p=p.createDocumentFragment()
p.toString
s=new A.H(r)
q=s.gaQ(s)
for(;s=q.firstChild,s!=null;)p.appendChild(s).toString
return p},
$ic:1}
A.cX.prototype={
bW(a,b,c){this.w=A.hm(B.N,new A.cY(this))},
A(){var s,r,q,p=this
switch(p.r){case"linearUp":s=p.e
r=p.a
q=p.f
r=Math.min(s,r+q)
p.a=r
p.f=Math.min((1+$.ac/10)*q,0.05*(s-r))
break
case"linearDown":s=p.d
r=p.a
q=p.f
r=Math.max(s,r-q)
p.a=r
p.f=Math.min((1+$.ac/10)*q,0.05*(r-s))
break
case"expUp":s=p.e
r=p.a
q=p.f
r=Math.min(s,r+q)
p.a=r
p.f=Math.min((1+$.al/10)*q,0.05*(s-r))
break
case"expDown":s=p.d
r=p.a
q=p.f
r=Math.max(s,r-q)
p.a=r
p.f=Math.min((1+$.al/10)*q,0.05*(r-s))
break
case"constantUp":p.a=Math.min(p.e,p.a+p.f)
break
case"constantDown":p.a=Math.max(p.d,p.a-p.f)
break
case"breakUp":s=p.a
r=p.f
p.a=Math.min(p.e,s+r)
p.f=r*0.9
break
case"breakDown":s=p.a
r=p.f
p.a=Math.max(p.d,s-r)
p.f=r*0.9
break
case"easeInOut":p.a=p.b-p.c*(1-(Math.atan(6*(p.x/p.y)-3)+1.25)/2.5)
if(++p.x>p.y){p.r=""
p.a=p.b}break}},
k(a,b){var s=this
if(b!==s.r){s.r=b
switch(b){case"linearUp":case"linearDown":s.f=Math.max(s.a*0.001*$.ac,0.001)
break
case"expUp":case"expDown":s.f=Math.max(s.a*0.0001*$.al,0.0001)
break
case"constantUp":case"constantDown":s.f=0.002*(s.e-s.d)*$.ac
break
case"selected":s.f=0
break}}if(A.a(s.w,"_timer").b!=null)A.a(s.w,"_timer").by()},
j(a,b,c){var s,r=this
A.jh(b)
r.r=a
s=Math.max(r.d,Math.min(r.e,b))
r.b=s
r.c=s-r.a
r.x=0
r.y=c},
h(a){var s=this
switch(s.r){case"linearUp":case"expUp":case"constantUp":s.r="breakUp"
break
case"linearDown":case"expDown":case"constantDown":s.r="breakDown"
break}if(A.a(s.w,"_timer").b!=null)A.a(s.w,"_timer").by()
s.w=A.hm(B.O,new A.cZ(s))},
gn(a){return B.c.l(B.c.a9(this.a*1000)/1000)}}
A.cY.prototype={
$0(){return this.a.r=""},
$S:1}
A.cZ.prototype={
$0(){return this.a.r=""},
$S:1}
A.c2.prototype={
cG(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0=this,c1="none",c2="_canvas",c3="_ctx2d",c4="click",c5=c0.B.style
c5.display="block"
c5=c0.U
c5.className="panelBtn panelBtnOn"
s=c0.aL.style
s.display=c1
s=c0.aM.style
s.display=c1
s=c0.aN.style
s.display=c1
s=t.W
r=s.i("~(1)?")
q=r.a(new A.d2(c0))
t.Z.a(null)
s=s.c
A.d(c5,c4,q,!1,s)
A.d(c0.a2,c4,r.a(new A.d3(c0)),!1,s)
A.d(c0.a3,c4,r.a(new A.d4(c0)),!1,s)
A.d(c0.a4,c4,r.a(new A.d5(c0)),!1,s)
q=c0.T
B.e.sE(q,!0)
c5=c0.ah
B.e.sE(c5,!0)
p=c0.ai
B.e.sE(p,!0)
o=c0.az
B.e.sE(o,!1)
$.ac=$.al=1
A.d(q,c4,r.a(new A.d6(c0)),!1,s)
A.d(c5,c4,r.a(new A.d7(c0)),!1,s)
A.d(p,c4,r.a(new A.d8(c0)),!1,s)
A.d(o,c4,r.a(new A.d9(c0)),!1,s)
if(window.innerWidth!=null){c5=window.innerWidth
c5.toString
n=c5}else n=0
if(n<640){m=427
l=240
k=0.5}else if(n<854){m=640
l=360
k=0.75}else{m=854
l=480
k=1}c5=A.m(0,0,0)
q=A.m(0,0,0)
p=A.m(0,0,0)
o=A.m(0,0,0)
j=A.m(0,0,0)
i=A.m(0,0,0)
h=A.m(0,0,0)
g=A.m(0,0,0)
f=A.m(0,0,0)
e=A.m(0,0,0)
d=A.m(0,0,0)
c=A.m(0,0,0)
b=A.m(0,0,0)
a=A.m(0,0,0)
a0=A.fx(0,0,0)
a1=A.fx(0,0,0)
a2=A.fx(0,0,0)
a3=A.m(0,0,0)
a4=A.m(0,0,0)
a5=A.m(0,0,0)
a6=A.m(0,0,0)
a7=A.m(0,0,0)
a8=A.m(0,0,0)
a9=A.m(0,0,0)
b0=A.m(0,0,0)
b1=A.m(0,0,0)
b2=A.m(0,0,0)
b3=A.m(0,0,0)
b4=A.m(0,0,0)
b5=A.m(0,0,0)
b6=A.m(0,0,0)
b7=A.m(0,0,0)
b8=t.w
b9=A.B([],b8)
b8=A.B([],b8)
b7=new A.dc(c5,q,p,o,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b9,b8)
b6=document
b5=t.q.a(b6.querySelector("#bcbccanvas"))
b7.w=b5
b7.a=m
b7.b=l
b7.r=k
b7.c=B.c.a9(m/2)
b7.d=B.c.a9(l/2)
b7.f=b7.e=100
B.l.saP(A.a(b5,c2),m)
B.l.saO(A.a(b5,c2),l)
b5=A.a(b5,c2).getContext("2d")
b5.toString
b7.x=b5
A.a(b5,c3).lineCap="butt"
A.a(b5,c3).lineJoin="miter"
A.a(b5,c3).miterLimit=5
b7.ae=A.m(0,0,20)
b7.af=A.m(1,0,500)
b7.am=A.m(1,-10,10)
b7.F=A.m(20,1,2000)
b7.G=A.m(20,1,2000)
b7.H=A.m(20,1,2000)
b7.J=A.m(0,0,500)
b7.I=A.m(0,0,500)
b7.K=A.m(0,0,500)
b7.a6=A.m(1,0.0001,20)
b7.X=A.m(70,0,1e5)
b7.a7=A.m(0,0,100)
b7.an=A.m(2.025,0,2.025)
b7.Z=A.m(1,0,2)
a0.b=203
a0.e=56
a0.w=28
a0.aF()
a1.b=203
a1.e=28
a1.w=174
a1.aF()
a2.b=174
a2.e=203
a2.w=28
a2.aF()
b7.ac=A.m(1,0,1000)
b7.a_=A.m(0.5,0.01,0.99)
b7.a0=A.m(200,1,200)
b7.a8=A.m(1,0.01,15)
b7.a1=A.m(0,-20.8,20.8)
b7.Y=A.m(0,-20.8,20.8)
b7.L=A.m(0,-3.141592653589793,3.141592653589793)
b7.S=A.m(1,1,1000)
b7.ad=A.m(1,0,10)
b7.N=A.m(1,1,1000)
b7.U=A.m(1,0,10)
b7.a2=A.m(0,0,1)
b7.a3=A.m(1,-1,1)
b7.a4=A.m(1,-1,1)
b7.T=A.m(0,0,5)
B.b.v(b9,2*(B.j.aA()-0.5))
B.b.v(b8,2*(B.j.aA()-0.5))
b7.bP()
c0.a=b7
A.l("#aParamUp","aParamUp",!1)
A.l("#aParamDown","aParamDown",!1)
A.l("#bParamUp","bParamUp",!1)
A.l("#bParamDown","bParamDown",!1)
A.l("#cParamUp","cParamUp",!1)
A.l("#cParamDown","cParamDown",!1)
A.l("#beginTUp","beginTUp",!1)
A.l("#beginTDown","beginTDown",!1)
A.l("#maxTUp","maxTUp",!1)
A.l("#maxTDown","maxTDown",!1)
A.l("#stepTUp","stepTUp",!1)
A.l("#stepTDown","stepTDown",!1)
A.l("#switchLineControlled","switchLineControlled",!0)
A.l("#lwUp","lwUp",!1)
A.l("#lwDown","lwDown",!1)
A.l("#dashedUp","dashedUp",!1)
A.l("#dashedDown","dashedDown",!1)
c5=t.S
q=c5.a(b6.querySelector("#labelLineNum"))
c0.cy=q
B.d.p(A.a(q,"labelLineNum"),"1")
A.l("#switchColorControlled","switchColorControlled",!0)
A.l("#colorHueLeft","colorHueLeft",!1)
A.l("#colorHueRight","colorHueRight",!1)
A.l("#colorSatUp","colorSatUp",!1)
A.l("#colorSatDown","colorSatDown",!1)
A.l("#colorLightUp","colorLightUp",!1)
A.l("#colorLightDown","colorLightDown",!1)
c0.id=c5.a(b6.querySelector("#labelColorSample"))
b6=c5.a(b6.querySelector("#labelColorNum"))
c0.k1=b6
B.d.p(A.a(b6,"labelColorNum"),"1")
b6=A.a(c0.id,"labelColorSample").style
b6.toString
c5=A.a(A.a(c0.a,"screen").t.a,"color").ar().aV()
b6.backgroundColor=c5
A.l("#pivotLeft","pivotLeft",!1)
A.l("#pivotRight","pivotRight",!1)
A.l("#gradientUp","gradientUp",!1)
A.l("#gradientDown","gradientDown",!1)
A.l("#distribUp","distribUp",!1)
A.l("#distribDown","distribDown",!1)
A.l("#lineCurve","lineCurve",!0)
A.l("#lineStrait","lineStrait",!0)
A.l("#capsRound","capsRound",!0)
A.l("#capsSquare","capsSquare",!0)
A.l("#capsButt","capsButt",!0)
A.l("#gapsMore","gapsMore",!1)
A.l("#gapsLess","gapsLess",!1)
A.l("#splitHorzUp","splitHorzUp",!0)
A.l("#splitHorzDown","splitHorzDown",!0)
A.l("#splitVertUp","splitVertUp",!0)
A.l("#splitVertDown","splitVertDown",!0)
A.l("#splitWidthUp","splitWidthUp",!1)
A.l("#splitWidthDown","splitWidthDown",!1)
A.l("#splitHeightUp","splitHeightUp",!1)
A.l("#splitHeightDown","splitHeightDown",!1)
A.l("#splitQuincSet","splitQuincSet",!0)
A.l("#zoomUp","zoomUp",!1)
A.l("#zoomDown","zoomDown",!1)
A.l("#panLeft","panLeft",!1)
A.l("#panUp","panUp",!1)
A.l("#panRight","panRight",!1)
A.l("#panDown","panDown",!1)
A.l("#rotLeft","rotLeft",!1)
A.l("#rotRight","rotRight",!1)
A.l("#flipH","flipH",!0)
A.l("#flipV","flipV",!0)
A.l("#explodeUp","explodeUp",!1)
A.l("#explodeDown","explodeDown",!1)
A.l("#center","center",!0)
B.e.sE(c0.a_,!0)
A.d(c0.q,c4,r.a(c0.gbN()),!1,s)
A.d(c0.ac,c4,r.a(c0.gco()),!1,s)
A.d(c0.L,c4,r.a(c0.gcu()),!1,s)
A.d(c0.S,c4,r.a(c0.gcD()),!1,s)
A.d(c0.Y,c4,r.a(new A.da(c0)),!1,s)
A.a(c0.a,"screen").al()
c5=window
c5.toString
B.y.gbw(c5).b9(c0.gbH(),t.o)
c5=window
c5.toString
A.d(c5,"resize",t.b.a(new A.db(c0)),!1,t.B)},
cL(a){var s,r,q,p,o,n=this,m="screen",l="labelColorNum",k="labelColorSample",j="color",i="transparent",h="labelLineNum"
A.bT(a)
s=Date.now()
r=n.bD
q=r>=0?1000/(s-r):60
n.bD=s
s=A.a(n.a,m)
r=s.t
p=r.at
if(p==="selected"){r.at=""
o=!0}else o=p!==""&&!0
r=s.u
p=r.at
if(p==="selected"){r.at=""
o=!0}else if(p!=="")o=!0
r=s.q
p=r.at
if(p==="selected"){r.at=""
o=!0}else if(p!=="")o=!0
r=s.F
if(r.r==="selected"){r.h(0)
o=!0}r=s.G
if(r.r==="selected"){r.h(0)
o=!0}s=s.H
if(s.r==="selected"){s.h(0)
o=!0}if(o){s=A.a(n.a,m).M
r=n.k1
switch(s){case"C1":B.d.p(A.a(r,l),"1")
s=A.a(n.id,k).style
s.toString
r=A.a(A.a(n.a,m).t.a,j).ar().aV()
s.backgroundColor=r
break
case"C2":B.d.p(A.a(r,l),"2")
s=A.a(n.id,k).style
s.toString
r=A.a(A.a(n.a,m).u.a,j).ar().aV()
s.backgroundColor=r
break
case"C3":B.d.p(A.a(r,l),"3")
s=A.a(n.id,k).style
s.toString
r=A.a(A.a(n.a,m).q.a,j).ar().aV()
s.backgroundColor=r
break
case"C_":B.d.p(A.a(r,l),"_")
s=A.a(n.id,k).style
s.backgroundColor=i
break
default:B.d.p(A.a(r,l),".")
s=A.a(n.id,k).style
s.backgroundColor=i}s=A.a(n.a,m).V
r=n.cy
switch(s){case"L1":B.d.p(A.a(r,h),"1")
break
case"L2":B.d.p(A.a(r,h),"2")
break
case"L3":B.d.p(A.a(r,h),"3")
break
case"L_":B.d.p(A.a(r,h),"_")
break
default:B.d.p(A.a(r,h),".")}}s=A.a(n.a,m)
s.B=""
r=s.ae
p=r.r
if(p!==""&&p!=="selected"){r.A()
s.B="aParam"
o=!0}else o=!1
r=s.af
p=r.r
if(p!==""&&p!=="selected"){r.A()
s.B="bParam"
o=!0}r=s.am
p=r.r
if(p!==""&&p!=="selected"){r.A()
s.B="cParam"
o=!0}r=s.a7
p=r.r
if(p!==""&&p!=="selected"){r.A()
s.B="beginT"
o=!0}r=s.X
p=r.r
if(p!==""&&p!=="selected"){r.A()
s.B="maxT"
o=!0}r=s.a6
p=r.r
if(p!==""&&p!=="selected"){r.A()
s.B="stepT"
o=!0}r=s.F
p=r.r
if(p!==""&&p!=="selected"){r.A()
s.B="lw1"
o=!0}r=s.G
p=r.r
if(p!==""&&p!=="selected"){r.A()
s.B="lw2"
o=!0}r=s.H
p=r.r
if(p!==""&&p!=="selected"){r.A()
s.B="lw3"
o=!0}r=s.J
p=r.r
if(p!==""&&p!=="selected"){r.A()
s.B="dash1"
o=!0}r=s.I
p=r.r
if(p!==""&&p!=="selected"){r.A()
s.B="dash2"
o=!0}r=s.K
p=r.r
if(p!==""&&p!=="selected"){r.A()
s.B="dash3"
o=!0}r=s.t
if(r.at!==""){r.A()
o=!0}r=s.u
if(r.at!==""){r.A()
o=!0}r=s.q
if(r.at!==""){r.A()
o=!0}r=s.a0
p=r.r
if(p!==""&&p!=="selected"){r.A()
s.B="gradient"
o=!0}r=s.a_
p=r.r
if(p!==""&&p!=="selected"){r.A()
s.B="pivot"
o=!0}r=s.ac
p=r.r
if(p!==""&&p!=="selected"){r.A()
s.B="distrib"
o=!0}r=s.an
p=r.r
if(p!==""&&p!=="selected"){r.A()
o=!0}if(s.ag==="selected"){r=A.a(s.x,"_ctx2d").lineCap
r.toString
s.ag=r
o=!0}r=s.Z
p=r.r
if(p!==""&&p!=="selected"){r.A()
s.B="gapsRatio"
o=!0}r=s.S
p=r.r
if(p!==""&&p!=="selected"){r.A()
s.B="Hnum"
o=!0}r=s.N
p=r.r
if(p!==""&&p!=="selected"){r.A()
s.B="Vnum"
o=!0}r=s.ad
p=r.r
if(p!==""&&p!=="selected"){r.A()
s.B="Hwidth"
o=!0}r=s.U
p=r.r
if(p!==""&&p!=="selected"){r.A()
s.B="Vheight"
o=!0}r=s.a2
p=r.r
if(p!==""&&p!=="selected"){r.A()
o=!0}r=s.a3
p=r.r
if(p!==""&&p!=="selected"){r.A()
o=!0}r=s.a4
p=r.r
if(p!==""&&p!=="selected"){r.A()
o=!0}r=s.T
p=r.r
if(p!==""&&p!=="selected"){r.A()
s.B="explode"
o=!0}r=s.a8
p=r.r
if(p!==""&&p!=="selected"){r.A()
s.B="zoom"
o=!0}r=s.a1
p=r.r
if(p!==""&&p!=="selected"){r.A()
o=!0}r=s.Y
p=r.r
if(p!==""&&p!=="selected"){r.A()
o=!0}r=s.L
p=r.r
if(p!==""&&p!=="selected"){r.A()
s.B="rotation"
o=!0}if(o){s=n.M
switch(A.a(n.a,m).B){case"aParam":r=A.a(n.a,m).ae
B.d.p(s,"a param: "+r.gn(r))
break
case"bParam":r=A.a(n.a,m).af
B.d.p(s,"b param: "+r.gn(r))
break
case"cParam":r=A.a(n.a,m).am
B.d.p(s,"c param: "+r.gn(r))
break
case"beginT":r=A.a(n.a,m).a7
B.d.p(s,"t begin: "+r.gn(r))
break
case"maxT":r=A.a(n.a,m).X
B.d.p(s,"t interval: "+r.gn(r))
break
case"stepT":r=A.a(n.a,m).a6
B.d.p(s,"t step: "+r.gn(r))
break
case"lw1":r=A.a(n.a,m).F
B.d.p(s,"L1 width: "+r.gn(r))
break
case"lw2":r=A.a(n.a,m).G
B.d.p(s,"L2 width: "+r.gn(r))
break
case"lw3":r=A.a(n.a,m).H
B.d.p(s,"L3 width: "+r.gn(r))
break
case"dash1":r=A.a(n.a,m).J
B.d.p(s,"L1 dash: "+r.gn(r))
break
case"dash2":r=A.a(n.a,m).I
B.d.p(s,"L2 dash: "+r.gn(r))
break
case"dash3":r=A.a(n.a,m).K
B.d.p(s,"L3 dash: "+r.gn(r))
break
case"gradient":r=A.a(n.a,m).a0
B.d.p(s,"gradient: "+r.gn(r))
break
case"pivot":r=A.a(n.a,m).a_
B.d.p(s,"pivot: "+r.gn(r))
break
case"distrib":r=A.a(n.a,m).ac
B.d.p(s,"distribp: "+r.gn(r))
break
case"gapsRatio":r=A.a(n.a,m).Z
B.d.p(s,"gaps: "+r.gn(r))
break
case"Hnum":r=A.a(n.a,m).S
B.d.p(s,"H_num: "+r.gn(r))
break
case"Vnum":r=A.a(n.a,m).N
B.d.p(s,"V_num: "+r.gn(r))
break
case"Hwidth":r=A.a(n.a,m).ad
B.d.p(s,"H_width: "+r.gn(r))
break
case"Vheight":r=A.a(n.a,m).U
B.d.p(s,"V_height: "+r.gn(r))
break
case"explode":r=A.a(n.a,m).T
B.d.p(s,"explode: "+r.gn(r))
break
case"zoom":r=A.a(n.a,m).a8
B.d.p(s,"zoom: "+r.gn(r))
break
case"rotation":r=A.a(n.a,m).L
B.d.p(s,"rotation: "+r.gn(r))
break
default:B.d.p(s,"")}A.a(n.a,m).al()
if(q<=20)B.w.p(n.V,""+B.c.a9(q)+" fps")}else B.w.p(n.V,"")
s=window
s.toString
B.y.gbw(s).b9(n.gbH(),t.o)},
bO(a){var s,r,q,p,o=this,n="screen"
t.V.a(a)
switch(A.a(o.a,n).a){case 427:s="LD"
break
case 640:s="MD"
break
case 854:s="SD"
break
case 1280:s="HD"
break
case 1920:s="FHD"
break
case 3840:s="UHD"
break
default:s="?"}r=o.a1.checked
if(r===!0)q="UHD"
else{r=o.a8.checked
if(r===!0)q="FHD"
else{r=o.a0.checked
q=r===!0?"HD":"SD"}}if(q!==s){A.a(o.a,n).aq(q)
A.a(o.a,n).al()}p=B.l.cj(A.a(A.a(o.a,n).w,"_canvas"),"image/jpeg",0.92)
r=o.bC
B.k.saP(r,A.a(o.a,n).a)
B.k.saO(r,A.a(o.a,n).b)
B.k.sbg(r,p)
if(s!==q){A.a(o.a,n).aq(s)
A.a(o.a,n).al()}},
cp(a){var s,r,q=this,p="screen"
t.V.a(a)
A.a(q.a,p).aq("LD")
s=q.bC
B.k.saP(s,100)
B.k.saO(s,100)
B.k.sbg(s,"BCBCdefaultSnap.png")
if(window.innerWidth!=null){s=window.innerWidth
s.toString
r=s}else r=0
if(r<640){A.a(q.a,p).aq("LD")
A.a(q.a,p).al()}else{s=q.a
if(r<854){A.a(s,p).aq("MD")
A.a(q.a,p).al()}else{A.a(s,p).aq("SD")
A.a(q.a,p).al()}}},
cv(e7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4,e5,e6
t.V.a(e7)
s=A.a(this.a,"screen")
r=A.p(13)
q=s.ae
q=q.gn(q)
p=A.p(13)
o=s.af
o=o.gn(o)
n=A.p(13)
m=s.am
m=m.gn(m)
l=A.p(13)
k=s.a7
k=k.gn(k)
j=A.p(13)
i=s.X
i=i.gn(i)
h=A.p(13)
g=s.a6
g=g.gn(g)
f=A.p(13)
e=s.F
e=e.gn(e)
d=A.p(13)
c=s.G
c=c.gn(c)
b=A.p(13)
a=s.H
a=a.gn(a)
a0=A.p(13)
a1=s.J
a1=a1.gn(a1)
a2=A.p(13)
a3=s.I
a3=a3.gn(a3)
a4=A.p(13)
a5=s.K
a5=a5.gn(a5)
a6=A.p(13)
a7=s.t
a7=a7.gn(a7)
a8=A.p(13)
a9=s.u
a9=a9.gn(a9)
b0=A.p(13)
b1=s.q
b1=b1.gn(b1)
b2=A.p(13)
b3=s.a0
b3=b3.gn(b3)
b4=A.p(13)
b5=s.a_
b5=b5.gn(b5)
b6=A.p(13)
b7=s.ac
b7=b7.gn(b7)
b8=A.p(13)
b9=s.an
b9=b9.gn(b9)
c0=A.p(13)
c1=s.ag
c2=A.p(13)
c3=s.Z
c3=c3.gn(c3)
c4=A.p(13)
c5=s.S
c5=c5.gn(c5)
c6=A.p(13)
c7=s.ad
c7=c7.gn(c7)
c8=A.p(13)
c9=s.N
c9=c9.gn(c9)
d0=A.p(13)
d1=s.U
d1=d1.gn(d1)
d2=A.p(13)
d3=s.a2
d3=d3.gn(d3)
d4=A.p(13)
d5=s.a3
d5=d5.gn(d5)
d6=A.p(13)
d7=s.a4
d7=d7.gn(d7)
d8=A.p(13)
d9=s.T
d9=d9.gn(d9)
e0=A.p(13)
e1=s.a8
e1=e1.gn(e1)
e2=A.p(13)
e3=s.a1
e3=e3.gn(e3)
e4=A.p(13)
e5=s.Y
e5=e5.gn(e5)
e6=A.p(13)
s=s.L
B.n.sba(this.ad,"BCBC2"+r+(q+p)+(o+n)+(m+l)+(k+j)+(i+h)+(g+f)+(e+d)+(c+b)+(a+a0)+(a1+a2)+(a3+a4)+(a5+a6)+(a7+a8)+(a9+b0)+(b1+b2)+(b3+b4)+(b5+b6)+(b7+b8)+(b9+c0)+(c1+c2)+(c3+c4)+(c5+c6)+(c7+c8)+(c9+d0)+(d1+d2)+(d3+d4)+(d5+d6)+(d7+d8)+(d9+e0)+(e1+e2)+(e3+e4)+(e5+e6)+(s.gn(s)+A.p(13))+"***")},
cE(a){var s,r,q
t.V.a(a)
s=this.N
r=s.value
if(r!=null){q=A.a(this.a,"screen").cF(r)
if(q!=="")B.n.sba(s,q)}else B.n.sba(s,"nothing to import")}}
A.d2.prototype={
$1(a){var s,r,q="none",p="panelBtn panelBtnOff"
t.V.a(a)
s=this.a
r=s.B.style
r.display="block"
r=s.aL.style
r.display=q
r=s.aM.style
r.display=q
r=s.aN.style
r.display=q
s.U.className="panelBtn panelBtnOn"
s.a2.className=p
s.a3.className=p
s.a4.className=p},
$S:2}
A.d3.prototype={
$1(a){var s,r,q="none",p="panelBtn panelBtnOff"
t.V.a(a)
s=this.a
r=s.B.style
r.display=q
r=s.aL.style
r.display="block"
r=s.aM.style
r.display=q
r=s.aN.style
r.display=q
s.U.className=p
s.a2.className="panelBtn panelBtnOn"
s.a3.className=p
s.a4.className=p},
$S:2}
A.d4.prototype={
$1(a){var s,r,q="none",p="panelBtn panelBtnOff"
t.V.a(a)
s=this.a
r=s.B.style
r.display=q
r=s.aL.style
r.display=q
r=s.aM.style
r.display="block"
r=s.aN.style
r.display=q
s.U.className=p
s.a2.className=p
s.a3.className="panelBtn panelBtnOn"
s.a4.className=p},
$S:2}
A.d5.prototype={
$1(a){var s,r,q="none",p="panelBtn panelBtnOff"
t.V.a(a)
s=this.a
r=s.B.style
r.display=q
r=s.aL.style
r.display=q
r=s.aM.style
r.display=q
r=s.aN.style
r.display="block"
s.U.className=p
s.a2.className=p
s.a3.className=p
s.a4.className="panelBtn panelBtnOn"},
$S:2}
A.d6.prototype={
$1(a){var s
t.V.a(a)
s=this.a
B.e.sE(s.T,!0)
B.e.sE(s.ah,!1)
B.e.sE(s.ai,!1)
B.e.sE(s.az,!1)
$.ac=$.al=0.1},
$S:2}
A.d7.prototype={
$1(a){var s
t.V.a(a)
s=this.a
B.e.sE(s.T,!0)
B.e.sE(s.ah,!0)
B.e.sE(s.ai,!1)
B.e.sE(s.az,!1)
$.ac=$.al=0.5},
$S:2}
A.d8.prototype={
$1(a){var s
t.V.a(a)
s=this.a
B.e.sE(s.T,!0)
B.e.sE(s.ah,!0)
B.e.sE(s.ai,!0)
B.e.sE(s.az,!1)
$.ac=$.al=1},
$S:2}
A.d9.prototype={
$1(a){var s
t.V.a(a)
s=this.a
B.e.sE(s.T,!0)
B.e.sE(s.ah,!0)
B.e.sE(s.ai,!0)
B.e.sE(s.az,!0)
$.ac=$.al=3},
$S:2}
A.da.prototype={
$1(a){var s,r,q="easeInOut"
t.V.a(a)
s=A.a(this.a.a,"screen")
r=s.ae
if(r.a!==0)r.j(q,0,600)
r=s.af
if(r.a!==1)r.j(q,1,600)
r=s.am
if(r.a!==1)r.j(q,1,600)
r=s.F
if(r.a!==20)r.j(q,20,600)
r=s.G
if(r.a!==20)r.j(q,20,600)
r=s.H
if(r.a!==20)r.j(q,20,600)
r=s.J
if(r.a!==0)r.j(q,0,600)
r=s.I
if(r.a!==0)r.j(q,0,600)
r=s.K
if(r.a!==0)r.j(q,0,600)
r=s.a6
if(r.a!==1)r.j(q,1,600)
r=s.X
if(r.a!==70)r.j(q,70,600)
r=s.a7
if(r.a!==0)r.j(q,0,600)
r=s.an
if(r.a!==2.025)r.j(q,2.025,600)
r=s.Z
if(r.a!==1)r.j(q,1,600)
if(s.ag!=="butt"){A.a(s.x,"_ctx2d").lineCap="butt"
s.ag="selected"}r=s.t
if(A.a(r.b,"r")!==203||A.a(r.e,"g")!==56||A.a(r.w,"b")!==28)r.aJ(q,203,56,28,600)
r=s.u
if(A.a(r.b,"r")!==203||A.a(r.e,"g")!==28||A.a(r.w,"b")!==174)r.aJ(q,203,28,174,600)
r=s.q
if(A.a(r.b,"r")!==174||A.a(r.e,"g")!==203||A.a(r.w,"b")!==28)r.aJ(q,174,203,28,600)
r=s.ac
if(r.a!==1)r.j(q,1,600)
r=s.a_
if(r.a!==0.5)r.j(q,0.5,600)
r=s.a0
if(r.a!==200)r.j(q,200,600)
r=s.a8
if(r.a!==1)r.j(q,1,600)
r=s.a1
if(r.a!==0)r.j(q,0,600)
r=s.Y
if(r.a!==0)r.j(q,0,600)
r=s.L
if(r.a!==0)r.j(q,0,600)
r=s.S
if(r.a!==1)r.j(q,1,600)
r=s.ad
if(r.a!==1)r.j(q,1,600)
r=s.N
if(r.a!==1)r.j(q,1,600)
r=s.U
if(r.a!==1)r.j(q,1,600)
r=s.a2
if(r.a!==0)r.j(q,0,600)
r=s.a3
if(r.a!==1)r.j(q,1,600)
r=s.a4
if(r.a!==1)r.j(q,1,600)
s=s.T
if(s.a!==0)s.j(q,0,600)},
$S:2}
A.db.prototype={
$1(a){var s,r,q,p="screen"
if(window.innerWidth!=null){s=window.innerWidth
s.toString
r=s}else r=0
if(r<640){s=this.a
A.a(s.a,p).aq("LD")
A.a(s.a,p).al()}else{s=this.a
q=s.a
if(r<854){A.a(q,p).aq("MD")
A.a(s.a,p).al()}else{A.a(q,p).aq("SD")
A.a(s.a,p).al()}}},
$S:0}
A.dc.prototype={
aq(a){var s,r,q=this
switch(a){case"LD":s=q.a=427
r=q.b=240
q.r=0.5
break
case"MD":s=q.a=640
r=q.b=360
q.r=0.75
break
case"SD":s=q.a=854
r=q.b=480
q.r=1
break
case"HD":s=q.a=1280
r=q.b=720
q.r=1.5
break
case"FHD":s=q.a=1920
r=q.b=1080
q.r=2.25
break
case"UHD":s=q.a=3840
r=q.b=2160
q.r=4.5
break
default:s=q.a=854
r=q.b=480
q.r=1
break}q.c=B.c.a9(s/2)
q.d=B.c.a9(r/2)
B.l.saP(A.a(q.w,"_canvas"),q.a)
B.l.saO(A.a(q.w,"_canvas"),q.b)
A.a(q.x,"_ctx2d").lineCap=q.ag},
bb(a){var s=this,r=Math.cos(s.a7.a+a),q=s.ae.a,p=Math.cos(s.af.a*(s.a7.a+a)),o=Math.max(0,Math.floor(s.S.a*s.N.a*a*0.999/s.X.a)),n=Math.floor(s.N.a*a*0.999/s.X.a),m=s.ad.a,l=s.S.a,k=s.a3.a,j=r+q*p+m*(o-0.5*(l-1))*k-m*n*l*k+B.c.aY(n,2)*m*0.5*s.a2.a
r=s.T.a
if(r>0&&s.ah.length!==0){q=s.ah
p=B.c.W(o)
l=q.length
p=A.R(Math.min(p,l-1))
if(!(p>=0&&p<l))return A.i(q,p)
j+=q[p]*m*r}return j},
bd(a){var s=this,r=Math.sin(s.a7.a+s.am.a*a),q=s.ae.a,p=Math.sin(s.af.a*(s.a7.a+a)),o=s.U.a,n=Math.floor(s.N.a*a*0.999/s.X.a),m=s.N.a,l=r+q*p+o*(n-0.5*(m-1))*s.a4.a
if(s.T.a>0&&s.ai.length!==0){r=s.ai
m=B.c.W(Math.max(0,Math.floor(s.S.a*m*a*0.999/s.X.a)))
q=r.length
m=A.R(Math.min(m,q-1))
if(!(m>=0&&m<q))return A.i(r,m)
l+=r[m]*s.U.a*s.T.a}return l},
bc(a){var s=this,r=s.e,q=s.r,p=s.a8.a
return a*r*q*p+s.c+s.a1.a*r*q*p},
be(a){var s=this,r=s.f,q=s.r,p=s.a8.a
return a*r*q*p+s.d+s.Y.a*r*q*p},
al(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2=this,c3="_ctx2d",c4="r",c5="g",c6="b"
A.a(c2.x,c3).clearRect(0,0,c2.a,c2.b)
B.t.scw(A.a(c2.x,c3),"rgba(0, 0, 0, 1)")
A.a(c2.x,c3).rect(0,0,c2.a,c2.b)
A.a(c2.x,c3).fill()
A.a(c2.x,c3).globalCompositeOperation="screen"
c2.az=0
for(s=c2.u,r=c2.q,q=c2.t,p=t.c4,o=t.r,n=0,m=-1,l=!0,k=!1,j=!1;n<c2.X.a;){n+=c2.a6.a*0.5*(1-c2.Z.a)
i=c2.bb(n)
h=c2.bd(n)
if(c2.L.a!==0){g=Math.atan2(h,i)
f=i*i+h*h
e=Math.sqrt(f)*Math.cos(g+c2.L.a)
d=Math.sqrt(f)*Math.sin(g+c2.L.a)}else{d=h
e=i}n+=c2.a6.a*0.5*c2.Z.a
i=c2.bb(n)
h=c2.bd(n)
if(c2.L.a!==0){g=Math.atan2(h,i)
f=i*i+h*h
c=Math.sqrt(f)*Math.cos(g+c2.L.a)
b=Math.sqrt(f)*Math.sin(g+c2.L.a)}else{b=h
c=i}n+=c2.a6.a*0.5*c2.Z.a
i=c2.bb(n)
h=c2.bd(n)
if(c2.L.a!==0){g=Math.atan2(h,i)
f=i*i+h*h
a=Math.sqrt(f)*Math.cos(g+c2.L.a)
a0=Math.sqrt(f)*Math.sin(g+c2.L.a)}else{a0=h
a=i}n+=c2.a6.a*0.5*(1-c2.Z.a)
f=(e+a)/2
a1=c2.an.a
a2=(d+a0)/2
a3=Math.pow(c-e,2)+Math.pow(b-d,2)
a4=Math.pow(a-c,2)+Math.pow(a0-b,2)
a5=Math.pow(a3/a4,2)
a6=Math.pow(a4/a3,2)
a7=c2.bc(e)
a8=c2.be(d)
a9=c2.bc(a)
b0=c2.be(a0)
if(!(a5+a6>3.4)){a5=c2.a
a6=-a5/2
if(!(a7<a6&&a9<a6)){a5=3*a5/2
if(!(a7>a5&&a9>a5)){a5=c2.b
a6=-a5/2
if(!(a8<a6&&b0<a6)){a5=3*a5/2
a5=a8>a5&&b0>a5}else a5=!0}else a5=!0}else a5=!0}else a5=!0
if(a5){if(k)A.a(c2.x,c3).stroke()
l=!0
k=!1}else{a5=c2.X.a
a6=c2.G
b1=c2.r
b2=2*n/a5
a6=a6.a
if(n<a5/2){a5=c2.F.a
b3=B.c.bz((a5+(a6-a5)*b2)*b1)
b1=c2.J.a
b4=B.c.bE((b1+(c2.I.a-b1)*b2)*c2.r)}else{--b2
b3=B.c.bz((a6+(c2.H.a-a6)*b2)*b1)
a5=c2.I.a
b4=B.c.bE((a5+(c2.K.a-a5)*b2)*c2.r)}b5=n/c2.X.a*c2.ac.a
b6=b5-Math.floor(b5/2)*2
b7=b6<=1?b6:2-b6
a5=c2.a_.a
a6=c2.a0.a
if(b7<a5){b8=Math.floor(a6*b7)/(c2.a_.a*c2.a0.a)
b9=A.a(q.b,c4)+(A.a(s.b,c4)-A.a(q.b,c4))*b8
c0=A.a(q.e,c5)+(A.a(s.e,c5)-A.a(q.e,c5))*b8
c1=A.a(q.w,c6)+(A.a(s.w,c6)-A.a(q.w,c6))*b8}else{b8=Math.floor((b7-a5)*a6)/((1-c2.a_.a)*c2.a0.a)
b9=A.a(s.b,c4)+(A.a(r.b,c4)-A.a(s.b,c4))*b8
c0=A.a(s.e,c5)+(A.a(r.e,c5)-A.a(s.e,c5))*b8
c1=A.a(s.w,c6)+(A.a(r.w,c6)-A.a(s.w,c6))*b8}if(b4>0)j=!0
if(b8===m)if(!l){a5=c2.Z.a
a5=a5<0.95||a5>1.1}else a5=!0
else a5=!0
if(a5){if(k)A.a(c2.x,c3).stroke()
B.t.sbR(A.a(c2.x,c3),"rgba("+B.c.W(b9)+", "+B.c.W(c0)+", "+B.c.W(c1)+", 1)")
A.a(c2.x,c3).lineWidth=b3
if(j){a5=A.a(c2.x,c3)
a6=o.a(A.B([b4,3*b4],p))
b1=!!a5.setLineDash
b1.toString
if(b1)a5.setLineDash(a6)
else{b1=!!a5.webkitLineDash
b1.toString
if(b1)a5.webkitLineDash=a6}}A.a(c2.x,c3).beginPath()
A.a(c2.x,c3).moveTo(a7,a8)
m=b8
l=!1}if(c2.an.a===0)A.a(c2.x,c3).lineTo(a9,b0)
A.a(c2.x,c3).quadraticCurveTo(c2.bc(f+(c-f)*a1),c2.be(a2+(b-a2)*a1),a9,b0)
k=!0}++c2.az}if(k)A.a(c2.x,c3).stroke()},
cF(d1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7=this,c8="easeInOut",c9=B.I.cq(d1),d0=c9.length
if(d0===35){if(1>=d0)return A.i(c9,1)
s=A.w(c9[1])
s.toString
d0=c7.ae
r=s<d0.d||s>d0.e?"aParam out of range":""
if(2>=c9.length)return A.i(c9,2)
q=A.w(c9[2])
q.toString
d0=c7.af
if(q<d0.d||q>d0.e)r="bParam out of range"
if(3>=c9.length)return A.i(c9,3)
p=A.w(c9[3])
p.toString
d0=c7.am
if(p<d0.d||p>d0.e)r="cParam out of range"
if(4>=c9.length)return A.i(c9,4)
o=A.w(c9[4])
o.toString
d0=c7.a7
if(o<d0.d||o>d0.e)r="beginT out of range"
if(5>=c9.length)return A.i(c9,5)
n=A.w(c9[5])
n.toString
d0=c7.X
if(n<d0.d||n>d0.e)r="maxT out of range"
if(6>=c9.length)return A.i(c9,6)
m=A.w(c9[6])
m.toString
d0=c7.a6
if(m<d0.d||m>d0.e)r="stepT out of range"
if(7>=c9.length)return A.i(c9,7)
l=A.w(c9[7])
l.toString
d0=c7.F
if(l<d0.d||l>d0.e)r="lw1 out of range"
if(8>=c9.length)return A.i(c9,8)
k=A.w(c9[8])
k.toString
d0=c7.G
if(k<d0.d||k>d0.e)r="lw2 out of range"
if(9>=c9.length)return A.i(c9,9)
j=A.w(c9[9])
j.toString
d0=c7.H
if(j<d0.d||j>d0.e)r="lw3 out of range"
if(10>=c9.length)return A.i(c9,10)
i=A.w(c9[10])
i.toString
d0=c7.J
if(i<d0.d||i>d0.e)r="dash1 out of range"
if(11>=c9.length)return A.i(c9,11)
h=A.w(c9[11])
h.toString
d0=c7.I
if(h<d0.d||h>d0.e)r="dash2 out of range"
if(12>=c9.length)return A.i(c9,12)
g=A.w(c9[12])
g.toString
d0=c7.K
if(g<d0.d||g>d0.e)r="dash3 out of range"
if(13>=c9.length)return A.i(c9,13)
f=A.fE(c9[13],null)
f.toString
if(f<0||f>16777216)r="c1 out of range"
if(14>=c9.length)return A.i(c9,14)
e=A.fE(c9[14],null)
e.toString
if(e<0||e>16777216)r="c2 out of range"
if(15>=c9.length)return A.i(c9,15)
d=A.fE(c9[15],null)
d.toString
if(d<0||d>16777216)r="c3 out of range"
if(16>=c9.length)return A.i(c9,16)
c=A.w(c9[16])
c.toString
d0=c7.a0
if(c<d0.d||c>d0.e)r="gradient out of range"
if(17>=c9.length)return A.i(c9,17)
b=A.w(c9[17])
b.toString
d0=c7.a_
if(b<d0.d||b>d0.e)r="pivot out of range"
if(18>=c9.length)return A.i(c9,18)
a=A.w(c9[18])
a.toString
d0=c7.ac
if(a<d0.d||a>d0.e)r="distrib out of range"
if(19>=c9.length)return A.i(c9,19)
a0=A.w(c9[19])
a0.toString
d0=c7.an
if(a0<d0.d||a0>d0.e)r="bzr out of range"
d0=c9.length
if(20>=d0)return A.i(c9,20)
a1=c9[20]
if(a1!=="butt"&&a1!=="round"&&a1!=="square")r="capsStyle out of range"
if(21>=d0)return A.i(c9,21)
a2=A.w(c9[21])
a2.toString
d0=c7.Z
if(a2<d0.d||a2>d0.e)r="gapsRatio out of range"
if(22>=c9.length)return A.i(c9,22)
a3=A.w(c9[22])
a3.toString
d0=c7.S
if(a3<d0.d||a3>d0.e)r="splitHnumber out of range"
if(23>=c9.length)return A.i(c9,23)
a4=A.w(c9[23])
a4.toString
d0=c7.ad
if(a4<d0.d||a4>d0.e)r="splitHwidth out of range"
if(24>=c9.length)return A.i(c9,24)
a5=A.w(c9[24])
a5.toString
d0=c7.N
if(a5<d0.d||a5>d0.e)r="splitVnumber out of range"
if(25>=c9.length)return A.i(c9,25)
a6=A.w(c9[25])
a6.toString
d0=c7.U
if(a6<d0.d||a6>d0.e)r="splitVheight out of range"
if(26>=c9.length)return A.i(c9,26)
a7=A.w(c9[26])
a7.toString
d0=c7.a2
if(a7<d0.d||a7>d0.e)r="splitQuinc out of range"
if(27>=c9.length)return A.i(c9,27)
a8=A.w(c9[27])
a8.toString
d0=c7.a3
if(a8<d0.d||a8>d0.e)r="flipH out of range"
if(28>=c9.length)return A.i(c9,28)
a9=A.w(c9[28])
a9.toString
d0=c7.a4
if(a9<d0.d||a9>d0.e)r="flipV out of range"
if(29>=c9.length)return A.i(c9,29)
b0=A.w(c9[29])
b0.toString
d0=c7.T
if(b0<d0.d||b0>d0.e)r="explode out of range"
if(30>=c9.length)return A.i(c9,30)
b1=A.w(c9[30])
b1.toString
d0=c7.a8
if(b1<d0.d||b1>d0.e)r="zoom out of range"
if(31>=c9.length)return A.i(c9,31)
b2=A.w(c9[31])
b2.toString
d0=c7.a1
if(b2<d0.d||b2>d0.e)r="xOrigine out of range"
if(32>=c9.length)return A.i(c9,32)
b3=A.w(c9[32])
b3.toString
d0=c7.Y
if(b3<d0.d||b3>d0.e)r="yOrigine out of range"
if(33>=c9.length)return A.i(c9,33)
b4=A.w(c9[33])
b4.toString
d0=c7.L
if(b4<d0.d||b4>d0.e)r="rotation out of range"
if(r===""){b5=B.c.a9((a3+1)*a5)
d0=c7.ah
b6=d0.length
if(b6<b5)for(b7=c7.ai;b6<b5;++b6){B.b.v(d0,2*(B.j.aA()-0.5))
B.b.v(b7,2*(B.j.aA()-0.5))}d0=c7.ae
if(d0.a!==s)d0.j(c8,s,600)
d0=c7.af
if(d0.a!==q)d0.j(c8,q,600)
d0=c7.am
if(d0.a!==p)d0.j(c8,p,600)
d0=c7.F
if(d0.a!==l)d0.j(c8,l,600)
d0=c7.G
if(d0.a!==k)d0.j(c8,k,600)
d0=c7.H
if(d0.a!==j)d0.j(c8,j,600)
d0=c7.J
if(d0.a!==i)d0.j(c8,i,600)
d0=c7.I
if(d0.a!==h)d0.j(c8,h,600)
d0=c7.K
if(d0.a!==g)d0.j(c8,g,600)
d0=c7.a6
if(d0.a!==m)d0.j(c8,m,600)
d0=c7.X
if(d0.a!==n)d0.j(c8,n,600)
d0=c7.a7
if(d0.a!==o)d0.j(c8,o,600)
d0=c7.an
if(d0.a!==a0)d0.j(c8,a0,600)
d0=c7.Z
if(d0.a!==a2)d0.j(c8,a2,600)
if(c7.ag!==a1){A.a(c7.x,"_ctx2d").lineCap=a1
c7.ag="selected"}b8=B.f.ab(f,16)&255
b9=B.f.ab(f,8)&255
c0=B.f.ab(f,0)&255
c1=B.f.ab(e,16)&255
c2=B.f.ab(e,8)&255
c3=B.f.ab(e,0)&255
c4=B.f.ab(d,16)&255
c5=B.f.ab(d,8)&255
c6=B.f.ab(d,0)&255
d0=c7.t
if(A.a(d0.b,"r")!==b8||A.a(d0.e,"g")!==b9||A.a(d0.w,"b")!==c0)d0.aJ(c8,b8,b9,c0,600)
d0=c7.u
if(A.a(d0.b,"r")!==c1||A.a(d0.e,"g")!==c2||A.a(d0.w,"b")!==c3)d0.aJ(c8,c1,c2,c3,600)
d0=c7.q
if(A.a(d0.b,"r")!==c4||A.a(d0.e,"g")!==c5||A.a(d0.w,"b")!==c6)d0.aJ(c8,c4,c5,c6,600)
d0=c7.ac
if(d0.a!==a)d0.j(c8,a,600)
d0=c7.a_
if(d0.a!==b)d0.j(c8,b,600)
d0=c7.a0
if(d0.a!==c)d0.j(c8,c,600)
d0=c7.a8
if(d0.a!==b1)d0.j(c8,b1,600)
d0=c7.a1
if(d0.a!==b2)d0.j(c8,b2,600)
d0=c7.Y
if(d0.a!==b3)d0.j(c8,b3,600)
d0=c7.L
if(d0.a!==b4)d0.j(c8,b4,600)
d0=c7.S
if(d0.a!==a3)d0.j(c8,a3,600)
d0=c7.ad
if(d0.a!==a4)d0.j(c8,a4,600)
d0=c7.N
if(d0.a!==a5)d0.j(c8,a5,600)
d0=c7.U
if(d0.a!==a6)d0.j(c8,a6,600)
d0=c7.a2
if(d0.a!==a7)d0.j(c8,a7,600)
d0=c7.a3
if(d0.a!==a8)d0.j(c8,a8,600)
d0=c7.a4
if(d0.a!==a9)d0.j(c8,a9,600)
d0=c7.T
if(d0.a!==b0)d0.j(c8,b0,600)
r=""}}else r="wrong import length"
return r},
bP(){var s,r,q,p=this,o=window
o.toString
s=t.b
r=s.a(new A.dd(p))
t.Z.a(null)
q=t.B
A.d(o,"aParamUp",r,!1,q)
r=window
r.toString
A.d(r,"aParamDown",s.a(new A.de(p)),!1,q)
r=window
r.toString
A.d(r,"bParamUp",s.a(new A.df(p)),!1,q)
r=window
r.toString
A.d(r,"bParamDown",s.a(new A.dr(p)),!1,q)
r=window
r.toString
A.d(r,"cParamUp",s.a(new A.dC(p)),!1,q)
r=window
r.toString
A.d(r,"cParamDown",s.a(new A.dN(p)),!1,q)
r=window
r.toString
A.d(r,"beginTUp",s.a(new A.dY(p)),!1,q)
r=window
r.toString
A.d(r,"beginTDown",s.a(new A.e6(p)),!1,q)
r=window
r.toString
A.d(r,"maxTUp",s.a(new A.e7(p)),!1,q)
r=window
r.toString
A.d(r,"maxTDown",s.a(new A.e8(p)),!1,q)
r=window
r.toString
A.d(r,"stepTUp",s.a(new A.e9(p)),!1,q)
r=window
r.toString
A.d(r,"stepTDown",s.a(new A.dg(p)),!1,q)
r=window
r.toString
A.d(r,"switchLineControlled",s.a(new A.dh(p)),!1,q)
r=window
r.toString
A.d(r,"lwUp",s.a(new A.di(p)),!1,q)
r=window
r.toString
A.d(r,"lwDown",s.a(new A.dj(p)),!1,q)
r=window
r.toString
A.d(r,"dashedUp",s.a(new A.dk(p)),!1,q)
r=window
r.toString
A.d(r,"dashedDown",s.a(new A.dl(p)),!1,q)
r=window
r.toString
A.d(r,"switchColorControlled",s.a(new A.dm(p)),!1,q)
r=window
r.toString
A.d(r,"colorHueLeft",s.a(new A.dn(p)),!1,q)
r=window
r.toString
A.d(r,"colorHueRight",s.a(new A.dp(p)),!1,q)
r=window
r.toString
A.d(r,"colorSatUp",s.a(new A.dq(p)),!1,q)
r=window
r.toString
A.d(r,"colorSatDown",s.a(new A.ds(p)),!1,q)
r=window
r.toString
A.d(r,"colorLightUp",s.a(new A.dt(p)),!1,q)
r=window
r.toString
A.d(r,"colorLightDown",s.a(new A.du(p)),!1,q)
r=window
r.toString
A.d(r,"pivotRight",s.a(new A.dv(p)),!1,q)
r=window
r.toString
A.d(r,"pivotLeft",s.a(new A.dw(p)),!1,q)
r=window
r.toString
A.d(r,"gradientUp",s.a(new A.dx(p)),!1,q)
r=window
r.toString
A.d(r,"gradientDown",s.a(new A.dy(p)),!1,q)
r=window
r.toString
A.d(r,"distribUp",s.a(new A.dz(p)),!1,q)
r=window
r.toString
A.d(r,"distribDown",s.a(new A.dA(p)),!1,q)
r=window
r.toString
A.d(r,"lineCurve",s.a(new A.dB(p)),!1,q)
r=window
r.toString
A.d(r,"lineStrait",s.a(new A.dD(p)),!1,q)
r=window
r.toString
A.d(r,"capsRound",s.a(new A.dE(p)),!1,q)
r=window
r.toString
A.d(r,"capsSquare",s.a(new A.dF(p)),!1,q)
r=window
r.toString
A.d(r,"capsButt",s.a(new A.dG(p)),!1,q)
r=window
r.toString
A.d(r,"gapsLess",s.a(new A.dH(p)),!1,q)
r=window
r.toString
A.d(r,"gapsMore",s.a(new A.dI(p)),!1,q)
r=window
r.toString
A.d(r,"splitHorzUp",s.a(new A.dJ(p)),!1,q)
r=window
r.toString
A.d(r,"splitHorzDown",s.a(new A.dK(p)),!1,q)
r=window
r.toString
A.d(r,"splitVertUp",s.a(new A.dL(p)),!1,q)
r=window
r.toString
A.d(r,"splitVertDown",s.a(new A.dM(p)),!1,q)
r=window
r.toString
A.d(r,"splitWidthUp",s.a(new A.dO(p)),!1,q)
r=window
r.toString
A.d(r,"splitWidthDown",s.a(new A.dP(p)),!1,q)
r=window
r.toString
A.d(r,"splitHeightUp",s.a(new A.dQ(p)),!1,q)
r=window
r.toString
A.d(r,"splitHeightDown",s.a(new A.dR(p)),!1,q)
r=window
r.toString
A.d(r,"splitQuincSet",s.a(new A.dS(p)),!1,q)
r=window
r.toString
A.d(r,"zoomUp",s.a(new A.dT(p)),!1,q)
r=window
r.toString
A.d(r,"zoomDown",s.a(new A.dU(p)),!1,q)
r=window
r.toString
A.d(r,"panLeft",s.a(new A.dV(p)),!1,q)
r=window
r.toString
A.d(r,"panUp",s.a(new A.dW(p)),!1,q)
r=window
r.toString
A.d(r,"panRight",s.a(new A.dX(p)),!1,q)
r=window
r.toString
A.d(r,"panDown",s.a(new A.dZ(p)),!1,q)
r=window
r.toString
A.d(r,"rotLeft",s.a(new A.e_(p)),!1,q)
r=window
r.toString
A.d(r,"rotRight",s.a(new A.e0(p)),!1,q)
r=window
r.toString
A.d(r,"flipH",s.a(new A.e1(p)),!1,q)
r=window
r.toString
A.d(r,"flipV",s.a(new A.e2(p)),!1,q)
r=window
r.toString
A.d(r,"explodeUp",s.a(new A.e3(p)),!1,q)
r=window
r.toString
A.d(r,"explodeDown",s.a(new A.e4(p)),!1,q)
r=window
r.toString
A.d(r,"center",s.a(new A.e5(p)),!1,q)}}
A.dd.prototype={
$1(a){var s=A.j(B.a.gm(t.h.a(a))),r=this.a.ae
if(s)r.k(0,"expUp")
else r.h(0)},
$S:0}
A.de.prototype={
$1(a){var s=A.j(B.a.gm(t.h.a(a))),r=this.a.ae
if(s)r.k(0,"expDown")
else r.h(0)},
$S:0}
A.df.prototype={
$1(a){var s=A.j(B.a.gm(t.h.a(a))),r=this.a.af
if(s)r.k(0,"expUp")
else r.h(0)},
$S:0}
A.dr.prototype={
$1(a){var s=A.j(B.a.gm(t.h.a(a))),r=this.a.af
if(s)r.k(0,"expDown")
else r.h(0)},
$S:0}
A.dC.prototype={
$1(a){var s=A.j(B.a.gm(t.h.a(a))),r=this.a.am
if(s)r.k(0,"expUp")
else r.h(0)},
$S:0}
A.dN.prototype={
$1(a){var s=A.j(B.a.gm(t.h.a(a))),r=this.a.am
if(s)r.k(0,"expDown")
else r.h(0)},
$S:0}
A.dY.prototype={
$1(a){var s=A.j(B.a.gm(t.h.a(a))),r=this.a.a7
if(s)r.k(0,"expUp")
else r.h(0)},
$S:0}
A.e6.prototype={
$1(a){var s=A.j(B.a.gm(t.h.a(a))),r=this.a.a7
if(s)r.k(0,"expDown")
else r.h(0)},
$S:0}
A.e7.prototype={
$1(a){var s=A.j(B.a.gm(t.h.a(a))),r=this.a.X
if(s)r.k(0,"linearUp")
else r.h(0)},
$S:0}
A.e8.prototype={
$1(a){var s=A.j(B.a.gm(t.h.a(a))),r=this.a.X
if(s)r.k(0,"linearDown")
else r.h(0)},
$S:0}
A.e9.prototype={
$1(a){var s=A.j(B.a.gm(t.h.a(a))),r=this.a.a6
if(s)r.k(0,"expUp")
else r.h(0)},
$S:0}
A.dg.prototype={
$1(a){var s=A.j(B.a.gm(t.h.a(a))),r=this.a.a6
if(s)r.k(0,"expDown")
else r.h(0)},
$S:0}
A.dh.prototype={
$1(a){var s,r,q="selected"
if(A.j(B.a.gm(t.h.a(a)))){s=this.a
r=s.V
if(r==="L1"){s.V="L2"
s.G.k(0,q)
s.F.h(0)
s.H.h(0)
s.I.k(0,q)
s.J.h(0)
s.K.h(0)}else if(r==="L2"){s.V="L3"
s.H.k(0,q)
s.F.h(0)
s.G.h(0)
s.K.k(0,q)
s.J.h(0)
s.I.h(0)}else if(r==="L3"){s.V="L_"
s.F.k(0,q)
s.G.k(0,q)
s.H.k(0,q)
s.J.k(0,q)
s.I.k(0,q)
s.K.k(0,q)}else if(r==="L_"){s.V="L1"
s.F.k(0,q)
s.G.h(0)
s.H.h(0)
s.J.k(0,q)
s.I.h(0)
s.K.h(0)}}},
$S:0}
A.di.prototype={
$1(a){var s,r="linearUp"
if(A.j(B.a.gm(t.h.a(a)))){s=this.a
switch(s.V){case"L1":s.F.k(0,r)
break
case"L2":s.G.k(0,r)
break
case"L3":s.H.k(0,r)
break
case"L_":s.F.k(0,r)
s.G.k(0,r)
s.H.k(0,r)
break}}else{s=this.a
switch(s.V){case"L1":s.F.h(0)
break
case"L2":s.G.h(0)
break
case"L3":s.H.h(0)
break
case"L_":s.F.h(0)
s.G.h(0)
s.H.h(0)
break}}},
$S:0}
A.dj.prototype={
$1(a){var s,r="linearDown"
if(A.j(B.a.gm(t.h.a(a)))){s=this.a
switch(s.V){case"L1":s.F.k(0,r)
break
case"L2":s.G.k(0,r)
break
case"L3":s.H.k(0,r)
break
case"L_":s.F.k(0,r)
s.G.k(0,r)
s.H.k(0,r)
break}}else{s=this.a
switch(s.V){case"L1":s.F.h(0)
break
case"L2":s.G.h(0)
break
case"L3":s.H.h(0)
break
case"L_":s.F.h(0)
s.G.h(0)
s.H.h(0)
break}}},
$S:0}
A.dk.prototype={
$1(a){var s,r="linearUp"
if(A.j(B.a.gm(t.h.a(a)))){s=this.a
switch(s.V){case"L1":s.J.k(0,r)
break
case"L2":s.I.k(0,r)
break
case"L3":s.K.k(0,r)
break
case"L_":s.J.k(0,r)
s.I.k(0,r)
s.K.k(0,r)
break}}else{s=this.a
switch(s.V){case"L1":s.J.h(0)
break
case"L2":s.I.h(0)
break
case"L3":s.K.h(0)
break
case"L_":s.J.h(0)
s.I.h(0)
s.K.h(0)
break}}},
$S:0}
A.dl.prototype={
$1(a){var s,r="linearDown"
if(A.j(B.a.gm(t.h.a(a)))){s=this.a
switch(s.V){case"L1":s.J.k(0,r)
break
case"L2":s.I.k(0,r)
break
case"L3":s.K.k(0,r)
break
case"L_":s.J.k(0,r)
s.I.k(0,r)
s.K.k(0,r)
break}}else{s=this.a
switch(s.V){case"L1":s.J.h(0)
break
case"L2":s.I.h(0)
break
case"L3":s.K.h(0)
break
case"L_":s.J.h(0)
s.I.h(0)
s.K.h(0)
break}}},
$S:0}
A.dm.prototype={
$1(a){var s,r,q="selected"
if(A.j(B.a.gm(t.h.a(a)))){s=this.a
r=s.M
if(r==="C1"){s.M="C2"
s.u.at=q
s.t.at=""
s.q.at=""}else if(r==="C2"){s.M="C3"
s.q.at=q
s.t.at=""
s.u.at=""}else if(r==="C3"){s.M="C_"
s.t.at=q
s.u.at=q
s.q.at=q}else if(r==="C_"){s.M="C1"
s.t.at=q
s.u.at=""
s.q.at=""}}},
$S:0}
A.dn.prototype={
$1(a){var s,r="hueUp"
if(A.j(B.a.gm(t.h.a(a)))){s=this.a
switch(s.M){case"C1":s.t.at=r
break
case"C2":s.u.at=r
break
case"C3":s.q.at=r
break
case"C_":s.q.at=r
s.u.at=r
s.t.at=r
break}}else{s=this.a
switch(s.M){case"C1":s.t.at=""
break
case"C2":s.u.at=""
break
case"C3":s.q.at=""
break
case"C_":s.q.at=""
s.u.at=""
s.t.at=""
break}}},
$S:0}
A.dp.prototype={
$1(a){var s,r="hueDown"
if(A.j(B.a.gm(t.h.a(a)))){s=this.a
switch(s.M){case"C1":s.t.at=r
break
case"C2":s.u.at=r
break
case"C3":s.q.at=r
break
case"C_":s.q.at=r
s.u.at=r
s.t.at=r
break}}else{s=this.a
switch(s.M){case"C1":s.t.at=""
break
case"C2":s.u.at=""
break
case"C3":s.q.at=""
break
case"C_":s.q.at=""
s.u.at=""
s.t.at=""
break}}},
$S:0}
A.dq.prototype={
$1(a){var s,r="saturationUp"
if(A.j(B.a.gm(t.h.a(a)))){s=this.a
switch(s.M){case"C1":s.t.at=r
break
case"C2":s.u.at=r
break
case"C3":s.q.at=r
break
case"C_":s.q.at=r
s.u.at=r
s.t.at=r
break}}else{s=this.a
switch(s.M){case"C1":s.t.at=""
break
case"C2":s.u.at=""
break
case"C3":s.q.at=""
break
case"C_":s.q.at=""
s.u.at=""
s.t.at=""
break}}},
$S:0}
A.ds.prototype={
$1(a){var s,r="saturationDown"
if(A.j(B.a.gm(t.h.a(a)))){s=this.a
switch(s.M){case"C1":s.t.at=r
break
case"C2":s.u.at=r
break
case"C3":s.q.at=r
break
case"C_":s.q.at=r
s.u.at=r
s.t.at=r
break}}else{s=this.a
switch(s.M){case"C1":s.t.at=""
break
case"C2":s.u.at=""
break
case"C3":s.q.at=""
break
case"C_":s.q.at=""
s.u.at=""
s.t.at=""
break}}},
$S:0}
A.dt.prototype={
$1(a){var s,r="lightnessUp"
if(A.j(B.a.gm(t.h.a(a)))){s=this.a
switch(s.M){case"C1":s.t.at=r
break
case"C2":s.u.at=r
break
case"C3":s.q.at=r
break
case"C_":s.q.at=r
s.u.at=r
s.t.at=r
break}}else{s=this.a
switch(s.M){case"C1":s.t.at=""
break
case"C2":s.u.at=""
break
case"C3":s.q.at=""
break
case"C_":s.q.at=""
s.u.at=""
s.t.at=""
break}}},
$S:0}
A.du.prototype={
$1(a){var s,r="lightnessDown"
if(A.j(B.a.gm(t.h.a(a)))){s=this.a
switch(s.M){case"C1":s.t.at=r
break
case"C2":s.u.at=r
break
case"C3":s.q.at=r
break
case"C_":s.q.at=r
s.u.at=r
s.t.at=r
break}}else{s=this.a
switch(s.M){case"C1":s.t.at=""
break
case"C2":s.u.at=""
break
case"C3":s.q.at=""
break
case"C_":s.q.at=""
s.u.at=""
s.t.at=""
break}}},
$S:0}
A.dv.prototype={
$1(a){var s=A.j(B.a.gm(t.h.a(a))),r=this.a.a_
if(s)r.k(0,"linearUp")
else r.h(0)},
$S:0}
A.dw.prototype={
$1(a){var s=A.j(B.a.gm(t.h.a(a))),r=this.a.a_
if(s)r.k(0,"linearDown")
else r.h(0)},
$S:0}
A.dx.prototype={
$1(a){var s=A.j(B.a.gm(t.h.a(a))),r=this.a.a0
if(s)r.k(0,"linearUp")
else r.h(0)},
$S:0}
A.dy.prototype={
$1(a){var s=A.j(B.a.gm(t.h.a(a))),r=this.a.a0
if(s)r.k(0,"linearDown")
else r.h(0)},
$S:0}
A.dz.prototype={
$1(a){var s=A.j(B.a.gm(t.h.a(a))),r=this.a.ac
if(s)r.k(0,"expUp")
else r.h(0)},
$S:0}
A.dA.prototype={
$1(a){var s=A.j(B.a.gm(t.h.a(a))),r=this.a.ac
if(s)r.k(0,"expDown")
else r.h(0)},
$S:0}
A.dB.prototype={
$1(a){if(A.j(B.a.gm(t.h.a(a))))this.a.an.j("easeInOut",2.025,30)},
$S:0}
A.dD.prototype={
$1(a){if(A.j(B.a.gm(t.h.a(a))))this.a.an.j("easeInOut",0,30)},
$S:0}
A.dE.prototype={
$1(a){var s
if(A.j(B.a.gm(t.h.a(a)))){s=this.a
A.a(s.x,"_ctx2d").lineCap="round"
s.ag="selected"}},
$S:0}
A.dF.prototype={
$1(a){var s
if(A.j(B.a.gm(t.h.a(a)))){s=this.a
A.a(s.x,"_ctx2d").lineCap="square"
s.ag="selected"}},
$S:0}
A.dG.prototype={
$1(a){var s
if(A.j(B.a.gm(t.h.a(a)))){s=this.a
A.a(s.x,"_ctx2d").lineCap="butt"
s.ag="selected"}},
$S:0}
A.dH.prototype={
$1(a){var s=A.j(B.a.gm(t.h.a(a))),r=this.a.Z
if(s)r.k(0,"linearUp")
else r.h(0)},
$S:0}
A.dI.prototype={
$1(a){var s=A.j(B.a.gm(t.h.a(a))),r=this.a.Z
if(s)r.k(0,"linearDown")
else r.h(0)},
$S:0}
A.dJ.prototype={
$1(a){var s,r,q,p,o
if(A.j(B.a.gm(t.h.a(a)))){s=this.a
r=B.c.a9((s.S.a+1)*s.N.a)
q=s.ah
p=q.length
if(p<r)for(o=p+1,p=s.ai;o<=r;++o){B.b.v(q,2*(B.j.aA()-0.5))
B.b.v(p,2*(B.j.aA()-0.5))}s=s.S
s.j("easeInOut",s.a+1,30)}},
$S:0}
A.dK.prototype={
$1(a){var s
if(A.j(B.a.gm(t.h.a(a)))){s=this.a.S
s.j("easeInOut",s.a-1,30)}},
$S:0}
A.dL.prototype={
$1(a){var s,r,q,p,o
if(A.j(B.a.gm(t.h.a(a)))){s=this.a
r=B.c.a9(s.S.a*(s.N.a+1))
q=s.ah
p=q.length
if(p<r)for(o=p+1,p=s.ai;o<=r;++o){B.b.v(q,2*(B.j.aA()-0.5))
B.b.v(p,2*(B.j.aA()-0.5))}s=s.N
s.j("easeInOut",s.a+1,30)}},
$S:0}
A.dM.prototype={
$1(a){var s
if(A.j(B.a.gm(t.h.a(a)))){s=this.a.N
s.j("easeInOut",s.a-1,30)}},
$S:0}
A.dO.prototype={
$1(a){var s=A.j(B.a.gm(t.h.a(a)))&&this.a.S.a>1,r=this.a.ad
if(s)r.k(0,"linearUp")
else r.h(0)},
$S:0}
A.dP.prototype={
$1(a){var s=A.j(B.a.gm(t.h.a(a)))&&this.a.S.a>1,r=this.a.ad
if(s)r.k(0,"linearDown")
else r.h(0)},
$S:0}
A.dQ.prototype={
$1(a){var s=A.j(B.a.gm(t.h.a(a)))&&this.a.N.a>1,r=this.a.U
if(s)r.k(0,"linearUp")
else r.h(0)},
$S:0}
A.dR.prototype={
$1(a){var s=A.j(B.a.gm(t.h.a(a)))&&this.a.N.a>1,r=this.a.U
if(s)r.k(0,"linearDown")
else r.h(0)},
$S:0}
A.dS.prototype={
$1(a){var s,r="easeInOut"
if(A.j(B.a.gm(t.h.a(a)))){s=this.a.a2
if(s.a!==0)s.j(r,0,30)
else s.j(r,1,30)}},
$S:0}
A.dT.prototype={
$1(a){var s=A.j(B.a.gm(t.h.a(a))),r=this.a.a8
if(s)r.k(0,"linearUp")
else r.h(0)},
$S:0}
A.dU.prototype={
$1(a){var s=A.j(B.a.gm(t.h.a(a))),r=this.a.a8
if(s)r.k(0,"linearDown")
else r.h(0)},
$S:0}
A.dV.prototype={
$1(a){var s=A.j(B.a.gm(t.h.a(a))),r=this.a,q=r.a1
if(s)q.k(0,"expUp")
else{q.h(0)
r.Y.h(0)}},
$S:0}
A.dW.prototype={
$1(a){var s=this.a
if(A.j(B.a.gm(t.h.a(a))))s.Y.k(0,"expUp")
else{s.a1.h(0)
s.Y.h(0)}},
$S:0}
A.dX.prototype={
$1(a){var s=A.j(B.a.gm(t.h.a(a))),r=this.a,q=r.a1
if(s)q.k(0,"expDown")
else{q.h(0)
r.Y.h(0)}},
$S:0}
A.dZ.prototype={
$1(a){var s=this.a
if(A.j(B.a.gm(t.h.a(a))))s.Y.k(0,"expDown")
else{s.a1.h(0)
s.Y.h(0)}},
$S:0}
A.e_.prototype={
$1(a){var s=A.j(B.a.gm(t.h.a(a))),r=this.a.L
if(s)r.k(0,"linearDown")
else r.h(0)},
$S:0}
A.e0.prototype={
$1(a){var s=A.j(B.a.gm(t.h.a(a))),r=this.a.L
if(s)r.k(0,"linearUp")
else r.h(0)},
$S:0}
A.e1.prototype={
$1(a){var s,r="easeInOut"
if(A.j(B.a.gm(t.h.a(a)))){s=this.a.a3
if(s.a===1)s.j(r,-1,30)
else s.j(r,1,30)}},
$S:0}
A.e2.prototype={
$1(a){var s,r="easeInOut"
if(A.j(B.a.gm(t.h.a(a)))){s=this.a.a4
if(s.a===1)s.j(r,-1,30)
else s.j(r,1,30)}},
$S:0}
A.e3.prototype={
$1(a){var s=A.j(B.a.gm(t.h.a(a))),r=this.a.T
if(s)r.k(0,"expUp")
else r.h(0)},
$S:0}
A.e4.prototype={
$1(a){var s=A.j(B.a.gm(t.h.a(a))),r=this.a.T
if(s)r.k(0,"expDown")
else r.h(0)},
$S:0}
A.e5.prototype={
$1(a){var s,r="easeInOut"
if(A.j(B.a.gm(t.h.a(a)))){s=this.a
s.a1.j(r,0,30)
s.Y.j(r,0,30)}},
$S:0}
A.ea.prototype={
bX(a,b,c){var s,r,q,p,o=this,n="_btn",m=t.D.a(document.querySelector(a))
o.a=m
s=t.Z
r=t.W
q=r.i("~(1)?")
r=r.c
if(c){m=A.a(m,n)
q=q.a(new A.eb(b))
s.a(null)
A.d(m,"click",q,!1,r)}else{m=A.a(m,n)
p=q.a(new A.ec(b))
s.a(null)
A.d(m,"mousedown",p,!1,r)
A.d(A.a(o.a,n),"mouseup",q.a(new A.ed(b)),!1,r)
r=t.bq
q=r.i("~(1)?")
r=r.c
A.d(A.a(o.a,n),"touchstart",q.a(new A.ee(b)),!1,r)
A.d(A.a(o.a,n),"touchend",q.a(new A.ef(b)),!1,r)}}}
A.eb.prototype={
$1(a){var s
t.V.a(a)
s=window
s.toString
s=s.dispatchEvent(A.c6(this.a,!0))
s.toString
return s},
$S:2}
A.ec.prototype={
$1(a){var s
t.V.a(a)
s=window
s.toString
s=s.dispatchEvent(A.c6(this.a,!0))
s.toString
return s},
$S:2}
A.ed.prototype={
$1(a){var s
t.V.a(a)
s=window
s.toString
s=s.dispatchEvent(A.c6(this.a,!1))
s.toString
return s},
$S:2}
A.ee.prototype={
$1(a){var s
t.U.a(a)
s=window
s.toString
s=s.dispatchEvent(A.c6(this.a,!0))
s.toString
return s},
$S:10}
A.ef.prototype={
$1(a){var s
t.U.a(a)
s=window
s.toString
s=s.dispatchEvent(A.c6(this.a,!1))
s.toString
return s},
$S:10}
A.eg.prototype={
A(){var s,r=this,q="h",p="_rTarget",o="_gTarget",n="_bTarget"
switch(r.at){case"hueUp":s=A.a(r.z,q)+1
r.z=s
if(A.a(s,q)>360)r.z=A.a(r.z,q)-360
r.aE()
break
case"hueDown":s=A.a(r.z,q)-1
r.z=s
if(A.a(s,q)<0)r.z=A.a(r.z,q)+360
r.aE()
break
case"saturationUp":r.Q=A.R(Math.min(100,A.a(r.Q,"s")+1))
r.aE()
break
case"saturationDown":r.Q=A.R(Math.max(0,A.a(r.Q,"s")-1))
r.aE()
break
case"lightnessUp":r.as=A.R(Math.min(100,A.a(r.as,"l")+1))
r.aE()
break
case"lightnessDown":r.as=A.R(Math.max(0,A.a(r.as,"l")-1))
r.aE()
break
case"easeInOut":r.b=A.a(r.c,p)-B.c.a9(A.a(r.d,"_rGap")*(1-r.b7(r.ax/r.ay)))
r.e=A.a(r.f,o)-B.c.a9(A.a(r.r,"_gGap")*(1-r.b7(r.ax/r.ay)))
r.w=A.a(r.x,n)-B.c.a9(A.a(r.y,"_bGap")*(1-r.b7(r.ax/r.ay)))
r.aF()
if(++r.ax>r.ay){r.at=""
r.b=A.a(r.c,p)
r.e=A.a(r.f,o)
r.w=A.a(r.x,n)
r.aF()}break}},
b7(a){return(Math.atan(6*a-3)+1.25)/2.5},
aE(){var s=this,r="color",q=new A.b8(A.a(s.z,"h"),A.a(s.Q,"s"),A.a(s.as,"l"))
s.a=q
s.b=B.c.W(A.a(q,r).ar().a)
s.e=B.c.W(A.a(s.a,r).ar().b)
s.w=B.c.W(A.a(s.a,r).ar().c)},
aF(){var s=this,r="color",q=new A.bt(A.a(s.b,"r"),A.a(s.e,"g"),A.a(s.w,"b"))
s.a=q
s.z=B.c.W(A.a(q,r).aW().a)
s.Q=B.c.W(A.a(s.a,r).aW().b)
s.as=B.c.W(A.a(s.a,r).aW().c)},
aJ(a,b,c,d,e){var s=this
s.at=a
s.c=b
s.d=A.a(b,"_rTarget")-A.a(s.b,"r")
s.f=c
s.r=A.a(c,"_gTarget")-A.a(s.e,"g")
s.x=d
s.y=A.a(d,"_bTarget")-A.a(s.w,"b")
s.ax=0
s.ay=e},
gn(a){return B.f.l((A.a(this.b,"r")<<16|A.a(this.e,"g")<<8|A.a(this.w,"b"))>>>0)}}
A.aH.prototype={
gO(a){var s=this.ar()
return 65536*B.c.W(s.a)+256*B.c.W(s.b)+B.c.W(s.c)},
ap(a,b){if(b==null)return!1
return b instanceof A.aH&&this.gO(this)===b.gO(b)}}
A.b8.prototype={
ar(){var s,r,q,p=A.B([0,0,0],t.d7),o=B.c.aY(this.a/360,1),n=this.c/100
if(o<0.16666666666666666){B.b.C(p,0,1)
B.b.C(p,1,o*6)}else if(o<0.3333333333333333){B.b.C(p,0,2-o*6)
B.b.C(p,1,1)}else if(o<0.5){B.b.C(p,1,1)
B.b.C(p,2,o*6-2)}else if(o<0.6666666666666666){B.b.C(p,1,4-o*6)
B.b.C(p,2,1)}else{s=o*6
if(o<0.8333333333333334){B.b.C(p,0,s-4)
B.b.C(p,2,1)}else{B.b.C(p,0,1)
B.b.C(p,2,6-s)}}s=t.cY
p=A.es(new A.V(p,t.ad.a(new A.ek(this.b/100)),s),!0,s.i("U.E"))
s=A.ai(p)
r=s.i("x(1)")
s=s.i("V<1,x>")
p=n<0.5?A.es(new A.V(p,r.a(new A.el(n)),s),!0,s.i("U.E")):A.es(new A.V(p,r.a(new A.em(n)),s),!0,s.i("U.E"))
s=A.ai(p)
r=s.i("V<1,a9>")
p=A.es(new A.V(p,s.i("a9(1)").a(new A.en()),r),!0,r.i("U.E"))
r=p.length
if(0>=r)return A.i(p,0)
s=p[0]
if(1>=r)return A.i(p,1)
q=p[1]
if(2>=r)return A.i(p,2)
return new A.bt(s,q,p[2])},
aW(){return this},
l(a){return"h: "+A.r(this.a)+", s: "+A.r(this.b)+"%, l: "+A.r(this.c)+"%"}}
A.ek.prototype={
$1(a){A.bT(a)
return a+(1-this.a)*(0.5-a)},
$S:27}
A.el.prototype={
$1(a){return this.a*2*A.bT(a)},
$S:11}
A.em.prototype={
$1(a){A.bT(a)
return this.a*2*(1-a)+2*a-1},
$S:11}
A.en.prototype={
$1(a){return B.c.a9(A.bT(a)*255)},
$S:28}
A.bt.prototype={
ar(){return this},
aW(){var s,r,q=this.a/255,p=this.b/255,o=this.c/255,n=t.w,m=B.b.bG(A.B([q,p,o],n),B.A),l=B.b.bG(A.B([q,p,o],n),B.B),k=m-l
if(m===q)s=60*B.c.aY((p-o)/k,6)
else s=m===p?60*((o-q)/k+2):60*((q-p)/k+4)
if(isNaN(s)||s==1/0||s==-1/0)s=0
r=(m+l)/2
return new A.b8(s,(k===0?0:k/(1-Math.abs(r*2-1)))*100,r*100)},
l(a){return"r: "+A.r(this.a)+", g: "+A.r(this.b)+", b: "+A.r(this.c)},
aV(){return"rgb("+B.c.W(this.a)+", "+B.c.W(this.b)+", "+B.c.W(this.c)+")"}};(function aliases(){var s=J.bc.prototype
s.bS=s.l
s=J.ae.prototype
s.bU=s.l
s=A.t.prototype
s.bT=s.aX
s=A.q.prototype
s.aZ=s.ak
s=A.bK.prototype
s.bV=s.aw})();(function installTearOffs(){var s=hunkHelpers._static_1,r=hunkHelpers._static_0,q=hunkHelpers.installStaticTearOff,p=hunkHelpers._instance_1u
s(A,"jK","iW",3)
s(A,"jL","iX",3)
s(A,"jM","iY",3)
r(A,"hM","jE",1)
q(A,"jQ",4,null,["$4"],["j_"],12,0)
q(A,"jR",4,null,["$4"],["j0"],12,0)
q(A,"k2",2,null,["$1$2","$2"],["hR",function(a,b){return A.hR(a,b,t.H)}],13,0)
q(A,"k1",2,null,["$1$2","$2"],["hQ",function(a,b){return A.hQ(a,b,t.H)}],13,0)
var o
p(o=A.c2.prototype,"gbH","cL",6)
p(o,"gbN","bO",2)
p(o,"gco","cp",2)
p(o,"gcu","cv",2)
p(o,"gcD","cE",2)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.v,null)
q(A.v,[A.fC,J.bc,J.b1,A.u,A.eA,A.t,A.av,A.N,A.E,A.eD,A.ex,A.bL,A.G,A.eq,A.bj,A.eO,A.X,A.cD,A.cO,A.cN,A.b3,A.bB,A.bE,A.I,A.cx,A.bx,A.cn,A.co,A.bR,A.bS,A.cF,A.bG,A.bH,A.F,A.bu,A.aJ,A.aL,A.ci,A.bv,A.eQ,A.D,A.cK,A.cp,A.eh,A.fz,A.az,A.a_,A.bp,A.bK,A.cL,A.aq,A.cJ,A.bQ,A.f8,A.eH,A.ew,A.f2,A.cX,A.c2,A.dc,A.ea,A.eg,A.aH])
q(J.bc,[J.cd,J.be,J.O,J.C,J.bf,J.at])
q(J.O,[J.ae,A.o,A.b4,A.cz,A.b,A.ei,A.c9,A.bl,A.cG,A.cR])
q(J.ae,[J.cj,J.aR,J.a5])
r(J.eo,J.C)
q(J.bf,[J.bd,J.ce])
q(A.u,[A.bh,A.af,A.cg,A.cu,A.ck,A.b2,A.cB,A.ch,A.a3,A.cv,A.ct,A.aP,A.c5,A.c7])
q(A.t,[A.b6,A.ay])
q(A.b6,[A.U,A.bi])
r(A.V,A.U)
r(A.bz,A.N)
q(A.E,[A.bb,A.c3,A.c4,A.cs,A.fo,A.fq,A.eL,A.eK,A.eU,A.f1,A.eB,A.f5,A.ej,A.eG,A.eP,A.ev,A.eu,A.f6,A.f7,A.fc,A.ft,A.fu,A.d2,A.d3,A.d4,A.d5,A.d6,A.d7,A.d8,A.d9,A.da,A.db,A.dd,A.de,A.df,A.dr,A.dC,A.dN,A.dY,A.e6,A.e7,A.e8,A.e9,A.dg,A.dh,A.di,A.dj,A.dk,A.dl,A.dm,A.dn,A.dp,A.dq,A.ds,A.dt,A.du,A.dv,A.dw,A.dx,A.dy,A.dz,A.dA,A.dB,A.dD,A.dE,A.dF,A.dG,A.dH,A.dI,A.dJ,A.dK,A.dL,A.dM,A.dO,A.dP,A.dQ,A.dR,A.dS,A.dT,A.dU,A.dV,A.dW,A.dX,A.dZ,A.e_,A.e0,A.e1,A.e2,A.e3,A.e4,A.e5,A.eb,A.ec,A.ed,A.ee,A.ef,A.ek,A.el,A.em,A.en])
r(A.aM,A.bb)
r(A.bq,A.af)
q(A.cs,[A.cm,A.aF])
r(A.cw,A.b2)
r(A.bn,A.G)
q(A.bn,[A.bg,A.cy])
q(A.c4,[A.fp,A.eV,A.et,A.fg,A.fa,A.fb,A.eJ])
r(A.bN,A.cB)
q(A.c3,[A.eM,A.eN,A.fd,A.eR,A.eY,A.eW,A.eT,A.eX,A.eS,A.f0,A.f_,A.eZ,A.eC,A.fk,A.f4,A.cY,A.cZ])
q(A.bB,[A.bA,A.bM])
r(A.cI,A.bR)
r(A.bJ,A.bS)
r(A.bF,A.bJ)
r(A.bk,A.bH)
r(A.ep,A.co)
q(A.a3,[A.bs,A.cc])
q(A.o,[A.h,A.aS])
q(A.h,[A.q,A.Z,A.ap,A.aT])
q(A.q,[A.f,A.c])
q(A.f,[A.aD,A.c1,A.aE,A.am,A.aG,A.an,A.aK,A.cb,A.as,A.ba,A.au,A.cl,A.aw,A.by,A.cq,A.cr,A.aQ,A.ax])
r(A.b5,A.cz)
q(A.b,[A.ao,A.a0])
r(A.b9,A.ap)
q(A.a0,[A.P,A.a6])
r(A.H,A.bk)
r(A.cH,A.cG)
r(A.bo,A.cH)
r(A.cS,A.cR)
r(A.bI,A.cS)
r(A.cA,A.cy)
r(A.bD,A.bx)
r(A.bC,A.bD)
r(A.cC,A.cn)
r(A.cM,A.bK)
r(A.f9,A.f8)
r(A.eI,A.eH)
r(A.aN,A.c)
q(A.aH,[A.b8,A.bt])
s(A.bH,A.F)
s(A.bS,A.bu)
s(A.cz,A.eh)
s(A.cG,A.F)
s(A.cH,A.a_)
s(A.cR,A.F)
s(A.cS,A.a_)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{a9:"int",Y:"double",x:"num",n:"String",M:"bool",D:"Null",T:"List"},mangledNames:{},types:["~(b)","~()","~(P)","~(~())","D(@)","D()","~(x)","M(W)","M(n)","~(@)","~(a6)","x(x)","M(q,n,n,az)","0^(0^,0^)<x>","@(@)","@(@,n)","@(n)","D(~())","D(v,aO)","I<@>(@)","~(v?,v?)","M(h)","n(n)","~(h,h?)","~(@,@)","D(@,@)","@(@,@)","Y(x)","a9(x)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti")}
A.jd(v.typeUniverse,JSON.parse('{"cj":"ae","aR":"ae","a5":"ae","kb":"b","ki":"b","ka":"c","kj":"c","kc":"f","kk":"f","km":"h","kh":"h","ky":"ap","kl":"P","kf":"a0","ke":"Z","kn":"Z","cd":{"M":[]},"be":{"D":[]},"ae":{"h8":[]},"C":{"T":["1"],"t":["1"]},"eo":{"C":["1"],"T":["1"],"t":["1"]},"b1":{"N":["1"]},"bf":{"Y":[],"x":[]},"bd":{"Y":[],"a9":[],"x":[]},"ce":{"Y":[],"x":[]},"at":{"n":[],"hd":[]},"bh":{"u":[]},"b6":{"t":["1"]},"U":{"t":["1"]},"av":{"N":["1"]},"V":{"U":["2"],"t":["2"],"U.E":"2","t.E":"2"},"ay":{"t":["1"],"t.E":"1"},"bz":{"N":["1"]},"bb":{"E":[],"a4":[]},"aM":{"E":[],"a4":[]},"bq":{"af":[],"u":[]},"cg":{"u":[]},"cu":{"u":[]},"bL":{"aO":[]},"E":{"a4":[]},"c3":{"E":[],"a4":[]},"c4":{"E":[],"a4":[]},"cs":{"E":[],"a4":[]},"cm":{"E":[],"a4":[]},"aF":{"E":[],"a4":[]},"ck":{"u":[]},"cw":{"u":[]},"bg":{"G":["1","2"],"bm":["1","2"],"G.K":"1","G.V":"2"},"bi":{"t":["1"],"t.E":"1"},"bj":{"N":["1"]},"cB":{"u":[]},"bN":{"af":[],"u":[]},"I":{"ar":["1"]},"cN":{"iT":[]},"b3":{"u":[]},"bA":{"bB":["1"]},"bM":{"bB":["1"]},"bR":{"ho":[]},"cI":{"bR":[],"ho":[]},"bF":{"bu":["1"],"hj":["1"],"t":["1"]},"bG":{"N":["1"]},"bk":{"F":["1"],"T":["1"],"t":["1"]},"bn":{"G":["1","2"],"bm":["1","2"]},"G":{"bm":["1","2"]},"bJ":{"bu":["1"],"hj":["1"],"t":["1"]},"Y":{"x":[]},"a9":{"x":[]},"n":{"hd":[]},"b2":{"u":[]},"af":{"u":[]},"ch":{"u":[]},"a3":{"u":[]},"bs":{"u":[]},"cc":{"u":[]},"cv":{"u":[]},"ct":{"u":[]},"aP":{"u":[]},"c5":{"u":[]},"ci":{"u":[]},"bv":{"u":[]},"c7":{"u":[]},"cK":{"aO":[]},"q":{"h":[],"o":[]},"P":{"b":[]},"h":{"o":[]},"a6":{"b":[]},"az":{"W":[]},"f":{"q":[],"h":[],"o":[]},"aD":{"q":[],"h":[],"o":[]},"c1":{"q":[],"h":[],"o":[]},"aE":{"q":[],"h":[],"o":[]},"am":{"q":[],"h":[],"o":[]},"aG":{"q":[],"h":[],"o":[]},"an":{"q":[],"h":[],"o":[]},"Z":{"h":[],"o":[]},"ao":{"b":[]},"aK":{"q":[],"h":[],"o":[]},"ap":{"h":[],"o":[]},"cb":{"q":[],"h":[],"o":[]},"b9":{"h":[],"o":[]},"as":{"q":[],"h":[],"o":[]},"ba":{"hf":[],"q":[],"h":[],"o":[]},"au":{"q":[],"h":[],"o":[]},"H":{"F":["h"],"T":["h"],"t":["h"],"F.E":"h"},"bo":{"F":["h"],"a_":["h"],"T":["h"],"cf":["h"],"t":["h"],"F.E":"h","a_.E":"h"},"cl":{"q":[],"h":[],"o":[]},"aw":{"q":[],"h":[],"o":[]},"by":{"q":[],"h":[],"o":[]},"cq":{"q":[],"h":[],"o":[]},"cr":{"q":[],"h":[],"o":[]},"aQ":{"q":[],"h":[],"o":[]},"ax":{"q":[],"h":[],"o":[]},"a0":{"b":[]},"aS":{"o":[]},"aT":{"h":[],"o":[]},"bI":{"F":["h"],"a_":["h"],"T":["h"],"cf":["h"],"t":["h"],"F.E":"h","a_.E":"h"},"cy":{"G":["n","n"],"bm":["n","n"]},"cA":{"G":["n","n"],"bm":["n","n"],"G.K":"n","G.V":"n"},"bD":{"bx":["1"]},"bC":{"bD":["1"],"bx":["1"]},"bp":{"W":[]},"bK":{"W":[]},"cM":{"W":[]},"cL":{"W":[]},"aq":{"N":["1"]},"cJ":{"iU":[]},"bQ":{"iF":[]},"aN":{"c":[],"q":[],"h":[],"o":[]},"c":{"q":[],"h":[],"o":[]},"b8":{"aH":[]},"bt":{"aH":[]}}'))
A.jc(v.typeUniverse,JSON.parse('{"b6":1,"cn":1,"co":2,"bk":1,"bn":2,"bJ":1,"bH":1,"bS":1}'))
var u={c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type"}
var t=(function rtii(){var s=A.aZ
return{n:s("b3"),k:s("aE"),t:s("am"),D:s("aG"),q:s("an"),h:s("ao"),Q:s("q"),R:s("u"),B:s("b"),Y:s("a4"),d:s("ar<@>"),u:s("aM<Y>"),cH:s("t<h>"),bi:s("t<@>"),i:s("C<W>"),s:s("C<n>"),w:s("C<Y>"),ce:s("C<@>"),c4:s("C<a9>"),d7:s("C<x>"),T:s("be"),m:s("h8"),g:s("a5"),p:s("cf<@>"),S:s("au"),j:s("T<@>"),r:s("T<x>"),at:s("bl"),f:s("bm<@,@>"),cw:s("V<n,n>"),cY:s("V<x,Y>"),V:s("P"),A:s("h"),e:s("W"),P:s("D"),K:s("v"),ck:s("aN"),l:s("aO"),N:s("n"),bm:s("n(n)"),bM:s("c"),bg:s("aQ"),U:s("a6"),b7:s("af"),cr:s("aR"),x:s("aT"),ba:s("H"),W:s("bC<P>"),bq:s("bC<a6>"),c:s("I<@>"),aQ:s("I<a9>"),aa:s("I<x>"),G:s("az"),d1:s("bM<x>"),y:s("M"),bG:s("M(v)"),cb:s("Y"),ad:s("Y(x)"),z:s("@"),O:s("@()"),v:s("@(v)"),C:s("@(v,aO)"),a:s("@(@,@)"),bL:s("a9"),I:s("0&*"),_:s("v*"),bc:s("ar<D>?"),X:s("v?"),F:s("bE<@,@>?"),L:s("cF?"),E:s("@(b)?"),Z:s("~()?"),b:s("~(b)?"),H:s("x"),o:s("~"),M:s("~()"),aV:s("~(n,n)"),J:s("~(x)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.z=A.aD.prototype
B.p=A.am.prototype
B.l=A.an.prototype
B.t=A.b4.prototype
B.a=A.ao.prototype
B.L=A.c9.prototype
B.P=A.b9.prototype
B.k=A.as.prototype
B.e=A.ba.prototype
B.Q=J.bc.prototype
B.b=J.C.prototype
B.f=J.bd.prototype
B.c=J.bf.prototype
B.i=J.at.prototype
B.R=J.a5.prototype
B.S=J.O.prototype
B.d=A.au.prototype
B.v=J.cj.prototype
B.w=A.aw.prototype
B.x=A.by.prototype
B.n=A.ax.prototype
B.o=J.aR.prototype
B.y=A.aS.prototype
B.A=new A.aM(A.k1(),t.u)
B.B=new A.aM(A.k2(),t.u)
B.q=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.C=function() {
  var toStringFunction = Object.prototype.toString;
  function getTag(o) {
    var s = toStringFunction.call(o);
    return s.substring(8, s.length - 1);
  }
  function getUnknownTag(object, tag) {
    if (/^HTML[A-Z].*Element$/.test(tag)) {
      var name = toStringFunction.call(object);
      if (name == "[object Object]") return null;
      return "HTMLElement";
    }
  }
  function getUnknownTagGenericBrowser(object, tag) {
    if (self.HTMLElement && object instanceof HTMLElement) return "HTMLElement";
    return getUnknownTag(object, tag);
  }
  function prototypeForTag(tag) {
    if (typeof window == "undefined") return null;
    if (typeof window[tag] == "undefined") return null;
    var constructor = window[tag];
    if (typeof constructor != "function") return null;
    return constructor.prototype;
  }
  function discriminator(tag) { return null; }
  var isBrowser = typeof navigator == "object";
  return {
    getTag: getTag,
    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,
    prototypeForTag: prototypeForTag,
    discriminator: discriminator };
}
B.H=function(getTagFallback) {
  return function(hooks) {
    if (typeof navigator != "object") return hooks;
    var ua = navigator.userAgent;
    if (ua.indexOf("DumpRenderTree") >= 0) return hooks;
    if (ua.indexOf("Chrome") >= 0) {
      function confirm(p) {
        return typeof window == "object" && window[p] && window[p].name == p;
      }
      if (confirm("Window") && confirm("HTMLElement")) return hooks;
    }
    hooks.getTag = getTagFallback;
  };
}
B.D=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.E=function(hooks) {
  var getTag = hooks.getTag;
  var prototypeForTag = hooks.prototypeForTag;
  function getTagFixed(o) {
    var tag = getTag(o);
    if (tag == "Document") {
      if (!!o.xmlVersion) return "!Document";
      return "!HTMLDocument";
    }
    return tag;
  }
  function prototypeForTagFixed(tag) {
    if (tag == "Document") return null;
    return prototypeForTag(tag);
  }
  hooks.getTag = getTagFixed;
  hooks.prototypeForTag = prototypeForTagFixed;
}
B.G=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Firefox") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "GeoGeolocation": "Geolocation",
    "Location": "!Location",
    "WorkerMessageEvent": "MessageEvent",
    "XMLDocument": "!Document"};
  function getTagFirefox(o) {
    var tag = getTag(o);
    return quickMap[tag] || tag;
  }
  hooks.getTag = getTagFirefox;
}
B.F=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Trident/") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "HTMLDDElement": "HTMLElement",
    "HTMLDTElement": "HTMLElement",
    "HTMLPhraseElement": "HTMLElement",
    "Position": "Geoposition"
  };
  function getTagIE(o) {
    var tag = getTag(o);
    var newTag = quickMap[tag];
    if (newTag) return newTag;
    if (tag == "Object") {
      if (window.DataView && (o instanceof window.DataView)) return "DataView";
    }
    return tag;
  }
  function prototypeForTagIE(tag) {
    var constructor = window[tag];
    if (constructor == null) return null;
    return constructor.prototype;
  }
  hooks.getTag = getTagIE;
  hooks.prototypeForTag = prototypeForTagIE;
}
B.r=function(hooks) { return hooks; }

B.I=new A.ep()
B.J=new A.ci()
B.X=new A.eA()
B.j=new A.f2()
B.h=new A.cI()
B.K=new A.cK()
B.M=new A.aL(0)
B.N=new A.aL(1e5)
B.O=new A.aL(5e5)
B.T=A.B(s(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),t.s)
B.U=A.B(s(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),t.s)
B.V=A.B(s([]),t.s)
B.u=A.B(s(["bind","if","ref","repeat","syntax"]),t.s)
B.m=A.B(s(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),t.s)
B.W=A.k9("v")})();(function staticFields(){$.f3=null
$.he=null
$.h1=null
$.h0=null
$.hO=null
$.hL=null
$.hU=null
$.fl=null
$.fr=null
$.fU=null
$.aW=null
$.bU=null
$.bV=null
$.fN=!1
$.z=B.h
$.S=A.B([],A.aZ("C<v>"))
$.ad=null
$.fy=null
$.h5=null
$.h4=null
$.cE=A.ha(t.N,t.Y)
$.al=1
$.ac=1
$.hA=A.iZ("bcbc")})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal
s($,"kg","hX",()=>A.jO("_$dart_dartClosure"))
s($,"ko","hY",()=>A.a7(A.eE({
toString:function(){return"$receiver$"}})))
s($,"kp","hZ",()=>A.a7(A.eE({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"kq","i_",()=>A.a7(A.eE(null)))
s($,"kr","i0",()=>A.a7(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"ku","i3",()=>A.a7(A.eE(void 0)))
s($,"kv","i4",()=>A.a7(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"kt","i2",()=>A.a7(A.hn(null)))
s($,"ks","i1",()=>A.a7(function(){try{null.$method$}catch(r){return r.message}}()))
s($,"kx","i6",()=>A.a7(A.hn(void 0)))
s($,"kw","i5",()=>A.a7(function(){try{(void 0).$method$}catch(r){return r.message}}()))
s($,"kz","fW",()=>A.iV())
s($,"kK","i8",()=>A.hS(B.W))
s($,"kA","i7",()=>A.hb(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],t.N))
s($,"kd","hW",()=>{var r,q,p,o
A.k()
A.k()
A.k()
A.k()
A.k()
A.k()
A.k()
A.k()
A.k()
A.k()
A.k()
A.k()
A.k()
A.k()
A.k()
A.k()
A.k()
A.k()
A.k()
A.k()
A.k()
A.k()
A.k()
A.k()
A.k()
A.k()
A.k()
A.k()
A.k()
A.k()
A.k()
A.k()
A.k()
A.k()
A.k()
A.k()
A.k()
A.k()
A.k()
A.k()
A.k()
A.k()
A.k()
A.k()
A.k()
A.k()
A.k()
A.k()
A.k()
A.k()
A.k()
A.k()
A.k()
A.k()
A.k()
A.k()
A.k()
A.k()
A.k()
A.k()
r=t.D
q=A.aZ("hf")
p=A.aZ("ax")
o=A.aZ("aK")
return new A.c2(r.a(A.y("#saveBtn")),r.a(A.y("#cancelBtn")),q.a(A.y("#sizeSD")),q.a(A.y("#sizeHD")),q.a(A.y("#sizeFHD")),q.a(A.y("#sizeUHD")),r.a(A.y("#resumeBtn")),r.a(A.y("#exportBtn")),r.a(A.y("#importBtn")),p.a(A.y("#exportArea")),p.a(A.y("#importArea")),r.a(A.y("#toPanel1")),r.a(A.y("#toPanel2")),r.a(A.y("#toPanel3")),r.a(A.y("#toPanel4")),q.a(A.y("#speed1")),q.a(A.y("#speed2")),q.a(A.y("#speed3")),q.a(A.y("#speed4")),t.S.a(A.y("#promptVar")),A.aZ("aw").a(A.y("#promptFps")),o.a(A.y("#panel1")),o.a(A.y("#panel2")),o.a(A.y("#panel3")),o.a(A.y("#panel4")),A.aZ("as").a(A.y("#theSnap")),A.iq().a)})})();(function nativeSupport(){!function(){var s=function(a){var m={}
m[a]=1
return Object.keys(hunkHelpers.convertToFastObject(m))[0]}
v.getIsolateTag=function(a){return s("___dart_"+a+v.isolateTag)}
var r="___dart_isolate_tags_"
var q=Object[r]||(Object[r]=Object.create(null))
var p="_ZxYxX"
for(var o=0;;o++){var n=s(p+"_"+o+"_")
if(!(n in q)){q[n]=1
v.isolateTag=n
break}}v.dispatchPropertyName=v.getIsolateTag("dispatch_record")}()
hunkHelpers.setOrUpdateInterceptorsByTag({DOMError:J.O,MediaError:J.O,Navigator:J.O,NavigatorConcurrentHardware:J.O,NavigatorUserMediaError:J.O,OverconstrainedError:J.O,PositionError:J.O,GeolocationPositionError:J.O,Range:J.O,HTMLAudioElement:A.f,HTMLBRElement:A.f,HTMLContentElement:A.f,HTMLDListElement:A.f,HTMLDataElement:A.f,HTMLDataListElement:A.f,HTMLDetailsElement:A.f,HTMLDialogElement:A.f,HTMLEmbedElement:A.f,HTMLFieldSetElement:A.f,HTMLHRElement:A.f,HTMLHeadElement:A.f,HTMLHeadingElement:A.f,HTMLHtmlElement:A.f,HTMLIFrameElement:A.f,HTMLLIElement:A.f,HTMLLegendElement:A.f,HTMLLinkElement:A.f,HTMLMapElement:A.f,HTMLMediaElement:A.f,HTMLMenuElement:A.f,HTMLMetaElement:A.f,HTMLMeterElement:A.f,HTMLModElement:A.f,HTMLOListElement:A.f,HTMLObjectElement:A.f,HTMLOptGroupElement:A.f,HTMLOptionElement:A.f,HTMLOutputElement:A.f,HTMLParagraphElement:A.f,HTMLParamElement:A.f,HTMLPictureElement:A.f,HTMLPreElement:A.f,HTMLProgressElement:A.f,HTMLQuoteElement:A.f,HTMLScriptElement:A.f,HTMLShadowElement:A.f,HTMLSlotElement:A.f,HTMLSourceElement:A.f,HTMLStyleElement:A.f,HTMLTableCaptionElement:A.f,HTMLTableCellElement:A.f,HTMLTableDataCellElement:A.f,HTMLTableHeaderCellElement:A.f,HTMLTableColElement:A.f,HTMLTimeElement:A.f,HTMLTitleElement:A.f,HTMLTrackElement:A.f,HTMLUListElement:A.f,HTMLUnknownElement:A.f,HTMLVideoElement:A.f,HTMLDirectoryElement:A.f,HTMLFontElement:A.f,HTMLFrameElement:A.f,HTMLFrameSetElement:A.f,HTMLMarqueeElement:A.f,HTMLElement:A.f,HTMLAnchorElement:A.aD,HTMLAreaElement:A.c1,HTMLBaseElement:A.aE,HTMLBodyElement:A.am,HTMLButtonElement:A.aG,HTMLCanvasElement:A.an,CanvasRenderingContext2D:A.b4,CDATASection:A.Z,CharacterData:A.Z,Comment:A.Z,ProcessingInstruction:A.Z,Text:A.Z,CSSStyleDeclaration:A.b5,MSStyleCSSProperties:A.b5,CSS2Properties:A.b5,CustomEvent:A.ao,HTMLDivElement:A.aK,XMLDocument:A.ap,Document:A.ap,DOMException:A.ei,DOMImplementation:A.c9,Element:A.q,AbortPaymentEvent:A.b,AnimationEvent:A.b,AnimationPlaybackEvent:A.b,ApplicationCacheErrorEvent:A.b,BackgroundFetchClickEvent:A.b,BackgroundFetchEvent:A.b,BackgroundFetchFailEvent:A.b,BackgroundFetchedEvent:A.b,BeforeInstallPromptEvent:A.b,BeforeUnloadEvent:A.b,BlobEvent:A.b,CanMakePaymentEvent:A.b,ClipboardEvent:A.b,CloseEvent:A.b,DeviceMotionEvent:A.b,DeviceOrientationEvent:A.b,ErrorEvent:A.b,ExtendableEvent:A.b,ExtendableMessageEvent:A.b,FetchEvent:A.b,FontFaceSetLoadEvent:A.b,ForeignFetchEvent:A.b,GamepadEvent:A.b,HashChangeEvent:A.b,InstallEvent:A.b,MediaEncryptedEvent:A.b,MediaKeyMessageEvent:A.b,MediaQueryListEvent:A.b,MediaStreamEvent:A.b,MediaStreamTrackEvent:A.b,MessageEvent:A.b,MIDIConnectionEvent:A.b,MIDIMessageEvent:A.b,MutationEvent:A.b,NotificationEvent:A.b,PageTransitionEvent:A.b,PaymentRequestEvent:A.b,PaymentRequestUpdateEvent:A.b,PopStateEvent:A.b,PresentationConnectionAvailableEvent:A.b,PresentationConnectionCloseEvent:A.b,ProgressEvent:A.b,PromiseRejectionEvent:A.b,PushEvent:A.b,RTCDataChannelEvent:A.b,RTCDTMFToneChangeEvent:A.b,RTCPeerConnectionIceEvent:A.b,RTCTrackEvent:A.b,SecurityPolicyViolationEvent:A.b,SensorErrorEvent:A.b,SpeechRecognitionError:A.b,SpeechRecognitionEvent:A.b,SpeechSynthesisEvent:A.b,StorageEvent:A.b,SyncEvent:A.b,TrackEvent:A.b,TransitionEvent:A.b,WebKitTransitionEvent:A.b,VRDeviceEvent:A.b,VRDisplayEvent:A.b,VRSessionEvent:A.b,MojoInterfaceRequestEvent:A.b,ResourceProgressEvent:A.b,USBConnectionEvent:A.b,IDBVersionChangeEvent:A.b,AudioProcessingEvent:A.b,OfflineAudioCompletionEvent:A.b,WebGLContextEvent:A.b,Event:A.b,InputEvent:A.b,SubmitEvent:A.b,EventTarget:A.o,HTMLFormElement:A.cb,HTMLDocument:A.b9,HTMLImageElement:A.as,HTMLInputElement:A.ba,HTMLLabelElement:A.au,Location:A.bl,MouseEvent:A.P,DragEvent:A.P,PointerEvent:A.P,WheelEvent:A.P,DocumentFragment:A.h,ShadowRoot:A.h,DocumentType:A.h,Node:A.h,NodeList:A.bo,RadioNodeList:A.bo,HTMLSelectElement:A.cl,HTMLSpanElement:A.aw,HTMLTableElement:A.by,HTMLTableRowElement:A.cq,HTMLTableSectionElement:A.cr,HTMLTemplateElement:A.aQ,HTMLTextAreaElement:A.ax,TouchEvent:A.a6,CompositionEvent:A.a0,FocusEvent:A.a0,KeyboardEvent:A.a0,TextEvent:A.a0,UIEvent:A.a0,Window:A.aS,DOMWindow:A.aS,Attr:A.aT,NamedNodeMap:A.bI,MozNamedAttrMap:A.bI,SVGScriptElement:A.aN,SVGAElement:A.c,SVGAnimateElement:A.c,SVGAnimateMotionElement:A.c,SVGAnimateTransformElement:A.c,SVGAnimationElement:A.c,SVGCircleElement:A.c,SVGClipPathElement:A.c,SVGDefsElement:A.c,SVGDescElement:A.c,SVGDiscardElement:A.c,SVGEllipseElement:A.c,SVGFEBlendElement:A.c,SVGFEColorMatrixElement:A.c,SVGFEComponentTransferElement:A.c,SVGFECompositeElement:A.c,SVGFEConvolveMatrixElement:A.c,SVGFEDiffuseLightingElement:A.c,SVGFEDisplacementMapElement:A.c,SVGFEDistantLightElement:A.c,SVGFEFloodElement:A.c,SVGFEFuncAElement:A.c,SVGFEFuncBElement:A.c,SVGFEFuncGElement:A.c,SVGFEFuncRElement:A.c,SVGFEGaussianBlurElement:A.c,SVGFEImageElement:A.c,SVGFEMergeElement:A.c,SVGFEMergeNodeElement:A.c,SVGFEMorphologyElement:A.c,SVGFEOffsetElement:A.c,SVGFEPointLightElement:A.c,SVGFESpecularLightingElement:A.c,SVGFESpotLightElement:A.c,SVGFETileElement:A.c,SVGFETurbulenceElement:A.c,SVGFilterElement:A.c,SVGForeignObjectElement:A.c,SVGGElement:A.c,SVGGeometryElement:A.c,SVGGraphicsElement:A.c,SVGImageElement:A.c,SVGLineElement:A.c,SVGLinearGradientElement:A.c,SVGMarkerElement:A.c,SVGMaskElement:A.c,SVGMetadataElement:A.c,SVGPathElement:A.c,SVGPatternElement:A.c,SVGPolygonElement:A.c,SVGPolylineElement:A.c,SVGRadialGradientElement:A.c,SVGRectElement:A.c,SVGSetElement:A.c,SVGStopElement:A.c,SVGStyleElement:A.c,SVGSVGElement:A.c,SVGSwitchElement:A.c,SVGSymbolElement:A.c,SVGTSpanElement:A.c,SVGTextContentElement:A.c,SVGTextElement:A.c,SVGTextPathElement:A.c,SVGTextPositioningElement:A.c,SVGTitleElement:A.c,SVGUseElement:A.c,SVGViewElement:A.c,SVGGradientElement:A.c,SVGComponentTransferFunctionElement:A.c,SVGFEDropShadowElement:A.c,SVGMPathElement:A.c,SVGElement:A.c})
hunkHelpers.setOrUpdateLeafTags({DOMError:true,MediaError:true,Navigator:true,NavigatorConcurrentHardware:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,GeolocationPositionError:true,Range:true,HTMLAudioElement:true,HTMLBRElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLLIElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CustomEvent:true,HTMLDivElement:true,XMLDocument:true,Document:false,DOMException:true,DOMImplementation:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,EventTarget:false,HTMLFormElement:true,HTMLDocument:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLabelElement:true,Location:true,MouseEvent:true,DragEvent:true,PointerEvent:true,WheelEvent:true,DocumentFragment:true,ShadowRoot:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,HTMLSelectElement:true,HTMLSpanElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,TouchEvent:true,CompositionEvent:true,FocusEvent:true,KeyboardEvent:true,TextEvent:true,UIEvent:false,Window:true,DOMWindow:true,Attr:true,NamedNodeMap:true,MozNamedAttrMap:true,SVGScriptElement:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false})})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q)s[q].removeEventListener("load",onLoad,false)
a(b.target)}for(var r=0;r<s.length;++r)s[r].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
var s=A.k_
if(typeof dartMainRunner==="function")dartMainRunner(s,[])
else s([])})})()
//# sourceMappingURL=main.dart.js.map
